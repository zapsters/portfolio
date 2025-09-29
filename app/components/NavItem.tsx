"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavItemProps = {
  href: string;
  label: string;
  children?: { href: string; label: string }[]; // structured child links
};

export default function NavItem({ href, label, children }: NavItemProps) {
  const pathname = usePathname();
  const [hoverOpen, setHoverOpen] = useState(false);

  // active states
  const isActive = pathname === href;
  const isChildActive = children?.some((child) => pathname.startsWith(child.href));

  // menu should open if hovered OR a child is active
  const open = hoverOpen || isChildActive || isActive;

  return (
    <li onMouseEnter={() => setHoverOpen(true)} onMouseLeave={() => setHoverOpen(false)}>
      <Link href={href} className={isActive ? "active" : ""}>
        {label}
      </Link>

      {children && open && (
        <div className={"navExpandableLink"}>
          {children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className={
                pathname === child.href ? "active navExpandableLink" : " navExpandableLink"
              }>
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
