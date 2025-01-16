import { Header } from "@/components/Header";
import ImcCalculator from "@/components/ImcCalculator";

export default function Home() {
	return (
		<div className="max-w-[900px] min-h-screen mx-auto p-5 md:p-2">
			<Header/>
			<ImcCalculator/>
		</div>
	);
}