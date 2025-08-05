'use client';

import Navbar from "../../../components/navbar-public"
import Footer from "../../../components/footer"
import CookieConsent from "../../../components/cookie-consent";
import PrivacyPolicy from "../../../components/privacy-policy";

export default function FAQ() {
    return (
        <div
            className="min-h-screen"
            style={
                {
                    backgroundColor: "#feffcd",
                    backgroundSize: "cover",
                    backgroundPosition: "center top 25%",
                }
            }
        >
            <Navbar className="bg-black/50 relative z-10" />
                <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
                    <h1 className="font-gloria font-bold text-5xl md:text-9xl text-black text-center">
                        ???
                    </h1>
                    <h1 className="font-gloria font-bold text-5xl md:text-8xl text-black text-center">
                        Questions Nobody Should Have Asked
                    </h1>
                </div>
                <div className="font-gloria mx-5 md:mx-10 my-15">
                    <div className="w-full max-w-3xl mx-auto space-y-4 text-gray-800">
                        <details className="group border border-gray-700 border-3 rounded-lg p-4 select-none">
                            <summary className="flex justify-between items-center cursor-pointer text-2xl font-bold">
                                What is Phaser Beary?
                                <span className="transition-transform group-open:rotate-90 font-bold text-5xl">{'>'}</span>
                            </summary>
                            <hr className="my-4 border-t-3 border-gray-600" />
                            <div className="font-gloria text-gray-600 text-xl">
                                I know you’re gonna ask — but seriously, figure it out yourself.
                            </div>
                        </details>
                        <details className="group border border-gray-700 border-3 rounded-lg p-4 select-none">
                            <summary className="flex justify-between items-center cursor-pointer text-2xl font-bold">
                                <button
                                    onClick={() => {
                                        window.dispatchEvent(new Event('show-cookie-consent'))
                                    }}
                                    className="hover:text-gray-700 hover:underline"
                                    >
                                    Cookie Notice
                                </button>
                            </summary>
                        </details>
                        <details className="group border border-gray-700 border-3 rounded-lg p-4 select-none">
                            <summary className="flex justify-between items-center cursor-pointer text-2xl font-bold">
                                <PrivacyPolicy className="inline p-0 m-0 text-2xl font-bold text-black hover:text-gray-700 hover:underline"/>
                            </summary>
                        </details>
                    </div>
                </div>
                <div>
                    <h1 className="font-gloria font-bold text-5xl text-black text-center">
                        No, We Don’t Have a Roadmap. Still.
                    </h1>
                </div>
            <Footer color="text-black" />
        </div>
    )
}