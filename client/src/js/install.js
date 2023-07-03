const butInstall = document.getElementById("buttonInstall");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  window.deferredPrompt = event;

  butInstall.classList.toggle("hidden", false);
});

butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;
  if (promptEvent) {
    promptEvent.prompt();

    const choiceResult = await promptEvent.userChoice;
    if (choiceResult.outcome === "accepted") {
      console.log("PWA installed");
    } else {
      console.log("PWA installation declined");
    }

    window.deferredPrompt = null;

    butInstall.classList.toggle("hidden", true);
  }
});

window.addEventListener("appinstalled", (event) => {
  console.log("PWA installed successfully");
});
