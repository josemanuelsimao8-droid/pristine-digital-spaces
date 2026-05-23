import { createFileRoute } from "@tanstack/react-router";
import ServiceTemplate, { defaultFaq } from "@/components/site/ServiceTemplate";
import img from "@/assets/postwork.jpg";

export const Route = createFileRoute("/servicos/pos-obra")({
  head: () => ({ meta: [
    { title: "Limpeza Pós-Obra — Clean+" },
    { name: "description", content: "Limpeza pós-obra com remoção de resíduos pesados e acabamento final perfeito." },
  ]}),
  component: () => (
    <ServiceTemplate
      slug="pos-obra"
      eyebrow="Serviço"
      title="Limpeza Pós-Obra"
      intro="Da poeira fina aos resíduos pesados — entregamos seu espaço pronto para morar ou inaugurar."
      image={img}
      benefits={[
        "Remoção de tinta, cimento e adesivos",
        "Limpeza profunda de pisos, vidros e azulejos",
        "Aspiração industrial de pó",
        "Higienização de luminárias e marcenarias",
        "Pronto para receber móveis e clientes",
      ]}
      faq={defaultFaq}
    />
  ),
});
