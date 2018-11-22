import React from 'react';
import { css } from 'react-emotion';
import P from 'prop-types';

const Input = ({
    type,
    id,
    value,
    placeholder,
    handleOnChange,
    style,
    required,
}) => (
    <input
        type={type}
        className={`form-control ${css(style)}`}
        id={id}
        value={value}
        onChange={handleOnChange}
        placeholder={placeholder}
        required={required}
    />
);

Input.propTypes = {
    type: P.string.isRequired,
    value: P.string.isRequired,
    style: P.shape({}),
    required: P.bool,
    id: P.string,
    placeHolder: P.string,
    handleChange: P.func,
};

export default Input;
