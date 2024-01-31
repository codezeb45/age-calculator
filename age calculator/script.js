const input = document.getElementById("input");
input.max = new Date().toISOString().split("T")[0];
const msg = document.getElementById("message");
function ageCalculator() {
  let birthDate = new Date(input.value);
  let bM = birthDate.getMonth() + 1;
  let bD = birthDate.getDate();
  let bY = birthDate.getFullYear();

  let presentDate = new Date();
  let pD = presentDate.getDate();
  let pM = presentDate.getMonth() + 1;
  let pY = presentDate.getFullYear();

  let dD, dM, dY;
  dY = pY - bY;

  if (pM >= bM) {
    dM = pM - bM;
  } else {
    dY--;
    dM = 12 + pM - bM;
  }
  if (pD >= bD) {
    dD = pD - bD;
  } else {
    dM--;
    dD = getDaysInMonths(bY, bM) + pD - bD;
  }
  if (dM < 0) {
    dM = 11;
    dY--;
  }
  msg.innerHTML = `You are <span>${dY}</span> years,<span>${dM}</span> months and <span>${dD}</span> days old`;
}
function getDaysInMonths(year, month) {
  return new Date(year, month, 0).getDate();
}