import { useState } from "react";
import {
  InputGroup,
  Stack,
  Button,
  Link,
  InputLeftAddon,
  Box,
  FormControl,
  InputLeftElement,
  InputRightElement,
  FormHelperText,
  Input,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

export default function AccountPassword({ ...props }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Stack spacing={4}>
      <FormControl>
        <Text mb="8px">{props.title}</Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            children={<FaLock color="gray.300" />}
          />
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleShowClick}>
              {showPassword ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <FormHelperText textAlign="right">
          <Link href="/auth/forgot">forgot password?</Link>
        </FormHelperText>
      </FormControl>
      <Box alignItems="end" align="end">
        <Button>Save</Button>
      </Box>
    </Stack>
  );
}
