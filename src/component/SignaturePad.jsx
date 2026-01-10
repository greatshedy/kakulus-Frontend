import SignatureCanvas from "react-signature-canvas";
import { useRef } from "react";

export default function SignaturePad({ data, setData }) {
  const sigRef = useRef(null);

  // const save = () => {
  //   const img = sigRef.current.toDataURL("image/png");
  //   setData({ ...data, signature: img });
  // };


 const save = () => {
  const canvas = sigRef.current.getCanvas();

  // Create a smaller canvas
  const scaled = document.createElement("canvas");
  const scale = 0.5; // 50% size
  scaled.width = canvas.width * scale;
  scaled.height = canvas.height * scale;

  const ctx = scaled.getContext("2d");

  // Fill background with transparent or white
  ctx.fillStyle = "white"; // use "white" if you want white bg, or "rgba(0,0,0,0)" for transparent
  ctx.fillRect(0, 0, scaled.width, scaled.height);

  // Draw the original signature on top
  ctx.drawImage(canvas, 0, 0, scaled.width, scaled.height);

  // Convert to compressed JPEG (or PNG if you want transparency)
  const img = scaled.toDataURL("image/png"); // use "image/jpeg", 0.6 if you want smaller size

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
          className="px-6 py-2 rounded-full bg-gradient-to-r from-[#02275A] via-[#0494FC] to-[#FCB709] text-white font-medium shadow-lg hover:opacity-90 transition"
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
