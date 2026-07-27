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