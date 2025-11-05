window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script7 = function()
{
  (function(){
  // Jika sudah inisialisasi, hentikan (prevent double init)
  if (window.AudioManager && window.AudioManager.inited) return;

  window.AudioManager = {
    inited: true,
    isMuted: false,
    intro: null,
    main: null,
    defaultIntroVol: 0.6,
    defaultMainVol: 0.6,
    // init: setup observer dan sinkron dengan variable Storyline
    init: function() {
      var player = GetPlayer();
      // sync initial mute state from Storyline variable (if exists)
      try { this.isMuted = !!player.GetVar("Mute"); } catch(e){}

      // MutationObserver: apply mute/volume to any new audio/video created by Storyline
      var obs = new MutationObserver((mutations) => {
        document.querySelectorAll('audio, video').forEach(el => {
          // apply volume/mute according to global state
          if (this.isMuted) { el.volume = 0; el.muted = true; }
          else {
            // don't override audio-managed volumes too aggressively; set to 1 for unknown ones
            if (el === this.intro) el.volume = this.defaultIntroVol;
            else if (el === this.main) el.volume = this.defaultMainVol;
            else el.volume = 1.0;
            el.muted = false;
          }
        });
      });
      obs.observe(document.body, { childList: true, subtree: true });
      this._observer = obs;

      // Also apply to existing elements now
      this.applyToExisting();

      // Expose quick handlers
      var self = this;
      this.playIntro = function(src){
        // if main playing, do nothing (we don't auto-start intro over main)
        if (self.main && !self.main.paused) return;
        if (!self.intro) {
          self.intro = new Audio(src);
          self.intro.loop = true;
          self.intro.volume = self.isMuted ? 0 : self.defaultIntroVol;
          document.body.appendChild(self.intro); // optional
        } else {
          self.intro.src = src;
          self.intro.volume = self.isMuted ? 0 : self.defaultIntroVol;
        }
        // restart from zero
        try { self.intro.pause(); self.intro.currentTime = 0; } catch(e){}
        self.intro.play().catch(()=>{});
      };

      this.stopIntro = function(){
        if (self.intro) {
          try { self.intro.pause(); self.intro.currentTime = 0; } catch(e){}
        }
      };

      this.playMain = function(src){
        // stop intro first
        try { if (self.intro) { self.intro.pause(); self.intro.currentTime = 0; } } catch(e){}
        if (!self.main) {
          self.main = new Audio(src);
          self.main.loop = true;
          self.main.volume = self.isMuted ? 0 : self.defaultMainVol;
          document.body.appendChild(self.main);
        } else {
          self.main.src = src;
          self.main.volume = self.isMuted ? 0 : self.defaultMainVol;
        }
        self.main.play().catch(()=>{});
      };

      this.stopMain = function(){
        if (self.main) {
          try { self.main.pause(); self.main.currentTime = 0; } catch(e){}
        }
      };

      this.muteAll = function(){
        this.isMuted = true;
        try { GetPlayer().SetVar("Mute", true); } catch(e){}
        document.querySelectorAll('audio, video').forEach(el => {
          try { el.muted = true; el.volume = 0; } catch(e){}
        });
      };

      this.unmuteAll = function(){
        this.isMuted = false;
        try { GetPlayer().SetVar("Mute", false); } catch(e){}
        // restore volumes (intro/main to defaults, others to 1)
        document.querySelectorAll('audio, video').forEach(el => {
          try {
            el.muted = false;
            if (el === self.intro) el.volume = self.defaultIntroVol;
            else if (el === self.main) el.volume = self.defaultMainVol;
            else el.volume = 1.0;
          } catch(e){}
        });
      };

      // helper: apply to existing audio/video now
      this.applyToExisting = function(){
        document.querySelectorAll('audio, video').forEach(el => {
          try {
            if (this.isMuted) { el.muted = true; el.volume = 0; }
            else el.muted = false;
          } catch(e){}
        });
      };

      // ensure Storyline variable and UI synced on load
      try {
        var varMute = player.GetVar("Mute");
        if (varMute) this.muteAll(); else this.unmuteAll();
      } catch(e){}
    } // end init
  };

  // initialize immediately
  window.AudioManager.init();
})();

}

window.Script8 = function()
{
  // play intro only jika main tidak sedang berjalan
if (!window.AudioManager) return;
window.AudioManager.playIntro('story_content/bgm_awal.mp3');

}

window.Script9 = function()
{
  if (window.AudioManager) { window.AudioManager.stopMain(); window.AudioManager.playIntro('story_content/Opening - BGM.mp3'); }
if (window.AudioManager) window.AudioManager.stopMain();

}

window.Script10 = function()
{
  var bgm = document.getElementById("slideBGM");
if (bgm) {
    bgm.pause();
    bgm.currentTime = 0; // reset ke awal
}

}

window.Script11 = function()
{
  (function(){
  // Jika sudah inisialisasi, hentikan (prevent double init)
  if (window.AudioManager && window.AudioManager.inited) return;

  window.AudioManager = {
    inited: true,
    isMuted: false,
    intro: null,
    main: null,
    defaultIntroVol: 0.6,
    defaultMainVol: 0.6,
    // init: setup observer dan sinkron dengan variable Storyline
    init: function() {
      var player = GetPlayer();
      // sync initial mute state from Storyline variable (if exists)
      try { this.isMuted = !!player.GetVar("Mute"); } catch(e){}

      // MutationObserver: apply mute/volume to any new audio/video created by Storyline
      var obs = new MutationObserver((mutations) => {
        document.querySelectorAll('audio, video').forEach(el => {
          // apply volume/mute according to global state
          if (this.isMuted) { el.volume = 0; el.muted = true; }
          else {
            // don't override audio-managed volumes too aggressively; set to 1 for unknown ones
            if (el === this.intro) el.volume = this.defaultIntroVol;
            else if (el === this.main) el.volume = this.defaultMainVol;
            else el.volume = 1.0;
            el.muted = false;
          }
        });
      });
      obs.observe(document.body, { childList: true, subtree: true });
      this._observer = obs;

      // Also apply to existing elements now
      this.applyToExisting();

      // Expose quick handlers
      var self = this;
      this.playIntro = function(src){
        // if main playing, do nothing (we don't auto-start intro over main)
        if (self.main && !self.main.paused) return;
        if (!self.intro) {
          self.intro = new Audio(src);
          self.intro.loop = true;
          self.intro.volume = self.isMuted ? 0 : self.defaultIntroVol;
          document.body.appendChild(self.intro); // optional
        } else {
          self.intro.src = src;
          self.intro.volume = self.isMuted ? 0 : self.defaultIntroVol;
        }
        // restart from zero
        try { self.intro.pause(); self.intro.currentTime = 0; } catch(e){}
        self.intro.play().catch(()=>{});
      };

      this.stopIntro = function(){
        if (self.intro) {
          try { self.intro.pause(); self.intro.currentTime = 0; } catch(e){}
        }
      };

      this.playMain = function(src){
        // stop intro first
        try { if (self.intro) { self.intro.pause(); self.intro.currentTime = 0; } } catch(e){}
        if (!self.main) {
          self.main = new Audio(src);
          self.main.loop = true;
          self.main.volume = self.isMuted ? 0 : self.defaultMainVol;
          document.body.appendChild(self.main);
        } else {
          self.main.src = src;
          self.main.volume = self.isMuted ? 0 : self.defaultMainVol;
        }
        self.main.play().catch(()=>{});
      };

      this.stopMain = function(){
        if (self.main) {
          try { self.main.pause(); self.main.currentTime = 0; } catch(e){}
        }
      };

      this.muteAll = function(){
        this.isMuted = true;
        try { GetPlayer().SetVar("Mute", true); } catch(e){}
        document.querySelectorAll('audio, video').forEach(el => {
          try { el.muted = true; el.volume = 0; } catch(e){}
        });
      };

      this.unmuteAll = function(){
        this.isMuted = false;
        try { GetPlayer().SetVar("Mute", false); } catch(e){}
        // restore volumes (intro/main to defaults, others to 1)
        document.querySelectorAll('audio, video').forEach(el => {
          try {
            el.muted = false;
            if (el === self.intro) el.volume = self.defaultIntroVol;
            else if (el === self.main) el.volume = self.defaultMainVol;
            else el.volume = 1.0;
          } catch(e){}
        });
      };

      // helper: apply to existing audio/video now
      this.applyToExisting = function(){
        document.querySelectorAll('audio, video').forEach(el => {
          try {
            if (this.isMuted) { el.muted = true; el.volume = 0; }
            else el.muted = false;
          } catch(e){}
        });
      };

      // ensure Storyline variable and UI synced on load
      try {
        var varMute = player.GetVar("Mute");
        if (varMute) this.muteAll(); else this.unmuteAll();
      } catch(e){}
    } // end init
  };

  // initialize immediately
  window.AudioManager.init();
})();

}

