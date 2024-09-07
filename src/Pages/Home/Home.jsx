import Banner from './Banner';
import Categories from './Categories';
import FruitShop from './FruitShop';
import FAQ from './FAQ';
import Footer from './Footer';
import Subcategories from './Subcategories';

const Home = () => {
    return (
        <div>
            <Banner />
            <Subcategories/>
            <Categories/>
            <FruitShop/>
            <FAQ/>
            <Footer/>
        </div>
    );
};

export default Home;