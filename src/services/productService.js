const productService = {
  getProducts: async () => {
    // Simulating an API call
    return [
      { id: 1, name: 'Sofa', description: 'Comfortable sofa', price: 499.99, image: '/assets/images/sofa.jpg' },
      { id: 2, name: 'Chair', description: 'Stylish chair', price: 199.99, image: '/assets/images/chair.jpg' },
      // More products...
    ];
  },
};

export default productService;
