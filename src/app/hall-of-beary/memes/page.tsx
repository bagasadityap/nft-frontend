import Memes from "./memes";
import { getMemes } from "@/server/api/memes";

export default async function MemesPage() {
  const memes = await getMemes();

  return (
    <div>
      <Memes memes = {memes}/>
    </div>
  )
}