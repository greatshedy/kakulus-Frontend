import React, { useEffect } from 'react'
import StatCard from './admin_component/StatCard';
import UserTable from './admin_component/UserTable';
import KycCharts from './admin_component/KycCharts';
import ExportCSVButton from './admin_component/ExportCSVButton';
import MainLoginPage from './component/MainLoginPage';
import { api } from '../api';
import { Navigate } from 'react-router-dom';


const Admin = () => {
    const users = [
    { id: 1, name: "John Doe", status: "active", risk: "Low" },
    { id: 2, name: "Jane Smith", status: "blocked", risk: "High" },
    { id: 3, name: "Alex Ray", status: "active", risk: "Medium" },
    { id: 4, name: "John Doe", status: "active", risk: "Low" },
    { id: 5, name: "Jane Smith", status: "blocked", risk: "High" },
    { id: 6, name: "Alex Ray", status: "active", risk: "Medium" },
    { id: 7, name: "John Doe", status: "active", risk: "Low" },
    { id: 8, name: "Jane Smith", status: "blocked", risk: "High" },
    { id: 9, name: "Alex Ray", status: "active", risk: "Medium" }

  ];

  const FetchData=async()=>{
    const userId=localStorage.getItem("kyc_user_id");

   console.log("Fetching dashboard data for userId:", userId);
    
    const response=await api.post(`/admin_dashboard`);
   
    console.log("Dashboard response:", response);
    if (response.data.status==="success") {
      console.log("Dashboard data:", response);
      console.log("Dashboard data fetched successfully");
    } else {
      console.log("Failed to fetch dashboard data");
    }
    
  }

  useEffect(() => {

    FetchData();
  }, []);


  
  const signedIn=localStorage.getItem("kyc_data_update")==="true"; // Change this to false to test the login page
  console.log("Signed In Status:", signedIn);

  useEffect(() => {
 FetchData();
  },[signedIn])

  return (
    <>
   {
    signedIn ? 
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-700 p-6 text-white">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <ExportCSVButton users={users} />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <StatCard title="Total Kyc data" value={users.length} />
        {/* <StatCard title="Active Users" value={users.filter(u => u.status === "active").length} />
        <StatCard title="Blocked Users" value={users.filter(u => u.status === "blocked").length} /> */}
      </div>

      {/* Charts */}
      <KycCharts users={users} />

      {/* Table */}
      <UserTable users={users} />
    </div>:
    <Navigate to="/admin-login" replace />
   }
    </>
  );
}

export default Admin