// Update the Coin interface to include more fields
export interface Coin {
  uuid: string;
  symbol: string;
  name: string;
  iconUrl: string;
  price: string;
  change: string;
  marketCap: string;
  volume24h: string;
  description?: string;
  websiteUrl?: string;
  links?: Array<{
    name: string;
    url: string;
    type: string;
  }>;
  socials?: Array<{
    name: string;
    url: string;
    type: string;
  }>;
  supply?: {
    confirmed?: boolean;
    circulating?: string;
    total?: string;
    maxSupply?: string;
  };
  allTimeHigh?: {
    price: string;
    timestamp: number;
  };
  allTimeLow?: {
    price: string;
    timestamp: number;
  };
  rank: number;
  numberOfMarkets: number;
  numberOfExchanges: number;
  btcPrice: string;
  priceAt: number;
  listedAt: number;
  tier: number;
  tags: string[];
  platform?: string;
  twitterUsername?: string;
  githubUrl?: string;
  redditUrl?: string;
  mediumUrl?: string;
  discordUrl?: string;
  telegramUrl?: string;
}