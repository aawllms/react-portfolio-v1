// filepath: /Users/wills/Desktop/Class Projects/react-portfolio/client/src/Pages/Contact/Contact.tsx
import { useState } from "react";

function Contact() {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState<"success" | "error" | null>(null); // Track submission status

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

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    noInput();
    noEmailInput();
    noMessageInput();

    if (nameInput === "" || emailInput === "" || messageInput === "") {
      setSubmissionStatus("error");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameInput,
          email: emailInput,
          message: messageInput,
        }),
      });

      if (response.ok) {
        setSubmissionStatus("success");
        setNameInput("");
        setEmailInput("");
        setMessageInput("");
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("error");
    }
  };

  return (
    <>
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

        {submissionStatus === "success" && (
          <div className="alert alert-success mt-3" role="alert">
            Email sent successfully!
          </div>
        )}

        {submissionStatus === "error" && (
          <div className="alert alert-danger mt-3" role="alert">
            Error sending email. Please try again.
          </div>
        )}
      </div>
    </>
  );
}

export default Contact;