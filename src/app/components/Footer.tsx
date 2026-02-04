"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  HeartIcon,
  ArrowUpIcon
} from "@heroicons/react/24/solid";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/eacm316",
    icon: "/images/facebook.png",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/ed316",
    icon: "/images/twitter.png",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/ed316",
    icon: "/images/instagram.png",
  },
];

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-background-elevated/50">
      {/* Top Section */}
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image 
                src="/images/logo.png" 
                width={45} 
                height={45} 
                alt="Logo" 
              />
              <span className="font-display font-bold text-2xl text-foreground">
                Edgar<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-foreground-muted max-w-md mb-6 leading-relaxed">
              Full Stack Developer passionate about creating innovative digital solutions. 
              Let&apos;s build something amazing together.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-background-card border border-border flex items-center justify-center hover:border-accent/50 transition-colors"
                  aria-label={social.name}
                >
                  <Image 
                    src={social.icon} 
                    alt={social.name} 
                    width={20} 
                    height={20}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-foreground-muted hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-6">Contact</h3>
            <ul className="space-y-3 text-foreground-muted">
              <li>
                <span className="block text-sm text-foreground-subtle mb-1">Email</span>
                <a 
                  href="mailto:eacm316@gmail.com" 
                  className="hover:text-accent transition-colors"
                >
                  eacm316@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-sm text-foreground-subtle mb-1">Location</span>
                <span>Mexico City, Mexico</span>
              </li>
              <li>
                <span className="block text-sm text-foreground-subtle mb-1">Availability</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Open to work
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-border">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-foreground-muted text-sm flex items-center gap-1">
              © {new Date().getFullYear()} Edgar Chavero. Made with 
              <HeartIcon className="w-4 h-4 text-red-500 inline" /> 
              in Mexico City
            </p>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-lg bg-background-card border border-border flex items-center justify-center text-foreground-muted hover:text-accent hover:border-accent/50 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUpIcon className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
