import React, { useState } from "react";
import { FileText, CheckCircle2, Download, ArrowRight, ShieldCheck, Clock, DollarSign } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog.jsx";

const DEFAULT_DOCUMENTS = [
  {
    id: "visa",
    code: "VISA_ENTRY",
    icon: FileText,
    title: "Demande de Visa",
    description: "Demandes de visa touristique, d'affaires ou de transit pour la RDC",
    pieces: [
      "Formulaire correctement rempli",
      "2 photos de passeport récentes",
      "Passeport valide (min. 6 mois)",
      "Frais de visa (non remboursables)",
      "Raison de visite en RDC",
      "Relevé bancaire (3 mois)"
    ],
    delai: "10 jours",
    frais: "3 Mois $100 / 9 Mois $200",
  },
  {
    id: "confirmation-nom",
    code: "CONFIRM_NOM",
    icon: CheckCircle2,
    title: "Lettre de Confirmation de Nom",
    description: "Lettre officielle confirmant l'identité et les variations de nom",
    pieces: [
      "Formulaire correctement rempli",
      "Copie d'identité (passeport, carte d'électeur, ID ou statut de réfugié)",
      "Document avec anciens noms, lieu et date de naissance",
      "Document avec noms actuels, lieu et date de naissance"
    ],
    delai: "48 heures",
    frais: "$30",
  },
  {
    id: "attestation-naissance",
    code: "ATTEST_NAIS",
    icon: FileText,
    title: "Attestation de Naissance",
    description: "Attestation de naissance officielle du registre civil de la RDC",
    pieces: [
      "Formulaire correctement rempli",
      "Copie du passeport, carte d'électeur ou acte de naissance RDC",
      "Pour enfants sans passeport : acte de naissance et pièce d'identité des parents"
    ],
    delai: "48 heures",
    frais: "$30",
  },
  {
    id: "passeport",
    code: "PASS_BIO",
    icon: FileText,
    title: "Passeport Biométrique",
    description: "Délivrance et renouvellement du passeport biométrique congolais",
    pieces: [
      "Formulaire consulaire rempli",
      "Ancien passeport ou pièce d'identité officielle",
      "Preuve d'immatriculation consulaire",
      "Rendez-vous de capture des empreintes"
    ],
    delai: "15 jours",
    frais: "$185",
  },
  {
    id: "laissez-passer",
    code: "PASS_TRANSIT",
    icon: CheckCircle2,
    title: "Laissez-passer consulaire",
    description: "Document de voyage d'urgence pour le retour en RDC",
    pieces: [
      "Déclaration de perte de passeport ou certificat d'urgence",
      "2 photos de passeport format 4x4",
      "Justificatif de voyage retour (Billet réservé)",
      "Preuve d'identité congolaise"
    ],
    delai: "24 heures",
    frais: "$40",
  },
  {
    id: "carte-consulaire",
    code: "CARTE_CONS",
    icon: CheckCircle2,
    title: "Carte Consulaire",
    description: "Immatriculation consulaire des citoyens RDC au Burundi",
    pieces: [
      "Copie du passeport congolais ou acte de naissance",
      "Justificatif de domicile au Burundi",
      "2 photos d'identité récentes",
      "Formulaire d'immatriculation rempli"
    ],
    delai: "48 heures",
    frais: "$25",
  }
];

