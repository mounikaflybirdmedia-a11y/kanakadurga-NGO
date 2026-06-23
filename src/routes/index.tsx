import { createFileRoute } from "@tanstack/react-router";
import {
  Heart, Phone, Mail, MapPin, HandHeart, ArrowRight,
  Accessibility, Users, Sprout, ShieldCheck, Sun, Wheat, Leaf,
} from "lucide-react";
const logo = "/logo.png";
import imgOrphanage from "@/assets/orphanage.jpg";
import imgOldAge from "@/assets/oldage.jpg";
import imgEducation from "@/assets/education.jpg";
import imgDisability from "@/assets/disability.jpg";
import imgWomen from "@/assets/women.jpg";
import imgMedical from "@/assets/medical.jpg";
import imgDogs from "@/assets/Screenshot 2026-06-23 172850.png";
import imgHomeCare from "@/assets/Screenshot 2026-06-23 172659.png";
import imgDisabledGirl from "@/assets/Screenshot 2026-06-23 174423.png";
import imgSHG from "@/assets/WhatsApp Image 2026-06-23 at 12.12.19 PM.jpeg";
import img16 from "@/assets/WhatsApp Image 2026-06-23 at 12.12.16 PM.jpeg";
import img36 from "@/assets/WhatsApp Image 2026-06-23 at 12.12.36 PM.jpeg";
import img18 from "@/assets/WhatsApp Image 2026-06-23 at 12.12.18 PM.jpeg";
import img28 from "@/assets/WhatsApp Image 2026-06-23 at 12.12.28 PM.jpeg";
import imgFoodDist from "@/assets/WhatsApp Image 2026-06-23 at 12.12.15 PM.jpeg";
import imgEnvironment from "@/assets/WhatsApp Image 2026-06-23 at 12.12.13 PM.jpeg";
import imgDisabledEssentials from "@/assets/WhatsApp Image 2026-06-23 at 12.12.15 PM (1).jpeg";
import imgHealthCamp from "@/assets/WhatsApp Image 2026-06-23 at 12.12.22 PM.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Kanaka Durga Weaker Section Mahila Mandali — TKDWSMM" },
      { name: "description", content: "An NGO in Phirangipuram, Guntur — serving orphans, the elderly, people with disabilities, and women's empowerment since 1984." },
      { property: "og:title", content: "The Kanaka Durga Weaker Section Mahila Mandali" },
      { property: "og:description", content: "Giving strength to the poor and voiceless — orphanage, old age care, education and disability support across Guntur, Andhra Pradesh." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const services = [
  { img: imgHomeCare, position: "object-top", title: "Home Care Services", desc: "Aged women are happy about our services! A dedicated 9-member team provides knee massages for elderly women, and bathing & feeding assistance for physically handicapped individuals." },
  { img: imgDogs, position: "object-center", title: "Care of Voiceless Animals", desc: "Feeding and caring for street dogs to ensure they are well-nourished and safe." },
  { img: img16, title: "Tailoring Training", desc: "1-year tailoring training program led by a professional trainer, and support to obtain free sewing machines from the government." },
  { img: img36, title: "Clean Drinking Water", desc: "Providing funds and support to construct borewells, ensuring communities have access to safe drinking water." },
  { img: imgHealthCamp, title: "Health Camps & Medical Support", desc: "Providing financial and nutritional assistance to HIV patients, along with regular health camps and hospital referrals for free eye operations." },
  { img: img18, title: "Education Support", desc: "Providing school bags, books, tuition, and career guidance for underprivileged students to prevent dropouts." },
  { img: imgDisabledGirl, position: "object-top", title: "Disabled Girl Child Home Care", desc: "Providing dedicated home-based care for disabled girl children, while offering women empowerment and employment opportunities for the caregivers." },
  { img: imgSHG, title: "Women Self-Help Groups", desc: "Savings, micro-loans and leadership development for rural women." },
  { img: imgFoodDist, title: "Monthly Food Distribution", desc: "Distributing rice bags every month to support nearly 152 needy families." },
  { img: imgEnvironment, title: "Environmental Awareness", desc: "Providing social awareness on household waste disposal, digging rainwater harvesting pits, and making natural fertilizers for plants." },
  { img: imgDisabledEssentials, title: "Essentials for the Disabled", desc: "Providing daily essentials, groceries, and necessary support specifically tailored for physically disabled individuals." },
];

const activities = [
  { icon: Accessibility, title: "Support for Persons with Disabilities", count: "32", unit: "beneficiaries", desc: "Home visits, counselling, assessment of assistive devices and guidance on government pensions." },
  { icon: HandHeart, title: "One-to-One Old Age Care", count: "156", unit: "elders", desc: "Health check-ups, medicine distribution, nutritional advice and pension assistance." },
  { icon: Users, title: "Women SHG Meetings & Girl Child Education", count: "452", unit: "women across 35 groups", desc: "Savings discipline, anti-child-marriage awareness, leadership and women's rights." },
  { icon: Sprout, title: "Women Group Loans & Livelihoods", count: "10", unit: "groups reviewed", desc: "Loans for tailoring, dairy, petty shops and vegetable vending with ongoing monitoring." },
  { icon: ShieldCheck, title: "HIV/AIDS, TB, BP & Sugar Awareness", count: "345", unit: "participants", desc: "Prevention, free testing, ART services and reducing stigma in vulnerable communities." },
  { icon: Sun, title: "Summer Heat Wave Awareness", count: "12", unit: "villages covered", desc: "Heat-stroke prevention, ORS demos and safe drinking water distribution." },
  { icon: Wheat, title: "Agricultural Labour Welfare", count: "112", unit: "farmers reached", desc: "Safe pesticide use, organic farming and crop insurance linkages." },
  { icon: Leaf, title: "Social Forestry & Environment", count: "52", unit: "saplings planted", desc: "Plantation drives, kitchen gardens and water conservation talks." },
];

function Index() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[var(--sky-soft)]/70 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full grid place-items-center bg-card border border-border overflow-hidden" style={{ boxShadow: "var(--shadow-coral)" }}>
              <img src={logo} alt="TKDWSMM logo" width={48} height={48} className="h-full w-full object-contain p-1" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-primary text-sm sm:text-base">TKDWSMM</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground">Mahila Mandali · Est. 1984</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-foreground/80">
            <a href="#about" className="hover:text-primary transition">About</a>
            <a href="#services" className="hover:text-primary transition">Services</a>
            <a href="#activities" className="hover:text-primary transition">Activities</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </nav>
          <a href="tel:+918985626351" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:opacity-90 transition" style={{ boxShadow: "var(--shadow-coral)" }}>
            <Phone className="h-4 w-4" /> Donate / Call
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-60">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl" style={{ background: "var(--coral)", opacity: 0.25 }} />
          <div className="absolute top-40 -right-20 h-96 w-96 rounded-full blur-3xl" style={{ background: "var(--sky-deep)", opacity: 0.5 }} />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 sm:pt-20 sm:pb-32 text-center">
          <img src={logo} alt="TKDWSMM emblem" width={160} height={160} className="mx-auto h-32 w-32 sm:h-40 sm:w-40 object-contain drop-shadow-xl" />
          <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-card/80 border border-border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <Heart className="h-3.5 w-3.5" /> Registered NGO · Reg No. 125/1984
          </span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-primary leading-[1.05]">
            The Kanaka Durga<br/>Weaker Section<br/>
            <span className="text-foreground">Mahila Mandali</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-foreground/70 italic max-w-2xl mx-auto">
            "Giving strength to the poor and voiceless."
          </p>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
            Serving orphans, elders, the differently-abled and rural women across Narsaraopeta and Phirangipuram, Guntur District, Andhra Pradesh — for over four decades.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#activities" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold hover:opacity-90 transition" style={{ boxShadow: "var(--shadow-coral)" }}>
              Our Work <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-card border border-border text-foreground px-7 py-3.5 font-semibold hover:bg-accent transition">
              Get Involved
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { n: "40+", l: "Years of Service" },
              { n: "1,200+", l: "Lives Touched Monthly" },
              { n: "35", l: "Self-Help Groups" },
              { n: "12+", l: "Villages Reached" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl bg-card/80 backdrop-blur border border-border p-5" style={{ boxShadow: "var(--shadow-soft)" }}>
                <div className="font-display text-3xl font-bold text-primary">{s.n}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">About TKDWSMM</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-foreground">Four decades of compassion in action.</h2>
            <p className="mt-6 text-foreground/75 leading-relaxed">
              Founded in 1984 and registered under the Societies Registration Act XXI of 1860, Government of Andhra Pradesh, our mandali has been a quiet but unwavering force for the marginalised — orphan children, neglected elders, persons with disabilities and rural women — in Guntur District.
            </p>
            <p className="mt-4 text-foreground/75 leading-relaxed">
              We believe dignity is a right, not a privilege. Every meal served, every child schooled, every elder cared for is a step toward a more just community.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <Badge label="Reg. No." value="125 / 1984" />
              <Badge label="DARPAN ID" value="AP/2017/0117794" />
              <Badge label="FCRA No." value="010160196" />
              <Badge label="PAN" value="AAKAT6745L" />
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl p-8 sm:p-10 text-coral-foreground" style={{ background: "var(--gradient-coral)", boxShadow: "var(--shadow-coral)" }}>
              <HandHeart className="h-10 w-10" />
              <h3 className="mt-5 font-display text-2xl font-bold">Leadership</h3>
              <div className="mt-6 space-y-4">
                <div>
                  <div className="text-xs uppercase tracking-wider opacity-80">President</div>
                  <div className="text-xl font-semibold">Maram Gnana Prakash</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider opacity-80">Women Coordinator</div>
                  <div className="text-xl font-semibold">MIG Prasanna Kumari, M.Sc, M.Ed.</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider opacity-80">Board Member</div>
                  <div className="text-xl font-semibold">M. Roopesh Bala, MBBS</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider opacity-80">Board Member</div>
                  <div className="text-xl font-semibold">M. Keval Bala, MBBS</div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/30 text-sm opacity-90">
                Committed to serving marginalised and vulnerable communities with dedication and transparency.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 sm:py-28 bg-card/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">What We Do</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Services that restore dignity.</h2>
            <p className="mt-4 text-foreground/70">Six focus areas where TKDWSMM works directly with families and individuals every week.</p>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ img, title, desc, position }) => (
              <div key={title} className="group rounded-2xl bg-card border border-border overflow-hidden hover:-translate-y-1 transition-all" style={{ boxShadow: "var(--shadow-soft)" }}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={img} alt={title} loading="lazy" width={1024} height={768} className={`h-full w-full object-cover ${position || 'object-center'} group-hover:scale-105 transition-transform duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section id="activities" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Recent Field Report</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Activities on the ground.</h2>
            <p className="mt-4 text-foreground/70">A snapshot of our ongoing social work across villages in Guntur District.</p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-5">
            {activities.map(({ icon: Icon, title, count, unit, desc }) => (
              <article key={title} className="rounded-2xl bg-card border border-border p-7 flex gap-5" style={{ boxShadow: "var(--shadow-soft)" }}>
                <div className="shrink-0 h-14 w-14 rounded-2xl grid place-items-center bg-[var(--sky-soft)] text-primary border border-border">
                  <Icon className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold leading-tight">{title}</h3>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-display text-3xl font-extrabold text-primary">{count}</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">{unit}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-3xl p-8 sm:p-10 text-center text-coral-foreground" style={{ background: "var(--gradient-coral)", boxShadow: "var(--shadow-coral)" }}>
            <h3 className="font-display text-2xl sm:text-3xl font-bold">Additional ongoing support</h3>
            <p className="mt-3 max-w-3xl mx-auto opacity-95">
              School dropout prevention · Family counselling · Welfare scheme access · Sanitation awareness · Support for widows & single women · Youth career guidance · Beneficiary follow-up visits.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 sm:py-28 bg-card/40">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Get in Touch</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Partner with us.</h2>
            <p className="mt-4 text-foreground/70">Donate, volunteer, or refer someone who needs help. We answer every message.</p>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            <ContactCard icon={Phone} label="Call / WhatsApp" lines={["+91 89856 26351", "+91 73824 41508", "+91 90591 10174"]} href="tel:+918985626351" />
            <ContactCard icon={Mail} label="Email" lines={["tkdwsmm@yahoo.in"]} href="mailto:tkdwsmm@yahoo.in" />
            <ContactCard icon={MapPin} label="Central Office" lines={["D.No. 5-28, Maram Bazar", "Near BSNL Tower, Phirangipuram", "Guntur District – 522529, A.P."]} />
          </div>
          <div className="mt-10 rounded-2xl bg-card border border-border p-6 text-center text-sm text-muted-foreground" style={{ boxShadow: "var(--shadow-soft)" }}>
            Service areas include <span className="font-semibold text-foreground">Phirangipuram</span> and surrounding villages of Guntur District, Andhra Pradesh.
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="font-display font-bold">The Kanaka Durga Weaker Section Mahila Mandali</div>
          <div className="opacity-80">© {new Date().getFullYear()} TKDWSMM · Giving strength to the poor and voiceless.</div>
        </div>
      </footer>
    </div>
  );
}

function Badge({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-card border border-border px-4 py-3">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{label}</div>
      <div className="font-semibold text-foreground mt-0.5">{value}</div>
    </div>
  );
}

function ContactCard({ icon: Icon, label, lines, href }: { icon: typeof Phone; label: string; lines: string[]; href?: string }) {
  const inner = (
    <div className="h-full rounded-2xl bg-card border border-border p-7 hover:-translate-y-1 transition-all" style={{ boxShadow: "var(--shadow-soft)" }}>
      <div className="h-12 w-12 rounded-xl grid place-items-center text-coral-foreground" style={{ background: "var(--gradient-coral)" }}>
        <Icon className="h-6 w-6" />
      </div>
      <div className="mt-5 text-xs uppercase tracking-widest text-muted-foreground font-semibold">{label}</div>
      <div className="mt-2 space-y-0.5">
        {lines.map((l) => <div key={l} className="font-semibold text-foreground">{l}</div>)}
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{inner}</a> : inner;
}
