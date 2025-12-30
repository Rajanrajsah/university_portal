// ===== MAINTENANCE MODE FLAG =====
const MAINTENANCE_MODE = true; // change to false when ready

document.addEventListener("DOMContentLoaded", () => {
  if (!MAINTENANCE_MODE) return;

  document.body.innerHTML = `
    <div class="maintenance-wrapper">
      <h1>🚧 Under Maintenance</h1>
      <p>We are working hard to improve your experience.</p>
      <p>Please check back after some time.</p>
      <small>ABC University Portal</small>
    </div>
  `;
});
