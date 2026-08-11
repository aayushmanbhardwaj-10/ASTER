import { useState, useCallback } from 'react';

export type FormErrors = {
  [key: string]: string | null;
};

export type FormValues = {
  [key: string]: string;
};

export const useFormValidation = (
  initialValues: FormValues,
  validate: (values: FormValues) => FormErrors
) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setValues(prev => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const handleBlur = useCallback(() => {
    const newErrors = validate(values);
    setErrors(newErrors);
    setIsValid(Object.values(newErrors).every(error => error === null));
  }, [values, validate]);

  const validateForm = useCallback(() => {
    const newErrors = validate(values);
    setErrors(newErrors);
    setIsValid(Object.values(newErrors).every(error => error === null));
    return isValid;
  }, [values, validate, isValid]);

  return {
    values,
    errors,
    isValid,
    handleChange,
    handleBlur,
    validateForm,
    setValues,
    setErrors,
  };
};
