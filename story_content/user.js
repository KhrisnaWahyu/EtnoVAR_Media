function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5WkvNETesrq":
        Script1();
        break;
      case "6jzMK6Z4jeS":
        Script2();
        break;
      case "6EWCvPgWc3d":
        Script3();
        break;
      case "6lyQSXPxvFa":
        Script4();
        break;
      case "6rYHgx2fsgC":
        Script5();
        break;
      case "6cJxqUyIH2e":
        Script6();
        break;
      case "6lmcrQtIao0":
        Script7();
        break;
      case "6fTOYsQxbhe":
        Script8();
        break;
      case "5qwdZ0XYVXP":
        Script9();
        break;
      case "6mjcf5HuCUP":
        Script10();
        break;
      case "6H04MWveLxl":
        Script11();
        break;
      case "6NtCXExcklb":
        Script12();
        break;
      case "6Oop4tM8p0c":
        Script13();
        break;
      case "6dZhe5e0iFx":
        Script14();
        break;
      case "6mFfOWoEY0B":
        Script15();
        break;
      case "6o8586pODgq":
        Script16();
        break;
      case "6beEdkbAQx9":
        Script17();
        break;
      case "5siihklEWuf":
        Script18();
        break;
      case "6MG81uRtc5K":
        Script19();
        break;
      case "5XGxA6wlgry":
        Script20();
        break;
      case "6O8M1TEW59J":
        Script21();
        break;
      case "5V6MjP1C9FP":
        Script22();
        break;
      case "6NQESAbaCt0":
        Script23();
        break;
      case "6hpwuJYGN6y":
        Script24();
        break;
      case "6FSaGAOhyQv":
        Script25();
        break;
      case "6X20pyr1aeS":
        Script26();
        break;
      case "5c4d46YQ4nJ":
        Script27();
        break;
      case "6jW7znzR8mI":
        Script28();
        break;
      case "673g7pDyCnm":
        Script29();
        break;
      case "6eP3z4d6TgM":
        Script30();
        break;
      case "6pYcHLLLVEN":
        Script31();
        break;
      case "6TRexY20nwB":
        Script32();
        break;
      case "5x21B5Irrzy":
        Script33();
        break;
      case "6Ra8dPEc7Qg":
        Script34();
        break;
      case "5rvK2IP00QV":
        Script35();
        break;
      case "6MTaK9P9651":
        Script36();
        break;
      case "6jflaNXpeXH":
        Script37();
        break;
      case "6eZ2bxxzihO":
        Script38();
        break;
      case "63FZYjWTh3S":
        Script39();
        break;
      case "6HH2rzWQUw2":
        Script40();
        break;
      case "5dblmz9uZTC":
        Script41();
        break;
      case "6pDn3GmH7AM":
        Script42();
        break;
      case "6fwuj7KvpxE":
        Script43();
        break;
      case "5UpNjMoUfmE":
        Script44();
        break;
      case "5VOQWxt35r3":
        Script45();
        break;
      case "6pqDnSvL4hK":
        Script46();
        break;
      case "5zEtteOyJbs":
        Script47();
        break;
      case "64Cym6u6iu6":
        Script48();
        break;
      case "6fCsoI2dDwk":
        Script49();
        break;
      case "6fxzkYugt53":
        Script50();
        break;
      case "5hiVJpJ5sD6":
        Script51();
        break;
      case "6EVzcxrqnnF":
        Script52();
        break;
      case "5xsalosspxJ":
        Script53();
        break;
      case "5pAs4ykXCEJ":
        Script54();
        break;
      case "5xOsIoOkAG8":
        Script55();
        break;
      case "5rHE7ljJuEp":
        Script56();
        break;
      case "5kqb20SjJK0":
        Script57();
        break;
      case "5cIaAftPugC":
        Script58();
        break;
      case "5tphEw7cBWh":
        Script59();
        break;
      case "6ZZzN3ery4g":
        Script60();
        break;
      case "6cpf4xwgvX7":
        Script61();
        break;
      case "5sl6roNfsHf":
        Script62();
        break;
      case "5hjdiU6Z6zy":
        Script63();
        break;
      case "5rZDkuHCfsp":
        Script64();
        break;
      case "6ETjyESTEyC":
        Script65();
        break;
  }
}

