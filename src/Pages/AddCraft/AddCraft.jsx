import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AddCraft = () => {
    const {user} = useContext(AuthContext) || {};
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const itemName = form.item.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const time = form.time.value;
        const image = form.image.value;
        const description = form.description.value;
        const email = user.email;
        const newCraft = {itemName, subcategory, price, time, image, description, email}
        console.log(newCraft)

        // send to the server
        fetch('http://localhost:5000/crafts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCraft)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Added a New craft Item',
                    icon: 'successful',
                    confirmButtonText: 'ok'
                  })
            }
        })
    }

    return (
        <div className="bg-[#b4b4b2] p-24">
            <h1 className="mx-auto text-4xl text-black font-bold font-mono">Add New Craft</h1>
            <form onSubmit={handleSubmit}>


                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Name</span>
                        </label>
                        <input name="item" type="text" placeholder="Craft Item Name" className="input input-bordered w-full" />
                    </div>

                    <div className="form-control ml-3 md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">subcategory Name</span>
                        </label>
                        <input name="subcategory" type="text" placeholder="Subcategory Name" className="input input-bordered w-full" />
                    </div>
                </div>

                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Price</span>
                        </label>
                        <input name="price" type="text" placeholder="Price" className="input input-bordered w-full" />
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
                        <input name="image" type="url" placeholder="Photo URL" className="input input-bordered w-full" />
                    </div>
                </div>

                <div className="">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-black font-bold">Short Description</span>
                        </label>
                        
                        <input name="description" type="text" placeholder="Short Description" className="input input-bordered w-full" />
                    </div>
                </div>

                <div className="">
                    <div className="form-control w-1/3 mx-auto mt-5">
                        <input type="submit" value="Add" className="input input-bordered w-full bg-stone-700 btn" />
                    </div>
                </div>


            </form>
        </div>
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