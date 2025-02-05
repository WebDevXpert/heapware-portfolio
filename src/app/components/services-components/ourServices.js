const OurServices = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center px-6">
        <h5 className="text-teal-500 font-semibold">We Serve</h5>
        <h1 className="md:w-2/3 mx-auto text-4xl font-bold text-gray-900 mt-4">
          A Sneak Peek of Our Custom Web Development Services
        </h1>
        <p className="text-gray-600 text-lg mt-4">
          Delivering convenience-focused web application development services in
          any form is what we’re inclined towards.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-6 md:px-16">
        <ServiceCard
          imgSrc="https://codeupscale.com/services_images/services/Group.svg"
          title="Frontend/Backend Development"
          description="Collaborate with us to transform your exceptional, high-impact web solutions that drive success and innovation in the digital realm with our expert Frontend and Backend Development services."
        />

        <ServiceCard
          imgSrc="https://codeupscale.com/services_images/services/Rectangle.svg"
          title="Full-stack Development"
          description="Maximize your digital potential with us for an all-inclusive approach that propels your digital vision to new heights, ensuring a competitive edge in the dynamic online landscape."
        />

        <ServiceCard
          imgSrc="https://codeupscale.com/services_images/services/UXicon.svg"
          title="UI/UX Web Design"
          description="Amplify your digital footprint with our premium UI/UX web design services. Our skilled designers craft mesmerizing, user-focused interfaces that guarantee a remarkable online journey."
        />

        <ServiceCard
          imgSrc="https://codeupscale.com/services_images/services/CMSicon.svg"
          title="Content Management Systems (CMS)"
          description="Boost your online presence with our advanced CMS solutions, ensuring your digital platform remains competitive and consistently updated."
        />

        <ServiceCard
          imgSrc="https://codeupscale.com/services_images/services/Vicon.svg"
          title="Custom Web Solutions"
          description="Partner with us to take your digital presence to its full potential. We create custom websites and applications tailored to your unique needs."
        />
      </div>
    </section>
  );
};

const ServiceCard = ({ imgSrc, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
      <img src={imgSrc} alt={title} className="w-16 h-30 mb-4" />
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default OurServices;
