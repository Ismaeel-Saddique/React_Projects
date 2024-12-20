import { useEffect, useState } from "react";
function UseCurrencyInfo(currency) {
    const [data, setData] = useState({});
  
    useEffect(() => {
      fetch(`https://v6.exchangerate-api.com/v6/2699b9be60dc10691c563131/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res.conversion_rates))
        .catch((error) => {
          console.error("Error fetching currency data:", error);
          setData({});
        });
    }, [currency]);
  
    return data;
  }
  
  export default UseCurrencyInfo;