import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

export const metadata = {
	
	title:'Thw Wild Oasis'	
}


export default function RootLayout({ children }) {

	return (
		<html lang="en">
			<body>
				
				<header>					
					<Logo />
					<Navigation />					
				</header>
				
				<main>
					{children}
				</main>
				
				<footer>copyright 2025 &copy;	</footer>
			</body>

		</html>
	)
}