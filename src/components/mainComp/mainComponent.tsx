import React from "react";

import MainInformation from "./mainInformation.tsx";
import StackInformation from "./stackInformation.tsx";

const Main: React.FC = () => {
  return (
    <div className="body_main">
      <div className="form_main">
        <p className="welcome_text">
          Добро пожаловать на мой проект-визитку,
          <p>нахожусь в поисках работы!</p>
        </p>
        <MainInformation />
        <StackInformation />
      </div>
    </div>
  );
};

export default Main;
