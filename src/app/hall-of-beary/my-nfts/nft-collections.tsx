'use client'

import { useEffect, useState } from 'react'
import { getMetaData } from '@/server/api/wallet_nfts'
import Sidebar from "../../../../components/sidebar"

type NFT = {
  uri: string;
  metadata: {
    name: string;
    description: string;
    image: string;
    attributes?: { trait_type: string; value: string }[];
  };
};

export default function NftCollections() {
  const [wallet, setWallet] = useState<string | null>(null)
  const [metadata, setMetadata] = useState<NFT[]>([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const address = localStorage.getItem('wallet_address')
    setWallet(address)

    if (address) {
      getMetaData(address).then(setMetadata)
      .finally(() => setLoading(false))
    }
  }, [])

  return (
    <div className="min-h-screen bg-linear-65 from-[#8B6EDB] via-[#C0C6FF] to-[#8D73E2] flex flex-col md:flex-row">
        <div>
          <Sidebar />
        </div>

        <div className="font-gloria mt-20 w-full flex flex-col items-center justify-center gap-10">
            <div className="flex flex-col items-center justify-center gap-6">
                <h1 className="text-7xl font-bold text-center">Your Beary’s Collections</h1>
            </div>
            {metadata.length === 0 ? (
              loading ? (
                <div className="text-center text-lg font-bold text-gray-600 py-10 animate-pulse">
                  Waitt a second, i&apos;ll wake your bear up...
                </div>
              ) : (
                <div className="flex flex-col gap-5 text-center text-xl font-bold text-gray-600 py-10">
                  You don&apos;t have beary
                  <a href="https://xrp.cafe/collection/phaser-beary" className="bg-white/70 hover:bg-white p-3 rounded-lg">
                    Get Yours
                  </a>
                </div>
              )
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {metadata.map((nft, index) => (
                  <div
                    key={`${nft.uri}-${index}`}
                    className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/50 shadow-md"
                  >
                    <img
                      src={nft.metadata.image}
                      alt={nft.metadata.name}
                      className="w-48 h-48 object-contain rounded-lg"
                    />
                    <h2 className="font-bold text-xl text-center text-black">{nft.metadata.name}</h2>
                    {nft.metadata.attributes && (
                      <ul className="text-sm text-gray-700 mt-2">
                        {nft.metadata.attributes.map((attr, i) => (
                          <li key={i}>
                            <strong>{attr.trait_type}:</strong> {attr.value}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
        </div>
    </div>
  )
}