window.Script12 = function()
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

window.Script13 = function()
{
  var player = GetPlayer();

if (window.AudioManager) {
    window.AudioManager.unmuteAll();
}

player.SetVar("Mute", false);

}

window.Script14 = function()
{
  var player = GetPlayer();
if (window.AudioManager) {
    window.AudioManager.muteAll();
}
// Pastikan tipe data boolean
player.SetVar("Mute", true);

}

window.Script15 = function()
{
  if (window.AudioManager) window.AudioManager.playMain('story_content/Main - BGM.mp3');

}

window.Script16 = function()
{
  (function(){
  // Jika sudah inisialisasi, hentikan (prevent double init)
  if (window.AudioManager && window.AudioManager.inited) return;

  window.AudioManager = {
    inited: true,
    isMuted: false,
    intro: null,
    main: null,
    defaultIntroVol: 0.6,
    defaultMainVol: 0.6,
    // init: setup observer dan sinkron dengan variable Storyline
    init: function() {
      var player = GetPlayer();
      // sync initial mute state from Storyline variable (if exists)
      try { this.isMuted = !!player.GetVar("Mute"); } catch(e){}

      // MutationObserver: apply mute/volume to any new audio/video created by Storyline
      var obs = new MutationObserver((mutations) => {
        document.querySelectorAll('audio, video').forEach(el => {
          // apply volume/mute according to global state
          if (this.isMuted) { el.volume = 0; el.muted = true; }
          else {
            // don't override audio-managed volumes too aggressively; set to 1 for unknown ones
            if (el === this.intro) el.volume = this.defaultIntroVol;
            else if (el === this.main) el.volume = this.defaultMainVol;
            else el.volume = 1.0;
            el.muted = false;
          }
        });
      });
      obs.observe(document.body, { childList: true, subtree: true });
      this._observer = obs;

      // Also apply to existing elements now
      this.applyToExisting();

      // Expose quick handlers
      var self = this;
      this.playIntro = function(src){
        // if main playing, do nothing (we don't auto-start intro over main)
        if (self.main && !self.main.paused) return;
        if (!self.intro) {
          self.intro = new Audio(src);
          self.intro.loop = true;
          self.intro.volume = self.isMuted ? 0 : self.defaultIntroVol;
          document.body.appendChild(self.intro); // optional
        } else {
          self.intro.src = src;
          self.intro.volume = self.isMuted ? 0 : self.defaultIntroVol;
        }
        // restart from zero
        try { self.intro.pause(); self.intro.currentTime = 0; } catch(e){}
        self.intro.play().catch(()=>{});
      };

      this.stopIntro = function(){
        if (self.intro) {
          try { self.intro.pause(); self.intro.currentTime = 0; } catch(e){}
        }
      };

      this.playMain = function(src){
        // stop intro first
        try { if (self.intro) { self.intro.pause(); self.intro.currentTime = 0; } } catch(e){}
        if (!self.main) {
          self.main = new Audio(src);
          self.main.loop = true;
          self.main.volume = self.isMuted ? 0 : self.defaultMainVol;
          document.body.appendChild(self.main);
        } else {
          self.main.src = src;
          self.main.volume = self.isMuted ? 0 : self.defaultMainVol;
        }
        self.main.play().catch(()=>{});
      };

      this.stopMain = function(){
        if (self.main) {
          try { self.main.pause(); self.main.currentTime = 0; } catch(e){}
        }
      };

      this.muteAll = function(){
        this.isMuted = true;
        try { GetPlayer().SetVar("Mute", true); } catch(e){}
        document.querySelectorAll('audio, video').forEach(el => {
          try { el.muted = true; el.volume = 0; } catch(e){}
        });
      };

      this.unmuteAll = function(){
        this.isMuted = false;
        try { GetPlayer().SetVar("Mute", false); } catch(e){}
        // restore volumes (intro/main to defaults, others to 1)
        document.querySelectorAll('audio, video').forEach(el => {
          try {
            el.muted = false;
            if (el === self.intro) el.volume = self.defaultIntroVol;
            else if (el === self.main) el.volume = self.defaultMainVol;
            else el.volume = 1.0;
          } catch(e){}
        });
      };

      // helper: apply to existing audio/video now
      this.applyToExisting = function(){
        document.querySelectorAll('audio, video').forEach(el => {
          try {
            if (this.isMuted) { el.muted = true; el.volume = 0; }
            else el.muted = false;
          } catch(e){}
        });
      };

      // ensure Storyline variable and UI synced on load
      try {
        var varMute = player.GetVar("Mute");
        if (varMute) this.muteAll(); else this.unmuteAll();
      } catch(e){}
    } // end init
  };

  // initialize immediately
  window.AudioManager.init();
})();

}

window.Script17 = function()
{
  if (window.isMuted) {
  document.querySelectorAll('audio, video').forEach(el => el.volume = 0);
  if (window.bgmAwal) window.bgmAwal.volume = 0;
  if (window.bgmUtama) window.bgmUtama.volume = 0;
}

}

window.Script18 = function()
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

window.Script19 = function()
{
  if (window.AudioManager) window.AudioManager.unmuteAll();
GetPlayer().SetVar("Mute", false);

}

window.Script20 = function()
{
  if (window.AudioManager) window.AudioManager.muteAll();
GetPlayer().SetVar("Mute", true);

}

window.Script21 = function()
{
  (function(){
  // Jika sudah inisialisasi, hentikan (prevent double init)
  if (window.AudioManager && window.AudioManager.inited) return;

  window.AudioManager = {
    inited: true,
    isMuted: false,
    intro: null,
    main: null,
    defaultIntroVol: 0.6,
    defaultMainVol: 0.6,
    // init: setup observer dan sinkron dengan variable Storyline
    init: function() {
      var player = GetPlayer();
      // sync initial mute state from Storyline variable (if exists)
      try { this.isMuted = !!player.GetVar("Mute"); } catch(e){}

      // MutationObserver: apply mute/volume to any new audio/video created by Storyline
      var obs = new MutationObserver((mutations) => {
        document.querySelectorAll('audio, video').forEach(el => {
          // apply volume/mute according to global state
          if (this.isMuted) { el.volume = 0; el.muted = true; }
          else {
            // don't override audio-managed volumes too aggressively; set to 1 for unknown ones
            if (el === this.intro) el.volume = this.defaultIntroVol;
            else if (el === this.main) el.volume = this.defaultMainVol;
            else el.volume = 1.0;
            el.muted = false;
          }
        });
      });
      obs.observe(document.body, { childList: true, subtree: true });
      this._observer = obs;

      // Also apply to existing elements now
      this.applyToExisting();

      // Expose quick handlers
      var self = this;
      this.playIntro = function(src){
        // if main playing, do nothing (we don't auto-start intro over main)
        if (self.main && !self.main.paused) return;
        if (!self.intro) {
          self.intro = new Audio(src);
          self.intro.loop = true;
          self.intro.volume = self.isMuted ? 0 : self.defaultIntroVol;
          document.body.appendChild(self.intro); // optional
        } else {
          self.intro.src = src;
          self.intro.volume = self.isMuted ? 0 : self.defaultIntroVol;
        }
        // restart from zero
        try { self.intro.pause(); self.intro.currentTime = 0; } catch(e){}
        self.intro.play().catch(()=>{});
      };

      this.stopIntro = function(){
        if (self.intro) {
          try { self.intro.pause(); self.intro.currentTime = 0; } catch(e){}
        }
      };

      this.playMain = function(src){
        // stop intro first
        try { if (self.intro) { self.intro.pause(); self.intro.currentTime = 0; } } catch(e){}
        if (!self.main) {
          self.main = new Audio(src);
          self.main.loop = true;
          self.main.volume = self.isMuted ? 0 : self.defaultMainVol;
          document.body.appendChild(self.main);
        } else {
          self.main.src = src;
          self.main.volume = self.isMuted ? 0 : self.defaultMainVol;
        }
        self.main.play().catch(()=>{});
      };

      this.stopMain = function(){
        if (self.main) {
          try { self.main.pause(); self.main.currentTime = 0; } catch(e){}
        }
      };

      this.muteAll = function(){
        this.isMuted = true;
        try { GetPlayer().SetVar("Mute", true); } catch(e){}
        document.querySelectorAll('audio, video').forEach(el => {
          try { el.muted = true; el.volume = 0; } catch(e){}
        });
      };

      this.unmuteAll = function(){
        this.isMuted = false;
        try { GetPlayer().SetVar("Mute", false); } catch(e){}
        // restore volumes (intro/main to defaults, others to 1)
        document.querySelectorAll('audio, video').forEach(el => {
          try {
            el.muted = false;
            if (el === self.intro) el.volume = self.defaultIntroVol;
            else if (el === self.main) el.volume = self.defaultMainVol;
            else el.volume = 1.0;
          } catch(e){}
        });
      };

      // helper: apply to existing audio/video now
      this.applyToExisting = function(){
        document.querySelectorAll('audio, video').forEach(el => {
          try {
            if (this.isMuted) { el.muted = true; el.volume = 0; }
            else el.muted = false;
          } catch(e){}
        });
      };

      // ensure Storyline variable and UI synced on load
      try {
        var varMute = player.GetVar("Mute");
        if (varMute) this.muteAll(); else this.unmuteAll();
      } catch(e){}
    } // end init
  };

  // initialize immediately
  window.AudioManager.init();
})();

}

