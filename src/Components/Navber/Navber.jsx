import { NavLink } from "react-router-dom";

const Navber = () => {
    return (
        <div className="flex justify-between px-10 py-4 shadow-lg ">
            <div>
                <h1 className="text-3xl font-bold">Phone Shop</h1>
            </div>
            <div>
                <ul className="flex gap-4 text-base font-semibold">
                 <li>
                 <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active " : ""
                        }
                    >
                        Home
                    </NavLink>
                 </li>
                 <li>
                 <NavLink
                        to="/addcart"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                       Add Cart
                    </NavLink>
                 </li>
                 <li>
                 <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active " : " "
                        }
                    >
                       Log in
                    </NavLink>
                 </li>
                </ul>
            </div>

        </div>
    );
};

export default Navber;