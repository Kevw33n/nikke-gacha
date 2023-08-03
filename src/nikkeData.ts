interface Nikke {
    name: string;
    image: string;
    description: string;
}

type Rarity = "R" | "SR" | "SSR" | "Pilgrim" | "RateUp";

type NikkesByRarity = {
    [key in Rarity]: Nikke[];
};
  
export const nikkesByRarity: NikkesByRarity = {
        R: [
          { name: "Product 08", image: "Product08.png", description: "Missilis" },
          { name: "Product 12", image: "Product12.png", description: "Missilis" },
          { name: "Product 23", image: "Product23.png", description: "Missilis" },
          { name: "Soldier EG", image: "SoldierEG.png", description: "Elysion" },
          { name: "Soldier FA", image: "SoldierFA.png", description: "Elysion" },
          { name: "Soldier OW", image: "SoldierOW.png", description: "Elysion" },
          { name: "iDoll Flower", image: "iDollFlower.png", description: "Tetra" },
          { name: "iDoll Ocean", image: "iDollOcean.png", description: "Tetra" },
          { name: "iDoll Sun", image: "iDollSun.png", description: "Tetra" },
        ],
        SR: [
          { name: "Rapi", image: "Rapi.png", description: "Elysion" },
          { name: "Neon", image: "Neon.png", description: "Elysion" },
          { name: "Anis", image: "Anis.png", description: "Tetra" },
          { name: "N102", image: "N102.png", description: "Missilis" },
          { name: "Mihara", image: "Mihara.png", description: "Missilis" },
          { name: "Ether", image: "Ether.png", description: "Missilis" },
          { name: "Delta", image: "Delta.png", description: "Elysion" },
          { name: "Belorta", image: "Belorta.png", description: "Tetra" },
          { name: "Mica", image: "Mica.png", description: "Tetra" },
        ],
        SSR: [
          { name: "Dolla", image: "Dolla.png", description: "Tetra" },
          { name: "Blanc", image: "Blanc.png", description: "Tetra" },
          { name: "Viper", image: "Viper.png", description: "Tetra" },
          { name: "Mary", image: "Mary.png", description: "Tetra" },
          { name: "Sugar", image: "Sugar.png", description: "Tetra" },
          { name: "Milk", image: "Milk.png", description: "Tetra" },
          { name: "Frima", image: "Frima.png", description: "Tetra" },
          { name: "Yulha", image: "Yulha.png", description: "Tetra" },
          { name: "Ludmilla", image: "Ludmilla.png", description: "Tetra" },
          { name: "Alice", image: "Alice.png", description: "Tetra" },
          { name: "Rupee", image: "Rupee.png", description: "Tetra" },
          { name: "Exia", image: "Exia.png", description: "Tetra" },
          { name: "Novel", image: "Novel.png", description: "Tetra" },
          { name: "Folkwang", image: "Folkwang.png", description: "Tetra" },
          { name: "Noir", image: "Noir.png", description: "Tetra" },
          { name: "Rosanna", image: "Rosanna.png", description: "Tetra" },
          { name: "Sakura", image: "Sakura.png", description: "Tetra" },
          { name: "Cocoa", image: "Cocoa.png", description: "Tetra" },
          { name: "Soda", image: "Soda.png", description: "Tetra" },
          { name: "Biscuit", image: "Biscuit.png", description: "Tetra" },
          { name: "Noise", image: "Noise.png", description: "Tetra" },
          { name: "Volume", image: "Volume.png", description: "Tetra" },
          { name: "Nero", image: "Nero.png", description: "Tetra" },
          { name: "Centi", image: "Centi.png", description: "Missilis" },
          { name: "Liter", image: "Liter.png", description: "Missilis" },
          { name: "Laplace", image: "Laplace.png", description: "Missilis" },
          { name: "Drake", image: "Drake.png", description: "Missilis" },
          { name: "Maxwell", image: "Maxwell.png", description: "Missilis" },
          { name: "Crow", image: "Crow.png", description: "Missilis" },
          { name: "Jackal", image: "Jackal.png", description: "Missilis" },
          { name: "Pepper", image: "Pepper.png", description: "Missilis" },
          { name: "Julia", image: "Julia.png", description: "Missilis" },
          { name: "Yuni", image: "Yuni.png", description: "Missilis" },
          { name: "Admi", image: "Admi.png", description: "Missilis" },
          { name: "Epinel", image: "Epinel.png", description: "Missilis" },
          { name: "Signal", image: "Signal.png", description: "Elysion" },
          { name: "Poli", image: "Poli.png", description: "Elysion" },
          { name: "Miranda", image: "Miranda.png", description: "Elysion" },
          { name: "D", image: "D.png", description: "Elysion" },
          { name: "Brid", image: "Brid.png", description: "Elysion" },
          { name: "Soline", image: "Soline.png", description: "Elysion" },
          { name: "Diesel", image: "Diesel.png", description: "Elysion" },
          { name: "Emma", image: "Emma.png", description: "Elysion" },
          { name: "Vesti", image: "Vesti.png", description: "Elysion" },
          { name: "Eunhwa", image: "Eunhwa.png", description: "Elysion" },
          { name: "Privaty", image: "Privaty.png", description: "Elysion" },
          { name: "Guillotine", image: "Guillotine.png", description: "Elysion" },
          { name: "Maiden", image: "Maiden.png", description: "Elysion" },
          { name: "Helm", image: "Helm.png", description: "Elysion" },
        ],
        Pilgrim: [
          { name: "Snow White", image: "SnowWhite.png", description: "Pilgrim" },
          { name: "Rapunzel", image: "Rapunzel.png", description: "Pilgrim" },
          { name: "Scarlet", image: "Scarlet.png", description: "Pilgrim" },
          { name: "Harran", image: "Harran.png", description: "Pilgrim" },
          { name: "Isabel", image: "Isabel.png", description: "Pilgrim" },
          { name: "Noah", image: "Noah.png", description: "Pilgrim" },
          { name: "Dorothy", image: "Dorothy.png", description: "Pilgrim" },
          { name: "Modernia", image: "Modernia.png", description: "Pilgrim" },
        ],
        RateUp: [
          {
            name: "Mast",
            image: "Mast.png",
            description: "Elysion",
          },
        ],
      };