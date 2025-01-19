import { useNavigate } from "react-router-dom"

const OrderConfirmation = () => {
  const navigate = useNavigate();

  const handleNavigate = ()=>{
    navigate('/')
  }
  return (
    <div>
      <h2>Order Confirmation Succesful</h2>
      <button onClick={handleNavigate}>Go back</button>
    </div>
  )
}

export default OrderConfirmation