import { createFileRoute, Link } from "@tanstack/react-router";
import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import { Home, Building2, HardHat, Briefcase, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/servicos")({
  head: () => ({ meta: [
    { title: "Serviços — Clean+ Empresa de Limpeza" },
    { name: "description", content: "Limpeza residencial, comercial, pós-obra e de escritórios. Soluções profissionais para cada necessidade." },
  ]}),
  component: ServicesPage,
});

const items = [
  { icon: Home, title: "Limpeza Residencial", desc: "Cuidamos da sua casa como você gostaria de cuidar.", to: "/servicos/residencial" },
  { icon: Building2, title: "Limpeza Comercial", desc: "Lojas, restaurantes e espaços comerciais sempre prontos.", to: "/servicos/comercial" },
  { icon: HardHat, title: "Limpeza Pós-Obra", desc: "Entrega final perfeita após reformas e construções.", to: "/servicos/pos-obra" },
  { icon: Briefcase, title: "Limpeza de Escritórios", desc: "Ambientes corporativos produtivos e impecáveis.", to: "/servicos/escritorios" },
];

function ServicesPage() {
  return (
    <Layout>
      <PageHero eyebrow="Serviços" title="Soluções completas em limpeza profissional" subtitle="Cada espaço tem suas particularidades. Conheça nossas especialidades." crumbs={[{ to: "/", label: "Início" }, { to: "/servicos", label: "Serviços" }]} />
      <section className="py-24">
        <div className="container-x grid sm:grid-cols-2 gap-6">
          {items.map((s, i) => (
            <Reveal key={s.to} delay={i * 0.08}>
              <Link to={s.to} className="block card-lift p-8 rounded-3xl bg-card border border-border/60 group h-full">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-5">
                  <s.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">Ver detalhes <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
