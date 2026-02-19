function Process() {
	const steps = [
		{ id: "01", title: "Идентификация", desc: "Анализ на модела на място." },
		{ id: "02", title: "Изрязване по код", desc: "Цифрова CNC прецизност." },
		{ id: "03", title: "Програмиране", desc: "Обучаване на чипа към OBD." },
		{ id: "04", title: "Тестване", desc: "Проверка и предаване." },
	];
	return (
		<section id="process" className="py-24 bg-zinc-900/50 border-y border-white/5">
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="text-3xl font-semibold text-white text-center mb-16 uppercase tracking-widest">
					Как работим
				</h2>
				<div className="relative grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-6">
					<div className="hidden lg:block absolute top-8 left-0 w-full h-px bg-zinc-800"></div>
					{steps.map((step) => (
						<div
							key={step.id}
							className="relative z-10 flex lg:flex-col items-start lg:items-center gap-6 lg:text-center group"
						>
							<div className="w-16 h-16 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-xl font-bold text-white shadow-lg group-hover:border-accent-500/50 group-hover:text-accent-500 transition-all shrink-0">
								{step.id}
							</div>
							<div>
								<h3 className="text-lg font-medium text-white mb-2">
									{step.title}
								</h3>
								<p className="text-zinc-500 text-sm leading-snug">{step.desc}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Process;
