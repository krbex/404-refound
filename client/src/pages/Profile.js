import React from "react";

import {
  chakra,
  Box,
  Stack,
  Link,
  HStack,
  Text,
  Container,
  Icon,
  Avatar,
  Tooltip,
  StackProps,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { AiFillGithub } from "react-icons/ai";

// export default function Profile() {
//   return <div> Hello World this is the Profile page </div>;
// }

const Profile = () => {
  return (
    <Container maxW="5xl" p={{ base: 5, md: 6 }}>
      <Stack
        w="18rem"
        spacing={2}
        p={4}
        border="1px solid"
        borderColor={useColorModeValue("gray.400", "gray.600")}
        rounded="md"
        margin="0 auto"
        _hover={{
          boxShadow: useColorModeValue(
            "0 4px 6px rgba(160, 174, 192, 0.6)",
            "0 4px 6px rgba(9, 17, 28, 0.4)"
          ),
        }}
      >
        <HStack justifyContent="space-between" alignItems="baseline">
          <Tooltip
            label="Austin, Texas"
            aria-label="Austin, Texas"
            placement="right-end"
            size="sm"
          >
            <Box pos="relative">
              <Avatar
                src=""
                name="Michael Harrison"
                size="xl"
                borderRadius="md"
              />
              <Avatar
                src=""
                name=""
                size="xs"
                borderRadius="full"
                pos="absolute"
                bottom={0}
                right="-12px"
              />
            </Box>
          </Tooltip>
          <Link isExternal href="">
            <Icon as={AiFillGithub} w={6} h={6} />
          </Link>
        </HStack>
        <chakra.h1 fontSize="xl" fontWeight="bold">
          Michael Harrison
        </chakra.h1>
        <Text fontSize="md" color="gray.500">
          Love to play and wreck kids in games.
        </Text>
        <Divider />
        <Text fontSize="md" color="gray.500">
          Games Owned
        </Text>
      </Stack>
    </Container>
  );
};

export default Profile;
