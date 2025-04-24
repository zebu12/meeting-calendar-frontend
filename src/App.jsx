import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import CreateMeeting from "./pages/CreateMeeting";
import EditMeeting from "./pages/EditMeeting";


export default function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900">
                <nav className="p-4 bg-blue-600 text-white flex gap-4">
                    <Link to="/">Home</Link>
                    <Link to="/create">Create Meeting</Link>
                </nav>
                <div className="p-4">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/create" element={<CreateMeeting />} />
                        <Route path="/edit/:id" element={<EditMeeting />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}