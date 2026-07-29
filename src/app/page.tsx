import Image from "next/image";
import Link from "next/link";
import logoAmbassade from "../assets/logo_ambassade.png";
import passportOne from "../assets/passport_1.jpg";
import passportTwo from "../assets/passport_2.jpg";
import presidentImage from "../assets/President.webp";
import presidentTwo from "../assets/president_2.jpg";
import firstLadyImage from "../assets/premiere_dame_2.jpg";
import firstLadyTwo from "../assets/premiere_dame_2.jpg";
import { ThemeToggle } from "./ThemeToggle";

const menu = [
  { label: "Accueil", href: "#" },
  { label: "Ambassade", href: "#ambassade" },
  { label: "Nos services", href: "#documents" },
  { label: "Demandes", href: "/demandes" },
  { label: "Actualites", href: "#actualites" },
  { label: "Contact", href: "/contact" },
];

const quickLinks = [
  {
    id: "invest",
    label: "Investissement",
    title: "Investir en Republique Democratique du Congo",
    description: "Orientations pratiques pour comprendre les opportunites et les premieres demarches d'investissement en RDC.",
    action: "Comment investir ?",
    className: "invest",
  },
  {
    id: "notice",
    label: "Information officielle",
    title: "Communiques",
    description: "Avis, annonces publiques et informations importantes publies par l'Ambassade a Bujumbura.",
    action: "Voir plus",
    className: "notice",
    image: firstLadyTwo.src,
  },
  {
    id: "documents",
    label: "Services consulaires",
    title: "Documents consulaires",
    description: "Pieces a preparer et demandes consulaires disponibles en ligne.",
    action: "Voir les documents",
    className: "discover",
    image: passportOne.src,
  },
];

const leaders = [
  {
    name: "S.E.M. Felix Antoine TSHISEKEDI TSHILOMBO",
    role: "President de la Republique Democratique du Congo, Chef de l'Etat",
    image:
      presidentImage.src,
  },
  {
    name: "S.E. Judith SUMINWA TULUKA",
    role: "Premiere ministre de la Republique Democratique du Congo",
    image:
      firstLadyImage.src,
  },
  {
    name: "S.E. Therese KAYIKWAMBA WAGNER",
    role: "Ministre d'Etat, Ministre des Affaires Etrangeres, Cooperation Internationale et Francophonie",
    image:
      firstLadyTwo.src,
  },
  {
    name: "S.E. Crispin MBADU PHANZU",
    role: "Ministre delegue pres le Ministre des Affaires etrangeres en charge de la Francophonie et de la Diaspora congolaise",
    image:
      presidentTwo.src,
  },
  {
    name: "S.E. Noella AYEGANAGATO NAKWIPONE",
    role: "Vice-Ministre des Affaires etrangeres, Cooperation Internationale, Francophonie et de la Diaspora congolaise.",
    image:
      firstLadyImage.src,
  },
  {
    name: "S.E. Ambassadeur de la RDC au Burundi",
    role: "Ambassadeur de la Republique Democratique du Congo au Burundi",
    image:
      presidentImage.src,
  },
];

const news = [
  {
    day: "30",
    month: "Juin",
    title:
      "Reception de la communaute congolaise a Bujumbura pour la fete nationale",
  },
  { day: "14", month: "Mai", title: "Renforcement de la cooperation RDC - Burundi", image: firstLadyTwo.src },
  {
    day: "22",
    month: "Avr",
    title: "Information au public sur les demarches consulaires a Bujumbura",
  },
];

const communiques = [
  {
    title: "AVIS AU PUBLIC DU 30 JUIN 2026",
    excerpt:
      "L'Ambassade informe le public qu'elle sera fermee le mardi 30 juin 2026, a l'occasion de la fete nationale.",
  },
  {
    title: "COMMUNIQUE OFFICIEL",
    excerpt:
      "L'Ambassade de la Republique Democratique du Congo au Burundi informe les ressortissants congolais des nouvelles dispositions consulaires.",
  },
  {
    title: "AVIS AU PUBLIC DU 18 MAI 2026",
    excerpt:
      "L'Ambassade informe qu'elle sera fermee au public le lundi 18 mai 2026. Les rendez-vous seront reprogrammes.",
  },
  {
    title: "DEMARCHES CONSULAIRES EN LIGNE",
    excerpt:
      "Les demandes de rendez-vous, les suivis de dossiers et les formulaires peuvent etre prepares depuis l'espace personnel.",
  },
  {
    title: "DEMANDE DE PASSEPORT",
    excerpt:
      "Les requerants doivent presenter les pieces requises, effectuer la prise de rendez-vous et se presenter a Bujumbura.",
  },
  {
    title: "LISTE DES DOCUMENTS DISPONIBLES",
    excerpt:
      "Les documents produits par l'Ambassade sont remis uniquement au titulaire ou a une personne dument mandatee.",
  },
];

