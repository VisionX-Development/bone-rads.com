import { Client, Databases } from 'appwrite';
import { env } from '$env/dynamic/private';

// Appwrite Client für Server-seitige Operationen
const client = new Client()
	.setEndpoint('https://fra.cloud.appwrite.io/v1')
	.setProject('6958b99400270e49d7c3');

// Für Server-seitige Admin-Operationen kann hier ein API Key gesetzt werden
// client.setKey(env.APPWRITE_API_KEY);

export const databases = new Databases(client);

// Exportiere auch den Client falls benötigt
export { client };

// Helper-Funktion um die Database ID zu erhalten (aus Environment oder konfiguriert)
export function getDatabaseId(): string {
	return env.APPWRITE_DATABASE_ID || '';
}
