import PropTypes from 'prop-types';

const AllCrafts = ({craft}) => {
    const {itemName, subcategory, price, image} = craft;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title font-mono">{itemName}</h2>
          <p>Category: {subcategory}</p>
          <p>Price: {price} $</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-sm hover:rounded-full">See Details</button>
          </div>
        </div>
      </div>
    );
};

export default AllCrafts;

AllCrafts.propTypes = {
    craft: PropTypes.object
  };