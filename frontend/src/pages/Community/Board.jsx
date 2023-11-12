import { FaUser } from 'react-icons/fa';
import styled from 'styled-components';
import BackButton from '../../components/BackButton';

export default function Board({ activeID, activeCategory }) {
  const samplePost = {
    "_id": "65506f57c0b95944ed14ce7f",
    "created_date": "2023-11-12 15:23:17",
    "title": "오늘 날씨가 좋습니다",
    "contents": "안녕하세요?",
    "user_id": {
      "_id": "655041b295054a4dd38af34e",
      "nickname": "박"
    },
    "category": "baduk",
    "__v": 0,
    "comments": [
      {
        "_id": "655070213719f4e41f707eaf",
        "created_date": "2023-11-12 15:23:27",
        "user_id": {
          "_id": "655037b795054a4dd38af343",
          "nickname": "만"
        },
        "board_id": "65506f57c0b95944ed14ce7f",
        "content": "신입이세요?",
        "__v": 0
      },
      {
        "_id": "655070293719f4e41f707eb1",
        "created_date": "2023-11-12 15:23:27",
        "user_id": {
          "_id": "655037b795054a4dd38af343",
          "nickname": "만"
        },
        "board_id": "65506f57c0b95944ed14ce7f",
        "content": "날씨 좋네요",
        "__v": 0
      }
    ]
  };

  return (
    <div>
      <PostContainer>
        <Title>{samplePost.title}</Title>
        <Content>{samplePost.contents}</Content>
        <UserInfo>
          <UserIcon />
          작성자: {samplePost.user_id.nickname}
        </UserInfo>
        <UserInfo>작성일: {samplePost.created_date}</UserInfo>

        <h3>댓글</h3>
        {samplePost.comments.map(comment => (
          <CommentContainer key={comment._id}>
            <CommentContent>{comment.content}</CommentContent>
            <UserInfo>
              <UserIcon />
              작성자: {comment.user_id.nickname}
            </UserInfo>
            <UserInfo>작성일: {comment.created_date}</UserInfo>
          </CommentContainer>
        ))}
      </PostContainer>
      <BackButton/>
    </div>
  );
}

const PostContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const CommentContainer = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Content = styled.p`
  font-size: 18px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-bottom: 5px;

  svg {
    margin-right: 5px;
  }
`;

const UserIcon = styled(FaUser)`
  font-size: 20px;
`;

const CommentContent = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;