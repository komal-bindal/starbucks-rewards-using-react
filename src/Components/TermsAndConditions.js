function TermsAndConditions() {
  return (
    <div className="bg-primary-100 text-3.25">
      <div className="py-8 px-4 flex flex-col">
        <p className="pb-8 font-normal">
          At participating stores. Restrictions apply.
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="pb-8 md:max-w-1/2">
            <h3 className="pb-4 font-bold">EARNING STARS </h3>
            <p className="font-normal pb-4">
              Stars cannot be earned on purchases of alcohol, Starbucks Cards or
              Starbucks Card reloads.
            </p>
            <p className="pb-4 font-normal">
              Earn 1 Star per $1 spent when you scan your member barcode in the
              app, then pay with cash, credit/debit cards or mobile wallets at
              participating stores. You can also earn 1 Star per $1 spent when
              you link a payment method and pay directly through the app.
            </p>
            <p className="font-normal">
              Earn 2 Stars per $1 spent when you load funds and pay with your
              digital Starbucks Card in the app. You can also earn 2 Stars per
              $1 spent when you pay in-person at a participating store with your
              registered physical Starbucks Card or scan your member barcode in
              the app, and then use any physical Starbucks Card (regardless of
              whether it is registered) to complete the purchase.
            </p>
          </div>
          <div className="pb-8 md:pl-8 md:max-w-1/2">
            <h3 className="pb-4 font-bold">TERMS OF USE</h3>
            <p className="font-normal pb-4">
              For full program details visit{" "}
              <a
                className="text-primary-400 underline"
                href="https://www.starbucks.com/rewards/terms"
                target="_blank"
              >
                starbucks.com/rewards/terms
              </a>
              .
            </p>
            <p className="pb-4 font-normal">
              * Earn 1 Star per $1 when digitally loading your Starbucks Card
              with your Starbucks® Rewards Visa® Card: See your Card Rewards
              Program Agreement for more details.
            </p>
            <p className="font-normal pb-4">
              Starbucks® Rewards benefits are available at participating
              Starbucks stores. Not all stores have the ability to honor Rewards
              at this time. Visit the{" "}
              <a
                className="text-primary-400 underline"
                target="_blank"
                href="https://www.starbucks.com/store-locator?map=39.635307,-101.337891,5z"
              >
                Starbucks Store Locator{" "}
              </a>
              opens in new window and search for locations honoring “Redeem
              Rewards”.
            </p>
            <p className="font-normal">
              Deposit and credit card products provided by JPMorgan Chase Bank,
              N.A. Member FDIC
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="pb-8 md:pb-0 md:max-w-1/2">
            <h3 className="pb-4 font-bold">BENEFITS</h3>
            <p className="font-normal">
              Free refills available during same in-store visit only. To qualify
              for the Birthday Reward, you must have made at least one
              Star-earning transaction.
            </p>
          </div>
          <div className = "md:pl-8 md:max-w-1/2"> 
            <h3 className="pb-4 font-bold">REDEEMING REWARDS</h3>
            <p className="font-normal">
              Rewards cannot be redeemed for alcoholic beverages or multi-serve
              items. Not all stores honor tiered Rewards. Select stores redeem
              150 Stars for free food or drink items only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TermsAndConditions;
