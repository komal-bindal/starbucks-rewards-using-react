import fun_freebies_1 from "../images/1-fun-freebies.webp";
import order_and_pay_ahead_2 from "../images/2-order-and-pay-ahead.webp";
import get_to_free_faster_3 from "../images/3-get-to-free-faster.webp";
import Step from "./Step";

function EndlessExtras() {
  return (
    <div className="px-4 mb-16">
      <div className="text-center">
        <h1 className=" text-2xl font-bold ">Endless Extras</h1>
        <h3 className="text-sm font-normal pt-4">
          Joining Starbucks® Rewards means unlocking access to exclusive
          benefits. Say hello to easy ordering, tasty Rewards and—yes, free
          coffee.{" "}
        </h3>
      </div>
      <div className="pt-12">
        <Step
          className="pb-8 "
          image={fun_freebies_1}
          imgh={28}
          imgw={32}
          title="Fun freebies"
        >
          Not only can you earn free coffee, look forward to a birthday treat
          plus coffee and tea refills.
          <div className="py-4">
            <a className="text-primary-400 underline">Learn more</a>
          </div>
        </Step>
        <Step
          className="pb-8"
          image={order_and_pay_ahead_2}
          imgh={28}
          imgw={32}
          title="Order & pay ahead"
        >
          Enjoy the convenience of in-store, curbside or drive-thru pickup at
          select stores.
          <div className="py-4">
            <a className="text-primary-400 underline">Learn more</a>
          </div>
        </Step>
        <Step
          image={get_to_free_faster_3}
          imgh={28}
          imgw={32}
          title="
          Get to free faster"
        >
          Earn Stars even quicker with Bonus Star challenges, Double Star Days
          and exciting games.
          <div className="py-4">
            <a className="text-primary-400 underline">Learn more</a>
          </div>
        </Step>
      </div>
    </div>
  );
}
export default EndlessExtras;
