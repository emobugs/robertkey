import React from "react";
import { Icon } from "@iconify/react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustIndicators from "./components/TrustIndicators";
import Services from "./components/Services";
import Process from "./components/Process";
import Footer from "./components/Footer";

// --- Под-компоненти (Функции) ---

// --- ГЛАВЕН APP ---

export default function App() {
	return (
		<div className="bg-zinc-950 text-zinc-300 min-h-screen antialiased selection:bg-accent-500 selection:text-white relative">
			<div className="fixed top-0 left-0 w-full h-screen overflow-hidden -z-10 pointer-events-none">
				<div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent-500/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
				<div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-600/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
			</div>

			<Navbar />
			<Hero />
			<TrustIndicators />
			<Services />
			<Process />

			<Footer />

			{/* Mobile Sticky Button */}
			<div className="fixed bottom-0 left-0 w-full p-4 z-50 md:hidden bg-gradient-to-t from-zinc-950 pt-8">
				<a
					href="tel:+359888123456"
					className="flex items-center justify-center gap-3 w-full bg-accent-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-95"
				>
					<Icon icon="solar:phone-calling-linear" width="24" /> ОБАДИ СЕ СЕГА
				</a>
			</div>
		</div>
	);
}
