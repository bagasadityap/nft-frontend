import Image from "next/image";
import Navbar from "../../../components/navbar-public";
import Footer from "../../../components/footer";

export default function PhaserCoin() {
  return (
    <div
        className="min-h-screen h-100vh"
        style={
            {
                backgroundImage: `url('/assets/beary/IMG_5243.PNG')`,
                backgroundSize: "cover",
                backgroundPosition: "center top 25%",
            }
        }
    >
        <Navbar className="bg-black/50 relative z-10" />
        <div className="text-gray-800 flex flex-col items-center justify-center px-6 py-10 text-center">
            <div className="bg-black/80 p-15 md:p-20 rounded-lg shadow-lg text-white">
                <div className="flex flex-col items-center justify-center mb-10 gap-5">
                    <Image
                        width={600}
                        height={100}
                        src="/assets/beary/phaser.gif"
                        alt="Phaser"
                    >
                    </Image>
                    <a
                        href="https://firstledger.net/token/rQLfUoZNafhTTJCoCt64isgCcmXdL5a5cp/5048415345520000000000000000000000000000"
                        className="font-gloria text-2xl font-bold bg-green-600 hover:bg-green-700 py-3 px-6 rounded-lg">
                        Buy Token
                    </a>
                </div>
                <div className="font-andika flex flex-col md:flex-row items-center justify-between">
                    <p className="text-md md:text-xl text-justify md:w-[68%]">
                        The official meme token of $Phaser Beary, the internet’s most gloriously unmotivated bear. Accidentally minted into the XRP Ledger during what was probably a nap, this bear didn’t set out to make a token… but here it is. Why? Because effort is overrated and utility is a scam (probably).
                        <br /><br />
                        $Phaser Beary isn’t here to pump your bags. He’s here to lie down and mildly exist in digital form – somewhere between hibernation and existential dread. He has no roadmap, no use case, and absolutely no interest in being &ldquo;the next big thing.&ldquo; And that’s exactly why he might be.
                        <br /><br />
                        Forget staking, farming, or whatever buzzword is trending this week. $Phaser runs on vibes and sarcasm – and thanks to the XRP Ledger, it’s fast, cheap, and eco-friendly (because even lazy bears hate paying gas fees).
                        <br /><br />
                    </p>
                    <Image
                        className="flex items-center justify-center rounded-full md:w-[25%]"
                        width={200}
                        height={200}
                        src="/assets/beary/coin.GIF"
                        alt="Phaser Coin"
                    >
                    </Image>
                </div>
                <p className="font-gloria font-bold text-xl mt-6">
                    Why buy $Phaser?<br />
                    No promises. No pressure.<br />
                    No work. No worries.<br />
                    Just vibes and a bear who peaked in apathy.<br /><br />
                </p>
                <p className="font-gloria font-bold text-xl">
                    Own a piece of the rebellion against forced productivity. Embrace the bear who’s too lazy to care and too iconic to ignore.Sorry, the page you are looking for does not exist.
                </p>
            </div>
        </div>
        <Footer />
    </div>
  );
}