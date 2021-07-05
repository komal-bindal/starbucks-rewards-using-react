import RoundedLinkButton from "./RoundedLinkButton";
function StarCodes() {
  return (
    <div className="mb-16 px-4 flex flex-col  md:ml-80 md:max-w-2/5">
      <h1 className="text-2xl font-semibold pb-4">Star Codes</h1>
      <p className="pb-4 text-sm font-normal">
        Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll
        add Stars to your account.
      </p>
      <div className="pb-8">
        <div className="py-3">
          <div className="border-2 rounded-xl ">
            <h3 className="px-4 py-3 text-md font-normal">
              Enter you star code
            </h3>
          </div>
        </div>
        <div className="flex items-center justify-end mt-2">
          <RoundedLinkButton className="text-black border-black text-sm">
            Submit
          </RoundedLinkButton>
        </div>
      </div>
      <p className="text-3.25 font-normal">
        Have a receipt but don't have a code?
      </p>
      <p className="text-3.25 font-normal">
        Go to <a className ="text-primary-400 underline" href="https://starbucks-stars.com/en-us/" target = "_blank">starbucks-stars.com </a>to upload your receipt and
        collect your Stars.
      </p>
    </div>
  );
}
export default StarCodes;
