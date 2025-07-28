"use client";

import Navbar from "../../../components/navbar-public";
import Footer from "../../../components/footer";
import Editor from "./editor";

export default function MemeGenerator() {
  return (
    <div className="bg-green-900 min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow pt-10">
            <h1 className="text-3xl font-bold mb-2 text-center">Meme Generator</h1>
            <p className="text-lg text-white mb-4 text-center">
                Create your own memes with Phaser Beary!
            </p>
        </div>
        <Editor />
        <Footer />
    </div>
  );
}
