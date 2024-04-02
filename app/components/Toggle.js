import {
  IconButton,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsSun, BsMoon } from "react-icons/bs";

function Toggle() {
  const { toggleColorMode } = useColorMode();
  return (
    <Tooltip
      label={useColorModeValue("Light", "Dark")}
      bg={"transparent"}
      color={"gray.400"}
      shadow={"none"}
      placement="right"
      fontSize={"xs"}
      _light={{
        color: "gray.600",
      }}
    >
      <IconButton
        rounded={"full"}
        aria-label="Mode Change"
        icon={useColorModeValue(<BsMoon />, <BsSun />)}
        onClick={toggleColorMode}
      />
    </Tooltip>
  );
}

export default Toggle;
