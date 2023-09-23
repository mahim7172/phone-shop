import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <h1 className="text-5xl ">This is error page</h1>
            <button className="btn"><Link to="/">Home</Link></button>
        </div>
    );
};

export default Error;