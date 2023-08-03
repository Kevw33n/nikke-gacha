import { useState } from "react";
import Image from "./Image";
import "../App.css";
import GachaResultsPage from "./GachaResultsPage";
import InventoryPage from "./InventoryPage";
import { nikkesByRarity } from "../archiveNikkeData";

interface Nikke {
  name: string;
  image: string;
  description: string;
}

type Rarity =
  | "R"
  | "SR"
  | "SSR"
  | "Pilgrim"
  | "RateUp"
  | "RateUp2"
  | "RateUp3"
  | "RateUp4"
  | "RateUp5"
  | "RateUp6";

type PastBannersPageProps = {
  onExit: () => void;
};

const PastBannersPage: React.FC<PastBannersPageProps> = ({ onExit }) => {
  const [gachaResults, setGachaResults] = useState<Nikke[]>([]);
  const [showResultsPage, setShowResultsPage] = useState<boolean>(false);
  const [currentImage, setCurrentImage] =
    useState<string>("MaryBayGoddess.png");
  const [currentBannerType, setCurrentBannerType] = useState<string>("default");
  const [inventory, setInventory] = useState<{ [key: string]: number }>({});
  const [showInventoryPage, setShowInventoryPage] = useState<boolean>(false);
  const [showRecruitx1, setShowRecruitx1] = useState<boolean>(false);

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
    if (currentBannerType === "neonRecruit") {
      if (randNum < 0.53) {
        return "R";
      } else if (randNum < 0.96) {
        return "SR";
      } else {
        const SSRrandNum = Math.random();
        if (SSRrandNum < 0.5) {
          return "RateUp2";
        } else if (SSRrandNum < 0.875) {
          return "SSR";
        } else {
          return "Pilgrim";
        }
      }
    }
    if (currentBannerType === "rupeeRecruit") {
      if (randNum < 0.53) {
        return "R";
      } else if (randNum < 0.96) {
        return "SR";
      } else {
        const SSRrandNum = Math.random();
        if (SSRrandNum < 0.5) {
          return "RateUp3";
        } else if (SSRrandNum < 0.875) {
          return "SSR";
        } else {
          return "Pilgrim";
        }
      }
    }
    if (currentBannerType === "anneRecruit") {
      if (randNum < 0.53) {
        return "R";
      } else if (randNum < 0.96) {
        return "SR";
      } else {
        const SSRrandNum = Math.random();
        if (SSRrandNum < 0.5) {
          return "RateUp4";
        } else if (SSRrandNum < 0.875) {
          return "SSR";
        } else {
          return "Pilgrim";
        }
      }
    }
    if (currentBannerType === "powerRecruit") {
      if (randNum < 0.53) {
        return "R";
      } else if (randNum < 0.96) {
        return "SR";
      } else {
        const SSRrandNum = Math.random();
        if (SSRrandNum < 0.5) {
          return "RateUp5";
        } else if (SSRrandNum < 0.875) {
          return "SSR";
        } else {
          return "Pilgrim";
        }
      }
    }
    if (currentBannerType === "makimaRecruit") {
      if (randNum < 0.53) {
        return "R";
      } else if (randNum < 0.96) {
        return "SR";
      } else {
        const SSRrandNum = Math.random();
        if (SSRrandNum < 0.5) {
          return "RateUp6";
        } else if (SSRrandNum < 0.875) {
          return "SSR";
        } else {
          return "Pilgrim";
        }
      }
    } else {
      // Mary: Bay Goddess Banner
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
      ) : (
        <>
          <Image currentImage={currentImage}></Image>
          <div className="textContainer">
            <h1 className="text">Archive Limited Character Banners</h1>
          </div>
          <div className="container">
            <div className="buttonContainer">
              <button
                className="button maryButton"
                onClick={() =>
                  handleImageChange("MaryBayGoddess.png", "default")
                }
              >
                Mary: Bay Goddess
              </button>
              <button
                className="button neonButton"
                onClick={() =>
                  handleImageChange("NeonBlueOcean.png", "neonRecruit")
                }
              >
                Neon: Blue Ocean
              </button>
              <button
                className="button powerButton"
                onClick={() =>
                  handleImageChange("PowerRecruit.png", "powerRecruit")
                }
              >
                Power
              </button>
              <button
                className="button makimaButton"
                onClick={() =>
                  handleImageChange("MakimaRecruit.png", "makimaRecruit")
                }
              >
                Makima
              </button>
              <button
                className="button rupeeButton"
                onClick={() =>
                  handleImageChange("RupeeWinterShopper.png", "rupeeRecruit")
                }
              >
                Rupee: Winter Shopper
              </button>
              <button
                className="button anneButton"
                onClick={() =>
                  handleImageChange("AnneMiracleFairy.png", "anneRecruit")
                }
              >
                Anne: Miracle Fairy
              </button>
            </div>
            <div className="middlePastButtonContainer">
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
            </div>
            <div className="exitButton">
              <button onClick={onExit}>X</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PastBannersPage;
