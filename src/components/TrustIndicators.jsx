import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

function TrustIndicators() {
	const items = [
		{ icon: "solar:clock-circle-linear", text: "Денонощно 24/7" },
		{ icon: "solar:running-linear", text: "Реакция до 20 мин" },
		{ icon: "solar:delivery-linear", text: "Мобилен сервиз" },
		{ icon: "solar:monitor-camera-linear", text: "Hi-Tech Оборудване" },
	];
	return (
		<section className="py-12 border-y border-white/5 bg-zinc-900/30">
			<div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
				{items.map((item, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-40px" }}
						transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
						className="flex flex-col items-center text-center gap-3 group"
					>
						<motion.div
							whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
							className="p-3 rounded-full bg-zinc-800/50 text-accent-400 group-hover:bg-accent-500/10 transition-all border border-white/5"
						>
							<Icon icon={item.icon} width="28" />
						</motion.div>
						<h3 className="text-white font-medium text-sm tracking-tight">
							{item.text}
						</h3>
					</motion.div>
				))}
			</div>
		</section>
	);
}

export default TrustIndicators;
