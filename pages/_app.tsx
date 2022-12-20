import "../styles/globals.css";
import type { AppProps } from "next/app";

import TagManager, { TagManagerArgs } from "react-gtm-module";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
	const gtmId = "GTM-WH2XLCN";

	const tagManagerArgs: TagManagerArgs = {
		gtmId,
	};

	useEffect(() => {
		TagManager.initialize(tagManagerArgs);
	}, []);

	return <Component {...pageProps} />;
}
