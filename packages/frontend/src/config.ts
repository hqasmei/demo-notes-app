const config = {
  // Backend config
  // Frontend config
  STRIPE_KEY:
    "pk_test_51MhPR9Dn3bLPK6CMuFOEqQGgoIVeQ9AI1Q1g63JThF24okKKDxC6qAG7Q3iSELozB0sutl7NuuxZNGufsK0Wfoac00Gsj3N6H9",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: import.meta.env.VITE_REGION,
    BUCKET: import.meta.env.VITE_BUCKET,
  },
  apiGateway: {
    REGION: import.meta.env.VITE_REGION,
    URL: import.meta.env.VITE_API_URL,
  },
  cognito: {
    REGION: import.meta.env.VITE_REGION,
    USER_POOL_ID: import.meta.env.VITE_USER_POOL_ID,
    APP_CLIENT_ID: import.meta.env.VITE_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: import.meta.env.VITE_IDENTITY_POOL_ID,
  },
};
export default config;
