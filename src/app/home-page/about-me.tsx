import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="about-me h-100vh flex flex-col items-center justify-center my-15">
        <div className="bg-black/50 rounded-lg px-8 py-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto">
                <div className="md:w-1/2 w-full text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4">Meet the Pasher Beary</h2>
                    <p className="text-lg text-white mb-4 text-justify">
                        The laziest bear to ever accidentally mint himself into the XRP blockchain. He’s not your average pixel-pumped NFT character. Nope. He’s unbothered, unimpressed, and perpetually halfway between a nap and existential dread. Born from pure indifference and running on low energy (literally and emotionally), Phaser Beary doesn’t chase hype – hype chases him and gives up halfway. With his half-lidded stare and resting “meh” face, this bear is a satirical middle paw to all the try-hard NFT projects flooding your feed.
                    </p>
                </div>
                <div className="md:w-1/2 w-full flex justify-center">
                    <Image
                        src="/assets/beary/IMG_5253.GIF"
                        alt="About Me"
                        height={300}
                        width={300}
                        className="rounded-xl w-100 h-auto object-cover"
                    />
                </div>
            </div>
            <div className="max-w-5xl mx-auto">
                <p className="text-lg text-white mb-4 text-justify">
                    Phaser Beary lives by one motto: <br />
                    “<strong>Do less. Get minted.</strong>” Built on the fast and eco-friendly XRP Ledger (because even lazy bears hate high gas fees), Phaser Beary is the ultimate satire on utility overload, roadmap obsession, and fake engagement. No utility? Perfect. No roadmap? Even better. He’s not here to work – he’s here to exist… barely.
                </p>
                <p className="text-lg text-white font-bold mb-4 text-center">
                    Join the rebellion against productivity. Own a bear who’s proud of doing nothing. This is Phaser Beary – your new favorite digital slacker.
                </p>
            </div>
        </div>
    </div>
  );
}