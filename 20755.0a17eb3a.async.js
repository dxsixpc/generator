(self.webpackChunk_dxsixpc_generator=self.webpackChunk_dxsixpc_generator||[]).push([[20755],{20755:function(){(function(r){var i=/\{[^\r\n\[\]{}]*\}/,p={"quoted-string":{pattern:/"(?:[^"\\]|\\.)*"/,alias:"operator"},"command-param-id":{pattern:/(\s)\w+:/,lookbehind:!0,alias:"property"},"command-param-value":[{pattern:i,alias:"selector"},{pattern:/([\t ])\S+/,lookbehind:!0,greedy:!0,alias:"operator"},{pattern:/\S(?:.*\S)?/,alias:"operator"}]};r.languages.naniscript={comment:{pattern:/^([\t ]*);.*/m,lookbehind:!0},define:{pattern:/^>.+/m,alias:"tag",inside:{value:{pattern:/(^>\w+[\t ]+)(?!\s)[^{}\r\n]+/,lookbehind:!0,alias:"operator"},key:{pattern:/(^>)\w+/,lookbehind:!0}}},label:{pattern:/^([\t ]*)#[\t ]*\w+[\t ]*$/m,lookbehind:!0,alias:"regex"},command:{pattern:/^([\t ]*)@\w+(?=[\t ]|$).*/m,lookbehind:!0,alias:"function",inside:{"command-name":/^@\w+/,expression:{pattern:i,greedy:!0,alias:"selector"},"command-params":{pattern:/\s*\S[\s\S]*/,inside:p}}},"generic-text":{pattern:/(^[ \t]*)[^#@>;\s].*/m,lookbehind:!0,alias:"punctuation",inside:{"escaped-char":/\\[{}\[\]"]/,expression:{pattern:i,greedy:!0,alias:"selector"},"inline-command":{pattern:/\[[\t ]*\w[^\r\n\[\]]*\]/,greedy:!0,alias:"function",inside:{"command-params":{pattern:/(^\[[\t ]*\w+\b)[\s\S]+(?=\]$)/,lookbehind:!0,inside:p},"command-param-name":{pattern:/^(\[[\t ]*)\w+/,lookbehind:!0,alias:"name"},"start-stop-char":/[\[\]]/}}}}},r.languages.nani=r.languages.naniscript,r.hooks.add("after-tokenize",function(e){var s=e.tokens;s.forEach(function(a){if(typeof a!="string"&&a.type==="generic-text"){var t=o(a);l(t)||(a.type="bad-line",a.content=t)}})});function l(e){for(var s="[]{}",a=[],t=0;t<e.length;t++){var u=e[t],n=s.indexOf(u);if(n!==-1){if(n%2===0)a.push(n+1);else if(a.pop()!==n)return!1}}return a.length===0}function o(e){return typeof e=="string"?e:Array.isArray(e)?e.map(o).join(""):o(e.content)}})(Prism)}}]);
