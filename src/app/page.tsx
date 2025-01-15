import { Header } from "@/components/header";
import ImcCalculator from "@/components/imc-calculator";

export default function Home() {
	return (
		<div className="max-w-[900px] min-h-screen mx-auto p-5 md:p-2">
			<Header/>
			<ImcCalculator/>
		</div>
	);
}