window.Script22 = function()
{
  if (window.isMuted) {
  document.querySelectorAll('audio, video').forEach(el => el.volume = 0);
  if (window.bgmAwal) window.bgmAwal.volume = 0;
  if (window.bgmUtama) window.bgmUtama.volume = 0;
}

}

window.Script23 = function()
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

window.Script24 = function()
{
  if (window.AudioManager) window.AudioManager.unmuteAll();
GetPlayer().SetVar("Mute", false);

}

window.Script25 = function()
{
  if (window.AudioManager) window.AudioManager.muteAll();
GetPlayer().SetVar("Mute", true);

}

window.Script26 = function()
{
  (function(){
  // Jika sudah inisialisasi, hentikan (prevent double init)
  if (window.AudioManager && window.AudioManager.inited) return;

  window.AudioManager = {
    inited: true,
    isMuted: false,
    intro: null,
    main: null,
    defaultIntroVol: 0.6,
    defaultMainVol: 0.6,
    // init: setup observer dan sinkron dengan variable Storyline
    init: function() {
      var player = GetPlayer();
      // sync initial mute state from Storyline variable (if exists)
      try { this.isMuted = !!player.GetVar("Mute"); } catch(e){}

      // MutationObserver: apply mute/volume to any new audio/video created by Storyline
      var obs = new MutationObserver((mutations) => {
        document.querySelectorAll('audio, video').forEach(el => {
          // apply volume/mute according to global state
          if (this.isMuted) { el.volume = 0; el.muted = true; }
          else {
            // don't override audio-managed volumes too aggressively; set to 1 for unknown ones
            if (el === this.intro) el.volume = this.defaultIntroVol;
            else if (el === this.main) el.volume = this.defaultMainVol;
            else el.volume = 1.0;
            el.muted = false;
          }
        });
      });
      obs.observe(document.body, { childList: true, subtree: true });
      this._observer = obs;

      // Also apply to existing elements now
      this.applyToExisting();

      // Expose quick handlers
      var self = this;
      this.playIntro = function(src){
        // if main playing, do nothing (we don't auto-start intro over main)
        if (self.main && !self.main.paused) return;
        if (!self.intro) {
          self.intro = new Audio(src);
          self.intro.loop = true;
          self.intro.volume = self.isMuted ? 0 : self.defaultIntroVol;
          document.body.appendChild(self.intro); // optional
        } else {
          self.intro.src = src;
          self.intro.volume = self.isMuted ? 0 : self.defaultIntroVol;
        }
        // restart from zero
        try { self.intro.pause(); self.intro.currentTime = 0; } catch(e){}
        self.intro.play().catch(()=>{});
      };

      this.stopIntro = function(){
        if (self.intro) {
          try { self.intro.pause(); self.intro.currentTime = 0; } catch(e){}
        }
      };

      this.playMain = function(src){
        // stop intro first
        try { if (self.intro) { self.intro.pause(); self.intro.currentTime = 0; } } catch(e){}
        if (!self.main) {
          self.main = new Audio(src);
          self.main.loop = true;
          self.main.volume = self.isMuted ? 0 : self.defaultMainVol;
          document.body.appendChild(self.main);
        } else {
          self.main.src = src;
          self.main.volume = self.isMuted ? 0 : self.defaultMainVol;
        }
        self.main.play().catch(()=>{});
      };

      this.stopMain = function(){
        if (self.main) {
          try { self.main.pause(); self.main.currentTime = 0; } catch(e){}
        }
      };

      this.muteAll = function(){
        this.isMuted = true;
        try { GetPlayer().SetVar("Mute", true); } catch(e){}
        document.querySelectorAll('audio, video').forEach(el => {
          try { el.muted = true; el.volume = 0; } catch(e){}
        });
      };

      this.unmuteAll = function(){
        this.isMuted = false;
        try { GetPlayer().SetVar("Mute", false); } catch(e){}
        // restore volumes (intro/main to defaults, others to 1)
        document.querySelectorAll('audio, video').forEach(el => {
          try {
            el.muted = false;
            if (el === self.intro) el.volume = self.defaultIntroVol;
            else if (el === self.main) el.volume = self.defaultMainVol;
            else el.volume = 1.0;
          } catch(e){}
        });
      };

      // helper: apply to existing audio/video now
      this.applyToExisting = function(){
        document.querySelectorAll('audio, video').forEach(el => {
          try {
            if (this.isMuted) { el.muted = true; el.volume = 0; }
            else el.muted = false;
          } catch(e){}
        });
      };

      // ensure Storyline variable and UI synced on load
      try {
        var varMute = player.GetVar("Mute");
        if (varMute) this.muteAll(); else this.unmuteAll();
      } catch(e){}
    } // end init
  };

  // initialize immediately
  window.AudioManager.init();
})();

}

window.Script27 = function()
{
  if (window.isMuted) {
  document.querySelectorAll('audio, video').forEach(el => el.volume = 0);
  if (window.bgmAwal) window.bgmAwal.volume = 0;
  if (window.bgmUtama) window.bgmUtama.volume = 0;
}

}

window.Script28 = function()
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

window.Script29 = function()
{
  if (window.AudioManager) window.AudioManager.unmuteAll();
GetPlayer().SetVar("Mute", false);

}

window.Script30 = function()
{
  if (window.AudioManager) window.AudioManager.muteAll();
GetPlayer().SetVar("Mute", true);

}

