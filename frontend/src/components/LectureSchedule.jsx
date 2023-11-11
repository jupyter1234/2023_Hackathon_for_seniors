import "../components/LectureSchedule.css";
import styled from 'styled-components';

export default function LectureSchedule() {
  return (
    <div className="table_blue01" id="ovbox_01" style={{ width: "100%", overflowY: "hidden", overflowX: "auto" }}>
      <table style={{ minWidth: "850px", width: "100%" }}>
        <LectureHeader>복지관</LectureHeader>
        <colgroup>
          <col width="*" />
          <col width="*" />
          <col width="*" />
          <col width="*" />
          <col width="*" />
          <col width="*" />
          <col width="*" />
        </colgroup>
        <thead>
          <tr>
            <th>장소</th>
            <th>시간</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th rowSpan="8">
              강당
            </th>
            <td>09:00-10:00</td>
            <td rowSpan="2">국악</td>
            <td></td>
            <td rowSpan="2">건강체조&amp;댄스 (09:30~10:20)</td>
            <td rowSpan="2">건강체조&amp;댄스 (09:30~10:20)</td>
            <td rowSpan="2"></td>
          </tr>
          <tr>
            <td>10:00-11:00</td>
            <td>생활체조</td>
          </tr>
          <tr>
            <td>11:00-12:00</td>
            <td>생활체조</td>
            <td>댄스기초</td>
            <td>댄스스포츠</td>
            <td>댄스스포츠</td>
            <td>댄스기초</td>
          </tr>
          <tr>
            <td>12:00-13:00</td>
            <td colSpan="5"></td>
          </tr>
          <tr>
            <td>13:00-14:00</td>
            <td>가요교실</td>
            <td>가요교실</td>
            <td>가요교실</td>
            <td rowSpan="2">사물놀이</td>
            <td></td>
          </tr>
          <tr>
            <td>14:00-15:00</td>
            <td>라인댄스</td>
            <td>라인댄스</td>
            <td>사교댄스</td>
            <td>사교댄스</td>
          </tr>
          <tr>
            <td>15:00-16:00</td>
            <td rowSpan="2" >
              난타
            </td>
            <td>파티댄스</td>
            <td></td>
            <td></td>
            <td>파티댄스</td>
          </tr>
          <tr>
            <td >16:00-17:00</td>
            <td >줌바댄스</td>
            <td ></td>
            <td ></td>
            <td >줌바댄스</td>
          </tr>
          <tr>
            <th rowSpan="6">
              평생교육실2
            </th>
            <td>10:00-11:00</td>
            <td rowSpan="2">하모니카(중급)</td>
            <td rowSpan="2">스마트폰중급</td>
            <td rowSpan="2">하모니카(초급)</td>
            <td rowSpan="2">고금소총</td>
            <td rowSpan="2">기타연주</td>
          </tr>
          <tr>
            <td>11:00-12:00</td>
          </tr>
          <tr>
            <td>13:00-14:00</td>
            <td>일어(초급)</td>
            <td>영어(초급)</td>
            <td>영어(초급)</td>
            <td>일어(초급)</td>
            <td>처음배우는중국어</td>
          </tr>
          <tr>
            <td>14:00-15:00</td>
            <td>일어(중급)</td>
            <td>영어(중급)</td>
            <td>영어(중급)</td>
            <td>일어(중급)</td>
            <td>실용중국어</td>
          </tr>
          <tr>
            <td>15:00-16:00</td>
            <td rowSpan="2" >
              기타연주고급
            </td>
            <td rowSpan="2" >
              가곡
            </td>
            <td rowSpan="2" >
              스마트폰초급
            </td>
            <td rowSpan="2" >
              스마트폰고급
            </td>
            <td rowSpan="2" >
              성악
            </td>
          </tr>
          <tr>
            <td >16:00-17:00</td>
          </tr>
          <tr>
            <th rowSpan="5">
              평생교육실3
            </th>
            <td>10:00-11:00</td>
            <td rowSpan="2">하모니카(예술대학)</td>
            <td></td>
            <td rowSpan="2">문화재 바로알기</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>11:00-12:00</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>13:00-14:00</td>
            <td></td>
            <td rowSpan="3" >
              한글반
            </td>
            <td></td>
            <td></td>
            <td rowSpan="3" >
              한글반
            </td>
          </tr>
          <tr>
            <td>14:00-15:00</td>
            <td>명심보감</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td >15:00-16:00</td>
            <td >명심보감</td>
            <td ></td>
            <td ></td>
          </tr>
          <tr>
            <th rowSpan="6">
              취미실
            </th>
            <td>10:00-11:00</td>
            <td>단전호흡1</td>
            <td></td>
            <td>단전호흡1</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>11:00-12:00</td>
            <td>요가1</td>
            <td></td>
            <td>요가1</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>13:00-14:00</td>
            <td>요가2</td>
            <td>단전호흡2</td>
            <td>요가2</td>
            <td>단전호흡2</td>
            <td></td>
          </tr>
          <tr>
            <td>14:00-15:00</td>
            <td>생활요가1</td>
            <td>생활요가2</td>
            <td>생활요가1</td>
            <td>힐링요가</td>
            <td>한국무용</td>
          </tr>
          <tr>
            <td>15:00-16:00</td>
            <td></td>
            <td></td>
            <td>우리춤체조</td>
            <td></td>
            <td>우리춤체조</td>
          </tr>
          <tr>
            <td >16:00-17:00</td>
            <td ></td>
            <td ></td>
            <td >한국무용</td>
            <td ></td>
            <td >한국무용</td>
          </tr>
          <tr>
            <th rowSpan="4">
              컴퓨터실
            </th>
            <td>10:00-11:00</td>
            <td rowSpan="2">컴퓨터초보1</td>
            <td rowSpan="2">컴퓨터초보2</td>
            <td rowSpan="2">컴퓨터정보활용</td>
            <td></td>
            <td rowSpan="2">컴퓨터문서작성</td>
          </tr>
          <tr>
            <td>11:00-12:00</td>
            <td></td>
          </tr>
          <tr>
            <td>13:00-14:00</td>
            <td rowSpan="2" >
              인터넷활용1
            </td>
            <td rowSpan="2" >
              인터넷활용2
            </td>
            <td rowSpan="2" >
              사진꾸미기1
            </td>
            <td></td>
            <td rowSpan="2" >
              사진꾸미기2
            </td>
          </tr>
          <tr>
            <td >14:00-15:00</td>
            <td ></td>
          </tr>
        </tbody>
      </table>
      <div className="tablewrapover" id="ovdiv_01" style={{ display: "none" }}>
        &nbsp;
      </div>
    </div>
  );
}

const LectureHeader = styled.caption`
  font-size: 30px;
  font-weight: bold;
  margin: 10px;
`;