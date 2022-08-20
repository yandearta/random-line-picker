import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"

import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { mode, Styles } from "@chakra-ui/theme-tools"

const styles: Styles = {
  global: (props) => ({
    body: {
      bg: mode("#fafaf9", "#0f172a")(props),
    },
  }),
}

const theme = extendTheme({ styles })

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
