(self.webpackChunk_dxsixpc_generator=self.webpackChunk_dxsixpc_generator||[]).push([[34279],{34279:function(){(function(n){function e(t){return RegExp("([ 	])(?:"+t+")(?=[\\s;]|$)","i")}n.languages.csp={directive:{pattern:/(^|[\s;])(?:base-uri|block-all-mixed-content|(?:child|connect|default|font|frame|img|manifest|media|object|prefetch|script|style|worker)-src|disown-opener|form-action|frame-(?:ancestors|options)|input-protection(?:-(?:clip|selectors))?|navigate-to|plugin-types|policy-uri|referrer|reflected-xss|report-(?:to|uri)|require-sri-for|sandbox|(?:script|style)-src-(?:attr|elem)|upgrade-insecure-requests)(?=[\s;]|$)/i,lookbehind:!0,alias:"property"},scheme:{pattern:e("[a-z][a-z0-9.+-]*:"),lookbehind:!0},none:{pattern:e("'none'"),lookbehind:!0,alias:"keyword"},nonce:{pattern:e("'nonce-[-+/\\w=]+'"),lookbehind:!0,alias:"number"},hash:{pattern:e("'sha(?:256|384|512)-[-+/\\w=]+'"),lookbehind:!0,alias:"number"},host:{pattern:e("[a-z][a-z0-9.+-]*://[^\\s;,']*|\\*[^\\s;,']*|[a-z0-9-]+(?:\\.[a-z0-9-]+)+(?::[\\d*]+)?(?:/[^\\s;,']*)?"),lookbehind:!0,alias:"url",inside:{important:/\*/}},keyword:[{pattern:e("'unsafe-[a-z-]+'"),lookbehind:!0,alias:"unsafe"},{pattern:e("'[a-z-]+'"),lookbehind:!0,alias:"safe"}],punctuation:/;/}})(Prism)}}]);
