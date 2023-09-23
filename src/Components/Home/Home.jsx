import { useLoaderData } from "react-router-dom";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";



const Home = () => {
    const phones =useLoaderData()
    
    return (
        <div>
            <div className="h-[70vh] bg-slate-300">
                <Banner></Banner>
            </div>
            
             <div>
             <Products  phones={phones}></Products>
             </div>
              
           
            
        </div>
    );
};

export default Home;