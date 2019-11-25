const et = require("electron-tools");
//require("vq_underscore");

_().ready(() => {
    _('open-link').click(() => {
        et.openLink("https://github.com/77Z/electron-tools");
    });
    _('open-explorer').click(() => {
        et.openExplorer();
    });
    _('move-mouse').click(() => {
        et.moveMouse(1000, 1000);
    });
    _('open-notepad').click(() => {
        et.openNotepad();
    });
    _('open-registry').click(() => {
        et.openRegistry();
    });
    _('open-term').click(() => {
        et.openTerminal();
    });
    _('simkey').click(() => {
        et.openNotepad();
        setTimeout(function() {
            et.simulateKeypress("Hello!{ENTER}{F5}");
        }, 500);
    });
});