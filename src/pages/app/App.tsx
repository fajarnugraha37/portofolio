import { Flex, IconButton, Spacer, useColorMode, VStack } from "@chakra-ui/react";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { Social } from "../../components/Social";

export const App = (props: any): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <VStack p={5}>
      <Flex w="100%">
        <IconButton marginX={4} icon={isDark ? <FaSun /> : <FaMoon />} isRound onClick={toggleColorMode} aria-label={""}></IconButton>
        {/* <Heading ml="8" size="md" fontWeight='semibold' color="cyan.400">imthepk</Heading> */}

        <Spacer></Spacer>
        <IconButton marginX={1} icon={<FaLinkedin />} isRound aria-label={""}></IconButton>
        <IconButton marginX={1} icon={<FaInstagram />} isRound aria-label={""}></IconButton>
        <IconButton marginX={1} icon={<FaGithub />} isRound aria-label={""}></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}