import {useEffect} from 'react';
import {useRouter} from 'next/router';

import Layout from '@modules/layout/components/Layout';

import {IS_PRODUCTION} from '@utils/const';
import * as gtag from '@utils/gtag';

import type {AppProps} from 'next/app';

import '@styles/globals.scss';
import Meta from '@modules/common/components/Meta';

function App({Component, pageProps}: AppProps) {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url: URL) => {
			IS_PRODUCTION && gtag.pageview(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Meta isDefault/>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default App;
