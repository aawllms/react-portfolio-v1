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
      document.getElementById("message-warning")?.classList.remove("d-done");
    } else {
      document.getElementById("message-warning")?.classList.add("d-done");
    }
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    console.log(event);
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
          //   backgroundImage:
          //     "url('https://unsplash.com/photos/lines-of-html-codes-4hbJ-eymZ1o')",
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          //   minHeight: "100vh",
          backgroundColor: "#0b3d7a",
          color: "white",
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
              onChange={(event) => {
                setNameInput(event.target.value);
                console.log(nameInput);
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
              onChange={(event) => {
                setEmailInput(event.target.value);
                console.log(emailInput);
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
              rows={3}
              onChange={(event) => {
                setMessageInput(event.target.value);
                // console.log(messageInput);
              }}
              onBlur={noMessageInput}
            ></textarea>
            <p id="message-warning" className="text-danger d-none">
              Message Required
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
