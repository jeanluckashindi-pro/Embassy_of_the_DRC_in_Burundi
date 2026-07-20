import Link from "next/link";

const requestTypes = [
  {
    id: "passeport",
    title: "Demande de passeport biometrique",
    shortTitle: "Passeport biometrique",
    description: "Renouvellement ou premiere demande avec capture des donnees biometriques.",
    estimate: "Traitement initial sous 72h ouvrables apres verification du dossier.",
    fee: "Frais consulaires communiques apres validation du dossier.",
    fields: ["Nom complet", "Lieu et date de naissance", "Numero ancien passeport", "Adresse au Burundi", "Telephone", "Email"],
    pieces: ["Ancien passeport ou declaration de perte", "Preuve de nationalite", "Photo recente", "Justificatif de residence"],
  },
  {
    id: "laissez-passer",
    title: "Laissez-passer consulaire",
    shortTitle: "Laissez-passer",
    description: "Document de voyage temporaire pour retour ou urgence justifiee.",
    estimate: "Traitement prioritaire selon le motif et les justificatifs fournis.",
    fee: "Frais consulaires communiques au guichet.",
    fields: ["Nom complet", "Motif du voyage", "Destination", "Date prevue", "Contact d urgence", "Email"],
    pieces: ["Piece d identite", "Declaration de perte si applicable", "Billet ou preuve de voyage", "Photo d identite"],
  },
  {
    id: "carte-consulaire",
    title: "Carte consulaire",
    shortTitle: "Carte consulaire",
    description: "Inscription consulaire pour les Congolais residant au Burundi.",
    estimate: "Verification du dossier avant emission de la carte.",
    fee: "Frais consulaires communiques apres reception.",
    fields: ["Nom complet", "Commune de residence", "Profession", "Telephone", "Personne a contacter", "Email"],
    pieces: ["Passeport ou piece d identite", "Photo recente", "Adresse au Burundi", "Formulaire d inscription"],
  },
  {
    id: "visa",
    title: "Visa et entree en RDC",
    shortTitle: "Visa RDC",
    description: "Demande de visa pour voyage, mission, affaires ou sejour familial en RDC.",
    estimate: "Delai variable selon le type de visa demande.",
    fee: "Frais consulaires selon categorie du visa.",
    fields: ["Nom complet", "Nationalite", "Numero passeport", "Motif du voyage", "Duree du sejour", "Adresse en RDC"],
    pieces: ["Passeport valide", "Photo d identite", "Invitation ou reservation", "Justificatif du motif"],
  },
  {
    id: "legalisation",
    title: "Legalisation et certification",
    shortTitle: "Legalisation",
    description: "Authentification, certification conforme et legalisation de documents.",
    estimate: "Verification selon la nature et l origine du document.",
    fee: "Frais selon nombre de documents et copies.",
    fields: ["Nom du demandeur", "Type de document", "Autorite emettrice", "Usage prevu", "Nombre de copies", "Telephone"],
    pieces: ["Document original", "Copie simple", "Piece d identite", "Preuve de paiement si applicable"],
  },
  {
    id: "procuration",
    title: "Procuration et attestation",
    shortTitle: "Procuration",
    description: "Etablissement d une procuration, attestation ou declaration consulaire.",
    estimate: "Controle consulaire avant signature ou retrait.",
    fee: "Frais consulaires communiques apres validation.",
    fields: ["Nom du mandant", "Nom du mandataire", "Objet de la procuration", "Pays d utilisation", "Telephone", "Email"],
    pieces: ["Piece d identite du mandant", "Piece d identite du mandataire", "Projet de procuration", "Justificatif du motif"],
  },
  {
    id: "etat-civil",
    title: "Naissance, mariage, deces",
    shortTitle: "Etat civil",
    description: "Declaration, transcription ou demande liee aux actes d etat civil.",
    estimate: "Etude du dossier selon l acte demande.",
    fee: "Frais consulaires selon la prestation.",
    fields: ["Type d acte", "Nom de la personne concernee", "Date de l evenement", "Lieu", "Lien avec le demandeur", "Telephone"],
    pieces: ["Acte local", "Pieces d identite", "Justificatifs de filiation", "Copies certifiees"],
  },
  {
    id: "nationalite",
    title: "Nationalite et etat civil",
    shortTitle: "Nationalite",
    description: "Demande relative a la nationalite, filiation ou verification d etat civil.",
    estimate: "Analyse apres depot des actes et justificatifs.",
    fee: "Frais communiques apres verification.",
    fields: ["Nom complet", "Lieu de naissance", "Nom du pere", "Nom de la mere", "Adresse actuelle", "Telephone"],
    pieces: ["Preuve de filiation", "Actes originaux", "Copies certifiees", "Contact du demandeur"],
  },
];

const steps = [
  { title: "Identite", text: "Vos informations civiles", state: "active" },
  { title: "Document", text: "Details de la demande", state: "next" },
  { title: "Pieces", text: "Justificatifs a joindre", state: "next" },
  { title: "Rendez-vous", text: "Choix du passage", state: "next" },
  { title: "Controle", text: "Verification finale", state: "next" },
  { title: "Depot", text: "Soumission du dossier", state: "next" },
];

