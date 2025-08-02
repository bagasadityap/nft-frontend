import { getMetaData } from "@/server/api/collections";
import ClientCollections from "./client-collections";

export default async function CollectionsPage() {
  const metadata = await getMetaData();

  return <ClientCollections nfts={metadata} />
}
