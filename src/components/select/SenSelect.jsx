import React from "react";


const SenSelect = ({options, defaultValue, value, onChange}) => {
  
  return (
    <div>
      <select
        value={value}
        onChange={event => onChange(event.target.value)}
      >
        <option disabled value="">{defaultValue}</option>\
        {options.map(option =>
            <option value={option.value}>
              {option.name}
            </option>
          )}
      </select>
    </div>
  )
}

export default SenSelect;