window.Script31 = function()
{
  (function(){
  // Jika sudah inisialisasi, hentikan (prevent double init)
  if (window.AudioManager && window.AudioManager.inited) return;

  window.AudioManager = {
    inited: true,
    isMuted: false,
    intro: null,
    main: null,
    defaultIntroVol: 0.6,
    defaultMainVol: 0.6,
    // init: setup observer dan sinkron dengan variable Storyline
    init: function() {
      var player = GetPlayer();
      // sync initial mute state from Storyline variable (if exists)
      try { this.isMuted = !!player.GetVar("Mute"); } catch(e){}

      // MutationObserver: apply mute/volume to any new audio/video created by Storyline
      var obs = new MutationObserver((mutations) => {
        document.querySelectorAll('audio, video').forEach(el => {
          // apply volume/mute according to global state
          if (this.isMuted) { el.volume = 0; el.muted = true; }
          else {
            // don't override audio-managed volumes too aggressively; set to 1 for unknown ones
            if (el === this.intro) el.volume = this.defaultIntroVol;
            else if (el === this.main) el.volume = this.defaultMainVol;
            else el.volume = 1.0;
            el.muted = false;
          }
        });
      });
      obs.observe(document.body, { childList: true, subtree: true });
      this._observer = obs;

      // Also apply to existing elements now
      this.applyToExisting();

      // Expose quick handlers
      var self = this;
      this.playIntro = function(src){
        // if main playing, do nothing (we don't auto-start intro over main)
        if (self.main && !self.main.paused) return;
        if (!self.intro) {
          self.intro = new Audio(src);
          self.intro.loop = true;
          self.intro.volume = self.isMuted ? 0 : self.defaultIntroVol;
          document.body.appendChild(self.intro); // optional
        } else {
          self.intro.src = src;
          self.intro.volume = self.isMuted ? 0 : self.defaultIntroVol;
        }
        // restart from zero
        try { self.intro.pause(); self.intro.currentTime = 0; } catch(e){}
        self.intro.play().catch(()=>{});
      };

      this.stopIntro = function(){
        if (self.intro) {
          try { self.intro.pause(); self.intro.currentTime = 0; } catch(e){}
        }
      };

      this.playMain = function(src){
        // stop intro first
        try { if (self.intro) { self.intro.pause(); self.intro.currentTime = 0; } } catch(e){}
        if (!self.main) {
          self.main = new Audio(src);
          self.main.loop = true;
          self.main.volume = self.isMuted ? 0 : self.defaultMainVol;
          document.body.appendChild(self.main);
        } else {
          self.main.src = src;
          self.main.volume = self.isMuted ? 0 : self.defaultMainVol;
        }
        self.main.play().catch(()=>{});
      };

      this.stopMain = function(){
        if (self.main) {
          try { self.main.pause(); self.main.currentTime = 0; } catch(e){}
        }
      };

      this.muteAll = function(){
        this.isMuted = true;
        try { GetPlayer().SetVar("Mute", true); } catch(e){}
        document.querySelectorAll('audio, video').forEach(el => {
          try { el.muted = true; el.volume = 0; } catch(e){}
        });
      };

      this.unmuteAll = function(){
        this.isMuted = false;
        try { GetPlayer().SetVar("Mute", false); } catch(e){}
        // restore volumes (intro/main to defaults, others to 1)
        document.querySelectorAll('audio, video').forEach(el => {
          try {
            el.muted = false;
            if (el === self.intro) el.volume = self.defaultIntroVol;
            else if (el === self.main) el.volume = self.defaultMainVol;
            else el.volume = 1.0;
          } catch(e){}
        });
      };

      // helper: apply to existing audio/video now
      this.applyToExisting = function(){
        document.querySelectorAll('audio, video').forEach(el => {
          try {
            if (this.isMuted) { el.muted = true; el.volume = 0; }
            else el.muted = false;
          } catch(e){}
        });
      };

      // ensure Storyline variable and UI synced on load
      try {
        var varMute = player.GetVar("Mute");
        if (varMute) this.muteAll(); else this.unmuteAll();
      } catch(e){}
    } // end init
  };

  // initialize immediately
  window.AudioManager.init();
})();

}

window.Script32 = function()
{
  if (window.isMuted) {
  document.querySelectorAll('audio, video').forEach(el => el.volume = 0);
  if (window.bgmAwal) window.bgmAwal.volume = 0;
  if (window.bgmUtama) window.bgmUtama.volume = 0;
}

}

window.Script33 = function()
{
  (function(){
  // Jika sudah inisialisasi, hentikan (prevent double init)
  if (window.AudioManager && window.AudioManager.inited) return;

  window.AudioManager = {
    inited: true,
    isMuted: false,
    intro: null,
    main: null,
    defaultIntroVol: 0.6,
    defaultMainVol: 0.6,
    // init: setup observer dan sinkron dengan variable Storyline
    init: function() {
      var player = GetPlayer();
      // sync initial mute state from Storyline variable (if exists)
      try { this.isMuted = !!player.GetVar("Mute"); } catch(e){}

      // MutationObserver: apply mute/volume to any new audio/video created by Storyline
      var obs = new MutationObserver((mutations) => {
        document.querySelectorAll('audio, video').forEach(el => {
          // apply volume/mute according to global state
          if (this.isMuted) { el.volume = 0; el.muted = true; }
          else {
            // don't override audio-managed volumes too aggressively; set to 1 for unknown ones
            if (el === this.intro) el.volume = this.defaultIntroVol;
            else if (el === this.main) el.volume = this.defaultMainVol;
            else el.volume = 1.0;
            el.muted = false;
          }
        });
      });
      obs.observe(document.body, { childList: true, subtree: true });
      this._observer = obs;

      // Also apply to existing elements now
      this.applyToExisting();

      // Expose quick handlers
      var self = this;
      this.playIntro = function(src){
        // if main playing, do nothing (we don't auto-start intro over main)
        if (self.main && !self.main.paused) return;
        if (!self.intro) {
          self.intro = new Audio(src);
          self.intro.loop = true;
          self.intro.volume = self.isMuted ? 0 : self.defaultIntroVol;
          document.body.appendChild(self.intro); // optional
        } else {
          self.intro.src = src;
          self.intro.volume = self.isMuted ? 0 : self.defaultIntroVol;
        }
        // restart from zero
        try { self.intro.pause(); self.intro.currentTime = 0; } catch(e){}
        self.intro.play().catch(()=>{});
      };

      this.stopIntro = function(){
        if (self.intro) {
          try { self.intro.pause(); self.intro.currentTime = 0; } catch(e){}
        }
      };

      this.playMain = function(src){
        // stop intro first
        try { if (self.intro) { self.intro.pause(); self.intro.currentTime = 0; } } catch(e){}
        if (!self.main) {
          self.main = new Audio(src);
          self.main.loop = true;
          self.main.volume = self.isMuted ? 0 : self.defaultMainVol;
          document.body.appendChild(self.main);
        } else {
          self.main.src = src;
          self.main.volume = self.isMuted ? 0 : self.defaultMainVol;
        }
        self.main.play().catch(()=>{});
      };

      this.stopMain = function(){
        if (self.main) {
          try { self.main.pause(); self.main.currentTime = 0; } catch(e){}
        }
      };

      this.muteAll = function(){
        this.isMuted = true;
        try { GetPlayer().SetVar("Mute", true); } catch(e){}
        document.querySelectorAll('audio, video').forEach(el => {
          try { el.muted = true; el.volume = 0; } catch(e){}
        });
      };

      this.unmuteAll = function(){
        this.isMuted = false;
        try { GetPlayer().SetVar("Mute", false); } catch(e){}
        // restore volumes (intro/main to defaults, others to 1)
        document.querySelectorAll('audio, video').forEach(el => {
          try {
            el.muted = false;
            if (el === self.intro) el.volume = self.defaultIntroVol;
            else if (el === self.main) el.volume = self.defaultMainVol;
            else el.volume = 1.0;
          } catch(e){}
        });
      };

      // helper: apply to existing audio/video now
      this.applyToExisting = function(){
        document.querySelectorAll('audio, video').forEach(el => {
          try {
            if (this.isMuted) { el.muted = true; el.volume = 0; }
            else el.muted = false;
          } catch(e){}
        });
      };

      // ensure Storyline variable and UI synced on load
      try {
        var varMute = player.GetVar("Mute");
        if (varMute) this.muteAll(); else this.unmuteAll();
      } catch(e){}
    } // end init
  };

  // initialize immediately
  window.AudioManager.init();
})();

}

window.Script34 = function()
{
  if (window.isMuted) {
  document.querySelectorAll('audio, video').forEach(el => el.volume = 0);
  if (window.bgmAwal) window.bgmAwal.volume = 0;
  if (window.bgmUtama) window.bgmUtama.volume = 0;
}

}

window.Script35 = function()
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

window.Script36 = function()
{
  if (window.AudioManager) window.AudioManager.unmuteAll();
GetPlayer().SetVar("Mute", false);

}

window.Script37 = function()
{
  if (window.AudioManager) window.AudioManager.muteAll();
GetPlayer().SetVar("Mute", true);

}

