import dynamic from 'next/dynamic';
const NftCollections = dynamic(() => import('./nft-collections'), { ssr: false });

export default async function MyNFTs() {
  return <NftCollections />;
}
