import { Link } from "react-router-dom";

function Header(props){
    return (
      <div style={{margin: '0 auto', width: '100%', fontSize:'5vw'}}>
        <h1>{props.children}</h1>
      </div>
    );
}

function ImgContext(props){
    return(
        <Link to='/board/etc' style={{textDecoration:'none'}}>
            <div style={{display:'flex', alignItems:'center'}}>
                <img className="imgSize" src="/img/park.jpg" style={{display:'inline-block', width:"100px",height:"100px",padding:"10px"}} alt="공원사진"/>
                <div>
                    <br/>
                    <h2>{props.title}</h2>
                    <article style={{fontSize:'18px'}}>
                        {props.content}
                    </article>
                    <article style={{fontSize:'8px', textAlign:'right'}}>
                        <br/>
                        작성자: {props.writer}
                    </article>
                </div>
            </div>
        </Link>
    );
}

function Context(props){
    return(
        <Link to='/board/etc' style={{textDecoration:'none'}}>
            <div>
                <br/>
                    <h2>{props.title}</h2>
                    <article style={{fontSize:'18px'}}>
                        {props.content}
                    </article>
                    <article style={{fontSize:'8px', textAlign:'right'}}>
                        <br/>
                        작성자: {props.writer}
                    </article>
            </div>
        </Link>
    );
}

export default function Community_Board(props) {
    //const params = props.location.state && props.location.state;
    const buttonStyle = {
        padding:'5px 15px',
        borderRadius:'30px',
        backgroundColor:'#000080',
        color: '#ffffff',
        border: 'none',
        cursor: 'pointer',
        fontSize: '20px',
        fontWeight:'bold',
    };  

    return (
        <div>
            <br/>
            <Header>함께 해요 게시판</Header>
            <br/>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <div>
                    <p style={{fontWeight:'bold',display:'inline-block',textAlign:'left',fontSize:'20px',marginRight:'10px'}}>카테고리</p>
                    <p style={{display:'inline-block',fontSize:'20px'}}>기타활동</p>
                </div>
                <button style={buttonStyle}>글쓰기</button>
            </div>
            
            <br/>
            <hr/>

            <div style={{overflowY: 'scroll',height:'400px',border:'1px solid #ccc', padding:"10px"}}>
                <ImgContext title="매주 월요일마다 노래연습..." content="쉼터공원에서 아침 9시에 노래연습 같이..." writer="아이유"/>
                <hr/>
                <Context title="매주 월요일마다 고스톱..." content="쉼터공원에서 아침 9시에 고스톱 같이..." writer="김타짜"/>
                <hr/>
                <ImgContext title="매주 목요일마다 춤연습..." content="쉼터공원에서 아침 9시에 춤연습 같이..." writer="BTS"/>
                <hr/>
                <Context title="매주 월요일마다 수다모임..." content="쉼터공원에서 아침 9시에 수다모임 같이..." writer="유재석"/>
                <hr/>
                <ImgContext title="매주 금요일마다 수영..." content="쉼터공원에서 아침 9시에 수영 같이..." writer="박태환"/>
            </div>
        </div>
    );
}