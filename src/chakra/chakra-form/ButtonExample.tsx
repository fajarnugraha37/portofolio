import { Button, ButtonGroup, Stack, Box, Wrap, WrapItem, HStack, IconButton } from '@chakra-ui/react';
import { MdEmail, MdBuild, MdCall, MdAdd } from 'react-icons/md';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import BeatLoader from "react-spinners/BeatLoader";

export const ButtonEx1 = (props: any): JSX.Element => {
    return(
        <Button colorScheme='blue'>Button</Button>
    );
}

export const ButtonEx2 = (props: any): JSX.Element => {
    return(
        <Stack spacing={4} direction='row' align='center'>
            <Button colorScheme='teal' size='xs'>
                Button
            </Button>
            <Button colorScheme='teal' size='sm'>
                Button
            </Button>
            <Button colorScheme='teal' size='md'>
                Button
            </Button>
            <Button colorScheme='teal' size='lg'>
                Button
            </Button>
        </Stack>
    );
}

export const ButtonEx3 = (props: any): JSX.Element => {
    return(
        <Stack direction='row' spacing={4} align='center'>
            <Button colorScheme='teal' variant='solid'>
                Button
            </Button>
            <Button colorScheme='teal' variant='outline'>
                Button
            </Button>
            <Button colorScheme='teal' variant='ghost'>
                Button
            </Button>
            <Button colorScheme='teal' variant='link'>
                Button
            </Button>
        </Stack>
    );
}

export const ButtonEx4 = (props: any): JSX.Element => {
    return(
    <Stack direction='column'>
        <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            width='100%'
            py={12}
            bgImage="url('https://bit.ly/2Z4KKcF')"
            bgPosition='center'
            bgRepeat='no-repeat'
            mb={2}
        >
            <ButtonGroup gap='4'>
                <Button colorScheme='whiteAlpha'>WhiteAlpha</Button>
                <Button colorScheme='blackAlpha'>BlackAlpha</Button>
            </ButtonGroup>
        </Box>

        <Wrap spacing={4}>
            <WrapItem>
                <Button colorScheme='gray'>Gray</Button>
            </WrapItem>
            <WrapItem>
                <Button colorScheme='red'>Red</Button>
            </WrapItem>
            <WrapItem>
                <Button colorScheme='orange'>Orange</Button>
            </WrapItem>
            <WrapItem>
                <Button colorScheme='yellow'>Yellow</Button>
            </WrapItem>
            <WrapItem>
                <Button colorScheme='green'>Green</Button>
            </WrapItem>
            <WrapItem>
                <Button colorScheme='teal'>Teal</Button>
            </WrapItem>
            <WrapItem>
                <Button colorScheme='blue'>Blue</Button>
            </WrapItem>
            <WrapItem>
                <Button colorScheme='cyan'>Cyan</Button>
            </WrapItem>
            <WrapItem>
                <Button colorScheme='purple'>Purple</Button>
            </WrapItem>
            <WrapItem>
                <Button colorScheme='pink'>Pink</Button>
            </WrapItem>
            <WrapItem>
                <Button colorScheme='linkedin'>Linkedin</Button>
            </WrapItem>
            <WrapItem>
                <Button colorScheme='facebook'>Facebook</Button>
            </WrapItem>
            <WrapItem>
                <Button colorScheme='messenger'>Messenger</Button>
            </WrapItem>
            <WrapItem>
                <Button colorScheme='whatsapp'>Whatsapp</Button>
            </WrapItem>
            <WrapItem>
                <Button colorScheme='twitter'>Twitter</Button>
            </WrapItem>
            <WrapItem>
                <Button colorScheme='telegram'>Telegram</Button>
            </WrapItem>
        </Wrap>
    </Stack>
    );
}

export const ButtonEx5 = (props: any): JSX.Element => {
    return(
        <Stack direction='row' spacing={4}>
            <Button leftIcon={<MdEmail />} colorScheme='teal' variant='solid'>
                Email
            </Button>
            <Button rightIcon={<AiOutlineArrowRight />} colorScheme='teal' variant='outline'>
                Call us
            </Button>
        </Stack>
    );
}

export const ButtonEx6 = (props: any): JSX.Element => {
    return(// import { MdBuild , MdCall } from "react-icons/md"
        <Stack direction='row' spacing={4}>
            <Button leftIcon={<MdBuild />} colorScheme='pink' variant='solid'>
                Settings
            </Button>
            <Button rightIcon={<MdCall />} colorScheme='blue' variant='outline'>
                Call us
            </Button>
        </Stack>
    );
}

export const ButtonEx7 = (props: any): JSX.Element => {
    return(
        <Stack direction='row' spacing={4}>
            <Button isLoading colorScheme='teal' variant='solid'>
                Email
            </Button>
            <Button
                isLoading
                loadingText='Submitting'
                colorScheme='teal'
                variant='outline'
            >
                Submit
            </Button>
        </Stack>
    );
}

export const ButtonEx8 = (props: any): JSX.Element => {
    return (
        <Button
            isLoading
            colorScheme='blue'
            spinner={<BeatLoader size={8} color='white' />}
        >
            Click me
        </Button>
    );
}

export const ButtonEx9 = (props: any): JSX.Element => {
    return (
        <Stack direction='row' spacing={4} align='center'>
            <Button
                isLoading
                loadingText='Loading'
                colorScheme='teal'
                variant='outline'
                spinnerPlacement='start'
            >
                Submit
            </Button>
            <Button
                isLoading
                loadingText='Loading'
                colorScheme='teal'
                variant='outline'
                spinnerPlacement='end'
            >
                Continue
            </Button>
        </Stack>
    );
}

export const ButtonEx10 = (props: any): JSX.Element => {
    return (
        <HStack>
            <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
                Facebook
            </Button>
            <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
                Twitter
            </Button>
        </HStack>
    );
}

export const ButtonEx11 = (props: any): JSX.Element => {
    return (
        <ButtonGroup variant='outline' spacing='6'>
            <Button colorScheme='blue'>Save</Button>
            <Button>Cancel</Button>
        </ButtonGroup>
    );
}

export const ButtonEx12 = (props: any): JSX.Element => {
    return (
        <ButtonGroup size='sm' isAttached variant='outline'>
            <Button>Save</Button>
            <IconButton aria-label='Add to friends' icon={<MdAdd />} />
        </ButtonGroup>
    );
}

export const ButtonEx13 = (props: any): JSX.Element => {
    return (
        // The size prop affects the height of the button
        // It can still be overridden by passing a custom height
        <Button
        size='md'
        height='48px'
        width='200px'
        border='2px'
        borderColor='green.500'
        >
            Button
        </Button>
    );
}

export const ButtonEx14 = (props: any): JSX.Element => {
    return (
        // Button from facebook.com
        <Box
            as='button'
            height='24px'
            lineHeight='1.2'
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            border='1px'
            px='8px'
            borderRadius='2px'
            fontSize='14px'
            fontWeight='semibold'
            bg='#f5f6f7'
            borderColor='#ccd0d5'
            color='#4b4f56'
            _hover={{ bg: '#ebedf0' }}
            _active={{
                bg: '#dddfe2',
                transform: 'scale(0.98)',
                borderColor: '#bec3c9',
            }}
            _focus={{
                boxShadow:
                '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
            }}
        >
            Join Group
        </Box>
    );
}