'use client';

import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, Input, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const RegistrationPage = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<RegistrationFormValuesType>({
		resolver: yupResolver(Registration_Form_Validation_Schema),
	});

	const handleRegistration = async (data: RegistrationFormValuesType) => {
		console.log({ data });
	};

	return (
		<div className='flex min-h-screen items-center justify-center bg-gray-100 p-4'>
			<Card
				shadow='sm'
				padding='lg'
				radius='md'
				className='w-full md:w-5/12 bg-white'
			>
				{/* Logo */}
				<div className='flex justify-center mb-6'>
					<img src='/vite.svg' alt='Company Logo' className='h-24' />
				</div>
				<form onSubmit={handleSubmit(handleRegistration)}>
					<div className='space-y-4'>
						<Input.Wrapper
							size='md'
							error={<ErrorMessage name='username' errors={errors} />}
						>
							<TextInput
								error={errors?.username ? true : false}
								{...register('username')}
								label='Name'
							/>
						</Input.Wrapper>

						<Input.Wrapper
							size='md'
							error={<ErrorMessage name='email' errors={errors} />}
						>
							<TextInput {...register('email')} label='Email' name={'email'} />
						</Input.Wrapper>

						<Input.Wrapper
							size='md'
							error={<ErrorMessage name='phone' errors={errors} />}
						>
							<TextInput {...register('phone')} label='Phone' name={'phone'} />
						</Input.Wrapper>

						<Input.Wrapper
							size='md'
							error={<ErrorMessage name='password' errors={errors} />}
						>
							<PasswordInput {...register('password')} label='Password' />
						</Input.Wrapper>

						<Input.Wrapper
							size='md'
							error={<ErrorMessage name='confirm_password' errors={errors} />}
						>
							<PasswordInput
								{...register('confirm_password')}
								label='Confirm password'
							/>
						</Input.Wrapper>

						{/* Login Button */}
						<Button radius={10} size='md' fullWidth type='submit'>
							Get Started
						</Button>
					</div>
				</form>
			</Card>
		</div>
	);
};

export default RegistrationPage;

const Registration_Form_Validation_Schema = Yup.object({
	username: Yup.string().required().label('Username'),
	email: Yup.string().email().required().label('Email'),
	password: Yup.string().min(8).required().label('Password'),
	confirm_password: Yup.string()
		.required('Please retype your password.')
		.oneOf([Yup.ref('password')], 'Your passwords do not match.'),
	phone: Yup.string().min(11).required().label('Phone'),
});

export type RegistrationFormValuesType = Yup.InferType<
	typeof Registration_Form_Validation_Schema
>;
