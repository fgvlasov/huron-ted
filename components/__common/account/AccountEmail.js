import { useState } from "react";

import { Formik, Field } from "formik";
import {
  InputGroup,
  Stack,
  Button,
  Box,
  InputLeftAddon,
  FormControl,
  InputLeftElement,
  InputRightElement,
  FormHelperText,
  Input,
  InputRightAddon,
  Text,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

export default function AccountEmail({ ...props }) {
  const [inputEmail, setInputEmail] = useState("");
  const [inputEmailConf, setInputEmailConf] = useState("");
  const [isTyped, setIsTyped] = useState(true);

  return (
    <Stack spacing={4} py={2}>
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
              <Text my="8px">{props.label_email_new}</Text>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={
                    props.type == "email" ? <FaUserAlt color="gray.300" /> : ""
                  }
                />
                <Input
                  type={props.type}
                  placeholder={props.placeholder_email_new}
                  onChange={(event) => setInputEmail(event.target.value)}
                />
              </InputGroup>
              <Text my="8px">{props.label_email_confirm}</Text>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={
                    props.type == "email" ? <FaUserAlt color="gray.300" /> : ""
                  }
                />
                <Input
                  type={props.type}
                  placeholder={props.placeholder_email_confirm}
                  value={inputEmailConf}
                  onChange={(event) => {
                    setInputEmailConf(event.target.value);
                    inputEmailConf == inputEmail
                      ? setIsTyped(false)
                      : setIsTyped(true);
                  }}
                />
              </InputGroup>
            </FormControl>
            <AlertDialog>
              <AlertDialogOverlay>
                <AlertDialogContent>
                  <AlertDialogBody>
                    Changing your email will change
                  </AlertDialogBody>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>
            <Box alignItems="end" align="flex-start" my={2}>
              <Button type="submit" disabled={isTyped}>
                Save
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Stack>
  );
}
