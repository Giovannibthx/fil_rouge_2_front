import { useState } from "react";
import PropTypes from "prop-types";

import { Input } from "@nextui-org/react";
import { Icon } from '@iconify/react';

const PasswordField = ({ onChange, className, size, isRequired, variant }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
    label="Password"
      variant={variant || null}
      name="password"
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <Icon icon="mdi:eye" className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <Icon icon="mdi:eye-off" className="text-2xl text-default-400 pointer-events-none" />
            )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className={className || ""}
      size={size || "md"}
      onChange={onChange || null}
      isRequired={isRequired || false}
    />
  );
};

PasswordField.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  size: PropTypes.string,
  isRequired: PropTypes.bool,
  variant: PropTypes.string,
  defaultValue: PropTypes.string
};

export default PasswordField;

