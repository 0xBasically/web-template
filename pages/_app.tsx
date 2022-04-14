import	React, {ReactElement}				from	'react';
import	Head								from	'next/head';
import	Link								from	'next/link';
import	{AppProps}							from	'next/app';
import	{DefaultSeo}						from	'next-seo';
import	{WithYearn}							from	'@majorfi/web-lib';
import	{Header, Navbar}					from	'@majorfi/web-lib/layouts';
import	{usePrices, useBalances}			from	'@majorfi/web-lib/contexts';
import	{format}							from	'@majorfi/web-lib/utils';
import	{AlertError, Hamburger}				from	'@majorfi/web-lib/icons';
import	Footer								from	'components/StandardFooter';
import	IconYearn							from	'components/icons/IconYearn';
import	IconVault							from	'components/icons/IconVault';
import	IconHealthcheck						from	'components/icons/IconHealthcheck';

import	'../style.css';

const		YFI_ADDRESS = '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e';
function	AppHead(): ReactElement {
	return (
		<>
			<Head>
				<title>{process.env.WEBSITE_NAME}</title>
				<meta httpEquiv={'X-UA-Compatible'} content={'IE=edge'} />
				<meta name={'viewport'} content={'width=device-width, initial-scale=1'} />
				<meta name={'description'} content={process.env.WEBSITE_NAME} />
				<meta name={'msapplication-TileColor'} content={'#62688F'} />
				<meta name={'theme-color'} content={'#ffffff'} />
				<meta charSet={'utf-8'} />

				<link rel={'shortcut icon'} type={'image/x-icon'} href={'/favicons/favicon.ico'} />
				<link rel={'apple-touch-icon'} sizes={'180x180'} href={'/favicons/apple-touch-icon.png'} />
				<link rel={'icon'} type={'image/png'} sizes={'32x32'} href={'/favicons/favicon-32x32.png'} />
				<link rel={'icon'} type={'image/png'} sizes={'16x16'} href={'/favicons/favicon-16x16.png'} />
				<link rel={'icon'} type={'image/png'} sizes={'192x192'} href={'/favicons/android-chrome-192x192.png'} />
				<link rel={'icon'} type={'image/png'} sizes={'512x512'} href={'/favicons/android-chrome-512x512.png'} />

				<meta name={'robots'} content={'index,nofollow'} />
				<meta name={'googlebot'} content={'index,nofollow'} />
				<meta charSet={'utf-8'} />

				<script src={'/feedback.source.js'} defer />
				<script src={'/feedback.js'} defer />
				<script src={'/prism.js'} />
			</Head>
			<DefaultSeo
				title={process.env.WEBSITE_NAME}
				defaultTitle={process.env.WEBSITE_NAME}
				description={process.env.WEBSITE_DESCRIPTION}
				openGraph={{
					type: 'website',
					locale: 'en_US',
					url: process.env.WEBSITE_URI,
					site_name: process.env.WEBSITE_NAME,
					title: process.env.WEBSITE_NAME,
					description: process.env.WEBSITE_DESCRIPTION,
					images: [
						{
							url: `${process.env.WEBSITE_URI}og.png`,
							width: 1200,
							height: 675,
							alt: 'Yearn'
						}
					]
				}}
				twitter={{
					handle: '@iearnfinance',
					site: '@iearnfinance',
					cardType: 'summary_large_image'
				}} />
		</>
	);
}

