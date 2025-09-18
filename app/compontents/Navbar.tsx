"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FileText, Users, Menu } from "lucide-react";

const menuItems = [
  { name: "Dashboard", href: "/", icon: <Home size={20} /> },
  { name: "Posts", href: "/posts", icon: <FileText size={20} /> },
  { name: "Users", href: "/users", icon: <Users size={20} /> },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  return (
    <motion.aside
      animate={{ width: isOpen ? 200 : 64 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="h-screen bg-gray-900 text-white flex flex-col shadow-lg"
    >
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 text-gray-300 hover:text-white"
      >
        <Menu className="cursor-pointer"/>
      </button>

      {/* Menu items */}
      <nav className="flex-1 px-2 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center gap-3 p-2 rounded-md transition-colors ${
              pathname === item.href
                ? "bg-gray-700 text-red-400 font-semibold"
                : "hover:bg-gray-700"
            }`}
          >
            {item.icon}
            {isOpen && <span className="whitespace-nowrap">{item.name}</span>}
          </Link>
        ))}
      </nav>
    </motion.aside>
  );
}
