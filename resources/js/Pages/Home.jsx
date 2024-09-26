import Content from "../Components/Content";
import Facabook from "../Components/Facebook";
import Google from "../Components/Google";
import Hero from "../Components/Hero";
import News from "../Components/News";
import Guest from "../Layouts/guest";

 function Home() {
    return <>
        <Hero />
        <News />
        <Google />
        <Facabook />
        <Content />
    </>
}

Home.layout = page => <Guest>{page}</Guest> ;

export default Home;