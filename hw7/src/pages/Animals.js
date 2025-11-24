import octopusimg from "../images/octopus.jpg";

function Animals(){
  return(
    <div className="page">
      <h1>Curious Animal Facts</h1>
      <img
        src={octopusimg}
        alt="Animals"
        width="400"
      />
      <p>Octopuses have three hearts and blue blood. Two hearts pump blood to the gills, while the third pumps it to the rest of the body providing more circulation to the organs.</p>
    </div>
  );
}

export default Animals;
