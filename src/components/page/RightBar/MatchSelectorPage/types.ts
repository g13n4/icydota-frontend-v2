interface AllGameSideData {
  gold: string;
  xp: string;
  hero_kills: string;
  kills_per_min: string;
  neutral_kills: string;
  roshan_kills: string;
  runes_picked_up: string;
  observer_kills: string;
  observer_uses: string;
  sentry_kills: string;
  sentry_uses: string;
}

interface AllGameSideComparisonData {
  gold: boolean | null;
  xp: boolean | null;
  hero_kills: boolean | null;
  kills_per_min: boolean | null;
  neutral_kills: boolean | null;
  roshan_kills: boolean | null;
  runes_picked_up: boolean | null;
  observer_kills: boolean | null;
  observer_uses: boolean | null;
  sentry_kills: boolean | null;
  sentry_uses: boolean | null;
}

interface AllGamesHeroes {
  hero_id: string;
  position_id: string;
}

interface AllGamesItem {
  id: string;
  direWon: boolean;
  duration: string;

  direName: string;
  direData: AllGameSideData;
  direHeroes: AllGamesHeroes[];

  sentName: string;
  sentData: AllGameSideData;
  sentHeroes: AllGamesHeroes[];

  compData: AllGameSideComparisonData;

  leagueName: string;
}

interface AllGamesResponse {
  data: AllGamesItem[];
}

export type { AllGamesHeroes, AllGameSideData, AllGamesItem, AllGamesResponse, AllGameSideComparisonData };

