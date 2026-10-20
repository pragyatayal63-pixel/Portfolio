"use client";
import React from "react";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogTrigger,
} from "../ui/responsive-dialog";
import { FloatingDock } from "../ui/floating-dock";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github, Info } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "../ui/badge";

import projects, { Project } from "@/data/projects";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

const CATEGORY_ACCENTS: Record<string, string> = {
  "AI Mental Health & Safety": "from-violet-500/20 to-purple-600/10 border-violet-500/30",
  "Full-Stack Marketplace": "from-blue-500/20 to-cyan-600/10 border-blue-500/30",
  "Frontend Engineering": "from-pink-500/20 to-rose-600/10 border-pink-500/30",
  "AI / Automation": "from-amber-500/20 to-orange-600/10 border-amber-500/30",
  "AI / Machine Learning": "from-emerald-500/20 to-green-600/10 border-emerald-500/30",
};

const CATEGORY_DOT: Record<string, string> = {
  "AI Mental Health & Safety": "bg-violet-400",
  "Full-Stack Marketplace": "bg-blue-400",
  "Frontend Engineering": "bg-pink-400",
  "AI / Automation": "bg-amber-400",
  "AI / Machine Learning": "bg-emerald-400",
};

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto py-20 px-4">
      <SectionHeader
        id="projects"
        title="Projects"
        desc="Featured projects & technical achievements."
      />

      {/* Tabular Layout */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full overflow-x-auto rounded-2xl border border-border/60 bg-background/40 backdrop-blur-md shadow-lg mt-10"
      >
        {/* Decorative top gradient bar */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="border-b border-border/50 bg-muted/20 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
              <th className="py-4 px-6">#</th>
              <th className="py-4 px-6">Project</th>
              <th className="py-4 px-6">Category</th>
              <th className="py-4 px-6">Stack</th>
              <th className="py-4 px-6 text-right">Links</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/40">
            {projects.map((project, index) => (
              <ProjectTableRow key={project.id} project={project} index={index} />
            ))}
          </tbody>
        </table>

        {/* Decorative bottom gradient bar */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </motion.div>
    </SectionWrapper>
  );
};

const ProjectTableRow = ({ project, index }: { project: Project; index: number }) => {
  const allSkills = [
    ...(project.skills.frontend || []),
    ...(project.skills.backend || []),
  ];

  const accentClass =
    CATEGORY_ACCENTS[project.category] ??
    "from-primary/10 to-primary/5 border-primary/20";
  const dotClass = CATEGORY_DOT[project.category] ?? "bg-primary";

  return (
    <motion.tr
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="group transition-colors hover:bg-muted/20"
    >
      {/* Index */}
      <td className="py-5 px-6 font-mono text-xs text-muted-foreground/50 tabular-nums w-10">
        {String(index + 1).padStart(2, "0")}
      </td>

      {/* Project Title & Modal Trigger */}
      <td className="py-5 px-6 font-medium text-foreground max-w-xs">
        <ResponsiveDialog>
          <ResponsiveDialogTrigger className="text-left font-semibold text-sm hover:text-primary transition-colors flex items-center gap-1.5 w-fit group/title">
            <span className="group-hover/title:underline underline-offset-4">
              {project.title}
            </span>
            <Info className="w-3 h-3 opacity-50 shrink-0 text-muted-foreground group-hover/title:opacity-80 transition-opacity" />
          </ResponsiveDialogTrigger>

          <ResponsiveDialogContent className="md:max-w-4xl md:h-[85vh] md:!flex md:flex-col md:overflow-hidden md:p-0 md:gap-0">
            {/* Sticky header */}
            <div
              className={`shrink-0 border-b border-border bg-gradient-to-br ${accentClass} backdrop-blur-sm px-8 py-5`}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${dotClass}`} />
                  <h4 className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight truncate">
                    {project.title}
                  </h4>
                  <span className="shrink-0 text-[10px] uppercase tracking-widest text-muted-foreground border border-border/60 rounded-full px-3 py-0.5 bg-background/40">
                    {project.category}
                  </span>
                </div>
                <div className="shrink-0 flex items-center gap-3">
                  {project.github && project.github !== "#" && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Source
                    </Link>
                  )}
                  {project.live && project.live !== "#" && (
                    <Link href={project.live} target="_blank">
                      <button className="flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-medium px-3.5 py-1.5 rounded-full transition-colors hover:bg-primary/80">
                        Visit
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Scrollable content */}
            <ScrollArea className="flex-1" type="always" data-lenis-prevent>
              <div className="px-8 py-8">
                {/* Tech stack */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex flex-col md:flex-row gap-6 md:gap-10 mb-10"
                >
                  {project.skills.frontend?.length > 0 && (
                    <div className="flex flex-col items-center md:items-start gap-2">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                        Frontend
                      </span>
                      <FloatingDock items={project.skills.frontend} />
                    </div>
                  )}
                  {project.skills.backend?.length > 0 && (
                    <div className="flex flex-col items-center md:items-start gap-2">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                        Backend
                      </span>
                      <FloatingDock items={project.skills.backend} />
                    </div>
                  )}
                </motion.div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-10" />

                {/* Project content */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {project.content}
                </motion.div>
              </div>
            </ScrollArea>
          </ResponsiveDialogContent>
        </ResponsiveDialog>
      </td>

      {/* Category */}
      <td className="py-5 px-6">
        <div className="flex items-center gap-2">
          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotClass}`} />
          <Badge
            variant="secondary"
            className="font-mono text-[10px] font-normal bg-secondary/30 border border-border/40"
          >
            {project.category}
          </Badge>
        </div>
      </td>

      {/* Stack chips */}
      <td className="py-5 px-6">
        <div className="flex flex-wrap gap-1.5 max-w-sm">
          {allSkills.map((skill, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-md bg-secondary/30 text-muted-foreground border border-border/40 font-mono"
            >
              {skill.title}
            </span>
          ))}
        </div>
      </td>

      {/* Action Links */}
      <td className="py-5 px-6 text-right">
        <div className="flex items-center justify-end gap-2">
          {project.github && project.github !== "#" && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors"
              title="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </Link>
          )}
          {project.live && project.live !== "#" && (
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors"
              title="Visit Project"
            >
              <ExternalLink className="w-4 h-4" />
            </Link>
          )}
        </div>
      </td>
    </motion.tr>
  );
};

export default ProjectsSection;
