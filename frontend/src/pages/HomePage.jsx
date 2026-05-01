import { FileCog, GitFork, ShieldCheck } from "lucide-react";

import Navbar from "../components/Navbar";

const HomePage = () => {
  const legalEngineerAreas = [
    {
      title: "Qualität juristischer KI",
      description:
        "Es wird geprüft und verbessert, wie juristische KI arbeitet: Von guten Prompts über verlässliche Antworten bis zu korrekten Quellen, sauberer Begründung und richtiger Rechtsanwendung.",
      icon: ShieldCheck,
    },
    {
      title: "Automatisierung juristischer Prozesse",
      description:
        "Wiederkehrende juristische Arbeitsabläufe werden mithilfe von Technologie und KI strukturiert, unterstützt und teilweise automatisiert.",
      icon: FileCog,
    },
    {
      title: "Juristische Entscheidungslogik",
      description:
        "Juristische Regeln werden in einfache Wenn-dann-Logik übersetzt: Wann gilt eine Regel, welche Ausnahmen gibt es und was folgt daraus?",
      icon: GitFork,
    },
  ];

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Recht · Technologie · Automatisierung
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Legal Engineer Explained
          </h1>

          <p className="mt-6 text-lg leading-8 text-base-content/70">
            Eine praktische Übersicht über verschiedene Legal-Engineering-Rollen
            und darüber, wie sie Recht, Technologie und Automatisierung
            verbinden.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-center text-2xl font-semibold">
            Welche Art von Legal Engineer möchtest du erkunden?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {legalEngineerAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="rounded-3xl border border-base-300 bg-base-100 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-semibold">{area.title}</h3>

                  <p className="mt-4 leading-7 text-base-content/70">
                    {area.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-primary/20 bg-primary/5 p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Praxisbezug
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Lerne Legal Engineering anhand konkreter Beispiele
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-base-content/70">
            Jeder Bereich zeigt typische Aufgaben und Denkweisen aus der Praxis.
            So wird Schritt für Schritt klarer, wie Legal Engineers juristische
            Arbeit strukturieren, mit Technologie verbinden und in nutzbare
            Lösungen übersetzen.
          </p>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
