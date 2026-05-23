import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";

export default function ServiceTemplate({
  slug, title, eyebrow, intro, image, benefits, faq,
}: {
  slug: string; title: string; eyebrow: string; intro: string; image: string;
  benefits: string[]; faq: { q: string; a: string }[];
}) {
  return (
    <Layout>
      <PageHero eyebrow={eyebrow} title={title} subtitle={intro} crumbs={[{ to: "/", label: "Início" }, { to: "/servicos", label: "Serviços" }, { to: `/servicos/${slug}`, label: title }]} />

      <section className="py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <Reveal><img src={image} alt={title} className="rounded-3xl shadow-elegant w-full" loading="lazy" /></Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-bold mb-4">Por que contratar a Clean+?</h2>
            <p className="text-muted-foreground mb-6">Combinamos profissionais treinados, produtos certificados e processos refinados para entregar resultados que superam expectativas.</p>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-0.5" /><span>{b}</span></li>
              ))}
            </ul>
            <Link to="/agendamento" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full gradient-primary text-primary-foreground font-semibold">Solicitar orçamento <ArrowRight className="w-4 h-4" /></Link>
          </Reveal>
        </div>
      </section>

      <section className="py-24 gradient-soft">
        <div className="container-x max-w-3xl">
          <Reveal>
            <div className="text-xs tracking-widest uppercase text-primary font-semibold mb-3 text-center">Perguntas Frequentes</div>
            <h2 className="text-4xl font-bold mb-10 text-center">Tire suas dúvidas</h2>
          </Reveal>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.05}>
                <details className="group bg-card border border-border/60 rounded-2xl p-6 card-lift">
                  <summary className="cursor-pointer font-semibold list-none flex justify-between items-center">
                    {item.q}
                    <span className="text-primary group-open:rotate-45 transition-transform text-xl">+</span>
                  </summary>
                  <p className="text-muted-foreground mt-3">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const defaultFaq: { q: string; a: string }[] = [
  { q: "Quanto tempo leva o serviço?", a: "Depende do tamanho do espaço. Realizamos uma visita técnica gratuita para definir prazos com precisão." },
  { q: "Vocês trazem todos os produtos?", a: "Sim. Levamos produtos certificados, equipamentos e EPIs necessários para o serviço." },
  { q: "Como solicito um orçamento?", a: "Pelo nosso formulário de agendamento, WhatsApp ou telefone. Resposta em até 2 horas úteis." },
  { q: "A equipe é segurada?", a: "Sim. Todos os profissionais possuem registro, treinamento e cobertura de seguro." },
];
