export function renderSidebar() {
  const aside = document.createElement("aside");
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      logoutUser();
      navigate("/");
    });
  }

  aside.className = "sidebar";
  aside.innerHTML = `
     <img src="./src/assets/foto_gato.png" alt="gato go" />
  <h2>Menu</h2>
    <nav>
      <a href="/public" data-link>Home</a>
      <a href="/admin" data-link>Admin</a>
      <a href="/newevent" data-link>Event</a>
      <button id="logout-btn">Logout</button>
    </nav>
  `;
  return aside;
}