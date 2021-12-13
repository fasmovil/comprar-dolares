import React, {useState} from 'react';
import { useFetchData } from './hooks/useFetchData';



export const App = () => {


  const data = useFetchData();
  const fecha = new Date(data.time_last_update_utc).toLocaleString('es-AR');
  
  const conversion_rate = data.conversion_rate;
  const impuestoPais = 0.30;
  const impuestoAfip = 0.35;
  
  const [usd, setUsd] = useState(0);
  const [ars, setArs] = useState(0);
  const [pais, setPais] = useState(0);
  const [afip, setAfip] = useState(0);
  const [total, setTotal] = useState(0);
  
  const handleSubmit = () => {

  }

  const handleInputUsd = (e) => {
    const valor = parseFloat(e.target.value);
    const dolares = valor;
    const pesos = valor * conversion_rate;
    const impPais = pesos * impuestoPais;
    const impAfip = pesos * impuestoAfip;
    setUsd(dolares);
    setArs(pesos);
    setPais(impPais);
    setAfip(impAfip);
    setTotal(pesos + impPais + impAfip);
  }

  return (
    <div className='card'>
      <h1>Comprar Dólares</h1>
      
      <p className='notas'>1 USD = {data.conversion_rate.toFixed(2)} ARS (consultado el {fecha})</p>
      

      <form onSubmit={handleSubmit}>
        <input 
          type="number"
          min="0"
          value={usd}
          onChange={handleInputUsd}
          placeholder="Ingrese cantidad de USD" />
      </form>
      
      <p className="total">TOTAL: {total.toFixed(2)}</p>

      <p className="detalle">Pesos al Valor Oficial: {ars.toFixed(2)}</p>
      <p className="detalle">Impuesto País (30%): {pais.toFixed(2)}</p>
      <p className="detalle">Impuesto AFIP (35%): {afip.toFixed(2)}</p>
      
      
    </div>
  )
}


