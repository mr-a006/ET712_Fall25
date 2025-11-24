function NotFound(){
  return(
    <div className="page">
      <h1>404 - Page Not Found</h1>
      <img
        src="https://picsum.photos/400/250?grayscale"
        alt="Not found"
      />
      <p>The page you're trying to view does not exist.</p>
    </div>
  );
}

export default NotFound;
