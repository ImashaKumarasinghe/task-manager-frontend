"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 px-6">
      
      {/* Main Card */}
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-4xl w-full flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Side - Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Mini Task Manager
          </h1>

          <p className="text-gray-600 mb-6">
            Manage your daily tasks easily and securely.  
            Stay organized, track progress, and boost productivity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            
            {/* Login Button */}
            <button
              onClick={() => router.push("/login")}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>

            {/* Register Button */}
            <button
              onClick={() => router.push("/register")}
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Register
            </button>

          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1">
          <Image
            src="/task.png"   // 👉 add this image in public folder
            alt="Task Management"
            width={400}
            height={300}
            className="w-full h-auto"
          />
        </div>

      </div>

      {/* Footer */}
      <p className="mt-6 text-sm text-gray-500">
        Built with Next.js, Firebase & ASP.NET Core
      </p>

    </div>
  );
}