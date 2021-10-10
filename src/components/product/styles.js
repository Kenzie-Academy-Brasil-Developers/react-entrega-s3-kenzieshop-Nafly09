import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 25rem;
  max-width: 190px;
  min-width: 190px;
  padding: 10px;
  border: 1px solid #ddd;
  margin: 10px;
  border-radius: 8px;
  background-color: aliceblue;
  color: cadetblue;
  font-weight: bold;
  cursor: pointer;
  font-size: 15px;

  > img {
    height: 130px;
    width: 130px;
    object-fit: cover;
  }
`;
