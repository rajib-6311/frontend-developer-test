"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", value: 10 },
  { name: "Tue", value: 30 },
  { name: "Wed", value: 20 },
  { name: "Thu", value: 50 },
  { name: "Fri", value: 40 },
  { name: "Sat", value: 60 },
  { name: "Sun", value: 35 },
];

export default function DashboardHome() {
  return (
    <div className="p-6 space-y-8">
      {/* ✅ Static Summary Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
        <p className="text-gray-600">
          Here’s a quick summary of your dashboard this week.
        </p>
      </motion.div>

      {/*  Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white shadow rounded-2xl"
        >
          <h2 className="text-lg font-semibold text-gray-700">Users</h2>
          <p className="text-2xl font-bold text-blue-600">1,245</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white shadow rounded-2xl"
        >
          <h2 className="text-lg font-semibold text-gray-700">Revenue</h2>
          <p className="text-2xl font-bold text-green-600">$8,420</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white shadow rounded-2xl"
        >
          <h2 className="text-lg font-semibold text-gray-700">Orders</h2>
          <p className="text-2xl font-bold text-purple-600">320</p>
        </motion.div>
      </div>

      {/* ✅ Small Animated Chart */}
      <div className="p-6 bg-white shadow rounded-2xl h-80">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Weekly Activity
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#e5e7eb" strokeDasharray="5 5" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ r: 6 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
