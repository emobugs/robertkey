import { Icon } from "@iconify/react";

export const LocalSEO = ({ city = "Силистра" }) => (
	<section className="py-24 max-w-7xl mx-auto px-4">
		<div className="grid lg:grid-cols-2 gap-12 items-center">
			<div>
				<h2 className="text-3xl font-bold text-white mb-6 uppercase">
					Ключарски услуги в {city}
				</h2>
				<div className="space-y-4 text-zinc-400 leading-relaxed">
					<p>
						Търсите надежден{" "}
						<strong className="text-accent-400 uppercase">ключар в {city}</strong>? Ние
						предлагаме бързи решения за всеки авариен случай.
					</p>
					<p>
						Като специализиран{" "}
						<strong className="text-accent-400 uppercase">автоключар</strong>,
						разполагаме с техника за отключване без щети и изработка на{" "}
						<strong className="text-accent-400">ключ по код</strong> на място.
					</p>
				</div>
				<ul className="mt-8 space-y-3">
					<li className="flex items-center gap-3 text-zinc-200">
						<Icon icon="solar:map-point-bold" className="text-accent-500" /> Обслужване
						на адрес в гр. {city}
					</li>
					<li className="flex items-center gap-3 text-zinc-200">
						<Icon icon="solar:map-point-bold" className="text-accent-500" /> Посещение в
						областта и съседните села
					</li>
				</ul>
			</div>

			{/* Map Simulation */}
			<div className="h-80 w-full rounded-3xl bg-zinc-900 border border-white/10 relative overflow-hidden group">
				<div
					className="absolute inset-0 opacity-20"
					style={{
						backgroundImage: "radial-gradient(circle, #333 1px, transparent 1px)",
						backgroundSize: "20px 20px",
					}}
				></div>
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
					<div className="relative">
						<div className="absolute inset-0 bg-accent-500 blur-xl opacity-20 animate-pulse"></div>
						<Icon
							icon="solar:map-point-bold-duotone"
							width="48"
							className="text-accent-500 relative z-10"
						/>
					</div>
					<div className="mt-2 bg-zinc-950 px-4 py-1 rounded-full border border-white/10 text-xs font-bold text-white uppercase">
						{city}
					</div>
				</div>
			</div>
		</div>
	</section>
);
