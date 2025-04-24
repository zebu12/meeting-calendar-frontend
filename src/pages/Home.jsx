import {useEffect, useState} from "react";
import {deleteMeeting, getMeetings} from "../api";
import {Link} from "react-router-dom";


export default function Home() {
    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
        fetchMeetings();
    }, []);

    const fetchMeetings = async () => {
        const res = await getMeetings();
        setMeetings(res.data);
    };

    const handleDelete = async (id) => {
        await deleteMeeting(id);
        fetchMeetings();
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Meeting List</h1>
            <ul className="space-y-2">
                {meetings.map((m) => (
                    <li key={m.id} className="border p-4 rounded shadow-sm">
                        <h2 className="font-semibold text-lg">{m.title}</h2>
                        <p>{m.description}</p>
                        <div className="mt-2 text-sm text-gray-600">
                            {m.startTime} → {m.endTime}
                        </div>
                        <div className="mt-2 flex gap-2">
                            <Link to={`/edit/${m.id}`} className="text-blue-600">Edit</Link>
                            <button onClick={() => handleDelete(m.id)} className="text-red-600">Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}