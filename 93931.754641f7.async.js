(self.webpackChunk_dxsixpc_generator=self.webpackChunk_dxsixpc_generator||[]).push([[93931],{93931:function(){(function(i){i.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var n={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(n).forEach(function(e){var a=n[e],r=[];/^\w+$/.test(e)||r.push(/\w+/.exec(e)[0]),e==="diff"&&r.push("bold"),i.languages.diff[e]={pattern:RegExp("^(?:["+a+`].*(?:\r
?|
|(?![\\s\\S])))+`,"m"),alias:r,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(e)[0]}}}}),Object.defineProperty(i.languages.diff,"PREFIXES",{value:n})})(Prism)}}]);
