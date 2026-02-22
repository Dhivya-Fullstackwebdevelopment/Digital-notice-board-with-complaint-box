import { useState } from "react";
import { FiSend, FiLock, FiUser } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Navbar";

export default function ComplaintBox() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [category, setCategory] = useState("");
    const [department, setDepartment] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200">
            <Navbar />

            <div className="max-w-3xl mx-auto pt-28 px-6 pb-20">

                {/* Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-5 py-2 bg-red-100 text-red-600 text-xs font-semibold tracking-wider rounded-full border border-red-200 mb-5"
                    >
                        <FiLock size={14} />
                        Anonymous & Secure
                    </motion.div>

                    <h1 className="text-4xl font-bold text-slate-900 mb-4">
                        Secure Complaint Box
                    </h1>

                    <p className="text-slate-500 text-base max-w-xl mx-auto">
                        Report ragging, harassment, or facility issues safely.
                        Your identity remains protected and confidential.
                    </p>
                </div>

                <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="backdrop-blur-lg bg-white/80 border border-white/40 shadow-2xl rounded-[2.5rem] p-8 md:p-10">

                                <h2 className="text-xl font-semibold text-slate-800 mb-6">
                                    File a New Report
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-6">

                                    {/* Name */}
                                    <div>
                                        <label className="text-sm font-medium text-slate-600">
                                            Full Name (Optional)
                                        </label>
                                        <div className="relative mt-2">
                                            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                            <input
                                                type="text"
                                                placeholder="Leave blank to remain anonymous"
                                                className="w-full pl-11 pr-4 py-3 border  placeholder:text-gray-400 text-black border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                            />
                                        </div>
                                    </div>

                                    {/* Category + Department */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="text-sm font-medium text-slate-600">
                                                Issue Category
                                            </label>
                                            <select
                                                value={category}
                                                onChange={(e) => setCategory(e.target.value)}
                                                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-xl bg-white text-black focus:ring-2 focus:ring-blue-500 outline-none transition">
                                                <option value="">Select Issue Category</option>

                                                <option value="1">Internal Marks Issue</option>
                                                <option value="2">Attendance Shortage Dispute</option>
                                                <option value="3">Exam Timetable Conflict</option>
                                                <option value="4">Result Correction Request</option>
                                                <option value="5">Faculty Behavior Complaint</option>
                                                <option value="6">Project Evaluation Issue</option>

                                                <option value="7">Ragging Complaint</option>
                                                <option value="8">Verbal Harassment</option>
                                                <option value="9">Physical Harassment</option>
                                                <option value="10">Cyber Bullying</option>

                                                <option value="11">Sexual Harassment</option>
                                                <option value="12">Gender Discrimination</option>

                                                <option value="13"> Classroom Maintenance Issue</option>
                                                <option value="14">Washroom Cleanliness</option>
                                                <option value="15">Drinking Water Problem</option>
                                                <option value="16">Electrical Issue</option>

                                                <option value="17"> Hostel Room Allocation</option>
                                                <option value="18">Hostel Food Quality</option>
                                                <option value="19">Hostel WiFi Problem</option>

                                                <option value="20">Library Book Not Available</option>
                                                <option value="21">Library Fine Issue</option>

                                                <option value="22">Bus Timing Issue</option>
                                                <option value="23">Driver Behavior Complaint</option>

                                                <option value="24">Certificate Delay</option>
                                                <option value="25">Scholarship Issue</option>
                                                <option value="26">Fee Payment Problem</option>

                                                <option value="27">Portal Login Issue</option>
                                                <option value="28"> Lab System Not Working</option>
                                                <option value="29"> Internet Connectivity Issue</option>

                                                <option value="30"> Campus Security Concern</option>
                                                <option value="31">CCTV Not Working</option>

                                                <option value="99">Other</option>
                                            </select>
                                        </div>

                                        {category === "99" && (
                                            <div>
                                                <label className="text-sm font-medium text-slate-600">
                                                    Specify Other Issue
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter your issue category"
                                                    className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-xl bg-white text-black placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                                />
                                            </div>
                                        )}
                                        <div>
                                            <label className="text-sm font-medium text-slate-600">
                                                Department
                                            </label>
                                            <select
                                                value={department}
                                                onChange={(e) => setDepartment(e.target.value)}
                                                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-xl bg-white text-black focus:ring-2 focus:ring-blue-500 outline-none transition"
                                            >
                                                <option value="">Select Department</option>

                                                <option value="1">Computer Science & Engineering</option>
                                                <option value="2">Information Technology</option>
                                                <option value="3">Electronics & Communication</option>
                                                <option value="4">Electrical & Electronics</option>
                                                <option value="5">Mechanical Engineering</option>
                                                <option value="6">Civil Engineering</option>
                                                <option value="7">Artificial Intelligence</option>
                                                <option value="8">MBA</option>
                                                <option value="9">BBA</option>
                                                <option value="10">B.Com</option>
                                                <option value="11">M.Com</option>
                                                <option value="12">English</option>
                                                <option value="13">Mathematics</option>

                                                <option value="99">Other</option>
                                            </select>
                                        </div>
                                        {department === "99" && (
                                            <div>
                                                <label className="text-sm font-medium text-slate-600">
                                                    Specify Department
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter your department"
                                                    className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-xl bg-white text-black placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                                />
                                            </div>
                                        )}
                                    </div>


                                    {/* Subject */}
                                    <div>
                                        <label className="text-sm font-medium text-slate-600">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Brief summary of the issue"
                                            className="w-full mt-2 px-4 py-3 border text-black placeholder:text-gray-400  border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                        />
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <label className="text-sm font-medium text-slate-600">
                                            Detailed Description
                                        </label>
                                        <textarea
                                            rows={5}
                                            placeholder="Describe the incident, location, and people involved..."
                                            className="w-full mt-2 px-4 py-3 border text-black placeholder:text-gray-400  border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        type="submit"
                                        className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-blue-300 transition flex items-center justify-center gap-2"
                                    >
                                        Submit Report
                                        <FiSend />
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-16 bg-white rounded-3xl shadow-xl"
                        >
                            <div className="text-green-500 text-5xl mb-4">✔</div>
                            <h2 className="text-2xl font-semibold mb-3">Report Submitted</h2>
                            <p className="text-slate-500">
                                Your complaint has been securely submitted.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}