import { GridProps } from "grommet"

export enum gridAreasAuth {
  Banner = "BANNER",
  Main = "MAIN",
}
export enum gridAreasCommon {
  Header = "HEADER",
  Footer = "FOOTER",
}
export enum gridAreasHome {
  Main = "MAIN",
  Banner = "BANNER",
  Categories = "CATEGORIES",
}

export enum gridAreasForum {
  Main = "MAIN",
}

export const TypesAreas = {
  AuthArea: {
    rows: ["minmax(0.5fr,100px)", "3fr", "minmax  (0.75fr,150px)"],
    columns: ["2/3", "1/3"],
    areas: [
      [gridAreasCommon.Header, gridAreasCommon.Header],
      [gridAreasAuth.Banner, gridAreasAuth.Main],
      [gridAreasCommon.Footer, gridAreasCommon.Footer],
    ],
  },
  HomeArea: {
    rows: ["minmax(0.5fr,100px)", "3fr", "minmax  (0.75fr,150px)"],
    columns: ["1/2", "1/2"],
    areas: [
      [gridAreasCommon.Header, gridAreasCommon.Header],
      [gridAreasHome.Main, gridAreasHome.Banner],
      [gridAreasHome.Categories, gridAreasHome.Categories],
      [gridAreasCommon.Footer, gridAreasCommon.Footer],
    ],
  },
  ForumArea: {
    rows: ["minmax(0.5fr,100px)", "3fr", "minmax  (0.75fr,150px)"],
    areas: [
      [gridAreasCommon.Header],
      [gridAreasHome.Main],
      [gridAreasCommon.Footer],
    ],
  },
}

export enum GridTypes {
  AuthArea = "AuthArea",
  HomeArea = "HomeArea",
  ForumArea = "ForumArea",
}

export interface IGrid extends GridProps, JSX.ElementChildrenAttribute {
  gridType: GridTypes
}
