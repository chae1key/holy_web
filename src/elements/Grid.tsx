import React from 'react';
import styled from 'styled-components';

interface GridProps extends StyleType {
  columns: (string | number)[];
  rows: (string | number)[][];
}

const Grid: React.FC<GridProps> = ({ 
  columns, 
  rows,
  _width,
  _height,
}) => {

  const styles = {
    _width: _width,
    _height: _height,
  }

  return (
    <ElTable {...styles}>
      <thead>
        <tr>
          {
          columns.map((column) => 
            {
              return <th key={column}>{column}</th>
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          rows.map((data, i) => {
            return (
              <tr key={i}>
                {
                  data.map((d, j) => {
                    return <td key={`d+${j}`}>{d}</td>
                  })
                }
              </tr>
            )
          })
        }
      </tbody>
    </ElTable>
  );
};

Grid.defaultProps = {
  columns: [],
  rows: [[]],
  _width: "100%",
  _height: "100%",
};

type StyleType = {
  _width: string;
  _height: string;
}

const ElTable = styled.table<StyleType>`
  ${(props) => (props._width ? `width: ${props._width};` : '')}
  ${(props) => (props._height ? `height: ${props._height};` : '')}
`;

export default Grid;