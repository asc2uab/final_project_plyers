const notificationService = {
  getNotifications: async (userId) => {
    // Simulating an API call for notifications
    return [
      { id: 1, message: 'New product added to marketplace!' },
      { id: 2, message: 'Your order has been shipped!' },
      // More notifications...
    ];
  },
};

export default notificationService;
