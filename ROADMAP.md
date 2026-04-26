# Roadmap

Single-file HTML/JS NATO phonetic alphabet trainer for IT support calls. Six modes, TTS, Web Audio SFX, CRT terminal aesthetic. Roadmap targets drill variety, international alphabets, and richer progress analytics.

## Planned Features

### Drill Modes
- **Dictation mode** — audio plays a NATO word, user types the letter (inverse of speed quiz)
- **Whisper mode** — degrade TTS with pink noise / bandpass filter to simulate bad phone audio
- **Speed-ramp drill** — timer shrinks on consecutive correct answers, resets on wrong
- **Challenge ladder** — unlock longer strings (hostname → IP → MAC → serial) by passing prior tier
- **Peer mode** — two devices on same room code; one reads, one transcribes, with scoring

### Alphabet Packs
- **ICAO/NATO** (current), **LAPD/APCO** police alphabet, **Western Union**, **RAF WWII**, **US Joint Army/Navy** (Able/Baker)
- Amateur radio Q-codes + 10-codes reference
- Multi-language packs: Spanish (ANSP), German (DIN 5009), Russian (GOST)
- Unicode / NATO digit variants ("Fife" vs "Five", "Niner" vs "Nine")

### IT-Specific Practice
- Real-world string generator weighted to IT patterns: `SRV-*`, `DC-*`, `PRINT-*`, `172.16.*`, `fe80::*`
- IPv6 practice (hex digit pronunciation + group abbreviation)
- MAC address mode with vendor-OUI prefix preloading
- License-key style: 5x5 alphanumeric groups with dashes

### Progress & Analytics
- Per-letter accuracy heatmap (identify which letters you mix up)
- Confusion matrix export (CSV)
- Streak calendar (GitHub-style contribution grid)
- Session time-to-mastery estimator
- Leaderboard via localStorage + optional public JSON gist sync

### Accessibility
- High-contrast (non-CRT) theme toggle for visual-impairment users
- Dyslexia-friendly font option (OpenDyslexic)
- Screen-reader mode (ARIA live regions for results)
- Adjustable TTS rate and voice selection

## Competitive Research
- **Memrise / Anki decks** for phonetic alphabet — good SRS algorithm; borrow for letter weighting.
- **Morse.withgoogle** — elegant single-purpose trainer UX; match the minimalism.
- **Ham Radio Prep** apps — paid training angle, we win on price/speed.
- **Phonetic Alphabet (Google/App Store)** — mostly static reference apps, no drill depth; easy win.

## Nice-to-Haves
- Voice-input mode: user speaks the word, Web Speech API grades pronunciation
- Shareable challenge links ("beat my 47/60 timed score")
- Offline PWA install with service-worker precache
- Exam-cert study pack (CompTIA A+, Network+, Cisco CCNA radio basics)
- Dark mode beyond CRT (Catppuccin Mocha, Nord)
- Embeddable widget (iframe) for sysadmin training intranets

## Open-Source Research (Round 2)

### Related OSS Projects
- https://github.com/Ealenn/NATO-phonetic-alphabet — web app with mini-games, test modes
- https://github.com/cipherbeta/Phonetic-Alphabet-Trainer — React + Redux + React-Pose animations, live demo on GH Pages
- https://github.com/RyanYip/NATO-Alphabet-Trainer — gamified learn-by-doing
- https://github.com/LouisT/node-npa — library, converts text ↔ NATO ↔ Morse (Node + browser)
- https://github.com/topics/nato-phonetic-alphabet — broader topic index for reference
- https://github.com/topics/nato-alphabet — additional ports (HTML5/PHP/etc.)

### Features to Borrow
- Morse code secondary trainer mode — NATO and Morse are learned together by tech/ham crowd (LouisT/node-npa dual conversion)
- Text ↔ NATO converter utility alongside training (LouisT/node-npa) — dual-purpose app: "spell this IP for me" is a daily sysadmin need
- React-Pose / Framer-Motion style letter reveal animations (cipherbeta) — improves memory retention via spatial/motion encoding
- Mini-game variety: timed quiz, reverse quiz (phonetic → letter), sentence scramble (Ealenn)
- Leaderboard + streak tracking with localStorage export (common mobile-app pattern from nato-alphabet topic)
- Semaphore + flag-signal mode (nato-alphabet-learning.com reference) — natural extension for military/maritime users
- Phonetic pronunciation audio from native speakers instead of TTS (universalalphabet.com) — record 26 WAV files, ship inline as base64

### Patterns & Architectures Worth Studying
- Spaced-repetition scheduling (Anki / SM-2 algorithm) for per-letter mastery tracking — more effective than round-robin, minimal to implement
- PWA + service worker for fully offline training on a phone during on-call (already single-file, add manifest + SW)
- Web Speech API speech recognition for "say the letter, get graded" mode — hands-free training while driving
- localStorage schema versioning with migration — avoid corrupting progress on update (pattern common across nato-alphabet topic repos)
