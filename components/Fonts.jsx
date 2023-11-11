import React from "react";

const Fonts = ({ children }) => {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;500;600;700&family=Lato:wght@400;700&family=Poppins:wght@400;500;700&display=swap"
        rel="stylesheet"
      ></link>
      {children}
    </div>
  );
};

export default Fonts;
