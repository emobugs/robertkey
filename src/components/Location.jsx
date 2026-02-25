import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

function Location() {
	return (
		<section className="py-24 border-t border-white/5">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Text */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-60px" }}
						transition={{ duration: 0.5 }}
					>
						<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">
							Ключарски услуги в Силистра и региона
						</h2>
						<p className="text-zinc-400 mb-4 leading-relaxed">
							Търсите надежден{" "}
							<span className="text-accent-400 font-medium">ключар в Силистра</span>?
							Нашият мобилен екип покрива целия град и околните населени места,
							осигурявайки бърза реакция до 20 минути.
						</p>
						<p className="text-zinc-400 mb-8 leading-relaxed">
							Като специализиран{" "}
							<span className="text-accent-400 font-medium">автоключар</span>, Robert
							Key разполага с техника от последно поколение за{" "}
							<span className="text-accent-400 font-medium">аварийно отключване</span>{" "}
							на всички марки автомобили без щети. Независимо дали става въпрос за
							изгубен ключ или повредена ключалка, ще изработим нов{" "}
							<span className="text-accent-400 font-medium">ключ по код</span> на
							място.
						</p>
						<ul className="space-y-3 mb-8">
							{[
								"Обслужване на адрес в гр. Силистра",
								"Посещение в областта и съседните села",
							].map((item) => (
								<li
									key={item}
									className="flex items-center gap-3 text-zinc-300 text-sm"
								>
									<Icon
										icon="solar:map-point-linear"
										className="text-accent-500 shrink-0"
										width="18"
									/>
									{item}
								</li>
							))}
						</ul>
						<motion.a
							href="https://maps.app.goo.gl/54q7gzCGjtfgAhsb7"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 text-sm text-accent-400 border border-accent-500/20 bg-accent-500/10 px-4 py-2.5 rounded-lg hover:bg-accent-500/20 transition-all"
							whileHover={{ scale: 1.03 }}
							whileTap={{ scale: 0.97 }}
						>
							<Icon icon="logos:google-maps" width="18" />
							Виж в Google Maps
							<Icon icon="solar:arrow-right-up-linear" width="14" />
						</motion.a>
					</motion.div>

					{/* Map */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-60px" }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="h-80 lg:h-96 w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
					>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2864.386770251481!2d27.254156076648744!3d44.11664392233297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b0210033e0dc0f%3A0xbc6cc9d2d9644054!2zUk9CRVJUIEtFWSDigJMg0JrQu9GO0YfQsNGAINC4INCQ0LLRgtC-0LrQu9GO0YfQsNGAINCh0LjQu9C40YHRgtGA0LAsINCa0LvRjtGH0L7QstC1INGBINGH0LjQvw!5e0!3m2!1sbg!2sbg!4v1772023605549!5m2!1sbg!2sbg"
							width="100%"
							height="100%"
							style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Robert Key Силистра"
						></iframe>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default Location;
