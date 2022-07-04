import { useParams,useLocation } from 'react-router-dom';
import './Product.page.scss';

export default function Product(props) {
  let { id } = useParams();     //esto se llama id porque en el en app.js hemos puesto <Route path="/product/:id"
                                // pero podemos cambiarlo 
  let vistoEnStore = useParams();
  const location = useLocation();
  const state = location.state;
  console.log(location);

  return (
    <div className="Product">
      <div><strong>NOMBRE:</strong> {state.nombre}</div>
      <div><strong>PRECIO</strong> {state.precio}</div>
      <div><strong>DESCRIPCION:</strong> {state.descripcion}</div>
    </div>
  );
}