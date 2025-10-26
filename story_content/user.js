function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5qSW9IPuUFR":
        Script1();
        break;
      case "69q2E1sp0Zj":
        Script2();
        break;
      case "6Mn8LSj30km":
        Script3();
        break;
      case "6HvKkknhVTS":
        Script4();
        break;
      case "6ZNm6RjCkax":
        Script5();
        break;
      case "5vBAYU8YMyl":
        Script6();
        break;
  }
}

function Script1()
{
  var elem = document.documentElement;

// Cek apakah sudah fullscreen
if (!document.fullscreenElement && !document.webkitFullscreenElement) {
    // Masuk fullscreen
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome/Safari
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // Edge lama
        elem.msRequestFullscreen();
    }
} else {
    // Keluar fullscreen
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

// Sinkronkan variabel Storyline (kalau kamu pakai state toggle)
var player = GetPlayer();
player.SetVar("isFull", !!document.fullscreenElement);

}

function Script2()
{
  // Dapatkan elemen dokumen utama
var elem = document.documentElement;

// Cek apakah sedang fullscreen atau tidak
if (!document.fullscreenElement && !document.webkitFullscreenElement) {
    // Masuk ke fullscreen
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome/Safari
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge lama
        elem.msRequestFullscreen();
    }
} else {
    // Keluar dari fullscreen
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

}

function Script3()
{
  // Dapatkan elemen dokumen utama
var elem = document.documentElement;

// Cek apakah sedang fullscreen atau tidak
if (!document.fullscreenElement && !document.webkitFullscreenElement) {
    // Masuk ke fullscreen
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome/Safari
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge lama
        elem.msRequestFullscreen();
    }
} else {
    // Keluar dari fullscreen
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

}

function Script4()
{
  // Dapatkan elemen dokumen utama
var elem = document.documentElement;

// Cek apakah sedang fullscreen atau tidak
if (!document.fullscreenElement && !document.webkitFullscreenElement) {
    // Masuk ke fullscreen
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome/Safari
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge lama
        elem.msRequestFullscreen();
    }
} else {
    // Keluar dari fullscreen
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

}

function Script5()
{
  // Dapatkan elemen dokumen utama
var elem = document.documentElement;

// Cek apakah sedang fullscreen atau tidak
if (!document.fullscreenElement && !document.webkitFullscreenElement) {
    // Masuk ke fullscreen
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome/Safari
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge lama
        elem.msRequestFullscreen();
    }
} else {
    // Keluar dari fullscreen
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

}

function Script6()
{
  var elem = document.documentElement;

// Cek apakah sudah fullscreen
if (!document.fullscreenElement && !document.webkitFullscreenElement) {
    // Masuk fullscreen
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome/Safari
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // Edge lama
        elem.msRequestFullscreen();
    }
} else {
    // Keluar fullscreen
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

// Sinkronkan variabel Storyline (kalau kamu pakai state toggle)
var player = GetPlayer();
player.SetVar("isFull", !!document.fullscreenElement);

}

