

const AddCraft = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const itemName = form.item.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const time = form.time.value;
        const image = form.image.value;
        const description = form.description.value;
        const allData = {itemName, subcategory, price, time, image, description}
        console.log(allData)
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