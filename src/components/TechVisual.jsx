import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

function TechVisual() {
	const [isLoaded, setIsLoaded] = useState(false);

	const lineRef = useRef(null);
	const glowRef = useRef(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (document.readyState === "complete") {
				setIsLoaded(true);
			} else {
				const handleLoad = () => setIsLoaded(true);
				window.addEventListener("load", handleLoad);
				return () => window.removeEventListener("load", handleLoad);
			}
		}, 100);
		return () => clearTimeout(timer);
	}, []);
	// Безкрайна анимация на сканиращата линия

	useEffect(() => {
		if (isLoaded) {
			gsap.to(lineRef.current, {
				y: 100,
				duration: 1.5,
				repeat: -1,
				yoyo: true,
				ease: "power2.inOut",
				delay: 0.3,
			});
			// Пулсиращ ефект на иконата
			gsap.to(glowRef.current, {
				opacity: 0.8,
				scale: 1.2,
				duration: 1,
				repeat: -1,
				ease: "sine.inOut",
				yoyo: true,
			});
		}
	}, [isLoaded]);

	return (
		<div className="relative mx-auto w-full max-w-lg aspect-square flex flex-col justify-center">
			<div className="glass-panel rounded-2xl p-1 relative overflow-hidden shadow-2xl border border-white/10">
				<div className="bg-zinc-900 rounded-xl h-full w-full aspect-video flex flex-col items-center justify-center relative overflow-hidden">
					<div className="absolute inset-0 opacity-10 tech-grid"></div>

					{/* Сканираща линия */}
					<div
						ref={lineRef}
						className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent-500 to-transparent z-20"
					></div>

					<div className="z-10 flex flex-col items-center gap-4">
						<div className="w-16 h-16 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center relative">
							<div
								ref={glowRef}
								className="absolute inset-0 rounded-full border border-accent-500/50 opacity-0"
							></div>
							<Icon
								icon="solar:key-minimalistic-linear"
								width="32"
								className="text-white"
							/>
						</div>
						<div className="text-center">
							<div className="text-[10px] font-mono text-accent-400 mb-2 tracking-widest animate-pulse">
								Сканиране на код...
							</div>
							<div className="h-1.5 w-32 bg-zinc-800 rounded-full overflow-hidden">
								<div className="h-full bg-accent-500 w-full animate-[progress_3s_infinite_linear]"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Floating Badge с Framer Motion за мобилни */}
			<AnimatePresence>
				{isLoaded && (
					<motion.div
						initial={{ opacity: 0, y: 20, scale: 0.9 }}
						whileInView={{ opacity: 1, y: 0, scale: 1 }} // Задейства се само при виждане
						viewport={{ once: true, margin: "-50px" }} // Оптимизация за мобилни
						transition={{
							duration: 1.2, // Бавно излизане
							delay: 0.8, // Изчаква малко след зареждането
							ease: "easeOut",
						}}
						className="absolute -bottom-6  md:-left-8 glass-panel p-4 rounded-xl flex items-center gap-3 shadow-2xl z-30"
					>
						<div className="bg-green-500/20 p-2 rounded-lg text-green-400 shrink-0">
							<Icon icon="solar:check-circle-linear" width="24" />
						</div>
						<div>
							<div className="text-white text-sm font-semibold whitespace-nowrap">
								Успешно отключване
							</div>
							<div className="text-zinc-500 text-[10px] uppercase tracking-tighter">
								Преди 12мин
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default TechVisual;
