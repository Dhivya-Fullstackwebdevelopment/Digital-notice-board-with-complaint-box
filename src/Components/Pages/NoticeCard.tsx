import { motion } from "framer-motion";
import { FiBell, FiCalendar } from "react-icons/fi";

export default function NoticeCard({ notice }: { notice: any }) {
  const categoryColors = {
    Academic: "bg-blue-50 text-blue-600 border-blue-100",
    Event: "bg-purple-50 text-purple-600 border-purple-100",
    Holiday: "bg-green-50 text-green-600 border-green-100",
    Emergency: "bg-red-50 text-red-600 border-red-100 animate-pulse",
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="h-full" // Ensures the motion wrapper allows full height
    >
      <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full relative overflow-hidden">
        
        {/* Header: Reduced font and padding */}
        <div className="flex justify-between items-center mb-4">
          <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase border ${categoryColors[notice.category as keyof typeof categoryColors]}`}>
            {notice.category}
          </span>
          <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400">
            <FiCalendar size={12} />
            {notice.date}
          </div>
        </div>

        {/* Title: Reduced from text-2xl to text-lg */}
        <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
          {notice.title}
        </h3>

        {/* Content: Added flex-1 to push the button down */}
        <p className="text-slate-500 text-xs leading-relaxed mb-6 line-clamp-3 flex-1">
          {notice.content}
        </p>

        {/* Footer Button: Always at the bottom */}
        <div className="mt-auto">
          <button className="flex items-center gap-2 text-[11px] font-black text-blue-600 hover:gap-3 transition-all uppercase tracking-wider">
            Read More
            <FiBell size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}