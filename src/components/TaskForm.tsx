"use client";

import { useState } from "react";

type TaskFormProps = {
  onAddTask: (title: string, description: string) => Promise<void>;
};

export default function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Title is required");
      return;
    }

    try {
      setLoading(true);
      await onAddTask(title, description);
      setTitle("");
      setDescription("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-5 rounded-xl shadow space-y-4"
    >
      <h2 className="text-xl font-semibold text-blue-700">Add New Task</h2>

      <input
        type="text"
        placeholder="Task title"
        className="w-full p-3 border rounded-lg"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Task description"
        className="w-full p-3 border rounded-lg"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        {loading ? "Adding..." : "Add Task"}
      </button>
    </form>
  );
}