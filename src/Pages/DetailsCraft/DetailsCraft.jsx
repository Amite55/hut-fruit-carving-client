import { Link,  useParams } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import useAuth from "../../customHooks/useAuth";
import useAxios from "../../customHooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion"

AOS.init();

const DetailsCraft = () => {
    const {id} = useParams();
    const { user } = useAuth();
    const customAxios = useAxios();
    


    const {data: detailsCraft} = useQuery({
        queryKey: ['detailsCraft', id],
        queryFn: async () => {
            const {data} = await customAxios.get(`/crafts/${id}`);
            return data;
        }
    })

    return (
        <motion.div 
        initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
        className="max-w-6xl mx-auto">
            <div>
                <div data-aos="fade-left" data-aos-duration="1000" className="md:max-w-3xl mx-auto">
                    <img className="text-center" src={detailsCraft?.image} alt="" />
                </div>
                <div className="max-w-3xl mx-auto my-8 border p-6">
                    <div className="flex justify-between">
                        <h2 className="text-3xl font-mono">Item Name: {detailsCraft?.itemName}</h2>

                {/* if posted user and craft user same to show button */}
                        {
                            user?.email === detailsCraft?.email && <Link to={`/updateCraft/${detailsCraft?._id}`}>
                                <button className="btn btn-sm hover:rounded-full border-teal-600">Update Details</button>
                            </Link>
                        }

                    </div>
                    <h4 className="text-xl my-2">SubCategory: {detailsCraft?.subcategory}</h4>

                    <div className="divider"></div>

                    <div className="flex justify-between px-10">
                        <p className="font-semibold">Price: {detailsCraft?.price}$</p>
                        <p className="font-semibold">Processing Time: {detailsCraft?.time}</p>
                        <p className="font-semibold">Stock Status: {detailsCraft?.stockStatus}</p>
                        <p className="font-semibold">Customization: {detailsCraft?.customization}</p>
                    </div>
                    <div className="divider"></div>
                    <p>{detailsCraft?.description}</p>

                </div>
            </div>
        </motion.div>
    );
};

export default DetailsCraft;