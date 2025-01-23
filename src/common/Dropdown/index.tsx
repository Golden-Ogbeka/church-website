import React from 'react';
import Select, { StylesConfig } from 'react-select';

function Dropdown({
  containerStyle = {},
  values,
  isMulti = false,
  formik,
  label,
  name,
  placeholder = 'Enter Value',
  useFormik = true,
  className = '',
  onChange,
  showError,
  error,
  labelClass,
  ...props
}: {
  containerStyle?: React.CSSProperties;
  values: { label: string; value: string | boolean | number }[];
  isMulti?: boolean;
  formik?: any;
  label?: string;
  name: string;
  placeholder?: string;
  showError?: boolean;
  error?: string;
  useFormik?: boolean;
  onChange?: (e: any) => void;
  className?: string;
  labelClass?: string;
  [x: string]: any;
}) {
  // Define styles with correct types
  const customStyles: StylesConfig = {
    container: (provided, state) => ({
      ...provided,
      width: '100%',
      color: '#000',
      ...containerStyle,
    }),
    control: (provided, state) => ({
      ...provided,
      paddingBlock: 8,
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#CFCFCF',
      fontStyle: 'italic',
    }),
  };

  return (
    <div className={'w-full flex flex-col gap-[5px] ' + className}>
      {useFormik ? (
        <>
          {label && (
            <label
              htmlFor={name}
              className={
                `dark:text-white ${
                  formik.touched[name] && formik.errors[name] ? 'errorText' : ''
                } ` + labelClass
              }
            >
              {label}
            </label>
          )}

          <Select
            options={values.map((value) => ({
              label: value.label,
              value: value.value,
            }))}
            onChange={(e: any) => {
              formik.setFieldValue(name, e ? e.value : undefined);
            }}
            onBlur={() => {
              formik.setFieldTouched(name, true);
            }}
            id={name}
            styles={customStyles} // Use the defined styles here
            isClearable
            placeholder={placeholder}
            escapeClearsValue
            backspaceRemovesValue
            noOptionsMessage={() => 'No option found at the moment'}
            isMulti={isMulti}
            {...props}
          />
          {formik.touched[name] && formik.errors[name] && (
            <div className='error'>{formik.errors[name]}</div>
          )}
        </>
      ) : (
        <>
          <label
            htmlFor={name}
            className={`dark:text-white ${showError ? 'errorText' : ''} ` + labelClass}
          >
            {label}
          </label>

          <Select
            options={values.map((value) => ({
              label: value.label,
              value: value.value,
            }))}
            onChange={onChange}
            id={name}
            styles={customStyles} // Use the defined styles here
            isClearable
            placeholder={placeholder}
            escapeClearsValue
            backspaceRemovesValue
            noOptionsMessage={() => 'No option found at the moment'}
            isMulti={isMulti}
            {...props}
          />
          {showError && <div className='error'>{error}</div>}
        </>
      )}
    </div>
  );
}

export default Dropdown;

