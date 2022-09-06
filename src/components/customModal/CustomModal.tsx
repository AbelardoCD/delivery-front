import * as React from "react";
import Modal from "@mui/material/Modal";

const CustomModal = ({
  setOpenModal,
  openModal,
  children,
}: {
  openModal: boolean;
  setOpenModal: (e: boolean) => void;
  children: React.ReactNode;
}) => {
  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <div>
      <Modal open={openModal} onClose={handleClose} className="modal">
        <div>{children}</div>
      </Modal>
    </div>
  );
};

export default CustomModal;
