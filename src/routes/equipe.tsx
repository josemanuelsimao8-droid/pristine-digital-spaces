import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import team from "@/assets/team.jpg";

export const Route = createFileRoute("/equipe")({
  head: () => ({ meta: [
    { title: "Equipe — Clean+ Empresa de Limpeza" },
    { name: "description", content: "Conheça a equipe profissional da Clean+, treinada e dedicada ao seu bem-estar." },
  ]}),
  component: TeamPage,
});

const members = [
  { n: "Ana Ribeiro", r: "Supervisora de Operações" },
  { n: "Lucas Martins", r: "Coordenador Pós-Obra" },
  { n: "Patricia Souza", r: "Especialista Residencial" },
  { n: "Rafael Costa", r: "Gerente Comercial" },
  { n: "Camila Dias", r: "Especialista Corporativo" },
  { n: "Felipe Andrade", r: "Treinamento e Qualidade" },
];

function TeamPage() {
  return (
    <Layout>
      <PageHero eyebrow="Nossa Equipe" title="Pessoas que fazem a diferença" subtitle="Profissionais treinados, identificados e apaixonados pelo que fazem." crumbs={[{ to: "/", label: "Início" }, { to: "/equipe", label: "Equipe" }]} />
      <section className="py-24">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((m, i) => (
            <Reveal key={m.n} delay={i * 0.06}>
              <div className="card-lift bg-card border border-border/60 rounded-3xl overflow-hidden">
                <img src={team} alt={m.n} className="w-full h-64 object-cover" loading="lazy" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{m.n}</h3>
                  <p className="text-sm text-primary">{m.r}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
