import { Icon } from "@iconify/react";

const servicesData = [
	{
		icon: "solar:shield-warning-bold-duotone",
		title: "Аварийно отключване",
		desc: "Бързо и щадящо отключване без щети.",
	},
	{
		icon: "solar:car-bold-duotone",
		title: "Автоключар",
		desc: "Решения за всички марки автомобили в Силистра.",
	},
	{
		icon: "solar:code-scan-bold-duotone",
		title: "Ключ по код",
		desc: "Изработка без оригинал чрез CNC машина.",
	},
];

export const Services = () => (
	<section id="services" className="py-24 max-w-7xl mx-auto px-4">
		<h2 className="text-3xl font-bold text-center text-white mb-12 uppercase">Нашите Услуги</h2>
		<div className="grid md:grid-cols-3 gap-6">
			{servicesData.map((s, i) => (
				<div
					key={i}
					className="p-8 bg-zinc-900/50 border border-white/5 rounded-2xl hover:border-accent-500/30 transition-all"
				>
					<Icon icon={s.icon} width="32" className="text-accent-500 mb-4" />
					<h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
					<p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
				</div>
			))}
		</div>
	</section>
);
