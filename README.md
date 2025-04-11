Backend concept building and projects.

What is CORS?
- CORS (Cross-Origin Resource Sharing) is a browser security feature that restricts web pages from making requests to a different origin (domain, protocol, or port) than the one that served the page. To enable cross-origin requests, the server must include specific HTTP headers like `Access-Control-Allow-Origin`.

In development, it’s commonly used when the frontend (e.g., React on `localhost:3000`) needs to communicate with a backend (e.g., Express on `localhost:5000`). To fix CORS issues, configure the backend to allow requests from the frontend's origin using a CORS middleware.
