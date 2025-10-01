"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type NavItemProps = {
  href: string;
  label: string;
  items?: { href: string; label: string }[]; // structured child links
};

export default function NavItem({ href, label, items }: NavItemProps) {
  const pathname = usePathname();
  const [hoverOpen, setHoverOpen] = useState(false);

  // active states
  const isActive = pathname === href;
  const isChildActive = items?.some((child) => pathname.startsWith(child.href));

  // menu should open if hovered OR a child is active
  const open = hoverOpen || isChildActive || isActive;

  return (
    <li
      onMouseEnter={() => setHoverOpen(true)}
      onMouseLeave={() => setHoverOpen(false)}
      onFocus={() => setHoverOpen(true)}
      onBlur={() => setHoverOpen(false)}>
      <Link href={href} className={isActive ? "active" : ""}>
        {label}
      </Link>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="expandable"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }} // snappier than 2s
            className="navExpandableArea">
            {items?.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className={`navExpandableLink ${pathname === child.href ? "active" : ""}`}
                onFocus={() => setHoverOpen(true)}
                onBlur={() => setHoverOpen(false)}>
                {child.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