function	AppWrapper(props: AppProps): ReactElement {
	const	[shouldDisplayPrice, set_shouldDisplayPrice] = React.useState(true);
	const	{Component, pageProps, router} = props;
	const	{prices} = usePrices();
	const	{balancesOf} = useBalances();

	const	navbarMenuOptions = [
		{
			route: '/',
			values: ['/'],
			label: 'Home',
			icon: <IconVault  />
		},
		{
			route: '/doc',
			values: ['/doc'],
			label: 'Components',
			icon: <IconHealthcheck />,
			options: [
				{
					route: '/doc/components/cards',
					values: ['/doc/components/cards'],
					label: 'Cards'
				},
				{
					route: '/doc/components/cards-tabs',
					values: ['/doc/components/cards-tabs'],
					label: 'Cards.Tabs'
				},
				{
					route: '/doc/components/cards-details',
					values: ['/doc/components/cards-details'],
					label: 'Cards.Detail'
				},
				{
					route: '/doc/components/statistic-card',
					values: ['/doc/components/statistic-card'],
					label: 'StatisticCard'
				},
				{
					route: '/doc/components/description-list',
					values: ['/doc/components/description-list'],
					label: 'DescriptionList'
				},
				{
					route: '/doc/components/alert-banner',
					values: ['/doc/components/alert-banner'],
					label: 'AlertBanner'
				},
				{
					route: '/doc/components/alert-box',
					values: ['/doc/components/alert-box'],
					label: 'AlertBox'
				},
				{
					route: '/doc/components/search-box',
					values: ['/doc/components/search-box'],
					label: 'SearchBox'
				},
				{
					route: '/doc/components/button',
					values: ['/doc/components/button'],
					label: 'Button'
				},
				{
					route: '/doc/components/dropdown',
					values: ['/doc/components/dropdown'],
					label: 'Dropdown'
				},
				{
					route: '/doc/components/switch',
					values: ['/doc/components/switch'],
					label: 'Switch'
				},
				{
					route: '/doc/components/switch-theme',
					values: ['/doc/components/switch-theme'],
					label: 'Switch theme'
				},
				{
					route: '/doc/components/address-with-actions',
					values: ['/doc/components/address-with-actions'],
					label: 'AddressWithActions'
				},
				{
					route: '/doc/components/txhash-with-actions',
					values: ['/doc/components/txhash-with-actions'],
					label: 'TxHashWithActions'
				},
				{
					route: '/doc/components/modal',
					values: ['/doc/components/modal'],
					label: 'Modal'
				},
				{
					route: '/doc/components/modal-login',
					values: ['/doc/components/modal-login'],
					label: 'Modal Login'
				}
			]
		},
		{
			route: '/doc/icons',
			values: ['/doc/icons'],
			label: 'Icons',
			icon: <AlertError />
		},
		{
			route: '/doc/layouts',
			values: ['/doc/layouts'],
			label: 'Layouts',
			icon: <Hamburger />,
			options: [
				{
					route: '/doc/layouts/header',
					values: ['/doc/layouts/header'],
					label: 'Header'
				}
			]
		}
	];

	function	onChangeRoute(selected: string): void {
		router.push(selected);
	}

	return (
		<>
			<AppHead />
			<div id={'app'} className={'grid flex-col grid-cols-12 gap-x-4 mx-auto mb-0 max-w-6xl md:flex-row'}>
				<div className={'sticky top-0 z-50 col-span-12 h-auto md:relative md:col-span-2'}>
					<div className={'flex flex-col justify-between h-full'}>
						<Navbar
							selected={router.pathname}
							set_selected={onChangeRoute}
							logo={<IconYearn className={'w-full h-12 text-primary'} />}
							title={'yWeb'}
							options={navbarMenuOptions}
							wrapper={<Link passHref href={''} />}>
							<div className={'flex flex-col mt-auto space-y-2'}>
								{
									process.env.USE_FEEDBACKS ? (
										<button data-feedbackfin-button className={'button-light'}>
											{'Feedback'}
										</button>
									) : null
								}
							</div>
						</Navbar>
					</div>
				</div>
				<div className={'flex flex-col col-span-12 px-4 w-full min-h-[100vh] md:col-span-10'}>
					<Header>
						<div className={'justify-between pr-4 w-full flex-row-center'}>
							<h1>{process.env.WEBSITE_TITLE}</h1>
							<div className={'hidden flex-row items-center space-x-6 md:flex'}>
								<div
									className={'cursor-pointer'}
									onClick={(): void => set_shouldDisplayPrice(!shouldDisplayPrice)}>
									{shouldDisplayPrice ? (
										<p className={'text-typo-primary-variant'}>
											{`YFI $ ${format.amount(prices?.['yearn-finance']?.usd || 0, 2)}`}
										</p>
									) : (
										<p className={'text-typo-primary-variant'}>
											{`Balance: ${format.amount(balancesOf?.[YFI_ADDRESS] || 0, 6)} YFI`}
										</p>
									)}
								</div>
							</div>
						</div>
					</Header>
					<Component
						key={router.route}
						router={props.router}
						{...pageProps} />
					<Footer />
				</div>
			</div>
		</>
	);
}

function	MyApp(props: AppProps): ReactElement {
	const	{Component, pageProps} = props;
	
	return (
		<WithYearn>
			<AppWrapper
				Component={Component}
				pageProps={pageProps}
				router={props.router} />
		</WithYearn>
	);
}

export default MyApp;
