import { Checkbox, CheckboxGroup, Icon, Stack } from '@chakra-ui/react';
import { useState } from 'react';

export const CheckboxEx1 = (props: any): JSX.Element => {
    return(
        <Checkbox defaultChecked>Checkbox</Checkbox>
    );
}

export const CheckboxEx2 = (props: any): JSX.Element => {
    return(
        <Stack spacing={5} direction='row'>
            <Checkbox isDisabled>Checkbox</Checkbox>
            <Checkbox isDisabled defaultChecked>
                Checkbox
            </Checkbox>
        </Stack>
        
    );
}

export const CheckboxEx3 = (props: any): JSX.Element => {
    return(
        <Stack spacing={5} direction='row'>
            <Checkbox colorScheme='red' defaultChecked>
                Checkbox
            </Checkbox>
            <Checkbox colorScheme='green' defaultChecked>
                Checkbox
            </Checkbox>
        </Stack>
    );
}

export const CheckboxEx4 = (props: any): JSX.Element => {
    return(
        <Stack spacing={[1, 5]} direction={['column', 'row']}>
            <Checkbox size='sm' colorScheme='red'>
                Checkbox
            </Checkbox>
            <Checkbox size='md' colorScheme='green' defaultChecked>
                Checkbox
            </Checkbox>
            <Checkbox size='lg' colorScheme='orange' defaultChecked>
                Checkbox
            </Checkbox>
        </Stack>
    );
}

export const CheckboxEx5 = (props: any): JSX.Element => {
    return(
        <Checkbox isInvalid>Checkbox</Checkbox>
    );
}

export const CheckboxEx6 = (props: any): JSX.Element => {
    return(
        <Checkbox spacing='1rem'>Option</Checkbox>
    );
}

export const CheckboxEx7 = (props: any): JSX.Element => {
    return(
        <Checkbox iconColor='blue.400' iconSize='1rem'>
            Option
        </Checkbox>
    );
}

export const CheckboxEx8 = (props: any): JSX.Element => {
    const [checkedItems, setCheckedItems] = useState([false, false])
  
    const allChecked = checkedItems.every(Boolean)
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked
  
    return (
        <>
            <Checkbox
            isChecked={allChecked}
            isIndeterminate={isIndeterminate}
            onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
            >
            Parent Checkbox
            </Checkbox>
            <Stack pl={6} mt={1} spacing={1}>
            <Checkbox
                isChecked={checkedItems[0]}
                onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
            >
                Child Checkbox 1
            </Checkbox>
            <Checkbox
                isChecked={checkedItems[1]}
                onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
            >
                Child Checkbox 2
            </Checkbox>
            </Stack>
        </>
    )
}

const CustomIcon = (props: any): JSX.Element => {
    const { isIndeterminate, isChecked, ...rest } = props
  
    const d = isIndeterminate
      ? 'M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,19a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,19Zm1.6-6.08a1,1,0,0,0-.6.917,1,1,0,1,1-2,0,3,3,0,0,1,1.8-2.75A2,2,0,1,0,10,9.255a1,1,0,1,1-2,0,4,4,0,1,1,5.6,3.666Z'
      : 'M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z'
  
    return (
      <Icon viewBox='0 0 24 24' {...rest}>
        <path fill='currentColor' d={d} />
      </Icon>
    )
}

export const CheckboxEx9 = (props: any): JSX.Element => {
    return (
        <Checkbox icon={<CustomIcon />} colorScheme='cyan'>
            Hello world
        </Checkbox>
    );
}

export const CheckboxEx10 = (props: any): JSX.Element => {
    return (
        <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
            <Stack spacing={[1, 5]} direction={['column', 'row']}>
                <Checkbox value='naruto'>Naruto</Checkbox>
                <Checkbox value='sasuke'>Sasuke</Checkbox>
                <Checkbox value='kakashi'>Kakashi</Checkbox>
            </Stack>
        </CheckboxGroup>
    );
}