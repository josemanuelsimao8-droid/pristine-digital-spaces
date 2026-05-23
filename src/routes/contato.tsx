import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({ meta: [
    { title: "Contato — Clean+ Empresa de Limpeza" },
    { name: "description", content: "Fale com a Clean+. Atendimento ágil por telefone, e-mail ou WhatsApp." },
  ]}),
  component: ContatoPage,
});

function ContatoPage() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <PageHero eyebrow="Contato" title="Vamos conversar" subtitle="Estamos prontos para entender suas necessidades e propor a melhor solução." crumbs={[{ to: "/", label: "Início" }, { to: "/contato", label: "Contato" }]} />
      <section className="py-20">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <Reveal>
            <div className="space-y-6">
              {[
                { i: MapPin, t: "Endereço", d: "Rua Exemplo, 123 — Centro" },
                { i: Phone, t: "Telefone", d: "(00) 0000-0000" },
                { i: Mail, t: "E-mail", d: "contato@cleanmais.com" },
                { i: Clock, t: "Horário", d: "Seg a Sex: 08h - 18h | Sáb: 08h - 12h" },
              ].map((c) => (
                <div key={c.t} className="flex gap-4 p-6 rounded-2xl bg-card border border-border/60 card-lift">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0"><c.i className="w-5 h-5 text-primary-foreground" /></div>
                  <div><div className="font-semibold">{c.t}</div><div className="text-sm text-muted-foreground">{c.d}</div></div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            {sent ? (
              <div className="bg-card border border-border/60 rounded-3xl p-10 text-center">
                <CheckCircle2 className="w-14 h-14 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Mensagem enviada!</h3>
                <p className="text-muted-foreground">Retornaremos em breve.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="bg-card border border-border/60 rounded-3xl p-8 space-y-4 shadow-soft">
                <input required placeholder="Nome" maxLength={100} className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary outline-none bg-background" />
                <input required type="email" placeholder="E-mail" maxLength={255} className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary outline-none bg-background" />
                <input placeholder="Telefone" maxLength={30} className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary outline-none bg-background" />
                <textarea required placeholder="Mensagem" rows={5} maxLength={1000} className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary outline-none bg-background" />
                <button className="w-full py-4 rounded-full gradient-primary text-primary-foreground font-semibold hover:shadow-glow transition">Enviar mensagem</button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
