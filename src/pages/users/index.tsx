import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
    return (
        <Box>
            <Header />

            <Flex
                w="100%"
                my="6"
                maxWidth={1400}
                mx="auto"
                px="6"
            >
                <Sidebar />

                <Box
                    flex="1"
                    borderRadius={8}
                    bg="gray.800"
                    p="8"
                >
                    <Flex
                        mb="8"
                        justify="space-between"
                        align="center"
                    >
                        <Heading
                            size="lg"
                            fontWeight="normal"
                        >
                            Users
                        </Heading>

                        <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="pink"
                            leftIcon={<Icon as={RiAddLine} fontSize="28" />}
                        >
                            Create New
                        </Button>
                    </Flex>

                    <Table
                        colorScheme="whiteAlpha"
                    >
                        <Thead>
                            <Tr>
                                <Th
                                    px="6"
                                    color="gray.300"
                                    width="8"
                                >
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th>
                                    User
                                </Th>
                                <Th>
                                    SignIn Date
                                </Th>
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td
                                    px="6"
                                >
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text
                                            fontWeight="bold"
                                        >
                                            Victor Yuri
                                        </Text>
                                        <Text
                                            fontWeight="sm"
                                            color="gray.300"
                                        >
                                            victoryuri.af@gmail.com
                                        </Text>
                                    </Box>
                                </Td>
                                <Td>
                                    17 de Março, 2022
                                </Td>
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                    >
                                        Edit
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td
                                    px="6"
                                >
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text
                                            fontWeight="bold"
                                        >
                                            Victor Yuri
                                        </Text>
                                        <Text
                                            fontWeight="sm"
                                            color="gray.300"
                                        >
                                            victoryuri.af@gmail.com
                                        </Text>
                                    </Box>
                                </Td>
                                <Td>
                                    17 de Março, 2022
                                </Td>
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                    >
                                        Edit
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td
                                    px="6"
                                >
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text
                                            fontWeight="bold"
                                        >
                                            Victor Yuri
                                        </Text>
                                        <Text
                                            fontWeight="sm"
                                            color="gray.300"
                                        >
                                            victoryuri.af@gmail.com
                                        </Text>
                                    </Box>
                                </Td>
                                <Td>
                                    17 de Março, 2022
                                </Td>
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                    >
                                        Edit
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Box>
    );
}