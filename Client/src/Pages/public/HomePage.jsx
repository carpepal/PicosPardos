import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../Components/Pagination.jsx';
import ProductCard from '../../Components/ProductCard.jsx';
import { getProducts } from '../../Services/reducers/ProductsSlice.js';

const Home = () => {

  const { isLoading, products } = useSelector(state => state.products);
  const dispatch = useDispatch();
  const [currentPage , setCurrentPage] = useState(1);
  const pageSize = 10;

  const currentDataTable = useMemo(() => {
    const firstPage = (currentPage - 1) * pageSize;
    const lastPage = firstPage + pageSize;
    return products.slice(firstPage, lastPage);
  }, [currentPage ,products]);

  console.log(products, isLoading);

  useEffect(() => {

    dispatch(getProducts());

  }, [])

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
      <section className='h-1/3 w-screen flex justify-center items-center p-3'>
        <article className='w-11/12 h-full p-5 m-5  flex flex-wrap items-center ' >
          <ProductCard producto={selectRecomendation(products)} />
          {currentDataTable.map((product, index) => {
            return <ProductCard key={index} producto={product} />
            })}
          <Pagination
          className='w-full'
          currentPage={currentPage}
          totalCount={products.length}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}/>
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