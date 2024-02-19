import "./App.css";
import { HomePage } from "./pages/HomePage";
import Vector from "./assets/vector-bg.png";
import { Menu } from "./components/Menu/Menu";

function App() {
  const MenuTopics = ["Como fazer", "Ofertas", "Depoimentos", 'Vídeos', "Meu carrinho"];
  return (
    <div className="App">
      <Menu topics={MenuTopics} />
      <HomePage />
      <img src={Vector} alt="Vector" className="vector-background" />
    </div>
  );
}

export default App;
