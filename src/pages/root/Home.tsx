
import {useState} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import Car3 from "../../assets/images/Audi_A6.png";
import Background_RR from "../../assets/images/Background_RR.jpg";
import Blog_1 from "../../assets/images/blog1.png";
import Blog_2 from "../../assets/images/blog2.png";
import Blog_3 from "../../assets/images/blog3.png";
import Car5 from "../../assets/images/BMW_3.jpg";
import Car4 from "../../assets/images/Corolla2023.png";
import Car1 from "../../assets/images/Ford_2023.png";
import Car2 from "../../assets/images/Ford_Transit_2021.png";
import HomeBackGround from "../../assets/images/HomeBackGround.jpg";
import LogoAudi from "../../assets/images/logoAudi.png";
import LogoBMW from "../../assets/images/logoBmw.png";
import LogoFord from "../../assets/images/logoFord.jpg";
import LogoMer from "../../assets/images/logoMer.png";
import LogoPeugeot from "../../assets/images/LogoPeugeot.png";
import LogoVolkswagen from "../../assets/images/logoVolkswagen.png";
import AddToCartIcon from "../../Components/Icons/AddToCartIcon";
import FuelIcon from "../../Components/Icons/FuelIcon";
import JampIcon from "../../Components/Icons/JampIcon";
import ManualIcon from "../../Components/Icons/ManualIcon";
import MilesIcon from "../../Components/Icons/MilesIcon";
import ViewAll from "../../Components/Icons/ViewAll";
import ViewMoreIcon from "../../Components/Icons/ViewMoreIcon";
import {Vehicle} from "../../types/type";
import {addToCart} from "../../services/cartService";