function Script1()
{
  if (window.isMuted) {
  document.querySelectorAll('audio, video').forEach(el => el.volume = 0);
  if (window.bgmAwal) window.bgmAwal.volume = 0;
  if (window.bgmUtama) window.bgmUtama.volume = 0;
}

}

function Script2()
{
  // --- Stop BGM utama jika sedang berjalan ---
if (window.bgmUtama && !window.bgmUtama.paused) {
  window.bgmUtama.pause();
  window.bgmUtama.currentTime = 0;
}

// --- Jalankan BGM awal hanya jika belum aktif ---
if (!window.bgmAwal) {
  window.bgmAwal = new Audio('story_content/Opening - BGM.mp3');
  window.bgmAwal.loop = true;
  window.bgmAwal.volume = 0.6;
}

if (window.bgmAwal.paused) {
  window.bgmAwal.play().catch(()=>{});
}

}

function Script3()
{
  // --- Stop BGM utama jika sedang berjalan ---
if (window.bgmUtama && !window.bgmUtama.paused) {
  window.bgmUtama.pause();
  window.bgmUtama.currentTime = 0;
}

// --- Jalankan BGM awal hanya jika belum aktif ---
if (!window.bgmAwal) {
  window.bgmAwal = new Audio('story_content/Opening - BGM.mp3');
  window.bgmAwal.loop = true;
  window.bgmAwal.volume = 0.6;
}

if (window.bgmAwal.paused) {
  window.bgmAwal.play().catch(()=>{});
}

}

function Script4()
{
  var bgm = document.getElementById("slideBGM");
if (bgm) {
    bgm.pause();
    bgm.currentTime = 0; // reset ke awal
}

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
  window.isMuted = false;

document.querySelectorAll('audio, video').forEach(el => {
  el.volume = 1.0;
});

if (window.bgmAwal) window.bgmAwal.volume = 0.6;  // volume normal
if (window.bgmUtama) window.bgmUtama.volume = 0.6;
if (window.clickSound) window.clickSound.volume = 1.0;

var player = GetPlayer();
player.SetVar("Mute", false);

}

function Script7()
{
  window.isMuted = true;

document.querySelectorAll('audio, video').forEach(el => {
  el.volume = 0;
});

if (window.bgmAwal) window.bgmAwal.volume = 0;
if (window.bgmUtama) window.bgmUtama.volume = 0;
if (window.clickSound) window.clickSound.volume = 0;

var player = GetPlayer();
player.SetVar("Mute", true);

}

function Script8()
{
  // --- Stop BGM awal jika masih aktif ---
if (window.bgmAwal && !window.bgmAwal.paused) {
  window.bgmAwal.pause();
  window.bgmAwal.currentTime = 0;
}

// --- Inisialisasi BGM utama jika belum ada ---
if (!window.bgmUtama) {
  window.bgmUtama = new Audio('story_content/Main - BGM.mp3');
  window.bgmUtama.loop = true;
  window.bgmUtama.volume = 0.6;
}

// --- Play BGM utama hanya jika belum berjalan ---
if (window.bgmUtama.paused) {
  window.bgmUtama.play().catch(()=>{});
}

}

function Script9()
{
  if (window.isMuted) {
  document.querySelectorAll('audio, video').forEach(el => el.volume = 0);
  if (window.bgmAwal) window.bgmAwal.volume = 0;
  if (window.bgmUtama) window.bgmUtama.volume = 0;
}

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
  window.isMuted = false;

document.querySelectorAll('audio, video').forEach(el => {
  el.volume = 1.0;
});

if (window.bgmAwal) window.bgmAwal.volume = 0.6;  // volume normal
if (window.bgmUtama) window.bgmUtama.volume = 0.6;
if (window.clickSound) window.clickSound.volume = 1.0;

var player = GetPlayer();
player.SetVar("Mute", false);

}

