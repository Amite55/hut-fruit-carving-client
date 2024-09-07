
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../customHooks/useAxios";
import LoadingSpinner from "../../components/LoadingSpinner";
import AllArtTableRow from "./AllArtTableRow";


const AllArtCraft = () => {
    const customAxios = useAxios();

    const {data: allArts, isLoading} = useQuery({
        queryKey: ['allArt'],
        queryFn: async () => {
            const {data} = await customAxios.get('/crafts');
            return data;
        }
    })
    console.log(allArts);

    if(isLoading) return <LoadingSpinner/>
    return (
        <>
            <h2 className="text-3xl mx-auto text-center divider font-mono my-2">All Art And Crafts</h2>
<div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold'
                    >
                      Item Name 
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold'
                    >
                     subcategory_Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold'
                    >
                      price 
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold'
                    >
                     rating 
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold'
                    >
                     View Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                    {/* User data table row */}
                    {
                        allArts.map(allArt => <AllArtTableRow 
                            key={allArt?._id}
                            allArt={allArt}
                            />)
                    }
                    
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>



        {/* <div className='bg-[#8b8b8b] py-9 px-5 rounded-lg'>
            <div className='grid md:grid-cols-3 max-w-6xl mx-auto gap-3 '> 
                    {
                        allArtCrafts.map(craft => <AllCrafts key={craft._id} craft={craft}></AllCrafts>
                        )
                    }
            </div>
        </div> */}
        </>
    );
};

export default AllArtCraft;