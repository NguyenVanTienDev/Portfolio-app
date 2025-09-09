"use client";

import { Button } from "@/components/ui/button";
import { Code, Database, Globe, User } from "lucide-react";

export default function Home() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Radial Gradient Background from Bottom */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)",
        }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-12 max-w-5xl mx-auto">
          {/* Avatar Section */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white/20 backdrop-blur-sm">
                <User className="w-16 h-16 md:w-20 md:h-20 text-white" />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full blur-xl opacity-30 -z-10"></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 bg-clip-text text-transparent tracking-tight">
              Nguyễn Văn Tiến
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-300">
              Fullstack Developer
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              Tôi là một Fullstack Developer với niềm đam mê tạo ra những ứng
              dụng web hiện đại và có khả năng mở rộng. Chuyên về việc xây dựng
              các giải pháp công nghệ từ frontend đến backend.
            </p>

            {/* Skills Icons */}
            <div className="flex justify-center items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                <Code className="w-5 h-5" />
                <span className="text-sm font-medium">Frontend</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                <Database className="w-5 h-5" />
                <span className="text-sm font-medium">Backend</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium">Fullstack</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="text-lg px-10 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              Xem dự án của tôi
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
