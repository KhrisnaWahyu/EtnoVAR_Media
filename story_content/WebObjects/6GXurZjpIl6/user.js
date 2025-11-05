function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6FogH2q6yS4":
        Script1();
        break;
      case "5uPGoKjM8v0":
        Script2();
        break;
      case "6FKdL5CqQDU":
        Script3();
        break;
      case "6NHUTKwzejn":
        Script4();
        break;
      case "5hDMcbNCPPc":
        Script5();
        break;
      case "64AWTvkzkod":
        Script6();
        break;
  }
}

function Script1()
{
  (function() {
    var elem = document.documentElement;
    var player = GetPlayer();

    // Fungsi masuk fullscreen + kunci landscape
    function enterFullscreenAndLock() {
        var request = elem.requestFullscreen || elem.webkitRequestFullscreen || elem.msRequestFullscreen;
        if (request) {
            request.call(elem).then(() => {
                // Setelah fullscreen, kunci ke landscape
                if (screen.orientation && screen.orientation.lock) {
                    screen.orientation.lock("landscape").catch(err => {
                        console.log("Tidak bisa mengunci orientasi:", err);
                    });
                }
            }).catch(err => console.log("Gagal fullscreen:", err));
        }
    }

    // Fungsi keluar fullscreen + kunci portrait
    function exitFullscreenAndUnlock() {
        var exit = document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;
        if (exit) {
            exit.call(document).then(() => {
                // Kembali ke portrait setelah keluar fullscreen
                if (screen.orientation) {
                    try {
                        if (screen.orientation.unlock) {
                            screen.orientation.unlock();
                        }
                        if (screen.orientation.lock) {
                            screen.orientation.lock("portrait").catch(()=>{});
                        }
                    } catch(e) {
                        console.log("Tidak bisa mengubah orientasi:", e);
                    }
                }
            }).catch(err => console.log("Gagal keluar fullscreen:", err));
        }
    }

    // Toggle fullscreen on/off
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        enterFullscreenAndLock();
        player.SetVar("isFull", true);
    } else {
        exitFullscreenAndUnlock();
        player.SetVar("isFull", false);
    }
})();

}

function Script2()
{
  (function() {
    var elem = document.documentElement;
    var player = GetPlayer();

    // Fungsi masuk fullscreen + kunci landscape
    function enterFullscreenAndLock() {
        var request = elem.requestFullscreen || elem.webkitRequestFullscreen || elem.msRequestFullscreen;
        if (request) {
            request.call(elem).then(() => {
                // Setelah fullscreen, kunci ke landscape
                if (screen.orientation && screen.orientation.lock) {
                    screen.orientation.lock("landscape").catch(err => {
                        console.log("Tidak bisa mengunci orientasi:", err);
                    });
                }
            }).catch(err => console.log("Gagal fullscreen:", err));
        }
    }

    // Fungsi keluar fullscreen + kunci portrait
    function exitFullscreenAndUnlock() {
        var exit = document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;
        if (exit) {
            exit.call(document).then(() => {
                // Kembali ke portrait setelah keluar fullscreen
                if (screen.orientation) {
                    try {
                        if (screen.orientation.unlock) {
                            screen.orientation.unlock();
                        }
                        if (screen.orientation.lock) {
                            screen.orientation.lock("portrait").catch(()=>{});
                        }
                    } catch(e) {
                        console.log("Tidak bisa mengubah orientasi:", e);
                    }
                }
            }).catch(err => console.log("Gagal keluar fullscreen:", err));
        }
    }

    // Toggle fullscreen on/off
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        enterFullscreenAndLock();
        player.SetVar("isFull", true);
    } else {
        exitFullscreenAndUnlock();
        player.SetVar("isFull", false);
    }
})();

}

function Script3()
{
  (function() {
    var elem = document.documentElement;
    var player = GetPlayer();

    // Fungsi masuk fullscreen + kunci landscape
    function enterFullscreenAndLock() {
        var request = elem.requestFullscreen || elem.webkitRequestFullscreen || elem.msRequestFullscreen;
        if (request) {
            request.call(elem).then(() => {
                // Setelah fullscreen, kunci ke landscape
                if (screen.orientation && screen.orientation.lock) {
                    screen.orientation.lock("landscape").catch(err => {
                        console.log("Tidak bisa mengunci orientasi:", err);
                    });
                }
            }).catch(err => console.log("Gagal fullscreen:", err));
        }
    }

    // Fungsi keluar fullscreen + kunci portrait
    function exitFullscreenAndUnlock() {
        var exit = document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;
        if (exit) {
            exit.call(document).then(() => {
                // Kembali ke portrait setelah keluar fullscreen
                if (screen.orientation) {
                    try {
                        if (screen.orientation.unlock) {
                            screen.orientation.unlock();
                        }
                        if (screen.orientation.lock) {
                            screen.orientation.lock("portrait").catch(()=>{});
                        }
                    } catch(e) {
                        console.log("Tidak bisa mengubah orientasi:", e);
                    }
                }
            }).catch(err => console.log("Gagal keluar fullscreen:", err));
        }
    }

    // Toggle fullscreen on/off
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        enterFullscreenAndLock();
        player.SetVar("isFull", true);
    } else {
        exitFullscreenAndUnlock();
        player.SetVar("isFull", false);
    }
})();

}

