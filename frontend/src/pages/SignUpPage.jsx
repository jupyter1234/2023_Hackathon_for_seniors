import styled from 'styled-components';
import axios from "axios";
import { useState } from "react";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    nickname: "",
    bdate: "12/31/1888",
    gender: "",
    phone_number: "010-1111-1123",
    user_ID: "",
    password: ""
});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post("https://port-0-for-seniors-service-7lk2blotylb1l.sel5.cloudtype.app/user/register", formData);
      console.log(response);
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
            name="user_ID"
            onChange={handleChange}
            type="text"
            value={formData.user_ID}
          />
        </FormGroup>
        <FormGroup>
          <FormInput
            placeholder='닉네임을 입력하세요.'
            name="nickname"
            onChange={handleChange}
            type="text"
            value={formData.nickname}
          />
        </FormGroup>
        <FormGroup>
          <FormInput
            placeholder='생년월일을 입력하세요. 12/31/1888'
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
            value={formData.phone_number}
          />
        </FormGroup>
        <FormGroup>
          <FormInput
            placeholder='비밀번호를 입력하세요.'
            name="password"
            onChange={handleChange}
            type="password"
            value={formData.password}
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
