import curiousnotesimg from "../images/curiousnotes.jpg";

function Home(){
  return(
    <div className="page">
      <h1>Welcome to Curious Notes</h1>
      <img
        src={curiousnotesimg}
        alt="Random curiosity"
      />
      <p>Check out some curious fun facts shared about different topics. Explore the pages to learn something unexpected.</p>
    </div>
  );
}

export default Home;
