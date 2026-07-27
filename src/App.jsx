import React from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRight, CalendarDays, CheckCircle2, ClipboardCheck, Clock, FileText, Globe, Mail, MapPin, Phone, UploadCloud } from "lucide-react";
import logoAmbassade from "./assets/logo_ambassade.png";
import logoAmbassadeLight from "./assets/logo_ambassade_light.png";
import passportOne from "./assets/passport_1.jpg";
import passportTwo from "./assets/passport_2.jpg";
import presidentImage from "./assets/President.webp";
import presidentTwo from "./assets/president_2.jpg";
import firstLadyImage from "./assets/premiere_dame_2.jpg";
import firstLadyTwo from "./assets/premiere_dame_2.jpg";
import { API_BASE_URL, apiFetch, fetchTypeDemandeChamps, fetchTypeDemandeDocuments, fetchTypeDemandes } from "./api.js";
import { ThemeToggle } from "./ThemeToggle.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const menu = [
  { label: "Accueil", href: "/" },
  { label: "Ambassade", href: "/#ambassade" },
  { label: "Documents", href: "/documents" },
  { label: "Demandes", href: "/demandes" },
  { label: "Actualites", href: "/#actualites" },
  { label: "Decouvrir", href: "/#rdc" },
  { label: "Contact", href: "/#contact" },
];

function SiteHeader() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="main-header">
      <div className="container nav-wrap">
        <a className="brand logo-brand" href="/" aria-label="Ambassade RDC au Burundi"><><img className="theme-logo logo-dark-artwork" src={logoAmbassade} alt="Ambassade RDC au Burundi" /><img className="theme-logo logo-light-artwork" src={logoAmbassadeLight} alt="Ambassade RDC au Burundi" /></></a>
        <nav className="desktop-nav" aria-label="Navigation principale">{menu.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}</nav>
        <div className="nav-actions"><a className="online-link" href="/espace-personnel"><span className="bi-kanban" aria-hidden="true" />Espace personnel</a></div>
        <button className="mobile-menu-toggle" type="button" aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"} onClick={() => setMobileOpen((prev) => !prev)}>
          <span className={mobileOpen ? "bar open" : "bar"} /><span className={mobileOpen ? "bar open" : "bar"} /><span className={mobileOpen ? "bar open" : "bar"} />
        </button>
      </div>
      <div className={"mobile-nav-overlay" + (mobileOpen ? " open" : "")} onClick={() => setMobileOpen(false)} />
      <nav className={"mobile-nav" + (mobileOpen ? " open" : "")} aria-label="Navigation mobile">
        <div className="mobile-nav-header"><span>Menu</span><button className="mobile-menu-close" type="button" aria-label="Fermer le menu" onClick={() => setMobileOpen(false)}>&times;</button></div>
        {menu.map((item) => <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)}>{item.label}</a>)}
        <a className="mobile-nav-cta" href="/espace-personnel" onClick={() => setMobileOpen(false)}>Espace personnel</a>
      </nav>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-main">
        <div className="footer-identity">
          <><img className="theme-logo logo-dark-artwork" src={logoAmbassade} alt="Ambassade RDC au Burundi" /><img className="theme-logo logo-light-artwork" src={logoAmbassadeLight} alt="Ambassade RDC au Burundi" /></>
          <p>Representation diplomatique de la Republique Democratique du Congo aupres de la Republique du Burundi.</p>
          <div className="footer-theme"><span>Theme du site</span><ThemeToggle /></div>
        </div>
        <div className="footer-column">
          <h3>Ambassade</h3>
          <a href="/#ambassade">Mission diplomatique</a>
          <a href="/#actualites">Actualites</a>
          <a href="/#rdc">Decouvrir la RDC</a>
          <a href="/#contact">Contact</a>
        </div>
        <div className="footer-column">
          <h3>Services consulaires</h3>
          <a href="/documents">Documents de l'Ambassade</a>
          <a href="/demandes">Formulaires de demande</a>
          <a href="/demandes#rendez-vous">Prendre rendez-vous</a>
          <a href="/espace-personnel">Espace personnel</a>
        </div>
        <div className="footer-column footer-contact-card">
          <h3>Contacts</h3>
          <div className="footer-contact-item"><MapPin size={16} strokeWidth={2.2} aria-hidden="true" /><span>Bujumbura, Burundi</span></div>
          <div className="footer-contact-item"><Phone size={16} strokeWidth={2.2} aria-hidden="true" /><span>+257 00 00 00 00</span></div>
          <div className="footer-contact-item"><Mail size={16} strokeWidth={2.2} aria-hidden="true" /><span>contact@ambardcbujumbura.cd</span></div>
          <div className="footer-contact-item"><Globe size={16} strokeWidth={2.2} aria-hidden="true" /><span>www.ambardcbujumbura.cd</span></div>
          <div className="footer-hours"><strong>Horaires</strong><span>Lundi - Vendredi</span><span>09:00 - 15:30</span></div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>(c) 2026 Ambassade de la RD Congo au Burundi - Tous droits reserves.</span>
        <div className="footer-socials">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
        </div>
      </div>
    </footer>
  );
}
async function fetchQuickLinks() {
  const response = await fetch("/api/quick-links.json");
  if (!response.ok) {
    throw new Error("Impossible de charger les raccourcis");
  }
  return response.json();
}

const PASSPORT_TYPE_DEMANDE_ID = "2822f0ec-0b3c-4529-b82d-1e5e279f4c28";

const quickLinksFallback = [
  { id: "invest", label: "Investissement", title: "Investir en Republique Democratique du Congo", description: "Orientations pratiques pour comprendre les opportunites et les premieres demarches d'investissement en RDC.", action: "Comment investir ?", href: "#documents", className: "invest", image: "/images/president_2.jpg" },
  { id: "notice", label: "Information officielle", title: "Communiques", description: "Avis, annonces publiques et informations importantes publies par l'Ambassade a Bujumbura.", action: "Voir plus", href: "#actualites", className: "notice", image: "/images/premiere_dame_2.jpg" },
  { id: "documents", label: "Services consulaires", title: "Documents consulaires", description: "Pieces a preparer et demandes consulaires disponibles en ligne.", action: "Voir les documents", href: "/documents", className: "discover", image: "/images/passport_1.jpg" },
];

const leaders = [
  { name: "S.E.M. Felix Antoine TSHISEKEDI TSHILOMBO", role: "President de la Republique Democratique du Congo, Chef de l'Etat", image: presidentImage },
  { name: "S.E. Judith SUMINWA TULUKA", role: "Premiere ministre de la Republique Democratique du Congo", image: firstLadyImage },
  { name: "S.E. Therese KAYIKWAMBA WAGNER", role: "Ministre d'Etat, Ministre des Affaires Etrangeres, Cooperation Internationale et Francophonie", image: firstLadyTwo },
  { name: "S.E. Crispin MBADU PHANZU", role: "Ministre delegue en charge de la Francophonie et de la Diaspora congolaise", image: presidentTwo },
  { name: "S.E. Noella AYEGANAGATO NAKWIPONE", role: "Vice-Ministre des Affaires etrangeres, Cooperation Internationale, Francophonie et Diaspora.", image: firstLadyImage },
  { name: "S.E. Ambassadeur de la RDC au Burundi", role: "Ambassadeur de la Republique Democratique du Congo au Burundi", image: presidentImage },
];

const news = [
  { day: "30", month: "Juin", title: "Reception de la communaute congolaise a Bujumbura pour la fete nationale", image: presidentTwo },
  { day: "14", month: "Mai", title: "Renforcement de la cooperation RDC - Burundi", image: firstLadyTwo },
  { day: "22", month: "Avr", title: "Information au public sur les demarches consulaires a Bujumbura", image: passportOne },
];

