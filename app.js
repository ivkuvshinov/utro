document.addEventListener('DOMContentLoaded', function() {
// ===============================================================
// Утренняя растяжка — main app logic
// ===============================================================

const { EX, SECTIONS, PROGRAM_30, PROGRAM_40 } = window.STRETCH_DATA;

const STORAGE = {
  theme: 'stretch.theme',
  history: 'stretch.history',
  sound: 'stretch.sound',
  duration: 'stretch.duration'
};

const state = {
  duration: 30,                     // selected: 30 | 40
  program: PROGRAM_30,
  currentIdx: 0,
  remaining: 0,
  totalElapsed: 0,
  totalDuration: 0,
  isPlaying: false,
  isPaused: false,
  intervalId: null,
  soundOn: true
};

// ---------------- Storage helpers ----------------
function getHistory() {
  try { return JSON.parse(localStorage.getItem(STORAGE.history) || '[]'); }
  catch { return []; }
}

function saveSession(durationMin) {
  const history = getHistory();
  const today = new Date().toISOString().slice(0, 10);
  // Avoid duplicate same-day entries (keep latest)
  const filtered = history.filter(h => h.date !== today);
  filtered.unshift({ date: today, duration: durationMin, ts: Date.now() });
  // Keep last 60 days
  const trimmed = filtered.slice(0, 60);
  localStorage.setItem(STORAGE.history, JSON.stringify(trimmed));
}

function calculateStreak() {
  const history = getHistory();
  if (!history.length) return 0;
  const dates = new Set(history.map(h => h.date));
  let streak = 0;
  const d = new Date();
  // Today counts; if not done today but done yesterday, streak still alive but we display 0 for today
  for (let i = 0; i < 365; i++) {
    const key = d.toISOString().slice(0, 10);
    if (dates.has(key)) {
      streak++;
    } else if (i === 0) {
      // not done today — start counting from yesterday
    } else {
      break;
    }
    d.setDate(d.getDate() - 1);
  }
  return streak;
}

function isDoneToday() {
  const today = new Date().toISOString().slice(0, 10);
  return getHistory().some(h => h.date === today);
}

// ---------------- Theme ----------------
function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}

function initTheme() {
  const stored = localStorage.getItem(STORAGE.theme);
  if (stored) {
    applyTheme(stored);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  }
}

document.getElementById('theme-toggle').addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const next = isDark ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem(STORAGE.theme, next);
});

// ---------------- Sound / haptic ----------------
let audioCtx = null;
function beep(freq = 660, dur = 150, vol = 0.15) {
  if (!state.soundOn) return;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.frequency.value = freq;
    osc.type = 'sine';
    gain.gain.value = vol;
    osc.connect(gain).connect(audioCtx.destination);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur / 1000);
    osc.stop(audioCtx.currentTime + dur / 1000);
  } catch (e) {}
}

function vibrate(pattern) {
  if (navigator.vibrate) navigator.vibrate(pattern);
}

function chimeNext() {
  beep(660, 120);
  setTimeout(() => beep(880, 180), 130);
  vibrate([60, 40, 80]);
}

function chimeFinal() {
  beep(523, 200);
  setTimeout(() => beep(659, 200), 200);
  setTimeout(() => beep(784, 350), 400);
  vibrate([100, 60, 100, 60, 200]);
}

function chimeCountdown() {
  beep(440, 80, 0.1);
  vibrate(40);
}

// ---------------- Sound toggle ----------------
function initSound() {
  state.soundOn = localStorage.getItem(STORAGE.sound) !== 'off';
  updateSoundIcon();
}

function updateSoundIcon() {
  const path = document.getElementById('sound-on-path');
  if (path) path.style.display = state.soundOn ? '' : 'none';
}

document.getElementById('sound-toggle').addEventListener('click', () => {
  state.soundOn = !state.soundOn;
  localStorage.setItem(STORAGE.sound, state.soundOn ? 'on' : 'off');
  updateSoundIcon();
  if (state.soundOn) beep(660, 100);
});

// ---------------- Screens ----------------
const screens = {
  home: document.getElementById('home'),
  workout: document.getElementById('workout'),
  done: document.getElementById('done'),
  preview: document.getElementById('preview')
};

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
  window.scrollTo(0, 0);
}

