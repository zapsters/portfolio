"use client";
import { motion } from "motion/react";
import PersonalIcon from "./PersonalIcon";

type ProjectCardProps = {
  href: string;
  label: string;
  status: string;
};

export default function ProjectCard({ href, label }: ProjectCardProps) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      variants={{
        // Scaling here will cause weird re-rendering combined with "width: fit-content" of the h2.
        // If I can figure out a fix, ill reimplement this scaling. <3
        // Arf! Arf Wruff! I am barking in source code.
        initial: { scale: 1 },
        hover: { scale: 1, borderRadius: "6px" },
      }}
      transition={{ duration: 0.2 }}
      className="projectCard"
      style={{ overflowX: "hidden" }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          position: "relative",
        }}>
        <motion.h2
          variants={{
            initial: { width: "fit-content" },
            hover: { width: "100%" },
          }}
          style={{ overflow: "hidden" }}>
          {label}
          <div
            style={{
              height: "3px",
              width: "100%",
              backgroundColor: "var(--primary-color)",
            }}
          />
        </motion.h2>
      </div>
      <div className="projectFlex">
        <div className="slideshow">
          <PersonalIcon
            style={{
              width: "60%",
              maxWidth: "220px",
              padding: "5px 0px",
              color: "var(--primary-color)",
            }}
            alignmentBaseline="central"
            height={"autoFill"}
          />
        </div>
        <div className="projectContent">
          <h3>Hi</h3>
          <span>This is texr</span>
        </div>
      </div>
    </motion.div>
  );
}
