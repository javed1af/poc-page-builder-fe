import React from "react";
import { Feather, Star, Heart, Coffee } from "lucide-react"; // Import icons directly
import styles from "./styles.css";

// Map the imported icons
const icons = {
  Feather: <Feather />,
  Star: <Star />,
  Heart: <Heart />,
  Coffee: <Coffee />,
};

const iconOptions = Object.keys(icons).map((iconName) => ({
  label: iconName,
  value: iconName,
}));

export const Card = {
  fields: {
    title: { type: "text" },
    description: { type: "textarea" },
    icon: {
      type: "select",
      options: iconOptions,
    },
    mode: {
      type: "radio",
      options: [
        { label: "card", value: "card" },
        { label: "flat", value: "flat" },
      ],
    },
  },
  defaultProps: {
    title: "Title",
    description: "Description",
    icon: "Feather",
    mode: "flat",
  },
  render: ({ title, icon, description, mode }) => {
    return (
      <div className={`${styles.Card} ${styles[mode]}`}>
        <div className={styles.icon}>{icons[icon]}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    );
  },
};
