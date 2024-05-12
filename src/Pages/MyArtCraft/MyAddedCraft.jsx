
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const MyAddedCraft = ({item}) => {
    const { _id, itemName, subcategory, price, image } = item;
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
        </div>
      </div>
    </div>
    );
};

export default MyAddedCraft;


MyAddedCraft.propTypes = {
    item: PropTypes.object
  };