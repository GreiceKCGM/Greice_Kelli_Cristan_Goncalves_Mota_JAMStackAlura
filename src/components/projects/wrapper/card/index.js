import React from 'react';

function CardTitle({ title }) {
  console.log('CardTitle', title);
  return <div> {title}</div>;
}
function CardImage({ image }) {
  return <div>{image}</div>;
}
function CardText({ text }) {
  return <div> {text} </div>;
}

function Card({ type = 'default', title, image, text }) {
  return (
    <div>
      {type === 'destaque' && <div> Destaque </div>}
      <CardTitle title={title} />
      <CardImage image={image} />
      <CardText text={text} />
    </div>
  );
}

export default Card;
