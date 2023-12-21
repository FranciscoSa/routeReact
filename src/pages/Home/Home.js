import { Link } from 'react-router-dom'

function Home() {
    return (
      <div>
        <h1>Home</h1> <br/>
        <Link to="/sobre">Sobre</Link> <br/>
        <Link to="/contatos">Contatos</Link>
      </div>
    );
  }
  
export default Home;
  