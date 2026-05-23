import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const services = [
  { to: "/servicos/residencial", label: "Limpeza Residencial" },
  { to: "/servicos/comercial", label: "Limpeza Comercial" },
  { to: "/servicos/pos-obra", label: "Limpeza Pós-Obra" },
  { to: "/servicos/escritorios", label: "Limpeza de Escritórios" },
];

const nav = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços", children: services },
  { to: "/equipe", label: "Equipe" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState<string | null>(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on(); window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-xl shadow-soft" : "bg-transparent"}`}>
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Clean+ Empresa de Limpeza" className="h-12 w-12 object-contain" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display font-bold text-lg text-primary">Clean+</div>
            <div className="text-[10px] tracking-[0.2em] text-muted-foreground">EMPRESA DE LIMPEZA</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <div key={item.to} className="relative" onMouseEnter={() => setDrop(item.label)} onMouseLeave={() => setDrop(null)}>
              <Link
                to={item.to}
                className="px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent/60 transition flex items-center gap-1"
                activeProps={{ className: "text-primary bg-accent/60" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
                {item.children && <ChevronDown className="w-3.5 h-3.5" />}
              </Link>
              <AnimatePresence>
                {item.children && drop === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 top-full pt-3 w-64"
                  >
                    <div className="bg-card rounded-2xl shadow-elegant border p-2">
                      {item.children.map((c) => (
                        <Link key={c.to} to={c.to} className="block px-4 py-3 rounded-xl text-sm hover:bg-accent hover:text-primary transition">
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+5500000000000" className="hidden xl:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            <Phone className="w-4 h-4" /> (00) 0000-0000
          </a>
          <Link
            to="/agendamento"
            className="inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold text-primary-foreground gradient-primary shadow-soft hover:shadow-glow transition-all hover:-translate-y-0.5"
          >
            Solicitar Orçamento
          </Link>
        </div>

        <button onClick={() => setOpen(true)} className="lg:hidden p-2 rounded-lg hover:bg-accent" aria-label="Abrir menu">
          <Menu className="w-6 h-6 text-primary" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-primary-dark/40 backdrop-blur-sm z-50 lg:hidden" onClick={() => setOpen(false)}>
            <motion.aside
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 24 }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-background p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-8">
                <img src={logo} alt="" className="h-10 w-10" />
                <button onClick={() => setOpen(false)} className="p-2"><X className="w-6 h-6" /></button>
              </div>
              <div className="flex flex-col gap-1">
                {nav.map((item) => (
                  <div key={item.to}>
                    <Link to={item.to} onClick={() => setOpen(false)} className="block px-4 py-3 rounded-xl font-medium hover:bg-accent">{item.label}</Link>
                    {item.children && (
                      <div className="ml-4 border-l-2 border-accent pl-3">
                        {item.children.map((c) => (
                          <Link key={c.to} to={c.to} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary">{c.label}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link to="/agendamento" onClick={() => setOpen(false)} className="mt-4 inline-flex items-center justify-center px-5 py-3 rounded-full font-semibold text-primary-foreground gradient-primary">
                  Solicitar Orçamento
                </Link>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
