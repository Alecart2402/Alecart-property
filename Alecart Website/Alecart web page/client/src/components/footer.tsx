import { Phone, MapPin, Clock, Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface FooterProps {
  onShowContactForm: () => void;
}

export default function Footer({ onShowContactForm }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Alecart Solutions</h3>
            <p className="text-gray-300 mb-4">
              We buy houses fast in your area. Get your fair cash offer today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-gray-300 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Button 
                  variant="link" 
                  onClick={onShowContactForm}
                  className="text-gray-300 hover:text-white transition-colors p-0 h-auto"
                >
                  Get Cash Offer
                </Button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <p className="text-gray-300 flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:2162603455" className="hover:text-white transition-colors">
                  (216) 260-3455
                </a>
              </p>
              <p className="text-gray-300 flex items-center">
                <MapPin size={16} className="mr-2" />
                San Bernardino, CA
              </p>
              <p className="text-gray-300 flex items-center">
                <Clock size={16} className="mr-2" />
                Available 24/7
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Alecart Solutions. All rights reserved. Licensed Real Estate Investor.
          </p>
        </div>
      </div>
    </footer>
  );
}