function Script12()
{
  window.isMuted = true;

document.querySelectorAll('audio, video').forEach(el => {
  el.volume = 0;
});

if (window.bgmAwal) window.bgmAwal.volume = 0;
if (window.bgmUtama) window.bgmUtama.volume = 0;
if (window.clickSound) window.clickSound.volume = 0;

var player = GetPlayer();
player.SetVar("Mute", true);

}

function Script13()
{
  if (window.isMuted) {
  document.querySelectorAll('audio, video').forEach(el => el.volume = 0);
  if (window.bgmAwal) window.bgmAwal.volume = 0;
  if (window.bgmUtama) window.bgmUtama.volume = 0;
}

}

function Script14()
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

function Script15()
{
  window.isMuted = false;

document.querySelectorAll('audio, video').forEach(el => {
  el.volume = 1.0;
});

if (window.bgmAwal) window.bgmAwal.volume = 0.6;  // volume normal
if (window.bgmUtama) window.bgmUtama.volume = 0.6;
if (window.clickSound) window.clickSound.volume = 1.0;

var player = GetPlayer();
player.SetVar("Mute", false);

}

function Script16()
{
  window.isMuted = true;

document.querySelectorAll('audio, video').forEach(el => {
  el.volume = 0;
});

if (window.bgmAwal) window.bgmAwal.volume = 0;
if (window.bgmUtama) window.bgmUtama.volume = 0;
if (window.clickSound) window.clickSound.volume = 0;

var player = GetPlayer();
player.SetVar("Mute", true);

}

function Script17()
{
  if (window.isMuted) {
  document.querySelectorAll('audio, video').forEach(el => el.volume = 0);
  if (window.bgmAwal) window.bgmAwal.volume = 0;
  if (window.bgmUtama) window.bgmUtama.volume = 0;
}

}

function Script18()
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

function Script19()
{
  window.isMuted = false;

document.querySelectorAll('audio, video').forEach(el => {
  el.volume = 1.0;
});

if (window.bgmAwal) window.bgmAwal.volume = 0.6;  // volume normal
if (window.bgmUtama) window.bgmUtama.volume = 0.6;
if (window.clickSound) window.clickSound.volume = 1.0;

var player = GetPlayer();
player.SetVar("Mute", false);

}

function Script20()
{
  window.isMuted = true;

document.querySelectorAll('audio, video').forEach(el => {
  el.volume = 0;
});

if (window.bgmAwal) window.bgmAwal.volume = 0;
if (window.bgmUtama) window.bgmUtama.volume = 0;
if (window.clickSound) window.clickSound.volume = 0;

var player = GetPlayer();
player.SetVar("Mute", true);

}

function Script21()
{
  if (window.isMuted) {
  document.querySelectorAll('audio, video').forEach(el => el.volume = 0);
  if (window.bgmAwal) window.bgmAwal.volume = 0;
  if (window.bgmUtama) window.bgmUtama.volume = 0;
}

}

function Script22()
{
  if (window.isMuted) {
  document.querySelectorAll('audio, video').forEach(el => el.volume = 0);
  if (window.bgmAwal) window.bgmAwal.volume = 0;
  if (window.bgmUtama) window.bgmUtama.volume = 0;
}

}

function Script23()
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

function Script24()
{
  window.isMuted = false;

document.querySelectorAll('audio, video').forEach(el => {
  el.volume = 1.0;
});

if (window.bgmAwal) window.bgmAwal.volume = 0.6;  // volume normal
if (window.bgmUtama) window.bgmUtama.volume = 0.6;
if (window.clickSound) window.clickSound.volume = 1.0;

var player = GetPlayer();
player.SetVar("Mute", false);

}

function Script25()
{
  window.isMuted = true;

document.querySelectorAll('audio, video').forEach(el => {
  el.volume = 0;
});

if (window.bgmAwal) window.bgmAwal.volume = 0;
if (window.bgmUtama) window.bgmUtama.volume = 0;
if (window.clickSound) window.clickSound.volume = 0;

var player = GetPlayer();
player.SetVar("Mute", true);

}

