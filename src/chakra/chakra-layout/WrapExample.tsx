import { Wrap, WrapItem, Center } from '@chakra-ui/react'

export const WrapEx1 = (props: any): JSX.Element => { 
    return(
        <Wrap>
            <WrapItem>
                <Center w='180px' h='80px' bg='red.200'>
                Box 1
                </Center>
            </WrapItem>
            <WrapItem>
                <Center w='180px' h='80px' bg='green.200'>
                Box 2
                </Center>
            </WrapItem>
            <WrapItem>
                <Center w='180px' h='80px' bg='tomato'>
                Box 3
                </Center>
            </WrapItem>
            <WrapItem>
                <Center w='180px' h='80px' bg='blue.200'>
                Box 4
                </Center>
            </WrapItem>
        </Wrap>
    );
}

export const WrapEx2 = (props: any): JSX.Element => { 
    return(
        <Wrap spacing='30px'>
            <WrapItem>
                <Center w='180px' h='80px' bg='red.200'>
                Box 1
                </Center>
            </WrapItem>
            <WrapItem>
                <Center w='180px' h='80px' bg='green.200'>
                Box 2
                </Center>
            </WrapItem>
            <WrapItem>
                <Center w='180px' h='80px' bg='tomato'>
                Box 3
                </Center>
            </WrapItem>
            <WrapItem>
                <Center w='180px' h='80px' bg='blue.200'>
                Box 4
                </Center>
            </WrapItem>
            <WrapItem>
                <Center w='180px' h='80px' bg='blackAlpha.500'>
                Box 5
                </Center>
            </WrapItem>
        </Wrap>
    );
}

export const WrapEx3 = (props: any): JSX.Element => { 
    return(
        <Wrap spacing='30px' align='center'>
            <WrapItem>
            <Center w='180px' h='80px' bg='red.200'>
                Box 1
            </Center>
            </WrapItem>
            <WrapItem>
            <Center w='180px' h='40px' bg='green.200'>
                Box 2
            </Center>
            </WrapItem>
            <WrapItem>
            <Center w='120px' h='80px' bg='tomato'>
                Box 3
            </Center>
            </WrapItem>
            <WrapItem>
            <Center w='180px' h='40px' bg='blue.200'>
                Box 4
            </Center>
            </WrapItem>
            <WrapItem>
            <Center w='180px' h='80px' bg='blackAlpha.500'>
                Box 5
            </Center>
            </WrapItem>
        </Wrap>  
    );
}

export const WrapEx4 = (props: any): JSX.Element => { 
    return(
        <Wrap spacing='30px' justify='center'>
            <WrapItem>
                <Center w='180px' h='80px' bg='red.200'>
                Box 1
                </Center>
            </WrapItem>
            <WrapItem>
                <Center w='180px' h='80px' bg='green.200'>
                Box 2
                </Center>
            </WrapItem>
            <WrapItem>
                <Center w='120px' h='80px' bg='tomato'>
                Box 3
                </Center>
            </WrapItem>
            <WrapItem>
                <Center w='180px' h='80px' bg='blue.200'>
                Box 4
                </Center>
            </WrapItem>
            <WrapItem>
                <Center w='180px' h='80px' bg='blackAlpha.500'>
                Box 5
                </Center>
            </WrapItem>
        </Wrap>
    );
}