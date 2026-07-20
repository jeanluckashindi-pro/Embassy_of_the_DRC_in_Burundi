import Image from "next/image";
import Link from "next/link";
import logoAmbassade from "../../assets/logo_ambassade.png";
import { ThemeToggle } from "../ThemeToggle";

const stats = [
  { label: "Dossiers ouverts", value: "3" },
  { label: "Rendez-vous", value: "1" },
  { label: "Documents valides", value: "6" },
  { label: "Notifications", value: "4" },
];

const requests = [
  { type: "Carte consulaire", status: "Pieces a verifier", date: "22 juillet 2026" },
  { type: "Passeport biometrie", status: "Rendez-vous confirme", date: "25 juillet 2026" },
  { type: "Legalisation", status: "Pret pour retrait", date: "29 juillet 2026" },
];

const documents = [
  "Passeport",
  "Carte consulaire",
  "Acte de naissance",
  "Procuration",
  "Attestation de residence",
  "Certificat de nationalite",
];

export default function PersonalSpacePage() {
  return (
    <main className="dashboard-shell">
      <aside className="dashboard-sidebar">
        <Link className="dashboard-logo" href="/" aria-label="Ambassade RDC au Burundi">
          <Image src={logoAmbassade} alt="Ambassade RDC au Burundi" priority />
        </Link>
        <nav className="dashboard-nav" aria-label="Navigation espace personnel">
          <a className="active" href="#">Tableau de bord</a>
          <a href="#dossiers">Mes dossiers</a>
          <a href="#documents">Mes documents</a>
          <a href="#rendez-vous">Rendez-vous</a>
          <a href="#profil">Profil</a>
        </nav>
        <Link className="logout-link" href="/login">Deconnexion</Link>
      </aside>

      <section className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <span className="eyebrow">Bujumbura</span>
            <h1>Espace personnel</h1>
            <p>Bienvenue dans votre portail consulaire de l&apos;Ambassade de la RDC au Burundi.</p>
          </div>
          <ThemeToggle />
        </header>

        <div className="stats-grid">
          {stats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </article>
          ))}
        </div>

        <section className="dashboard-grid" id="dossiers">
          <article className="dashboard-card large-card">
            <div className="card-heading">
              <h2>Mes demandes recentes</h2>
              <a href="#">Nouvelle demande</a>
            </div>
            <div className="request-list">
              {requests.map((request) => (
                <div className="request-row" key={request.type}>
                  <div>
                    <strong>{request.type}</strong>
                    <span>{request.date}</span>
                  </div>
                  <em>{request.status}</em>
                </div>
              ))}
            </div>
          </article>

          <article className="dashboard-card" id="rendez-vous">
            <h2>Prochain rendez-vous</h2>
            <div className="appointment-mini">
              <strong>25 juillet 2026</strong>
              <span>09:00 - Ambassade RDC, Bujumbura</span>
              <p>Capture biometrie et verification des originaux.</p>
            </div>
          </article>
        </section>

        <section className="dashboard-card" id="documents">
          <div className="card-heading">
            <h2>Documents disponibles dans mon espace</h2>
            <Link href="/">Voir guide grand public</Link>
          </div>
          <div className="personal-documents">
            {documents.map((document) => (
              <span key={document}>{document}</span>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}