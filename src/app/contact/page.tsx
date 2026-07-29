import Image from "next/image";
import Link from "next/link";
import logoAmbassade from "../../assets/logo_ambassade.png";
import { ThemeToggle } from "../ThemeToggle";

export default function ContactPage() {
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
          <div className="nav-actions">
            {/* <Link className="online-link" href="/espace-personnel">
              <span className="bi-kanban" aria-hidden="true" />
              Espace personnel
            </Link> */}
          </div>
        </div>
      </header>

      <section className="page-section container" style={{ paddingTop: "8rem", paddingBottom: "4rem" }}>
        <div style={{ marginBottom: "2.5rem" }}>
          <span className="eyebrow">Nous contacter</span>
          <h2>Contacts de l&apos;Ambassade</h2>
          <p>Retrouvez ci-dessous les coordonnees et les horaires de la representation diplomatique de la RDC a Bujumbura.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          <article className="contact-card" style={{ background: "var(--card-bg, #fff)", borderRadius: "var(--radius-lg, 12px)", padding: "2rem", border: "1px solid var(--border, #e5e7eb)" }}>
            <h3 style={{ marginBottom: "1rem" }}>Adresse</h3>
            <p>Bujumbura, Burundi</p>
          </article>
          <article className="contact-card" style={{ background: "var(--card-bg, #fff)", borderRadius: "var(--radius-lg, 12px)", padding: "2rem", border: "1px solid var(--border, #e5e7eb)" }}>
            <h3 style={{ marginBottom: "1rem" }}>Telephone</h3>
            <p>+257 00 00 00 00</p>
          </article>
          <article className="contact-card" style={{ background: "var(--card-bg, #fff)", borderRadius: "var(--radius-lg, 12px)", padding: "2rem", border: "1px solid var(--border, #e5e7eb)" }}>
            <h3 style={{ marginBottom: "1rem" }}>Email</h3>
            <p>contact@ambardcbujumbura.cd</p>
          </article>
          <article className="contact-card" style={{ background: "var(--card-bg, #fff)", borderRadius: "var(--radius-lg, 12px)", padding: "2rem", border: "1px solid var(--border, #e5e7eb)" }}>
            <h3 style={{ marginBottom: "1rem" }}>Site web</h3>
            <p>www.ambardcbujumbura.cd</p>
          </article>
          <article className="contact-card" style={{ background: "var(--card-bg, #fff)", borderRadius: "var(--radius-lg, 12px)", padding: "2rem", border: "1px solid var(--border, #e5e7eb)" }}>
            <h3 style={{ marginBottom: "1rem" }}>Horaires</h3>
            <p><strong>Lundi - Vendredi</strong></p>
            <p>09:00 - 15:30</p>
          </article>
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
