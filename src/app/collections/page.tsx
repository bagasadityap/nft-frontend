'use client';

import { useEffect, useState } from 'react';
import { getMetaData } from "@/server/api/collections";
import ClientCollections from "./client-collections";

type NFT = {
  uri: string;
  metadata: {
    name: string;
    description: string;
    image: string;
    attributes?: { trait_type: string; value: string }[];
  };
};

export default function CollectionsPage() {
  const [metadata, setMetadata] = useState<NFT[]>([]);


  useEffect(() => {
    getMetaData().then(setMetadata);
  }, []);

  return <ClientCollections nfts={metadata} />;
}
