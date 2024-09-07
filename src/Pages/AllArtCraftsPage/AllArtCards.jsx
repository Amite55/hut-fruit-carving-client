import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import { IoIosStar } from "react-icons/io";
const AllArtCards = ({artCraft}) => {
    return (
            <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={artCraft?.image} alt="Shoes" />
        </figure>
      <div className="card-body">
        <h2 className="card-title font-mono">{artCraft?.itemName}</h2>
        <p>Category: {artCraft?.subcategory}</p>
        <p className="flex items-center">Rating: {artCraft?.rating} <IoIosStar color="gold" /> </p>
        <div className='flex justify-between'>
          <p>Price: {artCraft?.price}$</p>
          <p>Stock Status: {artCraft?.stockStatus}</p>
        </div>
        <div className="w-full justify-between">
          <Link to={`/detailsCraft/${artCraft?._id}`}>
            <button className="btn w-full border-y-cyan-600 btn-sm hover:rounded-full">See Details</button>
          </Link>
        </div>
      </div>
    </div>
    );
};


AllArtCards.propTypes = {
    artCraft: PropTypes.object,
  }

export default AllArtCards;