type FormInput = { label: string; placeholder?: string; type?: string };

const passportInputs: FormInput[] = [
  { label: "Nom complet", placeholder: "Ex. Jean Kabongo" },
  { label: "Date de naissance", type: "date" },
  { label: "Lieu de naissance", placeholder: "Ville et pays" },
  { label: "Nationalite", placeholder: "Congolaise" },
  { label: "Numero ancien passeport", placeholder: "Si renouvellement" },
  { label: "Adresse actuelle au Burundi", placeholder: "Quartier, commune, avenue" },
  { label: "Telephone", type: "tel", placeholder: "+257 ..." },
  { label: "Email", type: "email", placeholder: "nom@email.com" },
];

type RequestsPageProps = {
  searchParams: Promise<{ type?: string }>;
};

export default async function RequestsPage({ searchParams }: RequestsPageProps) {
  const params = await searchParams;
  const selectedType = params.type ?? "passeport";
  const request = requestTypes.find((item) => item.id === selectedType) ?? requestTypes[0];
  const inputs: FormInput[] = request.id === "passeport"
    ? passportInputs
    : request.fields.map((field) => ({ label: field, placeholder: field }));

  return (
    <main className="requests-shell single-request-shell">
      <header className="requests-header">
        <div className="container requests-header-inner">
          <Link href="/" className="back-link">Retour accueil</Link>
          <span className="request-reference">Bujumbura - {request.shortTitle}</span>
        </div>
      </header>

      <section className="requests-hero single-request-hero">
        <div className="container single-request-hero-grid">
          <div>
            <span className="eyebrow">Service consulaire</span>
            <h1>{request.title}</h1>
            <p>{request.description}</p>
          </div>
          <div className="request-status-card" aria-label="Resume du dossier">
            <span>Dossier en ligne</span>
            <strong>Etape 1 sur 6</strong>
            <p>{request.estimate}</p>
          </div>
        </div>
      </section>

      <section className="container single-request-panel" id="rendez-vous">
        <ol className="request-stepper polished-stepper" aria-label="Etapes de la demande">
          {steps.map((step, index) => (
            <li className={step.state === "active" ? "active" : ""} key={step.title}>
              <strong>{index + 1}</strong>
              <div>
                <span>{step.title}</span>
                <small>{step.text}</small>
              </div>
            </li>
          ))}
        </ol>

        <article className="request-workspace">
          <aside className="request-form-summary request-side-panel">
            <span className="eyebrow">A preparer</span>
            <h2>{request.shortTitle}</h2>
            <p>{request.description}</p>

            <div className="request-info-list">
              <div>
                <span>Delai indicatif</span>
                <strong>{request.estimate}</strong>
              </div>
              <div>
                <span>Frais</span>
                <strong>{request.fee}</strong>
              </div>
            </div>

            <div className="required-list">
              <h3>Pieces requises</h3>
              <ul>
                {request.pieces.map((piece) => (
                  <li key={piece}>{piece}</li>
                ))}
              </ul>
            </div>
          </aside>

          <form className="consular-form passport-form-card">
            <div className="form-section-heading form-heading-row">
              <div>
                <span>Etape 1</span>
                <h2>Informations du demandeur</h2>
              </div>
              <p>Remplissez les donnees exactement comme sur vos pieces officielles.</p>
            </div>

            <div className="form-block">
              <h3>Identite et contact</h3>
              <div className="form-grid refined-form-grid">
                {inputs.map((field) => (
                  <label key={field.label}>
                    {field.label}
                    <input type={field.type ?? "text"} placeholder={field.placeholder ?? field.label} />
                  </label>
                ))}
              </div>
            </div>

            <div className="form-block two-column-block">
              <label>
                Type de demande
                <select defaultValue="premiere-demande">
                  <option value="premiere-demande">Premiere demande</option>
                  <option value="renouvellement">Renouvellement</option>
                  <option value="perte">Perte ou vol</option>
                  <option value="correction">Correction d information</option>
                </select>
              </label>
              <label>
                Date souhaitee de rendez-vous
                <input type="date" />
              </label>
            </div>

            <div className="form-block">
              <h3>Pieces jointes</h3>
              <label className="file-dropzone">
                <span>Ajouter les documents scannes</span>
                <small>PDF, JPG ou PNG. Plusieurs fichiers autorises.</small>
                <input type="file" multiple />
              </label>
            </div>

            <div className="form-block">
              <label className="full-field">
                Observations pour l agent consulaire
                <textarea placeholder="Ajoutez une precision utile : urgence, perte, changement d adresse, correction a signaler..." />
              </label>
            </div>

            <div className="form-confirmation">
              <label>
                <input type="checkbox" />
                <span>Je certifie que les informations fournies sont exactes et que les pieces jointes sont lisibles.</span>
              </label>
            </div>

            <div className="form-actions refined-actions">
              <button type="button">Enregistrer le brouillon</button>
              <button type="button" className="primary-action">Continuer vers les pieces</button>
            </div>
          </form>
        </article>
      </section>
    </main>
  );
}