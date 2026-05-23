import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export default function PageHero({ eyebrow, title, subtitle, crumbs }: { eyebrow?: string; title: string; subtitle?: string; crumbs?: { to: string; label: string }[] }) {
  return (
    <section className="relative gradient-hero text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="container-x relative py-20 md:py-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {eyebrow && <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur text-xs tracking-widest uppercase mb-5">{eyebrow}</div>}
          <h1 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">{title}</h1>
          {subtitle && <p className="mt-5 text-lg text-white/80 max-w-2xl">{subtitle}</p>}
          {crumbs && (
            <nav className="mt-6 flex items-center gap-2 text-sm text-white/70">
              {crumbs.map((c, i) => (
                <span key={c.to} className="flex items-center gap-2">
                  {i > 0 && <ChevronRight className="w-3.5 h-3.5" />}
                  <Link to={c.to} className="hover:text-white">{c.label}</Link>
                </span>
              ))}
            </nav>
          )}
        </motion.div>
      </div>
    </section>
  );
}
