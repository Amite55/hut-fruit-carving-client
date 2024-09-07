
import useAuth from "../../customHooks/useAuth";
import useAxios from "../../customHooks/useAxios";
import { useMutation, useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/LoadingSpinner";
import MyArtTableRow from "./MyArtTableRow";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const MyArtCraft = () => {
  const { user } = useAuth();
  const customAxios = useAxios();
  const [artFilter, setArtFilter] = useState();

  // my posted art and craft item fetch to database====
  const { data: myArts, isLoading, refetch } = useQuery({
    queryKey: ['my-craft', user?.email],
    queryFn: async () => {
      const { data } = await customAxios.get(`/myCrafts/${user?.email}`);
      return data;
    }
  })
  useEffect(() => {
    setArtFilter(myArts)
  },[myArts])

  // delete function ========
  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const { data } = await customAxios.delete(`/crafts/${id}`);
      return data;
    },
    onSuccess: () => {
      refetch()
      Swal.fire({
        title: "Deleted!",
        text: "Your Item has been deleted.",
        icon: "success"
      });
    }
  })

  // handle delete art and craft item =========
  const handleDelete = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          mutateAsync(id)
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  // filtering by customization =========
  const handleFilter = (e) => {
    const value = e.target.value;
    if(value === 'All'){
      setArtFilter(myArts)
    }
    else {
      const filteredData = myArts.filter(item => item?.customization === value);
      setArtFilter(filteredData)
    }
  }

  if (isLoading) return <LoadingSpinner />
  return (
    <>
      <h2 className="text-3xl mx-auto text-center divider font-mono my-2">My Added Art And Crafts</h2>
      <div className='container mx-auto px-4 sm:px-8'>

        {/* Dropdown for filtering */}
      <div className="mt-2">
      <label htmlFor="filter">Filter by Customization: </label>
        <select id="filter" onChange={handleFilter} className="border w-32 h-10 rounded-lg">
          <option value="All">All</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-medium'
                    >
                      Item Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-medium'
                    >
                      subcategory_Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-medium'
                    >
                      price
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-medium'
                    >
                      rating
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-medium'
                    >
                      processing_time
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-medium'
                    >
                      Customization
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-medium'
                    >
                      Delete
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-medium'
                    >
                      View Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* User data table row */}
                  {
                    artFilter?.map(myArt => <MyArtTableRow
                      key={myArt._id}
                      myArt={myArt}
                      handleDelete={handleDelete}
                    />)
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyArtCraft;