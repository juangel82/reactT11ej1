import './Nav.component.scss';
import { Link } from 'react-router-dom';
import { useContext,useState} from 'react';
import Context from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore,faCircleQuestion,faMoon,faSun } from '@fortawesome/free-solid-svg-icons';
export default function Nav() {

 
  const context = useContext(Context);
  const [esDeDia, setDia] = useState(true);

  let texto = esDeDia ?
  (<div>Cambiar a modo nocturno <FontAwesomeIcon icon={faMoon}/></div>) :
  (<div>Cambiar a modo diurno <FontAwesomeIcon icon={faSun}/></div>);

  let loginSalir =() =>{
  context.loginSalir();
  }

  return (
    <Context.Consumer>
    {context => (
    <div className="Nav">
    <div className="bootstrap" style={
   {backgroundColor: esDeDia ? "#ffffff" : "#282c34"}
 }>
    <div className='container'>
      <div className='row'>

        <div className='col'> <FontAwesomeIcon icon={faStore} />  <Link className="Nav-link" to='/store'>Store</Link></div> 
        <div className='col'>  <FontAwesomeIcon icon={faCircleQuestion} />   <Link className="Nav-link" to='/about'>About</Link></div> 
        <div className='col'>   {context.isAdmin?<div><button className="btn btn-warning" onClick={loginSalir}>Salir</button></div>:""} </div> 
        <div className='col'>  <button className="btn btn-primary" onClick={() => setDia(!esDeDia)}>{texto}</button> </div>

      </div>
  </div>
   
    </div>
    </div>
    
    )
    }
    </Context.Consumer>
  );
}