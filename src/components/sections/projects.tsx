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

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto py-20 px-4">
      <SectionHeader id="projects" title="Projects" desc="Featured projects & technical achievements." />
      
      {/* Tabular Layout */}
      <div className="w-full overflow-x-auto rounded-xl border border-border bg-card/60 backdrop-blur-sm shadow-sm mt-8">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="border-b border-border bg-muted/40 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              <th className="py-4 px-6">Project Name</th>
              <th className="py-4 px-6">Category</th>
              <th className="py-4 px-6">Technologies</th>
              <th className="py-4 px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {projects.map((project) => (
              <ProjectTableRow key={project.id} project={project} />
            ))}
          </tbody>
        </table>
      </div>
    </SectionWrapper>
  );
};

const ProjectTableRow = ({ project }: { project: Project }) => {
  const allSkills = [
    ...(project.skills.frontend || []),
    ...(project.skills.backend || []),
  ];

  return (
    <tr className="hover:bg-muted/30 transition-colors group">
      {/* Project Title & Modal Trigger */}
      <td className="py-5 px-6 font-medium text-foreground">
        <div className="flex flex-col gap-1">
          <ResponsiveDialog>
            <ResponsiveDialogTrigger className="text-left font-semibold text-base hover:text-primary transition-colors hover:underline underline-offset-4 flex items-center gap-1.5 w-fit">
              {project.title}
              <Info className="w-3.5 h-3.5 opacity-60 text-muted-foreground" />
            </ResponsiveDialogTrigger>

            <ResponsiveDialogContent className="md:max-w-4xl md:h-[85vh] md:!flex md:flex-col md:overflow-hidden md:p-0 md:gap-0">
              {/* Sticky header */}
              <div className="shrink-0 border-b border-border bg-background/80 backdrop-blur-sm px-8 py-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 min-w-0">
                    <h4 className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight truncate">
                      {project.title}
                    </h4>
                    <span className="shrink-0 text-[11px] uppercase tracking-widest text-muted-foreground border border-border rounded-full px-3 py-0.5">
                      {project.category}
                    </span>
                  </div>
                  <div className="shrink-0 flex items-center gap-4">
                    {project.github && project.github !== "#" && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
                      >
                        Source
                      </Link>
                    )}
                    {project.live && project.live !== "#" && (
                      <Link href={project.live} target="_blank">
                        <button className="group flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full hover:bg-primary/80 transition-colors">
                          Visit
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
        </div>
      </td>

      {/* Category */}
      <td className="py-5 px-6">
        <Badge variant="secondary" className="font-mono text-xs font-normal">
          {project.category}
        </Badge>
      </td>

      {/* Technologies */}
      <td className="py-5 px-6">
        <div className="flex flex-wrap gap-1.5 max-w-md">
          {allSkills.map((skill, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md bg-secondary/40 text-muted-foreground border border-border/50"
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
              className="p-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
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
              className="p-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
              title="Visit Project"
            >
              <ExternalLink className="w-4 h-4" />
            </Link>
          )}
        </div>
      </td>
    </tr>
  );
};

export default ProjectsSection;
