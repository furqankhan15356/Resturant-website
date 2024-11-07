import Image from "next/image";

export default function Team() {
  return (
    <main className="bg-[#B7BCA9] py-20 px-5 sm:px-10 overflow-hidden">
      {/* Heading Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 p-6 sm:p-11 lg:pl-36">
        <img 
          src="/Heading (2).png" 
          alt="team" 
          className="mx-auto lg:mx-0 max-w-full" 
        />
        <div>
          <h1 className="text-[10px] sm:text-sm text-center lg:text-left text-slate-900">
            In velit auctor non auctor in. Id pellentesque facilisis at lectus
            sed in sit <br /> tellus mauris.
          </h1>
        </div>
      </div>

      {/* Team Items Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 px-5 lg:pl-32">
        <Image
          src="/Team-item.png"
          height={300}
          width={250}
          className="transition-transform hover:scale-110 mx-auto rounded-xl"
          alt="team member"
        />
        <Image
          src="/Team-item (1).png"
          height={300}
          width={250}
          className="transition-transform hover:scale-110 mx-auto rounded-xl"
          alt="team member"
        />
        <Image
          src="/Team-item (2).png"
          height={300}
          width={250}
          className="transition-transform hover:scale-110 mx-auto rounded-xl"
          alt="team member"
        />
        <Image
          src="/Team-item (3).png"
          height={300}
          width={250}
          className="transition-transform hover:scale-110 mx-auto rounded-xl"
          alt="team member"
        />
      </div>
    </main>
  );
}