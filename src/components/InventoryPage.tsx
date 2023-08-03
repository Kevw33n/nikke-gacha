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

type InventoryPageProps = {
  inventory: { [key: string]: number };
  onExit: () => void;
  nikkesByRarity: NikkesByRarity;
};

const InventoryPage: React.FC<InventoryPageProps> = ({
  inventory,
  onExit,
  nikkesByRarity,
}) => {
  const totalCount = Object.values(inventory).reduce(
    (total, count) => total + count,
    0
  );

  const gemsWasted = totalCount * 300;

  const getRarity = (nikkeName: string): Rarity | null => {
    for (const rarity in nikkesByRarity) {
      if (
        nikkesByRarity[rarity as Rarity].some(
          (nikke) => nikke.name === nikkeName
        )
      ) {
        return rarity as Rarity;
      }
    }
    return null;
  };

  const sortNikkesByRarity = (a: string, b: string): number => {
    const rarityA = getRarity(a);
    const rarityB = getRarity(b);
    if (rarityA === rarityB) {
      return a.localeCompare(b);
    } else if (rarityA === "Pilgrim") {
      return -1;
    } else if (rarityB === "Pilgrim") {
      return 1;
    } else if (rarityA?.startsWith("RateUp")) {
      return -1;
    } else if (rarityB?.startsWith("RateUp")) {
      return 1;
    } else if (rarityA === "SSR") {
      return -1;
    } else if (rarityB === "SSR") {
      return 1;
    } else if (rarityA === "SR") {
      return -1;
    } else if (rarityB === "SR") {
      return 1;
    } else {
      return 0;
    }
  };

  const sortedNikkes = Object.keys(inventory).sort(sortNikkesByRarity);

  let ssrCount = 0;
  for (const rarity in nikkesByRarity) {
    if (rarity === "SSR") {
      const ssrnikkes = nikkesByRarity[rarity];
      for (const nikke of ssrnikkes) {
        const count = inventory[nikke.name] || 0;
        ssrCount += count;
      }
    }
  }

  let pilgrimCount = 0;
  for (const rarity in nikkesByRarity) {
    if (rarity === "Pilgrim") {
      const ssrnikkes = nikkesByRarity[rarity];
      for (const nikke of ssrnikkes) {
        const count = inventory[nikke.name] || 0;
        pilgrimCount += count;
      }
    }
  }

  let rateUpCount = 0;
  for (const rarity in nikkesByRarity) {
    if (rarity.startsWith("RateUp")) {
      const rateUpnikkes = nikkesByRarity[rarity as Rarity];
      for (const nikke of rateUpnikkes) {
        const count = inventory[nikke.name] || 0;
        rateUpCount += count;
      }
    }
  }

  const ssrPercentage =
    ((ssrCount + pilgrimCount + rateUpCount) / totalCount) * 100;

  const rateUpPercentage = (rateUpCount / totalCount) * 100;

  const pilgrimPercentage = (pilgrimCount / totalCount) * 100;

  return (
    <div>
      <h2 className="resultText">
        Total Pulls: {totalCount}, Wasted: {gemsWasted} Gems XD
      </h2>
      <h2 className="resultText">
        SSR Pull Rate: {ssrPercentage.toFixed(2)}%, Rate Up Pull Rate:{" "}
        {rateUpPercentage.toFixed(2)}%, Pilgrim Pull Rate:{" "}
        {pilgrimPercentage.toFixed(2)}%
      </h2>
      {sortedNikkes.map((nikkeName) => {
        const rarity = getRarity(nikkeName);
        const nikkeStyle = rarity ? `nikke rarity-${rarity}` : "nikke";
        const count = inventory[nikkeName];
        return (
          <div key={nikkeName} className={nikkeStyle}>
            <h3>
              {nikkeName}: {count}
            </h3>
          </div>
        );
      })}
      <div className="exitButton">
        <button onClick={onExit}>X</button>
      </div>
    </div>
  );
};

export default InventoryPage;
