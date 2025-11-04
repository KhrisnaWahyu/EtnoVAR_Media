function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6YYhtcQi9yh":
        Script1();
        break;
      case "5vMnMM8yVq6":
        Script2();
        break;
      case "5omcWNF1Nj6":
        Script3();
        break;
      case "5dR0bACYazJ":
        Script4();
        break;
      case "6XUjfDiUedt":
        Script5();
        break;
      case "6j5LFsEXKlR":
        Script6();
        break;
      case "6hiRPQjFYXB":
        Script7();
        break;
      case "5bAYCSShNG9":
        Script8();
        break;
      case "5V5IqnLDpCL":
        Script9();
        break;
      case "6BQzjw2yWjH":
        Script10();
        break;
      case "63AIpVOYrVE":
        Script11();
        break;
      case "5mCNqTTtI39":
        Script12();
        break;
      case "6kkfL3Uvwyn":
        Script13();
        break;
      case "6VMaypdmb5s":
        Script14();
        break;
      case "6khzDgxLdLW":
        Script15();
        break;
      case "5utyojHUnhW":
        Script16();
        break;
      case "6CrUhAzHptu":
        Script17();
        break;
      case "6jCsszdGhgt":
        Script18();
        break;
      case "5VH4Y2tYHQk":
        Script19();
        break;
      case "6T8DXfh6peR":
        Script20();
        break;
      case "63tW2aN4LAt":
        Script21();
        break;
      case "6m3D4o79bbs":
        Script22();
        break;
      case "6cJxbItuWRi":
        Script23();
        break;
      case "6PKwgul8yak":
        Script24();
        break;
      case "6ePpGImZehV":
        Script25();
        break;
      case "5ypqkEVUOXe":
        Script26();
        break;
  }
}

function Script1()
{
  // Cek apakah sudah ada BGM sebelumnya (agar tidak double saat looping slide)
var oldBgm = document.getElementById("bgmAudio");
if (oldBgm) {
    oldBgm.parentNode.removeChild(oldBgm);
}

// Buat elemen audio baru
var bgm = document.createElement("audio");
bgm.id = "bgmAudio";
bgm.src = "story_content/audio/Opening - BGM.mp3";
bgm.loop = true;
bgm.volume = 0.4;

// Tambahkan ke halaman
document.body.appendChild(bgm);

// Coba autoplay
var playPromise = bgm.play();

// Jika browser menolak autoplay, tampilkan tombol manual
if (playPromise !== undefined) {
    playPromise.catch(function(error) {
        var btn = document.createElement("button");
        btn.textContent = "🔊 Play BGM";
        btn.style.position = "absolute";
        btn.style.top = "20px";
        btn.style.right = "20px";
        btn.style.zIndex = "9999";
        btn.style.padding = "10px";
        btn.style.background = "#4CAF50";
        btn.style.color = "#fff";
        btn.style.border = "none";
        btn.style.borderRadius = "8px";
        btn.style.cursor = "pointer";
        document.body.appendChild(btn);
        btn.addEventListener("click", function() {
            bgm.play();
            btn.remove();
        });
    });
}

}

