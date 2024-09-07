import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const AllArtTableRow = ({allArt}) => {
    return (
        <tr>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{allArt?.itemName}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{allArt?.subcategory}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{allArt?.price}/$</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap flex my-auto'>{allArt?.rating} <IoIosStar color="gold"  /></p>
        </td>
        {/* details button */}
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <span className='relative cursor-pointer inline-block px-1 py-1  text-green-900 leading-tight'>
            <span
              aria-hidden='true'
              className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
            ></span>
            <Link to={`/detailsCraft/${allArt?._id}`}>
            <span className='relative'>See Details</span>
            </Link>
          </span>
        </td>
      </tr>
    );
};

AllArtTableRow.propTypes = {
    allArt: PropTypes.object,
  }

export default AllArtTableRow;