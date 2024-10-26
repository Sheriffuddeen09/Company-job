import 'react-html5video/dist/styles.css'
import {DefaultPlayer as Video} from 'react-html5video'
import media from '../image/Ecoreme.mp4'
import logo from '../image/ECOREME White PNG Logo.png'
function LogisticVideo (){

    return (
        <div>
            <div className=''>               
                <Video autoPlay
                    poster={logo}
                    onCanPlayThrough={() => console.log('video')} className=" w-full" >
                    <source src={media} type="video/webm"  width={400} className='w-full bg-white' />
                </Video>
                </div>
        </div>
    )
}


export default LogisticVideo