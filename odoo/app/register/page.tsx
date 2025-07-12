"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthForm from "../../components/AuthForm";
import { supabase } from "../../lib/supabaseClient";

export default function RegisterPage() {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        router.replace("/dashboard");
      }
    };
    checkSession();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-6">
          {/* Avatar icon (SVG) */}
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold mb-2">Register</h2>
        <AuthForm mode="register" />
      </div>
    </div>
  );
} 