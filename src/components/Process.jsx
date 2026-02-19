import { Icon } from "@iconify/react";

const steps = [
	{
		id: "01",
		title: "Идентификация",
		desc: "Анализ на модела на автомобила или вида на бравата на място.",
	},
	{
		id: "02",
		title: "Изрязване по код",
		desc: "Използване на цифрова CNC машина за прецизна изработка на перото.",
	},
	{
		id: "03",
		title: "Програмиране",
		desc: "Обучаване на чипа към имобилайзера чрез OBD интерфейс.",
	},
	{
		id: "04",
		title: "Тестване",
		desc: "Проверка на всички функционалности и предаване на клиента.",
	},
];

export const Process = () => (
	<section id="process" className="py-24 bg-zinc-900/50 border-y border-white/5">
		<div className="max-w-7xl mx-auto px-4">
			<h2 className="text-3xl font-bold text-center text-white mb-16 uppercase tracking-tight">
				Как работим
			</h2>
			<div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
				{/* Connecting Line (Desktop) */}
				<div className="hidden lg:block absolute top-8 left-0 w-full h-px bg-zinc-800 -z-0"></div>

				{steps.map((step) => (
					<div key={step.id} className="relative z-10 text-center group">
						<div className="w-16 h-16 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-xl font-bold text-accent-500 mx-auto mb-6 group-hover:border-accent-500 transition-all shadow-2xl">
							{step.id}
						</div>
						<h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
						<p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
					</div>
				))}
			</div>
		</div>
	</section>
);
