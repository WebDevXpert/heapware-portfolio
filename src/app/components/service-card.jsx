import Image from "next/image";

const ServiceCard = ({ imgSrc, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
      <Image
        src={imgSrc}
        alt={title}
        width={64}
        height={64}
        className="w-16 h-16 mb-4 object-contain"
        unoptimized
      />
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default ServiceCard;
