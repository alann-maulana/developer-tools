self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
aRC(d){var x=new Float32Array(2)
x[0]=d.a
x[1]=d.b
return x},
aQK(d){return new B.C(d[0],d[1],d[2],d[3])},
aYF(d){return new B.WS()},
aNs(d){return new B.WU()},
aYG(d){return new B.WT()},
aYE(d){return new B.WR()},
aYH(d){return new B.rR()},
aYD(d){return new B.rQ()},
aY1(){var x=new A.aiT(B.a([],y.l))
x.ae7()
return x},
aWR(d){var x=new A.CU(d)
x.mW(null,y.mZ)
return x},
aMd(d){var x=null
return new A.l0(D.ae2,x,x,x,d,x)},
Ca(d){return new A.QL(d)},
aJZ(d,e){var x=new A.nN($,e)
x.adS(d,e)
return x},
aUN(d){++B.b(d,"box").a
return new A.nN(d,null)},
aUO(d,e,f,g,h){var x=g===D.oZ||g===D.Ql,w=J.d(h),v=x?w.azM(h,0,0,{width:w.FY(h),height:w.EE(h),colorType:f,alphaType:d,colorSpace:e}):w.av_(h)
return v==null?null:B.j5(v.buffer,0,v.length)},
bC(){var x=new A.ux(D.jX,D.bj,D.x,C.kw)
x.mW(null,y.jn)
return x},
aUP(d,e){var x,w,v=new A.uy(e)
v.mW(d,y.jt)
x=v.gaW()
w=v.b
J.Ko(x,$.a5V()[w.a])
return v},
xp(){if($.aNt)return
$.bl().gFw().b.push(A.b13())
$.aNt=!0},
aYI(d){A.xp()
if(C.d.v($.Ff,d))return
$.Ff.push(d)},
aYJ(){var x,w
if($.Fg.length===0&&$.Ff.length===0)return
for(x=0;x<$.Fg.length;++x){w=$.Fg[x]
w.f8(0)
w.pb()}C.d.sm($.Fg,0)
for(x=0;x<$.Ff.length;++x)$.Ff[x].aAp(0)
C.d.sm($.Ff,0)},
aBO(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){return new A.AD(e,f,g,h,i,o,n,v,j,k,m,s,w,q,r,t,d,p,u,l)},
aFb(d,e){var x=A.aYE(null)
if(d!=null)x.weight=$.aTJ()[d.a]
return x},
aK_(d){var x,w,v,u=null,t=B.a([],y.dR)
y.mb.a(d)
x=B.a([],y.n)
w=B.a([],y.ep)
v=J.aG2(J.aHw($.bS.c8()),d.a,$.tY.f)
w.push(A.aBO(u,u,u,u,u,u,d.c,u,u,d.d,d.r,d.f,u,d.e,d.w,u,u,u,u,u))
return new A.a8c(v,d,t,x,w)},
aEn(d,e){var x=B.a([],y.s)
if(d!=null)x.push(d)
if(e!=null&&!C.d.jl(e,new A.ay4(d)))C.d.Z(x,e)
C.d.Z(x,$.zE().f)
return x},
b3m(d,e,f,g){var x,w,v,u,t,s,r,q,p=A.aQK(J.a68(d.gaW()))
if(e===0)return p
x=!g.a3a()
if(x)p=A.a5B(g,p)
w=Math.min(e*0.0078125*64,150)
v=1.1*e
u=-e
t=u*0
s=u*-0.75
r=new B.C(p.a-1+(t-w-v)*f,p.b-1+(s-w-v)*f,p.c+1+(t+w+v)*f,p.d+1+(s+w+v)*f)
if(x){q=new B.cm(new Float32Array(16))
if(q.nu(g)!==0)return A.a5B(q,r)
else return r}else return r},
a5C(d,e){var x
if(e.k(0,D.j))return d
x=new B.cm(new Float32Array(16))
x.bZ(d)
x.P8(0,e.a,e.b,0)
return x},
aQw(d,e,f){var x=d.aAL()
if(f!=null)A.aF7(x,A.a5C(f,e).a)
return x},
aUo(d,e,f){var x=B.d2("flt-canvas",null),w=B.a([],y.j),v=B.bt(),u=d.a,t=d.c-u,s=A.a7j(t),r=d.b,q=d.d-r,p=A.a7i(q)
q=new A.a7T(A.a7j(t),A.a7i(q),f,B.a([],y.ni),B.f2())
v=new A.m6(d,x,q,w,s,p,v,f,e)
p=x.style
p.position="absolute"
v.z=C.e.ek(u)-1
v.Q=C.e.ek(r)-1
v.a_5()
q.z=y.A.a(x)
v.YV()
return v},
a7j(d){return C.e.eh((d+1)*B.bt())+2},
a7i(d){return C.e.eh((d+1)*B.bt())+2},
aUp(d){C.Qm.cn(d)},
ayP(d){if(d==null)return null
switch(d.a){case 3:return"source-over"
case 5:return"source-in"
case 7:return"source-out"
case 9:return"source-atop"
case 4:return"destination-over"
case 6:return"destination-in"
case 8:return"destination-out"
case 10:return"destination-atop"
case 12:return"lighten"
case 1:return"copy"
case 11:return"xor"
case 24:case 13:return"multiply"
case 14:return"screen"
case 15:return"overlay"
case 16:return"darken"
case 17:return"lighten"
case 18:return"color-dodge"
case 19:return"color-burn"
case 20:return"hard-light"
case 21:return"soft-light"
case 22:return"difference"
case 23:return"exclusion"
case 25:return"hue"
case 26:return"saturation"
case 27:return"color"
case 28:return"luminosity"
default:throw B.c(B.ch("Flutter Web does not support the blend mode: "+d.j(0)))}},
aQf(d){switch(d.a){case 0:return D.ak_
case 3:return D.ak0
case 5:return D.ak1
case 7:return D.ak3
case 9:return D.ak4
case 4:return D.ak5
case 6:return D.ak6
case 8:return D.ak7
case 10:return D.ak8
case 12:return D.ak9
case 1:return D.aka
case 11:return D.ak2
case 24:case 13:return D.akj
case 14:return D.akk
case 15:return D.akn
case 16:return D.akl
case 17:return D.akm
case 18:return D.ako
case 19:return D.akp
case 20:return D.akq
case 21:return D.akc
case 22:return D.akd
case 23:return D.ake
case 25:return D.akf
case 26:return D.akg
case 27:return D.akh
case 28:return D.aki
default:return D.akb}},
b57(d){switch(d.a){case 0:return"butt"
case 1:return"round"
case 2:default:return"square"}},
b58(d){switch(d.a){case 1:return"round"
case 2:return"bevel"
case 0:default:return"miter"}},
aEb(b1,b2,b3,b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2="absolute",a3="hidden",a4="transform-origin",a5="transform",a6="border-radius",a7="transform-style",a8=y.j,a9=B.a([],a8),b0=b1.length
for(x=null,w=null,v=0;v<b0;++v,w=a1){u=b1[v]
t=document
s=t.createElement("div")
r=s.style
r.position=a2
r=$.cO()
if(r===C.aa){r=s.style
r.zIndex="0"}if(x==null)x=s
else w.appendChild(s)
q=u.a
p=u.d
r=p.a
o=B.aA5(r)
if(q!=null){n=q.a
m=q.b
r=new Float32Array(16)
l=new B.cm(r)
l.bZ(p)
l.b0(0,n,m)
k=s.style
k.overflow=a3
j=q.c
k.width=B.e(j-n)+"px"
j=q.d
k.height=B.e(j-m)+"px"
k=s.style
j=C.h.aq(k,a4)
k.setProperty(j,"0 0 0","")
i=B.jy(r)
r=C.h.aq(k,a5)
k.setProperty(r,i,"")
p=l}else{k=u.b
if(k!=null){r=k.e
j=k.r
h=k.x
g=k.z
n=k.a
m=k.b
f=new Float32Array(16)
l=new B.cm(f)
l.bZ(p)
l.b0(0,n,m)
e=s.style
d=C.h.aq(e,a6)
e.setProperty(d,B.e(r)+"px "+B.e(j)+"px "+B.e(h)+"px "+B.e(g)+"px","")
e.overflow=a3
r=k.c
e.width=B.e(r-n)+"px"
r=k.d
e.height=B.e(r-m)+"px"
r=s.style
k=C.h.aq(r,a4)
r.setProperty(k,"0 0 0","")
i=B.jy(f)
k=C.h.aq(r,a5)
r.setProperty(k,i,"")
p=l}else{k=u.c
if(k!=null){j=k.a
if((j.at?j.CW:-1)!==-1){a0=k.f4(0)
n=a0.a
m=a0.b
r=new Float32Array(16)
l=new B.cm(r)
l.bZ(p)
l.b0(0,n,m)
k=s.style
k.overflow=a3
k.width=B.e(a0.c-n)+"px"
k.height=B.e(a0.d-m)+"px"
j=C.h.aq(k,a6)
k.setProperty(j,"50%","")
k=s.style
j=C.h.aq(k,a4)
k.setProperty(j,"0 0 0","")
i=B.jy(r)
r=C.h.aq(k,a5)
k.setProperty(r,i,"")
p=l}else{j=s.style
i=B.jy(r)
r=C.h.aq(j,a5)
j.setProperty(r,i,"")
r=C.h.aq(j,a4)
j.setProperty(r,"0 0 0","")
a9.push(A.aQr(s,k))}}}}a1=t.createElement("div")
t=a1.style
t.position=a2
t=new Float32Array(16)
r=new B.cm(t)
r.bZ(p)
r.nu(r)
r=a1.style
k=C.h.aq(r,a4)
r.setProperty(k,"0 0 0","")
i=B.jy(t)
t=C.h.aq(r,a5)
r.setProperty(t,i,"")
if(o===C.jp){t=s.style
r=C.h.aq(t,a7)
t.setProperty(r,"preserve-3d","")
t=a1.style
r=C.h.aq(t,a7)
t.setProperty(r,"preserve-3d","")}s.appendChild(a1)}t=x.style
t.position=a2
w.appendChild(b2)
A.aF7(b2,A.a5C(b4,b3).a)
a8=B.a([x],a8)
C.d.Z(a8,a9)
return a8},
b4u(d){var x,w
if(d!=null){x=d.goc()
w=$.dm().w
return"blur("+B.e(x*(w==null?B.bt():w))+"px)"}else return"none"},
aQr(d,e){var x,w=e.f4(0),v=w.c,u=w.d,t=A.aF1(e,0,0,1/v,1/u)
A.azY(d,"url(#svgClip"+$.JF+")")
x=d.style
x.width=B.e(v)+"px"
x.height=B.e(u)+"px"
return t},
xF(){var x=y.y.a($.aFO().cloneNode(!1)),w=y.dG.a(y.T.a(C.c2.kV(document,"http://www.w3.org/2000/svg","filter"))),v=$.aNL+1
$.aNL=v
v="_fcf"+v
w.id=v
w.filterUnits.baseVal=2
w.x.baseVal.valueAsString="0%"
w.y.baseVal.valueAsString="0%"
w.width.baseVal.valueAsString="100%"
w.height.baseVal.valueAsString="100%"
return new A.aoW(v,x,w)},
aPi(d,e,f){var x="flood",w="SourceGraphic",v=A.xF(),u=B.d4(d)
v.q9(u==null?"":u,"1",x)
u=e.b
if(f)v.Qr(w,x,u)
else v.Qr(x,w,u)
return v.bQ(0)},
JO(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=document.createElement(f)
y.A.a(j)
x=e.b===D.ax
w=e.c
if(w==null)w=0
v=d.a
u=d.c
t=Math.min(v,u)
s=Math.max(v,u)
u=d.b
v=d.d
r=Math.min(u,v)
q=Math.max(u,v)
if(g.rQ(0))if(x){v=w/2
p="translate("+B.e(t-v)+"px, "+B.e(r-v)+"px)"}else p="translate("+B.e(t)+"px, "+B.e(r)+"px)"
else{v=new Float32Array(16)
o=new B.cm(v)
o.bZ(g)
if(x){u=w/2
o.b0(0,t-u,r-u)}else o.b0(0,t,r)
p=B.jy(v)}n=j.style
n.position="absolute"
C.h.b1(n,C.h.aq(n,"transform-origin"),"0 0 0","")
C.h.b1(n,C.h.aq(n,"transform"),p,"")
v=e.r
if(v==null)m="#000000"
else{v=B.d4(v)
v.toString
m=v}v=e.x
if(v!=null){l=v.goc()
v=$.cO()
if(v===C.aa&&!x){C.h.b1(n,C.h.aq(n,"box-shadow"),"0px 0px "+B.e(l*2)+"px "+m,"")
v=e.r
if(v==null)v=D.x
v=B.d4(new B.W(((C.e.be((1-Math.min(Math.sqrt(l)/6.283185307179586,1))*(v.gn(v)>>>24&255))&255)<<24|v.gn(v)&16777215)>>>0))
v.toString
m=v}else C.h.b1(n,C.h.aq(n,"filter"),"blur("+B.e(l)+"px)","")}v=s-t
if(x){n.width=B.e(v-w)+"px"
n.height=B.e(q-r-w)+"px"
v=A.np(w)
n.border=v+" solid "+m}else{n.width=B.e(v)+"px"
n.height=B.e(q-r)+"px"
n.backgroundColor=m
k=A.b1h(e.w,d)
v=k!==""?"url('"+k+"'":""
n.backgroundImage=v}return j},
b1h(d,e){if(d!=null)if(y.q.b(d))return B.bZ(d.a13(e,1,!0))
return""},
aQd(d,e){var x,w,v=e.e,u=e.r
if(v===u){x=e.z
if(v===x){w=e.x
x=v===w&&v===e.f&&u===e.w&&x===e.Q&&w===e.y}else x=!1}else x=!1
if(x){v=A.np(e.z)
C.h.b1(d,C.h.aq(d,"border-radius"),v,"")
return}v=A.np(v)
x=A.np(e.f)
C.h.b1(d,C.h.aq(d,"border-top-left-radius"),v+" "+x,"")
u=A.np(u)
x=A.np(e.w)
C.h.b1(d,C.h.aq(d,"border-top-right-radius"),u+" "+x,"")
x=A.np(e.z)
u=A.np(e.Q)
C.h.b1(d,C.h.aq(d,"border-bottom-left-radius"),x+" "+u,"")
u=A.np(e.x)
x=A.np(e.y)
C.h.b1(d,C.h.aq(d,"border-bottom-right-radius"),u+" "+x,"")},
np(d){return C.e.aj(d===0?1:d,3)+"px"},
aRh(d,e,f,g){var x,w,v,u,t="fill",s=A.aNM()
s.setAttribute("width",f+"px")
s.setAttribute("height",g+"px")
s.setAttribute("viewBox","0 0 "+f+" "+g)
x=y.m.a(y.T.a(C.c2.kV(document,"http://www.w3.org/2000/svg","path")))
s.appendChild(x)
w=e.r
v=w==null
if(v)w=D.x
u=e.b
if(u!==D.ax)if(u!==D.bj){u=e.c
u=u!==0&&u!=null}else u=!1
else u=!0
if(u){v=B.d4(w)
v.toString
x.setAttribute("stroke",v)
v=e.c
x.setAttribute("stroke-width",B.e(v==null?1:v))
x.setAttribute(t,"none")}else if(!v){v=B.d4(w)
v.toString
x.setAttribute(t,v)}else x.setAttribute(t,"#000000")
if(d.b===D.j1)x.setAttribute("fill-rule","evenodd")
x.setAttribute("d",A.aRg(d.a,0,0))
return s},
aBR(d,e,f){var x,w,v,u,t,s,r
if(0===e){f.push(new B.n(d.c,d.d))
f.push(new B.n(d.e,d.f))
return}x=new A.ZG()
d.UL(x)
w=x.a
w.toString
v=x.b
v.toString
u=d.b
t=d.f
if(A.eq(u,d.d,t)){s=w.f
if(!A.eq(u,s,t))r=w.f=v.b=Math.abs(s-u)<Math.abs(s-t)?u:t
else r=s
if(!A.eq(u,w.d,r))w.d=u
if(!A.eq(v.b,v.d,t))v.d=t}--e
A.aBR(w,e,f)
A.aBR(v,e,f)},
aV0(d,e,f,g,h){var x=e*g
return((f-2*x+d)*h+2*(x-d))*h+d},
aV_(d,e){var x=2*(d-1)
return(-x*e+x)*e+1},
aQh(d,e){var x,w,v,u,t,s=d[1],r=d[3],q=d[5],p=new A.mJ()
p.nG(d[7]-s+3*(r-q),2*(s-r-r+q),r-s)
x=p.a
if(x==null)w=B.a([],y.n)
else{v=p.b
u=y.n
w=v==null?B.a([x],u):B.a([x,v],u)}if(w.length===0)return 0
A.b0G(w,d,e)
t=w.length
if(t>0){x=e[7]
e[9]=x
e[5]=x
if(t===2){x=e[13]
e[15]=x
e[11]=x}}return t},
b0G(a8,a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=a8.length
if(0===a7)for(x=0;x<8;++x)b0[x]=a9[x]
else{w=a8[0]
for(v=a7-1,u=0,x=0;x<a7;x=a6,u=l){t=a9[u+7]
s=a9[u]
r=u+1
q=a9[r]
p=a9[u+2]
o=a9[u+3]
n=a9[u+4]
m=a9[u+5]
l=u+6
k=a9[l]
j=1-w
i=s*j+p*w
h=q*j+o*w
g=p*j+n*w
f=o*j+m*w
e=n*j+k*w
d=m*j+t*w
a0=i*j+g*w
a1=h*j+f*w
a2=g*j+e*w
a3=f*j+d*w
b0[u]=s
a4=r+1
b0[r]=q
a5=a4+1
b0[a4]=i
a4=a5+1
b0[a5]=h
a5=a4+1
b0[a4]=a0
a4=a5+1
b0[a5]=a1
a5=a4+1
b0[a4]=a0*j+a2*w
a4=a5+1
b0[a5]=a1*j+a3*w
a5=a4+1
b0[a4]=a2
a4=a5+1
b0[a5]=a3
a5=a4+1
b0[a4]=e
a4=a5+1
b0[a5]=d
b0[a4]=k
b0[a4+1]=t
if(x===v)break
a6=x+1
r=a8[a6]
j=a8[x]
w=A.a5D(r-j,1-j)
if(w==null){v=a9[l+3]
b0[l+6]=v
b0[l+5]=v
b0[l+4]=v
break}}}},
aQi(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=d[1+e]-f,m=d[3+e]-f,l=d[5+e]-f,k=d[7+e]-f
if(n<0){if(k<0)return null
x=0
w=1}else{if(!(n>0))return 0
x=1
w=0}v=m-n
u=l-m
t=k-l
do{s=(w+x)/2
r=n+v*s
q=m+u*s
p=r+(q-r)*s
o=p+(q+(l+t*s-q)*s-p)*s
if(o===0)return s
if(o<0)x=s
else w=s}while(Math.abs(w-x)>0.0000152587890625)
return(x+w)/2},
aQA(d,e,f,g,h){return(((g+3*(e-f)-d)*h+3*(f-e-e+d))*h+3*(e-d))*h+d},
aDs(){var x=new A.rV(A.aMD(),D.cs)
x.Yt()
return x},
b0u(d,e,f){var x
if(0===f)x=0===e||360===e
else x=!1
if(x)return new B.n(d.c,d.gbD().b)
return null},
axO(d,e,f,g){var x=d+e
if(x<=f)return g
return Math.min(f/x,g)},
aMC(d,e){var x=new A.ai8(d,!0,d.w)
if(d.Q)d.HW()
if(!d.as)x.z=d.w
return x},
aMD(){var x=new Float32Array(16)
x=new A.ws(x,new Uint8Array(8))
x.e=x.c=8
x.CW=172
return x},
aXt(d,e,f){var x,w,v=d.d,u=d.c,t=new Float32Array(u*2),s=d.f,r=v*2
for(x=0;x<r;x+=2){t[x]=s[x]+e
w=x+1
t[w]=s[w]+f}return t},
aRg(d,e,f){var x,w,v,u,t,s,r,q,p=new B.bD(""),o=new A.rl(d)
o.ul(d)
x=new Float32Array(8)
for(;w=o.hW(0,x),w!==6;)switch(w){case 0:p.a+="M "+B.e(x[0]+e)+" "+B.e(x[1]+f)
break
case 1:p.a+="L "+B.e(x[2]+e)+" "+B.e(x[3]+f)
break
case 4:p.a+="C "+B.e(x[2]+e)+" "+B.e(x[3]+f)+" "+B.e(x[4]+e)+" "+B.e(x[5]+f)+" "+B.e(x[6]+e)+" "+B.e(x[7]+f)
break
case 2:p.a+="Q "+B.e(x[2]+e)+" "+B.e(x[3]+f)+" "+B.e(x[4]+e)+" "+B.e(x[5]+f)
break
case 3:v=d.y[o.b]
u=new A.hE(x[0],x[1],x[2],x[3],x[4],x[5],v).P4()
t=u.length
for(s=1;s<t;s+=2){r=u[s]
q=u[s+1]
p.a+="Q "+B.e(r.a+e)+" "+B.e(r.b+f)+" "+B.e(q.a+e)+" "+B.e(q.b+f)}break
case 5:p.a+="Z"
break
default:throw B.c(B.ch("Unknown path verb "+w))}r=p.a
return r.charCodeAt(0)==0?r:r},
eq(d,e,f){return(d-e)*(f-e)<=0},
aYk(d){var x
if(d<0)x=-1
else x=d>0?1:0
return x},
a5D(d,e){var x
if(d<0){d=-d
e=-e}if(e===0||d===0||d>=e)return null
x=d/e
if(isNaN(x))return null
if(x===0)return null
return x},
b4k(d){var x,w,v=d.e,u=d.r
if(v+u!==d.c-d.a)return!1
x=d.f
w=d.w
if(x+w!==d.d-d.b)return!1
if(v!==d.z||u!==d.x||x!==d.Q||w!==d.y)return!1
return!0},
aNr(d,e,f,g,h,i){return new A.an1(h-2*f+d,i-2*g+e,2*(f-d),2*(g-e),d,e)},
aia(d,e,f,g,h,i){if(g===i)return A.eq(f,d,h)&&d!==h
else return d===f&&e===g},
aXu(d){var x,w,v,u,t=d[0],s=d[1],r=d[2],q=d[3],p=d[4],o=d[5],n=s-q,m=A.a5D(n,n-q+o)
if(m!=null){x=t+m*(r-t)
w=s+m*(q-s)
v=r+m*(p-r)
u=q+m*(o-q)
d[2]=x
d[3]=w
d[4]=x+m*(v-x)
d[5]=w+m*(u-w)
d[6]=v
d[7]=u
d[8]=p
d[9]=o
return 1}d[3]=Math.abs(n)<Math.abs(q-o)?s:o
return 0},
aME(d){var x=d[1],w=d[3],v=d[5]
if(x===w)return!0
if(x<w)return w<=v
else return w>=v},
b5d(d,e,f,g){var x,w,v,u,t=d[1],s=d[3]
if(!A.eq(t,f,s))return
x=d[0]
w=d[2]
if(!A.eq(x,e,w))return
v=w-x
u=s-t
if(!(Math.abs((e-x)*u-v*(f-t))<0.000244140625))return
g.push(new B.n(v,u))},
b5e(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n=d[1],m=d[3],l=d[5]
if(!A.eq(n,f,m)&&!A.eq(m,f,l))return
x=d[0]
w=d[2]
v=d[4]
if(!A.eq(x,e,w)&&!A.eq(w,e,v))return
u=new A.mJ()
t=u.nG(n-2*m+l,2*(m-n),n-f)
for(s=v-2*w+x,r=2*(w-x),q=0;q<t;++q){if(q===0){p=u.a
p.toString
o=p}else{p=u.b
p.toString
o=p}if(!(Math.abs(e-((s*o+r)*o+x))<0.000244140625))continue
g.push(A.b16(x,n,w,m,v,l,o))}},
b16(d,e,f,g,h,i,j){var x,w,v
if(!(j===0&&d===f&&e===g))x=j===1&&f===h&&g===i
else x=!0
if(x)return new B.n(h-d,i-e)
w=f-d
v=g-e
return new B.n(((h-f-w)*j+w)*2,((i-g-v)*j+v)*2)},
b5b(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=d[1],j=d[3],i=d[5]
if(!A.eq(k,f,j)&&!A.eq(j,f,i))return
x=d[0]
w=d[2]
v=d[4]
if(!A.eq(x,e,w)&&!A.eq(w,e,v))return
u=j*g-f*g+f
t=new A.mJ()
s=t.nG(i+(k-2*u),2*(u-k),k-f)
for(r=w*g,q=v-2*r+x,u=2*(r-x),p=2*(g-1),o=-p,n=0;n<s;++n){if(n===0){m=t.a
m.toString
l=m}else{m=t.b
m.toString
l=m}if(!(Math.abs(e-((q*l+u)*l+x)/((o*l+p)*l+1))<0.000244140625))continue
h.push(new A.hE(x,k,w,j,v,i,g).avg(l))}},
b5c(d,e,f,g){var x,w,v,u,t,s,r,q,p,o=d[7],n=d[1],m=d[3],l=d[5]
if(!A.eq(n,f,m)&&!A.eq(m,f,l)&&!A.eq(l,f,o))return
x=d[0]
w=d[2]
v=d[4]
u=d[6]
if(!A.eq(x,e,w)&&!A.eq(w,e,v)&&!A.eq(v,e,u))return
t=new Float32Array(20)
s=A.aQh(d,t)
for(r=0;r<=s;++r){q=r*6
p=A.aQi(t,q,f)
if(p==null)continue
if(!(Math.abs(e-A.aQA(t[q],t[q+2],t[q+4],t[q+6],p))<0.000244140625))continue
g.push(A.b15(t,q,p))}},
b15(d,e,f){var x,w,v,u,t=d[7+e],s=d[1+e],r=d[3+e],q=d[5+e],p=d[e],o=d[2+e],n=d[4+e],m=d[6+e],l=f===0
if(!(l&&p===o&&s===r))x=f===1&&n===m&&q===t
else x=!0
if(x){if(l){w=n-p
v=q-s}else{w=m-o
v=t-r}if(w===0&&v===0){w=m-p
v=t-s}return new B.n(w,v)}else{u=A.aNr(m+3*(o-n)-p,t+3*(r-q)-s,2*(n-2*o+p),2*(q-2*r+s),o-p,r-s)
return new B.n(u.a1S(f),u.a1T(f))}},
aF1(d,e,f,g,h){var x,w,v,u,t,s,r,q="http://www.w3.org/2000/svg"
$.JF=$.JF+1
x=y.y.a($.aFO().cloneNode(!1))
w=document
v=y.T
u=y.d4.a(v.a(C.c2.kV(w,q,"defs")))
x.appendChild(u)
t=$.JF
s=y.ph.a(v.a(C.c2.kV(w,q,"clipPath")))
u.appendChild(s)
s.id="svgClip"+t
r=y.m.a(v.a(C.c2.kV(w,q,"path")))
s.appendChild(r)
r.setAttribute("fill","#FFFFFF")
w=$.cO()
if(w!==C.dd){s.setAttribute("clipPathUnits","objectBoundingBox")
r.setAttribute("transform","scale("+B.e(g)+", "+B.e(h)+")")}r.setAttribute("d",A.aRg(y.H.a(d).a,e,f))
return x},
aRo(){var x,w,v,u=$.ns.length
for(x=0;x<u;++x){w=$.ns[x].d
v=$.cO()
if(v===C.aa&&w.y!=null){v=w.y
v.height=0
v.width=0}w.UP()}C.d.sm($.ns,0)},
a5i(d){if(d!=null&&C.d.v($.ns,d))return
if(d instanceof A.m6){d.b=null
if(d.y===B.bt()){$.ns.push(d)
if($.ns.length>30)C.d.fF($.ns,0).d.p(0)}else d.d.p(0)}},
aie(d,e){if(d<=0)return e*0.1
else return Math.min(Math.max(e*0.5,d*10),e)},
b0J(a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
if(a5==null||a5.a3a())return 1
x=a5.a
w=x[12]
v=x[15]
u=w*v
t=x[13]
s=t*v
r=x[3]
q=r*a6
p=x[7]
o=p*a7
n=1/(q+o+v)
m=x[0]
l=m*a6
k=x[4]
j=k*a7
i=(l+j+w)*n
h=x[1]
g=h*a6
f=x[5]
e=f*a7
d=(g+e+t)*n
a0=Math.min(u,i)
a1=Math.max(u,i)
a2=Math.min(s,d)
a3=Math.max(s,d)
n=1/(r*0+o+v)
i=(m*0+j+w)*n
d=(h*0+e+t)*n
u=Math.min(a0,i)
a1=Math.max(a1,i)
s=Math.min(a2,d)
a3=Math.max(a3,d)
n=1/(q+p*0+v)
i=(l+k*0+w)*n
d=(g+f*0+t)*n
u=Math.min(u,i)
a1=Math.max(a1,i)
s=Math.min(s,d)
a4=Math.min((a1-u)/a6,(Math.max(a3,d)-s)/a7)
if(a4<1e-9||a4===1)return 1
if(a4>1){a4=Math.min(4,C.e.eh(a4/2)*2)
w=a6*a7
if(w*a4*a4>4194304&&a4>2)a4=3355443.2/w}else a4=Math.max(2/C.e.ek(2/a4),0.0001)
return a4},
tU(d,e){var x=d<0?0:d,w=e<0?0:e
return x*x+w*w},
JH(d){var x=d.a.x,w=x!=null?0+x.goc()*2:0,v=d.a.c,u=v==null
if((u?0:v)!==0)w+=(u?0:v)*0.70710678118
return w},
b3i(d){var x,w,v,u=$.azM,t=u.length
if(t!==0)try{if(t>1)C.d.ec(u,new A.ayX())
for(u=$.azM,t=u.length,w=0;w<u.length;u.length===t||(0,B.F)(u),++w){x=u[w]
x.ayD()}}finally{$.azM=B.a([],y.B)}u=$.aF5
t=u.length
if(t!==0){for(v=0;v<t;++v)u[v].c=D.aT
$.aF5=B.a([],y.g)}for(u=$.lZ,v=0;v<u.length;++v)u[v].a=null
$.lZ=B.a([],y.eK)},
UP(d){var x,w,v=d.x,u=v.length
for(x=0;x<u;++x){w=v[x]
if(w.c===D.aT)w.jX()}},
a5A(d){var x=new Float32Array(16)
x[15]=d[15]
x[14]=d[14]
x[13]=d[13]
x[12]=d[12]
x[11]=d[11]
x[10]=d[10]
x[9]=d[9]
x[8]=d[8]
x[7]=d[7]
x[6]=d[6]
x[5]=d[5]
x[4]=d[4]
x[3]=d[3]
x[2]=d[2]
x[1]=d[1]
x[0]=d[0]
return x},
b5t(d,e){var x,w=document.createElement("CANVAS")
if(w==null)return null
try{w.width=d
w.height=e}catch(x){return null}return w},
b3l(d){if(d===0)return D.j
return new B.n(200*d/600,400*d/600)},
aQn(d,e){if(e===0)return null
return new A.aoT(Math.min(e*((800+(d.c-d.a)*0.5)/600),e*((800+(d.d-d.b)*0.5)/600)),A.b3l(e))},
aEE(d,e,f,g){var x,w,v,u,t="box-shadow",s=A.aQn(e,f)
if(s==null){x=d.style
C.h.b1(x,C.h.aq(x,t),"none","")}else{g=A.aRA(g)
x=d.style
w=s.b
v=s.a
u=g.a
C.h.b1(x,C.h.aq(x,t),B.e(w.a)+"px "+B.e(w.b)+"px "+B.e(v)+"px 0px rgba("+(u>>>16&255)+", "+(u>>>8&255)+", "+(u&255)+", "+B.e((u>>>24&255)/255)+")","")}},
aRA(d){var x=d.a
return new B.W(((C.e.be(0.3*(x>>>24&255))&255)<<24|x&16777215)>>>0)},
aCB(d,e,f,g,h,i){return new A.afY(B.a([],y.in),B.a([],y.i0),h,d,e,i,g,f,i)},
b4x(d,e,f){var x=A.b2f(d,e,f)
if(x.a>f)return new A.eE(f,Math.min(f,x.b),Math.min(f,x.c),D.cN)
return x},
b2f(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=B.a5r(d,a0),g=B.aQy().wo(h),f=g===C.hM?C.hJ:null,e=g===C.kR
if(g===C.kN||e)g=C.bJ
for(x=d.length,w=y.oR,v=y.S,u=y.eZ,t=a0,s=t,r=null,q=0;a0<x;e=k,r=g,g=l){if(a0>a1)return new A.eE(a1,Math.min(a1,t),Math.min(a1,s),D.cN)
p=g===C.kV
q=p?q+1:0
a0=(h!=null&&h>65535?a0+1:a0)+1
o=g===C.hM
n=!o
if(n)f=null
h=B.a5r(d,a0)
m=$.ayg
l=(m==null?$.ayg=new B.ly(B.aEy("00000008A0009!B000a!C000b000cD000d!E000e000vA000w!F000x!G000y!H000z!I0010!J0011!K0012!I0013!H0014!L0015!M0016!I0017!J0018!N0019!O001a!N001b!P001c001lQ001m001nN001o001qI001r!G001s002iI002j!L002k!J002l!M002m003eI003f!L003g!B003h!R003i!I003j003oA003p!D003q004fA004g!S004h!L004i!K004j004lJ004m004qI004r!H004s!I004t!B004u004vI004w!K004x!J004y004zI0050!T00510056I0057!H0058005aI005b!L005c00jrI00js!T00jt00jvI00jw!T00jx00keI00kf!T00kg00lbI00lc00niA00nj!S00nk00nvA00nw00o2S00o300ofA00og00otI00ou!N00ov00w2I00w300w9A00wa013cI013d!N013e!B013h013iI013j!J013l014tA014u!B014v!A014w!I014x014yA014z!I01500151A0152!G0153!A015c0162U0167016aU016b016wI016x016zK01700171N01720173I0174017eA017f!G017g!A017i017jG017k018qI018r019bA019c019lQ019m!K019n019oQ019p019rI019s!A019t01cjI01ck!G01cl!I01cm01csA01ct01cuI01cv01d0A01d101d2I01d301d4A01d5!I01d601d9A01da01dbI01dc01dlQ01dm01e8I01e9!A01ea01f3I01f401fuA01fx01idI01ie01ioA01ip!I01j401jdQ01je01kaI01kb01kjA01kk01knI01ko!N01kp!G01kq!I01kt!A01ku01kvJ01kw01lhI01li01llA01lm!I01ln01lvA01lw!I01lx01lzA01m0!I01m101m5A01m801ncI01nd01nfA01ni01qfI01qr01r5A01r6!I01r701s3A01s401tlI01tm01toA01tp!I01tq01u7A01u8!I01u901ufA01ug01upI01uq01urA01us01utB01uu01v3Q01v401vkI01vl01vnA01vp01x5I01x8!A01x9!I01xa01xgA01xj01xkA01xn01xpA01xq!I01xz!A01y401y9I01ya01ybA01ye01ynQ01yo01ypI01yq01yrK01ys01ywI01yx!K01yy!I01yz!J01z001z1I01z2!A01z501z7A01z9020pI020s!A020u020yA02130214A02170219A021d!A021l021qI021y0227Q02280229A022a022cI022d!A022e!I022p022rA022t0249I024c!A024d!I024e024lA024n024pA024r024tA024w025dI025e025fA025i025rQ025s!I025t!J0261!I02620267A0269026bA026d027tI027w!A027x!I027y0284A02870288A028b028dA028l028nA028s028xI028y028zA0292029bQ029c029jI029u!A029v02bdI02bi02bmA02bq02bsA02bu02bxA02c0!I02c7!A02cm02cvQ02cw02d4I02d5!J02d6!I02dc02dgA02dh02f1I02f202f8A02fa02fcA02fe02fhA02fp02fqA02fs02g1I02g202g3A02g602gfQ02gn!T02go02gwI02gx02gzA02h0!T02h102ihI02ik!A02il!I02im02isA02iu02iwA02iy02j1A02j902jaA02ji02jlI02jm02jnA02jq02jzQ02k102k2I02kg02kjA02kk02m2I02m302m4A02m5!I02m602mcA02me02mgA02mi02mlA02mm02muI02mv!A02mw02n5I02n602n7A02na02njQ02nk02nsI02nt!K02nu02nzI02o102o3A02o502pyI02q2!A02q702qcA02qe!A02qg02qnA02qu02r3Q02r602r7A02r802t6I02tb!J02tc02trI02ts02u1Q02u202u3B02v502x9I02xc02xlQ02xo02yoI02yp02ysT02yt!I02yu02yvT02yw!S02yx02yyT02yz!B02z0!S02z102z5G02z6!S02z7!I02z8!G02z902zbI02zc02zdA02ze02zjI02zk02ztQ02zu0303I0304!B0305!A0306!I0307!A0308!I0309!A030a!L030b!R030c!L030d!R030e030fA030g031oI031t0326A0327!B0328032cA032d!B032e032fA032g032kI032l032vA032x033wA033y033zB03400345I0346!A0347034fI034g034hT034i!B034j!T034k034oI034p034qS035s037jI037k037tQ037u037vB037w039rI039s03a1Q03a203cvI03cw03fjV03fk03hjW03hk03jzX03k003tmI03tp03trA03ts!I03tt!B03tu03y5I03y8!B03y904fzI04g0!B04g104gqI04gr!L04gs!R04gw04iyI04iz04j1B04j204k1I04k204k4A04kg04kxI04ky04l0A04l104l2B04lc04ltI04lu04lvA04m804moI04mq04mrA04n404pfI04pg04phB04pi!Y04pj!I04pk!B04pl!I04pm!B04pn!J04po04ppI04ps04q1Q04q804qpI04qq04qrG04qs04qtB04qu!T04qv!I04qw04qxG04qy!I04qz04r1A04r2!S04r404rdQ04rk04ucI04ud04ueA04uf04vcI04vd!A04ve04ymI04yo04yzA04z404zfA04zk!I04zo04zpG04zq04zzQ0500053dI053k053tQ053u055iI055j055nA055q058cI058f!A058g058pQ058w0595Q059c059pI059s05a8A05c005c4A05c505dfI05dg05dwA05dx05e3I05e805ehQ05ei05ejB05ek!I05el05eoB05ep05eyI05ez05f7A05f805fgI05fk05fmA05fn05ggI05gh05gtA05gu05gvI05gw05h5Q05h605idI05ie05irA05j005k3I05k405knA05kr05kvB05kw05l5Q05l905lbI05lc05llQ05lm05mlI05mm05mnB05mo05onI05ow05oyA05oz!I05p005pkA05pl05poI05pp!A05pq05pvI05pw!A05px05pyI05pz05q1A05q205vjI05vk05x5A05x705xbA05xc06bgI06bh!T06bi!I06bk06bqB06br!S06bs06buB06bv!Z06bw!A06bx!a06by06bzA06c0!B06c1!S06c206c3B06c4!b06c506c7I06c806c9H06ca!L06cb06cdH06ce!L06cf!H06cg06cjI06ck06cmc06cn!B06co06cpD06cq06cuA06cv!S06cw06d3K06d4!I06d506d6H06d7!I06d806d9Y06da06dfI06dg!N06dh!L06di!R06dj06dlY06dm06dxI06dy!B06dz!I06e006e3B06e4!I06e506e7B06e8!d06e906ecI06ee06enA06eo06f0I06f1!L06f2!R06f306fgI06fh!L06fi!R06fk06fwI06g006g6J06g7!K06g806glJ06gm!K06gn06gqJ06gr!K06gs06gtJ06gu!K06gv06hbJ06hc06i8A06io06iqI06ir!K06is06iwI06ix!K06iy06j9I06ja!J06jb06q9I06qa06qbJ06qc06weI06wf!c06wg06x3I06x4!L06x5!R06x6!L06x7!R06x806xlI06xm06xne06xo06y0I06y1!L06y2!R06y3073jI073k073ne073o07i7I07i807ibe07ic07irI07is07ite07iu07ivI07iw!e07ix!I07iy07j0e07j1!f07j207j3e07j407jsI07jt07jve07jw07l3I07l4!e07l507lqI07lr!e07ls07ngI07nh07nse07nt07nwI07nx!e07ny!I07nz07o1e07o2!I07o307o4e07o507o7I07o807o9e07oa07obI07oc!e07od07oeI07of07ohe07oi07opI07oq!e07or07owI07ox07p1e07p2!I07p307p4e07p5!f07p6!e07p707p8I07p907pge07ph07pjI07pk07ple07pm07ppf07pq07ruI07rv07s0H07s1!I07s207s3G07s4!e07s507s7I07s8!L07s9!R07sa!L07sb!R07sc!L07sd!R07se!L07sf!R07sg!L07sh!R07si!L07sj!R07sk!L07sl!R07sm07usI07ut!L07uu!R07uv07vpI07vq!L07vr!R07vs!L07vt!R07vu!L07vv!R07vw!L07vx!R07vy!L07vz!R07w00876I0877!L0878!R0879!L087a!R087b!L087c!R087d!L087e!R087f!L087g!R087h!L087i!R087j!L087k!R087l!L087m!R087n!L087o!R087p!L087q!R087r!L087s!R087t089jI089k!L089l!R089m!L089n!R089o08ajI08ak!L08al!R08am08viI08vj08vlA08vm08vnI08vt!G08vu08vwB08vx!I08vy!G08vz!B08w008z3I08z4!B08zj!A08zk0926I09280933A0934093hH093i093pB093q!I093r!B093s!L093t!B093u093vI093w093xH093y093zI09400941H0942!L0943!R0944!L0945!R0946!L0947!R0948!L0949!R094a094dB094e!G094f!I094g094hB094i!I094j094kB094l094pI094q094rb094s094uB094v!I094w094xB094y!L094z0956B0957!I0958!B0959!I095a095bB095c095eI096o097de097f099ve09a809g5e09gw09h7e09hc!B09hd09heR09hf09hge09hh!Y09hi09hje09hk!L09hl!R09hm!L09hn!R09ho!L09hp!R09hq!L09hr!R09hs!L09ht!R09hu09hve09hw!L09hx!R09hy!L09hz!R09i0!L09i1!R09i2!L09i3!R09i4!Y09i5!L09i609i7R09i809ihe09ii09inA09io09ise09it!A09iu09iye09iz09j0Y09j109j3e09j5!Y09j6!e09j7!Y09j8!e09j9!Y09ja!e09jb!Y09jc!e09jd!Y09je09k2e09k3!Y09k409kye09kz!Y09l0!e09l1!Y09l2!e09l3!Y09l409l9e09la!Y09lb09lge09lh09liY09ll09lmA09ln09lqY09lr!e09ls09ltY09lu!e09lv!Y09lw!e09lx!Y09ly!e09lz!Y09m0!e09m1!Y09m209mqe09mr!Y09ms09nme09nn!Y09no!e09np!Y09nq!e09nr!Y09ns09nxe09ny!Y09nz09o4e09o509o6Y09o709oae09ob09oeY09of!e09ol09pre09pt09see09sg09ure09v409vjY09vk09wee09wg09xje09xk09xrI09xs0fcve0fcw0fenI0feo0vmce0vmd!Y0vme0wi4e0wi80wjqe0wk00wl9I0wla0wlbB0wlc0wssI0wst!B0wsu!G0wsv!B0wsw0wtbI0wtc0wtlQ0wtm0wviI0wvj0wvmA0wvn!I0wvo0wvxA0wvy0wwtI0wwu0wwvA0www0wz3I0wz40wz5A0wz6!I0wz70wzbB0wzk0x6pI0x6q!A0x6r0x6tI0x6u!A0x6v0x6yI0x6z!A0x700x7mI0x7n0x7rA0x7s0x7vI0x7w!A0x800x87I0x88!K0x890x9vI0x9w0x9xT0x9y0x9zG0xa80xa9A0xaa0xbnI0xbo0xc5A0xce0xcfB0xcg0xcpQ0xcw0xddA0xde0xdnI0xdo!T0xdp0xdqI0xdr!A0xds0xe1Q0xe20xetI0xeu0xf1A0xf20xf3B0xf40xfqI0xfr0xg3A0xgf!I0xgg0xh8V0xhc0xhfA0xhg0xiqI0xir0xj4A0xj50xjaI0xjb0xjdB0xje0xjjI0xjk0xjtQ0xjy0xkfI0xkg0xkpQ0xkq0xm0I0xm10xmeA0xmo0xmqI0xmr!A0xms0xmzI0xn00xn1A0xn40xndQ0xng!I0xnh0xnjB0xnk0xreI0xrf0xrjA0xrk0xrlB0xrm0xroI0xrp0xrqA0xs10xyaI0xyb0xyiA0xyj!B0xyk0xylA0xyo0xyxQ0xz4!g0xz50xzvh0xzw!g0xzx0y0nh0y0o!g0y0p0y1fh0y1g!g0y1h0y27h0y28!g0y290y2zh0y30!g0y310y3rh0y3s!g0y3t0y4jh0y4k!g0y4l0y5bh0y5c!g0y5d0y63h0y64!g0y650y6vh0y6w!g0y6x0y7nh0y7o!g0y7p0y8fh0y8g!g0y8h0y97h0y98!g0y990y9zh0ya0!g0ya10yarh0yas!g0yat0ybjh0ybk!g0ybl0ycbh0ycc!g0ycd0yd3h0yd4!g0yd50ydvh0ydw!g0ydx0yenh0yeo!g0yep0yffh0yfg!g0yfh0yg7h0yg8!g0yg90ygzh0yh0!g0yh10yhrh0yhs!g0yht0yijh0yik!g0yil0yjbh0yjc!g0yjd0yk3h0yk4!g0yk50ykvh0ykw!g0ykx0ylnh0ylo!g0ylp0ymfh0ymg!g0ymh0yn7h0yn8!g0yn90ynzh0yo0!g0yo10yorh0yos!g0yot0ypjh0ypk!g0ypl0yqbh0yqc!g0yqd0yr3h0yr4!g0yr50yrvh0yrw!g0yrx0ysnh0yso!g0ysp0ytfh0ytg!g0yth0yu7h0yu8!g0yu90yuzh0yv0!g0yv10yvrh0yvs!g0yvt0ywjh0ywk!g0ywl0yxbh0yxc!g0yxd0yy3h0yy4!g0yy50yyvh0yyw!g0yyx0yznh0yzo!g0yzp0z0fh0z0g!g0z0h0z17h0z18!g0z190z1zh0z20!g0z210z2rh0z2s!g0z2t0z3jh0z3k!g0z3l0z4bh0z4c!g0z4d0z53h0z54!g0z550z5vh0z5w!g0z5x0z6nh0z6o!g0z6p0z7fh0z7g!g0z7h0z87h0z88!g0z890z8zh0z90!g0z910z9rh0z9s!g0z9t0zajh0zak!g0zal0zbbh0zbc!g0zbd0zc3h0zc4!g0zc50zcvh0zcw!g0zcx0zdnh0zdo!g0zdp0zefh0zeg!g0zeh0zf7h0zf8!g0zf90zfzh0zg0!g0zg10zgrh0zgs!g0zgt0zhjh0zhk!g0zhl0zibh0zic!g0zid0zj3h0zj4!g0zj50zjvh0zjw!g0zjx0zknh0zko!g0zkp0zlfh0zlg!g0zlh0zm7h0zm8!g0zm90zmzh0zn0!g0zn10znrh0zns!g0znt0zojh0zok!g0zol0zpbh0zpc!g0zpd0zq3h0zq4!g0zq50zqvh0zqw!g0zqx0zrnh0zro!g0zrp0zsfh0zsg!g0zsh0zt7h0zt8!g0zt90ztzh0zu0!g0zu10zurh0zus!g0zut0zvjh0zvk!g0zvl0zwbh0zwc!g0zwd0zx3h0zx4!g0zx50zxvh0zxw!g0zxx0zynh0zyo!g0zyp0zzfh0zzg!g0zzh1007h1008!g1009100zh1010!g1011101rh101s!g101t102jh102k!g102l103bh103c!g103d1043h1044!g1045104vh104w!g104x105nh105o!g105p106fh106g!g106h1077h1078!g1079107zh1080!g1081108rh108s!g108t109jh109k!g109l10abh10ac!g10ad10b3h10b4!g10b510bvh10bw!g10bx10cnh10co!g10cp10dfh10dg!g10dh10e7h10e8!g10e910ezh10f0!g10f110frh10fs!g10ft10gjh10gk!g10gl10hbh10hc!g10hd10i3h10i4!g10i510ivh10iw!g10ix10jnh10jo!g10jp10kfh10kg!g10kh10l7h10l8!g10l910lzh10m0!g10m110mrh10ms!g10mt10njh10nk!g10nl10obh10oc!g10od10p3h10p4!g10p510pvh10pw!g10px10qnh10qo!g10qp10rfh10rg!g10rh10s7h10s8!g10s910szh10t0!g10t110trh10ts!g10tt10ujh10uk!g10ul10vbh10vc!g10vd10w3h10w4!g10w510wvh10ww!g10wx10xnh10xo!g10xp10yfh10yg!g10yh10z7h10z8!g10z910zzh1100!g1101110rh110s!g110t111jh111k!g111l112bh112c!g112d1133h1134!g1135113vh113w!g113x114nh114o!g114p115fh115g!g115h1167h1168!g1169116zh1170!g1171117rh117s!g117t118jh118k!g118l119bh119c!g119d11a3h11a4!g11a511avh11aw!g11ax11bnh11bo!g11bp11cfh11cg!g11ch11d7h11d8!g11d911dzh11e0!g11e111erh11es!g11et11fjh11fk!g11fl11gbh11gc!g11gd11h3h11h4!g11h511hvh11hw!g11hx11inh11io!g11ip11jfh11jg!g11jh11k7h11k8!g11k911kzh11l0!g11l111lrh11ls!g11lt11mjh11mk!g11ml11nbh11nc!g11nd11o3h11o4!g11o511ovh11ow!g11ox11pnh11po!g11pp11qfh11qg!g11qh11r7h11r8!g11r911rzh11s0!g11s111srh11ss!g11st11tjh11tk!g11tl11ubh11uc!g11ud11v3h11v4!g11v511vvh11vw!g11vx11wnh11wo!g11wp11xfh11xg!g11xh11y7h11y8!g11y911yzh11z0!g11z111zrh11zs!g11zt120jh120k!g120l121bh121c!g121d1223h1224!g1225122vh122w!g122x123nh123o!g123p124fh124g!g124h1257h1258!g1259125zh1260!g1261126rh126s!g126t127jh127k!g127l128bh128c!g128d1293h1294!g1295129vh129w!g129x12anh12ao!g12ap12bfh12bg!g12bh12c7h12c8!g12c912czh12d0!g12d112drh12ds!g12dt12ejh12ek!g12el12fbh12fc!g12fd12g3h12g4!g12g512gvh12gw!g12gx12hnh12ho!g12hp12ifh12ig!g12ih12j7h12j8!g12j912jzh12k0!g12k112krh12ks!g12kt12ljh12lk!g12ll12mbh12mc!g12md12n3h12n4!g12n512nvh12nw!g12nx12onh12oo!g12op12pfh12pg!g12ph12q7h12q8!g12q912qzh12r0!g12r112rrh12rs!g12rt12sjh12sk!g12sl12tbh12tc!g12td12u3h12u4!g12u512uvh12uw!g12ux12vnh12vo!g12vp12wfh12wg!g12wh12x7h12x8!g12x912xzh12y0!g12y112yrh12ys!g12yt12zjh12zk!g12zl130bh130c!g130d1313h1314!g1315131vh131w!g131x132nh132o!g132p133fh133g!g133h1347h1348!g1349134zh1350!g1351135rh135s!g135t136jh136k!g136l137bh137c!g137d1383h1384!g1385138vh138w!g138x139nh139o!g139p13afh13ag!g13ah13b7h13b8!g13b913bzh13c0!g13c113crh13cs!g13ct13djh13dk!g13dl13ebh13ec!g13ed13f3h13f4!g13f513fvh13fw!g13fx13gnh13go!g13gp13hfh13hg!g13hh13i7h13i8!g13i913izh13j0!g13j113jrh13js!g13jt13kjh13kk!g13kl13lbh13lc!g13ld13m3h13m4!g13m513mvh13mw!g13mx13nnh13no!g13np13ofh13og!g13oh13p7h13p8!g13p913pzh13q0!g13q113qrh13qs!g13qt13rjh13rk!g13rl13sbh13sc!g13sd13t3h13t4!g13t513tvh13tw!g13tx13unh13uo!g13up13vfh13vg!g13vh13w7h13w8!g13w913wzh13x0!g13x113xrh13xs!g13xt13yjh13yk!g13yl13zbh13zc!g13zd1403h1404!g1405140vh140w!g140x141nh141o!g141p142fh142g!g142h1437h1438!g1439143zh1440!g1441144rh144s!g144t145jh145k!g145l146bh146c!g146d1473h1474!g1475147vh147w!g147x148nh148o!g148p149fh149g!g149h14a7h14a8!g14a914azh14b0!g14b114brh14bs!g14bt14cjh14ck!g14cl14dbh14dc!g14dd14e3h14e4!g14e514evh14ew!g14ex14fnh14fo!g14fp14gfh14gg!g14gh14h7h14h8!g14h914hzh14i0!g14i114irh14is!g14it14jjh14jk!g14jl14kbh14kc!g14kd14l3h14l4!g14l514lvh14lw!g14lx14mnh14mo!g14mp14nfh14ng!g14nh14o7h14o8!g14o914ozh14p0!g14p114prh14ps!g14pt14qjh14qk!g14ql14rbh14rc!g14rd14s3h14s4!g14s514svh14sw!g14sx14tnh14to!g14tp14ufh14ug!g14uh14v7h14v8!g14v914vzh14w0!g14w114wrh14ws!g14wt14xjh14xk!g14xl14ybh14yc!g14yd14z3h14z4!g14z514zvh14zw!g14zx150nh150o!g150p151fh151g!g151h1527h1528!g1529152zh1530!g1531153rh153s!g153t154jh154k!g154l155bh155c!g155d1563h1564!g1565156vh156w!g156x157nh157o!g157p158fh158g!g158h1597h1598!g1599159zh15a0!g15a115arh15as!g15at15bjh15bk!g15bl15cbh15cc!g15cd15d3h15d4!g15d515dvh15dw!g15dx15enh15eo!g15ep15ffh15fg!g15fh15g7h15g8!g15g915gzh15h0!g15h115hrh15hs!g15ht15ijh15ik!g15il15jbh15jc!g15jd15k3h15k4!g15k515kvh15kw!g15kx15lnh15lo!g15lp15mfh15mg!g15mh15n7h15n8!g15n915nzh15o0!g15o115orh15os!g15ot15pjh15pk!g15pl15qbh15qc!g15qd15r3h15r4!g15r515rvh15rw!g15rx15snh15so!g15sp15tfh15tg!g15th15u7h15u8!g15u915uzh15v0!g15v115vrh15vs!g15vt15wjh15wk!g15wl15xbh15xc!g15xd15y3h15y4!g15y515yvh15yw!g15yx15znh15zo!g15zp160fh160g!g160h1617h1618!g1619161zh1620!g1621162rh162s!g162t163jh163k!g163l164bh164c!g164d1653h1654!g1655165vh165w!g165x166nh166o!g166p167fh167g!g167h1687h1688!g1689168zh1690!g1691169rh169s!g169t16ajh16ak!g16al16bbh16bc!g16bd16c3h16c4!g16c516cvh16cw!g16cx16dnh16do!g16dp16efh16eg!g16eh16f7h16f8!g16f916fzh16g0!g16g116grh16gs!g16gt16hjh16hk!g16hl16ibh16ic!g16id16j3h16j4!g16j516jvh16jw!g16jx16knh16ko!g16kp16lfh16ls16meW16mj16nvX16o01d6nI1d6o1dkve1dkw1dljI1dlp!U1dlq!A1dlr1dm0U1dm1!I1dm21dmeU1dmg1dmkU1dmm!U1dmo1dmpU1dmr1dmsU1dmu1dn3U1dn41e0tI1e0u!R1e0v!L1e1c1e63I1e64!K1e65!I1e681e6nA1e6o!N1e6p1e6qR1e6r1e6sN1e6t1e6uG1e6v!L1e6w!R1e6x!c1e741e7jA1e7k1e7oe1e7p!L1e7q!R1e7r!L1e7s!R1e7t!L1e7u!R1e7v!L1e7w!R1e7x!L1e7y!R1e7z!L1e80!R1e81!L1e82!R1e83!L1e84!R1e851e86e1e87!L1e88!R1e891e8fe1e8g!R1e8h!e1e8i!R1e8k1e8lY1e8m1e8nG1e8o!e1e8p!L1e8q!R1e8r!L1e8s!R1e8t!L1e8u!R1e8v1e92e1e94!e1e95!J1e96!K1e97!e1e9c1ed8I1edb!d1edd!G1ede1edfe1edg!J1edh!K1edi1edje1edk!L1edl!R1edm1edne1edo!R1edp!e1edq!R1edr1ee1e1ee21ee3Y1ee41ee6e1ee7!G1ee81eeye1eez!L1ef0!e1ef1!R1ef21efue1efv!L1efw!e1efx!R1efy!e1efz!L1eg01eg1R1eg2!L1eg31eg4R1eg5!Y1eg6!e1eg71eggY1egh1ehpe1ehq1ehrY1ehs1eime1eiq1eive1eiy1ej3e1ej61ejbe1eje1ejge1ejk!K1ejl!J1ejm1ejoe1ejp1ejqJ1ejs1ejyI1ek91ekbA1ekc!i1ekd1ereI1erk1ermB1err1eykI1eyl!A1f281f4gI1f4w!A1f4x1f91I1f921f96A1f9c1fa5I1fa7!B1fa81fbjI1fbk!B1fbl1fh9I1fhc1fhlQ1fhs1g7pI1g7r!B1g7s1gd7I1gdb!B1gdc1gjkI1gjl1gjnA1gjp1gjqA1gjw1gjzA1gk01gl1I1gl41gl6A1glb!A1glc1glkI1gls1glzB1gm01gpwI1gpx1gpyA1gq31gq7I1gq81gqdB1gqe!c1gqo1gs5I1gs91gsfB1gsg1h5vI1h5w1h5zA1h681h6hQ1heo1hgpI1hgr1hgsA1hgt!B1hgw1hl1I1hl21hlcA1hld1hpyI1hq81hqaA1hqb1hrrI1hrs1hs6A1hs71hs8B1hs91ht1I1ht21htbQ1htr1htuA1htv1hv3I1hv41hveA1hvf1hvhI1hvi1hvlB1hvx1hwoI1hww1hx5Q1hxc1hxeA1hxf1hyeI1hyf1hysA1hyu1hz3Q1hz41hz7B1hz8!I1hz91hzaA1hzb1i0iI1i0j!A1i0k!I1i0l!T1i0m!I1i0w1i0yA1i0z1i2aI1i2b1i2oA1i2p1i2sI1i2t1i2uB1i2v!I1i2w!B1i2x1i30A1i31!I1i321i33A1i341i3dQ1i3e!I1i3f!T1i3g!I1i3h1i3jB1i3l1i5nI1i5o1i5zA1i601i61B1i62!I1i631i64B1i65!I1i66!A1i801i94I1i95!B1i9c1iamI1ian1iayA1ib41ibdQ1ibk1ibnA1ibp1id5I1id71id8A1id9!I1ida1idgA1idj1idkA1idn1idpA1ids!I1idz!A1ie51ie9I1iea1iebA1iee1iekA1ieo1iesA1iio1ik4I1ik51ikmA1ikn1ikqI1ikr1ikuB1ikv!I1ikw1il5Q1il61il7B1il9!I1ila!A1ilb1injI1ink1io3A1io41io7I1iog1iopQ1itc1iumI1iun1iutA1iuw1iv4A1iv5!T1iv61iv7B1iv81iv9G1iva1ivcI1ivd1ivrB1ivs1ivvI1ivw1ivxA1iww1iy7I1iy81iyoA1iyp1iyqB1iyr1iysI1iz41izdQ1izk1izwT1j0g1j1mI1j1n1j1zA1j20!I1j281j2hQ1j401j57I1j5c1j5lQ1j5m1j5nI1j5o1j5qB1j5r1jcbI1jcc1jcqA1jcr1jhbI1jhc1jhlQ1jhm1jjjI1jjk1jjpA1jjr1jjsA1jjv1jjyA1jjz!I1jk0!A1jk1!I1jk21jk3A1jk41jk6B1jkg1jkpQ1jmo1jo0I1jo11jo7A1joa1jogA1joh!I1joi!T1joj!I1jok!A1jpc!I1jpd1jpmA1jpn1jqqI1jqr1jqxA1jqy!I1jqz1jr2A1jr3!T1jr4!I1jr51jr8B1jr9!T1jra!I1jrb!A1jrk!I1jrl1jrvA1jrw1jt5I1jt61jtlA1jtm1jtoB1jtp!I1jtq1jtsT1jtt1jtuB1juo1k4uI1k4v1k52A1k541k5bA1k5c!I1k5d1k5hB1k5s1k61Q1k621k6kI1k6o!T1k6p!G1k6q1k7jI1k7m1k87A1k891k8mA1kao1kc0I1kc11kc6A1kca!A1kcc1kcdA1kcf1kclA1kcm!I1kcn!A1kcw1kd5Q1kdc1kehI1kei1kemA1keo1kepA1ker1kevA1kew!I1kf41kfdQ1ko01koiI1koj1komA1kon1kv0I1kv11kv4K1kv51kvlI1kvz!B1kw01lriI1lrk1lroB1ls01oifI1oig1oiiL1oij1oilR1oim1ojlI1ojm!R1ojn1ojpI1ojq!L1ojr!R1ojs!L1ojt!R1oju1oqgI1oqh!L1oqi1oqjR1oqk1oviI1ovk1ovqS1ovr!L1ovs!R1s001sctI1scu!L1scv!R1scw1zkuI1zkw1zl5Q1zla1zlbB1zo01zotI1zow1zp0A1zp1!B1zpc1zqnI1zqo1zquA1zqv1zqxB1zqy1zr7I1zr8!B1zr9!I1zrk1zrtQ1zrv20euI20ev20ewB20ex20juI20jz!A20k0!I20k120ljA20lr20luA20lv20m7I20o020o3Y20o4!S20og20ohA20ow25fbe25fk260ve260w26dxI26f426fce2dc02djye2dlc2dleY2dlw2dlzY2dm82dx7e2fpc2ftoI2ftp2ftqA2ftr!B2fts2ftvA2jnk2jxgI2jxh2jxlA2jxm2jxoI2jxp2jyaA2jyb2jycI2jyd2jyjA2jyk2jzdI2jze2jzhA2jzi2k3lI2k3m2k3oA2k3p2l6zI2l722l8fQ2l8g2lmnI2lmo2lo6A2lo72loaI2lob2lpoA2lpp2lpwI2lpx!A2lpy2lqbI2lqc!A2lqd2lqeI2lqf2lqiB2lqj!I2lqz2lr3A2lr52lrjA2mtc2mtiA2mtk2mu0A2mu32mu9A2mub2mucA2mue2muiA2n0g2n1oI2n1s2n1yA2n1z2n25I2n282n2hQ2n2m2ne3I2ne42ne7A2ne82nehQ2nen!J2oe82ojzI2ok02ok6A2olc2on7I2on82oneA2onf!I2onk2ontQ2ony2onzL2p9t2pbfI2pbg!K2pbh2pbjI2pbk!K2pbl2prlI2pz42q67e2q682q6kI2q6l2q6ne2q6o2q98I2q992q9be2q9c2qb0I2qb12qcle2qcm2qdbj2qdc2qo4e2qo5!f2qo62qore2qos2qotI2qou2qpge2qph2qpiI2qpj2qpne2qpo!I2qpp2qpte2qpu2qpwf2qpx2qpye2qpz!f2qq02qq1e2qq22qq4f2qq52qree2qrf2qrjk2qrk2qtde2qte2qtff2qtg2qthe2qti2qtsf2qtt2qude2que2quwf2qux2quze2qv0!f2qv12qv4e2qv52qv7f2qv8!e2qv92qvbf2qvc2qvie2qvj!f2qvk!e2qvl!f2qvm2qvze2qw0!I2qw1!e2qw2!I2qw3!e2qw4!I2qw52qw9e2qwa!f2qwb2qwee2qwf!I2qwg!e2qwh2qwiI2qwj2qyne2qyo2qyuI2qyv2qzae2qzb2qzoI2qzp2r01e2r022r0pI2r0q2r1ve2r1w2r1xf2r1y2r21e2r22!f2r232r2ne2r2o!f2r2p2r2se2r2t2r2uf2r2v2r4je2r4k2r4rI2r4s2r5fe2r5g2r5lI2r5m2r7oe2r7p2r7rf2r7s2r7ue2r7v2r7zf2r802r91I2r922r94H2r952r97Y2r982r9bI2r9c2raae2rab!f2rac2rare2ras2rauf2rav2rb3e2rb4!f2rb52rbfe2rbg!f2rbh2rcve2rcw2rg3I2rg42rgfe2rgg2risI2rit2rjze2rk02rkbI2rkc2rkfe2rkg2rlzI2rm02rm7e2rm82rmhI2rmi2rmne2rmo2rnrI2rns2rnze2ro02rotI2rou2rr3e2rr42rrfI2rrg!f2rrh2rrie2rrj!f2rrk2rrre2rrs2rrzf2rs02rs5e2rs6!f2rs72rsfe2rsg2rspf2rsq2rsre2rss2rsuf2rsv2ruee2ruf!f2rug2rw4e2rw52rw6f2rw7!e2rw82rw9f2rwa!e2rwb!f2rwc2rwse2rwt2rwvf2rww!e2rwx2rx9f2rxa2ry7e2ry82s0jI2s0k2s5be2s5c2sayI2sc02sc9Q2scg2t4te2t4w47p9e47pc5m9pejny9!Ajnz4jo1rAjo5cjobzAl2ionvnhI",937,C.tK,w),C.bJ,B.E(v,w),u):m).wo(h)
k=l===C.kR
if(g===C.hF||g===C.kS)return new A.eE(a0,t,s,D.f2)
if(g===C.kW)if(l===C.hF)continue
else return new A.eE(a0,t,s,D.f2)
if(n)s=a0
if(l===C.hF||l===C.kS||l===C.kW){t=a0
continue}if(a0>=x)return new A.eE(x,a0,s,D.dp)
if(l===C.hM){f=o?f:g
t=a0
continue}if(l===C.hH){t=a0
continue}if(g===C.hH||f===C.hH)return new A.eE(a0,a0,s,D.f1)
if(l===C.kN||k){if(!o){if(p)--q
t=a0
l=g
continue}l=C.bJ}if(e){t=a0
continue}if(l===C.hJ||g===C.hJ){t=a0
continue}if(g===C.kP){t=a0
continue}if(!(!n||g===C.hC||g===C.f4)&&l===C.kP){t=a0
continue}if(n)p=l===C.hE||l===C.dV||l===C.pl||l===C.hD||l===C.kO
else p=!1
if(p){t=a0
continue}if(g===C.f3){t=a0
continue}p=g===C.kX
if(p&&l===C.f3){t=a0
continue}n=g!==C.hE
if((!n||f===C.hE||g===C.dV||f===C.dV)&&l===C.kQ){t=a0
continue}if((g===C.hI||f===C.hI)&&l===C.hI){t=a0
continue}if(o)return new A.eE(a0,a0,s,D.f1)
if(p||l===C.kX){t=a0
continue}if(g===C.kU||l===C.kU)return new A.eE(a0,a0,s,D.f1)
if(l===C.hC||l===C.f4||l===C.kQ||g===C.pj){t=a0
continue}if(r===C.bt)p=g===C.f4||g===C.hC
else p=!1
if(p){t=a0
continue}p=g===C.kO
if(p&&l===C.bt){t=a0
continue}if(l===C.pk){t=a0
continue}o=g!==C.bJ
if(!((!o||g===C.bt)&&l===C.cO))if(g===C.cO)m=l===C.bJ||l===C.bt
else m=!1
else m=!0
if(m){t=a0
continue}m=g===C.hN
if(m)j=l===C.kT||l===C.hK||l===C.hL
else j=!1
if(j){t=a0
continue}if((g===C.kT||g===C.hK||g===C.hL)&&l===C.dq){t=a0
continue}j=!m
if(!j||g===C.dq)i=l===C.bJ||l===C.bt
else i=!1
if(i){t=a0
continue}if(!o||g===C.bt)i=l===C.hN||l===C.dq
else i=!1
if(i){t=a0
continue}if(!n||g===C.dV||g===C.cO)n=l===C.dq||l===C.hN
else n=!1
if(n){t=a0
continue}n=g!==C.dq
if((!n||m)&&l===C.f3){t=a0
continue}if((!n||!j||g===C.f4||g===C.hD||g===C.cO||p)&&l===C.cO){t=a0
continue}p=g===C.hG
if(p)n=l===C.hG||l===C.f5||l===C.f7||l===C.f8
else n=!1
if(n){t=a0
continue}n=g!==C.f5
if(!n||g===C.f7)j=l===C.f5||l===C.f6
else j=!1
if(j){t=a0
continue}j=g!==C.f6
if((!j||g===C.f8)&&l===C.f6){t=a0
continue}if((p||!n||!j||g===C.f7||g===C.f8)&&l===C.dq){t=a0
continue}if(m)p=l===C.hG||l===C.f5||l===C.f6||l===C.f7||l===C.f8
else p=!1
if(p){t=a0
continue}if(!o||g===C.bt)p=l===C.bJ||l===C.bt
else p=!1
if(p){t=a0
continue}if(g===C.hD)p=l===C.bJ||l===C.bt
else p=!1
if(p){t=a0
continue}if(!o||g===C.bt||g===C.cO)if(l===C.f3){p=C.c.W(d,a0)
if(p!==9001)if(!(p>=12296&&p<=12317))p=p>=65047&&p<=65378
else p=!0
else p=!0
p=!p}else p=!1
else p=!1
if(p){t=a0
continue}if(g===C.dV){p=C.c.W(d,a0-1)
if(p!==9001)if(!(p>=12296&&p<=12317))p=p>=65047&&p<=65378
else p=!0
else p=!0
if(!p)p=l===C.bJ||l===C.bt||l===C.cO
else p=!1}else p=!1
if(p){t=a0
continue}if(l===C.kV)if((q&1)===1){t=a0
continue}else return new A.eE(a0,a0,s,D.f1)
if(g===C.hK&&l===C.hL){t=a0
continue}return new A.eE(a0,a0,s,D.f1)}return new A.eE(x,t,s,D.dp)},
aEY(d,e,f,g,h){var x,w,v
if(f===g)return 0
x=d.font
if(f===$.aPK&&g===$.aPJ&&e===$.aPL&&x===$.aPI)w=$.aPM
else{v=d.measureText(f===0&&g===e.length?e:C.c.a3(e,f,g)).width
v.toString
w=v}$.aPK=f
$.aPJ=g
$.aPL=e
$.aPI=x
$.aPM=w
if(h==null)h=0
return C.e.be((h!==0?w+h*(g-f):w)*100)/100},
aKA(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0){var x=j==null,w=x?"":j
return new A.Bz(e,f,g,h,i,p,n,v,!x,w,k,l,o,m,s,a0,r,t,d,q,u)},
aQE(d){if(d==null)return null
return B.aQD(d.a)},
b21(d){var x,w,v,u,t=d.length
if(t===0)return""
for(x=0,w="";x<t;++x,w=u){if(x!==0)w+=","
v=d[x]
u=v.b
u=w+(B.e(u.a)+"px "+B.e(u.b)+"px "+B.e(v.c)+"px "+B.e(B.d4(v.a)))}return w.charCodeAt(0)==0?w:w},
b19(d){var x,w
for(x=0,w="";x<1;++x)w+='"tnum" 1'
return w.charCodeAt(0)==0?w:w},
b0Q(d){switch(d.a){case 3:return"dashed"
case 2:return"dotted"
case 1:return"double"
case 0:return"solid"
case 4:return"wavy"
default:return null}},
b3X(d,e,f){var x,w,v,u,t,s=e.a
if(s===f.a)return new A.o1(f,null,!1)
x=f.c
if(s===x)return new A.o1(f,null,!0)
w=$.aTY()
v=w.wn(0,d,s)
u=s+1
for(;u<x;){t=B.a5r(d,u)
if((t==null?w.b:w.wo(t))!=v)break;++u}if(u===f.b)return new A.o1(f,v,!1)
return new A.o1(new A.eE(u,u,u,D.cN),v,!1)},
aOs(d,e,f){var x=d.a,w=e.length,v=f
while(!0){if(!(v>=0&&v<=w))break
v+=x
if(A.b_j(e,v))break}return A.zx(v,0,w)},
b_j(d,e){var x,w,v,u,t,s,r,q,p,o=null
if(e<=0||e>=d.length)return!0
x=e-1
if((C.c.W(d,x)&63488)===55296)return!1
w=$.Ka().wn(0,d,e)
v=$.Ka().wn(0,d,x)
if(v===D.jw&&w===D.jx)return!1
if(A.eP(v,D.n3,D.jw,D.jx,o,o))return!0
if(A.eP(w,D.n3,D.jw,D.jx,o,o))return!0
if(v===D.n2&&w===D.n2)return!1
if(A.eP(w,D.fV,D.fW,D.fU,o,o))return!1
for(u=0;A.eP(v,D.fV,D.fW,D.fU,o,o);){++u
x=e-u-1
if(x<0)return!0
t=$.Ka()
s=B.a5r(d,x)
v=s==null?t.b:t.wo(s)}if(A.eP(v,D.bV,D.b2,o,o,o)&&A.eP(w,D.bV,D.b2,o,o,o))return!1
r=0
do{++r
q=$.Ka().wn(0,d,e+r)}while(A.eP(q,D.fV,D.fW,D.fU,o,o))
do{++u
p=$.Ka().wn(0,d,e-u-1)}while(A.eP(p,D.fV,D.fW,D.fU,o,o))
if(A.eP(v,D.bV,D.b2,o,o,o)&&A.eP(w,D.n0,D.fT,D.eC,o,o)&&A.eP(q,D.bV,D.b2,o,o,o))return!1
if(A.eP(p,D.bV,D.b2,o,o,o)&&A.eP(v,D.n0,D.fT,D.eC,o,o)&&A.eP(w,D.bV,D.b2,o,o,o))return!1
x=v===D.b2
if(x&&w===D.eC)return!1
if(x&&w===D.n_&&q===D.b2)return!1
if(p===D.b2&&v===D.n_&&w===D.b2)return!1
x=v===D.cC
if(x&&w===D.cC)return!1
if(A.eP(v,D.bV,D.b2,o,o,o)&&w===D.cC)return!1
if(x&&A.eP(w,D.bV,D.b2,o,o,o))return!1
if(p===D.cC&&A.eP(v,D.n1,D.fT,D.eC,o,o)&&w===D.cC)return!1
if(x&&A.eP(w,D.n1,D.fT,D.eC,o,o)&&q===D.cC)return!1
if(v===D.fX&&w===D.fX)return!1
if(A.eP(v,D.bV,D.b2,D.cC,D.fX,D.jv)&&w===D.jv)return!1
if(v===D.jv&&A.eP(w,D.bV,D.b2,D.cC,D.fX,o))return!1
return!0},
eP(d,e,f,g,h,i){if(d===e)return!0
if(d===f)return!0
if(g!=null&&d===g)return!0
if(h!=null&&d===h)return!0
if(i!=null&&d===i)return!0
return!1},
aF7(d,e){var x,w=d.style
C.h.b1(w,C.h.aq(w,"transform-origin"),"0 0 0","")
x=B.jy(e)
C.h.b1(w,C.h.aq(w,"transform"),x,"")},
a5B(d,e){var x=$.aTW()
x[0]=e.a
x[1]=e.b
x[2]=e.c
x[3]=e.d
A.aFc(d,x)
return new B.C(x[0],x[1],x[2],x[3])},
aFc(d,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=$.aFK()
e[0]=a0[0]
e[4]=a0[1]
e[8]=0
e[12]=1
e[1]=a0[2]
e[5]=a0[1]
e[9]=0
e[13]=1
e[2]=a0[0]
e[6]=a0[3]
e[10]=0
e[14]=1
e[3]=a0[2]
e[7]=a0[3]
e[11]=0
e[15]=1
x=$.aTV().a
w=x[0]
v=x[4]
u=x[8]
t=x[12]
s=x[1]
r=x[5]
q=x[9]
p=x[13]
o=x[2]
n=x[6]
m=x[10]
l=x[14]
k=x[3]
j=x[7]
i=x[11]
h=x[15]
g=d.a
x[0]=w*g[0]+v*g[4]+u*g[8]+t*g[12]
x[4]=w*g[1]+v*g[5]+u*g[9]+t*g[13]
x[8]=w*g[2]+v*g[6]+u*g[10]+t*g[14]
x[12]=w*g[3]+v*g[7]+u*g[11]+t*g[15]
x[1]=s*g[0]+r*g[4]+q*g[8]+p*g[12]
x[5]=s*g[1]+r*g[5]+q*g[9]+p*g[13]
x[9]=s*g[2]+r*g[6]+q*g[10]+p*g[14]
x[13]=s*g[3]+r*g[7]+q*g[11]+p*g[15]
x[2]=o*g[0]+n*g[4]+m*g[8]+l*g[12]
x[6]=o*g[1]+n*g[5]+m*g[9]+l*g[13]
x[10]=o*g[2]+n*g[6]+m*g[10]+l*g[14]
x[14]=o*g[3]+n*g[7]+m*g[11]+l*g[15]
x[3]=k*g[0]+j*g[4]+i*g[8]+h*g[12]
x[7]=k*g[1]+j*g[5]+i*g[9]+h*g[13]
x[11]=k*g[2]+j*g[6]+i*g[10]+h*g[14]
x[15]=k*g[3]+j*g[7]+i*g[11]+h*g[15]
f=g[15]
if(f===0)f=1
a0[0]=Math.min(Math.min(Math.min(e[0],e[1]),e[2]),e[3])/f
a0[1]=Math.min(Math.min(Math.min(e[4],e[5]),e[6]),e[7])/f
a0[2]=Math.max(Math.max(Math.max(e[0],e[1]),e[2]),e[3])/f
a0[3]=Math.max(Math.max(Math.max(e[4],e[5]),e[6]),e[7])/f},
aRn(d,e){return d.a<=e.a&&d.b<=e.b&&d.c>=e.c&&d.d>=e.d},
zx(d,e,f){if(d<e)return e
else if(d>f)return f
else return d},
azY(d,e){var x=$.cO()
if(x===C.aa){x=d.style
C.h.b1(x,C.h.aq(x,"-webkit-clip-path"),e,null)}x=d.style
C.h.b1(x,C.h.aq(x,"clip-path"),e,null)},
a5p(d,e,f,g,h,i,j,k,l){var x=$.aPw
if(x==null?$.aPw=d.ellipse!=null:x)d.ellipse(e,f,g,h,i,j,k,l)
else{d.save()
d.translate(e,f)
d.rotate(i)
d.scale(g,h)
d.arc(0,0,1,j,k,l)
d.restore()}},
aF4(d){var x,w
for(;x=d.lastChild,x!=null;){w=x.parentNode
if(w!=null)w.removeChild(x)}},
aX9(d){var x=new B.cm(new Float32Array(16))
if(x.nu(d)===0)return null
return x},
aOi(d,e,f){var x=new Float32Array(3)
x[0]=d
x[1]=e
x[2]=f
return new A.aqL(x)},
a7T:function a7T(d,e,f,g,h){var _=this
_.e=_.d=null
_.f=d
_.r=e
_.z=_.y=_.x=_.w=null
_.Q=0
_.as=f
_.a=g
_.b=null
_.c=h},
a8O:function a8O(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.w=_.r=null
_.x=1
_.Q=_.z=_.y=null
_.as=!1},
a2G:function a2G(){},
Vw:function Vw(d,e){this.b=d
this.a=e},
a8d:function a8d(d,e){this.a=d
this.b=e},
cY:function cY(){},
LB:function LB(d){this.a=d},
LY:function LY(){},
LV:function LV(){},
LW:function LW(d){this.a=d},
M1:function M1(d,e){this.a=d
this.b=e},
M_:function M_(d,e){this.a=d
this.b=e},
LX:function LX(d){this.a=d},
M0:function M0(d){this.a=d},
LE:function LE(d,e,f){this.a=d
this.b=e
this.c=f},
LD:function LD(d,e){this.a=d
this.b=e},
LC:function LC(d,e){this.a=d
this.b=e},
LI:function LI(d,e,f){this.a=d
this.b=e
this.c=f},
LJ:function LJ(d){this.a=d},
LO:function LO(d,e){this.a=d
this.b=e},
LN:function LN(d,e){this.a=d
this.b=e},
LG:function LG(d,e,f){this.a=d
this.b=e
this.c=f},
LF:function LF(d,e,f){this.a=d
this.b=e
this.c=f},
LL:function LL(d,e){this.a=d
this.b=e},
LP:function LP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
LH:function LH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
LK:function LK(d,e){this.a=d
this.b=e},
LM:function LM(d){this.a=d},
LZ:function LZ(d,e){this.a=d
this.b=e},
aiT:function aiT(d){this.a=$
this.b=d
this.c=null},
aiU:function aiU(d){this.a=d},
aiV:function aiV(d){this.a=d},
WX:function WX(d,e){this.a=d
this.b=e},
a7P:function a7P(d){this.a=d},
CU:function CU(d){this.b=d
this.a=null},
a89:function a89(){},
rb:function rb(d,e){this.a=d
this.b=e},
l0:function l0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Do:function Do(d){this.a=d},
QL:function QL(d){this.a=d},
nN:function nN(d,e){var _=this
_.a=null
_.b=d
_.c=e
_.d=!1},
a8a:function a8a(d,e,f){this.a=d
this.b=e
this.c=f},
hN:function hN(){},
aiM:function aiM(d){this.c=d},
ahX:function ahX(d,e){this.a=d
this.b=e},
uI:function uI(){},
W3:function W3(d,e){this.c=d
this.a=null
this.b=e},
M7:function M7(d,e,f,g){var _=this
_.f=d
_.r=e
_.c=f
_.a=null
_.b=g},
M8:function M8(d,e,f,g){var _=this
_.f=d
_.r=e
_.c=f
_.a=null
_.b=g},
Uj:function Uj(d,e,f,g){var _=this
_.f=d
_.r=e
_.c=f
_.a=null
_.b=g},
G2:function G2(d,e,f){var _=this
_.f=d
_.c=e
_.a=null
_.b=f},
Ug:function Ug(d,e,f){var _=this
_.f=d
_.c=e
_.a=null
_.b=f},
UW:function UW(d,e,f){var _=this
_.c=d
_.d=e
_.a=null
_.b=f},
UU:function UU(d,e,f,g,h,i,j){var _=this
_.f=d
_.r=e
_.w=f
_.x=g
_.y=h
_.c=i
_.a=null
_.b=j},
Rs:function Rs(d){this.a=d},
afW:function afW(d){this.a=d
this.b=$},
afX:function afX(d,e){this.a=d
this.b=e},
LT:function LT(d,e){this.b=d
this.c=e
this.a=null},
a8b:function a8b(d){this.a=d},
ux:function ux(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=0
_.r=!0
_.w=f
_.x=!1
_.as=_.Q=_.z=_.y=null
_.at=g
_.a=_.CW=_.ch=_.ax=null},
uy:function uy(d){this.b=d
this.a=this.c=null},
AA:function AA(d,e){var _=this
_.b=d
_.c=e
_.d=!1
_.a=_.e=null},
nO:function nO(){this.c=this.b=this.a=null},
WW:function WW(d,e,f){this.a=d
this.b=e
this.c=f},
aoY:function aoY(d,e,f){this.a=d
this.b=e
this.c=f},
f9:function f9(){},
ho:function ho(){},
xo:function xo(d,e,f){var _=this
_.a=1
_.b=d
_.d=_.c=null
_.e=e
_.f=!1
_.$ti=f},
LU:function LU(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
AD:function AD(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q
_.ax=r
_.ay=s
_.ch=t
_.CW=u
_.cx=v
_.cy=w
_.dx=_.db=$},
a8e:function a8e(d){this.a=d},
Az:function Az(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null
_.e=0
_.f=!1
_.Q=_.z=_.y=_.x=_.w=_.r=0
_.as=null},
LS:function LS(d){this.a=d},
a8c:function a8c(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=0
_.e=g
_.f=h},
asb:function asb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
pA:function pA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
tD:function tD(d,e){this.a=d
this.b=e},
ay4:function ay4(d){this.a=d},
aaK:function aaK(){},
Wc:function Wc(d,e){this.a=d
this.b=e},
rD:function rD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2F:function a2F(d,e){this.a=d
this.b=e},
akO:function akO(){},
ie:function ie(d,e){this.a=d
this.$ti=e},
My:function My(d){this.b=this.a=null
this.$ti=d},
ym:function ym(d,e,f){this.a=d
this.b=e
this.$ti=f},
m6:function m6(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=null
_.c=e
_.d=f
_.e=null
_.f=g
_.r=h
_.w=i
_.x=0
_.y=j
_.Q=_.z=null
_.ax=_.at=_.as=!1
_.ay=k
_.ch=l},
cG:function cG(d){this.b=d},
aoO:function aoO(d){this.a=d},
GO:function GO(){},
DV:function DV(d,e,f,g,h,i){var _=this
_.CW=d
_.cx=e
_.eJ$=f
_.x=g
_.a=h
_.b=-1
_.c=i
_.w=_.r=_.f=_.e=_.d=null},
DY:function DY(d,e,f,g,h,i,j,k,l,m){var _=this
_.CW=d
_.cx=e
_.cy=f
_.db=g
_.dx=h
_.dy=i
_.fx=_.fr=null
_.eJ$=j
_.x=k
_.a=l
_.b=-1
_.c=m
_.w=_.r=_.f=_.e=_.d=null},
DU:function DU(d,e,f,g,h){var _=this
_.CW=d
_.cx=e
_.cy=null
_.x=f
_.a=g
_.b=-1
_.c=h
_.w=_.r=_.f=_.e=_.d=null},
aoW:function aoW(d,e,f){this.a=d
this.b=e
this.c=f},
aoV:function aoV(d,e){this.a=d
this.b=e},
a9J:function a9J(d,e,f,g){var _=this
_.a=d
_.a23$=e
_.wm$=f
_.mc$=g},
DW:function DW(d,e,f,g,h){var _=this
_.CW=d
_.cx=e
_.cy=null
_.x=f
_.a=g
_.b=-1
_.c=h
_.w=_.r=_.f=_.e=_.d=null},
DX:function DX(d,e,f,g,h){var _=this
_.CW=d
_.cx=e
_.cy=null
_.x=f
_.a=g
_.b=-1
_.c=h
_.w=_.r=_.f=_.e=_.d=null},
br:function br(d){this.a=d
this.b=!1},
bx:function bx(){var _=this
_.e=_.d=_.c=_.b=_.a=null
_.f=!0
_.z=_.y=_.x=_.w=_.r=null},
hE:function hE(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aj1:function aj1(){var _=this
_.d=_.c=_.b=_.a=0},
a8L:function a8L(){var _=this
_.d=_.c=_.b=_.a=0},
ZG:function ZG(){this.b=this.a=null},
a8W:function a8W(){var _=this
_.d=_.c=_.b=_.a=0},
rV:function rV(d,e){var _=this
_.a=d
_.b=e
_.d=0
_.f=_.e=-1},
ai8:function ai8(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=!1
_.e=0
_.f=-1
_.Q=_.z=_.y=_.x=_.w=_.r=0},
ws:function ws(d,e){var _=this
_.b=_.a=null
_.e=_.d=_.c=0
_.f=d
_.r=e
_.x=_.w=0
_.y=null
_.z=0
_.as=_.Q=!0
_.ch=_.ay=_.ax=_.at=!1
_.CW=-1
_.cx=0},
rl:function rl(d){var _=this
_.a=d
_.b=-1
_.e=_.d=_.c=0},
mJ:function mJ(){this.b=this.a=null},
an1:function an1(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ai9:function ai9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.e=_.d=0
_.f=g},
oF:function oF(d,e){this.a=d
this.b=e},
UR:function UR(d,e,f,g,h,i,j){var _=this
_.ch=null
_.CW=d
_.cx=e
_.cy=f
_.db=g
_.dy=1
_.fr=!1
_.fx=h
_.id=_.go=_.fy=null
_.a=i
_.b=-1
_.c=j
_.w=_.r=_.f=_.e=_.d=null},
aid:function aid(d){this.a=d},
ajl:function ajl(d,e,f){var _=this
_.a=d
_.b=null
_.c=e
_.d=f
_.f=_.e=!1
_.r=1},
dV:function dV(){},
Bp:function Bp(){},
DP:function DP(){},
UB:function UB(){},
UF:function UF(d,e){this.a=d
this.b=e},
UD:function UD(d,e){this.a=d
this.b=e},
UC:function UC(d){this.a=d},
UE:function UE(d){this.a=d},
Us:function Us(d,e,f,g,h,i){var _=this
_.f=d
_.r=e
_.a=!1
_.b=f
_.c=g
_.d=h
_.e=i},
Ur:function Ur(d,e,f,g,h){var _=this
_.f=d
_.a=!1
_.b=e
_.c=f
_.d=g
_.e=h},
Uq:function Uq(d,e,f,g,h){var _=this
_.f=d
_.a=!1
_.b=e
_.c=f
_.d=g
_.e=h},
Uw:function Uw(d,e,f,g,h,i,j){var _=this
_.f=d
_.r=e
_.w=f
_.a=!1
_.b=g
_.c=h
_.d=i
_.e=j},
UA:function UA(d,e,f,g,h,i){var _=this
_.f=d
_.r=e
_.a=!1
_.b=f
_.c=g
_.d=h
_.e=i},
Uz:function Uz(d,e,f,g,h,i){var _=this
_.f=d
_.r=e
_.a=!1
_.b=f
_.c=g
_.d=h
_.e=i},
Uu:function Uu(d,e,f,g,h,i,j){var _=this
_.f=d
_.r=e
_.w=f
_.x=null
_.a=!1
_.b=g
_.c=h
_.d=i
_.e=j},
Ut:function Ut(d,e,f,g,h,i,j){var _=this
_.f=d
_.r=e
_.w=f
_.a=!1
_.b=g
_.c=h
_.d=i
_.e=j},
Uy:function Uy(d,e,f,g,h,i){var _=this
_.f=d
_.r=e
_.a=!1
_.b=f
_.c=g
_.d=h
_.e=i},
Uv:function Uv(d,e,f,g,h,i,j,k){var _=this
_.f=d
_.r=e
_.w=f
_.x=g
_.a=!1
_.b=h
_.c=i
_.d=j
_.e=k},
Ux:function Ux(d,e,f,g,h,i){var _=this
_.f=d
_.r=e
_.a=!1
_.b=f
_.c=g
_.d=h
_.e=i},
av4:function av4(d,e,f,g){var _=this
_.a=d
_.b=!1
_.d=_.c=17976931348623157e292
_.f=_.e=-17976931348623157e292
_.r=e
_.w=f
_.x=!0
_.y=g
_.z=!1
_.ax=_.at=_.as=_.Q=0},
akf:function akf(){var _=this
_.d=_.c=_.b=_.a=!1},
xE:function xE(d){this.a=d},
DZ:function DZ(d,e,f){var _=this
_.CW=null
_.x=d
_.a=e
_.b=-1
_.c=f
_.w=_.r=_.f=_.e=_.d=null},
aoP:function aoP(d){this.a=d},
aoR:function aoR(d){this.a=d},
aoS:function aoS(d){this.a=d},
ayX:function ayX(){},
oI:function oI(d,e){this.a=d
this.b=e},
e9:function e9(){},
UQ:function UQ(){},
f5:function f5(){},
aic:function aic(){},
pC:function pC(d,e,f){this.a=d
this.b=e
this.c=f},
aiN:function aiN(){},
E_:function E_(d,e,f,g){var _=this
_.CW=d
_.cy=_.cx=null
_.x=e
_.a=f
_.b=-1
_.c=g
_.w=_.r=_.f=_.e=_.d=null},
C7:function C7(d,e,f){var _=this
_.a=d
_.c=_.b=!1
_.d=e
_.e=f},
P8:function P8(){this.a=null
this.b=$
this.c=!1},
P7:function P7(d){this.a=!1
this.b=d},
aoT:function aoT(d,e){this.a=d
this.b=e},
Lq:function Lq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=!1
_.r=null
_.x=_.w=$
_.y=null},
qx:function qx(d,e,f){this.a=d
this.b=e
this.c=f},
wt:function wt(d,e,f,g,h,i){var _=this
_.f=d
_.r=e
_.a=f
_.b=g
_.c=h
_.d=i},
xD:function xD(){},
Ly:function Ly(d,e){this.b=d
this.c=e
this.a=null},
W4:function W4(d){this.b=d
this.a=null},
a7S:function a7S(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0
_.r=i
_.w=!0},
apD:function apD(d,e,f){var _=this
_.a=d
_.b=e
_.c=-1
_.d=0
_.e=null
_.r=_.f=0
_.x=_.w=-1
_.y=!1
_.z=f},
wE:function wE(){},
rm:function rm(d,e,f,g,h){var _=this
_.r=d
_.a=e
_.b=f
_.d=_.c=$
_.e=g
_.f=h},
hX:function hX(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.r=d
_.w=e
_.x=f
_.y=g
_.z=!1
_.Q=h
_.as=i
_.at=j
_.a=k
_.b=l
_.d=_.c=$
_.e=m
_.f=n},
CF:function CF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
afY:function afY(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.as=_.Q=_.z=_.y=0
_.at=!1
_.ax=0
_.ch=_.ay=$
_.cx=_.CW=0
_.cy=null},
aok:function aok(d,e){var _=this
_.a=d
_.b=e
_.c=""
_.e=_.d=null},
r4:function r4(d,e){this.a=d
this.b=e},
eE:function eE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
W7:function W7(d){this.a=d},
apE:function apE(d){this.a=d},
v5:function v5(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.y=l
_.z=m
_.as=n
_.at=o
_.ax=p
_.ay=q
_.ch=r
_.CW=s},
Bx:function Bx(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.z=m
_.Q=n},
Bz:function Bz(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q
_.ax=r
_.ay=s
_.ch=t
_.CW=u
_.cx=v
_.cy=w
_.db=x
_.dx=null
_.dy=$},
ai_:function ai_(){},
FJ:function FJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=$},
ap9:function ap9(d){this.a=d
this.b=null},
XW:function XW(d,e,f){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.r=_.f=$},
o1:function o1(d,e,f){this.a=d
this.b=e
this.c=f},
dx:function dx(d,e){this.a=d
this.b=e},
a_O:function a_O(d){this.a=d},
aqL:function aqL(d){this.a=d},
a_k:function a_k(){},
a1s:function a1s(){},
HX:function HX(){},
hJ(d,e,f,g,h){if(f==null)if(e==null){if(d==null)return new B.lJ(g.i("@<0>").aG(h).i("lJ<1,2>"))
e=B.ayW()}else{if(B.aQq()===e&&B.aQp()===d)return new B.tu(g.i("@<0>").aG(h).i("tu<1,2>"))
if(d==null)d=B.ayV()}else{if(e==null)e=B.ayW()
if(d==null)d=B.ayV()}return A.b_y(d,e,f,g,h)},
b_y(d,e,f,g,h){var x=f!=null?f:new A.ass(g)
return new A.GL(d,e,x,g.i("@<0>").aG(h).i("GL<1,2>"))},
eD(d){return new A.pv(d.i("pv<0>"))},
aDS(){var x=Object.create(null)
x["<non-identifier-key>"]=x
delete x["<non-identifier-key>"]
return x},
aCD(d,e,f){var x=B.j1(null,null,null,e,f)
J.fm(d,new A.ag3(x,e,f))
return x},
aKr(d){var x=new A.GS(d.i("GS<0>"))
x.a=x
x.b=x
return new A.Bm(x,d.i("Bm<0>"))},
GL:function GL(d,e,f,g){var _=this
_.f=d
_.r=e
_.w=f
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=g},
ass:function ass(d){this.a=d},
pv:function pv(d){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=d},
lK:function lK(d,e,f){var _=this
_.a=d
_.b=e
_.c=0
_.d=null
_.$ti=f},
ag3:function ag3(d,e,f){this.a=d
this.b=e
this.c=f},
GR:function GR(){},
GQ:function GQ(d,e,f){var _=this
_.c=d
_.d=e
_.b=_.a=null
_.$ti=f},
GS:function GS(d){this.b=this.a=null
this.$ti=d},
Bm:function Bm(d,e){this.a=d
this.b=0
this.$ti=e},
a_p:function a_p(d,e,f){var _=this
_.a=d
_.b=e
_.c=null
_.$ti=f},
eG(d){var x,w=$.ew()
for(x=J.aC(d);x.t();)w=B.D(w,J.x(x.gO(x)))
return B.eJ(w)},
tN(d,e,f,g,h,i,j){var x,w,v,u,t,s
i=i==null?"":B.aP7(i,0,i.length)
j=B.aP8(j,0,j==null?0:j.length)
d=B.aP3(d,0,d==null?0:d.length,!1)
x=B.aP6(null,0,0,h)
w=B.aP2(null,0,0)
g=B.aE5(g,i)
v=i==="file"
if(d==null)u=j.length!==0||g!=null||v
else u=!1
if(u)d=""
u=d==null
t=!u
e=B.aP5(e,0,e==null?0:e.length,f,i,t)
s=i.length===0
if(s&&u&&!C.c.bc(e,"/"))e=B.aE7(e,!s||t)
else e=B.nn(e)
return B.axc(i,j,u&&C.c.bc(e,"//")?"":d,g,e,x,w)},
bp:function bp(){},
aXv(){if($.bd())return new A.nO()
else return new A.P8()},
aUF(d,e){var x='"recorder" must not already be associated with another Canvas.'
if($.bd()){if(d.ga3g())B.M(B.bs(x,null))
if(e==null)e=D.mg
return new A.a7P(y.gK.a(d).nn(0,e))}else{y.br.a(d)
if(d.c)B.M(B.bs(x,null))
return new A.aoO(d.nn(0,e==null?D.mg:e))}},
aYl(){var x,w,v
if($.bd()){x=new A.W3(B.a([],y._),C.a0)
w=new A.afW(x)
w.b=x
return w}else{x=B.a([],y.dy)
w=$.aoQ
v=B.a([],y.g)
w=w!=null&&w.c===D.aT?w:null
w=new A.ie(w,y.K)
$.lZ.push(w)
w=new A.DZ(v,w,D.c7)
w.f=B.f2()
x.push(w)
return new A.aoP(x)}},
lf(d,e){var x=d.a,w=e*2/2,v=d.b
return new B.C(x-w,v-w,x+w,v+w)},
aY9(d,e,f){var x=d.a,w=f/2,v=d.b,u=e/2
return new B.C(x-w,v-u,x+w,v+u)},
ajn(d,e){var x=d.a,w=e.a,v=d.b,u=e.b
return new B.C(Math.min(x,w),Math.min(v,u),Math.max(x,w),Math.max(v,u))},
aj2(d,e,f,g,h){var x=g.a,w=g.b,v=h.a,u=h.b,t=e.a,s=e.b,r=f.a,q=f.b,p=x===w&&x===v&&x===u&&x===t&&x===s&&x===r&&x===q
return new A.ld(d.a,d.b,d.c,d.d,x,w,v,u,r,q,t,s,p)},
a5t(d){var x,w
if(d!=null)for(x=J.aC(d),w=0;x.t();)w=B.fg(w,x.gO(x))
else w=0
return B.aOE(w)},
bV(){if($.bd()){var x=new A.uy(D.cs)
x.mW(null,y.jt)
return x}else return A.aDs()},
aNU(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var x
if($.bd()){x=y.lY
return A.aBO(x.a(d),e,f,g,h,i,j,k,l,m,n,o,x.a(p),q,r,s,t,u,v,w)}else return A.aKA(d,e,f,g,h,i,j,k,l,m,n,null,o,p,q,s,t,u,v,w)},
aCX(d,e,f,g,h,i,j,k,l,m,n,o){var x,w,v,u,t,s,r,q,p=null
if($.bd()){x=A.aYF(p)
w=$.aTP()[m.a]
x.textAlign=w
w=n==null
if(!w)x.textDirection=$.aTR()[n.a]
if(k!=null)x.maxLines=k
v=i!=null
if(v)x.heightMultiplier=i
u=o==null
if(!u)x.textHeightBehavior=$.aTS()[0]
if(d!=null)x.ellipsis=d
if(l!=null){y.gF.a(l)
t=A.aYG(p)
t.fontFamilies=A.aEn(l.a,l.b)
s=l.c
if(s!=null)t.fontSize=s
s=l.d
if(s!=null)t.heightMultiplier=s
r=u?p:o.c
switch(r){case null:break
case D.HN:t.halfLeading=!0
break
case D.HM:t.halfLeading=!1
break}s=l.f
if(s!=null||!1)t.fontStyle=A.aFb(s,l.r)
t.forceStrutHeight=!0
t.strutEnabled=!0
x.strutStyle=t}q=A.aNs(p)
if(h!=null||!1)q.fontStyle=A.aFb(h,g)
if(f!=null)q.fontSize=f
if(v)q.heightMultiplier=i
q.fontFamilies=A.aEn(e,p)
x.textStyle=q
v=J.aG9($.bS.c8(),x)
w=w?C.C:n
return new A.LU(v,w,e,f,i,h,g,u?p:o.c)}else{y.mc.a(l)
return new A.Bx(m,n,h,g,k,e,f,i,o,d,j)}},
aCW(d){if($.bd())return A.aK_(d)
y.aQ.a(d)
return new A.a7S(new B.bD(""),d,B.a([],y.fn),B.a([],y.kK),new A.W4(d),B.a([],y.n))},
AG:function AG(d,e){this.a=d
this.b=e},
DT:function DT(d,e){this.a=d
this.b=e},
ct:function ct(d,e){this.a=d
this.b=e},
ld:function ld(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p},
Xw:function Xw(d,e){this.a=d
this.b=e},
Xx:function Xx(d,e){this.a=d
this.b=e},
DQ:function DQ(d,e){this.a=d
this.b=e},
q2:function q2(d,e){this.a=d
this.b=e},
qi:function qi(d,e){this.a=d
this.b=e},
C9:function C9(d,e){this.a=d
this.b=e},
UX:function UX(d,e){this.a=d
this.b=e},
iW:function iW(d){this.a=d},
xL:function xL(d,e){this.a=d
this.b=e},
FH:function FH(d){this.a=d},
XR:function XR(d,e){this.a=d
this.b=e},
FL:function FL(d,e){this.a=d
this.b=e},
iG:function iG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
xJ:function xJ(d,e){this.a=d
this.b=e},
bM:function bM(d,e){this.a=d
this.b=e},
oG:function oG(d){this.a=d},
Aj:function Aj(d,e){this.a=d
this.b=e},
Lg:function Lg(d,e){this.a=d
this.b=e},
DS:function DS(){},
hh:function hh(){},
hF:function hF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vh:function vh(d){this.a=d},
eT(){var x=$.aTX()
return x==null?$.aTb():x},
ayG:function ayG(){},
axL:function axL(){},
aH:function aH(){},
b3x(d){var x
if(y.aT.b(d))return d.b
x=J.fn(d)
return C.c.c7(x,C.c.e5(x,".")+1)},
Bc:function Bc(){},
a_e:function a_e(){},
ft:function ft(){},
CR:function CR(){},
t8:function t8(){},
T:function T(){},
fb:function fb(d,e){this.a=d
this.b=e},
BY:function BY(d,e){this.a=d
this.b=e},
fs:function fs(d,e){this.a=d
this.b=null
this.$ti=e},
Aa:function Aa(d,e){this.a=d
this.b=e},
a8r:function a8r(){},
a8s:function a8s(d,e){this.a=d
this.b=e},
a8t:function a8t(d,e){this.a=d
this.b=e},
cE:function cE(){},
bq:function bq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
px:function px(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
us(d){var x=d.a,w=d.b
return new A.aM(x,x,w,w)},
aM:function aM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7z:function a7z(){},
uu:function uu(d,e){this.c=d
this.a=e
this.b=null},
ex:function ex(d){this.a=d},
ty:function ty(d,e){this.a=d
this.b=e},
Hl:function Hl(d,e){this.a=d
this.b=e},
G:function G(){},
ajq:function ajq(d,e){this.a=d
this.b=e},
ajs:function ajs(d,e){this.a=d
this.b=e},
ajr:function ajr(d,e){this.a=d
this.b=e},
Et:function Et(d,e){var _=this
_.M=d
_.aa=$
_.go=_.fy=null
_.id=!1
_.k2=_.k1=null
_.k3=0
_.d=!1
_.f=_.e=null
_.w=_.r=!1
_.x=null
_.y=!1
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ax=!1
_.ay=e
_.ch=!1
_.CW=$
_.cx=!0
_.cy=null
_.db=!0
_.dx=null
_.a=0
_.c=_.b=null},
aG(d){return new A.Rr(d.i("Rr<0>"))},
aO0(d){return new A.xZ(d,D.j,A.aG(y.h))},
KB:function KB(d,e){this.a=d
this.$ti=e},
k_:function k_(){},
Rr:function Rr(d){this.a=null
this.$ti=d},
UV:function UV(d,e){var _=this
_.ax=d
_.ay=null
_.d=_.CW=_.ch=!1
_.e=e
_.f=0
_.r=!0
_.z=_.y=_.x=_.w=null
_.a=0
_.c=_.b=null},
cK:function cK(){},
l4:function l4(d,e){var _=this
_.id=d
_.ay=_.ax=null
_.d=!1
_.e=e
_.f=0
_.r=!0
_.z=_.y=_.x=_.w=null
_.a=0
_.c=_.b=null},
ma:function ma(d,e){var _=this
_.id=null
_.k1=d
_.ay=_.ax=null
_.d=!1
_.e=e
_.f=0
_.r=!0
_.z=_.y=_.x=_.w=null
_.a=0
_.c=_.b=null},
AH:function AH(d,e){var _=this
_.id=null
_.k1=d
_.ay=_.ax=null
_.d=!1
_.e=e
_.f=0
_.r=!0
_.z=_.y=_.x=_.w=null
_.a=0
_.c=_.b=null},
xZ:function xZ(d,e,f){var _=this
_.to=d
_.x2=_.x1=null
_.xr=!0
_.id=e
_.ay=_.ax=null
_.d=!1
_.e=f
_.f=0
_.r=!0
_.z=_.y=_.x=_.w=null
_.a=0
_.c=_.b=null},
DK:function DK(d,e){var _=this
_.to=null
_.id=d
_.ay=_.ax=null
_.d=!1
_.e=e
_.f=0
_.r=!0
_.z=_.y=_.x=_.w=null
_.a=0
_.c=_.b=null},
a0x:function a0x(){},
aMw(d,e,f){var x,w,v=d.ay,u=y.di.a(v.a)
if(u==null){x=new A.l4(D.j,A.aG(y.h))
v.sbr(0,x)
v=x}else{u.ON()
v=u}w=d.gll()
e=new A.hR(v,w)
d.XV(e,D.j)
e.u7()},
aYd(d){d.UM()},
aYe(d){d.aoz()},
aOR(d,e){var x
if(d==null)return null
if(!d.ga_(d)){x=e.a
x=x[0]===0&&x[1]===0&&x[2]===0&&x[3]===0&&x[4]===0&&x[5]===0&&x[6]===0&&x[7]===0&&x[8]===0&&x[9]===0&&x[10]===0&&x[11]===0&&x[12]===0&&x[13]===0&&x[14]===0&&x[15]===0}else x=!0
if(x)return C.a0
return A.aM7(e,d)},
b03(d,e,f,g){var x,w,v,u=e.gan(e)
u.toString
x=y.F
x.a(u)
for(w=u;w!==d;w=u,e=v){w.eZ(e,f)
u=w.gan(w)
u.toString
x.a(u)
v=e.gan(e)
v.toString
x.a(v)}d.eZ(e,f)
d.eZ(e,g)},
aOQ(d,e){if(d==null)return e
if(e==null)return d
return d.h5(e)},
cQ:function cQ(){},
hR:function hR(d,e){var _=this
_.a=d
_.b=e
_.e=_.d=_.c=null},
ahZ:function ahZ(d,e,f){this.a=d
this.b=e
this.c=f},
ahY:function ahY(d,e,f){this.a=d
this.b=e
this.c=f},
Mp:function Mp(){},
z:function z(){},
ajU:function ajU(d){this.a=d},
ajY:function ajY(d,e,f){this.a=d
this.b=e
this.c=f},
ajW:function ajW(d){this.a=d},
ajX:function ajX(){},
ajV:function ajV(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
b7:function b7(){},
aw2:function aw2(){},
asg:function asg(d,e){this.b=d
this.a=e},
tx:function tx(){},
a2D:function a2D(d,e,f){var _=this
_.e=d
_.b=e
_.c=null
_.a=f},
a3s:function a3s(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=!1
_.w=f
_.x=!1
_.b=g
_.c=null
_.a=h},
aw3:function aw3(){var _=this
_.b=_.a=null
_.d=_.c=$
_.e=!1},
a2o:function a2o(){},
oX:function oX(d,e){this.a=d
this.b=e},
aKb(d){var x=$.aK9.h(0,d)
if(x==null){x=$.aKa
$.aKa=x+1
$.aK9.l(0,d,x)
$.aK8.l(0,x,d)}return x},
aYo(d,e){var x
if(d.length!==e.length)return!1
for(x=0;x<d.length;++x)if(!J.h(d[x],e[x]))return!1
return!0},
Wu(d,e){var x,w=$.aAk(),v=w.p2,u=w.e,t=w.p3,s=w.f,r=w.bL,q=w.p4,p=w.R8,o=w.RG,n=w.rx,m=w.ry,l=w.x1,k=w.x2
w=w.xr
x=($.alO+1)%65535
$.alO=x
return new A.bL(d,x,e,C.a0,v,u,t,s,r,q,p,o,n,m,l,k,w)},
tV(d,e){var x,w
if(d.r==null)return e
x=new Float64Array(3)
w=new A.eN(x)
w.lB(e.a,e.b,0)
d.r.aBg(w)
return new B.n(x[0],x[1])},
b0F(d,e){var x,w,v,u,t,s,r,q,p=B.a([],y.E)
for(x=d.length,w=0;w<d.length;d.length===x||(0,B.F)(d),++w){v=d[w]
u=v.w
p.push(new A.nb(!0,A.tV(v,new B.n(u.a- -0.1,u.b- -0.1)).b,v))
p.push(new A.nb(!1,A.tV(v,new B.n(u.c+-0.1,u.d+-0.1)).b,v))}C.d.kt(p)
t=B.a([],y.I)
for(x=p.length,u=y.L,s=null,r=0,w=0;w<p.length;p.length===x||(0,B.F)(p),++w){q=p[w]
if(q.a){++r
if(s==null)s=new A.ky(q.b,e,B.a([],u))
s.c.push(q.c)}else --r
if(r===0){s.toString
t.push(s)
s=null}}C.d.kt(t)
x=y.fF
return B.al(new B.ib(t,new A.axN(),x),!0,x.i("p.E"))},
rF(){return new A.alA(B.E(y.d,y.dq),B.E(y.D,y.cj),new A.dp("",D.aL),new A.dp("",D.aL),new A.dp("",D.aL),new A.dp("",D.aL),new A.dp("",D.aL))},
axP(d,e,f,g){if(d.a.length===0)return f
if(g!=e&&e!=null)switch(e.a){case 0:d=new A.dp("\u202b",D.aL).ac(0,d).ac(0,new A.dp("\u202c",D.aL))
break
case 1:d=new A.dp("\u202a",D.aL).ac(0,d).ac(0,new A.dp("\u202c",D.aL))
break}if(f.a.length===0)return d
return f.ac(0,new A.dp("\n",D.aL)).ac(0,d)},
dp:function dp(d,e){this.a=d
this.b=e},
Wt:function Wt(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q
_.ax=r
_.ay=s
_.ch=t
_.CW=u
_.cx=v
_.cy=w
_.db=x
_.dx=a0
_.dy=a1},
a2P:function a2P(d,e,f,g,h,i,j){var _=this
_.as=d
_.f=e
_.r=null
_.a=f
_.b=g
_.c=h
_.d=i
_.e=j},
bL:function bL(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.w=g
_.Q=_.z=_.y=_.x=null
_.as=!1
_.at=h
_.ax=null
_.ay=$
_.CW=_.ch=!1
_.cx=i
_.cy=j
_.db=k
_.dx=null
_.dy=l
_.fr=m
_.fx=n
_.fy=o
_.go=p
_.id=q
_.k1=r
_.k2=s
_.k3=null
_.k4=t
_.x1=_.to=_.ry=_.rx=_.RG=_.R8=_.p4=_.p3=_.p1=_.ok=null
_.a=0
_.c=_.b=null},
alP:function alP(d,e,f){this.a=d
this.b=e
this.c=f},
alN:function alN(){},
nb:function nb(d,e,f){this.a=d
this.b=e
this.c=f},
ky:function ky(d,e,f){this.a=d
this.b=e
this.c=f},
aw8:function aw8(){},
aw4:function aw4(){},
aw7:function aw7(d,e,f){this.a=d
this.b=e
this.c=f},
aw5:function aw5(){},
aw6:function aw6(d){this.a=d},
axN:function axN(){},
nm:function nm(d,e,f){this.a=d
this.b=e
this.c=f},
alA:function alA(d,e,f,g,h,i,j){var _=this
_.d=_.c=_.b=_.a=!1
_.e=d
_.f=0
_.p1=_.ok=_.k4=_.k3=_.k2=_.k1=_.id=_.r=null
_.p2=!1
_.p3=e
_.p4=f
_.R8=g
_.RG=h
_.rx=i
_.ry=j
_.to=null
_.x2=_.x1=0
_.aN=_.al=_.aF=_.y2=_.y1=_.xr=null
_.bL=0},
alB:function alB(d){this.a=d},
alE:function alE(d){this.a=d},
alC:function alC(d){this.a=d},
alF:function alF(d){this.a=d},
alD:function alD(d){this.a=d},
alG:function alG(d){this.a=d},
alH:function alH(d){this.a=d},
Oq:function Oq(d,e){this.a=d
this.b=e},
a2O:function a2O(){},
a2Q:function a2Q(){},
aUm(d){return C.Y.dz(0,B.bP(d.buffer,0,null))},
KM:function KM(){},
a7L:function a7L(){},
ail:function ail(d,e){this.a=d
this.b=e},
afM:function afM(){},
f:function f(d){this.a=d},
o:function o(d){this.a=d},
a0w:function a0w(){},
aoL:function aoL(){},
af2:function af2(){},
af4:function af4(){},
Dl:function Dl(){},
cn:function cn(){},
a_b:function a_b(){},
a3v:function a3v(d,e){this.a=d
this.b=e},
pf:function pf(d){this.a=d},
a0Y:function a0Y(){},
m5:function m5(d,e,f){this.a=d
this.b=e
this.$ti=f},
a7g:function a7g(d,e){this.a=d
this.b=e},
oD:function oD(d,e){this.a=d
this.b=e},
or:function or(d,e){this.a=d
this.b=e},
hP:function hP(d,e){this.a=d
this.b=e},
aj6:function aj6(d,e,f){this.a=d
this.d=e
this.e=f},
aj7:function aj7(d){this.a=d},
da:function da(d,e){this.a=d
this.b=e},
dj(d,e,f,g){var x=e<f,w=x?e:f
return new A.fd(e,f,d,g,w,x?f:e)},
fd:function fd(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h
_.b=i},
abU(d,e,f,g,h,i,j){return new A.cx(j,d,!0,!0,h,i,B.a([],y.J),$.bA())},
PM(d,e,f){var x=y.J
return new A.oa(B.a([],x),f,d,!0,!0,null,null,B.a([],x),$.bA())},
jY:function jY(d,e){this.a=d
this.b=e},
Zl:function Zl(d,e){this.a=d
this.b=e},
abS:function abS(d){this.a=d},
Gc:function Gc(d,e){this.a=d
this.b=e},
cx:function cx(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h
_.r=i
_.y=_.x=_.w=null
_.z=!1
_.Q=null
_.as=j
_.ax=_.at=null
_.ay=!1
_.y1$=0
_.y2$=k
_.al$=_.aF$=0
_.aN$=!1},
abV:function abV(){},
oa:function oa(d,e,f,g,h,i,j,k,l){var _=this
_.dx=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=null
_.f=i
_.r=j
_.y=_.x=_.w=null
_.z=!1
_.Q=null
_.as=k
_.ax=_.at=null
_.ay=!1
_.y1$=0
_.y2$=l
_.al$=_.aF$=0
_.aN$=!1},
jQ:function jQ(d,e){this.a=d
this.b=e},
a_W:function a_W(){},
a_X:function a_X(){},
aVG(d){d.cG()
d.c2(A.aQI())},
Pg(d){var x=d.a,w=x instanceof B.vl?x:null
return new A.Pf("",w,new A.t8())},
aEi(d,e,f,g){var x=new B.cc(e,f,"widgets library",d,g,!1)
B.eB(x)
return x},
jS:function jS(){},
j:function j(){},
aJ:function aJ(){},
CD:function CD(){},
tp:function tp(d,e){this.a=d
this.b=e},
aq:function aq(){},
aaz:function aaz(d){this.a=d},
aaA:function aaA(d){this.a=d},
aaw:function aaw(d){this.a=d},
aay:function aay(){},
aax:function aax(d){this.a=d},
Pf:function Pf(d,e,f){this.d=d
this.e=e
this.a=f},
bQ:function bQ(){},
ajQ:function ajQ(d){this.a=d},
ajR:function ajR(d){this.a=d},
Ru:function Ru(d,e){var _=this
_.d=_.c=_.b=_.a=_.cx=_.ch=null
_.e=$
_.f=d
_.r=null
_.w=e
_.z=_.y=null
_.Q=!1
_.as=!0
_.ay=_.ax=_.at=!1},
qP:function qP(d,e,f){this.a=d
this.b=e
this.$ti=f},
a19:function a19(d,e){var _=this
_.d=_.c=_.b=_.a=null
_.e=$
_.f=d
_.r=null
_.w=e
_.z=_.y=null
_.Q=!1
_.as=!0
_.ay=_.ax=_.at=!1},
a1a:function a1a(d){this.a=d},
Dc(d){var x=new A.bv(new Float64Array(16))
if(x.nu(d)===0)return null
return x},
aX7(){return new A.bv(new Float64Array(16))},
aX8(){var x=new A.bv(new Float64Array(16))
x.f5()
return x},
ra(d,e,f){var x=new Float64Array(16),w=new A.bv(x)
w.f5()
x[14]=f
x[13]=e
x[12]=d
return w},
TB(d,e,f){var x=new Float64Array(16)
x[15]=1
x[10]=f
x[5]=e
x[0]=d
return new A.bv(x)},
r8:function r8(d){this.a=d},
bv:function bv(d){this.a=d},
eN:function eN(d){this.a=d},
kq:function kq(d){this.a=d},
b4T(d,e){B.iS(d,"eventKind")
B.iS(e,"eventData")
C.bq.ny(e)},
aDB(d,e,f){B.iS(d,"name")
$.aDz.push(null)
return},
aDA(){var x,w
if($.aDz.length===0)throw B.c(B.af("Uneven calls to startSync and finishSync"))
x=$.aDz.pop()
if(x==null)return
x.gaC5()
w=x.d
if(w!=null){B.e(w.b)
A.aPg(null)}},
aPg(d){if(d==null||d.gm(d)===0)return"{}"
return C.bq.ny(d)},
aD1(d,e){var x,w
if(d==null)return e
x=new A.eN(new Float64Array(3))
x.lB(e.a,e.b,0)
w=d.Ft(x).a
return new B.n(w[0],w[1])},
aD0(d,e,f,g){if(d==null)return f
if(e==null)e=A.aD1(d,g)
return e.aD(0,A.aD1(d,g.aD(0,f)))},
aD_(d){var x,w,v=new Float64Array(4),u=new A.kq(v)
u.yS(0,0,1,0)
x=new Float64Array(16)
w=new A.bv(x)
w.bZ(d)
x[11]=v[3]
x[10]=v[2]
x[9]=v[1]
x[8]=v[0]
w.Gt(2,u)
return w},
aOq(){var x=$.S
x.toString
return x},
aW9(d,e){var x=d.a6(y.mj),w=x==null?null:x.f
if(w==null)return null
return w},
aXh(d){return new Float64Array(d)},
aCQ(d){return new Int32Array(d)},
aLl(){var x=document.createElement("img")
return x},
aNM(){var x=y.T.a(C.c2.kV(document,"http://www.w3.org/2000/svg","svg"))
x.setAttribute("version","1.1")
return y.y.a(x)},
a5n(d,e,f,g,h){return A.b3j(d,e,f,g,h,h)},
b3j(d,e,f,g,h,i){var x=0,w=B.a2(i),v
var $async$a5n=B.a3(function(j,k){if(j===1)return B.a_(k,w)
while(true)switch(x){case 0:x=3
return B.a5(null,$async$a5n)
case 3:v=d.$1(e)
x=1
break
case 1:return B.a0(v,w)}})
return B.a1($async$a5n,w)},
a5y(d,e){var x
if(d==null)return e==null
if(e==null||d.gm(d)!==e.gm(e))return!1
if(d===e)return!0
for(x=d.ga9(d);x.t();)if(!e.v(0,x.gO(x)))return!1
return!0},
ev(d,e){var x
if(d==null)return e==null
if(e==null||d.length!==e.length)return!1
if(d===e)return!0
for(x=0;x<d.length;++x)if(!J.h(d[x],e[x]))return!1
return!0},
lY(d){if(d==null)return"null"
return C.e.aj(d,1)},
agu(d){var x=d.a
if(x[0]===1&&x[1]===0&&x[2]===0&&x[3]===0&&x[4]===0&&x[5]===1&&x[6]===0&&x[7]===0&&x[8]===0&&x[9]===0&&x[10]===1&&x[11]===0&&x[14]===0&&x[15]===1)return new B.n(x[12],x[13])
return null},
aXa(d,e){var x,w
if(d===e)return!0
if(d==null)return A.aCI(e)
x=d.a
w=e.a
return x[0]===w[0]&&x[1]===w[1]&&x[2]===w[2]&&x[3]===w[3]&&x[4]===w[4]&&x[5]===w[5]&&x[6]===w[6]&&x[7]===w[7]&&x[8]===w[8]&&x[9]===w[9]&&x[10]===w[10]&&x[11]===w[11]&&x[12]===w[12]&&x[13]===w[13]&&x[14]===w[14]&&x[15]===w[15]},
aCI(d){var x=d.a
return x[0]===1&&x[1]===0&&x[2]===0&&x[3]===0&&x[4]===0&&x[5]===1&&x[6]===0&&x[7]===0&&x[8]===0&&x[9]===0&&x[10]===1&&x[11]===0&&x[12]===0&&x[13]===0&&x[14]===0&&x[15]===1},
hp(d,e){var x=d.a,w=e.a,v=e.b,u=x[0]*w+x[4]*v+x[12],t=x[1]*w+x[5]*v+x[13],s=x[3]*w+x[7]*v+x[15]
if(s===1)return new B.n(u,t)
else return new B.n(u/s,t/s)},
agt(d,e,f,g,h){var x,w=h?1:1/(d[3]*e+d[7]*f+d[15]),v=(d[0]*e+d[4]*f+d[12])*w,u=(d[1]*e+d[5]*f+d[13])*w
if(g){x=$.aAi()
x[2]=v
x[0]=v
x[3]=u
x[1]=u}else{x=$.aAi()
if(v<x[0])x[0]=v
if(u<x[1])x[1]=u
if(v>x[2])x[2]=v
if(u>x[3])x[3]=u}},
ow(a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a9.a,a3=b0.a,a4=b0.b,a5=b0.c,a6=a5-a3,a7=b0.d,a8=a7-a4
if(!isFinite(a6)||!isFinite(a8)){x=a2[3]===0&&a2[7]===0&&a2[15]===1
A.agt(a2,a3,a4,!0,x)
A.agt(a2,a5,a4,!1,x)
A.agt(a2,a3,a7,!1,x)
A.agt(a2,a5,a7,!1,x)
a5=$.aAi()
return new B.C(a5[0],a5[1],a5[2],a5[3])}a5=a2[0]
w=a5*a6
a7=a2[4]
v=a7*a8
u=a5*a3+a7*a4+a2[12]
a7=a2[1]
t=a7*a6
a5=a2[5]
s=a5*a8
r=a7*a3+a5*a4+a2[13]
a5=a2[3]
if(a5===0&&a2[7]===0&&a2[15]===1){q=u+w
if(w<0)p=u
else{p=q
q=u}if(v<0)q+=v
else p+=v
o=r+t
if(t<0)n=r
else{n=o
o=r}if(s<0)o+=s
else n+=s
return new B.C(q,o,p,n)}else{a7=a2[7]
m=a7*a8
l=a5*a3+a7*a4+a2[15]
k=u/l
j=r/l
a7=u+w
a5=l+a5*a6
i=a7/a5
h=r+t
g=h/a5
f=l+m
e=(u+v)/f
d=(r+s)/f
a5+=m
a0=(a7+v)/a5
a1=(h+s)/a5
return new B.C(A.aM5(k,i,e,a0),A.aM5(j,g,d,a1),A.aM4(k,i,e,a0),A.aM4(j,g,d,a1))}},
aM5(d,e,f,g){var x=d<e?d:e,w=f<g?f:g
return x<w?x:w},
aM4(d,e,f,g){var x=d>e?d:e,w=f>g?f:g
return x>w?x:w},
aM7(d,e){var x
if(A.aCI(d))return e
x=new A.bv(new Float64Array(16))
x.bZ(d)
x.nu(x)
return A.ow(x,e)}},C,B,D,J,E
A=a.updateHolder(c[33],A)
C=c[2]
B=c[0]
D=c[37]
J=c[1]
E=c[34]
A.a7T.prototype={
gcw(d){var x,w=this.d
if(w==null){this.I3()
x=this.d
x.toString
w=x}return w},
ger(){if(this.y==null)this.I3()
var x=this.e
x.toString
return x},
I3(){var x,w,v,u,t,s,r,q,p=this,o=!1,n=null,m=p.y
if(m!=null){m.width=0
p.y.height=0
p.y=null}m=p.x
if(m!=null&&m.length!==0){m.toString
x=C.d.fF(m,0)
p.y=x
n=x
o=!0
w=!0}else{m=p.f
v=B.bt()
u=p.r
t=B.bt()
n=p.Ud(m,u)
s=n
p.y=s
if(s==null){A.aRo()
n=p.Ud(m,u)}s=n.style
s.position="absolute"
s.width=B.e(m/v)+"px"
s.height=B.e(u/t)+"px"
w=!1}m=p.z
v=m.lastChild
u=n
if(v==null?u!=null:v!==u)m.appendChild(n)
try{if(o)n.style.removeProperty("z-index")
p.d=n.getContext("2d")}catch(r){}m=p.d
if(m==null){A.aRo()
m=p.d=n.getContext("2d")}v=p.as
p.e=new A.a8O(m,p,v,D.jX,D.fH,D.fI)
q=p.gcw(p)
q.save();++p.Q
q.setTransform(1,0,0,1,0,0)
if(w)q.clearRect(0,0,p.f*v,p.r*v)
q.scale(B.bt()*v,B.bt()*v)
p.apn()},
Ud(d,e){var x=this.as
return A.b5t(C.e.eh(d*x),C.e.eh(e*x))},
aS(d){var x,w,v,u,t,s=this
s.acT(0)
if(s.y!=null){x=s.d
if(x!=null)try{x.font=""}catch(v){w=B.ay(v)
if(!J.h(w.name,"NS_ERROR_FAILURE"))throw v}}if(s.y!=null){s.JC()
s.e.hv(0)
u=s.w
if(u==null)u=s.w=B.a([],y.o)
t=s.y
t.toString
u.push(t)
s.e=s.d=null}s.x=s.w
s.e=s.d=s.y=s.w=null},
Yo(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.gcw(n)
if(g!=null)for(x=g.length,w=n.as,v=y.H;d<x;++d){u=g[d]
t=u.d
s=t.a
r=e.a
if(s[0]!==r[0]||s[1]!==r[1]||s[4]!==r[4]||s[5]!==r[5]||s[12]!==r[12]||s[13]!==r[13]){q=window.devicePixelRatio
q=(q===0?1:q)*w
m.setTransform(q,0,0,q,0,0)
m.transform(s[0],s[1],s[4],s[5],s[12],s[13])
e=t}s=u.a
if(s!=null){m.beginPath()
r=s.a
p=s.b
m.rect(r,p,s.c-r,s.d-p)
m.clip()}else{s=u.b
if(s!=null){o=A.bV()
o.eF(0,s)
n.uV(m,v.a(o))
m.clip()}else{s=u.c
if(s!=null){n.uV(m,s)
if(s.b===D.cs)m.clip()
else m.clip("evenodd")}}}}w=f.a
v=e.a
if(w[0]!==v[0]||w[1]!==v[1]||w[4]!==v[4]||w[5]!==v[5]||w[12]!==v[12]||w[13]!==v[13]){q=B.bt()*n.as
m.setTransform(q,0,0,q,0,0)
m.transform(w[0],w[1],w[4],w[5],w[12],w[13])}return d},
apn(){var x,w,v,u,t=this,s=t.gcw(t),r=B.f2(),q=t.a,p=q.length
for(x=0,w=0;w<p;++w,r=u){v=q[w]
u=v.a
x=t.Yo(x,r,u,v.b)
s.save();++t.Q}t.Yo(x,r,t.c,t.b)},
rq(){var x,w,v,u,t=this.x
if(t!=null){for(x=t.length,w=0;w<t.length;t.length===x||(0,B.F)(t),++w){v=t[w]
u=$.cO()
if(u===C.aa){v.height=0
v.width=0}u=v.parentNode
if(u!=null)u.removeChild(v)}this.x=null}this.JC()},
JC(){for(;this.Q!==0;){this.d.restore();--this.Q}},
b0(d,e,f){var x=this
x.ad1(0,e,f)
if(x.y!=null)x.gcw(x).translate(e,f)},
afT(d,e){var x,w
d.beginPath()
x=e.a
w=e.b
d.rect(x,w,e.c-x,e.d-w)
d.clip()},
afS(d,e){var x=A.bV()
x.eF(0,e)
this.uV(d,y.H.a(x))
d.clip()},
ih(d,e){var x,w=this
w.acU(0,e)
if(w.y!=null){x=w.gcw(w)
w.uV(x,e)
if(e.b===D.cs)x.clip()
else x.clip("evenodd")}},
uV(d,e){var x,w,v,u,t,s,r,q,p,o
d.beginPath()
x=$.aFj()
w=e.a
v=new A.rl(w)
v.ul(w)
for(;u=v.hW(0,x),u!==6;)switch(u){case 0:d.moveTo(x[0],x[1])
break
case 1:d.lineTo(x[2],x[3])
break
case 4:d.bezierCurveTo(x[2],x[3],x[4],x[5],x[6],x[7])
break
case 2:d.quadraticCurveTo(x[2],x[3],x[4],x[5])
break
case 3:t=w.y[v.b]
s=new A.hE(x[0],x[1],x[2],x[3],x[4],x[5],t).P4()
r=s.length
for(q=1;q<r;q+=2){p=s[q]
o=s[q+1]
d.quadraticCurveTo(p.a,p.b,o.a,o.b)}break
case 5:d.closePath()
break
default:throw B.c(B.ch("Unknown path verb "+u))}},
apK(d,e,f,g){var x,w,v,u,t,s,r,q,p,o
d.beginPath()
x=$.aFj()
w=e.a
v=new A.rl(w)
v.ul(w)
for(;u=v.hW(0,x),u!==6;)switch(u){case 0:d.moveTo(x[0]+f,x[1]+g)
break
case 1:d.lineTo(x[2]+f,x[3]+g)
break
case 4:d.bezierCurveTo(x[2]+f,x[3]+g,x[4]+f,x[5]+g,x[6]+f,x[7]+g)
break
case 2:d.quadraticCurveTo(x[2]+f,x[3]+g,x[4]+f,x[5]+g)
break
case 3:t=w.y[v.b]
s=new A.hE(x[0],x[1],x[2],x[3],x[4],x[5],t).P4()
r=s.length
for(q=1;q<r;q+=2){p=s[q]
o=s[q+1]
d.quadraticCurveTo(p.a+f,p.b+g,o.a+f,o.b+g)}break
case 5:d.closePath()
break
default:throw B.c(B.ch("Unknown path verb "+u))}},
cL(d,e,f){var x,w=this,v=w.ger().Q,u=y.H
if(v==null)w.uV(w.gcw(w),u.a(e))
else w.apK(w.gcw(w),u.a(e),-v.a,-v.b)
u=w.ger()
x=e.b
if(f===D.ax)u.a.stroke()
else{u=u.a
if(x===D.cs)u.fill()
else u.fill("evenodd")}},
p(d){var x=$.cO()
if(x===C.aa&&this.y!=null){x=this.y
x.height=0
x.width=0}this.UP()},
UP(){var x,w,v,u,t=this.w
if(t!=null)for(x=t.length,w=0;w<t.length;t.length===x||(0,B.F)(t),++w){v=t[w]
u=$.cO()
if(u===C.aa){v.height=0
v.width=0}u=v.parentNode
if(u!=null)u.removeChild(v)}this.w=null}}
A.a8O.prototype={
sN5(d,e){var x=this.r
if(e==null?x!=null:e!==x){this.r=e
this.a.fillStyle=e}},
sGN(d,e){var x=this.w
if(e==null?x!=null:e!==x){this.w=e
this.a.strokeStyle=e}},
qc(d,e){var x,w,v,u,t,s,r,q,p=this
p.z=d
x=d.c
if(x==null)x=1
if(x!==p.x){p.x=x
p.a.lineWidth=x}x=d.a
if(x!=p.d){p.d=x
x=A.ayP(x)
if(x==null)x="source-over"
p.a.globalCompositeOperation=x}if(D.fH!==p.e){p.e=D.fH
x=A.b57(D.fH)
x.toString
p.a.lineCap=x}if(D.fI!==p.f){p.f=D.fI
p.a.lineJoin=A.b58(D.fI)}x=d.w
if(x!=null){if(y.q.b(x)){w=p.b
v=x.aug(w.gcw(w),e,p.c)
p.sN5(0,v)
p.sGN(0,v)
p.Q=e
p.a.translate(e.a,e.b)}}else{x=d.r
if(x!=null){u=B.d4(x)
p.sN5(0,u)
p.sGN(0,u)}else{p.sN5(0,"#000000")
p.sGN(0,"#000000")}}t=d.x
x=$.cO()
if(!(x===C.aa||!1)){if(!J.h(p.y,t)){p.y=t
p.a.filter=A.b4u(t)}}else if(t!=null){x=p.a
x.save()
x.shadowBlur=t.goc()*2
w=d.r
if(w!=null){w=B.d4(B.b_(255,w.gn(w)>>>16&255,w.gn(w)>>>8&255,w.gn(w)&255))
w.toString
x.shadowColor=w}else{w=B.d4(D.x)
w.toString
x.shadowColor=w}x.translate(-5e4,0)
s=new Float32Array(2)
w=$.dm().w
s[0]=5e4*(w==null?B.bt():w)
w=p.b
w.c.a5Z(s)
r=s[0]
q=s[1]
s[1]=0
s[0]=0
w.c.a5Z(s)
x.shadowOffsetX=r-s[0]
x.shadowOffsetY=q-s[1]}},
ty(){var x=this,w=x.z
if((w==null?null:w.x)!=null){w=$.cO()
w=w===C.aa||!1}else w=!1
if(w)x.a.restore()
w=x.Q
if(w!=null){x.a.translate(-w.a,-w.b)
x.Q=null}},
kh(d){var x=this.a
if(d===D.ax)x.stroke()
else x.fill()},
hv(d){var x=this,w=x.a
w.fillStyle=""
x.r=w.fillStyle
w.strokeStyle=""
x.w=w.strokeStyle
w.shadowBlur=0
w.shadowColor="none"
w.shadowOffsetX=0
w.shadowOffsetY=0
w.globalCompositeOperation="source-over"
x.d=D.jX
w.lineWidth=1
x.x=1
w.lineCap="butt"
x.e=D.fH
w.lineJoin="miter"
x.f=D.fI
x.Q=null}}
A.a2G.prototype={
aS(d){C.d.sm(this.a,0)
this.b=null
this.c=B.f2()},
ci(d){var x=this.c,w=new B.cm(new Float32Array(16))
w.bZ(x)
x=this.b
x=x==null?null:B.f1(x,!0,y.kQ)
this.a.push(new A.Wc(w,x))},
c4(d){var x,w=this.a
if(w.length===0)return
x=w.pop()
this.c=x.a
this.b=x.b},
b0(d,e,f){this.c.b0(0,e,f)},
ds(d,e,f){this.c.ds(0,e,f)},
jz(d,e){this.c.a5x(0,$.aSU(),e)},
aC(d,e){this.c.dE(0,new B.cm(e))},
nr(d,e){var x,w,v=this.b
if(v==null)v=this.b=B.a([],y.i)
x=this.c
w=new B.cm(new Float32Array(16))
w.bZ(x)
v.push(new A.rD(e,null,null,w))},
oZ(d,e){var x,w,v=this.b
if(v==null)v=this.b=B.a([],y.i)
x=this.c
w=new B.cm(new Float32Array(16))
w.bZ(x)
v.push(new A.rD(null,e,null,w))},
ih(d,e){var x,w,v=this.b
if(v==null)v=this.b=B.a([],y.i)
x=this.c
w=new B.cm(new Float32Array(16))
w.bZ(x)
v.push(new A.rD(null,null,e,w))}}
A.Vw.prototype={
nq(d,e){this.aa5(0,e)
this.b.b.push(new A.LB(e))},
lY(d,e,f){this.aa6(0,e,f)
this.b.b.push(new A.LC(e,f))},
M0(d,e,f){this.aa7(0,e,!0)
this.b.b.push(new A.LD(e,!0))},
lZ(d,e,f,g){this.aa8(0,e,f,g)
this.b.b.push(new A.LE(e,f,g))},
fW(d,e,f,g){this.aa9(0,e,f,g)
this.b.b.push(new A.LF(e,f,g))},
hM(d,e,f,g){this.aaa(0,e,f,g)
this.b.b.push(new A.LG(e,f,g))},
kY(d,e,f,g){this.aab(d,e,f,g)
this.b.b.push(new A.LH(A.aUN(B.b(d.b,"box")),e,f,g))},
kZ(d,e,f,g){this.aac(0,e,f,g)
this.b.b.push(new A.LI(e,f,g))},
rj(d,e){this.aad(0,e)
this.b.b.push(new A.LJ(e))},
ji(d,e,f){this.aae(0,e,f)
this.b.b.push(new A.LK(e,f))},
cL(d,e,f){this.aaf(0,e,f)
this.b.b.push(new A.LL(e,f))},
rk(d,e){this.aag(0,e)
this.b.b.push(new A.LM(e))},
dB(d,e,f){this.aah(0,e,f)
this.b.b.push(new A.LN(e,f))},
dg(d,e,f){this.aai(0,e,f)
this.b.b.push(new A.LO(e,f))},
MO(d,e,f,g,h){this.aaj(0,e,f,g,h)
this.b.b.push(new A.LP(e,f,g,h))},
c4(d){this.aak(0)
this.b.b.push(D.K2)},
o6(d,e){this.aal(0,e)
this.b.b.push(new A.LW(e))},
jz(d,e){this.aam(0,e)
this.b.b.push(new A.LX(e))},
ci(d){this.b.b.push(D.K3)
return this.aan(0)},
hz(d,e,f){this.aao(0,e,f)
this.b.b.push(new A.LZ(e,f))},
ds(d,e,f){this.aap(0,e,f)
this.b.b.push(new A.M_(e,f))},
aC(d,e){this.aaq(0,e)
this.b.b.push(new A.M0(e))},
b0(d,e,f){this.aar(0,e,f)
this.b.b.push(new A.M1(e,f))},
ga4F(){return this.b}}
A.a8d.prototype={
aAO(){var x,w,v,u,t=new self.window.flutterCanvasKit.PictureRecorder(),s=J.d(t),r=s.nn(t,B.fk(this.a))
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,B.F)(x),++v)x[v].ce(r)
u=s.a2c(t)
s.f8(t)
return u},
p(d){var x,w,v
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,B.F)(x),++v)x[v].p(0)}}
A.cY.prototype={
p(d){}}
A.LB.prototype={
ce(d){J.aAz(d,B.aEt($.aAr(),this.a))}}
A.LY.prototype={
ce(d){J.aBj(d)}}
A.LV.prototype={
ce(d){J.aBg(d)}}
A.LW.prototype={
ce(d){J.aBh(d,this.a)}}
A.M1.prototype={
ce(d){J.aBp(d,this.a,this.b)}}
A.M_.prototype={
ce(d){J.aBm(d,this.a,this.b)}}
A.LX.prototype={
ce(d){J.aBi(d,this.a*180/3.141592653589793,0,0)}}
A.M0.prototype={
ce(d){J.aAD(d,B.aRB(this.a))}}
A.LE.prototype={
ce(d){J.aAC(d,B.fk(this.a),$.aFH()[this.b.a],this.c)}}
A.LD.prototype={
ce(d){J.aAB(d,B.pN(this.a),$.a5P(),!0)}}
A.LC.prototype={
ce(d){J.aAA(d,this.a.gaW(),$.a5P(),this.b)}}
A.LI.prototype={
ce(d){var x=this.a,w=this.b
J.aAI(d,x.a,x.b,w.a,w.b,this.c.gaW())}}
A.LJ.prototype={
ce(d){J.aAJ(d,this.a.gaW())}}
A.LO.prototype={
ce(d){J.aAN(d,B.fk(this.a),this.b.gaW())}}
A.LN.prototype={
ce(d){J.aAM(d,B.pN(this.a),this.b.gaW())}}
A.LG.prototype={
ce(d){J.aAF(d,B.pN(this.a),B.pN(this.b),this.c.gaW())}}
A.LF.prototype={
ce(d){var x=this.a
J.aAE(d,x.a,x.b,this.b,this.c.gaW())}}
A.LL.prototype={
ce(d){J.aAL(d,this.a.gaW(),this.b.gaW())}}
A.LP.prototype={
ce(d){var x=this,w=$.dm().w
if(w==null)w=B.bt()
B.aQx(d,x.a,x.b,x.c,x.d,w)}}
A.LH.prototype={
ce(d){var x,w,v=this,u=v.d,t=u.at,s=v.b,r=v.c,q=v.a.b
if(t===C.oI)J.aAG(d,B.b(q,"box").gaW(),B.fk(s),B.fk(r),0.3333333333333333,0.3333333333333333,u.gaW())
else{q=B.b(q,"box").gaW()
s=B.fk(s)
r=B.fk(r)
x=t===C.kw?J.aAT(J.Kf($.bS.c8())):J.Kg(J.Kf($.bS.c8()))
w=t===C.oH?J.Kg(J.Kh($.bS.c8())):J.aAU(J.Kh($.bS.c8()))
J.aAH(d,q,s,r,x,w,u.gaW())}},
p(d){var x=this.a
x.d=!0
B.b(x.b,"box").aBj(x)}}
A.LK.prototype={
ce(d){var x,w=this.a,v=w.d
v.toString
x=this.b
J.aAK(d,w.n0(v),x.a,x.b)
if(!$.zD().NS(w))$.zD().H(0,w)}}
A.LM.prototype={
ce(d){J.Kd(d,this.a.gaW())}}
A.LZ.prototype={
ce(d){var x=this.b
x=x==null?null:x.gaW()
J.aBk(d,x,B.fk(this.a),null,null)}}
A.aiT.prototype={
ae7(){var x=new self.window.FinalizationRegistry(B.i0(new A.aiU(this)))
B.cq(this.a,"_skObjectFinalizationRegistry")
this.a=x},
pP(d,e,f){J.aIL(B.b(this.a,"_skObjectFinalizationRegistry"),e,f)},
M2(d){var x=this
x.b.push(d)
if(x.c==null)x.c=B.cH(C.E,new A.aiV(x))},
atx(){var x,w,v,u,t,s,r,q,p="SkObject collection-start",o="SkObject collection-end"
C.ma.a3B(window.performance,p)
s=this.b.length
x=null
w=null
for(r=0;r<s;++r){v=this.b[r]
if(J.aBc(v))continue
try{J.i3(v)}catch(q){u=B.ay(q)
t=B.b5(q)
if(x==null){x=u
w=t}}}this.b=B.a([],y.l)
C.ma.a3B(window.performance,o)
C.ma.axG(window.performance,"SkObject collection",p,o)
if(x!=null)throw B.c(new A.WX(x,w))}}
A.WX.prototype={
j(d){return"SkiaObjectCollectionError: "+B.e(this.a)+"\n"+B.e(this.b)},
$icb:1,
gu4(){return this.b}}
A.a7P.prototype={
ci(d){this.a.ci(0)},
hz(d,e,f){this.a.hz(0,e,y.z.a(f))},
c4(d){this.a.c4(0)},
b0(d,e,f){this.a.b0(0,e,f)},
ds(d,e,f){var x=f==null?e:f
this.a.ds(0,e,x)
return null},
jz(d,e){this.a.jz(0,e)},
aC(d,e){if(e.length!==16)throw B.c(B.bs('"matrix4" must have 16 entries.',null))
this.a.aC(0,A.a5A(e))},
vr(d,e,f,g){this.a.lZ(0,e,f,g)},
a0z(d,e,f){return this.vr(d,e,D.dL,f)},
nr(d,e){return this.vr(d,e,D.dL,!0)},
M1(d,e,f){this.a.M0(0,e,!0)},
oZ(d,e){return this.M1(d,e,!0)},
BD(d,e,f){this.a.lY(0,y.p.a(e),f)},
ih(d,e){return this.BD(d,e,!0)},
kZ(d,e,f,g){this.a.kZ(0,e,f,y.z.a(g))},
dg(d,e,f){this.a.dg(0,e,y.z.a(f))},
dB(d,e,f){this.a.dB(0,e,y.z.a(f))},
hM(d,e,f,g){this.a.hM(0,e,f,y.z.a(g))},
fW(d,e,f,g){this.a.fW(0,e,f,y.z.a(g))},
cL(d,e,f){this.a.cL(0,y.p.a(e),y.z.a(f))},
kY(d,e,f,g){this.a.kY(y.u.a(d),e,f,y.z.a(g))},
ji(d,e,f){this.a.ji(0,y.ib.a(e),f)}}
A.CU.prototype={
m3(){return this.b.X4()},
pT(){return this.b.X4()},
f8(d){var x=this.a
if(x!=null)J.i3(x)},
gD(d){var x=this.b
return x.gD(x)},
k(d,e){if(e==null)return!1
if(B.I(this)!==J.Y(e))return!1
return e instanceof A.CU&&e.b.k(0,this.b)},
j(d){return this.b.j(0)}}
A.a89.prototype={}
A.rb.prototype={
j(d){return"MutatorType."+this.b}}
A.l0.prototype={
k(d,e){var x,w=this
if(e==null)return!1
if(w===e)return!0
if(!(e instanceof A.l0))return!1
x=w.a
if(x!==e.a)return!1
switch(x.a){case 0:return J.h(w.b,e.b)
case 1:return!0
case 2:return w.d==e.d
case 3:return w.e==e.e
case 4:return w.f==e.f
default:return!1}},
gD(d){var x=this
return B.cV(x.a,x.b,x.c,x.d,x.e,x.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f)}}
A.Do.prototype={
k(d,e){if(e==null)return!1
if(e===this)return!0
return e instanceof A.Do&&B.JY(e.a,this.a)},
gD(d){return A.a5t(this.a)},
ga9(d){var x=this.a,w=B.ae(x).i("c9<1>")
x=new B.c9(x,w)
return new B.aT(x,x.gm(x),w.i("aT<aP.E>"))}}
A.QL.prototype={
j(d){return"ImageCodecException: "+this.a},
$ibK:1}
A.nN.prototype={
adS(d,e){var x,w,v,u,t=this
if($.K9()){x=new A.xo(B.aA(y.u),null,y.X)
x.U2(t,d)
w=$.a5E()
v=x.d
v.toString
w.pP(0,x,v)
B.cq(t.b,"box")
t.b=x}else{x=J.a63(J.a60($.bS.c8()))
w=J.a64(J.a62($.bS.c8()))
u=A.aUO(x,self.window.flutterCanvasKit.ColorSpace.SRGB,w,D.oZ,d)
if(u==null){$.cI().$1("Unable to encode image to bytes. We will not be able to resurrect it once it has been garbage collected.")
return}x=J.d(d)
x=new A.xo(B.aA(y.u),new A.a8a(x.FY(d),x.EE(d),u),y.X)
x.U2(t,d)
A.xp()
$.a5K().H(0,x)
B.cq(t.b,"box")
t.b=x}},
gQJ(){return B.b(this.b,"box").gaW()},
p(d){var x,w
this.d=!0
x=B.b(this.b,"box")
if(--x.a===0){w=x.d
if(w!=null)if($.K9())$.a5E().M2(w)
else{x.f8(0)
x.pb()}x.e=x.d=x.c=null
x.f=!0}},
fS(d){var x=B.b(this.b,"box");++B.b(x,"box").a
return new A.nN(x,null)},
a36(d){return d instanceof A.nN&&J.aIw(B.b(d.b,"box").gaW(),B.b(this.b,"box").gaW())},
gby(d){return J.aBs(B.b(this.b,"box").gaW())},
gbW(d){return J.aBb(B.b(this.b,"box").gaW())},
j(d){return"["+B.e(J.aBs(B.b(this.b,"box").gaW()))+"\xd7"+B.e(J.aBb(B.b(this.b,"box").gaW()))+"]"}}
A.hN.prototype={
p(d){}}
A.aiM.prototype={}
A.ahX.prototype={}
A.uI.prototype={
o_(d,e){this.b=this.tn(d,e)},
tn(d,e){var x,w,v,u,t,s
for(x=this.c,w=x.length,v=C.a0,u=0;u<x.length;x.length===w||(0,B.F)(x),++u){t=x[u]
t.o_(d,e)
if(v.a>=v.c||v.b>=v.d)v=t.b
else{s=t.b
if(!(s.a>=s.c||s.b>=s.d))v=v.nB(s)}}return v},
pG(d){var x,w,v,u,t
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,B.F)(x),++v){u=x[v]
t=u.b
if(!(t.a>=t.c||t.b>=t.d))u.kh(d)}}}
A.W3.prototype={
kh(d){this.pG(d)}}
A.M7.prototype={
o_(d,e){var x,w,v=null,u=this.f,t=d.c.a
t.push(new A.l0(D.ae1,v,v,u,v,v))
x=this.tn(d,e)
w=A.aQK(J.a68(u.gaW()))
if(x.Oi(w))this.b=x.h5(w)
t.pop()},
kh(d){var x,w=this,v=d.a
v.ci(0)
x=w.r
v.lY(0,w.f,x!==D.a3)
x=x===D.h9
if(x)v.hz(0,w.b,null)
w.pG(d)
if(x)v.c4(0)
v.c4(0)},
$ia8u:1}
A.M8.prototype={
o_(d,e){var x,w=null,v=this.f,u=d.c.a
u.push(new A.l0(D.ae0,v,w,w,w,w))
x=this.tn(d,e)
if(x.Oi(v))this.b=x.h5(v)
u.pop()},
kh(d){var x,w,v=d.a
v.ci(0)
x=this.f
w=this.r
v.lZ(0,x,D.dL,w!==D.a3)
w=w===D.h9
if(w)v.hz(0,x,null)
this.pG(d)
if(w)v.c4(0)
v.c4(0)},
$ia8w:1}
A.Uj.prototype={
o_(d,e){var x,w,v,u,t=this,s=null,r=new B.cm(new Float32Array(16))
r.bZ(e)
x=t.r
w=x.a
x=x.b
r.b0(0,w,x)
v=B.f2()
v.qb(w,x,0)
u=d.c.a
u.push(A.aMd(v))
u.push(new A.l0(D.ae3,s,s,s,s,t.f))
t.aay(d,r)
u.pop()
u.pop()
t.b=t.b.b0(0,w,x)},
kh(d){var x,w,v,u=this,t=A.bC()
t.sb8(0,B.b_(u.f,0,0,0))
x=d.a
x.ci(0)
w=u.r
v=w.a
w=w.b
x.b0(0,v,w)
x.hz(0,u.b.dk(new B.n(-v,-w)),t)
u.pG(d)
x.c4(0)
x.c4(0)},
$iahK:1}
A.G2.prototype={
o_(d,e){var x=this.f,w=e.F6(x),v=d.c.a
v.push(A.aMd(x))
this.b=A.a5B(x,this.tn(d,w))
v.pop()},
kh(d){var x=d.a
x.ci(0)
x.aC(0,this.f.a)
this.pG(d)
x.c4(0)},
$iG3:1}
A.Ug.prototype={$iahJ:1}
A.UW.prototype={
o_(d,e){this.b=this.c.b.dk(this.d)},
kh(d){var x,w=d.b
w.ci(0)
x=this.d
w.b0(0,x.a,x.b)
w.rk(0,this.c)
w.c4(0)}}
A.UU.prototype={
o_(d,e){var x,w=this
w.tn(d,e)
x=$.dm().w
if(x==null)x=B.bt()
w.b=A.b3m(w.x,w.f,x,e)},
kh(d){var x,w,v,u,t=this,s=t.f
if(s!==0){x=t.w
x.toString
w=t.r
d.b.MO(0,t.x,x,s,(w.gn(w)>>>24&255)!==255)}v=A.bC()
v.sb8(0,t.r)
s=t.y
x=s===D.h9
if(!x)d.b.cL(0,t.x,v)
w=d.a
u=w.ci(0)
switch(s.a){case 1:w.lY(0,t.x,!1)
break
case 2:w.lY(0,t.x,!0)
break
case 3:w.lY(0,t.x,!0)
w.hz(0,t.b,null)
break
case 0:break}if(x)d.b.rj(0,v)
t.pG(d)
w.o6(0,u)},
$iaig:1}
A.Rs.prototype={
p(d){}}
A.afW.prototype={
a_S(d,e){throw B.c(B.ch(null))},
a_T(d,e,f,g){var x=B.b(this.b,"currentLayer"),w=new A.UW(y.gk.a(e),d,C.a0)
w.a=x
x.c.push(w)},
a_W(d){var x=B.b(this.b,"currentLayer")
y.df.a(d)
d.a=x
x.c.push(d)},
bQ(d){return new A.Rs(new A.afX(this.a,$.dm().gnY()))},
eO(d){var x,w=this,v="currentLayer"
if(B.b(w.b,v)===w.a)return
x=B.b(w.b,v).a
x.toString
w.b=x},
a4S(d,e,f){return this.tp(new A.M7(y.p.a(d),e,B.a([],y._),C.a0))},
a4T(d,e,f){return this.tp(new A.M8(d,e,B.a([],y._),C.a0))},
OB(d,e,f){var x=B.f2()
x.qb(d,e,0)
return this.tp(new A.Ug(x,B.a([],y._),C.a0))},
a4X(d,e,f){return this.tp(new A.Uj(d,e,B.a([],y._),C.a0))},
a4Z(d,e,f,g,h,i){return this.tp(new A.UU(f,e,i,y.p.a(h),d,B.a([],y._),C.a0))},
xO(d,e){return this.tp(new A.G2(new B.cm(A.a5A(d)),B.a([],y._),C.a0))},
Qn(d){},
Qo(d){},
Qz(d){},
azw(d){var x=B.b(this.b,"currentLayer")
d.a=x
x.c.push(d)
return this.b=d},
tp(d){return this.azw(d,y.g8)}}
A.afX.prototype={
azo(d,e){var x=this.a
x.b=x.tn(new A.aiM(new A.Do(B.a([],y.ok))),B.f2())},
ayC(d,e){var x,w,v,u=B.a([],y.iw),t=new A.a8b(u),s=d.a
u.push(s)
x=d.c.a8A()
for(w=0;w<x.length;++w)u.push(x[w])
t.nq(0,D.aE)
u=this.a
v=u.b
if(!v.ga_(v))u.pG(new A.ahX(t,s))}}
A.LT.prototype={
m3(){return this.X5()},
pT(){return this.X5()},
X5(){var x=J.aG0(J.aHl($.bS.c8()),$.aTI()[this.b.a],this.c,!0)
x.toString
return x},
f8(d){var x=this.a
if(x!=null)J.i3(x)}}
A.a8b.prototype={
ci(d){var x,w,v
for(x=this.a,w=0,v=0;v<x.length;++v)w=x[v].ci(0)
return w},
hz(d,e,f){var x,w
for(x=this.a,w=0;w<x.length;++w)x[w].hz(0,e,f)},
c4(d){var x,w
for(x=this.a,w=0;w<x.length;++w)x[w].c4(0)},
o6(d,e){var x,w
for(x=this.a,w=0;w<x.length;++w)x[w].o6(0,e)},
b0(d,e,f){var x,w
for(x=this.a,w=0;w<x.length;++w)x[w].b0(0,e,f)},
aC(d,e){var x,w
for(x=this.a,w=0;w<x.length;++w)x[w].aC(0,e)},
nq(d,e){var x,w
for(x=this.a,w=0;w<x.length;++w)x[w].nq(0,e)},
lY(d,e,f){var x,w
for(x=this.a,w=0;w<x.length;++w)x[w].lY(0,e,f)},
lZ(d,e,f,g){var x,w
for(x=this.a,w=0;w<x.length;++w)x[w].lZ(0,e,f,g)}}
A.ux.prototype={
sLP(d){if(this.b===d)return
this.b=d
J.aIW(this.gaW(),$.aAs()[d.a])},
gep(d){return this.c},
sep(d,e){if(this.c===e)return
this.c=e
J.aJ1(this.gaW(),$.aFI()[e.a])},
gkw(){return this.d},
skw(d){if(this.d===d)return
this.d=d
J.aJ0(this.gaW(),d)},
sa34(d){if(!this.r)return
this.r=!1
J.aIV(this.gaW(),!1)},
gb8(d){return this.w},
sb8(d,e){if(this.w.k(0,e))return
this.w=e
J.a69(this.gaW(),e.gn(e))},
sa2Y(d){return},
syT(d){var x,w,v=this
if(v.z==d)return
v.z=y.hN.a(d)
x=v.gaW()
w=v.z
J.aBn(x,w==null?null:w.Ps(v.at))},
sNT(d){var x,w,v=this
if(d.k(0,v.Q))return
v.Q=d
if(!(isFinite(d.goc())&&d.goc()>0))v.as=null
else{x=new A.LT(d.gaBJ(),d.goc())
x.mW(null,y.b5)
v.as=x}x=v.gaW()
w=v.as
J.aIY(x,w==null?null:w.gaW())},
gpk(){return this.at},
spk(d){var x,w,v=this
if(v.at===d)return
v.at=d
x=v.gaW()
w=v.z
J.aBn(x,w==null?null:w.Ps(d))},
sa0B(d){var x,w=this,v=w.ax
if(J.h(v==null?null:v.b,d))return
w.y=null
w.ax=A.aWR(d)
v=w.gaW()
x=w.ax
J.aIX(v,x==null?null:x.gaW())},
m3(){var x,w=new self.window.flutterCanvasKit.Paint(),v=J.d(w)
v.yM(w,this.r)
x=this.w
v.yO(w,x.gn(x))
return w},
pT(){var x=this,w=null,v=new self.window.flutterCanvasKit.Paint(),u=x.b,t=J.d(v)
t.Gm(v,$.aAs()[u.a])
u=x.c
t.Gw(v,$.aFI()[u.a])
t.Gv(v,x.d)
t.yM(v,x.r)
u=x.w
t.yO(v,u.gn(u))
u=x.z
t.Gu(v,u==null?w:u.Ps(x.at))
u=x.as
t.Gr(v,u==null?w:u.gaW())
u=x.ax
t.Gn(v,u==null?w:u.gaW())
u=x.CW
t.a94(v,u==null?w:u.gaW())
t.a9f(v,$.aTN()[0])
t.a9g(v,$.aTO()[0])
t.a9h(v,0)
return v},
f8(d){var x=this.a
if(x!=null)J.i3(x)},
$iwn:1}
A.uy.prototype={
sa25(d){if(this.b===d)return
this.b=d
J.Ko(this.gaW(),$.a5V()[d.a])},
lQ(d,e,f,g){J.aGc(this.gaW(),B.fk(e),f*57.29577951308232,g*57.29577951308232)},
oS(d,e){J.aGd(this.gaW(),B.fk(e),!1,1)},
eF(d,e){J.aGg(this.gaW(),B.pN(e),!1)},
hI(d,e){J.aGh(this.gaW(),B.fk(e))},
d1(d){J.a5Z(this.gaW())},
v(d,e){return J.aGp(this.gaW(),e.a,e.b)},
f4(d){var x=J.a68(this.gaW())
return new B.C(x[0],x[1],x[2],x[3])},
cu(d,e,f){J.aIB(this.gaW(),e,f)},
e7(d,e,f){J.aIF(this.gaW(),e,f)},
hv(d){this.b=D.cs
J.aIR(this.gaW())},
dk(d){var x=J.aGq(this.gaW())
J.aJh(x,1,0,d.a,0,1,d.b,0,0,1)
return A.aUP(x,this.b)},
gwY(){return!0},
m3(){var x=new self.window.flutterCanvasKit.Path(),w=this.b
J.Ko(x,$.a5V()[w.a])
return x},
f8(d){var x
this.c=J.aJa(this.gaW())
x=this.a
if(x!=null)J.i3(x)},
pT(){var x,w=J.aHx($.bS.c8()),v=this.c
v.toString
x=J.aG1(w,v)
v=this.b
J.Ko(x,$.a5V()[v.a])
return x},
$iwq:1}
A.AA.prototype={
p(d){var x,w=this
w.d=!0
x=w.c
if(x!=null)x.p(0)
x=w.a
if(x!=null)J.i3(x)
w.a=null},
gwY(){return!0},
m3(){throw B.c(B.af("Unreachable code"))},
pT(){return this.c.aAO()},
f8(d){var x
if(!this.d){x=this.a
if(x!=null)J.i3(x)}}}
A.nO.prototype={
nn(d,e){var x,w
this.a=e
x=new self.window.flutterCanvasKit.PictureRecorder()
this.b=x
w=J.aGi(x,B.fk(e))
return this.c=$.K9()?new B.he(w):new A.Vw(new A.a8d(e,B.a([],y.i1)),w)},
gazS(){return this.c},
D8(){var x,w,v=this,u=v.b
if(u==null)throw B.c(B.af("PictureRecorder is not recording"))
x=J.d(u)
w=x.a2c(u)
x.f8(u)
v.b=null
x=new A.AA(v.a,v.c.ga4F())
x.mW(w,y.e_)
return x},
ga3g(){return this.b!=null}}
A.WW.prototype={
gm(d){return this.b.b},
H(d,e){var x,w=this,v=w.b
v.qS(e)
x=v.a.b.qo()
x.toString
w.c.l(0,e,x)
if(v.b>w.a)A.aYI(w)},
aAp(d){var x,w,v,u,t,s=this.a/2|0
for(x=this.b,w=x.a,v=this.c,u=0;u<s;++u){t=w.a.Jt(0);--x.b
v.P(0,t)
t.f8(0)
t.pb()}}}
A.aoY.prototype={
gm(d){return this.b.b},
H(d,e){var x=this.b
x.qS(e)
x=x.a.b.qo()
x.toString
this.c.l(0,e,x)
this.VU()},
NS(d){var x,w=this.c,v=w.h(0,d)
if(v==null)return!1
v.cn(0)
x=this.b
x.qS(d)
x=x.a.b.qo()
x.toString
w.l(0,d,x)
return!0},
VU(){var x,w,v,u,t
for(x=this.b,w=this.a,v=x.a,u=this.c;x.b>w;){t=v.a.Jt(0);--x.b
u.P(0,t)
t.f8(0)
t.pb()}}}
A.f9.prototype={}
A.ho.prototype={
mW(d,e){var x=this,w=d==null?x.m3():d
x.a=w
if($.K9())$.a5E().pP(0,x,y.cl.a(w))
else if(x.gwY()){A.xp()
$.a5K().H(0,x)}else{A.xp()
$.Fg.push(x)}},
gaW(){var x,w=this,v=w.a
if(v==null){x=w.pT()
w.a=x
if(w.gwY()){A.xp()
$.a5K().H(0,w)}else{A.xp()
$.Fg.push(w)}v=x}return v},
pb(){if(this.a==null)return
this.a=null},
gwY(){return!1}}
A.xo.prototype={
U2(d,e){this.d=this.c=e},
gaW(){var x=this,w=x.c
if(w==null){w=x.e.$0()
x.c=w
x.d=y.h4.a(w)
A.xp()
$.a5K().H(0,x)
w=x.gaW()}return w},
f8(d){var x=this.d
if(x!=null)J.i3(x)},
pb(){this.d=this.c=null},
aBj(d){var x,w=this
if(--w.a===0){x=w.d
if(x!=null)if($.K9())$.a5E().M2(x)
else{w.f8(0)
w.pb()}w.e=w.d=w.c=null
w.f=!0}}}
A.LU.prototype={}
A.AD.prototype={
gQL(){var x,w=this,v=w.dx
if(v===$){x=new A.a8e(w).$0()
B.c4(w.dx,"skTextStyle")
w.dx=x
v=x}return v}}
A.Az.prototype={
gaW(){var x=this.d
x.toString
return this.n0(x)},
n0(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.a
if(j==null){w=A.aK_(k.b)
for(v=k.c,u=v.length,t=w.c,s=w.a,r=J.d(s),q=0;q<v.length;v.length===u||(0,B.F)(v),++q){p=v[q]
switch(p.a.a){case 0:o=p.b
o.toString
w.nf(0,o)
break
case 1:w.eO(0)
break
case 2:o=p.c
o.toString
w.mx(0,o)
break
case 3:o=p.d
o.toString
t.push(new A.pA(D.II,null,null,o))
r.KA(s,o.a,o.b,o.c,o.d,o.e)
break}}j=w.Uz()
k.a=j
n=!0}else n=!1
m=!J.h(k.d,d)
if(n||m){k.d=d
try{J.aIA(j,d.a)
k.e=J.aIf(j)
k.f=J.aGu(j)
k.r=J.aIj(j)
k.w=J.aIk(j)
k.x=J.aIl(j)
k.y=J.aIm(j)
k.z=J.aIo(j)
k.Q=J.aIn(j)
k.as=k.QK(J.aIr(j))}catch(l){x=B.ay(l)
$.cI().$1('CanvasKit threw an exception while laying out the paragraph. The font was "'+B.e(k.b.c)+'". Exception:\n'+B.e(x))
throw l}}return j},
axz(){var x,w,v
if(!$.zD().NS(this)){x=$.zD()
w=x.b
w.qS(this)
v=x.c
w=w.a.b.qo()
w.toString
v.l(0,this,w)
x.VU()}},
f8(d){var x=this.a
x.toString
J.i3(x)},
pb(){this.a=null},
gnj(d){return this.e},
gMA(d){return this.f},
gbW(d){return this.r},
ga2H(d){return this.w},
gEZ(){return this.x},
gF2(){return this.y},
gNY(){return this.z},
gby(d){return this.Q},
yu(){var x=this.as
x.toString
return x},
q0(d,e,f,g){var x,w,v,u
if(d<0||e<0)return D.a0S
x=this.d
x.toString
w=this.n0(x)
x=$.aTL()[f.a]
v=g.a
u=$.aTM()
return this.QK(J.aIs(w,d,e,x,u[v<2?v:0]))},
G1(d,e,f){return this.q0(d,e,f,D.dc)},
QK(d){var x,w,v,u,t,s,r=B.a([],y.G)
for(x=J.a7(d),w=y.bd,v=this.b.b,u=0;u<x.gm(d);++u){t=w.a(x.h(d,u))
s=J.a7(t)
r.push(new A.iG(s.h(t,0),s.h(t,1),s.h(t,2),s.h(t,3),v))}return r},
iS(d){var x,w,v=this.d
v.toString
x=J.aIh(this.n0(v),d.a,d.b)
v=J.d(x)
w=D.Z0[J.aIe(v.gass(x))]
return new A.bM(v.gazj(x),w)},
i4(d,e){var x,w=this.d
w.toString
x=J.aIu(this.n0(w),e.a)
w=J.d(x)
return new B.di(w.gbM(x),w.gbw(x))},
il(d,e){var x=this
if(J.h(x.d,e))return
x.n0(e)
if(!$.zD().NS(x))$.zD().H(0,x)},
PN(d){var x,w,v,u=this.d
u.toString
x=d.a
for(u=J.aC(J.aBa(this.n0(u)));u.t();){w=u.gO(u)
v=J.d(w)
if(x>=v.gQT(w)&&x<=v.ga1O(w))return new B.di(v.gQT(w),v.ga1O(w))}return D.cy},
vu(){var x,w,v=this.d
v.toString
x=J.aBa(this.n0(v))
w=B.a([],y.oj)
for(v=J.aC(x);v.t();)w.push(new A.LS(v.gO(v)))
return w}}
A.LS.prototype={
gvM(d){return J.aI3(this.a)},
gnl(d){return J.aHZ(this.a)},
gx0(d){return J.aI8(this.a)},
$iag_:1}
A.a8c.prototype={
AU(d,e,f,g,h,i,j){var x;++this.d
this.e.push(j)
x=i==null?f:i
this.aeM(new A.asb(e*j,f*j,$.aTK()[g.a],$.aFJ()[0],x*j))},
a_U(d,e,f,g,h){return this.AU(d,e,f,g,null,null,h)},
aeM(d){this.c.push(new A.pA(D.II,null,null,d))
J.aGe(this.a,d.a,d.b,d.c,d.d,d.e)},
nf(d,e){var x=B.a([],y.s),w=C.d.gJ(this.f),v=w.x
if(v!=null)x.push(v)
v=w.y
if(v!=null)C.d.Z(x,v)
$.zE().av5(e,x)
this.c.push(new A.pA(D.arQ,e,null,null))
J.aAw(this.a,e)},
bQ(d){return new A.Az(this.Uz(),this.b,this.c)},
Uz(){var x=this.a,w=J.d(x),v=w.bQ(x)
w.f8(x)
return v},
ga4G(){return this.d},
ga4H(){return this.e},
eO(d){var x=this.f
if(x.length<=1)return
this.c.push(D.arT)
x.pop()
J.aII(this.a)},
mx(a4,a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.f,a3=C.d.gJ(a2)
y.jz.a(a5)
x=a5.a
if(x==null)x=a3.a
w=a5.b
if(w==null)w=a3.b
v=a5.c
if(v==null)v=a3.c
u=a5.d
if(u==null)u=a3.d
t=a5.e
if(t==null)t=a3.e
s=a5.f
if(s==null)s=a3.f
r=a5.w
if(r==null)r=a3.w
q=a5.x
if(q==null)q=a3.x
p=a5.y
if(p==null)p=a3.y
o=a5.z
if(o==null)o=a3.z
n=a5.Q
if(n==null)n=a3.Q
m=a5.as
if(m==null)m=a3.as
l=a5.at
if(l==null)l=a3.at
k=a5.ax
if(k==null)k=a3.ax
j=a5.ch
if(j==null)j=a3.ch
i=a5.CW
if(i==null)i=a3.CW
h=a5.cx
if(h==null)h=a3.cx
g=a5.cy
if(g==null)g=a3.cy
f=A.aBO(j,x,w,v,u,t,q,p,g,o,a3.r,s,i,l,k,n,a3.ay,h,r,m)
a2.push(f)
a0.c.push(new A.pA(D.arS,a1,a5,a1))
a2=f.CW
x=a2==null
if(!x||f.ch!=null){e=x?a1:a2.gaW()
if(e==null){e=$.aRJ()
a2=f.a
a2=a2==null?a1:a2.gn(a2)
J.a69(e,a2==null?4278190080:a2)}a2=f.ch
d=a2==null?a1:a2.gaW()
if(d==null)d=$.aRI()
J.aIJ(a0.a,f.gQL(),e,d)}else J.aBd(a0.a,f.gQL())}}
A.asb.prototype={}
A.pA.prototype={}
A.tD.prototype={
j(d){return"_ParagraphCommandType."+this.b}}
A.aaK.prototype={}
A.Wc.prototype={}
A.rD.prototype={}
A.a2F.prototype={}
A.akO.prototype={
ci(d){var x,w,v=this,u=v.wm$
u=u.length===0?v.a:C.d.gJ(u)
x=v.mc$
w=new B.cm(new Float32Array(16))
w.bZ(x)
v.a23$.push(new A.a2F(u,w))},
c4(d){var x,w,v,u=this,t=u.a23$
if(t.length===0)return
x=t.pop()
u.mc$=x.b
t=u.wm$
w=x.a
v=u.a
while(!0){if(!((t.length===0?v:C.d.gJ(t))!==w))break
t.pop()}},
b0(d,e,f){this.mc$.b0(0,e,f)},
ds(d,e,f){this.mc$.ds(0,e,f)},
jz(d,e){this.mc$.a5x(0,$.aSn(),e)},
aC(d,e){this.mc$.dE(0,new B.cm(e))}}
A.ie.prototype={}
A.My.prototype={
atA(){var x,w,v,u=this,t=u.b
if(t!=null)for(t=t.gbi(t),x=B.q(t),x=x.i("@<1>").aG(x.z[1]),t=new B.cr(J.aC(t.a),t.b,x.i("cr<1,2>")),x=x.z[1];t.t();){w=t.a
for(w=J.aC(w==null?x.a(w):w);w.t();){v=w.gO(w)
v.b.$1(v.a)}}u.b=u.a
u.a=null},
U7(d,e){var x,w=this,v=w.a
if(v==null)v=w.a=B.E(y.N,w.$ti.i("u<ym<1>>"))
x=v.h(0,d)
if(x==null){x=B.a([],w.$ti.i("i<ym<1>>"))
v.l(0,d,x)
v=x}else v=x
v.push(e)},
aAv(d){var x,w,v=this.b
if(v==null)return null
x=v.h(0,d)
if(x==null||x.length===0)return null
w=(x&&C.d).fF(x,0)
this.U7(d,w)
return w.a}}
A.ym.prototype={}
A.m6.prototype={
sno(d,e){var x,w,v=this
v.a=e
x=C.e.ek(e.a)-1
w=C.e.ek(v.a.b)-1
if(v.z!==x||v.Q!==w){v.z=x
v.Q=w
v.a_5()}},
a_5(){var x=this.c.style,w=this.z,v=this.Q
C.h.b1(x,C.h.aq(x,"transform"),"translate("+w+"px, "+v+"px)","")},
YV(){var x=this,w=x.a,v=w.a
w=w.b
x.d.b0(0,-v+(v-1-x.z)+1,-w+(w-1-x.Q)+1)},
a1u(d,e){return this.r>=A.a7j(d.c-d.a)&&this.w>=A.a7i(d.d-d.b)&&this.ay===e},
aS(d){var x,w,v,u,t,s,r=this
r.at=!1
r.d.aS(0)
x=r.f
w=x.length
for(v=r.c,u=0;u<w;++u){t=x[u]
if(t.parentElement===v){s=t.parentNode
if(s!=null)s.removeChild(t)}}C.d.sm(x,0)
r.as=!1
r.e=null
r.YV()},
ci(d){var x=this.d
x.acZ(0)
if(x.y!=null){x.gcw(x).save();++x.Q}return this.x++},
c4(d){var x=this.d
x.acX(0)
if(x.y!=null){x.gcw(x).restore()
x.ger().hv(0);--x.Q}--this.x
this.e=null},
b0(d,e,f){this.d.b0(0,e,f)},
ds(d,e,f){var x=this.d
x.ad_(0,e,f)
if(x.y!=null)x.gcw(x).scale(e,f)},
jz(d,e){var x=this.d
x.acY(0,e)
if(x.y!=null)x.gcw(x).rotate(e)},
aC(d,e){var x
if(B.aA5(e)===C.jp)this.at=!0
x=this.d
x.ad0(0,e)
if(x.y!=null)x.gcw(x).transform(e[0],e[1],e[4],e[5],e[12],e[13])},
p_(d,e,f){var x,w,v=this.d
if(f===D.L7){x=A.aDs()
x.b=D.j1
w=this.a
x.AW(new B.C(0,0,0+(w.c-w.a),0+(w.d-w.b)),0,0)
x.AW(e,0,0)
v.ih(0,x)}else{v.acW(0,e)
if(v.y!=null)v.afT(v.gcw(v),e)}},
oZ(d,e){var x=this.d
x.acV(0,e)
if(x.y!=null)x.afS(x.gcw(x),e)},
ih(d,e){this.d.ih(0,e)},
a_g(d){var x,w=this
if(!w.ch.d)if(!(!w.ax&&w.at))x=w.as&&w.d.y==null&&d.x==null&&d.w==null&&d.b!==D.ax
else x=!0
else x=!0
return x},
Kf(d){var x=this,w=x.ch
if(!w.d)if(!(!x.ax&&x.at))w=(x.as||w.a||w.b)&&x.d.y==null&&d.x==null&&d.w==null
else w=!0
else w=!0
return w},
kZ(d,e,f,g){var x,w,v,u,t,s,r,q,p,o
if(this.a_g(g)){x=A.aDs()
x.e7(0,e.a,e.b)
x.cu(0,f.a,f.b)
this.cL(0,x,g)}else{w=g.w!=null?A.ajn(e,f):null
v=this.d
v.ger().qc(g,w)
u=v.gcw(v)
u.beginPath()
w=v.ger().Q
t=e.a
s=e.b
r=f.a
q=f.b
if(w==null){u.moveTo(t,s)
u.lineTo(r,q)}else{p=w.a
o=w.b
u.moveTo(t-p,s-o)
u.lineTo(r-p,q-o)}u.stroke()
v.ger().ty()}},
dg(d,e,f){var x,w,v,u,t,s,r=this.d
if(this.Kf(f))this.uA(A.JO(e,f,"draw-rect",r.c),new B.n(Math.min(e.a,e.c),Math.min(e.b,e.d)),f)
else{r.ger().qc(f,e)
x=f.b
r.gcw(r).beginPath()
w=r.ger().Q
v=e.a
u=e.b
t=e.c-v
s=e.d-u
if(w==null)r.gcw(r).rect(v,u,t,s)
else r.gcw(r).rect(v-w.a,u-w.b,t,s)
r.ger().kh(x)
r.ger().ty()}},
uA(d,e,f){var x,w,v,u,t,s=this,r=s.d,q=r.b
if(q!=null){x=A.aEb(q,d,D.j,A.a5C(r.c,e))
for(r=x.length,q=s.c,w=s.f,v=0;v<x.length;x.length===r||(0,B.F)(x),++v){u=x[v]
q.appendChild(u)
w.push(u)}}else{s.c.appendChild(d)
s.f.push(d)}t=f.a
if(t!=null){r=d.style
q=A.ayP(t)
if(q==null)q=""
C.h.b1(r,C.h.aq(r,"mix-blend-mode"),q,"")}s.HP()},
dB(d,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=a0.a,h=a0.b,g=a0.c,f=a0.d,e=this.d
if(this.Kf(a1)){x=A.JO(new B.C(i,h,g,f),a1,"draw-rrect",e.c)
A.aQd(x.style,a0)
this.uA(x,new B.n(Math.min(i,g),Math.min(h,f)),a1)}else{e.ger().qc(a1,new B.C(i,h,g,f))
i=a1.b
w=e.ger().Q
h=e.gcw(e)
a0=(w==null?a0:a0.dk(new B.n(-w.a,-w.b))).tS()
v=a0.a
u=a0.c
t=a0.b
s=a0.d
if(v>u){r=u
u=v
v=r}if(t>s){r=s
s=t
t=r}q=Math.abs(a0.r)
p=Math.abs(a0.e)
o=Math.abs(a0.w)
n=Math.abs(a0.f)
m=Math.abs(a0.z)
l=Math.abs(a0.x)
k=Math.abs(a0.Q)
j=Math.abs(a0.y)
h.beginPath()
h.moveTo(v+q,t)
g=u-q
h.lineTo(g,t)
A.a5p(h,g,t+o,q,o,0,4.71238898038469,6.283185307179586,!1)
g=s-j
h.lineTo(u,g)
A.a5p(h,u-l,g,l,j,0,0,1.5707963267948966,!1)
g=v+m
h.lineTo(g,s)
A.a5p(h,g,s-k,m,k,0,1.5707963267948966,3.141592653589793,!1)
g=t+n
h.lineTo(v,g)
A.a5p(h,v+p,g,p,n,0,3.141592653589793,4.71238898038469,!1)
e.ger().kh(i)
e.ger().ty()}},
fW(d,e,f,g){var x,w,v,u,t,s,r,q=this,p=A.lf(e,f)
if(q.Kf(g)){x=A.JO(p,g,"draw-circle",q.d.c)
q.uA(x,new B.n(Math.min(p.a,p.c),Math.min(p.b,p.d)),g)
w=x.style
C.h.b1(w,C.h.aq(w,"border-radius"),"50%","")}else{w=g.w!=null?A.lf(e,f):null
v=q.d
v.ger().qc(g,w)
w=g.b
v.gcw(v).beginPath()
u=v.ger().Q
t=u==null
s=e.a
s=t?s:s-u.a
r=e.b
r=t?r:r-u.b
A.a5p(v.gcw(v),s,r,f,f,0,0,6.283185307179586,!1)
v.ger().kh(w)
v.ger().ty()}},
cL(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(j.a_g(f)){x=j.d
w=x.c
y.H.a(e)
v=e.a.a8G()
if(v!=null){u=v.b
t=v.d
s=v.a
r=u===t?new B.C(s,u,s+(v.c-s),u+1):new B.C(s,u,s+1,u+(t-u))
j.uA(A.JO(r,f,"draw-rect",x.c),new B.n(Math.min(r.a,r.c),Math.min(r.b,r.d)),f)
return}q=e.a.yC()
if(q!=null){j.dg(0,q,f)
return}u=e.a
p=u.ax?u.zT():null
if(p!=null){j.dB(0,p,f)
return}o=e.f4(0)
n=A.aRh(e,f,B.e(o.c),B.e(o.d))
if(x.b==null){m=n.style
m.position="absolute"
if(!w.rQ(0)){x=B.jy(w.a)
C.h.b1(m,C.h.aq(m,"transform"),x,"")
C.h.b1(m,C.h.aq(m,"transform-origin"),"0 0 0","")}}if(f.x!=null){x=f.b
u=f.r
if(u==null)l="#000000"
else{u=B.d4(u)
u.toString
l=u}k=f.x.goc()
u=$.cO()
if(u===C.aa&&x!==D.ax){x=n.style
C.h.b1(x,C.h.aq(x,"box-shadow"),"0px 0px "+B.e(k*2)+"px "+l,"")}else{x=n.style
C.h.b1(x,C.h.aq(x,"filter"),"blur("+B.e(k)+"px)","")}}j.uA(n,D.j,f)}else{x=f.w!=null?e.f4(0):null
u=j.d
u.ger().qc(f,x)
x=f.b
if(x==null&&f.c!=null)u.cL(0,e,D.ax)
else u.cL(0,e,x)
u.ger().ty()}},
Yv(d){var x,w,v,u=d.a.src
u.toString
x=this.b
if(x!=null){w=x.aAv(u)
if(w!=null)return w}v=d.atu()
x=this.b
if(x!=null)x.U7(u,new A.ym(v,A.b12(),x.$ti.i("ym<1>")))
return v},
VD(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=this
y.g5.a(d)
x=f.a
w=f.z
if(y.dH.b(w))v=n.agn(d,w.a,w.b,f)
else v=n.Yv(d)
u=v.style
t=A.ayP(x)
if(t==null)t=""
C.h.b1(u,C.h.aq(u,"mix-blend-mode"),t,"")
u=n.d
if(u.b!=null){t=v.style
t.removeProperty("width")
t.removeProperty("height")
t=u.b
t.toString
s=A.aEb(t,v,e,u.c)
for(u=s.length,t=n.c,r=n.f,q=0;q<s.length;s.length===u||(0,B.F)(s),++q){p=s[q]
t.appendChild(p)
r.push(p)}}else{o=B.jy(A.a5C(u.c,e).a)
u=v.style
C.h.b1(u,C.h.aq(u,"transform-origin"),"0 0 0","")
C.h.b1(u,C.h.aq(u,"transform"),o,"")
u.removeProperty("width")
u.removeProperty("height")
n.c.appendChild(v)
n.f.push(v)}return v},
agn(d,e,f,g){var x,w,v,u,t,s="destalpha",r="flood",q="comp",p="SourceGraphic",o="absolute",n=f.a
switch(n){case 19:case 18:case 25:case 13:case 15:case 12:case 5:case 9:case 7:case 26:case 27:case 28:case 11:case 10:switch(n){case 5:case 9:x=A.xF()
x.c.setAttribute("color-interpolation-filters","sRGB")
x.Qs(D.a0D,s)
n=B.d4(e)
x.q9(n==null?"":n,"1",r)
x.yP(r,s,1,0,0,0,6,q)
w=x.bQ(0)
break
case 7:x=A.xF()
n=B.d4(e)
x.q9(n==null?"":n,"1",r)
x.Gp(r,p,3,q)
w=x.bQ(0)
break
case 10:x=A.xF()
n=B.d4(e)
x.q9(n==null?"":n,"1",r)
x.Gp(p,r,4,q)
w=x.bQ(0)
break
case 11:x=A.xF()
n=B.d4(e)
x.q9(n==null?"":n,"1",r)
x.Gp(r,p,5,q)
w=x.bQ(0)
break
case 12:x=A.xF()
n=B.d4(e)
x.q9(n==null?"":n,"1",r)
x.yP(r,p,0,1,1,0,6,q)
w=x.bQ(0)
break
case 13:n=e.a
x=A.xF()
x.Qs(B.a([0,0,0,0,(n>>>16&255)/255,0,0,0,0,(n>>>8&255)/255,0,0,0,0,(n&255)/255,0,0,0,1,0],y.n),"recolor")
x.yP("recolor",p,1,0,0,0,6,q)
w=x.bQ(0)
break
case 15:n=A.aQf(D.J6)
n.toString
w=A.aPi(e,n,!0)
break
case 26:case 18:case 19:case 25:case 27:case 28:case 24:case 14:case 16:case 17:case 20:case 21:case 22:case 23:n=A.aQf(f)
n.toString
w=A.aPi(e,n,!1)
break
case 1:case 2:case 6:case 8:case 4:case 0:case 3:B.M(B.ch("Blend mode not supported in HTML renderer: "+f.j(0)))
w=null
break
default:w=null}n=w.b
this.c.appendChild(n)
this.f.push(n)
v=this.Yv(d)
n=v.style
u=w.a
C.h.b1(n,C.h.aq(n,"filter"),"url(#"+u+")","")
if(f===D.J7){n=v.style
u=B.d4(e)
n.backgroundColor=u==null?"":u}return v
default:v=document.createElement("div")
t=v.style
switch(n){case 0:case 8:t.position=o
break
case 1:case 3:t.position=o
n=B.d4(e)
t.backgroundColor=n==null?"":n
break
case 2:case 6:t.position=o
n=d.a.src
t.backgroundImage="url('"+B.e(n)+"')"
break
default:t.position=o
n=d.a.src
t.backgroundImage="url('"+B.e(n)+"')"
n=A.ayP(f)
if(n==null)n=""
C.h.b1(t,C.h.aq(t,"background-blend-mode"),n,"")
n=B.d4(e)
t.backgroundColor=n==null?"":n
break}return v}},
kY(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=e.a
if(k===0){x=e.b
w=x!==0||e.c-k!==d.gby(d)||e.d-x!==d.gbW(d)}else w=!0
v=f.a
u=f.c-v
if(u===d.gby(d)&&f.d-f.b===d.gbW(d)&&!w&&g.z==null)l.VD(d,new B.n(v,f.b),g)
else{if(w){l.ci(0)
l.p_(0,f,D.dL)}t=f.b
if(w){x=e.c-k
if(x!==d.gby(d))v+=-k*(u/x)
x=e.b
s=e.d-x
r=s!==d.gbW(d)?t+-x*((f.d-t)/s):t}else r=t
q=l.VD(d,new B.n(v,r),g)
p=f.d-t
if(w){u*=d.gby(d)/(e.c-k)
p*=d.gbW(d)/(e.d-e.b)}o=q.style
n=C.e.aj(u,2)+"px"
m=C.e.aj(p,2)+"px"
o.left="0px"
o.top="0px"
o.width=n
o.height=m
if(!y.R.b(q)){k=q.style
C.h.b1(k,C.h.aq(k,"background-size"),n+" "+m,"")}if(w)l.c4(0)}l.HP()},
HP(){var x,w,v=this.d
if(v.y!=null){v.JC()
v.e.hv(0)
x=v.w
if(x==null)x=v.w=B.a([],y.o)
w=v.y
w.toString
x.push(w)
v.e=v.d=v.y=null}this.as=!0
this.e=null},
MP(d,e,f,g,h){var x,w,v,u,t=this.d,s=t.gcw(t)
if(g!=null){s.save()
for(t=g.length,x=h===D.ax,w=0;w<g.length;g.length===t||(0,B.F)(g),++w){v=g[w]
u=B.d4(v.a)
u.toString
s.shadowColor=u
s.shadowBlur=v.c
u=v.b
s.shadowOffsetX=u.a
s.shadowOffsetY=u.b
if(x)s.strokeText(d,e,f)
else s.fillText(d,e,f)}s.restore()}if(h===D.ax)s.strokeText(d,e,f)
else C.L0.avx(s,d,e,f)},
auV(d,e,f,g){return this.MP(d,e,f,null,g)},
ji(d,e,f){var x,w,v,u,t,s,r,q,p=this
if(e.e&&!p.as&&!p.ch.d){x=e.x
if(x===$){B.c4(x,"_paintService")
x=e.x=new A.apE(e)}x.bm(p,f)
return}w=A.aQw(e,f,null)
v=p.d
u=v.b
v=v.c
if(u!=null){t=A.aEb(u,w,f,v)
for(v=t.length,u=p.c,s=p.f,r=0;r<t.length;t.length===v||(0,B.F)(t),++r){q=t[r]
u.appendChild(q)
s.push(q)}}else{A.aF7(w,A.a5C(v,f).a)
p.c.appendChild(w)}p.f.push(w)
v=w.style
v.left="0px"
v.top="0px"
p.HP()},
rq(){var x,w,v,u,t,s,r,q,p,o=this
o.d.rq()
x=o.b
if(x!=null)x.atA()
if(o.at){x=$.cO()
x=x===C.aa}else x=!1
if(x)for(x=o.c,w=J.Kk(x),w=w.ga9(w),v=o.f,u=w.$ti.c;w.t();){t=w.d
if(t==null)t=u.a(t)
s=document.createElement("div")
r=s.style
q=C.h.aq(r,"transform")
r.setProperty(q,"translate3d(0,0,0)","")
s.appendChild(t)
x.appendChild(s)
v.push(s)}p=o.c.firstChild
if(p!=null&&y.A.b(p)&&p.tagName.toLowerCase()==="canvas"){x=p.style
x.zIndex="-1"}}}
A.cG.prototype={}
A.aoO.prototype={
ci(d){var x=this.a
x.a.Q9()
x.c.push(D.nH);++x.r},
hz(d,e,f){var x=this.a
y.k.a(f)
x.d.c=!0
x.c.push(D.nH)
x.a.Q9();++x.r},
c4(d){var x,w,v=this.a
if(!v.f&&v.r>1){x=v.a
x.y=x.r.pop()
w=x.w.pop()
if(w!=null){x.Q=w.a
x.as=w.b
x.at=w.c
x.ax=w.d
x.z=!0}else if(x.z)x.z=!1}x=v.c
if(x.length!==0&&C.d.gJ(x) instanceof A.DP)x.pop()
else x.push(D.Ku);--v.r},
b0(d,e,f){var x=this.a,w=x.a
if(e!==0||f!==0)w.x=!1
w.y.b0(0,e,f)
x.c.push(new A.UF(e,f))},
ds(d,e,f){var x=f==null?e:f,w=this.a,v=w.a
if(e!==1||x!==1)v.x=!1
v.y.ds(0,e,x)
w.c.push(new A.UD(e,x))
return null},
jz(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this.a,l=m.a
if(e!==0)l.x=!1
l=l.y
x=Math.cos(e)
w=Math.sin(e)
l=l.a
v=l[0]
u=l[4]
t=l[1]
s=l[5]
r=l[2]
q=l[6]
p=l[3]
o=l[7]
n=-w
l[0]=v*x+u*w
l[1]=t*x+s*w
l[2]=r*x+q*w
l[3]=p*x+o*w
l[4]=v*n+u*x
l[5]=t*n+s*x
l[6]=r*n+q*x
l[7]=p*n+o*x
m.c.push(new A.UC(e))},
aC(d,e){var x,w,v
if(e.length!==16)throw B.c(B.bs('"matrix4" must have 16 entries.',null))
x=A.a5A(e)
w=this.a
v=w.a
v.y.dE(0,new B.cm(x))
v.x=v.y.rQ(0)
w.c.push(new A.UE(x))},
vr(d,e,f,g){var x=this.a,w=new A.Us(e,f,-1/0,-1/0,1/0,1/0)
switch(f.a){case 1:x.a.p_(0,e,w)
break
case 0:break}x.d.c=!0
x.c.push(w)},
a0z(d,e,f){return this.vr(d,e,D.dL,f)},
nr(d,e){return this.vr(d,e,D.dL,!0)},
M1(d,e,f){var x=this.a,w=new A.Ur(e,-1/0,-1/0,1/0,1/0)
x.a.p_(0,new B.C(e.a,e.b,e.c,e.d),w)
x.d.c=!0
x.c.push(w)},
oZ(d,e){return this.M1(d,e,!0)},
BD(d,e,f){var x,w=this.a
y.H.a(e)
x=new A.Uq(e,-1/0,-1/0,1/0,1/0)
w.a.p_(0,e.f4(0),x)
w.d.c=!0
w.c.push(x)},
ih(d,e){return this.BD(d,e,!0)},
kZ(d,e,f,g){var x,w,v,u,t,s,r=this.a
y.k.a(g)
x=Math.max(A.JH(g),1)
g.b=!0
w=new A.Uw(e,f,g.a,-1/0,-1/0,1/0,1/0)
v=e.a
u=f.a
t=e.b
s=f.b
r.a.q7(Math.min(v,u)-x,Math.min(t,s)-x,Math.max(v,u)+x,Math.max(t,s)+x,w)
r.e=r.d.c=!0
r.c.push(w)},
dg(d,e,f){this.a.dg(0,e,y.k.a(f))},
dB(d,e,f){this.a.dB(0,e,y.k.a(f))},
hM(d,e,f,g){this.a.hM(0,e,f,y.k.a(g))},
fW(d,e,f,g){var x,w,v,u,t,s=this.a
y.k.a(g)
s.e=s.d.c=!0
x=A.JH(g)
g.b=!0
w=new A.Ut(e,f,g.a,-1/0,-1/0,1/0,1/0)
v=f+x
u=e.a
t=e.b
s.a.q7(u-v,t-v,u+v,t+v,w)
s.c.push(w)},
cL(d,e,f){this.a.cL(0,e,y.k.a(f))},
kY(d,e,f,g){var x,w,v=this.a
y.k.a(g)
x=v.d
g.b=v.e=x.a=x.c=!0
w=new A.Uv(d,e,f,g.a,-1/0,-1/0,1/0,1/0)
v.a.yE(f,w)
v.c.push(w)},
ji(d,e,f){this.a.ji(0,e,f)}}
A.GO.prototype={
gjg(){return this.eJ$},
cH(d){var x=this.BP("flt-clip"),w=B.d2("flt-clip-interior",null)
this.eJ$=w
w=w.style
w.position="absolute"
w=this.eJ$
w.toString
x.appendChild(w)
return x}}
A.DV.prototype={
kl(){var x=this
x.f=x.e.f
if(x.CW!==D.u)x.w=x.cx
else x.w=null
x.r=null},
cH(d){var x=this.RB(0)
x.setAttribute("clip-type","rect")
return x},
ig(){var x,w=this,v=w.d.style,u=w.cx,t=u.a
v.left=B.e(t)+"px"
x=u.b
v.top=B.e(x)+"px"
v.width=B.e(u.c-t)+"px"
v.height=B.e(u.d-x)+"px"
v=w.d
v.toString
if(w.CW!==D.u){v=v.style
v.overflow="hidden"
v.zIndex="0"}v=w.eJ$.style
v.left=B.e(-t)+"px"
v.top=B.e(-x)+"px"},
cc(d,e){var x=this
x.qj(0,e)
if(!x.cx.k(0,e.cx)||x.CW!==e.CW){x.w=null
x.ig()}},
$ia8w:1}
A.DY.prototype={
kl(){var x,w,v,u,t=this
t.f=t.e.f
if(t.dy!==D.u){x=t.CW
w=x.a
v=w.ax?w.zT():null
if(v!=null)t.w=new B.C(v.a,v.b,v.c,v.d)
else{u=x.a.yC()
if(u!=null)t.w=u
else t.w=null}}else t.w=null
t.r=null},
cH(d){var x=this.RB(0)
x.setAttribute("clip-type","physical-shape")
return x},
jX(){var x,w=this
w.acA()
x=w.fr
if(x!=null)C.bQ.cn(x)
w.fr=null
x=w.fx
if(x!=null)C.bQ.cn(x)
w.fx=null},
ig(){this.Un()},
Un(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="border-radius",d="hidden",a0=f.d.style,a1=f.db,a2=B.d4(a1)
a0.backgroundColor=a2==null?"":a2
a0=f.CW
a2=a0.a
x=a2.ax?a2.zT():null
if(x!=null){a0=x.e
a1=x.r
a2=x.x
w=x.z
v=f.d.style
u=x.a
v.left=B.e(u)+"px"
t=x.b
v.top=B.e(t)+"px"
s=x.c
v.width=B.e(s-u)+"px"
s=x.d
v.height=B.e(s-t)+"px"
C.h.b1(v,C.h.aq(v,e),B.e(a0)+"px "+B.e(a1)+"px "+B.e(a2)+"px "+B.e(w)+"px","")
a0=f.eJ$.style
a0.left=B.e(-u)+"px"
a0.top=B.e(-t)+"px"
if(f.dy!==D.u)v.overflow=d
A.aEE(f.d,f.cx,f.cy,f.dx)
return}else{r=a0.a.yC()
if(r!=null){v=f.d.style
a0=r.a
v.left=B.e(a0)+"px"
a1=r.b
v.top=B.e(a1)+"px"
a2=r.c
v.width=B.e(a2-a0)+"px"
a2=r.d
v.height=B.e(a2-a1)+"px"
C.h.b1(v,C.h.aq(v,e),"","")
a2=f.eJ$.style
a2.left=B.e(-a0)+"px"
a2.top=B.e(-a1)+"px"
if(f.dy!==D.u)v.overflow=d
A.aEE(f.d,f.cx,f.cy,f.dx)
return}else{a2=a0.a
q=(a2.at?a2.CW:-1)===-1?null:a2.f4(0)
if(q!=null){a0=q.c
a1=q.a
p=(a0-a1)/2
a0=q.d
a2=q.b
o=(a0-a2)/2
n=B.e(p)+"px "
n=p===o?n:n+B.e(o)+"px "
v=f.d.style
v.left=B.e(a1)+"px"
v.top=B.e(a2)+"px"
v.width=B.e(p*2)+"px"
v.height=B.e(o*2)+"px"
C.h.b1(v,C.h.aq(v,e),n,"")
a0=f.eJ$.style
a0.left=B.e(-a1)+"px"
a0.top=B.e(-a2)+"px"
if(f.dy!==D.u)v.overflow=d
A.aEE(f.d,f.cx,f.cy,f.dx)
return}}}a2=f.cy
w=a2===0
u=f.cx
t=u.c
s=u.d
if(w){m=u.a
l=u.b
k=A.aF1(a0,-m,-l,1/(t-m),1/(s-l))}else k=A.aF1(a0,0,0,1/t,1/s)
m=f.fr
if(m!=null)C.bQ.cn(m)
m=f.fx
if(m!=null)C.bQ.cn(m)
f.fr=k
f.d.appendChild(k)
if(w){a0=f.d
a0.toString
A.azY(a0,"url(#svgClip"+$.JF+")")
j=f.d.style
j.overflow=""
a0=u.a
a1=B.e(a0)
j.left=a1+"px"
a2=u.b
w=B.e(a2)
j.top=w+"px"
j.width=B.e(t-a0)+"px"
j.height=B.e(s-a2)+"px"
C.h.b1(j,C.h.aq(j,e),"","")
a0=f.eJ$.style
a0.left="-"+a1+"px"
a0.top="-"+w+"px"
return}w=f.eJ$
w.toString
A.azY(w,"url(#svgClip"+$.JF+")")
j=f.d.style
j.overflow=""
w=u.a
m=B.e(w)
j.left=m+"px"
l=u.b
i=B.e(l)
j.top=i+"px"
j.width=B.e(t-w)+"px"
j.height=B.e(s-l)+"px"
C.h.b1(j,C.h.aq(j,e),"","")
w=f.eJ$.style
w.left="-"+m+"px"
w.top="-"+i+"px"
w.width=B.e(t)+"px"
w.height=B.e(s)+"px"
h=a0.f4(0)
w=new A.bx()
w.b=D.bj
w.r=a1
w=A.aRh(a0,w,B.e(h.c),B.e(h.d))
f.fx=w
f.d.insertBefore(w,f.eJ$)
a2=A.aQn(u,a2)
a2.toString
g=A.aRA(f.dx)
u=f.fx.style
w=a2.b
a0=g.a
C.h.b1(u,C.h.aq(u,"filter"),"drop-shadow("+B.e(w.a)+"px "+B.e(w.b)+"px "+B.e(a2.a)+"px rgba("+(a0>>>16&255)+", "+(a0>>>8&255)+", "+(a0&255)+", "+B.e((a0>>>24&255)/255)+"))","")
C.h.b1(u,C.h.aq(u,"transform"),"translate(-"+B.e(h.a)+"px, -"+B.e(h.b)+"px)","")
u=f.d.style
u.backgroundColor=""},
cc(d,e){var x,w,v=this
v.qj(0,e)
x=e.CW===v.CW
if(!x)v.w=null
x=!x||e.cy!==v.cy||!e.dx.k(0,v.dx)||!e.db.k(0,v.db)
w=e.fr
if(x){if(w!=null)C.bQ.cn(w)
e.fr=null
x=e.fx
if(x!=null)C.bQ.cn(x)
e.fx=null
x=v.fr
if(x!=null)C.bQ.cn(x)
v.fr=null
x=v.fx
if(x!=null)C.bQ.cn(x)
v.fx=null
x=v.d
x.toString
A.azY(x,"")
v.Un()}else{v.fr=w
if(w!=null)v.d.appendChild(w)
e.fr=null
x=v.fx=e.fx
if(x!=null)v.d.insertBefore(x,v.eJ$)
e.fx=null}},
$iaig:1}
A.DU.prototype={
cH(d){return this.BP("flt-clippath")},
kl(){var x=this
x.abg()
if(x.cx!==D.u){if(x.w==null)x.w=x.CW.f4(0)}else x.w=null},
ig(){var x=this,w=x.cy
if(w!=null)C.bQ.cn(w)
w=x.d
w.toString
w=A.aQr(y.A.a(w),x.CW)
x.cy=w
x.d.appendChild(w)},
cc(d,e){var x,w=this
w.qj(0,e)
if(e.CW!==w.CW){w.w=null
x=e.cy
if(x!=null)C.bQ.cn(x)
w.ig()}else w.cy=e.cy
e.cy=null},
jX(){var x=this.cy
if(x!=null)C.bQ.cn(x)
this.cy=null
this.H6()},
$ia8u:1}
A.aoW.prototype={
Qs(d,e){var x,w,v,u,t=y.iH.a(y.T.a(C.c2.kV(document,"http://www.w3.org/2000/svg","feColorMatrix")))
t.type.baseVal=1
t.result.baseVal=e
x=t.values.baseVal
x.toString
for(w=this.b,v=0;v<20;++v){u=w.createSVGNumber()
u.value=d[v]
x.appendItem(u)}this.c.appendChild(t)},
q9(d,e,f){var x=y.dT.a(y.T.a(C.c2.kV(document,"http://www.w3.org/2000/svg","feFlood")))
x.setAttribute("flood-color",d)
x.setAttribute("flood-opacity",e)
x.result.baseVal=f
this.c.appendChild(x)},
Qr(d,e,f){var x=y.of.a(y.T.a(C.c2.kV(document,"http://www.w3.org/2000/svg","feBlend")))
x.in1.baseVal=d
x.in2.baseVal=e
x.mode.baseVal=f
this.c.appendChild(x)},
yP(d,e,f,g,h,i,j,k){var x=y.bU.a(y.T.a(C.c2.kV(document,"http://www.w3.org/2000/svg","feComposite")))
x.in1.baseVal=d
x.in2.baseVal=e
x.operator.baseVal=j
if(f!=null)x.k1.baseVal=f
if(g!=null)x.k2.baseVal=g
if(h!=null)x.k3.baseVal=h
if(i!=null)x.k4.baseVal=i
x.result.baseVal=k
this.c.appendChild(x)},
Gp(d,e,f,g){return this.yP(d,e,null,null,null,null,f,g)},
bQ(d){var x=this.b
x.appendChild(this.c)
return new A.aoV(this.a,x)}}
A.aoV.prototype={}
A.a9J.prototype={
p_(d,e,f){throw B.c(B.ch(null))},
oZ(d,e){throw B.c(B.ch(null))},
ih(d,e){throw B.c(B.ch(null))},
kZ(d,e,f,g){throw B.c(B.ch(null))},
dg(d,e,f){var x=this.wm$
x=x.length===0?this.a:C.d.gJ(x)
x.appendChild(A.JO(e,f,"draw-rect",this.mc$))},
dB(d,e,f){var x,w=A.JO(new B.C(e.a,e.b,e.c,e.d),f,"draw-rrect",this.mc$)
A.aQd(w.style,e)
x=this.wm$;(x.length===0?this.a:C.d.gJ(x)).appendChild(w)},
fW(d,e,f,g){throw B.c(B.ch(null))},
cL(d,e,f){throw B.c(B.ch(null))},
kY(d,e,f,g){throw B.c(B.ch(null))},
ji(d,e,f){var x=A.aQw(e,f,this.mc$),w=this.wm$;(w.length===0?this.a:C.d.gJ(w)).appendChild(x)},
rq(){}}
A.DW.prototype={
kl(){var x,w,v=this,u=v.e.f
v.f=u
x=v.CW
if(x!==0||v.cx!==0){u.toString
w=new B.cm(new Float32Array(16))
w.bZ(u)
v.f=w
w.b0(0,x,v.cx)}v.r=null},
gx4(){var x=this,w=x.cy
if(w==null){w=B.f2()
w.qb(-x.CW,-x.cx,0)
x.cy=w}return w},
cH(d){var x=document.createElement("flt-offset")
B.e3(x,"position","absolute")
B.e3(x,"transform-origin","0 0 0")
return x},
ig(){var x=this.d.style
C.h.b1(x,C.h.aq(x,"transform"),"translate("+B.e(this.CW)+"px, "+B.e(this.cx)+"px)","")},
cc(d,e){var x=this
x.qj(0,e)
if(e.CW!==x.CW||e.cx!==x.cx)x.ig()},
$iahJ:1}
A.DX.prototype={
kl(){var x,w,v,u=this,t=u.e.f
u.f=t
x=u.cx
w=x.a
v=x.b
if(w!==0||v!==0){t.toString
x=new B.cm(new Float32Array(16))
x.bZ(t)
u.f=x
x.b0(0,w,v)}u.r=null},
gx4(){var x,w=this.cy
if(w==null){w=this.cx
x=B.f2()
x.qb(-w.a,-w.b,0)
this.cy=x
w=x}return w},
cH(d){var x=document.createElement("flt-opacity")
B.e3(x,"position","absolute")
B.e3(x,"transform-origin","0 0 0")
return x},
ig(){var x,w=this.d
w.toString
B.e3(w,"opacity",B.e(this.CW/255))
w=w.style
x=this.cx
C.h.b1(w,C.h.aq(w,"transform"),"translate("+B.e(x.a)+"px, "+B.e(x.b)+"px)","")},
cc(d,e){var x=this
x.qj(0,e)
if(x.CW!==e.CW||!x.cx.k(0,e.cx))x.ig()},
$iahK:1}
A.br.prototype={
sLP(d){var x=this
if(x.b){x.a=x.a.fS(0)
x.b=!1}x.a.a=d},
gep(d){var x=this.a.b
return x==null?D.bj:x},
sep(d,e){var x=this
if(x.b){x.a=x.a.fS(0)
x.b=!1}x.a.b=e},
gkw(){var x=this.a.c
return x==null?0:x},
skw(d){var x=this
if(x.b){x.a=x.a.fS(0)
x.b=!1}x.a.c=d},
sa34(d){var x=this
if(x.b){x.a=x.a.fS(0)
x.b=!1}x.a.f=!1},
gb8(d){var x=this.a.r
return x==null?D.x:x},
sb8(d,e){var x,w=this
if(w.b){w.a=w.a.fS(0)
w.b=!1}x=w.a
x.r=B.I(e)===D.apE?e:new B.W(e.gn(e))},
sa2Y(d){},
syT(d){var x=this
if(x.b){x.a=x.a.fS(0)
x.b=!1}x.a.w=d},
sNT(d){var x=this
if(x.b){x.a=x.a.fS(0)
x.b=!1}x.a.x=d},
spk(d){var x=this
if(x.b){x.a=x.a.fS(0)
x.b=!1}x.a.y=d},
sa0B(d){var x=this
if(x.b){x.a=x.a.fS(0)
x.b=!1}x.a.z=d},
j(d){var x,w=this,v=""+"Paint(",u=w.a.b,t=u==null
if((t?D.bj:u)===D.ax){v+=(t?D.bj:u).j(0)
u=w.a.c
t=u==null
if((t?0:u)!==0)v+=" "+B.e(t?0:u)
else v+=" hairline"
x="; "}else x=""
u=w.a
if(!u.f){v+=x+"antialias off"
x="; "}u=u.r
if(!(u==null?D.x:u).k(0,D.x)){u=w.a.r
v+=x+(u==null?D.x:u).j(0)}v+=")"
return v.charCodeAt(0)==0?v:v},
$iwn:1}
A.bx.prototype={
fS(d){var x=this,w=new A.bx()
w.a=x.a
w.y=x.y
w.x=x.x
w.w=x.w
w.f=x.f
w.r=x.r
w.z=x.z
w.c=x.c
w.b=x.b
w.e=x.e
w.d=x.d
return w},
j(d){var x=this.cW(0)
return x}}
A.hE.prototype={
P4(){var x,w,v,u,t,s,r,q,p,o=this,n=B.a([],y.P),m=o.ag4(0.25),l=C.b.bS(1,m)
n.push(new B.n(o.a,o.b))
if(m===5){x=new A.ZG()
o.UL(x)
w=x.a
w.toString
v=x.b
v.toString
u=w.c
if(u===w.e&&w.d===w.f&&v.a===v.c&&v.b===v.d){t=new B.n(u,w.d)
n.push(t)
n.push(t)
n.push(t)
n.push(new B.n(v.e,v.f))
l=2
s=!0}else s=!1}else s=!1
if(!s)A.aBR(o,m,n)
r=2*l+1
p=0
while(!0){if(!(p<r)){q=!1
break}w=n[p]
if(isNaN(w.a)||isNaN(w.b)){q=!0
break}++p}if(q)for(w=r-1,v=o.c,u=o.d,p=1;p<w;++p)n[p]=new B.n(v,u)
return n},
UL(d){var x,w,v=this,u=v.r,t=1/(1+u),s=Math.sqrt(0.5+u*0.5),r=v.c,q=u*r,p=v.d,o=u*p,n=v.a,m=v.e,l=(n+2*q+m)*t*0.5,k=v.b,j=v.f,i=(k+2*o+j)*t*0.5,h=new B.n(l,i)
if(isNaN(l)||isNaN(i)){x=u*2
w=t*0.5
h=new B.n((n+x*r+m)*w,(k+x*p+j)*w)}u=h.a
r=h.b
d.a=new A.hE(n,k,(n+q)*t,(k+o)*t,u,r,s)
d.b=new A.hE(u,r,(m+q)*t,(j+o)*t,m,j,s)},
atp(d){var x=this,w=x.aia()
if(w==null){d.push(x)
return}if(!x.afQ(w,d,!0)){d.push(x)
return}},
aia(){var x,w,v=this,u=v.f,t=v.b,s=u-t
u=v.r
x=u*(v.d-t)
w=new A.mJ()
if(w.nG(u*s-s,s-2*x,x)===1)return w.a
return null},
afQ(d,e,a0){var x,w,v,u,t,s=this,r=s.a,q=s.b,p=s.r,o=s.c*p,n=s.d*p,m=s.f,l=r+(o-r)*d,k=o+(s.e-o)*d,j=q+(n-q)*d,i=1+(p-1)*d,h=p+(1-p)*d,g=i+(h-i)*d,f=Math.sqrt(g)
if(Math.abs(f-0)<0.000244140625)return!1
if(Math.abs(i-0)<0.000244140625||Math.abs(g-0)<0.000244140625||Math.abs(h-0)<0.000244140625)return!1
x=(l+(k-l)*d)/g
w=(j+(n+(m-n)*d-j)*d)/g
p=s.a
v=s.b
u=s.e
t=s.f
e.push(new A.hE(p,v,l/i,w,x,w,i/f))
e.push(new A.hE(x,w,k/h,w,u,t,h/f))
return!0},
ag4(d){var x,w,v,u,t,s,r=this
if(d<0)return 0
x=r.r-1
w=x/(4*(2+x))
v=w*(r.a-2*r.c+r.e)
u=w*(r.b-2*r.d+r.f)
t=Math.sqrt(v*v+u*u)
for(s=0;s<5;++s){if(t<=d)break
t*=0.25}return s},
avg(d){var x,w,v,u,t,s,r,q,p=this
if(!(d===0&&p.a===p.c&&p.b===p.d))x=d===1&&p.c===p.e&&p.d===p.f
else x=!0
if(x)return new B.n(p.e-p.a,p.f-p.b)
x=p.e
w=p.a
v=x-w
x=p.f
u=p.b
t=x-u
x=p.r
s=x*(p.c-w)
r=x*(p.d-u)
q=A.aNr(x*v-v,x*t-t,v-s-s,t-r-r,s,r)
return new B.n(q.a1S(d),q.a1T(d))}}
A.aj1.prototype={}
A.a8L.prototype={}
A.ZG.prototype={}
A.a8W.prototype={}
A.rV.prototype={
Yt(){var x=this
x.d=0
x.b=D.cs
x.f=x.e=-1},
V9(d){var x=this
x.b=d.b
x.d=d.d
x.e=d.e
x.f=d.f},
sa25(d){this.b=d},
hv(d){if(this.a.w!==0){this.a=A.aMD()
this.Yt()}},
e7(d,e,f){var x=this,w=x.a.lx(0,0)
x.d=w+1
x.a.iU(w,e,f)
x.f=x.e=-1},
X8(){var x,w,v,u,t=this.d
if(t<=0){x=this.a
if(x.d===0){w=0
v=0}else{u=2*(-t-1)
t=x.f
w=t[u]
v=t[u+1]}this.e7(0,w,v)}},
cu(d,e,f){var x,w=this
if(w.d<=0)w.X8()
x=w.a.lx(1,0)
w.a.iU(x,e,f)
w.f=w.e=-1},
iz(d,e,f,g,h,i){var x,w=this
w.X8()
x=w.a.lx(3,i)
w.a.iU(x,e,f)
w.a.iU(x+1,g,h)
w.f=w.e=-1},
d1(d){var x=this,w=x.a,v=w.w
if(v!==0&&w.r[v-1]!==5)w.lx(5,0)
w=x.d
if(w>=0)x.d=-w
x.f=x.e=-1},
hI(d,e){this.AW(e,0,0)},
zZ(){var x,w=this.a,v=w.w
for(w=w.r,x=0;x<v;++x)switch(w[x]){case 1:case 2:case 3:case 4:return!1}return!0},
AW(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=p.zZ(),n=p.zZ()?e:-1,m=p.a.lx(0,0)
p.d=m+1
x=p.a.lx(1,0)
w=p.a.lx(1,0)
v=p.a.lx(1,0)
p.a.lx(5,0)
u=p.a
t=d.a
s=d.b
r=d.c
q=d.d
if(e===0){u.iU(m,t,s)
p.a.iU(x,r,s)
p.a.iU(w,r,q)
p.a.iU(v,t,q)}else{u.iU(v,t,q)
p.a.iU(w,r,q)
p.a.iU(x,r,s)
p.a.iU(m,t,s)}u=p.a
u.ay=o
u.ch=e===1
u.CW=0
p.f=p.e=-1
p.f=n},
asG(b7,b8,b9,c0,c1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=b8.c-b8.a
if(b6===0&&b8.d-b8.b===0)return
x=A.b0u(b8,b9,c0)
if(x!=null)b5.e7(0,x.a,x.b)
w=b9+c0
v=Math.cos(b9)
u=Math.sin(b9)
t=Math.cos(w)
s=Math.sin(w)
if(Math.abs(v-t)<0.000244140625&&Math.abs(u-s)<0.000244140625){r=Math.abs(c0)*180/3.141592653589793
if(r<=360&&r>359){q=c0<0?-0.001953125:0.001953125
p=w
do{p-=q
t=Math.cos(p)
s=Math.sin(p)}while(v===t&&u===s)}}o=c0>0?0:1
n=b6/2
m=(b8.d-b8.b)/2
l=b8.gbD().a+n*Math.cos(w)
k=b8.gbD().b+m*Math.sin(w)
if(v===t&&u===s){b5.e7(0,l,k)
return}j=v*t+u*s
i=v*s-u*t
if(Math.abs(i)<=0.000244140625)if(j>0)if(!(i>=0&&o===0))b6=i<=0&&o===1
else b6=!0
else b6=!1
else b6=!1
if(b6){b5.e7(0,l,k)
return}b6=o===1
if(b6)i=-i
if(0===i)h=2
else if(0===j)h=i>0?1:3
else{g=i<0
h=g?2:0
if(j<0!==g)++h}f=B.a([],y.r)
for(e=0;e<h;++e){d=e*2
a0=D.ij[d]
a1=D.ij[d+1]
a2=D.ij[d+2]
f.push(new A.hE(a0.a,a0.b,a1.a,a1.b,a2.a,a2.b,0.707106781))}a3=D.ij[h*2]
g=a3.a
a4=a3.b
a5=j*g+i*a4
if(a5<1){a6=g+j
a7=a4+i
a8=Math.sqrt((1+a5)/2)
a9=a8*Math.sqrt(a6*a6+a7*a7)
a6/=a9
a7/=a9
if(!(Math.abs(a6-g)<0.000244140625)||!(Math.abs(a7-a4)<0.000244140625)){f.push(new A.hE(g,a4,a6,a7,j,i,a8))
b0=h+1}else b0=h}else b0=h
b1=b8.gbD().a
b2=b8.gbD().b
for(g=f.length,b3=0;b3<g;++b3){b4=f[b3]
j=b4.a
i=b4.b
if(b6)i=-i
b4.a=(v*j-u*i)*n+b1
b4.b=(v*i+u*j)*m+b2
j=b4.c
i=b4.d
if(b6)i=-i
b4.c=(v*j-u*i)*n+b1
b4.d=(v*i+u*j)*m+b2
j=b4.e
i=b4.f
if(b6)i=-i
b4.e=(v*j-u*i)*n+b1
b4.f=(v*i+u*j)*m+b2}b6=f[0]
b5.e7(0,b6.a,b6.b)
for(e=0;e<b0;++e){b4=f[e]
b5.iz(0,b4.c,b4.d,b4.e,b4.f,b4.r)}b5.f=b5.e=-1},
oS(d,e){this.Hr(e,0,0)},
Hr(d,e,f){var x,w=this,v=w.zZ(),u=d.a,t=d.c,s=(u+t)/2,r=d.b,q=d.d,p=(r+q)/2
if(e===0){w.e7(0,t,p)
w.iz(0,t,q,s,q,0.707106781)
w.iz(0,u,q,u,p,0.707106781)
w.iz(0,u,r,s,r,0.707106781)
w.iz(0,t,r,t,p,0.707106781)}else{w.e7(0,t,p)
w.iz(0,t,r,s,r,0.707106781)
w.iz(0,u,r,u,p,0.707106781)
w.iz(0,u,q,s,q,0.707106781)
w.iz(0,t,q,t,p,0.707106781)}w.d1(0)
x=w.a
x.at=v
x.ch=e===1
x.CW=0
w.f=w.e=-1
if(v)w.f=e},
lQ(d,e,f,g){var x,w,v,u
if(0===g)return
if(g>=6.283185307179586||g<=-6.283185307179586){x=f/1.5707963267948966
w=Math.floor(x+0.5)
if(Math.abs(x-w-0)<0.000244140625){v=w+1
if(v<0)v+=4
u=g>0?0:1
this.Hr(e,u,C.e.a0(v))
return}}this.asG(0,e,f,g,!0)},
eF(d,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.zZ(),j=a0.a,i=a0.b,h=a0.c,g=a0.d,f=new B.C(j,i,h,g),e=a0.e
if(e===0||a0.f===0)if(a0.r===0||a0.w===0)if(a0.z===0||a0.Q===0)x=a0.x===0||a0.y===0
else x=!1
else x=!1
else x=!1
if(x||j>=h||i>=g)l.AW(f,0,3)
else if(A.b4k(a0))l.Hr(f,0,3)
else{w=h-j
v=g-i
u=Math.max(0,e)
t=Math.max(0,a0.r)
s=Math.max(0,a0.z)
r=Math.max(0,a0.x)
q=Math.max(0,a0.f)
p=Math.max(0,a0.w)
o=Math.max(0,a0.Q)
n=Math.max(0,a0.y)
m=A.axO(o,n,v,A.axO(q,p,v,A.axO(s,r,w,A.axO(u,t,w,1))))
e=g-m*o
l.e7(0,j,e)
l.cu(0,j,i+m*q)
l.iz(0,j,i,j+m*u,i,0.707106781)
l.cu(0,h-m*t,i)
l.iz(0,h,i,h,i+m*p,0.707106781)
l.cu(0,h,g-m*n)
l.iz(0,h,g,h-m*r,g,0.707106781)
l.cu(0,j+m*s,g)
l.iz(0,j,g,j,e,0.707106781)
l.d1(0)
l.f=k?0:-1
j=l.a
j.ax=k
j.ch=!1
j.CW=6}},
v(a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
if(a1.a.w===0)return!1
x=a1.f4(0)
w=a3.a
v=a3.b
if(w<x.a||v<x.b||w>x.c||v>x.d)return!1
u=a1.a
t=new A.ai9(u,w,v,new Float32Array(18))
t.arU()
s=D.j1===a1.b
r=t.d
if((s?r&1:r)!==0)return!0
q=t.e
if(q<=1)return C.f_.adO(q!==0,!1)
u=q&1
if(u!==0||s)return u!==0
p=A.aMC(a1.a,!0)
o=new Float32Array(18)
n=B.a([],y.P)
u=p.a
m=!1
do{l=n.length
switch(p.hW(0,o)){case 0:case 5:break
case 1:A.b5d(o,w,v,n)
break
case 2:A.b5e(o,w,v,n)
break
case 3:k=p.f
A.b5b(o,w,v,u.y[k],n)
break
case 4:A.b5c(o,w,v,n)
break
case 6:m=!0
break}k=n.length
if(k>l){j=k-1
i=n[j]
h=i.a
g=i.b
if(Math.abs(h*h+g*g-0)<0.000244140625)C.d.fF(n,j)
else for(f=0;f<j;++f){e=n[f]
k=e.a
d=e.b
if(Math.abs(k*g-d*h-0)<0.000244140625){k=h*k
if(k<0)k=-1
else k=k>0?1:0
if(k<=0){k=g*d
if(k<0)k=-1
else k=k>0?1:0
k=k<=0}else k=!1}else k=!1
if(k){a0=C.d.fF(n,j)
if(f!==n.length)n[f]=a0
break}}}}while(!m)
return n.length!==0||!1},
dk(d){var x,w=d.a,v=d.b,u=this.a,t=A.aXt(u,w,v),s=u.e,r=new Uint8Array(s)
C.B.tU(r,0,u.r)
t=new A.ws(t,r)
s=u.x
t.x=s
t.z=u.z
x=u.y
if(x!=null){s=new Float32Array(s)
t.y=s
C.lZ.tU(s,0,x)}t.e=u.e
t.w=u.w
t.c=u.c
t.d=u.d
s=u.Q
t.Q=s
if(!s){t.a=u.a.b0(0,w,v)
s=u.b
t.b=s==null?null:s.b0(0,w,v)
t.as=u.as}t.cx=u.cx
t.at=u.at
t.ax=u.ax
t.ay=u.ay
t.ch=u.ch
t.CW=u.CW
w=new A.rV(t,D.cs)
w.V9(this)
return w},
f4(e0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8=this,d9=d8.a
if((d9.ax?d9.CW:-1)===-1)x=(d9.at?d9.CW:-1)!==-1
else x=!0
if(x)return d9.f4(0)
if(!d9.Q&&d9.b!=null){d9=d9.b
d9.toString
return d9}w=new A.rl(d9)
w.ul(d9)
v=d8.a.f
for(u=!1,t=0,s=0,r=0,q=0,p=0,o=0,n=0,m=0,l=null,k=null,j=null;i=w.axR(),i!==6;){h=w.e
switch(i){case 0:o=v[h]
m=v[h+1]
n=m
p=o
break
case 1:o=v[h+2]
m=v[h+3]
n=m
p=o
break
case 2:if(k==null)k=new A.aj1()
g=h+1
f=v[h]
e=g+1
d=v[g]
g=e+1
a0=v[e]
e=g+1
a1=v[g]
a2=v[e]
a3=v[e+1]
x=k.a=Math.min(f,a2)
a4=k.b=Math.min(d,a3)
a5=k.c=Math.max(f,a2)
a6=k.d=Math.max(d,a3)
a7=f-2*a0+a2
if(Math.abs(a7)>0.000244140625){a8=(f-a0)/a7
if(a8>=0&&a8<=1){a9=1-a8
b0=a9*a9
b1=2*a8*a9
a8*=a8
b2=b0*f+b1*a0+a8*a2
b3=b0*d+b1*a1+a8*a3
x=Math.min(x,b2)
k.a=x
a5=Math.max(a5,b2)
k.c=a5
a4=Math.min(a4,b3)
k.b=a4
a6=Math.max(a6,b3)
k.d=a6}}a7=d-2*a1+a3
if(Math.abs(a7)>0.000244140625){b4=(d-a1)/a7
if(b4>=0&&b4<=1){b5=1-b4
b0=b5*b5
b1=2*b4*b5
b4*=b4
b6=b0*f+b1*a0+b4*a2
b7=b0*d+b1*a1+b4*a3
x=Math.min(x,b6)
k.a=x
a5=Math.max(a5,b6)
k.c=a5
a4=Math.min(a4,b7)
k.b=a4
a6=Math.max(a6,b7)
k.d=a6}m=a6
o=a5
n=a4
p=x}else{m=a6
o=a5
n=a4
p=x}break
case 3:if(j==null)j=new A.a8L()
x=d9.y[w.b]
g=h+1
f=v[h]
e=g+1
d=v[g]
g=e+1
a0=v[e]
e=g+1
a1=v[g]
a2=v[e]
a3=v[e+1]
j.a=Math.min(f,a2)
j.b=Math.min(d,a3)
j.c=Math.max(f,a2)
j.d=Math.max(d,a3)
b8=new A.mJ()
b9=a2-f
c0=x*(a0-f)
if(b8.nG(x*b9-b9,b9-2*c0,c0)!==0){a4=b8.a
a4.toString
if(a4>=0&&a4<=1){c1=2*(x-1)
a7=(-c1*a4+c1)*a4+1
c2=a0*x
b2=(((a2-2*c2+f)*a4+2*(c2-f))*a4+f)/a7
c2=a1*x
b3=(((a3-2*c2+d)*a4+2*(c2-d))*a4+d)/a7
j.a=Math.min(j.a,b2)
j.c=Math.max(j.c,b2)
j.b=Math.min(j.b,b3)
j.d=Math.max(j.d,b3)}}c3=a3-d
c4=x*(a1-d)
if(b8.nG(x*c3-c3,c3-2*c4,c4)!==0){a4=b8.a
a4.toString
if(a4>=0&&a4<=1){c1=2*(x-1)
a7=(-c1*a4+c1)*a4+1
c2=a0*x
b6=(((a2-2*c2+f)*a4+2*(c2-f))*a4+f)/a7
c2=a1*x
b7=(((a3-2*c2+d)*a4+2*(c2-d))*a4+d)/a7
j.a=Math.min(j.a,b6)
j.c=Math.max(j.c,b6)
j.b=Math.min(j.b,b7)
j.d=Math.max(j.d,b7)}}p=j.a
n=j.b
o=j.c
m=j.d
break
case 4:if(l==null)l=new A.a8W()
g=h+1
c5=v[h]
e=g+1
c6=v[g]
g=e+1
c7=v[e]
e=g+1
c8=v[g]
g=e+1
c9=v[e]
e=g+1
d0=v[g]
d1=v[e]
d2=v[e+1]
x=Math.min(c5,d1)
l.a=x
l.c=Math.min(c6,d2)
a4=Math.max(c5,d1)
l.b=a4
l.d=Math.max(c6,d2)
if(!(c5<c7&&c7<c9&&c9<d1))a5=c5>c7&&c7>c9&&c9>d1
else a5=!0
if(!a5){a5=-c5
d3=a5+3*(c7-c9)+d1
d4=2*(c5-2*c7+c9)
d5=d4*d4-4*d3*(a5+c7)
if(d5>=0&&Math.abs(d3)>0.000244140625){a5=-d4
a6=2*d3
if(d5===0){d6=a5/a6
a9=1-d6
if(d6>=0&&d6<=1){a5=3*a9
b2=a9*a9*a9*c5+a5*a9*d6*c7+a5*d6*d6*c9+d6*d6*d6*d1
l.a=Math.min(b2,x)
l.b=Math.max(b2,a4)}}else{d5=Math.sqrt(d5)
d6=(a5-d5)/a6
a9=1-d6
if(d6>=0&&d6<=1){x=3*a9
b2=a9*a9*a9*c5+x*a9*d6*c7+x*d6*d6*c9+d6*d6*d6*d1
l.a=Math.min(b2,l.a)
l.b=Math.max(b2,l.b)}d6=(a5+d5)/a6
a9=1-d6
if(d6>=0&&d6<=1){x=3*a9
b2=a9*a9*a9*c5+x*a9*d6*c7+x*d6*d6*c9+d6*d6*d6*d1
l.a=Math.min(b2,l.a)
l.b=Math.max(b2,l.b)}}}}if(!(c6<c8&&c8<d0&&d0<d2))x=c6>c8&&c8>d0&&d0>d2
else x=!0
if(!x){x=-c6
d3=x+3*(c8-d0)+d2
d4=2*(c6-2*c8+d0)
d5=d4*d4-4*d3*(x+c8)
if(d5>=0&&Math.abs(d3)>0.000244140625){x=-d4
a4=2*d3
if(d5===0){d6=x/a4
a9=1-d6
if(d6>=0&&d6<=1){x=3*a9
b3=a9*a9*a9*c6+x*a9*d6*c8+x*d6*d6*d0+d6*d6*d6*d2
l.c=Math.min(b3,l.c)
l.d=Math.max(b3,l.d)}}else{d5=Math.sqrt(d5)
d6=(x-d5)/a4
a9=1-d6
if(d6>=0&&d6<=1){a5=3*a9
b3=a9*a9*a9*c6+a5*a9*d6*c8+a5*d6*d6*d0+d6*d6*d6*d2
l.c=Math.min(b3,l.c)
l.d=Math.max(b3,l.d)}x=(x+d5)/a4
b5=1-x
if(x>=0&&x<=1){a4=3*b5
b3=b5*b5*b5*c6+a4*b5*x*c8+a4*x*x*d0+x*x*x*d2
l.c=Math.min(b3,l.c)
l.d=Math.max(b3,l.d)}}}}p=l.a
n=l.c
o=l.b
m=l.d
break}if(!u){q=m
r=o
s=n
t=p
u=!0}else{t=Math.min(t,p)
r=Math.max(r,o)
s=Math.min(s,n)
q=Math.max(q,m)}}d7=u?new B.C(t,s,r,q):C.a0
d8.a.f4(0)
return d8.a.b=d7},
j(d){var x=this.cW(0)
return x},
$iwq:1}
A.ai8.prototype={
HC(d){var x=this,w=x.r,v=x.x
if(w!==v||x.w!==x.y){if(isNaN(w)||isNaN(x.w)||isNaN(v)||isNaN(x.y))return 5
d[0]=w
d[1]=x.w
d[2]=v
w=x.y
d[3]=w
x.r=v
x.w=w
return 1}else{d[0]=v
d[1]=x.y
return 5}},
zs(){var x,w,v=this
if(v.e===1){v.e=2
return new B.n(v.x,v.y)}x=v.a.f
w=v.Q
return new B.n(x[w-2],x[w-1])},
hW(d,e){var x,w,v,u,t,s,r=this,q=r.z,p=r.a
if(q===p.w){if(r.d&&r.e===2){if(1===r.HC(e))return 1
r.d=!1
return 5}return 6}x=r.z=q+1
w=p.r[q]
switch(w){case 0:if(r.d){r.z=x-1
v=r.HC(e)
if(v===5)r.d=!1
return v}if(x===r.c)return 6
q=p.f
p=r.Q
x=r.Q=p+1
u=q[p]
r.Q=x+1
t=q[x]
r.x=u
r.y=t
e[0]=u
e[1]=t
r.e=1
r.r=u
r.w=t
r.d=!0
break
case 1:s=r.zs()
q=p.f
p=r.Q
x=r.Q=p+1
u=q[p]
r.Q=x+1
t=q[x]
e[0]=s.a
e[1]=s.b
e[2]=u
e[3]=t
r.r=u
r.w=t
break
case 3:++r.f
s=r.zs()
e[0]=s.a
e[1]=s.b
q=p.f
p=r.Q
x=r.Q=p+1
e[2]=q[p]
p=r.Q=x+1
e[3]=q[x]
x=r.Q=p+1
p=q[p]
e[4]=p
r.r=p
r.Q=x+1
x=q[x]
e[5]=x
r.w=x
break
case 2:s=r.zs()
e[0]=s.a
e[1]=s.b
q=p.f
p=r.Q
x=r.Q=p+1
e[2]=q[p]
p=r.Q=x+1
e[3]=q[x]
x=r.Q=p+1
p=q[p]
e[4]=p
r.r=p
r.Q=x+1
x=q[x]
e[5]=x
r.w=x
break
case 4:s=r.zs()
e[0]=s.a
e[1]=s.b
q=p.f
p=r.Q
x=r.Q=p+1
e[2]=q[p]
p=r.Q=x+1
e[3]=q[x]
x=r.Q=p+1
e[4]=q[p]
p=r.Q=x+1
e[5]=q[x]
x=r.Q=p+1
p=q[p]
e[6]=p
r.r=p
r.Q=x+1
x=q[x]
e[7]=x
r.w=x
break
case 5:w=r.HC(e)
if(w===1)--r.z
else{r.d=!1
r.e=0}r.r=r.x
r.w=r.y
break
case 6:break
default:throw B.c(B.bH("Unsupport Path verb "+w,null,null))}return w}}
A.ws.prototype={
iU(d,e,f){var x=d*2,w=this.f
w[x]=e
w[x+1]=f},
je(d){var x=this.f,w=d*2
return new B.n(x[w],x[w+1])},
yC(){var x=this
if(x.ay)return new B.C(x.je(0).a,x.je(0).b,x.je(1).a,x.je(2).b)
else return x.w===4?x.agZ():null},
f4(d){var x
if(this.Q)this.HW()
x=this.a
x.toString
return x},
agZ(){var x,w,v,u,t,s,r=this,q=null,p=r.je(0).a,o=r.je(0).b,n=r.je(1).a,m=r.je(1).b
if(r.r[1]!==1||m!==o)return q
x=n-p
w=r.je(2).a
v=r.je(2).b
if(r.r[2]!==1||w!==n)return q
u=v-m
t=r.je(3)
s=r.je(3).b
if(r.r[3]!==1||s!==v)return q
if(w-t.a!==x||s-o!==u)return q
return new B.C(p,o,p+x,o+u)},
a8G(){var x,w,v,u,t
if(this.w===2){x=this.r
x=x[0]!==0||x[1]!==1}else x=!0
if(x)return null
x=this.f
w=x[0]
v=x[1]
u=x[2]
t=x[3]
if(v===t||w===u)return new B.C(w,v,u,t)
return null},
zT(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this.f4(0),k=B.a([],y.kX),j=new A.rl(this)
j.ul(this)
x=new Float32Array(8)
j.hW(0,x)
for(w=0;v=j.hW(0,x),v!==6;)if(3===v){u=x[2]
t=x[3]
s=u-x[0]
r=t-x[1]
q=x[4]
p=x[5]
if(s!==0){o=Math.abs(s)
n=Math.abs(p-t)}else{n=Math.abs(r)
o=r!==0?Math.abs(q-u):Math.abs(s)}k.push(new A.ct(o,n));++w}q=k[0]
p=k[1]
m=k[2]
return A.aj2(l,k[3],m,q,p)},
k(d,e){if(e==null)return!1
if(this===e)return!0
if(J.Y(e)!==B.I(this))return!1
return e instanceof A.ws&&this.avc(e)},
gD(d){var x=this
return B.cV(x.cx,x.f,x.y,x.r,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f)},
avc(d){var x,w,v,u,t,s,r,q=this
if(q.cx!==d.cx)return!1
x=q.d
if(x!==d.d)return!1
w=x*2
for(v=q.f,u=d.f,t=0;t<w;++t)if(v[t]!==u[t])return!1
v=q.y
if(v==null){if(d.y!=null)return!1}else{u=d.y
if(u==null)return!1
s=v.length
if(u.length!==s)return!1
for(t=0;t<s;++t)if(v[t]!==u[t])return!1}r=q.w
if(r!==d.w)return!1
for(v=q.r,u=d.r,t=0;t<r;++t)if(v[t]!==u[t])return!1
return!0},
apr(d){var x,w,v=this
if(d>v.c){x=d+10
v.c=x
w=new Float32Array(x*2)
C.lZ.tU(w,0,v.f)
v.f=w}v.d=d},
aps(d){var x,w,v=this
if(d>v.e){x=d+8
v.e=x
w=new Uint8Array(x)
C.B.tU(w,0,v.r)
v.r=w}v.w=d},
apq(d){var x,w,v=this
if(d>v.x){x=d+4
v.x=x
w=new Float32Array(x)
x=v.y
if(x!=null)C.lZ.tU(w,0,x)
v.y=w}v.z=d},
HW(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.Q=!1
n.b=null
if(m===0){n.a=C.a0
n.as=!0}else{x=n.f
w=x[0]
v=x[1]
u=0*w*v
t=2*m
for(s=v,r=w,q=2;q<t;q+=2){p=x[q]
o=x[q+1]
u=u*p*o
r=Math.min(r,p)
s=Math.min(s,o)
w=Math.max(w,p)
v=Math.max(v,o)}if(u*0===0){n.a=new B.C(r,s,w,v)
n.as=!0}else{n.a=C.a0
n.as=!1}}},
lx(d,e){var x,w,v,u,t,s=this
switch(d){case 0:x=1
w=0
break
case 1:x=1
w=1
break
case 2:x=2
w=2
break
case 3:x=2
w=4
break
case 4:x=3
w=8
break
case 5:x=0
w=0
break
case 6:x=0
w=0
break
default:x=0
w=0
break}s.cx|=w
s.Q=!0
s.a9L()
v=s.w
s.aps(v+1)
s.r[v]=d
if(3===d){u=s.z
s.apq(u+1)
s.y[u]=e}t=s.d
s.apr(t+x)
return t},
a9L(){var x=this
x.ay=x.ax=x.at=!1
x.b=null
x.Q=!0}}
A.rl.prototype={
ul(d){var x
this.d=0
x=this.a
if(x.Q)x.HW()
if(!x.as)this.c=x.w},
axR(){var x,w=this,v=w.c,u=w.a
if(v===u.w)return 6
u=u.r
w.c=v+1
x=u[v]
switch(x){case 0:v=w.d
w.e=v
w.d=v+2
break
case 1:v=w.d
w.e=v-2
w.d=v+2
break
case 3:++w.b
v=w.d
w.e=v-2
w.d=v+4
break
case 2:v=w.d
w.e=v-2
w.d=v+4
break
case 4:v=w.d
w.e=v-2
w.d=v+6
break
case 5:break
case 6:break
default:throw B.c(B.bH("Unsupport Path verb "+x,null,null))}return x},
hW(d,e){var x,w,v,u,t,s=this,r=s.c,q=s.a
if(r===q.w)return 6
x=q.r
s.c=r+1
w=x[r]
v=q.f
u=s.d
switch(w){case 0:t=u+1
e[0]=v[u]
u=t+1
e[1]=v[t]
break
case 1:e[0]=v[u-2]
e[1]=v[u-1]
t=u+1
e[2]=v[u]
u=t+1
e[3]=v[t]
break
case 3:++s.b
e[0]=v[u-2]
e[1]=v[u-1]
t=u+1
e[2]=v[u]
u=t+1
e[3]=v[t]
t=u+1
e[4]=v[u]
u=t+1
e[5]=v[t]
break
case 2:e[0]=v[u-2]
e[1]=v[u-1]
t=u+1
e[2]=v[u]
u=t+1
e[3]=v[t]
t=u+1
e[4]=v[u]
u=t+1
e[5]=v[t]
break
case 4:e[0]=v[u-2]
e[1]=v[u-1]
t=u+1
e[2]=v[u]
u=t+1
e[3]=v[t]
t=u+1
e[4]=v[u]
u=t+1
e[5]=v[t]
t=u+1
e[6]=v[u]
u=t+1
e[7]=v[t]
break
case 5:break
case 6:break
default:throw B.c(B.bH("Unsupport Path verb "+w,null,null))}s.d=u
return w}}
A.mJ.prototype={
nG(d,e,f){var x,w,v,u,t,s,r,q=this
if(d===0){x=A.a5D(-f,e)
q.a=x
return x==null?0:1}w=e*e-4*d*f
if(w<0)return 0
w=Math.sqrt(w)
if(!isFinite(w))return 0
v=e<0?-(e-w)/2:-(e+w)/2
u=A.a5D(v,d)
if(u!=null){q.a=u
t=1}else t=0
u=A.a5D(f,v)
if(u!=null){s=t+1
if(t===0)q.a=u
else q.b=u
t=s}if(t===2){x=q.a
x.toString
r=q.b
r.toString
if(x>r){q.a=r
q.b=x}else if(x===r)return 1}return t}}
A.an1.prototype={
a1S(d){return(this.a*d+this.c)*d+this.e},
a1T(d){return(this.b*d+this.d)*d+this.f}}
A.ai9.prototype={
arU(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a,h=A.aMC(i,!0)
for(x=j.f,w=y.r;v=h.hW(0,x),v!==6;)switch(v){case 0:case 5:break
case 1:j.ag2()
break
case 2:u=!A.aME(x)?A.aXu(x):0
t=j.V4(x[0],x[1],x[2],x[3],x[4],x[5])
j.d+=u>0?t+j.V4(x[4],x[5],x[6],x[7],x[8],x[9]):t
break
case 3:s=i.y[h.f]
r=x[0]
q=x[1]
p=x[2]
o=x[3]
n=x[4]
m=x[5]
l=A.aME(x)
k=B.a([],w)
new A.hE(r,q,p,o,n,m,s).atp(k)
j.V3(k[0])
if(!l&&k.length===2)j.V3(k[1])
break
case 4:j.ag0()
break}},
ag2(){var x,w,v,u,t,s=this,r=s.f,q=r[0],p=r[1],o=r[2],n=r[3]
if(p>n){x=p
w=n
v=-1}else{x=n
w=p
v=1}r=s.c
if(r<w||r>x)return
u=s.b
if(A.aia(u,r,q,p,o,n)){++s.e
return}if(r===x)return
t=(o-q)*(r-p)-(n-p)*(u-q)
if(t===0){if(u!==o||r!==n)++s.e
v=0}else if(A.aYk(t)===v)v=0
s.d+=v},
V4(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p=this
if(e>i){x=e
w=i
v=-1}else{x=i
w=e
v=1}u=p.c
if(u<w||u>x)return 0
t=p.b
if(A.aia(t,u,d,e,h,i)){++p.e
return 0}if(u===x)return 0
s=new A.mJ()
if(0===s.nG(e-2*g+i,2*(g-e),e-u))r=v===1?d:h
else{q=s.a
q.toString
r=((h-2*f+d)*q+2*(f-d))*q+d}if(Math.abs(r-t)<0.000244140625)if(t!==h||u!==i){++p.e
return 0}return r<t?v:0},
V3(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=d.f
if(m>l){x=m
w=l
v=-1}else{x=l
w=m
v=1}u=n.c
if(u<w||u>x)return
t=n.b
if(A.aia(t,u,d.a,m,d.e,l)){++n.e
return}if(u===x)return
s=d.r
r=d.d*s-u*s+u
q=new A.mJ()
if(0===q.nG(l+(m-2*r),2*(r-m),m-u))p=v===1?d.a:d.e
else{o=q.a
o.toString
p=A.aV0(d.a,d.c,d.e,s,o)/A.aV_(s,o)}if(Math.abs(p-t)<0.000244140625)if(t!==d.e||u!==d.f){++n.e
return}u=n.d
n.d=u+(p<t?v:0)},
ag0(){var x,w=this.f,v=A.aQh(w,w)
for(x=0;x<=v;++x)this.arV(x*3*2)},
arV(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.f,j=d+1,i=k[d],h=j+1,g=k[j],f=k[h]
j=h+1+1
x=k[j]
j=j+1+1
w=k[j]
v=k[j+1]
if(g>v){u=g
t=v
s=-1}else{u=v
t=g
s=1}r=l.c
if(r<t||r>u)return
q=l.b
if(A.aia(q,r,i,g,w,v)){++l.e
return}if(r===u)return
p=Math.min(i,Math.min(f,Math.min(x,w)))
o=Math.max(i,Math.max(f,Math.max(x,w)))
if(q<p)return
if(q>o){l.d+=s
return}n=A.aQi(k,d,r)
if(n==null)return
m=A.aQA(i,f,x,w,n)
if(Math.abs(m-q)<0.000244140625)if(q!==w||r!==v){++l.e
return}k=l.d
l.d=k+(m<q?s:0)}}
A.oF.prototype={
ayD(){return this.b.$0()}}
A.UR.prototype={
cH(d){return this.BP("flt-picture")},
xK(d){this.Rj(d)},
kl(){var x,w,v,u,t,s=this,r=s.e.f
s.f=r
x=s.CW
if(x!==0||s.cx!==0){r.toString
w=new B.cm(new Float32Array(16))
w.bZ(r)
s.f=w
w.b0(0,x,s.cx)}r=s.db
v=r.c-r.a
u=r.d-r.b
r=v===0||u===0
t=r?1:A.b0J(s.f,v,u)
if(t!==s.dy){s.dy=t
s.fr=!0}s.ag1()},
ag1(){var x,w,v,u,t,s,r=this,q=r.e
if(q.r==null){x=B.f2()
for(w=null;q!=null;){v=q.w
if(v!=null)w=w==null?A.a5B(x,v):w.h5(A.a5B(x,v))
u=q.gx4()
if(u!=null&&!u.rQ(0))x.dE(0,u)
q=q.e}if(w!=null)t=w.c-w.a<=0||w.d-w.b<=0
else t=!1
if(t)w=C.a0
t=r.e
t.r=w}else t=q
t=t.r
s=r.db
if(t==null){r.id=s
t=s}else t=r.id=s.h5(t)
if(t.c-t.a<=0||t.d-t.b<=0)r.go=r.id=C.a0},
HX(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
if(d==null||!d.cy.b.e){m.fy=m.id
m.fr=!0
return}x=d===m?m.fy:d.fy
if(J.h(m.id,C.a0)){m.fy=C.a0
if(!J.h(x,C.a0))m.fr=!0
return}x.toString
w=m.id
w.toString
if(A.aRn(x,w)){m.fy=x
return}v=w.a
u=w.b
t=w.c
w=w.d
s=t-v
r=A.aie(x.a-v,s)
q=w-u
p=A.aie(x.b-u,q)
s=A.aie(t-x.c,s)
q=A.aie(w-x.d,q)
o=m.db
o.toString
n=new B.C(v-r,u-p,t+s,w+q).h5(o)
m.fr=!J.h(m.fy,n)
m.fy=n},
zd(d){var x,w,v,u=this,t=d==null,s=t?null:d.ch
u.fr=!1
x=u.cy.b
if(x.e){w=u.fy
w=w.ga_(w)}else w=!0
if(w){A.a5i(s)
if(!t)d.ch=null
t=u.d
if(t!=null)A.aF4(t)
t=u.ch
if(t!=null&&t!==s)A.a5i(t)
u.ch=null
return}if(x.d.c)u.aeZ(s)
else{A.a5i(u.ch)
t=u.d
t.toString
v=u.ch=new A.a9J(t,B.a([],y.fB),B.a([],y.j),B.f2())
t=u.d
t.toString
A.aF4(t)
t=u.fy
t.toString
x.KH(v,t)
v.rq()}},
NV(d){var x,w,v,u,t=this,s=d.cy,r=t.cy
if(s===r)return 0
s=s.b
if(!s.e)return 1
x=s.d.c
w=r.b.d.c
if(x!==w)return 1
else if(!w)return 1
else{v=y.g4.a(d.ch)
if(v==null)return 1
else{s=t.id
s.toString
if(!v.a1u(s,t.dy))return 1
else{s=t.id
s=A.a7j(s.c-s.a)
r=t.id
r=A.a7i(r.d-r.b)
u=v.r*v.w
if(u===0)return 1
return 1-s*r/u}}}},
aeZ(d){var x,w,v=this
if(d instanceof A.m6){x=v.fy
x.toString
x=d.a1u(x,v.dy)&&d.y===B.bt()}else x=!1
if(x){x=v.fy
x.toString
d.sno(0,x)
v.ch=d
d.b=v.fx
d.aS(0)
x=v.cy.b
x.toString
w=v.fy
w.toString
x.KH(d,w)
d.rq()}else{A.a5i(d)
x=v.ch
if(x instanceof A.m6)x.b=null
v.ch=null
x=$.azM
w=v.fy
x.push(new A.oF(new B.V(w.c-w.a,w.d-w.b),new A.aid(v)))}},
ai9(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=d.c-d.a,f=d.d-d.b
for(x=g+1,w=f+1,v=g*f,u=v>1,t=null,s=1/0,r=0;r<$.ns.length;++r){q=$.ns[r]
p=window.devicePixelRatio
o=p===0?1:p
if(q.y!==o)continue
o=q.a
n=o.c-o.a
o=o.d-o.b
m=n*o
l=h.dy
p=window.devicePixelRatio
if(q.r>=C.e.eh(x*(p===0?1:p))+2){p=window.devicePixelRatio
k=q.w>=C.e.eh(w*(p===0?1:p))+2&&q.ay===l}else k=!1
j=m<s
if(k&&j)if(!(j&&u&&m/v>4)){if(n===g&&o===f){t=q
break}s=m
t=q}}if(t!=null){C.d.P($.ns,t)
t.sno(0,d)
t.b=h.fx
return t}i=A.aUo(d,h.cy.b.d,h.dy)
i.b=h.fx
return i},
Uo(){var x=this.d.style
C.h.b1(x,C.h.aq(x,"transform"),"translate("+B.e(this.CW)+"px, "+B.e(this.cx)+"px)","")},
ig(){this.Uo()
this.zd(null)},
bQ(d){this.HX(null)
this.fr=!0
this.Rh(0)},
cc(d,e){var x,w,v=this
v.Rl(0,e)
v.fx=e.fx
if(e!==v)e.fx=null
if(v.CW!==e.CW||v.cx!==e.cx)v.Uo()
v.HX(e)
if(v.cy===e.cy){x=v.ch
w=x instanceof A.m6&&v.dy!==x.ay
if(v.fr||w)v.zd(e)
else v.ch=e.ch}else v.zd(e)},
o7(){var x=this
x.Rk()
x.HX(x)
if(x.fr)x.zd(x)},
jX(){A.a5i(this.ch)
this.ch=null
this.Ri()}}
A.ajl.prototype={
KH(d,e){var x,w,v,u,t,s,r,q,p,o
try{r=this.b
r.toString
r=A.aRn(e,r)
q=this.c
p=q.length
if(r){x=p
for(w=0;w<x;++w)q[w].ce(d)}else{v=p
for(u=0;u<v;++u){t=q[u]
if(t instanceof A.Bp)if(t.wX(e))continue
t.ce(d)}}}catch(o){s=B.ay(o)
if(!J.h(s.name,"NS_ERROR_FAILURE"))throw o}},
dg(d,e,f){var x,w,v=this,u=f.a
if(u.w!=null)v.d.c=!0
v.e=!0
x=A.JH(f)
f.b=!0
w=new A.UA(e,u,-1/0,-1/0,1/0,1/0)
u=v.a
if(x!==0)u.yE(e.eM(x),w)
else u.yE(e,w)
v.c.push(w)},
dB(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=f.a
if(o.w!=null||!e.as)p.d.c=!0
p.e=!0
x=A.JH(f)
w=e.a
v=e.c
u=Math.min(w,v)
t=e.b
s=e.d
r=Math.min(t,s)
v=Math.max(w,v)
s=Math.max(t,s)
f.b=!0
q=new A.Uz(e,o,-1/0,-1/0,1/0,1/0)
p.a.q7(u-x,r-x,v+x,s+x,q)
p.c.push(q)},
hM(a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=new B.C(a3.a,a3.b,a3.c,a3.d),g=a2.a,f=a2.b,e=a2.c,d=a2.d,a0=new B.C(g,f,e,d)
if(a0.k(0,h)||!a0.h5(h).k(0,h))return
x=a2.tS()
w=a3.tS()
v=A.tU(x.e,x.f)
u=A.tU(x.r,x.w)
t=A.tU(x.z,x.Q)
s=A.tU(x.x,x.y)
r=A.tU(w.e,w.f)
q=A.tU(w.r,w.w)
p=A.tU(w.z,w.Q)
o=A.tU(w.x,w.y)
if(r>v||q>u||p>t||o>s)return
i.e=i.d.c=!0
n=A.JH(a4)
a4.b=!0
m=new A.Uu(a2,a3,a4.a,-1/0,-1/0,1/0,1/0)
l=A.bV()
l.sa25(D.j1)
l.eF(0,a2)
l.eF(0,a3)
l.d1(0)
m.x=l
k=Math.min(g,e)
j=Math.max(g,e)
i.a.q7(k-n,Math.min(f,d)-n,j+n,Math.max(f,d)+n,m)
i.c.push(m)},
cL(d,e,f){var x,w,v,u,t,s,r,q,p,o=this
if(f.a.w==null){y.H.a(e)
x=e.a.yC()
if(x!=null){o.dg(0,x,f)
return}w=e.a
v=w.ax?w.zT():null
if(v!=null){o.dB(0,v,f)
return}}y.H.a(e)
if(e.a.w!==0){o.e=o.d.c=!0
u=e.f4(0)
t=A.JH(f)
if(t!==0)u=u.eM(t)
w=e.a
s=new A.ws(w.f,w.r)
s.e=w.e
s.w=w.w
s.c=w.c
s.d=w.d
s.x=w.x
s.z=w.z
s.y=w.y
r=w.Q
s.Q=r
if(!r){s.a=w.a
s.b=w.b
s.as=w.as}s.cx=w.cx
s.at=w.at
s.ax=w.ax
s.ay=w.ay
s.ch=w.ch
s.CW=w.CW
q=new A.rV(s,D.cs)
q.V9(e)
f.b=!0
p=new A.Uy(q,f.a,-1/0,-1/0,1/0,1/0)
o.a.yE(u,p)
q.b=e.b
o.c.push(p)}},
ji(d,e,f){var x,w,v,u,t=this
y.aH.a(e)
if(!e.f)return
t.e=!0
x=t.d
x.c=!0
x.b=!0
w=f.a
v=f.b
u=new A.Ux(e,f,-1/0,-1/0,1/0,1/0)
t.a.q7(w,v,w+e.gfp().c,v+e.gfp().d,u)
t.c.push(u)}}
A.dV.prototype={}
A.Bp.prototype={
wX(d){var x=this
if(x.a)return!0
return x.e<d.b||x.c>d.d||x.d<d.a||x.b>d.c}}
A.DP.prototype={
ce(d){d.ci(0)},
j(d){var x=this.cW(0)
return x}}
A.UB.prototype={
ce(d){d.c4(0)},
j(d){var x=this.cW(0)
return x}}
A.UF.prototype={
ce(d){d.b0(0,this.a,this.b)},
j(d){var x=this.cW(0)
return x}}
A.UD.prototype={
ce(d){d.ds(0,this.a,this.b)},
j(d){var x=this.cW(0)
return x}}
A.UC.prototype={
ce(d){d.jz(0,this.a)},
j(d){var x=this.cW(0)
return x}}
A.UE.prototype={
ce(d){d.aC(0,this.a)},
j(d){var x=this.cW(0)
return x}}
A.Us.prototype={
ce(d){d.p_(0,this.f,this.r)},
j(d){var x=this.cW(0)
return x}}
A.Ur.prototype={
ce(d){d.oZ(0,this.f)},
j(d){var x=this.cW(0)
return x}}
A.Uq.prototype={
ce(d){d.ih(0,this.f)},
j(d){var x=this.cW(0)
return x}}
A.Uw.prototype={
ce(d){d.kZ(0,this.f,this.r,this.w)},
j(d){var x=this.cW(0)
return x}}
A.UA.prototype={
ce(d){d.dg(0,this.f,this.r)},
j(d){var x=this.cW(0)
return x}}
A.Uz.prototype={
ce(d){d.dB(0,this.f,this.r)},
j(d){var x=this.cW(0)
return x}}
A.Uu.prototype={
ce(d){var x=this.w
if(x.b==null)x.b=D.bj
d.cL(0,this.x,x)},
j(d){var x=this.cW(0)
return x}}
A.Ut.prototype={
ce(d){d.fW(0,this.f,this.r,this.w)},
j(d){var x=this.cW(0)
return x}}
A.Uy.prototype={
ce(d){d.cL(0,this.f,this.r)},
j(d){var x=this.cW(0)
return x}}
A.Uv.prototype={
ce(d){var x=this
d.kY(x.f,x.r,x.w,x.x)},
j(d){var x=this.cW(0)
return x}}
A.Ux.prototype={
ce(d){d.ji(0,this.f,this.r)},
j(d){var x=this.cW(0)
return x}}
A.av4.prototype={
p_(d,e,f){var x,w,v,u,t=this,s=e.a,r=e.b,q=e.c,p=e.d
if(!t.x){x=$.aFx()
x[0]=s
x[1]=r
x[2]=q
x[3]=p
A.aFc(t.y,x)
s=x[0]
r=x[1]
q=x[2]
p=x[3]}if(!t.z){t.Q=s
t.as=r
t.at=q
t.ax=p
t.z=!0
w=p
v=q
u=r
x=s}else{x=t.Q
if(s>x){t.Q=s
x=s}u=t.as
if(r>u){t.as=r
u=r}v=t.at
if(q<v){t.at=q
v=q}w=t.ax
if(p<w){t.ax=p
w=p}}if(x>=v||u>=w)f.a=!0
else{f.b=x
f.c=u
f.d=v
f.e=w}},
yE(d,e){this.q7(d.a,d.b,d.c,d.d,e)},
q7(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o=this
if(d===f||e===g){h.a=!0
return}if(!o.x){x=$.aFx()
x[0]=d
x[1]=e
x[2]=f
x[3]=g
A.aFc(o.y,x)
w=x[0]
v=x[1]
u=x[2]
t=x[3]}else{t=g
u=f
v=e
w=d}if(o.z){s=o.at
if(w>=s){h.a=!0
return}r=o.Q
if(u<=r){h.a=!0
return}q=o.ax
if(v>=q){h.a=!0
return}p=o.as
if(t<=p){h.a=!0
return}if(w<r)w=r
if(u>s)u=s
if(v<p)v=p
if(t>q)t=q}h.b=w
h.c=v
h.d=u
h.e=t
if(o.b){o.c=Math.min(Math.min(o.c,w),u)
o.e=Math.max(Math.max(o.e,w),u)
o.d=Math.min(Math.min(o.d,v),t)
o.f=Math.max(Math.max(o.f,v),t)}else{o.c=Math.min(w,u)
o.e=Math.max(w,u)
o.d=Math.min(v,t)
o.f=Math.max(v,t)}o.b=!0},
Q9(){var x=this,w=x.y,v=new B.cm(new Float32Array(16))
v.bZ(w)
x.r.push(v)
w=x.z?new B.C(x.Q,x.as,x.at,x.ax):null
x.w.push(w)},
atG(){var x,w,v,u,t,s,r,q,p,o,n=this
if(!n.b)return C.a0
x=n.a
w=x.a
if(isNaN(w))w=-1/0
v=x.c
if(isNaN(v))v=1/0
u=x.b
if(isNaN(u))u=-1/0
t=x.d
if(isNaN(t))t=1/0
x=n.c
s=n.e
r=Math.min(x,s)
q=Math.max(x,s)
s=n.d
x=n.f
p=Math.min(s,x)
o=Math.max(s,x)
if(q<w||o<u)return C.a0
return new B.C(Math.max(r,w),Math.max(p,u),Math.min(q,v),Math.min(o,t))},
j(d){var x=this.cW(0)
return x}}
A.akf.prototype={}
A.xE.prototype={
p(d){}}
A.DZ.prototype={
kl(){var x,w=window.innerWidth
w.toString
x=window.innerHeight
x.toString
this.w=new B.C(0,0,w,x)
this.r=null},
gx4(){var x=this.CW
return x==null?this.CW=B.f2():x},
cH(d){return this.BP("flt-scene")},
ig(){}}
A.aoP.prototype={
aoB(d){var x,w=d.a.a
if(w!=null)w.c=D.ahi
w=this.a
x=C.d.gJ(w)
x.x.push(d)
d.e=x
w.push(d)
return d},
qD(d){return this.aoB(d,y.w)},
OB(d,e,f){var x,w
y.f3.a(f)
x=B.a([],y.g)
w=f!=null&&f.c===D.aT?f:null
w=new A.ie(w,y.K)
$.lZ.push(w)
return this.qD(new A.DW(d,e,x,w,D.c7))},
xO(d,e){var x,w,v
if(this.a.length===1)x=B.f2().a
else x=A.a5A(d)
y.a6.a(e)
w=B.a([],y.g)
v=e!=null&&e.c===D.aT?e:null
v=new A.ie(v,y.K)
$.lZ.push(v)
return this.qD(new A.E_(x,w,v,D.c7))},
a4T(d,e,f){var x,w
y.cQ.a(f)
x=B.a([],y.g)
w=f!=null&&f.c===D.aT?f:null
w=new A.ie(w,y.K)
$.lZ.push(w)
return this.qD(new A.DV(e,d,null,x,w,D.c7))},
a4S(d,e,f){var x,w
y.bg.a(f)
x=B.a([],y.g)
w=f!=null&&f.c===D.aT?f:null
w=new A.ie(w,y.K)
$.lZ.push(w)
return this.qD(new A.DU(d,e,x,w,D.c7))},
a4X(d,e,f){var x,w
y.ao.a(f)
x=B.a([],y.g)
w=f!=null&&f.c===D.aT?f:null
w=new A.ie(w,y.K)
$.lZ.push(w)
return this.qD(new A.DX(d,e,x,w,D.c7))},
a4Z(d,e,f,g,h,i){var x,w,v,u,t
y.hy.a(g)
y.H.a(h)
x=e.gn(e)
w=i==null?null:i.gn(i)
if(w==null)w=4278190080
v=h.f4(0)
u=B.a([],y.g)
t=g!=null&&g.c===D.aT?g:null
t=new A.ie(t,y.K)
$.lZ.push(t)
return this.qD(new A.DY(h,v,f,new B.W(x),new B.W(w),d,null,u,t,D.c7))},
a_W(d){var x
y.w.a(d)
if(d.c===D.aT)d.c=D.ei
else d.FD()
x=C.d.gJ(this.a)
x.x.push(d)
d.e=x},
eO(d){this.a.pop()},
a_S(d,e){if(!$.aNJ){$.aNJ=!0
$.cI().$1("The performance overlay isn't supported on the web")}},
a_T(d,e,f,g){var x,w
y.h3.a(e)
x=e.b.b
w=new A.ie(null,y.K)
$.lZ.push(w)
w=new A.UR(d.a,d.b,e,x,new A.My(y.dE),w,D.c7)
x=C.d.gJ(this.a)
x.x.push(w)
w.e=x},
Qz(d){},
Qo(d){},
Qn(d){},
bQ(d){B.aQG()
B.aQH()
B.aA4("preroll_frame",new A.aoR(this))
return B.aA4("apply_frame",new A.aoS(this))}}
A.oI.prototype={
j(d){return"PersistedSurfaceState."+this.b}}
A.e9.prototype={
FD(){this.c=D.c7},
gjg(){return this.d},
bQ(d){var x,w=this,v=w.cH(0)
w.d=v
x=$.cO()
if(x===C.aa){v=v.style
v.zIndex="0"}w.ig()
w.c=D.aT},
AZ(d){this.d=d.d
d.d=null
d.c=D.CF},
cc(d,e){this.AZ(e)
this.c=D.aT},
o7(){if(this.c===D.ei)$.aF5.push(this)},
jX(){var x=this.d
x.toString
J.cW(x)
this.d=null
this.c=D.CF},
p(d){},
BP(d){var x=B.d2(d,null),w=x.style
w.position="absolute"
return x},
gx4(){return null},
kl(){var x=this
x.f=x.e.f
x.r=x.w=null},
xK(d){this.kl()},
j(d){var x=this.cW(0)
return x}}
A.UQ.prototype={}
A.f5.prototype={
xK(d){var x,w,v
this.Rj(d)
x=this.x
w=x.length
for(v=0;v<w;++v)x[v].xK(d)},
kl(){var x=this
x.f=x.e.f
x.r=x.w=null},
bQ(d){var x,w,v,u,t,s
this.Rh(0)
x=this.x
w=x.length
v=this.gjg()
for(u=0;u<w;++u){t=x[u]
if(t.c===D.ei)t.o7()
else if(t instanceof A.f5&&t.a.a!=null){s=t.a.a
s.toString
t.cc(0,s)}else t.bQ(0)
v.toString
s=t.d
s.toString
v.appendChild(s)
t.b=u}},
NV(d){return 1},
cc(d,e){var x,w=this
w.Rl(0,e)
if(e.x.length===0)w.arG(e)
else{x=w.x.length
if(x===1)w.ars(e)
else if(x===0)A.UP(e)
else w.arr(e)}},
arG(d){var x,w,v,u=this.gjg(),t=this.x,s=t.length
for(x=0;x<s;++x){w=t[x]
if(w.c===D.ei)w.o7()
else if(w instanceof A.f5&&w.a.a!=null){v=w.a.a
v.toString
w.cc(0,v)}else w.bQ(0)
w.b=x
u.toString
v=w.d
v.toString
u.appendChild(v)}},
ars(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=m.x[0]
l.b=0
if(l.c===D.ei){x=l.d.parentElement
w=m.gjg()
if(x==null?w!=null:x!==w){x=m.gjg()
x.toString
w=l.d
w.toString
x.appendChild(w)}l.o7()
A.UP(d)
return}if(l instanceof A.f5&&l.a.a!=null){v=l.a.a
x=v.d.parentElement
w=m.gjg()
if(x==null?w!=null:x!==w){x=m.gjg()
x.toString
w=v.d
w.toString
x.appendChild(w)}l.cc(0,v)
A.UP(d)
return}for(x=d.x,u=null,t=2,s=0;s<x.length;++s){r=x[s]
if(r.c===D.aT){q=l instanceof B.bN?B.e1(l):null
w=B.bU(q==null?B.bg(l):q)
q=r instanceof B.bN?B.e1(r):null
w=w===B.bU(q==null?B.bg(r):q)}else w=!1
if(!w)continue
p=l.NV(r)
if(p<t){t=p
u=r}}if(u!=null){l.cc(0,u)
w=l.d.parentElement
o=m.gjg()
if(w==null?o!=null:w!==o){w=m.gjg()
w.toString
o=l.d
o.toString
w.appendChild(o)}}else{l.bQ(0)
w=m.gjg()
w.toString
o=l.d
o.toString
w.appendChild(o)}for(s=0;s<x.length;++s){n=x[s]
if(n!==u&&n.c===D.aT)n.jX()}},
arr(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.gjg(),i=k.amn(d)
for(x=k.x,w=y.t,v=null,u=null,t=!1,s=0;s<x.length;++s){r=x[s]
if(r.c===D.ei){q=r.d.parentElement
p=q==null?j!=null:q!==j
r.o7()
o=r}else if(r instanceof A.f5&&r.a.a!=null){n=r.a.a
q=n.d.parentElement
p=q==null?j!=null:q!==j
r.cc(0,n)
o=n}else{o=i.h(0,r)
if(o!=null){q=o.d.parentElement
p=q==null?j!=null:q!==j
r.cc(0,o)}else{r.bQ(0)
p=!0}}m=o!=null&&!p?o.b:-1
if(!t&&m!==s){v=B.a([],w)
u=B.a([],w)
for(l=0;l<s;++l){v.push(l)
u.push(l)}t=!0}if(t&&m!==-1){v.push(s)
u.push(m)}r.b=s}if(t){u.toString
k.alQ(v,u)}A.UP(d)},
alQ(d,e){var x,w,v,u,t,s,r,q=B.aQZ(e)
for(x=q.length,w=0;w<x;++w)q[w]=d[q[w]]
v=this.gjg()
for(x=this.x,w=x.length-1,u=y.A,t=null;w>=0;--w,t=r){d.toString
s=C.d.e5(d,w)!==-1&&C.d.v(q,w)
r=x[w].d
r.toString
u.a(r)
if(!s)if(t==null)v.appendChild(r)
else v.insertBefore(r,t)}},
amn(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this.x,h=i.length,g=d.x,f=g.length,e=B.a([],y.g)
for(x=0;x<h;++x){w=i[x]
if(w.c===D.c7&&w.a.a==null)e.push(w)}v=B.a([],y.lN)
for(x=0;x<f;++x){w=g[x]
if(w.c===D.aT)v.push(w)}u=e.length
t=v.length
if(u===0||t===0)return D.abV
s=B.a([],y.nq)
for(r=0;r<u;++r){q=e[r]
for(p=0;p<t;++p){o=v[p]
if(o!=null){if(o.c===D.aT){n=q instanceof B.bN?B.e1(q):null
i=B.bU(n==null?B.bg(q):n)
n=o instanceof B.bN?B.e1(o):null
i=i===B.bU(n==null?B.bg(o):n)}else i=!1
i=!i}else i=!0
if(i)continue
s.push(new A.pC(q,p,q.NV(o)))}}C.d.ec(s,new A.aic())
m=B.E(y.n8,y.pk)
for(x=0;x<s.length;++x){l=s[x]
i=l.b
k=v[i]
g=l.a
j=m.h(0,g)==null
if(k!=null&&j){v[i]=null
m.l(0,g,k)}}return m},
o7(){var x,w,v
this.Rk()
x=this.x
w=x.length
for(v=0;v<w;++v)x[v].o7()},
FD(){var x,w,v
this.abh()
x=this.x
w=x.length
for(v=0;v<w;++v)x[v].FD()},
jX(){this.Ri()
A.UP(this)}}
A.pC.prototype={
j(d){var x=this.cW(0)
return x}}
A.aiN.prototype={}
A.E_.prototype={
ga3E(){var x=this.cx
return x==null?this.cx=new B.cm(this.CW):x},
kl(){var x=this,w=x.e.f
w.toString
x.f=w.F6(x.ga3E())
x.r=null},
gx4(){var x=this.cy
return x==null?this.cy=A.aX9(this.ga3E()):x},
cH(d){var x=document.createElement("flt-transform")
B.e3(x,"position","absolute")
B.e3(x,"transform-origin","0 0 0")
return x},
ig(){var x=this.d.style,w=B.jy(this.CW)
C.h.b1(x,C.h.aq(x,"transform"),w,"")},
cc(d,e){var x,w,v,u,t=this
t.qj(0,e)
x=e.CW
w=t.CW
if(x===w){t.cx=e.cx
t.cy=e.cy
return}u=0
while(!0){if(!(u<16)){v=!1
break}if(w[u]!==x[u]){v=!0
break}++u}if(v){x=t.d.style
w=B.jy(w)
C.h.b1(x,C.h.aq(x,"transform"),w,"")}else{t.cx=e.cx
t.cy=e.cy}},
$iG3:1}
A.C7.prototype={
p(d){},
fS(d){return this},
a36(d){return d===this},
atu(){var x,w=this.a
if(this.b)return y.R.a(w.cloneNode(!0))
else{this.b=!0
x=w.style
x.position="absolute"
return w}},
j(d){return"["+this.d+"\xd7"+this.e+"]"},
gby(d){return this.d},
gbW(d){return this.e}}
A.P8.prototype={
nn(d,e){var x,w
this.b=e
this.c=!0
x=B.b(e,"cullRect")
w=B.a([],y.aJ)
return this.a=new A.ajl(new A.av4(x,B.a([],y.gq),B.a([],y.fQ),B.f2()),w,new A.akf())},
ga3g(){return this.c},
D8(){var x,w=this
if(!w.c)w.nn(0,D.mg)
w.c=!1
x=w.a
x.b=x.a.atG()
x.f=!0
x=w.a
B.b(w.b,"cullRect")
return new A.P7(x)}}
A.P7.prototype={
p(d){this.a=!0}}
A.aoT.prototype={}
A.Lq.prototype={
gby(d){return this.gfp().c},
gbW(d){return this.gfp().d},
gEZ(){var x=this.gfp().e
x=x==null?null:x.at
return x==null?0:x},
gNY(){return this.gfp().f},
gF2(){return this.gfp().r},
gnj(d){return this.gfp().w},
ga2H(d){return this.gfp().x},
gMA(d){this.gfp()
return!1},
gfp(){var x,w,v=this,u=v.w
if(u===$){x=B.Ap(null,null).getContext("2d")
w=B.a([],y.dP)
B.c4(v.w,"_layoutService")
u=v.w=new A.apD(v,x,w)}return u},
il(d,e){var x=this
e=new A.oG(Math.floor(e.a))
if(e.k(0,x.r))return
B.bf("stopwatch")
x.gfp().xF(e)
x.f=!0
x.r=e
x.y=null},
aAL(){var x,w=this.y
if(w==null){x=this.agk()
this.y=x
return x}return y.A.a(w.cloneNode(!0))},
agk(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=null,b1="absolute",b2=document,b3=b2.createElement("flt-paragraph"),b4=y.A
b4.a(b3)
x=b3.style
x.position=b1
x.whiteSpace="pre"
w=this.gfp().z
for(v=b0,u=0;u<w.length;++u){t=w[u]
s=t.f
r=new B.bD("")
for(q=""+"underline ",p=0;p<s.length;p=o){o=p+1
n=s[p]
if(n instanceof A.hX){m=b2.createElement("flt-span")
b4.a(m)
l=n.w.a
x=m.style
k=l.cy
j=k==null
i=j?b0:k.gb8(k)
if(i==null)i=l.a
if((j?b0:k.gep(k))===D.ax){x.color="transparent"
h=j?b0:k.gkw()
if(h!=null&&h>0)g=h
else{k=$.dm().w
if(k==null){f=window.devicePixelRatio
k=f===0?1:f}g=1/k}k=B.d4(i)
j=C.h.aq(x,"text-stroke")
x.setProperty(j,B.e(g)+"px "+B.e(k),"")}else if(i!=null){k=B.d4(i)
x.color=k==null?"":k}k=l.cx
e=k==null?b0:k.gb8(k)
if(e!=null){k=B.d4(e)
x.backgroundColor=k==null?"":k}d=l.at
if(d!=null){k=C.e.ek(d)
x.fontSize=""+k+"px"}k=l.f
if(k!=null){k=A.aQE(k)
x.fontWeight=k==null?"":k}k=B.ayT(l.y)
x.fontFamily=k==null?"":k
k=l.ax
if(k!=null)x.letterSpacing=B.e(k)+"px"
k=l.ay
if(k!=null)x.wordSpacing=B.e(k)+"px"
k=l.b
j=k!=null
a0=j&&!0
a1=l.db
if(a1!=null){a2=A.b21(a1)
a3=C.h.aq(x,"text-shadow")
x.setProperty(a3,a2,"")}if(a0)if(j){j=l.d
k=k.a
a3=(k|1)===k?q:""
if((k|2)===k)a3+="overline "
k=(k|4)===k?a3+"line-through ":a3
if(j!=null)k+=B.e(A.b0Q(j))
a4=k.length===0?b0:k.charCodeAt(0)==0?k:k
if(a4!=null){k=$.cO()
if(k===C.aa){k=m.style
j=C.h.aq(k,"-webkit-text-decoration")
k.setProperty(j,a4,"")}else x.textDecoration=a4
a5=l.c
if(a5!=null){k=B.d4(a5)
k.toString
j=C.h.aq(x,"text-decoration-color")
x.setProperty(j,k,"")}}}a6=l.Q
if(a6!=null&&!0){a2=A.b19(a6)
l=C.h.aq(x,"font-feature-settings")
x.setProperty(l,a2,"")}l=n.a.a
k=n.b
j=n.NB(t,l,k.a,!0)
a3=j.a
a7=j.b
a8=m.style
a8.position=b1
a8.top=B.e(a7)+"px"
a8.left=B.e(a3)+"px"
a8.width=B.e(j.c-a3)+"px"
a8.lineHeight=B.e(j.d-a7)+"px"
l=C.c.a3(n.r.a.c,l,k.b)
m.appendChild(b2.createTextNode(l))
b3.appendChild(m)
r.a+=l
v=m}else{if(!(n instanceof A.rm))throw B.c(B.ch("Unknown box type: "+B.I(n).j(0)))
v=b0}}a9=t.b
if(a9!=null){q=v==null?b3:v
q.appendChild(b2.createTextNode(a9))}}return b3},
yu(){return this.gfp().yu()},
q0(d,e,f,g){return this.gfp().a8u(d,e,f,g)},
G1(d,e,f){return this.q0(d,e,f,D.dc)},
iS(d){return this.gfp().iS(d)},
i4(d,e){var x=this.c,w=e.a
return new B.di(A.aOs(D.ard,x,w+1),A.aOs(D.arc,x,w))},
PN(d){var x,w,v,u=d.a,t=this.gfp().z
for(x=t.length-1,w=0;w<x;++w){v=t[w]
if(u>=v.c&&u<v.d)break}v=t[w]
return new B.di(v.c,v.d)},
vu(){return this.gfp().z}}
A.qx.prototype={$iai0:1,
gbw(d){return this.c}}
A.wt.prototype={$iai0:1,
gbw(d){return this.r}}
A.xD.prototype={
aAs(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.a
if(f==null){x=g.gHT(g)
w=g.gIa()
v=g.gIb()
u=g.gIc()
t=g.gId()
s=g.gIC(g)
r=g.gIA(g)
q=g.gJT()
p=g.gIw(g)
o=g.gIx()
n=g.gIy()
m=g.gIB()
l=g.gIz(g)
k=g.gJ4(g)
j=g.gKo(g)
i=g.gHk(g)
h=g.gJ6()
j=A.aKA(g.gHD(g),x,w,v,u,t,p,o,n,l,r,m,s,g.gzK(),i,k,h,g.gJL(),q,j)
g.a=j
return j}return f}}
A.Ly.prototype={
gHT(d){var x=this.c.a
if(x==null)if(this.gzK()==null){x=this.b
x=x.gHT(x)}else x=null
return x},
gIa(){var x=this.c.b
return x==null?this.b.gIa():x},
gIb(){var x=this.c.c
return x==null?this.b.gIb():x},
gIc(){var x=this.c.d
return x==null?this.b.gIc():x},
gId(){var x=this.c.e
return x==null?this.b.gId():x},
gIC(d){var x=this.c.f
if(x==null){x=this.b
x=x.gIC(x)}return x},
gIA(d){var x=this.b
x=x.gIA(x)
return x},
gJT(){var x=this.c.w
return x==null?this.b.gJT():x},
gIx(){var x=this.c.z
return x==null?this.b.gIx():x},
gIy(){var x=this.c.Q
return x==null?this.b.gIy():x},
gIB(){var x=this.b.gIB()
return x},
gIz(d){var x=this.c.at
if(x==null){x=this.b
x=x.gIz(x)}return x},
gJ4(d){var x=this.c.ax
if(x==null){x=this.b
x=x.gJ4(x)}return x},
gKo(d){var x=this.c.ay
if(x==null){x=this.b
x=x.gKo(x)}return x},
gHk(d){var x=this.c.ch
if(x==null){x=this.b
x=x.gHk(x)}return x},
gJ6(){var x=this.c.CW
return x==null?this.b.gJ6():x},
gHD(d){var x=this.c.cx
if(x==null){x=this.b
x=x.gHD(x)}return x},
gzK(){var x=this.c.cy
return x==null?this.b.gzK():x},
gJL(){var x=this.c.db
return x==null?this.b.gJL():x},
gIw(d){var x=this.c
if(x.x)x=x.y
else{x=this.b
x=x.gIw(x)}return x}}
A.W4.prototype={
gIa(){return null},
gIb(){return null},
gIc(){return null},
gId(){return null},
gIC(d){return this.b.c},
gIA(d){return this.b.d},
gJT(){return null},
gIw(d){var x=this.b.f
return x==null?"sans-serif":x},
gIx(){return null},
gIy(){return null},
gIB(){return null},
gIz(d){var x=this.b.r
return x==null?14:x},
gJ4(d){return null},
gKo(d){return null},
gHk(d){return this.b.w},
gJ6(){return this.b.Q},
gHD(d){return null},
gzK(){return null},
gJL(){return null},
gHT(){return D.NI}}
A.a7S.prototype={
gVf(){var x=this.d,w=x.length
return w===0?this.e:x[w-1]},
ga4G(){return this.f},
ga4H(){return this.r},
AU(d,e,f,g,h,i,j){var x,w,v=this;++v.f
v.r.push(j)
x=v.a.a.length
w=i==null?f:i
v.c.push(new A.wt(x,x,e*j,f*j,g,w*j))},
a_U(d,e,f,g,h){return this.AU(d,e,f,g,null,null,h)},
mx(d,e){this.d.push(new A.Ly(this.gVf(),y.lf.a(e)))},
eO(d){var x=this.d
if(x.length!==0)x.pop()},
nf(d,e){var x,w=this,v=w.gVf().aAs(),u=w.a,t=u.a,s=t+e
u.a=s
u=w.w
if(u){x=v.b
if(x!=null){u=x.a
u=D.i.a!==u}else u=!1
if(u){w.w=!1
u=!1}else u=!0}if(u)if(v.Q!=null&&!0){w.w=!1
u=!1}else u=!0
u
w.c.push(new A.qx(v,t.length,s.length))},
bQ(d){var x=this,w=x.a.a
return new A.Lq(x.c,x.b,w.charCodeAt(0)==0?w:w,x.w)}}
A.apD.prototype={
xF(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=a0.a,a2=a1.a,a3=a2.length,a4=a0.c=a5.a
a0.d=0
a0.e=null
a0.r=a0.f=0
a0.y=!1
x=a0.z
C.d.sm(x,0)
if(a3===0)return
w=new A.aok(a1,a0.b)
v=A.aCB(a1,w,0,0,a4,D.pi)
for(u=a1.b,t=u.e,s=u.z,r=s!=null,q=t==null,p=0;!0;){if(p===a3){if(v.a.length!==0||v.x.d!==D.dp){v.avn()
x.push(v.bQ(0))}break}o=a2[p]
if(o instanceof A.wt){if(v.z+o.a<=a4)v.Kz(0,o)
else{if(v.a.length!==0){x.push(v.bQ(0))
v=v.xi()}v.Kz(0,o)}++p}else if(o instanceof A.qx){w.sr7(o)
n=v.a29()
m=n.a
l=v.a8s(m)
if(v.y+l<=a4){v.ma(n)
if(m.d===D.f2){x.push(v.bQ(0))
v=v.xi()}}else if((r&&q||x.length+1===t)&&r){v.a2h(n,!0,s)
x.push(v.a0i(0,s))
break}else if(!v.at){v.avS(n,!1)
x.push(v.bQ(0))
v=v.xi()}else{v.aAx()
k=C.d.gJ(v.a).a
for(;o!==k;){--p
o=a2[p]}x.push(v.bQ(0))
v=v.xi()}if(v.x.a>=o.gbw(o)){v.Mh();++p}}else throw B.c(B.ch("Unknown span type: "+B.I(o).j(0)))
if(x.length===t)break}for(t=x.length,j=0;j<t;++j){i=x[j]
a0.d=a0.d+i.as
if(a0.w===-1){s=i.ch
a0.w=s
a0.x=s*1.1662499904632568}s=a0.e
h=s==null?null:s.at
if(h==null)h=0
if(h<i.at)a0.e=i}if(t!==0){g=C.d.gJ(x)
f=isFinite(a0.c)&&u.a===C.mu
for(u=x.length,j=0;j<x.length;x.length===u||(0,B.F)(x),++j){i=x[j]
a0.aop(i,f&&!i.k(0,g))}}v=A.aCB(a1,w,0,0,a4,D.pi)
for(p=0;p<a3;){o=a2[p]
if(o instanceof A.wt){v.Kz(0,o);++p
e=!1}else if(o instanceof A.qx){w.sr7(o)
n=v.a29()
v.ma(n)
e=n.a.d===D.f2&&!0
if(v.x.a>=o.c)++p}else e=!1
d=C.d.gJ(v.a).d
if(a0.f<d)a0.f=d
a1=a0.r
a4=v.z
if(a1<a4)a0.r=a4
if(e)v=v.xi()}},
aop(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=d.f,l=e?this.afv(d):0
for(x=this.a.b.b,w=d.at,v=0,u=0;t=m.length,v<t;){s=m[v]
r=x==null
q=r?C.C:x
if(s.f===q){B.cq(s.c,"startOffset")
s.c=u
B.cq(s.d,"lineWidth")
s.d=w
if(s instanceof A.hX&&s.y&&!s.z)s.Q+=l
u+=s.gby(s);++v
continue}p=v+1
o=v
while(!0){if(p<t){q=m[p]
n=r?C.C:x
n=q.f!==n
q=n}else q=!1
if(!q)break
s=m[p]
o=s instanceof A.hX&&s.y?o:p;++p}p=o+1
u+=this.aoq(d,v,o,l,u)
v=p}},
aoq(d,e,f,g,h){var x,w,v,u,t=d.f
for(x=d.at,w=f,v=0;w>=e;--w){u=t[w]
B.cq(u.c,"startOffset")
u.c=h+v
B.cq(u.d,"lineWidth")
u.d=x
if(u instanceof A.hX&&u.y&&!u.z)u.Q+=g
v+=u.gby(u)}return v},
afv(d){var x=this.c,w=d.r-d.w
if(w>0)return(x-d.at)/w
return 0},
yu(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="startOffset",e="lineWidth",d=B.a([],y.G)
for(x=this.z,w=x.length,v=0;v<x.length;x.length===w||(0,B.F)(x),++v){u=x[v]
for(t=u.f,s=t.length,r=u.ch,q=r-u.y,p=u.ay,o=u.as,n=q+o,m=0;m<t.length;t.length===s||(0,B.F)(t),++m){l=t[m]
if(l instanceof A.rm){k=l.e
j=k===C.C
i=j?B.b(l.c,f):B.b(l.d,e)-(B.b(l.c,f)+l.gby(l))
j=j?B.b(l.c,f)+l.gby(l):B.b(l.d,e)-B.b(l.c,f)
h=l.r
switch(h.c.a){case 3:g=q
break
case 5:g=q+(o-h.b)/2
break
case 4:g=n-h.b
break
case 1:g=r-h.b
break
case 2:g=r
break
case 0:g=r-h.d
break
default:g=null}d.push(new A.iG(p+i,g,p+j,g+h.b,k))}}}return d},
a8u(d,e,f,g){var x,w,v,u,t,s,r,q,p,o
if(d>=e||d<0||e<0)return B.a([],y.G)
x=this.a.c.length
if(d>x||e>x)return B.a([],y.G)
w=B.a([],y.G)
for(v=this.z,u=v.length,t=0;t<v.length;v.length===u||(0,B.F)(v),++t){s=v[t]
if(d<s.d&&s.c<e)for(r=s.f,q=r.length,p=0;p<r.length;r.length===q||(0,B.F)(r),++p){o=r[p]
if(o instanceof A.hX&&d<o.b.a&&o.a.a<e)w.push(o.NB(s,d,e,!1))}}return w},
iS(d){var x,w,v,u,t,s="startOffset",r="lineWidth",q=this.ai8(d.b),p=d.a,o=q.ay
if(p<=o)return new A.bM(q.c,D.p)
if(p>=o+q.ax)return new A.bM(q.e,D.aU)
x=p-o
for(p=q.f,o=p.length,w=0;w<p.length;p.length===o||(0,B.F)(p),++w){v=p[w]
u=v.e===C.C
if((u?B.b(v.c,s):B.b(v.d,r)-(B.b(v.c,s)+v.gby(v)))<=x){t=x<=(u?B.b(v.c,s)+v.gby(v):B.b(v.d,r)-B.b(v.c,s))
u=t}else u=!1
if(u)return v.PX(x)}return new A.bM(q.c,D.p)},
ai8(d){var x,w,v,u,t
for(x=this.z,w=x.length,v=0;v<w;++v){u=x[v]
t=u.as
if(d<=t)return u
d-=t}return C.d.gJ(x)}}
A.wE.prototype={
glg(d){var x=this,w="startOffset"
return x.e===C.C?B.b(x.c,w):B.b(x.d,"lineWidth")-(B.b(x.c,w)+x.gby(x))},
gy_(d){var x=this,w="startOffset"
return x.e===C.C?B.b(x.c,w)+x.gby(x):B.b(x.d,"lineWidth")-B.b(x.c,w)}}
A.rm.prototype={
gby(d){return this.r.a},
PX(d){var x=this,w=d-x.glg(x)<x.gy_(x)-d?D.aU:D.p
return new A.bM(x.a.a,w)}}
A.hX.prototype={
gby(d){return this.Q},
NB(d,e,f,g){var x,w,v,u,t,s=this,r=d.ch-s.at,q=s.a.a
if(e<=q)x=0
else{w=s.r
w.sr7(s.w)
x=w.n5(q,e)}q=s.b.b
if(f>=q)v=0
else{w=s.r
w.sr7(s.w)
v=w.n5(f,q)}q=s.x
if(q===C.C){u=s.glg(s)+x
t=s.gy_(s)-v}else{u=s.glg(s)+v
t=s.gy_(s)-x}if(g&&s.z)if(s.e===C.C)t=u
else u=t
w=d.ay
return new A.iG(w+u,r,w+t,r+s.as,q)},
PX(d){var x,w,v,u,t=this,s=t.r
s.sr7(t.w)
d=t.x!==C.C?t.gy_(t)-d:d-t.glg(t)
x=t.a.a
w=t.b.b
v=s.Nc(x,w,!0,d)
if(v===w)return new A.bM(v,D.aU)
u=v+1
if(d-s.n5(x,v)<s.n5(x,u)-d)return new A.bM(v,D.p)
else return new A.bM(u,D.aU)}}
A.CF.prototype={}
A.afY.prototype={
sbw(d,e){if(e.d!==D.cN)this.at=!0
this.x=e},
gasu(){var x=this.c-this.y,w=this.d.b
switch(w.a.a){case 2:return x/2
case 1:return x
case 4:w=w.b
return(w==null?C.C:w)===C.ap?x:0
case 5:w=w.b
return(w==null?C.C:w)===C.ap?0:x
default:return 0}},
a8s(d){var x=this,w=x.x.a,v=d.c
if(w===v)return 0
return x.z-x.y+x.e.n5(w,v)},
galZ(){var x=this.b
if(x.length===0)return!1
return C.d.gJ(x) instanceof A.rm},
gzu(){var x=this.ay
if(x===$){x=this.d.b.b
x=this.ay=x==null?C.C:x}return x},
gVe(){var x=this.ch
if(x===$){x=this.d.b.b
x=this.ch=x==null?C.C:x}return x},
ma(d){var x=this,w=x.Q,v=x.e,u=v.d
x.Q=Math.max(w,u.gnj(u))
u=x.as
w=v.d
w=w.gbW(w)
v=v.d
x.as=Math.max(u,w-v.gnj(v))
w=d.c
if(!w){v=d.b
v=x.gzu()!==v||x.gVe()!==v}else v=!0
if(v)x.Mh()
v=d.b
u=v==null
x.ay=u?x.gzu():v
x.ch=u?C.C:v
x.Ht(x.I5(d.a))
if(w)x.a12(!0)},
avn(){var x,w,v,u,t=this
if(t.x.d===D.dp)return
x=t.d.c.length
w=new A.eE(x,x,x,D.dp)
x=t.e
if(x.e!=null){v=t.Q
u=x.d
t.Q=Math.max(v,u.gnj(u))
u=t.as
v=x.d
v=v.gbW(v)
x=x.d
t.as=Math.max(u,v-x.gnj(x))
t.Ht(t.I5(w))}else t.sbw(0,w)},
Kz(d,e){var x,w,v,u,t,s=this
switch(e.c.a){case 3:x=s.Q
w=e.b-x
break
case 4:w=s.as
x=e.b-w
break
case 5:v=s.Q
u=s.as
t=e.b/2-(v+u)/2
x=v+t
w=u+t
break
case 1:x=e.b
w=0
break
case 2:w=e.b
x=0
break
case 0:x=e.d
w=e.b-x
break
default:x=null
w=null}s.Q=Math.max(s.Q,B.dz(x))
s.as=Math.max(s.as,B.dz(w))
v=s.x
u=e.a
s.Ht(new A.CF(e,v,v,u,u))
u=s.gI6()
v=s.d.b.b
if(v==null)v=C.C
s.b.push(new A.rm(e,u,u,v,s.gzu()))
s.CW=s.z
s.at=!0},
I5(d){var x,w=this.x,v=this.e,u=v.e
u.toString
x=w.a
return new A.CF(u,w,d,v.n5(x,d.c),v.n5(x,d.b))},
Ht(d){var x,w,v=this
v.a.push(d)
x=d.d
if(x!==0){w=v.y
v.y=w+(v.z-w+x)}v.z=v.z+d.e
v.sbw(0,d.c)},
Y7(){var x,w,v,u,t=this,s=t.a,r=s.pop()
if(s.length===0){t.z=t.y=0
t.sbw(0,t.f)}else{t.z=t.z-r.e
t.sbw(0,C.d.gJ(s).c)
x=r.d
if(x!==0){t.y-=x
w=s.length-1
v=0
while(!0){x=w>=0
if(!(x&&s[w].d===0))break
v+=s[w].e;--w}if(x){s=s[w]
v+=s.e-s.d}t.y-=v}}if(t.gI6().a>r.b.a){u=t.b.pop()
t.CW=t.CW-u.gby(u)
if(u instanceof A.hX&&u.y)--t.ax}return r},
a2h(d,e,f){var x,w,v,u,t,s=this
if(f==null){x=s.z
w=d.a.c
v=s.e.Nc(s.x.a,w,e,s.c-x)
if(v===w)s.ma(d)
else s.ma(new A.o1(new A.eE(v,v,v,D.cN),d.b,d.c))
return}x=s.e
u=s.c-A.aEY(x.b,f,0,f.length,null)
t=s.I5(d.a)
w=s.a
while(!0){if(!(w.length!==0&&s.z>u))break
t=s.Y7()}x.sr7(y.ln.a(t.a))
v=x.Nc(t.b.a,t.c.a,e,u-s.z)
x=s.b
while(!0){if(!(x.length!==0&&C.d.gJ(x).b.a>v))break
x.pop()}s.CW=s.z
s.ma(new A.o1(new A.eE(v,v,v,D.cN),d.b,d.c))},
avS(d,e){return this.a2h(d,e,null)},
aAx(){for(;this.x.d===D.cN;)this.Y7()},
gI6(){var x=this.b
if(x.length===0)return this.f
return C.d.gJ(x).b},
a12(d){var x,w,v,u,t,s,r,q,p,o=this,n=o.gI6(),m=o.x
if(n.a===m.a)return
x=o.e
w=o.z
v=o.CW
u=o.d.b.b
if(u==null)u=C.C
t=o.gzu()
s=o.gVe()
r=x.e
r.toString
q=x.d
q=q.gbW(q)
p=x.d
o.b.push(new A.hX(x,r,s,d,w-v,q,p.gnj(p),n,m,u,t))
if(d)++o.ax
o.CW=o.z},
Mh(){return this.a12(!1)},
a0i(d,e){var x,w,v,u,t,s,r,q,p,o,n=this
n.Mh()
x=e==null?0:A.aEY(n.e.b,e,0,e.length,null)
w=n.f.a
v=n.x
u=Math.max(w,v.b)
if(v.d!==D.dp&&n.galZ())t=!1
else{v=n.x.d
t=v===D.f2||v===D.dp}n.aoy()
v=n.x
s=n.y
r=n.z
q=n.gasu()
p=n.Q
o=n.as
return new A.v5(e,w,v.a,u,n.b,n.ax,n.cx,t,p,o,p+o,s+x,r+x,q,n.w+p,n.r)},
bQ(d){return this.a0i(d,null)},
aoy(){var x,w,v,u
this.cx=0
for(x=this.b,w=x.length-1,v=0;w>=0;--w){u=x[w]
if(!(u instanceof A.hX&&u.y))break
u.z=!0;++v
this.cx=v}},
a29(){var x,w=this,v=w.cy,u=w.d.c
if(v==null||w.x.a>=v.a){x=w.e.e.c
v=w.cy=A.b4x(u,w.x.a,x)}return A.b3X(u,w.x,v)},
xi(){var x=this,w=x.x
return A.aCB(x.d,x.e,x.w+(x.Q+x.as),x.r+1,x.c,w)}}
A.aok.prototype={
sr7(d){var x,w,v,u,t,s,r=this
if(d===r.e)return
r.e=d
x=d.a
w=x.dy
if(w===$){v=x.ga1G()
u=x.at
if(u==null)u=14
B.c4(x.dy,"heightStyle")
w=x.dy=new A.FJ(v,u,x.ch,null,null)}t=$.aNz.h(0,w)
if(t==null){v=$.aSt()
u=document.createElement("flt-paragraph")
t=new A.XW(w,v,new A.ap9(u))
$.aNz.l(0,w,t)}r.d=t
s=x.ga17()
if(r.c!==s){r.c=s
r.b.font=s}},
Nc(d,e,f,g){var x,w,v,u
this.e.toString
if(g<=0)return f?d:d+1
x=e
w=d
do{v=C.b.bC(w+x,2)
u=this.n5(d,v)
if(u<g)w=v
else{w=u>g?w:v
x=v}}while(x-w>1)
return w===d&&!f?w+1:w},
n5(d,e){return A.aEY(this.b,this.a.c,d,e,this.e.a.ax)}}
A.r4.prototype={
j(d){return"LineBreakType."+this.b}}
A.eE.prototype={
gD(d){var x=this
return B.cV(x.a,x.b,x.c,x.d,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f)},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.Y(e)!==B.I(x))return!1
return e instanceof A.eE&&e.a===x.a&&e.b===x.b&&e.c===x.c&&e.d===x.d},
j(d){var x=this.cW(0)
return x}}
A.W7.prototype={
p(d){J.cW(this.a)}}
A.apE.prototype={
bm(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this.a.gfp().z,l=m.length
if(l===0)return
for(x=y.oI,w=0;w<m.length;m.length===l||(0,B.F)(m),++w){v=m[w]
u=v.f
if(u.length===0)continue
t=C.d.gJ(u)
for(s=u.length,r=0;r<u.length;u.length===s||(0,B.F)(u),++r){q=u[r]
if(!(q===t&&q instanceof A.hX&&q.y))if(q instanceof A.hX){p=x.a(q.w.a.cx)
if(p!=null){o=q.NB(v,q.a.a,q.b.a,!0)
n=new B.C(o.a,o.b,o.c,o.d).dk(e)
p.b=!0
d.dg(0,n,p.a)}}this.anz(d,e,v,q)}}},
anz(d,e,f,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a0 instanceof A.hX){x=a0.w.a
w=x.cy
v=w==null
if(!v){y.k.a(w)
u=w}else{t=$.bd()?A.bC():new A.br(new A.bx())
s=x.a
s.toString
t.sb8(0,s)
y.k.a(t)
u=t}t=x.ga17()
if(t!==d.e){s=d.d
s.gcw(s).font=t
d.e=t}t=u.b=!0
s=u.a
r=d.d
r.ger().qc(s,g)
s=e.a+f.ay
q=s+a0.glg(a0)
p=e.b+f.ch
if(!a0.y){o=C.c.a3(this.a.c,a0.a.a,a0.b.b)
n=x.ax
if(n!=null?n===0:t){t=v?g:w.gep(w)
d.MP(o,q,p,x.db,t)}else{m=o.length
for(x=x.db,l=q,k=0;k<m;++k){j=o[k]
t=C.e.aAz(l)
d.MP(j,t,p,x,v?g:w.gep(w))
i=r.d
if(i==null){r.I3()
t=r.d
t.toString
i=t}t=i.measureText(j).width
t.toString
l+=n+t}}}h=f.b
if(h!=null&&a0===C.d.gJ(f.f)){x=a0.gy_(a0)
v=v?g:w.gep(w)
d.auV(h,s+x,p,v)}r.ger().ty()}}}
A.v5.prototype={
gD(d){var x=this
return B.cV(null,x.c,x.d,x.x,x.y,x.z,1/0,x.as,x.at,x.ay,x.ch,x.CW,C.f,C.f,C.f,C.f,C.f,C.f)},
k(d,e){var x,w=this
if(e==null)return!1
if(w===e)return!0
if(J.Y(e)!==B.I(w))return!1
if(e instanceof A.v5)if(e.c===w.c)if(e.d===w.d)if(e.x===w.x)if(e.y===w.y)if(e.z===w.z)x=e.as===w.as&&e.at===w.at&&e.ay===w.ay&&e.ch===w.ch&&e.CW===w.CW
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
return x},
j(d){var x=this.cW(0)
return x},
$iag_:1,
gvM(d){return this.z},
gnl(d){return this.ch},
gx0(d){return this.CW}}
A.Bx.prototype={
k(d,e){var x,w=this
if(e==null)return!1
if(w===e)return!0
if(J.Y(e)!==B.I(w))return!1
if(e instanceof A.Bx)if(e.a===w.a)if(e.b==w.b)if(e.c==w.c)x=e.e==w.e&&e.f==w.f&&e.r==w.r&&e.w==w.w&&J.h(e.x,w.x)&&e.z==w.z&&J.h(e.Q,w.Q)
else x=!1
else x=!1
else x=!1
else x=!1
return x},
gD(d){var x=this
return B.cV(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,x.x,x.z,x.Q,C.f,C.f,C.f,C.f,C.f,C.f,C.f)},
j(d){var x=this.cW(0)
return x}}
A.Bz.prototype={
ga1G(){var x=this.y
if(x.length===0)return"sans-serif"
return x},
ga17(){var x,w,v,u=this,t=u.dx
if(t==null){t=u.f
x=u.at
w=u.ga1G()
v=""+"normal "
t=(t!=null?v+B.e(A.aQE(t)):v+"normal")+" "
t=x!=null?t+C.e.ek(x):t+"14"
w=t+"px "+B.e(B.ayT(w))
w=u.dx=w.charCodeAt(0)==0?w:w
t=w}return t},
k(d,e){var x,w=this
if(e==null)return!1
if(w===e)return!0
if(J.Y(e)!==B.I(w))return!1
if(e instanceof A.Bz)if(J.h(e.a,w.a))if(J.h(e.b,w.b))if(J.h(e.c,w.c))if(e.d==w.d)if(e.f==w.f)x=e.w==w.w&&e.y===w.y&&e.at==w.at&&e.ax==w.ax&&e.ay==w.ay&&e.ch==w.ch&&J.h(e.CW,w.CW)&&e.cx==w.cx&&e.cy==w.cy&&B.JY(e.db,w.db)&&B.JY(e.z,w.z)
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
return x},
gD(d){var x=this
return B.cV(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,x.y,x.z,x.at,x.ax,x.ay,x.ch,x.CW,x.cx,x.cy,x.db)},
j(d){var x=this.cW(0)
return x}}
A.ai_.prototype={}
A.FJ.prototype={
k(d,e){if(e==null)return!1
if(this===e)return!0
return e instanceof A.FJ&&e.gD(e)===this.gD(this)},
gD(d){var x,w=this,v=w.f
if(v===$){x=B.cV(w.a,w.b,w.c,A.a5t(w.d),A.a5t(w.e),C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f)
B.c4(w.f,"hashCode")
w.f=x
v=x}return v}}
A.ap9.prototype={}
A.XW.prototype={
galw(){var x,w,v,u,t,s,r,q=this,p=q.d
if(p===$){x=document.createElement("div")
w=x.style
w.visibility="hidden"
w.position="absolute"
w.top="0"
w.left="0"
w.display="flex"
C.h.b1(w,C.h.aq(w,"flex-direction"),"row","")
C.h.b1(w,C.h.aq(w,"align-items"),"baseline","")
w.margin="0"
w.border="0"
w.padding="0"
w=q.e
v=q.a
u=w.a
t=u.style
s=C.e.ek(v.b)
t.fontSize=""+s+"px"
s=B.ayT(v.a)
t.fontFamily=s==null?"":s
r=v.c
if(r!=null){v=C.e.j(r)
t.lineHeight=v}w.b=null
v=u.style
v.whiteSpace="pre"
w.b=null
u.textContent=" "
x.appendChild(u)
w.b=null
q.b.a.appendChild(x)
B.c4(q.d,"_host")
q.d=x
p=x}return p},
gnj(d){var x,w,v=this,u=v.f
if(u===$){u=v.c
if(u===$){x=document.createElement("div")
v.galw().appendChild(x)
B.c4(v.c,"_probe")
v.c=x
u=x}w=u.getBoundingClientRect().bottom
w.toString
B.c4(v.f,"alphabeticBaseline")
v.f=w
u=w}return u},
gbW(d){var x,w,v,u=this,t=u.r
if(t===$){x=u.e
w=x.b
x=(w==null?x.b=x.a.getBoundingClientRect():w).height
x.toString
w=$.cO()
if(w===C.dd&&!0)v=x+1
else v=x
B.c4(u.r,"height")
t=u.r=v}return t}}
A.o1.prototype={}
A.dx.prototype={
j(d){return"WordCharProperty."+this.b}}
A.a_O.prototype={}
A.aqL.prototype={
h(d,e){return this.a[e]},
l(d,e,f){this.a[e]=f},
gm(d){var x=this.a,w=x[0],v=x[1]
x=x[2]
return Math.sqrt(w*w+v*v+x*x)}}
A.a_k.prototype={}
A.a1s.prototype={
AZ(d){this.Rg(d)
this.eJ$=d.eJ$
d.eJ$=null},
jX(){this.H6()
this.eJ$=null}}
A.HX.prototype={
AZ(d){this.Rg(d)
this.eJ$=d.eJ$
d.eJ$=null},
jX(){this.H6()
this.eJ$=null}}
A.GL.prototype={
h(d,e){if(!this.w.$1(e))return null
return this.acp(0,e)},
l(d,e,f){this.acr(e,f)},
am(d,e){if(!this.w.$1(e))return!1
return this.aco(e)},
P(d,e){if(!this.w.$1(e))return null
return this.acq(0,e)},
iv(d){return this.r.$1(d)&1073741823},
ib(d,e){var x,w,v
if(d==null)return-1
x=d.length
for(w=this.f,v=0;v<x;v+=2)if(w.$2(d[v],e))return v
return-1}}
A.pv.prototype={
uN(){return new A.pv(B.q(this).i("pv<1>"))},
ga9(d){return new A.lK(this,this.zp(),B.q(this).i("lK<1>"))},
gm(d){return this.a},
ga_(d){return this.a===0},
gbF(d){return this.a!==0},
v(d,e){var x,w
if(typeof e=="string"&&e!=="__proto__"){x=this.b
return x==null?!1:x[e]!=null}else if(typeof e=="number"&&(e&1073741823)===e){w=this.c
return w==null?!1:w[e]!=null}else return this.I_(e)},
I_(d){var x=this.d
if(x==null)return!1
return this.ib(x[this.iv(d)],d)>=0},
H(d,e){var x,w,v=this
if(typeof e=="string"&&e!=="__proto__"){x=v.b
return v.uu(x==null?v.b=A.aDS():x,e)}else if(typeof e=="number"&&(e&1073741823)===e){w=v.c
return v.uu(w==null?v.c=A.aDS():w,e)}else return v.hF(0,e)},
hF(d,e){var x,w,v=this,u=v.d
if(u==null)u=v.d=A.aDS()
x=v.iv(e)
w=u[x]
if(w==null)u[x]=[e]
else{if(v.ib(w,e)>=0)return!1
w.push(e)}++v.a
v.e=null
return!0},
Z(d,e){var x
for(x=J.aC(e);x.t();)this.H(0,x.gO(x))},
P(d,e){var x=this
if(typeof e=="string"&&e!=="__proto__")return x.mZ(x.b,e)
else if(typeof e=="number"&&(e&1073741823)===e)return x.mZ(x.c,e)
else return x.lL(0,e)},
lL(d,e){var x,w,v,u=this,t=u.d
if(t==null)return!1
x=u.iv(e)
w=t[x]
v=u.ib(w,e)
if(v<0)return!1;--u.a
u.e=null
w.splice(v,1)
if(0===w.length)delete t[x]
return!0},
aS(d){var x=this
if(x.a>0){x.b=x.c=x.d=x.e=null
x.a=0}},
zp(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.e
if(m!=null)return m
m=B.at(n.a,null,!1,y.lT)
x=n.b
if(x!=null){w=Object.getOwnPropertyNames(x)
v=w.length
for(u=0,t=0;t<v;++t){m[u]=w[t];++u}}else u=0
s=n.c
if(s!=null){w=Object.getOwnPropertyNames(s)
v=w.length
for(t=0;t<v;++t){m[u]=+w[t];++u}}r=n.d
if(r!=null){w=Object.getOwnPropertyNames(r)
v=w.length
for(t=0;t<v;++t){q=r[w[t]]
p=q.length
for(o=0;o<p;++o){m[u]=q[o];++u}}}return n.e=m},
uu(d,e){if(d[e]!=null)return!1
d[e]=0;++this.a
this.e=null
return!0},
mZ(d,e){if(d!=null&&d[e]!=null){delete d[e];--this.a
this.e=null
return!0}else return!1},
iv(d){return J.x(d)&1073741823},
ib(d,e){var x,w
if(d==null)return-1
x=d.length
for(w=0;w<x;++w)if(J.h(d[w],e))return w
return-1}}
A.lK.prototype={
gO(d){var x=this.d
return x==null?this.$ti.c.a(x):x},
t(){var x=this,w=x.b,v=x.c,u=x.a
if(w!==u.e)throw B.c(B.bT(u))
else if(v>=w.length){x.d=null
return!1}else{x.d=w[v]
x.c=v+1
return!0}}}
A.GR.prototype={
amj(d,e){var x=this
x.b=e
x.a=d
if(d!=null)d.b=x
if(e!=null)e.a=x},
arh(){var x,w=this,v=w.a
if(v!=null)v.b=w.b
x=w.b
if(x!=null)x.a=v
w.a=w.b=null}}
A.GQ.prototype={
Jt(d){var x,w,v=this
v.c=null
x=v.a
if(x!=null)x.b=v.b
w=v.b
if(w!=null)w.a=x
v.a=v.b=null
return v.d},
cn(d){var x=this,w=x.c
if(w!=null)--w.b
x.c=null
x.arh()
return x.d},
qo(){return this},
$iaC3:1,
gMQ(){return this.d}}
A.GS.prototype={
qo(){return null},
Jt(d){throw B.c(B.c2())},
gMQ(){throw B.c(B.c2())}}
A.Bm.prototype={
gm(d){return this.b},
qS(d){var x=this.a
new A.GQ(this,d,x.$ti.i("GQ<1>")).amj(x,x.b);++this.b},
gU(d){return this.a.b.gMQ()},
gJ(d){return this.a.a.gMQ()},
ga_(d){var x=this.a
return x.b===x},
ga9(d){return new A.a_p(this,this.a.b,this.$ti.i("a_p<1>"))},
j(d){return B.Cm(this,"{","}")},
$iZ:1}
A.a_p.prototype={
t(){var x=this,w=x.b,v=w==null?null:w.qo()
if(v==null){x.a=x.b=x.c=null
return!1}w=x.a
if(w!=v.c)throw B.c(B.bT(w))
x.c=v.d
x.b=v.b
return!0},
gO(d){var x=this.c
return x==null?this.$ti.c.a(x):x}}
A.bp.prototype={}
A.AG.prototype={
j(d){return"ClipOp."+this.b}}
A.DT.prototype={
j(d){return"PathFillType."+this.b}}
A.ct.prototype={
aD(d,e){return new A.ct(this.a-e.a,this.b-e.b)},
ac(d,e){return new A.ct(this.a+e.a,this.b+e.b)},
ab(d,e){return new A.ct(this.a*e,this.b*e)},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(B.I(x)!==J.Y(e))return!1
return e instanceof A.ct&&e.a===x.a&&e.b===x.b},
gD(d){return B.cV(this.a,this.b,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f)},
j(d){var x=this.a,w=this.b
return x===w?"Radius.circular("+C.e.aj(x,1)+")":"Radius.elliptical("+C.e.aj(x,1)+", "+C.e.aj(w,1)+")"}}
A.ld.prototype={
dk(d){var x=this,w=d.a,v=d.b
return new A.ld(x.a+w,x.b+v,x.c+w,x.d+v,x.e,x.f,x.r,x.w,x.x,x.y,x.z,x.Q,!1)},
eM(d){var x=this
return new A.ld(x.a-d,x.b-d,x.c+d,x.d+d,x.e+d,x.f+d,x.r+d,x.w+d,x.x+d,x.y+d,x.z+d,x.Q+d,!1)},
zS(d,e,f,g){var x=e+f
if(x>g&&x!==0)return Math.min(d,g/x)
return d},
tS(){var x=this,w=x.c,v=x.a,u=Math.abs(w-v),t=x.d,s=x.b,r=Math.abs(t-s),q=x.Q,p=x.f,o=x.e,n=x.r,m=x.w,l=x.y,k=x.x,j=x.z,i=x.zS(x.zS(x.zS(x.zS(1,q,p,r),o,n,u),m,l,r),k,j,u)
if(i<1)return new A.ld(v,s,w,t,o*i,p*i,n*i,m*i,k*i,l*i,j*i,q*i,!1)
return new A.ld(v,s,w,t,o,p,n,m,k,l,j,q,!1)},
v(d,e){var x,w,v,u,t,s,r=this,q=e.a,p=r.a
if(!(q<p))if(!(q>=r.c)){x=e.b
x=x<r.b||x>=r.d}else x=!0
else x=!0
if(x)return!1
w=r.tS()
v=w.e
if(q<p+v&&e.b<r.b+w.f){u=q-p-v
t=w.f
s=e.b-r.b-t}else{x=r.c
v=w.r
if(q>x-v&&e.b<r.b+w.w){u=q-x+v
t=w.w
s=e.b-r.b-t}else{v=w.x
if(q>x-v&&e.b>r.d-w.y){u=q-x+v
t=w.y
s=e.b-r.d+t}else{v=w.z
if(q<p+v&&e.b>r.d-w.Q){u=q-p-v
t=w.Q
s=e.b-r.d+t}else return!0}}}u/=v
s/=t
if(u*u+s*s>1)return!1
return!0},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(B.I(x)!==J.Y(e))return!1
return e instanceof A.ld&&e.a===x.a&&e.b===x.b&&e.c===x.c&&e.d===x.d&&e.e===x.e&&e.f===x.f&&e.r===x.r&&e.w===x.w&&e.z===x.z&&e.Q===x.Q&&e.x===x.x&&e.y===x.y},
gD(d){var x=this
return B.cV(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,x.z,x.Q,x.x,x.y,C.f,C.f,C.f,C.f,C.f,C.f)},
j(d){var x,w,v=this,u=C.e.aj(v.a,1)+", "+C.e.aj(v.b,1)+", "+C.e.aj(v.c,1)+", "+C.e.aj(v.d,1),t=v.e,s=v.f,r=v.r,q=v.w
if(new A.ct(t,s).k(0,new A.ct(r,q))){x=v.x
w=v.y
x=new A.ct(r,q).k(0,new A.ct(x,w))&&new A.ct(x,w).k(0,new A.ct(v.z,v.Q))}else x=!1
if(x){if(t===s)return"RRect.fromLTRBR("+u+", "+C.e.aj(t,1)+")"
return"RRect.fromLTRBXY("+u+", "+C.e.aj(t,1)+", "+C.e.aj(s,1)+")"}return"RRect.fromLTRBAndCorners("+u+", topLeft: "+new A.ct(t,s).j(0)+", topRight: "+new A.ct(r,q).j(0)+", bottomRight: "+new A.ct(v.x,v.y).j(0)+", bottomLeft: "+new A.ct(v.z,v.Q).j(0)+")"}}
A.Xw.prototype={
j(d){return"StrokeCap."+this.b}}
A.Xx.prototype={
j(d){return"StrokeJoin."+this.b}}
A.DQ.prototype={
j(d){return"PaintingStyle."+this.b}}
A.q2.prototype={
j(d){return"BlendMode."+this.b}}
A.qi.prototype={
j(d){return"Clip."+this.b}}
A.C9.prototype={
j(d){return"ImageByteFormat."+this.b}}
A.UX.prototype={
j(d){return"PlaceholderAlignment."+this.b}}
A.iW.prototype={
j(d){var x=D.ac2.h(0,this.a)
x.toString
return x}}
A.xL.prototype={
j(d){return"TextBaseline."+this.b}}
A.FH.prototype={
k(d,e){if(e==null)return!1
return e instanceof A.FH&&e.a===this.a},
gD(d){return C.b.gD(this.a)},
j(d){var x,w=this.a
if(w===0)return"TextDecoration.none"
x=B.a([],y.s)
if((w&1)!==0)x.push("underline")
if((w&2)!==0)x.push("overline")
if((w&4)!==0)x.push("lineThrough")
if(x.length===1)return"TextDecoration."+x[0]
return"TextDecoration.combine(["+C.d.bt(x,", ")+"])"}}
A.XR.prototype={
j(d){return"TextDecorationStyle."+this.b}}
A.FL.prototype={
j(d){return"TextLeadingDistribution."+this.b}}
A.iG.prototype={
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.Y(e)!==B.I(x))return!1
return e instanceof A.iG&&e.a===x.a&&e.b===x.b&&e.c===x.c&&e.d===x.d&&e.e===x.e},
gD(d){var x=this
return B.cV(x.a,x.b,x.c,x.d,x.e,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f)},
j(d){var x=this
return"TextBox.fromLTRBD("+C.e.aj(x.a,1)+", "+C.e.aj(x.b,1)+", "+C.e.aj(x.c,1)+", "+C.e.aj(x.d,1)+", "+x.e.j(0)+")"}}
A.xJ.prototype={
j(d){return"TextAffinity."+this.b}}
A.bM.prototype={
k(d,e){if(e==null)return!1
if(J.Y(e)!==B.I(this))return!1
return e instanceof A.bM&&e.a===this.a&&e.b===this.b},
gD(d){return B.cV(this.a,this.b,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f,C.f)},
j(d){return B.I(this).j(0)+"(offset: "+this.a+", affinity: "+this.b.j(0)+")"}}
A.oG.prototype={
k(d,e){if(e==null)return!1
if(J.Y(e)!==B.I(this))return!1
return e instanceof A.oG&&e.a===this.a},
gD(d){return C.e.gD(this.a)},
j(d){return B.I(this).j(0)+"(width: "+B.e(this.a)+")"}}
A.Aj.prototype={
j(d){return"BoxHeightStyle."+this.b}}
A.Lg.prototype={
j(d){return"BoxWidthStyle."+this.b}}
A.DS.prototype={
aC(d,e){return this.pV(e)},
pV(d){throw B.c(B.ch(null))},
j(d){return"ParametricCurve"}}
A.hh.prototype={
aC(d,e){if(e===0||e===1)return e
return this.abf(0,e)}}
A.hF.prototype={
W_(d,e,f){var x=1-f
return 3*d*x*x*f+3*e*x*f*f+f*f*f},
pV(d){var x,w,v,u,t,s,r=this
for(x=r.a,w=r.c,v=0,u=1;!0;){t=(v+u)/2
s=r.W_(x,w,t)
if(Math.abs(d-s)<0.001)return r.W_(r.b,r.d,t)
if(s<d)v=t
else u=t}},
j(d){var x=this
return"Cubic("+C.e.aj(x.a,2)+", "+C.e.aj(x.b,2)+", "+C.e.aj(x.c,2)+", "+C.e.aj(x.d,2)+")"}}
A.vh.prototype={
pV(d){return 1-this.a.aC(0,1-d)},
j(d){return"FlippedCurve("+this.a.j(0)+")"}}
A.aH.prototype={}
A.Bc.prototype={
dL(){return"<optimized out>#"+B.ca(this)}}
A.a_e.prototype={}
A.ft.prototype={}
A.CR.prototype={}
A.t8.prototype={
j(d){return"[#"+B.ca(this)+"]"}}
A.T.prototype={
xU(d){var x=d.a,w=this.a
if(x<=w){d.a=w+1
d.lp()}},
lp(){},
gd9(){return this.b},
aX(d){this.b=d},
aH(d){this.b=null},
gan(d){return this.c},
jd(d){var x
d.c=this
x=this.b
if(x!=null)d.aX(x)
this.xU(d)},
m8(d){d.c=null
if(this.b!=null)d.aH(0)}}
A.fb.prototype={
j(d){return"TargetPlatform."+this.b}}
A.BY.prototype={
j(d){return"GestureDisposition."+this.b}}
A.fs.prototype={
j(d){return"<optimized out>#"+B.ca(this)+"("+this.a.j(0)+")"}}
A.Aa.prototype={
j(d){return"Axis."+this.b}}
A.a8r.prototype={
US(d,e,f,g){var x,w=this
w.gdZ(w).ci(0)
switch(e.a){case 0:break
case 1:d.$1(!1)
break
case 2:d.$1(!0)
break
case 3:d.$1(!0)
x=w.gdZ(w)
x.hz(0,f,$.bd()?A.bC():new A.br(new A.bx()))
break}g.$0()
if(e===D.h9)w.gdZ(w).c4(0)
w.gdZ(w).c4(0)},
ats(d,e,f,g){this.US(new A.a8s(this,d),e,f,g)},
att(d,e,f,g){this.US(new A.a8t(this,d),e,f,g)}}
A.cE.prototype={
gkb(){var x=this
return x.gfK(x)+x.gfM(x)+x.gie(x)+x.gia()},
asz(d){var x=this
switch(d.a){case 0:return x.gkb()
case 1:return x.gdM(x)+x.gdY(x)}},
H(d,e){var x=this
return new A.px(x.gfK(x)+e.gfK(e),x.gfM(x)+e.gfM(e),x.gie(x)+e.gie(e),x.gia()+e.gia(),x.gdM(x)+e.gdM(e),x.gdY(x)+e.gdY(e))},
u(d,e,f){var x=this
return new A.px(C.e.u(x.gfK(x),e.a,f.a),C.e.u(x.gfM(x),e.c,f.b),C.e.u(x.gie(x),0,f.c),C.e.u(x.gia(),0,f.d),C.e.u(x.gdM(x),e.b,f.e),C.e.u(x.gdY(x),e.d,f.f))},
j(d){var x=this
if(x.gie(x)===0&&x.gia()===0){if(x.gfK(x)===0&&x.gfM(x)===0&&x.gdM(x)===0&&x.gdY(x)===0)return"EdgeInsets.zero"
if(x.gfK(x)===x.gfM(x)&&x.gfM(x)===x.gdM(x)&&x.gdM(x)===x.gdY(x))return"EdgeInsets.all("+C.e.aj(x.gfK(x),1)+")"
return"EdgeInsets("+C.e.aj(x.gfK(x),1)+", "+C.e.aj(x.gdM(x),1)+", "+C.e.aj(x.gfM(x),1)+", "+C.e.aj(x.gdY(x),1)+")"}if(x.gfK(x)===0&&x.gfM(x)===0)return"EdgeInsetsDirectional("+C.e.aj(x.gie(x),1)+", "+C.e.aj(x.gdM(x),1)+", "+C.e.aj(x.gia(),1)+", "+C.e.aj(x.gdY(x),1)+")"
return"EdgeInsets("+C.e.aj(x.gfK(x),1)+", "+C.e.aj(x.gdM(x),1)+", "+C.e.aj(x.gfM(x),1)+", "+C.e.aj(x.gdY(x),1)+") + EdgeInsetsDirectional("+C.e.aj(x.gie(x),1)+", 0.0, "+C.e.aj(x.gia(),1)+", 0.0)"},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.cE&&e.gfK(e)===x.gfK(x)&&e.gfM(e)===x.gfM(x)&&e.gie(e)===x.gie(x)&&e.gia()===x.gia()&&e.gdM(e)===x.gdM(x)&&e.gdY(e)===x.gdY(x)},
gD(d){var x=this
return B.ag(x.gfK(x),x.gfM(x),x.gie(x),x.gia(),x.gdM(x),x.gdY(x),C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
A.bq.prototype={
gfK(d){return this.a},
gdM(d){return this.b},
gfM(d){return this.c},
gdY(d){return this.d},
gie(d){return 0},
gia(){return 0},
EM(d){var x=this
return new B.C(d.a-x.a,d.b-x.b,d.c+x.c,d.d+x.d)},
Ms(d){var x=this
return new B.C(d.a+x.a,d.b+x.b,d.c-x.c,d.d-x.d)},
H(d,e){if(e instanceof A.bq)return this.ac(0,e)
return this.R1(0,e)},
u(d,e,f){var x=this
return new A.bq(C.e.u(x.a,e.a,f.a),C.e.u(x.b,e.b,f.e),C.e.u(x.c,e.c,f.b),C.e.u(x.d,e.d,f.f))},
aD(d,e){var x=this
return new A.bq(x.a-e.a,x.b-e.b,x.c-e.c,x.d-e.d)},
ac(d,e){var x=this
return new A.bq(x.a+e.a,x.b+e.b,x.c+e.c,x.d+e.d)},
ab(d,e){var x=this
return new A.bq(x.a*e,x.b*e,x.c*e,x.d*e)},
a5(d){return this},
vA(d,e,f,g){var x=this,w=e==null?x.a:e,v=g==null?x.b:g,u=f==null?x.c:f
return new A.bq(w,v,u,d==null?x.d:d)},
BJ(d){return this.vA(d,null,null,null)}}
A.px.prototype={
ab(d,e){var x=this
return new A.px(x.a*e,x.b*e,x.c*e,x.d*e,x.e*e,x.f*e)},
a5(d){var x=this
switch(d.a){case 0:return new A.bq(x.d+x.a,x.e,x.c+x.b,x.f)
case 1:return new A.bq(x.c+x.a,x.e,x.d+x.b,x.f)}},
gfK(d){return this.a},
gfM(d){return this.b},
gie(d){return this.c},
gia(){return this.d},
gdM(d){return this.e},
gdY(d){return this.f}}
A.aM.prototype={
vC(d,e,f,g){var x=this,w=g==null?x.a:g,v=e==null?x.b:e,u=f==null?x.c:f
return new A.aM(w,v,u,d==null?x.d:d)},
au7(d,e){return this.vC(null,null,d,e)},
Mf(d,e){return this.vC(null,d,null,e)},
au6(d,e){return this.vC(d,null,e,null)},
a0S(d){return this.vC(d,null,null,null)},
vw(d){return this.vC(null,d,null,null)},
BS(d){var x=this,w=d.gkb(),v=d.gdM(d)+d.gdY(d),u=Math.max(0,x.a-w),t=Math.max(0,x.c-v)
return new A.aM(u,Math.max(u,x.b-w),t,Math.max(t,x.d-v))},
wa(d){var x=this,w=d.a,v=d.b,u=d.c,t=d.d
return new A.aM(C.e.u(x.a,w,v),C.e.u(x.b,w,v),C.e.u(x.c,u,t),C.e.u(x.d,u,t))},
P0(d,e){var x,w,v=this,u=e==null,t=v.a,s=u?t:C.e.u(e,t,v.b),r=v.b
u=u?r:C.e.u(e,t,r)
t=d==null
r=v.c
x=t?r:C.e.u(d,r,v.d)
w=v.d
return new A.aM(s,u,x,t?w:C.e.u(d,r,w))},
y6(d){return this.P0(null,d)},
P_(d){return this.P0(d,null)},
bK(d){var x=this
return new B.V(C.e.u(d.a,x.a,x.b),C.e.u(d.b,x.c,x.d))},
ga3m(){var x=this
return x.a>=x.b&&x.c>=x.d},
ab(d,e){var x=this
return new A.aM(x.a*e,x.b*e,x.c*e,x.d*e)},
is(d,e){var x=this
return new A.aM(x.a/e,x.b/e,x.c/e,x.d/e)},
gax7(){var x=this,w=x.a
if(w>=0)if(w<=x.b){w=x.c
w=w>=0&&w<=x.d}else w=!1
else w=!1
return w},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.Y(e)!==B.I(x))return!1
return e instanceof A.aM&&e.a===x.a&&e.b===x.b&&e.c===x.c&&e.d===x.d},
gD(d){var x=this
return B.ag(x.a,x.b,x.c,x.d,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x,w=this,v=w.gax7()?"":"; NOT NORMALIZED",u=w.a
if(u===1/0&&w.c===1/0)return"BoxConstraints(biggest"+v+")"
if(u===0&&w.b===1/0&&w.c===0&&w.d===1/0)return"BoxConstraints(unconstrained"+v+")"
x=new A.a7z()
return"BoxConstraints("+x.$3(u,w.b,"w")+", "+x.$3(w.c,w.d,"h")+v+")"}}
A.uu.prototype={
j(d){return"<optimized out>#"+B.ca(this.a)+"@"+this.c.j(0)}}
A.ex.prototype={
j(d){return"offset="+this.a.j(0)}}
A.ty.prototype={
j(d){return"_IntrinsicDimension."+this.b}}
A.Hl.prototype={
k(d,e){if(e==null)return!1
return e instanceof A.Hl&&e.a===this.a&&e.b===this.b},
gD(d){return B.ag(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
A.G.prototype={
hA(d){if(!(d.e instanceof A.ex))d.e=new A.ex(D.j)},
ao(d,e,f){var x,w=this.fy
if(w==null)w=this.fy=B.E(y.bi,y.dx)
x=w.cq(0,new A.Hl(d,e),new A.ajq(f,e))
return x},
bH(d){return 0},
bv(d){return 0},
bz(d){return 0},
bG(d){return 0},
i3(d){var x,w=this.go
if(w==null)w=this.go=B.E(y.f,y.hF)
x=w.cq(0,d,new A.ajs(this,d))
return x},
d2(d){return D.v},
gon(){var x=this.k1
return new B.C(0,0,0+x.a,0+x.b)},
G4(d,e){var x=this.lt(d)
if(x==null&&!e)return this.k1.b
return x},
tK(d){return this.G4(d,!1)},
lt(d){var x=this,w=x.k2
if(w==null)w=x.k2=B.E(y.lv,y.jX)
w.cq(0,d,new A.ajr(x,d))
return x.k2.h(0,d)},
f0(d){return null},
gaA(){return y.f.a(A.z.prototype.gaA.call(this))},
ap(){var x,w=this,v=w.k2,u=v==null
if(!(!u&&v.a!==0)){x=w.fy
if(!(x!=null&&x.a!==0)){x=w.go
x=x!=null&&x.a!==0}else x=!0}else x=!0
if(x){if(!u)v.aS(0)
v=w.fy
if(v!=null)v.aS(0)
v=w.go
if(v!=null)v.aS(0)
if(w.gan(w) instanceof A.z){w.F1()
return}}w.abu()},
xG(){this.k1=this.d2(y.f.a(A.z.prototype.gaA.call(this)))},
cA(){},
cE(d,e){var x=this
if(x.k1.v(0,e))if(x.dR(d,e)||x.la(e)){d.H(0,new A.uu(e,x))
return!0}return!1},
la(d){return!1},
dR(d,e){return!1},
eZ(d,e){var x,w=d.e
w.toString
x=y.fd.a(w).a
e.b0(0,x.a,x.b)},
lw(d){var x,w,v,u,t,s=this.eb(0,null)
if(s.nu(s)===0)return D.j
x=new A.eN(new Float64Array(3))
x.lB(0,0,1)
w=new A.eN(new Float64Array(3))
w.lB(0,0,0)
v=s.Ft(w)
w=new A.eN(new Float64Array(3))
w.lB(0,0,1)
u=s.Ft(w).aD(0,v)
w=new A.eN(new Float64Array(3))
w.lB(d.a,d.b,0)
t=s.Ft(w)
w=t.aD(0,u.ly(x.a1v(t)/x.a1v(u))).a
return new B.n(w[0],w[1])},
gll(){var x=this.k1
return new B.C(0,0,0+x.a,0+x.b)},
l6(d,e){this.abt(d,e)}}
A.Et.prototype={
aeb(d){var x,w,v,u=this,t="_paragraph"
try{w=u.M
if(w!==""){x=A.aCW($.aSl())
J.aBd(x,$.aSm())
J.aAw(x,w)
w=J.aGj(x)
B.cq(u.aa,t)
u.aa=w}else{B.cq(u.aa,t)
u.aa=null}}catch(v){}},
bv(d){return 1e5},
bG(d){return 1e5},
glC(){return!0},
la(d){return!0},
d2(d){return d.bK(D.ajh)},
bm(d,e){var x,w,v,u,t,s,r,q,p,o,n=this,m="_paragraph"
try{u=d.gdZ(d)
t=n.k1
s=e.a
r=e.b
q=t.a
t=t.b
p=$.bd()?A.bC():new A.br(new A.bx())
p.sb8(0,$.aSk())
u.dg(0,new B.C(s,r,s+q,r+t),p)
if(B.b(n.aa,m)!=null){x=n.k1.a
w=0
v=0
if(x>328){x-=128
w+=64}B.b(n.aa,m).il(0,new A.oG(x))
u=n.k1.b
t=B.b(n.aa,m)
if(u>96+t.gbW(t)+12)v+=96
u=d.gdZ(d)
t=B.b(n.aa,m)
t.toString
u.ji(0,t,e.ac(0,new B.n(w,v)))}}catch(o){}}}
A.KB.prototype={}
A.k_.prototype={
p(d){var x=this.w
if(x!=null)x.p(0)
this.w=null},
ff(){if(this.r)return
this.r=!0},
goW(){return!1},
siD(d){var x=this,w=x.w
if(w!=null)w.p(0)
x.w=d
if(!x.goW()){w=y.e3
if(w.a(A.T.prototype.gan.call(x,x))!=null&&!w.a(A.T.prototype.gan.call(x,x)).goW())w.a(A.T.prototype.gan.call(x,x)).ff()}},
FV(){this.r=this.r||this.goW()},
m8(d){if(!this.goW())this.ff()
this.GR(d)},
cn(d){var x,w,v=this,u=y.e3.a(A.T.prototype.gan.call(v,v))
if(u!=null){x=v.y
w=v.x
if(x==null)u.ax=w
else x.x=w
w=v.x
if(w==null)u.ay=x
else w.y=x
v.x=v.y=null
u.m8(v)
v.e.sbr(0,null)}},
hU(d,e,f){return!1},
a27(d,e,f){var x=B.a([],f.i("i<A5<0>>"))
this.hU(new A.KB(x,f.i("KB<0>")),e,!0,f)
return x.length===0?null:C.d.gU(x).a},
aeP(d){var x,w=this
if(!w.r&&w.w!=null){x=w.w
x.toString
d.a_W(x)
return}w.jc(d)
w.r=!1},
dL(){var x=this.aaF()
return x+(this.b==null?" DETACHED":"")}}
A.Rr.prototype={
sbr(d,e){var x=this.a
if(e==x)return
if(x!=null)if(--x.f===0)x.p(0)
this.a=e
if(e!=null)++e.f},
j(d){var x=this.a
return"LayerHandle("+(x!=null?x.j(0):"DISPOSED")+")"}}
A.UV.prototype={
sa4E(d){var x
this.ff()
x=this.ay
if(x!=null)x.p(0)
this.ay=d},
p(d){this.sa4E(null)
this.Rd(0)},
jc(d){var x=this.ay
x.toString
d.a_T(D.j,x,this.ch,this.CW)},
hU(d,e,f){return!1}}
A.cK.prototype={
at2(d){this.FV()
this.jc(d)
this.r=!1
return d.bQ(0)},
p(d){this.ON()
this.Rd(0)},
FV(){var x,w=this
w.ab4()
x=w.ax
for(;x!=null;){x.FV()
w.r=w.r||x.r
x=x.x}},
hU(d,e,f,g){var x,w,v
for(x=this.ay,w=d.a;x!=null;x=x.y){if(x.hU(d,e,!0,g))return!0
v=w.length
if(v!==0)return!1}return!1},
aX(d){var x
this.GQ(d)
x=this.ax
for(;x!=null;){x.aX(d)
x=x.x}},
aH(d){var x
this.eW(0)
x=this.ax
for(;x!=null;){x.aH(0)
x=x.x}},
nk(d,e){var x,w=this
if(!w.goW())w.ff()
w.QX(e)
x=e.y=w.ay
if(x!=null)x.x=e
w.ay=e
if(w.ax==null)w.ax=e
e.e.sbr(0,e)},
ON(){var x,w=this,v=w.ax
for(;v!=null;v=x){x=v.x
v.x=v.y=null
if(!w.goW())w.ff()
w.GR(v)
v.e.sbr(0,null)}w.ay=w.ax=null},
jc(d){this.kM(d)},
kM(d){var x=this.ax
for(;x!=null;){x.aeP(d)
x=x.x}},
qV(d,e){}}
A.l4.prototype={
sca(d,e){if(!e.k(0,this.id))this.ff()
this.id=e},
hU(d,e,f,g){return this.oz(d,e.aD(0,this.id),!0,g)},
qV(d,e){var x=this.id
e.dE(0,A.ra(x.a,x.b,0))},
jc(d){var x=this,w=x.id
x.siD(d.OB(w.a,w.b,y.mE.a(x.w)))
x.kM(d)
d.eO(0)}}
A.ma.prototype={
hU(d,e,f,g){if(!this.id.v(0,e))return!1
return this.oz(d,e,!0,g)},
jc(d){var x=this,w=x.id
w.toString
x.siD(d.a4T(w,x.k1,y.ck.a(x.w)))
x.kM(d)
d.eO(0)}}
A.AH.prototype={
hU(d,e,f,g){if(!this.id.v(0,e))return!1
return this.oz(d,e,!0,g)},
jc(d){var x=this,w=x.id
w.toString
x.siD(d.a4S(w,x.k1,y.mT.a(x.w)))
x.kM(d)
d.eO(0)}}
A.xZ.prototype={
sdc(d,e){var x=this
if(e.k(0,x.to))return
x.to=e
x.xr=!0
x.ff()},
jc(d){var x,w,v=this
v.x1=v.to
if(!v.id.k(0,D.j)){x=v.id
x=A.ra(x.a,x.b,0)
w=v.x1
w.toString
x.dE(0,w)
v.x1=x}v.siD(d.xO(v.x1.a,y.cZ.a(v.w)))
v.kM(d)
d.eO(0)},
K_(d){var x,w=this
if(w.xr){x=w.to
x.toString
w.x2=A.Dc(A.aD_(x))
w.xr=!1}x=w.x2
if(x==null)return null
return A.hp(x,d)},
hU(d,e,f,g){var x=this.K_(e)
if(x==null)return!1
return this.ab9(d,x,!0,g)},
qV(d,e){var x=this.x1
if(x==null){x=this.to
x.toString
e.dE(0,x)}else e.dE(0,x)}}
A.DK.prototype={
jc(d){var x,w,v,u=this
if(u.ax==null){u.siD(null)
return}x=u.to
x.toString
w=u.id
v=u.w
if(x<255)u.siD(d.a4X(x,w,y.jw.a(v)))
else u.siD(d.OB(w.a,w.b,y.mE.a(v)))
u.kM(d)
d.eO(0)}}
A.a0x.prototype={}
A.cQ.prototype={
aH(d){},
j(d){return"<none>"}}
A.hR.prototype={
eN(d,e){var x
if(d.gb4()){this.u7()
if(d.cx)A.aMw(d,null,!0)
x=d.ay.a
x.toString
y.oH.a(x)
x.sca(0,e)
this.KG(x)}else d.XV(this,e)},
KG(d){d.cn(0)
this.a.nk(0,d)},
gdZ(d){var x,w=this
if(w.e==null){w.c=new A.UV(w.b,A.aG(y.h))
x=A.aXv()
w.d=x
w.e=A.aUF(x,null)
x=w.c
x.toString
w.a.nk(0,x)}x=w.e
x.toString
return x},
u7(){var x,w=this
if(w.e==null)return
x=w.c
x.toString
x.sa4E(w.d.D8())
w.e=w.d=w.c=null},
Qx(){var x=this.c
if(x!=null)if(!x.ch){x.ch=!0
x.ff()}},
pM(d,e,f,g){var x,w=this
if(d.ax!=null)d.ON()
w.u7()
w.KG(d)
x=w.aue(d,g==null?w.b:g)
e.$2(x,f)
x.u7()},
xN(d,e,f){return this.pM(d,e,f,null)},
aue(d,e){return new A.hR(d,e)},
pL(d,e,f,g,h,i){var x,w=f.dk(e)
if(d){x=i==null?new A.ma(D.a3,A.aG(y.h)):i
if(!w.k(0,x.id)){x.id=w
x.ff()}if(h!==x.k1){x.k1=h
x.ff()}this.pM(x,g,e,w)
return x}else{this.att(w,h,w,new A.ahZ(this,g,e))
return null}},
azv(d,e,f,g,h,i,j){var x,w=f.dk(e),v=g.dk(e)
if(d){x=j==null?new A.AH(D.L8,A.aG(y.h)):j
if(v!==x.id){x.id=v
x.ff()}if(i!==x.k1){x.k1=i
x.ff()}this.pM(x,h,e,w)
return x}else{this.ats(v,i,w,new A.ahY(this,h,e))
return null}},
OC(d,e,f,g,h){var x,w=this,v=e.a,u=e.b,t=A.ra(v,u,0)
t.dE(0,f)
t.b0(0,-v,-u)
if(d){x=h==null?A.aO0(null):h
x.sdc(0,t)
w.pM(x,g,e,A.aM7(t,w.b))
return x}else{v=w.gdZ(w)
v.ci(0)
v.aC(0,t.a)
g.$2(w,e)
w.gdZ(w).c4(0)
return null}},
a5_(d,e,f,g){return this.OC(d,e,f,g,null)},
azy(d,e,f,g){var x=g==null?new A.DK(D.j,A.aG(y.h)):g,w=x.to
if(e!==w){if(e===255||w===255)x.siD(null)
x.to=e
x.ff()}x.sca(0,d)
this.xN(x,f,D.j)
return x},
j(d){return"PaintingContext#"+B.fV(this)+"(layer: "+this.a.j(0)+", canvas bounds: "+this.b.j(0)+")"}}
A.Mp.prototype={}
A.z.prototype={
p(d){this.ay.sbr(0,null)},
hA(d){if(!(d.e instanceof A.cQ))d.e=new A.cQ()},
jd(d){var x=this
x.hA(d)
x.ap()
x.x7()
x.b_()
x.QX(d)},
m8(d){var x=this
d.UM()
d.e.aH(0)
d.e=null
x.GR(d)
x.ap()
x.x7()
x.b_()},
c2(d){},
zv(d,e,f){B.eB(new B.cc(e,f,"rendering library",B.c1("during "+d+"()"),new A.ajU(this),!1))},
aX(d){var x=this
x.GQ(d)
if(x.z&&x.Q!=null){x.z=!1
x.ap()}if(x.ch){x.ch=!1
x.x7()}if(x.cx&&x.ay.a!=null){x.cx=!1
x.bo()}if(x.db&&x.gJH().a){x.db=!1
x.b_()}},
gaA(){var x=this.at
if(x==null)throw B.c(B.af("A RenderObject does not have any constraints before it has been laid out."))
return x},
ap(){var x,w=this
if(w.z)return
x=w.Q
if(x==null){w.z=!0
if(w.gan(w)!=null)w.F1()
return}if(x!==w)w.F1()
else{w.z=!0
x=y.O
if(x.a(A.T.prototype.gd9.call(w))!=null){x.a(A.T.prototype.gd9.call(w)).e.push(w)
x.a(A.T.prototype.gd9.call(w)).xW()}}},
F1(){var x,w=this
w.z=!0
x=w.gan(w)
x.toString
y.F.a(x)
if(!w.as)x.ap()},
UM(){var x=this
if(x.Q!==x){x.Q=null
x.c2(A.aR9())}},
aoz(){var x,w,v=this
if(v.Q===v)return
x=y.pe.a(v.gan(v))
w=x==null?null:x.Q
if(w!=v.Q){v.Q=w
v.c2(A.aRa())}},
amf(){var x,w,v,u=this
try{u.cA()
u.b_()}catch(v){x=B.ay(v)
w=B.b5(v)
u.zv("performLayout",x,w)}u.z=!1
u.bo()},
d3(d,e,f){var x,w,v,u,t,s,r,q=this
if(!f||q.glC()||e.ga3m()||!(q.gan(q) instanceof A.z))t=q
else{s=q.gan(q)
s.toString
s=y.F.a(s).Q
s.toString
t=s}if(!q.z&&e.k(0,q.at)){if(t!==q.Q){q.Q=t
q.c2(A.aRa())}return}q.at=e
s=q.Q
if(s!=null&&t!==s)q.c2(A.aR9())
q.Q=t
if(q.glC())try{q.xG()}catch(r){x=B.ay(r)
w=B.b5(r)
q.zv("performResize",x,w)}try{q.cA()
q.b_()}catch(r){v=B.ay(r)
u=B.b5(r)
q.zv("performLayout",v,u)}q.z=!1
q.bo()},
il(d,e){return this.d3(d,e,!1)},
glC(){return!1},
ND(d,e){var x=this
x.as=!0
try{y.O.a(A.T.prototype.gd9.call(x)).ahx(new A.ajY(x,d,e))}finally{x.as=!1}},
gb4(){return!1},
gbh(){return!1},
gbr(d){return this.ay.a},
x7(){var x,w=this
if(w.ch)return
w.ch=!0
if(w.gan(w) instanceof A.z){x=w.gan(w)
x.toString
y.F.a(x)
if(x.ch)return
if(!w.gb4()&&!x.gb4()){x.x7()
return}}x=y.O
if(x.a(A.T.prototype.gd9.call(w))!=null)x.a(A.T.prototype.gd9.call(w)).w.push(w)},
ZQ(){var x,w=this,v="_needsCompositing"
if(!w.ch)return
x=B.b(w.CW,v)
w.CW=!1
w.c2(new A.ajW(w))
if(w.gb4()||w.gbh())w.CW=!0
if(x!==B.b(w.CW,v))w.bo()
w.ch=!1},
bo(){var x,w=this
if(w.cx)return
w.cx=!0
if(w.gb4()){x=y.O
if(x.a(A.T.prototype.gd9.call(w))!=null){x.a(A.T.prototype.gd9.call(w)).x.push(w)
x.a(A.T.prototype.gd9.call(w)).xW()}}else if(w.gan(w) instanceof A.z){x=w.gan(w)
x.toString
y.F.a(x).bo()}else{x=y.O
if(x.a(A.T.prototype.gd9.call(w))!=null)x.a(A.T.prototype.gd9.call(w)).xW()}},
aqu(){var x,w=this.gan(this)
for(;w instanceof A.z;){if(w.gb4()){x=w.ay.a
if(x==null)break
if(x.b!=null)break
w.cx=!0}w=w.gan(w)}},
XV(d,e){var x,w,v,u=this
if(u.z)return
u.cx=!1
try{u.bm(d,e)}catch(v){x=B.ay(v)
w=B.b5(v)
u.zv("paint",x,w)}},
bm(d,e){},
eZ(d,e){},
eb(d,e){var x,w,v,u,t,s,r,q,p=e==null
if(p){x=y.O.a(A.T.prototype.gd9.call(this)).gOV()
if(x instanceof A.z)e=x}w=B.a([],y.C)
v=y.F
u=this
while(u!==e){w.push(u)
t=u.gan(u)
t.toString
v.a(t)
u=t}if(!p){e.toString
w.push(e)}s=new A.bv(new Float64Array(16))
s.f5()
for(r=w.length-1;r>0;r=q){q=r-1
w[r].eZ(w[q],s)}return s},
m6(d){return null},
Mu(d){return null},
ii(d){},
yL(d){var x,w=this
if(y.O.a(A.T.prototype.gd9.call(w)).gQk()==null)return
x=w.dx
if(x!=null&&!x.as)x.a8W(d)
else if(w.gan(w)!=null){x=w.gan(w)
x.toString
y.F.a(x).yL(d)}},
gJH(){var x,w=this
if(w.cy==null){x=A.rF()
w.cy=x
w.ii(x)}x=w.cy
x.toString
return x},
r_(){this.db=!0
this.dx=null
this.c2(new A.ajX())},
b_(){var x,w,v,u,t,s,r=this
if(r.b==null||y.O.a(A.T.prototype.gd9.call(r)).z==null){r.cy=null
return}if(r.dx!=null){x=r.cy
x=x==null?null:x.a
w=x===!0}else w=!1
r.cy=null
v=r.gJH().a&&w
x=y.F
u=r
while(!0){if(!(!v&&u.gan(u) instanceof A.z))break
if(u!==r&&u.db)break
u.db=!0
t=u.gan(u)
t.toString
x.a(t)
if(t.cy==null){s=A.rF()
t.cy=s
t.ii(s)}v=t.cy.a
if(v&&t.dx==null)return
u=t}if(u!==r&&r.dx!=null&&r.db)y.O.a(A.T.prototype.gd9.call(r)).at.P(0,r)
if(!u.db){u.db=!0
x=y.O
if(x.a(A.T.prototype.gd9.call(r))!=null){x.a(A.T.prototype.gd9.call(r)).at.H(0,u)
x.a(A.T.prototype.gd9.call(r)).xW()}}},
arB(){var x,w,v,u,t,s,r=this,q=null
if(r.z)return
x=r.dx
if(x==null)x=q
else{x=y.Z.a(A.T.prototype.gan.call(x,x))
if(x==null)x=q
else x=x.at||x.as}w=y.jo.a(r.WA(x===!0))
v=B.a([],y.L)
x=r.dx
u=x==null
t=u?q:x.x
s=u?q:x.y
x=u?q:x.z
w.vt(x==null?0:x,s,t,v)
C.d.gcr(v)},
WA(d){var x,w,v,u,t,s,r,q,p=this,o={},n=p.gJH()
o.a=n.c
x=!n.d&&!n.a
w=y.v
v=B.a([],w)
u=B.aA(y.jo)
p.iP(new A.ajV(o,p,d||n.p2,v,u,n,x))
for(t=B.dL(u,u.r,u.$ti.c),s=t.$ti.c;t.t();){r=t.d;(r==null?s.a(r):r).NQ()}p.db=!1
if(!(p.gan(p) instanceof A.z)){t=o.a
q=new A.a2D(B.a([],w),B.a([p],y.C),t)}else{t=o.a
if(x)q=new A.asg(B.a([],w),t)
else{q=new A.a3s(d,n,B.a([],w),B.a([p],y.C),t)
if(n.a)q.x=!0}}q.Z(0,v)
return q},
iP(d){this.c2(d)},
qW(d,e,f){d.mH(0,y.mW.a(f),e)},
l6(d,e){},
dL(){var x=B.ca(this)
return"<optimized out>#"+x},
j(d){return this.dL()},
f6(d,e,f,g){var x,w=this
if(w.gan(w) instanceof A.z){x=w.gan(w)
x.toString
y.F.a(x)
x.f6(d,e==null?w:e,f,g)}},
u0(){return this.f6(D.bf,null,C.E,null)},
or(d){return this.f6(D.bf,null,C.E,d)},
qd(d,e,f){return this.f6(d,null,e,f)},
os(d,e){return this.f6(D.bf,d,C.E,e)},
$iap:1}
A.b7.prototype={
sbJ(d){var x=this,w=x.C$
if(w!=null)x.m8(w)
x.C$=d
if(d!=null)x.jd(d)},
lp(){var x=this.C$
if(x!=null)this.xU(x)},
c2(d){var x=this.C$
if(x!=null)d.$1(x)}}
A.aw2.prototype={}
A.asg.prototype={
Z(d,e){C.d.Z(this.b,e)},
ga2T(){return this.b}}
A.tx.prototype={
ga2T(){return B.a([this],y.v)},
asn(d){var x
if(d==null||d.a===0)return
x=this.c;(x==null?this.c=B.aA(y.e):x).Z(0,d)}}
A.a2D.prototype={
vt(d,e,f,g){var x,w,v,u,t,s=this.b,r=C.d.gU(s)
if(r.dx==null){x=C.d.gU(s).gu_()
w=C.d.gU(s)
w=y.O.a(A.T.prototype.gd9.call(w)).gQk()
w.toString
v=$.aAk()
v=new A.bL(null,0,x,C.a0,v.p2,v.e,v.p3,v.f,v.bL,v.p4,v.R8,v.RG,v.rx,v.ry,v.x1,v.x2,v.xr)
v.aX(w)
r.dx=v}r=C.d.gU(s).dx
r.toString
r.sbY(0,C.d.gU(s).gon())
u=B.a([],y.L)
for(s=this.e,x=s.length,t=0;t<s.length;s.length===x||(0,B.F)(s),++t)s[t].vt(0,e,f,u)
r.mH(0,u,null)
g.push(r)},
gp6(){return null},
NQ(){},
Z(d,e){C.d.Z(this.e,e)}}
A.a3s.prototype={
vt(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(!m.x){x=m.b
C.d.gU(x).dx=null
for(w=m.w,v=w.length,u=B.ae(x),t=u.c,u=u.i("iD<1>"),s=0;s<w.length;w.length===v||(0,B.F)(w),++s){r=w[s]
q=new B.iD(x,1,l,u)
q.z8(x,1,l,t)
C.d.Z(r.b,q)
r.vt(d+m.f.x1,e,f,g)}return}x=m.b
if(x.length>1){p=new A.aw3()
p.ag5(f,e,x)}else p=l
w=m.e
v=!w
if(v){if(p==null)u=l
else{u=B.b(p.d,"_rect")
u=u.ga_(u)}u=u===!0}else u=!1
if(u)return
u=C.d.gU(x)
if(u.dx==null)u.dx=A.Wu(l,C.d.gU(x).gu_())
o=C.d.gU(x).dx
o.sa3b(w)
o.dx=m.c
o.z=d
if(d!==0){m.VV()
w=m.f
w.shN(0,w.x1+d)}if(p!=null){o.sbY(0,B.b(p.d,"_rect"))
o.sdc(0,B.b(p.c,"_transform"))
o.x=p.b
o.y=p.a
if(v&&p.e){m.VV()
m.f.c0(C.jc,!0)}}n=B.a([],y.L)
for(w=m.w,v=w.length,s=0;s<w.length;w.length===v||(0,B.F)(w),++s){r=w[s]
u=o.x
r.vt(0,o.y,u,n)}w=m.f
if(w.a)C.d.gU(x).qW(o,m.f,n)
else o.mH(0,n,w)
g.push(o)},
gp6(){return this.x?null:this.f},
Z(d,e){var x,w,v,u,t,s,r=this
for(x=e.length,w=r.w,v=0;v<e.length;e.length===x||(0,B.F)(e),++v){u=e[v]
w.push(u)
if(u.gp6()==null)continue
if(!r.r){r.f=r.f.BH(0)
r.r=!0}t=r.f
s=u.gp6()
s.toString
t.v3(s)}},
VV(){var x,w,v=this
if(!v.r){x=v.f
w=A.rF()
w.a=x.a
w.b=x.b
w.c=x.c
w.d=x.d
w.p2=x.p2
w.xr=x.xr
w.id=x.id
w.p4=x.p4
w.RG=x.RG
w.R8=x.R8
w.rx=x.rx
w.ry=x.ry
w.to=x.to
w.x1=x.x1
w.x2=x.x2
w.bL=x.bL
w.aN=x.aN
w.y1=x.y1
w.y2=x.y2
w.aF=x.aF
w.al=x.al
w.f=x.f
w.k1=x.k1
w.k3=x.k3
w.k2=x.k2
w.k4=x.k4
w.ok=x.ok
w.p1=x.p1
w.e.Z(0,x.e)
w.p3.Z(0,x.p3)
v.f=w
v.r=!0}},
NQ(){this.x=!0}}
A.aw3.prototype={
ag5(d,e,f){var x,w,v,u,t,s,r=this,q=new A.bv(new Float64Array(16))
q.f5()
r.c=q
r.b=d
r.a=e
for(x=f.length-1;x>0;){w=f[x];--x
v=f[x]
d=w.Mu(v)
if(d!=null){r.b=d
r.a=A.aOQ(r.a,w.m6(v))}else r.b=A.aOQ(r.b,w.m6(v))
q=$.aSX()
q.f5()
A.b03(w,v,B.b(r.c,"_transform"),q)
r.b=A.aOR(r.b,q)
r.a=A.aOR(r.a,q)}u=C.d.gU(f)
q=r.b
q=q==null?u.gon():q.h5(u.gon())
r.d=q
t=r.a
if(t!=null){s=t.h5(B.b(q,"_rect"))
if(s.ga_(s)){q=B.b(r.d,"_rect")
q=!q.ga_(q)}else q=!1
r.e=q
if(!q)r.d=s}}}
A.a2o.prototype={}
A.oX.prototype={
j(d){return"SchedulerPhase."+this.b}}
A.dp.prototype={
ac(d,e){var x,w,v,u,t,s,r,q=this.a,p=q.length
if(p===0)return e
x=e.a
if(x.length===0)return this
w=B.al(this.b,!0,y.jm)
v=e.b
u=v.length
if(u!==0)for(t=0;t<v.length;v.length===u||(0,B.F)(v),++t){s=v[t]
r=s.a
w.push(J.aGr(s,new B.di(r.a+p,r.b+p)))}return new A.dp(q+x,w)},
k(d,e){if(e==null)return!1
return J.Y(e)===B.I(this)&&e instanceof A.dp&&e.a===this.a&&A.ev(e.b,this.b)},
gD(d){return B.ag(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return"AttributedString('"+this.a+"', attributes: "+B.e(this.b)+")"}}
A.Wt.prototype={
dL(){return"SemanticsData"},
k(d,e){var x,w=this
if(e==null)return!1
if(e instanceof A.Wt)if(e.a===w.a)if(e.b===w.b)if(e.c.k(0,w.c))if(e.d.k(0,w.d))if(e.e.k(0,w.e))if(e.f.k(0,w.f))if(e.r.k(0,w.r))if(e.w==w.w)if(e.CW.k(0,w.CW))if(A.a5y(e.cx,w.cx))if(e.y==w.y)if(e.z==w.z)if(J.h(e.x,w.x))if(e.Q==w.Q)if(e.as==w.as)if(e.at==w.at)x=e.ch==w.ch&&J.h(e.cy,w.cy)&&e.db===w.db&&e.dx===w.dx&&A.aYo(e.dy,w.dy)
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
return x},
gD(d){var x=this,w=A.eG(x.dy)
return B.ag(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,x.CW,x.cx,x.x,x.y,x.z,x.Q,x.as,x.at,x.ax,x.ay,x.ch,B.ag(x.cy,x.db,x.dx,w,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a))}}
A.a2P.prototype={}
A.bL.prototype={
sdc(d,e){var x
if(!A.aXa(this.r,e)){x=A.aCI(e)
this.r=x?null:e
this.j4()}},
sbY(d,e){if(!this.w.k(0,e)){this.w=e
this.j4()}},
sa3b(d){if(this.as===d)return
this.as=d
this.j4()},
apj(d){var x,w,v,u,t,s,r,q=this,p=q.ax
if(p!=null)for(x=p.length,w=0;w<x;++w)p[w].ch=!0
for(p=d.length,w=0;w<p;++w)d[w].ch=!1
p=q.ax
if(p!=null)for(x=p.length,v=y.Z,u=!1,w=0;w<p.length;p.length===x||(0,B.F)(p),++w){t=p[w]
if(t.ch){s=J.d(t)
if(v.a(A.T.prototype.gan.call(s,t))===q){t.c=null
if(q.b!=null)t.aH(0)}u=!0}}else u=!1
for(p=d.length,x=y.Z,w=0;w<d.length;d.length===p||(0,B.F)(d),++w){t=d[w]
v=J.d(t)
if(x.a(A.T.prototype.gan.call(v,t))!==q){if(x.a(A.T.prototype.gan.call(v,t))!=null){v=x.a(A.T.prototype.gan.call(v,t))
if(v!=null){t.c=null
if(v.b!=null)t.aH(0)}}t.c=q
v=q.b
if(v!=null)t.aX(v)
v=t.a
s=q.a
if(v<=s){t.a=s+1
t.lp()}u=!0}}if(!u&&q.ax!=null)for(p=q.ax,x=p.length,r=0;r<x;++r)if(p[r].e!==d[r].e){u=!0
break}q.ax=d
if(u)q.j4()},
gaws(){var x=this.ax
x=x==null?null:x.length!==0
return x===!0},
Kj(d){var x,w,v,u=this.ax
if(u!=null)for(x=u.length,w=0;w<u.length;u.length===x||(0,B.F)(u),++w){v=u[w]
if(!d.$1(v)||!v.Kj(d))return!1}return!0},
lp(){var x=this.ax
if(x!=null)C.d.ah(x,this.gOK())},
aX(d){var x,w,v,u=this
u.GQ(d)
for(x=d.b;x.am(0,u.e);)u.e=$.alO=($.alO+1)%65535
x.l(0,u.e,u)
d.c.P(0,u)
if(u.CW){u.CW=!1
u.j4()}x=u.ax
if(x!=null)for(w=x.length,v=0;v<x.length;x.length===w||(0,B.F)(x),++v)x[v].aX(d)},
aH(d){var x,w,v,u,t,s=this,r=y.gC
r.a(A.T.prototype.gd9.call(s)).b.P(0,s.e)
r.a(A.T.prototype.gd9.call(s)).c.H(0,s)
s.eW(0)
r=s.ax
if(r!=null)for(x=r.length,w=y.Z,v=0;v<r.length;r.length===x||(0,B.F)(r),++v){u=r[v]
t=J.d(u)
if(w.a(A.T.prototype.gan.call(t,u))===s)t.aH(u)}s.j4()},
j4(){var x=this
if(x.CW)return
x.CW=!0
if(x.b!=null)y.gC.a(A.T.prototype.gd9.call(x)).a.H(0,x)},
mH(d,e,f){var x,w=this
if(f==null)f=$.aAk()
if(w.fr.k(0,f.p4))if(w.id.k(0,f.ry))if(w.k1===f.x1)if(w.k2===f.x2)if(w.fx.k(0,f.R8))if(w.fy.k(0,f.RG))if(w.go.k(0,f.rx))if(w.dy===f.bL)if(w.k4==f.xr)if(w.ok==f.id)if(J.h(w.p1,f.y1))if(w.R8==f.y2)if(w.RG==f.aF)if(w.rx==f.al)if(w.db===f.f)if(w.Q==f.k1)x=w.x1!=f.p1||w.at!==f.p2
else x=!0
else x=!0
else x=!0
else x=!0
else x=!0
else x=!0
else x=!0
else x=!0
else x=!0
else x=!0
else x=!0
else x=!0
else x=!0
else x=!0
else x=!0
else x=!0
if(x)w.j4()
w.fr=f.p4
w.fx=f.R8
w.fy=f.RG
w.go=f.rx
w.id=f.ry
w.k3=f.to
w.k1=f.x1
w.k2=f.x2
w.dy=f.bL
w.k4=f.xr
w.ok=f.id
w.cx=B.ag4(f.e,y.d,y.dq)
w.cy=B.ag4(f.p3,y.D,y.cj)
w.db=f.f
w.p1=f.y1
w.R8=f.y2
w.RG=f.aF
w.rx=f.al
w.at=f.p2
w.p3=f.k2
w.p4=f.k3
w.Q=f.k1
w.ry=f.k4
w.to=f.ok
w.x1=f.p1
w.apj(e==null?D.lg:e)},
a67(d,e){return this.mH(d,null,e)},
a8F(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4={}
a4.a=a3.dy
a4.b=a3.db
a4.c=a3.fr
a4.d=a3.fx
a4.e=a3.fy
a4.f=a3.go
a4.r=a3.id
a4.w=a3.k4
x=a3.dx
a4.x=x==null?null:B.k2(x,y.e)
a4.y=a3.p1
a4.z=a3.p3
a4.Q=a3.p4
a4.as=a3.R8
a4.at=a3.RG
a4.ax=a3.rx
a4.ay=a3.ry
a4.ch=a3.to
a4.CW=a3.x1
w=a3.k1
a4.cx=a3.k2
v=B.aA(y.S)
for(x=a3.cy,x=B.ik(x,x.r,B.q(x).c);x.t();)v.H(0,A.aKb(x.d))
a3.k3!=null
if(a3.at)a3.Kj(new A.alP(a4,a3,v))
x=a4.a
u=a4.b
t=a4.c
s=a4.d
r=a4.e
q=a4.f
p=a4.r
o=a4.w
n=a3.w
m=a3.r
l=a4.cx
k=a4.x
j=a4.y
i=a4.z
h=a4.Q
g=a4.as
f=a4.at
e=a4.ax
d=a4.ay
a0=a4.ch
a1=a4.CW
a2=B.al(v,!0,v.$ti.i("d7.E"))
C.d.kt(a2)
return new A.Wt(x,u,t,s,r,q,p,o,j,i,h,g,f,e,d,a0,a1,n,k,m,w,l,a2)},
aeQ(a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.a8F()
if(!a1.gaws()||a1.at){x=$.aSq()
w=x}else{v=a1.ax.length
u=a1.afP()
x=new Int32Array(v)
for(t=0;t<v;++t)x[t]=u[t].e
w=new Int32Array(v)
for(t=v-1,s=a1.ax;t>=0;--t)w[t]=s[v-t-1].e}s=a2.dy
r=s.length
if(r!==0){q=new Int32Array(r)
for(t=0;t<s.length;++t){r=s[t]
q[t]=r
a4.H(0,r)}}else q=null
s=a1.e
r=a2.c
p=a2.d
o=a2.e
n=a2.f
m=a2.r
l=a2.x
k=l!=null
j=k?l.c:-1
l=k?l.d:-1
k=a2.ch
if(k==null)k=-1
i=a2.y
if(i==null)i=0
h=a2.z
if(h==null)h=0
g=a2.Q
if(g==null)g=0/0
f=a2.as
if(f==null)f=0/0
e=a2.at
if(e==null)e=0/0
d=a2.cy
d=d==null?null:d.a
if(d==null)d=$.aSs()
a0=q==null?$.aSr():q
a3.aBo(a2.b,a0,w,x,k,n.a,n.b,a2.db,a2.a,m.a,m.b,s,o.a,o.b,r.a,r.b,-1,-1,a2.CW,i,f,e,h,g,a2.w,j,l,a2.dx,d,p.a,p.b)
a1.CW=!1},
afP(){var x,w,v,u,t,s,r,q,p,o=this,n=o.k4,m=y.Z,l=m.a(A.T.prototype.gan.call(o,o))
while(!0){x=n==null
if(!(x&&l!=null))break
n=l.k4
l=m.a(A.T.prototype.gan.call(l,l))}w=o.ax
if(!x){w.toString
w=A.b0F(w,n)}m=y.mF
v=B.a([],m)
u=B.a([],m)
for(t=null,s=0;s<w.length;++s){r=w[s]
q=r.ok
t=s>0?w[s-1].ok:null
if(s!==0)if(J.Y(q)===J.Y(t)){if(q!=null)t.toString
p=!0}else p=!1
else p=!0
if(!p&&u.length!==0){if(t!=null){if(!!u.immutable$list)B.M(B.R("sort"))
m=u.length-1
if(m-0<=32)B.Xa(u,0,m,J.aEq())
else B.X9(u,0,m,J.aEq())}C.d.Z(v,u)
C.d.sm(u,0)}u.push(new A.nm(r,q,s))}if(t!=null)C.d.kt(u)
C.d.Z(v,u)
m=y.bP
return B.al(new B.aD(v,new A.alN(),m),!0,m.i("aP.E"))},
a8W(d){if(this.b==null)return
D.nl.eS(0,d.a5N(this.e))},
dL(){return"SemanticsNode#"+this.e},
aAK(d,e,f){return new A.a2P(d,this,e,!0,!0,null,f)},
a5K(d){return this.aAK(D.Oy,null,d)}}
A.nb.prototype={
b9(d,e){return C.e.b9(this.b,e.b)},
$ibp:1}
A.ky.prototype={
b9(d,e){return C.e.b9(this.a,e.a)},
a9C(){var x,w,v,u,t,s,r,q,p,o=B.a([],y.E)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,B.F)(x),++v){u=x[v]
t=u.w
o.push(new A.nb(!0,A.tV(u,new B.n(t.a- -0.1,t.b- -0.1)).a,u))
o.push(new A.nb(!1,A.tV(u,new B.n(t.c+-0.1,t.d+-0.1)).a,u))}C.d.kt(o)
s=B.a([],y.I)
for(x=o.length,w=this.b,t=y.L,r=null,q=0,v=0;v<o.length;o.length===x||(0,B.F)(o),++v){p=o[v]
if(p.a){++q
if(r==null)r=new A.ky(p.b,w,B.a([],t))
r.c.push(p.c)}else --q
if(q===0){r.toString
s.push(r)
r=null}}C.d.kt(s)
if(w===C.ap){x=y.gP
s=B.al(new B.c9(s,x),!0,x.i("aP.E"))}x=B.ae(s).i("ib<1,bL>")
return B.al(new B.ib(s,new A.aw8(),x),!0,x.i("p.E"))},
a9B(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this.c,a2=a1.length
if(a2<=1)return a1
x=y.S
w=B.E(x,y.mi)
v=B.E(x,x)
for(u=this.b,t=u===C.ap,u=u===C.C,s=a2,r=0;r<s;l===a2||(0,B.F)(a1),++r,s=l){q=a1[r]
w.l(0,q.e,q)
s=q.w
p=s.a
o=s.b
n=A.tV(q,new B.n(p+(s.c-p)/2,o+(s.d-o)/2))
for(s=a1.length,p=n.a,o=n.b,m=0;l=a1.length,m<l;a1.length===s||(0,B.F)(a1),++m){k=a1[m]
if((q==null?k==null:q===k)||v.h(0,k.e)===q.e)continue
l=k.w
j=l.a
i=l.b
h=A.tV(k,new B.n(j+(l.c-j)/2,i+(l.d-i)/2))
g=Math.atan2(h.b-o,h.a-p)
f=u&&-0.7853981633974483<g&&g<2.356194490192345
if(t)e=g<-2.356194490192345||g>2.356194490192345
else e=!1
if(f||e)v.l(0,q.e,k.e)}}d=B.a([],y.t)
a0=B.a(a1.slice(0),B.ae(a1))
C.d.ec(a0,new A.aw4())
new B.aD(a0,new A.aw5(),B.ae(a0).i("aD<1,k>")).ah(0,new A.aw7(B.aA(x),v,d))
a1=y.jI
a1=B.al(new B.aD(d,new A.aw6(w),a1),!0,a1.i("aP.E"))
a2=B.ae(a1).i("c9<1>")
return B.al(new B.c9(a1,a2),!0,a2.i("aP.E"))}}
A.nm.prototype={
b9(d,e){var x,w=this.b
if(w==null||e.b==null)return this.c-e.c
w.toString
x=e.b
x.toString
return w.b9(0,x)},
$ibp:1}
A.alA.prototype={
oC(d,e){var x=this
x.e.l(0,d,e)
x.f=x.f|d.a
x.d=!0},
i9(d,e){this.oC(d,new A.alB(e))},
slj(d){d.toString
this.i9(C.fC,d)
this.r=d},
smv(d){d.toString
this.i9(D.H6,d)},
st9(d){this.i9(C.fF,d)},
st3(d){this.i9(D.aic,d)},
sta(d){this.i9(C.fG,d)},
stb(d){this.i9(C.fD,d)},
st8(d){this.i9(C.fE,d)},
sxq(d){this.i9(C.H7,d)},
sxn(d){this.i9(C.H5,d)},
st0(d,e){this.i9(D.aie,e)},
st1(d,e){this.i9(D.aii,e)},
shu(d,e){this.i9(D.ai8,e)},
st6(d){this.oC(D.aif,new A.alE(d))},
st4(d){this.oC(D.ai6,new A.alC(d))},
st7(d){this.oC(D.aig,new A.alF(d))},
st5(d){this.oC(D.ai7,new A.alD(d))},
stc(d){this.oC(D.ai9,new A.alG(d))},
std(d){this.oC(D.aia,new A.alH(d))},
st2(d){this.i9(D.aid,d)},
sxo(d){this.i9(D.aih,d)},
sa8O(d){if(d==this.k2)return
this.k2=d
this.d=!0},
sa8P(d){if(d==this.k3)return
this.k3=d
this.d=!0},
sx8(d){return},
sr8(d){if(d==this.p1)return
this.p1=d
this.d=!0},
shN(d,e){if(e===this.x1)return
this.x1=e
this.d=!0},
a_Y(d){var x=this.aN;(x==null?this.aN=B.aA(y.e):x).H(0,d)},
c0(d,e){var x=this,w=x.bL,v=d.a
if(e)x.bL=w|v
else x.bL=w&~v
x.d=!0},
a37(d){var x,w=this
if(d==null||!d.d||!w.d)return!0
if((w.f&d.f)!==0)return!1
if((w.bL&d.bL)!==0)return!1
if(w.p1!=null&&d.p1!=null)return!1
if(w.R8.a.length!==0)x=d.R8.a.length!==0
else x=!1
if(x)return!1
return!0},
v3(d){var x,w,v=this
if(!d.d)return
v.e.Z(0,d.e)
v.p3.Z(0,d.p3)
v.f=v.f|d.f
v.bL=v.bL|d.bL
if(v.y1==null)v.y1=d.y1
if(v.y2==null)v.y2=d.y2
if(v.aF==null)v.aF=d.aF
if(v.al==null)v.al=d.al
if(v.to==null)v.to=d.to
if(v.k1==null)v.k1=d.k1
if(v.k3==null)v.k3=d.k3
if(v.k2==null)v.k2=d.k2
v.k4=d.k4
v.ok=d.ok
if(v.p1==null)v.p1=d.p1
x=v.xr
if(x==null){x=v.xr=d.xr
v.d=!0}if(v.id==null)v.id=d.id
w=v.p4
v.p4=A.axP(d.p4,d.xr,w,x)
x=v.R8
if(x.a==="")v.R8=d.R8
x=v.RG
if(x.a==="")v.RG=d.RG
x=v.rx
if(x.a==="")v.rx=d.rx
x=v.ry
w=v.xr
v.ry=A.axP(d.ry,d.xr,x,w)
v.x2=Math.max(v.x2,d.x2+d.x1)
v.d=v.d||d.d},
BH(d){var x=this,w=A.rF()
w.a=x.a
w.b=x.b
w.c=x.c
w.d=x.d
w.p2=x.p2
w.xr=x.xr
w.id=x.id
w.p4=x.p4
w.RG=x.RG
w.R8=x.R8
w.rx=x.rx
w.ry=x.ry
w.to=x.to
w.x1=x.x1
w.x2=x.x2
w.bL=x.bL
w.aN=x.aN
w.y1=x.y1
w.y2=x.y2
w.aF=x.aF
w.al=x.al
w.f=x.f
w.k1=x.k1
w.k3=x.k3
w.k2=x.k2
w.k4=x.k4
w.ok=x.ok
w.p1=x.p1
w.e.Z(0,x.e)
w.p3.Z(0,x.p3)
return w}}
A.Oq.prototype={
j(d){return"DebugSemanticsDumpOrder."+this.b}}
A.a2O.prototype={}
A.a2Q.prototype={}
A.KM.prototype={
rV(d,e){return this.axu(d,!0)},
axu(d,e){var x=0,w=B.a2(y.N),v,u=this,t
var $async$rV=B.a3(function(f,g){if(f===1)return B.a_(g,w)
while(true)switch(x){case 0:x=3
return B.a5(u.ex(0,d),$async$rV)
case 3:t=g
if(t.byteLength<51200){v=C.Y.dz(0,B.bP(t.buffer,0,null))
x=1
break}v=A.a5n(A.b2L(),t,'UTF8 decode for "'+d+'"',y.U,y.N)
x=1
break
case 1:return B.a0(v,w)}})
return B.a1($async$rV,w)},
j(d){return"<optimized out>#"+B.ca(this)+"()"}}
A.a7L.prototype={
rV(d,e){return this.a9Z(d,!0)}}
A.ail.prototype={
ex(d,e){return this.axt(0,e)},
axt(d,e){var x=0,w=B.a2(y.U),v,u,t
var $async$ex=B.a3(function(f,g){if(f===1)return B.a_(g,w)
while(true)switch(x){case 0:u=C.dK.bU(A.tN(null,B.J9(C.lh,e,C.Y,!1),null,null,null,null,null).e)
x=3
return B.a5($.fX.gvJ().Gk(0,"flutter/assets",B.j5(u.buffer,0,null)),$async$ex)
case 3:t=g
if(t==null)throw B.c(B.BO("Unable to load asset: "+e))
v=t
x=1
break
case 1:return B.a0(v,w)}})
return B.a1($async$ex,w)}}
A.afM.prototype={}
A.f.prototype={
gD(d){return C.b.gD(this.a)},
k(d,e){if(e==null)return!1
if(this===e)return!0
if(J.Y(e)!==B.I(this))return!1
return e instanceof A.f&&e.a===this.a}}
A.o.prototype={
gD(d){return C.b.gD(this.a)},
k(d,e){if(e==null)return!1
if(this===e)return!0
if(J.Y(e)!==B.I(this))return!1
return e instanceof A.o&&e.a===this.a}}
A.a0w.prototype={}
A.aoL.prototype={
iA(d){if(d==null)return null
return C.eB.bU(B.bP(d.buffer,d.byteOffset,d.byteLength))},
d7(d){if(d==null)return null
return B.j5(C.dK.bU(d).buffer,0,null)}}
A.af2.prototype={
d7(d){if(d==null)return null
return D.k4.d7(C.bq.ny(d))},
iA(d){var x
if(d==null)return d
x=D.k4.iA(d)
x.toString
return C.bq.dz(0,x)}}
A.af4.prototype={
k_(d){var x=D.de.d7(B.ad(["method",d.a,"args",d.b],y.N,y.iD))
x.toString
return x},
jW(d){var x,w,v,u=null,t=D.de.iA(d)
if(!y.V.b(t))throw B.c(B.bH("Expected method call Map, got "+B.e(t),u,u))
x=J.a7(t)
w=x.h(t,"method")
v=x.h(t,"args")
if(typeof w=="string")return new B.k4(w,v)
throw B.c(B.bH("Invalid method call: "+B.e(t),u,u))},
a1d(d){var x,w,v,u=null,t=D.de.iA(d)
if(!y.gs.b(t))throw B.c(B.bH("Expected envelope List, got "+B.e(t),u,u))
x=J.a7(t)
if(x.gm(t)===1)return x.h(t,0)
if(x.gm(t)===3)if(typeof x.h(t,0)=="string")w=x.h(t,1)==null||typeof x.h(t,1)=="string"
else w=!1
else w=!1
if(w){w=B.bZ(x.h(t,0))
v=B.dl(x.h(t,1))
throw B.c(B.aCZ(w,x.h(t,2),v,u))}if(x.gm(t)===4)if(typeof x.h(t,0)=="string")if(x.h(t,1)==null||typeof x.h(t,1)=="string")w=x.h(t,3)==null||typeof x.h(t,3)=="string"
else w=!1
else w=!1
else w=!1
if(w){w=B.bZ(x.h(t,0))
v=B.dl(x.h(t,1))
throw B.c(B.aCZ(w,x.h(t,2),v,B.dl(x.h(t,3))))}throw B.c(B.bH("Invalid envelope: "+B.e(t),u,u))},
vU(d){var x=D.de.d7([d])
x.toString
return x},
pe(d,e,f){var x=D.de.d7([d,f,e])
x.toString
return x},
a1K(d,e){return this.pe(d,null,e)}}
A.Dl.prototype={}
A.cn.prototype={
j(d){var x=this.gvG()
return x}}
A.a_b.prototype={
BN(d){throw B.c(B.ch(null))},
gvG(){return"defer"}}
A.a3v.prototype={}
A.pf.prototype={
gvG(){return"SystemMouseCursor("+this.a+")"},
BN(d){return new A.a3v(this,d)},
k(d,e){if(e==null)return!1
if(J.Y(e)!==B.I(this))return!1
return e instanceof A.pf&&e.a===this.a},
gD(d){return C.c.gD(this.a)}}
A.a0Y.prototype={}
A.m5.prototype={
eS(d,e){return this.a8T(0,e,this.$ti.i("1?"))},
a8T(d,e,f){var x=0,w=B.a2(f),v,u=this,t,s,r
var $async$eS=B.a3(function(g,h){if(g===1)return B.a_(h,w)
while(true)switch(x){case 0:t=u.b
s=$.fX.gvJ()
r=t
x=3
return B.a5(s.Gk(0,u.a,t.d7(e)),$async$eS)
case 3:v=r.iA(h)
x=1
break
case 1:return B.a0(v,w)}})
return B.a1($async$eS,w)},
Gs(d){var x=$.fX.gvJ()
x.Qy(this.a,new A.a7g(this,d))},
gae(d){return this.a}}
A.oD.prototype={
dS(d,e,f){return this.awX(d,e,f,f.i("0?"))},
mk(d,e){return this.dS(d,null,e)},
awX(d,e,f,g){var x=0,w=B.a2(g),v,u=this
var $async$dS=B.a3(function(h,i){if(h===1)return B.a_(i,w)
while(true)switch(x){case 0:v=u.ab7(d,e,!0,f)
x=1
break
case 1:return B.a0(v,w)}})
return B.a1($async$dS,w)}}
A.or.prototype={
j(d){return"KeyboardSide."+this.b}}
A.hP.prototype={
j(d){return"ModifierKey."+this.b}}
A.aj6.prototype={
awk(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
if(y.c.b(d))if(d.c.a9m()){m.d.l(0,d.gi_(),d.grW())
u=!0}else{m.e.H(0,d.gi_())
u=!1}else if(y.oL.b(d)){t=m.e
if(!t.v(0,d.gi_())){m.d.P(0,d.gi_())
u=!0}else{t.P(0,d.gi_())
u=!1}}else u=!0
if(!u)return!0
m.aqL(d)
for(t=m.a,s=B.al(t,!0,y.gw),r=s.length,q=0;q<r;++q){x=s[q]
try{if(C.d.v(t,x))x.$1(d)}catch(p){w=B.ay(p)
v=B.b5(p)
o=B.c1("while processing a raw key listener")
n=$.jA()
if(n!=null)n.$1(new B.cc(w,v,"services library",o,null,!1))}}return!1},
aqL(d){var x,w,v,u,t,s,r,q,p,o,n=d.c,m=n.gaxN(),l=y.b,k=B.E(l,y.x),j=B.aA(l),i=this.d,h=B.k2(new B.aX(i,B.q(i).i("aX<1>")),l),g=y.c.b(d)
if(g)h.H(0,d.gi_())
for(x=null,w=0;w<9;++w){v=D.q0[w]
u=$.aSj()
t=u.h(0,new A.da(v,D.cg))
if(t==null)continue
if(t.v(0,d.gi_()))x=v
if(m.h(0,v)===D.dU){j.Z(0,t)
if(t.iy(0,h.gjV(h)))continue}s=m.h(0,v)==null?B.aA(l):u.h(0,new A.da(v,m.h(0,v)))
if(s==null)continue
for(u=B.q(s),r=new B.h4(s,s.r,u.i("h4<1>")),r.c=s.e,u=u.c;r.t();){q=r.d
if(q==null)q=u.a(q)
p=$.aSi().h(0,q)
p.toString
k.l(0,q,p)}}l=$.aFr()
h=B.q(l).i("aX<1>")
new B.aL(new B.aX(l,h),new A.aj7(j),h.i("aL<p.E>")).ah(0,i.ga5c(i))
if(!y.lx.b(n)&&!y.o9.b(n))i.P(0,D.fv)
i.Z(0,k)
if(g&&x!=null&&!i.am(0,d.gi_()))if(y.oy.b(n)&&d.gi_().k(0,D.en)){o=l.h(0,d.gi_())
if(o!=null)i.l(0,d.gi_(),o)}}}
A.da.prototype={
k(d,e){if(e==null)return!1
if(J.Y(e)!==B.I(this))return!1
return e instanceof A.da&&e.a===this.a&&e.b==this.b},
gD(d){return B.ag(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
A.fd.prototype={
gvf(){var x,w=this
if(!w.gcg()||w.c===w.d)x=w.e
else x=w.c<w.d?D.p:D.aU
return new A.bM(w.c,x)},
geI(){var x,w=this
if(!w.gcg()||w.c===w.d)x=w.e
else x=w.c<w.d?D.aU:D.p
return new A.bM(w.d,x)},
j(d){var x,w,v=this,u=", isDirectional: "
if(!v.gcg())return"TextSelection.invalid"
x=""+v.c
w=""+v.f
return v.a===v.b?"TextSelection.collapsed(offset: "+x+", affinity: "+v.e.j(0)+u+w+")":"TextSelection(baseOffset: "+x+", extentOffset: "+v.d+u+w+")"},
k(d,e){var x,w=this
if(e==null)return!1
if(w===e)return!0
if(!(e instanceof A.fd))return!1
if(!w.gcg())return!e.gcg()
if(e.c===w.c)if(e.d===w.d)x=(w.a!==w.b||e.e===w.e)&&e.f===w.f
else x=!1
else x=!1
return x},
gD(d){var x,w=this
if(!w.gcg())return B.ag(-C.b.gD(1),-C.b.gD(1),B.fV(D.p),C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)
x=w.a===w.b?B.fV(w.e):B.fV(D.p)
return B.ag(C.b.gD(w.c),C.b.gD(w.d),x,C.f_.gD(w.f),C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
vz(d,e,f){var x=e==null?this.c:e,w=d==null?this.e:d
return A.dj(w,x,f,this.f)},
vx(d,e){return this.vz(null,d,e)},
a0U(d,e){return this.vz(d,null,e)},
atY(d){return this.vz(null,null,d)},
avl(d,e){var x,w,v,u=this,t=d.a,s=u.a
if(t>=s&&t<=u.b)return u
x=u.c
w=u.d
v=x<=w
if(t<=s){if(e)return u.vz(d.b,u.b,t)
s=v?t:x
return u.vx(s,v?w:t)}if(e)return u.vz(d.b,s,t)
s=v?x:t
return u.vx(s,v?t:w)},
ma(d){if(this.geI().k(0,d))return this
return this.a0U(d.b,d.a)}}
A.jY.prototype={
j(d){return"KeyEventResult."+this.b}}
A.Zl.prototype={}
A.abS.prototype={
aH(d){var x,w=this.a
if(w.ax===this){if(!w.gl9()){x=w.w
x=x!=null&&x.w===w}else x=!0
if(x)w.Pc(D.Iq)
x=w.w
if(x!=null)x.amm(w)
x=w.Q
if(x!=null)x.apf(0,w)
w.ax=null}},
FA(){var x,w,v=this.a
if(v.ax===this){x=v.e
x.toString
w=A.aW9(x,!0);(w==null?v.e.r.f.e:w).Jw(v)}}}
A.Gc.prototype={
j(d){return"UnfocusDisposition."+this.b}}
A.cx.prototype={
gi6(){var x,w,v
if(this.a)return!0
for(x=this.gjS(),w=x.length,v=0;v<w;++v)x[v].toString
return!1},
si6(d){var x,w=this
if(d!==w.a){w.a=d
x=w.w
if(x!=null)x.Xy(w)}},
gdw(){var x,w,v,u
if(!this.b)return!1
x=this.gm9()
if(x!=null&&!x.gdw())return!1
for(w=this.gjS(),v=w.length,u=0;u<v;++u)w[u].toString
return!0},
sdw(d){var x,w=this
if(d!==w.b){w.b=d
if(w.gcZ()&&!d)w.Pc(D.Iq)
x=w.w
if(x!=null)x.Xy(w)}},
srb(d){return},
srd(d){},
gvL(){var x,w,v,u,t=this.y
if(t==null){x=B.a([],y.J)
for(t=this.as,w=t.length,v=0;v<t.length;t.length===w||(0,B.F)(t),++v){u=t[v]
C.d.Z(x,u.gvL())
x.push(u)}this.y=x
t=x}return t},
gyh(){var x=this.gvL()
return new B.aL(x,new A.abV(),B.ae(x).i("aL<1>"))},
gjS(){var x,w,v=this.x
if(v==null){x=B.a([],y.J)
w=this.Q
for(;w!=null;){x.push(w)
w=w.Q}this.x=x
v=x}return v},
gcZ(){if(!this.gl9()){var x=this.w
if(x==null)x=null
else{x=x.gjw()
x=x==null?null:C.d.v(x.gjS(),this)}x=x===!0}else x=!0
return x},
gl9(){var x=this.w
return(x==null?null:x.gjw())===this},
gpA(){return this.gm9()},
gm9(){var x,w,v,u
for(x=this.gjS(),w=x.length,v=0;v<w;++v){u=x[v]
if(u instanceof A.oa)return u}return null},
gbY(d){var x,w=this.e.gV(),v=w.eb(0,null),u=w.gon(),t=A.hp(v,new B.n(u.a,u.b))
u=w.eb(0,null)
v=w.gon()
x=A.hp(u,new B.n(v.c,v.d))
return new B.C(t.a,t.b,x.a,x.b)},
Pc(d){var x,w,v=this
if(!v.gcZ()){x=v.w
x=x==null||x.w!==v}else x=!1
if(x)return
w=v.gm9()
if(w==null)return
switch(d.a){case 0:if(w.gdw())C.d.sm(w.dx,0)
for(;!w.gdw();){w=w.gm9()
if(w==null){x=v.w
w=x==null?null:x.e}}w.n_(!1)
break
case 1:if(w.gdw())C.d.P(w.dx,v)
for(;!w.gdw();){x=w.gm9()
if(x!=null)C.d.P(x.dx,w)
w=w.gm9()
if(w==null){x=v.w
w=x==null?null:x.e}}w.n_(!0)
break}},
Pb(){return this.Pc(D.aqs)},
atO(){if(!this.z)return!1
this.z=!1
return!0},
A4(d){var x=this,w=x.w
if(w!=null){w.A4(x)
return}d.qH()
d.Je()
if(d!==x)x.Je()},
Yh(d,e,f){var x,w,v
if(f){x=e.gm9()
if(x!=null)C.d.P(x.dx,e)}e.Q=null
C.d.P(this.as,e)
for(x=this.gjS(),w=x.length,v=0;v<w;++v)x[v].y=null
this.y=null},
apf(d,e){return this.Yh(d,e,!0)},
arq(d){var x,w,v,u
this.w=d
for(x=this.gvL(),w=x.length,v=0;v<w;++v){u=x[v]
u.w=d
u.x=null}},
Jw(d){var x,w,v,u,t,s,r=this
if(d.Q===r)return
x=d.gm9()
w=d.gcZ()
v=d.Q
if(v!=null)v.Yh(0,d,x!=r.gpA())
r.as.push(d)
d.Q=r
d.x=null
d.arq(r.w)
for(v=d.gjS(),u=v.length,t=0;t<u;++t)v[t].y=null
if(w){v=r.w
if(v!=null){v=v.gjw()
if(v!=null)v.qH()}}if(x!=null&&d.e!=null&&d.gm9()!==x){s=d.e.a6(y.dc)
v=s==null?null:s.f
if(v!=null)v.LX(d,x)}if(d.ay){d.n_(!0)
d.ay=!1}},
asL(d,e,f){var x=this
x.e=d
x.f=e==null?x.f:e
return x.ax=new A.abS(x)},
p(d){var x=this.ax
if(x!=null)x.aH(0)
this.hE(0)},
Je(){var x=this
if(x.Q==null)return
if(x.gl9())x.qH()
x.av()},
mB(){this.n_(!0)},
n_(d){var x,w=this
if(!w.gdw())return
if(w.Q==null){w.ay=!0
return}w.qH()
if(w.gl9()){x=w.w.w
x=x==null||x===w}else x=!1
if(x)return
w.z=!0
w.A4(w)},
qH(){var x,w,v,u,t,s
for(x=C.d.ga9(this.gjS()),w=new B.y8(x,y.kC),v=y.g3,u=this;w.t();u=t){t=v.a(x.gO(x))
s=t.dx
C.d.P(s,u)
s.push(u)}},
dL(){var x,w,v,u=this
u.gcZ()
x=u.gcZ()&&!u.gl9()?"[IN FOCUS PATH]":""
w=x+(u.gl9()?"[PRIMARY FOCUS]":"")
x=B.ca(u)
v=w.length!==0?"("+w+")":""
return"<optimized out>#"+x+v},
$iaH:1}
A.oa.prototype={
gpA(){return this},
gyh(){if(!this.gdw())return D.Kd
return A.cx.prototype.gyh.call(this)},
qa(d){if(d.Q==null)this.Jw(d)
if(this.gcZ())d.n_(!0)
else d.qH()},
asS(d,e){var x,w=this
if(e.Q==null)w.Jw(e)
x=w.w
if(x!=null)x.x.push(new A.Zl(w,e))
x=w.w
if(x!=null)x.J8()},
n_(d){var x,w,v=this,u=v.dx
while(!0){if((u.length!==0?C.d.gJ(u):null)!=null)x=!(u.length!==0?C.d.gJ(u):null).gdw()
else x=!1
if(!x)break
u.pop()}w=u.length!==0?C.d.gJ(u):null
if(!d||w==null){if(v.gdw()){v.qH()
v.A4(v)}return}w.n_(!0)}}
A.jQ.prototype={
j(d){return"FocusHighlightMode."+this.b}}
A.a_W.prototype={}
A.a_X.prototype={}
A.jS.prototype={
gaE(){var x,w=$.S.gaf().z.h(0,this)
if(y.a.b(w)){x=w.gdu(w)
if(B.q(this).c.b(x))return x}return null}}
A.j.prototype={
dL(){var x=this.a
return x==null?"Widget":"Widget-"+x.j(0)},
k(d,e){if(e==null)return!1
return this.uc(0,e)},
gD(d){return B.r.prototype.gD.call(this,this)}}
A.aJ.prototype={
bn(d,e){},
C_(d){}}
A.CD.prototype={
cH(d){return new A.Ru(this,D.a9)}}
A.tp.prototype={
j(d){return"_ElementLifecycle."+this.b}}
A.aq.prototype={
k(d,e){if(e==null)return!1
return this===e},
gbb(){var x=this.f
x.toString
return x},
gV(){var x={}
x.a=null
new A.aaz(x).$1(this)
return x.a},
auF(d){var x=null
return B.qp(d,this,!0,C.cH,x,!1,x,x,C.bG,x,!1,!0,!0,C.di,x,y.Q)},
c2(d){},
fk(d,e,f){var x,w,v=this
if(e==null){if(d!=null)v.Mo(d)
return null}if(d!=null){x=d.gbb().k(0,e)
if(x){if(!J.h(d.d,f))v.a66(d,f)
x=d}else{x=d.gbb()
x=B.I(x)===B.I(e)&&J.h(x.a,e.a)
if(x){if(!J.h(d.d,f))v.a66(d,f)
d.cc(0,e)
x=d}else{v.Mo(d)
w=v.EN(e,f)
x=w}}}else{w=v.EN(e,f)
x=w}return x},
fA(d,e){var x,w,v=this
v.a=d
v.d=e
v.w=D.fZ
x=d!=null
v.e=x?B.b(d.e,"_depth")+1:1
if(x)v.r=d.r
w=v.gbb().a
if(w instanceof A.jS)v.r.apa(w,v)
v.K6()
v.KL()},
cc(d,e){this.f=e},
a66(d,e){new A.aaA(e).$1(d)},
Kd(d){this.d=d},
ZR(d){var x=d+1
if(B.b(this.e,"_depth")<x){this.e=x
this.c2(new A.aaw(x))}},
vO(){this.c2(new A.aay())
this.d=null},
B1(d){this.c2(new A.aax(d))
this.d=d},
apy(d,e){var x,w,v=$.S.gaf().z.h(0,d)
if(v==null)return null
x=v.gbb()
if(!(B.I(x)===B.I(e)&&J.h(x.a,e.a)))return null
w=v.a
if(w!=null){w.l5(v)
w.Mo(v)}this.r.b.P(0,v)
return v},
EN(d,e){var x,w,v,u,t,s=this,r=!1
if(r)A.aDB(B.I(d).j(0),C.iV,null)
try{x=d.a
if(x instanceof A.jS){w=s.apy(x,d)
if(w!=null){t=w
t.a=s
t.toString
t.ZR(B.b(s.e,"_depth"))
t.cG()
t.c2(A.aQI())
t.B1(e)
v=s.fk(w,d,e)
t=v
t.toString
return t}}u=d.cH(0)
u.fA(s,e)
return u}finally{if(r)A.aDA()}},
Mo(d){d.a=null
d.vO()
this.r.b.H(0,d)},
l5(d){},
cG(){var x=this,w=x.z,v=w==null,u=!v&&w.a!==0||x.Q
x.w=D.fZ
if(!v)w.aS(0)
x.Q=!1
x.K6()
x.KL()
if(x.as)x.r.Qa(x)
if(u)x.cC()},
fU(){var x,w,v=this,u=v.z
if(u!=null&&u.a!==0)for(x=B.q(u),u=new A.lK(u,u.zp(),x.i("lK<1>")),x=x.c;u.t();){w=u.d;(w==null?x.a(w):w).c_.P(0,v)}v.y=null
v.w=D.ara},
mF(){var x=this,w=x.f,v=w==null?null:w.a
if(v instanceof A.jS)x.r.arl(v,x)
x.z=x.f=null
x.w=D.Iz},
gmU(d){var x,w=this.gV()
if(w instanceof A.G){x=w.k1
x.toString
return x}return null},
BT(d,e){var x=this.z;(x==null?this.z=A.eD(y.a3):x).H(0,d)
d.Pi(this,e)
return y.hm.a(d.gbb())},
a6(d){var x=this.y,w=x==null?null:x.h(0,B.bU(d))
if(w!=null)return d.a(this.BT(w,null))
this.Q=!0
return null},
iQ(d){var x=this.y
return x==null?null:x.h(0,B.bU(d))},
KL(){var x=this.a
this.c=x==null?null:x.c},
K6(){var x=this.a
this.y=x==null?null:x.y},
avz(d){var x,w,v,u=this.a
while(!0){x=u==null
if(!x){w=u.gbb()
v=w instanceof B.bN?B.e1(w):null
w=B.bU(v==null?B.bg(w):v)!==B.bU(d)}else w=!1
if(!w)break
u=u.a}x=x?null:u.gbb()
return d.i("0?").a(x)},
pl(d){var x,w,v=this.a
for(x=y.a;w=v==null,!w;){if(x.b(v)&&d.b(v.gdu(v)))break
v=v.a}y.dn.a(v)
x=w?null:v.gdu(v)
return d.i("0?").a(x)},
a2a(d){var x,w,v=this.a
for(x=y.a,w=null;v!=null;){if(x.b(v)&&d.b(v.gdu(v)))w=v
v=v.a}x=w==null?null:w.gdu(w)
return d.i("0?").a(x)},
Dr(d){var x=this.a
for(;x!=null;){if(x instanceof A.bQ&&d.b(x.gV()))return d.a(x.gV())
x=x.a}return null},
ob(d){var x=this.a
while(!0){if(!(x!=null&&d.$1(x)))break
x=x.a}},
cC(){this.h7()},
fu(d){var x=this.c
if(x!=null)x.fu(d)},
dL(){var x=this.f
x=x==null?null:x.dL()
return x==null?"<optimized out>#"+B.ca(this)+"(DEFUNCT)":x},
h7(){var x=this
if(x.w!==D.fZ)return
if(x.as)return
x.as=!0
x.r.Qa(x)},
xT(){if(this.w!==D.fZ||!this.as)return
this.ln()},
$iP:1}
A.Pf.prototype={
bk(d){var x=this.d,w=new A.Et(x,A.aG(y.o0))
w.gb4()
w.gbh()
w.CW=!1
w.aeb(x)
return w}}
A.bQ.prototype={
gV(){var x=this.ch
x.toString
return x},
ai4(){var x=this.a
while(!0){if(!(x!=null&&!(x instanceof A.bQ)))break
x=x.a}return y.bD.a(x)},
ai3(){var x,w,v={},u=v.a=this.a
v.b=null
x=y.db
while(!0){if(!(u!=null&&!(u instanceof A.bQ)))break
if(x.b(u)){v.b=u
break}w=u.a
v.a=w
u=w}return v.b},
fA(d,e){var x,w=this
w.R5(d,e)
x=w.f
x.toString
w.ch=y.Y.a(x).bk(w)
w.B1(e)
w.as=!1},
cc(d,e){this.z0(0,e)
this.Y1()},
ln(){this.Y1()},
Y1(){var x=this,w=x.f
w.toString
y.Y.a(w).bn(x,x.gV())
x.as=!1},
aBm(d,a0,a1){var x,w,v,u,t,s,r,q,p=this,o=null,n=new A.ajQ(a1),m=new A.ajR(o),l=a0.length,k=l-1,j=d.length,i=j-1,h=j===l?d:B.at(l,$.aFw(),!1,y.Q),g=o,f=0,e=0
while(!0){if(!(e<=i&&f<=k))break
x=n.$1(d[e])
w=a0[f]
if(x!=null){l=x.gbb()
v=l instanceof B.bN?B.e1(l):o
j=B.bU(v==null?B.bg(l):v)
v=w instanceof B.bN?B.e1(w):o
l=!(j===B.bU(v==null?B.bg(w):v)&&J.h(l.a,w.a))}else l=!0
if(l)break
l=p.fk(x,w,m.$2(f,g))
l.toString
h[f]=l;++f;++e
g=l}u=i
while(!0){t=e<=u
if(!(t&&f<=k))break
x=n.$1(d[u])
w=a0[k]
if(x!=null){l=x.gbb()
v=l instanceof B.bN?B.e1(l):o
j=B.bU(v==null?B.bg(l):v)
v=w instanceof B.bN?B.e1(w):o
l=!(j===B.bU(v==null?B.bg(w):v)&&J.h(l.a,w.a))}else l=!0
if(l)break;--u;--k}if(t){s=B.E(y.er,y.Q)
for(;e<=u;){x=n.$1(d[e])
if(x!=null)if(x.gbb().a!=null){l=x.gbb().a
l.toString
s.l(0,l,x)}else{x.a=null
x.vO()
p.r.b.H(0,x)}++e}t=!0}else s=o
for(;f<=k;g=l){w=a0[f]
if(t){r=w.a
if(r!=null){x=s.h(0,r)
if(x!=null){l=x.gbb()
v=l instanceof B.bN?B.e1(l):o
j=B.bU(v==null?B.bg(l):v)
v=w instanceof B.bN?B.e1(w):o
if(j===B.bU(v==null?B.bg(w):v)&&J.h(l.a,r))s.P(0,r)
else x=o}}else x=o}else x=o
l=p.fk(x,w,m.$2(f,g))
l.toString
h[f]=l;++f}k=a0.length-1
while(!0){if(!(e<=i&&f<=k))break
l=p.fk(d[e],a0[f],m.$2(f,g))
l.toString
h[f]=l;++f;++e
g=l}if(t&&s.a!==0)for(l=s.gbi(s),j=B.q(l),j=j.i("@<1>").aG(j.z[1]),l=new B.cr(J.aC(l.a),l.b,j.i("cr<1,2>")),j=j.z[1];l.t();){q=l.a
if(q==null)q=j.a(q)
if(!a1.v(0,q)){q.a=null
q.vO()
p.r.b.H(0,q)}}return h},
fU(){this.R2()},
mF(){var x=this,w=x.f
w.toString
y.Y.a(w)
x.u9()
w.C_(x.gV())
x.ch.p(0)
x.ch=null},
Kd(d){var x,w=this,v=w.d
w.aaG(d)
x=w.cx
x.toString
x.nW(w.gV(),v,w.d)},
B1(d){var x,w,v=this
v.d=d
x=v.cx=v.ai4()
if(x!=null)x.nR(v.gV(),d)
w=v.ai3()
if(w!=null){x=w.f
x.toString
y.hC.a(x).vc(v.gV())}},
vO(){var x=this,w=x.cx
if(w!=null){w.o2(x.gV(),x.d)
x.cx=null}x.d=null},
nR(d,e){},
nW(d,e,f){},
o2(d,e){}}
A.Ru.prototype={
l5(d){this.mV(d)},
nR(d,e){},
nW(d,e,f){},
o2(d,e){}}
A.qP.prototype={
k(d,e){if(e==null)return!1
if(J.Y(e)!==B.I(this))return!1
return e instanceof A.qP&&this.b===e.b&&J.h(this.a,e.a)},
gD(d){return B.ag(this.b,this.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
A.a19.prototype={
ln(){return B.M(B.ch(null))}}
A.a1a.prototype={
cH(d){return B.M(B.ch(null))}}
A.r8.prototype={
bZ(d){var x=d.a,w=this.a
w[8]=x[8]
w[7]=x[7]
w[6]=x[6]
w[5]=x[5]
w[4]=x[4]
w[3]=x[3]
w[2]=x[2]
w[1]=x[1]
w[0]=x[0]},
j(d){return"[0] "+this.mN(0).j(0)+"\n[1] "+this.mN(1).j(0)+"\n[2] "+this.mN(2).j(0)+"\n"},
h(d,e){return this.a[e]},
l(d,e,f){this.a[e]=f},
k(d,e){var x,w,v
if(e==null)return!1
if(e instanceof A.r8){x=this.a
w=x[0]
v=e.a
x=w===v[0]&&x[1]===v[1]&&x[2]===v[2]&&x[3]===v[3]&&x[4]===v[4]&&x[5]===v[5]&&x[6]===v[6]&&x[7]===v[7]&&x[8]===v[8]}else x=!1
return x},
gD(d){return A.eG(this.a)},
mN(d){var x=new Float64Array(3),w=this.a
x[0]=w[d]
x[1]=w[3+d]
x[2]=w[6+d]
return new A.eN(x)},
ab(d,e){var x=new Float64Array(9),w=new A.r8(x)
w.bZ(this)
x[0]=x[0]*e
x[1]=x[1]*e
x[2]=x[2]*e
x[3]=x[3]*e
x[4]=x[4]*e
x[5]=x[5]*e
x[6]=x[6]*e
x[7]=x[7]*e
x[8]=x[8]*e
return w},
ac(d,e){var x,w=new Float64Array(9),v=new A.r8(w)
v.bZ(this)
x=e.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]
w[4]=w[4]+x[4]
w[5]=w[5]+x[5]
w[6]=w[6]+x[6]
w[7]=w[7]+x[7]
w[8]=w[8]+x[8]
return v},
aD(d,e){var x,w=new Float64Array(9),v=new A.r8(w)
v.bZ(this)
x=e.a
w[0]=w[0]-x[0]
w[1]=w[1]-x[1]
w[2]=w[2]-x[2]
w[3]=w[3]-x[3]
w[4]=w[4]-x[4]
w[5]=w[5]-x[5]
w[6]=w[6]-x[6]
w[7]=w[7]-x[7]
w[8]=w[8]-x[8]
return v}}
A.bv.prototype={
bZ(d){var x=d.a,w=this.a
w[15]=x[15]
w[14]=x[14]
w[13]=x[13]
w[12]=x[12]
w[11]=x[11]
w[10]=x[10]
w[9]=x[9]
w[8]=x[8]
w[7]=x[7]
w[6]=x[6]
w[5]=x[5]
w[4]=x[4]
w[3]=x[3]
w[2]=x[2]
w[1]=x[1]
w[0]=x[0]},
j(d){var x=this
return"[0] "+x.mN(0).j(0)+"\n[1] "+x.mN(1).j(0)+"\n[2] "+x.mN(2).j(0)+"\n[3] "+x.mN(3).j(0)+"\n"},
h(d,e){return this.a[e]},
l(d,e,f){this.a[e]=f},
k(d,e){var x,w,v
if(e==null)return!1
if(e instanceof A.bv){x=this.a
w=x[0]
v=e.a
x=w===v[0]&&x[1]===v[1]&&x[2]===v[2]&&x[3]===v[3]&&x[4]===v[4]&&x[5]===v[5]&&x[6]===v[6]&&x[7]===v[7]&&x[8]===v[8]&&x[9]===v[9]&&x[10]===v[10]&&x[11]===v[11]&&x[12]===v[12]&&x[13]===v[13]&&x[14]===v[14]&&x[15]===v[15]}else x=!1
return x},
gD(d){return A.eG(this.a)},
Gt(d,e){var x=e.a,w=this.a
w[d]=x[0]
w[4+d]=x[1]
w[8+d]=x[2]
w[12+d]=x[3]},
mN(d){var x=new Float64Array(4),w=this.a
x[0]=w[d]
x[1]=w[4+d]
x[2]=w[8+d]
x[3]=w[12+d]
return new A.kq(x)},
ab(d,e){var x=new A.bv(new Float64Array(16))
x.bZ(this)
x.tR(0,e,null,null)
return x},
ac(d,e){var x,w=new Float64Array(16),v=new A.bv(w)
v.bZ(this)
x=e.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]
w[4]=w[4]+x[4]
w[5]=w[5]+x[5]
w[6]=w[6]+x[6]
w[7]=w[7]+x[7]
w[8]=w[8]+x[8]
w[9]=w[9]+x[9]
w[10]=w[10]+x[10]
w[11]=w[11]+x[11]
w[12]=w[12]+x[12]
w[13]=w[13]+x[13]
w[14]=w[14]+x[14]
w[15]=w[15]+x[15]
return v},
aD(d,e){var x,w=new Float64Array(16),v=new A.bv(w)
v.bZ(this)
x=e.a
w[0]=w[0]-x[0]
w[1]=w[1]-x[1]
w[2]=w[2]-x[2]
w[3]=w[3]-x[3]
w[4]=w[4]-x[4]
w[5]=w[5]-x[5]
w[6]=w[6]-x[6]
w[7]=w[7]-x[7]
w[8]=w[8]-x[8]
w[9]=w[9]-x[9]
w[10]=w[10]-x[10]
w[11]=w[11]-x[11]
w[12]=w[12]-x[12]
w[13]=w[13]-x[13]
w[14]=w[14]-x[14]
w[15]=w[15]-x[15]
return v},
b0(d,e,f){var x=this.a,w=x[0],v=x[4],u=x[8],t=x[12],s=x[1],r=x[5],q=x[9],p=x[13],o=x[2],n=x[6],m=x[10],l=x[14],k=x[3],j=x[7],i=x[11],h=x[15]
x[12]=w*e+v*f+u*0+t
x[13]=s*e+r*f+q*0+p
x[14]=o*e+n*f+m*0+l
x[15]=k*e+j*f+i*0+h},
tR(d,e,f,g){var x,w,v,u
if(e instanceof A.eN){x=e.a
w=x[0]
v=x[1]
u=x[2]}else{if(typeof e=="number"){v=f==null?e:f
u=g==null?e:g}else throw B.c(B.ch(null))
w=e}x=this.a
x[0]=x[0]*w
x[1]=x[1]*w
x[2]=x[2]*w
x[3]=x[3]*w
x[4]=x[4]*v
x[5]=x[5]*v
x[6]=x[6]*v
x[7]=x[7]*v
x[8]=x[8]*u
x[9]=x[9]*u
x[10]=x[10]*u
x[11]=x[11]*u
x[12]=x[12]
x[13]=x[13]
x[14]=x[14]
x[15]=x[15]},
bI(d,e){return this.tR(d,e,null,null)},
QD(){var x=this.a
x[0]=0
x[1]=0
x[2]=0
x[3]=0
x[4]=0
x[5]=0
x[6]=0
x[7]=0
x[8]=0
x[9]=0
x[10]=0
x[11]=0
x[12]=0
x[13]=0
x[14]=0
x[15]=0},
f5(){var x=this.a
x[0]=1
x[1]=0
x[2]=0
x[3]=0
x[4]=0
x[5]=1
x[6]=0
x[7]=0
x[8]=0
x[9]=0
x[10]=1
x[11]=0
x[12]=0
x[13]=0
x[14]=0
x[15]=1},
nu(b3){var x,w,v,u,t=b3.a,s=t[0],r=t[1],q=t[2],p=t[3],o=t[4],n=t[5],m=t[6],l=t[7],k=t[8],j=t[9],i=t[10],h=t[11],g=t[12],f=t[13],e=t[14],d=t[15],a0=s*n-r*o,a1=s*m-q*o,a2=s*l-p*o,a3=r*m-q*n,a4=r*l-p*n,a5=q*l-p*m,a6=k*f-j*g,a7=k*e-i*g,a8=k*d-h*g,a9=j*e-i*f,b0=j*d-h*f,b1=i*d-h*e,b2=a0*b1-a1*b0+a2*a9+a3*a8-a4*a7+a5*a6
if(b2===0){this.bZ(b3)
return 0}x=1/b2
w=this.a
w[0]=(n*b1-m*b0+l*a9)*x
w[1]=(-r*b1+q*b0-p*a9)*x
w[2]=(f*a5-e*a4+d*a3)*x
w[3]=(-j*a5+i*a4-h*a3)*x
v=-o
w[4]=(v*b1+m*a8-l*a7)*x
w[5]=(s*b1-q*a8+p*a7)*x
u=-g
w[6]=(u*a5+e*a2-d*a1)*x
w[7]=(k*a5-i*a2+h*a1)*x
w[8]=(o*b0-n*a8+l*a6)*x
w[9]=(-s*b0+r*a8-p*a6)*x
w[10]=(g*a4-f*a2+d*a0)*x
w[11]=(-k*a4+j*a2-h*a0)*x
w[12]=(v*a9+n*a7-m*a6)*x
w[13]=(s*a9-r*a7+q*a6)*x
w[14]=(u*a3+f*a1-e*a0)*x
w[15]=(k*a3-j*a1+i*a0)*x
return b2},
dE(b3,b4){var x=this.a,w=x[0],v=x[4],u=x[8],t=x[12],s=x[1],r=x[5],q=x[9],p=x[13],o=x[2],n=x[6],m=x[10],l=x[14],k=x[3],j=x[7],i=x[11],h=x[15],g=b4.a,f=g[0],e=g[4],d=g[8],a0=g[12],a1=g[1],a2=g[5],a3=g[9],a4=g[13],a5=g[2],a6=g[6],a7=g[10],a8=g[14],a9=g[3],b0=g[7],b1=g[11],b2=g[15]
x[0]=w*f+v*a1+u*a5+t*a9
x[4]=w*e+v*a2+u*a6+t*b0
x[8]=w*d+v*a3+u*a7+t*b1
x[12]=w*a0+v*a4+u*a8+t*b2
x[1]=s*f+r*a1+q*a5+p*a9
x[5]=s*e+r*a2+q*a6+p*b0
x[9]=s*d+r*a3+q*a7+p*b1
x[13]=s*a0+r*a4+q*a8+p*b2
x[2]=o*f+n*a1+m*a5+l*a9
x[6]=o*e+n*a2+m*a6+l*b0
x[10]=o*d+n*a3+m*a7+l*b1
x[14]=o*a0+n*a4+m*a8+l*b2
x[3]=k*f+j*a1+i*a5+h*a9
x[7]=k*e+j*a2+i*a6+h*b0
x[11]=k*d+j*a3+i*a7+h*b1
x[15]=k*a0+j*a4+i*a8+h*b2},
F6(d){var x=new A.bv(new Float64Array(16))
x.bZ(this)
x.dE(0,d)
return x},
a1f(a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=$.aM3
if(a3==null)a3=$.aM3=new A.eN(new Float64Array(3))
x=this.a
a3.lB(x[0],x[1],x[2])
w=Math.sqrt(a3.gx_())
a3.lB(x[4],x[5],x[6])
v=Math.sqrt(a3.gx_())
a3.lB(x[8],x[9],x[10])
u=Math.sqrt(a3.gx_())
t=x[0]
s=x[5]
r=x[1]
q=x[4]
p=t*s-r*q
o=x[6]
n=x[2]
m=t*o-n*q
l=x[7]
k=x[3]
j=t*l-k*q
i=r*o-n*s
h=r*l-k*s
g=n*l-k*o
o=x[8]
k=x[9]
l=x[10]
n=x[11]
s=x[12]
if(-(k*g-l*h+n*i)*s+(o*g-l*j+n*m)*x[13]-(o*h-k*j+n*p)*x[14]+(o*i-k*m+l*p)*x[15]<0)w=-w
t=a4.a
t[0]=s
t[1]=x[13]
t[2]=x[14]
f=1/w
e=1/v
d=1/u
a0=$.aM1
if(a0==null)a0=$.aM1=new A.bv(new Float64Array(16))
a0.bZ(this)
x=a0.a
x[0]=x[0]*f
x[1]=x[1]*f
x[2]=x[2]*f
x[4]=x[4]*e
x[5]=x[5]*e
x[6]=x[6]*e
x[8]=x[8]*d
x[9]=x[9]*d
x[10]=x[10]*d
a1=$.aM2
if(a1==null)a1=$.aM2=new A.r8(new Float64Array(9))
a2=a1.a
a2[0]=x[0]
a2[1]=x[1]
a2[2]=x[2]
a2[3]=x[4]
a2[4]=x[5]
a2[5]=x[6]
a2[6]=x[8]
a2[7]=x[9]
a2[8]=x[10]
a5.a92(a1)
x=a6.a
x[0]=w
x[1]=v
x[2]=u},
aBg(d){var x=d.a,w=this.a,v=w[0],u=x[0],t=w[4],s=x[1],r=w[8],q=x[2],p=w[12],o=w[1],n=w[5],m=w[9],l=w[13],k=w[2],j=w[6],i=w[10]
w=w[14]
x[0]=v*u+t*s+r*q+p
x[1]=o*u+n*s+m*q+l
x[2]=k*u+j*s+i*q+w
return d},
aC(a0,a1){var x=a1.a,w=this.a,v=w[0],u=x[0],t=w[4],s=x[1],r=w[8],q=x[2],p=w[12],o=x[3],n=w[1],m=w[5],l=w[9],k=w[13],j=w[2],i=w[6],h=w[10],g=w[14],f=w[3],e=w[7],d=w[11]
w=w[15]
x[0]=v*u+t*s+r*q+p*o
x[1]=n*u+m*s+l*q+k*o
x[2]=j*u+i*s+h*q+g*o
x[3]=f*u+e*s+d*q+w*o
return a1},
Ft(d){var x=d.a,w=this.a,v=w[0],u=x[0],t=w[4],s=x[1],r=w[8],q=x[2],p=w[12],o=w[1],n=w[5],m=w[9],l=w[13],k=w[2],j=w[6],i=w[10],h=w[14],g=1/(w[3]*u+w[7]*s+w[11]*q+w[15])
x[0]=(v*u+t*s+r*q+p)*g
x[1]=(o*u+n*s+m*q+l)*g
x[2]=(k*u+j*s+i*q+h)*g
return d}}
A.eN.prototype={
lB(d,e,f){var x=this.a
x[0]=d
x[1]=e
x[2]=f},
bZ(d){var x=d.a,w=this.a
w[0]=x[0]
w[1]=x[1]
w[2]=x[2]},
j(d){var x=this.a
return"["+B.e(x[0])+","+B.e(x[1])+","+B.e(x[2])+"]"},
k(d,e){var x,w,v
if(e==null)return!1
if(e instanceof A.eN){x=this.a
w=x[0]
v=e.a
x=w===v[0]&&x[1]===v[1]&&x[2]===v[2]}else x=!1
return x},
gD(d){return A.eG(this.a)},
aD(d,e){var x,w=new Float64Array(3),v=new A.eN(w)
v.bZ(this)
x=e.a
w[0]=w[0]-x[0]
w[1]=w[1]-x[1]
w[2]=w[2]-x[2]
return v},
ac(d,e){var x,w=new Float64Array(3),v=new A.eN(w)
v.bZ(this)
x=e.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
return v},
ab(d,e){return this.ly(e)},
h(d,e){return this.a[e]},
l(d,e,f){this.a[e]=f},
gm(d){var x=this.a,w=x[0],v=x[1]
x=x[2]
return Math.sqrt(w*w+v*v+x*x)},
gx_(){var x=this.a,w=x[0],v=x[1]
x=x[2]
return w*w+v*v+x*x},
a1v(d){var x=d.a,w=this.a
return w[0]*x[0]+w[1]*x[1]+w[2]*x[2]},
ly(d){var x=new Float64Array(3),w=new A.eN(x)
w.bZ(this)
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w}}
A.kq.prototype={
yS(d,e,f,g){var x=this.a
x[3]=g
x[2]=f
x[1]=e
x[0]=d},
bZ(d){var x=d.a,w=this.a
w[3]=x[3]
w[2]=x[2]
w[1]=x[1]
w[0]=x[0]},
j(d){var x=this.a
return B.e(x[0])+","+B.e(x[1])+","+B.e(x[2])+","+B.e(x[3])},
k(d,e){var x,w,v
if(e==null)return!1
if(e instanceof A.kq){x=this.a
w=x[0]
v=e.a
x=w===v[0]&&x[1]===v[1]&&x[2]===v[2]&&x[3]===v[3]}else x=!1
return x},
gD(d){return A.eG(this.a)},
aD(d,e){var x,w=new Float64Array(4),v=new A.kq(w)
v.bZ(this)
x=e.a
w[0]=w[0]-x[0]
w[1]=w[1]-x[1]
w[2]=w[2]-x[2]
w[3]=w[3]-x[3]
return v},
ac(d,e){var x,w=new Float64Array(4),v=new A.kq(w)
v.bZ(this)
x=e.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]
return v},
ab(d,e){var x=new A.kq(new Float64Array(4))
x.bZ(this)
x.bI(0,e)
return x},
h(d,e){return this.a[e]},
l(d,e,f){this.a[e]=f},
gm(d){var x=this.a,w=x[0],v=x[1],u=x[2]
x=x[3]
return Math.sqrt(w*w+v*v+u*u+x*x)},
bI(d,e){var x=this.a
x[0]=x[0]*e
x[1]=x[1]*e
x[2]=x[2]*e
x[3]=x[3]*e}}
var z=a.updateTypes(["~()","K(K)","~(aq)","~(z)","u<bL>(ky)","k(oF,oF)","k(pC,pC)","t(r?)","fb?()","fb()","~(T)","~(hR,n)","~({curve:hh,descendant:z?,duration:b4,rect:C?})","t(bL)","bL(nm)","k(bL,bL)","k(bL)","bL(k)","t(o)","t(cx)","aq?(aq)","r?(k,aq?)","~(ax)","l(cC)"])
A.aiU.prototype={
$1(d){if(!J.aBc(d))this.a.M2(d)},
$S:128}
A.aiV.prototype={
$0(){var x=this.a
x.c=null
x.atx()},
$S:0}
A.a8a.prototype={
$0(){var x=$.bS.c8(),w=J.a63(J.a60($.bS.c8())),v=this.a,u=J.aG4(x,{width:v,height:this.b,colorType:J.a64(J.a62($.bS.c8())),alphaType:w,colorSpace:self.window.flutterCanvasKit.ColorSpace.SRGB},B.bP(this.c.buffer,0,null),4*v)
if(u==null)throw B.c(A.Ca("Failed to resurrect image from pixels."))
return u},
$S:129}
A.a8e.prototype={
$0(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this.a,k=l.a,j=l.b,i=l.c,h=l.d,g=l.e,f=l.f,e=l.w,d=l.z,a0=l.Q,a1=l.as,a2=l.at,a3=l.ch,a4=l.CW,a5=l.cx,a6=A.aNs(null)
if(a3!=null)a6.backgroundColor=B.zA(a3.w)
if(k!=null)a6.color=B.zA(k)
if(j!=null){x=J.aHs($.bS.c8())
w=j.a
if((w|1)===w)x=(x|J.aHT($.bS.c8()))>>>0
if((w|2)===w)x=(x|J.aHv($.bS.c8()))>>>0
a6.decoration=(w|4)===w?(x|J.aHj($.bS.c8()))>>>0:x}if(g!=null)a6.decorationThickness=g
if(i!=null)a6.decorationColor=B.zA(i)
if(h!=null)a6.decorationStyle=$.aTQ()[h.a]
if(e!=null)a6.textBaseline=$.aFJ()[e.a]
if(d!=null)a6.fontSize=d
if(a0!=null)a6.letterSpacing=a0
if(a1!=null)a6.wordSpacing=a1
if(a2!=null)a6.heightMultiplier=a2
switch(l.ax){case null:break
case D.HN:a6.halfLeading=!0
break
case D.HM:a6.halfLeading=!1
break}v=l.db
if(v===$){u=A.aEn(l.x,l.y)
B.c4(l.db,"effectiveFontFamilies")
l.db=u
v=u}a6.fontFamilies=v
if(f!=null||!1)a6.fontStyle=A.aFb(f,l.r)
if(a4!=null)a6.foregroundColor=B.zA(a4.w)
if(a5!=null){t=B.a([],y.ge)
for(w=a5.length,s=0;s<a5.length;a5.length===w||(0,B.F)(a5),++s){r=a5[s]
q=A.aYH(null)
q.color=B.zA(r.a)
p=r.b
o=new Float32Array(2)
o[0]=p.a
o[1]=p.b
q.offset=o
q.blurRadius=r.c
t.push(q)}a6.shadows=t}if(l.cy!=null){n=B.a([],y.fS)
for(s=0;s<1;++s){m=A.aYD(null)
m.name="tnum"
m.value=1
n.push(m)}a6.fontFeatures=n}return J.aGa($.bS.c8(),a6)},
$S:130}
A.ay4.prototype={
$1(d){return this.a===d},
$S:7}
A.aid.prototype={
$0(){var x,w=this.a,v=w.fy
v.toString
x=w.ch=w.ai9(v)
x.b=w.fx
v=w.d
v.toString
A.aF4(v)
w.d.appendChild(x.c)
x.aS(0)
v=w.cy.b
v.toString
w=w.fy
w.toString
v.KH(x,w)
x.rq()},
$S:0}
A.aoR.prototype={
$0(){for(var x=this.a.a;x.length>1;)x.pop()
y.W.a(C.d.gU(x)).xK(new A.aiN())},
$S:0}
A.aoS.prototype={
$0(){var x,w,v=y.W,u=this.a.a
if($.aoQ==null)v.a(C.d.gU(u)).bQ(0)
else{x=v.a(C.d.gU(u))
w=$.aoQ
w.toString
x.cc(0,w)}A.b3i(v.a(C.d.gU(u)))
$.aoQ=v.a(C.d.gU(u))
return new A.xE(v.a(C.d.gU(u)).d)},
$S:131}
A.ayX.prototype={
$2(d,e){var x,w=d.a,v=w.b*w.a
w=e.a
x=w.b*w.a
return J.u7(x,v)},
$S:z+5}
A.aic.prototype={
$2(d,e){return C.e.b9(d.c,e.c)},
$S:z+6}
A.ass.prototype={
$1(d){return this.a.b(d)},
$S:22}
A.ag3.prototype={
$2(d,e){this.a.l(0,this.b.a(d),this.c.a(e))},
$S:20}
A.ayG.prototype={
$0(){return null},
$S:z+8}
A.axL.prototype={
$0(){var x=window.navigator.platform,w=x==null?null:x.toLowerCase()
if(w==null)w=""
if(C.c.bc(w,"mac"))return D.bR
if(C.c.bc(w,"win"))return D.d7
if(C.c.v(w,"iphone")||C.c.v(w,"ipad")||C.c.v(w,"ipod"))return D.bk
if(C.c.v(w,"android"))return D.c9
if(window.matchMedia("only screen and (pointer: fine)").matches)return D.d6
return D.c9},
$S:z+9}
A.a8s.prototype={
$1(d){var x=this.a
return x.gdZ(x).BD(0,this.b,d)},
$S:28}
A.a8t.prototype={
$1(d){var x=this.a
return x.gdZ(x).a0z(0,this.b,d)},
$S:28}
A.a7z.prototype={
$3(d,e,f){if(d===e)return f+"="+C.e.aj(d,1)
return C.e.aj(d,1)+"<="+f+"<="+C.e.aj(e,1)},
$S:132}
A.ajq.prototype={
$0(){return this.a.$1(this.b)},
$S:38}
A.ajs.prototype={
$0(){return this.a.d2(this.b)},
$S:134}
A.ajr.prototype={
$0(){return this.a.f0(this.b)},
$S:135}
A.ahZ.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.ahY.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.ajU.prototype={
$0(){var x=B.a([],y.pf),w=this.a
x.push(B.aC0("The following RenderObject was being processed when the exception was fired",C.OF,w))
x.push(B.aC0("RenderObject",C.OG,w))
return x},
$S:11}
A.ajY.prototype={
$0(){this.b.$1(this.c.a(this.a.gaA()))},
$S:0}
A.ajW.prototype={
$1(d){d.ZQ()
if(B.b(d.CW,"_needsCompositing"))this.a.CW=!0},
$S:z+3}
A.ajX.prototype={
$1(d){d.r_()},
$S:z+3}
A.ajV.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=d.WA(k.c)
if(j.a){C.d.sm(k.d,0)
k.e.aS(0)
if(!k.f.a)k.a.a=!0}for(x=j.ga2T(),w=x.length,v=k.d,u=k.e,t=k.f,s=k.b,r=k.r,q=0;q<x.length;x.length===w||(0,B.F)(x),++q){p=x[q]
v.push(p)
p.b.push(s)
p.asn(t.aN)
if(t.b||!(s.gan(s) instanceof A.z)){p.NQ()
continue}if(p.gp6()==null||r)continue
if(!t.a37(p.gp6()))u.H(0,p)
o=v.length-1
for(n=0;n<o;++n){m=v[n]
l=p.gp6()
l.toString
if(!l.a37(m.gp6())){u.H(0,p)
u.H(0,m)}}}},
$S:z+3}
A.alP.prototype={
$1(d){var x,w,v=this.a
v.a=v.a|d.dy
v.b=v.b|d.db
if(v.w==null)v.w=d.k4
if(v.y==null)v.y=d.p1
if(v.z==null)v.z=d.p3
if(v.Q==null)v.Q=d.p4
if(v.as==null)v.as=d.R8
if(v.at==null)v.at=d.RG
if(v.ax==null)v.ax=d.rx
v.ay=d.ry
v.ch=d.to
if(v.CW==null)v.CW=d.x1
x=v.d
if(x.a==="")v.d=d.fx
x=v.e
if(x.a==="")v.e=d.fy
x=v.f
if(x.a==="")v.f=d.go
x=d.dx
if(x!=null){w=v.x;(w==null?v.x=B.aA(y.e):w).Z(0,x)}for(x=this.b.cy,x=B.ik(x,x.r,B.q(x).c),w=this.c;x.t();)w.H(0,A.aKb(x.d))
d.k3!=null
x=v.c
w=v.w
v.c=A.axP(d.fr,d.k4,x,w)
w=v.r
x=v.w
v.r=A.axP(d.id,d.k4,w,x)
v.cx=Math.max(v.cx,d.k2+d.k1)
return!0},
$S:z+13}
A.alN.prototype={
$1(d){return d.a},
$S:z+14}
A.aw8.prototype={
$1(d){return d.a9B()},
$S:z+4}
A.aw4.prototype={
$2(d,e){var x,w,v=d.w,u=A.tV(d,new B.n(v.a,v.b))
v=e.w
x=A.tV(e,new B.n(v.a,v.b))
w=C.e.b9(u.b,x.b)
if(w!==0)return-w
return-C.e.b9(u.a,x.a)},
$S:z+15}
A.aw7.prototype={
$1(d){var x=this,w=x.a
if(w.v(0,d))return
w.H(0,d)
w=x.b
if(w.am(0,d)){w=w.h(0,d)
w.toString
x.$1(w)}x.c.push(d)},
$S:23}
A.aw5.prototype={
$1(d){return d.e},
$S:z+16}
A.aw6.prototype={
$1(d){var x=this.a.h(0,d)
x.toString
return x},
$S:z+17}
A.axN.prototype={
$1(d){return d.a9C()},
$S:z+4}
A.alB.prototype={
$1(d){this.a.$0()},
$S:8}
A.alE.prototype={
$1(d){d.toString
this.a.$1(B.zs(d))},
$S:8}
A.alC.prototype={
$1(d){d.toString
this.a.$1(B.zs(d))},
$S:8}
A.alF.prototype={
$1(d){d.toString
this.a.$1(B.zs(d))},
$S:8}
A.alD.prototype={
$1(d){d.toString
this.a.$1(B.zs(d))},
$S:8}
A.alG.prototype={
$1(d){var x,w,v
d.toString
x=J.aAy(y.V.a(d),y.N,y.S)
w=x.h(0,"base")
w.toString
v=x.h(0,"extent")
v.toString
this.a.$1(A.dj(D.p,w,v,!1))},
$S:8}
A.alH.prototype={
$1(d){d.toString
this.a.$1(B.bZ(d))},
$S:8}
A.a7g.prototype={
$1(d){return this.a8m(d)},
a8m(d){var x=0,w=B.a2(y.l8),v,u=this,t,s
var $async$$1=B.a3(function(e,f){if(e===1)return B.a_(f,w)
while(true)switch(x){case 0:t=u.a.b
s=t
x=3
return B.a5(u.b.$1(t.iA(d)),$async$$1)
case 3:v=s.d7(f)
x=1
break
case 1:return B.a0(v,w)}})
return B.a1($async$$1,w)},
$S:61}
A.aj7.prototype={
$1(d){return!this.a.v(0,d)},
$S:z+18}
A.abV.prototype={
$1(d){return!d.gi6()&&d.gdw()},
$S:z+19}
A.aaz.prototype={
$1(d){if(d.w===D.Iz)return
else if(d instanceof A.bQ)this.a.a=d.gV()
else d.c2(this)},
$S:z+2}
A.aaA.prototype={
$1(d){d.Kd(this.a)
if(!(d instanceof A.bQ))d.c2(this)},
$S:z+2}
A.aaw.prototype={
$1(d){d.ZR(this.a)},
$S:z+2}
A.aay.prototype={
$1(d){d.vO()},
$S:z+2}
A.aax.prototype={
$1(d){d.B1(this.a)},
$S:z+2}
A.ajQ.prototype={
$1(d){var x=this.a.v(0,d)
return x?null:d},
$S:z+20}
A.ajR.prototype={
$2(d,e){return new A.qP(e,d,y.fZ)},
$S:z+21};(function aliases(){var x=A.a2G.prototype
x.acT=x.aS
x.acZ=x.ci
x.acX=x.c4
x.ad1=x.b0
x.ad_=x.ds
x.acY=x.jz
x.ad0=x.aC
x.acW=x.nr
x.acV=x.oZ
x.acU=x.ih
x=A.uI.prototype
x.aay=x.o_
x=A.GO.prototype
x.RB=x.cH
x=A.e9.prototype
x.abh=x.FD
x.Rh=x.bQ
x.Rg=x.AZ
x.Rl=x.cc
x.Rk=x.o7
x.Ri=x.jX
x.Rj=x.xK
x=A.f5.prototype
x.abg=x.kl
x.qj=x.cc
x.H6=x.jX
x=A.HX.prototype
x.acA=x.jX
x=A.DS.prototype
x.abf=x.aC
x=A.T.prototype
x.GQ=x.aX
x.eW=x.aH
x.QX=x.jd
x.GR=x.m8
x=A.cE.prototype
x.R1=x.H
x=A.aM.prototype
x.aa4=x.k
x=A.ex.prototype
x.z_=x.j
x=A.G.prototype
x.H7=x.f0
x.abr=x.xG
x.lG=x.cE
x.abq=x.eZ
x=A.k_.prototype
x.Rd=x.p
x.ab4=x.FV
x=A.cK.prototype
x.oz=x.hU
x.aaw=x.aX
x.aax=x.aH
x=A.l4.prototype
x.ab9=x.hU
x=A.cQ.prototype
x.H5=x.aH
x=A.z.prototype
x.qk=x.p
x.Ru=x.jd
x.fn=x.aX
x.abu=x.ap
x.abv=x.bo
x.abs=x.eZ
x.jJ=x.ii
x.H8=x.r_
x.H9=x.iP
x.Rv=x.qW
x.abt=x.l6
x.abw=x.dL
x.Rw=x.f6
x=A.KM.prototype
x.a9Z=x.rV
x=A.aJ.prototype
x.Rx=x.bn
x=A.aq.prototype
x.aaH=x.fk
x.R5=x.fA
x.z0=x.cc
x.aaG=x.Kd
x.R4=x.EN
x.mV=x.l5
x.H0=x.cG
x.R2=x.fU
x.u9=x.mF
x.H2=x.BT
x.R3=x.cC
x=A.bQ.prototype
x.ue=x.fA
x.oA=x.cc
x.Ha=x.ln
x.abx=x.mF})();(function installTearOffs(){var x=a._static_0,w=a._static_1,v=a._instance_0i,u=a._instance_1i,t=a._instance_1u,s=a._instance_0u,r=a.installInstanceTearOff
x(A,"b13","aYJ",0)
w(A,"b12","aUp",22)
v(A.W7.prototype,"ghL","p",0)
u(A.pv.prototype,"gjV","v",7)
t(A.T.prototype,"gOK","xU",10)
var q
t(q=A.G.prototype,"gbA","bH",1)
t(q,"gbE","bv",1)
t(q,"gbT","bz",1)
t(q,"gcs","bG",1)
s(q,"gF0","ap",0)
t(q=A.Et.prototype,"gbE","bv",1)
t(q,"gcs","bG",1)
w(A,"aR9","aYd",3)
w(A,"aRa","aYe",3)
s(q=A.z.prototype,"gfz","bo",0)
r(q,"gjt",0,2,null,["$2"],["bm"],11,0,1)
s(q,"ga3D","b_",0)
r(q,"gu_",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["f6","u0","or","qd","os"],12,0,0)
w(A,"b2L","aUm",23)
v(A.cx.prototype,"ghL","p",0)
w(A,"aQI","aVG",2)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(B.r,[A.a2G,A.a8O,A.a8d,A.cY,A.aiT,A.WX,A.a7P,A.f9,A.a89,A.l0,A.QL,A.nN,A.hN,A.aiM,A.ahX,A.Rs,A.afW,A.afX,A.a8b,A.nO,A.WW,A.aoY,A.LU,A.AD,A.LS,A.a8c,A.asb,A.pA,A.aaK,A.Wc,A.rD,A.a2F,A.akO,A.ie,A.My,A.ym,A.cG,A.aoO,A.GO,A.e9,A.aoW,A.aoV,A.br,A.bx,A.hE,A.aj1,A.a8L,A.ZG,A.a8W,A.rV,A.ai8,A.ws,A.rl,A.mJ,A.an1,A.ai9,A.oF,A.ajl,A.dV,A.av4,A.akf,A.xE,A.aoP,A.pC,A.aiN,A.C7,A.P8,A.P7,A.aoT,A.Lq,A.qx,A.ai_,A.xD,A.a7S,A.apD,A.wE,A.CF,A.afY,A.aok,A.eE,A.W7,A.apE,A.v5,A.Bx,A.Bz,A.FJ,A.ap9,A.XW,A.o1,A.a_O,A.aqL,A.lK,A.GR,A.a_p,A.bp,A.ct,A.ld,A.iW,A.FH,A.iG,A.bM,A.oG,A.DS,A.aH,A.a_e,A.ft,A.T,A.fs,A.a8r,A.cE,A.Mp,A.cQ,A.Hl,A.KB,A.Rr,A.b7,A.aw2,A.aw3,A.dp,A.a2O,A.nb,A.nm,A.alA,A.KM,A.a0w,A.aoL,A.af2,A.af4,A.Dl,A.a0Y,A.m5,A.aj6,A.da,A.Zl,A.abS,A.a_W,A.qP,A.r8,A.bv,A.eN,A.kq])
u(A.a7T,A.a2G)
u(A.Vw,B.he)
v(A.cY,[A.LB,A.LY,A.LV,A.LW,A.M1,A.M_,A.LX,A.M0,A.LE,A.LD,A.LC,A.LI,A.LJ,A.LO,A.LN,A.LG,A.LF,A.LL,A.LP,A.LH,A.LK,A.LM,A.LZ])
v(B.bN,[A.aiU,A.ay4,A.ass,A.a8s,A.a8t,A.a7z,A.ajW,A.ajX,A.ajV,A.alP,A.alN,A.aw8,A.aw7,A.aw5,A.aw6,A.axN,A.alB,A.alE,A.alC,A.alF,A.alD,A.alG,A.alH,A.a7g,A.aj7,A.abV,A.aaz,A.aaA,A.aaw,A.aay,A.aax,A.ajQ])
v(B.eg,[A.aiV,A.a8a,A.a8e,A.aid,A.aoR,A.aoS,A.ayG,A.axL,A.ajq,A.ajs,A.ajr,A.ahZ,A.ahY,A.ajU,A.ajY])
v(A.f9,[A.ho,A.xo,A.Az])
v(A.ho,[A.CU,A.LT,A.ux,A.uy,A.AA])
v(B.h1,[A.rb,A.tD,A.oI,A.r4,A.dx,A.AG,A.DT,A.Xw,A.Xx,A.DQ,A.q2,A.qi,A.C9,A.UX,A.xL,A.XR,A.FL,A.xJ,A.Aj,A.Lg,A.fb,A.BY,A.Aa,A.ty,A.oX,A.Oq,A.or,A.hP,A.jY,A.Gc,A.jQ,A.tp])
v(B.p,[A.Do,A.Bm])
v(A.hN,[A.uI,A.UW])
v(A.uI,[A.W3,A.M7,A.M8,A.Uj,A.G2,A.UU])
u(A.Ug,A.G2)
v(A.aaK,[A.m6,A.a_k])
v(A.e9,[A.f5,A.UQ])
v(A.f5,[A.a1s,A.HX,A.DU,A.DW,A.DX,A.DZ,A.E_])
u(A.DV,A.a1s)
u(A.DY,A.HX)
u(A.a9J,A.a_k)
u(A.UR,A.UQ)
v(A.dV,[A.Bp,A.DP,A.UB,A.UF,A.UD,A.UC,A.UE])
v(A.Bp,[A.Us,A.Ur,A.Uq,A.Uw,A.UA,A.Uz,A.Uu,A.Ut,A.Uy,A.Uv,A.Ux])
v(B.fL,[A.ayX,A.aic,A.ag3,A.aw4,A.ajR])
u(A.wt,A.ai_)
v(A.xD,[A.Ly,A.W4])
v(A.wE,[A.rm,A.hX])
u(A.GL,B.lJ)
u(A.pv,B.pD)
v(A.GR,[A.GQ,A.GS])
u(A.hh,A.DS)
v(A.hh,[A.hF,A.vh])
u(A.Bc,A.a_e)
v(A.ft,[A.CR,A.jS])
u(A.t8,A.CR)
v(A.cE,[A.bq,A.px])
u(A.aM,A.Mp)
u(A.uu,A.fs)
u(A.ex,A.cQ)
v(A.T,[A.a2o,A.a0x,A.a2Q])
u(A.z,A.a2o)
u(A.G,A.z)
u(A.Et,A.G)
u(A.k_,A.a0x)
v(A.k_,[A.UV,A.cK])
v(A.cK,[A.l4,A.ma,A.AH])
v(A.l4,[A.xZ,A.DK])
u(A.hR,A.a8r)
v(A.aw2,[A.asg,A.tx])
v(A.tx,[A.a2D,A.a3s])
u(A.Wt,A.a2O)
u(A.a2P,B.o_)
u(A.bL,A.a2Q)
u(A.ky,A.bp)
u(A.a7L,A.KM)
u(A.ail,A.a7L)
u(A.afM,A.a0w)
v(A.afM,[A.f,A.o])
u(A.cn,A.a0Y)
v(A.cn,[A.a_b,A.pf])
u(A.a3v,A.Dl)
u(A.oD,B.w7)
u(A.fd,B.di)
u(A.a_X,A.a_W)
u(A.cx,A.a_X)
u(A.oa,A.cx)
v(A.Bc,[A.j,A.aq])
v(A.j,[A.aJ,A.a1a])
u(A.CD,A.aJ)
u(A.Pf,A.CD)
v(A.aq,[A.bQ,A.a19])
u(A.Ru,A.bQ)
x(A.a_k,A.akO)
w(A.a1s,A.GO)
w(A.HX,A.GO)
x(A.a_e,B.az)
x(A.a0x,B.kP)
x(A.a2o,B.kP)
x(A.a2O,B.az)
x(A.a2Q,B.kP)
x(A.a0w,B.az)
x(A.a0Y,B.az)
x(A.a_W,B.kP)
x(A.a_X,E.ey)})()
B.cT(b.typeUniverse,JSON.parse('{"ho":{"f9":["1"]},"f5":{"e9":[]},"v5":{"ag_":[]},"dx":{"O":[]},"Vw":{"he":[]},"LB":{"cY":[]},"LY":{"cY":[]},"LV":{"cY":[]},"LW":{"cY":[]},"M1":{"cY":[]},"M_":{"cY":[]},"LX":{"cY":[]},"M0":{"cY":[]},"LE":{"cY":[]},"LD":{"cY":[]},"LC":{"cY":[]},"LI":{"cY":[]},"LJ":{"cY":[]},"LO":{"cY":[]},"LN":{"cY":[]},"LG":{"cY":[]},"LF":{"cY":[]},"LL":{"cY":[]},"LP":{"cY":[]},"LH":{"cY":[]},"LK":{"cY":[]},"LM":{"cY":[]},"LZ":{"cY":[]},"WX":{"cb":[]},"CU":{"ho":["p6"],"f9":["p6"]},"rb":{"O":[]},"Do":{"p":["l0"],"p.E":"l0"},"QL":{"bK":[]},"uI":{"hN":[]},"W3":{"hN":[]},"M7":{"hN":[],"a8u":[]},"M8":{"hN":[],"a8w":[]},"Uj":{"hN":[],"ahK":[]},"G2":{"hN":[],"G3":[]},"Ug":{"hN":[],"G3":[],"ahJ":[]},"UW":{"hN":[]},"UU":{"hN":[],"aig":[]},"LT":{"ho":["p8"],"f9":["p8"]},"ux":{"ho":["p9"],"f9":["p9"],"wn":[]},"uy":{"ho":["pa"],"f9":["pa"],"wq":[]},"AA":{"ho":["pb"],"f9":["pb"]},"xo":{"f9":["2"]},"Az":{"f9":["xc"]},"LS":{"ag_":[]},"tD":{"O":[]},"DV":{"f5":[],"e9":[],"a8w":[]},"DY":{"f5":[],"e9":[],"aig":[]},"DU":{"f5":[],"e9":[],"a8u":[]},"DW":{"f5":[],"e9":[],"ahJ":[]},"DX":{"f5":[],"e9":[],"ahK":[]},"br":{"wn":[]},"rV":{"wq":[]},"UR":{"e9":[]},"Bp":{"dV":[]},"DP":{"dV":[]},"UB":{"dV":[]},"UF":{"dV":[]},"UD":{"dV":[]},"UC":{"dV":[]},"UE":{"dV":[]},"Us":{"dV":[]},"Ur":{"dV":[]},"Uq":{"dV":[]},"Uw":{"dV":[]},"UA":{"dV":[]},"Uz":{"dV":[]},"Uu":{"dV":[]},"Ut":{"dV":[]},"Uy":{"dV":[]},"Uv":{"dV":[]},"Ux":{"dV":[]},"DZ":{"f5":[],"e9":[]},"oI":{"O":[]},"UQ":{"e9":[]},"E_":{"f5":[],"e9":[],"G3":[]},"qx":{"ai0":[]},"wt":{"ai0":[]},"Ly":{"xD":[]},"W4":{"xD":[]},"rm":{"wE":[]},"hX":{"wE":[]},"r4":{"O":[]},"GL":{"lJ":["1","2"],"aI":["1","2"],"aO":["1","2"],"aI.V":"2","aI.K":"1"},"pv":{"pD":["1"],"d7":["1"],"bX":["1"],"Z":["1"],"p":["1"],"d7.E":"1"},"GQ":{"GR":["1"],"aC3":["1"]},"GS":{"GR":["1"]},"Bm":{"Z":["1"],"p":["1"],"p.E":"1"},"xL":{"O":[]},"xJ":{"O":[]},"AG":{"O":[]},"DT":{"O":[]},"Xw":{"O":[]},"Xx":{"O":[]},"DQ":{"O":[]},"q2":{"O":[]},"qi":{"O":[]},"C9":{"O":[]},"UX":{"O":[]},"XR":{"O":[]},"FL":{"O":[]},"Aj":{"O":[]},"Lg":{"O":[]},"hF":{"hh":[]},"vh":{"hh":[]},"CR":{"ft":[]},"t8":{"ft":[]},"fb":{"O":[]},"BY":{"O":[]},"Aa":{"O":[]},"bq":{"cE":[]},"px":{"cE":[]},"eX":{"ih":[]},"G":{"z":[],"T":[],"ap":[]},"uu":{"fs":["G"]},"ex":{"cQ":[]},"ty":{"O":[]},"Et":{"G":[],"z":[],"T":[],"ap":[]},"k_":{"T":[]},"cK":{"T":[]},"ma":{"cK":[],"T":[]},"UV":{"T":[]},"l4":{"cK":[],"T":[]},"AH":{"cK":[],"T":[]},"xZ":{"l4":[],"cK":[],"T":[]},"DK":{"l4":[],"cK":[],"T":[]},"z":{"T":[],"ap":[]},"a2D":{"tx":[]},"a3s":{"tx":[]},"oX":{"O":[]},"bL":{"T":[]},"nb":{"bp":["nb"]},"ky":{"bp":["ky"]},"nm":{"bp":["nm"]},"oZ":{"bp":["oZ"]},"a2P":{"o_":["bL"],"dQ":[]},"Oq":{"O":[]},"a_b":{"cn":[]},"a3v":{"Dl":[]},"pf":{"cn":[]},"or":{"O":[]},"hP":{"O":[]},"jY":{"O":[]},"cx":{"aH":[]},"oa":{"cx":[],"aH":[]},"jQ":{"O":[]},"Gc":{"O":[]},"jS":{"ft":[]},"ab":{"j":[]},"aJ":{"j":[]},"aq":{"P":[]},"fY":{"aq":[],"P":[]},"f0":{"aq":[],"P":[]},"CD":{"aJ":[],"j":[]},"tp":{"O":[]},"Pf":{"aJ":[],"j":[]},"bQ":{"aq":[],"P":[]},"Ru":{"bQ":[],"aq":[],"P":[]},"a19":{"aq":[],"P":[]},"a1a":{"j":[]},"qG":{"ap":[]},"kb":{"bo":[]},"iq":{"bo":[]},"ir":{"bo":[]},"hS":{"bo":[]},"j9":{"bo":[]},"wo":{"dX":[]},"rx":{"dX":[],"ap":[]},"dG":{"z":[],"T":[],"ap":[]},"y9":{"dX":[],"ap":[]},"tq":{"hK":["cx"],"ba":[],"b3":[],"j":[],"hK.T":"cx"},"n3":{"O":[]},"lH":{"ba":[],"b3":[],"j":[]}}'))
B.js(b.typeUniverse,JSON.parse('{"bp":1,"DS":1}'))
var y=(function rtii(){var x=B.w
return{f:x("aM"),fd:x("ex"),U:x("cC"),aH:x("Lq"),dH:x("Ax"),u:x("nN"),z:x("ux"),ib:x("Az"),mb:x("LU"),p:x("uy"),gk:x("AA"),gK:x("nO"),gF:x("AB"),jz:x("AD"),ph:x("uB"),g8:x("uI"),o0:x("cK"),dE:x("My<ax>"),D:x("b6t"),d4:x("uS"),Q:x("aq"),q:x("Bw"),aQ:x("Bx"),h3:x("P7"),br:x("P8"),lf:x("Bz"),aT:x("O"),fF:x("ib<ky,bL>"),of:x("v8"),iH:x("v9"),bU:x("va"),dT:x("vb"),dG:x("ve"),ln:x("qx"),g3:x("oa"),K:x("ie<e9>"),A:x("ax"),g5:x("C7"),R:x("qL"),fZ:x("qP<aq?>"),a3:x("f0"),hm:x("ba"),o:x("i<qd>"),iw:x("i<he>"),i1:x("i<cY>"),ep:x("i<AD>"),r:x("i<hE>"),pf:x("i<dQ>"),j:x("i<aU>"),dP:x("i<v5>"),J:x("i<cx>"),eK:x("i<ie<@>>"),_:x("i<hN>"),oj:x("i<ag_>"),in:x("i<CF>"),gq:x("i<cm>"),ok:x("i<l0>"),P:x("i<n>"),aJ:x("i<dV>"),B:x("i<oF>"),fn:x("i<ai0>"),dy:x("i<f5>"),g:x("i<e9>"),kX:x("i<ct>"),i0:x("i<wE>"),C:x("i<z>"),i:x("i<rD>"),ni:x("i<Wc>"),L:x("i<bL>"),l:x("i<ln>"),fS:x("i<rQ>"),ge:x("i<rR>"),s:x("i<l>"),kK:x("i<xD>"),G:x("i<iG>"),E:x("i<nb>"),v:x("i<tx>"),dR:x("i<pA>"),nq:x("i<pC>"),fB:x("i<a2F>"),I:x("i<ky>"),mF:x("i<nm>"),n:x("i<K>"),t:x("i<k>"),lN:x("i<e9?>"),fQ:x("i<C?>"),er:x("ft"),df:x("hN"),h:x("k_"),oR:x("bI"),mW:x("u<bL>"),bd:x("u<K>"),gs:x("u<@>"),x:x("f"),V:x("aO<@,@>"),bP:x("aD<nm,bL>"),jI:x("aD<k,bL>"),oH:x("l4"),db:x("rk<cQ>"),hC:x("eH<cQ>"),m:x("wr"),w:x("f5"),W:x("DZ"),pk:x("e9"),b:x("o"),c:x("oP"),lx:x("b7A"),oy:x("b7B"),o9:x("b7C"),oL:x("Eg"),F:x("z"),Y:x("aJ"),gP:x("c9<ky>"),kQ:x("rD"),d:x("d0"),mi:x("bL"),e:x("rG"),hF:x("V"),mZ:x("p6"),cl:x("ln"),b5:x("p8"),jn:x("p9"),jt:x("pa"),e_:x("pb"),X:x("xo<nN,p7>"),a:x("fY"),N:x("l"),jm:x("aDo"),k:x("br"),H:x("rV"),T:x("b9"),y:x("rW"),lv:x("xL"),eZ:x("ly<bI>"),M:x("cR<n_>"),kC:x("y8<oa>"),mj:x("tq"),dc:x("lH"),jo:x("tx"),bi:x("Hl"),dx:x("K"),lT:x("@"),S:x("k"),g4:x("m6?"),l8:x("cC?"),lY:x("ux?"),hN:x("uz?"),mT:x("a8u?"),ck:x("a8w?"),e3:x("cK?"),mc:x("By?"),iD:x("r?"),mE:x("ahJ?"),di:x("l4?"),jw:x("ahK?"),bg:x("DU?"),cQ:x("DV?"),f3:x("DW?"),ao:x("DX?"),hy:x("DY?"),n8:x("e9?"),a6:x("E_?"),O:x("E1?"),pe:x("z?"),bD:x("bQ?"),Z:x("bL?"),gC:x("wZ?"),h4:x("ln?"),dn:x("fY?"),oI:x("br?"),cZ:x("G3?"),jX:x("K?"),cj:x("~()"),gw:x("~(it)"),dq:x("~(r?)")}})();(function constants(){var x=a.makeConstList
D.p=new A.xJ(1,"downstream")
D.cy=new B.di(-1,-1)
D.aX=new A.Aa(0,"horizontal")
D.aN=new A.Aa(1,"vertical")
D.nl=new A.m5("flutter/accessibility",C.aO,B.w("m5<r?>"))
D.de=new A.af2()
D.k4=new A.aoL()
D.jW=new A.q2(13,"modulate")
D.J6=new A.q2(20,"hardLight")
D.J7=new A.q2(26,"saturation")
D.jX=new A.q2(3,"srcOver")
D.ak=new A.ct(0,0)
D.x=new B.W(4278190080)
D.eI=new A.Aj(0,"tight")
D.dc=new A.Lg(0,"tight")
D.K2=new A.LV()
D.K3=new A.LY()
D.Kd=new B.jN(B.w("jN<cx>"))
D.c9=new A.fb(0,"android")
D.bk=new A.fb(2,"iOS")
D.bR=new A.fb(4,"macOS")
D.Ku=new A.UB()
D.nH=new A.DP()
D.cG=new A.a_b()
D.L7=new A.AG(0,"difference")
D.dL=new A.AG(1,"intersect")
D.u=new A.qi(0,"none")
D.a3=new A.qi(1,"hardEdge")
D.L8=new A.qi(2,"antiAlias")
D.h9=new A.qi(3,"antiAliasWithSaveLayer")
D.aE=new B.W(0)
D.Nr=new B.W(4039164096)
D.o3=new B.W(4281348144)
D.NI=new B.W(4294901760)
D.bf=new A.hF(0.25,0.1,0.25,1)
D.Oy=new A.Oq(1,"traversalOrder")
D.v=new B.V(0,0)
D.dO=new A.jQ(0,"touch")
D.dl=new A.jQ(1,"traditional")
D.dm=new A.BY(0,"accepted")
D.aP=new A.BY(1,"rejected")
D.oZ=new A.C9(0,"rawRgba")
D.Ql=new A.C9(1,"rawStraightRgba")
D.aL=B.a(x([]),B.w("i<aDo>"))
D.kI=new A.jY(0,"handled")
D.f0=new A.jY(1,"ignored")
D.p2=new A.jY(2,"skipRemainingHandlers")
D.iN=new A.f(4294967556)
D.iO=new A.f(4294967562)
D.iP=new A.f(4294967564)
D.dU=new A.or(0,"any")
D.cg=new A.or(3,"all")
D.cN=new A.r4(1,"prohibited")
D.pi=new A.eE(0,0,0,D.cN)
D.f1=new A.r4(0,"opportunity")
D.f2=new A.r4(2,"mandatory")
D.dp=new A.r4(3,"endOfText")
D.eW=new A.iW(6)
D.fr=new A.hP(0,"controlModifier")
D.fs=new A.hP(1,"shiftModifier")
D.ft=new A.hP(2,"altModifier")
D.fu=new A.hP(3,"metaModifier")
D.Cg=new A.hP(4,"capsLockModifier")
D.Ch=new A.hP(5,"numLockModifier")
D.Ci=new A.hP(6,"scrollLockModifier")
D.Cj=new A.hP(7,"functionModifier")
D.adZ=new A.hP(8,"symbolModifier")
D.q0=B.a(x([D.fr,D.fs,D.ft,D.fu,D.Cg,D.Ch,D.Ci,D.Cj,D.adZ]),B.w("i<hP>"))
D.dz=new A.fb(1,"fuchsia")
D.d6=new A.fb(3,"linux")
D.d7=new A.fb(5,"windows")
D.n_=new A.dx(0,"DoubleQuote")
D.eC=new A.dx(1,"SingleQuote")
D.b2=new A.dx(2,"HebrewLetter")
D.jw=new A.dx(3,"CR")
D.jx=new A.dx(4,"LF")
D.n3=new A.dx(5,"Newline")
D.fV=new A.dx(6,"Extend")
D.aqT=new A.dx(7,"RegionalIndicator")
D.fW=new A.dx(8,"Format")
D.fX=new A.dx(9,"Katakana")
D.bV=new A.dx(10,"ALetter")
D.n0=new A.dx(11,"MidLetter")
D.n1=new A.dx(12,"MidNum")
D.fT=new A.dx(13,"MidNumLet")
D.cC=new A.dx(14,"Numeric")
D.jv=new A.dx(15,"ExtendNumLet")
D.fU=new A.dx(16,"ZWJ")
D.n2=new A.dx(17,"WSegSpace")
D.It=new A.dx(18,"Unknown")
D.W4=B.a(x([D.n_,D.eC,D.b2,D.jw,D.jx,D.n3,D.fV,D.aqT,D.fW,D.fX,D.bV,D.n0,D.n1,D.fT,D.cC,D.jv,D.fU,D.n2,D.It]),B.w("i<dx>"))
D.eh=new B.n(1,0)
D.aey=new B.n(1,1)
D.bO=new B.n(0,1)
D.aeH=new B.n(-1,1)
D.Cw=new B.n(-1,0)
D.aeI=new B.n(-1,-1)
D.Cv=new B.n(0,-1)
D.aez=new B.n(1,-1)
D.ij=B.a(x([D.eh,D.aey,D.bO,D.aeH,D.Cw,D.aeI,D.Cv,D.aez]),y.P)
D.aU=new A.xJ(0,"upstream")
D.Z0=B.a(x([D.aU,D.p]),B.w("i<xJ>"))
D.a0D=B.a(x([0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0]),y.n)
D.lg=B.a(x([]),y.L)
D.a0S=B.a(x([]),y.G)
D.lp=new A.f(4294967558)
D.fg=new A.f(8589934848)
D.iS=new A.f(8589934849)
D.dt=new A.f(8589934850)
D.ed=new A.f(8589934851)
D.fh=new A.f(8589934852)
D.iT=new A.f(8589934853)
D.fi=new A.f(8589934854)
D.iU=new A.f(8589934855)
D.j=new B.n(0,0)
D.cn=new A.f(4294968065)
D.co=new A.f(4294968068)
D.el=new A.o(458978)
D.en=new A.o(458982)
D.j2=new A.o(458809)
D.ej=new A.o(458976)
D.fw=new A.o(458980)
D.fv=new A.o(18)
D.em=new A.o(458979)
D.fy=new A.o(458983)
D.j4=new A.o(458835)
D.j3=new A.o(458823)
D.ek=new A.o(458977)
D.fx=new A.o(458981)
D.a0Q=B.a(x([]),y.g)
D.abV=new B.v(0,{},D.a0Q,B.w("v<e9,e9>"))
D.ac2=new B.cy([0,"FontWeight.w100",1,"FontWeight.w200",2,"FontWeight.w300",3,"FontWeight.w400",4,"FontWeight.w500",5,"FontWeight.w600",6,"FontWeight.w700",7,"FontWeight.w800",8,"FontWeight.w900"],B.w("cy<k,l>"))
D.ae0=new A.rb(0,"clipRect")
D.ae1=new A.rb(2,"clipPath")
D.ae2=new A.rb(3,"transform")
D.ae3=new A.rb(4,"opacity")
D.k2=new A.af4()
D.cr=new A.oD("flutter/platform",D.k2)
D.aeL=new A.oD("flutter/mousecursor",C.eJ)
D.bj=new A.DQ(0,"fill")
D.ax=new A.DQ(1,"stroke")
D.cs=new A.DT(0,"nonZero")
D.j1=new A.DT(1,"evenOdd")
D.c7=new A.oI(0,"created")
D.aT=new A.oI(1,"active")
D.ei=new A.oI(2,"pendingRetention")
D.ahi=new A.oI(3,"pendingUpdate")
D.CF=new A.oI(4,"released")
D.j5=new A.UX(4,"bottom")
D.mg=new B.C(-1e9,-1e9,1e9,1e9)
D.eq=new A.oX(0,"idle")
D.j8=new A.oX(3,"persistentCallbacks")
D.ahT=new A.oX(4,"postFrameCallbacks")
D.ai6=new B.d0(1024)
D.ai7=new B.d0(1048576)
D.ai8=new B.d0(16384)
D.H6=new B.d0(2)
D.ai9=new B.d0(2048)
D.aia=new B.d0(2097152)
D.aib=new B.d0(256)
D.aic=new B.d0(262144)
D.aid=new B.d0(32768)
D.aie=new B.d0(4096)
D.aif=new B.d0(512)
D.aig=new B.d0(524288)
D.aih=new B.d0(65536)
D.aii=new B.d0(8192)
D.H9=new B.d1(1024)
D.Ha=new B.d1(1048576)
D.ail=new B.d1(16777216)
D.He=new B.d1(2048)
D.Hf=new B.d1(2097152)
D.aim=new B.d1(262144)
D.Hi=new B.d1(4)
D.Hj=new B.d1(4096)
D.ain=new B.d1(4194304)
D.aip=new B.d1(8388608)
D.ahk=new B.j8(3,"invertedStylus")
D.ajh=new B.V(1e5,1e5)
D.fH=new A.Xw(0,"butt")
D.fI=new A.Xx(0,"miter")
D.ak_=new A.cG(0)
D.aka=new A.cG(0)
D.ak8=new A.cG(0)
D.ak6=new A.cG(0)
D.ak7=new A.cG(0)
D.ak5=new A.cG(0)
D.ak9=new A.cG(0)
D.ak4=new A.cG(0)
D.ak1=new A.cG(0)
D.ak3=new A.cG(0)
D.ak0=new A.cG(0)
D.ak2=new A.cG(0)
D.akb=new A.cG(1)
D.akc=new A.cG(10)
D.akd=new A.cG(11)
D.ake=new A.cG(12)
D.akf=new A.cG(13)
D.akg=new A.cG(14)
D.akh=new A.cG(15)
D.aki=new A.cG(16)
D.akj=new A.cG(2)
D.akk=new A.cG(3)
D.akl=new A.cG(4)
D.akm=new A.cG(5)
D.akn=new A.cG(6)
D.ako=new A.cG(7)
D.akp=new A.cG(8)
D.akq=new A.cG(9)
D.et=new A.pf("basic")
D.O=new A.xL(0,"alphabetic")
D.i=new A.FH(0)
D.HM=new A.FL(0,"proportional")
D.HN=new A.FL(1,"even")
D.HJ=new A.FH(1)
D.akN=new A.XR(1,"double")
D.b1=new A.xL(1,"ideographic")
D.apE=B.b1("W")
D.aqs=new A.Gc(0,"scope")
D.Iq=new A.Gc(1,"previouslyFocusedChild")
D.aqt=new B.cR(11264,55297,C.C,y.M)
D.aqu=new B.cR(1425,1775,C.ap,y.M)
D.aqv=new B.cR(1786,2303,C.ap,y.M)
D.aqw=new B.cR(192,214,C.C,y.M)
D.aqx=new B.cR(216,246,C.C,y.M)
D.aqy=new B.cR(2304,8191,C.C,y.M)
D.aqz=new B.cR(248,696,C.C,y.M)
D.aqA=new B.cR(55298,55299,C.ap,y.M)
D.aqB=new B.cR(55300,55353,C.C,y.M)
D.aqC=new B.cR(55354,55355,C.ap,y.M)
D.aqD=new B.cR(55356,56319,C.C,y.M)
D.aqE=new B.cR(63744,64284,C.C,y.M)
D.aqF=new B.cR(64285,65023,C.ap,y.M)
D.aqG=new B.cR(65024,65135,C.C,y.M)
D.aqH=new B.cR(65136,65276,C.ap,y.M)
D.aqI=new B.cR(65277,65535,C.C,y.M)
D.aqJ=new B.cR(65,90,C.C,y.M)
D.aqK=new B.cR(768,1424,C.C,y.M)
D.aqL=new B.cR(8206,8206,C.C,y.M)
D.aqM=new B.cR(8207,8207,C.ap,y.M)
D.aqN=new B.cR(97,122,C.C,y.M)
D.a9=new A.tp(0,"initial")
D.fZ=new A.tp(1,"active")
D.ara=new A.tp(2,"inactive")
D.Iz=new A.tp(3,"defunct")
D.arc=new A.a_O(1)
D.ard=new A.a_O(-1)
D.Z=new A.ty(0,"minWidth")
D.a2=new A.ty(1,"maxWidth")
D.ad=new A.ty(2,"minHeight")
D.bd=new A.ty(3,"maxHeight")
D.arm=new A.da(D.fr,D.dU)
D.hy=new A.or(1,"left")
D.arn=new A.da(D.fr,D.hy)
D.hz=new A.or(2,"right")
D.aro=new A.da(D.fr,D.hz)
D.arp=new A.da(D.fr,D.cg)
D.arq=new A.da(D.fs,D.dU)
D.arr=new A.da(D.fs,D.hy)
D.ars=new A.da(D.fs,D.hz)
D.art=new A.da(D.fs,D.cg)
D.aru=new A.da(D.ft,D.dU)
D.arv=new A.da(D.ft,D.hy)
D.arw=new A.da(D.ft,D.hz)
D.arx=new A.da(D.ft,D.cg)
D.ary=new A.da(D.fu,D.dU)
D.arz=new A.da(D.fu,D.hy)
D.arA=new A.da(D.fu,D.hz)
D.arB=new A.da(D.fu,D.cg)
D.arC=new A.da(D.Cg,D.cg)
D.arD=new A.da(D.Ch,D.cg)
D.arE=new A.da(D.Ci,D.cg)
D.arF=new A.da(D.Cj,D.cg)
D.arH=new A.a1a(null)
D.arQ=new A.tD(0,"addText")
D.arS=new A.tD(2,"pushStyle")
D.II=new A.tD(3,"addPlaceholder")
D.arR=new A.tD(1,"pop")
D.arT=new A.pA(D.arR,null,null,null)})();(function staticFields(){$.Fg=B.a([],B.w("i<ho<r>>"))
$.Ff=B.a([],B.w("i<WW>"))
$.aNt=!1
$.aNL=0
$.JF=0
$.ns=B.a([],B.w("i<m6>"))
$.azM=B.a([],y.B)
$.aNJ=!1
$.aoQ=null
$.aF5=B.a([],y.g)
$.aNz=B.E(B.w("FJ"),B.w("XW"))
$.aPK=-1
$.aPJ=-1
$.aPL=""
$.aPI=""
$.aPM=-1
$.aPw=null
$.aDz=B.a([],B.w("i<b8P?>"))
$.hI=null
$.rj=null
$.oU=null
$.c6=null
$.Ws=null
$.aKa=0
$.aK8=B.E(y.S,y.D)
$.aK9=B.E(y.D,y.S)
$.alO=0
$.S=null
$.aM3=null
$.aM1=null
$.aM2=null})();(function lazyInitializers(){var x=a.lazy,w=a.lazyFinal
x($,"b6g","aFj",()=>B.Ds(8))
w($,"b8L","aSU",()=>A.aOi(0,0,1))
w($,"bad","aTJ",()=>B.a([J.aHQ(J.m2(B.au())),J.aH5(J.m2(B.au())),J.aHh(J.m2(B.au())),J.aAV(J.m2(B.au())),J.aHm(J.m2(B.au())),J.aHE(J.m2(B.au())),J.aGE(J.m2(B.au())),J.aH4(J.m2(B.au())),J.aH3(J.m2(B.au()))],B.w("i<xa>")))
w($,"ban","aTR",()=>B.a([J.aHz(J.aB0(B.au())),J.aHf(J.aB0(B.au()))],B.w("i<xl>")))
w($,"bak","aTP",()=>B.a([J.aHg(J.ua(B.au())),J.aHB(J.ua(B.au())),J.aGH(J.ua(B.au())),J.aHe(J.ua(B.au())),J.aHN(J.ua(B.au())),J.aH0(J.ua(B.au()))],B.w("i<xi>")))
w($,"bao","aTS",()=>B.a([J.aGz(J.Ki(B.au())),J.aGS(J.Ki(B.au())),J.aGT(J.Ki(B.au())),J.aGR(J.Ki(B.au()))],B.w("i<xm>")))
w($,"bag","aTL",()=>B.a([J.aB1(J.u9(B.au())),J.aAS(J.u9(B.au())),J.aHb(J.u9(B.au())),J.aHc(J.u9(B.au())),J.aHa(J.u9(B.au())),J.aHP(J.u9(B.au()))],B.w("i<xe>")))
w($,"bah","aTM",()=>B.a([J.aB1(J.aAX(B.au())),J.aAS(J.aAX(B.au()))],B.w("i<xf>")))
w($,"bac","a5V",()=>B.a([J.aHV(J.aAQ(B.au())),J.aH1(J.aAQ(B.au()))],B.w("i<x9>")))
w($,"baa","aTI",()=>B.a([J.aAV(J.Ke(B.au())),J.aAZ(J.Ke(B.au())),J.aHt(J.Ke(B.au())),J.aHd(J.Ke(B.au()))],B.w("i<x7>")))
w($,"bai","aTN",()=>B.a([J.aGG(J.a65(B.au())),J.aAY(J.a65(B.au())),J.aHH(J.a65(B.au()))],B.w("i<xg>")))
w($,"bae","aFI",()=>B.a([J.aH6(J.aAW(B.au())),J.aHO(J.aAW(B.au()))],B.w("i<xb>")))
w($,"ba9","aAs",()=>B.a([J.aGJ(J.cJ(B.au())),J.aHI(J.cJ(B.au())),J.aGW(J.cJ(B.au())),J.aHM(J.cJ(B.au())),J.aH_(J.cJ(B.au())),J.aHK(J.cJ(B.au())),J.aGY(J.cJ(B.au())),J.aHL(J.cJ(B.au())),J.aGZ(J.cJ(B.au())),J.aHJ(J.cJ(B.au())),J.aGX(J.cJ(B.au())),J.aHW(J.cJ(B.au())),J.aHy(J.cJ(B.au())),J.aHq(J.cJ(B.au())),J.aHD(J.cJ(B.au())),J.aHu(J.cJ(B.au())),J.aGO(J.cJ(B.au())),J.aHi(J.cJ(B.au())),J.aGM(J.cJ(B.au())),J.aGL(J.cJ(B.au())),J.aH7(J.cJ(B.au())),J.aHG(J.cJ(B.au())),J.aAP(J.cJ(B.au())),J.aH2(J.cJ(B.au())),J.aHr(J.cJ(B.au())),J.aH8(J.cJ(B.au())),J.aHC(J.cJ(B.au())),J.aGK(J.cJ(B.au())),J.aHk(J.cJ(B.au()))],B.w("i<x6>")))
w($,"baj","aTO",()=>B.a([J.aHp(J.a66(B.au())),J.aAY(J.a66(B.au())),J.aGD(J.a66(B.au()))],B.w("i<xh>")))
w($,"bam","aTQ",()=>B.a([J.aAZ(J.zL(B.au())),J.aGV(J.zL(B.au())),J.aGU(J.zL(B.au())),J.aGP(J.zL(B.au())),J.aHU(J.zL(B.au()))],B.w("i<xk>")))
w($,"bal","aFJ",()=>B.a([J.aGA(J.aB_(B.au())),J.aH9(J.aB_(B.au()))],B.w("i<xj>")))
w($,"baf","aTK",()=>B.a([J.aGB(J.u8(B.au())),J.aGy(J.u8(B.au())),J.aGC(J.u8(B.au())),J.aHR(J.u8(B.au())),J.aGF(J.u8(B.au())),J.aHn(J.u8(B.au()))],B.w("i<xd>")))
w($,"b6o","aRL",()=>A.aY1())
x($,"b6n","a5E",()=>$.aRL())
x($,"baB","K9",()=>self.window.FinalizationRegistry!=null)
w($,"b7S","a5K",()=>{var v=B.w("f9<r>")
return new A.WW(1024,A.aKr(v),B.E(v,B.w("aC3<f9<r>>")))})
x($,"b6l","zD",()=>{var v=B.w("f9<r>")
return new A.aoY(500,A.aKr(v),B.E(v,B.w("aC3<f9<r>>")))})
w($,"b6k","aRJ",()=>new self.window.flutterCanvasKit.Paint())
w($,"b6j","aRI",()=>{var v=new self.window.flutterCanvasKit.Paint()
J.a69(v,0)
return v})
w($,"b7K","aSn",()=>A.aOi(0,0,1))
w($,"baO","aFO",()=>{var v=A.aNM()
v.setAttribute("width",0)
v.setAttribute("height",0)
C.h.scb(v.style,"absolute")
return v})
w($,"b8G","aFx",()=>B.Ds(4))
x($,"b7T","aSt",()=>{var v=B.aVF("flt-ruler-host"),u=new A.W7(v),t=v.style
C.h.scb(t,"fixed")
C.h.saBD(t,"hidden")
C.h.sOh(t,"hidden")
C.h.so9(t,"0")
C.h.slg(t,"0")
C.h.sby(t,"0")
C.h.sbW(t,"0")
t=B.b3S().z.ga3M()
t.appendChild(v)
B.b4Y(u.ghL(u))
return u})
w($,"bav","aTY",()=>B.aZn(B.a([D.aqJ,D.aqN,D.aqw,D.aqx,D.aqz,D.aqK,D.aqu,D.aqv,D.aqy,D.aqL,D.aqM,D.aqt,D.aqA,D.aqB,D.aqC,D.aqD,D.aqE,D.aqF,D.aqG,D.aqH,D.aqI],B.w("i<cR<n_>>")),null,B.w("n_?")))
x($,"bb8","Ka",()=>B.aZo("000a!E000b000cF000d!D000w!R000y!A0013!B0018!M001a!N001c001lO001m!L001n!M001t002iK002n!P002p003eK003p!F004q!K004t!I0051!K0053!L0056!K005c005yK0060006uK006w00k7K00ke00lbK00lc00ofG00og00okK00om00onK00oq00otK00ou!M00ov!K00p2!K00p3!L00p400p6K00p8!K00pa00ptK00pv00s5K00s700w1K00w300w9G00wa010vK010x011yK01210124K0126!K0127!L0128013cK013d!M013e!K013l014tG014v!G014x014yG01500151G0153!G015c0162C0167016aC016b!K016c!L016o016tI01700171M0174017eG017g!I017k018qK018r019bG019c019lO019n!O019o!M019q019rK019s!G019t01cjK01cl!K01cm01csG01ct!I01cv01d0G01d101d2K01d301d4G01d601d9G01da01dbK01dc01dlO01dm01doK01dr!K01e7!I01e8!K01e9!G01ea01f3K01f401fuG01fx01idK01ie01ioG01ip!K01j401jdO01je01kaK01kb01kjG01kk01klK01ko!M01kq!K01kt!G01kw01lhK01li01llG01lm!K01ln01lvG01lw!K01lx01lzG01m0!K01m101m5G01mo01ncK01nd01nfG01nk01nuK01pc01pwK01py01qfK01qr01r5G01r6!I01r701s3G01s401tlK01tm01toG01tp!K01tq01u7G01u8!K01u901ufG01ug01upK01uq01urG01uu01v3O01v501vkK01vl01vnG01vp01vwK01vz01w0K01w301woK01wq01wwK01wy!K01x201x5K01x8!G01x9!K01xa01xgG01xj01xkG01xn01xpG01xq!K01xz!G01y401y5K01y701y9K01ya01ybG01ye01ynO01yo01ypK01z0!K01z2!G01z501z7G01z901zeK01zj01zkK01zn0208K020a020gK020i020jK020l020mK020o020pK020s!G020u020yG02130214G02170219G021d!G021l021oK021q!K021y0227O02280229G022a022cK022d!G022p022rG022t0231K02330235K0237023sK023u0240K02420243K02450249K024c!G024d!K024e024lG024n024pG024r024tG024w!K025c025dK025e025fG025i025rO0261!K02620267G0269026bG026d026kK026n026oK026r027cK027e027kK027m027nK027p027tK027w!G027x!K027y0284G02870288G028b028dG028l028nG028s028tK028v028xK028y028zG0292029bO029d!K029u!G029v!K029x02a2K02a602a8K02aa02adK02ah02aiK02ak!K02am02anK02ar02asK02aw02ayK02b202bdK02bi02bmG02bq02bsG02bu02bxG02c0!K02c7!G02cm02cvO02dc02dgG02dh02doK02dq02dsK02du02egK02ei02exK02f1!K02f202f8G02fa02fcG02fe02fhG02fp02fqG02fs02fuK02g002g1K02g202g3G02g602gfO02gw!K02gx02gzG02h102h8K02ha02hcK02he02i0K02i202ibK02id02ihK02ik!G02il!K02im02isG02iu02iwG02iy02j1G02j902jaG02ji!K02jk02jlK02jm02jnG02jq02jzO02k102k2K02kg02kjG02kk02ksK02ku02kwK02ky02m2K02m302m4G02m5!K02m602mcG02me02mgG02mi02mlG02mm!K02ms02muK02mv!G02n302n5K02n602n7G02na02njO02nu02nzK02o102o3G02o502omK02oq02pdK02pf02pnK02pp!K02ps02pyK02q2!G02q702qcG02qe!G02qg02qnG02qu02r3O02r602r7G02sx!G02t002t6G02tj02tqG02ts02u1O02wh!G02wk02wsG02x402x9G02xc02xlO02yo!K02zc02zdG02zk02ztO0305!G0307!G0309!G030e030fG030g030nK030p031oK031t032cG032e032fG032g032kK032l032vG032x033wG0346!G036z037iG037k037tO03860389G038e038gG038i038kG038n038tG038x0390G039e039pG039r!G039s03a1O03a203a5G03a803b9K03bb!K03bh!K03bk03cqK03cs03m0K03m203m5K03m803meK03mg!K03mi03mlK03mo03nsK03nu03nxK03o003owK03oy03p1K03p403paK03pc!K03pe03phK03pk03pyK03q003rkK03rm03rpK03rs03tmK03tp03trG03uo03v3K03vk03xxK03y003y5K03y904fgK04fj04fzK04g0!R04g104gqK04gw04iyK04j204jcK04jk04jwK04jy04k1K04k204k4G04kg04kxK04ky04l0G04lc04ltK04lu04lvG04m804mkK04mm04moK04mq04mrG04ok04pfG04pp!G04ps04q1O04qz04r1G04r2!I04r404rdO04rk04u0K04u804ucK04ud04ueG04uf04vcK04vd!G04ve!K04vk04xhK04xs04ymK04yo04yzG04z404zfG04zq04zzO053k053tO054w055iK055j055nG0579057iG057k058cG058f!G058g058pO058w0595O059s05a8G05c005c4G05c505dfK05dg05dwG05dx05e3K05e805ehO05ez05f7G05fk05fmG05fn05ggK05gh05gtG05gu05gvK05gw05h5O05h605idK05ie05irG05j405k3K05k405knG05kw05l5O05l905lbK05lc05llO05lm05mlK05mo05mwK05n405oaK05od05ofK05ow05oyG05p005pkG05pl05poK05pp!G05pq05pvK05pw!G05px05pyK05pz05q1G05q2!K05q805vjK05vk05x5G05x705xbG05xc0651K06540659K065c066dK066g066lK066o066vK066x!K066z!K0671!K0673067xK0680069gK069i069oK069q!K069u069wK069y06a4K06a806abK06ae06ajK06ao06b0K06b606b8K06ba06bgK06bk06bqR06bs06buR06bw!G06bx!Q06by06bzI06c806c9N06ck!N06cn!L06co06cpF06cq06cuI06cv!P06db06dcP06dg!M06dw!P06e7!R06e806ecI06ee06enI06ep!K06f3!K06fk06fwK06hc06i8G06iq!K06iv!K06iy06j7K06j9!K06jd06jhK06jo!K06jq!K06js!K06ju06jxK06jz06k9K06kc06kfK06kl06kpK06ku!K06lc06mgK079207ahK08ow08q6K08q808riK08rk08v8K08vf08viK08vj08vlG08vm08vnK08w008x1K08x3!K08x9!K08xc08yvK08z3!K08zj!G08zk0906K090g090mK090o090uK090w0912K0914091aK091c091iK091k091qK091s091yK09200926K09280933G094f!K09hc!R09hh!K09ii09inG09ip09itJ09iz09j0K09ll09lmG09ln09loJ09ls09oaJ09oc09ofJ09ol09prK09pt09seK09sw09trK09v409vjJ0a1c0a2mJ0a2o0a53J0vls0wi4K0wk00wl9K0wlc0wssK0wsw0wtbK0wtc0wtlO0wtm0wtnK0wu80wviK0wvj0wvmG0wvo0wvxG0wvz0wwtK0wwu0wwvG0www0wz3K0wz40wz5G0wzs0x4vK0x4y0x56K0x6d0x6pK0x6q!G0x6r0x6tK0x6u!G0x6v0x6yK0x6z!G0x700x7mK0x7n0x7rG0x7w!G0x8g0x9vK0xa80xa9G0xaa0xbnK0xbo0xc5G0xcg0xcpO0xcw0xddG0xde0xdjK0xdn!K0xdp0xdqK0xdr!G0xds0xe1O0xe20xetK0xeu0xf1G0xf40xfqK0xfr0xg3G0xgg0xh8K0xhc0xhfG0xhg0xiqK0xir0xj4G0xjj!K0xjk0xjtO0xk5!G0xkg0xkpO0xkw0xm0K0xm10xmeG0xmo0xmqK0xmr!G0xms0xmzK0xn00xn1G0xn40xndO0xob0xodG0xps!G0xpu0xpwG0xpz0xq0G0xq60xq7G0xq9!G0xr40xreK0xrf0xrjG0xrm0xroK0xrp0xrqG0xs10xs6K0xs90xseK0xsh0xsmK0xsw0xt2K0xt40xtaK0xtc0xuxK0xv40xyaK0xyb0xyiG0xyk0xylG0xyo0xyxO0xz416lfK16ls16meK16mj16nvK1dkw1dl2K1dlf1dljK1dlp!C1dlq!G1dlr1dm0C1dm21dmeC1dmg1dmkC1dmm!C1dmo1dmpC1dmr1dmsC1dmu1dn3C1dn41dptK1dqr1e0tK1e1c1e33K1e361e4nK1e5s1e63K1e681e6nG1e6o!M1e6r!L1e6s!M1e741e7jG1e7n1e7oP1e8d1e8fP1e8g!M1e8i!N1e8k!M1e8l!L1e9c1e9gK1e9i1ed8K1edb!I1edj!N1edo!M1edq!N1eds1ee1O1ee2!L1ee3!M1ee91eeyK1ef3!P1ef51efuK1eg61ehpJ1ehq1ehrG1ehs1eimK1eiq1eivK1eiy1ej3K1ej61ejbK1eje1ejgK1ek91ekbI1ekg1ekrK1ekt1eliK1elk1em2K1em41em5K1em71emlK1emo1en1K1eo01ereK1etc1eusK1eyl!G1f281f30K1f341f4gK1f4w!G1f5s1f6nK1f711f7uK1f801f91K1f921f96G1f9c1fa5K1fa81fb7K1fbc1fbjK1fbl1fbpK1fcw1fh9K1fhc1fhlO1fhs1firK1fiw1fjvK1fk01fl3K1flc1fmrK1fr41fzqK1g001g0lK1g0w1g13K1g5c1g5hK1g5k!K1g5m1g6tK1g6v1g6wK1g70!K1g731g7pK1g801g8mK1g8w1g9qK1gbk1gc2K1gc41gc5K1gcg1gd1K1gdc1ge1K1gg01ghjK1ghq1ghrK1gjk!K1gjl1gjnG1gjp1gjqG1gjw1gjzG1gk01gk3K1gk51gk7K1gk91gl1K1gl41gl6G1glb!G1gm81gn0K1gn41gnwK1gow1gp3K1gp51gpwK1gpx1gpyG1gqo1gs5K1gsg1gt1K1gtc1gtuK1gu81gupK1gxs1gzsK1h1c1h2qK1h341h4iK1h4w1h5vK1h5w1h5zG1h681h6hO1hfk1hgpK1hgr1hgsG1hgw1hgxK1hj41hjwK1hk7!K1hkg1hl1K1hl21hlcG1ho01hokK1hpc1hpyK1hq81hqaG1hqb1hrrK1hrs1hs6G1ht21htbO1htr1htuG1htv1hv3K1hv41hveG1hvh!I1hvx!I1hw01hwoK1hww1hx5O1hxc1hxeG1hxf1hyeK1hyf1hysG1hyu1hz3O1hz8!K1hz91hzaG1hzb!K1hzk1i0iK1i0j!G1i0m!K1i0w1i0yG1i0z1i2aK1i2b1i2oG1i2p1i2sK1i2x1i30G1i321i33G1i341i3dO1i3e!K1i3g!K1i4g1i4xK1i4z1i5nK1i5o1i5zG1i66!G1i801i86K1i88!K1i8a1i8dK1i8f1i8tK1i8v1i94K1i9c1iamK1ian1iayG1ib41ibdO1ibk1ibnG1ibp1ibwK1ibz1ic0K1ic31icoK1icq1icwK1icy1iczK1id11id5K1id71id8G1id9!K1ida1idgG1idj1idkG1idn1idpG1ids!K1idz!G1ie51ie9K1iea1iebG1iee1iekG1ieo1iesG1iio1ik4K1ik51ikmG1ikn1ikqK1ikw1il5O1ila!G1ilb1ildK1im81injK1ink1io3G1io41io5K1io7!K1iog1iopO1itc1iumK1iun1iutG1iuw1iv4G1ivs1ivvK1ivw1ivxG1iww1iy7K1iy81iyoG1iys!K1iz41izdO1j0g1j1mK1j1n1j1zG1j20!K1j281j2hO1j4t1j57G1j5c1j5lO1jb41jcbK1jcc1jcqG1jfk1jhbK1jhc1jhlO1ji71jieK1jih!K1jik1jirK1jit1jiuK1jiw1jjjK1jjk1jjpG1jjr1jjsG1jjv1jjyG1jjz!K1jk0!G1jk1!K1jk21jk3G1jkg1jkpO1jmo1jmvK1jmy1jo0K1jo11jo7G1joa1jogG1joh!K1joj!K1jok!G1jpc!K1jpd1jpmG1jpn1jqqK1jqr1jqxG1jqy!K1jqz1jr2G1jrb!G1jrk!K1jrl1jrvG1jrw1jt5K1jt61jtlG1jtp!K1juo1jw8K1k3k1k3sK1k3u1k4uK1k4v1k52G1k541k5bG1k5c!K1k5s1k61O1k6q1k7jK1k7m1k87G1k891k8mG1kao1kauK1kaw1kaxK1kaz1kc0K1kc11kc6G1kca!G1kcc1kcdG1kcf1kclG1kcm!K1kcn!G1kcw1kd5O1kdc1kdhK1kdj1kdkK1kdm1kehK1kei1kemG1keo1kepG1ker1kevG1kew!K1kf41kfdO1ko01koiK1koj1komG1kts!K1kw01lllK1log1lriK1ls01lxfK1o1s1oviK1ovk1ovsI1s001sg6K1z401zjsK1zk01zkuK1zkw1zl5O1zo01zotK1zow1zp0G1zpc1zqnK1zqo1zquG1zr41zr7K1zrk1zrtO1zs31zsnK1zst1ztbK20cg20e7K20hs20juK20jz!G20k0!K20k120ljG20lr20luG20lv20m7K20o020o1K20o3!K20o4!G20og20ohG2dc0!J2dlw2dlzJ2fpc2fsaK2fsg2fssK2fsw2ft4K2ftc2ftlK2ftp2ftqG2fts2ftvI2jxh2jxlG2jxp2jxuG2jxv2jy2I2jy32jyaG2jyd2jyjG2jze2jzhG2k3m2k3oG2kg02kicK2kie2kkcK2kke2kkfK2kki!K2kkl2kkmK2kkp2kksK2kku2kl5K2kl7!K2kl92klfK2klh2kn9K2knb2kneK2knh2knoK2knq2knwK2kny2kopK2kor2kouK2kow2kp0K2kp2!K2kp62kpcK2kpe2kytK2kyw2kzkK2kzm2l0aK2l0c2l16K2l182l1wK2l1y2l2sK2l2u2l3iK2l3k2l4eK2l4g2l54K2l562l60K2l622l6qK2l6s2l6zK2l722l8fO2lmo2lo6G2lob2lpoG2lpx!G2lqc!G2lqz2lr3G2lr52lrjG2mtc2mtiG2mtk2mu0G2mu32mu9G2mub2mucG2mue2muiG2n0g2n1oK2n1s2n1yG2n1z2n25K2n282n2hO2n2m!K2ncw2ne3K2ne42ne7G2ne82nehO2oe82ojoK2ok02ok6G2olc2on7K2on82oneG2onf!K2onk2ontO2pkw2pkzK2pl12plrK2plt2pluK2plw!K2plz!K2pm12pmaK2pmc2pmfK2pmh!K2pmj!K2pmq!K2pmv!K2pmx!K2pmz!K2pn12pn3K2pn52pn6K2pn8!K2pnb!K2pnd!K2pnf!K2pnh!K2pnj!K2pnl2pnmK2pno!K2pnr2pnuK2pnw2po2K2po42po7K2po92pocK2poe!K2pog2popK2por2pp7K2ppd2ppfK2pph2pplK2ppn2pq3K2q7k2q89K2q8g2q95K2q9c2qa1K2qcm2qdbH2qrf2qrjG2sc02sc9Ojny9!Ijnz4jo1rGjo5cjobzG",231,D.W4,D.It,B.w("dx")))
w($,"bat","aTW",()=>B.Ds(4))
w($,"bar","aFK",()=>B.Ds(16))
w($,"bas","aTV",()=>B.aX6($.aFK()))
w($,"bau","aTX",()=>new A.ayG().$0())
w($,"b9n","aTb",()=>new A.axL().$0())
w($,"b7w","aAi",()=>A.aXh(4))
x($,"b7H","aSk",()=>D.Nr)
x($,"b7J","aSm",()=>{var v=null
return A.aNU(v,D.o3,v,v,v,v,"sans-serif",v,v,18,v,v,v,v,v,v,v,v,v,v)})
x($,"b7I","aSl",()=>{var v=null
return A.aCX(v,v,v,v,v,v,v,v,v,C.ms,C.C,v)})
w($,"b8O","aSX",()=>A.aX7())
w($,"b7O","aAk",()=>A.rF())
w($,"b7N","aSq",()=>A.aCQ(0))
w($,"b7P","aSr",()=>A.aCQ(0))
w($,"b7Q","aSs",()=>A.aX8().a)
w($,"baY","aAu",()=>{var v=y.N
return new A.ail(B.E(v,B.w("aw<l>")),B.E(v,B.w("aw<@>")))})
w($,"b7G","aAj",()=>{var v=y.b
return new A.aj6(B.a([],B.w("i<~(it)>")),B.E(v,y.x),B.aA(v))})
w($,"b7F","aSj",()=>{var v=y.b
return B.ad([D.arv,B.dE([D.el],v),D.arw,B.dE([D.en],v),D.arx,B.dE([D.el,D.en],v),D.aru,B.dE([D.el],v),D.arr,B.dE([D.ek],v),D.ars,B.dE([D.fx],v),D.art,B.dE([D.ek,D.fx],v),D.arq,B.dE([D.ek],v),D.arn,B.dE([D.ej],v),D.aro,B.dE([D.fw],v),D.arp,B.dE([D.ej,D.fw],v),D.arm,B.dE([D.ej],v),D.arz,B.dE([D.em],v),D.arA,B.dE([D.fy],v),D.arB,B.dE([D.em,D.fy],v),D.ary,B.dE([D.em],v),D.arC,B.dE([D.j2],v),D.arD,B.dE([D.j4],v),D.arE,B.dE([D.j3],v),D.arF,B.dE([D.fv],v)],B.w("da"),B.w("bX<o>"))})
w($,"b7E","aFr",()=>B.ad([D.el,D.fh,D.en,D.iT,D.ek,D.dt,D.fx,D.ed,D.ej,D.fg,D.fw,D.iS,D.em,D.fi,D.fy,D.iU,D.j2,D.iN,D.j4,D.iO,D.j3,D.iP],y.b,y.x))
w($,"b7D","aSi",()=>{var v,u,t=B.E(y.b,y.x)
t.l(0,D.fv,D.lp)
for(v=$.aFr(),v=v.ghn(v),v=v.ga9(v);v.t();){u=v.gO(v)
t.l(0,u.gew(u),u.gn(u))}return t})
x($,"b8F","aFw",()=>new A.a19(D.arH,D.a9))})()}
$__dart_deferred_initializers__["8+LTzpaLgmF+6QkV4M9JNFo26WQ="] = $__dart_deferred_initializers__.current
