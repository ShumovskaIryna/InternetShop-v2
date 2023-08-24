import React from 'react'

function Currency(props) {
  return (
          <div className="currencies">
            { props.allCurrency.currencies.map((el, index) => (
            <div
              className="currency-name"
              key={index}
              onClick={() => props.chooseCurrency(el.label)}
              >
              <label>{el.label + el.symbol}</label>
            </div>
          ))}
        </div>
  )
}
export default Currency