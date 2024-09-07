import { useQuery } from "@tanstack/react-query";
import useAxios from "../../customHooks/useAxios";
import LoadingSpinner from "../../components/LoadingSpinner";
import { Link } from "react-router-dom";

const Subcategories = () => {
    const customAxios = useAxios();

    const { data: subcategories, isLoading } = useQuery({
        queryKey: ['subcategory'],
        queryFn: async () => {
            const { data } = await customAxios.get('/subcategory');
            return data;
        }
    })

    if (isLoading) return <LoadingSpinner />
    return (
        <div className='bg-[#8b8b8b] py-9 px-5 rounded-lg'>
            <h1 className="text-4xl mx-auto text-center my-5 font-bold font-mono">
                All Art and Craft Categories
            </h1>
            {/* =========== all categories =========== */}
            <div className='grid grid-cols-3 md:grid-cols-6 max-w-6xl mx-auto gap-3 '>
                {
                    subcategories.map(subcategory =>
                        <div
                            key={subcategory._id}
                            className="card card-compact bg-base-100 shadow-xl group transition h-[350px]">
                            <figure>
                                <img className="group-hover:scale-110 " src={subcategory?.image} alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title font-mono">{subcategory?.name}</h2>
                                <p>{subcategory?.description}</p>
                                <div className=" w-full bottom-0">
                                    <Link to={`/all-art-crafts/${subcategory?.name}`}>
                                        <button className="btn w-full bottom-0 border-y-cyan-600 btn-sm hover:rounded-full">
                                            See More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Subcategories;



