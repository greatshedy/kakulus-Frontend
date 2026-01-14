import { useState } from "react";
import UserModal from "./UserModal";
import { api } from "../../api";

export default function UserTable({ users }) {

  const riskData = [
    "Zero risk tolerance level",
    "Low risk appetite",
    "Medium Risk tolerance",
    "High risk tolerance level",
  ];


  const csoi = [
    "Below N5million",
    "N5million - N20million",
    "N20million - N50million",
    "N50million - N100million",
    "N100million - N200million",
    "N200million and above",
  ];

  const [mainData,setMaindata]=useState({})
  const [dele,setDele]=useState(false)
  const [risk, setRisk] = useState("all");
  const [current_size_of_investments, setCurrent_size_of_investments] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(false);

  const filteredUsers = users.filter((u) => {
    const matchRisk = risk === "all" || u.risk === risk;
    const matchInvestment = current_size_of_investments === "all" || u.current_size_of_investments === current_size_of_investments;
    const matchSearch = u.full_name.toLowerCase().includes(search.toLowerCase());
    return matchRisk && matchInvestment && matchSearch;
  });

 


    const OpenModal=(data)=>{
      setMaindata(data)
      setSelectedUser(true)
    }


    const Delete_Kyc=async(id)=>{
      
      const response=await api.get(`/delete_kyc/${id}`)
      if (response.data.status==="success"){
        window.location.reload()
        alert("Deleted successfully")
        
      }
    }


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
              {riskData.map((option) => {
            return (
                <option value={option} className="text-black">{option}</option>
            );
          })}
            </select>

            <select
              value={current_size_of_investments}
              onChange={(e) => setCurrent_size_of_investments(e.target.value)}
              className="glass-input"
            >
              <option className="text-black" value="all">All Status</option>
              {csoi.map((option) => {
            return (
                <option value={option} className="text-black">{option}</option>
            );
          })}
            </select>
          </div>

          {/* Scrollable Table */}
          <div className="max-h-105 overflow-y-auto">
            <table className="w-full text-sm">
              <thead className="sticky top-0 bg-white/10 text-white/70 backdrop-blur">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3">Risk</th>
                  <th className="p-3">CSOI</th>
                  <th className="p-3">CSOW</th>
                  <th className="p-3">Date of Birth</th>
                  <th className="p-3">Gender</th>
                  <th className="p-3">Investment Level</th>
                  <th className="p-3">Bank Name</th>
                  <th className="p-3">Account Name</th>
                  <th className="p-3">Account Number</th>
                  <th className="p-3">Educational Qualification</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.length ? (
                  filteredUsers.map((u) => {
                  
                    return(
                    <tr key={u.id} className="border-t border-white/10">
                      <td className="p-3">{u.full_name}</td>
                      <td className="p-3">{u.risk}</td>
                      <td className="p-3">{u.current_size_of_investments}</td>
                      <td className="p-3">{u.current_source_of_wealth?.join(",")}</td>
                      <td className="p-3">{u.date_of_birth}</td>
                      <td className="p-3">{u.gender}</td>
                      <td className="p-3">{u.investment_level}</td>
                      <td className="p-3">{u.bank_name}</td>
                      <td className="p-3">{u.account_name}</td>
                      <td className="p-3">{u.account_number}</td>
                      <td className="p-3">{u.edu_qualification}</td>
                      
                      
                    
                      <td className="p-3 text-right">
                        <div className="flex justify-end gap-2 text-xs">
                          <button onClick={()=>OpenModal(u)} className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20">
                            View
                          </button>
              
                          <button onClick={()=>Delete_Kyc(u._id)} className="px-3 py-1 rounded-full bg-red-500/20 text-white">
                            {"Delete"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  )})
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
        <UserModal user={mainData} onClose={() => setSelectedUser(false)} />
      )}
    </>
  );
}
