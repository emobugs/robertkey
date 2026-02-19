import { Icon } from "@iconify/react";

export const Hero = () => (
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
						Бърза реакция до 20 минути. Използваме професионална техника за направа на
						ключ по код, дори без наличието на оригинал.
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
							className="inline-flex items-center justify-center gap-2 glass-panel text-white px-8 py-3.5 rounded-lg transition-all"
						>
							Виж услуги{" "}
							<Icon
								icon="solar:arrow-right-linear"
								width="20"
								className="hover:text-accent-400 hover:scale-[1.5] transition-all"
							/>
						</a>
					</div>
				</div>

				<div className="relative mx-auto w-full max-w-lg aspect-square flex flex-col justify-center">
					<div className="glass-panel rounded-2xl p-1 relative overflow-hidden shadow-2xl border border-white/10">
						<div className="bg-zinc-900 rounded-xl h-full w-full aspect-video flex flex-col items-center justify-center relative overflow-hidden">
							<div
								className="absolute inset-0 opacity-10"
								style={{
									backgroundImage:
										"radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
									backgroundSize: "24px 24px",
								}}
							></div>
							<div className="z-10 flex flex-col items-center gap-4">
								<div className="w-16 h-16 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center relative">
									<div className="absolute inset-0 rounded-full border border-accent-500/30 animate-[spin_4s_linear_infinite]"></div>
									<Icon
										icon="solar:key-minimalistic-linear"
										width="32"
										className="text-white"
									/>
								</div>
								<div className="text-center">
									<div className="text-[10px] font-mono text-accent-400 mb-2 tracking-tighter">
										СКАНИРАНЕ НА КОД...
									</div>
									<div className="h-1.5 w-32 bg-zinc-800 rounded-full overflow-hidden">
										<div className="h-full bg-accent-500 w-2/3 animate-pulse"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Floating Badge */}
					<div className="absolute -bottom-8 md:-left-6 glass-panel p-4 rounded-xl flex items-center gap-3 animate-bounce shadow-xl">
						<div className="bg-green-500/20 p-2 rounded-lg text-green-400">
							<Icon icon="solar:check-circle-linear" width="24" />
						</div>
						<div>
							<div className="text-white text-sm font-medium">Успешно отключване</div>
							<div className="text-zinc-500 text-[10px]">Преди 12 мин</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Hero;
