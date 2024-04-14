import React, { useState, useEffect } from 'react';

function Api() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Logic to get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const handleClick = (event, pageNumber) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };

  // Logic for displaying page numbers
  const renderPageNumbers = Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => {
    if (index < maxPageNumberLimit && index >= minPageNumberLimit) {
      return (
        <li key={index} className={currentPage === index + 1 ? 'active' : ''}>
          <button onClick={(e) => handleClick(e, index + 1)}>{index + 1}</button>
        </li>
      );
    } else {
      return null;
    }
  });

  // Pagination navigation
  const handleNextButton = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevButton = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <div>
      <h1>Product Table</h1>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map(product => (
            <tr key={product.id}>
              <td><img src={product.image} alt={product.title} style={{ width: '100px', height: 'auto' }} /></td>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>{product.category}</td>
              <td>{product.rating.rate} ({product.rating.count} ratings)</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <ul className="pagination">
        <li>
          <button onClick={handlePrevButton} disabled={currentPage === 1}>Prev</button>
        </li>
        {renderPageNumbers}
        <li>
          <button onClick={handleNextButton} disabled={currentPage === Math.ceil(products.length / productsPerPage)}>Next</button>
        </li>
      </ul>
    </div>
  );
}

export default Api;