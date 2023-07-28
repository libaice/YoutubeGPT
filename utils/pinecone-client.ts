import { PineconeClient } from "@pinecone-database/pinecone";
import { error } from "console";

if (!process.env.PINECONE_ENVIRONMENT || !process.env.PINECONE_API_KEY) {
  throw new Error("PINECONE_ENVIRONMENT and PINECONE_API_KEY must be set");
}

async function initPinecone() {
  try {
    const pinecone = new PineconeClient();
    await pinecone.init({
      environment: process.env.PINECONE_ENVIRONMENT ?? "",
      apiKey: process.env.PINECONE_API_KEY ?? "",
    });
    return pinecone;
  } catch (error) {}
  console.log("error", error);
  throw new Error("Failed to initialize Pinecone client");
}


export const pinecone = await initPinecone();