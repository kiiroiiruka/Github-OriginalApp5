import { Route, Routes } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import Cucumber from "./pages/Cucumber";

function App() {
	return (
		<Routes>
			<Route path="/" element={<LoginScreen />} />
			<Route path="/cucumber" element={<Cucumber />} />
		</Routes>
	);
}
export default App;