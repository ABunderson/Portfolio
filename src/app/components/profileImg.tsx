import Image from 'next/image';

type ImgProps = {
  gradient: boolean;
};

export const ProfileImg = ({ gradient }: ImgProps) => {
  const background = gradient
    ? 'bg-gradient-to-t from-white via-th-green to-th-purple'
    : 'bg-th-purple';

  return (
    <div
      className={`w-full max-w-[400px] h-full max-h-[400px] p-[10px] aspect-square rounded-lg flex-shrink-0 ${background}`}
    >
      <div className="w-full h-full relative rounded-lg overflow-hidden bg-white ">
        <Image
          src="/abProfile.jpg"
          alt="Profile image"
          fill
          sizes="(max-width: 640px) 100vw, 400px"
          className="object-cover rounded-lg"
          priority
        />
      </div>
    </div>
  );
};
