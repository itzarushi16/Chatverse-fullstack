import React, { useEffect } from "react";

const TranslateWidget = () => {
  useEffect(() => {
    const initGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en" },
          "google_translate_element"
        );
      }
    };
    

    // If the script is already there, don’t add again
    if (!document.querySelector("#google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    }

    // Set callback globally once
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = initGoogleTranslate;
    }

    
    return () => {};
  }, []);

  return (
    <div
      id="google_translate_element"
      className="absolute top-2 right-2 p-2 z-50 bg-white bg-opacity-80 rounded-md shadow-md"
    />
  );
};

export default TranslateWidget;
