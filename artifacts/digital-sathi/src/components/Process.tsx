import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We listen to your business goals and understand your requirements"
  },
  {
    number: "02",
    title: "Planning",
    description: "We design a strategy, timeline, and technical blueprint tailored for you"
  },
  {
    number: "03",
    title: "Development",
    description: "Our team builds your solution with precision, speed, and quality"
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We deploy, test, and support your product post-launch"
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-muted/30" id="process">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How We Work</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A streamlined, transparent process designed to get you results fast.</p>
        </motion.div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2 z-0" />
          
          {/* Connecting line (mobile) */}
          <div className="lg:hidden absolute top-0 bottom-0 left-8 w-0.5 bg-gradient-to-b from-transparent via-primary/50 to-transparent z-0" />

          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-24 lg:pl-0 lg:text-center"
              >
                <div className="absolute left-0 top-0 lg:static lg:mx-auto w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.2)] mb-6">
                  <span className="text-xl font-bold text-primary">{step.number}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
