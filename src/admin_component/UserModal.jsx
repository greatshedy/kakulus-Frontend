export default function UserModal({ user, onClose }) {
  if (!user) return null;
  console.log("modal",user)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      
      <div className="w-full max-w-lg mx-4 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 p-6 relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white/70 hover:text-white"
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex justify-between gap-4 mb-6">
          <div className="flex  gap-2 items-center">
              <div className="w-16 h-16 rounded-full bg-white/20 overflow-hidden">
            {user.profile_picture ? (
              <img src={user.profile_picture.join("")} className="w-full h-full object-cover" />
            ) : (
              <div className="flex items-center justify-center h-full text-xs text-white/60">
                No Image
              </div>
            )}
          </div>
          <div>
            <h2 className="text-lg font-semibold">{user.full_name}</h2>
            <p className="text-xs text-white/60">{user.country}</p>
          </div>
        </div>
          

        <div className="flex mr-10 gap-2 items-center">
          <div className="w-16 h-16 rounded-full bg-white/20 overflow-hidden">
            {user.signature ? (
              <img src={user.signature.join("")} className="w-full h-full object-cover" />
            ) : (
              <div className="flex items-center justify-center h-full text-xs text-white/60">
                No Image
              </div>
            )}
          </div>
          <div>
            <h2 className="text-lg font-semibold">{"User Signature"}</h2>
          </div>
        </div>
          

          
        </div>


         <div className="flex justify-between gap-4 mb-6">
          <div className="flex  gap-2 items-center">
              <div className="w-16 h-16 l bg-white/20 overflow-hidden">
            {user.utility_bill ? (
              <img src={user.utility_bill.join("")} className="w-full h-full object-cover" />
            ) : (
              <div className="flex items-center justify-center h-full text-xs text-white/60">
                No Image
              </div>
            )}
          </div>
          <div>
            <h2 className="text-lg font-semibold">Utility Bill</h2>
          </div>
        </div>
          

        <div className="flex mr-10 gap-2 items-center">
          <div className="w-16 h-16  bg-white/20 overflow-hidden">
            {user.means_of_id ? (
              <img src={user.means_of_id.join("")} className="w-full h-full object-cover" />
            ) : (
              <div className="flex items-center justify-center h-full text-xs text-white/60">
                No Image
              </div>
            )}
          </div>
          <div>
            <h2 className="text-lg font-semibold">{"Means of ID"}</h2>
          </div>
        </div>
          

          
        </div>


        {/* Details */}
        <div className="grid grid-cols-2 gap-4 text-sm lg:grid-cols-4">
          <Info label="Date of Birth" value={user.date_of_birth} />
          <Info label="Title" value={user.title} />
          <Info label="Risk" value={user.risk} />
          <Info label="Investment" value={user.current_size_of_investments} />
          <Info label="Country of Origin" value={user.country_of_origin} />
          <Info label="Country of Investment" value={user.country} />
          <Info label="Email" value={user.email} />
          <Info label="Gender" value={user.gender} />
          <Info label="Educational Qualififcation" value={user.edu_qualification} />
          <Info label="Employer Name" value={user.employer_name} />
          <Info label="Investment Object" value={user.investment_Obj} />
          <Info label="Investment Level" value={user.investment_level} />
          <Info label="Nature of Existing Inv." value={user.nature_of_existing_investments} />
          <Info label="Next of Kin" value={user.next_of_kin} />
          <Info label="Next of Kin Phone Number" value={user.next_of_kin_phone_number} />
          <Info label="Occupation" value={user.occupation} />
          <Info label="Phone Number" value={user.phone} />
          <Info label="State" value={user.state} />
          <Info label="Bank Name" value={user.bank_name} />
          <Info label="Account Name" value={user.account_name} />
          <Info label="Account Number" value={user.account_number} />

        </div>

      </div>
    </div>
  );
}

const Info = ({ label, value }) => (
  <div>
    <p className="text-xs text-white/60">{label}</p>
    <p className="font-medium">{value || "—"}</p>
  </div>
);
