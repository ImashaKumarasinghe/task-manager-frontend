"use client";

type Task = {
  id: number;
  title: string;
  description?: string;
  isCompleted: boolean;
  userId: string;
};

type TaskItemProps = {
  task: Task;
  onToggleComplete: (task: Task) => Promise<void>;
  onDeleteTask: (id: number) => Promise<void>;
};

export default function TaskItem({
  task,
  onToggleComplete,
  onDeleteTask,
}: TaskItemProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col gap-3">
      <div>
        <h3
          className={`text-lg font-semibold ${
            task.isCompleted ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {task.title}
        </h3>

        <p className="text-gray-600 text-sm">
          {task.description || "No description"}
        </p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => onToggleComplete(task)}
          className={`px-3 py-2 rounded-lg text-white ${
            task.isCompleted ? "bg-yellow-500" : "bg-green-500"
          }`}
        >
          {task.isCompleted ? "Mark Pending" : "Mark Complete"}
        </button>

        <button
          onClick={() => onDeleteTask(task.id)}
          className="px-3 py-2 rounded-lg bg-red-500 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}