import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    RadioGroup,
    Radio,
    HStack,
    Select,
    NumberInput,
    NumberDecrementStepper,
    NumberInputField,
    NumberIncrementStepper,
    NumberInputStepper,
    Button,
} from '@chakra-ui/react';
import {
    useState,
} from 'react';
import {
    Field,
    Form,
    Formik
} from 'formik';

export const FormControlEx1 = (props: any): JSX.Element => {
    return (
        <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
            <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
    );
}

export const FormControlEx2 = (props: any): JSX.Element => {
    return (
        <FormControl as='fieldset'>
            <FormLabel as='legend'>Favorite Naruto Character</FormLabel>
            <RadioGroup defaultValue='Itachi'>
                <HStack spacing='24px'>
                    <Radio value='Sasuke'>Sasuke</Radio>
                    <Radio value='Nagato'>Nagato</Radio>
                    <Radio value='Itachi'>Itachi</Radio>
                    <Radio value='Sage of the six Paths'>Sage of the six Paths</Radio>
                </HStack>
            </RadioGroup>
            <FormHelperText>Select only if you're a fan.</FormHelperText>
        </FormControl>
    );
}

export const FormControlEx3 = (props: any): JSX.Element => {
    const [input, setInput] = useState('')
  
    const handleInputChange = (e: any) => setInput(e.target.value)
  
    const isError = input === ''
  
    return (
        <FormControl isInvalid={isError}>
            <FormLabel>Email</FormLabel>
            <Input
                type='email'
                value={input}
                onChange={handleInputChange}
            />
            {!isError 
                ? (
                    <FormHelperText>
                        Enter the email you'd like to receive the newsletter on.
                    </FormHelperText>
                ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                )
            }
        </FormControl>
    )
}

export const FormControlEx4 = (props: any): JSX.Element => {
    return (
        <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Input placeholder='First name' />
        </FormControl>
    );
}

export const FormControlEx5 = (props: any): JSX.Element => {
    return (
        <FormControl>
            <FormLabel>Country</FormLabel>
            <Select placeholder='Select country'>
                <option>United Arab Emirates</option>
                <option>Nigeria</option>
            </Select>
        </FormControl>
    );
}

export const FormControlEx6 = (props: any): JSX.Element => {
    return (
        <FormControl>
            <FormLabel>Amount</FormLabel>
            <NumberInput max={50} min={10}>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </FormControl>
    );
}

export const FormControlEx7 = (props: any): JSX.Element => {
    function validateName(value: string): string | undefined  {
      let error
      if (!value) {
        error = 'Name is required'
      } else if (value.toLowerCase() !== 'naruto') {
        error = "Jeez! You're not a fan 😱"
      }
      return error
    }
  
    return (
      <Formik
        initialValues={{ name: 'Sasuke' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {(props) => (
          <Form>
            <Field name='name' validate={validateName}>
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>First name</FormLabel>
                  <Input {...field} placeholder='name' />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme='teal'
              isLoading={props.isSubmitting}
              type='submit'
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    )
}