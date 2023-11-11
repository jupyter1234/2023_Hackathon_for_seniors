import styled from 'styled-components';

export default function MealSchedule() {
  return (
    <StyledMealSchedule>
      <div className="calweek_table_content">
        <StyledTable className="calweek_tb_content" summary="일정">
          <MealHeader>11월 식단표</MealHeader>
          <colgroup>
            <col width="20%" />
            <col width="20%" />
            <col width="*" />
            <col width="25%" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">요일</th>
              <th scope="col">날짜</th>
              <th scope="col">식단</th>
              <th scope="col">칼로리</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="col">월</th>
              <td scope="col">13일</td>
              <th scope="col">
                옥수수밥<br /> 유부팽이된장국<br /> 카레<br /> 봄동겉절이<br /> 김치
              </th>
              <td scope="col">616kcal</td>
            </tr>
            <tr>
              <th scope="col">화</th>
              <td scope="col">14일</td>
              <th scope="col">
                현미밥<br /> 콩나물국<br /> 돈두루치기<br /> 양배추나물<br /> 김치
              </th>
              <td scope="col">606kcal</td>
            </tr>
            <tr>
              <th scope="col">수</th>
              <td scope="col">15일</td>
              <th scope="col">
                흑미밥<br /> 시락국<br /> 소세지야채볶음<br /> 온두부/양념장<br /> 김치
              </th>
              <td scope="col">636kcal</td>
            </tr>
            <tr>
              <th scope="col">목</th>
              <td scope="col">16일</td>
              <th scope="col">
                보리밥<br /> 알탕<br /> 감자조림<br /> 숙주나물<br /> 김치
              </th>
              <td scope="col">613kcal</td>
            </tr>
            <tr>
              <th scope="col">금</th>
              <td scope="col">17일</td>
              <th scope="col">
                찰밥<br /> 북어미역국<br /> 잡채<br /> 마카로니샐러드<br /> 김치
              </th>
              <td scope="col">651kcal</td>
            </tr>
          </tbody>
        </StyledTable>
        <MobileScrollWrapper>
          <p>※ 급식상황에 따라 조기마감 될수 있습니다.</p>
        </MobileScrollWrapper>
      </div>
    </StyledMealSchedule>
  );
}

const StyledMealSchedule = styled.div`
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 18px;

  th, td {
    border: 1px solid #ddd;
    padding: 15px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const MealHeader = styled.caption`
  font-size: 30px;
  font-weight: bold;
  margin: 10px;
`;

const MobileScrollWrapper = styled.div`
  overflow-x: auto;
  white-space: nowrap;
`;