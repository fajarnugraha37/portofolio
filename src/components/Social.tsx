import Icon from '@chakra-ui/icon';
import { HStack } from '@chakra-ui/layout';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

export const Social = (props: any): JSX.Element => {
    return (
        <HStack spacing="24">
            <Icon as={MdMail} boxSize="50" />
            <Icon as={FaGithub} boxSize="50" />
            <Icon as={FaLinkedin} boxSize="50" />
        </HStack>
    );
}