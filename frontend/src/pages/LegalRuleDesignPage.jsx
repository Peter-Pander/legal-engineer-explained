import { ArrowLeft, Bot, GitFork, FolderCheck, Workflow } from "lucide-react";
import { Link } from "react-router";

import Navbar from "../components/Navbar";

const LegalRuleDesignPage = () => {
  const focusAreas = [
    {
      title: "Recht in Systemlogik übersetzen",
      description:
        "Gesetze, Vorschriften und interne Regeln werden in klare Prüfungsschritte zerlegt. Dabei wird sichtbar, welche Voraussetzungen erfüllt sein müssen, welche Ausnahmen greifen können und welche Ergebnisse daraus folgen.",
      icon: GitFork,
      path: "/legal-rule-design/legal-rules-to-decision-logic",
    },
    {
      title: "Automatisieren und Qualität prüfen",
      description:
        "Eine juristische Prüflogik wird so vorbereitet, dass ein System oder eine KI sie auf konkrete Fälle anwenden kann. Danach wird geprüft, ob die Ergebnisse rechtlich korrekt sind und ob Grenzfälle, Ausnahmen oder unklare Begriffe sauber berücksichtigt wurden.",
      icon: Bot,
      path: "/legal-rule-design/automation-and-quality-check",
    },
    {
      title: "In Workflows einbauen",
      description:
        "Die Prüfung soll nicht nur für sich allein funktionieren, sondern Teil eines größeren Ablaufs werden. Zum Beispiel: Daten kommen aus einem Formular, die Voraussetzungen werden geprüft, und das Ergebnis wird an den nächsten Bearbeitungsschritt weitergegeben.",
      icon: Workflow,
    },
    {
      title: "Standards und Use Cases entwickeln",
      description:
        "Aus einzelnen Projekten können wiederverwendbare Muster entstehen. Wenn sich eine Prüfstruktur auch für andere Fälle eignet, wird sie so aufbereitet, dass sie später als Vorlage für ähnliche Anwendungen dienen kann.",
      icon: FolderCheck,
    },
  ];

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          <ArrowLeft size={18} />
          Zurück zur Übersicht
        </Link>

        <section className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Legal Rule Design
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Juristische Entscheidungslogik
            </h1>

            <p className="mt-6 text-lg leading-8 text-base-content/70">
              Juristische Entscheidungslogik bedeutet, Regeln in klare
              Prüfungsschritte zu übersetzen, die später auch technisch
              abgebildet werden können.
            </p>

            <p className="mt-4 leading-7 text-base-content/70">
              Gesetze, Vorschriften und interne Regeln bestehen oft aus
              Voraussetzungen, Ausnahmen und Rechtsfolgen. Ein Legal Engineer
              macht diese Struktur sichtbar: Was muss geprüft werden? In welcher
              Reihenfolge? Und unter welchen Bedingungen führt die Prüfung zu
              welchem Ergebnis?
            </p>
          </div>

          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <GitFork size={30} />
            </div>

            <h2 className="text-2xl font-bold">
              Von juristischem Text zu klarer Struktur
            </h2>

            <p className="mt-4 leading-7 text-base-content/70">
              Juristische Texte enthalten oft mehrere Bedingungen in einem Satz.
              Legal Engineers machen daraus eine geordnete Prüfung: Was wird
              zuerst geprüft, was danach, und welches Ergebnis folgt aus welcher
              Antwort?
            </p>
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-base-300 bg-base-200 p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            <div className="lg:w-1/2">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Einfaches Beispiel
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Aus Rechtstext wird eine Prüfstruktur
              </h2>

              <p className="mt-4 leading-7 text-base-content/70">
                Juristische Texte sind oft sprachlich verdichtet.
                Entscheidungslogik übersetzt solche Texte in eine Struktur, die
                Schritt für Schritt geprüft werden kann.
              </p>
            </div>

            <div className="grid gap-4 lg:w-1/2">
              <div className="rounded-2xl border border-base-300 bg-base-100 p-5">
                <p className="text-sm font-semibold text-primary">
                  Juristischer Text
                </p>
                <p className="mt-2 leading-7 text-base-content/70">
                  Ein Anspruch besteht, wenn die Voraussetzungen A und B erfüllt
                  sind, es sei denn, Ausnahme C greift.
                </p>
              </div>

              <div className="rounded-2xl border border-base-300 bg-base-100 p-5">
                <p className="text-sm font-semibold text-primary">
                  Strukturierte Logik
                </p>

                <ul className="mt-3 space-y-2 leading-7 text-base-content/70">
                  <li>1. Prüfe Voraussetzung A.</li>
                  <li>2. Prüfe Voraussetzung B.</li>
                  <li>3. Wenn A und B erfüllt sind: weiter prüfen.</li>
                  <li>4. Prüfe, ob Ausnahme C vorliegt.</li>
                  <li>5. Wenn C vorliegt: Ergebnis nein.</li>
                  <li>6. Wenn C nicht vorliegt: Ergebnis ja.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Vier praktische Aufgabenbereiche
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Wie juristische Entscheidungslogik eingesetzt wird
            </h2>

            <p className="mt-4 leading-7 text-base-content/70">
              Juristische Entscheidungslogik beginnt mit dem Strukturieren von
              Regeln. Danach wird geprüft, ob diese Logik technisch nutzbar ist,
              in echte Arbeitsabläufe passt und als wiederverwendbares Modell
              weiterentwickelt werden kann.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {focusAreas.map((area) => {
              const Icon = area.icon;

              const cardContent = (
                <>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-semibold">{area.title}</h3>

                  <p className="mt-4 leading-7 text-base-content/70">
                    {area.description}
                  </p>

                  {area.path && (
                    <p className="mt-6 font-semibold text-primary">
                      Mehr erfahren →
                    </p>
                  )}
                </>
              );

              if (area.path) {
                return (
                  <Link
                    key={area.title}
                    to={area.path}
                    className="rounded-3xl border border-base-300 bg-base-100 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    {cardContent}
                  </Link>
                );
              }

              return (
                <article
                  key={area.title}
                  className="rounded-3xl border border-base-300 bg-base-100 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  {cardContent}
                </article>
              );
            })}
          </div>

          <section className="mt-6 rounded-3xl border border-base-300 bg-base-100 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Hintergrund
            </p>

            <h2 className="mt-3 text-2xl font-bold">Verwandte Konzepte</h2>

            <p className="mt-4 max-w-3xl leading-7 text-base-content/70">
              Diese Seite orientiert sich an Konzepten wie Rules as Code, Law as
              Code und Legal Automation. Dabei geht es darum, Regeln, Gesetze
              und Verwaltungsvorschriften so zu strukturieren, dass sie für
              Menschen nachvollziehbar und für digitale Systeme verarbeitbar
              werden.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <a
                href="https://oecd-opsi.org/publications/cracking-the-code/"
                target="_blank"
                rel="noreferrer"
                className="block font-semibold text-primary hover:underline"
              >
                OECD: Cracking the Code – Rulemaking for humans and machines
              </a>

              <a
                href="https://interoperable-europe.ec.europa.eu/collection/eugovtech/news/rules-code-rac"
                target="_blank"
                rel="noreferrer"
                className="block font-semibold text-primary hover:underline"
              >
                Interoperable Europe: Rules as Code
              </a>

              <a
                href="https://www.sprind.org/en/actions/strategic-projects/law-as-code"
                target="_blank"
                rel="noreferrer"
                className="block font-semibold text-primary hover:underline"
              >
                SPRIND: Law as Code
              </a>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default LegalRuleDesignPage;
