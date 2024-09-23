"use client";
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import FontAwesome icons

import TeamUs from './tream1/page';
import Link from 'next/link';

const teamMembers = [
  { name: 'Alice Johnson', role: 'IT Manager', imageUrl: '/bg-1.jpg', bio: 'Alice is responsible for overseeing the IT department and ensuring all systems run smoothly.', linkedin: 'https://www.linkedin.com/', github: 'https://github.com/' },
  { name: 'Bob Smith', role: 'Network Administrator', imageUrl: '/bg-2.jpg', bio: 'Bob manages and maintains the company’s network infrastructure.', linkedin: 'https://www.linkedin.com/', github: 'https://github.com/' },
  { name: 'Cathy Lee', role: 'Software Engineer', imageUrl: '/bg-1.jpg', bio: 'Cathy develops and maintains software applications.', linkedin: 'https://www.linkedin.com/', github: 'https://github.com/' },
  { name: 'David Kim', role: 'Cybersecurity Specialist', imageUrl: '/bg-1.jpg', bio: 'David ensures the security of our IT systems and protects against cyber threats.', linkedin: 'https://www.linkedin.com/', github: 'https://github.com/' },
  { name: 'Emma Watson', role: 'Database Administrator', imageUrl: '/bg-2.jpg', bio: 'Emma manages and optimizes our databases for performance and security.', linkedin: 'https://www.linkedin.com/', github: 'https://github.com/' },
  { name: 'Frank Harris', role: 'DevOps Engineer', imageUrl: '/bg-1.jpg', bio: 'Frank automates and streamlines our development processes.', linkedin: 'https://www.linkedin.com/', github: 'https://github.com/' },
  { name: 'Grace Li', role: 'IT Support Specialist', imageUrl: '/bg-2.jpg', bio: 'Grace provides technical support and resolves IT issues for staff.', linkedin: 'https://www.linkedin.com/', github: 'https://github.com/' },
  { name: 'Henry Wilson', role: 'System Administrator', imageUrl: '/bg-1.jpg', bio: 'Henry is in charge of maintaining and configuring servers and systems.', linkedin: 'https://www.linkedin.com/', github: 'https://github.com/' },
  { name: 'Isabella Martinez', role: 'Cloud Engineer', imageUrl: '/bg-2.jpg', bio: 'Isabella designs and manages cloud infrastructure.', linkedin: 'https://www.linkedin.com/', github: 'https://github.com/' },
  { name: 'Jack Brown', role: 'IT Analyst', imageUrl: '/bg-1.jpg', bio: 'Jack analyzes and improves IT processes and systems.', linkedin: 'https://www.linkedin.com/', github: 'https://github.com/' },
];

export default function Team() {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <>
      <Head>
        <title>Our IT Team</title>
      </Head>
      <TeamUs />
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto px-6">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-teal-600">Meet Our IT Team</h1>
            <p className="text-gray-700 mt-4">We are a team of dedicated IT professionals, committed to ensuring seamless and secure operations.</p>
          </header>
          <div className="flex flex-wrap -mx-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8 relative"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center transform transition duration-500 hover:scale-105">
                  <Image
                    width={400}
                    height={400}
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mt-4 object-cover object-center transition duration-300 hover:grayscale"
                  />
                  <div className="p-6">
                    <h2 className="text-xl text-teal-600 font-semibold mb-2">{member.name}</h2>
                    <p className="text-gray-700 mb-4">{member.role}</p>
                    <p className="text-gray-900">{member.bio}</p>
                    <div className={`absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 transition-opacity duration-300 ${hoveredMember === index ? 'opacity-80' : 'opacity-0'}`}>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mr-4">
                        <FaLinkedin className="text-white text-3xl hover:text-teal-500 transition-transform transform duration-300 hover:scale-125" />
                      </a>
                      <a href={member.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-white text-3xl hover:text-teal-500 transition-transform transform duration-300 hover:scale-125" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-center mb-6">About Our IT Team</h2>
            <p className="text-center mb-6 text-gray-700">
              Our IT team is committed to driving innovation and excellence, ensuring that all our technological needs are met with the highest standards.
            </p>
            <div className="flex justify-center">
              <Link href={'/contact'} className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow hover:bg-teal-700">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
