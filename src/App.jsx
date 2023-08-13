import { useEffect, useState } from "react"
import "./App.css"
import CurrencyInput from "./CurrencyInput"
import data from "./assets/data.json"

function App() {
  const [amountOne, setAmountOne] = useState(1)
  const [amountTwo, setAmountTwo] = useState(1 / data.rates.USD)
  const [currencySymbolTwo, setCurrencySymbolTwo] = useState("USD")
  const [currencyRates, setCurrencyRates] = useState([])

  useEffect(() => {
    data ? setCurrencyRates(data.rates) : setCurrencyRates(null)
  }, [])

  //helper functions
  const handleAmountOneChange = amountOne => {
    setAmountTwo(amountOne / currencyRates[currencySymbolTwo])
    setAmountOne(amountOne)
  }

  const handleAmountTwoChange = amountTwo => {
    setAmountOne(amountTwo * currencyRates[currencySymbolTwo])
    setAmountTwo(amountTwo)
  }

  const currencySymbolTwoChange = currencySymbolTwo => {
    setAmountTwo(1)
    setAmountOne(amountTwo * currencyRates[currencySymbolTwo])
    setCurrencySymbolTwo(currencySymbolTwo)
  }

  return (
    <>
      <h1>Currency Converter</h1>
      <p>
        Convert from one currency to another.
      </p>
      <br/>

      <h2>{Math.round(amountTwo *1000)/1000} {currencySymbolTwo} equals</h2> <h1>{Math.round(amountOne *1000)/1000} Indian Rupees</h1>


      <CurrencyInput
        amount={amountOne}
        currencySymbol={["INR"]}
        currencyList={Object.keys(currencyRates)}
        onAmountChange={handleAmountOneChange}
        onSymbolChange={""}
        classN={"currency-input-one"}
      />
      <br />
      <CurrencyInput
        amount={amountTwo}
        currencySymbol={currencySymbolTwo}
        currencyList={Object.keys(currencyRates)}
        onAmountChange={handleAmountTwoChange}
        onSymbolChange={currencySymbolTwoChange}
        classN={"currency-input-two"}
      />
    </>
  )
}

export default App
