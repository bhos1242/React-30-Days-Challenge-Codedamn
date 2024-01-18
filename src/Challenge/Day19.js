import { useState } from "react";
import styled from "styled-components";

const person = {
  name: "John Doe",
  age: 32,
  occupation: "Developer",
};

const address = {
  street: "1234 Main St",
  city: "San Francisco",
  state: "CA",
  zip: "94107",
};

export default function Day19() {
  const [activeTab, setActiveTab] = useState("person");

  const handleTabToggle = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container>
      <TabList>
        <Tab
          data-testid="person-tab"
          onClick={() => handleTabToggle("person")}
          active={activeTab === "person"}
        >
          Person
        </Tab>
        <Tab
          data-testid="address-tab"
          onClick={() => handleTabToggle("address")}
          active={activeTab === "address"}
        >
          Address
        </Tab>
      </TabList>
      <TabContent>
        {activeTab === "person" && (
          <PersonContainer data-testid="person-container">
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
            <p>Occupation: {person.occupation}</p>
          </PersonContainer>
        )}
        {activeTab === "address" && (
          <AddressContainer data-testid="address-container">
            <p>Street: {address.street}</p>
            <p>City: {address.city}</p>
            <p>State: {address.state}</p>
            <p>Zip: {address.zip}</p>
          </AddressContainer>
        )}
      </TabContent>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TabList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid lightgray;
`;

const Tab = styled.li`
  flex: 1;
  padding: 15px;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  color: ${(props) => (props.active ? "#fff" : "#555")};
  background-color: ${(props) => (props.active ? "#007bff" : "#f4f4f4")};
  transition: background-color 0.3s ease;
`;

const TabContent = styled.div`
  padding: 20px;
`;

const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #333;
`;

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #333;
`;
