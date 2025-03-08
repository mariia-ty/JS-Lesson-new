/* nanoid
import { nanoid } from "https://cdn.jsdelivr.net/npm/nanoid/nanoid.js";
document.addEventListener("DOMContentLoaded", () => {
  const uniqeId = nanoid();
  console.log(uniqeId);
});
document.getElementById("generate").addEventListener("click", () => {
    document.getElementById('output').textContent = nanoid();
});
*/

/* pNotify
import { alert } from "https://cdn.jsdelivr.net/npm/@pnotify/core@5.2.0/+esm";

document.getElementById('notify').addEventListener('click', () => {
    alert({
      text: "This is done in PNotify",
      type: "success",
      delay: 2000,
    });
})
//different types: success, error, info, notice 
//mouseover instead of click to hover
*/

/* ChartJS
const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
*/

import basicLightbox from "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/+esm";

document.getElementById('open-lightbox').addEventListener('click', () => {
    const instance = basicLightbox.create('<img src="/photo.jpg" alt="pic" width="300" height="200"> ')
    instance.show();
})
