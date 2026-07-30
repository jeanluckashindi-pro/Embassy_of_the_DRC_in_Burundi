import React from "react";
import { Badge } from "../components/ui/badge.jsx";
import { Card, CardContent } from "../components/ui/card.jsx";
import { Button } from "../components/ui/button.jsx";
import { MapPin, Mail, Phone, Globe, Clock, ShieldCheck, ArrowRight, UserCheck, Landmark, Building2, Award } from "lucide-react";
import { TopBar } from "../App.jsx";

import thereseKayikwambaImg from "../assets/images/therese_kayikwamba_jpg_1785441674768.jpg";
import crispinMbaduImg from "../assets/images/crispin_mbadu_jpg_1785441686017.jpg";
import noellaAyeganagatoImg from "../assets/images/noella_ayeganagato_jpg_1785441695918.jpg";
import ambassadorWillyMulumbaImg from "../assets/images/ambassador_willy_mulumba_1785442280044.jpg";

const presidentImage = "/images/president.webp";
const presidentTwo = "/images/president_2.jpg";
const firstLadyImage = "/images/premiere_dame_2.jpg";

const diplomaticLeaders = [
  { name: "S.E.M. Félix Antoine TSHISEKEDI TSHILOMBO", role: "Président de la République Démocratique du Congo, Chef de l'État", image: presidentImage },
  { name: "S.E. Judith SUMINWA TULUKA", role: "Première Ministre de la République Démocratique du Congo", image: firstLadyImage },
  { name: "S.E. Thérèse KAYIKWAMBA WAGNER", role: "Ministre d'État, Ministre des Affaires Étrangères", image: thereseKayikwambaImg },
  { name: "S.E. Crispin MBADU PHANZU", role: "Ministre délégué en charge de la Diaspora", image: crispinMbaduImg },
  { name: "S.E. Noëlla AYEGANAGATO NAKWIPONE", role: "Vice-Ministre des Affaires Étrangères", image: noellaAyeganagatoImg },
  { name: "S.E. Willy MULUMBA", role: "Ambassadeur Extraordinaire et Plénipotentiaire de la RDC au Burundi", image: ambassadorWillyMulumbaImg },
];

