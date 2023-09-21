import Categories from "../Categories/Categories";
import Banner from "./Banner/Banner";
import Features from "./Features/Features";


const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
         <Banner></Banner>
         <Categories></Categories>
         <Features></Features>
        </div>
    );
};

export default Home;