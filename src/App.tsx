import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import StudentLogin from "./Components/Pages/Studentlogin";
import Homepage from "./Components/Pages/Homepage";
import NoticeBoard from "./Components/Pages/NoticeBoard";
import ComplaintBox from "./Components/Pages/ComplaintBox";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col font-sans">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/Home" element={<Homepage />} />
            <Route path="/" element={<StudentLogin />} />
            <Route path="/Notices" element={<NoticeBoard />} />
            <Route path="/ComplaintBox" element={<ComplaintBox />} />
            <Route path="*" element={
              <div className="flex items-center justify-center h-[60vh] text-slate-400 font-bold">
                404 | Page Not Found
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;