window.Script38 = function()
{
  (function(){
  // Jika sudah inisialisasi, hentikan (prevent double init)
  if (window.AudioManager && window.AudioManager.inited) return;

  window.AudioManager = {
    inited: true,
    isMuted: false,
    intro: null,
    main: null,
    defaultIntroVol: 0.6,
    defaultMainVol: 0.6,
    // init: setup observer dan sinkron dengan variable Storyline
    init: function() {
      var player = GetPlayer();
      // sync initial mute state from Storyline variable (if exists)
      try { this.isMuted = !!player.GetVar("Mute"); } catch(e){}

      // MutationObserver: apply mute/volume to any new audio/video created by Storyline
      var obs = new MutationObserver((mutations) => {
        document.querySelectorAll('audio, video').forEach(el => {
          // apply volume/mute according to global state
          if (this.isMuted) { el.volume = 0; el.muted = true; }
          else {
            // don't override audio-managed volumes too aggressively; set to 1 for unknown ones
            if (el === this.intro) el.volume = this.defaultIntroVol;
            else if (el === this.main) el.volume = this.defaultMainVol;
            else el.volume = 1.0;
            el.muted = false;
          }
        });
      });
      obs.observe(document.body, { childList: true, subtree: true });
      this._observer = obs;

      // Also apply to existing elements now
      this.applyToExisting();

      // Expose quick handlers
      var self = this;
      this.playIntro = function(src){
        // if main playing, do nothing (we don't auto-start intro over main)
        if (self.main && !self.main.paused) return;
        if (!self.intro) {
          self.intro = new Audio(src);
          self.intro.loop = true;
          self.intro.volume = self.isMuted ? 0 : self.defaultIntroVol;
          document.body.appendChild(self.intro); // optional
        } else {
          self.intro.src = src;
          self.intro.volume = self.isMuted ? 0 : self.defaultIntroVol;
        }
        // restart from zero
        try { self.intro.pause(); self.intro.currentTime = 0; } catch(e){}
        self.intro.play().catch(()=>{});
      };

      this.stopIntro = function(){
        if (self.intro) {
          try { self.intro.pause(); self.intro.currentTime = 0; } catch(e){}
        }
      };

      this.playMain = function(src){
        // stop intro first
        try { if (self.intro) { self.intro.pause(); self.intro.currentTime = 0; } } catch(e){}
        if (!self.main) {
          self.main = new Audio(src);
          self.main.loop = true;
          self.main.volume = self.isMuted ? 0 : self.defaultMainVol;
          document.body.appendChild(self.main);
        } else {
          self.main.src = src;
          self.main.volume = self.isMuted ? 0 : self.defaultMainVol;
        }
        self.main.play().catch(()=>{});
      };

      this.stopMain = function(){
        if (self.main) {
          try { self.main.pause(); self.main.currentTime = 0; } catch(e){}
        }
      };

      this.muteAll = function(){
        this.isMuted = true;
        try { GetPlayer().SetVar("Mute", true); } catch(e){}
        document.querySelectorAll('audio, video').forEach(el => {
          try { el.muted = true; el.volume = 0; } catch(e){}
        });
      };

      this.unmuteAll = function(){
        this.isMuted = false;
        try { GetPlayer().SetVar("Mute", false); } catch(e){}
        // restore volumes (intro/main to defaults, others to 1)
        document.querySelectorAll('audio, video').forEach(el => {
          try {
            el.muted = false;
            if (el === self.intro) el.volume = self.defaultIntroVol;
            else if (el === self.main) el.volume = self.defaultMainVol;
            else el.volume = 1.0;
          } catch(e){}
        });
      };

      // helper: apply to existing audio/video now
      this.applyToExisting = function(){
        document.querySelectorAll('audio, video').forEach(el => {
          try {
            if (this.isMuted) { el.muted = true; el.volume = 0; }
            else el.muted = false;
          } catch(e){}
        });
      };

      // ensure Storyline variable and UI synced on load
      try {
        var varMute = player.GetVar("Mute");
        if (varMute) this.muteAll(); else this.unmuteAll();
      } catch(e){}
    } // end init
  };

  // initialize immediately
  window.AudioManager.init();
})();

}

window.Script39 = function()
{
  if (window.isMuted) {
  document.querySelectorAll('audio, video').forEach(el => el.volume = 0);
  if (window.bgmAwal) window.bgmAwal.volume = 0;
  if (window.bgmUtama) window.bgmUtama.volume = 0;
}

}

window.Script40 = function()
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

window.Script41 = function()
{
  if (window.AudioManager) window.AudioManager.unmuteAll();
GetPlayer().SetVar("Mute", false);

}

window.Script42 = function()
{
  if (window.AudioManager) window.AudioManager.muteAll();
GetPlayer().SetVar("Mute", true);

}

window.Script43 = function()
{
  (function(){
  // Jika sudah inisialisasi, hentikan (prevent double init)
  if (window.AudioManager && window.AudioManager.inited) return;

  window.AudioManager = {
    inited: true,
    isMuted: false,
    intro: null,
    main: null,
    defaultIntroVol: 0.6,
    defaultMainVol: 0.6,
    // init: setup observer dan sinkron dengan variable Storyline
    init: function() {
      var player = GetPlayer();
      // sync initial mute state from Storyline variable (if exists)
      try { this.isMuted = !!player.GetVar("Mute"); } catch(e){}

      // MutationObserver: apply mute/volume to any new audio/video created by Storyline
      var obs = new MutationObserver((mutations) => {
        document.querySelectorAll('audio, video').forEach(el => {
          // apply volume/mute according to global state
          if (this.isMuted) { el.volume = 0; el.muted = true; }
          else {
            // don't override audio-managed volumes too aggressively; set to 1 for unknown ones
            if (el === this.intro) el.volume = this.defaultIntroVol;
            else if (el === this.main) el.volume = this.defaultMainVol;
            else el.volume = 1.0;
            el.muted = false;
          }
        });
      });
      obs.observe(document.body, { childList: true, subtree: true });
      this._observer = obs;

      // Also apply to existing elements now
      this.applyToExisting();

      // Expose quick handlers
      var self = this;
      this.playIntro = function(src){
        // if main playing, do nothing (we don't auto-start intro over main)
        if (self.main && !self.main.paused) return;
        if (!self.intro) {
          self.intro = new Audio(src);
          self.intro.loop = true;
          self.intro.volume = self.isMuted ? 0 : self.defaultIntroVol;
          document.body.appendChild(self.intro); // optional
        } else {
          self.intro.src = src;
          self.intro.volume = self.isMuted ? 0 : self.defaultIntroVol;
        }
        // restart from zero
        try { self.intro.pause(); self.intro.currentTime = 0; } catch(e){}
        self.intro.play().catch(()=>{});
      };

      this.stopIntro = function(){
        if (self.intro) {
          try { self.intro.pause(); self.intro.currentTime = 0; } catch(e){}
        }
      };

      this.playMain = function(src){
        // stop intro first
        try { if (self.intro) { self.intro.pause(); self.intro.currentTime = 0; } } catch(e){}
        if (!self.main) {
          self.main = new Audio(src);
          self.main.loop = true;
          self.main.volume = self.isMuted ? 0 : self.defaultMainVol;
          document.body.appendChild(self.main);
        } else {
          self.main.src = src;
          self.main.volume = self.isMuted ? 0 : self.defaultMainVol;
        }
        self.main.play().catch(()=>{});
      };

      this.stopMain = function(){
        if (self.main) {
          try { self.main.pause(); self.main.currentTime = 0; } catch(e){}
        }
      };

      this.muteAll = function(){
        this.isMuted = true;
        try { GetPlayer().SetVar("Mute", true); } catch(e){}
        document.querySelectorAll('audio, video').forEach(el => {
          try { el.muted = true; el.volume = 0; } catch(e){}
        });
      };

      this.unmuteAll = function(){
        this.isMuted = false;
        try { GetPlayer().SetVar("Mute", false); } catch(e){}
        // restore volumes (intro/main to defaults, others to 1)
        document.querySelectorAll('audio, video').forEach(el => {
          try {
            el.muted = false;
            if (el === self.intro) el.volume = self.defaultIntroVol;
            else if (el === self.main) el.volume = self.defaultMainVol;
            else el.volume = 1.0;
          } catch(e){}
        });
      };

      // helper: apply to existing audio/video now
      this.applyToExisting = function(){
        document.querySelectorAll('audio, video').forEach(el => {
          try {
            if (this.isMuted) { el.muted = true; el.volume = 0; }
            else el.muted = false;
          } catch(e){}
        });
      };

      // ensure Storyline variable and UI synced on load
      try {
        var varMute = player.GetVar("Mute");
        if (varMute) this.muteAll(); else this.unmuteAll();
      } catch(e){}
    } // end init
  };

  // initialize immediately
  window.AudioManager.init();
})();

}

