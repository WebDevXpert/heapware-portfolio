const ServiceCard = ({ imgSrc, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
      <img src={imgSrc} alt={title} className="w-16 h-30 mb-4" />
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};
export default ServiceCard;
