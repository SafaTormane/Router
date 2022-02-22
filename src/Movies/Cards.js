import React from "react";
import { ListGroupItem, Card, ListGroup } from "react-bootstrap";

function Cards({ el }) {
  return (
    <div>
      <Card
        style={{
          backgroundColor: "white",
          width: "20rem",
          textAlign: "center",
          boxShadow: "1px 1px 1px 1px",
          borderWidth: "15px",
        }}
      >
        <Card.Img
          variant="top"
          src={el.posterUrl}
          style={{ borderRadius: "20px" }}
        />
        <Card.Body>
          <Card.Title
            style={{
              fontSize: "25px",
              fontFamily: "cursive",
              fontWeight: "bolder",
              color: "rgb(119, 173, 204)",
            }}
          >
            {" "}
            {el.title}{" "}
          </Card.Title>
          <Card.Text
            style={{
              textAlign: "center",
              fontFamily: "monospace",
              color: "rgb(158, 158, 158)",
            }}
          >
            {el.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem
            style={{ backgroundColor: "white", color: "rgb(158, 158, 158)" }}
          >
            {" "}
            {el.id}{" "}
          </ListGroupItem>
          <ListGroupItem
            style={{ backgroundColor: "white", color: "rgb(158, 158, 158)" }}
          >
            {" "}
            {el.rate}{" "}
          </ListGroupItem>
          <ListGroupItem
            style={{ backgroundColor: "white", color: "rgb(158, 158, 158)" }}
          >
            {" "}
            {el.trailer}{" "}
          </ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
}

export default Cards;