const communiques = [
  { title: "AVIS AU PUBLIC DU 30 JUIN 2026", excerpt: "L'Ambassade informe le public qu'elle sera fermee le mardi 30 juin 2026, a l'occasion de la fete nationale. Tous les services consulaires seront suspendus pour cette journee.", date: "30 Juin 2026", category: "Avis public" },
  { title: "COMMUNIQUE OFFICIEL", excerpt: "L'Ambassade de la Republique Democratique du Congo au Burundi informe les ressortissants congolais des nouvelles dispositions consulaires applicables a compter de juillet 2026.", date: "25 Juin 2026", category: "Communique officiel" },
  { title: "AVIS AU PUBLIC DU 18 MAI 2026", excerpt: "L'Ambassade informe qu'elle sera fermee au public le lundi 18 mai 2026. Les rendez-vous seront reprogrammes automatiquement.", date: "18 Mai 2026", category: "Avis public" },
  { title: "DEMARCHES CONSULAIRES EN LIGNE", excerpt: "Les demandes de rendez-vous, les suivis de dossiers et les formulaires peuvent etre prepares depuis l'espace personnel en ligne.", date: "12 Mai 2026", category: "Information" },
  { title: "DEMANDE DE PASSEPORT", excerpt: "Les requerants doivent presenter les pieces requises, effectuer la prise de rendez-vous et se presenter a Bujumbura avec tous les documents originaux.", date: "05 Mai 2026", category: "Information" },
  { title: "LISTE DES DOCUMENTS DISPONIBLES", excerpt: "Les documents produits par l'Ambassade sont remis uniquement au titulaire ou a une personne dument mandatee avec procuration valide.", date: "28 Avr 2026", category: "Information" },
];

const publicServiceCards = [
  { title: "Delivrance de visas", description: "Informations pour l'entree en Republique Democratique du Congo, pieces a fournir et orientation vers le depot de dossier.", href: "/demandes?type=visa" },
  { title: "Production de passeports", description: "Preparation de la demande, verification des pieces, rendez-vous consulaire et suivi du dossier a Bujumbura.", href: "/demandes?type=passeport" },
  { title: "Communiques officiels", description: "Avis au public, annonces de fermeture, nouvelles dispositions consulaires et informations de la chancellerie.", href: "#actualites" },
];

const revealViewport = { once: true, amount: 0.18 };
const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.58, ease: "easeOut" } },
};
const staggerReveal = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
};
const cardReveal = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.48, ease: "easeOut" } },
};

const documents = [
  { id: "passeport", title: "Passeport biometrique", image: passportOne, items: ["Formulaire de demande", "Ancien passeport ou piece d'identite", "Preuve de nationalite", "Rendez-vous de capture"] },
  { id: "laissez-passer", title: "Laissez-passer consulaire", image: passportTwo, items: ["Declaration de perte si necessaire", "Photo d'identite", "Justificatif de voyage", "Preuve d'identite congolaise"] },
  { id: "carte-consulaire", title: "Carte consulaire", image: passportOne, items: ["Copie du passeport", "Adresse au Burundi", "Photo recente", "Formulaire d'inscription"] },
  { id: "visa", title: "Visa et entree en RDC", image: passportTwo, items: ["Passeport valide", "Invitation ou reservation", "Photo d'identite", "Motif du voyage"] },
  { id: "legalisation", title: "Legalisation et certification", image: passportOne, items: ["Document original", "Copie simple", "Piece d'identite", "Preuve de paiement si applicable"] },
  { id: "procuration", title: "Procuration et attestation", image: passportTwo, items: ["Identite du mandant", "Identite du mandataire", "Objet de la procuration", "Signature devant l'agent consulaire"] },
  { id: "etat-civil", title: "Naissance, mariage, deces", image: passportOne, items: ["Acte local", "Pieces d'identite", "Livret ou justificatifs", "Demande de transcription"] },
  { id: "nationalite", title: "Nationalite et etat civil", image: passportTwo, items: ["Preuve de filiation", "Actes originaux", "Copies certifiees", "Contact du demandeur"] },
];

const discover = [
  { title: "Villes", description: "Kinshasa, Lubumbashi, Goma et les grands centres urbains portent l'energie economique et culturelle du pays.", image: "https://ambardcbujumbura.cd/wp-content/uploads/2025/05/kinshasa-1024x683.jpg" },
  { title: "Gastronomie", description: "Des saveurs familiales, des produits locaux et une cuisine conviviale racontent les terroirs congolais.", image: "https://ambardcbujumbura.cd/wp-content/uploads/2025/05/186899.jpg" },
  { title: "Parcs nationaux", description: "Virunga, Garamba, Salonga et d'autres reserves protegent une biodiversite exceptionnelle.", image: "https://ambardcbujumbura.cd/wp-content/uploads/2025/05/71e37602-23e3-4af2-aa46-be67acbc05c1.jpg" },
  { title: "Les lieux culturels", description: "Musees, arts, musique et patrimoine immateriel donnent a voir la profondeur de l'identite congolaise.", image: "https://ambardcbujumbura.cd/wp-content/uploads/2025/05/Musee-National-de-la-Republique-Democratique-du-Congo.jpg" },
  { title: "Sites historiques", description: "Des lieux de memoire et des itineraires historiques pour comprendre les grandes etapes du pays.", image: "https://ambardcbujumbura.cd/wp-content/uploads/2025/05/site_1511_0011-1200-630-20170904150559.jpg" },
  { title: "Sites naturels", description: "Fleuve Congo, volcans, forets et paysages majestueux offrent une destination rare en Afrique centrale.", image: "https://ambardcbujumbura.cd/wp-content/uploads/2025/05/IMG_8234_DxO.jpg" },
];

const requestTypes = documents.map((doc) => ({
  id: doc.id,
  apiId: doc.id === "passeport" ? PASSPORT_TYPE_DEMANDE_ID : null,
  title: doc.title === "Passeport biometrique" ? "Demande de passeport biometrique" : doc.title,
  shortTitle: doc.title,
  description: `Procedure consulaire pour ${doc.title.toLowerCase()} aupres de l'Ambassade de la RDC au Burundi.`,
  estimate: "Traitement initial sous 72h ouvrables apres verification du dossier.",
  fee: "Frais consulaires communiques apres validation du dossier.",
  fields: ["Nom complet", "Lieu et date de naissance", "Adresse au Burundi", "Telephone", "Email", "Motif de la demande"],
  pieces: doc.items,
}));


function getFallbackEmbassyDocuments() {
  return documents.map((document) => ({
    id: document.id,
    code: document.id.toUpperCase().replace(/[^A-Z0-9]+/g, "_"),
    titre: document.title,
    description: document.items.join(", "),
    prix: "0.00",
    devise_id: { code: "$" },
    delais: "1",
    actif: true,
  }));
}

function mapLocalPieces(pieces) {
  return pieces.map((piece, index) => ({
    id: `${index + 1}-${piece}`,
    obligatoire: true,
    ordre_affichage: index + 1,
    commentaire: "",
    type_document_id: {
      code: piece.toUpperCase().replace(/[^A-Z0-9]+/g, "_"),
      nom: piece,
      description: "",
    },
  }));
}


function getDocumentImage(item, index) {
  if (!item.fichier) {
    return index % 2 === 0 ? passportOne : passportTwo;
  }

  try {
    return new URL(item.fichier, API_BASE_URL).href;
  } catch {
    return index % 2 === 0 ? passportOne : passportTwo;
  }
}

