import React, { useState } from 'react'
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

 //custom select
 const DropDownContainer = styled("div")`
    position: relative;
`;

const DropDownHeader = styled("div")`
  font-weight: 500;
  cursor: pointer;
  color: white;
  border: 1px solid transparent;

  &.focus {
    border: 1px solid #c99400;
    border-radius: 10px;
  }
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  position: absolute;
  left: 0;
  width: 100%;
  margin: 0;
  background: #23304e;
  box-shadow: 1px 1px 4px 0px black;
  color: #ffffff;
  padding: 0.85rem 0;
  margin-top: 1px;
  z-index: 10;
`;

const ListItem = styled("li")`
  list-style: none;
  cursor: pointer;
  padding: 5px 0;
  text-align: center;

  &:hover {
    background-color: #e6a41c54;
  }
`;

const Select = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(props.options[0]);
    const toggling = () => setIsOpen(!isOpen);
    const onOptionClicked = value => () => {
      setSelectedOption(value);
      setIsOpen(false);
    };

    return (
        <DropDownContainer style={{fontSize:props.fontSize}}>
            <DropDownHeader onClick={toggling} className={isOpen ? "focus" : ''}>
                {
                    (props.indicatorPos)==='right'? 
                    <div className="d-flex justify-content-center align-items-center gap-1 py-2 px-3">
                        {selectedOption} 
                        <FontAwesomeIcon icon={faAngleDown}/>
                    </div>
                    : 
                    <div className="d-flex justify-content-center align-items-center gap-1 p-1">
                        <FontAwesomeIcon icon={faAngleDown}/>
                        {selectedOption}
                    </div>
                }
            </DropDownHeader>
            {isOpen && (
              <DropDownListContainer>
                <DropDownList>
                  {props.options.map(option => (
                    (option === selectedOption)?
                    <ListItem onClick={onOptionClicked(option)} key={Math.random()} className="selected-option">
                      {option}
                    </ListItem> :

                    <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                      {option}
                    </ListItem>
                ))}
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownContainer>
    )
}

export default Select;