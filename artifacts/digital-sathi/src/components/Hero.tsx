import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden" id="home">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[150px] mix-blend-screen animate-pulse-glow" style={{ animationDelay: "2s" }} />
        
        {/* Floating Shapes */}
        <div className="absolute top-[20%] left-[10%] animate-float opacity-50">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary/40 to-purple-500/40 backdrop-blur-md border border-white/10 rotate-12" />
        </div>
        <div className="absolute top-[30%] right-[15%] animate-float-delayed opacity-40">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/30 to-primary/30 backdrop-blur-md border border-white/10" />
        </div>
        <div className="absolute bottom-[20%] left-[20%] animate-float opacity-30" style={{ animationDuration: "7s" }}>
          <div className="w-20 h-20 rounded-xl bg-gradient-to-bl from-pink-500/30 to-purple-500/30 backdrop-blur-md border border-white/10 rotate-45" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-primary/20 text-sm font-medium text-foreground/80"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span>The trusted digital partner for local Indian businesses</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-tight"
          >
            Transform Your Business with <span className="text-gradient">AI & Modern Websites</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We help local businesses get more customers through professional websites, AI automation, and digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto text-lg h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)] transition-all hover:shadow-[0_0_60px_-15px_rgba(99,102,241,0.7)] hover:-translate-y-1"
            >
              <a href="#contact">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-lg h-14 px-8 rounded-full glass-panel hover:bg-muted/50 border-border transition-all hover:-translate-y-1"
            >
              <a href="#portfolio">View Our Work</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
