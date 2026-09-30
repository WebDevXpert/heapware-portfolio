import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata = {
  title: "Career",
  description:
    "Open positions at Heapware. Join our team of developers and designers in Lahore.",
  alternates: { canonical: "/career" },
};

const jobs = [
  {
    title: "MERN Stack Developer",
    description:
      "We are looking for a skilled MERN stack developer to build and maintain full-stack web applications.",
    role: "Full Stack Developer",
  },
  {
    title: "Frontend Developer",
    description:
      "Looking for a creative frontend developer who cares about clean, responsive and accessible interfaces.",
    role: "Frontend Developer",
  },
  {
    title: "Backend Developer",
    description:
      "Experienced backend developer needed to design APIs, databases and integrations for a growing team.",
    role: "Backend Developer",
  },
  {
    title: "UI/UX Designer",
    description:
      "Seeking a talented UI/UX designer with a strong portfolio of web and mobile product work.",
    role: "UI/UX Designer",
  },
];

export default function CareerPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Join Our Team"
        title="Career"
        description="We're always looking for people who enjoy building useful software. Send your CV for any of the roles below."
      />
      <div className="flex items-center justify-center bg-white p-4 sm:p-8 md:p-12 lg:p-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="flex w-full max-w-md flex-col rounded-lg border border-gray-200 bg-white p-8 text-gray-800 shadow-md transition hover:border-blue-200 hover:shadow-lg"
            >
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {job.title}
              </h2>
              <p className="mb-4 flex-1 font-normal text-gray-600">
                {job.description}
              </p>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(
                  `Application: ${job.title}`,
                )}`}
                className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
              >
                Apply Now
                <svg
                  className="ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.707-11.707a1 1 0 10-1.414 1.414L11.586 10H7a1 1 0 100 2h4.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <p className="mt-4 text-sm text-gray-500">{job.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
