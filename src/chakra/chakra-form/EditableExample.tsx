import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
    useEditableControls,
    ButtonGroup,
    Flex,
    Input,
    IconButton,
} from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa'
import { MdClose, MdEdit } from 'react-icons/md'

export const EditableEx1 = (props: any): JSX.Element => {
    return (
        // Click the text to edit
        <Editable defaultValue='Take some chakra'>
            <EditablePreview />
            <EditableInput />
        </Editable>
    );
}

export const EditableEx2 = (props: any): JSX.Element => {
    return (
        // Click the text to edit
        <Editable defaultValue='Take some chakra'>
            <EditablePreview />
            <EditableTextarea />
        </Editable>
    );
}

export const EditableEx3 = (props: any): JSX.Element => {
    /* Here's a custom control */
    function EditableControls() {
        const {
            isEditing,
            getSubmitButtonProps,
            getCancelButtonProps,
            getEditButtonProps,
        } = useEditableControls()

        return isEditing ? (
        <ButtonGroup justifyContent='center' size='sm'> 
            <IconButton aria-label={''} icon={<FaCheck />} {...getSubmitButtonProps()} />
            <IconButton aria-label={''} icon={<MdClose />} {...getCancelButtonProps()} />
        </ButtonGroup>
        ) : (
        <Flex justifyContent='center'>
            <IconButton aria-label={''} size='sm' icon={<MdEdit />} {...getEditButtonProps()} />
        </Flex>
        )
    }

    return (
        <Editable
        textAlign='center'
        defaultValue='Rasengan ⚡️'
        fontSize='2xl'
        isPreviewFocusable={false}
        >
            <EditablePreview />
            {/* Here is the custom input */}
            <Input as={EditableInput} />
            <EditableControls />
        </Editable>
    );
}