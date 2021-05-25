import React, { useState } from "react";

export default function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [thankyou, setthankyou] = useState(false);
  const [noSpam, setnoSpam] = useState(false);
  const [spamAlert, setspamAlert] = useState(false);
  const [emptyFields, setemptyFields] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (noSpam) {
      setspamAlert(true);
      setTimeout(dismissSpamAlert, 15000);
    } else if (
      !noSpam &&
      (name.length > 0 || email.length > 0 || message.length > 0)
    ) {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await response.json();
      if (data.status === 500) {
      } else {
        setname("");
        setemail("");
        setmessage("");
        setthankyou(true);
        setTimeout(dismissthankyou, 15000);
        setnoSpam(true);
        setTimeout(resetSpam, 30000);
      }
    } else if (
      name.length === 0 ||
      email.length === 0 ||
      message.length === 0
    ) {
      setemptyFields(true);
      setTimeout(dismissemptyFields, 15000);
    }
  };
  const resetSpam = () => {
    setnoSpam(false);
  };

  const dismissthankyou = () => {
    setthankyou(false);
  };
  const dismissSpamAlert = () => {
    setspamAlert(false);
  };
  const dismissemptyFields = () => {
    setemptyFields(false);
  };

  return (
    <div className="container" id="contact">
      <h3>Contact</h3>
      <br />
      <div className="contact-form">
        <p className="contact-text">
          For business inquiries and general questions please fill out the form
          below and I will reach out to you as soon as possible!
        </p>
        <br />
        <div className={thankyou ? `alert thank-you` : `alert thank-you hide`}>
          <button onClick={dismissthankyou}>x</button>
          <div>
            <h4>Thank you!</h4>
          </div>
          <p>
            Your message has been received and I will be in contact with you
            soon!
          </p>
        </div>
        <div className={spamAlert ? `alert error` : `alert error hide`}>
          <button onClick={dismissSpamAlert}>x</button>
          <div>
            <h4>Sorry!</h4>
          </div>
          <p>Please wait to submit another contact form!</p>
        </div>
        <div className={emptyFields ? `alert error` : `alert error hide`}>
          <button onClick={dismissemptyFields}>x</button>
          <div>
            <h4>Whoops!</h4>
          </div>
          <p>
            Please make sure you have filled out all of the fields so I can
            contact you!
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
