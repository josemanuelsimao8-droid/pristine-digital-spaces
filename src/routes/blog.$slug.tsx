import { createFileRoute, Link } from "@tanstack/react-router";
import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import img from "@/assets/residential.jpg";

export const Route = createFileRoute("/blog/$slug")({
  head: () => ({ meta: [
    { title: "Artigo — Blog Clean+" },
    { name: "description", content: "Leia o artigo no blog da Clean+." },
  ]}),
  component: BlogPost,
});

function BlogPost() {
  const { slug } = Route.useParams();
  return (
    <Layout>
      <PageHero eyebrow="Blog" title="Como manter sua casa sempre limpa" crumbs={[{ to: "/", label: "Início" }, { to: "/blog", label: "Blog" }, { to: `/blog/${slug}`, label: "Artigo" }]} />
      <article className="py-20">
        <div className="container-x max-w-3xl">
          <Reveal>
            <img src={img} alt="" className="rounded-3xl shadow-elegant mb-10" loading="lazy" />
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed">A rotina de limpeza pode ser leve quando organizada da forma certa. Confira nossas dicas para manter seu lar sempre acolhedor.</p>
              <h2 className="text-2xl font-bold mt-10 mb-4">1. Pequenos hábitos diários</h2>
              <p className="text-muted-foreground">Reservar 15 minutos por dia para organizar áreas-chave faz toda a diferença. Comece pela cozinha e quarto.</p>
              <h2 className="text-2xl font-bold mt-10 mb-4">2. Produtos certos para cada superfície</h2>
              <p className="text-muted-foreground">Cada material exige um cuidado específico. Madeira, vidro e azulejo pedem produtos diferentes para durar mais.</p>
              <h2 className="text-2xl font-bold mt-10 mb-4">3. Quando chamar profissionais</h2>
              <p className="text-muted-foreground">Para limpezas profundas, semestrais ou pós-eventos, contar com uma equipe especializada economiza tempo e garante resultado.</p>
            </div>
            <Link to="/blog" className="inline-block mt-10 text-primary font-semibold">← Voltar para o blog</Link>
          </Reveal>
        </div>
      </article>
    </Layout>
  );
}
