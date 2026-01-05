// import ProfilePicture from "./ProfilePicture";

export default function PersonalInfo2({ data, setData, next }) {
  console.log(data);
  return (
    <div className="space-y-6">
      <div className="w-full flex justify-between gap-[20px]">
        {/* Full Name */}
        <div>
          <label className="block text-sm text-white/70 mb-2">Gender</label>

          <div className="flex gap-[5px]">
            <input
              type="radio"
              //   placeholder="John Doe"
              name="gender"
              value={"Male"}
              //   value={data.full_name || ""}
              onChange={(e) => setData({ ...data, gender: e.target.value })}
            />

            <label>Male</label>
          </div>

          <div className="flex gap-[5px]">
            <input
              type="radio"
              //   placeholder="John Doe"
              name="gender"
              value={"Female"}
              //   value={data.full_name || ""}
              onChange={(e) => setData({ ...data, gender: e.target.value })}
            />

            <label>Female</label>
          </div>
        </div>

        <div>
          {/* Phone */}
          <label className="block text-sm text-white/70 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+234 123 456 7890"
            value={data.phone || ""}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            className="w-full rounded-xl bg-white/20 text-white placeholder-white/40 border border-white/30 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm text-white/70 mb-2">
          Email Address
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          value={data.email || ""}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className="w-full rounded-xl bg-white/20 text-white placeholder-white/40 border border-white/30 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Continue */}
      <div className="flex justify-end pt-4">
        <button
          onClick={next}
          className="px-8 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium shadow-lg hover:opacity-90 transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
