const ChooseUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 text-center">
      {/* Section Title */}
      <h3 className="text-lg text-indigo-600 font-semibold">
        Why You Choose Us
      </h3>
      <h2 className="text-4xl font-bold text-gray-900 mt-2">
        Why Should You Choose Code Upscale <br /> For Web Development Services?
      </h2>
      <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
        We capitalized on 6 key value services and successfully built a
        reputation as the leading and trusted Web app development services
        provider in the U.S.A., U.K., and U.A.E.
      </p>

      {/* Features Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-2 md:px-6">
        {[
          {
            id: "01",
            title: "Unparalleled Expertise",
            desc: "Our team comprises industry experts, steeped in the art of software development, guaranteeing high-quality solutions for your business.",
          },
          {
            id: "02",
            title: "Tailored Excellence",
            desc: "We specialize in creating customized software solutions meticulously crafted to suit your unique business needs.",
          },
          {
            id: "03",
            title: "Cutting-edge Technology",
            desc: "We leverage the latest frameworks and technologies to build fast, secure, and scalable web applications.",
          },
          {
            id: "04",
            title: "Client-Centric Approach",
            desc: "Our solutions are tailored to fit your business goals, ensuring long-term success and satisfaction.",
          },
          {
            id: "05",
            title: "Reliable Support",
            desc: "We provide 24/7 support to ensure your applications run smoothly with minimal downtime.",
          },
          {
            id: "06",
            title: "Scalable Solutions",
            desc: "Whether you’re a startup or an enterprise, our solutions grow with your business, ensuring future success.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-md text-left w-full md:w-[90%] mx-auto 
                         transition duration-300 ease-in-out hover:bg-teal-500 hover:text-white"
          >
            <span className="text-6xl font-bold text-gray-200">
              {feature.id}
            </span>
            <h3 className="text-xl font-semibold text-gray-900 mt-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 mt-2">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;
