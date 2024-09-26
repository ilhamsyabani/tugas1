import Facabook from "../Components/Facebook";
import Google from "../Components/Google";
import Hero from "../Components/Hero";
import News from "../Components/News";
import Seo from "../Components/SEO";
import Guest from "../Layouts/guest";

 function Home() {
    return <>
        <Hero />
        <News />
        <Google />
        <Facabook />
        <Seo />
    </>
}

Home.layout = page => <Guest>{page}</Guest> ;

export default Home;