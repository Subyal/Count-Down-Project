const endDate = "16 Nov 2026 05:00 PM";

document.querySelector("#endDate").innerText = endDate;
const inputs = document.querySelectorAll("input");

const clock = () => {
  const end = new Date(endDate);
  const now = new Date();
  const dif = end - now;
  inputs[0].value = Math.floor(dif / 1000 / 60 / 60 / 24 / 30);
  inputs[1].value = Math.floor((dif / 1000 / 60 / 60 / 24) % 30);
  inputs[2].value = Math.floor((dif / 1000 / 60 / 60) % 24);
  inputs[3].value = Math.floor((dif / 1000 / 60) % 60);
  inputs[4].value = Math.floor((dif / 1000) % 60);
};

clock();
setInterval(clock, 1000);

const whatsAppContact = document.querySelector("#btn");

whatsAppContact.addEventListener("click", () => {
  const phoneNumber = "923345675727";
  const message = "Hi Give me information About your Premium Bots";

  window.open(
    `https://wa.me/${phoneNumber}?text${encodeURIComponent(message)}`,
    "_blank",
  );
});
