import {
  Box,
  Flex,
  Text,
  Stack,
  HStack,
  VStack,
  Image,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Navbar() {

	return (
	  <>
      <Box bg={useColorModeValue('#225270', 'blue.600')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
			<Link href="/" fontSize={'24'}>
				<Image src='/logo.png' h={50} alt='NatMatch Version2' />
			</Link>
          </HStack>

        </Flex>
	
      </Box>

	</>
  );
}