function Home() {
    const vehiclesData: Vehicle[] = [{
        id: 1,
        name: "Ford Transit - 2021",
        price: 22000,
        image: Car1,
        des: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
        specs: {mileage: "40,300 Miles", fuel: "Diesel", transmission: "Manual"},
        tag: "Great Price",
        type: "used"
    }, {
        id: 2,
        name: "Corolla Altis - 2023",
        price: 45000,
        image: Car2,
        des: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
        specs: {mileage: "15,000 Miles", fuel: "Petrol", transmission: "CVT"},
        type: "used"
    }, {
        id: 3,
        name: "New GLC - 2023",
        price: 95000,
        image: Car3,
        des: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
        specs: {mileage: "50 Miles", fuel: "Petrol", transmission: "Automatic"},
        tag: "Low Mileage",
        type: "new"
    }, {
        id: 4,
        name: "Audi A6 3.5 - New",
        price: 58000,
        image: Car4,
        des: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
        specs: {mileage: "5,000 Miles", fuel: "Petrol", transmission: "Automatic"},
        type: "new"
    }, {
        id: 5,
        name: "BMW M4",
        price: 80000,
        image: Car5,
        des: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
        specs: {mileage: "10 Miles", fuel: "Diesel", transmission: "Automatic"},
        tag: "Great Price",
        type: "new"
    },];

    const [filter, setFilter] = useState("inStock");
    const [cartAnimation, setCartAnimation] = useState<number | null>(null);
    const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>(vehiclesData);
    const [selectedType, setSelectedType] = useState("All Types");
    const [selectedCatetory, setSelectedCatetory] = useState("All Type");
    const [selectedPrice, setSelectedPrice] = useState("All Price");

    const queryClient = useQueryClient();

    // Add to cart mutation using React Query
    const addToCartMutation = useMutation({
        mutationFn: addToCart, onSuccess: () => {
            // Invalidate the cart query to trigger a refetch in Header
            queryClient.invalidateQueries({queryKey: ["cart"]});
        }, onError: (error) => {
            console.error("Failed to add item to cart:", error);
            alert("Failed to add item to cart. Please try again.");
        },
    });


    const handleFilter = (status: string) => {
        setFilter(status);
        if (status === "inStock") {
            setFilteredVehicles(vehiclesData);
        } else if (status === "newCars") {
            setFilteredVehicles(vehiclesData.filter((vehicle) => vehicle.type === "new"));
        } else if (status === "usedCars") {
            setFilteredVehicles(vehiclesData.filter((vehicle) => vehicle.type === "used"));
        }
    };

    const handleAddToCart = (vehicle: Vehicle) => {
        addToCartMutation.mutate(vehicle);
        setCartAnimation(vehicle.id);
        setTimeout(() => setCartAnimation(null), 1000);
    };

    return (<nav className="bg-white shadow-md relative z-10">
            <div
                className="w-full h-screen bg-cover bg-center bg-no-repeat"
                style={{backgroundImage: `url(${HomeBackGround})`}}
            >
                <div className="pt-24 py-6 relative z-10 pb-24">
                    <div className="container mx-auto text-center">
                        <span className="text-white text-[16px]">Find car for sale and for rent near you</span>
                        <h1 className="text-6xl font-semibold text-white mb-[60px] mt-8">Find Your Perfect Car</h1>
                       
                           
                        
                    </div>
                </div>
            </div>
            <section className="w-full py-12">
                <div className="container mx-auto px-10">
                    <div className="flex justify-between items-center px-2">
                        <h3 className="text-3xl font-semibold text-gray-800">Explore Our Premium Brands</h3>
                        <ViewAll/>
                    </div>
                    <div className="container mx-auto mt-10">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            <div
                                className="rounded-lg p-6 flex flex-col items-center justify-center border border-[#E9E9E9]">
                                <img src={LogoAudi} className="h-23 object-cover"/>
                                <p className="mt-2 text-center text-gray-700 font-semibold">Audi</p>
                            </div>
                            <div
                                className="rounded-lg p-6 flex flex-col items-center justify-center border border-[#E9E9E9]">
                                <img src={LogoBMW} className="h-23 object-cover"/>
                                <p className="mt-2 text-center text-gray-700 font-semibold">BMW</p>
                            </div>
                            <div
                                className="rounded-lg p-6 flex flex-col items-center justify-center border border-[#E9E9E9]">
                                <img src={LogoFord} className="h-23 object-cover"/>
                                <p className="mt-2 text-center text-gray-700 font-semibold">Ford</p>
                            </div>
                            <div
                                className="rounded-lg p-6 flex flex-col items-center justify-center border border-[#E9E9E9]">
                                <img src={LogoMer} className="h-23 object-cover"/>
                                <p className="mt-2 text-center text-gray-700 font-semibold">Mercedes Benz</p>
                            </div>
                            <div
                                className="rounded-lg p-6 flex flex-col items-center justify-center border border-[#E9E9E9]">
                                <img src={LogoPeugeot} className="h-23 object-cover"/>
                                <p className="mt-2 text-center text-gray-700 font-semibold">Peugeot</p>
                            </div>
                            <div
                                className="rounded-lg p-6 flex flex-col items-center justify-center border border-[#E9E9E9]">
                                <img src={LogoVolkswagen} className="h-23 object-cover"/>
                                <p className="mt-2 text-center text-gray-700 font-semibold">Volkswagen</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-24 w-full mx-auto mb-5">
                        <h3 className="text-3xl font-semibold text-gray-800">Explore All Vehicles</h3>
                        <ViewAll/>
                    </div>
                    {/* Tabs lọc */}
                    <div className="flex space-x-4 mb-2">
                        <button
                            onClick={() => handleFilter("inStock")}
                            className={`cursor-pointer py-1 relative after:lg:absolute after:lg:bottom-0 after:lg:left-0 after:lg:bg-slate-900 dark:after:bg-amber-700 hover:after:lg:w-full after:lg:h-0.5 after:lg:w-0 text-emerald-light:w-full after:lg:transition-all after:lg:ease-in-out after:lg:duration-300 ${filter === "inStock" ? "text-amber-700" : "text-gray-800"} hover:text-amber-700 transition`}
                        >
                            In Stock
                        </button>
                        <button
                            onClick={() => handleFilter("newCars")}
                            className={`cursor-pointer py-1 relative after:lg:absolute after:lg:bottom-0 after:lg:left-0 after:lg:bg-slate-900 dark:after:bg-amber-700 hover:after:lg:w-full after:lg:h-0.5 after:lg:w-0 text-emerald-light:w-full after:lg:transition-all after:lg:ease-in-out after:lg:duration-300 ${filter === "newCars" ? "text-amber-700" : "text-gray-800"} hover:text-amber-700 transition`}
                        >
                            New Cars
                        </button>
                        <button
                            onClick={() => handleFilter("usedCars")}
                            className={`cursor-pointer py-1 relative after:lg:absolute after:lg:bottom-0 after:lg:left-0 after:lg:bg-slate-900 dark:after:bg-amber-700 hover:after:lg:w-full after:lg:h-0.5 after:lg:w-0 text-emerald-light:w-full after:lg:transition-all after:lg:ease-in-out after:lg:duration-300 ${filter === "usedCars" ? "text-amber-700" : "text-gray-800"} hover:text-amber-700 transition`}
                        >
                            Used Cars
                        </button>
                    </div>
                    {/* Danh sách xe */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-6">
                        {filteredVehicles.map((vehicle) => (<div key={vehicle.id}
                                                                 className="bg-white rounded-lg border border-gray-200 overflow relative">
                                {vehicle.tag && (<span
                                        className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    {vehicle.tag}
                  </span>)}
                                <img src={vehicle.image} alt={vehicle.name} className="w-full h-48 object-cover"/>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">{vehicle.name}</h3>
                                    <p className="truncate text-gray-700">{vehicle.des}</p>
                                    <JampIcon/>
                                    <div className="flex justify-between text-sm text-gray-600 mb-2 mt-3">
                                        <div className="flex flex-col justify-center items-center">
                                            <MilesIcon/>
                                            <span className="mt-1">{vehicle.specs.mileage}</span>
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <FuelIcon/>
                                            <span className="mt-1">{vehicle.specs.fuel}</span>
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <ManualIcon/>
                                            <span className="mt-1">{vehicle.specs.transmission}</span>
                                        </div>
                                    </div>
                                    <JampIcon/>
                                    <div className="flex w-full justify-between mt-2">
                                        <p className="text-xl font-bold text-black mt-1">${vehicle.price.toLocaleString()}</p>
                                        <button
                                            onClick={() => handleAddToCart(vehicle)}
                                            className={`text-amber-800 hover:text-amber-900 ${cartAnimation === vehicle.id ? "animate-ping" : ""}`}
                                        >
                                            <AddToCartIcon/>
                                        </button>
                                    </div>
                                </div>
                            </div>))}
                    </div>
                    <div className="flex justify-center space-x-4 mt-10">
                        <button
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition cursor-pointer">&lt;</button>
                        <button
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition cursor-pointer">&gt;</button>
                    </div>
                    <div className="container mx-auto flex flex-col md:flex-row items-center mt-10">
                        <div className="w-full md:w-1/2 flex justify-center pt-8">
                            <img src={Background_RR} alt="Product" className="max-w-full rounded-lg shadow-lg"/>
                        </div>
                        <div className="w-full md:w-1/2 p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Premium Car Model</h2>
                            <p className="text-gray-700 mb-4">
                                This is an amazing car with high performance, modern technology, and premium design.
                            </p>
                            <ViewMoreIcon/>
                        </div>
                    </div>
                    <div className="flex justify-between items-center px-2 mt-20">
                        <h3 className="text-3xl font-semibold text-gray-800">Latest Blog Posts</h3>
                        <ViewAll/>
                    </div>
                    <section className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg overflow-hidden relative">
                            <span
                                className="absolute top-4 left-4 bg-white text-gray-700 text-sm px-3 py-2 rounded-full font-semibold">Sound</span>
                            <img src={Blog_1} alt="Toyota Supra" className="w-full h-80 object-fit rounded-lg"/>
                            <p className="text-gray-700 text-sm mt-4 text-start">April 17, 2025</p>
                            <h2 className="text-lg font-semibold text-gray-800 mt-2 text-start">
                                <a href="#" className="hover:text-blue-600">
                                    2024 BMW ALPINA XB7 with exclusive details, extraordinary
                                </a>
                            </h2>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden relative">
                            <span
                                className="absolute top-4 left-4 bg-white text-gray-700 text-sm px-3 py-2 rounded-full font-semibold">Accessories</span>
                            <img src={Blog_2} alt="Toyota Supra" className="w-full h-80 object-fit rounded-lg"/>
                            <p className="text-gray-700 text-sm mt-4 text-start">April 17, 2025</p>
                            <h2 className="text-lg font-semibold text-gray-800 mt-2 text-start">
                                <a href="#" className="hover:text-blue-600">
                                    BMW X6 M50i is designed to exceed your sportiest.
                                </a>
                            </h2>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden relative">
                            <span
                                className="absolute top-4 left-4 bg-white text-gray-700 text-sm px-3 py-2 rounded-full font-semibold">Exterior</span>
                            <img src={Blog_3} alt="Toyota Supra" className="w-full h-80 object-fit rounded-lg"/>
                            <p className="text-gray-700 text-sm mt-4 text-start">April 17, 2025</p>
                            <h2 className="text-lg font-semibold text-gray-800 mt-2 text-start">
                                <a href="#" className="hover:text-blue-600">
                                    BMW X5 Gold 2024 Sport Review: Light on Sport
                                </a>
                            </h2>
                        </div>
                    </section>
                </div>
            </section>
        </nav>);
}

export default Home;