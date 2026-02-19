import { Icon } from "@iconify/react";

export const Footer = () => (
	<footer className="bg-zinc-950 border-t border-white/5 pt-16 pb-12">
		<div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 text-sm">
			<div>
				<div className="flex items-center gap-2 mb-4 font-bold text-white uppercase tracking-tighter">
					<Icon icon="solar:key-linear" className="text-accent-500" width="20" /> ROBERT
					KEY
				</div>
				<p className="text-zinc-500">
					Професионални ключарски услуги с гаранция в гр. Силистра.
				</p>
			</div>
			<div>
				<h4 className="text-white font-medium mb-4 uppercase text-xs tracking-widest">
					Контакти
				</h4>
				<ul className="space-y-3 text-zinc-400">
					<li className="flex items-center gap-2 hover:text-white transition-colors">
						<Icon icon="solar:phone-linear" width="16" />{" "}
						<a href="tel:+359888123456">+359 89 292 2332</a>
					</li>
					<li className="flex items-center gap-2 text-accent-400">
						<Icon icon="solar:clock-circle-linear" width="16" /> Работим 24/7
					</li>
				</ul>
			</div>
			<div className="text-zinc-600 text-xs mt-auto">
				© 2026 Robert Key. Всички права запазени.
			</div>
		</div>
	</footer>
);

export default Footer;
