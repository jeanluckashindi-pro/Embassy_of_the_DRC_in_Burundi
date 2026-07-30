import React from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "motion/react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { toast } from "sonner";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Clock,
  FileText,
  Globe,
  Home,
  Info,
  Mail,
  MapPin,
  Phone,
  FileBadge,
  FileEdit,
  Newspaper,
  TrendingUp,
  UploadCloud,
  Search,
  ShieldCheck,
  User,
  CreditCard,
  Building,
  Sparkles,
  Check,
  Copy,
  ExternalLink,
  Menu,
  X,
  Bell,
  FileCheck,
  Bot,
  MessageSquare
} from "lucide-react";

import logoAmbassade from "./assets/logo_ambassade.png";
import logoAmbassadeLight from "./assets/logo_ambassade_light.png";

import thereseKayikwambaImg from "./assets/images/therese_kayikwamba_jpg_1785441674768.jpg";
import crispinMbaduImg from "./assets/images/crispin_mbadu_jpg_1785441686017.jpg";
import noellaAyeganagatoImg from "./assets/images/noella_ayeganagato_jpg_1785441695918.jpg";
import ambassadorWillyMulumbaImg from "./assets/images/ambassador_willy_mulumba_1785442280044.jpg";

import heroSlide1 from "./assets/images/hero_slide_1_jpg_1785441710687.jpg";
import heroSlide2 from "./assets/images/hero_slide_2_jpg_1785441722600.jpg";
import heroSlide3 from "./assets/images/hero_slide_3_jpg_1785441734421.jpg";

import rdcVillesImg from "./assets/images/rdc_villes_kinshasa_1785442760707.jpg";
import rdcGastronomieImg from "./assets/images/rdc_gastronomie_moambe_1785442771752.jpg";
import rdcParcsImg from "./assets/images/rdc_parcs_virunga_1785442783631.jpg";
import rdcCultureImg from "./assets/images/rdc_culture_musee_1785442794778.jpg";
import rdcHistoriqueImg from "./assets/images/rdc_historique_monument_1785442806151.jpg";
import rdcNatureImg from "./assets/images/rdc_nature_fleuve_1785442817177.jpg";

import {
  API_BASE_URL,
  apiFetch,
  fetchActualites,
  fetchCommuniques,
  fetchTypeDemandeChamps,
  fetchTypeDemandeDocuments,
  fetchTypeDemandes,
  submitDemande
} from "./api.js";
import { ThemeToggle } from "./ThemeToggle.jsx";
import { NiandaChatbot } from "./components/NiandaChatbot.jsx";
import { DocumentCard, DEFAULT_DOCUMENTS } from "./components/DocumentCard.jsx";
import { ActualiteDetailDialog } from "./components/ActualiteDetailDialog.jsx";
import { SplashScreen } from "./components/SplashScreen.jsx";
import { AmbassadePage } from "./pages/AmbassadePage.jsx";
import { ActualitesPage } from "./pages/ActualitesPage.jsx";

// shadcn UI imports
import { Button } from "./components/ui/button.jsx";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./components/ui/card.jsx";
import { Badge } from "./components/ui/badge.jsx";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs.jsx";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "./components/ui/dialog.jsx";
import { Input } from "./components/ui/input.jsx";

import "swiper/css";
import "swiper/css/pagination";

const passportOne = "/images/passport_1.jpg";
const passportTwo = "/images/passport_2.jpg";
const presidentImage = "/images/president.webp";
const presidentTwo = "/images/president_2.jpg";
const firstLadyImage = "/images/premiere_dame_2.jpg";
const firstLadyTwo = "/images/premiere_dame_2.jpg";

const menu = [
  { label: "Accueil", href: "/", icon: Home },
  { label: "Ambassade", href: "/ambassade", icon: Info },
  { label: "Nos services", href: "/documents", icon: FileBadge },
  { label: "Demandes", href: "/demandes", icon: FileEdit },
  { label: "Actualités", href: "/actualites", icon: Newspaper },
  { label: "Contact", href: "/contact", icon: Mail },
];