const documents = [
  {
    id: "passeport",
    title: "Passeport biometrie",
    image: passportOne.src,
    items: ["Formulaire de demande", "Ancien passeport ou piece d'identite", "Preuve de nationalite", "Rendez-vous de capture"],
  },
  {
    id: "laissez-passer",
    title: "Laissez-passer consulaire",
    image: passportTwo.src,
    items: ["Declaration de perte si necessaire", "Photo d'identite", "Justificatif de voyage", "Preuve d'identite congolaise"],
  },
  {
    id: "carte-consulaire",
    title: "Carte consulaire",
    image: passportOne.src,
    items: ["Copie du passeport", "Adresse au Burundi", "Photo recente", "Formulaire d'inscription"],
  },
  {
    id: "visa",
    title: "Visa et entree en RDC",
    image: passportTwo.src,
    items: ["Passeport valide", "Invitation ou reservation", "Photo d'identite", "Motif du voyage"],
  },
  {
    id: "legalisation",
    title: "Legalisation et certification",
    image: passportOne.src,
    items: ["Document original", "Copie simple", "Piece d'identite", "Preuve de paiement si applicable"],
  },
  {
    id: "procuration",
    title: "Procuration et attestation",
    image: passportTwo.src,
    items: ["Identite du mandant", "Identite du mandataire", "Objet de la procuration", "Signature devant l'agent consulaire"],
  },
  {
    id: "etat-civil",
    title: "Naissance, mariage, deces",
    image: passportOne.src,
    items: ["Acte local", "Pieces d'identite", "Livret ou justificatifs", "Demande de transcription"],
  },
  {
    id: "nationalite",
    title: "Nationalite et etat civil",
    image: passportTwo.src,
    items: ["Preuve de filiation", "Actes originaux", "Copies certifiees", "Contact du demandeur"],
  },
];
const discover = [
  {
    title: "Villes",
    description: "Kinshasa, Lubumbashi, Goma et les grands centres urbains portent l'energie economique et culturelle du pays.",
    image:
      "https://ambardcbujumbura.cd/wp-content/uploads/2025/05/kinshasa-1024x683.jpg",
  },
  {
    title: "Gastronomie",
    description: "Des saveurs familiales, des produits locaux et une cuisine conviviale racontent les terroirs congolais.",
    image: "https://ambardcbujumbura.cd/wp-content/uploads/2025/05/186899.jpg",
  },
  {
    title: "Parcs nationaux",
    description: "Virunga, Garamba, Salonga et d'autres reserves protegent une biodiversite exceptionnelle.",
    image:
      "https://ambardcbujumbura.cd/wp-content/uploads/2025/05/71e37602-23e3-4af2-aa46-be67acbc05c1.jpg",
  },
  {
    title: "Les lieux culturels",
    description: "Musees, arts, musique et patrimoine immateriel donnent a voir la profondeur de l'identite congolaise.",
    image:
      "https://ambardcbujumbura.cd/wp-content/uploads/2025/05/Musee-National-de-la-Republique-Democratique-du-Congo.jpg",
  },
  {
    title: "Sites historiques",
    description: "Des lieux de memoire et des itineraires historiques pour comprendre les grandes etapes du pays.",
    image:
      "https://ambardcbujumbura.cd/wp-content/uploads/2025/05/site_1511_0011-1200-630-20170904150559.jpg",
  },
  {
    title: "Sites naturels",
    description: "Fleuve Congo, volcans, forets et paysages majestueux offrent une destination rare en Afrique centrale.",
    image:
      "https://ambardcbujumbura.cd/wp-content/uploads/2025/05/IMG_8234_DxO.jpg",
  },
];
export default function Home() {
  return (
    <main className="site-shell">
      <section className="topbar">
        <div className="container topbar-inner">
          <div className="contact-line">
            <span className="contact-item">
              <span className="contact-icon location-icon" aria-hidden="true" />
              Bujumbura, Burundi
            </span>
            <span className="contact-item">
              <span className="contact-icon mail-icon" aria-hidden="true" />
              contact@ambardcbujumbura.cd
            </span>
          </div>
          <div className="socials" aria-label="Social media">
            <span>f</span>
            <span>x</span>
            <span>yt</span>
            <span>ig</span>
            <span>in</span>
          </div>
        </div>
      </section>

      <header className="main-header">
        <div className="container nav-wrap">
          <a className="brand logo-brand" href="#" aria-label="Ambassade RDC au Burundi">
            <Image src={logoAmbassade} alt="Ambassade RDC au Burundi" priority />
          </a>
          <nav className="desktop-nav" aria-label="Navigation principale">
            {menu.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            {/* <Link className="online-link" href="/espace-personnel">
              <span className="bi-kanban" aria-hidden="true" />
              Espace personnel
            </Link> */}
          </div>
        </div>
      </header>

      <section className="hero institutional-hero" aria-label="Accueil">
        <div className="hero-slide hero-invest">
          <div className="container hero-institutional-grid">
            <div className="hero-content">
              <span className="hero-kicker">Representation diplomatique - Bujumbura</span>
              <h1>Ambassade de la Republique Democratique du Congo au Burundi</h1>
              <p>
                Services consulaires, assistance aux ressortissants congolais,
                information officielle et accompagnement des demandes de documents.
              </p>
              <div className="hero-actions">
                <Link href="/demandes?type=passeport" className="hero-primary-link">Demander un document</Link>
                <a href="#documents" className="hero-secondary-link">Voir les services</a>
              </div>
            </div>

            <aside className="hero-consular-card" aria-label="Acces rapides consulaires">
              <Image src={logoAmbassade} alt="Ambassade RDC au Burundi" priority />
              <span>Guichet consulaire</span>
              <h2>Acces rapide</h2>
              <div className="hero-service-list">
                <Link href="/demandes?type=passeport">Passeport biometrique</Link>
                <Link href="/demandes?type=carte-consulaire">Carte consulaire</Link>
                <Link href="/demandes?type=visa">Visa pour la RDC</Link>
                <Link href="/espace-personnel">Suivre mon dossier</Link>
              </div>
            </aside>
          </div>
        </div>
        <div className="hero-ribbon">
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="quick-grid container" id="grand-public" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <span className="eyebrow">Acces rapide</span>
          <h2>Informations utiles pour le public</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {quickLinks.map((item) => (
            <article className={`quick-card ${item.className}`} key={item.title} style={{ backgroundImage: `url("${item.image}")`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "var(--radius-lg, 12px)", overflow: "hidden", position: "relative" }}>
              <div style={{ padding: "2rem", background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))", color: "#fff", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <span style={{ fontSize: "0.85rem", opacity: 0.9, marginBottom: "0.5rem" }}>{item.label}</span>
                <h2 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>{item.title}</h2>
                <p style={{ fontSize: "0.9rem", opacity: 0.85, marginBottom: "1rem" }}>{item.description}</p>
                <a href="#documents" style={{ color: "var(--primary, #fff)", fontWeight: 600, textDecoration: "underline" }}>{item.action}</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="welcome container" id="ambassade">
        <div className="embassy-photo" style={{ backgroundImage: `linear-gradient(rgba(0, 60, 120, 0.1), rgba(0, 0, 0, 0.2)), url("${presidentImage.src}")` }} />
        <div className="welcome-copy">
          <span className="section-mark" />
          <h2>Bienvenue a l&apos;Ambassade de la Republique Democratique du Congo au Burundi</h2>
          <h3>Aupres de la Republique du Burundi, a Bujumbura</h3>
          <p>
            Nous sommes heureux de vous accueillir et de vous inviter a utiliser
            nos services consulaires pour vos demandes de documents, vos rendez-vous
            et le suivi de vos dossiers.
          </p>
          <p>
            Ce site fournit les informations necessaires pour le grand public,
            les ressortissants congolais, les investisseurs et les partenaires
            institutionnels presents au Burundi.
          </p>
          <p>
            L&apos;Ambassade a Bujumbura reste a votre service pour faciliter les
            demarches administratives et renforcer les liens entre la RDC et le Burundi.
          </p>
          <a className="read-more" href="#documents">
            Documents consulaires
          </a>
        </div>
      </section>

      <section className="leaders">
        <div className="container leader-grid">
          {leaders.map((leader) => (
            <article className="leader" key={leader.name}>
              <div
                className="leader-photo"
                style={{ backgroundImage: `url("${leader.image}")` }}
              />
              <h3>{leader.name}</h3>
              <p>{leader.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="documents-section" id="documents">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Grand public</span>
            <h2>Documents de l&apos;Ambassade</h2>
            <p>
              Retrouvez les principales categories de documents et pieces a
              preparer avant votre rendez-vous consulaire a Bujumbura.
            </p>
          </div>
          <div className="documents-grid">
            {documents.map((document) => (
              <article className="document-card" key={document.title}>
                <div className="document-photo" style={{ backgroundImage: `url("${document.image}")` }} />
                <div className="document-icon" aria-hidden="true" />
                <h3>{document.title}</h3>
                <ul>
                  {document.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link href={`/demandes?type=${document.id}`}>Demarrer la demande</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="news-section" id="actualites">
        <div className="container">
          <div className="news-list">
            {news.map((item) => (
              <article className="news-item" key={item.title}>
                <div className="news-item-img" style={{ backgroundImage: `url("${item.image}")` }} />
                <div className="news-item-body">
                  <div className="news-item-meta">
                    <span className="news-item-date">{item.day} {item.month}</span>
                    <span className="news-item-source">Ambassade RDC au Burundi</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>Ambassade RDC au Burundi - Bujumbura</p>
                  <a className="news-item-link" href="#">Lire la suite</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="communiques">
        <div className="container">
          <div className="section-title">
            <h2>Communiques</h2>
          </div>
          <div className="communique-grid">
            {communiques.map((item) => (
              <article className="communique" key={item.title}>
                <a href="#">{item.title}</a>
                <p>{item.excerpt}</p>
                <span>Lire la suite</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="discover-section" id="rdc">
        <div className="container discover-layout">
          <div className="discover-intro">
            <span className="eyebrow">Republique democratique du Congo</span>
            <h2>Venez decouvrir notre merveilleux pays</h2>
            <p>
              La RDC rassemble des villes vibrantes, des paysages puissants, une
              biodiversite unique et un patrimoine culturel vivant. Cette section
              guide le grand public vers les principaux univers a explorer.
            </p>
            <div className="discover-stats" aria-label="Points forts de la RDC">
              <span><strong>26</strong> Provinces</span>
              <span><strong>9</strong> Pays voisins</span>
              <span><strong>80M+</strong> Hectares de terres arables</span>
            </div>
          </div>

          <article className="discover-feature">
            <div
              className="discover-feature-photo"
              style={{ backgroundImage: `url("${discover[0].image}")` }}
            />
            <div className="discover-feature-copy">
              <span>Destination RDC</span>
              <h3>Un pays continent au coeur de l Afrique</h3>
              <p>
                Entre le fleuve Congo, les parcs nationaux, la creation musicale,
                les villes et les sites naturels, la RDC offre un champ immense de
                decouverte, de cooperation et d investissement responsable.
              </p>
            </div>
          </article>

          <div className="discover-grid">
            {discover.map((item) => (
              <article className="discover-card" key={item.title}>
                <div
                  className="discover-photo"
                  style={{ backgroundImage: `url("${item.image}")` }}
                />
                <div className="discover-card-copy">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="discover-topics">
            <span>Tourisme</span>
            <span>Culture</span>
            <span>Investissement</span>
            <span>Cooperation</span>
            <span>Diaspora</span>
          </div>

          <a className="discover-button" href="#documents">
            Preparer mon voyage
          </a>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="container footer-main">
          <div className="footer-identity">
            <Image src={logoAmbassade} alt="Ambassade RDC au Burundi" />
            <p>
              Representation diplomatique de la Republique Democratique du Congo
              aupres de la Republique du Burundi, au service des ressortissants,
              partenaires et visiteurs.
            </p>
            <div className="footer-theme">
              <span>Theme du site</span>
              <ThemeToggle />
            </div>
          </div>

          <div className="footer-column">
            <h3>Ambassade</h3>
            <a href="#ambassade">Mission diplomatique</a>
            <a href="#actualites">Actualites</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="footer-column">
            <h3>Services consulaires</h3>
            <a href="#documents">Documents de l&apos;Ambassade</a>
            <a href="/demandes">Formulaires de demande</a>
            <a href="/demandes#rendez-vous">Prendre rendez-vous</a>
            <a href="/espace-personnel">Espace personnel</a>
          </div>

          <div className="footer-column footer-contact-card">
            <h3>Contacts</h3>
            <p>Bujumbura, Burundi</p>
            <p>+257 00 00 00 00</p>
            <p>contact@ambardcbujumbura.cd</p>
            <p>www.ambardcbujumbura.cd</p>
            <div className="footer-hours">
              <strong>Horaires</strong>
              <span>Lundi - Vendredi</span>
              <span>09:00 - 15:30</span>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>(c) 2026 Ambassade de la RD Congo au Burundi - Tous droits reserves.</span>
          <div className="footer-socials">
            <span>Facebook</span>
            <span>X-twitter</span>
            <span>Youtube</span>
            <span>Instagram</span>
          </div>
        </div>
      </footer>
    </main>
  );
}