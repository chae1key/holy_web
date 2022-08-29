import React from 'react';
import styled from 'styled-components';

interface InputProps extends ElInputProps {
  _value: (number | string);
  _onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  _type?: string;
  _placeholder?: string;
  _dataitestid?: string;
}

type ElInputProps = {
  _width?: string;
  _height?: string;
  _margin?: string;
  _padding?: string;
  _border?: string;
  _borderBottom?: string;
  _fontSize?: string;
  _fontWeight?: string;
  _textAlign? : string;
}

const Input: React.FC<InputProps> = ({
  _value,
  _onChange,
  _type,
  _placeholder,
  _width,
  _height,
  _margin,
  _padding,
  _border,
  _borderBottom,
  _dataitestid,
  _fontSize,
  _fontWeight,
  _textAlign,
}) => {

  const styles = {
    _width,
    _height,
    _margin,
    _padding,
    _border,
    _borderBottom,
    _fontSize,
    _fontWeight,
    _textAlign,
  }

  return (
    <>
      <ElInput
        {...styles}
        type={_type}
        value={_value}
        onChange={_onChange}
        placeholder={_placeholder}
        data-testid={_dataitestid}
      />
    </>
  );
};

Input.defaultProps = {
  _type: "text",
  _onChange: () => { },
}

const ElInput = styled.input<ElInputProps>`
  ${(props) => (props._width ? `width: ${props._width};` : '')};
  ${(props) => (props._height ? `height: ${props._height};` : '')};
  ${(props) => (props._margin ? `margin: ${props._margin};` : '')}; 
  ${(props) => (props._padding ? `padding: ${props._padding};` : '')};
  ${(props) => (props._fontSize ? `font-size: ${props._fontSize};` : '')};
  ${(props) => (props._fontWeight ? `font-weight: ${props._fontWeight};` : '')};
  ${(props) => (props._border ? `border: ${props._border};` : '')};
  ${(props) => (props._borderBottom ? `border-bottom: ${props._borderBottom};` : '')};
  ${(props) => (props._textAlign ? `text-align: ${props._textAlign};` : '')};
  cursor: text;
`;

export default Input;