export function AmbassadePage({ SiteHeader, SiteFooter }) {
  return (
    <main className="site-shell bg-white dark:bg-[#161717] text-slate-900 dark:text-[#fafad6] min-h-screen">
      <TopBar />
      <SiteHeader />

      {/* Hero Header */}
      <section className="py-16 bg-[#ffffff] dark:bg-[#161717] text-slate-900 dark:text-[#fafad6] border-b border-[#f6f5f4] dark:border-[#2d2e2e]">
        <div className="container max-w-5xl">
          <Badge variant="blue" className="mb-3">Mission Diplomatique</Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-[#fafad6] tracking-tight leading-tight">
            Ambassade de la République Démocratique du Congo au Burundi
          </h1>
          <p className="mt-4 text-slate-600 dark:text-[#a7a8a8] text-base sm:text-lg max-w-3xl leading-relaxed">
            La Chancellerie de la République Démocratique du Congo à Bujumbura veille aux relations bilatérales, à la protection des ressortissants congolais et à la promotion de la coopération économique et culturelle avec le Burundi.
          </p>
        </div>
      </section>

      {/* Message du Chef de Mission */}
      <section className="py-16 bg-[#ffffff] dark:bg-[#161717]">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <Card className="bg-[#f7f5f3] dark:bg-[#1d1f1f] border-[#f6f5f4] dark:border-[#2d2e2e] overflow-hidden shadow-lg">
                <div
                  className="h-[440px] bg-cover bg-center relative"
                  style={{ backgroundImage: `url("${presidentImage}")` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 text-white">
                    <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">Chef de l'État</span>
                    <p className="font-bold text-sm text-white mt-0.5">S.E.M. Félix Antoine TSHISEKEDI TSHILOMBO</p>
                    <p className="text-xs text-slate-300">Président de la RDC</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <Badge variant="blue">Mot d'Accueil</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#fafad6] leading-tight">
                Bienvenue à la Chancellerie de Bujumbura
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-[#a7a8a8] text-sm leading-relaxed">
                <p>
                  L'Ambassade de la RDC au Burundi a pour vocation de servir de pont solidaire et diplomatique entre la République Démocratique du Congo et la République du Burundi.
                </p>
                <p>
                  À travers ses services consulaires modernisés, la Chancellerie s'engage à garantir un accès fluide et transparent aux actes administratifs (passeports biométriques, visas, immatriculation consulaire, actes d'état civil, légalisations).
                </p>
                <p>
                  Nous accompagnons au quotidien les membres de la communauté congolaise résidant au Burundi ainsi que les investisseurs, étudiants et visiteurs désirant se rendre en République Démocratique du Congo.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a href="/documents">
                  <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold px-6 py-3 rounded-xl text-xs inline-flex items-center gap-2 transition-colors cursor-pointer">
                    <span>Consulter les services consulaires</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </a>
                <a href="/contact">
                  <button className="bg-[#f7f5f3] hover:bg-[#e2e0dc] dark:bg-[#2d2e2e] dark:hover:bg-[#3d3e3e] text-slate-800 dark:text-[#fafad6] font-bold px-6 py-3 rounded-xl text-xs border border-[#f6f5f4] dark:border-[#2d2e2e] inline-flex items-center gap-2 transition-colors cursor-pointer">
                    <span>Prendre rendez-vous / Contact</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diplomatic Missions & Roles */}
      <section className="py-16 bg-[#f7f5f3] dark:bg-[#1d1f1f] border-y border-[#f6f5f4] dark:border-[#2d2e2e]">
        <div className="container max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="gold" className="mb-2">Nos Attributions</Badge>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-[#fafad6]">Missions Stratégiques</h2>
            <p className="text-xs text-slate-500 dark:text-[#a7a8a8] mt-2">Les trois piliers d'action de l'Ambassade à Bujumbura.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white dark:bg-[#161717] border-[#f6f5f4] dark:border-[#2d2e2e] p-6 space-y-3 shadow-xs">
              <div className="h-10 w-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-[#fafad6]">Protection Consulaire</h3>
              <p className="text-xs text-slate-600 dark:text-[#a7a8a8] leading-relaxed">
                Assister les ressortissants congolais, délivrer les pièces d'identité administratives et préserver les droits de la communauté au Burundi.
              </p>
            </Card>

            <Card className="bg-white dark:bg-[#161717] border-[#f6f5f4] dark:border-[#2d2e2e] p-6 space-y-3 shadow-xs">
              <div className="h-10 w-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold">
                <Landmark className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-[#fafad6]">Diplomatie Bilatérale</h3>
              <p className="text-xs text-slate-600 dark:text-[#a7a8a8] leading-relaxed">
                Renforcer les accords bilatéraux, la sécurité transfrontalière et les échanges fraternels entre la RDC et le Burundi.
              </p>
            </Card>

            <Card className="bg-white dark:bg-[#161717] border-[#f6f5f4] dark:border-[#2d2e2e] p-6 space-y-3 shadow-xs">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold">
                <Building2 className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-[#fafad6]">Coopération Économique</h3>
              <p className="text-xs text-slate-600 dark:text-[#a7a8a8] leading-relaxed">
                Faciliter les investissements transfrontaliers, le commerce et l'intégration au sein de la CEPGL et de la CAE.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Diplomatic Leaders */}
      <section className="py-16 bg-[#ffffff] dark:bg-[#161717]">
        <div className="container max-w-6xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <Badge variant="gold" className="mb-2">Hautes Autorités</Badge>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Dirigeants & Représentation</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diplomaticLeaders.map((leader) => (
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

      <SiteFooter />
    </main>
  );
}
