import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    // fake API delay
    setTimeout(() => {
      setLoading(false);

      navigate("/admin/dashboard");
    }, 2000);
  };

  return (
    <main className="fixed inset-0 bg-gradient-to-br from-pink-300 via-rose-200 to-purple-300 flex items-center justify-center">

      {/* floating dots */}
      <span className="absolute top-10 left-10 w-4 h-4 bg-pink-500 rounded-full opacity-70"></span>
      <span className="absolute bottom-16 right-16 w-5 h-5 bg-purple-500 rounded-full opacity-70"></span>
      <span className="absolute top-1/2 right-10 w-3 h-3 bg-yellow-400 rounded-full"></span>

      {/* Login Card */}
      <section className="relative w-[360px] bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-pink-600 to-rose-500 p-6 text-center relative">
          <h1 className="text-2xl font-bold text-white">Sri Hari Sweets</h1>
          <p className="text-pink-100 text-sm">Admin Login</p>
          <div className="absolute -bottom-6 left-0 w-full h-12 bg-white rounded-t-full"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="px-6 pt-10 pb-8 space-y-4">
          <h2 className="text-lg font-semibold text-gray-700 text-center">
            Welcome Back !
          </h2>

          <input
            type="email"
            placeholder="admin@sriharisweets.com"
            required
            className="w-full px-5 py-3 rounded-full bg-gray-100 text-gray-700
            placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              className="w-full px-5 py-3 pr-14 rounded-full bg-gray-100 text-gray-700
              placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2
              w-10 h-10 bg-white border rounded-full flex items-center justify-center
              text-gray-600 hover:text-pink-600"
            >
              👁
            </button>
          </div>

          <div className="text-right">
            <a className="text-sm text-pink-500 hover:underline cursor-pointer">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-pink-600 to-rose-500
            text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2"
          >
            {loading && (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            )}
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
      </section>
    </main>
  );
}
