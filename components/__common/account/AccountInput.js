import { useState } from "react";

import { Formik, Field } from "formik";
import {
  InputGroup,
  Stack,
  Button,
  HStack,
  Box,
  InputLeftAddon,
  FormControl,
  InputLeftElement,
  InputRightElement,
  FormHelperText,
  Input,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

export default function AccountInput({ ...props }) {
  const [inputEmail, setInputEmail] = useState("");

  return (
    <Stack w="100%">
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
        }}
        onSubmit={(values) => {
          //alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <FormControl>
              <HStack>
                <Input
                  type={props.attr_type}
                  placeholder={props.attr_placeholder}
                />
                <Button type="submit">Save</Button>
              </HStack>
            </FormControl>
          </form>
        )}
      </Formik>
    </Stack>
  );
}
