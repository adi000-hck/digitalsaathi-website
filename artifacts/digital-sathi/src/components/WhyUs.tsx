import { motion } from "framer-motion";
import { Zap, Tag, Brain, Smartphone, LifeBuoy } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Projects delivered on time, every time — no delays"
  },
  {
    icon: Tag,
    title: "Affordable Pricing",
    description: "Premium quality at prices that make sense for local businesses"
  },
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description: "Cutting-edge AI tools integrated into everything we build"
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive Design",
    description: "Every pixel perfect on every screen size"
  },
  {
    icon: LifeBuoy,
    title: "Ongoing Support",
    description: "We're there after launch — support, updates, and growth guidance"
  }
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-muted/30 relative" id="why-us">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We bring Silicon Valley quality to local Indian businesses. Partner with us for a hassle-free digital transformation experience.
            </p>
            
            <div className="space-y-6">
              {reasons.slice(0, 3).map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 md:p-12 rounded-[2.5rem] relative"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[60px] rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 blur-[60px] rounded-full" />
            
            <div className="space-y-8 relative z-10">
              {reasons.slice(3).map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
              
              <div className="pt-6 border-t border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-2xl">100%</h4>
                    <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div>
                    <h4 className="font-bold text-2xl">24/7</h4>
                    <p className="text-sm text-muted-foreground">Technical Support</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
