import {FaListAlt} from 'react-icons/fa';



export default function FlyMenu() {

   const HandleMenu =(evt)=>{
    console.log(); 
    }
    return (
        <div className="flymenu">
            <span onClick={HandleMenu}> 
            <FaListAlt/>

            </span>
        </div>
    )
}


