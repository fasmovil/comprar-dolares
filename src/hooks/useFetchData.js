import { useEffect, useState} from 'react';
import { getData} from '../helpers/getData';

export const useFetchData = () => {
  const [state, setstate] = useState({
    time_last_update_unix: 0,
    time_last_update_utc: '',
    conversion_rate: 0.0,
    
  });

  useEffect(()=>{
    getData()
      .then((obj)=>{
        setstate({
          time_last_update_unix: obj.time_last_update_unix,
          time_last_update_utc: obj.time_last_update_utc,
          conversion_rate: obj.conversion_rate
          
        })
      });
  }, []);

  return state;
}