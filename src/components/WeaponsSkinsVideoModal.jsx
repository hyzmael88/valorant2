import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";

function WeaponsSkinsVideoModal({
  handleClose,
  handleShow,
  show,
  video,
  skin,
}) {
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{skin.displayName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {video != null ? (
            <ReactPlayer
              url={video}
              controls
              playing={true}
              width="100%"
              height="100%"
            />
          ) : (
            <p>Esta skin no cuenta con video disponible</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WeaponsSkinsVideoModal;
