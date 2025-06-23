import { Clock, Calendar, Phone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProcessProps {
  onShowContactForm?: () => void;
}

export default function Process({ onShowContactForm }: ProcessProps = {}) {
  const handleContactForm = () => {
    if (onShowContactForm) {
      onShowContactForm();
    } else {
      // Fallback if onShowContactForm is not provided
      const event = new CustomEvent('showContactForm');
      window.dispatchEvent(event);
    }
  };

  return (
    <div className="pt-16">
      {/* Process Hero */}
      <section className="bg-gradient-to-r from-secondary to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How The Process Works
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Selling your house to Alecart is quick, easy, and transparent. Here's exactly how it works.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Tell Us About Your Property</h3>
              <p className="text-gray-600">Quick, easy & free! Fill out our simple form with basic information about your house.</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-secondary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">We Review & Contact You</h3>
              <p className="text-gray-600">If it meets our buying criteria, we'll contact you to set up a quick appointment.</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-accent text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Get Your Written Offer</h3>
              <p className="text-gray-600">We'll present you with a fair written, no-obligation offer within 24 hours.</p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="bg-yellow-500 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Close & Get Cash</h3>
              <p className="text-gray-600">We close at a local reputable title company, cash in your hands in as little as 7 days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeframe Section */}
      <section className="py-20 bg-neutral">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 md:p-12">
            <CardContent className="pt-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Timeline</h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">24 Hours</h3>
                  <p className="text-gray-600">Fair all-cash offer after reviewing your property details</p>
                </div>
                <div>
                  <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">7 Days</h3>
                  <p className="text-gray-600">Quick closing or on your preferred timeline</p>
                </div>
                <div>
                  <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Same Day</h3>
                  <p className="text-gray-600">Response in some cases for urgent situations</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Selling Your House Can Be Quick And Simple
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Check size={16} />
                  </div>
                  <p className="text-gray-700">We buy houses in your area and take the property as-is</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Check size={16} />
                  </div>
                  <p className="text-gray-700">We buy houses in each condition and any location</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Check size={16} />
                  </div>
                  <p className="text-gray-700">No need to worry about repairing or cleaning up your property</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Check size={16} />
                  </div>
                  <p className="text-gray-700">Easy, hassle-free way to get rid of your house quickly by paying cash</p>
                </div>
              </div>
              <div className="mt-8">
                <Button 
                  onClick={handleContactForm}
                  className="bg-primary hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg"
                >
                  See What We Can Offer You
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="rounded-xl shadow-lg overflow-hidden">
                <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube-nocookie.com/embed/aE_beek0oyQ?si=egqyH1EXeMUPDEjK" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="max-w-full h-auto"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Contact us today and let's discuss your property. We'll explain everything you need to know.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleContactForm}
              className="bg-secondary hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg text-lg"
            >
              Get Your Cash Offer
            </Button>
            <Button
              variant="outline"
              asChild
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg text-lg"
            >
              <a href="tel:2162603455">
                <Phone className="mr-2 h-5 w-5" />
                (216) 260-3455
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
