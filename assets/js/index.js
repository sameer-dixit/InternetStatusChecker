window.addEventListener("load", checkInternetConnection);
function checkInternetConnection() {
  const statustext = document.getElementById("statusCheck");
  const IpAddresstext = document.getElementById("addressCheck");
  const networktext = document.getElementById("networkCheck");

  statustext.textContent = "checking...";

  if (navigator.onLine) {
    fetch("https://api.ipify.org?format=json")
      .then((Response) => Response.json())
      .then((data) => {
        IpAddresstext.textContent = data.ip;
        statustext.textContent = "Connected";

        const connection = navigator.connection;

        const networkStrength = connection
          ? connection.downlink + "Mbps"
          : "Unknown";
        networktext.textContent = networkStrength;
      })
      .catch(() => {
        statustext.textContent = "Disconnected";
        IpAddresstext.textContent = "------";
        networktext.textContent = "------";
      });
  } else {
    statustext.textContent = "Disconnected";
    IpAddresstext.textContent = "------";
    networktext.textContent = "------";
  }
}
