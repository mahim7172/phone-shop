import Product from "../Product/Product";


const Products = ({ phones }) => {
    // console.log(phones)
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-10">All Category Phones</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    phones?.map(phone => <Product key={phone?.id} phone={phone}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;