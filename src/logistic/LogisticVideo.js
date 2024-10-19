import 'react-html5video/dist/styles.css'
import {DefaultPlayer as Video} from 'react-html5video'
import media from '../image/video.mp4'
import logo from '../image/ECOREME White PNG Logo.png'
function LogisticVideo (){

    return (
        <div >
               <Video autoPlay
            poster={logo}
                 onCanPlayThrough={() => console.log('video')} className=" w-full bg-white" style={{height:"500px"}}>
                    <source src={media} type="video/webm"  width={400} height={200} className='w-full bg-white' />
                </Video>
        </div>
    )
}

export default LogisticVideo