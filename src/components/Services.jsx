import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const scrollFade = (delay = 0) => ({
	initial: { opacity: 0, y: 40 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, margin: "-60px" },
	transition: { duration: 0.5, delay, ease: "easeOut" },
});

function Services() {
	const data = [
		{
			icon: "solar:shield-warning-linear",
			title: "Аварийно отключване",
			desc: "Бързо и щадящо отключване на автомобили и домове без повреда.",
		},
		{
			icon: "cbi:tesla-car",
			title: "Автоключарски услуги",
			desc: "Цялостни решения за всички марки автомобили и ремонт на имобилайзери.",
		},
		{
			icon: "solar:key-square-linear",
			title: "Програмиране на ключове",
			desc: "Обучение на нови чип ключове и синхронизация на дистанционни.",
		},
		{
			icon: "solar:code-scan-linear",
			title: "Ключ по код",
			desc: "Възстановяване на изгубени ключове чрез декодиране с CNC машина.",
			highlight: true,
		},
		{
			icon: "solar:lock-password-unlocked-linear",
			title: "Смяна на брави",
			desc: "Монтаж на механизми с висока степен на сигурност.",
			wide: true,
		},
	];
	return (
		<section id="services" className="py-24 max-w-7xl mx-auto px-4">
			<motion.div {...scrollFade(0)} className="text-center mb-16">
				<h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
					Нашите Услуги
				</h2>
				<p className="text-zinc-400 max-w-2xl mx-auto">
					Професионални решения за вашия автомобил и дом в Силистра.
				</p>
			</motion.div>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{data.map((s, i) => (
					<motion.div
						key={i}
						{...scrollFade(i * 0.08)}
						whileHover={{ y: -4, transition: { duration: 0.2 } }}
						className={`glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all group ${s.wide ? "lg:col-span-2" : ""}`}
					>
						<div
							className={`w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center text-white mb-6 border border-white/10 group-hover:border-accent-500/50 group-hover:text-accent-400 transition-colors`}
						>
							<Icon icon={s.icon} width="24" />
						</div>
						<h3 className="text-xl font-medium text-white mb-3 group-hover:text-accent-400">
							{s.title}
						</h3>
						<p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
					</motion.div>
				))}
			</div>
		</section>
	);
}

export default Services;
