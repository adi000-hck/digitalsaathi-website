import { motion } from "framer-motion";
import { MonitorSmartphone, MessageSquare, Mic, Cpu, Paintbrush, Share2 } from "lucide-react";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Website Development",
    description: "Stunning, fast, and mobile-first websites that convert visitors into customers",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500"
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description: "24/7 intelligent chatbots that handle customer queries and boost engagement",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500"
  },
  {
    icon: Mic,
    title: "AI Voice Agents",
    description: "Smart voice agents that automate phone support and lead qualification",
    color: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-500"
  },
  {
    icon: Cpu,
    title: "Business Automation",
    description: "Streamline repetitive tasks with AI-powered workflows and integrations",
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-500"
  },
  {
    icon: Paintbrush,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that delight users and drive conversions",
    color: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-500"
  },
  {
    icon: Share2,
    title: "Digital Presence Setup",
    description: "Complete social media setup, SEO, and online presence management",
    color: "from-indigo-500/20 to-blue-500/20",
    iconColor: "text-indigo-500"
  }
];

export default function Services() {
  return (
    <section className="py-24 relative" id="services">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Everything you need to establish a powerful digital presence and automate your business.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} blur-[50px] -z-10 group-hover:scale-150 transition-transform duration-500`} />
              
              <div className={`w-14 h-14 rounded-2xl bg-muted/50 flex items-center justify-center mb-6 border border-border/50 group-hover:border-${service.iconColor}/30 transition-colors`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
