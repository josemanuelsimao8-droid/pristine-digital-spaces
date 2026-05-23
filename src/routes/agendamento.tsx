import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import { Calendar, Clock, CheckCircle2, Sparkles } from "lucide-react";

export const Route = createFileRoute("/agendamento")({
  head: () => ({ meta: [
    { title: "Agendamento — Clean+ Empresa de Limpeza" },
    { name: "description", content: "Agende seu serviço de limpeza online em poucos cliques." },
  ]}),
  component: AgendamentoPage,
});

const servicos = ["Limpeza Residencial", "Limpeza Comercial", "Limpeza Pós-Obra", "Limpeza de Escritórios"];
const horarios = ["08:00", "10:00", "13:00", "15:00", "17:00"];

function AgendamentoPage() {
  const [sent, setSent] = useState(false);
  const [step, setStep] = useState({ servico: "", data: "", hora: "", nome: "", email: "", tel: "", obs: "" });
  return (
    <Layout>
      <PageHero eyebrow="Agendamento" title="Reserve seu horário em minutos" subtitle="Preencha o formulário e nossa equipe entra em contato para confirmar." crumbs={[{ to: "/", label: "Início" }, { to: "/agendamento", label: "Agendamento" }]} />
      <section className="py-20">
        <div className="container-x max-w-3xl">
          {sent ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-card border border-border/60 rounded-3xl p-12 text-center shadow-elegant">
              <div className="w-20 h-20 rounded-full gradient-primary mx-auto flex items-center justify-center mb-6"><CheckCircle2 className="w-10 h-10 text-primary-foreground" /></div>
              <h2 className="text-3xl font-bold mb-3">Pedido recebido!</h2>
              <p className="text-muted-foreground">Entraremos em contato em até 2 horas úteis para confirmar seu agendamento.</p>
              <button onClick={() => setSent(false)} className="mt-6 px-6 py-3 rounded-full gradient-primary text-primary-foreground font-semibold">Novo agendamento</button>
            </motion.div>
          ) : (
            <Reveal>
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="bg-card border border-border/60 rounded-3xl p-8 md:p-10 shadow-soft space-y-6">
                <div>
                  <label className="text-sm font-semibold mb-2 flex items-center gap-2"><Sparkles className="w-4 h-4 text-primary" /> Tipo de Serviço</label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {servicos.map(s => (
                      <button type="button" key={s} onClick={() => setStep({ ...step, servico: s })} className={`px-4 py-3 rounded-xl border text-sm text-left transition ${step.servico === s ? "border-primary bg-accent text-primary font-semibold" : "border-border hover:border-primary/40"}`}>{s}</button>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold mb-2 flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> Data</label>
                    <input type="date" required value={step.data} onChange={(e) => setStep({ ...step, data: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary outline-none bg-background" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Horário</label>
                    <div className="flex flex-wrap gap-2">
                      {horarios.map(h => (
                        <button type="button" key={h} onClick={() => setStep({ ...step, hora: h })} className={`px-3 py-2 rounded-lg text-sm border transition ${step.hora === h ? "border-primary bg-accent text-primary font-semibold" : "border-border hover:border-primary/40"}`}>{h}</button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input required placeholder="Nome completo" value={step.nome} onChange={(e) => setStep({ ...step, nome: e.target.value })} className="px-4 py-3 rounded-xl border border-border focus:border-primary outline-none bg-background" maxLength={100} />
                  <input required type="email" placeholder="E-mail" value={step.email} onChange={(e) => setStep({ ...step, email: e.target.value })} className="px-4 py-3 rounded-xl border border-border focus:border-primary outline-none bg-background" maxLength={255} />
                </div>
                <input required placeholder="Telefone / WhatsApp" value={step.tel} onChange={(e) => setStep({ ...step, tel: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary outline-none bg-background" maxLength={30} />
                <textarea placeholder="Observações (opcional)" value={step.obs} onChange={(e) => setStep({ ...step, obs: e.target.value })} rows={4} className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary outline-none bg-background" maxLength={500} />

                <button type="submit" disabled={!step.servico || !step.data || !step.hora} className="w-full py-4 rounded-full gradient-primary text-primary-foreground font-semibold disabled:opacity-50 hover:shadow-glow transition-all">
                  Confirmar Agendamento
                </button>
              </form>
            </Reveal>
          )}
        </div>
      </section>
    </Layout>
  );
}
