import React from 'react';
import styled from 'styled-components';

interface ButtonProps extends ElButtonProps {
  children?: JSX.Element[] | string | JSX.Element | number;
  id?: string;
  _onClick?: () => any;
}

type ElButtonProps = {
  _margin?: string;
  _padding?: string;
  _width?: string;
  _height?: string;
  _fontSize? : string;
  _fontWeight?: string;
  _bgc?: string;
  _border?: string;
  _borderRadius?: string;
  _color?: string;
  _position?: string;
  _top?: string;
  _left?: string;
  _bottom?: string;
  _right?: string;
  _hvBgc?: string;
  _hvColor?: string;
  _hvBorder?: string;
  _borderBottom?: string;
  _hvBorderBottom? : string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  id,
  _onClick,
  _margin,
  _padding,
  _width,
  _height,
  _fontSize,
  _fontWeight,
  _bgc,
  _border,
  _borderRadius,
  _color,
  _position,
  _top,
  _left,
  _bottom,
  _right,
  _hvBgc,
  _hvColor,
  _hvBorder,
  _borderBottom,
  _hvBorderBottom,
}) => {
  const styles = {
    _margin,
    _padding,
    _width,
    _height,
    _bgc,
    _borderRadius,
    _color,
    _fontSize,
    _fontWeight,
    _border,
    _position,
    _top,
    _left,
    _bottom,
    _right,
    _hvBgc,
    _hvColor,
    _hvBorder,
    _borderBottom,
    _hvBorderBottom,
  }

  return (
    <>
      <ElButton {...styles} id={id} onClick={_onClick}>
        {children}
      </ElButton>
    </>
  );

};

Button.defaultProps = {
  _onClick: () => {},
  _margin: "",
  _padding: "2px 10px",
};

const ElButton = styled.button<ElButtonProps>`
  ${(props) => (props._position ? `position: ${props._position};` : '')};
  ${(props) => (props._top ? `top: ${props._top};` : '')};
  ${(props) => (props._right ? `right: ${props._right};` : '')};
  ${(props) => (props._bottom ? `bottom: ${props._bottom};` : '')};
  ${(props) => (props._left ? `left: ${props._left};` : '')};
  ${(props) => (props._margin ? `margin: ${props._margin};` : '')}; 
  ${(props) => (props._padding ? `padding: ${props._padding};` : '')};
  ${(props) => (props._width ? `width: ${props._width};` : 'height: 34px')};
  ${(props) => (props._height ? `height: ${props._height};` : '')};
  ${(props) => (props._fontSize ? `font-size: ${props._fontSize};` : 'font-size: var(--font-main)')};
  ${(props) => (props._fontWeight ? `font-weight: ${props._fontWeight};` : 'font-weight: 800')};
  ${(props) => (props._color ? `color: ${props._color};` : 'color: #fff')};
  ${(props) => (props._bgc ? `background-color: ${props._bgc};` : 'background-color: var(--color-main)')};
  ${(props) => (props._border ? `border: ${props._border};` : 'border: none;')};
  ${(props) => (props._borderBottom ? `border-bottom: ${props._borderBottom};` : '')};
  ${(props) => (props._borderRadius ? `border-radius: ${props._borderRadius};` : 'border-radius: 40px;')};
  
  &:hover {
    ${(props) => (props._hvBgc ? `background-color: ${props._hvBgc};` : 'background-color: #ddd;')};
    ${(props) => (props._hvColor ? `color: ${props._hvColor};` : 'color: #fff;')};
    ${(props) => (props._hvBorder ? `border: ${props._hvBorder};` : 'border: #fff;')};
    ${(props) => (props._hvBorderBottom ? `border-bottom: ${props._hvBorderBottom};` : '')};
  }
`;

export default Button;