function Script26()
{
  if (window.isMuted) {
  document.querySelectorAll('audio, video').forEach(el => el.volume = 0);
  if (window.bgmAwal) window.bgmAwal.volume = 0;
  if (window.bgmUtama) window.bgmUtama.volume = 0;
}

}

function Script27()
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

function Script28()
{
  window.isMuted = false;

document.querySelectorAll('audio, video').forEach(el => {
  el.volume = 1.0;
});

if (window.bgmAwal) window.bgmAwal.volume = 0.6;  // volume normal
if (window.bgmUtama) window.bgmUtama.volume = 0.6;
if (window.clickSound) window.clickSound.volume = 1.0;

var player = GetPlayer();
player.SetVar("Mute", false);

}

function Script29()
{
  window.isMuted = true;

document.querySelectorAll('audio, video').forEach(el => {
  el.volume = 0;
});

if (window.bgmAwal) window.bgmAwal.volume = 0;
if (window.bgmUtama) window.bgmUtama.volume = 0;
if (window.clickSound) window.clickSound.volume = 0;

var player = GetPlayer();
player.SetVar("Mute", true);

}

function Script30()
{
  if (window.isMuted) {
  document.querySelectorAll('audio, video').forEach(el => el.volume = 0);
  if (window.bgmAwal) window.bgmAwal.volume = 0;
  if (window.bgmUtama) window.bgmUtama.volume = 0;
}

}

function Script31()
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

function Script32()
{
  window.isMuted = false;

document.querySelectorAll('audio, video').forEach(el => {
  el.volume = 1.0;
});

if (window.bgmAwal) window.bgmAwal.volume = 0.6;  // volume normal
if (window.bgmUtama) window.bgmUtama.volume = 0.6;
if (window.clickSound) window.clickSound.volume = 1.0;

var player = GetPlayer();
player.SetVar("Mute", false);

}

function Script33()
{
  window.isMuted = true;

document.querySelectorAll('audio, video').forEach(el => {
  el.volume = 0;
});

if (window.bgmAwal) window.bgmAwal.volume = 0;
if (window.bgmUtama) window.bgmUtama.volume = 0;
if (window.clickSound) window.clickSound.volume = 0;

var player = GetPlayer();
player.SetVar("Mute", true);

}

function Script34()
{
  if (window.isMuted) {
  document.querySelectorAll('audio, video').forEach(el => el.volume = 0);
  if (window.bgmAwal) window.bgmAwal.volume = 0;
  if (window.bgmUtama) window.bgmUtama.volume = 0;
}

}

function Script35()
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

function Script36()
{
  window.isMuted = false;

document.querySelectorAll('audio, video').forEach(el => {
  el.volume = 1.0;
});

if (window.bgmAwal) window.bgmAwal.volume = 0.6;  // volume normal
if (window.bgmUtama) window.bgmUtama.volume = 0.6;
if (window.clickSound) window.clickSound.volume = 1.0;

var player = GetPlayer();
player.SetVar("Mute", false);

}

function Script37()
{
  window.isMuted = true;

document.querySelectorAll('audio, video').forEach(el => {
  el.volume = 0;
});

if (window.bgmAwal) window.bgmAwal.volume = 0;
if (window.bgmUtama) window.bgmUtama.volume = 0;
if (window.clickSound) window.clickSound.volume = 0;

var player = GetPlayer();
player.SetVar("Mute", true);

}

function Script38()
{
  if (window.isMuted) {
  document.querySelectorAll('audio, video').forEach(el => el.volume = 0);
  if (window.bgmAwal) window.bgmAwal.volume = 0;
  if (window.bgmUtama) window.bgmUtama.volume = 0;
}

}

function Script39()
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

function Script40()
{
  window.isMuted = false;

document.querySelectorAll('audio, video').forEach(el => {
  el.volume = 1.0;
});

if (window.bgmAwal) window.bgmAwal.volume = 0.6;  // volume normal
if (window.bgmUtama) window.bgmUtama.volume = 0.6;
if (window.clickSound) window.clickSound.volume = 1.0;

var player = GetPlayer();
player.SetVar("Mute", false);

}

