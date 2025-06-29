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

  leagueName: string;
}

interface AllGamesResponse {
    data: AllGamesItem[]
}

export type { AllGameSideData, AllGamesItem, AllGamesResponse, AllGamesHeroes };
