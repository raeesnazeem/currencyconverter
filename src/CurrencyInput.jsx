const CurrencyInput = props => {
  const {
    amount,
    currencySymbol,
    currencyList,
    classN,
    onAmountChange,
    onSymbolChange,
  } = props

  return (
    <>
      <input value={amount} onChange={e => onAmountChange(e.target.value)} />
      <select
        className={classN}
        name={currencySymbol}
        value={currencySymbol}
        onChange={e => onSymbolChange(e.target.value)}
      >
        {currencyList.map((currency, index) => {
          return (
            <option value={currency} key={index}>
              {currency}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default CurrencyInput
