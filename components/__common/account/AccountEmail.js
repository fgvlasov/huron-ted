import { useState } from "react";
import { Field } from "formik";
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
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

export default function AccountEmail({ ...props }) {
  const [inputEmail, setInputEmail] = useState("");
  const [inputEmailConf, setInputEmailConf] = useState("");
  const [isTyped, setIsTyped] = useState(true);

  return (
    <Stack spacing={4} py={2}>
      <FormControl>
        <Text my="8px">{props.title}</Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={
              props.type == "email" ? <FaUserAlt color="gray.300" /> : ""
            }
          />
          <Input
            type={props.type}
            placeholder={props.placeholder}
            onChange={(event) => setInputEmail(event.target.value)}
          />
        </InputGroup>
        <Text my="8px">{props.title_re}</Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={
              props.type == "email" ? <FaUserAlt color="gray.300" /> : ""
            }
          />
          <Input
            type={props.type}
            placeholder={props.placeholder_re}
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
      <Box alignItems="end" align="flex-start" my={2}>
        <Button type="submit" disabled={isTyped}>
          Save
        </Button>
      </Box>
    </Stack>
  );
}
