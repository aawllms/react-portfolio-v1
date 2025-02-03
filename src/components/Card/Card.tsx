function Card({ project }: { project: any }) {
  return (
    <div className="card m-5" style={{ width: "18rem" }}>
      <img
        src={project.image}
        className="card-img-top"
        alt="..."
        style={{ width: "100%" }}
      />
      <div className="card-body">
        <h3>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        </h3>
        <p className="card-text">{project.text}</p>
      </div>
    </div>
  );
}

export default Card;
