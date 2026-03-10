'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/header';
import WhatsAppButton from '@/components/whatsapp-button';
import Footer from '@/components/footer';
import { Star, ChevronLeft, ChevronRight, Award, Sparkles, Shield, DollarSign, Heart } from 'lucide-react';

const services = [
  {
    category: 'Hair Services',
    items: [
      { name: 'Haircut', price: 'PKR 1,500 - 2,500', image: '/service-haircut.jpg' },
      { name: 'Hair Styling', price: 'PKR 2,000 - 4,000', image: '/service-haircut.jpg' },
      { name: 'Hair Coloring', price: 'PKR 5,000 - 12,000', image: '/service-haircut.jpg' },
      { name: 'Hair Treatment', price: 'PKR 3,000 - 8,000', image: '/service-haircut.jpg' },
    ],
  },
  {
    category: 'Skin Services',
    items: [
      { name: 'Facial', price: 'PKR 2,500 - 6,000', image: '/service-facial.jpg' },
      { name: 'Cleanup', price: 'PKR 1,500 - 3,000', image: '/service-facial.jpg' },
      { name: 'Skin Polishing', price: 'PKR 2,000 - 4,500', image: '/service-facial.jpg' },
    ],
  },
  {
    category: 'Makeup Services',
    items: [
      { name: 'Party Makeup', price: 'PKR 4,000 - 8,000', image: '/service-makeup.jpg' },
      { name: 'Engagement Makeup', price: 'PKR 10,000 - 20,000', image: '/service-makeup.jpg' },
      { name: 'Bridal Makeup', price: 'PKR 20,000 - 60,000', image: '/service-makeup.jpg' },
    ],
  },
  {
    category: 'Hands & Feet',
    items: [
      { name: 'Manicure', price: 'PKR 1,500', image: '/service-nails.jpg' },
      { name: 'Pedicure', price: 'PKR 2,000', image: '/service-nails.jpg' },
      { name: 'Nail Art', price: 'PKR 2,000 - 5,000', image: '/service-nails.jpg' },
    ],
  },
];

const testimonials = [
  {
    name: 'Fatima Khan',
    rating: 5,
    text: 'One of the best ladies salons in Islamabad. The staff is professional and my bridal makeup looked absolutely stunning. Highly recommended!',
  },
  {
    name: 'Ayesha Ahmed',
    rating: 5,
    text: 'Excellent service and premium products. The salon is clean, hygienic, and the stylists are very skilled. My hair looks perfect!',
  },
  {
    name: 'Sara Malik',
    rating: 5,
    text: 'Great experience! The team is friendly and professional. They listened to what I wanted and delivered amazing results.',
  },
  {
    name: 'Zainab Hassan',
    rating: 5,
    text: 'I had my engagement makeup done here and got so many compliments! The artists are truly talented and understand your preferences perfectly.',
  },
  {
    name: 'Maryam Sheikh',
    rating: 5,
    text: 'The facial treatment I received was amazing. My skin feels refreshed and glowing. The staff was so professional and courteous throughout.',
  },
  {
    name: 'Hira Mahmood',
    rating: 5,
    text: 'Visited for a simple haircut but left absolutely impressed. The salon ambiance is so relaxing and the stylists are very talented.',
  },
  {
    name: 'Sana Butt',
    rating: 5,
    text: 'Best bridal packages in Islamabad! The team made sure every detail was perfect for my big day. Worth every penny!',
  },
  {
    name: 'Rabia Akmal',
    rating: 5,
    text: 'I come here regularly for my maintenance appointments. The consistency in quality and care is what keeps me coming back.',
  },
  {
    name: 'Nida Parvez',
    rating: 5,
    text: 'The personalized consultation they offer is amazing. They understand your skin type and recommend products accordingly. Truly professional!',
  },
];

