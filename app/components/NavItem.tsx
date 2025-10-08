"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "motion/react";

type NavItemProps = {
  href: string;
  label: string;
  items?: { href: string; label: string }[];
};

export default function NavItem({ href, label, items }: NavItemProps) {
  const pathname = usePathname();
  const [hoverOpen, setHoverOpen] = useState(false);

  const isActive = pathname === href;
  const isChildActive = items?.some((child) => pathname.startsWith(child.href));

  // Expand if hovered or active
  const open = hoverOpen || isChildActive || isActive;

  return (
    <li
      onMouseEnter={() => setHoverOpen(true)}
      onMouseLeave={() => setHoverOpen(false)}
      onFocus={() => setHoverOpen(true)}
      onBlur={() => setHoverOpen(false)}
      className="relative list-none">
      <Link href={href} className={`navLink ${isActive ? "active" : ""}`}>
        {label}
      </Link>

      {/* Keep the expandable area mounted */}
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="overflow-hidden navExpandableArea">
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
    </li>
  );
}
