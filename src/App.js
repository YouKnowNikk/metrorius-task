import {  useEffect, useState } from 'react'
import {InputBox} from './Components'
import useCurrencyConverter from './hooks/useCurrencyConverter'
import './App.css'
function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("INR")
  const [convertedAmount, setConvertedAmount] = useState(0)

 const currencyInfo = useCurrencyConverter(from);
 const options = Object.keys(currencyInfo?.rates || [] );
 const BaseValue = currencyInfo?.base;

  console.log(currencyInfo);
  const convert = () => {
    const result = amount * currencyInfo?.rates[to];
    const roundedResult = parseFloat(result.toFixed(2)); 
    setConvertedAmount(roundedResult);
  }
  useEffect(() => {
    convert();
  }, []);
  
  return (
    <div
        className="main-container"
    >
        <div className="">
            <div className="">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                            BaseValue = {BaseValue}
                        />
                    </div>
                  
                    <div className="">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                            
                        />
                    </div>
                    <button type="submit" className="">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App