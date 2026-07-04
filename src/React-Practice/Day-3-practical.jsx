function BookCard(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h1>{props.author}</h1>
      <h1>{props.price}</h1>
    </div>
  );
}

export default BookCard;