const whyChooseUs = [
  {
    title: 'Professional Stylists',
    description: 'Highly trained and experienced beauty professionals dedicated to perfecting your look.',
    icon: Award,
  },
  {
    title: 'Premium Beauty Products',
    description: 'We use only the highest quality beauty and skincare products for optimal results.',
    icon: Sparkles,
  },
  {
    title: 'Clean & Hygienic',
    description: 'Our salon maintains the highest standards of cleanliness and hygiene.',
    icon: Shield,
  },
  {
    title: 'Affordable Pricing',
    description: 'Premium services at competitive prices without compromising on quality.',
    icon: DollarSign,
  },
  {
    title: 'Personalized Consultation',
    description: 'Each client receives a personalized beauty consultation to suit their unique needs.',
    icon: Heart,
  },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

 const handleBooking = (e: React.FormEvent) => {
  e.preventDefault();

  const message = `New Salon Booking
Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Date: ${formData.date}
Time: ${formData.time || 'No time selected'}  
Message: ${formData.message || 'No additional message'}`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/923089340529?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank');

  // Reset form including time
  setFormData({ name: '', phone: '', service: '', date: '', time: '', message: '' });
};

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen md:h-screen flex items-center justify-center overflow-hidden bg-background py-12 md:py-0">
        <Image
          src="/hero-salon.jpg"
          alt="Luxury salon services"
          fill
          className="object-cover absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 md:mb-6 font-bold leading-tight">
            Luxury Hair & Beauty Salon for Women
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8">
            Professional hair, makeup, and skincare services designed to make you look and feel beautiful.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm md:text-base cursor-pointer"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-foreground hover:bg-white/10 text-sm md:text-base hover:text-white cursor-pointer"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-center mb-12 md:mb-16 text-foreground">
            Our Beauty Services
          </h2>

          {services.map((serviceGroup) => (
            <div key={serviceGroup.category} className="mb-12 md:mb-16">
              <h3 className="text-xl md:text-2xl font-serif mb-6 md:mb-8 text-primary">{serviceGroup.category}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {serviceGroup.items.map((service) => (
                  <Card key={service.name} className="overflow-hidden hover:shadow-lg transition-shadow bg-card flex flex-col">
                    <div className="relative w-full h-40 md:h-48 flex-shrink-0">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardContent className="px-4 md:px-6 pt-0 pb-3 md:pb-4 flex flex-col flex-grow">
                      <h4 className="text-base md:text-lg font-semibold mb-2 text-foreground">{service.name}</h4>
                      <p className="text-primary font-semibold mb-4">{service.price}</p>
                      <Button
                        size="sm"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-auto text-xs md:text-sm cursor-pointer"
                        onClick={() => {
                          const message = `Hi! I'm interested in booking *${service.name}* for PKR ${service.price.split(' ')[1]}. Could you please provide availability?`;
                          const encodedMessage = encodeURIComponent(message);
                          window.open(`https://wa.me/923089340529?text=${encodedMessage}`, '_blank');
                        }}
                      >
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-center mb-4 text-foreground">
            Transparent Pricing
          </h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12">
            Final price may vary depending on hair length, products used, and service customization.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {services.flatMap((group) =>
              group.items.map((service) => (
                <Card key={`pricing-${service.name}`} className="bg-card">
                  <CardContent className="p-6 flex justify-between items-center">
                    <span className="font-semibold text-foreground">{service.name}</span>
                    <span className="text-primary font-bold">{service.price}</span>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-center mb-12 md:mb-16 text-foreground">
            Why Women in Islamabad Choose Our Salon
          </h2>

          <div className="flex flex-col gap-6">
            {/* First Row - 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto w-full">
              {whyChooseUs.slice(0, 3).map((item) => {
                const IconComponent = item.icon;
                return (
                  <Card key={item.title} className="bg-card hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center justify-center">
                        <IconComponent size={40} className="text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-foreground text-center">{item.title}</h3>
                      <p className="text-muted-foreground text-sm text-center">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Second Row - 2 items centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto md:max-w-2xl w-full">
              {whyChooseUs.slice(3, 5).map((item) => {
                const IconComponent = item.icon;
                return (
                  <Card key={item.title} className="bg-card hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center justify-center">
                        <IconComponent size={40} className="text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-foreground text-center">{item.title}</h3>
                      <p className="text-muted-foreground text-sm text-center">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-center mb-12 md:mb-16 text-foreground">
            What Our Clients Say
          </h2>

          <div className="relative">
            {/* Desktop Grid View - showing 3 cards rotating */}
            <div className="hidden md:grid grid-cols-3 gap-6 md:gap-8">
              {testimonials
                .slice(currentTestimonial, currentTestimonial + 3)
                .map((testimonial) => (
                  <Card key={testimonial.name} className="bg-card h-full">
                    <CardContent className="p-6">
                      <div className="flex gap-1 mb-4">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, i) => (
                            <Star key={i} size={16} className="fill-accent text-accent" />
                          ))}
                      </div>
                      <p className="text-foreground mb-4 leading-relaxed">"{testimonial.text}"</p>
                      <p className="font-semibold text-primary">{testimonial.name}</p>
                    </CardContent>
                  </Card>
                ))}
            </div>

            {/* Mobile Single Card View */}
            <div className="block md:hidden">
              <Card className="bg-card">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array(testimonials[currentTestimonial].rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} size={16} className="fill-accent text-accent" />
                      ))}
                  </div>
                  <p className="text-foreground mb-4 leading-relaxed">"{testimonials[currentTestimonial].text}"</p>
                  <p className="font-semibold text-primary">{testimonials[currentTestimonial].name}</p>
                </CardContent>
              </Card>
            </div>

            {/* Dot Navigation */}
            <div className="flex gap-2 flex-wrap justify-center mt-6 md:mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded transition-all cursor-pointer ${
                    index === currentTestimonial
                      ? 'bg-primary w-6'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows Below Dots */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="p-2 md:p-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={nextTestimonial}
                className="p-2 md:p-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <a href="#gallery" className="text-3xl sm:text-4xl md:text-5xl font-serif text-center mb-12 md:mb-16 text-foreground hover:text-primary transition-colors cursor-pointer block">
            Our Work & Salon
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Large Featured Image */}
            <div className="sm:col-span-2 md:col-span-2 md:row-span-2 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <div className="relative w-full h-64 md:h-full min-h-96">
                <Image
                  src="/gallery-4.jpg"
                  alt="Bridal makeup showcase"
                  fill
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Regular Grid Items */}
            {[
              '/gallery-1.jpg',
              '/gallery-2.jpg',
              '/gallery-3.jpg',
              '/gallery-5.jpg',
              '/gallery-6.jpg',
              '/gallery-7.jpg',
              '/gallery-8.jpg',
              '/gallery-9.jpg',
            ].map((imageUrl, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative w-full h-48">
                  <Image
                    src={imageUrl}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
  <section id="booking" className="py-12 md:py-20 px-4 bg-background">
  <div className="max-w-2xl mx-auto">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-center mb-8 md:mb-12 text-foreground">
      Book Your Appointment
    </h2>

    <Card className="bg-card">
      <CardContent className="p-8">
        <form onSubmit={handleBooking} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2 text-foreground">Name</label>
            <Input
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="border-border bg-background text-foreground"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-foreground">Phone Number</label>
            <Input
              type="tel"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="border-border bg-background text-foreground"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-foreground">Service</label>
            <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
              <SelectTrigger className="border-border bg-background text-foreground">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {services.flatMap((group) =>
                  group.items.map((service) => (
                    <SelectItem key={service.name} value={service.name}>
                      {service.name}
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-foreground">Preferred Date</label>
            <Input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
              className="border-border bg-background text-foreground"
            />
          </div>

          {/* NEW Preferred Time */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-foreground">Preferred Time</label>
            <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
              <SelectTrigger className="border-border bg-background text-foreground">
                <SelectValue placeholder="Select a time" />
              </SelectTrigger>
              <SelectContent>
                {[
                  "1:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
                  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
                  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM"
                ].map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-foreground">Message (Optional)</label>
            <Textarea
              placeholder="Any additional details or requests..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="border-border bg-background text-foreground resize-none"
              rows={4}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold cursor-pointer"
          >
            Book Appointment via WhatsApp
          </Button>
        </form>
      </CardContent>
    </Card>
  </div>
</section>

      {/* Location Section */}
      <section className="py-12 md:py-20 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-center mb-8 md:mb-12 text-foreground">
            Visit Our Salon
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Contact Info</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Address</p>
                    <p className="text-muted-foreground">F-10 Islamabad, Pakistan</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <p className="text-muted-foreground">+92 308 934 0529</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Hours</p>
                    <p className="text-muted-foreground">11:00 AM – 8:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-0">
                <div className="w-full h-[250px] md:h-[350px] rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.8524189869746!2d73.15963077346218!3d33.710235318984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df97b0a5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sF-10%20Islamabad!5e0!3m2!1sen!2spk!4v1234567890123"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
