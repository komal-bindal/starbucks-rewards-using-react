import Step from "./Step";
import A1 from "../images/1A.png";
import B1 from "../images/1B.png";
import A2 from "../images/2A.png";
import B2 from "../images/2B.png";
import A3 from "../images/3A.png";

function CashOrCard() {
  return (
    <div className="flex flex-col py-12 px-4 bg-primary-100 mb-16">
      <div className="flex flex-col justify-center items-center pb-12 mb-4">
        <h1 className="pt-6 pb-4 text-2xl font-semibold text-center">
          Cash or card, you earn Stars
        </h1>
        <p className="text-sm font-normal text-center md:max-w-1/2">
          No matter how you pay, you can earn Stars with your morning coffee.
          Those Stars add up to (really delicious) Rewards.
        </p>
      </div>
      <div className="flex flex-col justify-between md:flex-row">
        <div class="flex flex-col items-start pb-8">
          <div class="flex flex-col">
            <h1 class="text-4.25 font-semibold flex-shrink-0 max-w-md">
              1 ★ per dollar
            </h1>
            <h2 class="text-sm">Pay as you go</h2>
          </div>
        </div>
        <div className="flex flex-col justify-between md:flex-row">
          <Step
            className="pb-8 max-w-md"
            image={A1}
            imgh="40"
            imgw="28"
            title="Scan and pay separately"
          >
            Use cash or credit/debit card at the register.
          </Step>
          <Step
            className="pb-8 max-w-md"
            image={B1}
            imgh="40"
            imgw="28"
            title="
        Save payment in the app"
          >
            Check-out faster by saving a credit/debit card or PayPal to your
            account. You’ll be able to order ahead or scan and pay at the
            register in one step.
          </Step>
        </div>
      </div>
      <div className="pt-4 pb-10">
        <hr></hr>
      </div>
      <div className="flex flex-col justify-between md:flex-row">
        <div class="flex flex-col items-start pb-8">
          <div class="flex flex-col">
            <h1 class="text-4.25 font-semibold flex-shrink-0 max-w-md">
              2★ per dollar
            </h1>
            <h2 class="text-sm">Add funds in the app</h2>
          </div>
        </div>
        <div className="flex flex-col justify-between md:flex-row">
          <Step
            className="pb-8 max-w-md"
            image={A2}
            imgh="40"
            imgw="28"
            title="Preload"
          >
            To save time and earn Stars twice as fast, add money to your digital
            Starbucks Card using any payment option. Scan and pay in one step or
            order ahead in the app.
          </Step>
          <Step
            className="pb-8 max-w-md"
            image={B2}
            imgh="40"
            imgw="28"
            title="Register your gift card"
          >
            Then use it to pay through the app. You can even consolidate
            balances from multiple cards in one place.
          </Step>
        </div>
      </div>
      <div className="pt-4 pb-10">
        <hr></hr>
      </div>
      <div className="flex flex-col justify-between md:flex-row">
        <div class="flex flex-col items-start pb-8">
          <div class="flex flex-col">
            <h1 class="text-4.25 font-semibold flex-shrink-0 max-w-md">
              3★ per dollar
            </h1>
            <h2 class="text-sm">With Starbucks® Rewards Visa® Card</h2>
          </div>
        </div>
        <div className="flex flex-col justify-between md:flex-row">
          <Step
            className="pb-8 max-w-md"
            image={A3}
            imgh="40"
            imgw="28"
            title="
            Earn Stars even faster"
          >
            Earn Stars on all purchases you make with our{" "}
            <a
              className="text-primary-400 underline"
              href="https://www.starbucks.com/starbucks-rewards/credit-card?cell=6j8f&spid=ggqv"
              target="_blank"
            >
              credit card{" "}
            </a>
            in and outside of Starbucks. Earn 1 Star per $1 when you digitally
            preload your Starbucks Card with your Starbucks® Rewards Visa® Card,
            and earn 2 Stars per $1 when you pay with that preloaded Starbucks
            Card.
          </Step>
        </div>
      </div>
    </div>
  );
}
export default CashOrCard;
