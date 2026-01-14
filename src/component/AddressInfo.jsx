export default function AddressInfo({ data, setData, next, back }) {
  return (
    <div className="space-y-6">

      {/* Address */}
      <div>
        <label className="block text-sm text-white/70 mb-2">
          Residential Address
        </label>
        <input
          type="text"
          placeholder="Street address"
          value={data.address || ""}
          onChange={(e) =>
            setData({ ...data, address: e.target.value })
          }
          className="w-full rounded-xl bg-white/20 text-white placeholder-white/40 border border-white/30 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>
          {/* Country of Origin */}
       <div>
        <label className="block text-sm text-white/70 mb-2">
          Country of Origin
        </label>
        <input
          type="text"
          placeholder="Your occupation"
          value={data.country_of_origin || ""}
          onChange={(e) => setData({ ...data, country_of_origin: e.target.value })}
          className="w-full rounded-xl bg-white/20 text-white placeholder-white/40 border border-white/30 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* State & Country */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-white/70 mb-2">
            State Of Residence
          </label>
          <input
            type="text"
            placeholder="State"
            value={data.state || ""}
            onChange={(e) =>
              setData({ ...data, state: e.target.value })
            }
            className="w-full rounded-xl bg-white/20 text-white placeholder-white/40 border border-white/30 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-sm text-white/70 mb-2">
            Country Of Residence
          </label>
          <input
            type="text"
            placeholder="Country"
            value={data.country || ""}
            onChange={(e) =>
              setData({ ...data, country: e.target.value })
            }
            className="w-full rounded-xl bg-white/20 text-white placeholder-white/40 border border-white/30 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>


       
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-4">
        <button
          onClick={back}
          className="px-6 py-2 rounded-full border border-white/30 text-white/70 hover:text-white hover:border-white transition"
        >
          Back
        </button>

         {
            data.country_of_origin || data.state
            ||data.country
            || data.address ?
            <h1>Fill the complete form</h1>:
             <button
          onClick={next}
          className="px-8 py-2 rounded-full bg-gradient-to-r from-[#02275A] via-[#0494FC] to-[#FCB709] text-white font-medium shadow-lg hover:opacity-90 transition"
        >
          Continue
        </button>
          }
       
      </div>
    </div>
  );
}
