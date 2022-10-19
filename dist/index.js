var _=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var G=_(B=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0});B.toCommandProperties=B.toCommandValue=void 0;function At(e){return e==null?"":typeof e=="string"||e instanceof String?e:JSON.stringify(e)}B.toCommandValue=At;function Mt(e){return Object.keys(e).length?{title:e.title,file:e.file,line:e.startLine,endLine:e.endLine,col:e.startColumn,endColumn:e.endColumn}:{}}B.toCommandProperties=Mt});var Ne=_(O=>{"use strict";var xt=O&&O.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),Ut=O&&O.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),Dt=O&&O.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.hasOwnProperty.call(e,r)&&xt(t,e,r);return Ut(t,e),t};Object.defineProperty(O,"__esModule",{value:!0});O.issue=O.issueCommand=void 0;var Ct=Dt(require("os")),Be=G();function Ie(e,t,r){let n=new le(e,t,r);process.stdout.write(n.toString()+Ct.EOL)}O.issueCommand=Ie;function Bt(e,t=""){Ie(e,{},t)}O.issue=Bt;var Ce="::",le=class{constructor(t,r,n){t||(t="missing.command"),this.command=t,this.properties=r,this.message=n}toString(){let t=Ce+this.command;if(this.properties&&Object.keys(this.properties).length>0){t+=" ";let r=!0;for(let n in this.properties)if(this.properties.hasOwnProperty(n)){let i=this.properties[n];i&&(r?r=!1:t+=",",t+=`${n}=${Nt(i)}`)}}return t+=`${Ce}${It(this.message)}`,t}};function It(e){return Be.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function Nt(e){return Be.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}});var de=_(fe=>{"use strict";Object.defineProperty(fe,"__esModule",{value:!0});fe.default=Lt;var kt=$t(require("crypto"));function $t(e){return e&&e.__esModule?e:{default:e}}var K=new Uint8Array(256),J=K.length;function Lt(){return J>K.length-16&&(kt.default.randomFillSync(K),J=0),K.slice(J,J+=16)}});var ke=_(z=>{"use strict";Object.defineProperty(z,"__esModule",{value:!0});z.default=void 0;var jt=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;z.default=jt});var V=_(Y=>{"use strict";Object.defineProperty(Y,"__esModule",{value:!0});Y.default=void 0;var Vt=Ft(ke());function Ft(e){return e&&e.__esModule?e:{default:e}}function Gt(e){return typeof e=="string"&&Vt.default.test(e)}var Jt=Gt;Y.default=Jt});var F=_(H=>{"use strict";Object.defineProperty(H,"__esModule",{value:!0});H.default=void 0;var Kt=zt(V());function zt(e){return e&&e.__esModule?e:{default:e}}var m=[];for(let e=0;e<256;++e)m.push((e+256).toString(16).substr(1));function Yt(e,t=0){let r=(m[e[t+0]]+m[e[t+1]]+m[e[t+2]]+m[e[t+3]]+"-"+m[e[t+4]]+m[e[t+5]]+"-"+m[e[t+6]]+m[e[t+7]]+"-"+m[e[t+8]]+m[e[t+9]]+"-"+m[e[t+10]]+m[e[t+11]]+m[e[t+12]]+m[e[t+13]]+m[e[t+14]]+m[e[t+15]]).toLowerCase();if(!(0,Kt.default)(r))throw TypeError("Stringified UUID is invalid");return r}var Ht=Yt;H.default=Ht});var je=_(W=>{"use strict";Object.defineProperty(W,"__esModule",{value:!0});W.default=void 0;var Wt=Le(de()),Qt=Le(F());function Le(e){return e&&e.__esModule?e:{default:e}}var $e,he,pe=0,_e=0;function Xt(e,t,r){let n=t&&r||0,i=t||new Array(16);e=e||{};let s=e.node||$e,o=e.clockseq!==void 0?e.clockseq:he;if(s==null||o==null){let h=e.random||(e.rng||Wt.default)();s==null&&(s=$e=[h[0]|1,h[1],h[2],h[3],h[4],h[5]]),o==null&&(o=he=(h[6]<<8|h[7])&16383)}let c=e.msecs!==void 0?e.msecs:Date.now(),l=e.nsecs!==void 0?e.nsecs:_e+1,u=c-pe+(l-_e)/1e4;if(u<0&&e.clockseq===void 0&&(o=o+1&16383),(u<0||c>pe)&&e.nsecs===void 0&&(l=0),l>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");pe=c,_e=l,he=o,c+=122192928e5;let a=((c&268435455)*1e4+l)%4294967296;i[n++]=a>>>24&255,i[n++]=a>>>16&255,i[n++]=a>>>8&255,i[n++]=a&255;let d=c/4294967296*1e4&268435455;i[n++]=d>>>8&255,i[n++]=d&255,i[n++]=d>>>24&15|16,i[n++]=d>>>16&255,i[n++]=o>>>8|128,i[n++]=o&255;for(let h=0;h<6;++h)i[n+h]=s[h];return t||(0,Qt.default)(i)}var Zt=Xt;W.default=Zt});var ve=_(Q=>{"use strict";Object.defineProperty(Q,"__esModule",{value:!0});Q.default=void 0;var er=tr(V());function tr(e){return e&&e.__esModule?e:{default:e}}function rr(e){if(!(0,er.default)(e))throw TypeError("Invalid UUID");let t,r=new Uint8Array(16);return r[0]=(t=parseInt(e.slice(0,8),16))>>>24,r[1]=t>>>16&255,r[2]=t>>>8&255,r[3]=t&255,r[4]=(t=parseInt(e.slice(9,13),16))>>>8,r[5]=t&255,r[6]=(t=parseInt(e.slice(14,18),16))>>>8,r[7]=t&255,r[8]=(t=parseInt(e.slice(19,23),16))>>>8,r[9]=t&255,r[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,r[11]=t/4294967296&255,r[12]=t>>>24&255,r[13]=t>>>16&255,r[14]=t>>>8&255,r[15]=t&255,r}var nr=rr;Q.default=nr});var me=_(U=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0});U.default=ur;U.URL=U.DNS=void 0;var ir=Ve(F()),sr=Ve(ve());function Ve(e){return e&&e.__esModule?e:{default:e}}function or(e){e=unescape(encodeURIComponent(e));let t=[];for(let r=0;r<e.length;++r)t.push(e.charCodeAt(r));return t}var Fe="6ba7b810-9dad-11d1-80b4-00c04fd430c8";U.DNS=Fe;var Ge="6ba7b811-9dad-11d1-80b4-00c04fd430c8";U.URL=Ge;function ur(e,t,r){function n(i,s,o,c){if(typeof i=="string"&&(i=or(i)),typeof s=="string"&&(s=(0,sr.default)(s)),s.length!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let l=new Uint8Array(16+i.length);if(l.set(s),l.set(i,s.length),l=r(l),l[6]=l[6]&15|t,l[8]=l[8]&63|128,o){c=c||0;for(let u=0;u<16;++u)o[c+u]=l[u];return o}return(0,ir.default)(l)}try{n.name=e}catch{}return n.DNS=Fe,n.URL=Ge,n}});var Je=_(X=>{"use strict";Object.defineProperty(X,"__esModule",{value:!0});X.default=void 0;var ar=cr(require("crypto"));function cr(e){return e&&e.__esModule?e:{default:e}}function lr(e){return Array.isArray(e)?e=Buffer.from(e):typeof e=="string"&&(e=Buffer.from(e,"utf8")),ar.default.createHash("md5").update(e).digest()}var fr=lr;X.default=fr});var ze=_(Z=>{"use strict";Object.defineProperty(Z,"__esModule",{value:!0});Z.default=void 0;var dr=Ke(me()),hr=Ke(Je());function Ke(e){return e&&e.__esModule?e:{default:e}}var pr=(0,dr.default)("v3",48,hr.default),_r=pr;Z.default=_r});var He=_(ee=>{"use strict";Object.defineProperty(ee,"__esModule",{value:!0});ee.default=void 0;var vr=Ye(de()),mr=Ye(F());function Ye(e){return e&&e.__esModule?e:{default:e}}function gr(e,t,r){e=e||{};let n=e.random||(e.rng||vr.default)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,t){r=r||0;for(let i=0;i<16;++i)t[r+i]=n[i];return t}return(0,mr.default)(n)}var yr=gr;ee.default=yr});var We=_(te=>{"use strict";Object.defineProperty(te,"__esModule",{value:!0});te.default=void 0;var wr=Or(require("crypto"));function Or(e){return e&&e.__esModule?e:{default:e}}function Rr(e){return Array.isArray(e)?e=Buffer.from(e):typeof e=="string"&&(e=Buffer.from(e,"utf8")),wr.default.createHash("sha1").update(e).digest()}var Pr=Rr;te.default=Pr});var Xe=_(re=>{"use strict";Object.defineProperty(re,"__esModule",{value:!0});re.default=void 0;var Er=Qe(me()),qr=Qe(We());function Qe(e){return e&&e.__esModule?e:{default:e}}var br=(0,Er.default)("v5",80,qr.default),Sr=br;re.default=Sr});var Ze=_(ne=>{"use strict";Object.defineProperty(ne,"__esModule",{value:!0});ne.default=void 0;var Tr="00000000-0000-0000-0000-000000000000";ne.default=Tr});var et=_(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.default=void 0;var Ar=Mr(V());function Mr(e){return e&&e.__esModule?e:{default:e}}function xr(e){if(!(0,Ar.default)(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)}var Ur=xr;ie.default=Ur});var tt=_(E=>{"use strict";Object.defineProperty(E,"__esModule",{value:!0});Object.defineProperty(E,"v1",{enumerable:!0,get:function(){return Dr.default}});Object.defineProperty(E,"v3",{enumerable:!0,get:function(){return Cr.default}});Object.defineProperty(E,"v4",{enumerable:!0,get:function(){return Br.default}});Object.defineProperty(E,"v5",{enumerable:!0,get:function(){return Ir.default}});Object.defineProperty(E,"NIL",{enumerable:!0,get:function(){return Nr.default}});Object.defineProperty(E,"version",{enumerable:!0,get:function(){return kr.default}});Object.defineProperty(E,"validate",{enumerable:!0,get:function(){return $r.default}});Object.defineProperty(E,"stringify",{enumerable:!0,get:function(){return Lr.default}});Object.defineProperty(E,"parse",{enumerable:!0,get:function(){return jr.default}});var Dr=S(je()),Cr=S(ze()),Br=S(He()),Ir=S(Xe()),Nr=S(Ze()),kr=S(et()),$r=S(V()),Lr=S(F()),jr=S(ve());function S(e){return e&&e.__esModule?e:{default:e}}});var st=_(R=>{"use strict";var Vr=R&&R.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),Fr=R&&R.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),nt=R&&R.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.hasOwnProperty.call(e,r)&&Vr(t,e,r);return Fr(t,e),t};Object.defineProperty(R,"__esModule",{value:!0});R.prepareKeyValueMessage=R.issueFileCommand=void 0;var rt=nt(require("fs")),ge=nt(require("os")),Gr=tt(),it=G();function Jr(e,t){let r=process.env[`GITHUB_${e}`];if(!r)throw new Error(`Unable to find environment variable for file command ${e}`);if(!rt.existsSync(r))throw new Error(`Missing file at path: ${r}`);rt.appendFileSync(r,`${it.toCommandValue(t)}${ge.EOL}`,{encoding:"utf8"})}R.issueFileCommand=Jr;function Kr(e,t){let r=`ghadelimiter_${Gr.v4()}`,n=it.toCommandValue(t);if(e.includes(r))throw new Error(`Unexpected input: name should not contain the delimiter "${r}"`);if(n.includes(r))throw new Error(`Unexpected input: value should not contain the delimiter "${r}"`);return`${e}<<${r}${ge.EOL}${n}${ge.EOL}${r}`}R.prepareKeyValueMessage=Kr});var ut=_(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});I.checkBypass=I.getProxyUrl=void 0;function zr(e){let t=e.protocol==="https:";if(ot(e))return;let r=(()=>t?process.env.https_proxy||process.env.HTTPS_PROXY:process.env.http_proxy||process.env.HTTP_PROXY)();if(r)return new URL(r)}I.getProxyUrl=zr;function ot(e){if(!e.hostname)return!1;let t=process.env.no_proxy||process.env.NO_PROXY||"";if(!t)return!1;let r;e.port?r=Number(e.port):e.protocol==="http:"?r=80:e.protocol==="https:"&&(r=443);let n=[e.hostname.toUpperCase()];typeof r=="number"&&n.push(`${n[0]}:${r}`);for(let i of t.split(",").map(s=>s.trim().toUpperCase()).filter(s=>s))if(n.some(s=>s===i))return!0;return!1}I.checkBypass=ot});var ft=_(N=>{"use strict";var _i=require("net"),Yr=require("tls"),ye=require("http"),at=require("https"),Hr=require("events"),vi=require("assert"),Wr=require("util");N.httpOverHttp=Qr;N.httpsOverHttp=Xr;N.httpOverHttps=Zr;N.httpsOverHttps=en;function Qr(e){var t=new T(e);return t.request=ye.request,t}function Xr(e){var t=new T(e);return t.request=ye.request,t.createSocket=ct,t.defaultPort=443,t}function Zr(e){var t=new T(e);return t.request=at.request,t}function en(e){var t=new T(e);return t.request=at.request,t.createSocket=ct,t.defaultPort=443,t}function T(e){var t=this;t.options=e||{},t.proxyOptions=t.options.proxy||{},t.maxSockets=t.options.maxSockets||ye.Agent.defaultMaxSockets,t.requests=[],t.sockets=[],t.on("free",function(n,i,s,o){for(var c=lt(i,s,o),l=0,u=t.requests.length;l<u;++l){var a=t.requests[l];if(a.host===c.host&&a.port===c.port){t.requests.splice(l,1),a.request.onSocket(n);return}}n.destroy(),t.removeSocket(n)})}Wr.inherits(T,Hr.EventEmitter);T.prototype.addRequest=function(t,r,n,i){var s=this,o=we({request:t},s.options,lt(r,n,i));if(s.sockets.length>=this.maxSockets){s.requests.push(o);return}s.createSocket(o,function(c){c.on("free",l),c.on("close",u),c.on("agentRemove",u),t.onSocket(c);function l(){s.emit("free",c,o)}function u(a){s.removeSocket(c),c.removeListener("free",l),c.removeListener("close",u),c.removeListener("agentRemove",u)}})};T.prototype.createSocket=function(t,r){var n=this,i={};n.sockets.push(i);var s=we({},n.proxyOptions,{method:"CONNECT",path:t.host+":"+t.port,agent:!1,headers:{host:t.host+":"+t.port}});t.localAddress&&(s.localAddress=t.localAddress),s.proxyAuth&&(s.headers=s.headers||{},s.headers["Proxy-Authorization"]="Basic "+new Buffer(s.proxyAuth).toString("base64")),A("making CONNECT request");var o=n.request(s);o.useChunkedEncodingByDefault=!1,o.once("response",c),o.once("upgrade",l),o.once("connect",u),o.once("error",a),o.end();function c(d){d.upgrade=!0}function l(d,h,C){process.nextTick(function(){u(d,h,C)})}function u(d,h,C){if(o.removeAllListeners(),h.removeAllListeners(),d.statusCode!==200){A("tunneling socket could not be established, statusCode=%d",d.statusCode),h.destroy();var j=new Error("tunneling socket could not be established, statusCode="+d.statusCode);j.code="ECONNRESET",t.request.emit("error",j),n.removeSocket(i);return}if(C.length>0){A("got illegal response body from proxy"),h.destroy();var j=new Error("got illegal response body from proxy");j.code="ECONNRESET",t.request.emit("error",j),n.removeSocket(i);return}return A("tunneling connection has established"),n.sockets[n.sockets.indexOf(i)]=h,r(h)}function a(d){o.removeAllListeners(),A(`tunneling socket could not be established, cause=%s
`,d.message,d.stack);var h=new Error("tunneling socket could not be established, cause="+d.message);h.code="ECONNRESET",t.request.emit("error",h),n.removeSocket(i)}};T.prototype.removeSocket=function(t){var r=this.sockets.indexOf(t);if(r!==-1){this.sockets.splice(r,1);var n=this.requests.shift();n&&this.createSocket(n,function(i){n.request.onSocket(i)})}};function ct(e,t){var r=this;T.prototype.createSocket.call(r,e,function(n){var i=e.request.getHeader("host"),s=we({},r.options,{socket:n,servername:i?i.replace(/:.*$/,""):e.host}),o=Yr.connect(0,s);r.sockets[r.sockets.indexOf(n)]=o,t(o)})}function lt(e,t,r){return typeof e=="string"?{host:e,port:t,localAddress:r}:e}function we(e){for(var t=1,r=arguments.length;t<r;++t){var n=arguments[t];if(typeof n=="object")for(var i=Object.keys(n),s=0,o=i.length;s<o;++s){var c=i[s];n[c]!==void 0&&(e[c]=n[c])}}return e}var A;process.env.NODE_DEBUG&&/\btunnel\b/.test(process.env.NODE_DEBUG)?A=function(){var e=Array.prototype.slice.call(arguments);typeof e[0]=="string"?e[0]="TUNNEL: "+e[0]:e.unshift("TUNNEL:"),console.error.apply(console,e)}:A=function(){};N.debug=A});var ht=_((gi,dt)=>{dt.exports=ft()});var _t=_(p=>{"use strict";var tn=p&&p.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),rn=p&&p.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),ce=p&&p.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.hasOwnProperty.call(e,r)&&tn(t,e,r);return rn(t,e),t},v=p&&p.__awaiter||function(e,t,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function c(a){try{u(n.next(a))}catch(d){o(d)}}function l(a){try{u(n.throw(a))}catch(d){o(d)}}function u(a){a.done?s(a.value):i(a.value).then(c,l)}u((n=n.apply(e,t||[])).next())})};Object.defineProperty(p,"__esModule",{value:!0});p.HttpClient=p.isHttps=p.HttpClientResponse=p.HttpClientError=p.getProxyUrl=p.MediaTypes=p.Headers=p.HttpCodes=void 0;var se=ce(require("http")),Oe=ce(require("https")),pt=ce(ut()),oe=ce(ht()),q;(function(e){e[e.OK=200]="OK",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.ResourceMoved=302]="ResourceMoved",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.SwitchProxy=306]="SwitchProxy",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.TooManyRequests=429]="TooManyRequests",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout"})(q=p.HttpCodes||(p.HttpCodes={}));var g;(function(e){e.Accept="accept",e.ContentType="content-type"})(g=p.Headers||(p.Headers={}));var M;(function(e){e.ApplicationJson="application/json"})(M=p.MediaTypes||(p.MediaTypes={}));function nn(e){let t=pt.getProxyUrl(new URL(e));return t?t.href:""}p.getProxyUrl=nn;var sn=[q.MovedPermanently,q.ResourceMoved,q.SeeOther,q.TemporaryRedirect,q.PermanentRedirect],on=[q.BadGateway,q.ServiceUnavailable,q.GatewayTimeout],un=["OPTIONS","GET","DELETE","HEAD"],an=10,cn=5,k=class extends Error{constructor(t,r){super(t),this.name="HttpClientError",this.statusCode=r,Object.setPrototypeOf(this,k.prototype)}};p.HttpClientError=k;var ae=class{constructor(t){this.message=t}readBody(){return v(this,void 0,void 0,function*(){return new Promise(t=>v(this,void 0,void 0,function*(){let r=Buffer.alloc(0);this.message.on("data",n=>{r=Buffer.concat([r,n])}),this.message.on("end",()=>{t(r.toString())})}))})}};p.HttpClientResponse=ae;function ln(e){return new URL(e).protocol==="https:"}p.isHttps=ln;var Re=class{constructor(t,r,n){this._ignoreSslError=!1,this._allowRedirects=!0,this._allowRedirectDowngrade=!1,this._maxRedirects=50,this._allowRetries=!1,this._maxRetries=1,this._keepAlive=!1,this._disposed=!1,this.userAgent=t,this.handlers=r||[],this.requestOptions=n,n&&(n.ignoreSslError!=null&&(this._ignoreSslError=n.ignoreSslError),this._socketTimeout=n.socketTimeout,n.allowRedirects!=null&&(this._allowRedirects=n.allowRedirects),n.allowRedirectDowngrade!=null&&(this._allowRedirectDowngrade=n.allowRedirectDowngrade),n.maxRedirects!=null&&(this._maxRedirects=Math.max(n.maxRedirects,0)),n.keepAlive!=null&&(this._keepAlive=n.keepAlive),n.allowRetries!=null&&(this._allowRetries=n.allowRetries),n.maxRetries!=null&&(this._maxRetries=n.maxRetries))}options(t,r){return v(this,void 0,void 0,function*(){return this.request("OPTIONS",t,null,r||{})})}get(t,r){return v(this,void 0,void 0,function*(){return this.request("GET",t,null,r||{})})}del(t,r){return v(this,void 0,void 0,function*(){return this.request("DELETE",t,null,r||{})})}post(t,r,n){return v(this,void 0,void 0,function*(){return this.request("POST",t,r,n||{})})}patch(t,r,n){return v(this,void 0,void 0,function*(){return this.request("PATCH",t,r,n||{})})}put(t,r,n){return v(this,void 0,void 0,function*(){return this.request("PUT",t,r,n||{})})}head(t,r){return v(this,void 0,void 0,function*(){return this.request("HEAD",t,null,r||{})})}sendStream(t,r,n,i){return v(this,void 0,void 0,function*(){return this.request(t,r,n,i)})}getJson(t,r={}){return v(this,void 0,void 0,function*(){r[g.Accept]=this._getExistingOrDefaultHeader(r,g.Accept,M.ApplicationJson);let n=yield this.get(t,r);return this._processResponse(n,this.requestOptions)})}postJson(t,r,n={}){return v(this,void 0,void 0,function*(){let i=JSON.stringify(r,null,2);n[g.Accept]=this._getExistingOrDefaultHeader(n,g.Accept,M.ApplicationJson),n[g.ContentType]=this._getExistingOrDefaultHeader(n,g.ContentType,M.ApplicationJson);let s=yield this.post(t,i,n);return this._processResponse(s,this.requestOptions)})}putJson(t,r,n={}){return v(this,void 0,void 0,function*(){let i=JSON.stringify(r,null,2);n[g.Accept]=this._getExistingOrDefaultHeader(n,g.Accept,M.ApplicationJson),n[g.ContentType]=this._getExistingOrDefaultHeader(n,g.ContentType,M.ApplicationJson);let s=yield this.put(t,i,n);return this._processResponse(s,this.requestOptions)})}patchJson(t,r,n={}){return v(this,void 0,void 0,function*(){let i=JSON.stringify(r,null,2);n[g.Accept]=this._getExistingOrDefaultHeader(n,g.Accept,M.ApplicationJson),n[g.ContentType]=this._getExistingOrDefaultHeader(n,g.ContentType,M.ApplicationJson);let s=yield this.patch(t,i,n);return this._processResponse(s,this.requestOptions)})}request(t,r,n,i){return v(this,void 0,void 0,function*(){if(this._disposed)throw new Error("Client has already been disposed.");let s=new URL(r),o=this._prepareRequest(t,s,i),c=this._allowRetries&&un.includes(t)?this._maxRetries+1:1,l=0,u;do{if(u=yield this.requestRaw(o,n),u&&u.message&&u.message.statusCode===q.Unauthorized){let d;for(let h of this.handlers)if(h.canHandleAuthentication(u)){d=h;break}return d?d.handleAuthentication(this,o,n):u}let a=this._maxRedirects;for(;u.message.statusCode&&sn.includes(u.message.statusCode)&&this._allowRedirects&&a>0;){let d=u.message.headers.location;if(!d)break;let h=new URL(d);if(s.protocol==="https:"&&s.protocol!==h.protocol&&!this._allowRedirectDowngrade)throw new Error("Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.");if(yield u.readBody(),h.hostname!==s.hostname)for(let C in i)C.toLowerCase()==="authorization"&&delete i[C];o=this._prepareRequest(t,h,i),u=yield this.requestRaw(o,n),a--}if(!u.message.statusCode||!on.includes(u.message.statusCode))return u;l+=1,l<c&&(yield u.readBody(),yield this._performExponentialBackoff(l))}while(l<c);return u})}dispose(){this._agent&&this._agent.destroy(),this._disposed=!0}requestRaw(t,r){return v(this,void 0,void 0,function*(){return new Promise((n,i)=>{function s(o,c){o?i(o):c?n(c):i(new Error("Unknown error"))}this.requestRawWithCallback(t,r,s)})})}requestRawWithCallback(t,r,n){typeof r=="string"&&(t.options.headers||(t.options.headers={}),t.options.headers["Content-Length"]=Buffer.byteLength(r,"utf8"));let i=!1;function s(l,u){i||(i=!0,n(l,u))}let o=t.httpModule.request(t.options,l=>{let u=new ae(l);s(void 0,u)}),c;o.on("socket",l=>{c=l}),o.setTimeout(this._socketTimeout||3*6e4,()=>{c&&c.end(),s(new Error(`Request timeout: ${t.options.path}`))}),o.on("error",function(l){s(l)}),r&&typeof r=="string"&&o.write(r,"utf8"),r&&typeof r!="string"?(r.on("close",function(){o.end()}),r.pipe(o)):o.end()}getAgent(t){let r=new URL(t);return this._getAgent(r)}_prepareRequest(t,r,n){let i={};i.parsedUrl=r;let s=i.parsedUrl.protocol==="https:";i.httpModule=s?Oe:se;let o=s?443:80;if(i.options={},i.options.host=i.parsedUrl.hostname,i.options.port=i.parsedUrl.port?parseInt(i.parsedUrl.port):o,i.options.path=(i.parsedUrl.pathname||"")+(i.parsedUrl.search||""),i.options.method=t,i.options.headers=this._mergeHeaders(n),this.userAgent!=null&&(i.options.headers["user-agent"]=this.userAgent),i.options.agent=this._getAgent(i.parsedUrl),this.handlers)for(let c of this.handlers)c.prepareRequest(i.options);return i}_mergeHeaders(t){return this.requestOptions&&this.requestOptions.headers?Object.assign({},ue(this.requestOptions.headers),ue(t||{})):ue(t||{})}_getExistingOrDefaultHeader(t,r,n){let i;return this.requestOptions&&this.requestOptions.headers&&(i=ue(this.requestOptions.headers)[r]),t[r]||i||n}_getAgent(t){let r,n=pt.getProxyUrl(t),i=n&&n.hostname;if(this._keepAlive&&i&&(r=this._proxyAgent),this._keepAlive&&!i&&(r=this._agent),r)return r;let s=t.protocol==="https:",o=100;if(this.requestOptions&&(o=this.requestOptions.maxSockets||se.globalAgent.maxSockets),n&&n.hostname){let c={maxSockets:o,keepAlive:this._keepAlive,proxy:Object.assign(Object.assign({},(n.username||n.password)&&{proxyAuth:`${n.username}:${n.password}`}),{host:n.hostname,port:n.port})},l,u=n.protocol==="https:";s?l=u?oe.httpsOverHttps:oe.httpsOverHttp:l=u?oe.httpOverHttps:oe.httpOverHttp,r=l(c),this._proxyAgent=r}if(this._keepAlive&&!r){let c={keepAlive:this._keepAlive,maxSockets:o};r=s?new Oe.Agent(c):new se.Agent(c),this._agent=r}return r||(r=s?Oe.globalAgent:se.globalAgent),s&&this._ignoreSslError&&(r.options=Object.assign(r.options||{},{rejectUnauthorized:!1})),r}_performExponentialBackoff(t){return v(this,void 0,void 0,function*(){t=Math.min(an,t);let r=cn*Math.pow(2,t);return new Promise(n=>setTimeout(()=>n(),r))})}_processResponse(t,r){return v(this,void 0,void 0,function*(){return new Promise((n,i)=>v(this,void 0,void 0,function*(){let s=t.message.statusCode||0,o={statusCode:s,result:null,headers:{}};s===q.NotFound&&n(o);function c(a,d){if(typeof d=="string"){let h=new Date(d);if(!isNaN(h.valueOf()))return h}return d}let l,u;try{u=yield t.readBody(),u&&u.length>0&&(r&&r.deserializeDates?l=JSON.parse(u,c):l=JSON.parse(u),o.result=l),o.headers=t.message.headers}catch{}if(s>299){let a;l&&l.message?a=l.message:u&&u.length>0?a=u:a=`Failed request: (${s})`;let d=new k(a,s);d.result=o.result,i(d)}else n(o)}))})}};p.HttpClient=Re;var ue=e=>Object.keys(e).reduce((t,r)=>(t[r.toLowerCase()]=e[r],t),{})});var vt=_(b=>{"use strict";var be=b&&b.__awaiter||function(e,t,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function c(a){try{u(n.next(a))}catch(d){o(d)}}function l(a){try{u(n.throw(a))}catch(d){o(d)}}function u(a){a.done?s(a.value):i(a.value).then(c,l)}u((n=n.apply(e,t||[])).next())})};Object.defineProperty(b,"__esModule",{value:!0});b.PersonalAccessTokenCredentialHandler=b.BearerCredentialHandler=b.BasicCredentialHandler=void 0;var Pe=class{constructor(t,r){this.username=t,this.password=r}prepareRequest(t){if(!t.headers)throw Error("The request has no headers");t.headers.Authorization=`Basic ${Buffer.from(`${this.username}:${this.password}`).toString("base64")}`}canHandleAuthentication(){return!1}handleAuthentication(){return be(this,void 0,void 0,function*(){throw new Error("not implemented")})}};b.BasicCredentialHandler=Pe;var Ee=class{constructor(t){this.token=t}prepareRequest(t){if(!t.headers)throw Error("The request has no headers");t.headers.Authorization=`Bearer ${this.token}`}canHandleAuthentication(){return!1}handleAuthentication(){return be(this,void 0,void 0,function*(){throw new Error("not implemented")})}};b.BearerCredentialHandler=Ee;var qe=class{constructor(t){this.token=t}prepareRequest(t){if(!t.headers)throw Error("The request has no headers");t.headers.Authorization=`Basic ${Buffer.from(`PAT:${this.token}`).toString("base64")}`}canHandleAuthentication(){return!1}handleAuthentication(){return be(this,void 0,void 0,function*(){throw new Error("not implemented")})}};b.PersonalAccessTokenCredentialHandler=qe});var yt=_($=>{"use strict";var mt=$&&$.__awaiter||function(e,t,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function c(a){try{u(n.next(a))}catch(d){o(d)}}function l(a){try{u(n.throw(a))}catch(d){o(d)}}function u(a){a.done?s(a.value):i(a.value).then(c,l)}u((n=n.apply(e,t||[])).next())})};Object.defineProperty($,"__esModule",{value:!0});$.OidcClient=void 0;var fn=_t(),dn=vt(),gt=Se(),x=class{static createHttpClient(t=!0,r=10){let n={allowRetries:t,maxRetries:r};return new fn.HttpClient("actions/oidc-client",[new dn.BearerCredentialHandler(x.getRequestToken())],n)}static getRequestToken(){let t=process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN;if(!t)throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable");return t}static getIDTokenUrl(){let t=process.env.ACTIONS_ID_TOKEN_REQUEST_URL;if(!t)throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable");return t}static getCall(t){var r;return mt(this,void 0,void 0,function*(){let s=(r=(yield x.createHttpClient().getJson(t).catch(o=>{throw new Error(`Failed to get ID Token. 
 
        Error Code : ${o.statusCode}
 
        Error Message: ${o.result.message}`)})).result)===null||r===void 0?void 0:r.value;if(!s)throw new Error("Response json body do not have ID Token field");return s})}static getIDToken(t){return mt(this,void 0,void 0,function*(){try{let r=x.getIDTokenUrl();if(t){let i=encodeURIComponent(t);r=`${r}&audience=${i}`}gt.debug(`ID token url is ${r}`);let n=yield x.getCall(r);return gt.setSecret(n),n}catch(r){throw new Error(`Error message: ${r.message}`)}})}};$.OidcClient=x});var xe=_(y=>{"use strict";var Te=y&&y.__awaiter||function(e,t,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function c(a){try{u(n.next(a))}catch(d){o(d)}}function l(a){try{u(n.throw(a))}catch(d){o(d)}}function u(a){a.done?s(a.value):i(a.value).then(c,l)}u((n=n.apply(e,t||[])).next())})};Object.defineProperty(y,"__esModule",{value:!0});y.summary=y.markdownSummary=y.SUMMARY_DOCS_URL=y.SUMMARY_ENV_VAR=void 0;var hn=require("os"),Ae=require("fs"),{access:pn,appendFile:_n,writeFile:vn}=Ae.promises;y.SUMMARY_ENV_VAR="GITHUB_STEP_SUMMARY";y.SUMMARY_DOCS_URL="https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary";var Me=class{constructor(){this._buffer=""}filePath(){return Te(this,void 0,void 0,function*(){if(this._filePath)return this._filePath;let t=process.env[y.SUMMARY_ENV_VAR];if(!t)throw new Error(`Unable to find environment variable for $${y.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`);try{yield pn(t,Ae.constants.R_OK|Ae.constants.W_OK)}catch{throw new Error(`Unable to access summary file: '${t}'. Check if the file has correct read/write permissions.`)}return this._filePath=t,this._filePath})}wrap(t,r,n={}){let i=Object.entries(n).map(([s,o])=>` ${s}="${o}"`).join("");return r?`<${t}${i}>${r}</${t}>`:`<${t}${i}>`}write(t){return Te(this,void 0,void 0,function*(){let r=!!(t!=null&&t.overwrite),n=yield this.filePath();return yield(r?vn:_n)(n,this._buffer,{encoding:"utf8"}),this.emptyBuffer()})}clear(){return Te(this,void 0,void 0,function*(){return this.emptyBuffer().write({overwrite:!0})})}stringify(){return this._buffer}isEmptyBuffer(){return this._buffer.length===0}emptyBuffer(){return this._buffer="",this}addRaw(t,r=!1){return this._buffer+=t,r?this.addEOL():this}addEOL(){return this.addRaw(hn.EOL)}addCodeBlock(t,r){let n=Object.assign({},r&&{lang:r}),i=this.wrap("pre",this.wrap("code",t),n);return this.addRaw(i).addEOL()}addList(t,r=!1){let n=r?"ol":"ul",i=t.map(o=>this.wrap("li",o)).join(""),s=this.wrap(n,i);return this.addRaw(s).addEOL()}addTable(t){let r=t.map(i=>{let s=i.map(o=>{if(typeof o=="string")return this.wrap("td",o);let{header:c,data:l,colspan:u,rowspan:a}=o,d=c?"th":"td",h=Object.assign(Object.assign({},u&&{colspan:u}),a&&{rowspan:a});return this.wrap(d,l,h)}).join("");return this.wrap("tr",s)}).join(""),n=this.wrap("table",r);return this.addRaw(n).addEOL()}addDetails(t,r){let n=this.wrap("details",this.wrap("summary",t)+r);return this.addRaw(n).addEOL()}addImage(t,r,n){let{width:i,height:s}=n||{},o=Object.assign(Object.assign({},i&&{width:i}),s&&{height:s}),c=this.wrap("img",null,Object.assign({src:t,alt:r},o));return this.addRaw(c).addEOL()}addHeading(t,r){let n=`h${r}`,i=["h1","h2","h3","h4","h5","h6"].includes(n)?n:"h1",s=this.wrap(i,t);return this.addRaw(s).addEOL()}addSeparator(){let t=this.wrap("hr",null);return this.addRaw(t).addEOL()}addBreak(){let t=this.wrap("br",null);return this.addRaw(t).addEOL()}addQuote(t,r){let n=Object.assign({},r&&{cite:r}),i=this.wrap("blockquote",t,n);return this.addRaw(i).addEOL()}addLink(t,r){let n=this.wrap("a",t,{href:r});return this.addRaw(n).addEOL()}},wt=new Me;y.markdownSummary=wt;y.summary=wt});var Ot=_(w=>{"use strict";var mn=w&&w.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),gn=w&&w.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),yn=w&&w.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.hasOwnProperty.call(e,r)&&mn(t,e,r);return gn(t,e),t};Object.defineProperty(w,"__esModule",{value:!0});w.toPlatformPath=w.toWin32Path=w.toPosixPath=void 0;var wn=yn(require("path"));function On(e){return e.replace(/[\\]/g,"/")}w.toPosixPath=On;function Rn(e){return e.replace(/[/]/g,"\\")}w.toWin32Path=Rn;function Pn(e){return e.replace(/[/\\]/g,wn.sep)}w.toPlatformPath=Pn});var Se=_(f=>{"use strict";var En=f&&f.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),qn=f&&f.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),Rt=f&&f.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.hasOwnProperty.call(e,r)&&En(t,e,r);return qn(t,e),t},Pt=f&&f.__awaiter||function(e,t,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function c(a){try{u(n.next(a))}catch(d){o(d)}}function l(a){try{u(n.throw(a))}catch(d){o(d)}}function u(a){a.done?s(a.value):i(a.value).then(c,l)}u((n=n.apply(e,t||[])).next())})};Object.defineProperty(f,"__esModule",{value:!0});f.getIDToken=f.getState=f.saveState=f.group=f.endGroup=f.startGroup=f.info=f.notice=f.warning=f.error=f.debug=f.isDebug=f.setFailed=f.setCommandEcho=f.setOutput=f.getBooleanInput=f.getMultilineInput=f.getInput=f.addPath=f.setSecret=f.exportVariable=f.ExitCode=void 0;var P=Ne(),D=st(),L=G(),Et=Rt(require("os")),bn=Rt(require("path")),Sn=yt(),qt;(function(e){e[e.Success=0]="Success",e[e.Failure=1]="Failure"})(qt=f.ExitCode||(f.ExitCode={}));function Tn(e,t){let r=L.toCommandValue(t);if(process.env[e]=r,process.env.GITHUB_ENV||"")return D.issueFileCommand("ENV",D.prepareKeyValueMessage(e,t));P.issueCommand("set-env",{name:e},r)}f.exportVariable=Tn;function An(e){P.issueCommand("add-mask",{},e)}f.setSecret=An;function Mn(e){process.env.GITHUB_PATH||""?D.issueFileCommand("PATH",e):P.issueCommand("add-path",{},e),process.env.PATH=`${e}${bn.delimiter}${process.env.PATH}`}f.addPath=Mn;function Ue(e,t){let r=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!r)throw new Error(`Input required and not supplied: ${e}`);return t&&t.trimWhitespace===!1?r:r.trim()}f.getInput=Ue;function xn(e,t){let r=Ue(e,t).split(`
`).filter(n=>n!=="");return t&&t.trimWhitespace===!1?r:r.map(n=>n.trim())}f.getMultilineInput=xn;function Un(e,t){let r=["true","True","TRUE"],n=["false","False","FALSE"],i=Ue(e,t);if(r.includes(i))return!0;if(n.includes(i))return!1;throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${e}
Support boolean input list: \`true | True | TRUE | false | False | FALSE\``)}f.getBooleanInput=Un;function Dn(e,t){if(process.env.GITHUB_OUTPUT||"")return D.issueFileCommand("OUTPUT",D.prepareKeyValueMessage(e,t));process.stdout.write(Et.EOL),P.issueCommand("set-output",{name:e},L.toCommandValue(t))}f.setOutput=Dn;function Cn(e){P.issue("echo",e?"on":"off")}f.setCommandEcho=Cn;function Bn(e){process.exitCode=qt.Failure,bt(e)}f.setFailed=Bn;function In(){return process.env.RUNNER_DEBUG==="1"}f.isDebug=In;function Nn(e){P.issueCommand("debug",{},e)}f.debug=Nn;function bt(e,t={}){P.issueCommand("error",L.toCommandProperties(t),e instanceof Error?e.toString():e)}f.error=bt;function kn(e,t={}){P.issueCommand("warning",L.toCommandProperties(t),e instanceof Error?e.toString():e)}f.warning=kn;function $n(e,t={}){P.issueCommand("notice",L.toCommandProperties(t),e instanceof Error?e.toString():e)}f.notice=$n;function Ln(e){process.stdout.write(e+Et.EOL)}f.info=Ln;function St(e){P.issue("group",e)}f.startGroup=St;function Tt(){P.issue("endgroup")}f.endGroup=Tt;function jn(e,t){return Pt(this,void 0,void 0,function*(){St(e);let r;try{r=yield t()}finally{Tt()}return r})}f.group=jn;function Vn(e,t){if(process.env.GITHUB_STATE||"")return D.issueFileCommand("STATE",D.prepareKeyValueMessage(e,t));P.issueCommand("save-state",{name:e},L.toCommandValue(t))}f.saveState=Vn;function Fn(e){return process.env[`STATE_${e}`]||""}f.getState=Fn;function Gn(e){return Pt(this,void 0,void 0,function*(){return yield Sn.OidcClient.getIDToken(e)})}f.getIDToken=Gn;var Jn=xe();Object.defineProperty(f,"summary",{enumerable:!0,get:function(){return Jn.summary}});var Kn=xe();Object.defineProperty(f,"markdownSummary",{enumerable:!0,get:function(){return Kn.markdownSummary}});var De=Ot();Object.defineProperty(f,"toPosixPath",{enumerable:!0,get:function(){return De.toPosixPath}});Object.defineProperty(f,"toWin32Path",{enumerable:!0,get:function(){return De.toWin32Path}});Object.defineProperty(f,"toPlatformPath",{enumerable:!0,get:function(){return De.toPlatformPath}})});var zn=Se(),Yn=zn.getInput("person");console.log(`Hello ${Yn}!`);
//# sourceMappingURL=index.js.map
