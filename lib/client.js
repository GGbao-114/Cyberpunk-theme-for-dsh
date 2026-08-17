window.__ModuleLoader__.load({
	id: "dsh-theme-cyberpunk2077",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;

		// ════════════════════════════════════════════════════════════════
		// CYBERPUNK 2077 — NIGHT CITY theme for DeepSeek Harness Web UI.
		// Token layer + full identity layer: chamfered chrome, glitch, CRT,
		// HUD states, shard sessions, typewriter + message SFX, boot intro,
		// relic interference, DECK control panel, easter eggs — plus the v2
		// pass: Kiroshi lock-on hover, combat state (stamina bar + NC loading
		// tips), slang chips, NC wall clock, hex data-stream, Johnny takeover,
		// hazard tape, EXECUTE RGB split, mobile/reduced-motion guards.
		// ════════════════════════════════════════════════════════════════
		const TOKENS = {
			// surfaces — deep night blue-black
			"--dsw-alias-bg-base": "#05070d",
			"--dsw-alias-bg-layer-1": "#0a0e18",
			"--dsw-alias-bg-layer-2": "#0d1322",
			"--dsw-alias-bg-layer-3": "#121a2c",
			"--dsw-alias-bg-overlay": "#141c30",
			"--dsw-alias-bg-module-platform": "#0a101d",
			"--dsw-alias-bg-multi-select": "#11182a",
			"--dsw-alias-bg-skeleton": "rgba(0, 240, 255, 0.07)",
			"--dsw-alias-bg-mask-1": "rgba(0, 0, 0, 0.72)",
			"--dsw-alias-bg-mask-2": "rgba(0, 0, 0, 0.4)",
			"--dsw-alias-bg-mask-3": "rgba(0, 0, 0, 0.72)",
			"--dsw-alias-bg-mask-photo": "rgba(0, 0, 0, 0.9)",
			"--dsw-alias-bg-mask-drop": "rgba(5, 7, 13, 0.72)",

			// labels
			"--dsw-alias-label-primary": "#e8f1ff",
			"--dsw-alias-label-secondary": "#9fb2d6",
			"--dsw-alias-label-tertiary": "#6e80a6",
			"--dsw-alias-label-caption": "#8fa3c8",
			"--dsw-alias-label-dimmed": "#5a6b8c",
			"--dsw-alias-label-primary-bluish": "#e8f1ff",
			"--dsw-alias-label-primary-dimmed": "#d8e6ff",
			"--dsw-alias-label-primary-foreground": "#0a0f18",
			"--dsw-alias-label-primary-inverted": "#0a0f18",

			// brand — the Cyberpunk 2077 yellow
			"--dsw-alias-brand-primary": "#ff3355",
			"--dsw-alias-brand-text": "#ff3355",
			"--dsw-alias-brand-primary-invert": "#1a020a",
			"--dsw-alias-brand-primary-new-colorprimary-new-color": "#00f0ff",

			// buttons
			"--dsw-alias-button-primary-fill": "#ff3355",
			"--dsw-alias-button-primary-hover": "#ff5c78",
			"--dsw-alias-button-primary-dimmed": "rgba(255, 42, 77, 0.12)",
			"--dsw-alias-button-contrast-fill": "#e8f1ff",
			"--dsw-alias-button-elevated-fill": "#101624",
			"--dsw-alias-button-floating-fill": "#0d1322",
			"--dsw-alias-button-floating-hover": "#141c30",
			"--dsw-alias-button-ghost-active-fill": "#101a2c",
			"--dsw-alias-button-ghost-active-hover": "#162035",
			"--dsw-alias-button-info-fill": "#00c2d9",
			"--dsw-alias-button-info-hover": "#00f0ff",
			"--dsw-alias-button-tool-bar-fill-invisible": "rgba(0, 240, 255, 0.08)",
			"--dsw-alias-button-tool-bar-fill": "rgba(0, 240, 255, 0.14)",
			"--dsw-alias-button-tool-bar-hover": "rgba(0, 240, 255, 0.22)",
			"--dsw-alias-button-ghost-active-border": "#00f0ff",

			// interactive
			"--dsw-alias-interactive-bg-hover": "rgba(0, 240, 255, 0.09)",
			"--dsw-alias-interactive-bg-active": "rgba(0, 240, 255, 0.15)",
			"--dsw-alias-interactive-bg-hover-accent": "rgba(255, 42, 77, 0.14)",
			"--dsw-alias-interactive-bg-hover-danger": "rgba(255, 0, 60, 0.14)",
			"--dsw-alias-interactive-bg-hover-solid": "#141c2b",

			// borders
			"--dsw-alias-border-l1": "rgba(0, 240, 255, 0.12)",
			"--dsw-alias-border-l2": "rgba(0, 240, 255, 0.20)",
			"--dsw-alias-border-l2-darkmode-thin": "rgba(0, 240, 255, 0.10)",
			"--dsw-alias-border-l3": "rgba(255, 42, 77, 0.22)",
			"--dsw-alias-border-l4": "rgba(0, 240, 255, 0.34)",
			"--dsw-alias-border-inverted": "rgba(255, 255, 255, 0.10)",
			"--dsw-alias-border-inverted2": "rgba(255, 255, 255, 0.14)",

			// state
			"--dsw-alias-state-business-primary": "#00f0ff",
			"--dsw-alias-state-business-tertiary": "#0c2a3d",
			"--dsw-alias-state-error-primary": "#ff003c",
			"--dsw-alias-state-error-secondary": "#ff3b69",
			"--dsw-alias-state-success-primary": "#00f5a0",
			"--dsw-alias-state-success-secondary": "#3dffbe",
			"--dsw-alias-state-success-tertiary": "#07301f",
			"--dsw-alias-state-warn-label": "#ffc94d",
			"--dsw-alias-state-warn-primary": "#ffb300",
			"--dsw-alias-state-warn-secondary": "#ffc94d",
			"--dsw-alias-state-warn-tertiary": "#3a2a00",

			// markdown / code
			"--dsw-alias-markdown-code-block": "#060a12",
			"--dsw-alias-markdown-code-block-banner": "#0a0f1c",
			"--dsw-alias-markdown-inline-code": "#12202f",
			"--dsw-alias-markdown-placeholder": "#0e141f",
			"--dsw-alias-markdown-tag": "#0f1a2b",
			"--dsw-alias-markdown-citation": "#0e1626",
			"--dsw-alias-markdown-code-segment-selected": "#10182a",
			"--dsw-alias-markdown-code-segment-unselected": "#0a0f18",

			// scrollbar — neon yellow
			"--dsw-alias-scrollbar-bg-l1": "rgba(255, 42, 77, 0.26)",
			"--dsw-alias-scrollbar-bg-l2": "rgba(255, 42, 77, 0.32)",
			"--dsw-alias-scrollbar-hover-l1": "rgba(255, 42, 77, 0.48)",
			"--dsw-alias-scrollbar-hover-l2": "rgba(255, 42, 77, 0.55)",

			// toast / tooltip
			"--dsw-alias-toast-bg": "#0d1322",
			"--dsw-alias-tooltip-bg": "#141c30",

			// specific surfaces
			"--dsw-specific-bubble": "#0a0f1c",
			"--dsw-specific-bubble-highlight": "#12222e",
			"--dsw-specific-input-major": "#070b12",
			"--dsw-specific-login-input": "#060a11",
			"--dsw-specific-menu": "#121a2c",
			"--dsw-specific-selector": "#0d1322",
			"--dsw-specific-tip": "#0d1424",
			"--dsw-specific-sidebar-fill": "#060a11",
			"--dsw-specific-sidebar-nav-item-active": "#101826",
			"--dsw-specific-sidebar-nav-item-active-accent": "#ff3355",
			"--dsw-specific-sidebar-nav-item-hover": "#0f1522",

			// statics
			"--dsw-static-neutral-bluish-00": "#05070d",
			"--dsw-static-neutral-bluish-1000": "#e8f1ff",
			"--dsw-static-neutral-bluish-100": "#0a0e18",
			"--dsw-static-neutral-bluish-200": "#0d1322",
			"--dsw-static-neutral-bluish-300": "#121a2c",
			"--dsw-static-neutral-bluish-400": "#9fb2d6",
			"--dsw-static-neutral-bluish-50": "#0a0e18",
			"--dsw-static-neutral-bluish-500": "#6e80a6",
			"--dsw-static-neutral-bluish-600": "#5a6b8c",
			"--dsw-static-neutral-bluish-700": "#3a4a68",
			"--dsw-static-neutral-bluish-750": "#24324c",
			"--dsw-static-neutral-bluish-75": "#0d1322",
			"--dsw-static-neutral-bluish-800": "#1a2234",
			"--dsw-static-neutral-bluish-850": "#111827",
			"--dsw-static-neutral-bluish-875": "#0d121d",
			"--dsw-static-neutral-bluish-900": "#090d16",
			"--dsw-static-neutral-bluish-950": "#060910",
			"--dsw-static-neutral-bluish-60": "#0a0f18",

			"--dsw-static-deepseek-400": "#00f0ff",
			"--dsw-static-deepseek-450": "#00cfe8",
			"--dsw-static-deepseek-500": "#00c2d9",
			"--dsw-static-deepseek-600": "#0f7da8",
			"--dsw-static-deepseek-700-delete": "#0b4a66",
			"--dsw-static-deepseek-800": "#0a3548",
			"--dsw-static-deepseek-900": "#092433",
			"--dsw-static-deepseek-100": "#12293a",
			"--dsw-static-deepseek-200": "#0f2d42",
			"--dsw-static-deepseek-300": "#0d3550",
			"--dsw-static-deepseek-50": "#0a1526",

			"--dsw-static-blue-400": "#00f0ff",
			"--dsw-static-blue-450": "#00cfe8",
			"--dsw-static-blue-500": "#00b3c9",
			"--dsw-static-blue-600": "#0f7da8",
			"--dsw-static-blue-800": "#0b4a66",
			"--dsw-static-blue-900": "#0a3548",
			"--dsw-static-blue-950": "#092433",
			"--dsw-static-blue-100": "#12263d",
			"--dsw-static-blue-300": "#2bd9f0",
			"--dsw-static-blue-50": "#0a1526",
			"--dsw-static-blue-75": "#0e1c30",
			"--dsw-static-blue-50p": "#0a1a2e",

			"--dsw-static-green-400": "#3dffbe",
			"--dsw-static-green-500": "#00f5a0",
			"--dsw-static-green-100": "#07301f",
			"--dsw-static-green-900": "#043524",

			"--dsw-static-red-400": "#ff3b69",
			"--dsw-static-red-500": "#ff003c",
			"--dsw-static-red-600": "#ff003c",
			"--dsw-static-red-100": "#3a1020",
			"--dsw-static-red-50": "#2b0e1a",
			"--dsw-static-red-900": "#4b0d1c",

			"--dsw-static-amber-400": "#ffc94d",
			"--dsw-static-amber-500": "#ffb300",
			"--dsw-static-amber-600": "#ff9f00",
			"--dsw-static-amber-100": "#3a2a00",
			"--dsw-static-amber-900": "#2b1f00"
		};

		const THEME_ID = "cyberpunk2077";

		// ── config (persisted in localStorage under one key) ───────────────
		const CFG_KEY = "cp2077-cfg";
		const CFG_DEFAULTS = { scan: true, relic: true, boot: true, type: true, sfx: true };
		let cfg = { ...CFG_DEFAULTS };
		function loadCfg() {
			try {
				const raw = localStorage.getItem(CFG_KEY);
				if (raw !== null) cfg = { ...CFG_DEFAULTS, ...JSON.parse(raw) };
			} catch {}
		}
		function saveCfg() {
			try { localStorage.setItem(CFG_KEY, JSON.stringify(cfg)); } catch {}
		}
		// Effects gate on body classes so CSS can switch them off cheaply.
		function applyCfgToBody() {
			const b = document.body;
			if (b === undefined || b === null) return;
			b.classList.toggle("cp-off-scan", !cfg.scan);
			b.classList.toggle("cp-off-relic", !cfg.relic);
			b.classList.toggle("cp-off-sfx", !cfg.sfx);
		}

		// ── sound engine (Web Audio; everything synthesized, no assets) ────
		let audioCtx = null;
		let noiseBuf = null;
		function ensureAudio() {
			const AC = window.AudioContext || window.webkitAudioContext;
			if (AC === undefined) return null;
			if (audioCtx === null) audioCtx = new AC();
			if (audioCtx.state === "suspended") audioCtx.resume().catch(() => {});
			return audioCtx;
		}
		function noiseBuffer(ctx) {
			if (noiseBuf !== null) return noiseBuf;
			const len = Math.floor(ctx.sampleRate * 0.06);
			const buf = ctx.createBuffer(1, len, ctx.sampleRate);
			const data = buf.getChannelData(0);
			for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
			noiseBuf = buf;
			return buf;
		}
		// One key click: noise transient + pitch-drop body.
		function playKeyClick(key) {
			if (!cfg.type) return;
			const ctx = ensureAudio();
			if (ctx === null || ctx.state !== "running") return;
			const t = ctx.currentTime;
			const src = ctx.createBufferSource();
			src.buffer = noiseBuffer(ctx);
			const bp = ctx.createBiquadFilter();
			bp.type = "bandpass";
			const base = key === " " ? 1300 : key === "Enter" ? 1000 : 1900;
			bp.frequency.value = base + Math.random() * 900;
			bp.Q.value = 1.1;
			const g = ctx.createGain();
			g.gain.setValueAtTime(0.0001, t);
			g.gain.exponentialRampToValueAtTime(0.1 + Math.random() * 0.05, t + 0.002);
			g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
			src.connect(bp); bp.connect(g); g.connect(ctx.destination);
			src.start(t); src.stop(t + 0.07);
			const osc = ctx.createOscillator();
			osc.type = "triangle";
			const f0 = key === "Enter" ? 190 : key === " " ? 130 : 150 + Math.random() * 40;
			osc.frequency.setValueAtTime(f0, t);
			osc.frequency.exponentialRampToValueAtTime(55, t + 0.055);
			const g2 = ctx.createGain();
			g2.gain.setValueAtTime(0.0001, t);
			g2.gain.exponentialRampToValueAtTime(0.07, t + 0.003);
			g2.gain.exponentialRampToValueAtTime(0.0001, t + 0.06);
			osc.connect(g2); g2.connect(ctx.destination);
			osc.start(t); osc.stop(t + 0.07);
		}
		// Generic blip helper: oscillator sweep with envelope.
		function blip(freqA, freqB, dur, vol, type, when) {
			const ctx = ensureAudio();
			if (ctx === null || ctx.state !== "running") return;
			const t = ctx.currentTime + (when ?? 0);
			const osc = ctx.createOscillator();
			osc.type = type ?? "square";
			osc.frequency.setValueAtTime(freqA, t);
			if (freqB !== null && freqB !== freqA) osc.frequency.exponentialRampToValueAtTime(freqB, t + dur);
			const g = ctx.createGain();
			g.gain.setValueAtTime(0.0001, t);
			g.gain.exponentialRampToValueAtTime(vol, t + 0.008);
			g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
			osc.connect(g); g.connect(ctx.destination);
			osc.start(t); osc.stop(t + dur + 0.02);
		}
		// Message lifecycle SFX (all gated on cfg.sfx).
		function playSend() { if (!cfg.sfx) return; blip(680, 1240, 0.09, 0.05, "square"); }
		function playDone() { if (!cfg.sfx) return; blip(880, 880, 0.07, 0.05, "square"); blip(1320, 1320, 0.09, 0.05, "square", 0.1); }
		function playNotify() { if (!cfg.sfx) return; blip(1560, 1560, 0.05, 0.035, "triangle"); blip(2080, 2080, 0.06, 0.03, "triangle", 0.07); }
		function playError() {
			if (!cfg.sfx) return;
			const ctx = ensureAudio();
			if (ctx === null || ctx.state !== "running") return;
			const t = ctx.currentTime;
			const src = ctx.createBufferSource();
			src.buffer = noiseBuffer(ctx);
			const lp = ctx.createBiquadFilter();
			lp.type = "lowpass"; lp.frequency.value = 900;
			const g = ctx.createGain();
			g.gain.setValueAtTime(0.09, t);
			g.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
			src.connect(lp); lp.connect(g); g.connect(ctx.destination);
			src.start(t); src.stop(t + 0.3);
			blip(160, 70, 0.28, 0.07, "sawtooth");
		}
		function playWake() {
			if (!cfg.sfx) return;
			blip(120, 48, 0.6, 0.09, "sawtooth");
			blip(2400, 300, 0.35, 0.04, "square", 0.05);
			blip(90, 40, 0.8, 0.08, "sawtooth", 0.35);
		}
		// Johnny engram booting in: two detuned saws beating against each
		// other, punctuated by data-shrieks.
		function playJohnny() {
			if (!cfg.sfx) return;
			blip(58, 52, 0.9, 0.08, "sawtooth");
			blip(61, 55, 0.9, 0.07, "sawtooth");
			blip(1400, 200, 0.12, 0.04, "square", 0.12);
			blip(1400, 180, 0.12, 0.04, "square", 0.5);
		}

		// ── DECK control panel + SND quick chip ────────────────────────────
		function ensureDeckPanel() {
			if (document.getElementById("cp2077-deck") !== null) return null;
			const wrap = document.createElement("div");
			wrap.id = "cp2077-deck";
			wrap.setAttribute("role", "group");
			wrap.setAttribute("aria-label", "Cyberdeck theme settings");
			const title = document.createElement("div");
			title.className = "cp2077-deck-title";
			title.textContent = "CYBERDECK";
			wrap.appendChild(title);
			const items = [
				["scan", "CRT 扫描线"],
				["relic", "Relic 干扰"],
				["boot", "开机转场"],
				["type", "打字音效"],
				["sfx", "消息/提示音"]
			];
			const paint = (btn, on) => {
				btn.textContent = (on ? "◉ " : "○ ") + btn.dataset.label;
				btn.setAttribute("aria-pressed", String(on));
				btn.classList.toggle("cp2077-on", on);
			};
			for (const [key, label] of items) {
				const btn = document.createElement("button");
				btn.type = "button";
				btn.dataset.label = label;
				btn.addEventListener("click", () => {
					cfg[key] = !cfg[key];
					saveCfg();
					applyCfgToBody();
					paint(btn, cfg[key]);
					playNotify();
				});
				paint(btn, cfg[key]);
				wrap.appendChild(btn);
			}
			const deckBtn = document.createElement("button");
			deckBtn.id = "cp2077-deck-toggle";
			deckBtn.type = "button";
			deckBtn.title = "Cyberdeck theme settings";
			deckBtn.textContent = "DECK";
			deckBtn.addEventListener("click", () => {
				const open = wrap.classList.toggle("cp2077-open");
				deckBtn.setAttribute("aria-expanded", String(open));
				deckBtn.classList.toggle("cp2077-open", open);
			});
			(document.body || document.documentElement).append(deckBtn, wrap);
			return { deckBtn, wrap };
		}
		function ensureSndChip() {
			if (document.getElementById("cp2077-snd-toggle") !== null) return null;
			const btn = document.createElement("button");
			btn.id = "cp2077-snd-toggle";
			btn.type = "button";
			btn.title = "Toggle all sounds";
			const paint = () => {
				const on = cfg.type || cfg.sfx;
				btn.textContent = on ? "SND ◉" : "SND ○";
				btn.setAttribute("aria-pressed", String(on));
			};
			btn.addEventListener("click", () => {
				const on = cfg.type || cfg.sfx;
				cfg.type = !on;
				cfg.sfx = !on;
				saveCfg();
				applyCfgToBody();
				paint();
				if (!on) playNotify();
			});
			paint();
			(document.body || document.documentElement).appendChild(btn);
			return btn;
		}

		// ── interaction watchers (send / done / error / toast) ────────────
		let lastSfxAt = 0;
		function throttled(fn) {
			return () => {
				const now = Date.now();
				if (now - lastSfxAt < 90) return;
				lastSfxAt = now;
				fn();
			};
		}
		const onSendSound = throttled(playSend);
		const onNotifySound = throttled(playNotify);
		function onKeydown(e) {
			const el = e.target;
			if (el === null || el.tagName !== "TEXTAREA") return;
			if (e.metaKey || e.ctrlKey || e.altKey) return;
			if (e.key === "Enter") {
				onSendSound();
				const word = (el.value ?? "").trim().toLowerCase();
				if (word === "relic" || word === "johnny") return; // egg handles its own audio
				flashChip("GIG UP // 单子已发", "info");
				return;
			}
			playKeyClick(e.key);
		}
		// ── working state: combat HUD, NC loading tips, slang chips ──────
		let workingNow = false;
		let tipTimer = null;
		const NC_TIPS = [
			"TIP：NCPD 的扫描仪分不清义体人和原装人——但账单分得清。",
			"TIP：在夜之城，“免费”的东西最贵。",
			"TIP：超梦看多了，现实会开始像盗版。",
			"TIP：荒坂的合同用小字杀人。",
			"TIP：接单前先问一句：谁吃亏？",
			"TIP：义体不是装得多就强，是装得对就强。",
			"TIP：中间人永远抽成——包括你以为是朋友的那位。",
			"TIP：别在市中心堵车的时候接急单。"
		];
		function flashChip(text, tone) {
			let chip = document.getElementById("cp2077-chip");
			if (chip === null) {
				chip = document.createElement("div");
				chip.id = "cp2077-chip";
				chip.setAttribute("role", "status");
				(document.body || document.documentElement).appendChild(chip);
			}
			chip.className = tone;
			chip.textContent = text;
			// restart the entrance animation
			chip.style.animation = "none";
			void chip.offsetWidth;
			chip.style.animation = "";
			clearTimeout(chip._t);
			chip._t = setTimeout(() => chip.remove(), 1700);
		}
		function startTipRotation() {
			if (tipTimer !== null) return;
			flashChip("GIG IN PROGRESS // " + NC_TIPS[0], "info");
			let i = 1;
			tipTimer = setInterval(() => {
				flashChip("GIG IN PROGRESS // " + NC_TIPS[i % NC_TIPS.length], "info");
				i++;
			}, 6000);
		}
		function stopTipRotation() {
			if (tipTimer === null) return;
			clearInterval(tipTimer);
			tipTimer = null;
		}
		// Poll the composer's pending dot: appears while the agent streams,
		// vanishes on completion → combat-state chrome off, PREEM chip + chime.
		// (An interval is cheaper and more robust than a subtree
		// MutationObserver against a React tree.)
		function startPendingPoll() {
			const timer = setInterval(() => {
				const pending = document.querySelector("[class*='_pending']");
				const is = pending !== null;
				if (is !== workingNow) {
					workingNow = is;
					document.body.classList.toggle("cp-working", is);
					paintTitle();
					if (is) startTipRotation();
					else { stopTipRotation(); flashChip("PREEM. // 任务完成", "ok"); playDone(); }
				}
			}, 450);
			return () => { clearInterval(timer); stopTipRotation(); };
		}

		// ── Night City HUD footer: clock + hex stream, docked into the app's
		// own settings bar (its empty right half) so it never fights the
		// layout for a corner. Hidden when the bar is missing or collapsed.
		function startHudFooter() {
			const hud = document.createElement("div");
			hud.id = "cp2077-hud";
			hud.setAttribute("aria-hidden", "true");
			const hex = document.createElement("span");
			hex.id = "cp2077-hex";
			const clock = document.createElement("span");
			clock.id = "cp2077-clock";
			hud.append(hex, clock);
			(document.body || document.documentElement).appendChild(hud);
			const reduced = typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
			const rnd = () => Math.floor(Math.random() * 256).toString(16).toUpperCase().padStart(2, "0");
			const bytes = [];
			for (let i = 0; i < 3; i++) bytes.push(rnd());
			const paintHex = () => {
				hex.textContent = "0x" + bytes.join("");
				hex.hidden = !cfg.scan || reduced;
			};
			const paintClock = () => {
				const d = new Date();
				const p = (n) => String(n).padStart(2, "0");
				clock.textContent = p(d.getHours()) + ":" + p(d.getMinutes()) + " NC-TIME";
			};
			// Find the settings bar (zh-CN "设置" / zh-TW "設定" / en "Settings").
			const findBar = () => {
				for (const b of document.querySelectorAll("button")) {
					const label = b.getAttribute("aria-label") || b.title || (b.textContent || "").trim();
					if (label === "设置" || label === "設定" || label.toLowerCase() === "settings") return b;
				}
				return null;
			};
			// Dock right-aligned inside the bar's empty right half.
			const dock = () => {
				const bar = findBar();
				if (bar === null) { hud.style.display = "none"; return; }
				const r = bar.getBoundingClientRect();
				if (r.width < 170 || r.height === 0) { hud.style.display = "none"; return; }
				hud.style.display = "";
				hud.style.left = Math.round(r.right - 10) + "px";
				hud.style.bottom = Math.round(window.innerHeight - r.bottom + (r.height - 13) / 2) + "px";
			};
			paintHex(); paintClock(); dock();
			// The settings bar renders after the app boots — poll the dock
			// every second for the first 20s, then settle into the slow tick.
			const earlyTimer = setInterval(dock, 1000);
			const earlyStop = setTimeout(() => clearInterval(earlyTimer), 20000);
			let hexIdx = 0;
			const t1 = setInterval(() => {
				if (document.hidden) return;
				bytes[hexIdx = (hexIdx + 1) % bytes.length] = rnd();
				paintHex();
			}, 400);
			const t2 = setInterval(() => {
				if (!document.hidden) paintClock();
				dock();
			}, 10000);
			window.addEventListener("resize", dock);
			// Sidebar collapse/expand shifts the bar without a window resize —
			// any click re-docks shortly after (narrow bars auto-hide the hud).
			const onClick = () => setTimeout(dock, 600);
			document.addEventListener("click", onClick, true);
			return () => {
				clearInterval(t1); clearInterval(t2);
				clearInterval(earlyTimer); clearTimeout(earlyStop);
				window.removeEventListener("resize", dock);
				document.removeEventListener("click", onClick, true);
				hud.remove();
			};
		}
		// Watch for error notices / toasts appearing anywhere.
		function startNoticeObserver() {
			const seen = new WeakSet();
			const observer = new MutationObserver((records) => {
				for (const rec of records) {
					for (const node of rec.addedNodes) {
						if (node.nodeType !== 1) continue;
						const el = node;
						if (seen.has(el)) continue;
						seen.add(el);
						const cls = (el.className && typeof el.className === "string") ? el.className : "";
						if (/_noticeError|_turnError/.test(cls)) { playError(); flashChip("FLATLINE // 连接中断", "err"); }
						else if (/_notice([^A-Za-z]|$)|_toast/.test(cls)) onNotifySound();
					}
				}
			});
			observer.observe(document.body, { childList: true, subtree: true });
			return () => observer.disconnect();
		}

		// ── ambient relic interference (random 40–70s, ~200ms) ────────────
		function startRelicLoop() {
			let stopped = false;
			let overlay = null;
			const flick = () => {
				if (stopped) return;
				if (cfg.relic && !document.hidden) {
					if (overlay === null) {
						overlay = document.createElement("div");
						overlay.id = "cp2077-relic";
						overlay.setAttribute("aria-hidden", "true");
					}
					if (!overlay.isConnected) (document.body || document.documentElement).appendChild(overlay);
					setTimeout(() => overlay.remove(), 220);
				}
				setTimeout(flick, 40000 + Math.random() * 30000);
			};
			setTimeout(flick, 25000 + Math.random() * 20000);
			return () => { stopped = true; };
		}

		// ── easter eggs: type a trigger word + Enter ──────────────────────
		// relic  → WAKE UP, SAMURAI (the Relic booting V)
		// johnny → the engram seizes the screen for 2.6s
		const EGGS = {
			relic: {
				id: "cp2077-wake",
				hold: 2000,
				sound: playWake,
				build(ov) {
					const l1 = document.createElement("div");
					l1.className = "cp2077-wake-line1";
					l1.textContent = "WAKE UP, SAMURAI.";
					const l2 = document.createElement("div");
					l2.className = "cp2077-wake-line2";
					l2.textContent = "WE HAVE A CITY TO BURN.";
					ov.append(l1, l2);
				}
			},
			johnny: {
				id: "cp2077-johnny",
				hold: 2600,
				sound: playJohnny,
				build(ov) {
					const LINES = [
						["THIS CITY'S GOT NO ROOM FOR GHOSTS.", "这座城市容不下幽灵。"],
						["NEVER STOP FIGHTING.", "别停下战斗。"],
						["WE HAD A CITY ONCE. WE LET IT BURN.", "我们曾拥有一座城，然后任它烧尽。"],
						["LEGENDS DON'T DIE. THEY JUST GO OFFLINE.", "传奇不死，只是下线。"]
					];
					const pick = LINES[Math.floor(Math.random() * LINES.length)];
					ov.append(
						Object.assign(document.createElement("div"), { className: "cp2077-johnny-tint" }),
						Object.assign(document.createElement("div"), { className: "cp2077-johnny-tear" })
					);
					const box = document.createElement("div");
					box.className = "cp2077-johnny-box";
					const q = document.createElement("div");
					q.className = "cp2077-johnny-quote";
					q.textContent = pick[0];
					const cn = document.createElement("div");
					cn.className = "cp2077-johnny-cn";
					cn.textContent = pick[1];
					const by = document.createElement("div");
					by.className = "cp2077-johnny-attr";
					by.textContent = "— JOHNNY SILVERHAND // ENGRAM";
					box.append(q, cn, by);
					ov.append(box);
				}
			}
		};
		function startTriggerWatcher() {
			const reduced = () => typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
			const handler = (e) => {
				const el = e.target;
				if (el === null || el.tagName !== "TEXTAREA") return;
				if (e.key !== "Enter" || e.metaKey || e.ctrlKey || e.altKey) return;
				const egg = EGGS[(el.value ?? "").trim().toLowerCase()];
				if (egg === undefined || document.getElementById(egg.id) !== null) return;
				if (egg.id === "cp2077-johnny" && reduced()) return;
				const ov = document.createElement("div");
				ov.id = egg.id;
				ov.setAttribute("aria-hidden", "true");
				egg.build(ov);
				(document.body || document.documentElement).appendChild(ov);
				egg.sound();
				setTimeout(() => ov.remove(), egg.hold);
			};
			document.addEventListener("keydown", handler, true);
			return () => document.removeEventListener("keydown", handler, true);
		}

		// ── tab takeover: glitched favicon + terminal title ───────────────
		const TITLE_BASE = "DSH // NC-TERMINAL";
		function paintTitle() {
			document.title = (workingNow ? "▶ NC-JOB // " : "") + TITLE_BASE;
		}
		function applyTabIdentity() {
			try {
				const svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>"
					+ "<rect width='32' height='32' fill='#05070d'/>"
					+ "<polygon points='6,3 26,3 29,6 29,26 26,29 3,29 3,6' fill='#ff3355'/>"
					+ "<polygon points='10,8 22,8 24,10 24,22 22,24 8,24 8,10' fill='#05070d'/>"
					+ "<rect x='12' y='12' width='8' height='8' fill='#00f0ff'/></svg>";
				const href = "data:image/svg+xml," + encodeURIComponent(svg);
				let link = document.querySelector("link[rel*='icon']");
				if (link === null) {
					link = document.createElement("link");
					link.rel = "icon";
					(document.head || document.documentElement).appendChild(link);
				}
				link.href = href;
			} catch {}
			const glitchChars = "▓▒░#%@&$";
			paintTitle();
			const timer = setInterval(() => {
				if (document.hidden) return;
				const b = workingNow ? "▶ NC-JOB // " + TITLE_BASE : TITLE_BASE;
				const i = Math.floor(Math.random() * b.length);
				document.title = b.slice(0, i) + glitchChars[Math.floor(Math.random() * glitchChars.length)] + b.slice(i + 1);
				setTimeout(paintTitle, 160);
			}, 9000);
			return () => clearInterval(timer);
		}

		// ── boot glitch transition (once per tab SESSION: the first load of a
		// tab plays it; reloads/reconnects within that session skip the replay,
		// a fresh tab or a new day sees it again) ─────────────────────────
		const BOOT_SEEN_KEY = "cp2077-boot-seen";
		function playBootTransition() {
			if (!cfg.boot) return null;
			if (document.getElementById("cp2077-boot") !== null) return null;
			if (typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches) return null;
			try {
				if (sessionStorage.getItem(BOOT_SEEN_KEY) === "1") return null;
				sessionStorage.setItem(BOOT_SEEN_KEY, "1");
			} catch {}
			const ov = document.createElement("div");
			ov.id = "cp2077-boot";
			ov.setAttribute("aria-hidden", "true");
			const mk = (cls, text) => {
				const d = document.createElement("div");
				d.className = cls;
				if (text !== undefined) d.textContent = text;
				return d;
			};
			ov.append(
				mk("cp-line"),
				mk("cp-crt"),
				mk("cp-bars"),
				mk("cp-title", "CYBERPUNK 2077"),
				(() => {
					const wrap = mk("cp-loadwrap");
					const lbl = document.createElement("div");
					lbl.className = "cp-load-label";
					lbl.textContent = "INFECTING";
					const track = document.createElement("div");
					track.className = "cp-load-track";
					const fill = document.createElement("div");
					fill.className = "cp-load-fill";
					track.appendChild(fill);
					wrap.append(lbl, track);
					return wrap;
				})(),
				mk("cp-flash")
			);
			(document.body || document.documentElement).appendChild(ov);
			setTimeout(() => ov.remove(), 2300);
			return ov;
		}

		// ── the identity layer (CSS) ──────────────────────────────────────
		function injectCyberpunkStyles() {
			if (document.querySelector("style[data-cyberpunk-theme]")) return;
			const tokenLines = Object.entries(TOKENS)
				.map(([name, value]) => "  " + name + ": " + value + " !important;")
				.join("\n");
			const style = document.createElement("style");
			style.dataset.cyberpunkTheme = "dsh-theme-cyberpunk2077";
			style.textContent = [
				// MiSans (Xiaomi) carries the whole UI — CJK-sharded woff2 from jsDelivr;
				// code keeps a local mono stack so no Google Fonts dependency remains.
				"@import url('https://cdn.jsdelivr.net/npm/misans@4.1.0/lib/Normal/MiSans-Regular.min.css');",
				"@import url('https://cdn.jsdelivr.net/npm/misans@4.1.0/lib/Normal/MiSans-Medium.min.css');",
				"@import url('https://cdn.jsdelivr.net/npm/misans@4.1.0/lib/Normal/MiSans-Semibold.min.css');",
				"@import url('https://cdn.jsdelivr.net/npm/misans@4.1.0/lib/Normal/MiSans-Bold.min.css');",
"@font-face { font-family: 'Orbitron'; font-style: normal; font-weight: 600; font-display: swap; src: url(data:font/woff2;base64,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) format('woff2'); }",
				"@font-face { font-family: 'Orbitron'; font-style: normal; font-weight: 400; font-display: swap; src: url(data:font/woff2;base64,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) format('woff2'); }",
				"html { color-scheme: dark !important; }",
				"body {",
				"  background-color: #0a1226 !important;",
				"  background-image: radial-gradient(ellipse at 50% -10%, #16224a 0%, transparent 55%), radial-gradient(ellipse at 50% 110%, #0d1630 0%, transparent 60%), linear-gradient(180deg, #0a1226 0%, #0d1830 100%) !important;",
				"  background-attachment: fixed !important;",
				"  color: #e8f1ff;",
				"  --neon-red: #ff3355;",
				"  --neon-cyan: #00f0ff;",
				"  --dsw-font-family: 'MiSans', 'PingFang SC', 'Microsoft YaHei', -apple-system, 'Segoe UI', sans-serif;",
				"  --ds-font-family-code: 'SF Mono', 'JetBrains Mono', Consolas, 'Liberation Mono', Menlo, 'PingFang SC', 'Microsoft YaHei';",
				tokenLines,
				"}",

								"/* ── 粒子码特效层：绿色电子风，少量缓慢漂浮 + 上下数码流 ── */",
				"#cp2077-particles { position: fixed; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; }",
				"/* 荧光绿粒子光点：缓慢小幅度漂动 */",
				"#cp2077-particles .cp-particles-dot { position: absolute; bottom: -10px; width: 3px; height: 3px; border-radius: 50%; background: #7dffb8; box-shadow: 0 0 6px #7dffb8, 0 0 14px rgba(125,255,184,0.45); opacity: 0; animation: cpRise linear infinite; }",
				"@keyframes cpRise { 0% { transform: translateY(0) translateX(0); opacity: 0; } 12% { opacity: 0.65; } 88% { opacity: 0.5; } 100% { transform: translateY(-60vh) translateX(8px); opacity: 0; } }",
				"/* 数码流竖条：上下双向流动，绿色为主 */",
				"#cp2077-particles .cp-particles-rain { position: absolute; font: 11px 'SF Mono', Consolas, monospace; color: rgba(0,230,150,0.3); text-shadow: 0 0 5px rgba(0,230,150,0.45); writing-mode: vertical-rl; white-space: nowrap; animation: cpRain linear infinite; }",
				"#cp2077-particles .cp-particles-rain.cp-down { top: -100%; animation-name: cpRain; }",
				"#cp2077-particles .cp-particles-rain.cp-up { bottom: -100%; animation-name: cpRainUp; }",
				"@keyframes cpRain { 0% { transform: translateY(0); opacity: 0; } 8% { opacity: 0.9; } 100% { transform: translateY(150vh); opacity: 0; } }",
				"@keyframes cpRainUp { 0% { transform: translateY(0); opacity: 0; } 8% { opacity: 0.9; } 100% { transform: translateY(-150vh); opacity: 0; } }",
				"body.cp-off-scan #cp2077-particles { display: none; }",
// ── CRT: scanlines + city grid + neon haze (toggle: scan) ─────
				"#root::after {",
				"  content: \"\";",
				"  position: fixed; inset: 0; z-index: 9999; pointer-events: none;",
				"  background:",
				"    repeating-linear-gradient(0deg, rgba(0,0,0,0.16) 0 1px, transparent 1px 3px),",
				"    repeating-linear-gradient(90deg, rgba(0,240,255,0.022) 0 1px, transparent 1px 84px),",
				"    repeating-linear-gradient(0deg, rgba(0,240,255,0.018) 0 1px, transparent 1px 84px),",
				"    radial-gradient(1100px 520px at 92% -6%, rgba(255,0,127,0.075), transparent 62%),",
				"    radial-gradient(950px 480px at -6% 106%, rgba(0,240,255,0.065), transparent 62%);",
				"}",
				"body.cp-off-scan #root::after { display: none; }",

				// ── hazard stripe across the top ──────────────────────────────
				"[class*='frame']::before {",
				"  content: \"\";",
				"  position: absolute; top: 0; left: 0; right: 0; height: 3px;",
				"  z-index: 60; pointer-events: none; opacity: 0.55;",
				"  background: repeating-linear-gradient(-45deg, rgba(255,42,77,0.85) 0 7px, transparent 7px 14px);",
				"}",

				// ── chamfered chrome: every button gets the NC 45° cut ────────
				"button {",
				"  clip-path: polygon(7px 0, 100% 0, 100% calc(100% - 7px), calc(100% - 7px) 100%, 0 100%, 0 7px);",
				"  font-family: 'MiSans', 'PingFang SC', 'Microsoft YaHei', -apple-system, 'Segoe UI', sans-serif;",
				"  font-weight: 600; letter-spacing: 0.06em;",
				"  transition: filter 0.15s var(--ds-ease-in-out), color 0.15s var(--ds-ease-in-out), background-color 0.15s var(--ds-ease-in-out);",
				"}",
				"button:hover { color: #ff3355; filter: drop-shadow(0 0 6px rgba(255,42,77,0.45)); }",
				"button:active { transform: translateY(1px); }",
				"button:disabled { filter: none; }",

				// primary actions: solid NC yellow, black text, neon pulse
				"button[class*='primary'], button[class*='newSession'], button[class*='add'] {",
				"  background: rgba(255,51,85,0.07) !important; color: #ff4d6a !important;",
				"  border: 1px solid rgba(255,51,85,0.55) !important;",
				"  text-shadow: 0 0 8px rgba(255,51,85,0.55);",
				"  box-shadow: 0 0 12px rgba(255,51,85,0.18), inset 0 0 8px rgba(255,51,85,0.06);",
				"}",
				"button[class*='primary']:hover, button[class*='newSession']:hover, button[class*='add']:hover {",
				"  background: rgba(255,51,85,0.16) !important; color: #ffe6ea !important;",
				"  border-color: rgba(255,80,110,0.85) !important;",
				"  box-shadow: 0 0 20px rgba(255,51,85,0.42), inset 0 0 12px rgba(255,51,85,0.1);",
				"}",

				// ── composer: transparent-input + mirror architecture ────────
				"body textarea {",
				"  background: transparent !important;",
				"  caret-color: #ffe600 !important;",
				"}",
				"[class*='_card']:has(textarea:focus) {",
				"  box-shadow: 0 0 0 1px rgba(255, 42, 77, 0.35), 0 0 18px rgba(255, 42, 77, 0.12) !important;",
				"}",
				"[class*='_backdrop'] { color: #e8f1ff !important; }",

				// send button: EXECUTE hint on hover
				"[class*='_row'] button[class*='_primary'] { position: relative; }",
				"[class*='_row'] button[class*='_primary']::after {",
				"  content: 'EXECUTE ⏎';",
				"  position: absolute; right: 0; bottom: calc(100% + 8px);",
				"  padding: 2px 8px; white-space: nowrap;",
				"  font: 600 10px 'SF Mono', 'JetBrains Mono', Consolas, 'Liberation Mono', Menlo, 'PingFang SC', 'Microsoft YaHei'; letter-spacing: 0.18em;",
				"  color: #ff3355; background: rgba(6,10,18,0.92); border: 1px solid rgba(255,42,77,0.35);",
				"  clip-path: polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px);",
				"  opacity: 0; transform: translateY(3px); transition: opacity .12s, transform .12s; pointer-events: none; z-index: 30;",
				"}",
				"[class*='_row'] button[class*='_primary']:hover::after { opacity: 1; transform: translateY(0); }",
				// RGB-split glitch, only on the EXECUTE button hover
				"[class*='_row'] button[class*='_primary']:hover {",
				"  text-shadow: -2px 0 rgba(255,0,60,0.9), 2px 0 rgba(0,240,255,0.9);",
				"}",

				// ── agent working: segmented HUD spinner + PROCESSING ────────
				"[class*='_pending'] {",
				"  width: 14px !important; height: 14px !important; border-radius: 50% !important;",
				"  background: conic-gradient(#00f0ff 0 25%, transparent 25% 50%, #ff3355 50% 62%, transparent 62% 87%, #00f0ff 87% 100%) !important;",
				"  animation: cpSpin 1.1s steps(8) infinite !important;",
				"  filter: drop-shadow(0 0 5px rgba(0,240,255,0.6));",
				"}",
				"@keyframes cpSpin { to { transform: rotate(360deg); } }",
				"[class*='_accessory']:has([class*='_pending'])::after {",
				"  content: 'PROCESSING_';",
				"  font: 600 10px 'SF Mono', 'JetBrains Mono', Consolas, 'Liberation Mono', Menlo, 'PingFang SC', 'Microsoft YaHei'; letter-spacing: 0.22em;",
				"  color: #00f0ff; text-shadow: 0 0 8px rgba(0,240,255,0.5);",
				"  animation: cpBlink 1.2s steps(2) infinite;",
				"}",
				"@keyframes cpBlink { 50% { opacity: 0.45; } }",

				// ── combat state: stamina bar while the agent works ───────────
				"body.cp-working [class*='_accessory']:has([class*='_pending'])::before {",
				"  content: \"\"; display: block; margin: 3px 0 2px; width: 108px; height: 2px;",
				"  background-image: linear-gradient(90deg, transparent, #00f0ff 30%, #ff3355 50%, #00f0ff 70%, transparent);",
				"  background-size: 200% 100%;",
				"  animation: cpStamina 1.6s linear infinite;",
				"}",
				"@keyframes cpStamina { 0% { background-position: 100% 0; } 100% { background-position: -100% 0; } }",

				// ── sessions as shards: rarity cycling + legendary active ────
				"[class*='_sessionRow'] {",
				"  position: relative; border-radius: 2px !important;",
				"  border-left: 2px solid rgba(159,178,214,0.25);",
				"  transition: border-color .15s, filter .15s;",
				"}",
				"[class*='_sessionRow']:nth-child(5n+2) { border-left-color: rgba(61,255,190,0.4); }",
				"[class*='_sessionRow']:nth-child(5n+3) { border-left-color: rgba(0,240,255,0.4); }",
				"[class*='_sessionRow']:nth-child(5n+4) { border-left-color: rgba(190,80,255,0.4); }",
				"[class*='_sessionRow']:nth-child(5n+5) { border-left-color: rgba(255,140,0,0.45); }",
				"[class*='_sessionRow']:hover { filter: drop-shadow(0 0 4px rgba(0,240,255,0.25)); }",
				"[class*='_sessionRow'][class*='_selected'] {",
				"  border-left: 2px solid #ffb300 !important;",
				"  background: linear-gradient(90deg, rgba(255,42,77,0.10), rgba(255,42,77,0.02)) !important;",
				"  box-shadow: inset 0 0 12px rgba(255,42,77,0.06), 0 0 10px rgba(255,42,77,0.18);",
				"  filter: drop-shadow(0 0 6px rgba(255,179,0,0.35));",
				"}",

				// ── Kiroshi optics: hover = target lock (sweep + brackets) ───
				"[class*='_sessionRow']::before {",
				"  content: \"\"; position: absolute; left: 0; right: 0; top: 0; height: 1px; z-index: 6;",
				"  pointer-events: none; opacity: 0;",
				"  background: linear-gradient(90deg, transparent, rgba(0,240,255,0.85), transparent);",
				"}",
				"[class*='_sessionRow']:hover::before { animation: cpKiroshi 1.5s linear infinite; }",
				"@keyframes cpKiroshi { 0% { top: 0; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; opacity: 0; } }",
				"[class*='_sessionRow']:not([class*='_selected']):hover {",
				"  background-image:",
				"    linear-gradient(rgba(0,240,255,0.75), rgba(0,240,255,0.75)), linear-gradient(rgba(0,240,255,0.75), rgba(0,240,255,0.75)),",
				"    linear-gradient(rgba(0,240,255,0.75), rgba(0,240,255,0.75)), linear-gradient(rgba(0,240,255,0.75), rgba(0,240,255,0.75)),",
				"    linear-gradient(rgba(0,240,255,0.75), rgba(0,240,255,0.75)), linear-gradient(rgba(0,240,255,0.75), rgba(0,240,255,0.75)),",
				"    linear-gradient(rgba(0,240,255,0.75), rgba(0,240,255,0.75)), linear-gradient(rgba(0,240,255,0.75), rgba(0,240,255,0.75)) !important;",
				"  background-repeat: no-repeat;",
				"  background-size: 12px 2px, 2px 12px, 12px 2px, 2px 12px, 12px 2px, 2px 12px, 12px 2px, 2px 12px;",
				"  background-position: 0 0, 0 0, 100% 0, 100% 0, 0 100%, 0 100%, 100% 100%, 100% 100%;",
				"}",

				// ── goal bar → mission tracker ────────────────────────────────
				"[class*='_dock'] {",
				"  border-left: 2px solid rgba(255,42,77,0.5) !important;",
				"  background: linear-gradient(90deg, rgba(255,42,77,0.05), transparent 65%) !important;",
				"}",
				"[class*='_dock'] [class*='_label'] {",
				"  font-family: 'MiSans', 'PingFang SC', 'Microsoft YaHei', -apple-system, 'Segoe UI', sans-serif !important;",
				"  letter-spacing: 0.03em; color: #ff3355 !important;",
				"}",
				"[class*='_dock'] [class*='_label']::before { content: '◈ '; color: #ffb300; }",

				// ── stats strip → HUD readout ────────────────────────────────
				"[class*='_strip'] {",
				"  font-family: 'SF Mono', 'JetBrains Mono', Consolas, 'Liberation Mono', Menlo, 'PingFang SC', 'Microsoft YaHei' !important;",
				"  letter-spacing: 0.08em; color: #8fa3c8 !important;",
				"}",
				"[class*='_strip']::before { content: '⟨ '; color: rgba(255,42,77,0.5); }",
				"[class*='_strip']::after { content: ' ⟩'; color: rgba(255,42,77,0.5); }",

				// ── notices / toasts → CP notification chrome ────────────────
				"[class*='_notice'], [class*='_toast'] {",
				"  position: relative;",
				"  border: 1px solid rgba(255,42,77,0.35) !important; border-left: 3px solid #ff3355 !important;",
				"  background: linear-gradient(90deg, rgba(255,42,77,0.08), rgba(13,19,34,0.95)) !important;",
				"  clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);",
				"  animation: cpToastIn .28s cubic-bezier(0.2, 0.9, 0.3, 1.2);",
				"}",
				"@keyframes cpToastIn {",
				"  0% { opacity: 0; transform: translateX(-14px); filter: drop-shadow(0 0 0 rgba(255,42,77,0)); }",
				"  35% { opacity: 1; filter: drop-shadow(0 0 10px rgba(255,42,77,0.5)); }",
				"  100% { opacity: 1; transform: translateX(0); }",
				"}",
				"[class*='_noticeError'] {",
				"  border-color: rgba(255,0,60,0.5) !important; border-left: 3px solid #ff003c !important;",
				"  background: linear-gradient(90deg, rgba(255,0,60,0.10), rgba(13,19,34,0.95)) !important;",
				"}",
				// hazard tape across the top of every error notice
				"[class*='_noticeError']::after {",
				"  content: \"\"; position: absolute; top: 0; left: 0; right: 0; height: 3px; pointer-events: none;",
				"  background: repeating-linear-gradient(-45deg, rgba(255,0,60,0.85) 0 6px, transparent 6px 12px);",
				"}",
				"[class*='_turnErrorTitle'] { color: #ff3b69 !important; font-family: 'MiSans', 'PingFang SC', 'Microsoft YaHei', -apple-system, 'Segoe UI', sans-serif !important; letter-spacing: 0.08em; }",

				// ── empty-state flavor line ──────────────────────────────────
				"[class*='_composerHero']::after {",
				"  content: '— NIGHT CITY LOCAL // 2077 —';",
				"  display: block; margin-top: 10px;",
				"  font: 400 11px 'SF Mono', 'JetBrains Mono', Consolas, 'Liberation Mono', Menlo, 'PingFang SC', 'Microsoft YaHei'; letter-spacing: 0.3em;",
				"  color: rgba(0,240,255,0.55);",
				"}",

				// ── glitching logo ────────────────────────────────────────────
				"@keyframes cpLogoGlitch {",
				"  0%, 86%, 100% { text-shadow: none; transform: none; }",
				"  88% { text-shadow: -2px 0 #ff003c, 2px 0 #00f0ff; transform: translateX(1px); }",
				"  90% { text-shadow: 2px 0 #ff003c, -2px 0 #00f0ff; transform: translateX(-1px); }",
				"  92% { text-shadow: none; transform: none; }",
				"  94% { text-shadow: -1px 0 #ff003c, 1px 0 #00f0ff; }",
				"  96% { text-shadow: none; }",
				"}",
				"[class*='logoRow'] {",
				"  font-family: 'Orbitron', 'MiSans', 'PingFang SC', 'Microsoft YaHei', -apple-system, 'Segoe UI', sans-serif;",
				"  color: #ff3355 !important;",
				"  letter-spacing: 0.12em;",
				"  text-shadow: 0 0 6px rgba(255,42,77,0.9), 0 0 18px rgba(255,42,77,0.6), -1px 0 rgba(0,240,255,0.5), 1px 0 rgba(255,42,77,0.7);",
				"  font-weight: 800;",
				"  animation: cpLogoGlitch 5.5s infinite steps(1);",
				"}",
				"@font-face { font-family: 'Ryzes'; font-style: normal; font-weight: 400; font-display: swap; src: url(data:font/ttf;base64,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ARQrsAZDLrAwKy2wRSywABawBCWwBCYgICBGI0dhsAwjQi5HI0cjYbALQysjIDwgLiM4sTABFCstsEYssQoEJUKwABawBCWwBCUgLkcjRyNhILAGI0KxDABCsAtDKyCwYFBYILBAUVizBCAFIBuzBCYFGllCQiMgR7AGQ7ACYiCwAFBYsEBgWWawAWNgILABKyCKimEgsARDYGQjsAVDYWRQWLAEQ2EbsAVDYFmwAyWwAmIgsABQWLBAYFlmsAFjYbACJUZhOCMgPCM4GyEgIEYjR7ABKyNhOCFZsTABFCstsEcssQA6Ky6xMAEUKy2wSCyxADsrISMgIDywBiNCIzixMAEUK7AGQy6wMCstsEkssAAVIEewACNCsgABARUUEy6wNiotsEossAAVIEewACNCsgABARUUEy6wNiotsEsssQABFBOwNyotsEwssDkqLbBNLLAAFkUjIC4gRoojYTixMAEUKy2wTiywCiNCsE0rLbBPLLIAAEYrLbBQLLIAAUYrLbBRLLIBAEYrLbBSLLIBAUYrLbBTLLIAAEcrLbBULLIAAUcrLbBVLLIBAEcrLbBWLLIBAUcrLbBXLLMAAABDKy2wWCyzAAEAQystsFksswEAAEMrLbBaLLMBAQBDKy2wWyyzAAABQystsFwsswABAUMrLbBdLLMBAAFDKy2wXiyzAQEBQystsF8ssgAARSstsGAssgABRSstsGEssgEARSstsGIssgEBRSstsGMssgAASCstsGQssgABSCstsGUssgEASCstsGYssgEBSCstsGcsswAAAEQrLbBoLLMAAQBEKy2waSyzAQAARCstsGosswEBAEQrLbBrLLMAAAFEKy2wbCyzAAEBRCstsG0sswEAAUQrLbBuLLMBAQFEKy2wbyyxADwrLrEwARQrLbBwLLEAPCuwQCstsHEssQA8K7BBKy2wciywABaxADwrsEIrLbBzLLEBPCuwQCstsHQssQE8K7BBKy2wdSywABaxATwrsEIrLbB2LLEAPSsusTABFCstsHcssQA9K7BAKy2weCyxAD0rsEErLbB5LLEAPSuwQistsHossQE9K7BAKy2weyyxAT0rsEErLbB8LLEBPSuwQistsH0ssQA+Ky6xMAEUKy2wfiyxAD4rsEArLbB/LLEAPiuwQSstsIAssQA+K7BCKy2wgSyxAT4rsEArLbCC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) format('truetype'); }",
				"@font-face { font-family: 'Cyberpunk'; font-style: normal; font-weight: 400; font-display: swap; src: url(data:font/ttf;base64,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) format('truetype'); }",
				// 隐藏原生 logoRow 的所有子元素（svg/图标/原文字），由 JS 注入 CYBERPUNK 艺术字
				"[class*='logoRow'] > :not(#cp-logo-text) { display: none !important; }",
				"#cp-logo-text {",
				"  display: inline-block !important;",
				"  font-family: 'Cyberpunk', 'Ryzes', 'Orbitron', 'MiSans', sans-serif;",
				"  font-weight: 400;",
				"  font-size: 26px;",
				"  letter-spacing: 0.04em;",
				"  color: #ff3355;",
				"  text-shadow: 0 0 8px rgba(255,51,85,0.95), 0 0 22px rgba(255,51,85,0.55), -1px 0 rgba(0,240,255,0.6), 1px 0 rgba(255,51,85,0.8);",
				"  animation: cpLogoGlitch 5.5s infinite steps(1);",
				"}",

				// headings
				"h1, h2, h3, h4 {",
				"  font-family: 'MiSans', 'PingFang SC', 'Microsoft YaHei', -apple-system, 'Segoe UI', sans-serif;",
				"  letter-spacing: 0.03em;",
				"}",
				"h1, h2 { text-shadow: 0 0 12px rgba(0, 240, 255, 0.3), 0 0 30px rgba(255, 42, 77, 0.15); }",

				// sidebar chrome
				"[class*='sidebarCol'] { box-shadow: inset -1px 0 0 rgba(0, 240, 255, 0.10); }",
				"[class*='sidebarCol'] [class*='footArea'] { border-top: 1px solid rgba(255, 42, 77, 0.25); }",
				"[class*='sidebarCol'] [class*='railFish'], [class*='sidebarCol'] svg { color: #ff3355; }",

				// details panel — HUD corner brackets
				"[class*='detailsCol'] { position: relative; }",
				"[class*='detailsCol']::after {",
				"  content: \"\"; position: absolute; top: 10px; right: 10px;",
				"  width: 16px; height: 16px; pointer-events: none;",
				"  border-top: 2px solid rgba(255, 42, 77, 0.6);",
				"  border-right: 2px solid rgba(255, 42, 77, 0.6);",
				"}",
				"[class*='detailsCol']::before {",
				"  content: \"\"; position: absolute; bottom: 10px; left: 10px;",
				"  width: 16px; height: 16px; pointer-events: none;",
				"  border-bottom: 2px solid rgba(0, 240, 255, 0.45);",
				"  border-left: 2px solid rgba(0, 240, 255, 0.45);",
				"}",

				// markdown
				"pre {",
				"  clip-path: polygon(9px 0, 100% 0, 100% calc(100% - 9px), calc(100% - 9px) 100%, 0 100%, 0 9px);",
				"  border-left: 2px solid rgba(0, 240, 255, 0.5);",
				"  background: #060a12 !important;",
				"  font-family: 'SF Mono', 'JetBrains Mono', Consolas, 'Liberation Mono', Menlo, 'PingFang SC', 'Microsoft YaHei' !important;",
				"}",
				"code { font-family: 'SF Mono', 'JetBrains Mono', Consolas, 'Liberation Mono', Menlo, 'PingFang SC', 'Microsoft YaHei'; color: #ff5c78; }",
				":not(pre) > code { background: rgba(255, 42, 77, 0.08); padding: 1px 5px; }",
				"blockquote { border-left: 2px solid rgba(255, 42, 77, 0.45); }",

				// selection / focus / forms
				"::selection { background: rgba(255, 42, 77, 0.30); color: #ffffff; }",
				":focus-visible { outline: 1px solid #00f0ff; outline-offset: 1px; box-shadow: 0 0 0 3px rgba(0, 240, 255, 0.22); }",
				"input[type='checkbox'], input[type='radio'] { accent-color: #ff3355; }",
				"a { color: #00f0ff; }",
				"a:hover { color: #ff3355; }",

				// dialogs — hazard edge for confirmations
				"[role='dialog'], [role='alertdialog'] {",
				"  clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);",
				"  border: 1px solid rgba(255, 42, 77, 0.22);",
				"}",

				// scrollbars
				"*::-webkit-scrollbar { width: 8px; height: 8px; }",
				"*::-webkit-scrollbar-track { background: transparent; }",
				"*::-webkit-scrollbar-thumb { background: rgba(255, 230, 0, 0.28) !important; border-radius: 0; }",
				"*::-webkit-scrollbar-thumb:hover { background: rgba(255, 42, 77, 0.5) !important; }",

				// ── slang status chips: GIG UP / PREEM. / FLATLINE / tips ─────
				"#cp2077-chip { position: fixed; top: 12px; left: 50%; transform: translateX(-50%); z-index: 10052;",
				"  max-width: min(64vw, 560px); padding: 4px 12px; pointer-events: none; text-align: center;",
				"  font: 600 11px 'SF Mono', 'JetBrains Mono', Consolas, 'Liberation Mono', Menlo, 'PingFang SC', 'Microsoft YaHei'; letter-spacing: 0.16em;",
				"  background: rgba(6,10,18,0.92);",
				"  clip-path: polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px);",
				"  animation: cpChipIn .22s cubic-bezier(0.2, 0.9, 0.3, 1.2); }",
				"#cp2077-chip.info { color: #00f0ff; box-shadow: inset 0 0 0 1px rgba(0,240,255,0.45), 0 0 12px rgba(0,240,255,0.18); }",
				"#cp2077-chip.ok { color: #00f5a0; box-shadow: inset 0 0 0 1px rgba(0,245,160,0.45), 0 0 12px rgba(0,245,160,0.18); }",
				"#cp2077-chip.err { color: #ff3b69; box-shadow: inset 0 0 0 1px rgba(255,0,60,0.5), 0 0 12px rgba(255,0,60,0.2); }",
				"@keyframes cpChipIn { 0% { opacity: 0; transform: translate(-50%, -6px); } 100% { opacity: 1; transform: translate(-50%, 0); } }",

				// ── Night City HUD footer (docked into the settings bar) ──────
				"#cp2077-hud { position: fixed; z-index: 10048; pointer-events: none; user-select: none;",
				"  display: flex; align-items: center; gap: 10px; white-space: nowrap;",
				"  transform: translateX(-100%);",
				"  font: 600 10px 'SF Mono', 'JetBrains Mono', Consolas, 'Liberation Mono', Menlo, 'PingFang SC', 'Microsoft YaHei'; }",
				"#cp2077-hud #cp2077-clock { color: rgba(0,240,255,0.6); letter-spacing: 0.2em; text-shadow: 0 0 8px rgba(0,240,255,0.35); }",
				"#cp2077-hud #cp2077-hex { color: rgba(0,240,255,0.3); letter-spacing: 0.18em; }",
				"body.cp-off-scan #cp2077-hud #cp2077-hex { display: none; }",

				// ── easter egg: JOHNNY SILVERHAND seizes the screen ──────────
				"#cp2077-johnny { position: fixed; inset: 0; z-index: 2147483644; pointer-events: none;",
				"  animation: cpJohnnyOut 2.6s forwards; }",
				"#cp2077-johnny .cp2077-johnny-tint { position: absolute; inset: 0; backdrop-filter: saturate(0.35) contrast(1.18);",
				"  background: linear-gradient(90deg, rgba(255,0,60,0.16), transparent 30%, transparent 70%, rgba(0,240,255,0.16)); }",
				"#cp2077-johnny .cp2077-johnny-tear { position: absolute; inset: -10%; mix-blend-mode: screen;",
				"  background: repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0 2px, transparent 2px 18px, rgba(255,0,60,0.06) 18px 20px, transparent 20px 44px);",
				"  animation: cpJohnnyTear 0.4s steps(4) infinite; }",
				"@keyframes cpJohnnyTear { 0% { transform: translateX(-8px); } 50% { transform: translateX(8px); } 100% { transform: translateX(-8px); } }",
				"#cp2077-johnny .cp2077-johnny-box { position: absolute; inset: 0; display: grid; place-content: center; gap: 8px; text-align: center; }",
				"#cp2077-johnny .cp2077-johnny-quote { font: 700 clamp(26px, 4.4vw, 54px) 'MiSans', 'PingFang SC', 'Microsoft YaHei', -apple-system, 'Segoe UI', sans-serif;",
				"  letter-spacing: 0.12em; color: #e8f1ff; text-shadow: -3px 0 rgba(255,0,60,0.8), 3px 0 rgba(0,240,255,0.8);",
				"  animation: cpJohnnyQuote 2.6s steps(1) forwards; }",
				"#cp2077-johnny .cp2077-johnny-cn { font: 400 clamp(11px, 1.4vw, 15px) 'MiSans', 'PingFang SC', 'Microsoft YaHei', -apple-system, 'Segoe UI', sans-serif;",
				"  letter-spacing: 0.3em; color: rgba(159,178,214,0.85); }",
				"#cp2077-johnny .cp2077-johnny-attr { font: 600 10px 'SF Mono', 'JetBrains Mono', Consolas, 'Liberation Mono', Menlo, 'PingFang SC', 'Microsoft YaHei';",
				"  letter-spacing: 0.26em; color: rgba(255,59,105,0.8); margin-top: 6px; }",
				"@keyframes cpJohnnyQuote {",
				"  0% { opacity: 0; } 6% { opacity: 1; transform: translateX(-5px) skewX(-2deg); }",
				"  10% { transform: translateX(5px) skewX(2deg); } 14% { transform: none; }",
				"  40% { transform: none; } 46% { transform: translateX(3px); } 50% { transform: none; }",
				"  84% { opacity: 1; } 100% { opacity: 0; } }",
				"@keyframes cpJohnnyOut { 0% { opacity: 0; } 6% { opacity: 1; } 86% { opacity: 1; } 100% { opacity: 0; visibility: hidden; } }",

				// ── DECK panel + SND chip chrome ─────────────────────────────
				"#cp2077-snd-toggle, #cp2077-deck-toggle { position: fixed; right: 14px; z-index: 10050; padding: 4px 10px;",
				"  font: 600 11px 'SF Mono', 'JetBrains Mono', Consolas, 'Liberation Mono', Menlo, 'PingFang SC', 'Microsoft YaHei'; letter-spacing: 0.14em; color: #ff3355;",
				"  background: rgba(6, 10, 18, 0.85); border: 1px solid rgba(255, 42, 77, 0.35); cursor: pointer; opacity: 0.55;",
				"  clip-path: polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px); }",
				"#cp2077-snd-toggle:hover, #cp2077-deck-toggle:hover { opacity: 1; filter: drop-shadow(0 0 6px rgba(255, 42, 77, 0.45)); }",
				"#cp2077-snd-toggle { bottom: 14px; }",
				"#cp2077-deck-toggle { bottom: 44px; color: #00f0ff; border-color: rgba(0, 240, 255, 0.35); }",
				"#cp2077-deck-toggle.cp2077-open { opacity: 1; }",
				"#cp2077-deck { position: fixed; right: 14px; bottom: 76px; z-index: 10049; width: 176px; padding: 10px;",
				"  background: rgba(6, 10, 18, 0.94); border: 1px solid rgba(0, 240, 255, 0.3);",
				"  clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);",
				"  display: none; flex-direction: column; gap: 4px;",
				"  box-shadow: 0 0 18px rgba(0, 240, 255, 0.12); }",
				"#cp2077-deck.cp2077-open { display: flex; }",
				"#cp2077-deck .cp2077-deck-title { font: 700 11px 'MiSans', 'PingFang SC', 'Microsoft YaHei', -apple-system, 'Segoe UI', sans-serif; letter-spacing: 0.3em;",
				"  color: #00f0ff; margin-bottom: 6px; padding-bottom: 5px;",
				"  background: repeating-linear-gradient(-45deg, rgba(0,240,255,0.4) 0 5px, transparent 5px 10px) bottom / 100% 3px no-repeat; }",
				"#cp2077-deck button { width: 100%; text-align: left; padding: 5px 8px; font: 600 11px 'MiSans', 'PingFang SC', 'Microsoft YaHei', -apple-system, 'Segoe UI', sans-serif;",
				"  letter-spacing: 0.1em; color: #9fb2d6; background: transparent; border: none; cursor: pointer;",
				"  clip-path: polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px); }",
				"#cp2077-deck button:hover { color: #e8f1ff; background: rgba(0, 240, 255, 0.08); filter: none; }",
				"#cp2077-deck button.cp2077-on { color: #ff3355; }",

				// ── relic interference flicker (ambient, toggle: relic) ──────
				"#cp2077-relic { position: fixed; inset: 0; z-index: 2147483640; pointer-events: none;",
				"  background: linear-gradient(0deg, rgba(255,0,60,0.05), transparent 30%, transparent 70%, rgba(0,240,255,0.05)),",
				"    repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0 2px, transparent 2px 9px);",
				"  mix-blend-mode: screen; animation: cpRelic .22s steps(3); }",
				"@keyframes cpRelic {",
				"  0% { transform: translateX(-3px) skewX(-0.4deg); filter: hue-rotate(25deg); }",
				"  50% { transform: translateX(3px) skewX(0.4deg); filter: hue-rotate(-30deg) saturate(1.6); }",
				"  100% { transform: none; filter: none; } }",
				"body.cp-off-relic #cp2077-relic { display: none; }",
				"@media (prefers-reduced-motion: reduce) { #cp2077-relic { display: none; } }",

				// ── easter egg: WAKE UP SAMURAI ─────────────────────────────
				"#cp2077-wake { position: fixed; inset: 0; z-index: 2147483645; background: #05070d;",
				"  pointer-events: none; display: grid; place-content: center; gap: 8px;",
				"  animation: cpWakeIn 2s forwards; }",
				"#cp2077-wake .cp2077-wake-line1 { font: 700 clamp(30px, 5vw, 64px) 'MiSans', 'PingFang SC', 'Microsoft YaHei', -apple-system, 'Segoe UI', sans-serif;",
				"  letter-spacing: 0.14em; color: #ff3355; text-shadow: -3px 0 #ff003c, 3px 0 #00f0ff; }",
				"#cp2077-wake .cp2077-wake-line2 { font: 400 clamp(12px, 1.6vw, 18px) 'SF Mono', 'JetBrains Mono', Consolas, 'Liberation Mono', Menlo, 'PingFang SC', 'Microsoft YaHei';",
				"  letter-spacing: 0.3em; color: #00f0ff; }",
				"@keyframes cpWakeIn {",
				"  0% { opacity: 0; transform: scaleY(0.02); }",
				"  8% { opacity: 1; transform: scaleY(1); }",
				"  12% { transform: translateX(-6px) skewX(-2deg); }",
				"  14% { transform: translateX(6px) skewX(2deg); }",
				"  16% { transform: none; }",
				"  30% { opacity: 1; } 88% { opacity: 1; }",
				"  100% { opacity: 0; visibility: hidden; } }",

				// ── boot transition ──────────────────────────────────────────
				"#cp2077-boot { position: fixed; inset: 0; z-index: 2147483646; background: #05070d;",
				"  pointer-events: none; animation: cpBootFade 2s forwards; }",
				"#cp2077-boot .cp-line { position: absolute; top: 50%; left: 0; right: 0; height: 2px; transform: translateY(-50%);",
				"  background: linear-gradient(90deg, transparent, #00f0ff 18%, #fff 50%, #00f0ff 82%, transparent);",
				"  box-shadow: 0 0 26px 3px rgba(0, 240, 255, 0.75); animation: cpBootLine 0.7s cubic-bezier(0.2, 0.75, 0.3, 1) forwards; }",
				"#cp2077-boot .cp-crt { position: absolute; inset: 0;",
				"  background: radial-gradient(58% 78% at 50% 50%, rgba(0, 240, 255, 0.14), transparent 72%);",
				"  clip-path: inset(49.9% 0 49.9% 0); animation: cpBootCrt 0.8s cubic-bezier(0.2, 0.8, 0.25, 1) forwards; }",
				"#cp2077-boot .cp-bars { position: absolute; inset: -15%; mix-blend-mode: screen; animation: cpBootBars 1s steps(7) forwards;",
				"  background: repeating-linear-gradient(0deg, rgba(0, 240, 255, 0.10) 0 2px, transparent 2px 26px, rgba(255, 0, 60, 0.09) 26px 27px, transparent 27px 53px); }",
				"#cp2077-boot .cp-title { position: absolute; left: 50%; top: 42%; transform: translate(-50%, -50%); white-space: nowrap;",
				"  font-family: 'Cyberpunk', 'Ryzes', 'MiSans', sans-serif; font-size: 8vw; font-weight: 400;",
				"  letter-spacing: 0.01em; color: #ff3355;",
				"  text-shadow: 0 0 12px rgba(255,51,85,0.7), 0 0 30px rgba(255,51,85,0.4), -2px 0 #00f0ff, 2px 0 #ff003c;",
				"  animation: cpBootTitle 2s steps(1) forwards; }",
				"#cp2077-boot .cp-loadwrap { position: absolute; left: 50%; top: 58%; transform: translateX(-50%); width: 60vw; display: flex; flex-direction: column; align-items: center; gap: 10px; }",
				"#cp2077-boot .cp-load-label { font-family: 'Cyberpunk', 'Ryzes', 'MiSans', sans-serif; font-size: 3.2vw; font-weight: 400; letter-spacing: 0.28em; color: #00f0ff; text-shadow: 0 0 10px rgba(0,240,255,0.6); }",
				"#cp2077-boot .cp-load-track { width: 100%; height: 7px; background: rgba(255,51,85,0.12); border: 1px solid rgba(255,51,85,0.45); overflow: hidden; }",
				"#cp2077-boot .cp-load-fill { height: 100%; width: 0%; background: linear-gradient(90deg, #ff3355, #00f0ff); box-shadow: 0 0 12px rgba(255,51,85,0.7); animation: cpLoad 2s ease-out forwards; }",
				"@keyframes cpLoad { 0% { width: 0%; } 100% { width: 100%; } }",
				"#cp2077-boot .cp-flash { position: absolute; inset: 0; background: #fff; opacity: 0; mix-blend-mode: screen; animation: cpBootFlash 2s forwards; }",
				"@keyframes cpBootFade { 0% { opacity: 0; } 3% { opacity: 1; } 80% { opacity: 1; } 100% { opacity: 0; visibility: hidden; } }",
				"@keyframes cpBootLine { 0% { transform: translateY(-50%) scaleX(0.02); opacity: 1; } 45% { transform: translateY(-50%) scaleX(1); opacity: 1; } 100% { transform: translateY(-50%) scaleX(1); opacity: 0; } }",
				"@keyframes cpBootCrt { 0% { clip-path: inset(49.9% 0 49.9% 0); opacity: 1; } 70% { opacity: 0.8; } 100% { clip-path: inset(0 0 0 0); opacity: 0; } }",
				"@keyframes cpBootBars { 0% { transform: translateY(-5%); opacity: 1; } 70% { opacity: 0.7; } 100% { transform: translateY(5%); opacity: 0; } }",
				"@keyframes cpBootTitle { 0% { opacity: 0; } 10% { opacity: 1; transform: translate(-50%, -50%) skewX(0); }",
				"  14% { opacity: 1; transform: translate(-49%, -50%) skewX(-6deg); text-shadow: -3px 0 #ff003c, 3px 0 #00f0ff; }",
				"  18% { transform: translate(-51%, -50%) skewX(4deg); text-shadow: 3px 0 #ff003c, -3px 0 #00f0ff; }",
				"  22% { transform: translate(-50%, -50%) skewX(0); text-shadow: 0 0 18px rgba(255, 42, 77, 0.45); }",
				"  55% { opacity: 1; } 88% { opacity: 1; } 100% { opacity: 0; letter-spacing: 0.34em; } }",
				"@keyframes cpBootSub { 0% { opacity: 0; letter-spacing: 0.1em; } 25% { opacity: 1; } 90% { opacity: 1; } 100% { opacity: 0; letter-spacing: 0.4em; } }",
				"@keyframes cpBootFlash { 0%, 68% { opacity: 0; } 73% { opacity: 0.85; } 77% { opacity: 0.1; } 80% { opacity: 0.5; } 84%, 100% { opacity: 0; } }",
				"@media (prefers-reduced-motion: reduce) { #cp2077-boot { display: none; } }",

				// ── perf guards: small screens go lean, reduced motion goes still ──
				"@media (max-width: 768px) {",
				"  #root::after, #cp2077-hud, #cp2077-chip { display: none; }",
				"  button[class*='primary'], button[class*='newSession'] { animation: none; }",
				"  [class*='_sessionRow']:hover::before { animation: none; }",
				"}",
				"@media (prefers-reduced-motion: reduce) {",
				"  button[class*='primary'], button[class*='newSession'], [class*='logoRow'] { animation: none !important; }",
				"  [class*='_sessionRow']:hover::before { animation: none !important; }",
				"  body.cp-working [class*='_accessory']:has([class*='_pending'])::before { animation: none !important; }",
				"  [class*='_accessory']:has([class*='_pending'])::after { animation: none !important; }",
				"  #cp2077-hud #cp2077-hex, #cp2077-chip { display: none !important; }",
				"}",
							"#cp2077-relicslots { position: fixed; inset: 0; z-index: 2147483643; display: none; align-items: center; justify-content: flex-start; padding-left: 14vw; background: rgba(10,18,38,0.5); backdrop-filter: blur(4px); }",
				"#cp2077-relicslots.cp2077-open { display: flex; }",
				/* 眼睛圆环外框 */
				".cp2077-relicslots-box { position: relative; width: 320px; height: 460px; transform: perspective(1200px) rotateY(-9deg) rotateX(2deg); transform-style: preserve-3d; filter: drop-shadow(0 14px 30px rgba(255,234,0,0.18)) drop-shadow(0 0 60px rgba(255,234,0,0.12)); }",
				/* 瞳孔内环 */
				".cp2077-relicslots-arc { position: absolute; left: 0; top: 0; pointer-events: none; }",
				".cp2077-relicslots-title { position: absolute; top: 6px; left: 50%; transform: translateX(-50%); font: 700 11px 'Orbitron', 'SF Mono', Consolas, monospace; letter-spacing: 0.26em; color: #ffe600; text-shadow: 0 0 8px rgba(255,234,0,0.95), 0 0 22px rgba(255,234,0,0.55); white-space: nowrap; z-index: 3; }",
				/* 槽位沿圆周排布（绝对定位，由 JS 设置 transform） */
				".cp2077-relicslots-list { position: absolute; inset: 0; }",
				".cp2077-relicslots-guide { position: absolute; left: 0; top: 0; height: 1px; transform-origin: 0 0; background: linear-gradient(90deg, rgba(255,234,0,0.6), rgba(255,234,0,0.12), transparent 82%); pointer-events: none; opacity: 0.55; }",
				".cp2077-relicslots-guide::after { content: ''; position: absolute; left: 100%; top: -2px; width: 5px; height: 5px; border-radius: 50%; background: #ffe600; box-shadow: 0 0 8px #ffe600, 0 0 16px rgba(255,234,0,0.5); }",
				".cp2077-relicslots-slot { position: absolute; left: 0; top: 0; width: 150px; display: flex; align-items: center; gap: 8px; padding: 6px 10px; border: 1px solid rgba(255,234,0,0.4); background: rgba(255,234,0,0.07); backdrop-filter: blur(2px); border-radius: 4px; box-shadow: 0 0 10px rgba(255,234,0,0.15); font: 600 11px 'MiSans', 'PingFang SC', 'Microsoft YaHei', -apple-system, 'Segoe UI', sans-serif; color: #fff8d6; cursor: pointer; transition: all .14s; text-shadow: -1px 0 rgba(255,0,60,0.6), 1px 0 rgba(0,240,255,0.6); }",
				".cp2077-relicslots-slot.cp2077-relicslots-active { border-color: #ffe600; background: linear-gradient(90deg, rgba(255,234,0,0.28), rgba(255,234,0,0.08)); color: #fff; box-shadow: 0 0 18px rgba(255,234,0,0.6), 0 0 40px rgba(255,234,0,0.25), inset 0 0 14px rgba(255,234,0,0.16); }",
				".cp2077-relicslots-slot.cp2077-relicslots-active .cp2077-relicslots-num { color: #ffe600; text-shadow: 0 0 8px rgba(255,234,0,0.85); }",
				".cp2077-relicslots-num { font: 700 11px 'SF Mono', 'JetBrains Mono', Consolas, monospace; color: rgba(255,234,0,0.8); min-width: 18px; }",
				".cp2077-relicslots-name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 10px; }",
				".cp2077-relicslots-empty { opacity: 0.3; border-style: dashed; }",
				"#cp2077-terminal { position: fixed; right: 10vw; top: 50%; transform: translateY(-50%); width: 400px; z-index: 2147483644; display: none; font: 13px 'SF Mono', 'JetBrains Mono', Consolas, monospace; }",
				"#cp2077-terminal.cp2077-open { display: block; }",
				".cp2077-terminal-main { position: relative; padding: 12px; background: rgba(16,18,8,0.82); border: 1px solid rgba(255,234,0,0.5); border-radius: 4px; box-shadow: 0 0 24px rgba(255,234,0,0.22), inset 0 0 30px rgba(255,234,0,0.06); backdrop-filter: blur(3px); color: #ffe600; }",
				".cp2077-terminal-title { font-weight: 700; letter-spacing: 0.2em; color: #ffe600; text-shadow: 0 0 6px rgba(255,234,0,0.5); border-bottom: 1px solid rgba(255,234,0,0.3); padding-bottom: 6px; margin-bottom: 8px; }",
				".cp2077-terminal-lines { min-height: 190px; max-height: 300px; overflow: hidden; line-height: 1.5; }",
				".cp2077-terminal-lines div { white-space: nowrap; overflow: hidden; color: rgba(255,234,0,0.72); }",
				".cp2077-terminal-lines .cp-cmd { color: #ffe600; text-shadow: 0 0 4px rgba(255,234,0,0.4); }",
				".cp2077-terminal-sub { position: absolute; right: -14px; bottom: -16px; width: 132px; padding: 6px 8px; background: rgba(16,18,8,0.92); border: 1px solid rgba(255,234,0,0.4); border-radius: 3px; color: rgba(255,234,0,0.9); font-size: 10px; letter-spacing: 0.08em; box-shadow: 0 0 12px rgba(255,234,0,0.2); }",
				"#cp2077-terminal .cp-cursor { display: inline-block; width: 7px; height: 12px; background: #ffe600; animation: cpBlink 1s steps(2) infinite; vertical-align: -2px; margin-left: 2px; }",

				"/* ── 全界面盒子：霓虹红半透明边框 + 电子感锐角 ── */",
				"[class*='_conversation'], [class*='_main'], [class*='_chat'], [class*='_workspace'] {",
				"  border: 1px solid rgba(255,51,85,0.22) !important;",
				"  border-radius: 3px !important;",
				"  box-shadow: 0 0 12px rgba(255,51,85,0.12), inset 0 0 10px rgba(255,51,85,0.05) !important;",
				"}",
				"[class*='_sidebarCol'] {",
				"  border-right: 1px solid rgba(255,51,85,0.38) !important;",
				"  box-shadow: inset -1px 0 0 rgba(255,51,85,0.22) !important;",
				"}",
				"textarea, [class*='_input'], [class*='_composer'] textarea {",
				"  border: none !important;",
				"  box-shadow: none !important;",
				"}",
				"[class*='_bubble'] { border-radius: 3px !important; }",
				"[class*='_panel'], [class*='_detailsCol'] { clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px); }",
				"/* ── 分割线花样：列车式警示纹 / 毛糙纹饰 ── */",
				"[class*='sidebarCol'] [class*='footArea'] {",
				"  border-top: none !important;",
				"  background-image: repeating-linear-gradient(-45deg, rgba(255,51,85,0.65) 0 6px, transparent 6px 12px);",
				"  background-size: 100% 3px; background-repeat: no-repeat; background-position: top;",
				"}",
				"[class*='sidebarCol'] {",
				"  box-shadow: none !important;",
				"  background-image: repeating-linear-gradient(180deg, rgba(255,51,85,0.55) 0 7px, transparent 7px 14px);",
				"  background-size: 2px 100%; background-repeat: no-repeat; background-position: right;",
				"}",
				"[class*='_turn'], [class*='_message'], [class*='_bubble'] {",
				"  border-bottom: 1px dashed rgba(255,51,85,0.35) !important;",
				"}",
				"[class*='_dock'], [class*='_strip'] {",
				"  border-image: repeating-linear-gradient(-45deg, rgba(255,51,85,0.55) 0 5px, transparent 5px 10px) 1 !important;",
				"}",
].join("\n");
			(document.head || document.documentElement).appendChild(style);
		}

		// Browser plugin: register/focus the theme, force dark chroma, wire
		// every subsystem (SFX, watchers, deck, relic, tab identity, boot).
		// ── 粒子码特效：亮黄光点上升 + 青红代码雨 ──
function buildParticles() {
  if (document.getElementById("cp2077-particles") !== null) return;
  const wrap = document.createElement("div");
  wrap.id = "cp2077-particles";
  wrap.setAttribute("aria-hidden", "true");
  const CHARS = "01ABCDEF0123456789<>#$%&アイウエオ";
  // 光点：少量（20个），慢速小幅度漂动
  for (let i = 0; i < 20; i++) {
    const d = document.createElement("span");
    d.className = "cp-particles-dot";
    d.style.left = (Math.random() * 100).toFixed(2) + "vw";
    d.style.animationDuration = (16 + Math.random() * 18).toFixed(2) + "s";
    d.style.animationDelay = (-Math.random() * 30).toFixed(2) + "s";
    const sz = 2 + Math.random() * 2;
    d.style.width = sz + "px";
    d.style.height = sz + "px";
    wrap.appendChild(d);
  }
  // 数码流：上下双向，绿色，少一点（18条）
  for (let i = 0; i < 18; i++) {
    const c = document.createElement("span");
    c.className = "cp-particles-rain";
    if (Math.random() < 0.5) c.classList.add("cp-down");
    else c.classList.add("cp-up");
    const len = 6 + Math.floor(Math.random() * 16);
    let txt = "";
    for (let k = 0; k < len; k++) txt += CHARS[Math.floor(Math.random() * CHARS.length)];
    c.textContent = txt;
    c.style.left = (Math.random() * 100).toFixed(2) + "vw";
    c.style.animationDuration = (14 + Math.random() * 20).toFixed(2) + "s";
    c.style.animationDelay = (-Math.random() * 30).toFixed(2) + "s";
    c.style.opacity = (0.25 + Math.random() * 0.3).toFixed(2);
    wrap.appendChild(c);
  }
  (document.body || document.documentElement).appendChild(wrap);
}

// ── 黑客终端：中右弹出，滚动命令行 ──
const TERM_CMDS = [
  "> nmap -sS 10.0.0.0/24",
  "> ssh root@nightcity.net",
  "> cat /etc/shadow",
  "> hydra -l admin -P wordlist.txt",
  "> decrypt breaching...",
  "> ping 192.168.66.7",
  "> exfiltrate /data/",
  "> grep -r relic /dev/mem",
  "> ./netrunner --deep",
  "> bypass ICE layer 3",
  "> traceroute arasaka.com",
  "> kernel exploit loaded",
  "> inject daemon...",
  "> access granted"
];
function buildTerminal() {
  if (document.getElementById("cp2077-terminal") !== null) return;
  const term = document.createElement("div");
  term.id = "cp2077-terminal";
  term.setAttribute("aria-hidden", "true");
  const main = document.createElement("div");
  main.className = "cp2077-terminal-main";
  const title = document.createElement("div");
  title.className = "cp2077-terminal-title";
  title.textContent = "> INTRUSION // NETRUN";
  main.appendChild(title);
  const lines = document.createElement("div");
  lines.className = "cp2077-terminal-lines";
  main.appendChild(lines);
  const sub = document.createElement("div");
  sub.className = "cp2077-terminal-sub";
  sub.textContent = "UPLINK 0x7F // LIVE";
  main.appendChild(sub);
  term.appendChild(main);
  (document.body || document.documentElement).appendChild(term);
}
let termTimer = null;
function startTermFeed() {
  if (termTimer !== null) return;
  feedTerminal();
  termTimer = setInterval(feedTerminal, 120);
}
function stopTermFeed() {
  if (termTimer !== null) { clearInterval(termTimer); termTimer = null; }
}
function randomCmd() {
  const verbs = ["nmap", "ssh", "ping", "cat", "grep", "hydra", "sudo", "decrypt", "exfiltrate", "traceroute", "inject", "bypass", "wget", "curl", "nc", "scp", "./netrunner"];
  const args = ["10.0.0.1", "nightcity.net", "arasaka.com", "192.168.66.7", "root@ghost", "/etc/shadow", "/dev/mem", "data/", "ICE layer 3", "daemon", "-sS", "-p 443", "--deep", "wordlist.txt", "0x7F", "kernel", "-l admin", "-P"];
  const hex = "0123456789abcdef";
  const v = verbs[Math.floor(Math.random() * verbs.length)];
  let line = "> " + v;
  const n = Math.floor(Math.random() * 5);
  for (let i = 0; i < n; i++) line += " " + args[Math.floor(Math.random() * args.length)];
  if (Math.random() < 0.55) {
    let tail = " 0x";
    const tl = 2 + Math.floor(Math.random() * 28);
    for (let i = 0; i < tl; i++) tail += hex[Math.floor(Math.random() * 16)];
    line += tail;
  }
  return line;
}
function feedTerminal() {
  const term = document.getElementById("cp2077-terminal");
  if (term === null) return;
  const lines = term.querySelector(".cp2077-terminal-lines");
  const div = document.createElement("div");
  div.className = Math.random() < 0.45 ? "cp-cmd" : "";
  div.textContent = randomCmd();
  lines.appendChild(div);
  while (lines.children.length > 16) lines.removeChild(lines.firstChild);
}

		// ── Logo 注入：把 logoRow 替换为 CYBERPUNK 艺术字 ──
function injectCyberpunkLogo() {
  const row = document.querySelector("[class*='logoRow']");
  if (row === null || document.getElementById("cp-logo-text") !== null) return;
  // 清除原生子元素，注入自定义文字
  const span = document.createElement("span");
  span.id = "cp-logo-text";
  span.textContent = "DeepSeek";
  row.appendChild(span);
}
		// ── RELIC VIRUS SLOTS: Tab pops 8 recent-session slots; wheel selects ──
		let relicSlotsEl = null;
		let relicIndex = 0;
		let relicSessions = [];
		
		function readRecentSessions() {
		  const rows = Array.from(document.querySelectorAll("[class*='_sessionRow']"));
		  return rows.slice(-8).reverse().map((row) => ({
		    el: row,
		    title: (row.textContent || "").replace(/\s+/g, " ").trim().slice(0, 60) || "UNTITLED",
		  }));
		}
		
		function buildRelicSlots() {
		  if (document.getElementById("cp2077-relicslots") !== null) return;
		  const ov = document.createElement("div");
		  ov.id = "cp2077-relicslots";
		  ov.setAttribute("role", "dialog");
		  ov.setAttribute("aria-label", "Recent sessions");
		  const box = document.createElement("div");
		  box.className = "cp2077-relicslots-box";
		  const title = document.createElement("div");
		  title.className = "cp2077-relicslots-title";
		  title.textContent = "RELIC // RECENT SESSIONS";
		  box.appendChild(title);
		  const list = document.createElement("div");
		  list.className = "cp2077-relicslots-list";
		  for (let i = 0; i < 8; i++) {
		    const slot = document.createElement("div");
		    slot.className = "cp2077-relicslots-slot";
		    const num = document.createElement("span");
		    num.className = "cp2077-relicslots-num";
		    const name = document.createElement("span");
		    name.className = "cp2077-relicslots-name";
		    slot.append(num, name);
		    slot.addEventListener("click", () => {
		      relicIndex = i;
		      activateRelicSlot();
		    });
		    list.appendChild(slot);
		  }
		  box.appendChild(list);
		  // 引导线：从弧心(0,230)向屏幕中间上下延伸
		  for (const a of [-28, -10, 10, 28]) {
		    const g = document.createElement("div");
		    g.className = "cp2077-relicslots-guide";
		    g.style.transform = "translate(200px, 230px) rotate(" + a + "deg)";
		    g.style.width = "520px";
		    box.appendChild(g);
		  }
		  // 120° 圆弧（SVG，无半径线）
		  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		  svg.setAttribute("class", "cp2077-relicslots-arc");
		  svg.setAttribute("width", "320");
		  svg.setAttribute("height", "460");
		  svg.setAttribute("viewBox", "0 0 320 460");
		  const circ = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		  circ.setAttribute("cx", "200");
		  circ.setAttribute("cy", "230");
		  circ.setAttribute("r", "200");
		  circ.setAttribute("fill", "none");
		  circ.setAttribute("stroke", "#ffe600");
		  circ.setAttribute("stroke-width", "2");
		  circ.setAttribute("stroke-dasharray", "419 838");
		  circ.setAttribute("transform", "rotate(120 200 230)");
		  circ.style.filter = "drop-shadow(-1.5px 0 0 rgba(255,0,60,0.55)) drop-shadow(1.5px 0 0 rgba(0,240,255,0.55)) drop-shadow(0 0 5px rgba(255,234,0,0.6))";
		  svg.appendChild(circ);
		  box.appendChild(svg);
		  ov.appendChild(box);
		  (document.body || document.documentElement).appendChild(ov);
		  relicSlotsEl = ov;
		}
		
		function paintRelicSlots() {
		  if (relicSlotsEl === null) return;
		  const slots = relicSlotsEl.querySelectorAll(".cp2077-relicslots-slot");
		  const N = slots.length; // 8
		  slots.forEach((slot, i) => {
		    const s = relicSessions[i];
		    slot.classList.toggle("cp2077-relicslots-empty", s === undefined);
		    slot.classList.toggle("cp2077-relicslots-active", i === relicIndex && s !== undefined);
		    // 120° 圆弧排布：i=0(最近)在顶端(+60°)，i=N-1 在底端(-60°)
		    const t = N <= 1 ? 0 : i / (N - 1);
		    const ang = (240 - t * 120) * Math.PI / 180;
		    const R = 200, cx = 200, cy = 230;
		    const x = cx + R * Math.cos(ang);
		    const y = cy + R * Math.sin(ang);
		    slot.style.transform = "translate(" + x.toFixed(1) + "px, " + y.toFixed(1) + "px) translate(-50%, -50%)";
		    slot.style.opacity = "1";
		    const num = slot.querySelector(".cp2077-relicslots-num");
		    const name = slot.querySelector(".cp2077-relicslots-name");
		    if (s !== undefined) {
		      num.textContent = String(i + 1).padStart(2, "0");
		      name.textContent = s.title;
		    } else {
		      num.textContent = "--";
		      name.textContent = "EMPTY SLOT";
		    }
		  });
		}
		
		function openRelicSlots() {
		  buildRelicSlots();
		  buildTerminal();
		  relicSessions = readRecentSessions();
		  relicIndex = 0;
		  paintRelicSlots();
		  relicSlotsEl.classList.add("cp2077-open");
		  const term = document.getElementById("cp2077-terminal");
		  if (term !== null) term.classList.add("cp2077-open");
		  startTermFeed();
		  playNotify();
		}
		
		function closeRelicSlots() {
		  if (relicSlotsEl !== null) relicSlotsEl.classList.remove("cp2077-open");
		  const term = document.getElementById("cp2077-terminal");
		  if (term !== null) term.classList.remove("cp2077-open");
		  stopTermFeed();
		}
		
		function activateRelicSlot() {
		  const s = relicSessions[relicIndex];
		  if (s !== undefined && s.el !== undefined) {
		    try { s.el.click(); } catch (e) {}
		  }
		  closeRelicSlots();
		}
		
		function moveRelicSlot(dir) {
		  const count = relicSessions.length;
		  if (count === 0) return;
		  relicIndex = (relicIndex + dir + count) % count;
		  paintRelicSlots();
		  playKeyClick(" ");
		}
		
		function startRelicSlots() {
		  const onKey = (e) => {
		    if (e.key === "Tab") {
		      e.preventDefault();
		      e.stopPropagation();
		      if (relicSlotsEl !== null && relicSlotsEl.classList.contains("cp2077-open")) {
		        moveRelicSlot(e.shiftKey ? -1 : 1);
		      } else {
		        openRelicSlots();
		      }
		      return;
		    }
		    if (relicSlotsEl === null || !relicSlotsEl.classList.contains("cp2077-open")) return;
		    if (e.key === "Escape") { e.preventDefault(); closeRelicSlots(); }
		    else if (e.key === "ArrowDown") { e.preventDefault(); moveRelicSlot(1); }
		    else if (e.key === "ArrowUp") { e.preventDefault(); moveRelicSlot(-1); }
		    else if (e.key === "Enter") { e.preventDefault(); activateRelicSlot(); }
		  };
		  const onWheel = (e) => {
		    if (relicSlotsEl === null || !relicSlotsEl.classList.contains("cp2077-open")) return;
		    e.preventDefault();
		    moveRelicSlot(e.deltaY > 0 ? 1 : -1);
		  };
		  document.addEventListener("keydown", onKey, true);
		  document.addEventListener("wheel", onWheel, { passive: false });
		  return () => {
		    document.removeEventListener("keydown", onKey, true);
		    document.removeEventListener("wheel", onWheel);
		  };
		}
		function apply(ctx) {
			ctx.effect(() => {
				document.documentElement.style.colorScheme = "dark";
				document.body.toggleAttribute("data-ds-dark-theme", true);
				loadCfg();
				applyCfgToBody();
				injectCyberpunkStyles();
				playBootTransition();
				ensureSndChip();
				ensureDeckPanel();
				document.addEventListener("keydown", onKeydown, true);
				const stopPending = startPendingPoll();
				const stopNotices = startNoticeObserver();
				const stopRelic = startRelicLoop();
				const stopWake = startTriggerWatcher();
				const stopTitle = applyTabIdentity();
				const stopClock = startHudFooter();
				buildParticles();
				// logoRow 由 React 异步渲染，轮询注入 CYBERPUNK 艺术字
				const stopLogo = (() => {
					let tries = 0;
					const t = setInterval(() => {
						injectCyberpunkLogo();
						if (document.getElementById("cp-logo-text") !== null || ++tries > 40) clearInterval(t);
					}, 250);
					return () => clearInterval(t);
				})();
				const stopSlots = startRelicSlots();
				// Keep dark chroma even if the theme service later resolves the
				// preference to a light scheme and flips the attribute off.
				const observer = new MutationObserver(() => {
					document.documentElement.style.colorScheme = "dark";
					document.body.toggleAttribute("data-ds-dark-theme", true);
				});
				observer.observe(document.body, { attributes: true, attributeFilter: ["data-ds-dark-theme"] });
				try {
					ctx.theme.register({
						id: THEME_ID,
						colorScheme: "dark",
						tokens: TOKENS
					});
					ctx.theme.setTheme(THEME_ID);
				} catch (e) {
					console.error("dsh-theme-cyberpunk2077 theme register failed", e);
				}
				return () => {
					observer.disconnect();
					document.removeEventListener("keydown", onKeydown, true);
					stopPending();
					stopNotices();
					stopRelic();
					stopWake();
					stopTitle();
					stopClock();
					stopLogo();
					stopSlots();
				};
			}, "dsh-theme-cyberpunk2077: register");
		}

		exports.isPlugin = true;
		exports.inject = ["theme"];
		exports.apply = apply;
		return module.exports;
	}
});
