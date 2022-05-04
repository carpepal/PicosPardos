import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Services/reducers/ProductsSlice.js';

const Home = () => {

  const { isLoading, products } = useSelector(state => state.products);
  const dispatch = useDispatch();
  const scrollRef = useRef(null);

  console.log(products, isLoading);

  useEffect(() => {

    dispatch(getProducts());

  }, [])

  const handleWheel = (e) => {
    e.preventDefault();
    scrollRef.current.scrollTo({
      top: 0,
      left: scrollRef.current.scrollLeft + e.deltaY,
    })
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className='flex flex-col w-screen h-full'>
      <aside></aside>
      <section className='w-screen max-h-2/6  h-2/6 flex flex-row justify-center py-4 items-center bg-gray-500'>
        <div className='w-1/2 h-full flex justify-center items-center'>
          <h1 className='text-2xl'>Recomendacion del dia</h1>
        </div>
        <div className='w-1/2 h-full flex justify-center items-center'>
          <img src={selectRecomendation(products)?.image} alt="producto recomendado"
            className='max-h-64 object-cover' />
        </div>
      </section>
      <section className='h-1/3'>
        <article className='w-full h-full p-5 m-5 border flex items-center' >
          <div className='flex flex-row justify-start items-center w-full h-full overflow-x-scroll overflow-y-hidden' ref={scrollRef} onWheel={handleWheel}>
            {products.map(product => (
              <div key={product.id} className='w-1/6 h-full mx-3 px-2 my-2 py-2  flex-shrink-0 flex justify-center items-center '>
                <img src={product?.image} alt="producto recomendado" className='object-contain w-full  hover:scale-125 hover:transition-all ' />
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  )
}

function selectRecomendation(products) {
  let random = (Math.random() * 20);
  return products[Math.floor(random)];
}



export default Home