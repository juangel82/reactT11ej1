import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
const TablaProductos = (props) => {
    
    
    const history = useNavigate();
    let abrirProducto = (id,titulo,precio,descripcion) => {
  
        return {
          pathname: '/product/' + id,
          state: {   //esto nos permite pasar un objeto por la url que recogemos en las props 
            id:id,
            title:titulo,
            price: precio,
            description: descripcion
          }
        }  
      }

      let abrirProducto2 = (id) => {
       
      
        // Nos devuelve un producto con ID entre 1 y 20 (Ambos incluidos).
          history({   //esta mal en las transparencias
            pathname: '/product/' + id,
            state: { 
              id: id,
              vistoEnStore: false,
              enOferta: true
          }
        })
      }

      const toComponentB=(id,name,price,desc)=>{
        history('/product/' + id,{state:{id:1,nombre:name,precio:price,descripcion:desc}});
          }
   // console.log(props.productos);
    return (
    
        <table className="MensajesTable">
          <thead className="Header">
            <tr>
             
              <th>PRODUCTO</th>
              <th>PRECIO</th>
              <th>VER DETALLES</th>
             
             
            </tr>
          </thead>
          <tbody>
      {props.productos.map(((mensaje, index) => 
        (<tr key={index}>
            
           <td>{mensaje.title}</td>
           <td>{mensaje.price}</td>
           <td>   <button className="Product-link" onClick={()=>toComponentB(index,mensaje.title,mensaje.price,mensaje.description)}>
    	Ir al producto
    </button>        
      </td>
         </tr>)
      ))}
    </tbody>
        </table>
      );
}

export default TablaProductos;
