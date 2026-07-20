import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ambassade RDC au Burundi | Services consulaires a Bujumbura",
  description:
    "Site officiel de l'Ambassade de la Republique Democratique du Congo au Burundi, services consulaires a Bujumbura.",
};

const themeScript = `
(() => {
  try {
    const saved = localStorage.getItem("ambardc-theme");
    const theme = saved === "light" || saved === "dark"
      ? saved
      : (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
  } catch {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}