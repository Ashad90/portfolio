"use client";
import React, { useState } from 'react';
import { ThemeToggle } from "@/components/theme-toggle";
import { Download, ChevronDown, Menu as MenuIcon, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const handleDownloadCV = () => {
    // Je vais remplacer le lien par le lien de mon Cv
    window.location.href = "https://your-cv-url.com/cv.pdf";
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const refreshPage = () => {
    window.location.reload();
  };
  
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 backdrop-blur-sm z-50 px-4 py-4 md:px-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              ASH<span className="font-bold text-cyan-700 dark:text-green-700 ">AD.</span>
            </Link>

              <button 
              onClick={() => setIsOpen(!isOpen)}
              className="z-20 sm:hidden"
              >
                {isOpen ? <X /> : <MenuIcon />}
              </button>
            
            <div className="flex items-center space-x-8">
              
              <Link href="/work" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Réalisations
              </Link>
              <Link href="/services" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Services
              </Link>
              <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                A-Propos
              </Link>
              <Link href="/services" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                 <div className="relative">
                 <button
                   onMouseEnter={() => setIsProjectsOpen(true)}
                   onMouseLeave={() => setIsProjectsOpen(false)}
                   className="hover:text-gray-600 transition-colors flex items-center"
                 >
                   Projets <ChevronDown className="ml-1 w-4 h-4" />
                 </button>
                 <AnimatePresence>
                   {isProjectsOpen && (
                     <motion.div
                       initial={{ opacity: 0, y: -10 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: -10 }}
                       className="absolute top-full left-0 mt-2 w-48 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg py-2"
                       onMouseEnter={() => setIsProjectsOpen(true)}
                       onMouseLeave={() => setIsProjectsOpen(false)}
                     >
                       <a href="#web-design" className="block px-4 py-2 hover:bg-gray-100 transition-colors">Web Design</a>
                       <a href="#web-development" className="block px-4 py-2 hover:bg-gray-100 transition-colors">Web Development</a>
                       <a href="#frontend" className="block px-4 py-2 hover:bg-gray-100 transition-colors">Frontend</a>
                     </motion.div>
                   )}
                 </AnimatePresence>
               </div>
              </Link>
              <Link 
                href="/contact" 
                onClick={scrollToContact}
                className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors sm:mx-auto"
              >
                Contactez-Moi
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Section Cv */}
      <section className="pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">A propos</h2>
          <h1 className="text-3xl sm:text-2xl font-bold text-center mb-8">
            Hello ! Moi c&apos;est Ashad,  <span className='font-extrabold text-cyan-700 dark:text-green-700'>Web Designer</span>&<span className='font-extrabold text-green-700 dark:text-cyan-700'>Developer</span> Centrafricain<br />
            Juste en dessous vous trouverez tout ce qu&apos;il ya à savoir sur moi<br />
            Et vous aurez aussi la possibilité de télécharger mon Cv
          </h1>
          <div className="flex justify-center">
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full sm:mx-auto hover:bg-gray-800 transition-colors"
            >
              <Download className="w-5 h-5 animate-bounce" />
              Mon CV
            </button>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Web Design */}
          <div className="mb-32">
            <div className="relative aspect-[16/9] mb-8">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
                alt="Web Design"
                fill
                className="object-cover cursor-pointer hover:animate-pulse duration-75"
              />
            </div>
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-semibold text-blue-700 dark:text-green-700 mb-2">Web Design</h2>
                <p className="text-gray-600 dark:text-gray-400">Apartments, homes and vacation properties.</p>
              </div>
              <Link
                href="/projects/residential"
                className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                See Project
              </Link>
            </div>
          </div>

          {/* Web Development */}
          <div className="mb-32">
            <div className="relative aspect-[16/9] mb-8">
              <Image
                src="https://images.unsplash.com/photo-1604014237800-1c9102c219da"
                alt="Web Development"
                fill
                className="object-cover cursor-pointer hover:animate-pulse duration-75"
              />
            </div>
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-semibold text-blue-700 dark:text-green-700 mb-2">Web Development</h2>
                <p className="text-gray-600 dark:text-gray-400">Un site web dynamique et ultra fluide.</p>
              </div>
              <Link
                href="/projects/commercial"
                className="bg-black dark:bg-white text-white dark:text-black text-sm px-6 py-3 rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                See Project
              </Link>
            </div>
          </div>
          {/* Frontend */} 
          <div>
            <div className="relative aspect-[16/9] mb-8">
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
                alt="Frontend"
                fill
                className="object-cover cursor-pointer hover:animate-pulse duration-75"
              />
            </div>
            <div className="flex justify-between mx-auto items-end">
              <div>
                <h2 className="text-3xl font-semibold text-blue-700 dark:text-green-700 mb-2">Frontend</h2>
                <p className="text-gray-600 dark:text-gray-400">Un Design de qualité selon vos besoins.</p>
              </div>
              <Link
                href="/projects/experiential"
                className="bg-black dark:bg-white text-sm text-white dark:text-black px-6 py-3 rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                See Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section id="contact" className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 bg-white p-8 rounded-xl shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-1">Type de projet</label>
              <select
                id="project"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                required
              >
                <option value="">Selectionnez un type projet</option>
                <option value="web-design">Web Design</option>
                <option value="web-development">Web Development</option>
                <option value="frontend">Frontend</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Envoyer
            </button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
              ASH<span className="font-bold text-cyan-700  dark:text-green-700">AD.</span>
            </Link>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Ikoue Academy<br />
              Bangui, RCA.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-4">A-propos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/work" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="/who-we-are" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Qui je suis
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Contactez-moi
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-4">Mes Projets</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/residential" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/commercial" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/experiential" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Frontend
                </Link>
              </li>
            </ul>
          </div>
        </div>
        </footer>
      </main>
  );
}
