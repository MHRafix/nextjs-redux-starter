import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card } from '@mantine/core';
import * as Yup from 'yup';
import Form from '../../../components/form/Form';
import { useResetPasswordMutation } from '../../../redux/api/authApi';
import FormPasswordInput from '../../../components/form/FormPasswordInput';

const ResetPasswordPage = () => {
	const [handleResetPasswordReq] = useResetPasswordMutation();

	const handleResetPassword = async (data) => {
		handleResetPasswordReq({ data });
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

				<Form
					onSubmit={handleResetPassword}
					resolver={yupResolver(Reset_Password_Form_Validation_Schema)}
				>
					<div className='space-y-4'>
						<FormPasswordInput label='New Password' name={'password'} />
						<FormPasswordInput
							label='Confirm Password'
							name={'confirm_password'}
						/>

						{/* Submit Button */}
						<Button radius={10} size='md' fullWidth type='submit'>
							Reset Password
						</Button>
					</div>
				</Form>
			</Card>
		</div>
	);
};

export default ResetPasswordPage;

const Reset_Password_Form_Validation_Schema = Yup.object({
	password: Yup.string().min(8).required().label('Password'),
	confirm_password: Yup.string().required().label('Confirm Password'),
});
