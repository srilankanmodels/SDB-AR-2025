import { motion } from "motion/react";
import { VALUES_DATA, GOALS_DATA } from "../data/reportData";
import { Landmark, Briefcase, Shovel, Cpu, TrendingUp, Heart, Users, Smartphone, ShieldCheck } from "lucide-react";

const GOAL_ICON_MAP: Record<string, any> = {
  TrendingUp: TrendingUp,
  Briefcase: Briefcase,
  Handshake: Landmark,
  Smartphone: Smartphone,
  Heart: Heart,
  Users: Users
};

const PILLARS_DATA = [
  {
    title: "Co-operative Banking",
    desc: "To be the partner of choice for Sri Lanka's cooperative sector. We manage active banking relationships with over 4,000 SANASA cooperative societies, sourcing approximately 35% of our deposit base from this critical community network.",
    icon: Landmark,
    accent: "text-sdb-purple"
  },
  {
    title: "MSMEs",
    desc: "Uplifting the micro, small, and medium enterprise sector across all 25 districts. Over 25% of our total lending is channelled directly into SMEs, which form the backbone of the national economic recovery.",
    icon: Briefcase,
    accent: "text-sdb-coral"
  },
  {
    title: "Agri Banking & VCF",
    desc: "Collaborating with Rabo Partnerships on a specialized Agri Financing Strategy. We streamline credit flows to local farmers and establish Value Chain Financing (VCF) ecosystems linking large corporate anchors to grassroots agricultural suppliers.",
    icon: Shovel,
    accent: "text-sdb-green"
  },
  {
    title: "Digital Inclusion",
    desc: "Narrowing the urban-rural financial gap via cutting-edge platforms. SDB's digital ecosystem features our SDB UUpay mobile wallet, secure Business Internet Banking portals, and electronic payments to Customs, Ports, and Inland Revenue.",
    icon: Cpu,
    accent: "text-sdb-blue"
  }
];

export default function StrategySection() {
  return (
    <section id="strategy-section" className="space-y-16">
      {/* Editorial Header */}
      <div className="border-b border-sdb-purple/10 pb-6 text-left">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-sdb-purple tracking-tight leading-tight">
          Strategic Roadmap 2026-2029
        </h2>
        <p className="text-slate-600 mt-2 max-w-2xl text-sm md:text-base">
          Our forward-looking sustainable growth blueprint recalibrates SDB bank's services through four strategic pillars, five core values, and future-ready goals.
        </p>
      </div>

      {/* Strategic Pillars Bento-grid */}
      <div id="strategic-pillars-bento" className="space-y-6 text-left">
        <h3 className="font-serif text-2xl font-bold text-sdb-purple">Our Four Strategic Pillars</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS_DATA.map((pillar, idx) => {
            const PillarIcon = pillar.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card rounded-3xl p-6 flex flex-col justify-between shadow-md border border-sdb-purple/10 text-left relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-sdb-purple/5 rounded-bl-full pointer-events-none -z-10" />
                <div className="space-y-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white/40 border border-sdb-purple/10 ${pillar.accent}`}>
                    <PillarIcon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-sdb-purple">{pillar.title}</h4>
                  <p className="text-xs leading-relaxed text-slate-600">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Core Values Bento Layout */}
      <div id="core-values-bento" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
        {/* Left column: Vision/Mission Statement */}
        <div className="lg:col-span-5 glass-card rounded-3xl p-6 md:p-8 flex flex-col justify-between space-y-8 shadow-sm">
          <div>
            <span className="font-mono text-[10px] text-sdb-coral font-bold uppercase tracking-widest block mb-2">Our Vision</span>
            <h4 className="font-serif text-2xl font-bold text-sdb-purple leading-snug">
              "To enable the economic transformation of progressive individuals, communities, Co-operatives and entrepreneurs."
            </h4>
          </div>
          <div className="border-t border-sdb-purple/10 pt-6">
            <span className="font-mono text-[10px] text-sdb-green font-bold uppercase tracking-widest block mb-2">Our Mission</span>
            <p className="font-serif text-xl font-medium text-sdb-purple italic leading-relaxed">
              "To be a leading partner for inclusive and sustainable national development."
            </p>
          </div>
        </div>

        {/* Right column: Values Grid */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="font-serif text-2xl font-bold text-sdb-purple">Our Cooperative Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {VALUES_DATA.map((val, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 flex flex-col space-y-2 hover:border-sdb-purple/20 transition-all shadow-md"
              >
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-sdb-coral shrink-0" />
                  <h4 className="font-serif font-bold text-sm text-sdb-purple leading-tight">{val.title}</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategic Goals list */}
      <div id="strategic-goals-container" className="space-y-6 text-left">
        <h3 className="font-serif text-2xl font-bold text-sdb-purple">Strategic Growth Goals</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GOALS_DATA.map((goal, idx) => {
            const GoalIcon = GOAL_ICON_MAP[goal.icon] || TrendingUp;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 flex items-start space-x-4 shadow-md hover:border-sdb-purple/20 transition-all"
              >
                <div className="p-2.5 bg-white/40 border border-sdb-purple/10 text-sdb-purple rounded-xl shrink-0">
                  <GoalIcon className="w-4 h-4" />
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-0.5">{goal.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
