
import { BsBag } from "react-icons/bs";

import { CgProfile } from "react-icons/cg";

function Head(){

 


 
    return(
        <div>
            <nav className="nav-bar">
                <ul className="nav-li">

                    <div className="li-1">
                        <li><h2>UDEMY</h2></li>
                        <li>Keşfedin</li    >
                    </div>

                    <div className="li-2">
                        <li>Udemy business</li>
                        <li>Udemy de eğitim verin</li>
                        <li>Öğrenim içeriğim</li>
                        <li><span><BsBag /></span></li>
                        <li><span><CgProfile/></span></li>  
                    </div>



                    

                </ul>
            </nav>
        </div>
    )

}


export default Head;