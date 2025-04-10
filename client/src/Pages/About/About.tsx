function About() {
  // const imgurl =
  //   ".";
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: "url(./IMG_8927.jpeg)",
        minHeight: "85vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div
        className="card mt-5 p-4"
        style={{
          width: "90%",
          maxWidth: "1000px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="d-flex flex-column align-items-center">
          <img
            src="./IMG_3135.png"
            className="rounded-circle mb-3"
            alt="Profile"
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
            }}
          />
          <div className="card-body text-center">
            <h3 className="card-title" style={{ color: "#343a40" }}>
              About Me
            </h3>
            <p
              className="card-text"
              style={{ lineHeight: "1.6", color: "#555", fontSize: "1rem" }}
            >
              Hi, I’m Aaron Williams—though most people call me Wills. My career
              path has been anything but conventional. I began my professional
              journey in the construction industry, where I developed a strong
              work ethic, problem-solving abilities, and an appreciation for
              collaboration. After years in construction, I transitioned into
              the tech world to pursue my passion for technology, and I’m now
              fully immersed in full-stack development. This career shift has
              opened up new avenues for learning and growth, and I’m
              continuously expanding my skill set to stay ahead in the
              fast-paced tech landscape.
              <br />
              Along the way, I have navigated personal challenges that have
              shaped who I am today. I raised a beautiful young daughter, now an
              adult, who was born with a congenital heart defect. This
              experience taught me the importance of resilience, empathy, and
              the ability to balance priorities, both personally and
              professionally. It also led me to participate in the 2Hearts
              Organization, which supports children with heart defects, and I’ve
              become a strong advocate for raising awareness and improving care
              for kids with similar conditions.
              <br />
              <br />
              My passion for helping others has also driven me to volunteer
              internationally. I had the privilege of living and working in
              Nakuru, Kenya, with the Nathan Hall Williams Center. There, I
              helped underserved communities access healthcare and sanitation,
              managed large-scale agricultural training programs, and led
              initiatives that improved public health and education. This
              experience has profoundly shaped my values—teaching me the power
              of community, the importance of accessible healthcare, and how
              small, thoughtful actions can make a significant impact on
              people's lives.
              <br />
              <br />
              When I’m not coding, I enjoy engaging in a variety of
              adrenaline-filled hobbies, including mountain biking, flying my
              paramotor, and hiking with my three dogs. I also love spending
              quality time with my partner, Sara, and traveling to new
              destinations. Whether it’s exploring different cultures, trying
              out new food places, or visiting local breweries, I always find
              inspiration in the experiences life has to offer.
              <br />
              <br />
              As I continue my journey in the tech world, I’m focused on not
              only growing as a developer but also as a leader, mentor, and
              advocate for diversity and inclusion. Whether leading
              cross-functional teams or collaborating with others, I strive to
              foster a culture of continuous learning and improvement in every
              project I undertake.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
//this is a comment
