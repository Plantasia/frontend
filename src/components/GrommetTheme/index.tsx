import { ThemeType } from "grommet"
import { grommet } from "grommet/themes"
import { deepMerge } from "grommet/utils"

const theme: ThemeType = {
  global: {
    colors: {
      custom: "#F0F",
    },
    font: {
      family: "Roboto Slab",
    },
  },
  textInput: {
    extend: () => `
    
    `,
  },
  anchor: {
    color: "dark-2",
  },
}

const deepTheme = deepMerge(grommet, theme)

export { deepTheme }
