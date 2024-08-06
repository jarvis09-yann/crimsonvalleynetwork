const serverIp = document.querySelectorAll(".server-ip");

serverIp.forEach((element) => {
  element.addEventListener("click", () => {
    navigator.clipboard
      .writeText("mc.crimsonvalleynetwork.com")
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
  });
});
