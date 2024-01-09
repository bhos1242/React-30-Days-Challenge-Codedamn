import React, { useState } from "react";
import styled from "styled-components";

const Day06 = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: "Dogs", checked: false },
    { id: 2, label: "Cats", checked: false },
    { id: 3, label: "Cows", checked: false },
    { id: 4, label: "Deers", checked: false },
  ]);

  const handleClick = (index) => {
    setCheckboxes((prevCheckboxes) => {
      const updatedCheckboxes = [...prevCheckboxes];
      updatedCheckboxes[index] = {
        ...updatedCheckboxes[index],
        checked: !updatedCheckboxes[index].checked,
      };
      return updatedCheckboxes;
    });
  };

  const handleSelectAll = () => {
    setCheckboxes((prevCheckboxes) => {
      return prevCheckboxes.map((checkbox) => ({
        ...checkbox,
        checked: true,
      }));
    });
  };

  const handleDeSelectAll = () => {
    setCheckboxes((prevCheckboxes) => {
      return prevCheckboxes.map((checkbox) => ({
        ...checkbox,
        checked: false,
      }));
    });
  };

  return (
    <Container className="p-4 mt-8 space-y-4 bg-white rounded-md shadow-md">
      <CheckboxContainer>
        {checkboxes.map((checkbox, index) => (
          <CheckboxLabel
            key={checkbox.id}
            className="flex items-center space-x-2"
          >
            <input
              data-testid={`checkbox-${index + 1}`}
              type="checkbox"
              checked={checkbox.checked}
              onClick={() => handleClick(index)}
              className="cursor-pointer"
            />
            <span className="text-gray-800">{checkbox.label}</span>
          </CheckboxLabel>
        ))}
      </CheckboxContainer>
      <SelectAllButton
        data-testid="button"
        onClick={handleSelectAll}
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700"
      >
        Select All
      </SelectAllButton>
      <SelectAllButton
        data-testid="button"
        onClick={handleDeSelectAll}
        className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-700"
      >
        DeSelect All
      </SelectAllButton>
    </Container>
  );
};

export default Day06;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin: 24px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const SelectAllButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
