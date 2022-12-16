var charToCodeMap = {
"q": {code: "KeyQ"},
"w": {code: "KeyW"},
"e": {code: "KeyE"},
"r": {code: "KeyR"},
"t": {code: "KeyT"},
"y": {code: "KeyY"},
"u": {code: "KeyU"},
"i": {code: "KeyI"},
"o": {code: "KeyO"},
"p": {code: "KeyP"},
"a": {code: "KeyA"},
"s": {code: "KeyS"},
"d": {code: "KeyD"},
"f": {code: "KeyF"},
"g": {code: "KeyG"},
"h": {code: "KeyH"},
"j": {code: "KeyJ"},
"k": {code: "KeyK"},
"l": {code: "KeyL"},
"z": {code: "KeyZ"},
"x": {code: "KeyX"},
"c": {code: "KeyC"},
"v": {code: "KeyV"},
"b": {code: "KeyB"},
"n": {code: "KeyN"},
"m": {code: "KeyM"},
"Q": {code: "KeyQ", shift: true},
"W": {code: "KeyW", shift: true},
"E": {code: "KeyE", shift: true},
"R": {code: "KeyR", shift: true},
"T": {code: "KeyT", shift: true},
"Y": {code: "KeyY", shift: true},
"U": {code: "KeyU", shift: true},
"I": {code: "KeyI", shift: true},
"O": {code: "KeyO", shift: true},
"P": {code: "KeyP", shift: true},
"A": {code: "KeyA", shift: true},
"S": {code: "KeyS", shift: true},
"D": {code: "KeyD", shift: true},
"F": {code: "KeyF", shift: true},
"G": {code: "KeyG", shift: true},
"H": {code: "KeyH", shift: true},
"J": {code: "KeyJ", shift: true},
"K": {code: "KeyK", shift: true},
"L": {code: "KeyL", shift: true},
"Z": {code: "KeyZ", shift: true},
"X": {code: "KeyX", shift: true},
"C": {code: "KeyC", shift: true},
"V": {code: "KeyV", shift: true},
"B": {code: "KeyB", shift: true},
"N": {code: "KeyN", shift: true},
"M": {code: "KeyM", shift: true},
"0": {code: "Digit0"},
"1": {code: "Digit1"},
"2": {code: "Digit2"},
"3": {code: "Digit3"},
"4": {code: "Digit4"},
"5": {code: "Digit5"},
"6": {code: "Digit6"},
"7": {code: "Digit7"},
"8": {code: "Digit8"},
"9": {code: "Digit9"},
")": {code: "Digit0", shift: true},
"!": {code: "Digit1", shift: true},
"@": {code: "Digit2", shift: true},
"#": {code: "Digit3", shift: true},
"$": {code: "Digit4", shift: true},
"%": {code: "Digit5", shift: true},
"^": {code: "Digit6", shift: true},
"&": {code: "Digit7", shift: true},
"*": {code: "Digit8", shift: true},
"(": {code: "Digit9", shift: true},
"`": {code: "Backquote"},
"-": {code: "Minus"},
"=": {code: "Equal"},
"[": {code: "BracketLeft"},
"]": {code: "BracketRight"},
"\\": {code: "Backslash"},
";": {code: "Semicolon"},
"'": {code: "Quote"},
",": {code: "Comma"},
".": {code: "Period"},
"/": {code: "Slash"},
"~": {code: "Backquote", shift: true},
"_": {code: "Minus", shift: true},
"+": {code: "Equal", shift: true},
"{": {code: "BracketLeft", shift: true},
"}": {code: "BracketRight", shift: true},
"|": {code: "Backslash", shift: true},
":": {code: "Semicolon", shift: true},
"\"": {code: "Quote", shift: true},
"<": {code: "Comma", shift: true},
">": {code: "Period", shift: true},
"?": {code: "Slash", shift: true},
"\t": {code: "Tab"},
"\n": {code: "Enter"},
" ": {code: "Space"}
};

var charToKeyMap = {
"\t": {key: "Tab"},
"\n": {key: "Enter"}
};

var codeToConfigIDMap = {
"KeyA": "a",
"KeyB": "b",
"KeyC": "c",
"KeyD": "d",
"KeyE": "e",
"KeyF": "f",
"KeyG": "g",
"KeyH": "h",
"KeyI": "i",
"KeyJ": "j",
"KeyK": "k",
"KeyL": "l",
"KeyM": "m",
"KeyN": "n",
"KeyO": "o",
"KeyP": "p",
"KeyQ": "q",
"KeyR": "r",
"KeyS": "s",
"KeyT": "t",
"KeyU": "u",
"KeyV": "v",
"KeyW": "w",
"KeyX": "x",
"KeyY": "y",
"KeyZ": "z",
"ArrowLeft": "left",
"ArrowRight": "right",
"ArrowUp": "up",
"ArrowDown": "down",
"Enter": "enter",
"NumpadEnter": "kp_enter",
"Tab": "tab",
"Insert": "insert",
"Delete": "del",
"End": "end",
"Home": "home",
"ShiftRight": "rshift",
"ShiftLeft": "shift",
"ControlLeft": "ctrl",
"AltLeft": "alt",
"Space": "space",
"Escape": "escape",
"NumpadAdd": "add",
"NumpadSubtract": "subtract",
"F1": "f1",
"F2": "f2",
"F3": "f3",
"F4": "f4",
"F5": "f5",
"F6": "f6",
"F7": "f7",
"F8": "f8",
"F9": "f9",
"F10": "f10",
"F11": "f11",
"F12": "f12",
"Digit0": "num0",
"Digit1": "num1",
"Digit2": "num2",
"Digit3": "num3",
"Digit4": "num4",
"Digit5": "num5",
"Digit6": "num6",
"Digit7": "num7",
"Digit8": "num8",
"Digit9": "num9",
"PageUp": "pageup",
"PageDown": "pagedown",
"Numpad0": "keypad0",
"Numpad1": "keypad1",
"Numpad2": "keypad2",
"Numpad3": "keypad3",
"Numpad4": "keypad4",
"Numpad5": "keypad5",
"Numpad6": "keypad6",
"Numpad7": "keypad7",
"Numpad8": "keypad8",
"Numpad9": "keypad9",
"Period": "period",
"CapsLock": "capslock",
"NumLock": "numlock",
"Backspace": "backspace",
"NumpadMultiply": "multiply",
"NumpadDivide": "divide",
"PrintScreen": "print_screen",
"ScrollLock": "scroll_lock",
"Backquote": "tilde",
"Pause": "pause",
"Quote": "quote",
"Comma": "comma",
"Minus": "minus",
"Slash": "slash",
"Semicolon": "semicolon",
"Equal": "equals",
"BracketLeft": "leftbracket",
"Backslash": "backslash",
"BracketRight": "rightbracket",
"NumpadDecimal": "kp_period",
"NumpadEqual": "kp_equals",
"ControlRight": "rctrl",
"AltRight": "ralt",
"F13": "f13",
"F14": "f14",
"F15": "f15",
"MetaRight": "rmeta",
"MetaLeft": "lmeta",
"Help": "help",
"ContextMenu": "menu",
"Power": "power"
};
