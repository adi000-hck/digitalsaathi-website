import { ArrowLeft } from "lucide-react";

export default function Terms() {
  const lastUpdated = "June 5, 2026";

  return (
    <section className="py-24 bg-muted/20 min-h-[100dvh]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="rounded-[2rem] border border-border bg-background/90 p-8 md:p-12 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
            <div className="flex flex-col gap-4 mb-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-primary font-semibold">Terms & Conditions</p>
                <h1 className="mt-4 text-4xl md:text-5xl font-black tracking-tight">DigitalSaathi Terms & Conditions</h1>
              </div>
              <span className="text-sm text-muted-foreground">Last updated: {lastUpdated}</span>
            </div>

            <p className="text-base leading-8 text-muted-foreground mb-8">
              These terms govern your use of DigitalSaathi services for AI automation, website development, chatbots, voice agents, and business automation.
            </p>

            <div className="space-y-10">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Service Scope</h2>
                <p className="text-muted-foreground leading-7">
                  DigitalSaathi delivers AI automation solutions, website development, AI chatbots, AI voice agents, and business automation services tailored to your requirements. Our team will define the project scope during discovery and provide a proposal for approval.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Payment Terms</h2>
                <p className="text-muted-foreground leading-7">
                  Project work begins once the initial payment is received, as outlined in your proposal or invoice. Further milestones or final delivery may require additional payments according to the agreed schedule.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Project Delivery Timelines</h2>
                <p className="text-muted-foreground leading-7">
                  Delivery timelines are estimated based on project complexity. We commit to realistic deadlines and will communicate any changes promptly. Timelines may be affected by client feedback, scope changes, or external dependencies.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Client Responsibilities</h2>
                <p className="text-muted-foreground leading-7">
                  Clients must provide accurate project details, timely feedback, access to necessary resources, and approvals as requested. Delays in delivering assets or feedback may impact the delivery schedule.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Intellectual Property</h2>
                <p className="text-muted-foreground leading-7">
                  Upon full payment, DigitalSaathi transfers ownership of custom deliverables as agreed in the project contract. We retain the right to showcase the work in our portfolio unless otherwise requested.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-7">
                  DigitalSaathi is not liable for indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the amount paid for the specific service provided.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Refund Policy</h2>
                <p className="text-muted-foreground leading-7">
                  Refunds are handled on a case-by-case basis and depend on the project stage, work completed, and agreement terms. Please contact us directly if you believe a refund is required.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Contact Details</h2>
                <p className="text-muted-foreground leading-7">
                  For questions about these terms, reach out to DigitalSaathi:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-7">
                  <li>Email: <a href="mailto:digitalsaathi.ai@gmail.com" className="text-primary hover:text-primary/80 transition-colors">digitalsaathi.ai@gmail.com</a></li>
                  <li>Phone: <a href="tel:+919565045091" className="text-primary hover:text-primary/80 transition-colors">+91 9565045091</a></li>
                </ul>
              </section>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <a href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to home
            </a>
            <p className="text-sm text-muted-foreground">DigitalSaathi • AI Automation • Website Development • AI Chatbots • AI Voice Agents</p>
          </div>
        </div>
      </div>
    </section>
  );
}
