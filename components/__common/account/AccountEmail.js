import { useState } from "react";
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
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Stack spacing={4}>
      <FormControl>
        <Text mb="8px">{props.title}</Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={
              props.type == "email" ? <FaUserAlt color="gray.300" /> : ""
            }
          />
          <Input type={props.type} placeholder={props.placeholder} />
        </InputGroup>
      </FormControl>
      <Box alignItems="end" align="end">
        <Button>Save</Button>
      </Box>
    </Stack>
  );
}
