import {
  Box,
  Flex,
  Text,
  Stack,
  HStack,
  Button,
  VStack,
  Image,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <>
      <Box
        bg={useColorModeValue("#225270", "blue.600")}
        px={4}
        align={"center"}
        justifyContent={"space-between"}
      >
        <Flex h={16} alignItems={"center"} maxW={"1200"}>
          <HStack
            spacing={8}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Link href="/" fontSize={"24"}>
              <Image src="/logo.png" h={50} alt="NatMatch Version2" />
            </Link>
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"blue.400"}
              _hover={{
                bg: "grey.300",
              }}
            >
              <Link href="/login">Login</Link>
            </Button>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
