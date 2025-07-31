import React, { type ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title = "",
}) => {
  if (isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-lg">
        {title && <h2 className="text-lg font-semi-bold mb-4">{title}</h2>}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          x
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;

{
  /* <div className="p-4">
        <Button
          className="px-4 py-2 text-white rounded"
          label="Open Modal"
          onClick={() => setIsModalOpen(true)}
        />
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Confirm Action"
        >
          <p>Are you sure you want to continue?</p>
          <div className="mt-4 flex justify-end gap-2">
            <Button
              onClick={() => setIsModalOpen(false)}
              className="px-3 py-1 bg-gray-200 rounded"
              label="cancel"
            />
          <Button label="Confirm" className="px-3 py-1  text-white rounded" />
          </div>
        </Modal>
      </div> */
}
