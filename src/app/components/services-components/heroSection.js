const HeroSection = () => {
  return (
    <section className="relative bg-teal-500 text-white flex flex-col md:flex-row items-center px-8 py-16 md:py-24">
      <div className="md:w-1/2 text-left">
        <h1 className="text-4xl md:text-5xl font-bold">
          Share Your Idea <br />
          With Us Today And <br />
          <span className="text-yellow-400">GO PREMIUM</span> with A <br />
          Featured-packed Web Development Services
        </h1>

        <button className="mt-6 bg-black text-white px-6 py-3 rounded-md text-lg flex items-center">
          Get Started →
        </button>
      </div>
      <div className="md:w-1/2 relative flex justify-center mt-10 md:mt-0">
        <img
          src="https://codeupscale.com/_next/static/media/ideaUser.bbfcece6.png"
          alt="Person"
          className="w-96 h-auto rounded-lg"
        />
      </div>

      {/* Curved Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[80px] md:h-[100px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
