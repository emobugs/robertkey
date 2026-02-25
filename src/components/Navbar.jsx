import { Icon } from "@iconify/react";
import logo from "../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import keys from "../assets/keys.png";

const links = [
	{ href: "#services", label: "Услуги" },
	{ href: "#process", label: "Как работим" },
	{ href: "#testimonials", label: "Отзиви" },
];

export const Navbar = () => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "auto";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

	return (
		<>
			<motion.nav
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
				className="fixed top-0 w-full z-40 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md overflow-hidden"
			>
				<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
					<a href="#" className="h-[30px]">
						<img src={logo} alt="" className="h-full" />
					</a>

					<img src={keys} alt="" className="h-full md:hidden" />

					{/* Desktop */}
					<div className="hidden md:flex items-center gap-6">
						{links.map((l) => (
							<a
								key={l.href}
								href={l.href}
								className="text-sm text-zinc-400 hover:text-white transition-colors"
							>
								{l.label}
							</a>
						))}
						<motion.a
							href="tel:+359892922332"
							className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-full border border-white/10 transition-all group"
							whileHover={{ scale: 1.04 }}
							whileTap={{ scale: 0.97 }}
						>
							<Icon
								icon="solar:phone-calling-linear"
								width="18"
								className="text-accent-400 group-hover:text-accent-300"
							/>
							<span className="text-sm font-medium">+359 89 292 2332</span>
						</motion.a>
					</div>

					{/* Mobile hamburger */}
					<button
						onClick={() => setOpen((v) => !v)}
						className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
					>
						<Icon
							icon={open ? "line-md:close" : "solar:hamburger-menu-linear"}
							width="24"
						/>
					</button>
				</div>
			</motion.nav>

			{/* Mobile menu */}
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0, y: -8 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -8 }}
						transition={{ duration: 0.2, ease: "easeOut" }}
						className="fixed top-16 left-0 w-full z-30 bg-zinc-950/95 backdrop-blur-md border-b border-white/5 md:hidden"
					>
						<div className="flex flex-col px-4 py-4 gap-1">
							{links.map((l) => (
								<a
									key={l.href}
									href={l.href}
									onClick={() => setOpen(false)}
									className="text-zinc-300 hover:text-white py-3 px-3 rounded-lg hover:bg-white/5 transition-all text-sm font-medium"
								>
									{l.label}
								</a>
							))}
							<a
								href="tel:+359892922332"
								onClick={() => setOpen(false)}
								className="mt-2 flex items-center justify-center gap-2 bg-accent-500/10 border border-accent-500/20 text-accent-400 font-medium py-3 px-3 rounded-lg text-sm"
							>
								<Icon icon="solar:phone-calling-linear" width="18" />
								+359 89 292 2332
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;
