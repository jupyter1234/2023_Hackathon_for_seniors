import styled from 'styled-components';
import axios from "axios";
import { useState } from "react";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    nickName: '',
    bdate: '',
    gender: '',
    phonenum: '',
    userId: '',
    pass: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post("http://localhost:3001/register", {
        body: formData,
      });
      console.log("register success", response);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <SignUpWrapper>
      <SignUpForm onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <FormGroup>
          <FormInput
            placeholder='이름을 입력하세요.'
            name="name"
            onChange={handleChange}
            type="text"
            value={formData.name}
          />
        </FormGroup>
        <FormGroup>
          <FormInput
            placeholder='id를 입력하세요.'
            name="userId"
            onChange={handleChange}
            type="text"
            value={formData.userId}
          />
        </FormGroup>
        <FormGroup>
          <FormInput
            placeholder='닉네임을 입력하세요.'
            name="nickName"
            onChange={handleChange}
            type="text"
            value={formData.nickName}
          />
        </FormGroup>
        <FormGroup>
          <FormInput
            placeholder='생년월일을 입력하세요. 19990101'
            name="bdate"
            onChange={handleChange}
            type="text"
            value={formData.bdate}
          />
        </FormGroup>
        <FormGroup>
          <FormInput
            placeholder='성별을 입력하세요. 남, 여'
            name="gender"
            onChange={handleChange}
            type="text"
            value={formData.gender}
          />
        </FormGroup>
        <FormGroup>
          <FormInput
            placeholder='전화번호를 입력하세요.'
            name="phonenum"
            onChange={handleChange}
            type="text"
            value={formData.phonenum}
          />
        </FormGroup>
        <FormGroup>
          <FormInput
            placeholder='비밀번호를 입력하세요.'
            name="pass"
            onChange={handleChange}
            type="password"
            value={formData.pass}
          />
        </FormGroup>
        <SubmitButton type="submit">Sign Up</SubmitButton>
      </SignUpForm>
    </SignUpWrapper>
  );
}

const SignUpWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormInput = styled.input`
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 10px;
  font-size: 16px;
  margin-top: 15px;
  width: 300px;
`;

const SubmitButton = styled.button`
  width: 200px;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin: 30px 20px;
`;
