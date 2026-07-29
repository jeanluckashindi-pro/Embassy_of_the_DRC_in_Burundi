import Image from "next/image";
import Link from "next/link";
import logoAmbassade from "../../assets/logo_ambassade.png";
import { ThemeToggle } from "../ThemeToggle";

const bankInfo = [
  { label: "BANK:", value: "BANQUE COMMERCIALE DU BURUNDI (BCB)" },
  { label: "BRANCH:", value: "BUJUMBURA" },
  { label: "ACCOUNT NO.:", value: "XXXX XXXX XXXX" },
  { label: "HOLDER:", value: "AMBASSADE DE LA RDC AU BURUNDI" },
];

const feeCategories = [
  {
    title: "Services de Visa",
    fees: [
      { label: "Visa 1 mois", price: "$ 50" },
      { label: "Visa 3 mois", price: "$ 90" },
      { label: "Visa 6 mois", price: "$ 180" },
    ],
  },
  {
    title: "Documents Civils",
    fees: [
      { label: "Attestation de Naissance", price: "$ 30" },
      { label: "Certificat de Bonne Conduite", price: "$ 30" },
      { label: "Certificat de Celibat", price: "$ 30" },
      { label: "Acte de Mariage", price: "$ 30" },
      { label: "Carte Consulaire", price: "$ 30" },
    ],
  },
  {
    title: "Autres Services",
    fees: [
      { label: "Passeport Ordinaire", price: "$ 100" },
      { label: "Procuration", price: "$ 50" },
      { label: "Authentification de Document", price: "$ 30" },
      { label: "Confirmation de Nationalite", price: "$ 30" },
      { label: "Rapatriement", price: "Gratuit" },
    ],
  },
];

export default function PaymentPage() {
  return (
    <main className="site-shell">
      <header className="main-header">
        <div className="container nav-wrap">
          <Link className="brand logo-brand" href="/" aria-label="Ambassade RDC au Burundi">
            <Image src={logoAmbassade} alt="Ambassade RDC au Burundi" />
          </Link>
          <nav className="desktop-nav" aria-label="Navigation principale">
            <a href="/#">Accueil</a>
            <a href="/#ambassade">Ambassade</a>
            <a href="/documents">Nos services</a>
            <a href="/demandes">Demandes</a>
            <a href="/#actualites">Actualites</a>
            <a href="/contact">Contact</a>
          </nav>
          <div className="nav-actions">{/* <Link className="online-link" href="/espace-personnel"><span className="bi-kanban" aria-hidden="true" />Espace personnel</Link> */}</div>
        </div>
      </header>

      <section className="page-section" style={{ paddingTop: "8rem", paddingBottom: "4rem", background: "var(--bg-secondary, #f8f9fa)" }}>
        <div className="container">
          <div style={{ marginBottom: "3rem", textAlign: "center" }}>
            <span className="eyebrow">Paiement</span>
            <h2>Informations de Paiement de l&apos;Ambassade</h2>
            <p style={{ color: "var(--muted, #6b7280)", maxWidth: "600px", margin: "0 auto" }}>Informations completes de paiement pour tous les services de l&apos;ambassade</p>
          </div>

          <div style={{ background: "var(--card-bg, #fff)", borderRadius: "var(--radius-lg, 12px)", padding: "2rem", border: "1px solid var(--border, #e5e7eb)", maxWidth: "480px", margin: "0 auto 3rem" }}>
            <h3 style={{ marginBottom: "1.5rem", textAlign: "center" }}>Coordonnees Bancaires</h3>
            <div style={{ maxWidth: "400px", margin: "0 auto" }}>
              {bankInfo.map((item) => (
                <div key={item.label} style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: "1px solid var(--border, #e5e7eb)" }}>
                  <span style={{ fontWeight: 600, color: "var(--muted, #6b7280)" }}>{item.label}</span>
                  <span style={{ fontWeight: 500 }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: "2rem", textAlign: "center" }}>
            <h2>Frais des Services de l&apos;Ambassade</h2>
            <p style={{ color: "var(--muted, #6b7280)" }}>Frais actuels pour tous les services consulaires</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {feeCategories.map((cat) => (
              <div key={cat.title} style={{ background: "var(--card-bg, #fff)", borderRadius: "var(--radius-lg, 12px)", padding: "1.5rem", border: "1px solid var(--border, #e5e7eb)" }}>
                <h3 style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>{cat.title}</h3>
                {cat.fees.map((fee) => (
                  <div key={fee.label} style={{ display: "flex", justifyContent: "space-between", padding: "0.4rem 0", fontSize: "0.9rem", borderBottom: "1px solid var(--border, #e5e7eb)" }}>
                    <span style={{ color: "var(--muted, #6b7280)" }}>{fee.label}</span>
                    <span style={{ fontWeight: 600, color: fee.price === "Gratuit" ? "var(--green, #10b981)" : undefined }}>{fee.price}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <p style={{ fontSize: "0.875rem", color: "var(--muted, #6b7280)", marginBottom: "1rem" }}>Tous les frais sont sujets a changement. Veuillez nous contacter pour les informations de tarification les plus recentes.</p>
            <a className="read-more" href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>Nous contacter</a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-identity">
            <Image src={logoAmbassade} alt="Ambassade RDC au Burundi" />
            <p>Representation diplomatique de la Republique Democratique du Congo aupres de la Republique du Burundi.</p>
            <div className="footer-theme">
              <span>Theme du site</span>
              <ThemeToggle />
            </div>
          </div>
          <div className="footer-column">
            <h3>Ambassade</h3>
            <a href="/#ambassade">Mission diplomatique</a>
            <a href="/#actualites">Actualites</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="footer-column">
            <h3>Services consulaires</h3>
            <a href="/documents">Documents de l&apos;Ambassade</a>
            <a href="/demandes">Formulaires de demande</a>
            <a href="/demandes#rendez-vous">Prendre rendez-vous</a>
            <a href="/espace-personnel">Espace personnel</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>(c) 2026 Ambassade de la RD Congo au Burundi - Tous droits reserves.</span>
        </div>
      </footer>
    </main>
  );
}
