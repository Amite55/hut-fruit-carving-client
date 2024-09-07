import PropTypes from 'prop-types'
import { IoIosStar } from "react-icons/io";
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';

const MyArtTableRow = ({myArt, handleDelete}) => {
    return (
        <tr>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{myArt?.itemName}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{myArt?.subcategory}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{myArt?.price}/$</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap flex my-auto'>{myArt?.rating} <IoIosStar color="gold"  /></p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{myArt?.time}/Days</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap font-semibold'>{myArt?.customization}</p>
        </td>
            {/* Delete button */}
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <button 
          onClick={() =>handleDelete(myArt?._id)}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold leading-tight text-red-500 hover:text-red-400'>
            <span
              aria-hidden='true'
              className='absolute inset-0 '
            ></span>
            <span className='relative'>
                <MdDeleteForever size={25} />
                
            </span>
          </button>
        </td>

        {/* details button */}
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <span className='relative cursor-pointer inline-block px-1 py-1  text-green-900 leading-tight'>
            <span
              aria-hidden='true'
              className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
            ></span>
            <Link to={`/detailsCraft/${myArt?._id}`}>
            <span className='relative'>See Details</span>
            </Link>
          </span>
        </td>
      </tr>
    );
};

MyArtTableRow.propTypes = {
    user: PropTypes.object,
    myArt: PropTypes.object,
    handleDelete: PropTypes.func,
  }

export default MyArtTableRow;