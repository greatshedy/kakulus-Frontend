import { api } from "../../api";

export default function ReviewSubmit({ data, back }) {

    console.log("ReviewSubmit data:", data);
    const sendUserData = async () => {
        try{
            const response =await api.post("/submit_kyc", data);
            console.log("Data submitted successfully:", response.data);
        }
        catch(error){
            console.error("Error submitting data:", error);
        }
    }
    
  return (
    <div className="space-y-6">

      <h3 className="text-lg font-semibold text-white">
        Review & Confirm
      </h3>

      {/* Summary Card */}
      <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-5 space-y-4 text-sm text-white">

        {/* Personal */}
        <div>
          <p className="text-white/50 text-xs mb-1">Personal Info</p>
          <p><span className="text-white/60">Name:</span> {data.full_name}</p>
          <p><span className="text-white/60">Phone:</span> {data.phone}</p>
          <p><span className="text-white/60">Email:</span> {data.email}</p>
        </div>

        <hr className="border-white/10" />

        {/* Address */}
        <div>
          <p className="text-white/50 text-xs mb-1">Address</p>
          <p>
            {data.address}, {data.state}, {data.country}
          </p>
        </div>

        <hr className="border-white/10" />

        {/* Investment */}
        <div>
          <p className="text-white/50 text-xs mb-1">Investment Profile</p>
          <p><span className="text-white/60">Risk:</span> {data.risk}</p>
          <p className="text-white/70 text-xs mt-1">
            {data.objective}
          </p>
        </div>

        {/* Profile Picture Preview */}
        {data.profile_picture && (
          <>
            <hr className="border-white/10" />
            <div>
              <p className="text-white/50 text-xs mb-2">
                Profile Picture
              </p>
              <img
                src={data.profile_picture}
                className="w-20 h-20 rounded-full object-cover border border-white/30"
              />
            </div>
          </>
        )}
      </div>

      {/* Raw JSON (optional dev view) */}
      <details className="text-xs text-white/40">
        <summary className="cursor-pointer">View raw data</summary>
        <pre className="mt-2 bg-black/30 p-3 rounded-lg overflow-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      </details>

      {/* Actions */}
      <div className="flex justify-between pt-4">
        <button
          onClick={back}
          className="px-6 py-2 rounded-full border border-white/30 text-white/70 hover:text-white hover:border-white transition"
        >
          Back
        </button>

        <button
          onClick={sendUserData}
          className="px-8 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium shadow-lg hover:opacity-90 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
