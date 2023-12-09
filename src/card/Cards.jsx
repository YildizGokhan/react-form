import { Card } from 'react-bootstrap';


function Cards({ user }) {
  const { username, email, firstname, lastname, image } = user
  console.log(username);
  return (
    <Card className='text-center mx-auto mt-6' style={{ width: '50%' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{username}</Card.Title>
        <Card.Text> {firstname} {lastname}</Card.Text>
      </Card.Body>
      <Card.Footer className='text-body-secondary'>
        {email}
      </Card.Footer>

    </Card>
  );
}

export default Cards;