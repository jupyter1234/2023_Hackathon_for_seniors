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
                <p style={{display:'inline-block',fontSize:'10px'}}>게이트볼</p>
            </div>
        </div>
    );
}

function Content(props) {
    return(
        <div style={{overflowY: 'scroll',height:'250px', padding:"10px"}}>
            <hr/>
            <br/>
            <article>{props.content}</article>
            <br/>
            <hr/>
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
                <hr/>
            </div>
        </div>
    );
}

export default function Community_Post() {
    return (
        <div>
            <Header>함께 해요 게시판</Header>
            <Title title="매주 월요일에 게이트볼 같이 치실 분~^^" writer="홍길동" date="2023.11.11" type="게이트"></Title>
            <Content content="당구와 미니골프의 요소를 적절히 가져온 듯한 운동. 한자어로는 문구(門球)라고도 한다.
            기원은 15세기경 프랑스에서 하던 '크로케'(croquet)라는 놀이이지만[1] 본격적으로 인기를 얻어 세간에 알려진 건 19세기 영국에서였고, 
            이후 미국과 영연방에 전파되었다. 제2차 세계대전 이후 일본 홋카이도에서 빵집을 운영하던 스즈키 에이지(鈴木栄治)가 이 놀이를 
            게이트볼이란 이름으로 개량하여 보급시켰다. 한국에서는 1980년대에 방한한 일본인 관광객을 통해 보급되었으며,
             1982년 경상북도 경주시 코오롱 호텔 잔디구장에서 첫 경기가 열렸다."/>
            
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
                <Comment writer="포시니어즈" comment="좋습니다~~"></Comment>
                <Comment writer="포시니어즈" comment="좋습니다~~"></Comment>
                <Comment writer="포시니어즈" comment="좋습니다~~"></Comment>
                <Comment writer="포시니어즈" comment="좋습니다~~"></Comment>
            </div>
        </div>

    );
}