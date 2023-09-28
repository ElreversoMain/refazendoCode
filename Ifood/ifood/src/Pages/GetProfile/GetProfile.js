import React, { useContext, useEffect } from "react";
import GlobalStateContext from "../../GlobalStateContext/GlobalStateContext";
import { useNavigate } from "react-router-dom";

const GetProfile = () => {
  const { profile, setStateProfile, GetProfiles, orderHistory, ordersHistory,  isLoading,
    setIsLoading} =
    useContext(GlobalStateContext);
  const navigate = useNavigate();

  useEffect(() => {
    GetProfiles();
  },[]);

  useEffect(()=>{
    ordersHistory()
  
  },[])

  const renderOrders =orderHistory && orderHistory.map((order) =>{
    return(
      <div key={order.createAt}>
        <div>{order.restaurantName}</div>
        <h3><b>SUBTOTAL R$</b>{order.totalPrice.toFixed(2).replace(".", ",")}</h3>
      </div>
    )
  })

  return (
    <div>
      <div>
        <h1>Dados da conta</h1>
      </div>
      <div>{profile.id}</div>
      <div>
        <a> Nome: {profile.name}</a>
      </div>
      <div> Email: {profile.email}</div>
      <div>CPF: {profile.cpf}</div>
      <div> Endereço: {profile.address}</div>
      <div>Atualizar Perfil</div>
      <div><button onClick={()=>navigate("/UpdateProfile")}>Atualizar Perfil</button></div>
      {renderOrders}
    </div>
    
  );
};
export default GetProfile;
