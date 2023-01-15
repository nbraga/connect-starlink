import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Box,
  Text,
  CardFooter,
} from "@chakra-ui/react";

import React from "react";
import { PlansProps } from "../../interfaces/Iplans";
import { ButtonGhost } from "../buttons/ButtonGhost";
import { ButtonPrimary } from "../buttons/ButtonPrimary";

interface Props {
  dataList: PlansProps[];
}

export const CardPlans = ({ dataList }: Props) => {
  return (
    <>
      {dataList.map((item) => (
        <Card
          h={item.title === "Pró" ? "sm" : "xs"}
          minW={"xs"}
          borderRadius={"2xl"}
          key={item.id}
        >
          <CardHeader borderRadius={"2xl"} bgColor={"gray.200"}>
            <Heading
              fontSize={"2rem"}
              color={"blue.200"}
              textAlign={"center"}
              size="md"
            >
              {item.title}
            </Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading
                  fontSize={"2rem"}
                  textAlign={"center"}
                  textTransform="uppercase"
                >
                  R$ {item.price}
                </Heading>
                {item.plans.map((plan) => (
                  <Text key={plan.id_plan} pt="2" fontSize="sm">
                    {plan.description}
                  </Text>
                ))}
              </Box>
            </Stack>
          </CardBody>
          <CardFooter>
            <Stack w={"full"}>
              <Heading fontSize={"1.5rem"} textAlign={"center"}>
                {item.duration}
              </Heading>
              {item.title === "Pró" ? (
                <ButtonPrimary>Adicionar</ButtonPrimary>
              ) : (
                <ButtonGhost>Adicionar</ButtonGhost>
              )}
            </Stack>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};
