import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
  const articles = [
    {
      title: "The Rise of E-commerce: Are You Prepared?",
      description: "Discover key strategies for launching a successful online business and how to navigate the challenging digital landscape.",
      image: "/ecommerce.jpeg", // Keeping existing image
      link: "#"
    },
    {
      title: "Mobile App Development Trends to Watch in 2024",
      description: "Explore the latest trends in mobile app development and how they can benefit your startup or enterprise.",
      image: "/AppDev.jpg", // Keeping existing image
      link: "#"
    },
    {
      title: "Top SEO Practices for Increased Visibility",
      description: "Learn essential SEO tactics that could help your business climb the search engine rankings and attract more visitors.",
      image: "/seo.jpeg", // Keeping existing image
      link: "#"
    },
    // {
    //   title: "AI Revolution in Tech Industry",
    //   description: "Explore how Artificial Intelligence is transforming the tech landscape, from automation to predictive analytics, driving innovation and efficiency.",
    //   image: "/AI.jpg",
    //   link: "#"
    // },
    // {
    //   title: "Cybersecurity Trends in 2024",
    //   description: "Stay ahead with the latest cybersecurity trends, including zero trust architecture, AI-driven security, and advanced threat protection strategies.",
    //   image: "/cybersecurity.jpg",
    //   link: "#"
    // },
    // {
    //   title: "Cloud Computing: Future of Business",
    //   description: "Cloud computing is reshaping business operations with scalable solutions, enabling remote work, data storage, and global collaboration.",
    //   image: "/CloudComputing.jpg",
    //   link: "#"
    // },
    // {
    //   title: "Blockchain Beyond Cryptocurrency",
    //   description: "Discover the potential of blockchain technology beyond digital currencies, from supply chain management to smart contracts and data security.",
    //   image: "/BlockchainBeyondCryptocurrency.jpg",
    //   link: "#"
    // },
    // {
    //   title: "The Rise of Quantum Computing",
    //   description: "Quantum computing is set to revolutionize industries with unprecedented processing power, solving complex problems faster than ever before.",
    //   image: "/QuantumComputing.jpg",
    //   link: "#"
    // },
    // {
    //   title: "5G Networks: Transforming Connectivity",
    //   description: "5G technology is redefining connectivity with faster speeds, lower latency, and the ability to support the growing number of connected devices.",
    //   image: "/5GNetworks.jpg",
    //   link: "#"
    // },
    // New articles added below
   
  ];

  return (
    <div className="bg-black text-white py-12" id='blog'>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Latest <span className="text-teal-500">News & Articles</span></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-[#0D1B1B] border border-white p-6 shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="overflow-hidden rounded-t-lg">
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  width={400} 
                  height={225} 
                  className="transform hover:scale-110 transition-transform duration-300 filter hover:grayscale" 
                />
              </div>
              <h3 className="text-xl font-bold mt-4">{article.title}</h3>
              <p className="mt-2">{article.description}</p>
              <a href={article.link} className="text-teal-500 inline-flex mt-4 items-center">
                Learn more
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-1/12" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
