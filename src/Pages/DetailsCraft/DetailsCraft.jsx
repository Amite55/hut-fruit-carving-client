import { useLoaderData } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const DetailsCraft = () => {
    const detailsCraft = useLoaderData();
    console.log(detailsCraft);
    const { itemName, subcategory, price, image, time, description} = detailsCraft;
    return (
        <div className="max-w-6xl mx-auto">
            <div>
                <div data-aos="fade-left" data-aos-duration="1000" className="md:max-w-3xl mx-auto">
                    <img className="text-center" src={image} alt="" />
                </div>
                <div className="max-w-3xl mx-auto my-8 border p-6">
                   <div className="flex justify-between">
                   <h2 className="text-3xl font-mono">Item Name: {itemName}</h2>
                   <button className="btn btn-sm hover:rounded-full border-teal-600">Update Details</button>
                   </div>
                    <h4 className="text-xl">Category : {subcategory}</h4>
                    <div className="divider"></div>
                    <div className="flex justify-between px-10">
                        <p>Price: {price} $</p>
                        <p>Upload Time: {time}</p>
                        <p className="border border-teal-500 p-3 rounded-full text-teal-500">In stock</p>
                    </div>
                    <div className="divider"></div>
                    <p>{description}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default DetailsCraft;