import { Building2, Phone, Mail, MapPin, Clock, Shield, Award, Users, Hammer, Home, Factory, Wrench, Facebook, Instagram, Twitter, Linkedin, Youtube, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  { title: "Modern Residential Complex", category: "Residential", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop", description: "Luxury apartment complex with modern amenities" },
  { title: "Commercial Plaza", category: "Commercial", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop", description: "Multi-story commercial building" },
  { title: "Industrial Warehouse", category: "Industrial", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop", description: "Large-scale warehouse facility" },
  { title: "Villa Project", category: "Residential", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop", description: "Luxury villa with contemporary design" },
  { title: "Hospital Building", category: "Healthcare", image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&h=400&fit=crop", description: "Multi-specialty hospital construction" },
  { title: "School Campus", category: "Educational", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop", description: "Modern educational campus" }
];

const services = [
  { icon: Home, title: "Residential Construction", description: "Building dream homes with precision and care." },
  { icon: Building2, title: "Commercial Projects", description: "Offices and retail spaces designed for success." },
  { icon: Factory, title: "Industrial Construction", description: "Warehouses and factories built to highest standards." },
  { icon: Wrench, title: "Renovation & Remodeling", description: "Transform existing structures with expert services." }
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "25+", label: "Years Experience" },
  { number: "100+", label: "Expert Workers" },
  { number: "50+", label: "Awards Won" }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Building2 className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl text-secondary-foreground tracking-wider">KHAN CONSTRUCTION</h1>
                <p className="text-xs text-muted-foreground">Building Your Dreams</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-secondary-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-secondary-foreground hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-secondary-foreground hover:text-primary transition-colors">Services</a>
              <a href="#projects" className="text-secondary-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-secondary-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541976590-713941681591?w=1920&h=1080&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0 gradient-overlay" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6 animate-fade-up">
              <span className="text-primary font-medium">🏗️ Premier Construction Company in Alanganallur</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-secondary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              BUILDING <span className="text-primary">EXCELLENCE</span> WITH INTEGRITY
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
              From concept to completion, we bring your construction dreams to life with unmatched quality and decades of expertise.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                Get Free Quote <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 text-lg px-8">
                View Projects
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="bg-card border border-border p-6 text-center hover-lift animate-fade-up" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                  <div className="text-3xl md:text-4xl text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-primary font-medium text-sm">ABOUT US</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                CRAFTING <span className="text-primary">DREAMS</span> INTO REALITY
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Khan Construction has been a cornerstone of the construction industry in Alanganallur for over two decades. Our commitment to quality, safety, and customer satisfaction has made us the trusted choice.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Shield, title: "Quality Assured", sub: "ISO certified standards" },
                  { icon: Award, title: "Award Winning", sub: "Recognized excellence" },
                  { icon: Users, title: "Expert Team", sub: "Skilled professionals" },
                  { icon: Clock, title: "On-Time Delivery", sub: "Timely completion" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=700&fit=crop" alt="Construction site" className="w-full h-auto rounded-lg shadow-2xl relative z-10" />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary rounded-lg z-0" />
              <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-primary rounded-lg z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-medium text-sm">OUR SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-secondary-foreground mb-4">WHAT WE <span className="text-primary">BUILD</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-card/10 border-border/30 hover-lift group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl text-secondary-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-medium text-sm">OUR PORTFOLIO</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">FEATURED <span className="text-primary">PROJECTS</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg hover-lift">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full mb-3">{project.category}</span>
                    <h3 className="text-2xl text-secondary-foreground mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full">{project.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">READY TO BUILD YOUR DREAM?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Contact us today for a free consultation.</p>
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-10">
            Get Started Today <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-primary font-medium text-sm">CONTACT US</span>
              </div>
              <h2 className="text-4xl md:text-5xl text-secondary-foreground mb-6">GET IN <span className="text-primary">TOUCH</span></h2>
              <p className="text-lg text-muted-foreground mb-10">Have a project in mind? We'd love to hear from you.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl text-secondary-foreground mb-1">Our Address</h4>
                    <p className="text-muted-foreground">Alanganallur, Madurai District<br />Tamil Nadu, India - 625514</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl text-secondary-foreground mb-1">Phone Number</h4>
                    <p className="text-muted-foreground">+91 XXXXX XXXXX<br />+91 XXXXX XXXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl text-secondary-foreground mb-1">Email Address</h4>
                    <p className="text-muted-foreground">info@khanconstruction.com<br />contact@khanconstruction.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl text-secondary-foreground mb-1">Working Hours</h4>
                    <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-xl text-secondary-foreground mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-primary">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-card p-8 md:p-10 rounded-lg border border-border">
              <h3 className="text-3xl text-foreground mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Enter phone number" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none">
                    <option value="">Select project type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="renovation">Renovation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Your Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none resize-none" placeholder="Tell us about your project..." />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6">
                  <Hammer className="w-5 h-5 mr-2" /> Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-xl text-secondary-foreground">KHAN CONSTRUCTION</h1>
            </div>
            <p className="text-muted-foreground text-center">© 2024 Khan Construction. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
