import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCraft = () => {
    const updateCraft = useLoaderData();
    const {_id, itemName, subcategory, price, image, description} = updateCraft;


    const handleUpdateCraft = e => {
        e.preventDefault();
        const form = e.target;
        const itemName = form.item.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const time = form.time.value;
        const image = form.image.value;
        const description = form.description.value;
        const updateCraft = {itemName, subcategory, price, time, image, description}
        console.log(updateCraft);

        fetch(`http://localhost:5000/crafts/${_id}`, {
            method: 'PUT', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(updateCraft)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success',
                    text: 'update successful',
                    icon: 'success',
                    confirmButtonText: 'ok!!'
                })
            }
        })
    }

    return (
        <div className="bg-[#b4b4b2] p-24">
        <h1 className="mx-auto text-4xl text-black font-bold font-mono">Update a Craft</h1>
        <form onSubmit={handleUpdateCraft}>


            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-black font-bold">Name</span>
                    </label>
                    <input name="item" type="text" defaultValue={itemName} placeholder="Craft Item Name" className="input input-bordered w-full" />
                </div>

                <div className="form-control ml-3 md:w-1/2">
                    <label className="label">
                        <span className="label-text text-black font-bold">subcategory Name</span>
                    </label>
                    <input name="subcategory" type="text" defaultValue={subcategory} placeholder="Subcategory Name" className="input input-bordered w-full" />
                </div>
            </div>

            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-black font-bold">Price</span>
                    </label>
                    <input name="price" type="text" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                </div>

                <div className="form-control ml-3 md:w-1/2">
                    <label className="label">
                        <span className="label-text text-black font-bold">Time</span>
                    </label>
                    <input name="time" type="time" className="input input-bordered w-full" />
                </div>
            </div>

            <div className="">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-black font-bold">Photo URL</span>
                    </label>
                    <input name="image" type="url" defaultValue={image} placeholder="Photo URL" className="input input-bordered w-full" />
                </div>
            </div>

            <div className="">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-black font-bold">Short Description</span>
                    </label>
                    
                    <input name="description" type="text" defaultValue={description} placeholder="Short Description" className="input input-bordered w-full" />
                </div>
            </div>

            <div >
                <div className="form-control w-1/3 mx-auto mt-5">
                    <input type="submit" value="Update Item" className="input input-bordered w-full bg-stone-700 btn" />
                </div>
            </div>


        </form>
    </div>
    );
};

export default UpdateCraft;