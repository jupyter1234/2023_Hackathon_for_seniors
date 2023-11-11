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
                <p style={{display:'inline-block',fontSize:'10px'}}>산책</p>
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
            <Title title="매주 월요일에 산책 같이 하실 분~^^" writer="이봉주" date="2023.11.11" type="산"></Title>
            <Content content="야외로 나가 천천히 거니는 일. 인간이 할 수 있는 가장 원초적인 운동 중 하나. 
            너무 오래 실내에만 있으면서 뭔가에 몰두하느라 스트레스를 받거나 할 때 산책을 하면 신체/정신적인 건강을 호전시킬 수 있다. 
            그냥 걷기만 하는 경우도 있지만, 노래를 듣거나 걷는 행위에 집중해보거나 할 수도 있다.
            산책 시간은 3시간 미만이 적당하며, 3시간 이상 산책할 경우 피곤함과 배고픔과 목마름이 쌓여 가볍게 걸어 스트레스를 푸는 것보다 
            오히려 더 쌓일 수 있다.
            산책을 생활화 합시다."/>
            
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