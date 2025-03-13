import CaseSampleSection from "@/components/CaseSample";
import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import UserAvatars from "@/components/UserAvatars";
import UserRatings from "@/components/UserRatings";
import { caseImageUrl } from "@/lib/constant";
import { userReviews } from "@/lib/constant";
import { Check } from "lucide-react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="bg-slate-50 grainy-light">
      {/* Hero Section */}
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
                <Image
                  src="/snake-1.png"
                  alt="logo"
                  className="w-full"
                  width={633}
                  height={824}
                />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-green-600 px-2 text-white">Custom</span>{" "}
                Phone Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favorite memories with your own,{" "}
                <span className="font-semibold">one-of-one</span> phone case.
                CasePixel allows you to protect your memories, not just your
                phone case.
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  {[
                    "High-quality, durable material",
                    "5 year print guarantee",
                    "Modern iPhone models supported",
                  ].map((checklist, index) => (
                    <li
                      className="flex gap-1.5 items-center text-left"
                      key={index}
                    >
                      <Check
                        className="h-5 w-5 shrink-0 text-green-600"
                        key={index}
                      />
                      {checklist}
                    </li>
                  ))}
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <UserAvatars />

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <UserRatings />
                  </div>

                  <p>
                    <span className="font-semibold">2000+</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <Image
                src="/your-image.png"
                alt="your-image-text"
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
                width={619}
                height={428}
              />
              <Image
                src="/line.png"
                alt="dash-line"
                className="absolute w-20 -left-6 -bottom-6 select-none"
                width={339}
                height={608}
              />
              <Phone className="w-64" imgSrc={caseImageUrl} />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Review Section */}
      <section className="bg-slate-100 grainy-dark py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              What our{" "}
              <span className="relative px-2">
                customers{" "}
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
              </span>{" "}
              say
            </h2>
            <Image
              src="/snake-2.png"
              alt="snake-2"
              width={761}
              height={675}
              className="w-24 order-0 lg:order-2"
            />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            {userReviews.map((review) => (
              <div
                key={review.id}
                className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20"
              >
                <div className="flex gap-0.5 mb-2">
                  <UserRatings />
                </div>
                <div className="text-lg leading-8">
                  <p>
                    &quot;{review.beforeSpanText}
                    <span className="p-0.5 bg-slate-800 text-white">
                      {review.spanText}
                    </span>
                    {review.afterSpanText}&quot;
                  </p>
                </div>
                <div className="flex gap-4 mt-2">
                  <Image
                    className="rounded-full h-12 w-12 object-cover"
                    width={96}
                    height={96}
                    src={review.profileUrl}
                    alt={review.username}
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold">{review.username}</p>
                    <div className="flex gap-1.5 items-center text-zinc-600">
                      <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                      <p className="text-sm">Verified Purchase</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>

        {/* Product Sample Section */}
        <div className="pt-16">
          <CaseSampleSection />
        </div>
      </section>
    </div>
  );
}
