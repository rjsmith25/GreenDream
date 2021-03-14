import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function RoomDetailModal({ children }) {
  const elRef = useRef(null);
  if (!elRef.current) {
    const div = document.createElement("div");
    div.classList.add("room-detail-modal");
    elRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, []);

  return createPortal(children, elRef.current);
}

export default RoomDetailModal;
