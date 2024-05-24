import Image from "next/image";

const BookCard = ({ book, onAccept, onDecline }) => {
  return (
    <div className="min-w-[250px] w-full h-auto border rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="w-full h-48 relative overflow-hidden">
        <Image
          src={book.image}
          alt={book.title}
          className="object-cover w-full h-full rounded-t-lg"
          layout="fill"
        />
      </div>
      <div className="p-4 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
        <h2 className="text-xl font-bold mb-1 text-gray-900">{book.title}</h2>
        <p className="text-gray-700 mb-2 italic">{book.author}</p>
        <p className="text-gray-600 text-left text-sm">{book.details}</p>
        {onAccept && onDecline && (
          <div className="flex justify-between mt-2">
            <button
              className="bg-green-500 text-white p-2 rounded"
              onClick={onAccept}
            >
              Accept
            </button>
            <button
              className="bg-red-500 text-white p-2 rounded"
              onClick={onDecline}
            >
              Decline
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCard;
