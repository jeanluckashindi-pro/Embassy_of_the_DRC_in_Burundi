import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, ExternalLink, Minimize2, Maximize2, Sparkles, FileBadge, FileText, CreditCard, Clock, Coins } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const INITIAL_MESSAGES = [
  {
    id: "welcome",
    sender: "bot",
    text: "Bonjour ! Je suis **Nianda**, votre assistant virtuel consulaire de l'Ambassade de la République Démocratique du Congo au Burundi. 🇨🇩🇧🇮\n\nComment puis-je vous aider aujourd'hui ? Vous pouvez me poser des questions sur les visas, le passeport biométrique, la carte consulaire, les actes d'état civil, les tarifs ou les prises de rendez-vous.",
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    actions: [
      { label: "Passeport Biométrique", icon: FileBadge, query: "Comment obtenir un passeport biométrique ?" },
      { label: "Demande de Visa", icon: FileText, query: "Quelles sont les conditions pour obtenir un visa RDC ?" },
      { label: "Carte Consulaire", icon: CreditCard, query: "Comment s'inscrire à la carte consulaire ?" },
      { label: "Horaires & Contacts", icon: Clock, query: "Quels sont les horaires et l'adresse de l'Ambassade ?" },
      { label: "Tarifs Consulaires", icon: Coins, query: "Quels sont les frais consulaires ?" },
    ]
  }
];

function getNiandaResponse(userText) {
  const query = userText.toLowerCase();

  if (query.includes("passeport")) {
    return {
      text: "Pour la demande de **Passeport Biométrique Congolais** à l'Ambassade de Bujumbura :\n\n" +
        "📌 **DOCUMENTS REQUIS :**\n" +
        "• Formulaire de demande consulaire dûment complété\n" +
        "• Ancien passeport (si renouvellement) ou carte d'identité RDC\n" +
        "• Preuve de nationalité (Acte de naissance, certificat de nationalité)\n" +
        "• Attestation de résidence au Burundi ou carte d'immatriculation consulaire\n" +
        "• Rendez-vous de capture des empreintes et photo à la chancellerie\n\n" +
        "⏱ **Délai de traitement :** 10 à 15 jours ouvrables après capture.\n\n" +
        "Vous pouvez démarrer votre formulaire en ligne dès maintenant !",
      actionLink: { label: "Démarrer demande Passeport", href: "/demandes?type=passeport" }
    };
  }

  if (query.includes("visa") || query.includes("visiteur") || query.includes("entrée")) {
    return {
      text: "Pour toute demande de **Visa d'entrée en République Démocratique du Congo** :\n\n" +
        "📌 **DOCUMENTS REQUIS :**\n" +
        "• Formulaire de demande correctement rempli\n" +
        "• Passeport valide d'au moins 6 mois\n" +
        "• 2 photos d'identité récentes (fond blanc)\n" +
        "• Lettre d'invitation légalisée ou réservation d'hôtel\n" +
        "• Carnet de vaccination (Fièvre jaune obligatoire)\n" +
        "• Relevé bancaire des 3 derniers mois (si visa d'affaires)\n\n" +
        "⏱ **Délai :** 48h à 72h ouvrables.\n" +
        "💰 **Frais :** Selon le type de visa (Transit, 1 mois, 3 mois ou multiple).",
      actionLink: { label: "Dépôt de visa en ligne", href: "/demandes?type=visa" }
    };
  }

  if (query.includes("carte consulaire") || query.includes("immatriculation")) {
    return {
      text: "L'**Immatriculation Consulaire** est obligatoire pour tout citoyen congolais résidant au Burundi :\n\n" +
        "📌 **PIÈCES REQUISES :**\n" +
        "• Copie du passeport RDC valide\n" +
        "• Justificatif de domicile au Burundi (Avenue, Quartier, Commune)\n" +
        "• 2 photos d'identité passeport récentes\n" +
        "• Formulaire d'inscription consulaire complété\n\n" +
        "✅ **Avantages :** Protection consulaire, délivrance d'actes d'état civil, procurations et attestations.",
      actionLink: { label: "Demander la Carte Consulaire", href: "/demandes?type=carte-consulaire" }
    };
  }

  if (query.includes("horaire") || query.includes("adresse") || query.includes("contact") || query.includes("lieu") || query.includes("bujumbura")) {
    return {
      text: "📍 **AMBASSADE DE LA RDC AU BURUNDI**\n\n" +
        "🏢 **Chancellerie :** Avenue de la Révolution, Bujumbura, Burundi\n" +
        "🕒 **Horaires d'ouverture :** Lundi au Vendredi, de 09h00 à 15h30\n" +
        "📧 **Email officiel :** contact@ambardcbujumbura.cd\n" +
        "📞 **Standard téléphonique :** +257 22 22 23 24\n\n" +
        "Vous souhaitez demander une audience officielle avec S.E.M. l'Ambassadeur ?",
      actionLink: { label: "Prendre rendez-vous / Contact", href: "/contact" }
    };
  }

  if (query.includes("frais") || query.includes("tarif") || query.includes("prix") || query.includes("payer") || query.includes("banque")) {
    return {
      text: "💳 **INFORMATIONS FINANCIÈRES ET TARIFS CONSULAIRES**\n\n" +
        "• Tous les frais consulaires sont fixés selon le barème officiel du Ministère des Affaires Étrangères de la RDC.\n" +
        "• Le règlement s'effectue sur le compte bancaire de l'Ambassade à la **BCB (Banque Commerciale du Burundi)** ou au guichet consulaire.\n" +
        "• Les quittances officielles de versement vous seront délivrées lors du dépôt du dossier.",
      actionLink: { label: "Voir détails de paiement", href: "/payment" }
    };
  }

  if (query.includes("ambassadeur") || query.includes("audience") || query.includes("rencontre")) {
    return {
      text: "🏛️ **DEMANDE D'AUDIENCE ET RENCONTRE OFFICIELLE**\n\n" +
        "Les audiences avec S.E. l'Ambassadeur ou les Chefs de section diplomatique sont accordées sur demande écrite préalable.\n\n" +
        "Veuillez soumettre votre motif, votre identité et vos coordonnées dans notre formulaire d'audience en ligne.",
      actionLink: { label: "Demander une audience", href: "/contact" }
    };
  }

  return {
    text: `Merci pour votre question ! En tant qu'assistant de l'Ambassade (**Nianda**), je suis là pour vous orienter.\n\nPour votre demande concernant "${userText}", vous pouvez consulter le catalogue officiel de nos services ou remplir directement un formulaire de démarche consulaire.`,
    actionLink: { label: "Consulter tous les documents", href: "/documents" }
  };
}

