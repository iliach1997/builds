export const Loader=({message='loading...'})=>{
    return (
       <div className="spinner-grow" style={{width:'4rem', height:'4rem'}}role="status">
          <span className="visually-hidden">{message} </span>
       </div>
    )
}