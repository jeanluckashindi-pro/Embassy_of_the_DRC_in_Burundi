import React, { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Badge } from "../components/ui/badge.jsx";
import { Card, CardContent } from "../components/ui/card.jsx";
import { Button } from "../components/ui/button.jsx";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog.jsx";
import { Input } from "../components/ui/input.jsx";
import { CalendarDays, Newspaper, Search, ArrowRight, ExternalLink, MapPin, Mail, Tag, RefreshCw } from "lucide-react";

import { fetchActualites, fetchCommuniques } from "../api.js";
import { mapApiActualites, TopBar } from "../App.jsx";
import { ActualiteDetailDialog } from "../components/ActualiteDetailDialog.jsx";

const presidentTwo = "/images/president_2.jpg";
const firstLadyTwo = "/images/premiere_dame_2.jpg";
const passportOne = "/images/passport_1.jpg";

const DEFAULT_NEWS = [
  {
    id: "news-1",
    title: "Célébration de la Journée de l'Indépendance à Bujumbura",
    description: "La communauté congolaise vivant au Burundi s'est réunie à la Chancellerie pour la célébration officielle de la Fête Nationale.",
    image: presidentTwo,
    date: "30 Juin 2026",
    category: "Diplomatie",
    source: "Ambassade RDC Bujumbura",
    content: "Une réception fraternelle a réuni le corps diplomatique, les représentants des autorités burundaises et la diaspora congolaise. S.E. l'Ambassadeur a réaffirmé l'engagement de la RDC pour la paix et la coopération régionale."
  },
  {
    id: "news-2",
    title: "Renforcement de la coopération bilatérale RDC - Burundi",
    description: "Rencontre de haut niveau entre la délégation ministérielle de la RDC et les autorités diplomatiques du Burundi.",
    image: firstLadyTwo,
    date: "14 Mai 2026",
    category: "Coopération",
    source: "Ministère des Affaires Étrangères",
    content: "Les discussions ont porté sur la sécurité transfrontalière, la facilitation du commerce frontalier et la modernisation des procédures de contrôle et d'émission des documents de voyage."
  },
  {
    id: "news-3",
    title: "Modernisation des services consulaires à Bujumbura",
    description: "Mise en place de la plateforme de pré-demande consulaire en ligne pour raccourcir les délais d'obtention de visa et passeport.",
    image: passportOne,
    date: "28 Avril 2026",
    category: "Consulat",
    source: "Chancellerie RDC",
    content: "Les usagers peuvent désormais remplir leurs formulaires d'identité à distance, télécharger la liste des pièces requises et prendre rendez-vous pour la capture biométrique."
  }
];

export function ActualitesPage({ SiteHeader, SiteFooter }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTab, setSelectedTab] = useState("all");

  const actualitesQuery = useQuery({
    queryKey: ["actualites-page"],
    queryFn: ({ signal }) => fetchActualites(signal),
    staleTime: 5 * 60 * 1000,
  });

  const communiquesQuery = useQuery({
    queryKey: ["communiques-page"],
    queryFn: ({ signal }) => fetchCommuniques(signal),
    staleTime: 5 * 60 * 1000,
  });

  const apiActualites = useMemo(() => mapApiActualites(actualitesQuery.data), [actualitesQuery.data]);
  const articles = apiActualites.length ? apiActualites : DEFAULT_NEWS;

  const filteredArticles = articles.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.source && item.source.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesTab = selectedTab === "all" || (item.category && item.category.toLowerCase().includes(selectedTab));
    return matchesSearch && matchesTab;
  });

  return (
    <main className="site-shell bg-white dark:bg-[#161717] text-slate-900 dark:text-[#fafad6] min-h-screen">
      <TopBar />
      <SiteHeader />

      {/* Header Banner */}
      <section className="py-14 bg-[#ffffff] dark:bg-[#161717] text-slate-900 dark:text-[#fafad6] border-b border-[#f6f5f4] dark:border-[#2d2e2e]">
        <div className="container max-w-5xl">
          <Badge variant="blue" className="mb-3">Presse & Communiqués</Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-[#fafad6] tracking-tight">
            Actualités de l'Ambassade
          </h1>
          <p className="mt-3 text-slate-600 dark:text-[#a7a8a8] text-sm sm:text-base max-w-2xl">
            Toutes les annonces officielles, communiqués de la Chancellerie et informations destinées aux citoyens et partenaires.
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-10 bg-[#f7f5f3] dark:bg-[#1d1f1f] min-h-[60vh]">
        <div className="container max-w-6xl">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white dark:bg-[#161717] p-4 rounded-2xl border border-[#f6f5f4] dark:border-[#2d2e2e] shadow-xs mb-8">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Rechercher une actualité..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 h-10 text-xs bg-[#f7f5f3] dark:bg-[#1d1f1f] border-[#f6f5f4] dark:border-[#2d2e2e] text-slate-900 dark:text-[#fafad6]"
              />
            </div>

            <div className="flex items-center gap-3 overflow-x-auto w-full sm:w-auto">
              <span className="text-xs text-slate-500 font-medium whitespace-nowrap hidden md:inline-block">
                {filteredArticles.length} actualité{filteredArticles.length > 1 ? "s" : ""}
              </span>
              {[
                { id: "all", label: "Toutes" },
                { id: "diplomatie", label: "Diplomatie" },
                { id: "coopération", label: "Coopération" },
                { id: "consulat", label: "Consulat" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    selectedTab === tab.id
                      ? "bg-blue-800 text-white"
                      : "bg-[#f7f5f3] dark:bg-[#2d2e2e] text-slate-700 dark:text-[#fafad6] hover:bg-[#e2e0dc] dark:hover:bg-[#3d3e3e]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of News */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredArticles.map((item) => (
              <Card key={item.id} className="bg-white dark:bg-[#161717] border-[#f6f5f4] dark:border-[#2d2e2e] text-slate-900 dark:text-[#fafad6] flex flex-col justify-between overflow-hidden hover:border-blue-500 transition-all group shadow-xs">
                <div>
                  <div className="h-48 w-full bg-cover bg-center relative" style={{ backgroundImage: `url("${item.image}")` }}>
                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-lg flex items-center gap-1.5 font-medium">
                      <CalendarDays size={13} className="text-amber-400" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  <CardContent className="p-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="blue" className="text-[10px]">{item.category}</Badge>
                      <span className="text-[11px] text-slate-500 font-medium">{item.source}</span>
                    </div>

                    <h3 className="font-bold text-base text-slate-900 dark:text-[#fafad6] group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-[#a7a8a8] leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </CardContent>
                </div>

                <div className="p-5 pt-0">
                  <ActualiteDetailDialog item={item} />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
