import { createFileRoute } from "@tanstack/react-router";
import ServiceTemplate, { defaultFaq } from "@/components/site/ServiceTemplate";
import img from "@/assets/residential.jpg";

export const Route = createFileRoute("/servicos/residencial")({
  head: () => ({ meta: [
    { title: "Limpeza Residencial — Clean+" },
    { name: "description", content: "Limpeza residencial profissional para casas e apartamentos. Equipe treinada e produtos certificados." },
  ]}),
  component: () => (
    <ServiceTemplate
      slug="residencial"
      eyebrow="Serviço"
      title="Limpeza Residencial"
      intro="Cuidamos da sua casa com a atenção que ela merece — do quarto à cozinha, do banheiro à varanda."
      image={img}
      benefits={[
        "Limpeza completa de todos os cômodos",
        "Produtos seguros para crianças e pets",
        "Equipe fixa para sua casa",
        "Higienização profunda de banheiros e cozinha",
        "Organização e cuidado com objetos pessoais",
      ]}
      faq={defaultFaq}
    />
  ),
});
