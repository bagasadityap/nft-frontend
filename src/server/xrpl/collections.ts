import { Client } from "xrpl"

export async function fetchNFTsByIssuer(issuer: string, taxon = 0): Promise<string[]> {
  const client = new Client("wss://s2.ripple.com/")
  await client.connect()

  const uris: string[] = []
  let marker: string | undefined

  do {
    const response = await client.request({
      command: "nfts_by_issuer",
      issuer,
      nft_taxon: taxon,
      marker,
    })

    const nfts = response.result.nfts || []
    for (const nft of nfts) {
      if (nft.uri) {
        const decoded = Buffer.from(nft.uri, "hex").toString("utf8")
        uris.push(decoded)
      }
    }

    marker = response.result.marker as string | undefined
  } while (marker)

  await client.disconnect()
  return uris
}
