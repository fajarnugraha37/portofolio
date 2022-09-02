import { Center, Square, Circle, HStack, Box } from '@chakra-ui/react';
import { BsFillTelephoneFill } from 'react-icons/bs';

export const CenterExample = (props: any): JSX.Element => {
    return (
        <Center bg='tomato' h='100px' color='white'>
            This is the Center
        </Center>
    );
}

export const CenterWithIconExample = (props: any): JSX.Element => {
    return(
        <HStack>
            <Center w='40px' h='40px' bg='tomato' color='white'>
                <BsFillTelephoneFill />
            </Center>
            <Center w='40px' h='40px' bg='tomato' color='white'>
                <Box as='span' fontWeight='bold' fontSize='lg'>
                1
                </Box>
            </Center>
        </HStack>
    );
}

export const CenterSquareAndCircle = (props: any): JSX.Element => {
    return (
        <HStack>
        <Circle size='40px' bg='tomato' color='white'>
            <BsFillTelephoneFill />
        </Circle>
        <Square size='40px' bg='purple.700' color='white'>
            <BsFillTelephoneFill />
        </Square>
        </HStack>
    );
}