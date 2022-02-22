import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";

function Add(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [posterimg, setposterimg] = useState("");
  const [rate, setrate] = useState("");
  const [trailer, settrailer] = useState("");

  const Adding = () => {
    props.setmoviedata([
      ...props.moviedata,
      {
        title,
        description,
        posterUrl: posterimg,
        id: Math.random(),
        rate,
        trailer,
      },
    ]);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        You Can Add a Movie Here
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label> Insert Picture : </label>
          <input
            onChange={(e) => setposterimg(e.target.value)}
            value={posterimg}
          />{" "}
          <br /> <hr />
          <label> Insert Title : </label>
          <input
            onChange={(e) => settitle(e.target.value)}
            value={title}
          />{" "}
          <br /> <hr />
          <label>Insert Descripton : </label>
          <input
            onChange={(e) => setdescription(e.target.value)}
            value={description}
          />{" "}
          <br /> <hr />
          <label>Insert a rate : </label>
          <input onChange={(e) => setrate(e.target.value)} value={rate} />{" "}
          <br /> <hr />
          <label>insert Trailer URL : </label>
          <input onChange={(e) => settrailer(e.target.value)} value={trailer} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              Adding();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
