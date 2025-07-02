'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12 mt-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {/* Brand Info */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold tracking-wider">The Actor&apos;s Room</h3>
          <p className="text-sm text-gray-400">
            For the actor who thinks, feels, and transforms.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-all">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-all">About</a></li>
            <li><a href="#events" className="hover:text-white transition-all">Events</a></li>
            <li><a href="#contact" className="hover:text-white transition-all">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Connect</h4>
          <div className="flex space-x-4 text-gray-400 text-xl">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaFacebook />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaYoutube />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} The Actor&apos;s Room. All rights reserved.
      </div>
    </footer>
  );
}
