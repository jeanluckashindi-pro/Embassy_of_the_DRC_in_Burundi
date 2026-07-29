import React from "react";
import { Badge } from "./ui/badge.jsx";
import { Button } from "./ui/button.jsx";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog.jsx";
import {
  CalendarDays,
  ExternalLink,
  Info,
  Globe,
  Tag,
  Hash,
  Clock,
  CheckCircle2,
  Newspaper,
  Layers,
  FileText
} from "lucide-react";

export function ActualiteDetailDialog({ item, triggerButton }) {
  if (!item) return null;

  const categories = Array.isArray(item.raw?.categorie)
    ? item.raw.categorie
    : item.category
    ? [item.category]
    : ["world"];

  const paysList = Array.isArray(item.raw?.pays)
    ? item.raw.pays
    : item.pays
    ? [item.pays]
    : ["dr congo"];

  const hasExternalUrl = Boolean(item.url && item.url.startsWith("http"));

  return (
    <Dialog>
      <DialogTrigger asChild>
        {triggerButton || (
          <button className="w-full bg-[#f7f5f3] dark:bg-[#2d2e2e] hover:bg-blue-800 hover:text-white dark:hover:bg-blue-700 text-slate-900 dark:text-[#fafad6] font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-between transition-all cursor-pointer border border-[#f6f5f4] dark:border-[#2d2e2e]">
            <span className="flex items-center gap-1.5">
              <Info className="h-3.5 w-3.5 text-blue-600 dark:text-amber-400" />
              Toutes les infos
            </span>
            <ExternalLink className="h-3.5 w-3.5" />
          </button>
        )}
      </DialogTrigger>

      <DialogContent className="bg-white dark:bg-[#161717] border border-[#f6f5f4] dark:border-[#2d2e2e] text-slate-900 dark:text-[#fafad6] sm:max-w-2xl max-h-[90vh] overflow-y-auto p-6">
        <DialogHeader className="space-y-3 text-left">
          {/* Header Badges & Source */}
          <div className="flex flex-wrap items-center gap-2">
            {item.source_icon && (
              <img
                src={item.source_icon}
                alt={item.source}
                className="h-5 w-5 object-contain rounded-full border border-slate-200 dark:border-slate-700"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            )}
            <Badge variant="blue" className="text-xs font-bold">
              {item.source || "Presse / Source RDC"}
            </Badge>

            {categories.map((cat, idx) => (
              <Badge key={idx} variant="gold" className="text-[11px] capitalize">
                <Tag size={10} className="mr-1 inline" />
                {cat}
              </Badge>
            ))}

            <Badge variant="outline" className="text-[11px] border-[#f6f5f4] dark:border-[#2d2e2e]">
              <Globe size={10} className="mr-1 inline" />
              {item.langue || "french"}
            </Badge>
          </div>

          <DialogTitle className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-[#fafad6] leading-snug">
            {item.title}
          </DialogTitle>

          <DialogDescription className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <CalendarDays size={13} className="text-amber-500" />
            <span>Publié le : {item.date_publication || item.date || "N/A"}</span>
            {item.raw?.actif !== undefined && (
              <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold ml-auto">
                <CheckCircle2 size={12} />
                Actif (200 OK)
              </span>
            )}
          </DialogDescription>
        </DialogHeader>

        {/* Featured Image */}
        {item.image && (
          <div className="relative rounded-xl overflow-hidden h-52 sm:h-64 w-full bg-slate-100 dark:bg-slate-800 border border-[#f6f5f4] dark:border-[#2d2e2e] my-2">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/images/president_2.jpg";
              }}
            />
          </div>
        )}

        {/* Description & Contenu */}
        <div className="space-y-4 my-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <div className="p-4 rounded-xl bg-[#f7f5f3] dark:bg-[#1d1f1f] border border-[#f6f5f4] dark:border-[#2d2e2e]">
            <h4 className="font-bold text-slate-900 dark:text-[#fafad6] mb-1.5 flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <Newspaper size={14} className="text-blue-600 dark:text-amber-400" />
              Résumé / Description
            </h4>
            <p>{item.description}</p>
          </div>

          {item.content && item.content !== item.description && (
            <div className="p-4 rounded-xl bg-white dark:bg-[#161717] border border-[#f6f5f4] dark:border-[#2d2e2e]">
              <h4 className="font-bold text-slate-900 dark:text-[#fafad6] mb-1.5 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                <FileText size={14} className="text-blue-600 dark:text-amber-400" />
                Contenu détaillé
              </h4>
              <p>{item.content}</p>
            </div>
          )}
        </div>

        {/* Endpoint Data Grid Breakdown (Toutes les infos retournées par l'API) */}
        <div className="mt-4 pt-4 border-t border-[#f6f5f4] dark:border-[#2d2e2e] space-y-3">
          <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-[#fafad6] flex items-center gap-2">
            <Layers size={14} className="text-blue-600 dark:text-amber-400" />
            Toutes les données de l'endpoint API (`/api/actualites/actualites/`)
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-lg bg-[#f7f5f3] dark:bg-[#1d1f1f] border border-[#f6f5f4] dark:border-[#2d2e2e]">
              <span className="text-[10px] text-slate-500 block uppercase font-bold">ID & Article ID</span>
              <span className="font-mono text-slate-800 dark:text-[#fafad6]">
                #{item.id} {item.article_id ? `(${item.article_id.slice(0, 10)}...)` : ""}
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-[#f7f5f3] dark:bg-[#1d1f1f] border border-[#f6f5f4] dark:border-[#2d2e2e]">
              <span className="text-[10px] text-slate-500 block uppercase font-bold">Source Nom & Icone</span>
              <span className="font-semibold text-slate-800 dark:text-[#fafad6]">
                {item.source || "Chancellerie"}
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-[#f7f5f3] dark:bg-[#1d1f1f] border border-[#f6f5f4] dark:border-[#2d2e2e]">
              <span className="text-[10px] text-slate-500 block uppercase font-bold">Catégories API</span>
              <div className="flex flex-wrap gap-1 mt-0.5">
                {categories.map((c, i) => (
                  <span key={i} className="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 text-[10px] font-mono">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-[#f7f5f3] dark:bg-[#1d1f1f] border border-[#f6f5f4] dark:border-[#2d2e2e]">
              <span className="text-[10px] text-slate-500 block uppercase font-bold">Pays & Langue</span>
              <span className="font-medium text-slate-800 dark:text-[#fafad6]">
                {paysList.join(", ")} | {item.langue || "french"}
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-[#f7f5f3] dark:bg-[#1d1f1f] border border-[#f6f5f4] dark:border-[#2d2e2e]">
              <span className="text-[10px] text-slate-500 block uppercase font-bold">Date publication</span>
              <span className="font-medium text-slate-800 dark:text-[#fafad6]">
                {item.date_publication || item.date || "Non spécifiée"}
              </span>
            </div>

            {item.date_recuperation && (
              <div className="p-2.5 rounded-lg bg-[#f7f5f3] dark:bg-[#1d1f1f] border border-[#f6f5f4] dark:border-[#2d2e2e]">
                <span className="text-[10px] text-slate-500 block uppercase font-bold">Date récupération API</span>
                <span className="font-medium text-slate-800 dark:text-[#fafad6]">
                  {item.date_recuperation}
                </span>
              </div>
            )}

            {item.hash_article && (
              <div className="col-span-1 sm:col-span-2 p-2.5 rounded-lg bg-[#f7f5f3] dark:bg-[#1d1f1f] border border-[#f6f5f4] dark:border-[#2d2e2e] overflow-hidden">
                <span className="text-[10px] text-slate-500 block uppercase font-bold flex items-center gap-1">
                  <Hash size={10} /> Hash Article
                </span>
                <span className="font-mono text-[10px] text-slate-600 dark:text-slate-400 break-all">
                  {item.hash_article}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-[#f6f5f4] dark:border-[#2d2e2e]">
          <div className="text-[11px] text-slate-500">
            Dépêche officielle • Ambassade RDC au Burundi
          </div>

          {hasExternalUrl ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-800 hover:bg-blue-900 !text-white font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              <span>Lire la source d'origine</span>
              <ExternalLink size={14} className="!text-white" />
            </a>
          ) : (
            <a
              href="/actualites"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-800 hover:bg-blue-900 !text-white font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              <span>Voir toutes les actualités</span>
              <ExternalLink size={14} className="!text-white" />
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
