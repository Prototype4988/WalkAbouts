import { SessionProvider } from "next-auth/react";
import '../app/public/styles/global.css'; // Ensure you have a global stylesheet or adjust the path as necessary
import { GeolocationProvider } from '../app/hooks/geolocationcontext';

function MyApp({ Component, pageProps }) {
  console.log("MyApp - Wrapping Component with GeolocationProvider"); //
  return (
    <SessionProvider session={pageProps.session}>
      <GeolocationProvider>
        <Component {...pageProps} />
      </GeolocationProvider>
    </SessionProvider>
  );
}

export default MyApp;
