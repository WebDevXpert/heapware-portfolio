import Image from "next/image";

const Mission = () => {
  return (
    <section
      id="mission"
      className="relative bg-fixed flex flex-col lg:flex-row items-center justify-between bg-black text-white py-12 px-6 lg:px-24 bg-[url('/teal-bg.jpeg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black"></div>
      <div className="relative z-10 max-w-4xl text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl tracking-wide font-bold mb-4">
          <span className="text-teal-400">Mission</span> is to{" "}
          <span className="text-teal-400">Protect</span>
          &nbsp;Your Businesses & Much More
        </h1>
        <button className="bg-transparent text-[#2DD4BF] border-2 border-[#2DD4BF] py-2 px-4 rounded mt-4 transition transform duration-300 ease-in-out hover:bg-[#2DD4BF] hover:text-black hover:scale-105">
          Discover More
        </button>
      </div>
      <div className="relative z-10 hidden lg:block">
        <Image
          src="/p1.png" // Update the path to the actual image
          alt="Hero Image"
          width={600}
          height={600}
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default Mission;
