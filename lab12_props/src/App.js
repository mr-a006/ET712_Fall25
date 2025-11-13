import './App.css';
import User from './comments'
import User_feedback from './User_feedback'
import Modalwindow from './modalwindow'

// import images
import avatar1 from './images/avatar_batman.jpg'
import avatar2 from './images/avatar_student.jpg'
import avatar3 from './images/avatar_man.jpg'

function App() {
  return (
    <>
    <h1 style={{textAlign:"center"}}>Lab 12, React props by Aqeel Hussain</h1>
    <section className='container'>
      {/** user 1 */}
      <User_feedback username ="Batman"> <User image ={avatar1} date="04/23/2025" msg="I am Batman"/></User_feedback>

      {/** user 2 */}
      <User_feedback username ="Tobias"> <User image ={avatar2} date="01/20/2025" msg="I have just graduated"/></User_feedback>

      {/** user 3 */}
      <User_feedback username ="Ronald"> <User image ={avatar3} date="01/20/2025" msg="I am heading to school"/></User_feedback>
    </section>
    </>
  );
}

export default App;
