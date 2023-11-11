import { useState } from "react";
import { useRecoilValue } from "recoil";
import { ProgramLocation, ProgramInfo } from "../store/Info";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function RegisterPage() {
  const navigate = useNavigate();
  const location = useRecoilValue(ProgramLocation);
  const programInfo = useRecoilValue(ProgramInfo);
  const [userInput, setUserInputs] = useState({
    userName: "",
    phoneNumber: "",
    agreement: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the user's information (e.g., send to a server)
    console.log("User Inputs:", userInput);
    // Reset the form after submission
    setUserInputs({
      userName: "",
      phoneNumber: "",
      agreement: false,
    });
    alert("신청이 완료되었습니다.");
    navigate("/");
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setUserInputs((prevInputs) => ({
      ...prevInputs,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <RegisterPageContainer>
      <h1>프로그램 신청</h1>
      <ProgramInfoSection>
        <h2>프로그램 정보</h2>
        <div><strong>{programInfo.name}</strong>: {programInfo.description}</div>
      </ProgramInfoSection>
      <LocationInfo>
        <h2>장소 정보</h2>
        <div>{location}</div>
      </LocationInfo>
      <FormContainer onSubmit={handleSubmit}>
        <FormItem>
          <DataInput
            type="text"
            id="userName"
            name="userName"
            value={userInput.userName}
            onChange={handleInputChange}
            placeholder="이름을 입력하세요."
            required
          />
        </FormItem>
        <FormItem>
          <DataInput
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={userInput.phoneNumber}
            onChange={handleInputChange}
            pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" // Customize the pattern as needed
            placeholder="전화 번호를 입력하세요."
            required
          />
        </FormItem>
        <FormItemLast>
          <label>
            <CheckBox
              type="checkbox"
              name="agreement"
              checked={userInput.agreement}
              onChange={handleInputChange}
            />
            개인 정보 수집 및 이용에 동의합니다.
          </label>
        </FormItemLast>
        <FormButtons>
          <CancelButton type="button" onClick={() => navigate("/programs")}>
            취소
          </CancelButton>
          <SubmitButton type="submit">신청</SubmitButton>
        </FormButtons>
      </FormContainer>
    </RegisterPageContainer>
  );
}

const RegisterPageContainer = styled.div`
  margin: 10px;
  width: 95%;
  height: 88vh;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);

  border-radius: 8px;
  background-color: #fff;
  padding: 10px;
`;

const ProgramInfoSection = styled.div`
  position: relative;
  width: 100%;
  margin: 15px 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding-top: 2px;

  h2 {
    font-size: 20px;
    margin: 10px;
    align-text: center;
  }

  div {
    font-size: 18px;
    margin-bottom: 5px;
    background-color: #eee;
    padding: 10px;
  }
`;

const LocationInfo = styled.div`
  width: 100%;
  margin-bottom: 30px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding-top: 2px;

  h2 {
    font-size: 20px;
    margin: 10px;
    align-text: center;
  }

  div {
    font-size: 18px;
    margin-bottom: 5px;
    background-color: #eee;
    padding: 10px;
  }
`;

const DataInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormItem = styled.div`
  margin-bottom: 15px;

  label {
    font-size: 20px;
    margin-bottom: 5px;
  }

  input {
    padding: 12px;
    font-size: 14px;
  }

  ::placeholder {
    font-size: 18px;
  }
`;

const FormItemLast = styled.div`
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  label {
    font-size: 20px;
    margin-bottom: 5px;
  }

  input {
    padding: 12px;
    font-size: 14px;
  }

  ::placeholder {
    font-size: 18px;
  }
`;

const CheckBox = styled.input`
  position: relative;
  top: 4px;
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const FormButtons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const CancelButton = styled.button`
  width: 100px;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  background-color: #ddd;
  border: none;
  border-radius: 4px;
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
`;
