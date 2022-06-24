import { useState } from "react";

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
      <FormControl>
        <HStack>
          <Input type={props.attr_type} placeholder={props.attr_placeholder} />
          <Button type="submit">Save</Button>
        </HStack>
      </FormControl>
    </Stack>
  );
}
