export default function UserModal({ user, onClose }) {
  if (!user) return null;

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
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-white/20 overflow-hidden">
            {user.profile_picture ? (
              <img src={user.profile_picture} className="w-full h-full object-cover" />
            ) : (
              <div className="flex items-center justify-center h-full text-xs text-white/60">
                No Image
              </div>
            )}
          </div>

          <div>
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-xs text-white/60">{user.email}</p>
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <Info label="Phone" value={user.phone} />
          <Info label="Risk" value={user.risk} />
          <Info label="Status" value={user.status} />
          <Info label="Country" value={user.country} />
          <Info label="State" value={user.state} />
        </div>

        {/* Objective */}
        <div className="mt-4">
          <p className="text-xs text-white/60 mb-1">Investment Objective</p>
          <div className="bg-white/10 rounded-lg p-3 text-sm">
            {user.objective || "—"}
          </div>
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
