import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link
    const mailtoLink = `mailto:gamechangersgrill@gmail.com?subject=Contact from ${formData.name}&body=Name: ${formData.name}%0DEmail: ${formData.email}%0DPhone: ${formData.phone}%0D%0DMessage:%0D${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="heading-xl text-primary-foreground mb-4">GET IN TOUCH</h1>
          <p className="body-lg text-primary-foreground/90">
            We'd love to hear from you. Visit us or reach out today!
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="heading-lg text-primary mb-8">CONTACT INFORMATION</h2>

              {/* Address */}
              <div className="mb-8 p-6 bg-white rounded-lg border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="heading-sm text-primary mb-2">ADDRESS</h3>
                    <p className="body-base text-muted-foreground">
                      414 S Main St<br />
                      Palmyra, MO 63461
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-8 p-6 bg-white rounded-lg border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="heading-sm text-accent mb-2">PHONE</h3>
                    <a href="tel:(573) 869-0022" className="body-base text-primary hover:underline font-semibold">
                      (573) 869-0022
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="mb-8 p-6 bg-white rounded-lg border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="heading-sm text-primary mb-2">EMAIL</h3>
                    <a href="mailto:gamechangersgrill@gmail.com" className="body-base text-primary hover:underline font-semibold">
                      gamechangersgrill@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="p-6 bg-white rounded-lg border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="heading-sm text-accent mb-4">HOURS</h3>
                    <div className="space-y-2 body-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Mon - Thu (Bar)</span>
                        <span className="font-bold">4 PM - 12 AM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fri (Bar)</span>
                        <span className="font-bold">4 PM - 1:30 AM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sat (Bar)</span>
                        <span className="font-bold">11 AM - 1:30 AM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sun (Bar)</span>
                        <span className="font-bold">11 AM - 10 PM</span>
                      </div>
                      <hr className="my-2" />
                      <div className="flex justify-between">
                        <span>Mon - Sat (Kitchen)</span>
                        <span className="font-bold">11 AM - 8 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sun (Kitchen)</span>
                        <span className="font-bold">11 AM - 4 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="heading-lg text-primary mb-8">SEND US A MESSAGE</h2>

              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="(573) 869-0022"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3"
                >
                  SEND MESSAGE
                </Button>
              </form>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                * Required fields
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="heading-lg text-primary mb-8 text-center">FIND US ON THE MAP</h2>
          
          <div className="rounded-lg overflow-hidden shadow-lg h-96 bg-white">
            <iframe
              width="100%"
              height="100%"
              frameBorder={0}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.5555555555556!2d-91.5166667!3d39.7833333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87df3b3b3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2s414%20S%20Main%20St%2C%20Palmyra%2C%20MO%2063461!5e0!3m2!1sen!2sus!4v1234567890"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-8 text-center">
            <a 
              href="https://www.google.com/maps/search/414+S+Main+St,+Palmyra,+MO+63461" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition"
            >
              GET DIRECTIONS
            </a>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="heading-lg text-primary-foreground mb-6">FOLLOW US ON SOCIAL MEDIA</h2>
          <div className="flex justify-center gap-6">
            <a 
              href="https://facebook.com/p/Game-Changers-Bar-Grill-61576250450218/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground hover:opacity-80 transition font-semibold"
            >
              Facebook
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground hover:opacity-80 transition font-semibold"
            >
              Instagram
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground hover:opacity-80 transition font-semibold"
            >
              TikTok
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
