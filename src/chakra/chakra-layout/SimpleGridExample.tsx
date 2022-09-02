import { SimpleGrid, Box } from '@chakra-ui/react';

export const SimpleGridExample1 = (props: any): JSX.Element => {
    return (
        <SimpleGrid columns={2} spacing={10}>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
        </SimpleGrid>
    );
}

export const SimpleGridExample2 = (props: any): JSX.Element => {
    return (
        // Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}`
        // will have the same effect.

        <SimpleGrid columns={[2, null, 3]} spacing='40px'>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
        </SimpleGrid>
    );
}

export const SimpleGridExample3 = (props: any): JSX.Element => {
    return (
        <SimpleGrid minChildWidth='120px' spacing='40px'>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
        </SimpleGrid>
    );
}

export const SimpleGridExample4 = (props: any): JSX.Element => {
    return (
        <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
        </SimpleGrid>
    );
}