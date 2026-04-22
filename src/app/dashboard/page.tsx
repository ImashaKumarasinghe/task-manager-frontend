"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TaskForm from "../../components/TaskForm";
import TaskList from "../../components/TaskList";
import { apiFetch } from "../../lib/api";
import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebase";


type Task = {
  id: number;
  title: string;
  description?: string;
  isCompleted: boolean;
  userId: string;
};

export default function DashboardPage() {
  const router = useRouter();

  const [tasks, setTasks] = useState<Task[]>([]);
  //filter
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await apiFetch("/api/tasks");

      if (response.status === 401) {
        localStorage.removeItem("token");
        router.push("/login");
        return;
      }

      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }

      const data = await response.json();
      setTasks(data);
    } catch (err: any) {
      console.error(err);
      setError("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (title: string, description: string) => {
    try {
      setError("");

      const response = await apiFetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add task");
      }

      await fetchTasks();
    } catch (err: any) {
      console.error(err);
      setError("Failed to add task");
    }
  };

  const toggleComplete = async (task: Task) => {
    try {
      setError("");

      const response = await apiFetch(`/api/tasks/${task.id}`, {
        method: "PUT",
        body: JSON.stringify({
          title: task.title,
          description: task.description,
          isCompleted: !task.isCompleted,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update task");
      }

      await fetchTasks();
    } catch (err: any) {
      console.error(err);
      setError("Failed to update task");
    }
  };

  const deleteTask = async (id: number) => {
    try {
      setError("");

      const response = await apiFetch(`/api/tasks/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete task");
      }

      await fetchTasks();
    } catch (err: any) {
      console.error(err);
      setError("Failed to delete task");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    router.push("/login");
  };
  //filter
  const filteredTasks = tasks.filter((task) => {
  if (filter === "completed") return task.isCompleted;
  if (filter === "pending") return !task.isCompleted;
  return true; // "all"
});

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">
          Mini Task Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      <div className="max-w-3xl mx-auto p-6 space-y-6">
        <TaskForm onAddTask={addTask} />
        <div className="flex gap-3 justify-center">
  <button
    onClick={() => setFilter("all")}
    className={`px-4 py-2 rounded-lg ${
      filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200"
    }`}
  >
    All
  </button>

  <button
    onClick={() => setFilter("completed")}
    className={`px-4 py-2 rounded-lg ${
      filter === "completed" ? "bg-green-600 text-white" : "bg-gray-200"
    }`}
  >
    Completed
  </button>

  <button
    onClick={() => setFilter("pending")}
    className={`px-4 py-2 rounded-lg ${
      filter === "pending" ? "bg-yellow-500 text-white" : "bg-gray-200"
    }`}
  >
    Pending
  </button>
</div>

        {loading && (
          <div className="bg-white p-4 rounded-xl shadow text-center">
            Loading tasks...
          </div>
        )}

        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded-xl">
            {error}
          </div>
        )}

        {!loading && !error && (
          <TaskList
            tasks={filteredTasks}
            onToggleComplete={toggleComplete}
            onDeleteTask={deleteTask}
          />
        )}
      </div>
    </div>
  );
}