import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/context/ThemeContext";

import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import AboutFounder from "@/components/AboutFounder";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="digital-sathi-theme">
        <TooltipProvider>
          <LoadingScreen />
          <div className="min-h-[100dvh] flex flex-col font-sans">
            <Navbar />
            <main className="flex-1">
              <Hero />
              <Services />
              <WhyUs />
              <Portfolio />
              <Process />
              <Testimonials />
              <AboutFounder />
              <Contact />
            </main>
            <Footer />
            <BackToTop />
          </div>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
