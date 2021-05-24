import React, { useState } from "react";

export default function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [thankyou, setthankyou] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });
    const data = await response.json();
    if (data.status === 500) {
      console.log(data.msg);
    } else {
      setname("");
      setemail("");
      setmessage("");
      setthankyou(true);
      setTimeout(dismiss, 15000);
    }
  };

  const dismiss = () => {
    setthankyou(false);
  };

  return (
    <div className="container" id="contact">
      <h3>Contact</h3>
      <br />
      <div className="contact-form">
        <p className="contact-text">
          Need to get in contact with me? The best way is to send a message here
          and I will respond to you by email as soon as possible!
        </p>
        <br />
        <div className={thankyou ? `thank-you` : `thank-you hide`}>
          <button onClick={dismiss}>x</button>
          <div>
            <h4>Thank you!</h4>
          </div>
          <p>
            Your message has been received and I will be in contact with you
            soon!{" "}
          </p>
        </div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="form-container"
        >
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              value={name}
              type="text"
              onChange={(e) => setname(e.target.value)}
            ></input>
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              value={email}
              type="email"
              placeholder="email@email.com"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            ></input>
          </div>
          <div className="textarea-input-container">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              rows={4}
              onChange={(e) => {
                setmessage(e.target.value);
              }}
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
