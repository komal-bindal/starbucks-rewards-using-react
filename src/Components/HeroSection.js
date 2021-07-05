import RoundedLinkButton from "./RoundedLinkButton";
function HeroSection() {
  return (
    <div className=" bg-cover bg-image bg-primary-200  aspect-w-3 aspect-h-4">
      <div class="flex flex-col items-center md:items-start px-4 py-8">
        <h1 class="text-7 font-semibold text-center max-w-54">
          FREE COFFEE IS A TAP AWAY
        </h1>
        <p class="text-md font-normal pt-4">
          Join now to start earning Rewards
        </p>
        <div className="pt-8 flex flex-col items-center md:items-start justify-center">
          <RoundedLinkButton className="bg-primary-300 text-white text-sm">
            Join in the app
          </RoundedLinkButton>
          <p class="text-md font-normal mt-4">
            Or <a class="underline">join online</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
