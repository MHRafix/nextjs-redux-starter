import DashboardPrimaryLayout from '@/components/Dashboard-Layout/DashboardPrimaryLayout';

export default function AdminDashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<main>
				<DashboardPrimaryLayout>{children}</DashboardPrimaryLayout>
			</main>
		</div>
	);
}
