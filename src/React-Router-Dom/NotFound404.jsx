import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Floating background circles */}
      <motion.div
        className="absolute w-72 h-72 bg-purple-600/30 rounded-full blur-3xl"
        animate={{ x: [0, 100, -100, 0], y: [0, -80, 80, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"
        animate={{ x: [0, -120, 120, 0], y: [0, 100, -100, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-xl p-10 rounded-3xl bg-white/10 backdrop-blur-xl shadow-2xl"
      >
        {/* 404 Text */}
        <motion.h1
          className="text-8xl font-extrabold mb-4"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          404
        </motion.h1>

        <motion.h2
          className="text-2xl font-semibold mb-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Page Not Found
        </motion.h2>

        <motion.p
          className="text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition shadow-lg"
          >
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition"
          >
            Go Back
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