export function DocumentCardDark({ doc }) {
  const [detailOpen, setDetailOpen] = useState(false);

  // Normalize document properties
  const docId = doc.id || doc.code || "doc";
  const title = doc.title || doc.titre || "Document Consulaire";
  const description = doc.description || doc.excerpt || "Service officiel délivré par la Chancellerie de l'Ambassade de la RDC à Bujumbura.";
  
  // Icon choice based on document type
  const IconComponent = doc.icon || (title.toLowerCase().includes("confirmation") || title.toLowerCase().includes("carte") || title.toLowerCase().includes("laissez") ? CheckCircle2 : FileText);
  
  // Requirement pieces
  const pieces = Array.isArray(doc.pieces) && doc.pieces.length > 0
    ? doc.pieces
    : Array.isArray(doc.items) && doc.items.length > 0
    ? doc.items
    : doc.description ? doc.description.split(", ") : ["Formulaire consulaire", "Pièce d'identité", "Justificatifs civils"];

  // Delai & Fees
  const delai = doc.delai || (doc.delais ? `${doc.delais} jour${String(doc.delais) === "1" ? "" : "s"}` : "48h à 72h");
  
  let formattedFrais = doc.frais;
  if (!formattedFrais && doc.prix) {
    const priceNum = parseFloat(doc.prix);
    const currency = doc.devise_id?.code || "$";
    formattedFrais = isNaN(priceNum) || priceNum === 0 ? "Frais réglementés ($30 - $100)" : `${priceNum} ${currency}`;
  }
  if (!formattedFrais) formattedFrais = "$30 à $100";

  return (
    <div className="bg-[#121214] border border-zinc-800/90 rounded-2xl p-6 sm:p-7 shadow-2xl flex flex-col justify-between hover:border-zinc-700 transition-all group">
      <div>
        {/* Top Header Row */}
        <div className="flex items-start gap-3.5 mb-3">
          <div className="p-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700/60 text-white shrink-0 group-hover:scale-105 transition-transform">
            <IconComponent className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
              {title}
            </h3>
            <p className="text-xs text-zinc-400 mt-1 leading-relaxed font-normal min-h-[32px]">
              {description}
            </p>
          </div>
        </div>

        {/* Section title */}
        <span className="text-[11px] font-semibold text-zinc-400 tracking-wider uppercase mt-5 mb-3 block">
          DOCUMENTS REQUIS
        </span>

        {/* Bullet points list */}
        <ul className="space-y-2 text-xs text-zinc-300 min-h-[150px] mb-6">
          {pieces.map((piece, index) => (
            <li key={index} className="flex items-start gap-2 leading-relaxed">
              <span className="text-zinc-500 font-bold text-sm leading-none">•</span>
              <span className="text-zinc-300 font-normal">{piece}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        {/* Info Rows */}
        <div className="space-y-2 pt-4 border-t border-zinc-800/80 mb-6">
          <div className="flex items-center justify-between text-xs">
            <span className="text-zinc-400 font-medium">Délai de Traitement:</span>
            <span className="text-white font-bold">{delai}</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-zinc-400 font-medium">Frais:</span>
            <span className="text-white font-bold">{formattedFrais}</span>
          </div>
        </div>

        {/* Actions Button Bar */}
        <div className="flex items-center gap-2.5">
          <a href={`/demandes?type=${docId}`} className="flex-1">
            <button className="w-full bg-zinc-200 hover:bg-white text-zinc-950 font-bold py-3 px-4 rounded-xl text-xs text-center transition-colors shadow-sm cursor-pointer">
              Procéder à la demande
            </button>
          </a>

          <Dialog open={detailOpen} onOpenChange={setDetailOpen}>
            <DialogTrigger asChild>
              <button
                className="doc-download-btn bg-zinc-800 hover:bg-zinc-700 text-zinc-200 p-3 rounded-xl border border-zinc-700/60 transition-all cursor-pointer flex items-center justify-center shrink-0 shadow-sm"
                aria-label="Détails du document et téléchargement"
                title="Voir la fiche et les pièces à fournir"
              >
                <Download className="h-4 w-4 text-amber-400" />
              </button>
            </DialogTrigger>
            <DialogContent className="bg-slate-950 border border-slate-800 text-white sm:max-w-lg">
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-blue-600 text-white">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div>
                    <DialogTitle className="text-lg font-bold text-white">{title}</DialogTitle>
                    <DialogDescription className="text-xs text-slate-400">{description}</DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-4 py-3 text-xs text-slate-300">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <span className="text-[11px] font-semibold text-amber-400 tracking-wider uppercase block">
                    Liste complète des pièces à fournir
                  </span>
                  <ul className="space-y-2 pt-1">
                    {pieces.map((p, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Délai estimé</span>
                    <strong className="text-sm font-bold text-white">{delai}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Tarif consulaire</span>
                    <strong className="text-sm font-bold text-amber-300">{formattedFrais}</strong>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 italic">
                  Chancellerie de l'Ambassade de la RDC à Bujumbura - Avenue de la Révolution. Les dossiers complets sont traités par ordre de réception.
                </p>

                <div className="pt-2">
                  <a href={`/demandes?type=${docId}`}>
                    <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-xl text-xs transition-colors cursor-pointer">
                      Démarrer ma démarche en ligne
                    </button>
                  </a>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export { DEFAULT_DOCUMENTS };
