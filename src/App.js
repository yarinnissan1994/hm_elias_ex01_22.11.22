import "./App.css";
import { HeaderComponent } from "./components";

let mainImage =
  "https://media.sketchfab.com/models/ffb798fdd2674e6fa17d812b78708064/thumbnails/c3282f5e669c4c5b839f1e1357039883/blob.jpeg";
let mainTitle = "Lorem ipsum dolor sit";
let mainSecondTitle = "Lorem ipsum dolor sit amet, consectetur adipisicing";
let mainDescription =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturiautem, laboriosam minima a error necessitatibus similique quae, accusamus, facere deserunt officia tempore ab eum maiores!";

function App() {
  return (
    <div className="App">
      <HeaderComponent
        mainImg={mainImage}
        mainTtl={mainTitle}
        mainTtl2={mainSecondTitle}
        mainDct={mainDescription}
      ></HeaderComponent>
    </div>
  );
}

export default App;
