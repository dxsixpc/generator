(self.webpackChunk_dxsixpc_generator=self.webpackChunk_dxsixpc_generator||[]).push([[73473],{73473:function(){Prism.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:Prism.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},Prism.hooks.add("after-tokenize",function(d){if(d.language==="graphql")for(var i=d.tokens.filter(function(n){return typeof n!="string"&&n.type!=="comment"&&n.type!=="scalar"}),e=0;e<i.length;){var m=i[e++];if(m.type==="keyword"&&m.content==="mutation"){var s=[];if(y(["definition-mutation","punctuation"])&&o(1).content==="("){e+=2;var u=v(/^\($/,/^\)$/);if(u===-1)continue;for(;e<u;e++){var p=o(0);p.type==="variable"&&(f(p,"variable-input"),s.push(p.content))}e=u+1}if(y(["punctuation","property-query"])&&o(0).content==="{"&&(e++,f(o(0),"property-mutation"),s.length>0)){var g=v(/^\{$/,/^\}$/);if(g===-1)continue;for(var l=e;l<g;l++){var c=i[l];c.type==="variable"&&s.indexOf(c.content)>=0&&f(c,"variable-input")}}}}function o(n){return i[e+n]}function y(n,a){a=a||0;for(var t=0;t<n.length;t++){var r=o(t+a);if(!r||r.type!==n[t])return!1}return!0}function v(n,a){for(var t=1,r=e;r<i.length;r++){var h=i[r],b=h.content;if(h.type==="punctuation"&&typeof b=="string"){if(n.test(b))t++;else if(a.test(b)&&--t==0)return r}}return-1}function f(n,a){var t=n.alias;t?Array.isArray(t)||(n.alias=t=[t]):n.alias=t=[],t.push(a)}})}}]);
