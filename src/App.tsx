import Header from "./components/Header";
import SpinWheel from "./components/SpinWheel";
import CrispGallery from "./components/CrispGallery";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Header />
      <SpinWheel />
      <CrispGallery/>
    </div>
  );
}

export default App;
