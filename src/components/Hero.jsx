import { Icon } from "@iconify/react";
import TechVisual from "./TechVisual";

export const Hero = () => {
	return (
		<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
			<div className="tech-grid absolute inset-0 opacity-20"></div>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
					<div className="text-center lg:text-left">
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-xs font-medium mb-6 uppercase tracking-widest">
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
								<span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
							</span>
							Авариен Ключар/Автоключар Силистра
						</div>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
							Професионално <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-yellow-200">
								ВЪЗСТАНОВЯВАНЕ
							</span>{" "}
							на достъпа.
						</h1>
						<p className="text-lg text-zinc-400 mb-8 max-w-xl mx-auto lg:mx-0">
							Бърза реакция до 20 минути. Използваме професионална техника за направа
							на ключ по код, дори без наличието на оригинал.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start font-medium">
							<a
								href="tel:+359 89 292 2332"
								className="inline-flex items-center justify-center gap-2 bg-white text-zinc-950 hover:bg-accent-400 hover:text-white px-8 py-3.5 rounded-lg transition-all"
							>
								<Icon icon="solar:phone-linear" width="20" /> Обади се сега
							</a>
							<a
								href="#services"
								className="inline-flex group items-center justify-center gap-2 glass-panel text-white px-8 py-3.5 rounded-lg transition-all"
							>
								<span className="group-hover:scale-[1.05]">Виж услуги </span>
								<Icon
									icon="solar:arrow-right-linear"
									width="20"
									className="mt-1 group-hover:text-accent-400 group-hover:scale-[1.2]"
								/>
							</a>
						</div>
					</div>

					<TechVisual />
				</div>
			</div>
		</section>
	);
};

export default Hero;
