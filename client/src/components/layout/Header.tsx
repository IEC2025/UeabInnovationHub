import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className="bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-sm hidden sm:flex">
            <a href="tel:+254123456789" className="mr-4 hover:text-secondary transition-colors flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              +254 123 456 789
            </a>
            <a href="mailto:iec@ueab.ac.ke" className="hover:text-secondary transition-colors flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              iec@ueab.ac.ke
            </a>
          </div>
          <div className="flex space-x-3">
            <a href="#" className="hover:text-secondary transition-colors" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-secondary transition-colors" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-secondary transition-colors" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-secondary transition-colors" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Link href="/" className="flex items-center">
            <img
              src="https://ueab.ac.ke/wp-content/uploads/2023/01/university-of-eastern-africa-baraton-logo.png"
              alt="UEAB Logo"
              className="h-14 mr-3"
            />
            <div>
              <h1 className="text-xl font-bold text-primary leading-tight">
                Innovation & Entrepreneurship
              </h1>
              <p className="text-neutral-600 text-sm">
                University of Eastern Africa, Baraton
              </p>
            </div>
          </Link>
        </div>

        <nav className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="md:hidden text-primary"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          <ul
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 mt-4 md:mt-0 absolute md:relative top-10 md:top-0 left-0 right-0 bg-white md:bg-transparent z-50 shadow-md md:shadow-none p-4 md:p-0`}
          >
            <li>
              <Link href="/">
                <a
                  className={`nav-link font-medium hover:text-secondary transition-colors ${
                    isActive("/") ? "text-secondary" : "text-primary"
                  }`}
                  onClick={closeMenu}
                >
                  Home
                </a>
              </Link>
            </li>
            
            <li className="relative group">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center nav-link font-medium hover:text-secondary transition-colors text-primary bg-transparent border-0 p-0 focus:ring-0">
                  About <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuItem onClick={closeMenu} asChild>
                    <Link href="/about#mission">Mission & Vision</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={closeMenu} asChild>
                    <Link href="/about#team">Our Team</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={closeMenu} asChild>
                    <Link href="/about#history">History</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            
            <li className="relative group">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center nav-link font-medium hover:text-secondary transition-colors text-primary bg-transparent border-0 p-0 focus:ring-0">
                  Programs <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuItem onClick={closeMenu} asChild>
                    <Link href="/programs#incubation">Startup Incubation</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={closeMenu} asChild>
                    <Link href="/programs#mentorship">Mentorship</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={closeMenu} asChild>
                    <Link href="/programs#workshops">Workshops & Training</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={closeMenu} asChild>
                    <Link href="/programs#funding">Funding Opportunities</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            
            <li>
              <Link href="/events">
                <a
                  className={`nav-link font-medium hover:text-secondary transition-colors ${
                    isActive("/events") ? "text-secondary" : "text-primary"
                  }`}
                  onClick={closeMenu}
                >
                  Events
                </a>
              </Link>
            </li>
            
            <li>
              <Link href="/resources">
                <a
                  className={`nav-link font-medium hover:text-secondary transition-colors ${
                    isActive("/resources") ? "text-secondary" : "text-primary"
                  }`}
                  onClick={closeMenu}
                >
                  Resources
                </a>
              </Link>
            </li>
            
            <li>
              <Link href="/news">
                <a
                  className={`nav-link font-medium hover:text-secondary transition-colors ${
                    isActive("/news") ? "text-secondary" : "text-primary"
                  }`}
                  onClick={closeMenu}
                >
                  News
                </a>
              </Link>
            </li>
            
            <li>
              <Link href="/contact">
                <a
                  className={`nav-link font-medium hover:text-secondary transition-colors ${
                    isActive("/contact") ? "text-secondary" : "text-primary"
                  }`}
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
