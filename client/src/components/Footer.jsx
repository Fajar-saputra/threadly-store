import { Link, NavLink } from "react-router";
import { assets } from "../assets/frontend_assets/assets";

export default function Footer() {
    return (
        <div>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                <div>
                    <img className="w-32 mb-5 " src={assets.logo} alt="brand logo" />
                    <p className="w-full md:w-2/3 text-gray-600">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>

                <div>
                    <p className="text-2xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>

                        <li>
                            <NavLink to={"/about"}> About</NavLink>
                        </li>
                        <li>
                            <NavLink> Delivery</NavLink>
                        </li>
                        <li>
                            <NavLink> Privacy policy</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="text-2xl font-medium mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>+62-1234-456-7890</li>
                        <li>threadly store</li>
                    </ul>
                </div>
            </div>

            <div>
                <hr />
                <p className="py-4 text-sm text-center text-gray-400">Copyright 2024 © GreatStack.dev - All Right Reserved.</p>
            </div>
        </div>
    );
}
