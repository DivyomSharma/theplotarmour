export const NEW_HOME_URL = "https://plotarmour.in";
export const NEW_HOME_LABEL = "plotarmour.in";

export type VentureStatus = "ACTIVE" | "BUILDING";

export type Venture = {
  number: string;
  name: string;
  category: string;
  status: VentureStatus;
  domain: string;
  url: string;
};

export const legacyVentures: Venture[] = [
  {
    number: "01",
    name: "Neki",
    category: "TECH FOR GOOD / NON-PROFIT",
    status: "BUILDING",
    domain: "theneki.xyz",
    url: "https://theneki.xyz",
  },
  {
    number: "02",
    name: "Verity AI",
    category: "ARTIFICIAL INTELLIGENCE",
    status: "BUILDING",
    domain: "theverityai.xyz",
    url: "https://theverityai.xyz",
  },
  {
    number: "03",
    name: "Convoke",
    category: "COMMUNITIES / OPPORTUNITIES",
    status: "BUILDING",
    domain: "theconvoke.xyz",
    url: "https://theconvoke.xyz",
  },
  {
    number: "04",
    name: "Candor AI",
    category: "ARTIFICIAL INTELLIGENCE",
    status: "BUILDING",
    domain: "candorai.xyz",
    url: "https://candorai.xyz",
  },
  {
    number: "05",
    name: "PlotArmour Studio",
    category: "GAMES / CREATIVE TECHNOLOGY",
    status: "ACTIVE",
    domain: "studio.plotarmour.in",
    url: "https://studio.plotarmour.in",
  },
  {
    number: "06",
    name: "PlotArmour Store",
    category: "FASHION / COMMERCE",
    status: "ACTIVE",
    domain: "store.plotarmour.in",
    url: "https://store.plotarmour.in",
  },
  {
    number: "07",
    name: "PlotArmour Merch",
    category: "APPAREL / OBJECTS",
    status: "ACTIVE",
    domain: "merch.plotarmour.in",
    url: "https://merch.plotarmour.in",
  },
];
