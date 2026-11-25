var Hf=Object.defineProperty;var Be=(i,t,e)=>()=>{if(e)throw e[0];try{return i&&(t=i(i=0)),t}catch(n){throw e=[n],n}};var Vf=(i,t)=>{for(var e in t)Hf(i,e,{get:t[e],enumerable:!0})};function Bs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function qe(i,t,e){return Math.max(t,Math.min(e,i))}function zp(i,t){return(i%t+t)%t}function Zo(i,t,e){return(1-e)*i+e*t}function iu(i){return(i&i-1)===0&&i!==0}function Rl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function nr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function hd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function La(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hp(){let i=La("canvas");return i.style.display="block",i}function cr(i){i in su||(su[i]=!0,console.warn(i))}function Ts(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function jo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Ko(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ia.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function tl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Di.fromArray(i,r);let o=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),l=t.dot(Di),c=e.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function cl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}function em(i,t,e,n,s,r,a,o){let l;if(t.side===an?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===_i,o),l===null)return null;pa.copy(o),pa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(pa);return c<e.near||c>e.far?null:{distance:c,point:pa.clone(),object:i}}function ma(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ps),i.getVertexPosition(l,ms),i.getVertexPosition(c,gs);let h=em(i,t,e,n,ps,ms,gs,fa);if(h){s&&(ha.fromBufferAttribute(s,o),ua.fromBufferAttribute(s,l),da.fromBufferAttribute(s,c),h.uv=Ms.getInterpolation(fa,ps,ms,gs,ha,ua,da,new ft)),r&&(ha.fromBufferAttribute(r,o),ua.fromBufferAttribute(r,l),da.fromBufferAttribute(r,c),h.uv1=Ms.getInterpolation(fa,ps,ms,gs,ha,ua,da,new ft),h.uv2=h.uv1),a&&(yu.fromBufferAttribute(a,o),xu.fromBufferAttribute(a,l),_u.fromBufferAttribute(a,c),h.normal=Ms.getInterpolation(fa,ps,ms,gs,yu,xu,_u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new L,materialIndex:0};Ms.getNormal(ps,ms,gs,u.normal),h.face=u}return h}function Is(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function en(i){let t={};for(let e=0;e<i.length;e++){let n=Is(i[e]);for(let s in n)t[s]=n[s]}return t}function nm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function dd(i){return i.getRenderTarget()===null?i.outputColorSpace:oe.workingColorSpace}function fd(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function lm(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,d=c.usage,f=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),c.onUploadCallback();let y;if(u instanceof Float32Array)y=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)y=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)y=i.SHORT;else if(u instanceof Uint32Array)y=i.UNSIGNED_INT;else if(u instanceof Int32Array)y=i.INT;else if(u instanceof Int8Array)y=i.BYTE;else if(u instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),f.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let y=0,m=g.length;y<m;y++){let p=g[y];e?i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(e?i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}function Vg(i,t,e,n,s,r,a){let o=new Pt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(m,p){let v=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?y(o,l):x&&x.isColor&&(y(x,1),v=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ka)?(h===void 0&&(h=new wt(new de(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Is(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=oe.getTransfer(x.colorSpace)!==fe,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new wt(new Wi(2,2),new In({name:"BackgroundMaterial",uniforms:Is(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=oe.getTransfer(x.colorSpace)!==fe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,p){m.getRGB(ya,dd(i)),n.buffers.color.setClear(ya.r,ya.g,ya.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(o,l)},render:g}}function Gg(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(I,F,$,J,Z){let Y=!1;if(a){let tt=y(J,$,F);c!==tt&&(c=tt,f(c.object)),Y=p(I,J,$,Z),Y&&v(I,J,$,Z)}else{let tt=F.wireframe===!0;(c.geometry!==J.id||c.program!==$.id||c.wireframe!==tt)&&(c.geometry=J.id,c.program=$.id,c.wireframe=tt,Y=!0)}Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,R(I,F,$,J),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(I){return n.isWebGL2?i.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?i.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function y(I,F,$){let J=$.wireframe===!0,Z=o[I.id];Z===void 0&&(Z={},o[I.id]=Z);let Y=Z[F.id];Y===void 0&&(Y={},Z[F.id]=Y);let tt=Y[J];return tt===void 0&&(tt=m(d()),Y[J]=tt),tt}function m(I){let F=[],$=[],J=[];for(let Z=0;Z<s;Z++)F[Z]=0,$[Z]=0,J[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:$,attributeDivisors:J,object:I,attributes:{},index:null}}function p(I,F,$,J){let Z=c.attributes,Y=F.attributes,tt=0,st=$.getAttributes();for(let ct in st)if(st[ct].location>=0){let j=Z[ct],lt=Y[ct];if(lt===void 0&&(ct==="instanceMatrix"&&I.instanceMatrix&&(lt=I.instanceMatrix),ct==="instanceColor"&&I.instanceColor&&(lt=I.instanceColor)),j===void 0||j.attribute!==lt||lt&&j.data!==lt.data)return!0;tt++}return c.attributesNum!==tt||c.index!==J}function v(I,F,$,J){let Z={},Y=F.attributes,tt=0,st=$.getAttributes();for(let ct in st)if(st[ct].location>=0){let j=Y[ct];j===void 0&&(ct==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),ct==="instanceColor"&&I.instanceColor&&(j=I.instanceColor));let lt={};lt.attribute=j,j&&j.data&&(lt.data=j.data),Z[ct]=lt,tt++}c.attributes=Z,c.attributesNum=tt,c.index=J}function x(){let I=c.newAttributes;for(let F=0,$=I.length;F<$;F++)I[F]=0}function S(I){C(I,0)}function C(I,F){let $=c.newAttributes,J=c.enabledAttributes,Z=c.attributeDivisors;$[I]=1,J[I]===0&&(i.enableVertexAttribArray(I),J[I]=1),Z[I]!==F&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,F),Z[I]=F)}function T(){let I=c.newAttributes,F=c.enabledAttributes;for(let $=0,J=F.length;$<J;$++)F[$]!==I[$]&&(i.disableVertexAttribArray($),F[$]=0)}function b(I,F,$,J,Z,Y,tt){tt===!0?i.vertexAttribIPointer(I,F,$,Z,Y):i.vertexAttribPointer(I,F,$,J,Z,Y)}function R(I,F,$,J){if(n.isWebGL2===!1&&(I.isInstancedMesh||J.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let Z=J.attributes,Y=$.getAttributes(),tt=F.defaultAttributeValues;for(let st in Y){let ct=Y[st];if(ct.location>=0){let q=Z[st];if(q===void 0&&(st==="instanceMatrix"&&I.instanceMatrix&&(q=I.instanceMatrix),st==="instanceColor"&&I.instanceColor&&(q=I.instanceColor)),q!==void 0){let j=q.normalized,lt=q.itemSize,Tt=e.get(q);if(Tt===void 0)continue;let St=Tt.buffer,zt=Tt.type,Vt=Tt.bytesPerElement,Dt=n.isWebGL2===!0&&(zt===i.INT||zt===i.UNSIGNED_INT||q.gpuType===Qu);if(q.isInterleavedBufferAttribute){let ne=q.data,z=ne.stride,Ke=q.offset;if(ne.isInstancedInterleavedBuffer){for(let Ct=0;Ct<ct.locationSize;Ct++)C(ct.location+Ct,ne.meshPerAttribute);I.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ct=0;Ct<ct.locationSize;Ct++)S(ct.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,St);for(let Ct=0;Ct<ct.locationSize;Ct++)b(ct.location+Ct,lt/ct.locationSize,zt,j,z*Vt,(Ke+lt/ct.locationSize*Ct)*Vt,Dt)}else{if(q.isInstancedBufferAttribute){for(let ne=0;ne<ct.locationSize;ne++)C(ct.location+ne,q.meshPerAttribute);I.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ne=0;ne<ct.locationSize;ne++)S(ct.location+ne);i.bindBuffer(i.ARRAY_BUFFER,St);for(let ne=0;ne<ct.locationSize;ne++)b(ct.location+ne,lt/ct.locationSize,zt,j,lt*Vt,lt/ct.locationSize*ne*Vt,Dt)}}else if(tt!==void 0){let j=tt[st];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(ct.location,j);break;case 3:i.vertexAttrib3fv(ct.location,j);break;case 4:i.vertexAttrib4fv(ct.location,j);break;default:i.vertexAttrib1fv(ct.location,j)}}}}T()}function _(){k();for(let I in o){let F=o[I];for(let $ in F){let J=F[$];for(let Z in J)g(J[Z].object),delete J[Z];delete F[$]}delete o[I]}}function M(I){if(o[I.id]===void 0)return;let F=o[I.id];for(let $ in F){let J=F[$];for(let Z in J)g(J[Z].object),delete J[Z];delete F[$]}delete o[I.id]}function D(I){for(let F in o){let $=o[F];if($[I.id]===void 0)continue;let J=$[I.id];for(let Z in J)g(J[Z].object),delete J[Z];delete $[I.id]}}function k(){K(),h=!0,c!==l&&(c=l,f(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:k,resetDefaultState:K,dispose:_,releaseStatesOfGeometry:M,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:S,disableUnusedAttributes:T}}function Wg(i,t,e,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,g;if(s)f=i,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function qg(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,S=a||t.has("OES_texture_float"),C=x&&S,T=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:T}}function Xg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Rn,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,x=v*4,S=p.clippingState||null;l.value=S,S=h(g,d,x,f);for(let C=0;C!==x;++C)S[C]=e[C];p.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,S=f;x!==y;++x,S+=4)a.copy(u[x]).applyMatrix4(v,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function $g(i){let t=new WeakMap;function e(a,o){return o===wl?a.mapping=Cs:o===El&&(a.mapping=Rs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===wl||o===El)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Dl(l.height/2);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}function Yg(i){let t=[],e=[],n=[],s=i,r=i-bs+1+vu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-bs?l=vu[a-i+bs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,y=3,m=2,p=1,v=new Float32Array(y*g*f),x=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let T=0;T<f;T++){let b=T%3*2/3-1,R=T>2?0:-1,_=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];v.set(_,y*g*T),x.set(d,m*g*T);let M=[T,T,T,T,T,T];S.set(M,p*g*T)}let C=new Xe;C.setAttribute("position",new mn(v,y)),C.setAttribute("uv",new mn(x,m)),C.setAttribute("faceIndex",new mn(S,p)),t.push(C),s>bs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Su(i,t,e){let n=new ei(i,t,e);return n.texture.mapping=Ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xa(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Zg(i,t,e){let n=new Float32Array(Fi),s=new L(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function wu(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Eu(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function xc(){return`

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
	`}function Jg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===wl||l===El,h=l===Cs||l===Rs;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Ha(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Ha(i));let d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function jg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Kg(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)t.remove(y[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let y=f[g];for(let m=0,p=y.length;m<p;m++)t.update(y[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,y=0;if(f!==null){let v=f.array;y=f.version;for(let x=0,S=v.length;x<S;x+=3){let C=v[x+0],T=v[x+1],b=v[x+2];d.push(C,T,T,b,b,C)}}else if(g!==void 0){let v=g.array;y=g.version;for(let x=0,S=v.length/3-1;x<S;x+=3){let C=x+0,T=x+1,b=x+2;d.push(C,T,T,b,b,C)}}else return;let m=new(hd(d)?Oa:ka)(d,1);m.version=y;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Qg(i,t,e,n){let s=n.isWebGL2,r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,g){i.drawElements(r,g,o,f*l),e.update(g,r,1)}function u(f,g,y){if(y===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,f*l,y),e.update(g,r,y)}function d(f,g,y){if(y===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<y;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,f,0,y);let p=0;for(let v=0;v<y;v++)p+=g[v];e.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function ty(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ey(i,t){return i[0]-t[0]}function ny(i,t){return Math.abs(t[1])-Math.abs(i[1])}function iy(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new Ve,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,y=r.get(h);if(y===void 0||y.count!==g){let I=function(){k.dispose(),r.delete(h),h.removeEventListener("dispose",I)};y!==void 0&&y.texture.dispose();let v=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],b=h.morphAttributes.color||[],R=0;v===!0&&(R=1),x===!0&&(R=2),S===!0&&(R=3);let _=h.attributes.position.count*R,M=1;_>t.maxTextureSize&&(M=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let D=new Float32Array(_*M*4*g),k=new Ua(D,_,M,g);k.type=mi,k.needsUpdate=!0;let K=R*4;for(let F=0;F<g;F++){let $=C[F],J=T[F],Z=b[F],Y=_*M*4*F;for(let tt=0;tt<$.count;tt++){let st=tt*K;v===!0&&(a.fromBufferAttribute($,tt),D[Y+st+0]=a.x,D[Y+st+1]=a.y,D[Y+st+2]=a.z,D[Y+st+3]=0),x===!0&&(a.fromBufferAttribute(J,tt),D[Y+st+4]=a.x,D[Y+st+5]=a.y,D[Y+st+6]=a.z,D[Y+st+7]=0),S===!0&&(a.fromBufferAttribute(Z,tt),D[Y+st+8]=a.x,D[Y+st+9]=a.y,D[Y+st+10]=a.z,D[Y+st+11]=Z.itemSize===4?a.w:1)}}y={count:g,texture:k,size:new ft(_,M)},r.set(h,y),h.addEventListener("dispose",I)}let m=0;for(let v=0;v<d.length;v++)m+=d[v];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",y.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}else{let f=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<f;x++){let S=g[x];S[0]=x,S[1]=d[x]}g.sort(ny);for(let x=0;x<8;x++)x<f&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(ey);let y=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let S=o[x],C=S[0],T=S[1];C!==Number.MAX_SAFE_INTEGER&&T?(y&&h.getAttribute("morphTarget"+x)!==y[C]&&h.setAttribute("morphTarget"+x,y[C]),m&&h.getAttribute("morphNormal"+x)!==m[C]&&h.setAttribute("morphNormal"+x,m[C]),s[x]=T,p+=T):(y&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let v=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function sy(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}function zs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Tu[s];if(r===void 0&&(r=new Float32Array(s),Tu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function to(i,t){let e=Au[t];e===void 0&&(e=new Int32Array(t),Au[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ry(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ay(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function oy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function ly(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function cy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Pu.set(n),i.uniformMatrix2fv(this.addr,!1,Pu),Ue(e,n)}}function hy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Ru.set(n),i.uniformMatrix3fv(this.addr,!1,Ru),Ue(e,n)}}function uy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Cu.set(n),i.uniformMatrix4fv(this.addr,!1,Cu),Ue(e,n)}}function dy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function fy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function py(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function my(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function gy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function yy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function xy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function _y(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function vy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?md:pd;e.setTexture2D(t||r,s)}function My(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||yd,s)}function by(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||xd,s)}function Sy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||gd,s)}function wy(i){switch(i){case 5126:return ry;case 35664:return ay;case 35665:return oy;case 35666:return ly;case 35674:return cy;case 35675:return hy;case 35676:return uy;case 5124:case 35670:return dy;case 35667:case 35671:return fy;case 35668:case 35672:return py;case 35669:case 35673:return my;case 5125:return gy;case 36294:return yy;case 36295:return xy;case 36296:return _y;case 35678:case 36198:case 36298:case 36306:case 35682:return vy;case 35679:case 36299:case 36307:return My;case 35680:case 36300:case 36308:case 36293:return by;case 36289:case 36303:case 36311:case 36292:return Sy}}function Ey(i,t){i.uniform1fv(this.addr,t)}function Ty(i,t){let e=zs(t,this.size,2);i.uniform2fv(this.addr,e)}function Ay(i,t){let e=zs(t,this.size,3);i.uniform3fv(this.addr,e)}function Cy(i,t){let e=zs(t,this.size,4);i.uniform4fv(this.addr,e)}function Ry(i,t){let e=zs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Py(i,t){let e=zs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ly(i,t){let e=zs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Iy(i,t){i.uniform1iv(this.addr,t)}function Dy(i,t){i.uniform2iv(this.addr,t)}function Uy(i,t){i.uniform3iv(this.addr,t)}function Ny(i,t){i.uniform4iv(this.addr,t)}function ky(i,t){i.uniform1uiv(this.addr,t)}function Oy(i,t){i.uniform2uiv(this.addr,t)}function Fy(i,t){i.uniform3uiv(this.addr,t)}function By(i,t){i.uniform4uiv(this.addr,t)}function zy(i,t,e){let n=this.cache,s=t.length,r=to(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||pd,r[a])}function Hy(i,t,e){let n=this.cache,s=t.length,r=to(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||yd,r[a])}function Vy(i,t,e){let n=this.cache,s=t.length,r=to(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||xd,r[a])}function Gy(i,t,e){let n=this.cache,s=t.length,r=to(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||gd,r[a])}function Wy(i){switch(i){case 5126:return Ey;case 35664:return Ty;case 35665:return Ay;case 35666:return Cy;case 35674:return Ry;case 35675:return Py;case 35676:return Ly;case 5124:case 35670:return Iy;case 35667:case 35671:return Dy;case 35668:case 35672:return Uy;case 35669:case 35673:return Ny;case 5125:return ky;case 36294:return Oy;case 36295:return Fy;case 36296:return By;case 35678:case 36198:case 36298:case 36306:case 35682:return zy;case 35679:case 36299:case 36307:return Hy;case 35680:case 36300:case 36308:case 36293:return Vy;case 36289:case 36303:case 36311:case 36292:return Gy}}function Lu(i,t){i.seq.push(t),i.map[t.id]=t}function qy(i,t,e){let n=i.name,s=n.length;for(yl.lastIndex=0;;){let r=yl.exec(n),a=yl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Lu(e,c===void 0?new Ul(o,i,t):new Nl(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new kl(o),Lu(e,u)),e=u}}}function Iu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}function Yy(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Zy(i){let t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(i),n;switch(t===e?n="":t===Ra&&e===Ca?n="LinearDisplayP3ToLinearSRGB":t===Ca&&e===Ra&&(n="LinearSRGBToLinearDisplayP3"),i){case ti:case Qa:return[n,"LinearTransferOETF"];case pe:case yc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Du(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Yy(i.getShaderSource(t),a)}else return s}function Jy(i,t){let e=Zy(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function jy(i,t){let e;switch(t){case mp:e="Linear";break;case gp:e="Reinhard";break;case yp:e="OptimizedCineon";break;case xp:e="ACESFilmic";break;case vp:e="AgX";break;case _p:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ky(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ss).join(`
`)}function Qy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ss).join(`
`)}function tx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ex(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ss(i){return i!==""}function Uu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Ol(i){return i.replace(nx,sx)}function sx(i,t){let e=Wt[t];if(e===void 0){let n=ix.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ol(e)}function ku(i){return i.replace(rx,ax)}function ax(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ou(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ox(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ju?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===fc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(t="SHADOWMAP_TYPE_VSM"),t}function lx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Cs:case Rs:t="ENVMAP_TYPE_CUBE";break;case Ka:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cx(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Rs&&(t="ENVMAP_MODE_REFRACTION"),t}function hx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case mc:t="ENVMAP_BLENDING_MULTIPLY";break;case fp:t="ENVMAP_BLENDING_MIX";break;case pp:t="ENVMAP_BLENDING_ADD";break}return t}function ux(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function dx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=ox(e),c=lx(e),h=cx(e),u=hx(e),d=ux(e),f=e.isWebGL2?"":Ky(e),g=Qy(e),y=tx(r),m=s.createProgram(),p,v,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Ss).join(`
`),p.length>0&&(p+=`
`),v=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Ss).join(`
`),v.length>0&&(v+=`
`)):(p=[Ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),v=[f,Ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yi?"#define TONE_MAPPING":"",e.toneMapping!==yi?Wt.tonemapping_pars_fragment:"",e.toneMapping!==yi?jy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Jy("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ss).join(`
`)),a=Ol(a),a=Uu(a,e),a=Nu(a,e),o=Ol(o),o=Uu(o,e),o=Nu(o,e),a=ku(a),o=ku(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let S=x+p+a,C=x+v+o,T=Iu(s,s.VERTEX_SHADER,S),b=Iu(s,s.FRAGMENT_SHADER,C);s.attachShader(m,T),s.attachShader(m,b),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function R(k){if(i.debug.checkShaderErrors){let K=s.getProgramInfoLog(m).trim(),I=s.getShaderInfoLog(T).trim(),F=s.getShaderInfoLog(b).trim(),$=!0,J=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,T,b);else{let Z=Du(s,T,"vertex"),Y=Du(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+Z+`
`+Y)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(I===""||F==="")&&(J=!1);J&&(k.diagnostics={runnable:$,programLog:K,vertexShader:{log:I,prefix:p},fragmentShader:{log:F,prefix:v}})}s.deleteShader(T),s.deleteShader(b),_=new As(s,m),M=ex(s,m)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(m,Xy)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$y++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=b,this}function px(i,t,e,n,s,r,a){let o=new xr,l=new Fl,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(_){return _===0?"uv":`uv${_}`}function m(_,M,D,k,K){let I=k.fog,F=K.geometry,$=_.isMeshStandardMaterial?k.environment:null,J=(_.isMeshStandardMaterial?e:t).get(_.envMap||$),Z=J&&J.mapping===Ka?J.image.height:null,Y=g[_.type];_.precision!==null&&(f=s.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let tt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,st=tt!==void 0?tt.length:0,ct=0;F.morphAttributes.position!==void 0&&(ct=1),F.morphAttributes.normal!==void 0&&(ct=2),F.morphAttributes.color!==void 0&&(ct=3);let q,j,lt,Tt;if(Y){let Qe=Fn[Y];q=Qe.vertexShader,j=Qe.fragmentShader}else q=_.vertexShader,j=_.fragmentShader,l.update(_),lt=l.getVertexShaderID(_),Tt=l.getFragmentShaderID(_);let St=i.getRenderTarget(),zt=K.isInstancedMesh===!0,Vt=K.isBatchedMesh===!0,Dt=!!_.map,ne=!!_.matcap,z=!!J,Ke=!!_.aoMap,Ct=!!_.lightMap,Ft=!!_.bumpMap,_t=!!_.normalMap,ye=!!_.displacementMap,qt=!!_.emissiveMap,A=!!_.metalnessMap,w=!!_.roughnessMap,V=_.anisotropy>0,it=_.clearcoat>0,nt=_.iridescence>0,rt=_.sheen>0,vt=_.transmission>0,dt=V&&!!_.anisotropyMap,gt=it&&!!_.clearcoatMap,It=it&&!!_.clearcoatNormalMap,Xt=it&&!!_.clearcoatRoughnessMap,et=nt&&!!_.iridescenceMap,ae=nt&&!!_.iridescenceThicknessMap,jt=rt&&!!_.sheenColorMap,Ot=rt&&!!_.sheenRoughnessMap,At=!!_.specularMap,yt=!!_.specularColorMap,Gt=!!_.specularIntensityMap,re=vt&&!!_.transmissionMap,Me=vt&&!!_.thicknessMap,Yt=!!_.gradientMap,at=!!_.alphaMap,P=_.alphaTest>0,ht=!!_.alphaHash,ut=!!_.extensions,Ut=!!F.attributes.uv1,Rt=!!F.attributes.uv2,ce=!!F.attributes.uv3,he=yi;return _.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(he=i.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:_.type,shaderName:_.name,vertexShader:q,fragmentShader:j,defines:_.defines,customVertexShaderID:lt,customFragmentShaderID:Tt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Vt,instancing:zt,instancingColor:zt&&K.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:St===null?i.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:ti,map:Dt,matcap:ne,envMap:z,envMapMode:z&&J.mapping,envMapCubeUVHeight:Z,aoMap:Ke,lightMap:Ct,bumpMap:Ft,normalMap:_t,displacementMap:d&&ye,emissiveMap:qt,normalMapObjectSpace:_t&&_.normalMapType===Ip,normalMapTangentSpace:_t&&_.normalMapType===od,metalnessMap:A,roughnessMap:w,anisotropy:V,anisotropyMap:dt,clearcoat:it,clearcoatMap:gt,clearcoatNormalMap:It,clearcoatRoughnessMap:Xt,iridescence:nt,iridescenceMap:et,iridescenceThicknessMap:ae,sheen:rt,sheenColorMap:jt,sheenRoughnessMap:Ot,specularMap:At,specularColorMap:yt,specularIntensityMap:Gt,transmission:vt,transmissionMap:re,thicknessMap:Me,gradientMap:Yt,opaque:_.transparent===!1&&_.blending===Es,alphaMap:at,alphaTest:P,alphaHash:ht,combine:_.combine,mapUv:Dt&&y(_.map.channel),aoMapUv:Ke&&y(_.aoMap.channel),lightMapUv:Ct&&y(_.lightMap.channel),bumpMapUv:Ft&&y(_.bumpMap.channel),normalMapUv:_t&&y(_.normalMap.channel),displacementMapUv:ye&&y(_.displacementMap.channel),emissiveMapUv:qt&&y(_.emissiveMap.channel),metalnessMapUv:A&&y(_.metalnessMap.channel),roughnessMapUv:w&&y(_.roughnessMap.channel),anisotropyMapUv:dt&&y(_.anisotropyMap.channel),clearcoatMapUv:gt&&y(_.clearcoatMap.channel),clearcoatNormalMapUv:It&&y(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&y(_.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&y(_.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&y(_.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&y(_.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&y(_.sheenRoughnessMap.channel),specularMapUv:At&&y(_.specularMap.channel),specularColorMapUv:yt&&y(_.specularColorMap.channel),specularIntensityMapUv:Gt&&y(_.specularIntensityMap.channel),transmissionMapUv:re&&y(_.transmissionMap.channel),thicknessMapUv:Me&&y(_.thicknessMap.channel),alphaMapUv:at&&y(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(_t||V),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Ut,vertexUv2s:Rt,vertexUv3s:ce,pointsUvs:K.isPoints===!0&&!!F.attributes.uv&&(Dt||at),fog:!!I,useFog:_.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:K.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:ct,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Dt&&_.map.isVideoTexture===!0&&oe.getTransfer(_.map.colorSpace)===fe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===He,flipSided:_.side===an,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:ut&&_.extensions.derivatives===!0,extensionFragDepth:ut&&_.extensions.fragDepth===!0,extensionDrawBuffers:ut&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:ut&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ut&&_.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)M.push(D),M.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(v(M,_),x(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function v(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function x(_,M){o.disableAll(),M.isWebGL2&&o.enable(0),M.supportsVertexTextures&&o.enable(1),M.instancing&&o.enable(2),M.instancingColor&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),_.push(o.mask)}function S(_){let M=g[_.type],D;if(M){let k=Fn[M];D=im.clone(k.uniforms)}else D=_.uniforms;return D}function C(_,M){let D;for(let k=0,K=c.length;k<K;k++){let I=c[k];if(I.cacheKey===M){D=I,++D.usedTimes;break}}return D===void 0&&(D=new dx(i,M,_,r),c.push(D)),D}function T(_){if(--_.usedTimes===0){let M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),_.destroy()}}function b(_){l.remove(_)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:C,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:R}}function mx(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function gx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Fu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Bu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,y,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=y,p.group=m),t++,p}function o(u,d,f,g,y,m){let p=a(u,d,f,g,y,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,y,m){let p=a(u,d,f,g,y,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||gx),n.length>1&&n.sort(d||Fu),s.length>1&&s.sort(d||Fu)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function yx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Bu,i.set(n,[a])):s>=r.length?(a=new Bu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function xx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Pt};break;case"SpotLight":e={position:new L,direction:new L,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function _x(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}function Mx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function bx(i,t){let e=new xx,n=_x(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new L);let r=new L,a=new ge,o=new ge;function l(h,u){let d=0,f=0,g=0;for(let k=0;k<9;k++)s.probe[k].set(0,0,0);let y=0,m=0,p=0,v=0,x=0,S=0,C=0,T=0,b=0,R=0,_=0;h.sort(Mx);let M=u===!0?Math.PI:1;for(let k=0,K=h.length;k<K;k++){let I=h[k],F=I.color,$=I.intensity,J=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=F.r*$*M,f+=F.g*$*M,g+=F.b*$*M;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(I.sh.coefficients[Y],$);_++}else if(I.isDirectionalLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*M),I.castShadow){let tt=I.shadow,st=n.get(I);st.shadowBias=tt.bias,st.shadowNormalBias=tt.normalBias,st.shadowRadius=tt.radius,st.shadowMapSize=tt.mapSize,s.directionalShadow[y]=st,s.directionalShadowMap[y]=Z,s.directionalShadowMatrix[y]=I.shadow.matrix,S++}s.directional[y]=Y,y++}else if(I.isSpotLight){let Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(F).multiplyScalar($*M),Y.distance=J,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,s.spot[p]=Y;let tt=I.shadow;if(I.map&&(s.spotLightMap[b]=I.map,b++,tt.updateMatrices(I),I.castShadow&&R++),s.spotLightMatrix[p]=tt.matrix,I.castShadow){let st=n.get(I);st.shadowBias=tt.bias,st.shadowNormalBias=tt.normalBias,st.shadowRadius=tt.radius,st.shadowMapSize=tt.mapSize,s.spotShadow[p]=st,s.spotShadowMap[p]=Z,T++}p++}else if(I.isRectAreaLight){let Y=e.get(I);Y.color.copy(F).multiplyScalar($),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),s.rectArea[v]=Y,v++}else if(I.isPointLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*M),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){let tt=I.shadow,st=n.get(I);st.shadowBias=tt.bias,st.shadowNormalBias=tt.normalBias,st.shadowRadius=tt.radius,st.shadowMapSize=tt.mapSize,st.shadowCameraNear=tt.camera.near,st.shadowCameraFar=tt.camera.far,s.pointShadow[m]=st,s.pointShadowMap[m]=Z,s.pointShadowMatrix[m]=I.shadow.matrix,C++}s.point[m]=Y,m++}else if(I.isHemisphereLight){let Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar($*M),Y.groundColor.copy(I.groundColor).multiplyScalar($*M),s.hemi[x]=Y,x++}}v>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ot.LTC_FLOAT_1,s.rectAreaLTC2=ot.LTC_FLOAT_2):(s.rectAreaLTC1=ot.LTC_HALF_1,s.rectAreaLTC2=ot.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ot.LTC_FLOAT_1,s.rectAreaLTC2=ot.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ot.LTC_HALF_1,s.rectAreaLTC2=ot.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let D=s.hash;(D.directionalLength!==y||D.pointLength!==m||D.spotLength!==p||D.rectAreaLength!==v||D.hemiLength!==x||D.numDirectionalShadows!==S||D.numPointShadows!==C||D.numSpotShadows!==T||D.numSpotMaps!==b||D.numLightProbes!==_)&&(s.directional.length=y,s.spot.length=p,s.rectArea.length=v,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=T+b-R,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=R,s.numLightProbes=_,D.directionalLength=y,D.pointLength=m,D.spotLength=p,D.rectAreaLength=v,D.hemiLength=x,D.numDirectionalShadows=S,D.numPointShadows=C,D.numSpotShadows=T,D.numSpotMaps=b,D.numLightProbes=_,s.version=vx++)}function c(h,u){let d=0,f=0,g=0,y=0,m=0,p=u.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){let S=h[v];if(S.isDirectionalLight){let C=s.directional[d];C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),d++}else if(S.isSpotLight){let C=s.spot[g];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),g++}else if(S.isRectAreaLight){let C=s.rectArea[y];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(p),o.identity(),a.copy(S.matrixWorld),a.premultiply(p),o.extractRotation(a),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),y++}else if(S.isPointLight){let C=s.point[f];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){let C=s.hemi[m];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function zu(i,t){let e=new bx(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Sx(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),l;return o===void 0?(l=new zu(i,t),e.set(r,[l])):a>=o.length?(l=new zu(i,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:n,dispose:s}}function Tx(i,t,e){let n=new _r,s=new ft,r=new ft,a=new Ve,o=new zl({depthPacking:Lp}),l=new Hl,c={},h=e.maxTextureSize,u={[_i]:an,[an]:_i,[He]:He},d=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:wx,fragmentShader:Ex}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Xe;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new wt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ju;let p=this.type;this.render=function(T,b,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let _=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),k=i.state;k.setBlending(gi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let K=p!==Kn&&this.type===Kn,I=p===Kn&&this.type!==Kn;for(let F=0,$=T.length;F<$;F++){let J=T[F],Z=J.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let Y=Z.getFrameExtents();if(s.multiply(Y),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,Z.mapSize.y=r.y)),Z.map===null||K===!0||I===!0){let st=this.type!==Kn?{minFilter:nn,magFilter:nn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new ei(s.x,s.y,st),Z.map.texture.name=J.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let tt=Z.getViewportCount();for(let st=0;st<tt;st++){let ct=Z.getViewport(st);a.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),k.viewport(a),Z.updateMatrices(J,st),n=Z.getFrustum(),S(b,R,Z.camera,J,this.type)}Z.isPointLightShadow!==!0&&this.type===Kn&&v(Z,R),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(_,M,D)};function v(T,b){let R=t.update(y);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ei(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(b,null,R,d,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(b,null,R,f,y,null)}function x(T,b,R,_){let M=null,D=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)M=D;else if(M=R.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let k=M.uuid,K=b.uuid,I=c[k];I===void 0&&(I={},c[k]=I);let F=I[K];F===void 0&&(F=M.clone(),I[K]=F,b.addEventListener("dispose",C)),M=F}if(M.visible=b.visible,M.wireframe=b.wireframe,_===Kn?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:u[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let k=i.properties.get(M);k.light=R}return M}function S(T,b,R,_,M){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Kn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);let K=t.update(T),I=T.material;if(Array.isArray(I)){let F=K.groups;for(let $=0,J=F.length;$<J;$++){let Z=F[$],Y=I[Z.materialIndex];if(Y&&Y.visible){let tt=x(T,Y,_,M);T.onBeforeShadow(i,T,b,R,K,tt,Z),i.renderBufferDirect(R,null,K,tt,T,Z),T.onAfterShadow(i,T,b,R,K,tt,Z)}}}else if(I.visible){let F=x(T,I,_,M);T.onBeforeShadow(i,T,b,R,K,F,null),i.renderBufferDirect(R,null,K,F,T,null),T.onAfterShadow(i,T,b,R,K,F,null)}}let k=T.children;for(let K=0,I=k.length;K<I;K++)S(k[K],b,R,_,M)}function C(T){T.target.removeEventListener("dispose",C);for(let R in c){let _=c[R],M=T.target.uuid;M in _&&(_[M].dispose(),delete _[M])}}}function Ax(i,t,e){let n=e.isWebGL2;function s(){let P=!1,ht=new Ve,ut=null,Ut=new Ve(0,0,0,0);return{setMask:function(Rt){ut!==Rt&&!P&&(i.colorMask(Rt,Rt,Rt,Rt),ut=Rt)},setLocked:function(Rt){P=Rt},setClear:function(Rt,ce,he,Oe,Qe){Qe===!0&&(Rt*=Oe,ce*=Oe,he*=Oe),ht.set(Rt,ce,he,Oe),Ut.equals(ht)===!1&&(i.clearColor(Rt,ce,he,Oe),Ut.copy(ht))},reset:function(){P=!1,ut=null,Ut.set(-1,0,0,0)}}}function r(){let P=!1,ht=null,ut=null,Ut=null;return{setTest:function(Rt){Rt?Vt(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(Rt){ht!==Rt&&!P&&(i.depthMask(Rt),ht=Rt)},setFunc:function(Rt){if(ut!==Rt){switch(Rt){case op:i.depthFunc(i.NEVER);break;case lp:i.depthFunc(i.ALWAYS);break;case cp:i.depthFunc(i.LESS);break;case wa:i.depthFunc(i.LEQUAL);break;case hp:i.depthFunc(i.EQUAL);break;case up:i.depthFunc(i.GEQUAL);break;case pc:i.depthFunc(i.GREATER);break;case dp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=Rt}},setLocked:function(Rt){P=Rt},setClear:function(Rt){Ut!==Rt&&(i.clearDepth(Rt),Ut=Rt)},reset:function(){P=!1,ht=null,ut=null,Ut=null}}}function a(){let P=!1,ht=null,ut=null,Ut=null,Rt=null,ce=null,he=null,Oe=null,Qe=null;return{setTest:function(ue){P||(ue?Vt(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(ue){ht!==ue&&!P&&(i.stencilMask(ue),ht=ue)},setFunc:function(ue,tn,On){(ut!==ue||Ut!==tn||Rt!==On)&&(i.stencilFunc(ue,tn,On),ut=ue,Ut=tn,Rt=On)},setOp:function(ue,tn,On){(ce!==ue||he!==tn||Oe!==On)&&(i.stencilOp(ue,tn,On),ce=ue,he=tn,Oe=On)},setLocked:function(ue){P=ue},setClear:function(ue){Qe!==ue&&(i.clearStencil(ue),Qe=ue)},reset:function(){P=!1,ht=null,ut=null,Ut=null,Rt=null,ce=null,he=null,Oe=null,Qe=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,y=[],m=null,p=!1,v=null,x=null,S=null,C=null,T=null,b=null,R=null,_=new Pt(0,0,0),M=0,D=!1,k=null,K=null,I=null,F=null,$=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,Y=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(tt)[1]),Z=Y>=1):tt.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),Z=Y>=2);let st=null,ct={},q=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),lt=new Ve().fromArray(q),Tt=new Ve().fromArray(j);function St(P,ht,ut,Ut){let Rt=new Uint8Array(4),ce=i.createTexture();i.bindTexture(P,ce),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let he=0;he<ut;he++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(ht,0,i.RGBA,1,1,Ut,0,i.RGBA,i.UNSIGNED_BYTE,Rt):i.texImage2D(ht+he,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Rt);return ce}let zt={};zt[i.TEXTURE_2D]=St(i.TEXTURE_2D,i.TEXTURE_2D,1),zt[i.TEXTURE_CUBE_MAP]=St(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(zt[i.TEXTURE_2D_ARRAY]=St(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),zt[i.TEXTURE_3D]=St(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Vt(i.DEPTH_TEST),l.setFunc(wa),qt(!1),A(vh),Vt(i.CULL_FACE),_t(gi);function Vt(P){d[P]!==!0&&(i.enable(P),d[P]=!0)}function Dt(P){d[P]!==!1&&(i.disable(P),d[P]=!1)}function ne(P,ht){return f[P]!==ht?(i.bindFramebuffer(P,ht),f[P]=ht,n&&(P===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ht),P===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ht)),!0):!1}function z(P,ht){let ut=y,Ut=!1;if(P)if(ut=g.get(ht),ut===void 0&&(ut=[],g.set(ht,ut)),P.isWebGLMultipleRenderTargets){let Rt=P.texture;if(ut.length!==Rt.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,he=Rt.length;ce<he;ce++)ut[ce]=i.COLOR_ATTACHMENT0+ce;ut.length=Rt.length,Ut=!0}}else ut[0]!==i.COLOR_ATTACHMENT0&&(ut[0]=i.COLOR_ATTACHMENT0,Ut=!0);else ut[0]!==i.BACK&&(ut[0]=i.BACK,Ut=!0);Ut&&(e.isWebGL2?i.drawBuffers(ut):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ut))}function Ke(P){return m!==P?(i.useProgram(P),m=P,!0):!1}let Ct={[Oi]:i.FUNC_ADD,[Xf]:i.FUNC_SUBTRACT,[$f]:i.FUNC_REVERSE_SUBTRACT};if(n)Ct[Sh]=i.MIN,Ct[wh]=i.MAX;else{let P=t.get("EXT_blend_minmax");P!==null&&(Ct[Sh]=P.MIN_EXT,Ct[wh]=P.MAX_EXT)}let Ft={[Yf]:i.ZERO,[Zf]:i.ONE,[Jf]:i.SRC_COLOR,[bl]:i.SRC_ALPHA,[np]:i.SRC_ALPHA_SATURATE,[tp]:i.DST_COLOR,[Kf]:i.DST_ALPHA,[jf]:i.ONE_MINUS_SRC_COLOR,[Sl]:i.ONE_MINUS_SRC_ALPHA,[ep]:i.ONE_MINUS_DST_COLOR,[Qf]:i.ONE_MINUS_DST_ALPHA,[ip]:i.CONSTANT_COLOR,[sp]:i.ONE_MINUS_CONSTANT_COLOR,[rp]:i.CONSTANT_ALPHA,[ap]:i.ONE_MINUS_CONSTANT_ALPHA};function _t(P,ht,ut,Ut,Rt,ce,he,Oe,Qe,ue){if(P===gi){p===!0&&(Dt(i.BLEND),p=!1);return}if(p===!1&&(Vt(i.BLEND),p=!0),P!==qf){if(P!==v||ue!==D){if((x!==Oi||T!==Oi)&&(i.blendEquation(i.FUNC_ADD),x=Oi,T=Oi),ue)switch(P){case Es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pr:i.blendFunc(i.ONE,i.ONE);break;case Mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,C=null,b=null,R=null,_.set(0,0,0),M=0,v=P,D=ue}return}Rt=Rt||ht,ce=ce||ut,he=he||Ut,(ht!==x||Rt!==T)&&(i.blendEquationSeparate(Ct[ht],Ct[Rt]),x=ht,T=Rt),(ut!==S||Ut!==C||ce!==b||he!==R)&&(i.blendFuncSeparate(Ft[ut],Ft[Ut],Ft[ce],Ft[he]),S=ut,C=Ut,b=ce,R=he),(Oe.equals(_)===!1||Qe!==M)&&(i.blendColor(Oe.r,Oe.g,Oe.b,Qe),_.copy(Oe),M=Qe),v=P,D=!1}function ye(P,ht){P.side===He?Dt(i.CULL_FACE):Vt(i.CULL_FACE);let ut=P.side===an;ht&&(ut=!ut),qt(ut),P.blending===Es&&P.transparent===!1?_t(gi):_t(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);let Ut=P.stencilWrite;c.setTest(Ut),Ut&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),V(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Vt(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function qt(P){k!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),k=P)}function A(P){P!==Gf?(Vt(i.CULL_FACE),P!==K&&(P===vh?i.cullFace(i.BACK):P===Wf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),K=P}function w(P){P!==I&&(Z&&i.lineWidth(P),I=P)}function V(P,ht,ut){P?(Vt(i.POLYGON_OFFSET_FILL),(F!==ht||$!==ut)&&(i.polygonOffset(ht,ut),F=ht,$=ut)):Dt(i.POLYGON_OFFSET_FILL)}function it(P){P?Vt(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function nt(P){P===void 0&&(P=i.TEXTURE0+J-1),st!==P&&(i.activeTexture(P),st=P)}function rt(P,ht,ut){ut===void 0&&(st===null?ut=i.TEXTURE0+J-1:ut=st);let Ut=ct[ut];Ut===void 0&&(Ut={type:void 0,texture:void 0},ct[ut]=Ut),(Ut.type!==P||Ut.texture!==ht)&&(st!==ut&&(i.activeTexture(ut),st=ut),i.bindTexture(P,ht||zt[P]),Ut.type=P,Ut.texture=ht)}function vt(){let P=ct[st];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function dt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function gt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function It(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Xt(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function et(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function jt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ot(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function yt(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Gt(P){lt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),lt.copy(P))}function re(P){Tt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Tt.copy(P))}function Me(P,ht){let ut=u.get(ht);ut===void 0&&(ut=new WeakMap,u.set(ht,ut));let Ut=ut.get(P);Ut===void 0&&(Ut=i.getUniformBlockIndex(ht,P.name),ut.set(P,Ut))}function Yt(P,ht){let Ut=u.get(ht).get(P);h.get(ht)!==Ut&&(i.uniformBlockBinding(ht,Ut,P.__bindingPointIndex),h.set(ht,Ut))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},st=null,ct={},f={},g=new WeakMap,y=[],m=null,p=!1,v=null,x=null,S=null,C=null,T=null,b=null,R=null,_=new Pt(0,0,0),M=0,D=!1,k=null,K=null,I=null,F=null,$=null,lt.set(0,0,i.canvas.width,i.canvas.height),Tt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Vt,disable:Dt,bindFramebuffer:ne,drawBuffers:z,useProgram:Ke,setBlending:_t,setMaterial:ye,setFlipSided:qt,setCullFace:A,setLineWidth:w,setPolygonOffset:V,setScissorTest:it,activeTexture:nt,bindTexture:rt,unbindTexture:vt,compressedTexImage2D:dt,compressedTexImage3D:gt,texImage2D:At,texImage3D:yt,updateUBOMapping:Me,uniformBlockBinding:Yt,texStorage2D:jt,texStorage3D:Ot,texSubImage2D:It,texSubImage3D:Xt,compressedTexSubImage2D:et,compressedTexSubImage3D:ae,scissor:Gt,viewport:re,reset:at}}function Cx(i,t,e,n,s,r,a){let o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,w){return f?new OffscreenCanvas(A,w):La("canvas")}function y(A,w,V,it){let nt=1;if((A.width>it||A.height>it)&&(nt=it/Math.max(A.width,A.height)),nt<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let rt=w?Rl:Math.floor,vt=rt(nt*A.width),dt=rt(nt*A.height);u===void 0&&(u=g(vt,dt));let gt=V?g(vt,dt):u;return gt.width=vt,gt.height=dt,gt.getContext("2d").drawImage(A,0,0,vt,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+vt+"x"+dt+")."),gt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return iu(A.width)&&iu(A.height)}function p(A){return o?!1:A.wrapS!==Pn||A.wrapT!==Pn||A.minFilter!==nn&&A.minFilter!==bn}function v(A,w){return A.generateMipmaps&&w&&A.minFilter!==nn&&A.minFilter!==bn}function x(A){i.generateMipmap(A)}function S(A,w,V,it,nt=!1){if(o===!1)return w;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let rt=w;if(w===i.RED&&(V===i.FLOAT&&(rt=i.R32F),V===i.HALF_FLOAT&&(rt=i.R16F),V===i.UNSIGNED_BYTE&&(rt=i.R8)),w===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(rt=i.R8UI),V===i.UNSIGNED_SHORT&&(rt=i.R16UI),V===i.UNSIGNED_INT&&(rt=i.R32UI),V===i.BYTE&&(rt=i.R8I),V===i.SHORT&&(rt=i.R16I),V===i.INT&&(rt=i.R32I)),w===i.RG&&(V===i.FLOAT&&(rt=i.RG32F),V===i.HALF_FLOAT&&(rt=i.RG16F),V===i.UNSIGNED_BYTE&&(rt=i.RG8)),w===i.RGBA){let vt=nt?Aa:oe.getTransfer(it);V===i.FLOAT&&(rt=i.RGBA32F),V===i.HALF_FLOAT&&(rt=i.RGBA16F),V===i.UNSIGNED_BYTE&&(rt=vt===fe?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function C(A,w,V){return v(A,V)===!0||A.isFramebufferTexture&&A.minFilter!==nn&&A.minFilter!==bn?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function T(A){return A===nn||A===Eh||A===Ho?i.NEAREST:i.LINEAR}function b(A){let w=A.target;w.removeEventListener("dispose",b),_(w),w.isVideoTexture&&h.delete(w)}function R(A){let w=A.target;w.removeEventListener("dispose",R),D(w)}function _(A){let w=n.get(A);if(w.__webglInit===void 0)return;let V=A.source,it=d.get(V);if(it){let nt=it[w.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&M(A),Object.keys(it).length===0&&d.delete(V)}n.remove(A)}function M(A){let w=n.get(A);i.deleteTexture(w.__webglTexture);let V=A.source,it=d.get(V);delete it[w.__cacheKey],a.memory.textures--}function D(A){let w=A.texture,V=n.get(A),it=n.get(w);if(it.__webglTexture!==void 0&&(i.deleteTexture(it.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(V.__webglFramebuffer[nt]))for(let rt=0;rt<V.__webglFramebuffer[nt].length;rt++)i.deleteFramebuffer(V.__webglFramebuffer[nt][rt]);else i.deleteFramebuffer(V.__webglFramebuffer[nt]);V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer[nt])}else{if(Array.isArray(V.__webglFramebuffer))for(let nt=0;nt<V.__webglFramebuffer.length;nt++)i.deleteFramebuffer(V.__webglFramebuffer[nt]);else i.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&i.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let nt=0;nt<V.__webglColorRenderbuffer.length;nt++)V.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(V.__webglColorRenderbuffer[nt]);V.__webglDepthRenderbuffer&&i.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let nt=0,rt=w.length;nt<rt;nt++){let vt=n.get(w[nt]);vt.__webglTexture&&(i.deleteTexture(vt.__webglTexture),a.memory.textures--),n.remove(w[nt])}n.remove(w),n.remove(A)}let k=0;function K(){k=0}function I(){let A=k;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),k+=1,A}function F(A){let w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function $(A,w){let V=n.get(A);if(A.isVideoTexture&&ye(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){let it=A.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(V,A,w);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+w)}function J(A,w){let V=n.get(A);if(A.version>0&&V.__version!==A.version){lt(V,A,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+w)}function Z(A,w){let V=n.get(A);if(A.version>0&&V.__version!==A.version){lt(V,A,w);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+w)}function Y(A,w){let V=n.get(A);if(A.version>0&&V.__version!==A.version){Tt(V,A,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+w)}let tt={[mr]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[Tl]:i.MIRRORED_REPEAT},st={[nn]:i.NEAREST,[Eh]:i.NEAREST_MIPMAP_NEAREST,[Ho]:i.NEAREST_MIPMAP_LINEAR,[bn]:i.LINEAR,[Mp]:i.LINEAR_MIPMAP_NEAREST,[gr]:i.LINEAR_MIPMAP_LINEAR},ct={[Dp]:i.NEVER,[Bp]:i.ALWAYS,[Up]:i.LESS,[ld]:i.LEQUAL,[Np]:i.EQUAL,[Fp]:i.GEQUAL,[kp]:i.GREATER,[Op]:i.NOTEQUAL};function q(A,w,V){if(V?(i.texParameteri(A,i.TEXTURE_WRAP_S,tt[w.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,tt[w.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,tt[w.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,st[w.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,st[w.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(w.wrapS!==Pn||w.wrapT!==Pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,T(w.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,T(w.minFilter)),w.minFilter!==nn&&w.minFilter!==bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ct[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let it=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===nn||w.minFilter!==Ho&&w.minFilter!==gr||w.type===mi&&t.has("OES_texture_float_linear")===!1||o===!1&&w.type===yr&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(i.texParameterf(A,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function j(A,w){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",b));let it=w.source,nt=d.get(it);nt===void 0&&(nt={},d.set(it,nt));let rt=F(w);if(rt!==A.__cacheKey){nt[rt]===void 0&&(nt[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),nt[rt].usedTimes++;let vt=nt[A.__cacheKey];vt!==void 0&&(nt[A.__cacheKey].usedTimes--,vt.usedTimes===0&&M(w)),A.__cacheKey=rt,A.__webglTexture=nt[rt].texture}return V}function lt(A,w,V){let it=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(it=i.TEXTURE_3D);let nt=j(A,w),rt=w.source;e.bindTexture(it,A.__webglTexture,i.TEXTURE0+V);let vt=n.get(rt);if(rt.version!==vt.__version||nt===!0){e.activeTexture(i.TEXTURE0+V);let dt=oe.getPrimaries(oe.workingColorSpace),gt=w.colorSpace===Sn?null:oe.getPrimaries(w.colorSpace),It=w.colorSpace===Sn||dt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let Xt=p(w)&&m(w.image)===!1,et=y(w.image,Xt,!1,s.maxTextureSize);et=qt(w,et);let ae=m(et)||o,jt=r.convert(w.format,w.colorSpace),Ot=r.convert(w.type),At=S(w.internalFormat,jt,Ot,w.colorSpace,w.isVideoTexture);q(it,w,ae);let yt,Gt=w.mipmaps,re=o&&w.isVideoTexture!==!0&&At!==rd,Me=vt.__version===void 0||nt===!0,Yt=C(w,et,ae);if(w.isDepthTexture)At=i.DEPTH_COMPONENT,o?w.type===mi?At=i.DEPTH_COMPONENT32F:w.type===pi?At=i.DEPTH_COMPONENT24:w.type===Bi?At=i.DEPTH24_STENCIL8:At=i.DEPTH_COMPONENT16:w.type===mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===zi&&At===i.DEPTH_COMPONENT&&w.type!==gc&&w.type!==pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=pi,Ot=r.convert(w.type)),w.format===Ps&&At===i.DEPTH_COMPONENT&&(At=i.DEPTH_STENCIL,w.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Bi,Ot=r.convert(w.type))),Me&&(re?e.texStorage2D(i.TEXTURE_2D,1,At,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,At,et.width,et.height,0,jt,Ot,null));else if(w.isDataTexture)if(Gt.length>0&&ae){re&&Me&&e.texStorage2D(i.TEXTURE_2D,Yt,At,Gt[0].width,Gt[0].height);for(let at=0,P=Gt.length;at<P;at++)yt=Gt[at],re?e.texSubImage2D(i.TEXTURE_2D,at,0,0,yt.width,yt.height,jt,Ot,yt.data):e.texImage2D(i.TEXTURE_2D,at,At,yt.width,yt.height,0,jt,Ot,yt.data);w.generateMipmaps=!1}else re?(Me&&e.texStorage2D(i.TEXTURE_2D,Yt,At,et.width,et.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,jt,Ot,et.data)):e.texImage2D(i.TEXTURE_2D,0,At,et.width,et.height,0,jt,Ot,et.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){re&&Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Yt,At,Gt[0].width,Gt[0].height,et.depth);for(let at=0,P=Gt.length;at<P;at++)yt=Gt[at],w.format!==Ln?jt!==null?re?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,yt.width,yt.height,et.depth,jt,yt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,At,yt.width,yt.height,et.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,yt.width,yt.height,et.depth,jt,Ot,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,At,yt.width,yt.height,et.depth,0,jt,Ot,yt.data)}else{re&&Me&&e.texStorage2D(i.TEXTURE_2D,Yt,At,Gt[0].width,Gt[0].height);for(let at=0,P=Gt.length;at<P;at++)yt=Gt[at],w.format!==Ln?jt!==null?re?e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,yt.width,yt.height,jt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,at,At,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?e.texSubImage2D(i.TEXTURE_2D,at,0,0,yt.width,yt.height,jt,Ot,yt.data):e.texImage2D(i.TEXTURE_2D,at,At,yt.width,yt.height,0,jt,Ot,yt.data)}else if(w.isDataArrayTexture)re?(Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Yt,At,et.width,et.height,et.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,jt,Ot,et.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,et.width,et.height,et.depth,0,jt,Ot,et.data);else if(w.isData3DTexture)re?(Me&&e.texStorage3D(i.TEXTURE_3D,Yt,At,et.width,et.height,et.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,jt,Ot,et.data)):e.texImage3D(i.TEXTURE_3D,0,At,et.width,et.height,et.depth,0,jt,Ot,et.data);else if(w.isFramebufferTexture){if(Me)if(re)e.texStorage2D(i.TEXTURE_2D,Yt,At,et.width,et.height);else{let at=et.width,P=et.height;for(let ht=0;ht<Yt;ht++)e.texImage2D(i.TEXTURE_2D,ht,At,at,P,0,jt,Ot,null),at>>=1,P>>=1}}else if(Gt.length>0&&ae){re&&Me&&e.texStorage2D(i.TEXTURE_2D,Yt,At,Gt[0].width,Gt[0].height);for(let at=0,P=Gt.length;at<P;at++)yt=Gt[at],re?e.texSubImage2D(i.TEXTURE_2D,at,0,0,jt,Ot,yt):e.texImage2D(i.TEXTURE_2D,at,At,jt,Ot,yt);w.generateMipmaps=!1}else re?(Me&&e.texStorage2D(i.TEXTURE_2D,Yt,At,et.width,et.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,jt,Ot,et)):e.texImage2D(i.TEXTURE_2D,0,At,jt,Ot,et);v(w,ae)&&x(it),vt.__version=rt.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function Tt(A,w,V){if(w.image.length!==6)return;let it=j(A,w),nt=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+V);let rt=n.get(nt);if(nt.version!==rt.__version||it===!0){e.activeTexture(i.TEXTURE0+V);let vt=oe.getPrimaries(oe.workingColorSpace),dt=w.colorSpace===Sn?null:oe.getPrimaries(w.colorSpace),gt=w.colorSpace===Sn||vt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let It=w.isCompressedTexture||w.image[0].isCompressedTexture,Xt=w.image[0]&&w.image[0].isDataTexture,et=[];for(let at=0;at<6;at++)!It&&!Xt?et[at]=y(w.image[at],!1,!0,s.maxCubemapSize):et[at]=Xt?w.image[at].image:w.image[at],et[at]=qt(w,et[at]);let ae=et[0],jt=m(ae)||o,Ot=r.convert(w.format,w.colorSpace),At=r.convert(w.type),yt=S(w.internalFormat,Ot,At,w.colorSpace),Gt=o&&w.isVideoTexture!==!0,re=rt.__version===void 0||it===!0,Me=C(w,ae,jt);q(i.TEXTURE_CUBE_MAP,w,jt);let Yt;if(It){Gt&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Me,yt,ae.width,ae.height);for(let at=0;at<6;at++){Yt=et[at].mipmaps;for(let P=0;P<Yt.length;P++){let ht=Yt[P];w.format!==Ln?Ot!==null?Gt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,P,0,0,ht.width,ht.height,Ot,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,P,yt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,P,0,0,ht.width,ht.height,Ot,At,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,P,yt,ht.width,ht.height,0,Ot,At,ht.data)}}}else{Yt=w.mipmaps,Gt&&re&&(Yt.length>0&&Me++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Me,yt,et[0].width,et[0].height));for(let at=0;at<6;at++)if(Xt){Gt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,et[at].width,et[at].height,Ot,At,et[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,yt,et[at].width,et[at].height,0,Ot,At,et[at].data);for(let P=0;P<Yt.length;P++){let ut=Yt[P].image[at].image;Gt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,P+1,0,0,ut.width,ut.height,Ot,At,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,P+1,yt,ut.width,ut.height,0,Ot,At,ut.data)}}else{Gt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Ot,At,et[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,yt,Ot,At,et[at]);for(let P=0;P<Yt.length;P++){let ht=Yt[P];Gt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,P+1,0,0,Ot,At,ht.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,P+1,yt,Ot,At,ht.image[at])}}}v(w,jt)&&x(i.TEXTURE_CUBE_MAP),rt.__version=nt.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function St(A,w,V,it,nt,rt){let vt=r.convert(V.format,V.colorSpace),dt=r.convert(V.type),gt=S(V.internalFormat,vt,dt,V.colorSpace);if(!n.get(w).__hasExternalTextures){let Xt=Math.max(1,w.width>>rt),et=Math.max(1,w.height>>rt);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,rt,gt,Xt,et,w.depth,0,vt,dt,null):e.texImage2D(nt,rt,gt,Xt,et,0,vt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),_t(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,nt,n.get(V).__webglTexture,0,Ft(w)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,nt,n.get(V).__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(A,w,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),w.depthBuffer&&!w.stencilBuffer){let it=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(V||_t(w)){let nt=w.depthTexture;nt&&nt.isDepthTexture&&(nt.type===mi?it=i.DEPTH_COMPONENT32F:nt.type===pi&&(it=i.DEPTH_COMPONENT24));let rt=Ft(w);_t(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,it,w.width,w.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,it,w.width,w.height)}else i.renderbufferStorage(i.RENDERBUFFER,it,w.width,w.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(w.depthBuffer&&w.stencilBuffer){let it=Ft(w);V&&_t(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,i.DEPTH24_STENCIL8,w.width,w.height):_t(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,i.DEPTH24_STENCIL8,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{let it=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let nt=0;nt<it.length;nt++){let rt=it[nt],vt=r.convert(rt.format,rt.colorSpace),dt=r.convert(rt.type),gt=S(rt.internalFormat,vt,dt,rt.colorSpace),It=Ft(w);V&&_t(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,It,gt,w.width,w.height):_t(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It,gt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,gt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Vt(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),$(w.depthTexture,0);let it=n.get(w.depthTexture).__webglTexture,nt=Ft(w);if(w.depthTexture.format===zi)_t(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(w.depthTexture.format===Ps)_t(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Dt(A){let w=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Vt(w.__webglFramebuffer,A)}else if(V){w.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[it]),w.__webglDepthbuffer[it]=i.createRenderbuffer(),zt(w.__webglDepthbuffer[it],A,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),zt(w.__webglDepthbuffer,A,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(A,w,V){let it=n.get(A);w!==void 0&&St(it.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Dt(A)}function z(A){let w=A.texture,V=n.get(A),it=n.get(w);A.addEventListener("dispose",R),A.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=w.version,a.memory.textures++);let nt=A.isWebGLCubeRenderTarget===!0,rt=A.isWebGLMultipleRenderTargets===!0,vt=m(A)||o;if(nt){V.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(o&&w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[dt]=[];for(let gt=0;gt<w.mipmaps.length;gt++)V.__webglFramebuffer[dt][gt]=i.createFramebuffer()}else V.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let dt=0;dt<w.mipmaps.length;dt++)V.__webglFramebuffer[dt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(rt)if(s.drawBuffers){let dt=A.texture;for(let gt=0,It=dt.length;gt<It;gt++){let Xt=n.get(dt[gt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&_t(A)===!1){let dt=rt?w:[w];V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let gt=0;gt<dt.length;gt++){let It=dt[gt];V.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[gt]);let Xt=r.convert(It.format,It.colorSpace),et=r.convert(It.type),ae=S(It.internalFormat,Xt,et,It.colorSpace,A.isXRRenderTarget===!0),jt=Ft(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,ae,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,V.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),zt(V.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),q(i.TEXTURE_CUBE_MAP,w,vt);for(let dt=0;dt<6;dt++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let gt=0;gt<w.mipmaps.length;gt++)St(V.__webglFramebuffer[dt][gt],A,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,gt);else St(V.__webglFramebuffer[dt],A,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);v(w,vt)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){let dt=A.texture;for(let gt=0,It=dt.length;gt<It;gt++){let Xt=dt[gt],et=n.get(Xt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),q(i.TEXTURE_2D,Xt,vt),St(V.__webglFramebuffer,A,Xt,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),v(Xt,vt)&&x(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?dt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(dt,it.__webglTexture),q(dt,w,vt),o&&w.mipmaps&&w.mipmaps.length>0)for(let gt=0;gt<w.mipmaps.length;gt++)St(V.__webglFramebuffer[gt],A,w,i.COLOR_ATTACHMENT0,dt,gt);else St(V.__webglFramebuffer,A,w,i.COLOR_ATTACHMENT0,dt,0);v(w,vt)&&x(dt),e.unbindTexture()}A.depthBuffer&&Dt(A)}function Ke(A){let w=m(A)||o,V=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let it=0,nt=V.length;it<nt;it++){let rt=V[it];if(v(rt,w)){let vt=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,dt=n.get(rt).__webglTexture;e.bindTexture(vt,dt),x(vt),e.unbindTexture()}}}function Ct(A){if(o&&A.samples>0&&_t(A)===!1){let w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],V=A.width,it=A.height,nt=i.COLOR_BUFFER_BIT,rt=[],vt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=n.get(A),gt=A.isWebGLMultipleRenderTargets===!0;if(gt)for(let It=0;It<w.length;It++)e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let It=0;It<w.length;It++){rt.push(i.COLOR_ATTACHMENT0+It),A.depthBuffer&&rt.push(vt);let Xt=dt.__ignoreDepthValues!==void 0?dt.__ignoreDepthValues:!1;if(Xt===!1&&(A.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),gt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,dt.__webglColorRenderbuffer[It]),Xt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[vt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[vt])),gt){let et=n.get(w[It]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,V,it,0,0,V,it,nt,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let It=0;It<w.length;It++){e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,dt.__webglColorRenderbuffer[It]);let Xt=n.get(w[It]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}}function Ft(A){return Math.min(s.maxSamples,A.samples)}function _t(A){let w=n.get(A);return o&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ye(A){let w=a.render.frame;h.get(A)!==w&&(h.set(A,w),A.update())}function qt(A,w){let V=A.colorSpace,it=A.format,nt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Al||V!==ti&&V!==Sn&&(oe.getTransfer(V)===fe?o===!1?t.has("EXT_sRGB")===!0&&it===Ln?(A.format=Al,A.minFilter=bn,A.generateMipmaps=!1):w=Ia.sRGBToLinear(w):(it!==Ln||nt!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}this.allocateTextureUnit=I,this.resetTextureUnits=K,this.setTexture2D=$,this.setTexture2DArray=J,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=ne,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=_t}function Rx(i,t,e){let n=e.isWebGL2;function s(r,a=Sn){let o,l=oe.getTransfer(a);if(r===xi)return i.UNSIGNED_BYTE;if(r===td)return i.UNSIGNED_SHORT_4_4_4_4;if(r===ed)return i.UNSIGNED_SHORT_5_5_5_1;if(r===bp)return i.BYTE;if(r===Sp)return i.SHORT;if(r===gc)return i.UNSIGNED_SHORT;if(r===Qu)return i.INT;if(r===pi)return i.UNSIGNED_INT;if(r===mi)return i.FLOAT;if(r===yr)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===wp)return i.ALPHA;if(r===Ln)return i.RGBA;if(r===Ep)return i.LUMINANCE;if(r===Tp)return i.LUMINANCE_ALPHA;if(r===zi)return i.DEPTH_COMPONENT;if(r===Ps)return i.DEPTH_STENCIL;if(r===Al)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Ap)return i.RED;if(r===nd)return i.RED_INTEGER;if(r===Cp)return i.RG;if(r===id)return i.RG_INTEGER;if(r===sd)return i.RGBA_INTEGER;if(r===Vo||r===Go||r===Wo||r===qo)if(l===fe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Vo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Go)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Wo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Vo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Go)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Wo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===qo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Th||r===Ah||r===Ch||r===Rh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Th)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ah)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ch)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Rh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rd)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ph||r===Lh)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Ph)return l===fe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Lh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ih||r===Dh||r===Uh||r===Nh||r===kh||r===Oh||r===Fh||r===Bh||r===zh||r===Hh||r===Vh||r===Gh||r===Wh||r===qh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Ih)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Dh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Uh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Nh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===kh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Oh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Fh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Bh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Hh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Vh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Wh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===qh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xo||r===Xh||r===$h)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Xo)return l===fe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Xh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$h)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Rp||r===Yh||r===Zh||r===Jh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Xo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Yh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Jh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bi?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}function Lx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,dd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,x,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===an&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===an&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ix(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){let S=x.program;n.uniformBlockBinding(v,S)}function c(v,x){let S=s[v.id];S===void 0&&(g(v),S=h(v),s[v.id]=S,v.addEventListener("dispose",m));let C=x.program;n.updateUBOMapping(v,C);let T=t.render.frame;r[v.id]!==T&&(d(v),r[v.id]=T)}function h(v){let x=u();v.__bindingPointIndex=x;let S=i.createBuffer(),C=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,S),S}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let x=s[v.id],S=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,b=S.length;T<b;T++){let R=Array.isArray(S[T])?S[T]:[S[T]];for(let _=0,M=R.length;_<M;_++){let D=R[_];if(f(D,T,_,C)===!0){let k=D.__offset,K=Array.isArray(D.value)?D.value:[D.value],I=0;for(let F=0;F<K.length;F++){let $=K[F],J=y($);typeof $=="number"||typeof $=="boolean"?(D.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,k+I,D.__data)):$.isMatrix3?(D.__data[0]=$.elements[0],D.__data[1]=$.elements[1],D.__data[2]=$.elements[2],D.__data[3]=0,D.__data[4]=$.elements[3],D.__data[5]=$.elements[4],D.__data[6]=$.elements[5],D.__data[7]=0,D.__data[8]=$.elements[6],D.__data[9]=$.elements[7],D.__data[10]=$.elements[8],D.__data[11]=0):($.toArray(D.__data,I),I+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,x,S,C){let T=v.value,b=x+"_"+S;if(C[b]===void 0)return typeof T=="number"||typeof T=="boolean"?C[b]=T:C[b]=T.clone(),!0;{let R=C[b];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return C[b]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function g(v){let x=v.uniforms,S=0,C=16;for(let b=0,R=x.length;b<R;b++){let _=Array.isArray(x[b])?x[b]:[x[b]];for(let M=0,D=_.length;M<D;M++){let k=_[M],K=Array.isArray(k.value)?k.value:[k.value];for(let I=0,F=K.length;I<F;I++){let $=K[I],J=y($),Z=S%C;Z!==0&&C-Z<J.boundary&&(S+=C-Z),k.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=J.storage}}}let T=S%C;return T>0&&(S+=C-T),v.__size=S,v.__cache={},this}function y(v){let x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){let x=v.target;x.removeEventListener("dispose",m);let S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}function _c(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}function Gu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Ux(i,t){let e=1-i;return e*e*t}function Nx(i,t){return 2*(1-i)*i*t}function kx(i,t){return i*i*t}function ur(i,t,e,n){return Ux(i,t)+Nx(i,e)+kx(i,n)}function Ox(i,t){let e=1-i;return e*e*e*t}function Fx(i,t){let e=1-i;return 3*e*e*i*t}function Bx(i,t){return 3*(1-i)*i*i*t}function zx(i,t){return i*i*i*t}function dr(i,t,e,n,s){return Ox(i,t)+Fx(i,e)+Bx(i,n)+zx(i,s)}function _d(i,t,e,n,s){let r,a;if(s===i_(i,t,e,n)>0)for(r=t;r<e;r+=n)a=qu(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=qu(r,i[r],i[r+1],a);return a&&eo(a,a.next)&&(Tr(a),a=a.next),a}function Xi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(eo(e,e.next)||_e(e.prev,e,e.next)===0)){if(Tr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function wr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&jx(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Gx(i,n,s,r):Vx(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Tr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Wx(Xi(i),t,e),wr(i,t,e,n,s,r,2)):a===2&&qx(i,t,e,n,s,r):wr(Xi(i),t,e,n,s,r,1);break}}}function Vx(i){let t=i.prev,e=i,n=i.next;if(_e(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&ws(s,o,r,l,a,c,g.x,g.y)&&_e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Gx(i,t,e,n){let s=i.prev,r=i,a=i.next;if(_e(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,y=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=Kl(f,g,t,e,n),v=Kl(y,m,t,e,n),x=i.prevZ,S=i.nextZ;for(;x&&x.z>=p&&S&&S.z<=v;){if(x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ws(o,h,l,u,c,d,x.x,x.y)&&_e(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=f&&S.x<=y&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&ws(o,h,l,u,c,d,S.x,S.y)&&_e(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ws(o,h,l,u,c,d,x.x,x.y)&&_e(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=v;){if(S.x>=f&&S.x<=y&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&ws(o,h,l,u,c,d,S.x,S.y)&&_e(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Wx(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!eo(s,r)&&vd(s,n,n.next,r)&&Er(s,r)&&Er(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Tr(n),Tr(n.next),n=i=r),n=n.next}while(n!==i);return Xi(n)}function qx(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&t_(a,o)){let l=Md(a,o);a=Xi(a,a.next),l=Xi(l,l.next),wr(a,t,e,n,s,r,0),wr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Xx(i,t,e,n){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=_d(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Qx(c));for(s.sort($x),r=0;r<s.length;r++)e=Yx(s[r],e);return e}function $x(i,t){return i.x-t.x}function Yx(i,t){let e=Zx(i,t);if(!e)return t;let n=Md(e,i);return Xi(n,n.next),Xi(e,e.next)}function Zx(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ws(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Er(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Jx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function Jx(i,t){return _e(i.prev,i,t.prev)<0&&_e(t.next,i,i.next)<0}function jx(i,t,e,n){let s=i;do s.z===0&&(s.z=Kl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Kx(s)}function Kx(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function Kl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Qx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ws(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function t_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!e_(i,t)&&(Er(i,t)&&Er(t,i)&&n_(i,t)&&(_e(i.prev,i,t.prev)||_e(i,t.prev,t))||eo(i,t)&&_e(i.prev,i,i.next)>0&&_e(t.prev,t,t.next)>0)}function _e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function eo(i,t){return i.x===t.x&&i.y===t.y}function vd(i,t,e,n){let s=ba(_e(i,t,e)),r=ba(_e(i,t,n)),a=ba(_e(e,n,i)),o=ba(_e(e,n,t));return!!(s!==r&&a!==o||s===0&&Ma(i,e,t)||r===0&&Ma(i,n,t)||a===0&&Ma(e,i,n)||o===0&&Ma(e,t,n))}function Ma(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ba(i){return i>0?1:i<0?-1:0}function e_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&vd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Er(i,t){return _e(i.prev,i,i.next)<0?_e(i,t,i.next)>=0&&_e(i,i.prev,t)>=0:_e(i,t,i.prev)<0||_e(i,i.next,t)<0}function n_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Md(i,t){let e=new Ql(i.i,i.x,i.y),n=new Ql(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function qu(i,t,e,n){let s=new Ql(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Tr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ql(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function i_(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}function Xu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function $u(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}function s_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}function Sa(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function r_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ju(i,t){return i.distance-t.distance}function dc(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)dc(s[r],t,e,!0)}}var Gf,vh,Wf,ju,fc,Kn,_i,an,He,gi,Es,pr,Mh,bh,qf,Oi,Xf,$f,Sh,wh,Yf,Zf,Jf,jf,bl,Sl,Kf,Qf,tp,ep,np,ip,sp,rp,ap,op,lp,cp,wa,hp,up,pc,dp,mc,fp,pp,yi,mp,gp,yp,xp,_p,vp,Ku,Cs,Rs,wl,El,Ka,mr,Pn,Tl,nn,Eh,Ho,bn,Mp,gr,xi,bp,Sp,gc,Qu,pi,mi,yr,td,ed,Bi,wp,Ln,Ep,Tp,zi,Ps,Ap,nd,Cp,id,sd,Vo,Go,Wo,qo,Th,Ah,Ch,Rh,rd,Ph,Lh,Ih,Dh,Uh,Nh,kh,Oh,Fh,Bh,zh,Hh,Vh,Gh,Wh,qh,Xo,Xh,$h,Rp,Yh,Zh,Jh,Ea,Ta,$o,jh,Kh,Qh,ad,Hi,Pp,Lp,od,Ip,Sn,pe,ti,yc,Qa,Aa,fe,Ca,Ra,ss,tu,Dp,Up,Np,ld,kp,Op,Fp,Bp,eu,cd,nu,Al,Qn,Pa,vi,Je,Yo,Cl,ft,Jt,Jo,su,ru,au,jr,Vp,oe,rs,Ia,Gp,Da,Wp,wn,Ve,Pl,ei,Ua,Ll,Bn,L,Qo,ou,ni,$n,Tn,Kr,as,os,ls,ci,hi,Ii,ir,Qr,ta,Di,qp,sr,el,Vi,Yn,nl,ea,ui,il,na,sl,Na,ge,cs,An,Xp,$p,di,ia,fn,lu,cu,Ls,xr,Yp,hu,hs,Zn,sa,rr,Zp,Jp,uu,du,fu,jp,Kp,Ie,Cn,Jn,rl,jn,us,ds,pu,al,ol,ll,ra,Ms,ud,fi,aa,Pt,je,Qp,Gi,Pe,Re,oa,mn,ka,Oa,Kt,tm,Mn,hl,fs,pn,ar,ze,Xe,mu,Ui,la,gu,ps,ms,gs,ul,ca,ha,ua,da,yu,xu,_u,fa,pa,wt,de,im,sm,rm,In,Fa,Le,ys,xs,Il,Ba,Dl,dl,am,om,Rn,Ni,ga,_r,Wi,cm,hm,um,dm,fm,pm,mm,gm,ym,xm,_m,vm,Mm,bm,Sm,wm,Em,Tm,Am,Cm,Rm,Pm,Lm,Im,Dm,Um,Nm,km,Om,Fm,Bm,zm,Hm,Vm,Gm,Wm,qm,Xm,$m,Ym,Zm,Jm,jm,Km,Qm,t0,e0,n0,i0,s0,r0,a0,o0,l0,c0,h0,u0,d0,f0,p0,m0,g0,y0,x0,_0,v0,M0,b0,S0,w0,E0,T0,A0,C0,R0,P0,L0,I0,D0,U0,N0,k0,O0,F0,B0,z0,H0,V0,G0,W0,q0,X0,$0,Y0,Z0,J0,j0,K0,Q0,tg,eg,ng,ig,sg,rg,ag,og,lg,cg,hg,ug,dg,fg,pg,mg,gg,yg,xg,_g,vg,Mg,bg,Sg,wg,Eg,Tg,Ag,Cg,Rg,Pg,Lg,Ig,Dg,Ug,Ng,kg,Og,Fg,Bg,zg,Hg,Wt,ot,Fn,ya,za,bs,vu,Fi,fl,Mu,pl,ml,gl,ki,_s,bu,Ha,Va,pd,md,gd,yd,xd,Tu,Au,Cu,Ru,Pu,Ul,Nl,kl,yl,As,Xy,$y,nx,ix,rx,fx,Fl,Bl,vx,zl,Hl,wx,Ex,Vl,ie,Px,hr,Gl,qi,Wl,Ds,Mi,Ga,vs,Hu,_a,Vu,Dx,or,lr,Dn,Us,En,vr,ql,va,xl,_l,vl,Xl,Wa,$l,qa,Yl,Xa,Zl,$a,Wu,Jl,Mr,jl,bi,Ns,Te,ii,br,ks,Sr,Hx,fr,Ar,Ya,$i,Za,$e,Os,Ge,Fs,tc,ec,nc,Un,Yi,ic,sc,rc,Cr,Zi,ac,oc,a_,lc,Ja,Si,Ml,Yu,Zu,cc,hc,wi,vc,o_,Mc,l_,c_,h_,u_,d_,f_,p_,uc,me,K_,ja,si=Be(()=>{Gf=0,vh=1,Wf=2,ju=1,fc=2,Kn=3,_i=0,an=1,He=2,gi=0,Es=1,pr=2,Mh=3,bh=4,qf=5,Oi=100,Xf=101,$f=102,Sh=103,wh=104,Yf=200,Zf=201,Jf=202,jf=203,bl=204,Sl=205,Kf=206,Qf=207,tp=208,ep=209,np=210,ip=211,sp=212,rp=213,ap=214,op=0,lp=1,cp=2,wa=3,hp=4,up=5,pc=6,dp=7,mc=0,fp=1,pp=2,yi=0,mp=1,gp=2,yp=3,xp=4,_p=5,vp=6,Ku=300,Cs=301,Rs=302,wl=303,El=304,Ka=306,mr=1e3,Pn=1001,Tl=1002,nn=1003,Eh=1004,Ho=1005,bn=1006,Mp=1007,gr=1008,xi=1009,bp=1010,Sp=1011,gc=1012,Qu=1013,pi=1014,mi=1015,yr=1016,td=1017,ed=1018,Bi=1020,wp=1021,Ln=1023,Ep=1024,Tp=1025,zi=1026,Ps=1027,Ap=1028,nd=1029,Cp=1030,id=1031,sd=1033,Vo=33776,Go=33777,Wo=33778,qo=33779,Th=35840,Ah=35841,Ch=35842,Rh=35843,rd=36196,Ph=37492,Lh=37496,Ih=37808,Dh=37809,Uh=37810,Nh=37811,kh=37812,Oh=37813,Fh=37814,Bh=37815,zh=37816,Hh=37817,Vh=37818,Gh=37819,Wh=37820,qh=37821,Xo=36492,Xh=36494,$h=36495,Rp=36283,Yh=36284,Zh=36285,Jh=36286,Ea=2300,Ta=2301,$o=2302,jh=2400,Kh=2401,Qh=2402,ad=3e3,Hi=3001,Pp=3200,Lp=3201,od=0,Ip=1,Sn="",pe="srgb",ti="srgb-linear",yc="display-p3",Qa="display-p3-linear",Aa="linear",fe="srgb",Ca="rec709",Ra="p3",ss=7680,tu=519,Dp=512,Up=513,Np=514,ld=515,kp=516,Op=517,Fp=518,Bp=519,eu=35044,cd=35048,nu="300 es",Al=1035,Qn=2e3,Pa=2001,vi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yo=Math.PI/180,Cl=180/Math.PI;ft=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],v=s[1],x=s[4],S=s[7],C=s[2],T=s[5],b=s[8];return r[0]=a*y+o*v+l*C,r[3]=a*m+o*x+l*T,r[6]=a*p+o*S+l*b,r[1]=c*y+h*v+u*C,r[4]=c*m+h*x+u*T,r[7]=c*p+h*S+u*b,r[2]=d*y+f*v+g*C,r[5]=d*m+f*x+g*T,r[8]=d*p+f*S+g*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=d*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Jo.makeScale(t,e)),this}rotate(t){return this.premultiply(Jo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Jo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Jo=new Jt;su={};ru=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),au=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),jr={[ti]:{transfer:Aa,primaries:Ca,toReference:i=>i,fromReference:i=>i},[pe]:{transfer:fe,primaries:Ca,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Qa]:{transfer:Aa,primaries:Ra,toReference:i=>i.applyMatrix3(au),fromReference:i=>i.applyMatrix3(ru)},[yc]:{transfer:fe,primaries:Ra,toReference:i=>i.convertSRGBToLinear().applyMatrix3(au),fromReference:i=>i.applyMatrix3(ru).convertLinearToSRGB()}},Vp=new Set([ti,Qa]),oe={enabled:!0,_workingColorSpace:ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Vp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=jr[t].toReference,s=jr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return jr[i].primaries},getTransfer:function(i){return i===Sn?Aa:jr[i].transfer}};Ia=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{rs===void 0&&(rs=La("canvas")),rs.width=t.width,rs.height=t.height;let n=rs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=rs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=La("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ts(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ts(e[n]/255)*255):e[n]=Ts(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Gp=0,Da=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Bs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ko(s[a].image)):r.push(Ko(s[a]))}else r=Ko(s);n.url=r}return e||(t.images[this.uuid]=n),n}};Wp=0,wn=class i extends vi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Pn,s=Pn,r=bn,a=gr,o=Ln,l=xi,c=i.DEFAULT_ANISOTROPY,h=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=Bs(),this.name="",this.source=new Da(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Hi?pe:Sn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ku)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mr:t.x=t.x-Math.floor(t.x);break;case Pn:t.x=t.x<0?0:1;break;case Tl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mr:t.y=t.y-Math.floor(t.y);break;case Pn:t.y=t.y<0?0:1;break;case Tl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pe?Hi:ad}set encoding(t){cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Hi?pe:Sn}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Ku;wn.DEFAULT_ANISOTROPY=1;Ve=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,S=(f+1)/2,C=(p+1)/2,T=(h+d)/4,b=(u+y)/4,R=(g+m)/4;return x>S&&x>C?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=b/n):S>C?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=T/s,r=R/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=b/r,s=R/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-y)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pl=class extends vi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ve(0,0,t,e),this.scissorTest=!1,this.viewport=new Ve(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(cr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Hi?pe:Sn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new wn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Da(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends Pl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ua=class extends wn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ll=class extends wn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Bn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=y;return}if(u!==y||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*y,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let C=Math.sqrt(x),T=Math.atan2(C,p*v);m=Math.sin(m*T)/C,o=Math.sin(o*T)/C}let S=o*v;if(l=l*m+d*S,c=c*m+f*S,h=h*m+g*S,u=u*m+y*S,m===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ou.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ou.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qo.copy(this).projectOnVector(t),this.sub(Qo)}reflect(t){return this.sub(Qo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qo=new L,ou=new Bn,ni=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(t.matrixWorld),this.union(Kr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ir),Qr.subVectors(this.max,ir),as.subVectors(t.a,ir),os.subVectors(t.b,ir),ls.subVectors(t.c,ir),ci.subVectors(os,as),hi.subVectors(ls,os),Ii.subVectors(as,ls);let e=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-Ii.z,Ii.y,ci.z,0,-ci.x,hi.z,0,-hi.x,Ii.z,0,-Ii.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-Ii.y,Ii.x,0];return!tl(e,as,os,ls,Qr)||(e=[1,0,0,0,1,0,0,0,1],!tl(e,as,os,ls,Qr))?!1:(ta.crossVectors(ci,hi),e=[ta.x,ta.y,ta.z],tl(e,as,os,ls,Qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},$n=[new L,new L,new L,new L,new L,new L,new L,new L],Tn=new L,Kr=new ni,as=new L,os=new L,ls=new L,ci=new L,hi=new L,Ii=new L,ir=new L,Qr=new L,ta=new L,Di=new L;qp=new ni,sr=new L,el=new L,Vi=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):qp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sr.subVectors(t,this.center);let e=sr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(sr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(el.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sr.copy(t.center).add(el)),this.expandByPoint(sr.copy(t.center).sub(el))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Yn=new L,nl=new L,ea=new L,ui=new L,il=new L,na=new L,sl=new L,Na=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){nl.copy(t).add(e).multiplyScalar(.5),ea.copy(e).sub(t).normalize(),ui.copy(this.origin).sub(nl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ea),o=ui.dot(this.direction),l=-ui.dot(ea),c=ui.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(nl).addScaledVector(ea,d),f}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);let n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,s,r){il.subVectors(e,t),na.subVectors(n,t),sl.crossVectors(il,na);let a=this.direction.dot(sl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ui.subVectors(this.origin,t);let l=o*this.direction.dot(na.crossVectors(ui,na));if(l<0)return null;let c=o*this.direction.dot(il.cross(ui));if(c<0||l+c>a)return null;let h=-o*ui.dot(sl);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ge=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,y,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/cs.setFromMatrixColumn(t,0).length(),r=1/cs.setFromMatrixColumn(t,1).length(),a=1/cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-y*c,e[9]=-o*l,e[2]=y-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,y=c*u;e[0]=d+y*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=y+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,y=c*u;e[0]=d-y*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=y-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-y*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xp,t,$p)}lookAt(t,e,n){let s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),di.crossVectors(n,fn),di.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),di.crossVectors(n,fn)),di.normalize(),ia.crossVectors(fn,di),s[0]=di.x,s[4]=ia.x,s[8]=fn.x,s[1]=di.y,s[5]=ia.y,s[9]=fn.y,s[2]=di.z,s[6]=ia.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],v=n[3],x=n[7],S=n[11],C=n[15],T=s[0],b=s[4],R=s[8],_=s[12],M=s[1],D=s[5],k=s[9],K=s[13],I=s[2],F=s[6],$=s[10],J=s[14],Z=s[3],Y=s[7],tt=s[11],st=s[15];return r[0]=a*T+o*M+l*I+c*Z,r[4]=a*b+o*D+l*F+c*Y,r[8]=a*R+o*k+l*$+c*tt,r[12]=a*_+o*K+l*J+c*st,r[1]=h*T+u*M+d*I+f*Z,r[5]=h*b+u*D+d*F+f*Y,r[9]=h*R+u*k+d*$+f*tt,r[13]=h*_+u*K+d*J+f*st,r[2]=g*T+y*M+m*I+p*Z,r[6]=g*b+y*D+m*F+p*Y,r[10]=g*R+y*k+m*$+p*tt,r[14]=g*_+y*K+m*J+p*st,r[3]=v*T+x*M+S*I+C*Z,r[7]=v*b+x*D+S*F+C*Y,r[11]=v*R+x*k+S*$+C*tt,r[15]=v*_+x*K+S*J+C*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],y=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+y*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],y=t[13],m=t[14],p=t[15],v=u*m*c-y*d*c+y*l*f-o*m*f-u*l*p+o*d*p,x=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,S=h*y*c-g*u*c+g*o*f-a*y*f-h*o*p+a*u*p,C=g*u*l-h*y*l-g*o*d+a*y*d+h*o*m-a*u*m,T=e*v+n*x+s*S+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/T;return t[0]=v*b,t[1]=(y*d*r-u*m*r-y*s*f+n*m*f+u*s*p-n*d*p)*b,t[2]=(o*m*r-y*l*r+y*s*c-n*m*c-o*s*p+n*l*p)*b,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*b,t[4]=x*b,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*b,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*b,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*b,t[8]=S*b,t[9]=(g*u*r-h*y*r-g*n*f+e*y*f+h*n*p-e*u*p)*b,t[10]=(a*y*r-g*o*r+g*n*c-e*y*c-a*n*p+e*o*p)*b,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*b,t[12]=C*b,t[13]=(h*y*s-g*u*s+g*n*d-e*y*d-h*n*m+e*u*m)*b,t[14]=(g*o*s-a*y*s-g*n*l+e*y*l+a*n*m-e*o*m)*b,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*b,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,y=a*h,m=a*u,p=o*u,v=l*c,x=l*h,S=l*u,C=n.x,T=n.y,b=n.z;return s[0]=(1-(y+p))*C,s[1]=(f+S)*C,s[2]=(g-x)*C,s[3]=0,s[4]=(f-S)*T,s[5]=(1-(d+p))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(g+x)*b,s[9]=(m-v)*b,s[10]=(1-(d+y))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=cs.set(s[0],s[1],s[2]).length(),a=cs.set(s[4],s[5],s[6]).length(),o=cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],An.copy(this);let c=1/r,h=1/a,u=1/o;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,e.setFromRotationMatrix(An),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Qn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(o===Qn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Pa)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Qn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,f=(n+s)*h,g,y;if(o===Qn)g=(a+r)*u,y=-2*u;else if(o===Pa)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},cs=new L,An=new ge,Xp=new L(0,0,0),$p=new L(1,1,1),di=new L,ia=new L,fn=new L,lu=new ge,cu=new Bn,Ls=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cu.setFromEuler(this),this.setFromQuaternion(cu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ls.DEFAULT_ORDER="XYZ";xr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Yp=0,hu=new L,hs=new Bn,Zn=new ge,sa=new L,rr=new L,Zp=new L,Jp=new Bn,uu=new L(1,0,0),du=new L(0,1,0),fu=new L(0,0,1),jp={type:"added"},Kp={type:"removed"},Ie=class i extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new Ls,n=new Bn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new Jt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(uu,t)}rotateY(t){return this.rotateOnAxis(du,t)}rotateZ(t){return this.rotateOnAxis(fu,t)}translateOnAxis(t,e){return hu.copy(t).applyQuaternion(this.quaternion),this.position.add(hu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uu,t)}translateY(t){return this.translateOnAxis(du,t)}translateZ(t){return this.translateOnAxis(fu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?sa.copy(t):sa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(rr,sa,this.up):Zn.lookAt(sa,rr,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(Zn),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(jp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kp)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,t,Zp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,Jp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ie.DEFAULT_UP=new L(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Cn=new L,Jn=new L,rl=new L,jn=new L,us=new L,ds=new L,pu=new L,al=new L,ol=new L,ll=new L,ra=!1,Ms=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Cn.subVectors(t,e),s.cross(Cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Cn.subVectors(s,e),Jn.subVectors(n,e),rl.subVectors(t,e);let a=Cn.dot(Cn),o=Cn.dot(Jn),l=Cn.dot(rl),c=Jn.dot(Jn),h=Jn.dot(rl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getUV(t,e,n,s,r,a,o,l){return ra===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ra=!0),this.getInterpolation(t,e,n,s,r,a,o,l)}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(a,jn.y),l.addScaledVector(o,jn.z),l)}static isFrontFacing(t,e,n,s){return Cn.subVectors(n,e),Jn.subVectors(t,e),Cn.cross(Jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Cn.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return ra===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ra=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;us.subVectors(s,n),ds.subVectors(r,n),al.subVectors(t,n);let l=us.dot(al),c=ds.dot(al);if(l<=0&&c<=0)return e.copy(n);ol.subVectors(t,s);let h=us.dot(ol),u=ds.dot(ol);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(us,a);ll.subVectors(t,r);let f=us.dot(ll),g=ds.dot(ll);if(g>=0&&f<=g)return e.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ds,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return pu.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(pu,o);let p=1/(m+y+d);return a=y*p,o=d*p,e.copy(n).addScaledVector(us,a).addScaledVector(ds,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},aa={h:0,s:0,l:0};Pt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=zp(t,1),e=qe(e,0,1),n=qe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=cl(a,r,t+1/3),this.g=cl(a,r,t),this.b=cl(a,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pe){let n=ud[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}copyLinearToSRGB(t){return this.r=jo(t.r),this.g=jo(t.g),this.b=jo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pe){return oe.fromWorkingColorSpace(je.copy(this),t),Math.round(qe(je.r*255,0,255))*65536+Math.round(qe(je.g*255,0,255))*256+Math.round(qe(je.b*255,0,255))}getHexString(t=pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(je.copy(this),e);let n=je.r,s=je.g,r=je.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=pe){oe.fromWorkingColorSpace(je.copy(this),t);let e=je.r,n=je.g,s=je.b;return t!==pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(aa);let n=Zo(fi.h,aa.h,e),s=Zo(fi.s,aa.s,e),r=Zo(fi.l,aa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},je=new Pt;Pt.NAMES=ud;Qp=0,Gi=class extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Bs(),this.name="",this.type="Material",this.blending=Es,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bl,this.blendDst=Sl,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bl&&(n.blendSrc=this.blendSrc),this.blendDst!==Sl&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Pe=class extends Gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Re=new L,oa=new ft,mn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=eu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)oa.fromBufferAttribute(this,e),oa.applyMatrix3(t),this.setXY(e,oa.x,oa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=nr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=rn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=nr(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=nr(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=nr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=nr(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),s=rn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==eu&&(t.usage=this.usage),t}},ka=class extends mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}},Oa=class extends mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}},Kt=class extends mn{constructor(t,e,n){super(new Float32Array(t),e,n)}},tm=0,Mn=new ge,hl=new Ie,fs=new L,pn=new ni,ar=new ni,ze=new L,Xe=class i extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=Bs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hd(t)?Oa:ka)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return hl.lookAt(t),hl.updateMatrix(),this.applyMatrix4(hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Kt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ar.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(pn.min,ar.min),pn.expandByPoint(ze),ze.addVectors(pn.max,ar.max),pn.expandByPoint(ze)):(pn.expandByPoint(ar.min),pn.expandByPoint(ar.max))}pn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ze.fromBufferAttribute(o,c),l&&(fs.fromBufferAttribute(t,c),ze.add(fs)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let M=0;M<o;M++)c[M]=new L,h[M]=new L;let u=new L,d=new L,f=new L,g=new ft,y=new ft,m=new ft,p=new L,v=new L;function x(M,D,k){u.fromArray(s,M*3),d.fromArray(s,D*3),f.fromArray(s,k*3),g.fromArray(a,M*2),y.fromArray(a,D*2),m.fromArray(a,k*2),d.sub(u),f.sub(u),y.sub(g),m.sub(g);let K=1/(y.x*m.y-m.x*y.y);isFinite(K)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-y.y).multiplyScalar(K),v.copy(f).multiplyScalar(y.x).addScaledVector(d,-m.x).multiplyScalar(K),c[M].add(p),c[D].add(p),c[k].add(p),h[M].add(v),h[D].add(v),h[k].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let M=0,D=S.length;M<D;++M){let k=S[M],K=k.start,I=k.count;for(let F=K,$=K+I;F<$;F+=3)x(n[F+0],n[F+1],n[F+2])}let C=new L,T=new L,b=new L,R=new L;function _(M){b.fromArray(r,M*3),R.copy(b);let D=c[M];C.copy(D),C.sub(b.multiplyScalar(b.dot(D))).normalize(),T.crossVectors(R,D);let K=T.dot(h[M])<0?-1:1;l[M*4]=C.x,l[M*4+1]=C.y,l[M*4+2]=C.z,l[M*4+3]=K}for(let M=0,D=S.length;M<D;++M){let k=S[M],K=k.start,I=k.count;for(let F=K,$=K+I;F<$;F+=3)_(n[F+0]),_(n[F+1]),_(n[F+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new mn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},mu=new ge,Ui=new Na,la=new Vi,gu=new L,ps=new L,ms=new L,gs=new L,ul=new L,ca=new L,ha=new ft,ua=new ft,da=new ft,yu=new L,xu=new L,_u=new L,fa=new L,pa=new L,wt=class extends Ie{constructor(t=new Xe,e=new Pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ca.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(ul.fromBufferAttribute(u,t),a?ca.addScaledVector(ul,h):ca.addScaledVector(ul.sub(e),h))}e.add(ca)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(r),Ui.copy(t.ray).recast(t.near),!(la.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(la,gu)===null||Ui.origin.distanceToSquared(gu)>(t.far-t.near)**2))&&(mu.copy(r).invert(),Ui.copy(t.ray).applyMatrix4(mu),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ui)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,C=x;S<C;S+=3){let T=o.getX(S),b=o.getX(S+1),R=o.getX(S+2);s=ma(this,p,t,n,c,h,u,T,b,R),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let v=o.getX(m),x=o.getX(m+1),S=o.getX(m+2);s=ma(this,a,t,n,c,h,u,v,x,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,C=x;S<C;S+=3){let T=S,b=S+1,R=S+2;s=ma(this,p,t,n,c,h,u,T,b,R),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let v=m,x=m+1,S=m+2;s=ma(this,a,t,n,c,h,u,v,x,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};de=class i extends Xe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function g(y,m,p,v,x,S,C,T,b,R,_){let M=S/b,D=C/R,k=S/2,K=C/2,I=T/2,F=b+1,$=R+1,J=0,Z=0,Y=new L;for(let tt=0;tt<$;tt++){let st=tt*D-K;for(let ct=0;ct<F;ct++){let q=ct*M-k;Y[y]=q*v,Y[m]=st*x,Y[p]=I,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[p]=T>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(ct/b),u.push(1-tt/R),J+=1}}for(let tt=0;tt<R;tt++)for(let st=0;st<b;st++){let ct=d+st+F*tt,q=d+st+F*(tt+1),j=d+(st+1)+F*(tt+1),lt=d+(st+1)+F*tt;l.push(ct,q,lt),l.push(q,j,lt),Z+=6}o.addGroup(f,Z,_),f+=Z,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};im={clone:Is,merge:en},sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,In=class extends Gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sm,this.fragmentShader=rm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=nm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Fa=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Le=class extends Fa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Cl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Yo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cl*2*Math.atan(Math.tan(Yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Yo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ys=-90,xs=1,Il=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Le(ys,xs,t,e);s.layers=this.layers,this.add(s);let r=new Le(ys,xs,t,e);r.layers=this.layers,this.add(r);let a=new Le(ys,xs,t,e);a.layers=this.layers,this.add(a);let o=new Le(ys,xs,t,e);o.layers=this.layers,this.add(o);let l=new Le(ys,xs,t,e);l.layers=this.layers,this.add(l);let c=new Le(ys,xs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ba=class extends wn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Cs,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Dl=class extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(cr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Hi?pe:Sn),this.texture=new Ba(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new de(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:gi});r.uniforms.tEquirect.value=e;let a=new wt(s,r),o=e.minFilter;return e.minFilter===gr&&(e.minFilter=bn),new Il(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},dl=new L,am=new L,om=new Jt,Rn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=dl.subVectors(n,e).cross(am.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(dl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||om.getNormalMatrix(t),s=this.coplanarPoint(dl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ni=new Vi,ga=new L,_r=class{constructor(t=new Rn,e=new Rn,n=new Rn,s=new Rn,r=new Rn,a=new Rn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],y=s[10],m=s[11],p=s[12],v=s[13],x=s[14],S=s[15];if(n[0].setComponents(l-r,d-c,m-f,S-p).normalize(),n[1].setComponents(l+r,d+c,m+f,S+p).normalize(),n[2].setComponents(l+a,d+h,m+g,S+v).normalize(),n[3].setComponents(l-a,d-h,m-g,S-v).normalize(),n[4].setComponents(l-o,d-u,m-y,S-x).normalize(),e===Qn)n[5].setComponents(l+o,d+u,m+y,S+x).normalize();else if(e===Pa)n[5].setComponents(o,u,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(t){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ga.x=s.normal.x>0?t.max.x:t.min.x,ga.y=s.normal.y>0?t.max.y:t.min.y,ga.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ga)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Wi=class i extends Xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let v=p*d-a;for(let x=0;x<c;x++){let S=x*u-r;g.push(S,-v,0),y.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){let x=v+c*p,S=v+c*(p+1),C=v+1+c*(p+1),T=v+1+c*p;f.push(x,S,T),f.push(S,C,T)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(y,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},cm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hm=`#ifdef USE_ALPHAHASH
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
#endif`,um=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,pm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mm=`#ifdef USE_AOMAP
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
#endif`,gm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ym=`#ifdef USE_BATCHING
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
#endif`,xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,_m=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bm=`#ifdef USE_IRIDESCENCE
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
#endif`,Sm=`#ifdef USE_BUMPMAP
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
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Im=`#define PI 3.141592653589793
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
} // validated`,Dm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Um=`vec3 transformedNormal = objectNormal;
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
#endif`,Nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,km=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Om=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",zm=`
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
}`,Hm=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Vm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jm=`#ifdef USE_GRADIENTMAP
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
}`,jm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Km=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e0=`uniform bool receiveShadow;
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
#endif`,n0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,i0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o0=`PhysicalMaterial material;
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
#endif`,l0=`struct PhysicalMaterial {
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
}`,c0=`
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
#endif`,h0=`#if defined( RE_IndirectDiffuse )
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
#endif`,u0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,m0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,g0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,y0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_0=`#if defined( USE_POINTS_UV )
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
#endif`,v0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S0=`#ifdef USE_MORPHNORMALS
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
#endif`,w0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
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
#endif`,E0=`#ifdef USE_MORPHTARGETS
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
#endif`,T0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,A0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,C0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,L0=`#ifdef USE_NORMALMAP
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
#endif`,I0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,F0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$0=`float getShadowMask() {
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
}`,Y0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z0=`#ifdef USE_SKINNING
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
#endif`,J0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j0=`#ifdef USE_SKINNING
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
#endif`,K0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eg=`#ifndef saturate
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ng=`#ifdef USE_TRANSMISSION
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
#endif`,ig=`#ifdef USE_TRANSMISSION
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
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cg=`uniform sampler2D t2D;
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
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`#include <common>
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
}`,mg=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
}`,gg=`#define DISTANCE
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
}`,yg=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bg=`#include <common>
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
}`,Sg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,wg=`#define LAMBERT
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
}`,Eg=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Tg=`#define MATCAP
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
}`,Ag=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Cg=`#define NORMAL
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
}`,Rg=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pg=`#define PHONG
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
}`,Lg=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ig=`#define STANDARD
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
}`,Dg=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ug=`#define TOON
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
}`,Ng=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,kg=`uniform float size;
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
}`,Og=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Fg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Bg=`uniform vec3 color;
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
}`,zg=`uniform float rotation;
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
}`,Hg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Wt={alphahash_fragment:cm,alphahash_pars_fragment:hm,alphamap_fragment:um,alphamap_pars_fragment:dm,alphatest_fragment:fm,alphatest_pars_fragment:pm,aomap_fragment:mm,aomap_pars_fragment:gm,batching_pars_vertex:ym,batching_vertex:xm,begin_vertex:_m,beginnormal_vertex:vm,bsdfs:Mm,iridescence_fragment:bm,bumpmap_pars_fragment:Sm,clipping_planes_fragment:wm,clipping_planes_pars_fragment:Em,clipping_planes_pars_vertex:Tm,clipping_planes_vertex:Am,color_fragment:Cm,color_pars_fragment:Rm,color_pars_vertex:Pm,color_vertex:Lm,common:Im,cube_uv_reflection_fragment:Dm,defaultnormal_vertex:Um,displacementmap_pars_vertex:Nm,displacementmap_vertex:km,emissivemap_fragment:Om,emissivemap_pars_fragment:Fm,colorspace_fragment:Bm,colorspace_pars_fragment:zm,envmap_fragment:Hm,envmap_common_pars_fragment:Vm,envmap_pars_fragment:Gm,envmap_pars_vertex:Wm,envmap_physical_pars_fragment:n0,envmap_vertex:qm,fog_vertex:Xm,fog_pars_vertex:$m,fog_fragment:Ym,fog_pars_fragment:Zm,gradientmap_pars_fragment:Jm,lightmap_fragment:jm,lightmap_pars_fragment:Km,lights_lambert_fragment:Qm,lights_lambert_pars_fragment:t0,lights_pars_begin:e0,lights_toon_fragment:i0,lights_toon_pars_fragment:s0,lights_phong_fragment:r0,lights_phong_pars_fragment:a0,lights_physical_fragment:o0,lights_physical_pars_fragment:l0,lights_fragment_begin:c0,lights_fragment_maps:h0,lights_fragment_end:u0,logdepthbuf_fragment:d0,logdepthbuf_pars_fragment:f0,logdepthbuf_pars_vertex:p0,logdepthbuf_vertex:m0,map_fragment:g0,map_pars_fragment:y0,map_particle_fragment:x0,map_particle_pars_fragment:_0,metalnessmap_fragment:v0,metalnessmap_pars_fragment:M0,morphcolor_vertex:b0,morphnormal_vertex:S0,morphtarget_pars_vertex:w0,morphtarget_vertex:E0,normal_fragment_begin:T0,normal_fragment_maps:A0,normal_pars_fragment:C0,normal_pars_vertex:R0,normal_vertex:P0,normalmap_pars_fragment:L0,clearcoat_normal_fragment_begin:I0,clearcoat_normal_fragment_maps:D0,clearcoat_pars_fragment:U0,iridescence_pars_fragment:N0,opaque_fragment:k0,packing:O0,premultiplied_alpha_fragment:F0,project_vertex:B0,dithering_fragment:z0,dithering_pars_fragment:H0,roughnessmap_fragment:V0,roughnessmap_pars_fragment:G0,shadowmap_pars_fragment:W0,shadowmap_pars_vertex:q0,shadowmap_vertex:X0,shadowmask_pars_fragment:$0,skinbase_vertex:Y0,skinning_pars_vertex:Z0,skinning_vertex:J0,skinnormal_vertex:j0,specularmap_fragment:K0,specularmap_pars_fragment:Q0,tonemapping_fragment:tg,tonemapping_pars_fragment:eg,transmission_fragment:ng,transmission_pars_fragment:ig,uv_pars_fragment:sg,uv_pars_vertex:rg,uv_vertex:ag,worldpos_vertex:og,background_vert:lg,background_frag:cg,backgroundCube_vert:hg,backgroundCube_frag:ug,cube_vert:dg,cube_frag:fg,depth_vert:pg,depth_frag:mg,distanceRGBA_vert:gg,distanceRGBA_frag:yg,equirect_vert:xg,equirect_frag:_g,linedashed_vert:vg,linedashed_frag:Mg,meshbasic_vert:bg,meshbasic_frag:Sg,meshlambert_vert:wg,meshlambert_frag:Eg,meshmatcap_vert:Tg,meshmatcap_frag:Ag,meshnormal_vert:Cg,meshnormal_frag:Rg,meshphong_vert:Pg,meshphong_frag:Lg,meshphysical_vert:Ig,meshphysical_frag:Dg,meshtoon_vert:Ug,meshtoon_frag:Ng,points_vert:kg,points_frag:Og,shadow_vert:Fg,shadow_frag:Bg,sprite_vert:zg,sprite_frag:Hg},ot={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Fn={basic:{uniforms:en([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:en([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:en([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:en([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:en([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:en([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:en([ot.points,ot.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:en([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:en([ot.common,ot.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:en([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:en([ot.sprite,ot.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:en([ot.common,ot.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:en([ot.lights,ot.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Fn.physical={uniforms:en([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};ya={r:0,b:0,g:0};za=class extends Fa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},bs=4,vu=[.125,.215,.35,.446,.526,.582],Fi=20,fl=new za,Mu=new Pt,pl=null,ml=0,gl=0,ki=(1+Math.sqrt(5))/2,_s=1/ki,bu=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,ki,_s),new L(0,ki,-_s),new L(_s,0,ki),new L(-_s,0,ki),new L(ki,_s,0),new L(-ki,_s,0)],Ha=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){pl=this._renderer.getRenderTarget(),ml=this._renderer.getActiveCubeFace(),gl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pl,ml,gl),t.scissorTest=!1,xa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cs||t.mapping===Rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pl=this._renderer.getRenderTarget(),ml=this._renderer.getActiveCubeFace(),gl=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:yr,format:Ln,colorSpace:ti,depthBuffer:!1},s=Su(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Su(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yg(r)),this._blurMaterial=Zg(r,t,e)}return s}_compileMaterial(t){let e=new wt(this._lodPlanes[0],t);this._renderer.compile(e,fl)}_sceneToCubeUV(t,e,n,s){let o=new Le(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Mu),h.toneMapping=yi,h.autoClear=!1;let f=new Pe({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),g=new wt(new de,f),y=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,y=!0):(f.color.copy(Mu),y=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):v===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let x=this._cubeSize;xa(s,v*x,p>2?x:0,x,x),h.setRenderTarget(s),y&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Cs||t.mapping===Rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new wt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;xa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,fl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=bu[(s-1)%bu.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new wt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Fi-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):Fi;m>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);let p=[],v=0;for(let b=0;b<Fi;++b){let R=b/y,_=Math.exp(-R*R/2);p.push(_),b===0?v+=_:b<m&&(v+=2*_)}for(let b=0;b<p.length;b++)p[b]=p[b]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let S=this._sizeLods[s],C=3*S*(s>x-bs?s-x+bs:0),T=4*(this._cubeSize-S);xa(e,C,T,3*S,2*S),l.setRenderTarget(e),l.render(u,fl)}};Va=class extends wn{constructor(t,e,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:zi,h!==zi&&h!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zi&&(n=pi),n===void 0&&h===Ps&&(n=Bi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},pd=new wn,md=new Va(1,1);md.compareFunction=ld;gd=new Ua,yd=new Ll,xd=new Ba,Tu=[],Au=[],Cu=new Float32Array(16),Ru=new Float32Array(9),Pu=new Float32Array(4);Ul=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=wy(e.type)}},Nl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Wy(e.type)}},kl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},yl=/(\w+)(\])?(\[|\.)?/g;As=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);qy(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};Xy=37297,$y=0;nx=/^[ \t]*#include +<([\w\d./]+)>/gm;ix=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;fx=0,Fl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Bl(t),e.set(t,n)),n}},Bl=class{constructor(t){this.id=fx++,this.code=t,this.usedTimes=0}};vx=0;zl=class extends Gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Hl=class extends Gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},wx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ex=`uniform sampler2D shadow_pass;
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
}`;Vl=class extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ie=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},Px={type:"move"},hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Px)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Gl=class extends vi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,y=e.getContextAttributes(),m=null,p=null,v=[],x=[],S=new ft,C=null,T=new Le;T.layers.enable(1),T.viewport=new Ve;let b=new Le;b.layers.enable(2),b.viewport=new Ve;let R=[T,b],_=new Vl;_.layers.enable(1),_.layers.enable(2);let M=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=v[q];return j===void 0&&(j=new hr,v[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=v[q];return j===void 0&&(j=new hr,v[q]=j),j.getGripSpace()},this.getHand=function(q){let j=v[q];return j===void 0&&(j=new hr,v[q]=j),j.getHandSpace()};function k(q){let j=x.indexOf(q.inputSource);if(j===-1)return;let lt=v[j];lt!==void 0&&(lt.update(q.inputSource,q.frame,c||a),lt.dispatchEvent({type:q.type,data:q.inputSource}))}function K(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",I);for(let q=0;q<v.length;q++){let j=x[q];j!==null&&(x[q]=null,v[q].disconnect(j))}M=null,D=null,t.setRenderTarget(m),f=null,d=null,u=null,s=null,p=null,ct.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",K),s.addEventListener("inputsourceschange",I),y.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(S),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let j={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new ei(f.framebufferWidth,f.framebufferHeight,{format:Ln,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let j=null,lt=null,Tt=null;y.depth&&(Tt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=y.stencil?Ps:zi,lt=y.stencil?Bi:pi);let St={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(St),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new ei(d.textureWidth,d.textureHeight,{format:Ln,type:xi,depthTexture:new Va(d.textureWidth,d.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0});let zt=t.properties.get(p);zt.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ct.setContext(s),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(q){for(let j=0;j<q.removed.length;j++){let lt=q.removed[j],Tt=x.indexOf(lt);Tt>=0&&(x[Tt]=null,v[Tt].disconnect(lt))}for(let j=0;j<q.added.length;j++){let lt=q.added[j],Tt=x.indexOf(lt);if(Tt===-1){for(let zt=0;zt<v.length;zt++)if(zt>=x.length){x.push(lt),Tt=zt;break}else if(x[zt]===null){x[zt]=lt,Tt=zt;break}if(Tt===-1)break}let St=v[Tt];St&&St.connect(lt)}}let F=new L,$=new L;function J(q,j,lt){F.setFromMatrixPosition(j.matrixWorld),$.setFromMatrixPosition(lt.matrixWorld);let Tt=F.distanceTo($),St=j.projectionMatrix.elements,zt=lt.projectionMatrix.elements,Vt=St[14]/(St[10]-1),Dt=St[14]/(St[10]+1),ne=(St[9]+1)/St[5],z=(St[9]-1)/St[5],Ke=(St[8]-1)/St[0],Ct=(zt[8]+1)/zt[0],Ft=Vt*Ke,_t=Vt*Ct,ye=Tt/(-Ke+Ct),qt=ye*-Ke;j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(qt),q.translateZ(ye),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let A=Vt+ye,w=Dt+ye,V=Ft-qt,it=_t+(Tt-qt),nt=ne*Dt/w*A,rt=z*Dt/w*A;q.projectionMatrix.makePerspective(V,it,nt,rt,A,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function Z(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;_.near=b.near=T.near=q.near,_.far=b.far=T.far=q.far,(M!==_.near||D!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),M=_.near,D=_.far);let j=q.parent,lt=_.cameras;Z(_,j);for(let Tt=0;Tt<lt.length;Tt++)Z(lt[Tt],j);lt.length===2?J(_,T,b):_.projectionMatrix.copy(T.projectionMatrix),Y(q,_,j)};function Y(q,j,lt){lt===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(lt.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Cl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)};let tt=null;function st(q,j){if(h=j.getViewerPose(c||a),g=j,h!==null){let lt=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let Tt=!1;lt.length!==_.cameras.length&&(_.cameras.length=0,Tt=!0);for(let St=0;St<lt.length;St++){let zt=lt[St],Vt=null;if(f!==null)Vt=f.getViewport(zt);else{let ne=u.getViewSubImage(d,zt);Vt=ne.viewport,St===0&&(t.setRenderTargetTextures(p,ne.colorTexture,d.ignoreDepthValues?void 0:ne.depthStencilTexture),t.setRenderTarget(p))}let Dt=R[St];Dt===void 0&&(Dt=new Le,Dt.layers.enable(St),Dt.viewport=new Ve,R[St]=Dt),Dt.matrix.fromArray(zt.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(zt.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),St===0&&(_.matrix.copy(Dt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),Tt===!0&&_.cameras.push(Dt)}}for(let lt=0;lt<v.length;lt++){let Tt=x[lt],St=v[lt];Tt!==null&&St!==void 0&&St.update(Tt,j,c||a)}tt&&tt(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let ct=new fd;ct.setAnimationLoop(st),this.setAnimationLoop=function(q){tt=q},this.dispose=function(){}}};qi=class{constructor(t={}){let{canvas:e=Hp(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),g=new Int32Array(4),y=null,m=null,p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pe,this._useLegacyLights=!1,this.toneMapping=yi,this.toneMappingExposure=1;let x=this,S=!1,C=0,T=0,b=null,R=-1,_=null,M=new Ve,D=new Ve,k=null,K=new Pt(0),I=0,F=e.width,$=e.height,J=1,Z=null,Y=null,tt=new Ve(0,0,F,$),st=new Ve(0,0,F,$),ct=!1,q=new _r,j=!1,lt=!1,Tt=null,St=new ge,zt=new ft,Vt=new L,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return b===null?J:1}let z=n;function Ke(E,N){for(let G=0;G<E.length;G++){let W=E[G],H=e.getContext(W,N);if(H!==null)return H}return null}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",ht,!1),z===null){let N=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&N.shift(),z=Ke(N,E),z===null)throw Ke(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ct,Ft,_t,ye,qt,A,w,V,it,nt,rt,vt,dt,gt,It,Xt,et,ae,jt,Ot,At,yt,Gt,re;function Me(){Ct=new jg(z),Ft=new qg(z,Ct,t),Ct.init(Ft),yt=new Rx(z,Ct,Ft),_t=new Ax(z,Ct,Ft),ye=new ty(z),qt=new mx,A=new Cx(z,Ct,_t,qt,Ft,yt,ye),w=new $g(x),V=new Jg(x),it=new lm(z,Ft),Gt=new Gg(z,Ct,it,Ft),nt=new Kg(z,it,ye,Gt),rt=new sy(z,nt,it,ye),jt=new iy(z,Ft,A),Xt=new Xg(qt),vt=new px(x,w,V,Ct,Ft,Gt,Xt),dt=new Lx(x,qt),gt=new yx,It=new Sx(Ct,Ft),ae=new Vg(x,w,V,_t,rt,d,l),et=new Tx(x,rt,Ft),re=new Ix(z,ye,Ft,_t),Ot=new Wg(z,Ct,ye,Ft),At=new Qg(z,Ct,ye,Ft),ye.programs=vt.programs,x.capabilities=Ft,x.extensions=Ct,x.properties=qt,x.renderLists=gt,x.shadowMap=et,x.state=_t,x.info=ye}Me();let Yt=new Gl(x,z);this.xr=Yt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let E=Ct.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ct.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(E){E!==void 0&&(J=E,this.setSize(F,$,!1))},this.getSize=function(E){return E.set(F,$)},this.setSize=function(E,N,G=!0){if(Yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=E,$=N,e.width=Math.floor(E*J),e.height=Math.floor(N*J),G===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(F*J,$*J).floor()},this.setDrawingBufferSize=function(E,N,G){F=E,$=N,J=G,e.width=Math.floor(E*G),e.height=Math.floor(N*G),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(M)},this.getViewport=function(E){return E.copy(tt)},this.setViewport=function(E,N,G,W){E.isVector4?tt.set(E.x,E.y,E.z,E.w):tt.set(E,N,G,W),_t.viewport(M.copy(tt).multiplyScalar(J).floor())},this.getScissor=function(E){return E.copy(st)},this.setScissor=function(E,N,G,W){E.isVector4?st.set(E.x,E.y,E.z,E.w):st.set(E,N,G,W),_t.scissor(D.copy(st).multiplyScalar(J).floor())},this.getScissorTest=function(){return ct},this.setScissorTest=function(E){_t.setScissorTest(ct=E)},this.setOpaqueSort=function(E){Z=E},this.setTransparentSort=function(E){Y=E},this.getClearColor=function(E){return E.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(E=!0,N=!0,G=!0){let W=0;if(E){let H=!1;if(b!==null){let mt=b.texture.format;H=mt===sd||mt===id||mt===nd}if(H){let mt=b.texture.type,Mt=mt===xi||mt===pi||mt===gc||mt===Bi||mt===td||mt===ed,Lt=ae.getClearColor(),Nt=ae.getClearAlpha(),$t=Lt.r,Bt=Lt.g,Ht=Lt.b;Mt?(f[0]=$t,f[1]=Bt,f[2]=Ht,f[3]=Nt,z.clearBufferuiv(z.COLOR,0,f)):(g[0]=$t,g[1]=Bt,g[2]=Ht,g[3]=Nt,z.clearBufferiv(z.COLOR,0,g))}else W|=z.COLOR_BUFFER_BIT}N&&(W|=z.DEPTH_BUFFER_BIT),G&&(W|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),gt.dispose(),It.dispose(),qt.dispose(),w.dispose(),V.dispose(),rt.dispose(),Gt.dispose(),re.dispose(),vt.dispose(),Yt.dispose(),Yt.removeEventListener("sessionstart",Qe),Yt.removeEventListener("sessionend",ue),Tt&&(Tt.dispose(),Tt=null),tn.stop()};function at(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let E=ye.autoReset,N=et.enabled,G=et.autoUpdate,W=et.needsUpdate,H=et.type;Me(),ye.autoReset=E,et.enabled=N,et.autoUpdate=G,et.needsUpdate=W,et.type=H}function ht(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ut(E){let N=E.target;N.removeEventListener("dispose",ut),Ut(N)}function Ut(E){Rt(E),qt.remove(E)}function Rt(E){let N=qt.get(E).programs;N!==void 0&&(N.forEach(function(G){vt.releaseProgram(G)}),E.isShaderMaterial&&vt.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,G,W,H,mt){N===null&&(N=Dt);let Mt=H.isMesh&&H.matrixWorld.determinant()<0,Lt=Of(E,N,G,W,H);_t.setMaterial(W,Mt);let Nt=G.index,$t=1;if(W.wireframe===!0){if(Nt=nt.getWireframeAttribute(G),Nt===void 0)return;$t=2}let Bt=G.drawRange,Ht=G.attributes.position,Ee=Bt.start*$t,dn=(Bt.start+Bt.count)*$t;mt!==null&&(Ee=Math.max(Ee,mt.start*$t),dn=Math.min(dn,(mt.start+mt.count)*$t)),Nt!==null?(Ee=Math.max(Ee,0),dn=Math.min(dn,Nt.count)):Ht!=null&&(Ee=Math.max(Ee,0),dn=Math.min(dn,Ht.count));let Fe=dn-Ee;if(Fe<0||Fe===1/0)return;Gt.setup(H,W,Lt,G,Nt);let Xn,xe=Ot;if(Nt!==null&&(Xn=it.get(Nt),xe=At,xe.setIndex(Xn)),H.isMesh)W.wireframe===!0?(_t.setLineWidth(W.wireframeLinewidth*ne()),xe.setMode(z.LINES)):xe.setMode(z.TRIANGLES);else if(H.isLine){let Zt=W.linewidth;Zt===void 0&&(Zt=1),_t.setLineWidth(Zt*ne()),H.isLineSegments?xe.setMode(z.LINES):H.isLineLoop?xe.setMode(z.LINE_LOOP):xe.setMode(z.LINE_STRIP)}else H.isPoints?xe.setMode(z.POINTS):H.isSprite&&xe.setMode(z.TRIANGLES);if(H.isBatchedMesh)xe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)xe.renderInstances(Ee,Fe,H.count);else if(G.isInstancedBufferGeometry){let Zt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Oo=Math.min(G.instanceCount,Zt);xe.renderInstances(Ee,Fe,Oo)}else xe.render(Ee,Fe)};function ce(E,N,G){E.transparent===!0&&E.side===He&&E.forceSinglePass===!1?(E.side=an,E.needsUpdate=!0,Jr(E,N,G),E.side=_i,E.needsUpdate=!0,Jr(E,N,G),E.side=He):Jr(E,N,G)}this.compile=function(E,N,G=null){G===null&&(G=E),m=It.get(G),m.init(),v.push(m),G.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),E!==G&&E.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(x._useLegacyLights);let W=new Set;return E.traverse(function(H){let mt=H.material;if(mt)if(Array.isArray(mt))for(let Mt=0;Mt<mt.length;Mt++){let Lt=mt[Mt];ce(Lt,G,H),W.add(Lt)}else ce(mt,G,H),W.add(mt)}),v.pop(),m=null,W},this.compileAsync=function(E,N,G=null){let W=this.compile(E,N,G);return new Promise(H=>{function mt(){if(W.forEach(function(Mt){qt.get(Mt).currentProgram.isReady()&&W.delete(Mt)}),W.size===0){H(E);return}setTimeout(mt,10)}Ct.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let he=null;function Oe(E){he&&he(E)}function Qe(){tn.stop()}function ue(){tn.start()}let tn=new fd;tn.setAnimationLoop(Oe),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(E){he=E,Yt.setAnimationLoop(E),E===null?tn.stop():tn.start()},Yt.addEventListener("sessionstart",Qe),Yt.addEventListener("sessionend",ue),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Yt.enabled===!0&&Yt.isPresenting===!0&&(Yt.cameraAutoUpdate===!0&&Yt.updateCamera(N),N=Yt.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,N,b),m=It.get(E,v.length),m.init(),v.push(m),St.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(St),lt=this.localClippingEnabled,j=Xt.init(this.clippingPlanes,lt),y=gt.get(E,p.length),y.init(),p.push(y),On(E,N,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(Z,Y),this.info.render.frame++,j===!0&&Xt.beginShadows();let G=m.state.shadowsArray;if(et.render(G,E,N),j===!0&&Xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(y,E),m.setupLights(x._useLegacyLights),N.isArrayCamera){let W=N.cameras;for(let H=0,mt=W.length;H<mt;H++){let Mt=W[H];ph(y,E,Mt,Mt.viewport)}}else ph(y,E,N);b!==null&&(A.updateMultisampleRenderTarget(b),A.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(x,E,N),Gt.resetDefaultState(),R=-1,_=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function On(E,N,G,W){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){W&&Vt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(St);let Mt=rt.update(E),Lt=E.material;Lt.visible&&y.push(E,Mt,Lt,G,Vt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){let Mt=rt.update(E),Lt=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Vt.copy(E.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Vt.copy(Mt.boundingSphere.center)),Vt.applyMatrix4(E.matrixWorld).applyMatrix4(St)),Array.isArray(Lt)){let Nt=Mt.groups;for(let $t=0,Bt=Nt.length;$t<Bt;$t++){let Ht=Nt[$t],Ee=Lt[Ht.materialIndex];Ee&&Ee.visible&&y.push(E,Mt,Ee,G,Vt.z,Ht)}}else Lt.visible&&y.push(E,Mt,Lt,G,Vt.z,null)}}let mt=E.children;for(let Mt=0,Lt=mt.length;Mt<Lt;Mt++)On(mt[Mt],N,G,W)}function ph(E,N,G,W){let H=E.opaque,mt=E.transmissive,Mt=E.transparent;m.setupLightsView(G),j===!0&&Xt.setGlobalState(x.clippingPlanes,G),mt.length>0&&kf(H,mt,N,G),W&&_t.viewport(M.copy(W)),H.length>0&&Zr(H,N,G),mt.length>0&&Zr(mt,N,G),Mt.length>0&&Zr(Mt,N,G),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function kf(E,N,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;let mt=Ft.isWebGL2;Tt===null&&(Tt=new ei(1,1,{generateMipmaps:!0,type:Ct.has("EXT_color_buffer_half_float")?yr:xi,minFilter:gr,samples:mt?4:0})),x.getDrawingBufferSize(zt),mt?Tt.setSize(zt.x,zt.y):Tt.setSize(Rl(zt.x),Rl(zt.y));let Mt=x.getRenderTarget();x.setRenderTarget(Tt),x.getClearColor(K),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();let Lt=x.toneMapping;x.toneMapping=yi,Zr(E,G,W),A.updateMultisampleRenderTarget(Tt),A.updateRenderTargetMipmap(Tt);let Nt=!1;for(let $t=0,Bt=N.length;$t<Bt;$t++){let Ht=N[$t],Ee=Ht.object,dn=Ht.geometry,Fe=Ht.material,Xn=Ht.group;if(Fe.side===He&&Ee.layers.test(W.layers)){let xe=Fe.side;Fe.side=an,Fe.needsUpdate=!0,mh(Ee,G,W,dn,Fe,Xn),Fe.side=xe,Fe.needsUpdate=!0,Nt=!0}}Nt===!0&&(A.updateMultisampleRenderTarget(Tt),A.updateRenderTargetMipmap(Tt)),x.setRenderTarget(Mt),x.setClearColor(K,I),x.toneMapping=Lt}function Zr(E,N,G){let W=N.isScene===!0?N.overrideMaterial:null;for(let H=0,mt=E.length;H<mt;H++){let Mt=E[H],Lt=Mt.object,Nt=Mt.geometry,$t=W===null?Mt.material:W,Bt=Mt.group;Lt.layers.test(G.layers)&&mh(Lt,N,G,Nt,$t,Bt)}}function mh(E,N,G,W,H,mt){E.onBeforeRender(x,N,G,W,H,mt),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(x,N,G,W,E,mt),H.transparent===!0&&H.side===He&&H.forceSinglePass===!1?(H.side=an,H.needsUpdate=!0,x.renderBufferDirect(G,N,W,H,E,mt),H.side=_i,H.needsUpdate=!0,x.renderBufferDirect(G,N,W,H,E,mt),H.side=He):x.renderBufferDirect(G,N,W,H,E,mt),E.onAfterRender(x,N,G,W,H,mt)}function Jr(E,N,G){N.isScene!==!0&&(N=Dt);let W=qt.get(E),H=m.state.lights,mt=m.state.shadowsArray,Mt=H.state.version,Lt=vt.getParameters(E,H.state,mt,N,G),Nt=vt.getProgramCacheKey(Lt),$t=W.programs;W.environment=E.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(E.isMeshStandardMaterial?V:w).get(E.envMap||W.environment),$t===void 0&&(E.addEventListener("dispose",ut),$t=new Map,W.programs=$t);let Bt=$t.get(Nt);if(Bt!==void 0){if(W.currentProgram===Bt&&W.lightsStateVersion===Mt)return yh(E,Lt),Bt}else Lt.uniforms=vt.getUniforms(E),E.onBuild(G,Lt,x),E.onBeforeCompile(Lt,x),Bt=vt.acquireProgram(Lt,Nt),$t.set(Nt,Bt),W.uniforms=Lt.uniforms;let Ht=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ht.clippingPlanes=Xt.uniform),yh(E,Lt),W.needsLights=Bf(E),W.lightsStateVersion=Mt,W.needsLights&&(Ht.ambientLightColor.value=H.state.ambient,Ht.lightProbe.value=H.state.probe,Ht.directionalLights.value=H.state.directional,Ht.directionalLightShadows.value=H.state.directionalShadow,Ht.spotLights.value=H.state.spot,Ht.spotLightShadows.value=H.state.spotShadow,Ht.rectAreaLights.value=H.state.rectArea,Ht.ltc_1.value=H.state.rectAreaLTC1,Ht.ltc_2.value=H.state.rectAreaLTC2,Ht.pointLights.value=H.state.point,Ht.pointLightShadows.value=H.state.pointShadow,Ht.hemisphereLights.value=H.state.hemi,Ht.directionalShadowMap.value=H.state.directionalShadowMap,Ht.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ht.spotShadowMap.value=H.state.spotShadowMap,Ht.spotLightMatrix.value=H.state.spotLightMatrix,Ht.spotLightMap.value=H.state.spotLightMap,Ht.pointShadowMap.value=H.state.pointShadowMap,Ht.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=Bt,W.uniformsList=null,Bt}function gh(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=As.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function yh(E,N){let G=qt.get(E);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Of(E,N,G,W,H){N.isScene!==!0&&(N=Dt),A.resetTextureUnits();let mt=N.fog,Mt=W.isMeshStandardMaterial?N.environment:null,Lt=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ti,Nt=(W.isMeshStandardMaterial?V:w).get(W.envMap||Mt),$t=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Bt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ht=!!G.morphAttributes.position,Ee=!!G.morphAttributes.normal,dn=!!G.morphAttributes.color,Fe=yi;W.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Fe=x.toneMapping);let Xn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,xe=Xn!==void 0?Xn.length:0,Zt=qt.get(W),Oo=m.state.lights;if(j===!0&&(lt===!0||E!==_)){let vn=E===_&&W.id===R;Xt.setState(W,E,vn)}let be=!1;W.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Oo.state.version||Zt.outputColorSpace!==Lt||H.isBatchedMesh&&Zt.batching===!1||!H.isBatchedMesh&&Zt.batching===!0||H.isInstancedMesh&&Zt.instancing===!1||!H.isInstancedMesh&&Zt.instancing===!0||H.isSkinnedMesh&&Zt.skinning===!1||!H.isSkinnedMesh&&Zt.skinning===!0||H.isInstancedMesh&&Zt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Zt.instancingColor===!1&&H.instanceColor!==null||Zt.envMap!==Nt||W.fog===!0&&Zt.fog!==mt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Xt.numPlanes||Zt.numIntersection!==Xt.numIntersection)||Zt.vertexAlphas!==$t||Zt.vertexTangents!==Bt||Zt.morphTargets!==Ht||Zt.morphNormals!==Ee||Zt.morphColors!==dn||Zt.toneMapping!==Fe||Ft.isWebGL2===!0&&Zt.morphTargetsCount!==xe)&&(be=!0):(be=!0,Zt.__version=W.version);let Pi=Zt.currentProgram;be===!0&&(Pi=Jr(W,N,H));let xh=!1,er=!1,Fo=!1,Ze=Pi.getUniforms(),Li=Zt.uniforms;if(_t.useProgram(Pi.program)&&(xh=!0,er=!0,Fo=!0),W.id!==R&&(R=W.id,er=!0),xh||_!==E){Ze.setValue(z,"projectionMatrix",E.projectionMatrix),Ze.setValue(z,"viewMatrix",E.matrixWorldInverse);let vn=Ze.map.cameraPosition;vn!==void 0&&vn.setValue(z,Vt.setFromMatrixPosition(E.matrixWorld)),Ft.logarithmicDepthBuffer&&Ze.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ze.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),_!==E&&(_=E,er=!0,Fo=!0)}if(H.isSkinnedMesh){Ze.setOptional(z,H,"bindMatrix"),Ze.setOptional(z,H,"bindMatrixInverse");let vn=H.skeleton;vn&&(Ft.floatVertexTextures?(vn.boneTexture===null&&vn.computeBoneTexture(),Ze.setValue(z,"boneTexture",vn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Ze.setOptional(z,H,"batchingTexture"),Ze.setValue(z,"batchingTexture",H._matricesTexture,A));let Bo=G.morphAttributes;if((Bo.position!==void 0||Bo.normal!==void 0||Bo.color!==void 0&&Ft.isWebGL2===!0)&&jt.update(H,G,Pi),(er||Zt.receiveShadow!==H.receiveShadow)&&(Zt.receiveShadow=H.receiveShadow,Ze.setValue(z,"receiveShadow",H.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Li.envMap.value=Nt,Li.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),er&&(Ze.setValue(z,"toneMappingExposure",x.toneMappingExposure),Zt.needsLights&&Ff(Li,Fo),mt&&W.fog===!0&&dt.refreshFogUniforms(Li,mt),dt.refreshMaterialUniforms(Li,W,J,$,Tt),As.upload(z,gh(Zt),Li,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(As.upload(z,gh(Zt),Li,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ze.setValue(z,"center",H.center),Ze.setValue(z,"modelViewMatrix",H.modelViewMatrix),Ze.setValue(z,"normalMatrix",H.normalMatrix),Ze.setValue(z,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let vn=W.uniformsGroups;for(let zo=0,zf=vn.length;zo<zf;zo++)if(Ft.isWebGL2){let _h=vn[zo];re.update(_h,Pi),re.bind(_h,Pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pi}function Ff(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Bf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,N,G){qt.get(E.texture).__webglTexture=N,qt.get(E.depthTexture).__webglTexture=G;let W=qt.get(E);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,N){let G=qt.get(E);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,G=0){b=E,C=N,T=G;let W=!0,H=null,mt=!1,Mt=!1;if(E){let Nt=qt.get(E);Nt.__useDefaultFramebuffer!==void 0?(_t.bindFramebuffer(z.FRAMEBUFFER,null),W=!1):Nt.__webglFramebuffer===void 0?A.setupRenderTarget(E):Nt.__hasExternalTextures&&A.rebindTextures(E,qt.get(E.texture).__webglTexture,qt.get(E.depthTexture).__webglTexture);let $t=E.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Mt=!0);let Bt=qt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Bt[N])?H=Bt[N][G]:H=Bt[N],mt=!0):Ft.isWebGL2&&E.samples>0&&A.useMultisampledRTT(E)===!1?H=qt.get(E).__webglMultisampledFramebuffer:Array.isArray(Bt)?H=Bt[G]:H=Bt,M.copy(E.viewport),D.copy(E.scissor),k=E.scissorTest}else M.copy(tt).multiplyScalar(J).floor(),D.copy(st).multiplyScalar(J).floor(),k=ct;if(_t.bindFramebuffer(z.FRAMEBUFFER,H)&&Ft.drawBuffers&&W&&_t.drawBuffers(E,H),_t.viewport(M),_t.scissor(D),_t.setScissorTest(k),mt){let Nt=qt.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+N,Nt.__webglTexture,G)}else if(Mt){let Nt=qt.get(E.texture),$t=N||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Nt.__webglTexture,G||0,$t)}R=-1},this.readRenderTargetPixels=function(E,N,G,W,H,mt,Mt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=qt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(Lt=Lt[Mt]),Lt){_t.bindFramebuffer(z.FRAMEBUFFER,Lt);try{let Nt=E.texture,$t=Nt.format,Bt=Nt.type;if($t!==Ln&&yt.convert($t)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ht=Bt===yr&&(Ct.has("EXT_color_buffer_half_float")||Ft.isWebGL2&&Ct.has("EXT_color_buffer_float"));if(Bt!==xi&&yt.convert(Bt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Bt===mi&&(Ft.isWebGL2||Ct.has("OES_texture_float")||Ct.has("WEBGL_color_buffer_float")))&&!Ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-W&&G>=0&&G<=E.height-H&&z.readPixels(N,G,W,H,yt.convert($t),yt.convert(Bt),mt)}finally{let Nt=b!==null?qt.get(b).__webglFramebuffer:null;_t.bindFramebuffer(z.FRAMEBUFFER,Nt)}}},this.copyFramebufferToTexture=function(E,N,G=0){let W=Math.pow(2,-G),H=Math.floor(N.image.width*W),mt=Math.floor(N.image.height*W);A.setTexture2D(N,0),z.copyTexSubImage2D(z.TEXTURE_2D,G,0,0,E.x,E.y,H,mt),_t.unbindTexture()},this.copyTextureToTexture=function(E,N,G,W=0){let H=N.image.width,mt=N.image.height,Mt=yt.convert(G.format),Lt=yt.convert(G.type);A.setTexture2D(G,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment),N.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,W,E.x,E.y,H,mt,Mt,Lt,N.image.data):N.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,W,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,Mt,N.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,W,E.x,E.y,Mt,Lt,N.image),W===0&&G.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),_t.unbindTexture()},this.copyTextureToTexture3D=function(E,N,G,W,H=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let mt=E.max.x-E.min.x+1,Mt=E.max.y-E.min.y+1,Lt=E.max.z-E.min.z+1,Nt=yt.convert(W.format),$t=yt.convert(W.type),Bt;if(W.isData3DTexture)A.setTexture3D(W,0),Bt=z.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)A.setTexture2DArray(W,0),Bt=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);let Ht=z.getParameter(z.UNPACK_ROW_LENGTH),Ee=z.getParameter(z.UNPACK_IMAGE_HEIGHT),dn=z.getParameter(z.UNPACK_SKIP_PIXELS),Fe=z.getParameter(z.UNPACK_SKIP_ROWS),Xn=z.getParameter(z.UNPACK_SKIP_IMAGES),xe=G.isCompressedTexture?G.mipmaps[H]:G.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,xe.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,xe.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,E.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,E.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,E.min.z),G.isDataTexture||G.isData3DTexture?z.texSubImage3D(Bt,H,N.x,N.y,N.z,mt,Mt,Lt,Nt,$t,xe.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Bt,H,N.x,N.y,N.z,mt,Mt,Lt,Nt,xe.data)):z.texSubImage3D(Bt,H,N.x,N.y,N.z,mt,Mt,Lt,Nt,$t,xe),z.pixelStorei(z.UNPACK_ROW_LENGTH,Ht),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ee),z.pixelStorei(z.UNPACK_SKIP_PIXELS,dn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Fe),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Xn),H===0&&W.generateMipmaps&&z.generateMipmap(Bt),_t.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),_t.unbindTexture()},this.resetState=function(){C=0,T=0,b=null,_t.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===yc?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===Qa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pe?Hi:ad}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Hi?pe:ti}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Wl=class extends qi{};Wl.prototype.isWebGL1Renderer=!0;Ds=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Mi=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},Ga=class extends mn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},vs=new ge,Hu=new ge,_a=[],Vu=new ni,Dx=new ge,or=new wt,lr=new Vi,Dn=class extends wt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ga(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Dx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),Vu.copy(t.boundingBox).applyMatrix4(vs),this.boundingBox.union(Vu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),lr.copy(t.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(lr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,s=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lr.copy(this.boundingSphere),lr.applyMatrix4(n),t.ray.intersectsSphere(lr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vs),Hu.multiplyMatrices(n,vs),or.matrixWorld=Hu,or.raycast(t,_a);for(let a=0,o=_a.length;a<o;a++){let l=_a[a];l.instanceId=r,l.object=this,e.push(l)}_a.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ga(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Us=class extends wn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},En=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ft:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,s=[],r=[],a=[],o=new L,l=new ge;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(qe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(qe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},vr=class extends En{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){let n=e||new ft,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ql=class extends vr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};va=new L,xl=new _c,_l=new _c,vl=new _c,Xl=class extends En{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(va.subVectors(s[0],s[1]).add(s[0]),c=va);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(va.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=va),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),xl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,m),_l.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,m),vl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(xl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),_l.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),vl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(xl.calc(l),_l.calc(l),vl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};Wa=class extends En{constructor(t=new ft,e=new ft,n=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ft){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(dr(t,s.x,r.x,a.x,o.x),dr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$l=class extends En{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(dr(t,s.x,r.x,a.x,o.x),dr(t,s.y,r.y,a.y,o.y),dr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qa=class extends En{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yl=class extends En{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xa=class extends En{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ur(t,s.x,r.x,a.x),ur(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zl=class extends En{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ur(t,s.x,r.x,a.x),ur(t,s.y,r.y,a.y),ur(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$a=class extends En{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Gu(o,l.x,c.x,h.x,u.x),Gu(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ft().fromArray(s))}return this}},Wu=Object.freeze({__proto__:null,ArcCurve:ql,CatmullRomCurve3:Xl,CubicBezierCurve:Wa,CubicBezierCurve3:$l,EllipseCurve:vr,LineCurve:qa,LineCurve3:Yl,QuadraticBezierCurve:Xa,QuadraticBezierCurve3:Zl,SplineCurve:$a}),Jl=class extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wu[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Wu[s.type]().fromJSON(s))}return this}},Mr=class extends Jl{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new qa(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Xa(this.currentPoint.clone(),new ft(t,e),new ft(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Wa(this.currentPoint.clone(),new ft(t,e),new ft(n,s),new ft(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new $a(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new vr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},jl=class i extends Xe{constructor(t=[new ft(0,-.5),new ft(.5,0),new ft(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=qe(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new L,d=new ft,f=new L,g=new L,y=new L,m=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let v=0;v<=e;v++){let x=n+v*h*s,S=Math.sin(x),C=Math.cos(x);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*S,u.y=t[T].y,u.z=t[T].x*C,a.push(u.x,u.y,u.z),d.x=v/e,d.y=T/(t.length-1),o.push(d.x,d.y);let b=l[3*T+0]*S,R=l[3*T+1],_=l[3*T+0]*C;c.push(b,R,_)}}for(let v=0;v<e;v++)for(let x=0;x<t.length-1;x++){let S=x+v*t.length,C=S,T=S+t.length,b=S+t.length+1,R=S+1;r.push(C,T,R),r.push(b,R,T)}this.setIndex(r),this.setAttribute("position",new Kt(a,3)),this.setAttribute("uv",new Kt(o,2)),this.setAttribute("normal",new Kt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},bi=class i extends jl{constructor(t=1,e=1,n=4,s=8){let r=new Mr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Ns=class i extends Xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new L,h=new ft;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(o,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Te=class i extends Xe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,y=[],m=n/2,p=0;v(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(f,2));function v(){let S=new L,C=new L,T=0,b=(e-t)/n;for(let R=0;R<=r;R++){let _=[],M=R/r,D=M*(e-t)+t;for(let k=0;k<=s;k++){let K=k/s,I=K*l+o,F=Math.sin(I),$=Math.cos(I);C.x=D*F,C.y=-M*n+m,C.z=D*$,u.push(C.x,C.y,C.z),S.set(F,b,$).normalize(),d.push(S.x,S.y,S.z),f.push(K,1-M),_.push(g++)}y.push(_)}for(let R=0;R<s;R++)for(let _=0;_<r;_++){let M=y[_][R],D=y[_+1][R],k=y[_+1][R+1],K=y[_][R+1];h.push(M,D,K),h.push(D,k,K),T+=6}c.addGroup(p,T,0),p+=T}function x(S){let C=g,T=new ft,b=new L,R=0,_=S===!0?t:e,M=S===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;let D=g;for(let k=0;k<=s;k++){let I=k/s*l+o,F=Math.cos(I),$=Math.sin(I);b.x=_*$,b.y=m*M,b.z=_*F,u.push(b.x,b.y,b.z),d.push(0,M,0),T.x=F*.5+.5,T.y=$*.5*M+.5,f.push(T.x,T.y),g++}for(let k=0;k<s;k++){let K=C+k,I=D+k;S===!0?h.push(I,I+1,K):h.push(I+1,I,K),R+=3}c.addGroup(p,R,S===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ii=class i extends Te{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},br=class i extends Xe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let x=new L,S=new L,C=new L;for(let T=0;T<e.length;T+=3)f(e[T+0],x),f(e[T+1],S),f(e[T+2],C),l(x,S,C,v)}function l(v,x,S,C){let T=C+1,b=[];for(let R=0;R<=T;R++){b[R]=[];let _=v.clone().lerp(S,R/T),M=x.clone().lerp(S,R/T),D=T-R;for(let k=0;k<=D;k++)k===0&&R===T?b[R][k]=_:b[R][k]=_.clone().lerp(M,k/D)}for(let R=0;R<T;R++)for(let _=0;_<2*(T-R)-1;_++){let M=Math.floor(_/2);_%2===0?(d(b[R][M+1]),d(b[R+1][M]),d(b[R][M])):(d(b[R][M+1]),d(b[R+1][M+1]),d(b[R+1][M]))}}function c(v){let x=new L;for(let S=0;S<r.length;S+=3)x.x=r[S+0],x.y=r[S+1],x.z=r[S+2],x.normalize().multiplyScalar(v),r[S+0]=x.x,r[S+1]=x.y,r[S+2]=x.z}function h(){let v=new L;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];let S=m(v)/2/Math.PI+.5,C=p(v)/Math.PI+.5;a.push(S,1-C)}g(),u()}function u(){for(let v=0;v<a.length;v+=6){let x=a[v+0],S=a[v+2],C=a[v+4],T=Math.max(x,S,C),b=Math.min(x,S,C);T>.9&&b<.1&&(x<.2&&(a[v+0]+=1),S<.2&&(a[v+2]+=1),C<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,x){let S=v*3;x.x=t[S+0],x.y=t[S+1],x.z=t[S+2]}function g(){let v=new L,x=new L,S=new L,C=new L,T=new ft,b=new ft,R=new ft;for(let _=0,M=0;_<r.length;_+=9,M+=6){v.set(r[_+0],r[_+1],r[_+2]),x.set(r[_+3],r[_+4],r[_+5]),S.set(r[_+6],r[_+7],r[_+8]),T.set(a[M+0],a[M+1]),b.set(a[M+2],a[M+3]),R.set(a[M+4],a[M+5]),C.copy(v).add(x).add(S).divideScalar(3);let D=m(C);y(T,M+0,v,D),y(b,M+2,x,D),y(R,M+4,S,D)}}function y(v,x,S,C){C<0&&v.x===1&&(a[x]=v.x-1),S.x===0&&S.z===0&&(a[x]=C/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},ks=class i extends br{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Sr=class extends Mr{constructor(t){super(t),this.uuid=Bs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Mr().fromJSON(s))}return this}},Hx={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=_d(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=Xx(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return wr(r,a,e,o,l,f,0),a}};fr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Xu(t),$u(n,t);let a=t.length;e.forEach(Xu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,$u(n,e[l]);let o=Hx.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};Ar=class i extends br{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Ya=class i extends br{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},$i=class i extends Xe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new L,g=new ft;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let v=p+m,x=v,S=v+n+1,C=v+n+2,T=v+1;o.push(x,S,T),o.push(S,C,T)}}this.setIndex(o),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Za=class i extends Xe{constructor(t=new Sr([new ft(0,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Kt(s,3)),this.setAttribute("normal",new Kt(r,3)),this.setAttribute("uv",new Kt(a,2));function c(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,g=d.holes;fr.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let v=g[m];fr.isClockWise(v)===!0&&(g[m]=v.reverse())}let y=fr.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let v=g[m];f=f.concat(v)}for(let m=0,p=f.length;m<p;m++){let v=f[m];s.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let m=0,p=y.length;m<p;m++){let v=y[m],x=v[0]+u,S=v[1]+u,C=v[2]+u;n.push(x,S,C),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return s_(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};$e=class i extends Xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new L,d=new L,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let v=[],x=p/n,S=0;p===0&&a===0?S=.5/e:p===n&&l===Math.PI&&(S=-.5/e);for(let C=0;C<=e;C++){let T=C/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(T+S,1-x),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let x=h[p][v+1],S=h[p][v],C=h[p+1][v],T=h[p+1][v+1];(p!==0||a>0)&&f.push(x,S,T),(p!==n-1||l<Math.PI)&&f.push(S,C,T)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(y,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Os=class i extends Xe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let y=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(y),u.y=(t+e*Math.cos(m))*Math.sin(y),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let y=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,v=(s+1)*f+g;a.push(y,m,v),a.push(m,p,v)}this.setIndex(a),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Ge=class extends Gi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=od,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};Fs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},tc=class extends Fs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jh,endingEnd:jh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kh:r=t,o=2*e-n;break;case Qh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Kh:a=t,l=2*n-e;break;case Qh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,v=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*y+.5*g,S=f*m-f*y;for(let C=0;C!==o;++C)r[C]=p*a[h+C]+v*a[c+C]+x*a[l+C]+S*a[u+C];return r}},ec=class extends Fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},nc=class extends Fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Un=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Sa(e,this.TimeBufferType),this.values=Sa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Sa(t.times,Array),values:Sa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new nc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ec(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new tc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ea:e=this.InterpolantFactoryMethodDiscrete;break;case Ta:e=this.InterpolantFactoryMethodLinear;break;case $o:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ea;case this.InterpolantFactoryMethodLinear:return Ta;case this.InterpolantFactoryMethodSmooth:return $o}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&r_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$o,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let y=e[u+g];if(y!==e[d+g]||y!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=Ta;Yi=class extends Un{};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Ea;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;ic=class extends Un{};ic.prototype.ValueTypeName="color";sc=class extends Un{};sc.prototype.ValueTypeName="number";rc=class extends Fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Bn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Cr=class extends Un{InterpolantFactoryMethodLinear(t){return new rc(this.times,this.values,this.getValueSize(),t)}};Cr.prototype.ValueTypeName="quaternion";Cr.prototype.DefaultInterpolation=Ta;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;Zi=class extends Un{};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Ea;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;ac=class extends Un{};ac.prototype.ValueTypeName="vector";oc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},a_=new oc,lc=class{constructor(t){this.manager=t!==void 0?t:a_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};lc.DEFAULT_MATERIAL_NAME="__DEFAULT";Ja=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Si=class extends Ja{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ml=new ge,Yu=new L,Zu=new L,cc=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _r,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Yu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yu),Zu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zu),e.updateMatrixWorld(),Ml.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ml),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ml)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},hc=class extends cc{constructor(){super(new za(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wi=class extends Ja{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new hc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},vc="\\[\\]\\.:\\/",o_=new RegExp("["+vc+"]","g"),Mc="[^"+vc+"]",l_="[^"+vc.replace("\\.","")+"]",c_=/((?:WC+[\/:])*)/.source.replace("WC",Mc),h_=/(WCOD+)?/.source.replace("WCOD",l_),u_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mc),d_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mc),f_=new RegExp("^"+c_+h_+u_+d_+"$"),p_=["material","materials","bones","map"],uc=class{constructor(t,e,n){let s=n||me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(o_,"")}static parseTrackName(t){let e=f_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);p_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};me.Composite=uc;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];K_=new Float32Array(1),ja=class{constructor(t,e,n=0,s=1/0){this.ray=new Na(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new xr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return dc(t,this,n,e),n.sort(Ju),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)dc(t[s],this,n,e);return n.sort(Ju),n}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160")});function bd(i){let t=new Map,e=null;try{e=window[i];let n="__t";e.setItem(n,"1"),e.removeItem(n)}catch{e=null}return{getItem(n){try{return e?e.getItem(n):t.has(n)?t.get(n):null}catch{return t.has(n)?t.get(n):null}},setItem(n,s){try{e?e.setItem(n,String(s)):t.set(n,String(s))}catch{t.set(n,String(s))}},removeItem(n){try{e&&e.removeItem(n)}catch{}t.delete(n)}}}var Ye,Hs,no=Be(()=>{Ye=bd("localStorage"),Hs=bd("sessionStorage")});var Rr,io,Sd,so,ro,Pr=Be(()=>{Rr=typeof window<"u"&&window.ISLA_SERVER?String(window.ISLA_SERVER).replace(/\/$/,""):"",io=Rr||"",Sd=Rr?Rr.replace(/^http/,"ws"):`${location.protocol==="https:"?"wss":"ws"}://${location.host||"localhost:3000"}`,so=Rr?window.ISLA_PORTAL||"portal":"",ro=Rr||location.origin});function wd(i){return i.kind==="weapon"?Ne[i.type].name:i.kind==="ammo"?`${Ji[i.type].name} x${i.amount}`:i.kind==="heal"?`${lo[i.type].name}${i.amount>1?" x"+i.amount:""}`:"Objeto"}var Ne,oo,Ji,lo,bc,Sc,wc,Ec,co=Be(()=>{Ne={pistol:{id:"pistol",name:"Pistola",dmg:19,interval:.26,range:34,reload:1.15,mag:12,ammo:"light",spread:.035,pellets:1,speed:85,auto:!1,recoil:.25,zoom:1,color:"#7c8796",rarity:"com\xFAn"},smg:{id:"smg",name:"Subfusil",dmg:12,interval:.075,range:27,reload:1.7,mag:30,ammo:"light",spread:.085,pellets:1,speed:80,auto:!0,recoil:.12,zoom:1,color:"#4aa3ff",rarity:"com\xFAn"},shotgun:{id:"shotgun",name:"Escopeta",dmg:11,interval:.85,range:15,reload:2.3,mag:5,ammo:"shells",spread:.2,pellets:8,speed:70,auto:!1,recoil:.6,zoom:1,color:"#c47a3c",rarity:"rara"},ar:{id:"ar",name:"Rifle de asalto",dmg:20,interval:.125,range:44,reload:2,mag:25,ammo:"medium",spread:.045,pellets:1,speed:100,auto:!0,recoil:.18,zoom:1.12,color:"#5ad67d",rarity:"rara"},sniper:{id:"sniper",name:"Rifle de precisi\xF3n",dmg:88,interval:1.4,range:85,reload:2.7,mag:4,ammo:"heavy",spread:.004,pellets:1,speed:170,auto:!1,recoil:.9,zoom:1.45,color:"#b07cff",rarity:"\xE9pica"}},oo=Object.keys(Ne),Ji={light:{id:"light",name:"Munici\xF3n ligera",pack:30,max:180,color:"#ffd23f"},medium:{id:"medium",name:"Munici\xF3n media",pack:30,max:180,color:"#5ad67d"},shells:{id:"shells",name:"Cartuchos",pack:10,max:40,color:"#ff6b3d"},heavy:{id:"heavy",name:"Munici\xF3n pesada",pack:8,max:32,color:"#b07cff"}},lo={bandage:{id:"bandage",name:"Venda",heal:15,time:1.6,cap:75,max:10,color:"#f5f5f5"},medkit:{id:"medkit",name:"Botiqu\xEDn",heal:60,time:3.2,cap:100,max:4,color:"#ff4d5a"}},bc=.45,Sc=1.5,wc=2.1,Ec=2.5});function ee(i,t={}){let e=i+JSON.stringify(t);return Tc.has(e)||Tc.set(e,new Ge({color:i,...t})),Tc.get(e)}function zn(i,t){return Ac.has(i)||Ac.set(i,t()),Ac.get(i)}function Hn(i,t,e=0,n=0,s=0,r=!0){let a=new wt(i,t);return a.position.set(e,n,s),a.castShadow=r,a}function Cc(i){let t=new ie,e=ee("#2b2f36"),n=ee("#7c8796"),s=ee("#9a5b2e"),r=ee(Ne[i]?.color||"#888"),a=(l,c,h,u,d,f,g)=>t.add(Hn(new de(l,c,h),u,d,f,g)),o=(l,c,h,u,d,f)=>{let g=Hn(new Te(l,l,c,8),h,u,d,f);g.rotation.x=Math.PI/2,t.add(g)};switch(i){case"pistol":a(.11,.13,.38,n,0,.04,.14),a(.09,.2,.11,e,0,-.08,0),a(.115,.04,.3,r,0,.115,.13);break;case"smg":a(.13,.16,.55,e,0,.04,.2),a(.08,.26,.1,r,0,-.14,.24),a(.09,.18,.1,e,0,-.08,0),o(.035,.22,n,0,.05,.56),a(.07,.08,.22,n,0,.03,-.15);break;case"shotgun":o(.05,.85,n,0,.07,.45),o(.045,.75,e,0,-.02,.4),a(.12,.08,.3,s,0,-.03,.55),a(.12,.17,.4,s,0,-.02,-.12),a(.1,.14,.24,e,0,.04,.12);break;case"ar":a(.12,.17,.62,e,0,.05,.22),o(.035,.36,n,0,.06,.7),a(.1,.24,.1,r,0,-.14,.27),a(.1,.15,.32,e,0,0,-.22),a(.13,.08,.32,r,0,.1,.36),a(.05,.07,.12,n,0,.17,.12);break;case"sniper":o(.035,1.05,n,0,.06,.68),a(.12,.17,.6,e,0,.03,.12),a(.11,.18,.4,r,0,-.01,-.3),o(.06,.38,e,0,.2,.15),o(.07,.04,r,0,.2,.35),a(.07,.15,.08,e,0,-.1,.03);break;default:a(.1,.1,.3,n,0,0,.1)}return t.userData.muzzle={pistol:.34,smg:.68,shotgun:.88,ar:.9,sniper:1.22}[i]||.4,t}function Ed(i){let t=new ie,e=new ie;t.add(e);let n="#ffffff";if(i.k==="weapon"){let a=Cc(i.ty);a.scale.setScalar(1.25),a.rotation.y=Math.PI/2,a.position.x=-.35,e.add(a),n=m_[Ne[i.ty].rarity]||"#fff"}else if(i.k==="ammo"){let a=Ji[i.ty].color;e.add(Hn(zn("ammoBox",()=>new de(.5,.3,.35)),ee("#3a4a3a"))),e.add(Hn(zn("ammoLid",()=>new de(.52,.06,.37)),ee(a),0,.17,0));for(let o=0;o<3;o++)e.add(Hn(zn("bullet",()=>new Te(.035,.035,.18,6)),ee("#e0b040"),-.12+o*.12,.28,0));n=a}else if(i.ty==="medkit")e.add(Hn(zn("kit",()=>new de(.55,.38,.3)),ee("#ffffff"))),e.add(Hn(zn("crossA",()=>new de(.3,.09,.32)),ee("#ff3b4a"))),e.add(Hn(zn("crossB",()=>new de(.09,.3,.32)),ee("#ff3b4a"))),n="#ff4d5a";else{let a=Hn(zn("roll",()=>new Te(.16,.16,.26,12)),ee("#f5f0e6"));a.rotation.z=Math.PI/2,e.add(a),e.add(Hn(zn("rollband",()=>new Te(.165,.165,.05,12)),ee("#ff6b7a")).rotateZ(Math.PI/2)),n="#9df59d"}e.position.y=.55;let s=new wt(zn("lootDisc",()=>new Ns(.55,20)),new Pe({color:n,transparent:!0,opacity:.45,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.05,t.add(s);let r=new wt(zn("lootBeam",()=>new Te(.06,.25,1.6,8,1,!0)),new Pe({color:n,transparent:!0,opacity:.22,depthWrite:!1,side:He}));return r.position.y=.8,i.k==="weapon"&&t.add(r),t.userData.inner=e,t.userData.phase=Math.random()*6,e.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),t}function Td(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d");t.fillStyle="#c98a48",t.fillRect(0,0,128,128),t.fillStyle="#b07636";for(let n=0;n<4;n++)t.fillRect(0,n*32+28,128,4);t.strokeStyle="#7a4a1e",t.lineWidth=12,t.strokeRect(6,6,116,116),t.beginPath(),t.moveTo(10,10),t.lineTo(118,118),t.stroke(),t.fillStyle="#ffd23f",t.font="bold 34px sans-serif",t.textAlign="center",t.textBaseline="middle";let e=new Us(i);return e.colorSpace=pe,e}var Tc,Ac,m_,ho=Be(()=>{si();co();Tc=new Map;Ac=new Map;m_={com\u00FAn:"#e6e6e6",rara:"#3fa9f5",\u00E9pica:"#c77dff"}});function Lc(i,t,e){let n=yn[i];return n?n.unlock.type==="free"?!0:n.unlock.type==="level"?t>=n.unlock.level:Array.isArray(e)?e.includes(i):!!(e&&e.has&&e.has(i)):!1}function Cd(i,t=null,e=null){let n={...gn};if(!i||typeof i!="object")return n;for(let s of Vs){let r=i[s.id];if(r===null&&!s.required){n[s.id]=null;continue}let a=yn[r];!a||a.slot!==s.id||t!==null&&!Lc(r,t,e)||(n[s.id]=r)}for(let s of Pc)typeof i[s.id]=="string"&&g_.test(i[s.id])&&s.palette.includes(i[s.id].toLowerCase())&&(n[s.id]=i[s.id].toLowerCase());return n}var Vs,Pc,Ad,pt,Se,ve,on,Ti,Rc,Ai,yn,gn,Lr,g_,Rd,Pd,Ld,uo=Be(()=>{Vs=[{id:"hair",name:"Peinados",icon:"\u{1F487}",required:!0},{id:"face",name:"Caras",icon:"\u{1F600}",required:!0},{id:"hat",name:"Gorras y sombreros",icon:"\u{1F9E2}"},{id:"mask",name:"M\xE1scaras",icon:"\u{1F977}"},{id:"glasses",name:"Gafas",icon:"\u{1F576}\uFE0F"},{id:"top",name:"Camisetas y chaquetas",icon:"\u{1F455}",required:!0},{id:"pants",name:"Pantalones",icon:"\u{1F456}",required:!0},{id:"backpack",name:"Mochilas",icon:"\u{1F392}"},{id:"special",name:"Accesorios especiales",icon:"\u2728"}],Pc=[{id:"skin",name:"Tono de piel",palette:["#ffdbc2","#f2c09a","#e0a878","#c98d63","#a26a45","#7a4b31","#5a3522"]},{id:"hairColor",name:"Color de pelo",palette:["#1c1c1c","#4a2e1c","#7a4a22","#c98d4a","#f2d16b","#e8e8e8","#d6334a","#c77dff","#3fa9f5","#5ad67d","#ff8fc8"]},{id:"topColor",name:"Color de la ropa",palette:["#e8473f","#ff8f3f","#ffd23f","#5ad67d","#2fb8c4","#3f7fe8","#8a5cf5","#ff5fa2","#f5f5f5","#3a3f4b","#8b5a2b","#1f6b45"]},{id:"pantsColor",name:"Color del pantal\xF3n",palette:["#2f4a7a","#30343f","#6b4f2e","#4d5d3a","#8a8f99","#f2e6c9","#e8473f","#3f7fe8","#1c1c1c","#c77dff"]}],Ad={com\u00FAn:{color:"#b9c6e6"},rara:{color:"#3fa9f5"},\u00E9pica:{color:"#c77dff"},legendaria:{color:"#ffb020"}},pt=(i,t,e,n,s,r=[])=>({id:`${i}-${t}`,slot:i,style:t,name:e,rarity:n,unlock:s,tags:r}),Se={type:"free"},ve=i=>({type:"level",level:i}),on=i=>({type:"coins",price:i}),Ti=i=>({type:"ads",ads:i}),Rc={type:"daily"},Ai=[pt("hair","short","Corto cl\xE1sico","com\xFAn",Se),pt("hair","spiky","De punta","com\xFAn",Se),pt("hair","ponytail","Coleta","com\xFAn",Se),pt("hair","long","Melena","com\xFAn",Se),pt("hair","buzz","Rapado","com\xFAn",Se),pt("hair","bald","Calvo","com\xFAn",Se),pt("hair","afro","Afro","rara",ve(3)),pt("hair","bun","Mo\xF1o","rara",ve(6)),pt("hair","curly","Rizos","rara",on(250),["popular"]),pt("hair","mohawk","Cresta","\xE9pica",on(400),["featured"]),pt("face","happy","Alegre","com\xFAn",Se),pt("face","determined","Decidido","com\xFAn",Se),pt("face","cool","Chulito","rara",ve(4)),pt("face","surprised","Sorprendido","rara",Ti(1),["new"]),pt("face","angry","Furioso","rara",on(150)),pt("face","sleepy","Dormil\xF3n","rara",Rc),pt("hat","beanie","Gorro de lana","com\xFAn",Se),pt("hat","headband","Cinta deportiva","com\xFAn",Se),pt("hat","helmet","Casco de moto","com\xFAn",Se),pt("hat","cap","Gorra b\xE1sica","com\xFAn",ve(2)),pt("hat","beret","Boina","rara",Ti(2)),pt("hat","chef","Gorro de chef","rara",on(300)),pt("hat","cowboy","Sombrero vaquero","rara",on(400),["popular"]),pt("hat","tophat","Chistera","\xE9pica",on(650)),pt("hat","viking","Casco vikingo","\xE9pica",ve(12)),pt("hat","pirate","Sombrero pirata","\xE9pica",ve(18)),pt("hat","propeller","Gorra con h\xE9lice","\xE9pica",Ti(3),["new"]),pt("hat","party","Gorro de fiesta","rara",Rc),pt("hat","crown","Corona real","legendaria",ve(25)),pt("hat","astro","Casco de astronauta","legendaria",ve(30)),pt("mask","bandit","Pa\xF1uelo de bandido","com\xFAn",Se),pt("mask","ninja","M\xE1scara ninja","rara",ve(8)),pt("mask","hockey","M\xE1scara de hockey","\xE9pica",on(500)),pt("mask","fox","M\xE1scara de zorro","\xE9pica",Ti(3),["featured"]),pt("mask","skull","Calavera","legendaria",ve(22)),pt("glasses","round","Gafas redondas","com\xFAn",Se),pt("glasses","goggles","Gafas de aviador","com\xFAn",Se),pt("glasses","sun","Gafas de sol especiales","rara",ve(5)),pt("glasses","heart","Gafas de coraz\xF3n","rara",Ti(2)),pt("glasses","star","Gafas de estrella","\xE9pica",on(350),["popular"]),pt("glasses","pixel","Gafas pixeladas","\xE9pica",Rc),pt("glasses","visor","Visor cibern\xE9tico","legendaria",ve(16)),pt("top","tshirt","Camiseta","com\xFAn",Se),pt("top","hoodie","Sudadera con capucha","com\xFAn",Se),pt("top","tank","Camiseta de tirantes","com\xFAn",Se),pt("top","jacket","Chaqueta","rara",ve(7)),pt("top","jersey","Camiseta deportiva","rara",ve(11)),pt("top","hawaiian","Camisa hawaiana","rara",Ti(2),["new"]),pt("top","vest","Chaleco t\xE1ctico","\xE9pica",on(500)),pt("top","puffer","Plum\xEDfero","\xE9pica",on(700),["featured"]),pt("top","suit","Traje elegante","\xE9pica",ve(15)),pt("top","astro","Traje espacial","legendaria",ve(30)),pt("pants","jeans","Vaqueros","com\xFAn",Se),pt("pants","shorts","Pantal\xF3n corto","com\xFAn",Se),pt("pants","joggers","Ch\xE1ndal","com\xFAn",Se),pt("pants","cargo","Pantal\xF3n cargo","rara",ve(9)),pt("pants","skirt","Falda","rara",on(250)),pt("pants","suit","Pantal\xF3n de traje","\xE9pica",ve(15)),pt("pants","astro","Pantal\xF3n espacial","legendaria",ve(30)),pt("backpack","classic","Mochila cl\xE1sica","com\xFAn",Se),pt("backpack","explorer","Mochila exclusiva de explorador","\xE9pica",ve(10)),pt("backpack","guitar","Guitarra","\xE9pica",on(600),["popular"]),pt("backpack","turtle","Caparaz\xF3n de tortuga","\xE9pica",Ti(3)),pt("backpack","jetpack","Mochila cohete","legendaria",on(900),["featured","new"]),pt("backpack","wings","Alas de \xE1ngel","legendaria",ve(20)),pt("special","scarf","Bufanda","com\xFAn",Se),pt("special","headphones","Cascos de m\xFAsica","rara",on(350)),pt("special","chain","Medall\xF3n dorado","rara",Ti(2)),pt("special","cape","Capa de h\xE9roe","\xE9pica",ve(14)),pt("special","halo","Aureola","legendaria",ve(28))],yn=Object.fromEntries(Ai.map(i=>[i.id,i])),gn={hair:"hair-short",face:"face-happy",hat:null,mask:null,glasses:null,top:"top-tshirt",pants:"pants-jeans",backpack:null,special:null,skin:"#f2c09a",hairColor:"#4a2e1c",topColor:"#e8473f",pantsColor:"#2f4a7a"},Lr=[{name:"Rocco",outfit:{...gn,hat:"hat-beanie",topColor:"#e8473f"}},{name:"Luna",outfit:{...gn,hair:"hair-ponytail",hairColor:"#c77dff",top:"top-hoodie",topColor:"#8a5cf5",pantsColor:"#30343f",skin:"#ffdbc2"}},{name:"Kiko",outfit:{...gn,hair:"hair-spiky",hairColor:"#1c1c1c",top:"top-tank",topColor:"#5ad67d",pants:"pants-shorts",pantsColor:"#6b4f2e",backpack:"backpack-classic",skin:"#c98d63"}},{name:"Nara",outfit:{...gn,hair:"hair-long",hairColor:"#1c1c1c",hat:"hat-helmet",topColor:"#ff8f3f",pants:"pants-joggers",pantsColor:"#30343f",skin:"#7a4b31",face:"face-determined"}},{name:"Mara",outfit:{...gn,hair:"hair-long",hairColor:"#d6334a",mask:"mask-bandit",top:"top-hoodie",topColor:"#2fb8c4",pantsColor:"#f2e6c9",special:"special-scarf",skin:"#e0a878"}},{name:"Bolt",outfit:{...gn,hair:"hair-buzz",hairColor:"#e8e8e8",glasses:"glasses-goggles",topColor:"#ffd23f",pants:"pants-joggers",pantsColor:"#1c1c1c",skin:"#a26a45",face:"face-determined"}}],g_=/^#[0-9a-f]{6}$/i;Rd=[{coins:50},{coins:60,xp:100},{coins:100},{item:"glasses-pixel",coins:50},{coins:150},{coins:100,xp:250},{item:"hat-party",coins:200}],Pd=40,Ld=[{id:"pack-s",coins:500,price:199,label:"500 monedas"},{id:"pack-m",coins:1300,price:499,label:"1.300 monedas",bonus:"+30 %"},{id:"pack-l",coins:2800,price:999,label:"2.800 monedas",bonus:"+40 %"}]});var Ic,ov,Dc=Be(()=>{Ic=[{id:"rocco",name:"Rocco",unlock:1,skin:"#f2c09a",shirt:"#e8473f",pants:"#2f4a7a",shoes:"#3a2a22",hat:"cap",hatColor:"#e8473f",hair:"#4a2e1c",extra:"none"},{id:"luna",name:"Luna",unlock:1,skin:"#ffd7b5",shirt:"#8a5cf5",pants:"#2b2b3d",shoes:"#ffffff",hat:"ponytail",hatColor:"#c77dff",hair:"#c77dff",extra:"none"},{id:"kiko",name:"Kiko",unlock:2,skin:"#c98d63",shirt:"#3fbf6b",pants:"#6b4f2e",shoes:"#222222",hat:"beanie",hatColor:"#2f8f4f",hair:"#1c1c1c",extra:"backpack"},{id:"nara",name:"Nara",unlock:3,skin:"#8d5a3b",shirt:"#ff8f3f",pants:"#3b3b3b",shoes:"#ff8f3f",hat:"helmet",hatColor:"#ff8f3f",hair:"#111111",extra:"none"},{id:"bolt",name:"Bolt",unlock:5,skin:"#f0c8a0",shirt:"#ffd23f",pants:"#30343f",shoes:"#ffd23f",hat:"goggles",hatColor:"#30343f",hair:"#e6e6e6",extra:"none"},{id:"mara",name:"Mara",unlock:7,skin:"#e0a878",shirt:"#2fb8c4",pants:"#f2e6c9",shoes:"#5a3b22",hat:"bandana",hatColor:"#d6334a",hair:"#5a2a12",extra:"backpack"},{id:"tito",name:"Tito",unlock:10,skin:"#f5cba7",shirt:"#b5651d",pants:"#355c7d",shoes:"#4a3020",hat:"cowboy",hatColor:"#8b5a2b",hair:"#7a4a22",extra:"none"},{id:"zuri",name:"Zuri",unlock:14,skin:"#6e4530",shirt:"#ff5fa2",pants:"#1f1f2e",shoes:"#ffffff",hat:"crown",hatColor:"#ffcc33",hair:"#111111",extra:"headphones"}],ov=Ic.map(i=>i.id)});function U(i,t,e,n=0,s=0,r=0,a=!1){let o=new wt(t,e);return o.position.set(n,s,r),o.castShadow=a,i.add(o),o}function x_(i){return we("hawaii"+i,()=>{let t=document.createElement("canvas");t.width=t.height=64;let e=t.getContext("2d");e.fillStyle=i,e.fillRect(0,0,64,64);let n=["#ffffff","#ffd23f","#ff5fa2"];for(let r=0;r<9;r++){e.fillStyle=n[r%3];let a=r*23%64,o=r*37%64;for(let l=0;l<5;l++){let c=l/5*Math.PI*2;e.beginPath(),e.arc(a+Math.cos(c)*4,o+Math.sin(c)*4,3,0,7),e.fill()}}let s=new Us(t);return s.wrapS=s.wrapT=mr,s.repeat.set(2,2),s.colorSpace=pe,s})}function Id(i){if(i&&typeof i=="object")return Cd(i);if(typeof i=="string"){let t=Ic.find(e=>e.id===i);if(t){let e=Lr.find(n=>n.name===t.name);return e?{...e.outfit}:{...gn,topColor:t.shirt.toLowerCase(),skin:gn.skin}}}return{...gn}}var Uc,Nc,we,B,sn,bt,Qt,se,kc,ke,Vn,Gn,Ir=Be(()=>{si();ho();uo();Dc();Uc=new Map,Nc=new Map,we=(i,t)=>(Uc.has(i)||Uc.set(i,t()),Uc.get(i)),B=(i,t={})=>{let e=i+JSON.stringify(t);if(!Nc.has(e)){let{basic:n,...s}=t;Nc.set(e,n?new Pe({color:i,...s}):new Ge({color:i,...s}))}return Nc.get(e)},sn=(i,t)=>"#"+new Pt(i).multiplyScalar(t).getHexString();bt=(i,t,e)=>we(`box${i},${t},${e}`,()=>new de(i,t,e)),Qt=(i,t=12,e=9)=>we(`sph${i},${t}`,()=>new $e(i,t,e)),se=(i,t,e,n=12,s=!1)=>we(`cyl${i},${t},${e},${n},${s}`,()=>new Te(i,t,e,n,1,s)),kc=(i,t,e=10)=>we(`cap${i},${t}`,()=>new bi(i,t,4,e)),ke=(i,t,e=Math.PI*2,n=6,s=18)=>we(`tor${i},${t},${e}`,()=>new Os(i,t,n,s,e)),Vn=(i,t,e=8)=>we(`cone${i},${t},${e}`,()=>new ii(i,t,e));Gn=class{constructor(t,e={}){if(this.outfit=Id(t),this.opts=e,this.root=new ie,this.animators=[],this.phase=Math.random()*6,this.kick=0,this.deadT=-1,this.pickT=0,this.t=Math.random()*10,this.victory=!1,this.victoryStyle=0,this.blinkT=2+Math.random()*3,this.idleT=0,this.weaponType=null,this.gun=null,this._build(),e.ringColor){let n=new wt(we("ring",()=>new $i(.62,.78,28)),new Pe({color:e.ringColor,transparent:!0,opacity:.85,depthWrite:!1}));n.rotation.x=-Math.PI/2,n.position.y=.04,this.root.add(n),this.ring=n}}setOutfit(t){let e=this.weaponType;for(let n of[...this.root.children])n!==this.ring&&this.root.remove(n);this.outfit=Id(t),this.animators=[],this.weaponType=null,this.gun=null,this._build(),e&&this.setWeapon(e)}def(t){let e=this.outfit[t];return e?yn[e]:null}_build(){let t=this.outfit,e=B(t.skin),n=t.topColor,s=t.pantsColor,r=this.def("top")?.style||"tshirt",a=this.def("pants")?.style||"jeans",o=this.root,l=new ie;l.position.y=.72,o.add(l),this.hips=l;let c=new ie;l.add(c),this.torso=c;let h=r==="hawaiian"?B("#ffffff",{map:x_(n)}):B(r==="astro"?"#f2f4f7":r==="suit"?sn(n,.55):n),u=r==="puffer"?1.14:r==="astro"?1.08:1;U(c,kc(.3,.28,12),h,0,.36,0,!0).scale.set(1.06*u,1,.8*u),U(l,se(.31,.3,.1,14),B(a==="skirt"?s:sn(s,.75)),0,.09,0),this._buildTopDetails(c,r,n,h);let f=new ie;f.position.y=1,l.add(f),this.head=f,U(f,se(.11,.12,.12,10),e,0,-.33,0),U(f,Qt(.39,18,14),e,0,0,0,!0).scale.set(1,.95,.96),U(f,Qt(.08,8,6),e,-.38,-.02,0),U(f,Qt(.08,8,6),e,.38,-.02,0),U(f,Qt(.055,8,6),B(sn(t.skin,.92)),0,-.06,.37),this._buildFace(f),this._buildHair(f),this._buildHat(f),this._buildMask(f),this._buildGlasses(f);let y=["hoodie","jacket","puffer","suit","astro","jersey"].includes(r),m=r==="tank"||r==="vest",p=r==="vest"?B("#3a3f4b"):r==="hawaiian"?h:B(r==="astro"?"#f2f4f7":r==="suit"?sn(n,.55):n),v=C=>{let T=new ie;T.position.set(C*.41,.58,0),l.add(T);let b=U(T,we("upperArm",()=>{let R=new bi(.105,.16,4,8);return R.translate(0,-.13,0),R}),m?e:p,0,0,0,!0);return r==="puffer"&&b.scale.set(1.25,1,1.25),U(T,we("foreArm",()=>{let R=new bi(.095,.16,4,8);return R.translate(0,-.36,0),R}),y?p:e,0,0,0,!0),r==="jersey"&&U(T,se(.108,.108,.04,10),B("#ffffff"),0,-.2,0),U(T,Qt(.105,10,8),r==="astro"?B("#d8dde3"):e,0,-.52,0),T};this.armL=v(-1),this.armR=v(1);let x=B(a==="astro"?"#f2f4f7":s),S=C=>{let T=new ie;T.position.set(C*.16,.74,0),o.add(T);let b=a==="shorts"||a==="skirt";U(T,we("thigh",()=>{let _=new bi(.135,.14,4,8);return _.translate(0,-.12,0),_}),a==="skirt"?e:x,0,0,0,!0),U(T,we("shin",()=>{let _=new bi(.12,.16,4,8);return _.translate(0,-.38,0),_}),b?e:x,0,0,0,!0),a==="cargo"&&U(T,bt(.07,.14,.16),B(sn(s,.8)),C*.13,-.22,0),a==="joggers"&&U(T,bt(.02,.5,.05),B("#ffffff"),C*.135,-.25,0),a==="astro"&&U(T,Qt(.09,8,6),B("#ff8f3f"),0,-.3,.1),a==="suit"&&U(T,bt(.02,.5,.02),B(sn(s,.7)),0,-.25,.13);let R=a==="astro"?"#d8dde3":a==="suit"?"#1c1c1c":"#ffffff";return U(T,bt(.24,.1,.34),B(R),0,-.6,.05,!0),U(T,bt(.25,.04,.36),B(a==="suit"?"#1c1c1c":"#ff5a5f"),0,-.655,.05),T};this.legL=S(-1),this.legR=S(1),a==="skirt"&&U(l,se(.3,.42,.3,14,!1),B(s),0,-.06,0),this._buildBackpack(c),this._buildSpecial(c,f),this.gunHolder=new ie,this.gunHolder.position.set(-.08,-.52,.02),this.gunHolder.rotation.x=Math.PI/2,this.armR.add(this.gunHolder),this.root.traverse(C=>{C.isMesh&&(C.userData.char=this)})}_buildTopDetails(t,e,n,s){let r=B(sn(n,.75));switch(e){case"tshirt":U(t,ke(.17,.035,Math.PI*2,6,16),r,0,.7,.02).rotation.x=Math.PI/2;break;case"hoodie":{U(t,ke(.2,.08,Math.PI,6,12),B(n),0,.68,-.12).rotation.set(-.3,0,0),U(t,bt(.34,.14,.05),r,0,.2,.25),U(t,se(.012,.012,.18,4),B("#ffffff"),-.06,.55,.26),U(t,se(.012,.012,.18,4),B("#ffffff"),.06,.55,.26);break}case"jacket":{U(t,bt(.16,.5,.05),B("#f5f5f5"),0,.38,.24),U(t,bt(.045,.52,.06),r,-.09,.38,.245),U(t,bt(.045,.52,.06),r,.09,.38,.245);let a=U(t,ke(.2,.05,Math.PI*2,6,16),B(n),0,.68,0);a.rotation.x=Math.PI/2,U(t,bt(.06,.05,.02),B("#c0c0c0"),.16,.3,.255);break}case"tank":U(t,bt(.06,.2,.3),B(n),-.17,.62,0),U(t,bt(.06,.2,.3),B(n),.17,.62,0);break;case"vest":{U(t,bt(.56,.5,.48),B(n),0,.38,0);for(let a=0;a<3;a++)U(t,bt(.12,.1,.04),r,-.15+a*.15,.25,.25);U(t,bt(.5,.06,.5),B("#2b2f36"),0,.12,0);break}case"jersey":{U(t,bt(.64,.08,.5),B("#ffffff"),0,.45,0);let a=U(t,bt(.16,.2,.02),B("#ffffff"),0,.42,-.255);a.rotation.y=Math.PI;break}case"puffer":for(let a=0;a<3;a++){let o=U(t,ke(.33,.04,Math.PI*2,6,18),r,0,.18+a*.18,0);o.rotation.x=Math.PI/2,o.scale.set(1.08,.85,1)}break;case"suit":{U(t,bt(.18,.46,.05),B("#ffffff"),0,.42,.24),U(t,bt(.06,.32,.06),B("#d6334a"),0,.45,.265),U(t,bt(.05,.36,.06),B(sn(n,.4)),-.11,.45,.25),U(t,bt(.05,.36,.06),B(sn(n,.4)),.11,.45,.25);break}case"hawaiian":U(t,bt(.24,.08,.04),B("#ffffff"),0,.66,.24);break;case"astro":{U(t,bt(.3,.2,.06),B(n),0,.42,.25);for(let o=0;o<3;o++)U(t,Qt(.025,6,4),B(["#ff5a5f","#ffd23f","#5ad67d"][o]),-.08+o*.08,.42,.29);let a=U(t,ke(.22,.06,Math.PI*2,6,18),B("#b9c0c5"),0,.7,0);a.rotation.x=Math.PI/2;break}}}_buildFace(t){let e=this.def("face")?.style||"happy",n=B("#ffffff"),s=B("#1b1b1f"),r=B("#7a2e26"),a=new ie;t.add(a),this.eyes=a;for(let l of[-.14,.14]){if(U(a,Qt(.085,10,8),n,l,.05,.33).scale.set(1,1.15,.6),U(a,Qt(e==="surprised"?.035:.05,8,6),s,l+(e==="cool"?.01:0),.04,.375),U(a,Qt(.018,6,4),n,l+.02,.07,.4),e==="cool"||e==="sleepy"){let d=U(a,bt(.18,.08,.05),B(this.outfit.skin),l,e==="sleepy"?.06:.1,.38);d.scale.y=e==="sleepy"?1.6:1}let u=U(t,bt(.13,.03,.03),B(sn(this.outfit.hairColor,.9)),l,e==="surprised"?.21:.17,.35);u.rotation.z=e==="angry"?l<0?-.45:.45:e==="determined"?l<0?-.2:.2:e==="happy"?l<0?.12:-.12:0}let o=!!this.outfit.mask;if(!o)switch(e){case"happy":{let l=U(t,ke(.08,.018,Math.PI,6,10),r,0,-.14,.355);l.rotation.z=Math.PI;break}case"determined":U(t,bt(.12,.025,.03),r,0,-.15,.36);break;case"cool":{let l=U(t,ke(.06,.016,Math.PI*.7,6,8),r,.03,-.13,.355);l.rotation.z=Math.PI*1.1;break}case"angry":{let l=U(t,ke(.07,.018,Math.PI,6,10),r,0,-.19,.35);break}case"surprised":U(t,ke(.04,.016,Math.PI*2,6,12),r,0,-.15,.36);break;case"sleepy":{let l=U(t,ke(.05,.015,Math.PI,6,8),r,0,-.14,.355);l.rotation.z=Math.PI,U(t,Qt(.03,6,4),B("#9fd8ff"),.2,-.1,.33);break}}if(!o)for(let l of[-.22,.22]){let c=U(t,Qt(.05,8,6),B("#ff9a9a"),l,-.08,.3);c.scale.z=.4}}_buildHair(t){let e=this.def("hair")?.style||"short",n=B(this.outfit.hairColor),s=!!this.outfit.hat,r=(a=1.03,o=.48)=>{let l=U(t,we("hairCap"+a+o,()=>new $e(.39*a,16,10,0,Math.PI*2,0,Math.PI*o)),n,0,.02,-.02);return l.rotation.x=-.3,l};switch(e){case"short":r();break;case"buzz":r(1.01,.42);break;case"bald":{let a=U(t,Qt(.06,6,4),B("#ffffff",{transparent:!0,opacity:.35}),.12,.3,.15);a.scale.z=.3;break}case"spiky":{if(r(),!s)for(let a=0;a<7;a++){let o=a/7*Math.PI*1.6-Math.PI*.8;U(t,Vn(.1,.28,6),n,Math.sin(o)*.22,.36-Math.abs(o)*.05,-.05-Math.cos(o)*.12).rotation.set(-.5-Math.cos(o)*.3,0,-o*.5)}break}case"afro":{s?r(1.06):U(t,Qt(.5,14,10),B(this.outfit.hairColor,{flatShading:!0}),0,.2,-.2).scale.set(1.05,.9,.95);break}case"ponytail":{r();let a=U(t,kc(.11,.3,8),n,0,-.02,-.42);a.rotation.x=.6,U(t,ke(.1,.03,Math.PI*2,6,10),B("#ffd23f"),0,.12,-.36);break}case"long":{r(1.05);let a=U(t,bt(.62,.62,.22),n,0,-.2,-.22);a.rotation.x=.1,U(t,bt(.12,.45,.2),n,-.36,-.12,-.02),U(t,bt(.12,.45,.2),n,.36,-.12,-.02);break}case"mohawk":{if(r(1.01,.4),!s)for(let a=0;a<6;a++)U(t,bt(.08,.22-Math.abs(a-2.5)*.03,.12),n,0,.44-Math.abs(a-2.5)*.03,.22-a*.1);break}case"bun":{r(),s||U(t,Qt(.15,10,8),n,0,.42,-.12);break}case"curly":{if(r(1.04),!s)for(let a=0;a<12;a++){let o=a/12*Math.PI*2;U(t,Qt(.11,8,6),n,Math.cos(o)*.28,.28+Math.sin(a)*.05,Math.sin(o)*.26-.04)}break}}}_buildHat(t){let e=this.def("hat");if(!e)return;let n=this.outfit.topColor,s=new ie;switch(t.add(s),e.style){case"cap":U(s,we("capTop",()=>new $e(.405,16,10,0,Math.PI*2,0,Math.PI*.42)),B(n),0,.05,0);{let r=U(s,bt(.42,.04,.3),B(sn(n,.8)),0,.2,.36);r.rotation.x=.15}U(s,Qt(.04,6,4),B("#ffffff"),0,.44,0);break;case"beanie":U(s,we("beanie",()=>new $e(.41,16,10,0,Math.PI*2,0,Math.PI*.5)),B(n),0,.03,0),U(s,se(.41,.41,.1,16),B(sn(n,.8)),0,.05,0),U(s,Qt(.1,8,6),B("#ffffff"),0,.46,0);break;case"headband":{let r=U(s,ke(.385,.045,Math.PI*2,6,20),B(n),0,.17,0);r.rotation.x=Math.PI/2-.15,U(s,bt(.06,.2,.03),B(n),.1,.05,-.38);break}case"helmet":U(s,we("helm",()=>new $e(.43,16,10,0,Math.PI*2,0,Math.PI*.52)),B(n),0,.02,0),U(s,bt(.1,.06,.86),B("#ffffff"),0,.42,0);{let r=U(s,we("visorH",()=>new $e(.44,16,8,Math.PI/2-.9,1.8,1.25,.45)),B("#2b2f36"),0,.02,0)}break;case"beret":{let r=U(s,se(.36,.38,.1,18),B("#d6334a"),.05,.36,-.02);r.rotation.z=-.25,U(s,se(.02,.02,.06,6),B("#d6334a"),.08,.43,0);break}case"chef":U(s,se(.33,.3,.3,16),B("#ffffff"),0,.42,0),U(s,Qt(.36,12,8),B("#ffffff"),0,.62,0).scale.y=.6;break;case"cowboy":U(s,se(.64,.64,.04,20),B("#8b5a2b"),0,.24,0),U(s,se(.28,.33,.32,14),B("#8b5a2b"),0,.4,0),U(s,se(.335,.335,.06,14),B("#3b2412"),0,.29,0);break;case"tophat":U(s,se(.5,.5,.03,20),B("#1c1c1c"),0,.3,0),U(s,se(.28,.28,.48,16),B("#1c1c1c"),0,.55,0),U(s,se(.285,.285,.07,16),B("#d6334a"),0,.36,0);break;case"viking":U(s,we("vik",()=>new $e(.42,16,10,0,Math.PI*2,0,Math.PI*.5)),B("#9aa5ad"),0,.03,0);for(let r of[-1,1]){let a=U(s,Vn(.08,.36,8),B("#f2e6c9"),r*.42,.3,0);a.rotation.z=-r*.9}U(s,se(.425,.425,.06,16),B("#c98a48"),0,.05,0);break;case"pirate":{let r=U(s,se(.55,.55,.05,3),B("#1c1c1c"),0,.28,0);r.rotation.y=Math.PI/6,U(s,se(.3,.35,.25,12),B("#1c1c1c"),0,.4,0),U(s,Qt(.06,8,6),B("#ffffff"),0,.42,.32);break}case"propeller":{U(s,we("propCap",()=>new $e(.405,16,10,0,Math.PI*2,0,Math.PI*.42)),B("#3f7fe8"),0,.05,0),U(s,se(.02,.02,.12,6),B("#ffd23f"),0,.47,0);let r=new ie;r.position.y=.53,s.add(r),U(r,bt(.5,.02,.08),B("#e8473f")),U(r,bt(.08,.02,.5),B("#5ad67d")),this.animators.push(a=>{r.rotation.y+=a*14});break}case"party":{let r=U(s,Vn(.18,.45,12),B("#ff5fa2"),.06,.55,0);r.rotation.z=-.15,U(s,Qt(.06,8,6),B("#ffd23f"),.1,.79,0);break}case"crown":{U(s,se(.24,.22,.16,8,!0),B("#ffcc33",{side:He}),0,.42,0);for(let r=0;r<5;r++){let a=r/5*Math.PI*2;U(s,Vn(.05,.14,4),B("#ffcc33"),Math.cos(a)*.22,.56,Math.sin(a)*.22),U(s,Qt(.03,6,4),B(["#e8473f","#3f7fe8","#5ad67d"][r%3]),Math.cos(a)*.24,.42,Math.sin(a)*.24)}break}case"astro":{U(s,Qt(.52,18,14),B("#bfe6ff",{transparent:!0,opacity:.35,depthWrite:!1}),0,.02,0);let r=U(s,ke(.4,.06,Math.PI*2,6,20),B("#d8dde3"),0,-.36,0);r.rotation.x=Math.PI/2,U(s,se(.015,.015,.3,4),B("#9aa5ad"),.3,.55,-.1),U(s,Qt(.04,6,4),B("#ff5a5f"),.3,.71,-.1);break}}}_buildMask(t){let e=this.def("mask");if(e)switch(e.style){case"bandit":{let n=U(t,we("bandit",()=>new $e(.405,16,8,Math.PI/2-1.2,2.4,1.75,.75)),B("#d6334a"),0,0,0);n.rotation.y=0,U(t,Vn(.1,.22,4),B("#d6334a"),0,-.22,.36).rotation.x=Math.PI;break}case"ninja":{U(t,Qt(.405,16,12),B("#1c1c1c"),0,0,0).scale.set(1,.96,.98),U(t,bt(.5,.13,.1),B(this.outfit.skin),0,.05,.34);let s=U(t,bt(.06,.3,.03),B("#d6334a"),.08,0,-.42);s.rotation.z=.4;break}case"hockey":{U(t,Qt(.36,14,10),B("#f5f5f5"),0,-.02,.1).scale.set(.95,1.1,.75);for(let[s,r]of[[-.13,.05],[.13,.05],[0,-.12],[-.08,-.2],[.08,-.2]])U(t,Qt(.035,6,4),B("#1b1b1f"),s,r,.37);U(t,bt(.03,.2,.02),B("#d6334a"),0,.15,.38);break}case"skull":{U(t,Qt(.37,14,10),B("#f2ead6"),0,0,.08).scale.set(1,1.05,.85);for(let s of[-.13,.13])U(t,Qt(.08,8,6),B("#1b1b1f"),s,.04,.36);U(t,Vn(.04,.06,3),B("#1b1b1f"),0,-.07,.38).rotation.x=Math.PI;for(let s=0;s<4;s++)U(t,bt(.03,.05,.02),B("#1b1b1f"),-.06+s*.04,-.18,.35);break}case"fox":{U(t,Qt(.36,14,10),B("#ff8f3f"),0,.02,.08).scale.set(1,.95,.85);let s=U(t,Vn(.14,.26,8),B("#ffffff"),0,-.08,.42);s.rotation.x=Math.PI/2,U(t,Qt(.04,6,4),B("#1b1b1f"),0,-.08,.55);for(let r of[-.2,.2])U(t,Vn(.1,.22,4),B("#ff8f3f"),r,.42,0),U(t,Qt(.05,6,4),B("#1b1b1f"),r*.7,.06,.37);break}}}_buildGlasses(t){let e=this.def("glasses");if(!e)return;let n=new ie;switch(n.position.set(0,.05,.38),t.add(n),e.style){case"round":for(let s of[-.14,.14])U(n,ke(.08,.016,Math.PI*2,6,14),B("#2b2f36"),s,0,0);U(n,bt(.1,.02,.02),B("#2b2f36"),0,.01,0);break;case"goggles":{let s=U(t,ke(.385,.035,Math.PI*2,6,20),B("#30343f"),0,.12,0);s.rotation.x=Math.PI/2;for(let r of[-.13,.13]){let a=U(t,se(.1,.1,.07,12),B("#4fd1ff"),r,.16,.33);a.rotation.x=Math.PI/2-.2}break}case"sun":for(let s of[-.14,.14]){let r=U(n,bt(.18,.1,.03),B("#1b1b1f"),s,0,.01);r.rotation.z=s<0?.08:-.08}U(n,bt(.46,.025,.03),B("#c0c0c0"),0,.05,0);break;case"heart":for(let s of[-.14,.14])U(n,Qt(.08,8,6),B("#ff4d7a"),s,0,.02).scale.set(1.1,.9,.3);U(n,bt(.08,.02,.02),B("#ff4d7a"),0,0,0);break;case"star":for(let s of[-.15,.15]){let r=U(n,se(.11,.11,.03,5),B("#ffd23f"),s,0,.02);r.rotation.x=Math.PI/2}break;case"pixel":for(let s of[-.14,.14])U(n,bt(.18,.08,.03),B("#1b1b1f"),s,0,.02),U(n,bt(.05,.03,.035),B("#ffffff"),s-.04,.015,.025);U(n,bt(.48,.03,.03),B("#1b1b1f"),0,.03,.01);break;case"visor":{let s=U(t,we("visor",()=>new Te(.4,.4,.13,20,1,!0,-1.1,2.2)),B("#3fe0d0",{transparent:!0,opacity:.75,side:He}),0,.06,.02);break}}}_buildBackpack(t){let e=this.def("backpack");if(!e)return;let n=new ie;n.position.set(0,.4,-.3),t.add(n);let s=this.outfit.topColor;switch(e.style){case"classic":U(n,bt(.42,.46,.2),B(sn(s,.7)),0,0,-.02,!0),U(n,bt(.42,.14,.22),B(sn(s,.55)),0,.17,-.02),U(n,bt(.28,.16,.06),B(sn(s,.85)),0,-.1,-.13);break;case"explorer":U(n,bt(.46,.56,.24),B("#6b8e23"),0,0,-.04,!0);{let r=U(n,se(.1,.1,.5,10),B("#c98a48"),0,.36,-.04);r.rotation.z=Math.PI/2}U(n,bt(.3,.2,.06),B("#4d5d3a"),0,-.1,-.17),U(n,se(.05,.05,.25,8),B("#9aa5ad"),.27,-.05,-.04);break;case"guitar":{let r=new ie;r.rotation.z=.5,n.add(r),U(r,Qt(.2,12,8),B("#c47a3c"),0,-.18,-.03).scale.z=.35,U(r,Qt(.15,12,8),B("#c47a3c"),0,.06,-.03).scale.z=.35,U(r,bt(.06,.55,.04),B("#3b2412"),0,.4,-.03),U(r,se(.06,.06,.02,12),B("#1b1b1f"),0,-.12,.04).rotation.x=Math.PI/2;break}case"turtle":{U(n,Qt(.36,10,8),B("#3aa76d",{flatShading:!0}),0,-.05,.05,!0).scale.set(1.05,1.15,.6),U(n,Qt(.37,6,4),B("#2f8f4f",{flatShading:!0,wireframe:!0}),0,-.05,.05).scale.set(1.05,1.15,.6);break}case"jetpack":{for(let r of[-.13,.13]){U(n,se(.1,.1,.5,12),B("#c0c6cc"),r,0,-.06,!0),U(n,Vn(.1,.12,12),B("#e8473f"),r,.31,-.06);let a=U(n,Vn(.08,.3,8),B("#ffb020",{basic:!0,transparent:!0,opacity:.85}),r,-.4,-.06);a.rotation.x=Math.PI,this.animators.push((o,l)=>{let c=.7+Math.sin(l*40+r*10)*.3;a.scale.set(c,.8+c*.5,c)})}U(n,bt(.4,.12,.1),B("#30343f"),0,.05,.02);break}case"wings":{for(let r of[-1,1]){let a=new ie;a.position.set(r*.1,.1,0),n.add(a);for(let o=0;o<4;o++){let l=U(a,kc(.07,.5-o*.08,6),B(o%2?"#ffffff":"#f0f4ff"),r*(.18+o*.11),.12-o*.07,-.05);l.rotation.z=r*(1.2+o*.18)}this.animators.push((o,l)=>{a.rotation.y=r*(.25+Math.sin(l*2.5)*.18)})}break}}}_buildSpecial(t,e){let n=this.def("special");if(n)switch(n.style){case"scarf":{let s=U(t,ke(.2,.07,Math.PI*2,6,16),B("#ffd23f"),0,.7,.02);s.rotation.x=Math.PI/2,U(t,bt(.12,.3,.05),B("#ffd23f"),.12,.52,.24),U(t,bt(.12,.04,.06),B("#e8473f"),.12,.42,.24);break}case"headphones":{let s=U(e,ke(.41,.035,Math.PI,6,16),B("#222222"),0,.05,0);for(let r of[-.41,.41])U(e,se(.13,.13,.1,12),B("#ff5fa2"),r,0,0).rotation.z=Math.PI/2;break}case"chain":{let s=U(t,ke(.2,.018,Math.PI*2,6,20),B("#ffcc33"),0,.58,.12);s.rotation.x=Math.PI/2-.5,U(t,se(.07,.07,.02,12),B("#ffcc33"),0,.46,.26).rotation.x=Math.PI/2;break}case"cape":{let s=new ie;s.position.set(0,.68,-.24),t.add(s);let r=U(s,we("capeG",()=>{let a=new Wi(.62,.95,1,4);return a.translate(0,-.47,0),a}),B("#d6334a",{side:He}),0,0,0,!0);this.animators.push((a,o,l)=>{s.rotation.x=.15+Math.min(.9,(l.speed||0)*.7)+Math.sin(o*4)*.05});break}case"halo":{let s=U(e,ke(.25,.035,Math.PI*2,6,24),B("#fff3a0",{basic:!0}),0,.62,0);s.rotation.x=Math.PI/2,this.animators.push((r,a)=>{s.position.y=.62+Math.sin(a*2)*.03});break}}}setWeapon(t){t!==this.weaponType&&(this.weaponType=t,this.gun&&this.gunHolder.remove(this.gun),this.gun=t?Cc(t):null,this.gun&&this.gunHolder.add(this.gun))}shoot(t=1){this.kick=Math.min(1,this.kick+.6*t)}pickup(){this.pickT=.35}die(){this.deadT<0&&(this.deadT=0)}revive(){this.deadT=-1,this.root.rotation.x=0,this.root.position.y=0,this.root.visible=!0}update(t,e={}){this.t+=t;for(let g of this.animators)g(t,this.t,e);let n=(g,y,m)=>g+(y-g)*Math.min(1,m*t);if(this.blinkT-=t,this.eyes&&(this.eyes.scale.y=this.blinkT<.12&&this.blinkT>0?.15:1),this.blinkT<=0&&(this.blinkT=2.5+Math.random()*3),this.deadT>=0){this.deadT+=t;let g=Math.min(1,this.deadT/.45);this.root.rotation.x=-Math.PI/2*(g*g*(3-2*g)),this.root.position.y=.25*g,this.armL.rotation.x=n(this.armL.rotation.x,-2.6,8),this.armR.rotation.x=n(this.armR.rotation.x,-2.6,8),this.eyes&&(this.eyes.scale.y=.15),this.deadT>3&&(this.root.position.y=.25-(this.deadT-3)*.3),this.deadT>4.2&&(this.root.visible=!1);return}if(this.victory){this._victoryDance();return}let s=e.speed||0;this.phase+=t*(e.running?13:9.5)*Math.min(1,s+1e-4);let r=(e.running?.95:.65)*Math.min(1,s*1.4),a=Math.sin(this.phase)*r,o=-Math.sin(this.phase)*r;e.airborne&&(a=.7,o=-.3),this.legL.rotation.x=n(this.legL.rotation.x,a,18),this.legR.rotation.x=n(this.legR.rotation.x,o,18);let l=this.pickT>0?Math.sin(this.pickT/.35*Math.PI)*.28:0;this.pickT>0&&(this.pickT-=t);let c=s<.1;this.idleT=c?this.idleT+t:0;let h=Math.sin(this.t*2.2)*.018,u=c?Math.sin(this.t*.9)*.025:0;this.hips.position.y=.72+Math.abs(Math.sin(this.phase))*.06*Math.min(1,s*1.5)-l+h*.5,this.hips.position.x=u,this.hips.rotation.z=Math.sin(this.phase)*.04*s+u*.6,this.torso.scale.y=1+h,this.head.position.y=1+h*1.5;let d=c&&this.idleT>2?Math.sin(this.idleT*.7)*.45:0;this.head.rotation.y=n(this.head.rotation.y,d,3),this.head.rotation.z=n(this.head.rotation.z,c?Math.sin(this.t*.6)*.05:0,3),this.kick=Math.max(0,this.kick-t*7);let f=!!this.gun&&!e.healing;if(this.gun&&(this.gun.visible=!e.healing),e.healing)this.armL.rotation.set(n(this.armL.rotation.x,-1.1,10),0,.5+Math.sin(this.t*8)*.1),this.armR.rotation.set(n(this.armR.rotation.x,-1.1,10),0,-.5-Math.sin(this.t*8)*.1);else if(f){let g=e.aiming?.12:0,y=-1.5-g+this.kick*.35,m=-1.35-g+this.kick*.3,p=.55;e.reloading?(y=-.9+Math.sin(this.t*6)*.08,m=-.7+Math.sin(this.t*9)*.35,p=.4):e.running&&!e.aiming?(y=-.9,m=-.8):c&&this.idleT>1.5&&!e.inMatch&&(y=-.55+Math.sin(this.t*1.1)*.05,m=-.5,p=.6),this.armR.rotation.set(n(this.armR.rotation.x,y,12),0,n(this.armR.rotation.z,.05,12)),this.armL.rotation.set(n(this.armL.rotation.x,m,12),0,n(this.armL.rotation.z,p,12)),this.gunHolder.position.z=.02-this.kick*.08}else this.armL.rotation.set(n(this.armL.rotation.x,-a*.8,12),0,.08),this.armR.rotation.set(n(this.armR.rotation.x,-o*.8,12),0,-.08)}_victoryDance(){let t=this.t;if(this.gun&&(this.gun.visible=!1),this.victoryStyle===1)this.root.position.y=Math.abs(Math.sin(t*6))*.12,this.hips.rotation.z=Math.sin(t*6)*.25,this.armL.rotation.set(-1.4+Math.sin(t*6)*.6,0,-.6),this.armR.rotation.set(-1.4-Math.sin(t*6)*.6,0,.6),this.legL.rotation.x=Math.sin(t*6)*.4,this.legR.rotation.x=-Math.sin(t*6)*.4,this.head.rotation.z=Math.sin(t*6)*.2;else if(this.victoryStyle===2)this.root.position.y=0,this.armL.rotation.set(0,0,-1.4+Math.sin(t*3)*.1),this.armR.rotation.set(0,0,1.4-Math.sin(t*3)*.1),this.hips.rotation.y=Math.sin(t*1.5)*.4,this.legL.rotation.x=0,this.legR.rotation.x=0;else{let e=Math.abs(Math.sin(t*5));this.root.position.y=e*.35,this.armL.rotation.set(Math.PI*.95,0,-.3+Math.sin(t*10)*.35),this.armR.rotation.set(Math.PI*.95,0,.3-Math.sin(t*10)*.35),this.legL.rotation.x=-e*.5,this.legR.rotation.x=-e*.5,this.head.rotation.y=Math.sin(t*3)*.3}}setOpacity(t){this.root.traverse(e=>{e.isMesh&&(e.userData.ownMat||(e.material=e.material.clone(),e.userData.ownMat=!0),e.material.transparent=t<1,e.material.opacity=t)})}}});function M_(){try{let i=new URLSearchParams(location.search).get("touch");if(i==="1")return!0;if(i==="0")return!1}catch{}return null}function Od(){if(!xn)return"medium";let i=navigator.hardwareConcurrency||4,t=navigator.deviceMemory||(fo?4:3);return fo&&Ur||i>=8&&t>=6?"medium":"low"}var Gs,Ud,Nd,fo,Oc,__,v_,Dd,xn,Ur,kd,po=Be(()=>{Gs=typeof navigator<"u"?navigator.userAgent:"",Ud=typeof navigator<"u"&&navigator.maxTouchPoints||0,Nd=/Macintosh/.test(Gs)&&Ud>1,fo=/iPhone|iPad|iPod/.test(Gs)||Nd,Oc=/Android/i.test(Gs),__=typeof matchMedia<"u"&&matchMedia("(pointer: coarse)").matches,v_=typeof matchMedia<"u"&&matchMedia("(any-pointer: fine)").matches;Dd=M_(),xn=Dd!==null?Dd:fo||Oc||/Mobile|Silk|Kindle/i.test(Gs)||__&&Ud>0&&!v_,Ur=xn&&(Nd||/iPad|Tablet/i.test(Gs)||Oc&&!/Mobile/i.test(Gs)||Math.min(screen.width,screen.height)>=700),kd=xn?Ur?"tablet":fo?"iphone":Oc?"android":"mobile":"desktop"});function b_(){try{let i=JSON.parse(Ye.getItem(Fd)||"{}");return i.quality===void 0&&xn&&(i.quality=Od()),{...Ws,...i,keys:{...Ws.keys,...i.keys||{}}}}catch{return structuredClone(Ws)}}function mo(i){zd.push(i)}function ln(){try{Ye.setItem(Fd,JSON.stringify(Q))}catch{}for(let i of zd)i(Q)}function Ae(i){return i?i.startsWith("Key")?i.slice(3):i.startsWith("Digit")?i.slice(5):{Space:"Espacio",ShiftLeft:"Shift",ShiftRight:"Shift D",ControlLeft:"Ctrl",ControlRight:"Ctrl D",AltLeft:"Alt",Tab:"Tab",CapsLock:"Bloq May\xFAs",Backquote:"\xBA",ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192",Enter:"Intro"}[i]||i:"\u2014"}var Fd,Bd,Ws,Q,zd,Wn,qs=Be(()=>{po();no();Fd="islaRoyale.settings.v1",Bd=[["forward","Avanzar"],["back","Retroceder"],["left","Izquierda"],["right","Derecha"],["sprint","Correr"],["jump","Saltar"],["reload","Recargar"],["interact","Recoger / Interactuar"],["slot1","Arma 1"],["slot2","Arma 2"],["bandage","Usar venda"],["medkit","Usar botiqu\xEDn"],["drop","Soltar arma"],["scoreboard","Informaci\xF3n de partida"]],Ws={quality:"medium",renderScale:1,fullscreen:!0,masterVol:.9,musicVol:.45,sfxVol:.8,sensitivity:1,invertY:!1,cameraMode:"follow",cameraDistance:1,cameraSmoothing:.35,fov:50,showFps:!1,botLevel:"mixed",touchSens:1,touchBtnScale:1,touchOpacity:.75,touchAimAssist:!0,touchAutoSprint:!0,touchAdsToggle:!0,touchLeftFire:!0,touchPos:{},keys:{forward:"KeyW",back:"KeyS",left:"KeyA",right:"KeyD",sprint:"ShiftLeft",jump:"Space",reload:"KeyR",interact:"KeyE",slot1:"Digit1",slot2:"Digit2",bandage:"Digit3",medkit:"Digit4",drop:"KeyG",scoreboard:"Tab"}};Q=b_(),zd=[];Wn={low:{shadows:!1,shadowSize:512,pixelRatio:1,antialias:!1,fog:110,bushes:!1},medium:{shadows:!0,shadowSize:1024,pixelRatio:1,antialias:!0,fog:150,bushes:!0},high:{shadows:!0,shadowSize:2048,pixelRatio:1.5,antialias:!0,fog:200,bushes:!0}}});var ri,Fc,Hd=Be(()=>{ri={"PULSA PARA ENTRAR":"CLICK TO START","Cargando\u2026":"Loading\u2026","Conectando\u2026":"Connecting\u2026","Conectando con el servidor\u2026":"Connecting to the server\u2026","Despertando el servidor\u2026 puede tardar hasta un minuto la primera vez.":"Waking up the server\u2026 the first time can take up to a minute.","\xA1Listo!":"Ready!","\xA1Te han invitado a un equipo!":"You've been invited to a team!","Tu navegador no puede usar WebGL. Actualiza los controladores gr\xE1ficos o usa Chrome / Edge.":"Your browser can't use WebGL. Update your graphics drivers or use Chrome / Edge.","Battle Royale cartoon \xB7 Solo \xB7 D\xFAos \xB7 Escuadrones":"Cartoon Battle Royale \xB7 Solo \xB7 Duos \xB7 Squads","Isla Royale \u2013 Battle Royale online gratis en el navegador":"Isla Royale \u2013 Free online Battle Royale in your browser","Este navegador ya ten\xEDa una sesi\xF3n abierta: esta pesta\xF1a usa un perfil de invitado.":"This browser already had a session open: this tab is using a guest profile.","Se perdi\xF3 la conexi\xF3n con el servidor.":"Lost connection to the server.","Sin conexi\xF3n con el servidor.":"No connection to the server.","Sin conexi\xF3n \u2014 reintentando\u2026":"Offline \u2014 retrying\u2026",Personalizaci\u00F3n:"Customize",Tienda:"Shop",Misiones:"Missions",Recompensas:"Rewards",Perfil:"Profile",Ajustes:"Settings",Ayuda:"Help","Cambiar nombre":"Change name","Tu nombre":"Your name","Nombre de jugador":"Player name",Jugador:"Player","El nombre debe tener al menos 2 caracteres.":"Your name must be at least 2 characters long.",Equipo:"Team","Juega con amigos":"Play with friends","Crear equipo":"Create team","CREAR EQUIPO":"CREATE TEAM",Unirse:"Join",UNIRSE:"JOIN",C\u00D3DIGO:"CODE","C\xF3digo:":"Code:",Copiar:"Copy","Salir del equipo":"Leave team","Sala privada":"Private room","(solo vuestro equipo contra bots)":"(only your team vs bots)","Crea un equipo y env\xEDa el enlace de invitaci\xF3n a tus amigos. Los huecos libres se completan con compa\xF1eros controlados por IA.":"Create a team and send the invite link to your friends. Empty slots are filled with AI teammates.","\u{1F517} Copiar enlace de invitaci\xF3n":"\u{1F517} Copy invite link","Copia este enlace:":"Copy this link:","\u2014 p\xE9galo en WhatsApp o Discord":"\u2014 paste it in WhatsApp or Discord","ESPERANDO AL L\xCDDER":"WAITING FOR LEADER",SOLO:"SOLO",D\u00DAOS:"DUOS",ESCUADRONES:"SQUADS",Solo:"Solo",D\u00FAos:"Duos",Escuadrones:"Squads","15 jugadores":"15 players","Equipos de 2":"Teams of 2","Equipos de 4":"Teams of 4","Bots:":"Bots:",Variados:"Mixed",F\u00E1ciles:"Easy",Normales:"Normal",Dif\u00EDciles:"Hard",JUGAR:"PLAY",Cancelar:"Cancel","Buscando partida\u2026":"Finding a match\u2026","\u27F2 Arrastra para girar al personaje":"\u27F2 Drag to rotate your character","Privacidad y cookies":"Privacy & cookies",NV:"LV",ISLA:"ISLA",ROYALE:"ROYALE","Volver con el equipo":"Back to the team",vivos:"alive",bajas:"kills",Pistola:"Pistol",Subfusil:"SMG",Escopeta:"Shotgun","Rifle de asalto":"Assault rifle","Rifle de precisi\xF3n":"Sniper rifle","Munici\xF3n ligera":"Light ammo","Munici\xF3n media":"Medium ammo",Cartuchos:"Shells","Munici\xF3n pesada":"Heavy ammo",Venda:"Bandage",Botiqu\u00EDn:"Medkit",Vac\u00EDo:"Empty","Recargando\u2026":"Reloading\u2026","Usando botiqu\xEDn\u2026":"Using medkit\u2026","Usando venda\u2026":"Using bandage\u2026","Sin munici\xF3n":"Out of ammo",Recoger:"Pick up","(cambia el arma actual)":"(swaps your current weapon)","\xA1Prep\xE1rate!":"Get ready!","\xA1A LUCHAR!":"FIGHT!","La zona segura ha aparecido":"The safe zone has appeared","Nueva zona segura marcada":"New safe zone marked","\xA1La zona se est\xE1 cerrando!":"The zone is closing!","Zona final":"Final zone","La zona aparece en":"Zone appears in","La zona se cierra en":"Zone closes in","\xA1Zona cerr\xE1ndose!":"Zone closing!","Has ca\xEDdo. Tu equipo sigue luchando":"You are down. Your team is still fighting","No se pudo capturar el rat\xF3n: se usa la vista con cursor":"Couldn't lock the mouse: using cursor aim","Observando a":"Spectating",siguiente:"next",Espacio:"Space","Ver resultados":"See results","Volver al lobby":"Back to lobby",Pausa:"Paused",Continuar:"Resume",Configuraci\u00F3n:"Settings","Abandonar partida":"Leave match","La partida sigue en marcha en el servidor.":"The match keeps running on the server.","Informaci\xF3n de partida":"Match info",VICTORIA:"VICTORY","\xA1VICTORIA!":"VICTORY!",DERROTA:"DEFEAT",Puesto:"Place",Eliminaciones:"Kills","Da\xF1o infligido":"Damage dealt","Tiempo de supervivencia":"Survival time",Experiencia:"Experience","Mejores de la partida":"Top players",Monedas:"Coins","Monedas ganadas":"Coins earned","Seguir observando":"Keep spectating","Jugar otra partida":"Play again","\u{1F4FA} Ver anuncio: \xD72 XP":"\u{1F4FA} Watch ad: \xD72 XP","Tu equipo es el \xFAltimo en pie":"Your team is the last one standing","Los resultados aparecer\xE1n al terminar tu participaci\xF3n.":"Results will appear when you are out.","Partida jugada":"Match played","Entre los 5 \xFAltimos supervivientes":"Top 5 finish","\xA1Victoria!":"Victory!","Experiencia duplicada":"Doubled XP",Total:"Total","\xA1NIVEL":"LEVEL","\xA1Genial!":"Awesome!",Recompensa:"Reward",Aceptar:"OK",Gr\u00E1ficos:"Graphics",Controles:"Controls",Sonido:"Sound",C\u00E1mara:"Camera","Calidad gr\xE1fica":"Graphics quality",Alta:"High",Media:"Medium","Baja (equipos modestos)":"Low (older computers)","Resoluci\xF3n de renderizado":"Render resolution","Campo de visi\xF3n":"Field of view","Mostrar FPS":"Show FPS","Pantalla completa":"Fullscreen","Modo de c\xE1mara":"Camera mode","Tercera persona: el rat\xF3n gira la c\xE1mara":"Third person: mouse turns the camera","Vista elevada: apuntar con el cursor":"Top-down: aim with the cursor","Sensibilidad del rat\xF3n":"Mouse sensitivity","Suavizado de c\xE1mara":"Camera smoothing","Distancia de c\xE1mara":"Camera distance","Invertir eje vertical":"Invert vertical axis","Restablecer controles":"Reset controls","Pulsa una tecla\u2026":"Press a key\u2026","Volumen general":"Master volume",Efectos:"Effects",M\u00FAsica:"Music",Guardar:"Save","La nueva calidad se aplicar\xE1 en la pr\xF3xima partida.":"The new quality will apply next match.",Idioma:"Language","C\xE1mara y punter\xEDa":"Camera & aiming","Cambiar arma":"Switch weapon","Clic izq.":"Left click","Clic der.":"Right click","Soltar arma":"Drop weapon","Usar botiqu\xEDn":"Use medkit","Usar venda":"Use bandage","Bloq May\xFAs":"Caps Lock",Avanzar:"Forward",Retroceder:"Back",Izquierda:"Left",Derecha:"Right",Correr:"Sprint",Saltar:"Jump",Recargar:"Reload","Interactuar / recoger":"Interact / pick up","Arma 1":"Weapon 1","Arma 2":"Weapon 2",Disparar:"Shoot",Apuntar:"Aim","C\xF3mo jugar":"How to play",Objetivo:"Goal",Consejos:"Tips","S\xE9 el \xFAltimo jugador (o equipo) con vida. Explora la isla, consigue armas y botiquines, y mantente dentro de la zona segura: fuera de ella pierdes vida cada segundo.":"Be the last player (or team) alive. Explore the island, grab weapons and medkits, and stay inside the safe zone: outside it you lose health every second.","En tercera persona: mueve el rat\xF3n para girar 360\xB0 y s\xFAbelo o b\xE1jalo para inclinar la c\xE1mara (desde casi a ras de suelo hasta vista desde arriba). El punto de mira queda fijo y apuntas adonde se\xF1ala.":"In third person: move the mouse to turn 360\xB0 and up or down to tilt the camera (from ground level to a top-down view). The crosshair stays fixed and you shoot where it points.","Rat\xF3n: clic izquierdo dispara \xB7 clic derecho apunta \xB7 rueda cambia de arma \xB7 Shift+rueda acerca/aleja la c\xE1mara \xB7 Esc pausa.":"Mouse: left click shoots \xB7 right click aims \xB7 wheel switches weapon \xB7 Shift+wheel zooms the camera \xB7 Esc pauses.","La munici\xF3n y los objetos de curaci\xF3n se recogen al pasar por encima; las armas, con la tecla de recoger.":"Ammo and healing items are picked up by walking over them; weapons with the pick-up key.","Mant\xE9n pulsado Tab para ver el mapa completo, tu inventario y la lista de jugadores.":"Hold Tab to see the full map, your inventory and the player list.","Al entrar en un edificio su tejado desaparece: \xFAsalos como cobertura.":"Roofs disappear when you go inside a building: use them as cover.","Apuntar (clic derecho) reduce la dispersi\xF3n y aleja la c\xE1mara con los rifles.":"Aiming (right click) reduces spread and pulls the camera back with rifles.","Rompe cajas de madera a disparos para conseguir bot\xEDn.":"Shoot wooden crates to get loot.","Estilos r\xE1pidos":"Quick styles","Empieza desde un estilo y luego cambia lo que quieras.":"Start from a style, then change whatever you like.","Pulsa un art\xEDculo para prob\xE1rtelo":"Click an item to try it on",Deshacer:"Undo","\u{1F4BE} Guardar apariencia":"\u{1F4BE} Save look","Apariencia guardada":"Look saved","Esta es tu apariencia actual.":"This is your current look.","Tienes cambios sin guardar.":"You have unsaved changes.","Todos los objetos son est\xE9ticos: no dan ventajas en las partidas.":"All items are cosmetic: they give no in-match advantage.",Equipado:"Equipped",Desbloqueado:"Unlocked",Equipar:"Equip",Probar:"Try on",Comprar:"Buy",Destacados:"Featured",Novedades:"New",Populares:"Popular",Todo:"All","Monedas extra":"Extra coins",Comprados:"Owned","Gratis con anuncios":"Free with ads","\u{1F4FA} Gratis con anuncios":"\u{1F4FA} Free with ads","No hay art\xEDculos aqu\xED.":"No items here.","No tienes monedas suficientes. Cons\xEDguelas jugando, con misiones o en Recompensas.":"You don't have enough coins. Earn them by playing, with missions or in Rewards.","Compras opcionales con pago seguro de Stripe. Las monedas se a\xF1aden a tu cuenta cuando se confirma el pago.":"Optional purchases with secure Stripe checkout. Coins are added once the payment is confirmed.","Pago recibido: tus monedas llegar\xE1n en unos segundos.":"Payment received: your coins will arrive in a few seconds.","Has cancelado la compra.":"You cancelled the purchase.","Las compras a\xFAn no est\xE1n activadas.":"Purchases are not enabled yet.","\xA1Compra completada!":"Purchase completed!","Ahora mismo no hay anuncios disponibles. Int\xE9ntalo m\xE1s tarde.":"No ads available right now. Try again later.","Has cerrado el anuncio antes de terminar: no hay recompensa.":"You closed the ad before it finished: no reward.","Los anuncios con recompensa a\xFAn no est\xE1n activados.":"Rewarded ads are not enabled yet.","Los anuncios a\xFAn no est\xE1n activados en este servidor.":"Ads are not enabled on this server yet.","Gracias por ver el anuncio":"Thanks for watching the ad","El anuncio no se complet\xF3.":"The ad didn't finish.","Has llegado al l\xEDmite de anuncios de hoy.":"You've reached today's ad limit.","Has llegado al l\xEDmite de monedas por anuncios de hoy.":"You've reached today's ad coin limit.","Vale de anuncio no v\xE1lido o caducado.":"Invalid or expired ad token.","Este objeto no se consigue con anuncios.":"This item can't be unlocked with ads.","Este objeto no se vende con monedas.":"This item isn't sold for coins.","Ya tienes este objeto.":"You already own this item.","Objeto no encontrado.":"Item not found.","Pieza no v\xE1lida.":"Invalid item.","Traje no v\xE1lido.":"Invalid outfit.","Falta una pieza obligatoria.":"A required piece is missing.","Perfil no encontrado.":"Profile not found.","\u{1F3AF} Misiones diarias":"\u{1F3AF} Daily missions","Misiones diarias":"Daily missions","Misi\xF3n completada":"Mission complete","La misi\xF3n a\xFAn no est\xE1 completada.":"This mission isn't complete yet.","Ya has cobrado esta misi\xF3n.":"You've already claimed this mission.","Misi\xF3n no encontrada.":"Mission not found.",Cobrar:"Claim",Cobrada:"Claimed","\u{1F381} Recompensas":"\u{1F381} Rewards","\u{1F381} Recompensa diaria":"\u{1F381} Daily reward","Recompensa diaria":"Daily reward","Ya has recogido la recompensa de hoy. \xA1Vuelve ma\xF1ana!":"You've already claimed today's reward. Come back tomorrow!","L\xEDmite diario alcanzado.":"Daily limit reached.","Recompensa desconocida.":"Unknown reward.","Tipo de recompensa desconocido.":"Unknown reward type.","Ya no hay experiencia que duplicar.":"No XP left to double.","Recoger recompensa":"Claim reward","Recoger hoy":"Claim today","Ver anuncio":"Watch ad","\u{1F464} Perfil":"\u{1F464} Profile",Partidas:"Matches",Victorias:"Wins",Bajas:"Kills",Nivel:"Level","Nivel m\xE1ximo":"Max level","Pr\xF3ximas recompensas por nivel":"Upcoming level rewards",Objetos:"Items",Estad\u00EDsticas:"Stats","Da\xF1o total":"Total damage","Mejor puesto":"Best place","Tiempo jugado":"Time played",Com\u00FAn:"Common",Raro:"Rare",\u00C9pico:"Epic",Legendario:"Legendary",Gratis:"Free",Peinados:"Hair",Caras:"Faces","Gorras y sombreros":"Hats",M\u00E1scaras:"Masks",Gafas:"Glasses","Camisetas y chaquetas":"Tops",Pantalones:"Pants",Mochilas:"Backpacks","Accesorios especiales":"Special",Colores:"Colors","Tono de piel":"Skin tone","Color de pelo":"Hair color","Color de la ropa":"Top color","Color del pantal\xF3n":"Pants color","Corto cl\xE1sico":"Classic short","De punta":"Spiky",Coleta:"Ponytail",Melena:"Long hair",Rapado:"Buzz cut",Calvo:"Bald",Afro:"Afro",Mo\u00F1o:"Bun",Rizos:"Curly",Cresta:"Mohawk",Alegre:"Happy",Decidido:"Determined",Chulito:"Cool",Sorprendido:"Surprised",Furioso:"Angry",Dormil\u00F3n:"Sleepy","Gorro de lana":"Beanie","Cinta deportiva":"Headband","Casco de moto":"Moto helmet","Gorra b\xE1sica":"Basic cap",Boina:"Beret","Gorro de chef":"Chef hat","Sombrero vaquero":"Cowboy hat",Chistera:"Top hat","Casco vikingo":"Viking helmet","Sombrero pirata":"Pirate hat","Gorra con h\xE9lice":"Propeller cap","Gorro de fiesta":"Party hat","Corona real":"Royal crown","Casco de astronauta":"Astronaut helmet","Pa\xF1uelo de bandido":"Bandit bandana","M\xE1scara ninja":"Ninja mask","M\xE1scara de hockey":"Hockey mask","M\xE1scara de zorro":"Fox mask",Calavera:"Skull","Gafas redondas":"Round glasses","Gafas de aviador":"Aviators","Gafas de sol especiales":"Special sunglasses","Gafas de coraz\xF3n":"Heart glasses","Gafas de estrella":"Star glasses","Gafas pixeladas":"Pixel glasses","Visor cibern\xE9tico":"Cyber visor",Camiseta:"T-shirt","Sudadera con capucha":"Hoodie","Camiseta de tirantes":"Tank top",Chaqueta:"Jacket","Camiseta deportiva":"Jersey","Camisa hawaiana":"Hawaiian shirt","Chaleco t\xE1ctico":"Tactical vest",Plum\u00EDfero:"Puffer jacket","Traje elegante":"Smart suit","Traje espacial":"Space suit",Vaqueros:"Jeans","Pantal\xF3n corto":"Shorts",Ch\u00E1ndal:"Joggers","Pantal\xF3n cargo":"Cargo pants",Falda:"Skirt","Pantal\xF3n de traje":"Suit pants","Pantal\xF3n espacial":"Space pants","Mochila cl\xE1sica":"Classic backpack","Mochila exclusiva de explorador":"Explorer backpack",Guitarra:"Guitar","Caparaz\xF3n de tortuga":"Turtle shell","Mochila cohete":"Jetpack","Alas de \xE1ngel":"Angel wings",Bufanda:"Scarf","Cascos de m\xFAsica":"Headphones","Medall\xF3n dorado":"Gold medallion","Capa de h\xE9roe":"Hero cape",Aureola:"Halo","Juega 3 partidas":"Play 3 matches","Consigue 5 eliminaciones":"Get 5 kills","Sobrevive 10 minutos en total":"Survive 10 minutes in total","Recoge 10 armas":"Pick up 10 weapons","Consigue una victoria":"Win a match","Inflige 800 puntos de da\xF1o":"Deal 800 damage","Queda 2 veces entre los 5 mejores":"Finish top 5 twice","Bosque Pinar":"Pine Forest","Colina Molino":"Windmill Hill","Gasolinera Cruce":"Crossroads Gas","Granja Girasol":"Sunflower Farm","Los Almacenes":"The Warehouses","Pol\xEDgono \xD3xido":"Rust Yard","Villa Colores":"Color Village",Espa\u00F1ol:"Espa\xF1ol",English:"English","Idioma / Language":"Language / Idioma","Comprar \u{1FA99}":"Buy \u{1FA99}","\u{1F4FA} Ver anuncio":"\u{1F4FA} Watch ad","Anuncios a\xFAn no activos":"Ads not active yet","\u{1F381} Llega con la recompensa diaria":"\u{1F381} Comes with the daily reward","\u2B50 Destacados":"\u2B50 Featured","\u{1F195} Novedades":"\u{1F195} New","\u{1F525} Populares":"\u{1F525} Popular","\u{1F6CD}\uFE0F Todo":"\u{1F6CD}\uFE0F All","\u{1FA99} Monedas":"\u{1FA99} Coins",Todas:"All","En curso":"In progress","\u2714 Cobrada":"\u2714 Claimed","Recompensas gratis por anuncios":"Free rewards for ads","\xB7 siempre opcionales, nunca durante una partida":"\xB7 always optional, never during a match","Las recompensas por ver anuncios aparecer\xE1n aqu\xED en cuanto se active el proveedor de anuncios del juego. Mientras tanto puedes conseguir monedas jugando, con las misiones y con la recompensa diaria.":"Ad rewards will appear here once the game's ad provider is enabled. Meanwhile you can earn coins by playing, with missions and with the daily reward.","\xA1Ya tienes todos los objetos de anuncios!":"You already own every ad item!","\u2714 Ya has recogido la de hoy. Vuelve ma\xF1ana para mantener la racha.":"\u2714 You've claimed today's reward. Come back tomorrow to keep your streak.","\u{1F381} Recoger recompensa de hoy":"\u{1F381} Claim today's reward","% de victorias":"Win rate","Bajas por muerte":"K/D","Top 5":"Top 5","R\xE9cord de bajas":"Most kills",Modo:"Mode","\xA1Desbloqueado!":"Unlocked!","Bonus por anuncio (\xD72)":"Ad bonus (\xD72)","En el lobby":"In lobby",Buscando:"Searching","En partida":"In a match","(t\xFA)":"(you)",Moverse:"Move",Rat\u00F3n:"Mouse",Curarse:"Heal","Recoger / Interactuar":"Pick up / Interact",Estado:"Status",Vivo:"Alive",Eliminado:"Eliminated",IA:"AI","Controlado por IA":"AI controlled","\u2014 vac\xEDo \u2014":"\u2014 empty \u2014","eliminado por la zona":"eliminated by the zone",com\u00FAn:"common",rara:"rare",\u00E9pica:"epic",legendaria:"legendary",Intro:"Enter",Retroceso:"Backspace","Flecha arriba":"Arrow up","Flecha abajo":"Arrow down","Flecha izquierda":"Arrow left","Flecha derecha":"Arrow right",Equipo:"Team",M\u00F3vil:"Mobile","Sensibilidad de la c\xE1mara":"Camera sensitivity","Tama\xF1o de los botones":"Button size","Opacidad de los controles":"Controls opacity","Ayuda de apuntado":"Aim assist","Correr al llevar el joystick al borde":"Sprint when the joystick reaches the edge","Apuntar: tocar para activar y desactivar":"Aim: tap to toggle","Segundo bot\xF3n de disparo a la izquierda":"Second fire button on the left","\u2725 Cambiar la posici\xF3n de los botones":"\u2725 Move the buttons","Joystick: toca y arrastra en la mitad izquierda. C\xE1mara: desliza el dedo en la mitad derecha o mientras mantienes el bot\xF3n de disparo.":"Joystick: touch and drag on the left half. Camera: swipe on the right half or while holding the fire button.","Gira el m\xF3vil para jugar en horizontal":"Turn your phone sideways to play","Arrastra los botones a donde te resulte m\xE1s c\xF3modo.":"Drag the buttons wherever feels best.",Restablecer:"Reset","Disparar (izquierda)":"Shoot (left)",Joystick:"Joystick","Moverse (ll\xE9valo al borde para correr)":"Move (push to the edge to sprint)","Deslizar a la derecha":"Swipe right side","Mover la c\xE1mara":"Move the camera","Disparar (mant\xE9n y desliza para apuntar)":"Shoot (hold and swipe to aim)","Correr siempre":"Always sprint",Armas:"Weapons","Toca un arma para cambiar":"Tap a weapon to switch","Toca para curarte":"Tap to heal",Minimapa:"Minimap","Mapa e informaci\xF3n de partida":"Map and match info","Alg\xFAn miembro del grupo sigue en una partida.":"A team member is still in a match.","El grupo est\xE1 completo (m\xE1ximo 4).":"The team is full (max 4).","El grupo ya est\xE1 buscando partida. Int\xE9ntalo en unos segundos.":"The team is already searching. Try again in a few seconds.","Modo de juego desconocido.":"Unknown game mode.","No existe ning\xFAn grupo con ese c\xF3digo.":"No team exists with that code.","No se pudo crear la partida. Int\xE9ntalo de nuevo.":"Couldn't create the match. Please try again.","Solo el l\xEDder del grupo puede iniciar la b\xFAsqueda.":"Only the team leader can start the search.","Termina la partida o sal de la cola antes de unirte.":"Finish your match or leave the queue before joining."},Fc=[[/^Has quedado en el puesto #(\d+) de los equipos$/,"You placed #$1 among the teams"],[/^Has quedado en el puesto #(\d+) de (\d+) jugadores$/,"You placed #$1 of $2 players"],[/^(.+) es el último superviviente$/,"$1 is the last survivor"],[/^Buscando partida · (.+)$/,i=>i],[/^(\d+) jugador(?:es)? real(?:es)? · empieza en (\d+)s · el resto serán bots$/,"$1 real player(s) \xB7 starts in $2s \xB7 the rest will be bots"],[/^(\d+) en línea · (\d+) partidas$/,"$1 online \xB7 $2 matches"],[/^(\d+) en línea$/,"$1 online"],[/^Conectado · (\d+) ms$/,"Connected \xB7 $1 ms"],[/^(.+) ha caído$/,"$1 is down"],[/^Equipo eliminado · quedan (\d+) equipos$/,"Team eliminated \xB7 $1 teams left"],[/^¡Sin munición para (.+)!?$/,"No ammo for $1!"],[/^¡Subes al nivel (\d+)!$/,"Level up! Level $1"],[/^Nivel (\d+) · (\d+)\/(\d+) XP$/,"Level $1 \xB7 $2/$3 XP"],[/^Nivel (\d+)$/,"Level $1"],[/^Código copiado: (.+)$/,"Code copied: $1"],[/^Enlace copiado: (.+)$/,"Link copied: $1"],[/^Error al iniciar: (.+)$/,"Startup error: $1"],[/^Error de renderizado: (.+)$/,"Rendering error: $1"],[/^No se pudo iniciar la partida: (.+)$/,"Couldn't start the match: $1"],[/^No se pudo abrir el pago: (.+)$/,"Couldn't open checkout: $1"],[/^Vista previa: (.+)$/,"Preview: $1"],[/^Aún no tienes «(.+)»\.$/,"You don't own \u201C$1\u201D yet."],[/^¡Has conseguido «(.+)»!$/,"You got \u201C$1\u201D!"],[/^¡Has desbloqueado «(.+)»!$/,"You unlocked \u201C$1\u201D!"],[/^Recompensa diaria · día (\d+)$/,"Daily reward \xB7 day $1"],[/^🔒 Estás probando una pieza bloqueada: desbloquéalas para guardar\.$/,"\u{1F512} You are trying on a locked item: unlock it to save."],[/^🔒 Estás probando (\d+) piezas bloqueadas: desbloquéalas para guardar\.$/,"\u{1F512} You are trying on $1 locked items: unlock them to save."],[/^Nuevas misiones en$/,"New missions in"],[/^(\d+) h (\d+) min$/,"$1 h $2 min"],[/^· racha de (\d+) días?$/,"\xB7 $1-day streak"],[/^Tu grupo tiene (\d+) jugadores y (.+) admite equipos de (\d+)\. Elige otro modo\.$/,"Your team has $1 players and $2 allows teams of $3. Pick another mode."],[/^Día (\d+)$/,"Day $1"],[/^Nivel (\d+) requerido$/,"Level $1 required"],[/^Se desbloquea en el nivel (\d+)$/,"Unlocks at level $1"],[/^Desbloquea en nivel (\d+)$/,"Unlocks at level $1"],[/^🔒 Se desbloquea en el nivel (\d+)$/,"\u{1F512} Unlocks at level $1"],[/^Comprar 🪙 (\d+)$/,"Buy \u{1FA99} $1"],[/^🪙 (\d+) monedas gratis$/,"\u{1FA99} $1 free coins"],[/^Te quedan (\d+) hoy$/,"$1 left today"],[/^\+(\d+) monedas$/,"+$1 coins"],[/^🪙 ([\d.,]+) monedas · 🎽 (\d+)\/(\d+) objetos$/,"\u{1FA99} $1 coins \xB7 \u{1F3BD} $2/$3 items"],[/^Nv (\d+)$/,"Lv $1"],[/^Nv (\d+) · (.+)$/,(i,t,e)=>"Lv "+t+" \xB7 "+(ri[e]||e)],[/^eliminado por (.+)$/,(i,t)=>"eliminated by "+(ri[t]||t)],[/^(\d+) vivos$/,"$1 alive"],[/^(.+): (\d+)\/(\d+)$/,(i,t,e,n)=>(ri[t]||t)+": "+e+"/"+n],[/^Eliminaciones \((\d+)\)$/,"Kills ($1)"],[/^(\d+) bajas · (\d+) daño$/,"$1 kills \xB7 $2 damage"],[/^(Munición ligera|Munición media|Munición pesada|Cartuchos): (\d+)$/,(i,t,e)=>ri[t]+": "+e],[/^\+ (.+)$/,(i,t)=>"+ "+(ri[t]||t)],[/^(.+) \(tú\)$/,"$1 (you)"],[/^(\d)\/4 · (Solo|Dúos|Escuadrones)( · privada)?$/,(i,t,e,n)=>t+"/4 \xB7 "+ri[e]+(n?" \xB7 private":"")],[/^Vendas: (\d+)$/,"Bandages: $1"],[/^Botiquines: (\d+)$/,"Medkits: $1"]];Fc[3]=[/^Buscando partida · (.+)$/,(i,t)=>"Finding a match \xB7 "+(ri[t]||t)]});function S_(){try{let e=new URLSearchParams(location.search).get("lang");if(e==="es"||e==="en")return e}catch{}let i=Ye.getItem("isla.lang");if(i==="es"||i==="en")return i;let t=navigator.languages&&navigator.languages[0]||navigator.language||"en";return/^(es|ca|gl|eu)\b/i.test(t)?"es":"en"}function Gd(i){Ye.setItem("isla.lang",i),location.reload()}function T_(i){let t=w_.get(i);if(t!==void 0)return t;for(let[e,n]of Fc)if(e.test(i))return i.replace(e,n)}function cn(i){if(go==="es"||i==null)return i;let t=String(i),e=t.trim();if(!e)return t;let n=T_(e);return n===void 0?(E_.test(e)&&Bc.size<500&&Bc.add(e),t):t.replace(e,n)}function zc(i){let t=i.nodeValue;if(!t||!/[A-Za-zÁ-úñ]/.test(t))return;let e=cn(t);e!==t&&(i.nodeValue=e)}function Hc(i){for(let t of Wd){let e=i.getAttribute&&i.getAttribute(t);if(e){let n=cn(e);n!==e&&i.setAttribute(t,n)}}}function Vd(i){if(i.nodeType===3){zc(i);return}if(i.nodeType!==1)return;let t=i.tagName;if(t==="SCRIPT"||t==="STYLE"||t==="CANVAS")return;Hc(i);let e=document.createTreeWalker(i,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT),n;for(;n=e.nextNode();)if(n.nodeType===3){let s=n.parentNode;if(s&&(s.tagName==="SCRIPT"||s.tagName==="STYLE"))continue;zc(n)}else Hc(n)}function qd(){go!=="es"&&(document.documentElement.lang="en",document.title="Isla Royale \u2013 Free online Battle Royale in your browser",Vd(document.body),new MutationObserver(i=>{for(let t of i)if(t.type==="characterData")zc(t.target);else if(t.type==="attributes")Hc(t.target);else for(let e of t.addedNodes)Vd(e)}).observe(document.body,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:Wd}))}var go,w_,Bc,E_,Wd,yo=Be(()=>{no();Hd();go=S_();w_=new Map(Object.entries(ri)),Bc=new Set;typeof window<"u"&&(window.__i18nMisses=Bc);E_=/[áéíóúñ¡¿]|\b(el|la|los|las|de|del|en|con|para|una?|tu|tus|que|partida|jugador|equipo|zona)\b/i;Wd=["placeholder","title","aria-label","alt"]});var ji,Kd,Qd,Gc,tf,ef,nf,sf,rf,af,Wc,Ce,Nn,qc,Ki=Be(()=>{ji=.03333333333333333,Kd=320,Qd=.55,Gc=100,tf=6,ef=8.8,nf=3.8,sf=2.2,rf=7.5,af=22,Wc=2.4,Ce={FIRE:1,ADS:2,SPRINT:4,JUMP:8},Nn={solo:{id:"solo",name:"Solo",teamSize:1,capacity:15},duos:{id:"duos",name:"D\xFAos",teamSize:2,capacity:14},squads:{id:"squads",name:"Escuadrones",teamSize:4,capacity:15}},qc=["#3fa9f5","#ff5a5f","#ffc928","#5ad67d","#b07cff","#ff8f3f","#3fe0d0","#ff7ac8","#8fd14f","#7a8cff","#ffa3a3","#c9a36b","#9be3ff","#f2f27a","#d0d0d0"]});function kn(i){return i=Math.max(0,Math.floor(i)),`${Math.floor(i/60)}:${String(i%60).padStart(2,"0")}`}function hf(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function uf(i){return qc[i%qc.length]}var Et,Ci,bo,So=Be(()=>{yo();co();Ki();qs();Et=i=>document.getElementById(i),Ci=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);bo=class{constructor(t){this.map=t,this.root=Et("hud"),this.overlay=Et("overlay"),this.ctx=this.overlay.getContext("2d"),this.mm=Et("minimap"),this.mmCtx=this.mm.getContext("2d"),this.bigMap=Et("bigmap"),this.bmCtx=this.bigMap.getContext("2d"),this.floaters=[],this.indicators=[],this.feed=[],this.announceT=0,this.hitT=0,this._mapImage(),this.resize(),this.root.classList.remove("hidden"),this.lastKey={}}_mapImage(){let t=this.map.size,e=2,n=document.createElement("canvas");n.width=n.height=t*e;let s=n.getContext("2d");s.fillStyle="#8fd16a",s.fillRect(0,0,t*e,t*e);for(let r of this.map.areas)s.fillStyle=r.color,s.fillRect(r.x*e,r.y*e,r.w*e,r.h*e);s.fillStyle="#6a7079";for(let r of this.map.roads)s.fillRect(r.x*e,r.y*e,r.w*e,r.h*e);for(let r of this.map.buildings)s.fillStyle=r.roofColor,s.fillRect(r.x*e,r.y*e,r.w*e,r.h*e),s.strokeStyle="rgba(0,0,0,.35)",s.strokeRect(r.x*e,r.y*e,r.w*e,r.h*e);for(let r of this.map.walls)(r.kind==="container"||r.kind==="ruin"||r.kind==="pallet")&&(s.fillStyle=r.color,s.fillRect(r.x*e,r.y*e,r.w*e,r.h*e));for(let r of this.map.circles){s.fillStyle=r.kind==="pine"||r.kind==="tree"?"rgba(46,120,52,.85)":r.kind==="rock"?"#9a9a9a":r.kind==="tank"?"#e8ecef":"#d9c48f";let a=r.kind==="pine"||r.kind==="tree"?1.6*(r.scale||1):r.r;s.beginPath(),s.arc(r.x*e,r.y*e,a*e,0,Math.PI*2),s.fill()}s.font=`bold ${7*e}px Fredoka, sans-serif`,s.textAlign="center";for(let r of this.map.pois){s.fillStyle="rgba(0,0,0,.45)";let a=cn(r.name);s.fillText(a,r.x*e+1,r.y*e+1),s.fillStyle="#fff",s.fillText(a,r.x*e,r.y*e)}this.mapImg=n,this.mapR=e}resize(){let t=Math.min(window.devicePixelRatio||1,2);this.dpr=t,this.overlay.width=innerWidth*t,this.overlay.height=innerHeight*t,this.overlay.style.width=innerWidth+"px",this.overlay.style.height=innerHeight+"px"}setRoster(t,e,n){this.players=t,this.localId=e,this.mode=n,Et("hudMode").textContent=Nn[n].name,this.renderKeys()}renderKeys(){let t=Q.keys;Et("slotKey0").textContent=Ae(t.slot1),Et("slotKey1").textContent=Ae(t.slot2),Et("bandKey").textContent=Ae(t.bandage),Et("kitKey").textContent=Ae(t.medkit)}updateMe(t,e){let n=Math.max(0,t.hp);Et("hpFill").style.width=n+"%",Et("hpFill").className="fill "+(n>60?"good":n>30?"mid":"low"),Et("hpText").textContent=n;for(let r=0;r<2;r++){let a=t.w[r],o=Et("slot"+r);if(o.classList.toggle("active",t.sl===r),o.classList.toggle("empty",!a),a){let l=Ne[a[0]];Et("slotName"+r).textContent=l.name,Et("slotAmmo"+r).innerHTML=`<b>${a[1]}</b><span>/ ${t.am[l.ammo]}</span>`,o.style.setProperty("--wc",l.color),Et("slotAmmo"+r).classList.toggle("low",a[1]===0)}else Et("slotName"+r).textContent="Vac\xEDo",Et("slotAmmo"+r).innerHTML=""}Et("bandCount").textContent=t.he.bandage,Et("kitCount").textContent=t.he.medkit,Et("itemBand").classList.toggle("none",!t.he.bandage),Et("itemKit").classList.toggle("none",!t.he.medkit);let s=Et("progress");if(t.rl>0||t.hl){let r=t.w[t.sl],a,o;if(t.hl)a=1-t.hl[1]/t.hl[2],o=t.hl[0]==="medkit"?"Usando botiqu\xEDn\u2026":"Usando venda\u2026";else{let l=r?Ne[r[0]].reload:1;a=1-t.rl/l,o="Recargando\u2026"}s.classList.remove("hidden"),Et("progressFill").style.width=Math.round(Math.max(0,Math.min(1,a))*100)+"%",Et("progressLabel").textContent=o}else s.classList.add("hidden");Et("killCount").textContent=t.k}updateTop(t,e,n,s){Et("aliveCount").textContent=t,Et("matchTime").textContent=kn(Math.max(0,n));let r=Et("zoneInfo");s&&(s.st==="done"?r.innerHTML='<span class="zdot"></span>Zona final':s.ph<0?r.innerHTML=`<span class="zdot"></span>La zona aparece en <b>${kn(s.tl)}</b>`:s.st==="wait"?r.innerHTML=`<span class="zdot"></span>La zona se cierra en <b>${kn(s.tl)}</b>`:r.innerHTML=`<span class="zdot shrink"></span>\xA1Zona cerr\xE1ndose! <b>${kn(s.tl)}</b>`)}updateTeam(t){let e=Et("team");if(Nn[this.mode].teamSize<=1){e.innerHTML="";return}e.innerHTML=t.map(n=>`<div class="mate ${n.alive?"":"dead"}"><i style="background:${n.color}"></i><span>${Ci(n.name)}${n.isMe?" (t\xFA)":""}</span><div class="mbar"><div style="width:${n.alive?n.hp:0}%"></div></div></div>`).join("")}prompt(t){let e=Et("prompt");if(!t){e.classList.add("hidden");return}e.innerHTML=`<kbd>${Ci(Ae(Q.keys.interact))}</kbd> ${t}`,e.classList.remove("hidden")}announce(t,e="",n=2.2){let s=Et("announce");s.className="announce show "+e,s.innerHTML=t,clearTimeout(this.annTimer),this.annTimer=setTimeout(()=>{s.className="announce "+e},n*1e3)}toast(t){let e=document.createElement("div");for(e.className="toast",e.textContent=t,Et("toasts").appendChild(e),setTimeout(()=>e.classList.add("out"),1600),setTimeout(()=>e.remove(),2100);Et("toasts").children.length>4;)Et("toasts").firstChild.remove()}killfeed(t,e,n,s){let r=document.createElement("div");r.className="kf"+(s?" me":"");let a=n==="zone"?"la zona":Ne[n]?.name||"";for(r.innerHTML=t?`<b style="color:${t.color}">${Ci(t.name)}</b> <span class="kw">\u27F6 ${Ci(a)} \u27F6</span> <b style="color:${e.color}">${Ci(e.name)}</b>`:`<b style="color:${e.color}">${Ci(e.name)}</b> <span class="kw">eliminado por ${Ci(a||"la zona")}</span>`,Et("killfeed").prepend(r),setTimeout(()=>r.classList.add("out"),6e3),setTimeout(()=>r.remove(),6600);Et("killfeed").children.length>6;)Et("killfeed").lastChild.remove()}hitmarker(t=!1){let e=Et("hitmarker");e.classList.remove("show","kill"),e.offsetWidth,e.classList.add("show"),t&&e.classList.add("kill")}damageFlash(t){let e=Et("dmgVignette");e.style.opacity=Math.min(.85,.25+t/40),clearTimeout(this.dmgT),this.dmgT=setTimeout(()=>{e.style.opacity=0},180)}setZoneVignette(t){Et("zoneVignette").style.opacity=t?1:0}setLowHp(t){Et("lowHp").style.opacity=t>0&&t<=30?.35+(30-t)/60:0}floatText(t,e,n,s,r="#fff",a=!1){this.floaters.push({x:t,y:e,z:n,text:s,color:r,big:a,t:0,ox:(Math.random()-.5)*30})}addIndicator(t,e="damage"){this.indicators.push({angle:t,kind:e,t:e==="damage"?1.4:1.6})}crosshair(t,e,n,s,r){let a=Et("crosshair");a.style.display=s?"block":"none",a.style.transform=`translate(${t}px, ${e}px)`,a.style.setProperty("--gap",Math.round(6+n)+"px"),a.classList.toggle("blocked",!!r),Et("hitmarker").style.transform=`translate(${t}px, ${e}px)`}drawOverlay(t,e,n,s){let r=this.ctx,a=this.dpr;r.setTransform(a,0,0,a,0,0),r.clearRect(0,0,innerWidth,innerHeight),r.textAlign="center";for(let c of e){let h=n(c.x,c.h,c.y);if(!h)continue;let u=54;r.font="600 13px Fredoka, sans-serif",r.lineWidth=3,r.strokeStyle="rgba(0,0,0,.55)",r.strokeText(c.name,h.x,h.y-12),r.fillStyle=c.color,r.fillText(c.name,h.x,h.y-12),r.fillStyle="rgba(0,0,0,.5)",hf(r,h.x-u/2-1,h.y-7,u+2,8,4),r.fill(),r.fillStyle=c.enemy?"#ff5a5f":"#5ad67d",hf(r,h.x-u/2,h.y-6,u*Math.max(0,c.hp)/100,6,3),r.fill()}for(let c=this.floaters.length-1;c>=0;c--){let h=this.floaters[c];if(h.t+=t,h.t>.9){this.floaters.splice(c,1);continue}let u=n(h.x,h.z+h.t*1.6,h.y);if(!u)continue;let d=1-Math.max(0,h.t-.5)/.4;r.globalAlpha=d,r.font=`800 ${h.big?26:20}px Fredoka, sans-serif`,r.lineWidth=4,r.strokeStyle="rgba(0,0,0,.6)";let f=1+Math.max(0,.15-h.t)*3;r.save(),r.translate(u.x+h.ox*h.t,u.y),r.scale(f,f),r.strokeText(h.text,0,0),r.fillStyle=h.color,r.fillText(h.text,0,0),r.restore()}r.globalAlpha=1;let o=s.x,l=s.y;for(let c=this.indicators.length-1;c>=0;c--){let h=this.indicators[c];if(h.t-=t,h.t<=0){this.indicators.splice(c,1);continue}let u=Math.min(1,h.t);r.save(),r.translate(o,l),r.rotate(h.angle),h.kind==="damage"?(r.strokeStyle=`rgba(255,60,60,${.85*u})`,r.lineWidth=10,r.lineCap="round",r.beginPath(),r.arc(0,0,120,-.32,.32),r.stroke()):(r.fillStyle=`rgba(255,210,63,${.9*u})`,r.beginPath(),r.moveTo(165,0),r.lineTo(145,-11),r.lineTo(145,11),r.closePath(),r.fill()),r.restore()}}drawMinimap(t,e,n,s,r){let a=this.mmCtx,o=this.mm.width,l=this.mm.height,h=o/110;a.save(),a.clearRect(0,0,o,l),a.beginPath(),a.arc(o/2,l/2,o/2-2,0,Math.PI*2),a.clip(),a.fillStyle="#3fb6e8",a.fillRect(0,0,o,l),a.translate(o/2,l/2),r&&a.rotate(-e-Math.PI/2),a.scale(h,h),a.translate(-t.x,-t.y),a.drawImage(this.mapImg,0,0,this.map.size,this.map.size),this._drawZone(a,s,1/h);for(let u of n)!u.alive||u.isMe||!u.mate&&!u.revealed||(a.fillStyle=u.mate?u.color:"#ff3b3b",a.beginPath(),a.arc(u.x,u.y,2.2/h*2.4,0,Math.PI*2),a.fill(),a.strokeStyle="#fff",a.lineWidth=1/h,a.stroke());if(a.restore(),a.save(),a.translate(o/2,l/2),a.rotate(r?-Math.PI/2:t.a),a.fillStyle="#ffffff",a.strokeStyle="#1b1b1f",a.lineWidth=2,a.beginPath(),a.moveTo(9,0),a.lineTo(-6,-6),a.lineTo(-3,0),a.lineTo(-6,6),a.closePath(),a.fill(),a.stroke(),a.restore(),r){let u=-e-Math.PI/2-Math.PI/2;a.fillStyle="#fff",a.font="bold 12px Fredoka, sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText("N",o/2+Math.cos(u)*(o/2-12),l/2+Math.sin(u)*(l/2-12))}a.strokeStyle="rgba(255,255,255,.85)",a.lineWidth=3,a.beginPath(),a.arc(o/2,l/2,o/2-2,0,Math.PI*2),a.stroke()}_drawZone(t,e,n){e&&(t.save(),t.fillStyle="rgba(110,60,220,.38)",t.beginPath(),t.rect(-200,-200,this.map.size+400,this.map.size+400),t.arc(e.cx,e.cy,Math.max(.1,e.r),0,Math.PI*2,!0),t.fill("evenodd"),t.strokeStyle="#b07cff",t.lineWidth=2.5*n,t.beginPath(),t.arc(e.cx,e.cy,Math.max(.1,e.r),0,Math.PI*2),t.stroke(),e.ph>=0&&e.st!=="done"&&(t.strokeStyle="#ffffff",t.lineWidth=2*n,t.setLineDash([6*n,4*n]),t.beginPath(),t.arc(e.tx,e.ty,Math.max(.1,e.tr),0,Math.PI*2),t.stroke(),t.setLineDash([])),t.restore())}showScoreboard(t,e){if(Et("scoreboard").classList.toggle("hidden",!t),!t||!e)return;let s=this.bmCtx,r=this.bigMap.width,a=r/this.map.size;s.clearRect(0,0,r,r),s.save(),s.scale(a,a),s.drawImage(this.mapImg,0,0,this.map.size,this.map.size),this._drawZone(s,e.zone,1/a);for(let l of e.players)!l.alive||!l.mate&&!l.isMe||(s.fillStyle=l.isMe?"#ffffff":l.color,s.beginPath(),s.arc(l.x,l.y,4.5/a*1.2,0,Math.PI*2),s.fill(),s.strokeStyle="#1b1b1f",s.lineWidth=1.5/a,s.stroke());s.restore();let o=e.players.slice().sort((l,c)=>c.alive-l.alive||c.kills-l.kills);Et("sbInfo").innerHTML=`<div class="sbHead"><span>${Nn[this.mode].name}</span><span>${e.alive} vivos</span><span>${kn(e.time)}</span></div><div class="sbInv">${e.inventory}</div><table><tr><th>Jugador</th><th>Equipo</th><th>Bajas</th><th>Estado</th></tr>`+o.map(l=>`<tr class="${l.isMe?"me":""} ${l.alive?"":"dead"}"><td>${Ci(l.name)}${l.bot?' <small title="Controlado por IA">IA</small>':""}</td><td><i class="tdot" style="background:${l.color}"></i>${l.team+1}</td><td>${l.kills}</td><td>${l.alive?"Vivo":"Eliminado"}</td></tr>`).join("")+"</table>"}hide(){this.root.classList.add("hidden"),Et("scoreboard").classList.add("hidden"),this.ctx.clearRect(0,0,this.overlay.width,this.overlay.height),Et("killfeed").innerHTML="",Et("toasts").innerHTML="",Et("dmgVignette").style.opacity=0,Et("zoneVignette").style.opacity=0,Et("lowHp").style.opacity=0,Et("spectate").classList.add("hidden"),Et("announce").className="announce"}}});var Zc,xt,Or=Be(()=>{qs();Zc=class{constructor(){this.ctx=null,this.listener={x:0,y:0,yaw:0},this.musicOn=!1}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t;let e=this.ctx;this.master=e.createGain(),this.comp=e.createDynamicsCompressor(),this.comp.threshold.value=-14,this.comp.ratio.value=4,this.master.connect(this.comp).connect(e.destination),this.sfx=e.createGain(),this.sfx.connect(this.master),this.music=e.createGain(),this.music.connect(this.master),this.echo=e.createDelay(1),this.echo.delayTime.value=.18,this.echoGain=e.createGain(),this.echoGain.gain.value=.22,this.echo.connect(this.echoGain).connect(this.sfx),this.echoGain.connect(this.echo);let n=e.sampleRate*1.5;this.noise=e.createBuffer(1,n,e.sampleRate);let s=this.noise.getChannelData(0);for(let r=0;r<n;r++)s[r]=Math.random()*2-1;this.applyVolumes(),mo(()=>this.applyVolumes())}applyVolumes(){this.ctx&&(this.master.gain.value=Q.masterVol,this.sfx.gain.value=Q.sfxVol,this.music.gain.value=Q.musicVol*.55)}get t(){return this.ctx.currentTime}_out(t=1,e=0){let n=this.ctx,s=n.createGain();if(s.gain.value=t,n.createStereoPanner){let r=n.createStereoPanner();r.pan.value=Math.max(-1,Math.min(1,e)),s.connect(r).connect(this.sfx)}else s.connect(this.sfx);return s}_noise(t,{t:e=this.t,dur:n=.2,type:s="lowpass",freq:r=2e3,q:a=.7,gain:o=1,attack:l=.002,sweepTo:c=null}){let h=this.ctx,u=h.createBufferSource();u.buffer=this.noise,u.playbackRate.value=.8+Math.random()*.4;let d=h.createBiquadFilter();d.type=s,d.frequency.setValueAtTime(r,e),d.Q.value=a,c&&d.frequency.exponentialRampToValueAtTime(c,e+n);let f=h.createGain();f.gain.setValueAtTime(1e-4,e),f.gain.exponentialRampToValueAtTime(o,e+l),f.gain.exponentialRampToValueAtTime(1e-4,e+n),u.connect(d).connect(f).connect(t),u.start(e,Math.random()*.5),u.stop(e+n+.05)}_tone(t,{t:e=this.t,dur:n=.15,type:s="sine",freq:r=440,to:a=null,gain:o=.5,attack:l=.005}){let c=this.ctx,h=c.createOscillator();h.type=s,h.frequency.setValueAtTime(r,e),a&&h.frequency.exponentialRampToValueAtTime(a,e+n);let u=c.createGain();u.gain.setValueAtTime(1e-4,e),u.gain.exponentialRampToValueAtTime(o,e+l),u.gain.exponentialRampToValueAtTime(1e-4,e+n),h.connect(u).connect(t),h.start(e),h.stop(e+n+.05)}spatial(t,e,n=70){let s=t-this.listener.x,r=e-this.listener.y,a=Math.hypot(s,r);if(a>n)return null;let o=Math.max(0,1-a/n)**1.6,l=Math.atan2(r,s)-this.listener.yaw;return{vol:o,pan:Math.sin(l)*Math.min(1,a/6)*.8,d:a}}gunshot(t,e=null,n=null){if(!this.ctx)return;let s=1,r=0,a=!1;if(e!==null){let c=this.spatial(e,n,t==="sniper"?140:90);if(!c)return;s=c.vol,r=c.pan,a=c.d>25}let o=this._out(s*.9,r),l={pistol:{n:3200,nd:.13,th:170,td:.08,g:.7},smg:{n:4200,nd:.08,th:210,td:.05,g:.5},shotgun:{n:1400,nd:.38,th:75,td:.22,g:1},ar:{n:2600,nd:.14,th:120,td:.1,g:.75},sniper:{n:2200,nd:.6,th:60,td:.3,g:1}}[t]||{n:3e3,nd:.12,th:150,td:.08,g:.6};if(this._noise(o,{dur:l.nd*(a?1.3:1),freq:a?l.n*.4:l.n,gain:l.g,sweepTo:300}),this._tone(o,{dur:l.td,type:"triangle",freq:l.th*2,to:l.th*.5,gain:l.g*.8}),t==="sniper"||t==="shotgun"||a){let c=this.ctx.createGain();c.gain.value=s*.5,c.connect(this.echo),this._noise(c,{dur:.3,freq:900,gain:.5})}}reload(t,e=null,n=null){if(!this.ctx)return;let s=.7,r=0;if(e!==null){let o=this.spatial(e,n,25);if(!o)return;s*=o.vol,r=o.pan}let a=this._out(s,r);this._tone(a,{type:"square",freq:900,to:500,dur:.05,gain:.25}),this._tone(a,{t:this.t+.35,type:"square",freq:650,to:1200,dur:.06,gain:.3})}dry(){this.ctx&&this._tone(this._out(.5),{type:"square",freq:1500,dur:.03,gain:.25})}step(t=null,e=null,n=!1){if(!this.ctx)return;let s=n?.35:.22,r=0;if(t!==null){let a=this.spatial(t,e,22);if(!a)return;s*=a.vol,r=a.pan}this._noise(this._out(s,r),{dur:.07,freq:500+Math.random()*300,type:"lowpass",gain:.8})}impact(t,e){if(!this.ctx)return;let n=this.spatial(t,e,40);n&&(this._tone(this._out(n.vol*.6,n.pan),{type:"sine",freq:180,to:60,dur:.12,gain:.7}),this._noise(this._out(n.vol*.4,n.pan),{dur:.06,freq:1200,gain:.6}))}hitMarker(t=!1){if(!this.ctx)return;let e=this._out(.5);this._tone(e,{type:"triangle",freq:t?1800:1350,dur:.06,gain:.5})}hurt(){if(!this.ctx)return;let t=this._out(.7);this._tone(t,{type:"sawtooth",freq:160,to:70,dur:.18,gain:.35}),this._noise(t,{dur:.12,freq:700,gain:.5})}elimination(){if(!this.ctx)return;let t=this._out(.6);[784,988,1319].forEach((e,n)=>this._tone(t,{t:this.t+n*.07,type:"triangle",freq:e,dur:.22,gain:.45}))}crate(t,e,n){if(!this.ctx)return;let s=this.spatial(t,e,40);if(!s)return;let r=this._out(s.vol*(n?.9:.4),s.pan);this._noise(r,{dur:n?.35:.08,freq:800,type:"bandpass",q:2,gain:.8}),n&&this._tone(r,{type:"triangle",freq:220,to:90,dur:.25,gain:.5})}pickup(){if(!this.ctx)return;let t=this._out(.45);this._tone(t,{type:"sine",freq:660,dur:.07,gain:.5}),this._tone(t,{t:this.t+.06,type:"sine",freq:990,dur:.1,gain:.5})}heal(){if(!this.ctx)return;let t=this._out(.4);[523,659,784,1047].forEach((e,n)=>this._tone(t,{t:this.t+n*.06,type:"sine",freq:e,dur:.16,gain:.35}))}click(){this.ctx&&this._tone(this._out(.35),{type:"triangle",freq:880,to:1320,dur:.05,gain:.4})}hover(){this.ctx&&this._tone(this._out(.15),{type:"sine",freq:1200,dur:.03,gain:.25})}zoneAlarm(){if(!this.ctx)return;let t=this._out(.4);for(let e=0;e<3;e++)this._tone(t,{t:this.t+e*.32,type:"square",freq:440,to:330,dur:.25,gain:.18})}zoneTick(){this.ctx&&this._tone(this._out(.35),{type:"sawtooth",freq:90,dur:.25,gain:.25})}countdown(t=!1){this.ctx&&this._tone(this._out(.5),{type:"square",freq:t?1046:523,dur:t?.35:.12,gain:.25})}victory(){if(!this.ctx)return;this.stopMusic();let t=this._out(.7),e=[[523,0],[659,.15],[784,.3],[1047,.45],[988,.75],[1047,.9],[1319,1.05]];for(let[n,s]of e)this._tone(t,{t:this.t+s,type:"square",freq:n,dur:.28,gain:.18}),this._tone(t,{t:this.t+s,type:"triangle",freq:n/2,dur:.3,gain:.3})}defeat(){if(!this.ctx)return;this.stopMusic();let t=this._out(.6);[[392,0],[370,.3],[349,.6],[262,.95]].forEach(([e,n])=>this._tone(t,{t:this.t+n,type:"triangle",freq:e,dur:n>.9?.9:.32,gain:.35}))}startMusic(){if(!this.ctx||this.musicOn)return;this.musicOn=!0,this.musicStep=0,this.nextNote=this.t+.1;let t=()=>{if(this.musicOn){for(;this.nextNote<this.t+.25;)this._musicStep(this.musicStep,this.nextNote),this.musicStep++,this.nextNote+=60/104/2;this.musicTimer=setTimeout(t,60)}};t()}stopMusic(){this.musicOn=!1,clearTimeout(this.musicTimer)}_musicStep(t,e){let n=this.music,s=[[60,64,67],[55,59,62],[57,60,64],[53,57,60]],r=Math.floor(t/8)%4,a=t%8,o=s[r],l=h=>440*2**((h-69)/12);if(a===0)for(let h of o)this._tone(n,{t:e,type:"triangle",freq:l(h),dur:1.9,gain:.07,attack:.08});a%4===0&&this._tone(n,{t:e,type:"sine",freq:l(o[0]-24),dur:.5,gain:.32});let c=[0,1,2,1,2,0,2,1];t%16>1&&this._tone(n,{t:e,type:"square",freq:l(o[c[a]]+12),dur:.12,gain:.045}),(a===0||a===4)&&this._tone(n,{t:e,type:"sine",freq:120,to:45,dur:.18,gain:.45}),a%2===1&&this._noise(n,{t:e,dur:.04,type:"highpass",freq:7e3,gain:.12}),a===4&&this._noise(n,{t:e,dur:.12,type:"bandpass",freq:1800,gain:.18})}},xt=new Zc});function xf(){ai=new qi({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),ai.setSize(128,128),ai.outputColorSpace=pe,oi=new Mi,oi.add(new Si("#ffffff","#8899aa",1.5));let i=new wi("#ffffff",1.4);i.position.set(2,4,5),oi.add(i),es=new Le(30,1,.1,50)}function Js(i,t={}){let e=yn[i];if(!e)return"";let n=i+JSON.stringify(t);if(Zs.has(n))return Zs.get(n);try{ai||xf();let s={...gn,...t,[e.slot]:i};e.slot!=="hat"&&e.slot!=="hair"&&(s.hat=null),e.slot==="hat"&&(s.hair="hair-short");let r=new Gn(s);for(let l=0;l<3;l++)r.update(.03,{speed:0});r.head.rotation.set(0,0,0),r.eyes&&(r.eyes.scale.y=1),oi.add(r.root);let a=yf[e.slot]||yf.top;es.position.set(...a.pos),es.lookAt(...a.look),ai.render(oi,es);let o=ai.domElement.toDataURL("image/png");return oi.remove(r.root),Zs.set(n,o),o}catch(s){return console.warn("miniatura",s),""}}function Jc(i){let t="o"+JSON.stringify(i);if(Zs.has(t))return Zs.get(t);try{ai||xf();let e=new Gn(i);for(let s=0;s<3;s++)e.update(.03,{speed:0});e.root.rotation.y=.35,oi.add(e.root),es.position.set(.5,1.4,4.6),es.lookAt(0,1.05,0),ai.render(oi,es);let n=ai.domElement.toDataURL("image/png");return oi.remove(e.root),Zs.set(t,n),n}catch{return""}}var ai,oi,es,Zs,yf,_f=Be(()=>{si();Ir();uo();ai=null,oi=null,es=null,Zs=new Map;yf={hair:{pos:[.5,1.95,2],look:[0,1.72,0]},face:{pos:[.3,1.8,1.7],look:[0,1.7,0]},hat:{pos:[.5,2.05,2.1],look:[0,1.85,0]},mask:{pos:[.3,1.8,1.8],look:[0,1.7,0]},glasses:{pos:[.3,1.82,1.6],look:[0,1.75,0]},top:{pos:[.6,1.4,3],look:[0,1.15,0]},pants:{pos:[.6,.75,2.8],look:[0,.5,0]},backpack:{pos:[-.8,1.4,-2.8],look:[0,1.15,0]},special:{pos:[.9,1.6,3.4],look:[0,1.3,0]}}});async function vf(){if(!so)try{let i=await(await fetch(io+"/api/config",{cache:"no-store"})).json();if(!i.adsClient)return;let t=document.createElement("script");t.async=!0,t.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",t.setAttribute("data-ad-client",i.adsClient),i.adsTest&&t.setAttribute("data-adbreak-test","on"),t.setAttribute("data-ad-frequency-hint","120s"),t.crossOrigin="anonymous",t.onerror=()=>{Fr.enabled=!1},document.head.appendChild(t),window.adsbygoogle=window.adsbygoogle||[],window.adBreak=window.adConfig=function(e){window.adsbygoogle.push(e)},window.adConfig({preloadAdBreaks:"on",sound:"on"}),Fr.enabled=!0}catch{}}function jc(i,t){if(!Fr.enabled)return t();let e=!1,n=()=>{e||(e=!0,t())};setTimeout(n,8e3);try{window.adBreak({type:"next",name:i,beforeAd:bf,afterAd:Sf,adBreakDone:n})}catch{n()}}function js(){return Fr.enabled}function wf({onViewed:i,onFail:t}){if(!Fr.enabled)return t("disabled");let e=!1,n=s=>{e||(e=!0,t(s))};try{window.adBreak({type:"reward",name:"recompensa",beforeAd:bf,afterAd:Sf,beforeReward:s=>s(),adViewed:()=>{e||(e=!0,i())},adDismissed:()=>n("dismissed"),adBreakDone:s=>{e||n(s&&s.breakStatus||"noad")}})}catch{n("error")}}var Fr,Mf,bf,Sf,Kc=Be(()=>{Or();Pr();Fr={enabled:!1,ready:!1};Mf=null,bf=()=>{xt.ctx&&(Mf=xt.musicOn,xt.stopMusic(),xt.ctx.suspend())},Sf=()=>{xt.ctx&&(xt.ctx.resume(),Mf&&xt.startMusic())}});var Rf={};Vf(Rf,{closePanel:()=>Wr,initMeta:()=>eh,isPanelOpen:()=>sh,onProfileUpdate:()=>rh,requestAd:()=>Gr,showLevelUp:()=>Co,showReward:()=>Cf});function eh(i,t){te=i,Ao=t.showError,fetch(io+"/api/config").then(s=>s.json()).then(s=>{Ef=so?{...s,payments:!1}:s}).catch(()=>{});let e=te.net;e.on("reward",s=>Cf(s.reward)),e.on("info",s=>To(s.msg)),e.on("checkout",s=>{/^https:\/\/checkout\.stripe\.com\//.test(s.url)&&(location.href=s.url)}),e.on("adToken",s=>{let r=Qc.get(s.req);Qc.delete(s.req),wf({onViewed:()=>e.send({t:"adDone",token:s.token}),onFail:a=>{r&&r.btn&&(r.btn.disabled=!1),Ao(a==="dismissed"?"Has cerrado el anuncio antes de terminar: no hay recompensa.":"Ahora mismo no hay anuncios disponibles. Int\xE9ntalo m\xE1s tarde.")}})}),kt("mCustom").onclick=()=>zr("custom"),kt("mShop").onclick=()=>zr("shop"),kt("mMissions").onclick=()=>zr("missions"),kt("mRewards").onclick=()=>zr("rewards"),kt("mProfile").onclick=()=>zr("profile"),document.querySelectorAll(".panelClose").forEach(s=>s.onclick=Wr),kt("customSave").onclick=O_,kt("customReset").onclick=()=>{We={...te.profile.outfit},Hr(),Ks()},kt("lvlOk").onclick=()=>{kt("levelup").classList.add("hidden")},kt("rewardOk").onclick=()=>{kt("rewardPop").classList.add("hidden")};let n=new URLSearchParams(location.search).get("compra");n==="ok"&&setTimeout(()=>To("Pago recibido: tus monedas llegar\xE1n en unos segundos."),1500),n==="cancelada"&&setTimeout(()=>To("Has cancelado la compra."),1500)}function To(i){let t=document.createElement("div");t.className="lobbyToast",t.textContent=i,document.body.appendChild(t),setTimeout(()=>t.classList.add("out"),2600),setTimeout(()=>t.remove(),3100)}function k_(i){let t=i.unlock;return t.type==="free"?"Gratis":t.type==="level"?`Nivel ${t.level}`:t.type==="coins"?`\u{1FA99} ${t.price}`:t.type==="ads"?`\u{1F4FA} ${te.profile?.ads?.progress?.[i.id]||0}/${t.ads} anuncios`:t.type==="daily"?"\u{1F381} Recompensa diaria":""}function Vr(i){return{skin:i.skin,hairColor:i.hairColor,topColor:i.topColor,pantsColor:i.pantsColor}}function nh(i,{equipped:t=!1,showAction:e=!0}={}){let n=ns(i.id),s=Ad[i.rarity],r=Js(i.id,Vr(We||te.profile.outfit)),a="";return e&&!n&&(i.unlock.type==="coins"?a=`<button class="cardBtn buy" data-buy="${i.id}" ${te.profile.coins<i.unlock.price?'data-short="1"':""}>Comprar \u{1FA99} ${i.unlock.price}</button>`:i.unlock.type==="ads"?a=js()?`<button class="cardBtn ad" data-ad="${i.id}">\u{1F4FA} Ver anuncio</button>`:'<span class="cardNote">Anuncios a\xFAn no activos</span>':i.unlock.type==="level"?a=`<span class="cardNote">\u{1F512} Se desbloquea en el nivel ${i.unlock.level}</span>`:i.unlock.type==="daily"&&(a='<span class="cardNote">\u{1F381} Llega con la recompensa diaria</span>')),`<div class="iCard ${n?"own":"locked"} ${t?"equipped":""}" data-item="${i.id}" style="--rc:${s.color}">
    <div class="iThumb">${r?`<img src="${r}" alt="">`:""}${n?"":'<span class="lockIc">\u{1F512}</span>'}${t?'<span class="eqIc">\u2714</span>':""}</div>
    <div class="iName">${_n(i.name)}</div>
    <div class="iMeta"><span class="rar" style="color:${s.color}">${i.rarity}</span><span>${n?t?"Equipado":"Desbloqueado":k_(i)}</span></div>
    ${a}
  </div>`}function ih(i){i.querySelectorAll("[data-buy]").forEach(t=>t.onclick=e=>{if(e.stopPropagation(),t.dataset.short)return Ao("No tienes monedas suficientes. Cons\xEDguelas jugando, con misiones o en Recompensas.");let n=yn[t.dataset.buy];t.disabled=!0,te.net.send({t:"buy",id:n.id})}),i.querySelectorAll("[data-ad]").forEach(t=>t.onclick=e=>{e.stopPropagation(),Gr("item",t.dataset.ad,t)})}function Gr(i,t=null,e=null){if(!js())return Ao("Los anuncios con recompensa a\xFAn no est\xE1n activados.");let n=Math.random().toString(36).slice(2);Qc.set(n,{btn:e}),e&&(e.disabled=!0),te.net.send({t:"adStart",kind:i,id:t,req:n})}function zr(i){xt.click(),Wr(!0),hn=i,document.body.classList.add("panelOpen"),(i==="custom"||i==="shop")&&(We={...te.profile.outfit},te.lobby.setFocus(i==="shop"?"left":"center")),kt(i+"Panel").classList.remove("hidden"),Af()}function Wr(i){hn&&((hn==="custom"||hn==="shop")&&(We=null,te.lobby.setFocus(!1),te.lobby.setOutfit(te.profile.outfit)),kt(hn+"Panel").classList.add("hidden"),document.body.classList.remove("panelOpen"),hn=null,i!==!0&&xt.click())}function sh(){return!!hn}function Af(){hn==="custom"?Ks():hn==="shop"?th():hn==="missions"?B_():hn==="rewards"?z_():hn==="profile"&&H_()}function rh(){kt("coinCount").textContent=te.profile.coins.toLocaleString("es-ES");let i=te.profile.missions.list.filter(t=>t.progress>=t.goal&&!t.claimed).length;kt("mMissionsBadge").textContent=i||"",kt("mMissionsBadge").classList.toggle("hidden",!i),kt("mRewardsBadge").classList.toggle("hidden",te.profile.daily.claimedToday),hn&&Af()}function Hr(){te.lobby.setOutfit(We)}function Ks(){let i=[{id:"presets",name:"Estilos r\xE1pidos",icon:"\u2B50"},...Vs,{id:"colors",name:"Colores",icon:"\u{1F3A8}"}];kt("customTabs").innerHTML=i.map(s=>`<button class="cTab ${Br===s.id?"active":""}" data-tab="${s.id}"><span>${s.icon}</span>${_n(s.name)}</button>`).join(""),kt("customTabs").querySelectorAll(".cTab").forEach(s=>s.onclick=()=>{Br=s.dataset.tab,xt.hover(),Ks()});let t=kt("customGrid");if(Br==="presets")t.innerHTML='<p class="muted">Empieza desde un estilo y luego cambia lo que quieras.</p><div class="iGrid">'+Lr.map((s,r)=>`<div class="iCard own preset" data-preset="${r}"><div class="iThumb tall"><img src="${Jc(s.outfit)}" alt=""></div><div class="iName">${_n(s.name)}</div></div>`).join("")+"</div>",t.querySelectorAll("[data-preset]").forEach(s=>s.onclick=()=>{We={...Lr[+s.dataset.preset].outfit},Hr(),Ks(),xt.click()});else if(Br==="colors")t.innerHTML=Pc.map(s=>`<h4>${_n(s.name)}</h4><div class="swatches">${s.palette.map(r=>`<button class="sw ${We[s.id]===r?"active":""}" data-c="${s.id}" data-v="${r}" style="background:${r}"></button>`).join("")}</div>`).join(""),t.querySelectorAll(".sw").forEach(s=>s.onclick=()=>{We[s.dataset.c]=s.dataset.v,Hr(),Ks()});else{let s=Vs.find(o=>o.id===Br),r=Ai.filter(o=>o.slot===s.id).sort((o,l)=>ns(l.id)-ns(o.id)),a=s.required?"":`<div class="iCard own none ${We[s.id]?"":"equipped"}" data-none="1"><div class="iThumb"><span class="noneIc">\u2205</span>${We[s.id]?"":'<span class="eqIc">\u2714</span>'}</div><div class="iName">Sin ${_n(s.name.toLowerCase().split(" ")[0])}</div></div>`;t.innerHTML=`<div class="iGrid">${a}${r.map(o=>nh(o,{equipped:We[s.id]===o.id})).join("")}</div>`,t.querySelectorAll(".iCard").forEach(o=>o.onclick=()=>{o.dataset.none?We[s.id]=null:o.dataset.item&&(We[s.id]=o.dataset.item),xt.hover(),Hr(),Ks()}),ih(t)}let e=Vs.map(s=>We[s.id]).filter(s=>s&&!ns(s)),n=JSON.stringify(We)!==JSON.stringify(te.profile.outfit);kt("customSave").disabled=!n||e.length>0,kt("customStatus").innerHTML=e.length?`\u{1F512} Est\xE1s probando ${e.length===1?"una pieza bloqueada":e.length+" piezas bloqueadas"}: desbloqu\xE9alas para guardar.`:n?"Tienes cambios sin guardar.":"Esta es tu apariencia actual."}function O_(){te.net.send({t:"setOutfit",outfit:We}),kt("customSave").disabled=!0}function th(){let i=[["featured","\u2B50 Destacados"],["new","\u{1F195} Novedades"],["popular","\u{1F525} Populares"],["all","\u{1F6CD}\uFE0F Todo"],["ads","\u{1F4FA} Gratis con anuncios"]];Ef.payments&&i.push(["coins","\u{1FA99} Monedas"]),kt("shopTabs").innerHTML=i.map(([r,a])=>`<button class="sTab ${li===r?"active":""}" data-tab="${r}">${a}</button>`).join(""),kt("shopTabs").querySelectorAll(".sTab").forEach(r=>r.onclick=()=>{li=r.dataset.tab,th()}),kt("shopCoins").textContent=te.profile.coins.toLocaleString("es-ES");let t=kt("shopBody");if(li==="coins"){t.innerHTML='<p class="muted">Compras opcionales con pago seguro de Stripe. Las monedas se a\xF1aden a tu cuenta cuando se confirma el pago.</p><div class="packs">'+Ld.map(r=>`<div class="pack"><div class="packIc">\u{1FA99}</div><b>${_n(r.label)}</b>${r.bonus?`<span class="bonus">${r.bonus}</span>`:""}<button class="btn small" data-pack="${r.id}">${(r.price/100).toFixed(2).replace(".",",")} \u20AC</button></div>`).join("")+"</div>",t.querySelectorAll("[data-pack]").forEach(r=>r.onclick=()=>{r.disabled=!0,te.net.send({t:"buyPack",id:r.dataset.pack})});return}let e=Ai.filter(r=>r.unlock.type!=="free");li==="featured"?e=e.filter(r=>r.tags.includes("featured")||r.rarity==="legendaria"):li==="new"?e=e.filter(r=>r.tags.includes("new")):li==="popular"?e=e.filter(r=>r.tags.includes("popular")||r.unlock.type==="coins").slice(0,12):li==="ads"&&(e=e.filter(r=>r.unlock.type==="ads"));let n=[{id:"all",name:"Todas"},...Vs.filter(r=>!["face"].includes(r.id))],s=li==="all"?`<div class="chips">${n.map(r=>`<button class="chip ${Eo===r.id?"active":""}" data-slot="${r.id}">${r.icon||""} ${_n(r.name)}</button>`).join("")}</div>`:"";li==="all"&&Eo!=="all"&&(e=e.filter(r=>r.slot===Eo)),e.sort((r,a)=>ns(r.id)-ns(a.id)),t.innerHTML=s+`<div class="iGrid">${e.map(r=>nh(r,{equipped:te.profile.outfit[r.slot]===r.id})).join("")||'<p class="muted">No hay art\xEDculos aqu\xED.</p>'}</div>`,t.querySelectorAll(".chip").forEach(r=>r.onclick=()=>{Eo=r.dataset.slot,th()}),t.querySelectorAll(".iCard").forEach(r=>r.onclick=()=>{let a=yn[r.dataset.item];a&&(We={...te.profile.outfit,[a.slot]:a.id},Hr(),xt.hover(),kt("shopPreview").textContent=`Vista previa: ${a.name}`)}),ih(t)}function F_(){let i=new Date,t=new Date(i.toLocaleString("en-US",{timeZone:"Europe/Madrid"})),e=new Date(t);return e.setHours(24,0,0,0),Math.max(0,(e-t)/1e3)}function B_(){let i=te.profile.missions.list,t=F_();kt("missionsBody").innerHTML=`<p class="muted">Nuevas misiones en <b>${Math.floor(t/3600)} h ${Math.floor(t%3600/60)} min</b>.</p>`+i.map(e=>{let n=e.progress>=e.goal,s=Math.round(Math.min(1,e.progress/e.goal)*100),r=e.stat==="survived"?`${kn(e.progress)} / ${kn(e.goal)}`:`${e.progress} / ${e.goal}`;return`<div class="mission ${e.claimed?"claimed":n?"done":""}"><div class="mInfo"><b>${_n(e.text)}</b><div class="mBar"><div style="width:${s}%"></div></div><small>${r}</small></div>
      <div class="mRew">\u{1FA99} ${e.coins}<br>\u2B50 ${e.xp} XP</div>
      ${e.claimed?'<span class="mState">\u2714 Cobrada</span>':`<button class="btn small" data-claim="${e.id}" ${n?"":"disabled"}>${n?"Cobrar":"En curso"}</button>`}</div>`}).join(""),kt("missionsBody").querySelectorAll("[data-claim]").forEach(e=>e.onclick=()=>{e.disabled=!0,te.net.send({t:"claimMission",id:e.dataset.claim})})}function z_(){let i=te.profile.daily,t=Rd.map((r,a)=>{let o=a<i.nextIndex||i.claimedToday&&a===i.nextIndex?"got":a===i.nextIndex&&!i.claimedToday?"today":"",l=r.item?yn[r.item]:null;return`<div class="day ${o}"><small>D\xEDa ${a+1}</small>${l?`<img src="${Js(l.id,Vr(te.profile.outfit))}" alt="">`:'<div class="dayIc">\u{1FA99}</div>'}<b>${l?_n(l.name):""}</b><span>${r.coins?"\u{1FA99} "+r.coins:""}${r.xp?" \xB7 \u2B50 "+r.xp:""}</span>${o==="got"?"<i>\u2714</i>":""}</div>`}).join(""),e;if(js()){let r=Ai.filter(a=>a.unlock.type==="ads"&&!Tf().includes(a.id));e=`<div class="adRow"><div><b>\u{1FA99} ${Pd} monedas gratis</b><small>Te quedan ${te.profile.ads.coinsLeft} hoy</small></div><button class="btn small alt" id="adCoins" ${te.profile.ads.coinsLeft?"":"disabled"}>\u{1F4FA} Ver anuncio</button></div><div class="iGrid">${r.map(a=>nh(a)).join("")||'<p class="muted">\xA1Ya tienes todos los objetos de anuncios!</p>'}</div>`}else e='<p class="muted">Las recompensas por ver anuncios aparecer\xE1n aqu\xED en cuanto se active el proveedor de anuncios del juego. Mientras tanto puedes conseguir monedas jugando, con las misiones y con la recompensa diaria.</p>';kt("rewardsBody").innerHTML=`<h4>Recompensa diaria <small>\xB7 racha de ${i.streak} d\xEDa${i.streak===1?"":"s"}</small></h4><div class="days">${t}</div>
    <div class="dailyBtn">${i.claimedToday?'<span class="muted">\u2714 Ya has recogido la de hoy. Vuelve ma\xF1ana para mantener la racha.</span>':'<button class="btn" id="claimDaily">\u{1F381} Recoger recompensa de hoy</button>'}</div>
    <h4>Recompensas gratis por anuncios <small>\xB7 siempre opcionales, nunca durante una partida</small></h4>${e}`;let n=kt("claimDaily");n&&(n.onclick=()=>{n.disabled=!0,te.net.send({t:"claimDaily"})});let s=kt("adCoins");s&&(s.onclick=()=>Gr("coins",null,s)),ih(kt("rewardsBody"))}function H_(){let i=te.profile,t=i.matches?Math.round(i.wins/i.matches*100):0,e=(i.kills/Math.max(1,i.deaths)).toFixed(2),n=(r,a)=>`<div class="stat"><b>${r}</b><small>${a}</small></div>`,s=Ai.filter(r=>ns(r.id)).length;kt("profileBody").innerHTML=`<div class="profTop"><img src="${Jc(i.outfit)}" alt=""><div><h3>${_n(i.name)} <button class="iconBtn" id="profEdit">\u270E</button></h3><div class="plevel"><span class="lvl">NV <b>${i.level}</b></span><div class="xpbar"><div style="width:${Math.round(i.levelXp/i.levelNeed*100)}%"></div></div><small>${i.levelXp}/${i.levelNeed} XP</small></div><p>\u{1FA99} ${i.coins.toLocaleString("es-ES")} monedas \xB7 \u{1F3BD} ${s}/${Ai.length} objetos</p></div></div>
  <div class="statsGrid">${n(i.matches,"Partidas")}${n(i.wins,"Victorias")}${n(t+"%","% de victorias")}${n(i.kills,"Eliminaciones")}${n(e,"Bajas por muerte")}${n(i.damage,"Da\xF1o total")}${n(i.top5,"Top 5")}${n(i.bestKills,"R\xE9cord de bajas")}</div>
  <table><tr><th>Modo</th><th>Partidas</th><th>Victorias</th><th>Eliminaciones</th></tr>${Object.entries(Nn).map(([r,a])=>{let o=i.byMode[r]||{matches:0,wins:0,kills:0};return`<tr><td>${a.name}</td><td>${o.matches}</td><td>${o.wins}</td><td>${o.kills}</td></tr>`}).join("")}</table>
  <h4>Pr\xF3ximas recompensas por nivel</h4><div class="nextLv">${V_(i.level).map(r=>`<div class="nl"><b>Nv ${r.level}</b>${r.items.map(a=>`<img src="${Js(a,Vr(i.outfit))}" title="${_n(yn[a].name)}">`).join("")}<span>\u{1FA99} ${r.coins}</span></div>`).join("")}</div>`,kt("profEdit").onclick=()=>{kt("nameInput").value=i.name,kt("nameModal").classList.remove("hidden"),kt("nameInput").focus()}}function V_(i){let t=[];for(let e=i+1;e<=i+12&&t.length<5;e++){let n=Ai.filter(s=>s.unlock.type==="level"&&s.unlock.level===e).map(s=>s.id);(n.length||e%5===0)&&t.push({level:e,items:n,coins:50+e*10+(e%5===0?150:0)})}return t}function Co(i){if(!i||!i.length)return;let t=i[i.length-1],e=i.flatMap(r=>r.items),n=i.reduce((r,a)=>r+a.coins,0);kt("lvlNum").textContent=t.level,kt("lvlRewards").innerHTML=e.map(r=>`<div class="lvItem"><img src="${Js(r,Vr(te.profile.outfit))}" alt=""><b>${_n(yn[r].name)}</b><small>\xA1Desbloqueado!</small></div>`).join("")+`<div class="lvItem coins"><div class="bigCoin">\u{1FA99}</div><b>+${n} monedas</b></div>`;let s=kt("levelup");s.classList.remove("hidden"),s.classList.remove("play"),s.offsetWidth,s.classList.add("play"),xt.victory()}function Cf(i){if(!i)return;if(xt.pickup(),i.levelRewards&&i.levelRewards.length&&setTimeout(()=>Co(i.levelRewards),400),!(i.items&&i.items.length||i.coins||i.xp)){To(i.title);return}kt("rewardTitle").textContent=i.title,kt("rewardItems").innerHTML=(i.items||[]).map(n=>`<div class="lvItem"><img src="${Js(n,Vr(te.profile.outfit))}" alt=""><b>${_n(yn[n].name)}</b></div>`).join("")+(i.coins?`<div class="lvItem coins"><div class="bigCoin">\u{1FA99}</div><b>+${i.coins}</b></div>`:"")+(i.xp?`<div class="lvItem coins"><div class="bigCoin">\u2B50</div><b>+${i.xp} XP</b></div>`:"");let e=kt("rewardPop");e.classList.remove("hidden"),e.classList.remove("play"),e.offsetWidth,e.classList.add("play")}var kt,_n,te,Ao,Ef,We,Br,li,Eo,hn,Qc,N_,Tf,ns,ah=Be(()=>{uo();Ki();_f();Kc();Or();So();Pr();kt=i=>document.getElementById(i),_n=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Ef={payments:!1},We=null,Br="presets",li="featured",Eo="all",hn=null,Qc=new Map;N_=()=>te.profile?.level||1,Tf=()=>te.profile?.owned||[],ns=i=>Lc(i,N_(),Tf())});si();no();Pr();var ao=class{constructor(){this.ws=null,this.handlers={},this.status="offline",this.ping=0,this.retry=0,this.onStatus=()=>{}}on(t,e){this.handlers[t]=e}connect(){this.setStatus("connecting");let t;try{t=new WebSocket(Sd)}catch{return this.scheduleReconnect()}this.ws=t,t.onopen=()=>{this.retry=0,this.setStatus("online"),this.handlers.__open&&this.handlers.__open(),clearInterval(this.pingTimer),this.pingTimer=setInterval(()=>this.send({t:"ping",c:performance.now()}),2e3)},t.onmessage=e=>{let n;try{n=JSON.parse(e.data)}catch{return}if(n.t==="pong"){this.ping=Math.round(performance.now()-n.c),this.onStatus(this.status,this.ping);return}let s=this.handlers[n.t];if(s)try{s(n)}catch(r){console.error("Error procesando",n.t,r)}},t.onclose=()=>{clearInterval(this.pingTimer),this.ws===t&&(this.setStatus("offline"),this.handlers.__close&&this.handlers.__close(),this.scheduleReconnect())},t.onerror=()=>{}}scheduleReconnect(){this.retry++;let t=Math.min(8e3,800*this.retry);setTimeout(()=>this.connect(),t)}setStatus(t){this.status=t,this.onStatus(t,this.ping)}send(t){this.ws&&this.ws.readyState===1&&this.ws.send(JSON.stringify(t))}};si();ho();Ir();var Dr=class{constructor(t){this.renderer=t,this.scene=new Mi,this.scene.background=new Pt("#8fd3ff"),this.scene.fog=new Ds("#a8ddff",30,90),this.camera=new Le(40,innerWidth/innerHeight,.1,300),this.t=0,this.rotY=.35,this.rotTarget=.35,this.dragging=!1,this.idleT=0,this.emote=null,this._build(),this.mates=[],this.focus=!1,this.camCur=null,this.setOutfit(null)}_build(){let t=this.scene;t.add(new Si("#e8f6ff","#6aa84f",1.2));let e=new wi("#fff1d6",1.6);e.position.set(6,12,8),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),Object.assign(e.shadow.camera,{left:-8,right:8,top:8,bottom:-8}),t.add(e);let n=new wt(new Ns(200,48),ee("#45b9ea"));n.rotation.x=-Math.PI/2,n.position.y=-1.4,t.add(n);let s=new wt(new Te(7,5.5,2.2,28),ee("#e9d29a"));s.position.y=-1,s.receiveShadow=!0,t.add(s);let r=new wt(new Te(6.6,6.8,.4,28),ee("#8fd16a"));r.position.y=0,r.receiveShadow=!0,t.add(r);let a=new wt(new Te(1.25,1.4,.35,24),ee("#ffffff"));a.position.y=.35,a.receiveShadow=!0,a.castShadow=!0,t.add(a);let o=new wt(new Os(1.3,.06,8,32),ee("#ffd23f"));o.rotation.x=Math.PI/2,o.position.y=.5,t.add(o),this.pedestal=a;let l=(m,p,v=1)=>{let x=new wt(new Te(.15*v,.22*v,1*v,7),ee("#8b5a2b"));x.position.set(m,.6*v,p),x.castShadow=!0,t.add(x);for(let S=0;S<2;S++){let C=new wt(new ii((1.1-S*.3)*v,1.5*v,8),ee(S?"#3e9b4f":"#358a45"));C.position.set(m,(1.5+S*.8)*v,p),C.castShadow=!0,t.add(C)}};l(-4.2,-2.4,1.3),l(-5,.8,1),l(4.6,-2.8,1.4),l(3.6,-4.4,1),l(-2.6,-4.6,1.1);let c=new wt(new ks(.7,0),new Ge({color:"#a8a8a8",flatShading:!0}));c.position.set(3.8,.4,1.6),c.castShadow=!0,t.add(c);let h=new wt(new de(1,1,1),ee("#c98a48"));h.position.set(-3.2,.7,2.2),h.rotation.y=.4,h.castShadow=!0,t.add(h);let u=new ie,d=new wt(new de(3,2.2,2.4),ee("#ffd6a5"));d.position.y=1.3,u.add(d);let f=new wt(new ii(2.4,1.4,4),ee("#d9534f"));f.position.y=3.1,f.rotation.y=Math.PI/4,u.add(f);let g=new wt(new de(.7,1.2,.05),ee("#8b5a2b"));g.position.set(0,.8,1.22),u.add(g),u.position.set(1.2,0,-4.5),u.rotation.y=-.3,u.traverse(m=>{m.isMesh&&(m.castShadow=!0)}),t.add(u),this.clouds=[];for(let m=0;m<9;m++){let p=new ie;for(let v=0;v<4;v++){let x=new wt(new $e(1+Math.random(),10,8),ee("#ffffff"));x.position.set(v*1.3,Math.random()*.6,Math.random()),p.add(x)}p.position.set(-40+Math.random()*80,10+Math.random()*8,-30-Math.random()*30),p.userData.speed=.3+Math.random()*.5,t.add(p),this.clouds.push(p)}let y=new wt(new $e(1.2,16,12),ee("#ff5a5f"));y.position.set(-9,9,-14),t.add(y),this.balloon=y}setOutfit(t){let e=JSON.stringify(t);this.char&&this._key===e||(this._key=e,this.char?this.char.setOutfit(t):(this.char=new Gn(t),this.char.setWeapon("ar"),this.char.root.position.y=.52,this.scene.add(this.char.root)),this.char.root.traverse(n=>{n.isMesh&&!n.material.transparent&&(n.castShadow=!0)}),this.char.pickup(),this.emote={t:0,kind:Math.random()<.5?"wave":"spin"})}setFocus(t){this.focus=t;for(let e of this.mates)e.root.visible=!t}setMates(t){for(let n of this.mates)this.scene.remove(n.root);this.mates=[];let e=[[-2.2,.6],[2.2,.6],[-3.6,1.6]];t.slice(0,3).forEach((n,s)=>{let r=new Gn(n);r.setWeapon(["smg","shotgun","sniper"][s]),r.root.position.set(e[s][0],.2,e[s][1]),r.root.rotation.y=e[s][0]<0?.35:-.35,r.root.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),this.scene.add(r.root),this.mates.push(r)})}drag(t){this.rotTarget+=t*.012,this.idleT=0}update(t){this.t+=t,this.idleT+=t,!this.dragging&&this.idleT>4&&(this.rotTarget+=t*.25),this.rotY+=(this.rotTarget-this.rotY)*Math.min(1,t*8);let e=this.char;if(e.root.rotation.y=this.rotY,this.emote?(this.emote.t+=t,this.emote.t>2.2&&(this.emote=null)):Math.random()<t*.12&&(this.emote={t:0,kind:Math.random()<.5?"wave":"look"}),e.victory=!1,e.update(t,{speed:0}),this.emote&&this.emote.kind==="wave"){let a=Math.sin(Math.min(1,this.emote.t/.3)*Math.PI/2)*(this.emote.t>1.8?Math.max(0,1-(this.emote.t-1.8)/.4):1);e.armL.rotation.set(-.2+a*2.9,0,-.3-Math.sin(this.t*12)*.35*a),e.gun&&(e.gun.visible=!0)}else if(this.emote&&this.emote.kind==="look")e.head.rotation.y=Math.sin(this.emote.t*2.5)*.6;else if(this.emote&&this.emote.kind==="spin"){let a=Math.min(1,this.emote.t/.8);e.root.rotation.y=this.rotY+(1-Math.cos(a*Math.PI))*Math.PI,e.root.position.y=.52+Math.sin(a*Math.PI)*.25,a>=1&&(e.root.position.y=.52)}for(let a of this.mates)a.update(t,{speed:0});for(let a of this.clouds)a.position.x+=a.userData.speed*t,a.position.x>45&&(a.position.x=-45);this.balloon.position.y=9+Math.sin(this.t*.8)*.5;let n=Math.sin(this.t*.25)*.3,s=this.focus==="center"?{p:[0,1.75,6.2],l:[0,1.15,0]}:this.focus==="left"?{p:[1.9,1.8,5.6],l:[1.9,1.25,0]}:{p:[n,2.7,8.8],l:[0,1.35,0]};this.camCur||(this.camCur={p:[...s.p],l:[...s.l]});let r=Math.min(1,t*5);for(let a=0;a<3;a++)this.camCur.p[a]+=(s.p[a]-this.camCur.p[a])*r,this.camCur.l[a]+=(s.l[a]-this.camCur.l[a])*r;this.camera.position.set(...this.camCur.p),this.camera.lookAt(...this.camCur.l)}resize(){this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix()}render(){this.renderer.render(this.scene,this.camera)}};po();qs();yo();var Nr={fire:'<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="13" fill="none" stroke="currentColor" stroke-width="4"/><circle cx="24" cy="24" r="4" fill="currentColor"/><path d="M24 4v9M24 35v9M4 24h9M35 24h9" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>',aim:'<svg viewBox="0 0 48 48"><path d="M8 17V8h9M31 8h9v9M40 31v9h-9M17 40H8v-9" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="24" cy="24" r="4" fill="currentColor"/></svg>',reload:'<svg viewBox="0 0 48 48"><path d="M38 24a14 14 0 1 1-5-10.7" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/><path d="M35 5v10H25" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',jump:'<svg viewBox="0 0 48 48"><path d="M12 28l12-12 12 12M12 38l12-12 12 12" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',sprint:'<svg viewBox="0 0 48 48"><path d="M10 14l12 10-12 10M24 14l12 10-12 10" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',pause:'<svg viewBox="0 0 48 48"><rect x="13" y="11" width="7" height="26" rx="2" fill="currentColor"/><rect x="28" y="11" width="7" height="26" rx="2" fill="currentColor"/></svg>',map:'<svg viewBox="0 0 48 48"><path d="M6 12l12-5 12 5 12-5v29l-12 5-12-5-12 5z M18 7v29 M30 12v29" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"/></svg>',next:'<svg viewBox="0 0 48 48"><path d="M16 10l14 14-14 14" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>'},Vc=[{id:"fire",corner:"br",x:100,y:105,size:92,label:"Disparar"},{id:"aim",corner:"br",x:196,y:186,size:62,label:"Apuntar"},{id:"reload",corner:"br",x:104,y:218,size:54,label:"Recargar"},{id:"jump",corner:"br",x:38,y:192,size:54,label:"Saltar"},{id:"fireL",corner:"bl",x:58,y:236,size:58,label:"Disparar (izquierda)"},{id:"sprint",corner:"bl",x:214,y:222,size:50,label:"Correr"},{id:"pickup",corner:"br",x:300,y:262,size:56,label:"Recoger",pill:!0}],xo=58,Xs=class{constructor(t){this.game=t,this.mx=0,this.my=0,this.fire=!1,this.fireLatch=!1,this.ads=!1,this.jump=!1,this.sprintLock=!1,this.joySprint=!1,this.showMap=!1,this.ptr=new Map,this.root=document.createElement("div"),this.root.id="touchUI",this.root.innerHTML=this._html(),document.body.appendChild(this.root),document.body.classList.add("inMatch"),this.$=e=>this.root.querySelector("#t_"+e),this.applyLayout(),this._bind()}_html(){let t=e=>`<button id="t_${e.id}" class="tBtn ${e.pill?"pill":""}" aria-label="${cn(e.label)}">${e.pill?'<span class="tPickIc">\u270B</span><span id="t_pickTxt"></span>':Nr[e.id==="fireL"?"fire":e.id]}</button>`;return`<div id="t_joyZone" class="tZone"></div><div id="t_lookZone" class="tZone"></div>
      <div id="t_joy" class="tJoy"><div class="tKnob"></div></div>
      ${Vc.map(t).join("")}
      <button id="t_pause" class="tBtn small" aria-label="${cn("Pausa")}">${Nr.pause}</button>
      <button id="t_map" class="tBtn small" aria-label="${cn("Informaci\xF3n de partida")}">${Nr.map}</button>
      <button id="t_next" class="tBtn small" aria-label="${cn("siguiente")}">${Nr.next}</button>`}applyLayout(){let t=Q.touchBtnScale||1;this.root.style.setProperty("--tOp",String(Q.touchOpacity??.75)),this.root.style.setProperty("--tScale",String(t));let e=Q.touchPos||{};for(let n of Vc){let s=this.$(n.id);if(!s)continue;let r=n.size*t;s.style.width=n.pill?"auto":r+"px",s.style.height=r+"px",s.style.minWidth=r+"px",s.style.left=s.style.right=s.style.top=s.style.bottom="";let a=e[n.id];if(a)s.style.left=a.x*100+"%",s.style.top=a.y*100+"%",s.style.transform="translate(-50%,-50%)";else{let o=l=>`calc(${l*t-r/2}px + var(--safe${n.corner[1]==="l"?"L":"R"}, 0px))`;n.corner[1]==="r"?s.style.right=o(n.x):s.style.left=o(n.x),s.style.bottom=n.y*t-r/2+"px",s.style.transform=""}}this.$("fireL").classList.toggle("off",!Q.touchLeftFire),this._restJoy()}_restJoy(){let t=Q.touchBtnScale||1,e=this.$("joy");e.style.width=e.style.height=xo*2*t+"px",e.style.left=`calc(${(130-xo)*t}px + var(--safeL, 0px))`,e.style.top="",e.style.bottom=(130-xo)*t+"px",e.classList.remove("active"),e.firstElementChild.style.transform=""}_bind(){let t={passive:!1};this.h={down:e=>this._down(e),move:e=>this._move(e),up:e=>this._up(e),gesture:e=>e.preventDefault()},this.root.addEventListener("pointerdown",this.h.down,t),window.addEventListener("pointermove",this.h.move,t),window.addEventListener("pointerup",this.h.up,t),window.addEventListener("pointercancel",this.h.up,t),document.addEventListener("gesturestart",this.h.gesture,t),this.hudTap=e=>{let n=this.game;if(n.paused||n.isDead())return;let s=e.currentTarget.id;s==="slot0"?n.action("slot",0):s==="slot1"?n.action("slot",1):s==="itemBand"?n.action("heal","bandage"):s==="itemKit"?n.action("heal","medkit"):s==="minimap"&&this.toggleMap(),e.preventDefault()},this.hudEls=["slot0","slot1","itemBand","itemKit","minimap"].map(e=>document.getElementById(e)).filter(Boolean);for(let e of this.hudEls)e.addEventListener("pointerdown",this.hudTap)}toggleMap(){this.showMap=!this.showMap,this.$("map").classList.toggle("on",this.showMap)}_down(t){if(t.pointerType==="mouse"&&t.button!==0)return;t.preventDefault();let e=this.game,n=t.target.closest(".tBtn, .tZone");if(!n)return;let s=n.id.slice(2);try{n.setPointerCapture?.(t.pointerId)}catch{}if(s==="pause"){e.togglePause(!0);return}if(s==="map"){this.toggleMap();return}if(s==="next"){e.cycleSpectate();return}if(e.paused)return;if(e.isDead()){s==="lookZone"&&e.cycleSpectate();return}let r={kind:s,x:t.clientX,y:t.clientY,x0:t.clientX,y0:t.clientY,t0:performance.now(),el:n};switch(this.ptr.set(t.pointerId,r),n.classList.add("pressed"),s){case"joyZone":{let a=Q.touchBtnScale||1,o=xo*a,l=this.$("joy");l.style.left=t.clientX-o+"px",l.style.bottom=innerHeight-t.clientY-o+"px",l.classList.add("active"),r.cx=t.clientX,r.cy=t.clientY,r.r=o,this._joy(r);break}case"fire":case"fireL":this.fire=!0,this.fireLatch=!0;break;case"aim":Q.touchAdsToggle!==!1?(this.ads=!this.ads,n.classList.toggle("on",this.ads)):this.ads=!0;break;case"reload":e.action("reload");break;case"jump":this.jump=!0;break;case"sprint":this.sprintLock=!this.sprintLock,n.classList.toggle("on",this.sprintLock);break;case"pickup":e.action("pickup");break}}_move(t){let e=this.ptr.get(t.pointerId);if(!e)return;t.preventDefault();let n=t.clientX-e.x,s=t.clientY-e.y;if(e.x=t.clientX,e.y=t.clientY,e.kind==="joyZone"){this._joy(e);return}(e.kind==="lookZone"||e.kind==="fire"||e.kind==="fireL"||e.kind==="aim")&&this.look(n,s)}look(t,e){let n=this.game;if(n.paused)return;let s=.0052*(Q.touchSens||1)*(this.ads?.6:1);n.yawT+=t*s,n.pitchT=Math.max(n.pitchMin,Math.min(n.pitchMax,n.pitchT+e*s*.8*(Q.invertY?-1:1)))}_joy(t){let e=t.x-t.cx,n=t.y-t.cy,s=Math.hypot(e,n),r=t.r*.12,a=s>t.r?t.r/s:1;if(this.$("joy").firstElementChild.style.transform=`translate(${e*a}px, ${n*a}px)`,s<r){this.mx=0,this.my=0,this.joySprint=!1;return}let o=Math.min(1,(s-r)/(t.r-r));this.mx=e/s*o,this.my=-n/s*o,this.joySprint=Q.touchAutoSprint!==!1&&s>t.r*1.05&&this.my>.3,this.$("joy").classList.toggle("run",this.joySprint||this.sprintLock)}_up(t){let e=this.ptr.get(t.pointerId);if(e)switch(this.ptr.delete(t.pointerId),e.el.classList.remove("pressed"),e.kind){case"joyZone":this.mx=this.my=0,this.joySprint=!1,this._restJoy(),this.$("joy").classList.remove("run");break;case"fire":case"fireL":[...this.ptr.values()].some(n=>n.kind==="fire"||n.kind==="fireL")||(this.fire=!1);break;case"aim":Q.touchAdsToggle===!1&&(this.ads=!1);break;case"jump":this.jump=!1;break}}get sprint(){return this.sprintLock||this.joySprint}update(t){let e=this.game,n=e.isDead();this.root.classList.toggle("dead",n);let s=this.$("pickup"),r=t?t.replace(/<small>.*?<\/small>/,"").replace(/<[^>]+>/g,"").replace(/^\s*\S+\s+/,""):"";s.classList.toggle("show",!!t&&!n),this._pick!==r&&(this._pick=r,this.$("pickTxt").textContent=cn(r)),!e.me?.alive&&this.ads&&(this.ads=!1,this.$("aim").classList.remove("on"))}reset(){this.mx=this.my=0,this.fire=!1,this.fireLatch=!1,this.jump=!1,this.joySprint=!1;for(let t of this.ptr.values())t.el.classList.remove("pressed");this.ptr.clear(),this._restJoy()}dispose(){this.root.removeEventListener("pointerdown",this.h.down),window.removeEventListener("pointermove",this.h.move),window.removeEventListener("pointerup",this.h.up),window.removeEventListener("pointercancel",this.h.up),document.removeEventListener("gesturestart",this.h.gesture);for(let t of this.hudEls)t.removeEventListener("pointerdown",this.hudTap);this.root.remove(),document.body.classList.remove("inMatch")}};function Xd(i){let t=document.createElement("div");t.id="touchEditor",t.innerHTML=`<div id="touchUI" class="editing">${Vc.map(o=>`<button id="t_${o.id}" class="tBtn ${o.pill?"pill show":""}" data-id="${o.id}">${o.pill?'<span class="tPickIc">\u270B</span><span>'+cn("Recoger")+"</span>":Nr[o.id==="fireL"?"fire":o.id]}</button>`).join("")}
    <div class="tJoy" id="t_joy"><div class="tKnob"></div></div></div>
    <div class="teBar"><span>${cn("Arrastra los botones a donde te resulte m\xE1s c\xF3modo.")}</span>
    <button class="btn small alt" id="teReset">${cn("Restablecer")}</button><button class="btn small" id="teDone">${cn("Guardar")}</button></div>`,document.body.appendChild(t);let e={root:t.querySelector("#touchUI"),$:o=>t.querySelector("#t_"+o)},n=()=>Xs.prototype.applyLayout.call(Object.assign(e,{_restJoy:Xs.prototype._restJoy}));n();let s={...Q.touchPos||{}},r=null;t.addEventListener("pointerdown",o=>{let l=o.target.closest(".tBtn");if(l){o.preventDefault(),r={id:l.dataset.id,el:l,pid:o.pointerId},l.classList.add("pressed");try{l.setPointerCapture(o.pointerId)}catch{}}}),t.addEventListener("pointermove",o=>{if(!r||o.pointerId!==r.pid)return;let l=Math.max(.04,Math.min(.96,o.clientX/innerWidth)),c=Math.max(.06,Math.min(.96,o.clientY/innerHeight));s[r.id]={x:l,y:c},r.el.style.left=l*100+"%",r.el.style.top=c*100+"%",r.el.style.right=r.el.style.bottom="",r.el.style.transform="translate(-50%,-50%)"});let a=()=>{r&&r.el.classList.remove("pressed"),r=null};t.addEventListener("pointerup",a),t.addEventListener("pointercancel",a),t.querySelector("#teReset").onclick=()=>{for(let o of Object.keys(s))delete s[o];Q.touchPos={},n()},t.querySelector("#teDone").onclick=()=>{Q.touchPos=s,ln(),t.remove(),i&&i()}}si();function kr(i){let t=i>>>0,e=()=>{t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return{next:e,range:(n,s)=>n+(s-n)*e(),int:(n,s)=>Math.floor(n+(s-n+1)*e()),pick:n=>n[Math.floor(e()*n.length)],chance:n=>e()<n}}function $d(i){let t=Math.ceil((i.size+8)/8)+1,e=4,n=new Array(t*t);for(let a=0;a<n.length;a++)n[a]=[];let s=(a,o,l,c,h)=>{let u=Math.max(0,Math.floor((o+e)/8)),d=Math.max(0,Math.floor((l+e)/8)),f=Math.min(t-1,Math.floor((c+e)/8)),g=Math.min(t-1,Math.floor((h+e)/8));for(let y=d;y<=g;y++)for(let m=u;m<=f;m++)n[y*t+m].push(a)},r=0;for(let a of i.walls){let o={t:"box",x:a.x,y:a.y,w:a.w,h:a.h,id:r++,ref:a};s(o,a.x,a.y,a.x+a.w,a.y+a.h)}for(let a of i.circles){let o={t:"circle",x:a.x,y:a.y,r:a.r,id:r++,ref:a};s(o,a.x-a.r,a.y-a.r,a.x+a.r,a.y+a.r)}for(let a of i.crates){let o={t:"box",x:a.x,y:a.y,w:a.w,h:a.h,id:r++,ref:a,crate:a};s(o,a.x,a.y,a.x+a.w,a.y+a.h)}i._col={grid:n,n:t,off:e,stamp:0,marks:new Int32Array(r+1)}}function Yd(i,t,e,n,s,r=[]){let a=i._col;r.length=0,a.stamp++;let o=Math.max(0,Math.floor((t+a.off)/8)),l=Math.max(0,Math.floor((e+a.off)/8)),c=Math.min(a.n-1,Math.floor((n+a.off)/8)),h=Math.min(a.n-1,Math.floor((s+a.off)/8));for(let u=l;u<=h;u++)for(let d=o;d<=c;d++)for(let f of a.grid[u*a.n+d])a.marks[f.id]!==a.stamp&&(a.marks[f.id]=a.stamp,!(f.crate&&!f.crate.alive)&&r.push(f));return r}var Zd=[];function A_(i,t,e){let n=!1;for(let s=0;s<3;s++){let r=Yd(i,t.x-e,t.y-e,t.x+e,t.y+e,Zd),a=!1;for(let o of r)if(o.t==="box"){let l=Math.max(o.x,Math.min(t.x,o.x+o.w)),c=Math.max(o.y,Math.min(t.y,o.y+o.h)),h=t.x-l,u=t.y-c,d=h*h+u*u;if(d<e*e){if(d>1e-9){let f=Math.sqrt(d);t.x=l+h/f*e,t.y=c+u/f*e}else{let f=t.x-o.x,g=o.x+o.w-t.x,y=t.y-o.y,m=o.y+o.h-t.y,p=Math.min(f,g,y,m);p===f?t.x=o.x-e:p===g?t.x=o.x+o.w+e:p===y?t.y=o.y-e:t.y=o.y+o.h+e}n=a=!0}}else{let l=t.x-o.x,c=t.y-o.y,h=o.r+e,u=l*l+c*c;if(u<h*h){let d=Math.sqrt(u)||1e-4;t.x=o.x+l/d*h,t.y=o.y+c/d*h,n=a=!0}}if(!a)break}return n}function Jd(i,t,e,n,s){let r=Math.hypot(e,n),a=Math.max(1,Math.ceil(r/(s*.8))),o=!1;for(let l=0;l<a;l++)t.x+=e/a,t.y+=n/a,A_(i,t,s)&&(o=!0);return o}function jd(i,t,e,n){let s=Yd(i,t-n,e-n,t+n,e+n,Zd);for(let r of s)if(r.t==="box"){let a=Math.max(r.x,Math.min(t,r.x+r.w)),o=Math.max(r.y,Math.min(e,r.y+r.h));if((t-a)**2+(e-o)**2<n*n)return!0}else if((t-r.x)**2+(e-r.y)**2<(r.r+n)**2)return!0;return!1}function C_(i,t,e,n,s){let r=0,a=1;if(Math.abs(e)<1e-9){if(i<s.x||i>s.x+s.w)return 1/0}else{let o=(s.x-i)/e,l=(s.x+s.w-i)/e;if(o>l&&([o,l]=[l,o]),r=Math.max(r,o),a=Math.min(a,l),r>a)return 1/0}if(Math.abs(n)<1e-9){if(t<s.y||t>s.y+s.h)return 1/0}else{let o=(s.y-t)/n,l=(s.y+s.h-t)/n;if(o>l&&([o,l]=[l,o]),r=Math.max(r,o),a=Math.min(a,l),r>a)return 1/0}return r}function R_(i,t,e,n,s,r,a){let o=i-s,l=t-r,c=e*e+n*n;if(c<1e-12)return 1/0;let h=2*(o*e+l*n),u=o*o+l*l-a*a;if(u<=0)return 0;let d=h*h-4*c*u;if(d<0)return 1/0;let f=Math.sqrt(d),g=(-h-f)/(2*c);return g>=0&&g<=1?g:1/0}function $s(i,t,e,n,s,r=!1){let a=i._col,o=n-t,l=s-e;a.stamp++;let c=1/0,h=null,u=Math.floor((t+a.off)/8),d=Math.floor((e+a.off)/8),f=Math.floor((n+a.off)/8),g=Math.floor((s+a.off)/8),y=o>0?1:-1,m=l>0?1:-1,p=o!==0?Math.abs(8/o):1/0,v=l!==0?Math.abs(8/l):1/0,x=t+a.off,S=e+a.off,C=o!==0?(o>0?(u+1)*8-x:x-u*8)/Math.abs(o):1/0,T=l!==0?(l>0?(d+1)*8-S:S-d*8)/Math.abs(l):1/0,b=0;for(;b++<400;){if(u>=0&&d>=0&&u<a.n&&d<a.n)for(let _ of a.grid[d*a.n+u]){if(a.marks[_.id]===a.stamp||(a.marks[_.id]=a.stamp,_.crate&&(!_.crate.alive||r)))continue;let M=_.t==="box"?C_(t,e,o,l,_):R_(t,e,o,l,_.x,_.y,_.r);M<c&&(c=M,h=_)}let R=Math.min(C,T);if(c<=R||R>1||u===f&&d===g)break;C<T?(C+=p,u+=y):(T+=v,d+=m)}return c<=1?{t:c,obj:h}:null}Ki();var P_=20261124,L_=["#f6e7c8","#ffd6a5","#cde7f0","#f7c6c7","#e2f0cb","#fff1b5","#d9d2f5"],I_=["#d9534f","#3f7fbf","#e07b39","#6b8e23","#8e5b9e","#c0392b","#2c8c8c"];function of(i=P_){let t=kr(i),e=Kd,n={size:e,seed:i,walls:[],circles:[],buildings:[],roads:[],crates:[],lootSpots:[],bushes:[],areas:[],pois:[],props:[],fences:[]},s=[],r=(b,R,_,M,D=0)=>{for(let k of s)if(b-D<k.x+k.w&&b+_+D>k.x&&R-D<k.y+k.h&&R+M+D>k.y)return!0;return!1},a=(b,R,_,M)=>s.push({x:b,y:R,w:_,h:M}),o=(b,R,_=1)=>n.roads.some(M=>b>M.x-_&&b<M.x+M.w+_&&R>M.y-_&&R<M.y+M.h+_),l=(b,R,_,M)=>{n.roads.push({x:b,y:R,w:_,h:M})};l(8,156,e-16,8),l(156,8,8,e-16),l(20,74,126,6),l(20,110,126,6),l(74,20,6,136),l(110,20,6,136),l(164,236,140,6),l(232,164,6,140),l(100,164,6,80);for(let b of n.roads)a(b.x,b.y,b.w,b.h);n.areas.push({x:16,y:16,w:134,h:134,color:"#cfe3a8",name:"town"}),n.areas.push({x:186,y:186,w:122,h:122,color:"#b9bec4",name:"industrial"}),n.areas.push({x:112,y:214,w:74,h:92,color:"#c9c2b0",name:"warehouses"}),n.areas.push({x:16,y:186,w:82,h:120,color:"#d9c48f",name:"farm"}),n.areas.push({x:186,y:14,w:122,h:136,color:"#7fbf6a",name:"forest"}),n.areas.push({x:140,y:140,w:40,h:40,color:"#d0d0c8",name:"station"});function c(b,R,_,M,D={}){let k=D.t??.5,K=D.height??3.4,I=D.doors??["s"],F=D.doorWidth??2.6,$=D.wallColor??t.pick(L_),J=D.roofColor??t.pick(I_),Z={x:b,y:R,w:_,h:M,height:K,wallColor:$,roofColor:J,kind:D.kind??"house",roof:D.roof??"gable",doors:I,windows:D.windows??!0};n.buildings.push(Z);let Y=(ct,q,j,lt)=>n.walls.push({x:ct,y:q,w:j,h:lt,height:K,color:$,kind:"wall",building:n.buildings.length-1}),tt=ct=>{let q=I.includes(ct);if(ct==="n"||ct==="s"){let j=ct==="n"?R:R+M-k;if(!q)Y(b,j,_,k);else{let lt=b+_/2;Y(b,j,lt-F/2-b,k),Y(lt+F/2,j,b+_-(lt+F/2),k)}}else{let j=ct==="w"?b:b+_-k;if(!q)Y(j,R+k,k,M-2*k);else{let lt=R+M/2;Y(j,R+k,k,lt-F/2-(R+k)),Y(j,lt+F/2,k,R+M-k-(lt+F/2))}}};["n","s","w","e"].forEach(tt),a(b-1,R-1,_+2,M+2);let st=D.loot??Math.max(1,Math.floor(_*M/60));for(let ct=0;ct<st;ct++)n.lootSpots.push({x:t.range(b+1.6,b+_-1.6),y:t.range(R+1.6,R+M-1.6),tier:D.tier??1});return Z}n.pois.push({name:"Villa Colores",x:80,y:80});let h=[24,82,118],u=[24,82,118],d=[[24,24],[44,24],[82,24],[118,24],[24,44],[44,44],[82,44],[118,44],[24,82],[44,82],[118,82],[24,118],[44,118],[82,118],[118,118],[82,82]];for(let[b,R]of d){if(b===82&&R===82)continue;let _=t.int(12,15),M=t.int(10,13),D=[t.pick(["s","n"]),t.pick(["e","w"])];r(b,R,_,M,.5)||c(b,R,_,M,{doors:D,loot:2})}n.circles.push({x:92,y:92,r:2.6,height:1.2,kind:"fountain"}),a(88,88,8,8),c(82,98,22,10,{doors:["n","s"],height:5.2,kind:"hall",wallColor:"#f3e3c3",roofColor:"#b03a2e",loot:3,tier:2}),n.pois.push({name:"Bosque Pinar",x:246,y:80});let f=[[205,40],[262,30],[240,110],[282,92]];for(let[b,R]of f)c(b,R,10,8,{doors:[t.pick(["s","w","e"])],wallColor:"#a9744f",roofColor:"#5b3a24",kind:"cabin",loot:2});c(222,72,7,7,{doors:["s"],height:7.5,wallColor:"#8a6240",roofColor:"#4a2f1d",kind:"tower",loot:2,tier:3,roof:"flat"}),n.pois.push({name:"Pol\xEDgono \xD3xido",x:256,y:270}),c(246,250,34,22,{doors:["n","w","s"],height:7,wallColor:"#9aa5ad",roofColor:"#56616b",kind:"factory",roof:"flat",loot:5,tier:2,doorWidth:3.4});let g=["#d64545","#2f7ed8","#e6a23c","#3aa76d","#8e44ad","#16a085"];for(let b=0;b<16;b++)for(let R=0;R<30;R++){let _=t.chance(.5),M=_?2.6:6.5,D=_?6.5:2.6,k=t.range(192,300-M),K=t.range(192,300-D);if(r(k,K,M,D,3)||o(k+M/2,K+D/2,4))continue;let I=t.chance(.35);n.walls.push({x:k,y:K,w:M,h:D,height:I?5.2:2.6,color:t.pick(g),kind:"container"}),a(k,K,M,D),t.chance(.5)&&n.lootSpots.push({x:k+M/2+(_?2.2:0),y:K+D/2+(_?0:2.2),tier:2});break}let y=[[205,215],[215,290],[290,215]];for(let[b,R]of y)n.circles.push({x:b,y:R,r:4,height:7,kind:"tank"}),a(b-4.5,R-4.5,9,9);n.pois.push({name:"Los Almacenes",x:148,y:262}),c(116,220,28,16,{doors:["e","w","n"],height:6,wallColor:"#c8b28a",roofColor:"#7d6a4e",kind:"warehouse",roof:"flat",loot:5,tier:2,doorWidth:3.6}),c(152,248,28,16,{doors:["e","w","s"],height:6,wallColor:"#b7c4c9",roofColor:"#5f7680",kind:"warehouse",roof:"flat",loot:5,tier:2,doorWidth:3.6}),c(118,278,24,14,{doors:["n","e"],height:6,wallColor:"#d8c3a5",roofColor:"#8c6f4d",kind:"warehouse",roof:"flat",loot:4,tier:2,doorWidth:3.6});for(let b=0;b<10;b++)for(let R=0;R<30;R++){let _=t.range(114,182),M=t.range(214,300);if(!(r(_,M,2.4,2.4,2)||o(_,M,2))){n.walls.push({x:_,y:M,w:2.4,h:2.4,height:1.3,color:"#b98b52",kind:"pallet"}),a(_,M,2.4,2.4);break}}n.pois.push({name:"Granja Girasol",x:56,y:246}),c(28,196,18,14,{doors:["s","e"],height:5.5,wallColor:"#c0392b",roofColor:"#7b241c",kind:"barn",loot:3,tier:1,doorWidth:3.2}),c(64,266,9,8,{doors:["n"],wallColor:"#f0e0c0",roofColor:"#6d4c41",kind:"shed",loot:1}),c(30,278,9,8,{doors:["e"],wallColor:"#e8d4b0",roofColor:"#6d4c41",kind:"shed",loot:1}),c(70,206,12,10,{doors:["w"],loot:2});let m=(b,R,_,M,D=[])=>{let k=R===M,K=k?_-b:M-R,I=0,F=[],$=D.slice().sort((J,Z)=>J-Z);for(let J of $)F.push([I,J-1.6]),I=J+1.6;F.push([I,K]);for(let[J,Z]of F){if(Z-J<.5)continue;let Y=k?{x:b+J,y:R-.15,w:Z-J,h:.3}:{x:b-.15,y:R+J,w:.3,h:Z-J};n.walls.push({...Y,height:1.1,color:"#e9dcc0",kind:"fence"})}};m(22,226,92,226,[20,52]),m(22,262,58,262,[18]),m(22,226,22,262,[18]),m(92,226,92,300,[14,50]);for(let b=0;b<9;b++){let R=t.range(28,88),_=t.range(230,258);r(R-1.4,_-1.4,2.8,2.8,1.5)||(n.circles.push({x:R,y:_,r:1.3,height:1.6,kind:"hay"}),a(R-1.4,_-1.4,2.8,2.8))}n.pois.push({name:"Gasolinera Cruce",x:172,y:172}),c(168,168,12,9,{doors:["n","w"],wallColor:"#ffffff",roofColor:"#e74c3c",kind:"shop",roof:"flat",loot:3,tier:2});for(let[b,R]of[[146,168],[146,176],[156,168]]);n.props.push({kind:"canopy",x:166,y:142,w:14,h:10});for(let[b,R]of[[167,143],[179,143],[167,151],[179,151]])n.circles.push({x:b,y:R,r:.35,height:4,kind:"pillar"});a(166,142,14,10),n.walls.push({x:171,y:145.5,w:1.2,h:2,height:1.6,color:"#e74c3c",kind:"pump"}),n.walls.push({x:175,y:145.5,w:1.2,h:2,height:1.6,color:"#e74c3c",kind:"pump"}),n.pois.push({name:"Colina Molino",x:206,y:186});let p=[[196,168,10,8],[130,190,9,8],[176,120,10,8],[42,166,9,8],[262,172,10,8],[172,200,8,8],[120,168,8,7]];for(let[b,R,_,M]of p)r(b,R,_,M,1)||c(b,R,_,M,{doors:[t.pick(["n","s","e","w"])],loot:2,kind:"hut"});let v=[[140,60],[60,150],[290,150],[150,292],[210,140],[130,130]];for(let[b,R]of v)r(b-3,R-3,10,10,1)||(n.walls.push({x:b,y:R,w:6,h:.8,height:1.8,color:"#a3a3a3",kind:"ruin"}),n.walls.push({x:b,y:R+.8,w:.8,h:4,height:1.8,color:"#a3a3a3",kind:"ruin"}),a(b-.5,R-.5,7,6),n.lootSpots.push({x:b+3,y:R+3,tier:1}));let x=0,S=(b,R)=>r(b-.2,R-.2,2,2,.8)||o(b+.8,R+.8,.5)?!1:(n.crates.push({id:x++,x:b,y:R,w:1.6,h:1.6,hp:70,alive:!0}),a(b,R,1.6,1.6),!0);for(let b of n.buildings)if(t.chance(.55))for(let R=0;R<10;R++){let _=t.int(0,3),M=_===0?b.x-2.6:_===1?b.x+b.w+1:t.range(b.x,b.x+b.w-1.6),D=_===2?b.y-2.6:_===3?b.y+b.h+1:t.range(b.y,b.y+b.h-1.6);if(S(M,D))break}for(let b=0;b<40;b++)for(let R=0;R<20&&!S(t.range(14,e-16),t.range(14,e-16));R++);let C=(b,R,_)=>{if(r(b-1,R-1,2,2,.8)||o(b,R,2))return!1;let M=t.range(.85,1.35);return n.circles.push({x:b,y:R,r:.55*M,height:6,kind:_,scale:M,crown:2.2*M}),a(b-.8,R-.8,1.6,1.6),!0};for(let b=0;b<230;b++)C(t.range(188,306),t.range(16,148),"pine");for(let b=0;b<160;b++)C(t.range(10,e-10),t.range(10,e-10),t.chance(.5)?"tree":"pine");for(let b=0;b<70;b++){let R=t.range(12,e-12),_=t.range(12,e-12),M=t.range(.9,2.1);r(R-M,_-M,2*M,2*M,1.2)||o(R,_,M+1)||(n.circles.push({x:R,y:_,r:M,height:M*1.2,kind:"rock"}),a(R-M,_-M,2*M,2*M))}for(let b=0;b<220;b++){let R=t.range(10,e-10),_=t.range(10,e-10);r(R-.8,_-.8,1.6,1.6,.3)||o(R,_,1)||n.bushes.push({x:R,y:_,s:t.range(.7,1.4)})}for(let b=0;b<45;b++)for(let R=0;R<20;R++){let _=t.range(14,e-14),M=t.range(14,e-14);if(!r(_-.6,M-.6,1.2,1.2,.5)){n.lootSpots.push({x:_,y:M,tier:0});break}}let T=3;return n.walls.push({x:-T,y:-T,w:e+2*T,h:T,height:3,kind:"boundary"}),n.walls.push({x:-T,y:e,w:e+2*T,h:T,height:3,kind:"boundary"}),n.walls.push({x:-T,y:0,w:T,h:e,height:3,kind:"boundary"}),n.walls.push({x:e,y:0,w:T,h:e,height:3,kind:"boundary"}),$d(n),n.lootSpots=n.lootSpots.filter(b=>!jd(n,b.x,b.y,.5)),n}function lf(i,t,e){for(let n=0;n<i.buildings.length;n++){let s=i.buildings[n];if(t>s.x&&t<s.x+s.w&&e>s.y&&e<s.y+s.h)return n}return-1}Ki();function Xc(i,t,e,n,s={}){let r=Number(t.mx)||0,a=Number(t.my)||0,o=Math.hypot(r,a);o>1&&(r/=o,a/=o);let l=t.b|0,c=tf;s.healing?c=sf:l&Ce.ADS?c=nf:l&Ce.SPRINT&&(c=ef),o>.01&&Jd(e,i,r*c*n,a*c*n,Qd);let h=(l&Ce.JUMP)!==0;return h&&!i.jh&&i.z<=.001&&(i.vz=rf),i.jh=h,(i.z>0||i.vz>0)&&(i.vz-=af*n,i.z+=i.vz*n,i.z<=0&&(i.z=0,i.vz=0)),o>.01}co();Ki();Dc();si();ho();var Yc=class{constructor(){this.pos=[],this.nor=[],this.col=[],this.m=new ge,this.q=new Bn,this.c=new Pt}add(t,e,n,s,r,a=0,o=1,l=1,c=1,h=0,u=0){let d=t.index?t.toNonIndexed():t.clone();this.q.setFromEuler(new Ls(h,a,u)),this.m.compose(new L(e,n,s),this.q,new L(o,l,c)),d.applyMatrix4(this.m);let f=d.attributes.position.array,g=d.attributes.normal.array;this.c.set(r);for(let y=0;y<f.length;y+=3)this.pos.push(f[y],f[y+1],f[y+2]),this.nor.push(g[y],g[y+1],g[y+2]),this.col.push(this.c.r,this.c.g,this.c.b);d.dispose()}box(t,e,n,s,r,a,o,l=0){this.add(ts,t,e,n,o,l,s,r,a)}build(t){let e=new Xe;return e.setAttribute("position",new Kt(this.pos,3)),e.setAttribute("normal",new Kt(this.nor,3)),e.setAttribute("color",new Kt(this.col,3)),e.computeBoundingSphere(),new wt(e,t)}},ts=new de(1,1,1),qn=new Te(1,1,1,14);function Qi(i,t){let e=new Pt(i);return e.multiplyScalar(t),"#"+e.getHexString()}var _o={uFocus:{value:new L},uCam:{value:new L}};function $c(i){return i.onBeforeCompile=t=>{t.uniforms.uFocus=_o.uFocus,t.uniforms.uCam=_o.uCam,t.vertexShader=`varying vec3 vCutPos;
`+t.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
      vec4 cutWp = vec4(transformed, 1.0);
      #ifdef USE_INSTANCING
        cutWp = instanceMatrix * cutWp;
      #endif
      vCutPos = (modelMatrix * cutWp).xyz;`),t.fragmentShader=`uniform vec3 uFocus; uniform vec3 uCam; varying vec3 vCutPos;
`+t.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
      {
        vec3 seg = uFocus - uCam; float L = length(seg); vec3 dir = seg / max(L, 0.001);
        float t = dot(vCutPos - uCam, dir);
        if (vCutPos.y > 1.75 && t > 0.0 && t < L - 0.9) {
          float d = length(vCutPos - (uCam + dir * t));
          float R = 0.6 + 2.1 * (t / L);
          if (d < R) discard;
        }
      }`)},i.customProgramCacheKey=()=>"cutout",i}var vo=class{constructor(t,e,n){this.scene=t,this.map=e,this.q=n,this.group=new ie,t.add(this.group),this.roofs=[],this.crateMeshes=new Map,this.lootMeshes=new Map,this.time=0,this._lights(),this._ground(),this._static(),this._trees(),this._crates(),this._zone()}_lights(){let t=new Si("#dff3ff","#7da35a",1.15);this.group.add(t);let e=new wi("#fff3d6",1.75);if(e.position.set(40,80,25),e.castShadow=this.q.shadows,this.q.shadows){e.shadow.mapSize.set(this.q.shadowSize,this.q.shadowSize);let n=38;Object.assign(e.shadow.camera,{left:-n,right:n,top:n,bottom:-n,near:1,far:220}),e.shadow.bias=-8e-4,e.shadow.normalBias=.04}this.sun=e,this.group.add(e),this.group.add(e.target),this.scene.fog=new Ds("#bfe6ff",this.q.fog*.55,this.q.fog),this.scene.background=new Pt("#9fd8ff")}_ground(){let t=this.map.size,e=new wt(new Wi(2400,2400),new Ge({color:"#3fb6e8"}));e.rotation.x=-Math.PI/2,e.position.set(t/2,-.6,t/2),this.group.add(e),this.water=e;let n=new wt(new de(t+44,1,t+44),ee("#f0d9a0"));n.position.set(t/2,-.52,t/2),n.receiveShadow=!0,this.group.add(n);let s=new wt(new de(t+10,1,t+10),ee("#8fd16a"));s.position.set(t/2,-.5,t/2),s.receiveShadow=!0,this.group.add(s);let r=new wt(new $i((t+44)*.7,(t+44)*.72,4,1),new Pe({color:"#ffffff",transparent:!0,opacity:.5}));r.rotation.x=-Math.PI/2,r.rotation.z=Math.PI/4,r.position.set(t/2,-.55,t/2),this.group.add(r)}_static(){let t=this.map,e=new Yc,n=kr(777);for(let o of t.areas)e.box(o.x+o.w/2,.005,o.y+o.h/2,o.w,.02,o.h,o.color);for(let o of t.roads){e.box(o.x+o.w/2,.03,o.y+o.h/2,o.w,.04,o.h,"#5d636b");let l=o.w>o.h,c=l?o.w:o.h;for(let h=2;h<c-2;h+=6)l?e.box(o.x+h+1.5,.06,o.y+o.h/2,3,.02,.25,"#f5f1d6"):e.box(o.x+o.w/2,.06,o.y+h+1.5,.25,.02,3,"#f5f1d6");l?(e.box(o.x+o.w/2,.08,o.y-.15,o.w,.14,.3,"#d8d8d0"),e.box(o.x+o.w/2,.08,o.y+o.h+.15,o.w,.14,.3,"#d8d8d0")):(e.box(o.x-.15,.08,o.y+o.h/2,.3,.14,o.h,"#d8d8d0"),e.box(o.x+o.w+.15,.08,o.y+o.h/2,.3,.14,o.h,"#d8d8d0"))}for(let o of t.buildings){let l=o.kind==="warehouse"||o.kind==="factory"?"#a7a39a":o.kind==="barn"||o.kind==="cabin"?"#b5835a":"#d9b48a";e.box(o.x+o.w/2,.06,o.y+o.h/2,o.w-.1,.08,o.h-.1,l)}for(let o of t.walls){if(o.kind==="boundary")continue;let l=o.x+o.w/2,c=o.y+o.h/2,h=o.color||"#cccccc";if(o.kind==="fence"){e.box(l,.55,c,o.w,.12,o.h,h),e.box(l,.95,c,o.w,.12,o.h,h);let u=o.w>o.h,d=u?o.w:o.h;for(let f=0;f<=d;f+=2)e.box(u?o.x+f:l,.6,u?c:o.y+f,.18,1.2,.18,Qi(h,.85));continue}if(e.box(l,o.height/2,c,o.w,o.height,o.h,h),o.kind==="wall"){e.box(l,.25,c,o.w+.06,.5,o.h+.06,Qi(h,.78));let u=o.w>o.h,d=u?o.w:o.h;if(d>3.5&&o.height<6){let f=Math.floor(d/4.5);for(let g=0;g<f;g++){let y=(g+.5)*(d/f),m=u?o.x+y:l,p=u?c:o.y+y;e.box(m,1.8,p,u?1.3:o.w+.08,1,u?o.h+.08:1.3,"#ffffff"),e.box(m,1.8,p,u?1.05:o.w+.1,.8,u?o.h+.1:1.05,"#6cc3ff")}}else d>4&&o.height>=6&&e.box(l,o.height-.5,c,o.w+.08,.35,o.h+.08,Qi(h,.7))}else if(o.kind==="container"){let u=o.w>o.h,d=u?o.w:o.h;for(let f=.4;f<d;f+=.6)e.box(u?o.x+f:l,o.height/2,u?c:o.y+f,u?.12:o.w+.08,o.height-.1,u?o.h+.08:.12,Qi(h,.82));o.height>3&&e.box(l,2.6,c,o.w+.1,.1,o.h+.1,Qi(h,.6))}else o.kind==="pallet"?(e.box(l,.62,c,o.w+.05,.08,o.h+.05,"#d9a866"),e.box(l,1.3,c,o.w*.8,.12,o.h*.8,"#4d9be6")):o.kind==="pump"&&e.box(l,1.65,c,o.w+.1,.15,o.h+.1,"#ffffff")}for(let o of t.circles)switch(o.kind){case"tank":e.add(qn,o.x,o.height/2,o.y,"#e8ecef",0,o.r,o.height,o.r),e.add(qn,o.x,o.height*.65,o.y,"#e07b39",0,o.r+.05,.6,o.r+.05),e.add(qn,o.x,o.height+.2,o.y,"#b9c0c5",0,o.r*.9,.4,o.r*.9);break;case"fountain":e.add(qn,o.x,.5,o.y,"#c9c3b5",0,o.r,1,o.r),e.add(qn,o.x,1.02,o.y,"#5cc8f0",0,o.r-.3,.06,o.r-.3),e.add(qn,o.x,1.6,o.y,"#c9c3b5",0,.35,1.6,.35),e.add(qn,o.x,2.3,o.y,"#5cc8f0",0,.8,.12,.8);break;case"hay":e.add(qn,o.x,o.r,o.y,"#f2cf5b",n.range(0,3),o.r,o.r*1.6,o.r,Math.PI/2);break;case"pillar":e.add(qn,o.x,o.height/2,o.y,"#dddddd",0,o.r,o.height,o.r);break}for(let o of t.props)o.kind==="canopy"&&(e.box(o.x+o.w/2,4.1,o.y+o.h/2,o.w+1,.4,o.h+1,"#ffffff"),e.box(o.x+o.w/2,3.85,o.y+o.h/2,o.w+1.05,.15,o.h+1.05,"#e74c3c"));let s=t.size;for(let o=0;o<=s;o+=4)for(let[l,c]of[[o,-.8],[o,s+.8],[-.8,o],[s+.8,o]])e.box(l,.7,c,.3,1.4,.3,"#8b5a2b");for(let[o,l,c,h]of[[s/2,-.8,s,.08],[s/2,s+.8,s,.08],[-.8,s/2,.08,s],[s+.8,s/2,.08,s]])e.box(o,1.1,l,c,.08,h,"#f2e6c9");let r=$c(new Ge({vertexColors:!0})),a=e.build(r);a.castShadow=this.q.shadows,a.receiveShadow=!0,this.group.add(a),this.map.buildings.forEach((o,l)=>{let c=new ie,h=o.roofColor,u=.45;if(o.roof==="flat"){let d=new wt(ts,ee(h));d.scale.set(o.w+u,.35,o.h+u),d.position.set(0,.17,0),c.add(d);let f=new wt(ts,ee(Qi(h,.75)));if(f.scale.set(o.w+u+.1,.12,o.h+u+.1),f.position.y=.38,c.add(f),o.kind==="factory"||o.kind==="warehouse")for(let g=0;g<3;g++){let y=new wt(ts,ee("#cfd6db"));y.scale.set(1.4,.6,1.4),y.position.set((g-1)*o.w*.28,.6,0),c.add(y)}}else{let d=o.w>=o.h,f=(d?o.w:o.h)+u,g=(d?o.h:o.w)+u,y=Math.min(2.2,g*.32),m=Math.hypot(g/2,y),p=Math.atan2(y,g/2);for(let S of[-1,1]){let C=new wt(ts,ee(S<0?h:Qi(h,.85)));C.scale.set(d?f:m,.22,d?m:f),d?(C.rotation.x=S*p,C.position.set(0,y/2,-S*g/4)):(C.rotation.z=S*p,C.position.set(-S*g/4,y/2,0)),c.add(C)}let v=new Sr;v.moveTo(-g/2+u/2,0),v.lineTo(g/2-u/2,0),v.lineTo(0,y-.1),v.lineTo(-g/2+u/2,0);let x=new Za(v);for(let S of[-1,1]){let C=new wt(x,new Ge({color:"#"+new Pt(this.map.buildings[l].wallColor).getHexString(),side:He}));d?(C.rotation.y=Math.PI/2,C.position.set(S*(o.w/2-.25),0,0)):C.position.set(0,0,S*(o.h/2-.25)),c.add(C)}if(o.kind==="house"&&n.chance(.6)){let S=new wt(ts,ee("#9c6b5a"));S.scale.set(.7,1.6,.7),S.position.set(d?f*.25:g*.15,y*.7,d?g*.15:f*.25),c.add(S)}}c.position.set(o.x+o.w/2,o.height,o.y+o.h/2),c.traverse(d=>{d.isMesh&&(d.castShadow=this.q.shadows,d.receiveShadow=!1,d.material=d.material.clone(),d.material.transparent=!1)}),c.userData.alpha=1,this.group.add(c),this.roofs.push(c)})}_trees(){let t=this.map,e=t.circles.filter(p=>p.kind==="pine"||p.kind==="tree"),n=t.circles.filter(p=>p.kind==="rock"),s=new Ie,r=new Pt,a=kr(99),o=new Te(.22,.32,1,7);o.translate(0,.5,0);let l=new ii(1,1,8);l.translate(0,.5,0);let c=new Ar(1,1),h=e.filter(p=>p.kind==="pine"),u=e.filter(p=>p.kind==="tree"),d=new Dn(o,new Ge({color:"#8b5a2b"}),e.length);e.forEach((p,v)=>{let x=p.scale||1;s.position.set(p.x,0,p.y),s.rotation.set(0,0,0),s.scale.set(x,p.kind==="pine"?1.6*x:2*x,x),s.updateMatrix(),d.setMatrixAt(v,s.matrix)});let f=new Dn(l,$c(new Ge({color:"#ffffff"})),h.length*2);h.forEach((p,v)=>{let x=p.scale||1;r.setHSL(.31+a.range(-.03,.03),.55,.32+a.range(-.05,.05));for(let S=0;S<2;S++){s.position.set(p.x,(1.3+S*1.5)*x,p.y),s.rotation.set(0,a.range(0,3),0);let C=(2-S*.6)*x;s.scale.set(C,(2.6-S*.4)*x,C),s.updateMatrix(),f.setMatrixAt(v*2+S,s.matrix),f.setColorAt(v*2+S,r)}});let g=new Dn(c,$c(new Ge({color:"#ffffff",flatShading:!0})),u.length);u.forEach((p,v)=>{let x=p.scale||1;r.setHSL(.26+a.range(-.04,.05),.55,.42+a.range(-.06,.05)),s.position.set(p.x,3*x,p.y),s.rotation.set(a.range(0,3),a.range(0,3),0),s.scale.set(1.9*x,1.7*x,1.9*x),s.updateMatrix(),g.setMatrixAt(v,s.matrix),g.setColorAt(v,r)});let y=new ks(1,0),m=new Dn(y,new Ge({color:"#ffffff",flatShading:!0}),Math.max(1,n.length));n.forEach((p,v)=>{r.setHSL(.08,.06,.55+a.range(-.08,.08)),s.position.set(p.x,p.r*.35,p.y),s.rotation.set(a.range(0,1),a.range(0,3),a.range(0,1)),s.scale.set(p.r*1.05,p.r*.85,p.r*1.05),s.updateMatrix(),m.setMatrixAt(v,s.matrix),m.setColorAt(v,r)});for(let p of[d,f,g,m])p.castShadow=this.q.shadows,p.receiveShadow=!0,this.group.add(p);if(this.canopies=[f,g],this.q.bushes){let p=t.bushes,v=new Dn(new Ar(1,1),new Ge({color:"#ffffff",flatShading:!0}),Math.max(1,p.length));p.forEach((C,T)=>{r.setHSL(.28+a.range(-.04,.04),.6,.38+a.range(-.05,.06)),s.position.set(C.x,.35*C.s,C.y),s.rotation.set(0,a.range(0,3),0),s.scale.set(C.s,C.s*.75,C.s),s.updateMatrix(),v.setMatrixAt(T,s.matrix),v.setColorAt(T,r)}),v.receiveShadow=!0,this.group.add(v);let x=new Dn(new $e(.12,5,4),new Pe({color:"#ffffff"}),260),S=["#ff6b9a","#ffd23f","#ffffff","#c77dff","#ff8f3f"];for(let C=0;C<260;C++)s.position.set(a.range(10,t.size-10),.12,a.range(10,t.size-10)),s.scale.setScalar(1),s.rotation.set(0,0,0),s.updateMatrix(),x.setMatrixAt(C,s.matrix),x.setColorAt(C,r.set(S[C%S.length]));this.group.add(x)}}_crates(){let t=Td(),e=new Ge({map:t}),n=new de(1.6,1.6,1.6);for(let s of this.map.crates){let r=new wt(n,e);r.position.set(s.x+s.w/2,.8,s.y+s.h/2),r.castShadow=this.q.shadows,r.receiveShadow=!0,r.userData.wobble=0,this.group.add(r),this.crateMeshes.set(s.id,r)}}_zone(){let t=new In({transparent:!0,depthWrite:!1,side:He,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec2 vUv; uniform float uTime;
        void main(){
          float stripes = smoothstep(0.4, 0.6, fract(vUv.x * 160.0 + vUv.y * 6.0 - uTime * 0.6));
          float fade = (1.0 - vUv.y);
          vec3 col = mix(vec3(0.42,0.25,0.95), vec3(0.85,0.45,1.0), stripes);
          gl_FragColor = vec4(col, (0.1 + 0.16 * stripes) * fade + 0.04);
        }`});this.zoneWall=new wt(new Te(1,1,1,128,1,!0),t),this.zoneWall.renderOrder=5,this.group.add(this.zoneWall);let e=new wt(new $i(.985,1,128),new Pe({color:"#ffffff",transparent:!0,opacity:.85,depthWrite:!1}));e.rotation.x=-Math.PI/2,e.position.y=.15,e.renderOrder=4,this.nextRing=e,this.group.add(e)}setZone(t){this.zoneWall.scale.set(Math.max(.1,t.r),45,Math.max(.1,t.r)),this.zoneWall.position.set(t.cx,45/2-1,t.cy),this.zoneWall.visible=t.ph>=0,this.nextRing.visible=t.ph>=0&&t.st!=="done";let n=Math.max(.5,t.tr);this.nextRing.scale.set(n,n,1),this.nextRing.position.set(t.tx,.15,t.ty)}addLoot(t){if(this.lootMeshes.has(t.id))return;let e=Ed(t);e.position.set(t.x,0,t.y),e.userData.item=t,this.group.add(e),this.lootMeshes.set(t.id,e)}removeLoot(t){let e=this.lootMeshes.get(t);e&&(this.group.remove(e),this.lootMeshes.delete(t))}crateHit(t){let e=this.crateMeshes.get(t);e&&(e.userData.wobble=1)}crateBreak(t){let e=this.crateMeshes.get(t);e&&(this.group.remove(e),this.crateMeshes.delete(t));let n=this.map.crates.find(s=>s.id===t);n&&(n.alive=!1)}update(t,e,n,s){this.time+=t,this.zoneWall.material.uniforms.uTime.value=this.time,e&&s&&(_o.uFocus.value.set(e.x,1.3,e.z),_o.uCam.value.copy(s.position)),e&&(this.sun.position.set(e.x+30,70,e.z+18),this.sun.target.position.set(e.x,0,e.z)),this.roofs.forEach((r,a)=>{let o=a===n?0:1;r.userData.alpha+=(o-r.userData.alpha)*Math.min(1,t*10);let l=r.userData.alpha;r.visible=l>.03,(Math.abs(r.userData.lastA-l)>.001||r.userData.lastA===void 0)&&(r.userData.lastA=l,r.traverse(c=>{c.isMesh&&(c.material.opacity=l,c.material.transparent=l<.99)}))});for(let r of this.lootMeshes.values()){let a=r.userData.inner;a.rotation.y+=t*1.4,a.position.y=.55+Math.sin(this.time*2.5+r.userData.phase)*.12}for(let r of this.crateMeshes.values())if(r.userData.wobble>0){r.userData.wobble=Math.max(0,r.userData.wobble-t*5);let a=r.userData.wobble;r.scale.set(1+a*.08,1-a*.08,1+a*.08),r.rotation.y=Math.sin(this.time*60)*a*.06}}dispose(){this.scene.remove(this.group),this.group.traverse(t=>{t.geometry&&t.geometry!==ts&&t.geometry!==qn&&t.geometry.dispose?.()}),this.scene.fog=null}};si();var cf=700,D_=160,Mo=class{constructor(t,e){this.scene=t,this.map=e,this.pGeo=new de(1,1,1),this.pMesh=new Dn(this.pGeo,new Pe({color:"#ffffff"}),cf),this.pMesh.instanceMatrix.setUsage(cd),this.pMesh.frustumCulled=!1,this.pMesh.count=0,this.pMesh.setColorAt(0,new Pt),t.add(this.pMesh),this.parts=[],this.tMat=new Pe({color:"#fff3a0",transparent:!0,opacity:.95,blending:pr,depthWrite:!1}),this.tGeo=new de(.07,.07,1),this.tGeo.translate(0,0,-.5),this.tracers=[],this.tPool=[],this.fMat=new Pe({color:"#ffd76a",transparent:!0,blending:pr,depthWrite:!1}),this.fGeo=new Ya(.28,0),this.flashes=[],this.dummy=new Ie,this.col=new Pt}spawn(t,e,n,s,r){for(let a=0;a<s&&this.parts.length<cf;a++){let o=Math.random()*Math.PI*2,l=(r.speed||4)*(.4+Math.random()*.8),c=(r.up??3)*(.5+Math.random()),h=r.dir,u=Math.cos(o)*l,d=Math.sin(o)*l;h&&(u=u*.5+h.x*l,d=d*.5+h.y*l);let f=Array.isArray(r.color)?r.color[Math.floor(Math.random()*r.color.length)]:r.color;this.parts.push({x:t,y:e,z:n,vx:u,vy:c,vz:d,life:(r.life||.6)*(.6+Math.random()*.6),max:0,size:(r.size||.12)*(.6+Math.random()*.8),color:new Pt(f),g:r.gravity??14,spin:Math.random()*10}),this.parts[this.parts.length-1].max=this.parts[this.parts.length-1].life}}tracer(t,e,n,s,r,a=1.25,o="#fff3a0"){let l=Math.cos(n),c=Math.sin(n),h=s,u=$s(this.map,t,e,t+l*s,e+c*s);u&&(h=s*u.t);let d=this.tPool.pop();d||(d=new wt(this.tGeo,this.tMat.clone())),d.material.color.set(o),d.visible=!0,d.rotation.set(0,Math.atan2(l,c),0),this.scene.add(d),this.tracers.push({m:d,x:t,y:e,dx:l,dy:c,d:0,len:h,speed:r,h:a,hit:!!u}),this.tracers.length>D_&&this._endTracer(this.tracers.shift())}_endTracer(t){this.scene.remove(t.m),this.tPool.push(t.m)}muzzle(t,e,n,s){let r=new wt(this.fGeo,this.fMat);r.position.set(t,n,e),r.rotation.set(Math.random(),Math.random(),Math.random()),r.scale.setScalar(1+Math.random()*.5),this.scene.add(r),this.flashes.push({m:r,life:.06}),this.spawn(t,n,e,3,{color:["#ffd76a","#ffffff"],speed:3,up:1,life:.15,size:.07,gravity:0,dir:{x:Math.cos(s),y:Math.sin(s)}})}impactWall(t,e,n=1.2){this.spawn(t,n,e,6,{color:["#d9d2c5","#a8a196","#fff2a8"],speed:3,up:3,life:.45,size:.09})}impactPlayer(t,e){this.spawn(t,1.2,e,10,{color:["#ff4d5a","#ffb020","#ffffff"],speed:4.5,up:4,life:.45,size:.13})}crateHit(t,e){this.spawn(t,1,e,6,{color:["#c98a48","#8b5a2b"],speed:3,up:3,life:.5,size:.12})}crateBreak(t,e){this.spawn(t,.8,e,34,{color:["#c98a48","#8b5a2b","#e0b070"],speed:6,up:6,life:1.1,size:.22})}death(t,e,n){this.spawn(t,1,e,30,{color:[n,"#ffffff","#ffd23f"],speed:5,up:6,life:1,size:.18})}heal(t,e){this.spawn(t,.5,e,14,{color:["#7dff9a","#ffffff"],speed:1.5,up:4,life:.9,size:.1,gravity:-2})}confetti(t,e){this.spawn(t,3,e,120,{color:["#ff5a5f","#ffd23f","#3fa9f5","#5ad67d","#c77dff","#ffffff"],speed:7,up:9,life:3,size:.18,gravity:6})}pickup(t,e){this.spawn(t,.6,e,8,{color:["#ffffff","#fff3a0"],speed:2,up:3,life:.4,size:.08,gravity:2})}update(t){for(let n=this.tracers.length-1;n>=0;n--){let s=this.tracers[n];s.d+=s.speed*t;let r=Math.min(s.d,s.len),a=Math.max(0,r-3.2);s.m.position.set(s.x+s.dx*r,s.h,s.y+s.dy*r),s.m.scale.set(1,1,Math.max(.05,r-a)),s.d>=s.len&&(s.hit&&this.impactWall(s.x+s.dx*s.len,s.y+s.dy*s.len,s.h),this._endTracer(s),this.tracers.splice(n,1))}for(let n=this.flashes.length-1;n>=0;n--){let s=this.flashes[n];s.life-=t,s.life<=0&&(this.scene.remove(s.m),this.flashes.splice(n,1))}let e=0;for(let n=this.parts.length-1;n>=0;n--){let s=this.parts[n];if(s.life-=t,s.life<=0){this.parts[n]=this.parts[this.parts.length-1],this.parts.pop();continue}s.vy-=s.g*t,s.x+=s.vx*t,s.y+=s.vy*t,s.z+=s.vz*t,s.y<.05&&(s.y=.05,s.vy*=-.3,s.vx*=.6,s.vz*=.6),s.spin+=t*8}for(let n of this.parts){let s=Math.min(1,n.life/(n.max*.5));this.dummy.position.set(n.x,n.y,n.z),this.dummy.rotation.set(n.spin,n.spin*.7,0),this.dummy.scale.setScalar(n.size*s),this.dummy.updateMatrix(),this.pMesh.setMatrixAt(e,this.dummy.matrix),this.pMesh.setColorAt(e,n.color),e++}this.pMesh.count=e,this.pMesh.instanceMatrix.needsUpdate=!0,this.pMesh.instanceColor&&(this.pMesh.instanceColor.needsUpdate=!0)}dispose(){this.scene.remove(this.pMesh);for(let t of this.tracers)this.scene.remove(t.m);for(let t of this.flashes)this.scene.remove(t.m)}};Ir();So();Or();qs();var U_=110,df=.12,ff=1.4,pf=.44,Ys=i=>document.getElementById(i),wo=class{constructor(t,e){this.app=t,this.net=t.net,this.renderer=t.renderer,this.quality=Wn[Q.quality]||Wn.medium,this.mode=e.mode,this.localId=e.you,this.scene=new Mi,this.camera=new Le(Q.fov,innerWidth/innerHeight,.3,600),this.map=of(e.seed);for(let n of e.crates){let s=this.map.crates.find(r=>r.id===n);s&&(s.alive=!1)}this.world=new vo(this.scene,this.map,this.quality);for(let n of e.crates)this.world.crateBreak(n);this.effects=new Mo(this.scene,this.map),this.hud=new bo(this.map),this.loot=new Map;for(let n of e.loot)this.loot.set(n.id,n),this.world.addLoot(n);this.zone=e.zone,this.world.setZone(this.zone),this.players=new Map;for(let n of e.players)this._addPlayer(n);this.me=this.players.get(this.localId),this.myTeam=this.me.team,this.hud.setRoster(this.players,this.localId,this.mode),this.pred={x:0,y:0,z:0,vz:0,jh:!1},this.predPrev={x:0,y:0,z:0},this.predInit=!1,this.pending=[],this.seq=0,this.corr={x:0,y:0},this.acc=0,this.inv={hp:Gc,sl:0,w:[["pistol",12],null],am:{light:24,medium:0,shells:0,heavy:0},he:{bandage:1,medkit:0},rl:0,hl:null,k:0},this.localCd=0,this.localMag=null,this.prevFire=!1,this.yaw=-Math.PI/2,this.pitch=.72,this.zoom=1,this.yawT=this.yaw,this.pitchT=this.pitch,this.camDist=null,this.camPos=new L,this.camLook=new L,this.camInit=!1,this.shake=0,this.keys=new Set,this.mouse={left:!1,right:!1,x:innerWidth/2,y:innerHeight/2},this.aimAngle=0,this.paused=!1,this.state=e.countdown>0?"countdown":"playing",this.countdownEnd=performance.now()+e.countdown*1e3,this.lastCountdown=-1,this.matchTime=-e.countdown,this.aliveCount=e.players.length,this.teamsAlive=0,this.spectateId=null,this.ended=!1,this.resultShown=!1,this.stepT=0,this.revealed=new Map,this.losCache=new Map,this.lastZoneTick=0,this.lowAmmoWarned=!1,this._bind(),this.onResize(),xt.stopMusic(),this.hud.announce("\xA1Prep\xE1rate!","big",1.5),Ys("spectate").classList.add("hidden")}_addPlayer(t){let e=t.id===this.localId,n=uf(t.team),s=new Gn(t.outfit||t.char,{ringColor:e?"#ffffff":null});s.victoryStyle=Math.floor(Math.random()*3),s.setWeapon("pistol"),this.scene.add(s.root);let r={...t,color:n,model:s,buf:[],x:0,y:0,z:0,a:0,hp:Gc,alive:!0,flags:1,w:0,kills:0,rx:0,ry:0,stepT:0,lastX:null,speed:0,inited:!1};return this.players.set(t.id,r),e&&this._addSilhouette(s,"#8fe3ff"),r}_addSilhouette(t,e="#7fd6ff"){let n=new Pe({color:e,depthFunc:pc,depthWrite:!1}),s=[];t.root.traverse(r=>{r.isMesh&&!r.userData.sil&&r!==t.ring&&s.push(r)});for(let r of s){r.renderOrder=2;let a=new wt(r.geometry,n);a.userData.sil=!0,a.renderOrder=1,r.add(a)}t.silMat=n}_bind(){let t=this.renderer.domElement;this.h={keydown:e=>{if((e.code==="Tab"||e.code==="Space"||e.code.startsWith("Arrow"))&&e.preventDefault(),e.repeat){e.code===Q.keys.scoreboard&&e.preventDefault();return}if(e.code==="Escape"){this.togglePause();return}if(this.paused)return;this.keys.add(e.code);let n=Q.keys;if(this.isDead()){(e.code==="Space"||e.code===n.interact)&&this.cycleSpectate();return}e.code===n.reload?this.action("reload"):e.code===n.interact?this.action("pickup"):e.code===n.slot1?this.action("slot",0):e.code===n.slot2?this.action("slot",1):e.code===n.bandage?this.action("heal","bandage"):e.code===n.medkit?this.action("heal","medkit"):e.code===n.drop&&this.action("drop")},keyup:e=>{this.keys.delete(e.code)},mousedown:e=>{if(!(this.touch||this.paused||e.target!==t)){if(xt.init(),this.camMode==="follow"&&document.pointerLockElement!==t){this.lockPointer();return}e.button===0&&(this.mouse.left=!0,this.fireLatch=!0),e.button===2&&(this.mouse.right=!0)}},mouseup:e=>{e.button===0&&(this.mouse.left=!1),e.button===2&&(this.mouse.right=!1)},mousemove:e=>{if(this.mouse.x=e.clientX,this.mouse.y=e.clientY,document.pointerLockElement===t&&!this.paused){let n=Math.max(-250,Math.min(250,e.movementX)),s=Math.max(-250,Math.min(250,e.movementY)),r=.0022*Q.sensitivity;this.yawT+=n*r,this.pitchT=Math.max(df,Math.min(ff,this.pitchT+s*r*.75*(Q.invertY?-1:1)))}},wheel:e=>{if(!this.paused&&!e.ctrlKey){if(e.shiftKey){this.zoom=Math.max(.7,Math.min(1.5,this.zoom+Math.sign(e.deltaY)*.08));return}!this.isDead()&&Math.abs(e.deltaY)>2&&this.action("slot",this.inv.sl===0?1:0)}},contextmenu:e=>e.preventDefault(),blur:()=>{this.keys.clear(),this.mouse.left=this.mouse.right=!1},plc:()=>{this.camMode==="follow"&&document.pointerLockElement!==t&&!this.paused&&!this.ended&&!this.resultShown&&this.togglePause(!0)},resize:()=>this.onResize()},window.addEventListener("keydown",this.h.keydown),window.addEventListener("keyup",this.h.keyup),window.addEventListener("mousedown",this.h.mousedown),window.addEventListener("mouseup",this.h.mouseup),window.addEventListener("mousemove",this.h.mousemove),window.addEventListener("wheel",this.h.wheel,{passive:!0}),window.addEventListener("contextmenu",this.h.contextmenu),window.addEventListener("blur",this.h.blur),window.addEventListener("resize",this.h.resize),document.addEventListener("pointerlockchange",this.h.plc),t.classList.toggle("cursorMode",this.camMode==="cursor"),xn&&(this.touch=new Xs(this))}get pitchMin(){return df}get pitchMax(){return ff}get camMode(){return this.touch?"follow":this.lockFailed?"cursor":Q.cameraMode}lockPointer(){if(this.touch||this.camMode!=="follow")return;let t=this.renderer.domElement,e=()=>{this.lockFails=(this.lockFails||0)+1,this.lockFails>=2&&!this.lockFailed&&(this.lockFailed=!0,t.classList.add("cursorMode"),this.hud.toast("No se pudo capturar el rat\xF3n: se usa la vista con cursor"))};try{let n=t.requestPointerLock();n&&n.catch&&n.catch(e)}catch{e()}}togglePause(t){if(this.resultShown)return;let e=t===void 0?!this.paused:t;this.paused=e,this.keys.clear(),this.mouse.left=this.mouse.right=!1,this.touch&&this.touch.reset(),Ys("pause").classList.toggle("hidden",!e),e?document.pointerLockElement&&document.exitPointerLock():this.camMode==="follow"&&this.lockPointer()}action(t,e){this.state!=="playing"||this.isDead()||(this.net.send({t:"a",a:t,v:e}),t==="slot"&&(this.localCd=Math.max(this.localCd,.25),this.inv.sl=e,this.localMag=null))}isDead(){return!this.me.alive}onResize(){this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.hud.resize()}onSnapshot(t){let e=performance.now();this.matchTime=t.tm,this.aliveCount=t.al,this.teamsAlive=t.at;for(let n of t.p){let[s,r,a,o,l,c,h,u]=n,d=this.players.get(s);if(!d)continue;d.buf.push({t:e,x:r,y:a,z:o,a:l,hp:c,flags:h,w:u}),d.buf.length>30&&d.buf.shift(),d.inited||(d.x=d.rx=r,d.y=d.ry=a,d.inited=!0),d.hp=c,d.flags=h,d.w=u;let f=(h&1)!==0;d.alive&&!f?(d.alive=!1,d.model.die()):!d.alive&&f&&(d.alive=!0,d.model.revive())}t.z&&(this.zone=t.z,this.world.setZone(this.zone)),t.me&&this._reconcile(t.me);for(let n of t.ev||[])this._event(n)}_reconcile(t){let e=this.inv;if(this.inv=t,t.w[t.sl]&&(this.localMag===null||t.w[t.sl][1]!==this.localMag)&&(this.localMag===null||t.w[t.sl][1]>this.localMag||this.pending.length===0||t.rl>0)&&(this.localMag=t.w[t.sl][1]),!this.predInit)Object.assign(this.pred,{x:t.x,y:t.y,z:t.z,vz:t.vz}),Object.assign(this.predPrev,{x:t.x,y:t.y,z:t.z}),this.predInit=!0;else{let n=this.pred.x,s=this.pred.y;this.pending=this.pending.filter(o=>o.s>t.ack);let r={x:t.x,y:t.y,z:t.z,vz:t.vz,jh:this.lastAckJump(t.ack)};for(let o of this.pending)Xc(r,o,this.map,ji,{healing:!!t.hl});Math.hypot(r.x-n,r.y-s)>4?(this.corr.x=0,this.corr.y=0):(this.corr.x+=n-r.x,this.corr.y+=s-r.y),Object.assign(this.pred,r)}this.hud.updateMe(t),e&&t.hp<e.hp&&this.hud.setLowHp(t.hp),t.hp>(e?.hp??0)&&this.hud.setLowHp(t.hp)}lastAckJump(t){let e=this.sentHistory?.get(t);return e?(e&Ce.JUMP)!==0:!1}_event(t){let e=n=>this.players.get(n);switch(t.t){case"go":this.state="playing",this.hud.announce("\xA1A LUCHAR!","big go",1.4),xt.countdown(!0);break;case"shot":{let n=e(t.p);if(!n)break;let s=Ne[t.w];if(n.model.shoot(s.recoil+.4),n.model.setWeapon(t.w),t.p===this.localId)break;for(let r of t.as)this.effects.tracer(t.x,t.y,r,s.range,s.speed*.9,1.25,s.id==="sniper"?"#e2b8ff":"#fff3a0");if(this.effects.muzzle(t.x+Math.cos(t.as[0])*.4,t.y+Math.sin(t.as[0])*.4,1.25,t.as[0]),xt.gunshot(t.w,t.x,t.y),n.team!==this.myTeam&&this.me.alive&&Math.hypot(t.x-this.pred.x,t.y-this.pred.y)<50){this.revealed.set(t.p,performance.now()+3e3);let a=this.project(t.x,1,t.y);(!a||a.x<40||a.y<40||a.x>innerWidth-40||a.y>innerHeight-40)&&this.hud.addIndicator(this.screenAngleTo(t.x,t.y),"shot")}break}case"hit":{let n=e(t.p);if(this.effects.impactPlayer(t.x,t.y),t.p===this.localId){xt.hurt(),this.hud.damageFlash(t.d),this.shake=Math.min(.6,this.shake+t.d/60);let s=e(t.by);s?this.hud.addIndicator(this.screenAngleTo(s.rx,s.ry),"damage"):this.hud.addIndicator(this.screenAngleTo(this.zone.cx,this.zone.cy)+Math.PI,"damage")}else t.by===this.localId?(xt.hitMarker(),this.hud.hitmarker(!1),this.hud.floatText(t.x,t.y,2.2,String(t.d),t.d>=40?"#ffd23f":"#ffffff",t.d>=40)):xt.impact(t.x,t.y);n&&(n.lastHit=performance.now());break}case"kill":{let n=e(t.v),s=e(t.k);n&&(this.effects.death(n.rx,n.ry,n.color),n.alive=!1,n.model.die());let r=t.v===this.localId||t.k===this.localId;this.hud.killfeed(s?{name:s.name,color:s.color}:null,{name:n?.name||"?",color:n?.color||"#fff"},t.w,r),s&&(s.kills=(s.kills||0)+(s.team!==n?.team?1:0)),t.k===this.localId&&t.v!==this.localId&&(xt.elimination(),this.hud.hitmarker(!0),this.hud.announce(`<small>ELIMINASTE A</small>${gf(n?.name||"")}`,"kill",2)),t.v===this.localId?this._onLocalDeath(s):n&&n.team===this.myTeam&&this.hud.toast(`${n.name} ha ca\xEDdo`),this.spectateId===t.v&&setTimeout(()=>this.pickSpectate(t.k),1800);break}case"teamout":t.team!==this.myTeam&&this.mode!=="solo"&&this.hud.toast(`Equipo eliminado \xB7 quedan ${Math.max(1,t.place-1)} equipos`);break;case"pk":{let n=e(t.p);if(n&&n.model.pickup(),t.p===this.localId){xt.pickup(),this.effects.pickup(this.pred.x,this.pred.y);let s=t.k==="weapon"?Ne[t.ty].name:t.k==="ammo"?Ji[t.ty].name:lo[t.ty].name;this.hud.toast(`+ ${s}`),t.k==="weapon"&&(this.localMag=null)}break}case"rl":{let n=e(t.p);t.p===this.localId?xt.reload(t.w):n&&xt.reload(t.w,n.rx,n.ry);break}case"dry":t.p===this.localId&&(xt.dry(),this.hud.toast("Sin munici\xF3n"));break;case"heal":t.p===this.localId&&xt.heal();break;case"healed":{let n=e(t.p);n&&this.effects.heal(n.rx,n.ry),t.p===this.localId&&this.hud.floatText(this.pred.x,this.pred.y,2.4,"+"+t.hp+" \u2665","#7dff9a");break}case"sw":t.p===this.localId&&(this.localMag=null);break;case"la":this.loot.set(t.it.id,t.it),this.world.addLoot(t.it);break;case"lr":this.loot.delete(t.id),this.world.removeLoot(t.id);break;case"lu":{let n=this.loot.get(t.id);n&&(n.n=t.amount);break}case"ch":this.world.crateHit(t.id),this.effects.crateHit(t.x,t.y),xt.crate(t.x,t.y,!1);break;case"cb":{let n=this.map.crates.find(s=>s.id===t.id);this.world.crateBreak(t.id),n&&(this.effects.crateBreak(n.x+.8,n.y+.8),xt.crate(n.x,n.y,!0));break}case"zone":t.s==="new"?(this.hud.announce(t.ph===0?"La zona segura ha aparecido":"Nueva zona segura marcada","zone",2.6),xt.zoneAlarm()):t.s==="shrink"&&(this.hud.announce("\xA1La zona se est\xE1 cerrando!","zone",2.6),xt.zoneAlarm());break}}_onLocalDeath(t){this.hud.prompt(null),Ys("progress").classList.add("hidden"),document.pointerLockElement&&document.exitPointerLock();let e=[...this.players.values()].filter(n=>n.team===this.myTeam&&n.alive&&n.id!==this.localId);e.length?(this.hud.announce("Has ca\xEDdo. Tu equipo sigue luchando","dead",3),setTimeout(()=>this.pickSpectate(e[0].id),1500)):setTimeout(()=>this.pickSpectate(t?t.id:null),2500)}pickSpectate(t){if(!this.isDead())return;let e=t?this.players.get(t):null;if(!e||!e.alive){let s=[...this.players.values()].filter(r=>r.alive);e=s.find(r=>r.team===this.myTeam)||s[0]||null}this.spectateId=e?e.id:null;let n=Ys("spectate");e&&(n.classList.remove("hidden"),Ys("spectateName").textContent=e.name)}cycleSpectate(){let t=[...this.players.values()].filter(s=>s.alive);if(!t.length)return;let e=t.findIndex(s=>s.id===this.spectateId),n=t[(e+1)%t.length];this.pickSpectate(n.id)}fixedStep(){if(!this.predInit)return;let t=this.state==="playing"&&!this.paused&&this.me.alive&&!this.ended,e=Q.keys,n=0,s=0;t&&(this.keys.has(e.forward)&&(s+=1),this.keys.has(e.back)&&(s-=1),this.keys.has(e.right)&&(n+=1),this.keys.has(e.left)&&(n-=1),this.touch&&(this.touch.mx||this.touch.my)&&(n=this.touch.mx,s=this.touch.my));let r=this.camMode==="follow"?this.yaw:-Math.PI/2,a=Math.cos(r),o=Math.sin(r),l=-o,c=a,h=a*s+l*n,u=o*s+c*n,d=Math.hypot(h,u);if(d>1&&(h/=d,u/=d),this.camMode==="follow")this.aimAngle=this._followAim();else{let m=this.screenToGround(this.mouse.x,this.mouse.y,1.25);m&&(this.aimAngle=Math.atan2(m.y-this.pred.y,m.x-this.pred.x))}let f=0,g=this.touch||this.camMode==="cursor"||document.pointerLockElement===this.renderer.domElement;t&&this.touch&&(this._aimAssist(),(this.touch.fire||this.touch.fireLatch)&&(f|=Ce.FIRE),this.touch.fireLatch=!1,this.touch.ads&&(f|=Ce.ADS),this.touch.sprint&&(f|=Ce.SPRINT),this.touch.jump&&(f|=Ce.JUMP)),t&&g&&((this.mouse.left||this.fireLatch)&&(f|=Ce.FIRE),this.fireLatch=!1,this.mouse.right&&(f|=Ce.ADS),(this.keys.has(e.sprint)||this.keys.has("ShiftRight"))&&(f|=Ce.SPRINT),this.keys.has(e.jump)&&(f|=Ce.JUMP)),this.fireLatch=!1;let y=Math.atan2(Math.sin(this.aimAngle),Math.cos(this.aimAngle));if(this.buttons=f,this.me.alive&&!this.ended){let m={t:"i",s:++this.seq,mx:Math.round(h*1e3)/1e3,my:Math.round(u*1e3)/1e3,b:f,a:Math.round(y*1e3)/1e3};this.net.send(m),this.sentHistory||(this.sentHistory=new Map),this.sentHistory.set(m.s,f),this.sentHistory.size>120&&this.sentHistory.delete(m.s-120),this.state==="playing"?(this.pending.push(m),this.pending.length>90&&this.pending.shift(),Object.assign(this.predPrev,{x:this.pred.x,y:this.pred.y,z:this.pred.z}),this.moving=Xc(this.pred,m,this.map,ji,{healing:!!this.inv.hl}),this.predSprint=this.moving&&f&Ce.SPRINT&&!(f&Ce.ADS)):Object.assign(this.predPrev,{x:this.pred.x,y:this.pred.y,z:this.pred.z})}this._localFire(f)}_aimAssist(){if(!Q.touchAimAssist||!this.me.alive||!(this.touch.fire||this.touch.ads))return;let t=this.inv.w[this.inv.sl],e=t&&Ne[t[0]]?Ne[t[0]].range:25,n=null,s=.21;for(let r of this.players.values()){if(r.id===this.localId||!r.alive||r.team===this.myTeam||!r.inited||r.model&&r.model.root&&r.model.root.visible===!1)continue;let a=r.rx-this.pred.x,o=r.ry-this.pred.y,l=Math.hypot(a,o);if(l<1||l>e)continue;let c=Math.atan2(o,a)-this.yaw;for(;c>Math.PI;)c-=2*Math.PI;for(;c<-Math.PI;)c+=2*Math.PI;Math.abs(c)<s&&(s=Math.abs(c),n=c)}n!==null&&(this.yawT+=n*.1)}_followAim(){let t=this.screenToGround(innerWidth*.5,innerHeight*pf,1.25),e=this.pred.x,n=this.pred.y;if(t){let s=t.x-e,r=t.y-n,a=Math.hypot(s,r),o=s*Math.cos(this.yaw)+r*Math.sin(this.yaw);if(a>1.5&&o>.5)return this._aimDist=a,Math.atan2(r,s)}return this._aimDist=40,this.yaw}_localFire(t){this.localCd=Math.max(0,this.localCd-ji);let e=(t&Ce.FIRE)!==0,n=this.inv.w[this.inv.sl];if(e&&n&&this.state==="playing"&&this.me.alive){let s=Ne[n[0]],r=s.auto||!this.prevFire;if(this.localMag===null&&(this.localMag=n[1]),r&&this.localCd<=0&&!this.inv.hl&&(this.inv.rl<=0||s.id==="shotgun"&&this.localMag>0))if(this.localMag>0){this.localMag--,this.localCd=s.interval;let a=s.spread;t&Ce.ADS&&(a*=bc),this.pred.z>.05?a*=Ec:this.predSprint?a*=wc:this.moving&&(a*=Sc);let o=this.pred.x+Math.cos(this.aimAngle)*.75,l=this.pred.y+Math.sin(this.aimAngle)*.75;for(let c=0;c<s.pellets;c++){let h=this.aimAngle+(Math.random()+Math.random()-1)*a;this.effects.tracer(o,l,h,s.range,s.speed*.9,1.25+this.pred.z,s.id==="sniper"?"#e2b8ff":"#fff3a0")}this.effects.muzzle(o+Math.cos(this.aimAngle)*.3,l+Math.sin(this.aimAngle)*.3,1.25+this.pred.z,this.aimAngle),xt.gunshot(s.id),this.me.model.shoot(s.recoil+.4),this.shake=Math.min(.5,this.shake+s.recoil*.35),this.localMag===0&&this.inv.am[s.ammo]===0&&this.hud.toast("\xA1Sin munici\xF3n para "+s.name+"!")}else this.prevFire||xt.dry()}this.prevFire=e}update(t){let e=performance.now();if(this.state==="countdown"){let c=Math.ceil((this.countdownEnd-e)/1e3);c!==this.lastCountdown&&c>0&&(this.lastCountdown=c,this.hud.announce(String(c),"big count",.9),xt.countdown(!1))}this.acc+=t;let n=0;for(;this.acc>=ji&&n<5;)this.fixedStep(),this.acc-=ji,n++;n>=5&&(this.acc=0);let s=this.acc/ji,r=Math.exp(-t*12);this.corr.x*=r,this.corr.y*=r,this.predInit&&this.me.alive&&(this.me.rx=this.predPrev.x+(this.pred.x-this.predPrev.x)*s+this.corr.x,this.me.ry=this.predPrev.y+(this.pred.y-this.predPrev.y)*s+this.corr.y,this.me.rz=this.predPrev.z+(this.pred.z-this.predPrev.z)*s,this.me.ra=this.aimAngle);let a=e-U_;for(let c of this.players.values()){if(c.id===this.localId&&c.alive)continue;let h=c.buf;if(!h.length)continue;let u=h[0],d=h[h.length-1];for(let g=0;g<h.length-1;g++)if(h[g].t<=a&&h[g+1].t>=a){u=h[g],d=h[g+1];break}a>=d.t&&(u=d);let f=d.t>u.t?Math.max(0,Math.min(1,(a-u.t)/(d.t-u.t))):1;for(c.rx=u.x+(d.x-u.x)*f,c.ry=u.y+(d.y-u.y)*f,c.rz=u.z+(d.z-u.z)*f,c.ra=mf(u.a,d.a,f);h.length>2&&h[1].t<a-200;)h.shift()}for(let c of this.players.values()){let h=c.model;if(c.rx===void 0)continue;let u=c.lastX===null?0:(c.rx-c.lastX)/Math.max(t,.001),d=c.lastY===void 0||c.lastY===null?0:(c.ry-c.lastY)/Math.max(t,.001);c.lastX=c.rx,c.lastY=c.ry;let f=Math.hypot(u,d);c.speed+=(f-c.speed)*Math.min(1,t*10),h.root.position.x=c.rx,h.root.position.z=c.ry,c.alive&&(h.root.position.y=c.rz||0),h.root.rotation.y=Math.PI/2-c.ra;let g=c.id===this.localId,y=c.flags,m=g?this.inv.w[this.inv.sl]?oo.indexOf(this.inv.w[this.inv.sl][0]):-1:c.w;h.setWeapon(m>=0?oo[m]:null),h.update(t,{speed:Math.min(1.3,c.speed/6),running:c.speed>7.2,aiming:g?this.buttons&Ce.ADS:y&32,reloading:g?this.inv.rl>0:y&8,healing:g?!!this.inv.hl:y&16,airborne:(c.rz||0)>.08,inMatch:!0}),c.alive&&c.speed>1.5&&(c.rz||0)<.05&&(c.stepT-=t,c.stepT<=0&&(c.stepT=c.speed>7.2?.27:.36,g?xt.step(null,null,c.speed>7.2):xt.step(c.rx,c.ry,c.speed>7.2))),h.root.visible=c.alive||h.deadT<4.2}let o=this._focus();this._updateCamera(t,o),xt.listener.x=o.x,xt.listener.y=o.y,xt.listener.yaw=this.camMode==="follow"?this.yaw:-Math.PI/2;let l=lf(this.map,o.x,o.y);if(this.world.update(t,{x:o.x,z:o.y},l,this.camera),this.effects.update(t),this._updateHud(t,o),this.me.alive&&this.zone){let c=Math.hypot(this.pred.x-this.zone.cx,this.pred.y-this.zone.cy)>this.zone.r;this.hud.setZoneVignette(c),c&&e-this.lastZoneTick>1e3&&(this.lastZoneTick=e,xt.zoneTick())}else this.hud.setZoneVignette(!1)}_focus(){if(this.me.alive||!this.spectateId)return{x:this.me.rx??this.pred.x,y:this.me.ry??this.pred.y,z:this.me.rz||0,a:this.aimAngle};let t=this.players.get(this.spectateId);return t?{x:t.rx,y:t.ry,z:t.rz||0,a:t.ra}:{x:this.me.rx,y:this.me.ry,z:0,a:0}}_updateCamera(t,e){let n=this.camMode==="follow",s=this.inv.w[this.inv.sl],r=s?Ne[s[0]]:null,a=this.me.alive&&this.buttons&Ce.ADS&&r;!this.me.alive&&this.spectateId&&n&&(this.yawT=mf(this.yawT,this.players.get(this.spectateId)?.ra??this.yawT,Math.min(1,t*2.5)));let o=42-34*Math.max(0,Math.min(1,Q.cameraSmoothing??.35)),l=1-Math.exp(-t*o);this.yaw+=(this.yawT-this.yaw)*l,this.pitch+=(this.pitchT-this.pitch)*l;let c=n?this.yaw:-Math.PI/2,h=n?this.pitch:1.12,u=(n?13:19)*Q.cameraDistance*this.zoom,d=n?4.2:0;if(a&&(u*=r.zoom,d+=n?r.id==="sniper"?12:r.id==="ar"?6:3.5:0),!n){let _=this.screenToGround(this.mouse.x,this.mouse.y,0);if(_){let M=_.x-e.x,D=_.y-e.y,k=Math.min(a?14:5,Math.hypot(M,D)*(a?.45:.18)),K=Math.atan2(D,M);this._lookOff={x:Math.cos(K)*k,y:Math.sin(K)*k}}}let f=Math.cos(c),g=Math.sin(c),y=!n&&this._lookOff?this._lookOff:{x:0,y:0},m=n?Math.max(0,1-h/1.1):0;d*=1-m*.6;let p=n?.9*m:0,v=e.x+f*d+y.x-g*p,x=e.y+g*d+y.y+f*p,S=1.2+(e.z||0)*.4+m*.9;if(n){let _=v-f*u*Math.cos(h),M=x-g*u*Math.cos(h),D=S+u*Math.sin(h),k=$s(this.map,v,x,_,M);if(k){let K=k.obj.ref?.height??3;S+(D-S)*k.t<K+.4&&(u=Math.max(2.8,u*k.t*.9))}}this.camDist===null&&(this.camDist=u),this.camDist+=(u-this.camDist)*Math.min(1,t*(u<this.camDist?14:3)),u=this.camDist;let C=new L(v,S,x),T=new L(v-f*u*Math.cos(h),Math.max(.9,S+u*Math.sin(h)),x-g*u*Math.cos(h));this.camInit||(this.camPos.copy(T),this.camLook.copy(C),this.camInit=!0);let b=1-Math.exp(-t*(n?30:10));if(this.camPos.lerp(T,b),this.camLook.lerp(C,b),this.camera.position.copy(this.camPos),this.shake>0){this.shake=Math.max(0,this.shake-t*2.2);let _=this.shake*.35;this.camera.position.x+=(Math.random()-.5)*_,this.camera.position.y+=(Math.random()-.5)*_,this.camera.position.z+=(Math.random()-.5)*_}this.camera.lookAt(this.camLook);let R=Q.fov*(a&&r.id==="sniper"?.92:1);Math.abs(this.camera.fov-R)>.05&&(this.camera.fov+=(R-this.camera.fov)*Math.min(1,t*8),this.camera.updateProjectionMatrix())}_updateHud(t,e){let n=performance.now();this.hud.updateTop(this.aliveCount,this.teamsAlive,this.matchTime,this.zone);let s=[...this.players.values()].filter(y=>y.team===this.myTeam).map(y=>({name:y.name,hp:y.id===this.localId?this.inv.hp:y.hp,alive:y.alive,color:y.color,isMe:y.id===this.localId}));(!this._teamT||n-this._teamT>250)&&(this.hud.updateTeam(s),this._teamT=n);let r=null;if(this.me.alive&&this.state==="playing"){let y=null,m=Wc*Wc;for(let p of this.loot.values()){let v=(p.x-this.pred.x)**2+(p.y-this.pred.y)**2;v<m&&(p.k==="weapon"||!y||y.k!=="weapon")&&(m=v,y=p)}if(y){let p={kind:y.k,type:y.ty,amount:y.n},v=this.inv.w.every(Boolean)&&y.k==="weapon"&&!this.inv.w.some(x=>x&&x[0]===y.ty);r=`Recoger <b>${gf(wd(p))}</b>${v?" <small>(cambia el arma actual)</small>":""}`}}r!==this._lastPrompt&&(this.hud.prompt(r),this._lastPrompt=r),this.touch&&this.touch.update(r);let a=[];for(let y of this.players.values()){if(!y.alive||y.id===this.localId||y.rx===void 0||Math.hypot(y.rx-e.x,y.ry-e.y)>42)continue;let p=y.team===this.myTeam;if(!p){let v=this.losCache.get(y.id);if((!v||n-v.t>150)&&(v={t:n,v:!$s(this.map,e.x,e.y,y.rx,y.ry)},this.losCache.set(y.id,v)),!v.v)continue}a.push({x:y.rx,y:y.ry,h:2.55+(y.rz||0),name:y.name,hp:y.hp,color:p?y.color:"#ffffff",enemy:!p})}let o=this.project(e.x,1.2,e.y)||{x:innerWidth/2,y:innerHeight/2};this.hud.drawOverlay(t,a,(y,m,p)=>this.project(y,m,p),o);let l=this.inv.w[this.inv.sl],c=l?Ne[l[0]]:null,h=this.mouse.x,u=this.mouse.y,d=0,f=!1;if(c&&this.me.alive){let y=c.spread;this.buttons&Ce.ADS&&(y*=bc),this.pred.z>.05?y*=Ec:this.predSprint?y*=wc:this.moving&&(y*=Sc);let m=this.camMode==="follow"?Math.max(2,Math.min(c.range,this._aimDist||12)):Math.hypot(...(()=>{let C=this.screenToGround(this.mouse.x,this.mouse.y,1.25);return C?[C.x-this.pred.x,C.y-this.pred.y]:[8,0]})()),p=this.pred.x+Math.cos(this.aimAngle)*m,v=this.pred.y+Math.sin(this.aimAngle)*m;this.camMode==="follow"&&(h=innerWidth*.5,u=innerHeight*pf);let x=this.project(p+Math.cos(this.aimAngle+Math.PI/2)*m*Math.tan(y),1.25,v+Math.sin(this.aimAngle+Math.PI/2)*m*Math.tan(y)),S=this.project(p,1.25,v);x&&S&&(d=Math.min(80,Math.hypot(x.x-S.x,x.y-S.y))),f=!!$s(this.map,this.pred.x,this.pred.y,p,v)}if(this.hud.crosshair(h,u,d,this.me.alive&&!this.paused&&!this.resultShown,f),!this._mmT||n-this._mmT>50){this._mmT=n;for(let[m,p]of this.revealed)p<n&&this.revealed.delete(m);let y=[...this.players.values()].map(m=>({x:m.rx,y:m.ry,alive:m.alive,isMe:m.id===this.localId,mate:m.team===this.myTeam,color:m.color,revealed:this.revealed.has(m.id)}));this.hud.drawMinimap({x:e.x,y:e.y,a:e.a},this.camMode==="follow"?this.yaw:-Math.PI/2,y,this.zone,this.camMode==="follow")}let g=this.keys.has(Q.keys.scoreboard)||!!(this.touch&&this.touch.showMap);if(g||this._sbShown){if(g&&(!this._sbT||n-this._sbT>300)){this._sbT=n;let y=this.inv.w.map((m,p)=>m?`<span class="${p===this.inv.sl?"sel":""}">${Ne[m[0]].name}: ${m[1]}/${this.inv.am[Ne[m[0]].ammo]}</span>`:"<span>\u2014 vac\xEDo \u2014</span>").join("")+`<span>Vendas: ${this.inv.he.bandage}</span><span>Botiquines: ${this.inv.he.medkit}</span>`+Object.entries(this.inv.am).map(([m,p])=>`<span class="am">${Ji[m].name}: ${p}</span>`).join("");this.hud.showScoreboard(!0,{zone:this.zone,alive:this.aliveCount,time:this.matchTime,inventory:y,players:[...this.players.values()].map(m=>({name:m.name,team:m.team,color:m.color,kills:m.kills||0,alive:m.alive,isMe:m.id===this.localId,mate:m.team===this.myTeam,x:m.rx,y:m.ry,bot:m.bot}))})}else g||this.hud.showScoreboard(!1);this._sbShown=g}}render(){this.renderer.render(this.scene,this.camera)}project(t,e,n){let s=new L(t,e,n).project(this.camera);return s.z>1||s.z<-1?null:{x:(s.x+1)/2*innerWidth,y:(1-s.y)/2*innerHeight}}screenToGround(t,e,n=0){let s=new ft(t/innerWidth*2-1,-(e/innerHeight)*2+1),r=new ja;r.setFromCamera(s,this.camera);let a=new Rn(new L(0,1,0),-n),o=new L;return r.ray.intersectPlane(a,o)?{x:o.x,y:o.z}:null}screenAngleTo(t,e){let n=this._focus(),s=Math.atan2(e-n.y,t-n.x),r=this.camMode==="follow"?this.yaw:-Math.PI/2;return s-r-Math.PI/2}setVictoryPose(){this.me.alive&&(this.me.model.victory=!0,this.effects.confetti(this.pred.x,this.pred.y))}dispose(){window.removeEventListener("keydown",this.h.keydown),window.removeEventListener("keyup",this.h.keyup),window.removeEventListener("mousedown",this.h.mousedown),window.removeEventListener("mouseup",this.h.mouseup),window.removeEventListener("mousemove",this.h.mousemove),window.removeEventListener("wheel",this.h.wheel),window.removeEventListener("contextmenu",this.h.contextmenu),window.removeEventListener("blur",this.h.blur),window.removeEventListener("resize",this.h.resize),document.removeEventListener("pointerlockchange",this.h.plc),this.touch&&(this.touch.dispose(),this.touch=null),document.pointerLockElement&&document.exitPointerLock(),this.hud.hide(),this.world.dispose(),this.effects.dispose(),Ys("pause").classList.add("hidden"),this.renderer.domElement.classList.remove("cursorMode"),this.scene.traverse(t=>{t.geometry&&t.isInstancedMesh})}};function mf(i,t,e){let n=t-i;for(;n>Math.PI;)n-=2*Math.PI;for(;n<-Math.PI;)n+=2*Math.PI;return i+n*e}function gf(i){return String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}Ir();Or();qs();ah();Ki();So();Kc();Pr();yo();po();document.body.classList.add(xn?"touch":"desktop","dev-"+kd);Ur&&document.body.classList.add("tablet");qd();var O=i=>document.getElementById(i),tr=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Xr="islaRoyale.profileId",Do="islaRoyale.name",lh="islaRoyale.token",ch=(new URLSearchParams(location.search).get("sala")||"").trim().toUpperCase().slice(0,5),Pf=!1,hh=!1;function No(i){if(i&&(X.profile=i,i.token))try{(hh?Hs:Ye).setItem(lh,i.token)}catch{}}var X={renderer:null,net:new ao,lobby:null,game:null,profile:null,mode:Ye.getItem("islaRoyale.mode")||"solo",party:null,queue:null,lastResult:null,screen:"boot"};window.__app=X;Promise.resolve().then(()=>(ah(),Rf)).then(i=>{window.__meta=i});function Df(){let i=Wn[Q.quality]||Wn.medium,t=O("game"),e=t;X.renderer&&(e=t.cloneNode(!1),t.replaceWith(e),X.renderer.dispose());let n;try{n=new qi({canvas:e,antialias:i.antialias,powerPreference:"high-performance"})}catch(s){throw O("bootText").textContent="Tu navegador no puede usar WebGL. Actualiza los controladores gr\xE1ficos o usa Chrome / Edge.",s}return n.outputColorSpace=pe,n.shadowMap.enabled=i.shadows,n.shadowMap.type=fc,X.renderer=n,$r(),n}function $r(){let i=Wn[Q.quality]||Wn.medium,t=Math.min(window.devicePixelRatio||1,i.pixelRatio)*Q.renderScale*(X.dynScale||1);X.renderer.setPixelRatio(t),X.renderer.setSize(innerWidth,innerHeight),X.lobby&&X.lobby.resize()}window.addEventListener("resize",$r);var Lf=performance.now(),Ro=0,oh=0;function Uf(i){requestAnimationFrame(Uf);let t=Math.min(.1,(i-Lf)/1e3);Lf=i;try{X.game?(X.game.update(t),X.game.render()):X.lobby&&(X.lobby.update(t),X.lobby.render())}catch(e){console.error(e),un("Error de renderizado: "+e.message)}Ro+=t,oh++,xn&&G_(t),Ro>.5&&(O("fps").textContent=`${Math.round(oh/Ro)} FPS \xB7 ${X.net.ping} ms`,Ro=0,oh=0)}var qr=0,Po=0;function G_(i){if(!X.game||X.game.paused){qr=0,Po=0;return}if(qr+=i,Po++,qr<4)return;let t=Po/qr;qr=0,Po=0;let e=X.dynScale||1;t<26&&e>.55?(X.dynScale=Math.round((e-.1)*100)/100,$r()):t>50&&e<1&&(X.dynScale=Math.min(1,Math.round((e+.05)*100)/100),$r())}function is(i){X.screen=i,O("boot").classList.toggle("hidden",i!=="boot"),O("lobby").classList.toggle("hidden",i!=="lobby"),O("results").classList.toggle("hidden",i!=="results")}function un(i,t=!1){let e=O("errorToast");e.textContent=i,e.classList.remove("hidden"),e.classList.toggle("ok",t),clearTimeout(un.t),un.t=setTimeout(()=>e.classList.add("hidden"),4200)}function Lo(i){xt.click(),O(i).classList.remove("hidden"),i==="settingsModal"&&Uo(),i==="helpModal"&&Y_()}function Io(){document.querySelectorAll(".modalWrap").forEach(i=>{i.id!=="pause"&&i.classList.add("hidden")})}var le=X.net;le.onStatus=(i,t)=>{let e=O("connDot");e.className=i==="online"?"online":i==="offline"?"offline":"",O("connText").textContent=i==="online"?`Conectado \xB7 ${t} ms`:i==="offline"?"Sin conexi\xF3n \u2014 reintentando\u2026":"Conectando\u2026",X.screen==="boot"&&i==="offline"&&(O("bootText").textContent="Despertando el servidor\u2026 puede tardar hasta un minuto la primera vez.")};le.on("__open",()=>{let i=Hs.getItem(Xr)||Ye.getItem(Xr),t=Hs.getItem(lh)||Ye.getItem(lh);le.send({t:"hello",id:i,token:t,name:Ye.getItem(Do)||""})});le.on("__close",()=>{X.game&&(Qs(!1),un("Se perdi\xF3 la conexi\xF3n con el servidor.")),X.queue=null,X.party=null,dh(),uh()});le.on("welcome",i=>{i.duplicate?(hh=!0,Hs.setItem(Xr,i.profile.id)):Hs.getItem(Xr)?hh=!0:Ye.setItem(Xr,i.profile.id),No(i.profile),Ye.getItem(Do)||Ye.setItem(Do,i.profile.name),O("onlineText").textContent=`${i.stats.online} en l\xEDnea`,ko(),X.screen==="boot"&&q_(),i.duplicate&&un("Este navegador ya ten\xEDa una sesi\xF3n abierta: esta pesta\xF1a usa un perfil de invitado."),ch&&!Pf&&(Pf=!0,le.send({t:"partyJoin",code:ch}),history.replaceState(null,"",location.pathname))});le.on("profile",i=>{No(i.profile),ko()});le.on("online",i=>{O("onlineText").textContent=`${i.online} en l\xEDnea \xB7 ${i.matches} partidas`});le.on("error",i=>{un(i.msg),xt.dry()});le.on("party",i=>{X.party=i.party,X.party&&(X.mode=X.party.mode),uh(),Yr()});le.on("queue",i=>{X.queue=i.active?i:null,dh()});le.on("start",i=>X_(i));le.on("s",i=>{X.game&&X.game.onSnapshot(i)});le.on("result",i=>$_(i));le.on("doubled",i=>{No(i.profile),ko(),O("resDouble").classList.add("hidden"),O("results").classList.contains("hidden"),O("resXpList").insertAdjacentHTML("beforeend",`<div class="xpLine bonus"><span>Bonus por anuncio (\xD72)</span><b>+${i.bonus} XP</b></div>`);let t=i.profile;O("resXpBar").style.width=Math.round(t.levelXp/t.levelNeed*100)+"%",O("resLevel").innerHTML=`Nivel ${t.level} \xB7 ${t.levelXp}/${t.levelNeed} XP`,xt.elimination()});async function W_(){Df(),O("bootFill").style.width="30%",X.lobby=new Dr(X.renderer),O("bootFill").style.width="60%",requestAnimationFrame(Uf),Z_(),le.connect(),vf(),eh(X,{showError:un}),O("bootText").textContent="Conectando con el servidor\u2026"}function q_(){O("bootFill").style.width="100%",O("bootText").textContent=ch?"\xA1Te han invitado a un equipo!":"\xA1Listo!",O("bootBtn").classList.remove("hidden"),O("bootBtn").onclick=()=>{xt.init(),xt.click(),xt.startMusic(),Q.fullscreen&&fh(!0),is("lobby")}}function ko(){let i=X.profile;i&&(O("pName").textContent=i.name,O("pLevel").textContent=i.level,O("pXp").style.width=Math.round(i.levelXp/i.levelNeed*100)+"%",O("pXpText").textContent=`${i.levelXp}/${i.levelNeed} XP`,O("avatar").style.background=`radial-gradient(circle at 50% 38%, ${i.outfit.skin} 0 34%, ${i.outfit.topColor} 35%)`,X.lobby&&!sh()&&X.lobby.setOutfit(i.outfit),rh())}function Yr(){document.querySelectorAll("#modes .mode").forEach(t=>{t.classList.toggle("active",t.dataset.mode===X.mode);let e=X.party?X.party.members.length:1;t.disabled=X.party&&X.party.leader!==X.profile?.id||Nn[t.dataset.mode].teamSize<e});let i=X.party&&X.profile&&X.party.leader!==X.profile.id;O("playBtn").disabled=!!i,O("playBtn").textContent=i?"ESPERANDO AL L\xCDDER":"JUGAR",O("playBtn").style.fontSize=i?"22px":""}function uh(){let i=X.party;if(O("partyNone").classList.toggle("hidden",!!i),O("partyIn").classList.toggle("hidden",!i),!i){X.lobby&&X.lobby.setMates([]),Yr();return}O("partyCodeText").textContent=i.code;let t={lobby:"En el lobby",queue:"Buscando",match:"En partida"};O("partyMembers").innerHTML=i.members.map(n=>`<div class="member"><i style="background:${n.outfit.topColor}"></i>${n.id===i.leader?'<span class="crown">\u265B</span>':""}${tr(n.name)}${n.id===X.profile?.id?" (t\xFA)":""}<small>Nv ${n.level} \xB7 ${t[n.state]||""}</small></div>`).join(""),O("partyHint").textContent=`${i.members.length}/4 \xB7 ${Nn[i.mode].name}${i.private?" \xB7 privada":""}`;let e=i.leader===X.profile?.id;O("partyPrivate").checked=!!i.private,O("partyPrivate").disabled=!e,O("partyPrivate").parentElement.classList.toggle("disabled",!e),X.lobby&&X.lobby.setMates(i.members.filter(n=>n.id!==X.profile?.id).map(n=>n.outfit))}function dh(){let i=X.queue;if(O("queueInfo").classList.toggle("hidden",!i),O("playBtn").classList.toggle("hidden",!!i),document.querySelectorAll("#modes .mode").forEach(t=>{i&&(t.disabled=!0)}),!i){Yr();return}O("queueTitle").textContent=`Buscando partida \xB7 ${Nn[i.mode].name}`,O("queueText").textContent=`${i.humans} jugador${i.humans===1?"":"es"} real${i.humans===1?"":"es"} \xB7 empieza en ${i.seconds}s \xB7 el resto ser\xE1n bots`}function If(i=X.mode){if(xt.init(),xt.click(),Q.fullscreen&&fh(!0),le.status!=="online")return un("Sin conexi\xF3n con el servidor.");le.send({t:"queue",mode:i,bots:Q.botLevel})}function X_(i){Io(),X.game&&Qs(!1,!0),is("none"),X.queue=null,dh(),xt.init();try{X.game=new wo(X,i)}catch(t){console.error(t),un("No se pudo iniciar la partida: "+t.message),le.send({t:"leave"}),is("lobby");return}X.currentMode=i.mode,Q.cameraMode==="follow"&&setTimeout(()=>X.game&&X.game.lockPointer(),50)}function Qs(i=!0,t=!1){X.game&&(X.game.dispose(),X.game=null),i&&le.send({t:"leave"}),t||(is("lobby"),xt.startMusic())}function $_(i){X.lastResult=i,i.profile&&(No(i.profile),ko());let t=X.game;t&&(t.ended=!0,i.won&&(t.setVictoryPose(),xt.victory()),setTimeout(()=>{X.game===t&&(i.won?xt.elimination():xt.defeat(),t.resultShown=!0,document.pointerLockElement&&document.exitPointerLock(),O("pause").classList.add("hidden"),Nf(i),is("results"))},i.won?2600:1600))}function Nf(i){let t=O("resTitle");t.textContent=i.won?"\xA1VICTORIA!":"DERROTA",t.className="resTitle"+(i.won?"":" defeat");let e=Nn[i.mode].teamSize>1;O("resSub").textContent=i.won?e?"Tu equipo es el \xFAltimo en pie":`${i.name} es el \xFAltimo superviviente`:`Has quedado en el puesto #${i.placement} de ${e?"los equipos":i.total+" jugadores"}`,O("resPlace").textContent="#"+i.placement,O("resKills").textContent=i.kills,O("resDamage").textContent=i.damage,O("resTime").textContent=kn(i.survived),O("resXpList").innerHTML=i.xpBreakdown.map(([r,a],o)=>`<div class="xpLine" style="animation-delay:${o*.12}s"><span>${tr(r)}</span><b>+${a}</b></div>`).join("")+`<div class="xpLine xpTotal"><span>Total</span><b>+${i.xp} XP</b></div>`+(i.coins?`<div class="xpLine coinsLine"><span>Monedas ganadas</span><b>\u{1FA99} +${i.coins}</b></div>`:""),i.levelRewards&&i.levelRewards.length&&setTimeout(()=>Co(i.levelRewards),1400);let n=i.profile;O("resXpBar").style.width="0%",setTimeout(()=>{O("resXpBar").style.width=Math.round(n.levelXp/n.levelNeed*100)+"%"},300),O("resLevel").innerHTML=i.levelUp?`<span class="up">\xA1Subes al nivel ${i.levelUp}!</span>`:`Nivel ${n.level} \xB7 ${n.levelXp}/${n.levelNeed} XP`,O("resBoard").innerHTML=i.leaderboard.map((r,a)=>`<div class="boardRow ${r.name===i.name?"me":""}"><span>${a+1}. ${tr(r.name)}</span><span>${r.kills} bajas \xB7 ${r.damage} da\xF1o</span></div>`).join(""),O("resSpectate").classList.toggle("hidden",i.won||!X.game||![...X.game.players.values()].some(r=>r.alive)),O("resDouble").classList.toggle("hidden",!(js()&&i.xp>0)),O("resDouble").disabled=!1,O("resDouble").onclick=()=>Gr("doublexp",null,O("resDouble"));let s=X.party&&X.party.leader!==X.profile.id;O("resAgain").textContent=s?"Volver con el equipo":"Jugar otra partida"}function Y_(){let i=Q.keys;if(xn){O("helpKeys").innerHTML=[["Joystick","Moverse (ll\xE9valo al borde para correr)"],["Deslizar a la derecha","Mover la c\xE1mara"],["\u25CE","Disparar (mant\xE9n y desliza para apuntar)"],["\u231C\u231F","Apuntar"],["\u21BB","Recargar"],["\u270B","Recoger"],["\u21C8","Saltar"],["\xBB","Correr siempre"],["Armas","Toca un arma para cambiar"],["\u{1FA79} / \u271A","Toca para curarte"],["Minimapa","Mapa e informaci\xF3n de partida"],["\u275A\u275A","Pausa"]].map(([t,e])=>`<li><kbd>${tr(t)}</kbd> ${e}</li>`).join("");return}O("helpKeys").innerHTML=[[`${Ae(i.forward)} ${Ae(i.left)} ${Ae(i.back)} ${Ae(i.right)}`,"Moverse"],["Rat\xF3n","C\xE1mara y punter\xEDa"],["Clic izq.","Disparar"],["Clic der.","Apuntar"],[Ae(i.reload),"Recargar"],[Ae(i.interact),"Recoger"],[Ae(i.jump),"Saltar"],[Ae(i.sprint),"Correr"],[`${Ae(i.slot1)} / ${Ae(i.slot2)}`,"Cambiar arma"],[`${Ae(i.bandage)} / ${Ae(i.medkit)}`,"Curarse"],[Ae(i.scoreboard),"Informaci\xF3n de partida"],["Esc","Pausa"]].map(([t,e])=>`<li><kbd>${tr(t)}</kbd> ${e}</li>`).join("")}var Ri=null;function Uo(){O("sQuality").value=Q.quality;let i=[1,.85,.7,.5],t=Wn[Q.quality]||Wn.medium,e=Math.min(window.devicePixelRatio||1,t.pixelRatio);O("sScale").innerHTML=i.map(n=>`<option value="${n}">${Math.round(innerWidth*e*n)} \xD7 ${Math.round(innerHeight*e*n)}${n===1?" (nativa)":` (${Math.round(n*100)}%)`}</option>`).join(""),O("sScale").value=String(Q.renderScale),O("sFull").checked=!!document.fullscreenElement,O("sFps").checked=Q.showFps,O("sMaster").value=Q.masterVol,O("sMusic").value=Q.musicVol,O("sSfx").value=Q.sfxVol,O("sSens").value=Q.sensitivity,O("sSensOut").textContent=Q.sensitivity.toFixed(2),O("sInvert").checked=Q.invertY,O("sTSens").value=Q.touchSens,O("sTSensOut").textContent=Q.touchSens.toFixed(2),O("sTSize").value=Q.touchBtnScale,O("sTSizeOut").textContent=Math.round(Q.touchBtnScale*100)+"%",O("sTOp").value=Q.touchOpacity,O("sTOpOut").textContent=Math.round(Q.touchOpacity*100)+"%",O("sTAssist").checked=Q.touchAimAssist,O("sTAutoRun").checked=Q.touchAutoSprint,O("sTAdsToggle").checked=Q.touchAdsToggle,O("sTLeftFire").checked=Q.touchLeftFire,xn&&document.querySelector(".tab.active.desktopOnly")&&document.querySelector('.tab[data-tab="tTouch"]').click(),O("sCamMode").value=Q.cameraMode,O("sCamDist").value=Q.cameraDistance,O("sCamSmooth").value=Q.cameraSmoothing,O("sCamSmoothOut").textContent=Math.round(Q.cameraSmoothing*100)+"%",O("sFov").value=Q.fov,O("sFovOut").textContent=Q.fov+"\xB0",O("keyList").innerHTML=Bd.map(([n,s])=>`<div class="keyRow"><span>${s}</span><button class="keyBtn" data-action="${n}">${tr(Ae(Q.keys[n]))}</button></div>`).join(""),document.querySelectorAll(".keyBtn").forEach(n=>n.onclick=()=>{document.querySelectorAll(".keyBtn").forEach(s=>s.classList.remove("listening")),Ri=n.dataset.action,n.classList.add("listening"),n.textContent="Pulsa una tecla\u2026"})}window.addEventListener("keydown",i=>{if(Ri){if(i.preventDefault(),i.stopImmediatePropagation(),i.code!=="Escape"){let t=Object.keys(Q.keys).find(e=>Q.keys[e]===i.code&&e!==Ri);t&&(Q.keys[t]=Q.keys[Ri]),Q.keys[Ri]=i.code,ln()}Ri=null,Uo()}},!0);function fh(i){try{i&&!document.fullscreenElement&&document.documentElement.requestFullscreen?document.documentElement.requestFullscreen({navigationUI:"hide"}).then(()=>{xn&&!Ur&&screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})}).catch(()=>{}):!i&&document.fullscreenElement&&document.exitFullscreen().catch(()=>{})}catch{}}mo(()=>{O("fps").classList.toggle("hidden",!Q.showFps),X.game&&(X.game.camera.fov=Q.fov,X.game.camera.updateProjectionMatrix(),X.game.hud.renderKeys())});function Z_(){document.addEventListener("click",r=>{r.target.closest("button")&&xt.click()},!0),window.addEventListener("keydown",r=>{r.code==="Escape"&&!X.game&&(Wr(),Io())}),document.querySelectorAll("[data-open]").forEach(r=>r.onclick=()=>Lo(r.dataset.open)),O("btnSettingsTop").onclick=()=>Lo("settingsModal"),document.querySelectorAll(".modal .close").forEach(r=>r.onclick=()=>{Io(),Ri=null}),document.querySelectorAll(".modalWrap").forEach(r=>r.addEventListener("mousedown",a=>{a.target===r&&r.id!=="pause"&&(Io(),Ri=null)})),document.querySelectorAll("#modes .mode").forEach(r=>r.onclick=()=>{X.mode=r.dataset.mode,Ye.setItem("islaRoyale.mode",X.mode),X.party&&le.send({t:"partyMode",mode:X.mode}),Yr()}),O("botLevel").value=Q.botLevel,O("botLevel").onchange=()=>{Q.botLevel=O("botLevel").value,ln()},O("playBtn").onclick=()=>If(),O("cancelBtn").onclick=()=>le.send({t:"cancel"}),O("partyCreate").onclick=()=>le.send({t:"partyCreate"}),O("partyJoin").onclick=()=>{let r=O("partyCode").value.trim();r&&le.send({t:"partyJoin",code:r})},O("partyCode").onkeydown=r=>{r.key==="Enter"&&O("partyJoin").click()},O("partyLeave").onclick=()=>le.send({t:"partyLeave"}),O("partyPrivate").onchange=()=>le.send({t:"partyPrivate",v:O("partyPrivate").checked}),O("partyInvite").onclick=()=>{let r=`${ro}/?sala=${X.party?.code||""}`,a=()=>un("Enlace copiado: "+r+" \u2014 p\xE9galo en WhatsApp o Discord",!0);navigator.clipboard?navigator.clipboard.writeText(r).then(a,()=>window.prompt("Copia este enlace:",r)):window.prompt("Copia este enlace:",r)},O("partyCopy").onclick=()=>{navigator.clipboard?.writeText(X.party?.code||"").catch(()=>{}),un("C\xF3digo copiado: "+(X.party?.code||""))},O("editName").onclick=()=>{O("nameInput").value=X.profile?.name||"",O("nameModal").classList.remove("hidden"),O("nameInput").focus()},O("nameSave").onclick=()=>{let r=O("nameInput").value.trim();if(r.length<2)return un("El nombre debe tener al menos 2 caracteres.");le.send({t:"setName",name:r}),Ye.setItem(Do,r),O("nameModal").classList.add("hidden")},O("nameInput").onkeydown=r=>{r.key==="Enter"&&O("nameSave").click()};let i=null;window.addEventListener("pointerdown",r=>{!X.game&&r.target&&r.target.id==="game"&&r.isPrimary&&(i=r.clientX,X.lobby.dragging=!0)}),window.addEventListener("pointermove",r=>{i!==null&&!X.game&&r.isPrimary&&(X.lobby.drag(r.clientX-i),i=r.clientX)});let t=()=>{i=null,X.lobby&&(X.lobby.dragging=!1)};window.addEventListener("pointerup",t),window.addEventListener("pointercancel",t),document.querySelectorAll(".tab").forEach(r=>r.onclick=()=>{document.querySelectorAll(".tab").forEach(a=>a.classList.toggle("active",a===r)),document.querySelectorAll(".tabBody").forEach(a=>a.classList.toggle("hidden",a.id!==r.dataset.tab))}),O("sLang").value=go,O("sLang").onchange=()=>Gd(O("sLang").value),O("sQuality").onchange=()=>{Q.quality=O("sQuality").value,ln(),X.game?un("La nueva calidad se aplicar\xE1 en la pr\xF3xima partida."):(Df(),J_()),Uo()},O("sScale").onchange=()=>{Q.renderScale=Number(O("sScale").value),ln(),$r()},O("sFull").onchange=()=>{Q.fullscreen=O("sFull").checked,ln(),fh(Q.fullscreen)},O("sFps").onchange=()=>{Q.showFps=O("sFps").checked,ln()};let e=(r,a,o,l)=>{O(r).oninput=()=>{Q[a]=Number(O(r).value),o&&(O(o).textContent=l(Q[a])),ln()}};e("sMaster","masterVol"),e("sMusic","musicVol"),e("sSfx","sfxVol"),e("sSens","sensitivity","sSensOut",r=>r.toFixed(2)),e("sCamDist","cameraDistance"),e("sCamSmooth","cameraSmoothing","sCamSmoothOut",r=>Math.round(r*100)+"%"),e("sFov","fov","sFovOut",r=>r+"\xB0"),O("sInvert").onchange=()=>{Q.invertY=O("sInvert").checked,ln()};let n=()=>{X.game&&X.game.touch&&X.game.touch.applyLayout()};e("sTSens","touchSens","sTSensOut",r=>r.toFixed(2)),e("sTSize","touchBtnScale","sTSizeOut",r=>Math.round(r*100)+"%"),e("sTOp","touchOpacity","sTOpOut",r=>Math.round(r*100)+"%");for(let r of["sTSize","sTOp"]){let a=O(r).oninput;O(r).oninput=()=>{a(),n()}}let s=(r,a)=>{O(r).onchange=()=>{Q[a]=O(r).checked,ln(),n()}};s("sTAssist","touchAimAssist"),s("sTAutoRun","touchAutoSprint"),s("sTAdsToggle","touchAdsToggle"),s("sTLeftFire","touchLeftFire"),O("sTEdit").onclick=()=>{O("settingsModal").classList.add("hidden"),Xd(()=>{n(),Lo("settingsModal")})},O("sCamMode").onchange=()=>{Q.cameraMode=O("sCamMode").value,ln(),X.game&&(X.renderer.domElement.classList.toggle("cursorMode",Q.cameraMode==="cursor"),Q.cameraMode==="cursor"&&document.pointerLockElement&&document.exitPointerLock())},O("resetKeys").onclick=()=>{Q.keys=structuredClone(Ws.keys),Q.sensitivity=Ws.sensitivity,Q.invertY=!1,ln(),Uo()},document.addEventListener("fullscreenchange",()=>{O("sFull").checked=!!document.fullscreenElement}),O("resumeBtn").onclick=()=>X.game&&X.game.togglePause(!1),O("pauseSettings").onclick=()=>Lo("settingsModal"),O("leaveBtn").onclick=()=>{Qs(!0)},O("resLobby").onclick=()=>jc("volver-lobby",()=>Qs(!0)),O("resSpectate").onclick=()=>{is("none"),X.game&&(X.game.resultShown=!1,X.game.pickSpectate(X.game.spectateId))},O("specResults").onclick=()=>{X.lastResult&&X.game?.ended?(X.game.resultShown=!0,Nf(X.lastResult),is("results")):un("Los resultados aparecer\xE1n al terminar tu participaci\xF3n.")},O("specLobby").onclick=()=>Qs(!0),O("resAgain").onclick=()=>jc("otra-partida",()=>{let r=X.currentMode||X.mode;Qs(!0),(!X.party||X.party.leader===X.profile.id)&&setTimeout(()=>If(r),150)}),O("fps").classList.toggle("hidden",!Q.showFps)}function J_(){X.lobby=new Dr(X.renderer),X.profile&&X.lobby.setOutfit(X.profile.outfit),uh()}ro!==location.origin&&(O("legalLink").href=ro+"/privacidad.html");Yr();W_().catch(i=>{console.error(i),O("bootText").textContent="Error al iniciar: "+i.message});
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
