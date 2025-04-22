Backend concept building and projects.

What is CORS?
- CORS (Cross-Origin Resource Sharing) is a browser security feature that restricts web pages from making requests to a different origin (domain, protocol, or port) than the one that served the page. To enable cross-origin requests, the server must include specific HTTP headers like `Access-Control-Allow-Origin`.

In development, it’s commonly used when the frontend (e.g., React on `localhost:3000`) needs to communicate with a backend (e.g., Express on `localhost:5000`). To fix CORS issues, configure the backend to allow requests from the frontend's origin using a CORS middleware.


What is Proxy?
- A proxy in the backend is a server-side solution used to bypass CORS (Cross-Origin Resource Sharing) issues when making requests to external APIs or services that don’t allow cross-origin requests directly from the frontend.

⚙️ How Does a Proxy Work?
When you use a backend proxy:

The frontend sends the request to your own backend (same-origin, so no CORS issue).

Your backend forwards that request to the external API (server-to-server request, CORS doesn't apply).

The backend receives the response, and then sends it back to the frontend.
