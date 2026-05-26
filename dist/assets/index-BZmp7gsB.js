var xd=Object.defineProperty;var Sd=(n,t,e)=>t in n?xd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var os=(n,t,e)=>Sd(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ec="162",Ii={ROTATE:0,DOLLY:1,PAN:2},Ui={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ed=0,Vc=1,bd=2,Ku=1,Md=2,An=3,ei=0,ke=1,Cn=2,Jn=0,er=1,Wc=2,Xc=3,jc=4,wd=5,gi=100,Td=101,Ad=102,qc=103,Yc=104,Cd=200,Rd=201,Ld=202,Dd=203,Ia=204,Ua=205,Pd=206,Id=207,Ud=208,Nd=209,Od=210,Fd=211,kd=212,Bd=213,zd=214,Gd=0,Hd=1,Vd=2,Gs=3,Wd=4,Xd=5,jd=6,qd=7,Zu=0,Yd=1,$d=2,Qn=0,Kd=1,Zd=2,Jd=3,Qd=4,tp=5,ep=6,np=7,Ju=300,cr=301,lr=302,Na=303,Oa=304,uo=306,Fa=1e3,on=1001,ka=1002,Ue=1003,$c=1004,Cr=1005,Fe=1006,Fo=1007,vi=1008,ti=1009,ip=1010,rp=1011,nc=1012,Qu=1013,Kn=1014,Rn=1015,Nr=1016,th=1017,eh=1018,yi=1020,sp=1021,an=1023,op=1024,ap=1025,xi=1026,ur=1027,cp=1028,nh=1029,lp=1030,ih=1031,rh=1033,ko=33776,Bo=33777,zo=33778,Go=33779,Kc=35840,Zc=35841,Jc=35842,Qc=35843,sh=36196,tl=37492,el=37496,nl=37808,il=37809,rl=37810,sl=37811,ol=37812,al=37813,cl=37814,ll=37815,ul=37816,hl=37817,fl=37818,dl=37819,pl=37820,ml=37821,Ho=36492,gl=36494,_l=36495,up=36283,vl=36284,yl=36285,xl=36286,hp=3200,fp=3201,dp=0,pp=1,Yn="",fn="srgb",si="srgb-linear",ic="display-p3",ho="display-p3-linear",Hs="linear",ie="srgb",Vs="rec709",Ws="p3",Ni=7680,Sl=519,mp=512,gp=513,_p=514,oh=515,vp=516,yp=517,xp=518,Sp=519,El=35044,bl="300 es",Ba=1035,Ln=2e3,Xs=2001;class Li{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ns=Math.PI/180,za=180/Math.PI;function jr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]).toLowerCase()}function Ne(n,t,e){return Math.max(t,Math.min(e,n))}function Ep(n,t){return(n%t+t)%t}function Vo(n,t,e){return(1-e)*n+e*t}function Ml(n){return(n&n-1)===0&&n!==0}function Ga(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Rr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Oe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const bp={DEG2RAD:Ns};class Ft{constructor(t=0,e=0){Ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,i,r,s,a,o,c,h){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,h)}set(t,e,i,r,s,a,o,c,h){const d=this.elements;return d[0]=t,d[1]=r,d[2]=o,d[3]=e,d[4]=s,d[5]=c,d[6]=i,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],c=i[6],h=i[1],d=i[4],l=i[7],f=i[2],g=i[5],v=i[8],E=r[0],y=r[3],_=r[6],C=r[1],x=r[4],b=r[7],T=r[2],A=r[5],M=r[8];return s[0]=a*E+o*C+c*T,s[3]=a*y+o*x+c*A,s[6]=a*_+o*b+c*M,s[1]=h*E+d*C+l*T,s[4]=h*y+d*x+l*A,s[7]=h*_+d*b+l*M,s[2]=f*E+g*C+v*T,s[5]=f*y+g*x+v*A,s[8]=f*_+g*b+v*M,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],h=t[7],d=t[8];return e*a*d-e*o*h-i*s*d+i*o*c+r*s*h-r*a*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],h=t[7],d=t[8],l=d*a-o*h,f=o*c-d*s,g=h*s-a*c,v=e*l+i*f+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/v;return t[0]=l*E,t[1]=(r*h-d*i)*E,t[2]=(o*i-r*a)*E,t[3]=f*E,t[4]=(d*e-r*c)*E,t[5]=(r*s-o*e)*E,t[6]=g*E,t[7]=(i*c-h*e)*E,t[8]=(a*e-i*s)*E,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const c=Math.cos(s),h=Math.sin(s);return this.set(i*c,i*h,-i*(c*a+h*o)+a+t,-r*h,r*c,-r*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Wo.makeScale(t,e)),this}rotate(t){return this.premultiply(Wo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Wo=new Wt;function ah(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function js(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Mp(){const n=js("canvas");return n.style.display="block",n}const wl={};function wp(n){n in wl||(wl[n]=!0,console.warn(n))}const Tl=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Al=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),as={[si]:{transfer:Hs,primaries:Vs,toReference:n=>n,fromReference:n=>n},[fn]:{transfer:ie,primaries:Vs,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ho]:{transfer:Hs,primaries:Ws,toReference:n=>n.applyMatrix3(Al),fromReference:n=>n.applyMatrix3(Tl)},[ic]:{transfer:ie,primaries:Ws,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Al),fromReference:n=>n.applyMatrix3(Tl).convertLinearToSRGB()}},Tp=new Set([si,ho]),Qt={enabled:!0,_workingColorSpace:si,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Tp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=as[t].toReference,r=as[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return as[n].primaries},getTransfer:function(n){return n===Yn?Hs:as[n].transfer}};function nr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Oi;class ch{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Oi===void 0&&(Oi=js("canvas")),Oi.width=t.width,Oi.height=t.height;const i=Oi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=js("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=nr(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(nr(e[i]/255)*255):e[i]=nr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ap=0;class lh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=jr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(jo(r[a].image)):s.push(jo(r[a]))}else s=jo(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function jo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ch.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cp=0;class Be extends Li{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,i=on,r=on,s=Fe,a=vi,o=an,c=ti,h=Be.DEFAULT_ANISOTROPY,d=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=jr(),this.name="",this.source=new lh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ju)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fa:t.x=t.x-Math.floor(t.x);break;case on:t.x=t.x<0?0:1;break;case ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fa:t.y=t.y-Math.floor(t.y);break;case on:t.y=t.y<0?0:1;break;case ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=Ju;Be.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,i=0,r=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,h=c[0],d=c[4],l=c[8],f=c[1],g=c[5],v=c[9],E=c[2],y=c[6],_=c[10];if(Math.abs(d-f)<.01&&Math.abs(l-E)<.01&&Math.abs(v-y)<.01){if(Math.abs(d+f)<.1&&Math.abs(l+E)<.1&&Math.abs(v+y)<.1&&Math.abs(h+g+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(h+1)/2,b=(g+1)/2,T=(_+1)/2,A=(d+f)/4,M=(l+E)/4,P=(v+y)/4;return x>b&&x>T?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=M/i):b>T?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=A/r,s=P/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=M/s,r=P/s),this.set(i,r,s,e),this}let C=Math.sqrt((y-v)*(y-v)+(l-E)*(l-E)+(f-d)*(f-d));return Math.abs(C)<.001&&(C=1),this.x=(y-v)/C,this.y=(l-E)/C,this.z=(f-d)/C,this.w=Math.acos((h+g+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rp extends Li{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fe,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new Be(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new lh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends Rp{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class uh extends Be{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lp extends Be{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mi{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let c=i[r+0],h=i[r+1],d=i[r+2],l=i[r+3];const f=s[a+0],g=s[a+1],v=s[a+2],E=s[a+3];if(o===0){t[e+0]=c,t[e+1]=h,t[e+2]=d,t[e+3]=l;return}if(o===1){t[e+0]=f,t[e+1]=g,t[e+2]=v,t[e+3]=E;return}if(l!==E||c!==f||h!==g||d!==v){let y=1-o;const _=c*f+h*g+d*v+l*E,C=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const T=Math.sqrt(x),A=Math.atan2(T,_*C);y=Math.sin(y*A)/T,o=Math.sin(o*A)/T}const b=o*C;if(c=c*y+f*b,h=h*y+g*b,d=d*y+v*b,l=l*y+E*b,y===1-o){const T=1/Math.sqrt(c*c+h*h+d*d+l*l);c*=T,h*=T,d*=T,l*=T}}t[e]=c,t[e+1]=h,t[e+2]=d,t[e+3]=l}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],c=i[r+1],h=i[r+2],d=i[r+3],l=s[a],f=s[a+1],g=s[a+2],v=s[a+3];return t[e]=o*v+d*l+c*g-h*f,t[e+1]=c*v+d*f+h*l-o*g,t[e+2]=h*v+d*g+o*f-c*l,t[e+3]=d*v-o*l-c*f-h*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(i/2),d=o(r/2),l=o(s/2),f=c(i/2),g=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=f*d*l+h*g*v,this._y=h*g*l-f*d*v,this._z=h*d*v+f*g*l,this._w=h*d*l-f*g*v;break;case"YXZ":this._x=f*d*l+h*g*v,this._y=h*g*l-f*d*v,this._z=h*d*v-f*g*l,this._w=h*d*l+f*g*v;break;case"ZXY":this._x=f*d*l-h*g*v,this._y=h*g*l+f*d*v,this._z=h*d*v+f*g*l,this._w=h*d*l-f*g*v;break;case"ZYX":this._x=f*d*l-h*g*v,this._y=h*g*l+f*d*v,this._z=h*d*v-f*g*l,this._w=h*d*l+f*g*v;break;case"YZX":this._x=f*d*l+h*g*v,this._y=h*g*l+f*d*v,this._z=h*d*v-f*g*l,this._w=h*d*l-f*g*v;break;case"XZY":this._x=f*d*l-h*g*v,this._y=h*g*l-f*d*v,this._z=h*d*v+f*g*l,this._w=h*d*l+f*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],h=e[2],d=e[6],l=e[10],f=i+o+l;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(d-c)*g,this._y=(s-h)*g,this._z=(a-r)*g}else if(i>o&&i>l){const g=2*Math.sqrt(1+i-o-l);this._w=(d-c)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+h)/g}else if(o>l){const g=2*Math.sqrt(1+o-i-l);this._w=(s-h)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(c+d)/g}else{const g=2*Math.sqrt(1+l-i-o);this._w=(a-r)/g,this._x=(s+h)/g,this._y=(c+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,h=e._z,d=e._w;return this._x=i*d+a*o+r*h-s*c,this._y=r*d+a*c+s*o-i*h,this._z=s*d+a*h+i*c-r*o,this._w=a*d-i*o-r*c-s*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const g=1-e;return this._w=g*a+e*this._w,this._x=g*i+e*this._x,this._y=g*r+e*this._y,this._z=g*s+e*this._z,this.normalize(),this}const h=Math.sqrt(c),d=Math.atan2(h,o),l=Math.sin((1-e)*d)/h,f=Math.sin(e*d)/h;return this._w=a*l+this._w*f,this._x=i*l+this._x*f,this._y=r*l+this._y*f,this._z=s*l+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,e=0,i=0){X.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*r-o*i),d=2*(o*e-s*r),l=2*(s*i-a*e);return this.x=e+c*h+a*l-o*d,this.y=i+c*d+o*h-s*l,this.z=r+c*l+s*d-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return qo.copy(this).projectOnVector(t),this.sub(qo)}reflect(t){return this.sub(qo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qo=new X,Cl=new Mi;class qr{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,nn):nn.fromBufferAttribute(s,a),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cs.copy(i.boundingBox)),cs.applyMatrix4(t.matrixWorld),this.union(cs)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Lr),ls.subVectors(this.max,Lr),Fi.subVectors(t.a,Lr),ki.subVectors(t.b,Lr),Bi.subVectors(t.c,Lr),zn.subVectors(ki,Fi),Gn.subVectors(Bi,ki),li.subVectors(Fi,Bi);let e=[0,-zn.z,zn.y,0,-Gn.z,Gn.y,0,-li.z,li.y,zn.z,0,-zn.x,Gn.z,0,-Gn.x,li.z,0,-li.x,-zn.y,zn.x,0,-Gn.y,Gn.x,0,-li.y,li.x,0];return!Yo(e,Fi,ki,Bi,ls)||(e=[1,0,0,0,1,0,0,0,1],!Yo(e,Fi,ki,Bi,ls))?!1:(us.crossVectors(zn,Gn),e=[us.x,us.y,us.z],Yo(e,Fi,ki,Bi,ls))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Sn=[new X,new X,new X,new X,new X,new X,new X,new X],nn=new X,cs=new qr,Fi=new X,ki=new X,Bi=new X,zn=new X,Gn=new X,li=new X,Lr=new X,ls=new X,us=new X,ui=new X;function Yo(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ui.fromArray(n,s);const o=r.x*Math.abs(ui.x)+r.y*Math.abs(ui.y)+r.z*Math.abs(ui.z),c=t.dot(ui),h=e.dot(ui),d=i.dot(ui);if(Math.max(-Math.max(c,h,d),Math.min(c,h,d))>o)return!1}return!0}const Dp=new qr,Dr=new X,$o=new X;class fo{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Dp.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Dr.subVectors(t,this.center);const e=Dr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Dr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($o.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Dr.copy(t.center).add($o)),this.expandByPoint(Dr.copy(t.center).sub($o))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new X,Ko=new X,hs=new X,Hn=new X,Zo=new X,fs=new X,Jo=new X;class rc{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Ko.copy(t).add(e).multiplyScalar(.5),hs.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(Ko);const s=t.distanceTo(e)*.5,a=-this.direction.dot(hs),o=Hn.dot(this.direction),c=-Hn.dot(hs),h=Hn.lengthSq(),d=Math.abs(1-a*a);let l,f,g,v;if(d>0)if(l=a*c-o,f=a*o-c,v=s*d,l>=0)if(f>=-v)if(f<=v){const E=1/d;l*=E,f*=E,g=l*(l+a*f+2*o)+f*(a*l+f+2*c)+h}else f=s,l=Math.max(0,-(a*f+o)),g=-l*l+f*(f+2*c)+h;else f=-s,l=Math.max(0,-(a*f+o)),g=-l*l+f*(f+2*c)+h;else f<=-v?(l=Math.max(0,-(-a*s+o)),f=l>0?-s:Math.min(Math.max(-s,-c),s),g=-l*l+f*(f+2*c)+h):f<=v?(l=0,f=Math.min(Math.max(-s,-c),s),g=f*(f+2*c)+h):(l=Math.max(0,-(a*s+o)),f=l>0?s:Math.min(Math.max(-s,-c),s),g=-l*l+f*(f+2*c)+h);else f=a>0?-s:s,l=Math.max(0,-(a*f+o)),g=-l*l+f*(f+2*c)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,l),r&&r.copy(Ko).addScaledVector(hs,f),g}intersectSphere(t,e){En.subVectors(t.center,this.origin);const i=En.dot(this.direction),r=En.dot(En)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,c;const h=1/this.direction.x,d=1/this.direction.y,l=1/this.direction.z,f=this.origin;return h>=0?(i=(t.min.x-f.x)*h,r=(t.max.x-f.x)*h):(i=(t.max.x-f.x)*h,r=(t.min.x-f.x)*h),d>=0?(s=(t.min.y-f.y)*d,a=(t.max.y-f.y)*d):(s=(t.max.y-f.y)*d,a=(t.min.y-f.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),l>=0?(o=(t.min.z-f.z)*l,c=(t.max.z-f.z)*l):(o=(t.max.z-f.z)*l,c=(t.min.z-f.z)*l),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,i,r,s){Zo.subVectors(e,t),fs.subVectors(i,t),Jo.crossVectors(Zo,fs);let a=this.direction.dot(Jo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,t);const c=o*this.direction.dot(fs.crossVectors(Hn,fs));if(c<0)return null;const h=o*this.direction.dot(Zo.cross(Hn));if(h<0||c+h>a)return null;const d=-o*Hn.dot(Jo);return d<0?null:this.at(d/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,i,r,s,a,o,c,h,d,l,f,g,v,E,y){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,h,d,l,f,g,v,E,y)}set(t,e,i,r,s,a,o,c,h,d,l,f,g,v,E,y){const _=this.elements;return _[0]=t,_[4]=e,_[8]=i,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=c,_[2]=h,_[6]=d,_[10]=l,_[14]=f,_[3]=g,_[7]=v,_[11]=E,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/zi.setFromMatrixColumn(t,0).length(),s=1/zi.setFromMatrixColumn(t,1).length(),a=1/zi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),h=Math.sin(r),d=Math.cos(s),l=Math.sin(s);if(t.order==="XYZ"){const f=a*d,g=a*l,v=o*d,E=o*l;e[0]=c*d,e[4]=-c*l,e[8]=h,e[1]=g+v*h,e[5]=f-E*h,e[9]=-o*c,e[2]=E-f*h,e[6]=v+g*h,e[10]=a*c}else if(t.order==="YXZ"){const f=c*d,g=c*l,v=h*d,E=h*l;e[0]=f+E*o,e[4]=v*o-g,e[8]=a*h,e[1]=a*l,e[5]=a*d,e[9]=-o,e[2]=g*o-v,e[6]=E+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*d,g=c*l,v=h*d,E=h*l;e[0]=f-E*o,e[4]=-a*l,e[8]=v+g*o,e[1]=g+v*o,e[5]=a*d,e[9]=E-f*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*d,g=a*l,v=o*d,E=o*l;e[0]=c*d,e[4]=v*h-g,e[8]=f*h+E,e[1]=c*l,e[5]=E*h+f,e[9]=g*h-v,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,g=a*h,v=o*c,E=o*h;e[0]=c*d,e[4]=E-f*l,e[8]=v*l+g,e[1]=l,e[5]=a*d,e[9]=-o*d,e[2]=-h*d,e[6]=g*l+v,e[10]=f-E*l}else if(t.order==="XZY"){const f=a*c,g=a*h,v=o*c,E=o*h;e[0]=c*d,e[4]=-l,e[8]=h*d,e[1]=f*l+E,e[5]=a*d,e[9]=g*l-v,e[2]=v*l-g,e[6]=o*d,e[10]=E*l+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pp,t,Ip)}lookAt(t,e,i){const r=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Vn.crossVectors(i,He),Vn.lengthSq()===0&&(Math.abs(i.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Vn.crossVectors(i,He)),Vn.normalize(),ds.crossVectors(He,Vn),r[0]=Vn.x,r[4]=ds.x,r[8]=He.x,r[1]=Vn.y,r[5]=ds.y,r[9]=He.y,r[2]=Vn.z,r[6]=ds.z,r[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],c=i[8],h=i[12],d=i[1],l=i[5],f=i[9],g=i[13],v=i[2],E=i[6],y=i[10],_=i[14],C=i[3],x=i[7],b=i[11],T=i[15],A=r[0],M=r[4],P=r[8],k=r[12],S=r[1],w=r[5],z=r[9],H=r[13],N=r[2],K=r[6],j=r[10],it=r[14],tt=r[3],$=r[7],at=r[11],ht=r[15];return s[0]=a*A+o*S+c*N+h*tt,s[4]=a*M+o*w+c*K+h*$,s[8]=a*P+o*z+c*j+h*at,s[12]=a*k+o*H+c*it+h*ht,s[1]=d*A+l*S+f*N+g*tt,s[5]=d*M+l*w+f*K+g*$,s[9]=d*P+l*z+f*j+g*at,s[13]=d*k+l*H+f*it+g*ht,s[2]=v*A+E*S+y*N+_*tt,s[6]=v*M+E*w+y*K+_*$,s[10]=v*P+E*z+y*j+_*at,s[14]=v*k+E*H+y*it+_*ht,s[3]=C*A+x*S+b*N+T*tt,s[7]=C*M+x*w+b*K+T*$,s[11]=C*P+x*z+b*j+T*at,s[15]=C*k+x*H+b*it+T*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],h=t[13],d=t[2],l=t[6],f=t[10],g=t[14],v=t[3],E=t[7],y=t[11],_=t[15];return v*(+s*c*l-r*h*l-s*o*f+i*h*f+r*o*g-i*c*g)+E*(+e*c*g-e*h*f+s*a*f-r*a*g+r*h*d-s*c*d)+y*(+e*h*l-e*o*g-s*a*l+i*a*g+s*o*d-i*h*d)+_*(-r*o*d-e*c*l+e*o*f+r*a*l-i*a*f+i*c*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],h=t[7],d=t[8],l=t[9],f=t[10],g=t[11],v=t[12],E=t[13],y=t[14],_=t[15],C=l*y*h-E*f*h+E*c*g-o*y*g-l*c*_+o*f*_,x=v*f*h-d*y*h-v*c*g+a*y*g+d*c*_-a*f*_,b=d*E*h-v*l*h+v*o*g-a*E*g-d*o*_+a*l*_,T=v*l*c-d*E*c-v*o*f+a*E*f+d*o*y-a*l*y,A=e*C+i*x+r*b+s*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/A;return t[0]=C*M,t[1]=(E*f*s-l*y*s-E*r*g+i*y*g+l*r*_-i*f*_)*M,t[2]=(o*y*s-E*c*s+E*r*h-i*y*h-o*r*_+i*c*_)*M,t[3]=(l*c*s-o*f*s-l*r*h+i*f*h+o*r*g-i*c*g)*M,t[4]=x*M,t[5]=(d*y*s-v*f*s+v*r*g-e*y*g-d*r*_+e*f*_)*M,t[6]=(v*c*s-a*y*s-v*r*h+e*y*h+a*r*_-e*c*_)*M,t[7]=(a*f*s-d*c*s+d*r*h-e*f*h-a*r*g+e*c*g)*M,t[8]=b*M,t[9]=(v*l*s-d*E*s-v*i*g+e*E*g+d*i*_-e*l*_)*M,t[10]=(a*E*s-v*o*s+v*i*h-e*E*h-a*i*_+e*o*_)*M,t[11]=(d*o*s-a*l*s-d*i*h+e*l*h+a*i*g-e*o*g)*M,t[12]=T*M,t[13]=(d*E*r-v*l*r+v*i*f-e*E*f-d*i*y+e*l*y)*M,t[14]=(v*o*r-a*E*r-v*i*c+e*E*c+a*i*y-e*o*y)*M,t[15]=(a*l*r-d*o*r+d*i*c-e*l*c-a*i*f+e*o*f)*M,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,c=t.z,h=s*a,d=s*o;return this.set(h*a+i,h*o-r*c,h*c+r*o,0,h*o+r*c,d*o+i,d*c-r*a,0,h*c-r*o,d*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,h=s+s,d=a+a,l=o+o,f=s*h,g=s*d,v=s*l,E=a*d,y=a*l,_=o*l,C=c*h,x=c*d,b=c*l,T=i.x,A=i.y,M=i.z;return r[0]=(1-(E+_))*T,r[1]=(g+b)*T,r[2]=(v-x)*T,r[3]=0,r[4]=(g-b)*A,r[5]=(1-(f+_))*A,r[6]=(y+C)*A,r[7]=0,r[8]=(v+x)*M,r[9]=(y-C)*M,r[10]=(1-(f+E))*M,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=zi.set(r[0],r[1],r[2]).length();const a=zi.set(r[4],r[5],r[6]).length(),o=zi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],rn.copy(this);const h=1/s,d=1/a,l=1/o;return rn.elements[0]*=h,rn.elements[1]*=h,rn.elements[2]*=h,rn.elements[4]*=d,rn.elements[5]*=d,rn.elements[6]*=d,rn.elements[8]*=l,rn.elements[9]*=l,rn.elements[10]*=l,e.setFromRotationMatrix(rn),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=Ln){const c=this.elements,h=2*s/(e-t),d=2*s/(i-r),l=(e+t)/(e-t),f=(i+r)/(i-r);let g,v;if(o===Ln)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Xs)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Ln){const c=this.elements,h=1/(e-t),d=1/(i-r),l=1/(a-s),f=(e+t)*h,g=(i+r)*d;let v,E;if(o===Ln)v=(a+s)*l,E=-2*l;else if(o===Xs)v=s*l,E=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=E,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const zi=new X,rn=new le,Pp=new X(0,0,0),Ip=new X(1,1,1),Vn=new X,ds=new X,He=new X,Rl=new le,Ll=new Mi;class Un{constructor(t=0,e=0,i=0,r=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],h=r[5],d=r[9],l=r[2],f=r[6],g=r[10];switch(e){case"XYZ":this._y=Math.asin(Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-l,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-l,g),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-l,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Rl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ll.setFromEuler(this),this.setFromQuaternion(Ll,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class hh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Up=0;const Dl=new X,Gi=new Mi,bn=new le,ps=new X,Pr=new X,Np=new X,Op=new Mi,Pl=new X(1,0,0),Il=new X(0,1,0),Ul=new X(0,0,1),Fp={type:"added"},kp={type:"removed"},Qo={type:"childadded",child:null},ta={type:"childremoved",child:null};class we extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new X,e=new Un,i=new Mi,r=new X(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new le},normalMatrix:{value:new Wt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(Pl,t)}rotateY(t){return this.rotateOnAxis(Il,t)}rotateZ(t){return this.rotateOnAxis(Ul,t)}translateOnAxis(t,e){return Dl.copy(t).applyQuaternion(this.quaternion),this.position.add(Dl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pl,t)}translateY(t){return this.translateOnAxis(Il,t)}translateZ(t){return this.translateOnAxis(Ul,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ps.copy(t):ps.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(Pr,ps,this.up):bn.lookAt(ps,Pr,this.up),this.quaternion.setFromRotationMatrix(bn),r&&(bn.extractRotation(r.matrixWorld),Gi.setFromRotationMatrix(bn),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Fp),Qo.child=t,this.dispatchEvent(Qo),Qo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kp),ta.child=t,this.dispatchEvent(ta),ta.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,t,Np),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,Op,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,d=c.length;h<d;h++){const l=c[h];s(t.shapes,l)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),h=a(t.textures),d=a(t.images),l=a(t.shapes),f=a(t.skeletons),g=a(t.animations),v=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),d.length>0&&(i.images=d),l.length>0&&(i.shapes=l),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const c=[];for(const h in o){const d=o[h];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}we.DEFAULT_UP=new X(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new X,Mn=new X,ea=new X,wn=new X,Hi=new X,Vi=new X,Nl=new X,na=new X,ia=new X,ra=new X;class pn{constructor(t=new X,e=new X,i=new X){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),sn.subVectors(t,e),r.cross(sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){sn.subVectors(r,e),Mn.subVectors(i,e),ea.subVectors(t,e);const a=sn.dot(sn),o=sn.dot(Mn),c=sn.dot(ea),h=Mn.dot(Mn),d=Mn.dot(ea),l=a*h-o*o;if(l===0)return s.set(0,0,0),null;const f=1/l,g=(h*c-o*d)*f,v=(a*d-o*c)*f;return s.set(1-g-v,v,g)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(t,e,i,r,s,a,o,c){return this.getBarycoord(t,e,i,r,wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,wn.x),c.addScaledVector(a,wn.y),c.addScaledVector(o,wn.z),c)}static isFrontFacing(t,e,i,r){return sn.subVectors(i,e),Mn.subVectors(t,e),sn.cross(Mn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),sn.cross(Mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return pn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;Hi.subVectors(r,i),Vi.subVectors(s,i),na.subVectors(t,i);const c=Hi.dot(na),h=Vi.dot(na);if(c<=0&&h<=0)return e.copy(i);ia.subVectors(t,r);const d=Hi.dot(ia),l=Vi.dot(ia);if(d>=0&&l<=d)return e.copy(r);const f=c*l-d*h;if(f<=0&&c>=0&&d<=0)return a=c/(c-d),e.copy(i).addScaledVector(Hi,a);ra.subVectors(t,s);const g=Hi.dot(ra),v=Vi.dot(ra);if(v>=0&&g<=v)return e.copy(s);const E=g*h-c*v;if(E<=0&&h>=0&&v<=0)return o=h/(h-v),e.copy(i).addScaledVector(Vi,o);const y=d*v-g*l;if(y<=0&&l-d>=0&&g-v>=0)return Nl.subVectors(s,r),o=(l-d)/(l-d+(g-v)),e.copy(r).addScaledVector(Nl,o);const _=1/(y+E+f);return a=E*_,o=f*_,e.copy(i).addScaledVector(Hi,a).addScaledVector(Vi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},ms={h:0,s:0,l:0};function sa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Yt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Qt.workingColorSpace){if(t=Ep(t,1),e=Ne(e,0,1),i=Ne(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=sa(a,s,t+1/3),this.g=sa(a,s,t),this.b=sa(a,s,t-1/3)}return Qt.toWorkingColorSpace(this,r),this}setStyle(t,e=fn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fn){const i=fh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=nr(t.r),this.g=nr(t.g),this.b=nr(t.b),this}copyLinearToSRGB(t){return this.r=Xo(t.r),this.g=Xo(t.g),this.b=Xo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return Qt.fromWorkingColorSpace(Le.copy(this),t),Math.round(Ne(Le.r*255,0,255))*65536+Math.round(Ne(Le.g*255,0,255))*256+Math.round(Ne(Le.b*255,0,255))}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Le.copy(this),e);const i=Le.r,r=Le.g,s=Le.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,h;const d=(o+a)/2;if(o===a)c=0,h=0;else{const l=a-o;switch(h=d<=.5?l/(a+o):l/(2-a-o),a){case i:c=(r-s)/l+(r<s?6:0);break;case r:c=(s-i)/l+2;break;case s:c=(i-r)/l+4;break}c/=6}return t.h=c,t.s=h,t.l=d,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=fn){Qt.fromWorkingColorSpace(Le.copy(this),t);const e=Le.r,i=Le.g,r=Le.b;return t!==fn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(ms);const i=Vo(Wn.h,ms.h,e),r=Vo(Wn.s,ms.s,e),s=Vo(Wn.l,ms.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new Yt;Yt.NAMES=fh;let Bp=0;class Yr extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=jr(),this.name="",this.type="Material",this.blending=er,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ia,this.blendDst=Ua,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(i.blending=this.blending),this.side!==ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ia&&(i.blendSrc=this.blendSrc),this.blendDst!==Ua&&(i.blendDst=this.blendDst),this.blendEquation!==gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class dh extends Yr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Zu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const he=new X,gs=new Ft;class mn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=El,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return wp("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)gs.fromBufferAttribute(this,e),gs.applyMatrix3(t),this.setXY(e,gs.x,gs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.applyMatrix3(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.applyMatrix4(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.applyNormalMatrix(t),this.setXYZ(e,he.x,he.y,he.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.transformDirection(t),this.setXYZ(e,he.x,he.y,he.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Rr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Oe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),r=Oe(r,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==El&&(t.usage=this.usage),t}}class ph extends mn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class mh extends mn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class cn extends mn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let zp=0;const Ye=new le,oa=new we,Wi=new X,Ve=new qr,Ir=new qr,ve=new X;class Fn extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=jr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ah(t)?mh:ph)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Wt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,i){return Ye.makeTranslation(t,e,i),this.applyMatrix4(Ye),this}scale(t,e,i){return Ye.makeScale(t,e,i),this.applyMatrix4(Ye),this}lookAt(t){return oa.lookAt(t),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new cn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Ve.setFromBufferAttribute(s),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const i=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Ir.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(Ve.min,Ir.min),Ve.expandByPoint(ve),ve.addVectors(Ve.max,Ir.max),Ve.expandByPoint(ve)):(Ve.expandByPoint(Ir.min),Ve.expandByPoint(Ir.max))}Ve.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)ve.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(ve));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let h=0,d=o.count;h<d;h++)ve.fromBufferAttribute(o,h),c&&(Wi.fromBufferAttribute(t,h),ve.add(Wi)),r=Math.max(r,i.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<i.count;P++)o[P]=new X,c[P]=new X;const h=new X,d=new X,l=new X,f=new Ft,g=new Ft,v=new Ft,E=new X,y=new X;function _(P,k,S){h.fromBufferAttribute(i,P),d.fromBufferAttribute(i,k),l.fromBufferAttribute(i,S),f.fromBufferAttribute(s,P),g.fromBufferAttribute(s,k),v.fromBufferAttribute(s,S),d.sub(h),l.sub(h),g.sub(f),v.sub(f);const w=1/(g.x*v.y-v.x*g.y);isFinite(w)&&(E.copy(d).multiplyScalar(v.y).addScaledVector(l,-g.y).multiplyScalar(w),y.copy(l).multiplyScalar(g.x).addScaledVector(d,-v.x).multiplyScalar(w),o[P].add(E),o[k].add(E),o[S].add(E),c[P].add(y),c[k].add(y),c[S].add(y))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let P=0,k=C.length;P<k;++P){const S=C[P],w=S.start,z=S.count;for(let H=w,N=w+z;H<N;H+=3)_(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const x=new X,b=new X,T=new X,A=new X;function M(P){T.fromBufferAttribute(r,P),A.copy(T);const k=o[P];x.copy(k),x.sub(T.multiplyScalar(T.dot(k))).normalize(),b.crossVectors(A,k);const w=b.dot(c[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,w)}for(let P=0,k=C.length;P<k;++P){const S=C[P],w=S.start,z=S.count;for(let H=w,N=w+z;H<N;H+=3)M(t.getX(H+0)),M(t.getX(H+1)),M(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new X,s=new X,a=new X,o=new X,c=new X,h=new X,d=new X,l=new X;if(t)for(let f=0,g=t.count;f<g;f+=3){const v=t.getX(f+0),E=t.getX(f+1),y=t.getX(f+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,E),a.fromBufferAttribute(e,y),d.subVectors(a,s),l.subVectors(r,s),d.cross(l),o.fromBufferAttribute(i,v),c.fromBufferAttribute(i,E),h.fromBufferAttribute(i,y),o.add(d),c.add(d),h.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(y,h.x,h.y,h.z)}else for(let f=0,g=e.count;f<g;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),d.subVectors(a,s),l.subVectors(r,s),d.cross(l),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,c){const h=o.array,d=o.itemSize,l=o.normalized,f=new h.constructor(c.length*d);let g=0,v=0;for(let E=0,y=c.length;E<y;E++){o.isInterleavedBufferAttribute?g=c[E]*o.data.stride+o.offset:g=c[E]*d;for(let _=0;_<d;_++)f[v++]=h[g++]}return new mn(f,d,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],h=t(c,i);e.setAttribute(o,h)}const s=this.morphAttributes;for(const o in s){const c=[],h=s[o];for(let d=0,l=h.length;d<l;d++){const f=h[d],g=t(f,i);c.push(g)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const h=i[c];t.data.attributes[c]=h.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],d=[];for(let l=0,f=h.length;l<f;l++){const g=h[l];d.push(g.toJSON(t.data))}d.length>0&&(r[c]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const h in r){const d=r[h];this.setAttribute(h,d.clone(e))}const s=t.morphAttributes;for(const h in s){const d=[],l=s[h];for(let f=0,g=l.length;f<g;f++)d.push(l[f].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,d=a.length;h<d;h++){const l=a[h];this.addGroup(l.start,l.count,l.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ol=new le,hi=new rc,_s=new fo,Fl=new X,Xi=new X,ji=new X,qi=new X,aa=new X,vs=new X,ys=new Ft,xs=new Ft,Ss=new Ft,kl=new X,Bl=new X,zl=new X,Es=new X,bs=new X;class Dn extends we{constructor(t=new Fn,e=new dh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){vs.set(0,0,0);for(let c=0,h=s.length;c<h;c++){const d=o[c],l=s[c];d!==0&&(aa.fromBufferAttribute(l,t),a?vs.addScaledVector(aa,d):vs.addScaledVector(aa.sub(e),d))}e.add(vs)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_s.copy(i.boundingSphere),_s.applyMatrix4(s),hi.copy(t.ray).recast(t.near),!(_s.containsPoint(hi.origin)===!1&&(hi.intersectSphere(_s,Fl)===null||hi.origin.distanceToSquared(Fl)>(t.far-t.near)**2))&&(Ol.copy(s).invert(),hi.copy(t.ray).applyMatrix4(Ol),!(i.boundingBox!==null&&hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,hi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,h=s.attributes.uv,d=s.attributes.uv1,l=s.attributes.normal,f=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,E=f.length;v<E;v++){const y=f[v],_=a[y.materialIndex],C=Math.max(y.start,g.start),x=Math.min(o.count,Math.min(y.start+y.count,g.start+g.count));for(let b=C,T=x;b<T;b+=3){const A=o.getX(b),M=o.getX(b+1),P=o.getX(b+2);r=Ms(this,_,t,i,h,d,l,A,M,P),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=y.materialIndex,e.push(r))}}else{const v=Math.max(0,g.start),E=Math.min(o.count,g.start+g.count);for(let y=v,_=E;y<_;y+=3){const C=o.getX(y),x=o.getX(y+1),b=o.getX(y+2);r=Ms(this,a,t,i,h,d,l,C,x,b),r&&(r.faceIndex=Math.floor(y/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,E=f.length;v<E;v++){const y=f[v],_=a[y.materialIndex],C=Math.max(y.start,g.start),x=Math.min(c.count,Math.min(y.start+y.count,g.start+g.count));for(let b=C,T=x;b<T;b+=3){const A=b,M=b+1,P=b+2;r=Ms(this,_,t,i,h,d,l,A,M,P),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=y.materialIndex,e.push(r))}}else{const v=Math.max(0,g.start),E=Math.min(c.count,g.start+g.count);for(let y=v,_=E;y<_;y+=3){const C=y,x=y+1,b=y+2;r=Ms(this,a,t,i,h,d,l,C,x,b),r&&(r.faceIndex=Math.floor(y/3),e.push(r))}}}}function Gp(n,t,e,i,r,s,a,o){let c;if(t.side===ke?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,t.side===ei,o),c===null)return null;bs.copy(o),bs.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(bs);return h<e.near||h>e.far?null:{distance:h,point:bs.clone(),object:n}}function Ms(n,t,e,i,r,s,a,o,c,h){n.getVertexPosition(o,Xi),n.getVertexPosition(c,ji),n.getVertexPosition(h,qi);const d=Gp(n,t,e,i,Xi,ji,qi,Es);if(d){r&&(ys.fromBufferAttribute(r,o),xs.fromBufferAttribute(r,c),Ss.fromBufferAttribute(r,h),d.uv=pn.getInterpolation(Es,Xi,ji,qi,ys,xs,Ss,new Ft)),s&&(ys.fromBufferAttribute(s,o),xs.fromBufferAttribute(s,c),Ss.fromBufferAttribute(s,h),d.uv1=pn.getInterpolation(Es,Xi,ji,qi,ys,xs,Ss,new Ft)),a&&(kl.fromBufferAttribute(a,o),Bl.fromBufferAttribute(a,c),zl.fromBufferAttribute(a,h),d.normal=pn.getInterpolation(Es,Xi,ji,qi,kl,Bl,zl,new X),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const l={a:o,b:c,c:h,normal:new X,materialIndex:0};pn.getNormal(Xi,ji,qi,l.normal),d.face=l}return d}class $r extends Fn{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],h=[],d=[],l=[];let f=0,g=0;v("z","y","x",-1,-1,i,e,t,a,s,0),v("z","y","x",1,-1,i,e,-t,a,s,1),v("x","z","y",1,1,t,i,e,r,a,2),v("x","z","y",1,-1,t,i,-e,r,a,3),v("x","y","z",1,-1,t,e,i,r,s,4),v("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new cn(h,3)),this.setAttribute("normal",new cn(d,3)),this.setAttribute("uv",new cn(l,2));function v(E,y,_,C,x,b,T,A,M,P,k){const S=b/M,w=T/P,z=b/2,H=T/2,N=A/2,K=M+1,j=P+1;let it=0,tt=0;const $=new X;for(let at=0;at<j;at++){const ht=at*w-H;for(let vt=0;vt<K;vt++){const bt=vt*S-z;$[E]=bt*C,$[y]=ht*x,$[_]=N,h.push($.x,$.y,$.z),$[E]=0,$[y]=0,$[_]=A>0?1:-1,d.push($.x,$.y,$.z),l.push(vt/M),l.push(1-at/P),it+=1}}for(let at=0;at<P;at++)for(let ht=0;ht<M;ht++){const vt=f+ht+K*at,bt=f+ht+K*(at+1),q=f+(ht+1)+K*(at+1),ct=f+(ht+1)+K*at;c.push(vt,bt,ct),c.push(bt,q,ct),tt+=6}o.addGroup(g,tt,k),g+=tt,f+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ie(n){const t={};for(let e=0;e<n.length;e++){const i=hr(n[e]);for(const r in i)t[r]=i[r]}return t}function Hp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function gh(n){return n.getRenderTarget()===null?n.outputColorSpace:Qt.workingColorSpace}const Vp={clone:hr,merge:Ie};var Wp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends Yr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wp,this.fragmentShader=Xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hr(t.uniforms),this.uniformsGroups=Hp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class _h extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Ln}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new X,Gl=new Ft,Hl=new Ft;class $e extends _h{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=za*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return za*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,Gl,Hl),e.subVectors(Hl,Gl)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ns*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*i/h,r*=a.width/c,i*=a.height/h}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Yi=-90,$i=1;class jp extends we{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $e(Yi,$i,t,e);r.layers=this.layers,this.add(r);const s=new $e(Yi,$i,t,e);s.layers=this.layers,this.add(s);const a=new $e(Yi,$i,t,e);a.layers=this.layers,this.add(a);const o=new $e(Yi,$i,t,e);o.layers=this.layers,this.add(o);const c=new $e(Yi,$i,t,e);c.layers=this.layers,this.add(c);const h=new $e(Yi,$i,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,c]=e;for(const h of e)this.remove(h);if(t===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Xs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,h,d]=this.children,l=t.getRenderTarget(),f=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,h),i.texture.generateMipmaps=E,t.setRenderTarget(i,5,r),t.render(e,d),t.setRenderTarget(l,f,g),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class vh extends Be{constructor(t,e,i,r,s,a,o,c,h,d){t=t!==void 0?t:[],e=e!==void 0?e:cr,super(t,e,i,r,s,a,o,c,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qp extends bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new vh(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Fe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new $r(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ke,blending:Jn});s.uniforms.tEquirect.value=e;const a=new Dn(r,s),o=e.minFilter;return e.minFilter===vi&&(e.minFilter=Fe),new jp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}const ca=new X,Yp=new X,$p=new Wt;class jn{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=ca.subVectors(i,e).cross(Yp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ca),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||$p.getNormalMatrix(t),r=this.coplanarPoint(ca).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new fo,ws=new X;class sc{constructor(t=new jn,e=new jn,i=new jn,r=new jn,s=new jn,a=new jn){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ln){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],h=r[4],d=r[5],l=r[6],f=r[7],g=r[8],v=r[9],E=r[10],y=r[11],_=r[12],C=r[13],x=r[14],b=r[15];if(i[0].setComponents(c-s,f-h,y-g,b-_).normalize(),i[1].setComponents(c+s,f+h,y+g,b+_).normalize(),i[2].setComponents(c+a,f+d,y+v,b+C).normalize(),i[3].setComponents(c-a,f-d,y-v,b-C).normalize(),i[4].setComponents(c-o,f-l,y-E,b-x).normalize(),e===Ln)i[5].setComponents(c+o,f+l,y+E,b+x).normalize();else if(e===Xs)i[5].setComponents(o,l,E,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(ws.x=r.normal.x>0?t.max.x:t.min.x,ws.y=r.normal.y>0?t.max.y:t.min.y,ws.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ws)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yh(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Kp(n,t){const e=t.isWebGL2,i=new WeakMap;function r(h,d){const l=h.array,f=h.usage,g=l.byteLength,v=n.createBuffer();n.bindBuffer(d,v),n.bufferData(d,l,f),h.onUploadCallback();let E;if(l instanceof Float32Array)E=n.FLOAT;else if(l instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(e)E=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)E=n.SHORT;else if(l instanceof Uint32Array)E=n.UNSIGNED_INT;else if(l instanceof Int32Array)E=n.INT;else if(l instanceof Int8Array)E=n.BYTE;else if(l instanceof Uint8Array)E=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)E=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:v,type:E,bytesPerElement:l.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,d,l){const f=d.array,g=d._updateRange,v=d.updateRanges;if(n.bindBuffer(l,h),g.count===-1&&v.length===0&&n.bufferSubData(l,0,f),v.length!==0){for(let E=0,y=v.length;E<y;E++){const _=v[E];e?n.bufferSubData(l,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count):n.bufferSubData(l,_.start*f.BYTES_PER_ELEMENT,f.subarray(_.start,_.start+_.count))}d.clearUpdateRanges()}g.count!==-1&&(e?n.bufferSubData(l,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):n.bufferSubData(l,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=i.get(h);d&&(n.deleteBuffer(d.buffer),i.delete(h))}function c(h,d){if(h.isGLBufferAttribute){const f=i.get(h);(!f||f.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const l=i.get(h);if(l===void 0)i.set(h,r(h,d));else if(l.version<h.version){if(l.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(l.buffer,h,d),l.version=h.version}}return{get:a,remove:o,update:c}}class po extends Fn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),c=Math.floor(r),h=o+1,d=c+1,l=t/o,f=e/c,g=[],v=[],E=[],y=[];for(let _=0;_<d;_++){const C=_*f-a;for(let x=0;x<h;x++){const b=x*l-s;v.push(b,-C,0),E.push(0,0,1),y.push(x/o),y.push(1-_/c)}}for(let _=0;_<c;_++)for(let C=0;C<o;C++){const x=C+h*_,b=C+h*(_+1),T=C+1+h*(_+1),A=C+1+h*_;g.push(x,b,A),g.push(b,T,A)}this.setIndex(g),this.setAttribute("position",new cn(v,3)),this.setAttribute("normal",new cn(E,3)),this.setAttribute("uv",new cn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new po(t.width,t.height,t.widthSegments,t.heightSegments)}}var Zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,em=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,im=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sm=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,om=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,am=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,um=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Em=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Am="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Rm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,km=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$m=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Km=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ng=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ig=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,og=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ag=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ug=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,dg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,mg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ag=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ug=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ng=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Og=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,r_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,s_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,o_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,a_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,f_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,g_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,__=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,v_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,y_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,E_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,T_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,R_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,L_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:Zp,alphahash_pars_fragment:Jp,alphamap_fragment:Qp,alphamap_pars_fragment:tm,alphatest_fragment:em,alphatest_pars_fragment:nm,aomap_fragment:im,aomap_pars_fragment:rm,batching_pars_vertex:sm,batching_vertex:om,begin_vertex:am,beginnormal_vertex:cm,bsdfs:lm,iridescence_fragment:um,bumpmap_pars_fragment:hm,clipping_planes_fragment:fm,clipping_planes_pars_fragment:dm,clipping_planes_pars_vertex:pm,clipping_planes_vertex:mm,color_fragment:gm,color_pars_fragment:_m,color_pars_vertex:vm,color_vertex:ym,common:xm,cube_uv_reflection_fragment:Sm,defaultnormal_vertex:Em,displacementmap_pars_vertex:bm,displacementmap_vertex:Mm,emissivemap_fragment:wm,emissivemap_pars_fragment:Tm,colorspace_fragment:Am,colorspace_pars_fragment:Cm,envmap_fragment:Rm,envmap_common_pars_fragment:Lm,envmap_pars_fragment:Dm,envmap_pars_vertex:Pm,envmap_physical_pars_fragment:Wm,envmap_vertex:Im,fog_vertex:Um,fog_pars_vertex:Nm,fog_fragment:Om,fog_pars_fragment:Fm,gradientmap_pars_fragment:km,lightmap_fragment:Bm,lightmap_pars_fragment:zm,lights_lambert_fragment:Gm,lights_lambert_pars_fragment:Hm,lights_pars_begin:Vm,lights_toon_fragment:Xm,lights_toon_pars_fragment:jm,lights_phong_fragment:qm,lights_phong_pars_fragment:Ym,lights_physical_fragment:$m,lights_physical_pars_fragment:Km,lights_fragment_begin:Zm,lights_fragment_maps:Jm,lights_fragment_end:Qm,logdepthbuf_fragment:tg,logdepthbuf_pars_fragment:eg,logdepthbuf_pars_vertex:ng,logdepthbuf_vertex:ig,map_fragment:rg,map_pars_fragment:sg,map_particle_fragment:og,map_particle_pars_fragment:ag,metalnessmap_fragment:cg,metalnessmap_pars_fragment:lg,morphinstance_vertex:ug,morphcolor_vertex:hg,morphnormal_vertex:fg,morphtarget_pars_vertex:dg,morphtarget_vertex:pg,normal_fragment_begin:mg,normal_fragment_maps:gg,normal_pars_fragment:_g,normal_pars_vertex:vg,normal_vertex:yg,normalmap_pars_fragment:xg,clearcoat_normal_fragment_begin:Sg,clearcoat_normal_fragment_maps:Eg,clearcoat_pars_fragment:bg,iridescence_pars_fragment:Mg,opaque_fragment:wg,packing:Tg,premultiplied_alpha_fragment:Ag,project_vertex:Cg,dithering_fragment:Rg,dithering_pars_fragment:Lg,roughnessmap_fragment:Dg,roughnessmap_pars_fragment:Pg,shadowmap_pars_fragment:Ig,shadowmap_pars_vertex:Ug,shadowmap_vertex:Ng,shadowmask_pars_fragment:Og,skinbase_vertex:Fg,skinning_pars_vertex:kg,skinning_vertex:Bg,skinnormal_vertex:zg,specularmap_fragment:Gg,specularmap_pars_fragment:Hg,tonemapping_fragment:Vg,tonemapping_pars_fragment:Wg,transmission_fragment:Xg,transmission_pars_fragment:jg,uv_pars_fragment:qg,uv_pars_vertex:Yg,uv_vertex:$g,worldpos_vertex:Kg,background_vert:Zg,background_frag:Jg,backgroundCube_vert:Qg,backgroundCube_frag:t_,cube_vert:e_,cube_frag:n_,depth_vert:i_,depth_frag:r_,distanceRGBA_vert:s_,distanceRGBA_frag:o_,equirect_vert:a_,equirect_frag:c_,linedashed_vert:l_,linedashed_frag:u_,meshbasic_vert:h_,meshbasic_frag:f_,meshlambert_vert:d_,meshlambert_frag:p_,meshmatcap_vert:m_,meshmatcap_frag:g_,meshnormal_vert:__,meshnormal_frag:v_,meshphong_vert:y_,meshphong_frag:x_,meshphysical_vert:S_,meshphysical_frag:E_,meshtoon_vert:b_,meshtoon_frag:M_,points_vert:w_,points_frag:T_,shadow_vert:A_,shadow_frag:C_,sprite_vert:R_,sprite_frag:L_},mt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},dn={basic:{uniforms:Ie([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ie([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ie([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ie([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ie([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ie([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ie([mt.points,mt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ie([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ie([mt.common,mt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ie([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ie([mt.sprite,mt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Ie([mt.common,mt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Ie([mt.lights,mt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};dn.physical={uniforms:Ie([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Ts={r:0,b:0,g:0},di=new Un,D_=new le;function P_(n,t,e,i,r,s,a){const o=new Yt(0);let c=s===!0?0:1,h,d,l=null,f=0,g=null;function v(y,_){let C=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?e:t).get(x)),x===null?E(o,c):x&&x.isColor&&(E(x,1),C=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||C)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===uo)?(d===void 0&&(d=new Dn(new $r(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:hr(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(T,A,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),di.copy(_.backgroundRotation),di.x*=-1,di.y*=-1,di.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(D_.makeRotationFromEuler(di)),d.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ie,(l!==x||f!==x.version||g!==n.toneMapping)&&(d.material.needsUpdate=!0,l=x,f=x.version,g=n.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(h===void 0&&(h=new Dn(new po(2,2),new ni({name:"BackgroundMaterial",uniforms:hr(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=x,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ie,x.matrixAutoUpdate===!0&&x.updateMatrix(),h.material.uniforms.uvTransform.value.copy(x.matrix),(l!==x||f!==x.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,l=x,f=x.version,g=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function E(y,_){y.getRGB(Ts,gh(n)),i.buffers.color.setClear(Ts.r,Ts.g,Ts.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),c=_,E(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,E(o,c)},render:v}}function I_(n,t,e,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},c=y(null);let h=c,d=!1;function l(N,K,j,it,tt){let $=!1;if(a){const at=E(it,j,K);h!==at&&(h=at,g(h.object)),$=_(N,it,j,tt),$&&C(N,it,j,tt)}else{const at=K.wireframe===!0;(h.geometry!==it.id||h.program!==j.id||h.wireframe!==at)&&(h.geometry=it.id,h.program=j.id,h.wireframe=at,$=!0)}tt!==null&&e.update(tt,n.ELEMENT_ARRAY_BUFFER),($||d)&&(d=!1,P(N,K,j,it),tt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(tt).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function g(N){return i.isWebGL2?n.bindVertexArray(N):s.bindVertexArrayOES(N)}function v(N){return i.isWebGL2?n.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function E(N,K,j){const it=j.wireframe===!0;let tt=o[N.id];tt===void 0&&(tt={},o[N.id]=tt);let $=tt[K.id];$===void 0&&($={},tt[K.id]=$);let at=$[it];return at===void 0&&(at=y(f()),$[it]=at),at}function y(N){const K=[],j=[],it=[];for(let tt=0;tt<r;tt++)K[tt]=0,j[tt]=0,it[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:j,attributeDivisors:it,object:N,attributes:{},index:null}}function _(N,K,j,it){const tt=h.attributes,$=K.attributes;let at=0;const ht=j.getAttributes();for(const vt in ht)if(ht[vt].location>=0){const q=tt[vt];let ct=$[vt];if(ct===void 0&&(vt==="instanceMatrix"&&N.instanceMatrix&&(ct=N.instanceMatrix),vt==="instanceColor"&&N.instanceColor&&(ct=N.instanceColor)),q===void 0||q.attribute!==ct||ct&&q.data!==ct.data)return!0;at++}return h.attributesNum!==at||h.index!==it}function C(N,K,j,it){const tt={},$=K.attributes;let at=0;const ht=j.getAttributes();for(const vt in ht)if(ht[vt].location>=0){let q=$[vt];q===void 0&&(vt==="instanceMatrix"&&N.instanceMatrix&&(q=N.instanceMatrix),vt==="instanceColor"&&N.instanceColor&&(q=N.instanceColor));const ct={};ct.attribute=q,q&&q.data&&(ct.data=q.data),tt[vt]=ct,at++}h.attributes=tt,h.attributesNum=at,h.index=it}function x(){const N=h.newAttributes;for(let K=0,j=N.length;K<j;K++)N[K]=0}function b(N){T(N,0)}function T(N,K){const j=h.newAttributes,it=h.enabledAttributes,tt=h.attributeDivisors;j[N]=1,it[N]===0&&(n.enableVertexAttribArray(N),it[N]=1),tt[N]!==K&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,K),tt[N]=K)}function A(){const N=h.newAttributes,K=h.enabledAttributes;for(let j=0,it=K.length;j<it;j++)K[j]!==N[j]&&(n.disableVertexAttribArray(j),K[j]=0)}function M(N,K,j,it,tt,$,at){at===!0?n.vertexAttribIPointer(N,K,j,tt,$):n.vertexAttribPointer(N,K,j,it,tt,$)}function P(N,K,j,it){if(i.isWebGL2===!1&&(N.isInstancedMesh||it.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const tt=it.attributes,$=j.getAttributes(),at=K.defaultAttributeValues;for(const ht in $){const vt=$[ht];if(vt.location>=0){let bt=tt[ht];if(bt===void 0&&(ht==="instanceMatrix"&&N.instanceMatrix&&(bt=N.instanceMatrix),ht==="instanceColor"&&N.instanceColor&&(bt=N.instanceColor)),bt!==void 0){const q=bt.normalized,ct=bt.itemSize,gt=e.get(bt);if(gt===void 0)continue;const Dt=gt.buffer,Ct=gt.type,xt=gt.bytesPerElement,Gt=i.isWebGL2===!0&&(Ct===n.INT||Ct===n.UNSIGNED_INT||bt.gpuType===Qu);if(bt.isInterleavedBufferAttribute){const It=bt.data,V=It.stride,Kt=bt.offset;if(It.isInstancedInterleavedBuffer){for(let Mt=0;Mt<vt.locationSize;Mt++)T(vt.location+Mt,It.meshPerAttribute);N.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=It.meshPerAttribute*It.count)}else for(let Mt=0;Mt<vt.locationSize;Mt++)b(vt.location+Mt);n.bindBuffer(n.ARRAY_BUFFER,Dt);for(let Mt=0;Mt<vt.locationSize;Mt++)M(vt.location+Mt,ct/vt.locationSize,Ct,q,V*xt,(Kt+ct/vt.locationSize*Mt)*xt,Gt)}else{if(bt.isInstancedBufferAttribute){for(let It=0;It<vt.locationSize;It++)T(vt.location+It,bt.meshPerAttribute);N.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let It=0;It<vt.locationSize;It++)b(vt.location+It);n.bindBuffer(n.ARRAY_BUFFER,Dt);for(let It=0;It<vt.locationSize;It++)M(vt.location+It,ct/vt.locationSize,Ct,q,ct*xt,ct/vt.locationSize*It*xt,Gt)}}else if(at!==void 0){const q=at[ht];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(vt.location,q);break;case 3:n.vertexAttrib3fv(vt.location,q);break;case 4:n.vertexAttrib4fv(vt.location,q);break;default:n.vertexAttrib1fv(vt.location,q)}}}}A()}function k(){z();for(const N in o){const K=o[N];for(const j in K){const it=K[j];for(const tt in it)v(it[tt].object),delete it[tt];delete K[j]}delete o[N]}}function S(N){if(o[N.id]===void 0)return;const K=o[N.id];for(const j in K){const it=K[j];for(const tt in it)v(it[tt].object),delete it[tt];delete K[j]}delete o[N.id]}function w(N){for(const K in o){const j=o[K];if(j[N.id]===void 0)continue;const it=j[N.id];for(const tt in it)v(it[tt].object),delete it[tt];delete j[N.id]}}function z(){H(),d=!0,h!==c&&(h=c,g(h.object))}function H(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:l,reset:z,resetDefaultState:H,dispose:k,releaseStatesOfGeometry:S,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:b,disableUnusedAttributes:A}}function U_(n,t,e,i){const r=i.isWebGL2;let s;function a(d){s=d}function o(d,l){n.drawArrays(s,d,l),e.update(l,s,1)}function c(d,l,f){if(f===0)return;let g,v;if(r)g=n,v="drawArraysInstanced";else if(g=t.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[v](s,d,l,f),e.update(l,s,f)}function h(d,l,f){if(f===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<f;v++)this.render(d[v],l[v]);else{g.multiDrawArraysWEBGL(s,d,0,l,0,f);let v=0;for(let E=0;E<f;E++)v+=l[E];e.update(v,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=h}function N_(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const M=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const h=a||t.has("WEBGL_draw_buffers"),d=e.logarithmicDepthBuffer===!0,l=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),E=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,b=a||t.has("OES_texture_float"),T=x&&b,A=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:d,maxTextures:l,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:v,maxAttributes:E,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:C,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:T,maxSamples:A}}function O_(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new jn,o=new Wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,f){const g=l.length!==0||f||i!==0||r;return r=f,i=l.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(l,f){e=d(l,f,0)},this.setState=function(l,f,g){const v=l.clippingPlanes,E=l.clipIntersection,y=l.clipShadows,_=n.get(l);if(!r||v===null||v.length===0||s&&!y)s?d(null):h();else{const C=s?0:i,x=C*4;let b=_.clippingState||null;c.value=b,b=d(v,f,x,g);for(let T=0;T!==x;++T)b[T]=e[T];_.clippingState=b,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=C}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(l,f,g,v){const E=l!==null?l.length:0;let y=null;if(E!==0){if(y=c.value,v!==!0||y===null){const _=g+E*4,C=f.matrixWorldInverse;o.getNormalMatrix(C),(y===null||y.length<_)&&(y=new Float32Array(_));for(let x=0,b=g;x!==E;++x,b+=4)a.copy(l[x]).applyMatrix4(C,o),a.normal.toArray(y,b),y[b+3]=a.constant}c.value=y,c.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,y}}function F_(n){let t=new WeakMap;function e(a,o){return o===Na?a.mapping=cr:o===Oa&&(a.mapping=lr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Na||o===Oa)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new qp(c.height);return h.fromEquirectangularTexture(n,a),t.set(a,h),a.addEventListener("dispose",r),e(h.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class xh extends _h{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Qi=4,Vl=[.125,.215,.35,.446,.526,.582],_i=20,la=new xh,Wl=new Yt;let ua=null,ha=0,fa=0;const mi=(1+Math.sqrt(5))/2,Ki=1/mi,Xl=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,mi,Ki),new X(0,mi,-Ki),new X(Ki,0,mi),new X(-Ki,0,mi),new X(mi,Ki,0),new X(-mi,Ki,0)];class jl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){ua=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ua,ha,fa),t.scissorTest=!1,As(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cr||t.mapping===lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ua=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Fe,minFilter:Fe,generateMipmaps:!1,type:Nr,format:an,colorSpace:si,depthBuffer:!1},r=ql(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ql(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=k_(s)),this._blurMaterial=B_(s,t,e)}return r}_compileMaterial(t){const e=new Dn(this._lodPlanes[0],t);this._renderer.compile(e,la)}_sceneToCubeUV(t,e,i,r){const o=new $e(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,l=d.autoClear,f=d.toneMapping;d.getClearColor(Wl),d.toneMapping=Qn,d.autoClear=!1;const g=new dh({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),v=new Dn(new $r,g);let E=!1;const y=t.background;y?y.isColor&&(g.color.copy(y),t.background=null,E=!0):(g.color.copy(Wl),E=!0);for(let _=0;_<6;_++){const C=_%3;C===0?(o.up.set(0,c[_],0),o.lookAt(h[_],0,0)):C===1?(o.up.set(0,0,c[_]),o.lookAt(0,h[_],0)):(o.up.set(0,c[_],0),o.lookAt(0,0,h[_]));const x=this._cubeSize;As(r,C*x,_>2?x:0,x,x),d.setRenderTarget(r),E&&d.render(v,o),d.render(t,o)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=f,d.autoClear=l,t.background=y}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===cr||t.mapping===lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$l()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Dn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;As(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,la)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xl[(r-1)%Xl.length];this._blur(t,r-1,r,s,a)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,l=new Dn(this._lodPlanes[r],h),f=h.uniforms,g=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*_i-1),E=s/v,y=isFinite(s)?1+Math.floor(d*E):_i;y>_i&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${_i}`);const _=[];let C=0;for(let M=0;M<_i;++M){const P=M/E,k=Math.exp(-P*P/2);_.push(k),M===0?C+=k:M<y&&(C+=2*k)}for(let M=0;M<_.length;M++)_[M]=_[M]/C;f.envMap.value=t.texture,f.samples.value=y,f.weights.value=_,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=v,f.mipInt.value=x-i;const b=this._sizeLods[r],T=3*b*(r>x-Qi?r-x+Qi:0),A=4*(this._cubeSize-b);As(e,T,A,3*b,2*b),c.setRenderTarget(e),c.render(l,la)}}function k_(n){const t=[],e=[],i=[];let r=n;const s=n-Qi+1+Vl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-Qi?c=Vl[a-n+Qi-1]:a===0&&(c=0),i.push(c);const h=1/(o-2),d=-h,l=1+h,f=[d,d,l,d,l,l,d,d,l,l,d,l],g=6,v=6,E=3,y=2,_=1,C=new Float32Array(E*v*g),x=new Float32Array(y*v*g),b=new Float32Array(_*v*g);for(let A=0;A<g;A++){const M=A%3*2/3-1,P=A>2?0:-1,k=[M,P,0,M+2/3,P,0,M+2/3,P+1,0,M,P,0,M+2/3,P+1,0,M,P+1,0];C.set(k,E*v*A),x.set(f,y*v*A);const S=[A,A,A,A,A,A];b.set(S,_*v*A)}const T=new Fn;T.setAttribute("position",new mn(C,E)),T.setAttribute("uv",new mn(x,y)),T.setAttribute("faceIndex",new mn(b,_)),t.push(T),r>Qi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ql(n,t,e){const i=new bi(n,t,e);return i.texture.mapping=uo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function As(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function B_(n,t,e){const i=new Float32Array(_i),r=new X(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Yl(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function $l(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function oc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function z_(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const c=o.mapping,h=c===Na||c===Oa,d=c===cr||c===lr;if(h||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let l=t.get(o);return e===null&&(e=new jl(n)),l=h?e.fromEquirectangular(o,l):e.fromCubemap(o,l),t.set(o,l),l.texture}else{if(t.has(o))return t.get(o).texture;{const l=o.image;if(h&&l&&l.height>0||d&&l&&r(l)){e===null&&(e=new jl(n));const f=h?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let c=0;const h=6;for(let d=0;d<h;d++)o[d]!==void 0&&c++;return c===h}function s(o){const c=o.target;c.removeEventListener("dispose",s);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function G_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function H_(n,t,e,i){const r={},s=new WeakMap;function a(l){const f=l.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const E=f.morphAttributes[v];for(let y=0,_=E.length;y<_;y++)t.remove(E[y])}f.removeEventListener("dispose",a),delete r[f.id];const g=s.get(f);g&&(t.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(l,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,e.memory.geometries++),f}function c(l){const f=l.attributes;for(const v in f)t.update(f[v],n.ARRAY_BUFFER);const g=l.morphAttributes;for(const v in g){const E=g[v];for(let y=0,_=E.length;y<_;y++)t.update(E[y],n.ARRAY_BUFFER)}}function h(l){const f=[],g=l.index,v=l.attributes.position;let E=0;if(g!==null){const C=g.array;E=g.version;for(let x=0,b=C.length;x<b;x+=3){const T=C[x+0],A=C[x+1],M=C[x+2];f.push(T,A,A,M,M,T)}}else if(v!==void 0){const C=v.array;E=v.version;for(let x=0,b=C.length/3-1;x<b;x+=3){const T=x+0,A=x+1,M=x+2;f.push(T,A,A,M,M,T)}}else return;const y=new(ah(f)?mh:ph)(f,1);y.version=E;const _=s.get(l);_&&t.remove(_),s.set(l,y)}function d(l){const f=s.get(l);if(f){const g=l.index;g!==null&&f.version<g.version&&h(l)}else h(l);return s.get(l)}return{get:o,update:c,getWireframeAttribute:d}}function V_(n,t,e,i){const r=i.isWebGL2;let s;function a(g){s=g}let o,c;function h(g){o=g.type,c=g.bytesPerElement}function d(g,v){n.drawElements(s,v,o,g*c),e.update(v,s,1)}function l(g,v,E){if(E===0)return;let y,_;if(r)y=n,_="drawElementsInstanced";else if(y=t.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[_](s,v,o,g*c,E),e.update(v,s,E)}function f(g,v,E){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<E;_++)this.render(g[_]/c,v[_]);else{y.multiDrawElementsWEBGL(s,v,0,o,g,0,E);let _=0;for(let C=0;C<E;C++)_+=v[C];e.update(_,s,1)}}this.setMode=a,this.setIndex=h,this.render=d,this.renderInstances=l,this.renderMultiDraw=f}function W_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function X_(n,t){return n[0]-t[0]}function j_(n,t){return Math.abs(t[1])-Math.abs(n[1])}function q_(n,t,e){const i={},r=new Float32Array(8),s=new WeakMap,a=new Ee,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function c(h,d,l){const f=h.morphTargetInfluences;if(t.isWebGL2===!0){const v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,E=v!==void 0?v.length:0;let y=s.get(d);if(y===void 0||y.count!==E){let H=function(){w.dispose(),s.delete(d),d.removeEventListener("dispose",H)};var g=H;y!==void 0&&y.texture.dispose();const _=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,b=d.morphAttributes.position||[],T=d.morphAttributes.normal||[],A=d.morphAttributes.color||[];let M=0;_===!0&&(M=1),C===!0&&(M=2),x===!0&&(M=3);let P=d.attributes.position.count*M,k=1;P>t.maxTextureSize&&(k=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const S=new Float32Array(P*k*4*E),w=new uh(S,P,k,E);w.type=Rn,w.needsUpdate=!0;const z=M*4;for(let N=0;N<E;N++){const K=b[N],j=T[N],it=A[N],tt=P*k*4*N;for(let $=0;$<K.count;$++){const at=$*z;_===!0&&(a.fromBufferAttribute(K,$),S[tt+at+0]=a.x,S[tt+at+1]=a.y,S[tt+at+2]=a.z,S[tt+at+3]=0),C===!0&&(a.fromBufferAttribute(j,$),S[tt+at+4]=a.x,S[tt+at+5]=a.y,S[tt+at+6]=a.z,S[tt+at+7]=0),x===!0&&(a.fromBufferAttribute(it,$),S[tt+at+8]=a.x,S[tt+at+9]=a.y,S[tt+at+10]=a.z,S[tt+at+11]=it.itemSize===4?a.w:1)}}y={count:E,texture:w,size:new Ft(P,k)},s.set(d,y),d.addEventListener("dispose",H)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",h.morphTexture,e);else{let _=0;for(let x=0;x<f.length;x++)_+=f[x];const C=d.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",C),l.getUniforms().setValue(n,"morphTargetInfluences",f)}l.getUniforms().setValue(n,"morphTargetsTexture",y.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{const v=f===void 0?0:f.length;let E=i[d.id];if(E===void 0||E.length!==v){E=[];for(let b=0;b<v;b++)E[b]=[b,0];i[d.id]=E}for(let b=0;b<v;b++){const T=E[b];T[0]=b,T[1]=f[b]}E.sort(j_);for(let b=0;b<8;b++)b<v&&E[b][1]?(o[b][0]=E[b][0],o[b][1]=E[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(X_);const y=d.morphAttributes.position,_=d.morphAttributes.normal;let C=0;for(let b=0;b<8;b++){const T=o[b],A=T[0],M=T[1];A!==Number.MAX_SAFE_INTEGER&&M?(y&&d.getAttribute("morphTarget"+b)!==y[A]&&d.setAttribute("morphTarget"+b,y[A]),_&&d.getAttribute("morphNormal"+b)!==_[A]&&d.setAttribute("morphNormal"+b,_[A]),r[b]=M,C+=M):(y&&d.hasAttribute("morphTarget"+b)===!0&&d.deleteAttribute("morphTarget"+b),_&&d.hasAttribute("morphNormal"+b)===!0&&d.deleteAttribute("morphNormal"+b),r[b]=0)}const x=d.morphTargetsRelative?1:1-C;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function Y_(n,t,e,i){let r=new WeakMap;function s(c){const h=i.render.frame,d=c.geometry,l=t.get(c,d);if(r.get(l)!==h&&(t.update(l),r.set(l,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return l}function a(){r=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:s,dispose:a}}class Sh extends Be{constructor(t,e,i,r,s,a,o,c,h,d){if(d=d!==void 0?d:xi,d!==xi&&d!==ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===xi&&(i=Kn),i===void 0&&d===ur&&(i=yi),super(null,r,s,a,o,c,d,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ue,this.minFilter=c!==void 0?c:Ue,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Eh=new Be,bh=new Sh(1,1);bh.compareFunction=oh;const Mh=new uh,wh=new Lp,Th=new vh,Kl=[],Zl=[],Jl=new Float32Array(16),Ql=new Float32Array(9),tu=new Float32Array(4);function Sr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Kl[r];if(s===void 0&&(s=new Float32Array(r),Kl[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function pe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function me(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function mo(n,t){let e=Zl[t];e===void 0&&(e=new Int32Array(t),Zl[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function $_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function K_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;n.uniform2fv(this.addr,t),me(e,t)}}function Z_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;n.uniform3fv(this.addr,t),me(e,t)}}function J_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;n.uniform4fv(this.addr,t),me(e,t)}}function Q_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(pe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,i))return;tu.set(i),n.uniformMatrix2fv(this.addr,!1,tu),me(e,i)}}function t0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(pe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,i))return;Ql.set(i),n.uniformMatrix3fv(this.addr,!1,Ql),me(e,i)}}function e0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(pe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,i))return;Jl.set(i),n.uniformMatrix4fv(this.addr,!1,Jl),me(e,i)}}function n0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function i0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;n.uniform2iv(this.addr,t),me(e,t)}}function r0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;n.uniform3iv(this.addr,t),me(e,t)}}function s0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;n.uniform4iv(this.addr,t),me(e,t)}}function o0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function a0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;n.uniform2uiv(this.addr,t),me(e,t)}}function c0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;n.uniform3uiv(this.addr,t),me(e,t)}}function l0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;n.uniform4uiv(this.addr,t),me(e,t)}}function u0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?bh:Eh;e.setTexture2D(t||s,r)}function h0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||wh,r)}function f0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Th,r)}function d0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Mh,r)}function p0(n){switch(n){case 5126:return $_;case 35664:return K_;case 35665:return Z_;case 35666:return J_;case 35674:return Q_;case 35675:return t0;case 35676:return e0;case 5124:case 35670:return n0;case 35667:case 35671:return i0;case 35668:case 35672:return r0;case 35669:case 35673:return s0;case 5125:return o0;case 36294:return a0;case 36295:return c0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return h0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return d0}}function m0(n,t){n.uniform1fv(this.addr,t)}function g0(n,t){const e=Sr(t,this.size,2);n.uniform2fv(this.addr,e)}function _0(n,t){const e=Sr(t,this.size,3);n.uniform3fv(this.addr,e)}function v0(n,t){const e=Sr(t,this.size,4);n.uniform4fv(this.addr,e)}function y0(n,t){const e=Sr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function x0(n,t){const e=Sr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function S0(n,t){const e=Sr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function E0(n,t){n.uniform1iv(this.addr,t)}function b0(n,t){n.uniform2iv(this.addr,t)}function M0(n,t){n.uniform3iv(this.addr,t)}function w0(n,t){n.uniform4iv(this.addr,t)}function T0(n,t){n.uniform1uiv(this.addr,t)}function A0(n,t){n.uniform2uiv(this.addr,t)}function C0(n,t){n.uniform3uiv(this.addr,t)}function R0(n,t){n.uniform4uiv(this.addr,t)}function L0(n,t,e){const i=this.cache,r=t.length,s=mo(e,r);pe(i,s)||(n.uniform1iv(this.addr,s),me(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Eh,s[a])}function D0(n,t,e){const i=this.cache,r=t.length,s=mo(e,r);pe(i,s)||(n.uniform1iv(this.addr,s),me(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||wh,s[a])}function P0(n,t,e){const i=this.cache,r=t.length,s=mo(e,r);pe(i,s)||(n.uniform1iv(this.addr,s),me(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Th,s[a])}function I0(n,t,e){const i=this.cache,r=t.length,s=mo(e,r);pe(i,s)||(n.uniform1iv(this.addr,s),me(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Mh,s[a])}function U0(n){switch(n){case 5126:return m0;case 35664:return g0;case 35665:return _0;case 35666:return v0;case 35674:return y0;case 35675:return x0;case 35676:return S0;case 5124:case 35670:return E0;case 35667:case 35671:return b0;case 35668:case 35672:return M0;case 35669:case 35673:return w0;case 5125:return T0;case 36294:return A0;case 36295:return C0;case 36296:return R0;case 35678:case 36198:case 36298:case 36306:case 35682:return L0;case 35679:case 36299:case 36307:return D0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return I0}}class N0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=p0(e.type)}}class O0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=U0(e.type)}}class F0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const da=/(\w+)(\])?(\[|\.)?/g;function eu(n,t){n.seq.push(t),n.map[t.id]=t}function k0(n,t,e){const i=n.name,r=i.length;for(da.lastIndex=0;;){const s=da.exec(i),a=da.lastIndex;let o=s[1];const c=s[2]==="]",h=s[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===r){eu(e,h===void 0?new N0(o,n,t):new O0(o,n,t));break}else{let l=e.map[o];l===void 0&&(l=new F0(o),eu(e,l)),e=l}}}class Os{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);k0(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function nu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const B0=37297;let z0=0;function G0(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function H0(n){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(n);let i;switch(t===e?i="":t===Ws&&e===Vs?i="LinearDisplayP3ToLinearSRGB":t===Vs&&e===Ws&&(i="LinearSRGBToLinearDisplayP3"),n){case si:case ho:return[i,"LinearTransferOETF"];case fn:case ic:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function iu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+G0(n.getShaderSource(t),a)}else return r}function V0(n,t){const e=H0(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function W0(n,t){let e;switch(t){case Kd:e="Linear";break;case Zd:e="Reinhard";break;case Jd:e="OptimizedCineon";break;case Qd:e="ACESFilmic";break;case ep:e="AgX";break;case np:e="Neutral";break;case tp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function X0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(tr).join(`
`)}function j0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function q0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Y0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function tr(n){return n!==""}function ru(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function su(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ha(n){return n.replace($0,Z0)}const K0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Z0(n,t){let e=Vt[t];if(e===void 0){const i=K0.get(t);if(i!==void 0)e=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ha(e)}const J0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ou(n){return n.replace(J0,Q0)}function Q0(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function au(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(t+=`precision ${n.precision} sampler3D;
		precision ${n.precision} sampler2DArray;
		precision ${n.precision} sampler2DShadow;
		precision ${n.precision} samplerCubeShadow;
		precision ${n.precision} sampler2DArrayShadow;
		precision ${n.precision} isampler2D;
		precision ${n.precision} isampler3D;
		precision ${n.precision} isamplerCube;
		precision ${n.precision} isampler2DArray;
		precision ${n.precision} usampler2D;
		precision ${n.precision} usampler3D;
		precision ${n.precision} usamplerCube;
		precision ${n.precision} usampler2DArray;
		`),n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function tv(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ku?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Md?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function ev(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case cr:case lr:t="ENVMAP_TYPE_CUBE";break;case uo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function nv(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case lr:t="ENVMAP_MODE_REFRACTION";break}return t}function iv(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zu:t="ENVMAP_BLENDING_MULTIPLY";break;case Yd:t="ENVMAP_BLENDING_MIX";break;case $d:t="ENVMAP_BLENDING_ADD";break}return t}function rv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function sv(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=tv(e),h=ev(e),d=nv(e),l=iv(e),f=rv(e),g=e.isWebGL2?"":X0(e),v=j0(e),E=q0(s),y=r.createProgram();let _,C,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(tr).join(`
`),_.length>0&&(_+=`
`),C=[g,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(tr).join(`
`),C.length>0&&(C+=`
`)):(_=[au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),C=[g,au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+l:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Qn?W0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,V0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(tr).join(`
`)),a=Ha(a),a=ru(a,e),a=su(a,e),o=Ha(o),o=ru(o,e),o=su(o,e),a=ou(a),o=ou(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,_=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,C=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+C);const b=x+_+a,T=x+C+o,A=nu(r,r.VERTEX_SHADER,b),M=nu(r,r.FRAGMENT_SHADER,T);r.attachShader(y,A),r.attachShader(y,M),e.index0AttributeName!==void 0?r.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function P(z){if(n.debug.checkShaderErrors){const H=r.getProgramInfoLog(y).trim(),N=r.getShaderInfoLog(A).trim(),K=r.getShaderInfoLog(M).trim();let j=!0,it=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,A,M);else{const tt=iu(r,A,"vertex"),$=iu(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+H+`
`+tt+`
`+$)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(N===""||K==="")&&(it=!1);it&&(z.diagnostics={runnable:j,programLog:H,vertexShader:{log:N,prefix:_},fragmentShader:{log:K,prefix:C}})}r.deleteShader(A),r.deleteShader(M),k=new Os(r,y),S=Y0(r,y)}let k;this.getUniforms=function(){return k===void 0&&P(this),k};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(y,B0)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=z0++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=M,this}let ov=0;class av{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new cv(t),e.set(t,i)),i}}class cv{constructor(t){this.id=ov++,this.code=t,this.usedTimes=0}}function lv(n,t,e,i,r,s,a){const o=new hh,c=new av,h=new Set,d=[],l=r.isWebGL2,f=r.logarithmicDepthBuffer,g=r.vertexTextures;let v=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return h.add(S),S===0?"uv":`uv${S}`}function _(S,w,z,H,N){const K=H.fog,j=N.geometry,it=S.isMeshStandardMaterial?H.environment:null,tt=(S.isMeshStandardMaterial?e:t).get(S.envMap||it),$=tt&&tt.mapping===uo?tt.image.height:null,at=E[S.type];S.precision!==null&&(v=r.getMaxPrecision(S.precision),v!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",v,"instead."));const ht=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,vt=ht!==void 0?ht.length:0;let bt=0;j.morphAttributes.position!==void 0&&(bt=1),j.morphAttributes.normal!==void 0&&(bt=2),j.morphAttributes.color!==void 0&&(bt=3);let q,ct,gt,Dt;if(at){const Jt=dn[at];q=Jt.vertexShader,ct=Jt.fragmentShader}else q=S.vertexShader,ct=S.fragmentShader,c.update(S),gt=c.getVertexShaderID(S),Dt=c.getFragmentShaderID(S);const Ct=n.getRenderTarget(),xt=N.isInstancedMesh===!0,Gt=N.isBatchedMesh===!0,It=!!S.map,V=!!S.matcap,Kt=!!tt,Mt=!!S.aoMap,B=!!S.lightMap,G=!!S.bumpMap,nt=!!S.normalMap,lt=!!S.displacementMap,L=!!S.emissiveMap,u=!!S.metalnessMap,p=!!S.roughnessMap,m=S.anisotropy>0,R=S.clearcoat>0,I=S.iridescence>0,O=S.sheen>0,Y=S.transmission>0,pt=m&&!!S.anisotropyMap,_t=R&&!!S.clearcoatMap,rt=R&&!!S.clearcoatNormalMap,st=R&&!!S.clearcoatRoughnessMap,wt=I&&!!S.iridescenceMap,ft=I&&!!S.iridescenceThicknessMap,Zt=O&&!!S.sheenColorMap,Nt=O&&!!S.sheenRoughnessMap,Tt=!!S.specularMap,St=!!S.specularColorMap,Rt=!!S.specularIntensityMap,U=Y&&!!S.transmissionMap,ot=Y&&!!S.thicknessMap,At=!!S.gradientMap,F=!!S.alphaMap,dt=S.alphaTest>0,Z=!!S.alphaHash,ut=!!S.extensions;let yt=Qn;S.toneMapped&&(Ct===null||Ct.isXRRenderTarget===!0)&&(yt=n.toneMapping);const jt={isWebGL2:l,shaderID:at,shaderType:S.type,shaderName:S.name,vertexShader:q,fragmentShader:ct,defines:S.defines,customVertexShaderID:gt,customFragmentShaderID:Dt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:v,batching:Gt,instancing:xt,instancingColor:xt&&N.instanceColor!==null,instancingMorph:xt&&N.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Ct===null?n.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:si,alphaToCoverage:!!S.alphaToCoverage,map:It,matcap:V,envMap:Kt,envMapMode:Kt&&tt.mapping,envMapCubeUVHeight:$,aoMap:Mt,lightMap:B,bumpMap:G,normalMap:nt,displacementMap:g&&lt,emissiveMap:L,normalMapObjectSpace:nt&&S.normalMapType===pp,normalMapTangentSpace:nt&&S.normalMapType===dp,metalnessMap:u,roughnessMap:p,anisotropy:m,anisotropyMap:pt,clearcoat:R,clearcoatMap:_t,clearcoatNormalMap:rt,clearcoatRoughnessMap:st,iridescence:I,iridescenceMap:wt,iridescenceThicknessMap:ft,sheen:O,sheenColorMap:Zt,sheenRoughnessMap:Nt,specularMap:Tt,specularColorMap:St,specularIntensityMap:Rt,transmission:Y,transmissionMap:U,thicknessMap:ot,gradientMap:At,opaque:S.transparent===!1&&S.blending===er&&S.alphaToCoverage===!1,alphaMap:F,alphaTest:dt,alphaHash:Z,combine:S.combine,mapUv:It&&y(S.map.channel),aoMapUv:Mt&&y(S.aoMap.channel),lightMapUv:B&&y(S.lightMap.channel),bumpMapUv:G&&y(S.bumpMap.channel),normalMapUv:nt&&y(S.normalMap.channel),displacementMapUv:lt&&y(S.displacementMap.channel),emissiveMapUv:L&&y(S.emissiveMap.channel),metalnessMapUv:u&&y(S.metalnessMap.channel),roughnessMapUv:p&&y(S.roughnessMap.channel),anisotropyMapUv:pt&&y(S.anisotropyMap.channel),clearcoatMapUv:_t&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:rt&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&y(S.sheenRoughnessMap.channel),specularMapUv:Tt&&y(S.specularMap.channel),specularColorMapUv:St&&y(S.specularColorMap.channel),specularIntensityMapUv:Rt&&y(S.specularIntensityMap.channel),transmissionMapUv:U&&y(S.transmissionMap.channel),thicknessMapUv:ot&&y(S.thicknessMap.channel),alphaMapUv:F&&y(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(nt||m),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!j.attributes.uv&&(It||F),fog:!!K,useFog:S.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:bt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:yt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:It&&S.map.isVideoTexture===!0&&Qt.getTransfer(S.map.colorSpace)===ie,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Cn,flipSided:S.side===ke,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ut&&S.extensions.derivatives===!0,extensionFragDepth:ut&&S.extensions.fragDepth===!0,extensionDrawBuffers:ut&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ut&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ut&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ut&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:l||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return jt.vertexUv1s=h.has(1),jt.vertexUv2s=h.has(2),jt.vertexUv3s=h.has(3),h.clear(),jt}function C(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const z in S.defines)w.push(z),w.push(S.defines[z]);return S.isRawShaderMaterial===!1&&(x(w,S),b(w,S),w.push(n.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function x(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function b(S,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.instancingMorph&&o.enable(4),w.matcap&&o.enable(5),w.envMap&&o.enable(6),w.normalMapObjectSpace&&o.enable(7),w.normalMapTangentSpace&&o.enable(8),w.clearcoat&&o.enable(9),w.iridescence&&o.enable(10),w.alphaTest&&o.enable(11),w.vertexColors&&o.enable(12),w.vertexAlphas&&o.enable(13),w.vertexUv1s&&o.enable(14),w.vertexUv2s&&o.enable(15),w.vertexUv3s&&o.enable(16),w.vertexTangents&&o.enable(17),w.anisotropy&&o.enable(18),w.alphaHash&&o.enable(19),w.batching&&o.enable(20),S.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),S.push(o.mask)}function T(S){const w=E[S.type];let z;if(w){const H=dn[w];z=Vp.clone(H.uniforms)}else z=S.uniforms;return z}function A(S,w){let z;for(let H=0,N=d.length;H<N;H++){const K=d[H];if(K.cacheKey===w){z=K,++z.usedTimes;break}}return z===void 0&&(z=new sv(n,w,S,s),d.push(z)),z}function M(S){if(--S.usedTimes===0){const w=d.indexOf(S);d[w]=d[d.length-1],d.pop(),S.destroy()}}function P(S){c.remove(S)}function k(){c.dispose()}return{getParameters:_,getProgramCacheKey:C,getUniforms:T,acquireProgram:A,releaseProgram:M,releaseShaderCache:P,programs:d,dispose:k}}function uv(){let n=new WeakMap;function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function e(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function hv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function cu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function lu(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(l,f,g,v,E,y){let _=n[t];return _===void 0?(_={id:l.id,object:l,geometry:f,material:g,groupOrder:v,renderOrder:l.renderOrder,z:E,group:y},n[t]=_):(_.id=l.id,_.object=l,_.geometry=f,_.material=g,_.groupOrder=v,_.renderOrder=l.renderOrder,_.z=E,_.group=y),t++,_}function o(l,f,g,v,E,y){const _=a(l,f,g,v,E,y);g.transmission>0?i.push(_):g.transparent===!0?r.push(_):e.push(_)}function c(l,f,g,v,E,y){const _=a(l,f,g,v,E,y);g.transmission>0?i.unshift(_):g.transparent===!0?r.unshift(_):e.unshift(_)}function h(l,f){e.length>1&&e.sort(l||hv),i.length>1&&i.sort(f||cu),r.length>1&&r.sort(f||cu)}function d(){for(let l=t,f=n.length;l<f;l++){const g=n[l];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:d,sort:h}}function fv(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new lu,n.set(i,[a])):r>=s.length?(a=new lu,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function dv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new X,color:new Yt};break;case"SpotLight":e={position:new X,direction:new X,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new X,halfWidth:new X,halfHeight:new X};break}return n[t.id]=e,e}}}function pv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let mv=0;function gv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function _v(n,t){const e=new dv,i=pv(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new X);const s=new X,a=new le,o=new le;function c(d,l){let f=0,g=0,v=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let E=0,y=0,_=0,C=0,x=0,b=0,T=0,A=0,M=0,P=0,k=0;d.sort(gv);const S=l===!0?Math.PI:1;for(let z=0,H=d.length;z<H;z++){const N=d[z],K=N.color,j=N.intensity,it=N.distance,tt=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=K.r*j*S,g+=K.g*j*S,v+=K.b*j*S;else if(N.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(N.sh.coefficients[$],j);k++}else if(N.isDirectionalLight){const $=e.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity*S),N.castShadow){const at=N.shadow,ht=i.get(N);ht.shadowBias=at.bias,ht.shadowNormalBias=at.normalBias,ht.shadowRadius=at.radius,ht.shadowMapSize=at.mapSize,r.directionalShadow[E]=ht,r.directionalShadowMap[E]=tt,r.directionalShadowMatrix[E]=N.shadow.matrix,b++}r.directional[E]=$,E++}else if(N.isSpotLight){const $=e.get(N);$.position.setFromMatrixPosition(N.matrixWorld),$.color.copy(K).multiplyScalar(j*S),$.distance=it,$.coneCos=Math.cos(N.angle),$.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),$.decay=N.decay,r.spot[_]=$;const at=N.shadow;if(N.map&&(r.spotLightMap[M]=N.map,M++,at.updateMatrices(N),N.castShadow&&P++),r.spotLightMatrix[_]=at.matrix,N.castShadow){const ht=i.get(N);ht.shadowBias=at.bias,ht.shadowNormalBias=at.normalBias,ht.shadowRadius=at.radius,ht.shadowMapSize=at.mapSize,r.spotShadow[_]=ht,r.spotShadowMap[_]=tt,A++}_++}else if(N.isRectAreaLight){const $=e.get(N);$.color.copy(K).multiplyScalar(j),$.halfWidth.set(N.width*.5,0,0),$.halfHeight.set(0,N.height*.5,0),r.rectArea[C]=$,C++}else if(N.isPointLight){const $=e.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity*S),$.distance=N.distance,$.decay=N.decay,N.castShadow){const at=N.shadow,ht=i.get(N);ht.shadowBias=at.bias,ht.shadowNormalBias=at.normalBias,ht.shadowRadius=at.radius,ht.shadowMapSize=at.mapSize,ht.shadowCameraNear=at.camera.near,ht.shadowCameraFar=at.camera.far,r.pointShadow[y]=ht,r.pointShadowMap[y]=tt,r.pointShadowMatrix[y]=N.shadow.matrix,T++}r.point[y]=$,y++}else if(N.isHemisphereLight){const $=e.get(N);$.skyColor.copy(N.color).multiplyScalar(j*S),$.groundColor.copy(N.groundColor).multiplyScalar(j*S),r.hemi[x]=$,x++}}C>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=mt.LTC_FLOAT_1,r.rectAreaLTC2=mt.LTC_FLOAT_2):(r.rectAreaLTC1=mt.LTC_HALF_1,r.rectAreaLTC2=mt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=mt.LTC_FLOAT_1,r.rectAreaLTC2=mt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=mt.LTC_HALF_1,r.rectAreaLTC2=mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=g,r.ambient[2]=v;const w=r.hash;(w.directionalLength!==E||w.pointLength!==y||w.spotLength!==_||w.rectAreaLength!==C||w.hemiLength!==x||w.numDirectionalShadows!==b||w.numPointShadows!==T||w.numSpotShadows!==A||w.numSpotMaps!==M||w.numLightProbes!==k)&&(r.directional.length=E,r.spot.length=_,r.rectArea.length=C,r.point.length=y,r.hemi.length=x,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=A+M-P,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=k,w.directionalLength=E,w.pointLength=y,w.spotLength=_,w.rectAreaLength=C,w.hemiLength=x,w.numDirectionalShadows=b,w.numPointShadows=T,w.numSpotShadows=A,w.numSpotMaps=M,w.numLightProbes=k,r.version=mv++)}function h(d,l){let f=0,g=0,v=0,E=0,y=0;const _=l.matrixWorldInverse;for(let C=0,x=d.length;C<x;C++){const b=d[C];if(b.isDirectionalLight){const T=r.directional[f];T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(_),f++}else if(b.isSpotLight){const T=r.spot[v];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(_),T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(_),v++}else if(b.isRectAreaLight){const T=r.rectArea[E];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(_),o.identity(),a.copy(b.matrixWorld),a.premultiply(_),o.extractRotation(a),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),E++}else if(b.isPointLight){const T=r.point[g];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(_),g++}else if(b.isHemisphereLight){const T=r.hemi[y];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(_),y++}}}return{setup:c,setupView:h,state:r}}function uu(n,t){const e=new _v(n,t),i=[],r=[];function s(){i.length=0,r.length=0}function a(l){i.push(l)}function o(l){r.push(l)}function c(l){e.setup(i,l)}function h(l){e.setupView(i,l)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o}}function vv(n,t){let e=new WeakMap;function i(s,a=0){const o=e.get(s);let c;return o===void 0?(c=new uu(n,t),e.set(s,[c])):a>=o.length?(c=new uu(n,t),o.push(c)):c=o[a],c}function r(){e=new WeakMap}return{get:i,dispose:r}}class yv extends Yr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xv extends Yr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Sv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ev=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bv(n,t,e){let i=new sc;const r=new Ft,s=new Ft,a=new Ee,o=new yv({depthPacking:fp}),c=new xv,h={},d=e.maxTextureSize,l={[ei]:ke,[ke]:ei,[Cn]:Cn},f=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:Sv,fragmentShader:Ev}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const v=new Fn;v.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Dn(v,f),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ku;let _=this.type;this.render=function(A,M,P){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||A.length===0)return;const k=n.getRenderTarget(),S=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Jn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const H=_!==An&&this.type===An,N=_===An&&this.type!==An;for(let K=0,j=A.length;K<j;K++){const it=A[K],tt=it.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;r.copy(tt.mapSize);const $=tt.getFrameExtents();if(r.multiply($),s.copy(tt.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/$.x),r.x=s.x*$.x,tt.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/$.y),r.y=s.y*$.y,tt.mapSize.y=s.y)),tt.map===null||H===!0||N===!0){const ht=this.type!==An?{minFilter:Ue,magFilter:Ue}:{};tt.map!==null&&tt.map.dispose(),tt.map=new bi(r.x,r.y,ht),tt.map.texture.name=it.name+".shadowMap",tt.camera.updateProjectionMatrix()}n.setRenderTarget(tt.map),n.clear();const at=tt.getViewportCount();for(let ht=0;ht<at;ht++){const vt=tt.getViewport(ht);a.set(s.x*vt.x,s.y*vt.y,s.x*vt.z,s.y*vt.w),z.viewport(a),tt.updateMatrices(it,ht),i=tt.getFrustum(),b(M,P,tt.camera,it,this.type)}tt.isPointLightShadow!==!0&&this.type===An&&C(tt,P),tt.needsUpdate=!1}_=this.type,y.needsUpdate=!1,n.setRenderTarget(k,S,w)};function C(A,M){const P=t.update(E);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new bi(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(M,null,P,f,E,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(M,null,P,g,E,null)}function x(A,M,P,k){let S=null;const w=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)S=w;else if(S=P.isPointLight===!0?c:o,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const z=S.uuid,H=M.uuid;let N=h[z];N===void 0&&(N={},h[z]=N);let K=N[H];K===void 0&&(K=S.clone(),N[H]=K,M.addEventListener("dispose",T)),S=K}if(S.visible=M.visible,S.wireframe=M.wireframe,k===An?S.side=M.shadowSide!==null?M.shadowSide:M.side:S.side=M.shadowSide!==null?M.shadowSide:l[M.side],S.alphaMap=M.alphaMap,S.alphaTest=M.alphaTest,S.map=M.map,S.clipShadows=M.clipShadows,S.clippingPlanes=M.clippingPlanes,S.clipIntersection=M.clipIntersection,S.displacementMap=M.displacementMap,S.displacementScale=M.displacementScale,S.displacementBias=M.displacementBias,S.wireframeLinewidth=M.wireframeLinewidth,S.linewidth=M.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=n.properties.get(S);z.light=P}return S}function b(A,M,P,k,S){if(A.visible===!1)return;if(A.layers.test(M.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===An)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const H=t.update(A),N=A.material;if(Array.isArray(N)){const K=H.groups;for(let j=0,it=K.length;j<it;j++){const tt=K[j],$=N[tt.materialIndex];if($&&$.visible){const at=x(A,$,k,S);A.onBeforeShadow(n,A,M,P,H,at,tt),n.renderBufferDirect(P,null,H,at,A,tt),A.onAfterShadow(n,A,M,P,H,at,tt)}}}else if(N.visible){const K=x(A,N,k,S);A.onBeforeShadow(n,A,M,P,H,K,null),n.renderBufferDirect(P,null,H,K,A,null),A.onAfterShadow(n,A,M,P,H,K,null)}}const z=A.children;for(let H=0,N=z.length;H<N;H++)b(z[H],M,P,k,S)}function T(A){A.target.removeEventListener("dispose",T);for(const P in h){const k=h[P],S=A.target.uuid;S in k&&(k[S].dispose(),delete k[S])}}}function Mv(n,t,e){const i=e.isWebGL2;function r(){let F=!1;const dt=new Ee;let Z=null;const ut=new Ee(0,0,0,0);return{setMask:function(yt){Z!==yt&&!F&&(n.colorMask(yt,yt,yt,yt),Z=yt)},setLocked:function(yt){F=yt},setClear:function(yt,jt,Jt,te,ae){ae===!0&&(yt*=te,jt*=te,Jt*=te),dt.set(yt,jt,Jt,te),ut.equals(dt)===!1&&(n.clearColor(yt,jt,Jt,te),ut.copy(dt))},reset:function(){F=!1,Z=null,ut.set(-1,0,0,0)}}}function s(){let F=!1,dt=null,Z=null,ut=null;return{setTest:function(yt){yt?xt(n.DEPTH_TEST):Gt(n.DEPTH_TEST)},setMask:function(yt){dt!==yt&&!F&&(n.depthMask(yt),dt=yt)},setFunc:function(yt){if(Z!==yt){switch(yt){case Gd:n.depthFunc(n.NEVER);break;case Hd:n.depthFunc(n.ALWAYS);break;case Vd:n.depthFunc(n.LESS);break;case Gs:n.depthFunc(n.LEQUAL);break;case Wd:n.depthFunc(n.EQUAL);break;case Xd:n.depthFunc(n.GEQUAL);break;case jd:n.depthFunc(n.GREATER);break;case qd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=yt}},setLocked:function(yt){F=yt},setClear:function(yt){ut!==yt&&(n.clearDepth(yt),ut=yt)},reset:function(){F=!1,dt=null,Z=null,ut=null}}}function a(){let F=!1,dt=null,Z=null,ut=null,yt=null,jt=null,Jt=null,te=null,ae=null;return{setTest:function($t){F||($t?xt(n.STENCIL_TEST):Gt(n.STENCIL_TEST))},setMask:function($t){dt!==$t&&!F&&(n.stencilMask($t),dt=$t)},setFunc:function($t,ne,Ae){(Z!==$t||ut!==ne||yt!==Ae)&&(n.stencilFunc($t,ne,Ae),Z=$t,ut=ne,yt=Ae)},setOp:function($t,ne,Ae){(jt!==$t||Jt!==ne||te!==Ae)&&(n.stencilOp($t,ne,Ae),jt=$t,Jt=ne,te=Ae)},setLocked:function($t){F=$t},setClear:function($t){ae!==$t&&(n.clearStencil($t),ae=$t)},reset:function(){F=!1,dt=null,Z=null,ut=null,yt=null,jt=null,Jt=null,te=null,ae=null}}}const o=new r,c=new s,h=new a,d=new WeakMap,l=new WeakMap;let f={},g={},v=new WeakMap,E=[],y=null,_=!1,C=null,x=null,b=null,T=null,A=null,M=null,P=null,k=new Yt(0,0,0),S=0,w=!1,z=null,H=null,N=null,K=null,j=null;const it=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let tt=!1,$=0;const at=n.getParameter(n.VERSION);at.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(at)[1]),tt=$>=1):at.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),tt=$>=2);let ht=null,vt={};const bt=n.getParameter(n.SCISSOR_BOX),q=n.getParameter(n.VIEWPORT),ct=new Ee().fromArray(bt),gt=new Ee().fromArray(q);function Dt(F,dt,Z,ut){const yt=new Uint8Array(4),jt=n.createTexture();n.bindTexture(F,jt),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Jt=0;Jt<Z;Jt++)i&&(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)?n.texImage3D(dt,0,n.RGBA,1,1,ut,0,n.RGBA,n.UNSIGNED_BYTE,yt):n.texImage2D(dt+Jt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,yt);return jt}const Ct={};Ct[n.TEXTURE_2D]=Dt(n.TEXTURE_2D,n.TEXTURE_2D,1),Ct[n.TEXTURE_CUBE_MAP]=Dt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ct[n.TEXTURE_2D_ARRAY]=Dt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ct[n.TEXTURE_3D]=Dt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),h.setClear(0),xt(n.DEPTH_TEST),c.setFunc(Gs),lt(!1),L(Vc),xt(n.CULL_FACE),G(Jn);function xt(F){f[F]!==!0&&(n.enable(F),f[F]=!0)}function Gt(F){f[F]!==!1&&(n.disable(F),f[F]=!1)}function It(F,dt){return g[F]!==dt?(n.bindFramebuffer(F,dt),g[F]=dt,i&&(F===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=dt),F===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=dt)),!0):!1}function V(F,dt){let Z=E,ut=!1;if(F){Z=v.get(dt),Z===void 0&&(Z=[],v.set(dt,Z));const yt=F.textures;if(Z.length!==yt.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let jt=0,Jt=yt.length;jt<Jt;jt++)Z[jt]=n.COLOR_ATTACHMENT0+jt;Z.length=yt.length,ut=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,ut=!0);if(ut)if(e.isWebGL2)n.drawBuffers(Z);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Kt(F){return y!==F?(n.useProgram(F),y=F,!0):!1}const Mt={[gi]:n.FUNC_ADD,[Td]:n.FUNC_SUBTRACT,[Ad]:n.FUNC_REVERSE_SUBTRACT};if(i)Mt[qc]=n.MIN,Mt[Yc]=n.MAX;else{const F=t.get("EXT_blend_minmax");F!==null&&(Mt[qc]=F.MIN_EXT,Mt[Yc]=F.MAX_EXT)}const B={[Cd]:n.ZERO,[Rd]:n.ONE,[Ld]:n.SRC_COLOR,[Ia]:n.SRC_ALPHA,[Od]:n.SRC_ALPHA_SATURATE,[Ud]:n.DST_COLOR,[Pd]:n.DST_ALPHA,[Dd]:n.ONE_MINUS_SRC_COLOR,[Ua]:n.ONE_MINUS_SRC_ALPHA,[Nd]:n.ONE_MINUS_DST_COLOR,[Id]:n.ONE_MINUS_DST_ALPHA,[Fd]:n.CONSTANT_COLOR,[kd]:n.ONE_MINUS_CONSTANT_COLOR,[Bd]:n.CONSTANT_ALPHA,[zd]:n.ONE_MINUS_CONSTANT_ALPHA};function G(F,dt,Z,ut,yt,jt,Jt,te,ae,$t){if(F===Jn){_===!0&&(Gt(n.BLEND),_=!1);return}if(_===!1&&(xt(n.BLEND),_=!0),F!==wd){if(F!==C||$t!==w){if((x!==gi||A!==gi)&&(n.blendEquation(n.FUNC_ADD),x=gi,A=gi),$t)switch(F){case er:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wc:n.blendFunc(n.ONE,n.ONE);break;case Xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}b=null,T=null,M=null,P=null,k.set(0,0,0),S=0,C=F,w=$t}return}yt=yt||dt,jt=jt||Z,Jt=Jt||ut,(dt!==x||yt!==A)&&(n.blendEquationSeparate(Mt[dt],Mt[yt]),x=dt,A=yt),(Z!==b||ut!==T||jt!==M||Jt!==P)&&(n.blendFuncSeparate(B[Z],B[ut],B[jt],B[Jt]),b=Z,T=ut,M=jt,P=Jt),(te.equals(k)===!1||ae!==S)&&(n.blendColor(te.r,te.g,te.b,ae),k.copy(te),S=ae),C=F,w=!1}function nt(F,dt){F.side===Cn?Gt(n.CULL_FACE):xt(n.CULL_FACE);let Z=F.side===ke;dt&&(Z=!Z),lt(Z),F.blending===er&&F.transparent===!1?G(Jn):G(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),c.setFunc(F.depthFunc),c.setTest(F.depthTest),c.setMask(F.depthWrite),o.setMask(F.colorWrite);const ut=F.stencilWrite;h.setTest(ut),ut&&(h.setMask(F.stencilWriteMask),h.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),h.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),p(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?xt(n.SAMPLE_ALPHA_TO_COVERAGE):Gt(n.SAMPLE_ALPHA_TO_COVERAGE)}function lt(F){z!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),z=F)}function L(F){F!==Ed?(xt(n.CULL_FACE),F!==H&&(F===Vc?n.cullFace(n.BACK):F===bd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Gt(n.CULL_FACE),H=F}function u(F){F!==N&&(tt&&n.lineWidth(F),N=F)}function p(F,dt,Z){F?(xt(n.POLYGON_OFFSET_FILL),(K!==dt||j!==Z)&&(n.polygonOffset(dt,Z),K=dt,j=Z)):Gt(n.POLYGON_OFFSET_FILL)}function m(F){F?xt(n.SCISSOR_TEST):Gt(n.SCISSOR_TEST)}function R(F){F===void 0&&(F=n.TEXTURE0+it-1),ht!==F&&(n.activeTexture(F),ht=F)}function I(F,dt,Z){Z===void 0&&(ht===null?Z=n.TEXTURE0+it-1:Z=ht);let ut=vt[Z];ut===void 0&&(ut={type:void 0,texture:void 0},vt[Z]=ut),(ut.type!==F||ut.texture!==dt)&&(ht!==Z&&(n.activeTexture(Z),ht=Z),n.bindTexture(F,dt||Ct[F]),ut.type=F,ut.texture=dt)}function O(){const F=vt[ht];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _t(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rt(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function wt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Zt(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Nt(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function St(F){ct.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),ct.copy(F))}function Rt(F){gt.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),gt.copy(F))}function U(F,dt){let Z=l.get(dt);Z===void 0&&(Z=new WeakMap,l.set(dt,Z));let ut=Z.get(F);ut===void 0&&(ut=n.getUniformBlockIndex(dt,F.name),Z.set(F,ut))}function ot(F,dt){const ut=l.get(dt).get(F);d.get(dt)!==ut&&(n.uniformBlockBinding(dt,ut,F.__bindingPointIndex),d.set(dt,ut))}function At(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ht=null,vt={},g={},v=new WeakMap,E=[],y=null,_=!1,C=null,x=null,b=null,T=null,A=null,M=null,P=null,k=new Yt(0,0,0),S=0,w=!1,z=null,H=null,N=null,K=null,j=null,ct.set(0,0,n.canvas.width,n.canvas.height),gt.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),h.reset()}return{buffers:{color:o,depth:c,stencil:h},enable:xt,disable:Gt,bindFramebuffer:It,drawBuffers:V,useProgram:Kt,setBlending:G,setMaterial:nt,setFlipSided:lt,setCullFace:L,setLineWidth:u,setPolygonOffset:p,setScissorTest:m,activeTexture:R,bindTexture:I,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:pt,texImage2D:Nt,texImage3D:Tt,updateUBOMapping:U,uniformBlockBinding:ot,texStorage2D:ft,texStorage3D:Zt,texSubImage2D:_t,texSubImage3D:rt,compressedTexSubImage2D:st,compressedTexSubImage3D:wt,scissor:St,viewport:Rt,reset:At}}function wv(n,t,e,i,r,s,a){const o=r.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ft,l=new WeakMap;let f;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(p,m){return v?new OffscreenCanvas(p,m):js("canvas")}function y(p,m,R,I){let O=1;const Y=u(p);if((Y.width>I||Y.height>I)&&(O=I/Math.max(Y.width,Y.height)),O<1||m===!0)if(typeof HTMLImageElement<"u"&&p instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&p instanceof ImageBitmap||typeof VideoFrame<"u"&&p instanceof VideoFrame){const pt=m?Ga:Math.floor,_t=pt(O*Y.width),rt=pt(O*Y.height);f===void 0&&(f=E(_t,rt));const st=R?E(_t,rt):f;return st.width=_t,st.height=rt,st.getContext("2d").drawImage(p,0,0,_t,rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+_t+"x"+rt+")."),st}else return"data"in p&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),p;return p}function _(p){const m=u(p);return Ml(m.width)&&Ml(m.height)}function C(p){return o?!1:p.wrapS!==on||p.wrapT!==on||p.minFilter!==Ue&&p.minFilter!==Fe}function x(p,m){return p.generateMipmaps&&m&&p.minFilter!==Ue&&p.minFilter!==Fe}function b(p){n.generateMipmap(p)}function T(p,m,R,I,O=!1){if(o===!1)return m;if(p!==null){if(n[p]!==void 0)return n[p];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+p+"'")}let Y=m;if(m===n.RED&&(R===n.FLOAT&&(Y=n.R32F),R===n.HALF_FLOAT&&(Y=n.R16F),R===n.UNSIGNED_BYTE&&(Y=n.R8)),m===n.RED_INTEGER&&(R===n.UNSIGNED_BYTE&&(Y=n.R8UI),R===n.UNSIGNED_SHORT&&(Y=n.R16UI),R===n.UNSIGNED_INT&&(Y=n.R32UI),R===n.BYTE&&(Y=n.R8I),R===n.SHORT&&(Y=n.R16I),R===n.INT&&(Y=n.R32I)),m===n.RG&&(R===n.FLOAT&&(Y=n.RG32F),R===n.HALF_FLOAT&&(Y=n.RG16F),R===n.UNSIGNED_BYTE&&(Y=n.RG8)),m===n.RG_INTEGER&&(R===n.UNSIGNED_BYTE&&(Y=n.RG8UI),R===n.UNSIGNED_SHORT&&(Y=n.RG16UI),R===n.UNSIGNED_INT&&(Y=n.RG32UI),R===n.BYTE&&(Y=n.RG8I),R===n.SHORT&&(Y=n.RG16I),R===n.INT&&(Y=n.RG32I)),m===n.RGBA){const pt=O?Hs:Qt.getTransfer(I);R===n.FLOAT&&(Y=n.RGBA32F),R===n.HALF_FLOAT&&(Y=n.RGBA16F),R===n.UNSIGNED_BYTE&&(Y=pt===ie?n.SRGB8_ALPHA8:n.RGBA8),R===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),R===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function A(p,m,R){return x(p,R)===!0||p.isFramebufferTexture&&p.minFilter!==Ue&&p.minFilter!==Fe?Math.log2(Math.max(m.width,m.height))+1:p.mipmaps!==void 0&&p.mipmaps.length>0?p.mipmaps.length:p.isCompressedTexture&&Array.isArray(p.image)?m.mipmaps.length:1}function M(p){return p===Ue||p===$c||p===Cr?n.NEAREST:n.LINEAR}function P(p){const m=p.target;m.removeEventListener("dispose",P),S(m),m.isVideoTexture&&l.delete(m)}function k(p){const m=p.target;m.removeEventListener("dispose",k),z(m)}function S(p){const m=i.get(p);if(m.__webglInit===void 0)return;const R=p.source,I=g.get(R);if(I){const O=I[m.__cacheKey];O.usedTimes--,O.usedTimes===0&&w(p),Object.keys(I).length===0&&g.delete(R)}i.remove(p)}function w(p){const m=i.get(p);n.deleteTexture(m.__webglTexture);const R=p.source,I=g.get(R);delete I[m.__cacheKey],a.memory.textures--}function z(p){const m=i.get(p);if(p.depthTexture&&p.depthTexture.dispose(),p.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(m.__webglFramebuffer[I]))for(let O=0;O<m.__webglFramebuffer[I].length;O++)n.deleteFramebuffer(m.__webglFramebuffer[I][O]);else n.deleteFramebuffer(m.__webglFramebuffer[I]);m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer[I])}else{if(Array.isArray(m.__webglFramebuffer))for(let I=0;I<m.__webglFramebuffer.length;I++)n.deleteFramebuffer(m.__webglFramebuffer[I]);else n.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&n.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let I=0;I<m.__webglColorRenderbuffer.length;I++)m.__webglColorRenderbuffer[I]&&n.deleteRenderbuffer(m.__webglColorRenderbuffer[I]);m.__webglDepthRenderbuffer&&n.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const R=p.textures;for(let I=0,O=R.length;I<O;I++){const Y=i.get(R[I]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(R[I])}i.remove(p)}let H=0;function N(){H=0}function K(){const p=H;return p>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+p+" texture units while this GPU supports only "+r.maxTextures),H+=1,p}function j(p){const m=[];return m.push(p.wrapS),m.push(p.wrapT),m.push(p.wrapR||0),m.push(p.magFilter),m.push(p.minFilter),m.push(p.anisotropy),m.push(p.internalFormat),m.push(p.format),m.push(p.type),m.push(p.generateMipmaps),m.push(p.premultiplyAlpha),m.push(p.flipY),m.push(p.unpackAlignment),m.push(p.colorSpace),m.join()}function it(p,m){const R=i.get(p);if(p.isVideoTexture&&lt(p),p.isRenderTargetTexture===!1&&p.version>0&&R.__version!==p.version){const I=p.image;if(I===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(R,p,m);return}}e.bindTexture(n.TEXTURE_2D,R.__webglTexture,n.TEXTURE0+m)}function tt(p,m){const R=i.get(p);if(p.version>0&&R.__version!==p.version){gt(R,p,m);return}e.bindTexture(n.TEXTURE_2D_ARRAY,R.__webglTexture,n.TEXTURE0+m)}function $(p,m){const R=i.get(p);if(p.version>0&&R.__version!==p.version){gt(R,p,m);return}e.bindTexture(n.TEXTURE_3D,R.__webglTexture,n.TEXTURE0+m)}function at(p,m){const R=i.get(p);if(p.version>0&&R.__version!==p.version){Dt(R,p,m);return}e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+m)}const ht={[Fa]:n.REPEAT,[on]:n.CLAMP_TO_EDGE,[ka]:n.MIRRORED_REPEAT},vt={[Ue]:n.NEAREST,[$c]:n.NEAREST_MIPMAP_NEAREST,[Cr]:n.NEAREST_MIPMAP_LINEAR,[Fe]:n.LINEAR,[Fo]:n.LINEAR_MIPMAP_NEAREST,[vi]:n.LINEAR_MIPMAP_LINEAR},bt={[mp]:n.NEVER,[Sp]:n.ALWAYS,[gp]:n.LESS,[oh]:n.LEQUAL,[_p]:n.EQUAL,[xp]:n.GEQUAL,[vp]:n.GREATER,[yp]:n.NOTEQUAL};function q(p,m,R){if(m.type===Rn&&t.has("OES_texture_float_linear")===!1&&(m.magFilter===Fe||m.magFilter===Fo||m.magFilter===Cr||m.magFilter===vi||m.minFilter===Fe||m.minFilter===Fo||m.minFilter===Cr||m.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),R?(n.texParameteri(p,n.TEXTURE_WRAP_S,ht[m.wrapS]),n.texParameteri(p,n.TEXTURE_WRAP_T,ht[m.wrapT]),(p===n.TEXTURE_3D||p===n.TEXTURE_2D_ARRAY)&&n.texParameteri(p,n.TEXTURE_WRAP_R,ht[m.wrapR]),n.texParameteri(p,n.TEXTURE_MAG_FILTER,vt[m.magFilter]),n.texParameteri(p,n.TEXTURE_MIN_FILTER,vt[m.minFilter])):(n.texParameteri(p,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(p,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(p===n.TEXTURE_3D||p===n.TEXTURE_2D_ARRAY)&&n.texParameteri(p,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(m.wrapS!==on||m.wrapT!==on)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(p,n.TEXTURE_MAG_FILTER,M(m.magFilter)),n.texParameteri(p,n.TEXTURE_MIN_FILTER,M(m.minFilter)),m.minFilter!==Ue&&m.minFilter!==Fe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),m.compareFunction&&(n.texParameteri(p,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(p,n.TEXTURE_COMPARE_FUNC,bt[m.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Ue||m.minFilter!==Cr&&m.minFilter!==vi||m.type===Rn&&t.has("OES_texture_float_linear")===!1||o===!1&&m.type===Nr&&t.has("OES_texture_half_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const I=t.get("EXT_texture_filter_anisotropic");n.texParameterf(p,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function ct(p,m){let R=!1;p.__webglInit===void 0&&(p.__webglInit=!0,m.addEventListener("dispose",P));const I=m.source;let O=g.get(I);O===void 0&&(O={},g.set(I,O));const Y=j(m);if(Y!==p.__cacheKey){O[Y]===void 0&&(O[Y]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,R=!0),O[Y].usedTimes++;const pt=O[p.__cacheKey];pt!==void 0&&(O[p.__cacheKey].usedTimes--,pt.usedTimes===0&&w(m)),p.__cacheKey=Y,p.__webglTexture=O[Y].texture}return R}function gt(p,m,R){let I=n.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(I=n.TEXTURE_2D_ARRAY),m.isData3DTexture&&(I=n.TEXTURE_3D);const O=ct(p,m),Y=m.source;e.bindTexture(I,p.__webglTexture,n.TEXTURE0+R);const pt=i.get(Y);if(Y.version!==pt.__version||O===!0){e.activeTexture(n.TEXTURE0+R);const _t=Qt.getPrimaries(Qt.workingColorSpace),rt=m.colorSpace===Yn?null:Qt.getPrimaries(m.colorSpace),st=m.colorSpace===Yn||_t===rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);const wt=C(m)&&_(m.image)===!1;let ft=y(m.image,wt,!1,r.maxTextureSize);ft=L(m,ft);const Zt=_(ft)||o,Nt=s.convert(m.format,m.colorSpace);let Tt=s.convert(m.type),St=T(m.internalFormat,Nt,Tt,m.colorSpace,m.isVideoTexture);q(I,m,Zt);let Rt;const U=m.mipmaps,ot=o&&m.isVideoTexture!==!0&&St!==sh,At=pt.__version===void 0||O===!0,F=Y.dataReady,dt=A(m,ft,Zt);if(m.isDepthTexture)St=n.DEPTH_COMPONENT,o?m.type===Rn?St=n.DEPTH_COMPONENT32F:m.type===Kn?St=n.DEPTH_COMPONENT24:m.type===yi?St=n.DEPTH24_STENCIL8:St=n.DEPTH_COMPONENT16:m.type===Rn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),m.format===xi&&St===n.DEPTH_COMPONENT&&m.type!==nc&&m.type!==Kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),m.type=Kn,Tt=s.convert(m.type)),m.format===ur&&St===n.DEPTH_COMPONENT&&(St=n.DEPTH_STENCIL,m.type!==yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),m.type=yi,Tt=s.convert(m.type))),At&&(ot?e.texStorage2D(n.TEXTURE_2D,1,St,ft.width,ft.height):e.texImage2D(n.TEXTURE_2D,0,St,ft.width,ft.height,0,Nt,Tt,null));else if(m.isDataTexture)if(U.length>0&&Zt){ot&&At&&e.texStorage2D(n.TEXTURE_2D,dt,St,U[0].width,U[0].height);for(let Z=0,ut=U.length;Z<ut;Z++)Rt=U[Z],ot?F&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,Rt.width,Rt.height,Nt,Tt,Rt.data):e.texImage2D(n.TEXTURE_2D,Z,St,Rt.width,Rt.height,0,Nt,Tt,Rt.data);m.generateMipmaps=!1}else ot?(At&&e.texStorage2D(n.TEXTURE_2D,dt,St,ft.width,ft.height),F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft.width,ft.height,Nt,Tt,ft.data)):e.texImage2D(n.TEXTURE_2D,0,St,ft.width,ft.height,0,Nt,Tt,ft.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){ot&&At&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,St,U[0].width,U[0].height,ft.depth);for(let Z=0,ut=U.length;Z<ut;Z++)Rt=U[Z],m.format!==an?Nt!==null?ot?F&&e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Rt.width,Rt.height,ft.depth,Nt,Rt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,St,Rt.width,Rt.height,ft.depth,0,Rt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?F&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Rt.width,Rt.height,ft.depth,Nt,Tt,Rt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Z,St,Rt.width,Rt.height,ft.depth,0,Nt,Tt,Rt.data)}else{ot&&At&&e.texStorage2D(n.TEXTURE_2D,dt,St,U[0].width,U[0].height);for(let Z=0,ut=U.length;Z<ut;Z++)Rt=U[Z],m.format!==an?Nt!==null?ot?F&&e.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,Rt.width,Rt.height,Nt,Rt.data):e.compressedTexImage2D(n.TEXTURE_2D,Z,St,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?F&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,Rt.width,Rt.height,Nt,Tt,Rt.data):e.texImage2D(n.TEXTURE_2D,Z,St,Rt.width,Rt.height,0,Nt,Tt,Rt.data)}else if(m.isDataArrayTexture)ot?(At&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,St,ft.width,ft.height,ft.depth),F&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Nt,Tt,ft.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,St,ft.width,ft.height,ft.depth,0,Nt,Tt,ft.data);else if(m.isData3DTexture)ot?(At&&e.texStorage3D(n.TEXTURE_3D,dt,St,ft.width,ft.height,ft.depth),F&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Nt,Tt,ft.data)):e.texImage3D(n.TEXTURE_3D,0,St,ft.width,ft.height,ft.depth,0,Nt,Tt,ft.data);else if(m.isFramebufferTexture){if(At)if(ot)e.texStorage2D(n.TEXTURE_2D,dt,St,ft.width,ft.height);else{let Z=ft.width,ut=ft.height;for(let yt=0;yt<dt;yt++)e.texImage2D(n.TEXTURE_2D,yt,St,Z,ut,0,Nt,Tt,null),Z>>=1,ut>>=1}}else if(U.length>0&&Zt){if(ot&&At){const Z=u(U[0]);e.texStorage2D(n.TEXTURE_2D,dt,St,Z.width,Z.height)}for(let Z=0,ut=U.length;Z<ut;Z++)Rt=U[Z],ot?F&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,Nt,Tt,Rt):e.texImage2D(n.TEXTURE_2D,Z,St,Nt,Tt,Rt);m.generateMipmaps=!1}else if(ot){if(At){const Z=u(ft);e.texStorage2D(n.TEXTURE_2D,dt,St,Z.width,Z.height)}F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Nt,Tt,ft)}else e.texImage2D(n.TEXTURE_2D,0,St,Nt,Tt,ft);x(m,Zt)&&b(I),pt.__version=Y.version,m.onUpdate&&m.onUpdate(m)}p.__version=m.version}function Dt(p,m,R){if(m.image.length!==6)return;const I=ct(p,m),O=m.source;e.bindTexture(n.TEXTURE_CUBE_MAP,p.__webglTexture,n.TEXTURE0+R);const Y=i.get(O);if(O.version!==Y.__version||I===!0){e.activeTexture(n.TEXTURE0+R);const pt=Qt.getPrimaries(Qt.workingColorSpace),_t=m.colorSpace===Yn?null:Qt.getPrimaries(m.colorSpace),rt=m.colorSpace===Yn||pt===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);const st=m.isCompressedTexture||m.image[0].isCompressedTexture,wt=m.image[0]&&m.image[0].isDataTexture,ft=[];for(let Z=0;Z<6;Z++)!st&&!wt?ft[Z]=y(m.image[Z],!1,!0,r.maxCubemapSize):ft[Z]=wt?m.image[Z].image:m.image[Z],ft[Z]=L(m,ft[Z]);const Zt=ft[0],Nt=_(Zt)||o,Tt=s.convert(m.format,m.colorSpace),St=s.convert(m.type),Rt=T(m.internalFormat,Tt,St,m.colorSpace),U=o&&m.isVideoTexture!==!0,ot=Y.__version===void 0||I===!0,At=O.dataReady;let F=A(m,Zt,Nt);q(n.TEXTURE_CUBE_MAP,m,Nt);let dt;if(st){U&&ot&&e.texStorage2D(n.TEXTURE_CUBE_MAP,F,Rt,Zt.width,Zt.height);for(let Z=0;Z<6;Z++){dt=ft[Z].mipmaps;for(let ut=0;ut<dt.length;ut++){const yt=dt[ut];m.format!==an?Tt!==null?U?At&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,0,0,yt.width,yt.height,Tt,yt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,Rt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?At&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,0,0,yt.width,yt.height,Tt,St,yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,Rt,yt.width,yt.height,0,Tt,St,yt.data)}}}else{if(dt=m.mipmaps,U&&ot){dt.length>0&&F++;const Z=u(ft[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,F,Rt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(wt){U?At&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ft[Z].width,ft[Z].height,Tt,St,ft[Z].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Rt,ft[Z].width,ft[Z].height,0,Tt,St,ft[Z].data);for(let ut=0;ut<dt.length;ut++){const jt=dt[ut].image[Z].image;U?At&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,0,0,jt.width,jt.height,Tt,St,jt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,Rt,jt.width,jt.height,0,Tt,St,jt.data)}}else{U?At&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Tt,St,ft[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Rt,Tt,St,ft[Z]);for(let ut=0;ut<dt.length;ut++){const yt=dt[ut];U?At&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,0,0,Tt,St,yt.image[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,Rt,Tt,St,yt.image[Z])}}}x(m,Nt)&&b(n.TEXTURE_CUBE_MAP),Y.__version=O.version,m.onUpdate&&m.onUpdate(m)}p.__version=m.version}function Ct(p,m,R,I,O,Y){const pt=s.convert(R.format,R.colorSpace),_t=s.convert(R.type),rt=T(R.internalFormat,pt,_t,R.colorSpace);if(!i.get(m).__hasExternalTextures){const wt=Math.max(1,m.width>>Y),ft=Math.max(1,m.height>>Y);O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?e.texImage3D(O,Y,rt,wt,ft,m.depth,0,pt,_t,null):e.texImage2D(O,Y,rt,wt,ft,0,pt,_t,null)}e.bindFramebuffer(n.FRAMEBUFFER,p),nt(m)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,I,O,i.get(R).__webglTexture,0,G(m)):(O===n.TEXTURE_2D||O>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,I,O,i.get(R).__webglTexture,Y),e.bindFramebuffer(n.FRAMEBUFFER,null)}function xt(p,m,R){if(n.bindRenderbuffer(n.RENDERBUFFER,p),m.depthBuffer&&!m.stencilBuffer){let I=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(R||nt(m)){const O=m.depthTexture;O&&O.isDepthTexture&&(O.type===Rn?I=n.DEPTH_COMPONENT32F:O.type===Kn&&(I=n.DEPTH_COMPONENT24));const Y=G(m);nt(m)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Y,I,m.width,m.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,I,m.width,m.height)}else n.renderbufferStorage(n.RENDERBUFFER,I,m.width,m.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,p)}else if(m.depthBuffer&&m.stencilBuffer){const I=G(m);R&&nt(m)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,I,n.DEPTH24_STENCIL8,m.width,m.height):nt(m)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I,n.DEPTH24_STENCIL8,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,m.width,m.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,p)}else{const I=m.textures;for(let O=0;O<I.length;O++){const Y=I[O],pt=s.convert(Y.format,Y.colorSpace),_t=s.convert(Y.type),rt=T(Y.internalFormat,pt,_t,Y.colorSpace),st=G(m);R&&nt(m)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,st,rt,m.width,m.height):nt(m)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st,rt,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,rt,m.width,m.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Gt(p,m){if(m&&m.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,p),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(m.depthTexture).__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),it(m.depthTexture,0);const I=i.get(m.depthTexture).__webglTexture,O=G(m);if(m.depthTexture.format===xi)nt(m)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,I,0,O):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,I,0);else if(m.depthTexture.format===ur)nt(m)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,I,0,O):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,I,0);else throw new Error("Unknown depthTexture format")}function It(p){const m=i.get(p),R=p.isWebGLCubeRenderTarget===!0;if(p.depthTexture&&!m.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");Gt(m.__webglFramebuffer,p)}else if(R){m.__webglDepthbuffer=[];for(let I=0;I<6;I++)e.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[I]),m.__webglDepthbuffer[I]=n.createRenderbuffer(),xt(m.__webglDepthbuffer[I],p,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer=n.createRenderbuffer(),xt(m.__webglDepthbuffer,p,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function V(p,m,R){const I=i.get(p);m!==void 0&&Ct(I.__webglFramebuffer,p,p.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),R!==void 0&&It(p)}function Kt(p){const m=p.texture,R=i.get(p),I=i.get(m);p.addEventListener("dispose",k);const O=p.textures,Y=p.isWebGLCubeRenderTarget===!0,pt=O.length>1,_t=_(p)||o;if(pt||(I.__webglTexture===void 0&&(I.__webglTexture=n.createTexture()),I.__version=m.version,a.memory.textures++),Y){R.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(o&&m.mipmaps&&m.mipmaps.length>0){R.__webglFramebuffer[rt]=[];for(let st=0;st<m.mipmaps.length;st++)R.__webglFramebuffer[rt][st]=n.createFramebuffer()}else R.__webglFramebuffer[rt]=n.createFramebuffer()}else{if(o&&m.mipmaps&&m.mipmaps.length>0){R.__webglFramebuffer=[];for(let rt=0;rt<m.mipmaps.length;rt++)R.__webglFramebuffer[rt]=n.createFramebuffer()}else R.__webglFramebuffer=n.createFramebuffer();if(pt)if(r.drawBuffers)for(let rt=0,st=O.length;rt<st;rt++){const wt=i.get(O[rt]);wt.__webglTexture===void 0&&(wt.__webglTexture=n.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&p.samples>0&&nt(p)===!1){R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let rt=0;rt<O.length;rt++){const st=O[rt];R.__webglColorRenderbuffer[rt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,R.__webglColorRenderbuffer[rt]);const wt=s.convert(st.format,st.colorSpace),ft=s.convert(st.type),Zt=T(st.internalFormat,wt,ft,st.colorSpace,p.isXRRenderTarget===!0),Nt=G(p);n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,Zt,p.width,p.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,R.__webglColorRenderbuffer[rt])}n.bindRenderbuffer(n.RENDERBUFFER,null),p.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),xt(R.__webglDepthRenderbuffer,p,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture),q(n.TEXTURE_CUBE_MAP,m,_t);for(let rt=0;rt<6;rt++)if(o&&m.mipmaps&&m.mipmaps.length>0)for(let st=0;st<m.mipmaps.length;st++)Ct(R.__webglFramebuffer[rt][st],p,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,st);else Ct(R.__webglFramebuffer[rt],p,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);x(m,_t)&&b(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let rt=0,st=O.length;rt<st;rt++){const wt=O[rt],ft=i.get(wt);e.bindTexture(n.TEXTURE_2D,ft.__webglTexture),q(n.TEXTURE_2D,wt,_t),Ct(R.__webglFramebuffer,p,wt,n.COLOR_ATTACHMENT0+rt,n.TEXTURE_2D,0),x(wt,_t)&&b(n.TEXTURE_2D)}e.unbindTexture()}else{let rt=n.TEXTURE_2D;if((p.isWebGL3DRenderTarget||p.isWebGLArrayRenderTarget)&&(o?rt=p.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(rt,I.__webglTexture),q(rt,m,_t),o&&m.mipmaps&&m.mipmaps.length>0)for(let st=0;st<m.mipmaps.length;st++)Ct(R.__webglFramebuffer[st],p,m,n.COLOR_ATTACHMENT0,rt,st);else Ct(R.__webglFramebuffer,p,m,n.COLOR_ATTACHMENT0,rt,0);x(m,_t)&&b(rt),e.unbindTexture()}p.depthBuffer&&It(p)}function Mt(p){const m=_(p)||o,R=p.textures;for(let I=0,O=R.length;I<O;I++){const Y=R[I];if(x(Y,m)){const pt=p.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,_t=i.get(Y).__webglTexture;e.bindTexture(pt,_t),b(pt),e.unbindTexture()}}}function B(p){if(o&&p.samples>0&&nt(p)===!1){const m=p.textures,R=p.width,I=p.height;let O=n.COLOR_BUFFER_BIT;const Y=[],pt=p.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=i.get(p),rt=m.length>1;if(rt)for(let st=0;st<m.length;st++)e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let st=0;st<m.length;st++){Y.push(n.COLOR_ATTACHMENT0+st),p.depthBuffer&&Y.push(pt);const wt=_t.__ignoreDepthValues!==void 0?_t.__ignoreDepthValues:!1;if(wt===!1&&(p.depthBuffer&&(O|=n.DEPTH_BUFFER_BIT),p.stencilBuffer&&(O|=n.STENCIL_BUFFER_BIT)),rt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_t.__webglColorRenderbuffer[st]),wt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[pt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[pt])),rt){const ft=i.get(m[st]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ft,0)}n.blitFramebuffer(0,0,R,I,0,0,R,I,O,n.NEAREST),h&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Y)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),rt)for(let st=0;st<m.length;st++){e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,_t.__webglColorRenderbuffer[st]);const wt=i.get(m[st]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.TEXTURE_2D,wt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}}function G(p){return Math.min(r.maxSamples,p.samples)}function nt(p){const m=i.get(p);return o&&p.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function lt(p){const m=a.render.frame;l.get(p)!==m&&(l.set(p,m),p.update())}function L(p,m){const R=p.colorSpace,I=p.format,O=p.type;return p.isCompressedTexture===!0||p.isVideoTexture===!0||p.format===Ba||R!==si&&R!==Yn&&(Qt.getTransfer(R)===ie?o===!1?t.has("EXT_sRGB")===!0&&I===an?(p.format=Ba,p.minFilter=Fe,p.generateMipmaps=!1):m=ch.sRGBToLinear(m):(I!==an||O!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),m}function u(p){return typeof HTMLImageElement<"u"&&p instanceof HTMLImageElement?(d.width=p.naturalWidth||p.width,d.height=p.naturalHeight||p.height):typeof VideoFrame<"u"&&p instanceof VideoFrame?(d.width=p.displayWidth,d.height=p.displayHeight):(d.width=p.width,d.height=p.height),d}this.allocateTextureUnit=K,this.resetTextureUnits=N,this.setTexture2D=it,this.setTexture2DArray=tt,this.setTexture3D=$,this.setTextureCube=at,this.rebindTextures=V,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=nt}function Tv(n,t,e){const i=e.isWebGL2;function r(s,a=Yn){let o;const c=Qt.getTransfer(a);if(s===ti)return n.UNSIGNED_BYTE;if(s===th)return n.UNSIGNED_SHORT_4_4_4_4;if(s===eh)return n.UNSIGNED_SHORT_5_5_5_1;if(s===ip)return n.BYTE;if(s===rp)return n.SHORT;if(s===nc)return n.UNSIGNED_SHORT;if(s===Qu)return n.INT;if(s===Kn)return n.UNSIGNED_INT;if(s===Rn)return n.FLOAT;if(s===Nr)return i?n.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===sp)return n.ALPHA;if(s===an)return n.RGBA;if(s===op)return n.LUMINANCE;if(s===ap)return n.LUMINANCE_ALPHA;if(s===xi)return n.DEPTH_COMPONENT;if(s===ur)return n.DEPTH_STENCIL;if(s===Ba)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===cp)return n.RED;if(s===nh)return n.RED_INTEGER;if(s===lp)return n.RG;if(s===ih)return n.RG_INTEGER;if(s===rh)return n.RGBA_INTEGER;if(s===ko||s===Bo||s===zo||s===Go)if(c===ie)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ko)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===zo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Go)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ko)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Bo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Go)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Kc||s===Zc||s===Jc||s===Qc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Kc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Zc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Jc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sh)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===tl||s===el)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===tl)return c===ie?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===el)return c===ie?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===nl||s===il||s===rl||s===sl||s===ol||s===al||s===cl||s===ll||s===ul||s===hl||s===fl||s===dl||s===pl||s===ml)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===nl)return c===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===il)return c===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===rl)return c===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===sl)return c===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ol)return c===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===al)return c===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===cl)return c===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ll)return c===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ul)return c===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===hl)return c===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fl)return c===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dl)return c===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===pl)return c===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ml)return c===ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ho||s===gl||s===_l)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Ho)return c===ie?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===gl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===_l)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===up||s===vl||s===yl||s===xl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Ho)return o.COMPRESSED_RED_RGTC1_EXT;if(s===vl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===yl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===yi?i?n.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Av extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Cs extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cv={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const E of t.hand.values()){const y=e.getJointPose(E,i),_=this._getHandJoint(h,E);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const d=h.joints["index-finger-tip"],l=h.joints["thumb-tip"],f=d.position.distanceTo(l.position),g=.02,v=.005;h.inputState.pinching&&f>g+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=g-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cv)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Cs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Rv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Dv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Be,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){const i=e.cameras[0].viewport,r=new ni({extensions:{fragDepth:!0},vertexShader:Rv,fragmentShader:Lv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Dn(new po(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class Pv extends Li{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,h=null,d=null,l=null,f=null,g=null,v=null;const E=new Dv,y=e.getContextAttributes();let _=null,C=null;const x=[],b=[],T=new Ft;let A=null;const M=new $e;M.layers.enable(1),M.viewport=new Ee;const P=new $e;P.layers.enable(2),P.viewport=new Ee;const k=[M,P],S=new Av;S.layers.enable(1),S.layers.enable(2);let w=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ct=x[q];return ct===void 0&&(ct=new pa,x[q]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(q){let ct=x[q];return ct===void 0&&(ct=new pa,x[q]=ct),ct.getGripSpace()},this.getHand=function(q){let ct=x[q];return ct===void 0&&(ct=new pa,x[q]=ct),ct.getHandSpace()};function H(q){const ct=b.indexOf(q.inputSource);if(ct===-1)return;const gt=x[ct];gt!==void 0&&(gt.update(q.inputSource,q.frame,h||a),gt.dispatchEvent({type:q.type,data:q.inputSource}))}function N(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",K);for(let q=0;q<x.length;q++){const ct=b[q];ct!==null&&(b[q]=null,x[q].disconnect(ct))}w=null,z=null,E.reset(),t.setRenderTarget(_),g=null,f=null,l=null,r=null,C=null,bt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return l},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(_=t.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",N),r.addEventListener("inputsourceschange",K),y.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(T),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const ct={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,e,ct),r.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),C=new bi(g.framebufferWidth,g.framebufferHeight,{format:an,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let ct=null,gt=null,Dt=null;y.depth&&(Dt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=y.stencil?ur:xi,gt=y.stencil?yi:Kn);const Ct={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:s};l=new XRWebGLBinding(r,e),f=l.createProjectionLayer(Ct),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),C=new bi(f.textureWidth,f.textureHeight,{format:an,type:ti,depthTexture:new Sh(f.textureWidth,f.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0});const xt=t.properties.get(C);xt.__ignoreDepthValues=f.ignoreDepthValues}C.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await r.requestReferenceSpace(o),bt.setContext(r),bt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function K(q){for(let ct=0;ct<q.removed.length;ct++){const gt=q.removed[ct],Dt=b.indexOf(gt);Dt>=0&&(b[Dt]=null,x[Dt].disconnect(gt))}for(let ct=0;ct<q.added.length;ct++){const gt=q.added[ct];let Dt=b.indexOf(gt);if(Dt===-1){for(let xt=0;xt<x.length;xt++)if(xt>=b.length){b.push(gt),Dt=xt;break}else if(b[xt]===null){b[xt]=gt,Dt=xt;break}if(Dt===-1)break}const Ct=x[Dt];Ct&&Ct.connect(gt)}}const j=new X,it=new X;function tt(q,ct,gt){j.setFromMatrixPosition(ct.matrixWorld),it.setFromMatrixPosition(gt.matrixWorld);const Dt=j.distanceTo(it),Ct=ct.projectionMatrix.elements,xt=gt.projectionMatrix.elements,Gt=Ct[14]/(Ct[10]-1),It=Ct[14]/(Ct[10]+1),V=(Ct[9]+1)/Ct[5],Kt=(Ct[9]-1)/Ct[5],Mt=(Ct[8]-1)/Ct[0],B=(xt[8]+1)/xt[0],G=Gt*Mt,nt=Gt*B,lt=Dt/(-Mt+B),L=lt*-Mt;ct.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(L),q.translateZ(lt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const u=Gt+lt,p=It+lt,m=G-L,R=nt+(Dt-L),I=V*It/p*u,O=Kt*It/p*u;q.projectionMatrix.makePerspective(m,R,I,O,u,p),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function $(q,ct){ct===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ct.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;E.texture!==null&&(q.near=E.depthNear,q.far=E.depthFar),S.near=P.near=M.near=q.near,S.far=P.far=M.far=q.far,(w!==S.near||z!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,z=S.far,M.near=w,M.far=z,P.near=w,P.far=z,M.updateProjectionMatrix(),P.updateProjectionMatrix(),q.updateProjectionMatrix());const ct=q.parent,gt=S.cameras;$(S,ct);for(let Dt=0;Dt<gt.length;Dt++)$(gt[Dt],ct);gt.length===2?tt(S,M,P):S.projectionMatrix.copy(M.projectionMatrix),at(q,S,ct)};function at(q,ct,gt){gt===null?q.matrix.copy(ct.matrixWorld):(q.matrix.copy(gt.matrixWorld),q.matrix.invert(),q.matrix.multiply(ct.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ct.projectionMatrix),q.projectionMatrixInverse.copy(ct.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=za*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&g===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=q)},this.hasDepthSensing=function(){return E.texture!==null};let ht=null;function vt(q,ct){if(d=ct.getViewerPose(h||a),v=ct,d!==null){const gt=d.views;g!==null&&(t.setRenderTargetFramebuffer(C,g.framebuffer),t.setRenderTarget(C));let Dt=!1;gt.length!==S.cameras.length&&(S.cameras.length=0,Dt=!0);for(let xt=0;xt<gt.length;xt++){const Gt=gt[xt];let It=null;if(g!==null)It=g.getViewport(Gt);else{const Kt=l.getViewSubImage(f,Gt);It=Kt.viewport,xt===0&&(t.setRenderTargetTextures(C,Kt.colorTexture,f.ignoreDepthValues?void 0:Kt.depthStencilTexture),t.setRenderTarget(C))}let V=k[xt];V===void 0&&(V=new $e,V.layers.enable(xt),V.viewport=new Ee,k[xt]=V),V.matrix.fromArray(Gt.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(Gt.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(It.x,It.y,It.width,It.height),xt===0&&(S.matrix.copy(V.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Dt===!0&&S.cameras.push(V)}const Ct=r.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const xt=l.getDepthInformation(gt[0]);xt&&xt.isValid&&xt.texture&&E.init(t,xt,r.renderState)}}for(let gt=0;gt<x.length;gt++){const Dt=b[gt],Ct=x[gt];Dt!==null&&Ct!==void 0&&Ct.update(Dt,ct,h||a)}E.render(t,S),ht&&ht(q,ct),ct.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ct}),v=null}const bt=new yh;bt.setAnimationLoop(vt),this.setAnimationLoop=function(q){ht=q},this.dispose=function(){}}}const pi=new Un,Iv=new le;function Uv(n,t){function e(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function i(y,_){_.color.getRGB(y.fogColor.value,gh(n)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function r(y,_,C,x,b){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(y,_):_.isMeshToonMaterial?(s(y,_),l(y,_)):_.isMeshPhongMaterial?(s(y,_),d(y,_)):_.isMeshStandardMaterial?(s(y,_),f(y,_),_.isMeshPhysicalMaterial&&g(y,_,b)):_.isMeshMatcapMaterial?(s(y,_),v(y,_)):_.isMeshDepthMaterial?s(y,_):_.isMeshDistanceMaterial?(s(y,_),E(y,_)):_.isMeshNormalMaterial?s(y,_):_.isLineBasicMaterial?(a(y,_),_.isLineDashedMaterial&&o(y,_)):_.isPointsMaterial?c(y,_,C,x):_.isSpriteMaterial?h(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,e(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,e(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,e(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===ke&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,e(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===ke&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,e(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,e(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const C=t.get(_),x=C.envMap,b=C.envMapRotation;if(x&&(y.envMap.value=x,pi.copy(b),pi.x*=-1,pi.y*=-1,pi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),y.envMapRotation.value.setFromMatrix4(Iv.makeRotationFromEuler(pi)),y.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap){y.lightMap.value=_.lightMap;const T=n._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=_.lightMapIntensity*T,e(_.lightMap,y.lightMapTransform)}_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,y.aoMapTransform))}function a(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,e(_.map,y.mapTransform))}function o(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function c(y,_,C,x){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*C,y.scale.value=x*.5,_.map&&(y.map.value=_.map,e(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,e(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,e(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,e(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function d(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function l(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function f(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,y.roughnessMapTransform)),t.get(_).envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function g(y,_,C){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ke&&y.clearcoatNormalScale.value.negate())),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,y.specularIntensityMapTransform))}function v(y,_){_.matcap&&(y.matcap.value=_.matcap)}function E(y,_){const C=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Nv(n,t,e,i){let r={},s={},a=[];const o=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(C,x){const b=x.program;i.uniformBlockBinding(C,b)}function h(C,x){let b=r[C.id];b===void 0&&(v(C),b=d(C),r[C.id]=b,C.addEventListener("dispose",y));const T=x.program;i.updateUBOMapping(C,T);const A=t.render.frame;s[C.id]!==A&&(f(C),s[C.id]=A)}function d(C){const x=l();C.__bindingPointIndex=x;const b=n.createBuffer(),T=C.__size,A=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,T,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,b),b}function l(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){const x=r[C.id],b=C.uniforms,T=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,M=b.length;A<M;A++){const P=Array.isArray(b[A])?b[A]:[b[A]];for(let k=0,S=P.length;k<S;k++){const w=P[k];if(g(w,A,k,T)===!0){const z=w.__offset,H=Array.isArray(w.value)?w.value:[w.value];let N=0;for(let K=0;K<H.length;K++){const j=H[K],it=E(j);typeof j=="number"||typeof j=="boolean"?(w.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,z+N,w.__data)):j.isMatrix3?(w.__data[0]=j.elements[0],w.__data[1]=j.elements[1],w.__data[2]=j.elements[2],w.__data[3]=0,w.__data[4]=j.elements[3],w.__data[5]=j.elements[4],w.__data[6]=j.elements[5],w.__data[7]=0,w.__data[8]=j.elements[6],w.__data[9]=j.elements[7],w.__data[10]=j.elements[8],w.__data[11]=0):(j.toArray(w.__data,N),N+=it.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(C,x,b,T){const A=C.value,M=x+"_"+b;if(T[M]===void 0)return typeof A=="number"||typeof A=="boolean"?T[M]=A:T[M]=A.clone(),!0;{const P=T[M];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return T[M]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function v(C){const x=C.uniforms;let b=0;const T=16;for(let M=0,P=x.length;M<P;M++){const k=Array.isArray(x[M])?x[M]:[x[M]];for(let S=0,w=k.length;S<w;S++){const z=k[S],H=Array.isArray(z.value)?z.value:[z.value];for(let N=0,K=H.length;N<K;N++){const j=H[N],it=E(j),tt=b%T;tt!==0&&T-tt<it.boundary&&(b+=T-tt),z.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=b,b+=it.storage}}}const A=b%T;return A>0&&(b+=T-A),C.__size=b,C.__cache={},this}function E(C){const x={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(x.boundary=4,x.storage=4):C.isVector2?(x.boundary=8,x.storage=8):C.isVector3||C.isColor?(x.boundary=16,x.storage=12):C.isVector4?(x.boundary=16,x.storage=16):C.isMatrix3?(x.boundary=48,x.storage=48):C.isMatrix4?(x.boundary=64,x.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),x}function y(C){const x=C.target;x.removeEventListener("dispose",y);const b=a.indexOf(x.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function _(){for(const C in r)n.deleteBuffer(r[C]);a=[],r={},s={}}return{bind:c,update:h,dispose:_}}class Ah{constructor(t={}){const{canvas:e=Mp(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:l=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;const g=new Uint32Array(4),v=new Int32Array(4);let E=null,y=null;const _=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this._useLegacyLights=!1,this.toneMapping=Qn,this.toneMappingExposure=1;const x=this;let b=!1,T=0,A=0,M=null,P=-1,k=null;const S=new Ee,w=new Ee;let z=null;const H=new Yt(0);let N=0,K=e.width,j=e.height,it=1,tt=null,$=null;const at=new Ee(0,0,K,j),ht=new Ee(0,0,K,j);let vt=!1;const bt=new sc;let q=!1,ct=!1,gt=null;const Dt=new le,Ct=new Ft,xt=new X,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function It(){return M===null?it:1}let V=i;function Kt(D,W){for(let Q=0;Q<D.length;Q++){const et=D[Q],J=e.getContext(et,W);if(J!==null)return J}return null}try{const D={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ec}`),e.addEventListener("webglcontextlost",At,!1),e.addEventListener("webglcontextrestored",F,!1),e.addEventListener("webglcontextcreationerror",dt,!1),V===null){const W=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&W.shift(),V=Kt(W,D),V===null)throw Kt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Mt,B,G,nt,lt,L,u,p,m,R,I,O,Y,pt,_t,rt,st,wt,ft,Zt,Nt,Tt,St,Rt;function U(){Mt=new G_(V),B=new N_(V,Mt,t),Mt.init(B),Tt=new Tv(V,Mt,B),G=new Mv(V,Mt,B),nt=new W_(V),lt=new uv,L=new wv(V,Mt,G,lt,B,Tt,nt),u=new F_(x),p=new z_(x),m=new Kp(V,B),St=new I_(V,Mt,m,B),R=new H_(V,m,nt,St),I=new Y_(V,R,m,nt),ft=new q_(V,B,L),rt=new O_(lt),O=new lv(x,u,p,Mt,B,St,rt),Y=new Uv(x,lt),pt=new fv,_t=new vv(Mt,B),wt=new P_(x,u,p,G,I,f,c),st=new bv(x,I,B),Rt=new Nv(V,nt,B,G),Zt=new U_(V,Mt,nt,B),Nt=new V_(V,Mt,nt,B),nt.programs=O.programs,x.capabilities=B,x.extensions=Mt,x.properties=lt,x.renderLists=pt,x.shadowMap=st,x.state=G,x.info=nt}U();const ot=new Pv(x,V);this.xr=ot,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const D=Mt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Mt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(D){D!==void 0&&(it=D,this.setSize(K,j,!1))},this.getSize=function(D){return D.set(K,j)},this.setSize=function(D,W,Q=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=D,j=W,e.width=Math.floor(D*it),e.height=Math.floor(W*it),Q===!0&&(e.style.width=D+"px",e.style.height=W+"px"),this.setViewport(0,0,D,W)},this.getDrawingBufferSize=function(D){return D.set(K*it,j*it).floor()},this.setDrawingBufferSize=function(D,W,Q){K=D,j=W,it=Q,e.width=Math.floor(D*Q),e.height=Math.floor(W*Q),this.setViewport(0,0,D,W)},this.getCurrentViewport=function(D){return D.copy(S)},this.getViewport=function(D){return D.copy(at)},this.setViewport=function(D,W,Q,et){D.isVector4?at.set(D.x,D.y,D.z,D.w):at.set(D,W,Q,et),G.viewport(S.copy(at).multiplyScalar(it).round())},this.getScissor=function(D){return D.copy(ht)},this.setScissor=function(D,W,Q,et){D.isVector4?ht.set(D.x,D.y,D.z,D.w):ht.set(D,W,Q,et),G.scissor(w.copy(ht).multiplyScalar(it).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(D){G.setScissorTest(vt=D)},this.setOpaqueSort=function(D){tt=D},this.setTransparentSort=function(D){$=D},this.getClearColor=function(D){return D.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(D=!0,W=!0,Q=!0){let et=0;if(D){let J=!1;if(M!==null){const Et=M.texture.format;J=Et===rh||Et===ih||Et===nh}if(J){const Et=M.texture.type,Lt=Et===ti||Et===Kn||Et===nc||Et===yi||Et===th||Et===eh,Ut=wt.getClearColor(),Ot=wt.getClearAlpha(),Xt=Ut.r,Bt=Ut.g,zt=Ut.b;Lt?(g[0]=Xt,g[1]=Bt,g[2]=zt,g[3]=Ot,V.clearBufferuiv(V.COLOR,0,g)):(v[0]=Xt,v[1]=Bt,v[2]=zt,v[3]=Ot,V.clearBufferiv(V.COLOR,0,v))}else et|=V.COLOR_BUFFER_BIT}W&&(et|=V.DEPTH_BUFFER_BIT),Q&&(et|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",F,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),pt.dispose(),_t.dispose(),lt.dispose(),u.dispose(),p.dispose(),I.dispose(),St.dispose(),Rt.dispose(),O.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",ae),ot.removeEventListener("sessionend",$t),gt&&(gt.dispose(),gt=null),ne.stop()};function At(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const D=nt.autoReset,W=st.enabled,Q=st.autoUpdate,et=st.needsUpdate,J=st.type;U(),nt.autoReset=D,st.enabled=W,st.autoUpdate=Q,st.needsUpdate=et,st.type=J}function dt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Z(D){const W=D.target;W.removeEventListener("dispose",Z),ut(W)}function ut(D){yt(D),lt.remove(D)}function yt(D){const W=lt.get(D).programs;W!==void 0&&(W.forEach(function(Q){O.releaseProgram(Q)}),D.isShaderMaterial&&O.releaseShaderCache(D))}this.renderBufferDirect=function(D,W,Q,et,J,Et){W===null&&(W=Gt);const Lt=J.isMesh&&J.matrixWorld.determinant()<0,Ut=gd(D,W,Q,et,J);G.setMaterial(et,Lt);let Ot=Q.index,Xt=1;if(et.wireframe===!0){if(Ot=R.getWireframeAttribute(Q),Ot===void 0)return;Xt=2}const Bt=Q.drawRange,zt=Q.attributes.position;let ue=Bt.start*Xt,Ge=(Bt.start+Bt.count)*Xt;Et!==null&&(ue=Math.max(ue,Et.start*Xt),Ge=Math.min(Ge,(Et.start+Et.count)*Xt)),Ot!==null?(ue=Math.max(ue,0),Ge=Math.min(Ge,Ot.count)):zt!=null&&(ue=Math.max(ue,0),Ge=Math.min(Ge,zt.count));const _e=Ge-ue;if(_e<0||_e===1/0)return;St.setup(J,et,Ut,Q,Ot);let xn,se=Zt;if(Ot!==null&&(xn=m.get(Ot),se=Nt,se.setIndex(xn)),J.isMesh)et.wireframe===!0?(G.setLineWidth(et.wireframeLinewidth*It()),se.setMode(V.LINES)):se.setMode(V.TRIANGLES);else if(J.isLine){let Ht=et.linewidth;Ht===void 0&&(Ht=1),G.setLineWidth(Ht*It()),J.isLineSegments?se.setMode(V.LINES):J.isLineLoop?se.setMode(V.LINE_LOOP):se.setMode(V.LINE_STRIP)}else J.isPoints?se.setMode(V.POINTS):J.isSprite&&se.setMode(V.TRIANGLES);if(J.isBatchedMesh)se.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)se.renderInstances(ue,_e,J.count);else if(Q.isInstancedBufferGeometry){const Ht=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Io=Math.min(Q.instanceCount,Ht);se.renderInstances(ue,_e,Io)}else se.render(ue,_e)};function jt(D,W,Q){D.transparent===!0&&D.side===Cn&&D.forceSinglePass===!1?(D.side=ke,D.needsUpdate=!0,ss(D,W,Q),D.side=ei,D.needsUpdate=!0,ss(D,W,Q),D.side=Cn):ss(D,W,Q)}this.compile=function(D,W,Q=null){Q===null&&(Q=D),y=_t.get(Q),y.init(),C.push(y),Q.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(y.pushLight(J),J.castShadow&&y.pushShadow(J))}),D!==Q&&D.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(y.pushLight(J),J.castShadow&&y.pushShadow(J))}),y.setupLights(x._useLegacyLights);const et=new Set;return D.traverse(function(J){const Et=J.material;if(Et)if(Array.isArray(Et))for(let Lt=0;Lt<Et.length;Lt++){const Ut=Et[Lt];jt(Ut,Q,J),et.add(Ut)}else jt(Et,Q,J),et.add(Et)}),C.pop(),y=null,et},this.compileAsync=function(D,W,Q=null){const et=this.compile(D,W,Q);return new Promise(J=>{function Et(){if(et.forEach(function(Lt){lt.get(Lt).currentProgram.isReady()&&et.delete(Lt)}),et.size===0){J(D);return}setTimeout(Et,10)}Mt.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Jt=null;function te(D){Jt&&Jt(D)}function ae(){ne.stop()}function $t(){ne.start()}const ne=new yh;ne.setAnimationLoop(te),typeof self<"u"&&ne.setContext(self),this.setAnimationLoop=function(D){Jt=D,ot.setAnimationLoop(D),D===null?ne.stop():ne.start()},ot.addEventListener("sessionstart",ae),ot.addEventListener("sessionend",$t),this.render=function(D,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(W),W=ot.getCamera()),D.isScene===!0&&D.onBeforeRender(x,D,W,M),y=_t.get(D,C.length),y.init(),C.push(y),Dt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),bt.setFromProjectionMatrix(Dt),ct=this.localClippingEnabled,q=rt.init(this.clippingPlanes,ct),E=pt.get(D,_.length),E.init(),_.push(E),Ae(D,W,0,x.sortObjects),E.finish(),x.sortObjects===!0&&E.sort(tt,$),this.info.render.frame++,q===!0&&rt.beginShadows();const Q=y.state.shadowsArray;if(st.render(Q,D,W),q===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1)&&wt.render(E,D),y.setupLights(x._useLegacyLights),W.isArrayCamera){const et=W.cameras;for(let J=0,Et=et.length;J<Et;J++){const Lt=et[J];oi(E,D,Lt,Lt.viewport)}}else oi(E,D,W);M!==null&&(L.updateMultisampleRenderTarget(M),L.updateRenderTargetMipmap(M)),D.isScene===!0&&D.onAfterRender(x,D,W),St.resetDefaultState(),P=-1,k=null,C.pop(),C.length>0?y=C[C.length-1]:y=null,_.pop(),_.length>0?E=_[_.length-1]:E=null};function Ae(D,W,Q,et){if(D.visible===!1)return;if(D.layers.test(W.layers)){if(D.isGroup)Q=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(W);else if(D.isLight)y.pushLight(D),D.castShadow&&y.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||bt.intersectsSprite(D)){et&&xt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Dt);const Lt=I.update(D),Ut=D.material;Ut.visible&&E.push(D,Lt,Ut,Q,xt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||bt.intersectsObject(D))){const Lt=I.update(D),Ut=D.material;if(et&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),xt.copy(D.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),xt.copy(Lt.boundingSphere.center)),xt.applyMatrix4(D.matrixWorld).applyMatrix4(Dt)),Array.isArray(Ut)){const Ot=Lt.groups;for(let Xt=0,Bt=Ot.length;Xt<Bt;Xt++){const zt=Ot[Xt],ue=Ut[zt.materialIndex];ue&&ue.visible&&E.push(D,Lt,ue,Q,xt.z,zt)}}else Ut.visible&&E.push(D,Lt,Ut,Q,xt.z,null)}}const Et=D.children;for(let Lt=0,Ut=Et.length;Lt<Ut;Lt++)Ae(Et[Lt],W,Q,et)}function oi(D,W,Q,et){const J=D.opaque,Et=D.transmissive,Lt=D.transparent;y.setupLightsView(Q),q===!0&&rt.setGlobalState(x.clippingPlanes,Q),Et.length>0&&is(J,Et,W,Q),et&&G.viewport(S.copy(et)),J.length>0&&rs(J,W,Q),Et.length>0&&rs(Et,W,Q),Lt.length>0&&rs(Lt,W,Q),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function is(D,W,Q,et){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;const Et=B.isWebGL2;gt===null&&(gt=new bi(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")?Nr:ti,minFilter:vi,samples:Et?4:0})),x.getDrawingBufferSize(Ct),Et?gt.setSize(Ct.x,Ct.y):gt.setSize(Ga(Ct.x),Ga(Ct.y));const Lt=x.getRenderTarget();x.setRenderTarget(gt),x.getClearColor(H),N=x.getClearAlpha(),N<1&&x.setClearColor(16777215,.5),x.clear();const Ut=x.toneMapping;x.toneMapping=Qn,rs(D,Q,et),L.updateMultisampleRenderTarget(gt),L.updateRenderTargetMipmap(gt);let Ot=!1;for(let Xt=0,Bt=W.length;Xt<Bt;Xt++){const zt=W[Xt],ue=zt.object,Ge=zt.geometry,_e=zt.material,xn=zt.group;if(_e.side===Cn&&ue.layers.test(et.layers)){const se=_e.side;_e.side=ke,_e.needsUpdate=!0,kc(ue,Q,et,Ge,_e,xn),_e.side=se,_e.needsUpdate=!0,Ot=!0}}Ot===!0&&(L.updateMultisampleRenderTarget(gt),L.updateRenderTargetMipmap(gt)),x.setRenderTarget(Lt),x.setClearColor(H,N),x.toneMapping=Ut}function rs(D,W,Q){const et=W.isScene===!0?W.overrideMaterial:null;for(let J=0,Et=D.length;J<Et;J++){const Lt=D[J],Ut=Lt.object,Ot=Lt.geometry,Xt=et===null?Lt.material:et,Bt=Lt.group;Ut.layers.test(Q.layers)&&kc(Ut,W,Q,Ot,Xt,Bt)}}function kc(D,W,Q,et,J,Et){D.onBeforeRender(x,W,Q,et,J,Et),D.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),J.onBeforeRender(x,W,Q,et,D,Et),J.transparent===!0&&J.side===Cn&&J.forceSinglePass===!1?(J.side=ke,J.needsUpdate=!0,x.renderBufferDirect(Q,W,et,J,D,Et),J.side=ei,J.needsUpdate=!0,x.renderBufferDirect(Q,W,et,J,D,Et),J.side=Cn):x.renderBufferDirect(Q,W,et,J,D,Et),D.onAfterRender(x,W,Q,et,J,Et)}function ss(D,W,Q){W.isScene!==!0&&(W=Gt);const et=lt.get(D),J=y.state.lights,Et=y.state.shadowsArray,Lt=J.state.version,Ut=O.getParameters(D,J.state,Et,W,Q),Ot=O.getProgramCacheKey(Ut);let Xt=et.programs;et.environment=D.isMeshStandardMaterial?W.environment:null,et.fog=W.fog,et.envMap=(D.isMeshStandardMaterial?p:u).get(D.envMap||et.environment),et.envMapRotation=et.environment!==null&&D.envMap===null?W.environmentRotation:D.envMapRotation,Xt===void 0&&(D.addEventListener("dispose",Z),Xt=new Map,et.programs=Xt);let Bt=Xt.get(Ot);if(Bt!==void 0){if(et.currentProgram===Bt&&et.lightsStateVersion===Lt)return zc(D,Ut),Bt}else Ut.uniforms=O.getUniforms(D),D.onBuild(Q,Ut,x),D.onBeforeCompile(Ut,x),Bt=O.acquireProgram(Ut,Ot),Xt.set(Ot,Bt),et.uniforms=Ut.uniforms;const zt=et.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(zt.clippingPlanes=rt.uniform),zc(D,Ut),et.needsLights=vd(D),et.lightsStateVersion=Lt,et.needsLights&&(zt.ambientLightColor.value=J.state.ambient,zt.lightProbe.value=J.state.probe,zt.directionalLights.value=J.state.directional,zt.directionalLightShadows.value=J.state.directionalShadow,zt.spotLights.value=J.state.spot,zt.spotLightShadows.value=J.state.spotShadow,zt.rectAreaLights.value=J.state.rectArea,zt.ltc_1.value=J.state.rectAreaLTC1,zt.ltc_2.value=J.state.rectAreaLTC2,zt.pointLights.value=J.state.point,zt.pointLightShadows.value=J.state.pointShadow,zt.hemisphereLights.value=J.state.hemi,zt.directionalShadowMap.value=J.state.directionalShadowMap,zt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,zt.spotShadowMap.value=J.state.spotShadowMap,zt.spotLightMatrix.value=J.state.spotLightMatrix,zt.spotLightMap.value=J.state.spotLightMap,zt.pointShadowMap.value=J.state.pointShadowMap,zt.pointShadowMatrix.value=J.state.pointShadowMatrix),et.currentProgram=Bt,et.uniformsList=null,Bt}function Bc(D){if(D.uniformsList===null){const W=D.currentProgram.getUniforms();D.uniformsList=Os.seqWithValue(W.seq,D.uniforms)}return D.uniformsList}function zc(D,W){const Q=lt.get(D);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.instancingMorph=W.instancingMorph,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function gd(D,W,Q,et,J){W.isScene!==!0&&(W=Gt),L.resetTextureUnits();const Et=W.fog,Lt=et.isMeshStandardMaterial?W.environment:null,Ut=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:si,Ot=(et.isMeshStandardMaterial?p:u).get(et.envMap||Lt),Xt=et.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Bt=!!Q.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),zt=!!Q.morphAttributes.position,ue=!!Q.morphAttributes.normal,Ge=!!Q.morphAttributes.color;let _e=Qn;et.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(_e=x.toneMapping);const xn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,se=xn!==void 0?xn.length:0,Ht=lt.get(et),Io=y.state.lights;if(q===!0&&(ct===!0||D!==k)){const qe=D===k&&et.id===P;rt.setState(et,D,qe)}let re=!1;et.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Io.state.version||Ht.outputColorSpace!==Ut||J.isBatchedMesh&&Ht.batching===!1||!J.isBatchedMesh&&Ht.batching===!0||J.isInstancedMesh&&Ht.instancing===!1||!J.isInstancedMesh&&Ht.instancing===!0||J.isSkinnedMesh&&Ht.skinning===!1||!J.isSkinnedMesh&&Ht.skinning===!0||J.isInstancedMesh&&Ht.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ht.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Ht.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Ht.instancingMorph===!1&&J.morphTexture!==null||Ht.envMap!==Ot||et.fog===!0&&Ht.fog!==Et||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==rt.numPlanes||Ht.numIntersection!==rt.numIntersection)||Ht.vertexAlphas!==Xt||Ht.vertexTangents!==Bt||Ht.morphTargets!==zt||Ht.morphNormals!==ue||Ht.morphColors!==Ge||Ht.toneMapping!==_e||B.isWebGL2===!0&&Ht.morphTargetsCount!==se)&&(re=!0):(re=!0,Ht.__version=et.version);let ai=Ht.currentProgram;re===!0&&(ai=ss(et,W,J));let Gc=!1,Ar=!1,Uo=!1;const Ce=ai.getUniforms(),ci=Ht.uniforms;if(G.useProgram(ai.program)&&(Gc=!0,Ar=!0,Uo=!0),et.id!==P&&(P=et.id,Ar=!0),Gc||k!==D){Ce.setValue(V,"projectionMatrix",D.projectionMatrix),Ce.setValue(V,"viewMatrix",D.matrixWorldInverse);const qe=Ce.map.cameraPosition;qe!==void 0&&qe.setValue(V,xt.setFromMatrixPosition(D.matrixWorld)),B.logarithmicDepthBuffer&&Ce.setValue(V,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Ce.setValue(V,"isOrthographic",D.isOrthographicCamera===!0),k!==D&&(k=D,Ar=!0,Uo=!0)}if(J.isSkinnedMesh){Ce.setOptional(V,J,"bindMatrix"),Ce.setOptional(V,J,"bindMatrixInverse");const qe=J.skeleton;qe&&(B.floatVertexTextures?(qe.boneTexture===null&&qe.computeBoneTexture(),Ce.setValue(V,"boneTexture",qe.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}J.isBatchedMesh&&(Ce.setOptional(V,J,"batchingTexture"),Ce.setValue(V,"batchingTexture",J._matricesTexture,L));const No=Q.morphAttributes;if((No.position!==void 0||No.normal!==void 0||No.color!==void 0&&B.isWebGL2===!0)&&ft.update(J,Q,ai),(Ar||Ht.receiveShadow!==J.receiveShadow)&&(Ht.receiveShadow=J.receiveShadow,Ce.setValue(V,"receiveShadow",J.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(ci.envMap.value=Ot,ci.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),Ar&&(Ce.setValue(V,"toneMappingExposure",x.toneMappingExposure),Ht.needsLights&&_d(ci,Uo),Et&&et.fog===!0&&Y.refreshFogUniforms(ci,Et),Y.refreshMaterialUniforms(ci,et,it,j,gt),Os.upload(V,Bc(Ht),ci,L)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Os.upload(V,Bc(Ht),ci,L),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Ce.setValue(V,"center",J.center),Ce.setValue(V,"modelViewMatrix",J.modelViewMatrix),Ce.setValue(V,"normalMatrix",J.normalMatrix),Ce.setValue(V,"modelMatrix",J.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const qe=et.uniformsGroups;for(let Oo=0,yd=qe.length;Oo<yd;Oo++)if(B.isWebGL2){const Hc=qe[Oo];Rt.update(Hc,ai),Rt.bind(Hc,ai)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ai}function _d(D,W){D.ambientLightColor.needsUpdate=W,D.lightProbe.needsUpdate=W,D.directionalLights.needsUpdate=W,D.directionalLightShadows.needsUpdate=W,D.pointLights.needsUpdate=W,D.pointLightShadows.needsUpdate=W,D.spotLights.needsUpdate=W,D.spotLightShadows.needsUpdate=W,D.rectAreaLights.needsUpdate=W,D.hemisphereLights.needsUpdate=W}function vd(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(D,W,Q){lt.get(D.texture).__webglTexture=W,lt.get(D.depthTexture).__webglTexture=Q;const et=lt.get(D);et.__hasExternalTextures=!0,et.__autoAllocateDepthBuffer=Q===void 0,et.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),et.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,W){const Q=lt.get(D);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(D,W=0,Q=0){M=D,T=W,A=Q;let et=!0,J=null,Et=!1,Lt=!1;if(D){const Ot=lt.get(D);Ot.__useDefaultFramebuffer!==void 0?(G.bindFramebuffer(V.FRAMEBUFFER,null),et=!1):Ot.__webglFramebuffer===void 0?L.setupRenderTarget(D):Ot.__hasExternalTextures&&L.rebindTextures(D,lt.get(D.texture).__webglTexture,lt.get(D.depthTexture).__webglTexture);const Xt=D.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Lt=!0);const Bt=lt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Bt[W])?J=Bt[W][Q]:J=Bt[W],Et=!0):B.isWebGL2&&D.samples>0&&L.useMultisampledRTT(D)===!1?J=lt.get(D).__webglMultisampledFramebuffer:Array.isArray(Bt)?J=Bt[Q]:J=Bt,S.copy(D.viewport),w.copy(D.scissor),z=D.scissorTest}else S.copy(at).multiplyScalar(it).floor(),w.copy(ht).multiplyScalar(it).floor(),z=vt;if(G.bindFramebuffer(V.FRAMEBUFFER,J)&&B.drawBuffers&&et&&G.drawBuffers(D,J),G.viewport(S),G.scissor(w),G.setScissorTest(z),Et){const Ot=lt.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ot.__webglTexture,Q)}else if(Lt){const Ot=lt.get(D.texture),Xt=W||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ot.__webglTexture,Q||0,Xt)}P=-1},this.readRenderTargetPixels=function(D,W,Q,et,J,Et,Lt){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=lt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ut=Ut[Lt]),Ut){G.bindFramebuffer(V.FRAMEBUFFER,Ut);try{const Ot=D.texture,Xt=Ot.format,Bt=Ot.type;if(Xt!==an&&Tt.convert(Xt)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const zt=Bt===Nr&&(Mt.has("EXT_color_buffer_half_float")||B.isWebGL2&&Mt.has("EXT_color_buffer_float"));if(Bt!==ti&&Tt.convert(Bt)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Bt===Rn&&(B.isWebGL2||Mt.has("OES_texture_float")||Mt.has("WEBGL_color_buffer_float")))&&!zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=D.width-et&&Q>=0&&Q<=D.height-J&&V.readPixels(W,Q,et,J,Tt.convert(Xt),Tt.convert(Bt),Et)}finally{const Ot=M!==null?lt.get(M).__webglFramebuffer:null;G.bindFramebuffer(V.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(D,W,Q=0){const et=Math.pow(2,-Q),J=Math.floor(W.image.width*et),Et=Math.floor(W.image.height*et);L.setTexture2D(W,0),V.copyTexSubImage2D(V.TEXTURE_2D,Q,0,0,D.x,D.y,J,Et),G.unbindTexture()},this.copyTextureToTexture=function(D,W,Q,et=0){const J=W.image.width,Et=W.image.height,Lt=Tt.convert(Q.format),Ut=Tt.convert(Q.type);L.setTexture2D(Q,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Q.unpackAlignment),W.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,et,D.x,D.y,J,Et,Lt,Ut,W.image.data):W.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,et,D.x,D.y,W.mipmaps[0].width,W.mipmaps[0].height,Lt,W.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,et,D.x,D.y,Lt,Ut,W.image),et===0&&Q.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),G.unbindTexture()},this.copyTextureToTexture3D=function(D,W,Q,et,J=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Et=Math.round(D.max.x-D.min.x),Lt=Math.round(D.max.y-D.min.y),Ut=D.max.z-D.min.z+1,Ot=Tt.convert(et.format),Xt=Tt.convert(et.type);let Bt;if(et.isData3DTexture)L.setTexture3D(et,0),Bt=V.TEXTURE_3D;else if(et.isDataArrayTexture||et.isCompressedArrayTexture)L.setTexture2DArray(et,0),Bt=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,et.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,et.unpackAlignment);const zt=V.getParameter(V.UNPACK_ROW_LENGTH),ue=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Ge=V.getParameter(V.UNPACK_SKIP_PIXELS),_e=V.getParameter(V.UNPACK_SKIP_ROWS),xn=V.getParameter(V.UNPACK_SKIP_IMAGES),se=Q.isCompressedTexture?Q.mipmaps[J]:Q.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,se.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,se.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,D.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,D.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,D.min.z),Q.isDataTexture||Q.isData3DTexture?V.texSubImage3D(Bt,J,W.x,W.y,W.z,Et,Lt,Ut,Ot,Xt,se.data):et.isCompressedArrayTexture?V.compressedTexSubImage3D(Bt,J,W.x,W.y,W.z,Et,Lt,Ut,Ot,se.data):V.texSubImage3D(Bt,J,W.x,W.y,W.z,Et,Lt,Ut,Ot,Xt,se),V.pixelStorei(V.UNPACK_ROW_LENGTH,zt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ue),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ge),V.pixelStorei(V.UNPACK_SKIP_ROWS,_e),V.pixelStorei(V.UNPACK_SKIP_IMAGES,xn),J===0&&et.generateMipmaps&&V.generateMipmap(Bt),G.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?L.setTextureCube(D,0):D.isData3DTexture?L.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?L.setTexture2DArray(D,0):L.setTexture2D(D,0),G.unbindTexture()},this.resetState=function(){T=0,A=0,M=null,G.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ic?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===ho?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Ov extends Ah{}Ov.prototype.isWebGL1Renderer=!0;class Fv extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ch extends Yr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const hu=new X,fu=new X,du=new le,ma=new rc,Rs=new fo;class kv extends we{constructor(t=new Fn,e=new Ch){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)hu.fromBufferAttribute(e,r-1),fu.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=hu.distanceTo(fu);t.setAttribute("lineDistance",new cn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rs.copy(i.boundingSphere),Rs.applyMatrix4(r),Rs.radius+=s,t.ray.intersectsSphere(Rs)===!1)return;du.copy(r).invert(),ma.copy(t.ray).applyMatrix4(du);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=new X,d=new X,l=new X,f=new X,g=this.isLineSegments?2:1,v=i.index,y=i.attributes.position;if(v!==null){const _=Math.max(0,a.start),C=Math.min(v.count,a.start+a.count);for(let x=_,b=C-1;x<b;x+=g){const T=v.getX(x),A=v.getX(x+1);if(h.fromBufferAttribute(y,T),d.fromBufferAttribute(y,A),ma.distanceSqToSegment(h,d,f,l)>c)continue;f.applyMatrix4(this.matrixWorld);const P=t.ray.origin.distanceTo(f);P<t.near||P>t.far||e.push({distance:P,point:l.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,a.start),C=Math.min(y.count,a.start+a.count);for(let x=_,b=C-1;x<b;x+=g){if(h.fromBufferAttribute(y,x),d.fromBufferAttribute(y,x+1),ma.distanceSqToSegment(h,d,f,l)>c)continue;f.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(f);A<t.near||A>t.far||e.push({distance:A,point:l.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const pu=new X,mu=new X;class Bv extends kv{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)pu.fromBufferAttribute(e,r),mu.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+pu.distanceTo(mu);t.setAttribute("lineDistance",new cn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rh extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const ga=new le,gu=new X,_u=new X;class zv{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sc,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;gu.setFromMatrixPosition(t.matrixWorld),e.position.copy(gu),_u.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_u),e.updateMatrixWorld(),ga.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ga),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ga)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Gv extends zv{constructor(){super(new xh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hv extends Rh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new Gv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Vv extends Rh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class vu{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ne(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Wv extends Bv{constructor(t=10,e=10,i=4473924,r=8947848){i=new Yt(i),r=new Yt(r);const s=e/2,a=t/e,o=t/2,c=[],h=[];for(let f=0,g=0,v=-o;f<=e;f++,v+=a){c.push(-o,0,v,o,0,v),c.push(v,0,-o,v,0,o);const E=f===s?i:r;E.toArray(h,g),g+=3,E.toArray(h,g),g+=3,E.toArray(h,g),g+=3,E.toArray(h,g),g+=3}const d=new Fn;d.setAttribute("position",new cn(c,3)),d.setAttribute("color",new cn(h,3));const l=new Ch({vertexColors:!0,toneMapped:!1});super(d,l),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ec);const yu={type:"change"},_a={type:"start"},xu={type:"end"},Ls=new rc,Su=new jn,Xv=Math.cos(70*bp.DEG2RAD);class jv extends Li{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ii.ROTATE,MIDDLE:Ii.DOLLY,RIGHT:Ii.PAN},this.touches={ONE:Ui.ROTATE,TWO:Ui.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",_t),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_t),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(yu),i.update(),s=r.NONE},this.update=function(){const U=new X,ot=new Mi().setFromUnitVectors(t.up,new X(0,1,0)),At=ot.clone().invert(),F=new X,dt=new Mi,Z=new X,ut=2*Math.PI;return function(jt=null){const Jt=i.object.position;U.copy(Jt).sub(i.target),U.applyQuaternion(ot),o.setFromVector3(U),i.autoRotate&&s===r.NONE&&z(S(jt)),i.enableDamping?(o.theta+=c.theta*i.dampingFactor,o.phi+=c.phi*i.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let te=i.minAzimuthAngle,ae=i.maxAzimuthAngle;isFinite(te)&&isFinite(ae)&&(te<-Math.PI?te+=ut:te>Math.PI&&(te-=ut),ae<-Math.PI?ae+=ut:ae>Math.PI&&(ae-=ut),te<=ae?o.theta=Math.max(te,Math.min(ae,o.theta)):o.theta=o.theta>(te+ae)/2?Math.max(te,o.theta):Math.min(ae,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let $t=!1;if(i.zoomToCursor&&A||i.object.isOrthographicCamera)o.radius=at(o.radius);else{const ne=o.radius;o.radius=at(o.radius*h),$t=ne!=o.radius}if(U.setFromSpherical(o),U.applyQuaternion(At),Jt.copy(i.target).add(U),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),d.set(0,0,0)),i.zoomToCursor&&A){let ne=null;if(i.object.isPerspectiveCamera){const Ae=U.length();ne=at(Ae*h);const oi=Ae-ne;i.object.position.addScaledVector(b,oi),i.object.updateMatrixWorld(),$t=!!oi}else if(i.object.isOrthographicCamera){const Ae=new X(T.x,T.y,0);Ae.unproject(i.object);const oi=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/h)),i.object.updateProjectionMatrix(),$t=oi!==i.object.zoom;const is=new X(T.x,T.y,0);is.unproject(i.object),i.object.position.sub(is).add(Ae),i.object.updateMatrixWorld(),ne=U.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ne!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ne).add(i.object.position):(Ls.origin.copy(i.object.position),Ls.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ls.direction))<Xv?t.lookAt(i.target):(Su.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ls.intersectPlane(Su,i.target))))}else if(i.object.isOrthographicCamera){const ne=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/h)),ne!==i.object.zoom&&(i.object.updateProjectionMatrix(),$t=!0)}return h=1,A=!1,$t||F.distanceToSquared(i.object.position)>a||8*(1-dt.dot(i.object.quaternion))>a||Z.distanceToSquared(i.target)>a?(i.dispatchEvent(yu),F.copy(i.object.position),dt.copy(i.object.quaternion),Z.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",wt),i.domElement.removeEventListener("pointerdown",L),i.domElement.removeEventListener("pointercancel",p),i.domElement.removeEventListener("wheel",I),i.domElement.removeEventListener("pointermove",u),i.domElement.removeEventListener("pointerup",p),i.domElement.getRootNode().removeEventListener("keydown",Y,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",_t),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new vu,c=new vu;let h=1;const d=new X,l=new Ft,f=new Ft,g=new Ft,v=new Ft,E=new Ft,y=new Ft,_=new Ft,C=new Ft,x=new Ft,b=new X,T=new Ft;let A=!1;const M=[],P={};let k=!1;function S(U){return U!==null?2*Math.PI/60*i.autoRotateSpeed*U:2*Math.PI/60/60*i.autoRotateSpeed}function w(U){const ot=Math.abs(U*.01);return Math.pow(.95,i.zoomSpeed*ot)}function z(U){c.theta-=U}function H(U){c.phi-=U}const N=function(){const U=new X;return function(At,F){U.setFromMatrixColumn(F,0),U.multiplyScalar(-At),d.add(U)}}(),K=function(){const U=new X;return function(At,F){i.screenSpacePanning===!0?U.setFromMatrixColumn(F,1):(U.setFromMatrixColumn(F,0),U.crossVectors(i.object.up,U)),U.multiplyScalar(At),d.add(U)}}(),j=function(){const U=new X;return function(At,F){const dt=i.domElement;if(i.object.isPerspectiveCamera){const Z=i.object.position;U.copy(Z).sub(i.target);let ut=U.length();ut*=Math.tan(i.object.fov/2*Math.PI/180),N(2*At*ut/dt.clientHeight,i.object.matrix),K(2*F*ut/dt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(N(At*(i.object.right-i.object.left)/i.object.zoom/dt.clientWidth,i.object.matrix),K(F*(i.object.top-i.object.bottom)/i.object.zoom/dt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function it(U){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?h/=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function tt(U){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?h*=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(U,ot){if(!i.zoomToCursor)return;A=!0;const At=i.domElement.getBoundingClientRect(),F=U-At.left,dt=ot-At.top,Z=At.width,ut=At.height;T.x=F/Z*2-1,T.y=-(dt/ut)*2+1,b.set(T.x,T.y,1).unproject(i.object).sub(i.object.position).normalize()}function at(U){return Math.max(i.minDistance,Math.min(i.maxDistance,U))}function ht(U){l.set(U.clientX,U.clientY)}function vt(U){$(U.clientX,U.clientX),_.set(U.clientX,U.clientY)}function bt(U){v.set(U.clientX,U.clientY)}function q(U){f.set(U.clientX,U.clientY),g.subVectors(f,l).multiplyScalar(i.rotateSpeed);const ot=i.domElement;z(2*Math.PI*g.x/ot.clientHeight),H(2*Math.PI*g.y/ot.clientHeight),l.copy(f),i.update()}function ct(U){C.set(U.clientX,U.clientY),x.subVectors(C,_),x.y>0?it(w(x.y)):x.y<0&&tt(w(x.y)),_.copy(C),i.update()}function gt(U){E.set(U.clientX,U.clientY),y.subVectors(E,v).multiplyScalar(i.panSpeed),j(y.x,y.y),v.copy(E),i.update()}function Dt(U){$(U.clientX,U.clientY),U.deltaY<0?tt(w(U.deltaY)):U.deltaY>0&&it(w(U.deltaY)),i.update()}function Ct(U){let ot=!1;switch(U.code){case i.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?H(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):j(0,i.keyPanSpeed),ot=!0;break;case i.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?H(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):j(0,-i.keyPanSpeed),ot=!0;break;case i.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):j(i.keyPanSpeed,0),ot=!0;break;case i.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):j(-i.keyPanSpeed,0),ot=!0;break}ot&&(U.preventDefault(),i.update())}function xt(U){if(M.length===1)l.set(U.pageX,U.pageY);else{const ot=St(U),At=.5*(U.pageX+ot.x),F=.5*(U.pageY+ot.y);l.set(At,F)}}function Gt(U){if(M.length===1)v.set(U.pageX,U.pageY);else{const ot=St(U),At=.5*(U.pageX+ot.x),F=.5*(U.pageY+ot.y);v.set(At,F)}}function It(U){const ot=St(U),At=U.pageX-ot.x,F=U.pageY-ot.y,dt=Math.sqrt(At*At+F*F);_.set(0,dt)}function V(U){i.enableZoom&&It(U),i.enablePan&&Gt(U)}function Kt(U){i.enableZoom&&It(U),i.enableRotate&&xt(U)}function Mt(U){if(M.length==1)f.set(U.pageX,U.pageY);else{const At=St(U),F=.5*(U.pageX+At.x),dt=.5*(U.pageY+At.y);f.set(F,dt)}g.subVectors(f,l).multiplyScalar(i.rotateSpeed);const ot=i.domElement;z(2*Math.PI*g.x/ot.clientHeight),H(2*Math.PI*g.y/ot.clientHeight),l.copy(f)}function B(U){if(M.length===1)E.set(U.pageX,U.pageY);else{const ot=St(U),At=.5*(U.pageX+ot.x),F=.5*(U.pageY+ot.y);E.set(At,F)}y.subVectors(E,v).multiplyScalar(i.panSpeed),j(y.x,y.y),v.copy(E)}function G(U){const ot=St(U),At=U.pageX-ot.x,F=U.pageY-ot.y,dt=Math.sqrt(At*At+F*F);C.set(0,dt),x.set(0,Math.pow(C.y/_.y,i.zoomSpeed)),it(x.y),_.copy(C);const Z=(U.pageX+ot.x)*.5,ut=(U.pageY+ot.y)*.5;$(Z,ut)}function nt(U){i.enableZoom&&G(U),i.enablePan&&B(U)}function lt(U){i.enableZoom&&G(U),i.enableRotate&&Mt(U)}function L(U){i.enabled!==!1&&(M.length===0&&(i.domElement.setPointerCapture(U.pointerId),i.domElement.addEventListener("pointermove",u),i.domElement.addEventListener("pointerup",p)),!Nt(U)&&(ft(U),U.pointerType==="touch"?rt(U):m(U)))}function u(U){i.enabled!==!1&&(U.pointerType==="touch"?st(U):R(U))}function p(U){switch(Zt(U),M.length){case 0:i.domElement.releasePointerCapture(U.pointerId),i.domElement.removeEventListener("pointermove",u),i.domElement.removeEventListener("pointerup",p),i.dispatchEvent(xu),s=r.NONE;break;case 1:const ot=M[0],At=P[ot];rt({pointerId:ot,pageX:At.x,pageY:At.y});break}}function m(U){let ot;switch(U.button){case 0:ot=i.mouseButtons.LEFT;break;case 1:ot=i.mouseButtons.MIDDLE;break;case 2:ot=i.mouseButtons.RIGHT;break;default:ot=-1}switch(ot){case Ii.DOLLY:if(i.enableZoom===!1)return;vt(U),s=r.DOLLY;break;case Ii.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(i.enablePan===!1)return;bt(U),s=r.PAN}else{if(i.enableRotate===!1)return;ht(U),s=r.ROTATE}break;case Ii.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(i.enableRotate===!1)return;ht(U),s=r.ROTATE}else{if(i.enablePan===!1)return;bt(U),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(_a)}function R(U){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;q(U);break;case r.DOLLY:if(i.enableZoom===!1)return;ct(U);break;case r.PAN:if(i.enablePan===!1)return;gt(U);break}}function I(U){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(U.preventDefault(),i.dispatchEvent(_a),Dt(O(U)),i.dispatchEvent(xu))}function O(U){const ot=U.deltaMode,At={clientX:U.clientX,clientY:U.clientY,deltaY:U.deltaY};switch(ot){case 1:At.deltaY*=16;break;case 2:At.deltaY*=100;break}return U.ctrlKey&&!k&&(At.deltaY*=10),At}function Y(U){U.key==="Control"&&(k=!0,i.domElement.getRootNode().addEventListener("keyup",pt,{passive:!0,capture:!0}))}function pt(U){U.key==="Control"&&(k=!1,i.domElement.getRootNode().removeEventListener("keyup",pt,{passive:!0,capture:!0}))}function _t(U){i.enabled===!1||i.enablePan===!1||Ct(U)}function rt(U){switch(Tt(U),M.length){case 1:switch(i.touches.ONE){case Ui.ROTATE:if(i.enableRotate===!1)return;xt(U),s=r.TOUCH_ROTATE;break;case Ui.PAN:if(i.enablePan===!1)return;Gt(U),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Ui.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;V(U),s=r.TOUCH_DOLLY_PAN;break;case Ui.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Kt(U),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(_a)}function st(U){switch(Tt(U),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Mt(U),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;B(U),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;nt(U),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;lt(U),i.update();break;default:s=r.NONE}}function wt(U){i.enabled!==!1&&U.preventDefault()}function ft(U){M.push(U.pointerId)}function Zt(U){delete P[U.pointerId];for(let ot=0;ot<M.length;ot++)if(M[ot]==U.pointerId){M.splice(ot,1);return}}function Nt(U){for(let ot=0;ot<M.length;ot++)if(M[ot]==U.pointerId)return!0;return!1}function Tt(U){let ot=P[U.pointerId];ot===void 0&&(ot=new Ft,P[U.pointerId]=ot),ot.set(U.pageX,U.pageY)}function St(U){const ot=U.pointerId===M[0]?M[1]:M[0];return P[ot]}i.domElement.addEventListener("contextmenu",wt),i.domElement.addEventListener("pointerdown",L),i.domElement.addEventListener("pointercancel",p),i.domElement.addEventListener("wheel",I,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Y,{passive:!0,capture:!0}),this.update()}}const Kr=new Fv;Kr.background=new Yt(1710638);const fr=new $e(60,window.innerWidth/window.innerHeight,.1,1e3);fr.position.set(8,6,8);fr.lookAt(0,0,0);const Er=new Ah({antialias:!0});Er.setSize(window.innerWidth,window.innerHeight);Er.setPixelRatio(window.devicePixelRatio);document.getElementById("app").appendChild(Er.domElement);const ac=new jv(fr,Er.domElement);ac.enableDamping=!0;ac.dampingFactor=.05;const qv=new Vv(16777215,.5);Kr.add(qv);const Lh=new Hv(16777215,1);Lh.position.set(5,10,7);Kr.add(Lh);const Yv=new Wv(20,20,4473924,3355443);Kr.add(Yv);window.addEventListener("resize",()=>{fr.aspect=window.innerWidth/window.innerHeight,fr.updateProjectionMatrix(),Er.setSize(window.innerWidth,window.innerHeight)});const ze=()=>new Map,Va=n=>{const t=ze();return n.forEach((e,i)=>{t.set(i,e)}),t},je=(n,t,e)=>{let i=n.get(t);return i===void 0&&n.set(t,i=e()),i},$v=(n,t)=>{const e=[];for(const[i,r]of n)e.push(t(r,i));return e},Kv=(n,t)=>{for(const[e,i]of n)if(t(i,e))return!0;return!1},ii=()=>new Set,va=n=>n[n.length-1],Zv=(n,t)=>{for(let e=0;e<t.length;e++)n.push(t[e])},Nn=Array.from,cc=(n,t)=>{for(let e=0;e<n.length;e++)if(!t(n[e],e,n))return!1;return!0},Dh=(n,t)=>{for(let e=0;e<n.length;e++)if(t(n[e],e,n))return!0;return!1},Jv=(n,t)=>{const e=new Array(n);for(let i=0;i<n;i++)e[i]=t(i,e);return e},go=Array.isArray;class Ph{constructor(){this._observers=ze()}on(t,e){return je(this._observers,t,ii).add(e),e}once(t,e){const i=(...r)=>{this.off(t,i),e(...r)};this.on(t,i)}off(t,e){const i=this._observers.get(t);i!==void 0&&(i.delete(e),i.size===0&&this._observers.delete(t))}emit(t,e){return Nn((this._observers.get(t)||ze()).values()).forEach(i=>i(...e))}destroy(){this._observers=ze()}}class Ih{constructor(){this._observers=ze()}on(t,e){je(this._observers,t,ii).add(e)}once(t,e){const i=(...r)=>{this.off(t,i),e(...r)};this.on(t,i)}off(t,e){const i=this._observers.get(t);i!==void 0&&(i.delete(e),i.size===0&&this._observers.delete(t))}emit(t,e){return Nn((this._observers.get(t)||ze()).values()).forEach(i=>i(...e))}destroy(){this._observers=ze()}}const Qe=Math.floor,Fs=Math.abs,Qv=Math.log10,lc=(n,t)=>n<t?n:t,Di=(n,t)=>n>t?n:t,Uh=n=>n!==0?n<0:1/n<0,Eu=1,bu=2,ya=4,xa=8,Or=32,Pn=64,Xe=128,_o=31,Wa=63,Si=127,ty=2147483647,qs=Number.MAX_SAFE_INTEGER,Mu=Number.MIN_SAFE_INTEGER,ey=Number.isInteger||(n=>typeof n=="number"&&isFinite(n)&&Qe(n)===n),Nh=String.fromCharCode,ny=n=>n.toLowerCase(),iy=/^\s*/g,ry=n=>n.replace(iy,""),sy=/([A-Z])/g,wu=(n,t)=>ry(n.replace(sy,e=>`${t}${ny(e)}`)),oy=n=>{const t=unescape(encodeURIComponent(n)),e=t.length,i=new Uint8Array(e);for(let r=0;r<e;r++)i[r]=t.codePointAt(r);return i},Fr=typeof TextEncoder<"u"?new TextEncoder:null,ay=n=>Fr.encode(n),Xa=Fr?ay:oy;let Ur=typeof TextDecoder>"u"?null:new TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0});Ur&&Ur.decode(new Uint8Array).length===1&&(Ur=null);const cy=(n,t)=>Jv(t,()=>n).join("");class Zr{constructor(){this.cpos=0,this.cbuf=new Uint8Array(100),this.bufs=[]}}const Se=()=>new Zr,ly=n=>{let t=n.cpos;for(let e=0;e<n.bufs.length;e++)t+=n.bufs[e].length;return t},oe=n=>{const t=new Uint8Array(ly(n));let e=0;for(let i=0;i<n.bufs.length;i++){const r=n.bufs[i];t.set(r,e),e+=r.length}return t.set(new Uint8Array(n.cbuf.buffer,0,n.cpos),e),t},uy=(n,t)=>{const e=n.cbuf.length;e-n.cpos<t&&(n.bufs.push(new Uint8Array(n.cbuf.buffer,0,n.cpos)),n.cbuf=new Uint8Array(Di(e,t)*2),n.cpos=0)},ye=(n,t)=>{const e=n.cbuf.length;n.cpos===e&&(n.bufs.push(n.cbuf),n.cbuf=new Uint8Array(e*2),n.cpos=0),n.cbuf[n.cpos++]=t},kr=ye,Pt=(n,t)=>{for(;t>Si;)ye(n,Xe|Si&t),t=Qe(t/128);ye(n,Si&t)},uc=(n,t)=>{const e=Uh(t);for(e&&(t=-t),ye(n,(t>Wa?Xe:0)|(e?Pn:0)|Wa&t),t=Qe(t/64);t>0;)ye(n,(t>Si?Xe:0)|Si&t),t=Qe(t/128)},ja=new Uint8Array(3e4),hy=ja.length/3,fy=(n,t)=>{if(t.length<hy){const e=Fr.encodeInto(t,ja).written||0;Pt(n,e);for(let i=0;i<e;i++)ye(n,ja[i])}else ce(n,Xa(t))},dy=(n,t)=>{const e=unescape(encodeURIComponent(t)),i=e.length;Pt(n,i);for(let r=0;r<i;r++)ye(n,e.codePointAt(r))},gn=Fr&&Fr.encodeInto?fy:dy,vo=(n,t)=>{const e=n.cbuf.length,i=n.cpos,r=lc(e-i,t.length),s=t.length-r;n.cbuf.set(t.subarray(0,r),i),n.cpos+=r,s>0&&(n.bufs.push(n.cbuf),n.cbuf=new Uint8Array(Di(e*2,s)),n.cbuf.set(t.subarray(r)),n.cpos=s)},ce=(n,t)=>{Pt(n,t.byteLength),vo(n,t)},hc=(n,t)=>{uy(n,t);const e=new DataView(n.cbuf.buffer,n.cpos,t);return n.cpos+=t,e},py=(n,t)=>hc(n,4).setFloat32(0,t,!1),my=(n,t)=>hc(n,8).setFloat64(0,t,!1),gy=(n,t)=>hc(n,8).setBigInt64(0,t,!1),Tu=new DataView(new ArrayBuffer(4)),_y=n=>(Tu.setFloat32(0,n),Tu.getFloat32(0)===n),dr=(n,t)=>{switch(typeof t){case"string":ye(n,119),gn(n,t);break;case"number":ey(t)&&Fs(t)<=ty?(ye(n,125),uc(n,t)):_y(t)?(ye(n,124),py(n,t)):(ye(n,123),my(n,t));break;case"bigint":ye(n,122),gy(n,t);break;case"object":if(t===null)ye(n,126);else if(go(t)){ye(n,117),Pt(n,t.length);for(let e=0;e<t.length;e++)dr(n,t[e])}else if(t instanceof Uint8Array)ye(n,116),ce(n,t);else{ye(n,118);const e=Object.keys(t);Pt(n,e.length);for(let i=0;i<e.length;i++){const r=e[i];gn(n,r),dr(n,t[r])}}break;case"boolean":ye(n,t?120:121);break;default:ye(n,127)}};class Au extends Zr{constructor(t){super(),this.w=t,this.s=null,this.count=0}write(t){this.s===t?this.count++:(this.count>0&&Pt(this,this.count-1),this.count=1,this.w(this,t),this.s=t)}}const Cu=n=>{n.count>0&&(uc(n.encoder,n.count===1?n.s:-n.s),n.count>1&&Pt(n.encoder,n.count-2))};class ks{constructor(){this.encoder=new Zr,this.s=0,this.count=0}write(t){this.s===t?this.count++:(Cu(this),this.count=1,this.s=t)}toUint8Array(){return Cu(this),oe(this.encoder)}}const Ru=n=>{if(n.count>0){const t=n.diff*2+(n.count===1?0:1);uc(n.encoder,t),n.count>1&&Pt(n.encoder,n.count-2)}};class Sa{constructor(){this.encoder=new Zr,this.s=0,this.count=0,this.diff=0}write(t){this.diff===t-this.s?(this.s=t,this.count++):(Ru(this),this.count=1,this.diff=t-this.s,this.s=t)}toUint8Array(){return Ru(this),oe(this.encoder)}}class vy{constructor(){this.sarr=[],this.s="",this.lensE=new ks}write(t){this.s+=t,this.s.length>19&&(this.sarr.push(this.s),this.s=""),this.lensE.write(t.length)}toUint8Array(){const t=new Zr;return this.sarr.push(this.s),this.s="",gn(t,this.sarr.join("")),vo(t,this.lensE.toUint8Array()),oe(t)}}const tn=n=>new Error(n),ln=()=>{throw tn("Method unimplemented")},en=()=>{throw tn("Unexpected case")},Oh=tn("Unexpected end of array"),Fh=tn("Integer out of Range");class yo{constructor(t){this.arr=t,this.pos=0}}const yn=n=>new yo(n),yy=n=>n.pos!==n.arr.length,xy=(n,t)=>{const e=new Uint8Array(n.arr.buffer,n.pos+n.arr.byteOffset,t);return n.pos+=t,e},xe=n=>xy(n,kt(n)),wi=n=>n.arr[n.pos++],kt=n=>{let t=0,e=1;const i=n.arr.length;for(;n.pos<i;){const r=n.arr[n.pos++];if(t=t+(r&Si)*e,e*=128,r<Xe)return t;if(t>qs)throw Fh}throw Oh},fc=n=>{let t=n.arr[n.pos++],e=t&Wa,i=64;const r=(t&Pn)>0?-1:1;if(!(t&Xe))return r*e;const s=n.arr.length;for(;n.pos<s;){if(t=n.arr[n.pos++],e=e+(t&Si)*i,i*=128,t<Xe)return r*e;if(e>qs)throw Fh}throw Oh},Sy=n=>{let t=kt(n);if(t===0)return"";{let e=String.fromCodePoint(wi(n));if(--t<100)for(;t--;)e+=String.fromCodePoint(wi(n));else for(;t>0;){const i=t<1e4?t:1e4,r=n.arr.subarray(n.pos,n.pos+i);n.pos+=i,e+=String.fromCodePoint.apply(null,r),t-=i}return decodeURIComponent(escape(e))}},Ey=n=>Ur.decode(xe(n)),In=Ur?Ey:Sy,dc=(n,t)=>{const e=new DataView(n.arr.buffer,n.arr.byteOffset+n.pos,t);return n.pos+=t,e},by=n=>dc(n,4).getFloat32(0,!1),My=n=>dc(n,8).getFloat64(0,!1),wy=n=>dc(n,8).getBigInt64(0,!1),Ty=[n=>{},n=>null,fc,by,My,wy,n=>!1,n=>!0,In,n=>{const t=kt(n),e={};for(let i=0;i<t;i++){const r=In(n);e[r]=pr(n)}return e},n=>{const t=kt(n),e=[];for(let i=0;i<t;i++)e.push(pr(n));return e},xe],pr=n=>Ty[127-wi(n)](n);class Lu extends yo{constructor(t,e){super(t),this.reader=e,this.s=null,this.count=0}read(){return this.count===0&&(this.s=this.reader(this),yy(this)?this.count=kt(this)+1:this.count=-1),this.count--,this.s}}class Bs extends yo{constructor(t){super(t),this.s=0,this.count=0}read(){if(this.count===0){this.s=fc(this);const t=Uh(this.s);this.count=1,t&&(this.s=-this.s,this.count=kt(this)+2)}return this.count--,this.s}}class Ea extends yo{constructor(t){super(t),this.s=0,this.count=0,this.diff=0}read(){if(this.count===0){const t=fc(this),e=t&1;this.diff=Qe(t/2),this.count=1,e&&(this.count=kt(this)+2)}return this.s+=this.diff,this.count--,this.s}}class Ay{constructor(t){this.decoder=new Bs(t),this.str=In(this.decoder),this.spos=0}read(){const t=this.spos+this.decoder.read(),e=this.str.slice(this.spos,t);return this.spos=t,e}}const Cy=crypto.getRandomValues.bind(crypto),Ry=Math.random,kh=()=>Cy(new Uint32Array(1))[0],Ly="10000000-1000-4000-8000"+-1e11,Bh=()=>Ly.replace(/[018]/g,n=>(n^kh()&15>>n/4).toString(16)),On=Date.now,Du=n=>new Promise(n);Promise.all.bind(Promise);const Dy=n=>Promise.reject(n),pc=n=>Promise.resolve(n),Pu=n=>n===void 0?null:n;class Py{constructor(){this.map=new Map}setItem(t,e){this.map.set(t,e)}getItem(t){return this.map.get(t)}}let zh=new Py,mc=!0;try{typeof localStorage<"u"&&localStorage&&(zh=localStorage,mc=!1)}catch{}const Gh=zh,Iy=n=>mc||addEventListener("storage",n),Uy=n=>mc||removeEventListener("storage",n),Br=Symbol("Equality"),Hh=(n,t)=>{var e;return n===t||!!((e=n==null?void 0:n[Br])!=null&&e.call(n,t))||!1},Ny=n=>typeof n=="object",Oy=Object.assign,Fy=Object.keys,ky=(n,t)=>{for(const e in n)t(n[e],e)},Ys=n=>Fy(n).length,By=n=>{for(const t in n)return!1;return!0},Jr=(n,t)=>{for(const e in n)if(!t(n[e],e))return!1;return!0},gc=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),zy=(n,t)=>n===t||Ys(n)===Ys(t)&&Jr(n,(e,i)=>(e!==void 0||gc(t,i))&&Hh(t[i],e)),Gy=Object.freeze,Vh=n=>{for(const t in n){const e=n[t];(typeof e=="object"||typeof e=="function")&&Vh(n[t])}return Gy(n)},_c=(n,t,e=0)=>{try{for(;e<n.length;e++)n[e](...t)}finally{e<n.length&&_c(n,t,e+1)}},Hy=()=>{},Vy=n=>n,ir=(n,t)=>{if(n===t)return!0;if(n==null||t==null||n.constructor!==t.constructor&&(n.constructor||Object)!==(t.constructor||Object))return!1;if(n[Br]!=null)return n[Br](t);switch(n.constructor){case ArrayBuffer:n=new Uint8Array(n),t=new Uint8Array(t);case Uint8Array:{if(n.byteLength!==t.byteLength)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;break}case Set:{if(n.size!==t.size)return!1;for(const e of n)if(!t.has(e))return!1;break}case Map:{if(n.size!==t.size)return!1;for(const e of n.keys())if(!t.has(e)||!ir(n.get(e),t.get(e)))return!1;break}case void 0:case Object:if(Ys(n)!==Ys(t))return!1;for(const e in n)if(!gc(n,e)||!ir(n[e],t[e]))return!1;break;case Array:if(n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(!ir(n[e],t[e]))return!1;break;default:return!1}return!0},Wy=(n,t)=>t.includes(n);var Wh={};const mr=typeof process<"u"&&process.release&&/node|io\.js/.test(process.release.name)&&Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]",Xh=typeof window<"u"&&typeof document<"u"&&!mr;let un;const Xy=()=>{if(un===void 0)if(mr){un=ze();const n=process.argv;let t=null;for(let e=0;e<n.length;e++){const i=n[e];i[0]==="-"?(t!==null&&un.set(t,""),t=i):t!==null&&(un.set(t,i),t=null)}t!==null&&un.set(t,"")}else typeof location=="object"?(un=ze(),(location.search||"?").slice(1).split("&").forEach(n=>{if(n.length!==0){const[t,e]=n.split("=");un.set(`--${wu(t,"-")}`,e),un.set(`-${wu(t,"-")}`,e)}})):un=ze();return un},qa=n=>Xy().has(n),zr=n=>Pu(mr?Wh[n.toUpperCase().replaceAll("-","_")]:Gh.getItem(n)),jh=n=>qa("--"+n)||zr(n)!==null,jy=jh("production"),qy=mr&&Wy(Wh.FORCE_COLOR,["true","1","2"]),Yy=qy||!qa("--no-colors")&&!jh("no-color")&&(!mr||process.stdout.isTTY)&&(!mr||qa("--color")||zr("COLORTERM")!==null||(zr("TERM")||"").includes("color")),qh=n=>new Uint8Array(n),$y=(n,t,e)=>new Uint8Array(n,t,e),Ky=n=>new Uint8Array(n),Zy=n=>{let t="";for(let e=0;e<n.byteLength;e++)t+=Nh(n[e]);return btoa(t)},Jy=n=>Buffer.from(n.buffer,n.byteOffset,n.byteLength).toString("base64"),Qy=n=>{const t=atob(n),e=qh(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i);return e},tx=n=>{const t=Buffer.from(n,"base64");return $y(t.buffer,t.byteOffset,t.byteLength)},Yh=Xh?Zy:Jy,$h=Xh?Qy:tx,ex=n=>{const t=qh(n.byteLength);return t.set(n),t};class nx{constructor(t,e){this.left=t,this.right=e}}const Tn=(n,t)=>new nx(n,t),Iu=n=>n.next()>=.5,ba=(n,t,e)=>Qe(n.next()*(e+1-t)+t),Kh=(n,t,e)=>Qe(n.next()*(e+1-t)+t),vc=(n,t,e)=>Kh(n,t,e),ix=n=>Nh(vc(n,97,122)),rx=(n,t=0,e=20)=>{const i=vc(n,t,e);let r="";for(let s=0;s<i;s++)r+=ix(n);return r},Ma=(n,t)=>t[vc(n,0,t.length-1)],sx=Symbol("0schema");class ox{constructor(){this._rerrs=[]}extend(t,e,i,r=null){this._rerrs.push({path:t,expected:e,has:i,message:r})}toString(){const t=[];for(let e=this._rerrs.length-1;e>0;e--){const i=this._rerrs[e];t.push(cy(" ",(this._rerrs.length-e)*2)+`${i.path!=null?`[${i.path}] `:""}${i.has} doesn't match ${i.expected}. ${i.message}`)}return t.join(`
`)}}const Ya=(n,t)=>n===t?!0:n==null||t==null||n.constructor!==t.constructor?!1:n[Br]?Hh(n,t):go(n)?cc(n,e=>Dh(t,i=>Ya(e,i))):Ny(n)?Jr(n,(e,i)=>Ya(e,t[i])):!1;class Pe{extends(t){let[e,i]=[this.shape,t.shape];return this.constructor._dilutes&&([i,e]=[e,i]),Ya(e,i)}equals(t){return this.constructor===t.constructor&&ir(this.shape,t.shape)}[sx](){return!0}[Br](t){return this.equals(t)}validate(t){return this.check(t)}check(t,e){ln()}get nullable(){return br(this,Mo)}get optional(){return new Qh(this)}cast(t){return Uu(t,this),t}expect(t){return Uu(t,this),t}}os(Pe,"_dilutes",!1);class yc extends Pe{constructor(t,e){super(),this.shape=t,this._c=e}check(t,e=void 0){const i=(t==null?void 0:t.constructor)===this.shape&&(this._c==null||this._c(t));return!i&&(e==null||e.extend(null,this.shape.name,t==null?void 0:t.constructor.name,(t==null?void 0:t.constructor)!==this.shape?"Constructor match failed":"Check failed")),i}}const fe=(n,t=null)=>new yc(n,t);fe(yc);class xc extends Pe{constructor(t){super(),this.shape=t}check(t,e){const i=this.shape(t);return!i&&(e==null||e.extend(null,"custom prop",t==null?void 0:t.constructor.name,"failed to check custom prop")),i}}const Me=n=>new xc(n);fe(xc);class xo extends Pe{constructor(t){super(),this.shape=t}check(t,e){const i=this.shape.some(r=>r===t);return!i&&(e==null||e.extend(null,this.shape.join(" | "),t.toString())),i}}const So=(...n)=>new xo(n),Zh=fe(xo),ax=RegExp.escape||(n=>n.replace(/[().|&,$^[\]]/g,t=>"\\"+t)),Jh=n=>{if(gr.check(n))return[ax(n)];if(Zh.check(n))return n.shape.map(t=>t+"");if(lf.check(n))return["[+-]?\\d+.?\\d*"];if(uf.check(n))return[".*"];if(Ks.check(n))return n.shape.map(Jh).flat(1);en()};class cx extends Pe{constructor(t){super(),this.shape=t,this._r=new RegExp("^"+t.map(Jh).map(e=>`(${e.join("|")})`).join("")+"$")}check(t,e){const i=this._r.exec(t)!=null;return!i&&(e==null||e.extend(null,this._r.toString(),t.toString(),"String doesn't match string template.")),i}}fe(cx);const lx=Symbol("optional");class Qh extends Pe{constructor(t){super(),this.shape=t}check(t,e){const i=t===void 0||this.shape.check(t);return!i&&(e==null||e.extend(null,"undefined (optional)","()")),i}get[lx](){return!0}}const ux=fe(Qh);class hx extends Pe{check(t,e){return e==null||e.extend(null,"never",typeof t),!1}}fe(hx);const lo=class lo extends Pe{constructor(t,e=!1){super(),this.shape=t,this._isPartial=e}get partial(){return new lo(this.shape,!0)}check(t,e){return t==null?(e==null||e.extend(null,"object","null"),!1):Jr(this.shape,(i,r)=>{const s=this._isPartial&&!gc(t,r)||i.check(t[r],e);return!s&&(e==null||e.extend(r.toString(),i.toString(),typeof t[r],"Object property does not match")),s})}};os(lo,"_dilutes",!0);let $s=lo;const fx=n=>new $s(n),dx=fe($s),px=Me(n=>n!=null&&(n.constructor===Object||n.constructor==null));class tf extends Pe{constructor(t,e){super(),this.shape={keys:t,values:e}}check(t,e){return t!=null&&Jr(t,(i,r)=>{const s=this.shape.keys.check(r,e);return!s&&(e==null||e.extend(r+"","Record",typeof t,s?"Key doesn't match schema":"Value doesn't match value")),s&&this.shape.values.check(i,e)})}}const ef=(n,t)=>new tf(n,t),mx=fe(tf);class nf extends Pe{constructor(t){super(),this.shape=t}check(t,e){return t!=null&&Jr(this.shape,(i,r)=>{const s=i.check(t[r],e);return!s&&(e==null||e.extend(r.toString(),"Tuple",typeof i)),s})}}const gx=(...n)=>new nf(n);fe(nf);class rf extends Pe{constructor(t){super(),this.shape=t.length===1?t[0]:new Eo(t)}check(t,e){const i=go(t)&&cc(t,r=>this.shape.check(r));return!i&&(e==null||e.extend(null,"Array","")),i}}const sf=(...n)=>new rf(n),_x=fe(rf),vx=Me(n=>go(n));class of extends Pe{constructor(t,e){super(),this.shape=t,this._c=e}check(t,e){const i=t instanceof this.shape&&(this._c==null||this._c(t));return!i&&(e==null||e.extend(null,this.shape.name,t==null?void 0:t.constructor.name)),i}}const yx=(n,t=null)=>new of(n,t);fe(of);const xx=yx(Pe);class Sx extends Pe{constructor(t){super(),this.len=t.length-1,this.args=gx(...t.slice(-1)),this.res=t[this.len]}check(t,e){const i=t.constructor===Function&&t.length<=this.len;return!i&&(e==null||e.extend(null,"function",typeof t)),i}}const Ex=fe(Sx),bx=Me(n=>typeof n=="function");class Mx extends Pe{constructor(t){super(),this.shape=t}check(t,e){const i=cc(this.shape,r=>r.check(t,e));return!i&&(e==null||e.extend(null,"Intersectinon",typeof t)),i}}fe(Mx,n=>n.shape.length>0);class Eo extends Pe{constructor(t){super(),this.shape=t}check(t,e){const i=Dh(this.shape,r=>r.check(t,e));return e==null||e.extend(null,"Union",typeof t),i}}os(Eo,"_dilutes",!0);const br=(...n)=>n.findIndex(t=>Ks.check(t))>=0?br(...n.map(t=>Gr(t)).map(t=>Ks.check(t)?t.shape:[t]).flat(1)):n.length===1?n[0]:new Eo(n),Ks=fe(Eo),af=()=>!0,Zs=Me(af),wx=fe(xc,n=>n.shape===af),Sc=Me(n=>typeof n=="bigint"),Tx=Me(n=>n===Sc),cf=Me(n=>typeof n=="symbol");Me(n=>n===cf);const rr=Me(n=>typeof n=="number"),lf=Me(n=>n===rr),gr=Me(n=>typeof n=="string"),uf=Me(n=>n===gr),bo=Me(n=>typeof n=="boolean"),Ax=Me(n=>n===bo),hf=So(void 0);fe(xo,n=>n.shape.length===1&&n.shape[0]===void 0);So(void 0);const Mo=So(null),Cx=fe(xo,n=>n.shape.length===1&&n.shape[0]===null);fe(Uint8Array);fe(yc,n=>n.shape===Uint8Array);const Rx=br(rr,gr,Mo,hf,Sc,bo,cf);(()=>{const n=sf(Zs),t=ef(gr,Zs),e=br(rr,gr,Mo,bo,n,t);return n.shape=e,t.shape.values=e,e})();const Gr=n=>{if(xx.check(n))return n;if(px.check(n)){const t={};for(const e in n)t[e]=Gr(n[e]);return fx(t)}else{if(vx.check(n))return br(...n.map(Gr));if(Rx.check(n))return So(n);if(bx.check(n))return fe(n)}en()},Uu=jy?()=>{}:(n,t)=>{const e=new ox;if(!t.check(n,e))throw tn(`Expected value to be of type ${t.constructor.name}.
${e.toString()}`)};class Lx{constructor(t){this.patterns=[],this.$state=t}if(t,e){return this.patterns.push({if:Gr(t),h:e}),this}else(t){return this.if(Zs,t)}done(){return(t,e)=>{for(let i=0;i<this.patterns.length;i++){const r=this.patterns[i];if(r.if.check(t))return r.h(t,e)}throw tn("Unhandled pattern")}}}const Dx=n=>new Lx(n),ff=Dx(Zs).if(lf,(n,t)=>ba(t,Mu,qs)).if(uf,(n,t)=>rx(t)).if(Ax,(n,t)=>Iu(t)).if(Tx,(n,t)=>BigInt(ba(t,Mu,qs))).if(Ks,(n,t)=>Zi(t,Ma(t,n.shape))).if(dx,(n,t)=>{const e={};for(const i in n.shape){let r=n.shape[i];if(ux.check(r)){if(Iu(t))continue;r=r.shape}e[i]=ff(r,t)}return e}).if(_x,(n,t)=>{const e=[],i=Kh(t,0,42);for(let r=0;r<i;r++)e.push(Zi(t,n.shape));return e}).if(Zh,(n,t)=>Ma(t,n.shape)).if(Cx,(n,t)=>null).if(Ex,(n,t)=>{const e=Zi(t,n.res);return()=>e}).if(wx,(n,t)=>Zi(t,Ma(t,[rr,gr,Mo,hf,Sc,bo,sf(rr),ef(br("a","b","c"),rr)]))).if(mx,(n,t)=>{const e={},i=ba(t,0,3);for(let r=0;r<i;r++){const s=Zi(t,n.shape.keys),a=Zi(t,n.shape.values);e[s]=a}return e}).done(),Zi=(n,t)=>ff(Gr(t),n),wo=typeof document<"u"?document:{};Me(n=>n.nodeType===Ox);typeof DOMParser<"u"&&new DOMParser;Me(n=>n.nodeType===Ix);Me(n=>n.nodeType===Ux);const Px=n=>$v(n,(t,e)=>`${e}:${t};`).join(""),Ix=wo.ELEMENT_NODE,Ux=wo.TEXT_NODE,Nx=wo.DOCUMENT_NODE,Ox=wo.DOCUMENT_FRAGMENT_NODE;Me(n=>n.nodeType===Nx);const Fx=JSON.stringify,kn=Symbol,Je=kn(),Ti=kn(),df=kn(),Ec=kn(),pf=kn(),mf=kn(),gf=kn(),To=kn(),Ao=kn(),kx=n=>{var r;n.length===1&&((r=n[0])==null?void 0:r.constructor)===Function&&(n=n[0]());const t=[],e=[];let i=0;for(;i<n.length;i++){const s=n[i];if(s===void 0)break;if(s.constructor===String||s.constructor===Number)t.push(s);else if(s.constructor===Object)break}for(i>0&&e.push(t.join(""));i<n.length;i++){const s=n[i];s instanceof Symbol||e.push(s)}return e},Nu=[pf,gf,To,df];let wa=0,Ou=On();const Bx=(n,t)=>{const e=Nu[wa],i=zr("log"),r=i!==null&&(i==="*"||i==="true"||new RegExp(i,"gi").test(t));return wa=(wa+1)%Nu.length,t+=": ",r?(...s)=>{var c;s.length===1&&((c=s[0])==null?void 0:c.constructor)===Function&&(s=s[0]());const a=On(),o=a-Ou;Ou=a,n(e,t,Ao,...s.map(h=>{switch(h!=null&&h.constructor===Uint8Array&&(h=Array.from(h)),typeof h){case"string":case"symbol":return h;default:return Fx(h)}}),e," +"+o+"ms")}:Hy},zx={[Je]:Tn("font-weight","bold"),[Ti]:Tn("font-weight","normal"),[df]:Tn("color","blue"),[pf]:Tn("color","green"),[Ec]:Tn("color","grey"),[mf]:Tn("color","red"),[gf]:Tn("color","purple"),[To]:Tn("color","orange"),[Ao]:Tn("color","black")},Gx=n=>{var a;n.length===1&&((a=n[0])==null?void 0:a.constructor)===Function&&(n=n[0]());const t=[],e=[],i=ze();let r=[],s=0;for(;s<n.length;s++){const o=n[s],c=zx[o];if(c!==void 0)i.set(c.left,c.right);else{if(o===void 0)break;if(o.constructor===String||o.constructor===Number){const h=Px(i);s>0||h.length>0?(t.push("%c"+o),e.push(h)):t.push(o)}else break}}for(s>0&&(r=e,r.unshift(t.join("")));s<n.length;s++){const o=n[s];o instanceof Symbol||r.push(o)}return r},_f=Yy?Gx:kx,vf=(...n)=>{console.log(..._f(n)),yf.forEach(t=>t.print(n))},Hx=(...n)=>{console.warn(..._f(n)),n.unshift(To),yf.forEach(t=>t.print(n))},yf=ii(),Vx=n=>Bx(vf,n),xf=n=>({[Symbol.iterator](){return this},next:n}),Wx=(n,t)=>xf(()=>{let e;do e=n.next();while(!e.done&&!t(e.value));return e}),Ta=(n,t)=>xf(()=>{const{done:e,value:i}=n.next();return{done:e,value:e?void 0:t(i)}});class Co{constructor(t,e){this.clock=t,this.len=e}}class Qr{constructor(){this.clients=new Map}}const Sf=(n,t,e)=>t.clients.forEach((i,r)=>{const s=n.doc.store.clients.get(r);if(s!=null){const a=s[s.length-1],o=a.id.clock+a.length;for(let c=0,h=i[c];c<i.length&&h.clock<o;h=i[++c])Uf(n,s,h.clock,h.len,e)}}),Xx=(n,t)=>{let e=0,i=n.length-1;for(;e<=i;){const r=Qe((e+i)/2),s=n[r],a=s.clock;if(a<=t){if(t<a+s.len)return r;e=r+1}else i=r-1}return null},Ef=(n,t)=>{const e=n.clients.get(t.client);return e!==void 0&&Xx(e,t.clock)!==null},bc=n=>{n.clients.forEach(t=>{t.sort((r,s)=>r.clock-s.clock);let e,i;for(e=1,i=1;e<t.length;e++){const r=t[i-1],s=t[e];r.clock+r.len>=s.clock?t[i-1]=new Co(r.clock,Di(r.len,s.clock+s.len-r.clock)):(i<e&&(t[i]=s),i++)}t.length=i})},jx=n=>{const t=new Qr;for(let e=0;e<n.length;e++)n[e].clients.forEach((i,r)=>{if(!t.clients.has(r)){const s=i.slice();for(let a=e+1;a<n.length;a++)Zv(s,n[a].clients.get(r)||[]);t.clients.set(r,s)}});return bc(t),t},Js=(n,t,e,i)=>{je(n.clients,t,()=>[]).push(new Co(e,i))},qx=()=>new Qr,Yx=n=>{const t=qx();return n.clients.forEach((e,i)=>{const r=[];for(let s=0;s<e.length;s++){const a=e[s];if(a.deleted){const o=a.id.clock;let c=a.length;if(s+1<e.length)for(let h=e[s+1];s+1<e.length&&h.deleted;h=e[++s+1])c+=h.length;r.push(new Co(o,c))}}r.length>0&&t.clients.set(i,r)}),t},Mr=(n,t)=>{Pt(n.restEncoder,t.clients.size),Nn(t.clients.entries()).sort((e,i)=>i[0]-e[0]).forEach(([e,i])=>{n.resetDsCurVal(),Pt(n.restEncoder,e);const r=i.length;Pt(n.restEncoder,r);for(let s=0;s<r;s++){const a=i[s];n.writeDsClock(a.clock),n.writeDsLen(a.len)}})},Mc=n=>{const t=new Qr,e=kt(n.restDecoder);for(let i=0;i<e;i++){n.resetDsCurVal();const r=kt(n.restDecoder),s=kt(n.restDecoder);if(s>0){const a=je(t.clients,r,()=>[]);for(let o=0;o<s;o++)a.push(new Co(n.readDsClock(),n.readDsLen()))}}return t},Fu=(n,t,e)=>{const i=new Qr,r=kt(n.restDecoder);for(let s=0;s<r;s++){n.resetDsCurVal();const a=kt(n.restDecoder),o=kt(n.restDecoder),c=e.clients.get(a)||[],h=be(e,a);for(let d=0;d<o;d++){const l=n.readDsClock(),f=l+n.readDsLen();if(l<h){h<f&&Js(i,a,h,f-h);let g=_n(c,l),v=c[g];for(!v.deleted&&v.id.clock<l&&(c.splice(g+1,0,so(t,v,l-v.id.clock)),g++);g<c.length&&(v=c[g++],v.id.clock<f);)v.deleted||(f<v.id.clock+v.length&&c.splice(g,0,so(t,v,f-v.id.clock)),v.delete(t))}else Js(i,a,l,f-l)}}if(i.clients.size>0){const s=new Ai;return Pt(s.restEncoder,0),Mr(s,i),s.toUint8Array()}return null},bf=kh;class wr extends Ph{constructor({guid:t=Bh(),collectionid:e=null,gc:i=!0,gcFilter:r=()=>!0,meta:s=null,autoLoad:a=!1,shouldLoad:o=!0}={}){super(),this.gc=i,this.gcFilter=r,this.clientID=bf(),this.guid=t,this.collectionid=e,this.share=new Map,this.store=new Pf,this._transaction=null,this._transactionCleanups=[],this.subdocs=new Set,this._item=null,this.shouldLoad=o,this.autoLoad=a,this.meta=s,this.isLoaded=!1,this.isSynced=!1,this.isDestroyed=!1,this.whenLoaded=Du(h=>{this.on("load",()=>{this.isLoaded=!0,h(this)})});const c=()=>Du(h=>{const d=l=>{(l===void 0||l===!0)&&(this.off("sync",d),h())};this.on("sync",d)});this.on("sync",h=>{h===!1&&this.isSynced&&(this.whenSynced=c()),this.isSynced=h===void 0||h===!0,this.isSynced&&!this.isLoaded&&this.emit("load",[this])}),this.whenSynced=c()}load(){const t=this._item;t!==null&&!this.shouldLoad&&ee(t.parent.doc,e=>{e.subdocsLoaded.add(this)},null,!0),this.shouldLoad=!0}getSubdocs(){return this.subdocs}getSubdocGuids(){return new Set(Nn(this.subdocs).map(t=>t.guid))}transact(t,e=null){return ee(this,t,e)}get(t,e=Te){const i=je(this.share,t,()=>{const s=new e;return s._integrate(this,null),s}),r=i.constructor;if(e!==Te&&r!==e)if(r===Te){const s=new e;s._map=i._map,i._map.forEach(a=>{for(;a!==null;a=a.left)a.parent=s}),s._start=i._start;for(let a=s._start;a!==null;a=a.right)a.parent=s;return s._length=i._length,this.share.set(t,s),s._integrate(this,null),s}else throw new Error(`Type with the name ${t} has already been defined with a different constructor`);return i}getArray(t=""){return this.get(t,or)}getText(t=""){return this.get(t,yr)}getMap(t=""){return this.get(t,vr)}getXmlElement(t=""){return this.get(t,xr)}getXmlFragment(t=""){return this.get(t,Ci)}toJSON(){const t={};return this.share.forEach((e,i)=>{t[i]=e.toJSON()}),t}destroy(){this.isDestroyed=!0,Nn(this.subdocs).forEach(e=>e.destroy());const t=this._item;if(t!==null){this._item=null;const e=t.content;e.doc=new wr({guid:this.guid,...e.opts,shouldLoad:!1}),e.doc._item=t,ee(t.parent.doc,i=>{const r=e.doc;t.deleted||i.subdocsAdded.add(r),i.subdocsRemoved.add(this)},null,!0)}this.emit("destroyed",[!0]),this.emit("destroy",[this]),super.destroy()}}class Mf{constructor(t){this.restDecoder=t}resetDsCurVal(){}readDsClock(){return kt(this.restDecoder)}readDsLen(){return kt(this.restDecoder)}}class wf extends Mf{readLeftID(){return qt(kt(this.restDecoder),kt(this.restDecoder))}readRightID(){return qt(kt(this.restDecoder),kt(this.restDecoder))}readClient(){return kt(this.restDecoder)}readInfo(){return wi(this.restDecoder)}readString(){return In(this.restDecoder)}readParentInfo(){return kt(this.restDecoder)===1}readTypeRef(){return kt(this.restDecoder)}readLen(){return kt(this.restDecoder)}readAny(){return pr(this.restDecoder)}readBuf(){return ex(xe(this.restDecoder))}readJSON(){return JSON.parse(In(this.restDecoder))}readKey(){return In(this.restDecoder)}}class $x{constructor(t){this.dsCurrVal=0,this.restDecoder=t}resetDsCurVal(){this.dsCurrVal=0}readDsClock(){return this.dsCurrVal+=kt(this.restDecoder),this.dsCurrVal}readDsLen(){const t=kt(this.restDecoder)+1;return this.dsCurrVal+=t,t}}class _r extends $x{constructor(t){super(t),this.keys=[],kt(t),this.keyClockDecoder=new Ea(xe(t)),this.clientDecoder=new Bs(xe(t)),this.leftClockDecoder=new Ea(xe(t)),this.rightClockDecoder=new Ea(xe(t)),this.infoDecoder=new Lu(xe(t),wi),this.stringDecoder=new Ay(xe(t)),this.parentInfoDecoder=new Lu(xe(t),wi),this.typeRefDecoder=new Bs(xe(t)),this.lenDecoder=new Bs(xe(t))}readLeftID(){return new sr(this.clientDecoder.read(),this.leftClockDecoder.read())}readRightID(){return new sr(this.clientDecoder.read(),this.rightClockDecoder.read())}readClient(){return this.clientDecoder.read()}readInfo(){return this.infoDecoder.read()}readString(){return this.stringDecoder.read()}readParentInfo(){return this.parentInfoDecoder.read()===1}readTypeRef(){return this.typeRefDecoder.read()}readLen(){return this.lenDecoder.read()}readAny(){return pr(this.restDecoder)}readBuf(){return xe(this.restDecoder)}readJSON(){return pr(this.restDecoder)}readKey(){const t=this.keyClockDecoder.read();if(t<this.keys.length)return this.keys[t];{const e=this.stringDecoder.read();return this.keys.push(e),e}}}class Tf{constructor(){this.restEncoder=Se()}toUint8Array(){return oe(this.restEncoder)}resetDsCurVal(){}writeDsClock(t){Pt(this.restEncoder,t)}writeDsLen(t){Pt(this.restEncoder,t)}}class ts extends Tf{writeLeftID(t){Pt(this.restEncoder,t.client),Pt(this.restEncoder,t.clock)}writeRightID(t){Pt(this.restEncoder,t.client),Pt(this.restEncoder,t.clock)}writeClient(t){Pt(this.restEncoder,t)}writeInfo(t){kr(this.restEncoder,t)}writeString(t){gn(this.restEncoder,t)}writeParentInfo(t){Pt(this.restEncoder,t?1:0)}writeTypeRef(t){Pt(this.restEncoder,t)}writeLen(t){Pt(this.restEncoder,t)}writeAny(t){dr(this.restEncoder,t)}writeBuf(t){ce(this.restEncoder,t)}writeJSON(t){gn(this.restEncoder,JSON.stringify(t))}writeKey(t){gn(this.restEncoder,t)}}class Af{constructor(){this.restEncoder=Se(),this.dsCurrVal=0}toUint8Array(){return oe(this.restEncoder)}resetDsCurVal(){this.dsCurrVal=0}writeDsClock(t){const e=t-this.dsCurrVal;this.dsCurrVal=t,Pt(this.restEncoder,e)}writeDsLen(t){t===0&&en(),Pt(this.restEncoder,t-1),this.dsCurrVal+=t}}class Ai extends Af{constructor(){super(),this.keyMap=new Map,this.keyClock=0,this.keyClockEncoder=new Sa,this.clientEncoder=new ks,this.leftClockEncoder=new Sa,this.rightClockEncoder=new Sa,this.infoEncoder=new Au(kr),this.stringEncoder=new vy,this.parentInfoEncoder=new Au(kr),this.typeRefEncoder=new ks,this.lenEncoder=new ks}toUint8Array(){const t=Se();return Pt(t,0),ce(t,this.keyClockEncoder.toUint8Array()),ce(t,this.clientEncoder.toUint8Array()),ce(t,this.leftClockEncoder.toUint8Array()),ce(t,this.rightClockEncoder.toUint8Array()),ce(t,oe(this.infoEncoder)),ce(t,this.stringEncoder.toUint8Array()),ce(t,oe(this.parentInfoEncoder)),ce(t,this.typeRefEncoder.toUint8Array()),ce(t,this.lenEncoder.toUint8Array()),vo(t,oe(this.restEncoder)),oe(t)}writeLeftID(t){this.clientEncoder.write(t.client),this.leftClockEncoder.write(t.clock)}writeRightID(t){this.clientEncoder.write(t.client),this.rightClockEncoder.write(t.clock)}writeClient(t){this.clientEncoder.write(t)}writeInfo(t){this.infoEncoder.write(t)}writeString(t){this.stringEncoder.write(t)}writeParentInfo(t){this.parentInfoEncoder.write(t?1:0)}writeTypeRef(t){this.typeRefEncoder.write(t)}writeLen(t){this.lenEncoder.write(t)}writeAny(t){dr(this.restEncoder,t)}writeBuf(t){ce(this.restEncoder,t)}writeJSON(t){dr(this.restEncoder,t)}writeKey(t){const e=this.keyMap.get(t);e===void 0?(this.keyClockEncoder.write(this.keyClock++),this.stringEncoder.write(t)):this.keyClockEncoder.write(e)}}const Kx=(n,t,e,i)=>{i=Di(i,t[0].id.clock);const r=_n(t,i);Pt(n.restEncoder,t.length-r),n.writeClient(e),Pt(n.restEncoder,i);const s=t[r];s.write(n,i-s.id.clock);for(let a=r+1;a<t.length;a++)t[a].write(n,0)},wc=(n,t,e)=>{const i=new Map;e.forEach((r,s)=>{be(t,s)>r&&i.set(s,r)}),Ro(t).forEach((r,s)=>{e.has(s)||i.set(s,0)}),Pt(n.restEncoder,i.size),Nn(i.entries()).sort((r,s)=>s[0]-r[0]).forEach(([r,s])=>{Kx(n,t.clients.get(r),r,s)})},Zx=(n,t)=>{const e=ze(),i=kt(n.restDecoder);for(let r=0;r<i;r++){const s=kt(n.restDecoder),a=new Array(s),o=n.readClient();let c=kt(n.restDecoder);e.set(o,{i:0,refs:a});for(let h=0;h<s;h++){const d=n.readInfo();switch(_o&d){case 0:{const l=n.readLen();a[h]=new Ke(qt(o,c),l),c+=l;break}case 10:{const l=kt(n.restDecoder);a[h]=new Ze(qt(o,c),l),c+=l;break}default:{const l=(d&(Pn|Xe))===0,f=new de(qt(o,c),null,(d&Xe)===Xe?n.readLeftID():null,null,(d&Pn)===Pn?n.readRightID():null,l?n.readParentInfo()?t.get(n.readString()):n.readLeftID():null,l&&(d&Or)===Or?n.readString():null,Qf(n,d));a[h]=f,c+=f.length}}}}return e},Jx=(n,t,e)=>{const i=[];let r=Nn(e.keys()).sort((g,v)=>g-v);if(r.length===0)return null;const s=()=>{if(r.length===0)return null;let g=e.get(r[r.length-1]);for(;g.refs.length===g.i;)if(r.pop(),r.length>0)g=e.get(r[r.length-1]);else return null;return g};let a=s();if(a===null)return null;const o=new Pf,c=new Map,h=(g,v)=>{const E=c.get(g);(E==null||E>v)&&c.set(g,v)};let d=a.refs[a.i++];const l=new Map,f=()=>{for(const g of i){const v=g.id.client,E=e.get(v);E?(E.i--,o.clients.set(v,E.refs.slice(E.i)),e.delete(v),E.i=0,E.refs=[]):o.clients.set(v,[g]),r=r.filter(y=>y!==v)}i.length=0};for(;;){if(d.constructor!==Ze){const v=je(l,d.id.client,()=>be(t,d.id.client))-d.id.clock;if(v<0)i.push(d),h(d.id.client,d.id.clock-1),f();else{const E=d.getMissing(n,t);if(E!==null){i.push(d);const y=e.get(E)||{refs:[],i:0};if(y.refs.length===y.i)h(E,be(t,E)),f();else{d=y.refs[y.i++];continue}}else(v===0||v<d.length)&&(d.integrate(n,v),l.set(d.id.client,d.id.clock+d.length))}}if(i.length>0)d=i.pop();else if(a!==null&&a.i<a.refs.length)d=a.refs[a.i++];else{if(a=s(),a===null)break;d=a.refs[a.i++]}}if(o.clients.size>0){const g=new Ai;return wc(g,o,new Map),Pt(g.restEncoder,0),{missing:c,update:g.toUint8Array()}}return null},Qx=(n,t)=>wc(n,t.doc.store,t.beforeState),tS=(n,t,e,i=new _r(n))=>ee(t,r=>{r.local=!1;let s=!1;const a=r.doc,o=a.store,c=Zx(i,a),h=Jx(r,o,c),d=o.pendingStructs;if(d){for(const[f,g]of d.missing)if(g<be(o,f)){s=!0;break}if(h){for(const[f,g]of h.missing){const v=d.missing.get(f);(v==null||v>g)&&d.missing.set(f,g)}d.update=Qs([d.update,h.update])}}else o.pendingStructs=h;const l=Fu(i,r,o);if(o.pendingDs){const f=new _r(yn(o.pendingDs));kt(f.restDecoder);const g=Fu(f,r,o);l&&g?o.pendingDs=Qs([l,g]):o.pendingDs=l||g}else o.pendingDs=l;if(s){const f=o.pendingStructs.update;o.pendingStructs=null,Cf(r.doc,f)}},e,!1),Cf=(n,t,e,i=_r)=>{const r=yn(t);tS(r,n,e,new i(r))},eS=(n,t,e)=>Cf(n,t,e,wf),nS=(n,t,e=new Map)=>{wc(n,t.store,e),Mr(n,Yx(t.store))},iS=(n,t=new Uint8Array([0]),e=new Ai)=>{const i=Rf(t);nS(e,n,i);const r=[e.toUint8Array()];if(n.store.pendingDs&&r.push(n.store.pendingDs),n.store.pendingStructs&&r.push(yS(n.store.pendingStructs.update,t)),r.length>1){if(e.constructor===ts)return _S(r.map((s,a)=>a===0?s:SS(s)));if(e.constructor===Ai)return Qs(r)}return r[0]},rS=(n,t)=>iS(n,t,new ts),sS=n=>{const t=new Map,e=kt(n.restDecoder);for(let i=0;i<e;i++){const r=kt(n.restDecoder),s=kt(n.restDecoder);t.set(r,s)}return t},Rf=n=>sS(new Mf(yn(n))),Lf=(n,t)=>(Pt(n.restEncoder,t.size),Nn(t.entries()).sort((e,i)=>i[0]-e[0]).forEach(([e,i])=>{Pt(n.restEncoder,e),Pt(n.restEncoder,i)}),n),oS=(n,t)=>Lf(n,Ro(t.store)),aS=(n,t=new Af)=>(n instanceof Map?Lf(t,n):oS(t,n),t.toUint8Array()),cS=n=>aS(n,new Tf);class lS{constructor(){this.l=[]}}const ku=()=>new lS,Bu=(n,t)=>n.l.push(t),zu=(n,t)=>{const e=n.l,i=e.length;n.l=e.filter(r=>t!==r),i===n.l.length&&console.error("[yjs] Tried to remove event handler that doesn't exist.")},Df=(n,t,e)=>_c(n.l,[t,e]);class sr{constructor(t,e){this.client=t,this.clock=e}}const Ds=(n,t)=>n===t||n!==null&&t!==null&&n.client===t.client&&n.clock===t.clock,qt=(n,t)=>new sr(n,t),uS=n=>{for(const[t,e]of n.doc.share.entries())if(e===n)return t;throw en()},Ji=(n,t)=>t===void 0?!n.deleted:t.sv.has(n.id.client)&&(t.sv.get(n.id.client)||0)>n.id.clock&&!Ef(t.ds,n.id),$a=(n,t)=>{const e=je(n.meta,$a,ii),i=n.doc.store;e.has(t)||(t.sv.forEach((r,s)=>{r<be(i,s)&&ri(n,qt(s,r))}),Sf(n,t.ds,r=>{}),e.add(t))};class Pf{constructor(){this.clients=new Map,this.pendingStructs=null,this.pendingDs=null}}const Ro=n=>{const t=new Map;return n.clients.forEach((e,i)=>{const r=e[e.length-1];t.set(i,r.id.clock+r.length)}),t},be=(n,t)=>{const e=n.clients.get(t);if(e===void 0)return 0;const i=e[e.length-1];return i.id.clock+i.length},If=(n,t)=>{let e=n.clients.get(t.id.client);if(e===void 0)e=[],n.clients.set(t.id.client,e);else{const i=e[e.length-1];if(i.id.clock+i.length!==t.id.clock)throw en()}e.push(t)},_n=(n,t)=>{let e=0,i=n.length-1,r=n[i],s=r.id.clock;if(s===t)return i;let a=Qe(t/(s+r.length-1)*i);for(;e<=i;){if(r=n[a],s=r.id.clock,s<=t){if(t<s+r.length)return a;e=a+1}else i=a-1;a=Qe((e+i)/2)}throw en()},hS=(n,t)=>{const e=n.clients.get(t.client);return e[_n(e,t.clock)]},Aa=hS,Ka=(n,t,e)=>{const i=_n(t,e),r=t[i];return r.id.clock<e&&r instanceof de?(t.splice(i+1,0,so(n,r,e-r.id.clock)),i+1):i},ri=(n,t)=>{const e=n.doc.store.clients.get(t.client);return e[Ka(n,e,t.clock)]},Gu=(n,t,e)=>{const i=t.clients.get(e.client),r=_n(i,e.clock),s=i[r];return e.clock!==s.id.clock+s.length-1&&s.constructor!==Ke&&i.splice(r+1,0,so(n,s,e.clock-s.id.clock+1)),s},fS=(n,t,e)=>{const i=n.clients.get(t.id.client);i[_n(i,t.id.clock)]=e},Uf=(n,t,e,i,r)=>{if(i===0)return;const s=e+i;let a=Ka(n,t,e),o;do o=t[a++],s<o.id.clock+o.length&&Ka(n,t,s),r(o);while(a<t.length&&t[a].id.clock<s)};class dS{constructor(t,e,i){this.doc=t,this.deleteSet=new Qr,this.beforeState=Ro(t.store),this.afterState=new Map,this.changed=new Map,this.changedParentTypes=new Map,this._mergeStructs=[],this.origin=e,this.meta=new Map,this.local=i,this.subdocsAdded=new Set,this.subdocsRemoved=new Set,this.subdocsLoaded=new Set,this._needFormattingCleanup=!1}}const Hu=(n,t)=>t.deleteSet.clients.size===0&&!Kv(t.afterState,(e,i)=>t.beforeState.get(i)!==e)?!1:(bc(t.deleteSet),Qx(n,t),Mr(n,t.deleteSet),!0),Vu=(n,t,e)=>{const i=t._item;(i===null||i.id.clock<(n.beforeState.get(i.id.client)||0)&&!i.deleted)&&je(n.changed,t,ii).add(e)},zs=(n,t)=>{let e=n[t],i=n[t-1],r=t;for(;r>0;e=i,i=n[--r-1]){if(i.deleted===e.deleted&&i.constructor===e.constructor&&i.mergeWith(e)){e instanceof de&&e.parentSub!==null&&e.parent._map.get(e.parentSub)===e&&e.parent._map.set(e.parentSub,i);continue}break}const s=t-r;return s&&n.splice(t+1-s,s),s},pS=(n,t,e)=>{for(const[i,r]of n.clients.entries()){const s=t.clients.get(i);for(let a=r.length-1;a>=0;a--){const o=r[a],c=o.clock+o.len;for(let h=_n(s,o.clock),d=s[h];h<s.length&&d.id.clock<c;d=s[++h]){const l=s[h];if(o.clock+o.len<=l.id.clock)break;l instanceof de&&l.deleted&&!l.keep&&e(l)&&l.gc(t,!1)}}}},mS=(n,t)=>{n.clients.forEach((e,i)=>{const r=t.clients.get(i);for(let s=e.length-1;s>=0;s--){const a=e[s],o=lc(r.length-1,1+_n(r,a.clock+a.len-1));for(let c=o,h=r[c];c>0&&h.id.clock>=a.clock;h=r[c])c-=1+zs(r,c)}})},Nf=(n,t)=>{if(t<n.length){const e=n[t],i=e.doc,r=i.store,s=e.deleteSet,a=e._mergeStructs;try{bc(s),e.afterState=Ro(e.doc.store),i.emit("beforeObserverCalls",[e,i]);const o=[];e.changed.forEach((c,h)=>o.push(()=>{(h._item===null||!h._item.deleted)&&h._callObserver(e,c)})),o.push(()=>{e.changedParentTypes.forEach((c,h)=>{h._dEH.l.length>0&&(h._item===null||!h._item.deleted)&&(c=c.filter(d=>d.target._item===null||!d.target._item.deleted),c.forEach(d=>{d.currentTarget=h,d._path=null}),c.sort((d,l)=>d.path.length-l.path.length),o.push(()=>{Df(h._dEH,c,e)}))}),o.push(()=>i.emit("afterTransaction",[e,i])),o.push(()=>{e._needFormattingCleanup&&NS(e)})}),_c(o,[])}finally{i.gc&&pS(s,r,i.gcFilter),mS(s,r),e.afterState.forEach((d,l)=>{const f=e.beforeState.get(l)||0;if(f!==d){const g=r.clients.get(l),v=Di(_n(g,f),1);for(let E=g.length-1;E>=v;)E-=1+zs(g,E)}});for(let d=a.length-1;d>=0;d--){const{client:l,clock:f}=a[d].id,g=r.clients.get(l),v=_n(g,f);v+1<g.length&&zs(g,v+1)>1||v>0&&zs(g,v)}if(!e.local&&e.afterState.get(i.clientID)!==e.beforeState.get(i.clientID)&&(vf(To,Je,"[yjs] ",Ti,mf,"Changed the client-id because another client seems to be using it."),i.clientID=bf()),i.emit("afterTransactionCleanup",[e,i]),i._observers.has("update")){const d=new ts;Hu(d,e)&&i.emit("update",[d.toUint8Array(),e.origin,i,e])}if(i._observers.has("updateV2")){const d=new Ai;Hu(d,e)&&i.emit("updateV2",[d.toUint8Array(),e.origin,i,e])}const{subdocsAdded:o,subdocsLoaded:c,subdocsRemoved:h}=e;(o.size>0||h.size>0||c.size>0)&&(o.forEach(d=>{d.clientID=i.clientID,d.collectionid==null&&(d.collectionid=i.collectionid),i.subdocs.add(d)}),h.forEach(d=>i.subdocs.delete(d)),i.emit("subdocs",[{loaded:c,added:o,removed:h},i,e]),h.forEach(d=>d.destroy())),n.length<=t+1?(i._transactionCleanups=[],i.emit("afterAllTransactions",[i,n])):Nf(n,t+1)}}},ee=(n,t,e=null,i=!0)=>{const r=n._transactionCleanups;let s=!1,a=null;n._transaction===null&&(s=!0,n._transaction=new dS(n,e,i),r.push(n._transaction),r.length===1&&n.emit("beforeAllTransactions",[n]),n.emit("beforeTransaction",[n._transaction,n]));try{a=t(n._transaction)}finally{if(s){const o=n._transaction===r[0];n._transaction=null,o&&Nf(r,0)}}return a};function*gS(n){const t=kt(n.restDecoder);for(let e=0;e<t;e++){const i=kt(n.restDecoder),r=n.readClient();let s=kt(n.restDecoder);for(let a=0;a<i;a++){const o=n.readInfo();if(o===10){const c=kt(n.restDecoder);yield new Ze(qt(r,s),c),s+=c}else if(_o&o){const c=(o&(Pn|Xe))===0,h=new de(qt(r,s),null,(o&Xe)===Xe?n.readLeftID():null,null,(o&Pn)===Pn?n.readRightID():null,c?n.readParentInfo()?n.readString():n.readLeftID():null,c&&(o&Or)===Or?n.readString():null,Qf(n,o));yield h,s+=h.length}else{const c=n.readLen();yield new Ke(qt(r,s),c),s+=c}}}}class Tc{constructor(t,e){this.gen=gS(t),this.curr=null,this.done=!1,this.filterSkips=e,this.next()}next(){do this.curr=this.gen.next().value||null;while(this.filterSkips&&this.curr!==null&&this.curr.constructor===Ze);return this.curr}}class Ac{constructor(t){this.currClient=0,this.startClock=0,this.written=0,this.encoder=t,this.clientStructs=[]}}const _S=n=>Qs(n,wf,ts),vS=(n,t)=>{if(n.constructor===Ke){const{client:e,clock:i}=n.id;return new Ke(qt(e,i+t),n.length-t)}else if(n.constructor===Ze){const{client:e,clock:i}=n.id;return new Ze(qt(e,i+t),n.length-t)}else{const e=n,{client:i,clock:r}=e.id;return new de(qt(i,r+t),null,qt(i,r+t-1),null,e.rightOrigin,e.parent,e.parentSub,e.content.splice(t))}},Qs=(n,t=_r,e=Ai)=>{if(n.length===1)return n[0];const i=n.map(d=>new t(yn(d)));let r=i.map(d=>new Tc(d,!0)),s=null;const a=new e,o=new Ac(a);for(;r=r.filter(f=>f.curr!==null),r.sort((f,g)=>{if(f.curr.id.client===g.curr.id.client){const v=f.curr.id.clock-g.curr.id.clock;return v===0?f.curr.constructor===g.curr.constructor?0:f.curr.constructor===Ze?1:-1:v}else return g.curr.id.client-f.curr.id.client}),r.length!==0;){const d=r[0],l=d.curr.id.client;if(s!==null){let f=d.curr,g=!1;for(;f!==null&&f.id.clock+f.length<=s.struct.id.clock+s.struct.length&&f.id.client>=s.struct.id.client;)f=d.next(),g=!0;if(f===null||f.id.client!==l||g&&f.id.clock>s.struct.id.clock+s.struct.length)continue;if(l!==s.struct.id.client)$n(o,s.struct,s.offset),s={struct:f,offset:0},d.next();else if(s.struct.id.clock+s.struct.length<f.id.clock)if(s.struct.constructor===Ze)s.struct.length=f.id.clock+f.length-s.struct.id.clock;else{$n(o,s.struct,s.offset);const v=f.id.clock-s.struct.id.clock-s.struct.length;s={struct:new Ze(qt(l,s.struct.id.clock+s.struct.length),v),offset:0}}else{const v=s.struct.id.clock+s.struct.length-f.id.clock;v>0&&(s.struct.constructor===Ze?s.struct.length-=v:f=vS(f,v)),s.struct.mergeWith(f)||($n(o,s.struct,s.offset),s={struct:f,offset:0},d.next())}}else s={struct:d.curr,offset:0},d.next();for(let f=d.curr;f!==null&&f.id.client===l&&f.id.clock===s.struct.id.clock+s.struct.length&&f.constructor!==Ze;f=d.next())$n(o,s.struct,s.offset),s={struct:f,offset:0}}s!==null&&($n(o,s.struct,s.offset),s=null),Cc(o);const c=i.map(d=>Mc(d)),h=jx(c);return Mr(a,h),a.toUint8Array()},yS=(n,t,e=_r,i=Ai)=>{const r=Rf(t),s=new i,a=new Ac(s),o=new e(yn(n)),c=new Tc(o,!1);for(;c.curr;){const d=c.curr,l=d.id.client,f=r.get(l)||0;if(c.curr.constructor===Ze){c.next();continue}if(d.id.clock+d.length>f)for($n(a,d,Di(f-d.id.clock,0)),c.next();c.curr&&c.curr.id.client===l;)$n(a,c.curr,0),c.next();else for(;c.curr&&c.curr.id.client===l&&c.curr.id.clock+c.curr.length<=f;)c.next()}Cc(a);const h=Mc(o);return Mr(s,h),s.toUint8Array()},Of=n=>{n.written>0&&(n.clientStructs.push({written:n.written,restEncoder:oe(n.encoder.restEncoder)}),n.encoder.restEncoder=Se(),n.written=0)},$n=(n,t,e)=>{n.written>0&&n.currClient!==t.id.client&&Of(n),n.written===0&&(n.currClient=t.id.client,n.encoder.writeClient(t.id.client),Pt(n.encoder.restEncoder,t.id.clock+e)),t.write(n.encoder,e),n.written++},Cc=n=>{Of(n);const t=n.encoder.restEncoder;Pt(t,n.clientStructs.length);for(let e=0;e<n.clientStructs.length;e++){const i=n.clientStructs[e];Pt(t,i.written),vo(t,i.restEncoder)}},xS=(n,t,e,i)=>{const r=new e(yn(n)),s=new Tc(r,!1),a=new i,o=new Ac(a);for(let h=s.curr;h!==null;h=s.next())$n(o,t(h),0);Cc(o);const c=Mc(r);return Mr(a,c),a.toUint8Array()},SS=n=>xS(n,Vy,_r,ts),Wu="You must not compute changes after the event-handler fired.";class Lo{constructor(t,e){this.target=t,this.currentTarget=t,this.transaction=e,this._changes=null,this._keys=null,this._delta=null,this._path=null}get path(){return this._path||(this._path=ES(this.currentTarget,this.target))}deletes(t){return Ef(this.transaction.deleteSet,t.id)}get keys(){if(this._keys===null){if(this.transaction.doc._transactionCleanups.length===0)throw tn(Wu);const t=new Map,e=this.target;this.transaction.changed.get(e).forEach(r=>{if(r!==null){const s=e._map.get(r);let a,o;if(this.adds(s)){let c=s.left;for(;c!==null&&this.adds(c);)c=c.left;if(this.deletes(s))if(c!==null&&this.deletes(c))a="delete",o=va(c.content.getContent());else return;else c!==null&&this.deletes(c)?(a="update",o=va(c.content.getContent())):(a="add",o=void 0)}else if(this.deletes(s))a="delete",o=va(s.content.getContent());else return;t.set(r,{action:a,oldValue:o})}}),this._keys=t}return this._keys}get delta(){return this.changes.delta}adds(t){return t.id.clock>=(this.transaction.beforeState.get(t.id.client)||0)}get changes(){let t=this._changes;if(t===null){if(this.transaction.doc._transactionCleanups.length===0)throw tn(Wu);const e=this.target,i=ii(),r=ii(),s=[];if(t={added:i,deleted:r,delta:s,keys:this.keys},this.transaction.changed.get(e).has(null)){let o=null;const c=()=>{o&&s.push(o)};for(let h=e._start;h!==null;h=h.right)h.deleted?this.deletes(h)&&!this.adds(h)&&((o===null||o.delete===void 0)&&(c(),o={delete:0}),o.delete+=h.length,r.add(h)):this.adds(h)?((o===null||o.insert===void 0)&&(c(),o={insert:[]}),o.insert=o.insert.concat(h.content.getContent()),i.add(h)):((o===null||o.retain===void 0)&&(c(),o={retain:0}),o.retain+=h.length);o!==null&&o.retain===void 0&&c()}this._changes=t}return t}}const ES=(n,t)=>{const e=[];for(;t._item!==null&&t!==n;){if(t._item.parentSub!==null)e.unshift(t._item.parentSub);else{let i=0,r=t._item.parent._start;for(;r!==t._item&&r!==null;)!r.deleted&&r.countable&&(i+=r.length),r=r.right;e.unshift(i)}t=t._item.parent}return e},De=()=>{Hx("Invalid access: Add Yjs type to a document before reading data.")},Ff=80;let Rc=0;class bS{constructor(t,e){t.marker=!0,this.p=t,this.index=e,this.timestamp=Rc++}}const MS=n=>{n.timestamp=Rc++},kf=(n,t,e)=>{n.p.marker=!1,n.p=t,t.marker=!0,n.index=e,n.timestamp=Rc++},wS=(n,t,e)=>{if(n.length>=Ff){const i=n.reduce((r,s)=>r.timestamp<s.timestamp?r:s);return kf(i,t,e),i}else{const i=new bS(t,e);return n.push(i),i}},Do=(n,t)=>{if(n._start===null||t===0||n._searchMarker===null)return null;const e=n._searchMarker.length===0?null:n._searchMarker.reduce((s,a)=>Fs(t-s.index)<Fs(t-a.index)?s:a);let i=n._start,r=0;for(e!==null&&(i=e.p,r=e.index,MS(e));i.right!==null&&r<t;){if(!i.deleted&&i.countable){if(t<r+i.length)break;r+=i.length}i=i.right}for(;i.left!==null&&r>t;)i=i.left,!i.deleted&&i.countable&&(r-=i.length);for(;i.left!==null&&i.left.id.client===i.id.client&&i.left.id.clock+i.left.length===i.id.clock;)i=i.left,!i.deleted&&i.countable&&(r-=i.length);return e!==null&&Fs(e.index-r)<i.parent.length/Ff?(kf(e,i,r),e):wS(n._searchMarker,i,r)},Hr=(n,t,e)=>{for(let i=n.length-1;i>=0;i--){const r=n[i];if(e>0){let s=r.p;for(s.marker=!1;s&&(s.deleted||!s.countable);)s=s.left,s&&!s.deleted&&s.countable&&(r.index-=s.length);if(s===null||s.marker===!0){n.splice(i,1);continue}r.p=s,s.marker=!0}(t<r.index||e>0&&t===r.index)&&(r.index=Di(t,r.index+e))}},Po=(n,t,e)=>{const i=n,r=t.changedParentTypes;for(;je(r,n,()=>[]).push(e),n._item!==null;)n=n._item.parent;Df(i._eH,e,t)};class Te{constructor(){this._item=null,this._map=new Map,this._start=null,this.doc=null,this._length=0,this._eH=ku(),this._dEH=ku(),this._searchMarker=null}get parent(){return this._item?this._item.parent:null}_integrate(t,e){this.doc=t,this._item=e}_copy(){throw ln()}clone(){throw ln()}_write(t){}get _first(){let t=this._start;for(;t!==null&&t.deleted;)t=t.right;return t}_callObserver(t,e){!t.local&&this._searchMarker&&(this._searchMarker.length=0)}observe(t){Bu(this._eH,t)}observeDeep(t){Bu(this._dEH,t)}unobserve(t){zu(this._eH,t)}unobserveDeep(t){zu(this._dEH,t)}toJSON(){}}const Bf=(n,t,e)=>{n.doc??De(),t<0&&(t=n._length+t),e<0&&(e=n._length+e);let i=e-t;const r=[];let s=n._start;for(;s!==null&&i>0;){if(s.countable&&!s.deleted){const a=s.content.getContent();if(a.length<=t)t-=a.length;else{for(let o=t;o<a.length&&i>0;o++)r.push(a[o]),i--;t=0}}s=s.right}return r},zf=n=>{n.doc??De();const t=[];let e=n._start;for(;e!==null;){if(e.countable&&!e.deleted){const i=e.content.getContent();for(let r=0;r<i.length;r++)t.push(i[r])}e=e.right}return t},Vr=(n,t)=>{let e=0,i=n._start;for(n.doc??De();i!==null;){if(i.countable&&!i.deleted){const r=i.content.getContent();for(let s=0;s<r.length;s++)t(r[s],e++,n)}i=i.right}},Gf=(n,t)=>{const e=[];return Vr(n,(i,r)=>{e.push(t(i,r,n))}),e},TS=n=>{let t=n._start,e=null,i=0;return{[Symbol.iterator](){return this},next:()=>{if(e===null){for(;t!==null&&t.deleted;)t=t.right;if(t===null)return{done:!0,value:void 0};e=t.content.getContent(),i=0,t=t.right}const r=e[i++];return e.length<=i&&(e=null),{done:!1,value:r}}}},Hf=(n,t)=>{n.doc??De();const e=Do(n,t);let i=n._start;for(e!==null&&(i=e.p,t-=e.index);i!==null;i=i.right)if(!i.deleted&&i.countable){if(t<i.length)return i.content.getContent()[t];t-=i.length}},to=(n,t,e,i)=>{let r=e;const s=n.doc,a=s.clientID,o=s.store,c=e===null?t._start:e.right;let h=[];const d=()=>{h.length>0&&(r=new de(qt(a,be(o,a)),r,r&&r.lastId,c,c&&c.id,t,null,new Ri(h)),r.integrate(n,0),h=[])};i.forEach(l=>{if(l===null)h.push(l);else switch(l.constructor){case Number:case Object:case Boolean:case Array:case String:h.push(l);break;default:switch(d(),l.constructor){case Uint8Array:case ArrayBuffer:r=new de(qt(a,be(o,a)),r,r&&r.lastId,c,c&&c.id,t,null,new es(new Uint8Array(l))),r.integrate(n,0);break;case wr:r=new de(qt(a,be(o,a)),r,r&&r.lastId,c,c&&c.id,t,null,new ns(l)),r.integrate(n,0);break;default:if(l instanceof Te)r=new de(qt(a,be(o,a)),r,r&&r.lastId,c,c&&c.id,t,null,new Bn(l)),r.integrate(n,0);else throw new Error("Unexpected content type in insert operation")}}}),d()},Vf=()=>tn("Length exceeded!"),Wf=(n,t,e,i)=>{if(e>t._length)throw Vf();if(e===0)return t._searchMarker&&Hr(t._searchMarker,e,i.length),to(n,t,null,i);const r=e,s=Do(t,e);let a=t._start;for(s!==null&&(a=s.p,e-=s.index,e===0&&(a=a.prev,e+=a&&a.countable&&!a.deleted?a.length:0));a!==null;a=a.right)if(!a.deleted&&a.countable){if(e<=a.length){e<a.length&&ri(n,qt(a.id.client,a.id.clock+e));break}e-=a.length}return t._searchMarker&&Hr(t._searchMarker,r,i.length),to(n,t,a,i)},AS=(n,t,e)=>{let r=(t._searchMarker||[]).reduce((s,a)=>a.index>s.index?a:s,{index:0,p:t._start}).p;if(r)for(;r.right;)r=r.right;return to(n,t,r,e)},Xf=(n,t,e,i)=>{if(i===0)return;const r=e,s=i,a=Do(t,e);let o=t._start;for(a!==null&&(o=a.p,e-=a.index);o!==null&&e>0;o=o.right)!o.deleted&&o.countable&&(e<o.length&&ri(n,qt(o.id.client,o.id.clock+e)),e-=o.length);for(;i>0&&o!==null;)o.deleted||(i<o.length&&ri(n,qt(o.id.client,o.id.clock+i)),o.delete(n),i-=o.length),o=o.right;if(i>0)throw Vf();t._searchMarker&&Hr(t._searchMarker,r,-s+i)},eo=(n,t,e)=>{const i=t._map.get(e);i!==void 0&&i.delete(n)},Lc=(n,t,e,i)=>{const r=t._map.get(e)||null,s=n.doc,a=s.clientID;let o;if(i==null)o=new Ri([i]);else switch(i.constructor){case Number:case Object:case Boolean:case Array:case String:case Date:case BigInt:o=new Ri([i]);break;case Uint8Array:o=new es(i);break;case wr:o=new ns(i);break;default:if(i instanceof Te)o=new Bn(i);else throw new Error("Unexpected content type")}new de(qt(a,be(s.store,a)),r,r&&r.lastId,null,null,t,e,o).integrate(n,0)},Dc=(n,t)=>{n.doc??De();const e=n._map.get(t);return e!==void 0&&!e.deleted?e.content.getContent()[e.length-1]:void 0},jf=n=>{const t={};return n.doc??De(),n._map.forEach((e,i)=>{e.deleted||(t[i]=e.content.getContent()[e.length-1])}),t},qf=(n,t)=>{n.doc??De();const e=n._map.get(t);return e!==void 0&&!e.deleted},CS=(n,t)=>{const e={};return n._map.forEach((i,r)=>{let s=i;for(;s!==null&&(!t.sv.has(s.id.client)||s.id.clock>=(t.sv.get(s.id.client)||0));)s=s.left;s!==null&&Ji(s,t)&&(e[r]=s.content.getContent()[s.length-1])}),e},Ps=n=>(n.doc??De(),Wx(n._map.entries(),t=>!t[1].deleted));class RS extends Lo{}class or extends Te{constructor(){super(),this._prelimContent=[],this._searchMarker=[]}static from(t){const e=new or;return e.push(t),e}_integrate(t,e){super._integrate(t,e),this.insert(0,this._prelimContent),this._prelimContent=null}_copy(){return new or}clone(){const t=new or;return t.insert(0,this.toArray().map(e=>e instanceof Te?e.clone():e)),t}get length(){return this.doc??De(),this._length}_callObserver(t,e){super._callObserver(t,e),Po(this,t,new RS(this,t))}insert(t,e){this.doc!==null?ee(this.doc,i=>{Wf(i,this,t,e)}):this._prelimContent.splice(t,0,...e)}push(t){this.doc!==null?ee(this.doc,e=>{AS(e,this,t)}):this._prelimContent.push(...t)}unshift(t){this.insert(0,t)}delete(t,e=1){this.doc!==null?ee(this.doc,i=>{Xf(i,this,t,e)}):this._prelimContent.splice(t,e)}get(t){return Hf(this,t)}toArray(){return zf(this)}slice(t=0,e=this.length){return Bf(this,t,e)}toJSON(){return this.map(t=>t instanceof Te?t.toJSON():t)}map(t){return Gf(this,t)}forEach(t){Vr(this,t)}[Symbol.iterator](){return TS(this)}_write(t){t.writeTypeRef(tE)}}const LS=n=>new or;class DS extends Lo{constructor(t,e,i){super(t,e),this.keysChanged=i}}class vr extends Te{constructor(t){super(),this._prelimContent=null,t===void 0?this._prelimContent=new Map:this._prelimContent=new Map(t)}_integrate(t,e){super._integrate(t,e),this._prelimContent.forEach((i,r)=>{this.set(r,i)}),this._prelimContent=null}_copy(){return new vr}clone(){const t=new vr;return this.forEach((e,i)=>{t.set(i,e instanceof Te?e.clone():e)}),t}_callObserver(t,e){Po(this,t,new DS(this,t,e))}toJSON(){this.doc??De();const t={};return this._map.forEach((e,i)=>{if(!e.deleted){const r=e.content.getContent()[e.length-1];t[i]=r instanceof Te?r.toJSON():r}}),t}get size(){return[...Ps(this)].length}keys(){return Ta(Ps(this),t=>t[0])}values(){return Ta(Ps(this),t=>t[1].content.getContent()[t[1].length-1])}entries(){return Ta(Ps(this),t=>[t[0],t[1].content.getContent()[t[1].length-1]])}forEach(t){this.doc??De(),this._map.forEach((e,i)=>{e.deleted||t(e.content.getContent()[e.length-1],i,this)})}[Symbol.iterator](){return this.entries()}delete(t){this.doc!==null?ee(this.doc,e=>{eo(e,this,t)}):this._prelimContent.delete(t)}set(t,e){return this.doc!==null?ee(this.doc,i=>{Lc(i,this,t,e)}):this._prelimContent.set(t,e),e}get(t){return Dc(this,t)}has(t){return qf(this,t)}clear(){this.doc!==null?ee(this.doc,t=>{this.forEach(function(e,i,r){eo(t,r,i)})}):this._prelimContent.clear()}_write(t){t.writeTypeRef(eE)}}const PS=n=>new vr,Zn=(n,t)=>n===t||typeof n=="object"&&typeof t=="object"&&n&&t&&zy(n,t);class Za{constructor(t,e,i,r){this.left=t,this.right=e,this.index=i,this.currentAttributes=r}forward(){switch(this.right===null&&en(),this.right.content.constructor){case ge:this.right.deleted||Tr(this.currentAttributes,this.right.content);break;default:this.right.deleted||(this.index+=this.right.length);break}this.left=this.right,this.right=this.right.right}}const Xu=(n,t,e)=>{for(;t.right!==null&&e>0;){switch(t.right.content.constructor){case ge:t.right.deleted||Tr(t.currentAttributes,t.right.content);break;default:t.right.deleted||(e<t.right.length&&ri(n,qt(t.right.id.client,t.right.id.clock+e)),t.index+=t.right.length,e-=t.right.length);break}t.left=t.right,t.right=t.right.right}return t},Is=(n,t,e,i)=>{const r=new Map,s=i?Do(t,e):null;if(s){const a=new Za(s.p.left,s.p,s.index,r);return Xu(n,a,e-s.index)}else{const a=new Za(null,t._start,0,r);return Xu(n,a,e)}},Yf=(n,t,e,i)=>{for(;e.right!==null&&(e.right.deleted===!0||e.right.content.constructor===ge&&Zn(i.get(e.right.content.key),e.right.content.value));)e.right.deleted||i.delete(e.right.content.key),e.forward();const r=n.doc,s=r.clientID;i.forEach((a,o)=>{const c=e.left,h=e.right,d=new de(qt(s,be(r.store,s)),c,c&&c.lastId,h,h&&h.id,t,null,new ge(o,a));d.integrate(n,0),e.right=d,e.forward()})},Tr=(n,t)=>{const{key:e,value:i}=t;i===null?n.delete(e):n.set(e,i)},$f=(n,t)=>{for(;n.right!==null;){if(!(n.right.deleted||n.right.content.constructor===ge&&Zn(t[n.right.content.key]??null,n.right.content.value)))break;n.forward()}},Kf=(n,t,e,i)=>{const r=n.doc,s=r.clientID,a=new Map;for(const o in i){const c=i[o],h=e.currentAttributes.get(o)??null;if(!Zn(h,c)){a.set(o,h);const{left:d,right:l}=e;e.right=new de(qt(s,be(r.store,s)),d,d&&d.lastId,l,l&&l.id,t,null,new ge(o,c)),e.right.integrate(n,0),e.forward()}}return a},Ca=(n,t,e,i,r)=>{e.currentAttributes.forEach((f,g)=>{r[g]===void 0&&(r[g]=null)});const s=n.doc,a=s.clientID;$f(e,r);const o=Kf(n,t,e,r),c=i.constructor===String?new vn(i):i instanceof Te?new Bn(i):new Pi(i);let{left:h,right:d,index:l}=e;t._searchMarker&&Hr(t._searchMarker,e.index,c.getLength()),d=new de(qt(a,be(s.store,a)),h,h&&h.lastId,d,d&&d.id,t,null,c),d.integrate(n,0),e.right=d,e.index=l,e.forward(),Yf(n,t,e,o)},ju=(n,t,e,i,r)=>{const s=n.doc,a=s.clientID;$f(e,r);const o=Kf(n,t,e,r);t:for(;e.right!==null&&(i>0||o.size>0&&(e.right.deleted||e.right.content.constructor===ge));){if(!e.right.deleted)switch(e.right.content.constructor){case ge:{const{key:c,value:h}=e.right.content,d=r[c];if(d!==void 0){if(Zn(d,h))o.delete(c);else{if(i===0)break t;o.set(c,h)}e.right.delete(n)}else e.currentAttributes.set(c,h);break}default:i<e.right.length&&ri(n,qt(e.right.id.client,e.right.id.clock+i)),i-=e.right.length;break}e.forward()}if(i>0){let c="";for(;i>0;i--)c+=`
`;e.right=new de(qt(a,be(s.store,a)),e.left,e.left&&e.left.lastId,e.right,e.right&&e.right.id,t,null,new vn(c)),e.right.integrate(n,0),e.forward()}Yf(n,t,e,o)},Zf=(n,t,e,i,r)=>{let s=t;const a=ze();for(;s&&(!s.countable||s.deleted);){if(!s.deleted&&s.content.constructor===ge){const h=s.content;a.set(h.key,h)}s=s.right}let o=0,c=!1;for(;t!==s;){if(e===t&&(c=!0),!t.deleted){const h=t.content;switch(h.constructor){case ge:{const{key:d,value:l}=h,f=i.get(d)??null;(a.get(d)!==h||f===l)&&(t.delete(n),o++,!c&&(r.get(d)??null)===l&&f!==l&&(f===null?r.delete(d):r.set(d,f))),!c&&!t.deleted&&Tr(r,h);break}}}t=t.right}return o},IS=(n,t)=>{for(;t&&t.right&&(t.right.deleted||!t.right.countable);)t=t.right;const e=new Set;for(;t&&(t.deleted||!t.countable);){if(!t.deleted&&t.content.constructor===ge){const i=t.content.key;e.has(i)?t.delete(n):e.add(i)}t=t.left}},US=n=>{let t=0;return ee(n.doc,e=>{let i=n._start,r=n._start,s=ze();const a=Va(s);for(;r;){if(r.deleted===!1)switch(r.content.constructor){case ge:Tr(a,r.content);break;default:t+=Zf(e,i,r,s,a),s=Va(a),i=r;break}r=r.right}}),t},NS=n=>{const t=new Set,e=n.doc;for(const[i,r]of n.afterState.entries()){const s=n.beforeState.get(i)||0;r!==s&&Uf(n,e.store.clients.get(i),s,r,a=>{!a.deleted&&a.content.constructor===ge&&a.constructor!==Ke&&t.add(a.parent)})}ee(e,i=>{Sf(n,n.deleteSet,r=>{if(r instanceof Ke||!r.parent._hasFormatting||t.has(r.parent))return;const s=r.parent;r.content.constructor===ge?t.add(s):IS(i,r)});for(const r of t)US(r)})},qu=(n,t,e)=>{const i=e,r=Va(t.currentAttributes),s=t.right;for(;e>0&&t.right!==null;){if(t.right.deleted===!1)switch(t.right.content.constructor){case Bn:case Pi:case vn:e<t.right.length&&ri(n,qt(t.right.id.client,t.right.id.clock+e)),e-=t.right.length,t.right.delete(n);break}t.forward()}s&&Zf(n,s,t.right,r,t.currentAttributes);const a=(t.left||t.right).parent;return a._searchMarker&&Hr(a._searchMarker,t.index,-i+e),t};class OS extends Lo{constructor(t,e,i){super(t,e),this.childListChanged=!1,this.keysChanged=new Set,i.forEach(r=>{r===null?this.childListChanged=!0:this.keysChanged.add(r)})}get changes(){if(this._changes===null){const t={keys:this.keys,delta:this.delta,added:new Set,deleted:new Set};this._changes=t}return this._changes}get delta(){if(this._delta===null){const t=this.target.doc,e=[];ee(t,i=>{const r=new Map,s=new Map;let a=this.target._start,o=null;const c={};let h="",d=0,l=0;const f=()=>{if(o!==null){let g=null;switch(o){case"delete":l>0&&(g={delete:l}),l=0;break;case"insert":(typeof h=="object"||h.length>0)&&(g={insert:h},r.size>0&&(g.attributes={},r.forEach((v,E)=>{v!==null&&(g.attributes[E]=v)}))),h="";break;case"retain":d>0&&(g={retain:d},By(c)||(g.attributes=Oy({},c))),d=0;break}g&&e.push(g),o=null}};for(;a!==null;){switch(a.content.constructor){case Bn:case Pi:this.adds(a)?this.deletes(a)||(f(),o="insert",h=a.content.getContent()[0],f()):this.deletes(a)?(o!=="delete"&&(f(),o="delete"),l+=1):a.deleted||(o!=="retain"&&(f(),o="retain"),d+=1);break;case vn:this.adds(a)?this.deletes(a)||(o!=="insert"&&(f(),o="insert"),h+=a.content.str):this.deletes(a)?(o!=="delete"&&(f(),o="delete"),l+=a.length):a.deleted||(o!=="retain"&&(f(),o="retain"),d+=a.length);break;case ge:{const{key:g,value:v}=a.content;if(this.adds(a)){if(!this.deletes(a)){const E=r.get(g)??null;Zn(E,v)?v!==null&&a.delete(i):(o==="retain"&&f(),Zn(v,s.get(g)??null)?delete c[g]:c[g]=v)}}else if(this.deletes(a)){s.set(g,v);const E=r.get(g)??null;Zn(E,v)||(o==="retain"&&f(),c[g]=E)}else if(!a.deleted){s.set(g,v);const E=c[g];E!==void 0&&(Zn(E,v)?E!==null&&a.delete(i):(o==="retain"&&f(),v===null?delete c[g]:c[g]=v))}a.deleted||(o==="insert"&&f(),Tr(r,a.content));break}}a=a.right}for(f();e.length>0;){const g=e[e.length-1];if(g.retain!==void 0&&g.attributes===void 0)e.pop();else break}}),this._delta=e}return this._delta}}class yr extends Te{constructor(t){super(),this._pending=t!==void 0?[()=>this.insert(0,t)]:[],this._searchMarker=[],this._hasFormatting=!1}get length(){return this.doc??De(),this._length}_integrate(t,e){super._integrate(t,e);try{this._pending.forEach(i=>i())}catch(i){console.error(i)}this._pending=null}_copy(){return new yr}clone(){const t=new yr;return t.applyDelta(this.toDelta()),t}_callObserver(t,e){super._callObserver(t,e);const i=new OS(this,t,e);Po(this,t,i),!t.local&&this._hasFormatting&&(t._needFormattingCleanup=!0)}toString(){this.doc??De();let t="",e=this._start;for(;e!==null;)!e.deleted&&e.countable&&e.content.constructor===vn&&(t+=e.content.str),e=e.right;return t}toJSON(){return this.toString()}applyDelta(t,{sanitize:e=!0}={}){this.doc!==null?ee(this.doc,i=>{const r=new Za(null,this._start,0,new Map);for(let s=0;s<t.length;s++){const a=t[s];if(a.insert!==void 0){const o=!e&&typeof a.insert=="string"&&s===t.length-1&&r.right===null&&a.insert.slice(-1)===`
`?a.insert.slice(0,-1):a.insert;(typeof o!="string"||o.length>0)&&Ca(i,this,r,o,a.attributes||{})}else a.retain!==void 0?ju(i,this,r,a.retain,a.attributes||{}):a.delete!==void 0&&qu(i,r,a.delete)}}):this._pending.push(()=>this.applyDelta(t))}toDelta(t,e,i){this.doc??De();const r=[],s=new Map,a=this.doc;let o="",c=this._start;function h(){if(o.length>0){const l={};let f=!1;s.forEach((v,E)=>{f=!0,l[E]=v});const g={insert:o};f&&(g.attributes=l),r.push(g),o=""}}const d=()=>{for(;c!==null;){if(Ji(c,t)||e!==void 0&&Ji(c,e))switch(c.content.constructor){case vn:{const l=s.get("ychange");t!==void 0&&!Ji(c,t)?(l===void 0||l.user!==c.id.client||l.type!=="removed")&&(h(),s.set("ychange",i?i("removed",c.id):{type:"removed"})):e!==void 0&&!Ji(c,e)?(l===void 0||l.user!==c.id.client||l.type!=="added")&&(h(),s.set("ychange",i?i("added",c.id):{type:"added"})):l!==void 0&&(h(),s.delete("ychange")),o+=c.content.str;break}case Bn:case Pi:{h();const l={insert:c.content.getContent()[0]};if(s.size>0){const f={};l.attributes=f,s.forEach((g,v)=>{f[v]=g})}r.push(l);break}case ge:Ji(c,t)&&(h(),Tr(s,c.content));break}c=c.right}h()};return t||e?ee(a,l=>{t&&$a(l,t),e&&$a(l,e),d()},"cleanup"):d(),r}insert(t,e,i){if(e.length<=0)return;const r=this.doc;r!==null?ee(r,s=>{const a=Is(s,this,t,!i);i||(i={},a.currentAttributes.forEach((o,c)=>{i[c]=o})),Ca(s,this,a,e,i)}):this._pending.push(()=>this.insert(t,e,i))}insertEmbed(t,e,i){const r=this.doc;r!==null?ee(r,s=>{const a=Is(s,this,t,!i);Ca(s,this,a,e,i||{})}):this._pending.push(()=>this.insertEmbed(t,e,i||{}))}delete(t,e){if(e===0)return;const i=this.doc;i!==null?ee(i,r=>{qu(r,Is(r,this,t,!0),e)}):this._pending.push(()=>this.delete(t,e))}format(t,e,i){if(e===0)return;const r=this.doc;r!==null?ee(r,s=>{const a=Is(s,this,t,!1);a.right!==null&&ju(s,this,a,e,i)}):this._pending.push(()=>this.format(t,e,i))}removeAttribute(t){this.doc!==null?ee(this.doc,e=>{eo(e,this,t)}):this._pending.push(()=>this.removeAttribute(t))}setAttribute(t,e){this.doc!==null?ee(this.doc,i=>{Lc(i,this,t,e)}):this._pending.push(()=>this.setAttribute(t,e))}getAttribute(t){return Dc(this,t)}getAttributes(){return jf(this)}_write(t){t.writeTypeRef(nE)}}const FS=n=>new yr;class Ra{constructor(t,e=()=>!0){this._filter=e,this._root=t,this._currentNode=t._start,this._firstCall=!0,t.doc??De()}[Symbol.iterator](){return this}next(){let t=this._currentNode,e=t&&t.content&&t.content.type;if(t!==null&&(!this._firstCall||t.deleted||!this._filter(e)))do if(e=t.content.type,!t.deleted&&(e.constructor===xr||e.constructor===Ci)&&e._start!==null)t=e._start;else for(;t!==null;){const i=t.next;if(i!==null){t=i;break}else t.parent===this._root?t=null:t=t.parent._item}while(t!==null&&(t.deleted||!this._filter(t.content.type)));return this._firstCall=!1,t===null?{value:void 0,done:!0}:(this._currentNode=t,{value:t.content.type,done:!1})}}class Ci extends Te{constructor(){super(),this._prelimContent=[]}get firstChild(){const t=this._first;return t?t.content.getContent()[0]:null}_integrate(t,e){super._integrate(t,e),this.insert(0,this._prelimContent),this._prelimContent=null}_copy(){return new Ci}clone(){const t=new Ci;return t.insert(0,this.toArray().map(e=>e instanceof Te?e.clone():e)),t}get length(){return this.doc??De(),this._prelimContent===null?this._length:this._prelimContent.length}createTreeWalker(t){return new Ra(this,t)}querySelector(t){t=t.toUpperCase();const i=new Ra(this,r=>r.nodeName&&r.nodeName.toUpperCase()===t).next();return i.done?null:i.value}querySelectorAll(t){return t=t.toUpperCase(),Nn(new Ra(this,e=>e.nodeName&&e.nodeName.toUpperCase()===t))}_callObserver(t,e){Po(this,t,new zS(this,e,t))}toString(){return Gf(this,t=>t.toString()).join("")}toJSON(){return this.toString()}toDOM(t=document,e={},i){const r=t.createDocumentFragment();return i!==void 0&&i._createAssociation(r,this),Vr(this,s=>{r.insertBefore(s.toDOM(t,e,i),null)}),r}insert(t,e){this.doc!==null?ee(this.doc,i=>{Wf(i,this,t,e)}):this._prelimContent.splice(t,0,...e)}insertAfter(t,e){if(this.doc!==null)ee(this.doc,i=>{const r=t&&t instanceof Te?t._item:t;to(i,this,r,e)});else{const i=this._prelimContent,r=t===null?0:i.findIndex(s=>s===t)+1;if(r===0&&t!==null)throw tn("Reference item not found");i.splice(r,0,...e)}}delete(t,e=1){this.doc!==null?ee(this.doc,i=>{Xf(i,this,t,e)}):this._prelimContent.splice(t,e)}toArray(){return zf(this)}push(t){this.insert(this.length,t)}unshift(t){this.insert(0,t)}get(t){return Hf(this,t)}slice(t=0,e=this.length){return Bf(this,t,e)}forEach(t){Vr(this,t)}_write(t){t.writeTypeRef(rE)}}const kS=n=>new Ci;class xr extends Ci{constructor(t="UNDEFINED"){super(),this.nodeName=t,this._prelimAttrs=new Map}get nextSibling(){const t=this._item?this._item.next:null;return t?t.content.type:null}get prevSibling(){const t=this._item?this._item.prev:null;return t?t.content.type:null}_integrate(t,e){super._integrate(t,e),this._prelimAttrs.forEach((i,r)=>{this.setAttribute(r,i)}),this._prelimAttrs=null}_copy(){return new xr(this.nodeName)}clone(){const t=new xr(this.nodeName),e=this.getAttributes();return ky(e,(i,r)=>{t.setAttribute(r,i)}),t.insert(0,this.toArray().map(i=>i instanceof Te?i.clone():i)),t}toString(){const t=this.getAttributes(),e=[],i=[];for(const o in t)i.push(o);i.sort();const r=i.length;for(let o=0;o<r;o++){const c=i[o];e.push(c+'="'+t[c]+'"')}const s=this.nodeName.toLocaleLowerCase(),a=e.length>0?" "+e.join(" "):"";return`<${s}${a}>${super.toString()}</${s}>`}removeAttribute(t){this.doc!==null?ee(this.doc,e=>{eo(e,this,t)}):this._prelimAttrs.delete(t)}setAttribute(t,e){this.doc!==null?ee(this.doc,i=>{Lc(i,this,t,e)}):this._prelimAttrs.set(t,e)}getAttribute(t){return Dc(this,t)}hasAttribute(t){return qf(this,t)}getAttributes(t){return t?CS(this,t):jf(this)}toDOM(t=document,e={},i){const r=t.createElement(this.nodeName),s=this.getAttributes();for(const a in s){const o=s[a];typeof o=="string"&&r.setAttribute(a,o)}return Vr(this,a=>{r.appendChild(a.toDOM(t,e,i))}),i!==void 0&&i._createAssociation(r,this),r}_write(t){t.writeTypeRef(iE),t.writeKey(this.nodeName)}}const BS=n=>new xr(n.readKey());class zS extends Lo{constructor(t,e,i){super(t,i),this.childListChanged=!1,this.attributesChanged=new Set,e.forEach(r=>{r===null?this.childListChanged=!0:this.attributesChanged.add(r)})}}class no extends vr{constructor(t){super(),this.hookName=t}_copy(){return new no(this.hookName)}clone(){const t=new no(this.hookName);return this.forEach((e,i)=>{t.set(i,e)}),t}toDOM(t=document,e={},i){const r=e[this.hookName];let s;return r!==void 0?s=r.createDom(this):s=document.createElement(this.hookName),s.setAttribute("data-yjs-hook",this.hookName),i!==void 0&&i._createAssociation(s,this),s}_write(t){t.writeTypeRef(sE),t.writeKey(this.hookName)}}const GS=n=>new no(n.readKey());class io extends yr{get nextSibling(){const t=this._item?this._item.next:null;return t?t.content.type:null}get prevSibling(){const t=this._item?this._item.prev:null;return t?t.content.type:null}_copy(){return new io}clone(){const t=new io;return t.applyDelta(this.toDelta()),t}toDOM(t=document,e,i){const r=t.createTextNode(this.toString());return i!==void 0&&i._createAssociation(r,this),r}toString(){return this.toDelta().map(t=>{const e=[];for(const r in t.attributes){const s=[];for(const a in t.attributes[r])s.push({key:a,value:t.attributes[r][a]});s.sort((a,o)=>a.key<o.key?-1:1),e.push({nodeName:r,attrs:s})}e.sort((r,s)=>r.nodeName<s.nodeName?-1:1);let i="";for(let r=0;r<e.length;r++){const s=e[r];i+=`<${s.nodeName}`;for(let a=0;a<s.attrs.length;a++){const o=s.attrs[a];i+=` ${o.key}="${o.value}"`}i+=">"}i+=t.insert;for(let r=e.length-1;r>=0;r--)i+=`</${e[r].nodeName}>`;return i}).join("")}toJSON(){return this.toString()}_write(t){t.writeTypeRef(oE)}}const HS=n=>new io;class Pc{constructor(t,e){this.id=t,this.length=e}get deleted(){throw ln()}mergeWith(t){return!1}write(t,e,i){throw ln()}integrate(t,e){throw ln()}}const VS=0;class Ke extends Pc{get deleted(){return!0}delete(){}mergeWith(t){return this.constructor!==t.constructor?!1:(this.length+=t.length,!0)}integrate(t,e){e>0&&(this.id.clock+=e,this.length-=e),If(t.doc.store,this)}write(t,e){t.writeInfo(VS),t.writeLen(this.length-e)}getMissing(t,e){return null}}class es{constructor(t){this.content=t}getLength(){return 1}getContent(){return[this.content]}isCountable(){return!0}copy(){return new es(this.content)}splice(t){throw ln()}mergeWith(t){return!1}integrate(t,e){}delete(t){}gc(t){}write(t,e){t.writeBuf(this.content)}getRef(){return 3}}const WS=n=>new es(n.readBuf());class Wr{constructor(t){this.len=t}getLength(){return this.len}getContent(){return[]}isCountable(){return!1}copy(){return new Wr(this.len)}splice(t){const e=new Wr(this.len-t);return this.len=t,e}mergeWith(t){return this.len+=t.len,!0}integrate(t,e){Js(t.deleteSet,e.id.client,e.id.clock,this.len),e.markDeleted()}delete(t){}gc(t){}write(t,e){t.writeLen(this.len-e)}getRef(){return 1}}const XS=n=>new Wr(n.readLen()),Jf=(n,t)=>new wr({guid:n,...t,shouldLoad:t.shouldLoad||t.autoLoad||!1});class ns{constructor(t){t._item&&console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."),this.doc=t;const e={};this.opts=e,t.gc||(e.gc=!1),t.autoLoad&&(e.autoLoad=!0),t.meta!==null&&(e.meta=t.meta)}getLength(){return 1}getContent(){return[this.doc]}isCountable(){return!0}copy(){return new ns(Jf(this.doc.guid,this.opts))}splice(t){throw ln()}mergeWith(t){return!1}integrate(t,e){this.doc._item=e,t.subdocsAdded.add(this.doc),this.doc.shouldLoad&&t.subdocsLoaded.add(this.doc)}delete(t){t.subdocsAdded.has(this.doc)?t.subdocsAdded.delete(this.doc):t.subdocsRemoved.add(this.doc)}gc(t){}write(t,e){t.writeString(this.doc.guid),t.writeAny(this.opts)}getRef(){return 9}}const jS=n=>new ns(Jf(n.readString(),n.readAny()));class Pi{constructor(t){this.embed=t}getLength(){return 1}getContent(){return[this.embed]}isCountable(){return!0}copy(){return new Pi(this.embed)}splice(t){throw ln()}mergeWith(t){return!1}integrate(t,e){}delete(t){}gc(t){}write(t,e){t.writeJSON(this.embed)}getRef(){return 5}}const qS=n=>new Pi(n.readJSON());class ge{constructor(t,e){this.key=t,this.value=e}getLength(){return 1}getContent(){return[]}isCountable(){return!1}copy(){return new ge(this.key,this.value)}splice(t){throw ln()}mergeWith(t){return!1}integrate(t,e){const i=e.parent;i._searchMarker=null,i._hasFormatting=!0}delete(t){}gc(t){}write(t,e){t.writeKey(this.key),t.writeJSON(this.value)}getRef(){return 6}}const YS=n=>new ge(n.readKey(),n.readJSON());class ro{constructor(t){this.arr=t}getLength(){return this.arr.length}getContent(){return this.arr}isCountable(){return!0}copy(){return new ro(this.arr)}splice(t){const e=new ro(this.arr.slice(t));return this.arr=this.arr.slice(0,t),e}mergeWith(t){return this.arr=this.arr.concat(t.arr),!0}integrate(t,e){}delete(t){}gc(t){}write(t,e){const i=this.arr.length;t.writeLen(i-e);for(let r=e;r<i;r++){const s=this.arr[r];t.writeString(s===void 0?"undefined":JSON.stringify(s))}}getRef(){return 2}}const $S=n=>{const t=n.readLen(),e=[];for(let i=0;i<t;i++){const r=n.readString();r==="undefined"?e.push(void 0):e.push(JSON.parse(r))}return new ro(e)},KS=zr("node_env")==="development";class Ri{constructor(t){this.arr=t,KS&&Vh(t)}getLength(){return this.arr.length}getContent(){return this.arr}isCountable(){return!0}copy(){return new Ri(this.arr)}splice(t){const e=new Ri(this.arr.slice(t));return this.arr=this.arr.slice(0,t),e}mergeWith(t){return this.arr=this.arr.concat(t.arr),!0}integrate(t,e){}delete(t){}gc(t){}write(t,e){const i=this.arr.length;t.writeLen(i-e);for(let r=e;r<i;r++){const s=this.arr[r];t.writeAny(s)}}getRef(){return 8}}const ZS=n=>{const t=n.readLen(),e=[];for(let i=0;i<t;i++)e.push(n.readAny());return new Ri(e)};class vn{constructor(t){this.str=t}getLength(){return this.str.length}getContent(){return this.str.split("")}isCountable(){return!0}copy(){return new vn(this.str)}splice(t){const e=new vn(this.str.slice(t));this.str=this.str.slice(0,t);const i=this.str.charCodeAt(t-1);return i>=55296&&i<=56319&&(this.str=this.str.slice(0,t-1)+"�",e.str="�"+e.str.slice(1)),e}mergeWith(t){return this.str+=t.str,!0}integrate(t,e){}delete(t){}gc(t){}write(t,e){t.writeString(e===0?this.str:this.str.slice(e))}getRef(){return 4}}const JS=n=>new vn(n.readString()),QS=[LS,PS,FS,BS,kS,GS,HS],tE=0,eE=1,nE=2,iE=3,rE=4,sE=5,oE=6;class Bn{constructor(t){this.type=t}getLength(){return 1}getContent(){return[this.type]}isCountable(){return!0}copy(){return new Bn(this.type._copy())}splice(t){throw ln()}mergeWith(t){return!1}integrate(t,e){this.type._integrate(t.doc,e)}delete(t){let e=this.type._start;for(;e!==null;)e.deleted?e.id.clock<(t.beforeState.get(e.id.client)||0)&&t._mergeStructs.push(e):e.delete(t),e=e.right;this.type._map.forEach(i=>{i.deleted?i.id.clock<(t.beforeState.get(i.id.client)||0)&&t._mergeStructs.push(i):i.delete(t)}),t.changed.delete(this.type)}gc(t){let e=this.type._start;for(;e!==null;)e.gc(t,!0),e=e.right;this.type._start=null,this.type._map.forEach(i=>{for(;i!==null;)i.gc(t,!0),i=i.left}),this.type._map=new Map}write(t,e){this.type._write(t)}getRef(){return 7}}const aE=n=>new Bn(QS[n.readTypeRef()](n)),so=(n,t,e)=>{const{client:i,clock:r}=t.id,s=new de(qt(i,r+e),t,qt(i,r+e-1),t.right,t.rightOrigin,t.parent,t.parentSub,t.content.splice(e));return t.deleted&&s.markDeleted(),t.keep&&(s.keep=!0),t.redone!==null&&(s.redone=qt(t.redone.client,t.redone.clock+e)),t.right=s,s.right!==null&&(s.right.left=s),n._mergeStructs.push(s),s.parentSub!==null&&s.right===null&&s.parent._map.set(s.parentSub,s),t.length=e,s};class de extends Pc{constructor(t,e,i,r,s,a,o,c){super(t,c.getLength()),this.origin=i,this.left=e,this.right=r,this.rightOrigin=s,this.parent=a,this.parentSub=o,this.redone=null,this.content=c,this.info=this.content.isCountable()?bu:0}set marker(t){(this.info&xa)>0!==t&&(this.info^=xa)}get marker(){return(this.info&xa)>0}get keep(){return(this.info&Eu)>0}set keep(t){this.keep!==t&&(this.info^=Eu)}get countable(){return(this.info&bu)>0}get deleted(){return(this.info&ya)>0}set deleted(t){this.deleted!==t&&(this.info^=ya)}markDeleted(){this.info|=ya}getMissing(t,e){if(this.origin&&this.origin.client!==this.id.client&&this.origin.clock>=be(e,this.origin.client))return this.origin.client;if(this.rightOrigin&&this.rightOrigin.client!==this.id.client&&this.rightOrigin.clock>=be(e,this.rightOrigin.client))return this.rightOrigin.client;if(this.parent&&this.parent.constructor===sr&&this.id.client!==this.parent.client&&this.parent.clock>=be(e,this.parent.client))return this.parent.client;if(this.origin&&(this.left=Gu(t,e,this.origin),this.origin=this.left.lastId),this.rightOrigin&&(this.right=ri(t,this.rightOrigin),this.rightOrigin=this.right.id),this.left&&this.left.constructor===Ke||this.right&&this.right.constructor===Ke)this.parent=null;else if(!this.parent)this.left&&this.left.constructor===de?(this.parent=this.left.parent,this.parentSub=this.left.parentSub):this.right&&this.right.constructor===de&&(this.parent=this.right.parent,this.parentSub=this.right.parentSub);else if(this.parent.constructor===sr){const i=Aa(e,this.parent);i.constructor===Ke?this.parent=null:this.parent=i.content.type}return null}integrate(t,e){if(e>0&&(this.id.clock+=e,this.left=Gu(t,t.doc.store,qt(this.id.client,this.id.clock-1)),this.origin=this.left.lastId,this.content=this.content.splice(e),this.length-=e),this.parent){if(!this.left&&(!this.right||this.right.left!==null)||this.left&&this.left.right!==this.right){let i=this.left,r;if(i!==null)r=i.right;else if(this.parentSub!==null)for(r=this.parent._map.get(this.parentSub)||null;r!==null&&r.left!==null;)r=r.left;else r=this.parent._start;const s=new Set,a=new Set;for(;r!==null&&r!==this.right;){if(a.add(r),s.add(r),Ds(this.origin,r.origin)){if(r.id.client<this.id.client)i=r,s.clear();else if(Ds(this.rightOrigin,r.rightOrigin))break}else if(r.origin!==null&&a.has(Aa(t.doc.store,r.origin)))s.has(Aa(t.doc.store,r.origin))||(i=r,s.clear());else break;r=r.right}this.left=i}if(this.left!==null){const i=this.left.right;this.right=i,this.left.right=this}else{let i;if(this.parentSub!==null)for(i=this.parent._map.get(this.parentSub)||null;i!==null&&i.left!==null;)i=i.left;else i=this.parent._start,this.parent._start=this;this.right=i}this.right!==null?this.right.left=this:this.parentSub!==null&&(this.parent._map.set(this.parentSub,this),this.left!==null&&this.left.delete(t)),this.parentSub===null&&this.countable&&!this.deleted&&(this.parent._length+=this.length),If(t.doc.store,this),this.content.integrate(t,this),Vu(t,this.parent,this.parentSub),(this.parent._item!==null&&this.parent._item.deleted||this.parentSub!==null&&this.right!==null)&&this.delete(t)}else new Ke(this.id,this.length).integrate(t,0)}get next(){let t=this.right;for(;t!==null&&t.deleted;)t=t.right;return t}get prev(){let t=this.left;for(;t!==null&&t.deleted;)t=t.left;return t}get lastId(){return this.length===1?this.id:qt(this.id.client,this.id.clock+this.length-1)}mergeWith(t){if(this.constructor===t.constructor&&Ds(t.origin,this.lastId)&&this.right===t&&Ds(this.rightOrigin,t.rightOrigin)&&this.id.client===t.id.client&&this.id.clock+this.length===t.id.clock&&this.deleted===t.deleted&&this.redone===null&&t.redone===null&&this.content.constructor===t.content.constructor&&this.content.mergeWith(t.content)){const e=this.parent._searchMarker;return e&&e.forEach(i=>{i.p===t&&(i.p=this,!this.deleted&&this.countable&&(i.index-=this.length))}),t.keep&&(this.keep=!0),this.right=t.right,this.right!==null&&(this.right.left=this),this.length+=t.length,!0}return!1}delete(t){if(!this.deleted){const e=this.parent;this.countable&&this.parentSub===null&&(e._length-=this.length),this.markDeleted(),Js(t.deleteSet,this.id.client,this.id.clock,this.length),Vu(t,e,this.parentSub),this.content.delete(t)}}gc(t,e){if(!this.deleted)throw en();this.content.gc(t),e?fS(t,this,new Ke(this.id,this.length)):this.content=new Wr(this.length)}write(t,e){const i=e>0?qt(this.id.client,this.id.clock+e-1):this.origin,r=this.rightOrigin,s=this.parentSub,a=this.content.getRef()&_o|(i===null?0:Xe)|(r===null?0:Pn)|(s===null?0:Or);if(t.writeInfo(a),i!==null&&t.writeLeftID(i),r!==null&&t.writeRightID(r),i===null&&r===null){const o=this.parent;if(o._item!==void 0){const c=o._item;if(c===null){const h=uS(o);t.writeParentInfo(!0),t.writeString(h)}else t.writeParentInfo(!1),t.writeLeftID(c.id)}else o.constructor===String?(t.writeParentInfo(!0),t.writeString(o)):o.constructor===sr?(t.writeParentInfo(!1),t.writeLeftID(o)):en();s!==null&&t.writeString(s)}this.content.write(t,e)}}const Qf=(n,t)=>cE[t&_o](n),cE=[()=>{en()},XS,$S,WS,JS,qS,YS,aE,ZS,jS,()=>{en()}],lE=10;class Ze extends Pc{get deleted(){return!0}delete(){}mergeWith(t){return this.constructor!==t.constructor?!1:(this.length+=t.length,!0)}integrate(t,e){en()}write(t,e){t.writeInfo(lE),Pt(t.restEncoder,this.length-e)}getMissing(t,e){return null}}const td=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{},ed="__ $YJS$ __";td[ed]===!0&&console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");td[ed]=!0;const uE=1200,hE=2500,oo=3e4,Ja=n=>{if(n.shouldConnect&&n.ws===null){const t=new WebSocket(n.url),e=n.binaryType;let i=null;e&&(t.binaryType=e),n.ws=t,n.connecting=!0,n.connected=!1,t.onmessage=a=>{n.lastMessageReceived=On();const o=a.data,c=typeof o=="string"?JSON.parse(o):o;c&&c.type==="pong"&&(clearTimeout(i),i=setTimeout(s,oo/2)),n.emit("message",[c,n])};const r=a=>{n.ws!==null&&(n.ws=null,n.connecting=!1,n.connected?(n.connected=!1,n.emit("disconnect",[{type:"disconnect",error:a},n])):n.unsuccessfulReconnects++,setTimeout(Ja,lc(Qv(n.unsuccessfulReconnects+1)*uE,hE),n)),clearTimeout(i)},s=()=>{n.ws===t&&n.send({type:"ping"})};t.onclose=()=>r(null),t.onerror=a=>r(a),t.onopen=()=>{n.lastMessageReceived=On(),n.connecting=!1,n.connected=!0,n.unsuccessfulReconnects=0,n.emit("connect",[{type:"connect"},n]),i=setTimeout(s,oo/2)}}};class fE extends Ih{constructor(t,{binaryType:e}={}){super(),this.url=t,this.ws=null,this.binaryType=e||null,this.connected=!1,this.connecting=!1,this.unsuccessfulReconnects=0,this.lastMessageReceived=0,this.shouldConnect=!0,this._checkInterval=setInterval(()=>{this.connected&&oo<On()-this.lastMessageReceived&&this.ws.close()},oo/2),Ja(this)}send(t){this.ws&&this.ws.send(JSON.stringify(t))}destroy(){clearInterval(this._checkInterval),this.disconnect(),super.destroy()}disconnect(){this.shouldConnect=!1,this.ws!==null&&this.ws.close()}connect(){this.shouldConnect=!0,!this.connected&&this.ws===null&&Ja(this)}}const nd=new Map;class dE{constructor(t){this.room=t,this.onmessage=null,this._onChange=e=>e.key===t&&this.onmessage!==null&&this.onmessage({data:$h(e.newValue||"")}),Iy(this._onChange)}postMessage(t){Gh.setItem(this.room,Yh(Ky(t)))}close(){Uy(this._onChange)}}const pE=typeof BroadcastChannel>"u"?dE:BroadcastChannel,Ic=n=>je(nd,n,()=>{const t=ii(),e=new pE(n);return e.onmessage=i=>t.forEach(r=>r(i.data,"broadcastchannel")),{bc:e,subs:t}}),mE=(n,t)=>(Ic(n).subs.add(t),t),gE=(n,t)=>{const e=Ic(n),i=e.subs.delete(t);return i&&e.subs.size===0&&(e.bc.close(),nd.delete(n)),i},_E=(n,t,e=null)=>{const i=Ic(n);i.bc.postMessage(t),i.subs.forEach(r=>r(t,e))},vE=()=>{let n=!0;return(t,e)=>{if(n){n=!1;try{t()}finally{n=!0}}else e!==void 0&&e()}};var hn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function Us(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var id={exports:{}};(function(n,t){(function(e){n.exports=e()})(function(){var e=Math.floor,i=Math.abs,r=Math.pow;return function(){function s(a,o,c){function h(f,g){if(!o[f]){if(!a[f]){var v=typeof Us=="function"&&Us;if(!g&&v)return v(f,!0);if(d)return d(f,!0);var E=new Error("Cannot find module '"+f+"'");throw E.code="MODULE_NOT_FOUND",E}var y=o[f]={exports:{}};a[f][0].call(y.exports,function(_){var C=a[f][1][_];return h(C||_)},y,y.exports,s,a,o,c)}return o[f].exports}for(var d=typeof Us=="function"&&Us,l=0;l<c.length;l++)h(c[l]);return h}return s}()({1:[function(s,a,o){function c(b){var T=b.length;if(0<T%4)throw new Error("Invalid string. Length must be a multiple of 4");var A=b.indexOf("=");A===-1&&(A=T);var M=A===T?0:4-A%4;return[A,M]}function h(b,T,A){return 3*(T+A)/4-A}function d(b){var T,A,M=c(b),P=M[0],k=M[1],S=new y(h(b,P,k)),w=0,z=0<k?P-4:P;for(A=0;A<z;A+=4)T=E[b.charCodeAt(A)]<<18|E[b.charCodeAt(A+1)]<<12|E[b.charCodeAt(A+2)]<<6|E[b.charCodeAt(A+3)],S[w++]=255&T>>16,S[w++]=255&T>>8,S[w++]=255&T;return k===2&&(T=E[b.charCodeAt(A)]<<2|E[b.charCodeAt(A+1)]>>4,S[w++]=255&T),k===1&&(T=E[b.charCodeAt(A)]<<10|E[b.charCodeAt(A+1)]<<4|E[b.charCodeAt(A+2)]>>2,S[w++]=255&T>>8,S[w++]=255&T),S}function l(b){return v[63&b>>18]+v[63&b>>12]+v[63&b>>6]+v[63&b]}function f(b,T,A){for(var M,P=[],k=T;k<A;k+=3)M=(16711680&b[k]<<16)+(65280&b[k+1]<<8)+(255&b[k+2]),P.push(l(M));return P.join("")}function g(b){for(var T,A=b.length,M=A%3,P=[],k=16383,S=0,w=A-M;S<w;S+=k)P.push(f(b,S,S+k>w?w:S+k));return M===1?(T=b[A-1],P.push(v[T>>2]+v[63&T<<4]+"==")):M===2&&(T=(b[A-2]<<8)+b[A-1],P.push(v[T>>10]+v[63&T>>4]+v[63&T<<2]+"=")),P.join("")}o.byteLength=function(b){var T=c(b),A=T[0],M=T[1];return 3*(A+M)/4-M},o.toByteArray=d,o.fromByteArray=g;for(var v=[],E=[],y=typeof Uint8Array>"u"?Array:Uint8Array,_="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",C=0,x=_.length;C<x;++C)v[C]=_[C],E[_.charCodeAt(C)]=C;E[45]=62,E[95]=63},{}],2:[function(){},{}],3:[function(s,a,o){(function(){(function(){var c=String.fromCharCode,h=Math.min;function d(u){if(2147483647<u)throw new RangeError('The value "'+u+'" is invalid for option "size"');var p=new Uint8Array(u);return p.__proto__=l.prototype,p}function l(u,p,m){if(typeof u=="number"){if(typeof p=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return E(u)}return f(u,p,m)}function f(u,p,m){if(typeof u=="string")return y(u,p);if(ArrayBuffer.isView(u))return _(u);if(u==null)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof u);if(B(u,ArrayBuffer)||u&&B(u.buffer,ArrayBuffer))return C(u,p,m);if(typeof u=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var R=u.valueOf&&u.valueOf();if(R!=null&&R!==u)return l.from(R,p,m);var I=x(u);if(I)return I;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof u[Symbol.toPrimitive]=="function")return l.from(u[Symbol.toPrimitive]("string"),p,m);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof u)}function g(u){if(typeof u!="number")throw new TypeError('"size" argument must be of type number');if(0>u)throw new RangeError('The value "'+u+'" is invalid for option "size"')}function v(u,p,m){return g(u),0>=u||p===void 0?d(u):typeof m=="string"?d(u).fill(p,m):d(u).fill(p)}function E(u){return g(u),d(0>u?0:0|b(u))}function y(u,p){if((typeof p!="string"||p==="")&&(p="utf8"),!l.isEncoding(p))throw new TypeError("Unknown encoding: "+p);var m=0|T(u,p),R=d(m),I=R.write(u,p);return I!==m&&(R=R.slice(0,I)),R}function _(u){for(var p=0>u.length?0:0|b(u.length),m=d(p),R=0;R<p;R+=1)m[R]=255&u[R];return m}function C(u,p,m){if(0>p||u.byteLength<p)throw new RangeError('"offset" is outside of buffer bounds');if(u.byteLength<p+(m||0))throw new RangeError('"length" is outside of buffer bounds');var R;return R=p===void 0&&m===void 0?new Uint8Array(u):m===void 0?new Uint8Array(u,p):new Uint8Array(u,p,m),R.__proto__=l.prototype,R}function x(u){if(l.isBuffer(u)){var p=0|b(u.length),m=d(p);return m.length===0||u.copy(m,0,0,p),m}return u.length===void 0?u.type==="Buffer"&&Array.isArray(u.data)?_(u.data):void 0:typeof u.length!="number"||G(u.length)?d(0):_(u)}function b(u){if(u>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|u}function T(u,p){if(l.isBuffer(u))return u.length;if(ArrayBuffer.isView(u)||B(u,ArrayBuffer))return u.byteLength;if(typeof u!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof u);var m=u.length,R=2<arguments.length&&arguments[2]===!0;if(!R&&m===0)return 0;for(var I=!1;;)switch(p){case"ascii":case"latin1":case"binary":return m;case"utf8":case"utf-8":return Gt(u).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*m;case"hex":return m>>>1;case"base64":return Kt(u).length;default:if(I)return R?-1:Gt(u).length;p=(""+p).toLowerCase(),I=!0}}function A(u,p,m){var R=!1;if((p===void 0||0>p)&&(p=0),p>this.length||((m===void 0||m>this.length)&&(m=this.length),0>=m)||(m>>>=0,p>>>=0,m<=p))return"";for(u||(u="utf8");;)switch(u){case"hex":return ht(this,p,m);case"utf8":case"utf-8":return it(this,p,m);case"ascii":return $(this,p,m);case"latin1":case"binary":return at(this,p,m);case"base64":return j(this,p,m);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return vt(this,p,m);default:if(R)throw new TypeError("Unknown encoding: "+u);u=(u+"").toLowerCase(),R=!0}}function M(u,p,m){var R=u[p];u[p]=u[m],u[m]=R}function P(u,p,m,R,I){if(u.length===0)return-1;if(typeof m=="string"?(R=m,m=0):2147483647<m?m=2147483647:-2147483648>m&&(m=-2147483648),m=+m,G(m)&&(m=I?0:u.length-1),0>m&&(m=u.length+m),m>=u.length){if(I)return-1;m=u.length-1}else if(0>m)if(I)m=0;else return-1;if(typeof p=="string"&&(p=l.from(p,R)),l.isBuffer(p))return p.length===0?-1:k(u,p,m,R,I);if(typeof p=="number")return p&=255,typeof Uint8Array.prototype.indexOf=="function"?I?Uint8Array.prototype.indexOf.call(u,p,m):Uint8Array.prototype.lastIndexOf.call(u,p,m):k(u,[p],m,R,I);throw new TypeError("val must be string, number or Buffer")}function k(u,p,m,R,I){function O(Zt,Nt){return Y===1?Zt[Nt]:Zt.readUInt16BE(Nt*Y)}var Y=1,pt=u.length,_t=p.length;if(R!==void 0&&(R=(R+"").toLowerCase(),R==="ucs2"||R==="ucs-2"||R==="utf16le"||R==="utf-16le")){if(2>u.length||2>p.length)return-1;Y=2,pt/=2,_t/=2,m/=2}var rt;if(I){var st=-1;for(rt=m;rt<pt;rt++)if(O(u,rt)!==O(p,st===-1?0:rt-st))st!==-1&&(rt-=rt-st),st=-1;else if(st===-1&&(st=rt),rt-st+1===_t)return st*Y}else for(m+_t>pt&&(m=pt-_t),rt=m;0<=rt;rt--){for(var wt=!0,ft=0;ft<_t;ft++)if(O(u,rt+ft)!==O(p,ft)){wt=!1;break}if(wt)return rt}return-1}function S(u,p,m,R){m=+m||0;var I=u.length-m;R?(R=+R,R>I&&(R=I)):R=I;var O=p.length;R>O/2&&(R=O/2);for(var Y,pt=0;pt<R;++pt){if(Y=parseInt(p.substr(2*pt,2),16),G(Y))return pt;u[m+pt]=Y}return pt}function w(u,p,m,R){return Mt(Gt(p,u.length-m),u,m,R)}function z(u,p,m,R){return Mt(It(p),u,m,R)}function H(u,p,m,R){return z(u,p,m,R)}function N(u,p,m,R){return Mt(Kt(p),u,m,R)}function K(u,p,m,R){return Mt(V(p,u.length-m),u,m,R)}function j(u,p,m){return p===0&&m===u.length?nt.fromByteArray(u):nt.fromByteArray(u.slice(p,m))}function it(u,p,m){m=h(u.length,m);for(var R=[],I=p;I<m;){var O=u[I],Y=null,pt=239<O?4:223<O?3:191<O?2:1;if(I+pt<=m){var _t,rt,st,wt;pt===1?128>O&&(Y=O):pt===2?(_t=u[I+1],(192&_t)==128&&(wt=(31&O)<<6|63&_t,127<wt&&(Y=wt))):pt===3?(_t=u[I+1],rt=u[I+2],(192&_t)==128&&(192&rt)==128&&(wt=(15&O)<<12|(63&_t)<<6|63&rt,2047<wt&&(55296>wt||57343<wt)&&(Y=wt))):pt===4&&(_t=u[I+1],rt=u[I+2],st=u[I+3],(192&_t)==128&&(192&rt)==128&&(192&st)==128&&(wt=(15&O)<<18|(63&_t)<<12|(63&rt)<<6|63&st,65535<wt&&1114112>wt&&(Y=wt)))}Y===null?(Y=65533,pt=1):65535<Y&&(Y-=65536,R.push(55296|1023&Y>>>10),Y=56320|1023&Y),R.push(Y),I+=pt}return tt(R)}function tt(u){var p=u.length;if(p<=4096)return c.apply(String,u);for(var m="",R=0;R<p;)m+=c.apply(String,u.slice(R,R+=4096));return m}function $(u,p,m){var R="";m=h(u.length,m);for(var I=p;I<m;++I)R+=c(127&u[I]);return R}function at(u,p,m){var R="";m=h(u.length,m);for(var I=p;I<m;++I)R+=c(u[I]);return R}function ht(u,p,m){var R=u.length;(!p||0>p)&&(p=0),(!m||0>m||m>R)&&(m=R);for(var I="",O=p;O<m;++O)I+=xt(u[O]);return I}function vt(u,p,m){for(var R=u.slice(p,m),I="",O=0;O<R.length;O+=2)I+=c(R[O]+256*R[O+1]);return I}function bt(u,p,m){if(u%1!=0||0>u)throw new RangeError("offset is not uint");if(u+p>m)throw new RangeError("Trying to access beyond buffer length")}function q(u,p,m,R,I,O){if(!l.isBuffer(u))throw new TypeError('"buffer" argument must be a Buffer instance');if(p>I||p<O)throw new RangeError('"value" argument is out of bounds');if(m+R>u.length)throw new RangeError("Index out of range")}function ct(u,p,m,R){if(m+R>u.length)throw new RangeError("Index out of range");if(0>m)throw new RangeError("Index out of range")}function gt(u,p,m,R,I){return p=+p,m>>>=0,I||ct(u,p,m,4),lt.write(u,p,m,R,23,4),m+4}function Dt(u,p,m,R,I){return p=+p,m>>>=0,I||ct(u,p,m,8),lt.write(u,p,m,R,52,8),m+8}function Ct(u){if(u=u.split("=")[0],u=u.trim().replace(L,""),2>u.length)return"";for(;u.length%4!=0;)u+="=";return u}function xt(u){return 16>u?"0"+u.toString(16):u.toString(16)}function Gt(u,p){p=p||1/0;for(var m,R=u.length,I=null,O=[],Y=0;Y<R;++Y){if(m=u.charCodeAt(Y),55295<m&&57344>m){if(!I){if(56319<m){-1<(p-=3)&&O.push(239,191,189);continue}else if(Y+1===R){-1<(p-=3)&&O.push(239,191,189);continue}I=m;continue}if(56320>m){-1<(p-=3)&&O.push(239,191,189),I=m;continue}m=(I-55296<<10|m-56320)+65536}else I&&-1<(p-=3)&&O.push(239,191,189);if(I=null,128>m){if(0>(p-=1))break;O.push(m)}else if(2048>m){if(0>(p-=2))break;O.push(192|m>>6,128|63&m)}else if(65536>m){if(0>(p-=3))break;O.push(224|m>>12,128|63&m>>6,128|63&m)}else if(1114112>m){if(0>(p-=4))break;O.push(240|m>>18,128|63&m>>12,128|63&m>>6,128|63&m)}else throw new Error("Invalid code point")}return O}function It(u){for(var p=[],m=0;m<u.length;++m)p.push(255&u.charCodeAt(m));return p}function V(u,p){for(var m,R,I,O=[],Y=0;Y<u.length&&!(0>(p-=2));++Y)m=u.charCodeAt(Y),R=m>>8,I=m%256,O.push(I),O.push(R);return O}function Kt(u){return nt.toByteArray(Ct(u))}function Mt(u,p,m,R){for(var I=0;I<R&&!(I+m>=p.length||I>=u.length);++I)p[I+m]=u[I];return I}function B(u,p){return u instanceof p||u!=null&&u.constructor!=null&&u.constructor.name!=null&&u.constructor.name===p.name}function G(u){return u!==u}var nt=s("base64-js"),lt=s("ieee754");o.Buffer=l,o.SlowBuffer=function(u){return+u!=u&&(u=0),l.alloc(+u)},o.INSPECT_MAX_BYTES=50,o.kMaxLength=2147483647,l.TYPED_ARRAY_SUPPORT=function(){try{var u=new Uint8Array(1);return u.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},u.foo()===42}catch{return!1}}(),l.TYPED_ARRAY_SUPPORT||typeof console>"u"||typeof console.error!="function"||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){return l.isBuffer(this)?this.buffer:void 0}}),Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){return l.isBuffer(this)?this.byteOffset:void 0}}),typeof Symbol<"u"&&Symbol.species!=null&&l[Symbol.species]===l&&Object.defineProperty(l,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1}),l.poolSize=8192,l.from=function(u,p,m){return f(u,p,m)},l.prototype.__proto__=Uint8Array.prototype,l.__proto__=Uint8Array,l.alloc=function(u,p,m){return v(u,p,m)},l.allocUnsafe=function(u){return E(u)},l.allocUnsafeSlow=function(u){return E(u)},l.isBuffer=function(u){return u!=null&&u._isBuffer===!0&&u!==l.prototype},l.compare=function(u,p){if(B(u,Uint8Array)&&(u=l.from(u,u.offset,u.byteLength)),B(p,Uint8Array)&&(p=l.from(p,p.offset,p.byteLength)),!l.isBuffer(u)||!l.isBuffer(p))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(u===p)return 0;for(var m=u.length,R=p.length,I=0,O=h(m,R);I<O;++I)if(u[I]!==p[I]){m=u[I],R=p[I];break}return m<R?-1:R<m?1:0},l.isEncoding=function(u){switch((u+"").toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(u,p){if(!Array.isArray(u))throw new TypeError('"list" argument must be an Array of Buffers');if(u.length===0)return l.alloc(0);var m;if(p===void 0)for(p=0,m=0;m<u.length;++m)p+=u[m].length;var R=l.allocUnsafe(p),I=0;for(m=0;m<u.length;++m){var O=u[m];if(B(O,Uint8Array)&&(O=l.from(O)),!l.isBuffer(O))throw new TypeError('"list" argument must be an Array of Buffers');O.copy(R,I),I+=O.length}return R},l.byteLength=T,l.prototype._isBuffer=!0,l.prototype.swap16=function(){var u=this.length;if(u%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var p=0;p<u;p+=2)M(this,p,p+1);return this},l.prototype.swap32=function(){var u=this.length;if(u%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var p=0;p<u;p+=4)M(this,p,p+3),M(this,p+1,p+2);return this},l.prototype.swap64=function(){var u=this.length;if(u%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var p=0;p<u;p+=8)M(this,p,p+7),M(this,p+1,p+6),M(this,p+2,p+5),M(this,p+3,p+4);return this},l.prototype.toString=function(){var u=this.length;return u===0?"":arguments.length===0?it(this,0,u):A.apply(this,arguments)},l.prototype.toLocaleString=l.prototype.toString,l.prototype.equals=function(u){if(!l.isBuffer(u))throw new TypeError("Argument must be a Buffer");return this===u||l.compare(this,u)===0},l.prototype.inspect=function(){var u="",p=o.INSPECT_MAX_BYTES;return u=this.toString("hex",0,p).replace(/(.{2})/g,"$1 ").trim(),this.length>p&&(u+=" ... "),"<Buffer "+u+">"},l.prototype.compare=function(u,p,m,R,I){if(B(u,Uint8Array)&&(u=l.from(u,u.offset,u.byteLength)),!l.isBuffer(u))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof u);if(p===void 0&&(p=0),m===void 0&&(m=u?u.length:0),R===void 0&&(R=0),I===void 0&&(I=this.length),0>p||m>u.length||0>R||I>this.length)throw new RangeError("out of range index");if(R>=I&&p>=m)return 0;if(R>=I)return-1;if(p>=m)return 1;if(p>>>=0,m>>>=0,R>>>=0,I>>>=0,this===u)return 0;for(var O=I-R,Y=m-p,pt=h(O,Y),_t=this.slice(R,I),rt=u.slice(p,m),st=0;st<pt;++st)if(_t[st]!==rt[st]){O=_t[st],Y=rt[st];break}return O<Y?-1:Y<O?1:0},l.prototype.includes=function(u,p,m){return this.indexOf(u,p,m)!==-1},l.prototype.indexOf=function(u,p,m){return P(this,u,p,m,!0)},l.prototype.lastIndexOf=function(u,p,m){return P(this,u,p,m,!1)},l.prototype.write=function(u,p,m,R){if(p===void 0)R="utf8",m=this.length,p=0;else if(m===void 0&&typeof p=="string")R=p,m=this.length,p=0;else if(isFinite(p))p>>>=0,isFinite(m)?(m>>>=0,R===void 0&&(R="utf8")):(R=m,m=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var I=this.length-p;if((m===void 0||m>I)&&(m=I),0<u.length&&(0>m||0>p)||p>this.length)throw new RangeError("Attempt to write outside buffer bounds");R||(R="utf8");for(var O=!1;;)switch(R){case"hex":return S(this,u,p,m);case"utf8":case"utf-8":return w(this,u,p,m);case"ascii":return z(this,u,p,m);case"latin1":case"binary":return H(this,u,p,m);case"base64":return N(this,u,p,m);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return K(this,u,p,m);default:if(O)throw new TypeError("Unknown encoding: "+R);R=(""+R).toLowerCase(),O=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},l.prototype.slice=function(u,p){var m=this.length;u=~~u,p=p===void 0?m:~~p,0>u?(u+=m,0>u&&(u=0)):u>m&&(u=m),0>p?(p+=m,0>p&&(p=0)):p>m&&(p=m),p<u&&(p=u);var R=this.subarray(u,p);return R.__proto__=l.prototype,R},l.prototype.readUIntLE=function(u,p,m){u>>>=0,p>>>=0,m||bt(u,p,this.length);for(var R=this[u],I=1,O=0;++O<p&&(I*=256);)R+=this[u+O]*I;return R},l.prototype.readUIntBE=function(u,p,m){u>>>=0,p>>>=0,m||bt(u,p,this.length);for(var R=this[u+--p],I=1;0<p&&(I*=256);)R+=this[u+--p]*I;return R},l.prototype.readUInt8=function(u,p){return u>>>=0,p||bt(u,1,this.length),this[u]},l.prototype.readUInt16LE=function(u,p){return u>>>=0,p||bt(u,2,this.length),this[u]|this[u+1]<<8},l.prototype.readUInt16BE=function(u,p){return u>>>=0,p||bt(u,2,this.length),this[u]<<8|this[u+1]},l.prototype.readUInt32LE=function(u,p){return u>>>=0,p||bt(u,4,this.length),(this[u]|this[u+1]<<8|this[u+2]<<16)+16777216*this[u+3]},l.prototype.readUInt32BE=function(u,p){return u>>>=0,p||bt(u,4,this.length),16777216*this[u]+(this[u+1]<<16|this[u+2]<<8|this[u+3])},l.prototype.readIntLE=function(u,p,m){u>>>=0,p>>>=0,m||bt(u,p,this.length);for(var R=this[u],I=1,O=0;++O<p&&(I*=256);)R+=this[u+O]*I;return I*=128,R>=I&&(R-=r(2,8*p)),R},l.prototype.readIntBE=function(u,p,m){u>>>=0,p>>>=0,m||bt(u,p,this.length);for(var R=p,I=1,O=this[u+--R];0<R&&(I*=256);)O+=this[u+--R]*I;return I*=128,O>=I&&(O-=r(2,8*p)),O},l.prototype.readInt8=function(u,p){return u>>>=0,p||bt(u,1,this.length),128&this[u]?-1*(255-this[u]+1):this[u]},l.prototype.readInt16LE=function(u,p){u>>>=0,p||bt(u,2,this.length);var m=this[u]|this[u+1]<<8;return 32768&m?4294901760|m:m},l.prototype.readInt16BE=function(u,p){u>>>=0,p||bt(u,2,this.length);var m=this[u+1]|this[u]<<8;return 32768&m?4294901760|m:m},l.prototype.readInt32LE=function(u,p){return u>>>=0,p||bt(u,4,this.length),this[u]|this[u+1]<<8|this[u+2]<<16|this[u+3]<<24},l.prototype.readInt32BE=function(u,p){return u>>>=0,p||bt(u,4,this.length),this[u]<<24|this[u+1]<<16|this[u+2]<<8|this[u+3]},l.prototype.readFloatLE=function(u,p){return u>>>=0,p||bt(u,4,this.length),lt.read(this,u,!0,23,4)},l.prototype.readFloatBE=function(u,p){return u>>>=0,p||bt(u,4,this.length),lt.read(this,u,!1,23,4)},l.prototype.readDoubleLE=function(u,p){return u>>>=0,p||bt(u,8,this.length),lt.read(this,u,!0,52,8)},l.prototype.readDoubleBE=function(u,p){return u>>>=0,p||bt(u,8,this.length),lt.read(this,u,!1,52,8)},l.prototype.writeUIntLE=function(u,p,m,R){if(u=+u,p>>>=0,m>>>=0,!R){var I=r(2,8*m)-1;q(this,u,p,m,I,0)}var O=1,Y=0;for(this[p]=255&u;++Y<m&&(O*=256);)this[p+Y]=255&u/O;return p+m},l.prototype.writeUIntBE=function(u,p,m,R){if(u=+u,p>>>=0,m>>>=0,!R){var I=r(2,8*m)-1;q(this,u,p,m,I,0)}var O=m-1,Y=1;for(this[p+O]=255&u;0<=--O&&(Y*=256);)this[p+O]=255&u/Y;return p+m},l.prototype.writeUInt8=function(u,p,m){return u=+u,p>>>=0,m||q(this,u,p,1,255,0),this[p]=255&u,p+1},l.prototype.writeUInt16LE=function(u,p,m){return u=+u,p>>>=0,m||q(this,u,p,2,65535,0),this[p]=255&u,this[p+1]=u>>>8,p+2},l.prototype.writeUInt16BE=function(u,p,m){return u=+u,p>>>=0,m||q(this,u,p,2,65535,0),this[p]=u>>>8,this[p+1]=255&u,p+2},l.prototype.writeUInt32LE=function(u,p,m){return u=+u,p>>>=0,m||q(this,u,p,4,4294967295,0),this[p+3]=u>>>24,this[p+2]=u>>>16,this[p+1]=u>>>8,this[p]=255&u,p+4},l.prototype.writeUInt32BE=function(u,p,m){return u=+u,p>>>=0,m||q(this,u,p,4,4294967295,0),this[p]=u>>>24,this[p+1]=u>>>16,this[p+2]=u>>>8,this[p+3]=255&u,p+4},l.prototype.writeIntLE=function(u,p,m,R){if(u=+u,p>>>=0,!R){var I=r(2,8*m-1);q(this,u,p,m,I-1,-I)}var O=0,Y=1,pt=0;for(this[p]=255&u;++O<m&&(Y*=256);)0>u&&pt===0&&this[p+O-1]!==0&&(pt=1),this[p+O]=255&(u/Y>>0)-pt;return p+m},l.prototype.writeIntBE=function(u,p,m,R){if(u=+u,p>>>=0,!R){var I=r(2,8*m-1);q(this,u,p,m,I-1,-I)}var O=m-1,Y=1,pt=0;for(this[p+O]=255&u;0<=--O&&(Y*=256);)0>u&&pt===0&&this[p+O+1]!==0&&(pt=1),this[p+O]=255&(u/Y>>0)-pt;return p+m},l.prototype.writeInt8=function(u,p,m){return u=+u,p>>>=0,m||q(this,u,p,1,127,-128),0>u&&(u=255+u+1),this[p]=255&u,p+1},l.prototype.writeInt16LE=function(u,p,m){return u=+u,p>>>=0,m||q(this,u,p,2,32767,-32768),this[p]=255&u,this[p+1]=u>>>8,p+2},l.prototype.writeInt16BE=function(u,p,m){return u=+u,p>>>=0,m||q(this,u,p,2,32767,-32768),this[p]=u>>>8,this[p+1]=255&u,p+2},l.prototype.writeInt32LE=function(u,p,m){return u=+u,p>>>=0,m||q(this,u,p,4,2147483647,-2147483648),this[p]=255&u,this[p+1]=u>>>8,this[p+2]=u>>>16,this[p+3]=u>>>24,p+4},l.prototype.writeInt32BE=function(u,p,m){return u=+u,p>>>=0,m||q(this,u,p,4,2147483647,-2147483648),0>u&&(u=4294967295+u+1),this[p]=u>>>24,this[p+1]=u>>>16,this[p+2]=u>>>8,this[p+3]=255&u,p+4},l.prototype.writeFloatLE=function(u,p,m){return gt(this,u,p,!0,m)},l.prototype.writeFloatBE=function(u,p,m){return gt(this,u,p,!1,m)},l.prototype.writeDoubleLE=function(u,p,m){return Dt(this,u,p,!0,m)},l.prototype.writeDoubleBE=function(u,p,m){return Dt(this,u,p,!1,m)},l.prototype.copy=function(u,p,m,R){if(!l.isBuffer(u))throw new TypeError("argument should be a Buffer");if(m||(m=0),R||R===0||(R=this.length),p>=u.length&&(p=u.length),p||(p=0),0<R&&R<m&&(R=m),R===m||u.length===0||this.length===0)return 0;if(0>p)throw new RangeError("targetStart out of bounds");if(0>m||m>=this.length)throw new RangeError("Index out of range");if(0>R)throw new RangeError("sourceEnd out of bounds");R>this.length&&(R=this.length),u.length-p<R-m&&(R=u.length-p+m);var I=R-m;if(this===u&&typeof Uint8Array.prototype.copyWithin=="function")this.copyWithin(p,m,R);else if(this===u&&m<p&&p<R)for(var O=I-1;0<=O;--O)u[O+p]=this[O+m];else Uint8Array.prototype.set.call(u,this.subarray(m,R),p);return I},l.prototype.fill=function(u,p,m,R){if(typeof u=="string"){if(typeof p=="string"?(R=p,p=0,m=this.length):typeof m=="string"&&(R=m,m=this.length),R!==void 0&&typeof R!="string")throw new TypeError("encoding must be a string");if(typeof R=="string"&&!l.isEncoding(R))throw new TypeError("Unknown encoding: "+R);if(u.length===1){var I=u.charCodeAt(0);(R==="utf8"&&128>I||R==="latin1")&&(u=I)}}else typeof u=="number"&&(u&=255);if(0>p||this.length<p||this.length<m)throw new RangeError("Out of range index");if(m<=p)return this;p>>>=0,m=m===void 0?this.length:m>>>0,u||(u=0);var O;if(typeof u=="number")for(O=p;O<m;++O)this[O]=u;else{var Y=l.isBuffer(u)?u:l.from(u,R),pt=Y.length;if(pt===0)throw new TypeError('The value "'+u+'" is invalid for argument "value"');for(O=0;O<m-p;++O)this[O+p]=Y[O%pt]}return this};var L=/[^+/0-9A-Za-z-_]/g}).call(this)}).call(this,s("buffer").Buffer)},{"base64-js":1,buffer:3,ieee754:9}],4:[function(s,a,o){(function(c){(function(){function h(){let l;try{l=o.storage.getItem("debug")}catch{}return!l&&typeof c<"u"&&"env"in c&&(l=c.env.DEBUG),l}o.formatArgs=function(l){if(l[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+l[0]+(this.useColors?"%c ":" ")+"+"+a.exports.humanize(this.diff),!this.useColors)return;const f="color: "+this.color;l.splice(1,0,f,"color: inherit");let g=0,v=0;l[0].replace(/%[a-zA-Z%]/g,E=>{E==="%%"||(g++,E==="%c"&&(v=g))}),l.splice(v,0,f)},o.save=function(l){try{l?o.storage.setItem("debug",l):o.storage.removeItem("debug")}catch{}},o.load=h,o.useColors=function(){return!!(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))||!(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&(typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&31<=parseInt(RegExp.$1,10)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},o.storage=function(){try{return localStorage}catch{}}(),o.destroy=(()=>{let l=!1;return()=>{l||(l=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),o.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],o.log=console.debug||console.log||(()=>{}),a.exports=s("./common")(o);const{formatters:d}=a.exports;d.j=function(l){try{return JSON.stringify(l)}catch(f){return"[UnexpectedJSONParseError]: "+f.message}}}).call(this)}).call(this,s("_process"))},{"./common":5,_process:12}],5:[function(s,a){a.exports=function(o){function c(l){function f(...E){if(!f.enabled)return;const y=f,_=+new Date,C=_-(g||_);y.diff=C,y.prev=g,y.curr=_,g=_,E[0]=c.coerce(E[0]),typeof E[0]!="string"&&E.unshift("%O");let x=0;E[0]=E[0].replace(/%([a-zA-Z%])/g,(T,A)=>{if(T==="%%")return"%";x++;const M=c.formatters[A];if(typeof M=="function"){const P=E[x];T=M.call(y,P),E.splice(x,1),x--}return T}),c.formatArgs.call(y,E),(y.log||c.log).apply(y,E)}let g,v=null;return f.namespace=l,f.useColors=c.useColors(),f.color=c.selectColor(l),f.extend=h,f.destroy=c.destroy,Object.defineProperty(f,"enabled",{enumerable:!0,configurable:!1,get:()=>v===null?c.enabled(l):v,set:E=>{v=E}}),typeof c.init=="function"&&c.init(f),f}function h(l,f){const g=c(this.namespace+(typeof f>"u"?":":f)+l);return g.log=this.log,g}function d(l){return l.toString().substring(2,l.toString().length-2).replace(/\.\*\?$/,"*")}return c.debug=c,c.default=c,c.coerce=function(l){return l instanceof Error?l.stack||l.message:l},c.disable=function(){const l=[...c.names.map(d),...c.skips.map(d).map(f=>"-"+f)].join(",");return c.enable(""),l},c.enable=function(l){c.save(l),c.names=[],c.skips=[];let f;const g=(typeof l=="string"?l:"").split(/[\s,]+/),v=g.length;for(f=0;f<v;f++)g[f]&&(l=g[f].replace(/\*/g,".*?"),l[0]==="-"?c.skips.push(new RegExp("^"+l.substr(1)+"$")):c.names.push(new RegExp("^"+l+"$")))},c.enabled=function(l){if(l[l.length-1]==="*")return!0;let f,g;for(f=0,g=c.skips.length;f<g;f++)if(c.skips[f].test(l))return!1;for(f=0,g=c.names.length;f<g;f++)if(c.names[f].test(l))return!0;return!1},c.humanize=s("ms"),c.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(o).forEach(l=>{c[l]=o[l]}),c.names=[],c.skips=[],c.formatters={},c.selectColor=function(l){let f=0;for(let g=0;g<l.length;g++)f=(f<<5)-f+l.charCodeAt(g),f|=0;return c.colors[i(f)%c.colors.length]},c.enable(c.load()),c}},{ms:11}],6:[function(s,a){function o(c,h){for(const d in h)Object.defineProperty(c,d,{value:h[d],enumerable:!0,configurable:!0});return c}a.exports=function(c,h,d){if(!c||typeof c=="string")throw new TypeError("Please pass an Error to err-code");d||(d={}),typeof h=="object"&&(d=h,h=""),h&&(d.code=h);try{return o(c,d)}catch{d.message=c.message,d.stack=c.stack;const f=function(){};return f.prototype=Object.create(Object.getPrototypeOf(c)),o(new f,d)}}},{}],7:[function(s,a){function o(S){console&&console.warn&&console.warn(S)}function c(){c.init.call(this)}function h(S){if(typeof S!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof S)}function d(S){return S._maxListeners===void 0?c.defaultMaxListeners:S._maxListeners}function l(S,w,z,H){var N,K,j;if(h(z),K=S._events,K===void 0?(K=S._events=Object.create(null),S._eventsCount=0):(K.newListener!==void 0&&(S.emit("newListener",w,z.listener?z.listener:z),K=S._events),j=K[w]),j===void 0)j=K[w]=z,++S._eventsCount;else if(typeof j=="function"?j=K[w]=H?[z,j]:[j,z]:H?j.unshift(z):j.push(z),N=d(S),0<N&&j.length>N&&!j.warned){j.warned=!0;var it=new Error("Possible EventEmitter memory leak detected. "+j.length+" "+(w+" listeners added. Use emitter.setMaxListeners() to increase limit"));it.name="MaxListenersExceededWarning",it.emitter=S,it.type=w,it.count=j.length,o(it)}return S}function f(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function g(S,w,z){var H={fired:!1,wrapFn:void 0,target:S,type:w,listener:z},N=f.bind(H);return N.listener=z,H.wrapFn=N,N}function v(S,w,z){var H=S._events;if(H===void 0)return[];var N=H[w];return N===void 0?[]:typeof N=="function"?z?[N.listener||N]:[N]:z?C(N):y(N,N.length)}function E(S){var w=this._events;if(w!==void 0){var z=w[S];if(typeof z=="function")return 1;if(z!==void 0)return z.length}return 0}function y(S,w){for(var z=Array(w),H=0;H<w;++H)z[H]=S[H];return z}function _(S,w){for(;w+1<S.length;w++)S[w]=S[w+1];S.pop()}function C(S){for(var w=Array(S.length),z=0;z<w.length;++z)w[z]=S[z].listener||S[z];return w}function x(S,w,z){typeof S.on=="function"&&b(S,"error",w,z)}function b(S,w,z,H){if(typeof S.on=="function")H.once?S.once(w,z):S.on(w,z);else if(typeof S.addEventListener=="function")S.addEventListener(w,function N(K){H.once&&S.removeEventListener(w,N),z(K)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof S)}var T,A=typeof Reflect=="object"?Reflect:null,M=A&&typeof A.apply=="function"?A.apply:function(S,w,z){return Function.prototype.apply.call(S,w,z)};T=A&&typeof A.ownKeys=="function"?A.ownKeys:Object.getOwnPropertySymbols?function(S){return Object.getOwnPropertyNames(S).concat(Object.getOwnPropertySymbols(S))}:function(S){return Object.getOwnPropertyNames(S)};var P=Number.isNaN||function(S){return S!==S};a.exports=c,a.exports.once=function(S,w){return new Promise(function(z,H){function N(j){S.removeListener(w,K),H(j)}function K(){typeof S.removeListener=="function"&&S.removeListener("error",N),z([].slice.call(arguments))}b(S,w,K,{once:!0}),w!=="error"&&x(S,N,{once:!0})})},c.EventEmitter=c,c.prototype._events=void 0,c.prototype._eventsCount=0,c.prototype._maxListeners=void 0;var k=10;Object.defineProperty(c,"defaultMaxListeners",{enumerable:!0,get:function(){return k},set:function(S){if(typeof S!="number"||0>S||P(S))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+S+".");k=S}}),c.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},c.prototype.setMaxListeners=function(S){if(typeof S!="number"||0>S||P(S))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+S+".");return this._maxListeners=S,this},c.prototype.getMaxListeners=function(){return d(this)},c.prototype.emit=function(S){for(var w=[],z=1;z<arguments.length;z++)w.push(arguments[z]);var H=S==="error",N=this._events;if(N!==void 0)H=H&&N.error===void 0;else if(!H)return!1;if(H){var K;if(0<w.length&&(K=w[0]),K instanceof Error)throw K;var j=new Error("Unhandled error."+(K?" ("+K.message+")":""));throw j.context=K,j}var it=N[S];if(it===void 0)return!1;if(typeof it=="function")M(it,this,w);else for(var tt=it.length,$=y(it,tt),z=0;z<tt;++z)M($[z],this,w);return!0},c.prototype.addListener=function(S,w){return l(this,S,w,!1)},c.prototype.on=c.prototype.addListener,c.prototype.prependListener=function(S,w){return l(this,S,w,!0)},c.prototype.once=function(S,w){return h(w),this.on(S,g(this,S,w)),this},c.prototype.prependOnceListener=function(S,w){return h(w),this.prependListener(S,g(this,S,w)),this},c.prototype.removeListener=function(S,w){var z,H,N,K,j;if(h(w),H=this._events,H===void 0)return this;if(z=H[S],z===void 0)return this;if(z===w||z.listener===w)--this._eventsCount==0?this._events=Object.create(null):(delete H[S],H.removeListener&&this.emit("removeListener",S,z.listener||w));else if(typeof z!="function"){for(N=-1,K=z.length-1;0<=K;K--)if(z[K]===w||z[K].listener===w){j=z[K].listener,N=K;break}if(0>N)return this;N===0?z.shift():_(z,N),z.length===1&&(H[S]=z[0]),H.removeListener!==void 0&&this.emit("removeListener",S,j||w)}return this},c.prototype.off=c.prototype.removeListener,c.prototype.removeAllListeners=function(S){var w,z,H;if(z=this._events,z===void 0)return this;if(z.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):z[S]!==void 0&&(--this._eventsCount==0?this._events=Object.create(null):delete z[S]),this;if(arguments.length===0){var N,K=Object.keys(z);for(H=0;H<K.length;++H)N=K[H],N!=="removeListener"&&this.removeAllListeners(N);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(w=z[S],typeof w=="function")this.removeListener(S,w);else if(w!==void 0)for(H=w.length-1;0<=H;H--)this.removeListener(S,w[H]);return this},c.prototype.listeners=function(S){return v(this,S,!0)},c.prototype.rawListeners=function(S){return v(this,S,!1)},c.listenerCount=function(S,w){return typeof S.listenerCount=="function"?S.listenerCount(w):E.call(S,w)},c.prototype.listenerCount=E,c.prototype.eventNames=function(){return 0<this._eventsCount?T(this._events):[]}},{}],8:[function(s,a){a.exports=function(){if(typeof globalThis>"u")return null;var o={RTCPeerConnection:globalThis.RTCPeerConnection||globalThis.mozRTCPeerConnection||globalThis.webkitRTCPeerConnection,RTCSessionDescription:globalThis.RTCSessionDescription||globalThis.mozRTCSessionDescription||globalThis.webkitRTCSessionDescription,RTCIceCandidate:globalThis.RTCIceCandidate||globalThis.mozRTCIceCandidate||globalThis.webkitRTCIceCandidate};return o.RTCPeerConnection?o:null}},{}],9:[function(s,a,o){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */o.read=function(c,h,d,l,f){var g,v,E=8*f-l-1,y=(1<<E)-1,_=y>>1,C=-7,x=d?f-1:0,b=d?-1:1,T=c[h+x];for(x+=b,g=T&(1<<-C)-1,T>>=-C,C+=E;0<C;g=256*g+c[h+x],x+=b,C-=8);for(v=g&(1<<-C)-1,g>>=-C,C+=l;0<C;v=256*v+c[h+x],x+=b,C-=8);if(g===0)g=1-_;else{if(g===y)return v?NaN:(T?-1:1)*(1/0);v+=r(2,l),g-=_}return(T?-1:1)*v*r(2,g-l)},o.write=function(c,h,d,l,f,g){var v,E,y,_=Math.LN2,C=Math.log,x=8*g-f-1,b=(1<<x)-1,T=b>>1,A=f===23?r(2,-24)-r(2,-77):0,M=l?0:g-1,P=l?1:-1,k=0>h||h===0&&0>1/h?1:0;for(h=i(h),isNaN(h)||h===1/0?(E=isNaN(h)?1:0,v=b):(v=e(C(h)/_),1>h*(y=r(2,-v))&&(v--,y*=2),h+=1<=v+T?A/y:A*r(2,1-T),2<=h*y&&(v++,y/=2),v+T>=b?(E=0,v=b):1<=v+T?(E=(h*y-1)*r(2,f),v+=T):(E=h*r(2,T-1)*r(2,f),v=0));8<=f;c[d+M]=255&E,M+=P,E/=256,f-=8);for(v=v<<f|E,x+=f;0<x;c[d+M]=255&v,M+=P,v/=256,x-=8);c[d+M-P]|=128*k}},{}],10:[function(s,a){a.exports=typeof Object.create=="function"?function(o,c){c&&(o.super_=c,o.prototype=Object.create(c.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}))}:function(o,c){if(c){o.super_=c;var h=function(){};h.prototype=c.prototype,o.prototype=new h,o.prototype.constructor=o}}},{}],11:[function(s,a){var o=Math.round;function c(f){if(f+="",!(100<f.length)){var g=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(f);if(g){var v=parseFloat(g[1]),E=(g[2]||"ms").toLowerCase();return E==="years"||E==="year"||E==="yrs"||E==="yr"||E==="y"?315576e5*v:E==="weeks"||E==="week"||E==="w"?6048e5*v:E==="days"||E==="day"||E==="d"?864e5*v:E==="hours"||E==="hour"||E==="hrs"||E==="hr"||E==="h"?36e5*v:E==="minutes"||E==="minute"||E==="mins"||E==="min"||E==="m"?6e4*v:E==="seconds"||E==="second"||E==="secs"||E==="sec"||E==="s"?1e3*v:E==="milliseconds"||E==="millisecond"||E==="msecs"||E==="msec"||E==="ms"?v:void 0}}}function h(f){var g=i(f);return 864e5<=g?o(f/864e5)+"d":36e5<=g?o(f/36e5)+"h":6e4<=g?o(f/6e4)+"m":1e3<=g?o(f/1e3)+"s":f+"ms"}function d(f){var g=i(f);return 864e5<=g?l(f,g,864e5,"day"):36e5<=g?l(f,g,36e5,"hour"):6e4<=g?l(f,g,6e4,"minute"):1e3<=g?l(f,g,1e3,"second"):f+" ms"}function l(f,g,v,E){return o(f/v)+" "+E+(g>=1.5*v?"s":"")}a.exports=function(f,g){g=g||{};var v=typeof f;if(v=="string"&&0<f.length)return c(f);if(v==="number"&&isFinite(f))return g.long?d(f):h(f);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(f))}},{}],12:[function(s,a){function o(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function h(A){if(E===setTimeout)return setTimeout(A,0);if((E===o||!E)&&setTimeout)return E=setTimeout,setTimeout(A,0);try{return E(A,0)}catch{try{return E.call(null,A,0)}catch{return E.call(this,A,0)}}}function d(A){if(y===clearTimeout)return clearTimeout(A);if((y===c||!y)&&clearTimeout)return y=clearTimeout,clearTimeout(A);try{return y(A)}catch{try{return y.call(null,A)}catch{return y.call(this,A)}}}function l(){b&&C&&(b=!1,C.length?x=C.concat(x):T=-1,x.length&&f())}function f(){if(!b){var A=h(l);b=!0;for(var M=x.length;M;){for(C=x,x=[];++T<M;)C&&C[T].run();T=-1,M=x.length}C=null,b=!1,d(A)}}function g(A,M){this.fun=A,this.array=M}function v(){}var E,y,_=a.exports={};(function(){try{E=typeof setTimeout=="function"?setTimeout:o}catch{E=o}try{y=typeof clearTimeout=="function"?clearTimeout:c}catch{y=c}})();var C,x=[],b=!1,T=-1;_.nextTick=function(A){var M=Array(arguments.length-1);if(1<arguments.length)for(var P=1;P<arguments.length;P++)M[P-1]=arguments[P];x.push(new g(A,M)),x.length!==1||b||h(f)},g.prototype.run=function(){this.fun.apply(null,this.array)},_.title="browser",_.browser=!0,_.env={},_.argv=[],_.version="",_.versions={},_.on=v,_.addListener=v,_.once=v,_.off=v,_.removeListener=v,_.removeAllListeners=v,_.emit=v,_.prependListener=v,_.prependOnceListener=v,_.listeners=function(){return[]},_.binding=function(){throw new Error("process.binding is not supported")},_.cwd=function(){return"/"},_.chdir=function(){throw new Error("process.chdir is not supported")},_.umask=function(){return 0}},{}],13:[function(s,a){(function(o){(function(){/*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */let c;a.exports=typeof queueMicrotask=="function"?queueMicrotask.bind(typeof window>"u"?o:window):h=>(c||(c=Promise.resolve())).then(h).catch(d=>setTimeout(()=>{throw d},0))}).call(this)}).call(this,typeof hn>"u"?typeof self>"u"?typeof window>"u"?{}:window:self:hn)},{}],14:[function(s,a){(function(o,c){(function(){var h=s("safe-buffer").Buffer,d=c.crypto||c.msCrypto;a.exports=d&&d.getRandomValues?function(l,f){if(l>4294967295)throw new RangeError("requested too many random bytes");var g=h.allocUnsafe(l);if(0<l)if(65536<l)for(var v=0;v<l;v+=65536)d.getRandomValues(g.slice(v,v+65536));else d.getRandomValues(g);return typeof f=="function"?o.nextTick(function(){f(null,g)}):g}:function(){throw new Error(`Secure random number generation is not supported by this browser.
Use Chrome, Firefox or Internet Explorer 11`)}}).call(this)}).call(this,s("_process"),typeof hn>"u"?typeof self>"u"?typeof window>"u"?{}:window:self:hn)},{_process:12,"safe-buffer":30}],15:[function(s,a){function o(v,E){v.prototype=Object.create(E.prototype),v.prototype.constructor=v,v.__proto__=E}function c(v,E,y){function _(x,b,T){return typeof E=="string"?E:E(x,b,T)}y||(y=Error);var C=function(x){function b(T,A,M){return x.call(this,_(T,A,M))||this}return o(b,x),b}(y);C.prototype.name=y.name,C.prototype.code=v,g[v]=C}function h(v,E){if(Array.isArray(v)){var y=v.length;return v=v.map(function(_){return _+""}),2<y?"one of ".concat(E," ").concat(v.slice(0,y-1).join(", "),", or ")+v[y-1]:y===2?"one of ".concat(E," ").concat(v[0]," or ").concat(v[1]):"of ".concat(E," ").concat(v[0])}return"of ".concat(E," ").concat(v+"")}function d(v,E,y){return v.substr(0,E.length)===E}function l(v,E,y){return(y===void 0||y>v.length)&&(y=v.length),v.substring(y-E.length,y)===E}function f(v,E,y){return typeof y!="number"&&(y=0),!(y+E.length>v.length)&&v.indexOf(E,y)!==-1}var g={};c("ERR_INVALID_OPT_VALUE",function(v,E){return'The value "'+E+'" is invalid for option "'+v+'"'},TypeError),c("ERR_INVALID_ARG_TYPE",function(v,E,y){var _;typeof E=="string"&&d(E,"not ")?(_="must not be",E=E.replace(/^not /,"")):_="must be";var C;if(l(v," argument"))C="The ".concat(v," ").concat(_," ").concat(h(E,"type"));else{var x=f(v,".")?"property":"argument";C='The "'.concat(v,'" ').concat(x," ").concat(_," ").concat(h(E,"type"))}return C+=". Received type ".concat(typeof y),C},TypeError),c("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF"),c("ERR_METHOD_NOT_IMPLEMENTED",function(v){return"The "+v+" method is not implemented"}),c("ERR_STREAM_PREMATURE_CLOSE","Premature close"),c("ERR_STREAM_DESTROYED",function(v){return"Cannot call "+v+" after a stream was destroyed"}),c("ERR_MULTIPLE_CALLBACK","Callback called multiple times"),c("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable"),c("ERR_STREAM_WRITE_AFTER_END","write after end"),c("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError),c("ERR_UNKNOWN_ENCODING",function(v){return"Unknown encoding: "+v},TypeError),c("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event"),a.exports.codes=g},{}],16:[function(s,a){(function(o){(function(){function c(_){return this instanceof c?(f.call(this,_),g.call(this,_),this.allowHalfOpen=!0,void(_&&(_.readable===!1&&(this.readable=!1),_.writable===!1&&(this.writable=!1),_.allowHalfOpen===!1&&(this.allowHalfOpen=!1,this.once("end",h))))):new c(_)}function h(){this._writableState.ended||o.nextTick(d,this)}function d(_){_.end()}var l=Object.keys||function(_){var C=[];for(var x in _)C.push(x);return C};a.exports=c;var f=s("./_stream_readable"),g=s("./_stream_writable");s("inherits")(c,f);for(var v,E=l(g.prototype),y=0;y<E.length;y++)v=E[y],c.prototype[v]||(c.prototype[v]=g.prototype[v]);Object.defineProperty(c.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(c.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(c.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(c.prototype,"destroyed",{enumerable:!1,get:function(){return this._readableState!==void 0&&this._writableState!==void 0&&this._readableState.destroyed&&this._writableState.destroyed},set:function(_){this._readableState===void 0||this._writableState===void 0||(this._readableState.destroyed=_,this._writableState.destroyed=_)}})}).call(this)}).call(this,s("_process"))},{"./_stream_readable":18,"./_stream_writable":20,_process:12,inherits:10}],17:[function(s,a){function o(h){return this instanceof o?void c.call(this,h):new o(h)}a.exports=o;var c=s("./_stream_transform");s("inherits")(o,c),o.prototype._transform=function(h,d,l){l(null,h)}},{"./_stream_transform":19,inherits:10}],18:[function(s,a){(function(o,c){(function(){function h(L){return vt.from(L)}function d(L){return vt.isBuffer(L)||L instanceof bt}function l(L,u,p){return typeof L.prependListener=="function"?L.prependListener(u,p):void(L._events&&L._events[u]?Array.isArray(L._events[u])?L._events[u].unshift(p):L._events[u]=[p,L._events[u]]:L.on(u,p))}function f(L,u,p){tt=tt||s("./_stream_duplex"),L=L||{},typeof p!="boolean"&&(p=u instanceof tt),this.objectMode=!!L.objectMode,p&&(this.objectMode=this.objectMode||!!L.readableObjectMode),this.highWaterMark=It(this,L,"readableHighWaterMark",p),this.buffer=new Ct,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.paused=!0,this.emitClose=L.emitClose!==!1,this.autoDestroy=!!L.autoDestroy,this.destroyed=!1,this.defaultEncoding=L.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,L.encoding&&(!ct&&(ct=s("string_decoder/").StringDecoder),this.decoder=new ct(L.encoding),this.encoding=L.encoding)}function g(L){if(tt=tt||s("./_stream_duplex"),!(this instanceof g))return new g(L);var u=this instanceof tt;this._readableState=new f(L,this,u),this.readable=!0,L&&(typeof L.read=="function"&&(this._read=L.read),typeof L.destroy=="function"&&(this._destroy=L.destroy)),ht.call(this)}function v(L,u,p,m,R){$("readableAddChunk",u);var I=L._readableState;if(u===null)I.reading=!1,x(L,I);else{var O;if(R||(O=y(I,u)),O)nt(L,O);else if(!(I.objectMode||u&&0<u.length))m||(I.reading=!1,A(L,I));else if(typeof u=="string"||I.objectMode||Object.getPrototypeOf(u)===vt.prototype||(u=h(u)),m)I.endEmitted?nt(L,new G):E(L,I,u,!0);else if(I.ended)nt(L,new Mt);else{if(I.destroyed)return!1;I.reading=!1,I.decoder&&!p?(u=I.decoder.write(u),I.objectMode||u.length!==0?E(L,I,u,!1):A(L,I)):E(L,I,u,!1)}}return!I.ended&&(I.length<I.highWaterMark||I.length===0)}function E(L,u,p,m){u.flowing&&u.length===0&&!u.sync?(u.awaitDrain=0,L.emit("data",p)):(u.length+=u.objectMode?1:p.length,m?u.buffer.unshift(p):u.buffer.push(p),u.needReadable&&b(L)),A(L,u)}function y(L,u){var p;return d(u)||typeof u=="string"||u===void 0||L.objectMode||(p=new Kt("chunk",["string","Buffer","Uint8Array"],u)),p}function _(L){return 1073741824<=L?L=1073741824:(L--,L|=L>>>1,L|=L>>>2,L|=L>>>4,L|=L>>>8,L|=L>>>16,L++),L}function C(L,u){return 0>=L||u.length===0&&u.ended?0:u.objectMode?1:L===L?(L>u.highWaterMark&&(u.highWaterMark=_(L)),L<=u.length?L:u.ended?u.length:(u.needReadable=!0,0)):u.flowing&&u.length?u.buffer.head.data.length:u.length}function x(L,u){if($("onEofChunk"),!u.ended){if(u.decoder){var p=u.decoder.end();p&&p.length&&(u.buffer.push(p),u.length+=u.objectMode?1:p.length)}u.ended=!0,u.sync?b(L):(u.needReadable=!1,!u.emittedReadable&&(u.emittedReadable=!0,T(L)))}}function b(L){var u=L._readableState;$("emitReadable",u.needReadable,u.emittedReadable),u.needReadable=!1,u.emittedReadable||($("emitReadable",u.flowing),u.emittedReadable=!0,o.nextTick(T,L))}function T(L){var u=L._readableState;$("emitReadable_",u.destroyed,u.length,u.ended),!u.destroyed&&(u.length||u.ended)&&(L.emit("readable"),u.emittedReadable=!1),u.needReadable=!u.flowing&&!u.ended&&u.length<=u.highWaterMark,H(L)}function A(L,u){u.readingMore||(u.readingMore=!0,o.nextTick(M,L,u))}function M(L,u){for(;!u.reading&&!u.ended&&(u.length<u.highWaterMark||u.flowing&&u.length===0);){var p=u.length;if($("maybeReadMore read 0"),L.read(0),p===u.length)break}u.readingMore=!1}function P(L){return function(){var u=L._readableState;$("pipeOnDrain",u.awaitDrain),u.awaitDrain&&u.awaitDrain--,u.awaitDrain===0&&at(L,"data")&&(u.flowing=!0,H(L))}}function k(L){var u=L._readableState;u.readableListening=0<L.listenerCount("readable"),u.resumeScheduled&&!u.paused?u.flowing=!0:0<L.listenerCount("data")&&L.resume()}function S(L){$("readable nexttick read 0"),L.read(0)}function w(L,u){u.resumeScheduled||(u.resumeScheduled=!0,o.nextTick(z,L,u))}function z(L,u){$("resume",u.reading),u.reading||L.read(0),u.resumeScheduled=!1,L.emit("resume"),H(L),u.flowing&&!u.reading&&L.read(0)}function H(L){var u=L._readableState;for($("flow",u.flowing);u.flowing&&L.read()!==null;);}function N(L,u){if(u.length===0)return null;var p;return u.objectMode?p=u.buffer.shift():!L||L>=u.length?(p=u.decoder?u.buffer.join(""):u.buffer.length===1?u.buffer.first():u.buffer.concat(u.length),u.buffer.clear()):p=u.buffer.consume(L,u.decoder),p}function K(L){var u=L._readableState;$("endReadable",u.endEmitted),u.endEmitted||(u.ended=!0,o.nextTick(j,u,L))}function j(L,u){if($("endReadableNT",L.endEmitted,L.length),!L.endEmitted&&L.length===0&&(L.endEmitted=!0,u.readable=!1,u.emit("end"),L.autoDestroy)){var p=u._writableState;(!p||p.autoDestroy&&p.finished)&&u.destroy()}}function it(L,u){for(var p=0,m=L.length;p<m;p++)if(L[p]===u)return p;return-1}a.exports=g;var tt;g.ReadableState=f;var $;s("events").EventEmitter;var at=function(L,u){return L.listeners(u).length},ht=s("./internal/streams/stream"),vt=s("buffer").Buffer,bt=c.Uint8Array||function(){},q=s("util");$=q&&q.debuglog?q.debuglog("stream"):function(){};var ct,gt,Dt,Ct=s("./internal/streams/buffer_list"),xt=s("./internal/streams/destroy"),Gt=s("./internal/streams/state"),It=Gt.getHighWaterMark,V=s("../errors").codes,Kt=V.ERR_INVALID_ARG_TYPE,Mt=V.ERR_STREAM_PUSH_AFTER_EOF,B=V.ERR_METHOD_NOT_IMPLEMENTED,G=V.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;s("inherits")(g,ht);var nt=xt.errorOrDestroy,lt=["error","close","destroy","pause","resume"];Object.defineProperty(g.prototype,"destroyed",{enumerable:!1,get:function(){return this._readableState!==void 0&&this._readableState.destroyed},set:function(L){this._readableState&&(this._readableState.destroyed=L)}}),g.prototype.destroy=xt.destroy,g.prototype._undestroy=xt.undestroy,g.prototype._destroy=function(L,u){u(L)},g.prototype.push=function(L,u){var p,m=this._readableState;return m.objectMode?p=!0:typeof L=="string"&&(u=u||m.defaultEncoding,u!==m.encoding&&(L=vt.from(L,u),u=""),p=!0),v(this,L,u,!1,p)},g.prototype.unshift=function(L){return v(this,L,null,!0,!1)},g.prototype.isPaused=function(){return this._readableState.flowing===!1},g.prototype.setEncoding=function(L){ct||(ct=s("string_decoder/").StringDecoder);var u=new ct(L);this._readableState.decoder=u,this._readableState.encoding=this._readableState.decoder.encoding;for(var p=this._readableState.buffer.head,m="";p!==null;)m+=u.write(p.data),p=p.next;return this._readableState.buffer.clear(),m!==""&&this._readableState.buffer.push(m),this._readableState.length=m.length,this},g.prototype.read=function(L){$("read",L),L=parseInt(L,10);var u=this._readableState,p=L;if(L!==0&&(u.emittedReadable=!1),L===0&&u.needReadable&&((u.highWaterMark===0?0<u.length:u.length>=u.highWaterMark)||u.ended))return $("read: emitReadable",u.length,u.ended),u.length===0&&u.ended?K(this):b(this),null;if(L=C(L,u),L===0&&u.ended)return u.length===0&&K(this),null;var m=u.needReadable;$("need readable",m),(u.length===0||u.length-L<u.highWaterMark)&&(m=!0,$("length less than watermark",m)),u.ended||u.reading?(m=!1,$("reading or ended",m)):m&&($("do read"),u.reading=!0,u.sync=!0,u.length===0&&(u.needReadable=!0),this._read(u.highWaterMark),u.sync=!1,!u.reading&&(L=C(p,u)));var R;return R=0<L?N(L,u):null,R===null?(u.needReadable=u.length<=u.highWaterMark,L=0):(u.length-=L,u.awaitDrain=0),u.length===0&&(!u.ended&&(u.needReadable=!0),p!==L&&u.ended&&K(this)),R!==null&&this.emit("data",R),R},g.prototype._read=function(){nt(this,new B("_read()"))},g.prototype.pipe=function(L,u){function p(Tt,St){$("onunpipe"),Tt===rt&&St&&St.hasUnpiped===!1&&(St.hasUnpiped=!0,R())}function m(){$("onend"),L.end()}function R(){$("cleanup"),L.removeListener("close",Y),L.removeListener("finish",pt),L.removeListener("drain",Zt),L.removeListener("error",O),L.removeListener("unpipe",p),rt.removeListener("end",m),rt.removeListener("end",_t),rt.removeListener("data",I),Nt=!0,st.awaitDrain&&(!L._writableState||L._writableState.needDrain)&&Zt()}function I(Tt){$("ondata");var St=L.write(Tt);$("dest.write",St),St===!1&&((st.pipesCount===1&&st.pipes===L||1<st.pipesCount&&it(st.pipes,L)!==-1)&&!Nt&&($("false write response, pause",st.awaitDrain),st.awaitDrain++),rt.pause())}function O(Tt){$("onerror",Tt),_t(),L.removeListener("error",O),at(L,"error")===0&&nt(L,Tt)}function Y(){L.removeListener("finish",pt),_t()}function pt(){$("onfinish"),L.removeListener("close",Y),_t()}function _t(){$("unpipe"),rt.unpipe(L)}var rt=this,st=this._readableState;switch(st.pipesCount){case 0:st.pipes=L;break;case 1:st.pipes=[st.pipes,L];break;default:st.pipes.push(L)}st.pipesCount+=1,$("pipe count=%d opts=%j",st.pipesCount,u);var wt=(!u||u.end!==!1)&&L!==o.stdout&&L!==o.stderr,ft=wt?m:_t;st.endEmitted?o.nextTick(ft):rt.once("end",ft),L.on("unpipe",p);var Zt=P(rt);L.on("drain",Zt);var Nt=!1;return rt.on("data",I),l(L,"error",O),L.once("close",Y),L.once("finish",pt),L.emit("pipe",rt),st.flowing||($("pipe resume"),rt.resume()),L},g.prototype.unpipe=function(L){var u=this._readableState,p={hasUnpiped:!1};if(u.pipesCount===0)return this;if(u.pipesCount===1)return L&&L!==u.pipes?this:(L||(L=u.pipes),u.pipes=null,u.pipesCount=0,u.flowing=!1,L&&L.emit("unpipe",this,p),this);if(!L){var m=u.pipes,R=u.pipesCount;u.pipes=null,u.pipesCount=0,u.flowing=!1;for(var I=0;I<R;I++)m[I].emit("unpipe",this,{hasUnpiped:!1});return this}var O=it(u.pipes,L);return O===-1?this:(u.pipes.splice(O,1),u.pipesCount-=1,u.pipesCount===1&&(u.pipes=u.pipes[0]),L.emit("unpipe",this,p),this)},g.prototype.on=function(L,u){var p=ht.prototype.on.call(this,L,u),m=this._readableState;return L==="data"?(m.readableListening=0<this.listenerCount("readable"),m.flowing!==!1&&this.resume()):L=="readable"&&!m.endEmitted&&!m.readableListening&&(m.readableListening=m.needReadable=!0,m.flowing=!1,m.emittedReadable=!1,$("on readable",m.length,m.reading),m.length?b(this):!m.reading&&o.nextTick(S,this)),p},g.prototype.addListener=g.prototype.on,g.prototype.removeListener=function(L,u){var p=ht.prototype.removeListener.call(this,L,u);return L==="readable"&&o.nextTick(k,this),p},g.prototype.removeAllListeners=function(L){var u=ht.prototype.removeAllListeners.apply(this,arguments);return(L==="readable"||L===void 0)&&o.nextTick(k,this),u},g.prototype.resume=function(){var L=this._readableState;return L.flowing||($("resume"),L.flowing=!L.readableListening,w(this,L)),L.paused=!1,this},g.prototype.pause=function(){return $("call pause flowing=%j",this._readableState.flowing),this._readableState.flowing!==!1&&($("pause"),this._readableState.flowing=!1,this.emit("pause")),this._readableState.paused=!0,this},g.prototype.wrap=function(L){var u=this,p=this._readableState,m=!1;for(var R in L.on("end",function(){if($("wrapped end"),p.decoder&&!p.ended){var O=p.decoder.end();O&&O.length&&u.push(O)}u.push(null)}),L.on("data",function(O){if($("wrapped data"),p.decoder&&(O=p.decoder.write(O)),!(p.objectMode&&O==null)&&(p.objectMode||O&&O.length)){var Y=u.push(O);Y||(m=!0,L.pause())}}),L)this[R]===void 0&&typeof L[R]=="function"&&(this[R]=function(O){return function(){return L[O].apply(L,arguments)}}(R));for(var I=0;I<lt.length;I++)L.on(lt[I],this.emit.bind(this,lt[I]));return this._read=function(O){$("wrapped _read",O),m&&(m=!1,L.resume())},this},typeof Symbol=="function"&&(g.prototype[Symbol.asyncIterator]=function(){return gt===void 0&&(gt=s("./internal/streams/async_iterator")),gt(this)}),Object.defineProperty(g.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),Object.defineProperty(g.prototype,"readableBuffer",{enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}}),Object.defineProperty(g.prototype,"readableFlowing",{enumerable:!1,get:function(){return this._readableState.flowing},set:function(L){this._readableState&&(this._readableState.flowing=L)}}),g._fromList=N,Object.defineProperty(g.prototype,"readableLength",{enumerable:!1,get:function(){return this._readableState.length}}),typeof Symbol=="function"&&(g.from=function(L,u){return Dt===void 0&&(Dt=s("./internal/streams/from")),Dt(g,L,u)})}).call(this)}).call(this,s("_process"),typeof hn>"u"?typeof self>"u"?typeof window>"u"?{}:window:self:hn)},{"../errors":15,"./_stream_duplex":16,"./internal/streams/async_iterator":21,"./internal/streams/buffer_list":22,"./internal/streams/destroy":23,"./internal/streams/from":25,"./internal/streams/state":27,"./internal/streams/stream":28,_process:12,buffer:3,events:7,inherits:10,"string_decoder/":31,util:2}],19:[function(s,a){function o(_,C){var x=this._transformState;x.transforming=!1;var b=x.writecb;if(b===null)return this.emit("error",new g);x.writechunk=null,x.writecb=null,C!=null&&this.push(C),b(_);var T=this._readableState;T.reading=!1,(T.needReadable||T.length<T.highWaterMark)&&this._read(T.highWaterMark)}function c(_){return this instanceof c?(y.call(this,_),this._transformState={afterTransform:o.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,_&&(typeof _.transform=="function"&&(this._transform=_.transform),typeof _.flush=="function"&&(this._flush=_.flush)),void this.on("prefinish",h)):new c(_)}function h(){var _=this;typeof this._flush!="function"||this._readableState.destroyed?d(this,null,null):this._flush(function(C,x){d(_,C,x)})}function d(_,C,x){if(C)return _.emit("error",C);if(x!=null&&_.push(x),_._writableState.length)throw new E;if(_._transformState.transforming)throw new v;return _.push(null)}a.exports=c;var l=s("../errors").codes,f=l.ERR_METHOD_NOT_IMPLEMENTED,g=l.ERR_MULTIPLE_CALLBACK,v=l.ERR_TRANSFORM_ALREADY_TRANSFORMING,E=l.ERR_TRANSFORM_WITH_LENGTH_0,y=s("./_stream_duplex");s("inherits")(c,y),c.prototype.push=function(_,C){return this._transformState.needTransform=!1,y.prototype.push.call(this,_,C)},c.prototype._transform=function(_,C,x){x(new f("_transform()"))},c.prototype._write=function(_,C,x){var b=this._transformState;if(b.writecb=x,b.writechunk=_,b.writeencoding=C,!b.transforming){var T=this._readableState;(b.needTransform||T.needReadable||T.length<T.highWaterMark)&&this._read(T.highWaterMark)}},c.prototype._read=function(){var _=this._transformState;_.writechunk===null||_.transforming?_.needTransform=!0:(_.transforming=!0,this._transform(_.writechunk,_.writeencoding,_.afterTransform))},c.prototype._destroy=function(_,C){y.prototype._destroy.call(this,_,function(x){C(x)})}},{"../errors":15,"./_stream_duplex":16,inherits:10}],20:[function(s,a){(function(o,c){(function(){function h(B){var G=this;this.next=null,this.entry=null,this.finish=function(){K(G,B)}}function d(B){return $.from(B)}function l(B){return $.isBuffer(B)||B instanceof at}function f(){}function g(B,G,nt){j=j||s("./_stream_duplex"),B=B||{},typeof nt!="boolean"&&(nt=G instanceof j),this.objectMode=!!B.objectMode,nt&&(this.objectMode=this.objectMode||!!B.writableObjectMode),this.highWaterMark=bt(this,B,"writableHighWaterMark",nt),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var lt=B.decodeStrings===!1;this.decodeStrings=!lt,this.defaultEncoding=B.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(L){A(G,L)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.emitClose=B.emitClose!==!1,this.autoDestroy=!!B.autoDestroy,this.bufferedRequestCount=0,this.corkedRequestsFree=new h(this)}function v(B){j=j||s("./_stream_duplex");var G=this instanceof j;return G||Mt.call(v,this)?(this._writableState=new g(B,this,G),this.writable=!0,B&&(typeof B.write=="function"&&(this._write=B.write),typeof B.writev=="function"&&(this._writev=B.writev),typeof B.destroy=="function"&&(this._destroy=B.destroy),typeof B.final=="function"&&(this._final=B.final)),void tt.call(this)):new v(B)}function E(B,G){var nt=new It;Kt(B,nt),o.nextTick(G,nt)}function y(B,G,nt,lt){var L;return nt===null?L=new Gt:typeof nt!="string"&&!G.objectMode&&(L=new ct("chunk",["string","Buffer"],nt)),!L||(Kt(B,L),o.nextTick(lt,L),!1)}function _(B,G,nt){return B.objectMode||B.decodeStrings===!1||typeof G!="string"||(G=$.from(G,nt)),G}function C(B,G,nt,lt,L,u){if(!nt){var p=_(G,lt,L);lt!==p&&(nt=!0,L="buffer",lt=p)}var m=G.objectMode?1:lt.length;G.length+=m;var R=G.length<G.highWaterMark;if(R||(G.needDrain=!0),G.writing||G.corked){var I=G.lastBufferedRequest;G.lastBufferedRequest={chunk:lt,encoding:L,isBuf:nt,callback:u,next:null},I?I.next=G.lastBufferedRequest:G.bufferedRequest=G.lastBufferedRequest,G.bufferedRequestCount+=1}else x(B,G,!1,m,lt,L,u);return R}function x(B,G,nt,lt,L,u,p){G.writelen=lt,G.writecb=p,G.writing=!0,G.sync=!0,G.destroyed?G.onwrite(new xt("write")):nt?B._writev(L,G.onwrite):B._write(L,u,G.onwrite),G.sync=!1}function b(B,G,nt,lt,L){--G.pendingcb,nt?(o.nextTick(L,lt),o.nextTick(H,B,G),B._writableState.errorEmitted=!0,Kt(B,lt)):(L(lt),B._writableState.errorEmitted=!0,Kt(B,lt),H(B,G))}function T(B){B.writing=!1,B.writecb=null,B.length-=B.writelen,B.writelen=0}function A(B,G){var nt=B._writableState,lt=nt.sync,L=nt.writecb;if(typeof L!="function")throw new Dt;if(T(nt),G)b(B,nt,lt,G,L);else{var u=S(nt)||B.destroyed;u||nt.corked||nt.bufferProcessing||!nt.bufferedRequest||k(B,nt),lt?o.nextTick(M,B,nt,u,L):M(B,nt,u,L)}}function M(B,G,nt,lt){nt||P(B,G),G.pendingcb--,lt(),H(B,G)}function P(B,G){G.length===0&&G.needDrain&&(G.needDrain=!1,B.emit("drain"))}function k(B,G){G.bufferProcessing=!0;var nt=G.bufferedRequest;if(B._writev&&nt&&nt.next){var lt=G.bufferedRequestCount,L=Array(lt),u=G.corkedRequestsFree;u.entry=nt;for(var p=0,m=!0;nt;)L[p]=nt,nt.isBuf||(m=!1),nt=nt.next,p+=1;L.allBuffers=m,x(B,G,!0,G.length,L,"",u.finish),G.pendingcb++,G.lastBufferedRequest=null,u.next?(G.corkedRequestsFree=u.next,u.next=null):G.corkedRequestsFree=new h(G),G.bufferedRequestCount=0}else{for(;nt;){var R=nt.chunk,I=nt.encoding,O=nt.callback,Y=G.objectMode?1:R.length;if(x(B,G,!1,Y,R,I,O),nt=nt.next,G.bufferedRequestCount--,G.writing)break}nt===null&&(G.lastBufferedRequest=null)}G.bufferedRequest=nt,G.bufferProcessing=!1}function S(B){return B.ending&&B.length===0&&B.bufferedRequest===null&&!B.finished&&!B.writing}function w(B,G){B._final(function(nt){G.pendingcb--,nt&&Kt(B,nt),G.prefinished=!0,B.emit("prefinish"),H(B,G)})}function z(B,G){G.prefinished||G.finalCalled||(typeof B._final!="function"||G.destroyed?(G.prefinished=!0,B.emit("prefinish")):(G.pendingcb++,G.finalCalled=!0,o.nextTick(w,B,G)))}function H(B,G){var nt=S(G);if(nt&&(z(B,G),G.pendingcb===0&&(G.finished=!0,B.emit("finish"),G.autoDestroy))){var lt=B._readableState;(!lt||lt.autoDestroy&&lt.endEmitted)&&B.destroy()}return nt}function N(B,G,nt){G.ending=!0,H(B,G),nt&&(G.finished?o.nextTick(nt):B.once("finish",nt)),G.ended=!0,B.writable=!1}function K(B,G,nt){var lt=B.entry;for(B.entry=null;lt;){var L=lt.callback;G.pendingcb--,L(nt),lt=lt.next}G.corkedRequestsFree.next=B}a.exports=v;var j;v.WritableState=g;var it={deprecate:s("util-deprecate")},tt=s("./internal/streams/stream"),$=s("buffer").Buffer,at=c.Uint8Array||function(){},ht=s("./internal/streams/destroy"),vt=s("./internal/streams/state"),bt=vt.getHighWaterMark,q=s("../errors").codes,ct=q.ERR_INVALID_ARG_TYPE,gt=q.ERR_METHOD_NOT_IMPLEMENTED,Dt=q.ERR_MULTIPLE_CALLBACK,Ct=q.ERR_STREAM_CANNOT_PIPE,xt=q.ERR_STREAM_DESTROYED,Gt=q.ERR_STREAM_NULL_VALUES,It=q.ERR_STREAM_WRITE_AFTER_END,V=q.ERR_UNKNOWN_ENCODING,Kt=ht.errorOrDestroy;s("inherits")(v,tt),g.prototype.getBuffer=function(){for(var B=this.bufferedRequest,G=[];B;)G.push(B),B=B.next;return G},function(){try{Object.defineProperty(g.prototype,"buffer",{get:it.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch{}}();var Mt;typeof Symbol=="function"&&Symbol.hasInstance&&typeof Function.prototype[Symbol.hasInstance]=="function"?(Mt=Function.prototype[Symbol.hasInstance],Object.defineProperty(v,Symbol.hasInstance,{value:function(B){return!!Mt.call(this,B)||this===v&&B&&B._writableState instanceof g}})):Mt=function(B){return B instanceof this},v.prototype.pipe=function(){Kt(this,new Ct)},v.prototype.write=function(B,G,nt){var lt=this._writableState,L=!1,u=!lt.objectMode&&l(B);return u&&!$.isBuffer(B)&&(B=d(B)),typeof G=="function"&&(nt=G,G=null),u?G="buffer":!G&&(G=lt.defaultEncoding),typeof nt!="function"&&(nt=f),lt.ending?E(this,nt):(u||y(this,lt,B,nt))&&(lt.pendingcb++,L=C(this,lt,u,B,G,nt)),L},v.prototype.cork=function(){this._writableState.corked++},v.prototype.uncork=function(){var B=this._writableState;B.corked&&(B.corked--,!B.writing&&!B.corked&&!B.bufferProcessing&&B.bufferedRequest&&k(this,B))},v.prototype.setDefaultEncoding=function(B){if(typeof B=="string"&&(B=B.toLowerCase()),!(-1<["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((B+"").toLowerCase())))throw new V(B);return this._writableState.defaultEncoding=B,this},Object.defineProperty(v.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(v.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),v.prototype._write=function(B,G,nt){nt(new gt("_write()"))},v.prototype._writev=null,v.prototype.end=function(B,G,nt){var lt=this._writableState;return typeof B=="function"?(nt=B,B=null,G=null):typeof G=="function"&&(nt=G,G=null),B!=null&&this.write(B,G),lt.corked&&(lt.corked=1,this.uncork()),lt.ending||N(this,lt,nt),this},Object.defineProperty(v.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(v.prototype,"destroyed",{enumerable:!1,get:function(){return this._writableState!==void 0&&this._writableState.destroyed},set:function(B){this._writableState&&(this._writableState.destroyed=B)}}),v.prototype.destroy=ht.destroy,v.prototype._undestroy=ht.undestroy,v.prototype._destroy=function(B,G){G(B)}}).call(this)}).call(this,s("_process"),typeof hn>"u"?typeof self>"u"?typeof window>"u"?{}:window:self:hn)},{"../errors":15,"./_stream_duplex":16,"./internal/streams/destroy":23,"./internal/streams/state":27,"./internal/streams/stream":28,_process:12,buffer:3,inherits:10,"util-deprecate":32}],21:[function(s,a){(function(o){(function(){function c(P,k,S){return k in P?Object.defineProperty(P,k,{value:S,enumerable:!0,configurable:!0,writable:!0}):P[k]=S,P}function h(P,k){return{value:P,done:k}}function d(P){var k=P[E];if(k!==null){var S=P[T].read();S!==null&&(P[x]=null,P[E]=null,P[y]=null,k(h(S,!1)))}}function l(P){o.nextTick(d,P)}function f(P,k){return function(S,w){P.then(function(){return k[C]?void S(h(void 0,!0)):void k[b](S,w)},w)}}var g,v=s("./end-of-stream"),E=Symbol("lastResolve"),y=Symbol("lastReject"),_=Symbol("error"),C=Symbol("ended"),x=Symbol("lastPromise"),b=Symbol("handlePromise"),T=Symbol("stream"),A=Object.getPrototypeOf(function(){}),M=Object.setPrototypeOf((g={get stream(){return this[T]},next:function(){var P=this,k=this[_];if(k!==null)return Promise.reject(k);if(this[C])return Promise.resolve(h(void 0,!0));if(this[T].destroyed)return new Promise(function(H,N){o.nextTick(function(){P[_]?N(P[_]):H(h(void 0,!0))})});var S,w=this[x];if(w)S=new Promise(f(w,this));else{var z=this[T].read();if(z!==null)return Promise.resolve(h(z,!1));S=new Promise(this[b])}return this[x]=S,S}},c(g,Symbol.asyncIterator,function(){return this}),c(g,"return",function(){var P=this;return new Promise(function(k,S){P[T].destroy(null,function(w){return w?void S(w):void k(h(void 0,!0))})})}),g),A);a.exports=function(P){var k,S=Object.create(M,(k={},c(k,T,{value:P,writable:!0}),c(k,E,{value:null,writable:!0}),c(k,y,{value:null,writable:!0}),c(k,_,{value:null,writable:!0}),c(k,C,{value:P._readableState.endEmitted,writable:!0}),c(k,b,{value:function(w,z){var H=S[T].read();H?(S[x]=null,S[E]=null,S[y]=null,w(h(H,!1))):(S[E]=w,S[y]=z)},writable:!0}),k));return S[x]=null,v(P,function(w){if(w&&w.code!=="ERR_STREAM_PREMATURE_CLOSE"){var z=S[y];return z!==null&&(S[x]=null,S[E]=null,S[y]=null,z(w)),void(S[_]=w)}var H=S[E];H!==null&&(S[x]=null,S[E]=null,S[y]=null,H(h(void 0,!0))),S[C]=!0}),P.on("readable",l.bind(null,S)),S}}).call(this)}).call(this,s("_process"))},{"./end-of-stream":24,_process:12}],22:[function(s,a){function o(x,b){var T=Object.keys(x);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(x);b&&(A=A.filter(function(M){return Object.getOwnPropertyDescriptor(x,M).enumerable})),T.push.apply(T,A)}return T}function c(x){for(var b,T=1;T<arguments.length;T++)b=arguments[T]==null?{}:arguments[T],T%2?o(Object(b),!0).forEach(function(A){h(x,A,b[A])}):Object.getOwnPropertyDescriptors?Object.defineProperties(x,Object.getOwnPropertyDescriptors(b)):o(Object(b)).forEach(function(A){Object.defineProperty(x,A,Object.getOwnPropertyDescriptor(b,A))});return x}function h(x,b,T){return b in x?Object.defineProperty(x,b,{value:T,enumerable:!0,configurable:!0,writable:!0}):x[b]=T,x}function d(x,b){if(!(x instanceof b))throw new TypeError("Cannot call a class as a function")}function l(x,b){for(var T,A=0;A<b.length;A++)T=b[A],T.enumerable=T.enumerable||!1,T.configurable=!0,"value"in T&&(T.writable=!0),Object.defineProperty(x,T.key,T)}function f(x,b,T){return b&&l(x.prototype,b),x}function g(x,b,T){E.prototype.copy.call(x,b,T)}var v=s("buffer"),E=v.Buffer,y=s("util"),_=y.inspect,C=_&&_.custom||"inspect";a.exports=function(){function x(){d(this,x),this.head=null,this.tail=null,this.length=0}return f(x,[{key:"push",value:function(b){var T={data:b,next:null};0<this.length?this.tail.next=T:this.head=T,this.tail=T,++this.length}},{key:"unshift",value:function(b){var T={data:b,next:this.head};this.length===0&&(this.tail=T),this.head=T,++this.length}},{key:"shift",value:function(){if(this.length!==0){var b=this.head.data;return this.head=this.length===1?this.tail=null:this.head.next,--this.length,b}}},{key:"clear",value:function(){this.head=this.tail=null,this.length=0}},{key:"join",value:function(b){if(this.length===0)return"";for(var T=this.head,A=""+T.data;T=T.next;)A+=b+T.data;return A}},{key:"concat",value:function(b){if(this.length===0)return E.alloc(0);for(var T=E.allocUnsafe(b>>>0),A=this.head,M=0;A;)g(A.data,T,M),M+=A.data.length,A=A.next;return T}},{key:"consume",value:function(b,T){var A;return b<this.head.data.length?(A=this.head.data.slice(0,b),this.head.data=this.head.data.slice(b)):b===this.head.data.length?A=this.shift():A=T?this._getString(b):this._getBuffer(b),A}},{key:"first",value:function(){return this.head.data}},{key:"_getString",value:function(b){var T=this.head,A=1,M=T.data;for(b-=M.length;T=T.next;){var P=T.data,k=b>P.length?P.length:b;if(M+=k===P.length?P:P.slice(0,b),b-=k,b===0){k===P.length?(++A,this.head=T.next?T.next:this.tail=null):(this.head=T,T.data=P.slice(k));break}++A}return this.length-=A,M}},{key:"_getBuffer",value:function(b){var T=E.allocUnsafe(b),A=this.head,M=1;for(A.data.copy(T),b-=A.data.length;A=A.next;){var P=A.data,k=b>P.length?P.length:b;if(P.copy(T,T.length-b,0,k),b-=k,b===0){k===P.length?(++M,this.head=A.next?A.next:this.tail=null):(this.head=A,A.data=P.slice(k));break}++M}return this.length-=M,T}},{key:C,value:function(b,T){return _(this,c({},T,{depth:0,customInspect:!1}))}}]),x}()},{buffer:3,util:2}],23:[function(s,a){(function(o){(function(){function c(l,f){d(l,f),h(l)}function h(l){l._writableState&&!l._writableState.emitClose||l._readableState&&!l._readableState.emitClose||l.emit("close")}function d(l,f){l.emit("error",f)}a.exports={destroy:function(l,f){var g=this,v=this._readableState&&this._readableState.destroyed,E=this._writableState&&this._writableState.destroyed;return v||E?(f?f(l):l&&(this._writableState?!this._writableState.errorEmitted&&(this._writableState.errorEmitted=!0,o.nextTick(d,this,l)):o.nextTick(d,this,l)),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(l||null,function(y){!f&&y?g._writableState?g._writableState.errorEmitted?o.nextTick(h,g):(g._writableState.errorEmitted=!0,o.nextTick(c,g,y)):o.nextTick(c,g,y):f?(o.nextTick(h,g),f(y)):o.nextTick(h,g)}),this)},undestroy:function(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finalCalled=!1,this._writableState.prefinished=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)},errorOrDestroy:function(l,f){var g=l._readableState,v=l._writableState;g&&g.autoDestroy||v&&v.autoDestroy?l.destroy(f):l.emit("error",f)}}}).call(this)}).call(this,s("_process"))},{_process:12}],24:[function(s,a){function o(f){var g=!1;return function(){if(!g){g=!0;for(var v=arguments.length,E=Array(v),y=0;y<v;y++)E[y]=arguments[y];f.apply(this,E)}}}function c(){}function h(f){return f.setHeader&&typeof f.abort=="function"}function d(f,g,v){if(typeof g=="function")return d(f,null,g);g||(g={}),v=o(v||c);var E=g.readable||g.readable!==!1&&f.readable,y=g.writable||g.writable!==!1&&f.writable,_=function(){f.writable||x()},C=f._writableState&&f._writableState.finished,x=function(){y=!1,C=!0,E||v.call(f)},b=f._readableState&&f._readableState.endEmitted,T=function(){E=!1,b=!0,y||v.call(f)},A=function(k){v.call(f,k)},M=function(){var k;return E&&!b?(f._readableState&&f._readableState.ended||(k=new l),v.call(f,k)):y&&!C?(f._writableState&&f._writableState.ended||(k=new l),v.call(f,k)):void 0},P=function(){f.req.on("finish",x)};return h(f)?(f.on("complete",x),f.on("abort",M),f.req?P():f.on("request",P)):y&&!f._writableState&&(f.on("end",_),f.on("close",_)),f.on("end",T),f.on("finish",x),g.error!==!1&&f.on("error",A),f.on("close",M),function(){f.removeListener("complete",x),f.removeListener("abort",M),f.removeListener("request",P),f.req&&f.req.removeListener("finish",x),f.removeListener("end",_),f.removeListener("close",_),f.removeListener("finish",x),f.removeListener("end",T),f.removeListener("error",A),f.removeListener("close",M)}}var l=s("../../../errors").codes.ERR_STREAM_PREMATURE_CLOSE;a.exports=d},{"../../../errors":15}],25:[function(s,a){a.exports=function(){throw new Error("Readable.from is not available in the browser")}},{}],26:[function(s,a){function o(C){var x=!1;return function(){x||(x=!0,C.apply(void 0,arguments))}}function c(C){if(C)throw C}function h(C){return C.setHeader&&typeof C.abort=="function"}function d(C,x,b,T){T=o(T);var A=!1;C.on("close",function(){A=!0}),v===void 0&&(v=s("./end-of-stream")),v(C,{readable:x,writable:b},function(P){return P?T(P):(A=!0,void T())});var M=!1;return function(P){if(!A)return M?void 0:(M=!0,h(C)?C.abort():typeof C.destroy=="function"?C.destroy():void T(P||new _("pipe")))}}function l(C){C()}function f(C,x){return C.pipe(x)}function g(C){return C.length&&typeof C[C.length-1]=="function"?C.pop():c}var v,E=s("../../../errors").codes,y=E.ERR_MISSING_ARGS,_=E.ERR_STREAM_DESTROYED;a.exports=function(){for(var C=arguments.length,x=Array(C),b=0;b<C;b++)x[b]=arguments[b];var T=g(x);if(Array.isArray(x[0])&&(x=x[0]),2>x.length)throw new y("streams");var A,M=x.map(function(P,k){var S=k<x.length-1;return d(P,S,0<k,function(w){A||(A=w),w&&M.forEach(l),S||(M.forEach(l),T(A))})});return x.reduce(f)}},{"../../../errors":15,"./end-of-stream":24}],27:[function(s,a){function o(h,d,l){return h.highWaterMark==null?d?h[l]:null:h.highWaterMark}var c=s("../../../errors").codes.ERR_INVALID_OPT_VALUE;a.exports={getHighWaterMark:function(h,d,l,f){var g=o(d,f,l);if(g!=null){if(!(isFinite(g)&&e(g)===g)||0>g){var v=f?l:"highWaterMark";throw new c(v,g)}return e(g)}return h.objectMode?16:16384}}},{"../../../errors":15}],28:[function(s,a){a.exports=s("events").EventEmitter},{events:7}],29:[function(s,a,o){o=a.exports=s("./lib/_stream_readable.js"),o.Stream=o,o.Readable=o,o.Writable=s("./lib/_stream_writable.js"),o.Duplex=s("./lib/_stream_duplex.js"),o.Transform=s("./lib/_stream_transform.js"),o.PassThrough=s("./lib/_stream_passthrough.js"),o.finished=s("./lib/internal/streams/end-of-stream.js"),o.pipeline=s("./lib/internal/streams/pipeline.js")},{"./lib/_stream_duplex.js":16,"./lib/_stream_passthrough.js":17,"./lib/_stream_readable.js":18,"./lib/_stream_transform.js":19,"./lib/_stream_writable.js":20,"./lib/internal/streams/end-of-stream.js":24,"./lib/internal/streams/pipeline.js":26}],30:[function(s,a,o){function c(f,g){for(var v in f)g[v]=f[v]}function h(f,g,v){return l(f,g,v)}/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */var d=s("buffer"),l=d.Buffer;l.from&&l.alloc&&l.allocUnsafe&&l.allocUnsafeSlow?a.exports=d:(c(d,o),o.Buffer=h),h.prototype=Object.create(l.prototype),c(l,h),h.from=function(f,g,v){if(typeof f=="number")throw new TypeError("Argument must not be a number");return l(f,g,v)},h.alloc=function(f,g,v){if(typeof f!="number")throw new TypeError("Argument must be a number");var E=l(f);return g===void 0?E.fill(0):typeof v=="string"?E.fill(g,v):E.fill(g),E},h.allocUnsafe=function(f){if(typeof f!="number")throw new TypeError("Argument must be a number");return l(f)},h.allocUnsafeSlow=function(f){if(typeof f!="number")throw new TypeError("Argument must be a number");return d.SlowBuffer(f)}},{buffer:3}],31:[function(s,a,o){function c(M){if(!M)return"utf8";for(var P;;)switch(M){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return M;default:if(P)return;M=(""+M).toLowerCase(),P=!0}}function h(M){var P=c(M);if(typeof P!="string"&&(T.isEncoding===A||!A(M)))throw new Error("Unknown encoding: "+M);return P||M}function d(M){this.encoding=h(M);var P;switch(this.encoding){case"utf16le":this.text=E,this.end=y,P=4;break;case"utf8":this.fillLast=v,P=4;break;case"base64":this.text=_,this.end=C,P=3;break;default:return this.write=x,void(this.end=b)}this.lastNeed=0,this.lastTotal=0,this.lastChar=T.allocUnsafe(P)}function l(M){return 127>=M?0:M>>5==6?2:M>>4==14?3:M>>3==30?4:M>>6==2?-1:-2}function f(M,P,k){var S=P.length-1;if(S<k)return 0;var w=l(P[S]);return 0<=w?(0<w&&(M.lastNeed=w-1),w):--S<k||w===-2?0:(w=l(P[S]),0<=w?(0<w&&(M.lastNeed=w-2),w):--S<k||w===-2?0:(w=l(P[S]),0<=w?(0<w&&(w===2?w=0:M.lastNeed=w-3),w):0))}function g(M,P){if((192&P[0])!=128)return M.lastNeed=0,"�";if(1<M.lastNeed&&1<P.length){if((192&P[1])!=128)return M.lastNeed=1,"�";if(2<M.lastNeed&&2<P.length&&(192&P[2])!=128)return M.lastNeed=2,"�"}}function v(M){var P=this.lastTotal-this.lastNeed,k=g(this,M);return k===void 0?this.lastNeed<=M.length?(M.copy(this.lastChar,P,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(M.copy(this.lastChar,P,0,M.length),void(this.lastNeed-=M.length)):k}function E(M,P){if((M.length-P)%2==0){var k=M.toString("utf16le",P);if(k){var S=k.charCodeAt(k.length-1);if(55296<=S&&56319>=S)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=M[M.length-2],this.lastChar[1]=M[M.length-1],k.slice(0,-1)}return k}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=M[M.length-1],M.toString("utf16le",P,M.length-1)}function y(M){var P=M&&M.length?this.write(M):"";if(this.lastNeed){var k=this.lastTotal-this.lastNeed;return P+this.lastChar.toString("utf16le",0,k)}return P}function _(M,P){var k=(M.length-P)%3;return k==0?M.toString("base64",P):(this.lastNeed=3-k,this.lastTotal=3,k==1?this.lastChar[0]=M[M.length-1]:(this.lastChar[0]=M[M.length-2],this.lastChar[1]=M[M.length-1]),M.toString("base64",P,M.length-k))}function C(M){var P=M&&M.length?this.write(M):"";return this.lastNeed?P+this.lastChar.toString("base64",0,3-this.lastNeed):P}function x(M){return M.toString(this.encoding)}function b(M){return M&&M.length?this.write(M):""}var T=s("safe-buffer").Buffer,A=T.isEncoding||function(M){switch(M=""+M,M&&M.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};o.StringDecoder=d,d.prototype.write=function(M){if(M.length===0)return"";var P,k;if(this.lastNeed){if(P=this.fillLast(M),P===void 0)return"";k=this.lastNeed,this.lastNeed=0}else k=0;return k<M.length?P?P+this.text(M,k):this.text(M,k):P||""},d.prototype.end=function(M){var P=M&&M.length?this.write(M):"";return this.lastNeed?P+"�":P},d.prototype.text=function(M,P){var k=f(this,M,P);if(!this.lastNeed)return M.toString("utf8",P);this.lastTotal=k;var S=M.length-(k-this.lastNeed);return M.copy(this.lastChar,0,S),M.toString("utf8",P,S)},d.prototype.fillLast=function(M){return this.lastNeed<=M.length?(M.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(M.copy(this.lastChar,this.lastTotal-this.lastNeed,0,M.length),void(this.lastNeed-=M.length))}},{"safe-buffer":30}],32:[function(s,a){(function(o){(function(){function c(h){try{if(!o.localStorage)return!1}catch{return!1}var d=o.localStorage[h];return d!=null&&(d+"").toLowerCase()==="true"}a.exports=function(h,d){function l(){if(!f){if(c("throwDeprecation"))throw new Error(d);c("traceDeprecation")?console.trace(d):console.warn(d),f=!0}return h.apply(this,arguments)}if(c("noDeprecation"))return h;var f=!1;return l}}).call(this)}).call(this,typeof hn>"u"?typeof self>"u"?typeof window>"u"?{}:window:self:hn)},{}],"/":[function(s,a){function o(C){return C.replace(/a=ice-options:trickle\s\n/g,"")}function c(C){console.warn(C)}/*! simple-peer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */const h=s("debug")("simple-peer"),d=s("get-browser-rtc"),l=s("randombytes"),f=s("readable-stream"),g=s("queue-microtask"),v=s("err-code"),{Buffer:E}=s("buffer"),y=65536;class _ extends f.Duplex{constructor(x){if(x=Object.assign({allowHalfOpen:!1},x),super(x),this._id=l(4).toString("hex").slice(0,7),this._debug("new peer %o",x),this.channelName=x.initiator?x.channelName||l(20).toString("hex"):null,this.initiator=x.initiator||!1,this.channelConfig=x.channelConfig||_.channelConfig,this.channelNegotiated=this.channelConfig.negotiated,this.config=Object.assign({},_.config,x.config),this.offerOptions=x.offerOptions||{},this.answerOptions=x.answerOptions||{},this.sdpTransform=x.sdpTransform||(b=>b),this.streams=x.streams||(x.stream?[x.stream]:[]),this.trickle=x.trickle===void 0||x.trickle,this.allowHalfTrickle=x.allowHalfTrickle!==void 0&&x.allowHalfTrickle,this.iceCompleteTimeout=x.iceCompleteTimeout||5e3,this.destroyed=!1,this.destroying=!1,this._connected=!1,this.remoteAddress=void 0,this.remoteFamily=void 0,this.remotePort=void 0,this.localAddress=void 0,this.localFamily=void 0,this.localPort=void 0,this._wrtc=x.wrtc&&typeof x.wrtc=="object"?x.wrtc:d(),!this._wrtc)throw v(typeof window>"u"?new Error("No WebRTC support: Specify `opts.wrtc` option in this environment"):new Error("No WebRTC support: Not a supported browser"),"ERR_WEBRTC_SUPPORT");this._pcReady=!1,this._channelReady=!1,this._iceComplete=!1,this._iceCompleteTimer=null,this._channel=null,this._pendingCandidates=[],this._isNegotiating=!1,this._firstNegotiation=!0,this._batchedNegotiation=!1,this._queuedNegotiation=!1,this._sendersAwaitingStable=[],this._senderMap=new Map,this._closingInterval=null,this._remoteTracks=[],this._remoteStreams=[],this._chunk=null,this._cb=null,this._interval=null;try{this._pc=new this._wrtc.RTCPeerConnection(this.config)}catch(b){return void this.destroy(v(b,"ERR_PC_CONSTRUCTOR"))}this._isReactNativeWebrtc=typeof this._pc._peerConnectionId=="number",this._pc.oniceconnectionstatechange=()=>{this._onIceStateChange()},this._pc.onicegatheringstatechange=()=>{this._onIceStateChange()},this._pc.onconnectionstatechange=()=>{this._onConnectionStateChange()},this._pc.onsignalingstatechange=()=>{this._onSignalingStateChange()},this._pc.onicecandidate=b=>{this._onIceCandidate(b)},typeof this._pc.peerIdentity=="object"&&this._pc.peerIdentity.catch(b=>{this.destroy(v(b,"ERR_PC_PEER_IDENTITY"))}),this.initiator||this.channelNegotiated?this._setupData({channel:this._pc.createDataChannel(this.channelName,this.channelConfig)}):this._pc.ondatachannel=b=>{this._setupData(b)},this.streams&&this.streams.forEach(b=>{this.addStream(b)}),this._pc.ontrack=b=>{this._onTrack(b)},this._debug("initial negotiation"),this._needsNegotiation(),this._onFinishBound=()=>{this._onFinish()},this.once("finish",this._onFinishBound)}get bufferSize(){return this._channel&&this._channel.bufferedAmount||0}get connected(){return this._connected&&this._channel.readyState==="open"}address(){return{port:this.localPort,family:this.localFamily,address:this.localAddress}}signal(x){if(!this.destroying){if(this.destroyed)throw v(new Error("cannot signal after peer is destroyed"),"ERR_DESTROYED");if(typeof x=="string")try{x=JSON.parse(x)}catch{x={}}this._debug("signal()"),x.renegotiate&&this.initiator&&(this._debug("got request to renegotiate"),this._needsNegotiation()),x.transceiverRequest&&this.initiator&&(this._debug("got request for transceiver"),this.addTransceiver(x.transceiverRequest.kind,x.transceiverRequest.init)),x.candidate&&(this._pc.remoteDescription&&this._pc.remoteDescription.type?this._addIceCandidate(x.candidate):this._pendingCandidates.push(x.candidate)),x.sdp&&this._pc.setRemoteDescription(new this._wrtc.RTCSessionDescription(x)).then(()=>{this.destroyed||(this._pendingCandidates.forEach(b=>{this._addIceCandidate(b)}),this._pendingCandidates=[],this._pc.remoteDescription.type==="offer"&&this._createAnswer())}).catch(b=>{this.destroy(v(b,"ERR_SET_REMOTE_DESCRIPTION"))}),x.sdp||x.candidate||x.renegotiate||x.transceiverRequest||this.destroy(v(new Error("signal() called with invalid signal data"),"ERR_SIGNALING"))}}_addIceCandidate(x){const b=new this._wrtc.RTCIceCandidate(x);this._pc.addIceCandidate(b).catch(T=>{!b.address||b.address.endsWith(".local")?c("Ignoring unsupported ICE candidate."):this.destroy(v(T,"ERR_ADD_ICE_CANDIDATE"))})}send(x){if(!this.destroying){if(this.destroyed)throw v(new Error("cannot send after peer is destroyed"),"ERR_DESTROYED");this._channel.send(x)}}addTransceiver(x,b){if(!this.destroying){if(this.destroyed)throw v(new Error("cannot addTransceiver after peer is destroyed"),"ERR_DESTROYED");if(this._debug("addTransceiver()"),this.initiator)try{this._pc.addTransceiver(x,b),this._needsNegotiation()}catch(T){this.destroy(v(T,"ERR_ADD_TRANSCEIVER"))}else this.emit("signal",{type:"transceiverRequest",transceiverRequest:{kind:x,init:b}})}}addStream(x){if(!this.destroying){if(this.destroyed)throw v(new Error("cannot addStream after peer is destroyed"),"ERR_DESTROYED");this._debug("addStream()"),x.getTracks().forEach(b=>{this.addTrack(b,x)})}}addTrack(x,b){if(this.destroying)return;if(this.destroyed)throw v(new Error("cannot addTrack after peer is destroyed"),"ERR_DESTROYED");this._debug("addTrack()");const T=this._senderMap.get(x)||new Map;let A=T.get(b);if(!A)A=this._pc.addTrack(x,b),T.set(b,A),this._senderMap.set(x,T),this._needsNegotiation();else throw A.removed?v(new Error("Track has been removed. You should enable/disable tracks that you want to re-add."),"ERR_SENDER_REMOVED"):v(new Error("Track has already been added to that stream."),"ERR_SENDER_ALREADY_ADDED")}replaceTrack(x,b,T){if(this.destroying)return;if(this.destroyed)throw v(new Error("cannot replaceTrack after peer is destroyed"),"ERR_DESTROYED");this._debug("replaceTrack()");const A=this._senderMap.get(x),M=A?A.get(T):null;if(!M)throw v(new Error("Cannot replace track that was never added."),"ERR_TRACK_NOT_ADDED");b&&this._senderMap.set(b,A),M.replaceTrack==null?this.destroy(v(new Error("replaceTrack is not supported in this browser"),"ERR_UNSUPPORTED_REPLACETRACK")):M.replaceTrack(b)}removeTrack(x,b){if(this.destroying)return;if(this.destroyed)throw v(new Error("cannot removeTrack after peer is destroyed"),"ERR_DESTROYED");this._debug("removeSender()");const T=this._senderMap.get(x),A=T?T.get(b):null;if(!A)throw v(new Error("Cannot remove track that was never added."),"ERR_TRACK_NOT_ADDED");try{A.removed=!0,this._pc.removeTrack(A)}catch(M){M.name==="NS_ERROR_UNEXPECTED"?this._sendersAwaitingStable.push(A):this.destroy(v(M,"ERR_REMOVE_TRACK"))}this._needsNegotiation()}removeStream(x){if(!this.destroying){if(this.destroyed)throw v(new Error("cannot removeStream after peer is destroyed"),"ERR_DESTROYED");this._debug("removeSenders()"),x.getTracks().forEach(b=>{this.removeTrack(b,x)})}}_needsNegotiation(){this._debug("_needsNegotiation"),this._batchedNegotiation||(this._batchedNegotiation=!0,g(()=>{this._batchedNegotiation=!1,this.initiator||!this._firstNegotiation?(this._debug("starting batched negotiation"),this.negotiate()):this._debug("non-initiator initial negotiation request discarded"),this._firstNegotiation=!1}))}negotiate(){if(!this.destroying){if(this.destroyed)throw v(new Error("cannot negotiate after peer is destroyed"),"ERR_DESTROYED");this.initiator?this._isNegotiating?(this._queuedNegotiation=!0,this._debug("already negotiating, queueing")):(this._debug("start negotiation"),setTimeout(()=>{this._createOffer()},0)):this._isNegotiating?(this._queuedNegotiation=!0,this._debug("already negotiating, queueing")):(this._debug("requesting negotiation from initiator"),this.emit("signal",{type:"renegotiate",renegotiate:!0})),this._isNegotiating=!0}}destroy(x){this._destroy(x,()=>{})}_destroy(x,b){this.destroyed||this.destroying||(this.destroying=!0,this._debug("destroying (error: %s)",x&&(x.message||x)),g(()=>{if(this.destroyed=!0,this.destroying=!1,this._debug("destroy (error: %s)",x&&(x.message||x)),this.readable=this.writable=!1,this._readableState.ended||this.push(null),this._writableState.finished||this.end(),this._connected=!1,this._pcReady=!1,this._channelReady=!1,this._remoteTracks=null,this._remoteStreams=null,this._senderMap=null,clearInterval(this._closingInterval),this._closingInterval=null,clearInterval(this._interval),this._interval=null,this._chunk=null,this._cb=null,this._onFinishBound&&this.removeListener("finish",this._onFinishBound),this._onFinishBound=null,this._channel){try{this._channel.close()}catch{}this._channel.onmessage=null,this._channel.onopen=null,this._channel.onclose=null,this._channel.onerror=null}if(this._pc){try{this._pc.close()}catch{}this._pc.oniceconnectionstatechange=null,this._pc.onicegatheringstatechange=null,this._pc.onsignalingstatechange=null,this._pc.onicecandidate=null,this._pc.ontrack=null,this._pc.ondatachannel=null}this._pc=null,this._channel=null,x&&this.emit("error",x),this.emit("close"),b()}))}_setupData(x){if(!x.channel)return this.destroy(v(new Error("Data channel event is missing `channel` property"),"ERR_DATA_CHANNEL"));this._channel=x.channel,this._channel.binaryType="arraybuffer",typeof this._channel.bufferedAmountLowThreshold=="number"&&(this._channel.bufferedAmountLowThreshold=y),this.channelName=this._channel.label,this._channel.onmessage=T=>{this._onChannelMessage(T)},this._channel.onbufferedamountlow=()=>{this._onChannelBufferedAmountLow()},this._channel.onopen=()=>{this._onChannelOpen()},this._channel.onclose=()=>{this._onChannelClose()},this._channel.onerror=T=>{const A=T.error instanceof Error?T.error:new Error(`Datachannel error: ${T.message} ${T.filename}:${T.lineno}:${T.colno}`);this.destroy(v(A,"ERR_DATA_CHANNEL"))};let b=!1;this._closingInterval=setInterval(()=>{this._channel&&this._channel.readyState==="closing"?(b&&this._onChannelClose(),b=!0):b=!1},5e3)}_read(){}_write(x,b,T){if(this.destroyed)return T(v(new Error("cannot write after peer is destroyed"),"ERR_DATA_CHANNEL"));if(this._connected){try{this.send(x)}catch(A){return this.destroy(v(A,"ERR_DATA_CHANNEL"))}this._channel.bufferedAmount>y?(this._debug("start backpressure: bufferedAmount %d",this._channel.bufferedAmount),this._cb=T):T(null)}else this._debug("write before connect"),this._chunk=x,this._cb=T}_onFinish(){if(!this.destroyed){const x=()=>{setTimeout(()=>this.destroy(),1e3)};this._connected?x():this.once("connect",x)}}_startIceCompleteTimeout(){this.destroyed||this._iceCompleteTimer||(this._debug("started iceComplete timeout"),this._iceCompleteTimer=setTimeout(()=>{this._iceComplete||(this._iceComplete=!0,this._debug("iceComplete timeout completed"),this.emit("iceTimeout"),this.emit("_iceComplete"))},this.iceCompleteTimeout))}_createOffer(){this.destroyed||this._pc.createOffer(this.offerOptions).then(x=>{if(this.destroyed)return;this.trickle||this.allowHalfTrickle||(x.sdp=o(x.sdp)),x.sdp=this.sdpTransform(x.sdp);const b=()=>{if(!this.destroyed){const T=this._pc.localDescription||x;this._debug("signal"),this.emit("signal",{type:T.type,sdp:T.sdp})}};this._pc.setLocalDescription(x).then(()=>{this._debug("createOffer success"),this.destroyed||(this.trickle||this._iceComplete?b():this.once("_iceComplete",b))}).catch(T=>{this.destroy(v(T,"ERR_SET_LOCAL_DESCRIPTION"))})}).catch(x=>{this.destroy(v(x,"ERR_CREATE_OFFER"))})}_requestMissingTransceivers(){this._pc.getTransceivers&&this._pc.getTransceivers().forEach(x=>{x.mid||!x.sender.track||x.requested||(x.requested=!0,this.addTransceiver(x.sender.track.kind))})}_createAnswer(){this.destroyed||this._pc.createAnswer(this.answerOptions).then(x=>{if(this.destroyed)return;this.trickle||this.allowHalfTrickle||(x.sdp=o(x.sdp)),x.sdp=this.sdpTransform(x.sdp);const b=()=>{if(!this.destroyed){const T=this._pc.localDescription||x;this._debug("signal"),this.emit("signal",{type:T.type,sdp:T.sdp}),this.initiator||this._requestMissingTransceivers()}};this._pc.setLocalDescription(x).then(()=>{this.destroyed||(this.trickle||this._iceComplete?b():this.once("_iceComplete",b))}).catch(T=>{this.destroy(v(T,"ERR_SET_LOCAL_DESCRIPTION"))})}).catch(x=>{this.destroy(v(x,"ERR_CREATE_ANSWER"))})}_onConnectionStateChange(){this.destroyed||this._pc.connectionState==="failed"&&this.destroy(v(new Error("Connection failed."),"ERR_CONNECTION_FAILURE"))}_onIceStateChange(){if(this.destroyed)return;const x=this._pc.iceConnectionState,b=this._pc.iceGatheringState;this._debug("iceStateChange (connection: %s) (gathering: %s)",x,b),this.emit("iceStateChange",x,b),(x==="connected"||x==="completed")&&(this._pcReady=!0,this._maybeReady()),x==="failed"&&this.destroy(v(new Error("Ice connection failed."),"ERR_ICE_CONNECTION_FAILURE")),x==="closed"&&this.destroy(v(new Error("Ice connection closed."),"ERR_ICE_CONNECTION_CLOSED"))}getStats(x){const b=T=>(Object.prototype.toString.call(T.values)==="[object Array]"&&T.values.forEach(A=>{Object.assign(T,A)}),T);this._pc.getStats.length===0||this._isReactNativeWebrtc?this._pc.getStats().then(T=>{const A=[];T.forEach(M=>{A.push(b(M))}),x(null,A)},T=>x(T)):0<this._pc.getStats.length?this._pc.getStats(T=>{if(this.destroyed)return;const A=[];T.result().forEach(M=>{const P={};M.names().forEach(k=>{P[k]=M.stat(k)}),P.id=M.id,P.type=M.type,P.timestamp=M.timestamp,A.push(b(P))}),x(null,A)},T=>x(T)):x(null,[])}_maybeReady(){if(this._debug("maybeReady pc %s channel %s",this._pcReady,this._channelReady),this._connected||this._connecting||!this._pcReady||!this._channelReady)return;this._connecting=!0;const x=()=>{this.destroyed||this.getStats((b,T)=>{if(this.destroyed)return;b&&(T=[]);const A={},M={},P={};let k=!1;T.forEach(w=>{(w.type==="remotecandidate"||w.type==="remote-candidate")&&(A[w.id]=w),(w.type==="localcandidate"||w.type==="local-candidate")&&(M[w.id]=w),(w.type==="candidatepair"||w.type==="candidate-pair")&&(P[w.id]=w)});const S=w=>{k=!0;let z=M[w.localCandidateId];z&&(z.ip||z.address)?(this.localAddress=z.ip||z.address,this.localPort=+z.port):z&&z.ipAddress?(this.localAddress=z.ipAddress,this.localPort=+z.portNumber):typeof w.googLocalAddress=="string"&&(z=w.googLocalAddress.split(":"),this.localAddress=z[0],this.localPort=+z[1]),this.localAddress&&(this.localFamily=this.localAddress.includes(":")?"IPv6":"IPv4");let H=A[w.remoteCandidateId];H&&(H.ip||H.address)?(this.remoteAddress=H.ip||H.address,this.remotePort=+H.port):H&&H.ipAddress?(this.remoteAddress=H.ipAddress,this.remotePort=+H.portNumber):typeof w.googRemoteAddress=="string"&&(H=w.googRemoteAddress.split(":"),this.remoteAddress=H[0],this.remotePort=+H[1]),this.remoteAddress&&(this.remoteFamily=this.remoteAddress.includes(":")?"IPv6":"IPv4"),this._debug("connect local: %s:%s remote: %s:%s",this.localAddress,this.localPort,this.remoteAddress,this.remotePort)};if(T.forEach(w=>{w.type==="transport"&&w.selectedCandidatePairId&&S(P[w.selectedCandidatePairId]),(w.type==="googCandidatePair"&&w.googActiveConnection==="true"||(w.type==="candidatepair"||w.type==="candidate-pair")&&w.selected)&&S(w)}),!k&&(!Object.keys(P).length||Object.keys(M).length))return void setTimeout(x,100);if(this._connecting=!1,this._connected=!0,this._chunk){try{this.send(this._chunk)}catch(z){return this.destroy(v(z,"ERR_DATA_CHANNEL"))}this._chunk=null,this._debug('sent chunk from "write before connect"');const w=this._cb;this._cb=null,w(null)}typeof this._channel.bufferedAmountLowThreshold!="number"&&(this._interval=setInterval(()=>this._onInterval(),150),this._interval.unref&&this._interval.unref()),this._debug("connect"),this.emit("connect")})};x()}_onInterval(){this._cb&&this._channel&&!(this._channel.bufferedAmount>y)&&this._onChannelBufferedAmountLow()}_onSignalingStateChange(){this.destroyed||(this._pc.signalingState==="stable"&&(this._isNegotiating=!1,this._debug("flushing sender queue",this._sendersAwaitingStable),this._sendersAwaitingStable.forEach(x=>{this._pc.removeTrack(x),this._queuedNegotiation=!0}),this._sendersAwaitingStable=[],this._queuedNegotiation?(this._debug("flushing negotiation queue"),this._queuedNegotiation=!1,this._needsNegotiation()):(this._debug("negotiated"),this.emit("negotiated"))),this._debug("signalingStateChange %s",this._pc.signalingState),this.emit("signalingStateChange",this._pc.signalingState))}_onIceCandidate(x){this.destroyed||(x.candidate&&this.trickle?this.emit("signal",{type:"candidate",candidate:{candidate:x.candidate.candidate,sdpMLineIndex:x.candidate.sdpMLineIndex,sdpMid:x.candidate.sdpMid}}):!x.candidate&&!this._iceComplete&&(this._iceComplete=!0,this.emit("_iceComplete")),x.candidate&&this._startIceCompleteTimeout())}_onChannelMessage(x){if(this.destroyed)return;let b=x.data;b instanceof ArrayBuffer&&(b=E.from(b)),this.push(b)}_onChannelBufferedAmountLow(){if(!this.destroyed&&this._cb){this._debug("ending backpressure: bufferedAmount %d",this._channel.bufferedAmount);const x=this._cb;this._cb=null,x(null)}}_onChannelOpen(){this._connected||this.destroyed||(this._debug("on channel open"),this._channelReady=!0,this._maybeReady())}_onChannelClose(){this.destroyed||(this._debug("on channel close"),this.destroy())}_onTrack(x){this.destroyed||x.streams.forEach(b=>{this._debug("on track"),this.emit("track",x.track,b),this._remoteTracks.push({track:x.track,stream:b}),this._remoteStreams.some(T=>T.id===b.id)||(this._remoteStreams.push(b),g(()=>{this._debug("on stream"),this.emit("stream",b)}))})}_debug(){const x=[].slice.call(arguments);x[0]="["+this._id+"] "+x[0],h.apply(null,x)}}_.WEBRTC_SUPPORT=!!d(),_.config={iceServers:[{urls:["stun:stun.l.google.com:19302","stun:global.stun.twilio.com:3478"]}],sdpSemantics:"unified-plan"},_.channelConfig={},a.exports=_},{buffer:3,debug:4,"err-code":6,"get-browser-rtc":8,"queue-microtask":13,randombytes:14,"readable-stream":29}]},{},[])("/")})})(id);var xE=id.exports;const SE=yE(xE),Uc=0,Nc=1,rd=2,sd=(n,t)=>{Pt(n,Uc);const e=cS(t);ce(n,e)},od=(n,t,e)=>{Pt(n,Nc),ce(n,rS(t,e))},EE=(n,t,e)=>od(t,e,xe(n)),ad=(n,t,e,i)=>{try{eS(t,xe(n),e)}catch(r){i!=null&&i(r),console.error("Caught error while handling a Yjs update",r)}},bE=(n,t)=>{Pt(n,rd),ce(n,t)},ME=ad,wE=(n,t,e,i,r)=>{const s=kt(n);switch(s){case Uc:EE(n,t,e);break;case Nc:ad(n,e,i,r);break;case rd:ME(n,e,i,r);break;default:throw new Error("Unknown message type")}return s},La=3e4;class TE extends Ih{constructor(t){super(),this.doc=t,this.clientID=t.clientID,this.states=new Map,this.meta=new Map,this._checkInterval=setInterval(()=>{const e=On();this.getLocalState()!==null&&La/2<=e-this.meta.get(this.clientID).lastUpdated&&this.setLocalState(this.getLocalState());const i=[];this.meta.forEach((r,s)=>{s!==this.clientID&&La<=e-r.lastUpdated&&this.states.has(s)&&i.push(s)}),i.length>0&&Qa(this,i,"timeout")},Qe(La/10)),t.on("destroy",()=>{this.destroy()}),this.setLocalState({})}destroy(){this.emit("destroy",[this]),this.setLocalState(null),super.destroy(),clearInterval(this._checkInterval)}getLocalState(){return this.states.get(this.clientID)||null}setLocalState(t){const e=this.clientID,i=this.meta.get(e),r=i===void 0?0:i.clock+1,s=this.states.get(e);t===null?this.states.delete(e):this.states.set(e,t),this.meta.set(e,{clock:r,lastUpdated:On()});const a=[],o=[],c=[],h=[];t===null?h.push(e):s==null?t!=null&&a.push(e):(o.push(e),ir(s,t)||c.push(e)),(a.length>0||c.length>0||h.length>0)&&this.emit("change",[{added:a,updated:c,removed:h},"local"]),this.emit("update",[{added:a,updated:o,removed:h},"local"])}setLocalStateField(t,e){const i=this.getLocalState();i!==null&&this.setLocalState({...i,[t]:e})}getStates(){return this.states}}const Qa=(n,t,e)=>{const i=[];for(let r=0;r<t.length;r++){const s=t[r];if(n.states.has(s)){if(n.states.delete(s),s===n.clientID){const a=n.meta.get(s);n.meta.set(s,{clock:a.clock+1,lastUpdated:On()})}i.push(s)}}i.length>0&&(n.emit("change",[{added:[],updated:[],removed:i},e]),n.emit("update",[{added:[],updated:[],removed:i},e]))},ao=(n,t,e=n.states)=>{const i=t.length,r=Se();Pt(r,i);for(let s=0;s<i;s++){const a=t[s],o=e.get(a)||null,c=n.meta.get(a).clock;Pt(r,a),Pt(r,c),gn(r,JSON.stringify(o))}return oe(r)},AE=(n,t,e)=>{const i=yn(t),r=On(),s=[],a=[],o=[],c=[],h=kt(i);for(let d=0;d<h;d++){const l=kt(i);let f=kt(i);const g=JSON.parse(In(i)),v=n.meta.get(l),E=n.states.get(l),y=v===void 0?0:v.clock;(y<f||y===f&&g===null&&n.states.has(l))&&(g===null?l===n.clientID&&n.getLocalState()!=null?f++:n.states.delete(l):n.states.set(l,g),n.meta.set(l,{clock:f,lastUpdated:r}),v===void 0&&g!==null?s.push(l):v!==void 0&&g===null?c.push(l):g!==null&&(ir(g,E)||o.push(l),a.push(l)))}(s.length>0||o.length>0||c.length>0)&&n.emit("change",[{added:s,updated:o,removed:c},e]),(s.length>0||a.length>0||c.length>0)&&n.emit("update",[{added:s,updated:a,removed:c},e])},CE=(n,t)=>{const e=Xa(n).buffer,i=Xa(t).buffer;return crypto.subtle.importKey("raw",e,"PBKDF2",!1,["deriveKey"]).then(r=>crypto.subtle.deriveKey({name:"PBKDF2",salt:i,iterations:1e5,hash:"SHA-256"},r,{name:"AES-GCM",length:256},!0,["encrypt","decrypt"]))},cd=(n,t)=>{if(!t)return pc(n);const e=crypto.getRandomValues(new Uint8Array(12));return crypto.subtle.encrypt({name:"AES-GCM",iv:e},t,n).then(i=>{const r=Se();return gn(r,"AES-GCM"),ce(r,e),ce(r,new Uint8Array(i)),oe(r)})},RE=(n,t)=>{const e=Se();return dr(e,n),cd(oe(e),t)},ld=(n,t)=>{if(!t)return pc(n);const e=yn(n);In(e)!=="AES-GCM"&&Dy(tn("Unknown encryption algorithm"));const r=xe(e),s=xe(e);return crypto.subtle.decrypt({name:"AES-GCM",iv:r},t,s).then(a=>new Uint8Array(a))},LE=(n,t)=>ld(n,t).then(e=>pr(yn(new Uint8Array(e)))),We=Vx("y-webrtc"),ar=0,ud=3,Xr=1,Oc=4,co=new Map,Ei=new Map,hd=n=>{let t=!0;n.webrtcConns.forEach(e=>{e.synced||(t=!1)}),(!t&&n.synced||t&&!n.synced)&&(n.synced=t,n.provider.emit("synced",[{synced:t}]),We("synced ",Je,n.name,Ti," with all peers"))},fd=(n,t,e)=>{const i=yn(t),r=Se(),s=kt(i);if(n===void 0)return null;const a=n.awareness,o=n.doc;let c=!1;switch(s){case ar:{Pt(r,ar);const h=wE(i,r,o,n);h===Nc&&!n.synced&&e(),h===Uc&&(c=!0);break}case ud:Pt(r,Xr),ce(r,ao(a,Array.from(a.getStates().keys()))),c=!0;break;case Xr:AE(a,xe(i),n);break;case Oc:{const h=wi(i)===1,d=In(i);if(d!==n.peerId&&(n.bcConns.has(d)&&!h||!n.bcConns.has(d)&&h)){const l=[],f=[];h?(n.bcConns.add(d),f.push(d)):(n.bcConns.delete(d),l.push(d)),n.provider.emit("peers",[{added:f,removed:l,webrtcPeers:Array.from(n.webrtcConns.keys()),bcPeers:Array.from(n.bcConns)}]),dd(n)}break}default:return console.error("Unable to compute message"),r}return c?r:null},DE=(n,t)=>{const e=n.room;return We("received message from ",Je,n.remotePeerId,Ec," (",e.name,")",Ti,Ao),fd(e,t,()=>{n.synced=!0,We("synced ",Je,e.name,Ti," with ",Je,n.remotePeerId),hd(e)})},Da=(n,t)=>{We("send message to ",Je,n.remotePeerId,Ti,Ec," (",n.room.name,")",Ao);try{n.peer.send(oe(t))}catch{}},PE=(n,t)=>{We("broadcast message in ",Je,n.name,Ti),n.webrtcConns.forEach(e=>{try{e.peer.send(t)}catch{}})};class Yu{constructor(t,e,i,r){We("establishing connection to ",Je,i),this.room=r,this.remotePeerId=i,this.glareToken=void 0,this.closed=!1,this.connected=!1,this.synced=!1,this.peer=new SE({initiator:e,...r.provider.peerOpts}),this.peer.on("signal",s=>{this.glareToken===void 0&&(this.glareToken=Date.now()+Math.random()),Fc(t,r,{to:i,from:r.peerId,type:"signal",token:this.glareToken,signal:s})}),this.peer.on("connect",()=>{We("connected to ",Je,i),this.connected=!0;const a=r.provider.doc,o=r.awareness,c=Se();Pt(c,ar),sd(c,a),Da(this,c);const h=o.getStates();if(h.size>0){const d=Se();Pt(d,Xr),ce(d,ao(o,Array.from(h.keys()))),Da(this,d)}}),this.peer.on("close",()=>{this.connected=!1,this.closed=!0,r.webrtcConns.has(this.remotePeerId)&&(r.webrtcConns.delete(this.remotePeerId),r.provider.emit("peers",[{removed:[this.remotePeerId],added:[],webrtcPeers:Array.from(r.webrtcConns.keys()),bcPeers:Array.from(r.bcConns)}])),hd(r),this.peer.destroy(),We("closed connection to ",Je,i),tc(r)}),this.peer.on("error",s=>{We("Error in connection to ",Je,i,": ",s),tc(r)}),this.peer.on("data",s=>{const a=DE(this,s);a!==null&&Da(this,a)})}destroy(){this.peer.destroy()}}const qn=(n,t)=>cd(t,n.key).then(e=>n.mux(()=>_E(n.name,e))),$u=(n,t)=>{n.bcconnected&&qn(n,t),PE(n,t)},tc=n=>{co.forEach(t=>{t.connected&&(t.send({type:"subscribe",topics:[n.name]}),n.webrtcConns.size<n.provider.maxConns&&Fc(t,n,{type:"announce",from:n.peerId}))})},dd=n=>{if(n.provider.filterBcConns){const t=Se();Pt(t,Oc),kr(t,1),gn(t,n.peerId),qn(n,oe(t))}};class IE{constructor(t,e,i,r){this.peerId=Bh(),this.doc=t,this.awareness=e.awareness,this.provider=e,this.synced=!1,this.name=i,this.key=r,this.webrtcConns=new Map,this.bcConns=new Set,this.mux=vE(),this.bcconnected=!1,this._bcSubscriber=s=>ld(new Uint8Array(s),r).then(a=>this.mux(()=>{const o=fd(this,a,()=>{});o&&qn(this,oe(o))})),this._docUpdateHandler=(s,a)=>{const o=Se();Pt(o,ar),bE(o,s),$u(this,oe(o))},this._awarenessUpdateHandler=({added:s,updated:a,removed:o},c)=>{const h=s.concat(a).concat(o),d=Se();Pt(d,Xr),ce(d,ao(this.awareness,h)),$u(this,oe(d))},this._beforeUnloadHandler=()=>{Qa(this.awareness,[t.clientID],"window unload"),Ei.forEach(s=>{s.disconnect()})},typeof window<"u"?window.addEventListener("beforeunload",this._beforeUnloadHandler):typeof process<"u"&&process.on("exit",this._beforeUnloadHandler)}connect(){this.doc.on("update",this._docUpdateHandler),this.awareness.on("update",this._awarenessUpdateHandler),tc(this);const t=this.name;mE(t,this._bcSubscriber),this.bcconnected=!0,dd(this);const e=Se();Pt(e,ar),sd(e,this.doc),qn(this,oe(e));const i=Se();Pt(i,ar),od(i,this.doc),qn(this,oe(i));const r=Se();Pt(r,ud),qn(this,oe(r));const s=Se();Pt(s,Xr),ce(s,ao(this.awareness,[this.doc.clientID])),qn(this,oe(s))}disconnect(){co.forEach(e=>{e.connected&&e.send({type:"unsubscribe",topics:[this.name]})}),Qa(this.awareness,[this.doc.clientID],"disconnect");const t=Se();Pt(t,Oc),kr(t,0),gn(t,this.peerId),qn(this,oe(t)),gE(this.name,this._bcSubscriber),this.bcconnected=!1,this.doc.off("update",this._docUpdateHandler),this.awareness.off("update",this._awarenessUpdateHandler),this.webrtcConns.forEach(e=>e.destroy())}destroy(){this.disconnect(),typeof window<"u"?window.removeEventListener("beforeunload",this._beforeUnloadHandler):typeof process<"u"&&process.off("exit",this._beforeUnloadHandler)}}const UE=(n,t,e,i)=>{if(Ei.has(e))throw tn(`A Yjs Doc connected to room "${e}" already exists!`);const r=new IE(n,t,e,i);return Ei.set(e,r),r},Fc=(n,t,e)=>{t.key?RE(e,t.key).then(i=>{n.send({type:"publish",topic:t.name,data:Yh(i)})}):n.send({type:"publish",topic:t.name,data:e})};class NE extends fE{constructor(t){super(t),this.providers=new Set,this.on("connect",()=>{We(`connected (${t})`);const e=Array.from(Ei.keys());this.send({type:"subscribe",topics:e}),Ei.forEach(i=>Fc(this,i,{type:"announce",from:i.peerId}))}),this.on("message",e=>{switch(e.type){case"publish":{const i=e.topic,r=Ei.get(i);if(r==null||typeof i!="string")return;const s=a=>{const o=r.webrtcConns,c=r.peerId;if(a==null||a.from===c||a.to!==void 0&&a.to!==c||r.bcConns.has(a.from))return;const h=o.has(a.from)?()=>{}:()=>r.provider.emit("peers",[{removed:[],added:[a.from],webrtcPeers:Array.from(r.webrtcConns.keys()),bcPeers:Array.from(r.bcConns)}]);switch(a.type){case"announce":o.size<r.provider.maxConns&&(je(o,a.from,()=>new Yu(this,!0,a.from,r)),h());break;case"signal":if(a.signal.type==="offer"){const d=o.get(a.from);if(d){const l=a.token,f=d.glareToken;if(f&&f>l){We("offer rejected: ",a.from);return}d.glareToken=void 0}}if(a.signal.type==="answer"){We("offer answered by: ",a.from);const d=o.get(a.from);d.glareToken=void 0}a.to===c&&(je(o,a.from,()=>new Yu(this,!1,a.from,r)).peer.signal(a.signal),h());break}};r.key?typeof e.data=="string"&&LE($h(e.data),r.key).then(s):s(e.data)}}}),this.on("disconnect",()=>We(`disconnect (${t})`))}}const Pa=n=>{n.emit("status",[{connected:n.connected}])};class OE extends Ph{constructor(t,e,{signaling:i=["wss://y-webrtc-eu.fly.dev"],password:r=null,awareness:s=new TE(e),maxConns:a=20+Qe(Ry()*15),filterBcConns:o=!0,peerOpts:c={}}={}){super(),this.roomName=t,this.doc=e,this.filterBcConns=o,this.awareness=s,this.shouldConnect=!1,this.signalingUrls=i,this.signalingConns=[],this.maxConns=a,this.peerOpts=c,this.key=r?CE(r,t):pc(null),this.room=null,this.key.then(h=>{this.room=UE(e,this,t,h),this.shouldConnect?this.room.connect():this.room.disconnect(),Pa(this)}),this.connect(),this.destroy=this.destroy.bind(this),e.on("destroy",this.destroy)}get connected(){return this.room!==null&&this.shouldConnect}connect(){this.shouldConnect=!0,this.signalingUrls.forEach(t=>{const e=je(co,t,()=>new NE(t));this.signalingConns.push(e),e.providers.add(this)}),this.room&&(this.room.connect(),Pa(this))}disconnect(){this.shouldConnect=!1,this.signalingConns.forEach(t=>{t.providers.delete(this),t.providers.size===0&&(t.destroy(),co.delete(t.url))}),this.room&&(this.room.disconnect(),Pa(this))}destroy(){this.doc.off("destroy",this.destroy),this.key.then(()=>{this.room.destroy(),Ei.delete(this.roomName)}),super.destroy()}}const pd=new wr,FE=new OE("max-academy-3d-room",pd,{signaling:["wss://signaling.yjs.dev"]});pd.getMap("objects");FE.awareness;console.log("[VoxelParty] Scene initialized");console.log("[VoxelParty] Connected to room: max-academy-3d-room");function md(){requestAnimationFrame(md),ac.update(),Er.render(Kr,fr)}md();
