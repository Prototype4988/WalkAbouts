import { SessionProvider } from "next-auth/react";
import '../app/public/styles/global.css'; // Ensure you have a global stylesheet or adjust the path as necessary

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
