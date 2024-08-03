const couponService = {
  getCoupons: async (userId) => {
    // Simulating an API call for coupons
    return [
      { id: 1, code: 'SAVE10', discount: 10 },
      { id: 2, code: 'FREESHIP', discount: 0, freeShipping: true },
      // More coupons...
    ];
  },
};

export default couponService;
