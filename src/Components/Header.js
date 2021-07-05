import RoundedLinkButton from "./RoundedLinkButton";

function Header() {
  return (
    <div className="sticky z-20 top-0 bg-primary-400  h-12 text-xs font-bold flex justify-between items-center px-4">
      <h1 className=" text-white ">STARBUCKS® REWARDS</h1>
      <RoundedLinkButton
        className="text-white border-white"
        href="https://www.starbucks.com/"
      >
        Join in the app
      </RoundedLinkButton>
    </div>
  );
}
export default Header;
