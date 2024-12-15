import { useState, useCallback } from "react";
import { NotificationPreferencesForm, NotificationPreferencesErrors, NotificationCategory } from "../types/NotificationPreferences";

export const useFormValidation = (initialValues: Partial<NotificationPreferencesForm> = {}) => {
  const [values, setValues] = useState<Partial<NotificationPreferencesForm>>(initialValues);
  const [errors, setErrors] = useState<NotificationPreferencesErrors>({})
  const [isValid, setIsValid] = useState<boolean>(false)

  const validateField  = (field: string, value: any) => {
    const validateEmail = (email: string) => {
      const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegEx.test(email)) {
        return 'Некорректный email'
      }
      return ''
    }

    const validateTime = (time: string) => {
      return time >= '09:00' && time <= '21:00' ? '' : 'Время должно быть между 09:00 и 21:00'
    }

    const validateCategories = (categories: NotificationCategory[]) => {
      return categories.length === 0 ? 'Выберите хотя бы одну категорию' : '';
    };

    switch (field) {
      case 'email': return validateEmail(value)
      case 'categories': return validateCategories(value)
      case 'time': return validateTime(value)
      default: return ''
    }
  }
  
  const handleChange = useCallback((field: string) => (e: any) => {
    if(field === 'categories') {
      const getCategories = (state: Partial<NotificationPreferencesForm>) => {
        return !state.categories?.includes(e.target.value) ? [...(state.categories || []), e.target.value] : (state.categories || []).filter((item: string) => item !== e.target.value)
      }

      setValues((prev) => ({
        ...prev,
        categories: getCategories(prev),
      }))
      return
    }
       setValues((prev) => ({
      ...prev,
      [field]: e.target.value,
    }))

    
    const error = validateField(field, e.target.value)
    setIsValid(!error)

    setErrors(prev => ({
      ...prev,
      [field]: error
    }))

  }, [setValues, setErrors])
  
  const handleSubmit = (onSubmit: (data: NotificationPreferencesForm) => void) => (e: any) => {
    e.preventDefault()
    if(isValid) {
      onSubmit(values as NotificationPreferencesForm)
    }
  }

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    isValid,
  };
};
