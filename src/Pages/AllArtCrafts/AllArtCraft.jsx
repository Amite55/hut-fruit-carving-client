import { useLoaderData } from "react-router-dom";
import AllCrafts from "../Home/AllCrafts";


const AllArtCraft = () => {
    const allArtCrafts = useLoaderData();
    return (
        <div className='bg-[#8b8b8b] py-9 px-5 rounded-lg'>
            <div className='grid md:grid-cols-3 max-w-6xl mx-auto gap-3 '> 
                    {
                        allArtCrafts.map(craft => <AllCrafts key={craft._id} craft={craft}></AllCrafts>
                        )
                    }
            </div>
        </div>
    );
};

export default AllArtCraft;