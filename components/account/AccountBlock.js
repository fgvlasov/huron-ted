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
import InputEmail from "./InputEmail";
import InputPassword from "./InputPassword";

export default function AccountBlock({ ...props }) {
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => setIsShow((prev) => !prev);

  return (
    <Box borderBottom="1px solid grey" py={1}>
      <HStack
        alignItems={"flex-start"}
        //minW={{ base: "100%", md: "50%" }}
        justify={"space-between"}
      >
        <Heading as="h3" fontSize="xl" w="110px" py={2}>
          {props.title}
        </Heading>
        <VStack align={"flex-start"} minW={{ md: "50%" }} p={2}>
          {props.parameter && (
            <Box className="trackName">{props.parameter}</Box>
          )}
        </VStack>
        <Box alignItems="end">
          <Button onClick={handleClick}>{isShow ? "Close" : "Edit"}</Button>
        </Box>
      </HStack>
      {isShow && (
        <Box>
          <InputEmail title="New Email" type="email" placeholder="" />
          <InputPassword title="New Password" type="password" placeholder="" />
        </Box>
      )}
    </Box>
  );
}
