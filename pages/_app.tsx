import React from 'react';
import { AppProps } from 'next/app';
import { motion } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

import { Layout } from '@components';

import '@styles/globals.css';

const HOTJAR_ID = process.env.NEXT_PUBLIC_HOTJAR_ID;

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Analytics />
    {HOTJAR_ID && (
      <Script id="hotjar" strategy="afterInteractive">
        {`(function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:'${HOTJAR_ID}',hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
      </Script>
    )}
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  </>
);

export default App;
