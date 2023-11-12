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
                <p style={{display:'inline-block',fontSize:'10px'}}>기타활동</p>
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
        <div>
            <Header>함께 해요 게시판</Header>
            <Title title="매주 월요일에 노래연습 같이 하실 분~^^" writer="아이유" date="2023.11.11" type="기타활동"></Title>
            <hr/>
            <Content content="일단 노력하지 않으면 실력이 쉽게 늘지 않기에, 
            아무리 자신이 음치이고 노래를 못한다 생각되더라도 노래를 하기로 마음먹었으면 될 때까지 연습 벌레처럼 연습하는 습관이 필요하다.
            구체적으로 노래를 정말 많이 들어야 하고, 그를 통해 따라 불러보는 등의 연습을 하면 좋고, 또한 고음을 내기 위한 발성기관의 동작들을 
            이해하고 그에 맞춰 음을 내도록 노력해야 하기도 하며, 호흡량 확보를 위한 동작들도 체득해야 하는 등, 배워야 할 게 많다. 
            그렇기 때문에 이를 모두 가르칠 수 있는 실력있는 보컬트레이너에게 트레이닝 받는 것이 목 건강과 같은 측면에서나 실력 향상에서나 
            가장 이상적일 것이다."/>
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
        </div>

    );
}