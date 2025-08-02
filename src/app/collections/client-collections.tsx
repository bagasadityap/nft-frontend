'use client';

import { useState, useMemo } from "react";
import Navbar from "../../../components/navbar-public";
import Footer from "../../../components/footer";
import Slider from "../../../components/slider";

type NFT = {
  uri: string;
  metadata: {
    name: string;
    description: string;
    image: string;
    attributes?: { trait_type: string; value: string }[];
  };
};

export default function ClientCollections({ nfts }: { nfts: NFT[] }) {
  const [searchId, setSearchId] = useState("");

  const filteredNfts = useMemo(() => {
    if (!searchId) return nfts;
    const id = searchId.replace(/^#/, ""); // hilangkan '#' jika ada
    return nfts.filter((nft) => nft.metadata.name.includes(id));
  }, [nfts, searchId]);

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#feffcd",
        backgroundSize: "cover",
        backgroundPosition: "center top 25%",
      }}
    >
      <Navbar className="bg-black/50 relative z-10" />

      <div className="bg-black/50 flex flex-col items-center justify-center gap-10 px-6 py-5 mt-10 mx-5 rounded-lg text-center">
        <Slider />
        <div className="col-span-2 row-span-9 flex items-center justify-center font-gloria font-bold text-5xl">
          Collecting Is Optional. Regret Is Forever.
        </div>
        <a href="https://xrp.cafe/collection/phaser-beary" className="font-andika font-bold bg-green-600 hover:bg-green-700 text-white text-2xl py-3 px-6 rounded-lg transition mb-5">
          Mint
        </a>
      </div>

      <div className="font-andika flex flex-col md:flex-row items-start md:items-center justify-center gap-4 mt-10 text-black">
        <div className="flex items-center justify-center gap-4 w-full">
          <div className="w-1/2 md:w-1/4">
            <label className="block text-md font-bold text-black mb-1">Track your lazy bear here:</label>
            <div className="flex items-center bg-black/30 rounded-md">
              <span className="text-black text-lg font-bold px-3">#</span>
              <input
                type="text"
                placeholder="1082"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                className="px-2 py-2 bg-transparent w-full focus:outline-none text-black"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="font-gloria text-xl my-10 mx-5 text-black">
        {filteredNfts.length === 0 ? (
          <p className="text-center text-gray-600">No NFT found for ID #{searchId.replace(/^#/, '')}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {filteredNfts.map((nft, index) => (
              <div
                key={`${nft.uri}-${index}`}
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-black/30 shadow-md"
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

      <Footer color="text-black" />
    </div>
  );
}
