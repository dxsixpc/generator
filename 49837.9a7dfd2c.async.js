(self.webpackChunk_dxsixpc_generator=self.webpackChunk_dxsixpc_generator||[]).push([[49837],{49837:function(){(function(u){function f(n,t){return"___"+n.toUpperCase()+t+"___"}Object.defineProperties(u.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,t,s,p){if(n.language===t){var c=n.tokenStack=[];n.code=n.code.replace(s,function(a){if(typeof p=="function"&&!p(a))return a;for(var r,e=c.length;n.code.indexOf(r=f(t,e))!==-1;)++e;return c[e]=a,r}),n.grammar=u.languages.markup}}},tokenizePlaceholders:{value:function(n,t){if(n.language===t&&n.tokenStack){n.grammar=u.languages[t];var s=0,p=Object.keys(n.tokenStack);(function c(a){for(var r=0;r<a.length&&!(s>=p.length);r++){var e=a[r];if(typeof e=="string"||e.content&&typeof e.content=="string"){var g=p[s],k=n.tokenStack[g],i=typeof e=="string"?e:e.content,d=f(t,g),l=i.indexOf(d);if(l>-1){++s;var h=i.substring(0,l),m=new u.Token(t,u.tokenize(k,n.grammar),"language-"+t,k),_=i.substring(l+d.length),o=[];h&&o.push.apply(o,c([h])),o.push(m),_&&o.push.apply(o,c([_])),typeof e=="string"?a.splice.apply(a,[r,1].concat(o)):e.content=o}}else e.content&&c(e.content)}return a})(n.tokens)}}}})})(Prism)}}]);
