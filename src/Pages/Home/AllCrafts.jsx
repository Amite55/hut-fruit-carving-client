import PropTypes from 'prop-types';
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';
const AllCrafts = ({craft}) => {
    const {_id, itemName, subcategory, price, image} = craft;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title font-mono">{itemName}</h2>
          <p>Category: {subcategory}</p>
          <div className='flex justify-between'>
          <p>Price: {price} $</p>
          <p className=' text-green-600 font-bold underline'>In Stock</p>
          </div>
          <div className="card-actions justify-between">
           <Link to={`/detailsCraft/${_id}`}>
           <button className="btn border-y-cyan-600 btn-sm hover:rounded-full">See Details</button>
           </Link>
            <button className="btn text-red-500 text-xl btn-sm hover:rounded-full"><MdDeleteForever /></button>
          </div>
        </div>
      </div>
    );
};

export default AllCrafts;

AllCrafts.propTypes = {
    craft: PropTypes.object
  };