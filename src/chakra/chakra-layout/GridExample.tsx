import { Grid, GridItem } from '@chakra-ui/react';

export const GridExample1 = (props: any): JSX.Element => {
    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
        </Grid>
    );
}

export const GridExample2 = (props: any): JSX.Element => {
    return (
        <Grid
            h='200px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}
        >
            <GridItem rowSpan={2} colSpan={1} bg='tomato' />
            <GridItem colSpan={2} bg='papayawhip' />
            <GridItem colSpan={2} bg='papayawhip' />
            <GridItem colSpan={4} bg='tomato' />
        </Grid>
    );
} 

export const GridExample3 = (props: any): JSX.Element => {
    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={4}>
            <GridItem colSpan={2} h='10' bg='tomato' />
            <GridItem colStart={4} colEnd={6} h='10' bg='papayawhip' />
        </Grid>
    );
}

export const GridExample4 = (props: any): JSX.Element => {
    return (
        <Grid
            templateAreas={`"header header"
                            "nav main"
                            "nav footer"`}
            gridTemplateRows={'50px 1fr 30px'}
            gridTemplateColumns={'150px 1fr'}
            h='200px'
            gap='1'
            color='blackAlpha.700'
            fontWeight='bold'
        >
            <GridItem pl='2' bg='orange.300' area={'header'}>
                Header
            </GridItem>
            <GridItem pl='2' bg='pink.300' area={'nav'}>
                Nav
            </GridItem>
            <GridItem pl='2' bg='green.300' area={'main'}>
                Main
            </GridItem>
            <GridItem pl='2' bg='blue.300' area={'footer'}>
                Footer
            </GridItem>
        </Grid>
    );
}