import { Badge, Card, Button } from "react-bootstrap";
import { useState } from "react";
const BookItem = ({
  title,
  author,
  rating,
  pageCount,
  imageUrl,
  available,
  onSelectedBook,
}) => {
  const [newTitle, setNewTitle] = useState(title);
  const clickHandler = () => {
    setNewTitle("Actualizado");
    console.log("clicked");
    onSelectedBook(title);
  };
  console.log("BookItem evaluado por React");
  return (
    <Card style={{ width: "22rem" }} className="mx-3">
      <Card.Img
        height={400}
        variant="top"
        src={imageUrl !== "" ? imageUrl : ""}
      />
      <Card.Body>
        <div className="mb-2">
          {available ? (
            <Badge bg="success">Disponible</Badge>
          ) : (
            <Badge bg="danger">Reservado</Badge>
          )}
        </div>
          <Card.Title>{newTitle}</Card.Title>
          <Card.Subtitle>{author}</Card.Subtitle>
        <div>
          {Array.from({length:5}, (_, index) => 
            index > rating ? (
              <StarFill key={index} className='text-warning' />
            ) : (
              <Star key={index} className='text-warning' />
            )
          )}
        </div>
        <p>{pageCount} paginas</p>
        <Button onClick={clickHandler}>Seleccionar libro</Button>
        <Button style={{marginLeft: '10px'}} variant="danger"> 
          
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BookItem;
