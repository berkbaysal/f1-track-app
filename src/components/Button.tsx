import {} from 'react'
import "./Button.scss"

interface IProps{
    label:string
}

const Button:React.FC<IProps> = ({label}) => {
  return (
    <div className="button">{label}</div>
  )
}

export default Button