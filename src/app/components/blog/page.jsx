import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
  const articles = [
    {
      title: "The Rise of E-commerce: Are You Prepared?",
      description: "Discover key strategies for launching a successful online business and how to navigate the challenging digital landscape.",
      image: "/ecommerce.jpeg",
      link: "#"
    },
    {
      title: "Mobile App Development Trends to Watch in 2024",
      description: "Explore the latest trends in mobile app development and how they can benefit your startup or enterprise.",
      image: "/AppDev.jpg",
      link: "#"
    },
    {
      title: "Top SEO Practices for Increased Visibility",
      description: "Learn essential SEO tactics that could help your business climb the search engine rankings and attract more visitors.",
      image: "/seo.jpeg",
      link: "#"
    },
  ];

  return (
    <div className="bg-white text-gray-900 py-12" id='blog'>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-teal-600">Latest <span className="text-teal-500">News & Articles</span></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white border border-gray-300 p-6 shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="overflow-hidden rounded-t-lg">
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  width={400} 
                  height={225} 
                  className="transform hover:scale-110 transition-transform duration-300 filter hover:grayscale" 
                />
              </div>
              <h3 className="text-xl font-bold mt-4 text-gray-900">{article.title}</h3>
              <p className="mt-2 text-gray-700">{article.description}</p>
              <a href={article.link} className="text-teal-500 inline-flex mt-4 items-center">
                Learn more
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
