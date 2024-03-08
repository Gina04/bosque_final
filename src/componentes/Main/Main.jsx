import Carousel from '../Carousel/Carousel';
import Hero from '../Hero/Hero';
import './Main.css';
function Main(){
    return(
        <div className="contenedor-main">
            <Hero/>
            <Carousel/>
        </div>
    )
}
export default Main;