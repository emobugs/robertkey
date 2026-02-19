import { Icon } from "@iconify/react";
import logo from "../assets/logo.png";

export const Navbar = () => (
	<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
			<div className="flex items-center gap-2 h-[30px]">
				<img src={logo} alt="" className="h-full" />
			</div>
			<div className="hidden md:flex items-center gap-6">
				<a
					href="#services"
					className="text-sm text-zinc-400 hover:text-white transition-colors"
				>
					Услуги
				</a>
				<a
					href="#process"
					className="text-sm text-zinc-400 hover:text-white transition-colors"
				>
					Как работим
				</a>
				<a
					href="tel:+359888123456"
					className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-full border border-white/10 transition-all group"
				>
					<Icon
						icon="solar:phone-calling-linear"
						width="18"
						className="text-accent-400 group-hover:text-accent-300"
					/>
					<span className="text-sm font-medium">+359 89 292 2332</span>
				</a>
			</div>
		</div>
	</nav>
);

export default Navbar;
