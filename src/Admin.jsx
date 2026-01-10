import React, { useEffect, useState } from 'react'
import StatCard from './admin_component/StatCard';
import UserTable from './admin_component/UserTable';
import KycCharts from './admin_component/KycCharts';
import ExportCSVButton from './admin_component/ExportCSVButton';
import MainLoginPage from './component/MainLoginPage';
import { api } from '../api';
import { Navigate } from 'react-router-dom';


const Admin = () => {
  const [user1,setUser1]=useState([])
  

  const FetchData=async()=>{
    const userId=localStorage.getItem("kyc_user_id");

   console.log("Fetching dashboard data for userId:", userId);
    
    const response=await api.post(`/admin_dashboard`);
   
    console.log("Dashboard response:", response);
    if (response.data.status==="success") {
      setUser1(response.data.kyc_data)
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
    <div className="min-h-screen bg-linear-to-br from-[#02275A] via-[#0494FC] to-[#FCB709] p-6 text-white">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <ExportCSVButton users={user1} />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <StatCard title="Total Kyc data" value={user1.length} />
        
      </div>

      {/* Charts */}
      <KycCharts users={user1} />

      {/* Table */}
      <UserTable users={user1} />
    </div>:
    <Navigate to="/admin-login" replace />
   }
    </>
  );
}

export default Admin