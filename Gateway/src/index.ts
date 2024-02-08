import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const PORT = process.env.PORT || 5000;

// Proxy middleware configurations for each backend service
const service1Proxy = createProxyMiddleware({
    target: 'http://localhost:3001', // Example backend service 1 URL
    changeOrigin: true,
    pathRewrite: {
        '^/service1': '', // Remove '/service1' prefix when forwarding request
    },
});

const service2Proxy = createProxyMiddleware({
    target: 'http://localhost:3002', // Example backend service 2 URL
    changeOrigin: true,
    pathRewrite: {
        '^/service2': '', // Remove '/service2' prefix when forwarding request
    },
});


const service3Proxy = createProxyMiddleware({
  target: 'http://localhost:3003', // Example backend service 2 URL
  changeOrigin: true,
  pathRewrite: {
      '^/service3': '', // Remove '/service2' prefix when forwarding request
  },
});


// Use the proxy middleware for requests matching '/service1'
app.use('/service1', service1Proxy);

// Use the proxy middleware for requests matching '/service2'
app.use('/service2', service2Proxy);
app.use('/service3', service3Proxy);

// Start the server
app.listen(PORT, () => {
    console.log(`Gateway service running on port ${PORT}`);
});
