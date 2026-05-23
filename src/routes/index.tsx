import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Clock, Award, Home, Building2, HardHat, Briefcase, CheckCircle2, Star, Quote } from "lucide-react";
import Layout from "@/components/site/Layout";
import Reveal from "@/components/site/Reveal";
import hero from "@/assets/hero.jpg";
import team from "@/assets/team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clean+ — Empresa de Limpeza Profissional | Mais limpeza, mais vida" },
      { name: "description", content: "Serviços profissionais de limpeza residencial, comercial, pós-obra e escritórios. Qualidade premium, equipe treinada e produtos eco-friendly." },
      { property: "og:title", content: "Clean+ — Empresa de Limpeza Profissional" },
      { property: "og:description", content: "Mais limpeza, mais cuidado, mais vida. Solicite seu orçamento gratuito." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Home, title: "Limpeza Residencial", desc: "Casas e apartamentos impecáveis com cuidado de quem entende.", to: "/servicos/residencial" },
  { icon: Building2, title: "Limpeza Comercial", desc: "Ambientes corporativos sempre apresentáveis para seus clientes.", to: "/servicos/comercial" },
  { icon: HardHat, title: "Limpeza Pós-Obra", desc: "Remoção de resíduos pesados e acabamento final perfeito.", to: "/servicos/pos-obra" },
  { icon: Briefcase, title: "Limpeza de Escritórios", desc: "Produtividade e bem-estar começam num espaço impecável.", to: "/servicos/escritorios" },
];

const steps = [
  { n: "01", t: "Solicite o Orçamento", d: "Conte sobre seu espaço pelo formulário ou WhatsApp." },
  { n: "02", t: "Visita Técnica", d: "Avaliamos detalhes e propomos a melhor solução." },
  { n: "03", t: "Execução Profissional", d: "Equipe uniformizada e produtos certificados." },
  { n: "04", t: "Qualidade Garantida", d: "Checklist final e satisfação 100% comprovada." },
];

const stats = [
  { n: "+1200", l: "Clientes felizes" },
  { n: "+15", l: "Anos de mercado" },
  { n: "+50", l: "Profissionais" },
  { n: "98%", l: "Recomendam" },
];

const testimonials = [
  { name: "Mariana Silva", role: "Cliente Residencial", t: "Atendimento impecável e resultado surpreendente. Casa brilhando!" },
  { name: "Carlos Andrade", role: "Diretor — TechCorp", t: "Profissionalismo do início ao fim. Recomendamos a Clean+ sem hesitar." },
  { name: "Juliana Mendes", role: "Arquiteta", t: "A limpeza pós-obra entregou a obra pronta para o cliente em horas." },
];

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0">
          <img src={hero} alt="" className="w-full h-full object-cover" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/70 to-primary-dark/30" />
        </div>
        <div className="container-x relative grid lg:grid-cols-2 gap-12 py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-primary-foreground">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur text-xs tracking-widest uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Empresa de Limpeza Premium
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">
              Mais limpeza,<br /><span className="text-gradient bg-gradient-to-r from-white to-primary-glow">mais vida.</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-xl">
              Serviços profissionais de limpeza com equipe treinada, produtos certificados e atendimento que transforma seu espaço.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/agendamento" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-primary font-semibold hover:shadow-glow transition-all hover:-translate-y-0.5">
                Solicitar Orçamento <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/servicos" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition">
                Nossos Serviços
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-4 gap-4 max-w-lg">
              {stats.map((s, i) => (
                <motion.div key={s.l} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }}>
                  <div className="text-2xl md:text-3xl font-bold">{s.n}</div>
                  <div className="text-[11px] text-white/60 uppercase tracking-wide">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl mb-14">
            <div className="text-xs tracking-widest uppercase text-primary font-semibold mb-3">Por que escolher</div>
            <h2 className="text-4xl md:text-5xl font-bold">Excelência em cada <span className="text-gradient">detalhe</span></h2>
            <p className="mt-4 text-muted-foreground">Combinamos tecnologia, treinamento e cuidado para entregar um padrão de limpeza realmente premium.</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { i: ShieldCheck, t: "Equipe Treinada", d: "Profissionais qualificados, uniformizados e segurados." },
              { i: Award, t: "Produtos Certificados", d: "Soluções eco-friendly e seguras para sua família." },
              { i: Clock, t: "Pontualidade Garantida", d: "Cumprimos horários e prazos com total compromisso." },
            ].map((f, i) => (
              <Reveal key={f.t} delay={i * 0.1}>
                <div className="card-lift p-8 rounded-3xl bg-card border border-border/60 h-full">
                  <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-5 shadow-soft">
                    <f.i className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{f.t}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 gradient-soft">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs tracking-widest uppercase text-primary font-semibold mb-3">Nossos Serviços</div>
            <h2 className="text-4xl md:text-5xl font-bold">Soluções completas de limpeza</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.to} delay={i * 0.08}>
                <Link to={s.to} className="block card-lift p-7 rounded-3xl bg-card border border-border/60 group h-full">
                  <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-5 group-hover:gradient-primary transition-all">
                    <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">Saiba mais <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs tracking-widest uppercase text-primary font-semibold mb-3">Como Funciona</div>
            <h2 className="text-4xl md:text-5xl font-bold">Processo em 4 etapas simples</h2>
          </Reveal>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="relative p-7 rounded-3xl bg-card border border-border/60 card-lift h-full">
                  <div className="text-6xl font-bold text-gradient leading-none mb-4">{s.n}</div>
                  <h3 className="text-lg font-semibold mb-2">{s.t}</h3>
                  <p className="text-sm text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM CTA */}
      <section className="py-24 gradient-soft">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img src={team} alt="Equipe Clean+" width={1280} height={896} loading="lazy" className="rounded-3xl shadow-elegant" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="text-xs tracking-widest uppercase text-primary font-semibold mb-3">Nossa Equipe</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-5">Profissionais que <span className="text-gradient">você confia</span> em casa</h2>
            <p className="text-muted-foreground mb-6">Todos os nossos colaboradores passam por treinamento rigoroso, possuem registro e são selecionados pela excelência no atendimento.</p>
            <ul className="space-y-3 mb-8">
              {["Identificação e uniforme padronizado", "Verificação de antecedentes", "Treinamento contínuo em segurança", "Supervisão e qualidade em campo"].map((t) => (
                <li key={t} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-0.5" /> {t}</li>
              ))}
            </ul>
            <Link to="/equipe" className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-primary text-primary-foreground font-semibold">Conhecer equipe <ArrowRight className="w-4 h-4" /></Link>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs tracking-widest uppercase text-primary font-semibold mb-3">Depoimentos</div>
            <h2 className="text-4xl md:text-5xl font-bold">O que dizem nossos clientes</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="p-7 rounded-3xl bg-card border border-border/60 card-lift h-full">
                  <Quote className="w-8 h-8 text-primary/30 mb-3" />
                  <p className="text-foreground/90 italic mb-5">"{t.t}"</p>
                  <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}</div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl gradient-hero p-12 md:p-16 text-center text-primary-foreground">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
              <div className="relative">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Pronto para um espaço impecável?</h2>
                <p className="text-white/80 max-w-xl mx-auto mb-8">Solicite um orçamento gratuito e descubra como podemos transformar seu ambiente.</p>
                <Link to="/agendamento" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-primary font-semibold shadow-glow hover:scale-105 transition">
                  Solicitar agora <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
