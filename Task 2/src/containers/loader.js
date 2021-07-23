import Loader from "react-loader-spinner";
import './styles.css';

const LoaderComp = ()=>{
    return(
  
        <div className='app'>
            <Loader
            type="Hearts"
            color="rgb(255,255,255)"
            height={100}
            width={150}
            timeout={2000}
            />
       </div>
    );
}
export default LoaderComp
