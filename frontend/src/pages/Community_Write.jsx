import { Link } from "react-router-dom";

function Header(props){
    return (
      <div style={{margin: '0 auto', width: '100%', fontSize:'5vw'}}>
        <h1>{props.children}</h1>
      </div>
    );
}

export default function Community_Write() {
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

    return(
        <div>
            <br/>
                <Header>함께 해요 게시판</Header>
            <br/>
                <div style={{color:'gray',fontWeight:'bold', display:'inline-block'}}>
                    제목을 입력하세요
                </div>
            <hr/>
            <br/>
            <table style={{height:'500px'}}>
                <td>
                    <div style={{color:'gray',fontWeight:'bold', display:'inline-block'}}>
                            내용을 입력하세요
                    </div>
                </td>
            </table>
            <br/>
            <Link to="/community/badook">
                <button style={buttonStyle}>제출</button>
            </Link> 
        </div>
    );
}
