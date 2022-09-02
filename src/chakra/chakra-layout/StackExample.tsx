import { Stack, HStack, VStack, Box, StackDivider, Text, Heading } from '@chakra-ui/react';
// VStack: used to stack elements in the vertical direction
// HStack: used to stack elements in the horizontal direction
// Stack: used to stack elements in the vertical or horizontal direction

export const StackExample1 = (props: any): JSX.Element => {
    return(
        <HStack spacing='24px'>
            <Box w='40px' h='40px' bg='yellow.200'>
                1
            </Box>
            <Box w='40px' h='40px' bg='tomato'>
                2
            </Box>
            <Box w='40px' h='40px' bg='pink.100'>
                3
            </Box>
        </HStack>
    );
}

export const StackExample2 = (props: any): JSX.Element => {
    return(
        <Stack direction={['column', 'row']} spacing='24px'>
            <Box w='40px' h='40px' bg='yellow.200'>
                1
            </Box>
            <Box w='40px' h='40px' bg='tomato'>
                2
            </Box>
            <Box w='40px' h='40px' bg='pink.100'>
                3
            </Box>
        </Stack>
    );
}

export const StackExample3 = (props: any): JSX.Element => {
    return(
        <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
            align='stretch'
            >
            <Box h='40px' bg='yellow.200'>
                1
            </Box>
            <Box h='40px' bg='tomato'>
                2
            </Box>
            <Box h='40px' bg='pink.100'>
                3
            </Box>
        </VStack>
    );
}

function Feature({ title, desc, ...rest }: any) {
    return (
      <Box p={5} shadow='md' borderWidth='1px' {...rest}>
        <Heading fontSize='xl'>{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    )
  }

export const StackExample4 = (props: any): JSX.Element => {
    return(
        <Stack spacing={8} direction='row'>
            <Feature
                title='Plan Money'
                desc='The future can be even brighter but a goal without a plan is just a wish'
            />
            <Feature
                title='Save Money'
                desc='You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process'
            />
        </Stack>
    );
}

export const StackExample5 = (props: any): JSX.Element => {
    return(
        <HStack spacing={8}>
            <Feature
            title='Plan Money'
            desc='The future can be even brighter but a goal without a plan is just a wish'
            />
            <Feature
            title='Save Money'
            desc='You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process'
            />
        </HStack>
    );
}

// Notes on Stack vs Flex#
// The Stack component and the Flex component have their children spaced out evenly 
// but the key difference is that the Stack won't span the entire width of the container whereas the Flex will. 
// Another thing to note is that the items in both Stack and Flex are aligned in the center by default.