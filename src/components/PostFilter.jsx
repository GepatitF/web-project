import React from "react"

import SenInput from "./input/SenInput"
import SenSelect from "./select/SenSelect"

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
        <SenInput
          value={filter.query}
          onChange={(e) => setFilter({...filter, query: e.target.value})}
          placeholder="Search..."
        />
        <SenSelect
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue="Sort by"
          options={[
            { value: "title", name: "By name" },
            { value: "body", name: "By text" },
          ]}
        />
      </div>
  )
}

export default PostFilter