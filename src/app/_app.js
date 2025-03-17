// File: pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'; // Jika ada file CSS global

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;