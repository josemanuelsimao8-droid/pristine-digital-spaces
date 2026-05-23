import { createFileRoute, Link } from "@tanstack/react-router";
import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import { Target, Eye, Heart, Award } from "lucide-react";
import team from "@/assets/team.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({ meta: [
    { title: "Sobre Nós — Clean+ Empresa de Limpeza" },
    { name: "description", content: "Conheça a história, missão e valores da Clean+. Uma empresa dedicada à excelência em limpeza profissional." },
  ]}),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <PageHero eyebrow="Sobre Nós" title="Uma empresa feita para cuidar do seu espaço" subtitle="Há mais de 15 anos transformando ambientes com qualidade premium e atendimento humano." crumbs={[{ to: "/", label: "Início" }, { to: "/sobre", label: "Sobre" }]} />
      <section className="py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <Reveal><img src={team} alt="Equipe Clean+" className="rounded-3xl shadow-elegant" loading="lazy" /></Reveal>
          <Reveal delay={0.1}>
            <div className="text-xs tracking-widest uppercase text-primary font-semibold mb-3">Nossa História</div>
            <h2 className="text-4xl font-bold mb-5">Compromisso com a <span className="text-gradient">excelência</span></h2>
            <p className="text-muted-foreground mb-4">Nascemos com o propósito de transformar a forma como as empresas e famílias enxergam o serviço de limpeza. Mais que limpar: cuidamos do bem-estar.</p>
            <p className="text-muted-foreground">Hoje somos referência em limpeza residencial, comercial e pós-obra, atendendo centenas de clientes com a mesma dedicação do primeiro dia.</p>
          </Reveal>
        </div>
      </section>
      <section className="py-24 gradient-soft">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {[
            { i: Target, t: "Missão", d: "Entregar limpeza profissional que eleva a qualidade de vida e o desempenho dos espaços que cuidamos." },
            { i: Eye, t: "Visão", d: "Ser a empresa de limpeza mais admirada do país pela excelência e respeito ao cliente." },
            { i: Heart, t: "Valores", d: "Ética, compromisso, cuidado humano e responsabilidade ambiental em cada atendimento." },
          ].map((v, i) => (
            <Reveal key={v.t} delay={i * 0.1}>
              <div className="p-8 rounded-3xl bg-card border border-border/60 card-lift h-full">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-5"><v.i className="w-7 h-7 text-primary-foreground" /></div>
                <h3 className="text-xl font-semibold mb-2">{v.t}</h3>
                <p className="text-muted-foreground text-sm">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="py-20">
        <div className="container-x text-center">
          <Award className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-3">Vamos cuidar do seu espaço?</h2>
          <Link to="/contato" className="inline-flex px-6 py-3 mt-4 rounded-full gradient-primary text-primary-foreground font-semibold">Fale conosco</Link>
        </div>
      </section>
    </Layout>
  );
}
