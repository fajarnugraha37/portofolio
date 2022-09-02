import { 
    Box, Circle, Flex, Stack, 
    useColorMode, useMediaQuery, 
    Text, Button, Image
} from '@chakra-ui/react';

export const Header = (props: any): JSX.Element => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1" minW="300px" minH="300px" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"} gap="200px" p={isNotSmallerScreen ? "32" : "0"} alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} alignSelf='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">
                        Hi, I am
                    </Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >
                        Fajar Abdi Nugraha
                    </Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>
                        Backend Developer - Php, NodeJS, Java.
                    </Text>
                    <Button mt={8} colorScheme="blue" onClick={() => console.log("Contact me")}>Contact Me</Button>
                </Box>
                <Image 
                    alignSelf="center" 
                    mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} 
                    borderRadius='full'
                    backgroundColor="transparent" 
                    boxShadow="lg"
                    boxSize="300px" 
                    src='https://avatars.githubusercontent.com/u/25928059?v=4' 
                />
            </Flex>
        </Stack>
    );
}