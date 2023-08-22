import "./App.css";
import ImageSlider from "./ImageSlider";
import flowerImg from "./images/flower.jpg";
import lighthouseImg from "./images/lighthouse.jpg";
import dandelion from "./images/dandelion.jpg";

function App() {
  const images = [
    lighthouseImg,
    flowerImg,
    dandelion,
    lighthouseImg,
    flowerImg,
    dandelion,
    lighthouseImg,
    // Add more image URLs here
  ];
  
  return (
    <div className="App">
      <div style={{padding: "10px"}}>
        <ImageSlider images={images} />
      </div>
    </div>
  );
}

export default App;
