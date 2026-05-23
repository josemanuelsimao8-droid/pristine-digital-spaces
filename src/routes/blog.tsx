import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import { Search, ArrowRight } from "lucide-react";
import img1 from "@/assets/residential.jpg";
import img2 from "@/assets/commercial.jpg";
import img3 from "@/assets/postwork.jpg";
import img4 from "@/assets/office.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [
    { title: "Blog — Clean+ Dicas e Novidades" },
    { name: "description", content: "Dicas de limpeza, organização e bem-estar pelo time Clean+." },
  ]}),
  component: BlogPage,
});

const posts = [
  { slug: "1", cat: "Residencial", t: "5 hábitos que mantêm sua casa sempre limpa", img: img1 },
  { slug: "2", cat: "Comercial", t: "Como impressionar clientes com um espaço impecável", img: img2 },
  { slug: "3", cat: "Pós-Obra", t: "Limpeza pós-obra: por que contratar especialistas", img: img3 },
  { slug: "4", cat: "Escritórios", t: "Produtividade começa num escritório limpo", img: img4 },
  { slug: "5", cat: "Sustentabilidade", t: "Produtos eco-friendly: vale a pena?", img: img1 },
  { slug: "6", cat: "Saúde", t: "A relação entre limpeza e qualidade do ar", img: img2 },
];

const cats = ["Todos", "Residencial", "Comercial", "Pós-Obra", "Escritórios", "Saúde", "Sustentabilidade"];

function BlogPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Todos");
  const filtered = posts.filter(p => (cat === "Todos" || p.cat === cat) && p.t.toLowerCase().includes(q.toLowerCase()));
  return (
    <Layout>
      <PageHero eyebrow="Blog" title="Dicas, ideias e novidades" subtitle="Conteúdos para inspirar você a cuidar melhor dos seus espaços." crumbs={[{ to: "/", label: "Início" }, { to: "/blog", label: "Blog" }]} />
      <section className="py-16">
        <div className="container-x">
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Pesquisar artigos..." className="w-full pl-11 pr-4 py-3 rounded-full bg-card border border-border focus:border-primary outline-none" />
            </div>
            <div className="flex flex-wrap gap-2">
              {cats.map(c => (
                <button key={c} onClick={() => setCat(c)} className={`px-4 py-2 rounded-full text-sm font-medium transition ${cat === c ? "gradient-primary text-primary-foreground" : "bg-accent text-foreground/70 hover:bg-accent/70"}`}>{c}</button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="block card-lift bg-card rounded-3xl overflow-hidden border border-border/60 group">
                  <div className="h-52 overflow-hidden"><img src={p.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" /></div>
                  <div className="p-6">
                    <span className="text-xs tracking-widest uppercase text-primary font-semibold">{p.cat}</span>
                    <h3 className="text-lg font-semibold mt-2 mb-3 group-hover:text-primary transition">{p.t}</h3>
                    <span className="inline-flex items-center gap-1 text-sm text-primary font-semibold">Ler artigo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          {filtered.length === 0 && <p className="text-center text-muted-foreground py-20">Nenhum artigo encontrado.</p>}
        </div>
      </section>
    </Layout>
  );
}
