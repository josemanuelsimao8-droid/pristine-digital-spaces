import { createFileRoute } from "@tanstack/react-router";
import ServiceTemplate, { defaultFaq } from "@/components/site/ServiceTemplate";
import img from "@/assets/office.jpg";

export const Route = createFileRoute("/servicos/escritorios")({
  head: () => ({ meta: [
    { title: "Limpeza de Escritórios — Clean+" },
    { name: "description", content: "Limpeza profissional de escritórios e ambientes corporativos." },
  ]}),
  component: () => (
    <ServiceTemplate
      slug="escritorios"
      eyebrow="Serviço"
      title="Limpeza de Escritórios"
      intro="Produtividade e bem-estar começam num espaço impecável. Equipe pontual e discreta."
      image={img}
      benefits={[
        "Limpeza fora ou dentro do expediente",
        "Higienização de estações de trabalho",
        "Copa, banheiros e áreas comuns",
        "Coleta seletiva de resíduos",
        "Contratos personalizados",
      ]}
      faq={defaultFaq}
    />
  ),
});
