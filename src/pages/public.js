import { get, post, update } from "../services/api.js";
import { getLoggedUser } from "../services/auth.js";
import { navigate } from "../../main.js";

export async function setupPublic() {
  const user = getLoggedUser();

  if (!user) {
    navigate("/");
    return;
  }

  // Traer cursos y enrolamientos
  const [events, enrollments] = await Promise.all([
    get("http://localhost:3000/events"),
    get("http://localhost:3000/enrollments"),
  ]);

  const userEnrollments = enrollments.filter((e) => e.userId === user.id);
  const enrolledEventIds = userEnrollments.map((e) => e.eventsId);

  const eventsContainer = document.getElementById("events-list");
  eventsContainer.innerHTML = "";

  events.forEach((events) => {
    const isEnrolled = enrolledEventIds.includes(events.id);

    const eventCard = document.createElement("div");
    eventCard.classList.add("events-list");
    eventCard.innerHTML = `
      <h3>${events.title}</h3>
      <p>${events.description}</p>
      <p><strong>Event date:</strong> ${events.startDate}</p>
      <p><strong>Capacity:</strong> ${events.capacity}</p>
        
      <button ${isEnrolled ? "disabled" : ""} data-evento-id="${events.id}">
        ${isEnrolled ? "Ya inscrito" : "Inscribirse"}
      </button>

    `;

    eventsContainer.appendChild(eventCard);
  });

  // Manejar inscripción

  eventsContainer.addEventListener("click", async (e) => {
    if (e.target.tagName === "BUTTON" && e.target.dataset.eventId) {
      const eventId = e.target.dataset.eventId;
      const already = enrolledEventIds.includes(eventId);
      const selectEvent = events.find((event) => event.id === eventId);

      if (!already && selectEvent.capacity > 0) {
        await post("http://localhost:3000/enrollments", {
          userId: user.id,
          eventId,
        });
        const newDispo = {
          ...selectEvent,
          capacity: selectEvent.capacity - 1,
        };
        await update(
          `http://localhost:3000/events`,
        eventId,
        newDispo
        
        );

        Swal.fire(
          "¡Inscripción exitosa!",
          "Ahora estás inscrito en el curso.",
          "success"
        );

        setupPublic(); // Recargar la vista actual
      }
    }
  });
}
