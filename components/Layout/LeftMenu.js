import { useRouter } from "next/router";
import { Stack, HStack, VStack, Link } from "@chakra-ui/react";

export default function Navbar() {
  const navLinks = [
    { title: "Dashbord", path: "/dashbord" },
    { title: "Applicants", path: "/medphys/applicants" },
    { title: "Directors", path: "/medphys/directors" },
  ];
  return (
    <VStack
      as={"nav"}
      spacing={4}
      p={10}
      display={{ base: "none", md: "flex" }}
    >
      {navLinks.map((link) => (
        <Link
          key={link.title}
          px={2}
          py={1}
          rounded={"md"}
          _hover={{
            textDecoration: "none",
          }}
          href={link.path}
        >
          {link.title}
        </Link>
      ))}
    </VStack>
  );
}
