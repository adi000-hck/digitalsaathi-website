import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import dentalImg from "../assets/images/portfolio-dental.png";
import schoolImg from "../assets/images/portfolio-school.png";
import hardwareImg from "../assets/images/portfolio-hardware.png";

const projects = [
  {
    title: "Dental Clinic Website",
    description: "A modern appointment booking website for Dr. Sharma's Dental Clinic — clean, trustworthy, and easy to navigate",
    image: dentalImg,
    tags: ["Web Dev", "Booking System"]
  },
  {
    title: "Government School Website",
    description: "A complete digital presence for Sarvodaya Vidyalaya — student portal, announcements, and gallery",
    image: schoolImg,
    tags: ["CMS", "Portal"]
  },
  {
    title: "Kisan Traders Hardware Store",
    description: "An e-commerce-ready website for Kisan Traders with product catalog and WhatsApp order integration",
    image: hardwareImg,
    tags: ["E-commerce", "WhatsApp Bot"]
  }
];

export default function Portfolio() {
  return (
    <section className="py-24" id="portfolio">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Work</h2>
            <p className="text-muted-foreground text-lg max-w-xl">Explore how we've helped local businesses transform their digital presence and streamline operations.</p>
          </div>
          <Button variant="ghost" className="gap-2 group">
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-3xl overflow-hidden group flex flex-col h-full"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <Button variant="secondary" size="sm" className="gap-2 rounded-full font-medium shadow-xl">
                    <ExternalLink className="w-4 h-4" />
                    View Live Demo
                  </Button>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground flex-grow">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
