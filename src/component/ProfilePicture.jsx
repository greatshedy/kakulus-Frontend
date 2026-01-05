export default function ProfilePicture({ data, setData }) {

  const fileToByteString = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result); // base64 string
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};




  return (
    <div className="space-y-3">

      <label className="block text-sm text-white/70">
        Profile Picture
      </label>

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
            <span className="text-white/40 text-xs">
              No Image
            </span>
          )}
        </div>

        {/* Upload Controls */}
        <div className="flex flex-col gap-2">
          <label className="cursor-pointer inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 border border-white/30 text-sm text-white hover:bg-white/30 transition">
            Upload / Camera
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

          {data.profile_picture && (
            <button
              type="button"
              onClick={() =>
                setData({ ...data, profile_picture: null })
              }
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