// ---------------- Home: streak + history rendering ----------------
function renderStreak() {
  const streak = calculateStreak();
  document.getElementById('streak-count').textContent = streak;

  const status = document.getElementById('streak-status');
  if (streak === 0) status.textContent = 'начнём сегодня';
  else if (isDoneToday()) status.textContent = 'сегодня уже сделано ✓';
  else status.textContent = 'не пропустите сегодня';

  // Render last 7 days dots
  const dotsEl = document.getElementById('streak-dots');
  dotsEl.innerHTML = '';
  const history = getHistory();
  const dates = new Set(history.map(h => h.date));
  const today = new Date();
  const dayNames = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    const isToday = i === 0;
    const done = dates.has(key);
    const dot = document.createElement('div');
    dot.className = 'streak-dot' + (done ? ' done' : '') + (isToday ? ' today' : '');
    dot.innerHTML = `<span class="streak-dot-day">${dayNames[d.getDay()]}</span>`;
    dotsEl.appendChild(dot);
  }
}

function renderHistory() {
  const card = document.getElementById('history-card');
  const list = document.getElementById('history-list');
  const history = getHistory();
  if (!history.length) { card.hidden = true; return; }
  card.hidden = false;
  list.innerHTML = '';
  const monthNames = ['янв','фев','мар','апр','мая','июн','июл','авг','сен','окт','ноя','дек'];
  history.slice(0, 5).forEach(h => {
    const d = new Date(h.date);
    const today = new Date();
    const yesterday = new Date(); yesterday.setDate(today.getDate() - 1);
    const isToday = h.date === today.toISOString().slice(0,10);
    const isYesterday = h.date === yesterday.toISOString().slice(0,10);
    const dateLabel = isToday ? 'Сегодня' : isYesterday ? 'Вчера' : `${d.getDate()} ${monthNames[d.getMonth()]}`;
    const li = document.createElement('li');
    li.className = 'history-item';
    li.innerHTML = `<span class="history-item-date">${dateLabel}</span><span class="history-item-meta">${h.duration} минут</span>`;
    list.appendChild(li);
  });
}

// ---------------- Duration cards ----------------
document.querySelectorAll('.duration-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.duration-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    state.duration = parseInt(card.dataset.duration, 10);
    state.program = state.duration === 40 ? PROGRAM_40 : PROGRAM_30;
    localStorage.setItem(STORAGE.duration, state.duration);
  });
});

function restoreDuration() {
  const stored = parseInt(localStorage.getItem(STORAGE.duration) || '30', 10);
  state.duration = stored;
  state.program = stored === 40 ? PROGRAM_40 : PROGRAM_30;
  document.querySelectorAll('.duration-card').forEach(c => {
    c.classList.toggle('active', parseInt(c.dataset.duration, 10) === stored);
  });
}

// ---------------- Workout: start ----------------
document.getElementById('start-btn').addEventListener('click', startWorkout);

function startWorkout() {
  state.currentIdx = 0;
  state.totalElapsed = 0;
  state.totalDuration = state.program.reduce((sum, id) => sum + EX[id].duration, 0);
  state.isPlaying = true;
  state.isPaused = false;
  loadExercise(0);
  showScreen('workout');
  // Resume audio context on user gesture
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
  } catch(e) {}
  startTimer();
  // Lock screen wake (best effort)
  requestWakeLock();
}

let wakeLock = null;
async function requestWakeLock() {
  try {
    if ('wakeLock' in navigator) {
      wakeLock = await navigator.wakeLock.request('screen');
    }
  } catch(e) {}
}
function releaseWakeLock() {
  try { if (wakeLock) { wakeLock.release(); wakeLock = null; } } catch(e) {}
}
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && state.isPlaying && !state.isPaused) {
    requestWakeLock();
  }
});

// ---------------- Exercise rendering ----------------
function loadExercise(idx) {
  const id = state.program[idx];
  const ex = EX[id];
  const section = SECTIONS[ex.section];

  document.getElementById('section-tag').textContent = section.name;
  document.getElementById('exercise-name').textContent = ex.name;
  document.getElementById('exercise-hint').textContent = ex.hint;
  document.getElementById('exercise-illustration').innerHTML = ex.illus;

  state.remaining = ex.duration;
  updateTimerDisplay();
  updateProgress();

  // Upcoming
  const nextId = state.program[idx + 1];
  document.getElementById('upcoming-name').textContent = nextId ? EX[nextId].name : 'Завершение';
}

function updateTimerDisplay() {
  document.getElementById('timer-num').textContent = state.remaining;
  // ring progress
  const id = state.program[state.currentIdx];
  const total = EX[id].duration;
  const circumference = 2 * Math.PI * 90; // r=90
  const ratio = state.remaining / total;
  const offset = circumference * (1 - ratio);
  document.getElementById('timer-progress').style.strokeDashoffset = offset;
}

