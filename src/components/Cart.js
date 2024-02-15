import { useSelector } from "react-redux";
import { CLOUDINARY_IMG_URL } from "../utils/Constant";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="container m-auto">
      <ul>
        {cartItems?.map((data) => {
          return (
            <>
              <li key={data?.info?.id} className="card">
                <div className="card-inner flex justify-between align-top my-12">
                  <div className="left-sect w-3/4 mr-8">
                    <p className="opacity-7 text-gray-700">
                      <strong>{data.card.info.name}</strong>
                    </p>
                    <p className="text-sm text-gray-500 mt-5">
                      {data.card.info.description}
                    </p>
                  </div>
                  <div className="rigt-sect w-1/4">
                    <div className="cursor-pointer relative">
                      <img
                        src={`${CLOUDINARY_IMG_URL}/${data.card.info.imageId}`}
                        className="rounded-lg"
                      />
                      <button
                        onClick={(e) => handleClick(data)}
                        className="btn uppercase absolute bottom-0 right-10 text-green bg-white px-4 py-1 shadow-md rounded-md"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};
export default Cart;
