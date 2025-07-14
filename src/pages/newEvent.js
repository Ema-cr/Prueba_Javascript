import { post } from "../services/api.js";

export async function setupNewEvent() {
  const form = document.getElementById("event-form");
  const msg = document.getElementById("form-msg");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const newEvent = {
      title: document.getElementById("title").value.trim(),
      description: document.getElementById("description").value.trim(),
      eventDate: document.getElementById("eventDate").value,
      capacity: document.getElementById("capacity").value.trim(),
    };

    try {
      const res = await post("http://localhost:3000/events", newEvent);
      console.log("Respuesta del POST:", res);
      msg.textContent = "✅ Event Added Sucessfully";
      msg.style.color = "green";
      form.reset();
    } catch (err) {
      console.error("Error:", err); // 👈 esto te muestra si falló
      msg.textContent = "❌ Error";
      msg.style.color = "red";
    }
  });
}