export function TopBar() {
  return (
    <section className="topbar bg-[#f7f5f3] dark:bg-[#1d1f1f] border-b border-[#e2e0dc] dark:border-[#2d2e2e] transition-colors">
      <div className="container topbar-inner flex items-center justify-between py-2 text-xs">
        <div className="contact-line flex items-center gap-3 sm:gap-6">
          <span className="flex items-center gap-1.5 text-slate-800 dark:text-[#fafad6] font-semibold text-[11px] sm:text-xs">
            <MapPin size={15} className="text-[#0054a6] dark:text-amber-400 shrink-0" strokeWidth={2.4} aria-hidden="true" />
            <span>Bujumbura, Burundi</span>
          </span>
          <span className="flex items-center gap-1.5 text-slate-800 dark:text-[#fafad6] font-semibold text-[11px] sm:text-xs">
            <Mail size={15} className="text-[#0054a6] dark:text-amber-400 shrink-0" strokeWidth={2.4} aria-hidden="true" />
            <span className="hidden sm:inline">contact@ambardcbujumbura.cd</span>
            <span className="inline sm:hidden">contact@ambardcbujumbura.cd</span>
          </span>
        </div>

        <div className="socials flex items-center gap-1.5 sm:gap-2" aria-label="Réseaux sociaux">
          <a
            href="https://facebook.com/ambardcbujumbura"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            title="Facebook Ambassade RDC"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a
            href="https://twitter.com/ambardcbujumbura"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            title="X Ambassade RDC"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4l6.25 8.5L4 20h2.5l5.5-7 4.5 7H20l-6.75-9L19.5 4H17l-5 6.5L6.5 4z"/></svg>
          </a>
          <a
            href="https://youtube.com/@ambardcbujumbura"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            title="YouTube Ambassade RDC"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 0 0-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.5V8.5l6 3.5z"/></svg>
          </a>
          <a
            href="https://instagram.com/ambardcbujumbura"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram Ambassade RDC"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function SiteHeader() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="main-header sticky top-0 z-50 bg-[#002855] dark:bg-[#0a1324] text-white border-b border-blue-900/50 dark:border-slate-800/80 backdrop-blur-md shadow-md">
      <div className="container nav-wrap flex items-center justify-between py-2 sm:py-3">
        <a className="brand logo-brand shrink-0 flex items-center gap-2.5 sm:gap-3 group" href="/" aria-label="Ambassade RDC au Burundi">
          <img className="h-10 sm:h-12 md:h-14 w-auto object-contain" src={logoAmbassadeLight} alt="Ambassade RDC au Burundi" />
        </a>

        <nav className="desktop-nav hidden md:flex items-center gap-6" aria-label="Navigation principale">
          {menu.map((item) => {
            const Icon = item.icon;
            return (
              <a key={item.label} href={item.href} className="inline-flex items-center gap-1.5 transition-colors hover:text-amber-300 font-semibold text-xs sm:text-sm text-slate-100">
                <Icon size={16} strokeWidth={2} aria-hidden="true" className="text-amber-400" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="nav-actions flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("open-nianda"))}
            className="flex md:hidden items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-amber-400 text-slate-950 hover:bg-amber-300 font-bold text-xs transition-all cursor-pointer shrink-0 shadow-sm"
            title="Assistant Consulaire Nianda"
            aria-label="Assistant Consulaire Nianda"
          >
            <Bot className="h-4 w-4 text-blue-900 shrink-0 animate-pulse" />
            <span className="font-extrabold text-[11px] sm:text-xs">Nianda AI</span>
          </button>
          <ThemeToggle />
          <button
            className="mobile-menu-toggle flex items-center justify-center p-2 rounded-xl bg-amber-400 text-slate-950 hover:bg-amber-300 transition-all cursor-pointer shrink-0 shadow-md border-0 md:hidden"
            type="button"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={22} className="shrink-0 text-slate-950" /> : <Menu size={22} className="shrink-0 text-slate-950" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <React.Fragment key="mobile-nav-fragment">
            <motion.div
              key="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs z-[99998] md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              key="mobile-sidebar"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 left-0 bottom-0 w-[85vw] max-w-[320px] bg-white dark:bg-[#181919] text-slate-900 dark:text-[#fafad6] z-[99999] p-5 flex flex-col shadow-2xl border-r border-slate-200 dark:border-slate-800 overflow-y-auto md:hidden"
              aria-label="Navigation mobile"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <img src={logoAmbassade} alt="RDC Logo" className="h-8 w-auto object-contain logo-light-artwork" />
                  <img src={logoAmbassadeLight} alt="RDC Logo" className="h-8 w-auto object-contain logo-dark-artwork" />
                  <span className="font-extrabold text-sm text-slate-900 dark:text-[#fafad6] uppercase">Menu Ambassade</span>
                </div>
                <button
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer"
                  type="button"
                  aria-label="Fermer le menu"
                  onClick={() => setMobileOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-1 py-4 flex-1">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    window.dispatchEvent(new CustomEvent("open-nianda"));
                  }}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl bg-blue-50 dark:bg-amber-400/10 text-blue-900 dark:text-amber-300 border border-blue-200 dark:border-amber-400/30 mb-2 transition-all cursor-pointer"
                >
                  <Bot size={20} className="text-blue-700 dark:text-amber-400 shrink-0 animate-pulse" />
                  <div className="text-left">
                    <span className="block leading-tight">Assistant Nianda AI</span>
                    <span className="text-[10px] text-blue-600 dark:text-amber-400/80 font-normal">Orientation consulaire rapide</span>
                  </div>
                </button>
                {menu.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl text-slate-800 dark:text-slate-100 hover:bg-blue-50 dark:hover:bg-slate-800/80 hover:text-blue-700 dark:hover:text-amber-300 transition-colors"
                    >
                      <Icon size={20} className="text-blue-700 dark:text-amber-400 shrink-0" />
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between px-2">
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Mode d'affichage</span>
                  <ThemeToggle />
                </div>
                <a href="/espace-personnel" onClick={() => setMobileOpen(false)} className="block">
                  <Button variant="default" className="w-full justify-center gap-2 bg-blue-800 hover:bg-blue-900 text-white dark:bg-amber-400 dark:text-slate-950 dark:hover:bg-amber-500 font-bold py-2.5">
                    <User size={18} />
                    <span>Espace personnel</span>
                  </Button>
                </a>
              </div>
            </motion.nav>
          </React.Fragment>
        )}
      </AnimatePresence>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-[#f7f5f3] dark:bg-[#121313] text-slate-900 dark:text-slate-100 border-t border-[#e2e0dc] dark:border-[#2d2e2e] relative overflow-hidden transition-colors" id="contact">
      {/* Flag Accent Ribbon Top */}
      <div className="h-1.5 w-full flex">
        <div className="w-1/3 bg-sky-500" />
        <div className="w-1/3 bg-amber-400" />
        <div className="w-1/3 bg-red-600" />
      </div>

      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-300 dark:border-slate-800">
          
          {/* Col 1: Brand & Identity (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="/" className="inline-block group">
              <img src={logoAmbassade} alt="Ambassade RDC au Burundi" className="logo-light-artwork h-14 w-auto object-contain" />
              <img src={logoAmbassadeLight} alt="Ambassade RDC au Burundi" className="logo-dark-artwork h-14 w-auto object-contain" />
            </a>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
              Représentation diplomatique officielle de la République Démocratique du Congo auprès de la République du Burundi. Chancellerie, affaires consulaires et protection de la communauté congolaise.
            </p>

            {/* Emergency Hotline Banner */}
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#1d1f1f] border border-slate-300 dark:border-slate-800 flex items-center justify-between text-xs shadow-xs">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 font-bold">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Urgence Consulaire 24/7</span>
                  <span className="block font-bold text-slate-900 dark:text-white text-xs">+257 22 22 23 24</span>
                </div>
              </div>
              <Badge variant="gold" className="text-[10px] py-0.5">Assistance</Badge>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">Thème du site :</span>
              <ThemeToggle />
            </div>
          </div>

          {/* Col 2: Mission & Actualités (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold text-blue-800 dark:text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <Building className="h-4 w-4 text-blue-700 dark:text-amber-400" />
              <span>Ambassade</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
              <li><a href="/#ambassade" className="hover:text-blue-700 dark:hover:text-amber-300 transition-colors flex items-center gap-1.5"><ChevronRight className="h-3 w-3 text-sky-500 shrink-0" />Mission diplomatique</a></li>
              <li><a href="/#actualites" className="hover:text-blue-700 dark:hover:text-amber-300 transition-colors flex items-center gap-1.5"><ChevronRight className="h-3 w-3 text-sky-500 shrink-0" />Actualités & Communiqués</a></li>
              <li><a href="/#rdc" className="hover:text-blue-700 dark:hover:text-amber-300 transition-colors flex items-center gap-1.5"><ChevronRight className="h-3 w-3 text-sky-500 shrink-0" />Découvrir la RDC</a></li>
              <li><a href="/contact" className="hover:text-blue-700 dark:hover:text-amber-300 transition-colors flex items-center gap-1.5"><ChevronRight className="h-3 w-3 text-sky-500 shrink-0" />Demande d'audience</a></li>
              <li><a href="/payment" className="hover:text-blue-700 dark:hover:text-amber-300 transition-colors flex items-center gap-1.5"><ChevronRight className="h-3 w-3 text-sky-500 shrink-0" />Coordonnées bancaires</a></li>
            </ul>
          </div>

          {/* Col 3: Consular Services (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold text-blue-800 dark:text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-blue-700 dark:text-amber-400" />
              <span>Services Consulaires</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
              <li><a href="/demandes?type=passeport" className="hover:text-blue-700 dark:hover:text-amber-300 transition-colors flex items-center gap-1.5"><ChevronRight className="h-3 w-3 text-sky-500 shrink-0" />Passeport Biométrique</a></li>
              <li><a href="/demandes?type=visa" className="hover:text-blue-700 dark:hover:text-amber-300 transition-colors flex items-center gap-1.5"><ChevronRight className="h-3 w-3 text-sky-500 shrink-0" />Demande de Visa d'Entrée</a></li>
              <li><a href="/demandes?type=carte-consulaire" className="hover:text-blue-700 dark:hover:text-amber-300 transition-colors flex items-center gap-1.5"><ChevronRight className="h-3 w-3 text-sky-500 shrink-0" />Carte d'Immatriculation</a></li>
              <li><a href="/documents" className="hover:text-blue-700 dark:hover:text-amber-300 transition-colors flex items-center gap-1.5"><ChevronRight className="h-3 w-3 text-sky-500 shrink-0" />Catalogue des documents</a></li>
              <li><a href="/espace-personnel" className="hover:text-blue-700 dark:hover:text-amber-300 transition-colors flex items-center gap-1.5"><ChevronRight className="h-3 w-3 text-sky-500 shrink-0" />Suivi de dossier citoyen</a></li>
            </ul>
          </div>

          {/* Col 4: Contacts & Hours (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold text-blue-800 dark:text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue-700 dark:text-amber-400" />
              <span>Chancellerie</span>
            </h4>
            <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-blue-700 dark:text-amber-400 shrink-0 mt-0.5" />
                <span>Avenue de la Révolution, Bujumbura, Burundi</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-blue-700 dark:text-amber-400 shrink-0" />
                <span>+257 22 22 23 24</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-blue-700 dark:text-amber-400 shrink-0" />
                <span>contact@ambardcbujumbura.cd</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="h-4 w-4 text-blue-700 dark:text-amber-400 shrink-0" />
                <span>www.ambardcbujumbura.cd</span>
              </div>

              <div className="mt-3 p-3 rounded-xl bg-white dark:bg-[#1d1f1f] border border-slate-300 dark:border-slate-800 text-xs space-y-1">
                <div className="flex items-center gap-1.5 text-blue-800 dark:text-amber-300 font-bold">
                  <Clock className="h-3.5 w-3.5" />
                  <span>Guichet Consulaire</span>
                </div>
                <p className="text-slate-800 dark:text-slate-200 text-[11px] font-medium">Lundi – Vendredi : 09h00 – 15h30</p>
                <p className="text-slate-500 dark:text-slate-400 text-[10px]">Fermé les week-ends et jours fériés légaux RDC / Burundi.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© 2026 Ambassade de la République Démocratique du Congo au Burundi.</span>
            <span className="hidden sm:inline text-slate-400 dark:text-slate-600">•</span>
            <span>Tous droits réservés.</span>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://facebook.com/ambardcbujumbura" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white dark:bg-[#1d1f1f] border border-slate-300 dark:border-slate-800 hover:bg-blue-800 hover:text-white dark:hover:bg-blue-600 text-slate-700 dark:text-slate-300 transition-colors" aria-label="Facebook">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://twitter.com/ambardcbujumbura" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white dark:bg-[#1d1f1f] border border-slate-300 dark:border-slate-800 hover:bg-blue-800 hover:text-white dark:hover:bg-blue-600 text-slate-700 dark:text-slate-300 transition-colors" aria-label="X (Twitter)">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://youtube.com/@ambardcbujumbura" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white dark:bg-[#1d1f1f] border border-slate-300 dark:border-slate-800 hover:bg-red-600 hover:text-white text-slate-700 dark:text-slate-300 transition-colors" aria-label="YouTube">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 0 0-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.5V8.5l6 3.5z"/></svg>
            </a>
            <a href="https://instagram.com/ambardcbujumbura" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white dark:bg-[#1d1f1f] border border-slate-300 dark:border-slate-800 hover:bg-pink-600 hover:text-white text-slate-700 dark:text-slate-300 transition-colors" aria-label="Instagram">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
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
  { id: "invest", icon: "TrendingUp", label: "Investissement", title: "Investir en République Démocratique du Congo", description: "Orientations pratiques pour comprendre les opportunités et les premières démarches d'investissement en RDC.", action: "Comment investir ?", href: "#documents", className: "invest", image: "/images/president_2.jpg" },
  { id: "notice", icon: "Newspaper", label: "Information officielle", title: "Communiqués", description: "Avis, annonces publiques et informations importantes publiés par l'Ambassade à Bujumbura.", action: "Voir plus", href: "#actualites", className: "notice", image: "/images/premiere_dame_2.jpg" },
  { id: "documents", icon: "FileBadge", label: "Services consulaires", title: "Documents consulaires", description: "Pièces à préparer et demandes consulaires disponibles en ligne.", action: "Voir les documents", href: "/documents", className: "discover", image: "/images/passport_1.jpg" },
];

const leaders = [
  { name: "S.E.M. Félix Antoine TSHISEKEDI TSHILOMBO", role: "Président de la République Démocratique du Congo, Chef de l'État", image: presidentImage },
  { name: "S.E. Judith SUMINWA TULUKA", role: "Première ministre de la République Démocratique du Congo", image: firstLadyImage },
  { name: "S.E. Thérèse KAYIKWAMBA WAGNER", role: "Ministre d'État, Ministre des Affaires Étrangères, Coopération Internationale et Francophonie", image: thereseKayikwambaImg },
  { name: "S.E. Crispin MBADU PHANZU", role: "Ministre délégué près le Ministre des Affaires étrangères en charge de la Francophonie et de la Diaspora congolaise", image: crispinMbaduImg },
  { name: "S.E. Noëlla AYEGANAGATO NAKWIPONE", role: "Vice-Ministre des Affaires étrangères, Coopération Internationale, Francophonie et Diaspora", image: noellaAyeganagatoImg },
  { name: "S.E. Willy MULUMBA", role: "Ambassadeur Extraordinaire et Plénipotentiaire de la RDC au Burundi", image: ambassadorWillyMulumbaImg },
];

const news = [
  { day: "30", month: "Juin", title: "Réception de la communauté congolaise à Bujumbura pour la fête nationale", image: presidentTwo },
  { day: "14", month: "Mai", title: "Renforcement de la coopération RDC - Burundi", image: firstLadyTwo },
  { day: "22", month: "Avr", title: "Information au public sur les démarches consulaires à Bujumbura", image: passportOne },
];

const communiques = [
  { title: "AVIS AU PUBLIC DU 30 JUIN 2026", excerpt: "L'Ambassade informe le public qu'elle sera fermée le mardi 30 juin 2026, à l'occasion de la fête nationale. Tous les services consulaires seront suspendus pour cette journée.", date: "30 Juin 2026", category: "Avis public" },
  { title: "COMMUNIQUÉ OFFICIEL", excerpt: "L'Ambassade de la République Démocratique du Congo au Burundi informe les ressortissants congolais des nouvelles dispositions consulaires applicables à compter de juillet 2026.", date: "25 Juin 2026", category: "Communiqué officiel" },
  { title: "AVIS AU PUBLIC DU 18 MAI 2026", excerpt: "L'Ambassade informe qu'elle sera fermée au public le lundi 18 mai 2026. Les rendez-vous seront reprogrammés automatiquement.", date: "18 Mai 2026", category: "Avis public" },
  { title: "DÉMARCHES CONSULAIRES EN LIGNE", excerpt: "Les demandes de rendez-vous, les suivis de dossiers et les formulaires peuvent être préparés depuis l'espace personnel en ligne.", date: "12 Mai 2026", category: "Information" },
  { title: "DEMANDE DE PASSEPORT", excerpt: "Les requérants doivent présenter les pièces requises, effectuer la prise de rendez-vous et se présenter à Bujumbura avec tous les documents originaux.", date: "05 Mai 2026", category: "Information" },
  { title: "LISTE DES DOCUMENTS DISPONIBLES", excerpt: "Les documents produits par l'Ambassade sont remis uniquement au titulaire ou à une personne dûment mandatée avec procuration valide.", date: "28 Avr 2026", category: "Information" },
];

function getApiList(data) {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.results)) return data.results;
  return [];
}

function getApiFileUrl(file) {
  if (!file) return "";
  try {
    return new URL(file, API_BASE_URL).href;
  } catch {
    return file;
  }
}

function stripHtml(value) {
  return String(value ?? "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function formatCommuniqueDate(value) {
  if (!value) return "Date à confirmer";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "short", year: "numeric" }).format(date);
}

function shuffleDisplayItems(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function getActualiteDateParts(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return { day: "--", month: "Date" };
  return {
    day: new Intl.DateTimeFormat("fr-FR", { day: "2-digit" }).format(date),
    month: new Intl.DateTimeFormat("fr-FR", { month: "short" }).format(date),
  };
}

export function mapApiActualites(data) {
  return getApiList(data)
    .filter((item) => item.actif !== false)
    .map((item) => {
      const dateParts = getActualiteDateParts(item.date_publication || item.created_at);
      const formattedDate = formatCommuniqueDate(item.date_publication || item.created_at);
      const categoryFormatted = Array.isArray(item.categorie)
        ? item.categorie.join(", ")
        : item.categorie || item.category || "Actualité";
      const paysFormatted = Array.isArray(item.pays)
        ? item.pays.join(", ")
        : item.pays || "dr congo";

      return {
        id: item.id ?? item.article_id ?? String(Math.random()),
        article_id: item.article_id || item.id,
        title: item.titre || "Actualité de la RDC",
        description: stripHtml(item.description || item.contenu || "Information publiée par une source d'actualité."),
        content: stripHtml(item.contenu || item.description || "Aucun contenu supplémentaire disponible pour cette actualité."),
        image: item.image_url || presidentTwo,
        url: item.url || "#actualites",
        source: item.source_name || item.source || "Chancellerie RDC",
        source_url: item.source_url || null,
        source_icon: item.source_icon || null,
        category: categoryFormatted,
        pays: paysFormatted,
        langue: item.langue || "french",
        date_publication: item.date_publication || null,
        date_recuperation: item.date_recuperation || null,
        hash_article: item.hash_article || null,
        created_at: item.created_at || null,
        updated_at: item.updated_at || null,
        date: formattedDate !== "Date à confirmer" ? formattedDate : `${dateParts.day} ${dateParts.month}`,
        day: dateParts.day,
        month: dateParts.month,
        raw: item,
      };
    });
}

function mapApiCommuniques(data) {
  return getApiList(data)
    .filter((item) => item.est_publie !== false)
    .map((item) => {
      const files = Array.isArray(item.fichiers) ? item.fichiers : [];
      const imageFile = files.find((file) => String(file.type_mime ?? "").startsWith("image/"))?.fichier || item.fichier || files[0]?.fichier;
      const category = typeof item.categorie_id === "object"
        ? item.categorie_id?.nom || item.categorie_id?.libelle || item.categorie_id?.titre
        : null;
      return {
        id: item.id,
        title: item.titre || "Communiqué officiel",
        excerpt: stripHtml(item.resume || item.contenu || "Information officielle publiée par l'Ambassade."),
        date: formatCommuniqueDate(item.created_at || item.updated_at),
        category: category || "Communiqué officiel",
        image: getApiFileUrl(imageFile),
      };
    });
}

const publicServiceCards = [
  { title: "Délivrance de visas", description: "Informations pour l'entrée en République Démocratique du Congo, pièces à fournir et orientation vers le dépôt de dossier.", href: "/demandes?type=visa" },
  { title: "Production de passeports", description: "Préparation de la demande, vérification des pièces, rendez-vous consulaire et suivi du dossier à Bujumbura.", href: "/demandes?type=passeport" },
  { title: "Communiqués officiels", description: "Avis au public, annonces de fermeture, nouvelles dispositions consulaires et informations de la chancellerie.", href: "#actualites" },
];

const documents = [
  { id: "passeport", title: "Passeport biométrique", image: passportOne, items: ["Formulaire de demande", "Ancien passeport ou pièce d'identité", "Preuve de nationalité", "Rendez-vous de capture"] },
  { id: "laissez-passer", title: "Laissez-passer consulaire", image: passportTwo, items: ["Déclaration de perte si nécessaire", "Photo d'identité", "Justificatif de voyage", "Preuve d'identité congolaise"] },
  { id: "carte-consulaire", title: "Carte consulaire", image: passportOne, items: ["Copie du passeport", "Adresse au Burundi", "Photo récente", "Formulaire d'inscription"] },
  { id: "visa", title: "Visa et entrée en RDC", image: passportTwo, items: ["Passeport valide", "Invitation ou réservation", "Photo d'identité", "Motif du voyage"] },
  { id: "legalisation", title: "Légalisation et certification", image: passportOne, items: ["Document original", "Copie simple", "Pièce d'identité", "Preuve de paiement si applicable"] },
  { id: "procuration", title: "Procuration et attestation", image: passportTwo, items: ["Identité du mandant", "Identité du mandataire", "Objet de la procuration", "Signature devant l'agent consulaire"] },
  { id: "etat-civil", title: "Naissance, mariage, décès", image: passportOne, items: ["Acte local", "Pièces d'identité", "Livret ou justificatifs", "Demande de transcription"] },
  { id: "nationalite", title: "Nationalité et état civil", image: passportTwo, items: ["Preuve de filiation", "Actes originaux", "Copies certifiées", "Contact du demandeur"] },
];

const discover = [
  {
    title: "Villes",
    description: "Kinshasa, Lubumbashi, Goma et les grands centres urbains portent l'énergie économique et culturelle du pays.",
    image: rdcVillesImg,
    details: "Kinshasa est la capitale vibrante de la RDC et la plus grande métropole francophone au monde. Lubumbashi brille par sa puissance minière et industrielle, tandis que Goma et Bukavu sur les rives du lac Kivu attirent visiteurs et entrepreneurs du monde entier.",
    highlights: ["Kinshasa — Capitale culturelle & Mégapole", "Lubumbashi — Pôle économique du Katanga", "Goma & Bukavu — Tourisme & Lac Kivu"]
  },
  {
    title: "Gastronomie",
    description: "Des saveurs familiales, des produits locaux et une cuisine conviviale racontent les terroirs congolais.",
    image: rdcGastronomieImg,
    details: "La gastronomie congolaise est réputée pour sa générosité. Le Poulet à la Moambé (plat national à base de noix de palme), le Fufu de manioc, le Liboke de poisson cuit dans des feuilles de bananier et les bananes aloko accompagnent tous les grands rassemblements.",
    highlights: ["Poulet à la Moambé (Plat National)", "Liboke de poisson capitaine", "Fufu de Manioc & Mpondu"]
  },
  {
    title: "Parcs nationaux",
    description: "Virunga, Garamba, Salonga et d'autres réserves protègent une biodiversité exceptionnelle.",
    image: rdcParcsImg,
    details: "La RDC abrite 5 sites inscrits au patrimoine mondial de l'UNESCO. Le Parc National des Virunga protège les derniers gorilles de montagne, Salonga est la plus grande réserve de forêt tropicale humide d'Afrique, et Kahuzi-Biega accueille les gorilles de plaine.",
    highlights: ["Parc des Virunga — Gorilles de montagne", "Parc de la Salonga — Sanctuaire mondial UNESCO", "Parc de Kahuzi-Biega — Gorilles de plaine"]
  },
  {
    title: "Les lieux culturels",
    description: "Musées, arts, musique et patrimoine immatériel donnent à voir la profondeur de l'identité congolaise.",
    image: rdcCultureImg,
    details: "De la Rumba congolaise inscrite au patrimoine culturel immatériel de l'UNESCO aux masques royaux de l'art Kuba, Luba et Kongo, la RDC est un phare culturel mondial. Le Musée National de Kinshasa préserve plus de 45 000 pièces séculaires d'ethnographie.",
    highlights: ["Rumba Congolaise (UNESCO)", "Musée National de la RDC à Kinshasa", "Artisanat traditionnel Kuba & Luba"]
  },
  {
    title: "Sites historiques",
    description: "Des lieux de mémoire et des itinéraires historiques pour comprendre les grandes étapes du pays.",
    image: rdcHistoriqueImg,
    details: "Du Jardin Botanique de Kisantu créé en 1900 aux édifices historiques de la colonisation et de l'indépendance de 1960, le patrimoine historique congolais reflète la mémoire collective, le patriotisme et la dignité de toute une nation.",
    highlights: ["Mémorial de l'Indépendance", "Jardin Botanique de Kisantu (1900)", "Ancien Palais de la Nation"]
  },
  {
    title: "Sites naturels",
    description: "Fleuve Congo, volcans, forêts et paysages majestueux offrent une destination rare en Afrique centrale.",
    image: rdcNatureImg,
    details: "Le Fleuve Congo est le deuxième plus puissant fleuve du monde par son débit. Ses rapides majestueux à Kinsuka, le volcan Nyiragongo doté d'un des plus grands lacs de lave au monde, et les chutes de Zongo offrent des panoramas à couper le souffle.",
    highlights: ["Majestueux Fleuve Congo & Chutes de Zongo", "Volcan Nyiragongo & Lac de lave", "Lac Kivu & Ile d'Idjwi"]
  },
];

const requestTypes = documents.map((doc) => ({
  id: doc.id,
  apiId: doc.id === "passeport" ? PASSPORT_TYPE_DEMANDE_ID : null,
  title: doc.title === "Passeport biométrique" ? "Demande de passeport biométrique" : doc.title,
  shortTitle: doc.title,
  description: `Procédure consulaire pour ${doc.title.toLowerCase()} auprès de l'Ambassade de la RDC au Burundi.`,
  estimate: "Traitement initial sous 72h ouvrables après vérification du dossier.",
  fee: "Frais consulaires communiqués après validation du dossier.",
  fields: ["Nom complet", "Lieu et date de naissance", "Adresse au Burundi", "Téléphone", "Email", "Motif de la demande"],
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
      <div className="documents-skeleton-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index} className="overflow-hidden animate-pulse">
            <div className="h-44 bg-slate-200 dark:bg-slate-800" />
            <CardContent className="p-4 space-y-3">
              <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/3" />
              <div className="h-5 bg-slate-200 dark:bg-slate-800 rounded w-2/3" />
              <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-full" />
              <div className="h-9 bg-slate-200 dark:bg-slate-800 rounded-xl" />
            </CardContent>
          </Card>
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
    return (
      <Card className="p-8 text-center">
        <h3 className="text-lg font-semibold">Aucun document disponible</h3>
        <p className="text-sm text-slate-500 mt-1">Les services consulaires seront affichés dès leur publication.</p>
      </Card>
    );
  }

  return (
    <div className="documents-grid-wrap" aria-label="Documents de l'Ambassade">
      {isError ? <div className="documents-carousel-alert mb-4">Documents locaux affichés - service API momentanément indisponible.</div> : null}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DEFAULT_DOCUMENTS.map((doc) => (
          <DocumentCard key={doc.id} doc={doc} />
        ))}
      </div>
    </div>
  );
}

function AllDocumentsGrid({ documents: embassyDocuments, isLoading, isError }) {
  const [searchTerm, setSearchTerm] = React.useState("");

  if (isLoading) {
    return <DocumentSkeletonCarousel />;
  }

  const allDocs = DEFAULT_DOCUMENTS;

  const filteredDocs = allDocs.filter((doc) => {
    return doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.pieces.some(p => p.toLowerCase().includes(searchTerm.toLowerCase()));
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <Input
            type="text"
            placeholder="Rechercher un document (ex: visa, naissance)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 h-9 text-xs bg-slate-50 text-slate-900 border-slate-200"
          />
        </div>
        <div className="text-xs text-slate-500 font-medium self-end sm:self-center">
          {filteredDocs.length} document{filteredDocs.length > 1 ? "s" : ""} disponible{filteredDocs.length > 1 ? "s" : ""}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDocs.map((doc) => (
          <DocumentCard key={doc.id} doc={doc} />
        ))}
      </div>
    </div>
  );
}

const heroSlidesData = [
  {
    id: "slide-1",
    image: heroSlide1,
    badge: "Chancellerie Diplomatique",
    title: "Ambassade de la République Démocratique du Congo au Burundi",
    description: "Représentation diplomatique officielle, délivrance des passeports biométriques, visas, immatriculation consulaire et accompagnement de la communauté congolaise à Bujumbura.",
  },
  {
    id: "slide-2",
    image: heroSlide2,
    badge: "Guichet Consulaire Modernisé",
    title: "Services rapides & suivi en ligne des demandes consulaires",
    description: "Préparez vos formulaires administratifs à distance, prenez rendez-vous et suivez en temps réel la délivrance de vos documents officiels.",
  },
  {
    id: "slide-3",
    image: heroSlide3,
    badge: "Coopération & Rayonnement",
    title: "Renforcement des liens bilatéraux entre la RDC et le Burundi",
    description: "Promotion des opportunités d'investissement, affaires culturelles et protection des ressortissants congolais.",
  }
];

function HeroSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlidesData.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroSlidesData.length) % heroSlidesData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroSlidesData.length);
  };

  const currentSlide = heroSlidesData[currentIndex];

  return (
    <section
      className="relative bg-white dark:bg-[#161717] text-slate-900 dark:text-[#fafad6] overflow-hidden border-b border-[#f6f5f4] dark:border-[#2d2e2e]"
      aria-label="Accueil Ambassade RDC"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Flag Ribbon Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 flex z-30">
        <div className="w-1/3 bg-sky-500" />
        <div className="w-1/3 bg-amber-400" />
        <div className="w-1/3 bg-red-600" />
      </div>

      {/* Slide Background Container */}
      <div className="relative min-h-[500px] lg:min-h-[560px] flex items-center py-16 lg:py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${currentSlide.image}")` }}
          >
            {/* Dynamic Light/Dark Overlay Mask */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40 dark:from-[#161717]/98 dark:via-[#161717]/85 dark:to-[#161717]/40" />
          </motion.div>
        </AnimatePresence>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Hero Text Content */}
            <motion.div
              key={`text-${currentSlide.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-8 space-y-6"
            >
              <div className="flex items-center gap-2">
                <Badge variant="blue" className="text-xs font-bold px-3 py-1 bg-blue-800 text-white dark:bg-amber-400 dark:text-slate-950">
                  {currentSlide.badge}
                </Badge>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  RDC — Burundi
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900 dark:text-[#fafad6] tracking-tight">
                {currentSlide.title}
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-700 dark:text-slate-200 leading-relaxed max-w-2xl font-normal">
                {currentSlide.description}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="/demandes"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-800 hover:bg-blue-900 !text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <FileText className="h-4 w-4 !text-white shrink-0" />
                  <span className="!text-white font-bold">Demander un document consulaire</span>
                </a>

                <a
                  href="/actualites"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/90 hover:bg-white dark:bg-[#2d2e2e]/90 dark:hover:bg-[#3d3e3e] text-slate-900 dark:text-[#fafad6] border border-slate-300 dark:border-slate-700 font-semibold text-sm shadow-xs hover:shadow-md transition-all cursor-pointer backdrop-blur-sm"
                >
                  <Clock className="h-4 w-4 text-blue-700 dark:text-amber-400" />
                  <span>Communiqués & Actualités</span>
                </a>
              </div>

              {/* Information Strip */}
              <div className="pt-6 border-t border-slate-300/80 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-slate-800 dark:text-slate-200">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-700 dark:text-amber-400 shrink-0" />
                  <span>Avenue de la Révolution, Bujumbura</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-700 dark:text-amber-400 shrink-0" />
                  <span>Lun - Ven : 09h00 à 15h30</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-700 dark:text-amber-400 shrink-0" />
                  <span>+257 22 22 23 24</span>
                </div>
              </div>
            </motion.div>

            {/* Theme-Adaptive Coat of Arms Badge */}
            <motion.div
              className="lg:col-span-4 hidden lg:flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative p-7 rounded-3xl bg-white/90 dark:bg-[#1d1f1f]/90 border border-slate-200 dark:border-[#2d2e2e] shadow-xl backdrop-blur-md text-center max-w-sm">
                <div className="h-28 w-28 mx-auto mb-4 p-2.5 bg-slate-50 dark:bg-[#161717] rounded-2xl flex items-center justify-center border border-slate-200 dark:border-[#2d2e2e] shadow-inner">
                  <img src={logoAmbassade} alt="Armoiries RDC - Mode clair" className="logo-dark-artwork h-full object-contain" />
                  <img src={logoAmbassadeLight} alt="Armoiries RDC - Mode sombre" className="logo-light-artwork h-full object-contain" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-[#fafad6] tracking-tight">
                  Ambassade RDC au Burundi
                </h3>
                <p className="text-xs text-blue-700 dark:text-amber-300 font-bold mt-1">
                  Justice - Paix - Travail
                </p>
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400">
                  Représentation officielle & Chancellerie générale
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Carousel Navigation Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Image précédente"
          className="absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-900 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 shadow-md flex items-center justify-center transition-all cursor-pointer"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Image suivante"
          className="absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-900 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 shadow-md flex items-center justify-center transition-all cursor-pointer"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots Pagination Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {heroSlidesData.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Aller à l'image ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                currentIndex === idx
                  ? "w-8 bg-blue-700 dark:bg-amber-400"
                  : "w-2.5 bg-slate-400/60 hover:bg-slate-600 dark:bg-slate-600/60 dark:hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  const [activeCommunique, setActiveCommunique] = React.useState(null);

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

  const communiquesQuery = useQuery({
    queryKey: ["home-communiques"],
    queryFn: ({ signal }) => fetchCommuniques(signal),
    staleTime: 5 * 60 * 1000,
  });
  const apiCommuniques = React.useMemo(() => mapApiCommuniques(communiquesQuery.data), [communiquesQuery.data]);
  const displayedCommuniques = React.useMemo(() => shuffleDisplayItems(apiCommuniques.length ? apiCommuniques : communiques), [apiCommuniques]);
  const featuredCommunique = displayedCommuniques[0];

  const actualitesQuery = useQuery({
    queryKey: ["home-actualites"],
    queryFn: ({ signal }) => fetchActualites(signal),
    staleTime: 5 * 60 * 1000,
  });
  const apiActualites = React.useMemo(() => mapApiActualites(actualitesQuery.data), [actualitesQuery.data]);
  const displayedActualites = React.useMemo(() => shuffleDisplayItems(apiActualites.length ? apiActualites : news.map((item) => ({ ...item, description: "Ambassade RDC au Burundi - Bujumbura", source: "Ambassade RDC au Burundi", url: "#actualites" }))), [apiActualites]);

  return (
    <main className="site-shell">
      <TopBar />
      <SiteHeader />

      {/* Hero Slider */}
      <HeroSlider />

      {/* Quick Access Section - Uniform Section Theme Background */}
      <section className="py-14 bg-[#f7f5f3] dark:bg-[#1d1f1f] border-y border-[#f6f5f4] dark:border-[#2d2e2e]" id="grand-public">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Informations utiles pour le public</h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Accédez directement aux services officiels et orientations administratives de la Chancellerie.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white dark:bg-[#161717] border-[#f6f5f4] dark:border-[#2d2e2e] p-6 flex flex-col justify-between shadow-xs hover:border-blue-500 hover:shadow-md transition-all group">
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 w-fit group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FileBadge className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Démarches & Pré-demandes en ligne
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Remplissez vos formulaires de passeport biométrique, visa ou carte consulaire à distance avant votre passage à l'Ambassade.
                </p>
              </div>
              <div className="pt-6">
                <a
                  href="/demandes"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-800 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 hover:gap-3 transition-all"
                >
                  <span>Démarrer ma démarche</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </Card>

            <Card className="bg-white dark:bg-[#161717] border-[#f6f5f4] dark:border-[#2d2e2e] p-6 flex flex-col justify-between shadow-xs hover:border-blue-500 hover:shadow-md transition-all group">
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 w-fit group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <Newspaper className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Communiqués & Avis Officiels
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Consultez les dernières notes d'information, avis à la communauté et communiqués émis par le Ministère et la Chancellerie.
                </p>
              </div>
              <div className="pt-6">
                <a
                  href="/actualites"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-800 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 hover:gap-3 transition-all"
                >
                  <span>Lire les communiqués</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </Card>

            <Card className="bg-white dark:bg-[#161717] border-[#f6f5f4] dark:border-[#2d2e2e] p-6 flex flex-col justify-between shadow-xs hover:border-blue-500 hover:shadow-md transition-all group">
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 w-fit group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Catalogue des Pièces Requises
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Consultez la liste exhaustive des documents exigés pour chaque prestation administrative (frais, délais et conditions).
                </p>
              </div>
              <div className="pt-6">
                <a
                  href="/documents"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-800 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 hover:gap-3 transition-all"
                >
                  <span>Voir la liste des documents</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Chancellerie Services - Adaptive Theme */}
      <section className="py-14 bg-white dark:bg-[#161717] border-y border-[#f6f5f4] dark:border-[#2d2e2e]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Services au Public</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Missions administratives et consulaires assurées au guichet de Bujumbura.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {publicServiceCards.map((service) => (
              <a href={service.href} key={service.title} className="block group">
                <Card className="h-full p-6 bg-[#f7f5f3] dark:bg-[#1d1f1f] border-[#f6f5f4] dark:border-[#2d2e2e] shadow-xs hover:border-blue-500 hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="h-11 w-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 flex items-center justify-center group-hover:bg-blue-800 group-hover:text-white transition-colors">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-blue-800 dark:text-blue-400 group-hover:gap-2.5 transition-all">
                    <span>Accéder au service</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Ambassador Welcome - Centered & Balanced Layout */}
      <section className="welcome py-16 bg-[#f7f5f3] dark:bg-[#1d1f1f] border-y border-[#f6f5f4] dark:border-[#2d2e2e]" id="ambassade">
        <div className="container max-w-5xl">
          {/* Centered Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Bienvenue sur le portail officiel de l'Ambassade
            </h2>
            <p className="text-sm sm:text-base font-semibold text-blue-800 dark:text-blue-400 mt-2">
              Représentation de la République Démocratique du Congo auprès de la République du Burundi
            </p>
          </div>

          {/* Balanced Card Grid */}
          <div className="bg-white dark:bg-[#161717] rounded-3xl p-6 sm:p-10 border border-[#f6f5f4] dark:border-[#2d2e2e] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl shadow-md border border-[#f6f5f4] dark:border-[#2d2e2e] bg-[#f7f5f3] dark:bg-[#1d1f1f]">
                  <div
                    className="h-[380px] bg-cover bg-center relative"
                    style={{ backgroundImage: `url("${presidentImage}")` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md text-white border border-slate-800">
                      <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider">Représentation Officielle</span>
                      <p className="font-bold text-sm text-white mt-0.5">S.E.M. Félix Antoine TSHISEKEDI TSHILOMBO</p>
                      <p className="text-xs text-slate-300">Président de la République Démocratique du Congo</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="grid grid-cols-1 gap-3 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  <div className="p-4 rounded-2xl bg-[#f7f5f3] dark:bg-[#1d1f1f] border border-[#f6f5f4] dark:border-[#2d2e2e]">
                    <p className="font-medium text-slate-800 dark:text-slate-200">
                      Ce portail rapproche l'administration consulaire des ressortissants congolais, des partenaires institutionnels et du grand public au Burundi.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#f7f5f3] dark:bg-[#1d1f1f] border border-[#f6f5f4] dark:border-[#2d2e2e]">
                    <p>
                      Vous y trouverez les informations officielles, les services de chancellerie, les communiqués et les orientations utiles pour préparer vos démarches.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#f7f5f3] dark:bg-[#1d1f1f] border border-[#f6f5f4] dark:border-[#2d2e2e]">
                    <p>
                      L'Ambassade demeure mobilisée pour protéger les intérêts de la République Démocratique du Congo, accompagner sa diaspora et renforcer la coopération avec le Burundi.
                    </p>
                  </div>
                </div>

                {/* Centered Actions */}
                <div className="pt-4 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <a href="/documents">
                    <button className="bg-blue-800 hover:bg-blue-900 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-bold px-6 py-3.5 rounded-xl text-xs inline-flex items-center gap-2 transition-all cursor-pointer shadow-sm">
                      <span>Consulter tous les services</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </a>
                  <a href="/contact">
                    <button className="bg-[#f7f5f3] hover:bg-[#e2e0dc] dark:bg-[#2d2e2e] dark:hover:bg-[#3d3e3e] text-slate-800 dark:text-[#fafad6] font-bold px-6 py-3.5 rounded-xl text-xs border border-[#f6f5f4] dark:border-[#2d2e2e] inline-flex items-center gap-2 transition-all cursor-pointer">
                      <span>Demander une audience</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leaders Grid - Adaptive Theme */}
      <section className="py-14 bg-white dark:bg-[#161717] border-y border-[#f6f5f4] dark:border-[#2d2e2e]">
        <div className="container">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Dirigeants et Représentation</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Haute direction de la République Démocratique du Congo et diplomatie.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((leader) => (
              <Card key={leader.name} className="bg-[#f7f5f3] dark:bg-[#1d1f1f] border-[#f6f5f4] dark:border-[#2d2e2e] text-slate-900 dark:text-white overflow-hidden group hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all shadow-xs">
                <div className="h-52 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url("${leader.image}")` }} />
                <CardContent className="p-4">
                  <h3 className="font-bold text-sm text-blue-950 dark:text-amber-300 group-hover:text-blue-700 dark:group-hover:text-amber-200 transition-colors">{leader.name}</h3>
                  <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">{leader.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 bg-[#f7f5f3] dark:bg-[#1d1f1f] border-y border-[#f6f5f4] dark:border-[#2d2e2e]" id="documents">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Documents de l'Ambassade</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Retrouvez les principales catégories de documents et pièces à préparer avant votre rendez-vous consulaire à Bujumbura.</p>
            </div>
            <a href="/documents">
              <Button variant="outline" className="gap-2 shrink-0">
                <span>Voir tout le catalogue</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>

          <EmbassyDocumentCards
            documents={embassyDocuments}
            isLoading={embassyDocumentsQuery.isLoading}
            isError={embassyDocumentsQuery.isError}
          />
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-white dark:bg-[#161717]" id="actualites">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Dernières Nouvelles</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Retrouvez toutes les dépêches, informations et actualités officielles diffusées par la Chancellerie.</p>
            </div>
            <a href="/actualites">
              <Button variant="outline" className="gap-2 shrink-0 border-[#f6f5f4] dark:border-[#2d2e2e] bg-[#f7f5f3] dark:bg-[#1d1f1f] text-slate-900 dark:text-[#fafad6] hover:bg-[#e2e0dc] dark:hover:bg-[#3d3e3e]">
                <span>Voir toutes les actualités</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayedActualites.slice(0, 3).map((item) => (
              <Card key={item.id ?? item.title} className="flex flex-col h-full bg-[#f7f5f3] dark:bg-[#1d1f1f] overflow-hidden hover:shadow-xl transition-all border-[#f6f5f4] dark:border-[#2d2e2e]">
                <div className="h-48 w-full bg-cover bg-center relative" style={{ backgroundImage: `url("${item.image}")` }}>
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-lg flex items-center gap-1.5 font-medium">
                    <CalendarDays size={13} className="text-amber-400" />
                    <span>{item.day} {item.month}</span>
                  </div>
                </div>

                <CardContent className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
                        {item.source}
                      </span>
                      {item.category && (
                        <span className="text-[10px] font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/80 px-2 py-0.5 rounded-md">{item.category}</span>
                      )}
                    </div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <ActualiteDetailDialog item={item} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Communiqués Section */}
      <section className="py-16 bg-[#f7f5f3] dark:bg-[#1d1f1f] border-y border-[#f6f5f4] dark:border-[#2d2e2e]">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Communiqués Officiels</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Avis, annonces et notes d'information diffusés par l'Ambassade de la RDC.</p>
            </div>
            <a href="/actualites">
              <Button variant="outline" className="gap-2 shrink-0 border-[#e2e0dc] dark:border-[#2d2e2e] bg-white dark:bg-[#161717] text-slate-900 dark:text-[#fafad6]">
                <span>Tous les communiqués</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>

          <Card className="overflow-hidden mb-8 border-[#f6f5f4] dark:border-[#2d2e2e] bg-white dark:bg-[#161717] shadow-sm hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div
                className="lg:col-span-5 h-64 lg:h-auto bg-cover bg-center min-h-[260px] relative"
                style={{ backgroundImage: `url("${featuredCommunique.image || passportOne}")` }}
              >
                <div className="absolute top-3 left-3 bg-blue-900/90 text-white text-[11px] font-bold px-3 py-1 rounded-md backdrop-blur-xs flex items-center gap-1.5">
                  <Bell className="h-3.5 w-3.5 text-amber-400" />
                  <span>Dernier communiqué</span>
                </div>
              </div>
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-3 mb-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <span className="px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 font-semibold border border-amber-200 dark:border-amber-900/50">
                      {featuredCommunique.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5 text-slate-400" />
                      <span>{featuredCommunique.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                    {featuredCommunique.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {featuredCommunique.excerpt}
                  </p>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="default" className="w-fit gap-2">
                      <span>Lire le communiqué complet</span>
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-xl bg-white dark:bg-[#161717] border-[#f6f5f4] dark:border-[#2d2e2e] text-slate-900 dark:text-[#fafad6]">
                    <DialogHeader>
                      <span className="w-fit mb-2 text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-900/50">
                        {featuredCommunique.category}
                      </span>
                      <DialogTitle className="text-xl font-bold text-slate-900 dark:text-white">{featuredCommunique.title}</DialogTitle>
                      <DialogDescription className="text-xs text-slate-500 dark:text-slate-400">{featuredCommunique.date}</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      <p>{featuredCommunique.excerpt}</p>
                      <div className="p-4 rounded-xl bg-[#f7f5f3] dark:bg-[#1d1f1f] border border-[#f6f5f4] dark:border-[#2d2e2e] flex items-center gap-3">
                        <FileCheck className="h-5 w-5 text-blue-600 shrink-0" />
                        <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                          Document officiel certifié conforme par la Chancellerie de l'Ambassade de la République Démocratique du Congo à Bujumbura.
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {displayedCommuniques.slice(1, 4).map((item) => (
              <Card key={item.id ?? item.title} className="p-5 border-[#f6f5f4] dark:border-[#2d2e2e] bg-white dark:bg-[#161717] flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-md">
                      {item.category}
                    </span>
                    <span className="text-slate-400 font-medium flex items-center gap-1 text-[11px]">
                      <CalendarDays className="h-3 w-3" />
                      {item.date}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-2">{item.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">{item.excerpt}</p>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-xs font-semibold text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 inline-flex items-center gap-1.5 cursor-pointer pt-3 group">
                      <span>Consulter le communiqué</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="bg-white dark:bg-[#161717] border-[#f6f5f4] dark:border-[#2d2e2e] text-slate-900 dark:text-[#fafad6]">
                    <DialogHeader>
                      <DialogTitle className="text-slate-900 dark:text-white">{item.title}</DialogTitle>
                      <DialogDescription className="text-slate-500 dark:text-slate-400">{item.date} • {item.category}</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      <p>{item.excerpt}</p>
                      <div className="p-3.5 rounded-xl bg-[#f7f5f3] dark:bg-[#1d1f1f] border border-[#f6f5f4] dark:border-[#2d2e2e] text-xs text-slate-500">
                        Chancellerie de l'Ambassade de la RDC à Bujumbura.
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Discover RDC Section - Adaptive Theme */}
      <section className="py-16 bg-white dark:bg-[#161717] border-t border-[#f6f5f4] dark:border-[#2d2e2e]" id="rdc">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white">Découvrir le Cœur de l'Afrique</h2>
              <p className="mt-3 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                La RDC est un pays continent au cœur de l'Afrique, marqué par la majesté du Fleuve Congo, la richesse de son patrimoine culturel, la diversité de ses 26 provinces et le dynamisme de sa population.
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default" className="gap-2 shrink-0 cursor-pointer bg-blue-800 hover:bg-blue-900 text-white">
                  <span>Voir plus de détails</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl bg-white dark:bg-[#161717] border-[#f6f5f4] dark:border-[#2d2e2e] text-slate-900 dark:text-[#fafad6]">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold text-slate-900 dark:text-white">Aperçu Général de la République Démocratique du Congo</DialogTitle>
                  <DialogDescription className="text-xs text-slate-500 dark:text-slate-400">Patrimoine naturel, culturel et géographique d'Afrique Centrale</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  <p>
                    Deuxième plus grand pays d'Afrique par sa superficie (2 345 409 km²), la RDC compte 26 provinces aux identités riches et diverses. Traversée par l'Équateur, elle possède la deuxième plus grande forêt tropicale humide au monde après l'Amazonie.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-[#f7f5f3] dark:bg-[#1d1f1f] border border-[#f6f5f4] dark:border-[#2d2e2e]">
                      <strong className="block font-bold text-blue-900 dark:text-amber-300 mb-1">Capitale & Grandes Villes</strong>
                      <p className="text-xs">Kinshasa, Lubumbashi, Goma, Kisangani, Bukavu, Mbuji-Mayi, Matadi.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#f7f5f3] dark:bg-[#1d1f1f] border border-[#f6f5f4] dark:border-[#2d2e2e]">
                      <strong className="block font-bold text-blue-900 dark:text-amber-300 mb-1">Langues Officielle & Nationales</strong>
                      <p className="text-xs">Français (officiel), Lingala, Swahili, Tshiluba, Kikongo.</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-10 p-4 rounded-2xl bg-[#f7f5f3] dark:bg-[#1d1f1f] border border-[#f6f5f4] dark:border-[#2d2e2e] text-center">
            <div>
              <strong className="text-2xl font-extrabold text-blue-900 dark:text-blue-400">26</strong>
              <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">Provinces</span>
            </div>
            <div>
              <strong className="text-2xl font-extrabold text-amber-600 dark:text-amber-400">9</strong>
              <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">Pays voisins</span>
            </div>
            <div>
              <strong className="text-2xl font-extrabold text-emerald-700 dark:text-emerald-400">80M+</strong>
              <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">Hectares d'espaces préservés</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {discover.map((item) => (
              <Card key={item.title} className="bg-[#f7f5f3] dark:bg-[#1d1f1f] border-[#f6f5f4] dark:border-[#2d2e2e] text-slate-900 dark:text-white overflow-hidden group hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all shadow-xs flex flex-col justify-between">
                <div>
                  <div className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url("${item.image}")` }} />
                  <CardContent className="p-5">
                    <h3 className="font-bold text-base text-blue-950 dark:text-amber-300 group-hover:text-blue-700 dark:group-hover:text-amber-200 transition-colors">{item.title}</h3>
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">{item.description}</p>
                  </CardContent>
                </div>

                <div className="px-5 pb-5 pt-1">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full text-xs font-semibold border-[#e2e0dc] dark:border-[#2d2e2e] bg-white dark:bg-[#161717] hover:bg-blue-50 dark:hover:bg-blue-950/40 text-blue-800 dark:text-amber-300 gap-1.5 cursor-pointer">
                        <span>Voir plus</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-lg bg-white dark:bg-[#161717] border-[#f6f5f4] dark:border-[#2d2e2e] text-slate-900 dark:text-[#fafad6]">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                          <span>{item.title}</span>
                        </DialogTitle>
                        <DialogDescription className="text-xs text-slate-500 dark:text-slate-400">Découvrez le patrimoine congolais</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-2">
                        <div className="h-48 w-full rounded-xl bg-cover bg-center shadow-xs" style={{ backgroundImage: `url("${item.image}")` }} />
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                          {item.details || item.description}
                        </p>
                        {item.highlights && item.highlights.length > 0 && (
                          <div className="space-y-2 pt-2 border-t border-[#f6f5f4] dark:border-[#2d2e2e]">
                            <strong className="text-xs font-bold text-blue-900 dark:text-amber-300 block uppercase tracking-wider">Points clés :</strong>
                            <ul className="space-y-1.5">
                              {item.highlights.map((point) => (
                                <li key={point} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-amber-400 shrink-0" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 p-6 sm:p-8 rounded-2xl bg-blue-900 dark:bg-[#1d1f1f] text-white border border-blue-950 dark:border-[#2d2e2e] shadow-md">
            <div>
              <h4 className="font-bold text-base sm:text-lg text-white">Vous planifiez un voyage ou une mission en RDC ?</h4>
              <p className="text-xs text-blue-100 dark:text-[#a7a8a8] mt-1">Consultez les modalités d'obtention de visa et préparez votre dossier avec la Chancellerie.</p>
            </div>
            <a href="/demandes?type=visa">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl text-xs transition-colors cursor-pointer shadow-sm shrink-0">
                Préparer ma demande de visa
              </button>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
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
    <main className="site-shell documents-page-shell">
      <TopBar />
      <SiteHeader />

      <section className="py-12 bg-white dark:bg-[#161717] text-slate-900 dark:text-[#fafad6] border-b border-[#f6f5f4] dark:border-[#2d2e2e]">
        <div className="container">
          <Badge variant="blue" className="mb-3">Services consulaires</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Tous les documents de l'Ambassade</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm max-w-2xl">
            Consultez toutes les catégories disponibles et démarrez directement la demande consulaire correspondant à votre dossier.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <AllDocumentsGrid
            documents={embassyDocuments}
            isLoading={embassyDocumentsQuery.isLoading}
            isError={embassyDocumentsQuery.isError}
          />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

const requerantFieldGroups = [
  {
    title: "Identité du requérant",
    fields: [
      { name: "nom", label: "Nom", placeholder: "Ex. KABONGO", required: true },
      { name: "post_nom", label: "Post-nom", placeholder: "Ex. MUKENDI", required: true },
      { name: "prenom", label: "Prénom", placeholder: "Ex. Jean", required: true },
      { name: "sexe", label: "Sexe", type: "select", required: true, options: [{ label: "Masculin", value: "M" }, { label: "Féminin", value: "F" }] },
      { name: "nationalite", label: "Nationalité", placeholder: "Ex. Congolaise", required: true },
      { name: "lieu_naissance", label: "Lieu de naissance", placeholder: "Ex. Kinshasa", required: true },
      { name: "date_naissance", label: "Date de naissance", type: "date", required: true },
    ],
  },
  {
    title: "Coordonnées et situation",
    fields: [
      { name: "profession", label: "Profession", placeholder: "Ex. Enseignant" },
      { name: "etat_civil", label: "État civil", type: "select", options: [{ label: "Célibataire", value: "celibataire" }, { label: "Marié(e)", value: "marie" }, { label: "Divorcé(e)", value: "divorce" }, { label: "Veuf/Veuve", value: "veuf" }] },
      { name: "telephone", label: "Téléphone", type: "tel", placeholder: "+257 ..." },
      { name: "email", label: "Email", type: "email", placeholder: "nom@example.com" },
      { name: "adresse_residence", label: "Adresse de résidence", placeholder: "Quartier, avenue, numéro", wide: true },
      { name: "code_postal", label: "Code postal", placeholder: "Ex. 0000" },
      { name: "adresse_rdc", label: "Adresse en RDC", placeholder: "Province, commune, quartier", wide: true },
    ],
  },
  {
    title: "Conjoint",
    fields: [
      { name: "nom_conjoint", label: "Nom du conjoint", placeholder: "Nom du conjoint" },
      { name: "post_nom_conjoint", label: "Post-nom du conjoint", placeholder: "Post-nom du conjoint" },
      { name: "prenom_conjoint", label: "Prénom du conjoint", placeholder: "Prénom du conjoint" },
      { name: "nationalite_conjoint", label: "Nationalité du conjoint", placeholder: "Ex. Congolaise" },
    ],
  },
  {
    title: "Parents et nationalités",
    fields: [
      { name: "nom_pere", label: "Nom du père", placeholder: "Nom du père" },
      { name: "post_nom_pere", label: "Post-nom du père", placeholder: "Post-nom du père" },
      { name: "prenom_pere", label: "Prénom du père", placeholder: "Prénom du père" },
      { name: "nationalite_pere", label: "Nationalité du père", placeholder: "Ex. Congolaise" },
      { name: "nom_mere", label: "Nom de la mère", placeholder: "Nom de la mère" },
      { name: "post_nom_mere", label: "Post-nom de la mère", placeholder: "Post-nom de la mère" },
      { name: "prenom_mere", label: "Prénom de la mère", placeholder: "Prénom de la mère" },
      { name: "nationalite_mere", label: "Nationalité de la mère", placeholder: "Ex. Congolaise" },
      { name: "nationalite_d_origine", label: "Nationalité d'origine", placeholder: "Ex. Congolaise" },
      { name: "nationalite_actuelle", label: "Nationalité actuelle", placeholder: "Ex. Congolaise" },
    ],
  },
];

function CommonRequerantFields({ values, onChange }) {
  return (
    <div className="space-y-4 sm:space-y-6">
      {requerantFieldGroups.map((group) => (
        <div key={group.title} className="p-3 sm:p-6 border border-slate-200/80 dark:border-slate-800/80 sm:border-0 bg-slate-50/70 sm:bg-[#f7f5f3] dark:bg-[#151616] dark:sm:bg-[#1d1f1f] rounded-xl sm:rounded-2xl">
          <h3 className="text-xs sm:text-base font-extrabold text-blue-900 dark:text-amber-300 mb-2.5 sm:mb-4 pb-1.5 border-b border-slate-200 dark:border-slate-800 uppercase sm:normal-case tracking-wider sm:tracking-normal">
            {group.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {group.fields.map((field) => (
              <div key={field.name} className={field.wide ? "sm:col-span-2" : ""}>
                <label className="block text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {field.label}
                  {field.required && <span className="text-red-500 ml-0.5">*</span>}
                </label>

                {field.type === "select" ? (
                  <select
                    value={values[field.name] || ""}
                    onChange={(e) => onChange(field.name, e.target.value)}
                    required={field.required}
                    className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#181919] px-3 h-11 sm:h-10 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-none appearance-none"
                  >
                    <option value="">Sélectionner</option>
                    {field.options?.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                ) : field.type === "date" ? (
                  <Input
                    type="date"
                    value={values[field.name] || ""}
                    onChange={(e) => onChange(field.name, e.target.value)}
                    required={field.required}
                    className="text-xs sm:text-sm h-11 sm:h-10 border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#181919] text-slate-900 dark:text-slate-100 shadow-none rounded-xl"
                  />
                ) : (
                  <Input
                    type={field.type ?? "text"}
                    placeholder={field.placeholder || field.label}
                    value={values[field.name] ?? ""}
                    onChange={(event) => onChange(field.name, event.target.value)}
                    required={field.required}
                    className="text-xs sm:text-sm h-11 sm:h-10 border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#181919] text-slate-900 dark:text-slate-100 shadow-none rounded-xl"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function DynamicDemandeFields({ champs, values, onChange }) {
  const activeChamps = React.useMemo(() => [...champs].filter((champ) => champ.actif).sort((a, b) => a.ordre - b.ordre), [champs]);

  if (!activeChamps.length) {
    return <div className="p-3.5 text-xs text-slate-500 italic bg-slate-50 dark:bg-[#181919] rounded-xl border border-slate-200 dark:border-slate-800">Aucun champ spécifique requis pour ce type de demande.</div>;
  }

  return (
    <div className="p-3 sm:p-6 border border-slate-200/80 dark:border-slate-800/80 sm:border-0 bg-slate-50/70 sm:bg-[#f7f5f3] dark:bg-[#151616] dark:sm:bg-[#1d1f1f] rounded-xl sm:rounded-2xl shadow-none">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {activeChamps.map((champ) => {
          const key = champ.id || champ.code;
          const value = values[champ.code] ?? champ.valeur_defaut ?? "";
          return (
            <div key={key}>
              <label className="block text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                {champ.libelle}
                {champ.obligatoire && <span className="text-red-500 ml-0.5">*</span>}
              </label>
              <Input
                type="text"
                placeholder={champ.placeholder || champ.libelle}
                value={value}
                onChange={(e) => onChange(champ.code, e.target.value)}
                required={champ.obligatoire}
                className="text-xs sm:text-sm h-11 sm:h-10 border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#181919] text-slate-900 dark:text-slate-100 shadow-none rounded-xl"
              />
              {champ.description && <small className="text-[10px] text-slate-400 mt-1 block">{champ.description}</small>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DocumentUploadList({ documents: requiredDocuments }) {
  const [selectedFiles, setSelectedFiles] = React.useState({});

  return (
    <div className="space-y-2">
      {requiredDocuments.map((item) => {
        const documentType = item.type_document_id ?? {};
        const key = item.id ?? documentType.code;
        const files = selectedFiles[key] ?? [];
        const fileLabel = files.length ? files.map((file) => file.name).join(", ") : "PDF, JPG ou PNG";

        return (
          <label key={key} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#181919] sm:bg-[#f7f5f3] sm:dark:bg-[#1d1f1f] hover:border-blue-400 cursor-pointer transition-all shadow-none gap-2 sm:gap-0">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <FileText className="h-4.5 w-4.5" />
              </div>
              <div>
                <span className="font-semibold text-xs text-slate-900 dark:text-white block">{documentType.nom}</span>
                <span className="text-[11px] text-slate-500 block">{item.commentaire || documentType.description || "Ajoutez une copie lisible."}</span>
                <Badge variant={item.obligatoire ? "destructive" : "outline"} className="text-[9px] mt-1">
                  {item.obligatoire ? "Obligatoire" : "Optionnel"}
                </Badge>
              </div>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center pt-2 sm:pt-0 border-t sm:border-0 border-slate-100 dark:border-slate-800">
              <span className="text-[11px] text-blue-600 dark:text-blue-400 font-medium truncate max-w-[150px] sm:max-w-[120px]">{fileLabel}</span>
              <Button type="button" variant="outline" size="sm" className="h-8 text-xs gap-1 border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 shadow-none rounded-lg">
                {files.length ? <CheckCircle2 className="h-3.5 w-3.5 text-green-500" /> : <UploadCloud className="h-3.5 w-3.5" />}
                <span>{files.length ? "Remplacer" : "Joindre"}</span>
              </Button>
            </div>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              className="hidden"
              multiple
              onChange={(e) => setSelectedFiles((current) => ({ ...current, [key]: Array.from(e.target.files ?? []) }))}
            />
          </label>
        );
      })}
    </div>
  );
}

function RequestsPage() {
  const params = new URLSearchParams(window.location.search);
  const selectedType = params.get("type") ?? PASSPORT_TYPE_DEMANDE_ID;
  const fallbackRequest = requestTypes.find((item) => item.id === selectedType) ?? requestTypes[0];

  const [requerantValues, setRequerantValues] = React.useState({});
  const [dynamicValues, setDynamicValues] = React.useState({});
  const [isConfirmed, setIsConfirmed] = React.useState(false);
  const [submitState, setSubmitState] = React.useState({ status: "idle", message: "" });
  const [currentStep, setCurrentStep] = React.useState(0);

  const typeDemandesQuery = useQuery({
    queryKey: ["request-type-demandes"],
    queryFn: ({ signal }) => fetchTypeDemandes(signal),
    staleTime: 5 * 60 * 1000,
  });

  const apiRequest = typeDemandesQuery.data?.find((item) => item.id === selectedType || item.code === selectedType);
  const selectedTypeId = apiRequest?.id ?? fallbackRequest.apiId ?? selectedType;
  const requestTitle = apiRequest?.titre ?? fallbackRequest.title;
  const requestDescription = apiRequest?.description ?? fallbackRequest.description;

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

  const requiredDocuments = documentsQuery.data?.length ? documentsQuery.data : mapLocalPieces(fallbackRequest.pieces);
  const dynamicChamps = champsQuery.data ?? [];

  const updateRequerant = (name, value) => setRequerantValues((curr) => ({ ...curr, [name]: value }));
  const updateDynamic = (name, value) => setDynamicValues((curr) => ({ ...curr, [name]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitState({ status: "loading", message: "Envoi de la demande en cours..." });
    try {
      const data = await submitDemande({
        type_demande_id: selectedTypeId,
        document_uploaded: true,
        requerant: requerantValues,
        champs_valeurs: [],
      });
      const reference = data?.numero || data?.reference || data?.id;
      const msg = reference ? `Demande envoyée avec succès. Référence: ${reference}` : "Demande envoyée avec succès.";
      setSubmitState({ status: "success", message: msg });
      toast.success(msg);
    } catch (err) {
      const msg = err.message || "Impossible d'envoyer la demande.";
      setSubmitState({ status: "error", message: msg });
      toast.error(msg);
    }
  };

  return (
    <main className="site-shell bg-white dark:bg-[#161717] min-h-screen">
      <TopBar />
      <SiteHeader />

      <section className="py-6 sm:py-10 bg-white dark:bg-[#161717] text-slate-900 dark:text-[#fafad6] border-b border-[#f6f5f4] dark:border-[#2d2e2e]">
        <div className="container px-4">
          <Badge variant="blue" className="mb-2">Formulaire consulaire</Badge>
          <h1 className="text-2xl sm:text-3xl font-bold">{requestTitle}</h1>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl">{requestDescription}</p>
        </div>
      </section>

      <section className="py-2 sm:py-12 bg-white sm:bg-[#f7f5f3] dark:bg-[#161717] dark:sm:bg-[#1d1f1f]">
        <div className="container max-w-4xl px-2 sm:px-4">
          <div className="p-2 sm:p-8 border-0 sm:border border-slate-200 dark:border-slate-800 shadow-none sm:shadow-sm bg-white dark:bg-[#161717] rounded-none sm:rounded-3xl">
            <div className="flex items-center justify-between pb-3 sm:pb-6 border-b border-slate-200 dark:border-slate-800 mb-3 sm:mb-6 overflow-x-auto gap-1.5 sm:gap-2">
              {[
                { title: "Identité requérant", step: 0 },
                { title: "Champs spécifiques", step: 1 },
                { title: "Pièces & Confirmation", step: 2 },
              ].map((s) => (
                <button
                  key={s.step}
                  type="button"
                  onClick={() => setCurrentStep(s.step)}
                  className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-2 rounded-xl cursor-pointer transition-all shrink-0 ${
                    currentStep === s.step
                      ? "bg-blue-800 text-white dark:bg-amber-400 dark:text-slate-950 font-bold shadow-xs"
                      : currentStep > s.step
                      ? "text-blue-700 dark:text-amber-400 bg-blue-50 dark:bg-blue-950/40"
                      : "text-slate-500 bg-slate-100 dark:bg-slate-800/40"
                  }`}
                >
                  <span className="h-5 w-5 rounded-full border border-current flex items-center justify-center text-[10px] font-extrabold shrink-0">
                    {s.step + 1}
                  </span>
                  <span className="text-[11px] sm:text-xs">{s.title}</span>
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {currentStep === 0 && <CommonRequerantFields values={requerantValues} onChange={updateRequerant} />}
              {currentStep === 1 && <DynamicDemandeFields champs={dynamicChamps} values={dynamicValues} onChange={updateDynamic} />}
              {currentStep === 2 && (
                <div className="space-y-4 sm:space-y-6">
                  <DocumentUploadList documents={requiredDocuments} />
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <label className="flex items-center gap-2.5 text-xs font-medium cursor-pointer text-slate-800 dark:text-slate-200">
                      <input
                        type="checkbox"
                        checked={isConfirmed}
                        onChange={(e) => setIsConfirmed(e.target.checked)}
                        className="rounded border-slate-300 text-blue-600 h-4 w-4"
                      />
                      <span>Je certifie l'exactitude des renseignements fournis.</span>
                    </label>
                  </div>
                </div>
              )}

              {submitState.message && (
                <div className={`p-3.5 rounded-xl text-xs font-medium ${submitState.status === "error" ? "bg-red-50 text-red-700 border border-red-200" : "bg-green-50 text-green-700 border border-green-200"}`}>
                  {submitState.message}
                </div>
              )}

              <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                {currentStep > 0 ? (
                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    type="button"
                    onClick={() => setCurrentStep((s) => s - 1)}
                    className="w-full sm:w-auto h-12 text-xs sm:text-sm px-6 font-bold rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 cursor-pointer transition-all"
                  >
                    Précédent
                  </motion.button>
                ) : <div className="hidden sm:block" />}

                {currentStep < 2 ? (
                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    whileHover={{ scale: 1.01 }}
                    type="button"
                    onClick={() => setCurrentStep((s) => s + 1)}
                    className="w-full sm:w-auto h-12 text-sm px-8 font-extrabold rounded-xl bg-blue-800 hover:bg-blue-900 text-white shadow-md cursor-pointer transition-all flex items-center justify-center gap-2"
                  >
                    <span>Continuer</span>
                    <ChevronRight size={18} />
                  </motion.button>
                ) : (
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.01 }}
                    type="submit"
                    disabled={!isConfirmed || submitState.status === "loading"}
                    className="w-full sm:w-auto h-12 text-sm sm:text-base px-8 font-extrabold rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md cursor-pointer transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitState.status === "loading" ? (
                      <>
                        <span className="animate-spin rounded-full h-4 w-4 border-2 border-slate-950 border-t-transparent" />
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <span>Soumettre la demande</span>
                    )}
                  </motion.button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function PersonalSpacePage() {
  const stats = [
    { label: "Dossiers ouverts", value: "3" },
    { label: "Rendez-vous", value: "1" },
    { label: "Documents validés", value: "6" },
    { label: "Notifications", value: "4" }
  ];

  const requests = [
    { type: "Carte consulaire", status: "Pièces à vérifier", date: "22 juillet 2026" },
    { type: "Passeport biométrie", status: "Rendez-vous confirmé", date: "25 juillet 2026" },
    { type: "Légalisation", status: "Prêt pour retrait", date: "29 juillet 2026" }
  ];

  return (
    <main className="dashboard-shell">
      <aside className="dashboard-sidebar">
        <a className="dashboard-logo" href="/">
          <img className="theme-logo logo-dark-artwork" src={logoAmbassade} alt="Ambassade RDC au Burundi" />
          <img className="theme-logo logo-light-artwork" src={logoAmbassadeLight} alt="Ambassade RDC au Burundi" />
        </a>
        <nav className="dashboard-nav">
          <a className="active" href="#">Tableau de bord</a>
          <a href="/demandes">Mes demandes</a>
          <a href="/documents">Guide consulaires</a>
        </nav>
        <a className="logout-link" href="/">Déconnexion</a>
      </aside>

      <section className="dashboard-main p-6 sm:p-10 space-y-8">
        <header className="flex items-center justify-between">
          <div>
            <Badge variant="blue" className="mb-1">Portail citoyen</Badge>
            <h1 className="text-2xl font-bold">Espace personnel</h1>
          </div>
          <ThemeToggle />
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-4 text-center">
              <span className="text-xs text-slate-500 font-medium block">{stat.label}</span>
              <strong className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 mt-1 block">{stat.value}</strong>
            </Card>
          ))}
        </div>

        <Card className="p-6">
          <h2 className="text-lg font-bold mb-4">Mes demandes récentes</h2>
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {requests.map((r) => (
              <div key={r.type} className="py-3 flex items-center justify-between">
                <div>
                  <strong className="text-sm font-semibold block">{r.type}</strong>
                  <span className="text-xs text-slate-400">{r.date}</span>
                </div>
                <Badge variant="gold">{r.status}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </main>
  );
}

function ContactPage() {
  return (
    <main className="site-shell bg-white dark:bg-[#161717] text-slate-900 dark:text-[#fafad6] min-h-screen">
      <TopBar />
      <SiteHeader />

      <section className="py-12 bg-white dark:bg-[#161717] text-slate-900 dark:text-[#fafad6] border-b border-[#f6f5f4] dark:border-[#2d2e2e]">
        <div className="container">
          <Badge variant="gold" className="mb-2">Nous contacter</Badge>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Contacts de l'Ambassade</h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Coordonnées et formulaires de contact direct.</p>
        </div>
      </section>

      <section className="py-6 sm:py-12 bg-white sm:bg-[#f7f5f3] dark:bg-[#161717] dark:sm:bg-[#1d1f1f] min-h-[60vh]">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4">
          <Card className="p-4 sm:p-6 bg-white dark:bg-[#161717] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-[#fafad6] shadow-none rounded-2xl">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-slate-900 dark:text-white">Envoyez-nous un message</h3>
            <form onSubmit={(e) => { e.preventDefault(); toast.success("Message envoyé à l'Ambassade."); }} className="space-y-3.5">
              <div>
                <label className="text-xs font-semibold mb-1 block text-slate-700 dark:text-slate-300">Votre email</label>
                <Input type="email" placeholder="nom@exemple.com" required className="text-xs h-10 bg-white dark:bg-[#181919] border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-[#fafad6] shadow-none rounded-xl" />
              </div>
              <div>
                <label className="text-xs font-semibold mb-1 block text-slate-700 dark:text-slate-300">Sujet</label>
                <Input type="text" placeholder="Sujet de votre message" required className="text-xs h-10 bg-white dark:bg-[#181919] border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-[#fafad6] shadow-none rounded-xl" />
              </div>
              <div>
                <label className="text-xs font-semibold mb-1 block text-slate-700 dark:text-slate-300">Message</label>
                <textarea rows={4} className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#181919] text-slate-900 dark:text-[#fafad6] p-3 text-xs focus:ring-2 focus:ring-blue-600 outline-none shadow-none" required />
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.01 }}
                type="submit"
                className="w-full h-12 text-sm font-extrabold rounded-xl bg-blue-800 hover:bg-blue-900 text-white shadow-md cursor-pointer transition-all flex items-center justify-center gap-2"
              >
                Envoyer le message
              </motion.button>
            </form>
          </Card>

          <Card className="p-4 sm:p-6 bg-white dark:bg-[#161717] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-[#fafad6] shadow-none rounded-2xl">
            <h3 className="text-base sm:text-lg font-bold mb-1.5 text-slate-900 dark:text-white">Audience avec l'Ambassadeur</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3.5 leading-relaxed">
              Demandez une rencontre officielle pour questions diplomatiques ou affaires communautaires.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); toast.success("Demande d'audience soumise."); }} className="space-y-3.5">
              <div>
                <label className="text-xs font-semibold mb-1 block text-slate-700 dark:text-slate-300">Nom Complet</label>
                <Input type="text" placeholder="Nom et prénom" required className="text-xs h-10 bg-white dark:bg-[#181919] border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-[#fafad6] shadow-none rounded-xl" />
              </div>
              <div>
                <label className="text-xs font-semibold mb-1 block text-slate-700 dark:text-slate-300">Email</label>
                <Input type="email" placeholder="nom@exemple.com" required className="text-xs h-10 bg-white dark:bg-[#181919] border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-[#fafad6] shadow-none rounded-xl" />
              </div>
              <div>
                <label className="text-xs font-semibold mb-1 block text-slate-700 dark:text-slate-300">Objet de la Rencontre</label>
                <textarea rows={4} className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#181919] text-slate-900 dark:text-[#fafad6] p-3 text-xs focus:ring-2 focus:ring-blue-600 outline-none shadow-none" required />
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.01 }}
                type="submit"
                className="w-full h-12 text-sm font-extrabold rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md cursor-pointer transition-all flex items-center justify-center gap-2"
              >
                Soumettre la demande d'audience
              </motion.button>
            </form>
          </Card>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function PaymentPage() {
  const bankInfo = [
    { label: "Banque:", value: "BANQUE COMMERCIALE DU BURUNDI (BCB)" },
    { label: "Agence:", value: "BUJUMBURA" },
    { label: "Titulaire:", value: "AMBASSADE DE LA RDC AU BURUNDI" },
  ];

  return (
    <main className="site-shell bg-white dark:bg-[#161717] text-slate-900 dark:text-[#fafad6] min-h-screen">
      <TopBar />
      <SiteHeader />
      <section className="py-12 bg-[#f7f5f3] dark:bg-[#1d1f1f] min-h-[60vh]">
        <div className="container max-w-2xl">
          <Card className="p-6 text-center space-y-6 bg-white dark:bg-[#161717] border border-[#f6f5f4] dark:border-[#2d2e2e] shadow-sm">
            <Badge variant="blue">Paiement</Badge>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Informations de Paiement</h1>
            <div className="space-y-2 text-left bg-[#f7f5f3] dark:bg-[#1d1f1f] p-4 rounded-xl text-xs border border-[#f6f5f4] dark:border-[#2d2e2e]">
              {bankInfo.map((b) => (
                <div key={b.label} className="flex justify-between border-b border-[#e2e0dc] dark:border-[#2d2e2e] pb-2 last:border-0">
                  <span className="font-semibold text-slate-500 dark:text-slate-400">{b.label}</span>
                  <span className="font-medium text-slate-900 dark:text-slate-200">{b.value}</span>
                </div>
              ))}
            </div>
            <a href="/contact">
              <Button variant="outline">Nous contacter</Button>
            </a>
          </Card>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

export default function App() {
  const [loading, setLoading] = React.useState(true);
  const [path, setPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const renderCurrentPage = () => {
    if (path.startsWith("/documents")) return <DocumentsPage />;
    if (path.startsWith("/demandes")) return <RequestsPage />;
    if (path.startsWith("/ambassade")) return <AmbassadePage SiteHeader={SiteHeader} SiteFooter={SiteFooter} />;
    if (path.startsWith("/actualites")) return <ActualitesPage SiteHeader={SiteHeader} SiteFooter={SiteFooter} />;
    if (path.startsWith("/espace-personnel")) return <PersonalSpacePage />;
    if (path.startsWith("/contact")) return <ContactPage />;
    if (path.startsWith("/payment")) return <PaymentPage />;
    return <HomePage />;
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <SplashScreen key="splash-loader" />}
      </AnimatePresence>
      {renderCurrentPage()}
      <NiandaChatbot />
    </>
  );
}
