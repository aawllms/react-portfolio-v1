function About() {
  return (
    <div
      className="d-flex justify-content-center"
      style={{
        backgroundImage: "url(./IMG_9625.jpeg)",
        minHeight: "85vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="card mb-3 mt-5 p-5"
        style={{
          width: "80%",
        }}
      >
        <img
          src="./IMG_3135.png"
          className="card-img-top"
          alt="..."
          style={{
            width: "200px",
            height: "200px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "100px",
          }}
        />
        <div className="card-body">
          <h3 className="card-title">About Me</h3>
          <p className="card-text">
            Hi, I’m Aaron Williams but most people call me Wills. My journey has
            been anything but conventional. I started my career in the
            construction industry, where I learned the value of hard work,
            problem-solving, and teamwork. After several years, I decided to
            shift gears and transition into the tech world, where I found a new
            passion. Today, I’m diving deep into full-stack development,
            constantly learning and growing in the ever-evolving tech landscape.
            <br />
            <br />
            Along the way, I’ve also raised a child as a sole parent who was
            born with a heart defect. It’s been a challenging but incredibly
            rewarding experience, and it has taught me a lot about resilience,
            empathy, and prioritizing what truly matters.
            <br />
            <br />
            A big part of my life has been shaped by my travels. I had the
            privilege of living and volunteering in Kenya, where I worked with
            underserved communities, helping people with disabilities and those
            in low-income areas access proper healthcare. This experience was
            eye-opening, showing me the power of community, the importance of
            accessible care, and how little things can make a huge difference in
            someone’s life.
            <br />
            <br />
            In my free time, you’ll find me enjoying some adrenaline-filled
            hobbies like mountain biking, paramotoring, and riding motorcycles.
            I also love to travel, explore new places, and take in all the
            experiences the world has to offer.
          </p>
          <p className="card-text">
            <small className="text-body-secondary"></small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
