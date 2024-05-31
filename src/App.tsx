import AboutUs from "./components/about-us/AboutUs";
import Authors from "./components/authors/Authors";
import Container from "./components/container/Container";
import Header from "./components/header/Header";
import MainButton from "./components/main-button/MainButton";
import MainImage from "./components/main-image/MainImage";

function App() {
  return (
    <>
      <Container>
        <Header />
        <MainImage />
        <MainButton />
      </Container>
      <AboutUs />
      <Authors />
    </>
  );
}

export default App;
