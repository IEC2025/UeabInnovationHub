import { Link } from "wouter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="relative mr-3">
                <img
                  src="/src/assets/iec-logo.png"
                  alt="IEC Logo"
                  className="h-14 bg-white/10 p-1 rounded"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold leading-tight">
                  Innovation &<br />Entrepreneurship Centre
                </h3>
              </div>
            </div>
            <p className="mb-6 text-neutral-300">
              Fostering innovation, entrepreneurship, and sustainable
              development within the university and wider community.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-white hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-white hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="text-white hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-white hover:text-secondary transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/about" 
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/programs" 
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Our Programs
                </Link>
              </li>
              <li>
                <Link 
                  href="/events" 
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Events & Workshops
                </Link>
              </li>
              <li>
                <Link 
                  href="/resources#success-stories" 
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link 
                  href="/resources" 
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/resources#startup-toolkit"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Startup Toolkit
                </Link>
              </li>
              <li>
                <Link 
                  href="/resources#business-plans"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Business Plan Templates
                </Link>
              </li>
              <li>
                <Link 
                  href="/resources#funding"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Funding Opportunities
                </Link>
              </li>
              <li>
                <Link 
                  href="/programs#mentorship"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Mentorship Program
                </Link>
              </li>
              <li>
                <Link 
                  href="/news"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Entrepreneurship Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/resources#publications"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Research Publications
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">University Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://ueab.ac.ke/"
                  className="text-neutral-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UEAB Main Website
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Student Portal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Library Resources
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Research Office
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Career Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Alumni Network
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-neutral-400 text-sm">
              &copy; {new Date().getFullYear()} Innovation & Entrepreneurship Centre, University of
              Eastern Africa, Baraton. All rights reserved.
            </div>
            <div className="flex space-x-4 text-sm text-neutral-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Use
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
