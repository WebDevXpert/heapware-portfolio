import React from "react";
import Career1 from './career1/page';

export default function JobCard() {
  const jobs = [
    {
      title: "MERN Stack Developer",
      description: "We are in search of a skilled and seasoned MERN Stack Developer…",
      role: "Full Stack Developer",
      timePosted: "12 days ago",
    },
    {
      title: "Frontend Developer",
      description: "Looking for a creative and skilled frontend developer…",
      role: "Frontend Developer",
      timePosted: "8 days ago",
    },
    {
      title: "Backend Developer",
      description: "Experienced backend developer needed for a growing team…",
      role: "Backend Developer",
      timePosted: "15 days ago",
    },
    {
      title: "UI/UX Designer",
      description: "Seeking a talented UI/UX designer with a strong portfolio…",
      role: "UI/UX Designer",
      timePosted: "10 days ago",
    },
  ];

  return (
    <div>
      <Career1 />
      <div className="flex items-center justify-center bg-white p-4 sm:p-8 md:p-12 lg:p-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="w-full max-w-md h-64 p-8 border border-gray-300 bg-white rounded-lg shadow-md hover:bg-teal-300 hover:shadow-lg text-gray-800"
            >
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {job.title}
              </h2>
              <p className="mb-4 font-normal text-gray-600">
                {job.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center text-blue-500 hover:text-blue-700 font-medium"
              >
                View Jobs
                <svg
                  className="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.707-11.707a1 1 0 10-1.414 1.414L11.586 10H7a1 1 0 100 2h4.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <div className="mt-4 flex justify-between text-gray-500">
                <span>{job.role}</span>
                <span>• {job.timePosted}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
