import { useState } from "react";

const InfoInput = () => {

  const [form, setForm] = useState({
    message: "",
    amount: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.message || !form.amount) {
      setStatus("Please fill the form");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/sendNotification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: form.message,
          amount: parseFloat(form.amount)
        })
      });

      if (response.ok) {
        setStatus("Notification sent!");
        setForm({
          message: "",
          amount: ""
        });
      } else {
        setStatus("Failed to send. Check your backend.");
      }

    } catch (error) {
      setStatus("Error: Could not reach the server.");
    }
  };

  return (
    <div className=" bg-white p-6 rounded-xl box max-w-96">
      <h3 className="mt-0">Send a Notification to display</h3>

      <div className="mb-4">
        <label className="block mb-4 font-bold">
          Your Message here
        </label>

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Enter message" className="input-style"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-4 font-bold">
          Enter amount
        </label>

        <input
          name="amount"
          type="number"
          value={form.amount}
          onChange={handleChange}
          placeholder="50,000"
          className="input-style"
        />
      </div>

      <button onClick={handleSubmit} className="buton-style">
        Send Notification
      </button>

      {status && (
        <p
          style={{
            marginTop: "0.8rem",
            color: status.includes("sent") ? "green" : "red"
          }}
        >
          {status}
        </p>
      )}
    </div>
  );
};

export default InfoInput;