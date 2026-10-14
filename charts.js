const skillLabels = [
  "UI/UX Design",
  "Database",
  "Networking",
  "Cybersecurity",
  "Web Development",
];
const skillValues = [40, 25, 10, 5, 10];
const skillColors = ["#3498db", "#2ecc71", "#f1c40f", "#e74c3c", "#9b59b6"];

const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: skillLabels,
    datasets: [
      {
        backgroundColor: skillColors,
        data: skillValues,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#fff",
        },
      },
      title: {
        display: true,
        text: "My Skill Charts",
        color: "#b066ff",
        font: { size: 32, weight: "bold" }, // ukuran besar setara <h2>
        padding: {
          bottom: 50,
        },
      },
    },
  },
});
