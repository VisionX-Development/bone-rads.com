import { Client, Account, Databases } from "appwrite";

const client = new Client()
	.setEndpoint("https://fra.cloud.appwrite.io/v1")
	.setProject("6958b99400270e49d7c3");

const account = new Account(client);
const databases = new Databases(client);

export { client, account, databases };

