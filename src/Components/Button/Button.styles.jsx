import styled from "styled-components";

export const LoadMore = styled.button`
  display: block;
  border: 1px solid black;
  margin: 5rem 0;
  padding: 1rem 3.75rem;
  font-size: 1.5rem;
  background-color: white;
  color: black;
  font-weight: 500;
  text-transform: uppercase;
  font-family: $montserrat;
  cursor: pointer;
  box-shadow: -2px 2px 2px 1px #ffd200;
  // border-radius: 0.25em;
  transition: all 0.5s ease-in-out;
  &:focus {
    outline: 0;
  }
  &:hover {
    box-shadow: -12px 12px 2px 1px #ffd200;
  }
`;
