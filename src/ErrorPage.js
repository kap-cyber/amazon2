import  styled  from 'styled-components';
import {Button} from './styles/Button';
import { NavLink } from 'react-router-dom';

function ErrorPage() {
  return (
    <Wrapper>
     <div className="container">
      <div>
        <h2>404</h2>
        <h3>UH OH! You're lost</h3>
        <p>The Page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the HomePage.
       </p>
       <NavLink to='/'><Button>Go Back to Home</Button></NavLink>
      </div>
     </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
.container {
  padding: 10rem 0;
  text-align:center;

  h2 {
    font-size:10rem;
  }
  h3 {
    font-size:4.2rem;
  }
  p {
    margin:2rem 0;
  }
}

`;

export default ErrorPage
