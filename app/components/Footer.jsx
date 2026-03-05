"use client";
import {
  Code,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  ArrowRight,
  Heart,
  Send,
} from "lucide-react";
import logo from "@/app/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion';

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Web Development", href: "#services" },
    { name: "Mobile App Development", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
    { name: "Graphics Design", href: "#services" },
    { name: "E-Commerce Solutions", href: "#services" },
    { name: "Custom Software", href: "#services" },
  ];

  const resources = [
    { name: "Blog", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Portfolio", href: "#projects" },
    { name: "Pricing", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Careers", href: "#" },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "Github",
      href: "#",
      color: "hover:bg-gray-700",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      href: "#",
      color: "hover:bg-blue-600",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      name: "Twitter",
      href: "#",
      color: "hover:bg-sky-500",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      href: "#",
      color: "hover:bg-pink-600",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      name: "Facebook",
      href: "#",
      color: "hover:bg-blue-700",
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      text: "hello@nsrdev.com",
      href: "mailto:hello@nsrdev.com",
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: "Dhaka, Bangladesh",
      href: "#",
    },
  ];

  return (
    <motion.footer className="relative bg-slate-950 border-t border-white/10 overflow-hidden"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info - Takes 2 columns */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link href="/">
              <Image src={logo} alt="NSR DEV Logo" height={100} width={200} />
            </Link>

            <p className="text-gray-400 my-6 leading-relaxed">
              Transforming ideas into exceptional digital experiences. We craft
              innovative solutions that drive business growth and engage
              audiences worldwide.
            </p>

            {/* Contact Info */}
            <motion.div 
              className="space-y-3 mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
              }}
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    {info.icon}
                  </motion.div>
                  <span className="text-sm">{info.text}</span>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex items-center space-x-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } }
              }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-white ${social.color} transition-all duration-300 hover:scale-110`}
                  title={social.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h3 
              className="text-lg font-semibold text-white mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
            >
              Quick Links
            </motion.h3>
            <motion.ul 
              className="space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
              }}
            >
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-purple-400 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.h3 
              className="text-lg font-semibold text-white mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
            >
              Services
            </motion.h3>
            <motion.ul 
              className="space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
              }}
            >
              {services.map((service, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4 }}
                >
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-purple-400 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {service.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Resources & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h3 
              className="text-lg font-semibold text-white mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
            >
              Resources
            </motion.h3>
            <motion.ul 
              className="space-y-3 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
              }}
            >
              {resources.map((resource, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4 }}
                >
                  <a
                    href={resource.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-purple-400 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {resource.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-white/10 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-gray-400">
            <motion.div 
              className="flex items-center justify-center space-x-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <span>
                © {new Date().getFullYear()} NSR-DEV. All rights reserved.
              </span>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center space-x-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } }
              }}
            >
              <motion.a 
                href="#" 
                className="hover:text-purple-400 transition-colors"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                whileHover={{ color: '#a855f7', x: 3 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-purple-400 transition-colors"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                whileHover={{ color: '#a855f7', x: 3 }}
              >
                Terms of Service
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-purple-400 transition-colors"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                whileHover={{ color: '#a855f7', x: 3 }}
              >
                Cookie Policy
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
