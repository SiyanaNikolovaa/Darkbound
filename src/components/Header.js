export default function Header({ title, subtitle }) {
  return (
    <div className="title-container">
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
    </div>
  );
}
