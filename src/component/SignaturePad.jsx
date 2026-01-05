import SignatureCanvas from "react-signature-canvas";
import { useRef } from "react";

export default function SignaturePad({ data, setData }) {
  const sigRef = useRef(null);

  const save = () => {
    const img = sigRef.current.toDataURL("image/png");
    setData({ ...data, signature: img });
  };

  return (
    <div className="space-y-4">

      <label className="block text-sm text-white/70">
        Signature
      </label>

      {/* Signature Canvas */}
      <div className="rounded-2xl overflow-hidden border border-white/30 bg-white/10 backdrop-blur-md">
        <SignatureCanvas
          ref={sigRef}
          canvasProps={{
            width: 400,
            height: 200,
            className:
              "bg-transparent touch-none"
          }}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={() => sigRef.current.clear()}
          className="px-4 py-2 rounded-full border border-white/30 text-white/70 hover:text-white hover:border-white transition"
        >
          Clear
        </button>

        <button
          type="button"
          onClick={save}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium shadow-lg hover:opacity-90 transition"
        >
          Save Signature
        </button>
      </div>

      {/* Preview */}
      {data.signature && (
        <div className="pt-3">
          <p className="text-xs text-white/50 mb-2">
            Saved Signature
          </p>
          <img
            src={data.signature}
            alt="Signature preview"
            className="max-w-xs border border-white/30 rounded-lg bg-white/10"
          />
        </div>
      )}
    </div>
  );
}
