"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Layers3,
  Lightbulb,
  Target,
  Wrench,
} from "lucide-react";

function SectionImage({ src, alt }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-lg"
    >
      <div className="relative h-full w-full overflow-hidden rounded-xl bg-slate-100">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </motion.div>
  );
}

// One case-study section. When no image has been added for the section,
// the text spans the full width instead of showing an empty placeholder.
function Section({ icon: Icon, label, title, image, imageAlt, imageFirst, muted, children }) {
  const text = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={image ? "order-1" : "mx-auto max-w-3xl"}
    >
      <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
        <Icon size={18} />
        <span>{label}</span>
      </div>
      <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">{title}</h2>
      {children}
    </motion.div>
  );

  return (
    <section className={`${muted ? "bg-slate-50" : "bg-white"} py-16 md:py-24`}>
      <div className="mx-auto w-[90%] max-w-7xl">
        {image ? (
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {text}
            <div className={imageFirst ? "order-2 lg:-order-1" : "order-2"}>
              <SectionImage src={image} alt={imageAlt} />
            </div>
          </div>
        ) : (
          text
        )}
      </div>
    </section>
  );
}

function PointList({ items, bullet }) {
  return (
    <div className="mt-8 space-y-6">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: idx * 0.08 }}
          className="flex items-start gap-4"
        >
          {bullet === "dot" ? (
            <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
          ) : (
            <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <CheckCircle2 size={16} />
            </div>
          )}
          <p className="text-base leading-7 text-slate-600">{item}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default function ProjectDetails({ project }) {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero / Overview */}
      <section className="relative overflow-hidden bg-slate-50 pb-16 pt-32 md:pb-24 md:pt-36">
        <div className="mx-auto w-[90%] max-w-7xl">
          <Link
            href="/Projects"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-800"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Case Study • {project.year}
              </span>

              <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-950 md:text-5xl lg:text-6xl">
                {project.title}
              </h1>

              <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
                {project.overview}
              </p>

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

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl"
            >
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src={project.image}
                  alt={`${project.title} project overview`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {project.goals?.length > 0 && (
        <Section
          icon={Target}
          label="Objectives"
          title="Project Goals"
          image={project.goalsImage}
          imageAlt={project.goalsImageAlt}
          imageFirst
        >
          <PointList items={project.goals} />
        </Section>
      )}

      {project.challenges?.length > 0 && (
        <Section
          icon={Layers3}
          label="Obstacles"
          title="Challenges"
          image={project.challengesImage}
          imageAlt={project.challengesImageAlt}
          muted
        >
          <PointList items={project.challenges} bullet="dot" />
        </Section>
      )}

      {project.solutions?.length > 0 && (
        <Section
          icon={Wrench}
          label="Architecture"
          title="Solutions & Execution"
          image={project.solutionsImage}
          imageAlt={project.solutionsImageAlt}
          imageFirst
        >
          <PointList items={project.solutions} />
        </Section>
      )}

      <Section
        icon={Lightbulb}
        label="Summary"
        title="Conclusion"
        image={project.conclusionImage}
        imageAlt={project.conclusionImageAlt}
        muted
      >
        <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
          {project.conclusion}
        </p>
      </Section>
    </div>
  );
}
