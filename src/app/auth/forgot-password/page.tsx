'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, Text, TextInput } from '@mantine/core';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const ForgotPasswordPage = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<ForgotPasswordFormValuesType>({
		resolver: yupResolver(Forgot_Password_Form_Validation_Schema),
	});

	const handleForgotPassword = (data: ForgotPasswordFormValuesType) => {
		// handleForgotPasswordReq({ data });
	};

	return (
		<div className='flex min-h-screen items-center justify-center bg-gray-100 p-4'>
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

				{/* Heading */}
				<Text className='text-center text-xl font-semibold text-blue-500 mb-2'>
					Forgot Password?
				</Text>
				<Text className='text-center text-gray-600 mb-6'>
					Allows you to securely reset your password when you can't recall it.
				</Text>
				<form onSubmit={handleSubmit(handleForgotPassword)}>
					<div className='space-y-4'>
						<TextInput {...register('email')} label='Email' name={'email'} />

						{/* Reset Button */}
						<Button radius={10} fullWidth size='md' type='submit'>
							Send Reset Password OTP
						</Button>
					</div>
				</form>
				{/* Sign In Link */}
				<Text size='sm' className='text-center text-gray-500 mt-6'>
					Recalled your login info?{' '}
					<Text
						// size='xs'
						component={Link}
						href={'/auth/login'}
						className='text-blue-500 cursor-pointer hover:underline'
					>
						Sign In
					</Text>
				</Text>

				{/* Footer */}
				<Text size='sm' className='text-center text-gray-500 mt-6'>
					All rights reserved © 2025 FlowTrack365
				</Text>
			</Card>
		</div>
	);
};

export default ForgotPasswordPage;

const Forgot_Password_Form_Validation_Schema = Yup.object({
	email: Yup.string().email().required().label('Email'),
});

export type ForgotPasswordFormValuesType = Yup.InferType<
	typeof Forgot_Password_Form_Validation_Schema
>;
