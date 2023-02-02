import React from "react";

import { setModalHide } from "../redux/modalSlice.tsx";
import { removeText } from "../redux/textSlice/modalText.tsx";
import { useAppSelector, useAppDispatch } from "../TS/customHooks.tsx";

const Modal: React.FC = (stack) => {
  const active = useAppSelector((state) => state.modal.modalActive);
  const valueText = useAppSelector((state) => state.text.textValue);

  const dispatch = useAppDispatch();
  return (
    <div
      className={active ? "modal_window active" : "modal_window"}
      onClick={() => {
        dispatch(setModalHide());
        dispatch(removeText());
      }}
    >
      <div className="block_info" onClick={(e) => e.stopPropagation()}>
        <p>{valueText}</p>
      </div>
    </div>
  );
};

export default Modal;
