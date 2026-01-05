import { useState } from "react";
import UserModal from "./UserModal";

export default function UserTable({ users }) {
  const [risk, setRisk] = useState("all");
  const [status, setStatus] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(false);

  const filteredUsers = users.filter((u) => {
    const matchRisk = risk === "all" || u.risk === risk;
    const matchStatus = status === "all" || u.status === status;
    const matchSearch = u.name.toLowerCase().includes(search.toLowerCase());
    return matchRisk && matchStatus && matchSearch;
  });

  return (
    <>
      {selectedUser == false ? (
        <div className="mt-6 rounded-2xl bg-white/10 backdrop-blur border border-white/20">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3 p-4 border-b border-white/10">
            <input
              placeholder="Search name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="glass-input"
            />

            <select
              value={risk}
              onChange={(e) => setRisk(e.target.value)}
              className="glass-input"
            >
              <option className="text-black"  value="all">All Risks</option>
              <option className="text-black" value="Low">Low</option>
              <option className="text-black" value="Medium">Medium</option>
              <option className="text-black" value="High">High</option>
            </select>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="glass-input"
            >
              <option className="text-black" value="all">All Status</option>
              <option className="text-black" value="active">Active</option>
              <option className="text-black" value="blocked">Blocked</option>
            </select>
          </div>

          {/* Scrollable Table */}
          <div className="max-h-[420px] overflow-y-auto">
            <table className="w-full text-sm">
              <thead className="sticky top-0 bg-white/10 text-white/70 backdrop-blur">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3">Risk</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.length ? (
                  filteredUsers.map((u) => (
                    <tr key={u.id} className="border-t border-white/10">
                      <td className="p-3">{u.name}</td>
                      <td className="p-3">{u.risk}</td>
                      <td className="p-3">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            u.status === "active"
                              ? "bg-green-500/20 text-green-300"
                              : "bg-red-500/20 text-red-300"
                          }`}
                        >
                          {u.status}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <div className="flex justify-end gap-2 text-xs">
                          <button onClick={()=>setSelectedUser(true)} className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20">
                            View
                          </button>
                          <button className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300">
                            Edit
                          </button>
                          <button className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300">
                            Block
                          </button>
                          <button className="px-3 py-1 rounded-full bg-red-500/20 text-red-300">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="p-6 text-center text-white/50">
                      No users found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <UserModal user={users} onClose={() => setSelectedUser(false)} />
      )}
    </>
  );
}
