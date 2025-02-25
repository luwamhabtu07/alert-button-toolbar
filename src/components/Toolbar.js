// src/components/Toolbar.js
import React from "react";
import AlertButton from "./AlertButton";

const Toolbar = () => {
  return (
    <div>
      <h2>Alert Button Toolbar</h2>
      <AlertButton message="Hello! You clicked Button 1">Click Me 1</AlertButton>
      <AlertButton message="Warning! Button 2 was clicked">Click Me 2</AlertButton>
      <AlertButton message="Success! Button 3 action completed">Click Me 3</AlertButton>
    </div>
  );
};

export default Toolbar;