function updateProgress() {
  const total = state.totalDuration;
  const pct = total ? (state.totalElapsed / total) * 100 : 0;
  document.getElementById('overall-progress').style.width = pct + '%';
  document.getElementById('exercise-counter').textContent = `${state.currentIdx + 1} / ${state.program.length}`;
  // remaining global time
  const remainingTotal = Math.max(0, total - state.totalElapsed);
  const mm = Math.floor(remainingTotal / 60);
  const ss = remainingTotal % 60;
  document.getElementById('time-remaining').textContent = `${mm}:${ss.toString().padStart(2,'0')}`;
}

// ---------------- Timer logic ----------------
function startTimer() {
  if (state.intervalId) clearInterval(state.intervalId);
  state.isPaused = false;
  setPlayIcon(false);
  state.intervalId = setInterval(tick, 1000);
}

function pauseTimer() {
  state.isPaused = true;
  if (state.intervalId) { clearInterval(state.intervalId); state.intervalId = null; }
  setPlayIcon(true);
}

function tick() {
  state.remaining--;
  state.totalElapsed++;

  if (state.remaining <= 3 && state.remaining > 0) {
    chimeCountdown();
  }

  updateTimerDisplay();
  updateProgress();

  if (state.remaining <= 0) {
    nextExercise();
  }
}

function setPlayIcon(showPlay) {
  document.getElementById('play-icon').style.display = showPlay ? '' : 'none';
  document.getElementById('pause-icon').style.display = showPlay ? 'none' : '';
}

function nextExercise() {
  if (state.currentIdx >= state.program.length - 1) {
    finishWorkout();
    return;
  }
  state.currentIdx++;
  // Adjust totalElapsed to match start of new exercise (avoid drift if skipped)
  state.totalElapsed = state.program.slice(0, state.currentIdx).reduce((s, id) => s + EX[id].duration, 0);
  chimeNext();
  loadExercise(state.currentIdx);
  if (!state.isPaused) startTimer();
}

function prevExercise() {
  if (state.currentIdx <= 0) return;
  state.currentIdx--;
  state.totalElapsed = state.program.slice(0, state.currentIdx).reduce((s, id) => s + EX[id].duration, 0);
  loadExercise(state.currentIdx);
  if (!state.isPaused) startTimer();
}

document.getElementById('play-btn').addEventListener('click', () => {
  if (state.isPaused) startTimer();
  else pauseTimer();
});

document.getElementById('next-btn').addEventListener('click', nextExercise);
document.getElementById('prev-btn').addEventListener('click', prevExercise);

document.getElementById('exit-btn').addEventListener('click', () => {
  if (confirm('Выйти из тренировки? Прогресс не сохранится.')) {
    pauseTimer();
    releaseWakeLock();
    state.isPlaying = false;
    showScreen('home');
    renderStreak();
    renderHistory();
  }
});

// ---------------- Finish ----------------
function finishWorkout() {
  pauseTimer();
  releaseWakeLock();
  state.isPlaying = false;
  saveSession(state.duration);
  chimeFinal();
  document.getElementById('done-duration').textContent = state.duration;
  document.getElementById('done-streak').textContent = calculateStreak();
  showScreen('done');
}

document.getElementById('done-home-btn').addEventListener('click', () => {
  showScreen('home');
  renderStreak();
  renderHistory();
});

// ---------------- Preview screen ----------------
document.getElementById('preview-btn').addEventListener('click', () => {
  renderPreview();
  showScreen('preview');
});

document.getElementById('preview-back-btn').addEventListener('click', () => {
  showScreen('home');
});

function renderPreview() {
  const list = document.getElementById('preview-list');
  list.innerHTML = '';
  const program = state.duration === 40 ? PROGRAM_40 : PROGRAM_30;
  let lastSection = null;
  program.forEach(id => {
    const ex = EX[id];
    if (ex.section !== lastSection) {
      const h = document.createElement('h2');
      h.className = 'preview-section-title';
      h.textContent = SECTIONS[ex.section].name;
      list.appendChild(h);
      lastSection = ex.section;
    }
    const item = document.createElement('div');
    item.className = 'preview-item';
    const mins = Math.floor(ex.duration / 60);
    const secs = ex.duration % 60;
    const timeStr = mins ? `${mins} мин${secs ? ' ' + secs + ' сек' : ''}` : `${secs} сек`;
    item.innerHTML = `
      <div class="preview-item-icon">${ex.illus}</div>
      <div class="preview-item-body">
        <div class="preview-item-time">${timeStr}</div>
        <div class="preview-item-name">${ex.name}</div>
        <div class="preview-item-hint">${ex.hint}</div>
      </div>
    `;
    list.appendChild(item);
  });
}

// ---------------- Init ----------------
function init() {
  initTheme();
  initSound();
  restoreDuration();
  renderStreak();
  renderHistory();
}

init();

}); // DOMContentLoaded
