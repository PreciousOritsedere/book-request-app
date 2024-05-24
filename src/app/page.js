
import BookList from "./components/BookLists";

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Library Management</h1>
     
      <BookList />
    </div>
  );
};

export default Home;
