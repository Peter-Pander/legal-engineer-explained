import { ArrowLeft, Bot, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";

import Navbar from "../components/Navbar";

const AutomationAndQualityCheckPage = () => {
  const testCases = [
    {
      name: "Fall A",
      input: "20 Wochenstunden, 90.000 Euro zu versteuerndes Einkommen",
      result: "Anspruch dem Grunde nach gegeben",
      reason:
        "Die Arbeitszeit liegt unter der Grenze. Außerdem liegt kein Hinweis darauf vor, dass der Einkommensausschluss greift.",
    },
    {
      name: "Fall B",
      input: "38 Wochenstunden, 90.000 Euro zu versteuerndes Einkommen",
      result: "Anspruch dem Grunde nach nicht gegeben",
      reason:
        "Die Arbeitszeit überschreitet die Grenze von 32 Wochenstunden im Durchschnitt des Lebensmonats.",
    },
    {
      name: "Fall C",
      input: "20 Wochenstunden, 190.000 Euro zu versteuerndes Einkommen",
      result: "Unklar: Missverständliche Formulierung",
      reason:
        "Das System könnte die Frage so verstehen, dass das Einkommen über 175.000 Euro liegen muss, damit Elterngeld zusteht. Gemeint ist allerdings das Gegenteil: Wenn das zu versteuernde Einkommen mehr als 175.000 Euro beträgt, greift der Einkommensausschluss. Dann besteht kein Anspruch dem Grunde nach.",
    },
    {
      name: "Fall D",
      input: "Arbeitszeit bekannt, Einkommen fehlt",
      result: "Keine abschließende Entscheidung",
      reason:
        "Das System darf fehlende Angaben nicht einfach schätzen. Es muss anzeigen, welche Information für die Prüfung noch fehlt.",
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

        <section className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Automation and Quality Check
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Automatisieren und Qualität prüfen
            </h1>

            <p className="mt-6 text-lg leading-8 text-base-content/70">
              Nachdem juristische Regeln in klare Prüfschritte übersetzt wurden,
              folgt der nächste Schritt: Die Entscheidungslogik wird so formuliert, dass
              ein System oder eine KI sie auf konkrete Fälle anwenden kann.
            </p>

            <p className="mt-4 leading-7 text-base-content/70">
              Damit die Automatisierung verlässlich ist, müssen die Ergebnisse
              anschließend mit Testfällen geprüft und juristisch kontrolliert
              werden.
            </p>
          </div>
          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 shadow-sm lg:self-center">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Bot size={26} />
            </div>

            <h2 className="text-2xl font-bold">
              Vom Modell zur geprüften Anwendung
            </h2>

            <div className="mt-5 space-y-2">
              {[
                "Prüfschritte",
                "Automatisierung",
                "Testfälle",
                "Kontrolle/Nachschärfung",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="font-semibold text-base-content/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-5 leading-7 text-base-content/70">
              Entscheidend ist, ob das System bei echten Fällen nachvollziehbar
              bleibt: Was wurde geprüft, welches Ergebnis kam heraus, und wo
              muss die Logik verbessert werden?
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
                Elterngeld-Entscheidungslogik als automatisierte Prüfung
              </h2>

              <p className="mt-4 leading-7 text-base-content/70">
                Das Beispiel baut auf der Elterngeld-Prüfung aus § 1 BEEG auf.
                Die juristische Frage lautet vereinfacht: Ist ein Anspruch auf
                Elterngeld dem Grunde nach gegeben?
              </p>

              <p className="mt-4 leading-7 text-base-content/70">
                Für eine Automatisierung muss diese Frage in konkrete
                Eingabedaten, Prüfschritte und Ergebnisregeln übersetzt werden.
                Danach wird mit Testfällen geprüft, ob das System die Regel
                richtig anwendet.
              </p>
            </div>

            <div className="grid gap-4 lg:w-1/2">
              <div className="rounded-2xl border border-base-300 bg-base-100 p-5">
                <p className="text-sm font-semibold text-primary">
                  Eingabedaten für das System
                </p>

                <ul className="mt-3 space-y-2 leading-7 text-base-content/70">
                  <li>
                    1. Wohnsitz oder gewöhnlicher Aufenthalt in Deutschland?
                  </li>
                  <li>2. Haushalt mit dem Kind?</li>
                  <li>3. Eigene Betreuung und Erziehung des Kindes?</li>
                  <li>
                    4. Arbeitszeit höchstens 32 Wochenstunden im Durchschnitt
                    des Lebensmonats?
                  </li>
                  <li>
                    5. Zu versteuerndes Einkommen im Kalenderjahr vor der Geburt
                    über 175.000 Euro?
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-base-300 bg-base-100 p-5">
                <p className="text-sm font-semibold text-primary">
                  Automatisierte Ergebnislogik
                </p>

                <p className="mt-2 leading-7 text-base-content/70">
                  Wenn die Grundvoraussetzungen erfüllt sind und kein
                  Ausschlussgrund greift, gibt das System aus: Anspruch dem
                  Grunde nach gegeben.
                </p>

                <p className="mt-3 leading-7 text-base-content/70">
                  Wenn eine Grundvoraussetzung fehlt oder ein Ausschlussgrund
                  greift, gibt das System aus: Anspruch dem Grunde nach nicht
                  gegeben. Wenn wichtige Angaben fehlen, darf das System keine
                  endgültige Entscheidung vortäuschen.
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
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-base-300 bg-base-200 p-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Qualität prüfen
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Testfälle zeigen, ob die Logik wirklich trägt
            </h2>

            <p className="mt-4 leading-7 text-base-content/70">
              Eine automatisierte Prüfung ist erst dann brauchbar, wenn sie
              nicht nur einfache Standardfälle richtig löst, sondern auch
              Grenzfälle, fehlende Angaben und Ausnahmen nachvollziehbar
              behandelt.
            </p>
          </div>

          <div className="mt-10 grid gap-4">
            {testCases.map((testCase) => (
              <article
                key={testCase.name}
                className="grid gap-4 rounded-2xl border border-base-300 bg-base-100 p-5 lg:grid-cols-[0.5fr_1fr_1fr_1.4fr]"
              >
                <p className="font-semibold text-primary">{testCase.name}</p>

                <div>
                  <p className="text-sm font-semibold">Eingabe</p>
                  <p className="mt-2 leading-7 text-base-content/70">
                    {testCase.input}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold">Erwartetes Ergebnis</p>
                  <p className="mt-2 leading-7 text-base-content/70">
                    {testCase.result}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold">Warum?</p>
                  <p className="mt-2 leading-7 text-base-content/70">
                    {testCase.reason}
                  </p>
                </div>
              </article>
            ))}
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
                Eine geprüfte und nachgeschärfte Entscheidungslogik
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-base-content/70">
                Am Ende steht nicht nur eine automatisierte Prüfung, sondern
                eine verbesserte Entscheidungslogik. Die Testfälle zeigen, ob das System
                einfache Fälle, Ausschlussgründe, Grenzwerte und fehlende
                Angaben richtig behandelt.
              </p>

              <p className="mt-4 max-w-3xl font-semibold leading-7 text-base-content">
                Im Beispiel macht Fall C sichtbar, dass Punkt 5 der Eingabedaten
                präziser formuliert werden muss.
              </p>

              <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <p className="text-sm font-semibold text-primary">
                  Nachgeschärfte Eingabedaten für das System
                </p>

                <ul className="mt-3 space-y-2 leading-7 text-base-content/70">
                  <li>
                    1. Wohnsitz oder gewöhnlicher Aufenthalt in Deutschland?
                  </li>
                  <li>2. Haushalt mit dem Kind?</li>
                  <li>3. Eigene Betreuung und Erziehung des Kindes?</li>
                  <li>
                    4. Arbeitszeit höchstens 32 Wochenstunden im Durchschnitt
                    des Lebensmonats?
                  </li>
                  <li className="font-semibold text-base-content">
                    5. Einkommensausschluss prüfen: Beträgt das zu versteuernde
                    Einkommen im Kalenderjahr vor der Geburt mehr als 175.000
                    Euro, besteht kein Anspruch dem Grunde nach. Beträgt es
                    175.000 Euro oder weniger, wird die Prüfung fortgesetzt.
                  </li>
                </ul>
              </div>

              <p className="mt-6 max-w-3xl leading-7 text-base-content/70">
                Genau darin liegt der Qualitätssicherungs-Teil: Die
                Automatisierung wird nicht nur getestet, sondern durch die Tests
                juristisch präziser gemacht.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AutomationAndQualityCheckPage;
