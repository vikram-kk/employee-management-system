export default function Profile() {
  console.log("profile page");
  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="w-50 bg-amber-300 relative rounded-full h-50 flex-center overflow-hidden border-4 border-gray-300">
          <img
            src="src\profile pic vikram .jpeg"
            className="w-full absolute transform translate-y-8"
            alt="profile_img"
          />
        </div>
        <div className="col-span-3 bg-gray-50 shadow-lg py-6 px-4 rounded">
          <h1 className="text-3xl font-bold">Vikram Thakur</h1>
          <h2 className="text-xl">admin</h2>
          <h2 className="text-xl">Department</h2>
        </div>
      </div>
    </div>
  );
}
