export default function ProjectCard({ item }) {
  return (
    <div className="card h-100">
      <img className="card-img-top" src={item.image} alt={item.name}/>
      <div className="card-body text-center">
        <h5 className="card-title">{item.name}</h5>
        {item.description && <p className="card-text">{item.description}</p>}
        {item.link && (
          <a href={item.link} target="_blank" rel="noreferrer" className="btn btn-brand">View</a>
        )}
      </div>
    </div>
  );
}