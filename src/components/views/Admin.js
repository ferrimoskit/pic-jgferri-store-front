import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    active: false,
    available: false,
    offer: false,
    price: '',
    picture: ''
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:8080/products', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setFormData(product);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:8080/products/${formData.id}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to update product');

      alert('Product updated successfully!');
      setSelectedProduct(null);

      const refreshedResponse = await fetch('http://localhost:8080/products', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!refreshedResponse.ok) throw new Error('Failed to refresh products');
      const refreshedData = await refreshedResponse.json();
      setProducts(refreshedData);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-lime-600 mb-6">Painel de administrador</h1>

      <h2 className="text-2xl font-semibold mb-4">Todos produtos</h2>
      <ul className="space-y-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="p-4 bg-white shadow rounded-lg flex justify-between items-center"
          >
            <div>
              <p className="text-lg font-semibold">{product.name}</p>
              <p className="text-sm text-gray-600">R${product.price}</p>
            </div>
            <button
              onClick={() => handleEdit(product)}
              className="bg-lime-600 text-white px-4 py-2 rounded hover:bg-lime-500 transition"
            >
              Editar
            </button>
          </li>
        ))}
      </ul>

      {selectedProduct && (
        <div className="mt-8 p-6 bg-white shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Editar Produtos</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Nome:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-lime-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Descrição:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-lime-600"
                required
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="active"
                  checked={formData.active}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Ativo
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="available"
                  checked={formData.available}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Disponível
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="offer"
                  checked={formData.offer}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Em oferta
              </label>
            </div>
            <div>
              <label className="block text-gray-700">Preço:</label>
              <input
                type="number"
                step="0.01"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-lime-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">URL da foto:</label>
              <input
                type="url"
                name="picture"
                value={formData.picture}
                onChange={handleInputChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-lime-600"
                required
              />
            </div>
            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-lime-600 text-white px-4 py-2 rounded hover:bg-lime-500 transition"
              >
                Salvar
              </button>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Admin;
