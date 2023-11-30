import { useState, useContext } from "react";
import Card from 'react-bootstrap/Card';
import IconHeart from "./IconHeart";
import { UserContext } from "../context/UserContext";

const Gallery = ({ data }) => {
  const { dataLiked, setFilled, setDataLiked } = useContext(UserContext);
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  const handleImageClick = (id) => {
    // Verificar si la foto ya está seleccionada
    const isSelected = selectedPhotos.includes(id);

    // Actualizar la lista de fotos seleccionadas
    if (isSelected) {
      setSelectedPhotos((prevSelected) => prevSelected.filter((photoId) => photoId !== id));
    } else {
      setSelectedPhotos((prevSelected) => [...prevSelected, id]);
    }
   
    setFilled(selectedPhotos.includes(id));

    setDataLiked(data.filter((item) => selectedPhotos.includes(item.id)));
  };

  return (
    <div className="gallery grid-columns-5 p-3">
      {data.map((item) => (
        <Card key={item.id}>
          <Card.Img
            style={{ height: '14rem', cursor: 'pointer' }}
            variant="top"
            src={item.src.original}
            onClick={() => handleImageClick(item.id)}
          />
          <IconHeart id={item.id} filled={selectedPhotos.includes(item.id)} />
          <Card.Text style={{ position: 'absolute', color: 'white', top: '150px', left: '5px'}}>
            {item.photographer}
          </Card.Text>
        </Card>
      ))}
    </div>
  );
};

export default Gallery;
