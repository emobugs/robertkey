import { Icon } from "@iconify/react";

export const Navbar = ({ brandName = "ROBERT KEY", phone = "+359 888 123 456" }) => (
	<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
		<div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
			<div className="flex items-center gap-2">
				<div className="w-8 h-8 rounded bg-accent-600 flex items-center justify-center text-white">
					<Icon icon="solar:key-linear" width="20" />
				</div>
				<span className="text-white font-bold tracking-tight">{brandName}</span>
			</div>
			<div className="hidden md:flex items-center gap-6">
				<a href="#services" className="text-sm hover:text-accent-400 transition-colors">
					Услуги
				</a>
				<a
					href={`tel:${phone.replace(/\s/g, "")}`}
					className="bg-white/5 border border-accent-500/20 px-4 py-2 rounded-full text-sm text-white font-medium"
				>
					{phone}
				</a>
			</div>
		</div>
	</nav>
);