window.Script44 = function()
{
  if (window.isMuted) {
  document.querySelectorAll('audio, video').forEach(el => el.volume = 0);
  if (window.bgmAwal) window.bgmAwal.volume = 0;
  if (window.bgmUtama) window.bgmUtama.volume = 0;
}

}

window.Script45 = function()
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

window.Script46 = function()
{
  if (window.AudioManager) window.AudioManager.unmuteAll();
GetPlayer().SetVar("Mute", false);

}

window.Script47 = function()
{
  if (window.AudioManager) window.AudioManager.muteAll();
GetPlayer().SetVar("Mute", true);

}

window.Script48 = function()
{
  (function(){
  // Jika sudah inisialisasi, hentikan (prevent double init)
  if (window.AudioManager && window.AudioManager.inited) return;

  window.AudioManager = {
    inited: true,
    isMuted: false,
    intro: null,
    main: null,
    defaultIntroVol: 0.6,
    defaultMainVol: 0.6,
    // init: setup observer dan sinkron dengan variable Storyline
    init: function() {
      var player = GetPlayer();
      // sync initial mute state from Storyline variable (if exists)
      try { this.isMuted = !!player.GetVar("Mute"); } catch(e){}

      // MutationObserver: apply mute/volume to any new audio/video created by Storyline
      var obs = new MutationObserver((mutations) => {
        document.querySelectorAll('audio, video').forEach(el => {
          // apply volume/mute according to global state
          if (this.isMuted) { el.volume = 0; el.muted = true; }
          else {
            // don't override audio-managed volumes too aggressively; set to 1 for unknown ones
            if (el === this.intro) el.volume = this.defaultIntroVol;
            else if (el === this.main) el.volume = this.defaultMainVol;
            else el.volume = 1.0;
            el.muted = false;
          }
        });
      });
      obs.observe(document.body, { childList: true, subtree: true });
      this._observer = obs;

      // Also apply to existing elements now
      this.applyToExisting();

      // Expose quick handlers
      var self = this;
      this.playIntro = function(src){
        // if main playing, do nothing (we don't auto-start intro over main)
        if (self.main && !self.main.paused) return;
        if (!self.intro) {
          self.intro = new Audio(src);
          self.intro.loop = true;
          self.intro.volume = self.isMuted ? 0 : self.defaultIntroVol;
          document.body.appendChild(self.intro); // optional
        } else {
          self.intro.src = src;
          self.intro.volume = self.isMuted ? 0 : self.defaultIntroVol;
        }
        // restart from zero
        try { self.intro.pause(); self.intro.currentTime = 0; } catch(e){}
        self.intro.play().catch(()=>{});
      };

      this.stopIntro = function(){
        if (self.intro) {
          try { self.intro.pause(); self.intro.currentTime = 0; } catch(e){}
        }
      };

      this.playMain = function(src){
        // stop intro first
        try { if (self.intro) { self.intro.pause(); self.intro.currentTime = 0; } } catch(e){}
        if (!self.main) {
          self.main = new Audio(src);
          self.main.loop = true;
          self.main.volume = self.isMuted ? 0 : self.defaultMainVol;
          document.body.appendChild(self.main);
        } else {
          self.main.src = src;
          self.main.volume = self.isMuted ? 0 : self.defaultMainVol;
        }
        self.main.play().catch(()=>{});
      };

      this.stopMain = function(){
        if (self.main) {
          try { self.main.pause(); self.main.currentTime = 0; } catch(e){}
        }
      };

      this.muteAll = function(){
        this.isMuted = true;
        try { GetPlayer().SetVar("Mute", true); } catch(e){}
        document.querySelectorAll('audio, video').forEach(el => {
          try { el.muted = true; el.volume = 0; } catch(e){}
        });
      };

      this.unmuteAll = function(){
        this.isMuted = false;
        try { GetPlayer().SetVar("Mute", false); } catch(e){}
        // restore volumes (intro/main to defaults, others to 1)
        document.querySelectorAll('audio, video').forEach(el => {
          try {
            el.muted = false;
            if (el === self.intro) el.volume = self.defaultIntroVol;
            else if (el === self.main) el.volume = self.defaultMainVol;
            else el.volume = 1.0;
          } catch(e){}
        });
      };

      // helper: apply to existing audio/video now
      this.applyToExisting = function(){
        document.querySelectorAll('audio, video').forEach(el => {
          try {
            if (this.isMuted) { el.muted = true; el.volume = 0; }
            else el.muted = false;
          } catch(e){}
        });
      };

      // ensure Storyline variable and UI synced on load
      try {
        var varMute = player.GetVar("Mute");
        if (varMute) this.muteAll(); else this.unmuteAll();
      } catch(e){}
    } // end init
  };

  // initialize immediately
  window.AudioManager.init();
})();

}

window.Script49 = function()
{
  if (window.isMuted) {
  document.querySelectorAll('audio, video').forEach(el => el.volume = 0);
  if (window.bgmAwal) window.bgmAwal.volume = 0;
  if (window.bgmUtama) window.bgmUtama.volume = 0;
}

}

window.Script50 = function()
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

window.Script51 = function()
{
  if (window.AudioManager) window.AudioManager.unmuteAll();
GetPlayer().SetVar("Mute", false);

}

window.Script52 = function()
{
  if (window.AudioManager) window.AudioManager.muteAll();
GetPlayer().SetVar("Mute", true);

}

window.Script53 = function()
{
  (function(){
  // Jika sudah inisialisasi, hentikan (prevent double init)
  if (window.AudioManager && window.AudioManager.inited) return;

  window.AudioManager = {
    inited: true,
    isMuted: false,
    intro: null,
    main: null,
    defaultIntroVol: 0.6,
    defaultMainVol: 0.6,
    // init: setup observer dan sinkron dengan variable Storyline
    init: function() {
      var player = GetPlayer();
      // sync initial mute state from Storyline variable (if exists)
      try { this.isMuted = !!player.GetVar("Mute"); } catch(e){}

      // MutationObserver: apply mute/volume to any new audio/video created by Storyline
      var obs = new MutationObserver((mutations) => {
        document.querySelectorAll('audio, video').forEach(el => {
          // apply volume/mute according to global state
          if (this.isMuted) { el.volume = 0; el.muted = true; }
          else {
            // don't override audio-managed volumes too aggressively; set to 1 for unknown ones
            if (el === this.intro) el.volume = this.defaultIntroVol;
            else if (el === this.main) el.volume = this.defaultMainVol;
            else el.volume = 1.0;
            el.muted = false;
          }
        });
      });
      obs.observe(document.body, { childList: true, subtree: true });
      this._observer = obs;

      // Also apply to existing elements now
      this.applyToExisting();

      // Expose quick handlers
      var self = this;
      this.playIntro = function(src){
        // if main playing, do nothing (we don't auto-start intro over main)
        if (self.main && !self.main.paused) return;
        if (!self.intro) {
          self.intro = new Audio(src);
          self.intro.loop = true;
          self.intro.volume = self.isMuted ? 0 : self.defaultIntroVol;
          document.body.appendChild(self.intro); // optional
        } else {
          self.intro.src = src;
          self.intro.volume = self.isMuted ? 0 : self.defaultIntroVol;
        }
        // restart from zero
        try { self.intro.pause(); self.intro.currentTime = 0; } catch(e){}
        self.intro.play().catch(()=>{});
      };

      this.stopIntro = function(){
        if (self.intro) {
          try { self.intro.pause(); self.intro.currentTime = 0; } catch(e){}
        }
      };

      this.playMain = function(src){
        // stop intro first
        try { if (self.intro) { self.intro.pause(); self.intro.currentTime = 0; } } catch(e){}
        if (!self.main) {
          self.main = new Audio(src);
          self.main.loop = true;
          self.main.volume = self.isMuted ? 0 : self.defaultMainVol;
          document.body.appendChild(self.main);
        } else {
          self.main.src = src;
          self.main.volume = self.isMuted ? 0 : self.defaultMainVol;
        }
        self.main.play().catch(()=>{});
      };

      this.stopMain = function(){
        if (self.main) {
          try { self.main.pause(); self.main.currentTime = 0; } catch(e){}
        }
      };

      this.muteAll = function(){
        this.isMuted = true;
        try { GetPlayer().SetVar("Mute", true); } catch(e){}
        document.querySelectorAll('audio, video').forEach(el => {
          try { el.muted = true; el.volume = 0; } catch(e){}
        });
      };

      this.unmuteAll = function(){
        this.isMuted = false;
        try { GetPlayer().SetVar("Mute", false); } catch(e){}
        // restore volumes (intro/main to defaults, others to 1)
        document.querySelectorAll('audio, video').forEach(el => {
          try {
            el.muted = false;
            if (el === self.intro) el.volume = self.defaultIntroVol;
            else if (el === self.main) el.volume = self.defaultMainVol;
            else el.volume = 1.0;
          } catch(e){}
        });
      };

      // helper: apply to existing audio/video now
      this.applyToExisting = function(){
        document.querySelectorAll('audio, video').forEach(el => {
          try {
            if (this.isMuted) { el.muted = true; el.volume = 0; }
            else el.muted = false;
          } catch(e){}
        });
      };

      // ensure Storyline variable and UI synced on load
      try {
        var varMute = player.GetVar("Mute");
        if (varMute) this.muteAll(); else this.unmuteAll();
      } catch(e){}
    } // end init
  };

  // initialize immediately
  window.AudioManager.init();
})();

}

