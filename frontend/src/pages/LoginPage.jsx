import { Link } from "react-router-dom";
import styled from 'styled-components';

export default function LoginPage() {
  return (
    <LoginWrapper>
      <LoginForm>
        <h1>Login</h1>
        <div>
          <FormLabel>id:</FormLabel>
          <FormInput type="text" />
        </div>
        <div>
          <FormLabel>Password:</FormLabel>
          <FormInput type="password" />
        </div>
        <ButtonContainer>
          <Link to="/signup">
            <SignUpButton >Sign Up</SignUpButton>
          </Link>
          <SubmitButton type="submit">Login</SubmitButton>
        </ButtonContainer>
      </LoginForm>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const FormLabel = styled.label`
  font-size: 18px;
  margin-right: 10px;
`;

const FormInput = styled.input`
  padding: 5px;
  font-size: 16px;
  margin-bottom: 10px;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const SubmitButton = styled.button`
  background: #0074d9;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
`;

const SignUpButton = styled.button`
  background: #0074d9;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
`;