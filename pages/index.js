import { useState } from "react";
import { Button, Container, FormControl, FormErrorMessage, FormLabel, Heading, Input, Textarea } from "@chakra-ui/react";

const initValues = {
  name:"",
  email:"",
  subject:"",
  message:""
}

const initState = {values: initValues}

export default function Home() {

  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const {values, isLoading} = state;

  const onBlur = ({ target }) => setTouched((prev) => ({
    ...prev,
    [target.name]: true
  }))

  const handleChange = ({target}) => setState((prev) => ({
    ...prev,
    values: {
      ...prev.values,
      [target.name]: target.value,
    },
  }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true
    }))
  }

  return( 
    <Container maxW="450px" mt={12}>
      <Heading>Contact</Heading>

      <FormControl isRequired mb={5} isInvalid={touched.name && !values.name}>
        <FormLabel>Name:</FormLabel>
        <Input
          type='text'
          name="name"
          errorBorderColor="red.300"
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
          >
        </Input>
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired mb={5} isInvalid={touched.email &&!values.email}>
        <FormLabel>Email:</FormLabel>
        <Input
          type='email'
          name="email"
          errorBorderColor="red.300"
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
          >
        </Input>
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired mb={5} isInvalid={touched.subject && !values.subject}>
        <FormLabel>Subject:</FormLabel>
        <Input
          type='text'
          name="subject"
          errorBorderColor="red.300"
          value={values.subject}
          onChange={handleChange}
          onBlur={onBlur}
          >
        </Input>
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired mb={5} isInvalid={touched.message && !values.message}>
        <FormLabel>Message:</FormLabel>
        <Textarea
          type='text'
          name="message"
          errorBorderColor="red.300"
          rows={4}
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
          >
        </Textarea>
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <Button
      variant='outline'
      colorScheme='blue'
      isLoading={isLoading}
      disabled={!values.name || !values.email || !values.subject || !values.message}
      onClick={onSubmit}
      >Submit</Button>

    </Container>
    );
}
