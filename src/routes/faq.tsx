import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [
    { title: "FAQ — Perguntas Frequentes | Clean+" },
    { name: "description", content: "Respostas para as dúvidas mais comuns sobre nossos serviços de limpeza." },
  ]}),
  component: FaqPage,
});

const groups = [
  { cat: "Geral", items: [
    { q: "Qual a região de atendimento?", a: "Atendemos toda a região metropolitana. Consulte sua localidade pelo WhatsApp." },
    { q: "Como funciona o orçamento?", a: "É gratuito e sem compromisso. Realizamos visita técnica quando necessário." },
  ]},
  { cat: "Serviços", items: [
    { q: "Vocês trazem os produtos de limpeza?", a: "Sim. Todos os produtos, equipamentos e EPIs são fornecidos pela Clean+." },
    { q: "Posso escolher os dias da semana?", a: "Sim, oferecemos planos flexíveis: diários, semanais, quinzenais ou pontuais." },
  ]},
  { cat: "Pagamento", items: [
    { q: "Quais formas de pagamento aceitam?", a: "PIX, transferência, cartão de crédito e boleto." },
    { q: "Há contrato mensal?", a: "Para serviços recorrentes oferecemos contrato com condições especiais. Avulsos são livres." },
  ]},
];

function FaqPage() {
  return (
    <Layout>
      <PageHero eyebrow="FAQ" title="Perguntas frequentes" subtitle="Tudo o que você precisa saber antes de contratar." crumbs={[{ to: "/", label: "Início" }, { to: "/faq", label: "FAQ" }]} />
      <section className="py-20">
        <div className="container-x max-w-3xl space-y-12">
          {groups.map((g, gi) => (
            <Reveal key={g.cat} delay={gi * 0.1}>
              <h2 className="text-2xl font-bold mb-5 text-gradient">{g.cat}</h2>
              <div className="space-y-3">
                {g.items.map((it) => (
                  <details key={it.q} className="group bg-card border border-border/60 rounded-2xl p-6 card-lift">
                    <summary className="cursor-pointer font-semibold list-none flex justify-between items-center">{it.q}<span className="text-primary group-open:rotate-45 transition text-xl">+</span></summary>
                    <p className="text-muted-foreground mt-3">{it.a}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
