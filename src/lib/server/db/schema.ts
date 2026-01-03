// Appwrite Schema Definitionen
// Da Appwrite eine NoSQL-Datenbank ist, verwenden wir TypeScript-Typen statt Drizzle-Schemas

// Beispiel: User Collection Schema
export interface User {
	id: string;
	age: number;
	$createdAt?: string;
	$updatedAt?: string;
	$collectionId?: string;
	$databaseId?: string;
	$permissions?: string[];
}

// Collection IDs - Diese sollten mit den tatsächlichen Collection IDs in Appwrite übereinstimmen
export const COLLECTIONS = {
	USER: 'users' // Beispiel - ersetze mit deiner tatsächlichen Collection ID
} as const;
