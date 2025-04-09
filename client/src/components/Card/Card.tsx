

function Card({ project }: { project: any }) {
  return (
    <div
      className="card h-100"
      style={{
        border: "none",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
      }}
    >
      <img
        src={project.image}
        className="card-img-top"
        alt="..."
        style={{
          width: "100%",
          height: "200px",
          objectFit: "contain",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          paddingTop: "10px", 
        }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title" style={{ fontWeight: "bold", textAlign: "center" }}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2a3c96", textDecoration: "none" }}
            >
              {project.title}
            </a>
          </h5>
          <p className="card-text" style={{ color: "#555" }}>
            {project.text}
          </p>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

export default Card;