import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../customHooks/useAxios";


const UpdateCraft = () => {
    const customAxios = useAxios();
    const { id } = useParams();
    const navigate = useNavigate();

    const { data: craftData } = useQuery({
        queryKey: ['detailsCraft', id],
        queryFn: async () => {
            const { data } = await customAxios.get(`/crafts/${id}`);
            return data;
        }
    })


    // update function ======
    const { mutateAsync } = useMutation({
        mutationFn: async (updateNewCraft) => {
            const { data } = await customAxios.put(`/crafts/${id}`, updateNewCraft);
            return data;
        },
        onSuccess: () => {
            navigate('/allArtCraft')
            Swal.fire({
                title: 'success',
                text: 'update successful',
                icon: 'success',
                confirmButtonText: 'ok!!'
            })
        }
    })

    const handleUpdateCraft = async (e) => {
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

        const updateNewCraft = { itemName, subcategory, price, time, image, description, rating, stockStatus, customization }
        try {
            await mutateAsync(updateNewCraft)
        } catch (err) {
            console.log(err);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });

        }
    }

    return (
        <div className="bg-[#b4b4b2] p-24">
            <h1 className="mx-auto text-center text-4xl text-black font-bold font-mono">Update a Art and Craft</h1>
            <form onSubmit={handleUpdateCraft}>

                {/* craft name and title */}
                <div className="">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-black font-bold">Name</span>
                        </label>
                        <input name="name" type="text" defaultValue={craftData?.itemName} className="input input-bordered w-full" required />
                    </div>
                </div>


                {/* Rating and subcategory name */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Rating</span>
                        </label>
                        <input type="number" name="rating" min="0" max="5" defaultValue={craftData?.rating} required className="input input-bordered w-full" />
                    </div>

                    <div className="form-control ml-3 md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">subcategory Name</span>
                        </label>
                        <select name="subcategory" className="h-12 input-bordered rounded-lg w-full px-2" required>
                            <option value="" selected disabled hidden>Select an Option</option>
                            <option value="cartoon-drawing">Cartoon Drawing</option>
                            <option value="landscape-painting">Landscape Painting</option>
                            <option value="portrait-drawing">Portrait Drawing</option>
                            <option value="water-color-painting">Water color Painting</option>
                            <option value="oil-painting">Oil Painting</option>
                            <option value="charcoal-sketching">Charcoal Sketching:</option>
                        </select>
                    </div>
                </div>
                {/* price and processing time */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Price</span>
                        </label>
                        <input defaultValue={craftData?.price} name="price" type="text" placeholder="Price" className="input input-bordered w-full" required />
                    </div>

                    <div className="form-control ml-3 md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Processing Time (days):</span>
                        </label>
                        <input defaultValue={craftData?.time} type="number" name="time" placeholder="Enter processing time" required className="input input-bordered w-full" />
                    </div>
                </div>

                {/* stock status and  Customization Availity*/}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Stock Status:</span>
                        </label>
                        <select name="stockStatus" className="h-12 input-bordered rounded-lg w-full px-2" required>
                            <option value="" selected disabled hidden>Select an Option</option>
                            <option value="in-stock">In Stock</option>
                            <option value="made-to-order">Made to Order</option>
                        </select>
                    </div>

                    <div className="form-control ml-3 md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Customization Available:</span>
                        </label>
                        <select name="customization" className=" h-12 input-bordered rounded-lg w-full px-2" required>
                            <option value="" selected disabled hidden>Select an Option</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>
                {/* photo url */}
                <div className="">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-black font-bold">Photo URL</span>
                        </label>
                        <input defaultValue={craftData?.image} name="image" type="url" placeholder="Photo URL" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* description */}
                <div className="">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-black font-bold">Short Description</span>
                        </label>

                        <input defaultValue={craftData?.description} name="description" type="text" placeholder="Short Description" className="input input-bordered w-full" required />
                    </div>
                </div>

                <div className="">
                    <div className="form-control w-1/3 mx-auto mt-5">
                        <input type="submit" value="Update" className="input input-bordered w-full bg-stone-700 btn" />
                    </div>
                </div>


            </form>
        </div>
    );
};

export default UpdateCraft;