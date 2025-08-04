'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navigation = [
  { name: 'Home', href: '/hall-of-beary/home' },
  { name: 'My NFTs', href: '/hall-of-beary/my-nfts' },
  { name: 'MEMEs', href: '/hall-of-beary/memes' },
]

export default function Sidebar({ bg = "" }) {
    const router = useRouter();
    const pathname = usePathname();

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        localStorage.removeItem('wallet_address');
        router.push('/');
    };

    const isActive = (path: string) => pathname?.startsWith(path);

    return (
        <div className="font-gloria w-full md:w-64 md:h-150 flex md:flex-col justify-between px-6 py-5 md:py-20 top-0 left-0">
            <div className={`bg-white/20 text-black p-5 rounded-lg ${bg} w-full md:w-auto`}>
                <div className="md:hidden flex flex-row items-center justify-between gap-4">
                    <nav className="w-full flex flex-row items-between justify-between gap-4 text-xl items-center">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-gray-800 ${
                                isActive(item.href)
                                    ? "text-yellow font-bold"
                                    : "hover:text-gray-600 hover:scale-110 transition-all duration-200"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <details className="group select-none">
                            <summary className="flex justify-between items-center cursor-pointer text-2xl font-bold">
                                <span className="transition-transform group-open:rotate-90 font-bold text-5xl">{'>'}</span>
                            </summary>
                            <hr className="my-1 border-t-1 border-gray-600" />
                            <div className="font-gloria text-gray-600 text-xl flex flex-col items-end justify-center gap-3">
                                <button onClick={handleLogout} className="ms-2 text-red-600 transition-all hover:scale-110 duration-200">Logout</button>
                                <Link href="/" className="font-gloria underline font-semibold text-black hover:text-gray-800 hover:scale-105 rounded-lg transition">
                                    {'<'}Back
                                </Link>
                            </div>
                        </details>
                    </nav>
                </div>

                <div className="hidden md:block">
                    <h2 className="text-3xl font-bold mb-10 tracking-wider">$Phaser Beary</h2>
                    <nav className="flex flex-col gap-6 text-2xl">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-gray-800 ${
                                isActive(item.href)
                                    ? "text-black text-3xl font-bold"
                                    : "hover:text-gray-600 hover:scale-110 transition-all duration-200"
                                }`}
                            >
                                - {item.name}
                            </Link>
                        ))}
                        <button onClick={handleLogout} className="hover:text-red-600 transition-all hover:scale-120 duration-200 text-start mt-10">- Logout</button>
                        <Link href="/" className="font-gloria underline font-semibold text-black hover:text-gray-800 text-xl hover:scale-105 py-3 px-6 rounded-lg transition">
                            {'<'} Back to Home
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}
