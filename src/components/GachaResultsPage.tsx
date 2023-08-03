import React from "react";

type Nikke = {
  name: string;
  image: string;
  description: string;
};

type Rarity = "R" | "SR" | "SSR" | "Pilgrim" | "RateUp";

type NikkesByRarity = {
  [key in Rarity]: Nikke[];
};

type GachaResultsPageProps = {
  results: Nikke[];
  onExit: () => void;
  onRollAgain: () => void;
  nikkesByRarity: NikkesByRarity;
};

const GachaResultsPage: React.FC<GachaResultsPageProps> = ({
  results,
  onExit,
  onRollAgain,
  nikkesByRarity,
}) => {
  const showRecruitx1 = results.length === 1;
  return (
    <div>
      <h4 className="resultText">Recruitment Results</h4>
      <div className="results-container">
        {results.map((result, index) => (
          <div
            key={index}
            className={`nikke rarity-${getRarity(result, nikkesByRarity)}`}
          >
            <img src={`/src/images/${result.image}`} alt={result.name} />
            <p>
              <center>{result.name}</center>
            </p>
          </div>
        ))}
      </div>
      {showRecruitx1 ? (
        <button className="middleButton" onClick={onRollAgain}>
          Recruit Again x1
        </button>
      ) : (
        <button className="middleButton" onClick={onRollAgain}>
          Recruit Again x10
        </button>
      )}
      <div className="exitButton">
        <button onClick={onExit}>X</button>
      </div>
    </div>
  );
};

const getRarity = (
  nikke: Nikke,
  nikkesByRarity: NikkesByRarity
): Rarity | null => {
  for (const rarity in nikkesByRarity) {
    if (nikkesByRarity[rarity as Rarity].includes(nikke)) {
      return rarity as Rarity;
    }
  }
  return null;
};

export default GachaResultsPage;
