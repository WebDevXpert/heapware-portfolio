"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Layers3,
  Lightbulb,
  Target,
  Wrench,
  ImageIcon,
} from "lucide-react";
import { getProjectBySlug } from "../projectDetails";

export default function ProjectDetailsPage({ params }) {
  const project = getProjectBySlug(params.id);

  if (!project) {
    notFound();
  }

  // Reusable image component for all secondary sections.
  // If no image has been assigned yet, it shows a clean placeholder.
  const SectionImage = ({ src, alt, priority = false }) => {
    if (!src) {
      return (
        <div
          className="flex h-full w-full flex-col items-center justify-center bg-slate-100 text-center"
          role="img"
          aria-label={alt}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-500">
            <ImageIcon size={28} />
          </div>

          <p className="mt-4 px-6 text-sm font-semibold text-slate-500">
            {alt}
          </p>

          <p className="mt-1 px-6 text-xs text-slate-400">
            Image will be added here
          </p>
        </div>
      );
    }

    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    );
  };

  return (
    <main className="bg-white text-slate-900">
      {/* =====================================================
          1. HERO / OVERVIEW
          Original project image
      ===================================================== */}

      <section className="relative overflow-hidden bg-slate-50 py-16 md:py-24">
        <div className="mx-auto w-[90%] max-w-7xl">
          {/* Back Button */}
          <Link
            href="/Projects"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-800"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                {project.company || "Case Study"} • {project.year}
              </span>

              <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-950 md:text-5xl lg:text-6xl">
                {project.title}
              </h1>

              <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
                {project.overview}
              </p>

              {/* Technologies */}
              {project.technologies?.length > 0 && (
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Live Site */}
              {project.link && (
                <div className="mt-8">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700"
                  >
                    Visit Live Site
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              )}
            </motion.div>

            {/* Original Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl"
            >
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-slate-100">
                <SectionImage
                  src={project.image}
                  alt={`${project.title} Project Overview`}
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          2. PROJECT GOALS
          Uses project.goalsImage
      ===================================================== */}

      {project.goals?.length > 0 && (
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto w-[90%] max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="order-2 relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-lg lg:order-1"
              >
                <div className="relative h-full w-full overflow-hidden rounded-xl bg-slate-100">
                  <SectionImage
                    src={project.goalsImage}
                    alt={
                      project.goalsImageAlt || `${project.title} Project Goals`
                    }
                  />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                  <Target size={18} />
                  <span>Objectives</span>
                </div>

                <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
                  Project Goals
                </h2>

                <div className="mt-8 space-y-6">
                  {project.goals.map((goal, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.5,
                        delay: idx * 0.08,
                      }}
                      className="flex items-start gap-4"
                    >
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                        <CheckCircle2 size={16} />
                      </div>

                      <p className="text-base leading-7 text-slate-600">
                        {goal}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          3. CHALLENGES
          Uses project.challengesImage
      ===================================================== */}

      {project.challenges?.length > 0 && (
        <section className="bg-slate-50 py-16 md:py-24">
          <div className="mx-auto w-[90%] max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                  <Layers3 size={18} />
                  <span>Obstacles</span>
                </div>

                <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
                  Challenges
                </h2>

                <div className="mt-8 space-y-6">
                  {project.challenges.map((challenge, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.5,
                        delay: idx * 0.08,
                      }}
                      className="flex items-start gap-4"
                    >
                      <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" />

                      <p className="text-base leading-7 text-slate-600">
                        {challenge}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-lg"
              >
                <div className="relative h-full w-full overflow-hidden rounded-xl bg-slate-100">
                  <SectionImage
                    src={project.challengesImage}
                    alt={
                      project.challengesImageAlt ||
                      `${project.title} Project Challenges`
                    }
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          4. SOLUTIONS
          Uses project.solutionsImage
      ===================================================== */}

      {project.solutions?.length > 0 && (
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto w-[90%] max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="order-2 relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-lg lg:order-1"
              >
                <div className="relative h-full w-full overflow-hidden rounded-xl bg-slate-100">
                  <SectionImage
                    src={project.solutionsImage}
                    alt={
                      project.solutionsImageAlt ||
                      `${project.title} Project Solutions`
                    }
                  />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                  <Wrench size={18} />
                  <span>Architecture</span>
                </div>

                <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
                  Solutions & Execution
                </h2>

                <div className="mt-8 space-y-6">
                  {project.solutions.map((solution, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.5,
                        delay: idx * 0.08,
                      }}
                      className="flex items-start gap-4"
                    >
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                        <CheckCircle2 size={16} />
                      </div>

                      <p className="text-base leading-7 text-slate-600">
                        {solution}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          5. CONCLUSION
          Uses project.conclusionImage
      ===================================================== */}

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto w-[90%] max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                <Lightbulb size={18} />
                <span>Summary</span>
              </div>

              <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
                Conclusion
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
                {project.conclusion}
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-lg"
            >
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-slate-100">
                <SectionImage
                  src={project.conclusionImage}
                  alt={
                    project.conclusionImageAlt ||
                    `${project.title} Project Conclusion`
                  }
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
