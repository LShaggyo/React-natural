import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import IconHeart from '../components/IconHeart';
import { UserContext } from '../context/UserContext';

const Favorites = () => {
  const { dataLiked } = useContext(UserContext);

  if (!dataLiked) {
    return null; 
  }

  return (
    <>
      {dataLiked.length === 0 ? (
        <h2>Seleccione Imagenes</h2>
      ) : (
        <div className="App">
          <h1>Fotos favoritas</h1>
          <div className="p-3 gallery grid-columns-4">
            {dataLiked.map((item) => (
              <Card key={item.id}>
                <Card.Img style={{ height: '14rem' }} variant="top" src={item.src.medium} />
                <IconHeart id={item.id} filled={item.liked} />
                <Card.Text style={{ position: 'absolute', color: 'white', top: '150px', left: '5px' }}>
                  {item.photographer}
                </Card.Text>
              </Card>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Favorites;
