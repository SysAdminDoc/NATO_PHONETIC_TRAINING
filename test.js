/* Lightweight, dependency-free regression checks for the single-file app. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const html = fs.readFileSync('index.html', 'utf8');
const match = html.match(/<script>([\s\S]*)<\/script>/);
assert.ok(match, 'inline application script exists');

class FakeElement {
    constructor(id = '') { this.id = id; this.innerHTML = ''; this.textContent = ''; this.dataset = {}; this.classList = { add() {}, remove() {} }; }
    addEventListener() {}
    querySelectorAll() { return []; }
    querySelector() { return new FakeElement(); }
    focus() {}
    click() {}
}

const elements = new Map();
const document = {
    documentElement: { dataset: {} },
    getElementById(id) { if (!elements.has(id)) elements.set(id, new FakeElement(id)); return elements.get(id); },
    querySelectorAll() { return []; },
    addEventListener() {},
    createElement() { return new FakeElement(); }
};
const listeners = {};
const window = {
    dispatchEvent(event) { (listeners[event.type] || []).forEach(fn => fn(event)); },
    addEventListener(type, fn) { (listeners[type] ||= []).push(fn); },
    AudioContext: class {},
    speechSynthesis: { cancel() {}, speak() {}, getVoices() { return []; }, addEventListener() {} }
};
const context = {
    window,
    document,
    navigator: {},
    localStorage: { getItem() { return null; }, setItem() {} },
    SpeechSynthesisUtterance: class { },
    CustomEvent: class { constructor(type, init = {}) { this.type = type; this.detail = init.detail; } },
    Event: class { constructor(type) { this.type = type; } },
    Blob: class {},
    URL: { createObjectURL() { return ''; }, revokeObjectURL() {} },
    setTimeout,
    clearTimeout,
    setInterval,
    clearInterval,
    Math,
    Date,
    JSON,
    Object,
    Array,
    String,
    Number,
    console
};
vm.runInNewContext(match[1], context, { filename: 'index.html' });
const api = window.NATOTrainer;
assert.ok(api, 'test API is exposed');
assert.equal(api.version, '0.2.0', 'application version is synchronized');
assert.equal(Object.keys(api.getAlphabet()).length, 36, 'default pack has 26 letters and 10 digits');
assert.equal(api.getAlphabet().X, 'X-ray', 'default pack preserves NATO X-ray');
api.setAlphabet('apco', 'radio');
assert.equal(api.getAlphabet().A, 'Adam', 'APCO pack switches letter words');
assert.equal(api.getAlphabet()['5'], 'Fife', 'radio digit variant switches Fife');
assert.equal(api.getAlphabet()['9'], 'Niner', 'radio digit variant switches Niner');
assert.ok(api.getReferenceCodes().qCodes.some(item => item.code === 'QTH'), 'Q-code reference includes QTH');
assert.ok(api.getReferenceCodes().tenCodes.some(item => item.code === '10-4'), '10-code reference includes 10-4');
const ipv6 = api.generateITString('ipv6');
assert.equal(ipv6.split(':').length, 8, 'IPv6 generator creates eight groups');
assert.match(api.generateITString('license'), /^[A-Z0-9]{5}(?:-[A-Z0-9]{5}){4}$/, 'license generator creates five groups');
assert.equal(api.masteryEstimate().total, 26, 'mastery estimate tracks the active letter set');
assert.match(api.confusionCsv(), /^"Expected","Given","Count"/, 'confusion export has a CSV header');
assert.match(html, /serviceWorker\.register/, 'PWA registration is wired');
assert.equal((html.match(/<select\b/g) || []).length, (html.match(/<\/select>/g) || []).length, 'settings select markup is balanced');
assert.match(html, /id="setting-font"[\s\S]*?<\/select>/, 'font preference control is present');
assert.match(html, /VOICE INPUT MODE/, 'voice input mode is wired');
assert.match(html, /embed=1/, 'embeddable mode flag is wired');
console.log('PASS NATO trainer regression checks');
