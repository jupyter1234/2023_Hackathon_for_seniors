import './Community.css';
import { Link } from 'react-router-dom';


function Title(props){
  return (
    <div style={{margin: '0 auto', width: '90%', fontSize:'5vw', fontWeight:'bold'}}>
      <h2>{props.children}</h2>
    </div>
  );
}

function Content(props){
  return (
    <div style={{margin: '0 auto', width: '70%', fontSize:'2.5vw'}}>
      <h1>{props.children}</h1>
    </div>
  );
}


export default function CommunityPage() {
  return (
    <div>
      <br/>
      <Title>주변 사람들과 함께 </Title>
      <Title> 하고 싶은 취미 생활을 </Title>
      <Title> 골라보세요</Title>
      
      <div className='table-container'>
        <table>
          <tbody>
            <tr>
              <td>
                <Link to={{pathname:'/community/board' ,state:{paramName: '바둑'}}} style={{textDecoration:'none'}}>
                  <div style={{margin: '0 auto', width: '70%'}}>
                    <img className="imgSize" src="/img/go.png" alt="바둑"/>
                    <Content>바둑</Content>
                  </div>
                </Link> 
                
                
              </td>
              <td>
                <Link to={{pathname:'/community/board' ,state:'산책'}} style={{textDecoration:'none'}}>
                  <div style={{margin: '0 auto', width: '70%'}}>
                    <img className="imgSize" src="/img/iris.png" alt='산책'/>
                    <Content>산책</Content>
                  </div>
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link to={{pathname:'/community/board' ,state:'게이트볼'}} style={{textDecoration:'none'}}>
                  <div style={{margin: '0 auto', width: '70%'}}>
                    <img className="imgSize" src="/img/gateball.png" alt='게이트볼'/>
                    <Content>게이트볼</Content>
                  </div>
                </Link>
              </td>
              <td>
                <Link to={{pathname:'/community/board' ,state:'기타활동'}} style={{textDecoration:'none'}}>
                  <div style={{margin: '0 auto', width: '70%'}}>
                    <img className="imgSize" src="/img/people.png" alt='기타활동'/>
                    <Content>기타활동</Content>
                  </div>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}