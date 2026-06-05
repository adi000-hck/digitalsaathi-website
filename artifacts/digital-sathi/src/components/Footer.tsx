import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#" className="inline-block text-2xl font-black tracking-tighter text-gradient mb-4">
              DigitalSaathi
            </a>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] mb-3 text-primary">
              AI Automation • Website Development • Business Growth
            </p>
            <p className="text-muted-foreground mb-6">
              Transforming Local Businesses, Digitally. Bringing Silicon Valley quality to the Indian market.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="https://www.instagram.com/digitalsaathi.ai?igsh=c283aGw0MHcwbzFs" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaXTwitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Website Development</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">AI Chatbots</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">AI Voice Agents</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Business Automation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-muted-foreground">
                <a href="tel:+919565045091" className="hover:text-primary transition-colors">+91 9565045091</a>
              </li>
              <li className="text-muted-foreground">
                <a href="mailto:digitalsaathi.ai@gmail.com" className="hover:text-primary transition-colors break-all">digitalsaathi.ai@gmail.com</a>
              </li>
              <li className="text-muted-foreground">
                Instagram: <a href="https://www.instagram.com/digitalsaathi.ai?igsh=c283aGw0MHcwbzFs" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">@digitalsaathi.ai</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            &copy; {currentYear} DigitalSaathi. All rights reserved. Made with love in India.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-foreground transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
