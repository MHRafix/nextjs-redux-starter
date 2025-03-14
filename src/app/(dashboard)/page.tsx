'use client';

import {
	ActionIcon,
	Box,
	Text,
	useComputedColorScheme,
	useMantineColorScheme,
} from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

export default function Home() {
	const { setColorScheme } = useMantineColorScheme();
	const computedColorScheme = useComputedColorScheme('light', {
		getInitialValueInEffect: true,
	});

	return (
		<Box className='bg-amber-600'>
			<ActionIcon
				onClick={() =>
					setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
				}
				variant='default'
				size='xl'
				aria-label='Toggle color scheme'
			>
				<IconSun stroke={1.5} />
				<IconMoon stroke={1.5} />
			</ActionIcon>

			<Text>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias incidunt
				harum iusto fuga voluptatum maiores, obcaecati voluptatem libero iste ab
				praesentium mollitia ipsam est nisi aliquid fugiat quis, aut dolor.
			</Text>
		</Box>
	);
}
