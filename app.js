var Kd=Object.defineProperty;var cn=(i,t,e)=>()=>{if(e)throw e[0];try{return i&&(t=i(i=0)),t}catch(n){throw e=[n],n}};var jd=(i,t)=>{for(var e in t)Kd(i,e,{get:t[e],enumerable:!0})};function Ns(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function Ve(i,t,e){return Math.max(t,Math.min(e,i))}function Kf(i,t){return(i%t+t)%t}function Eo(i,t,e){return(1-e)*i+e*t}function Ch(i){return(i&i-1)===0&&i!==0}function rl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $s(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function ku(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function _a(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jf(){let i=_a("canvas");return i.style.display="block",i}function tr(i){i in Ph||(Ph[i]=!0,console.warn(i))}function bs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ao(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Ro(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ya.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Po(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ci.fromArray(i,r);let o=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=t.dot(Ci),c=e.dot(Ci),h=n.dot(Ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function Bo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}function dp(i,t,e,n,s,r,a,o){let l;if(t.side===sn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===mi,o),l===null)return null;ea.copy(o),ea.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ea);return c<e.near||c>e.far?null:{distance:c,point:ea.clone(),object:i}}function na(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,hs),i.getVertexPosition(l,us),i.getVertexPosition(c,ds);let h=dp(i,t,e,n,hs,us,ds,ta);if(h){s&&(Kr.fromBufferAttribute(s,o),jr.fromBufferAttribute(s,l),Qr.fromBufferAttribute(s,c),h.uv=xs.getInterpolation(ta,hs,us,ds,Kr,jr,Qr,new ft)),r&&(Kr.fromBufferAttribute(r,o),jr.fromBufferAttribute(r,l),Qr.fromBufferAttribute(r,c),h.uv1=xs.getInterpolation(ta,hs,us,ds,Kr,jr,Qr,new ft),h.uv2=h.uv1),a&&(Gh.fromBufferAttribute(a,o),Wh.fromBufferAttribute(a,l),Xh.fromBufferAttribute(a,c),h.normal=xs.getInterpolation(ta,hs,us,ds,Gh,Wh,Xh,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new L,materialIndex:0};xs.getNormal(hs,us,ds,u.normal),h.face=u}return h}function Rs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Qe(i){let t={};for(let e=0;e<i.length;e++){let n=Rs(i[e]);for(let s in n)t[s]=n[s]}return t}function fp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Fu(i){return i.getRenderTarget()===null?i.outputColorSpace:oe.workingColorSpace}function Bu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function yp(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,d=c.usage,p=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){let d=h.array,p=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),p.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let x=0,m=g.length;x<m;x++){let f=g[x];e?i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}function Q0(i,t,e,n,s,r,a){let o=new Pt(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(m,f){let v=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?e:t).get(_)),_===null?x(o,l):_&&_.isColor&&(x(_,1),v=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Ba)?(h===void 0&&(h=new wt(new de(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Rs(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=oe.getTransfer(_.colorSpace)!==fe,(u!==_||d!==_.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new wt(new zi(2,2),new Rn({name:"BackgroundMaterial",uniforms:Rs(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=oe.getTransfer(_.colorSpace)!==fe,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,f){m.getRGB(sa,Fu(i)),n.buffers.color.setClear(sa.r,sa.g,sa.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:g}}function tg(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(I,O,q,J,Z){let $=!1;if(a){let Q=x(J,q,O);c!==Q&&(c=Q,p(c.object)),$=f(I,J,q,Z),$&&v(I,J,q,Z)}else{let Q=O.wireframe===!0;(c.geometry!==J.id||c.program!==q.id||c.wireframe!==Q)&&(c.geometry=J.id,c.program=q.id,c.wireframe=Q,$=!0)}Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,C(I,O,q,J),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(I){return n.isWebGL2?i.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?i.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function x(I,O,q){let J=q.wireframe===!0,Z=o[I.id];Z===void 0&&(Z={},o[I.id]=Z);let $=Z[O.id];$===void 0&&($={},Z[O.id]=$);let Q=$[J];return Q===void 0&&(Q=m(d()),$[J]=Q),Q}function m(I){let O=[],q=[],J=[];for(let Z=0;Z<s;Z++)O[Z]=0,q[Z]=0,J[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:q,attributeDivisors:J,object:I,attributes:{},index:null}}function f(I,O,q,J){let Z=c.attributes,$=O.attributes,Q=0,it=q.getAttributes();for(let lt in it)if(it[lt].location>=0){let K=Z[lt],ot=$[lt];if(ot===void 0&&(lt==="instanceMatrix"&&I.instanceMatrix&&(ot=I.instanceMatrix),lt==="instanceColor"&&I.instanceColor&&(ot=I.instanceColor)),K===void 0||K.attribute!==ot||ot&&K.data!==ot.data)return!0;Q++}return c.attributesNum!==Q||c.index!==J}function v(I,O,q,J){let Z={},$=O.attributes,Q=0,it=q.getAttributes();for(let lt in it)if(it[lt].location>=0){let K=$[lt];K===void 0&&(lt==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),lt==="instanceColor"&&I.instanceColor&&(K=I.instanceColor));let ot={};ot.attribute=K,K&&K.data&&(ot.data=K.data),Z[lt]=ot,Q++}c.attributes=Z,c.attributesNum=Q,c.index=J}function _(){let I=c.newAttributes;for(let O=0,q=I.length;O<q;O++)I[O]=0}function S(I){R(I,0)}function R(I,O){let q=c.newAttributes,J=c.enabledAttributes,Z=c.attributeDivisors;q[I]=1,J[I]===0&&(i.enableVertexAttribArray(I),J[I]=1),Z[I]!==O&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,O),Z[I]=O)}function T(){let I=c.newAttributes,O=c.enabledAttributes;for(let q=0,J=O.length;q<J;q++)O[q]!==I[q]&&(i.disableVertexAttribArray(q),O[q]=0)}function b(I,O,q,J,Z,$,Q){Q===!0?i.vertexAttribIPointer(I,O,q,Z,$):i.vertexAttribPointer(I,O,q,J,Z,$)}function C(I,O,q,J){if(n.isWebGL2===!1&&(I.isInstancedMesh||J.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let Z=J.attributes,$=q.getAttributes(),Q=O.defaultAttributeValues;for(let it in $){let lt=$[it];if(lt.location>=0){let X=Z[it];if(X===void 0&&(it==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),it==="instanceColor"&&I.instanceColor&&(X=I.instanceColor)),X!==void 0){let K=X.normalized,ot=X.itemSize,Tt=e.get(X);if(Tt===void 0)continue;let St=Tt.buffer,zt=Tt.type,Vt=Tt.bytesPerElement,Dt=n.isWebGL2===!0&&(zt===i.INT||zt===i.UNSIGNED_INT||X.gpuType===Eu);if(X.isInterleavedBufferAttribute){let ne=X.data,B=ne.stride,Je=X.offset;if(ne.isInstancedInterleavedBuffer){for(let Rt=0;Rt<lt.locationSize;Rt++)R(lt.location+Rt,ne.meshPerAttribute);I.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Rt=0;Rt<lt.locationSize;Rt++)S(lt.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,St);for(let Rt=0;Rt<lt.locationSize;Rt++)b(lt.location+Rt,ot/lt.locationSize,zt,K,B*Vt,(Je+ot/lt.locationSize*Rt)*Vt,Dt)}else{if(X.isInstancedBufferAttribute){for(let ne=0;ne<lt.locationSize;ne++)R(lt.location+ne,X.meshPerAttribute);I.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ne=0;ne<lt.locationSize;ne++)S(lt.location+ne);i.bindBuffer(i.ARRAY_BUFFER,St);for(let ne=0;ne<lt.locationSize;ne++)b(lt.location+ne,ot/lt.locationSize,zt,K,ot*Vt,ot/lt.locationSize*ne*Vt,Dt)}}else if(Q!==void 0){let K=Q[it];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(lt.location,K);break;case 3:i.vertexAttrib3fv(lt.location,K);break;case 4:i.vertexAttrib4fv(lt.location,K);break;default:i.vertexAttrib1fv(lt.location,K)}}}}T()}function y(){k();for(let I in o){let O=o[I];for(let q in O){let J=O[q];for(let Z in J)g(J[Z].object),delete J[Z];delete O[q]}delete o[I]}}function M(I){if(o[I.id]===void 0)return;let O=o[I.id];for(let q in O){let J=O[q];for(let Z in J)g(J[Z].object),delete J[Z];delete O[q]}delete o[I.id]}function D(I){for(let O in o){let q=o[O];if(q[I.id]===void 0)continue;let J=q[I.id];for(let Z in J)g(J[Z].object),delete J[Z];delete q[I.id]}}function k(){j(),h=!0,c!==l&&(c=l,p(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:k,resetDefaultState:j,dispose:y,releaseStatesOfGeometry:M,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:S,disableUnusedAttributes:T}}function eg(i,t,e,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function ng(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,S=a||t.has("OES_texture_float"),R=_&&S,T=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:T}}function ig(i){let t=this,e=null,n=0,s=!1,r=!1,a=new En,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,_=v*4,S=f.clippingState||null;l.value=S,S=h(g,d,_,p);for(let R=0;R!==_;++R)S[R]=e[R];f.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let f=p+x*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,S=p;_!==x;++_,S+=4)a.copy(u[_]).applyMatrix4(v,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function sg(i){let t=new WeakMap;function e(a,o){return o===tl?a.mapping=ws:o===el&&(a.mapping=Es),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===tl||o===el)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new cl(l.height/2);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}function rg(i){let t=[],e=[],n=[],s=i,r=i-_s+1+qh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-_s?l=qh[a-i+_s-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,v=new Float32Array(x*g*p),_=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let T=0;T<p;T++){let b=T%3*2/3-1,C=T>2?0:-1,y=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];v.set(y,x*g*T),_.set(d,m*g*T);let M=[T,T,T,T,T,T];S.set(M,f*g*T)}let R=new Ge;R.setAttribute("position",new dn(v,x)),R.setAttribute("uv",new dn(_,m)),R.setAttribute("faceIndex",new dn(S,f)),t.push(R),s>_s&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Zh(i,t,e){let n=new jn(i,t,e);return n.texture.mapping=Ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ra(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ag(i,t,e){let n=new Float32Array(Ui),s=new L(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Jh(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Kh(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Yl(){return`

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
	`}function og(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===tl||l===el,h=l===ws||l===Es;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Ra(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Ra(i));let d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function lg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function cg(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let m=0,f=x.length;m<f;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let v=p.array;x=p.version;for(let _=0,S=v.length;_<S;_+=3){let R=v[_+0],T=v[_+1],b=v[_+2];d.push(R,T,T,b,b,R)}}else if(g!==void 0){let v=g.array;x=g.version;for(let _=0,S=v.length/3-1;_<S;_+=3){let R=_+0,T=_+1,b=_+2;d.push(R,T,T,b,b,R)}}else return;let m=new(ku(d)?wa:Sa)(d,1);m.version=x;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function hg(i,t,e,n){let s=n.isWebGL2,r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,g){i.drawElements(r,g,o,p*l),e.update(g,r,1)}function u(p,g,x){if(x===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,o,p*l,x),e.update(g,r,x)}function d(p,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<x;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,x);let f=0;for(let v=0;v<x;v++)f+=g[v];e.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function ug(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function dg(i,t){return i[0]-t[0]}function fg(i,t){return Math.abs(t[1])-Math.abs(i[1])}function pg(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new Be,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,x=r.get(h);if(x===void 0||x.count!==g){let I=function(){k.dispose(),r.delete(h),h.removeEventListener("dispose",I)};x!==void 0&&x.texture.dispose();let v=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],b=h.morphAttributes.color||[],C=0;v===!0&&(C=1),_===!0&&(C=2),S===!0&&(C=3);let y=h.attributes.position.count*C,M=1;y>t.maxTextureSize&&(M=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let D=new Float32Array(y*M*4*g),k=new Ma(D,y,M,g);k.type=ui,k.needsUpdate=!0;let j=C*4;for(let O=0;O<g;O++){let q=R[O],J=T[O],Z=b[O],$=y*M*4*O;for(let Q=0;Q<q.count;Q++){let it=Q*j;v===!0&&(a.fromBufferAttribute(q,Q),D[$+it+0]=a.x,D[$+it+1]=a.y,D[$+it+2]=a.z,D[$+it+3]=0),_===!0&&(a.fromBufferAttribute(J,Q),D[$+it+4]=a.x,D[$+it+5]=a.y,D[$+it+6]=a.z,D[$+it+7]=0),S===!0&&(a.fromBufferAttribute(Z,Q),D[$+it+8]=a.x,D[$+it+9]=a.y,D[$+it+10]=a.z,D[$+it+11]=Z.itemSize===4?a.w:1)}}x={count:g,texture:k,size:new ft(y,M)},r.set(h,x),h.addEventListener("dispose",I)}let m=0;for(let v=0;v<d.length;v++)m+=d[v];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",f),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let p=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==p){g=[];for(let _=0;_<p;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<p;_++){let S=g[_];S[0]=_,S[1]=d[_]}g.sort(fg);for(let _=0;_<8;_++)_<p&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(dg);let x=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let _=0;_<8;_++){let S=o[_],R=S[0],T=S[1];R!==Number.MAX_SAFE_INTEGER&&T?(x&&h.getAttribute("morphTarget"+_)!==x[R]&&h.setAttribute("morphTarget"+_,x[R]),m&&h.getAttribute("morphNormal"+_)!==m[R]&&h.setAttribute("morphNormal"+_,m[R]),s[_]=T,f+=T):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let v=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function mg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}function ks(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=jh[s];if(r===void 0&&(r=new Float32Array(s),jh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ha(i,t){let e=Qh[t];e===void 0&&(e=new Int32Array(t),Qh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function gg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function _g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function vg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;nu.set(n),i.uniformMatrix2fv(this.addr,!1,nu),De(e,n)}}function Mg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;eu.set(n),i.uniformMatrix3fv(this.addr,!1,eu),De(e,n)}}function bg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;tu.set(n),i.uniformMatrix4fv(this.addr,!1,tu),De(e,n)}}function Sg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function Eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function Tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function Ag(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function Cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function Pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function Lg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Hu:zu;e.setTexture2D(t||r,s)}function Ig(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Gu,s)}function Dg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Wu,s)}function Ug(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Vu,s)}function Ng(i){switch(i){case 5126:return gg;case 35664:return xg;case 35665:return _g;case 35666:return yg;case 35674:return vg;case 35675:return Mg;case 35676:return bg;case 5124:case 35670:return Sg;case 35667:case 35671:return wg;case 35668:case 35672:return Eg;case 35669:case 35673:return Tg;case 5125:return Ag;case 36294:return Rg;case 36295:return Cg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Ug}}function kg(i,t){i.uniform1fv(this.addr,t)}function Og(i,t){let e=ks(t,this.size,2);i.uniform2fv(this.addr,e)}function Fg(i,t){let e=ks(t,this.size,3);i.uniform3fv(this.addr,e)}function Bg(i,t){let e=ks(t,this.size,4);i.uniform4fv(this.addr,e)}function zg(i,t){let e=ks(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Hg(i,t){let e=ks(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Vg(i,t){let e=ks(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Gg(i,t){i.uniform1iv(this.addr,t)}function Wg(i,t){i.uniform2iv(this.addr,t)}function Xg(i,t){i.uniform3iv(this.addr,t)}function qg(i,t){i.uniform4iv(this.addr,t)}function $g(i,t){i.uniform1uiv(this.addr,t)}function Yg(i,t){i.uniform2uiv(this.addr,t)}function Zg(i,t){i.uniform3uiv(this.addr,t)}function Jg(i,t){i.uniform4uiv(this.addr,t)}function Kg(i,t,e){let n=this.cache,s=t.length,r=Ha(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||zu,r[a])}function jg(i,t,e){let n=this.cache,s=t.length,r=Ha(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Gu,r[a])}function Qg(i,t,e){let n=this.cache,s=t.length,r=Ha(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Wu,r[a])}function tx(i,t,e){let n=this.cache,s=t.length,r=Ha(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Vu,r[a])}function ex(i){switch(i){case 5126:return kg;case 35664:return Og;case 35665:return Fg;case 35666:return Bg;case 35674:return zg;case 35675:return Hg;case 35676:return Vg;case 5124:case 35670:return Gg;case 35667:case 35671:return Wg;case 35668:case 35672:return Xg;case 35669:case 35673:return qg;case 5125:return $g;case 36294:return Yg;case 36295:return Zg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Kg;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return Qg;case 36289:case 36303:case 36311:case 36292:return tx}}function iu(i,t){i.seq.push(t),i.map[t.id]=t}function nx(i,t,e){let n=i.name,s=n.length;for($o.lastIndex=0;;){let r=$o.exec(n),a=$o.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){iu(e,c===void 0?new hl(o,i,t):new ul(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new dl(o),iu(e,u)),e=u}}}function su(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}function rx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function ax(i){let t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(i),n;switch(t===e?n="":t===ga&&e===ma?n="LinearDisplayP3ToLinearSRGB":t===ma&&e===ga&&(n="LinearSRGBToLinearDisplayP3"),i){case Kn:case za:return[n,"LinearTransferOETF"];case pe:case $l:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ru(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+rx(i.getShaderSource(t),a)}else return s}function ox(i,t){let e=ax(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function lx(i,t){let e;switch(t){case Tf:e="Linear";break;case Af:e="Reinhard";break;case Rf:e="OptimizedCineon";break;case Cf:e="ACESFilmic";break;case Lf:e="AgX";break;case Pf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function cx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ys).join(`
`)}function hx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ys).join(`
`)}function ux(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function dx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ys(i){return i!==""}function au(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ou(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function fl(i){return i.replace(fx,mx)}function mx(i,t){let e=Wt[t];if(e===void 0){let n=px.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return fl(e)}function lu(i){return i.replace(gx,xx)}function xx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cu(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function _x(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Su?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Gl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function yx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ws:case Es:t="ENVMAP_TYPE_CUBE";break;case Ba:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vx(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Es&&(t="ENVMAP_MODE_REFRACTION"),t}function Mx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xl:t="ENVMAP_BLENDING_MULTIPLY";break;case wf:t="ENVMAP_BLENDING_MIX";break;case Ef:t="ENVMAP_BLENDING_ADD";break}return t}function bx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Sx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=_x(e),c=yx(e),h=vx(e),u=Mx(e),d=bx(e),p=e.isWebGL2?"":cx(e),g=hx(e),x=ux(r),m=s.createProgram(),f,v,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ys).join(`
`),f.length>0&&(f+=`
`),v=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ys).join(`
`),v.length>0&&(v+=`
`)):(f=[cu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),v=[p,cu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?Wt.tonemapping_pars_fragment:"",e.toneMapping!==fi?lx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,ox("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ys).join(`
`)),a=fl(a),a=au(a,e),a=ou(a,e),o=fl(o),o=au(o,e),o=ou(o,e),a=lu(a),o=lu(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let S=_+f+a,R=_+v+o,T=su(s,s.VERTEX_SHADER,S),b=su(s,s.FRAGMENT_SHADER,R);s.attachShader(m,T),s.attachShader(m,b),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function C(k){if(i.debug.checkShaderErrors){let j=s.getProgramInfoLog(m).trim(),I=s.getShaderInfoLog(T).trim(),O=s.getShaderInfoLog(b).trim(),q=!0,J=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,T,b);else{let Z=ru(s,T,"vertex"),$=ru(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+Z+`
`+$)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(I===""||O==="")&&(J=!1);J&&(k.diagnostics={runnable:q,programLog:j,vertexShader:{log:I,prefix:f},fragmentShader:{log:O,prefix:v}})}s.deleteShader(T),s.deleteShader(b),y=new Ss(s,m),M=dx(s,m)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(m,ix)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sx++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=b,this}function Ex(i,t,e,n,s,r,a){let o=new cr,l=new pl,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===0?"uv":`uv${y}`}function m(y,M,D,k,j){let I=k.fog,O=j.geometry,q=y.isMeshStandardMaterial?k.environment:null,J=(y.isMeshStandardMaterial?e:t).get(y.envMap||q),Z=J&&J.mapping===Ba?J.image.height:null,$=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let Q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,it=Q!==void 0?Q.length:0,lt=0;O.morphAttributes.position!==void 0&&(lt=1),O.morphAttributes.normal!==void 0&&(lt=2),O.morphAttributes.color!==void 0&&(lt=3);let X,K,ot,Tt;if($){let Ke=Nn[$];X=Ke.vertexShader,K=Ke.fragmentShader}else X=y.vertexShader,K=y.fragmentShader,l.update(y),ot=l.getVertexShaderID(y),Tt=l.getFragmentShaderID(y);let St=i.getRenderTarget(),zt=j.isInstancedMesh===!0,Vt=j.isBatchedMesh===!0,Dt=!!y.map,ne=!!y.matcap,B=!!J,Je=!!y.aoMap,Rt=!!y.lightMap,Ft=!!y.bumpMap,yt=!!y.normalMap,xe=!!y.displacementMap,Xt=!!y.emissiveMap,A=!!y.metalnessMap,w=!!y.roughnessMap,H=y.anisotropy>0,nt=y.clearcoat>0,et=y.iridescence>0,st=y.sheen>0,vt=y.transmission>0,dt=H&&!!y.anisotropyMap,gt=nt&&!!y.clearcoatMap,It=nt&&!!y.clearcoatNormalMap,qt=nt&&!!y.clearcoatRoughnessMap,tt=et&&!!y.iridescenceMap,ae=et&&!!y.iridescenceThicknessMap,Kt=st&&!!y.sheenColorMap,Ot=st&&!!y.sheenRoughnessMap,At=!!y.specularMap,xt=!!y.specularColorMap,Gt=!!y.specularIntensityMap,re=vt&&!!y.transmissionMap,Me=vt&&!!y.thicknessMap,Yt=!!y.gradientMap,rt=!!y.alphaMap,P=y.alphaTest>0,ct=!!y.alphaHash,ht=!!y.extensions,Ut=!!O.attributes.uv1,Ct=!!O.attributes.uv2,ce=!!O.attributes.uv3,he=fi;return y.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(he=i.toneMapping),{isWebGL2:h,shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:X,fragmentShader:K,defines:y.defines,customVertexShaderID:ot,customFragmentShaderID:Tt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Vt,instancing:zt,instancingColor:zt&&j.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:St===null?i.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Kn,map:Dt,matcap:ne,envMap:B,envMapMode:B&&J.mapping,envMapCubeUVHeight:Z,aoMap:Je,lightMap:Rt,bumpMap:Ft,normalMap:yt,displacementMap:d&&xe,emissiveMap:Xt,normalMapObjectSpace:yt&&y.normalMapType===Gf,normalMapTangentSpace:yt&&y.normalMapType===Du,metalnessMap:A,roughnessMap:w,anisotropy:H,anisotropyMap:dt,clearcoat:nt,clearcoatMap:gt,clearcoatNormalMap:It,clearcoatRoughnessMap:qt,iridescence:et,iridescenceMap:tt,iridescenceThicknessMap:ae,sheen:st,sheenColorMap:Kt,sheenRoughnessMap:Ot,specularMap:At,specularColorMap:xt,specularIntensityMap:Gt,transmission:vt,transmissionMap:re,thicknessMap:Me,gradientMap:Yt,opaque:y.transparent===!1&&y.blending===Ms,alphaMap:rt,alphaTest:P,alphaHash:ct,combine:y.combine,mapUv:Dt&&x(y.map.channel),aoMapUv:Je&&x(y.aoMap.channel),lightMapUv:Rt&&x(y.lightMap.channel),bumpMapUv:Ft&&x(y.bumpMap.channel),normalMapUv:yt&&x(y.normalMap.channel),displacementMapUv:xe&&x(y.displacementMap.channel),emissiveMapUv:Xt&&x(y.emissiveMap.channel),metalnessMapUv:A&&x(y.metalnessMap.channel),roughnessMapUv:w&&x(y.roughnessMap.channel),anisotropyMapUv:dt&&x(y.anisotropyMap.channel),clearcoatMapUv:gt&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:It&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qt&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&x(y.sheenRoughnessMap.channel),specularMapUv:At&&x(y.specularMap.channel),specularColorMapUv:xt&&x(y.specularColorMap.channel),specularIntensityMapUv:Gt&&x(y.specularIntensityMap.channel),transmissionMapUv:re&&x(y.transmissionMap.channel),thicknessMapUv:Me&&x(y.thicknessMap.channel),alphaMapUv:rt&&x(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(yt||H),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Ut,vertexUv2s:Ct,vertexUv3s:ce,pointsUvs:j.isPoints===!0&&!!O.attributes.uv&&(Dt||rt),fog:!!I,useFog:y.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:j.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:lt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Dt&&y.map.isVideoTexture===!0&&oe.getTransfer(y.map.colorSpace)===fe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Fe,flipSided:y.side===sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ht&&y.extensions.derivatives===!0,extensionFragDepth:ht&&y.extensions.fragDepth===!0,extensionDrawBuffers:ht&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ht&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ht&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){let M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(let D in y.defines)M.push(D),M.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(v(M,y),_(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function v(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function _(y,M){o.disableAll(),M.isWebGL2&&o.enable(0),M.supportsVertexTextures&&o.enable(1),M.instancing&&o.enable(2),M.instancingColor&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function S(y){let M=g[y.type],D;if(M){let k=Nn[M];D=pp.clone(k.uniforms)}else D=y.uniforms;return D}function R(y,M){let D;for(let k=0,j=c.length;k<j;k++){let I=c[k];if(I.cacheKey===M){D=I,++D.usedTimes;break}}return D===void 0&&(D=new Sx(i,M,y,r),c.push(D)),D}function T(y){if(--y.usedTimes===0){let M=c.indexOf(y);c[M]=c[c.length-1],c.pop(),y.destroy()}}function b(y){l.remove(y)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:R,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:C}}function Tx(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Ax(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function hu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function uu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,g,x,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),t++,f}function o(u,d,p,g,x,m){let f=a(u,d,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,x,m){let f=a(u,d,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Ax),n.length>1&&n.sort(d||hu),s.length>1&&s.sort(d||hu)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Rx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new uu,i.set(n,[a])):s>=r.length?(a=new uu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Cx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Pt};break;case"SpotLight":e={position:new L,direction:new L,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function Px(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}function Ix(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Dx(i,t){let e=new Cx,n=Px(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new L);let r=new L,a=new ge,o=new ge;function l(h,u){let d=0,p=0,g=0;for(let k=0;k<9;k++)s.probe[k].set(0,0,0);let x=0,m=0,f=0,v=0,_=0,S=0,R=0,T=0,b=0,C=0,y=0;h.sort(Ix);let M=u===!0?Math.PI:1;for(let k=0,j=h.length;k<j;k++){let I=h[k],O=I.color,q=I.intensity,J=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=O.r*q*M,p+=O.g*q*M,g+=O.b*q*M;else if(I.isLightProbe){for(let $=0;$<9;$++)s.probe[$].addScaledVector(I.sh.coefficients[$],q);y++}else if(I.isDirectionalLight){let $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity*M),I.castShadow){let Q=I.shadow,it=n.get(I);it.shadowBias=Q.bias,it.shadowNormalBias=Q.normalBias,it.shadowRadius=Q.radius,it.shadowMapSize=Q.mapSize,s.directionalShadow[x]=it,s.directionalShadowMap[x]=Z,s.directionalShadowMatrix[x]=I.shadow.matrix,S++}s.directional[x]=$,x++}else if(I.isSpotLight){let $=e.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(O).multiplyScalar(q*M),$.distance=J,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,s.spot[f]=$;let Q=I.shadow;if(I.map&&(s.spotLightMap[b]=I.map,b++,Q.updateMatrices(I),I.castShadow&&C++),s.spotLightMatrix[f]=Q.matrix,I.castShadow){let it=n.get(I);it.shadowBias=Q.bias,it.shadowNormalBias=Q.normalBias,it.shadowRadius=Q.radius,it.shadowMapSize=Q.mapSize,s.spotShadow[f]=it,s.spotShadowMap[f]=Z,T++}f++}else if(I.isRectAreaLight){let $=e.get(I);$.color.copy(O).multiplyScalar(q),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),s.rectArea[v]=$,v++}else if(I.isPointLight){let $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity*M),$.distance=I.distance,$.decay=I.decay,I.castShadow){let Q=I.shadow,it=n.get(I);it.shadowBias=Q.bias,it.shadowNormalBias=Q.normalBias,it.shadowRadius=Q.radius,it.shadowMapSize=Q.mapSize,it.shadowCameraNear=Q.camera.near,it.shadowCameraFar=Q.camera.far,s.pointShadow[m]=it,s.pointShadowMap[m]=Z,s.pointShadowMatrix[m]=I.shadow.matrix,R++}s.point[m]=$,m++}else if(I.isHemisphereLight){let $=e.get(I);$.skyColor.copy(I.color).multiplyScalar(q*M),$.groundColor.copy(I.groundColor).multiplyScalar(q*M),s.hemi[_]=$,_++}}v>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=at.LTC_FLOAT_1,s.rectAreaLTC2=at.LTC_FLOAT_2):(s.rectAreaLTC1=at.LTC_HALF_1,s.rectAreaLTC2=at.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=at.LTC_FLOAT_1,s.rectAreaLTC2=at.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=at.LTC_HALF_1,s.rectAreaLTC2=at.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;let D=s.hash;(D.directionalLength!==x||D.pointLength!==m||D.spotLength!==f||D.rectAreaLength!==v||D.hemiLength!==_||D.numDirectionalShadows!==S||D.numPointShadows!==R||D.numSpotShadows!==T||D.numSpotMaps!==b||D.numLightProbes!==y)&&(s.directional.length=x,s.spot.length=f,s.rectArea.length=v,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=T+b-C,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=C,s.numLightProbes=y,D.directionalLength=x,D.pointLength=m,D.spotLength=f,D.rectAreaLength=v,D.hemiLength=_,D.numDirectionalShadows=S,D.numPointShadows=R,D.numSpotShadows=T,D.numSpotMaps=b,D.numLightProbes=y,s.version=Lx++)}function c(h,u){let d=0,p=0,g=0,x=0,m=0,f=u.matrixWorldInverse;for(let v=0,_=h.length;v<_;v++){let S=h[v];if(S.isDirectionalLight){let R=s.directional[d];R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),d++}else if(S.isSpotLight){let R=s.spot[g];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),g++}else if(S.isRectAreaLight){let R=s.rectArea[x];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),o.identity(),a.copy(S.matrixWorld),a.premultiply(f),o.extractRotation(a),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){let R=s.point[p];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){let R=s.hemi[m];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function du(i,t){let e=new Dx(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Ux(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),l;return o===void 0?(l=new du(i,t),e.set(r,[l])):a>=o.length?(l=new du(i,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:n,dispose:s}}function Ox(i,t,e){let n=new hr,s=new ft,r=new ft,a=new Be,o=new gl({depthPacking:Vf}),l=new xl,c={},h=e.maxTextureSize,u={[mi]:sn,[sn]:mi,[Fe]:Fe},d=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Nx,fragmentShader:kx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ge;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new wt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Su;let f=this.type;this.render=function(T,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let y=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),k=i.state;k.setBlending(di),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let j=f!==Zn&&this.type===Zn,I=f===Zn&&this.type!==Zn;for(let O=0,q=T.length;O<q;O++){let J=T[O],Z=J.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let $=Z.getFrameExtents();if(s.multiply($),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,Z.mapSize.y=r.y)),Z.map===null||j===!0||I===!0){let it=this.type!==Zn?{minFilter:tn,magFilter:tn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new jn(s.x,s.y,it),Z.map.texture.name=J.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let Q=Z.getViewportCount();for(let it=0;it<Q;it++){let lt=Z.getViewport(it);a.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),k.viewport(a),Z.updateMatrices(J,it),n=Z.getFrustum(),S(b,C,Z.camera,J,this.type)}Z.isPointLightShadow!==!0&&this.type===Zn&&v(Z,C),Z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(y,M,D)};function v(T,b){let C=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new jn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(b,null,C,d,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(b,null,C,p,x,null)}function _(T,b,C,y){let M=null,D=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)M=D;else if(M=C.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let k=M.uuid,j=b.uuid,I=c[k];I===void 0&&(I={},c[k]=I);let O=I[j];O===void 0&&(O=M.clone(),I[j]=O,b.addEventListener("dispose",R)),M=O}if(M.visible=b.visible,M.wireframe=b.wireframe,y===Zn?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:u[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let k=i.properties.get(M);k.light=C}return M}function S(T,b,C,y,M){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Zn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let j=t.update(T),I=T.material;if(Array.isArray(I)){let O=j.groups;for(let q=0,J=O.length;q<J;q++){let Z=O[q],$=I[Z.materialIndex];if($&&$.visible){let Q=_(T,$,y,M);T.onBeforeShadow(i,T,b,C,j,Q,Z),i.renderBufferDirect(C,null,j,Q,T,Z),T.onAfterShadow(i,T,b,C,j,Q,Z)}}}else if(I.visible){let O=_(T,I,y,M);T.onBeforeShadow(i,T,b,C,j,O,null),i.renderBufferDirect(C,null,j,O,T,null),T.onAfterShadow(i,T,b,C,j,O,null)}}let k=T.children;for(let j=0,I=k.length;j<I;j++)S(k[j],b,C,y,M)}function R(T){T.target.removeEventListener("dispose",R);for(let C in c){let y=c[C],M=T.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}function Fx(i,t,e){let n=e.isWebGL2;function s(){let P=!1,ct=new Be,ht=null,Ut=new Be(0,0,0,0);return{setMask:function(Ct){ht!==Ct&&!P&&(i.colorMask(Ct,Ct,Ct,Ct),ht=Ct)},setLocked:function(Ct){P=Ct},setClear:function(Ct,ce,he,Ne,Ke){Ke===!0&&(Ct*=Ne,ce*=Ne,he*=Ne),ct.set(Ct,ce,he,Ne),Ut.equals(ct)===!1&&(i.clearColor(Ct,ce,he,Ne),Ut.copy(ct))},reset:function(){P=!1,ht=null,Ut.set(-1,0,0,0)}}}function r(){let P=!1,ct=null,ht=null,Ut=null;return{setTest:function(Ct){Ct?Vt(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(Ct){ct!==Ct&&!P&&(i.depthMask(Ct),ct=Ct)},setFunc:function(Ct){if(ht!==Ct){switch(Ct){case _f:i.depthFunc(i.NEVER);break;case yf:i.depthFunc(i.ALWAYS);break;case vf:i.depthFunc(i.LESS);break;case ua:i.depthFunc(i.LEQUAL);break;case Mf:i.depthFunc(i.EQUAL);break;case bf:i.depthFunc(i.GEQUAL);break;case Wl:i.depthFunc(i.GREATER);break;case Sf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=Ct}},setLocked:function(Ct){P=Ct},setClear:function(Ct){Ut!==Ct&&(i.clearDepth(Ct),Ut=Ct)},reset:function(){P=!1,ct=null,ht=null,Ut=null}}}function a(){let P=!1,ct=null,ht=null,Ut=null,Ct=null,ce=null,he=null,Ne=null,Ke=null;return{setTest:function(ue){P||(ue?Vt(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(ue){ct!==ue&&!P&&(i.stencilMask(ue),ct=ue)},setFunc:function(ue,je,Un){(ht!==ue||Ut!==je||Ct!==Un)&&(i.stencilFunc(ue,je,Un),ht=ue,Ut=je,Ct=Un)},setOp:function(ue,je,Un){(ce!==ue||he!==je||Ne!==Un)&&(i.stencilOp(ue,je,Un),ce=ue,he=je,Ne=Un)},setLocked:function(ue){P=ue},setClear:function(ue){Ke!==ue&&(i.clearStencil(ue),Ke=ue)},reset:function(){P=!1,ct=null,ht=null,Ut=null,Ct=null,ce=null,he=null,Ne=null,Ke=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,d={},p={},g=new WeakMap,x=[],m=null,f=!1,v=null,_=null,S=null,R=null,T=null,b=null,C=null,y=new Pt(0,0,0),M=0,D=!1,k=null,j=null,I=null,O=null,q=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,$=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Q)[1]),Z=$>=1):Q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),Z=$>=2);let it=null,lt={},X=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),ot=new Be().fromArray(X),Tt=new Be().fromArray(K);function St(P,ct,ht,Ut){let Ct=new Uint8Array(4),ce=i.createTexture();i.bindTexture(P,ce),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let he=0;he<ht;he++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(ct,0,i.RGBA,1,1,Ut,0,i.RGBA,i.UNSIGNED_BYTE,Ct):i.texImage2D(ct+he,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ct);return ce}let zt={};zt[i.TEXTURE_2D]=St(i.TEXTURE_2D,i.TEXTURE_2D,1),zt[i.TEXTURE_CUBE_MAP]=St(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(zt[i.TEXTURE_2D_ARRAY]=St(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),zt[i.TEXTURE_3D]=St(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Vt(i.DEPTH_TEST),l.setFunc(ua),Xt(!1),A(qc),Vt(i.CULL_FACE),yt(di);function Vt(P){d[P]!==!0&&(i.enable(P),d[P]=!0)}function Dt(P){d[P]!==!1&&(i.disable(P),d[P]=!1)}function ne(P,ct){return p[P]!==ct?(i.bindFramebuffer(P,ct),p[P]=ct,n&&(P===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ct),P===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ct)),!0):!1}function B(P,ct){let ht=x,Ut=!1;if(P)if(ht=g.get(ct),ht===void 0&&(ht=[],g.set(ct,ht)),P.isWebGLMultipleRenderTargets){let Ct=P.texture;if(ht.length!==Ct.length||ht[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,he=Ct.length;ce<he;ce++)ht[ce]=i.COLOR_ATTACHMENT0+ce;ht.length=Ct.length,Ut=!0}}else ht[0]!==i.COLOR_ATTACHMENT0&&(ht[0]=i.COLOR_ATTACHMENT0,Ut=!0);else ht[0]!==i.BACK&&(ht[0]=i.BACK,Ut=!0);Ut&&(e.isWebGL2?i.drawBuffers(ht):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ht))}function Je(P){return m!==P?(i.useProgram(P),m=P,!0):!1}let Rt={[Di]:i.FUNC_ADD,[nf]:i.FUNC_SUBTRACT,[sf]:i.FUNC_REVERSE_SUBTRACT};if(n)Rt[Zc]=i.MIN,Rt[Jc]=i.MAX;else{let P=t.get("EXT_blend_minmax");P!==null&&(Rt[Zc]=P.MIN_EXT,Rt[Jc]=P.MAX_EXT)}let Ft={[rf]:i.ZERO,[af]:i.ONE,[of]:i.SRC_COLOR,[jo]:i.SRC_ALPHA,[ff]:i.SRC_ALPHA_SATURATE,[uf]:i.DST_COLOR,[cf]:i.DST_ALPHA,[lf]:i.ONE_MINUS_SRC_COLOR,[Qo]:i.ONE_MINUS_SRC_ALPHA,[df]:i.ONE_MINUS_DST_COLOR,[hf]:i.ONE_MINUS_DST_ALPHA,[pf]:i.CONSTANT_COLOR,[mf]:i.ONE_MINUS_CONSTANT_COLOR,[gf]:i.CONSTANT_ALPHA,[xf]:i.ONE_MINUS_CONSTANT_ALPHA};function yt(P,ct,ht,Ut,Ct,ce,he,Ne,Ke,ue){if(P===di){f===!0&&(Dt(i.BLEND),f=!1);return}if(f===!1&&(Vt(i.BLEND),f=!0),P!==ef){if(P!==v||ue!==D){if((_!==Di||T!==Di)&&(i.blendEquation(i.FUNC_ADD),_=Di,T=Di),ue)switch(P){case Ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rr:i.blendFunc(i.ONE,i.ONE);break;case $c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,R=null,b=null,C=null,y.set(0,0,0),M=0,v=P,D=ue}return}Ct=Ct||ct,ce=ce||ht,he=he||Ut,(ct!==_||Ct!==T)&&(i.blendEquationSeparate(Rt[ct],Rt[Ct]),_=ct,T=Ct),(ht!==S||Ut!==R||ce!==b||he!==C)&&(i.blendFuncSeparate(Ft[ht],Ft[Ut],Ft[ce],Ft[he]),S=ht,R=Ut,b=ce,C=he),(Ne.equals(y)===!1||Ke!==M)&&(i.blendColor(Ne.r,Ne.g,Ne.b,Ke),y.copy(Ne),M=Ke),v=P,D=!1}function xe(P,ct){P.side===Fe?Dt(i.CULL_FACE):Vt(i.CULL_FACE);let ht=P.side===sn;ct&&(ht=!ht),Xt(ht),P.blending===Ms&&P.transparent===!1?yt(di):yt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);let Ut=P.stencilWrite;c.setTest(Ut),Ut&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),H(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Vt(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(P){k!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),k=P)}function A(P){P!==Qd?(Vt(i.CULL_FACE),P!==j&&(P===qc?i.cullFace(i.BACK):P===tf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),j=P}function w(P){P!==I&&(Z&&i.lineWidth(P),I=P)}function H(P,ct,ht){P?(Vt(i.POLYGON_OFFSET_FILL),(O!==ct||q!==ht)&&(i.polygonOffset(ct,ht),O=ct,q=ht)):Dt(i.POLYGON_OFFSET_FILL)}function nt(P){P?Vt(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function et(P){P===void 0&&(P=i.TEXTURE0+J-1),it!==P&&(i.activeTexture(P),it=P)}function st(P,ct,ht){ht===void 0&&(it===null?ht=i.TEXTURE0+J-1:ht=it);let Ut=lt[ht];Ut===void 0&&(Ut={type:void 0,texture:void 0},lt[ht]=Ut),(Ut.type!==P||Ut.texture!==ct)&&(it!==ht&&(i.activeTexture(ht),it=ht),i.bindTexture(P,ct||zt[P]),Ut.type=P,Ut.texture=ct)}function vt(){let P=lt[it];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function dt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function gt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function It(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function qt(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function tt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Kt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ot(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xt(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Gt(P){ot.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),ot.copy(P))}function re(P){Tt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Tt.copy(P))}function Me(P,ct){let ht=u.get(ct);ht===void 0&&(ht=new WeakMap,u.set(ct,ht));let Ut=ht.get(P);Ut===void 0&&(Ut=i.getUniformBlockIndex(ct,P.name),ht.set(P,Ut))}function Yt(P,ct){let Ut=u.get(ct).get(P);h.get(ct)!==Ut&&(i.uniformBlockBinding(ct,Ut,P.__bindingPointIndex),h.set(ct,Ut))}function rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},it=null,lt={},p={},g=new WeakMap,x=[],m=null,f=!1,v=null,_=null,S=null,R=null,T=null,b=null,C=null,y=new Pt(0,0,0),M=0,D=!1,k=null,j=null,I=null,O=null,q=null,ot.set(0,0,i.canvas.width,i.canvas.height),Tt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Vt,disable:Dt,bindFramebuffer:ne,drawBuffers:B,useProgram:Je,setBlending:yt,setMaterial:xe,setFlipSided:Xt,setCullFace:A,setLineWidth:w,setPolygonOffset:H,setScissorTest:nt,activeTexture:et,bindTexture:st,unbindTexture:vt,compressedTexImage2D:dt,compressedTexImage3D:gt,texImage2D:At,texImage3D:xt,updateUBOMapping:Me,uniformBlockBinding:Yt,texStorage2D:Kt,texStorage3D:Ot,texSubImage2D:It,texSubImage3D:qt,compressedTexSubImage2D:tt,compressedTexSubImage3D:ae,scissor:Gt,viewport:re,reset:rt}}function Bx(i,t,e,n,s,r,a){let o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,w){return p?new OffscreenCanvas(A,w):_a("canvas")}function x(A,w,H,nt){let et=1;if((A.width>nt||A.height>nt)&&(et=nt/Math.max(A.width,A.height)),et<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let st=w?rl:Math.floor,vt=st(et*A.width),dt=st(et*A.height);u===void 0&&(u=g(vt,dt));let gt=H?g(vt,dt):u;return gt.width=vt,gt.height=dt,gt.getContext("2d").drawImage(A,0,0,vt,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+vt+"x"+dt+")."),gt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Ch(A.width)&&Ch(A.height)}function f(A){return o?!1:A.wrapS!==Tn||A.wrapT!==Tn||A.minFilter!==tn&&A.minFilter!==_n}function v(A,w){return A.generateMipmaps&&w&&A.minFilter!==tn&&A.minFilter!==_n}function _(A){i.generateMipmap(A)}function S(A,w,H,nt,et=!1){if(o===!1)return w;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let st=w;if(w===i.RED&&(H===i.FLOAT&&(st=i.R32F),H===i.HALF_FLOAT&&(st=i.R16F),H===i.UNSIGNED_BYTE&&(st=i.R8)),w===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(st=i.R8UI),H===i.UNSIGNED_SHORT&&(st=i.R16UI),H===i.UNSIGNED_INT&&(st=i.R32UI),H===i.BYTE&&(st=i.R8I),H===i.SHORT&&(st=i.R16I),H===i.INT&&(st=i.R32I)),w===i.RG&&(H===i.FLOAT&&(st=i.RG32F),H===i.HALF_FLOAT&&(st=i.RG16F),H===i.UNSIGNED_BYTE&&(st=i.RG8)),w===i.RGBA){let vt=et?pa:oe.getTransfer(nt);H===i.FLOAT&&(st=i.RGBA32F),H===i.HALF_FLOAT&&(st=i.RGBA16F),H===i.UNSIGNED_BYTE&&(st=vt===fe?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function R(A,w,H){return v(A,H)===!0||A.isFramebufferTexture&&A.minFilter!==tn&&A.minFilter!==_n?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function T(A){return A===tn||A===Kc||A===xo?i.NEAREST:i.LINEAR}function b(A){let w=A.target;w.removeEventListener("dispose",b),y(w),w.isVideoTexture&&h.delete(w)}function C(A){let w=A.target;w.removeEventListener("dispose",C),D(w)}function y(A){let w=n.get(A);if(w.__webglInit===void 0)return;let H=A.source,nt=d.get(H);if(nt){let et=nt[w.__cacheKey];et.usedTimes--,et.usedTimes===0&&M(A),Object.keys(nt).length===0&&d.delete(H)}n.remove(A)}function M(A){let w=n.get(A);i.deleteTexture(w.__webglTexture);let H=A.source,nt=d.get(H);delete nt[w.__cacheKey],a.memory.textures--}function D(A){let w=A.texture,H=n.get(A),nt=n.get(w);if(nt.__webglTexture!==void 0&&(i.deleteTexture(nt.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(H.__webglFramebuffer[et]))for(let st=0;st<H.__webglFramebuffer[et].length;st++)i.deleteFramebuffer(H.__webglFramebuffer[et][st]);else i.deleteFramebuffer(H.__webglFramebuffer[et]);H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[et])}else{if(Array.isArray(H.__webglFramebuffer))for(let et=0;et<H.__webglFramebuffer.length;et++)i.deleteFramebuffer(H.__webglFramebuffer[et]);else i.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let et=0;et<H.__webglColorRenderbuffer.length;et++)H.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[et]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let et=0,st=w.length;et<st;et++){let vt=n.get(w[et]);vt.__webglTexture&&(i.deleteTexture(vt.__webglTexture),a.memory.textures--),n.remove(w[et])}n.remove(w),n.remove(A)}let k=0;function j(){k=0}function I(){let A=k;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),k+=1,A}function O(A){let w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function q(A,w){let H=n.get(A);if(A.isVideoTexture&&xe(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){let nt=A.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(H,A,w);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+w)}function J(A,w){let H=n.get(A);if(A.version>0&&H.__version!==A.version){ot(H,A,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+w)}function Z(A,w){let H=n.get(A);if(A.version>0&&H.__version!==A.version){ot(H,A,w);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+w)}function $(A,w){let H=n.get(A);if(A.version>0&&H.__version!==A.version){Tt(H,A,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+w)}let Q={[ar]:i.REPEAT,[Tn]:i.CLAMP_TO_EDGE,[nl]:i.MIRRORED_REPEAT},it={[tn]:i.NEAREST,[Kc]:i.NEAREST_MIPMAP_NEAREST,[xo]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[If]:i.LINEAR_MIPMAP_NEAREST,[or]:i.LINEAR_MIPMAP_LINEAR},lt={[Wf]:i.NEVER,[Jf]:i.ALWAYS,[Xf]:i.LESS,[Uu]:i.LEQUAL,[qf]:i.EQUAL,[Zf]:i.GEQUAL,[$f]:i.GREATER,[Yf]:i.NOTEQUAL};function X(A,w,H){if(H?(i.texParameteri(A,i.TEXTURE_WRAP_S,Q[w.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Q[w.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Q[w.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,it[w.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,it[w.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(w.wrapS!==Tn||w.wrapT!==Tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,T(w.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,T(w.minFilter)),w.minFilter!==tn&&w.minFilter!==_n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,lt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let nt=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===tn||w.minFilter!==xo&&w.minFilter!==or||w.type===ui&&t.has("OES_texture_float_linear")===!1||o===!1&&w.type===lr&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(i.texParameterf(A,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function K(A,w){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",b));let nt=w.source,et=d.get(nt);et===void 0&&(et={},d.set(nt,et));let st=O(w);if(st!==A.__cacheKey){et[st]===void 0&&(et[st]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),et[st].usedTimes++;let vt=et[A.__cacheKey];vt!==void 0&&(et[A.__cacheKey].usedTimes--,vt.usedTimes===0&&M(w)),A.__cacheKey=st,A.__webglTexture=et[st].texture}return H}function ot(A,w,H){let nt=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(nt=i.TEXTURE_3D);let et=K(A,w),st=w.source;e.bindTexture(nt,A.__webglTexture,i.TEXTURE0+H);let vt=n.get(st);if(st.version!==vt.__version||et===!0){e.activeTexture(i.TEXTURE0+H);let dt=oe.getPrimaries(oe.workingColorSpace),gt=w.colorSpace===yn?null:oe.getPrimaries(w.colorSpace),It=w.colorSpace===yn||dt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let qt=f(w)&&m(w.image)===!1,tt=x(w.image,qt,!1,s.maxTextureSize);tt=Xt(w,tt);let ae=m(tt)||o,Kt=r.convert(w.format,w.colorSpace),Ot=r.convert(w.type),At=S(w.internalFormat,Kt,Ot,w.colorSpace,w.isVideoTexture);X(nt,w,ae);let xt,Gt=w.mipmaps,re=o&&w.isVideoTexture!==!0&&At!==Lu,Me=vt.__version===void 0||et===!0,Yt=R(w,tt,ae);if(w.isDepthTexture)At=i.DEPTH_COMPONENT,o?w.type===ui?At=i.DEPTH_COMPONENT32F:w.type===hi?At=i.DEPTH_COMPONENT24:w.type===Ni?At=i.DEPTH24_STENCIL8:At=i.DEPTH_COMPONENT16:w.type===ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===ki&&At===i.DEPTH_COMPONENT&&w.type!==ql&&w.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=hi,Ot=r.convert(w.type)),w.format===Ts&&At===i.DEPTH_COMPONENT&&(At=i.DEPTH_STENCIL,w.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Ni,Ot=r.convert(w.type))),Me&&(re?e.texStorage2D(i.TEXTURE_2D,1,At,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,At,tt.width,tt.height,0,Kt,Ot,null));else if(w.isDataTexture)if(Gt.length>0&&ae){re&&Me&&e.texStorage2D(i.TEXTURE_2D,Yt,At,Gt[0].width,Gt[0].height);for(let rt=0,P=Gt.length;rt<P;rt++)xt=Gt[rt],re?e.texSubImage2D(i.TEXTURE_2D,rt,0,0,xt.width,xt.height,Kt,Ot,xt.data):e.texImage2D(i.TEXTURE_2D,rt,At,xt.width,xt.height,0,Kt,Ot,xt.data);w.generateMipmaps=!1}else re?(Me&&e.texStorage2D(i.TEXTURE_2D,Yt,At,tt.width,tt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,Kt,Ot,tt.data)):e.texImage2D(i.TEXTURE_2D,0,At,tt.width,tt.height,0,Kt,Ot,tt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){re&&Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Yt,At,Gt[0].width,Gt[0].height,tt.depth);for(let rt=0,P=Gt.length;rt<P;rt++)xt=Gt[rt],w.format!==An?Kt!==null?re?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,xt.width,xt.height,tt.depth,Kt,xt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,At,xt.width,xt.height,tt.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,xt.width,xt.height,tt.depth,Kt,Ot,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,At,xt.width,xt.height,tt.depth,0,Kt,Ot,xt.data)}else{re&&Me&&e.texStorage2D(i.TEXTURE_2D,Yt,At,Gt[0].width,Gt[0].height);for(let rt=0,P=Gt.length;rt<P;rt++)xt=Gt[rt],w.format!==An?Kt!==null?re?e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,xt.width,xt.height,Kt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,At,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?e.texSubImage2D(i.TEXTURE_2D,rt,0,0,xt.width,xt.height,Kt,Ot,xt.data):e.texImage2D(i.TEXTURE_2D,rt,At,xt.width,xt.height,0,Kt,Ot,xt.data)}else if(w.isDataArrayTexture)re?(Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Yt,At,tt.width,tt.height,tt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,Kt,Ot,tt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,tt.width,tt.height,tt.depth,0,Kt,Ot,tt.data);else if(w.isData3DTexture)re?(Me&&e.texStorage3D(i.TEXTURE_3D,Yt,At,tt.width,tt.height,tt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,Kt,Ot,tt.data)):e.texImage3D(i.TEXTURE_3D,0,At,tt.width,tt.height,tt.depth,0,Kt,Ot,tt.data);else if(w.isFramebufferTexture){if(Me)if(re)e.texStorage2D(i.TEXTURE_2D,Yt,At,tt.width,tt.height);else{let rt=tt.width,P=tt.height;for(let ct=0;ct<Yt;ct++)e.texImage2D(i.TEXTURE_2D,ct,At,rt,P,0,Kt,Ot,null),rt>>=1,P>>=1}}else if(Gt.length>0&&ae){re&&Me&&e.texStorage2D(i.TEXTURE_2D,Yt,At,Gt[0].width,Gt[0].height);for(let rt=0,P=Gt.length;rt<P;rt++)xt=Gt[rt],re?e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Kt,Ot,xt):e.texImage2D(i.TEXTURE_2D,rt,At,Kt,Ot,xt);w.generateMipmaps=!1}else re?(Me&&e.texStorage2D(i.TEXTURE_2D,Yt,At,tt.width,tt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Kt,Ot,tt)):e.texImage2D(i.TEXTURE_2D,0,At,Kt,Ot,tt);v(w,ae)&&_(nt),vt.__version=st.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function Tt(A,w,H){if(w.image.length!==6)return;let nt=K(A,w),et=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+H);let st=n.get(et);if(et.version!==st.__version||nt===!0){e.activeTexture(i.TEXTURE0+H);let vt=oe.getPrimaries(oe.workingColorSpace),dt=w.colorSpace===yn?null:oe.getPrimaries(w.colorSpace),gt=w.colorSpace===yn||vt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let It=w.isCompressedTexture||w.image[0].isCompressedTexture,qt=w.image[0]&&w.image[0].isDataTexture,tt=[];for(let rt=0;rt<6;rt++)!It&&!qt?tt[rt]=x(w.image[rt],!1,!0,s.maxCubemapSize):tt[rt]=qt?w.image[rt].image:w.image[rt],tt[rt]=Xt(w,tt[rt]);let ae=tt[0],Kt=m(ae)||o,Ot=r.convert(w.format,w.colorSpace),At=r.convert(w.type),xt=S(w.internalFormat,Ot,At,w.colorSpace),Gt=o&&w.isVideoTexture!==!0,re=st.__version===void 0||nt===!0,Me=R(w,ae,Kt);X(i.TEXTURE_CUBE_MAP,w,Kt);let Yt;if(It){Gt&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Me,xt,ae.width,ae.height);for(let rt=0;rt<6;rt++){Yt=tt[rt].mipmaps;for(let P=0;P<Yt.length;P++){let ct=Yt[P];w.format!==An?Ot!==null?Gt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,P,0,0,ct.width,ct.height,Ot,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,P,xt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,P,0,0,ct.width,ct.height,Ot,At,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,P,xt,ct.width,ct.height,0,Ot,At,ct.data)}}}else{Yt=w.mipmaps,Gt&&re&&(Yt.length>0&&Me++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Me,xt,tt[0].width,tt[0].height));for(let rt=0;rt<6;rt++)if(qt){Gt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,tt[rt].width,tt[rt].height,Ot,At,tt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,xt,tt[rt].width,tt[rt].height,0,Ot,At,tt[rt].data);for(let P=0;P<Yt.length;P++){let ht=Yt[P].image[rt].image;Gt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,P+1,0,0,ht.width,ht.height,Ot,At,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,P+1,xt,ht.width,ht.height,0,Ot,At,ht.data)}}else{Gt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ot,At,tt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,xt,Ot,At,tt[rt]);for(let P=0;P<Yt.length;P++){let ct=Yt[P];Gt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,P+1,0,0,Ot,At,ct.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,P+1,xt,Ot,At,ct.image[rt])}}}v(w,Kt)&&_(i.TEXTURE_CUBE_MAP),st.__version=et.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function St(A,w,H,nt,et,st){let vt=r.convert(H.format,H.colorSpace),dt=r.convert(H.type),gt=S(H.internalFormat,vt,dt,H.colorSpace);if(!n.get(w).__hasExternalTextures){let qt=Math.max(1,w.width>>st),tt=Math.max(1,w.height>>st);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,st,gt,qt,tt,w.depth,0,vt,dt,null):e.texImage2D(et,st,gt,qt,tt,0,vt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),yt(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,et,n.get(H).__webglTexture,0,Ft(w)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,et,n.get(H).__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(A,w,H){if(i.bindRenderbuffer(i.RENDERBUFFER,A),w.depthBuffer&&!w.stencilBuffer){let nt=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(H||yt(w)){let et=w.depthTexture;et&&et.isDepthTexture&&(et.type===ui?nt=i.DEPTH_COMPONENT32F:et.type===hi&&(nt=i.DEPTH_COMPONENT24));let st=Ft(w);yt(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,nt,w.width,w.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,st,nt,w.width,w.height)}else i.renderbufferStorage(i.RENDERBUFFER,nt,w.width,w.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(w.depthBuffer&&w.stencilBuffer){let nt=Ft(w);H&&yt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,i.DEPTH24_STENCIL8,w.width,w.height):yt(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,i.DEPTH24_STENCIL8,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{let nt=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let et=0;et<nt.length;et++){let st=nt[et],vt=r.convert(st.format,st.colorSpace),dt=r.convert(st.type),gt=S(st.internalFormat,vt,dt,st.colorSpace),It=Ft(w);H&&yt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,It,gt,w.width,w.height):yt(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It,gt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,gt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Vt(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),q(w.depthTexture,0);let nt=n.get(w.depthTexture).__webglTexture,et=Ft(w);if(w.depthTexture.format===ki)yt(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(w.depthTexture.format===Ts)yt(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Dt(A){let w=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Vt(w.__webglFramebuffer,A)}else if(H){w.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[nt]),w.__webglDepthbuffer[nt]=i.createRenderbuffer(),zt(w.__webglDepthbuffer[nt],A,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),zt(w.__webglDepthbuffer,A,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(A,w,H){let nt=n.get(A);w!==void 0&&St(nt.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Dt(A)}function B(A){let w=A.texture,H=n.get(A),nt=n.get(w);A.addEventListener("dispose",C),A.isWebGLMultipleRenderTargets!==!0&&(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=w.version,a.memory.textures++);let et=A.isWebGLCubeRenderTarget===!0,st=A.isWebGLMultipleRenderTargets===!0,vt=m(A)||o;if(et){H.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(o&&w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[dt]=[];for(let gt=0;gt<w.mipmaps.length;gt++)H.__webglFramebuffer[dt][gt]=i.createFramebuffer()}else H.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let dt=0;dt<w.mipmaps.length;dt++)H.__webglFramebuffer[dt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(st)if(s.drawBuffers){let dt=A.texture;for(let gt=0,It=dt.length;gt<It;gt++){let qt=n.get(dt[gt]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&yt(A)===!1){let dt=st?w:[w];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let gt=0;gt<dt.length;gt++){let It=dt[gt];H.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[gt]);let qt=r.convert(It.format,It.colorSpace),tt=r.convert(It.type),ae=S(It.internalFormat,qt,tt,It.colorSpace,A.isXRRenderTarget===!0),Kt=Ft(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,ae,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,H.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),zt(H.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),X(i.TEXTURE_CUBE_MAP,w,vt);for(let dt=0;dt<6;dt++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let gt=0;gt<w.mipmaps.length;gt++)St(H.__webglFramebuffer[dt][gt],A,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,gt);else St(H.__webglFramebuffer[dt],A,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);v(w,vt)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){let dt=A.texture;for(let gt=0,It=dt.length;gt<It;gt++){let qt=dt[gt],tt=n.get(qt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),X(i.TEXTURE_2D,qt,vt),St(H.__webglFramebuffer,A,qt,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),v(qt,vt)&&_(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?dt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(dt,nt.__webglTexture),X(dt,w,vt),o&&w.mipmaps&&w.mipmaps.length>0)for(let gt=0;gt<w.mipmaps.length;gt++)St(H.__webglFramebuffer[gt],A,w,i.COLOR_ATTACHMENT0,dt,gt);else St(H.__webglFramebuffer,A,w,i.COLOR_ATTACHMENT0,dt,0);v(w,vt)&&_(dt),e.unbindTexture()}A.depthBuffer&&Dt(A)}function Je(A){let w=m(A)||o,H=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let nt=0,et=H.length;nt<et;nt++){let st=H[nt];if(v(st,w)){let vt=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,dt=n.get(st).__webglTexture;e.bindTexture(vt,dt),_(vt),e.unbindTexture()}}}function Rt(A){if(o&&A.samples>0&&yt(A)===!1){let w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],H=A.width,nt=A.height,et=i.COLOR_BUFFER_BIT,st=[],vt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=n.get(A),gt=A.isWebGLMultipleRenderTargets===!0;if(gt)for(let It=0;It<w.length;It++)e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let It=0;It<w.length;It++){st.push(i.COLOR_ATTACHMENT0+It),A.depthBuffer&&st.push(vt);let qt=dt.__ignoreDepthValues!==void 0?dt.__ignoreDepthValues:!1;if(qt===!1&&(A.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),gt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,dt.__webglColorRenderbuffer[It]),qt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[vt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[vt])),gt){let tt=n.get(w[It]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,tt,0)}i.blitFramebuffer(0,0,H,nt,0,0,H,nt,et,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let It=0;It<w.length;It++){e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,dt.__webglColorRenderbuffer[It]);let qt=n.get(w[It]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}}function Ft(A){return Math.min(s.maxSamples,A.samples)}function yt(A){let w=n.get(A);return o&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function xe(A){let w=a.render.frame;h.get(A)!==w&&(h.set(A,w),A.update())}function Xt(A,w){let H=A.colorSpace,nt=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===il||H!==Kn&&H!==yn&&(oe.getTransfer(H)===fe?o===!1?t.has("EXT_sRGB")===!0&&nt===An?(A.format=il,A.minFilter=_n,A.generateMipmaps=!1):w=ya.sRGBToLinear(w):(nt!==An||et!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}this.allocateTextureUnit=I,this.resetTextureUnits=j,this.setTexture2D=q,this.setTexture2DArray=J,this.setTexture3D=Z,this.setTextureCube=$,this.rebindTextures=ne,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=yt}function zx(i,t,e){let n=e.isWebGL2;function s(r,a=yn){let o,l=oe.getTransfer(a);if(r===pi)return i.UNSIGNED_BYTE;if(r===Tu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Au)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Df)return i.BYTE;if(r===Uf)return i.SHORT;if(r===ql)return i.UNSIGNED_SHORT;if(r===Eu)return i.INT;if(r===hi)return i.UNSIGNED_INT;if(r===ui)return i.FLOAT;if(r===lr)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Nf)return i.ALPHA;if(r===An)return i.RGBA;if(r===kf)return i.LUMINANCE;if(r===Of)return i.LUMINANCE_ALPHA;if(r===ki)return i.DEPTH_COMPONENT;if(r===Ts)return i.DEPTH_STENCIL;if(r===il)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Ff)return i.RED;if(r===Ru)return i.RED_INTEGER;if(r===Bf)return i.RG;if(r===Cu)return i.RG_INTEGER;if(r===Pu)return i.RGBA_INTEGER;if(r===_o||r===yo||r===vo||r===Mo)if(l===fe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===_o)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Mo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===_o)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===yo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===vo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Mo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===jc||r===Qc||r===th||r===eh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===jc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===th)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===eh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lu)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===nh||r===ih)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===nh)return l===fe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ih)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===sh||r===rh||r===ah||r===oh||r===lh||r===ch||r===hh||r===uh||r===dh||r===fh||r===ph||r===mh||r===gh||r===xh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===sh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===rh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ah)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===oh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===lh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ch)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===hh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===dh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ph)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===mh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===gh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===xh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bo||r===_h||r===yh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===bo)return l===fe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===_h)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===yh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===zf||r===vh||r===Mh||r===bh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===bo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===vh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Mh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===bh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ni?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}function Vx(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Fu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,_,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,v,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===sn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===sn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v=t.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*_,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=_*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===sn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let v=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Gx(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,_){let S=_.program;n.uniformBlockBinding(v,S)}function c(v,_){let S=s[v.id];S===void 0&&(g(v),S=h(v),s[v.id]=S,v.addEventListener("dispose",m));let R=_.program;n.updateUBOMapping(v,R);let T=t.render.frame;r[v.id]!==T&&(d(v),r[v.id]=T)}function h(v){let _=u();v.__bindingPointIndex=_;let S=i.createBuffer(),R=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,S),S}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let _=s[v.id],S=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,b=S.length;T<b;T++){let C=Array.isArray(S[T])?S[T]:[S[T]];for(let y=0,M=C.length;y<M;y++){let D=C[y];if(p(D,T,y,R)===!0){let k=D.__offset,j=Array.isArray(D.value)?D.value:[D.value],I=0;for(let O=0;O<j.length;O++){let q=j[O],J=x(q);typeof q=="number"||typeof q=="boolean"?(D.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,k+I,D.__data)):q.isMatrix3?(D.__data[0]=q.elements[0],D.__data[1]=q.elements[1],D.__data[2]=q.elements[2],D.__data[3]=0,D.__data[4]=q.elements[3],D.__data[5]=q.elements[4],D.__data[6]=q.elements[5],D.__data[7]=0,D.__data[8]=q.elements[6],D.__data[9]=q.elements[7],D.__data[10]=q.elements[8],D.__data[11]=0):(q.toArray(D.__data,I),I+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,_,S,R){let T=v.value,b=_+"_"+S;if(R[b]===void 0)return typeof T=="number"||typeof T=="boolean"?R[b]=T:R[b]=T.clone(),!0;{let C=R[b];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return R[b]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(v){let _=v.uniforms,S=0,R=16;for(let b=0,C=_.length;b<C;b++){let y=Array.isArray(_[b])?_[b]:[_[b]];for(let M=0,D=y.length;M<D;M++){let k=y[M],j=Array.isArray(k.value)?k.value:[k.value];for(let I=0,O=j.length;I<O;I++){let q=j[I],J=x(q),Z=S%R;Z!==0&&R-Z<J.boundary&&(S+=R-Z),k.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=J.storage}}}let T=S%R;return T>0&&(S+=R-T),v.__size=S,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let S=a.indexOf(_.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}function Zl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}function mu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Xx(i,t){let e=1-i;return e*e*t}function qx(i,t){return 2*(1-i)*i*t}function $x(i,t){return i*i*t}function nr(i,t,e,n){return Xx(i,t)+qx(i,e)+$x(i,n)}function Yx(i,t){let e=1-i;return e*e*e*t}function Zx(i,t){let e=1-i;return 3*e*e*i*t}function Jx(i,t){return 3*(1-i)*i*i*t}function Kx(i,t){return i*i*i*t}function ir(i,t,e,n,s){return Yx(i,t)+Zx(i,e)+Jx(i,n)+Kx(i,s)}function Xu(i,t,e,n,s){let r,a;if(s===p_(i,t,e,n)>0)for(r=t;r<e;r+=n)a=xu(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=xu(r,i[r],i[r+1],a);return a&&Va(a,a.next)&&(xr(a),a=a.next),a}function Vi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Va(e,e.next)||ye(e.prev,e,e.next)===0)){if(xr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function mr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&l_(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?t_(i,n,s,r):Qx(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),xr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=e_(Vi(i),t,e),mr(i,t,e,n,s,r,2)):a===2&&n_(i,t,e,n,s,r):mr(Vi(i),t,e,n,s,r,1);break}}}function Qx(i){let t=i.prev,e=i,n=i.next;if(ye(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&vs(s,o,r,l,a,c,g.x,g.y)&&ye(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function t_(i,t,e,n){let s=i.prev,r=i,a=i.next;if(ye(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,x=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,f=Rl(p,g,t,e,n),v=Rl(x,m,t,e,n),_=i.prevZ,S=i.nextZ;for(;_&&_.z>=f&&S&&S.z<=v;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&vs(o,h,l,u,c,d,_.x,_.y)&&ye(_.prev,_,_.next)>=0||(_=_.prevZ,S.x>=p&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&vs(o,h,l,u,c,d,S.x,S.y)&&ye(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&vs(o,h,l,u,c,d,_.x,_.y)&&ye(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;S&&S.z<=v;){if(S.x>=p&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&vs(o,h,l,u,c,d,S.x,S.y)&&ye(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function e_(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Va(s,r)&&qu(s,n,n.next,r)&&gr(s,r)&&gr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),xr(n),xr(n.next),n=i=r),n=n.next}while(n!==i);return Vi(n)}function n_(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&u_(a,o)){let l=$u(a,o);a=Vi(a,a.next),l=Vi(l,l.next),mr(a,t,e,n,s,r,0),mr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function i_(i,t,e,n){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Xu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(h_(c));for(s.sort(s_),r=0;r<s.length;r++)e=r_(s[r],e);return e}function s_(i,t){return i.x-t.x}function r_(i,t){let e=a_(i,t);if(!e)return t;let n=$u(e,i);return Vi(n,n.next),Vi(e,e.next)}function a_(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&vs(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),gr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&o_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function o_(i,t){return ye(i.prev,i,t.prev)<0&&ye(t.next,i,i.next)<0}function l_(i,t,e,n){let s=i;do s.z===0&&(s.z=Rl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,c_(s)}function c_(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function Rl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function h_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function vs(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function u_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!d_(i,t)&&(gr(i,t)&&gr(t,i)&&f_(i,t)&&(ye(i.prev,i,t.prev)||ye(i,t.prev,t))||Va(i,t)&&ye(i.prev,i,i.next)>0&&ye(t.prev,t,t.next)>0)}function ye(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Va(i,t){return i.x===t.x&&i.y===t.y}function qu(i,t,e,n){let s=ca(ye(i,t,e)),r=ca(ye(i,t,n)),a=ca(ye(e,n,i)),o=ca(ye(e,n,t));return!!(s!==r&&a!==o||s===0&&la(i,e,t)||r===0&&la(i,n,t)||a===0&&la(e,i,n)||o===0&&la(e,t,n))}function la(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ca(i){return i>0?1:i<0?-1:0}function d_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&qu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function gr(i,t){return ye(i.prev,i,i.next)<0?ye(i,t,i.next)>=0&&ye(i,i.prev,t)>=0:ye(i,t,i.prev)<0||ye(i,i.next,t)<0}function f_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function $u(i,t){let e=new Cl(i.i,i.x,i.y),n=new Cl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function xu(i,t,e,n){let s=new Cl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function xr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Cl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function p_(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}function _u(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function yu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}function m_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}function ha(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function g_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function bu(i,t){return i.distance-t.distance}function Vl(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Vl(s[r],t,e,!0)}}var Qd,qc,tf,Su,Gl,Zn,mi,sn,Fe,di,Ms,rr,$c,Yc,ef,Di,nf,sf,Zc,Jc,rf,af,of,lf,jo,Qo,cf,hf,uf,df,ff,pf,mf,gf,xf,_f,yf,vf,ua,Mf,bf,Wl,Sf,Xl,wf,Ef,fi,Tf,Af,Rf,Cf,Pf,Lf,wu,ws,Es,tl,el,Ba,ar,Tn,nl,tn,Kc,xo,_n,If,or,pi,Df,Uf,ql,Eu,hi,ui,lr,Tu,Au,Ni,Nf,An,kf,Of,ki,Ts,Ff,Ru,Bf,Cu,Pu,_o,yo,vo,Mo,jc,Qc,th,eh,Lu,nh,ih,sh,rh,ah,oh,lh,ch,hh,uh,dh,fh,ph,mh,gh,xh,bo,_h,yh,zf,vh,Mh,bh,da,fa,So,Sh,wh,Eh,Iu,Oi,Hf,Vf,Du,Gf,yn,pe,Kn,$l,za,pa,fe,ma,ga,ts,Th,Wf,Xf,qf,Uu,$f,Yf,Zf,Jf,Ah,Nu,Rh,il,Jn,xa,gi,Ye,wo,sl,ft,Jt,To,Ph,Lh,Ih,Fr,Qf,oe,es,ya,tp,va,ep,vn,Be,al,jn,Ma,ol,kn,L,Co,Dh,Qn,Wn,bn,Br,ns,is,ss,ri,ai,Ri,Ys,zr,Hr,Ci,np,Zs,Lo,Fi,Xn,Io,Vr,oi,Do,Gr,Uo,ba,ge,rs,Sn,ip,sp,li,Wr,hn,Uh,Nh,As,cr,rp,kh,as,qn,Xr,Js,ap,op,Oh,Fh,Bh,lp,cp,Le,wn,$n,No,Yn,os,ls,zh,ko,Oo,Fo,qr,xs,Ou,ci,$r,Pt,Ze,hp,Bi,Ce,Re,Yr,dn,Sa,wa,jt,up,xn,zo,cs,un,Ks,Oe,Ge,Hh,Pi,Zr,Vh,hs,us,ds,Ho,Jr,Kr,jr,Qr,Gh,Wh,Xh,ta,ea,wt,de,pp,mp,gp,Rn,Ea,Pe,fs,ps,ll,Ta,cl,Vo,xp,_p,En,Li,ia,hr,zi,vp,Mp,bp,Sp,wp,Ep,Tp,Ap,Rp,Cp,Pp,Lp,Ip,Dp,Up,Np,kp,Op,Fp,Bp,zp,Hp,Vp,Gp,Wp,Xp,qp,$p,Yp,Zp,Jp,Kp,jp,Qp,tm,em,nm,im,sm,rm,am,om,lm,cm,hm,um,dm,fm,pm,mm,gm,xm,_m,ym,vm,Mm,bm,Sm,wm,Em,Tm,Am,Rm,Cm,Pm,Lm,Im,Dm,Um,Nm,km,Om,Fm,Bm,zm,Hm,Vm,Gm,Wm,Xm,qm,$m,Ym,Zm,Jm,Km,jm,Qm,t0,e0,n0,i0,s0,r0,a0,o0,l0,c0,h0,u0,d0,f0,p0,m0,g0,x0,_0,y0,v0,M0,b0,S0,w0,E0,T0,A0,R0,C0,P0,L0,I0,D0,U0,N0,k0,O0,F0,B0,z0,H0,V0,G0,W0,X0,q0,$0,Y0,Z0,J0,K0,j0,Wt,at,Nn,sa,Aa,_s,qh,Ui,Go,$h,Wo,Xo,qo,Ii,ms,Yh,Ra,Ca,zu,Hu,Vu,Gu,Wu,jh,Qh,tu,eu,nu,hl,ul,dl,$o,Ss,ix,sx,fx,px,gx,wx,pl,ml,Lx,gl,xl,Nx,kx,_l,ie,Hx,er,yl,Hi,vl,Cs,xi,Pa,gs,fu,aa,pu,Wx,js,Qs,Cn,Ps,Mn,ur,Ml,oa,Yo,Zo,Jo,bl,La,Sl,Ia,wl,Da,El,Ua,gu,Tl,dr,Al,_i,Ls,Te,ti,fr,Is,pr,jx,sr,_r,Na,Gi,ka,We,Ds,ze,Us,Pl,Ll,Il,Pn,Wi,Dl,Ul,Nl,yr,Xi,kl,Ol,x_,Fl,Oa,yi,Ko,vu,Mu,Bl,zl,vi,Jl,__,Kl,y_,v_,M_,b_,S_,w_,E_,Hl,me,iy,Fa,ei=cn(()=>{Qd=0,qc=1,tf=2,Su=1,Gl=2,Zn=3,mi=0,sn=1,Fe=2,di=0,Ms=1,rr=2,$c=3,Yc=4,ef=5,Di=100,nf=101,sf=102,Zc=103,Jc=104,rf=200,af=201,of=202,lf=203,jo=204,Qo=205,cf=206,hf=207,uf=208,df=209,ff=210,pf=211,mf=212,gf=213,xf=214,_f=0,yf=1,vf=2,ua=3,Mf=4,bf=5,Wl=6,Sf=7,Xl=0,wf=1,Ef=2,fi=0,Tf=1,Af=2,Rf=3,Cf=4,Pf=5,Lf=6,wu=300,ws=301,Es=302,tl=303,el=304,Ba=306,ar=1e3,Tn=1001,nl=1002,tn=1003,Kc=1004,xo=1005,_n=1006,If=1007,or=1008,pi=1009,Df=1010,Uf=1011,ql=1012,Eu=1013,hi=1014,ui=1015,lr=1016,Tu=1017,Au=1018,Ni=1020,Nf=1021,An=1023,kf=1024,Of=1025,ki=1026,Ts=1027,Ff=1028,Ru=1029,Bf=1030,Cu=1031,Pu=1033,_o=33776,yo=33777,vo=33778,Mo=33779,jc=35840,Qc=35841,th=35842,eh=35843,Lu=36196,nh=37492,ih=37496,sh=37808,rh=37809,ah=37810,oh=37811,lh=37812,ch=37813,hh=37814,uh=37815,dh=37816,fh=37817,ph=37818,mh=37819,gh=37820,xh=37821,bo=36492,_h=36494,yh=36495,zf=36283,vh=36284,Mh=36285,bh=36286,da=2300,fa=2301,So=2302,Sh=2400,wh=2401,Eh=2402,Iu=3e3,Oi=3001,Hf=3200,Vf=3201,Du=0,Gf=1,yn="",pe="srgb",Kn="srgb-linear",$l="display-p3",za="display-p3-linear",pa="linear",fe="srgb",ma="rec709",ga="p3",ts=7680,Th=519,Wf=512,Xf=513,qf=514,Uu=515,$f=516,Yf=517,Zf=518,Jf=519,Ah=35044,Nu=35048,Rh="300 es",il=1035,Jn=2e3,xa=2001,gi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wo=Math.PI/180,sl=180/Math.PI;ft=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],x=s[0],m=s[3],f=s[6],v=s[1],_=s[4],S=s[7],R=s[2],T=s[5],b=s[8];return r[0]=a*x+o*v+l*R,r[3]=a*m+o*_+l*T,r[6]=a*f+o*S+l*b,r[1]=c*x+h*v+u*R,r[4]=c*m+h*_+u*T,r[7]=c*f+h*S+u*b,r[2]=d*x+p*v+g*R,r[5]=d*m+p*_+g*T,r[8]=d*f+p*S+g*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(To.makeScale(t,e)),this}rotate(t){return this.premultiply(To.makeRotation(-t)),this}translate(t,e){return this.premultiply(To.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},To=new Jt;Ph={};Lh=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ih=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fr={[Kn]:{transfer:pa,primaries:ma,toReference:i=>i,fromReference:i=>i},[pe]:{transfer:fe,primaries:ma,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[za]:{transfer:pa,primaries:ga,toReference:i=>i.applyMatrix3(Ih),fromReference:i=>i.applyMatrix3(Lh)},[$l]:{transfer:fe,primaries:ga,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ih),fromReference:i=>i.applyMatrix3(Lh).convertLinearToSRGB()}},Qf=new Set([Kn,za]),oe={enabled:!0,_workingColorSpace:Kn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Qf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Fr[t].toReference,s=Fr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Fr[i].primaries},getTransfer:function(i){return i===yn?pa:Fr[i].transfer}};ya=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{es===void 0&&(es=_a("canvas")),es.width=t.width,es.height=t.height;let n=es.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=es}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=_a("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=bs(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bs(e[n]/255)*255):e[n]=bs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},tp=0,va=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Ns(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ro(s[a].image)):r.push(Ro(s[a]))}else r=Ro(s);n.url=r}return e||(t.images[this.uuid]=n),n}};ep=0,vn=class i extends gi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Tn,s=Tn,r=_n,a=or,o=An,l=pi,c=i.DEFAULT_ANISOTROPY,h=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Ns(),this.name="",this.source=new va(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Oi?pe:yn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ar:t.x=t.x-Math.floor(t.x);break;case Tn:t.x=t.x<0?0:1;break;case nl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ar:t.y=t.y-Math.floor(t.y);break;case Tn:t.y=t.y<0?0:1;break;case nl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pe?Oi:Iu}set encoding(t){tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Oi?pe:yn}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=wu;vn.DEFAULT_ANISOTROPY=1;Be=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,S=(p+1)/2,R=(f+1)/2,T=(h+d)/4,b=(u+x)/4,C=(g+m)/4;return _>S&&_>R?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=b/n):S>R?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=T/s,r=C/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=b/r,s=C/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},al=class extends gi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(tr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Oi?pe:yn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new vn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new va(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},jn=class extends al{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ma=class extends vn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ol=class extends vn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},kn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==p||h!==g){let m=1-o,f=l*d+c*p+h*g+u*x,v=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let R=Math.sqrt(_),T=Math.atan2(R,f*v);m=Math.sin(m*T)/R,o=Math.sin(o*T)/R}let S=o*v;if(l=l*m+d*S,c=c*m+p*S,h=h*m+g*S,u=u*m+x*S,m===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Co.copy(this).projectOnVector(t),this.sub(Co)}reflect(t){return this.sub(Co.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Co=new L,Dh=new kn,Qn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,bn):bn.fromBufferAttribute(r,a),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Br.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Br.copy(n.boundingBox)),Br.applyMatrix4(t.matrixWorld),this.union(Br)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ys),zr.subVectors(this.max,Ys),ns.subVectors(t.a,Ys),is.subVectors(t.b,Ys),ss.subVectors(t.c,Ys),ri.subVectors(is,ns),ai.subVectors(ss,is),Ri.subVectors(ns,ss);let e=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-Ri.z,Ri.y,ri.z,0,-ri.x,ai.z,0,-ai.x,Ri.z,0,-Ri.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-Ri.y,Ri.x,0];return!Po(e,ns,is,ss,zr)||(e=[1,0,0,0,1,0,0,0,1],!Po(e,ns,is,ss,zr))?!1:(Hr.crossVectors(ri,ai),e=[Hr.x,Hr.y,Hr.z],Po(e,ns,is,ss,zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Wn=[new L,new L,new L,new L,new L,new L,new L,new L],bn=new L,Br=new Qn,ns=new L,is=new L,ss=new L,ri=new L,ai=new L,Ri=new L,Ys=new L,zr=new L,Hr=new L,Ci=new L;np=new Qn,Zs=new L,Lo=new L,Fi=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):np.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zs.subVectors(t,this.center);let e=Zs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Zs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zs.copy(t.center).add(Lo)),this.expandByPoint(Zs.copy(t.center).sub(Lo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xn=new L,Io=new L,Vr=new L,oi=new L,Do=new L,Gr=new L,Uo=new L,ba=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Io.copy(t).add(e).multiplyScalar(.5),Vr.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(Io);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Vr),o=oi.dot(this.direction),l=-oi.dot(Vr),c=oi.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Io).addScaledVector(Vr,d),p}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);let n=Xn.dot(this.direction),s=Xn.dot(Xn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,s,r){Do.subVectors(e,t),Gr.subVectors(n,t),Uo.crossVectors(Do,Gr);let a=this.direction.dot(Uo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,t);let l=o*this.direction.dot(Gr.crossVectors(oi,Gr));if(l<0)return null;let c=o*this.direction.dot(Do.cross(oi));if(c<0||l+c>a)return null;let h=-o*oi.dot(Uo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ge=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,x,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,x,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),a=1/rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,p=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ip,t,sp)}lookAt(t,e,n){let s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),li.crossVectors(n,hn),li.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),li.crossVectors(n,hn)),li.normalize(),Wr.crossVectors(hn,li),s[0]=li.x,s[4]=Wr.x,s[8]=hn.x,s[1]=li.y,s[5]=Wr.y,s[9]=hn.y,s[2]=li.z,s[6]=Wr.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],v=n[3],_=n[7],S=n[11],R=n[15],T=s[0],b=s[4],C=s[8],y=s[12],M=s[1],D=s[5],k=s[9],j=s[13],I=s[2],O=s[6],q=s[10],J=s[14],Z=s[3],$=s[7],Q=s[11],it=s[15];return r[0]=a*T+o*M+l*I+c*Z,r[4]=a*b+o*D+l*O+c*$,r[8]=a*C+o*k+l*q+c*Q,r[12]=a*y+o*j+l*J+c*it,r[1]=h*T+u*M+d*I+p*Z,r[5]=h*b+u*D+d*O+p*$,r[9]=h*C+u*k+d*q+p*Q,r[13]=h*y+u*j+d*J+p*it,r[2]=g*T+x*M+m*I+f*Z,r[6]=g*b+x*D+m*O+f*$,r[10]=g*C+x*k+m*q+f*Q,r[14]=g*y+x*j+m*J+f*it,r[3]=v*T+_*M+S*I+R*Z,r[7]=v*b+_*D+S*O+R*$,r[11]=v*C+_*k+S*q+R*Q,r[15]=v*y+_*j+S*J+R*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*p-n*l*p)+x*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],v=u*m*c-x*d*c+x*l*p-o*m*p-u*l*f+o*d*f,_=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,S=h*x*c-g*u*c+g*o*p-a*x*p-h*o*f+a*u*f,R=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,T=e*v+n*_+s*S+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/T;return t[0]=v*b,t[1]=(x*d*r-u*m*r-x*s*p+n*m*p+u*s*f-n*d*f)*b,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*f+n*l*f)*b,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*b,t[4]=_*b,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*b,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*f-e*l*f)*b,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*p+e*l*p)*b,t[8]=S*b,t[9]=(g*u*r-h*x*r-g*n*p+e*x*p+h*n*f-e*u*f)*b,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*f+e*o*f)*b,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*b,t[12]=R*b,t[13]=(h*x*s-g*u*s+g*n*d-e*x*d-h*n*m+e*u*m)*b,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*m-e*o*m)*b,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*b,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,x=a*h,m=a*u,f=o*u,v=l*c,_=l*h,S=l*u,R=n.x,T=n.y,b=n.z;return s[0]=(1-(x+f))*R,s[1]=(p+S)*R,s[2]=(g-_)*R,s[3]=0,s[4]=(p-S)*T,s[5]=(1-(d+f))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(g+_)*b,s[9]=(m-v)*b,s[10]=(1-(d+x))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=rs.set(s[0],s[1],s[2]).length(),a=rs.set(s[4],s[5],s[6]).length(),o=rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Sn.copy(this);let c=1/r,h=1/a,u=1/o;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,e.setFromRotationMatrix(Sn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Jn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,g;if(o===Jn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===xa)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Jn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,p=(n+s)*h,g,x;if(o===Jn)g=(a+r)*u,x=-2*u;else if(o===xa)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},rs=new L,Sn=new ge,ip=new L(0,0,0),sp=new L(1,1,1),li=new L,Wr=new L,hn=new L,Uh=new ge,Nh=new kn,As=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Uh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};As.DEFAULT_ORDER="XYZ";cr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},rp=0,kh=new L,as=new kn,qn=new ge,Xr=new L,Js=new L,ap=new L,op=new kn,Oh=new L(1,0,0),Fh=new L(0,1,0),Bh=new L(0,0,1),lp={type:"added"},cp={type:"removed"},Le=class i extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new As,n=new kn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new Jt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(Oh,t)}rotateY(t){return this.rotateOnAxis(Fh,t)}rotateZ(t){return this.rotateOnAxis(Bh,t)}translateOnAxis(t,e){return kh.copy(t).applyQuaternion(this.quaternion),this.position.add(kh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oh,t)}translateY(t){return this.translateOnAxis(Fh,t)}translateZ(t){return this.translateOnAxis(Bh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xr.copy(t):Xr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Js,Xr,this.up):qn.lookAt(Xr,Js,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),as.setFromRotationMatrix(qn),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(lp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cp)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,t,ap),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,op,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Le.DEFAULT_UP=new L(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;wn=new L,$n=new L,No=new L,Yn=new L,os=new L,ls=new L,zh=new L,ko=new L,Oo=new L,Fo=new L,qr=!1,xs=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),wn.subVectors(t,e),s.cross(wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){wn.subVectors(s,e),$n.subVectors(n,e),No.subVectors(t,e);let a=wn.dot(wn),o=wn.dot($n),l=wn.dot(No),c=$n.dot($n),h=$n.dot(No),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getUV(t,e,n,s,r,a,o,l){return qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qr=!0),this.getInterpolation(t,e,n,s,r,a,o,l)}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(a,Yn.y),l.addScaledVector(o,Yn.z),l)}static isFrontFacing(t,e,n,s){return wn.subVectors(n,e),$n.subVectors(t,e),wn.cross($n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),wn.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qr=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;os.subVectors(s,n),ls.subVectors(r,n),ko.subVectors(t,n);let l=os.dot(ko),c=ls.dot(ko);if(l<=0&&c<=0)return e.copy(n);Oo.subVectors(t,s);let h=os.dot(Oo),u=ls.dot(Oo);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(os,a);Fo.subVectors(t,r);let p=os.dot(Fo),g=ls.dot(Fo);if(g>=0&&p<=g)return e.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ls,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return zh.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(zh,o);let f=1/(m+x+d);return a=x*f,o=d*f,e.copy(n).addScaledVector(os,a).addScaledVector(ls,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},$r={h:0,s:0,l:0};Pt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=Kf(t,1),e=Ve(e,0,1),n=Ve(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Bo(a,r,t+1/3),this.g=Bo(a,r,t),this.b=Bo(a,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pe){let n=Ou[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}copyLinearToSRGB(t){return this.r=Ao(t.r),this.g=Ao(t.g),this.b=Ao(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pe){return oe.fromWorkingColorSpace(Ze.copy(this),t),Math.round(Ve(Ze.r*255,0,255))*65536+Math.round(Ve(Ze.g*255,0,255))*256+Math.round(Ve(Ze.b*255,0,255))}getHexString(t=pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Ze.copy(this),e);let n=Ze.r,s=Ze.g,r=Ze.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=pe){oe.fromWorkingColorSpace(Ze.copy(this),t);let e=Ze.r,n=Ze.g,s=Ze.b;return t!==pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL($r);let n=Eo(ci.h,$r.h,e),s=Eo(ci.s,$r.s,e),r=Eo(ci.l,$r.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ze=new Pt;Pt.NAMES=Ou;hp=0,Bi=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=Ms,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jo,this.blendDst=Qo,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Th,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jo&&(n.blendSrc=this.blendSrc),this.blendDst!==Qo&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ua&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Th&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ce=class extends Bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Re=new L,Yr=new ft,dn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ah,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yr.fromBufferAttribute(this,e),Yr.applyMatrix3(t),this.setXY(e,Yr.x,Yr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$s(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$s(e,this.array)),e}setX(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$s(e,this.array)),e}setY(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$s(e,this.array)),e}setW(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),s=nn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ah&&(t.usage=this.usage),t}},Sa=class extends dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}},wa=class extends dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}},jt=class extends dn{constructor(t,e,n){super(new Float32Array(t),e,n)}},up=0,xn=new ge,zo=new Le,cs=new L,un=new Qn,Ks=new Qn,Oe=new L,Ge=class i extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ku(t)?wa:Sa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return zo.lookAt(t),zo.updateMatrix(),this.applyMatrix4(zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(un.min,Ks.min),un.expandByPoint(Oe),Oe.addVectors(un.max,Ks.max),un.expandByPoint(Oe)):(un.expandByPoint(Ks.min),un.expandByPoint(Ks.max))}un.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Oe.fromBufferAttribute(o,c),l&&(cs.fromBufferAttribute(t,c),Oe.add(cs)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let M=0;M<o;M++)c[M]=new L,h[M]=new L;let u=new L,d=new L,p=new L,g=new ft,x=new ft,m=new ft,f=new L,v=new L;function _(M,D,k){u.fromArray(s,M*3),d.fromArray(s,D*3),p.fromArray(s,k*3),g.fromArray(a,M*2),x.fromArray(a,D*2),m.fromArray(a,k*2),d.sub(u),p.sub(u),x.sub(g),m.sub(g);let j=1/(x.x*m.y-m.x*x.y);isFinite(j)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(j),v.copy(p).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(j),c[M].add(f),c[D].add(f),c[k].add(f),h[M].add(v),h[D].add(v),h[k].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let M=0,D=S.length;M<D;++M){let k=S[M],j=k.start,I=k.count;for(let O=j,q=j+I;O<q;O+=3)_(n[O+0],n[O+1],n[O+2])}let R=new L,T=new L,b=new L,C=new L;function y(M){b.fromArray(r,M*3),C.copy(b);let D=c[M];R.copy(D),R.sub(b.multiplyScalar(b.dot(D))).normalize(),T.crossVectors(C,D);let j=T.dot(h[M])<0?-1:1;l[M*4]=R.x,l[M*4+1]=R.y,l[M*4+2]=R.z,l[M*4+3]=j}for(let M=0,D=S.length;M<D;++M){let k=S[M],j=k.start,I=k.count;for(let O=j,q=j+I;O<q;O+=3)y(n[O+0]),y(n[O+1]),y(n[O+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new dn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hh=new ge,Pi=new ba,Zr=new Fi,Vh=new L,hs=new L,us=new L,ds=new L,Ho=new L,Jr=new L,Kr=new ft,jr=new ft,Qr=new ft,Gh=new L,Wh=new L,Xh=new L,ta=new L,ea=new L,wt=class extends Le{constructor(t=new Ge,e=new Ce){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Ho.fromBufferAttribute(u,t),a?Jr.addScaledVector(Ho,h):Jr.addScaledVector(Ho.sub(e),h))}e.add(Jr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(r),Pi.copy(t.ray).recast(t.near),!(Zr.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Zr,Vh)===null||Pi.origin.distanceToSquared(Vh)>(t.far-t.near)**2))&&(Hh.copy(r).invert(),Pi.copy(t.ray).applyMatrix4(Hh),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,R=_;S<R;S+=3){let T=o.getX(S),b=o.getX(S+1),C=o.getX(S+2);s=na(this,f,t,n,c,h,u,T,b,C),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let v=o.getX(m),_=o.getX(m+1),S=o.getX(m+2);s=na(this,a,t,n,c,h,u,v,_,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,R=_;S<R;S+=3){let T=S,b=S+1,C=S+2;s=na(this,f,t,n,c,h,u,T,b,C),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let v=m,_=m+1,S=m+2;s=na(this,a,t,n,c,h,u,v,_,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};de=class i extends Ge{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(u,2));function g(x,m,f,v,_,S,R,T,b,C,y){let M=S/b,D=R/C,k=S/2,j=R/2,I=T/2,O=b+1,q=C+1,J=0,Z=0,$=new L;for(let Q=0;Q<q;Q++){let it=Q*D-j;for(let lt=0;lt<O;lt++){let X=lt*M-k;$[x]=X*v,$[m]=it*_,$[f]=I,c.push($.x,$.y,$.z),$[x]=0,$[m]=0,$[f]=T>0?1:-1,h.push($.x,$.y,$.z),u.push(lt/b),u.push(1-Q/C),J+=1}}for(let Q=0;Q<C;Q++)for(let it=0;it<b;it++){let lt=d+it+O*Q,X=d+it+O*(Q+1),K=d+(it+1)+O*(Q+1),ot=d+(it+1)+O*Q;l.push(lt,X,ot),l.push(X,K,ot),Z+=6}o.addGroup(p,Z,y),p+=Z,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};pp={clone:Rs,merge:Qe},mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rn=class extends Bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mp,this.fragmentShader=gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=fp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ea=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pe=class extends Ea{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=sl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sl*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(wo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},fs=-90,ps=1,ll=class extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pe(fs,ps,t,e);s.layers=this.layers,this.add(s);let r=new Pe(fs,ps,t,e);r.layers=this.layers,this.add(r);let a=new Pe(fs,ps,t,e);a.layers=this.layers,this.add(a);let o=new Pe(fs,ps,t,e);o.layers=this.layers,this.add(o);let l=new Pe(fs,ps,t,e);l.layers=this.layers,this.add(l);let c=new Pe(fs,ps,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ta=class extends vn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ws,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},cl=class extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(tr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Oi?pe:yn),this.texture=new Ta(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:_n}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new de(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:di});r.uniforms.tEquirect.value=e;let a=new wt(s,r),o=e.minFilter;return e.minFilter===or&&(e.minFilter=_n),new ll(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Vo=new L,xp=new L,_p=new Jt,En=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Vo.subVectors(n,e).cross(xp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Vo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||_p.getNormalMatrix(t),s=this.coplanarPoint(Vo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Li=new Fi,ia=new L,hr=class{constructor(t=new En,e=new En,n=new En,s=new En,r=new En,a=new En){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Jn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],x=s[10],m=s[11],f=s[12],v=s[13],_=s[14],S=s[15];if(n[0].setComponents(l-r,d-c,m-p,S-f).normalize(),n[1].setComponents(l+r,d+c,m+p,S+f).normalize(),n[2].setComponents(l+a,d+h,m+g,S+v).normalize(),n[3].setComponents(l-a,d-h,m-g,S-v).normalize(),n[4].setComponents(l-o,d-u,m-x,S-_).normalize(),e===Jn)n[5].setComponents(l+o,d+u,m+x,S+_).normalize();else if(e===xa)n[5].setComponents(o,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ia.x=s.normal.x>0?t.max.x:t.min.x,ia.y=s.normal.y>0?t.max.y:t.min.y,ia.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ia)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};zi=class i extends Ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){let v=f*d-a;for(let _=0;_<c;_++){let S=_*u-r;g.push(S,-v,0),x.push(0,0,1),m.push(_/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){let _=v+c*f,S=v+c*(f+1),R=v+1+c*(f+1),T=v+1+c*f;p.push(_,S,T),p.push(S,R,T)}this.setIndex(p),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(x,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mp=`#ifdef USE_ALPHAHASH
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
#endif`,bp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tp=`#ifdef USE_AOMAP
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
#endif`,Ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rp=`#ifdef USE_BATCHING
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
#endif`,Cp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ip=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dp=`#ifdef USE_IRIDESCENCE
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
#endif`,Up=`#ifdef USE_BUMPMAP
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
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Gp=`#define PI 3.141592653589793
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
} // validated`,Wp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xp=`vec3 transformedNormal = objectNormal;
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
#endif`,qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kp=`
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
}`,jp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,om=`#ifdef USE_GRADIENTMAP
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
}`,lm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dm=`uniform bool receiveShadow;
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
#endif`,fm=`#ifdef USE_ENVMAP
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
#endif`,pm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_m=`PhysicalMaterial material;
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
#endif`,ym=`struct PhysicalMaterial {
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
}`,vm=`
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
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
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
#endif`,bm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Em=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Tm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Am=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pm=`#if defined( USE_POINTS_UV )
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
#endif`,Lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Um=`#ifdef USE_MORPHNORMALS
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
#endif`,Nm=`#ifdef USE_MORPHTARGETS
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
#endif`,km=`#ifdef USE_MORPHTARGETS
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
#endif`,Om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vm=`#ifdef USE_NORMALMAP
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
#endif`,Gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ym=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Km=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,s0=`float getShadowMask() {
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
}`,r0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a0=`#ifdef USE_SKINNING
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
#endif`,o0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l0=`#ifdef USE_SKINNING
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
#endif`,c0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,f0=`#ifdef USE_TRANSMISSION
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
#endif`,p0=`#ifdef USE_TRANSMISSION
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
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,y0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v0=`uniform sampler2D t2D;
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
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`#include <common>
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
}`,T0=`#if DEPTH_PACKING == 3200
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
}`,A0=`#define DISTANCE
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
}`,R0=`#define DISTANCE
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
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`uniform float scale;
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
}`,I0=`uniform vec3 diffuse;
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
}`,D0=`#include <common>
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
}`,U0=`uniform vec3 diffuse;
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
}`,N0=`#define LAMBERT
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
}`,k0=`#define LAMBERT
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
}`,O0=`#define MATCAP
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
}`,F0=`#define MATCAP
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
}`,B0=`#define NORMAL
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
}`,z0=`#define NORMAL
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
}`,H0=`#define PHONG
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
}`,V0=`#define PHONG
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
}`,G0=`#define STANDARD
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
}`,W0=`#define STANDARD
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
}`,X0=`#define TOON
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
}`,q0=`#define TOON
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
}`,$0=`uniform float size;
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
}`,Y0=`uniform vec3 diffuse;
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
}`,Z0=`#include <common>
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
}`,J0=`uniform vec3 color;
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
}`,K0=`uniform float rotation;
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
}`,j0=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:vp,alphahash_pars_fragment:Mp,alphamap_fragment:bp,alphamap_pars_fragment:Sp,alphatest_fragment:wp,alphatest_pars_fragment:Ep,aomap_fragment:Tp,aomap_pars_fragment:Ap,batching_pars_vertex:Rp,batching_vertex:Cp,begin_vertex:Pp,beginnormal_vertex:Lp,bsdfs:Ip,iridescence_fragment:Dp,bumpmap_pars_fragment:Up,clipping_planes_fragment:Np,clipping_planes_pars_fragment:kp,clipping_planes_pars_vertex:Op,clipping_planes_vertex:Fp,color_fragment:Bp,color_pars_fragment:zp,color_pars_vertex:Hp,color_vertex:Vp,common:Gp,cube_uv_reflection_fragment:Wp,defaultnormal_vertex:Xp,displacementmap_pars_vertex:qp,displacementmap_vertex:$p,emissivemap_fragment:Yp,emissivemap_pars_fragment:Zp,colorspace_fragment:Jp,colorspace_pars_fragment:Kp,envmap_fragment:jp,envmap_common_pars_fragment:Qp,envmap_pars_fragment:tm,envmap_pars_vertex:em,envmap_physical_pars_fragment:fm,envmap_vertex:nm,fog_vertex:im,fog_pars_vertex:sm,fog_fragment:rm,fog_pars_fragment:am,gradientmap_pars_fragment:om,lightmap_fragment:lm,lightmap_pars_fragment:cm,lights_lambert_fragment:hm,lights_lambert_pars_fragment:um,lights_pars_begin:dm,lights_toon_fragment:pm,lights_toon_pars_fragment:mm,lights_phong_fragment:gm,lights_phong_pars_fragment:xm,lights_physical_fragment:_m,lights_physical_pars_fragment:ym,lights_fragment_begin:vm,lights_fragment_maps:Mm,lights_fragment_end:bm,logdepthbuf_fragment:Sm,logdepthbuf_pars_fragment:wm,logdepthbuf_pars_vertex:Em,logdepthbuf_vertex:Tm,map_fragment:Am,map_pars_fragment:Rm,map_particle_fragment:Cm,map_particle_pars_fragment:Pm,metalnessmap_fragment:Lm,metalnessmap_pars_fragment:Im,morphcolor_vertex:Dm,morphnormal_vertex:Um,morphtarget_pars_vertex:Nm,morphtarget_vertex:km,normal_fragment_begin:Om,normal_fragment_maps:Fm,normal_pars_fragment:Bm,normal_pars_vertex:zm,normal_vertex:Hm,normalmap_pars_fragment:Vm,clearcoat_normal_fragment_begin:Gm,clearcoat_normal_fragment_maps:Wm,clearcoat_pars_fragment:Xm,iridescence_pars_fragment:qm,opaque_fragment:$m,packing:Ym,premultiplied_alpha_fragment:Zm,project_vertex:Jm,dithering_fragment:Km,dithering_pars_fragment:jm,roughnessmap_fragment:Qm,roughnessmap_pars_fragment:t0,shadowmap_pars_fragment:e0,shadowmap_pars_vertex:n0,shadowmap_vertex:i0,shadowmask_pars_fragment:s0,skinbase_vertex:r0,skinning_pars_vertex:a0,skinning_vertex:o0,skinnormal_vertex:l0,specularmap_fragment:c0,specularmap_pars_fragment:h0,tonemapping_fragment:u0,tonemapping_pars_fragment:d0,transmission_fragment:f0,transmission_pars_fragment:p0,uv_pars_fragment:m0,uv_pars_vertex:g0,uv_vertex:x0,worldpos_vertex:_0,background_vert:y0,background_frag:v0,backgroundCube_vert:M0,backgroundCube_frag:b0,cube_vert:S0,cube_frag:w0,depth_vert:E0,depth_frag:T0,distanceRGBA_vert:A0,distanceRGBA_frag:R0,equirect_vert:C0,equirect_frag:P0,linedashed_vert:L0,linedashed_frag:I0,meshbasic_vert:D0,meshbasic_frag:U0,meshlambert_vert:N0,meshlambert_frag:k0,meshmatcap_vert:O0,meshmatcap_frag:F0,meshnormal_vert:B0,meshnormal_frag:z0,meshphong_vert:H0,meshphong_frag:V0,meshphysical_vert:G0,meshphysical_frag:W0,meshtoon_vert:X0,meshtoon_frag:q0,points_vert:$0,points_frag:Y0,shadow_vert:Z0,shadow_frag:J0,sprite_vert:K0,sprite_frag:j0},at={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Nn={basic:{uniforms:Qe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Qe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Qe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Qe([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Qe([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Qe([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Qe([at.points,at.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Qe([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Qe([at.common,at.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Qe([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Qe([at.sprite,at.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Qe([at.common,at.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Qe([at.lights,at.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Nn.physical={uniforms:Qe([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};sa={r:0,b:0,g:0};Aa=class extends Ea{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},_s=4,qh=[.125,.215,.35,.446,.526,.582],Ui=20,Go=new Aa,$h=new Pt,Wo=null,Xo=0,qo=0,Ii=(1+Math.sqrt(5))/2,ms=1/Ii,Yh=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Ii,ms),new L(0,Ii,-ms),new L(ms,0,Ii),new L(-ms,0,Ii),new L(Ii,ms,0),new L(-Ii,ms,0)],Ra=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wo,Xo,qo),t.scissorTest=!1,ra(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ws||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:lr,format:An,colorSpace:Kn,depthBuffer:!1},s=Zh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rg(r)),this._blurMaterial=ag(r,t,e)}return s}_compileMaterial(t){let e=new wt(this._lodPlanes[0],t);this._renderer.compile(e,Go)}_sceneToCubeUV(t,e,n,s){let o=new Pe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor($h),h.toneMapping=fi,h.autoClear=!1;let p=new Ce({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new wt(new de,p),x=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy($h),x=!0);for(let f=0;f<6;f++){let v=f%3;v===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):v===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let _=this._cubeSize;ra(s,v*_,f>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ws||t.mapping===Es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new wt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ra(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Go)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Yh[(s-1)%Yh.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new wt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ui-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Ui;m>Ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ui}`);let f=[],v=0;for(let b=0;b<Ui;++b){let C=b/x,y=Math.exp(-C*C/2);f.push(y),b===0?v+=y:b<m&&(v+=2*y)}for(let b=0;b<f.length;b++)f[b]=f[b]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let S=this._sizeLods[s],R=3*S*(s>_-_s?s-_+_s:0),T=4*(this._cubeSize-S);ra(e,R,T,3*S,2*S),l.setRenderTarget(e),l.render(u,Go)}};Ca=class extends vn{constructor(t,e,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:ki,h!==ki&&h!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ki&&(n=hi),n===void 0&&h===Ts&&(n=Ni),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},zu=new vn,Hu=new Ca(1,1);Hu.compareFunction=Uu;Vu=new Ma,Gu=new ol,Wu=new Ta,jh=[],Qh=[],tu=new Float32Array(16),eu=new Float32Array(9),nu=new Float32Array(4);hl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ng(e.type)}},ul=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ex(e.type)}},dl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},$o=/(\w+)(\])?(\[|\.)?/g;Ss=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);nx(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};ix=37297,sx=0;fx=/^[ \t]*#include +<([\w\d./]+)>/gm;px=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);gx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;wx=0,pl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ml(t),e.set(t,n)),n}},ml=class{constructor(t){this.id=wx++,this.code=t,this.usedTimes=0}};Lx=0;gl=class extends Bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},xl=class extends Bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Nx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kx=`uniform sampler2D shadow_pass;
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
}`;_l=class extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ie=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hx={type:"move"},er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},yl=class extends gi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,x=e.getContextAttributes(),m=null,f=null,v=[],_=[],S=new ft,R=null,T=new Pe;T.layers.enable(1),T.viewport=new Be;let b=new Pe;b.layers.enable(2),b.viewport=new Be;let C=[T,b],y=new _l;y.layers.enable(1),y.layers.enable(2);let M=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=v[X];return K===void 0&&(K=new er,v[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=v[X];return K===void 0&&(K=new er,v[X]=K),K.getGripSpace()},this.getHand=function(X){let K=v[X];return K===void 0&&(K=new er,v[X]=K),K.getHandSpace()};function k(X){let K=_.indexOf(X.inputSource);if(K===-1)return;let ot=v[K];ot!==void 0&&(ot.update(X.inputSource,X.frame,c||a),ot.dispatchEvent({type:X.type,data:X.inputSource}))}function j(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",I);for(let X=0;X<v.length;X++){let K=_[X];K!==null&&(_[X]=null,v[X].disconnect(K))}M=null,D=null,t.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,lt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",j),s.addEventListener("inputsourceschange",I),x.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(S),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let K={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new jn(p.framebufferWidth,p.framebufferHeight,{format:An,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let K=null,ot=null,Tt=null;x.depth&&(Tt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=x.stencil?Ts:ki,ot=x.stencil?Ni:hi);let St={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(St),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new jn(d.textureWidth,d.textureHeight,{format:An,type:pi,depthTexture:new Ca(d.textureWidth,d.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let zt=t.properties.get(f);zt.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),lt.setContext(s),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(X){for(let K=0;K<X.removed.length;K++){let ot=X.removed[K],Tt=_.indexOf(ot);Tt>=0&&(_[Tt]=null,v[Tt].disconnect(ot))}for(let K=0;K<X.added.length;K++){let ot=X.added[K],Tt=_.indexOf(ot);if(Tt===-1){for(let zt=0;zt<v.length;zt++)if(zt>=_.length){_.push(ot),Tt=zt;break}else if(_[zt]===null){_[zt]=ot,Tt=zt;break}if(Tt===-1)break}let St=v[Tt];St&&St.connect(ot)}}let O=new L,q=new L;function J(X,K,ot){O.setFromMatrixPosition(K.matrixWorld),q.setFromMatrixPosition(ot.matrixWorld);let Tt=O.distanceTo(q),St=K.projectionMatrix.elements,zt=ot.projectionMatrix.elements,Vt=St[14]/(St[10]-1),Dt=St[14]/(St[10]+1),ne=(St[9]+1)/St[5],B=(St[9]-1)/St[5],Je=(St[8]-1)/St[0],Rt=(zt[8]+1)/zt[0],Ft=Vt*Je,yt=Vt*Rt,xe=Tt/(-Je+Rt),Xt=xe*-Je;K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Xt),X.translateZ(xe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let A=Vt+xe,w=Dt+xe,H=Ft-Xt,nt=yt+(Tt-Xt),et=ne*Dt/w*A,st=B*Dt/w*A;X.projectionMatrix.makePerspective(H,nt,et,st,A,w),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function Z(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;y.near=b.near=T.near=X.near,y.far=b.far=T.far=X.far,(M!==y.near||D!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),M=y.near,D=y.far);let K=X.parent,ot=y.cameras;Z(y,K);for(let Tt=0;Tt<ot.length;Tt++)Z(ot[Tt],K);ot.length===2?J(y,T,b):y.projectionMatrix.copy(T.projectionMatrix),$(X,y,K)};function $(X,K,ot){ot===null?X.matrix.copy(K.matrixWorld):(X.matrix.copy(ot.matrixWorld),X.matrix.invert(),X.matrix.multiply(K.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=sl*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)};let Q=null;function it(X,K){if(h=K.getViewerPose(c||a),g=K,h!==null){let ot=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let Tt=!1;ot.length!==y.cameras.length&&(y.cameras.length=0,Tt=!0);for(let St=0;St<ot.length;St++){let zt=ot[St],Vt=null;if(p!==null)Vt=p.getViewport(zt);else{let ne=u.getViewSubImage(d,zt);Vt=ne.viewport,St===0&&(t.setRenderTargetTextures(f,ne.colorTexture,d.ignoreDepthValues?void 0:ne.depthStencilTexture),t.setRenderTarget(f))}let Dt=C[St];Dt===void 0&&(Dt=new Pe,Dt.layers.enable(St),Dt.viewport=new Be,C[St]=Dt),Dt.matrix.fromArray(zt.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(zt.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),St===0&&(y.matrix.copy(Dt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Tt===!0&&y.cameras.push(Dt)}}for(let ot=0;ot<v.length;ot++){let Tt=_[ot],St=v[ot];Tt!==null&&St!==void 0&&St.update(Tt,K,c||a)}Q&&Q(X,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let lt=new Bu;lt.setAnimationLoop(it),this.setAnimationLoop=function(X){Q=X},this.dispose=function(){}}};Hi=class{constructor(t={}){let{canvas:e=jf(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let p=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,f=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pe,this._useLegacyLights=!1,this.toneMapping=fi,this.toneMappingExposure=1;let _=this,S=!1,R=0,T=0,b=null,C=-1,y=null,M=new Be,D=new Be,k=null,j=new Pt(0),I=0,O=e.width,q=e.height,J=1,Z=null,$=null,Q=new Be(0,0,O,q),it=new Be(0,0,O,q),lt=!1,X=new hr,K=!1,ot=!1,Tt=null,St=new ge,zt=new ft,Vt=new L,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return b===null?J:1}let B=n;function Je(E,N){for(let V=0;V<E.length;V++){let W=E[V],z=e.getContext(W,N);if(z!==null)return z}return null}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",ct,!1),B===null){let N=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&N.shift(),B=Je(N,E),B===null)throw Je(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Rt,Ft,yt,xe,Xt,A,w,H,nt,et,st,vt,dt,gt,It,qt,tt,ae,Kt,Ot,At,xt,Gt,re;function Me(){Rt=new lg(B),Ft=new ng(B,Rt,t),Rt.init(Ft),xt=new zx(B,Rt,Ft),yt=new Fx(B,Rt,Ft),xe=new ug(B),Xt=new Tx,A=new Bx(B,Rt,yt,Xt,Ft,xt,xe),w=new sg(_),H=new og(_),nt=new yp(B,Ft),Gt=new tg(B,Rt,nt,Ft),et=new cg(B,nt,xe,Gt),st=new mg(B,et,nt,xe),Kt=new pg(B,Ft,A),qt=new ig(Xt),vt=new Ex(_,w,H,Rt,Ft,Gt,qt),dt=new Vx(_,Xt),gt=new Rx,It=new Ux(Rt,Ft),ae=new Q0(_,w,H,yt,st,d,l),tt=new Ox(_,st,Ft),re=new Gx(B,xe,Ft,yt),Ot=new eg(B,Rt,xe,Ft),At=new hg(B,Rt,xe,Ft),xe.programs=vt.programs,_.capabilities=Ft,_.extensions=Rt,_.properties=Xt,_.renderLists=gt,_.shadowMap=tt,_.state=yt,_.info=xe}Me();let Yt=new yl(_,B);this.xr=Yt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let E=Rt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Rt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(E){E!==void 0&&(J=E,this.setSize(O,q,!1))},this.getSize=function(E){return E.set(O,q)},this.setSize=function(E,N,V=!0){if(Yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=E,q=N,e.width=Math.floor(E*J),e.height=Math.floor(N*J),V===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(O*J,q*J).floor()},this.setDrawingBufferSize=function(E,N,V){O=E,q=N,J=V,e.width=Math.floor(E*V),e.height=Math.floor(N*V),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(M)},this.getViewport=function(E){return E.copy(Q)},this.setViewport=function(E,N,V,W){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,N,V,W),yt.viewport(M.copy(Q).multiplyScalar(J).floor())},this.getScissor=function(E){return E.copy(it)},this.setScissor=function(E,N,V,W){E.isVector4?it.set(E.x,E.y,E.z,E.w):it.set(E,N,V,W),yt.scissor(D.copy(it).multiplyScalar(J).floor())},this.getScissorTest=function(){return lt},this.setScissorTest=function(E){yt.setScissorTest(lt=E)},this.setOpaqueSort=function(E){Z=E},this.setTransparentSort=function(E){$=E},this.getClearColor=function(E){return E.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(E=!0,N=!0,V=!0){let W=0;if(E){let z=!1;if(b!==null){let mt=b.texture.format;z=mt===Pu||mt===Cu||mt===Ru}if(z){let mt=b.texture.type,Mt=mt===pi||mt===hi||mt===ql||mt===Ni||mt===Tu||mt===Au,Lt=ae.getClearColor(),Nt=ae.getClearAlpha(),$t=Lt.r,Bt=Lt.g,Ht=Lt.b;Mt?(p[0]=$t,p[1]=Bt,p[2]=Ht,p[3]=Nt,B.clearBufferuiv(B.COLOR,0,p)):(g[0]=$t,g[1]=Bt,g[2]=Ht,g[3]=Nt,B.clearBufferiv(B.COLOR,0,g))}else W|=B.COLOR_BUFFER_BIT}N&&(W|=B.DEPTH_BUFFER_BIT),V&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),gt.dispose(),It.dispose(),Xt.dispose(),w.dispose(),H.dispose(),st.dispose(),Gt.dispose(),re.dispose(),vt.dispose(),Yt.dispose(),Yt.removeEventListener("sessionstart",Ke),Yt.removeEventListener("sessionend",ue),Tt&&(Tt.dispose(),Tt=null),je.stop()};function rt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let E=xe.autoReset,N=tt.enabled,V=tt.autoUpdate,W=tt.needsUpdate,z=tt.type;Me(),xe.autoReset=E,tt.enabled=N,tt.autoUpdate=V,tt.needsUpdate=W,tt.type=z}function ct(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ht(E){let N=E.target;N.removeEventListener("dispose",ht),Ut(N)}function Ut(E){Ct(E),Xt.remove(E)}function Ct(E){let N=Xt.get(E).programs;N!==void 0&&(N.forEach(function(V){vt.releaseProgram(V)}),E.isShaderMaterial&&vt.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,V,W,z,mt){N===null&&(N=Dt);let Mt=z.isMesh&&z.matrixWorld.determinant()<0,Lt=$d(E,N,V,W,z);yt.setMaterial(W,Mt);let Nt=V.index,$t=1;if(W.wireframe===!0){if(Nt=et.getWireframeAttribute(V),Nt===void 0)return;$t=2}let Bt=V.drawRange,Ht=V.attributes.position,Ee=Bt.start*$t,ln=(Bt.start+Bt.count)*$t;mt!==null&&(Ee=Math.max(Ee,mt.start*$t),ln=Math.min(ln,(mt.start+mt.count)*$t)),Nt!==null?(Ee=Math.max(Ee,0),ln=Math.min(ln,Nt.count)):Ht!=null&&(Ee=Math.max(Ee,0),ln=Math.min(ln,Ht.count));let ke=ln-Ee;if(ke<0||ke===1/0)return;Gt.setup(z,W,Lt,V,Nt);let Gn,_e=Ot;if(Nt!==null&&(Gn=nt.get(Nt),_e=At,_e.setIndex(Gn)),z.isMesh)W.wireframe===!0?(yt.setLineWidth(W.wireframeLinewidth*ne()),_e.setMode(B.LINES)):_e.setMode(B.TRIANGLES);else if(z.isLine){let Zt=W.linewidth;Zt===void 0&&(Zt=1),yt.setLineWidth(Zt*ne()),z.isLineSegments?_e.setMode(B.LINES):z.isLineLoop?_e.setMode(B.LINE_LOOP):_e.setMode(B.LINE_STRIP)}else z.isPoints?_e.setMode(B.POINTS):z.isSprite&&_e.setMode(B.TRIANGLES);if(z.isBatchedMesh)_e.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)_e.renderInstances(Ee,ke,z.count);else if(V.isInstancedBufferGeometry){let Zt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,fo=Math.min(V.instanceCount,Zt);_e.renderInstances(Ee,ke,fo)}else _e.render(Ee,ke)};function ce(E,N,V){E.transparent===!0&&E.side===Fe&&E.forceSinglePass===!1?(E.side=sn,E.needsUpdate=!0,Or(E,N,V),E.side=mi,E.needsUpdate=!0,Or(E,N,V),E.side=Fe):Or(E,N,V)}this.compile=function(E,N,V=null){V===null&&(V=E),m=It.get(V),m.init(),v.push(m),V.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),E!==V&&E.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(_._useLegacyLights);let W=new Set;return E.traverse(function(z){let mt=z.material;if(mt)if(Array.isArray(mt))for(let Mt=0;Mt<mt.length;Mt++){let Lt=mt[Mt];ce(Lt,V,z),W.add(Lt)}else ce(mt,V,z),W.add(mt)}),v.pop(),m=null,W},this.compileAsync=function(E,N,V=null){let W=this.compile(E,N,V);return new Promise(z=>{function mt(){if(W.forEach(function(Mt){Xt.get(Mt).currentProgram.isReady()&&W.delete(Mt)}),W.size===0){z(E);return}setTimeout(mt,10)}Rt.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let he=null;function Ne(E){he&&he(E)}function Ke(){je.stop()}function ue(){je.start()}let je=new Bu;je.setAnimationLoop(Ne),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(E){he=E,Yt.setAnimationLoop(E),E===null?je.stop():je.start()},Yt.addEventListener("sessionstart",Ke),Yt.addEventListener("sessionend",ue),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Yt.enabled===!0&&Yt.isPresenting===!0&&(Yt.cameraAutoUpdate===!0&&Yt.updateCamera(N),N=Yt.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,N,b),m=It.get(E,v.length),m.init(),v.push(m),St.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(St),ot=this.localClippingEnabled,K=qt.init(this.clippingPlanes,ot),x=gt.get(E,f.length),x.init(),f.push(x),Un(E,N,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(Z,$),this.info.render.frame++,K===!0&&qt.beginShadows();let V=m.state.shadowsArray;if(tt.render(V,E,N),K===!0&&qt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(x,E),m.setupLights(_._useLegacyLights),N.isArrayCamera){let W=N.cameras;for(let z=0,mt=W.length;z<mt;z++){let Mt=W[z];zc(x,E,Mt,Mt.viewport)}}else zc(x,E,N);b!==null&&(A.updateMultisampleRenderTarget(b),A.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(_,E,N),Gt.resetDefaultState(),C=-1,y=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Un(E,N,V,W){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){W&&Vt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(St);let Mt=st.update(E),Lt=E.material;Lt.visible&&x.push(E,Mt,Lt,V,Vt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){let Mt=st.update(E),Lt=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Vt.copy(E.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Vt.copy(Mt.boundingSphere.center)),Vt.applyMatrix4(E.matrixWorld).applyMatrix4(St)),Array.isArray(Lt)){let Nt=Mt.groups;for(let $t=0,Bt=Nt.length;$t<Bt;$t++){let Ht=Nt[$t],Ee=Lt[Ht.materialIndex];Ee&&Ee.visible&&x.push(E,Mt,Ee,V,Vt.z,Ht)}}else Lt.visible&&x.push(E,Mt,Lt,V,Vt.z,null)}}let mt=E.children;for(let Mt=0,Lt=mt.length;Mt<Lt;Mt++)Un(mt[Mt],N,V,W)}function zc(E,N,V,W){let z=E.opaque,mt=E.transmissive,Mt=E.transparent;m.setupLightsView(V),K===!0&&qt.setGlobalState(_.clippingPlanes,V),mt.length>0&&qd(z,mt,N,V),W&&yt.viewport(M.copy(W)),z.length>0&&kr(z,N,V),mt.length>0&&kr(mt,N,V),Mt.length>0&&kr(Mt,N,V),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function qd(E,N,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;let mt=Ft.isWebGL2;Tt===null&&(Tt=new jn(1,1,{generateMipmaps:!0,type:Rt.has("EXT_color_buffer_half_float")?lr:pi,minFilter:or,samples:mt?4:0})),_.getDrawingBufferSize(zt),mt?Tt.setSize(zt.x,zt.y):Tt.setSize(rl(zt.x),rl(zt.y));let Mt=_.getRenderTarget();_.setRenderTarget(Tt),_.getClearColor(j),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear();let Lt=_.toneMapping;_.toneMapping=fi,kr(E,V,W),A.updateMultisampleRenderTarget(Tt),A.updateRenderTargetMipmap(Tt);let Nt=!1;for(let $t=0,Bt=N.length;$t<Bt;$t++){let Ht=N[$t],Ee=Ht.object,ln=Ht.geometry,ke=Ht.material,Gn=Ht.group;if(ke.side===Fe&&Ee.layers.test(W.layers)){let _e=ke.side;ke.side=sn,ke.needsUpdate=!0,Hc(Ee,V,W,ln,ke,Gn),ke.side=_e,ke.needsUpdate=!0,Nt=!0}}Nt===!0&&(A.updateMultisampleRenderTarget(Tt),A.updateRenderTargetMipmap(Tt)),_.setRenderTarget(Mt),_.setClearColor(j,I),_.toneMapping=Lt}function kr(E,N,V){let W=N.isScene===!0?N.overrideMaterial:null;for(let z=0,mt=E.length;z<mt;z++){let Mt=E[z],Lt=Mt.object,Nt=Mt.geometry,$t=W===null?Mt.material:W,Bt=Mt.group;Lt.layers.test(V.layers)&&Hc(Lt,N,V,Nt,$t,Bt)}}function Hc(E,N,V,W,z,mt){E.onBeforeRender(_,N,V,W,z,mt),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(_,N,V,W,E,mt),z.transparent===!0&&z.side===Fe&&z.forceSinglePass===!1?(z.side=sn,z.needsUpdate=!0,_.renderBufferDirect(V,N,W,z,E,mt),z.side=mi,z.needsUpdate=!0,_.renderBufferDirect(V,N,W,z,E,mt),z.side=Fe):_.renderBufferDirect(V,N,W,z,E,mt),E.onAfterRender(_,N,V,W,z,mt)}function Or(E,N,V){N.isScene!==!0&&(N=Dt);let W=Xt.get(E),z=m.state.lights,mt=m.state.shadowsArray,Mt=z.state.version,Lt=vt.getParameters(E,z.state,mt,N,V),Nt=vt.getProgramCacheKey(Lt),$t=W.programs;W.environment=E.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(E.isMeshStandardMaterial?H:w).get(E.envMap||W.environment),$t===void 0&&(E.addEventListener("dispose",ht),$t=new Map,W.programs=$t);let Bt=$t.get(Nt);if(Bt!==void 0){if(W.currentProgram===Bt&&W.lightsStateVersion===Mt)return Gc(E,Lt),Bt}else Lt.uniforms=vt.getUniforms(E),E.onBuild(V,Lt,_),E.onBeforeCompile(Lt,_),Bt=vt.acquireProgram(Lt,Nt),$t.set(Nt,Bt),W.uniforms=Lt.uniforms;let Ht=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ht.clippingPlanes=qt.uniform),Gc(E,Lt),W.needsLights=Zd(E),W.lightsStateVersion=Mt,W.needsLights&&(Ht.ambientLightColor.value=z.state.ambient,Ht.lightProbe.value=z.state.probe,Ht.directionalLights.value=z.state.directional,Ht.directionalLightShadows.value=z.state.directionalShadow,Ht.spotLights.value=z.state.spot,Ht.spotLightShadows.value=z.state.spotShadow,Ht.rectAreaLights.value=z.state.rectArea,Ht.ltc_1.value=z.state.rectAreaLTC1,Ht.ltc_2.value=z.state.rectAreaLTC2,Ht.pointLights.value=z.state.point,Ht.pointLightShadows.value=z.state.pointShadow,Ht.hemisphereLights.value=z.state.hemi,Ht.directionalShadowMap.value=z.state.directionalShadowMap,Ht.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ht.spotShadowMap.value=z.state.spotShadowMap,Ht.spotLightMatrix.value=z.state.spotLightMatrix,Ht.spotLightMap.value=z.state.spotLightMap,Ht.pointShadowMap.value=z.state.pointShadowMap,Ht.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Bt,W.uniformsList=null,Bt}function Vc(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=Ss.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Gc(E,N){let V=Xt.get(E);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function $d(E,N,V,W,z){N.isScene!==!0&&(N=Dt),A.resetTextureUnits();let mt=N.fog,Mt=W.isMeshStandardMaterial?N.environment:null,Lt=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Kn,Nt=(W.isMeshStandardMaterial?H:w).get(W.envMap||Mt),$t=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Bt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ht=!!V.morphAttributes.position,Ee=!!V.morphAttributes.normal,ln=!!V.morphAttributes.color,ke=fi;W.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ke=_.toneMapping);let Gn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,_e=Gn!==void 0?Gn.length:0,Zt=Xt.get(W),fo=m.state.lights;if(K===!0&&(ot===!0||E!==y)){let gn=E===y&&W.id===C;qt.setState(W,E,gn)}let be=!1;W.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==fo.state.version||Zt.outputColorSpace!==Lt||z.isBatchedMesh&&Zt.batching===!1||!z.isBatchedMesh&&Zt.batching===!0||z.isInstancedMesh&&Zt.instancing===!1||!z.isInstancedMesh&&Zt.instancing===!0||z.isSkinnedMesh&&Zt.skinning===!1||!z.isSkinnedMesh&&Zt.skinning===!0||z.isInstancedMesh&&Zt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Zt.instancingColor===!1&&z.instanceColor!==null||Zt.envMap!==Nt||W.fog===!0&&Zt.fog!==mt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==qt.numPlanes||Zt.numIntersection!==qt.numIntersection)||Zt.vertexAlphas!==$t||Zt.vertexTangents!==Bt||Zt.morphTargets!==Ht||Zt.morphNormals!==Ee||Zt.morphColors!==ln||Zt.toneMapping!==ke||Ft.isWebGL2===!0&&Zt.morphTargetsCount!==_e)&&(be=!0):(be=!0,Zt.__version=W.version);let Ti=Zt.currentProgram;be===!0&&(Ti=Or(W,N,z));let Wc=!1,qs=!1,po=!1,$e=Ti.getUniforms(),Ai=Zt.uniforms;if(yt.useProgram(Ti.program)&&(Wc=!0,qs=!0,po=!0),W.id!==C&&(C=W.id,qs=!0),Wc||y!==E){$e.setValue(B,"projectionMatrix",E.projectionMatrix),$e.setValue(B,"viewMatrix",E.matrixWorldInverse);let gn=$e.map.cameraPosition;gn!==void 0&&gn.setValue(B,Vt.setFromMatrixPosition(E.matrixWorld)),Ft.logarithmicDepthBuffer&&$e.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&$e.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,qs=!0,po=!0)}if(z.isSkinnedMesh){$e.setOptional(B,z,"bindMatrix"),$e.setOptional(B,z,"bindMatrixInverse");let gn=z.skeleton;gn&&(Ft.floatVertexTextures?(gn.boneTexture===null&&gn.computeBoneTexture(),$e.setValue(B,"boneTexture",gn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&($e.setOptional(B,z,"batchingTexture"),$e.setValue(B,"batchingTexture",z._matricesTexture,A));let mo=V.morphAttributes;if((mo.position!==void 0||mo.normal!==void 0||mo.color!==void 0&&Ft.isWebGL2===!0)&&Kt.update(z,V,Ti),(qs||Zt.receiveShadow!==z.receiveShadow)&&(Zt.receiveShadow=z.receiveShadow,$e.setValue(B,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ai.envMap.value=Nt,Ai.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),qs&&($e.setValue(B,"toneMappingExposure",_.toneMappingExposure),Zt.needsLights&&Yd(Ai,po),mt&&W.fog===!0&&dt.refreshFogUniforms(Ai,mt),dt.refreshMaterialUniforms(Ai,W,J,q,Tt),Ss.upload(B,Vc(Zt),Ai,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ss.upload(B,Vc(Zt),Ai,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&$e.setValue(B,"center",z.center),$e.setValue(B,"modelViewMatrix",z.modelViewMatrix),$e.setValue(B,"normalMatrix",z.normalMatrix),$e.setValue(B,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let gn=W.uniformsGroups;for(let go=0,Jd=gn.length;go<Jd;go++)if(Ft.isWebGL2){let Xc=gn[go];re.update(Xc,Ti),re.bind(Xc,Ti)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ti}function Yd(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Zd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,N,V){Xt.get(E.texture).__webglTexture=N,Xt.get(E.depthTexture).__webglTexture=V;let W=Xt.get(E);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,N){let V=Xt.get(E);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,V=0){b=E,R=N,T=V;let W=!0,z=null,mt=!1,Mt=!1;if(E){let Nt=Xt.get(E);Nt.__useDefaultFramebuffer!==void 0?(yt.bindFramebuffer(B.FRAMEBUFFER,null),W=!1):Nt.__webglFramebuffer===void 0?A.setupRenderTarget(E):Nt.__hasExternalTextures&&A.rebindTextures(E,Xt.get(E.texture).__webglTexture,Xt.get(E.depthTexture).__webglTexture);let $t=E.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Mt=!0);let Bt=Xt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Bt[N])?z=Bt[N][V]:z=Bt[N],mt=!0):Ft.isWebGL2&&E.samples>0&&A.useMultisampledRTT(E)===!1?z=Xt.get(E).__webglMultisampledFramebuffer:Array.isArray(Bt)?z=Bt[V]:z=Bt,M.copy(E.viewport),D.copy(E.scissor),k=E.scissorTest}else M.copy(Q).multiplyScalar(J).floor(),D.copy(it).multiplyScalar(J).floor(),k=lt;if(yt.bindFramebuffer(B.FRAMEBUFFER,z)&&Ft.drawBuffers&&W&&yt.drawBuffers(E,z),yt.viewport(M),yt.scissor(D),yt.setScissorTest(k),mt){let Nt=Xt.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+N,Nt.__webglTexture,V)}else if(Mt){let Nt=Xt.get(E.texture),$t=N||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Nt.__webglTexture,V||0,$t)}C=-1},this.readRenderTargetPixels=function(E,N,V,W,z,mt,Mt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Xt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(Lt=Lt[Mt]),Lt){yt.bindFramebuffer(B.FRAMEBUFFER,Lt);try{let Nt=E.texture,$t=Nt.format,Bt=Nt.type;if($t!==An&&xt.convert($t)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ht=Bt===lr&&(Rt.has("EXT_color_buffer_half_float")||Ft.isWebGL2&&Rt.has("EXT_color_buffer_float"));if(Bt!==pi&&xt.convert(Bt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Bt===ui&&(Ft.isWebGL2||Rt.has("OES_texture_float")||Rt.has("WEBGL_color_buffer_float")))&&!Ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-W&&V>=0&&V<=E.height-z&&B.readPixels(N,V,W,z,xt.convert($t),xt.convert(Bt),mt)}finally{let Nt=b!==null?Xt.get(b).__webglFramebuffer:null;yt.bindFramebuffer(B.FRAMEBUFFER,Nt)}}},this.copyFramebufferToTexture=function(E,N,V=0){let W=Math.pow(2,-V),z=Math.floor(N.image.width*W),mt=Math.floor(N.image.height*W);A.setTexture2D(N,0),B.copyTexSubImage2D(B.TEXTURE_2D,V,0,0,E.x,E.y,z,mt),yt.unbindTexture()},this.copyTextureToTexture=function(E,N,V,W=0){let z=N.image.width,mt=N.image.height,Mt=xt.convert(V.format),Lt=xt.convert(V.type);A.setTexture2D(V,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment),N.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,W,E.x,E.y,z,mt,Mt,Lt,N.image.data):N.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,W,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,Mt,N.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,W,E.x,E.y,Mt,Lt,N.image),W===0&&V.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),yt.unbindTexture()},this.copyTextureToTexture3D=function(E,N,V,W,z=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let mt=E.max.x-E.min.x+1,Mt=E.max.y-E.min.y+1,Lt=E.max.z-E.min.z+1,Nt=xt.convert(W.format),$t=xt.convert(W.type),Bt;if(W.isData3DTexture)A.setTexture3D(W,0),Bt=B.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)A.setTexture2DArray(W,0),Bt=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);let Ht=B.getParameter(B.UNPACK_ROW_LENGTH),Ee=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ln=B.getParameter(B.UNPACK_SKIP_PIXELS),ke=B.getParameter(B.UNPACK_SKIP_ROWS),Gn=B.getParameter(B.UNPACK_SKIP_IMAGES),_e=V.isCompressedTexture?V.mipmaps[z]:V.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,_e.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_e.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,E.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,E.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,E.min.z),V.isDataTexture||V.isData3DTexture?B.texSubImage3D(Bt,z,N.x,N.y,N.z,mt,Mt,Lt,Nt,$t,_e.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Bt,z,N.x,N.y,N.z,mt,Mt,Lt,Nt,_e.data)):B.texSubImage3D(Bt,z,N.x,N.y,N.z,mt,Mt,Lt,Nt,$t,_e),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ht),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ee),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ln),B.pixelStorei(B.UNPACK_SKIP_ROWS,ke),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Gn),z===0&&W.generateMipmaps&&B.generateMipmap(Bt),yt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),yt.unbindTexture()},this.resetState=function(){R=0,T=0,b=null,yt.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===$l?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===za?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pe?Oi:Iu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Oi?pe:Kn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},vl=class extends Hi{};vl.prototype.isWebGL1Renderer=!0;Cs=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},xi=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},Pa=class extends dn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},gs=new ge,fu=new ge,aa=[],pu=new Qn,Wx=new ge,js=new wt,Qs=new Fi,Cn=class extends wt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Pa(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Wx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gs),pu.copy(t.boundingBox).applyMatrix4(gs),this.boundingBox.union(pu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gs),Qs.copy(t.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(Qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,s=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(n),t.ray.intersectsSphere(Qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gs),fu.multiplyMatrices(n,gs),js.matrixWorld=fu,js.raycast(t,aa);for(let a=0,o=aa.length;a<o;a++){let l=aa[a];l.instanceId=r,l.object=this,e.push(l)}aa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Pa(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Ps=class extends vn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ft:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,s=[],r=[],a=[],o=new L,l=new ge;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ve(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Ve(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ur=class extends Mn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){let n=e||new ft,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ml=class extends ur{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};oa=new L,Yo=new Zl,Zo=new Zl,Jo=new Zl,bl=class extends Mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(oa.subVectors(s[0],s[1]).add(s[0]),c=oa);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(oa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=oa),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Yo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),Zo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),Jo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Yo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Zo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Jo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Yo.calc(l),Zo.calc(l),Jo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};La=class extends Mn{constructor(t=new ft,e=new ft,n=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ft){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ir(t,s.x,r.x,a.x,o.x),ir(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Sl=class extends Mn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ir(t,s.x,r.x,a.x,o.x),ir(t,s.y,r.y,a.y,o.y),ir(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ia=class extends Mn{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wl=class extends Mn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Da=class extends Mn{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(nr(t,s.x,r.x,a.x),nr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},El=class extends Mn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(nr(t,s.x,r.x,a.x),nr(t,s.y,r.y,a.y),nr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ua=class extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(mu(o,l.x,c.x,h.x,u.x),mu(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ft().fromArray(s))}return this}},gu=Object.freeze({__proto__:null,ArcCurve:Ml,CatmullRomCurve3:bl,CubicBezierCurve:La,CubicBezierCurve3:Sl,EllipseCurve:ur,LineCurve:Ia,LineCurve3:wl,QuadraticBezierCurve:Da,QuadraticBezierCurve3:El,SplineCurve:Ua}),Tl=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gu[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new gu[s.type]().fromJSON(s))}return this}},dr=class extends Tl{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ia(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Da(this.currentPoint.clone(),new ft(t,e),new ft(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new La(this.currentPoint.clone(),new ft(t,e),new ft(n,s),new ft(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ua(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new ur(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Al=class i extends Ge{constructor(t=[new ft(0,-.5),new ft(.5,0),new ft(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ve(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new L,d=new ft,p=new L,g=new L,x=new L,m=0,f=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,f=t[v+1].y-t[v].y,p.x=f*1,p.y=-m,p.z=f*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[v+1].x-t[v].x,f=t[v+1].y-t[v].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(g)}for(let v=0;v<=e;v++){let _=n+v*h*s,S=Math.sin(_),R=Math.cos(_);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*S,u.y=t[T].y,u.z=t[T].x*R,a.push(u.x,u.y,u.z),d.x=v/e,d.y=T/(t.length-1),o.push(d.x,d.y);let b=l[3*T+0]*S,C=l[3*T+1],y=l[3*T+0]*R;c.push(b,C,y)}}for(let v=0;v<e;v++)for(let _=0;_<t.length-1;_++){let S=_+v*t.length,R=S,T=S+t.length,b=S+t.length+1,C=S+1;r.push(R,T,C),r.push(b,C,T)}this.setIndex(r),this.setAttribute("position",new jt(a,3)),this.setAttribute("uv",new jt(o,2)),this.setAttribute("normal",new jt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},_i=class i extends Al{constructor(t=1,e=1,n=4,s=8){let r=new dr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Ls=class i extends Ge{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new L,h=new ft;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new jt(a,3)),this.setAttribute("normal",new jt(o,3)),this.setAttribute("uv",new jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Te=class i extends Ge{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,x=[],m=n/2,f=0;v(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(p,2));function v(){let S=new L,R=new L,T=0,b=(e-t)/n;for(let C=0;C<=r;C++){let y=[],M=C/r,D=M*(e-t)+t;for(let k=0;k<=s;k++){let j=k/s,I=j*l+o,O=Math.sin(I),q=Math.cos(I);R.x=D*O,R.y=-M*n+m,R.z=D*q,u.push(R.x,R.y,R.z),S.set(O,b,q).normalize(),d.push(S.x,S.y,S.z),p.push(j,1-M),y.push(g++)}x.push(y)}for(let C=0;C<s;C++)for(let y=0;y<r;y++){let M=x[y][C],D=x[y+1][C],k=x[y+1][C+1],j=x[y][C+1];h.push(M,D,j),h.push(D,k,j),T+=6}c.addGroup(f,T,0),f+=T}function _(S){let R=g,T=new ft,b=new L,C=0,y=S===!0?t:e,M=S===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;let D=g;for(let k=0;k<=s;k++){let I=k/s*l+o,O=Math.cos(I),q=Math.sin(I);b.x=y*q,b.y=m*M,b.z=y*O,u.push(b.x,b.y,b.z),d.push(0,M,0),T.x=O*.5+.5,T.y=q*.5*M+.5,p.push(T.x,T.y),g++}for(let k=0;k<s;k++){let j=R+k,I=D+k;S===!0?h.push(I,I+1,j):h.push(I+1,I,j),C+=3}c.addGroup(f,C,S===!0?1:2),f+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ti=class i extends Te{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},fr=class i extends Ge{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let _=new L,S=new L,R=new L;for(let T=0;T<e.length;T+=3)p(e[T+0],_),p(e[T+1],S),p(e[T+2],R),l(_,S,R,v)}function l(v,_,S,R){let T=R+1,b=[];for(let C=0;C<=T;C++){b[C]=[];let y=v.clone().lerp(S,C/T),M=_.clone().lerp(S,C/T),D=T-C;for(let k=0;k<=D;k++)k===0&&C===T?b[C][k]=y:b[C][k]=y.clone().lerp(M,k/D)}for(let C=0;C<T;C++)for(let y=0;y<2*(T-C)-1;y++){let M=Math.floor(y/2);y%2===0?(d(b[C][M+1]),d(b[C+1][M]),d(b[C][M])):(d(b[C][M+1]),d(b[C+1][M+1]),d(b[C+1][M]))}}function c(v){let _=new L;for(let S=0;S<r.length;S+=3)_.x=r[S+0],_.y=r[S+1],_.z=r[S+2],_.normalize().multiplyScalar(v),r[S+0]=_.x,r[S+1]=_.y,r[S+2]=_.z}function h(){let v=new L;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let S=m(v)/2/Math.PI+.5,R=f(v)/Math.PI+.5;a.push(S,1-R)}g(),u()}function u(){for(let v=0;v<a.length;v+=6){let _=a[v+0],S=a[v+2],R=a[v+4],T=Math.max(_,S,R),b=Math.min(_,S,R);T>.9&&b<.1&&(_<.2&&(a[v+0]+=1),S<.2&&(a[v+2]+=1),R<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function p(v,_){let S=v*3;_.x=t[S+0],_.y=t[S+1],_.z=t[S+2]}function g(){let v=new L,_=new L,S=new L,R=new L,T=new ft,b=new ft,C=new ft;for(let y=0,M=0;y<r.length;y+=9,M+=6){v.set(r[y+0],r[y+1],r[y+2]),_.set(r[y+3],r[y+4],r[y+5]),S.set(r[y+6],r[y+7],r[y+8]),T.set(a[M+0],a[M+1]),b.set(a[M+2],a[M+3]),C.set(a[M+4],a[M+5]),R.copy(v).add(_).add(S).divideScalar(3);let D=m(R);x(T,M+0,v,D),x(b,M+2,_,D),x(C,M+4,S,D)}}function x(v,_,S,R){R<0&&v.x===1&&(a[_]=v.x-1),S.x===0&&S.z===0&&(a[_]=R/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Is=class i extends fr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},pr=class extends dr{constructor(t){super(t),this.uuid=Ns(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new dr().fromJSON(s))}return this}},jx={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Xu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,p;if(n&&(r=i_(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return mr(r,a,e,o,l,p,0),a}};sr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];_u(t),yu(n,t);let a=t.length;e.forEach(_u);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,yu(n,e[l]);let o=jx.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};_r=class i extends fr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Na=class i extends fr{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Gi=class i extends Ge{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/s,p=new L,g=new ft;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let f=r+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let f=0;f<n;f++){let v=f+m,_=v,S=v+n+1,R=v+n+2,T=v+1;o.push(_,S,T),o.push(S,R,T)}}this.setIndex(o),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ka=class i extends Ge{constructor(t=new pr([new ft(0,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new jt(s,3)),this.setAttribute("normal",new jt(r,3)),this.setAttribute("uv",new jt(a,2));function c(h){let u=s.length/3,d=h.extractPoints(e),p=d.shape,g=d.holes;sr.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let v=g[m];sr.isClockWise(v)===!0&&(g[m]=v.reverse())}let x=sr.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let v=g[m];p=p.concat(v)}for(let m=0,f=p.length;m<f;m++){let v=p[m];s.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let m=0,f=x.length;m<f;m++){let v=x[m],_=v[0]+u,S=v[1]+u,R=v[2]+u;n.push(_,S,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return m_(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};We=class i extends Ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new L,d=new L,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){let v=[],_=f/n,S=0;f===0&&a===0?S=.5/e:f===n&&l===Math.PI&&(S=-.5/e);for(let R=0;R<=e;R++){let T=R/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(T+S,1-_),v.push(c++)}h.push(v)}for(let f=0;f<n;f++)for(let v=0;v<e;v++){let _=h[f][v+1],S=h[f][v],R=h[f+1][v],T=h[f+1][v+1];(f!==0||a>0)&&p.push(_,S,T),(f!==n-1||l<Math.PI)&&p.push(S,R,T)}this.setIndex(p),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(x,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Ds=class i extends Ge{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new L,u=new L,d=new L;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let x=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,v=(s+1)*p+g;a.push(x,m,v),a.push(m,f,v)}this.setIndex(a),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},ze=class extends Bi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Du,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};Us=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Pl=class extends Us{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sh,endingEnd:Sh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case wh:r=t,o=2*e-n;break;case Eh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wh:a=t,l=2*n-e;break;case Eh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,f=-d*m+2*d*x-d*g,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-p)*m+(1.5+p)*x+.5*g,S=p*m-p*x;for(let R=0;R!==o;++R)r[R]=f*a[h+R]+v*a[c+R]+_*a[l+R]+S*a[u+R];return r}},Ll=class extends Us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Il=class extends Us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Pn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ha(e,this.TimeBufferType),this.values=ha(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ha(t.times,Array),values:ha(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Pl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case da:e=this.InterpolantFactoryMethodDiscrete;break;case fa:e=this.InterpolantFactoryMethodLinear;break;case So:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return da;case this.InterpolantFactoryMethodLinear:return fa;case this.InterpolantFactoryMethodSmooth:return So}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&g_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===So,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=fa;Wi=class extends Pn{};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=da;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;Dl=class extends Pn{};Dl.prototype.ValueTypeName="color";Ul=class extends Pn{};Ul.prototype.ValueTypeName="number";Nl=class extends Us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)kn.slerpFlat(r,0,a,c-o,a,c,l);return r}},yr=class extends Pn{InterpolantFactoryMethodLinear(t){return new Nl(this.times,this.values,this.getValueSize(),t)}};yr.prototype.ValueTypeName="quaternion";yr.prototype.DefaultInterpolation=fa;yr.prototype.InterpolantFactoryMethodSmooth=void 0;Xi=class extends Pn{};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=da;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;kl=class extends Pn{};kl.prototype.ValueTypeName="vector";Ol=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},x_=new Ol,Fl=class{constructor(t){this.manager=t!==void 0?t:x_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Fl.DEFAULT_MATERIAL_NAME="__DEFAULT";Oa=class extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},yi=class extends Oa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ko=new ge,vu=new L,Mu=new L,Bl=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hr,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;vu.setFromMatrixPosition(t.matrixWorld),e.position.copy(vu),Mu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mu),e.updateMatrixWorld(),Ko.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ko),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ko)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},zl=class extends Bl{constructor(){super(new Aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vi=class extends Oa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new zl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Jl="\\[\\]\\.:\\/",__=new RegExp("["+Jl+"]","g"),Kl="[^"+Jl+"]",y_="[^"+Jl.replace("\\.","")+"]",v_=/((?:WC+[\/:])*)/.source.replace("WC",Kl),M_=/(WCOD+)?/.source.replace("WCOD",y_),b_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kl),S_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kl),w_=new RegExp("^"+v_+M_+b_+S_+"$"),E_=["material","materials","bones","map"],Hl=class{constructor(t,e,n){let s=n||me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(__,"")}static parseTrackName(t){let e=w_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);E_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};me.Composite=Hl;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];iy=new Float32Array(1),Fa=class{constructor(t,e,n=0,s=1/0){this.ray=new ba(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new cr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Vl(t,this,n,e),n.sort(bu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Vl(t[s],this,n,e);return n.sort(bu),n}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160")});function Yu(i){return i.kind==="weapon"?Xe[i.type].name:i.kind==="ammo"?`${qi[i.type].name} x${i.amount}`:i.kind==="heal"?`${Xa[i.type].name}${i.amount>1?" x"+i.amount:""}`:"Objeto"}var Xe,Wa,qi,Xa,jl,Ql,tc,ec,qa=cn(()=>{Xe={pistol:{id:"pistol",name:"Pistola",dmg:19,interval:.26,range:34,reload:1.15,mag:12,ammo:"light",spread:.035,pellets:1,speed:85,auto:!1,recoil:.25,zoom:1,color:"#7c8796",rarity:"com\xFAn"},smg:{id:"smg",name:"Subfusil",dmg:12,interval:.075,range:27,reload:1.7,mag:30,ammo:"light",spread:.085,pellets:1,speed:80,auto:!0,recoil:.12,zoom:1,color:"#4aa3ff",rarity:"com\xFAn"},shotgun:{id:"shotgun",name:"Escopeta",dmg:11,interval:.85,range:15,reload:2.3,mag:5,ammo:"shells",spread:.2,pellets:8,speed:70,auto:!1,recoil:.6,zoom:1,color:"#c47a3c",rarity:"rara"},ar:{id:"ar",name:"Rifle de asalto",dmg:20,interval:.125,range:44,reload:2,mag:25,ammo:"medium",spread:.045,pellets:1,speed:100,auto:!0,recoil:.18,zoom:1.12,color:"#5ad67d",rarity:"rara"},sniper:{id:"sniper",name:"Rifle de precisi\xF3n",dmg:88,interval:1.4,range:85,reload:2.7,mag:4,ammo:"heavy",spread:.004,pellets:1,speed:170,auto:!1,recoil:.9,zoom:1.45,color:"#b07cff",rarity:"\xE9pica"}},Wa=Object.keys(Xe),qi={light:{id:"light",name:"Munici\xF3n ligera",pack:30,max:180,color:"#ffd23f"},medium:{id:"medium",name:"Munici\xF3n media",pack:30,max:180,color:"#5ad67d"},shells:{id:"shells",name:"Cartuchos",pack:10,max:40,color:"#ff6b3d"},heavy:{id:"heavy",name:"Munici\xF3n pesada",pack:8,max:32,color:"#b07cff"}},Xa={bandage:{id:"bandage",name:"Venda",heal:15,time:1.6,cap:75,max:10,color:"#f5f5f5"},medkit:{id:"medkit",name:"Botiqu\xEDn",heal:60,time:3.2,cap:100,max:4,color:"#ff4d5a"}},jl=.45,Ql=1.5,tc=2.1,ec=2.5});function ee(i,t={}){let e=i+JSON.stringify(t);return nc.has(e)||nc.set(e,new ze({color:i,...t})),nc.get(e)}function On(i,t){return ic.has(i)||ic.set(i,t()),ic.get(i)}function Fn(i,t,e=0,n=0,s=0,r=!0){let a=new wt(i,t);return a.position.set(e,n,s),a.castShadow=r,a}function sc(i){let t=new ie,e=ee("#2b2f36"),n=ee("#7c8796"),s=ee("#9a5b2e"),r=ee(Xe[i]?.color||"#888"),a=(l,c,h,u,d,p,g)=>t.add(Fn(new de(l,c,h),u,d,p,g)),o=(l,c,h,u,d,p)=>{let g=Fn(new Te(l,l,c,8),h,u,d,p);g.rotation.x=Math.PI/2,t.add(g)};switch(i){case"pistol":a(.11,.13,.38,n,0,.04,.14),a(.09,.2,.11,e,0,-.08,0),a(.115,.04,.3,r,0,.115,.13);break;case"smg":a(.13,.16,.55,e,0,.04,.2),a(.08,.26,.1,r,0,-.14,.24),a(.09,.18,.1,e,0,-.08,0),o(.035,.22,n,0,.05,.56),a(.07,.08,.22,n,0,.03,-.15);break;case"shotgun":o(.05,.85,n,0,.07,.45),o(.045,.75,e,0,-.02,.4),a(.12,.08,.3,s,0,-.03,.55),a(.12,.17,.4,s,0,-.02,-.12),a(.1,.14,.24,e,0,.04,.12);break;case"ar":a(.12,.17,.62,e,0,.05,.22),o(.035,.36,n,0,.06,.7),a(.1,.24,.1,r,0,-.14,.27),a(.1,.15,.32,e,0,0,-.22),a(.13,.08,.32,r,0,.1,.36),a(.05,.07,.12,n,0,.17,.12);break;case"sniper":o(.035,1.05,n,0,.06,.68),a(.12,.17,.6,e,0,.03,.12),a(.11,.18,.4,r,0,-.01,-.3),o(.06,.38,e,0,.2,.15),o(.07,.04,r,0,.2,.35),a(.07,.15,.08,e,0,-.1,.03);break;default:a(.1,.1,.3,n,0,0,.1)}return t.userData.muzzle={pistol:.34,smg:.68,shotgun:.88,ar:.9,sniper:1.22}[i]||.4,t}function Zu(i){let t=new ie,e=new ie;t.add(e);let n="#ffffff";if(i.k==="weapon"){let a=sc(i.ty);a.scale.setScalar(1.25),a.rotation.y=Math.PI/2,a.position.x=-.35,e.add(a),n=T_[Xe[i.ty].rarity]||"#fff"}else if(i.k==="ammo"){let a=qi[i.ty].color;e.add(Fn(On("ammoBox",()=>new de(.5,.3,.35)),ee("#3a4a3a"))),e.add(Fn(On("ammoLid",()=>new de(.52,.06,.37)),ee(a),0,.17,0));for(let o=0;o<3;o++)e.add(Fn(On("bullet",()=>new Te(.035,.035,.18,6)),ee("#e0b040"),-.12+o*.12,.28,0));n=a}else if(i.ty==="medkit")e.add(Fn(On("kit",()=>new de(.55,.38,.3)),ee("#ffffff"))),e.add(Fn(On("crossA",()=>new de(.3,.09,.32)),ee("#ff3b4a"))),e.add(Fn(On("crossB",()=>new de(.09,.3,.32)),ee("#ff3b4a"))),n="#ff4d5a";else{let a=Fn(On("roll",()=>new Te(.16,.16,.26,12)),ee("#f5f0e6"));a.rotation.z=Math.PI/2,e.add(a),e.add(Fn(On("rollband",()=>new Te(.165,.165,.05,12)),ee("#ff6b7a")).rotateZ(Math.PI/2)),n="#9df59d"}e.position.y=.55;let s=new wt(On("lootDisc",()=>new Ls(.55,20)),new Ce({color:n,transparent:!0,opacity:.45,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.05,t.add(s);let r=new wt(On("lootBeam",()=>new Te(.06,.25,1.6,8,1,!0)),new Ce({color:n,transparent:!0,opacity:.22,depthWrite:!1,side:Fe}));return r.position.y=.8,i.k==="weapon"&&t.add(r),t.userData.inner=e,t.userData.phase=Math.random()*6,e.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),t}function Ju(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d");t.fillStyle="#c98a48",t.fillRect(0,0,128,128),t.fillStyle="#b07636";for(let n=0;n<4;n++)t.fillRect(0,n*32+28,128,4);t.strokeStyle="#7a4a1e",t.lineWidth=12,t.strokeRect(6,6,116,116),t.beginPath(),t.moveTo(10,10),t.lineTo(118,118),t.stroke(),t.fillStyle="#ffd23f",t.font="bold 34px sans-serif",t.textAlign="center",t.textBaseline="middle";let e=new Ps(i);return e.colorSpace=pe,e}var nc,ic,T_,$a=cn(()=>{ei();qa();nc=new Map;ic=new Map;T_={com\u00FAn:"#e6e6e6",rara:"#3fa9f5",\u00E9pica:"#c77dff"}});function oc(i,t,e){let n=pn[i];return n?n.unlock.type==="free"?!0:n.unlock.type==="level"?t>=n.unlock.level:Array.isArray(e)?e.includes(i):!!(e&&e.has&&e.has(i)):!1}function ju(i,t=null,e=null){let n={...fn};if(!i||typeof i!="object")return n;for(let s of Os){let r=i[s.id];if(r===null&&!s.required){n[s.id]=null;continue}let a=pn[r];!a||a.slot!==s.id||t!==null&&!oc(r,t,e)||(n[s.id]=r)}for(let s of ac)typeof i[s.id]=="string"&&A_.test(i[s.id])&&s.palette.includes(i[s.id].toLowerCase())&&(n[s.id]=i[s.id].toLowerCase());return n}var Os,ac,Ku,pt,Se,ve,rn,bi,rc,Si,pn,fn,vr,A_,Qu,td,ed,Ya=cn(()=>{Os=[{id:"hair",name:"Peinados",icon:"\u{1F487}",required:!0},{id:"face",name:"Caras",icon:"\u{1F600}",required:!0},{id:"hat",name:"Gorras y sombreros",icon:"\u{1F9E2}"},{id:"mask",name:"M\xE1scaras",icon:"\u{1F977}"},{id:"glasses",name:"Gafas",icon:"\u{1F576}\uFE0F"},{id:"top",name:"Camisetas y chaquetas",icon:"\u{1F455}",required:!0},{id:"pants",name:"Pantalones",icon:"\u{1F456}",required:!0},{id:"backpack",name:"Mochilas",icon:"\u{1F392}"},{id:"special",name:"Accesorios especiales",icon:"\u2728"}],ac=[{id:"skin",name:"Tono de piel",palette:["#ffdbc2","#f2c09a","#e0a878","#c98d63","#a26a45","#7a4b31","#5a3522"]},{id:"hairColor",name:"Color de pelo",palette:["#1c1c1c","#4a2e1c","#7a4a22","#c98d4a","#f2d16b","#e8e8e8","#d6334a","#c77dff","#3fa9f5","#5ad67d","#ff8fc8"]},{id:"topColor",name:"Color de la ropa",palette:["#e8473f","#ff8f3f","#ffd23f","#5ad67d","#2fb8c4","#3f7fe8","#8a5cf5","#ff5fa2","#f5f5f5","#3a3f4b","#8b5a2b","#1f6b45"]},{id:"pantsColor",name:"Color del pantal\xF3n",palette:["#2f4a7a","#30343f","#6b4f2e","#4d5d3a","#8a8f99","#f2e6c9","#e8473f","#3f7fe8","#1c1c1c","#c77dff"]}],Ku={com\u00FAn:{color:"#b9c6e6"},rara:{color:"#3fa9f5"},\u00E9pica:{color:"#c77dff"},legendaria:{color:"#ffb020"}},pt=(i,t,e,n,s,r=[])=>({id:`${i}-${t}`,slot:i,style:t,name:e,rarity:n,unlock:s,tags:r}),Se={type:"free"},ve=i=>({type:"level",level:i}),rn=i=>({type:"coins",price:i}),bi=i=>({type:"ads",ads:i}),rc={type:"daily"},Si=[pt("hair","short","Corto cl\xE1sico","com\xFAn",Se),pt("hair","spiky","De punta","com\xFAn",Se),pt("hair","ponytail","Coleta","com\xFAn",Se),pt("hair","long","Melena","com\xFAn",Se),pt("hair","buzz","Rapado","com\xFAn",Se),pt("hair","bald","Calvo","com\xFAn",Se),pt("hair","afro","Afro","rara",ve(3)),pt("hair","bun","Mo\xF1o","rara",ve(6)),pt("hair","curly","Rizos","rara",rn(250),["popular"]),pt("hair","mohawk","Cresta","\xE9pica",rn(400),["featured"]),pt("face","happy","Alegre","com\xFAn",Se),pt("face","determined","Decidido","com\xFAn",Se),pt("face","cool","Chulito","rara",ve(4)),pt("face","surprised","Sorprendido","rara",bi(1),["new"]),pt("face","angry","Furioso","rara",rn(150)),pt("face","sleepy","Dormil\xF3n","rara",rc),pt("hat","beanie","Gorro de lana","com\xFAn",Se),pt("hat","headband","Cinta deportiva","com\xFAn",Se),pt("hat","helmet","Casco de moto","com\xFAn",Se),pt("hat","cap","Gorra b\xE1sica","com\xFAn",ve(2)),pt("hat","beret","Boina","rara",bi(2)),pt("hat","chef","Gorro de chef","rara",rn(300)),pt("hat","cowboy","Sombrero vaquero","rara",rn(400),["popular"]),pt("hat","tophat","Chistera","\xE9pica",rn(650)),pt("hat","viking","Casco vikingo","\xE9pica",ve(12)),pt("hat","pirate","Sombrero pirata","\xE9pica",ve(18)),pt("hat","propeller","Gorra con h\xE9lice","\xE9pica",bi(3),["new"]),pt("hat","party","Gorro de fiesta","rara",rc),pt("hat","crown","Corona real","legendaria",ve(25)),pt("hat","astro","Casco de astronauta","legendaria",ve(30)),pt("mask","bandit","Pa\xF1uelo de bandido","com\xFAn",Se),pt("mask","ninja","M\xE1scara ninja","rara",ve(8)),pt("mask","hockey","M\xE1scara de hockey","\xE9pica",rn(500)),pt("mask","fox","M\xE1scara de zorro","\xE9pica",bi(3),["featured"]),pt("mask","skull","Calavera","legendaria",ve(22)),pt("glasses","round","Gafas redondas","com\xFAn",Se),pt("glasses","goggles","Gafas de aviador","com\xFAn",Se),pt("glasses","sun","Gafas de sol especiales","rara",ve(5)),pt("glasses","heart","Gafas de coraz\xF3n","rara",bi(2)),pt("glasses","star","Gafas de estrella","\xE9pica",rn(350),["popular"]),pt("glasses","pixel","Gafas pixeladas","\xE9pica",rc),pt("glasses","visor","Visor cibern\xE9tico","legendaria",ve(16)),pt("top","tshirt","Camiseta","com\xFAn",Se),pt("top","hoodie","Sudadera con capucha","com\xFAn",Se),pt("top","tank","Camiseta de tirantes","com\xFAn",Se),pt("top","jacket","Chaqueta","rara",ve(7)),pt("top","jersey","Camiseta deportiva","rara",ve(11)),pt("top","hawaiian","Camisa hawaiana","rara",bi(2),["new"]),pt("top","vest","Chaleco t\xE1ctico","\xE9pica",rn(500)),pt("top","puffer","Plum\xEDfero","\xE9pica",rn(700),["featured"]),pt("top","suit","Traje elegante","\xE9pica",ve(15)),pt("top","astro","Traje espacial","legendaria",ve(30)),pt("pants","jeans","Vaqueros","com\xFAn",Se),pt("pants","shorts","Pantal\xF3n corto","com\xFAn",Se),pt("pants","joggers","Ch\xE1ndal","com\xFAn",Se),pt("pants","cargo","Pantal\xF3n cargo","rara",ve(9)),pt("pants","skirt","Falda","rara",rn(250)),pt("pants","suit","Pantal\xF3n de traje","\xE9pica",ve(15)),pt("pants","astro","Pantal\xF3n espacial","legendaria",ve(30)),pt("backpack","classic","Mochila cl\xE1sica","com\xFAn",Se),pt("backpack","explorer","Mochila exclusiva de explorador","\xE9pica",ve(10)),pt("backpack","guitar","Guitarra","\xE9pica",rn(600),["popular"]),pt("backpack","turtle","Caparaz\xF3n de tortuga","\xE9pica",bi(3)),pt("backpack","jetpack","Mochila cohete","legendaria",rn(900),["featured","new"]),pt("backpack","wings","Alas de \xE1ngel","legendaria",ve(20)),pt("special","scarf","Bufanda","com\xFAn",Se),pt("special","headphones","Cascos de m\xFAsica","rara",rn(350)),pt("special","chain","Medall\xF3n dorado","rara",bi(2)),pt("special","cape","Capa de h\xE9roe","\xE9pica",ve(14)),pt("special","halo","Aureola","legendaria",ve(28))],pn=Object.fromEntries(Si.map(i=>[i.id,i])),fn={hair:"hair-short",face:"face-happy",hat:null,mask:null,glasses:null,top:"top-tshirt",pants:"pants-jeans",backpack:null,special:null,skin:"#f2c09a",hairColor:"#4a2e1c",topColor:"#e8473f",pantsColor:"#2f4a7a"},vr=[{name:"Rocco",outfit:{...fn,hat:"hat-beanie",topColor:"#e8473f"}},{name:"Luna",outfit:{...fn,hair:"hair-ponytail",hairColor:"#c77dff",top:"top-hoodie",topColor:"#8a5cf5",pantsColor:"#30343f",skin:"#ffdbc2"}},{name:"Kiko",outfit:{...fn,hair:"hair-spiky",hairColor:"#1c1c1c",top:"top-tank",topColor:"#5ad67d",pants:"pants-shorts",pantsColor:"#6b4f2e",backpack:"backpack-classic",skin:"#c98d63"}},{name:"Nara",outfit:{...fn,hair:"hair-long",hairColor:"#1c1c1c",hat:"hat-helmet",topColor:"#ff8f3f",pants:"pants-joggers",pantsColor:"#30343f",skin:"#7a4b31",face:"face-determined"}},{name:"Mara",outfit:{...fn,hair:"hair-long",hairColor:"#d6334a",mask:"mask-bandit",top:"top-hoodie",topColor:"#2fb8c4",pantsColor:"#f2e6c9",special:"special-scarf",skin:"#e0a878"}},{name:"Bolt",outfit:{...fn,hair:"hair-buzz",hairColor:"#e8e8e8",glasses:"glasses-goggles",topColor:"#ffd23f",pants:"pants-joggers",pantsColor:"#1c1c1c",skin:"#a26a45",face:"face-determined"}}],A_=/^#[0-9a-f]{6}$/i;Qu=[{coins:50},{coins:60,xp:100},{coins:100},{item:"glasses-pixel",coins:50},{coins:150},{coins:100,xp:250},{item:"hat-party",coins:200}],td=40,ed=[{id:"pack-s",coins:500,price:199,label:"500 monedas"},{id:"pack-m",coins:1300,price:499,label:"1.300 monedas",bonus:"+30 %"},{id:"pack-l",coins:2800,price:999,label:"2.800 monedas",bonus:"+40 %"}]});var lc,cy,cc=cn(()=>{lc=[{id:"rocco",name:"Rocco",unlock:1,skin:"#f2c09a",shirt:"#e8473f",pants:"#2f4a7a",shoes:"#3a2a22",hat:"cap",hatColor:"#e8473f",hair:"#4a2e1c",extra:"none"},{id:"luna",name:"Luna",unlock:1,skin:"#ffd7b5",shirt:"#8a5cf5",pants:"#2b2b3d",shoes:"#ffffff",hat:"ponytail",hatColor:"#c77dff",hair:"#c77dff",extra:"none"},{id:"kiko",name:"Kiko",unlock:2,skin:"#c98d63",shirt:"#3fbf6b",pants:"#6b4f2e",shoes:"#222222",hat:"beanie",hatColor:"#2f8f4f",hair:"#1c1c1c",extra:"backpack"},{id:"nara",name:"Nara",unlock:3,skin:"#8d5a3b",shirt:"#ff8f3f",pants:"#3b3b3b",shoes:"#ff8f3f",hat:"helmet",hatColor:"#ff8f3f",hair:"#111111",extra:"none"},{id:"bolt",name:"Bolt",unlock:5,skin:"#f0c8a0",shirt:"#ffd23f",pants:"#30343f",shoes:"#ffd23f",hat:"goggles",hatColor:"#30343f",hair:"#e6e6e6",extra:"none"},{id:"mara",name:"Mara",unlock:7,skin:"#e0a878",shirt:"#2fb8c4",pants:"#f2e6c9",shoes:"#5a3b22",hat:"bandana",hatColor:"#d6334a",hair:"#5a2a12",extra:"backpack"},{id:"tito",name:"Tito",unlock:10,skin:"#f5cba7",shirt:"#b5651d",pants:"#355c7d",shoes:"#4a3020",hat:"cowboy",hatColor:"#8b5a2b",hair:"#7a4a22",extra:"none"},{id:"zuri",name:"Zuri",unlock:14,skin:"#6e4530",shirt:"#ff5fa2",pants:"#1f1f2e",shoes:"#ffffff",hat:"crown",hatColor:"#ffcc33",hair:"#111111",extra:"headphones"}],cy=lc.map(i=>i.id)});function U(i,t,e,n=0,s=0,r=0,a=!1){let o=new wt(t,e);return o.position.set(n,s,r),o.castShadow=a,i.add(o),o}function C_(i){return we("hawaii"+i,()=>{let t=document.createElement("canvas");t.width=t.height=64;let e=t.getContext("2d");e.fillStyle=i,e.fillRect(0,0,64,64);let n=["#ffffff","#ffd23f","#ff5fa2"];for(let r=0;r<9;r++){e.fillStyle=n[r%3];let a=r*23%64,o=r*37%64;for(let l=0;l<5;l++){let c=l/5*Math.PI*2;e.beginPath(),e.arc(a+Math.cos(c)*4,o+Math.sin(c)*4,3,0,7),e.fill()}}let s=new Ps(t);return s.wrapS=s.wrapT=ar,s.repeat.set(2,2),s.colorSpace=pe,s})}function nd(i){if(i&&typeof i=="object")return ju(i);if(typeof i=="string"){let t=lc.find(e=>e.id===i);if(t){let e=vr.find(n=>n.name===t.name);return e?{...e.outfit}:{...fn,topColor:t.shirt.toLowerCase(),skin:fn.skin}}}return{...fn}}var hc,uc,we,F,en,bt,Qt,se,dc,Ue,Bn,zn,Mr=cn(()=>{ei();$a();Ya();cc();hc=new Map,uc=new Map,we=(i,t)=>(hc.has(i)||hc.set(i,t()),hc.get(i)),F=(i,t={})=>{let e=i+JSON.stringify(t);if(!uc.has(e)){let{basic:n,...s}=t;uc.set(e,n?new Ce({color:i,...s}):new ze({color:i,...s}))}return uc.get(e)},en=(i,t)=>"#"+new Pt(i).multiplyScalar(t).getHexString();bt=(i,t,e)=>we(`box${i},${t},${e}`,()=>new de(i,t,e)),Qt=(i,t=12,e=9)=>we(`sph${i},${t}`,()=>new We(i,t,e)),se=(i,t,e,n=12,s=!1)=>we(`cyl${i},${t},${e},${n},${s}`,()=>new Te(i,t,e,n,1,s)),dc=(i,t,e=10)=>we(`cap${i},${t}`,()=>new _i(i,t,4,e)),Ue=(i,t,e=Math.PI*2,n=6,s=18)=>we(`tor${i},${t},${e}`,()=>new Ds(i,t,n,s,e)),Bn=(i,t,e=8)=>we(`cone${i},${t},${e}`,()=>new ti(i,t,e));zn=class{constructor(t,e={}){if(this.outfit=nd(t),this.opts=e,this.root=new ie,this.animators=[],this.phase=Math.random()*6,this.kick=0,this.deadT=-1,this.pickT=0,this.t=Math.random()*10,this.victory=!1,this.victoryStyle=0,this.blinkT=2+Math.random()*3,this.idleT=0,this.weaponType=null,this.gun=null,this._build(),e.ringColor){let n=new wt(we("ring",()=>new Gi(.62,.78,28)),new Ce({color:e.ringColor,transparent:!0,opacity:.85,depthWrite:!1}));n.rotation.x=-Math.PI/2,n.position.y=.04,this.root.add(n),this.ring=n}}setOutfit(t){let e=this.weaponType;for(let n of[...this.root.children])n!==this.ring&&this.root.remove(n);this.outfit=nd(t),this.animators=[],this.weaponType=null,this.gun=null,this._build(),e&&this.setWeapon(e)}def(t){let e=this.outfit[t];return e?pn[e]:null}_build(){let t=this.outfit,e=F(t.skin),n=t.topColor,s=t.pantsColor,r=this.def("top")?.style||"tshirt",a=this.def("pants")?.style||"jeans",o=this.root,l=new ie;l.position.y=.72,o.add(l),this.hips=l;let c=new ie;l.add(c),this.torso=c;let h=r==="hawaiian"?F("#ffffff",{map:C_(n)}):F(r==="astro"?"#f2f4f7":r==="suit"?en(n,.55):n),u=r==="puffer"?1.14:r==="astro"?1.08:1;U(c,dc(.3,.28,12),h,0,.36,0,!0).scale.set(1.06*u,1,.8*u),U(l,se(.31,.3,.1,14),F(a==="skirt"?s:en(s,.75)),0,.09,0),this._buildTopDetails(c,r,n,h);let p=new ie;p.position.y=1,l.add(p),this.head=p,U(p,se(.11,.12,.12,10),e,0,-.33,0),U(p,Qt(.39,18,14),e,0,0,0,!0).scale.set(1,.95,.96),U(p,Qt(.08,8,6),e,-.38,-.02,0),U(p,Qt(.08,8,6),e,.38,-.02,0),U(p,Qt(.055,8,6),F(en(t.skin,.92)),0,-.06,.37),this._buildFace(p),this._buildHair(p),this._buildHat(p),this._buildMask(p),this._buildGlasses(p);let x=["hoodie","jacket","puffer","suit","astro","jersey"].includes(r),m=r==="tank"||r==="vest",f=r==="vest"?F("#3a3f4b"):r==="hawaiian"?h:F(r==="astro"?"#f2f4f7":r==="suit"?en(n,.55):n),v=R=>{let T=new ie;T.position.set(R*.41,.58,0),l.add(T);let b=U(T,we("upperArm",()=>{let C=new _i(.105,.16,4,8);return C.translate(0,-.13,0),C}),m?e:f,0,0,0,!0);return r==="puffer"&&b.scale.set(1.25,1,1.25),U(T,we("foreArm",()=>{let C=new _i(.095,.16,4,8);return C.translate(0,-.36,0),C}),x?f:e,0,0,0,!0),r==="jersey"&&U(T,se(.108,.108,.04,10),F("#ffffff"),0,-.2,0),U(T,Qt(.105,10,8),r==="astro"?F("#d8dde3"):e,0,-.52,0),T};this.armL=v(-1),this.armR=v(1);let _=F(a==="astro"?"#f2f4f7":s),S=R=>{let T=new ie;T.position.set(R*.16,.74,0),o.add(T);let b=a==="shorts"||a==="skirt";U(T,we("thigh",()=>{let y=new _i(.135,.14,4,8);return y.translate(0,-.12,0),y}),a==="skirt"?e:_,0,0,0,!0),U(T,we("shin",()=>{let y=new _i(.12,.16,4,8);return y.translate(0,-.38,0),y}),b?e:_,0,0,0,!0),a==="cargo"&&U(T,bt(.07,.14,.16),F(en(s,.8)),R*.13,-.22,0),a==="joggers"&&U(T,bt(.02,.5,.05),F("#ffffff"),R*.135,-.25,0),a==="astro"&&U(T,Qt(.09,8,6),F("#ff8f3f"),0,-.3,.1),a==="suit"&&U(T,bt(.02,.5,.02),F(en(s,.7)),0,-.25,.13);let C=a==="astro"?"#d8dde3":a==="suit"?"#1c1c1c":"#ffffff";return U(T,bt(.24,.1,.34),F(C),0,-.6,.05,!0),U(T,bt(.25,.04,.36),F(a==="suit"?"#1c1c1c":"#ff5a5f"),0,-.655,.05),T};this.legL=S(-1),this.legR=S(1),a==="skirt"&&U(l,se(.3,.42,.3,14,!1),F(s),0,-.06,0),this._buildBackpack(c),this._buildSpecial(c,p),this.gunHolder=new ie,this.gunHolder.position.set(-.08,-.52,.02),this.gunHolder.rotation.x=Math.PI/2,this.armR.add(this.gunHolder),this.root.traverse(R=>{R.isMesh&&(R.userData.char=this)})}_buildTopDetails(t,e,n,s){let r=F(en(n,.75));switch(e){case"tshirt":U(t,Ue(.17,.035,Math.PI*2,6,16),r,0,.7,.02).rotation.x=Math.PI/2;break;case"hoodie":{U(t,Ue(.2,.08,Math.PI,6,12),F(n),0,.68,-.12).rotation.set(-.3,0,0),U(t,bt(.34,.14,.05),r,0,.2,.25),U(t,se(.012,.012,.18,4),F("#ffffff"),-.06,.55,.26),U(t,se(.012,.012,.18,4),F("#ffffff"),.06,.55,.26);break}case"jacket":{U(t,bt(.16,.5,.05),F("#f5f5f5"),0,.38,.24),U(t,bt(.045,.52,.06),r,-.09,.38,.245),U(t,bt(.045,.52,.06),r,.09,.38,.245);let a=U(t,Ue(.2,.05,Math.PI*2,6,16),F(n),0,.68,0);a.rotation.x=Math.PI/2,U(t,bt(.06,.05,.02),F("#c0c0c0"),.16,.3,.255);break}case"tank":U(t,bt(.06,.2,.3),F(n),-.17,.62,0),U(t,bt(.06,.2,.3),F(n),.17,.62,0);break;case"vest":{U(t,bt(.56,.5,.48),F(n),0,.38,0);for(let a=0;a<3;a++)U(t,bt(.12,.1,.04),r,-.15+a*.15,.25,.25);U(t,bt(.5,.06,.5),F("#2b2f36"),0,.12,0);break}case"jersey":{U(t,bt(.64,.08,.5),F("#ffffff"),0,.45,0);let a=U(t,bt(.16,.2,.02),F("#ffffff"),0,.42,-.255);a.rotation.y=Math.PI;break}case"puffer":for(let a=0;a<3;a++){let o=U(t,Ue(.33,.04,Math.PI*2,6,18),r,0,.18+a*.18,0);o.rotation.x=Math.PI/2,o.scale.set(1.08,.85,1)}break;case"suit":{U(t,bt(.18,.46,.05),F("#ffffff"),0,.42,.24),U(t,bt(.06,.32,.06),F("#d6334a"),0,.45,.265),U(t,bt(.05,.36,.06),F(en(n,.4)),-.11,.45,.25),U(t,bt(.05,.36,.06),F(en(n,.4)),.11,.45,.25);break}case"hawaiian":U(t,bt(.24,.08,.04),F("#ffffff"),0,.66,.24);break;case"astro":{U(t,bt(.3,.2,.06),F(n),0,.42,.25);for(let o=0;o<3;o++)U(t,Qt(.025,6,4),F(["#ff5a5f","#ffd23f","#5ad67d"][o]),-.08+o*.08,.42,.29);let a=U(t,Ue(.22,.06,Math.PI*2,6,18),F("#b9c0c5"),0,.7,0);a.rotation.x=Math.PI/2;break}}}_buildFace(t){let e=this.def("face")?.style||"happy",n=F("#ffffff"),s=F("#1b1b1f"),r=F("#7a2e26"),a=new ie;t.add(a),this.eyes=a;for(let l of[-.14,.14]){if(U(a,Qt(.085,10,8),n,l,.05,.33).scale.set(1,1.15,.6),U(a,Qt(e==="surprised"?.035:.05,8,6),s,l+(e==="cool"?.01:0),.04,.375),U(a,Qt(.018,6,4),n,l+.02,.07,.4),e==="cool"||e==="sleepy"){let d=U(a,bt(.18,.08,.05),F(this.outfit.skin),l,e==="sleepy"?.06:.1,.38);d.scale.y=e==="sleepy"?1.6:1}let u=U(t,bt(.13,.03,.03),F(en(this.outfit.hairColor,.9)),l,e==="surprised"?.21:.17,.35);u.rotation.z=e==="angry"?l<0?-.45:.45:e==="determined"?l<0?-.2:.2:e==="happy"?l<0?.12:-.12:0}let o=!!this.outfit.mask;if(!o)switch(e){case"happy":{let l=U(t,Ue(.08,.018,Math.PI,6,10),r,0,-.14,.355);l.rotation.z=Math.PI;break}case"determined":U(t,bt(.12,.025,.03),r,0,-.15,.36);break;case"cool":{let l=U(t,Ue(.06,.016,Math.PI*.7,6,8),r,.03,-.13,.355);l.rotation.z=Math.PI*1.1;break}case"angry":{let l=U(t,Ue(.07,.018,Math.PI,6,10),r,0,-.19,.35);break}case"surprised":U(t,Ue(.04,.016,Math.PI*2,6,12),r,0,-.15,.36);break;case"sleepy":{let l=U(t,Ue(.05,.015,Math.PI,6,8),r,0,-.14,.355);l.rotation.z=Math.PI,U(t,Qt(.03,6,4),F("#9fd8ff"),.2,-.1,.33);break}}if(!o)for(let l of[-.22,.22]){let c=U(t,Qt(.05,8,6),F("#ff9a9a"),l,-.08,.3);c.scale.z=.4}}_buildHair(t){let e=this.def("hair")?.style||"short",n=F(this.outfit.hairColor),s=!!this.outfit.hat,r=(a=1.03,o=.48)=>{let l=U(t,we("hairCap"+a+o,()=>new We(.39*a,16,10,0,Math.PI*2,0,Math.PI*o)),n,0,.02,-.02);return l.rotation.x=-.3,l};switch(e){case"short":r();break;case"buzz":r(1.01,.42);break;case"bald":{let a=U(t,Qt(.06,6,4),F("#ffffff",{transparent:!0,opacity:.35}),.12,.3,.15);a.scale.z=.3;break}case"spiky":{if(r(),!s)for(let a=0;a<7;a++){let o=a/7*Math.PI*1.6-Math.PI*.8;U(t,Bn(.1,.28,6),n,Math.sin(o)*.22,.36-Math.abs(o)*.05,-.05-Math.cos(o)*.12).rotation.set(-.5-Math.cos(o)*.3,0,-o*.5)}break}case"afro":{s?r(1.06):U(t,Qt(.5,14,10),F(this.outfit.hairColor,{flatShading:!0}),0,.2,-.2).scale.set(1.05,.9,.95);break}case"ponytail":{r();let a=U(t,dc(.11,.3,8),n,0,-.02,-.42);a.rotation.x=.6,U(t,Ue(.1,.03,Math.PI*2,6,10),F("#ffd23f"),0,.12,-.36);break}case"long":{r(1.05);let a=U(t,bt(.62,.62,.22),n,0,-.2,-.22);a.rotation.x=.1,U(t,bt(.12,.45,.2),n,-.36,-.12,-.02),U(t,bt(.12,.45,.2),n,.36,-.12,-.02);break}case"mohawk":{if(r(1.01,.4),!s)for(let a=0;a<6;a++)U(t,bt(.08,.22-Math.abs(a-2.5)*.03,.12),n,0,.44-Math.abs(a-2.5)*.03,.22-a*.1);break}case"bun":{r(),s||U(t,Qt(.15,10,8),n,0,.42,-.12);break}case"curly":{if(r(1.04),!s)for(let a=0;a<12;a++){let o=a/12*Math.PI*2;U(t,Qt(.11,8,6),n,Math.cos(o)*.28,.28+Math.sin(a)*.05,Math.sin(o)*.26-.04)}break}}}_buildHat(t){let e=this.def("hat");if(!e)return;let n=this.outfit.topColor,s=new ie;switch(t.add(s),e.style){case"cap":U(s,we("capTop",()=>new We(.405,16,10,0,Math.PI*2,0,Math.PI*.42)),F(n),0,.05,0);{let r=U(s,bt(.42,.04,.3),F(en(n,.8)),0,.2,.36);r.rotation.x=.15}U(s,Qt(.04,6,4),F("#ffffff"),0,.44,0);break;case"beanie":U(s,we("beanie",()=>new We(.41,16,10,0,Math.PI*2,0,Math.PI*.5)),F(n),0,.03,0),U(s,se(.41,.41,.1,16),F(en(n,.8)),0,.05,0),U(s,Qt(.1,8,6),F("#ffffff"),0,.46,0);break;case"headband":{let r=U(s,Ue(.385,.045,Math.PI*2,6,20),F(n),0,.17,0);r.rotation.x=Math.PI/2-.15,U(s,bt(.06,.2,.03),F(n),.1,.05,-.38);break}case"helmet":U(s,we("helm",()=>new We(.43,16,10,0,Math.PI*2,0,Math.PI*.52)),F(n),0,.02,0),U(s,bt(.1,.06,.86),F("#ffffff"),0,.42,0);{let r=U(s,we("visorH",()=>new We(.44,16,8,Math.PI/2-.9,1.8,1.25,.45)),F("#2b2f36"),0,.02,0)}break;case"beret":{let r=U(s,se(.36,.38,.1,18),F("#d6334a"),.05,.36,-.02);r.rotation.z=-.25,U(s,se(.02,.02,.06,6),F("#d6334a"),.08,.43,0);break}case"chef":U(s,se(.33,.3,.3,16),F("#ffffff"),0,.42,0),U(s,Qt(.36,12,8),F("#ffffff"),0,.62,0).scale.y=.6;break;case"cowboy":U(s,se(.64,.64,.04,20),F("#8b5a2b"),0,.24,0),U(s,se(.28,.33,.32,14),F("#8b5a2b"),0,.4,0),U(s,se(.335,.335,.06,14),F("#3b2412"),0,.29,0);break;case"tophat":U(s,se(.5,.5,.03,20),F("#1c1c1c"),0,.3,0),U(s,se(.28,.28,.48,16),F("#1c1c1c"),0,.55,0),U(s,se(.285,.285,.07,16),F("#d6334a"),0,.36,0);break;case"viking":U(s,we("vik",()=>new We(.42,16,10,0,Math.PI*2,0,Math.PI*.5)),F("#9aa5ad"),0,.03,0);for(let r of[-1,1]){let a=U(s,Bn(.08,.36,8),F("#f2e6c9"),r*.42,.3,0);a.rotation.z=-r*.9}U(s,se(.425,.425,.06,16),F("#c98a48"),0,.05,0);break;case"pirate":{let r=U(s,se(.55,.55,.05,3),F("#1c1c1c"),0,.28,0);r.rotation.y=Math.PI/6,U(s,se(.3,.35,.25,12),F("#1c1c1c"),0,.4,0),U(s,Qt(.06,8,6),F("#ffffff"),0,.42,.32);break}case"propeller":{U(s,we("propCap",()=>new We(.405,16,10,0,Math.PI*2,0,Math.PI*.42)),F("#3f7fe8"),0,.05,0),U(s,se(.02,.02,.12,6),F("#ffd23f"),0,.47,0);let r=new ie;r.position.y=.53,s.add(r),U(r,bt(.5,.02,.08),F("#e8473f")),U(r,bt(.08,.02,.5),F("#5ad67d")),this.animators.push(a=>{r.rotation.y+=a*14});break}case"party":{let r=U(s,Bn(.18,.45,12),F("#ff5fa2"),.06,.55,0);r.rotation.z=-.15,U(s,Qt(.06,8,6),F("#ffd23f"),.1,.79,0);break}case"crown":{U(s,se(.24,.22,.16,8,!0),F("#ffcc33",{side:Fe}),0,.42,0);for(let r=0;r<5;r++){let a=r/5*Math.PI*2;U(s,Bn(.05,.14,4),F("#ffcc33"),Math.cos(a)*.22,.56,Math.sin(a)*.22),U(s,Qt(.03,6,4),F(["#e8473f","#3f7fe8","#5ad67d"][r%3]),Math.cos(a)*.24,.42,Math.sin(a)*.24)}break}case"astro":{U(s,Qt(.52,18,14),F("#bfe6ff",{transparent:!0,opacity:.35,depthWrite:!1}),0,.02,0);let r=U(s,Ue(.4,.06,Math.PI*2,6,20),F("#d8dde3"),0,-.36,0);r.rotation.x=Math.PI/2,U(s,se(.015,.015,.3,4),F("#9aa5ad"),.3,.55,-.1),U(s,Qt(.04,6,4),F("#ff5a5f"),.3,.71,-.1);break}}}_buildMask(t){let e=this.def("mask");if(e)switch(e.style){case"bandit":{let n=U(t,we("bandit",()=>new We(.405,16,8,Math.PI/2-1.2,2.4,1.75,.75)),F("#d6334a"),0,0,0);n.rotation.y=0,U(t,Bn(.1,.22,4),F("#d6334a"),0,-.22,.36).rotation.x=Math.PI;break}case"ninja":{U(t,Qt(.405,16,12),F("#1c1c1c"),0,0,0).scale.set(1,.96,.98),U(t,bt(.5,.13,.1),F(this.outfit.skin),0,.05,.34);let s=U(t,bt(.06,.3,.03),F("#d6334a"),.08,0,-.42);s.rotation.z=.4;break}case"hockey":{U(t,Qt(.36,14,10),F("#f5f5f5"),0,-.02,.1).scale.set(.95,1.1,.75);for(let[s,r]of[[-.13,.05],[.13,.05],[0,-.12],[-.08,-.2],[.08,-.2]])U(t,Qt(.035,6,4),F("#1b1b1f"),s,r,.37);U(t,bt(.03,.2,.02),F("#d6334a"),0,.15,.38);break}case"skull":{U(t,Qt(.37,14,10),F("#f2ead6"),0,0,.08).scale.set(1,1.05,.85);for(let s of[-.13,.13])U(t,Qt(.08,8,6),F("#1b1b1f"),s,.04,.36);U(t,Bn(.04,.06,3),F("#1b1b1f"),0,-.07,.38).rotation.x=Math.PI;for(let s=0;s<4;s++)U(t,bt(.03,.05,.02),F("#1b1b1f"),-.06+s*.04,-.18,.35);break}case"fox":{U(t,Qt(.36,14,10),F("#ff8f3f"),0,.02,.08).scale.set(1,.95,.85);let s=U(t,Bn(.14,.26,8),F("#ffffff"),0,-.08,.42);s.rotation.x=Math.PI/2,U(t,Qt(.04,6,4),F("#1b1b1f"),0,-.08,.55);for(let r of[-.2,.2])U(t,Bn(.1,.22,4),F("#ff8f3f"),r,.42,0),U(t,Qt(.05,6,4),F("#1b1b1f"),r*.7,.06,.37);break}}}_buildGlasses(t){let e=this.def("glasses");if(!e)return;let n=new ie;switch(n.position.set(0,.05,.38),t.add(n),e.style){case"round":for(let s of[-.14,.14])U(n,Ue(.08,.016,Math.PI*2,6,14),F("#2b2f36"),s,0,0);U(n,bt(.1,.02,.02),F("#2b2f36"),0,.01,0);break;case"goggles":{let s=U(t,Ue(.385,.035,Math.PI*2,6,20),F("#30343f"),0,.12,0);s.rotation.x=Math.PI/2;for(let r of[-.13,.13]){let a=U(t,se(.1,.1,.07,12),F("#4fd1ff"),r,.16,.33);a.rotation.x=Math.PI/2-.2}break}case"sun":for(let s of[-.14,.14]){let r=U(n,bt(.18,.1,.03),F("#1b1b1f"),s,0,.01);r.rotation.z=s<0?.08:-.08}U(n,bt(.46,.025,.03),F("#c0c0c0"),0,.05,0);break;case"heart":for(let s of[-.14,.14])U(n,Qt(.08,8,6),F("#ff4d7a"),s,0,.02).scale.set(1.1,.9,.3);U(n,bt(.08,.02,.02),F("#ff4d7a"),0,0,0);break;case"star":for(let s of[-.15,.15]){let r=U(n,se(.11,.11,.03,5),F("#ffd23f"),s,0,.02);r.rotation.x=Math.PI/2}break;case"pixel":for(let s of[-.14,.14])U(n,bt(.18,.08,.03),F("#1b1b1f"),s,0,.02),U(n,bt(.05,.03,.035),F("#ffffff"),s-.04,.015,.025);U(n,bt(.48,.03,.03),F("#1b1b1f"),0,.03,.01);break;case"visor":{let s=U(t,we("visor",()=>new Te(.4,.4,.13,20,1,!0,-1.1,2.2)),F("#3fe0d0",{transparent:!0,opacity:.75,side:Fe}),0,.06,.02);break}}}_buildBackpack(t){let e=this.def("backpack");if(!e)return;let n=new ie;n.position.set(0,.4,-.3),t.add(n);let s=this.outfit.topColor;switch(e.style){case"classic":U(n,bt(.42,.46,.2),F(en(s,.7)),0,0,-.02,!0),U(n,bt(.42,.14,.22),F(en(s,.55)),0,.17,-.02),U(n,bt(.28,.16,.06),F(en(s,.85)),0,-.1,-.13);break;case"explorer":U(n,bt(.46,.56,.24),F("#6b8e23"),0,0,-.04,!0);{let r=U(n,se(.1,.1,.5,10),F("#c98a48"),0,.36,-.04);r.rotation.z=Math.PI/2}U(n,bt(.3,.2,.06),F("#4d5d3a"),0,-.1,-.17),U(n,se(.05,.05,.25,8),F("#9aa5ad"),.27,-.05,-.04);break;case"guitar":{let r=new ie;r.rotation.z=.5,n.add(r),U(r,Qt(.2,12,8),F("#c47a3c"),0,-.18,-.03).scale.z=.35,U(r,Qt(.15,12,8),F("#c47a3c"),0,.06,-.03).scale.z=.35,U(r,bt(.06,.55,.04),F("#3b2412"),0,.4,-.03),U(r,se(.06,.06,.02,12),F("#1b1b1f"),0,-.12,.04).rotation.x=Math.PI/2;break}case"turtle":{U(n,Qt(.36,10,8),F("#3aa76d",{flatShading:!0}),0,-.05,.05,!0).scale.set(1.05,1.15,.6),U(n,Qt(.37,6,4),F("#2f8f4f",{flatShading:!0,wireframe:!0}),0,-.05,.05).scale.set(1.05,1.15,.6);break}case"jetpack":{for(let r of[-.13,.13]){U(n,se(.1,.1,.5,12),F("#c0c6cc"),r,0,-.06,!0),U(n,Bn(.1,.12,12),F("#e8473f"),r,.31,-.06);let a=U(n,Bn(.08,.3,8),F("#ffb020",{basic:!0,transparent:!0,opacity:.85}),r,-.4,-.06);a.rotation.x=Math.PI,this.animators.push((o,l)=>{let c=.7+Math.sin(l*40+r*10)*.3;a.scale.set(c,.8+c*.5,c)})}U(n,bt(.4,.12,.1),F("#30343f"),0,.05,.02);break}case"wings":{for(let r of[-1,1]){let a=new ie;a.position.set(r*.1,.1,0),n.add(a);for(let o=0;o<4;o++){let l=U(a,dc(.07,.5-o*.08,6),F(o%2?"#ffffff":"#f0f4ff"),r*(.18+o*.11),.12-o*.07,-.05);l.rotation.z=r*(1.2+o*.18)}this.animators.push((o,l)=>{a.rotation.y=r*(.25+Math.sin(l*2.5)*.18)})}break}}}_buildSpecial(t,e){let n=this.def("special");if(n)switch(n.style){case"scarf":{let s=U(t,Ue(.2,.07,Math.PI*2,6,16),F("#ffd23f"),0,.7,.02);s.rotation.x=Math.PI/2,U(t,bt(.12,.3,.05),F("#ffd23f"),.12,.52,.24),U(t,bt(.12,.04,.06),F("#e8473f"),.12,.42,.24);break}case"headphones":{let s=U(e,Ue(.41,.035,Math.PI,6,16),F("#222222"),0,.05,0);for(let r of[-.41,.41])U(e,se(.13,.13,.1,12),F("#ff5fa2"),r,0,0).rotation.z=Math.PI/2;break}case"chain":{let s=U(t,Ue(.2,.018,Math.PI*2,6,20),F("#ffcc33"),0,.58,.12);s.rotation.x=Math.PI/2-.5,U(t,se(.07,.07,.02,12),F("#ffcc33"),0,.46,.26).rotation.x=Math.PI/2;break}case"cape":{let s=new ie;s.position.set(0,.68,-.24),t.add(s);let r=U(s,we("capeG",()=>{let a=new zi(.62,.95,1,4);return a.translate(0,-.47,0),a}),F("#d6334a",{side:Fe}),0,0,0,!0);this.animators.push((a,o,l)=>{s.rotation.x=.15+Math.min(.9,(l.speed||0)*.7)+Math.sin(o*4)*.05});break}case"halo":{let s=U(e,Ue(.25,.035,Math.PI*2,6,24),F("#fff3a0",{basic:!0}),0,.62,0);s.rotation.x=Math.PI/2,this.animators.push((r,a)=>{s.position.y=.62+Math.sin(a*2)*.03});break}}}setWeapon(t){t!==this.weaponType&&(this.weaponType=t,this.gun&&this.gunHolder.remove(this.gun),this.gun=t?sc(t):null,this.gun&&this.gunHolder.add(this.gun))}shoot(t=1){this.kick=Math.min(1,this.kick+.6*t)}pickup(){this.pickT=.35}die(){this.deadT<0&&(this.deadT=0)}revive(){this.deadT=-1,this.root.rotation.x=0,this.root.position.y=0,this.root.visible=!0}update(t,e={}){this.t+=t;for(let g of this.animators)g(t,this.t,e);let n=(g,x,m)=>g+(x-g)*Math.min(1,m*t);if(this.blinkT-=t,this.eyes&&(this.eyes.scale.y=this.blinkT<.12&&this.blinkT>0?.15:1),this.blinkT<=0&&(this.blinkT=2.5+Math.random()*3),this.deadT>=0){this.deadT+=t;let g=Math.min(1,this.deadT/.45);this.root.rotation.x=-Math.PI/2*(g*g*(3-2*g)),this.root.position.y=.25*g,this.armL.rotation.x=n(this.armL.rotation.x,-2.6,8),this.armR.rotation.x=n(this.armR.rotation.x,-2.6,8),this.eyes&&(this.eyes.scale.y=.15),this.deadT>3&&(this.root.position.y=.25-(this.deadT-3)*.3),this.deadT>4.2&&(this.root.visible=!1);return}if(this.victory){this._victoryDance();return}let s=e.speed||0;this.phase+=t*(e.running?13:9.5)*Math.min(1,s+1e-4);let r=(e.running?.95:.65)*Math.min(1,s*1.4),a=Math.sin(this.phase)*r,o=-Math.sin(this.phase)*r;e.airborne&&(a=.7,o=-.3),this.legL.rotation.x=n(this.legL.rotation.x,a,18),this.legR.rotation.x=n(this.legR.rotation.x,o,18);let l=this.pickT>0?Math.sin(this.pickT/.35*Math.PI)*.28:0;this.pickT>0&&(this.pickT-=t);let c=s<.1;this.idleT=c?this.idleT+t:0;let h=Math.sin(this.t*2.2)*.018,u=c?Math.sin(this.t*.9)*.025:0;this.hips.position.y=.72+Math.abs(Math.sin(this.phase))*.06*Math.min(1,s*1.5)-l+h*.5,this.hips.position.x=u,this.hips.rotation.z=Math.sin(this.phase)*.04*s+u*.6,this.torso.scale.y=1+h,this.head.position.y=1+h*1.5;let d=c&&this.idleT>2?Math.sin(this.idleT*.7)*.45:0;this.head.rotation.y=n(this.head.rotation.y,d,3),this.head.rotation.z=n(this.head.rotation.z,c?Math.sin(this.t*.6)*.05:0,3),this.kick=Math.max(0,this.kick-t*7);let p=!!this.gun&&!e.healing;if(this.gun&&(this.gun.visible=!e.healing),e.healing)this.armL.rotation.set(n(this.armL.rotation.x,-1.1,10),0,.5+Math.sin(this.t*8)*.1),this.armR.rotation.set(n(this.armR.rotation.x,-1.1,10),0,-.5-Math.sin(this.t*8)*.1);else if(p){let g=e.aiming?.12:0,x=-1.5-g+this.kick*.35,m=-1.35-g+this.kick*.3,f=.55;e.reloading?(x=-.9+Math.sin(this.t*6)*.08,m=-.7+Math.sin(this.t*9)*.35,f=.4):e.running&&!e.aiming?(x=-.9,m=-.8):c&&this.idleT>1.5&&!e.inMatch&&(x=-.55+Math.sin(this.t*1.1)*.05,m=-.5,f=.6),this.armR.rotation.set(n(this.armR.rotation.x,x,12),0,n(this.armR.rotation.z,.05,12)),this.armL.rotation.set(n(this.armL.rotation.x,m,12),0,n(this.armL.rotation.z,f,12)),this.gunHolder.position.z=.02-this.kick*.08}else this.armL.rotation.set(n(this.armL.rotation.x,-a*.8,12),0,.08),this.armR.rotation.set(n(this.armR.rotation.x,-o*.8,12),0,-.08)}_victoryDance(){let t=this.t;if(this.gun&&(this.gun.visible=!1),this.victoryStyle===1)this.root.position.y=Math.abs(Math.sin(t*6))*.12,this.hips.rotation.z=Math.sin(t*6)*.25,this.armL.rotation.set(-1.4+Math.sin(t*6)*.6,0,-.6),this.armR.rotation.set(-1.4-Math.sin(t*6)*.6,0,.6),this.legL.rotation.x=Math.sin(t*6)*.4,this.legR.rotation.x=-Math.sin(t*6)*.4,this.head.rotation.z=Math.sin(t*6)*.2;else if(this.victoryStyle===2)this.root.position.y=0,this.armL.rotation.set(0,0,-1.4+Math.sin(t*3)*.1),this.armR.rotation.set(0,0,1.4-Math.sin(t*3)*.1),this.hips.rotation.y=Math.sin(t*1.5)*.4,this.legL.rotation.x=0,this.legR.rotation.x=0;else{let e=Math.abs(Math.sin(t*5));this.root.position.y=e*.35,this.armL.rotation.set(Math.PI*.95,0,-.3+Math.sin(t*10)*.35),this.armR.rotation.set(Math.PI*.95,0,.3-Math.sin(t*10)*.35),this.legL.rotation.x=-e*.5,this.legR.rotation.x=-e*.5,this.head.rotation.y=Math.sin(t*3)*.3}}setOpacity(t){this.root.traverse(e=>{e.isMesh&&(e.userData.ownMat||(e.material=e.material.clone(),e.userData.ownMat=!0),e.material.transparent=t<1,e.material.opacity=t)})}}});var $i,ld,cd,fc,hd,ud,dd,fd,pd,md,pc,qe,Ln,mc,Yi=cn(()=>{$i=.03333333333333333,ld=320,cd=.55,fc=100,hd=6,ud=8.8,dd=3.8,fd=2.2,pd=7.5,md=22,pc=2.4,qe={FIRE:1,ADS:2,SPRINT:4,JUMP:8},Ln={solo:{id:"solo",name:"Solo",teamSize:1,capacity:15},duos:{id:"duos",name:"D\xFAos",teamSize:2,capacity:14},squads:{id:"squads",name:"Escuadrones",teamSize:4,capacity:15}},mc=["#3fa9f5","#ff5a5f","#ffc928","#5ad67d","#b07cff","#ff8f3f","#3fe0d0","#ff7ac8","#8fd14f","#7a8cff","#ffa3a3","#c9a36b","#9be3ff","#f2f27a","#d0d0d0"]});function O_(){try{let i=JSON.parse(localStorage.getItem(yd)||"{}");return{...Bs,...i,keys:{...Bs.keys,...i.keys||{}}}}catch{return structuredClone(Bs)}}function ja(i){Md.push(i)}function In(){try{localStorage.setItem(yd,JSON.stringify(ut))}catch{}for(let i of Md)i(ut)}function Ae(i){return i?i.startsWith("Key")?i.slice(3):i.startsWith("Digit")?i.slice(5):{Space:"Espacio",ShiftLeft:"Shift",ShiftRight:"Shift D",ControlLeft:"Ctrl",ControlRight:"Ctrl D",AltLeft:"Alt",Tab:"Tab",CapsLock:"Bloq May\xFAs",Backquote:"\xBA",ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192",Enter:"Intro"}[i]||i:"\u2014"}var yd,vd,Bs,ut,Md,Vn,wr=cn(()=>{yd="islaRoyale.settings.v1",vd=[["forward","Avanzar"],["back","Retroceder"],["left","Izquierda"],["right","Derecha"],["sprint","Correr"],["jump","Saltar"],["reload","Recargar"],["interact","Recoger / Interactuar"],["slot1","Arma 1"],["slot2","Arma 2"],["bandage","Usar venda"],["medkit","Usar botiqu\xEDn"],["drop","Soltar arma"],["scoreboard","Informaci\xF3n de partida"]],Bs={quality:"medium",renderScale:1,fullscreen:!0,masterVol:.9,musicVol:.45,sfxVol:.8,sensitivity:1,invertY:!1,cameraMode:"follow",cameraDistance:1,cameraSmoothing:.35,fov:50,showFps:!1,botLevel:"mixed",keys:{forward:"KeyW",back:"KeyS",left:"KeyA",right:"KeyD",sprint:"ShiftLeft",jump:"Space",reload:"KeyR",interact:"KeyE",slot1:"Digit1",slot2:"Digit2",bandage:"Digit3",medkit:"Digit4",drop:"KeyG",scoreboard:"Tab"}};ut=O_(),Md=[];Vn={low:{shadows:!1,shadowSize:512,pixelRatio:1,antialias:!1,fog:110,bushes:!1},medium:{shadows:!0,shadowSize:1024,pixelRatio:1,antialias:!0,fog:150,bushes:!0},high:{shadows:!0,shadowSize:2048,pixelRatio:1.5,antialias:!0,fog:200,bushes:!0}}});function Dn(i){return i=Math.max(0,Math.floor(i)),`${Math.floor(i/60)}:${String(i%60).padStart(2,"0")}`}function bd(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function Sd(i){return mc[i%mc.length]}var Et,wi,Qa,to=cn(()=>{qa();Yi();wr();Et=i=>document.getElementById(i),wi=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);Qa=class{constructor(t){this.map=t,this.root=Et("hud"),this.overlay=Et("overlay"),this.ctx=this.overlay.getContext("2d"),this.mm=Et("minimap"),this.mmCtx=this.mm.getContext("2d"),this.bigMap=Et("bigmap"),this.bmCtx=this.bigMap.getContext("2d"),this.floaters=[],this.indicators=[],this.feed=[],this.announceT=0,this.hitT=0,this._mapImage(),this.resize(),this.root.classList.remove("hidden"),this.lastKey={}}_mapImage(){let t=this.map.size,e=2,n=document.createElement("canvas");n.width=n.height=t*e;let s=n.getContext("2d");s.fillStyle="#8fd16a",s.fillRect(0,0,t*e,t*e);for(let r of this.map.areas)s.fillStyle=r.color,s.fillRect(r.x*e,r.y*e,r.w*e,r.h*e);s.fillStyle="#6a7079";for(let r of this.map.roads)s.fillRect(r.x*e,r.y*e,r.w*e,r.h*e);for(let r of this.map.buildings)s.fillStyle=r.roofColor,s.fillRect(r.x*e,r.y*e,r.w*e,r.h*e),s.strokeStyle="rgba(0,0,0,.35)",s.strokeRect(r.x*e,r.y*e,r.w*e,r.h*e);for(let r of this.map.walls)(r.kind==="container"||r.kind==="ruin"||r.kind==="pallet")&&(s.fillStyle=r.color,s.fillRect(r.x*e,r.y*e,r.w*e,r.h*e));for(let r of this.map.circles){s.fillStyle=r.kind==="pine"||r.kind==="tree"?"rgba(46,120,52,.85)":r.kind==="rock"?"#9a9a9a":r.kind==="tank"?"#e8ecef":"#d9c48f";let a=r.kind==="pine"||r.kind==="tree"?1.6*(r.scale||1):r.r;s.beginPath(),s.arc(r.x*e,r.y*e,a*e,0,Math.PI*2),s.fill()}s.font=`bold ${7*e}px Fredoka, sans-serif`,s.textAlign="center";for(let r of this.map.pois)s.fillStyle="rgba(0,0,0,.45)",s.fillText(r.name,r.x*e+1,r.y*e+1),s.fillStyle="#fff",s.fillText(r.name,r.x*e,r.y*e);this.mapImg=n,this.mapR=e}resize(){let t=Math.min(window.devicePixelRatio||1,2);this.dpr=t,this.overlay.width=innerWidth*t,this.overlay.height=innerHeight*t,this.overlay.style.width=innerWidth+"px",this.overlay.style.height=innerHeight+"px"}setRoster(t,e,n){this.players=t,this.localId=e,this.mode=n,Et("hudMode").textContent=Ln[n].name,this.renderKeys()}renderKeys(){let t=ut.keys;Et("slotKey0").textContent=Ae(t.slot1),Et("slotKey1").textContent=Ae(t.slot2),Et("bandKey").textContent=Ae(t.bandage),Et("kitKey").textContent=Ae(t.medkit)}updateMe(t,e){let n=Math.max(0,t.hp);Et("hpFill").style.width=n+"%",Et("hpFill").className="fill "+(n>60?"good":n>30?"mid":"low"),Et("hpText").textContent=n;for(let r=0;r<2;r++){let a=t.w[r],o=Et("slot"+r);if(o.classList.toggle("active",t.sl===r),o.classList.toggle("empty",!a),a){let l=Xe[a[0]];Et("slotName"+r).textContent=l.name,Et("slotAmmo"+r).innerHTML=`<b>${a[1]}</b><span>/ ${t.am[l.ammo]}</span>`,o.style.setProperty("--wc",l.color),Et("slotAmmo"+r).classList.toggle("low",a[1]===0)}else Et("slotName"+r).textContent="Vac\xEDo",Et("slotAmmo"+r).innerHTML=""}Et("bandCount").textContent=t.he.bandage,Et("kitCount").textContent=t.he.medkit,Et("itemBand").classList.toggle("none",!t.he.bandage),Et("itemKit").classList.toggle("none",!t.he.medkit);let s=Et("progress");if(t.rl>0||t.hl){let r=t.w[t.sl],a,o;if(t.hl)a=1-t.hl[1]/t.hl[2],o=t.hl[0]==="medkit"?"Usando botiqu\xEDn\u2026":"Usando venda\u2026";else{let l=r?Xe[r[0]].reload:1;a=1-t.rl/l,o="Recargando\u2026"}s.classList.remove("hidden"),Et("progressFill").style.width=Math.round(Math.max(0,Math.min(1,a))*100)+"%",Et("progressLabel").textContent=o}else s.classList.add("hidden");Et("killCount").textContent=t.k}updateTop(t,e,n,s){Et("aliveCount").textContent=t,Et("matchTime").textContent=Dn(Math.max(0,n));let r=Et("zoneInfo");s&&(s.st==="done"?r.innerHTML='<span class="zdot"></span>Zona final':s.ph<0?r.innerHTML=`<span class="zdot"></span>La zona aparece en <b>${Dn(s.tl)}</b>`:s.st==="wait"?r.innerHTML=`<span class="zdot"></span>La zona se cierra en <b>${Dn(s.tl)}</b>`:r.innerHTML=`<span class="zdot shrink"></span>\xA1Zona cerr\xE1ndose! <b>${Dn(s.tl)}</b>`)}updateTeam(t){let e=Et("team");if(Ln[this.mode].teamSize<=1){e.innerHTML="";return}e.innerHTML=t.map(n=>`<div class="mate ${n.alive?"":"dead"}"><i style="background:${n.color}"></i><span>${wi(n.name)}${n.isMe?" (t\xFA)":""}</span><div class="mbar"><div style="width:${n.alive?n.hp:0}%"></div></div></div>`).join("")}prompt(t){let e=Et("prompt");if(!t){e.classList.add("hidden");return}e.innerHTML=`<kbd>${wi(Ae(ut.keys.interact))}</kbd> ${t}`,e.classList.remove("hidden")}announce(t,e="",n=2.2){let s=Et("announce");s.className="announce show "+e,s.innerHTML=t,clearTimeout(this.annTimer),this.annTimer=setTimeout(()=>{s.className="announce "+e},n*1e3)}toast(t){let e=document.createElement("div");for(e.className="toast",e.textContent=t,Et("toasts").appendChild(e),setTimeout(()=>e.classList.add("out"),1600),setTimeout(()=>e.remove(),2100);Et("toasts").children.length>4;)Et("toasts").firstChild.remove()}killfeed(t,e,n,s){let r=document.createElement("div");r.className="kf"+(s?" me":"");let a=n==="zone"?"la zona":Xe[n]?.name||"";for(r.innerHTML=t?`<b style="color:${t.color}">${wi(t.name)}</b> <span class="kw">\u27F6 ${wi(a)} \u27F6</span> <b style="color:${e.color}">${wi(e.name)}</b>`:`<b style="color:${e.color}">${wi(e.name)}</b> <span class="kw">eliminado por ${wi(a||"la zona")}</span>`,Et("killfeed").prepend(r),setTimeout(()=>r.classList.add("out"),6e3),setTimeout(()=>r.remove(),6600);Et("killfeed").children.length>6;)Et("killfeed").lastChild.remove()}hitmarker(t=!1){let e=Et("hitmarker");e.classList.remove("show","kill"),e.offsetWidth,e.classList.add("show"),t&&e.classList.add("kill")}damageFlash(t){let e=Et("dmgVignette");e.style.opacity=Math.min(.85,.25+t/40),clearTimeout(this.dmgT),this.dmgT=setTimeout(()=>{e.style.opacity=0},180)}setZoneVignette(t){Et("zoneVignette").style.opacity=t?1:0}setLowHp(t){Et("lowHp").style.opacity=t>0&&t<=30?.35+(30-t)/60:0}floatText(t,e,n,s,r="#fff",a=!1){this.floaters.push({x:t,y:e,z:n,text:s,color:r,big:a,t:0,ox:(Math.random()-.5)*30})}addIndicator(t,e="damage"){this.indicators.push({angle:t,kind:e,t:e==="damage"?1.4:1.6})}crosshair(t,e,n,s,r){let a=Et("crosshair");a.style.display=s?"block":"none",a.style.transform=`translate(${t}px, ${e}px)`,a.style.setProperty("--gap",Math.round(6+n)+"px"),a.classList.toggle("blocked",!!r),Et("hitmarker").style.transform=`translate(${t}px, ${e}px)`}drawOverlay(t,e,n,s){let r=this.ctx,a=this.dpr;r.setTransform(a,0,0,a,0,0),r.clearRect(0,0,innerWidth,innerHeight),r.textAlign="center";for(let c of e){let h=n(c.x,c.h,c.y);if(!h)continue;let u=54;r.font="600 13px Fredoka, sans-serif",r.lineWidth=3,r.strokeStyle="rgba(0,0,0,.55)",r.strokeText(c.name,h.x,h.y-12),r.fillStyle=c.color,r.fillText(c.name,h.x,h.y-12),r.fillStyle="rgba(0,0,0,.5)",bd(r,h.x-u/2-1,h.y-7,u+2,8,4),r.fill(),r.fillStyle=c.enemy?"#ff5a5f":"#5ad67d",bd(r,h.x-u/2,h.y-6,u*Math.max(0,c.hp)/100,6,3),r.fill()}for(let c=this.floaters.length-1;c>=0;c--){let h=this.floaters[c];if(h.t+=t,h.t>.9){this.floaters.splice(c,1);continue}let u=n(h.x,h.z+h.t*1.6,h.y);if(!u)continue;let d=1-Math.max(0,h.t-.5)/.4;r.globalAlpha=d,r.font=`800 ${h.big?26:20}px Fredoka, sans-serif`,r.lineWidth=4,r.strokeStyle="rgba(0,0,0,.6)";let p=1+Math.max(0,.15-h.t)*3;r.save(),r.translate(u.x+h.ox*h.t,u.y),r.scale(p,p),r.strokeText(h.text,0,0),r.fillStyle=h.color,r.fillText(h.text,0,0),r.restore()}r.globalAlpha=1;let o=s.x,l=s.y;for(let c=this.indicators.length-1;c>=0;c--){let h=this.indicators[c];if(h.t-=t,h.t<=0){this.indicators.splice(c,1);continue}let u=Math.min(1,h.t);r.save(),r.translate(o,l),r.rotate(h.angle),h.kind==="damage"?(r.strokeStyle=`rgba(255,60,60,${.85*u})`,r.lineWidth=10,r.lineCap="round",r.beginPath(),r.arc(0,0,120,-.32,.32),r.stroke()):(r.fillStyle=`rgba(255,210,63,${.9*u})`,r.beginPath(),r.moveTo(165,0),r.lineTo(145,-11),r.lineTo(145,11),r.closePath(),r.fill()),r.restore()}}drawMinimap(t,e,n,s,r){let a=this.mmCtx,o=this.mm.width,l=this.mm.height,h=o/110;a.save(),a.clearRect(0,0,o,l),a.beginPath(),a.arc(o/2,l/2,o/2-2,0,Math.PI*2),a.clip(),a.fillStyle="#3fb6e8",a.fillRect(0,0,o,l),a.translate(o/2,l/2),r&&a.rotate(-e-Math.PI/2),a.scale(h,h),a.translate(-t.x,-t.y),a.drawImage(this.mapImg,0,0,this.map.size,this.map.size),this._drawZone(a,s,1/h);for(let u of n)!u.alive||u.isMe||!u.mate&&!u.revealed||(a.fillStyle=u.mate?u.color:"#ff3b3b",a.beginPath(),a.arc(u.x,u.y,2.2/h*2.4,0,Math.PI*2),a.fill(),a.strokeStyle="#fff",a.lineWidth=1/h,a.stroke());if(a.restore(),a.save(),a.translate(o/2,l/2),a.rotate(r?-Math.PI/2:t.a),a.fillStyle="#ffffff",a.strokeStyle="#1b1b1f",a.lineWidth=2,a.beginPath(),a.moveTo(9,0),a.lineTo(-6,-6),a.lineTo(-3,0),a.lineTo(-6,6),a.closePath(),a.fill(),a.stroke(),a.restore(),r){let u=-e-Math.PI/2-Math.PI/2;a.fillStyle="#fff",a.font="bold 12px Fredoka, sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText("N",o/2+Math.cos(u)*(o/2-12),l/2+Math.sin(u)*(l/2-12))}a.strokeStyle="rgba(255,255,255,.85)",a.lineWidth=3,a.beginPath(),a.arc(o/2,l/2,o/2-2,0,Math.PI*2),a.stroke()}_drawZone(t,e,n){e&&(t.save(),t.fillStyle="rgba(110,60,220,.38)",t.beginPath(),t.rect(-200,-200,this.map.size+400,this.map.size+400),t.arc(e.cx,e.cy,Math.max(.1,e.r),0,Math.PI*2,!0),t.fill("evenodd"),t.strokeStyle="#b07cff",t.lineWidth=2.5*n,t.beginPath(),t.arc(e.cx,e.cy,Math.max(.1,e.r),0,Math.PI*2),t.stroke(),e.ph>=0&&e.st!=="done"&&(t.strokeStyle="#ffffff",t.lineWidth=2*n,t.setLineDash([6*n,4*n]),t.beginPath(),t.arc(e.tx,e.ty,Math.max(.1,e.tr),0,Math.PI*2),t.stroke(),t.setLineDash([])),t.restore())}showScoreboard(t,e){if(Et("scoreboard").classList.toggle("hidden",!t),!t||!e)return;let s=this.bmCtx,r=this.bigMap.width,a=r/this.map.size;s.clearRect(0,0,r,r),s.save(),s.scale(a,a),s.drawImage(this.mapImg,0,0,this.map.size,this.map.size),this._drawZone(s,e.zone,1/a);for(let l of e.players)!l.alive||!l.mate&&!l.isMe||(s.fillStyle=l.isMe?"#ffffff":l.color,s.beginPath(),s.arc(l.x,l.y,4.5/a*1.2,0,Math.PI*2),s.fill(),s.strokeStyle="#1b1b1f",s.lineWidth=1.5/a,s.stroke());s.restore();let o=e.players.slice().sort((l,c)=>c.alive-l.alive||c.kills-l.kills);Et("sbInfo").innerHTML=`<div class="sbHead"><span>${Ln[this.mode].name}</span><span>${e.alive} vivos</span><span>${Dn(e.time)}</span></div><div class="sbInv">${e.inventory}</div><table><tr><th>Jugador</th><th>Equipo</th><th>Bajas</th><th>Estado</th></tr>`+o.map(l=>`<tr class="${l.isMe?"me":""} ${l.alive?"":"dead"}"><td>${wi(l.name)}${l.bot?' <small title="Controlado por IA">IA</small>':""}</td><td><i class="tdot" style="background:${l.color}"></i>${l.team+1}</td><td>${l.kills}</td><td>${l.alive?"Vivo":"Eliminado"}</td></tr>`).join("")+"</table>"}hide(){this.root.classList.add("hidden"),Et("scoreboard").classList.add("hidden"),this.ctx.clearRect(0,0,this.overlay.width,this.overlay.height),Et("killfeed").innerHTML="",Et("toasts").innerHTML="",Et("dmgVignette").style.opacity=0,Et("zoneVignette").style.opacity=0,Et("lowHp").style.opacity=0,Et("spectate").classList.add("hidden"),Et("announce").className="announce"}}});var yc,_t,Er=cn(()=>{wr();yc=class{constructor(){this.ctx=null,this.listener={x:0,y:0,yaw:0},this.musicOn=!1}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t;let e=this.ctx;this.master=e.createGain(),this.comp=e.createDynamicsCompressor(),this.comp.threshold.value=-14,this.comp.ratio.value=4,this.master.connect(this.comp).connect(e.destination),this.sfx=e.createGain(),this.sfx.connect(this.master),this.music=e.createGain(),this.music.connect(this.master),this.echo=e.createDelay(1),this.echo.delayTime.value=.18,this.echoGain=e.createGain(),this.echoGain.gain.value=.22,this.echo.connect(this.echoGain).connect(this.sfx),this.echoGain.connect(this.echo);let n=e.sampleRate*1.5;this.noise=e.createBuffer(1,n,e.sampleRate);let s=this.noise.getChannelData(0);for(let r=0;r<n;r++)s[r]=Math.random()*2-1;this.applyVolumes(),ja(()=>this.applyVolumes())}applyVolumes(){this.ctx&&(this.master.gain.value=ut.masterVol,this.sfx.gain.value=ut.sfxVol,this.music.gain.value=ut.musicVol*.55)}get t(){return this.ctx.currentTime}_out(t=1,e=0){let n=this.ctx,s=n.createGain();if(s.gain.value=t,n.createStereoPanner){let r=n.createStereoPanner();r.pan.value=Math.max(-1,Math.min(1,e)),s.connect(r).connect(this.sfx)}else s.connect(this.sfx);return s}_noise(t,{t:e=this.t,dur:n=.2,type:s="lowpass",freq:r=2e3,q:a=.7,gain:o=1,attack:l=.002,sweepTo:c=null}){let h=this.ctx,u=h.createBufferSource();u.buffer=this.noise,u.playbackRate.value=.8+Math.random()*.4;let d=h.createBiquadFilter();d.type=s,d.frequency.setValueAtTime(r,e),d.Q.value=a,c&&d.frequency.exponentialRampToValueAtTime(c,e+n);let p=h.createGain();p.gain.setValueAtTime(1e-4,e),p.gain.exponentialRampToValueAtTime(o,e+l),p.gain.exponentialRampToValueAtTime(1e-4,e+n),u.connect(d).connect(p).connect(t),u.start(e,Math.random()*.5),u.stop(e+n+.05)}_tone(t,{t:e=this.t,dur:n=.15,type:s="sine",freq:r=440,to:a=null,gain:o=.5,attack:l=.005}){let c=this.ctx,h=c.createOscillator();h.type=s,h.frequency.setValueAtTime(r,e),a&&h.frequency.exponentialRampToValueAtTime(a,e+n);let u=c.createGain();u.gain.setValueAtTime(1e-4,e),u.gain.exponentialRampToValueAtTime(o,e+l),u.gain.exponentialRampToValueAtTime(1e-4,e+n),h.connect(u).connect(t),h.start(e),h.stop(e+n+.05)}spatial(t,e,n=70){let s=t-this.listener.x,r=e-this.listener.y,a=Math.hypot(s,r);if(a>n)return null;let o=Math.max(0,1-a/n)**1.6,l=Math.atan2(r,s)-this.listener.yaw;return{vol:o,pan:Math.sin(l)*Math.min(1,a/6)*.8,d:a}}gunshot(t,e=null,n=null){if(!this.ctx)return;let s=1,r=0,a=!1;if(e!==null){let c=this.spatial(e,n,t==="sniper"?140:90);if(!c)return;s=c.vol,r=c.pan,a=c.d>25}let o=this._out(s*.9,r),l={pistol:{n:3200,nd:.13,th:170,td:.08,g:.7},smg:{n:4200,nd:.08,th:210,td:.05,g:.5},shotgun:{n:1400,nd:.38,th:75,td:.22,g:1},ar:{n:2600,nd:.14,th:120,td:.1,g:.75},sniper:{n:2200,nd:.6,th:60,td:.3,g:1}}[t]||{n:3e3,nd:.12,th:150,td:.08,g:.6};if(this._noise(o,{dur:l.nd*(a?1.3:1),freq:a?l.n*.4:l.n,gain:l.g,sweepTo:300}),this._tone(o,{dur:l.td,type:"triangle",freq:l.th*2,to:l.th*.5,gain:l.g*.8}),t==="sniper"||t==="shotgun"||a){let c=this.ctx.createGain();c.gain.value=s*.5,c.connect(this.echo),this._noise(c,{dur:.3,freq:900,gain:.5})}}reload(t,e=null,n=null){if(!this.ctx)return;let s=.7,r=0;if(e!==null){let o=this.spatial(e,n,25);if(!o)return;s*=o.vol,r=o.pan}let a=this._out(s,r);this._tone(a,{type:"square",freq:900,to:500,dur:.05,gain:.25}),this._tone(a,{t:this.t+.35,type:"square",freq:650,to:1200,dur:.06,gain:.3})}dry(){this.ctx&&this._tone(this._out(.5),{type:"square",freq:1500,dur:.03,gain:.25})}step(t=null,e=null,n=!1){if(!this.ctx)return;let s=n?.35:.22,r=0;if(t!==null){let a=this.spatial(t,e,22);if(!a)return;s*=a.vol,r=a.pan}this._noise(this._out(s,r),{dur:.07,freq:500+Math.random()*300,type:"lowpass",gain:.8})}impact(t,e){if(!this.ctx)return;let n=this.spatial(t,e,40);n&&(this._tone(this._out(n.vol*.6,n.pan),{type:"sine",freq:180,to:60,dur:.12,gain:.7}),this._noise(this._out(n.vol*.4,n.pan),{dur:.06,freq:1200,gain:.6}))}hitMarker(t=!1){if(!this.ctx)return;let e=this._out(.5);this._tone(e,{type:"triangle",freq:t?1800:1350,dur:.06,gain:.5})}hurt(){if(!this.ctx)return;let t=this._out(.7);this._tone(t,{type:"sawtooth",freq:160,to:70,dur:.18,gain:.35}),this._noise(t,{dur:.12,freq:700,gain:.5})}elimination(){if(!this.ctx)return;let t=this._out(.6);[784,988,1319].forEach((e,n)=>this._tone(t,{t:this.t+n*.07,type:"triangle",freq:e,dur:.22,gain:.45}))}crate(t,e,n){if(!this.ctx)return;let s=this.spatial(t,e,40);if(!s)return;let r=this._out(s.vol*(n?.9:.4),s.pan);this._noise(r,{dur:n?.35:.08,freq:800,type:"bandpass",q:2,gain:.8}),n&&this._tone(r,{type:"triangle",freq:220,to:90,dur:.25,gain:.5})}pickup(){if(!this.ctx)return;let t=this._out(.45);this._tone(t,{type:"sine",freq:660,dur:.07,gain:.5}),this._tone(t,{t:this.t+.06,type:"sine",freq:990,dur:.1,gain:.5})}heal(){if(!this.ctx)return;let t=this._out(.4);[523,659,784,1047].forEach((e,n)=>this._tone(t,{t:this.t+n*.06,type:"sine",freq:e,dur:.16,gain:.35}))}click(){this.ctx&&this._tone(this._out(.35),{type:"triangle",freq:880,to:1320,dur:.05,gain:.4})}hover(){this.ctx&&this._tone(this._out(.15),{type:"sine",freq:1200,dur:.03,gain:.25})}zoneAlarm(){if(!this.ctx)return;let t=this._out(.4);for(let e=0;e<3;e++)this._tone(t,{t:this.t+e*.32,type:"square",freq:440,to:330,dur:.25,gain:.18})}zoneTick(){this.ctx&&this._tone(this._out(.35),{type:"sawtooth",freq:90,dur:.25,gain:.25})}countdown(t=!1){this.ctx&&this._tone(this._out(.5),{type:"square",freq:t?1046:523,dur:t?.35:.12,gain:.25})}victory(){if(!this.ctx)return;this.stopMusic();let t=this._out(.7),e=[[523,0],[659,.15],[784,.3],[1047,.45],[988,.75],[1047,.9],[1319,1.05]];for(let[n,s]of e)this._tone(t,{t:this.t+s,type:"square",freq:n,dur:.28,gain:.18}),this._tone(t,{t:this.t+s,type:"triangle",freq:n/2,dur:.3,gain:.3})}defeat(){if(!this.ctx)return;this.stopMusic();let t=this._out(.6);[[392,0],[370,.3],[349,.6],[262,.95]].forEach(([e,n])=>this._tone(t,{t:this.t+n,type:"triangle",freq:e,dur:n>.9?.9:.32,gain:.35}))}startMusic(){if(!this.ctx||this.musicOn)return;this.musicOn=!0,this.musicStep=0,this.nextNote=this.t+.1;let t=()=>{if(this.musicOn){for(;this.nextNote<this.t+.25;)this._musicStep(this.musicStep,this.nextNote),this.musicStep++,this.nextNote+=60/104/2;this.musicTimer=setTimeout(t,60)}};t()}stopMusic(){this.musicOn=!1,clearTimeout(this.musicTimer)}_musicStep(t,e){let n=this.music,s=[[60,64,67],[55,59,62],[57,60,64],[53,57,60]],r=Math.floor(t/8)%4,a=t%8,o=s[r],l=h=>440*2**((h-69)/12);if(a===0)for(let h of o)this._tone(n,{t:e,type:"triangle",freq:l(h),dur:1.9,gain:.07,attack:.08});a%4===0&&this._tone(n,{t:e,type:"sine",freq:l(o[0]-24),dur:.5,gain:.32});let c=[0,1,2,1,2,0,2,1];t%16>1&&this._tone(n,{t:e,type:"square",freq:l(o[c[a]]+12),dur:.12,gain:.045}),(a===0||a===4)&&this._tone(n,{t:e,type:"sine",freq:120,to:45,dur:.18,gain:.45}),a%2===1&&this._noise(n,{t:e,dur:.04,type:"highpass",freq:7e3,gain:.12}),a===4&&this._noise(n,{t:e,dur:.12,type:"bandpass",freq:1800,gain:.18})}},_t=new yc});function Rd(){ni=new Hi({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),ni.setSize(128,128),ni.outputColorSpace=pe,ii=new xi,ii.add(new yi("#ffffff","#8899aa",1.5));let i=new vi("#ffffff",1.4);i.position.set(2,4,5),ii.add(i),Ki=new Pe(30,1,.1,50)}function Vs(i,t={}){let e=pn[i];if(!e)return"";let n=i+JSON.stringify(t);if(Hs.has(n))return Hs.get(n);try{ni||Rd();let s={...fn,...t,[e.slot]:i};e.slot!=="hat"&&e.slot!=="hair"&&(s.hat=null),e.slot==="hat"&&(s.hair="hair-short");let r=new zn(s);for(let l=0;l<3;l++)r.update(.03,{speed:0});r.head.rotation.set(0,0,0),r.eyes&&(r.eyes.scale.y=1),ii.add(r.root);let a=Ad[e.slot]||Ad.top;Ki.position.set(...a.pos),Ki.lookAt(...a.look),ni.render(ii,Ki);let o=ni.domElement.toDataURL("image/png");return ii.remove(r.root),Hs.set(n,o),o}catch(s){return console.warn("miniatura",s),""}}function vc(i){let t="o"+JSON.stringify(i);if(Hs.has(t))return Hs.get(t);try{ni||Rd();let e=new zn(i);for(let s=0;s<3;s++)e.update(.03,{speed:0});e.root.rotation.y=.35,ii.add(e.root),Ki.position.set(.5,1.4,4.6),Ki.lookAt(0,1.05,0),ni.render(ii,Ki);let n=ni.domElement.toDataURL("image/png");return ii.remove(e.root),Hs.set(t,n),n}catch{return""}}var ni,ii,Ki,Hs,Ad,Cd=cn(()=>{ei();Mr();Ya();ni=null,ii=null,Ki=null,Hs=new Map;Ad={hair:{pos:[.5,1.95,2],look:[0,1.72,0]},face:{pos:[.3,1.8,1.7],look:[0,1.7,0]},hat:{pos:[.5,2.05,2.1],look:[0,1.85,0]},mask:{pos:[.3,1.8,1.8],look:[0,1.7,0]},glasses:{pos:[.3,1.82,1.6],look:[0,1.75,0]},top:{pos:[.6,1.4,3],look:[0,1.15,0]},pants:{pos:[.6,.75,2.8],look:[0,.5,0]},backpack:{pos:[-.8,1.4,-2.8],look:[0,1.15,0]},special:{pos:[.9,1.6,3.4],look:[0,1.3,0]}}});async function Pd(){try{let i=await(await fetch("/api/config",{cache:"no-store"})).json();if(!i.adsClient)return;let t=document.createElement("script");t.async=!0,t.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",t.setAttribute("data-ad-client",i.adsClient),i.adsTest&&t.setAttribute("data-adbreak-test","on"),t.setAttribute("data-ad-frequency-hint","120s"),t.crossOrigin="anonymous",t.onerror=()=>{Tr.enabled=!1},document.head.appendChild(t),window.adsbygoogle=window.adsbygoogle||[],window.adBreak=window.adConfig=function(e){window.adsbygoogle.push(e)},window.adConfig({preloadAdBreaks:"on",sound:"on"}),Tr.enabled=!0}catch{}}function Mc(i,t){if(!Tr.enabled)return t();let e=!1,n=()=>{e||(e=!0,t())};setTimeout(n,8e3);try{window.adBreak({type:"next",name:i,beforeAd:Id,afterAd:Dd,adBreakDone:n})}catch{n()}}function Gs(){return Tr.enabled}function Ud({onViewed:i,onFail:t}){if(!Tr.enabled)return t("disabled");let e=!1,n=s=>{e||(e=!0,t(s))};try{window.adBreak({type:"reward",name:"recompensa",beforeAd:Id,afterAd:Dd,beforeReward:s=>s(),adViewed:()=>{e||(e=!0,i())},adDismissed:()=>n("dismissed"),adBreakDone:s=>{e||n(s&&s.breakStatus||"noad")}})}catch{n("error")}}var Tr,Ld,Id,Dd,bc=cn(()=>{Er();Tr={enabled:!1,ready:!1};Ld=null,Id=()=>{_t.ctx&&(Ld=_t.musicOn,_t.stopMusic(),_t.ctx.suspend())},Dd=()=>{_t.ctx&&(_t.ctx.resume(),Ld&&_t.startMusic())}});var Bd={};jd(Bd,{closePanel:()=>Ir,initMeta:()=>Ec,isPanelOpen:()=>Rc,onProfileUpdate:()=>Cc,requestAd:()=>Lr,showLevelUp:()=>ro,showReward:()=>Fd});function Ec(i,t){te=i,so=t.showError,fetch("/api/config").then(s=>s.json()).then(s=>{Nd=s}).catch(()=>{});let e=te.net;e.on("reward",s=>Fd(s.reward)),e.on("info",s=>io(s.msg)),e.on("checkout",s=>{/^https:\/\/checkout\.stripe\.com\//.test(s.url)&&(location.href=s.url)}),e.on("adToken",s=>{let r=Sc.get(s.req);Sc.delete(s.req),Ud({onViewed:()=>e.send({t:"adDone",token:s.token}),onFail:a=>{r&&r.btn&&(r.btn.disabled=!1),so(a==="dismissed"?"Has cerrado el anuncio antes de terminar: no hay recompensa.":"Ahora mismo no hay anuncios disponibles. Int\xE9ntalo m\xE1s tarde.")}})}),kt("mCustom").onclick=()=>Rr("custom"),kt("mShop").onclick=()=>Rr("shop"),kt("mMissions").onclick=()=>Rr("missions"),kt("mRewards").onclick=()=>Rr("rewards"),kt("mProfile").onclick=()=>Rr("profile"),document.querySelectorAll(".panelClose").forEach(s=>s.onclick=Ir),kt("customSave").onclick=G_,kt("customReset").onclick=()=>{He={...te.profile.outfit},Cr(),Ws()},kt("lvlOk").onclick=()=>{kt("levelup").classList.add("hidden")},kt("rewardOk").onclick=()=>{kt("rewardPop").classList.add("hidden")};let n=new URLSearchParams(location.search).get("compra");n==="ok"&&setTimeout(()=>io("Pago recibido: tus monedas llegar\xE1n en unos segundos."),1500),n==="cancelada"&&setTimeout(()=>io("Has cancelado la compra."),1500)}function io(i){let t=document.createElement("div");t.className="lobbyToast",t.textContent=i,document.body.appendChild(t),setTimeout(()=>t.classList.add("out"),2600),setTimeout(()=>t.remove(),3100)}function V_(i){let t=i.unlock;return t.type==="free"?"Gratis":t.type==="level"?`Nivel ${t.level}`:t.type==="coins"?`\u{1FA99} ${t.price}`:t.type==="ads"?`\u{1F4FA} ${te.profile?.ads?.progress?.[i.id]||0}/${t.ads} anuncios`:t.type==="daily"?"\u{1F381} Recompensa diaria":""}function Pr(i){return{skin:i.skin,hairColor:i.hairColor,topColor:i.topColor,pantsColor:i.pantsColor}}function Tc(i,{equipped:t=!1,showAction:e=!0}={}){let n=ji(i.id),s=Ku[i.rarity],r=Vs(i.id,Pr(He||te.profile.outfit)),a="";return e&&!n&&(i.unlock.type==="coins"?a=`<button class="cardBtn buy" data-buy="${i.id}" ${te.profile.coins<i.unlock.price?'data-short="1"':""}>Comprar \u{1FA99} ${i.unlock.price}</button>`:i.unlock.type==="ads"?a=Gs()?`<button class="cardBtn ad" data-ad="${i.id}">\u{1F4FA} Ver anuncio</button>`:'<span class="cardNote">Anuncios a\xFAn no activos</span>':i.unlock.type==="level"?a=`<span class="cardNote">\u{1F512} Se desbloquea en el nivel ${i.unlock.level}</span>`:i.unlock.type==="daily"&&(a='<span class="cardNote">\u{1F381} Llega con la recompensa diaria</span>')),`<div class="iCard ${n?"own":"locked"} ${t?"equipped":""}" data-item="${i.id}" style="--rc:${s.color}">
    <div class="iThumb">${r?`<img src="${r}" alt="">`:""}${n?"":'<span class="lockIc">\u{1F512}</span>'}${t?'<span class="eqIc">\u2714</span>':""}</div>
    <div class="iName">${mn(i.name)}</div>
    <div class="iMeta"><span class="rar" style="color:${s.color}">${i.rarity}</span><span>${n?t?"Equipado":"Desbloqueado":V_(i)}</span></div>
    ${a}
  </div>`}function Ac(i){i.querySelectorAll("[data-buy]").forEach(t=>t.onclick=e=>{if(e.stopPropagation(),t.dataset.short)return so("No tienes monedas suficientes. Cons\xEDguelas jugando, con misiones o en Recompensas.");let n=pn[t.dataset.buy];t.disabled=!0,te.net.send({t:"buy",id:n.id})}),i.querySelectorAll("[data-ad]").forEach(t=>t.onclick=e=>{e.stopPropagation(),Lr("item",t.dataset.ad,t)})}function Lr(i,t=null,e=null){if(!Gs())return so("Los anuncios con recompensa a\xFAn no est\xE1n activados.");let n=Math.random().toString(36).slice(2);Sc.set(n,{btn:e}),e&&(e.disabled=!0),te.net.send({t:"adStart",kind:i,id:t,req:n})}function Rr(i){_t.click(),Ir(!0),an=i,document.body.classList.add("panelOpen"),(i==="custom"||i==="shop")&&(He={...te.profile.outfit},te.lobby.setFocus(i==="shop"?"left":"center")),kt(i+"Panel").classList.remove("hidden"),Od()}function Ir(i){an&&((an==="custom"||an==="shop")&&(He=null,te.lobby.setFocus(!1),te.lobby.setOutfit(te.profile.outfit)),kt(an+"Panel").classList.add("hidden"),document.body.classList.remove("panelOpen"),an=null,i!==!0&&_t.click())}function Rc(){return!!an}function Od(){an==="custom"?Ws():an==="shop"?wc():an==="missions"?X_():an==="rewards"?q_():an==="profile"&&$_()}function Cc(){kt("coinCount").textContent=te.profile.coins.toLocaleString("es-ES");let i=te.profile.missions.list.filter(t=>t.progress>=t.goal&&!t.claimed).length;kt("mMissionsBadge").textContent=i||"",kt("mMissionsBadge").classList.toggle("hidden",!i),kt("mRewardsBadge").classList.toggle("hidden",te.profile.daily.claimedToday),an&&Od()}function Cr(){te.lobby.setOutfit(He)}function Ws(){let i=[{id:"presets",name:"Estilos r\xE1pidos",icon:"\u2B50"},...Os,{id:"colors",name:"Colores",icon:"\u{1F3A8}"}];kt("customTabs").innerHTML=i.map(s=>`<button class="cTab ${Ar===s.id?"active":""}" data-tab="${s.id}"><span>${s.icon}</span>${mn(s.name)}</button>`).join(""),kt("customTabs").querySelectorAll(".cTab").forEach(s=>s.onclick=()=>{Ar=s.dataset.tab,_t.hover(),Ws()});let t=kt("customGrid");if(Ar==="presets")t.innerHTML='<p class="muted">Empieza desde un estilo y luego cambia lo que quieras.</p><div class="iGrid">'+vr.map((s,r)=>`<div class="iCard own preset" data-preset="${r}"><div class="iThumb tall"><img src="${vc(s.outfit)}" alt=""></div><div class="iName">${mn(s.name)}</div></div>`).join("")+"</div>",t.querySelectorAll("[data-preset]").forEach(s=>s.onclick=()=>{He={...vr[+s.dataset.preset].outfit},Cr(),Ws(),_t.click()});else if(Ar==="colors")t.innerHTML=ac.map(s=>`<h4>${mn(s.name)}</h4><div class="swatches">${s.palette.map(r=>`<button class="sw ${He[s.id]===r?"active":""}" data-c="${s.id}" data-v="${r}" style="background:${r}"></button>`).join("")}</div>`).join(""),t.querySelectorAll(".sw").forEach(s=>s.onclick=()=>{He[s.dataset.c]=s.dataset.v,Cr(),Ws()});else{let s=Os.find(o=>o.id===Ar),r=Si.filter(o=>o.slot===s.id).sort((o,l)=>ji(l.id)-ji(o.id)),a=s.required?"":`<div class="iCard own none ${He[s.id]?"":"equipped"}" data-none="1"><div class="iThumb"><span class="noneIc">\u2205</span>${He[s.id]?"":'<span class="eqIc">\u2714</span>'}</div><div class="iName">Sin ${mn(s.name.toLowerCase().split(" ")[0])}</div></div>`;t.innerHTML=`<div class="iGrid">${a}${r.map(o=>Tc(o,{equipped:He[s.id]===o.id})).join("")}</div>`,t.querySelectorAll(".iCard").forEach(o=>o.onclick=()=>{o.dataset.none?He[s.id]=null:o.dataset.item&&(He[s.id]=o.dataset.item),_t.hover(),Cr(),Ws()}),Ac(t)}let e=Os.map(s=>He[s.id]).filter(s=>s&&!ji(s)),n=JSON.stringify(He)!==JSON.stringify(te.profile.outfit);kt("customSave").disabled=!n||e.length>0,kt("customStatus").innerHTML=e.length?`\u{1F512} Est\xE1s probando ${e.length===1?"una pieza bloqueada":e.length+" piezas bloqueadas"}: desbloqu\xE9alas para guardar.`:n?"Tienes cambios sin guardar.":"Esta es tu apariencia actual."}function G_(){te.net.send({t:"setOutfit",outfit:He}),kt("customSave").disabled=!0}function wc(){let i=[["featured","\u2B50 Destacados"],["new","\u{1F195} Novedades"],["popular","\u{1F525} Populares"],["all","\u{1F6CD}\uFE0F Todo"],["ads","\u{1F4FA} Gratis con anuncios"]];Nd.payments&&i.push(["coins","\u{1FA99} Monedas"]),kt("shopTabs").innerHTML=i.map(([r,a])=>`<button class="sTab ${si===r?"active":""}" data-tab="${r}">${a}</button>`).join(""),kt("shopTabs").querySelectorAll(".sTab").forEach(r=>r.onclick=()=>{si=r.dataset.tab,wc()}),kt("shopCoins").textContent=te.profile.coins.toLocaleString("es-ES");let t=kt("shopBody");if(si==="coins"){t.innerHTML='<p class="muted">Compras opcionales con pago seguro de Stripe. Las monedas se a\xF1aden a tu cuenta cuando se confirma el pago.</p><div class="packs">'+ed.map(r=>`<div class="pack"><div class="packIc">\u{1FA99}</div><b>${mn(r.label)}</b>${r.bonus?`<span class="bonus">${r.bonus}</span>`:""}<button class="btn small" data-pack="${r.id}">${(r.price/100).toFixed(2).replace(".",",")} \u20AC</button></div>`).join("")+"</div>",t.querySelectorAll("[data-pack]").forEach(r=>r.onclick=()=>{r.disabled=!0,te.net.send({t:"buyPack",id:r.dataset.pack})});return}let e=Si.filter(r=>r.unlock.type!=="free");si==="featured"?e=e.filter(r=>r.tags.includes("featured")||r.rarity==="legendaria"):si==="new"?e=e.filter(r=>r.tags.includes("new")):si==="popular"?e=e.filter(r=>r.tags.includes("popular")||r.unlock.type==="coins").slice(0,12):si==="ads"&&(e=e.filter(r=>r.unlock.type==="ads"));let n=[{id:"all",name:"Todas"},...Os.filter(r=>!["face"].includes(r.id))],s=si==="all"?`<div class="chips">${n.map(r=>`<button class="chip ${no===r.id?"active":""}" data-slot="${r.id}">${r.icon||""} ${mn(r.name)}</button>`).join("")}</div>`:"";si==="all"&&no!=="all"&&(e=e.filter(r=>r.slot===no)),e.sort((r,a)=>ji(r.id)-ji(a.id)),t.innerHTML=s+`<div class="iGrid">${e.map(r=>Tc(r,{equipped:te.profile.outfit[r.slot]===r.id})).join("")||'<p class="muted">No hay art\xEDculos aqu\xED.</p>'}</div>`,t.querySelectorAll(".chip").forEach(r=>r.onclick=()=>{no=r.dataset.slot,wc()}),t.querySelectorAll(".iCard").forEach(r=>r.onclick=()=>{let a=pn[r.dataset.item];a&&(He={...te.profile.outfit,[a.slot]:a.id},Cr(),_t.hover(),kt("shopPreview").textContent=`Vista previa: ${a.name}`)}),Ac(t)}function W_(){let i=new Date,t=new Date(i.toLocaleString("en-US",{timeZone:"Europe/Madrid"})),e=new Date(t);return e.setHours(24,0,0,0),Math.max(0,(e-t)/1e3)}function X_(){let i=te.profile.missions.list,t=W_();kt("missionsBody").innerHTML=`<p class="muted">Nuevas misiones en <b>${Math.floor(t/3600)} h ${Math.floor(t%3600/60)} min</b>.</p>`+i.map(e=>{let n=e.progress>=e.goal,s=Math.round(Math.min(1,e.progress/e.goal)*100),r=e.stat==="survived"?`${Dn(e.progress)} / ${Dn(e.goal)}`:`${e.progress} / ${e.goal}`;return`<div class="mission ${e.claimed?"claimed":n?"done":""}"><div class="mInfo"><b>${mn(e.text)}</b><div class="mBar"><div style="width:${s}%"></div></div><small>${r}</small></div>
      <div class="mRew">\u{1FA99} ${e.coins}<br>\u2B50 ${e.xp} XP</div>
      ${e.claimed?'<span class="mState">\u2714 Cobrada</span>':`<button class="btn small" data-claim="${e.id}" ${n?"":"disabled"}>${n?"Cobrar":"En curso"}</button>`}</div>`}).join(""),kt("missionsBody").querySelectorAll("[data-claim]").forEach(e=>e.onclick=()=>{e.disabled=!0,te.net.send({t:"claimMission",id:e.dataset.claim})})}function q_(){let i=te.profile.daily,t=Qu.map((r,a)=>{let o=a<i.nextIndex||i.claimedToday&&a===i.nextIndex?"got":a===i.nextIndex&&!i.claimedToday?"today":"",l=r.item?pn[r.item]:null;return`<div class="day ${o}"><small>D\xEDa ${a+1}</small>${l?`<img src="${Vs(l.id,Pr(te.profile.outfit))}" alt="">`:'<div class="dayIc">\u{1FA99}</div>'}<b>${l?mn(l.name):""}</b><span>${r.coins?"\u{1FA99} "+r.coins:""}${r.xp?" \xB7 \u2B50 "+r.xp:""}</span>${o==="got"?"<i>\u2714</i>":""}</div>`}).join(""),e;if(Gs()){let r=Si.filter(a=>a.unlock.type==="ads"&&!kd().includes(a.id));e=`<div class="adRow"><div><b>\u{1FA99} ${td} monedas gratis</b><small>Te quedan ${te.profile.ads.coinsLeft} hoy</small></div><button class="btn small alt" id="adCoins" ${te.profile.ads.coinsLeft?"":"disabled"}>\u{1F4FA} Ver anuncio</button></div><div class="iGrid">${r.map(a=>Tc(a)).join("")||'<p class="muted">\xA1Ya tienes todos los objetos de anuncios!</p>'}</div>`}else e='<p class="muted">Las recompensas por ver anuncios aparecer\xE1n aqu\xED en cuanto se active el proveedor de anuncios del juego. Mientras tanto puedes conseguir monedas jugando, con las misiones y con la recompensa diaria.</p>';kt("rewardsBody").innerHTML=`<h4>Recompensa diaria <small>\xB7 racha de ${i.streak} d\xEDa${i.streak===1?"":"s"}</small></h4><div class="days">${t}</div>
    <div class="dailyBtn">${i.claimedToday?'<span class="muted">\u2714 Ya has recogido la de hoy. Vuelve ma\xF1ana para mantener la racha.</span>':'<button class="btn" id="claimDaily">\u{1F381} Recoger recompensa de hoy</button>'}</div>
    <h4>Recompensas gratis por anuncios <small>\xB7 siempre opcionales, nunca durante una partida</small></h4>${e}`;let n=kt("claimDaily");n&&(n.onclick=()=>{n.disabled=!0,te.net.send({t:"claimDaily"})});let s=kt("adCoins");s&&(s.onclick=()=>Lr("coins",null,s)),Ac(kt("rewardsBody"))}function $_(){let i=te.profile,t=i.matches?Math.round(i.wins/i.matches*100):0,e=(i.kills/Math.max(1,i.deaths)).toFixed(2),n=(r,a)=>`<div class="stat"><b>${r}</b><small>${a}</small></div>`,s=Si.filter(r=>ji(r.id)).length;kt("profileBody").innerHTML=`<div class="profTop"><img src="${vc(i.outfit)}" alt=""><div><h3>${mn(i.name)} <button class="iconBtn" id="profEdit">\u270E</button></h3><div class="plevel"><span class="lvl">NV <b>${i.level}</b></span><div class="xpbar"><div style="width:${Math.round(i.levelXp/i.levelNeed*100)}%"></div></div><small>${i.levelXp}/${i.levelNeed} XP</small></div><p>\u{1FA99} ${i.coins.toLocaleString("es-ES")} monedas \xB7 \u{1F3BD} ${s}/${Si.length} objetos</p></div></div>
  <div class="statsGrid">${n(i.matches,"Partidas")}${n(i.wins,"Victorias")}${n(t+"%","% de victorias")}${n(i.kills,"Eliminaciones")}${n(e,"Bajas por muerte")}${n(i.damage,"Da\xF1o total")}${n(i.top5,"Top 5")}${n(i.bestKills,"R\xE9cord de bajas")}</div>
  <table><tr><th>Modo</th><th>Partidas</th><th>Victorias</th><th>Eliminaciones</th></tr>${Object.entries(Ln).map(([r,a])=>{let o=i.byMode[r]||{matches:0,wins:0,kills:0};return`<tr><td>${a.name}</td><td>${o.matches}</td><td>${o.wins}</td><td>${o.kills}</td></tr>`}).join("")}</table>
  <h4>Pr\xF3ximas recompensas por nivel</h4><div class="nextLv">${Y_(i.level).map(r=>`<div class="nl"><b>Nv ${r.level}</b>${r.items.map(a=>`<img src="${Vs(a,Pr(i.outfit))}" title="${mn(pn[a].name)}">`).join("")}<span>\u{1FA99} ${r.coins}</span></div>`).join("")}</div>`,kt("profEdit").onclick=()=>{kt("nameInput").value=i.name,kt("nameModal").classList.remove("hidden"),kt("nameInput").focus()}}function Y_(i){let t=[];for(let e=i+1;e<=i+12&&t.length<5;e++){let n=Si.filter(s=>s.unlock.type==="level"&&s.unlock.level===e).map(s=>s.id);(n.length||e%5===0)&&t.push({level:e,items:n,coins:50+e*10+(e%5===0?150:0)})}return t}function ro(i){if(!i||!i.length)return;let t=i[i.length-1],e=i.flatMap(r=>r.items),n=i.reduce((r,a)=>r+a.coins,0);kt("lvlNum").textContent=t.level,kt("lvlRewards").innerHTML=e.map(r=>`<div class="lvItem"><img src="${Vs(r,Pr(te.profile.outfit))}" alt=""><b>${mn(pn[r].name)}</b><small>\xA1Desbloqueado!</small></div>`).join("")+`<div class="lvItem coins"><div class="bigCoin">\u{1FA99}</div><b>+${n} monedas</b></div>`;let s=kt("levelup");s.classList.remove("hidden"),s.classList.remove("play"),s.offsetWidth,s.classList.add("play"),_t.victory()}function Fd(i){if(!i)return;if(_t.pickup(),i.levelRewards&&i.levelRewards.length&&setTimeout(()=>ro(i.levelRewards),400),!(i.items&&i.items.length||i.coins||i.xp)){io(i.title);return}kt("rewardTitle").textContent=i.title,kt("rewardItems").innerHTML=(i.items||[]).map(n=>`<div class="lvItem"><img src="${Vs(n,Pr(te.profile.outfit))}" alt=""><b>${mn(pn[n].name)}</b></div>`).join("")+(i.coins?`<div class="lvItem coins"><div class="bigCoin">\u{1FA99}</div><b>+${i.coins}</b></div>`:"")+(i.xp?`<div class="lvItem coins"><div class="bigCoin">\u2B50</div><b>+${i.xp} XP</b></div>`:"");let e=kt("rewardPop");e.classList.remove("hidden"),e.classList.remove("play"),e.offsetWidth,e.classList.add("play")}var kt,mn,te,so,Nd,He,Ar,si,no,an,Sc,H_,kd,ji,Pc=cn(()=>{Ya();Yi();Cd();bc();Er();to();kt=i=>document.getElementById(i),mn=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Nd={payments:!1},He=null,Ar="presets",si="featured",no="all",an=null,Sc=new Map;H_=()=>te.profile?.level||1,kd=()=>te.profile?.owned||[],ji=i=>oc(i,H_(),kd())});ei();var Ga=class{constructor(){this.ws=null,this.handlers={},this.status="offline",this.ping=0,this.retry=0,this.onStatus=()=>{}}on(t,e){this.handlers[t]=e}connect(){let t=location.protocol==="https:"?"wss":"ws",e=location.host||"localhost:3000";this.setStatus("connecting");let n;try{n=new WebSocket(`${t}://${e}`)}catch{return this.scheduleReconnect()}this.ws=n,n.onopen=()=>{this.retry=0,this.setStatus("online"),this.handlers.__open&&this.handlers.__open(),clearInterval(this.pingTimer),this.pingTimer=setInterval(()=>this.send({t:"ping",c:performance.now()}),2e3)},n.onmessage=s=>{let r;try{r=JSON.parse(s.data)}catch{return}if(r.t==="pong"){this.ping=Math.round(performance.now()-r.c),this.onStatus(this.status,this.ping);return}let a=this.handlers[r.t];if(a)try{a(r)}catch(o){console.error("Error procesando",r.t,o)}},n.onclose=()=>{clearInterval(this.pingTimer),this.ws===n&&(this.setStatus("offline"),this.handlers.__close&&this.handlers.__close(),this.scheduleReconnect())},n.onerror=()=>{}}scheduleReconnect(){this.retry++;let t=Math.min(8e3,800*this.retry);setTimeout(()=>this.connect(),t)}setStatus(t){this.status=t,this.onStatus(t,this.ping)}send(t){this.ws&&this.ws.readyState===1&&this.ws.send(JSON.stringify(t))}};ei();$a();Mr();var br=class{constructor(t){this.renderer=t,this.scene=new xi,this.scene.background=new Pt("#8fd3ff"),this.scene.fog=new Cs("#a8ddff",30,90),this.camera=new Pe(40,innerWidth/innerHeight,.1,300),this.t=0,this.rotY=.35,this.rotTarget=.35,this.dragging=!1,this.idleT=0,this.emote=null,this._build(),this.mates=[],this.focus=!1,this.camCur=null,this.setOutfit(null)}_build(){let t=this.scene;t.add(new yi("#e8f6ff","#6aa84f",1.2));let e=new vi("#fff1d6",1.6);e.position.set(6,12,8),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),Object.assign(e.shadow.camera,{left:-8,right:8,top:8,bottom:-8}),t.add(e);let n=new wt(new Ls(200,48),ee("#45b9ea"));n.rotation.x=-Math.PI/2,n.position.y=-1.4,t.add(n);let s=new wt(new Te(7,5.5,2.2,28),ee("#e9d29a"));s.position.y=-1,s.receiveShadow=!0,t.add(s);let r=new wt(new Te(6.6,6.8,.4,28),ee("#8fd16a"));r.position.y=0,r.receiveShadow=!0,t.add(r);let a=new wt(new Te(1.25,1.4,.35,24),ee("#ffffff"));a.position.y=.35,a.receiveShadow=!0,a.castShadow=!0,t.add(a);let o=new wt(new Ds(1.3,.06,8,32),ee("#ffd23f"));o.rotation.x=Math.PI/2,o.position.y=.5,t.add(o),this.pedestal=a;let l=(m,f,v=1)=>{let _=new wt(new Te(.15*v,.22*v,1*v,7),ee("#8b5a2b"));_.position.set(m,.6*v,f),_.castShadow=!0,t.add(_);for(let S=0;S<2;S++){let R=new wt(new ti((1.1-S*.3)*v,1.5*v,8),ee(S?"#3e9b4f":"#358a45"));R.position.set(m,(1.5+S*.8)*v,f),R.castShadow=!0,t.add(R)}};l(-4.2,-2.4,1.3),l(-5,.8,1),l(4.6,-2.8,1.4),l(3.6,-4.4,1),l(-2.6,-4.6,1.1);let c=new wt(new Is(.7,0),new ze({color:"#a8a8a8",flatShading:!0}));c.position.set(3.8,.4,1.6),c.castShadow=!0,t.add(c);let h=new wt(new de(1,1,1),ee("#c98a48"));h.position.set(-3.2,.7,2.2),h.rotation.y=.4,h.castShadow=!0,t.add(h);let u=new ie,d=new wt(new de(3,2.2,2.4),ee("#ffd6a5"));d.position.y=1.3,u.add(d);let p=new wt(new ti(2.4,1.4,4),ee("#d9534f"));p.position.y=3.1,p.rotation.y=Math.PI/4,u.add(p);let g=new wt(new de(.7,1.2,.05),ee("#8b5a2b"));g.position.set(0,.8,1.22),u.add(g),u.position.set(1.2,0,-4.5),u.rotation.y=-.3,u.traverse(m=>{m.isMesh&&(m.castShadow=!0)}),t.add(u),this.clouds=[];for(let m=0;m<9;m++){let f=new ie;for(let v=0;v<4;v++){let _=new wt(new We(1+Math.random(),10,8),ee("#ffffff"));_.position.set(v*1.3,Math.random()*.6,Math.random()),f.add(_)}f.position.set(-40+Math.random()*80,10+Math.random()*8,-30-Math.random()*30),f.userData.speed=.3+Math.random()*.5,t.add(f),this.clouds.push(f)}let x=new wt(new We(1.2,16,12),ee("#ff5a5f"));x.position.set(-9,9,-14),t.add(x),this.balloon=x}setOutfit(t){let e=JSON.stringify(t);this.char&&this._key===e||(this._key=e,this.char?this.char.setOutfit(t):(this.char=new zn(t),this.char.setWeapon("ar"),this.char.root.position.y=.52,this.scene.add(this.char.root)),this.char.root.traverse(n=>{n.isMesh&&!n.material.transparent&&(n.castShadow=!0)}),this.char.pickup(),this.emote={t:0,kind:Math.random()<.5?"wave":"spin"})}setFocus(t){this.focus=t;for(let e of this.mates)e.root.visible=!t}setMates(t){for(let n of this.mates)this.scene.remove(n.root);this.mates=[];let e=[[-2.2,.6],[2.2,.6],[-3.6,1.6]];t.slice(0,3).forEach((n,s)=>{let r=new zn(n);r.setWeapon(["smg","shotgun","sniper"][s]),r.root.position.set(e[s][0],.2,e[s][1]),r.root.rotation.y=e[s][0]<0?.35:-.35,r.root.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),this.scene.add(r.root),this.mates.push(r)})}drag(t){this.rotTarget+=t*.012,this.idleT=0}update(t){this.t+=t,this.idleT+=t,!this.dragging&&this.idleT>4&&(this.rotTarget+=t*.25),this.rotY+=(this.rotTarget-this.rotY)*Math.min(1,t*8);let e=this.char;if(e.root.rotation.y=this.rotY,this.emote?(this.emote.t+=t,this.emote.t>2.2&&(this.emote=null)):Math.random()<t*.12&&(this.emote={t:0,kind:Math.random()<.5?"wave":"look"}),e.victory=!1,e.update(t,{speed:0}),this.emote&&this.emote.kind==="wave"){let a=Math.sin(Math.min(1,this.emote.t/.3)*Math.PI/2)*(this.emote.t>1.8?Math.max(0,1-(this.emote.t-1.8)/.4):1);e.armL.rotation.set(-.2+a*2.9,0,-.3-Math.sin(this.t*12)*.35*a),e.gun&&(e.gun.visible=!0)}else if(this.emote&&this.emote.kind==="look")e.head.rotation.y=Math.sin(this.emote.t*2.5)*.6;else if(this.emote&&this.emote.kind==="spin"){let a=Math.min(1,this.emote.t/.8);e.root.rotation.y=this.rotY+(1-Math.cos(a*Math.PI))*Math.PI,e.root.position.y=.52+Math.sin(a*Math.PI)*.25,a>=1&&(e.root.position.y=.52)}for(let a of this.mates)a.update(t,{speed:0});for(let a of this.clouds)a.position.x+=a.userData.speed*t,a.position.x>45&&(a.position.x=-45);this.balloon.position.y=9+Math.sin(this.t*.8)*.5;let n=Math.sin(this.t*.25)*.3,s=this.focus==="center"?{p:[0,1.75,6.2],l:[0,1.15,0]}:this.focus==="left"?{p:[1.9,1.8,5.6],l:[1.9,1.25,0]}:{p:[n,2.7,8.8],l:[0,1.35,0]};this.camCur||(this.camCur={p:[...s.p],l:[...s.l]});let r=Math.min(1,t*5);for(let a=0;a<3;a++)this.camCur.p[a]+=(s.p[a]-this.camCur.p[a])*r,this.camCur.l[a]+=(s.l[a]-this.camCur.l[a])*r;this.camera.position.set(...this.camCur.p),this.camera.lookAt(...this.camCur.l)}resize(){this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix()}render(){this.renderer.render(this.scene,this.camera)}};ei();function Sr(i){let t=i>>>0,e=()=>{t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return{next:e,range:(n,s)=>n+(s-n)*e(),int:(n,s)=>Math.floor(n+(s-n+1)*e()),pick:n=>n[Math.floor(e()*n.length)],chance:n=>e()<n}}function id(i){let t=Math.ceil((i.size+8)/8)+1,e=4,n=new Array(t*t);for(let a=0;a<n.length;a++)n[a]=[];let s=(a,o,l,c,h)=>{let u=Math.max(0,Math.floor((o+e)/8)),d=Math.max(0,Math.floor((l+e)/8)),p=Math.min(t-1,Math.floor((c+e)/8)),g=Math.min(t-1,Math.floor((h+e)/8));for(let x=d;x<=g;x++)for(let m=u;m<=p;m++)n[x*t+m].push(a)},r=0;for(let a of i.walls){let o={t:"box",x:a.x,y:a.y,w:a.w,h:a.h,id:r++,ref:a};s(o,a.x,a.y,a.x+a.w,a.y+a.h)}for(let a of i.circles){let o={t:"circle",x:a.x,y:a.y,r:a.r,id:r++,ref:a};s(o,a.x-a.r,a.y-a.r,a.x+a.r,a.y+a.r)}for(let a of i.crates){let o={t:"box",x:a.x,y:a.y,w:a.w,h:a.h,id:r++,ref:a,crate:a};s(o,a.x,a.y,a.x+a.w,a.y+a.h)}i._col={grid:n,n:t,off:e,stamp:0,marks:new Int32Array(r+1)}}function sd(i,t,e,n,s,r=[]){let a=i._col;r.length=0,a.stamp++;let o=Math.max(0,Math.floor((t+a.off)/8)),l=Math.max(0,Math.floor((e+a.off)/8)),c=Math.min(a.n-1,Math.floor((n+a.off)/8)),h=Math.min(a.n-1,Math.floor((s+a.off)/8));for(let u=l;u<=h;u++)for(let d=o;d<=c;d++)for(let p of a.grid[u*a.n+d])a.marks[p.id]!==a.stamp&&(a.marks[p.id]=a.stamp,!(p.crate&&!p.crate.alive)&&r.push(p));return r}var rd=[];function P_(i,t,e){let n=!1;for(let s=0;s<3;s++){let r=sd(i,t.x-e,t.y-e,t.x+e,t.y+e,rd),a=!1;for(let o of r)if(o.t==="box"){let l=Math.max(o.x,Math.min(t.x,o.x+o.w)),c=Math.max(o.y,Math.min(t.y,o.y+o.h)),h=t.x-l,u=t.y-c,d=h*h+u*u;if(d<e*e){if(d>1e-9){let p=Math.sqrt(d);t.x=l+h/p*e,t.y=c+u/p*e}else{let p=t.x-o.x,g=o.x+o.w-t.x,x=t.y-o.y,m=o.y+o.h-t.y,f=Math.min(p,g,x,m);f===p?t.x=o.x-e:f===g?t.x=o.x+o.w+e:f===x?t.y=o.y-e:t.y=o.y+o.h+e}n=a=!0}}else{let l=t.x-o.x,c=t.y-o.y,h=o.r+e,u=l*l+c*c;if(u<h*h){let d=Math.sqrt(u)||1e-4;t.x=o.x+l/d*h,t.y=o.y+c/d*h,n=a=!0}}if(!a)break}return n}function ad(i,t,e,n,s){let r=Math.hypot(e,n),a=Math.max(1,Math.ceil(r/(s*.8))),o=!1;for(let l=0;l<a;l++)t.x+=e/a,t.y+=n/a,P_(i,t,s)&&(o=!0);return o}function od(i,t,e,n){let s=sd(i,t-n,e-n,t+n,e+n,rd);for(let r of s)if(r.t==="box"){let a=Math.max(r.x,Math.min(t,r.x+r.w)),o=Math.max(r.y,Math.min(e,r.y+r.h));if((t-a)**2+(e-o)**2<n*n)return!0}else if((t-r.x)**2+(e-r.y)**2<(r.r+n)**2)return!0;return!1}function L_(i,t,e,n,s){let r=0,a=1;if(Math.abs(e)<1e-9){if(i<s.x||i>s.x+s.w)return 1/0}else{let o=(s.x-i)/e,l=(s.x+s.w-i)/e;if(o>l&&([o,l]=[l,o]),r=Math.max(r,o),a=Math.min(a,l),r>a)return 1/0}if(Math.abs(n)<1e-9){if(t<s.y||t>s.y+s.h)return 1/0}else{let o=(s.y-t)/n,l=(s.y+s.h-t)/n;if(o>l&&([o,l]=[l,o]),r=Math.max(r,o),a=Math.min(a,l),r>a)return 1/0}return r}function I_(i,t,e,n,s,r,a){let o=i-s,l=t-r,c=e*e+n*n;if(c<1e-12)return 1/0;let h=2*(o*e+l*n),u=o*o+l*l-a*a;if(u<=0)return 0;let d=h*h-4*c*u;if(d<0)return 1/0;let p=Math.sqrt(d),g=(-h-p)/(2*c);return g>=0&&g<=1?g:1/0}function Fs(i,t,e,n,s,r=!1){let a=i._col,o=n-t,l=s-e;a.stamp++;let c=1/0,h=null,u=Math.floor((t+a.off)/8),d=Math.floor((e+a.off)/8),p=Math.floor((n+a.off)/8),g=Math.floor((s+a.off)/8),x=o>0?1:-1,m=l>0?1:-1,f=o!==0?Math.abs(8/o):1/0,v=l!==0?Math.abs(8/l):1/0,_=t+a.off,S=e+a.off,R=o!==0?(o>0?(u+1)*8-_:_-u*8)/Math.abs(o):1/0,T=l!==0?(l>0?(d+1)*8-S:S-d*8)/Math.abs(l):1/0,b=0;for(;b++<400;){if(u>=0&&d>=0&&u<a.n&&d<a.n)for(let y of a.grid[d*a.n+u]){if(a.marks[y.id]===a.stamp||(a.marks[y.id]=a.stamp,y.crate&&(!y.crate.alive||r)))continue;let M=y.t==="box"?L_(t,e,o,l,y):I_(t,e,o,l,y.x,y.y,y.r);M<c&&(c=M,h=y)}let C=Math.min(R,T);if(c<=C||C>1||u===p&&d===g)break;R<T?(R+=f,u+=x):(T+=v,d+=m)}return c<=1?{t:c,obj:h}:null}Yi();var D_=20261124,U_=["#f6e7c8","#ffd6a5","#cde7f0","#f7c6c7","#e2f0cb","#fff1b5","#d9d2f5"],N_=["#d9534f","#3f7fbf","#e07b39","#6b8e23","#8e5b9e","#c0392b","#2c8c8c"];function gd(i=D_){let t=Sr(i),e=ld,n={size:e,seed:i,walls:[],circles:[],buildings:[],roads:[],crates:[],lootSpots:[],bushes:[],areas:[],pois:[],props:[],fences:[]},s=[],r=(b,C,y,M,D=0)=>{for(let k of s)if(b-D<k.x+k.w&&b+y+D>k.x&&C-D<k.y+k.h&&C+M+D>k.y)return!0;return!1},a=(b,C,y,M)=>s.push({x:b,y:C,w:y,h:M}),o=(b,C,y=1)=>n.roads.some(M=>b>M.x-y&&b<M.x+M.w+y&&C>M.y-y&&C<M.y+M.h+y),l=(b,C,y,M)=>{n.roads.push({x:b,y:C,w:y,h:M})};l(8,156,e-16,8),l(156,8,8,e-16),l(20,74,126,6),l(20,110,126,6),l(74,20,6,136),l(110,20,6,136),l(164,236,140,6),l(232,164,6,140),l(100,164,6,80);for(let b of n.roads)a(b.x,b.y,b.w,b.h);n.areas.push({x:16,y:16,w:134,h:134,color:"#cfe3a8",name:"town"}),n.areas.push({x:186,y:186,w:122,h:122,color:"#b9bec4",name:"industrial"}),n.areas.push({x:112,y:214,w:74,h:92,color:"#c9c2b0",name:"warehouses"}),n.areas.push({x:16,y:186,w:82,h:120,color:"#d9c48f",name:"farm"}),n.areas.push({x:186,y:14,w:122,h:136,color:"#7fbf6a",name:"forest"}),n.areas.push({x:140,y:140,w:40,h:40,color:"#d0d0c8",name:"station"});function c(b,C,y,M,D={}){let k=D.t??.5,j=D.height??3.4,I=D.doors??["s"],O=D.doorWidth??2.6,q=D.wallColor??t.pick(U_),J=D.roofColor??t.pick(N_),Z={x:b,y:C,w:y,h:M,height:j,wallColor:q,roofColor:J,kind:D.kind??"house",roof:D.roof??"gable",doors:I,windows:D.windows??!0};n.buildings.push(Z);let $=(lt,X,K,ot)=>n.walls.push({x:lt,y:X,w:K,h:ot,height:j,color:q,kind:"wall",building:n.buildings.length-1}),Q=lt=>{let X=I.includes(lt);if(lt==="n"||lt==="s"){let K=lt==="n"?C:C+M-k;if(!X)$(b,K,y,k);else{let ot=b+y/2;$(b,K,ot-O/2-b,k),$(ot+O/2,K,b+y-(ot+O/2),k)}}else{let K=lt==="w"?b:b+y-k;if(!X)$(K,C+k,k,M-2*k);else{let ot=C+M/2;$(K,C+k,k,ot-O/2-(C+k)),$(K,ot+O/2,k,C+M-k-(ot+O/2))}}};["n","s","w","e"].forEach(Q),a(b-1,C-1,y+2,M+2);let it=D.loot??Math.max(1,Math.floor(y*M/60));for(let lt=0;lt<it;lt++)n.lootSpots.push({x:t.range(b+1.6,b+y-1.6),y:t.range(C+1.6,C+M-1.6),tier:D.tier??1});return Z}n.pois.push({name:"Villa Colores",x:80,y:80});let h=[24,82,118],u=[24,82,118],d=[[24,24],[44,24],[82,24],[118,24],[24,44],[44,44],[82,44],[118,44],[24,82],[44,82],[118,82],[24,118],[44,118],[82,118],[118,118],[82,82]];for(let[b,C]of d){if(b===82&&C===82)continue;let y=t.int(12,15),M=t.int(10,13),D=[t.pick(["s","n"]),t.pick(["e","w"])];r(b,C,y,M,.5)||c(b,C,y,M,{doors:D,loot:2})}n.circles.push({x:92,y:92,r:2.6,height:1.2,kind:"fountain"}),a(88,88,8,8),c(82,98,22,10,{doors:["n","s"],height:5.2,kind:"hall",wallColor:"#f3e3c3",roofColor:"#b03a2e",loot:3,tier:2}),n.pois.push({name:"Bosque Pinar",x:246,y:80});let p=[[205,40],[262,30],[240,110],[282,92]];for(let[b,C]of p)c(b,C,10,8,{doors:[t.pick(["s","w","e"])],wallColor:"#a9744f",roofColor:"#5b3a24",kind:"cabin",loot:2});c(222,72,7,7,{doors:["s"],height:7.5,wallColor:"#8a6240",roofColor:"#4a2f1d",kind:"tower",loot:2,tier:3,roof:"flat"}),n.pois.push({name:"Pol\xEDgono \xD3xido",x:256,y:270}),c(246,250,34,22,{doors:["n","w","s"],height:7,wallColor:"#9aa5ad",roofColor:"#56616b",kind:"factory",roof:"flat",loot:5,tier:2,doorWidth:3.4});let g=["#d64545","#2f7ed8","#e6a23c","#3aa76d","#8e44ad","#16a085"];for(let b=0;b<16;b++)for(let C=0;C<30;C++){let y=t.chance(.5),M=y?2.6:6.5,D=y?6.5:2.6,k=t.range(192,300-M),j=t.range(192,300-D);if(r(k,j,M,D,3)||o(k+M/2,j+D/2,4))continue;let I=t.chance(.35);n.walls.push({x:k,y:j,w:M,h:D,height:I?5.2:2.6,color:t.pick(g),kind:"container"}),a(k,j,M,D),t.chance(.5)&&n.lootSpots.push({x:k+M/2+(y?2.2:0),y:j+D/2+(y?0:2.2),tier:2});break}let x=[[205,215],[215,290],[290,215]];for(let[b,C]of x)n.circles.push({x:b,y:C,r:4,height:7,kind:"tank"}),a(b-4.5,C-4.5,9,9);n.pois.push({name:"Los Almacenes",x:148,y:262}),c(116,220,28,16,{doors:["e","w","n"],height:6,wallColor:"#c8b28a",roofColor:"#7d6a4e",kind:"warehouse",roof:"flat",loot:5,tier:2,doorWidth:3.6}),c(152,248,28,16,{doors:["e","w","s"],height:6,wallColor:"#b7c4c9",roofColor:"#5f7680",kind:"warehouse",roof:"flat",loot:5,tier:2,doorWidth:3.6}),c(118,278,24,14,{doors:["n","e"],height:6,wallColor:"#d8c3a5",roofColor:"#8c6f4d",kind:"warehouse",roof:"flat",loot:4,tier:2,doorWidth:3.6});for(let b=0;b<10;b++)for(let C=0;C<30;C++){let y=t.range(114,182),M=t.range(214,300);if(!(r(y,M,2.4,2.4,2)||o(y,M,2))){n.walls.push({x:y,y:M,w:2.4,h:2.4,height:1.3,color:"#b98b52",kind:"pallet"}),a(y,M,2.4,2.4);break}}n.pois.push({name:"Granja Girasol",x:56,y:246}),c(28,196,18,14,{doors:["s","e"],height:5.5,wallColor:"#c0392b",roofColor:"#7b241c",kind:"barn",loot:3,tier:1,doorWidth:3.2}),c(64,266,9,8,{doors:["n"],wallColor:"#f0e0c0",roofColor:"#6d4c41",kind:"shed",loot:1}),c(30,278,9,8,{doors:["e"],wallColor:"#e8d4b0",roofColor:"#6d4c41",kind:"shed",loot:1}),c(70,206,12,10,{doors:["w"],loot:2});let m=(b,C,y,M,D=[])=>{let k=C===M,j=k?y-b:M-C,I=0,O=[],q=D.slice().sort((J,Z)=>J-Z);for(let J of q)O.push([I,J-1.6]),I=J+1.6;O.push([I,j]);for(let[J,Z]of O){if(Z-J<.5)continue;let $=k?{x:b+J,y:C-.15,w:Z-J,h:.3}:{x:b-.15,y:C+J,w:.3,h:Z-J};n.walls.push({...$,height:1.1,color:"#e9dcc0",kind:"fence"})}};m(22,226,92,226,[20,52]),m(22,262,58,262,[18]),m(22,226,22,262,[18]),m(92,226,92,300,[14,50]);for(let b=0;b<9;b++){let C=t.range(28,88),y=t.range(230,258);r(C-1.4,y-1.4,2.8,2.8,1.5)||(n.circles.push({x:C,y,r:1.3,height:1.6,kind:"hay"}),a(C-1.4,y-1.4,2.8,2.8))}n.pois.push({name:"Gasolinera Cruce",x:172,y:172}),c(168,168,12,9,{doors:["n","w"],wallColor:"#ffffff",roofColor:"#e74c3c",kind:"shop",roof:"flat",loot:3,tier:2});for(let[b,C]of[[146,168],[146,176],[156,168]]);n.props.push({kind:"canopy",x:166,y:142,w:14,h:10});for(let[b,C]of[[167,143],[179,143],[167,151],[179,151]])n.circles.push({x:b,y:C,r:.35,height:4,kind:"pillar"});a(166,142,14,10),n.walls.push({x:171,y:145.5,w:1.2,h:2,height:1.6,color:"#e74c3c",kind:"pump"}),n.walls.push({x:175,y:145.5,w:1.2,h:2,height:1.6,color:"#e74c3c",kind:"pump"}),n.pois.push({name:"Colina Molino",x:206,y:186});let f=[[196,168,10,8],[130,190,9,8],[176,120,10,8],[42,166,9,8],[262,172,10,8],[172,200,8,8],[120,168,8,7]];for(let[b,C,y,M]of f)r(b,C,y,M,1)||c(b,C,y,M,{doors:[t.pick(["n","s","e","w"])],loot:2,kind:"hut"});let v=[[140,60],[60,150],[290,150],[150,292],[210,140],[130,130]];for(let[b,C]of v)r(b-3,C-3,10,10,1)||(n.walls.push({x:b,y:C,w:6,h:.8,height:1.8,color:"#a3a3a3",kind:"ruin"}),n.walls.push({x:b,y:C+.8,w:.8,h:4,height:1.8,color:"#a3a3a3",kind:"ruin"}),a(b-.5,C-.5,7,6),n.lootSpots.push({x:b+3,y:C+3,tier:1}));let _=0,S=(b,C)=>r(b-.2,C-.2,2,2,.8)||o(b+.8,C+.8,.5)?!1:(n.crates.push({id:_++,x:b,y:C,w:1.6,h:1.6,hp:70,alive:!0}),a(b,C,1.6,1.6),!0);for(let b of n.buildings)if(t.chance(.55))for(let C=0;C<10;C++){let y=t.int(0,3),M=y===0?b.x-2.6:y===1?b.x+b.w+1:t.range(b.x,b.x+b.w-1.6),D=y===2?b.y-2.6:y===3?b.y+b.h+1:t.range(b.y,b.y+b.h-1.6);if(S(M,D))break}for(let b=0;b<40;b++)for(let C=0;C<20&&!S(t.range(14,e-16),t.range(14,e-16));C++);let R=(b,C,y)=>{if(r(b-1,C-1,2,2,.8)||o(b,C,2))return!1;let M=t.range(.85,1.35);return n.circles.push({x:b,y:C,r:.55*M,height:6,kind:y,scale:M,crown:2.2*M}),a(b-.8,C-.8,1.6,1.6),!0};for(let b=0;b<230;b++)R(t.range(188,306),t.range(16,148),"pine");for(let b=0;b<160;b++)R(t.range(10,e-10),t.range(10,e-10),t.chance(.5)?"tree":"pine");for(let b=0;b<70;b++){let C=t.range(12,e-12),y=t.range(12,e-12),M=t.range(.9,2.1);r(C-M,y-M,2*M,2*M,1.2)||o(C,y,M+1)||(n.circles.push({x:C,y,r:M,height:M*1.2,kind:"rock"}),a(C-M,y-M,2*M,2*M))}for(let b=0;b<220;b++){let C=t.range(10,e-10),y=t.range(10,e-10);r(C-.8,y-.8,1.6,1.6,.3)||o(C,y,1)||n.bushes.push({x:C,y,s:t.range(.7,1.4)})}for(let b=0;b<45;b++)for(let C=0;C<20;C++){let y=t.range(14,e-14),M=t.range(14,e-14);if(!r(y-.6,M-.6,1.2,1.2,.5)){n.lootSpots.push({x:y,y:M,tier:0});break}}let T=3;return n.walls.push({x:-T,y:-T,w:e+2*T,h:T,height:3,kind:"boundary"}),n.walls.push({x:-T,y:e,w:e+2*T,h:T,height:3,kind:"boundary"}),n.walls.push({x:-T,y:0,w:T,h:e,height:3,kind:"boundary"}),n.walls.push({x:e,y:0,w:T,h:e,height:3,kind:"boundary"}),id(n),n.lootSpots=n.lootSpots.filter(b=>!od(n,b.x,b.y,.5)),n}function xd(i,t,e){for(let n=0;n<i.buildings.length;n++){let s=i.buildings[n];if(t>s.x&&t<s.x+s.w&&e>s.y&&e<s.y+s.h)return n}return-1}Yi();function gc(i,t,e,n,s={}){let r=Number(t.mx)||0,a=Number(t.my)||0,o=Math.hypot(r,a);o>1&&(r/=o,a/=o);let l=t.b|0,c=hd;s.healing?c=fd:l&qe.ADS?c=dd:l&qe.SPRINT&&(c=ud),o>.01&&ad(e,i,r*c*n,a*c*n,cd);let h=(l&qe.JUMP)!==0;return h&&!i.jh&&i.z<=.001&&(i.vz=pd),i.jh=h,(i.z>0||i.vz>0)&&(i.vz-=md*n,i.z+=i.vz*n,i.z<=0&&(i.z=0,i.vz=0)),o>.01}qa();Yi();cc();ei();$a();var _c=class{constructor(){this.pos=[],this.nor=[],this.col=[],this.m=new ge,this.q=new kn,this.c=new Pt}add(t,e,n,s,r,a=0,o=1,l=1,c=1,h=0,u=0){let d=t.index?t.toNonIndexed():t.clone();this.q.setFromEuler(new As(h,a,u)),this.m.compose(new L(e,n,s),this.q,new L(o,l,c)),d.applyMatrix4(this.m);let p=d.attributes.position.array,g=d.attributes.normal.array;this.c.set(r);for(let x=0;x<p.length;x+=3)this.pos.push(p[x],p[x+1],p[x+2]),this.nor.push(g[x],g[x+1],g[x+2]),this.col.push(this.c.r,this.c.g,this.c.b);d.dispose()}box(t,e,n,s,r,a,o,l=0){this.add(Ji,t,e,n,o,l,s,r,a)}build(t){let e=new Ge;return e.setAttribute("position",new jt(this.pos,3)),e.setAttribute("normal",new jt(this.nor,3)),e.setAttribute("color",new jt(this.col,3)),e.computeBoundingSphere(),new wt(e,t)}},Ji=new de(1,1,1),Hn=new Te(1,1,1,14);function Zi(i,t){let e=new Pt(i);return e.multiplyScalar(t),"#"+e.getHexString()}var Za={uFocus:{value:new L},uCam:{value:new L}};function xc(i){return i.onBeforeCompile=t=>{t.uniforms.uFocus=Za.uFocus,t.uniforms.uCam=Za.uCam,t.vertexShader=`varying vec3 vCutPos;
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
      }`)},i.customProgramCacheKey=()=>"cutout",i}var Ja=class{constructor(t,e,n){this.scene=t,this.map=e,this.q=n,this.group=new ie,t.add(this.group),this.roofs=[],this.crateMeshes=new Map,this.lootMeshes=new Map,this.time=0,this._lights(),this._ground(),this._static(),this._trees(),this._crates(),this._zone()}_lights(){let t=new yi("#dff3ff","#7da35a",1.15);this.group.add(t);let e=new vi("#fff3d6",1.75);if(e.position.set(40,80,25),e.castShadow=this.q.shadows,this.q.shadows){e.shadow.mapSize.set(this.q.shadowSize,this.q.shadowSize);let n=38;Object.assign(e.shadow.camera,{left:-n,right:n,top:n,bottom:-n,near:1,far:220}),e.shadow.bias=-8e-4,e.shadow.normalBias=.04}this.sun=e,this.group.add(e),this.group.add(e.target),this.scene.fog=new Cs("#bfe6ff",this.q.fog*.55,this.q.fog),this.scene.background=new Pt("#9fd8ff")}_ground(){let t=this.map.size,e=new wt(new zi(2400,2400),new ze({color:"#3fb6e8"}));e.rotation.x=-Math.PI/2,e.position.set(t/2,-.6,t/2),this.group.add(e),this.water=e;let n=new wt(new de(t+44,1,t+44),ee("#f0d9a0"));n.position.set(t/2,-.52,t/2),n.receiveShadow=!0,this.group.add(n);let s=new wt(new de(t+10,1,t+10),ee("#8fd16a"));s.position.set(t/2,-.5,t/2),s.receiveShadow=!0,this.group.add(s);let r=new wt(new Gi((t+44)*.7,(t+44)*.72,4,1),new Ce({color:"#ffffff",transparent:!0,opacity:.5}));r.rotation.x=-Math.PI/2,r.rotation.z=Math.PI/4,r.position.set(t/2,-.55,t/2),this.group.add(r)}_static(){let t=this.map,e=new _c,n=Sr(777);for(let o of t.areas)e.box(o.x+o.w/2,.005,o.y+o.h/2,o.w,.02,o.h,o.color);for(let o of t.roads){e.box(o.x+o.w/2,.03,o.y+o.h/2,o.w,.04,o.h,"#5d636b");let l=o.w>o.h,c=l?o.w:o.h;for(let h=2;h<c-2;h+=6)l?e.box(o.x+h+1.5,.06,o.y+o.h/2,3,.02,.25,"#f5f1d6"):e.box(o.x+o.w/2,.06,o.y+h+1.5,.25,.02,3,"#f5f1d6");l?(e.box(o.x+o.w/2,.08,o.y-.15,o.w,.14,.3,"#d8d8d0"),e.box(o.x+o.w/2,.08,o.y+o.h+.15,o.w,.14,.3,"#d8d8d0")):(e.box(o.x-.15,.08,o.y+o.h/2,.3,.14,o.h,"#d8d8d0"),e.box(o.x+o.w+.15,.08,o.y+o.h/2,.3,.14,o.h,"#d8d8d0"))}for(let o of t.buildings){let l=o.kind==="warehouse"||o.kind==="factory"?"#a7a39a":o.kind==="barn"||o.kind==="cabin"?"#b5835a":"#d9b48a";e.box(o.x+o.w/2,.06,o.y+o.h/2,o.w-.1,.08,o.h-.1,l)}for(let o of t.walls){if(o.kind==="boundary")continue;let l=o.x+o.w/2,c=o.y+o.h/2,h=o.color||"#cccccc";if(o.kind==="fence"){e.box(l,.55,c,o.w,.12,o.h,h),e.box(l,.95,c,o.w,.12,o.h,h);let u=o.w>o.h,d=u?o.w:o.h;for(let p=0;p<=d;p+=2)e.box(u?o.x+p:l,.6,u?c:o.y+p,.18,1.2,.18,Zi(h,.85));continue}if(e.box(l,o.height/2,c,o.w,o.height,o.h,h),o.kind==="wall"){e.box(l,.25,c,o.w+.06,.5,o.h+.06,Zi(h,.78));let u=o.w>o.h,d=u?o.w:o.h;if(d>3.5&&o.height<6){let p=Math.floor(d/4.5);for(let g=0;g<p;g++){let x=(g+.5)*(d/p),m=u?o.x+x:l,f=u?c:o.y+x;e.box(m,1.8,f,u?1.3:o.w+.08,1,u?o.h+.08:1.3,"#ffffff"),e.box(m,1.8,f,u?1.05:o.w+.1,.8,u?o.h+.1:1.05,"#6cc3ff")}}else d>4&&o.height>=6&&e.box(l,o.height-.5,c,o.w+.08,.35,o.h+.08,Zi(h,.7))}else if(o.kind==="container"){let u=o.w>o.h,d=u?o.w:o.h;for(let p=.4;p<d;p+=.6)e.box(u?o.x+p:l,o.height/2,u?c:o.y+p,u?.12:o.w+.08,o.height-.1,u?o.h+.08:.12,Zi(h,.82));o.height>3&&e.box(l,2.6,c,o.w+.1,.1,o.h+.1,Zi(h,.6))}else o.kind==="pallet"?(e.box(l,.62,c,o.w+.05,.08,o.h+.05,"#d9a866"),e.box(l,1.3,c,o.w*.8,.12,o.h*.8,"#4d9be6")):o.kind==="pump"&&e.box(l,1.65,c,o.w+.1,.15,o.h+.1,"#ffffff")}for(let o of t.circles)switch(o.kind){case"tank":e.add(Hn,o.x,o.height/2,o.y,"#e8ecef",0,o.r,o.height,o.r),e.add(Hn,o.x,o.height*.65,o.y,"#e07b39",0,o.r+.05,.6,o.r+.05),e.add(Hn,o.x,o.height+.2,o.y,"#b9c0c5",0,o.r*.9,.4,o.r*.9);break;case"fountain":e.add(Hn,o.x,.5,o.y,"#c9c3b5",0,o.r,1,o.r),e.add(Hn,o.x,1.02,o.y,"#5cc8f0",0,o.r-.3,.06,o.r-.3),e.add(Hn,o.x,1.6,o.y,"#c9c3b5",0,.35,1.6,.35),e.add(Hn,o.x,2.3,o.y,"#5cc8f0",0,.8,.12,.8);break;case"hay":e.add(Hn,o.x,o.r,o.y,"#f2cf5b",n.range(0,3),o.r,o.r*1.6,o.r,Math.PI/2);break;case"pillar":e.add(Hn,o.x,o.height/2,o.y,"#dddddd",0,o.r,o.height,o.r);break}for(let o of t.props)o.kind==="canopy"&&(e.box(o.x+o.w/2,4.1,o.y+o.h/2,o.w+1,.4,o.h+1,"#ffffff"),e.box(o.x+o.w/2,3.85,o.y+o.h/2,o.w+1.05,.15,o.h+1.05,"#e74c3c"));let s=t.size;for(let o=0;o<=s;o+=4)for(let[l,c]of[[o,-.8],[o,s+.8],[-.8,o],[s+.8,o]])e.box(l,.7,c,.3,1.4,.3,"#8b5a2b");for(let[o,l,c,h]of[[s/2,-.8,s,.08],[s/2,s+.8,s,.08],[-.8,s/2,.08,s],[s+.8,s/2,.08,s]])e.box(o,1.1,l,c,.08,h,"#f2e6c9");let r=xc(new ze({vertexColors:!0})),a=e.build(r);a.castShadow=this.q.shadows,a.receiveShadow=!0,this.group.add(a),this.map.buildings.forEach((o,l)=>{let c=new ie,h=o.roofColor,u=.45;if(o.roof==="flat"){let d=new wt(Ji,ee(h));d.scale.set(o.w+u,.35,o.h+u),d.position.set(0,.17,0),c.add(d);let p=new wt(Ji,ee(Zi(h,.75)));if(p.scale.set(o.w+u+.1,.12,o.h+u+.1),p.position.y=.38,c.add(p),o.kind==="factory"||o.kind==="warehouse")for(let g=0;g<3;g++){let x=new wt(Ji,ee("#cfd6db"));x.scale.set(1.4,.6,1.4),x.position.set((g-1)*o.w*.28,.6,0),c.add(x)}}else{let d=o.w>=o.h,p=(d?o.w:o.h)+u,g=(d?o.h:o.w)+u,x=Math.min(2.2,g*.32),m=Math.hypot(g/2,x),f=Math.atan2(x,g/2);for(let S of[-1,1]){let R=new wt(Ji,ee(S<0?h:Zi(h,.85)));R.scale.set(d?p:m,.22,d?m:p),d?(R.rotation.x=S*f,R.position.set(0,x/2,-S*g/4)):(R.rotation.z=S*f,R.position.set(-S*g/4,x/2,0)),c.add(R)}let v=new pr;v.moveTo(-g/2+u/2,0),v.lineTo(g/2-u/2,0),v.lineTo(0,x-.1),v.lineTo(-g/2+u/2,0);let _=new ka(v);for(let S of[-1,1]){let R=new wt(_,new ze({color:"#"+new Pt(this.map.buildings[l].wallColor).getHexString(),side:Fe}));d?(R.rotation.y=Math.PI/2,R.position.set(S*(o.w/2-.25),0,0)):R.position.set(0,0,S*(o.h/2-.25)),c.add(R)}if(o.kind==="house"&&n.chance(.6)){let S=new wt(Ji,ee("#9c6b5a"));S.scale.set(.7,1.6,.7),S.position.set(d?p*.25:g*.15,x*.7,d?g*.15:p*.25),c.add(S)}}c.position.set(o.x+o.w/2,o.height,o.y+o.h/2),c.traverse(d=>{d.isMesh&&(d.castShadow=this.q.shadows,d.receiveShadow=!1,d.material=d.material.clone(),d.material.transparent=!1)}),c.userData.alpha=1,this.group.add(c),this.roofs.push(c)})}_trees(){let t=this.map,e=t.circles.filter(f=>f.kind==="pine"||f.kind==="tree"),n=t.circles.filter(f=>f.kind==="rock"),s=new Le,r=new Pt,a=Sr(99),o=new Te(.22,.32,1,7);o.translate(0,.5,0);let l=new ti(1,1,8);l.translate(0,.5,0);let c=new _r(1,1),h=e.filter(f=>f.kind==="pine"),u=e.filter(f=>f.kind==="tree"),d=new Cn(o,new ze({color:"#8b5a2b"}),e.length);e.forEach((f,v)=>{let _=f.scale||1;s.position.set(f.x,0,f.y),s.rotation.set(0,0,0),s.scale.set(_,f.kind==="pine"?1.6*_:2*_,_),s.updateMatrix(),d.setMatrixAt(v,s.matrix)});let p=new Cn(l,xc(new ze({color:"#ffffff"})),h.length*2);h.forEach((f,v)=>{let _=f.scale||1;r.setHSL(.31+a.range(-.03,.03),.55,.32+a.range(-.05,.05));for(let S=0;S<2;S++){s.position.set(f.x,(1.3+S*1.5)*_,f.y),s.rotation.set(0,a.range(0,3),0);let R=(2-S*.6)*_;s.scale.set(R,(2.6-S*.4)*_,R),s.updateMatrix(),p.setMatrixAt(v*2+S,s.matrix),p.setColorAt(v*2+S,r)}});let g=new Cn(c,xc(new ze({color:"#ffffff",flatShading:!0})),u.length);u.forEach((f,v)=>{let _=f.scale||1;r.setHSL(.26+a.range(-.04,.05),.55,.42+a.range(-.06,.05)),s.position.set(f.x,3*_,f.y),s.rotation.set(a.range(0,3),a.range(0,3),0),s.scale.set(1.9*_,1.7*_,1.9*_),s.updateMatrix(),g.setMatrixAt(v,s.matrix),g.setColorAt(v,r)});let x=new Is(1,0),m=new Cn(x,new ze({color:"#ffffff",flatShading:!0}),Math.max(1,n.length));n.forEach((f,v)=>{r.setHSL(.08,.06,.55+a.range(-.08,.08)),s.position.set(f.x,f.r*.35,f.y),s.rotation.set(a.range(0,1),a.range(0,3),a.range(0,1)),s.scale.set(f.r*1.05,f.r*.85,f.r*1.05),s.updateMatrix(),m.setMatrixAt(v,s.matrix),m.setColorAt(v,r)});for(let f of[d,p,g,m])f.castShadow=this.q.shadows,f.receiveShadow=!0,this.group.add(f);if(this.canopies=[p,g],this.q.bushes){let f=t.bushes,v=new Cn(new _r(1,1),new ze({color:"#ffffff",flatShading:!0}),Math.max(1,f.length));f.forEach((R,T)=>{r.setHSL(.28+a.range(-.04,.04),.6,.38+a.range(-.05,.06)),s.position.set(R.x,.35*R.s,R.y),s.rotation.set(0,a.range(0,3),0),s.scale.set(R.s,R.s*.75,R.s),s.updateMatrix(),v.setMatrixAt(T,s.matrix),v.setColorAt(T,r)}),v.receiveShadow=!0,this.group.add(v);let _=new Cn(new We(.12,5,4),new Ce({color:"#ffffff"}),260),S=["#ff6b9a","#ffd23f","#ffffff","#c77dff","#ff8f3f"];for(let R=0;R<260;R++)s.position.set(a.range(10,t.size-10),.12,a.range(10,t.size-10)),s.scale.setScalar(1),s.rotation.set(0,0,0),s.updateMatrix(),_.setMatrixAt(R,s.matrix),_.setColorAt(R,r.set(S[R%S.length]));this.group.add(_)}}_crates(){let t=Ju(),e=new ze({map:t}),n=new de(1.6,1.6,1.6);for(let s of this.map.crates){let r=new wt(n,e);r.position.set(s.x+s.w/2,.8,s.y+s.h/2),r.castShadow=this.q.shadows,r.receiveShadow=!0,r.userData.wobble=0,this.group.add(r),this.crateMeshes.set(s.id,r)}}_zone(){let t=new Rn({transparent:!0,depthWrite:!1,side:Fe,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec2 vUv; uniform float uTime;
        void main(){
          float stripes = smoothstep(0.4, 0.6, fract(vUv.x * 160.0 + vUv.y * 6.0 - uTime * 0.6));
          float fade = (1.0 - vUv.y);
          vec3 col = mix(vec3(0.42,0.25,0.95), vec3(0.85,0.45,1.0), stripes);
          gl_FragColor = vec4(col, (0.1 + 0.16 * stripes) * fade + 0.04);
        }`});this.zoneWall=new wt(new Te(1,1,1,128,1,!0),t),this.zoneWall.renderOrder=5,this.group.add(this.zoneWall);let e=new wt(new Gi(.985,1,128),new Ce({color:"#ffffff",transparent:!0,opacity:.85,depthWrite:!1}));e.rotation.x=-Math.PI/2,e.position.y=.15,e.renderOrder=4,this.nextRing=e,this.group.add(e)}setZone(t){this.zoneWall.scale.set(Math.max(.1,t.r),45,Math.max(.1,t.r)),this.zoneWall.position.set(t.cx,45/2-1,t.cy),this.zoneWall.visible=t.ph>=0,this.nextRing.visible=t.ph>=0&&t.st!=="done";let n=Math.max(.5,t.tr);this.nextRing.scale.set(n,n,1),this.nextRing.position.set(t.tx,.15,t.ty)}addLoot(t){if(this.lootMeshes.has(t.id))return;let e=Zu(t);e.position.set(t.x,0,t.y),e.userData.item=t,this.group.add(e),this.lootMeshes.set(t.id,e)}removeLoot(t){let e=this.lootMeshes.get(t);e&&(this.group.remove(e),this.lootMeshes.delete(t))}crateHit(t){let e=this.crateMeshes.get(t);e&&(e.userData.wobble=1)}crateBreak(t){let e=this.crateMeshes.get(t);e&&(this.group.remove(e),this.crateMeshes.delete(t));let n=this.map.crates.find(s=>s.id===t);n&&(n.alive=!1)}update(t,e,n,s){this.time+=t,this.zoneWall.material.uniforms.uTime.value=this.time,e&&s&&(Za.uFocus.value.set(e.x,1.3,e.z),Za.uCam.value.copy(s.position)),e&&(this.sun.position.set(e.x+30,70,e.z+18),this.sun.target.position.set(e.x,0,e.z)),this.roofs.forEach((r,a)=>{let o=a===n?0:1;r.userData.alpha+=(o-r.userData.alpha)*Math.min(1,t*10);let l=r.userData.alpha;r.visible=l>.03,(Math.abs(r.userData.lastA-l)>.001||r.userData.lastA===void 0)&&(r.userData.lastA=l,r.traverse(c=>{c.isMesh&&(c.material.opacity=l,c.material.transparent=l<.99)}))});for(let r of this.lootMeshes.values()){let a=r.userData.inner;a.rotation.y+=t*1.4,a.position.y=.55+Math.sin(this.time*2.5+r.userData.phase)*.12}for(let r of this.crateMeshes.values())if(r.userData.wobble>0){r.userData.wobble=Math.max(0,r.userData.wobble-t*5);let a=r.userData.wobble;r.scale.set(1+a*.08,1-a*.08,1+a*.08),r.rotation.y=Math.sin(this.time*60)*a*.06}}dispose(){this.scene.remove(this.group),this.group.traverse(t=>{t.geometry&&t.geometry!==Ji&&t.geometry!==Hn&&t.geometry.dispose?.()}),this.scene.fog=null}};ei();var _d=700,k_=160,Ka=class{constructor(t,e){this.scene=t,this.map=e,this.pGeo=new de(1,1,1),this.pMesh=new Cn(this.pGeo,new Ce({color:"#ffffff"}),_d),this.pMesh.instanceMatrix.setUsage(Nu),this.pMesh.frustumCulled=!1,this.pMesh.count=0,this.pMesh.setColorAt(0,new Pt),t.add(this.pMesh),this.parts=[],this.tMat=new Ce({color:"#fff3a0",transparent:!0,opacity:.95,blending:rr,depthWrite:!1}),this.tGeo=new de(.07,.07,1),this.tGeo.translate(0,0,-.5),this.tracers=[],this.tPool=[],this.fMat=new Ce({color:"#ffd76a",transparent:!0,blending:rr,depthWrite:!1}),this.fGeo=new Na(.28,0),this.flashes=[],this.dummy=new Le,this.col=new Pt}spawn(t,e,n,s,r){for(let a=0;a<s&&this.parts.length<_d;a++){let o=Math.random()*Math.PI*2,l=(r.speed||4)*(.4+Math.random()*.8),c=(r.up??3)*(.5+Math.random()),h=r.dir,u=Math.cos(o)*l,d=Math.sin(o)*l;h&&(u=u*.5+h.x*l,d=d*.5+h.y*l);let p=Array.isArray(r.color)?r.color[Math.floor(Math.random()*r.color.length)]:r.color;this.parts.push({x:t,y:e,z:n,vx:u,vy:c,vz:d,life:(r.life||.6)*(.6+Math.random()*.6),max:0,size:(r.size||.12)*(.6+Math.random()*.8),color:new Pt(p),g:r.gravity??14,spin:Math.random()*10}),this.parts[this.parts.length-1].max=this.parts[this.parts.length-1].life}}tracer(t,e,n,s,r,a=1.25,o="#fff3a0"){let l=Math.cos(n),c=Math.sin(n),h=s,u=Fs(this.map,t,e,t+l*s,e+c*s);u&&(h=s*u.t);let d=this.tPool.pop();d||(d=new wt(this.tGeo,this.tMat.clone())),d.material.color.set(o),d.visible=!0,d.rotation.set(0,Math.atan2(l,c),0),this.scene.add(d),this.tracers.push({m:d,x:t,y:e,dx:l,dy:c,d:0,len:h,speed:r,h:a,hit:!!u}),this.tracers.length>k_&&this._endTracer(this.tracers.shift())}_endTracer(t){this.scene.remove(t.m),this.tPool.push(t.m)}muzzle(t,e,n,s){let r=new wt(this.fGeo,this.fMat);r.position.set(t,n,e),r.rotation.set(Math.random(),Math.random(),Math.random()),r.scale.setScalar(1+Math.random()*.5),this.scene.add(r),this.flashes.push({m:r,life:.06}),this.spawn(t,n,e,3,{color:["#ffd76a","#ffffff"],speed:3,up:1,life:.15,size:.07,gravity:0,dir:{x:Math.cos(s),y:Math.sin(s)}})}impactWall(t,e,n=1.2){this.spawn(t,n,e,6,{color:["#d9d2c5","#a8a196","#fff2a8"],speed:3,up:3,life:.45,size:.09})}impactPlayer(t,e){this.spawn(t,1.2,e,10,{color:["#ff4d5a","#ffb020","#ffffff"],speed:4.5,up:4,life:.45,size:.13})}crateHit(t,e){this.spawn(t,1,e,6,{color:["#c98a48","#8b5a2b"],speed:3,up:3,life:.5,size:.12})}crateBreak(t,e){this.spawn(t,.8,e,34,{color:["#c98a48","#8b5a2b","#e0b070"],speed:6,up:6,life:1.1,size:.22})}death(t,e,n){this.spawn(t,1,e,30,{color:[n,"#ffffff","#ffd23f"],speed:5,up:6,life:1,size:.18})}heal(t,e){this.spawn(t,.5,e,14,{color:["#7dff9a","#ffffff"],speed:1.5,up:4,life:.9,size:.1,gravity:-2})}confetti(t,e){this.spawn(t,3,e,120,{color:["#ff5a5f","#ffd23f","#3fa9f5","#5ad67d","#c77dff","#ffffff"],speed:7,up:9,life:3,size:.18,gravity:6})}pickup(t,e){this.spawn(t,.6,e,8,{color:["#ffffff","#fff3a0"],speed:2,up:3,life:.4,size:.08,gravity:2})}update(t){for(let n=this.tracers.length-1;n>=0;n--){let s=this.tracers[n];s.d+=s.speed*t;let r=Math.min(s.d,s.len),a=Math.max(0,r-3.2);s.m.position.set(s.x+s.dx*r,s.h,s.y+s.dy*r),s.m.scale.set(1,1,Math.max(.05,r-a)),s.d>=s.len&&(s.hit&&this.impactWall(s.x+s.dx*s.len,s.y+s.dy*s.len,s.h),this._endTracer(s),this.tracers.splice(n,1))}for(let n=this.flashes.length-1;n>=0;n--){let s=this.flashes[n];s.life-=t,s.life<=0&&(this.scene.remove(s.m),this.flashes.splice(n,1))}let e=0;for(let n=this.parts.length-1;n>=0;n--){let s=this.parts[n];if(s.life-=t,s.life<=0){this.parts[n]=this.parts[this.parts.length-1],this.parts.pop();continue}s.vy-=s.g*t,s.x+=s.vx*t,s.y+=s.vy*t,s.z+=s.vz*t,s.y<.05&&(s.y=.05,s.vy*=-.3,s.vx*=.6,s.vz*=.6),s.spin+=t*8}for(let n of this.parts){let s=Math.min(1,n.life/(n.max*.5));this.dummy.position.set(n.x,n.y,n.z),this.dummy.rotation.set(n.spin,n.spin*.7,0),this.dummy.scale.setScalar(n.size*s),this.dummy.updateMatrix(),this.pMesh.setMatrixAt(e,this.dummy.matrix),this.pMesh.setColorAt(e,n.color),e++}this.pMesh.count=e,this.pMesh.instanceMatrix.needsUpdate=!0,this.pMesh.instanceColor&&(this.pMesh.instanceColor.needsUpdate=!0)}dispose(){this.scene.remove(this.pMesh);for(let t of this.tracers)this.scene.remove(t.m);for(let t of this.flashes)this.scene.remove(t.m)}};Mr();to();Er();wr();var F_=110,B_=.12,z_=1.4,wd=.44,zs=i=>document.getElementById(i),eo=class{constructor(t,e){this.app=t,this.net=t.net,this.renderer=t.renderer,this.quality=Vn[ut.quality]||Vn.medium,this.mode=e.mode,this.localId=e.you,this.scene=new xi,this.camera=new Pe(ut.fov,innerWidth/innerHeight,.3,600),this.map=gd(e.seed);for(let n of e.crates){let s=this.map.crates.find(r=>r.id===n);s&&(s.alive=!1)}this.world=new Ja(this.scene,this.map,this.quality);for(let n of e.crates)this.world.crateBreak(n);this.effects=new Ka(this.scene,this.map),this.hud=new Qa(this.map),this.loot=new Map;for(let n of e.loot)this.loot.set(n.id,n),this.world.addLoot(n);this.zone=e.zone,this.world.setZone(this.zone),this.players=new Map;for(let n of e.players)this._addPlayer(n);this.me=this.players.get(this.localId),this.myTeam=this.me.team,this.hud.setRoster(this.players,this.localId,this.mode),this.pred={x:0,y:0,z:0,vz:0,jh:!1},this.predPrev={x:0,y:0,z:0},this.predInit=!1,this.pending=[],this.seq=0,this.corr={x:0,y:0},this.acc=0,this.inv={hp:fc,sl:0,w:[["pistol",12],null],am:{light:24,medium:0,shells:0,heavy:0},he:{bandage:1,medkit:0},rl:0,hl:null,k:0},this.localCd=0,this.localMag=null,this.prevFire=!1,this.yaw=-Math.PI/2,this.pitch=.72,this.zoom=1,this.yawT=this.yaw,this.pitchT=this.pitch,this.camDist=null,this.camPos=new L,this.camLook=new L,this.camInit=!1,this.shake=0,this.keys=new Set,this.mouse={left:!1,right:!1,x:innerWidth/2,y:innerHeight/2},this.aimAngle=0,this.paused=!1,this.state=e.countdown>0?"countdown":"playing",this.countdownEnd=performance.now()+e.countdown*1e3,this.lastCountdown=-1,this.matchTime=-e.countdown,this.aliveCount=e.players.length,this.teamsAlive=0,this.spectateId=null,this.ended=!1,this.resultShown=!1,this.stepT=0,this.revealed=new Map,this.losCache=new Map,this.lastZoneTick=0,this.lowAmmoWarned=!1,this._bind(),this.onResize(),_t.stopMusic(),this.hud.announce("\xA1Prep\xE1rate!","big",1.5),zs("spectate").classList.add("hidden")}_addPlayer(t){let e=t.id===this.localId,n=Sd(t.team),s=new zn(t.outfit||t.char,{ringColor:e?"#ffffff":null});s.victoryStyle=Math.floor(Math.random()*3),s.setWeapon("pistol"),this.scene.add(s.root);let r={...t,color:n,model:s,buf:[],x:0,y:0,z:0,a:0,hp:fc,alive:!0,flags:1,w:0,kills:0,rx:0,ry:0,stepT:0,lastX:null,speed:0,inited:!1};return this.players.set(t.id,r),e&&this._addSilhouette(s,"#8fe3ff"),r}_addSilhouette(t,e="#7fd6ff"){let n=new Ce({color:e,depthFunc:Wl,depthWrite:!1}),s=[];t.root.traverse(r=>{r.isMesh&&!r.userData.sil&&r!==t.ring&&s.push(r)});for(let r of s){r.renderOrder=2;let a=new wt(r.geometry,n);a.userData.sil=!0,a.renderOrder=1,r.add(a)}t.silMat=n}_bind(){let t=this.renderer.domElement;this.h={keydown:e=>{if((e.code==="Tab"||e.code==="Space"||e.code.startsWith("Arrow"))&&e.preventDefault(),e.repeat){e.code===ut.keys.scoreboard&&e.preventDefault();return}if(e.code==="Escape"){this.togglePause();return}if(this.paused)return;this.keys.add(e.code);let n=ut.keys;if(this.isDead()){(e.code==="Space"||e.code===n.interact)&&this.cycleSpectate();return}e.code===n.reload?this.action("reload"):e.code===n.interact?this.action("pickup"):e.code===n.slot1?this.action("slot",0):e.code===n.slot2?this.action("slot",1):e.code===n.bandage?this.action("heal","bandage"):e.code===n.medkit?this.action("heal","medkit"):e.code===n.drop&&this.action("drop")},keyup:e=>{this.keys.delete(e.code)},mousedown:e=>{if(!(this.paused||e.target!==t)){if(_t.init(),this.camMode==="follow"&&document.pointerLockElement!==t){this.lockPointer();return}e.button===0&&(this.mouse.left=!0,this.fireLatch=!0),e.button===2&&(this.mouse.right=!0)}},mouseup:e=>{e.button===0&&(this.mouse.left=!1),e.button===2&&(this.mouse.right=!1)},mousemove:e=>{if(this.mouse.x=e.clientX,this.mouse.y=e.clientY,document.pointerLockElement===t&&!this.paused){let n=Math.max(-250,Math.min(250,e.movementX)),s=Math.max(-250,Math.min(250,e.movementY)),r=.0022*ut.sensitivity;this.yawT+=n*r,this.pitchT=Math.max(B_,Math.min(z_,this.pitchT+s*r*.75*(ut.invertY?-1:1)))}},wheel:e=>{if(!this.paused&&!e.ctrlKey){if(e.shiftKey){this.zoom=Math.max(.7,Math.min(1.5,this.zoom+Math.sign(e.deltaY)*.08));return}!this.isDead()&&Math.abs(e.deltaY)>2&&this.action("slot",this.inv.sl===0?1:0)}},contextmenu:e=>e.preventDefault(),blur:()=>{this.keys.clear(),this.mouse.left=this.mouse.right=!1},plc:()=>{this.camMode==="follow"&&document.pointerLockElement!==t&&!this.paused&&!this.ended&&!this.resultShown&&this.togglePause(!0)},resize:()=>this.onResize()},window.addEventListener("keydown",this.h.keydown),window.addEventListener("keyup",this.h.keyup),window.addEventListener("mousedown",this.h.mousedown),window.addEventListener("mouseup",this.h.mouseup),window.addEventListener("mousemove",this.h.mousemove),window.addEventListener("wheel",this.h.wheel,{passive:!0}),window.addEventListener("contextmenu",this.h.contextmenu),window.addEventListener("blur",this.h.blur),window.addEventListener("resize",this.h.resize),document.addEventListener("pointerlockchange",this.h.plc),t.classList.toggle("cursorMode",this.camMode==="cursor")}get camMode(){return this.lockFailed?"cursor":ut.cameraMode}lockPointer(){if(this.camMode!=="follow")return;let t=this.renderer.domElement,e=()=>{this.lockFails=(this.lockFails||0)+1,this.lockFails>=2&&!this.lockFailed&&(this.lockFailed=!0,t.classList.add("cursorMode"),this.hud.toast("No se pudo capturar el rat\xF3n: se usa la vista con cursor"))};try{let n=t.requestPointerLock();n&&n.catch&&n.catch(e)}catch{e()}}togglePause(t){if(this.resultShown)return;let e=t===void 0?!this.paused:t;this.paused=e,this.keys.clear(),this.mouse.left=this.mouse.right=!1,zs("pause").classList.toggle("hidden",!e),e?document.pointerLockElement&&document.exitPointerLock():this.camMode==="follow"&&this.lockPointer()}action(t,e){this.state!=="playing"||this.isDead()||(this.net.send({t:"a",a:t,v:e}),t==="slot"&&(this.localCd=Math.max(this.localCd,.25),this.inv.sl=e,this.localMag=null))}isDead(){return!this.me.alive}onResize(){this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.hud.resize()}onSnapshot(t){let e=performance.now();this.matchTime=t.tm,this.aliveCount=t.al,this.teamsAlive=t.at;for(let n of t.p){let[s,r,a,o,l,c,h,u]=n,d=this.players.get(s);if(!d)continue;d.buf.push({t:e,x:r,y:a,z:o,a:l,hp:c,flags:h,w:u}),d.buf.length>30&&d.buf.shift(),d.inited||(d.x=d.rx=r,d.y=d.ry=a,d.inited=!0),d.hp=c,d.flags=h,d.w=u;let p=(h&1)!==0;d.alive&&!p?(d.alive=!1,d.model.die()):!d.alive&&p&&(d.alive=!0,d.model.revive())}t.z&&(this.zone=t.z,this.world.setZone(this.zone)),t.me&&this._reconcile(t.me);for(let n of t.ev||[])this._event(n)}_reconcile(t){let e=this.inv;if(this.inv=t,t.w[t.sl]&&(this.localMag===null||t.w[t.sl][1]!==this.localMag)&&(this.localMag===null||t.w[t.sl][1]>this.localMag||this.pending.length===0||t.rl>0)&&(this.localMag=t.w[t.sl][1]),!this.predInit)Object.assign(this.pred,{x:t.x,y:t.y,z:t.z,vz:t.vz}),Object.assign(this.predPrev,{x:t.x,y:t.y,z:t.z}),this.predInit=!0;else{let n=this.pred.x,s=this.pred.y;this.pending=this.pending.filter(o=>o.s>t.ack);let r={x:t.x,y:t.y,z:t.z,vz:t.vz,jh:this.lastAckJump(t.ack)};for(let o of this.pending)gc(r,o,this.map,$i,{healing:!!t.hl});Math.hypot(r.x-n,r.y-s)>4?(this.corr.x=0,this.corr.y=0):(this.corr.x+=n-r.x,this.corr.y+=s-r.y),Object.assign(this.pred,r)}this.hud.updateMe(t),e&&t.hp<e.hp&&this.hud.setLowHp(t.hp),t.hp>(e?.hp??0)&&this.hud.setLowHp(t.hp)}lastAckJump(t){let e=this.sentHistory?.get(t);return e?(e&qe.JUMP)!==0:!1}_event(t){let e=n=>this.players.get(n);switch(t.t){case"go":this.state="playing",this.hud.announce("\xA1A LUCHAR!","big go",1.4),_t.countdown(!0);break;case"shot":{let n=e(t.p);if(!n)break;let s=Xe[t.w];if(n.model.shoot(s.recoil+.4),n.model.setWeapon(t.w),t.p===this.localId)break;for(let r of t.as)this.effects.tracer(t.x,t.y,r,s.range,s.speed*.9,1.25,s.id==="sniper"?"#e2b8ff":"#fff3a0");if(this.effects.muzzle(t.x+Math.cos(t.as[0])*.4,t.y+Math.sin(t.as[0])*.4,1.25,t.as[0]),_t.gunshot(t.w,t.x,t.y),n.team!==this.myTeam&&this.me.alive&&Math.hypot(t.x-this.pred.x,t.y-this.pred.y)<50){this.revealed.set(t.p,performance.now()+3e3);let a=this.project(t.x,1,t.y);(!a||a.x<40||a.y<40||a.x>innerWidth-40||a.y>innerHeight-40)&&this.hud.addIndicator(this.screenAngleTo(t.x,t.y),"shot")}break}case"hit":{let n=e(t.p);if(this.effects.impactPlayer(t.x,t.y),t.p===this.localId){_t.hurt(),this.hud.damageFlash(t.d),this.shake=Math.min(.6,this.shake+t.d/60);let s=e(t.by);s?this.hud.addIndicator(this.screenAngleTo(s.rx,s.ry),"damage"):this.hud.addIndicator(this.screenAngleTo(this.zone.cx,this.zone.cy)+Math.PI,"damage")}else t.by===this.localId?(_t.hitMarker(),this.hud.hitmarker(!1),this.hud.floatText(t.x,t.y,2.2,String(t.d),t.d>=40?"#ffd23f":"#ffffff",t.d>=40)):_t.impact(t.x,t.y);n&&(n.lastHit=performance.now());break}case"kill":{let n=e(t.v),s=e(t.k);n&&(this.effects.death(n.rx,n.ry,n.color),n.alive=!1,n.model.die());let r=t.v===this.localId||t.k===this.localId;this.hud.killfeed(s?{name:s.name,color:s.color}:null,{name:n?.name||"?",color:n?.color||"#fff"},t.w,r),s&&(s.kills=(s.kills||0)+(s.team!==n?.team?1:0)),t.k===this.localId&&t.v!==this.localId&&(_t.elimination(),this.hud.hitmarker(!0),this.hud.announce(`<small>ELIMINASTE A</small>${Td(n?.name||"")}`,"kill",2)),t.v===this.localId?this._onLocalDeath(s):n&&n.team===this.myTeam&&this.hud.toast(`${n.name} ha ca\xEDdo`),this.spectateId===t.v&&setTimeout(()=>this.pickSpectate(t.k),1800);break}case"teamout":t.team!==this.myTeam&&this.mode!=="solo"&&this.hud.toast(`Equipo eliminado \xB7 quedan ${Math.max(1,t.place-1)} equipos`);break;case"pk":{let n=e(t.p);if(n&&n.model.pickup(),t.p===this.localId){_t.pickup(),this.effects.pickup(this.pred.x,this.pred.y);let s=t.k==="weapon"?Xe[t.ty].name:t.k==="ammo"?qi[t.ty].name:Xa[t.ty].name;this.hud.toast(`+ ${s}`),t.k==="weapon"&&(this.localMag=null)}break}case"rl":{let n=e(t.p);t.p===this.localId?_t.reload(t.w):n&&_t.reload(t.w,n.rx,n.ry);break}case"dry":t.p===this.localId&&(_t.dry(),this.hud.toast("Sin munici\xF3n"));break;case"heal":t.p===this.localId&&_t.heal();break;case"healed":{let n=e(t.p);n&&this.effects.heal(n.rx,n.ry),t.p===this.localId&&this.hud.floatText(this.pred.x,this.pred.y,2.4,"+"+t.hp+" \u2665","#7dff9a");break}case"sw":t.p===this.localId&&(this.localMag=null);break;case"la":this.loot.set(t.it.id,t.it),this.world.addLoot(t.it);break;case"lr":this.loot.delete(t.id),this.world.removeLoot(t.id);break;case"lu":{let n=this.loot.get(t.id);n&&(n.n=t.amount);break}case"ch":this.world.crateHit(t.id),this.effects.crateHit(t.x,t.y),_t.crate(t.x,t.y,!1);break;case"cb":{let n=this.map.crates.find(s=>s.id===t.id);this.world.crateBreak(t.id),n&&(this.effects.crateBreak(n.x+.8,n.y+.8),_t.crate(n.x,n.y,!0));break}case"zone":t.s==="new"?(this.hud.announce(t.ph===0?"La zona segura ha aparecido":"Nueva zona segura marcada","zone",2.6),_t.zoneAlarm()):t.s==="shrink"&&(this.hud.announce("\xA1La zona se est\xE1 cerrando!","zone",2.6),_t.zoneAlarm());break}}_onLocalDeath(t){this.hud.prompt(null),zs("progress").classList.add("hidden"),document.pointerLockElement&&document.exitPointerLock();let e=[...this.players.values()].filter(n=>n.team===this.myTeam&&n.alive&&n.id!==this.localId);e.length?(this.hud.announce("Has ca\xEDdo. Tu equipo sigue luchando","dead",3),setTimeout(()=>this.pickSpectate(e[0].id),1500)):setTimeout(()=>this.pickSpectate(t?t.id:null),2500)}pickSpectate(t){if(!this.isDead())return;let e=t?this.players.get(t):null;if(!e||!e.alive){let s=[...this.players.values()].filter(r=>r.alive);e=s.find(r=>r.team===this.myTeam)||s[0]||null}this.spectateId=e?e.id:null;let n=zs("spectate");e&&(n.classList.remove("hidden"),zs("spectateName").textContent=e.name)}cycleSpectate(){let t=[...this.players.values()].filter(s=>s.alive);if(!t.length)return;let e=t.findIndex(s=>s.id===this.spectateId),n=t[(e+1)%t.length];this.pickSpectate(n.id)}fixedStep(){if(!this.predInit)return;let t=this.state==="playing"&&!this.paused&&this.me.alive&&!this.ended,e=ut.keys,n=0,s=0;t&&(this.keys.has(e.forward)&&(s+=1),this.keys.has(e.back)&&(s-=1),this.keys.has(e.right)&&(n+=1),this.keys.has(e.left)&&(n-=1));let r=this.camMode==="follow"?this.yaw:-Math.PI/2,a=Math.cos(r),o=Math.sin(r),l=-o,c=a,h=a*s+l*n,u=o*s+c*n,d=Math.hypot(h,u);if(d>1&&(h/=d,u/=d),this.camMode==="follow")this.aimAngle=this._followAim();else{let m=this.screenToGround(this.mouse.x,this.mouse.y,1.25);m&&(this.aimAngle=Math.atan2(m.y-this.pred.y,m.x-this.pred.x))}let p=0,g=this.camMode==="cursor"||document.pointerLockElement===this.renderer.domElement;t&&g&&((this.mouse.left||this.fireLatch)&&(p|=qe.FIRE),this.fireLatch=!1,this.mouse.right&&(p|=qe.ADS),(this.keys.has(e.sprint)||this.keys.has("ShiftRight"))&&(p|=qe.SPRINT),this.keys.has(e.jump)&&(p|=qe.JUMP)),this.fireLatch=!1;let x=Math.atan2(Math.sin(this.aimAngle),Math.cos(this.aimAngle));if(this.buttons=p,this.me.alive&&!this.ended){let m={t:"i",s:++this.seq,mx:Math.round(h*1e3)/1e3,my:Math.round(u*1e3)/1e3,b:p,a:Math.round(x*1e3)/1e3};this.net.send(m),this.sentHistory||(this.sentHistory=new Map),this.sentHistory.set(m.s,p),this.sentHistory.size>120&&this.sentHistory.delete(m.s-120),this.state==="playing"?(this.pending.push(m),this.pending.length>90&&this.pending.shift(),Object.assign(this.predPrev,{x:this.pred.x,y:this.pred.y,z:this.pred.z}),this.moving=gc(this.pred,m,this.map,$i,{healing:!!this.inv.hl}),this.predSprint=this.moving&&p&qe.SPRINT&&!(p&qe.ADS)):Object.assign(this.predPrev,{x:this.pred.x,y:this.pred.y,z:this.pred.z})}this._localFire(p)}_followAim(){let t=this.screenToGround(innerWidth*.5,innerHeight*wd,1.25),e=this.pred.x,n=this.pred.y;if(t){let s=t.x-e,r=t.y-n,a=Math.hypot(s,r),o=s*Math.cos(this.yaw)+r*Math.sin(this.yaw);if(a>1.5&&o>.5)return this._aimDist=a,Math.atan2(r,s)}return this._aimDist=40,this.yaw}_localFire(t){this.localCd=Math.max(0,this.localCd-$i);let e=(t&qe.FIRE)!==0,n=this.inv.w[this.inv.sl];if(e&&n&&this.state==="playing"&&this.me.alive){let s=Xe[n[0]],r=s.auto||!this.prevFire;if(this.localMag===null&&(this.localMag=n[1]),r&&this.localCd<=0&&!this.inv.hl&&(this.inv.rl<=0||s.id==="shotgun"&&this.localMag>0))if(this.localMag>0){this.localMag--,this.localCd=s.interval;let a=s.spread;t&qe.ADS&&(a*=jl),this.pred.z>.05?a*=ec:this.predSprint?a*=tc:this.moving&&(a*=Ql);let o=this.pred.x+Math.cos(this.aimAngle)*.75,l=this.pred.y+Math.sin(this.aimAngle)*.75;for(let c=0;c<s.pellets;c++){let h=this.aimAngle+(Math.random()+Math.random()-1)*a;this.effects.tracer(o,l,h,s.range,s.speed*.9,1.25+this.pred.z,s.id==="sniper"?"#e2b8ff":"#fff3a0")}this.effects.muzzle(o+Math.cos(this.aimAngle)*.3,l+Math.sin(this.aimAngle)*.3,1.25+this.pred.z,this.aimAngle),_t.gunshot(s.id),this.me.model.shoot(s.recoil+.4),this.shake=Math.min(.5,this.shake+s.recoil*.35),this.localMag===0&&this.inv.am[s.ammo]===0&&this.hud.toast("\xA1Sin munici\xF3n para "+s.name+"!")}else this.prevFire||_t.dry()}this.prevFire=e}update(t){let e=performance.now();if(this.state==="countdown"){let c=Math.ceil((this.countdownEnd-e)/1e3);c!==this.lastCountdown&&c>0&&(this.lastCountdown=c,this.hud.announce(String(c),"big count",.9),_t.countdown(!1))}this.acc+=t;let n=0;for(;this.acc>=$i&&n<5;)this.fixedStep(),this.acc-=$i,n++;n>=5&&(this.acc=0);let s=this.acc/$i,r=Math.exp(-t*12);this.corr.x*=r,this.corr.y*=r,this.predInit&&this.me.alive&&(this.me.rx=this.predPrev.x+(this.pred.x-this.predPrev.x)*s+this.corr.x,this.me.ry=this.predPrev.y+(this.pred.y-this.predPrev.y)*s+this.corr.y,this.me.rz=this.predPrev.z+(this.pred.z-this.predPrev.z)*s,this.me.ra=this.aimAngle);let a=e-F_;for(let c of this.players.values()){if(c.id===this.localId&&c.alive)continue;let h=c.buf;if(!h.length)continue;let u=h[0],d=h[h.length-1];for(let g=0;g<h.length-1;g++)if(h[g].t<=a&&h[g+1].t>=a){u=h[g],d=h[g+1];break}a>=d.t&&(u=d);let p=d.t>u.t?Math.max(0,Math.min(1,(a-u.t)/(d.t-u.t))):1;for(c.rx=u.x+(d.x-u.x)*p,c.ry=u.y+(d.y-u.y)*p,c.rz=u.z+(d.z-u.z)*p,c.ra=Ed(u.a,d.a,p);h.length>2&&h[1].t<a-200;)h.shift()}for(let c of this.players.values()){let h=c.model;if(c.rx===void 0)continue;let u=c.lastX===null?0:(c.rx-c.lastX)/Math.max(t,.001),d=c.lastY===void 0||c.lastY===null?0:(c.ry-c.lastY)/Math.max(t,.001);c.lastX=c.rx,c.lastY=c.ry;let p=Math.hypot(u,d);c.speed+=(p-c.speed)*Math.min(1,t*10),h.root.position.x=c.rx,h.root.position.z=c.ry,c.alive&&(h.root.position.y=c.rz||0),h.root.rotation.y=Math.PI/2-c.ra;let g=c.id===this.localId,x=c.flags,m=g?this.inv.w[this.inv.sl]?Wa.indexOf(this.inv.w[this.inv.sl][0]):-1:c.w;h.setWeapon(m>=0?Wa[m]:null),h.update(t,{speed:Math.min(1.3,c.speed/6),running:c.speed>7.2,aiming:g?this.buttons&qe.ADS:x&32,reloading:g?this.inv.rl>0:x&8,healing:g?!!this.inv.hl:x&16,airborne:(c.rz||0)>.08,inMatch:!0}),c.alive&&c.speed>1.5&&(c.rz||0)<.05&&(c.stepT-=t,c.stepT<=0&&(c.stepT=c.speed>7.2?.27:.36,g?_t.step(null,null,c.speed>7.2):_t.step(c.rx,c.ry,c.speed>7.2))),h.root.visible=c.alive||h.deadT<4.2}let o=this._focus();this._updateCamera(t,o),_t.listener.x=o.x,_t.listener.y=o.y,_t.listener.yaw=this.camMode==="follow"?this.yaw:-Math.PI/2;let l=xd(this.map,o.x,o.y);if(this.world.update(t,{x:o.x,z:o.y},l,this.camera),this.effects.update(t),this._updateHud(t,o),this.me.alive&&this.zone){let c=Math.hypot(this.pred.x-this.zone.cx,this.pred.y-this.zone.cy)>this.zone.r;this.hud.setZoneVignette(c),c&&e-this.lastZoneTick>1e3&&(this.lastZoneTick=e,_t.zoneTick())}else this.hud.setZoneVignette(!1)}_focus(){if(this.me.alive||!this.spectateId)return{x:this.me.rx??this.pred.x,y:this.me.ry??this.pred.y,z:this.me.rz||0,a:this.aimAngle};let t=this.players.get(this.spectateId);return t?{x:t.rx,y:t.ry,z:t.rz||0,a:t.ra}:{x:this.me.rx,y:this.me.ry,z:0,a:0}}_updateCamera(t,e){let n=this.camMode==="follow",s=this.inv.w[this.inv.sl],r=s?Xe[s[0]]:null,a=this.me.alive&&this.buttons&qe.ADS&&r;!this.me.alive&&this.spectateId&&n&&(this.yawT=Ed(this.yawT,this.players.get(this.spectateId)?.ra??this.yawT,Math.min(1,t*2.5)));let o=42-34*Math.max(0,Math.min(1,ut.cameraSmoothing??.35)),l=1-Math.exp(-t*o);this.yaw+=(this.yawT-this.yaw)*l,this.pitch+=(this.pitchT-this.pitch)*l;let c=n?this.yaw:-Math.PI/2,h=n?this.pitch:1.12,u=(n?13:19)*ut.cameraDistance*this.zoom,d=n?4.2:0;if(a&&(u*=r.zoom,d+=n?r.id==="sniper"?12:r.id==="ar"?6:3.5:0),!n){let y=this.screenToGround(this.mouse.x,this.mouse.y,0);if(y){let M=y.x-e.x,D=y.y-e.y,k=Math.min(a?14:5,Math.hypot(M,D)*(a?.45:.18)),j=Math.atan2(D,M);this._lookOff={x:Math.cos(j)*k,y:Math.sin(j)*k}}}let p=Math.cos(c),g=Math.sin(c),x=!n&&this._lookOff?this._lookOff:{x:0,y:0},m=n?Math.max(0,1-h/1.1):0;d*=1-m*.6;let f=n?.9*m:0,v=e.x+p*d+x.x-g*f,_=e.y+g*d+x.y+p*f,S=1.2+(e.z||0)*.4+m*.9;if(n){let y=v-p*u*Math.cos(h),M=_-g*u*Math.cos(h),D=S+u*Math.sin(h),k=Fs(this.map,v,_,y,M);if(k){let j=k.obj.ref?.height??3;S+(D-S)*k.t<j+.4&&(u=Math.max(2.8,u*k.t*.9))}}this.camDist===null&&(this.camDist=u),this.camDist+=(u-this.camDist)*Math.min(1,t*(u<this.camDist?14:3)),u=this.camDist;let R=new L(v,S,_),T=new L(v-p*u*Math.cos(h),Math.max(.9,S+u*Math.sin(h)),_-g*u*Math.cos(h));this.camInit||(this.camPos.copy(T),this.camLook.copy(R),this.camInit=!0);let b=1-Math.exp(-t*(n?30:10));if(this.camPos.lerp(T,b),this.camLook.lerp(R,b),this.camera.position.copy(this.camPos),this.shake>0){this.shake=Math.max(0,this.shake-t*2.2);let y=this.shake*.35;this.camera.position.x+=(Math.random()-.5)*y,this.camera.position.y+=(Math.random()-.5)*y,this.camera.position.z+=(Math.random()-.5)*y}this.camera.lookAt(this.camLook);let C=ut.fov*(a&&r.id==="sniper"?.92:1);Math.abs(this.camera.fov-C)>.05&&(this.camera.fov+=(C-this.camera.fov)*Math.min(1,t*8),this.camera.updateProjectionMatrix())}_updateHud(t,e){let n=performance.now();this.hud.updateTop(this.aliveCount,this.teamsAlive,this.matchTime,this.zone);let s=[...this.players.values()].filter(x=>x.team===this.myTeam).map(x=>({name:x.name,hp:x.id===this.localId?this.inv.hp:x.hp,alive:x.alive,color:x.color,isMe:x.id===this.localId}));(!this._teamT||n-this._teamT>250)&&(this.hud.updateTeam(s),this._teamT=n);let r=null;if(this.me.alive&&this.state==="playing"){let x=null,m=pc*pc;for(let f of this.loot.values()){let v=(f.x-this.pred.x)**2+(f.y-this.pred.y)**2;v<m&&(f.k==="weapon"||!x||x.k!=="weapon")&&(m=v,x=f)}if(x){let f={kind:x.k,type:x.ty,amount:x.n},v=this.inv.w.every(Boolean)&&x.k==="weapon"&&!this.inv.w.some(_=>_&&_[0]===x.ty);r=`Recoger <b>${Td(Yu(f))}</b>${v?" <small>(cambia el arma actual)</small>":""}`}}r!==this._lastPrompt&&(this.hud.prompt(r),this._lastPrompt=r);let a=[];for(let x of this.players.values()){if(!x.alive||x.id===this.localId||x.rx===void 0||Math.hypot(x.rx-e.x,x.ry-e.y)>42)continue;let f=x.team===this.myTeam;if(!f){let v=this.losCache.get(x.id);if((!v||n-v.t>150)&&(v={t:n,v:!Fs(this.map,e.x,e.y,x.rx,x.ry)},this.losCache.set(x.id,v)),!v.v)continue}a.push({x:x.rx,y:x.ry,h:2.55+(x.rz||0),name:x.name,hp:x.hp,color:f?x.color:"#ffffff",enemy:!f})}let o=this.project(e.x,1.2,e.y)||{x:innerWidth/2,y:innerHeight/2};this.hud.drawOverlay(t,a,(x,m,f)=>this.project(x,m,f),o);let l=this.inv.w[this.inv.sl],c=l?Xe[l[0]]:null,h=this.mouse.x,u=this.mouse.y,d=0,p=!1;if(c&&this.me.alive){let x=c.spread;this.buttons&qe.ADS&&(x*=jl),this.pred.z>.05?x*=ec:this.predSprint?x*=tc:this.moving&&(x*=Ql);let m=this.camMode==="follow"?Math.max(2,Math.min(c.range,this._aimDist||12)):Math.hypot(...(()=>{let R=this.screenToGround(this.mouse.x,this.mouse.y,1.25);return R?[R.x-this.pred.x,R.y-this.pred.y]:[8,0]})()),f=this.pred.x+Math.cos(this.aimAngle)*m,v=this.pred.y+Math.sin(this.aimAngle)*m;this.camMode==="follow"&&(h=innerWidth*.5,u=innerHeight*wd);let _=this.project(f+Math.cos(this.aimAngle+Math.PI/2)*m*Math.tan(x),1.25,v+Math.sin(this.aimAngle+Math.PI/2)*m*Math.tan(x)),S=this.project(f,1.25,v);_&&S&&(d=Math.min(80,Math.hypot(_.x-S.x,_.y-S.y))),p=!!Fs(this.map,this.pred.x,this.pred.y,f,v)}if(this.hud.crosshair(h,u,d,this.me.alive&&!this.paused&&!this.resultShown,p),!this._mmT||n-this._mmT>50){this._mmT=n;for(let[m,f]of this.revealed)f<n&&this.revealed.delete(m);let x=[...this.players.values()].map(m=>({x:m.rx,y:m.ry,alive:m.alive,isMe:m.id===this.localId,mate:m.team===this.myTeam,color:m.color,revealed:this.revealed.has(m.id)}));this.hud.drawMinimap({x:e.x,y:e.y,a:e.a},this.camMode==="follow"?this.yaw:-Math.PI/2,x,this.zone,this.camMode==="follow")}let g=this.keys.has(ut.keys.scoreboard);if(g||this._sbShown){if(g&&(!this._sbT||n-this._sbT>300)){this._sbT=n;let x=this.inv.w.map((m,f)=>m?`<span class="${f===this.inv.sl?"sel":""}">${Xe[m[0]].name}: ${m[1]}/${this.inv.am[Xe[m[0]].ammo]}</span>`:"<span>\u2014 vac\xEDo \u2014</span>").join("")+`<span>Vendas: ${this.inv.he.bandage}</span><span>Botiquines: ${this.inv.he.medkit}</span>`+Object.entries(this.inv.am).map(([m,f])=>`<span class="am">${qi[m].name}: ${f}</span>`).join("");this.hud.showScoreboard(!0,{zone:this.zone,alive:this.aliveCount,time:this.matchTime,inventory:x,players:[...this.players.values()].map(m=>({name:m.name,team:m.team,color:m.color,kills:m.kills||0,alive:m.alive,isMe:m.id===this.localId,mate:m.team===this.myTeam,x:m.rx,y:m.ry,bot:m.bot}))})}else g||this.hud.showScoreboard(!1);this._sbShown=g}}render(){this.renderer.render(this.scene,this.camera)}project(t,e,n){let s=new L(t,e,n).project(this.camera);return s.z>1||s.z<-1?null:{x:(s.x+1)/2*innerWidth,y:(1-s.y)/2*innerHeight}}screenToGround(t,e,n=0){let s=new ft(t/innerWidth*2-1,-(e/innerHeight)*2+1),r=new Fa;r.setFromCamera(s,this.camera);let a=new En(new L(0,1,0),-n),o=new L;return r.ray.intersectPlane(a,o)?{x:o.x,y:o.z}:null}screenAngleTo(t,e){let n=this._focus(),s=Math.atan2(e-n.y,t-n.x),r=this.camMode==="follow"?this.yaw:-Math.PI/2;return s-r-Math.PI/2}setVictoryPose(){this.me.alive&&(this.me.model.victory=!0,this.effects.confetti(this.pred.x,this.pred.y))}dispose(){window.removeEventListener("keydown",this.h.keydown),window.removeEventListener("keyup",this.h.keyup),window.removeEventListener("mousedown",this.h.mousedown),window.removeEventListener("mouseup",this.h.mouseup),window.removeEventListener("mousemove",this.h.mousemove),window.removeEventListener("wheel",this.h.wheel),window.removeEventListener("contextmenu",this.h.contextmenu),window.removeEventListener("blur",this.h.blur),window.removeEventListener("resize",this.h.resize),document.removeEventListener("pointerlockchange",this.h.plc),document.pointerLockElement&&document.exitPointerLock(),this.hud.hide(),this.world.dispose(),this.effects.dispose(),zs("pause").classList.add("hidden"),this.renderer.domElement.classList.remove("cursorMode"),this.scene.traverse(t=>{t.geometry&&t.isInstancedMesh})}};function Ed(i,t,e){let n=t-i;for(;n>Math.PI;)n-=2*Math.PI;for(;n<-Math.PI;)n+=2*Math.PI;return i+n*e}function Td(i){return String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}Mr();Er();wr();Pc();Yi();to();bc();var G=i=>document.getElementById(i),Ur=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Dr="islaRoyale.profileId",lo="islaRoyale.name",Dc="islaRoyale.token",Uc=(new URLSearchParams(location.search).get("sala")||"").trim().toUpperCase().slice(0,5),zd=!1,Nc=!1;function ho(i){if(i&&(Y.profile=i,i.token))try{(Nc?sessionStorage:localStorage).setItem(Dc,i.token)}catch{}}var Y={renderer:null,net:new Ga,lobby:null,game:null,profile:null,mode:localStorage.getItem("islaRoyale.mode")||"solo",party:null,queue:null,lastResult:null,screen:"boot"};window.__app=Y;Promise.resolve().then(()=>(Pc(),Bd)).then(i=>{window.__meta=i});function Gd(){let i=Vn[ut.quality]||Vn.medium,t=G("game"),e=t;Y.renderer&&(e=t.cloneNode(!1),t.replaceWith(e),Y.renderer.dispose());let n;try{n=new Hi({canvas:e,antialias:i.antialias,powerPreference:"high-performance"})}catch(s){throw G("bootText").textContent="Tu navegador no puede usar WebGL. Actualiza los controladores gr\xE1ficos o usa Chrome / Edge.",s}return n.outputColorSpace=pe,n.shadowMap.enabled=i.shadows,n.shadowMap.type=Gl,Y.renderer=n,kc(),n}function kc(){let i=Vn[ut.quality]||Vn.medium,t=Math.min(window.devicePixelRatio||1,i.pixelRatio)*ut.renderScale;Y.renderer.setPixelRatio(t),Y.renderer.setSize(innerWidth,innerHeight),Y.lobby&&Y.lobby.resize()}window.addEventListener("resize",kc);var Hd=performance.now(),ao=0,Lc=0;function Wd(i){requestAnimationFrame(Wd);let t=Math.min(.1,(i-Hd)/1e3);Hd=i;try{Y.game?(Y.game.update(t),Y.game.render()):Y.lobby&&(Y.lobby.update(t),Y.lobby.render())}catch(e){console.error(e),on("Error de renderizado: "+e.message)}ao+=t,Lc++,ao>.5&&(G("fps").textContent=`${Math.round(Lc/ao)} FPS \xB7 ${Y.net.ping} ms`,ao=0,Lc=0)}function Qi(i){Y.screen=i,G("boot").classList.toggle("hidden",i!=="boot"),G("lobby").classList.toggle("hidden",i!=="lobby"),G("results").classList.toggle("hidden",i!=="results")}function on(i,t=!1){let e=G("errorToast");e.textContent=i,e.classList.remove("hidden"),e.classList.toggle("ok",t),clearTimeout(on.t),on.t=setTimeout(()=>e.classList.add("hidden"),4200)}function Ic(i){_t.click(),G(i).classList.remove("hidden"),i==="settingsModal"&&co(),i==="helpModal"&&Q_()}function oo(){document.querySelectorAll(".modalWrap").forEach(i=>{i.id!=="pause"&&i.classList.add("hidden")})}var le=Y.net;le.onStatus=(i,t)=>{let e=G("connDot");e.className=i==="online"?"online":i==="offline"?"offline":"",G("connText").textContent=i==="online"?`Conectado \xB7 ${t} ms`:i==="offline"?"Sin conexi\xF3n \u2014 reintentando\u2026":"Conectando\u2026",Y.screen==="boot"&&i==="offline"&&(G("bootText").textContent="Despertando el servidor\u2026 puede tardar hasta un minuto la primera vez.")};le.on("__open",()=>{let i=sessionStorage.getItem(Dr)||localStorage.getItem(Dr),t=sessionStorage.getItem(Dc)||localStorage.getItem(Dc);le.send({t:"hello",id:i,token:t,name:localStorage.getItem(lo)||""})});le.on("__close",()=>{Y.game&&(Xs(!1),on("Se perdi\xF3 la conexi\xF3n con el servidor.")),Y.queue=null,Y.party=null,Fc(),Oc()});le.on("welcome",i=>{i.duplicate?(Nc=!0,sessionStorage.setItem(Dr,i.profile.id)):sessionStorage.getItem(Dr)?Nc=!0:localStorage.setItem(Dr,i.profile.id),ho(i.profile),localStorage.getItem(lo)||localStorage.setItem(lo,i.profile.name),G("onlineText").textContent=`${i.stats.online} en l\xEDnea`,uo(),Y.screen==="boot"&&J_(),i.duplicate&&on("Este navegador ya ten\xEDa una sesi\xF3n abierta: esta pesta\xF1a usa un perfil de invitado."),Uc&&!zd&&(zd=!0,le.send({t:"partyJoin",code:Uc}),history.replaceState(null,"",location.pathname))});le.on("profile",i=>{ho(i.profile),uo()});le.on("online",i=>{G("onlineText").textContent=`${i.online} en l\xEDnea \xB7 ${i.matches} partidas`});le.on("error",i=>{on(i.msg),_t.dry()});le.on("party",i=>{Y.party=i.party,Y.party&&(Y.mode=Y.party.mode),Oc(),Nr()});le.on("queue",i=>{Y.queue=i.active?i:null,Fc()});le.on("start",i=>K_(i));le.on("s",i=>{Y.game&&Y.game.onSnapshot(i)});le.on("result",i=>j_(i));le.on("doubled",i=>{ho(i.profile),uo(),G("resDouble").classList.add("hidden"),G("results").classList.contains("hidden"),G("resXpList").insertAdjacentHTML("beforeend",`<div class="xpLine bonus"><span>Bonus por anuncio (\xD72)</span><b>+${i.bonus} XP</b></div>`);let t=i.profile;G("resXpBar").style.width=Math.round(t.levelXp/t.levelNeed*100)+"%",G("resLevel").innerHTML=`Nivel ${t.level} \xB7 ${t.levelXp}/${t.levelNeed} XP`,_t.elimination()});async function Z_(){Gd(),G("bootFill").style.width="30%",Y.lobby=new br(Y.renderer),G("bootFill").style.width="60%",requestAnimationFrame(Wd),ty(),le.connect(),Pd(),Ec(Y,{showError:on}),G("bootText").textContent="Conectando con el servidor\u2026"}function J_(){G("bootFill").style.width="100%",G("bootText").textContent=Uc?"\xA1Te han invitado a un equipo!":"\xA1Listo!",G("bootBtn").classList.remove("hidden"),G("bootBtn").onclick=()=>{_t.init(),_t.click(),_t.startMusic(),ut.fullscreen&&Bc(!0),Qi("lobby")}}function uo(){let i=Y.profile;i&&(G("pName").textContent=i.name,G("pLevel").textContent=i.level,G("pXp").style.width=Math.round(i.levelXp/i.levelNeed*100)+"%",G("pXpText").textContent=`${i.levelXp}/${i.levelNeed} XP`,G("avatar").style.background=`radial-gradient(circle at 50% 38%, ${i.outfit.skin} 0 34%, ${i.outfit.topColor} 35%)`,Y.lobby&&!Rc()&&Y.lobby.setOutfit(i.outfit),Cc())}function Nr(){document.querySelectorAll("#modes .mode").forEach(t=>{t.classList.toggle("active",t.dataset.mode===Y.mode);let e=Y.party?Y.party.members.length:1;t.disabled=Y.party&&Y.party.leader!==Y.profile?.id||Ln[t.dataset.mode].teamSize<e});let i=Y.party&&Y.profile&&Y.party.leader!==Y.profile.id;G("playBtn").disabled=!!i,G("playBtn").textContent=i?"ESPERANDO AL L\xCDDER":"JUGAR",G("playBtn").style.fontSize=i?"22px":""}function Oc(){let i=Y.party;if(G("partyNone").classList.toggle("hidden",!!i),G("partyIn").classList.toggle("hidden",!i),!i){Y.lobby&&Y.lobby.setMates([]),Nr();return}G("partyCodeText").textContent=i.code;let t={lobby:"En el lobby",queue:"Buscando",match:"En partida"};G("partyMembers").innerHTML=i.members.map(n=>`<div class="member"><i style="background:${n.outfit.topColor}"></i>${n.id===i.leader?'<span class="crown">\u265B</span>':""}${Ur(n.name)}${n.id===Y.profile?.id?" (t\xFA)":""}<small>Nv ${n.level} \xB7 ${t[n.state]||""}</small></div>`).join(""),G("partyHint").textContent=`${i.members.length}/4 \xB7 ${Ln[i.mode].name}${i.private?" \xB7 privada":""}`;let e=i.leader===Y.profile?.id;G("partyPrivate").checked=!!i.private,G("partyPrivate").disabled=!e,G("partyPrivate").parentElement.classList.toggle("disabled",!e),Y.lobby&&Y.lobby.setMates(i.members.filter(n=>n.id!==Y.profile?.id).map(n=>n.outfit))}function Fc(){let i=Y.queue;if(G("queueInfo").classList.toggle("hidden",!i),G("playBtn").classList.toggle("hidden",!!i),document.querySelectorAll("#modes .mode").forEach(t=>{i&&(t.disabled=!0)}),!i){Nr();return}G("queueTitle").textContent=`Buscando partida \xB7 ${Ln[i.mode].name}`,G("queueText").textContent=`${i.humans} jugador${i.humans===1?"":"es"} real${i.humans===1?"":"es"} \xB7 empieza en ${i.seconds}s \xB7 el resto ser\xE1n bots`}function Vd(i=Y.mode){if(_t.init(),_t.click(),ut.fullscreen&&Bc(!0),le.status!=="online")return on("Sin conexi\xF3n con el servidor.");le.send({t:"queue",mode:i,bots:ut.botLevel})}function K_(i){oo(),Y.game&&Xs(!1,!0),Qi("none"),Y.queue=null,Fc(),_t.init();try{Y.game=new eo(Y,i)}catch(t){console.error(t),on("No se pudo iniciar la partida: "+t.message),le.send({t:"leave"}),Qi("lobby");return}Y.currentMode=i.mode,ut.cameraMode==="follow"&&setTimeout(()=>Y.game&&Y.game.lockPointer(),50)}function Xs(i=!0,t=!1){Y.game&&(Y.game.dispose(),Y.game=null),i&&le.send({t:"leave"}),t||(Qi("lobby"),_t.startMusic())}function j_(i){Y.lastResult=i,i.profile&&(ho(i.profile),uo());let t=Y.game;t&&(t.ended=!0,i.won&&(t.setVictoryPose(),_t.victory()),setTimeout(()=>{Y.game===t&&(i.won?_t.elimination():_t.defeat(),t.resultShown=!0,document.pointerLockElement&&document.exitPointerLock(),G("pause").classList.add("hidden"),Xd(i),Qi("results"))},i.won?2600:1600))}function Xd(i){let t=G("resTitle");t.textContent=i.won?"\xA1VICTORIA!":"DERROTA",t.className="resTitle"+(i.won?"":" defeat");let e=Ln[i.mode].teamSize>1;G("resSub").textContent=i.won?e?"Tu equipo es el \xFAltimo en pie":`${i.name} es el \xFAltimo superviviente`:`Has quedado en el puesto #${i.placement} de ${e?"los equipos":i.total+" jugadores"}`,G("resPlace").textContent="#"+i.placement,G("resKills").textContent=i.kills,G("resDamage").textContent=i.damage,G("resTime").textContent=Dn(i.survived),G("resXpList").innerHTML=i.xpBreakdown.map(([r,a],o)=>`<div class="xpLine" style="animation-delay:${o*.12}s"><span>${Ur(r)}</span><b>+${a}</b></div>`).join("")+`<div class="xpLine xpTotal"><span>Total</span><b>+${i.xp} XP</b></div>`+(i.coins?`<div class="xpLine coinsLine"><span>Monedas ganadas</span><b>\u{1FA99} +${i.coins}</b></div>`:""),i.levelRewards&&i.levelRewards.length&&setTimeout(()=>ro(i.levelRewards),1400);let n=i.profile;G("resXpBar").style.width="0%",setTimeout(()=>{G("resXpBar").style.width=Math.round(n.levelXp/n.levelNeed*100)+"%"},300),G("resLevel").innerHTML=i.levelUp?`<span class="up">\xA1Subes al nivel ${i.levelUp}!</span>`:`Nivel ${n.level} \xB7 ${n.levelXp}/${n.levelNeed} XP`,G("resBoard").innerHTML=i.leaderboard.map((r,a)=>`<div class="boardRow ${r.name===i.name?"me":""}"><span>${a+1}. ${Ur(r.name)}</span><span>${r.kills} bajas \xB7 ${r.damage} da\xF1o</span></div>`).join(""),G("resSpectate").classList.toggle("hidden",i.won||!Y.game||![...Y.game.players.values()].some(r=>r.alive)),G("resDouble").classList.toggle("hidden",!(Gs()&&i.xp>0)),G("resDouble").disabled=!1,G("resDouble").onclick=()=>Lr("doublexp",null,G("resDouble"));let s=Y.party&&Y.party.leader!==Y.profile.id;G("resAgain").textContent=s?"Volver con el equipo":"Jugar otra partida"}function Q_(){let i=ut.keys;G("helpKeys").innerHTML=[[`${Ae(i.forward)} ${Ae(i.left)} ${Ae(i.back)} ${Ae(i.right)}`,"Moverse"],["Rat\xF3n","C\xE1mara y punter\xEDa"],["Clic izq.","Disparar"],["Clic der.","Apuntar"],[Ae(i.reload),"Recargar"],[Ae(i.interact),"Recoger"],[Ae(i.jump),"Saltar"],[Ae(i.sprint),"Correr"],[`${Ae(i.slot1)} / ${Ae(i.slot2)}`,"Cambiar arma"],[`${Ae(i.bandage)} / ${Ae(i.medkit)}`,"Curarse"],[Ae(i.scoreboard),"Informaci\xF3n de partida"],["Esc","Pausa"]].map(([t,e])=>`<li><kbd>${Ur(t)}</kbd> ${e}</li>`).join("")}var Ei=null;function co(){G("sQuality").value=ut.quality;let i=[1,.85,.7,.5],t=Vn[ut.quality]||Vn.medium,e=Math.min(window.devicePixelRatio||1,t.pixelRatio);G("sScale").innerHTML=i.map(n=>`<option value="${n}">${Math.round(innerWidth*e*n)} \xD7 ${Math.round(innerHeight*e*n)}${n===1?" (nativa)":` (${Math.round(n*100)}%)`}</option>`).join(""),G("sScale").value=String(ut.renderScale),G("sFull").checked=!!document.fullscreenElement,G("sFps").checked=ut.showFps,G("sMaster").value=ut.masterVol,G("sMusic").value=ut.musicVol,G("sSfx").value=ut.sfxVol,G("sSens").value=ut.sensitivity,G("sSensOut").textContent=ut.sensitivity.toFixed(2),G("sInvert").checked=ut.invertY,G("sCamMode").value=ut.cameraMode,G("sCamDist").value=ut.cameraDistance,G("sCamSmooth").value=ut.cameraSmoothing,G("sCamSmoothOut").textContent=Math.round(ut.cameraSmoothing*100)+"%",G("sFov").value=ut.fov,G("sFovOut").textContent=ut.fov+"\xB0",G("keyList").innerHTML=vd.map(([n,s])=>`<div class="keyRow"><span>${s}</span><button class="keyBtn" data-action="${n}">${Ur(Ae(ut.keys[n]))}</button></div>`).join(""),document.querySelectorAll(".keyBtn").forEach(n=>n.onclick=()=>{document.querySelectorAll(".keyBtn").forEach(s=>s.classList.remove("listening")),Ei=n.dataset.action,n.classList.add("listening"),n.textContent="Pulsa una tecla\u2026"})}window.addEventListener("keydown",i=>{if(Ei){if(i.preventDefault(),i.stopImmediatePropagation(),i.code!=="Escape"){let t=Object.keys(ut.keys).find(e=>ut.keys[e]===i.code&&e!==Ei);t&&(ut.keys[t]=ut.keys[Ei]),ut.keys[Ei]=i.code,In()}Ei=null,co()}},!0);function Bc(i){try{i&&!document.fullscreenElement?document.documentElement.requestFullscreen().catch(()=>{}):!i&&document.fullscreenElement&&document.exitFullscreen().catch(()=>{})}catch{}}ja(()=>{G("fps").classList.toggle("hidden",!ut.showFps),Y.game&&(Y.game.camera.fov=ut.fov,Y.game.camera.updateProjectionMatrix(),Y.game.hud.renderKeys())});function ty(){document.addEventListener("click",e=>{e.target.closest("button")&&_t.click()},!0),window.addEventListener("keydown",e=>{e.code==="Escape"&&!Y.game&&(Ir(),oo())}),document.querySelectorAll("[data-open]").forEach(e=>e.onclick=()=>Ic(e.dataset.open)),G("btnSettingsTop").onclick=()=>Ic("settingsModal"),document.querySelectorAll(".modal .close").forEach(e=>e.onclick=()=>{oo(),Ei=null}),document.querySelectorAll(".modalWrap").forEach(e=>e.addEventListener("mousedown",n=>{n.target===e&&e.id!=="pause"&&(oo(),Ei=null)})),document.querySelectorAll("#modes .mode").forEach(e=>e.onclick=()=>{Y.mode=e.dataset.mode,localStorage.setItem("islaRoyale.mode",Y.mode),Y.party&&le.send({t:"partyMode",mode:Y.mode}),Nr()}),G("botLevel").value=ut.botLevel,G("botLevel").onchange=()=>{ut.botLevel=G("botLevel").value,In()},G("playBtn").onclick=()=>Vd(),G("cancelBtn").onclick=()=>le.send({t:"cancel"}),G("partyCreate").onclick=()=>le.send({t:"partyCreate"}),G("partyJoin").onclick=()=>{let e=G("partyCode").value.trim();e&&le.send({t:"partyJoin",code:e})},G("partyCode").onkeydown=e=>{e.key==="Enter"&&G("partyJoin").click()},G("partyLeave").onclick=()=>le.send({t:"partyLeave"}),G("partyPrivate").onchange=()=>le.send({t:"partyPrivate",v:G("partyPrivate").checked}),G("partyInvite").onclick=()=>{let e=`${location.origin}/?sala=${Y.party?.code||""}`,n=()=>on("Enlace copiado: "+e+" \u2014 p\xE9galo en WhatsApp o Discord",!0);navigator.clipboard?navigator.clipboard.writeText(e).then(n,()=>window.prompt("Copia este enlace:",e)):window.prompt("Copia este enlace:",e)},G("partyCopy").onclick=()=>{navigator.clipboard?.writeText(Y.party?.code||"").catch(()=>{}),on("C\xF3digo copiado: "+(Y.party?.code||""))},G("editName").onclick=()=>{G("nameInput").value=Y.profile?.name||"",G("nameModal").classList.remove("hidden"),G("nameInput").focus()},G("nameSave").onclick=()=>{let e=G("nameInput").value.trim();if(e.length<2)return on("El nombre debe tener al menos 2 caracteres.");le.send({t:"setName",name:e}),localStorage.setItem(lo,e),G("nameModal").classList.add("hidden")},G("nameInput").onkeydown=e=>{e.key==="Enter"&&G("nameSave").click()};let i=null;window.addEventListener("mousedown",e=>{!Y.game&&e.target&&e.target.id==="game"&&(i=e.clientX,Y.lobby.dragging=!0)}),window.addEventListener("mousemove",e=>{i!==null&&!Y.game&&(Y.lobby.drag(e.clientX-i),i=e.clientX)}),window.addEventListener("mouseup",()=>{i=null,Y.lobby&&(Y.lobby.dragging=!1)}),document.querySelectorAll(".tab").forEach(e=>e.onclick=()=>{document.querySelectorAll(".tab").forEach(n=>n.classList.toggle("active",n===e)),document.querySelectorAll(".tabBody").forEach(n=>n.classList.toggle("hidden",n.id!==e.dataset.tab))}),G("sQuality").onchange=()=>{ut.quality=G("sQuality").value,In(),Y.game?on("La nueva calidad se aplicar\xE1 en la pr\xF3xima partida."):(Gd(),ey()),co()},G("sScale").onchange=()=>{ut.renderScale=Number(G("sScale").value),In(),kc()},G("sFull").onchange=()=>{ut.fullscreen=G("sFull").checked,In(),Bc(ut.fullscreen)},G("sFps").onchange=()=>{ut.showFps=G("sFps").checked,In()};let t=(e,n,s,r)=>{G(e).oninput=()=>{ut[n]=Number(G(e).value),s&&(G(s).textContent=r(ut[n])),In()}};t("sMaster","masterVol"),t("sMusic","musicVol"),t("sSfx","sfxVol"),t("sSens","sensitivity","sSensOut",e=>e.toFixed(2)),t("sCamDist","cameraDistance"),t("sCamSmooth","cameraSmoothing","sCamSmoothOut",e=>Math.round(e*100)+"%"),t("sFov","fov","sFovOut",e=>e+"\xB0"),G("sInvert").onchange=()=>{ut.invertY=G("sInvert").checked,In()},G("sCamMode").onchange=()=>{ut.cameraMode=G("sCamMode").value,In(),Y.game&&(Y.renderer.domElement.classList.toggle("cursorMode",ut.cameraMode==="cursor"),ut.cameraMode==="cursor"&&document.pointerLockElement&&document.exitPointerLock())},G("resetKeys").onclick=()=>{ut.keys=structuredClone(Bs.keys),ut.sensitivity=Bs.sensitivity,ut.invertY=!1,In(),co()},document.addEventListener("fullscreenchange",()=>{G("sFull").checked=!!document.fullscreenElement}),G("resumeBtn").onclick=()=>Y.game&&Y.game.togglePause(!1),G("pauseSettings").onclick=()=>Ic("settingsModal"),G("leaveBtn").onclick=()=>{Xs(!0)},G("resLobby").onclick=()=>Mc("volver-lobby",()=>Xs(!0)),G("resSpectate").onclick=()=>{Qi("none"),Y.game&&(Y.game.resultShown=!1,Y.game.pickSpectate(Y.game.spectateId))},G("specResults").onclick=()=>{Y.lastResult&&Y.game?.ended?(Y.game.resultShown=!0,Xd(Y.lastResult),Qi("results")):on("Los resultados aparecer\xE1n al terminar tu participaci\xF3n.")},G("specLobby").onclick=()=>Xs(!0),G("resAgain").onclick=()=>Mc("otra-partida",()=>{let e=Y.currentMode||Y.mode;Xs(!0),(!Y.party||Y.party.leader===Y.profile.id)&&setTimeout(()=>Vd(e),150)}),G("fps").classList.toggle("hidden",!ut.showFps)}function ey(){Y.lobby=new br(Y.renderer),Y.profile&&Y.lobby.setOutfit(Y.profile.outfit),Oc()}Nr();Z_().catch(i=>{console.error(i),G("bootText").textContent="Error al iniciar: "+i.message});
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
