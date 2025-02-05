const Services = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-32 bg-white">
      <div className="md:w-1/2 space-y-5 max-w-xl">
        <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
          Website <br />
          <span className="text-teal-500">Development Services</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Enhance your digital presence with our advanced web development
          solutions. We offer a comprehensive suite of services, spanning from
          captivating website design to the creation of sophisticated web
          applications.
        </p>
        {/* Add a wrapper div to center the button with padding */}
        <div className="w-full flex justify-center md:justify-start mt-6">
          <button className="px-8 py-3 bg-teal-500 text-white rounded-md hover:bg-blue-700 transition-all">
            Learn More
          </button>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center relative">
        <div className="relative w-[400px] h-[300px]">
          <img
            src="https://codeupscale.com/_next/static/media/webimg1.aeaea2dd.png"
            alt="Web Development"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};
export default Services;
