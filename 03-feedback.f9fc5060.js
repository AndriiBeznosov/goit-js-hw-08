!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=c||d||Function("return this")(),s=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return v.Date.now()};function y(e,t,n){var r,i,a,u,f,l,c=0,d=!1,v=!1,s=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,f=setTimeout(x,t),d?y(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=a}function x(){var e=p();if(O(e))return T(e);f=setTimeout(x,function(e){var n=t-(e-l);return v?g(n,a-(e-c)):n}(e))}function T(e){return f=void 0,s&&r?y(e):(r=i=void 0,u)}function h(){var e=p(),n=O(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(v)return f=setTimeout(x,t),y(l)}return void 0===f&&(f=setTimeout(x,t)),u}return t=S(t)||0,b(n)&&(d=!!n.leading,a=(v="maxWait"in n)?m(S(n.maxWait)||0,t):a,s="trailing"in n?!!n.trailing:s),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},h.flush=function(){return void 0===f?u:T(p())},h}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var j={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea")},O="feedback-form-state";j.form.addEventListener("submit",(function(e){e.preventDefault(),""!==e.target[0].value&&""!==e.target[1].value&&(e.currentTarget.reset(),localStorage.removeItem(O),console.log(x),x={})})),j.form.addEventListener("input",e(t)((function(e){x[e.target.name]=e.target.value,localStorage.setItem(O,JSON.stringify(x))}),500)),function(){var e=localStorage.getItem(O);if(e){var t=JSON.parse(e);void 0!==t.email?j.input.value=t.email:j.input.value="",void 0!==t.message?j.textarea.value=t.message:j.textarea.value=""}}();var x=JSON.parse(localStorage.getItem(O))||{}}();
//# sourceMappingURL=03-feedback.f9fc5060.js.map
