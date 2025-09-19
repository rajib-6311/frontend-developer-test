"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFetch } from "../lib/useFetch";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: { name: string; catchPhrase: string };
  address: { city: string };
};

export default function UsersPage() {
  const { data: users} = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

 
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Users</h1>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse shadow rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Company</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr
                key={user.id}
                className=" hover:bg-gray-50 cursor-pointer shadow"
                onClick={() => setSelectedUser(user)}
              >
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedUser && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 max-w-md w-full shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h2 className="text-xl font-bold mb-2">{selectedUser.name}</h2>
              <p className="text-gray-700 mb-1">
                <strong>Email:</strong> {selectedUser.email}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Phone:</strong> {selectedUser.phone}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Website:</strong> {selectedUser.website}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Company:</strong> {selectedUser.company.name}
              </p>
              <p className="text-gray-600 italic">
                {selectedUser.company.catchPhrase}
              </p>
              <p className="text-gray-600">
                <strong>City:</strong> {selectedUser.address.city}
              </p>

              <button
                onClick={() => setSelectedUser(null)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-500 transition cursor-pointer"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
