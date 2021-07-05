import Nav from "./Components/Nav.js";
import Header from "./Components/Header.js";
import HeroSection from "./Components/HeroSection.js";
import GettingStarted from "./Components/GettingStarted.js";
import Favourites from "./Components/Favourites.js";
import CustomiseDrink from "./Components/CustomiseDrink.js";
import EndlessExtras from "./Components/EndlessExtras.js";
import TermsAndConditions from "./Components/TermsAndConditions.js";
import CashOrCard from "./Components/CashOrCard.js";
import StarCodes from "./Components/StarCodes.js";
import Questions from "./Components/Questions.js";
import Footer from "./Components/Footer.js";
function App() {
  return (
    <div className="font-sans">
      <Nav />
      <Header />
      <HeroSection />
      <GettingStarted />
      <Favourites />
      <CustomiseDrink />
      <EndlessExtras />
      <CashOrCard/>
      <StarCodes/>
      <Questions/>
      <TermsAndConditions />
      <Footer />
    </div>
  );
}

export default App;
