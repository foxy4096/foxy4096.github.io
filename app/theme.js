import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { tableTheme } from "./tableTheme";
import { withProse } from "@nikolovlazar/chakra-ui-prose";

const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme(withProse(), {
  config,
  fonts: {
    body: "Roboto Mono, monospace"
  },
  styles: {
    global: (props) => ({
      body: {
        backgroundColor: mode("white", "#121112")(props),
      },
      "*::placeholder": {
        color: mode("gray.400", "whiteAlpha.400")(props),
      },
      "*, *::before, &::after": {
        borderColor: mode("gray.200", "whiteAlpha.300")(props),
        wordWrap: "break-word",
      },
    }),
  },
  components: {
    Table: tableTheme,
  },
});

export default theme;
