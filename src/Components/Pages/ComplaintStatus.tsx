import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiClock, FiActivity, FiCheckCircle, FiHash, FiShield } from "react-icons/fi";
import Navbar from "../Navbar";

interface Complaint {
    id: string;
    subject: string;
    category: string;
    date: string;
    status: string;
    update: string;
}

const STATUS_STAGES = [
    { label: "Pending", icon: FiClock, color: "text-amber-500", bg: "bg-amber-500" },
    { label: "In Progress", icon: FiActivity, color: "text-blue-500", bg: "bg-blue-500" },
    { label: "Resolved", icon: FiCheckCircle, color: "text-green-500", bg: "bg-green-500" }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export default function ComplaintStatus() {
    const [searchId, setSearchId] = useState("");
    const [complaint, setComplaint] = useState<Complaint | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!searchId) return;
        setLoading(true);
        setComplaint(null); // Reset for new animation

        setTimeout(() => {
            setComplaint({
                id: searchId,
                subject: "Electrical failure in Lab 3",
                category: "Electrical Issue",
                date: "Feb 20, 2026",
                status: "In Progress",
                update: "Technician assigned and parts ordered."
            });
            setLoading(false);
        }, 1200);
    };

    return (
        <div className="min-h-screen bg-slate-50 relative overflow-hidden font-sans">
            {/* --- DYNAMIC THEME LAYER --- */}
            <div className="absolute inset-0 z-0 opacity-[0.2]"
                style={{ backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />

            {/* Moving Background Blobs */}
            <motion.div
                animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none"
            />
            <motion.div
                animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-[100px] pointer-events-none"
            />

            <Navbar />

            <div className="relative z-10 max-w-4xl mx-auto pt-32 px-6 pb-20">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest border border-blue-100 mb-4 shadow-sm">
                        <FiShield /> Live Tracking System
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                        Check Status <span className="text-blue-600">Instantly</span>
                    </h1>
                    <p className="text-slate-500 max-w-lg mx-auto font-medium">
                        Enter your unique ID to see where your report is in our resolution pipeline.
                    </p>
                </motion.div>

                {/* Search Bar with Pulse on Hover */}
                <motion.form
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onSubmit={handleSearch}
                    className="max-w-xl mx-auto mb-16 relative"
                >
                    <div className="relative group">
                        <FiHash className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors z-20" />
                        <input
                            type="text"
                            placeholder="Enter Complaint ID (e.g. #CMP-102)"
                            value={searchId}
                            onChange={(e) => setSearchId(e.target.value)}
                            className="w-full pl-14 pr-32 py-5 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-2xl focus:ring-8 focus:ring-blue-500/5 outline-none transition-all text-slate-900 font-bold"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="absolute right-3 top-1/2 -translate-y-1/2 px-7 py-3 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-blue-200 disabled:opacity-50"
                        >
                            {loading ? <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}> <FiActivity /> </motion.div> : <><FiSearch /> Track</>}
                        </button>
                    </div>
                </motion.form>

                <AnimatePresence>
                    {complaint && (
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="space-y-8"
                        >
                            {/* Main Card */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-white/90 backdrop-blur-2xl p-8 md:p-12 rounded-[3.5rem] border border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] relative overflow-hidden"
                            >
                                {/* Decorative Glow inside card */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl" />

                                <div className="flex justify-between items-center mb-16 relative px-4">
                                    {/* Progress Line Layer */}
                                    <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0" />
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: complaint.status === "Pending" ? "0%" : complaint.status === "In Progress" ? "50%" : "100%" }}
                                        className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 -translate-y-1/2 z-0 shadow-[0_0_10px_rgba(37,99,235,0.3)]"
                                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                                    />

                                    {STATUS_STAGES.map((stage, idx) => {
                                        const isCompleted = STATUS_STAGES.findIndex(s => s.label === complaint.status) >= idx;
                                        return (
                                            <div key={idx} className="relative z-10 flex flex-col items-center gap-4">
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: idx * 0.2 + 0.8 }}
                                                    className={`w-16 h-16 rounded-3xl flex items-center justify-center transition-all duration-700 rotate-3 group hover:rotate-0 ${isCompleted ? `${stage.bg} text-white shadow-2xl shadow-blue-200` : 'bg-white text-slate-300 border border-slate-100'}`}
                                                >
                                                    <stage.icon size={28} />
                                                </motion.div>
                                                <span className={`text-[10px] font-black uppercase tracking-widest ${isCompleted ? 'text-slate-900' : 'text-slate-400'}`}>
                                                    {stage.label}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Details Grid */}
                                <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-10 pt-10 border-t border-slate-100/50">
                                    <div className="space-y-1">
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500">Topic</span>
                                        <p className="text-2xl font-bold text-slate-900 tracking-tight">{complaint.subject}</p>
                                    </div>
                                    <div className="md:text-right space-y-1">
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Admin Comment</span>
                                        <p className="text-slate-600 font-medium italic">"{complaint.update}"</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="px-4 py-2 bg-slate-100 rounded-xl text-xs font-bold text-slate-600">
                                            {complaint.category}
                                        </div>
                                        <div className="text-xs font-bold text-slate-400">
                                            ID: {complaint.id}
                                        </div>
                                    </div>
                                    <div className="md:text-right text-xs font-bold text-slate-400 self-center">
                                        Filed on {complaint.date}
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Bottom Call to action or Info */}
                            <motion.p variants={itemVariants} className="text-center text-slate-400 text-xs font-medium">
                                If you believe this status is incorrect, please visit the HOD office or resubmit your complaint.
                            </motion.p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}