function Script4()
{
  (function() {
    var elem = document.documentElement;
    var player = GetPlayer();

    // Fungsi masuk fullscreen + kunci landscape
    function enterFullscreenAndLock() {
        var request = elem.requestFullscreen || elem.webkitRequestFullscreen || elem.msRequestFullscreen;
        if (request) {
            request.call(elem).then(() => {
                // Setelah fullscreen, kunci ke landscape
                if (screen.orientation && screen.orientation.lock) {
                    screen.orientation.lock("landscape").catch(err => {
                        console.log("Tidak bisa mengunci orientasi:", err);
                    });
                }
            }).catch(err => console.log("Gagal fullscreen:", err));
        }
    }

    // Fungsi keluar fullscreen + kunci portrait
    function exitFullscreenAndUnlock() {
        var exit = document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;
        if (exit) {
            exit.call(document).then(() => {
                // Kembali ke portrait setelah keluar fullscreen
                if (screen.orientation) {
                    try {
                        if (screen.orientation.unlock) {
                            screen.orientation.unlock();
                        }
                        if (screen.orientation.lock) {
                            screen.orientation.lock("portrait").catch(()=>{});
                        }
                    } catch(e) {
                        console.log("Tidak bisa mengubah orientasi:", e);
                    }
                }
            }).catch(err => console.log("Gagal keluar fullscreen:", err));
        }
    }

    // Toggle fullscreen on/off
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        enterFullscreenAndLock();
        player.SetVar("isFull", true);
    } else {
        exitFullscreenAndUnlock();
        player.SetVar("isFull", false);
    }
})();

}

function Script5()
{
  (function() {
    var elem = document.documentElement;
    var player = GetPlayer();

    // Fungsi masuk fullscreen + kunci landscape
    function enterFullscreenAndLock() {
        var request = elem.requestFullscreen || elem.webkitRequestFullscreen || elem.msRequestFullscreen;
        if (request) {
            request.call(elem).then(() => {
                // Setelah fullscreen, kunci ke landscape
                if (screen.orientation && screen.orientation.lock) {
                    screen.orientation.lock("landscape").catch(err => {
                        console.log("Tidak bisa mengunci orientasi:", err);
                    });
                }
            }).catch(err => console.log("Gagal fullscreen:", err));
        }
    }

    // Fungsi keluar fullscreen + kunci portrait
    function exitFullscreenAndUnlock() {
        var exit = document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;
        if (exit) {
            exit.call(document).then(() => {
                // Kembali ke portrait setelah keluar fullscreen
                if (screen.orientation) {
                    try {
                        if (screen.orientation.unlock) {
                            screen.orientation.unlock();
                        }
                        if (screen.orientation.lock) {
                            screen.orientation.lock("portrait").catch(()=>{});
                        }
                    } catch(e) {
                        console.log("Tidak bisa mengubah orientasi:", e);
                    }
                }
            }).catch(err => console.log("Gagal keluar fullscreen:", err));
        }
    }

    // Toggle fullscreen on/off
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        enterFullscreenAndLock();
        player.SetVar("isFull", true);
    } else {
        exitFullscreenAndUnlock();
        player.SetVar("isFull", false);
    }
})();

}

function Script6()
{
  (function() {
    var elem = document.documentElement;
    var player = GetPlayer();

    // Fungsi masuk fullscreen + kunci landscape
    function enterFullscreenAndLock() {
        var request = elem.requestFullscreen || elem.webkitRequestFullscreen || elem.msRequestFullscreen;
        if (request) {
            request.call(elem).then(() => {
                // Setelah fullscreen, kunci ke landscape
                if (screen.orientation && screen.orientation.lock) {
                    screen.orientation.lock("landscape").catch(err => {
                        console.log("Tidak bisa mengunci orientasi:", err);
                    });
                }
            }).catch(err => console.log("Gagal fullscreen:", err));
        }
    }

    // Fungsi keluar fullscreen + kunci portrait
    function exitFullscreenAndUnlock() {
        var exit = document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;
        if (exit) {
            exit.call(document).then(() => {
                // Kembali ke portrait setelah keluar fullscreen
                if (screen.orientation) {
                    try {
                        if (screen.orientation.unlock) {
                            screen.orientation.unlock();
                        }
                        if (screen.orientation.lock) {
                            screen.orientation.lock("portrait").catch(()=>{});
                        }
                    } catch(e) {
                        console.log("Tidak bisa mengubah orientasi:", e);
                    }
                }
            }).catch(err => console.log("Gagal keluar fullscreen:", err));
        }
    }

    // Toggle fullscreen on/off
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        enterFullscreenAndLock();
        player.SetVar("isFull", true);
    } else {
        exitFullscreenAndUnlock();
        player.SetVar("isFull", false);
    }
})();

}

