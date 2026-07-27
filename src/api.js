const DEFAULT_API_BASE_URL = "https://metebusiness.com:7070/api/";

export const API_BASE_URL =
  (import.meta.env.VITE_API_BASE_URL ?? DEFAULT_API_BASE_URL).replace(/\/+$/, "") + "/";

export function buildApiUrl(path, params = {}) {
  const url = new URL(path.replace(/^\/+/, ""), API_BASE_URL);

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, value);
    }
  });

  return url;
}

export async function apiFetch(path, { params, signal } = {}) {
  const response = await fetch(buildApiUrl(path, params), {
    headers: {
      Accept: "application/json",
    },
    signal,
  });

  if (!response.ok) {
    throw new Error(`Erreur API ${response.status}`);
  }

  return response.json();
}

export function fetchTypeDemandeDocuments(typeDemandeId, signal) {
  return apiFetch("documents/type-demande-documents/", {
    params: {
      ordering: "ordre_affichage",
      no_pagination: "true",
      type_demande_id: typeDemandeId,
      expand: "type_document_id",
    },
    signal,
  });
}
export function fetchTypeDemandes(signal) {
  return apiFetch("demandes/type-demandes/", {
    params: {
      no_pagination: "true",
      expand: "devise_id",
    },
    signal,
  });
}
export function fetchTypeDemandeChamps(typeDemandeId, signal) {
  return apiFetch("demandes/type-demande-champs/", {
    params: {
      ordering: "ordre",
      no_pagination: "true",
      type_demande_id: typeDemandeId,
    },
    signal,
  });
}
const DEFAULT_CSRF_TOKEN = "YLlMI1M8g8kZpDOABWAGdrATRmOjP4Pibii6V3XoQ29KhzJN7cR5BuLRS55z1Mza";

export const CSRF_TOKEN = import.meta.env.VITE_CSRF_TOKEN ?? DEFAULT_CSRF_TOKEN;

export async function submitDemande(payload, { signal } = {}) {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (CSRF_TOKEN) {
    headers["X-CSRFTOKEN"] = CSRF_TOKEN;
  }

  const response = await fetch(buildApiUrl("demandes/demandes/"), {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
    signal,
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    const detail = data?.detail || data?.message || `Erreur API ${response.status}`;
    throw new Error(detail);
  }

  return data;
}
