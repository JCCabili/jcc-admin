


export const Alert = (props) => {
  const {type, title, message} = props;

  
  const getStyle = () => {
    if (type === "error") {
      return "bg-red-100 border-l-4 border-red-500 text-red-700"
    }
    if (type === "warning") {
      return "bg-orange-100 border-l-4 border-orange-500 text-orange-700"
    }
    return "bg-blue-100 border-l-4 border-blue-500 text-blue-700"
  }

  return (
  <div className={`${getStyle()} p-4`} role="alert">
    {title && (<p className="font-bold">{title}</p>)}
    <p>{message}</p>
  </div>
  )
}