function Script2()
{
  var bgm = document.getElementById("slideBGM");
if (bgm) {
    bgm.pause();
    bgm.currentTime = 0; // reset ke awal
}

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

function Script7()
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

function Script8()
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

function Script9()
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

function Script10()
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

function Script11()
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

function Script12()
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

function Script13()
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

function Script14()
{
  // === Variasi Timer ===
// Total waktu animasi (ms)
const totalTime = 6000; // 6 detik
// Jumlah total jam yang akan ditampilkan (misal 1 hari 14 jam = 1*24 + 14 = 38 jam)
const totalHours = 38;

// === Variabel Storyline ===
const player = GetPlayer();
let currentHour = 0;
let currentDay = 0;

// === Hitung waktu setiap jam (durasi per jam) ===
const intervalPerHour = totalTime / totalHours;

// === Jalankan interval ===
let timer = setInterval(() => {
  // Tambah jam
  currentHour++;

  // Jika jam mencapai 24 → reset ke 0, hari +1
  if (currentHour >= 24) {
    currentHour = 0;
    currentDay++;
  }

  // Update variabel ke Storyline
  player.SetVar("Jam", currentHour);
  player.SetVar("Hari", currentDay);

  // Stop setelah total jam tercapai
  if ((currentDay * 24 + currentHour) >= totalHours) {
    clearInterval(timer);
  }
}, intervalPerHour);

}

function Script15()
{
  // === Variasi Timer ===
// Total waktu animasi (ms)
const totalTime = 6000; // 6 detik
// Jumlah total jam yang akan ditampilkan (misal 1 hari 14 jam = 1*24 + 14 = 38 jam)
const totalHours = 88;

// === Variabel Storyline ===
const player = GetPlayer();
let currentHour = 0;
let currentDay = 0;

// === Hitung waktu setiap jam (durasi per jam) ===
const intervalPerHour = totalTime / totalHours;

// === Jalankan interval ===
let timer = setInterval(() => {
  // Tambah jam
  currentHour++;

  // Jika jam mencapai 24 → reset ke 0, hari +1
  if (currentHour >= 24) {
    currentHour = 0;
    currentDay++;
  }

  // Update variabel ke Storyline
  player.SetVar("Jam", currentHour);
  player.SetVar("Hari", currentDay);

  // Stop setelah total jam tercapai
  if ((currentDay * 24 + currentHour) >= totalHours) {
    clearInterval(timer);
  }
}, intervalPerHour);

}

function Script16()
{
  // === Variasi Timer ===
// Total waktu animasi (ms)
const totalTime = 6000; // 6 detik
// Jumlah total jam yang akan ditampilkan (misal 1 hari 14 jam = 1*24 + 14 = 38 jam)
const totalHours = 122;

// === Variabel Storyline ===
const player = GetPlayer();
let currentHour = 0;
let currentDay = 0;

// === Hitung waktu setiap jam (durasi per jam) ===
const intervalPerHour = totalTime / totalHours;

// === Jalankan interval ===
let timer = setInterval(() => {
  // Tambah jam
  currentHour++;

  // Jika jam mencapai 24 → reset ke 0, hari +1
  if (currentHour >= 24) {
    currentHour = 0;
    currentDay++;
  }

  // Update variabel ke Storyline
  player.SetVar("Jam", currentHour);
  player.SetVar("Hari", currentDay);

  // Stop setelah total jam tercapai
  if ((currentDay * 24 + currentHour) >= totalHours) {
    clearInterval(timer);
  }
}, intervalPerHour);

}

function Script17()
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

function Script18()
{
  // === Variasi Timer ===
// Total waktu animasi (ms)
const totalTime = 6000; // 6 detik
// Jumlah total jam yang akan ditampilkan (misal 1 hari 14 jam = 1*24 + 14 = 38 jam)
const totalHours = 38;

// === Variabel Storyline ===
const player = GetPlayer();
let currentHour = 0;
let currentDay = 0;

// === Hitung waktu setiap jam (durasi per jam) ===
const intervalPerHour = totalTime / totalHours;

// === Jalankan interval ===
let timer = setInterval(() => {
  // Tambah jam
  currentHour++;

  // Jika jam mencapai 24 → reset ke 0, hari +1
  if (currentHour >= 24) {
    currentHour = 0;
    currentDay++;
  }

  // Update variabel ke Storyline
  player.SetVar("Jam", currentHour);
  player.SetVar("Hari", currentDay);

  // Stop setelah total jam tercapai
  if ((currentDay * 24 + currentHour) >= totalHours) {
    clearInterval(timer);
  }
}, intervalPerHour);

}

function Script19()
{
  // === Variasi Timer ===
// Total waktu animasi (ms)
const totalTime = 6000; // 6 detik
// Jumlah total jam yang akan ditampilkan (misal 1 hari 14 jam = 1*24 + 14 = 38 jam)
const totalHours = 88;

// === Variabel Storyline ===
const player = GetPlayer();
let currentHour = 0;
let currentDay = 0;

// === Hitung waktu setiap jam (durasi per jam) ===
const intervalPerHour = totalTime / totalHours;

// === Jalankan interval ===
let timer = setInterval(() => {
  // Tambah jam
  currentHour++;

  // Jika jam mencapai 24 → reset ke 0, hari +1
  if (currentHour >= 24) {
    currentHour = 0;
    currentDay++;
  }

  // Update variabel ke Storyline
  player.SetVar("Jam", currentHour);
  player.SetVar("Hari", currentDay);

  // Stop setelah total jam tercapai
  if ((currentDay * 24 + currentHour) >= totalHours) {
    clearInterval(timer);
  }
}, intervalPerHour);

}

function Script20()
{
  // === Variasi Timer ===
// Total waktu animasi (ms)
const totalTime = 6000; // 6 detik
// Jumlah total jam yang akan ditampilkan (misal 1 hari 14 jam = 1*24 + 14 = 38 jam)
const totalHours = 122;

// === Variabel Storyline ===
const player = GetPlayer();
let currentHour = 0;
let currentDay = 0;

// === Hitung waktu setiap jam (durasi per jam) ===
const intervalPerHour = totalTime / totalHours;

// === Jalankan interval ===
let timer = setInterval(() => {
  // Tambah jam
  currentHour++;

  // Jika jam mencapai 24 → reset ke 0, hari +1
  if (currentHour >= 24) {
    currentHour = 0;
    currentDay++;
  }

  // Update variabel ke Storyline
  player.SetVar("Jam", currentHour);
  player.SetVar("Hari", currentDay);

  // Stop setelah total jam tercapai
  if ((currentDay * 24 + currentHour) >= totalHours) {
    clearInterval(timer);
  }
}, intervalPerHour);

}

function Script21()
{
  // === Variasi Timer ===
// Total waktu animasi (ms)
const totalTime = 6000; // 6 detik
// Jumlah total jam yang akan ditampilkan (misal 1 hari 14 jam = 1*24 + 14 = 38 jam)
const totalHours = 88;

// === Variabel Storyline ===
const player = GetPlayer();
let currentHour = 0;
let currentDay = 0;

// === Hitung waktu setiap jam (durasi per jam) ===
const intervalPerHour = totalTime / totalHours;

// === Jalankan interval ===
let timer = setInterval(() => {
  // Tambah jam
  currentHour++;

  // Jika jam mencapai 24 → reset ke 0, hari +1
  if (currentHour >= 24) {
    currentHour = 0;
    currentDay++;
  }

  // Update variabel ke Storyline
  player.SetVar("Jam", currentHour);
  player.SetVar("Hari", currentDay);

  // Stop setelah total jam tercapai
  if ((currentDay * 24 + currentHour) >= totalHours) {
    clearInterval(timer);
  }
}, intervalPerHour);

}

function Script22()
{
  // === Variasi Timer ===
// Total waktu animasi (ms)
const totalTime = 6000; // 6 detik
// Jumlah total jam yang akan ditampilkan (misal 1 hari 14 jam = 1*24 + 14 = 38 jam)
const totalHours = 88;

// === Variabel Storyline ===
const player = GetPlayer();
let currentHour = 0;
let currentDay = 0;

// === Hitung waktu setiap jam (durasi per jam) ===
const intervalPerHour = totalTime / totalHours;

// === Jalankan interval ===
let timer = setInterval(() => {
  // Tambah jam
  currentHour++;

  // Jika jam mencapai 24 → reset ke 0, hari +1
  if (currentHour >= 24) {
    currentHour = 0;
    currentDay++;
  }

  // Update variabel ke Storyline
  player.SetVar("Jam", currentHour);
  player.SetVar("Hari", currentDay);

  // Stop setelah total jam tercapai
  if ((currentDay * 24 + currentHour) >= totalHours) {
    clearInterval(timer);
  }
}, intervalPerHour);

}

function Script23()
{
  // === Variasi Timer ===
// Total waktu animasi (ms)
const totalTime = 6000; // 6 detik
// Jumlah total jam yang akan ditampilkan (misal 1 hari 14 jam = 1*24 + 14 = 38 jam)
const totalHours = 101;

// === Variabel Storyline ===
const player = GetPlayer();
let currentHour = 0;
let currentDay = 0;

// === Hitung waktu setiap jam (durasi per jam) ===
const intervalPerHour = totalTime / totalHours;

// === Jalankan interval ===
let timer = setInterval(() => {
  // Tambah jam
  currentHour++;

  // Jika jam mencapai 24 → reset ke 0, hari +1
  if (currentHour >= 24) {
    currentHour = 0;
    currentDay++;
  }

  // Update variabel ke Storyline
  player.SetVar("Jam", currentHour);
  player.SetVar("Hari", currentDay);

  // Stop setelah total jam tercapai
  if ((currentDay * 24 + currentHour) >= totalHours) {
    clearInterval(timer);
  }
}, intervalPerHour);

}

function Script24()
{
  // === Variasi Timer ===
// Total waktu animasi (ms)
const totalTime = 6000; // 6 detik
// Jumlah total jam yang akan ditampilkan (misal 1 hari 14 jam = 1*24 + 14 = 38 jam)
const totalHours = 50;

// === Variabel Storyline ===
const player = GetPlayer();
let currentHour = 0;
let currentDay = 0;

// === Hitung waktu setiap jam (durasi per jam) ===
const intervalPerHour = totalTime / totalHours;

// === Jalankan interval ===
let timer = setInterval(() => {
  // Tambah jam
  currentHour++;

  // Jika jam mencapai 24 → reset ke 0, hari +1
  if (currentHour >= 24) {
    currentHour = 0;
    currentDay++;
  }

  // Update variabel ke Storyline
  player.SetVar("Jam", currentHour);
  player.SetVar("Hari", currentDay);

  // Stop setelah total jam tercapai
  if ((currentDay * 24 + currentHour) >= totalHours) {
    clearInterval(timer);
  }
}, intervalPerHour);

}

function Script25()
{
  // === Variasi Timer ===
// Total waktu animasi (ms)
const totalTime = 6000; // 6 detik
// Jumlah total jam yang akan ditampilkan (misal 1 hari 14 jam = 1*24 + 14 = 38 jam)
const totalHours = 60;

// === Variabel Storyline ===
const player = GetPlayer();
let currentHour = 0;
let currentDay = 0;

// === Hitung waktu setiap jam (durasi per jam) ===
const intervalPerHour = totalTime / totalHours;

// === Jalankan interval ===
let timer = setInterval(() => {
  // Tambah jam
  currentHour++;

  // Jika jam mencapai 24 → reset ke 0, hari +1
  if (currentHour >= 24) {
    currentHour = 0;
    currentDay++;
  }

  // Update variabel ke Storyline
  player.SetVar("Jam", currentHour);
  player.SetVar("Hari", currentDay);

  // Stop setelah total jam tercapai
  if ((currentDay * 24 + currentHour) >= totalHours) {
    clearInterval(timer);
  }
}, intervalPerHour);

}

function Script26()
{
  // === Variasi Timer ===
// Total waktu animasi (ms)
const totalTime = 6000; // 6 detik
// Jumlah total jam yang akan ditampilkan (misal 1 hari 14 jam = 1*24 + 14 = 38 jam)
const totalHours = 130;

// === Variabel Storyline ===
const player = GetPlayer();
let currentHour = 0;
let currentDay = 0;

// === Hitung waktu setiap jam (durasi per jam) ===
const intervalPerHour = totalTime / totalHours;

// === Jalankan interval ===
let timer = setInterval(() => {
  // Tambah jam
  currentHour++;

  // Jika jam mencapai 24 → reset ke 0, hari +1
  if (currentHour >= 24) {
    currentHour = 0;
    currentDay++;
  }

  // Update variabel ke Storyline
  player.SetVar("Jam", currentHour);
  player.SetVar("Hari", currentDay);

  // Stop setelah total jam tercapai
  if ((currentDay * 24 + currentHour) >= totalHours) {
    clearInterval(timer);
  }
}, intervalPerHour);

}

