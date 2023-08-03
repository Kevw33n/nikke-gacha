import { useState } from "react";
import Image from "./components/Image";
import "./App.css";
import GachaResultsPage from "./components/GachaResultsPage";
import InventoryPage from "./components/InventoryPage";
import { nikkesByRarity } from "./nikkeData";
import PastBannersPage from "./components/PastBannersPage";

interface Nikke {
  name: string;
  image: string;
  description: string;
}

type Rarity = "R" | "SR" | "SSR" | "Pilgrim" | "RateUp";

function App() {
  const [gachaResults, setGachaResults] = useState<Nikke[]>([]);
  const [showResultsPage, setShowResultsPage] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string>("MastRecruit.png");
  const [currentBannerType, setCurrentBannerType] = useState<string>("default");
  const [inventory, setInventory] = useState<{ [key: string]: number }>({});
  const [showInventoryPage, setShowInventoryPage] = useState<boolean>(false);
  const [showRecruitx1, setShowRecruitx1] = useState<boolean>(false);
  const [showPastBannersPage, setShowPastBannersPage] =
    useState<boolean>(false);

  const handleImageChange = (newImage: string, bannerType: string) => {
    setCurrentImage(newImage);
    setCurrentBannerType(bannerType);
  };

  const handleExitResultsPage = () => {
    setShowResultsPage(false);
  };

  const handleOpenInventory = () => {
    setShowInventoryPage(true);
  };

  const handleExitInventory = () => {
    setShowInventoryPage(false);
  };

  const handleOpenPast = () => {
    setShowPastBannersPage(true);
  };

  const handleExitPast = () => {
    setShowPastBannersPage(false);
  };

  const handleRecruitx1 = () => {
    const gachaRolls: Nikke[] = [];
    const rarity: Rarity = getRandomRarity();
    const nikkes = nikkesByRarity[rarity];
    const selectedNikke = nikkes[Math.floor(Math.random() * nikkes.length)];
    gachaRolls.push(selectedNikke);
    setGachaResults(gachaRolls);

    const updatedInventory = { ...inventory };
    gachaRolls.forEach((nikke) => {
      if (updatedInventory[nikke.name]) {
        updatedInventory[nikke.name]++;
      } else {
        updatedInventory[nikke.name] = 1;
      }
    });
    setInventory(updatedInventory);
    setShowResultsPage(true);
    setShowRecruitx1(true);
  };

  const handleRecruitx10 = () => {
    const gachaRolls: Nikke[] = [];
    for (let i = 0; i < 10; i++) {
      const rarity: Rarity = getRandomRarity();
      const nikkes = nikkesByRarity[rarity];
      const selectedNikke = nikkes[Math.floor(Math.random() * nikkes.length)];
      gachaRolls.push(selectedNikke);
    }
    setGachaResults(gachaRolls);

    const updatedInventory = { ...inventory };
    gachaRolls.forEach((nikke) => {
      if (updatedInventory[nikke.name]) {
        updatedInventory[nikke.name]++;
      } else {
        updatedInventory[nikke.name] = 1;
      }
    });
    setInventory(updatedInventory);
    setShowResultsPage(true);
    setShowRecruitx1(false);
  };

  const getRandomRarity = (): Rarity => {
    const randNum = Math.random();
    if (currentBannerType === "socialRecruit") {
      if (randNum < 0.55) {
        return "R";
      } else if (randNum < 0.98) {
        return "SR";
      } else {
        return "SSR";
      }
    } else if (currentBannerType === "ordinaryRecruit") {
      if (randNum < 0.53) {
        return "R";
      } else if (randNum < 0.96) {
        return "SR";
      } else {
        const SSRrandNum = Math.random();
        if (SSRrandNum < 0.875) {
          return "SSR";
        } else {
          return "Pilgrim";
        }
      }
    } else {
      // RateUp Banner
      if (randNum < 0.53) {
        return "R";
      } else if (randNum < 0.96) {
        return "SR";
      } else {
        const SSRrandNum = Math.random();
        if (SSRrandNum < 0.5) {
          return "RateUp";
        } else if (SSRrandNum < 0.875) {
          return "SSR";
        } else {
          return "Pilgrim";
        }
      }
    }
  };

  return (
    <div>
      {showResultsPage ? (
        <GachaResultsPage
          results={gachaResults}
          onExit={handleExitResultsPage}
          onRollAgain={showRecruitx1 ? handleRecruitx1 : handleRecruitx10}
          nikkesByRarity={nikkesByRarity}
        />
      ) : showInventoryPage ? (
        <InventoryPage
          inventory={inventory}
          onExit={handleExitInventory}
          nikkesByRarity={nikkesByRarity}
        />
      ) : showPastBannersPage ? (
        <PastBannersPage onExit={handleExitPast} />
      ) : (
        <>
          <Image currentImage={currentImage}></Image>
          <div className="gachaSim">
            <h1 className="text">Gacha Simulator</h1>
          </div>
          <div className="textContainer">
            <h1 className="text">Current Banners</h1>
          </div>
          <div className="container">
            <div className="buttonContainer">
              <button
                className="button rateUpButton"
                onClick={() => handleImageChange("MastRecruit.png", "default")}
              >
                Mast (RateUp)
              </button>
              <button
                className="button ordinaryButton"
                onClick={() =>
                  handleImageChange("OrdinaryRecruit.png", "ordinaryRecruit")
                }
              >
                Ordinary Recruit
              </button>
              <button
                className="button socialButton"
                onClick={() =>
                  handleImageChange("SocialPoint.png", "socialRecruit")
                }
              >
                Social Point Recruit
              </button>
            </div>
            <div className="middleButtonContainer">
              <button className="middleButton" onClick={handleRecruitx1}>
                Recruit x1
              </button>
              <button className="middleButton" onClick={handleRecruitx10}>
                Recruit x10
              </button>
            </div>
            <div className="rightButtonContainer">
              <button
                className="rightButton nikkeButton"
                onClick={handleOpenInventory}
              >
                Nikke Inventory
              </button>
              <button
                className="rightButton pastButton"
                onClick={handleOpenPast}
              >
                Past Limited Banners
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
