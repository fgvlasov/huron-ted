import React, { useState } from "react";
import {
  Heading,
  Stack,
  HStack,
  VStack,
  Icon,
  Flex,
  Box,
  Button,
} from "@chakra-ui/react";

export default function AccountBlock({ ...props }) {
  const [state, setState] = useState([]);
  return (
    <HStack
      alignItems={"flex-start"}
      borderBottom="1px solid grey"
      py={1}
      minW={{ base: "100%", md: "50%" }}
      justify={"space-between"}
    >
      <Heading as="h3" fontSize="xl" w="110px" py={2}>
        {props.title}
      </Heading>
      <VStack align={"flex-start"} minW={{ md: "50%" }} p={2}>
        {props.parameter && <Box className="trackName">{props.parameter}</Box>}
      </VStack>
      <Box alignItems="end">
        <Button>{props.rightButtonName}</Button>
      </Box>
    </HStack>
  );
}
