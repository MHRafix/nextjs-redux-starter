import { Button, Card, PinInput, Space, Text } from '@mantine/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useVerifyOtpMutation } from '../../../redux/api/authApi';

const VerifyOtpPage = () => {
	// otp state
	const [otp, setOtp] = useState('');

	const [verifyOTP] = useVerifyOtpMutation();

	const handleVerifyOtp = () => {
		verifyOTP({ otp });
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
					Verify OTP
				</Text>
				<Space h={20} />
				<div className='space-y-4'>
					<div className='flex justify-center items-center'>
						{' '}
						<PinInput
							onChange={setOtp}
							type={/^[0-3]*$/}
							inputType='tel'
							inputMode='numeric'
							length={6}
							size='lg'
							gap={20}
						/>
					</div>

					{/* Reset Button */}
					<Button
						radius={10}
						fullWidth
						size='md'
						onClick={() => handleVerifyOtp()}
						disabled={!otp}
					>
						Verify
					</Button>
				</div>
				{/* Sign In Link */}
				<Text size='sm' className='text-center text-gray-500 mt-6'>
					Go ?{' '}
					<Text
						// size='xs'
						component={Link}
						to={'/auth/forgot-password'}
						className='text-blue-500 cursor-pointer hover:underline'
					>
						Back
					</Text>
				</Text>

				{/* Footer */}
				<Text size='sm' className='text-center text-gray-500 mt-6'>
					All rights reserved © 2025 Rapid Erp
				</Text>
			</Card>
		</div>
	);
};

export default VerifyOtpPage;
