import { Client } from "xrpl"

export async function fetchNFTsByAccount(account: string): Promise<string[]> {
  const client = new Client("wss://s2.ripple.com/")
  await client.connect()

  const uris: string[] = []
  let marker: string | undefined

  do {
    const response = await client.request({
      command: "account_nfts",
      account,
      marker,
    })

    const nfts = response.result.account_nfts || []
    const issuer = "rM7SKst3xLZNpPmw8LfWtQNBVdRJ2DeFLD";
    for (const nft of nfts) {
      if (nft.URI && nft.Issuer === issuer ) {
        const decoded = Buffer.from(nft.URI, "hex").toString("utf8")
        uris.push(decoded)
      }
    }

    marker = response.result.marker as string | undefined
  } while (marker)

  await client.disconnect()
  return uris
}
