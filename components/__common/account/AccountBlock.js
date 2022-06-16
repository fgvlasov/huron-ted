import React, { useState } from "react";
import { Formik, Field } from "formik";
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
import AccountEmail from "./AccountEmail";
import AccountPassword from "./AccountPassword";
import AccountQuestions from "./AccountQuestions";

export default function AccountBlock({ ...props }) {
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => setIsShow((prev) => !prev);
  const inputSwitch = (parameter) => {
    switch (parameter) {
      case "email":
        return (
          <Box>
            <AccountEmail
              title="New Email"
              title_re="Confirm email"
              type="email"
              placeholder="Enter your new email"
              placeholder_re="Re-Enter your new email"
            />
          </Box>
        );
      case "password":
        return (
          <AccountPassword
            title="New Password"
            type="password"
            placeholder=""
          />
        );
      case "questions":
        return <AccountQuestions />;
      default:
        return <AccountEmail title="New Email" type="email" placeholder="" />;
    }
  };
  return (
    <Box borderBottom="1px solid grey" py={1}>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <HStack
              alignItems={"flex-start"}
              //minW={{ base: "100%", md: "50%" }}
              justify={"space-between"}
            >
              <Heading as="h3" fontSize="xl" w="110px" py={2}>
                {props.title}
              </Heading>
              <VStack align={"flex-start"} minW={{ md: "50%" }} p={2}>
                {props.parameter && !isShow && (
                  <Box className="trackName">{props.parameter}</Box>
                )}
              </VStack>
              <Box alignItems="end">
                <Button my={2} onClick={handleClick}>
                  {isShow ? "Close" : "Edit"}
                </Button>
              </Box>
            </HStack>
            {isShow && <Box>{inputSwitch(props.type)} </Box>}
          </form>
        )}
      </Formik>
    </Box>
  );
}
