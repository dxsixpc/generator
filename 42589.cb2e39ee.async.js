(self.webpackChunk_dxsixpc_generator=self.webpackChunk_dxsixpc_generator||[]).push([[42589],{42589:function(){(function(i){function a(e,t,n){return{pattern:RegExp("<#"+e+"[\\s\\S]*?#>"),alias:"block",inside:{delimiter:{pattern:RegExp("^<#"+e+"|#>$"),alias:"important"},content:{pattern:/[\s\S]+/,inside:t,alias:n}}}}i.languages["t4-templating"]=Object.defineProperty({},"createT4",{value:function(e){var t=i.languages[e],n="language-"+e;return{block:{pattern:/<#[\s\S]+?#>/,inside:{directive:a("@",{"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,inside:{punctuation:/^=|^["']|["']$/}},keyword:/\b\w+(?=\s)/,"attr-name":/\b\w+/}),expression:a("=",t,n),"class-feature":a("\\+",t,n),standard:a("",t,n)}}}}})})(Prism)}}]);
