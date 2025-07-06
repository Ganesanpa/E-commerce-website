"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "next-themes";
import { LogOut, Moon, Sun, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  return (
    <nav className="bg-white dark:bg-gray-700 shadow-md p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-blue-600 dark:text-white">
        🛍 MyStore
      </Link>

      <div className="flex items-center gap-4 relative">
        <Link href="/" className="text-blue-600 dark:text-white hover:underline">
          Home
        </Link>

        <Link href="/cart" className="text-blue-600 dark:text-white hover:underline">
          Cart
        </Link>

        {user ? (
          <div className="relative">
            <button
              onClick={() => setShowDropdown((prev) => !prev)}
              className="flex items-center gap-1 text-gray-700 dark:text-white hover:underline"
            >
              <User size={18} />
              {user.name}
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 bg-white dark:bg-gray-700 shadow rounded py-2 w-40 z-10">
              
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Profile
                </Link>
                <Link
                  href="/orders"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Orders
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/auth/login" className="text-blue-600 dark:text-white hover:underline">
            Login
          </Link>
        )}

        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-blue-600 dark:text-white"
            title="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        )}
      </div>
    </nav>
  );
}
