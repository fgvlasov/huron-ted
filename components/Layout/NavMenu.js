import { navLinks } from "../../constants/global";
import { Link, Icon, VStack } from "@chakra-ui/react";

export default function NavMenu() {
  return (
    <VStack as={"nav"} spacing={4} p={5} alignItems={"flex-start"}>
      {navLinks.map((link) => (
        <Link
          key={link.title}
          rounded={"md"}
          display={"flex"}
          justifyItems={"center"}
          alignItems={"center"}
          _hover={{
            textDecoration: "none",
          }}
          href={link.path}
        >
          <Icon as={link.icon} color={"blue.500"} w={5} h={5} mx={2} />
          {link.title}
        </Link>
      ))}
    </VStack>
  );
}
