
import Card from "../../components/Card/Card";

function Portfolio() {
  const projects = [
    {
      title: "Weather Dashboard",
      image: "/weatherAPI.png",
      text: "In this project, I was tasked with using a weather API to bring in weather data",
      link: "https://weather-data-v1.onrender.com/",
    },
    {
      title: "What's in my fridge",
      image: "/wimf.jpg",
      text: "In our first group project, we used a food api to bring in data and add them to a favorites page.",
      link: "https://aawllms.github.io/Whats-in-my-fridge-v1-dev/",
    },
    {
      title: "My Coding Resources",
      image: "/my-coding-resources.png",
      text: "In this project, I worked on the backend of the application as well as the frontend login and create user modal. This application was created as a way to add and save coding resources for use during a project",
      link: "https://my-coding-resources.onrender.com/",
    },
    {
      title: "Dogwood Collars",
      image: "/dogwood-main.png",
      text: "This project is currently in development. You can take a look at the github repo to see the progress of this ecommerce site",
      link: "https://github.com/aawllms/dogwood-collars-v2",
    },
  ];

  return (
    <div
      style={{
        minHeight: "85vh",
        backgroundImage: "url(./IMG_8927.jpeg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        color: "white",
        paddingBottom: "50px",
      }}
    >
      <h1
        className="text-center mb-4"
        style={{ fontSize: "3.5rem", fontWeight: "bold" }}
      >
        Portfolio
      </h1>
      <div className="container">
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-6 mb-4" key={index}>
              {" "}
              <Card project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
