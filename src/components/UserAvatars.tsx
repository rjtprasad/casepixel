
const avatars = [
    "/users/user-1.png",
    "/users/user-2.png",
    "/users/user-3.png",
    "/users/user-4.jpg",
    "/users/user-5.jpg",
  ];

const UserAvatars = () => {
  return (
    <div className="flex -space-x-4">
      {avatars.map((src, index) => (
        <img
          key={index}
          className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
          src={src}
          alt="user image"
        />
      ))}
    </div>
  );
};

export default UserAvatars;
