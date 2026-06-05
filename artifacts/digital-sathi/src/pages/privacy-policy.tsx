import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "June 5, 2026";

  return (
    <section className="py-24 bg-muted/20 min-h-[100dvh]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="rounded-[2rem] border border-border bg-background/90 p-8 md:p-12 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
            <div className="flex flex-col gap-4 mb-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-primary font-semibold">Privacy Policy</p>
                <h1 className="mt-4 text-4xl md:text-5xl font-black tracking-tight">DigitalSaathi Privacy Policy</h1>
              </div>
              <span className="text-sm text-muted-foreground">Last updated: {lastUpdated}</span>
            </div>

            <p className="text-base leading-8 text-muted-foreground mb-8">
              DigitalSaathi is committed to protecting your privacy. This policy explains the types of personal information we collect, how we use it, and your rights as a visitor or client.
            </p>

            <div className="space-y-10">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Information We Collect</h2>
                <p className="text-muted-foreground leading-7">
                  We collect information that helps us deliver a personalized, secure, and high-quality service. This may include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-7">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Project details and requirements</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-7">
                  Your information is used to provide the services you request, improve our offerings, communicate project updates, and respond to support inquiries. We may also use information for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-7">
                  <li>Onboarding and project planning</li>
                  <li>Service delivery and support</li>
                  <li>Personalized proposals and quotes</li>
                  <li>Updates about new digital automation solutions</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Data Security</h2>
                <p className="text-muted-foreground leading-7">
                  We protect your data with industry-standard security measures and access controls. While no system is completely secure, we strive to safeguard personal information against unauthorized access, disclosure, or loss.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Third-Party Services</h2>
                <p className="text-muted-foreground leading-7">
                  We may use trusted third-party services to support our operations, such as analytics, hosting, and communications tools. These providers process data on our behalf and must comply with applicable privacy standards.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Your Rights</h2>
                <p className="text-muted-foreground leading-7">
                  You have the right to access, update, or delete your personal information. You can also request that we stop using your data for marketing purposes.
                </p>
                <p className="text-muted-foreground leading-7">
                  To exercise these rights, contact us at <a href="mailto:digitalsaathi.ai@gmail.com" className="text-primary hover:text-primary/80 transition-colors">digitalsaathi.ai@gmail.com</a>.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="text-muted-foreground leading-7">
                  If you have questions or concerns about this privacy policy, please reach out to DigitalSaathi:
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
