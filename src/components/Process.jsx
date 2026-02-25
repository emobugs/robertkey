import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

const steps = [
	{
		id: "01",
		icon: "solar:document-text-linear",
		title: "Четене на VIN/код",
		desc: "Извличаме криптирания фабричен код директно от документите. Не е нужен оригинален ключ.",
		accent: "от документа",
	},
	{
		id: "02",
		icon: "solar:settings-minimalistic-linear",
		title: "CNC декодиране",
		desc: "Машината изрязва ключа с прецизност до 0.01мм — идентичен с фабричния.",
		accent: "прецизност 0.01мм",
	},
	{
		id: "03",
		icon: "solar:cpu-bolt-linear",
		title: "Чип програмиране",
		desc: "Транспондерът се обучава към имобилайзера чрез OBD порта за минути.",
		accent: "OBD синхронизация",
	},
	{
		id: "04",
		icon: "solar:verified-check-linear",
		title: "Верификация",
		desc: "Тестваме стартиране, централно заключване и аларма. Автомобилът го разпознава като оригинален.",
		accent: "като оригинален",
	},
	{
		id: "05",
		icon: "solar:hand-money-linear",
		title: "Предаване",
		desc: "Получавате готовия ключ с обяснение как работи. При нужда правим дубликат на място.",
		accent: "с гаранция",
	},
];

function MobileScroll() {
	return (
		<div className="md:hidden -mx-4 px-4">
			<div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none overscroll-x-contain">
				{steps.map((step, i) => (
					<div
						key={step.id}
						className="glass-panel relative rounded-2xl p-5 flex flex-col gap-4 flex-shrink-0 w-[72vw] snap-start"
					>
						<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-400">
							<Icon icon={step.icon} width="20" />
						</div>
						<div className="text-xs font-bold tracking-widest text-white/20">
							{step.id}
						</div>
						<h3 className="text-sm font-semibold text-zinc-200 leading-snug">
							{step.title}
						</h3>
						<p className="text-zinc-500 text-xs leading-relaxed">{step.desc}</p>
						<div className="inline-flex items-center gap-1 text-[10px] font-medium text-accent-400 bg-accent-500/10 border border-accent-500/20 rounded-full px-2.5 py-1 w-fit mt-auto">
							<Icon icon="solar:star-linear" width="10" />
							{step.accent}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default function Process() {
	const [active, setActive] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActive((prev) => (prev + 1) % steps.length);
		}, 1800);
		return () => clearInterval(interval);
	}, []);

	return (
		<section
			id="process"
			className="py-24 bg-zinc-900/50 border-y border-white/5 overflow-hidden"
		>
			<div className="max-w-7xl mx-auto px-4">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-14"
				>
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-xs font-medium mb-4 uppercase tracking-widest">
						Технология достъпна само при нас
					</div>
					<h2 className="text-3xl font-semibold text-white mb-3">
						Ключ без оригинал —{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-yellow-200">
							как е възможно?
						</span>
					</h2>
					<p className="text-zinc-500 text-sm max-w-md mx-auto">
						Звучи сложно? За нас е рутина.
					</p>
				</motion.div>

				{/* Desktop: all 5 cards */}
				<div className="hidden md:grid md:grid-cols-5 gap-4">
					{steps.map((step, i) => {
						const isActive = active === i;
						return (
							<motion.div
								key={step.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: i * 0.07 }}
								onMouseEnter={() => setActive(i)}
								className={`relative rounded-2xl p-5 flex flex-col gap-4 cursor-default transition-colors duration-300 ${
									isActive ? "bg-white/[0.04]" : "bg-white/[0.02]"
								}`}
							>
								<motion.div
									className="absolute inset-0 rounded-2xl pointer-events-none"
									animate={{
										boxShadow: isActive
											? "inset 0 0 0 1px var(--color-accent-500), 0 0 18px 2px color-mix(in srgb, var(--color-accent-500) 20%, transparent)"
											: "inset 0 0 0 1px rgba(255,255,255,0.06)",
									}}
									transition={{ duration: 0.4, ease: "easeInOut" }}
								/>
								<div
									className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
										isActive
											? "bg-accent-500/10 border border-accent-500/30 text-accent-400"
											: "bg-white/[0.04] border border-white/[0.08] text-zinc-500"
									}`}
								>
									<Icon icon={step.icon} width="20" />
								</div>
								<div
									className={`text-xs font-bold tracking-widest transition-colors duration-300 ${
										isActive ? "text-accent-500/60" : "text-white/15"
									}`}
								>
									{step.id}
								</div>
								<h3
									className={`text-sm font-semibold leading-snug transition-colors duration-300 ${
										isActive ? "text-white" : "text-zinc-300"
									}`}
								>
									{step.title}
								</h3>
								<p className="text-zinc-500 text-xs leading-relaxed">{step.desc}</p>
								<div
									className={`inline-flex items-center gap-1 text-[10px] font-medium rounded-full px-2.5 py-1 w-fit mt-auto transition-colors duration-300 ${
										isActive
											? "bg-accent-500/10 border border-accent-500/25 text-accent-400"
											: "bg-white/[0.04] border border-white/[0.07] text-zinc-600"
									}`}
								>
									<Icon icon="solar:star-linear" width="10" />
									{step.accent}
								</div>
							</motion.div>
						);
					})}
				</div>

				{/* Mobile */}
				<MobileScroll />
			</div>
		</section>
	);
}
