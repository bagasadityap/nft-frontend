import { getMetaData } from "@/server/api/collections";
import dynamic from "next/dynamic";

const ClientCollections = dynamic(() => import("./client-collections"), { ssr: false });

export default async function CollectionsPage() {
  const metadata = await getMetaData();
  return <ClientCollections nfts={metadata} />;
}
