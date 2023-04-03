import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminHomePage = () => {
  const [showTrip, SetStateShowtrip] = useState([]);
  let navigate = useNavigate();
  const getTrip = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Felipe-Oliveira-hooks/trips"
      )
      .then((res) => {
        SetStateShowtrip(res.data.trips);
      });
  };
  useEffect(() => {
    getTrip();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      navigate("/Admin");
    }
  }, [navigate]);

  const Deletar = (id) => {
    const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/Felipe-Oliveira-hooks/trips/${id}`;
    const headers = {
      headers: {
        auth: window.localStorage.getItem("token"),
      },
    };
    axios.delete(URL, headers).then((resp) => {
      alert("deletado");
      console.log(resp);
    });
  };
  const redenrizar = showTrip.map((trip) => {
    return (
      <div key={trip.id}>
        <h2>{trip.name}</h2>
        <p>Descrição: {trip.description}</p>
        <p>Local: {trip.planet}</p>
        <p>Duração: {trip.durationInDays}</p>
        <p>Data: {trip.date}</p>
        <button onClick={() => navigate(`/AprovandoCandidato/${trip.id}`)}>
          Candidatos
        </button>
        <button onClick={() => Deletar(trip.id)}>Deletar</button>
      </div>
    );
  });

  return (
    <>
      <div>
        <h2>Detalhes da Viagem</h2>
        <div>{redenrizar}</div>
        <button onClick={() => navigate("/AdminCreateTrip")}>
          Criar Viagem
        </button>
        <button onClick={() => navigate("/")}>Logout</button>
      </div>
    </>
  );
};
export default AdminHomePage;
