import { Icon } from "@iconify/react";

export const Footer = ({ brand = "ROBERT KEY", phone = "+359 888 123 456" }) => (
	<footer className="bg-zinc-950 border-t border-white/5 pt-16 pb-32 md:pb-16">
		<div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
			<div>
				<div className="flex items-center gap-2 mb-4 font-bold text-white uppercase tracking-tighter">
					<Icon icon="solar:key-bold" className="text-accent-500" /> {brand}
				</div>
				<p className="text-zinc-500 text-sm">
					Професионални ключарски услуги с гаранция за качество и бързина.
				</p>
			</div>

			<div>
				<h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">
					Контакти
				</h4>
				<div className="space-y-3 text-sm text-zinc-400">
					<a
						href={`tel:${phone}`}
						className="flex items-center gap-2 hover:text-accent-500 transition-colors"
					>
						<Icon icon="solar:phone-bold" /> {phone}
					</a>
					<div className="flex items-center gap-2 text-accent-500 font-medium">
						<Icon icon="solar:clock-circle-bold" /> Работим 24/7
					</div>
				</div>
			</div>

			<div>
				<h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">
					Услуги
				</h4>
				<ul className="text-sm text-zinc-500 space-y-2">
					<li>Аварийно отключване</li>
					<li>Автоключар</li>
					<li>Ключ по код</li>
					<li>Смяна на брави</li>
				</ul>
			</div>
		</div>
		<div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/5 text-center md:text-left">
			<p className="text-xs text-zinc-600">© 2026 {brand}. Всички права запазени.</p>
		</div>
	</footer>
);
