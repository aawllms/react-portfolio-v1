import { useState } from "react";

function Contact() {
  //   const [formState, setFormState] = useState({
  //     name: "",
  //     email: "",
  //     message: "",
  //   });
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const noInput = () => {
    if (nameInput === "") {
      document.getElementById("name-warning")?.classList.remove("d-none");
    } else {
      document.getElementById("name-warning")?.classList.add("d-none");
    }
  };
  const noEmailInput = () => {
    if (emailInput === "") {
      document.getElementById("email-warning")?.classList.remove("d-none");
    } else {
      document.getElementById("email-warning")?.classList.add("d-none");
    }
  };
  const noMessageInput = () => {
    if (messageInput === "") {
      document.getElementById("message-warning")?.classList.remove("d-none");
    } else {
      document.getElementById("message-warning")?.classList.add("d-none");
    }
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    console.log(nameInput);
    console.log(emailInput);
    console.log(messageInput);
    // console.log("Form Submitted");
    setNameInput("");
    setEmailInput("");
    setMessageInput("");
  };

  // const noEmailInput = (e) => {
  //   if (e.target.id == "emailInput") {
  //     if (emailInput == "") {
  //       document.getElementById("name-warning")?.classList.remove("d-none");
  //     } else {
  //       document.getElementById("name-warning")?.classList.add("d-none");
  //     }
  //   }
  // };

  return (
    <>
      <div
        style={{
          minHeight: "85vh",
          backgroundColor: "#0b3d7a",
          color: "white",
          padding: "20px",
          fontSize: "20px",
        }}
      >
        <form onSubmit={handleFormSubmit} className="container-sm">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              placeholder="Name"
              value={nameInput}
              onChange={(event) => {
                setNameInput(event.target.value);
                // console.log(nameInput);
              }}
              onBlur={noInput}
            />
            <p id="name-warning" className="text-danger d-none">
              Name is required
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="name@example.com"
              value={emailInput}
              onChange={(event) => {
                setEmailInput(event.target.value);
                // console.log(emailInput);
              }}
              onBlur={noEmailInput}
            />
            <p id="email-warning" className="text-danger d-none">
              Email is required
            </p>
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label"
              id="messageInput"
            >
              Message
            </label>
            <textarea
              className="form-control"
              id="messageInput"
              placeholder="Please write your message here"
              rows={5}
              onChange={(event) => {
                setMessageInput(event.target.value);
                // console.log(messageInput);
              }}
              value={messageInput}
              onBlur={noMessageInput}
            ></textarea>
            <p id="message-warning" className="text-danger d-none">
              Message Required
            </p>
          </div>
          <button
            style={{
              width: "100%",
              backgroundColor: "black",
              color: "white",
              padding: "10px",
              fontSize: "20px",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
