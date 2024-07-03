import React from "react";

export const EmailTemplate = ({ firstName, message }) => (
  <div>
    <h1>Hello {firstName},</h1>
    <p>{message}</p>
  </div>
);
