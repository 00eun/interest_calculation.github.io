const data = [
  { name: "김영은", principal: 68200000, rate: 0.12 },
  { name: "박황필", principal: 73800000, rate: 0.12 },
];

const startDate = new Date("2023-06-20");
const today = new Date();
const diffTime = today - startDate;
const daysElapsed = Math.floor(diffTime / (1000 * 60 * 60 * 24));

// 오늘 날짜 출력
const todayElement = document.getElementById("today");
todayElement.textContent = `기준일: ${today.toLocaleDateString("ko-KR")}`;

const tableBody = document.querySelector("#interestTable tbody");

data.forEach((person) => {
  const interest = person.principal * person.rate * (daysElapsed / 365);
  const total = person.principal + interest;

  const row = document.createElement("tr");
  row.innerHTML = `
    <td data-label="이름">${person.name}</td>
    <td data-label="원금 (₩)">${person.principal.toLocaleString()}</td>
    <td data-label="이자율">${(person.rate * 100).toFixed(0)}%</td>
    <td data-label="경과일수">${daysElapsed}</td>
    <td data-label="이자 (₩)">${Math.round(interest).toLocaleString()}</td>
    <td data-label="합계 (₩)">${Math.round(total).toLocaleString()}</td>
  `;
  tableBody.appendChild(row);
});
