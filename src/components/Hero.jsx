import { Icon } from "@iconify/react";

export const Hero = ({ city = "Силистра" }) => (
	<section className="relative pt-32 pb-20 overflow-hidden">
		<div className="max-w-7xl mx-auto px-4 relative z-10 text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
			<div>
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-xs font-semibold mb-6">
					АВАРИЕН АВТОКЛЮЧАР {city.toUpperCase()}
				</div>
				<h1 className="text-4xl lg:text-7xl font-bold text-white leading-tight mb-6">
					Професионално{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-yellow-200">
						ВЪЗСТАНОВЯВАНЕ
					</span>{" "}
					НА ДОСТЪПА.
				</h1>
				<p className="text-lg text-zinc-400 mb-8 max-w-xl">
					Бърза реакция до 20 минути. Използваме професионална техника за направа на ключ
					по код.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
					<button className="bg-white text-zinc-950 px-8 py-4 rounded-xl font-bold">
						Обади се сега
					</button>
					<button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold">
						Заяви услуга
					</button>
				</div>
			</div>
			<div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 aspect-video flex flex-col items-center justify-center">
				<Icon
					icon="solar:key-minimalistic-bold-duotone"
					width="60"
					className="text-accent-500 mb-4"
				/>
				<div className="text-xs font-mono text-accent-500 animate-pulse uppercase">
					Сканиране на код...
				</div>
			</div>
		</div>
	</section>
);
