import { createFileRoute } from "@tanstack/react-router";
import ServiceTemplate, { defaultFaq } from "@/components/site/ServiceTemplate";
import img from "@/assets/commercial.jpg";

export const Route = createFileRoute("/servicos/comercial")({
  head: () => ({ meta: [
    { title: "Limpeza Comercial — Clean+" },
    { name: "description", content: "Serviços de limpeza comercial para lojas, restaurantes e estabelecimentos." },
  ]}),
  component: () => (
    <ServiceTemplate
      slug="comercial"
      eyebrow="Serviço"
      title="Limpeza Comercial"
      intro="Lojas, restaurantes e espaços comerciais sempre apresentáveis para seus clientes."
      image={img}
      benefits={[
        "Limpeza diária, semanal ou sob demanda",
        "Equipe noturna ou em horário comercial",
        "Vitrines, balcões e áreas de circulação",
        "Higienização de banheiros e copa",
        "Tratamento de pisos e superfícies especiais",
      ]}
      faq={defaultFaq}
    />
  ),
});
