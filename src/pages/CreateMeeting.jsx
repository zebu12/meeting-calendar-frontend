import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {createMeeting} from "../api";


export default function CreateMeeting() {
    const [form, setForm] = useState({
        title: '',
        description: '',
        startTime: '',
        endTime: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createMeeting(form);
        navigate("/");
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Create New Meeting</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input name="title" onChange={handleChange} placeholder="Title" className="w-full p-2 border"/>
                <textarea name="description" onChange={handleChange} placeholder="Description" className="w-full p-2 border"/>
                <div className="flex gap-4">
                <input name="startTime" onChange={handleChange} placeholder="Start Time (YYYY-MM-DDTHH:MM)" className="w-full p-2 border" />
                <input name="endTime" onChange={handleChange} placeholder="End Time (YYYY-MM-DDTHH:MM)" className="w-full p-2 border" />
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2">Create</button>
            </form>
        </div>
    );
}