import "styles/globals.css";
import type { AppProps } from "next/app";

import TagManager from "react-gtm-module";
import { useEffect } from "react";

const tagManagerArgs = {
	gtmId: "GTM-WH2XLCN",
};

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		TagManager.initialize(tagManagerArgs);
	}, []);

	return <Component {...pageProps} />;
}
