import { IconButton } from '@chakra-ui/react';
import { FaSearch, FaPhone } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

export const IconButtonEx1 = (props: any): JSX.Element => {
    return (
        <IconButton aria-label='Search database' icon={<FaSearch />} />
    );
}

export const IconButtonEx2 = (props: any): JSX.Element => {
    return (
        <IconButton
            colorScheme='blue'
            aria-label='Search database'
            icon={<FaSearch />}
        />  
    );
}

export const IconButtonEx3 = (props: any): JSX.Element => {
    return (
        <IconButton
            colorScheme='teal'
            aria-label='Call Segun'
            size='lg'
            icon={<FaPhone />}
        />
    );
}

export const IconButtonEx4 = (props: any): JSX.Element => {
    return (
        <IconButton
            variant='outline'
            colorScheme='teal'
            aria-label='Send email'
            icon={<MdEmail />}
        /> 
    );
}

export const IconButtonEx5 = (props: any): JSX.Element => {
    return (
        <IconButton
            variant='outline'
            colorScheme='teal'
            aria-label='Call Sage'
            fontSize='20px'
            icon={<MdPhone />}
        />
    );
}