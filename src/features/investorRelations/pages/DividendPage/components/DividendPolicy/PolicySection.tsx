import Image from "next/image";

interface PolicySectionProps {
  imageUrl: string;
  title: string;
  content: string;
  reverse?: boolean;
}

export function PolicySection({
                         imageUrl,
                         title,
                         content,
                         reverse = false,
                       }: PolicySectionProps) {
  return (
    <section
      className={`flex flex-col items-center justify-center gap-5 md:gap-[50px] md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >

      {/* Circle Image */}
      <div
        className={`relative flex-shrink-0  rounded-full bg-gradient-to-b w-[350px] h-[353px]  md:w-[419px] md:h-[422px]  flex items-center justify-center`}
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-contain"
        />

      </div>

      {/* Text */}
      <div className="max-w-[545px] text-center md:text-left">
        <h2 className="text-xl font-normal text-navy flex items-center gap-2 mb-3">
          {title}
        </h2>
        <div className='flex mb-5'>
          <div className="w-[15px] h-[5px] bg-blue-300"></div>
          <div className="w-[15px] h-[5px] bg-red-300"></div>
        </div>
        <p className="text-darkGray font-light max-w-[575px]">{content}</p>
      </div>
    </section>
  );
}