import { useParams } from "react-router-dom";
import useAxios from "../../customHooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import AllArtCards from "./AllArtCards";
import LoadingSpinner from "../../components/LoadingSpinner";
import { motion } from "framer-motion"

const AllArtCraftsPage = () => {
    const subcategoryName = useParams();
    const customAxios = useAxios();
    const name = subcategoryName.subcategoryName;

    const { data: subcategoriesCraftData, isLoading } = useQuery({
        queryKey: ['subcategoryName', subcategoryName],
        queryFn: async () => {
            const { data } = await customAxios.get(`/subcategoryCrafts/${name}`);
            return data
        }
    })

    if (isLoading) return <LoadingSpinner />
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
        >
            {subcategoriesCraftData?.length > 0 ?
                <div className='bg-[#8b8b8b] py-9 px-5 rounded-lg'>
                    <h1 className="text-4xl mx-auto text-center my-5 font-bold font-mono">
                        Categories Wise Data
                    </h1>
                    {/* =========== all categories =========== */}
                    <div className='grid md:grid-cols-3 max-w-6xl mx-auto gap-3 '>
                        {
                            subcategoriesCraftData.map(artCraft =>
                                <AllArtCards
                                    key={artCraft?._id}
                                    artCraft={artCraft}
                                />)
                        }
                    </div>
                </div>

                :

                <h1 className="text-4xl mx-auto text-center my-5 font-bold font-mono">
                    no data!
                </h1>


            }
        </motion.div>


    );
};

export default AllArtCraftsPage;