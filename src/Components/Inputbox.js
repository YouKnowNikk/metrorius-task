// InputBox.js

import React, { useId } from 'react';
import './inputbox.css';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'usd',
  amountDisable = false,
  currencyDisable = false,
  BaseValue,
}) {
  const amountInputId = useId();

  return (
    <div className="input-box-container">
      <div className="input-container">
        <div>
          <label htmlFor={amountInputId} className="input-label">
            {label}
          </label>
        </div>
        <div>
          <input
            id={amountInputId}
            className="input-field"
            type="number"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          />
        </div>
      </div>
      <div className="currency-container">
        <p className="currency-label">Currency Type</p>
        <select
          className="currency-select"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {label === 'From' ? <option>{BaseValue}</option> : null}
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
