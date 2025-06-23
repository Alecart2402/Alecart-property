import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  onShowContactForm: () => void;
}

export default function Navigation({ onShowContactForm }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/process", label: "Process" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-primary hover:text-blue-700 transition-colors">
                Alecart Solutions
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    location === item.href
                      ? "text-primary"
                      : "text-gray-800 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                onClick={onShowContactForm}
                className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Get Cash Offer
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="text-gray-800 hover:text-primary"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className={`block px-3 py-2 text-base font-medium ${
                  location === item.href
                    ? "text-primary"
                    : "text-gray-800 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              onClick={() => {
                onShowContactForm();
                closeMobileMenu();
              }}
              className="block w-full text-left bg-primary text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Get Cash Offer
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
