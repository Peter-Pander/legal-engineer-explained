import {
  ArrowLeft,
  ArrowRight,
  Bot,
  CheckCircle2,
  CircleMinus,
  CircleX,
  ClipboardCheck,
  FileText,
  Send,
  Workflow,
} from "lucide-react";
import { Link } from "react-router";

import Navbar from "../components/Navbar";

const Citation = ({ href, label, preview, domain }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative inline-flex align-baseline text-sm font-semibold text-base-content/60 underline decoration-base-content/30 decoration-dotted underline-offset-4 transition hover:rounded-md hover:bg-neutral hover:px-1 hover:text-neutral-content hover:no-underline"
    >
      ({label})
      <span className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 hidden w-72 -translate-x-1/2 rounded-2xl border border-base-300 bg-neutral p-4 text-left text-sm font-normal text-neutral-content shadow-xl group-hover:block">
        <span className="block font-semibold">{label}</span>
        <span className="mt-1 block text-neutral-content/70">{domain}</span>
        <span className="mt-3 block leading-6">{preview}</span>
      </span>
    </a>
  );
};

const WorkflowIntegrationPage = () => {
  const overviewSteps = [
    {
      title: "Eltern starten den Antrag",
      icon: FileText,
    },
    {
      title: "Eltern machen Angaben und stellen Nachweise bereit",
      icon: ClipboardCheck,
    },
    {
      title: "Der digitale Assistent führt durch den Antrag",
      icon: Bot,
    },
    {
      title: "Der digitale Assistent prüft Eingaben und gibt Hinweise",
      icon: Bot,
    },
    {
      title: "Der vollständige Antrag wird übermittelt",
      icon: Send,
    },
    {
      title: "Die Elterngeldstelle entscheidet",
      icon: CheckCircle2,
    },
  ];

  const flowSteps = [
    {
      title: "Antrag starten",
      description: "Eltern beginnen den digitalen Elterngeldantrag.",
    },
    {
      title: "Angaben machen und Nachweise hinzufügen",
      description:
        "Die antragstellende Person gibt die erforderlichen Informationen ein und fügt Nachweise hinzu. Dazu können zum Beispiel Angaben zum Kind, zur Betreuung, zur Arbeitszeit, zum Einkommen und zu den gewünschten Bezugsmonaten gehören.",
      sourceLabel: "ElterngeldDigital",
      sourceHref:
        "https://www.elterngeld-digital.de/ams/content/Elterngeld/haeufige-fragen-online-antrag",
      sourceDomain: "elterngeld-digital.de",
      sourcePreview:
        "Offizielle FAQ zum Online-Antrag, unter anderem zum Hochladen von Nachweisen und zur Antragstellung über ElterngeldDigital.",
    },
    {
      title: "Beim Ausfüllen geführt werden",
      description:
        "Der digitale Assistent führt Schritt für Schritt durch den Antrag, erklärt Fachbegriffe, beantwortet häufige Fragen und unterstützt dadurch beim Ausfüllen.",
      sourceLabel: "BMFSFJ",
      sourceHref:
        "https://www.bmbfsfj.bund.de/bmbfsfj/themen/familie/familienleistungen/elterngeld",
      sourceDomain: "bmbfsfj.bund.de",
      sourcePreview:
        "Offizielle Informationen des Bundesfamilienministeriums zum Elterngeld und zu ElterngeldDigital.",
    },
    {
      title: "Eingaben prüfen und Rückmeldungen geben",
      description:
        "Wenn Angaben fehlen, fehlerhaft sind oder ein Nachweis benötigt wird, weist der digitale Assistent darauf hin. Die antragstellende Person kann die Angaben dann ergänzen oder korrigieren.",
      sourceLabel: "BMFSFJ",
      sourceHref:
        "https://www.bmbfsfj.bund.de/bmbfsfj/themen/familie/familienleistungen/elterngeld",
      sourceDomain: "bmbfsfj.bund.de",
      sourcePreview:
        "Das BMFSFJ beschreibt ElterngeldDigital als Assistenten, der fehlerhafte Eingaben erkennen kann.",
    },
    {
      title: "Vollständigen Antrag übermitteln",
      description:
        "Wenn der Antrag übermittlungsfähig ist, können die Daten an die zuständige Elterngeldstelle weitergegeben werden. In Berlin können Antragsdaten, Nachweise und Unterschrift über ElterngeldDigital vollständig digital übermittelt werden.",
      sourceLabel: "BMFSFJ",
      sourceHref:
        "https://www.bmbfsfj.bund.de/bmbfsfj/aktuelles/alle-meldungen/elterngeld-in-berlin-jetzt-papierlos-beantragbar-230876",
      sourceDomain: "bmbfsfj.bund.de",
      sourcePreview:
        "Meldung zur papierlosen Antragstellung in Berlin und zur Anbindung des Verwaltungs-Fachverfahrens.",
    },
    {
      title: "Behördliche Entscheidung",
      description:
        "Die Elterngeldstelle bearbeitet den Antrag und trifft die abschließende Entscheidung.",
      sourceLabel: "ElterngeldDigital",
      sourceHref: "https://www.elterngeld-digital.de/ams/Elterngeld/hilfe",
      sourceDomain: "elterngeld-digital.de",
      sourcePreview:
        "Hinweis, dass berechnete Ergebnisse nur Orientierung bieten und die zuständige Elterngeldstelle abschließend entscheidet.",
    },
  ];

  const feedbackItems = [
    {
      title: "Angabe fehlt",
      description:
        "Der digitale Assistent zeigt, welche Information noch benötigt wird. Die Person kann den Antrag ergänzen, bevor er weiterbearbeitet wird.",
      icon: CircleMinus,
    },
    {
      title: "Angabe ist fehlerhaft",
      description:
        "Der digitale Assistent weist auf das Problem hin. Die Korrektur übernimmt nicht das System, sondern die antragstellende Person.",
      icon: CircleX,
    },
    {
      title: "Nachweis fehlt",
      description:
        "Der digitale Assistent macht sichtbar, dass ein Dokument hochgeladen oder später nachgereicht werden muss.",
      icon: CircleMinus,
    },
    {
      title: "Antrag ist vollständig",
      description:
        "Der Antrag kann an die zuständige Stelle übermittelt und dort weiterbearbeitet werden.",
      icon: CheckCircle2,
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
              Workflow Integration
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Entscheidungslogik in Workflows integrieren
            </h1>

            <p className="mt-6 text-lg leading-8 text-base-content/70">
              Eine juristische Entscheidungslogik wird erst praktisch nutzbar,
              wenn sie an der richtigen Stelle in einen echten Arbeitsablauf
              eingebunden wird.
            </p>

            <p className="mt-4 leading-7 text-base-content/70">
              Sie ist nicht der ganze Prozess. Aber sie kann helfen, Angaben zu
              prüfen, fehlende Nachweise sichtbar zu machen, Hinweise auszulösen
              und einen vollständigen Antrag an die zuständige Stelle
              weiterzugeben.
            </p>
          </div>

          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 shadow-sm lg:self-center">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Workflow size={26} />
            </div>

            <h2 className="text-2xl font-bold">
              Beispiel: Digitaler Elterngeldantrag
            </h2>

            <div className="mt-5 grid gap-3">
              {overviewSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={step.title} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon size={17} />
                    </span>
                    <span className="font-semibold text-base-content/90">
                      {index + 1}. {step.title}
                    </span>
                  </div>
                );
              })}
            </div>

            <p className="mt-5 leading-7 text-base-content/70">
              Der Ablauf zeigt, wer welche Rolle hat: Die Eltern liefern
              Angaben, der digitale Assistent führt durch den Antrag, gibt
              Rückmeldungen, und die zuständige Stelle entscheidet am Ende.
            </p>
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-base-300 bg-base-200 p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Grundidee
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Die Entscheidungslogik ist ein Baustein im Workflow
              </h2>

              <p className="mt-4 leading-7 text-base-content/70">
                Im Workflow arbeitet die rechtliche Logik nicht allein. Sie ist
                mit Formularführung, Nachweisen, Rückmeldungen, Übermittlung und
                behördlicher Bearbeitung verbunden.
              </p>
            </div>

            <div className="rounded-2xl border border-base-300 bg-base-100 p-6">
              <p className="text-sm font-semibold text-primary">
                Ein einfaches Bild
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Nicht das ganze Auto, sondern der Motor, der die Entscheidung
                vorbereitet
              </h3>

              <p className="mt-4 leading-7 text-base-content/70">
                Die Entscheidungslogik ist nicht das ganze System und sie
                ersetzt nicht die Elterngeldstelle. Sie ist eher der Motor im
                Hintergrund: Sie verarbeitet Angaben und Nachweise nach festen
                Regeln und erzeugt daraus Rückmeldungen im Antrag. So kann das
                System zum Beispiel auf fehlende Angaben, fehlerhafte Eingaben
                oder benötigte Nachweise hinweisen. Dadurch entsteht eine
                strukturierte Grundlage für die spätere behördliche
                Entscheidung.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-base-300 bg-base-200 p-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Reales Beispiel
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Der digitale Elterngeldantrag als Workflow
            </h2>

            <p className="mt-4 leading-7 text-base-content/70">
              ElterngeldDigital zeigt gut, dass ein Online-Antrag mehr ist als
              ein digitales Formular. Der digitale Assistent führt Schritt für
              Schritt durch den Antrag, erklärt Fachbegriffe, beantwortet
              häufige Fragen und kann fehlerhafte Eingaben erkennen.{" "}
              <Citation
                href="https://www.bmbfsfj.bund.de/bmbfsfj/themen/familie/familienleistungen/elterngeld"
                label="BMFSFJ"
                domain="bmbfsfj.bund.de"
                preview="Offizielle Informationen des Bundesfamilienministeriums zum Elterngeld und zu ElterngeldDigital."
              />
            </p>

            <p className="mt-4 leading-7 text-base-content/70">
              Ein konkretes Beispiel für einen besonders weit integrierten
              digitalen Ablauf ist Berlin: Dort können Antragsdaten, Nachweise
              und Unterschrift über ElterngeldDigital komplett digital
              übermittelt werden. Dafür wurde auch das Fachverfahren der
              Verwaltung ausgebaut.{" "}
              <Citation
                href="https://www.bmbfsfj.bund.de/bmbfsfj/aktuelles/alle-meldungen/elterngeld-in-berlin-jetzt-papierlos-beantragbar-230876"
                label="BMFSFJ"
                domain="bmbfsfj.bund.de"
                preview="Meldung zur papierlosen Antragstellung in Berlin und zur Anbindung des Verwaltungs-Fachverfahrens."
              />
            </p>
          </div>

          <div className="mt-10 grid gap-4">
            {flowSteps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col gap-4 rounded-2xl border border-base-300 bg-base-100 p-5 sm:flex-row sm:items-start"
              >
                <div className="flex items-center gap-4 sm:w-1/3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                    {index + 1}
                  </span>
                  <p className="font-semibold">{step.title}</p>
                </div>

                <div className="hidden pt-2 text-primary sm:block">
                  <ArrowRight size={22} />
                </div>

                <p className="leading-7 text-base-content/70 sm:flex-1">
                  {step.description}
                  {step.sourceHref && (
                    <>
                      {" "}
                      <Citation
                        href={step.sourceHref}
                        label={step.sourceLabel}
                        domain={step.sourceDomain}
                        preview={step.sourcePreview}
                      />
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-base-300 bg-base-100 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Wichtige Abgrenzung
            </p>

            <h3 className="mt-3 text-xl font-bold">
              Der Online-Antrag unterstützt den Ablauf, ersetzt aber nicht die
              behördliche Entscheidung
            </h3>

            <p className="mt-4 leading-7 text-base-content/70">
              ElterngeldDigital entscheidet nicht rechtsverbindlich über den
              Anspruch. Das im Online-Antrag berechnete Ergebnis ist nur eine
              Orientierung; die abschließende sachliche Entscheidung erfolgt
              durch die zuständige Elterngeldstelle.{" "}
              <Citation
                href="https://www.elterngeld-digital.de/ams/Elterngeld/hilfe"
                label="ElterngeldDigital"
                domain="elterngeld-digital.de"
                preview="Hinweis, dass berechnete Ergebnisse nur Orientierung bieten und die zuständige Elterngeldstelle entscheidet."
              />
            </p>
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-base-300 bg-base-200 p-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Rückmeldungen im Antrag
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Wie der digitale Assistent während des Ausfüllens reagiert
            </h2>

            <p className="mt-4 leading-7 text-base-content/70">
              Die folgenden Beispiele zeigen noch einmal konkret, wie der
              digitale Assistent typische Situationen während des Ausfüllens
              behandelt. Im Antrag entsteht nicht sofort eine finale
              Entscheidung. Zuerst reagiert er auf Eingaben: Er zeigt Hinweise,
              fordert zur Ergänzung auf oder macht sichtbar, dass der Antrag
              übermittelt werden kann.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {feedbackItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-bold">{item.title}</h3>

                  <p className="mt-4 leading-7 text-base-content/70">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-primary/20 bg-primary/5 p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Workflow size={30} />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Ergebnis
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Aus Entscheidungslogik wird ein nutzbarer Teil des
                Gesamtprozesses
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-base-content/70">
                Durch Workflow-Integration bleibt die juristische
                Entscheidungslogik nicht isoliert. Sie wird in einen Ablauf
                eingebettet, in dem Menschen Angaben machen und Nachweise
                bereitstellen, der digitale Assistent diese Angaben anhand der
                Entscheidungslogik prüft und Rückmeldungen gibt, und der Vorgang
                anschließend an die zuständige Stelle übermittelt und
                weiterbearbeitet werden kann. So wird aus einer isolierten
                Entscheidungslogik ein praktisch nutzbarer Bestandteil digitaler
                Vorgangsautomatisierung.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WorkflowIntegrationPage;
