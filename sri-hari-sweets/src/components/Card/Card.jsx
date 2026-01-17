
//{============= Note: All product data and information are managed in Product.jsx===========}

function Card({ item }) {
  return (
    <div
      className="
        bg-white
        border border-gray-200
        shadow-sm
        overflow-hidden
        md:hover:shadow-md
        hover:shadow-xl
      "
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.name}
        className="max-h-full max-w-full object-contain"
      />

      {/* Content */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">
          {item.name}
        </h3>

        <p className="text-orange-600 font-bold mt-1">
          ₹ {item.price}
        </p>
      </div>
    </div>
  );
}

export default Card;
