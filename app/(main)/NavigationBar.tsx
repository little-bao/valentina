"use client";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationItems } from "@/config/nav";
import { cn } from "@/lib/utils";

const NavItem = ({ label, href }: { label: string; href: string }) => {
  const isActive = usePathname() === href;
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "relative block px-3 py-2 transition duration-300",
          isActive ? "text-purple-300" : "hover:text-purple-300"
        )}
      >
        {label}
        {isActive && (
          <motion.span
            className="from-purple-0 absolute inset-x-1 -bottom-px h-px bg-linear-to-r via-purple-300/75 to-purple-300/0"
            layoutId="nav-active-indicator"
          />
        )}
      </Link>
    </li>
  );
};

const NavigationBar = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue(0);

  const handleMouseMove = ({
    clientX,
    clientY,
    currentTarget,
  }: React.MouseEvent) => {
    const bounds = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - bounds.left);
    mouseY.set(clientY - bounds.top);
    radius.set(Math.sqrt(bounds.width ** 2 + bounds.height ** 2) / 2.5);
  };

  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, var(--spotlight-color), transparent 65%)`;

  return (
    <nav
      onMouseMove={handleMouseMove}
      className={cn("group nav-gradient relative border", className)}
      {...props}
    >
      {/* Spotlight overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background }}
        aria-hidden="true"
      />
      <ul className="flex items-center px-3 text-sm text-zinc-800 dark:text-zinc-200">
        {navigationItems.map(({ label, href }) => (
          <NavItem key={href} label={label} href={href} />
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
