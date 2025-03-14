import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, Text } from '@mantine/core';
import * as Yup from 'yup';
import Form from '../../../components/form/Form';
import FormInput from '../../../components/form/FormInput';
import FormPasswordInput from '../../../components/form/FormPasswordInput';

const RegistrationPage = () => {
	const handleRegistration = async (data) => {
		console.log({ data });
	};

	return (
		<div className='flex min-h-screen items-center justify-center bg-gray-100 p-4'>
			<Card
				shadow='sm'
				padding='lg'
				radius='md'
				className='w-full max-w-xl bg-white'
			>
				{/* Logo */}
				<div className='flex justify-center mb-6'>
					<img src='/vite.svg' alt='Company Logo' className='h-24' />
				</div>

				<Form
					onSubmit={handleRegistration}
					resolver={yupResolver(Registration_Form_Validation_Schema)}
				>
					<div className='space-y-4'>
						<FormInput label='Username' name={'username'} />
						<FormInput label='Email' name={'email'} />
						<FormInput label='Phone' name={'phone'} />
						<FormPasswordInput label='Password' name={'password'} />
						<FormPasswordInput
							label='Confirm Password'
							name={'confirm_password'}
						/>

						{/* Registration Button */}
						<Button radius={10} size='md' fullWidth type='submit'>
							Registration
						</Button>
					</div>
				</Form>
				{/* Footer */}
				<Text size='sm' className='text-center text-gray-500 mt-6'>
					All rights reserved © 2025 Rapid ERP
				</Text>
			</Card>
		</div>
	);
};

export default RegistrationPage;

const Registration_Form_Validation_Schema = Yup.object({
	username: Yup.string().required().label('Username'),
	email: Yup.string().email().required().label('Email'),
	password: Yup.string().min(8).required().label('Password'),
	confirm_password: Yup.string().min(8).required().label('Confirm Password'),
	phone: Yup.string().min(8).required().label('Phone'),
});
