import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { LocalSEO } from "./components/LocalSEO";
import { Footer } from "./components/Footer";

import { Icon } from "@iconify/react";

function App() {
	return (
		<div className="bg-zinc-950 text-zinc-300 min-h-screen selection:bg-accent-500 selection:text-white">
			{/* Background Glow */}
			<div className="fixed top-0 left-0 w-full h-full -z-10">
				<div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 blur-[120px]"></div>
				<div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 blur-[120px]"></div>
			</div>

			<Navbar />
			<Hero />
			<Services />
			<Process />
			<LocalSEO />
			<Footer />

			{/* Sticky Call Button (Mobile) */}
			<div className="md:hidden fixed bottom-0 left-0 w-full p-4 z-50 bg-gradient-to-t from-zinc-950 pt-8">
				<a
					href="tel:+359888123456"
					className="bg-accent-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 shadow-lg"
				>
					<Icon icon="solar:phone-bold" width="24" /> ОБАДИ СЕ СЕГА
				</a>
			</div>
		</div>
	);
}

export default App;
