"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Sidebar from "@/components/learn/sidebar";

export default function LearnLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();

    // Close sidebar on route change (mobile)
    useEffect(() => {
        setSidebarOpen(false);
    }, [pathname]);

    // Prevent body scroll when sidebar is open on mobile
    useEffect(() => {
        if (sidebarOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [sidebarOpen]);

    return (
        <div className="flex min-h-[calc(100vh-4rem)] max-w-7xl mx-auto">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-72 flex-shrink-0 sticky top-16 h-[calc(100vh-4rem)] border-r border-foreground/10 bg-card/30">
                <Sidebar />
            </div>

            {/* Mobile Sidebar Overlay */}
            <div
                className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${sidebarOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={() => setSidebarOpen(false)}
                />
                {/* Sidebar Drawer */}
                <div
                    className={`absolute top-0 left-0 h-full w-72 bg-background border-r border-foreground/10 shadow-2xl transition-transform duration-300 ease-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    {/* Close Button */}
                    <div className="flex items-center justify-between p-3 border-b border-foreground/10">
                        <span className="text-sm font-medium text-muted-foreground">
                            Lessons
                        </span>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <X size={18} />
                        </button>
                    </div>
                    <Sidebar onClose={() => setSidebarOpen(false)} />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Mobile Sidebar Toggle */}
                <div className="lg:hidden flex items-center px-4 py-2 border-b border-foreground/10">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="flex items-center gap-2 px-3 py-1.5 text-xs border border-foreground/15 text-muted-foreground hover:text-foreground hover:border-foreground/25 transition-colors cursor-pointer"
                    >
                        <Menu size={14} />
                        Lessons
                    </button>
                </div>

                {/* Page Content */}
                <main className="flex-1">{children}</main>
            </div>
        </div>
    );
}
