import Card from "../../components/Card/Card";

function Portfolio() {
  const projects = [
    {
      title: "Weather Dashboard",
      image: "/weatherAPI.png",
      text: "In this project, I was tasked with using a weather API to bring in weather data",
      link: "https://weather-data-v1.onrender.com/"
    },
    {
      title: "What's in my fridge",
      image: "/wimf.jpg",
      text: "In our first group project, we used a food api to bring in data and add them to a favorites page.",
      link: "https://aawllms.github.io/Whats-in-my-fridge-v1-dev/"
    },
  ];

  return (
    <>
      <div
        style={{
          backgroundImage: "url(./IMG_8927.jpeg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundPosition: "center",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Portfolio</h1>
        <div className="d-flex justify-content-center flex-wrap">
          {/* <Card project={projects[0]} />
          <Card project={projects[1]} />
          <Card project={projects[2]} />
          <Card project={projects[3]} /> */}

          {projects.map((project) => {
            return <Card project={project} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
