'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import {
	Button,
	Card,
	Checkbox,
	PasswordInput,
	Text,
	TextInput,
} from '@mantine/core';
import { NextPage } from 'next';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const LoginPage: NextPage = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<LoginFormValuesType>({
		resolver: yupResolver(Login_Form_Validation_Schema),
	});

	const handleLogin = async (data: LoginFormValuesType) => {
		// login({ data });
		console.log(data);
	};
	return (
		<div className='flex min-h-screen items-center justify-center p-4'>
			<Card
				shadow='sm'
				padding='lg'
				radius='md'
				className='w-full max-w-md bg-white'
			>
				{/* Logo */}
				<div className='flex justify-center mb-6'>
					<img src='/vite.svg' alt='Company Logo' className='h-24' />
				</div>

				<form onSubmit={handleSubmit(handleLogin)}>
					<div className='space-y-4'>
						<TextInput {...register('email')} label='Email' name={'email'} />
						<PasswordInput
							{...register('password')}
							label='Password'
							name={'password'}
						/>

						<div className='flex items-center justify-between'>
							<Checkbox label='Remember Me' />
							<Text
								size='sm'
								className='text-blue-500 cursor-pointer hover:underline'
								component={Link}
								href={'/auth/forgot-password'}
							>
								Forgot Password?
							</Text>
						</div>

						{/* Login Button */}
						<Button radius={10} size='md' fullWidth type='submit'>
							Login
						</Button>
					</div>
				</form>
				{/* Footer */}
				<Text size='sm' className='text-center text-gray-500 mt-6'>
					All rights reserved © 2025 FlowTrack365
				</Text>
			</Card>
		</div>
	);
};

export default LoginPage;

const Login_Form_Validation_Schema = Yup.object({
	email: Yup.string().email().required().label('Email'),
	password: Yup.string().min(8).required().label('Password'),
});

export type LoginFormValuesType = Yup.InferType<
	typeof Login_Form_Validation_Schema
>;
