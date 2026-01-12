export default function ProfilePicture({ data, setData }) {
  const fileToByteString = (file, maxSize = 400, quality = 0.6) => {
    return new Promise((resolve) => {
      const img = new Image();
      const reader = new FileReader();

      reader.onload = () => {
        img.src = reader.result;
      };

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const scale = Math.min(maxSize / img.width, maxSize / img.height);

        canvas.width = img.width * scale;
        canvas.height = img.height * scale;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const compressed = canvas.toDataURL("image/jpeg", quality);
        resolve(compressed);
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="space-y-3">
      <label className="block text-sm text-white/70">Profile Picture</label>

      <div className="flex items-center gap-5">
        {/* Avatar */}
        <div className="relative w-24 h-24 rounded-full bg-white/20 border border-white/30 overflow-hidden flex items-center justify-center">
          {data.profile_picture ? (
            <img
              src={data.profile_picture}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-white/40 text-xs">No Image</span>
          )}
        </div>

        {/* Upload Controls */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col justify-between items-center">
            <label className="cursor-pointer inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 border border-white/30 text-sm text-white hover:bg-white/30 transition lg:hidden">
              Use Mobile Camera
              <input
                type="file"
                accept="image/*"
                capture="user"
                onChange={async (e) => {
                  const file = e.target.files[0];
                  if (!file) return;

                  const byteString = await fileToByteString(file);

                  setData({
                    ...data,
                    profile_picture: byteString, // now a string of bytes
                  });
                }}
                className="hidden"
              />
            </label>

            <p className="lg:hidden">Or</p>

            <label className="cursor-pointer inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 border border-white/30 text-sm text-white hover:bg-white/30 transition">
              Upload from device
              <input
                type="file"
                accept="image/*"
                onChange={async (e) => {
                  const file = e.target.files[0];
                  if (!file) return;

                  const byteString = await fileToByteString(file);

                  setData({
                    ...data,
                    profile_picture: byteString, // now a string of bytes
                  });
                }}
                className="hidden"
              />
            </label>
          </div>

          {data.profile_picture && (
            <button
              type="button"
              onClick={() => setData({ ...data, profile_picture: null })}
              className="text-xs text-red-300 hover:text-red-400 transition"
            >
              Remove photo
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
