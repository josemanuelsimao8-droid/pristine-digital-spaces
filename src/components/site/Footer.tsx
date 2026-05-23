import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-primary-foreground mt-24">
      <div className="container-x py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Clean+" className="h-12 w-12 bg-white/10 rounded-xl p-1" />
            <div>
              <div className="font-display font-bold text-xl">Clean+</div>
              <div className="text-[10px] tracking-widest text-primary-foreground/60">EMPRESA DE LIMPEZA</div>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">Mais limpeza, mais cuidado, mais vida. Serviços profissionais com qualidade premium.</p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Linkedin].map((I, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"><I className="w-4 h-4" /></a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Links Rápidos</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {[["/", "Início"], ["/sobre", "Sobre Nós"], ["/equipe", "Equipe"], ["/blog", "Blog"], ["/faq", "FAQ"], ["/contato", "Contato"]].map(([to, l]) => (
              <li key={to}><Link to={to} className="hover:text-white transition">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Serviços</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/servicos/residencial" className="hover:text-white">Limpeza Residencial</Link></li>
            <li><Link to="/servicos/comercial" className="hover:text-white">Limpeza Comercial</Link></li>
            <li><Link to="/servicos/pos-obra" className="hover:text-white">Limpeza Pós-Obra</Link></li>
            <li><Link to="/servicos/escritorios" className="hover:text-white">Limpeza de Escritórios</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contato</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Rua Exemplo, 123 - Centro</li>
            <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0" /> (00) 0000-0000</li>
            <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 shrink-0" /> contato@cleanmais.com</li>
          </ul>
          <form onSubmit={(e) => e.preventDefault()} className="mt-5 flex gap-2">
            <input type="email" placeholder="Seu e-mail" className="flex-1 px-3 py-2 rounded-lg bg-white/10 placeholder:text-white/50 text-sm outline-none focus:bg-white/15" />
            <button className="px-4 py-2 rounded-lg bg-primary-glow text-primary-dark font-semibold text-sm">OK</button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs text-primary-foreground/60 text-center">
          © {new Date().getFullYear()} Clean+ Empresa de Limpeza. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
