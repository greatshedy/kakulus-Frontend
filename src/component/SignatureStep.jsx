import SignaturePad from "./SignaturePad";

export default function SignatureStep({ data, setData, next, back }) {
  return (
    <div className="space-y-6">

      {/* Instruction */}
      <p className="text-sm text-white/70 leading-relaxed">
        Please sign below to confirm that all information provided is accurate
        and complete.
      </p>

      {/* Signature */}
      <SignaturePad data={data} setData={setData} />

      {/* Navigation */}
      <div className="flex justify-between pt-4">
        <button
          onClick={back}
          className="px-6 py-2 rounded-full border border-white/30 text-white/70 hover:text-white hover:border-white transition"
        >
          Back
        </button>

        {
            !data.signature ?
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
