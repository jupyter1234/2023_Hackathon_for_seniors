import BackButton from 'c:/Users/qldkr/2023_Hackathon_for_seniors/frontend/src/components/BackButton.jsx';

function Header(props){
    return (
      <div style={{margin: '0 auto', width: '100%', fontSize:'5vw'}}>
        <h1>{props.children}</h1>
      </div>
    );
}

function Title(props){
    return (
        <div style={{display:'flex', alignItems:'center'}}>
            <img src="/img/profile.png" style={{width:"80px",height:"80px",padding:"10px"}} alt="프로필"/>
            <br/>
            <div>
                <h3>{props.title}</h3>
                <article style={{fontSize:'13px'}}>{props.writer}</article>
                <div style={{display:'inline-block'}}>
                    <article style={{fontSize:'13px'}}>{props.date}</article>
                </div>
            </div>
            <div>
                <p style={{fontWeight:'bold',display:'inline-block',textAlign:'left',fontSize:'10px',marginRight:'10px'}}>카테고리</p>
                <p style={{display:'inline-block',fontSize:'10px'}}>바둑</p>
            </div>
        </div>
    );
}

function Content(props) {
    return(
        <div style={{overflowY: 'scroll',height:'250px', padding:"10px"}}>
            <br/>
            <article>{props.content}</article>
            <br/>
        </div>
    );
}

function Comment(props){
    return(
        <div>
            <div>
                <hr/>
                <div style={{display:'flex', alignItems:'center'}}>
                    <img src="/img/profile.png" style={{width:"50px",height:"50px",padding:"10px"}} alt="프로필"/>
                    <div>
                        <div style={{fontWeight:'bold'}}>{props.writer}</div>
                        {props.comment}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Community_Post() {
    return (
        <BoardContainer>
            <Header>함께 해요 게시판</Header>
            <Title title="매주 월요일에 바둑 같이 두실 분~^^" writer="이세돌" date="2023.11.11" type="바둑"></Title>
            <hr/>
            <Content content="바둑은 두 사람이 흑백의 바둑돌을 나누어 가지고 바둑판 위에 번갈아 하나씩 두어 가며 승부를 겨루는 보드 게임이다.
            가로세로 19줄[4], 361개 교차점에 돌로 에워싼 빈 공간을 만드는 것을 목표로 한다. 이 빈 공간을 바둑 용어로 '집'이라고 한다. 
            바둑의 승리 조건은 단 하나, 상대방보다 더 집을 많이 만드는 것이다. 돌을 많이 따는 게임이 아니다.
             맞수끼리 두는 호선(互先)에서는 먼저 두는 흑의 유리함을 상쇄시킬 목적으로 덤 규칙에 의해 흑을 
             잡은 사람이 상대방보다 7집(한국/일본), 8집(중화권) 이상 더 만들어야 이긴다.[5] 
             반면에 실력 차이가 나는 사람끼리는 하수가 흑을 잡고 흑돌 몇 점을 미리 깔고 두는 방식인 접바둑을 할 수 있다.
              손으로도 대화를 나눌 수 있다고 하여 '수담(手談)'이라는 별칭이 있다.
              저 바둑 잘 둡니다."/>
            <hr/>
            <h2>댓글</h2>
            <table style={{ borderCollapse: 'collapse', width: '100%', height:'10px'}}>
                <td>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/img/profile.png" style={{width:"70px",height:"70px",padding:"10px", display:'flex', alignItems:'center'}} alt="프로필"/>
                        <div style={{color:'gray',fontWeight:'bold', display:'inline-block'}}>
                            댓글을 입력하세요.
                        </div>
                    </div>
                </td>
            </table>
            <div style={{overflowY: 'scroll',height:'100%', padding:"10px"}}>
                <Comment writer="포시니어즈" comment="좋습니다~~"></Comment>
                <Comment writer="포시니어즈" comment="좋습니다~~"></Comment>
                <Comment writer="포시니어즈" comment="좋습니다~~"></Comment>
                <Comment writer="포시니어즈" comment="좋습니다~~"></Comment>
            </div>
            <BackButton/>
        </BoardContainer>

    );
}

const BoardContainer = styled.div`
  display: flex;
  height: 95vh;
  flex-direction: column;
  margin-top: 20px;
`;