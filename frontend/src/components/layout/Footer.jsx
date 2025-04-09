import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-1 pt-5">
      <p class="text-center mt-1 fw-bold">
        DesiWasa - 2021-{currentYear}, All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
