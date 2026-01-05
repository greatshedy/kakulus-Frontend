export default function InvestmentInfo({ data, setData, next, back }) {
  return (
    <div className="space-y-6">

      {/* Risk Tolerance */}
      <div>
        <label className="block text-sm text-white/70 mb-2">
          Risk Tolerance
        </label>
        <select
          value={data.risk || ""}
          onChange={(e) =>
            setData({ ...data, risk: e.target.value })
          }
          className="w-full rounded-xl bg-white/20 text-white border border-white/30 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
        >
          <option value="" className="text-black">
            Select risk level
          </option>
          <option className="text-black">Low</option>
          <option className="text-black">Medium</option>
          <option className="text-black">High</option>
        </select>
      </div>

      {/* Investment Objective */}
      <div>
        <label className="block text-sm text-white/70 mb-2">
          Investment Objective
        </label>
        <textarea
          rows={4}
          placeholder="Describe your investment goals..."
          value={data.objective || ""}
          onChange={(e) =>
            setData({ ...data, objective: e.target.value })
          }
          className="w-full rounded-xl bg-white/20 text-white placeholder-white/40 border border-white/30 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-4">
        <button
          onClick={back}
          className="px-6 py-2 rounded-full border border-white/30 text-white/70 hover:text-white hover:border-white transition"
        >
          Back
        </button>

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