function Script41()
{
  window.isMuted = true;

document.querySelectorAll('audio, video').forEach(el => {
  el.volume = 0;
});

if (window.bgmAwal) window.bgmAwal.volume = 0;
if (window.bgmUtama) window.bgmUtama.volume = 0;
if (window.clickSound) window.clickSound.volume = 0;

var player = GetPlayer();
player.SetVar("Mute", true);

}

function Script42()
{
  if (window.isMuted) {
  document.querySelectorAll('audio, video').forEach(el => el.volume = 0);
  if (window.bgmAwal) window.bgmAwal.volume = 0;
  if (window.bgmUtama) window.bgmUtama.volume = 0;
}

}

function Script43()
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

function Script44()
{
  window.isMuted = false;

document.querySelectorAll('audio, video').forEach(el => {
  el.volume = 1.0;
});

if (window.bgmAwal) window.bgmAwal.volume = 0.6;  // volume normal
if (window.bgmUtama) window.bgmUtama.volume = 0.6;
if (window.clickSound) window.clickSound.volume = 1.0;

var player = GetPlayer();
player.SetVar("Mute", false);

}

function Script45()
{
  window.isMuted = true;

document.querySelectorAll('audio, video').forEach(el => {
  el.volume = 0;
});

if (window.bgmAwal) window.bgmAwal.volume = 0;
if (window.bgmUtama) window.bgmUtama.volume = 0;
if (window.clickSound) window.clickSound.volume = 0;

var player = GetPlayer();
player.SetVar("Mute", true);

}

function Script46()
{
  if (window.isMuted) {
  document.querySelectorAll('audio, video').forEach(el => el.volume = 0);
  if (window.bgmAwal) window.bgmAwal.volume = 0;
  if (window.bgmUtama) window.bgmUtama.volume = 0;
}

}

function Script47()
{
  if (window.isMuted) {
  document.querySelectorAll('audio, video').forEach(el => el.volume = 0);
  if (window.bgmAwal) window.bgmAwal.volume = 0;
  if (window.bgmUtama) window.bgmUtama.volume = 0;
}

}

function Script48()
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

function Script49()
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

function Script50()
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

function Script51()
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

function Script52()
{
  window.isMuted = false;

document.querySelectorAll('audio, video').forEach(el => {
  el.volume = 1.0;
});

if (window.bgmAwal) window.bgmAwal.volume = 0.6;  // volume normal
if (window.bgmUtama) window.bgmUtama.volume = 0.6;
if (window.clickSound) window.clickSound.volume = 1.0;

var player = GetPlayer();
player.SetVar("Mute", false);

}

function Script53()
{
  window.isMuted = true;

document.querySelectorAll('audio, video').forEach(el => {
  el.volume = 0;
});

if (window.bgmAwal) window.bgmAwal.volume = 0;
if (window.bgmUtama) window.bgmUtama.volume = 0;
if (window.clickSound) window.clickSound.volume = 0;

var player = GetPlayer();
player.SetVar("Mute", true);

}

function Script54()
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

function Script55()
{
  window.isMuted = false;

document.querySelectorAll('audio, video').forEach(el => {
  el.volume = 1.0;
});

if (window.bgmAwal) window.bgmAwal.volume = 0.6;  // volume normal
if (window.bgmUtama) window.bgmUtama.volume = 0.6;
if (window.clickSound) window.clickSound.volume = 1.0;

var player = GetPlayer();
player.SetVar("Mute", false);

}

function Script56()
{
  window.isMuted = true;

document.querySelectorAll('audio, video').forEach(el => {
  el.volume = 0;
});

if (window.bgmAwal) window.bgmAwal.volume = 0;
if (window.bgmUtama) window.bgmUtama.volume = 0;
if (window.clickSound) window.clickSound.volume = 0;

var player = GetPlayer();
player.SetVar("Mute", true);

}

function Script57()
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

function Script58()
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

function Script59()
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

function Script60()
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

function Script61()
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

function Script62()
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

function Script63()
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

function Script64()
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

function Script65()
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

