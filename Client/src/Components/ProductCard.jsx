import React from 'react'
import { addProducto , removeProducto , clearLista  } from '../Services/reducers/CarritoSlice'
import { useDispatch , useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const producto = {
  _id:{"$oid":"62619721fc13ae3bb100021b"},
  name:"Crackers - Trio",
  type:[{},{},{}],
  description:"Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
  image:"http://dummyimage.com/233x100.png/cc0000/ffffff",
  price:"5.1"
}

const ProductCard = (props) => {
  const { producto } = props;
  const {lista ,total} = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleAddProducto = ()=>{
    dispatch(addProducto(producto));
  }

  const handleRemoveProducto=()=>{
    dispatch(removeProducto(producto));
  }

  let contador = lista.find(item=>producto._id === item._id)?.cantidad;

  return (
    <div className="w-60 h-72 min-h-max mx-2 my-2  bg-white rounded-lg border border-gray-200 shadow-md hover:scale-110 dark:bg-gray-800">
      <Link to='#'>
        <img className="rounded-t-lg w-full h-1/2" src={producto?.image} alt={producto?.name}/>
      </Link>
      <div className="p-5 h-1/4">
        <Link to='#'>
          <h3 className="text-lg text-ellipsis font-bold text-gray-900 dark:text-gray-100">{producto?.name}</h3>
        </Link>
        <p className="text-gray-700 dark:text-gray-300">{producto?.price}€</p>
      </div>
      <div className="p-5 flex justify-center items-center mb-3">
        <button onClick={handleAddProducto} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">+</button>
        <span className="mx-2">{(contador!==0 && contador!==undefined)?contador:0}</span>
        <button onClick={handleRemoveProducto} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">-</button>
    </div>
    </div>
  )
}

export default ProductCard