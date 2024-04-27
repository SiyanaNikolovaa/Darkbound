export default function Card({ title, text, image }) {
  return (
    <div className="card">
      <img src={image} alt="card-image" />
      <div className="card-text">
        <h2>{title}</h2>
        <p className="card-text-sub">{text}</p>
      </div>
    </div>
  );
}
