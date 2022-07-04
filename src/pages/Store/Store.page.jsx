
import { Link,useNavigate } from 'react-router-dom';
import { useState ,useContext,useEffect} from 'react';
import './Store.page.scss';
import {GET} from '../../services/http.service';
import axios from 'axios';
import TablaProductos from '../../components/TablaProductos';
import Context from '../../context';



export default function Store() {
  const history = useNavigate();
 // const [datos, setDatos] = useState([]);
  const context = useContext(Context);
  
  useEffect(() => {
      
  axios.get("https://fakestoreapi.com/products").then((res)=>
    context.addProducts(res.data));
},[]);

let abrirProducto = (product) => {
  history.push({
    pathname: '/product/' + product.id,
    state: {
    	product: product
    }
  })
}
const toComponentB=(id,name,price,desc)=>{
  history('/product/' + id,{state:{id:1,nombre:name,precio:price,descripcion:desc}});
    }
 return (
  <Context.Consumer>
  {context => (
    <div className="Store">
      <h1>Bienvenido a mi tienda</h1>

      <div style={{display: 'flex', width: '100%'}}>
        {context.products.map((product,index) => {
          return (
            <div className='card'>         
              <img width="100" src={product['image']} className='card-img-top' alt="producto"></img>
              <p className='card-title'>{product['title']}</p>
              <button onClick={()=>toComponentB(index,product.title,product.price,product.description)} className="btn btn-secondary">detalles</button>
            
            </div>
          )
        })}
      </div>
    </div>
  )}
</Context.Consumer>
  );
}



