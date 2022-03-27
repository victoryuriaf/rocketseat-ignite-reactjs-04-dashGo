import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex
            align="center"
        >
            <Box
                mr="4"
                textAlign="right"
            >
                <Text>Victor Yuri</Text>
                <Text
                    color="gray.300"
                    fontSize="small"
                >
                    victoryuri.af@gmail.com
                </Text>
            </Box>

            <Avatar
                size="md"
                name="Victor Yuri"
                src="https://avatars.githubusercontent.com/u/61084908?v=4"
            />
        </Flex>
    );
}