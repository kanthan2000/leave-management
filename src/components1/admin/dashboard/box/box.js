 import './box.css'
 const Box = (props)=>{
     return(
         <div className='box'>
            {props.children}
         </div>
     )
 }
 export default Box;