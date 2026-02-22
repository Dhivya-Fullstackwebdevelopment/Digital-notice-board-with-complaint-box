import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiBell, FiArrowRight } from "react-icons/fi";

interface Notice {
    id: string | number;
    category: string;
    date: string;
    title: string;
    content: string;
}

export default function NoticesPreview({ notices }: { notices: Notice[] }) {
    const duplicatedNotices = [...notices, ...notices,...notices];

    return (
        <section className="py-24 bg-white relative border-y border-slate-100 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23000' stroke-width='1'%3E%3Cpath d='M36 34v-4H20v4H15V20h4v-5h10v5h5v10h10V15h10v15h-5v4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
            />
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/30 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-200/30 rounded-full blur-[120px] pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 mb-12">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-4xl font-extrabold text-slate-900 flex items-center gap-3 justify-center md:justify-start tracking-tight">
                            <FiBell className="text-blue-600" /> Latest Announcements
                        </h2>
                        <p className="text-slate-500 text-lg italic font-medium">
                            Stay updated with the latest happenings.
                        </p>
                    </div>
                    <Link to="/notices" className="text-blue-600 font-bold hover:underline flex items-center gap-2 self-center md:self-end mb-1">
                        View All Notices <FiArrowRight size={16} />
                    </Link>
                </div>
            </div>

            <div className="relative z-10">
                <div className="absolute top-0 left-0 w-[10%] md:w-[15%] h-full bg-linear-to-r from-white via-white to-transparent z-20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-[10%] md:w-[15%] h-full bg-linear-to-l from-white via-white to-transparent z-20 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        className="flex gap-6 cursor-grab active:cursor-grabbing"
                        animate={{
                            x: ["0%", "-50%"]
                        }}
                        transition={{
                            ease: "linear",
                            duration: 30,
                            repeat: Infinity,
                        }}
                        whileHover={{ animationPlayState: "paused" }}
                        whileTap={{ animationPlayState: "paused" }}
                        drag="x"
                        dragConstraints={{ left: -2000, right: 0 }}
                    >
                        {duplicatedNotices.map((notice, idx) => (
                            <div
                                key={`${notice.id}-${idx}`}
                                className="bg-slate-50/60 backdrop-blur-sm p-7 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group/card w-75 md:w-95 shrink-0"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-extrabold uppercase rounded-lg border border-blue-100">
                                        {notice.category}
                                    </span>
                                    <span className="text-xs text-slate-400 font-bold">{notice.date}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover/card:text-blue-600 transition-colors line-clamp-2 text-slate-900">
                                    {notice.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                                    {notice.content}
                                </p>
                                <button className="text-sm font-bold text-slate-900 flex items-center gap-1 group-hover/card:gap-3 transition-all mt-auto">
                                    Read Full Notice <FiArrowRight size={14} className="text-blue-600" />
                                </button>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}