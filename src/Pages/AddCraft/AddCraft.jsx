
import { useMutation } from '@tanstack/react-query';
import useAuth from '../../customHooks/useAuth';
import useAxios from '../../customHooks/useAxios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"



const AddCraft = () => {
    const { user } = useAuth();
    const customAxios = useAxios();
    const navigate = useNavigate();

    const { mutateAsync, reset } = useMutation({
        mutationFn: async (newCraft) => {
            const { data } = await customAxios.post(`/crafts`, newCraft);
            console.log(data);
            return data;
        },
        onSuccess: () => {
            Swal.fire({
                title: 'success!',
                text: 'Added a New craft Item',
                icon: 'successful',
                confirmButtonText: 'ok'
            })
            reset()
            navigate('/myArt')
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const itemName = form.name.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const time = form.time.value;
        const rating = form.rating.value;
        const stockStatus = form.stockStatus.value;
        const customization = form.customization.value;
        const image = form.image.value;
        const description = form.description.value;
        const email = user?.email;
        const userName = user?.displayName;

        const newCraft = { itemName, subcategory, price, time, image, description, rating, stockStatus, customization, email, userName }
        console.table(newCraft);
        try {
            await mutateAsync(newCraft);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            className="bg-[#b4b4b2] p-24">
            <h1 className="mx-auto text-4xl text-black font-bold font-mono">Add New Craft</h1>
            <form onSubmit={handleSubmit}>

                {/* craft name and title */}
                <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1.2 } }}
                className="">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-black font-bold">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Craft Item Name" className="input input-bordered w-full" required />
                    </div>
                </motion.div>


                {/* Rating and subcategory name */}
                <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1.4 } }}
                className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Rating</span>
                        </label>
                        <input type="number" name="rating" min="0" max="5" placeholder="Enter rating (0 to 5)" required className="input input-bordered w-full" />
                    </div>

                    <div className="form-control ml-3 md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">subcategory Name</span>
                        </label>
                        <select name="subcategory" className="h-12 input-bordered rounded-lg w-full px-2" required>
                            <option value="none" selected disabled hidden>Select an Option</option>
                            <option value="cartoon-drawing">Cartoon Drawing</option>
                            <option value="landscape-painting">Landscape Painting</option>
                            <option value="portrait-drawing">Portrait Drawing</option>
                            <option value="water-color-painting">Water color Painting</option>
                            <option value="oil-painting">Oil Painting</option>
                            <option value="charcoal-sketching">Charcoal Sketching:</option>
                        </select>
                    </div>
                </motion.div>
                {/* price and processing time */}
                <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1.4 } }}
                className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Price</span>
                        </label>
                        <input name="price" type="text" placeholder="Price" className="input input-bordered w-full" required />
                    </div>

                    <div className="form-control ml-3 md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Processing Time (days):</span>
                        </label>
                        <input type="number" name="time" placeholder="Enter processing time" required className="input input-bordered w-full" />
                    </div>
                </motion.div>

                {/* stock status and  Customization Availity*/}
                <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1.6 } }}
                className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Stock Status:</span>
                        </label>
                        <select name="stockStatus" className="h-12 input-bordered rounded-lg w-full px-2" required>
                            <option value="none" selected disabled hidden>Select an Option</option>
                            <option value="in-stock">In Stock</option>
                            <option value="made-to-order">Made to Order</option>
                        </select>
                    </div>

                    <div className="form-control ml-3 md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Customization Available:</span>
                        </label>
                        <select name="customization" className=" h-12 input-bordered rounded-lg w-full px-2" required>
                            <option value="none" selected disabled hidden>Select an Option</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </motion.div>
                {/* photo url */}
                <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1.8 } }}
                className="">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-black font-bold">Photo URL</span>
                        </label>
                        <input name="image" type="url" placeholder="Photo URL" className="input input-bordered w-full" required />
                    </div>
                </motion.div>
                {/* description */}
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 2 } }}
                className="">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-black font-bold">Short Description</span>
                        </label>

                        <input name="description" type="text" placeholder="Short Description" className="input input-bordered w-full" required />
                    </div>
                </motion.div>

                <div className="">
                    <div className="form-control w-1/3 mx-auto mt-5">
                        <input type="submit" value="Add" className="input input-bordered w-full bg-stone-700 btn" />
                    </div>
                </div>


            </form>
        </motion.div >
    );
};

export default AddCraft;



// https://i.ibb.co/vk68scN/Adobe-Stock-765491568-Preview.jpg
// https://i.ibb.co/s9g8Bfz/Adobe-Stock-68622726-Preview.jpg
// https://i.ibb.co/q5Dzs0R/Adobe-Stock-61463905-Preview.jpg
// https://i.ibb.co/XfQrcB1/Adobe-Stock-685936811-Preview.jpg
// https://i.ibb.co/frnjdgs/24846.jpg
// https://i.ibb.co/xYv9FTD/10314.jpg
// https://i.ibb.co/5KXtVWb/76103.jpg
// https://i.ibb.co/sqCnB5m/19594.jpg
// https://i.ibb.co/LRg4Tvj/aneta-pawlik-3-APomrmclj4-unsplash.jpg