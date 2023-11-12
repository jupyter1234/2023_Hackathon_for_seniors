import { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

export default function LoginPage() {
  const [user_ID, setUserID] = useState('');
  const [password, setPasssword] = useState('');

  const onChangeID = (e) => {
    const {
      target : {value},
    } = e;
    setUserID(value);
  }
  const onChangePW = (e) => {
    const {
      target : {value},
    } = e;
    setPasssword(value);
  }
  async function onSubmit(event) {
    event.preventDefault();
    console.log(user_ID, password);
  
    try {
      const res = await axios.post(`https://port-0-for-seniors-service-7lk2blotylb1l.sel5.cloudtype.app/user/login`, {
        user_ID: user_ID,
        password: password
      });
  
      console.log(res.data); // Access response data, not res.body
    } catch (error) {
      console.error(error.response.data); // Log the error response data
    }
  }
  return (
    <LoginWrapper>
      <LoginForm>
        <h1>Login</h1>
        <div>
          <FormInput placeholder="id를 입력하세요." type="text" onChange={onChangeID} value={user_ID} />
        </div>
        <div>
          <FormInput placeholder="비밀번호를 입력하세요." type="password" onChange={onChangePW} value={password} />
        </div>
        <ButtonContainer>
          <Link to="/signup">
            <SignUpButton >Sign Up</SignUpButton>
          </Link>
          <SubmitButton type="submit" onClick={onSubmit}>Login</SubmitButton>
        </ButtonContainer>
      </LoginForm>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  background: #fff;
  padding: 60px 30px;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const FormInput = styled.input`
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 10px;
  font-size: 20px;
  margin-top: 20px;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const SubmitButton = styled.button`
  width: 100px;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin: 10px 20px;
`;

const SignUpButton = styled.button`
  width: 100px;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  background-color: #ddd;
  border: none;
  border-radius: 4px;
  margin: 10px 20px;
`;