export function NiandaChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized]);

  useEffect(() => {
    const handleOpenNianda = () => {
      setIsOpen(true);
      setIsMinimized(false);
    };
    window.addEventListener("open-nianda", handleOpenNianda);
    return () => window.removeEventListener("open-nianda", handleOpenNianda);
  }, []);

  const handleSend = (textToSend) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now().toString(),
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const responseData = getNiandaResponse(text);
      const botMsg = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: responseData.text,
        actionLink: responseData.actionLink,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* 1. Closed state floating launcher button */}
      {!isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-[999]">
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setIsOpen(true);
              setIsMinimized(false);
            }}
            className="flex items-center gap-2 sm:gap-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-3 sm:py-3 sm:px-4 rounded-full shadow-2xl border-2 border-blue-400 cursor-pointer group"
            aria-label="Ouvrir l'assistant Nianda"
          >
            <div className="relative flex items-center justify-center">
              <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-md">
                <Bot className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-emerald-500 border-2 border-blue-900 animate-pulse" />
            </div>
            <div className="text-left pr-0.5 sm:pr-1">
              <span className="text-[11px] sm:text-xs font-bold text-blue-200 block leading-tight">Nianda</span>
              <span className="text-[9px] sm:text-[10px] text-slate-200 hidden sm:block font-normal">Orientation Consulaire</span>
            </div>
            <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 text-blue-300 ml-0.5 sm:ml-1 group-hover:rotate-12 transition-transform" />
          </motion.button>
        </div>
      )}

      {/* 2. Minimized state dock bar */}
      {isOpen && isMinimized && (
        <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-[999]">
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setIsMinimized(false)}
            className="flex items-center gap-2.5 sm:gap-3 bg-slate-900 dark:bg-[#1D1F1F] hover:bg-slate-800 text-white py-2 px-3 sm:py-2.5 sm:px-4 rounded-2xl shadow-2xl border border-blue-500/60 cursor-pointer"
          >
            <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
              N
            </div>
            <div className="text-left">
              <span className="text-[11px] sm:text-xs font-bold text-white block">Nianda (Réduit)</span>
              <span className="text-[9px] sm:text-[10px] text-slate-400 block">Cliquez pour agrandir</span>
            </div>
            <Maximize2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-400 ml-1 sm:ml-2" />
          </motion.button>
        </div>
      )}

      {/* 3. Full Expanded Chat Window */}
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 w-[calc(100vw-24px)] sm:w-[410px] h-[540px] sm:h-[580px] max-h-[88vh] bg-white dark:bg-[#161717] border border-slate-200 dark:border-[#2D2E2E] rounded-2xl shadow-2xl z-[1000] flex flex-col overflow-hidden text-slate-900 dark:text-[#FAFAD6]"
          >
            {/* Header */}
            <div className="bg-blue-900 dark:bg-[#1D1F1F] p-3.5 sm:p-4 border-b border-blue-950 dark:border-[#2D2E2E] flex items-center justify-between text-white relative">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="relative">
                  <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md">
                    <Bot className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-emerald-500 border-2 border-blue-900" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-xs sm:text-sm text-white dark:text-[#FAFAD6]">Assistant Nianda</h3>
                    <span className="text-[9px] sm:text-[10px] bg-blue-800/60 text-blue-200 font-semibold px-2 py-0.5 rounded-full border border-blue-700/50">
                      RDC Consulat
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-blue-200 dark:text-[#A7A8A8]">Ambassade RDC à Bujumbura</p>
                </div>
              </div>

              {/* Header Action Controls */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(true)}
                  className="p-1.5 rounded-lg text-blue-200 dark:text-[#A7A8A8] hover:text-white hover:bg-blue-800 dark:hover:bg-[#2D2E2E] transition-colors cursor-pointer"
                  title="Réduire pour libérer l'espace"
                  aria-label="Réduire"
                >
                  <Minimize2 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-blue-200 dark:text-[#A7A8A8] hover:text-white hover:bg-blue-800 dark:hover:bg-[#2D2E2E] transition-colors cursor-pointer"
                  title="Fermer"
                  aria-label="Fermer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-blue-400 to-blue-800" />
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3.5 sm:space-y-4 text-xs bg-slate-50 dark:bg-[#1D1F1F]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 sm:gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "bot" && (
                    <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs shadow-xs">
                      N
                    </div>
                  )}

                  <div className="max-w-[88%] sm:max-w-[84%] space-y-1.5 sm:space-y-2">
                    <div
                      className={`p-3 sm:p-3.5 rounded-2xl leading-relaxed whitespace-pre-line shadow-xs ${
                        msg.sender === "user"
                          ? "bg-blue-800 dark:bg-blue-700 text-white rounded-tr-none"
                          : "bg-white dark:bg-[#161717] border border-slate-200 dark:border-[#2D2E2E] text-slate-800 dark:text-[#FAFAD6] rounded-tl-none"
                      }`}
                    >
                      {msg.text}

                      {msg.actionLink && (
                        <div className="mt-2.5 pt-2 border-t border-slate-200 dark:border-[#2D2E2E]">
                          <a
                            href={msg.actionLink.href}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs transition-colors"
                          >
                            <span>{msg.actionLink.label}</span>
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      )}
                    </div>

                    {msg.actions && (
                      <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-1">
                        {msg.actions.map((act, i) => {
                          const IconComponent = act.icon;
                          return (
                            <button
                              key={i}
                              onClick={() => handleSend(act.query)}
                              className="text-[10px] sm:text-[11px] bg-white hover:bg-blue-50 dark:bg-[#2D2E2E] dark:hover:bg-[#3D3E3E] border border-slate-200 dark:border-[#3D3E3E] text-blue-900 dark:text-[#FAFAD6] font-medium py-1 px-2 sm:py-1.5 sm:px-2.5 rounded-lg sm:rounded-xl flex items-center gap-1 sm:gap-1.5 text-left transition-all cursor-pointer shadow-xs hover:border-blue-400"
                            >
                              {IconComponent && <IconComponent className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-blue-700 dark:text-blue-400 shrink-0" />}
                              <span>{act.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    <span className="text-[9px] sm:text-[10px] text-slate-400 dark:text-[#A7A8A8] block text-right px-1">
                      {msg.timestamp}
                    </span>
                  </div>

                  {msg.sender === "user" && (
                    <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-blue-800 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      <User className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2.5 items-center text-slate-500 dark:text-[#A7A8A8] text-xs">
                  <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold text-xs">
                    N
                  </div>
                  <div className="bg-white dark:bg-[#161717] border border-slate-200 dark:border-[#2D2E2E] p-2.5 sm:p-3 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-blue-600 animate-bounce" />
                    <span className="h-2 w-2 rounded-full bg-blue-400 animate-bounce delay-150" />
                    <span className="h-2 w-2 rounded-full bg-blue-800 animate-bounce delay-300" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-2.5 sm:p-3 border-t border-slate-200 dark:border-[#2D2E2E] bg-white dark:bg-[#161717] flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Posez votre question à Nianda..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-slate-100 dark:bg-[#1D1F1F] border border-slate-200 dark:border-[#2D2E2E] rounded-xl px-3 py-2 sm:px-3.5 sm:py-2.5 text-xs text-slate-900 dark:text-[#FAFAD6] placeholder-slate-400 dark:placeholder-[#A7A8A8] focus:outline-none focus:border-blue-600 focus:bg-white dark:focus:bg-[#1D1F1F] transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="h-8 w-8 sm:h-9 sm:w-9 bg-blue-800 hover:bg-blue-900 disabled:opacity-40 text-white rounded-xl flex items-center justify-center transition-colors cursor-pointer shrink-0"
                aria-label="Envoyer"
              >
                <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
