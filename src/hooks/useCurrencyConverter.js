import { useEffect, useState } from "react";
import axios from "axios";

function useCurrencyConverter(baseValue) {
    const apiKey = process.env.REACT_APP_API_KEY;
    const [data, setData] = useState(null);
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.forexrateapi.com/v1/latest?api_key=${apiKey}&base=${baseValue}`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setData(null)
            }
        };
        fetchData();
    }, [baseValue]);

    return data;
}

export default useCurrencyConverter;
