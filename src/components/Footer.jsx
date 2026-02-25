import { Icon } from "@iconify/react";
import unity from "../assets/locksmith-unity.webp";

export const Footer = () => (
	<footer className="bg-zinc-950 border-t border-white/5 pt-16 pb-10">
		<div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 text-sm">
			{/* Col 1 - Text */}
			<div className="md:col-span-1">
				<div className="flex items-center gap-2 mb-4 font-bold text-white uppercase tracking-tighter">
					<Icon icon="solar:key-linear" className="text-accent-500" width="20" />
					ROBERT KEY
				</div>
				<p className="text-zinc-500 leading-relaxed">
					Robert Key е член на Сдружение „Ключарите на България" — национална организация
					за стандарти и професионална етика в бранша. Членството гарантира, че всяка
					услуга се извършва според установените норми за качество и сигурност.
				</p>
			</div>

			{/* Col 2 - Badge */}
			<div className="flex items-center justify-center">
				<img src={unity} alt="Сдружение Ключарите на България" className="w-40" />
			</div>

			{/* Col 3 - Contacts */}
			<div className="mb-10">
				<h4 className="text-white font-medium mb-4 uppercase text-xs tracking-widest">
					Контакти
				</h4>
				<ul className="space-y-3 text-zinc-400">
					<li className="flex items-center gap-2 hover:text-white transition-colors">
						<Icon icon="solar:phone-linear" width="16" />
						<a href="tel:+359892922332">+359 89 292 2332</a>
					</li>
					<li className="flex items-center gap-2 text-accent-400">
						<Icon icon="solar:clock-circle-linear" width="16" /> Работим 24/7
					</li>
				</ul>
			</div>
		</div>

		{/* Copyright */}
		{/* <div className="max-w-7xl mx-auto px-4 text-center text-zinc-600 text-xs mt-10 pt-6 border-t border-white/5">
			© 2025 Robert Key. Изработено от{" "}
			<a
				href="https://digitaleffect.bg"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:text-zinc-400 transition-colors"
			>
				Digital Effect
			</a>
		</div> */}
	</footer>
);

export default Footer;