window.Script54 = function()
{
  if (window.isMuted) {
  document.querySelectorAll('audio, video').forEach(el => el.volume = 0);
  if (window.bgmAwal) window.bgmAwal.volume = 0;
  if (window.bgmUtama) window.bgmUtama.volume = 0;
}

}

window.Script55 = function()
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

window.Script56 = function()
{
  if (window.AudioManager) window.AudioManager.unmuteAll();
GetPlayer().SetVar("Mute", false);

}

window.Script57 = function()
{
  if (window.AudioManager) window.AudioManager.muteAll();
GetPlayer().SetVar("Mute", true);

}

window.Script58 = function()
{
  (function(){
  // Jika sudah inisialisasi, hentikan (prevent double init)
  if (window.AudioManager && window.AudioManager.inited) return;

  window.AudioManager = {
    inited: true,
    isMuted: false,
    intro: null,
    main: null,
    defaultIntroVol: 0.6,
    defaultMainVol: 0.6,
    // init: setup observer dan sinkron dengan variable Storyline
    init: function() {
      var player = GetPlayer();
      // sync initial mute state from Storyline variable (if exists)
      try { this.isMuted = !!player.GetVar("Mute"); } catch(e){}

      // MutationObserver: apply mute/volume to any new audio/video created by Storyline
      var obs = new MutationObserver((mutations) => {
        document.querySelectorAll('audio, video').forEach(el => {
          // apply volume/mute according to global state
          if (this.isMuted) { el.volume = 0; el.muted = true; }
          else {
            // don't override audio-managed volumes too aggressively; set to 1 for unknown ones
            if (el === this.intro) el.volume = this.defaultIntroVol;
            else if (el === this.main) el.volume = this.defaultMainVol;
            else el.volume = 1.0;
            el.muted = false;
          }
        });
      });
      obs.observe(document.body, { childList: true, subtree: true });
      this._observer = obs;

      // Also apply to existing elements now
      this.applyToExisting();

      // Expose quick handlers
      var self = this;
      this.playIntro = function(src){
        // if main playing, do nothing (we don't auto-start intro over main)
        if (self.main && !self.main.paused) return;
        if (!self.intro) {
          self.intro = new Audio(src);
          self.intro.loop = true;
          self.intro.volume = self.isMuted ? 0 : self.defaultIntroVol;
          document.body.appendChild(self.intro); // optional
        } else {
          self.intro.src = src;
          self.intro.volume = self.isMuted ? 0 : self.defaultIntroVol;
        }
        // restart from zero
        try { self.intro.pause(); self.intro.currentTime = 0; } catch(e){}
        self.intro.play().catch(()=>{});
      };

      this.stopIntro = function(){
        if (self.intro) {
          try { self.intro.pause(); self.intro.currentTime = 0; } catch(e){}
        }
      };

      this.playMain = function(src){
        // stop intro first
        try { if (self.intro) { self.intro.pause(); self.intro.currentTime = 0; } } catch(e){}
        if (!self.main) {
          self.main = new Audio(src);
          self.main.loop = true;
          self.main.volume = self.isMuted ? 0 : self.defaultMainVol;
          document.body.appendChild(self.main);
        } else {
          self.main.src = src;
          self.main.volume = self.isMuted ? 0 : self.defaultMainVol;
        }
        self.main.play().catch(()=>{});
      };

      this.stopMain = function(){
        if (self.main) {
          try { self.main.pause(); self.main.currentTime = 0; } catch(e){}
        }
      };

      this.muteAll = function(){
        this.isMuted = true;
        try { GetPlayer().SetVar("Mute", true); } catch(e){}
        document.querySelectorAll('audio, video').forEach(el => {
          try { el.muted = true; el.volume = 0; } catch(e){}
        });
      };

      this.unmuteAll = function(){
        this.isMuted = false;
        try { GetPlayer().SetVar("Mute", false); } catch(e){}
        // restore volumes (intro/main to defaults, others to 1)
        document.querySelectorAll('audio, video').forEach(el => {
          try {
            el.muted = false;
            if (el === self.intro) el.volume = self.defaultIntroVol;
            else if (el === self.main) el.volume = self.defaultMainVol;
            else el.volume = 1.0;
          } catch(e){}
        });
      };

      // helper: apply to existing audio/video now
      this.applyToExisting = function(){
        document.querySelectorAll('audio, video').forEach(el => {
          try {
            if (this.isMuted) { el.muted = true; el.volume = 0; }
            else el.muted = false;
          } catch(e){}
        });
      };

      // ensure Storyline variable and UI synced on load
      try {
        var varMute = player.GetVar("Mute");
        if (varMute) this.muteAll(); else this.unmuteAll();
      } catch(e){}
    } // end init
  };

  // initialize immediately
  window.AudioManager.init();
})();

}

window.Script59 = function()
{
  if (window.isMuted) {
  document.querySelectorAll('audio, video').forEach(el => el.volume = 0);
  if (window.bgmAwal) window.bgmAwal.volume = 0;
  if (window.bgmUtama) window.bgmUtama.volume = 0;
}

}

window.Script60 = function()
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

window.Script61 = function()
{
  if (window.AudioManager) window.AudioManager.unmuteAll();
GetPlayer().SetVar("Mute", false);

}

window.Script62 = function()
{
  if (window.AudioManager) window.AudioManager.muteAll();
GetPlayer().SetVar("Mute", true);

}

