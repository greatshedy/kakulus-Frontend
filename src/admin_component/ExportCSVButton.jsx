export default function ExportCSVButton({ users }) {
  const exportCSV = () => {
    const headers = Object.keys(users[0] || {}).join(",");
    const rows = users.map((u) => Object.values(u).join(","));
    const csv = [headers, ...rows].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "kyc-users.csv";
    a.click();
  };


  const Logout=()=>{
    localStorage.removeItem("kyc_data_update");
    localStorage.removeItem("kyc_user_id");
    console.log("Logged out successfully");
    window.location.reload(); 
  }

  return (
    <div className="flex gap-[20px]">
      <button
        onClick={exportCSV}
        className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-sm shadow hover:opacity-90"
      >
        Export CSV
      </button>

      <button
        onClick={Logout}
        className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-sm shadow hover:opacity-90"
      >
        Log Out
      </button>
    </div>
  );
}
