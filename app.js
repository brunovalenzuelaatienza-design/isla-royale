var ap=Object.defineProperty;var Dt=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var op=(i,e)=>{for(var t in e)ap(i,t,{get:e[t],enumerable:!0})};function Vs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function $t(i,e,t){return Math.max(e,Math.min(t,i))}function rm(i,e){return(i%e+e)%e}function ll(i,e,t){return(1-t)*i+t*e}function md(i){return(i&i-1)===0&&i!==0}function Gl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function or(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function on(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function bu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ka(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function am(){let i=ka("canvas");return i.style.display="block",i}function pr(i){i in gd||(gd[i]=!0,console.warn(i))}function Ps(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function dl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ua.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function fl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ui.fromArray(i,r);let o=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),l=e.dot(Ui),c=t.dot(Ui),h=n.dot(Ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function bl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function vm(i,e,t,n,s,r,a,o){let l;if(e.side===ln?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===bi,o),l===null)return null;xa.copy(o),xa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(xa);return c<t.near||c>t.far?null:{distance:c,point:xa.clone(),object:i}}function _a(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,xs),i.getVertexPosition(l,_s),i.getVertexPosition(c,vs);let h=vm(i,e,t,n,xs,_s,vs,ya);if(h){s&&(pa.fromBufferAttribute(s,o),ma.fromBufferAttribute(s,l),ga.fromBufferAttribute(s,c),h.uv=Es.getInterpolation(ya,xs,_s,vs,pa,ma,ga,new pe)),r&&(pa.fromBufferAttribute(r,o),ma.fromBufferAttribute(r,l),ga.fromBufferAttribute(r,c),h.uv1=Es.getInterpolation(ya,xs,_s,vs,pa,ma,ga,new pe),h.uv2=h.uv1),a&&(Cd.fromBufferAttribute(a,o),Pd.fromBufferAttribute(a,l),Ld.fromBufferAttribute(a,c),h.normal=Es.getInterpolation(ya,xs,_s,vs,Cd,Pd,Ld,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new L,materialIndex:0};Es.getNormal(xs,_s,vs,d.normal),h.face=d}return h}function Us(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function sn(i){let e={};for(let t=0;t<i.length;t++){let n=Us(i[t]);for(let s in n)e[s]=n[s]}return e}function Mm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wu(i){return i.getRenderTarget()===null?i.outputColorSpace:ct.workingColorSpace}function Eu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Am(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let d=c.array,u=c.usage,f=d.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,d,u),c.onUploadCallback();let y;if(d instanceof Float32Array)y=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)y=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=i.SHORT;else if(d instanceof Uint32Array)y=i.UNSIGNED_INT;else if(d instanceof Int32Array)y=i.INT;else if(d instanceof Int8Array)y=i.BYTE;else if(d instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,d){let u=h.array,f=h._updateRange,g=h.updateRanges;if(i.bindBuffer(d,c),f.count===-1&&g.length===0&&i.bufferSubData(d,0,u),g.length!==0){for(let y=0,m=g.length;y<m;y++){let p=g[y];t?i.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):i.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):i.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:a,remove:o,update:l}}function oy(i,e,t,n,s,r,a){let o=new Le(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(m,p){let v=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?y(o,l):x&&x.isColor&&(y(x,1),v=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===no)?(h===void 0&&(h=new Ee(new ft(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Us(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ct.getTransfer(x.colorSpace)!==pt,(d!==x||u!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ee(new $i(2,2),new Nn({name:"BackgroundMaterial",uniforms:Us(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ct.getTransfer(x.colorSpace)!==pt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,p){m.getRGB(Ma,wu(i)),n.buffers.color.setClear(Ma.r,Ma.g,Ma.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(o,l)},render:g}}function ly(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function d(I,F,$,J,Z){let Y=!1;if(a){let ee=y(J,$,F);c!==ee&&(c=ee,f(c.object)),Y=p(I,J,$,Z),Y&&v(I,J,$,Z)}else{let ee=F.wireframe===!0;(c.geometry!==J.id||c.program!==$.id||c.wireframe!==ee)&&(c.geometry=J.id,c.program=$.id,c.wireframe=ee,Y=!0)}Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,C(I,F,$,J),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function u(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(I){return n.isWebGL2?i.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?i.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function y(I,F,$){let J=$.wireframe===!0,Z=o[I.id];Z===void 0&&(Z={},o[I.id]=Z);let Y=Z[F.id];Y===void 0&&(Y={},Z[F.id]=Y);let ee=Y[J];return ee===void 0&&(ee=m(u()),Y[J]=ee),ee}function m(I){let F=[],$=[],J=[];for(let Z=0;Z<s;Z++)F[Z]=0,$[Z]=0,J[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:$,attributeDivisors:J,object:I,attributes:{},index:null}}function p(I,F,$,J){let Z=c.attributes,Y=F.attributes,ee=0,se=$.getAttributes();for(let ce in se)if(se[ce].location>=0){let j=Z[ce],le=Y[ce];if(le===void 0&&(ce==="instanceMatrix"&&I.instanceMatrix&&(le=I.instanceMatrix),ce==="instanceColor"&&I.instanceColor&&(le=I.instanceColor)),j===void 0||j.attribute!==le||le&&j.data!==le.data)return!0;ee++}return c.attributesNum!==ee||c.index!==J}function v(I,F,$,J){let Z={},Y=F.attributes,ee=0,se=$.getAttributes();for(let ce in se)if(se[ce].location>=0){let j=Y[ce];j===void 0&&(ce==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),ce==="instanceColor"&&I.instanceColor&&(j=I.instanceColor));let le={};le.attribute=j,j&&j.data&&(le.data=j.data),Z[ce]=le,ee++}c.attributes=Z,c.attributesNum=ee,c.index=J}function x(){let I=c.newAttributes;for(let F=0,$=I.length;F<$;F++)I[F]=0}function S(I){R(I,0)}function R(I,F){let $=c.newAttributes,J=c.enabledAttributes,Z=c.attributeDivisors;$[I]=1,J[I]===0&&(i.enableVertexAttribArray(I),J[I]=1),Z[I]!==F&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,F),Z[I]=F)}function T(){let I=c.newAttributes,F=c.enabledAttributes;for(let $=0,J=F.length;$<J;$++)F[$]!==I[$]&&(i.disableVertexAttribArray($),F[$]=0)}function b(I,F,$,J,Z,Y,ee){ee===!0?i.vertexAttribIPointer(I,F,$,Z,Y):i.vertexAttribPointer(I,F,$,J,Z,Y)}function C(I,F,$,J){if(n.isWebGL2===!1&&(I.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let Z=J.attributes,Y=$.getAttributes(),ee=F.defaultAttributeValues;for(let se in Y){let ce=Y[se];if(ce.location>=0){let X=Z[se];if(X===void 0&&(se==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),se==="instanceColor"&&I.instanceColor&&(X=I.instanceColor)),X!==void 0){let j=X.normalized,le=X.itemSize,Ae=t.get(X);if(Ae===void 0)continue;let we=Ae.buffer,He=Ae.type,Ve=Ae.bytesPerElement,Ne=n.isWebGL2===!0&&(He===i.INT||He===i.UNSIGNED_INT||X.gpuType===du);if(X.isInterleavedBufferAttribute){let it=X.data,z=it.stride,en=X.offset;if(it.isInstancedInterleavedBuffer){for(let Ce=0;Ce<ce.locationSize;Ce++)R(ce.location+Ce,it.meshPerAttribute);I.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Ce=0;Ce<ce.locationSize;Ce++)S(ce.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,we);for(let Ce=0;Ce<ce.locationSize;Ce++)b(ce.location+Ce,le/ce.locationSize,He,j,z*Ve,(en+le/ce.locationSize*Ce)*Ve,Ne)}else{if(X.isInstancedBufferAttribute){for(let it=0;it<ce.locationSize;it++)R(ce.location+it,X.meshPerAttribute);I.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let it=0;it<ce.locationSize;it++)S(ce.location+it);i.bindBuffer(i.ARRAY_BUFFER,we);for(let it=0;it<ce.locationSize;it++)b(ce.location+it,le/ce.locationSize,He,j,le*Ve,le/ce.locationSize*it*Ve,Ne)}}else if(ee!==void 0){let j=ee[se];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(ce.location,j);break;case 3:i.vertexAttrib3fv(ce.location,j);break;case 4:i.vertexAttrib4fv(ce.location,j);break;default:i.vertexAttrib1fv(ce.location,j)}}}}T()}function _(){O();for(let I in o){let F=o[I];for(let $ in F){let J=F[$];for(let Z in J)g(J[Z].object),delete J[Z];delete F[$]}delete o[I]}}function M(I){if(o[I.id]===void 0)return;let F=o[I.id];for(let $ in F){let J=F[$];for(let Z in J)g(J[Z].object),delete J[Z];delete F[$]}delete o[I.id]}function D(I){for(let F in o){let $=o[F];if($[I.id]===void 0)continue;let J=$[I.id];for(let Z in J)g(J[Z].object),delete J[Z];delete $[I.id]}}function O(){K(),h=!0,c!==l&&(c=l,f(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:O,resetDefaultState:K,dispose:_,releaseStatesOfGeometry:M,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:S,disableUnusedAttributes:T}}function cy(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,d){i.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,u){if(u===0)return;let f,g;if(s)f=i,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,d,u),t.update(d,r,u)}function c(h,d,u){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<u;g++)this.render(h[g],d[g]);else{f.multiDrawArraysWEBGL(r,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=d[y];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function hy(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=u>0,S=a||e.has("OES_texture_float"),R=x&&S,T=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:T}}function dy(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Ln,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,x=v*4,S=p.clippingState||null;l.value=S,S=h(g,u,x,f);for(let R=0;R!==x;++R)S[R]=t[R];p.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,S=f;x!==y;++x,S+=4)a.copy(d[x]).applyMatrix4(v,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function uy(i){let e=new WeakMap;function t(a,o){return o===Ol?a.mapping=Is:o===Fl&&(a.mapping=Ds),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ol||o===Fl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Xl(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function fy(i){let e=[],t=[],n=[],s=i,r=i-Ts+1+Id.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Ts?l=Id[a-i+Ts-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,y=3,m=2,p=1,v=new Float32Array(y*g*f),x=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let T=0;T<f;T++){let b=T%3*2/3-1,C=T>2?0:-1,_=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];v.set(_,y*g*T),x.set(u,m*g*T);let M=[T,T,T,T,T,T];S.set(M,p*g*T)}let R=new Yt;R.setAttribute("position",new yn(v,y)),R.setAttribute("uv",new yn(x,m)),R.setAttribute("faceIndex",new yn(S,p)),e.push(R),s>Ts&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function kd(i,e,t){let n=new ii(i,e,t);return n.texture.mapping=no,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ba(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function py(i,e,t){let n=new Float32Array(Hi),s=new L(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Ud(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Od(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Lc(){return`

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
	`}function my(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Ol||l===Fl,h=l===Is||l===Ds;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new qa(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{let d=o.image;if(c&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new qa(i));let u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",r),u.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function gy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function yy(i,e,t,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let y=u.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)e.remove(y[m])}u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)e.update(u[g],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let y=f[g];for(let m=0,p=y.length;m<p;m++)e.update(y[m],i.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,g=d.attributes.position,y=0;if(f!==null){let v=f.array;y=f.version;for(let x=0,S=v.length;x<S;x+=3){let R=v[x+0],T=v[x+1],b=v[x+2];u.push(R,T,T,b,b,R)}}else if(g!==void 0){let v=g.array;y=g.version;for(let x=0,S=v.length/3-1;x<S;x+=3){let R=x+0,T=x+1,b=x+2;u.push(R,T,T,b,b,R)}}else return;let m=new(bu(u)?Ha:za)(u,1);m.version=y;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function xy(i,e,t,n){let s=n.isWebGL2,r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,g){i.drawElements(r,g,o,f*l),t.update(g,r,1)}function d(f,g,y){if(y===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,f*l,y),t.update(g,r,y)}function u(f,g,y){if(y===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<y;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,f,0,y);let p=0;for(let v=0;v<y;v++)p+=g[v];t.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function _y(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function vy(i,e){return i[0]-e[0]}function My(i,e){return Math.abs(e[1])-Math.abs(i[1])}function by(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new Wt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){let u=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,y=r.get(h);if(y===void 0||y.count!==g){let I=function(){O.dispose(),r.delete(h),h.removeEventListener("dispose",I)};y!==void 0&&y.texture.dispose();let v=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],b=h.morphAttributes.color||[],C=0;v===!0&&(C=1),x===!0&&(C=2),S===!0&&(C=3);let _=h.attributes.position.count*C,M=1;_>e.maxTextureSize&&(M=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let D=new Float32Array(_*M*4*g),O=new Fa(D,_,M,g);O.type=xi,O.needsUpdate=!0;let K=C*4;for(let F=0;F<g;F++){let $=R[F],J=T[F],Z=b[F],Y=_*M*4*F;for(let ee=0;ee<$.count;ee++){let se=ee*K;v===!0&&(a.fromBufferAttribute($,ee),D[Y+se+0]=a.x,D[Y+se+1]=a.y,D[Y+se+2]=a.z,D[Y+se+3]=0),x===!0&&(a.fromBufferAttribute(J,ee),D[Y+se+4]=a.x,D[Y+se+5]=a.y,D[Y+se+6]=a.z,D[Y+se+7]=0),S===!0&&(a.fromBufferAttribute(Z,ee),D[Y+se+8]=a.x,D[Y+se+9]=a.y,D[Y+se+10]=a.z,D[Y+se+11]=Z.itemSize===4?a.w:1)}}y={count:g,texture:O,size:new pe(_,M)},r.set(h,y),h.addEventListener("dispose",I)}let m=0;for(let v=0;v<u.length;v++)m+=u[v];let p=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(i,"morphTargetBaseInfluence",p),d.getUniforms().setValue(i,"morphTargetInfluences",u),d.getUniforms().setValue(i,"morphTargetsTexture",y.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}else{let f=u===void 0?0:u.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<f;x++){let S=g[x];S[0]=x,S[1]=u[x]}g.sort(My);for(let x=0;x<8;x++)x<f&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(vy);let y=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let S=o[x],R=S[0],T=S[1];R!==Number.MAX_SAFE_INTEGER&&T?(y&&h.getAttribute("morphTarget"+x)!==y[R]&&h.setAttribute("morphTarget"+x,y[R]),m&&h.getAttribute("morphNormal"+x)!==m[R]&&h.setAttribute("morphNormal"+x,m[R]),s[x]=T,p+=T):(y&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let v=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(i,"morphTargetBaseInfluence",v),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Sy(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}function Ws(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Fd[s];if(r===void 0&&(r=new Float32Array(s),Fd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ot(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function so(i,e){let t=Bd[e];t===void 0&&(t=new Int32Array(e),Bd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function wy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ey(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Ot(t,e)}}function Ty(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Ot(t,e)}}function Ay(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Ot(t,e)}}function Ry(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;Gd.set(n),i.uniformMatrix2fv(this.addr,!1,Gd),Ot(t,n)}}function Cy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;Hd.set(n),i.uniformMatrix3fv(this.addr,!1,Hd),Ot(t,n)}}function Py(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;zd.set(n),i.uniformMatrix4fv(this.addr,!1,zd),Ot(t,n)}}function Ly(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Iy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Ot(t,e)}}function Dy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Ot(t,e)}}function Ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Ot(t,e)}}function ky(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Uy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Ot(t,e)}}function Oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Ot(t,e)}}function Fy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Ot(t,e)}}function By(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Au:Tu;t.setTexture2D(e||r,s)}function zy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Cu,s)}function Hy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Pu,s)}function Gy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ru,s)}function Vy(i){switch(i){case 5126:return wy;case 35664:return Ey;case 35665:return Ty;case 35666:return Ay;case 35674:return Ry;case 35675:return Cy;case 35676:return Py;case 5124:case 35670:return Ly;case 35667:case 35671:return Iy;case 35668:case 35672:return Dy;case 35669:case 35673:return Ny;case 5125:return ky;case 36294:return Uy;case 36295:return Oy;case 36296:return Fy;case 35678:case 36198:case 36298:case 36306:case 35682:return By;case 35679:case 36299:case 36307:return zy;case 35680:case 36300:case 36308:case 36293:return Hy;case 36289:case 36303:case 36311:case 36292:return Gy}}function Wy(i,e){i.uniform1fv(this.addr,e)}function qy(i,e){let t=Ws(e,this.size,2);i.uniform2fv(this.addr,t)}function Xy(i,e){let t=Ws(e,this.size,3);i.uniform3fv(this.addr,t)}function $y(i,e){let t=Ws(e,this.size,4);i.uniform4fv(this.addr,t)}function Yy(i,e){let t=Ws(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Zy(i,e){let t=Ws(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Jy(i,e){let t=Ws(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function jy(i,e){i.uniform1iv(this.addr,e)}function Ky(i,e){i.uniform2iv(this.addr,e)}function Qy(i,e){i.uniform3iv(this.addr,e)}function ex(i,e){i.uniform4iv(this.addr,e)}function tx(i,e){i.uniform1uiv(this.addr,e)}function nx(i,e){i.uniform2uiv(this.addr,e)}function ix(i,e){i.uniform3uiv(this.addr,e)}function sx(i,e){i.uniform4uiv(this.addr,e)}function rx(i,e,t){let n=this.cache,s=e.length,r=so(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Tu,r[a])}function ax(i,e,t){let n=this.cache,s=e.length,r=so(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Cu,r[a])}function ox(i,e,t){let n=this.cache,s=e.length,r=so(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Pu,r[a])}function lx(i,e,t){let n=this.cache,s=e.length,r=so(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ru,r[a])}function cx(i){switch(i){case 5126:return Wy;case 35664:return qy;case 35665:return Xy;case 35666:return $y;case 35674:return Yy;case 35675:return Zy;case 35676:return Jy;case 5124:case 35670:return jy;case 35667:case 35671:return Ky;case 35668:case 35672:return Qy;case 35669:case 35673:return ex;case 5125:return tx;case 36294:return nx;case 36295:return ix;case 36296:return sx;case 35678:case 36198:case 36298:case 36306:case 35682:return rx;case 35679:case 36299:case 36307:return ax;case 35680:case 36300:case 36308:case 36293:return ox;case 36289:case 36303:case 36311:case 36292:return lx}}function Vd(i,e){i.seq.push(e),i.map[e.id]=e}function hx(i,e,t){let n=i.name,s=n.length;for(Pl.lastIndex=0;;){let r=Pl.exec(n),a=Pl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Vd(t,c===void 0?new $l(o,i,e):new Yl(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Zl(o),Vd(t,d)),t=d}}}function Wd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function fx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function px(i){let e=ct.getPrimaries(ct.workingColorSpace),t=ct.getPrimaries(i),n;switch(e===t?n="":e===Da&&t===Ia?n="LinearDisplayP3ToLinearSRGB":e===Ia&&t===Da&&(n="LinearSRGBToLinearDisplayP3"),i){case ni:case io:return[n,"LinearTransferOETF"];case mt:case Pc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function qd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+fx(i.getShaderSource(e),a)}else return s}function mx(i,e){let t=px(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function gx(i,e){let t;switch(e){case Np:t="Linear";break;case kp:t="Reinhard";break;case Up:t="OptimizedCineon";break;case Op:t="ACESFilmic";break;case Bp:t="AgX";break;case Fp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function yx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(As).join(`
`)}function xx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(As).join(`
`)}function _x(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function As(i){return i!==""}function Xd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $d(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Jl(i){return i.replace(Mx,Sx)}function Sx(i,e){let t=qe[e];if(t===void 0){let n=bx.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Jl(t)}function Yd(i){return i.replace(wx,Ex)}function Ex(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zd(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Tc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function Ax(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Is:case Ds:e="ENVMAP_TYPE_CUBE";break;case no:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rx(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ds&&(e="ENVMAP_MODE_REFRACTION"),e}function Cx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rc:e="ENVMAP_BLENDING_MULTIPLY";break;case Ip:e="ENVMAP_BLENDING_MIX";break;case Dp:e="ENVMAP_BLENDING_ADD";break}return e}function Px(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Lx(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Tx(t),c=Ax(t),h=Rx(t),d=Cx(t),u=Px(t),f=t.isWebGL2?"":yx(t),g=xx(t),y=_x(r),m=s.createProgram(),p,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(As).join(`
`),p.length>0&&(p+=`
`),v=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(As).join(`
`),v.length>0&&(v+=`
`)):(p=[Zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),v=[f,Zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?qe.tonemapping_pars_fragment:"",t.toneMapping!==vi?gx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,mx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(As).join(`
`)),a=Jl(a),a=Xd(a,t),a=$d(a,t),o=Jl(o),o=Xd(o,t),o=$d(o,t),a=Yd(a),o=Yd(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let S=x+p+a,R=x+v+o,T=Wd(s,s.VERTEX_SHADER,S),b=Wd(s,s.FRAGMENT_SHADER,R);s.attachShader(m,T),s.attachShader(m,b),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function C(O){if(i.debug.checkShaderErrors){let K=s.getProgramInfoLog(m).trim(),I=s.getShaderInfoLog(T).trim(),F=s.getShaderInfoLog(b).trim(),$=!0,J=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,T,b);else{let Z=qd(s,T,"vertex"),Y=qd(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+Z+`
`+Y)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(I===""||F==="")&&(J=!1);J&&(O.diagnostics={runnable:$,programLog:K,vertexShader:{log:I,prefix:p},fragmentShader:{log:F,prefix:v}})}s.deleteShader(T),s.deleteShader(b),_=new Ls(s,m),M=vx(s,m)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(m,dx)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ux++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=b,this}function Dx(i,e,t,n,s,r,a){let o=new Sr,l=new jl,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(_){return _===0?"uv":`uv${_}`}function m(_,M,D,O,K){let I=O.fog,F=K.geometry,$=_.isMeshStandardMaterial?O.environment:null,J=(_.isMeshStandardMaterial?t:e).get(_.envMap||$),Z=J&&J.mapping===no?J.image.height:null,Y=g[_.type];_.precision!==null&&(f=s.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let ee=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,se=ee!==void 0?ee.length:0,ce=0;F.morphAttributes.position!==void 0&&(ce=1),F.morphAttributes.normal!==void 0&&(ce=2),F.morphAttributes.color!==void 0&&(ce=3);let X,j,le,Ae;if(Y){let tn=zn[Y];X=tn.vertexShader,j=tn.fragmentShader}else X=_.vertexShader,j=_.fragmentShader,l.update(_),le=l.getVertexShaderID(_),Ae=l.getFragmentShaderID(_);let we=i.getRenderTarget(),He=K.isInstancedMesh===!0,Ve=K.isBatchedMesh===!0,Ne=!!_.map,it=!!_.matcap,z=!!J,en=!!_.aoMap,Ce=!!_.lightMap,Be=!!_.bumpMap,ve=!!_.normalMap,xt=!!_.displacementMap,Xe=!!_.emissiveMap,A=!!_.metalnessMap,w=!!_.roughnessMap,G=_.anisotropy>0,ie=_.clearcoat>0,ne=_.iridescence>0,re=_.sheen>0,Me=_.transmission>0,ue=G&&!!_.anisotropyMap,xe=ie&&!!_.clearcoatMap,De=ie&&!!_.clearcoatNormalMap,$e=ie&&!!_.clearcoatRoughnessMap,te=ne&&!!_.iridescenceMap,lt=ne&&!!_.iridescenceThicknessMap,Ke=re&&!!_.sheenColorMap,Fe=re&&!!_.sheenRoughnessMap,Re=!!_.specularMap,_e=!!_.specularColorMap,We=!!_.specularIntensityMap,ot=Me&&!!_.transmissionMap,bt=Me&&!!_.thicknessMap,Ze=!!_.gradientMap,ae=!!_.alphaMap,P=_.alphaTest>0,he=!!_.alphaHash,de=!!_.extensions,ke=!!F.attributes.uv1,Pe=!!F.attributes.uv2,ht=!!F.attributes.uv3,dt=vi;return _.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(dt=i.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:j,defines:_.defines,customVertexShaderID:le,customFragmentShaderID:Ae,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Ve,instancing:He,instancingColor:He&&K.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:we===null?i.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:ni,map:Ne,matcap:it,envMap:z,envMapMode:z&&J.mapping,envMapCubeUVHeight:Z,aoMap:en,lightMap:Ce,bumpMap:Be,normalMap:ve,displacementMap:u&&xt,emissiveMap:Xe,normalMapObjectSpace:ve&&_.normalMapType===jp,normalMapTangentSpace:ve&&_.normalMapType===_u,metalnessMap:A,roughnessMap:w,anisotropy:G,anisotropyMap:ue,clearcoat:ie,clearcoatMap:xe,clearcoatNormalMap:De,clearcoatRoughnessMap:$e,iridescence:ne,iridescenceMap:te,iridescenceThicknessMap:lt,sheen:re,sheenColorMap:Ke,sheenRoughnessMap:Fe,specularMap:Re,specularColorMap:_e,specularIntensityMap:We,transmission:Me,transmissionMap:ot,thicknessMap:bt,gradientMap:Ze,opaque:_.transparent===!1&&_.blending===Cs,alphaMap:ae,alphaTest:P,alphaHash:he,combine:_.combine,mapUv:Ne&&y(_.map.channel),aoMapUv:en&&y(_.aoMap.channel),lightMapUv:Ce&&y(_.lightMap.channel),bumpMapUv:Be&&y(_.bumpMap.channel),normalMapUv:ve&&y(_.normalMap.channel),displacementMapUv:xt&&y(_.displacementMap.channel),emissiveMapUv:Xe&&y(_.emissiveMap.channel),metalnessMapUv:A&&y(_.metalnessMap.channel),roughnessMapUv:w&&y(_.roughnessMap.channel),anisotropyMapUv:ue&&y(_.anisotropyMap.channel),clearcoatMapUv:xe&&y(_.clearcoatMap.channel),clearcoatNormalMapUv:De&&y(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$e&&y(_.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&y(_.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&y(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&y(_.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&y(_.sheenRoughnessMap.channel),specularMapUv:Re&&y(_.specularMap.channel),specularColorMapUv:_e&&y(_.specularColorMap.channel),specularIntensityMapUv:We&&y(_.specularIntensityMap.channel),transmissionMapUv:ot&&y(_.transmissionMap.channel),thicknessMapUv:bt&&y(_.thicknessMap.channel),alphaMapUv:ae&&y(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ve||G),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:ke,vertexUv2s:Pe,vertexUv3s:ht,pointsUvs:K.isPoints===!0&&!!F.attributes.uv&&(Ne||ae),fog:!!I,useFog:_.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:K.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ce,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ne&&_.map.isVideoTexture===!0&&ct.getTransfer(_.map.colorSpace)===pt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Vt,flipSided:_.side===ln,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:de&&_.extensions.derivatives===!0,extensionFragDepth:de&&_.extensions.fragDepth===!0,extensionDrawBuffers:de&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&_.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)M.push(D),M.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(v(M,_),x(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function v(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function x(_,M){o.disableAll(),M.isWebGL2&&o.enable(0),M.supportsVertexTextures&&o.enable(1),M.instancing&&o.enable(2),M.instancingColor&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),_.push(o.mask)}function S(_){let M=g[_.type],D;if(M){let O=zn[M];D=bm.clone(O.uniforms)}else D=_.uniforms;return D}function R(_,M){let D;for(let O=0,K=c.length;O<K;O++){let I=c[O];if(I.cacheKey===M){D=I,++D.usedTimes;break}}return D===void 0&&(D=new Lx(i,M,_,r),c.push(D)),D}function T(_){if(--_.usedTimes===0){let M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),_.destroy()}}function b(_){l.remove(_)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:R,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:C}}function Nx(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function kx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Jd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function jd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,u,f,g,y,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=y,p.group=m),e++,p}function o(d,u,f,g,y,m){let p=a(d,u,f,g,y,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,u,f,g,y,m){let p=a(d,u,f,g,y,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||kx),n.length>1&&n.sort(u||Jd),s.length>1&&s.sort(u||Jd)}function h(){for(let d=e,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Ux(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new jd,i.set(n,[a])):s>=r.length?(a=new jd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ox(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Le};break;case"SpotLight":t={position:new L,direction:new L,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Fx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function zx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Hx(i,e){let t=new Ox,n=Fx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new L);let r=new L,a=new yt,o=new yt;function l(h,d){let u=0,f=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let y=0,m=0,p=0,v=0,x=0,S=0,R=0,T=0,b=0,C=0,_=0;h.sort(zx);let M=d===!0?Math.PI:1;for(let O=0,K=h.length;O<K;O++){let I=h[O],F=I.color,$=I.intensity,J=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=F.r*$*M,f+=F.g*$*M,g+=F.b*$*M;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(I.sh.coefficients[Y],$);_++}else if(I.isDirectionalLight){let Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*M),I.castShadow){let ee=I.shadow,se=n.get(I);se.shadowBias=ee.bias,se.shadowNormalBias=ee.normalBias,se.shadowRadius=ee.radius,se.shadowMapSize=ee.mapSize,s.directionalShadow[y]=se,s.directionalShadowMap[y]=Z,s.directionalShadowMatrix[y]=I.shadow.matrix,S++}s.directional[y]=Y,y++}else if(I.isSpotLight){let Y=t.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(F).multiplyScalar($*M),Y.distance=J,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,s.spot[p]=Y;let ee=I.shadow;if(I.map&&(s.spotLightMap[b]=I.map,b++,ee.updateMatrices(I),I.castShadow&&C++),s.spotLightMatrix[p]=ee.matrix,I.castShadow){let se=n.get(I);se.shadowBias=ee.bias,se.shadowNormalBias=ee.normalBias,se.shadowRadius=ee.radius,se.shadowMapSize=ee.mapSize,s.spotShadow[p]=se,s.spotShadowMap[p]=Z,T++}p++}else if(I.isRectAreaLight){let Y=t.get(I);Y.color.copy(F).multiplyScalar($),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),s.rectArea[v]=Y,v++}else if(I.isPointLight){let Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*M),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){let ee=I.shadow,se=n.get(I);se.shadowBias=ee.bias,se.shadowNormalBias=ee.normalBias,se.shadowRadius=ee.radius,se.shadowMapSize=ee.mapSize,se.shadowCameraNear=ee.camera.near,se.shadowCameraFar=ee.camera.far,s.pointShadow[m]=se,s.pointShadowMap[m]=Z,s.pointShadowMatrix[m]=I.shadow.matrix,R++}s.point[m]=Y,m++}else if(I.isHemisphereLight){let Y=t.get(I);Y.skyColor.copy(I.color).multiplyScalar($*M),Y.groundColor.copy(I.groundColor).multiplyScalar($*M),s.hemi[x]=Y,x++}}v>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=oe.LTC_FLOAT_1,s.rectAreaLTC2=oe.LTC_FLOAT_2):(s.rectAreaLTC1=oe.LTC_HALF_1,s.rectAreaLTC2=oe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=oe.LTC_FLOAT_1,s.rectAreaLTC2=oe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=oe.LTC_HALF_1,s.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=f,s.ambient[2]=g;let D=s.hash;(D.directionalLength!==y||D.pointLength!==m||D.spotLength!==p||D.rectAreaLength!==v||D.hemiLength!==x||D.numDirectionalShadows!==S||D.numPointShadows!==R||D.numSpotShadows!==T||D.numSpotMaps!==b||D.numLightProbes!==_)&&(s.directional.length=y,s.spot.length=p,s.rectArea.length=v,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=T+b-C,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=C,s.numLightProbes=_,D.directionalLength=y,D.pointLength=m,D.spotLength=p,D.rectAreaLength=v,D.hemiLength=x,D.numDirectionalShadows=S,D.numPointShadows=R,D.numSpotShadows=T,D.numSpotMaps=b,D.numLightProbes=_,s.version=Bx++)}function c(h,d){let u=0,f=0,g=0,y=0,m=0,p=d.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){let S=h[v];if(S.isDirectionalLight){let R=s.directional[u];R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),u++}else if(S.isSpotLight){let R=s.spot[g];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),g++}else if(S.isRectAreaLight){let R=s.rectArea[y];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(p),o.identity(),a.copy(S.matrixWorld),a.premultiply(p),o.extractRotation(a),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),y++}else if(S.isPointLight){let R=s.point[f];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){let R=s.hemi[m];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function Kd(i,e){let t=new Hx(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(d){n.push(d)}function o(d){s.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Gx(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new Kd(i,e),t.set(r,[l])):a>=o.length?(l=new Kd(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}function qx(i,e,t){let n=new wr,s=new pe,r=new pe,a=new Wt,o=new Ql({depthPacking:Jp}),l=new ec,c={},h=t.maxTextureSize,d={[bi]:ln,[ln]:bi,[Vt]:Vt},u=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:Vx,fragmentShader:Wx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Yt;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ee(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cu;let p=this.type;this.render=function(T,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let _=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending(_i),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let K=p!==ei&&this.type===ei,I=p===ei&&this.type!==ei;for(let F=0,$=T.length;F<$;F++){let J=T[F],Z=J.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let Y=Z.getFrameExtents();if(s.multiply(Y),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,Z.mapSize.y=r.y)),Z.map===null||K===!0||I===!0){let se=this.type!==ei?{minFilter:rn,magFilter:rn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new ii(s.x,s.y,se),Z.map.texture.name=J.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let ee=Z.getViewportCount();for(let se=0;se<ee;se++){let ce=Z.getViewport(se);a.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),O.viewport(a),Z.updateMatrices(J,se),n=Z.getFrustum(),S(b,C,Z.camera,J,this.type)}Z.isPointLightShadow!==!0&&this.type===ei&&v(Z,C),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(_,M,D)};function v(T,b){let C=e.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ii(s.x,s.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(b,null,C,u,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(b,null,C,f,y,null)}function x(T,b,C,_){let M=null,D=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)M=D;else if(M=C.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let O=M.uuid,K=b.uuid,I=c[O];I===void 0&&(I={},c[O]=I);let F=I[K];F===void 0&&(F=M.clone(),I[K]=F,b.addEventListener("dispose",R)),M=F}if(M.visible=b.visible,M.wireframe=b.wireframe,_===ei?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:d[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let O=i.properties.get(M);O.light=C}return M}function S(T,b,C,_,M){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===ei)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let K=e.update(T),I=T.material;if(Array.isArray(I)){let F=K.groups;for(let $=0,J=F.length;$<J;$++){let Z=F[$],Y=I[Z.materialIndex];if(Y&&Y.visible){let ee=x(T,Y,_,M);T.onBeforeShadow(i,T,b,C,K,ee,Z),i.renderBufferDirect(C,null,K,ee,T,Z),T.onAfterShadow(i,T,b,C,K,ee,Z)}}}else if(I.visible){let F=x(T,I,_,M);T.onBeforeShadow(i,T,b,C,K,F,null),i.renderBufferDirect(C,null,K,F,T,null),T.onAfterShadow(i,T,b,C,K,F,null)}}let O=T.children;for(let K=0,I=O.length;K<I;K++)S(O[K],b,C,_,M)}function R(T){T.target.removeEventListener("dispose",R);for(let C in c){let _=c[C],M=T.target.uuid;M in _&&(_[M].dispose(),delete _[M])}}}function Xx(i,e,t){let n=t.isWebGL2;function s(){let P=!1,he=new Wt,de=null,ke=new Wt(0,0,0,0);return{setMask:function(Pe){de!==Pe&&!P&&(i.colorMask(Pe,Pe,Pe,Pe),de=Pe)},setLocked:function(Pe){P=Pe},setClear:function(Pe,ht,dt,zt,tn){tn===!0&&(Pe*=zt,ht*=zt,dt*=zt),he.set(Pe,ht,dt,zt),ke.equals(he)===!1&&(i.clearColor(Pe,ht,dt,zt),ke.copy(he))},reset:function(){P=!1,de=null,ke.set(-1,0,0,0)}}}function r(){let P=!1,he=null,de=null,ke=null;return{setTest:function(Pe){Pe?Ve(i.DEPTH_TEST):Ne(i.DEPTH_TEST)},setMask:function(Pe){he!==Pe&&!P&&(i.depthMask(Pe),he=Pe)},setFunc:function(Pe){if(de!==Pe){switch(Pe){case Tp:i.depthFunc(i.NEVER);break;case Ap:i.depthFunc(i.ALWAYS);break;case Rp:i.depthFunc(i.LESS);break;case Ra:i.depthFunc(i.LEQUAL);break;case Cp:i.depthFunc(i.EQUAL);break;case Pp:i.depthFunc(i.GEQUAL);break;case Ac:i.depthFunc(i.GREATER);break;case Lp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=Pe}},setLocked:function(Pe){P=Pe},setClear:function(Pe){ke!==Pe&&(i.clearDepth(Pe),ke=Pe)},reset:function(){P=!1,he=null,de=null,ke=null}}}function a(){let P=!1,he=null,de=null,ke=null,Pe=null,ht=null,dt=null,zt=null,tn=null;return{setTest:function(ut){P||(ut?Ve(i.STENCIL_TEST):Ne(i.STENCIL_TEST))},setMask:function(ut){he!==ut&&!P&&(i.stencilMask(ut),he=ut)},setFunc:function(ut,nn,Bn){(de!==ut||ke!==nn||Pe!==Bn)&&(i.stencilFunc(ut,nn,Bn),de=ut,ke=nn,Pe=Bn)},setOp:function(ut,nn,Bn){(ht!==ut||dt!==nn||zt!==Bn)&&(i.stencilOp(ut,nn,Bn),ht=ut,dt=nn,zt=Bn)},setLocked:function(ut){P=ut},setClear:function(ut){tn!==ut&&(i.clearStencil(ut),tn=ut)},reset:function(){P=!1,he=null,de=null,ke=null,Pe=null,ht=null,dt=null,zt=null,tn=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,d=new WeakMap,u={},f={},g=new WeakMap,y=[],m=null,p=!1,v=null,x=null,S=null,R=null,T=null,b=null,C=null,_=new Le(0,0,0),M=0,D=!1,O=null,K=null,I=null,F=null,$=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,Y=0,ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ee)[1]),Z=Y>=1):ee.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),Z=Y>=2);let se=null,ce={},X=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),le=new Wt().fromArray(X),Ae=new Wt().fromArray(j);function we(P,he,de,ke){let Pe=new Uint8Array(4),ht=i.createTexture();i.bindTexture(P,ht),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let dt=0;dt<de;dt++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(he,0,i.RGBA,1,1,ke,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(he+dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return ht}let He={};He[i.TEXTURE_2D]=we(i.TEXTURE_2D,i.TEXTURE_2D,1),He[i.TEXTURE_CUBE_MAP]=we(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(He[i.TEXTURE_2D_ARRAY]=we(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),He[i.TEXTURE_3D]=we(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ve(i.DEPTH_TEST),l.setFunc(Ra),Xe(!1),A(Ih),Ve(i.CULL_FACE),ve(_i);function Ve(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function Ne(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function it(P,he){return f[P]!==he?(i.bindFramebuffer(P,he),f[P]=he,n&&(P===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=he),P===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=he)),!0):!1}function z(P,he){let de=y,ke=!1;if(P)if(de=g.get(he),de===void 0&&(de=[],g.set(he,de)),P.isWebGLMultipleRenderTargets){let Pe=P.texture;if(de.length!==Pe.length||de[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,dt=Pe.length;ht<dt;ht++)de[ht]=i.COLOR_ATTACHMENT0+ht;de.length=Pe.length,ke=!0}}else de[0]!==i.COLOR_ATTACHMENT0&&(de[0]=i.COLOR_ATTACHMENT0,ke=!0);else de[0]!==i.BACK&&(de[0]=i.BACK,ke=!0);ke&&(t.isWebGL2?i.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function en(P){return m!==P?(i.useProgram(P),m=P,!0):!1}let Ce={[zi]:i.FUNC_ADD,[dp]:i.FUNC_SUBTRACT,[up]:i.FUNC_REVERSE_SUBTRACT};if(n)Ce[kh]=i.MIN,Ce[Uh]=i.MAX;else{let P=e.get("EXT_blend_minmax");P!==null&&(Ce[kh]=P.MIN_EXT,Ce[Uh]=P.MAX_EXT)}let Be={[fp]:i.ZERO,[pp]:i.ONE,[mp]:i.SRC_COLOR,[kl]:i.SRC_ALPHA,[Mp]:i.SRC_ALPHA_SATURATE,[_p]:i.DST_COLOR,[yp]:i.DST_ALPHA,[gp]:i.ONE_MINUS_SRC_COLOR,[Ul]:i.ONE_MINUS_SRC_ALPHA,[vp]:i.ONE_MINUS_DST_COLOR,[xp]:i.ONE_MINUS_DST_ALPHA,[bp]:i.CONSTANT_COLOR,[Sp]:i.ONE_MINUS_CONSTANT_COLOR,[wp]:i.CONSTANT_ALPHA,[Ep]:i.ONE_MINUS_CONSTANT_ALPHA};function ve(P,he,de,ke,Pe,ht,dt,zt,tn,ut){if(P===_i){p===!0&&(Ne(i.BLEND),p=!1);return}if(p===!1&&(Ve(i.BLEND),p=!0),P!==hp){if(P!==v||ut!==D){if((x!==zi||T!==zi)&&(i.blendEquation(i.FUNC_ADD),x=zi,T=zi),ut)switch(P){case Cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _r:i.blendFunc(i.ONE,i.ONE);break;case Dh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _r:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Dh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,R=null,b=null,C=null,_.set(0,0,0),M=0,v=P,D=ut}return}Pe=Pe||he,ht=ht||de,dt=dt||ke,(he!==x||Pe!==T)&&(i.blendEquationSeparate(Ce[he],Ce[Pe]),x=he,T=Pe),(de!==S||ke!==R||ht!==b||dt!==C)&&(i.blendFuncSeparate(Be[de],Be[ke],Be[ht],Be[dt]),S=de,R=ke,b=ht,C=dt),(zt.equals(_)===!1||tn!==M)&&(i.blendColor(zt.r,zt.g,zt.b,tn),_.copy(zt),M=tn),v=P,D=!1}function xt(P,he){P.side===Vt?Ne(i.CULL_FACE):Ve(i.CULL_FACE);let de=P.side===ln;he&&(de=!de),Xe(de),P.blending===Cs&&P.transparent===!1?ve(_i):ve(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);let ke=P.stencilWrite;c.setTest(ke),ke&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),G(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ve(i.SAMPLE_ALPHA_TO_COVERAGE):Ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(P){O!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),O=P)}function A(P){P!==lp?(Ve(i.CULL_FACE),P!==K&&(P===Ih?i.cullFace(i.BACK):P===cp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ne(i.CULL_FACE),K=P}function w(P){P!==I&&(Z&&i.lineWidth(P),I=P)}function G(P,he,de){P?(Ve(i.POLYGON_OFFSET_FILL),(F!==he||$!==de)&&(i.polygonOffset(he,de),F=he,$=de)):Ne(i.POLYGON_OFFSET_FILL)}function ie(P){P?Ve(i.SCISSOR_TEST):Ne(i.SCISSOR_TEST)}function ne(P){P===void 0&&(P=i.TEXTURE0+J-1),se!==P&&(i.activeTexture(P),se=P)}function re(P,he,de){de===void 0&&(se===null?de=i.TEXTURE0+J-1:de=se);let ke=ce[de];ke===void 0&&(ke={type:void 0,texture:void 0},ce[de]=ke),(ke.type!==P||ke.texture!==he)&&(se!==de&&(i.activeTexture(de),se=de),i.bindTexture(P,he||He[P]),ke.type=P,ke.texture=he)}function Me(){let P=ce[se];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ue(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function De(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $e(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function lt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ke(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Fe(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function We(P){le.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),le.copy(P))}function ot(P){Ae.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Ae.copy(P))}function bt(P,he){let de=d.get(he);de===void 0&&(de=new WeakMap,d.set(he,de));let ke=de.get(P);ke===void 0&&(ke=i.getUniformBlockIndex(he,P.name),de.set(P,ke))}function Ze(P,he){let ke=d.get(he).get(P);h.get(he)!==ke&&(i.uniformBlockBinding(he,ke,P.__bindingPointIndex),h.set(he,ke))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},se=null,ce={},f={},g=new WeakMap,y=[],m=null,p=!1,v=null,x=null,S=null,R=null,T=null,b=null,C=null,_=new Le(0,0,0),M=0,D=!1,O=null,K=null,I=null,F=null,$=null,le.set(0,0,i.canvas.width,i.canvas.height),Ae.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ve,disable:Ne,bindFramebuffer:it,drawBuffers:z,useProgram:en,setBlending:ve,setMaterial:xt,setFlipSided:Xe,setCullFace:A,setLineWidth:w,setPolygonOffset:G,setScissorTest:ie,activeTexture:ne,bindTexture:re,unbindTexture:Me,compressedTexImage2D:ue,compressedTexImage3D:xe,texImage2D:Re,texImage3D:_e,updateUBOMapping:bt,uniformBlockBinding:Ze,texStorage2D:Ke,texStorage3D:Fe,texSubImage2D:De,texSubImage3D:$e,compressedTexSubImage2D:te,compressedTexSubImage3D:lt,scissor:We,viewport:ot,reset:ae}}function $x(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,w){return f?new OffscreenCanvas(A,w):ka("canvas")}function y(A,w,G,ie){let ne=1;if((A.width>ie||A.height>ie)&&(ne=ie/Math.max(A.width,A.height)),ne<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let re=w?Gl:Math.floor,Me=re(ne*A.width),ue=re(ne*A.height);d===void 0&&(d=g(Me,ue));let xe=G?g(Me,ue):d;return xe.width=Me,xe.height=ue,xe.getContext("2d").drawImage(A,0,0,Me,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Me+"x"+ue+")."),xe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return md(A.width)&&md(A.height)}function p(A){return o?!1:A.wrapS!==In||A.wrapT!==In||A.minFilter!==rn&&A.minFilter!==wn}function v(A,w){return A.generateMipmaps&&w&&A.minFilter!==rn&&A.minFilter!==wn}function x(A){i.generateMipmap(A)}function S(A,w,G,ie,ne=!1){if(o===!1)return w;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let re=w;if(w===i.RED&&(G===i.FLOAT&&(re=i.R32F),G===i.HALF_FLOAT&&(re=i.R16F),G===i.UNSIGNED_BYTE&&(re=i.R8)),w===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(re=i.R8UI),G===i.UNSIGNED_SHORT&&(re=i.R16UI),G===i.UNSIGNED_INT&&(re=i.R32UI),G===i.BYTE&&(re=i.R8I),G===i.SHORT&&(re=i.R16I),G===i.INT&&(re=i.R32I)),w===i.RG&&(G===i.FLOAT&&(re=i.RG32F),G===i.HALF_FLOAT&&(re=i.RG16F),G===i.UNSIGNED_BYTE&&(re=i.RG8)),w===i.RGBA){let Me=ne?La:ct.getTransfer(ie);G===i.FLOAT&&(re=i.RGBA32F),G===i.HALF_FLOAT&&(re=i.RGBA16F),G===i.UNSIGNED_BYTE&&(re=Me===pt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function R(A,w,G){return v(A,G)===!0||A.isFramebufferTexture&&A.minFilter!==rn&&A.minFilter!==wn?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function T(A){return A===rn||A===Oh||A===el?i.NEAREST:i.LINEAR}function b(A){let w=A.target;w.removeEventListener("dispose",b),_(w),w.isVideoTexture&&h.delete(w)}function C(A){let w=A.target;w.removeEventListener("dispose",C),D(w)}function _(A){let w=n.get(A);if(w.__webglInit===void 0)return;let G=A.source,ie=u.get(G);if(ie){let ne=ie[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&M(A),Object.keys(ie).length===0&&u.delete(G)}n.remove(A)}function M(A){let w=n.get(A);i.deleteTexture(w.__webglTexture);let G=A.source,ie=u.get(G);delete ie[w.__cacheKey],a.memory.textures--}function D(A){let w=A.texture,G=n.get(A),ie=n.get(w);if(ie.__webglTexture!==void 0&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(G.__webglFramebuffer[ne]))for(let re=0;re<G.__webglFramebuffer[ne].length;re++)i.deleteFramebuffer(G.__webglFramebuffer[ne][re]);else i.deleteFramebuffer(G.__webglFramebuffer[ne]);G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer[ne])}else{if(Array.isArray(G.__webglFramebuffer))for(let ne=0;ne<G.__webglFramebuffer.length;ne++)i.deleteFramebuffer(G.__webglFramebuffer[ne]);else i.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&i.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ne=0;ne<G.__webglColorRenderbuffer.length;ne++)G.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(G.__webglColorRenderbuffer[ne]);G.__webglDepthRenderbuffer&&i.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ne=0,re=w.length;ne<re;ne++){let Me=n.get(w[ne]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),a.memory.textures--),n.remove(w[ne])}n.remove(w),n.remove(A)}let O=0;function K(){O=0}function I(){let A=O;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),O+=1,A}function F(A){let w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function $(A,w){let G=n.get(A);if(A.isVideoTexture&&xt(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){let ie=A.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(G,A,w);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+w)}function J(A,w){let G=n.get(A);if(A.version>0&&G.__version!==A.version){le(G,A,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+w)}function Z(A,w){let G=n.get(A);if(A.version>0&&G.__version!==A.version){le(G,A,w);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+w)}function Y(A,w){let G=n.get(A);if(A.version>0&&G.__version!==A.version){Ae(G,A,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+w)}let ee={[vr]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[Bl]:i.MIRRORED_REPEAT},se={[rn]:i.NEAREST,[Oh]:i.NEAREST_MIPMAP_NEAREST,[el]:i.NEAREST_MIPMAP_LINEAR,[wn]:i.LINEAR,[zp]:i.LINEAR_MIPMAP_NEAREST,[Mr]:i.LINEAR_MIPMAP_LINEAR},ce={[Kp]:i.NEVER,[sm]:i.ALWAYS,[Qp]:i.LESS,[vu]:i.LEQUAL,[em]:i.EQUAL,[im]:i.GEQUAL,[tm]:i.GREATER,[nm]:i.NOTEQUAL};function X(A,w,G){if(G?(i.texParameteri(A,i.TEXTURE_WRAP_S,ee[w.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ee[w.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ee[w.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,se[w.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,se[w.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(w.wrapS!==In||w.wrapT!==In)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,T(w.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,T(w.minFilter)),w.minFilter!==rn&&w.minFilter!==wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ce[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ie=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===rn||w.minFilter!==el&&w.minFilter!==Mr||w.type===xi&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===br&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(i.texParameterf(A,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function j(A,w){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",b));let ie=w.source,ne=u.get(ie);ne===void 0&&(ne={},u.set(ie,ne));let re=F(w);if(re!==A.__cacheKey){ne[re]===void 0&&(ne[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ne[re].usedTimes++;let Me=ne[A.__cacheKey];Me!==void 0&&(ne[A.__cacheKey].usedTimes--,Me.usedTimes===0&&M(w)),A.__cacheKey=re,A.__webglTexture=ne[re].texture}return G}function le(A,w,G){let ie=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ie=i.TEXTURE_3D);let ne=j(A,w),re=w.source;t.bindTexture(ie,A.__webglTexture,i.TEXTURE0+G);let Me=n.get(re);if(re.version!==Me.__version||ne===!0){t.activeTexture(i.TEXTURE0+G);let ue=ct.getPrimaries(ct.workingColorSpace),xe=w.colorSpace===En?null:ct.getPrimaries(w.colorSpace),De=w.colorSpace===En||ue===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let $e=p(w)&&m(w.image)===!1,te=y(w.image,$e,!1,s.maxTextureSize);te=Xe(w,te);let lt=m(te)||o,Ke=r.convert(w.format,w.colorSpace),Fe=r.convert(w.type),Re=S(w.internalFormat,Ke,Fe,w.colorSpace,w.isVideoTexture);X(ie,w,lt);let _e,We=w.mipmaps,ot=o&&w.isVideoTexture!==!0&&Re!==yu,bt=Me.__version===void 0||ne===!0,Ze=R(w,te,lt);if(w.isDepthTexture)Re=i.DEPTH_COMPONENT,o?w.type===xi?Re=i.DEPTH_COMPONENT32F:w.type===yi?Re=i.DEPTH_COMPONENT24:w.type===Gi?Re=i.DEPTH24_STENCIL8:Re=i.DEPTH_COMPONENT16:w.type===xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Vi&&Re===i.DEPTH_COMPONENT&&w.type!==Cc&&w.type!==yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=yi,Fe=r.convert(w.type)),w.format===Ns&&Re===i.DEPTH_COMPONENT&&(Re=i.DEPTH_STENCIL,w.type!==Gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Gi,Fe=r.convert(w.type))),bt&&(ot?t.texStorage2D(i.TEXTURE_2D,1,Re,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Re,te.width,te.height,0,Ke,Fe,null));else if(w.isDataTexture)if(We.length>0&&lt){ot&&bt&&t.texStorage2D(i.TEXTURE_2D,Ze,Re,We[0].width,We[0].height);for(let ae=0,P=We.length;ae<P;ae++)_e=We[ae],ot?t.texSubImage2D(i.TEXTURE_2D,ae,0,0,_e.width,_e.height,Ke,Fe,_e.data):t.texImage2D(i.TEXTURE_2D,ae,Re,_e.width,_e.height,0,Ke,Fe,_e.data);w.generateMipmaps=!1}else ot?(bt&&t.texStorage2D(i.TEXTURE_2D,Ze,Re,te.width,te.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,te.width,te.height,Ke,Fe,te.data)):t.texImage2D(i.TEXTURE_2D,0,Re,te.width,te.height,0,Ke,Fe,te.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ot&&bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ze,Re,We[0].width,We[0].height,te.depth);for(let ae=0,P=We.length;ae<P;ae++)_e=We[ae],w.format!==Dn?Ke!==null?ot?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,_e.width,_e.height,te.depth,Ke,_e.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,Re,_e.width,_e.height,te.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,_e.width,_e.height,te.depth,Ke,Fe,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,Re,_e.width,_e.height,te.depth,0,Ke,Fe,_e.data)}else{ot&&bt&&t.texStorage2D(i.TEXTURE_2D,Ze,Re,We[0].width,We[0].height);for(let ae=0,P=We.length;ae<P;ae++)_e=We[ae],w.format!==Dn?Ke!==null?ot?t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,_e.width,_e.height,Ke,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,Re,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?t.texSubImage2D(i.TEXTURE_2D,ae,0,0,_e.width,_e.height,Ke,Fe,_e.data):t.texImage2D(i.TEXTURE_2D,ae,Re,_e.width,_e.height,0,Ke,Fe,_e.data)}else if(w.isDataArrayTexture)ot?(bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ze,Re,te.width,te.height,te.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Ke,Fe,te.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,te.width,te.height,te.depth,0,Ke,Fe,te.data);else if(w.isData3DTexture)ot?(bt&&t.texStorage3D(i.TEXTURE_3D,Ze,Re,te.width,te.height,te.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Ke,Fe,te.data)):t.texImage3D(i.TEXTURE_3D,0,Re,te.width,te.height,te.depth,0,Ke,Fe,te.data);else if(w.isFramebufferTexture){if(bt)if(ot)t.texStorage2D(i.TEXTURE_2D,Ze,Re,te.width,te.height);else{let ae=te.width,P=te.height;for(let he=0;he<Ze;he++)t.texImage2D(i.TEXTURE_2D,he,Re,ae,P,0,Ke,Fe,null),ae>>=1,P>>=1}}else if(We.length>0&&lt){ot&&bt&&t.texStorage2D(i.TEXTURE_2D,Ze,Re,We[0].width,We[0].height);for(let ae=0,P=We.length;ae<P;ae++)_e=We[ae],ot?t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Ke,Fe,_e):t.texImage2D(i.TEXTURE_2D,ae,Re,Ke,Fe,_e);w.generateMipmaps=!1}else ot?(bt&&t.texStorage2D(i.TEXTURE_2D,Ze,Re,te.width,te.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ke,Fe,te)):t.texImage2D(i.TEXTURE_2D,0,Re,Ke,Fe,te);v(w,lt)&&x(ie),Me.__version=re.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function Ae(A,w,G){if(w.image.length!==6)return;let ie=j(A,w),ne=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+G);let re=n.get(ne);if(ne.version!==re.__version||ie===!0){t.activeTexture(i.TEXTURE0+G);let Me=ct.getPrimaries(ct.workingColorSpace),ue=w.colorSpace===En?null:ct.getPrimaries(w.colorSpace),xe=w.colorSpace===En||Me===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let De=w.isCompressedTexture||w.image[0].isCompressedTexture,$e=w.image[0]&&w.image[0].isDataTexture,te=[];for(let ae=0;ae<6;ae++)!De&&!$e?te[ae]=y(w.image[ae],!1,!0,s.maxCubemapSize):te[ae]=$e?w.image[ae].image:w.image[ae],te[ae]=Xe(w,te[ae]);let lt=te[0],Ke=m(lt)||o,Fe=r.convert(w.format,w.colorSpace),Re=r.convert(w.type),_e=S(w.internalFormat,Fe,Re,w.colorSpace),We=o&&w.isVideoTexture!==!0,ot=re.__version===void 0||ie===!0,bt=R(w,lt,Ke);X(i.TEXTURE_CUBE_MAP,w,Ke);let Ze;if(De){We&&ot&&t.texStorage2D(i.TEXTURE_CUBE_MAP,bt,_e,lt.width,lt.height);for(let ae=0;ae<6;ae++){Ze=te[ae].mipmaps;for(let P=0;P<Ze.length;P++){let he=Ze[P];w.format!==Dn?Fe!==null?We?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,P,0,0,he.width,he.height,Fe,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,P,_e,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,P,0,0,he.width,he.height,Fe,Re,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,P,_e,he.width,he.height,0,Fe,Re,he.data)}}}else{Ze=w.mipmaps,We&&ot&&(Ze.length>0&&bt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,bt,_e,te[0].width,te[0].height));for(let ae=0;ae<6;ae++)if($e){We?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,te[ae].width,te[ae].height,Fe,Re,te[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,_e,te[ae].width,te[ae].height,0,Fe,Re,te[ae].data);for(let P=0;P<Ze.length;P++){let de=Ze[P].image[ae].image;We?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,P+1,0,0,de.width,de.height,Fe,Re,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,P+1,_e,de.width,de.height,0,Fe,Re,de.data)}}else{We?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Fe,Re,te[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,_e,Fe,Re,te[ae]);for(let P=0;P<Ze.length;P++){let he=Ze[P];We?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,P+1,0,0,Fe,Re,he.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,P+1,_e,Fe,Re,he.image[ae])}}}v(w,Ke)&&x(i.TEXTURE_CUBE_MAP),re.__version=ne.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function we(A,w,G,ie,ne,re){let Me=r.convert(G.format,G.colorSpace),ue=r.convert(G.type),xe=S(G.internalFormat,Me,ue,G.colorSpace);if(!n.get(w).__hasExternalTextures){let $e=Math.max(1,w.width>>re),te=Math.max(1,w.height>>re);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,re,xe,$e,te,w.depth,0,Me,ue,null):t.texImage2D(ne,re,xe,$e,te,0,Me,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),ve(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ne,n.get(G).__webglTexture,0,Be(w)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,ne,n.get(G).__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(A,w,G){if(i.bindRenderbuffer(i.RENDERBUFFER,A),w.depthBuffer&&!w.stencilBuffer){let ie=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(G||ve(w)){let ne=w.depthTexture;ne&&ne.isDepthTexture&&(ne.type===xi?ie=i.DEPTH_COMPONENT32F:ne.type===yi&&(ie=i.DEPTH_COMPONENT24));let re=Be(w);ve(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,ie,w.width,w.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,re,ie,w.width,w.height)}else i.renderbufferStorage(i.RENDERBUFFER,ie,w.width,w.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(w.depthBuffer&&w.stencilBuffer){let ie=Be(w);G&&ve(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,w.width,w.height):ve(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{let ie=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ne=0;ne<ie.length;ne++){let re=ie[ne],Me=r.convert(re.format,re.colorSpace),ue=r.convert(re.type),xe=S(re.internalFormat,Me,ue,re.colorSpace),De=Be(w);G&&ve(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,De,xe,w.width,w.height):ve(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,De,xe,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,xe,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ve(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),$(w.depthTexture,0);let ie=n.get(w.depthTexture).__webglTexture,ne=Be(w);if(w.depthTexture.format===Vi)ve(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(w.depthTexture.format===Ns)ve(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ne(A){let w=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ve(w.__webglFramebuffer,A)}else if(G){w.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ie]),w.__webglDepthbuffer[ie]=i.createRenderbuffer(),He(w.__webglDepthbuffer[ie],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),He(w.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function it(A,w,G){let ie=n.get(A);w!==void 0&&we(ie.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Ne(A)}function z(A){let w=A.texture,G=n.get(A),ie=n.get(w);A.addEventListener("dispose",C),A.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=w.version,a.memory.textures++);let ne=A.isWebGLCubeRenderTarget===!0,re=A.isWebGLMultipleRenderTargets===!0,Me=m(A)||o;if(ne){G.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(o&&w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[ue]=[];for(let xe=0;xe<w.mipmaps.length;xe++)G.__webglFramebuffer[ue][xe]=i.createFramebuffer()}else G.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let ue=0;ue<w.mipmaps.length;ue++)G.__webglFramebuffer[ue]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(re)if(s.drawBuffers){let ue=A.texture;for(let xe=0,De=ue.length;xe<De;xe++){let $e=n.get(ue[xe]);$e.__webglTexture===void 0&&($e.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&ve(A)===!1){let ue=re?w:[w];G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let xe=0;xe<ue.length;xe++){let De=ue[xe];G.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[xe]);let $e=r.convert(De.format,De.colorSpace),te=r.convert(De.type),lt=S(De.internalFormat,$e,te,De.colorSpace,A.isXRRenderTarget===!0),Ke=Be(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke,lt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,G.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),He(G.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),X(i.TEXTURE_CUBE_MAP,w,Me);for(let ue=0;ue<6;ue++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let xe=0;xe<w.mipmaps.length;xe++)we(G.__webglFramebuffer[ue][xe],A,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,xe);else we(G.__webglFramebuffer[ue],A,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);v(w,Me)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){let ue=A.texture;for(let xe=0,De=ue.length;xe<De;xe++){let $e=ue[xe],te=n.get($e);t.bindTexture(i.TEXTURE_2D,te.__webglTexture),X(i.TEXTURE_2D,$e,Me),we(G.__webglFramebuffer,A,$e,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,0),v($e,Me)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?ue=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,ie.__webglTexture),X(ue,w,Me),o&&w.mipmaps&&w.mipmaps.length>0)for(let xe=0;xe<w.mipmaps.length;xe++)we(G.__webglFramebuffer[xe],A,w,i.COLOR_ATTACHMENT0,ue,xe);else we(G.__webglFramebuffer,A,w,i.COLOR_ATTACHMENT0,ue,0);v(w,Me)&&x(ue),t.unbindTexture()}A.depthBuffer&&Ne(A)}function en(A){let w=m(A)||o,G=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ie=0,ne=G.length;ie<ne;ie++){let re=G[ie];if(v(re,w)){let Me=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ue=n.get(re).__webglTexture;t.bindTexture(Me,ue),x(Me),t.unbindTexture()}}}function Ce(A){if(o&&A.samples>0&&ve(A)===!1){let w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],G=A.width,ie=A.height,ne=i.COLOR_BUFFER_BIT,re=[],Me=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(A),xe=A.isWebGLMultipleRenderTargets===!0;if(xe)for(let De=0;De<w.length;De++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let De=0;De<w.length;De++){re.push(i.COLOR_ATTACHMENT0+De),A.depthBuffer&&re.push(Me);let $e=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if($e===!1&&(A.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),xe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[De]),$e===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Me]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Me])),xe){let te=n.get(w[De]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,G,ie,0,0,G,ie,ne,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let De=0;De<w.length;De++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,ue.__webglColorRenderbuffer[De]);let $e=n.get(w[De]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,$e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Be(A){return Math.min(s.maxSamples,A.samples)}function ve(A){let w=n.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function xt(A){let w=a.render.frame;h.get(A)!==w&&(h.set(A,w),A.update())}function Xe(A,w){let G=A.colorSpace,ie=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===zl||G!==ni&&G!==En&&(ct.getTransfer(G)===pt?o===!1?e.has("EXT_sRGB")===!0&&ie===Dn?(A.format=zl,A.minFilter=wn,A.generateMipmaps=!1):w=Ua.sRGBToLinear(w):(ie!==Dn||ne!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}this.allocateTextureUnit=I,this.resetTextureUnits=K,this.setTexture2D=$,this.setTexture2DArray=J,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=it,this.setupRenderTarget=z,this.updateRenderTargetMipmap=en,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=we,this.useMultisampledRTT=ve}function Yx(i,e,t){let n=t.isWebGL2;function s(r,a=En){let o,l=ct.getTransfer(a);if(r===Mi)return i.UNSIGNED_BYTE;if(r===uu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===fu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Hp)return i.BYTE;if(r===Gp)return i.SHORT;if(r===Cc)return i.UNSIGNED_SHORT;if(r===du)return i.INT;if(r===yi)return i.UNSIGNED_INT;if(r===xi)return i.FLOAT;if(r===br)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Vp)return i.ALPHA;if(r===Dn)return i.RGBA;if(r===Wp)return i.LUMINANCE;if(r===qp)return i.LUMINANCE_ALPHA;if(r===Vi)return i.DEPTH_COMPONENT;if(r===Ns)return i.DEPTH_STENCIL;if(r===zl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Xp)return i.RED;if(r===pu)return i.RED_INTEGER;if(r===$p)return i.RG;if(r===mu)return i.RG_INTEGER;if(r===gu)return i.RGBA_INTEGER;if(r===tl||r===nl||r===il||r===sl)if(l===pt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===tl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===nl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===il)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===sl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===tl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===nl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===il)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===sl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Fh||r===Bh||r===zh||r===Hh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Fh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===yu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Gh||r===Vh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Gh)return l===pt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Vh)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Wh||r===qh||r===Xh||r===$h||r===Yh||r===Zh||r===Jh||r===jh||r===Kh||r===Qh||r===ed||r===td||r===nd||r===id)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Wh)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qh)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xh)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===$h)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Yh)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Zh)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Jh)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===jh)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Kh)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Qh)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ed)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===td)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===nd)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===id)return l===pt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===rl||r===sd||r===rd)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===rl)return l===pt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===sd)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===rd)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Yp||r===ad||r===od||r===ld)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===rl)return o.COMPRESSED_RED_RGTC1_EXT;if(r===ad)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===od)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ld)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Gi?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}function Jx(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,wu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,x,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function jx(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){let S=x.program;n.uniformBlockBinding(v,S)}function c(v,x){let S=s[v.id];S===void 0&&(g(v),S=h(v),s[v.id]=S,v.addEventListener("dispose",m));let R=x.program;n.updateUBOMapping(v,R);let T=e.render.frame;r[v.id]!==T&&(u(v),r[v.id]=T)}function h(v){let x=d();v.__bindingPointIndex=x;let S=i.createBuffer(),R=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,S),S}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let x=s[v.id],S=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,b=S.length;T<b;T++){let C=Array.isArray(S[T])?S[T]:[S[T]];for(let _=0,M=C.length;_<M;_++){let D=C[_];if(f(D,T,_,R)===!0){let O=D.__offset,K=Array.isArray(D.value)?D.value:[D.value],I=0;for(let F=0;F<K.length;F++){let $=K[F],J=y($);typeof $=="number"||typeof $=="boolean"?(D.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,O+I,D.__data)):$.isMatrix3?(D.__data[0]=$.elements[0],D.__data[1]=$.elements[1],D.__data[2]=$.elements[2],D.__data[3]=0,D.__data[4]=$.elements[3],D.__data[5]=$.elements[4],D.__data[6]=$.elements[5],D.__data[7]=0,D.__data[8]=$.elements[6],D.__data[9]=$.elements[7],D.__data[10]=$.elements[8],D.__data[11]=0):($.toArray(D.__data,I),I+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,x,S,R){let T=v.value,b=x+"_"+S;if(R[b]===void 0)return typeof T=="number"||typeof T=="boolean"?R[b]=T:R[b]=T.clone(),!0;{let C=R[b];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return R[b]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(v){let x=v.uniforms,S=0,R=16;for(let b=0,C=x.length;b<C;b++){let _=Array.isArray(x[b])?x[b]:[x[b]];for(let M=0,D=_.length;M<D;M++){let O=_[M],K=Array.isArray(O.value)?O.value:[O.value];for(let I=0,F=K.length;I<F;I++){let $=K[I],J=y($),Z=S%R;Z!==0&&R-Z<J.boundary&&(S+=R-Z),O.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=J.storage}}}let T=S%R;return T>0&&(S+=R-T),v.__size=S,v.__cache={},this}function y(v){let x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){let x=v.target;x.removeEventListener("dispose",m);let S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}function Ic(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}function tu(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Qx(i,e){let t=1-i;return t*t*e}function e_(i,e){return 2*(1-i)*i*e}function t_(i,e){return i*i*e}function gr(i,e,t,n){return Qx(i,e)+e_(i,t)+t_(i,n)}function n_(i,e){let t=1-i;return t*t*t*e}function i_(i,e){let t=1-i;return 3*t*t*i*e}function s_(i,e){return 3*(1-i)*i*i*e}function r_(i,e){return i*i*i*e}function yr(i,e,t,n,s){return n_(i,e)+i_(i,t)+s_(i,n)+r_(i,s)}function Lu(i,e,t,n,s){let r,a;if(s===b_(i,e,t,n)>0)for(r=e;r<t;r+=n)a=iu(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=iu(r,i[r],i[r+1],a);return a&&ro(a,a.next)&&(Lr(a),a=a.next),a}function Zi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ro(t,t.next)||vt(t.prev,t,t.next)===0)){if(Lr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Cr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&g_(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?l_(i,n,s,r):o_(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Lr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=c_(Zi(i),e,t),Cr(i,e,t,n,s,r,2)):a===2&&h_(i,e,t,n,s,r):Cr(Zi(i),e,t,n,s,r,1);break}}}function o_(i){let e=i.prev,t=i,n=i.next;if(vt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,u=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Rs(s,o,r,l,a,c,g.x,g.y)&&vt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function l_(i,e,t,n){let s=i.prev,r=i,a=i.next;if(vt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,y=o>l?o>c?o:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,p=dc(f,g,e,t,n),v=dc(y,m,e,t,n),x=i.prevZ,S=i.nextZ;for(;x&&x.z>=p&&S&&S.z<=v;){if(x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Rs(o,h,l,d,c,u,x.x,x.y)&&vt(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=f&&S.x<=y&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Rs(o,h,l,d,c,u,S.x,S.y)&&vt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Rs(o,h,l,d,c,u,x.x,x.y)&&vt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=v;){if(S.x>=f&&S.x<=y&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Rs(o,h,l,d,c,u,S.x,S.y)&&vt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function c_(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!ro(s,r)&&Iu(s,n,n.next,r)&&Pr(s,r)&&Pr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Lr(n),Lr(n.next),n=i=r),n=n.next}while(n!==i);return Zi(n)}function h_(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&__(a,o)){let l=Du(a,o);a=Zi(a,a.next),l=Zi(l,l.next),Cr(a,e,t,n,s,r,0),Cr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function d_(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Lu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(x_(c));for(s.sort(u_),r=0;r<s.length;r++)t=f_(s[r],t);return t}function u_(i,e){return i.x-e.x}function f_(i,e){let t=p_(i,e);if(!t)return e;let n=Du(t,i);return Zi(n,n.next),Zi(t,t.next)}function p_(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let u=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Rs(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(r-t.x),Pr(t,i)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&m_(s,t)))&&(s=t,h=d)),t=t.next;while(t!==o);return s}function m_(i,e){return vt(i.prev,i,e.prev)<0&&vt(e.next,i,i.next)<0}function g_(i,e,t,n){let s=i;do s.z===0&&(s.z=dc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,y_(s)}function y_(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function dc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function x_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Rs(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function __(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!v_(i,e)&&(Pr(i,e)&&Pr(e,i)&&M_(i,e)&&(vt(i.prev,i,e.prev)||vt(i,e.prev,e))||ro(i,e)&&vt(i.prev,i,i.next)>0&&vt(e.prev,e,e.next)>0)}function vt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ro(i,e){return i.x===e.x&&i.y===e.y}function Iu(i,e,t,n){let s=Ta(vt(i,e,t)),r=Ta(vt(i,e,n)),a=Ta(vt(t,n,i)),o=Ta(vt(t,n,e));return!!(s!==r&&a!==o||s===0&&Ea(i,t,e)||r===0&&Ea(i,n,e)||a===0&&Ea(t,i,n)||o===0&&Ea(t,e,n))}function Ea(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ta(i){return i>0?1:i<0?-1:0}function v_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Iu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Pr(i,e){return vt(i.prev,i,i.next)<0?vt(i,e,i.next)>=0&&vt(i,i.prev,e)>=0:vt(i,e,i.prev)<0||vt(i,i.next,e)<0}function M_(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Du(i,e){let t=new uc(i.i,i.x,i.y),n=new uc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function iu(i,e,t,n){let s=new uc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Lr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function uc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function b_(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}function su(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ru(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}function S_(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}function Aa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function w_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function lu(i,e){return i.distance-e.distance}function Ec(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Ec(s[r],e,t,!0)}}var lp,Ih,cp,cu,Tc,ei,bi,ln,Vt,_i,Cs,_r,Dh,Nh,hp,zi,dp,up,kh,Uh,fp,pp,mp,gp,kl,Ul,yp,xp,_p,vp,Mp,bp,Sp,wp,Ep,Tp,Ap,Rp,Ra,Cp,Pp,Ac,Lp,Rc,Ip,Dp,vi,Np,kp,Up,Op,Fp,Bp,hu,Is,Ds,Ol,Fl,no,vr,In,Bl,rn,Oh,el,wn,zp,Mr,Mi,Hp,Gp,Cc,du,yi,xi,br,uu,fu,Gi,Vp,Dn,Wp,qp,Vi,Ns,Xp,pu,$p,mu,gu,tl,nl,il,sl,Fh,Bh,zh,Hh,yu,Gh,Vh,Wh,qh,Xh,$h,Yh,Zh,Jh,jh,Kh,Qh,ed,td,nd,id,rl,sd,rd,Yp,ad,od,ld,Ca,Pa,al,cd,hd,dd,xu,Wi,Zp,Jp,_u,jp,En,mt,ni,Pc,io,La,pt,Ia,Da,ls,ud,Kp,Qp,em,vu,tm,nm,im,sm,fd,Mu,pd,zl,ti,Na,Si,Kt,ol,Hl,pe,je,cl,gd,yd,xd,ta,om,ct,cs,Ua,lm,Oa,cm,Tn,Wt,Vl,ii,Fa,Wl,Hn,L,ul,_d,si,Zn,Rn,na,hs,ds,us,ui,fi,ki,lr,ia,sa,Ui,hm,cr,pl,qi,Jn,ml,ra,pi,gl,aa,yl,Ba,yt,fs,Cn,dm,um,mi,oa,mn,vd,Md,ks,Sr,fm,bd,ps,jn,la,hr,pm,mm,Sd,wd,Ed,gm,ym,kt,Pn,Kn,xl,Qn,ms,gs,Td,_l,vl,Ml,ca,Es,Su,gi,ha,Le,Qt,xm,Xi,It,Lt,da,yn,za,Ha,Qe,_m,Sn,Sl,ys,gn,dr,Gt,Yt,Ad,Oi,ua,Rd,xs,_s,vs,wl,fa,pa,ma,ga,Cd,Pd,Ld,ya,xa,Ee,ft,bm,Sm,wm,Nn,Ga,Nt,Ms,bs,ql,Va,Xl,El,Em,Tm,Ln,Fi,va,wr,$i,Rm,Cm,Pm,Lm,Im,Dm,Nm,km,Um,Om,Fm,Bm,zm,Hm,Gm,Vm,Wm,qm,Xm,$m,Ym,Zm,Jm,jm,Km,Qm,e0,t0,n0,i0,s0,r0,a0,o0,l0,c0,h0,d0,u0,f0,p0,m0,g0,y0,x0,_0,v0,M0,b0,S0,w0,E0,T0,A0,R0,C0,P0,L0,I0,D0,N0,k0,U0,O0,F0,B0,z0,H0,G0,V0,W0,q0,X0,$0,Y0,Z0,J0,j0,K0,Q0,eg,tg,ng,ig,sg,rg,ag,og,lg,cg,hg,dg,ug,fg,pg,mg,gg,yg,xg,_g,vg,Mg,bg,Sg,wg,Eg,Tg,Ag,Rg,Cg,Pg,Lg,Ig,Dg,Ng,kg,Ug,Og,Fg,Bg,zg,Hg,Gg,Vg,Wg,qg,Xg,$g,Yg,Zg,Jg,jg,Kg,Qg,ey,ty,ny,iy,sy,ry,ay,qe,oe,zn,Ma,Wa,Ts,Id,Hi,Tl,Dd,Al,Rl,Cl,Bi,Ss,Nd,qa,Xa,Tu,Au,Ru,Cu,Pu,Fd,Bd,zd,Hd,Gd,$l,Yl,Zl,Pl,Ls,dx,ux,Mx,bx,wx,Ix,jl,Kl,Bx,Ql,ec,Vx,Wx,tc,st,Zx,mr,nc,Yi,ic,Os,wi,$a,ws,Qd,Sa,eu,Kx,ur,fr,kn,Fs,An,Er,sc,wa,Ll,Il,Dl,rc,Ya,ac,Za,oc,Ja,lc,ja,nu,cc,Tr,hc,Ei,Bs,At,ri,Ar,zs,Rr,a_,xr,Ir,Ka,Ji,Qa,Zt,Hs,qt,Gs,fc,pc,mc,Un,ji,gc,yc,xc,Dr,Ki,_c,vc,E_,Mc,eo,Ti,Nl,au,ou,bc,Sc,Ai,Dc,T_,Nc,A_,R_,C_,P_,L_,I_,D_,wc,gt,xv,to,ai=Dt(()=>{lp=0,Ih=1,cp=2,cu=1,Tc=2,ei=3,bi=0,ln=1,Vt=2,_i=0,Cs=1,_r=2,Dh=3,Nh=4,hp=5,zi=100,dp=101,up=102,kh=103,Uh=104,fp=200,pp=201,mp=202,gp=203,kl=204,Ul=205,yp=206,xp=207,_p=208,vp=209,Mp=210,bp=211,Sp=212,wp=213,Ep=214,Tp=0,Ap=1,Rp=2,Ra=3,Cp=4,Pp=5,Ac=6,Lp=7,Rc=0,Ip=1,Dp=2,vi=0,Np=1,kp=2,Up=3,Op=4,Fp=5,Bp=6,hu=300,Is=301,Ds=302,Ol=303,Fl=304,no=306,vr=1e3,In=1001,Bl=1002,rn=1003,Oh=1004,el=1005,wn=1006,zp=1007,Mr=1008,Mi=1009,Hp=1010,Gp=1011,Cc=1012,du=1013,yi=1014,xi=1015,br=1016,uu=1017,fu=1018,Gi=1020,Vp=1021,Dn=1023,Wp=1024,qp=1025,Vi=1026,Ns=1027,Xp=1028,pu=1029,$p=1030,mu=1031,gu=1033,tl=33776,nl=33777,il=33778,sl=33779,Fh=35840,Bh=35841,zh=35842,Hh=35843,yu=36196,Gh=37492,Vh=37496,Wh=37808,qh=37809,Xh=37810,$h=37811,Yh=37812,Zh=37813,Jh=37814,jh=37815,Kh=37816,Qh=37817,ed=37818,td=37819,nd=37820,id=37821,rl=36492,sd=36494,rd=36495,Yp=36283,ad=36284,od=36285,ld=36286,Ca=2300,Pa=2301,al=2302,cd=2400,hd=2401,dd=2402,xu=3e3,Wi=3001,Zp=3200,Jp=3201,_u=0,jp=1,En="",mt="srgb",ni="srgb-linear",Pc="display-p3",io="display-p3-linear",La="linear",pt="srgb",Ia="rec709",Da="p3",ls=7680,ud=519,Kp=512,Qp=513,em=514,vu=515,tm=516,nm=517,im=518,sm=519,fd=35044,Mu=35048,pd="300 es",zl=1035,ti=2e3,Na=2001,Si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ol=Math.PI/180,Hl=180/Math.PI;pe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},je=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],v=s[1],x=s[4],S=s[7],R=s[2],T=s[5],b=s[8];return r[0]=a*y+o*v+l*R,r[3]=a*m+o*x+l*T,r[6]=a*p+o*S+l*b,r[1]=c*y+h*v+d*R,r[4]=c*m+h*x+d*T,r[7]=c*p+h*S+d*b,r[2]=u*y+f*v+g*R,r[5]=u*m+f*x+g*T,r[8]=u*p+f*S+g*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(s*c-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=u*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(cl.makeScale(e,t)),this}rotate(e){return this.premultiply(cl.makeRotation(-e)),this}translate(e,t){return this.premultiply(cl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},cl=new je;gd={};yd=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xd=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ta={[ni]:{transfer:La,primaries:Ia,toReference:i=>i,fromReference:i=>i},[mt]:{transfer:pt,primaries:Ia,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[io]:{transfer:La,primaries:Da,toReference:i=>i.applyMatrix3(xd),fromReference:i=>i.applyMatrix3(yd)},[Pc]:{transfer:pt,primaries:Da,toReference:i=>i.convertSRGBToLinear().applyMatrix3(xd),fromReference:i=>i.applyMatrix3(yd).convertLinearToSRGB()}},om=new Set([ni,io]),ct={enabled:!0,_workingColorSpace:ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!om.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=ta[e].toReference,s=ta[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ta[i].primaries},getTransfer:function(i){return i===En?La:ta[i].transfer}};Ua=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cs===void 0&&(cs=ka("canvas")),cs.width=e.width,cs.height=e.height;let n=cs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=cs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ka("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ps(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ps(t[n]/255)*255):t[n]=Ps(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},lm=0,Oa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=Vs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(dl(s[a].image)):r.push(dl(s[a]))}else r=dl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};cm=0,Tn=class i extends Si{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=In,s=In,r=wn,a=Mr,o=Dn,l=Mi,c=i.DEFAULT_ANISOTROPY,h=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=Vs(),this.name="",this.source=new Oa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Wi?mt:En),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vr:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case Bl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vr:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case Bl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===mt?Wi:xu}set encoding(e){pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Wi?mt:En}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=hu;Tn.DEFAULT_ANISOTROPY=1;Wt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,S=(f+1)/2,R=(p+1)/2,T=(h+u)/4,b=(d+y)/4,C=(g+m)/4;return x>S&&x>R?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=b/n):S>R?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=T/s,r=C/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=b/r,s=C/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-y)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Vl=class extends Si{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(pr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Wi?mt:En),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Tn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Oa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends Vl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Fa=class extends Tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Wl=class extends Tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Hn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=y;return}if(d!==y||l!==u||c!==f||h!==g){let m=1-o,p=l*u+c*f+h*g+d*y,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let R=Math.sqrt(x),T=Math.atan2(R,p*v);m=Math.sin(m*T)/R,o=Math.sin(o*T)/R}let S=o*v;if(l=l*m+u*S,c=c*m+f*S,h=h*m+g*S,d=d*m+y*S,m===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_d.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_d.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ul.copy(this).projectOnVector(e),this.sub(ul)}reflect(e){return this.sub(ul.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ul=new L,_d=new Hn,si=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),na.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),na.copy(n.boundingBox)),na.applyMatrix4(e.matrixWorld),this.union(na)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),ia.subVectors(this.max,lr),hs.subVectors(e.a,lr),ds.subVectors(e.b,lr),us.subVectors(e.c,lr),ui.subVectors(ds,hs),fi.subVectors(us,ds),ki.subVectors(hs,us);let t=[0,-ui.z,ui.y,0,-fi.z,fi.y,0,-ki.z,ki.y,ui.z,0,-ui.x,fi.z,0,-fi.x,ki.z,0,-ki.x,-ui.y,ui.x,0,-fi.y,fi.x,0,-ki.y,ki.x,0];return!fl(t,hs,ds,us,ia)||(t=[1,0,0,0,1,0,0,0,1],!fl(t,hs,ds,us,ia))?!1:(sa.crossVectors(ui,fi),t=[sa.x,sa.y,sa.z],fl(t,hs,ds,us,ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Zn=[new L,new L,new L,new L,new L,new L,new L,new L],Rn=new L,na=new si,hs=new L,ds=new L,us=new L,ui=new L,fi=new L,ki=new L,lr=new L,ia=new L,sa=new L,Ui=new L;hm=new si,cr=new L,pl=new L,qi=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):hm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);let t=cr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(cr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(pl)),this.expandByPoint(cr.copy(e.center).sub(pl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Jn=new L,ml=new L,ra=new L,pi=new L,gl=new L,aa=new L,yl=new L,Ba=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ml.copy(e).add(t).multiplyScalar(.5),ra.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(ml);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ra),o=pi.dot(this.direction),l=-pi.dot(ra),c=pi.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ml).addScaledVector(ra,u),f}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);let n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,n,s,r){gl.subVectors(t,e),aa.subVectors(n,e),yl.crossVectors(gl,aa);let a=this.direction.dot(yl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pi.subVectors(this.origin,e);let l=o*this.direction.dot(aa.crossVectors(pi,aa));if(l<0)return null;let c=o*this.direction.dot(gl.cross(pi));if(c<0||l+c>a)return null;let h=-o*pi.dot(yl);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yt=class i{constructor(e,t,n,s,r,a,o,l,c,h,d,u,f,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,u,f,g,y,m)}set(e,t,n,s,r,a,o,l,c,h,d,u,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/fs.setFromMatrixColumn(e,0).length(),r=1/fs.setFromMatrixColumn(e,1).length(),a=1/fs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,y=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-y*c,t[9]=-o*l,t[2]=y-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,y=c*d;t[0]=u+y*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=y+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,y=c*d;t[0]=u-y*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=y-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,y=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+y,t[1]=l*d,t[5]=y*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=y-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-y*d}else if(e.order==="XZY"){let u=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+y,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dm,e,um)}lookAt(e,t,n){let s=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),mi.crossVectors(n,mn),mi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),mi.crossVectors(n,mn)),mi.normalize(),oa.crossVectors(mn,mi),s[0]=mi.x,s[4]=oa.x,s[8]=mn.x,s[1]=mi.y,s[5]=oa.y,s[9]=mn.y,s[2]=mi.z,s[6]=oa.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],v=n[3],x=n[7],S=n[11],R=n[15],T=s[0],b=s[4],C=s[8],_=s[12],M=s[1],D=s[5],O=s[9],K=s[13],I=s[2],F=s[6],$=s[10],J=s[14],Z=s[3],Y=s[7],ee=s[11],se=s[15];return r[0]=a*T+o*M+l*I+c*Z,r[4]=a*b+o*D+l*F+c*Y,r[8]=a*C+o*O+l*$+c*ee,r[12]=a*_+o*K+l*J+c*se,r[1]=h*T+d*M+u*I+f*Z,r[5]=h*b+d*D+u*F+f*Y,r[9]=h*C+d*O+u*$+f*ee,r[13]=h*_+d*K+u*J+f*se,r[2]=g*T+y*M+m*I+p*Z,r[6]=g*b+y*D+m*F+p*Y,r[10]=g*C+y*O+m*$+p*ee,r[14]=g*_+y*K+m*J+p*se,r[3]=v*T+x*M+S*I+R*Z,r[7]=v*b+x*D+S*F+R*Y,r[11]=v*C+x*O+S*$+R*ee,r[15]=v*_+x*K+S*J+R*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+r*l*d-s*c*d-r*o*u+n*c*u+s*o*f-n*l*f)+y*(+t*l*f-t*c*u+r*a*u-s*a*f+s*c*h-r*l*h)+m*(+t*c*d-t*o*f-r*a*d+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-t*l*d+t*o*u+s*a*d-n*a*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],v=d*m*c-y*u*c+y*l*f-o*m*f-d*l*p+o*u*p,x=g*u*c-h*m*c-g*l*f+a*m*f+h*l*p-a*u*p,S=h*y*c-g*d*c+g*o*f-a*y*f-h*o*p+a*d*p,R=g*d*l-h*y*l-g*o*u+a*y*u+h*o*m-a*d*m,T=t*v+n*x+s*S+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/T;return e[0]=v*b,e[1]=(y*u*r-d*m*r-y*s*f+n*m*f+d*s*p-n*u*p)*b,e[2]=(o*m*r-y*l*r+y*s*c-n*m*c-o*s*p+n*l*p)*b,e[3]=(d*l*r-o*u*r-d*s*c+n*u*c+o*s*f-n*l*f)*b,e[4]=x*b,e[5]=(h*m*r-g*u*r+g*s*f-t*m*f-h*s*p+t*u*p)*b,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*b,e[7]=(a*u*r-h*l*r+h*s*c-t*u*c-a*s*f+t*l*f)*b,e[8]=S*b,e[9]=(g*d*r-h*y*r-g*n*f+t*y*f+h*n*p-t*d*p)*b,e[10]=(a*y*r-g*o*r+g*n*c-t*y*c-a*n*p+t*o*p)*b,e[11]=(h*o*r-a*d*r-h*n*c+t*d*c+a*n*f-t*o*f)*b,e[12]=R*b,e[13]=(h*y*s-g*d*s+g*n*u-t*y*u-h*n*m+t*d*m)*b,e[14]=(g*o*s-a*y*s-g*n*l+t*y*l+a*n*m-t*o*m)*b,e[15]=(a*d*s-h*o*s+h*n*l-t*d*l-a*n*u+t*o*u)*b,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,y=a*h,m=a*d,p=o*d,v=l*c,x=l*h,S=l*d,R=n.x,T=n.y,b=n.z;return s[0]=(1-(y+p))*R,s[1]=(f+S)*R,s[2]=(g-x)*R,s[3]=0,s[4]=(f-S)*T,s[5]=(1-(u+p))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(g+x)*b,s[9]=(m-v)*b,s[10]=(1-(u+y))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=fs.set(s[0],s[1],s[2]).length(),a=fs.set(s[4],s[5],s[6]).length(),o=fs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Cn.copy(this);let c=1/r,h=1/a,d=1/o;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=d,Cn.elements[9]*=d,Cn.elements[10]*=d,t.setFromRotationMatrix(Cn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=ti){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),u=(n+s)/(n-s),f,g;if(o===ti)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Na)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ti){let l=this.elements,c=1/(t-e),h=1/(n-s),d=1/(a-r),u=(t+e)*c,f=(n+s)*h,g,y;if(o===ti)g=(a+r)*d,y=-2*d;else if(o===Na)g=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},fs=new L,Cn=new yt,dm=new L(0,0,0),um=new L(1,1,1),mi=new L,oa=new L,mn=new L,vd=new yt,Md=new Hn,ks=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Md.setFromEuler(this),this.setFromQuaternion(Md,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ks.DEFAULT_ORDER="XYZ";Sr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},fm=0,bd=new L,ps=new Hn,jn=new yt,la=new L,hr=new L,pm=new L,mm=new Hn,Sd=new L(1,0,0),wd=new L(0,1,0),Ed=new L(0,0,1),gm={type:"added"},ym={type:"removed"},kt=class i extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=Vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new ks,n=new Hn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new je}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(Sd,e)}rotateY(e){return this.rotateOnAxis(wd,e)}rotateZ(e){return this.rotateOnAxis(Ed,e)}translateOnAxis(e,t){return bd.copy(e).applyQuaternion(this.quaternion),this.position.add(bd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sd,e)}translateY(e){return this.translateOnAxis(wd,e)}translateZ(e){return this.translateOnAxis(Ed,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?la.copy(e):la.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(hr,la,this.up):jn.lookAt(la,hr,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(jn),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ym)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,pm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,mm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};kt.DEFAULT_UP=new L(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Pn=new L,Kn=new L,xl=new L,Qn=new L,ms=new L,gs=new L,Td=new L,_l=new L,vl=new L,Ml=new L,ca=!1,Es=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Pn.subVectors(e,t),s.cross(Pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Pn.subVectors(s,t),Kn.subVectors(n,t),xl.subVectors(e,t);let a=Pn.dot(Pn),o=Pn.dot(Kn),l=Pn.dot(xl),c=Kn.dot(Kn),h=Kn.dot(xl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getUV(e,t,n,s,r,a,o,l){return ca===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ca=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(a,Qn.y),l.addScaledVector(o,Qn.z),l)}static isFrontFacing(e,t,n,s){return Pn.subVectors(n,t),Kn.subVectors(e,t),Pn.cross(Kn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Pn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return ca===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ca=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ms.subVectors(s,n),gs.subVectors(r,n),_l.subVectors(e,n);let l=ms.dot(_l),c=gs.dot(_l);if(l<=0&&c<=0)return t.copy(n);vl.subVectors(e,s);let h=ms.dot(vl),d=gs.dot(vl);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ms,a);Ml.subVectors(e,r);let f=ms.dot(Ml),g=gs.dot(Ml);if(g>=0&&f<=g)return t.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(gs,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Td.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(Td,o);let p=1/(m+y+u);return a=y*p,o=u*p,t.copy(n).addScaledVector(ms,a).addScaledVector(gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},ha={h:0,s:0,l:0};Le=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=rm(e,1),t=$t(t,0,1),n=$t(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=bl(a,r,e+1/3),this.g=bl(a,r,e),this.b=bl(a,r,e-1/3)}return ct.toWorkingColorSpace(this,s),this}setStyle(e,t=mt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){let n=Su[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}copyLinearToSRGB(e){return this.r=hl(e.r),this.g=hl(e.g),this.b=hl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return ct.fromWorkingColorSpace(Qt.copy(this),e),Math.round($t(Qt.r*255,0,255))*65536+Math.round($t(Qt.g*255,0,255))*256+Math.round($t(Qt.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(Qt.copy(this),t);let n=Qt.r,s=Qt.g,r=Qt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=mt){ct.fromWorkingColorSpace(Qt.copy(this),e);let t=Qt.r,n=Qt.g,s=Qt.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(ha);let n=ll(gi.h,ha.h,t),s=ll(gi.s,ha.s,t),r=ll(gi.l,ha.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qt=new Le;Le.NAMES=Su;xm=0,Xi=class extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=Vs(),this.name="",this.type="Material",this.blending=Cs,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kl,this.blendDst=Ul,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==kl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ul&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ra&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ud&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},It=class extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Lt=new L,da=new pe,yn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)da.fromBufferAttribute(this,t),da.applyMatrix3(e),this.setXY(t,da.x,da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=or(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=or(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=or(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=or(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=or(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),s=on(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fd&&(e.usage=this.usage),e}},za=class extends yn{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Ha=class extends yn{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Qe=class extends yn{constructor(e,t,n){super(new Float32Array(e),t,n)}},_m=0,Sn=new yt,Sl=new kt,ys=new L,gn=new si,dr=new si,Gt=new L,Yt=class i extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=Vs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bu(e)?Ha:za)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return Sl.lookAt(e),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Qe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];dr.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(gn.min,dr.min),gn.expandByPoint(Gt),Gt.addVectors(gn.max,dr.max),gn.expandByPoint(Gt)):(gn.expandByPoint(dr.min),gn.expandByPoint(dr.max))}gn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Gt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Gt.fromBufferAttribute(o,c),l&&(ys.fromBufferAttribute(e,c),Gt.add(ys)),s=Math.max(s,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let M=0;M<o;M++)c[M]=new L,h[M]=new L;let d=new L,u=new L,f=new L,g=new pe,y=new pe,m=new pe,p=new L,v=new L;function x(M,D,O){d.fromArray(s,M*3),u.fromArray(s,D*3),f.fromArray(s,O*3),g.fromArray(a,M*2),y.fromArray(a,D*2),m.fromArray(a,O*2),u.sub(d),f.sub(d),y.sub(g),m.sub(g);let K=1/(y.x*m.y-m.x*y.y);isFinite(K)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(f,-y.y).multiplyScalar(K),v.copy(f).multiplyScalar(y.x).addScaledVector(u,-m.x).multiplyScalar(K),c[M].add(p),c[D].add(p),c[O].add(p),h[M].add(v),h[D].add(v),h[O].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let M=0,D=S.length;M<D;++M){let O=S[M],K=O.start,I=O.count;for(let F=K,$=K+I;F<$;F+=3)x(n[F+0],n[F+1],n[F+2])}let R=new L,T=new L,b=new L,C=new L;function _(M){b.fromArray(r,M*3),C.copy(b);let D=c[M];R.copy(D),R.sub(b.multiplyScalar(b.dot(D))).normalize(),T.crossVectors(C,D);let K=T.dot(h[M])<0?-1:1;l[M*4]=R.x,l[M*4+1]=R.y,l[M*4+2]=R.z,l[M*4+3]=K}for(let M=0,D=S.length;M<D;++M){let O=S[M],K=O.start,I=O.count;for(let F=K,$=K+I;F<$;F+=3)_(n[F+0]),_(n[F+1]),_(n[F+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,d=new L;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new yn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ad=new yt,Oi=new Ba,ua=new qi,Rd=new L,xs=new L,_s=new L,vs=new L,wl=new L,fa=new L,pa=new pe,ma=new pe,ga=new pe,Cd=new L,Pd=new L,Ld=new L,ya=new L,xa=new L,Ee=class extends kt{constructor(e=new Yt,t=new It){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){fa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(wl.fromBufferAttribute(d,e),a?fa.addScaledVector(wl,h):fa.addScaledVector(wl.sub(t),h))}t.add(fa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(r),Oi.copy(e.ray).recast(e.near),!(ua.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(ua,Rd)===null||Oi.origin.distanceToSquared(Rd)>(e.far-e.near)**2))&&(Ad.copy(r).invert(),Oi.copy(e.ray).applyMatrix4(Ad),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,R=x;S<R;S+=3){let T=o.getX(S),b=o.getX(S+1),C=o.getX(S+2);s=_a(this,p,e,n,c,h,d,T,b,C),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let v=o.getX(m),x=o.getX(m+1),S=o.getX(m+2);s=_a(this,a,e,n,c,h,d,v,x,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,R=x;S<R;S+=3){let T=S,b=S+1,C=S+2;s=_a(this,p,e,n,c,h,d,T,b,C),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let v=m,x=m+1,S=m+2;s=_a(this,a,e,n,c,h,d,v,x,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};ft=class i extends Yt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(d,2));function g(y,m,p,v,x,S,R,T,b,C,_){let M=S/b,D=R/C,O=S/2,K=R/2,I=T/2,F=b+1,$=C+1,J=0,Z=0,Y=new L;for(let ee=0;ee<$;ee++){let se=ee*D-K;for(let ce=0;ce<F;ce++){let X=ce*M-O;Y[y]=X*v,Y[m]=se*x,Y[p]=I,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[p]=T>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(ce/b),d.push(1-ee/C),J+=1}}for(let ee=0;ee<C;ee++)for(let se=0;se<b;se++){let ce=u+se+F*ee,X=u+se+F*(ee+1),j=u+(se+1)+F*(ee+1),le=u+(se+1)+F*ee;l.push(ce,X,le),l.push(X,j,le),Z+=6}o.addGroup(f,Z,_),f+=Z,u+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};bm={clone:Us,merge:sn},Sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sm,this.fragmentShader=wm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=Mm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ga=class extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Nt=class extends Ga{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Hl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ol*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hl*2*Math.atan(Math.tan(ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ol*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ms=-90,bs=1,ql=class extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Nt(Ms,bs,e,t);s.layers=this.layers,this.add(s);let r=new Nt(Ms,bs,e,t);r.layers=this.layers,this.add(r);let a=new Nt(Ms,bs,e,t);a.layers=this.layers,this.add(a);let o=new Nt(Ms,bs,e,t);o.layers=this.layers,this.add(o);let l=new Nt(Ms,bs,e,t);l.layers=this.layers,this.add(l);let c=new Nt(Ms,bs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Na)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Va=class extends Tn{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Is,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xl=class extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(pr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Wi?mt:En),this.texture=new Va(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ft(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:_i});r.uniforms.tEquirect.value=t;let a=new Ee(s,r),o=t.minFilter;return t.minFilter===Mr&&(t.minFilter=wn),new ql(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},El=new L,Em=new L,Tm=new je,Ln=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=El.subVectors(n,t).cross(Em.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(El),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Tm.getNormalMatrix(e),s=this.coplanarPoint(El).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fi=new qi,va=new L,wr=class{constructor(e=new Ln,t=new Ln,n=new Ln,s=new Ln,r=new Ln,a=new Ln){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ti){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],y=s[10],m=s[11],p=s[12],v=s[13],x=s[14],S=s[15];if(n[0].setComponents(l-r,u-c,m-f,S-p).normalize(),n[1].setComponents(l+r,u+c,m+f,S+p).normalize(),n[2].setComponents(l+a,u+h,m+g,S+v).normalize(),n[3].setComponents(l-a,u-h,m-g,S-v).normalize(),n[4].setComponents(l-o,u-d,m-y,S-x).normalize(),t===ti)n[5].setComponents(l+o,u+d,m+y,S+x).normalize();else if(t===Na)n[5].setComponents(o,d,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(va.x=s.normal.x>0?e.max.x:e.min.x,va.y=s.normal.y>0?e.max.y:e.min.y,va.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(va)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};$i=class i extends Yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let v=p*u-a;for(let x=0;x<c;x++){let S=x*d-r;g.push(S,-v,0),y.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){let x=v+c*p,S=v+c*(p+1),R=v+1+c*(p+1),T=v+1+c*p;f.push(x,S,T),f.push(S,R,T)}this.setIndex(f),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(y,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Rm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cm=`#ifdef USE_ALPHAHASH
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
#endif`,Pm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Im=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Dm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nm=`#ifdef USE_AOMAP
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
#endif`,km=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Um=`#ifdef USE_BATCHING
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
#endif`,Om=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hm=`#ifdef USE_IRIDESCENCE
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
#endif`,Gm=`#ifdef USE_BUMPMAP
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
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$m=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Jm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jm=`#define PI 3.141592653589793
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
} // validated`,Km=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qm=`vec3 transformedNormal = objectNormal;
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
#endif`,e0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,s0="gl_FragColor = linearToOutputTexel( gl_FragColor );",r0=`
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
}`,a0=`#ifdef USE_ENVMAP
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
#endif`,o0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,l0=`#ifdef USE_ENVMAP
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
#endif`,c0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m0=`#ifdef USE_GRADIENTMAP
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
}`,g0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,y0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,v0=`uniform bool receiveShadow;
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
#endif`,M0=`#ifdef USE_ENVMAP
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
#endif`,b0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,w0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,T0=`PhysicalMaterial material;
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
#endif`,A0=`struct PhysicalMaterial {
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
}`,R0=`
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
#endif`,C0=`#if defined( RE_IndirectDiffuse )
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
#endif`,P0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,L0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,N0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,k0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,F0=`#if defined( USE_POINTS_UV )
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
#endif`,B0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,G0=`#ifdef USE_MORPHNORMALS
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
#endif`,V0=`#ifdef USE_MORPHTARGETS
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
#endif`,W0=`#ifdef USE_MORPHTARGETS
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
#endif`,q0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,X0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,J0=`#ifdef USE_NORMALMAP
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
#endif`,j0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,K0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ng=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ig=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ag=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ug=`float getShadowMask() {
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
}`,fg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pg=`#ifdef USE_SKINNING
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
#endif`,mg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gg=`#ifdef USE_SKINNING
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
#endif`,yg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mg=`#ifdef USE_TRANSMISSION
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
#endif`,bg=`#ifdef USE_TRANSMISSION
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ag=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rg=`uniform sampler2D t2D;
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`#include <common>
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
}`,Ng=`#if DEPTH_PACKING == 3200
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
}`,kg=`#define DISTANCE
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
}`,Ug=`#define DISTANCE
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
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`uniform float scale;
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
}`,zg=`uniform vec3 diffuse;
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
}`,Hg=`#include <common>
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
}`,Gg=`uniform vec3 diffuse;
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
}`,Vg=`#define LAMBERT
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
}`,Wg=`#define LAMBERT
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
}`,qg=`#define MATCAP
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
}`,Xg=`#define MATCAP
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
}`,$g=`#define NORMAL
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
}`,Yg=`#define NORMAL
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
}`,Zg=`#define PHONG
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
}`,Jg=`#define PHONG
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
}`,jg=`#define STANDARD
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
}`,Kg=`#define STANDARD
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
}`,Qg=`#define TOON
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
}`,ey=`#define TOON
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
}`,ty=`uniform float size;
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
}`,ny=`uniform vec3 diffuse;
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
}`,iy=`#include <common>
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
}`,sy=`uniform vec3 color;
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
}`,ry=`uniform float rotation;
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
}`,ay=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Rm,alphahash_pars_fragment:Cm,alphamap_fragment:Pm,alphamap_pars_fragment:Lm,alphatest_fragment:Im,alphatest_pars_fragment:Dm,aomap_fragment:Nm,aomap_pars_fragment:km,batching_pars_vertex:Um,batching_vertex:Om,begin_vertex:Fm,beginnormal_vertex:Bm,bsdfs:zm,iridescence_fragment:Hm,bumpmap_pars_fragment:Gm,clipping_planes_fragment:Vm,clipping_planes_pars_fragment:Wm,clipping_planes_pars_vertex:qm,clipping_planes_vertex:Xm,color_fragment:$m,color_pars_fragment:Ym,color_pars_vertex:Zm,color_vertex:Jm,common:jm,cube_uv_reflection_fragment:Km,defaultnormal_vertex:Qm,displacementmap_pars_vertex:e0,displacementmap_vertex:t0,emissivemap_fragment:n0,emissivemap_pars_fragment:i0,colorspace_fragment:s0,colorspace_pars_fragment:r0,envmap_fragment:a0,envmap_common_pars_fragment:o0,envmap_pars_fragment:l0,envmap_pars_vertex:c0,envmap_physical_pars_fragment:M0,envmap_vertex:h0,fog_vertex:d0,fog_pars_vertex:u0,fog_fragment:f0,fog_pars_fragment:p0,gradientmap_pars_fragment:m0,lightmap_fragment:g0,lightmap_pars_fragment:y0,lights_lambert_fragment:x0,lights_lambert_pars_fragment:_0,lights_pars_begin:v0,lights_toon_fragment:b0,lights_toon_pars_fragment:S0,lights_phong_fragment:w0,lights_phong_pars_fragment:E0,lights_physical_fragment:T0,lights_physical_pars_fragment:A0,lights_fragment_begin:R0,lights_fragment_maps:C0,lights_fragment_end:P0,logdepthbuf_fragment:L0,logdepthbuf_pars_fragment:I0,logdepthbuf_pars_vertex:D0,logdepthbuf_vertex:N0,map_fragment:k0,map_pars_fragment:U0,map_particle_fragment:O0,map_particle_pars_fragment:F0,metalnessmap_fragment:B0,metalnessmap_pars_fragment:z0,morphcolor_vertex:H0,morphnormal_vertex:G0,morphtarget_pars_vertex:V0,morphtarget_vertex:W0,normal_fragment_begin:q0,normal_fragment_maps:X0,normal_pars_fragment:$0,normal_pars_vertex:Y0,normal_vertex:Z0,normalmap_pars_fragment:J0,clearcoat_normal_fragment_begin:j0,clearcoat_normal_fragment_maps:K0,clearcoat_pars_fragment:Q0,iridescence_pars_fragment:eg,opaque_fragment:tg,packing:ng,premultiplied_alpha_fragment:ig,project_vertex:sg,dithering_fragment:rg,dithering_pars_fragment:ag,roughnessmap_fragment:og,roughnessmap_pars_fragment:lg,shadowmap_pars_fragment:cg,shadowmap_pars_vertex:hg,shadowmap_vertex:dg,shadowmask_pars_fragment:ug,skinbase_vertex:fg,skinning_pars_vertex:pg,skinning_vertex:mg,skinnormal_vertex:gg,specularmap_fragment:yg,specularmap_pars_fragment:xg,tonemapping_fragment:_g,tonemapping_pars_fragment:vg,transmission_fragment:Mg,transmission_pars_fragment:bg,uv_pars_fragment:Sg,uv_pars_vertex:wg,uv_vertex:Eg,worldpos_vertex:Tg,background_vert:Ag,background_frag:Rg,backgroundCube_vert:Cg,backgroundCube_frag:Pg,cube_vert:Lg,cube_frag:Ig,depth_vert:Dg,depth_frag:Ng,distanceRGBA_vert:kg,distanceRGBA_frag:Ug,equirect_vert:Og,equirect_frag:Fg,linedashed_vert:Bg,linedashed_frag:zg,meshbasic_vert:Hg,meshbasic_frag:Gg,meshlambert_vert:Vg,meshlambert_frag:Wg,meshmatcap_vert:qg,meshmatcap_frag:Xg,meshnormal_vert:$g,meshnormal_frag:Yg,meshphong_vert:Zg,meshphong_frag:Jg,meshphysical_vert:jg,meshphysical_frag:Kg,meshtoon_vert:Qg,meshtoon_frag:ey,points_vert:ty,points_frag:ny,shadow_vert:iy,shadow_frag:sy,sprite_vert:ry,sprite_frag:ay},oe={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},zn={basic:{uniforms:sn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:sn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Le(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:sn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:sn([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:sn([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Le(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:sn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:sn([oe.points,oe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:sn([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:sn([oe.common,oe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:sn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:sn([oe.sprite,oe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:sn([oe.common,oe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:sn([oe.lights,oe.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};zn.physical={uniforms:sn([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};Ma={r:0,b:0,g:0};Wa=class extends Ga{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ts=4,Id=[.125,.215,.35,.446,.526,.582],Hi=20,Tl=new Wa,Dd=new Le,Al=null,Rl=0,Cl=0,Bi=(1+Math.sqrt(5))/2,Ss=1/Bi,Nd=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Bi,Ss),new L(0,Bi,-Ss),new L(Ss,0,Bi),new L(-Ss,0,Bi),new L(Bi,Ss,0),new L(-Bi,Ss,0)],qa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Al=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Al,Rl,Cl),e.scissorTest=!1,ba(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Is||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Al=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:br,format:Dn,colorSpace:ni,depthBuffer:!1},s=kd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fy(r)),this._blurMaterial=py(r,e,t)}return s}_compileMaterial(e){let t=new Ee(this._lodPlanes[0],e);this._renderer.compile(t,Tl)}_sceneToCubeUV(e,t,n,s){let o=new Nt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Dd),h.toneMapping=vi,h.autoClear=!1;let f=new It({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new Ee(new ft,f),y=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,y=!0):(f.color.copy(Dd),y=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):v===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let x=this._cubeSize;ba(s,v*x,p>2?x:0,x,x),h.setRenderTarget(s),y&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Is||e.mapping===Ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Od()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ud());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ee(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ba(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Tl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Nd[(s-1)%Nd.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Ee(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Hi-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):Hi;m>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);let p=[],v=0;for(let b=0;b<Hi;++b){let C=b/y,_=Math.exp(-C*C/2);p.push(_),b===0?v+=_:b<m&&(v+=2*_)}for(let b=0;b<p.length;b++)p[b]=p[b]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;let S=this._sizeLods[s],R=3*S*(s>x-Ts?s-x+Ts:0),T=4*(this._cubeSize-S);ba(t,R,T,3*S,2*S),l.setRenderTarget(t),l.render(d,Tl)}};Xa=class extends Tn{constructor(e,t,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:Vi,h!==Vi&&h!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Vi&&(n=yi),n===void 0&&h===Ns&&(n=Gi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Tu=new Tn,Au=new Xa(1,1);Au.compareFunction=vu;Ru=new Fa,Cu=new Wl,Pu=new Va,Fd=[],Bd=[],zd=new Float32Array(16),Hd=new Float32Array(9),Gd=new Float32Array(4);$l=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Vy(t.type)}},Yl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cx(t.type)}},Zl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Pl=/(\w+)(\])?(\[|\.)?/g;Ls=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);hx(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};dx=37297,ux=0;Mx=/^[ \t]*#include +<([\w\d./]+)>/gm;bx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);wx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Ix=0,jl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Kl(e),t.set(e,n)),n}},Kl=class{constructor(e){this.id=Ix++,this.code=e,this.usedTimes=0}};Bx=0;Ql=class extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ec=class extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wx=`uniform sampler2D shadow_pass;
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
}`;tc=class extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},st=class extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zx={type:"move"},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new st,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new st,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new st,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new st;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},nc=class extends Si{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,y=t.getContextAttributes(),m=null,p=null,v=[],x=[],S=new pe,R=null,T=new Nt;T.layers.enable(1),T.viewport=new Wt;let b=new Nt;b.layers.enable(2),b.viewport=new Wt;let C=[T,b],_=new tc;_.layers.enable(1),_.layers.enable(2);let M=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let j=v[X];return j===void 0&&(j=new mr,v[X]=j),j.getTargetRaySpace()},this.getControllerGrip=function(X){let j=v[X];return j===void 0&&(j=new mr,v[X]=j),j.getGripSpace()},this.getHand=function(X){let j=v[X];return j===void 0&&(j=new mr,v[X]=j),j.getHandSpace()};function O(X){let j=x.indexOf(X.inputSource);if(j===-1)return;let le=v[j];le!==void 0&&(le.update(X.inputSource,X.frame,c||a),le.dispatchEvent({type:X.type,data:X.inputSource}))}function K(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",I);for(let X=0;X<v.length;X++){let j=x[X];j!==null&&(x[X]=null,v[X].disconnect(j))}M=null,D=null,e.setRenderTarget(m),f=null,u=null,d=null,s=null,p=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",K),s.addEventListener("inputsourceschange",I),y.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(S),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let j={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new ii(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let j=null,le=null,Ae=null;y.depth&&(Ae=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=y.stencil?Ns:Vi,le=y.stencil?Gi:yi);let we={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(we),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),p=new ii(u.textureWidth,u.textureHeight,{format:Dn,type:Mi,depthTexture:new Xa(u.textureWidth,u.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let He=e.properties.get(p);He.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ce.setContext(s),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(X){for(let j=0;j<X.removed.length;j++){let le=X.removed[j],Ae=x.indexOf(le);Ae>=0&&(x[Ae]=null,v[Ae].disconnect(le))}for(let j=0;j<X.added.length;j++){let le=X.added[j],Ae=x.indexOf(le);if(Ae===-1){for(let He=0;He<v.length;He++)if(He>=x.length){x.push(le),Ae=He;break}else if(x[He]===null){x[He]=le,Ae=He;break}if(Ae===-1)break}let we=v[Ae];we&&we.connect(le)}}let F=new L,$=new L;function J(X,j,le){F.setFromMatrixPosition(j.matrixWorld),$.setFromMatrixPosition(le.matrixWorld);let Ae=F.distanceTo($),we=j.projectionMatrix.elements,He=le.projectionMatrix.elements,Ve=we[14]/(we[10]-1),Ne=we[14]/(we[10]+1),it=(we[9]+1)/we[5],z=(we[9]-1)/we[5],en=(we[8]-1)/we[0],Ce=(He[8]+1)/He[0],Be=Ve*en,ve=Ve*Ce,xt=Ae/(-en+Ce),Xe=xt*-en;j.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Xe),X.translateZ(xt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let A=Ve+xt,w=Ne+xt,G=Be-Xe,ie=ve+(Ae-Xe),ne=it*Ne/w*A,re=z*Ne/w*A;X.projectionMatrix.makePerspective(G,ie,ne,re,A,w),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function Z(X,j){j===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(j.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;_.near=b.near=T.near=X.near,_.far=b.far=T.far=X.far,(M!==_.near||D!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),M=_.near,D=_.far);let j=X.parent,le=_.cameras;Z(_,j);for(let Ae=0;Ae<le.length;Ae++)Z(le[Ae],j);le.length===2?J(_,T,b):_.projectionMatrix.copy(T.projectionMatrix),Y(X,_,j)};function Y(X,j,le){le===null?X.matrix.copy(j.matrixWorld):(X.matrix.copy(le.matrixWorld),X.matrix.invert(),X.matrix.multiply(j.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Hl*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)};let ee=null;function se(X,j){if(h=j.getViewerPose(c||a),g=j,h!==null){let le=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let Ae=!1;le.length!==_.cameras.length&&(_.cameras.length=0,Ae=!0);for(let we=0;we<le.length;we++){let He=le[we],Ve=null;if(f!==null)Ve=f.getViewport(He);else{let it=d.getViewSubImage(u,He);Ve=it.viewport,we===0&&(e.setRenderTargetTextures(p,it.colorTexture,u.ignoreDepthValues?void 0:it.depthStencilTexture),e.setRenderTarget(p))}let Ne=C[we];Ne===void 0&&(Ne=new Nt,Ne.layers.enable(we),Ne.viewport=new Wt,C[we]=Ne),Ne.matrix.fromArray(He.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(He.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),we===0&&(_.matrix.copy(Ne.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),Ae===!0&&_.cameras.push(Ne)}}for(let le=0;le<v.length;le++){let Ae=x[le],we=v[le];Ae!==null&&we!==void 0&&we.update(Ae,j,c||a)}ee&&ee(X,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let ce=new Eu;ce.setAnimationLoop(se),this.setAnimationLoop=function(X){ee=X},this.dispose=function(){}}};Yi=class{constructor(e={}){let{canvas:t=am(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;let f=new Uint32Array(4),g=new Int32Array(4),y=null,m=null,p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mt,this._useLegacyLights=!1,this.toneMapping=vi,this.toneMappingExposure=1;let x=this,S=!1,R=0,T=0,b=null,C=-1,_=null,M=new Wt,D=new Wt,O=null,K=new Le(0),I=0,F=t.width,$=t.height,J=1,Z=null,Y=null,ee=new Wt(0,0,F,$),se=new Wt(0,0,F,$),ce=!1,X=new wr,j=!1,le=!1,Ae=null,we=new yt,He=new pe,Ve=new L,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function it(){return b===null?J:1}let z=n;function en(E,k){for(let V=0;V<E.length;V++){let q=E[V],H=t.getContext(q,k);if(H!==null)return H}return null}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",he,!1),z===null){let k=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&k.shift(),z=en(k,E),z===null)throw en(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ce,Be,ve,xt,Xe,A,w,G,ie,ne,re,Me,ue,xe,De,$e,te,lt,Ke,Fe,Re,_e,We,ot;function bt(){Ce=new gy(z),Be=new hy(z,Ce,e),Ce.init(Be),_e=new Yx(z,Ce,Be),ve=new Xx(z,Ce,Be),xt=new _y(z),Xe=new Nx,A=new $x(z,Ce,ve,Xe,Be,_e,xt),w=new uy(x),G=new my(x),ie=new Am(z,Be),We=new ly(z,Ce,ie,Be),ne=new yy(z,ie,xt,We),re=new Sy(z,ne,ie,xt),Ke=new by(z,Be,A),$e=new dy(Xe),Me=new Dx(x,w,G,Ce,Be,We,$e),ue=new Jx(x,Xe),xe=new Ux,De=new Gx(Ce,Be),lt=new oy(x,w,G,ve,re,u,l),te=new qx(x,re,Be),ot=new jx(z,xt,Be,ve),Fe=new cy(z,Ce,xt,Be),Re=new xy(z,Ce,xt,Be),xt.programs=Me.programs,x.capabilities=Be,x.extensions=Ce,x.properties=Xe,x.renderLists=xe,x.shadowMap=te,x.state=ve,x.info=xt}bt();let Ze=new nc(x,z);this.xr=Ze,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let E=Ce.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ce.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(E){E!==void 0&&(J=E,this.setSize(F,$,!1))},this.getSize=function(E){return E.set(F,$)},this.setSize=function(E,k,V=!0){if(Ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=E,$=k,t.width=Math.floor(E*J),t.height=Math.floor(k*J),V===!0&&(t.style.width=E+"px",t.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(F*J,$*J).floor()},this.setDrawingBufferSize=function(E,k,V){F=E,$=k,J=V,t.width=Math.floor(E*V),t.height=Math.floor(k*V),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(M)},this.getViewport=function(E){return E.copy(ee)},this.setViewport=function(E,k,V,q){E.isVector4?ee.set(E.x,E.y,E.z,E.w):ee.set(E,k,V,q),ve.viewport(M.copy(ee).multiplyScalar(J).floor())},this.getScissor=function(E){return E.copy(se)},this.setScissor=function(E,k,V,q){E.isVector4?se.set(E.x,E.y,E.z,E.w):se.set(E,k,V,q),ve.scissor(D.copy(se).multiplyScalar(J).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(E){ve.setScissorTest(ce=E)},this.setOpaqueSort=function(E){Z=E},this.setTransparentSort=function(E){Y=E},this.getClearColor=function(E){return E.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor.apply(lt,arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha.apply(lt,arguments)},this.clear=function(E=!0,k=!0,V=!0){let q=0;if(E){let H=!1;if(b!==null){let ge=b.texture.format;H=ge===gu||ge===mu||ge===pu}if(H){let ge=b.texture.type,be=ge===Mi||ge===yi||ge===Cc||ge===Gi||ge===uu||ge===fu,Ie=lt.getClearColor(),Ue=lt.getClearAlpha(),Ye=Ie.r,ze=Ie.g,Ge=Ie.b;be?(f[0]=Ye,f[1]=ze,f[2]=Ge,f[3]=Ue,z.clearBufferuiv(z.COLOR,0,f)):(g[0]=Ye,g[1]=ze,g[2]=Ge,g[3]=Ue,z.clearBufferiv(z.COLOR,0,g))}else q|=z.COLOR_BUFFER_BIT}k&&(q|=z.DEPTH_BUFFER_BIT),V&&(q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",he,!1),xe.dispose(),De.dispose(),Xe.dispose(),w.dispose(),G.dispose(),re.dispose(),We.dispose(),ot.dispose(),Me.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",tn),Ze.removeEventListener("sessionend",ut),Ae&&(Ae.dispose(),Ae=null),nn.stop()};function ae(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let E=xt.autoReset,k=te.enabled,V=te.autoUpdate,q=te.needsUpdate,H=te.type;bt(),xt.autoReset=E,te.enabled=k,te.autoUpdate=V,te.needsUpdate=q,te.type=H}function he(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function de(E){let k=E.target;k.removeEventListener("dispose",de),ke(k)}function ke(E){Pe(E),Xe.remove(E)}function Pe(E){let k=Xe.get(E).programs;k!==void 0&&(k.forEach(function(V){Me.releaseProgram(V)}),E.isShaderMaterial&&Me.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,V,q,H,ge){k===null&&(k=Ne);let be=H.isMesh&&H.matrixWorld.determinant()<0,Ie=np(E,k,V,q,H);ve.setMaterial(q,be);let Ue=V.index,Ye=1;if(q.wireframe===!0){if(Ue=ne.getWireframeAttribute(V),Ue===void 0)return;Ye=2}let ze=V.drawRange,Ge=V.attributes.position,Tt=ze.start*Ye,pn=(ze.start+ze.count)*Ye;ge!==null&&(Tt=Math.max(Tt,ge.start*Ye),pn=Math.min(pn,(ge.start+ge.count)*Ye)),Ue!==null?(Tt=Math.max(Tt,0),pn=Math.min(pn,Ue.count)):Ge!=null&&(Tt=Math.max(Tt,0),pn=Math.min(pn,Ge.count));let Ht=pn-Tt;if(Ht<0||Ht===1/0)return;We.setup(H,q,Ie,V,Ue);let Yn,_t=Fe;if(Ue!==null&&(Yn=ie.get(Ue),_t=Re,_t.setIndex(Yn)),H.isMesh)q.wireframe===!0?(ve.setLineWidth(q.wireframeLinewidth*it()),_t.setMode(z.LINES)):_t.setMode(z.TRIANGLES);else if(H.isLine){let Je=q.linewidth;Je===void 0&&(Je=1),ve.setLineWidth(Je*it()),H.isLineSegments?_t.setMode(z.LINES):H.isLineLoop?_t.setMode(z.LINE_LOOP):_t.setMode(z.LINE_STRIP)}else H.isPoints?_t.setMode(z.POINTS):H.isSprite&&_t.setMode(z.TRIANGLES);if(H.isBatchedMesh)_t.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)_t.renderInstances(Tt,Ht,H.count);else if(V.isInstancedBufferGeometry){let Je=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Jo=Math.min(V.instanceCount,Je);_t.renderInstances(Tt,Ht,Jo)}else _t.render(Tt,Ht)};function ht(E,k,V){E.transparent===!0&&E.side===Vt&&E.forceSinglePass===!1?(E.side=ln,E.needsUpdate=!0,ea(E,k,V),E.side=bi,E.needsUpdate=!0,ea(E,k,V),E.side=Vt):ea(E,k,V)}this.compile=function(E,k,V=null){V===null&&(V=E),m=De.get(V),m.init(),v.push(m),V.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),E!==V&&E.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(x._useLegacyLights);let q=new Set;return E.traverse(function(H){let ge=H.material;if(ge)if(Array.isArray(ge))for(let be=0;be<ge.length;be++){let Ie=ge[be];ht(Ie,V,H),q.add(Ie)}else ht(ge,V,H),q.add(ge)}),v.pop(),m=null,q},this.compileAsync=function(E,k,V=null){let q=this.compile(E,k,V);return new Promise(H=>{function ge(){if(q.forEach(function(be){Xe.get(be).currentProgram.isReady()&&q.delete(be)}),q.size===0){H(E);return}setTimeout(ge,10)}Ce.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let dt=null;function zt(E){dt&&dt(E)}function tn(){nn.stop()}function ut(){nn.start()}let nn=new Eu;nn.setAnimationLoop(zt),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(E){dt=E,Ze.setAnimationLoop(E),E===null?nn.stop():nn.start()},Ze.addEventListener("sessionstart",tn),Ze.addEventListener("sessionend",ut),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(k),k=Ze.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,k,b),m=De.get(E,v.length),m.init(),v.push(m),we.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),X.setFromProjectionMatrix(we),le=this.localClippingEnabled,j=$e.init(this.clippingPlanes,le),y=xe.get(E,p.length),y.init(),p.push(y),Bn(E,k,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(Z,Y),this.info.render.frame++,j===!0&&$e.beginShadows();let V=m.state.shadowsArray;if(te.render(V,E,k),j===!0&&$e.endShadows(),this.info.autoReset===!0&&this.info.reset(),lt.render(y,E),m.setupLights(x._useLegacyLights),k.isArrayCamera){let q=k.cameras;for(let H=0,ge=q.length;H<ge;H++){let be=q[H];Th(y,E,be,be.viewport)}}else Th(y,E,k);b!==null&&(A.updateMultisampleRenderTarget(b),A.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(x,E,k),We.resetDefaultState(),C=-1,_=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function Bn(E,k,V,q){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){q&&Ve.setFromMatrixPosition(E.matrixWorld).applyMatrix4(we);let be=re.update(E),Ie=E.material;Ie.visible&&y.push(E,be,Ie,V,Ve.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){let be=re.update(E),Ie=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ve.copy(E.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ve.copy(be.boundingSphere.center)),Ve.applyMatrix4(E.matrixWorld).applyMatrix4(we)),Array.isArray(Ie)){let Ue=be.groups;for(let Ye=0,ze=Ue.length;Ye<ze;Ye++){let Ge=Ue[Ye],Tt=Ie[Ge.materialIndex];Tt&&Tt.visible&&y.push(E,be,Tt,V,Ve.z,Ge)}}else Ie.visible&&y.push(E,be,Ie,V,Ve.z,null)}}let ge=E.children;for(let be=0,Ie=ge.length;be<Ie;be++)Bn(ge[be],k,V,q)}function Th(E,k,V,q){let H=E.opaque,ge=E.transmissive,be=E.transparent;m.setupLightsView(V),j===!0&&$e.setGlobalState(x.clippingPlanes,V),ge.length>0&&tp(H,ge,k,V),q&&ve.viewport(M.copy(q)),H.length>0&&Qr(H,k,V),ge.length>0&&Qr(ge,k,V),be.length>0&&Qr(be,k,V),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function tp(E,k,V,q){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;let ge=Be.isWebGL2;Ae===null&&(Ae=new ii(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?br:Mi,minFilter:Mr,samples:ge?4:0})),x.getDrawingBufferSize(He),ge?Ae.setSize(He.x,He.y):Ae.setSize(Gl(He.x),Gl(He.y));let be=x.getRenderTarget();x.setRenderTarget(Ae),x.getClearColor(K),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();let Ie=x.toneMapping;x.toneMapping=vi,Qr(E,V,q),A.updateMultisampleRenderTarget(Ae),A.updateRenderTargetMipmap(Ae);let Ue=!1;for(let Ye=0,ze=k.length;Ye<ze;Ye++){let Ge=k[Ye],Tt=Ge.object,pn=Ge.geometry,Ht=Ge.material,Yn=Ge.group;if(Ht.side===Vt&&Tt.layers.test(q.layers)){let _t=Ht.side;Ht.side=ln,Ht.needsUpdate=!0,Ah(Tt,V,q,pn,Ht,Yn),Ht.side=_t,Ht.needsUpdate=!0,Ue=!0}}Ue===!0&&(A.updateMultisampleRenderTarget(Ae),A.updateRenderTargetMipmap(Ae)),x.setRenderTarget(be),x.setClearColor(K,I),x.toneMapping=Ie}function Qr(E,k,V){let q=k.isScene===!0?k.overrideMaterial:null;for(let H=0,ge=E.length;H<ge;H++){let be=E[H],Ie=be.object,Ue=be.geometry,Ye=q===null?be.material:q,ze=be.group;Ie.layers.test(V.layers)&&Ah(Ie,k,V,Ue,Ye,ze)}}function Ah(E,k,V,q,H,ge){E.onBeforeRender(x,k,V,q,H,ge),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(x,k,V,q,E,ge),H.transparent===!0&&H.side===Vt&&H.forceSinglePass===!1?(H.side=ln,H.needsUpdate=!0,x.renderBufferDirect(V,k,q,H,E,ge),H.side=bi,H.needsUpdate=!0,x.renderBufferDirect(V,k,q,H,E,ge),H.side=Vt):x.renderBufferDirect(V,k,q,H,E,ge),E.onAfterRender(x,k,V,q,H,ge)}function ea(E,k,V){k.isScene!==!0&&(k=Ne);let q=Xe.get(E),H=m.state.lights,ge=m.state.shadowsArray,be=H.state.version,Ie=Me.getParameters(E,H.state,ge,k,V),Ue=Me.getProgramCacheKey(Ie),Ye=q.programs;q.environment=E.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(E.isMeshStandardMaterial?G:w).get(E.envMap||q.environment),Ye===void 0&&(E.addEventListener("dispose",de),Ye=new Map,q.programs=Ye);let ze=Ye.get(Ue);if(ze!==void 0){if(q.currentProgram===ze&&q.lightsStateVersion===be)return Ch(E,Ie),ze}else Ie.uniforms=Me.getUniforms(E),E.onBuild(V,Ie,x),E.onBeforeCompile(Ie,x),ze=Me.acquireProgram(Ie,Ue),Ye.set(Ue,ze),q.uniforms=Ie.uniforms;let Ge=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ge.clippingPlanes=$e.uniform),Ch(E,Ie),q.needsLights=sp(E),q.lightsStateVersion=be,q.needsLights&&(Ge.ambientLightColor.value=H.state.ambient,Ge.lightProbe.value=H.state.probe,Ge.directionalLights.value=H.state.directional,Ge.directionalLightShadows.value=H.state.directionalShadow,Ge.spotLights.value=H.state.spot,Ge.spotLightShadows.value=H.state.spotShadow,Ge.rectAreaLights.value=H.state.rectArea,Ge.ltc_1.value=H.state.rectAreaLTC1,Ge.ltc_2.value=H.state.rectAreaLTC2,Ge.pointLights.value=H.state.point,Ge.pointLightShadows.value=H.state.pointShadow,Ge.hemisphereLights.value=H.state.hemi,Ge.directionalShadowMap.value=H.state.directionalShadowMap,Ge.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ge.spotShadowMap.value=H.state.spotShadowMap,Ge.spotLightMatrix.value=H.state.spotLightMatrix,Ge.spotLightMap.value=H.state.spotLightMap,Ge.pointShadowMap.value=H.state.pointShadowMap,Ge.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=ze,q.uniformsList=null,ze}function Rh(E){if(E.uniformsList===null){let k=E.currentProgram.getUniforms();E.uniformsList=Ls.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Ch(E,k){let V=Xe.get(E);V.outputColorSpace=k.outputColorSpace,V.batching=k.batching,V.instancing=k.instancing,V.instancingColor=k.instancingColor,V.skinning=k.skinning,V.morphTargets=k.morphTargets,V.morphNormals=k.morphNormals,V.morphColors=k.morphColors,V.morphTargetsCount=k.morphTargetsCount,V.numClippingPlanes=k.numClippingPlanes,V.numIntersection=k.numClipIntersection,V.vertexAlphas=k.vertexAlphas,V.vertexTangents=k.vertexTangents,V.toneMapping=k.toneMapping}function np(E,k,V,q,H){k.isScene!==!0&&(k=Ne),A.resetTextureUnits();let ge=k.fog,be=q.isMeshStandardMaterial?k.environment:null,Ie=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ni,Ue=(q.isMeshStandardMaterial?G:w).get(q.envMap||be),Ye=q.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ze=!!V.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ge=!!V.morphAttributes.position,Tt=!!V.morphAttributes.normal,pn=!!V.morphAttributes.color,Ht=vi;q.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Ht=x.toneMapping);let Yn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,_t=Yn!==void 0?Yn.length:0,Je=Xe.get(q),Jo=m.state.lights;if(j===!0&&(le===!0||E!==_)){let bn=E===_&&q.id===C;$e.setState(q,E,bn)}let St=!1;q.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Jo.state.version||Je.outputColorSpace!==Ie||H.isBatchedMesh&&Je.batching===!1||!H.isBatchedMesh&&Je.batching===!0||H.isInstancedMesh&&Je.instancing===!1||!H.isInstancedMesh&&Je.instancing===!0||H.isSkinnedMesh&&Je.skinning===!1||!H.isSkinnedMesh&&Je.skinning===!0||H.isInstancedMesh&&Je.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Je.instancingColor===!1&&H.instanceColor!==null||Je.envMap!==Ue||q.fog===!0&&Je.fog!==ge||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==$e.numPlanes||Je.numIntersection!==$e.numIntersection)||Je.vertexAlphas!==Ye||Je.vertexTangents!==ze||Je.morphTargets!==Ge||Je.morphNormals!==Tt||Je.morphColors!==pn||Je.toneMapping!==Ht||Be.isWebGL2===!0&&Je.morphTargetsCount!==_t)&&(St=!0):(St=!0,Je.__version=q.version);let Di=Je.currentProgram;St===!0&&(Di=ea(q,k,H));let Ph=!1,ar=!1,jo=!1,jt=Di.getUniforms(),Ni=Je.uniforms;if(ve.useProgram(Di.program)&&(Ph=!0,ar=!0,jo=!0),q.id!==C&&(C=q.id,ar=!0),Ph||_!==E){jt.setValue(z,"projectionMatrix",E.projectionMatrix),jt.setValue(z,"viewMatrix",E.matrixWorldInverse);let bn=jt.map.cameraPosition;bn!==void 0&&bn.setValue(z,Ve.setFromMatrixPosition(E.matrixWorld)),Be.logarithmicDepthBuffer&&jt.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&jt.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),_!==E&&(_=E,ar=!0,jo=!0)}if(H.isSkinnedMesh){jt.setOptional(z,H,"bindMatrix"),jt.setOptional(z,H,"bindMatrixInverse");let bn=H.skeleton;bn&&(Be.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),jt.setValue(z,"boneTexture",bn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(jt.setOptional(z,H,"batchingTexture"),jt.setValue(z,"batchingTexture",H._matricesTexture,A));let Ko=V.morphAttributes;if((Ko.position!==void 0||Ko.normal!==void 0||Ko.color!==void 0&&Be.isWebGL2===!0)&&Ke.update(H,V,Di),(ar||Je.receiveShadow!==H.receiveShadow)&&(Je.receiveShadow=H.receiveShadow,jt.setValue(z,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Ni.envMap.value=Ue,Ni.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),ar&&(jt.setValue(z,"toneMappingExposure",x.toneMappingExposure),Je.needsLights&&ip(Ni,jo),ge&&q.fog===!0&&ue.refreshFogUniforms(Ni,ge),ue.refreshMaterialUniforms(Ni,q,J,$,Ae),Ls.upload(z,Rh(Je),Ni,A)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ls.upload(z,Rh(Je),Ni,A),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&jt.setValue(z,"center",H.center),jt.setValue(z,"modelViewMatrix",H.modelViewMatrix),jt.setValue(z,"normalMatrix",H.normalMatrix),jt.setValue(z,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let bn=q.uniformsGroups;for(let Qo=0,rp=bn.length;Qo<rp;Qo++)if(Be.isWebGL2){let Lh=bn[Qo];ot.update(Lh,Di),ot.bind(Lh,Di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Di}function ip(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function sp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,k,V){Xe.get(E.texture).__webglTexture=k,Xe.get(E.depthTexture).__webglTexture=V;let q=Xe.get(E);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=V===void 0,q.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,k){let V=Xe.get(E);V.__webglFramebuffer=k,V.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,V=0){b=E,R=k,T=V;let q=!0,H=null,ge=!1,be=!1;if(E){let Ue=Xe.get(E);Ue.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(z.FRAMEBUFFER,null),q=!1):Ue.__webglFramebuffer===void 0?A.setupRenderTarget(E):Ue.__hasExternalTextures&&A.rebindTextures(E,Xe.get(E.texture).__webglTexture,Xe.get(E.depthTexture).__webglTexture);let Ye=E.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(be=!0);let ze=Xe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ze[k])?H=ze[k][V]:H=ze[k],ge=!0):Be.isWebGL2&&E.samples>0&&A.useMultisampledRTT(E)===!1?H=Xe.get(E).__webglMultisampledFramebuffer:Array.isArray(ze)?H=ze[V]:H=ze,M.copy(E.viewport),D.copy(E.scissor),O=E.scissorTest}else M.copy(ee).multiplyScalar(J).floor(),D.copy(se).multiplyScalar(J).floor(),O=ce;if(ve.bindFramebuffer(z.FRAMEBUFFER,H)&&Be.drawBuffers&&q&&ve.drawBuffers(E,H),ve.viewport(M),ve.scissor(D),ve.setScissorTest(O),ge){let Ue=Xe.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ue.__webglTexture,V)}else if(be){let Ue=Xe.get(E.texture),Ye=k||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ue.__webglTexture,V||0,Ye)}C=-1},this.readRenderTargetPixels=function(E,k,V,q,H,ge,be){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Xe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&be!==void 0&&(Ie=Ie[be]),Ie){ve.bindFramebuffer(z.FRAMEBUFFER,Ie);try{let Ue=E.texture,Ye=Ue.format,ze=Ue.type;if(Ye!==Dn&&_e.convert(Ye)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ge=ze===br&&(Ce.has("EXT_color_buffer_half_float")||Be.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(ze!==Mi&&_e.convert(ze)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===xi&&(Be.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-q&&V>=0&&V<=E.height-H&&z.readPixels(k,V,q,H,_e.convert(Ye),_e.convert(ze),ge)}finally{let Ue=b!==null?Xe.get(b).__webglFramebuffer:null;ve.bindFramebuffer(z.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(E,k,V=0){let q=Math.pow(2,-V),H=Math.floor(k.image.width*q),ge=Math.floor(k.image.height*q);A.setTexture2D(k,0),z.copyTexSubImage2D(z.TEXTURE_2D,V,0,0,E.x,E.y,H,ge),ve.unbindTexture()},this.copyTextureToTexture=function(E,k,V,q=0){let H=k.image.width,ge=k.image.height,be=_e.convert(V.format),Ie=_e.convert(V.type);A.setTexture2D(V,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment),k.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,q,E.x,E.y,H,ge,be,Ie,k.image.data):k.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,q,E.x,E.y,k.mipmaps[0].width,k.mipmaps[0].height,be,k.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,q,E.x,E.y,be,Ie,k.image),q===0&&V.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(E,k,V,q,H=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ge=E.max.x-E.min.x+1,be=E.max.y-E.min.y+1,Ie=E.max.z-E.min.z+1,Ue=_e.convert(q.format),Ye=_e.convert(q.type),ze;if(q.isData3DTexture)A.setTexture3D(q,0),ze=z.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)A.setTexture2DArray(q,0),ze=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);let Ge=z.getParameter(z.UNPACK_ROW_LENGTH),Tt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),pn=z.getParameter(z.UNPACK_SKIP_PIXELS),Ht=z.getParameter(z.UNPACK_SKIP_ROWS),Yn=z.getParameter(z.UNPACK_SKIP_IMAGES),_t=V.isCompressedTexture?V.mipmaps[H]:V.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,_t.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,_t.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,E.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,E.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,E.min.z),V.isDataTexture||V.isData3DTexture?z.texSubImage3D(ze,H,k.x,k.y,k.z,ge,be,Ie,Ue,Ye,_t.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(ze,H,k.x,k.y,k.z,ge,be,Ie,Ue,_t.data)):z.texSubImage3D(ze,H,k.x,k.y,k.z,ge,be,Ie,Ue,Ye,_t),z.pixelStorei(z.UNPACK_ROW_LENGTH,Ge),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Tt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,pn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ht),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Yn),H===0&&q.generateMipmaps&&z.generateMipmap(ze),ve.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),ve.unbindTexture()},this.resetState=function(){R=0,T=0,b=null,ve.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Pc?"display-p3":"srgb",t.unpackColorSpace=ct.workingColorSpace===io?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===mt?Wi:xu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Wi?mt:ni}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ic=class extends Yi{};ic.prototype.isWebGL1Renderer=!0;Os=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Le(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},wi=class extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},$a=class extends yn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ws=new yt,Qd=new yt,Sa=[],eu=new si,Kx=new yt,ur=new Ee,fr=new qi,kn=class extends Ee{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $a(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Kx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ws),eu.copy(e.boundingBox).applyMatrix4(ws),this.boundingBox.union(eu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ws),fr.copy(e.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ur.geometry=this.geometry,ur.material=this.material,ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fr.copy(this.boundingSphere),fr.applyMatrix4(n),e.ray.intersectsSphere(fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ws),Qd.multiplyMatrices(n,ws),ur.matrixWorld=Qd,ur.raycast(e,Sa);for(let a=0,o=Sa.length;a<o;a++){let l=Sa[a];l.instanceId=r,l.object=this,t.push(l)}Sa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $a(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Fs=class extends Tn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},An=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new pe:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new L,s=[],r=[],a=[],o=new L,l=new yt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos($t(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos($t(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Er=class extends An{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new pe,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},sc=class extends Er{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};wa=new L,Ll=new Ic,Il=new Ic,Dl=new Ic,rc=class extends An{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(wa.subVectors(s[0],s[1]).add(s[0]),c=wa);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(wa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=wa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Ll.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,y,m),Il.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,y,m),Dl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Ll.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Il.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Dl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Ll.calc(l),Il.calc(l),Dl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Ya=class extends An{constructor(e=new pe,t=new pe,n=new pe,s=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new pe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(yr(e,s.x,r.x,a.x,o.x),yr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ac=class extends An{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(yr(e,s.x,r.x,a.x,o.x),yr(e,s.y,r.y,a.y,o.y),yr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Za=class extends An{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oc=class extends An{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ja=class extends An{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(gr(e,s.x,r.x,a.x),gr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lc=class extends An{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(gr(e,s.x,r.x,a.x),gr(e,s.y,r.y,a.y),gr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ja=class extends An{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(tu(o,l.x,c.x,h.x,d.x),tu(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new pe().fromArray(s))}return this}},nu=Object.freeze({__proto__:null,ArcCurve:sc,CatmullRomCurve3:rc,CubicBezierCurve:Ya,CubicBezierCurve3:ac,EllipseCurve:Er,LineCurve:Za,LineCurve3:oc,QuadraticBezierCurve:Ja,QuadraticBezierCurve3:lc,SplineCurve:ja}),cc=class extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new nu[s.type]().fromJSON(s))}return this}},Tr=class extends cc{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Za(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ja(this.currentPoint.clone(),new pe(e,t),new pe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ya(this.currentPoint.clone(),new pe(e,t),new pe(n,s),new pe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ja(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Er(e,t,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},hc=class i extends Yt{constructor(e=[new pe(0,-.5),new pe(.5,0),new pe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=$t(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,d=new L,u=new pe,f=new L,g=new L,y=new L,m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let v=0;v<=t;v++){let x=n+v*h*s,S=Math.sin(x),R=Math.cos(x);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*S,d.y=e[T].y,d.z=e[T].x*R,a.push(d.x,d.y,d.z),u.x=v/t,u.y=T/(e.length-1),o.push(u.x,u.y);let b=l[3*T+0]*S,C=l[3*T+1],_=l[3*T+0]*R;c.push(b,C,_)}}for(let v=0;v<t;v++)for(let x=0;x<e.length-1;x++){let S=x+v*e.length,R=S,T=S+e.length,b=S+e.length+1,C=S+1;r.push(R,T,C),r.push(b,C,T)}this.setIndex(r),this.setAttribute("position",new Qe(a,3)),this.setAttribute("uv",new Qe(o,2)),this.setAttribute("normal",new Qe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Ei=class i extends hc{constructor(e=1,t=1,n=4,s=8){let r=new Tr;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},Bs=class i extends Yt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new L,h=new pe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(o,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},At=class i extends Yt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,y=[],m=n/2,p=0;v(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Qe(d,3)),this.setAttribute("normal",new Qe(u,3)),this.setAttribute("uv",new Qe(f,2));function v(){let S=new L,R=new L,T=0,b=(t-e)/n;for(let C=0;C<=r;C++){let _=[],M=C/r,D=M*(t-e)+e;for(let O=0;O<=s;O++){let K=O/s,I=K*l+o,F=Math.sin(I),$=Math.cos(I);R.x=D*F,R.y=-M*n+m,R.z=D*$,d.push(R.x,R.y,R.z),S.set(F,b,$).normalize(),u.push(S.x,S.y,S.z),f.push(K,1-M),_.push(g++)}y.push(_)}for(let C=0;C<s;C++)for(let _=0;_<r;_++){let M=y[_][C],D=y[_+1][C],O=y[_+1][C+1],K=y[_][C+1];h.push(M,D,K),h.push(D,O,K),T+=6}c.addGroup(p,T,0),p+=T}function x(S){let R=g,T=new pe,b=new L,C=0,_=S===!0?e:t,M=S===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*M,0),u.push(0,M,0),f.push(.5,.5),g++;let D=g;for(let O=0;O<=s;O++){let I=O/s*l+o,F=Math.cos(I),$=Math.sin(I);b.x=_*$,b.y=m*M,b.z=_*F,d.push(b.x,b.y,b.z),u.push(0,M,0),T.x=F*.5+.5,T.y=$*.5*M+.5,f.push(T.x,T.y),g++}for(let O=0;O<s;O++){let K=R+O,I=D+O;S===!0?h.push(I,I+1,K):h.push(I+1,I,K),C+=3}c.addGroup(p,C,S===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ri=class i extends At{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ar=class i extends Yt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(r.slice(),3)),this.setAttribute("uv",new Qe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let x=new L,S=new L,R=new L;for(let T=0;T<t.length;T+=3)f(t[T+0],x),f(t[T+1],S),f(t[T+2],R),l(x,S,R,v)}function l(v,x,S,R){let T=R+1,b=[];for(let C=0;C<=T;C++){b[C]=[];let _=v.clone().lerp(S,C/T),M=x.clone().lerp(S,C/T),D=T-C;for(let O=0;O<=D;O++)O===0&&C===T?b[C][O]=_:b[C][O]=_.clone().lerp(M,O/D)}for(let C=0;C<T;C++)for(let _=0;_<2*(T-C)-1;_++){let M=Math.floor(_/2);_%2===0?(u(b[C][M+1]),u(b[C+1][M]),u(b[C][M])):(u(b[C][M+1]),u(b[C+1][M+1]),u(b[C+1][M]))}}function c(v){let x=new L;for(let S=0;S<r.length;S+=3)x.x=r[S+0],x.y=r[S+1],x.z=r[S+2],x.normalize().multiplyScalar(v),r[S+0]=x.x,r[S+1]=x.y,r[S+2]=x.z}function h(){let v=new L;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];let S=m(v)/2/Math.PI+.5,R=p(v)/Math.PI+.5;a.push(S,1-R)}g(),d()}function d(){for(let v=0;v<a.length;v+=6){let x=a[v+0],S=a[v+2],R=a[v+4],T=Math.max(x,S,R),b=Math.min(x,S,R);T>.9&&b<.1&&(x<.2&&(a[v+0]+=1),S<.2&&(a[v+2]+=1),R<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,x){let S=v*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function g(){let v=new L,x=new L,S=new L,R=new L,T=new pe,b=new pe,C=new pe;for(let _=0,M=0;_<r.length;_+=9,M+=6){v.set(r[_+0],r[_+1],r[_+2]),x.set(r[_+3],r[_+4],r[_+5]),S.set(r[_+6],r[_+7],r[_+8]),T.set(a[M+0],a[M+1]),b.set(a[M+2],a[M+3]),C.set(a[M+4],a[M+5]),R.copy(v).add(x).add(S).divideScalar(3);let D=m(R);y(T,M+0,v,D),y(b,M+2,x,D),y(C,M+4,S,D)}}function y(v,x,S,R){R<0&&v.x===1&&(a[x]=v.x-1),S.x===0&&S.z===0&&(a[x]=R/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},zs=class i extends Ar{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Rr=class extends Tr{constructor(e){super(e),this.uuid=Vs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Tr().fromJSON(s))}return this}},a_={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Lu(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,d,u,f;if(n&&(r=d_(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let g=t;g<s;g+=t)d=i[g],u=i[g+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Cr(r,a,t,o,l,f,0),a}};xr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];su(e),ru(n,e);let a=e.length;t.forEach(su);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,ru(n,t[l]);let o=a_.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};Ir=class i extends Ar{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ka=class i extends Ar{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ji=class i extends Yt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=e,u=(t-e)/s,f=new L,g=new pe;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let v=p+m,x=v,S=v+n+1,R=v+n+2,T=v+1;o.push(x,S,T),o.push(S,R,T)}}this.setIndex(o),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Qa=class i extends Yt{constructor(e=new Rr([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Qe(s,3)),this.setAttribute("normal",new Qe(r,3)),this.setAttribute("uv",new Qe(a,2));function c(h){let d=s.length/3,u=h.extractPoints(t),f=u.shape,g=u.holes;xr.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let v=g[m];xr.isClockWise(v)===!0&&(g[m]=v.reverse())}let y=xr.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let v=g[m];f=f.concat(v)}for(let m=0,p=f.length;m<p;m++){let v=f[m];s.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let m=0,p=y.length;m<p;m++){let v=y[m],x=v[0]+d,S=v[1]+d,R=v[2]+d;n.push(x,S,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return S_(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};Zt=class i extends Yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new L,u=new L,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let v=[],x=p/n,S=0;p===0&&a===0?S=.5/t:p===n&&l===Math.PI&&(S=-.5/t);for(let R=0;R<=t;R++){let T=R/t;d.x=-e*Math.cos(s+T*r)*Math.sin(a+x*o),d.y=e*Math.cos(a+x*o),d.z=e*Math.sin(s+T*r)*Math.sin(a+x*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(T+S,1-x),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let x=h[p][v+1],S=h[p][v],R=h[p+1][v],T=h[p+1][v+1];(p!==0||a>0)&&f.push(x,S,T),(p!==n-1||l<Math.PI)&&f.push(S,R,T)}this.setIndex(f),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(y,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Hs=class i extends Yt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new L,d=new L,u=new L;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let y=g/s*r,m=f/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(y),d.y=(e+t*Math.cos(m))*Math.sin(y),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let y=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,v=(s+1)*f+g;a.push(y,m,v),a.push(m,p,v)}this.setIndex(a),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},qt=class extends Xi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_u,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};Gs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fc=class extends Gs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cd,endingEnd:cd}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case hd:r=e,o=2*t-n;break;case dd:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hd:a=e,l=2*n-t;break;case dd:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,v=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,x=(-1-f)*m+(1.5+f)*y+.5*g,S=f*m-f*y;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+v*a[c+R]+x*a[l+R]+S*a[d+R];return r}},pc=class extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},mc=class extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Un=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Aa(t,this.TimeBufferType),this.values=Aa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Aa(e.times,Array),values:Aa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new mc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ca:t=this.InterpolantFactoryMethodDiscrete;break;case Pa:t=this.InterpolantFactoryMethodLinear;break;case al:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ca;case this.InterpolantFactoryMethodLinear:return Pa;case this.InterpolantFactoryMethodSmooth:return al}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&w_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===al,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let y=t[d+g];if(y!==t[u+g]||y!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=Pa;ji=class extends Un{};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Ca;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;gc=class extends Un{};gc.prototype.ValueTypeName="color";yc=class extends Un{};yc.prototype.ValueTypeName="number";xc=class extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Hn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Dr=class extends Un{InterpolantFactoryMethodLinear(e){return new xc(this.times,this.values,this.getValueSize(),e)}};Dr.prototype.ValueTypeName="quaternion";Dr.prototype.DefaultInterpolation=Pa;Dr.prototype.InterpolantFactoryMethodSmooth=void 0;Ki=class extends Un{};Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Ca;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;_c=class extends Un{};_c.prototype.ValueTypeName="vector";vc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},E_=new vc,Mc=class{constructor(e){this.manager=e!==void 0?e:E_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Mc.DEFAULT_MATERIAL_NAME="__DEFAULT";eo=class extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ti=class extends eo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Nl=new yt,au=new L,ou=new L,bc=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wr,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;au.setFromMatrixPosition(e.matrixWorld),t.position.copy(au),ou.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ou),t.updateMatrixWorld(),Nl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Sc=class extends bc{constructor(){super(new Wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ai=class extends eo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new Sc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Dc="\\[\\]\\.:\\/",T_=new RegExp("["+Dc+"]","g"),Nc="[^"+Dc+"]",A_="[^"+Dc.replace("\\.","")+"]",R_=/((?:WC+[\/:])*)/.source.replace("WC",Nc),C_=/(WCOD+)?/.source.replace("WCOD",A_),P_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nc),L_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nc),I_=new RegExp("^"+R_+C_+P_+L_+"$"),D_=["material","materials","bones","map"],wc=class{constructor(e,t,n){let s=n||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},gt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(T_,"")}static parseTrackName(e){let t=I_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);D_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gt.Composite=wc;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];xv=new Float32Array(1),to=class{constructor(e,t,n=0,s=1/0){this.ray=new Ba(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ec(e,this,n,t),n.sort(lu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ec(e[s],this,n,t);return n.sort(lu),n}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160")});function Nu(i){let e=new Map,t=null;try{t=window[i];let r="__t";t.setItem(r,"1"),t.removeItem(r)}catch{t=null}let n=()=>i==="localStorage"&&window.__cgDataReady&&window.CrazyGames&&window.CrazyGames.SDK&&window.CrazyGames.SDK.data||null,s=()=>i==="localStorage"&&window.__pgStore&&window.bridge||null;return{getItem(r){if(s()&&window.__pgStore.has(r))return window.__pgStore.get(r);let a=n();if(a)try{let o=a.getItem(r);if(o!=null)return o}catch{}try{return t?t.getItem(r):e.has(r)?e.get(r):null}catch{return e.has(r)?e.get(r):null}},setItem(r,a){if(s()){window.__pgStore.set(r,String(a));try{window.bridge.storage.set([r],[String(a)])}catch{}}let o=n();if(o)try{o.setItem(r,String(a))}catch{}try{t?t.setItem(r,String(a)):e.set(r,String(a))}catch{e.set(r,String(a))}},removeItem(r){if(s()){window.__pgStore.delete(r);try{window.bridge.storage.delete&&window.bridge.storage.delete([r])}catch{}}let a=n();if(a)try{a.removeItem(r)}catch{}try{t&&t.removeItem(r)}catch{}e.delete(r)}}}var Jt,qs,ao=Dt(()=>{Jt=Nu("localStorage"),qs=Nu("sessionStorage")});var Nr,oo,ku,Rt,lo,Qi=Dt(()=>{Nr=typeof window<"u"&&window.ISLA_SERVER?String(window.ISLA_SERVER).replace(/\/$/,""):"",oo=Nr||"",ku=Nr?Nr.replace(/^http/,"ws"):`${location.protocol==="https:"?"wss":"ws"}://${location.host||"localhost:3000"}`,Rt=Nr?window.ISLA_PORTAL||"portal":"",lo=Nr||location.origin});function Uu(i){return i.kind==="weapon"?Ft[i.type].name:i.kind==="ammo"?`${es[i.type].name} x${i.amount}`:i.kind==="heal"?`${uo[i.type].name}${i.amount>1?" x"+i.amount:""}`:"Objeto"}var Ft,ho,es,uo,kc,Uc,Oc,Fc,fo=Dt(()=>{Ft={pistol:{id:"pistol",name:"Pistola",dmg:19,interval:.26,range:34,reload:1.15,mag:12,ammo:"light",spread:.035,pellets:1,speed:85,auto:!1,recoil:.25,zoom:1,color:"#7c8796",rarity:"com\xFAn"},smg:{id:"smg",name:"Subfusil",dmg:12,interval:.075,range:27,reload:1.7,mag:30,ammo:"light",spread:.085,pellets:1,speed:80,auto:!0,recoil:.12,zoom:1,color:"#4aa3ff",rarity:"com\xFAn"},shotgun:{id:"shotgun",name:"Escopeta",dmg:11,interval:.85,range:15,reload:2.3,mag:5,ammo:"shells",spread:.2,pellets:8,speed:70,auto:!1,recoil:.6,zoom:1,color:"#c47a3c",rarity:"rara"},ar:{id:"ar",name:"Rifle de asalto",dmg:20,interval:.125,range:44,reload:2,mag:25,ammo:"medium",spread:.045,pellets:1,speed:100,auto:!0,recoil:.18,zoom:1.12,color:"#5ad67d",rarity:"rara"},sniper:{id:"sniper",name:"Rifle de precisi\xF3n",dmg:88,interval:1.4,range:85,reload:2.7,mag:4,ammo:"heavy",spread:.004,pellets:1,speed:170,auto:!1,recoil:.9,zoom:1.45,color:"#b07cff",rarity:"\xE9pica"}},ho=Object.keys(Ft),es={light:{id:"light",name:"Munici\xF3n ligera",pack:30,max:180,color:"#ffd23f"},medium:{id:"medium",name:"Munici\xF3n media",pack:30,max:180,color:"#5ad67d"},shells:{id:"shells",name:"Cartuchos",pack:10,max:40,color:"#ff6b3d"},heavy:{id:"heavy",name:"Munici\xF3n pesada",pack:8,max:32,color:"#b07cff"}},uo={bandage:{id:"bandage",name:"Venda",heal:15,time:1.6,cap:75,max:10,color:"#f5f5f5"},medkit:{id:"medkit",name:"Botiqu\xEDn",heal:60,time:3.2,cap:100,max:4,color:"#ff4d5a"}},kc=.45,Uc=1.5,Oc=2.1,Fc=2.5});function nt(i,e={}){let t=i+JSON.stringify(e);return Bc.has(t)||Bc.set(t,new qt({color:i,...e})),Bc.get(t)}function Gn(i,e){return zc.has(i)||zc.set(i,e()),zc.get(i)}function Vn(i,e,t=0,n=0,s=0,r=!0){let a=new Ee(i,e);return a.position.set(t,n,s),a.castShadow=r,a}function Hc(i){let e=new st,t=nt("#2b2f36"),n=nt("#7c8796"),s=nt("#9a5b2e"),r=nt(Ft[i]?.color||"#888"),a=(l,c,h,d,u,f,g)=>e.add(Vn(new ft(l,c,h),d,u,f,g)),o=(l,c,h,d,u,f)=>{let g=Vn(new At(l,l,c,8),h,d,u,f);g.rotation.x=Math.PI/2,e.add(g)};switch(i){case"pistol":a(.11,.13,.38,n,0,.04,.14),a(.09,.2,.11,t,0,-.08,0),a(.115,.04,.3,r,0,.115,.13);break;case"smg":a(.13,.16,.55,t,0,.04,.2),a(.08,.26,.1,r,0,-.14,.24),a(.09,.18,.1,t,0,-.08,0),o(.035,.22,n,0,.05,.56),a(.07,.08,.22,n,0,.03,-.15);break;case"shotgun":o(.05,.85,n,0,.07,.45),o(.045,.75,t,0,-.02,.4),a(.12,.08,.3,s,0,-.03,.55),a(.12,.17,.4,s,0,-.02,-.12),a(.1,.14,.24,t,0,.04,.12);break;case"ar":a(.12,.17,.62,t,0,.05,.22),o(.035,.36,n,0,.06,.7),a(.1,.24,.1,r,0,-.14,.27),a(.1,.15,.32,t,0,0,-.22),a(.13,.08,.32,r,0,.1,.36),a(.05,.07,.12,n,0,.17,.12);break;case"sniper":o(.035,1.05,n,0,.06,.68),a(.12,.17,.6,t,0,.03,.12),a(.11,.18,.4,r,0,-.01,-.3),o(.06,.38,t,0,.2,.15),o(.07,.04,r,0,.2,.35),a(.07,.15,.08,t,0,-.1,.03);break;default:a(.1,.1,.3,n,0,0,.1)}return e.userData.muzzle={pistol:.34,smg:.68,shotgun:.88,ar:.9,sniper:1.22}[i]||.4,e}function Ou(i){let e=new st,t=new st;e.add(t);let n="#ffffff";if(i.k==="weapon"){let a=Hc(i.ty);a.scale.setScalar(1.25),a.rotation.y=Math.PI/2,a.position.x=-.35,t.add(a),n=N_[Ft[i.ty].rarity]||"#fff"}else if(i.k==="ammo"){let a=es[i.ty].color;t.add(Vn(Gn("ammoBox",()=>new ft(.5,.3,.35)),nt("#3a4a3a"))),t.add(Vn(Gn("ammoLid",()=>new ft(.52,.06,.37)),nt(a),0,.17,0));for(let o=0;o<3;o++)t.add(Vn(Gn("bullet",()=>new At(.035,.035,.18,6)),nt("#e0b040"),-.12+o*.12,.28,0));n=a}else if(i.ty==="medkit")t.add(Vn(Gn("kit",()=>new ft(.55,.38,.3)),nt("#ffffff"))),t.add(Vn(Gn("crossA",()=>new ft(.3,.09,.32)),nt("#ff3b4a"))),t.add(Vn(Gn("crossB",()=>new ft(.09,.3,.32)),nt("#ff3b4a"))),n="#ff4d5a";else{let a=Vn(Gn("roll",()=>new At(.16,.16,.26,12)),nt("#f5f0e6"));a.rotation.z=Math.PI/2,t.add(a),t.add(Vn(Gn("rollband",()=>new At(.165,.165,.05,12)),nt("#ff6b7a")).rotateZ(Math.PI/2)),n="#9df59d"}t.position.y=.55;let s=new Ee(Gn("lootDisc",()=>new Bs(.55,20)),new It({color:n,transparent:!0,opacity:.45,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.05,e.add(s);let r=new Ee(Gn("lootBeam",()=>new At(.06,.25,1.6,8,1,!0)),new It({color:n,transparent:!0,opacity:.22,depthWrite:!1,side:Vt}));return r.position.y=.8,i.k==="weapon"&&e.add(r),e.userData.inner=t,e.userData.phase=Math.random()*6,t.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),e}function Fu(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d");e.fillStyle="#c98a48",e.fillRect(0,0,128,128),e.fillStyle="#b07636";for(let n=0;n<4;n++)e.fillRect(0,n*32+28,128,4);e.strokeStyle="#7a4a1e",e.lineWidth=12,e.strokeRect(6,6,116,116),e.beginPath(),e.moveTo(10,10),e.lineTo(118,118),e.stroke(),e.fillStyle="#ffd23f",e.font="bold 34px sans-serif",e.textAlign="center",e.textBaseline="middle";let t=new Fs(i);return t.colorSpace=mt,t}var Bc,zc,N_,po=Dt(()=>{ai();fo();Bc=new Map;zc=new Map;N_={com\u00FAn:"#e6e6e6",rara:"#3fa9f5",\u00E9pica:"#c77dff"}});function Wc(i,e,t){let n=_n[i];return n?n.unlock.type==="free"?!0:n.unlock.type==="level"?e>=n.unlock.level:Array.isArray(t)?t.includes(i):!!(t&&t.has&&t.has(i)):!1}function zu(i,e=null,t=null){let n={...xn};if(!i||typeof i!="object")return n;for(let s of Xs){let r=i[s.id];if(r===null&&!s.required){n[s.id]=null;continue}let a=_n[r];!a||a.slot!==s.id||e!==null&&!Wc(r,e,t)||(n[s.id]=r)}for(let s of Vc)typeof i[s.id]=="string"&&k_.test(i[s.id])&&s.palette.includes(i[s.id].toLowerCase())&&(n[s.id]=i[s.id].toLowerCase());return n}var Xs,Vc,Bu,me,wt,Mt,cn,Ci,Gc,Pi,_n,xn,kr,k_,Hu,Gu,Vu,mo=Dt(()=>{Xs=[{id:"hair",name:"Peinados",icon:"\u{1F487}",required:!0},{id:"face",name:"Caras",icon:"\u{1F600}",required:!0},{id:"hat",name:"Gorras y sombreros",icon:"\u{1F9E2}"},{id:"mask",name:"M\xE1scaras",icon:"\u{1F977}"},{id:"glasses",name:"Gafas",icon:"\u{1F576}\uFE0F"},{id:"top",name:"Camisetas y chaquetas",icon:"\u{1F455}",required:!0},{id:"pants",name:"Pantalones",icon:"\u{1F456}",required:!0},{id:"backpack",name:"Mochilas",icon:"\u{1F392}"},{id:"special",name:"Accesorios especiales",icon:"\u2728"}],Vc=[{id:"skin",name:"Tono de piel",palette:["#ffdbc2","#f2c09a","#e0a878","#c98d63","#a26a45","#7a4b31","#5a3522"]},{id:"hairColor",name:"Color de pelo",palette:["#1c1c1c","#4a2e1c","#7a4a22","#c98d4a","#f2d16b","#e8e8e8","#d6334a","#c77dff","#3fa9f5","#5ad67d","#ff8fc8"]},{id:"topColor",name:"Color de la ropa",palette:["#e8473f","#ff8f3f","#ffd23f","#5ad67d","#2fb8c4","#3f7fe8","#8a5cf5","#ff5fa2","#f5f5f5","#3a3f4b","#8b5a2b","#1f6b45"]},{id:"pantsColor",name:"Color del pantal\xF3n",palette:["#2f4a7a","#30343f","#6b4f2e","#4d5d3a","#8a8f99","#f2e6c9","#e8473f","#3f7fe8","#1c1c1c","#c77dff"]}],Bu={com\u00FAn:{color:"#b9c6e6"},rara:{color:"#3fa9f5"},\u00E9pica:{color:"#c77dff"},legendaria:{color:"#ffb020"}},me=(i,e,t,n,s,r=[])=>({id:`${i}-${e}`,slot:i,style:e,name:t,rarity:n,unlock:s,tags:r}),wt={type:"free"},Mt=i=>({type:"level",level:i}),cn=i=>({type:"coins",price:i}),Ci=i=>({type:"ads",ads:i}),Gc={type:"daily"},Pi=[me("hair","short","Corto cl\xE1sico","com\xFAn",wt),me("hair","spiky","De punta","com\xFAn",wt),me("hair","ponytail","Coleta","com\xFAn",wt),me("hair","long","Melena","com\xFAn",wt),me("hair","buzz","Rapado","com\xFAn",wt),me("hair","bald","Calvo","com\xFAn",wt),me("hair","afro","Afro","rara",Mt(3)),me("hair","bun","Mo\xF1o","rara",Mt(6)),me("hair","curly","Rizos","rara",cn(250),["popular"]),me("hair","mohawk","Cresta","\xE9pica",cn(400),["featured"]),me("face","happy","Alegre","com\xFAn",wt),me("face","determined","Decidido","com\xFAn",wt),me("face","cool","Chulito","rara",Mt(4)),me("face","surprised","Sorprendido","rara",Ci(1),["new"]),me("face","angry","Furioso","rara",cn(150)),me("face","sleepy","Dormil\xF3n","rara",Gc),me("hat","beanie","Gorro de lana","com\xFAn",wt),me("hat","headband","Cinta deportiva","com\xFAn",wt),me("hat","helmet","Casco de moto","com\xFAn",wt),me("hat","cap","Gorra b\xE1sica","com\xFAn",Mt(2)),me("hat","beret","Boina","rara",Ci(2)),me("hat","chef","Gorro de chef","rara",cn(300)),me("hat","cowboy","Sombrero vaquero","rara",cn(400),["popular"]),me("hat","tophat","Chistera","\xE9pica",cn(650)),me("hat","viking","Casco vikingo","\xE9pica",Mt(12)),me("hat","pirate","Sombrero pirata","\xE9pica",Mt(18)),me("hat","propeller","Gorra con h\xE9lice","\xE9pica",Ci(3),["new"]),me("hat","party","Gorro de fiesta","rara",Gc),me("hat","crown","Corona real","legendaria",Mt(25)),me("hat","astro","Casco de astronauta","legendaria",Mt(30)),me("mask","bandit","Pa\xF1uelo de bandido","com\xFAn",wt),me("mask","ninja","M\xE1scara ninja","rara",Mt(8)),me("mask","hockey","M\xE1scara de hockey","\xE9pica",cn(500)),me("mask","fox","M\xE1scara de zorro","\xE9pica",Ci(3),["featured"]),me("mask","skull","Calavera","legendaria",Mt(22)),me("glasses","round","Gafas redondas","com\xFAn",wt),me("glasses","goggles","Gafas de aviador","com\xFAn",wt),me("glasses","sun","Gafas de sol especiales","rara",Mt(5)),me("glasses","heart","Gafas de coraz\xF3n","rara",Ci(2)),me("glasses","star","Gafas de estrella","\xE9pica",cn(350),["popular"]),me("glasses","pixel","Gafas pixeladas","\xE9pica",Gc),me("glasses","visor","Visor cibern\xE9tico","legendaria",Mt(16)),me("top","tshirt","Camiseta","com\xFAn",wt),me("top","hoodie","Sudadera con capucha","com\xFAn",wt),me("top","tank","Camiseta de tirantes","com\xFAn",wt),me("top","jacket","Chaqueta","rara",Mt(7)),me("top","jersey","Camiseta deportiva","rara",Mt(11)),me("top","hawaiian","Camisa hawaiana","rara",Ci(2),["new"]),me("top","vest","Chaleco t\xE1ctico","\xE9pica",cn(500)),me("top","puffer","Plum\xEDfero","\xE9pica",cn(700),["featured"]),me("top","suit","Traje elegante","\xE9pica",Mt(15)),me("top","astro","Traje espacial","legendaria",Mt(30)),me("pants","jeans","Vaqueros","com\xFAn",wt),me("pants","shorts","Pantal\xF3n corto","com\xFAn",wt),me("pants","joggers","Ch\xE1ndal","com\xFAn",wt),me("pants","cargo","Pantal\xF3n cargo","rara",Mt(9)),me("pants","skirt","Falda","rara",cn(250)),me("pants","suit","Pantal\xF3n de traje","\xE9pica",Mt(15)),me("pants","astro","Pantal\xF3n espacial","legendaria",Mt(30)),me("backpack","classic","Mochila cl\xE1sica","com\xFAn",wt),me("backpack","explorer","Mochila exclusiva de explorador","\xE9pica",Mt(10)),me("backpack","guitar","Guitarra","\xE9pica",cn(600),["popular"]),me("backpack","turtle","Caparaz\xF3n de tortuga","\xE9pica",Ci(3)),me("backpack","jetpack","Mochila cohete","legendaria",cn(900),["featured","new"]),me("backpack","wings","Alas de \xE1ngel","legendaria",Mt(20)),me("special","scarf","Bufanda","com\xFAn",wt),me("special","headphones","Cascos de m\xFAsica","rara",cn(350)),me("special","chain","Medall\xF3n dorado","rara",Ci(2)),me("special","cape","Capa de h\xE9roe","\xE9pica",Mt(14)),me("special","halo","Aureola","legendaria",Mt(28))],_n=Object.fromEntries(Pi.map(i=>[i.id,i])),xn={hair:"hair-short",face:"face-happy",hat:null,mask:null,glasses:null,top:"top-tshirt",pants:"pants-jeans",backpack:null,special:null,skin:"#f2c09a",hairColor:"#4a2e1c",topColor:"#e8473f",pantsColor:"#2f4a7a"},kr=[{name:"Rocco",outfit:{...xn,hat:"hat-beanie",topColor:"#e8473f"}},{name:"Luna",outfit:{...xn,hair:"hair-ponytail",hairColor:"#c77dff",top:"top-hoodie",topColor:"#8a5cf5",pantsColor:"#30343f",skin:"#ffdbc2"}},{name:"Kiko",outfit:{...xn,hair:"hair-spiky",hairColor:"#1c1c1c",top:"top-tank",topColor:"#5ad67d",pants:"pants-shorts",pantsColor:"#6b4f2e",backpack:"backpack-classic",skin:"#c98d63"}},{name:"Nara",outfit:{...xn,hair:"hair-long",hairColor:"#1c1c1c",hat:"hat-helmet",topColor:"#ff8f3f",pants:"pants-joggers",pantsColor:"#30343f",skin:"#7a4b31",face:"face-determined"}},{name:"Mara",outfit:{...xn,hair:"hair-long",hairColor:"#d6334a",mask:"mask-bandit",top:"top-hoodie",topColor:"#2fb8c4",pantsColor:"#f2e6c9",special:"special-scarf",skin:"#e0a878"}},{name:"Bolt",outfit:{...xn,hair:"hair-buzz",hairColor:"#e8e8e8",glasses:"glasses-goggles",topColor:"#ffd23f",pants:"pants-joggers",pantsColor:"#1c1c1c",skin:"#a26a45",face:"face-determined"}}],k_=/^#[0-9a-f]{6}$/i;Hu=[{coins:50},{coins:60,xp:100},{coins:100},{item:"glasses-pixel",coins:50},{coins:150},{coins:100,xp:250},{item:"hat-party",coins:200}],Gu=40,Vu=[{id:"pack-s",coins:500,price:199,label:"500 monedas"},{id:"pack-m",coins:1300,price:499,label:"1.300 monedas",bonus:"+30 %"},{id:"pack-l",coins:2800,price:999,label:"2.800 monedas",bonus:"+40 %"}]});var qc,Av,Xc=Dt(()=>{qc=[{id:"rocco",name:"Rocco",unlock:1,skin:"#f2c09a",shirt:"#e8473f",pants:"#2f4a7a",shoes:"#3a2a22",hat:"cap",hatColor:"#e8473f",hair:"#4a2e1c",extra:"none"},{id:"luna",name:"Luna",unlock:1,skin:"#ffd7b5",shirt:"#8a5cf5",pants:"#2b2b3d",shoes:"#ffffff",hat:"ponytail",hatColor:"#c77dff",hair:"#c77dff",extra:"none"},{id:"kiko",name:"Kiko",unlock:2,skin:"#c98d63",shirt:"#3fbf6b",pants:"#6b4f2e",shoes:"#222222",hat:"beanie",hatColor:"#2f8f4f",hair:"#1c1c1c",extra:"backpack"},{id:"nara",name:"Nara",unlock:3,skin:"#8d5a3b",shirt:"#ff8f3f",pants:"#3b3b3b",shoes:"#ff8f3f",hat:"helmet",hatColor:"#ff8f3f",hair:"#111111",extra:"none"},{id:"bolt",name:"Bolt",unlock:5,skin:"#f0c8a0",shirt:"#ffd23f",pants:"#30343f",shoes:"#ffd23f",hat:"goggles",hatColor:"#30343f",hair:"#e6e6e6",extra:"none"},{id:"mara",name:"Mara",unlock:7,skin:"#e0a878",shirt:"#2fb8c4",pants:"#f2e6c9",shoes:"#5a3b22",hat:"bandana",hatColor:"#d6334a",hair:"#5a2a12",extra:"backpack"},{id:"tito",name:"Tito",unlock:10,skin:"#f5cba7",shirt:"#b5651d",pants:"#355c7d",shoes:"#4a3020",hat:"cowboy",hatColor:"#8b5a2b",hair:"#7a4a22",extra:"none"},{id:"zuri",name:"Zuri",unlock:14,skin:"#6e4530",shirt:"#ff5fa2",pants:"#1f1f2e",shoes:"#ffffff",hat:"crown",hatColor:"#ffcc33",hair:"#111111",extra:"headphones"}],Av=qc.map(i=>i.id)});function N(i,e,t,n=0,s=0,r=0,a=!1){let o=new Ee(e,t);return o.position.set(n,s,r),o.castShadow=a,i.add(o),o}function O_(i){return Et("hawaii"+i,()=>{let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d");t.fillStyle=i,t.fillRect(0,0,64,64);let n=["#ffffff","#ffd23f","#ff5fa2"];for(let r=0;r<9;r++){t.fillStyle=n[r%3];let a=r*23%64,o=r*37%64;for(let l=0;l<5;l++){let c=l/5*Math.PI*2;t.beginPath(),t.arc(a+Math.cos(c)*4,o+Math.sin(c)*4,3,0,7),t.fill()}}let s=new Fs(e);return s.wrapS=s.wrapT=vr,s.repeat.set(2,2),s.colorSpace=mt,s})}function Wu(i){if(i&&typeof i=="object")return zu(i);if(typeof i=="string"){let e=qc.find(t=>t.id===i);if(e){let t=kr.find(n=>n.name===e.name);return t?{...t.outfit}:{...xn,topColor:e.shirt.toLowerCase(),skin:xn.skin}}}return{...xn}}var $c,Yc,Et,B,an,Se,et,rt,Zc,Bt,Wn,qn,Ur=Dt(()=>{ai();po();mo();Xc();$c=new Map,Yc=new Map,Et=(i,e)=>($c.has(i)||$c.set(i,e()),$c.get(i)),B=(i,e={})=>{let t=i+JSON.stringify(e);if(!Yc.has(t)){let{basic:n,...s}=e;Yc.set(t,n?new It({color:i,...s}):new qt({color:i,...s}))}return Yc.get(t)},an=(i,e)=>"#"+new Le(i).multiplyScalar(e).getHexString();Se=(i,e,t)=>Et(`box${i},${e},${t}`,()=>new ft(i,e,t)),et=(i,e=12,t=9)=>Et(`sph${i},${e}`,()=>new Zt(i,e,t)),rt=(i,e,t,n=12,s=!1)=>Et(`cyl${i},${e},${t},${n},${s}`,()=>new At(i,e,t,n,1,s)),Zc=(i,e,t=10)=>Et(`cap${i},${e}`,()=>new Ei(i,e,4,t)),Bt=(i,e,t=Math.PI*2,n=6,s=18)=>Et(`tor${i},${e},${t}`,()=>new Hs(i,e,n,s,t)),Wn=(i,e,t=8)=>Et(`cone${i},${e},${t}`,()=>new ri(i,e,t));qn=class{constructor(e,t={}){if(this.outfit=Wu(e),this.opts=t,this.root=new st,this.animators=[],this.phase=Math.random()*6,this.kick=0,this.deadT=-1,this.pickT=0,this.t=Math.random()*10,this.victory=!1,this.victoryStyle=0,this.blinkT=2+Math.random()*3,this.idleT=0,this.weaponType=null,this.gun=null,this._build(),t.ringColor){let n=new Ee(Et("ring",()=>new Ji(.62,.78,28)),new It({color:t.ringColor,transparent:!0,opacity:.85,depthWrite:!1}));n.rotation.x=-Math.PI/2,n.position.y=.04,this.root.add(n),this.ring=n}}setOutfit(e){let t=this.weaponType;for(let n of[...this.root.children])n!==this.ring&&this.root.remove(n);this.outfit=Wu(e),this.animators=[],this.weaponType=null,this.gun=null,this._build(),t&&this.setWeapon(t)}def(e){let t=this.outfit[e];return t?_n[t]:null}_build(){let e=this.outfit,t=B(e.skin),n=e.topColor,s=e.pantsColor,r=this.def("top")?.style||"tshirt",a=this.def("pants")?.style||"jeans",o=this.root,l=new st;l.position.y=.72,o.add(l),this.hips=l;let c=new st;l.add(c),this.torso=c;let h=r==="hawaiian"?B("#ffffff",{map:O_(n)}):B(r==="astro"?"#f2f4f7":r==="suit"?an(n,.55):n),d=r==="puffer"?1.14:r==="astro"?1.08:1;N(c,Zc(.3,.28,12),h,0,.36,0,!0).scale.set(1.06*d,1,.8*d),N(l,rt(.31,.3,.1,14),B(a==="skirt"?s:an(s,.75)),0,.09,0),this._buildTopDetails(c,r,n,h);let f=new st;f.position.y=1,l.add(f),this.head=f,N(f,rt(.11,.12,.12,10),t,0,-.33,0),N(f,et(.39,18,14),t,0,0,0,!0).scale.set(1,.95,.96),N(f,et(.08,8,6),t,-.38,-.02,0),N(f,et(.08,8,6),t,.38,-.02,0),N(f,et(.055,8,6),B(an(e.skin,.92)),0,-.06,.37),this._buildFace(f),this._buildHair(f),this._buildHat(f),this._buildMask(f),this._buildGlasses(f);let y=["hoodie","jacket","puffer","suit","astro","jersey"].includes(r),m=r==="tank"||r==="vest",p=r==="vest"?B("#3a3f4b"):r==="hawaiian"?h:B(r==="astro"?"#f2f4f7":r==="suit"?an(n,.55):n),v=R=>{let T=new st;T.position.set(R*.41,.58,0),l.add(T);let b=N(T,Et("upperArm",()=>{let C=new Ei(.105,.16,4,8);return C.translate(0,-.13,0),C}),m?t:p,0,0,0,!0);return r==="puffer"&&b.scale.set(1.25,1,1.25),N(T,Et("foreArm",()=>{let C=new Ei(.095,.16,4,8);return C.translate(0,-.36,0),C}),y?p:t,0,0,0,!0),r==="jersey"&&N(T,rt(.108,.108,.04,10),B("#ffffff"),0,-.2,0),N(T,et(.105,10,8),r==="astro"?B("#d8dde3"):t,0,-.52,0),T};this.armL=v(-1),this.armR=v(1);let x=B(a==="astro"?"#f2f4f7":s),S=R=>{let T=new st;T.position.set(R*.16,.74,0),o.add(T);let b=a==="shorts"||a==="skirt";N(T,Et("thigh",()=>{let _=new Ei(.135,.14,4,8);return _.translate(0,-.12,0),_}),a==="skirt"?t:x,0,0,0,!0),N(T,Et("shin",()=>{let _=new Ei(.12,.16,4,8);return _.translate(0,-.38,0),_}),b?t:x,0,0,0,!0),a==="cargo"&&N(T,Se(.07,.14,.16),B(an(s,.8)),R*.13,-.22,0),a==="joggers"&&N(T,Se(.02,.5,.05),B("#ffffff"),R*.135,-.25,0),a==="astro"&&N(T,et(.09,8,6),B("#ff8f3f"),0,-.3,.1),a==="suit"&&N(T,Se(.02,.5,.02),B(an(s,.7)),0,-.25,.13);let C=a==="astro"?"#d8dde3":a==="suit"?"#1c1c1c":"#ffffff";return N(T,Se(.24,.1,.34),B(C),0,-.6,.05,!0),N(T,Se(.25,.04,.36),B(a==="suit"?"#1c1c1c":"#ff5a5f"),0,-.655,.05),T};this.legL=S(-1),this.legR=S(1),a==="skirt"&&N(l,rt(.3,.42,.3,14,!1),B(s),0,-.06,0),this._buildBackpack(c),this._buildSpecial(c,f),this.gunHolder=new st,this.gunHolder.position.set(-.08,-.52,.02),this.gunHolder.rotation.x=Math.PI/2,this.armR.add(this.gunHolder),this.root.traverse(R=>{R.isMesh&&(R.userData.char=this)})}_buildTopDetails(e,t,n,s){let r=B(an(n,.75));switch(t){case"tshirt":N(e,Bt(.17,.035,Math.PI*2,6,16),r,0,.7,.02).rotation.x=Math.PI/2;break;case"hoodie":{N(e,Bt(.2,.08,Math.PI,6,12),B(n),0,.68,-.12).rotation.set(-.3,0,0),N(e,Se(.34,.14,.05),r,0,.2,.25),N(e,rt(.012,.012,.18,4),B("#ffffff"),-.06,.55,.26),N(e,rt(.012,.012,.18,4),B("#ffffff"),.06,.55,.26);break}case"jacket":{N(e,Se(.16,.5,.05),B("#f5f5f5"),0,.38,.24),N(e,Se(.045,.52,.06),r,-.09,.38,.245),N(e,Se(.045,.52,.06),r,.09,.38,.245);let a=N(e,Bt(.2,.05,Math.PI*2,6,16),B(n),0,.68,0);a.rotation.x=Math.PI/2,N(e,Se(.06,.05,.02),B("#c0c0c0"),.16,.3,.255);break}case"tank":N(e,Se(.06,.2,.3),B(n),-.17,.62,0),N(e,Se(.06,.2,.3),B(n),.17,.62,0);break;case"vest":{N(e,Se(.56,.5,.48),B(n),0,.38,0);for(let a=0;a<3;a++)N(e,Se(.12,.1,.04),r,-.15+a*.15,.25,.25);N(e,Se(.5,.06,.5),B("#2b2f36"),0,.12,0);break}case"jersey":{N(e,Se(.64,.08,.5),B("#ffffff"),0,.45,0);let a=N(e,Se(.16,.2,.02),B("#ffffff"),0,.42,-.255);a.rotation.y=Math.PI;break}case"puffer":for(let a=0;a<3;a++){let o=N(e,Bt(.33,.04,Math.PI*2,6,18),r,0,.18+a*.18,0);o.rotation.x=Math.PI/2,o.scale.set(1.08,.85,1)}break;case"suit":{N(e,Se(.18,.46,.05),B("#ffffff"),0,.42,.24),N(e,Se(.06,.32,.06),B("#d6334a"),0,.45,.265),N(e,Se(.05,.36,.06),B(an(n,.4)),-.11,.45,.25),N(e,Se(.05,.36,.06),B(an(n,.4)),.11,.45,.25);break}case"hawaiian":N(e,Se(.24,.08,.04),B("#ffffff"),0,.66,.24);break;case"astro":{N(e,Se(.3,.2,.06),B(n),0,.42,.25);for(let o=0;o<3;o++)N(e,et(.025,6,4),B(["#ff5a5f","#ffd23f","#5ad67d"][o]),-.08+o*.08,.42,.29);let a=N(e,Bt(.22,.06,Math.PI*2,6,18),B("#b9c0c5"),0,.7,0);a.rotation.x=Math.PI/2;break}}}_buildFace(e){let t=this.def("face")?.style||"happy",n=B("#ffffff"),s=B("#1b1b1f"),r=B("#7a2e26"),a=new st;e.add(a),this.eyes=a;for(let l of[-.14,.14]){if(N(a,et(.085,10,8),n,l,.05,.33).scale.set(1,1.15,.6),N(a,et(t==="surprised"?.035:.05,8,6),s,l+(t==="cool"?.01:0),.04,.375),N(a,et(.018,6,4),n,l+.02,.07,.4),t==="cool"||t==="sleepy"){let u=N(a,Se(.18,.08,.05),B(this.outfit.skin),l,t==="sleepy"?.06:.1,.38);u.scale.y=t==="sleepy"?1.6:1}let d=N(e,Se(.13,.03,.03),B(an(this.outfit.hairColor,.9)),l,t==="surprised"?.21:.17,.35);d.rotation.z=t==="angry"?l<0?-.45:.45:t==="determined"?l<0?-.2:.2:t==="happy"?l<0?.12:-.12:0}let o=!!this.outfit.mask;if(!o)switch(t){case"happy":{let l=N(e,Bt(.08,.018,Math.PI,6,10),r,0,-.14,.355);l.rotation.z=Math.PI;break}case"determined":N(e,Se(.12,.025,.03),r,0,-.15,.36);break;case"cool":{let l=N(e,Bt(.06,.016,Math.PI*.7,6,8),r,.03,-.13,.355);l.rotation.z=Math.PI*1.1;break}case"angry":{let l=N(e,Bt(.07,.018,Math.PI,6,10),r,0,-.19,.35);break}case"surprised":N(e,Bt(.04,.016,Math.PI*2,6,12),r,0,-.15,.36);break;case"sleepy":{let l=N(e,Bt(.05,.015,Math.PI,6,8),r,0,-.14,.355);l.rotation.z=Math.PI,N(e,et(.03,6,4),B("#9fd8ff"),.2,-.1,.33);break}}if(!o)for(let l of[-.22,.22]){let c=N(e,et(.05,8,6),B("#ff9a9a"),l,-.08,.3);c.scale.z=.4}}_buildHair(e){let t=this.def("hair")?.style||"short",n=B(this.outfit.hairColor),s=!!this.outfit.hat,r=(a=1.03,o=.48)=>{let l=N(e,Et("hairCap"+a+o,()=>new Zt(.39*a,16,10,0,Math.PI*2,0,Math.PI*o)),n,0,.02,-.02);return l.rotation.x=-.3,l};switch(t){case"short":r();break;case"buzz":r(1.01,.42);break;case"bald":{let a=N(e,et(.06,6,4),B("#ffffff",{transparent:!0,opacity:.35}),.12,.3,.15);a.scale.z=.3;break}case"spiky":{if(r(),!s)for(let a=0;a<7;a++){let o=a/7*Math.PI*1.6-Math.PI*.8;N(e,Wn(.1,.28,6),n,Math.sin(o)*.22,.36-Math.abs(o)*.05,-.05-Math.cos(o)*.12).rotation.set(-.5-Math.cos(o)*.3,0,-o*.5)}break}case"afro":{s?r(1.06):N(e,et(.5,14,10),B(this.outfit.hairColor,{flatShading:!0}),0,.2,-.2).scale.set(1.05,.9,.95);break}case"ponytail":{r();let a=N(e,Zc(.11,.3,8),n,0,-.02,-.42);a.rotation.x=.6,N(e,Bt(.1,.03,Math.PI*2,6,10),B("#ffd23f"),0,.12,-.36);break}case"long":{r(1.05);let a=N(e,Se(.62,.62,.22),n,0,-.2,-.22);a.rotation.x=.1,N(e,Se(.12,.45,.2),n,-.36,-.12,-.02),N(e,Se(.12,.45,.2),n,.36,-.12,-.02);break}case"mohawk":{if(r(1.01,.4),!s)for(let a=0;a<6;a++)N(e,Se(.08,.22-Math.abs(a-2.5)*.03,.12),n,0,.44-Math.abs(a-2.5)*.03,.22-a*.1);break}case"bun":{r(),s||N(e,et(.15,10,8),n,0,.42,-.12);break}case"curly":{if(r(1.04),!s)for(let a=0;a<12;a++){let o=a/12*Math.PI*2;N(e,et(.11,8,6),n,Math.cos(o)*.28,.28+Math.sin(a)*.05,Math.sin(o)*.26-.04)}break}}}_buildHat(e){let t=this.def("hat");if(!t)return;let n=this.outfit.topColor,s=new st;switch(e.add(s),t.style){case"cap":N(s,Et("capTop",()=>new Zt(.405,16,10,0,Math.PI*2,0,Math.PI*.42)),B(n),0,.05,0);{let r=N(s,Se(.42,.04,.3),B(an(n,.8)),0,.2,.36);r.rotation.x=.15}N(s,et(.04,6,4),B("#ffffff"),0,.44,0);break;case"beanie":N(s,Et("beanie",()=>new Zt(.41,16,10,0,Math.PI*2,0,Math.PI*.5)),B(n),0,.03,0),N(s,rt(.41,.41,.1,16),B(an(n,.8)),0,.05,0),N(s,et(.1,8,6),B("#ffffff"),0,.46,0);break;case"headband":{let r=N(s,Bt(.385,.045,Math.PI*2,6,20),B(n),0,.17,0);r.rotation.x=Math.PI/2-.15,N(s,Se(.06,.2,.03),B(n),.1,.05,-.38);break}case"helmet":N(s,Et("helm",()=>new Zt(.43,16,10,0,Math.PI*2,0,Math.PI*.52)),B(n),0,.02,0),N(s,Se(.1,.06,.86),B("#ffffff"),0,.42,0);{let r=N(s,Et("visorH",()=>new Zt(.44,16,8,Math.PI/2-.9,1.8,1.25,.45)),B("#2b2f36"),0,.02,0)}break;case"beret":{let r=N(s,rt(.36,.38,.1,18),B("#d6334a"),.05,.36,-.02);r.rotation.z=-.25,N(s,rt(.02,.02,.06,6),B("#d6334a"),.08,.43,0);break}case"chef":N(s,rt(.33,.3,.3,16),B("#ffffff"),0,.42,0),N(s,et(.36,12,8),B("#ffffff"),0,.62,0).scale.y=.6;break;case"cowboy":N(s,rt(.64,.64,.04,20),B("#8b5a2b"),0,.24,0),N(s,rt(.28,.33,.32,14),B("#8b5a2b"),0,.4,0),N(s,rt(.335,.335,.06,14),B("#3b2412"),0,.29,0);break;case"tophat":N(s,rt(.5,.5,.03,20),B("#1c1c1c"),0,.3,0),N(s,rt(.28,.28,.48,16),B("#1c1c1c"),0,.55,0),N(s,rt(.285,.285,.07,16),B("#d6334a"),0,.36,0);break;case"viking":N(s,Et("vik",()=>new Zt(.42,16,10,0,Math.PI*2,0,Math.PI*.5)),B("#9aa5ad"),0,.03,0);for(let r of[-1,1]){let a=N(s,Wn(.08,.36,8),B("#f2e6c9"),r*.42,.3,0);a.rotation.z=-r*.9}N(s,rt(.425,.425,.06,16),B("#c98a48"),0,.05,0);break;case"pirate":{let r=N(s,rt(.55,.55,.05,3),B("#1c1c1c"),0,.28,0);r.rotation.y=Math.PI/6,N(s,rt(.3,.35,.25,12),B("#1c1c1c"),0,.4,0),N(s,et(.06,8,6),B("#ffffff"),0,.42,.32);break}case"propeller":{N(s,Et("propCap",()=>new Zt(.405,16,10,0,Math.PI*2,0,Math.PI*.42)),B("#3f7fe8"),0,.05,0),N(s,rt(.02,.02,.12,6),B("#ffd23f"),0,.47,0);let r=new st;r.position.y=.53,s.add(r),N(r,Se(.5,.02,.08),B("#e8473f")),N(r,Se(.08,.02,.5),B("#5ad67d")),this.animators.push(a=>{r.rotation.y+=a*14});break}case"party":{let r=N(s,Wn(.18,.45,12),B("#ff5fa2"),.06,.55,0);r.rotation.z=-.15,N(s,et(.06,8,6),B("#ffd23f"),.1,.79,0);break}case"crown":{N(s,rt(.24,.22,.16,8,!0),B("#ffcc33",{side:Vt}),0,.42,0);for(let r=0;r<5;r++){let a=r/5*Math.PI*2;N(s,Wn(.05,.14,4),B("#ffcc33"),Math.cos(a)*.22,.56,Math.sin(a)*.22),N(s,et(.03,6,4),B(["#e8473f","#3f7fe8","#5ad67d"][r%3]),Math.cos(a)*.24,.42,Math.sin(a)*.24)}break}case"astro":{N(s,et(.52,18,14),B("#bfe6ff",{transparent:!0,opacity:.35,depthWrite:!1}),0,.02,0);let r=N(s,Bt(.4,.06,Math.PI*2,6,20),B("#d8dde3"),0,-.36,0);r.rotation.x=Math.PI/2,N(s,rt(.015,.015,.3,4),B("#9aa5ad"),.3,.55,-.1),N(s,et(.04,6,4),B("#ff5a5f"),.3,.71,-.1);break}}}_buildMask(e){let t=this.def("mask");if(t)switch(t.style){case"bandit":{let n=N(e,Et("bandit",()=>new Zt(.405,16,8,Math.PI/2-1.2,2.4,1.75,.75)),B("#d6334a"),0,0,0);n.rotation.y=0,N(e,Wn(.1,.22,4),B("#d6334a"),0,-.22,.36).rotation.x=Math.PI;break}case"ninja":{N(e,et(.405,16,12),B("#1c1c1c"),0,0,0).scale.set(1,.96,.98),N(e,Se(.5,.13,.1),B(this.outfit.skin),0,.05,.34);let s=N(e,Se(.06,.3,.03),B("#d6334a"),.08,0,-.42);s.rotation.z=.4;break}case"hockey":{N(e,et(.36,14,10),B("#f5f5f5"),0,-.02,.1).scale.set(.95,1.1,.75);for(let[s,r]of[[-.13,.05],[.13,.05],[0,-.12],[-.08,-.2],[.08,-.2]])N(e,et(.035,6,4),B("#1b1b1f"),s,r,.37);N(e,Se(.03,.2,.02),B("#d6334a"),0,.15,.38);break}case"skull":{N(e,et(.37,14,10),B("#f2ead6"),0,0,.08).scale.set(1,1.05,.85);for(let s of[-.13,.13])N(e,et(.08,8,6),B("#1b1b1f"),s,.04,.36);N(e,Wn(.04,.06,3),B("#1b1b1f"),0,-.07,.38).rotation.x=Math.PI;for(let s=0;s<4;s++)N(e,Se(.03,.05,.02),B("#1b1b1f"),-.06+s*.04,-.18,.35);break}case"fox":{N(e,et(.36,14,10),B("#ff8f3f"),0,.02,.08).scale.set(1,.95,.85);let s=N(e,Wn(.14,.26,8),B("#ffffff"),0,-.08,.42);s.rotation.x=Math.PI/2,N(e,et(.04,6,4),B("#1b1b1f"),0,-.08,.55);for(let r of[-.2,.2])N(e,Wn(.1,.22,4),B("#ff8f3f"),r,.42,0),N(e,et(.05,6,4),B("#1b1b1f"),r*.7,.06,.37);break}}}_buildGlasses(e){let t=this.def("glasses");if(!t)return;let n=new st;switch(n.position.set(0,.05,.38),e.add(n),t.style){case"round":for(let s of[-.14,.14])N(n,Bt(.08,.016,Math.PI*2,6,14),B("#2b2f36"),s,0,0);N(n,Se(.1,.02,.02),B("#2b2f36"),0,.01,0);break;case"goggles":{let s=N(e,Bt(.385,.035,Math.PI*2,6,20),B("#30343f"),0,.12,0);s.rotation.x=Math.PI/2;for(let r of[-.13,.13]){let a=N(e,rt(.1,.1,.07,12),B("#4fd1ff"),r,.16,.33);a.rotation.x=Math.PI/2-.2}break}case"sun":for(let s of[-.14,.14]){let r=N(n,Se(.18,.1,.03),B("#1b1b1f"),s,0,.01);r.rotation.z=s<0?.08:-.08}N(n,Se(.46,.025,.03),B("#c0c0c0"),0,.05,0);break;case"heart":for(let s of[-.14,.14])N(n,et(.08,8,6),B("#ff4d7a"),s,0,.02).scale.set(1.1,.9,.3);N(n,Se(.08,.02,.02),B("#ff4d7a"),0,0,0);break;case"star":for(let s of[-.15,.15]){let r=N(n,rt(.11,.11,.03,5),B("#ffd23f"),s,0,.02);r.rotation.x=Math.PI/2}break;case"pixel":for(let s of[-.14,.14])N(n,Se(.18,.08,.03),B("#1b1b1f"),s,0,.02),N(n,Se(.05,.03,.035),B("#ffffff"),s-.04,.015,.025);N(n,Se(.48,.03,.03),B("#1b1b1f"),0,.03,.01);break;case"visor":{let s=N(e,Et("visor",()=>new At(.4,.4,.13,20,1,!0,-1.1,2.2)),B("#3fe0d0",{transparent:!0,opacity:.75,side:Vt}),0,.06,.02);break}}}_buildBackpack(e){let t=this.def("backpack");if(!t)return;let n=new st;n.position.set(0,.4,-.3),e.add(n);let s=this.outfit.topColor;switch(t.style){case"classic":N(n,Se(.42,.46,.2),B(an(s,.7)),0,0,-.02,!0),N(n,Se(.42,.14,.22),B(an(s,.55)),0,.17,-.02),N(n,Se(.28,.16,.06),B(an(s,.85)),0,-.1,-.13);break;case"explorer":N(n,Se(.46,.56,.24),B("#6b8e23"),0,0,-.04,!0);{let r=N(n,rt(.1,.1,.5,10),B("#c98a48"),0,.36,-.04);r.rotation.z=Math.PI/2}N(n,Se(.3,.2,.06),B("#4d5d3a"),0,-.1,-.17),N(n,rt(.05,.05,.25,8),B("#9aa5ad"),.27,-.05,-.04);break;case"guitar":{let r=new st;r.rotation.z=.5,n.add(r),N(r,et(.2,12,8),B("#c47a3c"),0,-.18,-.03).scale.z=.35,N(r,et(.15,12,8),B("#c47a3c"),0,.06,-.03).scale.z=.35,N(r,Se(.06,.55,.04),B("#3b2412"),0,.4,-.03),N(r,rt(.06,.06,.02,12),B("#1b1b1f"),0,-.12,.04).rotation.x=Math.PI/2;break}case"turtle":{N(n,et(.36,10,8),B("#3aa76d",{flatShading:!0}),0,-.05,.05,!0).scale.set(1.05,1.15,.6),N(n,et(.37,6,4),B("#2f8f4f",{flatShading:!0,wireframe:!0}),0,-.05,.05).scale.set(1.05,1.15,.6);break}case"jetpack":{for(let r of[-.13,.13]){N(n,rt(.1,.1,.5,12),B("#c0c6cc"),r,0,-.06,!0),N(n,Wn(.1,.12,12),B("#e8473f"),r,.31,-.06);let a=N(n,Wn(.08,.3,8),B("#ffb020",{basic:!0,transparent:!0,opacity:.85}),r,-.4,-.06);a.rotation.x=Math.PI,this.animators.push((o,l)=>{let c=.7+Math.sin(l*40+r*10)*.3;a.scale.set(c,.8+c*.5,c)})}N(n,Se(.4,.12,.1),B("#30343f"),0,.05,.02);break}case"wings":{for(let r of[-1,1]){let a=new st;a.position.set(r*.1,.1,0),n.add(a);for(let o=0;o<4;o++){let l=N(a,Zc(.07,.5-o*.08,6),B(o%2?"#ffffff":"#f0f4ff"),r*(.18+o*.11),.12-o*.07,-.05);l.rotation.z=r*(1.2+o*.18)}this.animators.push((o,l)=>{a.rotation.y=r*(.25+Math.sin(l*2.5)*.18)})}break}}}_buildSpecial(e,t){let n=this.def("special");if(n)switch(n.style){case"scarf":{let s=N(e,Bt(.2,.07,Math.PI*2,6,16),B("#ffd23f"),0,.7,.02);s.rotation.x=Math.PI/2,N(e,Se(.12,.3,.05),B("#ffd23f"),.12,.52,.24),N(e,Se(.12,.04,.06),B("#e8473f"),.12,.42,.24);break}case"headphones":{let s=N(t,Bt(.41,.035,Math.PI,6,16),B("#222222"),0,.05,0);for(let r of[-.41,.41])N(t,rt(.13,.13,.1,12),B("#ff5fa2"),r,0,0).rotation.z=Math.PI/2;break}case"chain":{let s=N(e,Bt(.2,.018,Math.PI*2,6,20),B("#ffcc33"),0,.58,.12);s.rotation.x=Math.PI/2-.5,N(e,rt(.07,.07,.02,12),B("#ffcc33"),0,.46,.26).rotation.x=Math.PI/2;break}case"cape":{let s=new st;s.position.set(0,.68,-.24),e.add(s);let r=N(s,Et("capeG",()=>{let a=new $i(.62,.95,1,4);return a.translate(0,-.47,0),a}),B("#d6334a",{side:Vt}),0,0,0,!0);this.animators.push((a,o,l)=>{s.rotation.x=.15+Math.min(.9,(l.speed||0)*.7)+Math.sin(o*4)*.05});break}case"halo":{let s=N(t,Bt(.25,.035,Math.PI*2,6,24),B("#fff3a0",{basic:!0}),0,.62,0);s.rotation.x=Math.PI/2,this.animators.push((r,a)=>{s.position.y=.62+Math.sin(a*2)*.03});break}}}setWeapon(e){e!==this.weaponType&&(this.weaponType=e,this.gun&&this.gunHolder.remove(this.gun),this.gun=e?Hc(e):null,this.gun&&this.gunHolder.add(this.gun))}shoot(e=1){this.kick=Math.min(1,this.kick+.6*e)}pickup(){this.pickT=.35}die(){this.deadT<0&&(this.deadT=0)}revive(){this.deadT=-1,this.root.rotation.x=0,this.root.position.y=0,this.root.visible=!0}update(e,t={}){this.t+=e;for(let g of this.animators)g(e,this.t,t);let n=(g,y,m)=>g+(y-g)*Math.min(1,m*e);if(this.blinkT-=e,this.eyes&&(this.eyes.scale.y=this.blinkT<.12&&this.blinkT>0?.15:1),this.blinkT<=0&&(this.blinkT=2.5+Math.random()*3),this.deadT>=0){this.deadT+=e;let g=Math.min(1,this.deadT/.45);this.root.rotation.x=-Math.PI/2*(g*g*(3-2*g)),this.root.position.y=.25*g,this.armL.rotation.x=n(this.armL.rotation.x,-2.6,8),this.armR.rotation.x=n(this.armR.rotation.x,-2.6,8),this.eyes&&(this.eyes.scale.y=.15),this.deadT>3&&(this.root.position.y=.25-(this.deadT-3)*.3),this.deadT>4.2&&(this.root.visible=!1);return}if(this.victory){this._victoryDance();return}let s=t.speed||0;this.phase+=e*(t.running?13:9.5)*Math.min(1,s+1e-4);let r=(t.running?.95:.65)*Math.min(1,s*1.4),a=Math.sin(this.phase)*r,o=-Math.sin(this.phase)*r;t.airborne&&(a=.7,o=-.3),this.legL.rotation.x=n(this.legL.rotation.x,a,18),this.legR.rotation.x=n(this.legR.rotation.x,o,18);let l=this.pickT>0?Math.sin(this.pickT/.35*Math.PI)*.28:0;this.pickT>0&&(this.pickT-=e);let c=s<.1;this.idleT=c?this.idleT+e:0;let h=Math.sin(this.t*2.2)*.018,d=c?Math.sin(this.t*.9)*.025:0;this.hips.position.y=.72+Math.abs(Math.sin(this.phase))*.06*Math.min(1,s*1.5)-l+h*.5,this.hips.position.x=d,this.hips.rotation.z=Math.sin(this.phase)*.04*s+d*.6,this.torso.scale.y=1+h,this.head.position.y=1+h*1.5;let u=c&&this.idleT>2?Math.sin(this.idleT*.7)*.45:0;this.head.rotation.y=n(this.head.rotation.y,u,3),this.head.rotation.z=n(this.head.rotation.z,c?Math.sin(this.t*.6)*.05:0,3),this.kick=Math.max(0,this.kick-e*7);let f=!!this.gun&&!t.healing;if(this.gun&&(this.gun.visible=!t.healing),t.healing)this.armL.rotation.set(n(this.armL.rotation.x,-1.1,10),0,.5+Math.sin(this.t*8)*.1),this.armR.rotation.set(n(this.armR.rotation.x,-1.1,10),0,-.5-Math.sin(this.t*8)*.1);else if(f){let g=t.aiming?.12:0,y=-1.5-g+this.kick*.35,m=-1.35-g+this.kick*.3,p=.55;t.reloading?(y=-.9+Math.sin(this.t*6)*.08,m=-.7+Math.sin(this.t*9)*.35,p=.4):t.running&&!t.aiming?(y=-.9,m=-.8):c&&this.idleT>1.5&&!t.inMatch&&(y=-.55+Math.sin(this.t*1.1)*.05,m=-.5,p=.6),this.armR.rotation.set(n(this.armR.rotation.x,y,12),0,n(this.armR.rotation.z,.05,12)),this.armL.rotation.set(n(this.armL.rotation.x,m,12),0,n(this.armL.rotation.z,p,12)),this.gunHolder.position.z=.02-this.kick*.08}else this.armL.rotation.set(n(this.armL.rotation.x,-a*.8,12),0,.08),this.armR.rotation.set(n(this.armR.rotation.x,-o*.8,12),0,-.08)}_victoryDance(){let e=this.t;if(this.gun&&(this.gun.visible=!1),this.victoryStyle===1)this.root.position.y=Math.abs(Math.sin(e*6))*.12,this.hips.rotation.z=Math.sin(e*6)*.25,this.armL.rotation.set(-1.4+Math.sin(e*6)*.6,0,-.6),this.armR.rotation.set(-1.4-Math.sin(e*6)*.6,0,.6),this.legL.rotation.x=Math.sin(e*6)*.4,this.legR.rotation.x=-Math.sin(e*6)*.4,this.head.rotation.z=Math.sin(e*6)*.2;else if(this.victoryStyle===2)this.root.position.y=0,this.armL.rotation.set(0,0,-1.4+Math.sin(e*3)*.1),this.armR.rotation.set(0,0,1.4-Math.sin(e*3)*.1),this.hips.rotation.y=Math.sin(e*1.5)*.4,this.legL.rotation.x=0,this.legR.rotation.x=0;else{let t=Math.abs(Math.sin(e*5));this.root.position.y=t*.35,this.armL.rotation.set(Math.PI*.95,0,-.3+Math.sin(e*10)*.35),this.armR.rotation.set(Math.PI*.95,0,.3-Math.sin(e*10)*.35),this.legL.rotation.x=-t*.5,this.legR.rotation.x=-t*.5,this.head.rotation.y=Math.sin(e*3)*.3}}setOpacity(e){this.root.traverse(t=>{t.isMesh&&(t.userData.ownMat||(t.material=t.material.clone(),t.userData.ownMat=!0),t.material.transparent=e<1,t.material.opacity=e)})}}});function z_(){try{let i=new URLSearchParams(location.search).get("touch");if(i==="1")return!0;if(i==="0")return!1}catch{}return null}function Zu(){if(!vn)return"medium";let i=navigator.hardwareConcurrency||4,e=navigator.deviceMemory||(go?4:3);return go&&Fr||i>=8&&e>=6?"medium":"low"}var $s,Xu,$u,go,Jc,F_,B_,qu,vn,Fr,Yu,yo=Dt(()=>{$s=typeof navigator<"u"?navigator.userAgent:"",Xu=typeof navigator<"u"&&navigator.maxTouchPoints||0,$u=/Macintosh/.test($s)&&Xu>1,go=/iPhone|iPad|iPod/.test($s)||$u,Jc=/Android/i.test($s),F_=typeof matchMedia<"u"&&matchMedia("(pointer: coarse)").matches,B_=typeof matchMedia<"u"&&matchMedia("(any-pointer: fine)").matches;qu=z_(),vn=qu!==null?qu:go||Jc||/Mobile|Silk|Kindle/i.test($s)||F_&&Xu>0&&!B_,Fr=vn&&($u||/iPad|Tablet/i.test($s)||Jc&&!/Mobile/i.test($s)||Math.min(screen.width,screen.height)>=700),Yu=vn?Fr?"tablet":go?"iphone":Jc?"android":"mobile":"desktop"});function H_(){try{let i=JSON.parse(Jt.getItem(Ju)||"{}");return i.quality===void 0&&vn&&(i.quality=Zu()),{...Ys,...i,keys:{...Ys.keys,...i.keys||{}}}}catch{return structuredClone(Ys)}}function xo(i){Ku.push(i)}function hn(){try{Jt.setItem(Ju,JSON.stringify(Q))}catch{}for(let i of Ku)i(Q)}function Ct(i){return i?i.startsWith("Key")?i.slice(3):i.startsWith("Digit")?i.slice(5):{Space:"Espacio",ShiftLeft:"Shift",ShiftRight:"Shift D",ControlLeft:"Ctrl",ControlRight:"Ctrl D",AltLeft:"Alt",Tab:"Tab",CapsLock:"Bloq May\xFAs",Backquote:"\xBA",ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192",Enter:"Intro"}[i]||i:"\u2014"}var Ju,ju,Ys,Q,Ku,Xn,Zs=Dt(()=>{yo();ao();Ju="islaRoyale.settings.v1",ju=[["forward","Avanzar"],["back","Retroceder"],["left","Izquierda"],["right","Derecha"],["sprint","Correr"],["jump","Saltar"],["reload","Recargar"],["interact","Recoger / Interactuar"],["slot1","Arma 1"],["slot2","Arma 2"],["bandage","Usar venda"],["medkit","Usar botiqu\xEDn"],["drop","Soltar arma"],["scoreboard","Informaci\xF3n de partida"]],Ys={quality:"medium",renderScale:1,fullscreen:!0,masterVol:.9,musicVol:.45,sfxVol:.8,sensitivity:1,invertY:!1,cameraMode:"follow",cameraDistance:1,cameraSmoothing:.35,fov:50,showFps:!1,botLevel:"mixed",touchSens:1,touchBtnScale:1,touchOpacity:.75,touchAimAssist:!0,touchAutoSprint:!0,touchAdsToggle:!0,touchLeftFire:!0,touchPos:{},keys:{forward:"KeyW",back:"KeyS",left:"KeyA",right:"KeyD",sprint:"ShiftLeft",jump:"Space",reload:"KeyR",interact:"KeyE",slot1:"Digit1",slot2:"Digit2",bandage:"Digit3",medkit:"Digit4",drop:"KeyG",scoreboard:"Tab"}};Q=H_(),Ku=[];Xn={low:{shadows:!1,shadowSize:512,pixelRatio:1,antialias:!1,fog:110,bushes:!1},medium:{shadows:!0,shadowSize:1024,pixelRatio:1,antialias:!0,fog:150,bushes:!0},high:{shadows:!0,shadowSize:2048,pixelRatio:1.5,antialias:!0,fog:200,bushes:!0}}});var oi,jc,Qu=Dt(()=>{oi={"PULSA PARA ENTRAR":"CLICK TO START","Cargando\u2026":"Loading\u2026","Conectando\u2026":"Connecting\u2026","Conectando con el servidor\u2026":"Connecting to the server\u2026","Despertando el servidor\u2026 puede tardar hasta un minuto la primera vez.":"Waking up the server\u2026 the first time can take up to a minute.","\xA1Listo!":"Ready!","\xA1Te han invitado a un equipo!":"You've been invited to a team!","Tu navegador no puede usar WebGL. Actualiza los controladores gr\xE1ficos o usa Chrome / Edge.":"Your browser can't use WebGL. Update your graphics drivers or use Chrome / Edge.","Battle Royale cartoon \xB7 Solo \xB7 D\xFAos \xB7 Escuadrones":"Cartoon Battle Royale \xB7 Solo \xB7 Duos \xB7 Squads","Isla Royale \u2013 Battle Royale online gratis en el navegador":"Isla Royale \u2013 Free online Battle Royale in your browser","Este navegador ya ten\xEDa una sesi\xF3n abierta: esta pesta\xF1a usa un perfil de invitado.":"This browser already had a session open: this tab is using a guest profile.","Se perdi\xF3 la conexi\xF3n con el servidor.":"Lost connection to the server.","Sin conexi\xF3n con el servidor.":"No connection to the server.","Sin conexi\xF3n \u2014 reintentando\u2026":"Offline \u2014 retrying\u2026",Personalizaci\u00F3n:"Customize",Tienda:"Shop",Misiones:"Missions",Recompensas:"Rewards",Perfil:"Profile",Ajustes:"Settings",Ayuda:"Help","Cambiar nombre":"Change name","Tu nombre":"Your name","Nombre de jugador":"Player name",Jugador:"Player","El nombre debe tener al menos 2 caracteres.":"Your name must be at least 2 characters long.",Equipo:"Team","Juega con amigos":"Play with friends","Crear equipo":"Create team","CREAR EQUIPO":"CREATE TEAM",Unirse:"Join",UNIRSE:"JOIN",C\u00D3DIGO:"CODE","C\xF3digo:":"Code:",Copiar:"Copy","Salir del equipo":"Leave team","Sala privada":"Private room","(solo vuestro equipo contra bots)":"(only your team vs bots)","Crea un equipo y env\xEDa el enlace de invitaci\xF3n a tus amigos. Los huecos libres se completan con compa\xF1eros controlados por IA.":"Create a team and send the invite link to your friends. Empty slots are filled with AI teammates.","\u{1F517} Copiar enlace de invitaci\xF3n":"\u{1F517} Copy invite link","Copia este enlace:":"Copy this link:","\u2014 p\xE9galo en WhatsApp o Discord":"\u2014 paste it in WhatsApp or Discord","ESPERANDO AL L\xCDDER":"WAITING FOR LEADER",SOLO:"SOLO",D\u00DAOS:"DUOS",ESCUADRONES:"SQUADS",Solo:"Solo",D\u00FAos:"Duos",Escuadrones:"Squads","15 jugadores":"15 players","Equipos de 2":"Teams of 2","Equipos de 4":"Teams of 4","Bots:":"Bots:",Variados:"Mixed",F\u00E1ciles:"Easy",Normales:"Normal",Dif\u00EDciles:"Hard",JUGAR:"PLAY",Cancelar:"Cancel","Buscando partida\u2026":"Finding a match\u2026","\u27F2 Arrastra para girar al personaje":"\u27F2 Drag to rotate your character","Privacidad y cookies":"Privacy & cookies",NV:"LV",ISLA:"ISLA",ROYALE:"ROYALE","Volver con el equipo":"Back to the team",vivos:"alive",bajas:"kills",Pistola:"Pistol",Subfusil:"SMG",Escopeta:"Shotgun","Rifle de asalto":"Assault rifle","Rifle de precisi\xF3n":"Sniper rifle","Munici\xF3n ligera":"Light ammo","Munici\xF3n media":"Medium ammo",Cartuchos:"Shells","Munici\xF3n pesada":"Heavy ammo",Venda:"Bandage",Botiqu\u00EDn:"Medkit",Vac\u00EDo:"Empty","Recargando\u2026":"Reloading\u2026","Usando botiqu\xEDn\u2026":"Using medkit\u2026","Usando venda\u2026":"Using bandage\u2026","Sin munici\xF3n":"Out of ammo",Recoger:"Pick up","(cambia el arma actual)":"(swaps your current weapon)","\xA1Prep\xE1rate!":"Get ready!","\xA1A LUCHAR!":"FIGHT!","La zona segura ha aparecido":"The safe zone has appeared","Nueva zona segura marcada":"New safe zone marked","\xA1La zona se est\xE1 cerrando!":"The zone is closing!","Zona final":"Final zone","La zona aparece en":"Zone appears in","La zona se cierra en":"Zone closes in","\xA1Zona cerr\xE1ndose!":"Zone closing!","Has ca\xEDdo. Tu equipo sigue luchando":"You are down. Your team is still fighting","No se pudo capturar el rat\xF3n: se usa la vista con cursor":"Couldn't lock the mouse: using cursor aim","Observando a":"Spectating",siguiente:"next",Espacio:"Space","Ver resultados":"See results","Volver al lobby":"Back to lobby",Pausa:"Paused",Continuar:"Resume",Configuraci\u00F3n:"Settings","Abandonar partida":"Leave match","La partida sigue en marcha en el servidor.":"The match keeps running on the server.","Informaci\xF3n de partida":"Match info",VICTORIA:"VICTORY","\xA1VICTORIA!":"VICTORY!",DERROTA:"DEFEAT",Puesto:"Place",Eliminaciones:"Kills","Da\xF1o infligido":"Damage dealt","Tiempo de supervivencia":"Survival time",Experiencia:"Experience","Mejores de la partida":"Top players",Monedas:"Coins","Monedas ganadas":"Coins earned","Seguir observando":"Keep spectating","Jugar otra partida":"Play again","\u{1F4FA} Ver anuncio: \xD72 XP":"\u{1F4FA} Watch ad: \xD72 XP","Tu equipo es el \xFAltimo en pie":"Your team is the last one standing","Los resultados aparecer\xE1n al terminar tu participaci\xF3n.":"Results will appear when you are out.","Partida jugada":"Match played","Entre los 5 \xFAltimos supervivientes":"Top 5 finish","\xA1Victoria!":"Victory!","Experiencia duplicada":"Doubled XP",Total:"Total","\xA1NIVEL":"LEVEL","\xA1Genial!":"Awesome!",Recompensa:"Reward",Aceptar:"OK",Gr\u00E1ficos:"Graphics",Controles:"Controls",Sonido:"Sound",C\u00E1mara:"Camera","Calidad gr\xE1fica":"Graphics quality",Alta:"High",Media:"Medium","Baja (equipos modestos)":"Low (older computers)","Resoluci\xF3n de renderizado":"Render resolution","Campo de visi\xF3n":"Field of view","Mostrar FPS":"Show FPS","Pantalla completa":"Fullscreen","Modo de c\xE1mara":"Camera mode","Tercera persona: el rat\xF3n gira la c\xE1mara":"Third person: mouse turns the camera","Vista elevada: apuntar con el cursor":"Top-down: aim with the cursor","Sensibilidad del rat\xF3n":"Mouse sensitivity","Suavizado de c\xE1mara":"Camera smoothing","Distancia de c\xE1mara":"Camera distance","Invertir eje vertical":"Invert vertical axis","Restablecer controles":"Reset controls","Pulsa una tecla\u2026":"Press a key\u2026","Volumen general":"Master volume",Efectos:"Effects",M\u00FAsica:"Music",Guardar:"Save","La nueva calidad se aplicar\xE1 en la pr\xF3xima partida.":"The new quality will apply next match.",Idioma:"Language","C\xE1mara y punter\xEDa":"Camera & aiming","Cambiar arma":"Switch weapon","Clic izq.":"Left click","Clic der.":"Right click","Soltar arma":"Drop weapon","Usar botiqu\xEDn":"Use medkit","Usar venda":"Use bandage","Bloq May\xFAs":"Caps Lock",Avanzar:"Forward",Retroceder:"Back",Izquierda:"Left",Derecha:"Right",Correr:"Sprint",Saltar:"Jump",Recargar:"Reload","Interactuar / recoger":"Interact / pick up","Arma 1":"Weapon 1","Arma 2":"Weapon 2",Disparar:"Shoot",Apuntar:"Aim","C\xF3mo jugar":"How to play",Objetivo:"Goal",Consejos:"Tips","S\xE9 el \xFAltimo jugador (o equipo) con vida. Explora la isla, consigue armas y botiquines, y mantente dentro de la zona segura: fuera de ella pierdes vida cada segundo.":"Be the last player (or team) alive. Explore the island, grab weapons and medkits, and stay inside the safe zone: outside it you lose health every second.","En tercera persona: mueve el rat\xF3n para girar 360\xB0 y s\xFAbelo o b\xE1jalo para inclinar la c\xE1mara (desde casi a ras de suelo hasta vista desde arriba). El punto de mira queda fijo y apuntas adonde se\xF1ala.":"In third person: move the mouse to turn 360\xB0 and up or down to tilt the camera (from ground level to a top-down view). The crosshair stays fixed and you shoot where it points.","Rat\xF3n: clic izquierdo dispara \xB7 clic derecho apunta \xB7 rueda cambia de arma \xB7 Shift+rueda acerca/aleja la c\xE1mara \xB7 Esc o P pausa.":"Mouse: left click shoots \xB7 right click aims \xB7 wheel switches weapon \xB7 Shift+wheel zooms the camera \xB7 Esc or P pauses.","La munici\xF3n y los objetos de curaci\xF3n se recogen al pasar por encima; las armas, con la tecla de recoger.":"Ammo and healing items are picked up by walking over them; weapons with the pick-up key.","Mant\xE9n pulsado Tab para ver el mapa completo, tu inventario y la lista de jugadores.":"Hold Tab to see the full map, your inventory and the player list.","Al entrar en un edificio su tejado desaparece: \xFAsalos como cobertura.":"Roofs disappear when you go inside a building: use them as cover.","Apuntar (clic derecho) reduce la dispersi\xF3n y aleja la c\xE1mara con los rifles.":"Aiming (right click) reduces spread and pulls the camera back with rifles.","Rompe cajas de madera a disparos para conseguir bot\xEDn.":"Shoot wooden crates to get loot.","Estilos r\xE1pidos":"Quick styles","Empieza desde un estilo y luego cambia lo que quieras.":"Start from a style, then change whatever you like.","Pulsa un art\xEDculo para prob\xE1rtelo":"Click an item to try it on",Deshacer:"Undo","\u{1F4BE} Guardar apariencia":"\u{1F4BE} Save look","Apariencia guardada":"Look saved","Esta es tu apariencia actual.":"This is your current look.","Tienes cambios sin guardar.":"You have unsaved changes.","Todos los objetos son est\xE9ticos: no dan ventajas en las partidas.":"All items are cosmetic: they give no in-match advantage.",Equipado:"Equipped",Desbloqueado:"Unlocked",Equipar:"Equip",Probar:"Try on",Comprar:"Buy",Destacados:"Featured",Novedades:"New",Populares:"Popular",Todo:"All","Monedas extra":"Extra coins",Comprados:"Owned","Gratis con anuncios":"Free with ads","\u{1F4FA} Gratis con anuncios":"\u{1F4FA} Free with ads","No hay art\xEDculos aqu\xED.":"No items here.","No tienes monedas suficientes. Cons\xEDguelas jugando, con misiones o en Recompensas.":"You don't have enough coins. Earn them by playing, with missions or in Rewards.","Compras opcionales con pago seguro de Stripe. Las monedas se a\xF1aden a tu cuenta cuando se confirma el pago.":"Optional purchases with secure Stripe checkout. Coins are added once the payment is confirmed.","Pago recibido: tus monedas llegar\xE1n en unos segundos.":"Payment received: your coins will arrive in a few seconds.","Has cancelado la compra.":"You cancelled the purchase.","Las compras a\xFAn no est\xE1n activadas.":"Purchases are not enabled yet.","\xA1Compra completada!":"Purchase completed!","Ahora mismo no hay anuncios disponibles. Int\xE9ntalo m\xE1s tarde.":"No ads available right now. Try again later.","Has cerrado el anuncio antes de terminar: no hay recompensa.":"You closed the ad before it finished: no reward.","Los anuncios con recompensa a\xFAn no est\xE1n activados.":"Rewarded ads are not enabled yet.","Los anuncios a\xFAn no est\xE1n activados en este servidor.":"Ads are not enabled on this server yet.","Gracias por ver el anuncio":"Thanks for watching the ad","El anuncio no se complet\xF3.":"The ad didn't finish.","Has llegado al l\xEDmite de anuncios de hoy.":"You've reached today's ad limit.","Has llegado al l\xEDmite de monedas por anuncios de hoy.":"You've reached today's ad coin limit.","Vale de anuncio no v\xE1lido o caducado.":"Invalid or expired ad token.","Este objeto no se consigue con anuncios.":"This item can't be unlocked with ads.","Este objeto no se vende con monedas.":"This item isn't sold for coins.","Ya tienes este objeto.":"You already own this item.","Objeto no encontrado.":"Item not found.","Pieza no v\xE1lida.":"Invalid item.","Traje no v\xE1lido.":"Invalid outfit.","Falta una pieza obligatoria.":"A required piece is missing.","Perfil no encontrado.":"Profile not found.","\u{1F3AF} Misiones diarias":"\u{1F3AF} Daily missions","Misiones diarias":"Daily missions","Misi\xF3n completada":"Mission complete","La misi\xF3n a\xFAn no est\xE1 completada.":"This mission isn't complete yet.","Ya has cobrado esta misi\xF3n.":"You've already claimed this mission.","Misi\xF3n no encontrada.":"Mission not found.",Cobrar:"Claim",Cobrada:"Claimed","\u{1F381} Recompensas":"\u{1F381} Rewards","\u{1F381} Recompensa diaria":"\u{1F381} Daily reward","Recompensa diaria":"Daily reward","Ya has recogido la recompensa de hoy. \xA1Vuelve ma\xF1ana!":"You've already claimed today's reward. Come back tomorrow!","L\xEDmite diario alcanzado.":"Daily limit reached.","Recompensa desconocida.":"Unknown reward.","Tipo de recompensa desconocido.":"Unknown reward type.","Ya no hay experiencia que duplicar.":"No XP left to double.","Recoger recompensa":"Claim reward","Recoger hoy":"Claim today","Ver anuncio":"Watch ad","\u{1F464} Perfil":"\u{1F464} Profile",Partidas:"Matches",Victorias:"Wins",Bajas:"Kills",Nivel:"Level","Nivel m\xE1ximo":"Max level","Pr\xF3ximas recompensas por nivel":"Upcoming level rewards",Objetos:"Items",Estad\u00EDsticas:"Stats","Da\xF1o total":"Total damage","Mejor puesto":"Best place","Tiempo jugado":"Time played",Com\u00FAn:"Common",Raro:"Rare",\u00C9pico:"Epic",Legendario:"Legendary",Gratis:"Free",Peinados:"Hair",Caras:"Faces","Gorras y sombreros":"Hats",M\u00E1scaras:"Masks",Gafas:"Glasses","Camisetas y chaquetas":"Tops",Pantalones:"Pants",Mochilas:"Backpacks","Accesorios especiales":"Special",Colores:"Colors","Tono de piel":"Skin tone","Color de pelo":"Hair color","Color de la ropa":"Top color","Color del pantal\xF3n":"Pants color","Corto cl\xE1sico":"Classic short","De punta":"Spiky",Coleta:"Ponytail",Melena:"Long hair",Rapado:"Buzz cut",Calvo:"Bald",Afro:"Afro",Mo\u00F1o:"Bun",Rizos:"Curly",Cresta:"Mohawk",Alegre:"Happy",Decidido:"Determined",Chulito:"Cool",Sorprendido:"Surprised",Furioso:"Angry",Dormil\u00F3n:"Sleepy","Gorro de lana":"Beanie","Cinta deportiva":"Headband","Casco de moto":"Moto helmet","Gorra b\xE1sica":"Basic cap",Boina:"Beret","Gorro de chef":"Chef hat","Sombrero vaquero":"Cowboy hat",Chistera:"Top hat","Casco vikingo":"Viking helmet","Sombrero pirata":"Pirate hat","Gorra con h\xE9lice":"Propeller cap","Gorro de fiesta":"Party hat","Corona real":"Royal crown","Casco de astronauta":"Astronaut helmet","Pa\xF1uelo de bandido":"Bandit bandana","M\xE1scara ninja":"Ninja mask","M\xE1scara de hockey":"Hockey mask","M\xE1scara de zorro":"Fox mask",Calavera:"Skull","Gafas redondas":"Round glasses","Gafas de aviador":"Aviators","Gafas de sol especiales":"Special sunglasses","Gafas de coraz\xF3n":"Heart glasses","Gafas de estrella":"Star glasses","Gafas pixeladas":"Pixel glasses","Visor cibern\xE9tico":"Cyber visor",Camiseta:"T-shirt","Sudadera con capucha":"Hoodie","Camiseta de tirantes":"Tank top",Chaqueta:"Jacket","Camiseta deportiva":"Jersey","Camisa hawaiana":"Hawaiian shirt","Chaleco t\xE1ctico":"Tactical vest",Plum\u00EDfero:"Puffer jacket","Traje elegante":"Smart suit","Traje espacial":"Space suit",Vaqueros:"Jeans","Pantal\xF3n corto":"Shorts",Ch\u00E1ndal:"Joggers","Pantal\xF3n cargo":"Cargo pants",Falda:"Skirt","Pantal\xF3n de traje":"Suit pants","Pantal\xF3n espacial":"Space pants","Mochila cl\xE1sica":"Classic backpack","Mochila exclusiva de explorador":"Explorer backpack",Guitarra:"Guitar","Caparaz\xF3n de tortuga":"Turtle shell","Mochila cohete":"Jetpack","Alas de \xE1ngel":"Angel wings",Bufanda:"Scarf","Cascos de m\xFAsica":"Headphones","Medall\xF3n dorado":"Gold medallion","Capa de h\xE9roe":"Hero cape",Aureola:"Halo","Juega 3 partidas":"Play 3 matches","Consigue 5 eliminaciones":"Get 5 kills","Sobrevive 10 minutos en total":"Survive 10 minutes in total","Recoge 10 armas":"Pick up 10 weapons","Consigue una victoria":"Win a match","Inflige 800 puntos de da\xF1o":"Deal 800 damage","Queda 2 veces entre los 5 mejores":"Finish top 5 twice","Bosque Pinar":"Pine Forest","Colina Molino":"Windmill Hill","Gasolinera Cruce":"Crossroads Gas","Granja Girasol":"Sunflower Farm","Los Almacenes":"The Warehouses","Pol\xEDgono \xD3xido":"Rust Yard","Villa Colores":"Color Village",Espa\u00F1ol:"Espa\xF1ol",English:"English","Idioma / Language":"Language / Idioma","Comprar \u{1FA99}":"Buy \u{1FA99}","\u{1F4FA} Ver anuncio":"\u{1F4FA} Watch ad","Anuncios a\xFAn no activos":"Ads not active yet","\u{1F381} Llega con la recompensa diaria":"\u{1F381} Comes with the daily reward","\u2B50 Destacados":"\u2B50 Featured","\u{1F195} Novedades":"\u{1F195} New","\u{1F525} Populares":"\u{1F525} Popular","\u{1F6CD}\uFE0F Todo":"\u{1F6CD}\uFE0F All","\u{1FA99} Monedas":"\u{1FA99} Coins",Todas:"All","En curso":"In progress","\u2714 Cobrada":"\u2714 Claimed","Recompensas gratis por anuncios":"Free rewards for ads","\xB7 siempre opcionales, nunca durante una partida":"\xB7 always optional, never during a match","Las recompensas por ver anuncios aparecer\xE1n aqu\xED en cuanto se active el proveedor de anuncios del juego. Mientras tanto puedes conseguir monedas jugando, con las misiones y con la recompensa diaria.":"Ad rewards will appear here once the game's ad provider is enabled. Meanwhile you can earn coins by playing, with missions and with the daily reward.","\xA1Ya tienes todos los objetos de anuncios!":"You already own every ad item!","\u2714 Ya has recogido la de hoy. Vuelve ma\xF1ana para mantener la racha.":"\u2714 You've claimed today's reward. Come back tomorrow to keep your streak.","\u{1F381} Recoger recompensa de hoy":"\u{1F381} Claim today's reward","% de victorias":"Win rate","Bajas por muerte":"K/D","Top 5":"Top 5","R\xE9cord de bajas":"Most kills",Modo:"Mode","\xA1Desbloqueado!":"Unlocked!","Bonus por anuncio (\xD72)":"Ad bonus (\xD72)","En el lobby":"In lobby",Buscando:"Searching","En partida":"In a match","(t\xFA)":"(you)",Moverse:"Move",Rat\u00F3n:"Mouse",Curarse:"Heal","Recoger / Interactuar":"Pick up / Interact",Estado:"Status",Vivo:"Alive",Eliminado:"Eliminated",IA:"AI","Controlado por IA":"AI controlled","\u2014 vac\xEDo \u2014":"\u2014 empty \u2014","eliminado por la zona":"eliminated by the zone",com\u00FAn:"common",rara:"rare",\u00E9pica:"epic",legendaria:"legendary",Intro:"Enter",Retroceso:"Backspace","Flecha arriba":"Arrow up","Flecha abajo":"Arrow down","Flecha izquierda":"Arrow left","Flecha derecha":"Arrow right",Equipo:"Team",M\u00F3vil:"Mobile","Sensibilidad de la c\xE1mara":"Camera sensitivity","Tama\xF1o de los botones":"Button size","Opacidad de los controles":"Controls opacity","Ayuda de apuntado":"Aim assist","Correr al llevar el joystick al borde":"Sprint when the joystick reaches the edge","Apuntar: tocar para activar y desactivar":"Aim: tap to toggle","Segundo bot\xF3n de disparo a la izquierda":"Second fire button on the left","\u2725 Cambiar la posici\xF3n de los botones":"\u2725 Move the buttons","Joystick: toca y arrastra en la mitad izquierda. C\xE1mara: desliza el dedo en la mitad derecha o mientras mantienes el bot\xF3n de disparo.":"Joystick: touch and drag on the left half. Camera: swipe on the right half or while holding the fire button.","Gira el m\xF3vil para jugar en horizontal":"Turn your phone sideways to play","Arrastra los botones a donde te resulte m\xE1s c\xF3modo.":"Drag the buttons wherever feels best.",Restablecer:"Reset","Disparar (izquierda)":"Shoot (left)",Joystick:"Joystick","Moverse (ll\xE9valo al borde para correr)":"Move (push to the edge to sprint)","Deslizar a la derecha":"Swipe right side","Mover la c\xE1mara":"Move the camera","Disparar (mant\xE9n y desliza para apuntar)":"Shoot (hold and swipe to aim)","Correr siempre":"Always sprint",Armas:"Weapons","Toca un arma para cambiar":"Tap a weapon to switch","Toca para curarte":"Tap to heal",Minimapa:"Minimap","Mapa e informaci\xF3n de partida":"Map and match info","Alg\xFAn miembro del grupo sigue en una partida.":"A team member is still in a match.","El grupo est\xE1 completo (m\xE1ximo 4).":"The team is full (max 4).","El grupo ya est\xE1 buscando partida. Int\xE9ntalo en unos segundos.":"The team is already searching. Try again in a few seconds.","Modo de juego desconocido.":"Unknown game mode.","No existe ning\xFAn grupo con ese c\xF3digo.":"No team exists with that code.","No se pudo crear la partida. Int\xE9ntalo de nuevo.":"Couldn't create the match. Please try again.","Solo el l\xEDder del grupo puede iniciar la b\xFAsqueda.":"Only the team leader can start the search.","Termina la partida o sal de la cola antes de unirte.":"Finish your match or leave the queue before joining."},jc=[[/^Has quedado en el puesto #(\d+) de los equipos$/,"You placed #$1 among the teams"],[/^Has quedado en el puesto #(\d+) de (\d+) jugadores$/,"You placed #$1 of $2 players"],[/^(.+) es el último superviviente$/,"$1 is the last survivor"],[/^Buscando partida · (.+)$/,i=>i],[/^(\d+) jugador(?:es)? real(?:es)? · empieza en (\d+)s · el resto serán bots$/,"$1 real player(s) \xB7 starts in $2s \xB7 the rest will be bots"],[/^(\d+) en línea · (\d+) partidas$/,"$1 online \xB7 $2 matches"],[/^(\d+) en línea$/,"$1 online"],[/^Conectado · (\d+) ms$/,"Connected \xB7 $1 ms"],[/^(.+) ha caído$/,"$1 is down"],[/^Equipo eliminado · quedan (\d+) equipos$/,"Team eliminated \xB7 $1 teams left"],[/^¡Sin munición para (.+)!?$/,"No ammo for $1!"],[/^¡Subes al nivel (\d+)!$/,"Level up! Level $1"],[/^Nivel (\d+) · (\d+)\/(\d+) XP$/,"Level $1 \xB7 $2/$3 XP"],[/^Nivel (\d+)$/,"Level $1"],[/^Código copiado: (.+)$/,"Code copied: $1"],[/^Enlace copiado: (.+)$/,"Link copied: $1"],[/^Error al iniciar: (.+)$/,"Startup error: $1"],[/^Error de renderizado: (.+)$/,"Rendering error: $1"],[/^No se pudo iniciar la partida: (.+)$/,"Couldn't start the match: $1"],[/^No se pudo abrir el pago: (.+)$/,"Couldn't open checkout: $1"],[/^Vista previa: (.+)$/,"Preview: $1"],[/^Aún no tienes «(.+)»\.$/,"You don't own \u201C$1\u201D yet."],[/^¡Has conseguido «(.+)»!$/,"You got \u201C$1\u201D!"],[/^¡Has desbloqueado «(.+)»!$/,"You unlocked \u201C$1\u201D!"],[/^Recompensa diaria · día (\d+)$/,"Daily reward \xB7 day $1"],[/^🔒 Estás probando una pieza bloqueada: desbloquéalas para guardar\.$/,"\u{1F512} You are trying on a locked item: unlock it to save."],[/^🔒 Estás probando (\d+) piezas bloqueadas: desbloquéalas para guardar\.$/,"\u{1F512} You are trying on $1 locked items: unlock them to save."],[/^Nuevas misiones en$/,"New missions in"],[/^(\d+) h (\d+) min$/,"$1 h $2 min"],[/^· racha de (\d+) días?$/,"\xB7 $1-day streak"],[/^Tu grupo tiene (\d+) jugadores y (.+) admite equipos de (\d+)\. Elige otro modo\.$/,"Your team has $1 players and $2 allows teams of $3. Pick another mode."],[/^Día (\d+)$/,"Day $1"],[/^Nivel (\d+) requerido$/,"Level $1 required"],[/^Se desbloquea en el nivel (\d+)$/,"Unlocks at level $1"],[/^Desbloquea en nivel (\d+)$/,"Unlocks at level $1"],[/^🔒 Se desbloquea en el nivel (\d+)$/,"\u{1F512} Unlocks at level $1"],[/^Comprar 🪙 (\d+)$/,"Buy \u{1FA99} $1"],[/^🪙 (\d+) monedas gratis$/,"\u{1FA99} $1 free coins"],[/^Te quedan (\d+) hoy$/,"$1 left today"],[/^\+(\d+) monedas$/,"+$1 coins"],[/^🪙 ([\d.,]+) monedas · 🎽 (\d+)\/(\d+) objetos$/,"\u{1FA99} $1 coins \xB7 \u{1F3BD} $2/$3 items"],[/^Nv (\d+)$/,"Lv $1"],[/^Nv (\d+) · (.+)$/,(i,e,t)=>"Lv "+e+" \xB7 "+(oi[t]||t)],[/^eliminado por (.+)$/,(i,e)=>"eliminated by "+(oi[e]||e)],[/^(\d+) vivos$/,"$1 alive"],[/^(.+): (\d+)\/(\d+)$/,(i,e,t,n)=>(oi[e]||e)+": "+t+"/"+n],[/^Eliminaciones \((\d+)\)$/,"Kills ($1)"],[/^(\d+) bajas · (\d+) daño$/,"$1 kills \xB7 $2 damage"],[/^(Munición ligera|Munición media|Munición pesada|Cartuchos): (\d+)$/,(i,e,t)=>oi[e]+": "+t],[/^\+ (.+)$/,(i,e)=>"+ "+(oi[e]||e)],[/^(.+) \(tú\)$/,"$1 (you)"],[/^(\d)\/4 · (Solo|Dúos|Escuadrones)( · privada)?$/,(i,e,t,n)=>e+"/4 \xB7 "+oi[t]+(n?" \xB7 private":"")],[/^Vendas: (\d+)$/,"Bandages: $1"],[/^Botiquines: (\d+)$/,"Medkits: $1"]];jc[3]=[/^Buscando partida · (.+)$/,(i,e)=>"Finding a match \xB7 "+(oi[e]||e)]});function G_(){try{let t=new URLSearchParams(location.search).get("lang");if(t==="es"||t==="en")return t}catch{}let i=Jt.getItem("isla.lang");if(i==="es"||i==="en")return i;let e=navigator.languages&&navigator.languages[0]||navigator.language||"en";return/^(es|ca|gl|eu)\b/i.test(e)?"es":"en"}function tf(i){Jt.setItem("isla.lang",i),location.reload()}function q_(i){let e=V_.get(i);if(e!==void 0)return e;for(let[t,n]of jc)if(t.test(i))return i.replace(t,n)}function dn(i){if(_o==="es"||i==null)return i;let e=String(i),t=e.trim();if(!t)return e;let n=q_(t);return n===void 0?(W_.test(t)&&Kc.size<500&&Kc.add(t),e):e.replace(t,n)}function Qc(i){let e=i.nodeValue;if(!e||!/[A-Za-zÁ-úñ]/.test(e))return;let t=dn(e);t!==e&&(i.nodeValue=t)}function eh(i){for(let e of nf){let t=i.getAttribute&&i.getAttribute(e);if(t){let n=dn(t);n!==t&&i.setAttribute(e,n)}}}function ef(i){if(i.nodeType===3){Qc(i);return}if(i.nodeType!==1)return;let e=i.tagName;if(e==="SCRIPT"||e==="STYLE"||e==="CANVAS")return;eh(i);let t=document.createTreeWalker(i,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT),n;for(;n=t.nextNode();)if(n.nodeType===3){let s=n.parentNode;if(s&&(s.tagName==="SCRIPT"||s.tagName==="STYLE"))continue;Qc(n)}else eh(n)}function sf(){_o!=="es"&&(document.documentElement.lang="en",document.title="Isla Royale \u2013 Free online Battle Royale in your browser",ef(document.body),new MutationObserver(i=>{for(let e of i)if(e.type==="characterData")Qc(e.target);else if(e.type==="attributes")eh(e.target);else for(let t of e.addedNodes)ef(t)}).observe(document.body,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:nf}))}var _o,V_,Kc,W_,nf,vo=Dt(()=>{ao();Qu();_o=G_();V_=new Map(Object.entries(oi)),Kc=new Set;typeof window<"u"&&(window.__i18nMisses=Kc);W_=/[áéíóúñ¡¿]|\b(el|la|los|las|de|del|en|con|para|una?|tu|tus|que|partida|jugador|equipo|zona)\b/i;nf=["placeholder","title","aria-label","alt"]});var nh,ye,js=Dt(()=>{Zs();nh=class{constructor(){this.ctx=null,this.listener={x:0,y:0,yaw:0},this.musicOn=!1}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e;let t=this.ctx;this.master=t.createGain(),this.comp=t.createDynamicsCompressor(),this.comp.threshold.value=-14,this.comp.ratio.value=4,this.master.connect(this.comp).connect(t.destination),this.sfx=t.createGain(),this.sfx.connect(this.master),this.music=t.createGain(),this.music.connect(this.master),this.echo=t.createDelay(1),this.echo.delayTime.value=.18,this.echoGain=t.createGain(),this.echoGain.gain.value=.22,this.echo.connect(this.echoGain).connect(this.sfx),this.echoGain.connect(this.echo);let n=t.sampleRate*1.5;this.noise=t.createBuffer(1,n,t.sampleRate);let s=this.noise.getChannelData(0);for(let r=0;r<n;r++)s[r]=Math.random()*2-1;this.applyVolumes(),xo(()=>this.applyVolumes())}applyVolumes(){this.ctx&&(this.master.gain.value=this.portalMute?0:Q.masterVol,this.sfx.gain.value=Q.sfxVol,this.music.gain.value=Q.musicVol*.55)}setPortalMute(e){this.portalMute=!!e,this.applyVolumes()}get t(){return this.ctx.currentTime}_out(e=1,t=0){let n=this.ctx,s=n.createGain();if(s.gain.value=e,n.createStereoPanner){let r=n.createStereoPanner();r.pan.value=Math.max(-1,Math.min(1,t)),s.connect(r).connect(this.sfx)}else s.connect(this.sfx);return s}_noise(e,{t=this.t,dur:n=.2,type:s="lowpass",freq:r=2e3,q:a=.7,gain:o=1,attack:l=.002,sweepTo:c=null}){let h=this.ctx,d=h.createBufferSource();d.buffer=this.noise,d.playbackRate.value=.8+Math.random()*.4;let u=h.createBiquadFilter();u.type=s,u.frequency.setValueAtTime(r,t),u.Q.value=a,c&&u.frequency.exponentialRampToValueAtTime(c,t+n);let f=h.createGain();f.gain.setValueAtTime(1e-4,t),f.gain.exponentialRampToValueAtTime(o,t+l),f.gain.exponentialRampToValueAtTime(1e-4,t+n),d.connect(u).connect(f).connect(e),d.start(t,Math.random()*.5),d.stop(t+n+.05)}_tone(e,{t=this.t,dur:n=.15,type:s="sine",freq:r=440,to:a=null,gain:o=.5,attack:l=.005}){let c=this.ctx,h=c.createOscillator();h.type=s,h.frequency.setValueAtTime(r,t),a&&h.frequency.exponentialRampToValueAtTime(a,t+n);let d=c.createGain();d.gain.setValueAtTime(1e-4,t),d.gain.exponentialRampToValueAtTime(o,t+l),d.gain.exponentialRampToValueAtTime(1e-4,t+n),h.connect(d).connect(e),h.start(t),h.stop(t+n+.05)}spatial(e,t,n=70){let s=e-this.listener.x,r=t-this.listener.y,a=Math.hypot(s,r);if(a>n)return null;let o=Math.max(0,1-a/n)**1.6,l=Math.atan2(r,s)-this.listener.yaw;return{vol:o,pan:Math.sin(l)*Math.min(1,a/6)*.8,d:a}}gunshot(e,t=null,n=null){if(!this.ctx)return;let s=1,r=0,a=!1;if(t!==null){let c=this.spatial(t,n,e==="sniper"?140:90);if(!c)return;s=c.vol,r=c.pan,a=c.d>25}let o=this._out(s*.9,r),l={pistol:{n:3200,nd:.13,th:170,td:.08,g:.7},smg:{n:4200,nd:.08,th:210,td:.05,g:.5},shotgun:{n:1400,nd:.38,th:75,td:.22,g:1},ar:{n:2600,nd:.14,th:120,td:.1,g:.75},sniper:{n:2200,nd:.6,th:60,td:.3,g:1}}[e]||{n:3e3,nd:.12,th:150,td:.08,g:.6};if(this._noise(o,{dur:l.nd*(a?1.3:1),freq:a?l.n*.4:l.n,gain:l.g,sweepTo:300}),this._tone(o,{dur:l.td,type:"triangle",freq:l.th*2,to:l.th*.5,gain:l.g*.8}),e==="sniper"||e==="shotgun"||a){let c=this.ctx.createGain();c.gain.value=s*.5,c.connect(this.echo),this._noise(c,{dur:.3,freq:900,gain:.5})}}reload(e,t=null,n=null){if(!this.ctx)return;let s=.7,r=0;if(t!==null){let o=this.spatial(t,n,25);if(!o)return;s*=o.vol,r=o.pan}let a=this._out(s,r);this._tone(a,{type:"square",freq:900,to:500,dur:.05,gain:.25}),this._tone(a,{t:this.t+.35,type:"square",freq:650,to:1200,dur:.06,gain:.3})}dry(){this.ctx&&this._tone(this._out(.5),{type:"square",freq:1500,dur:.03,gain:.25})}step(e=null,t=null,n=!1){if(!this.ctx)return;let s=n?.35:.22,r=0;if(e!==null){let a=this.spatial(e,t,22);if(!a)return;s*=a.vol,r=a.pan}this._noise(this._out(s,r),{dur:.07,freq:500+Math.random()*300,type:"lowpass",gain:.8})}impact(e,t){if(!this.ctx)return;let n=this.spatial(e,t,40);n&&(this._tone(this._out(n.vol*.6,n.pan),{type:"sine",freq:180,to:60,dur:.12,gain:.7}),this._noise(this._out(n.vol*.4,n.pan),{dur:.06,freq:1200,gain:.6}))}hitMarker(e=!1){if(!this.ctx)return;let t=this._out(.5);this._tone(t,{type:"triangle",freq:e?1800:1350,dur:.06,gain:.5})}hurt(){if(!this.ctx)return;let e=this._out(.7);this._tone(e,{type:"sawtooth",freq:160,to:70,dur:.18,gain:.35}),this._noise(e,{dur:.12,freq:700,gain:.5})}elimination(){if(!this.ctx)return;let e=this._out(.6);[784,988,1319].forEach((t,n)=>this._tone(e,{t:this.t+n*.07,type:"triangle",freq:t,dur:.22,gain:.45}))}crate(e,t,n){if(!this.ctx)return;let s=this.spatial(e,t,40);if(!s)return;let r=this._out(s.vol*(n?.9:.4),s.pan);this._noise(r,{dur:n?.35:.08,freq:800,type:"bandpass",q:2,gain:.8}),n&&this._tone(r,{type:"triangle",freq:220,to:90,dur:.25,gain:.5})}pickup(){if(!this.ctx)return;let e=this._out(.45);this._tone(e,{type:"sine",freq:660,dur:.07,gain:.5}),this._tone(e,{t:this.t+.06,type:"sine",freq:990,dur:.1,gain:.5})}heal(){if(!this.ctx)return;let e=this._out(.4);[523,659,784,1047].forEach((t,n)=>this._tone(e,{t:this.t+n*.06,type:"sine",freq:t,dur:.16,gain:.35}))}click(){this.ctx&&this._tone(this._out(.35),{type:"triangle",freq:880,to:1320,dur:.05,gain:.4})}hover(){this.ctx&&this._tone(this._out(.15),{type:"sine",freq:1200,dur:.03,gain:.25})}zoneAlarm(){if(!this.ctx)return;let e=this._out(.4);for(let t=0;t<3;t++)this._tone(e,{t:this.t+t*.32,type:"square",freq:440,to:330,dur:.25,gain:.18})}zoneTick(){this.ctx&&this._tone(this._out(.35),{type:"sawtooth",freq:90,dur:.25,gain:.25})}countdown(e=!1){this.ctx&&this._tone(this._out(.5),{type:"square",freq:e?1046:523,dur:e?.35:.12,gain:.25})}victory(){if(!this.ctx)return;this.stopMusic();let e=this._out(.7),t=[[523,0],[659,.15],[784,.3],[1047,.45],[988,.75],[1047,.9],[1319,1.05]];for(let[n,s]of t)this._tone(e,{t:this.t+s,type:"square",freq:n,dur:.28,gain:.18}),this._tone(e,{t:this.t+s,type:"triangle",freq:n/2,dur:.3,gain:.3})}defeat(){if(!this.ctx)return;this.stopMusic();let e=this._out(.6);[[392,0],[370,.3],[349,.6],[262,.95]].forEach(([t,n])=>this._tone(e,{t:this.t+n,type:"triangle",freq:t,dur:n>.9?.9:.32,gain:.35}))}startMusic(){if(!this.ctx||this.musicOn)return;this.musicOn=!0,this.musicStep=0,this.nextNote=this.t+.1;let e=()=>{if(this.musicOn){for(;this.nextNote<this.t+.25;)this._musicStep(this.musicStep,this.nextNote),this.musicStep++,this.nextNote+=60/104/2;this.musicTimer=setTimeout(e,60)}};e()}stopMusic(){this.musicOn=!1,clearTimeout(this.musicTimer)}_musicStep(e,t){let n=this.music,s=[[60,64,67],[55,59,62],[57,60,64],[53,57,60]],r=Math.floor(e/8)%4,a=e%8,o=s[r],l=h=>440*2**((h-69)/12);if(a===0)for(let h of o)this._tone(n,{t,type:"triangle",freq:l(h),dur:1.9,gain:.07,attack:.08});a%4===0&&this._tone(n,{t,type:"sine",freq:l(o[0]-24),dur:.5,gain:.32});let c=[0,1,2,1,2,0,2,1];e%16>1&&this._tone(n,{t,type:"square",freq:l(o[c[a]]+12),dur:.12,gain:.045}),(a===0||a===4)&&this._tone(n,{t,type:"sine",freq:120,to:45,dur:.18,gain:.45}),a%2===1&&this._noise(n,{t,dur:.04,type:"highpass",freq:7e3,gain:.12}),a===4&&this._noise(n,{t,dur:.12,type:"bandpass",freq:1800,gain:.18})}},ye=new nh});function bo(i,e){return Promise.race([i,new Promise((t,n)=>setTimeout(()=>n(new Error("timeout")),e))])}function lf(){return So||(So=(async()=>{try{if(Rt==="crazygames"&&window.CrazyGames&&window.CrazyGames.SDK){let i=window.CrazyGames.SDK;await bo(i.init(),6e3),fe.sdk=i,fe.ready=!0,fe.ads=i.environment==="crazygames"||i.environment==="local";try{i.game.loadingStart()}catch{}i.data&&(window.__cgDataReady=!0);try{i.game.settings&&ye.setPortalMute(i.game.settings.muteAudio),i.game.addSettingsChangeListener&&i.game.addSettingsChangeListener(e=>ye.setPortalMute(e&&e.muteAudio))}catch{}}else if(Rt==="playgama"&&window.bridge){let i=window.bridge;await bo(i.initialize(),8e3),fe.sdk=i,fe.ready=!0,fe.ads=!0;try{let e=await bo(i.storage.get(af),5e3),t=new Map;af.forEach((n,s)=>{e&&e[s]!==null&&e[s]!==void 0&&t.set(n,String(e[s]))}),window.__pgStore=t}catch{window.__pgStore=new Map}try{ye.setPortalMute(i.platform.isAudioEnabled===!1),i.platform.on(i.EVENT_NAME.AUDIO_STATE_CHANGED,e=>ye.setPortalMute(!e)),i.platform.on(i.EVENT_NAME.PAUSE_STATE_CHANGED,e=>{ye.setPortalMute(!!e||i.platform.isAudioEnabled===!1);try{let t=window.__app&&window.__app.game;e&&t&&!t.paused&&t.togglePause&&t.togglePause(!0)}catch{}})}catch{}}else Rt==="poki"&&window.PokiSDK&&(await bo(window.PokiSDK.init(),6e3),fe.sdk=window.PokiSDK,fe.ready=!0,fe.ads=!0)}catch(i){console.warn("SDK del portal no disponible:",i&&i.message),fe.ready=!1,fe.ads=!1}return fe})(),So)}function cf(){if(fe.ready)try{fe.name==="crazygames"?fe.sdk.game.loadingStop():fe.name==="poki"?fe.sdk.gameLoadingFinished():fe.name==="playgama"&&fe.sdk.platform.sendMessage("game_ready")}catch{}}function Eo(){if(!(!fe.ready||fe.playing)){fe.playing=!0;try{fe.name==="crazygames"?fe.sdk.game.gameplayStart():fe.name==="poki"?fe.sdk.gameplayStart():fe.name==="playgama"&&fe.sdk.platform.sendMessage("level_started")}catch{}}}function zr(){if(!(!fe.ready||!fe.playing)){fe.playing=!1;try{fe.name==="crazygames"?fe.sdk.game.gameplayStop():fe.name==="poki"&&fe.sdk.gameplayStop()}catch{}}}function hf(i,e,t){if(!fe.ads)return t();let n=!1,s=()=>{n||(n=!0,e(),t())};setTimeout(s,45e3);try{if(fe.name==="crazygames")fe.sdk.ad.requestAd("midgame",{adStarted:i,adFinished:s,adError:s});else if(fe.name==="poki")fe.sdk.commercialBreak(i).then(s,s);else if(fe.name==="playgama"){let r=fe.sdk,a=!1,o=l=>{if((l==="loading"||l==="opened")&&(a=!0,l==="opened"&&i()),l==="closed"||l==="failed"){try{r.advertisement.off(r.EVENT_NAME.INTERSTITIAL_STATE_CHANGED,o)}catch{}s()}};r.advertisement.on(r.EVENT_NAME.INTERSTITIAL_STATE_CHANGED,o),r.advertisement.showInterstitial("match_end"),setTimeout(()=>{if(!a){try{r.advertisement.off(r.EVENT_NAME.INTERSTITIAL_STATE_CHANGED,o)}catch{}s()}},1500)}else s()}catch{s()}}function df(i,e,t,n){if(!fe.ads)return n("disabled");let s=!1,r=()=>{s||(s=!0,e(),t())},a=o=>{s||(s=!0,e(),n(o||"noad"))};try{if(fe.name==="crazygames")fe.sdk.ad.requestAd("rewarded",{adStarted:i,adFinished:r,adError:o=>a(o&&o.code)});else if(fe.name==="poki")fe.sdk.rewardedBreak(i).then(o=>o?r():a("dismissed"),()=>a("error"));else if(fe.name==="playgama"){let o=fe.sdk;if(o.advertisement.isRewardedSupported===!1)return a("disabled");let l=!1,c=h=>{if(h==="opened")i();else if(h==="rewarded")l=!0;else if(h==="closed"||h==="failed"){try{o.advertisement.off(o.EVENT_NAME.REWARDED_STATE_CHANGED,c)}catch{}l?r():a(h==="failed"?"noad":"dismissed")}};o.advertisement.on(o.EVENT_NAME.REWARDED_STATE_CHANGED,c),o.advertisement.showRewarded("bonus")}else a("disabled")}catch{a("error")}}function uf(){if(!fe.ready)return"";try{if(fe.name==="crazygames")return fe.sdk.game.getInviteParam("sala")||"";if(fe.name==="poki")return fe.sdk.getURLParam("sala")||""}catch{}return""}async function ff(i){if(!fe.ready)return null;try{if(fe.name==="crazygames"){let e=fe.sdk.game.inviteLink({sala:i});return typeof e=="string"?e:await e}if(fe.name==="poki")return await fe.sdk.shareableURL({sala:i})}catch{}return null}function To(i,e){if(!fe.ready||fe.name!=="crazygames")return;let t=fe.sdk.game,n=i?i+(e?"+":"-"):"";if(n!==of){of=n;try{if(!i){t.leftRoom?t.leftRoom():t.hideInviteButton&&t.hideInviteButton();return}t.updateRoom?t.updateRoom({roomId:i,isJoinable:!!e,inviteParams:{sala:i}}):e&&t.showInviteButton?t.showInviteButton({sala:i}):t.hideInviteButton&&t.hideInviteButton()}catch{}}}function pf(i){if(!(!fe.ready||fe.name!=="crazygames"))try{fe.sdk.game.addJoinRoomListener&&fe.sdk.game.addJoinRoomListener(e=>e&&e.sala&&i(String(e.sala)))}catch{}}function mf(){try{return!!(fe.ready&&fe.name==="crazygames"&&(fe.sdk.game.isInstantMultiplayer||fe.sdk.game.isInstantJoin))}catch{return!1}}var af,fe,wo,So,of,gf,Ao=Dt(()=>{Qi();js();af=["islaRoyale.profileId","islaRoyale.name","islaRoyale.token","islaRoyale.mode","islaRoyale.settings.v1","isla.lang"],fe={name:Rt,sdk:null,ready:!1,ads:!1,playing:!1},wo=fe;So=null;of="";gf=Rt==="poki"||Rt==="playgama"});var ts,bf,Sf,ih,wf,Ef,Tf,Af,Rf,Cf,sh,Pt,On,rh,ns=Dt(()=>{ts=.03333333333333333,bf=320,Sf=.55,ih=100,wf=6,Ef=8.8,Tf=3.8,Af=2.2,Rf=7.5,Cf=22,sh=2.4,Pt={FIRE:1,ADS:2,SPRINT:4,JUMP:8},On={solo:{id:"solo",name:"Solo",teamSize:1,capacity:15},duos:{id:"duos",name:"D\xFAos",teamSize:2,capacity:14},squads:{id:"squads",name:"Escuadrones",teamSize:4,capacity:15}},rh=["#3fa9f5","#ff5a5f","#ffc928","#5ad67d","#b07cff","#ff8f3f","#3fe0d0","#ff7ac8","#8fd14f","#7a8cff","#ffa3a3","#c9a36b","#9be3ff","#f2f27a","#d0d0d0"]});function Fn(i){return i=Math.max(0,Math.floor(i)),`${Math.floor(i/60)}:${String(i%60).padStart(2,"0")}`}function Df(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function Nf(i){return rh[i%rh.length]}var Te,Li,Lo,Io=Dt(()=>{vo();fo();ns();Zs();Te=i=>document.getElementById(i),Li=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);Lo=class{constructor(e){this.map=e,this.root=Te("hud"),this.overlay=Te("overlay"),this.ctx=this.overlay.getContext("2d"),this.mm=Te("minimap"),this.mmCtx=this.mm.getContext("2d"),this.bigMap=Te("bigmap"),this.bmCtx=this.bigMap.getContext("2d"),this.floaters=[],this.indicators=[],this.feed=[],this.announceT=0,this.hitT=0,this._mapImage(),this.resize(),this.root.classList.remove("hidden"),this.lastKey={}}_mapImage(){let e=this.map.size,t=2,n=document.createElement("canvas");n.width=n.height=e*t;let s=n.getContext("2d");s.fillStyle="#8fd16a",s.fillRect(0,0,e*t,e*t);for(let r of this.map.areas)s.fillStyle=r.color,s.fillRect(r.x*t,r.y*t,r.w*t,r.h*t);s.fillStyle="#6a7079";for(let r of this.map.roads)s.fillRect(r.x*t,r.y*t,r.w*t,r.h*t);for(let r of this.map.buildings)s.fillStyle=r.roofColor,s.fillRect(r.x*t,r.y*t,r.w*t,r.h*t),s.strokeStyle="rgba(0,0,0,.35)",s.strokeRect(r.x*t,r.y*t,r.w*t,r.h*t);for(let r of this.map.walls)(r.kind==="container"||r.kind==="ruin"||r.kind==="pallet")&&(s.fillStyle=r.color,s.fillRect(r.x*t,r.y*t,r.w*t,r.h*t));for(let r of this.map.circles){s.fillStyle=r.kind==="pine"||r.kind==="tree"?"rgba(46,120,52,.85)":r.kind==="rock"?"#9a9a9a":r.kind==="tank"?"#e8ecef":"#d9c48f";let a=r.kind==="pine"||r.kind==="tree"?1.6*(r.scale||1):r.r;s.beginPath(),s.arc(r.x*t,r.y*t,a*t,0,Math.PI*2),s.fill()}s.font=`bold ${7*t}px Fredoka, sans-serif`,s.textAlign="center";for(let r of this.map.pois){s.fillStyle="rgba(0,0,0,.45)";let a=dn(r.name);s.fillText(a,r.x*t+1,r.y*t+1),s.fillStyle="#fff",s.fillText(a,r.x*t,r.y*t)}this.mapImg=n,this.mapR=t}resize(){let e=Math.min(window.devicePixelRatio||1,2);this.dpr=e,this.overlay.width=innerWidth*e,this.overlay.height=innerHeight*e,this.overlay.style.width=innerWidth+"px",this.overlay.style.height=innerHeight+"px"}setRoster(e,t,n){this.players=e,this.localId=t,this.mode=n,Te("hudMode").textContent=On[n].name,this.renderKeys()}renderKeys(){let e=Q.keys;Te("slotKey0").textContent=Ct(e.slot1),Te("slotKey1").textContent=Ct(e.slot2),Te("bandKey").textContent=Ct(e.bandage),Te("kitKey").textContent=Ct(e.medkit)}updateMe(e,t){let n=Math.max(0,e.hp);Te("hpFill").style.width=n+"%",Te("hpFill").className="fill "+(n>60?"good":n>30?"mid":"low"),Te("hpText").textContent=n;for(let r=0;r<2;r++){let a=e.w[r],o=Te("slot"+r);if(o.classList.toggle("active",e.sl===r),o.classList.toggle("empty",!a),a){let l=Ft[a[0]];Te("slotName"+r).textContent=l.name,Te("slotAmmo"+r).innerHTML=`<b>${a[1]}</b><span>/ ${e.am[l.ammo]}</span>`,o.style.setProperty("--wc",l.color),Te("slotAmmo"+r).classList.toggle("low",a[1]===0)}else Te("slotName"+r).textContent="Vac\xEDo",Te("slotAmmo"+r).innerHTML=""}Te("bandCount").textContent=e.he.bandage,Te("kitCount").textContent=e.he.medkit,Te("itemBand").classList.toggle("none",!e.he.bandage),Te("itemKit").classList.toggle("none",!e.he.medkit);let s=Te("progress");if(e.rl>0||e.hl){let r=e.w[e.sl],a,o;if(e.hl)a=1-e.hl[1]/e.hl[2],o=e.hl[0]==="medkit"?"Usando botiqu\xEDn\u2026":"Usando venda\u2026";else{let l=r?Ft[r[0]].reload:1;a=1-e.rl/l,o="Recargando\u2026"}s.classList.remove("hidden"),Te("progressFill").style.width=Math.round(Math.max(0,Math.min(1,a))*100)+"%",Te("progressLabel").textContent=o}else s.classList.add("hidden");Te("killCount").textContent=e.k}updateTop(e,t,n,s){Te("aliveCount").textContent=e,Te("matchTime").textContent=Fn(Math.max(0,n));let r=Te("zoneInfo");s&&(s.st==="done"?r.innerHTML='<span class="zdot"></span>Zona final':s.ph<0?r.innerHTML=`<span class="zdot"></span>La zona aparece en <b>${Fn(s.tl)}</b>`:s.st==="wait"?r.innerHTML=`<span class="zdot"></span>La zona se cierra en <b>${Fn(s.tl)}</b>`:r.innerHTML=`<span class="zdot shrink"></span>\xA1Zona cerr\xE1ndose! <b>${Fn(s.tl)}</b>`)}updateTeam(e){let t=Te("team");if(On[this.mode].teamSize<=1){t.innerHTML="";return}t.innerHTML=e.map(n=>`<div class="mate ${n.alive?"":"dead"}"><i style="background:${n.color}"></i><span>${Li(n.name)}${n.isMe?" (t\xFA)":""}</span><div class="mbar"><div style="width:${n.alive?n.hp:0}%"></div></div></div>`).join("")}prompt(e){let t=Te("prompt");if(!e){t.classList.add("hidden");return}t.innerHTML=`<kbd>${Li(Ct(Q.keys.interact))}</kbd> ${e}`,t.classList.remove("hidden")}announce(e,t="",n=2.2){let s=Te("announce");s.className="announce show "+t,s.innerHTML=e,clearTimeout(this.annTimer),this.annTimer=setTimeout(()=>{s.className="announce "+t},n*1e3)}toast(e){let t=document.createElement("div");for(t.className="toast",t.textContent=e,Te("toasts").appendChild(t),setTimeout(()=>t.classList.add("out"),1600),setTimeout(()=>t.remove(),2100);Te("toasts").children.length>4;)Te("toasts").firstChild.remove()}killfeed(e,t,n,s){let r=document.createElement("div");r.className="kf"+(s?" me":"");let a=n==="zone"?"la zona":Ft[n]?.name||"";for(r.innerHTML=e?`<b style="color:${e.color}">${Li(e.name)}</b> <span class="kw">\u27F6 ${Li(a)} \u27F6</span> <b style="color:${t.color}">${Li(t.name)}</b>`:`<b style="color:${t.color}">${Li(t.name)}</b> <span class="kw">eliminado por ${Li(a||"la zona")}</span>`,Te("killfeed").prepend(r),setTimeout(()=>r.classList.add("out"),6e3),setTimeout(()=>r.remove(),6600);Te("killfeed").children.length>6;)Te("killfeed").lastChild.remove()}hitmarker(e=!1){let t=Te("hitmarker");t.classList.remove("show","kill"),t.offsetWidth,t.classList.add("show"),e&&t.classList.add("kill")}damageFlash(e){let t=Te("dmgVignette");t.style.opacity=Math.min(.85,.25+e/40),clearTimeout(this.dmgT),this.dmgT=setTimeout(()=>{t.style.opacity=0},180)}setZoneVignette(e){Te("zoneVignette").style.opacity=e?1:0}setLowHp(e){Te("lowHp").style.opacity=e>0&&e<=30?.35+(30-e)/60:0}floatText(e,t,n,s,r="#fff",a=!1){this.floaters.push({x:e,y:t,z:n,text:s,color:r,big:a,t:0,ox:(Math.random()-.5)*30})}addIndicator(e,t="damage"){this.indicators.push({angle:e,kind:t,t:t==="damage"?1.4:1.6})}crosshair(e,t,n,s,r){let a=Te("crosshair");a.style.display=s?"block":"none",a.style.transform=`translate(${e}px, ${t}px)`,a.style.setProperty("--gap",Math.round(6+n)+"px"),a.classList.toggle("blocked",!!r),Te("hitmarker").style.transform=`translate(${e}px, ${t}px)`}drawOverlay(e,t,n,s){let r=this.ctx,a=this.dpr;r.setTransform(a,0,0,a,0,0),r.clearRect(0,0,innerWidth,innerHeight),r.textAlign="center";for(let c of t){let h=n(c.x,c.h,c.y);if(!h)continue;let d=54;r.font="600 13px Fredoka, sans-serif",r.lineWidth=3,r.strokeStyle="rgba(0,0,0,.55)",r.strokeText(c.name,h.x,h.y-12),r.fillStyle=c.color,r.fillText(c.name,h.x,h.y-12),r.fillStyle="rgba(0,0,0,.5)",Df(r,h.x-d/2-1,h.y-7,d+2,8,4),r.fill(),r.fillStyle=c.enemy?"#ff5a5f":"#5ad67d",Df(r,h.x-d/2,h.y-6,d*Math.max(0,c.hp)/100,6,3),r.fill()}for(let c=this.floaters.length-1;c>=0;c--){let h=this.floaters[c];if(h.t+=e,h.t>.9){this.floaters.splice(c,1);continue}let d=n(h.x,h.z+h.t*1.6,h.y);if(!d)continue;let u=1-Math.max(0,h.t-.5)/.4;r.globalAlpha=u,r.font=`800 ${h.big?26:20}px Fredoka, sans-serif`,r.lineWidth=4,r.strokeStyle="rgba(0,0,0,.6)";let f=1+Math.max(0,.15-h.t)*3;r.save(),r.translate(d.x+h.ox*h.t,d.y),r.scale(f,f),r.strokeText(h.text,0,0),r.fillStyle=h.color,r.fillText(h.text,0,0),r.restore()}r.globalAlpha=1;let o=s.x,l=s.y;for(let c=this.indicators.length-1;c>=0;c--){let h=this.indicators[c];if(h.t-=e,h.t<=0){this.indicators.splice(c,1);continue}let d=Math.min(1,h.t);r.save(),r.translate(o,l),r.rotate(h.angle),h.kind==="damage"?(r.strokeStyle=`rgba(255,60,60,${.85*d})`,r.lineWidth=10,r.lineCap="round",r.beginPath(),r.arc(0,0,120,-.32,.32),r.stroke()):(r.fillStyle=`rgba(255,210,63,${.9*d})`,r.beginPath(),r.moveTo(165,0),r.lineTo(145,-11),r.lineTo(145,11),r.closePath(),r.fill()),r.restore()}}drawMinimap(e,t,n,s,r){let a=this.mmCtx,o=this.mm.width,l=this.mm.height,h=o/110;a.save(),a.clearRect(0,0,o,l),a.beginPath(),a.arc(o/2,l/2,o/2-2,0,Math.PI*2),a.clip(),a.fillStyle="#3fb6e8",a.fillRect(0,0,o,l),a.translate(o/2,l/2),r&&a.rotate(-t-Math.PI/2),a.scale(h,h),a.translate(-e.x,-e.y),a.drawImage(this.mapImg,0,0,this.map.size,this.map.size),this._drawZone(a,s,1/h);for(let d of n)!d.alive||d.isMe||!d.mate&&!d.revealed||(a.fillStyle=d.mate?d.color:"#ff3b3b",a.beginPath(),a.arc(d.x,d.y,2.2/h*2.4,0,Math.PI*2),a.fill(),a.strokeStyle="#fff",a.lineWidth=1/h,a.stroke());if(a.restore(),a.save(),a.translate(o/2,l/2),a.rotate(r?-Math.PI/2:e.a),a.fillStyle="#ffffff",a.strokeStyle="#1b1b1f",a.lineWidth=2,a.beginPath(),a.moveTo(9,0),a.lineTo(-6,-6),a.lineTo(-3,0),a.lineTo(-6,6),a.closePath(),a.fill(),a.stroke(),a.restore(),r){let d=-t-Math.PI/2-Math.PI/2;a.fillStyle="#fff",a.font="bold 12px Fredoka, sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText("N",o/2+Math.cos(d)*(o/2-12),l/2+Math.sin(d)*(l/2-12))}a.strokeStyle="rgba(255,255,255,.85)",a.lineWidth=3,a.beginPath(),a.arc(o/2,l/2,o/2-2,0,Math.PI*2),a.stroke()}_drawZone(e,t,n){t&&(e.save(),e.fillStyle="rgba(110,60,220,.38)",e.beginPath(),e.rect(-200,-200,this.map.size+400,this.map.size+400),e.arc(t.cx,t.cy,Math.max(.1,t.r),0,Math.PI*2,!0),e.fill("evenodd"),e.strokeStyle="#b07cff",e.lineWidth=2.5*n,e.beginPath(),e.arc(t.cx,t.cy,Math.max(.1,t.r),0,Math.PI*2),e.stroke(),t.ph>=0&&t.st!=="done"&&(e.strokeStyle="#ffffff",e.lineWidth=2*n,e.setLineDash([6*n,4*n]),e.beginPath(),e.arc(t.tx,t.ty,Math.max(.1,t.tr),0,Math.PI*2),e.stroke(),e.setLineDash([])),e.restore())}showScoreboard(e,t){if(Te("scoreboard").classList.toggle("hidden",!e),!e||!t)return;let s=this.bmCtx,r=this.bigMap.width,a=r/this.map.size;s.clearRect(0,0,r,r),s.save(),s.scale(a,a),s.drawImage(this.mapImg,0,0,this.map.size,this.map.size),this._drawZone(s,t.zone,1/a);for(let l of t.players)!l.alive||!l.mate&&!l.isMe||(s.fillStyle=l.isMe?"#ffffff":l.color,s.beginPath(),s.arc(l.x,l.y,4.5/a*1.2,0,Math.PI*2),s.fill(),s.strokeStyle="#1b1b1f",s.lineWidth=1.5/a,s.stroke());s.restore();let o=t.players.slice().sort((l,c)=>c.alive-l.alive||c.kills-l.kills);Te("sbInfo").innerHTML=`<div class="sbHead"><span>${On[this.mode].name}</span><span>${t.alive} vivos</span><span>${Fn(t.time)}</span></div><div class="sbInv">${t.inventory}</div><table><tr><th>Jugador</th><th>Equipo</th><th>Bajas</th><th>Estado</th></tr>`+o.map(l=>`<tr class="${l.isMe?"me":""} ${l.alive?"":"dead"}"><td>${Li(l.name)}${l.bot?' <small title="Controlado por IA">IA</small>':""}</td><td><i class="tdot" style="background:${l.color}"></i>${l.team+1}</td><td>${l.kills}</td><td>${l.alive?"Vivo":"Eliminado"}</td></tr>`).join("")+"</table>"}hide(){this.root.classList.add("hidden"),Te("scoreboard").classList.add("hidden"),this.ctx.clearRect(0,0,this.overlay.width,this.overlay.height),Te("killfeed").innerHTML="",Te("toasts").innerHTML="",Te("dmgVignette").style.opacity=0,Te("zoneVignette").style.opacity=0,Te("lowHp").style.opacity=0,Te("spectate").classList.add("hidden"),Te("announce").className="announce"}}});function Hf(){li=new Yi({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),li.setSize(128,128),li.outputColorSpace=mt,ci=new wi,ci.add(new Ti("#ffffff","#8899aa",1.5));let i=new Ai("#ffffff",1.4);i.position.set(2,4,5),ci.add(i),rs=new Nt(30,1,.1,50)}function tr(i,e={}){let t=_n[i];if(!t)return"";let n=i+JSON.stringify(e);if(er.has(n))return er.get(n);try{li||Hf();let s={...xn,...e,[t.slot]:i};t.slot!=="hat"&&t.slot!=="hair"&&(s.hat=null),t.slot==="hat"&&(s.hair="hair-short");let r=new qn(s);for(let l=0;l<3;l++)r.update(.03,{speed:0});r.head.rotation.set(0,0,0),r.eyes&&(r.eyes.scale.y=1),ci.add(r.root);let a=zf[t.slot]||zf.top;rs.position.set(...a.pos),rs.lookAt(...a.look),li.render(ci,rs);let o=li.domElement.toDataURL("image/png");return ci.remove(r.root),er.set(n,o),o}catch(s){return console.warn("miniatura",s),""}}function ch(i){let e="o"+JSON.stringify(i);if(er.has(e))return er.get(e);try{li||Hf();let t=new qn(i);for(let s=0;s<3;s++)t.update(.03,{speed:0});t.root.rotation.y=.35,ci.add(t.root),rs.position.set(.5,1.4,4.6),rs.lookAt(0,1.05,0),li.render(ci,rs);let n=li.domElement.toDataURL("image/png");return ci.remove(t.root),er.set(e,n),n}catch{return""}}var li,ci,rs,er,zf,Gf=Dt(()=>{ai();Ur();mo();li=null,ci=null,rs=null,er=new Map;zf={hair:{pos:[.5,1.95,2],look:[0,1.72,0]},face:{pos:[.3,1.8,1.7],look:[0,1.7,0]},hat:{pos:[.5,2.05,2.1],look:[0,1.85,0]},mask:{pos:[.3,1.8,1.8],look:[0,1.7,0]},glasses:{pos:[.3,1.82,1.6],look:[0,1.75,0]},top:{pos:[.6,1.4,3],look:[0,1.15,0]},pants:{pos:[.6,.75,2.8],look:[0,.5,0]},backpack:{pos:[-.8,1.4,-2.8],look:[0,1.15,0]},special:{pos:[.9,1.6,3.4],look:[0,1.3,0]}}});async function hh(){if(ev){await lf(),hi.portal=!0,hi.enabled=wo.ads;return}if(!Rt)try{let i=await(await fetch(oo+"/api/config",{cache:"no-store"})).json();if(!i.adsClient)return;let e=document.createElement("script");e.async=!0,e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",e.setAttribute("data-ad-client",i.adsClient),i.adsTest&&e.setAttribute("data-adbreak-test","on"),e.setAttribute("data-ad-frequency-hint","120s"),e.crossOrigin="anonymous",e.onerror=()=>{hi.enabled=!1},document.head.appendChild(e),window.adsbygoogle=window.adsbygoogle||[],window.adBreak=window.adConfig=function(t){window.adsbygoogle.push(t)},window.adConfig({preloadAdBreaks:"on",sound:"on"}),hi.enabled=!0}catch{}}function Uo(i,e){if(!hi.enabled)return e();if(hi.portal)return hf(No,ko,e);let t=!1,n=()=>{t||(t=!0,e())};setTimeout(n,8e3);try{window.adBreak({type:"next",name:i,beforeAd:No,afterAd:ko,adBreakDone:n})}catch{n()}}function nr(){return hi.enabled}function Wf({onViewed:i,onFail:e}){if(!hi.enabled)return e("disabled");if(hi.portal)return df(No,ko,i,e);let t=!1,n=s=>{t||(t=!0,e(s))};try{window.adBreak({type:"reward",name:"recompensa",beforeAd:No,afterAd:ko,beforeReward:s=>s(),adViewed:()=>{t||(t=!0,i())},adDismissed:()=>n("dismissed"),adBreakDone:s=>{t||n(s&&s.breakStatus||"noad")}})}catch{n("error")}}var ev,hi,Vf,No,ko,dh=Dt(()=>{js();Qi();Ao();ev=Rt==="crazygames"||Rt==="poki"||Rt==="playgama",hi={enabled:!1,ready:!1,portal:!1};Vf=null,No=()=>{ye.ctx&&(Vf=ye.musicOn,ye.stopMusic(),ye.ctx.suspend())},ko=()=>{ye.ctx&&(ye.ctx.resume(),Vf&&ye.startMusic())}});var Zf={};op(Zf,{closePanel:()=>$r,initMeta:()=>ph,isPanelOpen:()=>yh,onProfileUpdate:()=>xh,requestAd:()=>Xr,showLevelUp:()=>zo,showReward:()=>Yf});function ph(i,e){tt=i,Bo=e.showError,fetch(oo+"/api/config").then(s=>s.json()).then(s=>{qf=Rt?{...s,payments:!1}:s}).catch(()=>{});let t=tt.net;t.on("reward",s=>Yf(s.reward)),t.on("info",s=>Fo(s.msg)),t.on("checkout",s=>{/^https:\/\/checkout\.stripe\.com\//.test(s.url)&&(location.href=s.url)}),t.on("adToken",s=>{let r=uh.get(s.req);uh.delete(s.req),Wf({onViewed:()=>t.send({t:"adDone",token:s.token}),onFail:a=>{r&&r.btn&&(r.btn.disabled=!1),Bo(a==="dismissed"?"Has cerrado el anuncio antes de terminar: no hay recompensa.":"Ahora mismo no hay anuncios disponibles. Int\xE9ntalo m\xE1s tarde.")}})}),Oe("mCustom").onclick=()=>Vr("custom"),Oe("mShop").onclick=()=>Vr("shop"),Oe("mMissions").onclick=()=>Vr("missions"),Oe("mRewards").onclick=()=>Vr("rewards"),Oe("mProfile").onclick=()=>Vr("profile"),document.querySelectorAll(".panelClose").forEach(s=>s.onclick=$r),Oe("customSave").onclick=iv,Oe("customReset").onclick=()=>{Xt={...tt.profile.outfit},Wr(),ir()},Oe("lvlOk").onclick=()=>{Oe("levelup").classList.add("hidden")},Oe("rewardOk").onclick=()=>{Oe("rewardPop").classList.add("hidden")};let n=new URLSearchParams(location.search).get("compra");n==="ok"&&setTimeout(()=>Fo("Pago recibido: tus monedas llegar\xE1n en unos segundos."),1500),n==="cancelada"&&setTimeout(()=>Fo("Has cancelado la compra."),1500)}function Fo(i){let e=document.createElement("div");e.className="lobbyToast",e.textContent=i,document.body.appendChild(e),setTimeout(()=>e.classList.add("out"),2600),setTimeout(()=>e.remove(),3100)}function nv(i){let e=i.unlock;return e.type==="free"?"Gratis":e.type==="level"?`Nivel ${e.level}`:e.type==="coins"?`\u{1FA99} ${e.price}`:e.type==="ads"?`\u{1F4FA} ${tt.profile?.ads?.progress?.[i.id]||0}/${e.ads} anuncios`:e.type==="daily"?"\u{1F381} Recompensa diaria":""}function qr(i){return{skin:i.skin,hairColor:i.hairColor,topColor:i.topColor,pantsColor:i.pantsColor}}function mh(i,{equipped:e=!1,showAction:t=!0}={}){let n=as(i.id),s=Bu[i.rarity],r=tr(i.id,qr(Xt||tt.profile.outfit)),a="";return t&&!n&&(i.unlock.type==="coins"?a=`<button class="cardBtn buy" data-buy="${i.id}" ${tt.profile.coins<i.unlock.price?'data-short="1"':""}>Comprar \u{1FA99} ${i.unlock.price}</button>`:i.unlock.type==="ads"?a=nr()?`<button class="cardBtn ad" data-ad="${i.id}">\u{1F4FA} Ver anuncio</button>`:'<span class="cardNote">Anuncios a\xFAn no activos</span>':i.unlock.type==="level"?a=`<span class="cardNote">\u{1F512} Se desbloquea en el nivel ${i.unlock.level}</span>`:i.unlock.type==="daily"&&(a='<span class="cardNote">\u{1F381} Llega con la recompensa diaria</span>')),`<div class="iCard ${n?"own":"locked"} ${e?"equipped":""}" data-item="${i.id}" style="--rc:${s.color}">
    <div class="iThumb">${r?`<img src="${r}" alt="">`:""}${n?"":'<span class="lockIc">\u{1F512}</span>'}${e?'<span class="eqIc">\u2714</span>':""}</div>
    <div class="iName">${Mn(i.name)}</div>
    <div class="iMeta"><span class="rar" style="color:${s.color}">${i.rarity}</span><span>${n?e?"Equipado":"Desbloqueado":nv(i)}</span></div>
    ${a}
  </div>`}function gh(i){i.querySelectorAll("[data-buy]").forEach(e=>e.onclick=t=>{if(t.stopPropagation(),e.dataset.short)return Bo("No tienes monedas suficientes. Cons\xEDguelas jugando, con misiones o en Recompensas.");let n=_n[e.dataset.buy];e.disabled=!0,tt.net.send({t:"buy",id:n.id})}),i.querySelectorAll("[data-ad]").forEach(e=>e.onclick=t=>{t.stopPropagation(),Xr("item",e.dataset.ad,e)})}function Xr(i,e=null,t=null){if(!nr())return Bo("Los anuncios con recompensa a\xFAn no est\xE1n activados.");let n=Math.random().toString(36).slice(2);uh.set(n,{btn:t}),t&&(t.disabled=!0),tt.net.send({t:"adStart",kind:i,id:e,req:n,via:Rt||"web"})}function Vr(i){ye.click(),$r(!0),un=i,document.body.classList.add("panelOpen"),(i==="custom"||i==="shop")&&(Xt={...tt.profile.outfit},tt.lobby.setFocus(i==="shop"?"left":"center")),Oe(i+"Panel").classList.remove("hidden"),$f()}function $r(i){un&&((un==="custom"||un==="shop")&&(Xt=null,tt.lobby.setFocus(!1),tt.lobby.setOutfit(tt.profile.outfit)),Oe(un+"Panel").classList.add("hidden"),document.body.classList.remove("panelOpen"),un=null,i!==!0&&ye.click())}function yh(){return!!un}function $f(){un==="custom"?ir():un==="shop"?fh():un==="missions"?rv():un==="rewards"?av():un==="profile"&&ov()}function xh(){Oe("coinCount").textContent=tt.profile.coins.toLocaleString("es-ES");let i=tt.profile.missions.list.filter(e=>e.progress>=e.goal&&!e.claimed).length;Oe("mMissionsBadge").textContent=i||"",Oe("mMissionsBadge").classList.toggle("hidden",!i),Oe("mRewardsBadge").classList.toggle("hidden",tt.profile.daily.claimedToday),un&&$f()}function Wr(){tt.lobby.setOutfit(Xt)}function ir(){let i=[{id:"presets",name:"Estilos r\xE1pidos",icon:"\u2B50"},...Xs,{id:"colors",name:"Colores",icon:"\u{1F3A8}"}];Oe("customTabs").innerHTML=i.map(s=>`<button class="cTab ${Gr===s.id?"active":""}" data-tab="${s.id}"><span>${s.icon}</span>${Mn(s.name)}</button>`).join(""),Oe("customTabs").querySelectorAll(".cTab").forEach(s=>s.onclick=()=>{Gr=s.dataset.tab,ye.hover(),ir()});let e=Oe("customGrid");if(Gr==="presets")e.innerHTML='<p class="muted">Empieza desde un estilo y luego cambia lo que quieras.</p><div class="iGrid">'+kr.map((s,r)=>`<div class="iCard own preset" data-preset="${r}"><div class="iThumb tall"><img src="${ch(s.outfit)}" alt=""></div><div class="iName">${Mn(s.name)}</div></div>`).join("")+"</div>",e.querySelectorAll("[data-preset]").forEach(s=>s.onclick=()=>{Xt={...kr[+s.dataset.preset].outfit},Wr(),ir(),ye.click()});else if(Gr==="colors")e.innerHTML=Vc.map(s=>`<h4>${Mn(s.name)}</h4><div class="swatches">${s.palette.map(r=>`<button class="sw ${Xt[s.id]===r?"active":""}" data-c="${s.id}" data-v="${r}" style="background:${r}"></button>`).join("")}</div>`).join(""),e.querySelectorAll(".sw").forEach(s=>s.onclick=()=>{Xt[s.dataset.c]=s.dataset.v,Wr(),ir()});else{let s=Xs.find(o=>o.id===Gr),r=Pi.filter(o=>o.slot===s.id).sort((o,l)=>as(l.id)-as(o.id)),a=s.required?"":`<div class="iCard own none ${Xt[s.id]?"":"equipped"}" data-none="1"><div class="iThumb"><span class="noneIc">\u2205</span>${Xt[s.id]?"":'<span class="eqIc">\u2714</span>'}</div><div class="iName">Sin ${Mn(s.name.toLowerCase().split(" ")[0])}</div></div>`;e.innerHTML=`<div class="iGrid">${a}${r.map(o=>mh(o,{equipped:Xt[s.id]===o.id})).join("")}</div>`,e.querySelectorAll(".iCard").forEach(o=>o.onclick=()=>{o.dataset.none?Xt[s.id]=null:o.dataset.item&&(Xt[s.id]=o.dataset.item),ye.hover(),Wr(),ir()}),gh(e)}let t=Xs.map(s=>Xt[s.id]).filter(s=>s&&!as(s)),n=JSON.stringify(Xt)!==JSON.stringify(tt.profile.outfit);Oe("customSave").disabled=!n||t.length>0,Oe("customStatus").innerHTML=t.length?`\u{1F512} Est\xE1s probando ${t.length===1?"una pieza bloqueada":t.length+" piezas bloqueadas"}: desbloqu\xE9alas para guardar.`:n?"Tienes cambios sin guardar.":"Esta es tu apariencia actual."}function iv(){tt.net.send({t:"setOutfit",outfit:Xt}),Oe("customSave").disabled=!0}function fh(){let i=[["featured","\u2B50 Destacados"],["new","\u{1F195} Novedades"],["popular","\u{1F525} Populares"],["all","\u{1F6CD}\uFE0F Todo"],["ads","\u{1F4FA} Gratis con anuncios"]];qf.payments&&i.push(["coins","\u{1FA99} Monedas"]),Oe("shopTabs").innerHTML=i.map(([r,a])=>`<button class="sTab ${di===r?"active":""}" data-tab="${r}">${a}</button>`).join(""),Oe("shopTabs").querySelectorAll(".sTab").forEach(r=>r.onclick=()=>{di=r.dataset.tab,fh()}),Oe("shopCoins").textContent=tt.profile.coins.toLocaleString("es-ES");let e=Oe("shopBody");if(di==="coins"){e.innerHTML='<p class="muted">Compras opcionales con pago seguro de Stripe. Las monedas se a\xF1aden a tu cuenta cuando se confirma el pago.</p><div class="packs">'+Vu.map(r=>`<div class="pack"><div class="packIc">\u{1FA99}</div><b>${Mn(r.label)}</b>${r.bonus?`<span class="bonus">${r.bonus}</span>`:""}<button class="btn small" data-pack="${r.id}">${(r.price/100).toFixed(2).replace(".",",")} \u20AC</button></div>`).join("")+"</div>",e.querySelectorAll("[data-pack]").forEach(r=>r.onclick=()=>{r.disabled=!0,tt.net.send({t:"buyPack",id:r.dataset.pack})});return}let t=Pi.filter(r=>r.unlock.type!=="free");di==="featured"?t=t.filter(r=>r.tags.includes("featured")||r.rarity==="legendaria"):di==="new"?t=t.filter(r=>r.tags.includes("new")):di==="popular"?t=t.filter(r=>r.tags.includes("popular")||r.unlock.type==="coins").slice(0,12):di==="ads"&&(t=t.filter(r=>r.unlock.type==="ads"));let n=[{id:"all",name:"Todas"},...Xs.filter(r=>!["face"].includes(r.id))],s=di==="all"?`<div class="chips">${n.map(r=>`<button class="chip ${Oo===r.id?"active":""}" data-slot="${r.id}">${r.icon||""} ${Mn(r.name)}</button>`).join("")}</div>`:"";di==="all"&&Oo!=="all"&&(t=t.filter(r=>r.slot===Oo)),t.sort((r,a)=>as(r.id)-as(a.id)),e.innerHTML=s+`<div class="iGrid">${t.map(r=>mh(r,{equipped:tt.profile.outfit[r.slot]===r.id})).join("")||'<p class="muted">No hay art\xEDculos aqu\xED.</p>'}</div>`,e.querySelectorAll(".chip").forEach(r=>r.onclick=()=>{Oo=r.dataset.slot,fh()}),e.querySelectorAll(".iCard").forEach(r=>r.onclick=()=>{let a=_n[r.dataset.item];a&&(Xt={...tt.profile.outfit,[a.slot]:a.id},Wr(),ye.hover(),Oe("shopPreview").textContent=`Vista previa: ${a.name}`)}),gh(e)}function sv(){let i=new Date,e=new Date(i.toLocaleString("en-US",{timeZone:"Europe/Madrid"})),t=new Date(e);return t.setHours(24,0,0,0),Math.max(0,(t-e)/1e3)}function rv(){let i=tt.profile.missions.list,e=sv();Oe("missionsBody").innerHTML=`<p class="muted">Nuevas misiones en <b>${Math.floor(e/3600)} h ${Math.floor(e%3600/60)} min</b>.</p>`+i.map(t=>{let n=t.progress>=t.goal,s=Math.round(Math.min(1,t.progress/t.goal)*100),r=t.stat==="survived"?`${Fn(t.progress)} / ${Fn(t.goal)}`:`${t.progress} / ${t.goal}`;return`<div class="mission ${t.claimed?"claimed":n?"done":""}"><div class="mInfo"><b>${Mn(t.text)}</b><div class="mBar"><div style="width:${s}%"></div></div><small>${r}</small></div>
      <div class="mRew">\u{1FA99} ${t.coins}<br>\u2B50 ${t.xp} XP</div>
      ${t.claimed?'<span class="mState">\u2714 Cobrada</span>':`<button class="btn small" data-claim="${t.id}" ${n?"":"disabled"}>${n?"Cobrar":"En curso"}</button>`}</div>`}).join(""),Oe("missionsBody").querySelectorAll("[data-claim]").forEach(t=>t.onclick=()=>{t.disabled=!0,tt.net.send({t:"claimMission",id:t.dataset.claim})})}function av(){let i=tt.profile.daily,e=Hu.map((r,a)=>{let o=a<i.nextIndex||i.claimedToday&&a===i.nextIndex?"got":a===i.nextIndex&&!i.claimedToday?"today":"",l=r.item?_n[r.item]:null;return`<div class="day ${o}"><small>D\xEDa ${a+1}</small>${l?`<img src="${tr(l.id,qr(tt.profile.outfit))}" alt="">`:'<div class="dayIc">\u{1FA99}</div>'}<b>${l?Mn(l.name):""}</b><span>${r.coins?"\u{1FA99} "+r.coins:""}${r.xp?" \xB7 \u2B50 "+r.xp:""}</span>${o==="got"?"<i>\u2714</i>":""}</div>`}).join(""),t;if(nr()){let r=Pi.filter(a=>a.unlock.type==="ads"&&!Xf().includes(a.id));t=`<div class="adRow"><div><b>\u{1FA99} ${Gu} monedas gratis</b><small>Te quedan ${tt.profile.ads.coinsLeft} hoy</small></div><button class="btn small alt" id="adCoins" ${tt.profile.ads.coinsLeft?"":"disabled"}>\u{1F4FA} Ver anuncio</button></div><div class="iGrid">${r.map(a=>mh(a)).join("")||'<p class="muted">\xA1Ya tienes todos los objetos de anuncios!</p>'}</div>`}else t='<p class="muted">Las recompensas por ver anuncios aparecer\xE1n aqu\xED en cuanto se active el proveedor de anuncios del juego. Mientras tanto puedes conseguir monedas jugando, con las misiones y con la recompensa diaria.</p>';Oe("rewardsBody").innerHTML=`<h4>Recompensa diaria <small>\xB7 racha de ${i.streak} d\xEDa${i.streak===1?"":"s"}</small></h4><div class="days">${e}</div>
    <div class="dailyBtn">${i.claimedToday?'<span class="muted">\u2714 Ya has recogido la de hoy. Vuelve ma\xF1ana para mantener la racha.</span>':'<button class="btn" id="claimDaily">\u{1F381} Recoger recompensa de hoy</button>'}</div>
    <h4>Recompensas gratis por anuncios <small>\xB7 siempre opcionales, nunca durante una partida</small></h4>${t}`;let n=Oe("claimDaily");n&&(n.onclick=()=>{n.disabled=!0,tt.net.send({t:"claimDaily"})});let s=Oe("adCoins");s&&(s.onclick=()=>Xr("coins",null,s)),gh(Oe("rewardsBody"))}function ov(){let i=tt.profile,e=i.matches?Math.round(i.wins/i.matches*100):0,t=(i.kills/Math.max(1,i.deaths)).toFixed(2),n=(r,a)=>`<div class="stat"><b>${r}</b><small>${a}</small></div>`,s=Pi.filter(r=>as(r.id)).length;Oe("profileBody").innerHTML=`<div class="profTop"><img src="${ch(i.outfit)}" alt=""><div><h3>${Mn(i.name)} <button class="iconBtn" id="profEdit">\u270E</button></h3><div class="plevel"><span class="lvl">NV <b>${i.level}</b></span><div class="xpbar"><div style="width:${Math.round(i.levelXp/i.levelNeed*100)}%"></div></div><small>${i.levelXp}/${i.levelNeed} XP</small></div><p>\u{1FA99} ${i.coins.toLocaleString("es-ES")} monedas \xB7 \u{1F3BD} ${s}/${Pi.length} objetos</p></div></div>
  <div class="statsGrid">${n(i.matches,"Partidas")}${n(i.wins,"Victorias")}${n(e+"%","% de victorias")}${n(i.kills,"Eliminaciones")}${n(t,"Bajas por muerte")}${n(i.damage,"Da\xF1o total")}${n(i.top5,"Top 5")}${n(i.bestKills,"R\xE9cord de bajas")}</div>
  <table><tr><th>Modo</th><th>Partidas</th><th>Victorias</th><th>Eliminaciones</th></tr>${Object.entries(On).map(([r,a])=>{let o=i.byMode[r]||{matches:0,wins:0,kills:0};return`<tr><td>${a.name}</td><td>${o.matches}</td><td>${o.wins}</td><td>${o.kills}</td></tr>`}).join("")}</table>
  <h4>Pr\xF3ximas recompensas por nivel</h4><div class="nextLv">${lv(i.level).map(r=>`<div class="nl"><b>Nv ${r.level}</b>${r.items.map(a=>`<img src="${tr(a,qr(i.outfit))}" title="${Mn(_n[a].name)}">`).join("")}<span>\u{1FA99} ${r.coins}</span></div>`).join("")}</div>`,Oe("profEdit").onclick=()=>{Oe("nameInput").value=i.name,Oe("nameModal").classList.remove("hidden"),Oe("nameInput").focus()}}function lv(i){let e=[];for(let t=i+1;t<=i+12&&e.length<5;t++){let n=Pi.filter(s=>s.unlock.type==="level"&&s.unlock.level===t).map(s=>s.id);(n.length||t%5===0)&&e.push({level:t,items:n,coins:50+t*10+(t%5===0?150:0)})}return e}function zo(i){if(!i||!i.length)return;let e=i[i.length-1],t=i.flatMap(r=>r.items),n=i.reduce((r,a)=>r+a.coins,0);Oe("lvlNum").textContent=e.level,Oe("lvlRewards").innerHTML=t.map(r=>`<div class="lvItem"><img src="${tr(r,qr(tt.profile.outfit))}" alt=""><b>${Mn(_n[r].name)}</b><small>\xA1Desbloqueado!</small></div>`).join("")+`<div class="lvItem coins"><div class="bigCoin">\u{1FA99}</div><b>+${n} monedas</b></div>`;let s=Oe("levelup");s.classList.remove("hidden"),s.classList.remove("play"),s.offsetWidth,s.classList.add("play"),ye.victory()}function Yf(i){if(!i)return;if(ye.pickup(),i.levelRewards&&i.levelRewards.length&&setTimeout(()=>zo(i.levelRewards),400),!(i.items&&i.items.length||i.coins||i.xp)){Fo(i.title);return}Oe("rewardTitle").textContent=i.title,Oe("rewardItems").innerHTML=(i.items||[]).map(n=>`<div class="lvItem"><img src="${tr(n,qr(tt.profile.outfit))}" alt=""><b>${Mn(_n[n].name)}</b></div>`).join("")+(i.coins?`<div class="lvItem coins"><div class="bigCoin">\u{1FA99}</div><b>+${i.coins}</b></div>`:"")+(i.xp?`<div class="lvItem coins"><div class="bigCoin">\u2B50</div><b>+${i.xp} XP</b></div>`:"");let t=Oe("rewardPop");t.classList.remove("hidden"),t.classList.remove("play"),t.offsetWidth,t.classList.add("play")}var Oe,Mn,tt,Bo,qf,Xt,Gr,di,Oo,un,uh,tv,Xf,as,_h=Dt(()=>{mo();ns();Gf();dh();js();Io();Qi();Oe=i=>document.getElementById(i),Mn=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),qf={payments:!1},Xt=null,Gr="presets",di="featured",Oo="all",un=null,uh=new Map;tv=()=>tt.profile?.level||1,Xf=()=>tt.profile?.owned||[],as=i=>Wc(i,tv(),Xf())});ai();ao();Qi();var co=class{constructor(){this.ws=null,this.handlers={},this.status="offline",this.ping=0,this.retry=0,this.onStatus=()=>{}}on(e,t){this.handlers[e]=t}connect(){this.setStatus("connecting");let e;try{e=new WebSocket(ku)}catch{return this.scheduleReconnect()}this.ws=e,e.onopen=()=>{this.retry=0,this.setStatus("online"),this.handlers.__open&&this.handlers.__open(),clearInterval(this.pingTimer),this.pingTimer=setInterval(()=>this.send({t:"ping",c:performance.now()}),2e3)},e.onmessage=t=>{let n;try{n=JSON.parse(t.data)}catch{return}if(n.t==="pong"){this.ping=Math.round(performance.now()-n.c),this.onStatus(this.status,this.ping);return}let s=this.handlers[n.t];if(s)try{s(n)}catch(r){console.error("Error procesando",n.t,r)}},e.onclose=()=>{clearInterval(this.pingTimer),this.ws===e&&(this.setStatus("offline"),this.handlers.__close&&this.handlers.__close(),this.scheduleReconnect())},e.onerror=()=>{}}scheduleReconnect(){this.retry++;let e=Math.min(8e3,800*this.retry);setTimeout(()=>this.connect(),e)}setStatus(e){this.status=e,this.onStatus(e,this.ping)}send(e){this.ws&&this.ws.readyState===1&&this.ws.send(JSON.stringify(e))}};ai();po();Ur();var Or=class{constructor(e){this.renderer=e,this.scene=new wi,this.scene.background=new Le("#8fd3ff"),this.scene.fog=new Os("#a8ddff",30,90),this.camera=new Nt(40,innerWidth/innerHeight,.1,300),this.t=0,this.rotY=.35,this.rotTarget=.35,this.dragging=!1,this.idleT=0,this.emote=null,this._build(),this.mates=[],this.focus=!1,this.camCur=null,this.setOutfit(null)}_build(){let e=this.scene;e.add(new Ti("#e8f6ff","#6aa84f",1.2));let t=new Ai("#fff1d6",1.6);t.position.set(6,12,8),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),Object.assign(t.shadow.camera,{left:-8,right:8,top:8,bottom:-8}),e.add(t);let n=new Ee(new Bs(200,48),nt("#45b9ea"));n.rotation.x=-Math.PI/2,n.position.y=-1.4,e.add(n);let s=new Ee(new At(7,5.5,2.2,28),nt("#e9d29a"));s.position.y=-1,s.receiveShadow=!0,e.add(s);let r=new Ee(new At(6.6,6.8,.4,28),nt("#8fd16a"));r.position.y=0,r.receiveShadow=!0,e.add(r);let a=new Ee(new At(1.25,1.4,.35,24),nt("#ffffff"));a.position.y=.35,a.receiveShadow=!0,a.castShadow=!0,e.add(a);let o=new Ee(new Hs(1.3,.06,8,32),nt("#ffd23f"));o.rotation.x=Math.PI/2,o.position.y=.5,e.add(o),this.pedestal=a;let l=(m,p,v=1)=>{let x=new Ee(new At(.15*v,.22*v,1*v,7),nt("#8b5a2b"));x.position.set(m,.6*v,p),x.castShadow=!0,e.add(x);for(let S=0;S<2;S++){let R=new Ee(new ri((1.1-S*.3)*v,1.5*v,8),nt(S?"#3e9b4f":"#358a45"));R.position.set(m,(1.5+S*.8)*v,p),R.castShadow=!0,e.add(R)}};l(-4.2,-2.4,1.3),l(-5,.8,1),l(4.6,-2.8,1.4),l(3.6,-4.4,1),l(-2.6,-4.6,1.1);let c=new Ee(new zs(.7,0),new qt({color:"#a8a8a8",flatShading:!0}));c.position.set(3.8,.4,1.6),c.castShadow=!0,e.add(c);let h=new Ee(new ft(1,1,1),nt("#c98a48"));h.position.set(-3.2,.7,2.2),h.rotation.y=.4,h.castShadow=!0,e.add(h);let d=new st,u=new Ee(new ft(3,2.2,2.4),nt("#ffd6a5"));u.position.y=1.3,d.add(u);let f=new Ee(new ri(2.4,1.4,4),nt("#d9534f"));f.position.y=3.1,f.rotation.y=Math.PI/4,d.add(f);let g=new Ee(new ft(.7,1.2,.05),nt("#8b5a2b"));g.position.set(0,.8,1.22),d.add(g),d.position.set(1.2,0,-4.5),d.rotation.y=-.3,d.traverse(m=>{m.isMesh&&(m.castShadow=!0)}),e.add(d),this.clouds=[];for(let m=0;m<9;m++){let p=new st;for(let v=0;v<4;v++){let x=new Ee(new Zt(1+Math.random(),10,8),nt("#ffffff"));x.position.set(v*1.3,Math.random()*.6,Math.random()),p.add(x)}p.position.set(-40+Math.random()*80,10+Math.random()*8,-30-Math.random()*30),p.userData.speed=.3+Math.random()*.5,e.add(p),this.clouds.push(p)}let y=new Ee(new Zt(1.2,16,12),nt("#ff5a5f"));y.position.set(-9,9,-14),e.add(y),this.balloon=y}setOutfit(e){let t=JSON.stringify(e);this.char&&this._key===t||(this._key=t,this.char?this.char.setOutfit(e):(this.char=new qn(e),this.char.setWeapon("ar"),this.char.root.position.y=.52,this.scene.add(this.char.root)),this.char.root.traverse(n=>{n.isMesh&&!n.material.transparent&&(n.castShadow=!0)}),this.char.pickup(),this.emote={t:0,kind:Math.random()<.5?"wave":"spin"})}setFocus(e){this.focus=e;for(let t of this.mates)t.root.visible=!e}setMates(e){for(let n of this.mates)this.scene.remove(n.root);this.mates=[];let t=[[-2.2,.6],[2.2,.6],[-3.6,1.6]];e.slice(0,3).forEach((n,s)=>{let r=new qn(n);r.setWeapon(["smg","shotgun","sniper"][s]),r.root.position.set(t[s][0],.2,t[s][1]),r.root.rotation.y=t[s][0]<0?.35:-.35,r.root.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),this.scene.add(r.root),this.mates.push(r)})}drag(e){this.rotTarget+=e*.012,this.idleT=0}update(e){this.t+=e,this.idleT+=e,!this.dragging&&this.idleT>4&&(this.rotTarget+=e*.25),this.rotY+=(this.rotTarget-this.rotY)*Math.min(1,e*8);let t=this.char;if(t.root.rotation.y=this.rotY,this.emote?(this.emote.t+=e,this.emote.t>2.2&&(this.emote=null)):Math.random()<e*.12&&(this.emote={t:0,kind:Math.random()<.5?"wave":"look"}),t.victory=!1,t.update(e,{speed:0}),this.emote&&this.emote.kind==="wave"){let a=Math.sin(Math.min(1,this.emote.t/.3)*Math.PI/2)*(this.emote.t>1.8?Math.max(0,1-(this.emote.t-1.8)/.4):1);t.armL.rotation.set(-.2+a*2.9,0,-.3-Math.sin(this.t*12)*.35*a),t.gun&&(t.gun.visible=!0)}else if(this.emote&&this.emote.kind==="look")t.head.rotation.y=Math.sin(this.emote.t*2.5)*.6;else if(this.emote&&this.emote.kind==="spin"){let a=Math.min(1,this.emote.t/.8);t.root.rotation.y=this.rotY+(1-Math.cos(a*Math.PI))*Math.PI,t.root.position.y=.52+Math.sin(a*Math.PI)*.25,a>=1&&(t.root.position.y=.52)}for(let a of this.mates)a.update(e,{speed:0});for(let a of this.clouds)a.position.x+=a.userData.speed*e,a.position.x>45&&(a.position.x=-45);this.balloon.position.y=9+Math.sin(this.t*.8)*.5;let n=Math.sin(this.t*.25)*.3,s=this.focus==="center"?{p:[0,1.75,6.2],l:[0,1.15,0]}:this.focus==="left"?{p:[1.9,1.8,5.6],l:[1.9,1.25,0]}:{p:[n,2.7,8.8],l:[0,1.35,0]};this.camCur||(this.camCur={p:[...s.p],l:[...s.l]});let r=Math.min(1,e*5);for(let a=0;a<3;a++)this.camCur.p[a]+=(s.p[a]-this.camCur.p[a])*r,this.camCur.l[a]+=(s.l[a]-this.camCur.l[a])*r;this.camera.position.set(...this.camCur.p),this.camera.lookAt(...this.camCur.l)}resize(){this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix()}render(){this.renderer.render(this.scene,this.camera)}};yo();Zs();vo();var Br={fire:'<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="13" fill="none" stroke="currentColor" stroke-width="4"/><circle cx="24" cy="24" r="4" fill="currentColor"/><path d="M24 4v9M24 35v9M4 24h9M35 24h9" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>',aim:'<svg viewBox="0 0 48 48"><path d="M8 17V8h9M31 8h9v9M40 31v9h-9M17 40H8v-9" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="24" cy="24" r="4" fill="currentColor"/></svg>',reload:'<svg viewBox="0 0 48 48"><path d="M38 24a14 14 0 1 1-5-10.7" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/><path d="M35 5v10H25" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',jump:'<svg viewBox="0 0 48 48"><path d="M12 28l12-12 12 12M12 38l12-12 12 12" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',sprint:'<svg viewBox="0 0 48 48"><path d="M10 14l12 10-12 10M24 14l12 10-12 10" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',pause:'<svg viewBox="0 0 48 48"><rect x="13" y="11" width="7" height="26" rx="2" fill="currentColor"/><rect x="28" y="11" width="7" height="26" rx="2" fill="currentColor"/></svg>',map:'<svg viewBox="0 0 48 48"><path d="M6 12l12-5 12 5 12-5v29l-12 5-12-5-12 5z M18 7v29 M30 12v29" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"/></svg>',next:'<svg viewBox="0 0 48 48"><path d="M16 10l14 14-14 14" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>'},th=[{id:"fire",corner:"br",x:100,y:105,size:92,label:"Disparar"},{id:"aim",corner:"br",x:196,y:186,size:62,label:"Apuntar"},{id:"reload",corner:"br",x:104,y:218,size:54,label:"Recargar"},{id:"jump",corner:"br",x:38,y:192,size:54,label:"Saltar"},{id:"fireL",corner:"bl",x:58,y:236,size:58,label:"Disparar (izquierda)"},{id:"sprint",corner:"bl",x:214,y:222,size:50,label:"Correr"},{id:"pickup",corner:"br",x:300,y:262,size:56,label:"Recoger",pill:!0}],Mo=58,Js=class{constructor(e){this.game=e,this.mx=0,this.my=0,this.fire=!1,this.fireLatch=!1,this.ads=!1,this.jump=!1,this.sprintLock=!1,this.joySprint=!1,this.showMap=!1,this.ptr=new Map,this.root=document.createElement("div"),this.root.id="touchUI",this.root.innerHTML=this._html(),document.body.appendChild(this.root),document.body.classList.add("inMatch"),this.$=t=>this.root.querySelector("#t_"+t),this.applyLayout(),this._bind()}_html(){let e=t=>`<button id="t_${t.id}" class="tBtn ${t.pill?"pill":""}" aria-label="${dn(t.label)}">${t.pill?'<span class="tPickIc">\u270B</span><span id="t_pickTxt"></span>':Br[t.id==="fireL"?"fire":t.id]}</button>`;return`<div id="t_joyZone" class="tZone"></div><div id="t_lookZone" class="tZone"></div>
      <div id="t_joy" class="tJoy"><div class="tKnob"></div></div>
      ${th.map(e).join("")}
      <button id="t_pause" class="tBtn small" aria-label="${dn("Pausa")}">${Br.pause}</button>
      <button id="t_map" class="tBtn small" aria-label="${dn("Informaci\xF3n de partida")}">${Br.map}</button>
      <button id="t_next" class="tBtn small" aria-label="${dn("siguiente")}">${Br.next}</button>`}applyLayout(){let e=Q.touchBtnScale||1;this.root.style.setProperty("--tOp",String(Q.touchOpacity??.75)),this.root.style.setProperty("--tScale",String(e));let t=Q.touchPos||{};for(let n of th){let s=this.$(n.id);if(!s)continue;let r=n.size*e;s.style.width=n.pill?"auto":r+"px",s.style.height=r+"px",s.style.minWidth=r+"px",s.style.left=s.style.right=s.style.top=s.style.bottom="";let a=t[n.id];if(a)s.style.left=a.x*100+"%",s.style.top=a.y*100+"%",s.style.transform="translate(-50%,-50%)";else{let o=l=>`calc(${l*e-r/2}px + var(--safe${n.corner[1]==="l"?"L":"R"}, 0px))`;n.corner[1]==="r"?s.style.right=o(n.x):s.style.left=o(n.x),s.style.bottom=n.y*e-r/2+"px",s.style.transform=""}}this.$("fireL").classList.toggle("off",!Q.touchLeftFire),this._restJoy()}_restJoy(){let e=Q.touchBtnScale||1,t=this.$("joy");t.style.width=t.style.height=Mo*2*e+"px",t.style.left=`calc(${(130-Mo)*e}px + var(--safeL, 0px))`,t.style.top="",t.style.bottom=(130-Mo)*e+"px",t.classList.remove("active"),t.firstElementChild.style.transform=""}_bind(){let e={passive:!1};this.h={down:t=>this._down(t),move:t=>this._move(t),up:t=>this._up(t),gesture:t=>t.preventDefault()},this.root.addEventListener("pointerdown",this.h.down,e),window.addEventListener("pointermove",this.h.move,e),window.addEventListener("pointerup",this.h.up,e),window.addEventListener("pointercancel",this.h.up,e),document.addEventListener("gesturestart",this.h.gesture,e),this.hudTap=t=>{let n=this.game;if(n.paused||n.isDead())return;let s=t.currentTarget.id;s==="slot0"?n.action("slot",0):s==="slot1"?n.action("slot",1):s==="itemBand"?n.action("heal","bandage"):s==="itemKit"?n.action("heal","medkit"):s==="minimap"&&this.toggleMap(),t.preventDefault()},this.hudEls=["slot0","slot1","itemBand","itemKit","minimap"].map(t=>document.getElementById(t)).filter(Boolean);for(let t of this.hudEls)t.addEventListener("pointerdown",this.hudTap)}toggleMap(){this.showMap=!this.showMap,this.$("map").classList.toggle("on",this.showMap)}_down(e){if(e.pointerType==="mouse"&&e.button!==0)return;e.preventDefault();let t=this.game,n=e.target.closest(".tBtn, .tZone");if(!n)return;let s=n.id.slice(2);try{n.setPointerCapture?.(e.pointerId)}catch{}if(s==="pause"){t.togglePause(!0);return}if(s==="map"){this.toggleMap();return}if(s==="next"){t.cycleSpectate();return}if(t.paused)return;if(t.isDead()){s==="lookZone"&&t.cycleSpectate();return}let r={kind:s,x:e.clientX,y:e.clientY,x0:e.clientX,y0:e.clientY,t0:performance.now(),el:n};switch(this.ptr.set(e.pointerId,r),n.classList.add("pressed"),s){case"joyZone":{let a=Q.touchBtnScale||1,o=Mo*a,l=this.$("joy");l.style.left=e.clientX-o+"px",l.style.bottom=innerHeight-e.clientY-o+"px",l.classList.add("active"),r.cx=e.clientX,r.cy=e.clientY,r.r=o,this._joy(r);break}case"fire":case"fireL":this.fire=!0,this.fireLatch=!0;break;case"aim":Q.touchAdsToggle!==!1?(this.ads=!this.ads,n.classList.toggle("on",this.ads)):this.ads=!0;break;case"reload":t.action("reload");break;case"jump":this.jump=!0;break;case"sprint":this.sprintLock=!this.sprintLock,n.classList.toggle("on",this.sprintLock);break;case"pickup":t.action("pickup");break}}_move(e){let t=this.ptr.get(e.pointerId);if(!t)return;e.preventDefault();let n=e.clientX-t.x,s=e.clientY-t.y;if(t.x=e.clientX,t.y=e.clientY,t.kind==="joyZone"){this._joy(t);return}(t.kind==="lookZone"||t.kind==="fire"||t.kind==="fireL"||t.kind==="aim")&&this.look(n,s)}look(e,t){let n=this.game;if(n.paused)return;let s=.0052*(Q.touchSens||1)*(this.ads?.6:1);n.yawT+=e*s,n.pitchT=Math.max(n.pitchMin,Math.min(n.pitchMax,n.pitchT+t*s*.8*(Q.invertY?-1:1)))}_joy(e){let t=e.x-e.cx,n=e.y-e.cy,s=Math.hypot(t,n),r=e.r*.12,a=s>e.r?e.r/s:1;if(this.$("joy").firstElementChild.style.transform=`translate(${t*a}px, ${n*a}px)`,s<r){this.mx=0,this.my=0,this.joySprint=!1;return}let o=Math.min(1,(s-r)/(e.r-r));this.mx=t/s*o,this.my=-n/s*o,this.joySprint=Q.touchAutoSprint!==!1&&s>e.r*1.05&&this.my>.3,this.$("joy").classList.toggle("run",this.joySprint||this.sprintLock)}_up(e){let t=this.ptr.get(e.pointerId);if(t)switch(this.ptr.delete(e.pointerId),t.el.classList.remove("pressed"),t.kind){case"joyZone":this.mx=this.my=0,this.joySprint=!1,this._restJoy(),this.$("joy").classList.remove("run");break;case"fire":case"fireL":[...this.ptr.values()].some(n=>n.kind==="fire"||n.kind==="fireL")||(this.fire=!1);break;case"aim":Q.touchAdsToggle===!1&&(this.ads=!1);break;case"jump":this.jump=!1;break}}get sprint(){return this.sprintLock||this.joySprint}update(e){let t=this.game,n=t.isDead();this.root.classList.toggle("dead",n);let s=this.$("pickup"),r=e?e.replace(/<small>.*?<\/small>/,"").replace(/<[^>]+>/g,"").replace(/^\s*\S+\s+/,""):"";s.classList.toggle("show",!!e&&!n),this._pick!==r&&(this._pick=r,this.$("pickTxt").textContent=dn(r)),!t.me?.alive&&this.ads&&(this.ads=!1,this.$("aim").classList.remove("on"))}reset(){this.mx=this.my=0,this.fire=!1,this.fireLatch=!1,this.jump=!1,this.joySprint=!1;for(let e of this.ptr.values())e.el.classList.remove("pressed");this.ptr.clear(),this._restJoy()}dispose(){this.root.removeEventListener("pointerdown",this.h.down),window.removeEventListener("pointermove",this.h.move),window.removeEventListener("pointerup",this.h.up),window.removeEventListener("pointercancel",this.h.up),document.removeEventListener("gesturestart",this.h.gesture);for(let e of this.hudEls)e.removeEventListener("pointerdown",this.hudTap);this.root.remove(),document.body.classList.remove("inMatch")}};function rf(i){let e=document.createElement("div");e.id="touchEditor",e.innerHTML=`<div id="touchUI" class="editing">${th.map(o=>`<button id="t_${o.id}" class="tBtn ${o.pill?"pill show":""}" data-id="${o.id}">${o.pill?'<span class="tPickIc">\u270B</span><span>'+dn("Recoger")+"</span>":Br[o.id==="fireL"?"fire":o.id]}</button>`).join("")}
    <div class="tJoy" id="t_joy"><div class="tKnob"></div></div></div>
    <div class="teBar"><span>${dn("Arrastra los botones a donde te resulte m\xE1s c\xF3modo.")}</span>
    <button class="btn small alt" id="teReset">${dn("Restablecer")}</button><button class="btn small" id="teDone">${dn("Guardar")}</button></div>`,document.body.appendChild(e);let t={root:e.querySelector("#touchUI"),$:o=>e.querySelector("#t_"+o)},n=()=>Js.prototype.applyLayout.call(Object.assign(t,{_restJoy:Js.prototype._restJoy}));n();let s={...Q.touchPos||{}},r=null;e.addEventListener("pointerdown",o=>{let l=o.target.closest(".tBtn");if(l){o.preventDefault(),r={id:l.dataset.id,el:l,pid:o.pointerId},l.classList.add("pressed");try{l.setPointerCapture(o.pointerId)}catch{}}}),e.addEventListener("pointermove",o=>{if(!r||o.pointerId!==r.pid)return;let l=Math.max(.04,Math.min(.96,o.clientX/innerWidth)),c=Math.max(.06,Math.min(.96,o.clientY/innerHeight));s[r.id]={x:l,y:c},r.el.style.left=l*100+"%",r.el.style.top=c*100+"%",r.el.style.right=r.el.style.bottom="",r.el.style.transform="translate(-50%,-50%)"});let a=()=>{r&&r.el.classList.remove("pressed"),r=null};e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a),e.querySelector("#teReset").onclick=()=>{for(let o of Object.keys(s))delete s[o];Q.touchPos={},n()},e.querySelector("#teDone").onclick=()=>{Q.touchPos=s,hn(),e.remove(),i&&i()}}Ao();ai();function Hr(i){let e=i>>>0,t=()=>{e|=0,e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return{next:t,range:(n,s)=>n+(s-n)*t(),int:(n,s)=>Math.floor(n+(s-n+1)*t()),pick:n=>n[Math.floor(t()*n.length)],chance:n=>t()<n}}function yf(i){let e=Math.ceil((i.size+8)/8)+1,t=4,n=new Array(e*e);for(let a=0;a<n.length;a++)n[a]=[];let s=(a,o,l,c,h)=>{let d=Math.max(0,Math.floor((o+t)/8)),u=Math.max(0,Math.floor((l+t)/8)),f=Math.min(e-1,Math.floor((c+t)/8)),g=Math.min(e-1,Math.floor((h+t)/8));for(let y=u;y<=g;y++)for(let m=d;m<=f;m++)n[y*e+m].push(a)},r=0;for(let a of i.walls){let o={t:"box",x:a.x,y:a.y,w:a.w,h:a.h,id:r++,ref:a};s(o,a.x,a.y,a.x+a.w,a.y+a.h)}for(let a of i.circles){let o={t:"circle",x:a.x,y:a.y,r:a.r,id:r++,ref:a};s(o,a.x-a.r,a.y-a.r,a.x+a.r,a.y+a.r)}for(let a of i.crates){let o={t:"box",x:a.x,y:a.y,w:a.w,h:a.h,id:r++,ref:a,crate:a};s(o,a.x,a.y,a.x+a.w,a.y+a.h)}i._col={grid:n,n:e,off:t,stamp:0,marks:new Int32Array(r+1)}}function xf(i,e,t,n,s,r=[]){let a=i._col;r.length=0,a.stamp++;let o=Math.max(0,Math.floor((e+a.off)/8)),l=Math.max(0,Math.floor((t+a.off)/8)),c=Math.min(a.n-1,Math.floor((n+a.off)/8)),h=Math.min(a.n-1,Math.floor((s+a.off)/8));for(let d=l;d<=h;d++)for(let u=o;u<=c;u++)for(let f of a.grid[d*a.n+u])a.marks[f.id]!==a.stamp&&(a.marks[f.id]=a.stamp,!(f.crate&&!f.crate.alive)&&r.push(f));return r}var _f=[];function X_(i,e,t){let n=!1;for(let s=0;s<3;s++){let r=xf(i,e.x-t,e.y-t,e.x+t,e.y+t,_f),a=!1;for(let o of r)if(o.t==="box"){let l=Math.max(o.x,Math.min(e.x,o.x+o.w)),c=Math.max(o.y,Math.min(e.y,o.y+o.h)),h=e.x-l,d=e.y-c,u=h*h+d*d;if(u<t*t){if(u>1e-9){let f=Math.sqrt(u);e.x=l+h/f*t,e.y=c+d/f*t}else{let f=e.x-o.x,g=o.x+o.w-e.x,y=e.y-o.y,m=o.y+o.h-e.y,p=Math.min(f,g,y,m);p===f?e.x=o.x-t:p===g?e.x=o.x+o.w+t:p===y?e.y=o.y-t:e.y=o.y+o.h+t}n=a=!0}}else{let l=e.x-o.x,c=e.y-o.y,h=o.r+t,d=l*l+c*c;if(d<h*h){let u=Math.sqrt(d)||1e-4;e.x=o.x+l/u*h,e.y=o.y+c/u*h,n=a=!0}}if(!a)break}return n}function vf(i,e,t,n,s){let r=Math.hypot(t,n),a=Math.max(1,Math.ceil(r/(s*.8))),o=!1;for(let l=0;l<a;l++)e.x+=t/a,e.y+=n/a,X_(i,e,s)&&(o=!0);return o}function Mf(i,e,t,n){let s=xf(i,e-n,t-n,e+n,t+n,_f);for(let r of s)if(r.t==="box"){let a=Math.max(r.x,Math.min(e,r.x+r.w)),o=Math.max(r.y,Math.min(t,r.y+r.h));if((e-a)**2+(t-o)**2<n*n)return!0}else if((e-r.x)**2+(t-r.y)**2<(r.r+n)**2)return!0;return!1}function $_(i,e,t,n,s){let r=0,a=1;if(Math.abs(t)<1e-9){if(i<s.x||i>s.x+s.w)return 1/0}else{let o=(s.x-i)/t,l=(s.x+s.w-i)/t;if(o>l&&([o,l]=[l,o]),r=Math.max(r,o),a=Math.min(a,l),r>a)return 1/0}if(Math.abs(n)<1e-9){if(e<s.y||e>s.y+s.h)return 1/0}else{let o=(s.y-e)/n,l=(s.y+s.h-e)/n;if(o>l&&([o,l]=[l,o]),r=Math.max(r,o),a=Math.min(a,l),r>a)return 1/0}return r}function Y_(i,e,t,n,s,r,a){let o=i-s,l=e-r,c=t*t+n*n;if(c<1e-12)return 1/0;let h=2*(o*t+l*n),d=o*o+l*l-a*a;if(d<=0)return 0;let u=h*h-4*c*d;if(u<0)return 1/0;let f=Math.sqrt(u),g=(-h-f)/(2*c);return g>=0&&g<=1?g:1/0}function Ks(i,e,t,n,s,r=!1){let a=i._col,o=n-e,l=s-t;a.stamp++;let c=1/0,h=null,d=Math.floor((e+a.off)/8),u=Math.floor((t+a.off)/8),f=Math.floor((n+a.off)/8),g=Math.floor((s+a.off)/8),y=o>0?1:-1,m=l>0?1:-1,p=o!==0?Math.abs(8/o):1/0,v=l!==0?Math.abs(8/l):1/0,x=e+a.off,S=t+a.off,R=o!==0?(o>0?(d+1)*8-x:x-d*8)/Math.abs(o):1/0,T=l!==0?(l>0?(u+1)*8-S:S-u*8)/Math.abs(l):1/0,b=0;for(;b++<400;){if(d>=0&&u>=0&&d<a.n&&u<a.n)for(let _ of a.grid[u*a.n+d]){if(a.marks[_.id]===a.stamp||(a.marks[_.id]=a.stamp,_.crate&&(!_.crate.alive||r)))continue;let M=_.t==="box"?$_(e,t,o,l,_):Y_(e,t,o,l,_.x,_.y,_.r);M<c&&(c=M,h=_)}let C=Math.min(R,T);if(c<=C||C>1||d===f&&u===g)break;R<T?(R+=p,d+=y):(T+=v,u+=m)}return c<=1?{t:c,obj:h}:null}ns();var Z_=20261124,J_=["#f6e7c8","#ffd6a5","#cde7f0","#f7c6c7","#e2f0cb","#fff1b5","#d9d2f5"],j_=["#d9534f","#3f7fbf","#e07b39","#6b8e23","#8e5b9e","#c0392b","#2c8c8c"];function Pf(i=Z_){let e=Hr(i),t=bf,n={size:t,seed:i,walls:[],circles:[],buildings:[],roads:[],crates:[],lootSpots:[],bushes:[],areas:[],pois:[],props:[],fences:[]},s=[],r=(b,C,_,M,D=0)=>{for(let O of s)if(b-D<O.x+O.w&&b+_+D>O.x&&C-D<O.y+O.h&&C+M+D>O.y)return!0;return!1},a=(b,C,_,M)=>s.push({x:b,y:C,w:_,h:M}),o=(b,C,_=1)=>n.roads.some(M=>b>M.x-_&&b<M.x+M.w+_&&C>M.y-_&&C<M.y+M.h+_),l=(b,C,_,M)=>{n.roads.push({x:b,y:C,w:_,h:M})};l(8,156,t-16,8),l(156,8,8,t-16),l(20,74,126,6),l(20,110,126,6),l(74,20,6,136),l(110,20,6,136),l(164,236,140,6),l(232,164,6,140),l(100,164,6,80);for(let b of n.roads)a(b.x,b.y,b.w,b.h);n.areas.push({x:16,y:16,w:134,h:134,color:"#cfe3a8",name:"town"}),n.areas.push({x:186,y:186,w:122,h:122,color:"#b9bec4",name:"industrial"}),n.areas.push({x:112,y:214,w:74,h:92,color:"#c9c2b0",name:"warehouses"}),n.areas.push({x:16,y:186,w:82,h:120,color:"#d9c48f",name:"farm"}),n.areas.push({x:186,y:14,w:122,h:136,color:"#7fbf6a",name:"forest"}),n.areas.push({x:140,y:140,w:40,h:40,color:"#d0d0c8",name:"station"});function c(b,C,_,M,D={}){let O=D.t??.5,K=D.height??3.4,I=D.doors??["s"],F=D.doorWidth??2.6,$=D.wallColor??e.pick(J_),J=D.roofColor??e.pick(j_),Z={x:b,y:C,w:_,h:M,height:K,wallColor:$,roofColor:J,kind:D.kind??"house",roof:D.roof??"gable",doors:I,windows:D.windows??!0};n.buildings.push(Z);let Y=(ce,X,j,le)=>n.walls.push({x:ce,y:X,w:j,h:le,height:K,color:$,kind:"wall",building:n.buildings.length-1}),ee=ce=>{let X=I.includes(ce);if(ce==="n"||ce==="s"){let j=ce==="n"?C:C+M-O;if(!X)Y(b,j,_,O);else{let le=b+_/2;Y(b,j,le-F/2-b,O),Y(le+F/2,j,b+_-(le+F/2),O)}}else{let j=ce==="w"?b:b+_-O;if(!X)Y(j,C+O,O,M-2*O);else{let le=C+M/2;Y(j,C+O,O,le-F/2-(C+O)),Y(j,le+F/2,O,C+M-O-(le+F/2))}}};["n","s","w","e"].forEach(ee),a(b-1,C-1,_+2,M+2);let se=D.loot??Math.max(1,Math.floor(_*M/60));for(let ce=0;ce<se;ce++)n.lootSpots.push({x:e.range(b+1.6,b+_-1.6),y:e.range(C+1.6,C+M-1.6),tier:D.tier??1});return Z}n.pois.push({name:"Villa Colores",x:80,y:80});let h=[24,82,118],d=[24,82,118],u=[[24,24],[44,24],[82,24],[118,24],[24,44],[44,44],[82,44],[118,44],[24,82],[44,82],[118,82],[24,118],[44,118],[82,118],[118,118],[82,82]];for(let[b,C]of u){if(b===82&&C===82)continue;let _=e.int(12,15),M=e.int(10,13),D=[e.pick(["s","n"]),e.pick(["e","w"])];r(b,C,_,M,.5)||c(b,C,_,M,{doors:D,loot:2})}n.circles.push({x:92,y:92,r:2.6,height:1.2,kind:"fountain"}),a(88,88,8,8),c(82,98,22,10,{doors:["n","s"],height:5.2,kind:"hall",wallColor:"#f3e3c3",roofColor:"#b03a2e",loot:3,tier:2}),n.pois.push({name:"Bosque Pinar",x:246,y:80});let f=[[205,40],[262,30],[240,110],[282,92]];for(let[b,C]of f)c(b,C,10,8,{doors:[e.pick(["s","w","e"])],wallColor:"#a9744f",roofColor:"#5b3a24",kind:"cabin",loot:2});c(222,72,7,7,{doors:["s"],height:7.5,wallColor:"#8a6240",roofColor:"#4a2f1d",kind:"tower",loot:2,tier:3,roof:"flat"}),n.pois.push({name:"Pol\xEDgono \xD3xido",x:256,y:270}),c(246,250,34,22,{doors:["n","w","s"],height:7,wallColor:"#9aa5ad",roofColor:"#56616b",kind:"factory",roof:"flat",loot:5,tier:2,doorWidth:3.4});let g=["#d64545","#2f7ed8","#e6a23c","#3aa76d","#8e44ad","#16a085"];for(let b=0;b<16;b++)for(let C=0;C<30;C++){let _=e.chance(.5),M=_?2.6:6.5,D=_?6.5:2.6,O=e.range(192,300-M),K=e.range(192,300-D);if(r(O,K,M,D,3)||o(O+M/2,K+D/2,4))continue;let I=e.chance(.35);n.walls.push({x:O,y:K,w:M,h:D,height:I?5.2:2.6,color:e.pick(g),kind:"container"}),a(O,K,M,D),e.chance(.5)&&n.lootSpots.push({x:O+M/2+(_?2.2:0),y:K+D/2+(_?0:2.2),tier:2});break}let y=[[205,215],[215,290],[290,215]];for(let[b,C]of y)n.circles.push({x:b,y:C,r:4,height:7,kind:"tank"}),a(b-4.5,C-4.5,9,9);n.pois.push({name:"Los Almacenes",x:148,y:262}),c(116,220,28,16,{doors:["e","w","n"],height:6,wallColor:"#c8b28a",roofColor:"#7d6a4e",kind:"warehouse",roof:"flat",loot:5,tier:2,doorWidth:3.6}),c(152,248,28,16,{doors:["e","w","s"],height:6,wallColor:"#b7c4c9",roofColor:"#5f7680",kind:"warehouse",roof:"flat",loot:5,tier:2,doorWidth:3.6}),c(118,278,24,14,{doors:["n","e"],height:6,wallColor:"#d8c3a5",roofColor:"#8c6f4d",kind:"warehouse",roof:"flat",loot:4,tier:2,doorWidth:3.6});for(let b=0;b<10;b++)for(let C=0;C<30;C++){let _=e.range(114,182),M=e.range(214,300);if(!(r(_,M,2.4,2.4,2)||o(_,M,2))){n.walls.push({x:_,y:M,w:2.4,h:2.4,height:1.3,color:"#b98b52",kind:"pallet"}),a(_,M,2.4,2.4);break}}n.pois.push({name:"Granja Girasol",x:56,y:246}),c(28,196,18,14,{doors:["s","e"],height:5.5,wallColor:"#c0392b",roofColor:"#7b241c",kind:"barn",loot:3,tier:1,doorWidth:3.2}),c(64,266,9,8,{doors:["n"],wallColor:"#f0e0c0",roofColor:"#6d4c41",kind:"shed",loot:1}),c(30,278,9,8,{doors:["e"],wallColor:"#e8d4b0",roofColor:"#6d4c41",kind:"shed",loot:1}),c(70,206,12,10,{doors:["w"],loot:2});let m=(b,C,_,M,D=[])=>{let O=C===M,K=O?_-b:M-C,I=0,F=[],$=D.slice().sort((J,Z)=>J-Z);for(let J of $)F.push([I,J-1.6]),I=J+1.6;F.push([I,K]);for(let[J,Z]of F){if(Z-J<.5)continue;let Y=O?{x:b+J,y:C-.15,w:Z-J,h:.3}:{x:b-.15,y:C+J,w:.3,h:Z-J};n.walls.push({...Y,height:1.1,color:"#e9dcc0",kind:"fence"})}};m(22,226,92,226,[20,52]),m(22,262,58,262,[18]),m(22,226,22,262,[18]),m(92,226,92,300,[14,50]);for(let b=0;b<9;b++){let C=e.range(28,88),_=e.range(230,258);r(C-1.4,_-1.4,2.8,2.8,1.5)||(n.circles.push({x:C,y:_,r:1.3,height:1.6,kind:"hay"}),a(C-1.4,_-1.4,2.8,2.8))}n.pois.push({name:"Gasolinera Cruce",x:172,y:172}),c(168,168,12,9,{doors:["n","w"],wallColor:"#ffffff",roofColor:"#e74c3c",kind:"shop",roof:"flat",loot:3,tier:2});for(let[b,C]of[[146,168],[146,176],[156,168]]);n.props.push({kind:"canopy",x:166,y:142,w:14,h:10});for(let[b,C]of[[167,143],[179,143],[167,151],[179,151]])n.circles.push({x:b,y:C,r:.35,height:4,kind:"pillar"});a(166,142,14,10),n.walls.push({x:171,y:145.5,w:1.2,h:2,height:1.6,color:"#e74c3c",kind:"pump"}),n.walls.push({x:175,y:145.5,w:1.2,h:2,height:1.6,color:"#e74c3c",kind:"pump"}),n.pois.push({name:"Colina Molino",x:206,y:186});let p=[[196,168,10,8],[130,190,9,8],[176,120,10,8],[42,166,9,8],[262,172,10,8],[172,200,8,8],[120,168,8,7]];for(let[b,C,_,M]of p)r(b,C,_,M,1)||c(b,C,_,M,{doors:[e.pick(["n","s","e","w"])],loot:2,kind:"hut"});let v=[[140,60],[60,150],[290,150],[150,292],[210,140],[130,130]];for(let[b,C]of v)r(b-3,C-3,10,10,1)||(n.walls.push({x:b,y:C,w:6,h:.8,height:1.8,color:"#a3a3a3",kind:"ruin"}),n.walls.push({x:b,y:C+.8,w:.8,h:4,height:1.8,color:"#a3a3a3",kind:"ruin"}),a(b-.5,C-.5,7,6),n.lootSpots.push({x:b+3,y:C+3,tier:1}));let x=0,S=(b,C)=>r(b-.2,C-.2,2,2,.8)||o(b+.8,C+.8,.5)?!1:(n.crates.push({id:x++,x:b,y:C,w:1.6,h:1.6,hp:70,alive:!0}),a(b,C,1.6,1.6),!0);for(let b of n.buildings)if(e.chance(.55))for(let C=0;C<10;C++){let _=e.int(0,3),M=_===0?b.x-2.6:_===1?b.x+b.w+1:e.range(b.x,b.x+b.w-1.6),D=_===2?b.y-2.6:_===3?b.y+b.h+1:e.range(b.y,b.y+b.h-1.6);if(S(M,D))break}for(let b=0;b<40;b++)for(let C=0;C<20&&!S(e.range(14,t-16),e.range(14,t-16));C++);let R=(b,C,_)=>{if(r(b-1,C-1,2,2,.8)||o(b,C,2))return!1;let M=e.range(.85,1.35);return n.circles.push({x:b,y:C,r:.55*M,height:6,kind:_,scale:M,crown:2.2*M}),a(b-.8,C-.8,1.6,1.6),!0};for(let b=0;b<230;b++)R(e.range(188,306),e.range(16,148),"pine");for(let b=0;b<160;b++)R(e.range(10,t-10),e.range(10,t-10),e.chance(.5)?"tree":"pine");for(let b=0;b<70;b++){let C=e.range(12,t-12),_=e.range(12,t-12),M=e.range(.9,2.1);r(C-M,_-M,2*M,2*M,1.2)||o(C,_,M+1)||(n.circles.push({x:C,y:_,r:M,height:M*1.2,kind:"rock"}),a(C-M,_-M,2*M,2*M))}for(let b=0;b<220;b++){let C=e.range(10,t-10),_=e.range(10,t-10);r(C-.8,_-.8,1.6,1.6,.3)||o(C,_,1)||n.bushes.push({x:C,y:_,s:e.range(.7,1.4)})}for(let b=0;b<45;b++)for(let C=0;C<20;C++){let _=e.range(14,t-14),M=e.range(14,t-14);if(!r(_-.6,M-.6,1.2,1.2,.5)){n.lootSpots.push({x:_,y:M,tier:0});break}}let T=3;return n.walls.push({x:-T,y:-T,w:t+2*T,h:T,height:3,kind:"boundary"}),n.walls.push({x:-T,y:t,w:t+2*T,h:T,height:3,kind:"boundary"}),n.walls.push({x:-T,y:0,w:T,h:t,height:3,kind:"boundary"}),n.walls.push({x:t,y:0,w:T,h:t,height:3,kind:"boundary"}),yf(n),n.lootSpots=n.lootSpots.filter(b=>!Mf(n,b.x,b.y,.5)),n}function Lf(i,e,t){for(let n=0;n<i.buildings.length;n++){let s=i.buildings[n];if(e>s.x&&e<s.x+s.w&&t>s.y&&t<s.y+s.h)return n}return-1}ns();function ah(i,e,t,n,s={}){let r=Number(e.mx)||0,a=Number(e.my)||0,o=Math.hypot(r,a);o>1&&(r/=o,a/=o);let l=e.b|0,c=wf;s.healing?c=Af:l&Pt.ADS?c=Tf:l&Pt.SPRINT&&(c=Ef),o>.01&&vf(t,i,r*c*n,a*c*n,Sf);let h=(l&Pt.JUMP)!==0;return h&&!i.jh&&i.z<=.001&&(i.vz=Rf),i.jh=h,(i.z>0||i.vz>0)&&(i.vz-=Cf*n,i.z+=i.vz*n,i.z<=0&&(i.z=0,i.vz=0)),o>.01}fo();ns();Xc();ai();po();var lh=class{constructor(){this.pos=[],this.nor=[],this.col=[],this.m=new yt,this.q=new Hn,this.c=new Le}add(e,t,n,s,r,a=0,o=1,l=1,c=1,h=0,d=0){let u=e.index?e.toNonIndexed():e.clone();this.q.setFromEuler(new ks(h,a,d)),this.m.compose(new L(t,n,s),this.q,new L(o,l,c)),u.applyMatrix4(this.m);let f=u.attributes.position.array,g=u.attributes.normal.array;this.c.set(r);for(let y=0;y<f.length;y+=3)this.pos.push(f[y],f[y+1],f[y+2]),this.nor.push(g[y],g[y+1],g[y+2]),this.col.push(this.c.r,this.c.g,this.c.b);u.dispose()}box(e,t,n,s,r,a,o,l=0){this.add(ss,e,t,n,o,l,s,r,a)}build(e){let t=new Yt;return t.setAttribute("position",new Qe(this.pos,3)),t.setAttribute("normal",new Qe(this.nor,3)),t.setAttribute("color",new Qe(this.col,3)),t.computeBoundingSphere(),new Ee(t,e)}},ss=new ft(1,1,1),$n=new At(1,1,1,14);function is(i,e){let t=new Le(i);return t.multiplyScalar(e),"#"+t.getHexString()}var Ro={uFocus:{value:new L},uCam:{value:new L}};function oh(i){return i.onBeforeCompile=e=>{e.uniforms.uFocus=Ro.uFocus,e.uniforms.uCam=Ro.uCam,e.vertexShader=`varying vec3 vCutPos;
`+e.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
      vec4 cutWp = vec4(transformed, 1.0);
      #ifdef USE_INSTANCING
        cutWp = instanceMatrix * cutWp;
      #endif
      vCutPos = (modelMatrix * cutWp).xyz;`),e.fragmentShader=`uniform vec3 uFocus; uniform vec3 uCam; varying vec3 vCutPos;
`+e.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
      {
        vec3 seg = uFocus - uCam; float L = length(seg); vec3 dir = seg / max(L, 0.001);
        float t = dot(vCutPos - uCam, dir);
        if (vCutPos.y > 1.75 && t > 0.0 && t < L - 0.9) {
          float d = length(vCutPos - (uCam + dir * t));
          float R = 0.6 + 2.1 * (t / L);
          if (d < R) discard;
        }
      }`)},i.customProgramCacheKey=()=>"cutout",i}var Co=class{constructor(e,t,n){this.scene=e,this.map=t,this.q=n,this.group=new st,e.add(this.group),this.roofs=[],this.crateMeshes=new Map,this.lootMeshes=new Map,this.time=0,this._lights(),this._ground(),this._static(),this._trees(),this._crates(),this._zone()}_lights(){let e=new Ti("#dff3ff","#7da35a",1.15);this.group.add(e);let t=new Ai("#fff3d6",1.75);if(t.position.set(40,80,25),t.castShadow=this.q.shadows,this.q.shadows){t.shadow.mapSize.set(this.q.shadowSize,this.q.shadowSize);let n=38;Object.assign(t.shadow.camera,{left:-n,right:n,top:n,bottom:-n,near:1,far:220}),t.shadow.bias=-8e-4,t.shadow.normalBias=.04}this.sun=t,this.group.add(t),this.group.add(t.target),this.scene.fog=new Os("#bfe6ff",this.q.fog*.55,this.q.fog),this.scene.background=new Le("#9fd8ff")}_ground(){let e=this.map.size,t=new Ee(new $i(2400,2400),new qt({color:"#3fb6e8"}));t.rotation.x=-Math.PI/2,t.position.set(e/2,-.6,e/2),this.group.add(t),this.water=t;let n=new Ee(new ft(e+44,1,e+44),nt("#f0d9a0"));n.position.set(e/2,-.52,e/2),n.receiveShadow=!0,this.group.add(n);let s=new Ee(new ft(e+10,1,e+10),nt("#8fd16a"));s.position.set(e/2,-.5,e/2),s.receiveShadow=!0,this.group.add(s);let r=new Ee(new Ji((e+44)*.7,(e+44)*.72,4,1),new It({color:"#ffffff",transparent:!0,opacity:.5}));r.rotation.x=-Math.PI/2,r.rotation.z=Math.PI/4,r.position.set(e/2,-.55,e/2),this.group.add(r)}_static(){let e=this.map,t=new lh,n=Hr(777);for(let o of e.areas)t.box(o.x+o.w/2,.005,o.y+o.h/2,o.w,.02,o.h,o.color);for(let o of e.roads){t.box(o.x+o.w/2,.03,o.y+o.h/2,o.w,.04,o.h,"#5d636b");let l=o.w>o.h,c=l?o.w:o.h;for(let h=2;h<c-2;h+=6)l?t.box(o.x+h+1.5,.06,o.y+o.h/2,3,.02,.25,"#f5f1d6"):t.box(o.x+o.w/2,.06,o.y+h+1.5,.25,.02,3,"#f5f1d6");l?(t.box(o.x+o.w/2,.08,o.y-.15,o.w,.14,.3,"#d8d8d0"),t.box(o.x+o.w/2,.08,o.y+o.h+.15,o.w,.14,.3,"#d8d8d0")):(t.box(o.x-.15,.08,o.y+o.h/2,.3,.14,o.h,"#d8d8d0"),t.box(o.x+o.w+.15,.08,o.y+o.h/2,.3,.14,o.h,"#d8d8d0"))}for(let o of e.buildings){let l=o.kind==="warehouse"||o.kind==="factory"?"#a7a39a":o.kind==="barn"||o.kind==="cabin"?"#b5835a":"#d9b48a";t.box(o.x+o.w/2,.06,o.y+o.h/2,o.w-.1,.08,o.h-.1,l)}for(let o of e.walls){if(o.kind==="boundary")continue;let l=o.x+o.w/2,c=o.y+o.h/2,h=o.color||"#cccccc";if(o.kind==="fence"){t.box(l,.55,c,o.w,.12,o.h,h),t.box(l,.95,c,o.w,.12,o.h,h);let d=o.w>o.h,u=d?o.w:o.h;for(let f=0;f<=u;f+=2)t.box(d?o.x+f:l,.6,d?c:o.y+f,.18,1.2,.18,is(h,.85));continue}if(t.box(l,o.height/2,c,o.w,o.height,o.h,h),o.kind==="wall"){t.box(l,.25,c,o.w+.06,.5,o.h+.06,is(h,.78));let d=o.w>o.h,u=d?o.w:o.h;if(u>3.5&&o.height<6){let f=Math.floor(u/4.5);for(let g=0;g<f;g++){let y=(g+.5)*(u/f),m=d?o.x+y:l,p=d?c:o.y+y;t.box(m,1.8,p,d?1.3:o.w+.08,1,d?o.h+.08:1.3,"#ffffff"),t.box(m,1.8,p,d?1.05:o.w+.1,.8,d?o.h+.1:1.05,"#6cc3ff")}}else u>4&&o.height>=6&&t.box(l,o.height-.5,c,o.w+.08,.35,o.h+.08,is(h,.7))}else if(o.kind==="container"){let d=o.w>o.h,u=d?o.w:o.h;for(let f=.4;f<u;f+=.6)t.box(d?o.x+f:l,o.height/2,d?c:o.y+f,d?.12:o.w+.08,o.height-.1,d?o.h+.08:.12,is(h,.82));o.height>3&&t.box(l,2.6,c,o.w+.1,.1,o.h+.1,is(h,.6))}else o.kind==="pallet"?(t.box(l,.62,c,o.w+.05,.08,o.h+.05,"#d9a866"),t.box(l,1.3,c,o.w*.8,.12,o.h*.8,"#4d9be6")):o.kind==="pump"&&t.box(l,1.65,c,o.w+.1,.15,o.h+.1,"#ffffff")}for(let o of e.circles)switch(o.kind){case"tank":t.add($n,o.x,o.height/2,o.y,"#e8ecef",0,o.r,o.height,o.r),t.add($n,o.x,o.height*.65,o.y,"#e07b39",0,o.r+.05,.6,o.r+.05),t.add($n,o.x,o.height+.2,o.y,"#b9c0c5",0,o.r*.9,.4,o.r*.9);break;case"fountain":t.add($n,o.x,.5,o.y,"#c9c3b5",0,o.r,1,o.r),t.add($n,o.x,1.02,o.y,"#5cc8f0",0,o.r-.3,.06,o.r-.3),t.add($n,o.x,1.6,o.y,"#c9c3b5",0,.35,1.6,.35),t.add($n,o.x,2.3,o.y,"#5cc8f0",0,.8,.12,.8);break;case"hay":t.add($n,o.x,o.r,o.y,"#f2cf5b",n.range(0,3),o.r,o.r*1.6,o.r,Math.PI/2);break;case"pillar":t.add($n,o.x,o.height/2,o.y,"#dddddd",0,o.r,o.height,o.r);break}for(let o of e.props)o.kind==="canopy"&&(t.box(o.x+o.w/2,4.1,o.y+o.h/2,o.w+1,.4,o.h+1,"#ffffff"),t.box(o.x+o.w/2,3.85,o.y+o.h/2,o.w+1.05,.15,o.h+1.05,"#e74c3c"));let s=e.size;for(let o=0;o<=s;o+=4)for(let[l,c]of[[o,-.8],[o,s+.8],[-.8,o],[s+.8,o]])t.box(l,.7,c,.3,1.4,.3,"#8b5a2b");for(let[o,l,c,h]of[[s/2,-.8,s,.08],[s/2,s+.8,s,.08],[-.8,s/2,.08,s],[s+.8,s/2,.08,s]])t.box(o,1.1,l,c,.08,h,"#f2e6c9");let r=oh(new qt({vertexColors:!0})),a=t.build(r);a.castShadow=this.q.shadows,a.receiveShadow=!0,this.group.add(a),this.map.buildings.forEach((o,l)=>{let c=new st,h=o.roofColor,d=.45;if(o.roof==="flat"){let u=new Ee(ss,nt(h));u.scale.set(o.w+d,.35,o.h+d),u.position.set(0,.17,0),c.add(u);let f=new Ee(ss,nt(is(h,.75)));if(f.scale.set(o.w+d+.1,.12,o.h+d+.1),f.position.y=.38,c.add(f),o.kind==="factory"||o.kind==="warehouse")for(let g=0;g<3;g++){let y=new Ee(ss,nt("#cfd6db"));y.scale.set(1.4,.6,1.4),y.position.set((g-1)*o.w*.28,.6,0),c.add(y)}}else{let u=o.w>=o.h,f=(u?o.w:o.h)+d,g=(u?o.h:o.w)+d,y=Math.min(2.2,g*.32),m=Math.hypot(g/2,y),p=Math.atan2(y,g/2);for(let S of[-1,1]){let R=new Ee(ss,nt(S<0?h:is(h,.85)));R.scale.set(u?f:m,.22,u?m:f),u?(R.rotation.x=S*p,R.position.set(0,y/2,-S*g/4)):(R.rotation.z=S*p,R.position.set(-S*g/4,y/2,0)),c.add(R)}let v=new Rr;v.moveTo(-g/2+d/2,0),v.lineTo(g/2-d/2,0),v.lineTo(0,y-.1),v.lineTo(-g/2+d/2,0);let x=new Qa(v);for(let S of[-1,1]){let R=new Ee(x,new qt({color:"#"+new Le(this.map.buildings[l].wallColor).getHexString(),side:Vt}));u?(R.rotation.y=Math.PI/2,R.position.set(S*(o.w/2-.25),0,0)):R.position.set(0,0,S*(o.h/2-.25)),c.add(R)}if(o.kind==="house"&&n.chance(.6)){let S=new Ee(ss,nt("#9c6b5a"));S.scale.set(.7,1.6,.7),S.position.set(u?f*.25:g*.15,y*.7,u?g*.15:f*.25),c.add(S)}}c.position.set(o.x+o.w/2,o.height,o.y+o.h/2),c.traverse(u=>{u.isMesh&&(u.castShadow=this.q.shadows,u.receiveShadow=!1,u.material=u.material.clone(),u.material.transparent=!1)}),c.userData.alpha=1,this.group.add(c),this.roofs.push(c)})}_trees(){let e=this.map,t=e.circles.filter(p=>p.kind==="pine"||p.kind==="tree"),n=e.circles.filter(p=>p.kind==="rock"),s=new kt,r=new Le,a=Hr(99),o=new At(.22,.32,1,7);o.translate(0,.5,0);let l=new ri(1,1,8);l.translate(0,.5,0);let c=new Ir(1,1),h=t.filter(p=>p.kind==="pine"),d=t.filter(p=>p.kind==="tree"),u=new kn(o,new qt({color:"#8b5a2b"}),t.length);t.forEach((p,v)=>{let x=p.scale||1;s.position.set(p.x,0,p.y),s.rotation.set(0,0,0),s.scale.set(x,p.kind==="pine"?1.6*x:2*x,x),s.updateMatrix(),u.setMatrixAt(v,s.matrix)});let f=new kn(l,oh(new qt({color:"#ffffff"})),h.length*2);h.forEach((p,v)=>{let x=p.scale||1;r.setHSL(.31+a.range(-.03,.03),.55,.32+a.range(-.05,.05));for(let S=0;S<2;S++){s.position.set(p.x,(1.3+S*1.5)*x,p.y),s.rotation.set(0,a.range(0,3),0);let R=(2-S*.6)*x;s.scale.set(R,(2.6-S*.4)*x,R),s.updateMatrix(),f.setMatrixAt(v*2+S,s.matrix),f.setColorAt(v*2+S,r)}});let g=new kn(c,oh(new qt({color:"#ffffff",flatShading:!0})),d.length);d.forEach((p,v)=>{let x=p.scale||1;r.setHSL(.26+a.range(-.04,.05),.55,.42+a.range(-.06,.05)),s.position.set(p.x,3*x,p.y),s.rotation.set(a.range(0,3),a.range(0,3),0),s.scale.set(1.9*x,1.7*x,1.9*x),s.updateMatrix(),g.setMatrixAt(v,s.matrix),g.setColorAt(v,r)});let y=new zs(1,0),m=new kn(y,new qt({color:"#ffffff",flatShading:!0}),Math.max(1,n.length));n.forEach((p,v)=>{r.setHSL(.08,.06,.55+a.range(-.08,.08)),s.position.set(p.x,p.r*.35,p.y),s.rotation.set(a.range(0,1),a.range(0,3),a.range(0,1)),s.scale.set(p.r*1.05,p.r*.85,p.r*1.05),s.updateMatrix(),m.setMatrixAt(v,s.matrix),m.setColorAt(v,r)});for(let p of[u,f,g,m])p.castShadow=this.q.shadows,p.receiveShadow=!0,this.group.add(p);if(this.canopies=[f,g],this.q.bushes){let p=e.bushes,v=new kn(new Ir(1,1),new qt({color:"#ffffff",flatShading:!0}),Math.max(1,p.length));p.forEach((R,T)=>{r.setHSL(.28+a.range(-.04,.04),.6,.38+a.range(-.05,.06)),s.position.set(R.x,.35*R.s,R.y),s.rotation.set(0,a.range(0,3),0),s.scale.set(R.s,R.s*.75,R.s),s.updateMatrix(),v.setMatrixAt(T,s.matrix),v.setColorAt(T,r)}),v.receiveShadow=!0,this.group.add(v);let x=new kn(new Zt(.12,5,4),new It({color:"#ffffff"}),260),S=["#ff6b9a","#ffd23f","#ffffff","#c77dff","#ff8f3f"];for(let R=0;R<260;R++)s.position.set(a.range(10,e.size-10),.12,a.range(10,e.size-10)),s.scale.setScalar(1),s.rotation.set(0,0,0),s.updateMatrix(),x.setMatrixAt(R,s.matrix),x.setColorAt(R,r.set(S[R%S.length]));this.group.add(x)}}_crates(){let e=Fu(),t=new qt({map:e}),n=new ft(1.6,1.6,1.6);for(let s of this.map.crates){let r=new Ee(n,t);r.position.set(s.x+s.w/2,.8,s.y+s.h/2),r.castShadow=this.q.shadows,r.receiveShadow=!0,r.userData.wobble=0,this.group.add(r),this.crateMeshes.set(s.id,r)}}_zone(){let e=new Nn({transparent:!0,depthWrite:!1,side:Vt,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec2 vUv; uniform float uTime;
        void main(){
          float stripes = smoothstep(0.4, 0.6, fract(vUv.x * 160.0 + vUv.y * 6.0 - uTime * 0.6));
          float fade = (1.0 - vUv.y);
          vec3 col = mix(vec3(0.42,0.25,0.95), vec3(0.85,0.45,1.0), stripes);
          gl_FragColor = vec4(col, (0.1 + 0.16 * stripes) * fade + 0.04);
        }`});this.zoneWall=new Ee(new At(1,1,1,128,1,!0),e),this.zoneWall.renderOrder=5,this.group.add(this.zoneWall);let t=new Ee(new Ji(.985,1,128),new It({color:"#ffffff",transparent:!0,opacity:.85,depthWrite:!1}));t.rotation.x=-Math.PI/2,t.position.y=.15,t.renderOrder=4,this.nextRing=t,this.group.add(t)}setZone(e){this.zoneWall.scale.set(Math.max(.1,e.r),45,Math.max(.1,e.r)),this.zoneWall.position.set(e.cx,45/2-1,e.cy),this.zoneWall.visible=e.ph>=0,this.nextRing.visible=e.ph>=0&&e.st!=="done";let n=Math.max(.5,e.tr);this.nextRing.scale.set(n,n,1),this.nextRing.position.set(e.tx,.15,e.ty)}addLoot(e){if(this.lootMeshes.has(e.id))return;let t=Ou(e);t.position.set(e.x,0,e.y),t.userData.item=e,this.group.add(t),this.lootMeshes.set(e.id,t)}removeLoot(e){let t=this.lootMeshes.get(e);t&&(this.group.remove(t),this.lootMeshes.delete(e))}crateHit(e){let t=this.crateMeshes.get(e);t&&(t.userData.wobble=1)}crateBreak(e){let t=this.crateMeshes.get(e);t&&(this.group.remove(t),this.crateMeshes.delete(e));let n=this.map.crates.find(s=>s.id===e);n&&(n.alive=!1)}update(e,t,n,s){this.time+=e,this.zoneWall.material.uniforms.uTime.value=this.time,t&&s&&(Ro.uFocus.value.set(t.x,1.3,t.z),Ro.uCam.value.copy(s.position)),t&&(this.sun.position.set(t.x+30,70,t.z+18),this.sun.target.position.set(t.x,0,t.z)),this.roofs.forEach((r,a)=>{let o=a===n?0:1;r.userData.alpha+=(o-r.userData.alpha)*Math.min(1,e*10);let l=r.userData.alpha;r.visible=l>.03,(Math.abs(r.userData.lastA-l)>.001||r.userData.lastA===void 0)&&(r.userData.lastA=l,r.traverse(c=>{c.isMesh&&(c.material.opacity=l,c.material.transparent=l<.99)}))});for(let r of this.lootMeshes.values()){let a=r.userData.inner;a.rotation.y+=e*1.4,a.position.y=.55+Math.sin(this.time*2.5+r.userData.phase)*.12}for(let r of this.crateMeshes.values())if(r.userData.wobble>0){r.userData.wobble=Math.max(0,r.userData.wobble-e*5);let a=r.userData.wobble;r.scale.set(1+a*.08,1-a*.08,1+a*.08),r.rotation.y=Math.sin(this.time*60)*a*.06}}dispose(){this.scene.remove(this.group),this.group.traverse(e=>{e.geometry&&e.geometry!==ss&&e.geometry!==$n&&e.geometry.dispose?.()}),this.scene.fog=null}};ai();var If=700,K_=160,Po=class{constructor(e,t){this.scene=e,this.map=t,this.pGeo=new ft(1,1,1),this.pMesh=new kn(this.pGeo,new It({color:"#ffffff"}),If),this.pMesh.instanceMatrix.setUsage(Mu),this.pMesh.frustumCulled=!1,this.pMesh.count=0,this.pMesh.setColorAt(0,new Le),e.add(this.pMesh),this.parts=[],this.tMat=new It({color:"#fff3a0",transparent:!0,opacity:.95,blending:_r,depthWrite:!1}),this.tGeo=new ft(.07,.07,1),this.tGeo.translate(0,0,-.5),this.tracers=[],this.tPool=[],this.fMat=new It({color:"#ffd76a",transparent:!0,blending:_r,depthWrite:!1}),this.fGeo=new Ka(.28,0),this.flashes=[],this.dummy=new kt,this.col=new Le}spawn(e,t,n,s,r){for(let a=0;a<s&&this.parts.length<If;a++){let o=Math.random()*Math.PI*2,l=(r.speed||4)*(.4+Math.random()*.8),c=(r.up??3)*(.5+Math.random()),h=r.dir,d=Math.cos(o)*l,u=Math.sin(o)*l;h&&(d=d*.5+h.x*l,u=u*.5+h.y*l);let f=Array.isArray(r.color)?r.color[Math.floor(Math.random()*r.color.length)]:r.color;this.parts.push({x:e,y:t,z:n,vx:d,vy:c,vz:u,life:(r.life||.6)*(.6+Math.random()*.6),max:0,size:(r.size||.12)*(.6+Math.random()*.8),color:new Le(f),g:r.gravity??14,spin:Math.random()*10}),this.parts[this.parts.length-1].max=this.parts[this.parts.length-1].life}}tracer(e,t,n,s,r,a=1.25,o="#fff3a0"){let l=Math.cos(n),c=Math.sin(n),h=s,d=Ks(this.map,e,t,e+l*s,t+c*s);d&&(h=s*d.t);let u=this.tPool.pop();u||(u=new Ee(this.tGeo,this.tMat.clone())),u.material.color.set(o),u.visible=!0,u.rotation.set(0,Math.atan2(l,c),0),this.scene.add(u),this.tracers.push({m:u,x:e,y:t,dx:l,dy:c,d:0,len:h,speed:r,h:a,hit:!!d}),this.tracers.length>K_&&this._endTracer(this.tracers.shift())}_endTracer(e){this.scene.remove(e.m),this.tPool.push(e.m)}muzzle(e,t,n,s){let r=new Ee(this.fGeo,this.fMat);r.position.set(e,n,t),r.rotation.set(Math.random(),Math.random(),Math.random()),r.scale.setScalar(1+Math.random()*.5),this.scene.add(r),this.flashes.push({m:r,life:.06}),this.spawn(e,n,t,3,{color:["#ffd76a","#ffffff"],speed:3,up:1,life:.15,size:.07,gravity:0,dir:{x:Math.cos(s),y:Math.sin(s)}})}impactWall(e,t,n=1.2){this.spawn(e,n,t,6,{color:["#d9d2c5","#a8a196","#fff2a8"],speed:3,up:3,life:.45,size:.09})}impactPlayer(e,t){this.spawn(e,1.2,t,10,{color:["#ff4d5a","#ffb020","#ffffff"],speed:4.5,up:4,life:.45,size:.13})}crateHit(e,t){this.spawn(e,1,t,6,{color:["#c98a48","#8b5a2b"],speed:3,up:3,life:.5,size:.12})}crateBreak(e,t){this.spawn(e,.8,t,34,{color:["#c98a48","#8b5a2b","#e0b070"],speed:6,up:6,life:1.1,size:.22})}death(e,t,n){this.spawn(e,1,t,30,{color:[n,"#ffffff","#ffd23f"],speed:5,up:6,life:1,size:.18})}heal(e,t){this.spawn(e,.5,t,14,{color:["#7dff9a","#ffffff"],speed:1.5,up:4,life:.9,size:.1,gravity:-2})}confetti(e,t){this.spawn(e,3,t,120,{color:["#ff5a5f","#ffd23f","#3fa9f5","#5ad67d","#c77dff","#ffffff"],speed:7,up:9,life:3,size:.18,gravity:6})}pickup(e,t){this.spawn(e,.6,t,8,{color:["#ffffff","#fff3a0"],speed:2,up:3,life:.4,size:.08,gravity:2})}update(e){for(let n=this.tracers.length-1;n>=0;n--){let s=this.tracers[n];s.d+=s.speed*e;let r=Math.min(s.d,s.len),a=Math.max(0,r-3.2);s.m.position.set(s.x+s.dx*r,s.h,s.y+s.dy*r),s.m.scale.set(1,1,Math.max(.05,r-a)),s.d>=s.len&&(s.hit&&this.impactWall(s.x+s.dx*s.len,s.y+s.dy*s.len,s.h),this._endTracer(s),this.tracers.splice(n,1))}for(let n=this.flashes.length-1;n>=0;n--){let s=this.flashes[n];s.life-=e,s.life<=0&&(this.scene.remove(s.m),this.flashes.splice(n,1))}let t=0;for(let n=this.parts.length-1;n>=0;n--){let s=this.parts[n];if(s.life-=e,s.life<=0){this.parts[n]=this.parts[this.parts.length-1],this.parts.pop();continue}s.vy-=s.g*e,s.x+=s.vx*e,s.y+=s.vy*e,s.z+=s.vz*e,s.y<.05&&(s.y=.05,s.vy*=-.3,s.vx*=.6,s.vz*=.6),s.spin+=e*8}for(let n of this.parts){let s=Math.min(1,n.life/(n.max*.5));this.dummy.position.set(n.x,n.y,n.z),this.dummy.rotation.set(n.spin,n.spin*.7,0),this.dummy.scale.setScalar(n.size*s),this.dummy.updateMatrix(),this.pMesh.setMatrixAt(t,this.dummy.matrix),this.pMesh.setColorAt(t,n.color),t++}this.pMesh.count=t,this.pMesh.instanceMatrix.needsUpdate=!0,this.pMesh.instanceColor&&(this.pMesh.instanceColor.needsUpdate=!0)}dispose(){this.scene.remove(this.pMesh);for(let e of this.tracers)this.scene.remove(e.m);for(let e of this.flashes)this.scene.remove(e.m)}};Ur();Io();js();Zs();var Q_=110,kf=.12,Uf=1.4,Of=.44,Qs=i=>document.getElementById(i),Do=class{constructor(e,t){this.app=e,this.net=e.net,this.renderer=e.renderer,this.quality=Xn[Q.quality]||Xn.medium,this.mode=t.mode,this.localId=t.you,this.scene=new wi,this.camera=new Nt(Q.fov,innerWidth/innerHeight,.3,600),this.map=Pf(t.seed);for(let n of t.crates){let s=this.map.crates.find(r=>r.id===n);s&&(s.alive=!1)}this.world=new Co(this.scene,this.map,this.quality);for(let n of t.crates)this.world.crateBreak(n);this.effects=new Po(this.scene,this.map),this.hud=new Lo(this.map),this.loot=new Map;for(let n of t.loot)this.loot.set(n.id,n),this.world.addLoot(n);this.zone=t.zone,this.world.setZone(this.zone),this.players=new Map;for(let n of t.players)this._addPlayer(n);this.me=this.players.get(this.localId),this.myTeam=this.me.team,this.hud.setRoster(this.players,this.localId,this.mode),this.pred={x:0,y:0,z:0,vz:0,jh:!1},this.predPrev={x:0,y:0,z:0},this.predInit=!1,this.pending=[],this.seq=0,this.corr={x:0,y:0},this.acc=0,this.inv={hp:ih,sl:0,w:[["pistol",12],null],am:{light:24,medium:0,shells:0,heavy:0},he:{bandage:1,medkit:0},rl:0,hl:null,k:0},this.localCd=0,this.localMag=null,this.prevFire=!1,this.yaw=-Math.PI/2,this.pitch=.72,this.zoom=1,this.yawT=this.yaw,this.pitchT=this.pitch,this.camDist=null,this.camPos=new L,this.camLook=new L,this.camInit=!1,this.shake=0,this.keys=new Set,this.mouse={left:!1,right:!1,x:innerWidth/2,y:innerHeight/2},this.aimAngle=0,this.paused=!1,this.state=t.countdown>0?"countdown":"playing",this.countdownEnd=performance.now()+t.countdown*1e3,this.lastCountdown=-1,this.matchTime=-t.countdown,this.aliveCount=t.players.length,this.teamsAlive=0,this.spectateId=null,this.ended=!1,this.resultShown=!1,this.stepT=0,this.revealed=new Map,this.losCache=new Map,this.lastZoneTick=0,this.lowAmmoWarned=!1,this._bind(),this.onResize(),ye.stopMusic(),this.hud.announce("\xA1Prep\xE1rate!","big",1.5),Qs("spectate").classList.add("hidden")}_addPlayer(e){let t=e.id===this.localId,n=Nf(e.team),s=new qn(e.outfit||e.char,{ringColor:t?"#ffffff":null});s.victoryStyle=Math.floor(Math.random()*3),s.setWeapon("pistol"),this.scene.add(s.root);let r={...e,color:n,model:s,buf:[],x:0,y:0,z:0,a:0,hp:ih,alive:!0,flags:1,w:0,kills:0,rx:0,ry:0,stepT:0,lastX:null,speed:0,inited:!1};return this.players.set(e.id,r),t&&this._addSilhouette(s,"#8fe3ff"),r}_addSilhouette(e,t="#7fd6ff"){let n=new It({color:t,depthFunc:Ac,depthWrite:!1}),s=[];e.root.traverse(r=>{r.isMesh&&!r.userData.sil&&r!==e.ring&&s.push(r)});for(let r of s){r.renderOrder=2;let a=new Ee(r.geometry,n);a.userData.sil=!0,a.renderOrder=1,r.add(a)}e.silMat=n}_bind(){let e=this.renderer.domElement;this.h={keydown:t=>{if((t.code==="Tab"||t.code==="Space"||t.code.startsWith("Arrow"))&&t.preventDefault(),t.repeat){t.code===Q.keys.scoreboard&&t.preventDefault();return}if(t.code==="Escape"||t.code==="KeyP"){this.togglePause();return}if(this.paused)return;this.keys.add(t.code);let n=Q.keys;if(this.isDead()){(t.code==="Space"||t.code===n.interact)&&this.cycleSpectate();return}t.code===n.reload?this.action("reload"):t.code===n.interact?this.action("pickup"):t.code===n.slot1?this.action("slot",0):t.code===n.slot2?this.action("slot",1):t.code===n.bandage?this.action("heal","bandage"):t.code===n.medkit?this.action("heal","medkit"):t.code===n.drop&&this.action("drop")},keyup:t=>{this.keys.delete(t.code)},mousedown:t=>{if(!(this.touch||this.paused||t.target!==e)){if(ye.init(),this.camMode==="follow"&&document.pointerLockElement!==e){this.lockPointer();return}t.button===0&&(this.mouse.left=!0,this.fireLatch=!0),t.button===2&&(this.mouse.right=!0)}},mouseup:t=>{t.button===0&&(this.mouse.left=!1),t.button===2&&(this.mouse.right=!1)},mousemove:t=>{if(this.mouse.x=t.clientX,this.mouse.y=t.clientY,document.pointerLockElement===e&&!this.paused){let n=Math.max(-250,Math.min(250,t.movementX)),s=Math.max(-250,Math.min(250,t.movementY)),r=.0022*Q.sensitivity;this.yawT+=n*r,this.pitchT=Math.max(kf,Math.min(Uf,this.pitchT+s*r*.75*(Q.invertY?-1:1)))}},wheel:t=>{if(!this.paused&&!t.ctrlKey){if(t.shiftKey){this.zoom=Math.max(.7,Math.min(1.5,this.zoom+Math.sign(t.deltaY)*.08));return}!this.isDead()&&Math.abs(t.deltaY)>2&&this.action("slot",this.inv.sl===0?1:0)}},contextmenu:t=>t.preventDefault(),blur:()=>{this.keys.clear(),this.mouse.left=this.mouse.right=!1},plc:()=>{this.camMode==="follow"&&document.pointerLockElement!==e&&!this.paused&&!this.ended&&!this.resultShown&&this.togglePause(!0)},resize:()=>this.onResize()},window.addEventListener("keydown",this.h.keydown),window.addEventListener("keyup",this.h.keyup),window.addEventListener("mousedown",this.h.mousedown),window.addEventListener("mouseup",this.h.mouseup),window.addEventListener("mousemove",this.h.mousemove),window.addEventListener("wheel",this.h.wheel,{passive:!0}),window.addEventListener("contextmenu",this.h.contextmenu),window.addEventListener("blur",this.h.blur),window.addEventListener("resize",this.h.resize),document.addEventListener("pointerlockchange",this.h.plc),e.classList.toggle("cursorMode",this.camMode==="cursor"),vn&&(this.touch=new Js(this))}get pitchMin(){return kf}get pitchMax(){return Uf}get camMode(){return this.touch?"follow":this.lockFailed?"cursor":Q.cameraMode}lockPointer(){if(this.touch||this.camMode!=="follow")return;let e=this.renderer.domElement,t=()=>{this.lockFails=(this.lockFails||0)+1,this.lockFails>=2&&!this.lockFailed&&(this.lockFailed=!0,e.classList.add("cursorMode"),this.hud.toast("No se pudo capturar el rat\xF3n: se usa la vista con cursor"))};try{let n=e.requestPointerLock();n&&n.catch&&n.catch(t)}catch{t()}}togglePause(e){if(this.resultShown)return;let t=e===void 0?!this.paused:e;this.paused=t,this.keys.clear(),this.mouse.left=this.mouse.right=!1,this.touch&&this.touch.reset(),t?zr():Eo(),Qs("pause").classList.toggle("hidden",!t),t?document.pointerLockElement&&document.exitPointerLock():this.camMode==="follow"&&this.lockPointer()}action(e,t){this.state!=="playing"||this.isDead()||(this.net.send({t:"a",a:e,v:t}),e==="slot"&&(this.localCd=Math.max(this.localCd,.25),this.inv.sl=t,this.localMag=null))}isDead(){return!this.me.alive}onResize(){this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.hud.resize()}onSnapshot(e){let t=performance.now();this.matchTime=e.tm,this.aliveCount=e.al,this.teamsAlive=e.at;for(let n of e.p){let[s,r,a,o,l,c,h,d]=n,u=this.players.get(s);if(!u)continue;u.buf.push({t,x:r,y:a,z:o,a:l,hp:c,flags:h,w:d}),u.buf.length>30&&u.buf.shift(),u.inited||(u.x=u.rx=r,u.y=u.ry=a,u.inited=!0),u.hp=c,u.flags=h,u.w=d;let f=(h&1)!==0;u.alive&&!f?(u.alive=!1,u.model.die()):!u.alive&&f&&(u.alive=!0,u.model.revive())}e.z&&(this.zone=e.z,this.world.setZone(this.zone)),e.me&&this._reconcile(e.me);for(let n of e.ev||[])this._event(n)}_reconcile(e){let t=this.inv;if(this.inv=e,e.w[e.sl]&&(this.localMag===null||e.w[e.sl][1]!==this.localMag)&&(this.localMag===null||e.w[e.sl][1]>this.localMag||this.pending.length===0||e.rl>0)&&(this.localMag=e.w[e.sl][1]),!this.predInit)Object.assign(this.pred,{x:e.x,y:e.y,z:e.z,vz:e.vz}),Object.assign(this.predPrev,{x:e.x,y:e.y,z:e.z}),this.predInit=!0;else{let n=this.pred.x,s=this.pred.y;this.pending=this.pending.filter(o=>o.s>e.ack);let r={x:e.x,y:e.y,z:e.z,vz:e.vz,jh:this.lastAckJump(e.ack)};for(let o of this.pending)ah(r,o,this.map,ts,{healing:!!e.hl});Math.hypot(r.x-n,r.y-s)>4?(this.corr.x=0,this.corr.y=0):(this.corr.x+=n-r.x,this.corr.y+=s-r.y),Object.assign(this.pred,r)}this.hud.updateMe(e),t&&e.hp<t.hp&&this.hud.setLowHp(e.hp),e.hp>(t?.hp??0)&&this.hud.setLowHp(e.hp)}lastAckJump(e){let t=this.sentHistory?.get(e);return t?(t&Pt.JUMP)!==0:!1}_event(e){let t=n=>this.players.get(n);switch(e.t){case"go":this.state="playing",this.hud.announce("\xA1A LUCHAR!","big go",1.4),ye.countdown(!0);break;case"shot":{let n=t(e.p);if(!n)break;let s=Ft[e.w];if(n.model.shoot(s.recoil+.4),n.model.setWeapon(e.w),e.p===this.localId)break;for(let r of e.as)this.effects.tracer(e.x,e.y,r,s.range,s.speed*.9,1.25,s.id==="sniper"?"#e2b8ff":"#fff3a0");if(this.effects.muzzle(e.x+Math.cos(e.as[0])*.4,e.y+Math.sin(e.as[0])*.4,1.25,e.as[0]),ye.gunshot(e.w,e.x,e.y),n.team!==this.myTeam&&this.me.alive&&Math.hypot(e.x-this.pred.x,e.y-this.pred.y)<50){this.revealed.set(e.p,performance.now()+3e3);let a=this.project(e.x,1,e.y);(!a||a.x<40||a.y<40||a.x>innerWidth-40||a.y>innerHeight-40)&&this.hud.addIndicator(this.screenAngleTo(e.x,e.y),"shot")}break}case"hit":{let n=t(e.p);if(this.effects.impactPlayer(e.x,e.y),e.p===this.localId){ye.hurt(),this.hud.damageFlash(e.d),this.shake=Math.min(.6,this.shake+e.d/60);let s=t(e.by);s?this.hud.addIndicator(this.screenAngleTo(s.rx,s.ry),"damage"):this.hud.addIndicator(this.screenAngleTo(this.zone.cx,this.zone.cy)+Math.PI,"damage")}else e.by===this.localId?(ye.hitMarker(),this.hud.hitmarker(!1),this.hud.floatText(e.x,e.y,2.2,String(e.d),e.d>=40?"#ffd23f":"#ffffff",e.d>=40)):ye.impact(e.x,e.y);n&&(n.lastHit=performance.now());break}case"kill":{let n=t(e.v),s=t(e.k);n&&(this.effects.death(n.rx,n.ry,n.color),n.alive=!1,n.model.die());let r=e.v===this.localId||e.k===this.localId;this.hud.killfeed(s?{name:s.name,color:s.color}:null,{name:n?.name||"?",color:n?.color||"#fff"},e.w,r),s&&(s.kills=(s.kills||0)+(s.team!==n?.team?1:0)),e.k===this.localId&&e.v!==this.localId&&(ye.elimination(),this.hud.hitmarker(!0),this.hud.announce(`<small>ELIMINASTE A</small>${Bf(n?.name||"")}`,"kill",2)),e.v===this.localId?this._onLocalDeath(s):n&&n.team===this.myTeam&&this.hud.toast(`${n.name} ha ca\xEDdo`),this.spectateId===e.v&&setTimeout(()=>this.pickSpectate(e.k),1800);break}case"teamout":e.team!==this.myTeam&&this.mode!=="solo"&&this.hud.toast(`Equipo eliminado \xB7 quedan ${Math.max(1,e.place-1)} equipos`);break;case"pk":{let n=t(e.p);if(n&&n.model.pickup(),e.p===this.localId){ye.pickup(),this.effects.pickup(this.pred.x,this.pred.y);let s=e.k==="weapon"?Ft[e.ty].name:e.k==="ammo"?es[e.ty].name:uo[e.ty].name;this.hud.toast(`+ ${s}`),e.k==="weapon"&&(this.localMag=null)}break}case"rl":{let n=t(e.p);e.p===this.localId?ye.reload(e.w):n&&ye.reload(e.w,n.rx,n.ry);break}case"dry":e.p===this.localId&&(ye.dry(),this.hud.toast("Sin munici\xF3n"));break;case"heal":e.p===this.localId&&ye.heal();break;case"healed":{let n=t(e.p);n&&this.effects.heal(n.rx,n.ry),e.p===this.localId&&this.hud.floatText(this.pred.x,this.pred.y,2.4,"+"+e.hp+" \u2665","#7dff9a");break}case"sw":e.p===this.localId&&(this.localMag=null);break;case"la":this.loot.set(e.it.id,e.it),this.world.addLoot(e.it);break;case"lr":this.loot.delete(e.id),this.world.removeLoot(e.id);break;case"lu":{let n=this.loot.get(e.id);n&&(n.n=e.amount);break}case"ch":this.world.crateHit(e.id),this.effects.crateHit(e.x,e.y),ye.crate(e.x,e.y,!1);break;case"cb":{let n=this.map.crates.find(s=>s.id===e.id);this.world.crateBreak(e.id),n&&(this.effects.crateBreak(n.x+.8,n.y+.8),ye.crate(n.x,n.y,!0));break}case"zone":e.s==="new"?(this.hud.announce(e.ph===0?"La zona segura ha aparecido":"Nueva zona segura marcada","zone",2.6),ye.zoneAlarm()):e.s==="shrink"&&(this.hud.announce("\xA1La zona se est\xE1 cerrando!","zone",2.6),ye.zoneAlarm());break}}_onLocalDeath(e){this.hud.prompt(null),Qs("progress").classList.add("hidden"),document.pointerLockElement&&document.exitPointerLock();let t=[...this.players.values()].filter(n=>n.team===this.myTeam&&n.alive&&n.id!==this.localId);t.length?(this.hud.announce("Has ca\xEDdo. Tu equipo sigue luchando","dead",3),setTimeout(()=>this.pickSpectate(t[0].id),1500)):setTimeout(()=>this.pickSpectate(e?e.id:null),2500)}pickSpectate(e){if(!this.isDead())return;let t=e?this.players.get(e):null;if(!t||!t.alive){let s=[...this.players.values()].filter(r=>r.alive);t=s.find(r=>r.team===this.myTeam)||s[0]||null}this.spectateId=t?t.id:null;let n=Qs("spectate");t&&(n.classList.remove("hidden"),Qs("spectateName").textContent=t.name)}cycleSpectate(){let e=[...this.players.values()].filter(s=>s.alive);if(!e.length)return;let t=e.findIndex(s=>s.id===this.spectateId),n=e[(t+1)%e.length];this.pickSpectate(n.id)}fixedStep(){if(!this.predInit)return;let e=this.state==="playing"&&!this.paused&&this.me.alive&&!this.ended,t=Q.keys,n=0,s=0;e&&(this.keys.has(t.forward)&&(s+=1),this.keys.has(t.back)&&(s-=1),this.keys.has(t.right)&&(n+=1),this.keys.has(t.left)&&(n-=1),this.touch&&(this.touch.mx||this.touch.my)&&(n=this.touch.mx,s=this.touch.my));let r=this.camMode==="follow"?this.yaw:-Math.PI/2,a=Math.cos(r),o=Math.sin(r),l=-o,c=a,h=a*s+l*n,d=o*s+c*n,u=Math.hypot(h,d);if(u>1&&(h/=u,d/=u),this.camMode==="follow")this.aimAngle=this._followAim();else{let m=this.screenToGround(this.mouse.x,this.mouse.y,1.25);m&&(this.aimAngle=Math.atan2(m.y-this.pred.y,m.x-this.pred.x))}let f=0,g=this.touch||this.camMode==="cursor"||document.pointerLockElement===this.renderer.domElement;e&&this.touch&&(this._aimAssist(),(this.touch.fire||this.touch.fireLatch)&&(f|=Pt.FIRE),this.touch.fireLatch=!1,this.touch.ads&&(f|=Pt.ADS),this.touch.sprint&&(f|=Pt.SPRINT),this.touch.jump&&(f|=Pt.JUMP)),e&&g&&((this.mouse.left||this.fireLatch)&&(f|=Pt.FIRE),this.fireLatch=!1,this.mouse.right&&(f|=Pt.ADS),(this.keys.has(t.sprint)||this.keys.has("ShiftRight"))&&(f|=Pt.SPRINT),this.keys.has(t.jump)&&(f|=Pt.JUMP)),this.fireLatch=!1;let y=Math.atan2(Math.sin(this.aimAngle),Math.cos(this.aimAngle));if(this.buttons=f,this.me.alive&&!this.ended){let m={t:"i",s:++this.seq,mx:Math.round(h*1e3)/1e3,my:Math.round(d*1e3)/1e3,b:f,a:Math.round(y*1e3)/1e3};this.net.send(m),this.sentHistory||(this.sentHistory=new Map),this.sentHistory.set(m.s,f),this.sentHistory.size>120&&this.sentHistory.delete(m.s-120),this.state==="playing"?(this.pending.push(m),this.pending.length>90&&this.pending.shift(),Object.assign(this.predPrev,{x:this.pred.x,y:this.pred.y,z:this.pred.z}),this.moving=ah(this.pred,m,this.map,ts,{healing:!!this.inv.hl}),this.predSprint=this.moving&&f&Pt.SPRINT&&!(f&Pt.ADS)):Object.assign(this.predPrev,{x:this.pred.x,y:this.pred.y,z:this.pred.z})}this._localFire(f)}_aimAssist(){if(!Q.touchAimAssist||!this.me.alive||!(this.touch.fire||this.touch.ads))return;let e=this.inv.w[this.inv.sl],t=e&&Ft[e[0]]?Ft[e[0]].range:25,n=null,s=.21;for(let r of this.players.values()){if(r.id===this.localId||!r.alive||r.team===this.myTeam||!r.inited||r.model&&r.model.root&&r.model.root.visible===!1)continue;let a=r.rx-this.pred.x,o=r.ry-this.pred.y,l=Math.hypot(a,o);if(l<1||l>t)continue;let c=Math.atan2(o,a)-this.yaw;for(;c>Math.PI;)c-=2*Math.PI;for(;c<-Math.PI;)c+=2*Math.PI;Math.abs(c)<s&&(s=Math.abs(c),n=c)}n!==null&&(this.yawT+=n*.1)}_followAim(){let e=this.screenToGround(innerWidth*.5,innerHeight*Of,1.25),t=this.pred.x,n=this.pred.y;if(e){let s=e.x-t,r=e.y-n,a=Math.hypot(s,r),o=s*Math.cos(this.yaw)+r*Math.sin(this.yaw);if(a>1.5&&o>.5)return this._aimDist=a,Math.atan2(r,s)}return this._aimDist=40,this.yaw}_localFire(e){this.localCd=Math.max(0,this.localCd-ts);let t=(e&Pt.FIRE)!==0,n=this.inv.w[this.inv.sl];if(t&&n&&this.state==="playing"&&this.me.alive){let s=Ft[n[0]],r=s.auto||!this.prevFire;if(this.localMag===null&&(this.localMag=n[1]),r&&this.localCd<=0&&!this.inv.hl&&(this.inv.rl<=0||s.id==="shotgun"&&this.localMag>0))if(this.localMag>0){this.localMag--,this.localCd=s.interval;let a=s.spread;e&Pt.ADS&&(a*=kc),this.pred.z>.05?a*=Fc:this.predSprint?a*=Oc:this.moving&&(a*=Uc);let o=this.pred.x+Math.cos(this.aimAngle)*.75,l=this.pred.y+Math.sin(this.aimAngle)*.75;for(let c=0;c<s.pellets;c++){let h=this.aimAngle+(Math.random()+Math.random()-1)*a;this.effects.tracer(o,l,h,s.range,s.speed*.9,1.25+this.pred.z,s.id==="sniper"?"#e2b8ff":"#fff3a0")}this.effects.muzzle(o+Math.cos(this.aimAngle)*.3,l+Math.sin(this.aimAngle)*.3,1.25+this.pred.z,this.aimAngle),ye.gunshot(s.id),this.me.model.shoot(s.recoil+.4),this.shake=Math.min(.5,this.shake+s.recoil*.35),this.localMag===0&&this.inv.am[s.ammo]===0&&this.hud.toast("\xA1Sin munici\xF3n para "+s.name+"!")}else this.prevFire||ye.dry()}this.prevFire=t}update(e){let t=performance.now();if(this.state==="countdown"){let c=Math.ceil((this.countdownEnd-t)/1e3);c!==this.lastCountdown&&c>0&&(this.lastCountdown=c,this.hud.announce(String(c),"big count",.9),ye.countdown(!1))}this.acc+=e;let n=0;for(;this.acc>=ts&&n<5;)this.fixedStep(),this.acc-=ts,n++;n>=5&&(this.acc=0);let s=this.acc/ts,r=Math.exp(-e*12);this.corr.x*=r,this.corr.y*=r,this.predInit&&this.me.alive&&(this.me.rx=this.predPrev.x+(this.pred.x-this.predPrev.x)*s+this.corr.x,this.me.ry=this.predPrev.y+(this.pred.y-this.predPrev.y)*s+this.corr.y,this.me.rz=this.predPrev.z+(this.pred.z-this.predPrev.z)*s,this.me.ra=this.aimAngle);let a=t-Q_;for(let c of this.players.values()){if(c.id===this.localId&&c.alive)continue;let h=c.buf;if(!h.length)continue;let d=h[0],u=h[h.length-1];for(let g=0;g<h.length-1;g++)if(h[g].t<=a&&h[g+1].t>=a){d=h[g],u=h[g+1];break}a>=u.t&&(d=u);let f=u.t>d.t?Math.max(0,Math.min(1,(a-d.t)/(u.t-d.t))):1;for(c.rx=d.x+(u.x-d.x)*f,c.ry=d.y+(u.y-d.y)*f,c.rz=d.z+(u.z-d.z)*f,c.ra=Ff(d.a,u.a,f);h.length>2&&h[1].t<a-200;)h.shift()}for(let c of this.players.values()){let h=c.model;if(c.rx===void 0)continue;let d=c.lastX===null?0:(c.rx-c.lastX)/Math.max(e,.001),u=c.lastY===void 0||c.lastY===null?0:(c.ry-c.lastY)/Math.max(e,.001);c.lastX=c.rx,c.lastY=c.ry;let f=Math.hypot(d,u);c.speed+=(f-c.speed)*Math.min(1,e*10),h.root.position.x=c.rx,h.root.position.z=c.ry,c.alive&&(h.root.position.y=c.rz||0),h.root.rotation.y=Math.PI/2-c.ra;let g=c.id===this.localId,y=c.flags,m=g?this.inv.w[this.inv.sl]?ho.indexOf(this.inv.w[this.inv.sl][0]):-1:c.w;h.setWeapon(m>=0?ho[m]:null),h.update(e,{speed:Math.min(1.3,c.speed/6),running:c.speed>7.2,aiming:g?this.buttons&Pt.ADS:y&32,reloading:g?this.inv.rl>0:y&8,healing:g?!!this.inv.hl:y&16,airborne:(c.rz||0)>.08,inMatch:!0}),c.alive&&c.speed>1.5&&(c.rz||0)<.05&&(c.stepT-=e,c.stepT<=0&&(c.stepT=c.speed>7.2?.27:.36,g?ye.step(null,null,c.speed>7.2):ye.step(c.rx,c.ry,c.speed>7.2))),h.root.visible=c.alive||h.deadT<4.2}let o=this._focus();this._updateCamera(e,o),ye.listener.x=o.x,ye.listener.y=o.y,ye.listener.yaw=this.camMode==="follow"?this.yaw:-Math.PI/2;let l=Lf(this.map,o.x,o.y);if(this.world.update(e,{x:o.x,z:o.y},l,this.camera),this.effects.update(e),this._updateHud(e,o),this.me.alive&&this.zone){let c=Math.hypot(this.pred.x-this.zone.cx,this.pred.y-this.zone.cy)>this.zone.r;this.hud.setZoneVignette(c),c&&t-this.lastZoneTick>1e3&&(this.lastZoneTick=t,ye.zoneTick())}else this.hud.setZoneVignette(!1)}_focus(){if(this.me.alive||!this.spectateId)return{x:this.me.rx??this.pred.x,y:this.me.ry??this.pred.y,z:this.me.rz||0,a:this.aimAngle};let e=this.players.get(this.spectateId);return e?{x:e.rx,y:e.ry,z:e.rz||0,a:e.ra}:{x:this.me.rx,y:this.me.ry,z:0,a:0}}_updateCamera(e,t){let n=this.camMode==="follow",s=this.inv.w[this.inv.sl],r=s?Ft[s[0]]:null,a=this.me.alive&&this.buttons&Pt.ADS&&r;!this.me.alive&&this.spectateId&&n&&(this.yawT=Ff(this.yawT,this.players.get(this.spectateId)?.ra??this.yawT,Math.min(1,e*2.5)));let o=42-34*Math.max(0,Math.min(1,Q.cameraSmoothing??.35)),l=1-Math.exp(-e*o);this.yaw+=(this.yawT-this.yaw)*l,this.pitch+=(this.pitchT-this.pitch)*l;let c=n?this.yaw:-Math.PI/2,h=n?this.pitch:1.12,d=(n?13:19)*Q.cameraDistance*this.zoom,u=n?4.2:0;if(a&&(d*=r.zoom,u+=n?r.id==="sniper"?12:r.id==="ar"?6:3.5:0),!n){let _=this.screenToGround(this.mouse.x,this.mouse.y,0);if(_){let M=_.x-t.x,D=_.y-t.y,O=Math.min(a?14:5,Math.hypot(M,D)*(a?.45:.18)),K=Math.atan2(D,M);this._lookOff={x:Math.cos(K)*O,y:Math.sin(K)*O}}}let f=Math.cos(c),g=Math.sin(c),y=!n&&this._lookOff?this._lookOff:{x:0,y:0},m=n?Math.max(0,1-h/1.1):0;u*=1-m*.6;let p=n?.9*m:0,v=t.x+f*u+y.x-g*p,x=t.y+g*u+y.y+f*p,S=1.2+(t.z||0)*.4+m*.9;if(n){let _=v-f*d*Math.cos(h),M=x-g*d*Math.cos(h),D=S+d*Math.sin(h),O=Ks(this.map,v,x,_,M);if(O){let K=O.obj.ref?.height??3;S+(D-S)*O.t<K+.4&&(d=Math.max(2.8,d*O.t*.9))}}this.camDist===null&&(this.camDist=d),this.camDist+=(d-this.camDist)*Math.min(1,e*(d<this.camDist?14:3)),d=this.camDist;let R=new L(v,S,x),T=new L(v-f*d*Math.cos(h),Math.max(.9,S+d*Math.sin(h)),x-g*d*Math.cos(h));this.camInit||(this.camPos.copy(T),this.camLook.copy(R),this.camInit=!0);let b=1-Math.exp(-e*(n?30:10));if(this.camPos.lerp(T,b),this.camLook.lerp(R,b),this.camera.position.copy(this.camPos),this.shake>0){this.shake=Math.max(0,this.shake-e*2.2);let _=this.shake*.35;this.camera.position.x+=(Math.random()-.5)*_,this.camera.position.y+=(Math.random()-.5)*_,this.camera.position.z+=(Math.random()-.5)*_}this.camera.lookAt(this.camLook);let C=Q.fov*(a&&r.id==="sniper"?.92:1);Math.abs(this.camera.fov-C)>.05&&(this.camera.fov+=(C-this.camera.fov)*Math.min(1,e*8),this.camera.updateProjectionMatrix())}_updateHud(e,t){let n=performance.now();this.hud.updateTop(this.aliveCount,this.teamsAlive,this.matchTime,this.zone);let s=[...this.players.values()].filter(y=>y.team===this.myTeam).map(y=>({name:y.name,hp:y.id===this.localId?this.inv.hp:y.hp,alive:y.alive,color:y.color,isMe:y.id===this.localId}));(!this._teamT||n-this._teamT>250)&&(this.hud.updateTeam(s),this._teamT=n);let r=null;if(this.me.alive&&this.state==="playing"){let y=null,m=sh*sh;for(let p of this.loot.values()){let v=(p.x-this.pred.x)**2+(p.y-this.pred.y)**2;v<m&&(p.k==="weapon"||!y||y.k!=="weapon")&&(m=v,y=p)}if(y){let p={kind:y.k,type:y.ty,amount:y.n},v=this.inv.w.every(Boolean)&&y.k==="weapon"&&!this.inv.w.some(x=>x&&x[0]===y.ty);r=`Recoger <b>${Bf(Uu(p))}</b>${v?" <small>(cambia el arma actual)</small>":""}`}}r!==this._lastPrompt&&(this.hud.prompt(r),this._lastPrompt=r),this.touch&&this.touch.update(r);let a=[];for(let y of this.players.values()){if(!y.alive||y.id===this.localId||y.rx===void 0||Math.hypot(y.rx-t.x,y.ry-t.y)>42)continue;let p=y.team===this.myTeam;if(!p){let v=this.losCache.get(y.id);if((!v||n-v.t>150)&&(v={t:n,v:!Ks(this.map,t.x,t.y,y.rx,y.ry)},this.losCache.set(y.id,v)),!v.v)continue}a.push({x:y.rx,y:y.ry,h:2.55+(y.rz||0),name:y.name,hp:y.hp,color:p?y.color:"#ffffff",enemy:!p})}let o=this.project(t.x,1.2,t.y)||{x:innerWidth/2,y:innerHeight/2};this.hud.drawOverlay(e,a,(y,m,p)=>this.project(y,m,p),o);let l=this.inv.w[this.inv.sl],c=l?Ft[l[0]]:null,h=this.mouse.x,d=this.mouse.y,u=0,f=!1;if(c&&this.me.alive){let y=c.spread;this.buttons&Pt.ADS&&(y*=kc),this.pred.z>.05?y*=Fc:this.predSprint?y*=Oc:this.moving&&(y*=Uc);let m=this.camMode==="follow"?Math.max(2,Math.min(c.range,this._aimDist||12)):Math.hypot(...(()=>{let R=this.screenToGround(this.mouse.x,this.mouse.y,1.25);return R?[R.x-this.pred.x,R.y-this.pred.y]:[8,0]})()),p=this.pred.x+Math.cos(this.aimAngle)*m,v=this.pred.y+Math.sin(this.aimAngle)*m;this.camMode==="follow"&&(h=innerWidth*.5,d=innerHeight*Of);let x=this.project(p+Math.cos(this.aimAngle+Math.PI/2)*m*Math.tan(y),1.25,v+Math.sin(this.aimAngle+Math.PI/2)*m*Math.tan(y)),S=this.project(p,1.25,v);x&&S&&(u=Math.min(80,Math.hypot(x.x-S.x,x.y-S.y))),f=!!Ks(this.map,this.pred.x,this.pred.y,p,v)}if(this.hud.crosshair(h,d,u,this.me.alive&&!this.paused&&!this.resultShown,f),!this._mmT||n-this._mmT>50){this._mmT=n;for(let[m,p]of this.revealed)p<n&&this.revealed.delete(m);let y=[...this.players.values()].map(m=>({x:m.rx,y:m.ry,alive:m.alive,isMe:m.id===this.localId,mate:m.team===this.myTeam,color:m.color,revealed:this.revealed.has(m.id)}));this.hud.drawMinimap({x:t.x,y:t.y,a:t.a},this.camMode==="follow"?this.yaw:-Math.PI/2,y,this.zone,this.camMode==="follow")}let g=this.keys.has(Q.keys.scoreboard)||!!(this.touch&&this.touch.showMap);if(g||this._sbShown){if(g&&(!this._sbT||n-this._sbT>300)){this._sbT=n;let y=this.inv.w.map((m,p)=>m?`<span class="${p===this.inv.sl?"sel":""}">${Ft[m[0]].name}: ${m[1]}/${this.inv.am[Ft[m[0]].ammo]}</span>`:"<span>\u2014 vac\xEDo \u2014</span>").join("")+`<span>Vendas: ${this.inv.he.bandage}</span><span>Botiquines: ${this.inv.he.medkit}</span>`+Object.entries(this.inv.am).map(([m,p])=>`<span class="am">${es[m].name}: ${p}</span>`).join("");this.hud.showScoreboard(!0,{zone:this.zone,alive:this.aliveCount,time:this.matchTime,inventory:y,players:[...this.players.values()].map(m=>({name:m.name,team:m.team,color:m.color,kills:m.kills||0,alive:m.alive,isMe:m.id===this.localId,mate:m.team===this.myTeam,x:m.rx,y:m.ry,bot:m.bot}))})}else g||this.hud.showScoreboard(!1);this._sbShown=g}}render(){this.renderer.render(this.scene,this.camera)}project(e,t,n){let s=new L(e,t,n).project(this.camera);return s.z>1||s.z<-1?null:{x:(s.x+1)/2*innerWidth,y:(1-s.y)/2*innerHeight}}screenToGround(e,t,n=0){let s=new pe(e/innerWidth*2-1,-(t/innerHeight)*2+1),r=new to;r.setFromCamera(s,this.camera);let a=new Ln(new L(0,1,0),-n),o=new L;return r.ray.intersectPlane(a,o)?{x:o.x,y:o.z}:null}screenAngleTo(e,t){let n=this._focus(),s=Math.atan2(t-n.y,e-n.x),r=this.camMode==="follow"?this.yaw:-Math.PI/2;return s-r-Math.PI/2}setVictoryPose(){this.me.alive&&(this.me.model.victory=!0,this.effects.confetti(this.pred.x,this.pred.y))}dispose(){window.removeEventListener("keydown",this.h.keydown),window.removeEventListener("keyup",this.h.keyup),window.removeEventListener("mousedown",this.h.mousedown),window.removeEventListener("mouseup",this.h.mouseup),window.removeEventListener("mousemove",this.h.mousemove),window.removeEventListener("wheel",this.h.wheel),window.removeEventListener("contextmenu",this.h.contextmenu),window.removeEventListener("blur",this.h.blur),window.removeEventListener("resize",this.h.resize),document.removeEventListener("pointerlockchange",this.h.plc),this.touch&&(this.touch.dispose(),this.touch=null),document.pointerLockElement&&document.exitPointerLock(),this.hud.hide(),this.world.dispose(),this.effects.dispose(),Qs("pause").classList.add("hidden"),this.renderer.domElement.classList.remove("cursorMode"),this.scene.traverse(e=>{e.geometry&&e.isInstancedMesh})}};function Ff(i,e,t){let n=e-i;for(;n>Math.PI;)n-=2*Math.PI;for(;n<-Math.PI;)n+=2*Math.PI;return i+n*t}function Bf(i){return String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}Ur();js();Zs();_h();ns();Io();dh();Qi();vo();yo();Ao();Qi();document.body.classList.add(vn?"touch":"desktop","dev-"+Yu);Fr&&document.body.classList.add("tablet");sf();var U=i=>document.getElementById(i),rr=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Zr="islaRoyale.profileId",Xo="islaRoyale.name",Mh="islaRoyale.token",Jr=(new URLSearchParams(location.search).get("sala")||"").trim().toUpperCase().slice(0,5),Ho=!1,bh=!1;function Yo(i){if(i&&(W.profile=i,i.token))try{(bh?qs:Jt).setItem(Mh,i.token)}catch{}}var W={renderer:null,net:new co,lobby:null,game:null,profile:null,mode:Jt.getItem("islaRoyale.mode")||"solo",party:null,queue:null,lastResult:null,screen:"boot"};window.__app=W;Promise.resolve().then(()=>(_h(),Zf)).then(i=>{window.__meta=i});function Kf(){let i=Xn[Q.quality]||Xn.medium,e=U("game"),t=e;W.renderer&&(t=e.cloneNode(!1),e.replaceWith(t),W.renderer.dispose());let n;try{n=new Yi({canvas:t,antialias:i.antialias,powerPreference:"high-performance"})}catch(s){throw U("bootText").textContent="Tu navegador no puede usar WebGL. Actualiza los controladores gr\xE1ficos o usa Chrome / Edge.",s}return n.outputColorSpace=mt,n.shadowMap.enabled=i.shadows,n.shadowMap.type=Tc,W.renderer=n,jr(),n}function jr(){let i=Xn[Q.quality]||Xn.medium,e=Math.min(window.devicePixelRatio||1,i.pixelRatio)*Q.renderScale*(W.dynScale||1);W.renderer.setPixelRatio(e),W.renderer.setSize(innerWidth,innerHeight),W.lobby&&W.lobby.resize()}window.addEventListener("resize",jr);var Jf=performance.now(),Go=0,vh=0;function Qf(i){requestAnimationFrame(Qf);let e=Math.min(.1,(i-Jf)/1e3);Jf=i;try{W.game?(W.game.update(e),W.game.render()):W.lobby&&(W.lobby.update(e),W.lobby.render())}catch(t){console.error(t),fn("Error de renderizado: "+t.message)}Go+=e,vh++,vn&&cv(e),Go>.5&&(U("fps").textContent=`${Math.round(vh/Go)} FPS \xB7 ${W.net.ping} ms`,Go=0,vh=0)}var Yr=0,Vo=0;function cv(i){if(!W.game||W.game.paused){Yr=0,Vo=0;return}if(Yr+=i,Vo++,Yr<4)return;let e=Vo/Yr;Yr=0,Vo=0;let t=W.dynScale||1;e<26&&t>.55?(W.dynScale=Math.round((t-.1)*100)/100,jr()):e>50&&t<1&&(W.dynScale=Math.min(1,Math.round((t+.05)*100)/100),jr())}function os(i){W.screen=i,U("boot").classList.toggle("hidden",i!=="boot"),U("lobby").classList.toggle("hidden",i!=="lobby"),U("results").classList.toggle("hidden",i!=="results")}function fn(i,e=!1){let t=U("errorToast");t.textContent=i,t.classList.remove("hidden"),t.classList.toggle("ok",e),clearTimeout(fn.t),fn.t=setTimeout(()=>t.classList.add("hidden"),4200)}function Wo(i){ye.click(),U(i).classList.remove("hidden"),i==="settingsModal"&&$o(),i==="helpModal"&&pv()}function qo(){document.querySelectorAll(".modalWrap").forEach(i=>{i.id!=="pause"&&i.classList.add("hidden")})}var at=W.net;at.onStatus=(i,e)=>{let t=U("connDot");t.className=i==="online"?"online":i==="offline"?"offline":"",U("connText").textContent=i==="online"?`Conectado \xB7 ${e} ms`:i==="offline"?"Sin conexi\xF3n \u2014 reintentando\u2026":"Conectando\u2026",W.screen==="boot"&&i==="offline"&&(U("bootText").textContent="Despertando el servidor\u2026 puede tardar hasta un minuto la primera vez.")};at.on("__open",()=>{let i=qs.getItem(Zr)||Jt.getItem(Zr),e=qs.getItem(Mh)||Jt.getItem(Mh);at.send({t:"hello",id:i,token:e,name:Jt.getItem(Xo)||""})});at.on("__close",()=>{W.game&&(sr(!1),fn("Se perdi\xF3 la conexi\xF3n con el servidor.")),W.queue=null,W.party=null,wh(),Sh()});at.on("welcome",i=>{i.duplicate?(bh=!0,qs.setItem(Zr,i.profile.id)):qs.getItem(Zr)?bh=!0:Jt.setItem(Zr,i.profile.id),Yo(i.profile),Jt.getItem(Xo)||Jt.setItem(Xo,i.profile.name),U("onlineText").textContent=`${i.stats.online} en l\xEDnea`,Zo(),W.screen==="boot"&&dv(),i.duplicate&&fn("Este navegador ya ten\xEDa una sesi\xF3n abierta: esta pesta\xF1a usa un perfil de invitado."),Jr&&!Ho?(Ho=!0,at.send({t:"partyJoin",code:Jr}),history.replaceState(null,"",location.pathname)):!Ho&&mf()&&(Ho=!0,at.send({t:"partyCreate"}))});at.on("profile",i=>{Yo(i.profile),Zo()});at.on("online",i=>{U("onlineText").textContent=`${i.online} en l\xEDnea \xB7 ${i.matches} partidas`});at.on("error",i=>{fn(i.msg),ye.dry()});at.on("party",i=>{W.party=i.party,W.party&&(W.mode=W.party.mode),To(W.party?W.party.code:"",!!W.party&&W.party.members.length<4&&!W.game),Sh(),Kr()});at.on("queue",i=>{W.queue=i.active?i:null,wh()});at.on("start",i=>uv(i));at.on("s",i=>{W.game&&W.game.onSnapshot(i)});at.on("result",i=>fv(i));at.on("doubled",i=>{Yo(i.profile),Zo(),U("resDouble").classList.add("hidden"),U("results").classList.contains("hidden"),U("resXpList").insertAdjacentHTML("beforeend",`<div class="xpLine bonus"><span>Bonus por anuncio (\xD72)</span><b>+${i.bonus} XP</b></div>`);let e=i.profile;U("resXpBar").style.width=Math.round(e.levelXp/e.levelNeed*100)+"%",U("resLevel").innerHTML=`Nivel ${e.level} \xB7 ${e.levelXp}/${e.levelNeed} XP`,ye.elimination()});async function hv(){Kf(),U("bootFill").style.width="30%",W.lobby=new Or(W.renderer),U("bootFill").style.width="60%",requestAnimationFrame(Qf),mv(),Rt==="crazygames"||Rt==="poki"||Rt==="playgama"?(await hh(),Jr||(Jr=String(uf()||"").trim().toUpperCase().slice(0,5)),pf(i=>{W.game||at.send({t:"partyJoin",code:i})}),at.connect()):(at.connect(),hh()),ph(W,{showError:fn}),U("bootText").textContent="Conectando con el servidor\u2026"}function dv(){U("bootFill").style.width="100%",U("bootText").textContent=Jr?"\xA1Te han invitado a un equipo!":"\xA1Listo!",U("bootBtn").classList.remove("hidden"),cf(),U("bootBtn").onclick=()=>{ye.init(),ye.click(),ye.startMusic(),Q.fullscreen&&!Rt&&Eh(!0),os("lobby")}}function Zo(){let i=W.profile;i&&(U("pName").textContent=i.name,U("pLevel").textContent=i.level,U("pXp").style.width=Math.round(i.levelXp/i.levelNeed*100)+"%",U("pXpText").textContent=`${i.levelXp}/${i.levelNeed} XP`,U("avatar").style.background=`radial-gradient(circle at 50% 38%, ${i.outfit.skin} 0 34%, ${i.outfit.topColor} 35%)`,W.lobby&&!yh()&&W.lobby.setOutfit(i.outfit),xh())}function Kr(){document.querySelectorAll("#modes .mode").forEach(e=>{e.classList.toggle("active",e.dataset.mode===W.mode);let t=W.party?W.party.members.length:1;e.disabled=W.party&&W.party.leader!==W.profile?.id||On[e.dataset.mode].teamSize<t});let i=W.party&&W.profile&&W.party.leader!==W.profile.id;U("playBtn").disabled=!!i,U("playBtn").textContent=i?"ESPERANDO AL L\xCDDER":"JUGAR",U("playBtn").style.fontSize=i?"22px":""}function Sh(){let i=W.party;if(U("partyNone").classList.toggle("hidden",!!i),U("partyIn").classList.toggle("hidden",!i),!i){W.lobby&&W.lobby.setMates([]),Kr();return}U("partyCodeText").textContent=i.code;let e={lobby:"En el lobby",queue:"Buscando",match:"En partida"};U("partyMembers").innerHTML=i.members.map(n=>`<div class="member"><i style="background:${n.outfit.topColor}"></i>${n.id===i.leader?'<span class="crown">\u265B</span>':""}${rr(n.name)}${n.id===W.profile?.id?" (t\xFA)":""}<small>Nv ${n.level} \xB7 ${e[n.state]||""}</small></div>`).join(""),U("partyHint").textContent=`${i.members.length}/4 \xB7 ${On[i.mode].name}${i.private?" \xB7 privada":""}`;let t=i.leader===W.profile?.id;U("partyPrivate").checked=!!i.private,U("partyPrivate").disabled=!t,U("partyPrivate").parentElement.classList.toggle("disabled",!t),W.lobby&&W.lobby.setMates(i.members.filter(n=>n.id!==W.profile?.id).map(n=>n.outfit))}function wh(){let i=W.queue;if(U("queueInfo").classList.toggle("hidden",!i),U("playBtn").classList.toggle("hidden",!!i),document.querySelectorAll("#modes .mode").forEach(e=>{i&&(e.disabled=!0)}),!i){Kr();return}U("queueTitle").textContent=`Buscando partida \xB7 ${On[i.mode].name}`,U("queueText").textContent=`${i.humans} jugador${i.humans===1?"":"es"} real${i.humans===1?"":"es"} \xB7 empieza en ${i.seconds}s \xB7 el resto ser\xE1n bots`}function jf(i=W.mode){if(ye.init(),ye.click(),Q.fullscreen&&!Rt&&Eh(!0),at.status!=="online")return fn("Sin conexi\xF3n con el servidor.");at.send({t:"queue",mode:i,bots:Q.botLevel})}function uv(i){qo(),W.game&&sr(!1,!0),os("none"),W.queue=null,wh(),ye.init();try{W.game=new Do(W,i)}catch(e){console.error(e),fn("No se pudo iniciar la partida: "+e.message),at.send({t:"leave"}),os("lobby");return}W.currentMode=i.mode,Eo(),To(W.party?W.party.code:"",!1),Q.cameraMode==="follow"&&setTimeout(()=>W.game&&W.game.lockPointer(),50)}function sr(i=!0,e=!1){zr(),W.game&&(W.game.dispose(),W.game=null),i&&at.send({t:"leave"}),e||(os("lobby"),ye.startMusic()),To(W.party?W.party.code:"",!!W.party&&W.party.members.length<4)}function fv(i){W.lastResult=i,zr(),i.profile&&(Yo(i.profile),Zo());let e=W.game;e&&(e.ended=!0,i.won&&(e.setVictoryPose(),ye.victory()),setTimeout(()=>{W.game===e&&(i.won?ye.elimination():ye.defeat(),e.resultShown=!0,document.pointerLockElement&&document.exitPointerLock(),U("pause").classList.add("hidden"),ep(i),os("results"))},i.won?2600:1600))}function ep(i){let e=U("resTitle");e.textContent=i.won?"\xA1VICTORIA!":"DERROTA",e.className="resTitle"+(i.won?"":" defeat");let t=On[i.mode].teamSize>1;U("resSub").textContent=i.won?t?"Tu equipo es el \xFAltimo en pie":`${i.name} es el \xFAltimo superviviente`:`Has quedado en el puesto #${i.placement} de ${t?"los equipos":i.total+" jugadores"}`,U("resPlace").textContent="#"+i.placement,U("resKills").textContent=i.kills,U("resDamage").textContent=i.damage,U("resTime").textContent=Fn(i.survived),U("resXpList").innerHTML=i.xpBreakdown.map(([r,a],o)=>`<div class="xpLine" style="animation-delay:${o*.12}s"><span>${rr(r)}</span><b>+${a}</b></div>`).join("")+`<div class="xpLine xpTotal"><span>Total</span><b>+${i.xp} XP</b></div>`+(i.coins?`<div class="xpLine coinsLine"><span>Monedas ganadas</span><b>\u{1FA99} +${i.coins}</b></div>`:""),i.levelRewards&&i.levelRewards.length&&setTimeout(()=>zo(i.levelRewards),1400);let n=i.profile;U("resXpBar").style.width="0%",setTimeout(()=>{U("resXpBar").style.width=Math.round(n.levelXp/n.levelNeed*100)+"%"},300),U("resLevel").innerHTML=i.levelUp?`<span class="up">\xA1Subes al nivel ${i.levelUp}!</span>`:`Nivel ${n.level} \xB7 ${n.levelXp}/${n.levelNeed} XP`,U("resBoard").innerHTML=i.leaderboard.map((r,a)=>`<div class="boardRow ${r.name===i.name?"me":""}"><span>${a+1}. ${rr(r.name)}</span><span>${r.kills} bajas \xB7 ${r.damage} da\xF1o</span></div>`).join(""),U("resSpectate").classList.toggle("hidden",i.won||!W.game||![...W.game.players.values()].some(r=>r.alive)),U("resDouble").classList.toggle("hidden",!(nr()&&i.xp>0)),U("resDouble").disabled=!1,U("resDouble").onclick=()=>Xr("doublexp",null,U("resDouble"));let s=W.party&&W.party.leader!==W.profile.id;U("resAgain").textContent=s?"Volver con el equipo":"Jugar otra partida"}function pv(){let i=Q.keys;if(vn){U("helpKeys").innerHTML=[["Joystick","Moverse (ll\xE9valo al borde para correr)"],["Deslizar a la derecha","Mover la c\xE1mara"],["\u25CE","Disparar (mant\xE9n y desliza para apuntar)"],["\u231C\u231F","Apuntar"],["\u21BB","Recargar"],["\u270B","Recoger"],["\u21C8","Saltar"],["\xBB","Correr siempre"],["Armas","Toca un arma para cambiar"],["\u{1FA79} / \u271A","Toca para curarte"],["Minimapa","Mapa e informaci\xF3n de partida"],["\u275A\u275A","Pausa"]].map(([e,t])=>`<li><kbd>${rr(e)}</kbd> ${t}</li>`).join("");return}U("helpKeys").innerHTML=[[`${Ct(i.forward)} ${Ct(i.left)} ${Ct(i.back)} ${Ct(i.right)}`,"Moverse"],["Rat\xF3n","C\xE1mara y punter\xEDa"],["Clic izq.","Disparar"],["Clic der.","Apuntar"],[Ct(i.reload),"Recargar"],[Ct(i.interact),"Recoger"],[Ct(i.jump),"Saltar"],[Ct(i.sprint),"Correr"],[`${Ct(i.slot1)} / ${Ct(i.slot2)}`,"Cambiar arma"],[`${Ct(i.bandage)} / ${Ct(i.medkit)}`,"Curarse"],[Ct(i.scoreboard),"Informaci\xF3n de partida"],["Esc","Pausa"]].map(([e,t])=>`<li><kbd>${rr(e)}</kbd> ${t}</li>`).join("")}var Ii=null;function $o(){U("sQuality").value=Q.quality;let i=[1,.85,.7,.5],e=Xn[Q.quality]||Xn.medium,t=Math.min(window.devicePixelRatio||1,e.pixelRatio);U("sScale").innerHTML=i.map(n=>`<option value="${n}">${Math.round(innerWidth*t*n)} \xD7 ${Math.round(innerHeight*t*n)}${n===1?" (nativa)":` (${Math.round(n*100)}%)`}</option>`).join(""),U("sScale").value=String(Q.renderScale),U("sFull").checked=!!document.fullscreenElement,U("sFps").checked=Q.showFps,U("sMaster").value=Q.masterVol,U("sMusic").value=Q.musicVol,U("sSfx").value=Q.sfxVol,U("sSens").value=Q.sensitivity,U("sSensOut").textContent=Q.sensitivity.toFixed(2),U("sInvert").checked=Q.invertY,U("sTSens").value=Q.touchSens,U("sTSensOut").textContent=Q.touchSens.toFixed(2),U("sTSize").value=Q.touchBtnScale,U("sTSizeOut").textContent=Math.round(Q.touchBtnScale*100)+"%",U("sTOp").value=Q.touchOpacity,U("sTOpOut").textContent=Math.round(Q.touchOpacity*100)+"%",U("sTAssist").checked=Q.touchAimAssist,U("sTAutoRun").checked=Q.touchAutoSprint,U("sTAdsToggle").checked=Q.touchAdsToggle,U("sTLeftFire").checked=Q.touchLeftFire,vn&&document.querySelector(".tab.active.desktopOnly")&&document.querySelector('.tab[data-tab="tTouch"]').click(),U("sCamMode").value=Q.cameraMode,U("sCamDist").value=Q.cameraDistance,U("sCamSmooth").value=Q.cameraSmoothing,U("sCamSmoothOut").textContent=Math.round(Q.cameraSmoothing*100)+"%",U("sFov").value=Q.fov,U("sFovOut").textContent=Q.fov+"\xB0",U("keyList").innerHTML=ju.map(([n,s])=>`<div class="keyRow"><span>${s}</span><button class="keyBtn" data-action="${n}">${rr(Ct(Q.keys[n]))}</button></div>`).join(""),document.querySelectorAll(".keyBtn").forEach(n=>n.onclick=()=>{document.querySelectorAll(".keyBtn").forEach(s=>s.classList.remove("listening")),Ii=n.dataset.action,n.classList.add("listening"),n.textContent="Pulsa una tecla\u2026"})}window.addEventListener("keydown",i=>{if(Ii){if(i.preventDefault(),i.stopImmediatePropagation(),i.code!=="Escape"){let e=Object.keys(Q.keys).find(t=>Q.keys[t]===i.code&&t!==Ii);e&&(Q.keys[e]=Q.keys[Ii]),Q.keys[Ii]=i.code,hn()}Ii=null,$o()}},!0);function Eh(i){try{i&&!document.fullscreenElement&&document.documentElement.requestFullscreen?document.documentElement.requestFullscreen({navigationUI:"hide"}).then(()=>{vn&&!Fr&&screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})}).catch(()=>{}):!i&&document.fullscreenElement&&document.exitFullscreen().catch(()=>{})}catch{}}xo(()=>{U("fps").classList.toggle("hidden",!Q.showFps),W.game&&(W.game.camera.fov=Q.fov,W.game.camera.updateProjectionMatrix(),W.game.hud.renderKeys())});function mv(){document.addEventListener("click",r=>{r.target.closest("button")&&ye.click()},!0),window.addEventListener("keydown",r=>{r.code==="Escape"&&!W.game&&($r(),qo())}),document.querySelectorAll("[data-open]").forEach(r=>r.onclick=()=>Wo(r.dataset.open)),U("btnSettingsTop").onclick=()=>Wo("settingsModal"),document.querySelectorAll(".modal .close").forEach(r=>r.onclick=()=>{qo(),Ii=null}),document.querySelectorAll(".modalWrap").forEach(r=>r.addEventListener("mousedown",a=>{a.target===r&&r.id!=="pause"&&(qo(),Ii=null)})),document.querySelectorAll("#modes .mode").forEach(r=>r.onclick=()=>{W.mode=r.dataset.mode,Jt.setItem("islaRoyale.mode",W.mode),W.party&&at.send({t:"partyMode",mode:W.mode}),Kr()}),U("botLevel").value=Q.botLevel,U("botLevel").onchange=()=>{Q.botLevel=U("botLevel").value,hn()},U("playBtn").onclick=()=>jf(),U("cancelBtn").onclick=()=>at.send({t:"cancel"}),U("partyCreate").onclick=()=>at.send({t:"partyCreate"}),U("partyJoin").onclick=()=>{let r=U("partyCode").value.trim();r&&at.send({t:"partyJoin",code:r})},U("partyCode").onkeydown=r=>{r.key==="Enter"&&U("partyJoin").click()},U("partyLeave").onclick=()=>at.send({t:"partyLeave"}),U("partyPrivate").onchange=()=>at.send({t:"partyPrivate",v:U("partyPrivate").checked}),U("partyInvite").onclick=async()=>{let r=wo.ready&&await ff(W.party?.code||"")||`${lo}/?sala=${W.party?.code||""}`,a=()=>fn("Enlace copiado: "+r+" \u2014 p\xE9galo en WhatsApp o Discord",!0);navigator.clipboard?navigator.clipboard.writeText(r).then(a,()=>window.prompt("Copia este enlace:",r)):window.prompt("Copia este enlace:",r)},U("partyCopy").onclick=()=>{navigator.clipboard?.writeText(W.party?.code||"").catch(()=>{}),fn("C\xF3digo copiado: "+(W.party?.code||""))},U("editName").onclick=()=>{U("nameInput").value=W.profile?.name||"",U("nameModal").classList.remove("hidden"),U("nameInput").focus()},U("nameSave").onclick=()=>{let r=U("nameInput").value.trim();if(r.length<2)return fn("El nombre debe tener al menos 2 caracteres.");at.send({t:"setName",name:r}),Jt.setItem(Xo,r),U("nameModal").classList.add("hidden")},U("nameInput").onkeydown=r=>{r.key==="Enter"&&U("nameSave").click()};let i=null;window.addEventListener("pointerdown",r=>{!W.game&&r.target&&r.target.id==="game"&&r.isPrimary&&(i=r.clientX,W.lobby.dragging=!0)}),window.addEventListener("pointermove",r=>{i!==null&&!W.game&&r.isPrimary&&(W.lobby.drag(r.clientX-i),i=r.clientX)});let e=()=>{i=null,W.lobby&&(W.lobby.dragging=!1)};window.addEventListener("pointerup",e),window.addEventListener("pointercancel",e),document.querySelectorAll(".tab").forEach(r=>r.onclick=()=>{document.querySelectorAll(".tab").forEach(a=>a.classList.toggle("active",a===r)),document.querySelectorAll(".tabBody").forEach(a=>a.classList.toggle("hidden",a.id!==r.dataset.tab))}),U("sLang").value=_o,U("sLang").onchange=()=>tf(U("sLang").value),U("sQuality").onchange=()=>{Q.quality=U("sQuality").value,hn(),W.game?fn("La nueva calidad se aplicar\xE1 en la pr\xF3xima partida."):(Kf(),gv()),$o()},U("sScale").onchange=()=>{Q.renderScale=Number(U("sScale").value),hn(),jr()},U("sFull").onchange=()=>{Q.fullscreen=U("sFull").checked,hn(),Eh(Q.fullscreen)},U("sFps").onchange=()=>{Q.showFps=U("sFps").checked,hn()};let t=(r,a,o,l)=>{U(r).oninput=()=>{Q[a]=Number(U(r).value),o&&(U(o).textContent=l(Q[a])),hn()}};t("sMaster","masterVol"),t("sMusic","musicVol"),t("sSfx","sfxVol"),t("sSens","sensitivity","sSensOut",r=>r.toFixed(2)),t("sCamDist","cameraDistance"),t("sCamSmooth","cameraSmoothing","sCamSmoothOut",r=>Math.round(r*100)+"%"),t("sFov","fov","sFovOut",r=>r+"\xB0"),U("sInvert").onchange=()=>{Q.invertY=U("sInvert").checked,hn()};let n=()=>{W.game&&W.game.touch&&W.game.touch.applyLayout()};t("sTSens","touchSens","sTSensOut",r=>r.toFixed(2)),t("sTSize","touchBtnScale","sTSizeOut",r=>Math.round(r*100)+"%"),t("sTOp","touchOpacity","sTOpOut",r=>Math.round(r*100)+"%");for(let r of["sTSize","sTOp"]){let a=U(r).oninput;U(r).oninput=()=>{a(),n()}}let s=(r,a)=>{U(r).onchange=()=>{Q[a]=U(r).checked,hn(),n()}};s("sTAssist","touchAimAssist"),s("sTAutoRun","touchAutoSprint"),s("sTAdsToggle","touchAdsToggle"),s("sTLeftFire","touchLeftFire"),U("sTEdit").onclick=()=>{U("settingsModal").classList.add("hidden"),rf(()=>{n(),Wo("settingsModal")})},U("sCamMode").onchange=()=>{Q.cameraMode=U("sCamMode").value,hn(),W.game&&(W.renderer.domElement.classList.toggle("cursorMode",Q.cameraMode==="cursor"),Q.cameraMode==="cursor"&&document.pointerLockElement&&document.exitPointerLock())},U("resetKeys").onclick=()=>{Q.keys=structuredClone(Ys.keys),Q.sensitivity=Ys.sensitivity,Q.invertY=!1,hn(),$o()},document.addEventListener("fullscreenchange",()=>{U("sFull").checked=!!document.fullscreenElement}),U("resumeBtn").onclick=()=>W.game&&W.game.togglePause(!1),U("pauseSettings").onclick=()=>Wo("settingsModal"),U("leaveBtn").onclick=()=>Uo("abandonar",()=>sr(!0)),U("resLobby").onclick=()=>Uo("volver-lobby",()=>sr(!0)),U("resSpectate").onclick=()=>{os("none"),W.game&&(W.game.resultShown=!1,W.game.pickSpectate(W.game.spectateId))},U("specResults").onclick=()=>{W.lastResult&&W.game?.ended?(W.game.resultShown=!0,ep(W.lastResult),os("results")):fn("Los resultados aparecer\xE1n al terminar tu participaci\xF3n.")},U("specLobby").onclick=()=>sr(!0),U("resAgain").onclick=()=>Uo("otra-partida",()=>{let r=W.currentMode||W.mode;sr(!0),(!W.party||W.party.leader===W.profile.id)&&setTimeout(()=>jf(r),150)}),U("fps").classList.toggle("hidden",!Q.showFps)}function gv(){W.lobby=new Or(W.renderer),W.profile&&W.lobby.setOutfit(W.profile.outfit),Sh()}lo!==location.origin&&(U("legalLink").href=lo+"/privacidad.html");gf&&U("legalLink").remove();Kr();hv().catch(i=>{console.error(i),U("bootText").textContent="Error al iniciar: "+i.message});
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
