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
    columns: ["2/3", "1/3"],
    areas: [
      [gridAreasCommon.Header, gridAreasCommon.Header],
      [gridAreasHome.Main, gridAreasHome.Main],
      [gridAreasCommon.Footer, gridAreasCommon.Footer],
    ],
  },
}

export enum GridTypes {
  AuthArea = "AuthArea",
  HomeArea = "HomeArea",
}

export interface IGrid extends GridProps, JSX.ElementChildrenAttribute {
  gridType: GridTypes
}
