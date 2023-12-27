import { useDispatch } from "react-redux"
import { FilterDiv } from "./Filter.styled"

import { findContact } from "../../redux/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch(); 

  return (
        <FilterDiv>
      <input
        type="text"
        onChange={evt => dispatch(findContact(evt.target.value))}
        placeholder="filter"
      />
    </FilterDiv>
    )
};