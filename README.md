# NATO Phonetic Trainer

**Learn and master the NATO phonetic alphabet for tech support calls, server readouts, and clear communications.**

A zero-dependency, single-file web app with six training modes, persistent progress tracking, text-to-speech pronunciation, sound effects, and keyboard shortcuts. Built for IT professionals who need to read out hostnames, IPs, serial numbers, and MAC addresses clearly over the phone.

![HTML5](https://img.shields.io/badge/HTML5-Single_File-E34F26?logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-222?logo=github)

---

## Demo

> **[Live Demo](https://sysadmindoc.github.io/nato-phonetic-trainer)** *(update URL after deploying)*

---

## Features

### Live Converter
Type any text and see the full NATO phonetic breakdown in real time. Copy to clipboard or have it read aloud via text-to-speech. Perfect for use *during* active support calls.

### Reference Grid
Full A–Z plus 0–9 reference with filtering and per-word pronunciation buttons. Includes the correct NATO digit pronunciations (e.g., "Niner" for 9).

### Spell Drill
Given a hostname, IP, or custom string, spell out each character phonetically. Supports custom input or random IT-themed challenges like `SRV-DC01`, `172.16.0.50`, `WSUS-SRV01`, and more.

### Speed Quiz
Two quiz directions — see a letter and pick the NATO word, or see the word and pick the letter. Tracks score, current streak, and best streak. Supports keyboard shortcuts (`1` `2` `3` `4`) for rapid-fire answering.

### Call Simulator
Generates realistic IT scenarios — hostnames, IPv4 addresses, serial numbers, MAC addresses, or mixed — and has you read them out phonetically character by character. Timed with accuracy scoring.

### Timed Challenge
30, 60, or 90 second countdown mode. Answer as many letter-to-word questions as possible before time expires. Tracks personal best across sessions. Countdown tick sounds in the final 10 seconds.

---

## Additional Highlights

- **Text-to-Speech** — hear correct pronunciations on reference cards and drill results via the Web Speech API
- **Sound Effects** — synthesized correct/wrong/complete sounds via Web Audio API (no audio files needed)
- **Keyboard Shortcuts** — keys `1` through `4` for quiz and timed modes
- **Persistent Stats** — sessions, accuracy %, best streak, and best timed score saved to localStorage
- **Mobile Responsive** — fully usable on phones for quick practice between calls
- **CRT Terminal Aesthetic** — scanline overlay, green-on-black monospace theme
- **Zero Dependencies** — single HTML file, no build step, no frameworks, no CDN dependencies beyond Google Fonts
- **Offline Capable** — works without internet after first load (font falls back to system monospace)

---

## Deployment

### GitHub Pages (Recommended)

1. Create a new repository on GitHub
2. Add `index.html` to the root of the repo
3. Go to **Settings → Pages**
4. Under **Source**, select **Deploy from a branch**
5. Choose `main` branch, `/ (root)` folder
6. Click **Save** — your site will be live at `https://<username>.github.io/<repo-name>`

### Local

Just open `index.html` in any modern browser. No server required.

---

## NATO Phonetic Alphabet Reference

| Letter | Word | Letter | Word | Digit | Word |
|--------|----------|--------|----------|-------|---------|
| A | Alpha | N | November | 0 | Zero |
| B | Bravo | O | Oscar | 1 | One |
| C | Charlie | P | Papa | 2 | Two |
| D | Delta | Q | Quebec | 3 | Three |
| E | Echo | R | Romeo | 4 | Four |
| F | Foxtrot | S | Sierra | 5 | Five |
| G | Golf | T | Tango | 6 | Six |
| H | Hotel | U | Uniform | 7 | Seven |
| I | India | V | Victor | 8 | Eight |
| J | Juliet | W | Whiskey | 9 | Niner |
| K | Kilo | X | X-ray | | |
| L | Lima | Y | Yankee | | |
| M | Mike | Z | Zulu | | |

---

## Tech Stack

| Component | Technology |
|-----------|-----------|
| UI | Vanilla HTML/CSS/JS |
| Audio | Web Audio API (synthesized tones) |
| Speech | Web Speech API (text-to-speech) |
| Storage | localStorage |
| Font | Share Tech Mono (Google Fonts) |
| Hosting | GitHub Pages / any static host |

---

## License

MIT License — see [LICENSE](LICENSE) for details.

---

**Built by [SysAdminDoc](https://github.com/SysAdminDoc)** — Clear comms save time.
