"use client";

import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useInView } from "framer-motion";
import { HTMLAttributes, useEffect, useRef, useState } from "react";
import { POSSIBLE_ANIMATION_DELAYS, SAMPLE_CASES } from "@/lib/constant";
import { cn, splitArray } from "@/lib/utils";
import Phone from "./Phone";

interface SampleProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
}

const SampleCase = ({ imgSrc, className, ...props }: SampleProps) => {
  const animationDelay =
    POSSIBLE_ANIMATION_DELAYS[
      Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)
    ];

  return (
    <div
      className={cn(
        "animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5",
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <Phone imgSrc={imgSrc} />
    </div>
  );
};

const SampleColumn = ({
  samples,
  className,
  sampleClassName,
  msPerPixel = 0,
}: {
  samples: string[];
  className?: string;
  sampleClassName?: (sampleIndex: number) => string;
  msPerPixel?: number;
}) => {
  const columnRef = useRef<HTMLDivElement | null>(null);
  const [columnHeight, setColumnHeight] = useState(0);
  const duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    if (!columnRef.current) return;

    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={cn("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {samples.concat(samples).map((sampleCaseUrl, index) => (
        <SampleCase
          key={index}
          className={sampleClassName?.(index % samples.length)}
          imgSrc={sampleCaseUrl}
        />
      ))}
    </div>
  );
};

const SampleGrid = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  const columns = splitArray(SAMPLE_CASES, 3);

  const column1 = columns[0];
  const column2 = columns[1];
  const column3 = splitArray(columns[2], 2);

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView ? (
        <>
          <SampleColumn
            samples={[...column1, ...column3.flat(), ...column2]}
            msPerPixel={10}
            sampleClassName={(sampleIndex) =>
              cn({
                "md:hidden": sampleIndex >= column1.length + column3[0].length,
                "lg:hidden": sampleIndex >= column1.length,
              })
            }
          />
          <SampleColumn
            samples={[...column2, ...column3[1]]}
            className="hidden md:block"
            msPerPixel={15}
            sampleClassName={(sampleIndex) =>
              sampleIndex >= column2.length ? "lg:hidden" : ""
            }
          />
          <SampleColumn
            samples={column3.flat()}
            className="hidden md:block"
            msPerPixel={10}
          />
        </>
      ) : null}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-100" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100" />
    </div>
  );
};

const CaseSampleSection = () => {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <Image
        aria-hidden="true"
        src="/what-people-are-buying.png"
        alt="what-people-are-buying"
        className="absolute select-none hidden xl:block -left-32 top-1/3"
        width={193}
        height={143}
      />
      <SampleGrid />
    </MaxWidthWrapper>
  );
};

export default CaseSampleSection;
