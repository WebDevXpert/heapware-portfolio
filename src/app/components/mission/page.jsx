import Image from "next/image";

const Mission = () => {
  return (
    <div className="bg-white">
      <section
        id="mission"
        className="relative bg-fixed flex w-[90%] m-auto flex-col lg:flex-row items-center justify-between bg-white text-gray-900 py-12 "
      >
        <div className=" relative z-10  text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl tracking-wide font-bold mb-4">
            <span className="text-teal-500">Mission</span> is to{" "}
            <span className="text-teal-500">Protect</span>
            &nbsp;Your Businesses & Much More
          </h1>
          <button className="bg-transparent text-teal-500 border-2 border-teal-500 py-2 px-4 rounded mt-4 transition transform duration-300 ease-in-out hover:bg-teal-500 hover:text-white hover:scale-105">
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
    </div>
  );
};

export default Mission;
