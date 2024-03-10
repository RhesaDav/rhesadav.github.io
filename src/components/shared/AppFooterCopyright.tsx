function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<span className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()} RhesaDav&apos;s Portfolio
			</span>
		</div>
	);
}

export default AppFooterCopyright;