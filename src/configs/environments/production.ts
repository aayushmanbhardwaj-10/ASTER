// Production environment configuration
export default {
  name: 'production',
  apiUrl: process.env.API_URL || 'https://api.example.com',
  features: {
    enableDebugToolbar: false,
    enableMockApi: false,
  },
  // Add more configuration as needed
};
