import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import WeaponsSkinsVideoModal from "./WeaponsSkinsVideoModal";

function WeaponSkinsCard({ skin, index }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var video = skin.levels[skin.levels.length - 1].streamedVideo;

  return skin.displayIcon != null &&
    skin.displayName.substring(0, 8) != "Standard" ? (
    <div class="carousel-item ">
      <p className="mt-1">{skin.displayName}</p>
      <img
        class="d-block w-100"
        src={skin.displayIcon}
        alt="Display Icon"
        onClick={handleShow}
      />

      <WeaponsSkinsVideoModal
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        skin={skin}
        video={video}
      />
    </div>
  ) : null;
}

export default WeaponSkinsCard;
