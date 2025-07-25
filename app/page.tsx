import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Services from "@/components/Services";
import FAQ from "@/components/faq";
import Appointment from "@/components/appointment";
export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen">
      {/* Gold Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-neutral-900 to-black -z-10" />
      <div className="fixed inset-0 bg-gradient-to-tr from-yellow-500/5 via-transparent to-orange-500/5 -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400/10 via-transparent to-transparent -z-10" />

      <Hero />
      <LogoMarquee />
      <Services />
      <Appointment />
      <FAQ />
    </main>
  );
}
