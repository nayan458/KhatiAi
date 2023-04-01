import khetiLogo from '../logo/kheti-logo.svg'
import '../../index.css'


function KhetAI(){
    return(
        <div>
            <img  className='kheti-logo' src={khetiLogo} alt="kheti-ai-logo" />
            <h1>kheti.ai</h1>
        </div>
    )
}

export default KhetAI