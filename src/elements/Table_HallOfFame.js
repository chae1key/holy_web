import React from "react";
import { BiFontSize } from "react-icons/bi";
import styled from "styled-components";

const StyledTable = styled.table`

  border: none;
  border-radius: 20px;
  border-collapse: collapse;
  border-collapse: separate;
  border-spacing: 20px 30px; 

  td,
  th {
    border: none;
  }

  td {
    padding: 5px 10px;
  }

  thead th {
    border-bottom: 1px solid rgba(0,0,0,0.3);
  }
`;
export default ({ data }) => (
  <TableMarkup titles={Object.keys(data[0])} data={data} />
);

const TableMarkup = ({ titles, data }) => (
  <StyledTable>
    <thead>
      <tr>
        <th style={{borderBottom: "none"}}></th>
        {titles.map((title, index) => (
          <th key={index}>{title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
            <td style={{
              color: "#fff",
              fontSize: "var(--font-lg-small)",
              fontWeight: 900,
              backgroundColor: "var(--color-main)",
              borderRadius: "20px",
              padding: "8px 15px"
            }}>{index+1}위</td>
          {titles.map((title, index) => (
            <td key={index}>{item[title]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </StyledTable>
);
