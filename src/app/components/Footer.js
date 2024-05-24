const Footer = () => {
    return (
      <footer className="bg-blue-500 text-white p-4 mt-4">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} Library Management. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  