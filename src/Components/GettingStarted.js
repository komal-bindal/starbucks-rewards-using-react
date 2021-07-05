import step1 from "../images/step1.webp";
import step2 from "../images/step2.webp";
import step3 from "../images/step3.webp";
import Step from "./Step";
function GettingStarted() {
  return (
    <div className="pt-16 px-4 mb-16">
      <div className="text-center">
        <h1 className=" text-2xl font-bold ">Getting started is easy</h1>
        <h3 className="text-sm font-normal pt-4">
          Earn Stars and get rewarded in a few easy steps.
        </h3>
      </div>
      <div className="pt-12">
        <Step
          className="pb-8"
          image={step1}
          imgh = {12}
          imgw = {16}
          title="Download the Starbucks® app"
        >
          <a
            className="text-primary-400 underline"
            href="https://www.starbucks.com/rewards/mobile-apps?_branch_match_id=938477148120635958{&}utm_medium=marketing"
          >
            Join in the app{" "}
          </a>
          to get access to the full range of Starbucks® Rewards benefits. You
          can also
          <a
            className="text-primary-400 underline"
            href="https://www.starbucks.com/account/create"
          >
            join online.
          </a>
        </Step>
        <Step
          className="pb-8"
          image={step2}
          imgh = {12}
          imgw = {16}
          title="Order and pay how you’d like"
        >
          Use cash, credit/debit card or save some time and pay right through
          the app. You’ll collect Stars all ways.{" "}
          <a className="text-primary-400 underline">Learn how</a>
        </Step>
        <Step image={step3} imgh = {12}
          imgw = {16} title="Earn Stars, get Rewards">
          As you earn Stars, you can redeem them for Rewards—like free food,
          drinks, and more. Start redeeming with as little as 25 Stars!
        </Step>
      </div>
    </div>
  );
}
export default GettingStarted;
