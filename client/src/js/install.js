const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

// Logic for installing the PWA

window.addEventListener('beforeinstallprompt', (event) => {

  event.preventDefault();
  
  deferredPrompt = event;
  
  // TODO: Show a custom install button or UI to prompt the user to install the app
  butInstall.style.display = 'block';
});

butInstall.addEventListener('click', async () => {
  // TODO: Show the install prompt when the custom install button is clicked
  if (deferredPrompt) {
    deferredPrompt.prompt();
    
    const userChoice = await deferredPrompt.userChoice;
    
    
    if (userChoice.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    
    deferredPrompt = null;
  }
});

window.addEventListener('appinstalled', (event) => {
  // TODO: Perform actions when the app is successfully installed
  console.log('App installed successfully');
  
  butInstall.style.display = 'none';
});
