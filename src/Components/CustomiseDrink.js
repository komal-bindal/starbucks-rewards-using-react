import coffeeMug from "../images/coffeeMug.webp";

function CustomiseDrink() {
  return (
    <div className="bg-primary-200 pb-12 mb-16 flex flex-col md:flex-row  justify-center items-center">
      <img class="aspect-w-2 aspect-h-1 py-8" src={coffeeMug} alt="image" />
      <div class="flex flex-col justify-center items-center px-4">
        <h1 class="text-4.25 pb-4 font-semibold">Customize your drink</h1>
        <p class="text-sm  font-normal  text-center">
          Make your drink just right with an extra espresso shot, dairy
          substitute or a dash of your favorite syrup.
        </p>
      </div>
    </div>
  );
}
export default CustomiseDrink;
