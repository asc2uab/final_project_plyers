const reviewService = {
  getReviews: async (productId) => {
    // Simulating an API call for reviews
    return [
      { id: 1, user: 'John Doe', rating: 5, comment: 'Great product!' },
      { id: 2, user: 'Jane Smith', rating: 4, comment: 'Very comfortable.' },
      // More reviews...
    ];
  },
  addReview: async (productId, reviewData) => {
    // Simulating an API call to add a review
    return { id: 3, user: 'New User', rating: 4, comment: 'Good value for money.' };
  },
};

export default reviewService;
