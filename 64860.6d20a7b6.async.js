(self.webpackChunk_dxsixpc_generator=self.webpackChunk_dxsixpc_generator||[]).push([[64860],{64860:function(){(function(e){var r="(?:"+["[a-zA-Z_\\x80-\\uFFFF][\\w\\x80-\\uFFFF]*","-?(?:\\.\\d+|\\d+(?:\\.\\d*)?)",'"[^"\\\\]*(?:\\\\[^][^"\\\\]*)*"',`<(?:[^<>]|(?!<!--)<(?:[^<>"']|"[^"]*"|'[^']*')+>|<!--(?:[^-]|-(?!->))*-->)*>`].join("|")+")",n={markup:{pattern:/(^<)[\s\S]+(?=>$)/,lookbehind:!0,alias:["language-markup","language-html","language-xml"],inside:e.languages.markup}};function a(t,i){return RegExp(t.replace(/<ID>/g,function(){return r}),i)}e.languages.dot={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\/|^#.*/m,greedy:!0},"graph-name":{pattern:a(`(\\b(?:digraph|graph|subgraph)[ 	\r
]+)<ID>`,"i"),lookbehind:!0,greedy:!0,alias:"class-name",inside:n},"attr-value":{pattern:a(`(=[ 	\r
]*)<ID>`),lookbehind:!0,greedy:!0,inside:n},"attr-name":{pattern:a(`([\\[;, 	\r
])<ID>(?=[ 	\r
]*=)`),lookbehind:!0,greedy:!0,inside:n},keyword:/\b(?:digraph|edge|graph|node|strict|subgraph)\b/i,"compass-point":{pattern:/(:[ \t\r\n]*)(?:[ewc_]|[ns][ew]?)(?![\w\x80-\uFFFF])/,lookbehind:!0,alias:"builtin"},node:{pattern:a("(^|[^-.\\w\\x80-\\uFFFF\\\\])<ID>"),lookbehind:!0,greedy:!0,inside:n},operator:/[=:]|-[->]/,punctuation:/[\[\]{};,]/},e.languages.gv=e.languages.dot})(Prism)}}]);