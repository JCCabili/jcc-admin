export const Button = (props) => {
  return (
    <div className="flex items-center py-2">
      <button {...props} className={`w-full shadow ${props.variant || "bg-primary"} hover:${props.variant || "bg-primary"}-hover focus:shadow-outline focus:outline-none ${props.variant ==="default"? "text-gray-darker": "text-white" } font-normal py-3 px-4 rounded-lg`}
      type={props.type || "button"}>
       <div className="flex flex-row items-center justify-center">
        {props.icon && (<div className="pr-3">{props.icon}</div>)}
        <div>{props.label}</div>
       </div>
      </button>
    </div>
  )
}

export default Button;