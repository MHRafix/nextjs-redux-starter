import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Flow Track 365',
	description: 'Smart Organization Manager',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' data-mantine-color-scheme={'dark'}>
			<body cz-shortcut-listen='true'>
				<main>
					<ColorSchemeScript />
					<MantineProvider withGlobalClasses withCssVariables>
						{children}
					</MantineProvider>
				</main>
			</body>
		</html>
	);
}
