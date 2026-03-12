export const FooterComponent = (): React.ReactElement => {
	const year = new Date().getFullYear();

	return (
		<footer className="border-t border-black">
			<div className="mx-auto max-w-3xl px-4 py-6 sm:px-6">
				<p className="text-sm text-black">© {year} Software Development Blog. All rights reserved.</p>
			</div>
		</footer>
	);
};
