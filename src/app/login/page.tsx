import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";

const loginServices = [
  "Suivre une demande consulaire",
  "Prendre un rendez-vous a Bujumbura",
  "Televerser les documents requis",
  "Recevoir les notifications de l'Ambassade",
];

export default function LoginPage() {
  return (
    <main className="auth-shell">
      <section className="auth-panel auth-visual">
        <Link className="brand auth-brand" href="/">
          <span className="seal">RDC</span>
          <span>
            <strong>Ambassade</strong>
            <small>RDC au Burundi</small>
          </span>
        </Link>
        <div>
          <span className="hero-kicker">Espace personnel</span>
          <h1>Connectez-vous pour gerer vos demarches consulaires.</h1>
          <p>
            Un acces unique pour preparer vos dossiers, reserver un rendez-vous
            et suivre vos documents aupres de l&apos;Ambassade a Bujumbura.
          </p>
        </div>
        <ul className="auth-service-list">
          {loginServices.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </section>

      <section className="auth-panel auth-form-panel">
        <div className="auth-topline">
          <Link href="/">Retour accueil</Link>
          <ThemeToggle />
        </div>
        <form className="login-form">
          <div className="form-heading">
            <span className="eyebrow">Connexion</span>
            <h2>Acceder a mon compte</h2>
            <p>Entrez vos identifiants pour continuer vers votre espace personnel.</p>
          </div>

          <label>
            Adresse email
            <input type="email" placeholder="nom@example.com" />
          </label>

          <label>
            Mot de passe
            <input type="password" placeholder="Votre mot de passe" />
          </label>

          <div className="form-row">
            <label className="check-line">
              <input type="checkbox" />
              Se souvenir de moi
            </label>
            <a href="#">Mot de passe oublie ?</a>
          </div>

          <Link className="submit-button" href="/espace-personnel">
            Se connecter
          </Link>

          <p className="form-note">
            Nouveau demandeur ? <Link href="/espace-personnel">Creer un dossier provisoire</Link>
          </p>
        </form>
      </section>
    </main>
  );
}