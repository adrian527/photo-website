import AboutUs from "./components/about-us/AboutUs";
import Authors from "./components/authors/Authors";
import Container from "./components/container/Container";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainButton from "./components/main-button/MainButton";
import MainImage from "./components/main-image/MainImage";
import Opinions from "./components/opinions/Opinions";

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
      <Opinions />
      <Footer />
    </>
  );
}

export default App;
