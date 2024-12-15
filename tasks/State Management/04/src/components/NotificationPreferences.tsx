import React from "react";
import { NotificationPreferencesProps } from "../types/NotificationPreferences";
import { useFormValidation } from "../hooks/useFormValidation";
import "../App.css";
import { NOTIFICATION_CATEGORIES, NOTIFICATION_FREQUENCIES } from "../App";

export const NotificationPreferences: React.FC<NotificationPreferencesProps> = ({ onSubmit, initialValues }) => {
   const { values, errors, handleChange, isValid, handleSubmit } = useFormValidation(initialValues);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Notification Preferences</h2>
      <section>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" onChange={handleChange("email")} value={values.email} required />
        {errors?.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </section>

      <section>
        <label htmlFor="frequency">Частота: </label>
        <select name="frequency" id="frequency" onChange={handleChange("frequency")} value={values.frequency}>
          {NOTIFICATION_FREQUENCIES.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </section>

      <section>
        <label htmlFor="time">Time: </label>
        <input type="time" name="time" id="time" value={values.time} onChange={handleChange("time")} min="09:00" max="21:00" />
        {errors?.time && <p style={{ color: "red" }}>{errors.time}</p>}
      </section>

      <section>
        <label htmlFor="categories">Categories: </label>
        <select id="categories" onChange={handleChange("categories")} value={values.categories} multiple>
          {NOTIFICATION_CATEGORIES.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
          {errors?.categories && <p style={{ color: "red" }}>{errors.categories}</p>}
        </select>
      </section>

      <div>
        <label htmlFor="maxNotifications">Max notifications: </label>
        <input
          type="range"
          min={0}
          max={10}
          name="maxNotifications"
          id="maxNotifications"
          onChange={handleChange("maxNotifications")}
          value={values.maxNotifications}
        />
      </div>

      <button type="submit" disabled={!isValid}>
        Сохранить
      </button>

      {/* TODO: Add form fields */}
    </form>
  );
};
