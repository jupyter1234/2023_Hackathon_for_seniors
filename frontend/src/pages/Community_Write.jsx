import { Link } from "react-router-dom";
import styled from 'styled-components';
import { useState } from "react";
import BackButton from "../components/BackButton";

export default function Community_Write() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Title:", title);
    console.log("Content:", content);
  };

  return (
    <AllContainer>
      <br />
      <HeaderWrapper>
        <h1>함께 해요 게시판</h1>
      </HeaderWrapper>
      <br />
      <ContentWrapper>
        <input placeholder="제목을 입력하세요" type="text" value={title} onChange={handleTitleChange} />
      </ContentWrapper>
      <hr />
      <ContentWrapper>
        <textarea placeholder="내용을 입력하세요" value={content} onChange={handleContentChange} />
      </ContentWrapper>
      <br />
      <Link to="/community/badook">
        <SubmitButton onClick={handleSubmit}>제출</SubmitButton>
      </Link>
      <br />
      <BackButton/>
    </AllContainer>
  );
}

const AllContainer = styled.div`
    width: 100%;
    height: 95vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

const HeaderWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  font-size: 5vw;
`;

const ContentWrapper = styled.div`
    color: gray;
    font-weight: bold;
    display: inline-block;
    margin: 10px;

    input {
        border-radius: 8px;
        border: 1px solid #ddd;
        padding: 10px;
        font-size: 20px;
        margin-top: 20px;
        width: 100%;

        ::placeholder {
            color: gray;
            font-weight: bold;
        }
    }

    textarea {
        width: 300px;
        height: 300px;
        font-size: 20px;
        border: none;
        border: 1px solid #ddd;
    }
`;

const SubmitButton = styled.button`
    width: 200px;
    padding: 5px 10px;
    border-radius: 30px;
    background-color: #000080;
    color: #ffffff;
    border: none;
    cursor: pointer;
    font-size: 30px;
    font-weight: bold;
`;