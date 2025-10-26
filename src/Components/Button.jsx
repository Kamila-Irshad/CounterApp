const Buttons = ({onChange, children, className}) =>{
    return(
        <>
        <button   className={` border rounded p-2 flex items-center text-center cursor-pointer  ${className}`}  onClick={onChange}>{children} </button>
        </>
    )
}
export default Buttons;