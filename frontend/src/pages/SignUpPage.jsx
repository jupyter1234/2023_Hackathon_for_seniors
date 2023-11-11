import { Link } from "react-router-dom";
import styled from 'styled-components';

export default function SignUpPage() {
  return (
    <SignUpWrapper>
      <SignUpForm>
        <h1>Sign Up</h1>
        <FormGroup>
          <FormLabel>Name:</FormLabel>
          <FormInput type="text" />
        </FormGroup>
        <FormGroup>
          <FormLabel>ID:</FormLabel>
          <FormInput type="text" />
        </FormGroup>
        <FormGroup>
          <FormLabel>Password:</FormLabel>
          <FormInput type="password" />
        </FormGroup>
        <Link to="/">
          <SubmitButton type="submit">Sign Up</SubmitButton>
        </Link>
      </SignUpForm>
    </SignUpWrapper>
  );
}

const SignUpWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const SignUpForm = styled.form`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const FormLabel = styled.label`
  font-size: 18px;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  padding: 5px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  background: #0074d9;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
`;