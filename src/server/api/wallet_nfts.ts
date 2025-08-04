import { fetchNFTsByAccount } from "@/server/xrpl/wallet_nfts";

function hexToString(hex: string): string {
  try {
    return Buffer.from(hex, "hex").toString("utf8");
  } catch {
    return "";
  }
}

function normalizeUri(uri: string): string {
  if (!uri) return "";

  if (uri.startsWith("ipfs://")) {
    uri = uri.replace("ipfs://", "https://ipfs.io/ipfs/");
  }
  uri = uri.replace(/ /g, "%20").replace(/#/g, "%23");

  return uri;
}

export async function getMetaData(wallet_address: string) {
  const nfts = await fetchNFTsByAccount(wallet_address);
  const uris = nfts.map(normalizeUri);

  const metadata = await Promise.all(
    uris.map(async (uri) => {
      try {
        const res = await fetch(uri, { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch metadata");
        const json = await res.json();

        if (json.image) {
          json.image = normalizeUri(json.image);
        }

        return {
          uri,
          metadata: json,
        };
      } catch (err) {
        console.error(`Failed to fetch metadata from ${uri}`, err);
        return {
          uri,
          metadata: null,
        };
      }
    })
  );

  return metadata;
}