window.Script63 = function()
{
  (function(){
  // Jika sudah inisialisasi, hentikan (prevent double init)
  if (window.AudioManager && window.AudioManager.inited) return;

  window.AudioManager = {
    inited: true,
    isMuted: false,
    intro: null,
    main: null,
    defaultIntroVol: 0.6,
    defaultMainVol: 0.6,
    // init: setup observer dan sinkron dengan variable Storyline
    init: function() {
      var player = GetPlayer();
      // sync initial mute state from Storyline variable (if exists)
      try { this.isMuted = !!player.GetVar("Mute"); } catch(e){}

      // MutationObserver: apply mute/volume to any new audio/video created by Storyline
      var obs = new MutationObserver((mutations) => {
        document.querySelectorAll('audio, video').forEach(el => {
          // apply volume/mute according to global state
          if (this.isMuted) { el.volume = 0; el.muted = true; }
          else {
            // don't override audio-managed volumes too aggressively; set to 1 for unknown ones
            if (el === this.intro) el.volume = this.defaultIntroVol;
            else if (el === this.main) el.volume = this.defaultMainVol;
            else el.volume = 1.0;
            el.muted = false;
          }
        });
      });
      obs.observe(document.body, { childList: true, subtree: true });
      this._observer = obs;

      // Also apply to existing elements now
      this.applyToExisting();

      // Expose quick handlers
      var self = this;
      this.playIntro = function(src){
        // if main playing, do nothing (we don't auto-start intro over main)
        if (self.main && !self.main.paused) return;
        if (!self.intro) {
          self.intro = new Audio(src);
          self.intro.loop = true;
          self.intro.volume = self.isMuted ? 0 : self.defaultIntroVol;
          document.body.appendChild(self.intro); // optional
        } else {
          self.intro.src = src;
          self.intro.volume = self.isMuted ? 0 : self.defaultIntroVol;
        }
        // restart from zero
        try { self.intro.pause(); self.intro.currentTime = 0; } catch(e){}
        self.intro.play().catch(()=>{});
      };

      this.stopIntro = function(){
        if (self.intro) {
          try { self.intro.pause(); self.intro.currentTime = 0; } catch(e){}
        }
      };

      this.playMain = function(src){
        // stop intro first
        try { if (self.intro) { self.intro.pause(); self.intro.currentTime = 0; } } catch(e){}
        if (!self.main) {
          self.main = new Audio(src);
          self.main.loop = true;
          self.main.volume = self.isMuted ? 0 : self.defaultMainVol;
          document.body.appendChild(self.main);
        } else {
          self.main.src = src;
          self.main.volume = self.isMuted ? 0 : self.defaultMainVol;
        }
        self.main.play().catch(()=>{});
      };

      this.stopMain = function(){
        if (self.main) {
          try { self.main.pause(); self.main.currentTime = 0; } catch(e){}
        }
      };

      this.muteAll = function(){
        this.isMuted = true;
        try { GetPlayer().SetVar("Mute", true); } catch(e){}
        document.querySelectorAll('audio, video').forEach(el => {
          try { el.muted = true; el.volume = 0; } catch(e){}
        });
      };

      this.unmuteAll = function(){
        this.isMuted = false;
        try { GetPlayer().SetVar("Mute", false); } catch(e){}
        // restore volumes (intro/main to defaults, others to 1)
        document.querySelectorAll('audio, video').forEach(el => {
          try {
            el.muted = false;
            if (el === self.intro) el.volume = self.defaultIntroVol;
            else if (el === self.main) el.volume = self.defaultMainVol;
            else el.volume = 1.0;
          } catch(e){}
        });
      };

      // helper: apply to existing audio/video now
      this.applyToExisting = function(){
        document.querySelectorAll('audio, video').forEach(el => {
          try {
            if (this.isMuted) { el.muted = true; el.volume = 0; }
            else el.muted = false;
          } catch(e){}
        });
      };

      // ensure Storyline variable and UI synced on load
      try {
        var varMute = player.GetVar("Mute");
        if (varMute) this.muteAll(); else this.unmuteAll();
      } catch(e){}
    } // end init
  };

  // initialize immediately
  window.AudioManager.init();
})();

}

window.Script64 = function()
{
  if (window.isMuted) {
  document.querySelectorAll('audio, video').forEach(el => el.volume = 0);
  if (window.bgmAwal) window.bgmAwal.volume = 0;
  if (window.bgmUtama) window.bgmUtama.volume = 0;
}

}

window.Script65 = function()
{
  (function(){
  // Jika sudah inisialisasi, hentikan (prevent double init)
  if (window.AudioManager && window.AudioManager.inited) return;

  window.AudioManager = {
    inited: true,
    isMuted: false,
    intro: null,
    main: null,
    defaultIntroVol: 0.6,
    defaultMainVol: 0.6,
    // init: setup observer dan sinkron dengan variable Storyline
    init: function() {
      var player = GetPlayer();
      // sync initial mute state from Storyline variable (if exists)
      try { this.isMuted = !!player.GetVar("Mute"); } catch(e){}

      // MutationObserver: apply mute/volume to any new audio/video created by Storyline
      var obs = new MutationObserver((mutations) => {
        document.querySelectorAll('audio, video').forEach(el => {
          // apply volume/mute according to global state
          if (this.isMuted) { el.volume = 0; el.muted = true; }
          else {
            // don't override audio-managed volumes too aggressively; set to 1 for unknown ones
            if (el === this.intro) el.volume = this.defaultIntroVol;
            else if (el === this.main) el.volume = this.defaultMainVol;
            else el.volume = 1.0;
            el.muted = false;
          }
        });
      });
      obs.observe(document.body, { childList: true, subtree: true });
      this._observer = obs;

      // Also apply to existing elements now
      this.applyToExisting();

      // Expose quick handlers
      var self = this;
      this.playIntro = function(src){
        // if main playing, do nothing (we don't auto-start intro over main)
        if (self.main && !self.main.paused) return;
        if (!self.intro) {
          self.intro = new Audio(src);
          self.intro.loop = true;
          self.intro.volume = self.isMuted ? 0 : self.defaultIntroVol;
          document.body.appendChild(self.intro); // optional
        } else {
          self.intro.src = src;
          self.intro.volume = self.isMuted ? 0 : self.defaultIntroVol;
        }
        // restart from zero
        try { self.intro.pause(); self.intro.currentTime = 0; } catch(e){}
        self.intro.play().catch(()=>{});
      };

      this.stopIntro = function(){
        if (self.intro) {
          try { self.intro.pause(); self.intro.currentTime = 0; } catch(e){}
        }
      };

      this.playMain = function(src){
        // stop intro first
        try { if (self.intro) { self.intro.pause(); self.intro.currentTime = 0; } } catch(e){}
        if (!self.main) {
          self.main = new Audio(src);
          self.main.loop = true;
          self.main.volume = self.isMuted ? 0 : self.defaultMainVol;
          document.body.appendChild(self.main);
        } else {
          self.main.src = src;
          self.main.volume = self.isMuted ? 0 : self.defaultMainVol;
        }
        self.main.play().catch(()=>{});
      };

      this.stopMain = function(){
        if (self.main) {
          try { self.main.pause(); self.main.currentTime = 0; } catch(e){}
        }
      };

      this.muteAll = function(){
        this.isMuted = true;
        try { GetPlayer().SetVar("Mute", true); } catch(e){}
        document.querySelectorAll('audio, video').forEach(el => {
          try { el.muted = true; el.volume = 0; } catch(e){}
        });
      };

      this.unmuteAll = function(){
        this.isMuted = false;
        try { GetPlayer().SetVar("Mute", false); } catch(e){}
        // restore volumes (intro/main to defaults, others to 1)
        document.querySelectorAll('audio, video').forEach(el => {
          try {
            el.muted = false;
            if (el === self.intro) el.volume = self.defaultIntroVol;
            else if (el === self.main) el.volume = self.defaultMainVol;
            else el.volume = 1.0;
          } catch(e){}
        });
      };

      // helper: apply to existing audio/video now
      this.applyToExisting = function(){
        document.querySelectorAll('audio, video').forEach(el => {
          try {
            if (this.isMuted) { el.muted = true; el.volume = 0; }
            else el.muted = false;
          } catch(e){}
        });
      };

      // ensure Storyline variable and UI synced on load
      try {
        var varMute = player.GetVar("Mute");
        if (varMute) this.muteAll(); else this.unmuteAll();
      } catch(e){}
    } // end init
  };

  // initialize immediately
  window.AudioManager.init();
})();

}

window.Script66 = function()
{
  if (window.isMuted) {
  document.querySelectorAll('audio, video').forEach(el => el.volume = 0);
  if (window.bgmAwal) window.bgmAwal.volume = 0;
  if (window.bgmUtama) window.bgmUtama.volume = 0;
}

}

window.Script67 = function()
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

window.Script68 = function()
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

window.Script69 = function()
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

window.Script70 = function()
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

window.Script71 = function()
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

window.Script72 = function()
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

window.Script73 = function()
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

window.Script74 = function()
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

window.Script75 = function()
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

window.Script76 = function()
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

window.Script77 = function()
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

window.Script78 = function()
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

window.Script79 = function()
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

window.Script80 = function()
{
  if (window.AudioManager) window.AudioManager.unmuteAll();
GetPlayer().SetVar("Mute", false);

}

window.Script81 = function()
{
  if (window.AudioManager) window.AudioManager.muteAll();
GetPlayer().SetVar("Mute", true);

}

window.Script82 = function()
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

window.Script83 = function()
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

window.Script84 = function()
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

window.Script85 = function()
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

window.Script86 = function()
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

window.Script87 = function()
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

window.Script88 = function()
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

window.Script89 = function()
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

window.Script90 = function()
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

};
