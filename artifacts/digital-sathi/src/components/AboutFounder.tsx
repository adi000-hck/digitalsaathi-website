import { motion } from "framer-motion";
import { Code, Bot, PenTool, TrendingUp } from "lucide-react";
import adityaImg from "../assets/images/founder-aditya.png";

const skills = [
  { name: "Web Development", icon: Code },
  { name: "AI Automation", icon: Bot },
  { name: "UI/UX Design", icon: PenTool },
  { name: "Digital Marketing", icon: TrendingUp }
];

export default function AboutFounder() {
  return (
    <section className="py-24 bg-muted/30" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Meet the Founder</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">The vision behind Digital Sathi.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto glass-panel rounded-[2.5rem] overflow-hidden"
        >
          <div className="grid md:grid-cols-5 gap-0">
            <div className="md:col-span-2 relative min-h-[300px] md:min-h-full">
              <img 
                src={adityaImg} 
                alt="Aditya Tiwari - Founder of Digital Sathi" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-background/90" />
            </div>
            
            <div className="md:col-span-3 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-2">Aditya Tiwari</h3>
              <p className="text-primary font-semibold text-lg mb-6">Founder & Lead Developer</p>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  "BCA Student, Web Developer, and AI Solutions Builder helping businesses build a strong online presence."
                </p>
                <p>
                  "Passionate about making cutting-edge technology accessible to every local business in India. I believe that every shop, clinic, and school deserves a world-class digital presence without the exorbitant agency price tags."
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-auto">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <skill.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-sm md:text-base">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
