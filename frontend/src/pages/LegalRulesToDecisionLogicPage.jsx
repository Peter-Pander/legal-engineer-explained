import {
  ArrowLeft,
  CheckCircle2,
  GitFork,
  ListChecks,
  ListOrdered,
  Search,
  ShieldAlert,
} from "lucide-react";
import { Link } from "react-router";

import Navbar from "../components/Navbar";

const LegalRulesToDecisionLogicPage = () => {
  const steps = [
    {
      title: "Rechtstext genau lesen",
      description:
        "Zuerst wird geklärt, welche konkrete Regel geprüft wird und welche Entscheidung davon abhängt: Besteht ein Anspruch, wird ein Antrag bewilligt oder kann eine Genehmigung erteilt werden?",
      icon: Search,
    },
    {
      title: "Voraussetzungen erkennen",
      description:
        "Danach wird herausgearbeitet, welche Bedingungen erfüllt sein müssen, damit ein bestimmtes Ergebnis eintreten kann.",
      icon: ListChecks,
    },
    {
      title: "Ausnahmen einordnen",
      description:
        "Viele Regeln gelten nicht uneingeschränkt. Deshalb müssen Ausnahmen, Ausschlussgründe und Sonderfälle sauber erfasst werden.",
      icon: ShieldAlert,
    },
    {
      title: "Prüfreihenfolge festlegen",
      description:
        "Aus den einzelnen Punkten entsteht eine Reihenfolge: Was wird zuerst geprüft, was danach, und wann endet die Prüfung?",
      icon: ListOrdered,
    },
  ];

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          to="/legal-rule-design"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          <ArrowLeft size={18} />
          Zurück zu Juristische Entscheidungslogik
        </Link>

        <section className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Translating Legal Rules into Decision Logic
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Recht in Entscheidungslogik übersetzen
            </h1>

            <p className="mt-6 text-lg leading-8 text-base-content/70">
              Auf dieser Seite geht es um den konkreten Übersetzungsschritt: Aus
              einem juristischen Ausgangstext wird eine Logik, die Schritt für
              Schritt geprüft werden kann. Dafür werden Bedingungen, Ausnahmen,
              Reihenfolgen und mögliche Ergebnisse getrennt voneinander sichtbar
              gemacht.
            </p>

            <p className="mt-4 leading-7 text-base-content/70">
              Wichtig ist dabei nicht nur das juristische Ergebnis, sondern der
              Weg dorthin: Jede Regel muss so zerlegt werden, dass klar wird,
              welche Frage zuerst gestellt wird, welche Antwort zur nächsten
              Prüfung führt und wann die Entscheidung endet.
            </p>
          </div>

          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <GitFork size={30} />
            </div>

            <h2 className="text-2xl font-bold">Von der Norm zur Entscheidungslogik</h2>

            <p className="mt-4 leading-7 text-base-content/70">
              Eine juristische Regel wird nicht nur zusammengefasst, sondern in
              einzelne Ja/Nein-Fragen zerlegt. Jede Frage muss so klar sein,
              dass ein System oder eine KI sie später anhand der vorhandenen
              Informationen beantworten kann.
            </p>
          </div>
        </section>
        <section className="mt-16 rounded-3xl border border-base-300 bg-base-200 p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            <div className="lg:w-1/2">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Beispiel
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Elterngeldanspruch als Entscheidungslogik
              </h2>

              <p className="mt-4 leading-7 text-base-content/70">
                An einem vereinfachten Beispiel aus § 1 BEEG (Bundeselterngeld-
                und Elternzeitgesetz) lässt sich zeigen, wie aus einer
                gesetzlichen Anspruchsregel eine prüfbare Logik wird. Zuerst
                werden die Grundvoraussetzungen geprüft. Danach wird geprüft, ob
                ein gesetzlicher Ausschlussgrund greift.
              </p>
            </div>

            <div className="grid gap-4 lg:w-1/2">
              <div className="rounded-2xl border border-base-300 bg-base-100 p-5">
                <p className="text-sm font-semibold text-primary">
                  Juristischer Ausgangspunkt
                </p>

                <p className="mt-2 leading-7 text-base-content/70">
                  Für dieses vereinfachte Prüfmodell werden die allgemeinen
                  Voraussetzungen gemäß § 1 Abs. 1 BEEG herangezogen. Anspruch
                  auf Elterngeld hat danach, wer seinen Wohnsitz oder
                  gewöhnlichen Aufenthalt in Deutschland hat, mit seinem Kind in
                  einem Haushalt lebt, dieses Kind selbst betreut und erzieht
                  und keine oder keine volle Erwerbstätigkeit ausübt.
                </p>

                <p className="mt-3 leading-7 text-base-content/70">
                  Nach § 1 Abs. 6 BEEG bedeutet „keine volle Erwerbstätigkeit“
                  vereinfacht, dass die Person im Durchschnitt des Lebensmonats
                  höchstens 32 Wochenstunden arbeitet. Der Einkommensausschluss
                  aus § 1 Abs. 8 BEEG knüpft nicht an das Bruttoeinkommen an,
                  sondern an das zu versteuernde Einkommen. Für Geburten ab dem
                  1. April 2025 liegt die Grenze bei 175.000 Euro im
                  Kalenderjahr vor der Geburt.
                </p>

                <p className="mt-3 leading-7 text-base-content/70">
                  Das zu versteuernde Einkommen wird aus dem Gesamtbetrag der
                  Einkünfte berechnet. Davon werden Sonderausgaben,
                  Vorsorgeaufwendungen, individuelle Freibeträge und
                  außergewöhnliche Belastungen abgezogen.
                </p>

                <div className="mt-4 space-y-2 text-sm">
                  <a
                    href="https://www.gesetze-im-internet.de/beeg/__1.html"
                    target="_blank"
                    rel="noreferrer"
                    className="block font-semibold text-primary hover:underline"
                  >
                    Gesetzestext: § 1 BEEG auf gesetze-im-internet.de
                  </a>

                  <a
                    href="https://www.bmbfsfj.bund.de/bmbfsfj/themen/familie/familienleistungen/neuregelungen-beim-elterngeld-fuer-geburten-ab-1-april-2024-sowie-ab-1-april-2025-228588"
                    target="_blank"
                    rel="noreferrer"
                    className="block font-semibold text-primary hover:underline"
                  >
                    Quelle zur Einkommensgrenze: Bundesfamilienministerium
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-base-300 bg-base-100 p-5">
                <p className="text-sm font-semibold text-primary">
                  Strukturierte Entscheidungslogik
                </p>

                <ul className="mt-3 space-y-2 leading-7 text-base-content/70">
                  <li>
                    1. Hat die Person ihren Wohnsitz oder gewöhnlichen
                    Aufenthalt in Deutschland? (§ 1 Abs. 1 Nr. 1 BEEG)
                  </li>
                  <li>
                    2. Lebt die Person mit ihrem Kind in einem Haushalt? (§ 1
                    Abs. 1 Nr. 2 BEEG)
                  </li>
                  <li>
                    3. Betreut und erzieht die Person dieses Kind selbst? (§ 1
                    Abs. 1 Nr. 3 BEEG)
                  </li>
                  <li>
                    4. Arbeitet die Person höchstens 32 Wochenstunden im
                    Durchschnitt des Lebensmonats? (§ 1 Abs. 1 Nr. 4 i.V.m. § 1
                    Abs. 6 BEEG)
                  </li>
                  <li>
                    5. Überschreitet das maßgebliche zu versteuernde Einkommen
                    im Kalenderjahr vor der Geburt 175.000 Euro? (§ 1 Abs. 8
                    BEEG; Grenze für Geburten ab dem 1. April 2025)
                  </li>
                  <li>
                    6. Wenn die Fragen 1 bis 4 mit ja beantwortet werden und
                    Frage 5 mit nein: Anspruch dem Grunde nach gegeben.
                  </li>
                  <li>
                    7. Wenn eine der Fragen 1 bis 4 mit nein beantwortet wird
                    oder Frage 5 mit ja: Anspruch dem Grunde nach nicht gegeben.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Vorgehen
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Wie aus Recht prüfbare Logik wird
            </h2>

            <p className="mt-4 leading-7 text-base-content/70">
              Die juristische Arbeit besteht nicht nur darin, das richtige
              Ergebnis zu kennen. Wichtig ist, aus der Regel eine Prüfung zu
              bauen, die ein System oder eine KI Schritt für Schritt anwenden
              kann.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="rounded-3xl border border-base-300 bg-base-100 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-semibold">{step.title}</h3>

                  <p className="mt-4 leading-7 text-base-content/70">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-base-300 bg-base-100 p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <CheckCircle2 size={30} />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Ergebnis
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Eine klare Entscheidungsstruktur
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-base-content/70">
                Am Ende steht keine bloße Zusammenfassung des Rechtstextes,
                sondern eine prüfbare Struktur. Sie zeigt, welche Informationen
                gebraucht werden, welche Fragen nacheinander beantwortet werden
                müssen und welches Ergebnis aus welcher Antwortkombination
                folgt.
              </p>

              <p className="mt-4 max-w-3xl leading-7 text-base-content/70">
                Genau darin liegt der Legal-Engineering-Teil: Juristisch sauber
                denken, aber die Regel gleichzeitig so klar und systematisch
                aufbereiten, dass sie technisch nutzbar wird.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LegalRulesToDecisionLogicPage;
