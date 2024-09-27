import Content from "../Components/Content";
import Facabook from "../Components/Facebook";
import Footer from "../Components/Footer";
import Google from "../Components/Google";
import Hero from "../Components/Hero";
import Kontak from "../Components/Kontak";
import News from "../Components/News";
import Pesanan from "../Components/Pesanan";
import Guest from "../Layouts/Guest";

 function Home() {
    return <>
        <Hero />
        <News />
        <Google />
        <Facabook />
        <Content />
        <Pesanan />
        <Kontak />
        <Footer />
    </>
}

Home.layout = page => <Guest>{page}</Guest> ;

export default Home;