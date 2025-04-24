import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getMeeting, updateMeeting} from "../api";


export default function EditMeeting() {
    const [form, setForm] = useState({ title: '', description: '', startTime: '', endTime: '' });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getMeeting(id).then((res) => setForm(res.data));
    }, [id]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateMeeting(id, form);
        navigate('/');
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Edit Meeting</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="w-full p-2 border" />
                <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border" />
                <div className="flex gap-4">
                <input name="startTime" value={form.startTime} onChange={handleChange} placeholder="Start Time" className="w-full p-2 border" />
                <input name="endTime" value={form.endTime} onChange={handleChange} placeholder="End Time" className="w-full p-2 border" />
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2">Update</button>
            </form>
        </div>
    );
}
