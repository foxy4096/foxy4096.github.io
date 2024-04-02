import { Prose } from "@nikolovlazar/chakra-ui-prose";

export function useMDXComponents(components) {
  return {
    prose: Prose,
    
    ...components,
  };
}
