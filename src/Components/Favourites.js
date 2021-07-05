function Favourites() {
  return (
    <div>
    <div className="bg-primary-100 flex flex-col justify-center items-center">
      <h1 className="font-semibold text-2xl pt-12 pb-4">
        Get your favorites for free
      </h1>
      <div className="flex justify-center items-center flex-grow text-4.25  font-semibold">
        <h2 className=" border-primary-400 border-b-4 px-6">
          25<span className="text-gold text-sm">★</span>
        </h2>
        <h2 className="px-6">
          50<span class="text-gold text-sm">★</span>
        </h2>
        <h2 className="px-6">
          150<span class="text-gold text-sm">★</span>
        </h2>
        <h2 className="px-6">
          200<span class="text-gold text-sm">★</span>
        </h2>
        <h2 className="px-6">
          400<span class="text-gold text-xs">★</span>
        </h2>
      </div>
    </div>
    
    </div>
    
  );
}
export default Favourites;
