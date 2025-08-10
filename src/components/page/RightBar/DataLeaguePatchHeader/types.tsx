import type { ItemStringType } from "@/types/types";

interface HeaderItemNymericType extends ItemStringType {
  cmp_mom?: boolean;
  cmp_value?: string;
}

interface DataLeaguePatchHeaderDataType {
  first_pick_win: HeaderItemNymericType;
  last_pick_win: HeaderItemNymericType;

  win_sent: HeaderItemNymericType;
  net_worth: HeaderItemNymericType;

  hero_kills: HeaderItemNymericType;
  last_hits: HeaderItemNymericType;

  kpm: HeaderItemNymericType;
  matches: HeaderItemNymericType;

  duration: HeaderItemNymericType;

  cores_networth_at_15: HeaderItemNymericType;
  supports_networth_at_15: HeaderItemNymericType;
  cores_level_at_15: HeaderItemNymericType;
  supports_level_at_15: HeaderItemNymericType;
}

interface DataLeaguePatchHeaderType {
    data: DataLeaguePatchHeaderDataType;
    patch: string;
}

export type { DataLeaguePatchHeaderDataType, DataLeaguePatchHeaderType };