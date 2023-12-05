import reactImg from '../../assets/react-core-concepts.png';
import './Header.css'
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
   let data = Math.floor(Math.random() * (max + 1));
   //console.log(data);
   return data
}

function Header() {
    const descriptions = reactDescriptions[genRandomInt(2)]
    return (
     <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
            {descriptions} React concepts you will need for almost any app you are going to build!
        </p>
     </header>
    )
}

export default Header;