function DocumentSkeletonCarousel() {
  return (
    <div className="documents-swiper-wrap" aria-label="Chargement des documents">
      <div className="documents-skeleton-grid">
        {Array.from({ length: 4 }).map((_, index) => (
          <article className="document-card document-skeleton-card" key={index}>
            <div className="skeleton-media" />
            <div className="skeleton-body">
              <div className="skeleton-row short" />
              <div className="skeleton-row title" />
              <div className="skeleton-row" />
              <div className="skeleton-row medium" />
              <div className="skeleton-button" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
function EmbassyDocumentCards({ documents: embassyDocuments, isLoading, isError }) {
  if (isLoading) {
    return <DocumentSkeletonCarousel />;
  }

  if (!embassyDocuments.length) {
    return <article className="document-card document-state-card"><h3>Aucun document disponible</h3><p>Les services consulaires seront affiches des leur publication.</p></article>;
  }

  return (
    <div className="documents-swiper-wrap" aria-label="Documents de l'Ambassade">
      {isError ? <div className="documents-carousel-alert">Documents locaux affiches - service API momentanement indisponible.</div> : null}
      <Swiper
        className="documents-swiper"
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={14}
        slidesPerView={4}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 12 },
          560: { slidesPerView: 2, spaceBetween: 12 },
          820: { slidesPerView: 3, spaceBetween: 12 },
          1180: { slidesPerView: 4, spaceBetween: 14 },
        }}
      >
        {embassyDocuments.map((item, index) => {
          const image = getDocumentImage(item, index);
          const price = Number.parseFloat(item.prix);
          const currency = item.devise_id?.code ?? "";
          const formattedPrice = Number.isFinite(price) ? `${price.toLocaleString("fr-FR")} ${currency}`.trim() : "Frais a confirmer";
          return (
            <SwiperSlide key={item.id ?? item.code}>
              <article className="document-card api-document-card">
                <div className="document-photo" style={{ backgroundImage: `url("${image}")` }} />
                <div className="document-card-body">
                  <div className="document-card-topline">
                    <span className="document-code">{item.code}</span>
                    <span className={item.actif ? "document-status active" : "document-status"}>{item.actif ? "Disponible" : "Indisponible"}</span>
                  </div>
                  <h3>{item.titre}</h3>
                  <p>{item.description}</p>
                  <dl className="document-facts">
                    <div><dt>Frais</dt><dd>{formattedPrice}</dd></div>
                    <div><dt>Delai</dt><dd>{item.delais} jour{String(item.delais) === "1" ? "" : "s"}</dd></div>
                  </dl>
                  <a href={`/demandes?type=${item.id}`}>Demarrer la demande</a>
                </div>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
function AllDocumentsGrid({ documents: embassyDocuments, isLoading, isError }) {
  if (isLoading) {
    return <DocumentSkeletonCarousel />;
  }

  if (!embassyDocuments.length) {
    return <article className="document-card document-state-card"><h3>Aucun document disponible</h3><p>Les services consulaires seront affiches des leur publication.</p></article>;
  }

  return (
    <div className="all-documents-grid" aria-label="Tous les documents de l'Ambassade">
      {isError ? <div className="documents-carousel-alert all-documents-alert">Documents locaux affiches - service API momentanement indisponible.</div> : null}
      {embassyDocuments.map((item, index) => {
        const image = getDocumentImage(item, index);
        const price = Number.parseFloat(item.prix);
        const currency = item.devise_id?.code ?? "";
        const formattedPrice = Number.isFinite(price) ? `${price.toLocaleString("fr-FR")} ${currency}`.trim() : "Frais a confirmer";
        return (
          <article className="document-card api-document-card" key={item.id ?? item.code}>
            <div className="document-photo" style={{ backgroundImage: `url("${image}")` }} />
            <div className="document-card-body">
              <div className="document-card-topline">
                <span className="document-code">{item.code}</span>
                <span className={item.actif ? "document-status active" : "document-status"}>{item.actif ? "Disponible" : "Indisponible"}</span>
              </div>
              <h3>{item.titre}</h3>
              <p>{item.description}</p>
              <dl className="document-facts">
                <div><dt>Frais</dt><dd>{formattedPrice}</dd></div>
                <div><dt>Delai</dt><dd>{item.delais} jour{String(item.delais) === "1" ? "" : "s"}</dd></div>
              </dl>
              <a href={`/demandes?type=${item.id}`}>Demarrer la demande</a>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function RequiredDocumentsList({ documents: requiredDocuments, isLoading, isError }) {
  return (
    <div className="required-list api-required-list">
      <div className="required-heading-row">
        <h3>Pieces requises</h3>
        {isLoading ? <span>Chargement API</span> : null}
        {isError ? <span>Mode local</span> : null}
      </div>
      <ul>
        {requiredDocuments.map((item) => {
          const documentType = item.type_document_id ?? {};
          return (
            <li className="api-required-item" key={item.id ?? documentType.code}>
              <span className="required-order">{item.ordre_affichage}</span>
              <div>
                <strong>{documentType.nom}</strong>
                {documentType.description ? <small>{documentType.description}</small> : null}
                <div className="required-meta">
                  <em>{item.obligatoire ? "Obligatoire" : "Optionnel"}</em>
                  {item.commentaire ? <span>{item.commentaire}</span> : null}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function DocumentUploadList({ documents: requiredDocuments, isLoading }) {
  const [selectedFiles, setSelectedFiles] = React.useState({});

  if (isLoading) {
    return <FormFieldsSkeleton count={4} />;
  }

  return (
    <div className="document-upload-list professional-upload-list">
      {requiredDocuments.map((item) => {
        const documentType = item.type_document_id ?? {};
        const key = item.id ?? documentType.code;
        const files = selectedFiles[key] ?? [];
        const fileLabel = files.length ? files.map((file) => file.name).join(", ") : "PDF, JPG ou PNG";
        return (
          <motion.label className={files.length ? "document-upload-row has-file" : "document-upload-row"} key={key} whileHover={{ y: -2 }} whileTap={{ scale: 0.995 }} transition={{ type: "spring", stiffness: 420, damping: 30 }}>
            <span className="upload-icon"><FileText size={20} strokeWidth={2.2} aria-hidden="true" /></span>
            <div className="upload-copy">
              <span>{documentType.nom}</span>
              <small>{item.commentaire || documentType.description || "Ajoutez une copie lisible du document."}</small>
              <em>{item.obligatoire ? "Obligatoire" : "Optionnel"}</em>
            </div>
            <div className="upload-action">
              <span className="upload-file-name">{fileLabel}</span>
              <strong>{files.length ? <CheckCircle2 size={17} strokeWidth={2.5} aria-hidden="true" /> : <UploadCloud size={17} strokeWidth={2.4} aria-hidden="true" />}{files.length ? "Remplacer" : "Televerser"}</strong>
            </div>
            <input type="file" accept=".pdf,.jpg,.jpeg,.png" multiple onChange={(event) => setSelectedFiles((current) => ({ ...current, [key]: Array.from(event.target.files ?? []) }))} />
          </motion.label>
        );
      })}
    </div>
  );
}

function GrandPublicConstellation() {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return undefined;

    const context = canvas.getContext("2d");
    let frameId = 0;
    let particles = [];
    const pointer = { x: 0, y: 0, active: false };

    const buildParticles = () => {
      const rect = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * pixelRatio));
      canvas.height = Math.max(1, Math.floor(rect.height * pixelRatio));
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      const count = Math.max(12, Math.min(30, Math.floor((rect.width * rect.height) / 34000)));
      particles = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        r: index % 6 === 0 ? 1.6 : 1.1,
      }));
    };

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const styles = window.getComputedStyle(canvas);
      const particleColor = styles.getPropertyValue("--particle-color").trim() || "#0068c9";
      const particleLineColor = styles.getPropertyValue("--particle-line-color").trim() || particleColor;
      const particlePointerColor = styles.getPropertyValue("--particle-pointer-color").trim() || "#f0c400";
      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;
      });

      for (let i = 0; i < particles.length; i += 1) {
        const first = particles[i];
        for (let j = i + 1; j < particles.length; j += 1) {
          const second = particles[j];
          const dx = first.x - second.x;
          const dy = first.y - second.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 90) {
            context.globalAlpha = (1 - distance / 90) * 0.18;
            context.strokeStyle = particleLineColor;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(first.x, first.y);
            context.lineTo(second.x, second.y);
            context.stroke();
          }
        }

        if (pointer.active) {
          const pointerDistance = Math.hypot(first.x - pointer.x, first.y - pointer.y);
          if (pointerDistance < 150) {
            context.globalAlpha = (1 - pointerDistance / 150) * 0.25;
            context.strokeStyle = particlePointerColor;
            context.beginPath();
            context.moveTo(first.x, first.y);
            context.lineTo(pointer.x, pointer.y);
            context.stroke();
          }
        }
      }

      particles.forEach((particle) => {
        context.globalAlpha = 0.5;
        context.fillStyle = particleColor;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        context.fill();
      });

      context.globalAlpha = 1;
      frameId = window.requestAnimationFrame(draw);
    };

    const handlePointerMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    buildParticles();
    draw();
    window.addEventListener("resize", buildParticles);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", buildParticles);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return <canvas className="grand-public-constellation" ref={canvasRef} aria-hidden="true" />;
}

function AmbientSectionEffects() {
  return (
    <>
      <div className="grand-public-blobs" aria-hidden="true"><span className="blob-one" /><span className="blob-two" /><span className="blob-three" /></div>
      <GrandPublicConstellation />
    </>
  );
}
function HomePage() {
  const { data: quickLinks = quickLinksFallback, isLoading, isError } = useQuery({
    queryKey: ["home-quick-links"],
    queryFn: fetchQuickLinks,
  });
  const fallbackEmbassyDocuments = getFallbackEmbassyDocuments();
  const embassyDocumentsQuery = useQuery({
    queryKey: ["home-type-demandes"],
    queryFn: ({ signal }) => fetchTypeDemandes(signal),
    staleTime: 5 * 60 * 1000,
  });
  const embassyDocuments = embassyDocumentsQuery.data?.length ? embassyDocumentsQuery.data : fallbackEmbassyDocuments;

  return (
    <main className="site-shell">
      <section className="topbar">
        <div className="container topbar-inner">
          <div className="contact-line"><span><MapPin size={16} strokeWidth={2.4} aria-hidden="true" />Bujumbura, Burundi</span><span><Mail size={16} strokeWidth={2.4} aria-hidden="true" />contact@ambardcbujumbura.cd</span></div>
          <div className="socials" aria-label="Social media"><span>f</span><span>x</span><span>yt</span><span>ig</span><span>in</span></div>
        </div>
      </section>

      <header className="main-header">
        <div className="container nav-wrap">
          <a className="brand logo-brand" href="/" aria-label="Ambassade RDC au Burundi"><><img className="theme-logo logo-dark-artwork" src={logoAmbassade} alt="Ambassade RDC au Burundi" /><img className="theme-logo logo-light-artwork" src={logoAmbassadeLight} alt="Ambassade RDC au Burundi" /></></a>
          <nav className="desktop-nav" aria-label="Navigation principale">{menu.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}</nav>
          <div className="nav-actions"><a className="online-link" href="/espace-personnel"><span className="bi-kanban" aria-hidden="true" />Espace personnel</a></div>
        </div>
      </header>

      <section className="hero embassy-classic-hero embassy-official-hero ambient-section hero-particle-section" aria-label="Accueil"><AmbientSectionEffects />
        <div className="hero-slide hero-invest">
          <div className="container classic-hero-content embassy-hero-grid">
            <motion.div className="embassy-hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: "easeOut" }}>
              <span className="classic-hero-kicker">Site officiel de l'Ambassade</span>
              <h1>Ambassade de la Republique Democratique du Congo au Burundi</h1>
              <p>Informations officielles, services consulaires, communiques et accompagnement des ressortissants congolais a Bujumbura.</p>
              <div className="classic-hero-actions"><a href="/demandes?type=passeport">Demander un document</a><a href="#actualites">Communiques officiels</a></div>
            </motion.div>
            <motion.aside className="hero-consular-panel" aria-label="Informations consulaires" initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.18, ease: "easeOut" }}>
              <div className="hero-consular-heading">
                <span>Chancellerie</span>
                <h2>Services consulaires</h2>
              </div>
              <div className="hero-consular-list">
                <article className="hero-consular-item">
                  <span className="hero-consular-icon"><Clock size={20} strokeWidth={2.4} aria-hidden="true" /></span>
                  <div><strong>Accueil du public</strong><small>Lundi - Vendredi, 09:00 - 15:30</small></div>
                </article>
                <article className="hero-consular-item">
                  <span className="hero-consular-icon"><CalendarDays size={20} strokeWidth={2.4} aria-hidden="true" /></span>
                  <div><strong>Rendez-vous</strong><small>Depot, verification et suivi des dossiers</small></div>
                </article>
                <article className="hero-consular-item">
                  <span className="hero-consular-icon"><MapPin size={20} strokeWidth={2.4} aria-hidden="true" /></span>
                  <div><strong>Contact</strong><small>Bujumbura, Burundi</small></div>
                </article>
              </div>
              <a className="hero-consular-action" href="#documents"><ClipboardCheck size={18} strokeWidth={2.4} aria-hidden="true" />Voir les procedures<ArrowRight size={16} strokeWidth={2.6} aria-hidden="true" /></a>
            </motion.aside>
          </div>
        </div>
        <div className="hero-ribbon"><span /><span /><span /></div>
      </section>

      <motion.section className="quick-panel container" id="grand-public" initial="hidden" whileInView="show" viewport={revealViewport} variants={staggerReveal}><AmbientSectionEffects />
        <motion.div className="quick-panel-heading" variants={cardReveal}>
          <span className="eyebrow">Acces rapide</span>
          <h2>Informations utiles pour le public</h2>
        </motion.div>
        <div className="quick-grid">
          {isLoading ? <article className="quick-card quick-loading"><span>Chargement</span><h2>Preparation des raccourcis...</h2></article> : null}
          {isError ? <article className="quick-card quick-error"><span>Hors ligne</span><h2>Les raccourcis locaux restent disponibles.</h2></article> : null}
          {quickLinks.map((item) => (
            <motion.article className={`quick-card ${item.className}`} key={item.id ?? item.title} variants={cardReveal} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 320, damping: 28 }}>
              <div className="quick-card-image" style={{ backgroundImage: `url("${item.image}")` }} />
              <div className="quick-card-body">
                <span>{item.label}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <a href={item.href}>{item.action}</a>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section className="public-services-section" aria-label="Services au public" initial="hidden" whileInView="show" viewport={revealViewport} variants={sectionReveal}>
        <div className="container public-services-wrap">
          <motion.div className="public-services-heading" variants={cardReveal}>
            <span className="eyebrow">Chancellerie</span>
            <h2>Services au Public</h2>
          </motion.div>
          <motion.div className="public-services-grid" variants={staggerReveal}>
            {publicServiceCards.map((service) => (
              <motion.a className="public-service-card" href={service.href} key={service.title} variants={cardReveal} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 320, damping: 28 }}>
                <span>{service.title}</span>
                <p>{service.description}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section className="welcome container ambient-section mission-message" id="ambassade" initial="hidden" whileInView="show" viewport={revealViewport} variants={staggerReveal}><AmbientSectionEffects />
        <motion.div className="embassy-photo" style={{ backgroundImage: `linear-gradient(rgba(0, 60, 120, 0.1), rgba(0, 0, 0, 0.2)), url("${presidentImage}")` }} variants={cardReveal} />
        <motion.div className="welcome-copy" variants={cardReveal}><span className="section-mark" /><span className="eyebrow">Message du Chef de Mission</span><h2>Bienvenue sur le portail officiel de l'Ambassade</h2><h3>Representation de la Republique Democratique du Congo aupres de la Republique du Burundi</h3><p>Ce portail rapproche l'administration consulaire des ressortissants congolais, des partenaires institutionnels et du grand public au Burundi.</p><p>Vous y trouverez les informations officielles, les services de chancellerie, les communiques et les orientations utiles pour preparer vos demarches.</p><p>L'Ambassade demeure mobilisee pour proteger les interets de la Republique Democratique du Congo, accompagner sa diaspora et renforcer la cooperation avec le Burundi.</p><a className="read-more" href="#documents">Consulter les services</a></motion.div>
      </motion.section>

      <motion.section className="leaders ambient-section" initial="hidden" whileInView="show" viewport={revealViewport} variants={staggerReveal}><AmbientSectionEffects /><div className="container leader-grid">{leaders.map((leader) => <motion.article className="leader" key={leader.name} variants={cardReveal} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 320, damping: 30 }}><div className="leader-photo" style={{ backgroundImage: `url("${leader.image}")` }} /><h3>{leader.name}</h3><p>{leader.role}</p></motion.article>)}</div></motion.section>

      <motion.section className="documents-section ambient-section" id="documents" initial="hidden" whileInView="show" viewport={revealViewport} variants={sectionReveal}><AmbientSectionEffects /><div className="container"><a className="section-title documents-title-link" href="/documents"><span className="eyebrow">Grand public</span><h2>Documents de l'Ambassade</h2><p>Retrouvez les principales categories de documents et pieces a preparer avant votre rendez-vous consulaire a Bujumbura.</p></a><div className="documents-grid"><EmbassyDocumentCards documents={embassyDocuments} isLoading={embassyDocumentsQuery.isLoading} isError={embassyDocumentsQuery.isError} /></div></div></motion.section>

      <motion.section className="news-section ambient-section" id="actualites" initial="hidden" whileInView="show" viewport={revealViewport} variants={sectionReveal}><AmbientSectionEffects /><div className="container"><div className="news-heading-row"><div className="section-title left-title"><span className="eyebrow">Informations officielles</span><h2>Actualites</h2><p>Suivez les dernieres informations de l'Ambassade a Bujumbura.</p></div><a className="news-all-link" href="/demandes?type=passeport#rendez-vous">Prendre rendez-vous</a></div><div className="news-modern-layout"><motion.article className="news-feature-card" variants={cardReveal}><div className="news-feature-photo" style={{ backgroundImage: `url("${presidentTwo}")` }} /><div className="news-feature-copy"><span className="news-label">A la une</span><h3>Accueil consulaire et rendez-vous a Bujumbura</h3><p>Les services consulaires accompagnent les ressortissants dans la preparation des dossiers, la verification des pieces et la planification des rendez-vous.</p><ul><li>Verification des pieces avant depot</li><li>Rendez-vous obligatoire pour les captures et signatures</li><li>Suivi depuis l'espace personnel</li></ul></div></motion.article><motion.div className="news-modern-list" variants={staggerReveal}>{news.map((item) => <motion.article className="news-card" key={item.title} variants={cardReveal}><div className="news-thumb" style={{ backgroundImage: `url("${item.image}")` }} /><div className="date-box"><strong>{item.day}</strong><span>{item.month}</span></div><div><h3>{item.title}</h3><p>Ambassade RDC au Burundi - Bujumbura</p><a href="#actualites">Lire l'actualite</a></div></motion.article>)}</motion.div></div></div></motion.section>

      <motion.section className="communiques ambient-section" initial="hidden" whileInView="show" viewport={revealViewport} variants={sectionReveal}><AmbientSectionEffects />
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Informations officielles</span>
            <h2>Communiques</h2>
            <p>Avis, annonces et informations publies par l'Ambassade.</p>
          </div>
          <div className="communique-featured">
            <motion.article className="communique-hero-card" variants={cardReveal} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 28 }}>
              <div className="communique-hero-image" />
              <div className="communique-hero-body">
                <span className="communique-date-badge">{communiques[0].date}</span>
                <span className="communique-category">{communiques[0].category}</span>
                <h3>{communiques[0].title}</h3>
                <p>{communiques[0].excerpt}</p>
                <a href="#actualites">Lire le communique</a>
              </div>
            </motion.article>
            <motion.div className="communique-stack" variants={staggerReveal}>
              {communiques.slice(1).map((item) => (
                <motion.article className="communique-card" key={item.title} variants={cardReveal} whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 320, damping: 30 }}>
                  <div className="communique-card-indicator" />
                  <div className="communique-card-body">
                    <div className="communique-card-meta">
                      <span className="communique-card-date">{item.date}</span>
                      <span className="communique-card-cat">{item.category}</span>
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.excerpt}</p>
                    <span className="communique-link">Lire la suite</span>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
          <div className="communiques-cta">
            <a href="#actualites">Voir tous les communiques</a>
          </div>
        </div>
      </motion.section>

      <motion.section className="discover-section ambient-section" id="rdc" initial="hidden" whileInView="show" viewport={revealViewport} variants={sectionReveal}><AmbientSectionEffects /><div className="container discover-layout"><motion.div className="discover-intro" variants={cardReveal}><span className="eyebrow">Republique democratique du Congo</span><h2>Venez decouvrir notre merveilleux pays</h2><p>La RDC est un pays continent au coeur de l'Afrique, marque par la force du fleuve Congo, la richesse de ses cultures, la diversite de ses provinces et l'energie de sa population.</p><p>Cette rubrique met en avant les lieux, les opportunites et les reperes utiles pour mieux connaitre le pays avant un voyage, une cooperation ou un projet d'investissement.</p><div className="discover-media-row"><img src="https://ambardcbujumbura.cd/wp-content/uploads/2025/05/kinshasa-1024x683.jpg" alt="Ville de Kinshasa" /><img src="https://ambardcbujumbura.cd/wp-content/uploads/2025/05/IMG_8234_DxO.jpg" alt="Paysage naturel de la RDC" /><img src="https://ambardcbujumbura.cd/wp-content/uploads/2025/05/Musee-National-de-la-Republique-Democratique-du-Congo.jpg" alt="Patrimoine culturel congolais" /></div><div className="discover-stats"><span><strong>26</strong> Provinces</span><span><strong>9</strong> Pays voisins</span><span><strong>80M+</strong> Hectares de terres arables</span></div></motion.div><motion.article className="discover-feature" variants={cardReveal}><div className="discover-feature-photo" style={{ backgroundImage: `url("${discover[0].image}")` }} /><div className="discover-feature-copy"><span>Destination RDC</span><h3>Un pays continent au coeur de l'Afrique</h3><p>Entre le fleuve Congo, les parcs nationaux, la creation musicale, les villes et les sites naturels, la RDC offre un champ immense de decouverte.</p></div></motion.article><motion.div className="discover-grid" variants={staggerReveal}>{discover.map((item) => <motion.article className="discover-card" key={item.title} variants={cardReveal} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 320, damping: 30 }}><div className="discover-photo" style={{ backgroundImage: `url("${item.image}")` }} /><div className="discover-card-copy"><h3>{item.title}</h3><p>{item.description}</p></div></motion.article>)}</motion.div><div className="discover-topics"><span>Tourisme</span><span>Culture</span><span>Investissement</span><span>Cooperation</span><span>Diaspora</span></div><a className="discover-button" href="#documents">Preparer mon voyage</a></div></motion.section>

      <SiteFooter />
    </main>
  );
}
const requerantFieldGroups = [
  {
    title: "Identite du requerant",
    fields: [
      { name: "nom", label: "Nom", placeholder: "Ex. KABONGO", required: true },
      { name: "post_nom", label: "Post-nom", placeholder: "Ex. MUKENDI", required: true },
      { name: "prenom", label: "Prenom", placeholder: "Ex. Jean", required: true },
      { name: "sexe", label: "Sexe", type: "select", required: true, options: [{ label: "Masculin", value: "M" }, { label: "Feminin", value: "F" }] },
      { name: "lieu_naissance", label: "Lieu de naissance", placeholder: "Ex. Kinshasa", required: true },
      { name: "date_naissance", label: "Date de naissance", type: "date", required: true },
    ],
  },
  {
    title: "Coordonnees et situation",
    fields: [
      { name: "profession", label: "Profession", placeholder: "Ex. Enseignant" },
      { name: "etat_civil", label: "Etat civil", type: "select", options: [{ label: "Celibataire", value: "celibataire" }, { label: "Marie(e)", value: "marie" }, { label: "Divorce(e)", value: "divorce" }, { label: "Veuf/Veuve", value: "veuf" }] },
      { name: "telephone", label: "Telephone", type: "tel", placeholder: "+257 ..." },
      { name: "email", label: "Email", type: "email", placeholder: "nom@example.com" },
      { name: "adresse_residence", label: "Adresse de residence", placeholder: "Quartier, avenue, numero", wide: true },
      { name: "code_postal", label: "Code postal", placeholder: "Ex. 0000" },
      { name: "adresse_rdc", label: "Adresse en RDC", placeholder: "Province, commune, quartier", wide: true },
    ],
  },
  {
    title: "Conjoint",
    fields: [
      { name: "nom_conjoint", label: "Nom du conjoint", placeholder: "Nom du conjoint" },
      { name: "post_nom_conjoint", label: "Post-nom du conjoint", placeholder: "Post-nom du conjoint" },
      { name: "prenom_conjoint", label: "Prenom du conjoint", placeholder: "Prenom du conjoint" },
      { name: "nationalite_conjoint", label: "Nationalite du conjoint", placeholder: "Ex. Congolaise" },
    ],
  },
  {
    title: "Parents et nationalites",
    fields: [
      { name: "nom_pere", label: "Nom du pere", placeholder: "Nom du pere" },
      { name: "post_nom_pere", label: "Post-nom du pere", placeholder: "Post-nom du pere" },
      { name: "prenom_pere", label: "Prenom du pere", placeholder: "Prenom du pere" },
      { name: "nationalite_pere", label: "Nationalite du pere", placeholder: "Ex. Congolaise" },
      { name: "nom_mere", label: "Nom de la mere", placeholder: "Nom de la mere" },
      { name: "post_nom_mere", label: "Post-nom de la mere", placeholder: "Post-nom de la mere" },
      { name: "prenom_mere", label: "Prenom de la mere", placeholder: "Prenom de la mere" },
      { name: "nationalite_mere", label: "Nationalite de la mere", placeholder: "Ex. Congolaise" },
      { name: "nationalite_d_origine", label: "Nationalite d'origine", placeholder: "Ex. Congolaise" },
      { name: "nationalite_actuelle", label: "Nationalite actuelle", placeholder: "Ex. Congolaise" },
    ],
  },
];

const parseDynamicOptions = (optionsJson) => {
  if (!optionsJson) return [];
  try {
    const parsed = JSON.parse(optionsJson);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

function FormFieldsSkeleton({ count = 6 }) {
  return (
    <div className="form-skeleton-grid" aria-label="Chargement du formulaire">
      {Array.from({ length: count }).map((_, index) => (
        <div className="form-skeleton-field" key={index}>
          <span />
          <strong />
        </div>
      ))}
    </div>
  );
}
function CommonRequerantFields({ values, onChange }) {
  return (
    <div className="requerant-groups-grid">
      {requerantFieldGroups.map((group) => (
        <div className="form-block requerant-field-group" key={group.title}>
          <h3>{group.title}</h3>
          <div className="form-grid refined-form-grid requerant-grid">
            {group.fields.map((field) => (
              <label className={field.wide ? "full-field" : ""} key={field.name}>
                {field.label}{field.required ? <span className="required-star"> *</span> : null}
                {field.type === "select" ? (
                  <select value={values[field.name] ?? ""} onChange={(event) => onChange(field.name, event.target.value)} required={field.required}>
                    <option value="">Selectionner</option>
                    {field.options.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
                  </select>
                ) : (
                  <input type={field.type ?? "text"} placeholder={field.placeholder || field.label} value={values[field.name] ?? ""} onChange={(event) => onChange(field.name, event.target.value)} required={field.required} />
                )}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function DynamicDemandeFields({ champs, values, onChange }) {
  const [loadedOptions, setLoadedOptions] = React.useState({});
  const activeChamps = React.useMemo(() => [...champs].filter((champ) => champ.actif).sort((a, b) => a.ordre - b.ordre), [champs]);
  const parentValuesSerialized = JSON.stringify(activeChamps.filter((champ) => champ.parent_champ_id).map((champ) => values[champ.parent_champ_id]));

  React.useEffect(() => {
    let ignore = false;

    async function loadOptions() {
      const nextOptions = {};
      for (const champ of activeChamps) {
        if (!["select", "radio", "multi_select"].includes(champ.type_champ)) continue;
        const key = champ.id || champ.code;
        if (champ.data_source === "API" && champ.api_endpoint) {
          try {
            const data = await apiFetch(champ.api_endpoint);
            const list = Array.isArray(data) ? data : Array.isArray(data?.results) ? data.results : [];
            nextOptions[key] = list.map((item) => ({
              value: String(item[champ.source_value || "id"] ?? item.id ?? item.code ?? ""),
              label: String(item[champ.source_label || "nom"] ?? item.nom ?? item.libelle ?? item.titre ?? item.name ?? ""),
            })).filter((option) => option.value && option.label);
          } catch {
            nextOptions[key] = parseDynamicOptions(champ.options_json);
          }
        } else {
          nextOptions[key] = parseDynamicOptions(champ.options_json);
        }
      }
      if (!ignore) setLoadedOptions(nextOptions);
    }

    loadOptions();
    return () => { ignore = true; };
  }, [activeChamps, parentValuesSerialized]);

  if (!activeChamps.length) {
    return <div className="dynamic-empty">Aucun champ specifique requis pour ce type de demande.</div>;
  }

  return (
    <div className="dynamic-fields-grid">
      {activeChamps.map((champ) => {
        const key = champ.id || champ.code;
        const value = values[champ.code] ?? champ.valeur_defaut ?? (champ.multiple ? [] : "");
        const options = loadedOptions[key] || parseDynamicOptions(champ.options_json);
        const colSpan = champ.largeur ? Math.min(12, Math.max(1, champ.largeur)) : 4;
        const commonProps = {
          required: champ.obligatoire,
          disabled: champ.lecture_seule,
        };

        return (
          <label className="dynamic-field" style={{ gridColumn: `span ${colSpan}` }} key={key}>
            <span>{champ.libelle}{champ.obligatoire ? <em> *</em> : null}</span>
            {champ.type_champ === "textarea" ? (
              <textarea placeholder={champ.placeholder || ""} value={value} onChange={(event) => onChange(champ.code, event.target.value)} {...commonProps} />
            ) : champ.type_champ === "select" ? (
              <select value={value} onChange={(event) => onChange(champ.code, event.target.value)} {...commonProps}>
                <option value="">{champ.placeholder || "Selectionner"}</option>
                {options.map((option) => {
                  const optionValue = typeof option === "string" ? option : option.value;
                  const optionLabel = typeof option === "string" ? option : option.label || option.value;
                  return <option value={optionValue} key={optionValue}>{optionLabel}</option>;
                })}
              </select>
            ) : champ.type_champ === "checkbox" || champ.type_champ === "switch" ? (
              <span className="dynamic-checkline"><input type="checkbox" checked={Boolean(value)} onChange={(event) => onChange(champ.code, event.target.checked)} disabled={champ.lecture_seule} /> Oui</span>
            ) : champ.type_champ === "radio" ? (
              <div className="dynamic-radio-group">
                {options.map((option) => {
                  const optionValue = typeof option === "string" ? option : option.value;
                  const optionLabel = typeof option === "string" ? option : option.label || option.value;
                  return <label key={optionValue}><input type="radio" name={champ.code} value={optionValue} checked={value === optionValue} onChange={() => onChange(champ.code, optionValue)} disabled={champ.lecture_seule} /> {optionLabel}</label>;
                })}
              </div>
            ) : champ.type_champ === "file" || champ.type_champ === "image" ? (
              <input type="file" accept={champ.type_champ === "image" ? "image/*" : undefined} onChange={(event) => onChange(champ.code, event.target.files?.[0]?.name ?? "")} disabled={champ.lecture_seule} />
            ) : (
              <input type={champ.type_champ === "number" ? "number" : champ.type_champ === "date" ? "date" : champ.type_champ === "datetime" ? "datetime-local" : champ.type_champ === "email" ? "email" : champ.type_champ === "phone" ? "tel" : "text"} placeholder={champ.placeholder || ""} value={value} onChange={(event) => onChange(champ.code, event.target.value)} {...commonProps} />
            )}
            {champ.description ? <small>{champ.description}</small> : null}
          </label>
        );
      })}
    </div>
  );
}
function DocumentsPage() {
  const fallbackEmbassyDocuments = getFallbackEmbassyDocuments();
  const embassyDocumentsQuery = useQuery({
    queryKey: ["documents-page-type-demandes"],
    queryFn: ({ signal }) => fetchTypeDemandes(signal),
    staleTime: 5 * 60 * 1000,
  });
  const embassyDocuments = embassyDocumentsQuery.data?.length ? embassyDocumentsQuery.data : fallbackEmbassyDocuments;

  return (
    <main className="site-shell documents-page-shell"><SiteHeader />
      <section className="documents-page-hero ambient-section"><AmbientSectionEffects />
        <div className="container documents-page-hero-grid">
          <div>
            <span className="eyebrow">Services consulaires</span>
            <h1>Tous les documents de l'Ambassade</h1>
            <p>Consultez toutes les categories disponibles et demarrez directement la demande consulaire correspondant a votre dossier.</p>
          </div>
          <div className="documents-page-summary" aria-label="Resume des documents">
            <strong>{embassyDocuments.length}</strong>
            <span>document{embassyDocuments.length > 1 ? "s" : ""} disponible{embassyDocuments.length > 1 ? "s" : ""}</span>
          </div>
        </div>
      </section>
      <section className="documents-page-content ambient-section"><AmbientSectionEffects />
        <div className="container">
          <div className="section-title left-title">
            <span className="eyebrow">Catalogue consulaire</span>
            <h2>Choisir un document</h2>
            <p>Chaque fiche indique les frais, le delai indicatif et le lien pour commencer la procedure.</p>
          </div>
          <AllDocumentsGrid documents={embassyDocuments} isLoading={embassyDocumentsQuery.isLoading} isError={embassyDocumentsQuery.isError} />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function RequestsPage() {
  const params = new URLSearchParams(window.location.search);
  const selectedType = params.get("type") ?? PASSPORT_TYPE_DEMANDE_ID;
  const fallbackRequest = requestTypes.find((item) => item.id === selectedType) ?? requestTypes[0];
  const [requerantValues, setRequerantValues] = React.useState({});
  const [dynamicValues, setDynamicValues] = React.useState({});

  const typeDemandesQuery = useQuery({
    queryKey: ["request-type-demandes"],
    queryFn: ({ signal }) => fetchTypeDemandes(signal),
    staleTime: 5 * 60 * 1000,
  });

  const apiRequest = typeDemandesQuery.data?.find((item) => item.id === selectedType || item.code === selectedType);
  const selectedTypeId = apiRequest?.id ?? fallbackRequest.apiId ?? selectedType;
  const requestTitle = apiRequest?.titre ?? fallbackRequest.title;
  const requestDescription = apiRequest?.description ?? fallbackRequest.description;
  const rawDelay = String(apiRequest?.delais ?? "").trim();
  const parsedDelay = Number.parseFloat(rawDelay);
  const requestDelay = apiRequest?.delais
    ? Number.isFinite(parsedDelay)
      ? `${parsedDelay.toLocaleString("fr-FR")} jour${parsedDelay > 1 ? "s" : ""}`
      : rawDelay
    : fallbackRequest.estimate;
  const requestFee = apiRequest?.prix ? `${Number.parseFloat(apiRequest.prix).toLocaleString("fr-FR")} ${apiRequest.devise_id?.code ?? ""}`.trim() : fallbackRequest.fee;

  const fallbackRequiredDocuments = mapLocalPieces(fallbackRequest.pieces);
  const documentsQuery = useQuery({
    queryKey: ["type-demande-documents", selectedTypeId],
    queryFn: ({ signal }) => fetchTypeDemandeDocuments(selectedTypeId, signal),
    enabled: Boolean(selectedTypeId),
    staleTime: 5 * 60 * 1000,
  });
  const champsQuery = useQuery({
    queryKey: ["type-demande-champs", selectedTypeId],
    queryFn: ({ signal }) => fetchTypeDemandeChamps(selectedTypeId, signal),
    enabled: Boolean(selectedTypeId),
    staleTime: 5 * 60 * 1000,
  });
  const requiredDocuments = documentsQuery.data?.length ? documentsQuery.data : fallbackRequiredDocuments;
  const dynamicChamps = champsQuery.data ?? [];

  const updateRequerant = (name, value) => setRequerantValues((current) => ({ ...current, [name]: value }));
  const updateDynamic = (name, value) => setDynamicValues((current) => ({ ...current, [name]: value }));

  return (
    <main className="requests-shell single-request-shell"><SiteHeader />
      <motion.section className="requests-hero single-request-hero clean-request-hero ambient-section request-ambient-hero" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: "easeOut" }}><AmbientSectionEffects /><div className="request-motion-web" aria-hidden="true" /><div className="container single-request-hero-grid"><div><span className="eyebrow">Service consulaire</span><h1>{requestTitle}</h1><p>{requestDescription}</p></div></div></motion.section>
      <section className="container request-info-card" aria-label="Informations pratiques">
        <div className="request-info-header">
          <strong>Chancellerie</strong>
          <span>Ambassade de la Republique Democratique du Congo au Burundi</span>
        </div>
        <div className="request-info-grid">
          <div className="request-info-item">
            <span className="request-info-label">Services consulaires</span>
            <p>Passeports, legalisations, attestations, visas et actes d'etat civil.</p>
          </div>
          <div className="request-info-item">
            <span className="request-info-label">Accueil du public</span>
            <p>Lundi - Vendredi, 09:00 - 15:30</p>
          </div>
          <div className="request-info-item">
            <span className="request-info-label">Rendez-vous</span>
            <p>Depot, verification et suivi des dossiers.</p>
          </div>
          <div className="request-info-item">
            <span className="request-info-label">Contact</span>
            <p>Bujumbura, Burundi</p>
          </div>
        </div>
      </section><section className="container single-request-panel modern-request-panel clean-request-panel ambient-section request-ambient-panel" id="rendez-vous"><AmbientSectionEffects />
        <article className="request-workspace">
          <motion.form className="consular-form passport-form-card" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.42, delay: 0.08, ease: "easeOut" }}>
            <div className="form-section-heading form-heading-row"><div><span>Etape 1</span><h2>Informations du demandeur</h2></div><p>Remplissez les donnees communes du requerant, puis les champs specifiques a cette demande.</p></div>
            <CommonRequerantFields values={requerantValues} onChange={updateRequerant} />
            <div className="form-block"><h3>Informations specifiques a la demande</h3>{champsQuery.isLoading || typeDemandesQuery.isLoading ? <FormFieldsSkeleton count={6} /> : <DynamicDemandeFields champs={dynamicChamps} values={dynamicValues} onChange={updateDynamic} />}</div>
            <div className="form-block upload-section"><div className="form-block-title"><div><h3>Pieces jointes</h3><p>Ajoutez chaque fichier au bon emplacement pour faciliter la verification du dossier.</p></div><span>{requiredDocuments.length} piece{requiredDocuments.length > 1 ? "s" : ""}</span></div><DocumentUploadList documents={requiredDocuments} isLoading={documentsQuery.isLoading} /></div>
            <div className="form-block"><label className="full-field">Observations pour l'agent consulaire<textarea placeholder="Ajoutez une precision utile : urgence, perte, changement d'adresse, correction a signaler..." /></label></div>
            <div className="form-confirmation"><label><input type="checkbox" /><span>Je certifie que les informations fournies sont exactes et que les pieces jointes sont lisibles.</span></label></div>
            <div className="form-actions refined-actions"><button type="button">Enregistrer le brouillon</button><button type="button" className="primary-action">Continuer vers les pieces</button></div>
          </motion.form>
        </article>
      </section>
      <SiteFooter />
    </main>
  );
}

function PersonalSpacePage() {
  const stats = [{ label: "Dossiers ouverts", value: "3" }, { label: "Rendez-vous", value: "1" }, { label: "Documents valides", value: "6" }, { label: "Notifications", value: "4" }];
  const requests = [{ type: "Carte consulaire", status: "Pieces a verifier", date: "22 juillet 2026" }, { type: "Passeport biometrie", status: "Rendez-vous confirme", date: "25 juillet 2026" }, { type: "Legalisation", status: "Pret pour retrait", date: "29 juillet 2026" }];
  const personalDocuments = ["Passeport", "Carte consulaire", "Acte de naissance", "Procuration", "Attestation de residence", "Certificat de nationalite"];

  return <main className="dashboard-shell"><aside className="dashboard-sidebar"><a className="dashboard-logo" href="/" aria-label="Ambassade RDC au Burundi"><><img className="theme-logo logo-dark-artwork" src={logoAmbassade} alt="Ambassade RDC au Burundi" /><img className="theme-logo logo-light-artwork" src={logoAmbassadeLight} alt="Ambassade RDC au Burundi" /></></a><nav className="dashboard-nav"><a className="active" href="#">Tableau de bord</a><a href="#dossiers">Mes dossiers</a><a href="#documents">Mes documents</a><a href="#rendez-vous">Rendez-vous</a><a href="#profil">Profil</a></nav><a className="logout-link" href="/login">Deconnexion</a></aside><section className="dashboard-main"><header className="dashboard-header"><div><span className="eyebrow">Bujumbura</span><h1>Espace personnel</h1><p>Bienvenue dans votre portail consulaire de l'Ambassade de la RDC au Burundi.</p></div><ThemeToggle /></header><div className="stats-grid">{stats.map((stat) => <article className="stat-card" key={stat.label}><span>{stat.label}</span><strong>{stat.value}</strong></article>)}</div><section className="dashboard-grid" id="dossiers"><article className="dashboard-card large-card"><div className="card-heading"><h2>Mes demandes recentes</h2><a href="/demandes">Nouvelle demande</a></div><div className="request-list">{requests.map((request) => <div className="request-row" key={request.type}><div><strong>{request.type}</strong><span>{request.date}</span></div><em>{request.status}</em></div>)}</div></article><article className="dashboard-card" id="rendez-vous"><h2>Prochain rendez-vous</h2><div className="appointment-mini"><strong>25 juillet 2026</strong><span>09:00 - Ambassade RDC, Bujumbura</span><p>Capture biometrie et verification des originaux.</p></div></article></section><section className="dashboard-card" id="documents"><div className="card-heading"><h2>Documents disponibles dans mon espace</h2><a href="/">Voir guide grand public</a></div><div className="personal-documents">{personalDocuments.map((document) => <span key={document}>{document}</span>)}</div></section></section></main>;
}

function LoginPage() {
  const loginServices = ["Suivre une demande consulaire", "Prendre un rendez-vous a Bujumbura", "Televerser les documents requis", "Recevoir les notifications de l'Ambassade"];
  return <main className="auth-shell"><section className="auth-panel auth-visual"><a className="brand auth-brand" href="/"><span className="seal">RDC</span><span><strong>Ambassade</strong><small>RDC au Burundi</small></span></a><div><span className="hero-kicker">Espace personnel</span><h1>Connectez-vous pour gerer vos demarches consulaires.</h1><p>Un acces unique pour preparer vos dossiers, reserver un rendez-vous et suivre vos documents aupres de l'Ambassade a Bujumbura.</p></div><ul className="auth-service-list">{loginServices.map((service) => <li key={service}>{service}</li>)}</ul></section><section className="auth-panel auth-form-panel"><div className="auth-topline"><a href="/">Retour accueil</a><ThemeToggle /></div><form className="login-form"><div className="form-heading"><span className="eyebrow">Connexion</span><h2>Acceder a mon compte</h2><p>Entrez vos identifiants pour continuer vers votre espace personnel.</p></div><label>Adresse email<input type="email" placeholder="nom@example.com" /></label><label>Mot de passe<input type="password" placeholder="Votre mot de passe" /></label><div className="form-row"><label className="check-line"><input type="checkbox" />Se souvenir de moi</label><a href="#">Mot de passe oublie ?</a></div><a className="submit-button" href="/espace-personnel">Se connecter</a><p className="form-note">Nouveau demandeur ? <a href="/espace-personnel">Creer un dossier provisoire</a></p></form></section></main>;
}

export default function App() {
  const path = window.location.pathname;
  if (path.startsWith("/documents")) return <DocumentsPage />;
  if (path.startsWith("/demandes")) return <RequestsPage />;
  if (path.startsWith("/espace-personnel")) return <PersonalSpacePage />;
  if (path.startsWith("/login")) return <LoginPage />;
  return <HomePage />;
}





























