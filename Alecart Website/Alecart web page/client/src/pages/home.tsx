import { DollarSign, Home as HomeIcon, Clock, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface HomeProps {
  onShowContactForm?: () => void;
}

export default function Home({ onShowContactForm }: HomeProps = {}) {
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
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                We Buy Houses Fast, Smooth and Easy for all home owners
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                We buy houses in any condition. No repairs needed, no agent commissions, close in as little as 7 days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleContactForm}
                  className="bg-secondary hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg text-lg"
                >
                  Get Your Cash Offer Now
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-4 px-8 rounded-lg text-lg"
                >
                  <a href="tel:2162603455">
                    <Phone className="mr-2 h-5 w-5" />
                    (216) 260-3455
                  </a>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="Beautiful family home with sold sign" 
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Alecart?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make selling your house simple, fast, and stress-free
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <CardContent className="pt-6">
                <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Cash Offers</h3>
                <p className="text-gray-600">Get a fair all-cash offer within 24 hours. No financing contingencies or delays.</p>
              </CardContent>
            </Card>
            <Card className="p-8 text-center">
              <CardContent className="pt-6">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HomeIcon size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">As-Is Condition</h3>
                <p className="text-gray-600">No need for repairs, cleaning, or staging. We buy houses in any condition.</p>
              </CardContent>
            </Card>
            <Card className="p-8 text-center">
              <CardContent className="pt-6">
                <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Fast Closing</h3>
                <p className="text-gray-600">Close in as little as 7 days or on your timeline. You choose the closing date.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from homeowners who chose Alecart
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Testimonial 1 */}
            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100" 
                    alt="Happy homeowner testimonial" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Margaret Williams</h4>
                    <p className="text-gray-600 text-sm">Cleveland, OH</p>
                  </div>
                </div>
                <div className="text-yellow-400 mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700">
                  "After my husband passed, I needed to sell quickly. Alecart Solutions made the process so simple and stress-free. Closed in 8 days!"
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100" 
                    alt="Happy homeowner testimonial" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Robert Chen</h4>
                    <p className="text-gray-600 text-sm">Phoenix, AZ</p>
                  </div>
                </div>
                <div className="text-yellow-400 mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700">
                  "I was relocating for work and needed to sell fast. They gave me a fair cash offer and handled everything. Couldn't be happier!"
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616c3e0d6b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100" 
                    alt="Happy homeowner testimonial" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Patricia Davis</h4>
                    <p className="text-gray-600 text-sm">Tampa, FL</p>
                  </div>
                </div>
                <div className="text-yellow-400 mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700">
                  "The house had been in our family for 30 years and needed lots of work. They bought it as-is and made the whole process so easy."
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 4 */}
            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100" 
                    alt="Happy homeowner testimonial" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">James Martinez</h4>
                    <p className="text-gray-600 text-sm">Los Angeles, CA</p>
                  </div>
                </div>
                <div className="text-yellow-400 mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700">
                  "Inherited property with multiple liens. They handled all the paperwork and complications. Got my cash in 9 days!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Sell Your House Fast?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get your free, no-obligation cash offer today. We buy houses in your area in any condition.
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
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-4 px-8 rounded-lg text-lg"
            >
              <a href="tel:2162603455">
                <Phone className="mr-2 h-5 w-5" />
                Call (216) 260-3455
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
