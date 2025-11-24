import spaceimg from "../images/space.jpg";

function Space(){
  return(
    <div className="page">
      <h1>Curious Space Facts</h1>
      <img
        src={spaceimg}
        alt="Space"
        width="400"
      />
      <p>Did you know that in Space, the Sun is not the only hottest planet there? Venus is also one of the hottest planets, although it does not come close to the Sun as of yet.</p>
    </div>
  );
}

export default Space;
