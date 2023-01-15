import { Flex, Image, Stack } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ButtonPrimary } from "./buttons/ButtonPrimary";

export const Header = () => {
  return (
    <Flex
      bgColor={"gray.100"}
      p={5}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Image
        w={250}
        objectFit="contain"
        src="/logos/logo-main.png"
        alt="logo"
      />
      <Stack align={"center"} direction={"row"} spacing={10}>
        <AiOutlineShoppingCart size={30} />
        <ButtonPrimary>Conecte-se</ButtonPrimary>
      </Stack>
    </Flex>
  );
};
