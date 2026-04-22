"use client";

import TaskItem from "./TaskItem";

type Task = {
  id: number;
  title: string;
  description?: string;
  isCompleted: boolean;
  userId: string;
};

type TaskListProps = {
  tasks: Task[];
  onToggleComplete: (task: Task) => Promise<void>;
  onDeleteTask: (id: number) => Promise<void>;
};

export default function TaskList({
  tasks,
  onToggleComplete,
  onDeleteTask,
}: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="bg-white p-4 rounded-xl shadow text-gray-500 text-center">
        No tasks found.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}