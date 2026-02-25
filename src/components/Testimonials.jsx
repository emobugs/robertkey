import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const reviews = [
	{
		name: "Rumen Marinov",
		initials: "R",
		color: "bg-red-600",
		time: "преди 2 месеца",
		text: "Момчетата работят бързо и качествено! Имахме проблем с патрона и бравата. Въпреки, че вече бяха някъде на адрес, ключарите се отзоваха много бързо на молбата ни и за много кратко време имахме отново работещи секретен патрон и брава! Много сме доволни и горещо препоръчвам Robert Key!",
	},
	{
		name: "Gabbie Ivanova",
		initials: "G",
		color: "bg-orange-500",
		time: "преди 2 месеца",
		text: "Препоръчвам с две ръце! Звъннах им на 24 декември, бях си заключила колата с всичките ми документи и ключове вътре! Момчето откликна веднага и дойде до 15 мин. Много съм благодарна! 😊",
	},
	{
		name: "Reneta Peicheva",
		initials: "R",
		color: "bg-purple-600",
		time: "преди 2 месеца",
		text: "Имахме проблем с ключалка на входната врата в къщи, открих ателието в интернет, обясних и след час вече имахме нов патрон ❗ Дойде момчето веднага, на место отстрани проблема ❗ Благодаря, соволни сме ❗",
	},
	{
		name: "Mariyan Himselff",
		initials: "M",
		color: "bg-yellow-600",
		badge: "Местен гид",
		time: "преди 6 месеца",
		text: "Най добрия Ключар в града , няма значение часа или ключалката , отваря всичко с един ключ 😄",
	},
	{
		name: "Калоян Недев",
		initials: "К",
		color: "bg-blue-600",
		time: "преди 10 месеца",
		text: "Благодаря! за коректността и бързата реакция останах мн доволен",
	},
	{
		name: "Петър Пейчев",
		initials: "П",
		color: "bg-emerald-600",
		time: "преди 4 седмици",
		text: "Сериозни момчета. Дойдоха до адрес за по-малко от 15мин. Свършиха си работата перфектно.",
	},
];

function StarRating() {
	return (
		<div className="flex gap-0.5">
			{[...Array(5)].map((_, i) => (
				<Icon key={i} icon="solar:star-bold" width="14" className="text-yellow-400" />
			))}
		</div>
	);
}

function ReviewCard({ review, index }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 36 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
			className="glass-panel rounded-2xl p-6 flex flex-col gap-4 hover:bg-white/5 transition-all"
		>
			{/* Header */}
			<div className="flex items-center gap-3">
				<div
					className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white font-semibold text-sm shrink-0`}
				>
					{review.initials}
				</div>
				<div className="flex-1 min-w-0">
					<div className="flex items-center gap-2 flex-wrap">
						<span className="text-white font-medium text-sm">{review.name}</span>
						{review.badge && (
							<span className="text-[10px] text-yellow-400 border border-yellow-400/30 rounded-full px-2 py-0.5 bg-yellow-400/10">
								{review.badge}
							</span>
						)}
					</div>
					<div className="flex items-center gap-2 mt-0.5">
						<StarRating />
						<span className="text-zinc-500 text-xs">{review.time}</span>
					</div>
				</div>
				{/* Google logo */}
				<Icon icon="logos:google-icon" width="18" className="shrink-0 opacity-70" />
			</div>

			{/* Text */}
			<p className="text-zinc-400 text-sm leading-relaxed">{review.text}</p>
		</motion.div>
	);
}

function Testimonials() {
	return (
		<section id="testimonials" className="py-24 max-w-7xl mx-auto px-4">
			{/* Header */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-60px" }}
				transition={{ duration: 0.5 }}
				className="text-center mb-16"
			>
				<h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
					Какво казват клиентите
				</h2>
				<p className="text-zinc-400 max-w-xl mx-auto mb-6">
					Реални отзиви от Google — непроменени.
				</p>
				{/* Overall rating badge */}
				<a
					href="https://www.google.com/maps/search/Robert+Key+Silsistra"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-3 glass-panel px-5 py-3 rounded-full hover:bg-white/5 transition-all group"
				>
					<Icon icon="logos:google-icon" width="20" />
					<div className="flex items-center gap-1.5">
						<span className="text-white font-semibold text-lg leading-none">5.0</span>
						<div className="flex gap-0.5">
							{[...Array(5)].map((_, i) => (
								<Icon
									key={i}
									icon="solar:star-bold"
									width="14"
									className="text-yellow-400"
								/>
							))}
						</div>
					</div>
					<span className="text-zinc-400 text-sm">в Google</span>
					<Icon
						icon="solar:arrow-right-up-linear"
						width="14"
						className="text-zinc-500 group-hover:text-accent-400 transition-colors"
					/>
				</a>
			</motion.div>

			{/* Grid */}
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
				{reviews.map((review, i) => (
					<ReviewCard key={i} review={review} index={i} />
				))}
			</div>
		</section>
	);
}

export default Testimonials;
