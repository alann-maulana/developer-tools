self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
aMM(d,e){var w=null,v=e.i("qV<0>"),u=new N.qV(w,w,w,w,v)
u.CQ(0,d)
u.Yi()
return new C.iV(u,v.i("iV<1>"))},
HX:function HX(){},
K5:function K5(d){this.$ti=d},
a4X:function a4X(d,e){this.a=d
this.b=e
this.c=0},
UV:function UV(){},
anv(d){var w=0,v=C.a3(x.cP),u,t
var $async$anv=C.a4(function(e,f){if(e===1)return C.a0(f,v)
while(true)switch(w){case 0:t=new A.xJ(d.length)
t.a=d
u=t
w=1
break
case 1:return C.a1(u,v)}})
return C.a2($async$anv,v)},
xJ:function xJ(d){this.a=null
this.b=d},
aKI(d){return new A.O8(d,null,null)},
O8:function O8(d,e,f){this.a=d
this.b=e
this.c=f},
xO(d,e,f,g){var w,v
if(x.Q.b(d))w=C.bE(d.buffer,d.byteOffset,d.byteLength)
else w=x.L.b(d)?d:C.hE(x.hf.a(d),!0,x.p)
v=new A.anJ(w,g,g,e)
v.e=f==null?w.length:f
return v},
anK:function anK(){},
anJ:function anJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$},
aU2(d){return new A.aqJ(new Uint8Array(32768))},
aqK:function aqK(){},
aqJ:function aqJ(d){this.a=0
this.c=d},
aH5:function aH5(){},
xv(d){var w=new A.amO()
w.akc(d)
return w},
amO:function amO(){this.a=$
this.b=0
this.c=2147483647},
aSW(d){var w=A.xv(B.w2),v=A.xv(B.xT)
v=new A.UD(A.xO(d,0,null,0),A.aU2(null),w,v)
v.b=!0
v.a_E()
return v},
UD:function UD(d,e,f,g){var _=this
_.a=d
_.b=!1
_.c=e
_.e=_.d=0
_.r=f
_.w=g},
azF:function azF(){},
azE:function azE(){},
U2:function U2(d,e,f){var _=this
_.a=0
_.b=!1
_.c=d
_.e=e
_.$ti=f},
al3:function al3(d,e){this.a=d
this.b=e},
al4:function al4(d){this.a=d},
DL:function DL(d,e){this.a=d
this.b=e},
A0:function A0(d,e){this.a=d
this.$ti=e},
HW:function HW(d,e,f,g,h){var _=this
_.a=d
_.b=null
_.c=e
_.d=f
_.e=g
_.f=!1
_.$ti=h},
ax5:function ax5(d,e){this.a=d
this.b=e},
ax4:function ax4(d){this.a=d},
aQF(d,e){return new A.afx(d,e)},
aQG(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=d.length
if(g<6)throw C.c(A.aKP("BlurHash must not be null or '< 6' characters long."))
w=A.aIJ(d,0,1)
v=D.b.cq(w,9)+1
u=D.b.bR(w,9)+1
if(g!==4+2*v*u)throw C.c(A.aKP("Invalid number of components in BlurHash."))
t=(A.aIJ(d,1,2)+1)/166
s=J.tN(u,x.V)
for(g=x.M,r=0;r<u;++r)s[r]=C.ar(v,new A.ht(0,0,0),!1,g)
for(q=0;q<u;++q)for(g=q*v,p=q===0,r=0;r<v;++r)if(r===0&&p){o=A.aIJ(d,2,6)
n=A.BB(o>>>16)
m=A.BB(o>>>8&255)
o=A.BB(o&255)
s[q][r]=new A.ht(n,m,o)}else{o=4+(r+g)*2
o=A.aIJ(d,o,o+2)
l=D.f.cq(o/19,19)
k=D.b.cq(o,19)
o=(o/361-9)/9
n=Math.pow(Math.abs(o),2)
o=J.dC(o)
m=(l-9)/9
j=Math.pow(Math.abs(m),2)
m=J.dC(m)
i=(k-9)/9
h=Math.pow(Math.abs(i),2)
i=J.dC(i)
s[q][r]=new A.ht(n*o*t,j*m*t,h*i*t)}return A.aQF(d,A.bcX(s,1))},
b2p(d,e,f){var w,v,u,t,s,r,q
if(e<1||e>9||f<1||f>9)throw C.c(new A.OG("BlurHash components must be between 1 and 9."))
w=d.j1(B.H)
v=J.tN(f,x.V)
for(u=x.M,t=0;t<f;++t)v[t]=C.ar(e,new A.ht(0,0,0),!1,u)
for(s=0;s<f;++s)for(u=s===0,r=0;r<e;++r){q=r===0&&u?1:2
v[s][r]=A.bcW(w,r,s,q)}return A.aQF(A.bc0(v),v)},
bc0(d){var w,v,u,t,s=d[0].length,r=d.length,q=C.ar(s*r,new A.ht(0,0,0),!1,x.M)
for(w=0,v=0;v<r;++v)for(u=0;u<s;++u,w=t){t=w+1
q[w]=d[v][u]}return A.bc1(q,s,r)},
bc1(d,e,f){var w,v,u,t,s,r,q,p,o=D.c.gX(d),n=C.eh(d,1,null,C.ah(d).c).eW(0),m=""+A.adK(e-1+(f-1)*9,1)
if(n.length!==0){w=Math.max(0,Math.min(82,D.f.ek(new C.az(n,A.bec(),C.ah(n).i("az<1,L>")).th(0,K.lX)*166-0.5)))
v=(w+1)/166
m+=A.adK(w,1)}else{m+=A.adK(0,1)
v=1}m+=A.adK((A.NA(o.a)<<16>>>0)+(A.NA(o.b)<<8>>>0)+A.NA(o.c),4)
for(u=n.length,t=0;t<n.length;n.length===u||(0,C.G)(n),++t,m=r){s=n[t]
r=s.a/v
q=D.f.ek(Math.max(0,Math.min(18,Math.pow(Math.abs(r),0.5)*J.dC(r)*9+9.5)))
r=s.b/v
p=D.f.ek(Math.max(0,Math.min(18,Math.pow(Math.abs(r),0.5)*J.dC(r)*9+9.5)))
r=s.c/v
r=m+A.adK(q*19*19+p*19+D.f.ek(Math.max(0,Math.min(18,Math.pow(Math.abs(r),0.5)*J.dC(r)*9+9.5))),2)}return m.charCodeAt(0)==0?m:m},
bcT(d){return Math.max(Math.abs(d.a),Math.max(Math.abs(d.b),Math.abs(d.c)))},
bcX(d,e){var w,v,u,t,s,r
for(w=d.length,v=0;v<w;++v)for(u=v!==0,t=0;s=d[v],t<s.length;++t)if(u&&t!==0){r=s[t]
s[t]=new A.ht(r.a*e,r.b*e,r.c*e)}return d},
bdo(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=C.ar(d*e*4,0,!1,x.p)
for(w=0,v=0;v<e;++v)for(u=3.141592653589793*v,t=0;t<d;++t){for(s=3.141592653589793*t,r=0,q=0,p=0,o=0;o<f.length;++o)for(n=u*o/e,m=0;m<f[0].length;++m){l=Math.cos(s*m/d)*Math.cos(n)
k=f[o][m]
r+=k.a*l
q+=k.b*l
p+=k.c*l}j=w+1
i[w]=A.NA(r)
w=j+1
i[j]=A.NA(q)
j=w+1
i[w]=A.NA(p)
w=j+1
i[j]=255}return new Uint8Array(C.bf(i))},
bcW(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=null
if(d.gvT()>=3)for(w=d.a,w=w.ga1(w),v=3.141592653589793*f,u=3.141592653589793*e,t=0,s=0,r=0;w.q();){q=w.gM(w)
p=q.giq(q)
o=d.a
o=o==null?k:o.a
if(o==null)o=0
o=Math.cos(u*p/o)
p=q.gjg(q)
n=d.a
n=n==null?k:n.b
if(n==null)n=0
m=g*o*Math.cos(v*p/n)
t+=m*A.BB(C.bl(q.gae(q)))
s+=m*A.BB(C.bl(q.gap()))
r+=m*A.BB(C.bl(q.gaq(q)))}else for(w=d.a,w=w.ga1(w),v=3.141592653589793*f,u=3.141592653589793*e,t=0,s=0,r=0;w.q();){q=w.gM(w)
p=q.giq(q)
o=d.a
o=o==null?k:o.a
if(o==null)o=0
o=Math.cos(u*p/o)
p=q.gjg(q)
n=d.a
n=n==null?k:n.b
if(n==null)n=0
n=g*o*Math.cos(v*p/n)*A.BB(C.bl(q.gae(q)))
t+=n
s+=n
r+=n}l=1/(d.gcu(d)*d.gbL(d))
return new A.ht(t*l,s*l,r*l)},
afx:function afx(d,e){this.a=d
this.b=e},
aKP(d){return new A.OF(d)},
OF:function OF(d){this.a=d},
OG:function OG(d){this.a=d},
BB(d){var w=d/255
if(w<=0.04045)return w/12.92
return Math.pow((w+0.055)/1.055,2.4)},
NA(d){var w=D.f.bv(d,0,1)
if(w<=0.0031308)return D.f.t(w*12.92*255+0.5)
return D.f.t((1.055*Math.pow(w,0.4166666666666667)-0.055)*255+0.5)},
ht:function ht(d,e,f){this.a=d
this.b=e
this.c=f},
b2o(){return new A.wf(new A.Ce(H.eD(null),H.eD(null),B.fs,B.ix,$.bq()),null)},
wf:function wf(d,e){this.c=d
this.a=e},
afH:function afH(d){this.a=d},
wd:function wd(d,e){this.c=d
this.a=e},
afD:function afD(d){this.a=d},
afy:function afy(d){this.a=d},
afz:function afz(d){this.a=d},
afA:function afA(d,e){this.a=d
this.b=e},
afB:function afB(d,e,f){this.a=d
this.b=e
this.c=f},
afC:function afC(d,e,f){this.a=d
this.b=e
this.c=f},
aTN(d){switch(d.a){case 1:return"Decoded from File"
case 2:return"Decoded from Base64 String"
case 3:return"Decoded from URL"
case 4:return"Decoded from Blur Hash"
case 0:return null}},
rI:function rI(d,e){this.a=d
this.b=e},
we:function we(d,e){this.a=d
this.b=e},
Ce:function Ce(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=null
_.d=f
_.e=g
_.r=_.f=null
_.aA$=0
_.aY$=h
_.bl$=_.bE$=0
_.F$=!1},
afE:function afE(d){this.a=d},
afF:function afF(d){this.a=d},
afG:function afG(d){this.a=d},
aRt(d,e,f){return new A.Sg(f,e,d)},
bg4(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
if(b6.gW(b6))return
w=b6.a
v=b6.c-w
u=b6.b
t=b6.d-u
s=new C.P(v,t)
r=b2.gcu(b2)
q=b2.gbL(b2)
p=L.aYy(b0,new C.P(r,q).iT(0,b8),s)
o=p.a.ar(0,b8)
n=p.b
if(b7!==B.eG&&n.k(0,s))b7=B.eG
m=$.av()
l=m.c3()
l.sa7F(!1)
l.sbc(0,E.b3_(0,0,0,b5))
l.szP(a9)
l.sa7A(!1)
k=n.a
j=(v-k)/2
i=n.b
h=(t-i)/2
t=a4.a
t=w+(j+(b1?-t:t)*j)
u+=h+a4.b*h
g=new C.y(t,u,t+k,u+i)
f=b7!==B.eG||b1
if(f)a5.di(0)
if(b1){e=-(w+v/2)
a5.bg(0,-e,0)
a5.eY(0,-1,1)
a5.bg(0,e,0)}d=a4.a7o(o,new C.y(0,0,r,q))
if(b7===B.eG)a5.oz(b2,d,g,l)
else{a0=b7===B.tP||b7===B.n1?D.ld:D.lf
a1=b7===B.tQ||b7===B.n1?D.ld:D.lf
a2=D.c.gX(A.bcj(b6,g,b7))
w=new Float64Array(16)
a3=new M.bC(w)
a3.fe()
v=a2.a
u=a2.b
a3.eY(0,(a2.c-v)/(d.c-d.a),(a2.d-u)/(d.d-d.b))
a3.mL(v,u,0)
l.swM(m.a5i(b2,a0,a1,w,a9))
a5.dl(b6,l)}if(f)a5.cJ(0)},
bcj(d,e,f){var w,v,u,t,s,r,q=e.c,p=e.a,o=q-p,n=e.d,m=e.b,l=n-m,k=f!==B.n1
if(!k||f===B.tP){w=D.f.ek((d.a-p)/o)
v=D.f.ds((d.c-q)/o)}else{w=0
v=0}if(!k||f===B.tQ){u=D.f.ek((d.b-m)/l)
t=D.f.ds((d.d-n)/l)}else{u=0
t=0}q=C.a([],x.T)
for(s=w;s<=v;++s)for(p=s*o,r=u;r<=t;++r)q.push(e.dK(new C.m(p,r*l)))
return q},
xH:function xH(d,e){this.a=d
this.b=e},
Sg:function Sg(d,e,f){this.a=d
this.d=e
this.e=f},
Sh:function Sh(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=null},
pM:function pM(){},
anq:function anq(d,e,f){this.a=d
this.b=e
this.c=f},
anr:function anr(d,e,f){this.a=d
this.b=e
this.c=f},
ann:function ann(d,e){this.a=d
this.b=e},
anm:function anm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ano:function ano(d){this.a=d},
anp:function anp(d,e){this.a=d
this.b=e},
lZ:function lZ(d){this.a=d},
aBW:function aBW(d,e){var _=this
_.a=d
_.d=_.c=_.b=null
_.f=_.e=!1
_.r=0
_.w=!1
_.x=e},
b6m(d,e,f){var w=new A.XS(f,C.a([],x.v),C.a([],x.d))
w.akr(null,d,e,null,f)
return w},
kD:function kD(d,e,f){this.a=d
this.b=e
this.c=f},
ans:function ans(){this.b=this.a=null},
ant:function ant(d){this.a=d},
tE:function tE(){},
anu:function anu(){},
XS:function XS(d,e,f){var _=this
_.z=_.y=null
_.Q=d
_.at=null
_.ax=$
_.ay=null
_.ch=0
_.CW=null
_.cx=!1
_.a=e
_.d=_.c=_.b=null
_.f=_.e=!1
_.r=0
_.w=!1
_.x=f},
aq2:function aq2(d,e){this.a=d
this.b=e},
aq1:function aq1(d){this.a=d},
a7b:function a7b(){},
a7a:function a7a(){},
GI:function GI(d,e,f){var _=this
_.C=d
_.E$=e
_.k1=_.id=null
_.k2=!1
_.k4=_.k3=null
_.ok=0
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
_.ay=$
_.ch=f
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=null
_.dy=!0
_.fr=null
_.a=0
_.c=_.b=null},
C1:function C1(d,e,f){this.e=d
this.c=e
this.a=f},
aXI(d){return d.b===503},
aXJ(d,e){return!1},
aXG(d){return new C.b5(D.f.ce(5e5*Math.pow(1.5,d)))},
atJ:function atJ(d){this.a=d},
atK:function atK(){},
atL:function atL(){},
afl:function afl(){},
Ou:function Ou(){},
Ov:function Ov(){},
Ow:function Ow(){},
rF:function rF(){},
afQ:function afQ(d){this.a=d
this.c=!1},
afR:function afR(d,e,f){this.a=d
this.b=e
this.c=f},
afS:function afS(d,e){this.a=d
this.b=e},
pc:function pc(d){this.a=d},
ag0:function ag0(d){this.a=d},
b2S(d,e){return new A.CI(d,e)},
CI:function CI(d,e){this.a=d
this.b=e},
b7D(d,e){var w=new Uint8Array(0),v=$.aOL().b
if(!v.test(d))C.V(C.fX(d,"method","Not a valid method"))
v=x.N
return new A.aty(D.a0,w,d,e,C.jj(new A.Ov(),new A.Ow(),null,v,v))},
aty:function aty(d,e,f,g,h){var _=this
_.x=d
_.y=e
_.a=f
_.b=g
_.c=null
_.e=_.d=!0
_.f=5
_.r=h
_.w=!1},
atz(d){return A.b7E(d)},
b7E(d){var w=0,v=C.a3(x.q),u,t,s,r,q,p,o,n
var $async$atz=C.a4(function(e,f){if(e===1)return C.a0(f,v)
while(true)switch(w){case 0:w=3
return C.a7(d.w.aaC(),$async$atz)
case 3:t=f
s=d.b
r=d.a
q=d.e
p=d.c
o=A.bgX(t)
n=t.length
o=new A.uI(o,r,s,p,n,q,!1,!0)
o.Xi(s,n,q,!1,!0,p,r)
u=o
w=1
break
case 1:return C.a1(u,v)}})
return C.a2($async$atz,v)},
uI:function uI(d,e,f,g,h,i,j,k){var _=this
_.w=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.r=k},
b8p(d,e){var w=null,v=N.aML(w,w,w,!0,x.L),u=$.aOL().b
if(!u.test(d))C.V(C.fX(d,"method","Not a valid method"))
u=x.N
return new A.axa(v,d,e,C.jj(new A.Ov(),new A.Ow(),w,u,u))},
axa:function axa(d,e,f,g){var _=this
_.x=d
_.a=e
_.b=f
_.c=null
_.e=_.d=!0
_.f=5
_.r=g
_.w=!1},
uY:function uY(d,e,f,g,h,i,j,k){var _=this
_.w=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.r=k},
agi:function agi(d,e){this.a=d
this.b=e},
dv:function dv(d){this.a=-1
this.b=d},
lE:function lE(d,e){this.a=d
this.b=e},
CK:function CK(d){this.a=d},
CL:function CL(d){this.a=d},
CM:function CM(d){this.a=d},
CN:function CN(d){this.a=d},
CO:function CO(d){this.a=d},
CP:function CP(d){this.a=d},
CQ:function CQ(d,e){this.a=d
this.b=e},
CR:function CR(d){this.a=d},
CS:function CS(d,e){this.a=d
this.b=e},
CT:function CT(d){this.a=d},
CU:function CU(d,e){this.a=d
this.b=e},
pi:function pi(d){this.a=d},
PQ:function PQ(d){this.a=d},
PR:function PR(d){this.a=d},
aO2(d,e,f){var w
if(e===f)return d
switch(e.a){case 0:if(d===0)w=0
else{w=B.Gc.h(0,f)
w.toString}return w
case 1:switch(f.a){case 0:return d===0?0:1
case 1:return d
case 2:return d*5
case 3:return d*75
case 4:return d*21845
case 5:return d*1431655765
case 6:return d*42
case 7:return d*10922
case 8:return d*715827882
case 9:case 10:case 11:return d/3}break
case 2:switch(f.a){case 0:return d===0?0:1
case 1:return D.b.G(C.bl(d),1)
case 2:return d
case 3:return d*17
case 4:return d*4369
case 5:return d*286331153
case 6:return d*8
case 7:return d*2184
case 8:return d*143165576
case 9:case 10:case 11:return d/3}break
case 3:switch(f.a){case 0:return d===0?0:1
case 1:return D.b.G(C.bl(d),6)
case 2:return D.b.G(C.bl(d),4)
case 3:return d
case 4:return d*257
case 5:return d*16843009
case 6:return D.b.G(C.bl(d),1)
case 7:return d*128
case 8:return d*8421504
case 9:case 10:case 11:return d/255}break
case 4:switch(f.a){case 0:return d===0?0:1
case 1:return D.b.G(C.bl(d),14)
case 2:return D.b.G(C.bl(d),12)
case 3:return D.b.G(C.bl(d),8)
case 4:return d
case 5:return C.bl(d)<<8>>>0
case 6:return D.b.G(C.bl(d),9)
case 7:return D.b.G(C.bl(d),1)
case 8:return d*524296
case 9:case 10:case 11:return d/65535}break
case 5:switch(f.a){case 0:return d===0?0:1
case 1:return D.b.G(C.bl(d),30)
case 2:return D.b.G(C.bl(d),28)
case 3:return D.b.G(C.bl(d),24)
case 4:return D.b.G(C.bl(d),16)
case 5:return d
case 6:return D.b.G(C.bl(d),25)
case 7:return D.b.G(C.bl(d),17)
case 8:return D.b.G(C.bl(d),1)
case 9:case 10:case 11:return d/4294967295}break
case 6:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.b.G(C.bl(d),5)
case 2:return d<=0?0:D.b.G(C.bl(d),3)
case 3:return d<=0?0:C.bl(d)<<1>>>0
case 4:return d<=0?0:C.bl(d)*516
case 5:return d<=0?0:C.bl(d)*33818640
case 6:return d
case 7:return d*258
case 8:return d*16909320
case 9:case 10:case 11:return d/127}break
case 7:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.b.G(C.bl(d),15)
case 2:return d<=0?0:D.b.G(C.bl(d),11)
case 3:return d<=0?0:D.b.G(C.bl(d),7)
case 4:return d<=0?0:C.bl(d)<<1>>>0
case 5:return d<=0?0:C.bl(d)*131076
case 6:return D.b.G(C.bl(d),8)
case 7:return d
case 8:return C.bl(d)*65538
case 9:case 10:case 11:return d/32767}break
case 8:switch(f.a){case 0:return d===0?0:1
case 1:return d<=0?0:D.b.G(C.bl(d),29)
case 2:return d<=0?0:D.b.G(C.bl(d),27)
case 3:return d<=0?0:D.b.G(C.bl(d),23)
case 4:return d<=0?0:D.b.G(C.bl(d),16)
case 5:return d<=0?0:C.bl(d)<<1>>>0
case 6:return D.b.G(C.bl(d),24)
case 7:return D.b.G(C.bl(d),16)
case 8:return d
case 9:case 10:case 11:return d/2147483647}break
case 9:case 10:case 11:switch(f.a){case 0:return d===0?0:1
case 1:return D.f.t(D.f.bv(d,0,1)*3)
case 2:return D.f.t(D.f.bv(d,0,1)*15)
case 3:return D.f.t(D.f.bv(d,0,1)*255)
case 4:return D.f.t(D.f.bv(d,0,1)*65535)
case 5:return D.f.t(D.f.bv(d,0,1)*4294967295)
case 6:return D.f.t(d<0?D.f.bv(d,-1,1)*128:D.f.bv(d,-1,1)*127)
case 7:return D.f.t(d<0?D.f.bv(d,-1,1)*32768:D.f.bv(d,-1,1)*32767)
case 8:return D.f.t(d<0?D.f.bv(d,-1,1)*2147483648:D.f.bv(d,-1,1)*2147483647)
case 9:case 10:case 11:return d}break}},
i1:function i1(d,e){this.a=d
this.b=e},
OC:function OC(d,e){this.a=d
this.b=e},
ajY(d){var w=new A.DN(C.w(x.N,x.P))
w.akd(d)
return w},
DN:function DN(d){this.a=d},
a6x:function a6x(d,e){this.a=d
this.b=e},
X(d,e,f){return new A.Te(d,e)},
Te:function Te(d,e){this.a=d
this.b=e},
kB:function kB(d){this.a=d},
and:function and(d){this.a=d},
aSG(d){var w=new A.jg(C.w(x.p,x.r),new A.kB(C.w(x.N,x.P)))
w.aCC(d)
return w},
jg:function jg(d,e){this.a=d
this.b=e},
ane:function ane(d){this.a=d},
anf:function anf(d){this.a=d},
b5m(d){var w=new Uint16Array(1)
w[0]=d
return new A.pK(w)},
aSO(d,e){var w=new A.pK(new Uint16Array(e))
w.aki(d,e)
return w},
b5l(d){var w=new Uint32Array(1)
w[0]=d
return new A.kC(w)},
aSJ(d,e){var w=new A.kC(new Uint32Array(e))
w.akf(d,e)
return w},
aSK(d,e){var w,v=J.tN(e,x.i)
for(w=0;w<e;++w)v[w]=new A.yQ(d.N(),d.N())
return new A.tA(v)},
aSN(d,e){var w=new A.pJ(new Int16Array(e))
w.akh(d,e)
return w},
aSL(d,e){var w=new A.pI(new Int32Array(e))
w.akg(d,e)
return w},
aSM(d,e){var w,v,u,t,s=J.tN(e,x.i)
for(w=0;w<e;++w){v=d.N()
u=$.dc()
u[0]=v
v=$.fy()
t=v[0]
u[0]=d.N()
s[w]=new A.yQ(t,v[0])}return new A.tB(s)},
aSP(d){var w=new Float32Array(1)
w[0]=d
return new A.tC(w)},
aSQ(d,e){var w=new A.tC(new Float32Array(e))
w.akj(d,e)
return w},
aSH(d){var w=new Float64Array(1)
w[0]=d
return new A.tz(w)},
aSI(d,e){var w=new A.tz(new Float64Array(e))
w.ake(d,e)
return w},
hC:function hC(d,e){this.a=d
this.b=e},
eK:function eK(){},
lN:function lN(d){this.a=d},
ty:function ty(d){this.a=d},
pK:function pK(d){this.a=d},
kC:function kC(d){this.a=d},
tA:function tA(d){this.a=d},
nF:function nF(d){this.a=d},
pJ:function pJ(d){this.a=d},
pI:function pI(d){this.a=d},
tB:function tB(d){this.a=d},
tC:function tC(d){this.a=d},
tz:function tz(d){this.a=d},
xy:function xy(d){this.a=d},
aQH(d){var w,v,u=new A.afK()
if(!A.aKQ(d))C.V(A.aG("Not a bitmap file."))
d.d+=2
w=d.N()
v=$.dc()
v[0]=w
w=$.fy()
w[0]
d.d+=4
v[0]=d.N()
u.b=w[0]
return u},
aKQ(d){if(d.c-d.d<2)return!1
return A.aS(d,null,0).V()===19778},
b2q(d,e){var w,v,u,t,s,r=e==null?A.aQH(d):e,q=d.d,p=d.N(),o=d.N(),n=$.dc()
n[0]=o
o=$.fy()
w=o[0]
n[0]=d.N()
v=o[0]
u=d.V()
t=d.V()
s=B.yJ[d.N()]
d.N()
n[0]=d.N()
o[0]
n[0]=d.N()
o[0]
o=d.N()
d.N()
q=new A.rJ(r,w,v,p,u,t,s,o,q)
q.Xj(d,e)
return q},
fY:function fY(d,e){this.a=d
this.b=e},
afK:function afK(){this.b=$},
rJ:function rJ(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k
_.ay=_.ax=_.at=_.as=$
_.ch=null
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=$
_.fy=l},
OH:function OH(d){this.a=$
this.b=null
this.c=d},
afJ:function afJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ahN:function ahN(d){this.a=$
this.b=null
this.c=d},
ahC:function ahC(){},
ajn:function ajn(){},
Tk:function Tk(d,e){this.c=d
this.d=e},
UJ:function UJ(d,e,f,g){var _=this
_.r=d
_.w=e
_.x=f
_.b=_.a=0
_.c=g},
xc:function xc(d,e){this.a=d
this.b=e},
td:function td(d,e){this.a=d
this.b=e},
Tl:function Tl(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
aS_(d,e,f,g){var w,v
switch(d.a){case 1:return new A.anP(f,e)
case 2:return new A.UL(f,g==null?1:g,e)
case 3:return new A.UL(f,g==null?16:g,e)
case 4:w=g==null?32:g
v=new A.anN(f,w,e)
v.akn(e,f,w)
return v
case 5:return new A.anO(f,g==null?16:g,e)
case 6:return new A.UJ(f,g==null?32:g,!1,e)
case 7:return new A.UJ(f,g==null?32:g,!0,e)
default:throw C.c(A.aG("Invalid compression type: "+d.j(0)))}},
kx:function kx(d,e){this.a=d
this.b=e},
ajZ:function ajZ(){},
anM:function anM(){},
b4H(d,e,f,g){var w,v,u,t,s,r,q,p
if(e===0){if(g!==0)throw C.c(A.aG("Incomplete huffman data"))
return}w=d.d
v=d.N()
u=d.N()
d.d+=4
t=d.N()
if(v<65537)s=u>=65537
else s=!0
if(s)throw C.c(A.aG("Invalid huffman table size"))
d.d+=4
r=C.ar(65537,0,!1,x.p)
q=J.i5(16384,x.j)
for(p=0;p<16384;++p)q[p]=new A.Tm()
A.b4I(d,e-20,v,u,r)
if(t>8*(e-(d.d-w)))throw C.c(A.aG("Error in header for Huffman-encoded data (invalid number of bits)."))
A.b4E(r,v,u,q)
A.b4G(r,q,d,t,u,g,f)},
b4G(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p,o="Error in Huffman-encoded data (invalid code).",n=C.a([0,0],x.t),m=f.d+D.b.bR(g+7,8)
for(w=0;f.d<m;){A.aLz(n,f)
for(;v=n[1],v>=14;){u=e[D.b.kT(n[0],v-14)&16383]
t=u.a
if(t!==0){n[1]=v-t
w=A.aLA(u.b,h,n,f,j,w,i)}else{if(u.c==null)throw C.c(A.aG(o))
for(s=0;s<u.b;++s){r=d[u.c[s]]&63
while(!0){v=n[1]
if(!(v<r&&f.d<m))break
A.aLz(n,f)}if(v>=r){t=u.c
v-=r
if(d[t[s]]>>>6===(D.b.kT(n[0],v)&D.b.cj(1,r)-1)>>>0){n[1]=v
q=A.aLA(t[s],h,n,f,j,w,i)
w=q
break}}}if(s===u.b)throw C.c(A.aG(o))}}}p=8-g&7
n[0]=D.b.G(n[0],p)
n[1]=n[1]-p
for(;v=n[1],v>0;){u=e[D.b.cW(n[0],14-v)&16383]
t=u.a
if(t!==0){n[1]=v-t
w=A.aLA(u.b,h,n,f,j,w,i)}else throw C.c(A.aG(o))}if(w!==i)throw C.c(A.aG("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
aLA(d,e,f,g,h,i,j){var w,v,u,t,s,r="Error in Huffman-encoded data (decoded data are longer than expected)."
if(d===e){if(f[1]<8)A.aLz(f,g)
w=f[1]-8
f[1]=w
v=D.b.kT(f[0],w)&255
if(i+v>j)throw C.c(A.aG(r))
u=h[i-1]
for(;t=v-1,v>0;v=t,i=s){s=i+1
h[i]=u}}else{if(i<j){s=i+1
h[i]=d}else throw C.c(A.aG(r))
i=s}return i},
b4E(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m="Error in Huffman-encoded data (invalid code table entry)."
for(w=x.t,v=x.p;e<=f;++e){u=d[e]
t=u>>>6
s=u&63
if(D.b.e6(t,s)!==0)throw C.c(A.aG(m))
if(s>14){r=g[D.b.de(t,s-14)]
if(r.a!==0)throw C.c(A.aG(m))
u=++r.b
q=r.c
if(q!=null){u=C.ar(u,0,!1,v)
r.c=u
for(p=r.b-1,o=0;o<p;++o)u[o]=q[o]}else r.c=C.a([0],w)
r.c[r.b-1]=e}else if(s!==0){u=14-s
n=D.b.cW(t,u)
for(o=D.b.cW(1,u);o>0;--o,++n){r=g[n]
if(r.a!==0||r.c!=null)throw C.c(A.aG(m))
r.a=s
r.b=e}}}},
b4I(d,e,f,g,h){var w,v,u,t,s,r="Error in Huffman-encoded data (unexpected end of code table data).",q="Error in Huffman-encoded data (code table is longer than expected).",p=d.d,o=C.a([0,0],x.t)
for(w=g+1;f<=g;++f){if(d.d-p>e)throw C.c(A.aG(r))
v=A.aS0(6,o,d)
h[f]=v
if(v===63){if(d.d-p>e)throw C.c(A.aG(r))
u=A.aS0(8,o,d)+6
if(f+u>w)throw C.c(A.aG(q))
for(;t=u-1,u!==0;u=t,f=s){s=f+1
h[f]=0}--f}else if(v>=59){u=v-59+2
if(f+u>w)throw C.c(A.aG(q))
for(;t=u-1,u!==0;u=t,f=s){s=f+1
h[f]=0}--f}}A.b4F(h)},
b4F(d){var w,v,u,t,s,r=C.ar(59,0,!1,x.p)
for(w=0;w<65537;++w){v=d[w]
r[v]=r[v]+1}for(u=0,w=58;w>0;--w,u=t){t=u+r[w]>>>1
r[w]=u}for(w=0;w<65537;++w){s=d[w]
if(s>0){v=r[s]
r[s]=v+1
d[w]=(s|v<<6)>>>0}}},
aLz(d,e){d[0]=((d[0]<<8|e.b1())&-1)>>>0
d[1]=(d[1]+8&-1)>>>0},
aS0(d,e,f){var w
for(;w=e[1],w<d;){e[0]=((e[0]<<8|f.a[f.d++])&-1)>>>0
e[1]=(w+8&-1)>>>0}w-=d
e[1]=w
return(D.b.kT(e[0],w)&D.b.cj(1,d)-1)>>>0},
Tm:function Tm(){this.b=this.a=0
this.c=null},
b4J(d){var w=A.br(d,!1,null,0)
if(w.N()!==20000630)return!1
if(w.b1()!==2)return!1
if((w.lA()&4294967289)>>>0!==0)return!1
return!0},
ak0:function ak0(d){var _=this
_.b=_.a=0
_.c=d
_.d=null
_.e=$},
aT0(d,e,f){var w=new A.UK(d,C.a([],x.g9),C.w(x.N,x.Y),B.tf,e)
w.ak9(d,e,f,{})
return w},
DT:function DT(){},
ak1:function ak1(d,e){this.a=d
this.b=e},
UK:function UK(d,e,f,g,h){var _=this
_.a=d
_.b=null
_.c=e
_.d=0
_.e=f
_.r=$
_.x=_.w=0
_.at=$
_.ax=g
_.ay=null
_.ch=$
_.CW=null
_.cx=0
_.cy=null
_.db=h
_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=null
_.k2=$
_.k3=null},
anN:function anN(d,e,f){var _=this
_.r=null
_.w=d
_.x=e
_.y=$
_.z=null
_.b=_.a=0
_.c=f},
a8J:function a8J(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
anO:function anO(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
anP:function anP(d,e){var _=this
_.r=null
_.w=d
_.b=_.a=0
_.c=e},
UL:function UL(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
ak_:function ak_(){this.a=null},
aSr(d){var w=new Uint8Array(d*3)
return new A.Eg(A.b56(d),d,null,new A.m7(w,d,3))},
b55(d){return new A.Eg(d.a,d.b,d.c,A.aU7(d.d))},
b56(d){var w
for(w=1;w<=8;++w)if(D.b.cj(1,w)>=d)return w
return 0},
Eg:function Eg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Eh:function Eh(){},
UM:function UM(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=!0
_.x=$},
U7:function U7(d){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=d},
alv:function alv(){var _=this
_.a=null
_.e=_.d=_.c=_.b=0
_.f=null
_.r=0
_.w=null
_.y=_.x=$
_.z=null
_.Q=0
_.as=null
_.ay=_.ax=_.at=0
_.ch=null
_.dy=_.dx=_.db=_.cy=_.cx=_.CW=0},
aSB(d){var w,v,u,t,s,r,q
if(d.V()!==0)return null
w=d.V()
if(w>=3)return null
if(B.a0s[w]===B.tD)return null
v=d.V()
u=J.tN(v,x.gx)
for(t=0;t<v;++t){s=++d.d
r=d.a
q=s+1
d.d=q
s=r[s];++q
d.d=q
d.d=q+1
d.V()
d.V()
u[t]=new A.Ut(s,d.N(),d.N())}return new A.an_(v,u)},
xw:function xw(d,e){this.a=d
this.b=e},
an_:function an_(d,e){this.d=d
this.e=e},
Ut:function Ut(d,e,f){this.b=d
this.d=e
this.e=f},
amY:function amY(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k
_.ay=_.ax=_.at=_.as=$
_.ch=null
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=$
_.fy=l},
amZ:function amZ(){this.b=this.a=null},
PW:function PW(d,e,f){this.e=d
this.f=e
this.r=f},
tu:function tu(){},
tv:function tv(d){this.a=d},
Eo:function Eo(d){this.a=d},
ao1:function ao1(){this.d=null},
pU:function pU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.y=_.x=_.w=_.r=_.f=_.e=$},
aT9(){var w=C.ar(4,null,!1,x.bC),v=C.a([],x.f8),u=x.ez,t=J.pS(0,u)
u=J.pS(0,u)
return new A.ao2(new A.DN(C.w(x.N,x.P)),w,v,t,u,C.a([],x.eB))},
ao2:function ao2(d,e,f,g,h,i){var _=this
_.b=_.a=$
_.e=_.d=_.c=null
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i},
ao3:function ao3(d,e){this.a=d
this.b=e},
AG:function AG(d){this.a=d
this.b=0},
UZ:function UZ(d,e){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=d
_.z=e},
ao5:function ao5(){this.r=this.f=$},
V_:function V_(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.f=$
_.r=null
_.y=f
_.z=g
_.Q=h
_.as=i
_.at=j
_.ax=k
_.cx=_.CW=_.ch=_.ay=0
_.cy=$},
UY:function UY(){},
aTa(d){var w,v,u,t=null,s=new Uint8Array(64),r=new Uint8Array(64),q=new Float32Array(64),p=new Float32Array(64),o=C.ar(65535,t,!1,x.eg),n=x.I,m=C.ar(65535,t,!1,n),l=C.ar(64,t,!1,n)
n=C.ar(64,t,!1,n)
w=new Float32Array(64)
v=new Float32Array(64)
u=new Float32Array(64)
s=new A.ao4(s,r,q,p,o,m,l,n,w,v,u,new Int32Array(2048))
s.e=s.CY(B.x_,B.jA)
s.f=s.CY(B.x1,B.jA)
s.r=s.CY(B.x0,B.xt)
s.w=s.CY(B.x2,B.xB)
s.at_()
s.at3()
s.aeP(d)
return s},
ao4:function ao4(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=null
_.w=_.r=$
_.x=h
_.y=i
_.z=j
_.Q=k
_.as=l
_.at=m
_.ax=n
_.ay=o
_.ch=null
_.CW=0
_.cx=7},
yA:function yA(d,e){this.a=d
this.b=e},
Gn:function Gn(d,e){this.a=d
this.b=e},
Go:function Go(){},
UN:function UN(d,e,f,g,h,i,j,k,l){var _=this
_.y=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aT1(){var w=x.N
return new A.anQ(C.w(w,w),C.a([],x.dm),C.a([],x.t))},
qd:function qd(d,e){this.a=d
this.b=e},
arr:function arr(){},
anQ:function anQ(d,e,f){var _=this
_.c=_.b=_.a=0
_.d=-1
_.r=_.f=0
_.z=_.x=_.w=null
_.Q=""
_.at=null
_.ax=d
_.ay=1
_.CW=e
_.cx=f},
Zi:function Zi(d){var _=this
_.a=d
_.c=_.b=0
_.d=$
_.e=0},
Zz:function Zz(){this.b=this.a=null},
ZA:function ZA(){this.b=this.a=null},
mc:function mc(){},
ZC:function ZC(){this.b=this.a=null},
ZD:function ZD(){this.b=this.a=null},
ZG:function ZG(){this.b=this.a=null},
ZH:function ZH(){this.b=this.a=null},
Gv:function Gv(d){this.b=d},
ZF:function ZF(){this.c=null},
arX:function arX(){var _=this
_.w=_.r=_.f=_.e=$},
yK:function yK(d){this.a=d
this.c=$},
aUH(d){var w=new A.arZ(C.w(x.p,x.fh))
w.akw(d)
return w},
aMq(d,e,f,g){var w=d/255,v=e/255,u=f/255,t=g/255,s=v*(1-u),r=w*(1-t)
return D.f.t(D.f.bv((2*w<u?2*v*w+s+r:t*u-2*(u-w)*(t-v)+s+r)*255,0,255))},
as_(d,e){if(e===0)return 0
return D.f.t(D.b.bv(D.f.t(255*(1-(1-d/255)/(e/255))),0,255))},
as1(d,e){return D.f.t(D.b.bv(d+e-255,0,255))},
aMs(d,e){return D.f.t(D.b.bv(255-(255-e)*(255-d),0,255))},
as0(d,e){if(e===255)return 255
return D.f.t(D.f.bv(d/255/(1-e/255)*255,0,255))},
aMt(d,e){var w=d/255,v=e/255,u=1-v
return D.f.ce(255*(u*v*w+v*(1-u*(1-w))))},
aMo(d,e){var w=e/255,v=d/255
if(v<0.5)return D.f.ce(510*w*v)
else return D.f.ce(255*(1-2*(1-w)*(1-v)))},
aMu(d,e){if(e<128)return A.as_(d,2*e)
else return A.as0(d,2*(e-128))},
aMp(d,e){var w
if(e<128)return A.as1(d,2*e)
else{w=2*(e-128)
return w+d>255?255:d+w}},
aMr(d,e){return e<128?Math.min(d,2*e):Math.max(d,2*(e-128))},
aMn(d,e){return D.f.ce(e+d-2*e*d/255)},
aUI(b7,b8,b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=C.w(x.p,x.fW)
for(w=c1.length,v=0;u=c1.length,v<u;c1.length===w||(0,C.G)(c1),++v){t=c1[v]
b6.l(0,t.a,t)}if(b8===8)s=1
else s=b8===16?2:-1
r=A.dY(b5,b5,B.H,0,B.ae,c0,b5,0,u,b5,b9,!1)
if(s===-1)throw C.c(A.aG("PSD: unsupported bit depth: "+C.j(b8)))
q=b6.h(0,0)
p=b6.h(0,1)
o=b6.h(0,2)
n=b6.h(0,-1)
m=-s
for(w=r.a,w=w.ga1(w),l=u>=5,k=s===1,j=u===4,i=u>=2,u=u>=4;w.q();){h=w.gM(w)
m+=s
switch(b7){case B.KV:g=q.c
g===$&&C.b()
h.sae(0,k?g[m]:(g[m]<<8|g[m+1])>>>8)
g=p.c
g===$&&C.b()
h.sap(k?g[m]:(g[m]<<8|g[m+1])>>>8)
g=o.c
g===$&&C.b()
h.saq(0,k?g[m]:(g[m]<<8|g[m+1])>>>8)
if(u){g=n.c
g===$&&C.b()
g=k?g[m]:(g[m]<<8|g[m+1])>>>8}else g=255
h.sav(0,g)
if(h.gav(h)!==0){h.sae(0,(h.gae(h)+h.gav(h)-255)*255/h.gav(h))
h.sap((h.gap()+h.gav(h)-255)*255/h.gav(h))
h.saq(0,(h.gaq(h)+h.gav(h)-255)*255/h.gav(h))}break
case B.KX:g=q.c
g===$&&C.b()
g=k?g[m]:(g[m]<<8|g[m+1])>>>8
f=p.c
f===$&&C.b()
f=k?f[m]:(f[m]<<8|f[m+1])>>>8
e=o.c
e===$&&C.b()
e=k?e[m]:(e[m]<<8|e[m+1])>>>8
if(u){d=n.c
d===$&&C.b()
a0=k?d[m]:(d[m]<<8|d[m+1])>>>8}else a0=255
a1=((g*100>>>8)+16)/116
a2=(f-128)/500+a1
a3=a1-(e-128)/200
a4=Math.pow(a1,3)
a1=a4>0.008856?a4:(a1-0.13793103448275862)/7.787
a5=Math.pow(a2,3)
a2=a5>0.008856?a5:(a2-0.13793103448275862)/7.787
a6=Math.pow(a3,3)
a3=a6>0.008856?a6:(a3-0.13793103448275862)/7.787
a2=a2*95.047/100
a1=a1*100/100
a3=a3*108.883/100
a7=a2*3.2406+a1*-1.5372+a3*-0.4986
a8=a2*-0.9689+a1*1.8758+a3*0.0415
a9=a2*0.0557+a1*-0.204+a3*1.057
a7=a7>0.0031308?1.055*Math.pow(a7,0.4166666666666667)-0.055:12.92*a7
a8=a8>0.0031308?1.055*Math.pow(a8,0.4166666666666667)-0.055:12.92*a8
a9=a9>0.0031308?1.055*Math.pow(a9,0.4166666666666667)-0.055:12.92*a9
b0=[D.f.t(D.f.bv(a7*255,0,255)),D.f.t(D.f.bv(a8*255,0,255)),D.f.t(D.f.bv(a9*255,0,255))]
h.sae(0,b0[0])
h.sap(b0[1])
h.saq(0,b0[2])
h.sav(0,a0)
break
case B.KU:g=q.c
g===$&&C.b()
b1=k?g[m]:(g[m]<<8|g[m+1])>>>8
if(i){g=n.c
g===$&&C.b()
a0=k?g[m]:(g[m]<<8|g[m+1])>>>8}else a0=255
h.sae(0,b1)
h.sap(b1)
h.saq(0,b1)
h.sav(0,a0)
break
case B.KW:g=q.c
g===$&&C.b()
b2=k?g[m]:(g[m]<<8|g[m+1])>>>8
g=p.c
g===$&&C.b()
b3=k?g[m]:(g[m]<<8|g[m+1])>>>8
g=o.c
g===$&&C.b()
a1=k?g[m]:(g[m]<<8|g[m+1])>>>8
g=b6.h(0,j?-1:3).c
g===$&&C.b()
b4=k?g[m]:(g[m]<<8|g[m+1])>>>8
if(l){g=n.c
g===$&&C.b()
a0=k?g[m]:(g[m]<<8|g[m+1])>>>8}else a0=255
b0=A.aYI(255-b2,255-b3,255-a1,255-b4)
h.sae(0,b0[0])
h.sap(b0[1])
h.saq(0,b0[2])
h.sav(0,a0)
break
default:throw C.c(A.aG("Unhandled color mode: "+C.j(b7)))}}return r},
kW:function kW(d,e){this.a=d
this.b=e},
arZ:function arZ(d){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=$
_.r=_.f=null
_.x=_.w=$
_.y=null
_.z=d
_.ay=_.ax=_.at=_.as=$},
ZB:function ZB(d){this.c=d},
ZE:function ZE(d,e,f){var _=this
_.b=_.a=null
_.f=_.e=_.d=_.c=$
_.r=null
_.as=_.y=_.w=$
_.ay=d
_.ch=e
_.cx=$
_.cy=f},
b7p(d,e){var w,v
switch(d){case"lsct":w=new A.ZF()
v=e.c-e.d
e.N()
if(v>=12){if(e.eI(4)!=="8BIM")C.V(A.aG("Invalid key in layer additional data"))
w.c=e.eI(4)}if(v>=16)e.N()
return w
default:return new A.Gv(e)}},
yL:function yL(){},
arY:function arY(){this.a=null},
ZJ:function ZJ(){},
o_:function o_(d,e,f){this.a=d
this.b=e
this.c=f},
h7:function h7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Gw:function Gw(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
yM:function yM(d){var _=this
_.b=0
_.c=d
_.Q=_.r=_.f=0},
ZI:function ZI(){this.y=this.b=this.a=0},
o0(d,e){return(B.jQ[d>>>8]<<17|B.jQ[e>>>8]<<16|B.jQ[d&255]<<1|B.jQ[e&255])>>>0},
jZ:function jZ(d){var _=this
_.a=d
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
as2:function as2(){this.b=this.a=null},
a1u:function a1u(d){var _=this
_.b=_.a=0
_.c=d
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
io:function io(d,e){this.a=d
this.b=e},
ayl:function ayl(){this.a=null
this.b=$},
ays:function ays(d){this.a=d
this.c=this.b=0},
a1x:function a1x(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h},
aMW(d,e,f){var w=new A.ayu(e,f,d),v=x.I
w.e=C.ar(e,null,!1,v)
w.f=C.ar(e,null,!1,v)
return w},
ayu:function ayu(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=0
_.f=_.e=null
_.r=$
_.x=_.w=null
_.y=0
_.z=2
_.as=0
_.at=null},
a1y:function a1y(d,e,f,g){var _=this
_.a=d
_.c=_.b=0
_.d=e
_.r=_.f=_.e=1
_.w=f
_.x=g
_.y=!1
_.z=1
_.as=_.Q=$
_.ay=_.ax=0
_.CW=_.ch=null
_.cy=_.cx=$
_.dx=1
_.fr=_.dy=0
_.go=null
_.k2=_.k1=_.id=$},
v9:function v9(d,e){this.a=d
this.b=e},
f6:function f6(d,e){this.a=d
this.b=e},
k4:function k4(d,e){this.a=d
this.b=e},
ayv:function ayv(d){var _=this
_.b=_.a=0
_.d=null
_.f=d},
aTs(){return new A.apf(new Uint8Array(4096))},
apf:function apf(d){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=d
_.z=_.y=$
_.Q=null
_.as=$},
ayt:function ayt(){this.a=null
this.c=$},
aN1(d,e){var w=new Int32Array(4),v=new Int32Array(4),u=new Int8Array(4),t=new Int8Array(4),s=C.ar(8,null,!1,x.eW),r=C.ar(4,null,!1,x.dP)
return new A.az9(d,e,new A.azf(),new A.azj(),new A.azb(w,v),new A.azl(u,t),s,r,new Uint8Array(4))},
aWk(d,e,f){if(f===0)if(d===0)return e===0?6:5
else return e===0?4:0
return f},
az9:function az9(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=$
_.d=null
_.e=$
_.f=f
_.r=g
_.w=h
_.x=i
_.z=_.y=$
_.ax=_.at=_.as=_.Q=null
_.ch=_.ay=$
_.cx=_.CW=null
_.cy=$
_.db=j
_.dy=k
_.fr=null
_.fy=_.fx=$
_.go=null
_.id=l
_.p3=_.p2=_.p1=_.ok=_.k4=_.k3=_.k2=_.k1=$
_.R8=_.p4=null
_.x2=_.x1=_.to=_.ry=_.rx=_.RG=$
_.xr=null
_.y2=_.y1=0
_.cZ=$
_.c9=null
_.ca=_.aX=$
_.cb=null
_.bB=$},
azm:function azm(){},
aWh(d){var w=new A.IW(d)
w.b=254
w.c=0
w.d=-8
return w},
IW:function IW(d){var _=this
_.a=d
_.d=_.c=_.b=$
_.e=!1},
cd(d,e,f){return D.b.h5(D.b.G(d+2*e+f+2,2),32)},
b9s(d){var w,v,u,t,s,r=d.a,q=d.d
q=A.cd(r[q+-33],r[q+-32],r[q+-31])
r=d.a
w=d.d
w=A.cd(r[w+-32],r[w+-31],r[w+-30])
r=d.a
v=d.d
v=A.cd(r[v+-31],r[v+-30],r[v+-29])
r=d.a
u=d.d
t=C.a([q,w,v,A.cd(r[u+-30],r[u+-29],r[u+-28])],x.t)
for(s=0;s<4;++s)d.q9(s*32,4,t)},
b9k(d){var w,v=d.a,u=d.d,t=v[u+-33],s=v[u+-1],r=v[u+31],q=v[u+63]
u=v[u+95]
w=A.aS(d,null,0)
w.BG()[0]=16843009*A.cd(t,s,r)
w.d+=32
w.BG()[0]=16843009*A.cd(s,r,q)
w.d+=32
w.BG()[0]=16843009*A.cd(r,q,u)
w.d+=32
w.BG()[0]=16843009*A.cd(q,u,u)},
b9i(d){var w,v,u,t
for(w=d.a,v=d.d,u=4,t=0;t<4;++t)u+=w[v+(t-32)]+w[v+(-1+t*32)]
u=D.b.G(u,3)
for(t=0;t<4;++t){w=d.a
v=d.d+t*32
J.ly(w,v,v+4,u)}},
aN2(d,e){var w,v,u,t,s=d.a,r=d.d,q=255-s[r+-33]
for(w=0,v=0;v<e;++v){u=q+s[r+(w-1)]
for(t=0;t<e;++t)s[r+(w+t)]=$.BE()[u+s[r+(-32+t)]]
w+=32}},
b9q(d){A.aN2(d,4)},
b9r(d){A.aN2(d,8)},
b9p(d){A.aN2(d,16)},
b9o(d){var w=d.a,v=d.d,u=w[v+-1],t=w[v+31],s=w[v+63],r=w[v+95],q=w[v+-33],p=w[v+-32],o=w[v+-31],n=w[v+-30]
v=w[v+-29]
d.l(0,96,A.cd(t,s,r))
s=A.cd(u,t,s)
d.l(0,97,s)
d.l(0,64,s)
t=A.cd(q,u,t)
d.l(0,98,t)
d.l(0,65,t)
d.l(0,32,t)
u=A.cd(p,q,u)
d.l(0,99,u)
d.l(0,66,u)
d.l(0,33,u)
d.l(0,0,u)
q=A.cd(o,p,q)
d.l(0,67,q)
d.l(0,34,q)
d.l(0,1,q)
p=A.cd(n,o,p)
d.l(0,35,p)
d.l(0,2,p)
d.l(0,3,A.cd(v,n,o))},
b9n(d){var w=d.a,v=d.d,u=w[v+-32],t=w[v+-31],s=w[v+-30],r=w[v+-29],q=w[v+-28],p=w[v+-27],o=w[v+-26]
v=w[v+-25]
d.l(0,0,A.cd(u,t,s))
t=A.cd(t,s,r)
d.l(0,32,t)
d.l(0,1,t)
s=A.cd(s,r,q)
d.l(0,64,s)
d.l(0,33,s)
d.l(0,2,s)
r=A.cd(r,q,p)
d.l(0,96,r)
d.l(0,65,r)
d.l(0,34,r)
d.l(0,3,r)
q=A.cd(q,p,o)
d.l(0,97,q)
d.l(0,66,q)
d.l(0,35,q)
p=A.cd(p,o,v)
d.l(0,98,p)
d.l(0,67,p)
d.l(0,99,A.cd(o,v,v))},
b9u(d){var w=d.a,v=d.d,u=w[v+-1],t=w[v+31],s=w[v+63],r=w[v+-33],q=w[v+-32],p=w[v+-31],o=w[v+-30]
v=w[v+-29]
w=D.b.h5(D.b.G(r+q+1,1),32)
d.l(0,65,w)
d.l(0,0,w)
w=D.b.h5(D.b.G(q+p+1,1),32)
d.l(0,66,w)
d.l(0,1,w)
w=D.b.h5(D.b.G(p+o+1,1),32)
d.l(0,67,w)
d.l(0,2,w)
d.l(0,3,D.b.h5(D.b.G(o+v+1,1),32))
d.l(0,96,A.cd(s,t,u))
d.l(0,64,A.cd(t,u,r))
u=A.cd(u,r,q)
d.l(0,97,u)
d.l(0,32,u)
r=A.cd(r,q,p)
d.l(0,98,r)
d.l(0,33,r)
q=A.cd(q,p,o)
d.l(0,99,q)
d.l(0,34,q)
d.l(0,35,A.cd(p,o,v))},
b9t(d){var w=d.a,v=d.d,u=w[v+-32],t=w[v+-31],s=w[v+-30],r=w[v+-29],q=w[v+-28],p=w[v+-27],o=w[v+-26]
v=w[v+-25]
d.l(0,0,D.b.h5(D.b.G(u+t+1,1),32))
w=D.b.h5(D.b.G(t+s+1,1),32)
d.l(0,64,w)
d.l(0,1,w)
w=D.b.h5(D.b.G(s+r+1,1),32)
d.l(0,65,w)
d.l(0,2,w)
w=D.b.h5(D.b.G(r+q+1,1),32)
d.l(0,66,w)
d.l(0,3,w)
d.l(0,32,A.cd(u,t,s))
t=A.cd(t,s,r)
d.l(0,96,t)
d.l(0,33,t)
s=A.cd(s,r,q)
d.l(0,97,s)
d.l(0,34,s)
r=A.cd(r,q,p)
d.l(0,98,r)
d.l(0,35,r)
d.l(0,67,A.cd(q,p,o))
d.l(0,99,A.cd(p,o,v))},
b9l(d){var w=d.a,v=d.d,u=w[v+-1],t=w[v+31],s=w[v+63]
v=w[v+95]
d.l(0,0,D.b.h5(D.b.G(u+t+1,1),32))
w=D.b.h5(D.b.G(t+s+1,1),32)
d.l(0,32,w)
d.l(0,2,w)
w=D.b.h5(D.b.G(s+v+1,1),32)
d.l(0,64,w)
d.l(0,34,w)
d.l(0,1,A.cd(u,t,s))
t=A.cd(t,s,v)
d.l(0,33,t)
d.l(0,3,t)
s=A.cd(s,v,v)
d.l(0,65,s)
d.l(0,35,s)
d.l(0,99,v)
d.l(0,98,v)
d.l(0,97,v)
d.l(0,96,v)
d.l(0,66,v)
d.l(0,67,v)},
b9j(d){var w=d.a,v=d.d,u=w[v+-1],t=w[v+31],s=w[v+63],r=w[v+95],q=w[v+-33],p=w[v+-32],o=w[v+-31]
v=w[v+-30]
w=D.b.h5(D.b.G(u+q+1,1),32)
d.l(0,34,w)
d.l(0,0,w)
w=D.b.h5(D.b.G(t+u+1,1),32)
d.l(0,66,w)
d.l(0,32,w)
w=D.b.h5(D.b.G(s+t+1,1),32)
d.l(0,98,w)
d.l(0,64,w)
d.l(0,96,D.b.h5(D.b.G(r+s+1,1),32))
d.l(0,3,A.cd(p,o,v))
d.l(0,2,A.cd(q,p,o))
p=A.cd(u,q,p)
d.l(0,35,p)
d.l(0,1,p)
q=A.cd(t,u,q)
d.l(0,67,q)
d.l(0,33,q)
u=A.cd(s,t,u)
d.l(0,99,u)
d.l(0,65,u)
d.l(0,97,A.cd(r,s,t))},
b9F(d){var w
for(w=0;w<16;++w)d.lw(w*32,16,d,-32)},
b9D(d){var w,v,u,t,s
for(w=0,v=16;v>0;--v){u=d.a
t=d.d
s=t+w
J.ly(u,s,s+16,u[t+(w-1)])
w+=32}},
azd(d,e){var w,v,u
for(w=0;w<16;++w){v=e.a
u=e.d+w*32
J.ly(v,u,u+16,d)}},
b9v(d){var w,v,u,t
for(w=d.a,v=d.d,u=16,t=0;t<16;++t)u+=w[v+(-1+t*32)]+w[v+(t-32)]
A.azd(D.b.G(u,5),d)},
b9x(d){var w,v,u,t
for(w=d.a,v=d.d,u=8,t=0;t<16;++t)u+=w[v+(-1+t*32)]
A.azd(D.b.G(u,4),d)},
b9w(d){var w,v,u,t
for(w=d.a,v=d.d,u=8,t=0;t<16;++t)u+=w[v+(t-32)]
A.azd(D.b.G(u,4),d)},
b9y(d){A.azd(128,d)},
b9G(d){var w
for(w=0;w<8;++w)d.lw(w*32,8,d,-32)},
b9E(d){var w,v,u,t,s
for(w=0,v=0;v<8;++v){u=d.a
t=d.d
s=t+w
J.ly(u,s,s+8,u[t+(w-1)])
w+=32}},
aze(d,e){var w,v,u
for(w=0;w<8;++w){v=e.a
u=e.d+w*32
J.ly(v,u,u+8,d)}},
b9z(d){var w,v,u,t
for(w=d.a,v=d.d,u=8,t=0;t<8;++t)u+=w[v+(t-32)]+w[v+(-1+t*32)]
A.aze(D.b.G(u,4),d)},
b9A(d){var w,v,u,t
for(w=d.a,v=d.d,u=4,t=0;t<8;++t)u+=w[v+(t-32)]
A.aze(D.b.G(u,3),d)},
b9B(d){var w,v,u,t
for(w=d.a,v=d.d,u=4,t=0;t<8;++t)u+=w[v+(-1+t*32)]
A.aze(D.b.G(u,3),d)},
b9C(d){A.aze(128,d)},
qS(d,e,f,g,h){var w=e+f+g*32,v=d.a[d.d+w]+D.b.G(h,3)
if(!((v&-256)>>>0===0))v=v<0?0:255
d.l(0,w,v)},
azc(d,e,f,g,h){A.qS(d,0,0,e,f+g)
A.qS(d,0,1,e,f+h)
A.qS(d,0,2,e,f-h)
A.qS(d,0,3,e,f-g)},
b9m(){var w,v,u
if(!$.aWi){for(w=-255;w<=255;++w){v=$.ae3()
u=255+w
v[u]=w<0?-w:w
$.aK7()[u]=D.b.G(v[u],1)}for(w=-1020;w<=1020;++w){v=$.aK8()
if(w<-128)u=-128
else u=w>127?127:w
v[1020+w]=u}for(w=-112;w<=112;++w){v=$.ae4()
if(w<-16)u=-16
else u=w>15?15:w
v[112+w]=u}for(w=-255;w<=510;++w){v=$.BE()
if(w<0)u=0
else u=w>255?255:w
v[255+w]=u}$.aWi=!0}},
aza:function aza(){},
b9h(){var w,v=J.i5(3,x.D)
for(w=0;w<3;++w)v[w]=new Uint8Array(11)
return new A.IV(v)},
b9V(){var w,v,u,t,s=new Uint8Array(3),r=J.i5(4,x.c7)
for(w=x.dd,v=0;v<4;++v){u=J.i5(8,w)
for(t=0;t<8;++t)u[t]=A.b9h()
r[v]=u}D.x.hT(s,0,3,255)
return new A.azk(s,r)},
azf:function azf(){this.d=$},
azj:function azj(){this.b=null},
azl:function azl(d,e){var _=this
_.b=_.a=!1
_.c=!0
_.d=d
_.e=e},
IV:function IV(d){this.a=d},
azk:function azk(d,e){this.a=d
this.b=e},
azb:function azb(d,e){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=d
_.f=e},
vk:function vk(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
a27:function a27(){this.b=this.a=0},
a29:function a29(d,e,f){this.a=d
this.b=e
this.c=f},
a28:function a28(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=null
_.f=$},
a2a:function a2a(d,e,f){this.a=d
this.b=e
this.c=f},
aN3(d,e){var w=C.a([],x.A),v=C.a([],x.F),u=new Uint32Array(2),t=new A.a25(d,u)
u=t.d=C.bE(u.buffer,0,null)
u[0]=d.b1()
u[1]=d.b1()
u[2]=d.b1()
u[3]=d.b1()
u[4]=d.b1()
u[5]=d.b1()
u[6]=d.b1()
u[7]=d.b1()
return new A.IX(t,e,w,v)},
qT(d,e){return D.b.G(d+D.b.cj(1,e)-1,e)},
IX:function IX(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=null
_.r=_.f=_.e=0
_.w=null
_.z=_.y=_.x=0
_.Q=null
_.as=0
_.at=f
_.ax=g
_.ay=0
_.ch=null
_.CW=$
_.db=_.cy=_.cx=null},
UO:function UO(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=null
_.r=_.f=_.e=0
_.w=null
_.z=_.y=_.x=0
_.Q=null
_.as=0
_.at=f
_.ax=g
_.ay=0
_.ch=null
_.CW=$
_.db=_.cy=_.cx=null},
a25:function a25(d,e){var _=this
_.a=0
_.b=d
_.c=e
_.d=$},
azg:function azg(d,e){this.a=d
this.b=e},
azh(d,e,f){var w=d[e]
d[e]=(((w&4278255360)>>>0)+((f&4278255360)>>>0)&4278255360|(w&16711935)+(f&16711935)&16711935)>>>0},
os(d,e){return((d^e)>>>1&2139062143)+((d&e)>>>0)},
vm(d){if(d<0)return 0
if(d>255)return 255
return d},
azi(d,e,f){return Math.abs(e-f)-Math.abs(d-f)},
b9H(d,e,f){return 4278190080},
b9I(d,e,f){return e},
b9N(d,e,f){return d[f]},
b9O(d,e,f){return d[f+1]},
b9P(d,e,f){return d[f-1]},
b9Q(d,e,f){var w=d[f]
return A.os(A.os(e,d[f+1]),w)},
b9R(d,e,f){return A.os(e,d[f-1])},
b9S(d,e,f){return A.os(e,d[f])},
b9T(d,e,f){return A.os(d[f-1],d[f])},
b9U(d,e,f){return A.os(d[f],d[f+1])},
b9J(d,e,f){var w=d[f-1],v=d[f],u=d[f+1]
return A.os(A.os(e,w),A.os(v,u))},
b9K(d,e,f){var w=d[f],v=d[f-1]
return A.azi(w>>>24,e>>>24,v>>>24)+A.azi(w>>>16&255,e>>>16&255,v>>>16&255)+A.azi(w>>>8&255,e>>>8&255,v>>>8&255)+A.azi(w&255,e&255,v&255)<=0?w:e},
b9L(d,e,f){var w=d[f],v=d[f-1]
return(A.vm((e>>>24)+(w>>>24)-(v>>>24))<<24|A.vm((e>>>16&255)+(w>>>16&255)-(v>>>16&255))<<16|A.vm((e>>>8&255)+(w>>>8&255)-(v>>>8&255))<<8|A.vm((e&255)+(w&255)-(v&255)))>>>0},
b9M(d,e,f){var w,v,u,t=d[f],s=d[f-1],r=A.os(e,t)
t=r>>>24
w=r>>>16&255
v=r>>>8&255
u=r>>>0&255
return(A.vm(t+D.b.bR(t-(s>>>24),2))<<24|A.vm(w+D.b.bR(w-(s>>>16&255),2))<<16|A.vm(v+D.b.bR(v-(s>>>8&255),2))<<8|A.vm(u+D.b.bR(u-(s&255),2)))>>>0},
vl:function vl(d,e){this.a=d
this.b=e},
a26:function a26(d){var _=this
_.a=d
_.c=_.b=0
_.d=null
_.e=0},
azu:function azu(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
J0:function J0(){},
UP:function UP(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=$
_.r=1
_.x=_.w=$},
aSA(){var w=new Uint8Array(128),v=new Int16Array(128)
w=new A.Us(w,v,new Int16Array(128))
w.O5(0)
return w},
b5a(){var w,v=J.i5(5,x.bs)
for(w=0;w<5;++w)v[w]=A.aSA()
return new A.Ej(v)},
Us:function Us(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$
_.f=_.e=0},
Ej:function Ej(d){this.a=d},
A3:function A3(d,e){this.a=d
this.b=e},
a2o:function a2o(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
UQ:function UQ(d,e){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=d
_.z=e
_.as=0
_.at=null
_.ch=_.ay=0},
azv:function azv(){this.b=this.a=null},
b5i(d){return new A.Ep(d.a,d.b,D.x.fw(d.c,0))},
amX:function amX(d,e){this.a=d
this.b=e},
Ep:function Ep(d,e,f){this.a=d
this.b=e
this.c=f},
dY(d,e,f,g,h,i,j,k,l,m,n,o){var w=new A.pL(null,null,null,d,k,h,g,0)
w.goH().push(w)
w.a_A(n,i,e,f,j,l,m,B.H,o)
return w},
tD(d,e,f){var w,v,u,t,s=null,r=d.a
r=r==null?s:r.lj(0,f)
w=d.e
w=w==null?s:A.ajY(w)
v=d.c
v=v==null?s:A.b5i(v)
u=d.w
t=d.r
r=new A.pL(r,v,w,s,t,u,d.y,d.z)
r.akk(d,e,f)
return r},
TV:function TV(d,e){this.a=d
this.b=e},
pL:function pL(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=null
_.c=e
_.d=null
_.e=f
_.f=g
_.r=h
_.w=i
_.x=$
_.y=j
_.z=k},
h2:function h2(){},
b5n(d,e,f){return new A.xA(new Uint16Array(d*e*f),d,e,f)},
xA:function xA(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
b5o(d,e,f){return new A.xB(new Float32Array(d*e*f),d,e,f)},
xB:function xB(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
Es:function Es(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
Et:function Et(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
Eu:function Eu(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
Ev:function Ev(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
xC:function xC(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
Ew:function Ew(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
xD:function xD(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
b5p(d,e,f){return new A.xE(new Uint32Array(d*e*f),d,e,f)},
xE:function xE(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
xF:function xF(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.a=g
_.b=h
_.c=i},
aSR(d,e,f){return new A.xG(new Uint8Array(d*e*f),null,d,e,f)},
xG:function xG(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},
aqX:function aqX(){},
YN:function YN(d,e,f){this.c=d
this.a=e
this.b=f},
YO:function YO(d,e,f){this.c=d
this.a=e
this.b=f},
YP:function YP(d,e,f){this.c=d
this.a=e
this.b=f},
YQ:function YQ(d,e,f){this.c=d
this.a=e
this.b=f},
YR:function YR(d,e,f){this.c=d
this.a=e
this.b=f},
YS:function YS(d,e,f){this.c=d
this.a=e
this.b=f},
YT:function YT(d,e,f){this.c=d
this.a=e
this.b=f},
YU:function YU(d,e,f){this.c=d
this.a=e
this.b=f},
aU7(d){return new A.m7(new Uint8Array(C.bf(d.c)),d.a,d.b)},
m7:function m7(d,e,f){this.c=d
this.a=e
this.b=f},
aUf(d){return new A.ug(-1,0,-d.c,d)},
ug:function ug(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aUg(d){return new A.uh(-1,0,-d.c,d)},
uh:function uh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aUh(d){return new A.ui(-1,0,-d.c,d)},
ui:function ui(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aUi(d){return new A.uj(-1,0,-d.c,d)},
uj:function uj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aUj(d){return new A.uk(-1,0,-d.c,d)},
uk:function uk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aUk(d){return new A.ul(-1,0,-d.c,d)},
ul:function ul(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Zc(d){return new A.um(-1,0,0,-1,0,d)},
um:function um(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aUl(d){return new A.un(-1,0,-d.c,d)},
un:function un(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Zd(d){return new A.uo(-1,0,0,-2,0,d)},
uo:function uo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aUm(d){return new A.up(-1,0,-d.c,d)},
up:function up(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ze(d){return new A.uq(-1,0,0,-(d.c<<2>>>0),d)},
uq:function uq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aMh(d){return new A.ur(-1,0,-d.c,d)},
ur:function ur(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eN:function eN(){},
aG(d){return new A.Uz(d)},
Uz:function Uz(d){this.a=d},
br(d,e,f,g){return new A.h3(d,g,f==null?d.length:g+f,g,e)},
aS(d,e,f){var w=d.a,v=d.d+f,u=d.b,t=e==null?d.c:v+e
return new A.h3(w,u,t,v,d.e)},
h3:function h3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
G8(d,e){return new A.aqI(d,new Uint8Array(e))},
aqI:function aqI(d,e){this.a=0
this.b=d
this.c=e},
yQ:function yQ(d,e){this.a=d
this.b=e},
aTR(d){return new Int8Array(d)},
b9a(d){throw C.c(C.a6("Uint64List not supported on the web."))},
b5x(d,e,f){C.oQ(d,e,f)
return f==null?new Int8Array(d,e):new Int8Array(d,e,f)},
b4O(d){return C.aM5(d,0,null)},
b4P(d){return d.aLT(0,0,null)},
vS(d,e){var w,v,u=J.ak(d),t=u.gm(d)
e^=4294967295
for(w=0;t>=8;){v=w+1
e=B.cY[(e^u.h(d,w))&255]^e>>>8
w=v+1
e=B.cY[(e^u.h(d,v))&255]^e>>>8
v=w+1
e=B.cY[(e^u.h(d,w))&255]^e>>>8
w=v+1
e=B.cY[(e^u.h(d,v))&255]^e>>>8
v=w+1
e=B.cY[(e^u.h(d,w))&255]^e>>>8
w=v+1
e=B.cY[(e^u.h(d,v))&255]^e>>>8
v=w+1
e=B.cY[(e^u.h(d,w))&255]^e>>>8
w=v+1
e=B.cY[(e^u.h(d,v))&255]^e>>>8
t-=8}if(t>0)do{v=w+1
e=B.cY[(e^u.h(d,w))&255]^e>>>8
if(--t,t>0){w=v
continue}else break}while(!0)
return(e^4294967295)>>>0},
aIJ(d,e,f){var w,v,u
for(w=e,v=0;w<f;++w){u=B.ob.h(0,d[w])
if(u==null)throw C.c(A.aKP("Invalid BlurHash encoding: invalid character "+C.j(u)))
v=v*83+u}return v},
adK(d,e){var w,v,u,t=B.ob.gcR(B.ob)
t=C.W(t,!0,C.n(t).i("h.E"))
for(w=1,v="";w<=e;++w){u=D.f.t(D.f.cq(d/Math.pow(83,e-w),83))
v+=C.j(u>=0&&u<t.length?t[u]:null)}return v.charCodeAt(0)==0?v:v},
bgX(d){if(x.D.b(d))return d
if(x.Q.b(d))return C.bE(d.buffer,0,null)
return new Uint8Array(C.bf(d))},
bgT(d){return d},
aYK(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=e.gcu(e),n=e.gbL(e),m=d.gcu(d)<e.gcu(e)?d.gcu(d):e.gcu(e),l=d.gbL(d)<e.gbL(e)?d.gbL(d):e.gbL(e)
if(d.gTm())d.aCs(d.gvT())
w=n/l
v=o/m
u=x.p
t=J.i5(l,u)
for(s=0;s<l;++s)t[s]=D.f.t(s*w)
r=J.i5(m,u)
for(q=0;q<m;++q)r[q]=D.f.t(q*v)
if(f===B.lR)A.bbV(e,d,g,h,m,l,r,t,p,B.rg)
else A.bbB(e,d,g,h,m,l,r,t,f,!1,p,B.rg)
return d},
bbV(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r,q
for(w=null,v=0;v<i;++v)for(u=g+v,t=0;t<h;++t){s=j[t]
r=k[v]
q=d.a
w=q==null?null:q.ee(s,r,w)
if(w==null)w=new A.eN()
e.Lr(f+t,u,w)}},
bbB(d,e,f,g,h,i,j,k,l,m,n,o){var w,v,u,t,s,r,q
for(w=null,v=0;v<i;++v)for(u=g+v,t=0;t<h;++t){s=j[t]
r=k[v]
q=d.a
w=q==null?null:q.ee(s,r,w)
if(w==null)w=new A.eN()
A.bf4(e,f+t,u,w,l,!1,n,o)}},
bf4(a5,a6,a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
if(!a5.a7H(a6,a7))return a5
if(a9===B.lR||a5.gTm())if(a5.a7H(a6,a7)){a5.VJ(a6,a7).eN(0,a8)
return a5}w=a8.geq()
v=a8.gec()
u=a8.geh()
t=a8.gm(a8)<4?1:a8.geu()
if(t===0)return a5
s=a5.VJ(a6,a7)
r=s.geq()
q=s.gec()
p=s.geh()
o=s.geu()
switch(a9.a){case 0:return a5
case 1:break
case 2:w=Math.max(r,w)
v=Math.max(q,v)
u=Math.max(p,u)
break
case 3:w=1-(1-w)*(1-r)
v=1-(1-v)*(1-q)
u=1-(1-u)*(1-p)
break
case 4:n=t*o
m=1-o
l=1-t
k=w*m+r*l
j=v*m+q*l
i=u*m+p*l
l=D.f.bv(t,0.01,1)
m=t<0
h=m?0:1
g=D.f.bv(w/l*h,0,0.99)
h=D.f.bv(t,0.01,1)
l=m?0:1
f=D.f.bv(v/h*l,0,0.99)
l=D.f.bv(t,0.01,1)
m=m?0:1
e=D.f.bv(u/l*m,0,0.99)
m=r*t
l=q*t
h=p*t
d=n<w*o+m?0:1
a0=n<v*o+l?0:1
a1=n<u*o+h?0:1
w=(n+k)*(1-d)+(m/(1-g)+k)*d
v=(n+j)*(1-a0)+(l/(1-f)+j)*a0
u=(n+i)*(1-a1)+(h/(1-e)+i)*a1
break
case 5:w=r+w
v=q+v
u=p+u
break
case 6:w=Math.min(r,w)
v=Math.min(q,v)
u=Math.min(p,u)
break
case 7:w=r*w
v=q*v
u=p*u
break
case 8:w=w!==0?1-(1-r)/w:0
v=v!==0?1-(1-q)/v:0
u=u!==0?1-(1-p)/u:0
break
case 9:m=1-o
l=1-t
h=w*m
a2=r*l
w=2*r<o?2*w*r+h+a2:t*o-2*(o-r)*(t-w)+h+a2
h=v*m
a2=q*l
v=2*q<o?2*v*q+h+a2:t*o-2*(o-q)*(t-v)+h+a2
m=u*m
l=p*l
u=2*p<o?2*u*p+m+l:t*o-2*(o-p)*(t-u)+m+l
break
case 10:m=o===0
if(m)w=0
else{l=r/o
w=r*(t*l+2*w*(1-l))+w*(1-o)+r*(1-t)}if(m)v=0
else{l=q/o
v=q*(t*l+2*v*(1-l))+v*(1-o)+q*(1-t)}if(m)u=0
else{m=p/o
u=p*(t*m+2*u*(1-m))+u*(1-o)+p*(1-t)}break
case 11:m=2*w
l=1-o
h=1-t
a2=w*l
a3=r*h
w=m<t?m*r+a2+a3:t*o-2*(o-r)*(t-w)+a2+a3
m=2*v
a2=v*l
a3=q*h
v=m<t?m*q+a2+a3:t*o-2*(o-q)*(t-v)+a2+a3
m=2*u
l=u*l
h=p*h
u=m<t?m*p+l+h:t*o-2*(o-p)*(t-u)+l+h
break
case 12:w=Math.abs(w-r)
v=Math.abs(v-q)
u=Math.abs(u-p)
break
case 13:w=r-w
v=q-v
u=p-u
break
case 14:w=w!==0?r/w:0
v=v!==0?q/v:0
u=u!==0?p/u:0
break}a4=1-t
s.seq(w*t+r*o*a4)
s.sec(v*t+q*o*a4)
s.seh(u*t+p*o*a4)
s.seu(t+o*a4)
return a5},
b4K(a3,a4,a5,a6,a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a9<16384,a2=a5>a7?a7:a5
for(w=1;w<=a2;)w=w<<1>>>0
w=w>>>1
v=w>>>1
u=C.a([0,0],x.t)
for(t=w,w=v;w>=1;t=w,w=v){s=a4+a8*(a7-t)
r=a8*w
q=a8*t
p=a6*w
o=a6*t
for(n=(a5&w)>>>0!==0,m=a6*(a5-t),l=a4;l<=s;l+=q){k=l+m
for(j=l;j<=k;j+=o){i=j+p
h=j+r
g=h+p
if(a1){A.DU(a3[j],a3[h],u)
f=u[0]
e=u[1]
A.DU(a3[i],a3[g],u)
d=u[0]
a0=u[1]
A.DU(f,d,u)
a3[j]=u[0]
a3[i]=u[1]
A.DU(e,a0,u)
a3[h]=u[0]
a3[g]=u[1]}else{A.DV(a3[j],a3[h],u)
f=u[0]
e=u[1]
A.DV(a3[i],a3[g],u)
d=u[0]
a0=u[1]
A.DV(f,d,u)
a3[j]=u[0]
a3[i]=u[1]
A.DV(e,a0,u)
a3[h]=u[0]
a3[g]=u[1]}}if(n){h=j+r
if(a1){A.DU(a3[j],a3[h],u)
f=u[0]
a3[h]=u[1]}else{A.DV(a3[j],a3[h],u)
f=u[0]
a3[h]=u[1]}a3[j]=f}}if((a7&w)>>>0!==0){k=l+m
for(j=l;j<=k;j+=o){i=j+p
if(a1){A.DU(a3[j],a3[i],u)
f=u[0]
a3[i]=u[1]}else{A.DV(a3[j],a3[i],u)
f=u[0]
a3[i]=u[1]}a3[j]=f}}v=w>>>1}},
DU(d,e,f){var w,v,u,t,s=$.iz()
s[0]=d
w=$.j1()
v=w[0]
s[0]=e
u=w[0]
t=v+(u&1)+D.b.G(u,1)
f[0]=t
f[1]=t-u},
DV(d,e,f){var w=d-D.b.G(e,1)&65535
f[1]=w
f[0]=e+w-32768&65535},
bfd(d){var w,v,u,t,s,r,q,p,o,n=null
if(A.aT9().aLe(d))return new A.UY()
w=new A.Zi(A.aT1())
if(w.Jy(d))return w
v=new A.alv()
v.f=A.br(d,!1,n,0)
v.a=new A.U7(C.a([],x.b))
if(v.ZI())return v
u=new A.azv()
if(u.Jy(d))return u
t=new A.ayt()
if(t.a0U(A.br(d,!1,n,0))!=null)return t
if(A.aUH(d).c===943870035)return new A.arY()
if(A.b4J(d))return new A.ak_()
if(A.aKQ(A.br(d,!1,n,0)))return new A.OH(!1)
s=new A.ayl()
r=A.br(d,!1,n,0)
q=s.a=new A.a1u(B.l8)
q.w6(0,r)
if(q.a7Y())return s
p=new A.amZ()
q=A.br(d,!1,n,0)
p.a=q
q=A.aSB(q)
p.b=q
if(q!=null)return p
o=new A.as2()
if(o.kW(d)!=null)return o
return n},
bgr(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if($.aNB==null){w=$.aNB=new Uint8Array(768)
for(v=-256;v<0;++v)w[256+v]=0
for(v=0;v<256;++v)w[256+v]=v
for(v=256;v<512;++v)w[256+v]=255}for(v=0;v<64;++v)a6[v]=a4[v]*a3[v]
for(u=0,v=0;v<8;++v,u+=8){w=1+u
t=a6[w]
if(t===0&&a6[2+u]===0&&a6[3+u]===0&&a6[4+u]===0&&a6[5+u]===0&&a6[6+u]===0&&a6[7+u]===0){w=D.b.G(5793*a6[u]+512,10)
s=(w&2147483647)-((w&2147483648)>>>0)
a6[u]=s
a6[u+1]=s
a6[u+2]=s
a6[u+3]=s
a6[u+4]=s
a6[u+5]=s
a6[u+6]=s
a6[u+7]=s
continue}r=D.b.G(5793*a6[u]+128,8)
q=(r&2147483647)-((r&2147483648)>>>0)
r=4+u
p=D.b.G(5793*a6[r]+128,8)
o=(p&2147483647)-((p&2147483648)>>>0)
p=2+u
n=a6[p]
m=6+u
l=a6[m]
k=7+u
j=a6[k]
i=D.b.G(2896*(t-j)+128,8)
h=(i&2147483647)-((i&2147483648)>>>0)
j=D.b.G(2896*(t+j)+128,8)
g=(j&2147483647)-((j&2147483648)>>>0)
j=3+u
t=a6[j]<<4
f=(t&2147483647)-((t&2147483648)>>>0)
t=5+u
i=a6[t]<<4
e=(i&2147483647)-((i&2147483648)>>>0)
i=D.b.G(q-o+1,1)
s=(i&2147483647)-((i&2147483648)>>>0)
i=D.b.G(q+o+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.b.G(n*3784+l*1567+128,8)
i=(i&2147483647)-((i&2147483648)>>>0)
d=D.b.G(n*1567-l*3784+128,8)
n=(d&2147483647)-((d&2147483648)>>>0)
d=D.b.G(h-e+1,1)
d=(d&2147483647)-((d&2147483648)>>>0)
a0=D.b.G(h+e+1,1)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.b.G(g+f+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=D.b.G(g-f+1,1)
f=(a1&2147483647)-((a1&2147483648)>>>0)
a1=D.b.G(q-i+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
i=D.b.G(q+i+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.b.G(s-n+1,1)
i=(i&2147483647)-((i&2147483648)>>>0)
a2=D.b.G(s+n+1,1)
o=(a2&2147483647)-((a2&2147483648)>>>0)
a2=D.b.G(h*2276+a0*3406+2048,12)
s=(a2&2147483647)-((a2&2147483648)>>>0)
a0=D.b.G(h*3406-a0*2276+2048,12)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.b.G(f*799+d*4017+2048,12)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
d=D.b.G(f*4017-d*799+2048,12)
f=(d&2147483647)-((d&2147483648)>>>0)
a6[u]=q+s
a6[k]=q-s
a6[w]=o+a0
a6[m]=o-a0
a6[p]=i+f
a6[t]=i-f
a6[j]=a1+h
a6[r]=a1-h}for(v=0;v<8;++v){w=8+v
t=a6[w]
if(t===0&&a6[16+v]===0&&a6[24+v]===0&&a6[32+v]===0&&a6[40+v]===0&&a6[48+v]===0&&a6[56+v]===0){t=D.b.G(5793*a6[v]+8192,14)
s=(t&2147483647)-((t&2147483648)>>>0)
a6[v]=s
a6[w]=s
a6[16+v]=s
a6[24+v]=s
a6[32+v]=s
a6[40+v]=s
a6[48+v]=s
a6[56+v]=s
continue}r=D.b.G(5793*a6[v]+2048,12)
q=(r&2147483647)-((r&2147483648)>>>0)
r=32+v
p=D.b.G(5793*a6[r]+2048,12)
o=(p&2147483647)-((p&2147483648)>>>0)
p=16+v
n=a6[p]
m=48+v
l=a6[m]
k=56+v
j=a6[k]
i=D.b.G(2896*(t-j)+2048,12)
h=(i&2147483647)-((i&2147483648)>>>0)
j=D.b.G(2896*(t+j)+2048,12)
g=(j&2147483647)-((j&2147483648)>>>0)
j=24+v
f=a6[j]
t=40+v
e=a6[t]
i=D.b.G(q-o+1,1)
s=(i&2147483647)-((i&2147483648)>>>0)
i=D.b.G(q+o+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.b.G(n*3784+l*1567+2048,12)
i=(i&2147483647)-((i&2147483648)>>>0)
d=D.b.G(n*1567-l*3784+2048,12)
n=(d&2147483647)-((d&2147483648)>>>0)
d=D.b.G(h-e+1,1)
d=(d&2147483647)-((d&2147483648)>>>0)
a0=D.b.G(h+e+1,1)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.b.G(g+f+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=D.b.G(g-f+1,1)
f=(a1&2147483647)-((a1&2147483648)>>>0)
a1=D.b.G(q-i+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
i=D.b.G(q+i+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.b.G(s-n+1,1)
i=(i&2147483647)-((i&2147483648)>>>0)
a2=D.b.G(s+n+1,1)
o=(a2&2147483647)-((a2&2147483648)>>>0)
a2=D.b.G(h*2276+a0*3406+2048,12)
s=(a2&2147483647)-((a2&2147483648)>>>0)
a0=D.b.G(h*3406-a0*2276+2048,12)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.b.G(f*799+d*4017+2048,12)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
d=D.b.G(f*4017-d*799+2048,12)
f=(d&2147483647)-((d&2147483648)>>>0)
a6[v]=q+s
a6[k]=q-s
a6[w]=o+a0
a6[m]=o-a0
a6[p]=i+f
a6[t]=i-f
a6[j]=a1+h
a6[r]=a1-h}for(w=$.aNB,v=0;v<64;++v){w.toString
t=D.b.G(a6[v]+8,4)
a5[v]=w[384+((t&2147483647)-((t&2147483648)>>>0))]}},
bfr(e1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8=null,d9="ifd0",e0=e1.r
if(e0.h(0,d9).a.an(0,274)){w=e0.h(0,d9).a.h(0,274)
w=w==null?d8:J.NT(w)
w.toString
v=w}else v=0
w=e1.d
u=w.e
u.toString
w=w.d
w.toString
t=v>=5&&v<=8
if(t)s=w
else s=u
if(t)r=u
else r=w
q=A.dY(d8,d8,B.H,0,B.ae,r,d8,0,3,d8,s,!1)
q.e=A.ajY(e0)
q.ga6g().h(0,d9).a.T(0,274)
p=w-1
o=u-1
e0=e1.Q
switch(e0.length){case 1:n=e0[0]
m=n.e
l=n.f
k=n.r
e0=v===8
w=v===7
u=v===6
j=v===5
i=v===4
h=v===3
g=v===2
f=0
while(!0){e=e1.d.d
e.toString
if(!(f<e))break
d=m[D.b.e6(f,k)]
e=p-f
a0=0
while(!0){a1=e1.d.e
a1.toString
if(!(a0<a1))break
a2=d[D.b.e6(a0,l)]
if(g){a1=q.a
if(a1!=null)a1.cD(o-a0,f,a2,a2,a2)}else if(h){a1=q.a
if(a1!=null)a1.cD(o-a0,e,a2,a2,a2)}else if(i){a1=q.a
if(a1!=null)a1.cD(a0,e,a2,a2,a2)}else if(j){a1=q.a
if(a1!=null)a1.cD(f,a0,a2,a2,a2)}else if(u){a1=q.a
if(a1!=null)a1.cD(e,a0,a2,a2,a2)}else if(w){a1=q.a
if(a1!=null)a1.cD(e,o-a0,a2,a2,a2)}else{a1=q.a
if(e0){if(a1!=null)a1.cD(f,o-a0,a2,a2,a2)}else if(a1!=null)a1.cD(a0,f,a2,a2,a2)}++a0}++f}break
case 3:n=e0[0]
a3=e0[1]
a4=e0[2]
a5=n.e
a6=a3.e
a7=a4.e
l=n.f
k=n.r
a8=a3.f
a9=a3.r
b0=a4.f
b1=a4.r
e0=v===8
w=v===7
u=v===6
j=v===5
i=v===4
h=v===3
g=v===2
f=0
while(!0){e=e1.d.d
e.toString
if(!(f<e))break
b2=D.b.e6(f,k)
b3=D.b.e6(f,a9)
b4=D.b.e6(f,b1)
d=a5[b2]
b5=a6[b3]
b6=a7[b4]
e=p-f
a0=0
while(!0){a1=e1.d.e
a1.toString
if(!(a0<a1))break
b7=D.b.e6(a0,l)
b8=D.b.e6(a0,a8)
b9=D.b.e6(a0,b0)
a2=d[b7]<<8>>>0
c0=b5[b8]-128
c1=b6[b9]-128
a1=D.b.G(a2+359*c1+128,8)
c2=D.b.bv((a1&2147483647)-((a1&2147483648)>>>0),0,255)
a1=D.b.G(a2-88*c0-183*c1+128,8)
c3=D.b.bv((a1&2147483647)-((a1&2147483648)>>>0),0,255)
a1=D.b.G(a2+454*c0+128,8)
c4=D.b.bv((a1&2147483647)-((a1&2147483648)>>>0),0,255)
if(g){a1=q.a
if(a1!=null)a1.cD(o-a0,f,c2,c3,c4)}else if(h){a1=q.a
if(a1!=null)a1.cD(o-a0,e,c2,c3,c4)}else if(i){a1=q.a
if(a1!=null)a1.cD(a0,e,c2,c3,c4)}else if(j){a1=q.a
if(a1!=null)a1.cD(f,a0,c2,c3,c4)}else if(u){a1=q.a
if(a1!=null)a1.cD(e,a0,c2,c3,c4)}else if(w){a1=q.a
if(a1!=null)a1.cD(e,o-a0,c2,c3,c4)}else{a1=q.a
if(e0){if(a1!=null)a1.cD(f,o-a0,c2,c3,c4)}else if(a1!=null)a1.cD(a0,f,c2,c3,c4)}++a0}++f}break
case 4:w=e1.c
if(w==null)throw C.c(A.aG("Unsupported color mode (4 components)"))
c5=w.d!==0&&!0
n=e0[0]
a3=e0[1]
a4=e0[2]
c6=e0[3]
a5=n.e
a6=a3.e
a7=a4.e
c7=c6.e
l=n.f
k=n.r
a8=a3.f
a9=a3.r
b0=a4.f
b1=a4.r
c8=c6.f
c9=c6.r
e0=v===8
w=v===7
u=v===6
j=v===5
i=v===4
h=v===3
g=v===2
e=!c5
f=0
while(!0){a1=e1.d.d
a1.toString
if(!(f<a1))break
b2=D.b.e6(f,k)
b3=D.b.e6(f,a9)
b4=D.b.e6(f,b1)
d0=D.b.e6(f,c9)
d=a5[b2]
b5=a6[b3]
b6=a7[b4]
d1=c7[d0]
a1=p-f
a0=0
while(!0){d2=e1.d.e
d2.toString
if(!(a0<d2))break
b7=D.b.e6(a0,l)
b8=D.b.e6(a0,a8)
b9=D.b.e6(a0,b0)
d3=D.b.e6(a0,c8)
if(e){d4=d[b7]
d5=b5[b8]
a2=b6[b9]
d6=d1[d3]}else{a2=d[b7]
c0=b5[b8]
c1=b6[b9]
d6=d1[d3]
d2=c1-128
d4=255-D.b.bv(D.f.t(a2+1.402*d2),0,255)
d7=c0-128
d5=255-D.f.t(D.f.bv(a2-0.3441363*d7-0.71413636*d2,0,255))
a2=255-D.b.bv(D.f.t(a2+1.772*d7),0,255)}d2=D.b.G(d4*d6,8)
c2=(d2&2147483647)-((d2&2147483648)>>>0)
d2=D.b.G(d5*d6,8)
c3=(d2&2147483647)-((d2&2147483648)>>>0)
d2=D.b.G(a2*d6,8)
c4=(d2&2147483647)-((d2&2147483648)>>>0)
if(g){d2=q.a
if(d2!=null)d2.cD(o-a0,f,c2,c3,c4)}else if(h){d2=q.a
if(d2!=null)d2.cD(o-a0,a1,c2,c3,c4)}else if(i){d2=q.a
if(d2!=null)d2.cD(a0,a1,c2,c3,c4)}else if(j){d2=q.a
if(d2!=null)d2.cD(f,a0,c2,c3,c4)}else if(u){d2=q.a
if(d2!=null)d2.cD(a1,a0,c2,c3,c4)}else if(w){d2=q.a
if(d2!=null)d2.cD(a1,o-a0,c2,c3,c4)}else{d2=q.a
if(e0){if(d2!=null)d2.cD(f,o-a0,c2,c3,c4)}else if(d2!=null)d2.cD(a0,f,c2,c3,c4)}++a0}++f}break
default:throw C.c(A.aG("Unsupported color mode"))}return q},
ba1(d,e,f,g,h,i){A.b9Z(i,d,e,f,g,h,!0,i)},
ba2(d,e,f,g,h,i){A.ba_(i,d,e,f,g,h,!0,i)},
ba0(d,e,f,g,h,i){A.b9Y(i,d,e,f,g,h,!0,i)},
A2(d,e,f,g,h){var w,v,u,t,s,r,q
for(w=d.a,v=d.d,u=e.a,t=e.d,s=f.a,r=f.d,q=0;q<g;++q)s[r+q]=w[v+q]+u[t+q]},
b9Z(d,e,f,g,h,i,j,k){var w,v,u=null,t=h*g,s=h+i,r=A.br(d,!1,u,t),q=A.br(d,!1,u,t),p=A.aS(q,u,0)
if(h===0){q.l(0,0,r.a[r.d])
A.A2(A.aS(r,u,1),p,A.aS(q,u,1),e-1,!0)
p.d+=g
r.d+=g
q.d+=g
h=1}for(w=-g,v=e-1;h<s;){A.A2(r,A.aS(p,u,w),q,1,!0)
A.A2(A.aS(r,u,1),p,A.aS(q,u,1),v,!0);++h
p.d+=g
r.d+=g
q.d+=g}},
ba_(d,e,f,g,h,i,j,k){var w=null,v=h*g,u=h+i,t=A.br(d,!1,w,v),s=A.br(k,!1,w,v),r=A.aS(s,w,0)
if(h===0){s.l(0,0,t.a[t.d])
A.A2(A.aS(t,w,1),r,A.aS(s,w,1),e-1,!0)
t.d+=g
s.d+=g
h=1}else r.d-=g
for(;h<u;){A.A2(t,r,s,e,!0);++h
r.d+=g
t.d+=g
s.d+=g}},
b9Y(d,e,f,a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a1*a0,j=a1+a2,i=A.br(d,!1,l,k),h=A.br(a4,!1,l,k),g=A.aS(h,l,0)
if(a1===0){h.l(0,0,i.a[i.d])
A.A2(A.aS(i,l,1),g,A.aS(h,l,1),e-1,!0)
g.d+=a0
i.d+=a0
h.d+=a0
a1=1}for(w=-a0;a1<j;){A.A2(i,A.aS(g,l,w),h,1,!0)
for(v=h.a,u=h.d,t=i.a,s=i.d,r=g.a,q=g.d,p=1;p<e;++p){o=p-a0
n=r[q+(p-1)]+r[q+o]-r[q+(o-1)]
if((n&4294967040)>>>0===0)m=n
else m=n<0?0:255
o=t[s+p]
v[u+p]=o+m}++a1
g.d=q+a0
i.d+=a0
h.d+=a0}},
aID(d){var w
d=(d&-d)>>>0
w=d!==0?31:32
if((d&65535)!==0)w-=16
if((d&16711935)!==0)w-=8
if((d&252645135)!==0)w-=4
if((d&858993459)!==0)w-=2
return(d&1431655765)!==0?w-1:w},
bh3(d){$.aPa().l(0,0,d)
return $.b0K().h(0,0)},
aZY(d,e,f,g){return(D.b.bv(d,0,255)|D.b.bv(e,0,255)<<8|D.b.bv(f,0,255)<<16|D.b.bv(g,0,255)<<24)>>>0},
lr(d,e,f){var w,v,u,t,s=e.gm(e),r=e.gbw(),q=d.gd4(),p=q==null?null:q.gbw()
if(p==null)p=d.gbw()
w=d.gm(d)
if(s===1){v=d.gm(d)>2?d.gfd():d.h(0,0)
e.l(0,0,A.aO2(C.eS(d.h(0,0))?D.f.ek(v):v,p,r))}else if(s<=w)for(u=0;u<s;++u)e.l(0,u,A.aO2(d.h(0,u),p,r))
else{for(u=0;u<w;++u)e.l(0,u,A.aO2(d.h(0,u),p,r))
t=w===1?e.h(0,0):0
for(u=w;u<s;++u)e.l(0,u,u===3?f:t)}return e},
j_(d,e,f,g,h){var w,v,u=d.gd4(),t=u==null?null:u.gbw()
if(t==null)t=d.gbw()
u=h==null
w=u?null:h.gbw()
f=w==null?f:w
if(f==null)f=d.gbw()
w=u?null:h.gm(h)
g=w==null?g:w
if(g==null)g=d.gm(d)
if(e==null)e=0
if(f===t&&g===d.gm(d)){if(u)return d.bu(0)
h.eN(0,d)
return h}switch(f.a){case 3:if(u)v=new A.pi(new Uint8Array(g))
else v=h
return A.lr(d,v,e)
case 0:return A.lr(d,u?new A.CQ(g,0):h,e)
case 1:return A.lr(d,u?new A.CS(g,0):h,e)
case 2:if(u){u=g<3?1:2
v=new A.CU(g,new Uint8Array(u))}else v=h
return A.lr(d,v,e)
case 4:if(u)v=new A.CR(new Uint16Array(g))
else v=h
return A.lr(d,v,e)
case 5:if(u)v=new A.CT(new Uint32Array(g))
else v=h
return A.lr(d,v,e)
case 6:if(u)v=new A.CP(new Int8Array(g))
else v=h
return A.lr(d,v,e)
case 7:if(u)v=new A.CN(new Int16Array(g))
else v=h
return A.lr(d,v,e)
case 8:if(u)v=new A.CO(new Int32Array(g))
else v=h
return A.lr(d,v,e)
case 9:if(u)v=new A.CK(new Uint16Array(g))
else v=h
return A.lr(d,v,e)
case 10:if(u)v=new A.CL(new Float32Array(g))
else v=h
return A.lr(d,v,e)
case 11:if(u)v=new A.CM(new Float64Array(g))
else v=h
return A.lr(d,v,e)}},
em(d){return 0.299*d.gae(d)+0.587*d.gap()+0.114*d.gaq(d)},
aYI(d,e,f,g){var w=1-g/255
return C.a([D.f.ce(255*(1-d/255)*w),D.f.ce(255*(1-e/255)*w),D.f.ce(255*(1-f/255)*w)],x.t)},
dp(d){var w,v,u
$.aP9()[0]=d
w=$.b0J()[0]
if(d===0)return w>>>16
if($.dn==null)A.dO()
v=$.akn.cm()[w>>>23&511]
if(v!==0){u=w&8388607
return v+(u+4095+(u>>>13&1)>>>13)}return A.b4M(w)},
b4M(d){var w,v,u=d>>>16&32768,t=(d>>>23&255)-112,s=d&8388607
if(t<=0){if(t<-10)return u
s|=8388608
w=14-t
return(u|D.b.kT(s+(D.b.cW(1,w-1)-1)+(D.b.de(s,w)&1),w))>>>0}else if(t===143)if(s===0)return u|31744
else{s=s>>>13
v=s===0?1:0
return u|s|v|31744}else{s=s+4095+(s>>>13&1)
if((s&8388608)!==0){++t
s=0}if(t>30)return u|31744
return(u|t<<10|s>>>13)>>>0}},
dO(){var w,v,u,t,s=$.dn
if(s!=null)return s
w=new Uint32Array(65536)
$.dn=C.aM5(w.buffer,0,null)
s=new Uint16Array(512)
$.akn.b=s
for(v=0;v<256;++v){u=(v&255)-112
if(u<=0||u>=30){$.akn.toString
s[v]=0
s[(v|256)>>>0]=0}else{$.akn.toString
t=u<<10>>>0
s[v]=t
s[(v|256)>>>0]=(t|32768)>>>0}}for(v=0;v<65536;++v)w[v]=A.b4N(v)
s=$.dn
s.toString
return s},
b4N(d){var w,v=d>>>15&1,u=d>>>10&31,t=d&1023
if(u===0)if(t===0)return v<<31>>>0
else{for(;(t&1024)===0;){t=t<<1;--u}++u
t&=4294966271}else if(u===31){w=v<<31
if(t===0)return(w|2139095040)>>>0
else return(w|t<<13|2139095040)>>>0}return(v<<31|u+112<<23|t<<13)>>>0}},J={
i5(d,e){if(d<0||d>4294967295)throw C.c(C.cC(d,0,4294967295,"length",null))
return J.lR(new Array(d),e)},
fT(d){if(typeof d=="number"){if(Math.floor(d)==d)return J.pT.prototype
return J.tO.prototype}if(typeof d=="string")return J.iK.prototype
if(d==null)return J.xV.prototype
if(typeof d=="boolean")return J.xU.prototype
if(d.constructor==Array)return J.k.prototype
if(typeof d!="object"){if(typeof d=="function")return J.i6.prototype
return d}if(d instanceof C.u)return d
return J.oX(d)},
aO7(d){if(typeof d=="number")return J.kG.prototype
if(typeof d=="string")return J.iK.prototype
if(d==null)return d
if(d.constructor==Array)return J.k.prototype
if(typeof d!="object"){if(typeof d=="function")return J.i6.prototype
return d}if(d instanceof C.u)return d
return J.oX(d)},
ak(d){if(typeof d=="string")return J.iK.prototype
if(d==null)return d
if(d.constructor==Array)return J.k.prototype
if(typeof d!="object"){if(typeof d=="function")return J.i6.prototype
return d}if(d instanceof C.u)return d
return J.oX(d)},
aR(d){if(d==null)return d
if(d.constructor==Array)return J.k.prototype
if(typeof d!="object"){if(typeof d=="function")return J.i6.prototype
return d}if(d instanceof C.u)return d
return J.oX(d)},
aO8(d){if(typeof d=="number"){if(Math.floor(d)==d)return J.pT.prototype
return J.tO.prototype}if(d==null)return d
if(!(d instanceof C.u))return J.ir.prototype
return d},
rm(d){if(typeof d=="number")return J.kG.prototype
if(d==null)return d
if(!(d instanceof C.u))return J.ir.prototype
return d},
adM(d){if(typeof d=="number")return J.kG.prototype
if(typeof d=="string")return J.iK.prototype
if(d==null)return d
if(!(d instanceof C.u))return J.ir.prototype
return d},
eU(d){if(typeof d=="string")return J.iK.prototype
if(d==null)return d
if(!(d instanceof C.u))return J.ir.prototype
return d},
bK(d){if(d==null)return d
if(typeof d!="object"){if(typeof d=="function")return J.i6.prototype
return d}if(d instanceof C.u)return d
return J.oX(d)},
cz(d){if(d==null)return d
if(!(d instanceof C.u))return J.ir.prototype
return d},
aPB(d,e){if(typeof d=="number"&&typeof e=="number")return d+e
return J.aO7(d).ad(d,e)},
d(d,e){if(d==null)return e==null
if(typeof d!="object")return e!=null&&d===e
return J.fT(d).k(d,e)},
aPC(d,e){if(typeof d=="number"&&typeof e=="number")return d>e
return J.rm(d).tz(d,e)},
aPD(d,e){if(typeof d=="number"&&typeof e=="number")return d*e
return J.adM(d).ar(d,e)},
aPE(d,e){if(typeof d=="number"&&typeof e=="number")return d-e
return J.rm(d).am(d,e)},
by(d,e){if(typeof e==="number")if(d.constructor==Array||typeof d=="string"||C.aJ8(d,d[b.dispatchPropertyName]))if(e>>>0===e&&e<d.length)return d[e]
return J.ak(d).h(d,e)},
hU(d,e,f){if(typeof e==="number")if((d.constructor==Array||C.aJ8(d,d[b.dispatchPropertyName]))&&!d.immutable$list&&e>>>0===e&&e<d.length)return d[e]=f
return J.aR(d).l(d,e,f)},
aPF(d,e,f,g){return J.bK(d).a13(d,e,f,g)},
aPG(d,e,f){return J.bK(d).a16(d,e,f)},
fz(d,e){return J.aR(d).J(d,e)},
aPH(d,e){return J.aR(d).a6(d,e)},
aPI(d,e,f,g){return J.bK(d).EQ(d,e,f,g)},
aKp(d,e){return J.eU(d).re(d,e)},
iB(d,e){return J.aR(d).yM(d,e)},
aKq(d,e,f){return J.aR(d).pG(d,e,f)},
aPJ(d){return J.cz(d).d6(d)},
NR(d,e){return J.eU(d).a4(d,e)},
w_(d,e){return J.adM(d).br(d,e)},
aPK(d){return J.cz(d).n9(d)},
aPL(d,e){return J.cz(d).fh(d,e)},
BF(d,e){return J.ak(d).D(d,e)},
en(d,e){return J.bK(d).an(d,e)},
aPM(d,e,f){return J.cz(d).S7(d,e,f)},
aPN(d){return J.cz(d).aP(d)},
p2(d,e){return J.aR(d).bP(d,e)},
aPO(d,e){return J.aR(d).lq(d,e)},
ly(d,e,f,g){return J.aR(d).hT(d,e,f,g)},
aPP(d,e){return J.aR(d).HV(d,e)},
jI(d,e){return J.aR(d).ai(d,e)},
aPQ(d){return J.aR(d).gk9(d)},
aKr(d){return J.bK(d).gjs(d)},
aPR(d){return J.bK(d).gna(d)},
aPS(d){return J.bK(d).gc5(d)},
aPT(d){return J.bK(d).ghP(d)},
kj(d){return J.aR(d).gX(d)},
B(d){return J.fT(d).gv(d)},
j3(d){return J.ak(d).gW(d)},
kk(d){return J.ak(d).gbS(d)},
ay(d){return J.aR(d).ga1(d)},
BG(d){return J.bK(d).gcR(d)},
aKs(d){return J.cz(d).gdC(d)},
ru(d){return J.aR(d).gU(d)},
bg(d){return J.ak(d).gm(d)},
aKt(d){return J.cz(d).gTJ(d)},
aPU(d){return J.cz(d).gfJ(d)},
Z(d){return J.fT(d).geK(d)},
aPV(d){return J.bK(d).gWe(d)},
dC(d){if(typeof d==="number")return d>0?1:d<0?-1:d
return J.aO8(d).gCk(d)},
aKu(d){return J.bK(d).giZ(d)},
aPW(d){return J.bK(d).gci(d)},
aPX(d){return J.cz(d).gLF(d)},
NS(d){return J.cz(d).gba(d)},
lz(d){return J.bK(d).gp(d)},
aPY(d){return J.bK(d).gbk(d)},
aPZ(d,e,f){return J.aR(d).wB(d,e,f)},
aee(d,e){return J.cz(d).cf(d,e)},
aQ_(d){return J.cz(d).vL(d)},
aKv(d){return J.aR(d).AI(d)},
aQ0(d,e){return J.aR(d).bW(d,e)},
aQ1(d,e){return J.cz(d).a8g(d,e)},
BH(d,e,f){return J.aR(d).lu(d,e,f)},
aQ2(d,e,f,g){return J.aR(d).t1(d,e,f,g)},
aQ3(d,e,f){return J.eU(d).JI(d,e,f)},
aQ4(d,e){return J.fT(d).S(d,e)},
aQ5(d,e,f,g){return J.bK(d).a8G(d,e,f,g)},
aQ6(d,e,f,g,h){return J.cz(d).mu(d,e,f,g,h)},
BI(d,e,f){return J.bK(d).da(d,e,f)},
aef(d){return J.aR(d).eJ(d)},
n3(d,e){return J.aR(d).T(d,e)},
aQ7(d){return J.aR(d).fM(d)},
aQ8(d,e){return J.bK(d).Z(d,e)},
aQ9(d,e){return J.bK(d).aai(d,e)},
aKw(d,e){return J.cz(d).bZ(d,e)},
aQa(d,e){return J.bK(d).fu(d,e)},
aQb(d,e){return J.ak(d).sm(d,e)},
aKx(d,e,f){return J.aR(d).mG(d,e,f)},
aeg(d,e,f,g,h){return J.aR(d).bO(d,e,f,g,h)},
aeh(d,e){return J.aR(d).cg(d,e)},
aei(d,e){return J.aR(d).fv(d,e)},
aQc(d){return J.eU(d).jj(d)},
aQd(d,e){return J.eU(d).mP(d,e)},
aQe(d,e){return J.eU(d).bA(d,e)},
aej(d,e,f){return J.aR(d).cE(d,e,f)},
aQf(d){return J.cz(d).LH(d)},
aQg(d,e){return J.eU(d).cU(d,e)},
aQh(d,e,f){return J.eU(d).ac(d,e,f)},
aQi(d,e){return J.aR(d).wf(d,e)},
NT(d){return J.rm(d).t(d)},
w0(d){return J.aR(d).eW(d)},
aQj(d,e){return J.aR(d).fO(d,e)},
aQk(d,e){return J.rm(d).hD(d,e)},
aQl(d){return J.aR(d).kI(d)},
eW(d){return J.fT(d).j(d)},
aQm(d){return J.eU(d).aaX(d)},
aKy(d){return J.eU(d).KQ(d)},
aKz(d,e){return J.cz(d).Vm(d,e)},
aKA(d,e){return J.aR(d).kK(d,e)},
aKB(d,e){return J.aR(d).L3(d,e)},
aKC(d,e){return J.cz(d).hd(d,e)}},C,D,B,N,L,K,E,I,F,W,H,S,M,G,P,Q,U,R,O,T,V
A=a.updateHolder(c[8],A)
J=a.updateHolder(c[1],J)
C=c[0]
D=c[2]
B=c[44]
N=c[20]
L=c[25]
K=c[38]
E=c[27]
I=c[34]
F=c[39]
W=c[18]
H=c[23]
S=c[21]
M=c[30]
G=c[33]
P=c[15]
Q=c[41]
U=c[22]
R=c[42]
O=c[17]
T=c[31]
V=c[19]
A.HX.prototype={
nD(d,e,f,g){return this.a.nD(d,e,f,g)},
aGE(d,e,f){return this.nD(d,null,e,f)}}
A.K5.prototype={
nD(d,e,f,g){return C.aWE(f,this.$ti.c)}}
A.a4X.prototype={
J(d,e){var w,v,u=this,t=u.b,s=u.c,r=J.ak(e)
if(r.gm(e)>t.length-s){t=u.b
w=r.gm(e)+t.length-1
w|=D.b.G(w,1)
w|=w>>>2
w|=w>>>4
w|=w>>>8
v=new Uint8Array((((w|w>>>16)>>>0)+1)*2)
t=u.b
D.x.dw(v,0,t.length,t)
u.b=v}t=u.b
s=u.c
D.x.dw(t,s,s+r.gm(e),e)
u.c=u.c+r.gm(e)},
d6(d){this.a.$1(D.x.cE(this.b,0,this.c))}}
A.UV.prototype={}
A.xJ.prototype={
gm(d){return this.b}}
A.O8.prototype={}
A.anK.prototype={}
A.anJ.prototype={
gm(d){var w=this.e
w===$&&C.b()
return w-(this.b-this.c)},
gaGa(){var w=this.b,v=this.e
v===$&&C.b()
return w>=this.c+v},
h(d,e){return this.a[this.b+e]},
b1(){return this.a[this.b++]},
N(){var w,v,u,t=this,s=t.a,r=t.b,q=t.b=r+1,p=s[r]&255
r=t.b=q+1
w=s[q]&255
q=t.b=r+1
v=s[r]&255
t.b=q+1
u=s[q]&255
if(t.d===1)return(p<<24|w<<16|v<<8|u)>>>0
return(u<<24|v<<16|w<<8|p)>>>0}}
A.aqK.prototype={}
A.aqJ.prototype={
p6(d){var w,v,u,t,s=this,r=d.length
for(;w=s.a,v=w+r,u=s.c,t=u.length,v>t;)s.OB(v-t)
D.x.dw(u,w,v,d)
s.a+=r},
aLv(d){var w,v,u,t,s=this,r=d.c
while(!0){w=s.a
v=d.e
v===$&&C.b()
v=w+(v-(d.b-r))
u=s.c
t=u.length
if(!(v>t))break
s.OB(v-t)}D.x.bO(u,w,w+d.gm(d),d.a,d.b)
s.a=s.a+d.gm(d)},
Wz(d,e){var w=this
if(d<0)d=w.a+d
if(e==null)e=w.a
else if(e<0)e=w.a+e
return C.bE(w.c.buffer,d,e-d)},
eZ(d){return this.Wz(d,null)},
OB(d){var w=d!=null?d>32768?d:32768:32768,v=this.c,u=v.length,t=new Uint8Array((u+w)*2)
D.x.dw(t,0,u,v)
this.c=t},
av6(){return this.OB(null)},
gm(d){return this.a}}
A.aH5.prototype={
z5(d,e){var w,v,u,t,s=d.b1(),r=d.b1(),q=s&8
D.b.G(s,3)
if(q!==8)throw C.c(A.aKI("Only DEFLATE compression supported: "+q))
if(D.b.cq((s<<8>>>0)+r,31)!==0)throw C.c(A.aKI("Invalid FCHECK"))
if((r>>>5&1)!==0){d.N()
throw C.c(A.aKI("FDICT Encoding not currently supported"))}w=A.xv(B.w2)
v=A.xv(B.xT)
u=A.aU2(null)
v=new A.UD(d,u,w,v)
v.b=!0
v.a_E()
t=x.L.a(C.bE(u.c.buffer,0,u.a))
d.N()
return t}}
A.amO.prototype={
akc(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=d.length
for(w=0;w<k;++w){v=d[w]
if(v>l.b)l.b=v
if(v<l.c)l.c=v}u=D.b.cW(1,l.b)
l.a=new Uint32Array(u)
for(t=1,s=0,r=2;t<=l.b;){for(v=t<<16,w=0;w<k;++w)if(J.d(d[w],t)){for(q=s,p=0,o=0;o<t;++o){p=(p<<1|q&1)>>>0
q=q>>>1}for(n=l.a,m=(v|w)>>>0,o=p;o<u;o+=r)n[o]=m;++s}++t
s=s<<1>>>0
r=r<<1>>>0}}}
A.UD.prototype={
a_E(){var w,v,u,t,s=this
s.e=s.d=0
if(!s.b)return
w=s.a
w===$&&C.b()
v=w.c
while(!0){u=w.b
t=w.e
t===$&&C.b()
if(!(u<v+t))break
if(!s.avs())break}},
avs(){var w,v=this,u=v.a
u===$&&C.b()
if(u.gaGa())return!1
w=v.l4(3)
switch(D.b.G(w,1)){case 0:if(v.avK()===-1)return!1
break
case 1:if(v.YJ(v.r,v.w)===-1)return!1
break
case 2:if(v.avv()===-1)return!1
break
default:return!1}return(w&1)===0},
l4(d){var w,v,u,t,s=this
if(d===0)return 0
for(w=s.a;v=s.e,v<d;){w===$&&C.b()
u=w.b
t=w.e
t===$&&C.b()
if(u>=w.c+t)return-1
w.b=u+1
u=w.a[u]
s.d=(s.d|D.b.cW(u,v))>>>0
s.e=v+8}w=s.d
u=D.b.cj(1,d)
s.d=D.b.e6(w,d)
s.e=v-d
return(w&u-1)>>>0},
OO(d){var w,v,u,t,s,r,q,p=this,o=d.a
o===$&&C.b()
w=d.b
for(v=p.a;u=p.e,u<w;){v===$&&C.b()
t=v.b
s=v.e
s===$&&C.b()
if(t>=v.c+s)return-1
v.b=t+1
t=v.a[t]
p.d=(p.d|D.b.cW(t,u))>>>0
p.e=u+8}v=p.d
r=o[(v&D.b.cW(1,w)-1)>>>0]
q=r>>>16
p.d=D.b.e6(v,q)
p.e=u-q
return r&65535},
avK(){var w,v,u,t,s,r,q,p=this
p.e=p.d=0
w=p.l4(16)
v=p.l4(16)
if(w!==0&&w!==(v^65535)>>>0)return-1
v=p.a
v===$&&C.b()
if(w>v.gm(v))return-1
u=v.c
t=v.b-u+u
if(w<0){s=v.e
s===$&&C.b()
r=s-(t-u)}else r=w
q=A.xO(v.a,v.d,r,t)
v.b=v.b+q.gm(q)
p.c.aLv(q)
return 0},
avv(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.l4(5)
if(l===-1)return-1
l+=257
if(l>288)return-1
w=m.l4(5)
if(w===-1)return-1;++w
if(w>32)return-1
v=m.l4(4)
if(v===-1)return-1
v+=4
if(v>19)return-1
u=new Uint8Array(19)
for(t=0;t<v;++t){s=m.l4(3)
if(s===-1)return-1
u[B.a4i[t]]=s}r=A.xv(u)
q=l+w
p=new Uint8Array(q)
o=C.bE(p.buffer,0,l)
n=C.bE(p.buffer,l,w)
if(m.anm(q,r,p)===-1)return-1
return m.YJ(A.xv(o),A.xv(n))},
YJ(d,e){var w,v,u,t,s,r,q,p=this
for(w=p.c;!0;){v=p.OO(d)
if(v<0||v>285)return-1
if(v===256)break
if(v<256){if(w.a===w.c.length)w.av6()
w.c[w.a++]=v&255
continue}u=v-257
t=B.a5q[u]+p.l4(B.Yt[u])
s=p.OO(e)
if(s<0||s>29)return-1
r=B.ZR[s]+p.l4(B.a4E[s])
for(q=-r;t>r;){w.p6(w.eZ(q))
t-=r}if(t===r)w.p6(w.eZ(q))
else w.p6(w.Wz(q,t-r))}for(w=p.a;q=p.e,q>=8;){p.e=q-8
w===$&&C.b()
if(--w.b<0)w.b=0}return 0},
anm(d,e,f){var w,v,u,t,s,r,q=this
for(w=0,v=0;v<d;){u=q.OO(e)
if(u===-1)return-1
switch(u){case 16:t=q.l4(2)
if(t===-1)return-1
t+=3
for(;s=t-1,t>0;t=s,v=r){r=v+1
f[v]=w}break
case 17:t=q.l4(3)
if(t===-1)return-1
t+=3
for(;s=t-1,t>0;t=s,v=r){r=v+1
f[v]=0}w=0
break
case 18:t=q.l4(7)
if(t===-1)return-1
t+=11
for(;s=t-1,t>0;t=s,v=r){r=v+1
f[v]=0}w=0
break
default:if(u<0||u>15)return-1
r=v+1
f[v]=u
v=r
w=u
break}}return 0}}
A.azF.prototype={}
A.azE.prototype={}
A.U2.prototype={
J(d,e){var w,v,u=this
if(u.b)throw C.c(C.ax("The FutureGroup is closed."))
w=u.e
v=w.length
w.push(null);++u.a
e.dn(new A.al3(u,v),x.e).op(new A.al4(u))}}
A.DL.prototype={
a4e(d){d.rb(this.a,this.b)},
gv(d){return(J.B(this.a)^C.h6(this.b)^492929599)>>>0},
k(d,e){if(e==null)return!1
return e instanceof A.DL&&J.d(this.a,e.a)&&this.b===e.b},
$iatI:1}
A.A0.prototype={
a4e(d){d.J(0,this.a)},
gv(d){return(J.B(this.a)^842997089)>>>0},
k(d,e){if(e==null)return!1
return e instanceof A.A0&&J.d(this.a,e.a)},
$iatI:1}
A.HW.prototype={
jj(d){var w,v,u,t=this,s=N.aML(t.gauU(),t.gayW(),t.gayY(),!1,t.$ti.c)
s.r=new A.ax5(t,s)
for(w=t.c,v=w.length,u=0;u<w.length;w.length===v||(0,C.G)(w),++u)w[u].a4e(s)
if(t.f)t.e.J(0,s.d6(0))
else t.d.J(0,s)
return new C.iV(s,C.n(s).i("iV<1>"))},
auV(){var w,v=this
if(v.f)return
w=v.b
if(w!=null)w.By(0)
else v.b=v.a.aGE(v.gauB(),v.gauD(),v.gauJ())},
ayX(){if(!this.d.lq(0,new A.ax4(this)))return
this.b.Kn(0)},
ayZ(){this.b.By(0)},
ayV(d){var w=this.d
w.T(0,d)
if(w.a!==0)return
this.b.Kn(0)},
auC(d){var w,v,u
this.c.push(new A.A0(d,this.$ti.i("A0<1>")))
for(w=this.d,w=C.cq(w,w.r,C.n(w).c),v=w.$ti.c;w.q();){u=w.d;(u==null?v.a(u):u).J(0,d)}},
auK(d,e){var w,v,u
this.c.push(new A.DL(d,e))
for(w=this.d,w=C.cq(w,w.r,C.n(w).c),v=w.$ti.c;w.q();){u=w.d;(u==null?v.a(u):u).rb(d,e)}},
auE(){var w,v,u,t
this.f=!0
for(w=this.d,w=C.cq(w,w.r,C.n(w).c),v=this.e,u=w.$ti.c;w.q();){t=w.d
v.J(0,(t==null?u.a(t):t).d6(0))}}}
A.afx.prototype={
aaF(d,e){var w=null,v=new A.pL(w,w,w,w,0,B.ae,0,0)
v.akl(w,A.bdo(d,e,this.b).buffer,0,w,B.H,0,0,B.ae,e,w,0,4,w,w,B.H,w,w,d,!1)
return v}}
A.OF.prototype={
j(d){return"Exception: "+this.a},
$ic2:1}
A.OG.prototype={
j(d){return"Exception: "+this.a},
$ic2:1}
A.ht.prototype={
ad(d,e){return new A.ht(this.a+e.a,this.b+e.b,this.c+e.c)},
am(d,e){return new A.ht(this.a-e.a,this.b-e.b,this.c-e.c)},
ar(d,e){return new A.ht(this.a*e,this.b*e,this.c*e)},
j(d){return"ColorTriplet("+C.j(this.a)+", "+C.j(this.b)+", "+C.j(this.c)+")"}}
A.wf.prototype={
a_(d){var w=null
return L.H0(0,new A.afH(this),!0,K.eB,L.hd(E.dr(d,I.bB,x.C).ga4z(),w,w,w,w,w,w))}}
A.wd.prototype={
a_(d){return new E.cQ(F.fL,E.ho(this.c,new A.afD(this),null),null)}}
A.rI.prototype={
P(){return"BlurHashMode."+this.b}}
A.we.prototype={
P(){return"BlurHashDecode."+this.b}}
A.Ce.prototype={
st2(d,e){var w,v,u,t=this
if(e===t.d)return
w=t.a
v=w.a.a
u=t.b
w.sba(0,u.a.a)
u.sba(0,v)
t.d=e
t.ah(0)},
ah(d){var w=this
w.a.sba(0,"")
w.b.sba(0,"")
w.r=w.f=null
w.e=B.ix
w.aM()},
hW(d){var w,v,u,t,s=this
d=d
s.c=null
if(J.bg(d)===0){s.ah(0)
return}if(s.d===B.qz){s.e=B.Oe
w=A.aQG(d).aaF(16,9)
s.f=new A.lZ(new Uint8Array(C.bf(A.aTa(100).ni(w))))
s.aM()
return}if(J.aQe(d,C.cR("data:image/png;base64,",!0,!1)))d=J.aQg(d,22)
try{D.lY.cw(d)
s.e=B.qy}catch(v){}if(s.e===B.qy){s.a4G(D.lY.cw(d))
s.aM()
return}u=W.aWf(d)
if(u!=null){s.e=B.Od
t=new A.atJ(new A.afQ(C.aL(x.bo)))
C.eO(3,"retries")
t.E9("GET",u,null).jP(new A.afE(s),new A.afF(s),x.e).jR(new A.afG(t))}},
a4G(d){var w,v,u,t,s,r
this.f=new A.lZ(d)
w=A.bfd(d)
v=w==null?null:w.kh(0,d,null)
if(v!=null){u=v.gcu(v)
t=v.gbL(v)
s=this.b
s.sba(0,A.b2p(v,4,3).a)
r=A.aQG(s.a.a).aaF(u,t)
this.r=new A.lZ(new Uint8Array(C.bf(A.aTa(100).ni(r))))}},
hB(d){var w=0,v=C.a3(x.z),u=this
var $async$hB=C.a4(function(e,f){if(e===1)return C.a0(f,v)
while(true)switch(w){case 0:w=2
return C.a7(H.ng(new H.kq(u.b.a.a)),$async$hB)
case 2:return C.a1(null,v)}})
return C.a2($async$hB,v)},
fp(d){var w=0,v=C.a3(x.z),u=this,t,s
var $async$fp=C.a4(function(e,f){if(e===1)return C.a0(f,v)
while(true)switch(w){case 0:w=2
return C.a7(H.pg("text/plain"),$async$fp)
case 2:s=f
if(s!=null){t=s.a
u.a.sba(0,t)
u.hW(t)}return C.a1(null,v)}})
return C.a2($async$fp,v)}}
A.xH.prototype={
P(){return"ImageRepeat."+this.b}}
A.Sg.prototype={
a5m(d){return new A.Sh(this,d)},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(J.Z(e)!==C.E(v))return!1
if(e instanceof A.Sg)if(e.a.k(0,v.a))if(e.d===v.d)if(e.e.k(0,v.e))w=!0
else w=!1
else w=!1
else w=!1
else w=!1
return w},
gv(d){return C.Y(this.a,null,this.d,this.e,null,B.eG,!1,1,1,D.iY,!1,!1,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a)},
j(d){var w=this,v=C.a([w.a.j(0)],x.s),u=!(w.d===K.OF&&!0)
if(u)v.push(w.d.j(0))
v.push(w.e.j(0))
v.push("scale 1")
v.push("opacity 1")
v.push(D.iY.j(0))
return"DecorationImage("+D.c.bW(v,", ")+")"}}
A.Sh.prototype={
B8(d,e,f,g){var w,v,u,t,s=this,r=null,q=s.a,p=q.a.ak(g),o=p.a
if(o==null)o=p
w=s.c
v=w==null
if(v)u=r
else{u=w.a
if(u==null)u=w}if(o!==u){t=new N.jP(s.ga_j(),r)
if(!v)w.Z(0,t)
s.c=p
p.aj(0,t)}if(s.d==null)return
o=f!=null
if(o){d.di(0)
d.jt(0,f)}w=s.d
v=w.a
A.bg4(q.e,d,r,r,w.c,D.iY,q.d,!1,v,!1,!1,1,e,B.eG,w.b)
if(o)d.cJ(0)},
aqV(d,e){var w,v=this
if(J.d(v.d,d))return
w=v.d
if(w!=null)if(d.a.a7I(w.a))w=d.c==w.c
else w=!1
else w=!1
if(w){d.a.n()
return}w=v.d
if(w!=null)w.a.n()
v.d=d
if(!e)v.b.$0()},
n(){var w=this,v=w.c
if(v!=null)v.Z(0,new N.jP(w.ga_j(),null))
v=w.d
if(v!=null)v.a.n()
w.d=null},
j(d){return"DecorationImagePainter(stream: "+C.j(this.c)+", image: "+C.j(this.d)+") for "+this.a.j(0)}}
A.pM.prototype={
ak(d){var w=new A.ans()
this.anc(d,new A.anq(this,d,w),new A.anr(this,d,w))
return w},
anc(d,e,f){var w,v,u,t,s,r={}
r.a=null
r.b=!1
w=new A.ann(r,f)
v=null
try{v=new S.cH(this,x.gP)}catch(s){u=C.aO(s)
t=C.bj(s)
w.$2(u,t)
return}v.dn(new A.anm(r,this,e,w),x.H).op(w)},
aJU(d,e,f,g){var w
if(e.a!=null){$.ub.ga7h().a9T(0,f,new A.ano(e),g)
return}w=$.ub.ga7h().a9T(0,f,new A.anp(this,f),g)
if(w!=null)e.W5(w)},
j(d){return"ImageConfiguration()"}}
A.lZ.prototype={
xM(d,e,f,g){return this.atL(d,e,f,g)},
atK(d,e){return this.xM(d,e,null,null)},
atL(d,e,f,g){var w=0,v=C.a3(x.W),u,t=this,s
var $async$xM=C.a4(function(h,i){if(h===1)return C.a0(i,v)
while(true)switch(w){case 0:w=e!=null?3:4
break
case 3:s=e
w=5
return C.a7(A.anv(t.a),$async$xM)
case 5:u=s.$1(i)
w=1
break
case 4:w=f!=null?6:7
break
case 6:s=f
w=8
return C.a7(A.anv(t.a),$async$xM)
case 8:u=s.$1(i)
w=1
break
case 7:u=g.$1(t.a)
w=1
break
case 1:return C.a1(u,v)}})
return C.a2($async$xM,v)},
k(d,e){if(e==null)return!1
if(J.Z(e)!==C.E(this))return!1
return e instanceof A.lZ&&e.a===this.a&&!0},
gv(d){return C.Y(C.h6(this.a),1,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a)},
j(d){return"MemoryImage("+("<optimized out>#"+C.cw(this.a))+", scale: 1)"}}
A.aBW.prototype={}
A.kD.prototype={
bu(d){return new A.kD(this.a.bu(0),this.b,this.c)},
gaf8(){var w=this.a
return w.gbL(w)*w.gcu(w)*4},
n(){this.a.n()},
j(d){var w=this.c
w=w!=null?w+" ":""
return w+this.a.j(0)+" @ "+M.ke(this.b)+"x"},
gv(d){return C.Y(this.a,this.b,this.c,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a)},
k(d,e){var w=this
if(e==null)return!1
if(J.Z(e)!==C.E(w))return!1
return e instanceof A.kD&&e.a===w.a&&e.b===w.b&&e.c==w.c}}
A.ans.prototype={
W5(d){var w,v=this
v.a=d
w=v.b
if(w!=null){v.b=null
d.f=!0
D.c.ai(w,d.gES(d))
v.a.f=!1}},
aj(d,e){var w=this.a
if(w!=null)return w.aj(0,e)
w=this.b;(w==null?this.b=C.a([],x.v):w).push(e)},
Z(d,e){var w,v=this.a
if(v!=null)return v.Z(0,e)
for(w=0;v=this.b,w<v.length;++w)if(J.d(v[w],e)){v=this.b
v.toString
D.c.hC(v,w)
break}}}
A.ant.prototype={
n(){var w=this.a;--w.r
w.DF()
this.a=null}}
A.tE.prototype={
aj(d,e){var w,v,u,t,s,r=this
if(r.w)C.V(C.ax(y.a))
r.e=!0
r.a.push(e)
u=r.b
if(u!=null)try{u=u.bu(0)
t=r.f
e.a.$2(u,!t)}catch(s){w=C.aO(s)
v=C.bj(s)
r.aak(C.c3("by a synchronously-called image listener"),w,v)}},
TG(){if(this.w)C.V(C.ax(y.a));++this.r
return new A.ant(this)},
Z(d,e){var w,v,u,t,s,r=this
if(r.w)C.V(C.ax(y.a))
for(w=r.a,v=0;v<w.length;++v)if(J.d(w[v],e)){D.c.hC(w,v)
break}if(w.length===0){w=r.x
u=C.a(w.slice(0),C.ah(w))
for(t=u.length,s=0;s<u.length;u.length===t||(0,C.G)(u),++s)u[s].$0()
D.c.ah(w)
r.DF()}},
DF(){var w,v=this
if(!v.e||v.w||v.a.length!==0||v.r!==0)return
w=v.b
if(w!=null)w.a.n()
v.b=null
v.w=!0},
aAP(d){if(this.w)C.V(C.ax(y.a))
this.x.push(d)},
aJD(d){if(this.w)C.V(C.ax(y.a))
D.c.T(this.x,d)},
aeK(d){var w,v,u,t,s,r,q,p,o,n,m=this
if(m.w)C.V(C.ax(y.a))
t=m.b
if(t!=null)t.a.n()
m.b=d
t=m.a
if(t.length===0)return
s=C.W(t,!0,x.cE)
for(t=s.length,r=d.a,q=d.b,p=d.c,o=0;o<t;++o){w=s[o]
try{w.aHy(new A.kD(r.bu(0),q,p),!1)}catch(n){v=C.aO(n)
u=C.bj(n)
m.aak(C.c3("by an image listener"),v,u)}}},
KB(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m="image resource service"
this.c=new C.ci(e,h,m,d,f,g)
s=this.a
r=x.fm
q=C.W(new C.ei(new C.az(s,new A.anu(),C.ah(s).i("az<1,~(u,dA?)?>")),r),!0,r.i("h.E"))
w=!1
for(s=q.length,p=0;p<s;++p){v=q[p]
try{v.$2(e,h)
w=!0}catch(o){u=C.aO(o)
t=C.bj(o)
if(!J.d(u,e)){r=C.c3("when reporting an error to an image listener")
n=$.ki()
if(n!=null)n.$1(new C.ci(u,t,m,r,null,!1))}}}if(!w){s=this.c
s.toString
C.eb(s)}},
aak(d,e,f){return this.KB(d,e,null,!1,f)}}
A.XS.prototype={
akr(d,e,f,g,h){this.d=f
e.jP(this.gaqf(),new A.aq2(this,g),x.H)},
aqg(d){this.z=d
if(this.a.length!==0)this.u2()},
aq3(d){var w,v,u,t=this
t.cx=!1
if(t.a.length===0)return
w=t.ay
if(w!=null){v=t.ax
v===$&&C.b()
v=d.a-v.a>=w.a}else v=!0
if(v){w=t.at
t.Zf(new A.kD(w.gh_(w).bu(0),t.Q,t.d))
t.ax=d
w=t.at
t.ay=w.gGi(w)
w=t.at
w.gh_(w).n()
t.at=null
u=D.b.f_(t.ch,t.z.gzT())
if(t.z.gKz()===-1||u<=t.z.gKz())t.u2()
return}w.toString
v=t.ax
v===$&&C.b()
t.CW=C.d4(new C.b5(D.b.ce(w.a-(d.a-v.a))),new A.aq1(t))},
u2(){var w=0,v=C.a3(x.H),u,t=2,s,r=this,q,p,o,n,m
var $async$u2=C.a4(function(d,e){if(d===1){s=e
w=t}while(true)switch(w){case 0:n=r.at
if(n!=null)n.gh_(n).n()
r.at=null
t=4
w=7
return C.a7(r.z.nV(),$async$u2)
case 7:r.at=e
t=2
w=6
break
case 4:t=3
m=s
q=C.aO(m)
p=C.bj(m)
r.KB(C.c3("resolving an image frame"),q,null,!0,p)
w=1
break
w=6
break
case 3:w=2
break
case 6:if(r.z.gzT()===1){if(r.a.length===0){w=1
break}n=r.at
r.Zf(new A.kD(n.gh_(n).bu(0),r.Q,r.d))
n=r.at
n.gh_(n).n()
r.at=null
w=1
break}r.a1m()
case 1:return C.a1(u,v)
case 2:return C.a0(s,v)}})
return C.a2($async$u2,v)},
a1m(){if(this.cx)return
this.cx=!0
$.cc.VX(this.gaq2())},
Zf(d){this.aeK(d);++this.ch},
aj(d,e){var w,v=this
if(v.a.length===0){w=v.z
if(w!=null)w=v.b==null||w.gzT()>1
else w=!1}else w=!1
if(w)v.u2()
v.agD(0,e)},
Z(d,e){var w,v=this
v.agE(0,e)
if(v.a.length===0){w=v.CW
if(w!=null)w.bI(0)
v.CW=null}},
DF(){this.agC()
if(this.w)this.y=null}}
A.a7b.prototype={}
A.a7a.prototype={}
A.GI.prototype={
saBd(d,e){if(this.C===e)return
this.C=e
this.au()},
c8(d){var w
if(isFinite(d))return d*this.C
w=this.E$
if(w!=null)return w.aO(G.ab,d,w.gbV())
return 0},
bU(d){var w
if(isFinite(d))return d*this.C
w=this.E$
if(w!=null)return w.aO(G.ad,d,w.gc0())
return 0},
c1(d){var w
if(isFinite(d))return d/this.C
w=this.E$
if(w!=null)return w.aO(G.aq,d,w.gco())
return 0},
c7(d){var w
if(isFinite(d))return d/this.C
w=this.E$
if(w!=null)return w.aO(G.bo,d,w.gd7())
return 0},
XJ(d){var w,v,u,t,s=d.a,r=d.b
if(s>=r&&d.c>=d.d)return new C.P(M.O(0,s,r),M.O(0,d.c,d.d))
w=this.C
if(isFinite(r)){v=r/w
u=r}else{v=d.d
u=v*w}if(u>r)v=r/w
else r=u
t=d.d
if(v>t){r=t*w
v=t}if(r<s)v=s/w
else s=r
t=d.c
if(v<t){s=t*w
v=t}return d.bF(new C.P(s,v))},
dR(d){return this.XJ(d)},
cT(){var w,v=this,u=v.XJ(x.k.a(M.v.prototype.gaw.call(v)))
v.k3=u
w=v.E$
if(w!=null)w.kw(M.wh(u))}}
A.C1.prototype={
bp(d){var w=new A.GI(this.e,null,M.aB(x.h))
w.bo()
w.sbJ(null)
return w},
bs(d,e){e.saBd(0,this.e)}}
A.atJ.prototype={
fu(d,e){return this.aeA(0,e)},
aeA(a5,a6){var w=0,v=C.a3(x.n),u,t=2,s,r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$fu=C.a4(function(a7,a8){if(a7===1){s=a8
w=t}while(true)switch(w){case 0:a6.LO()
q=new A.HW(new A.pc(A.aMM(a6.y,x.L)),C.a([],x.b5),C.aL(x.er),new A.U2(new C.bI(new C.aN($.aM,x._),x.gf),[],x.g7),x.cB)
p=0
l=x.H,k=a6.r,j=r.a,i=a6.a,h=a6.b
case 3:if(!!0){w=4
break}o=null
t=6
g=J.aQc(q)
f=A.b8p(i,h)
e=a6.y.length
f.CV()
f.c=e
f.CV()
f.e=!0
f.r.a6(0,k)
e=a6.f
f.CV()
f.f=e
f.CV()
f.d=!0
e=f.x
d=C.n(e).i("vK<1>")
a0=new C.vK(e,d)
a1=new C.vK(e,d)
g.a.Po(a0.gk9(a0),new C.vK(e,d).gaAI(),a1.gyP(a1),!0)
w=9
return C.a7(j.fu(0,f),$async$fu)
case 9:o=a8
t=2
w=8
break
case 6:t=5
a3=s
n=C.aO(a3)
m=C.bj(a3)
a4=J.d(p,3)
if(a4)a8=a4
else{w=10
break}w=11
break
case 10:w=12
return C.a7(A.aXJ(n,m),$async$fu)
case 12:a8=!a8
case 11:if(a8)throw a3
w=8
break
case 5:w=2
break
case 8:w=o!=null?13:14
break
case 13:a4=J.d(p,3)
if(a4)a8=a4
else{w=15
break}w=16
break
case 15:w=17
return C.a7(A.aXI(o),$async$fu)
case 17:a8=!a8
case 16:if(a8){u=o
w=1
break}o.w.a.nD(new A.atK(),null,null,null).bI(0).op(new A.atL())
case 14:w=18
return C.a7(C.al5(A.aXG(p),l),$async$fu)
case 18:w=19
return C.a7(null,$async$fu)
case 19:++p
w=3
break
case 4:case 1:return C.a1(u,v)
case 2:return C.a0(s,v)}})
return C.a2($async$fu,v)}}
A.afl.prototype={
E9(d,e,f){return this.ay8(d,e,f)},
ay8(d,e,f){var w=0,v=C.a3(x.q),u,t=this,s,r
var $async$E9=C.a4(function(g,h){if(g===1)return C.a0(h,v)
while(true)switch(w){case 0:s=A.b7D(d,e)
r=A
w=3
return C.a7(t.fu(0,s),$async$E9)
case 3:u=r.atz(h)
w=1
break
case 1:return C.a1(u,v)}})
return C.a2($async$E9,v)}}
A.Ou.prototype={
HS(){if(this.w)throw C.c(C.ax("Can't finalize a finalized Request."))
this.w=!0
return B.Pf},
CV(){if(!this.w)return
throw C.c(C.ax("Can't modify a finalized Request."))},
j(d){return this.a+" "+this.b.j(0)}}
A.rF.prototype={
Xi(d,e,f,g,h,i,j){var w=this.b
if(w<100)throw C.c(C.bH("Invalid status code "+w+".",null))}}
A.afQ.prototype={
fu(d,e){return this.aez(0,e)},
aez(d,e){var w=0,v=C.a3(x.n),u,t=2,s,r=[],q=this,p,o,n,m,l,k,j
var $async$fu=C.a4(function(f,g){if(f===1){s=g
w=t}while(true)switch(w){case 0:if(q.c)throw C.c(A.b2S("HTTP request failed. Client is already closed.",e.b))
w=3
return C.a7(e.HS().aaC(),$async$fu)
case 3:n=g
m=new XMLHttpRequest()
m.toString
p=m
m=q.a
m.J(0,p)
l=p
J.aQ5(l,e.a,e.b.j(0),!0)
l.responseType="arraybuffer"
l.withCredentials=!1
e.r.ai(0,J.aPV(p))
o=new C.bI(new C.aN($.aM,x.ci),x.eP)
l=x.hg
k=new C.Aq(p,"load",!1,l)
j=x.H
k.gX(k).dn(new A.afR(p,o,e),j)
l=new C.Aq(p,"error",!1,l)
l.gX(l).dn(new A.afS(o,e),j)
J.aQa(p,n)
t=4
w=7
return C.a7(o.a,$async$fu)
case 7:l=g
u=l
r=[1]
w=5
break
r.push(6)
w=5
break
case 4:r=[2]
case 5:t=2
m.T(0,p)
w=r.pop()
break
case 6:case 1:return C.a1(u,v)
case 2:return C.a0(s,v)}})
return C.a2($async$fu,v)},
d6(d){var w,v,u,t
this.c=!0
for(w=this.a,v=C.cq(w,w.r,C.n(w).c),u=v.$ti.c;v.q();){t=v.d;(t==null?u.a(t):t).abort()}w.ah(0)}}
A.pc.prototype={
aaC(){var w=new C.aN($.aM,x.fg),v=new C.bI(w,x.Z),u=new A.a4X(new A.ag0(v),new Uint8Array(1024))
this.nD(u.gk9(u),!0,u.gyP(u),v.gaC6())
return w}}
A.CI.prototype={
j(d){var w=this.b.j(0)
return"ClientException: "+this.a+", uri="+w},
$ic2:1}
A.aty.prototype={
HS(){this.LO()
return new A.pc(A.aMM(this.y,x.L))}}
A.uI.prototype={}
A.axa.prototype={
HS(){this.LO()
var w=this.x
return new A.pc(new C.iV(w,C.n(w).i("iV<1>")))}}
A.uY.prototype={}
A.agi.prototype={
P(){return"Channel."+this.b}}
A.dv.prototype={
q(){var w=this.b
return++this.a<w.gm(w)},
gM(d){return this.b.h(0,this.a)}}
A.lE.prototype={
P(){return"ChannelOrder."+this.b}}
A.CK.prototype={
bu(d){return new A.CK(new Uint16Array(C.bf(this.a)))},
gbw(){return B.cQ},
gm(d){return this.a.length},
gd4(){return null},
h(d,e){var w,v=this.a
if(e<v.length){v=v[e]
w=$.dn
v=(w!=null?w:A.dO())[v]}else v=0
return v},
l(d,e,f){var w=this.a
if(e<w.length)w[e]=A.dp(f)},
gcH(d){return this.gae(this)},
gae(d){var w,v=this.a
if(!D.ef.gW(v)){v=v[0]
w=$.dn
v=(w!=null?w:A.dO())[v]}else v=0
return v},
gap(){var w,v=this.a
if(v.length>1){v=v[1]
w=$.dn
v=(w!=null?w:A.dO())[v]}else v=0
return v},
gaq(d){var w,v=this.a
if(v.length>2){v=v[2]
w=$.dn
v=(w!=null?w:A.dO())[v]}else v=0
return v},
gav(d){var w,v=this.a
if(v.length>3){v=v[3]
w=$.dn
v=(w!=null?w:A.dO())[v]}else v=0
return v},
gfd(){return A.em(this)},
eN(d,e){var w,v=e.gae(e),u=this.a
if(!D.ef.gW(u))u[0]=A.dp(v)
v=e.gap()
w=u.length
if(w>1)u[1]=A.dp(v)
v=e.gaq(e)
if(w>2)u[2]=A.dp(v)
v=e.gav(e)
if(w>3)u[3]=A.dp(v)},
ga1(d){return new A.dv(this)},
k(d,e){if(e==null)return!1
return x.G.b(e)&&e.gm(e)===this.a.length&&e.gv(e)===C.ag(C.W(this,!0,C.n(this).i("h.E")))},
gv(d){return C.ag(C.W(this,!0,C.n(this).i("h.E")))},
$ibL:1}
A.CL.prototype={
bu(d){return new A.CL(new Float32Array(C.bf(this.a)))},
gbw(){return B.dp},
gm(d){return this.a.length},
gd4(){return null},
h(d,e){var w=this.a
return e<w.length?w[e]:0},
l(d,e,f){var w=this.a
if(e<w.length)w[e]=f},
gcH(d){var w=this.a
return!D.dH.gW(w)?w[0]:0},
gae(d){var w=this.a
return!D.dH.gW(w)?w[0]:0},
gap(){var w=this.a
return w.length>1?w[1]:0},
gaq(d){var w=this.a
return w.length>2?w[2]:0},
gav(d){var w=this.a
return w.length>3?w[3]:1},
gfd(){return A.em(this)},
eN(d,e){var w,v=e.gae(e),u=this.a
if(!D.dH.gW(u))u[0]=v
v=e.gap()
w=u.length
if(w>1)u[1]=v
v=e.gaq(e)
if(w>2)u[2]=v
v=e.gav(e)
if(w>3)u[3]=v},
ga1(d){return new A.dv(this)},
k(d,e){if(e==null)return!1
return x.G.b(e)&&e.gm(e)===this.a.length&&e.gv(e)===C.ag(C.W(this,!0,C.n(this).i("h.E")))},
gv(d){return C.ag(C.W(this,!0,C.n(this).i("h.E")))},
$ibL:1}
A.CM.prototype={
bu(d){return new A.CM(new Float64Array(C.bf(this.a)))},
gbw(){return B.e0},
gm(d){return this.a.length},
gd4(){return null},
h(d,e){var w=this.a
return e<w.length?w[e]:0},
l(d,e,f){var w=this.a
if(e<w.length)w[e]=f},
gcH(d){var w=this.a
return!D.ou.gW(w)?w[0]:0},
gae(d){var w=this.a
return!D.ou.gW(w)?w[0]:0},
gap(){var w=this.a
return w.length>1?w[1]:0},
gaq(d){var w=this.a
return w.length>2?w[2]:0},
gav(d){var w=this.a
return w.length>3?w[3]:1},
gfd(){return A.em(this)},
eN(d,e){var w,v=e.gae(e),u=this.a
if(!D.ou.gW(u))u[0]=v
v=e.gap()
w=u.length
if(w>1)u[1]=v
v=e.gaq(e)
if(w>2)u[2]=v
v=e.gav(e)
if(w>3)u[3]=v},
ga1(d){return new A.dv(this)},
k(d,e){if(e==null)return!1
return x.G.b(e)&&e.gm(e)===this.a.length&&e.gv(e)===C.ag(C.W(this,!0,C.n(this).i("h.E")))},
gv(d){return C.ag(C.W(this,!0,C.n(this).i("h.E")))},
$ibL:1}
A.CN.prototype={
bu(d){return new A.CN(new Int16Array(C.bf(this.a)))},
gbw(){return B.e2},
gm(d){return this.a.length},
gd4(){return null},
h(d,e){var w=this.a
return e<w.length?w[e]:0},
l(d,e,f){var w=this.a
if(e<w.length)w[e]=D.f.t(f)},
gcH(d){var w=this.a
return!D.ov.gW(w)?w[0]:0},
gae(d){var w=this.a
return!D.ov.gW(w)?w[0]:0},
gap(){var w=this.a
return w.length>1?w[1]:0},
gaq(d){var w=this.a
return w.length>2?w[2]:0},
gav(d){var w=this.a
return w.length>3?w[3]:0},
gfd(){return A.em(this)},
eN(d,e){var w,v=e.gae(e),u=this.a
if(!D.ov.gW(u))u[0]=D.f.t(v)
v=e.gap()
w=u.length
if(w>1)u[1]=D.f.t(v)
v=e.gaq(e)
if(w>2)u[2]=D.f.t(v)
v=e.gav(e)
if(w>3)u[3]=D.f.t(v)},
ga1(d){return new A.dv(this)},
k(d,e){if(e==null)return!1
return x.G.b(e)&&e.gm(e)===this.a.length&&e.gv(e)===C.ag(C.W(this,!0,C.n(this).i("h.E")))},
gv(d){return C.ag(C.W(this,!0,C.n(this).i("h.E")))},
$ibL:1}
A.CO.prototype={
bu(d){return new A.CO(new Int32Array(C.bf(this.a)))},
gbw(){return B.e3},
gm(d){return this.a.length},
gd4(){return null},
h(d,e){var w=this.a
return e<w.length?w[e]:0},
l(d,e,f){var w=this.a
if(e<w.length)w[e]=D.f.t(f)},
gcH(d){var w=this.a
return!D.dI.gW(w)?w[0]:0},
gae(d){var w=this.a
return!D.dI.gW(w)?w[0]:0},
gap(){var w=this.a
return w.length>1?w[1]:0},
gaq(d){var w=this.a
return w.length>2?w[2]:0},
gav(d){var w=this.a
return w.length>3?w[3]:0},
gfd(){return A.em(this)},
eN(d,e){var w,v=e.gae(e),u=this.a
if(!D.dI.gW(u))u[0]=C.bl(v)
v=e.gap()
w=u.length
if(w>1)u[1]=D.f.t(v)
v=e.gaq(e)
if(w>2)u[2]=D.f.t(v)
v=e.gav(e)
if(w>3)u[3]=D.f.t(v)},
ga1(d){return new A.dv(this)},
k(d,e){if(e==null)return!1
return x.G.b(e)&&e.gm(e)===this.a.length&&e.gv(e)===C.ag(C.W(this,!0,C.n(this).i("h.E")))},
gv(d){return C.ag(C.W(this,!0,C.n(this).i("h.E")))},
$ibL:1}
A.CP.prototype={
bu(d){return new A.CP(new Int8Array(C.bf(this.a)))},
gbw(){return B.e1},
gm(d){return this.a.length},
gd4(){return null},
h(d,e){var w=this.a
return e<w.length?w[e]:0},
l(d,e,f){var w=this.a
if(e<w.length)w[e]=D.f.t(f)},
gcH(d){var w=this.a
return!D.ow.gW(w)?w[0]:0},
gae(d){var w=this.a
return!D.ow.gW(w)?w[0]:0},
gap(){var w=this.a
return w.length>1?w[1]:0},
gaq(d){var w=this.a
return w.length>2?w[2]:0},
gav(d){var w=this.a
return w.length>3?w[3]:0},
gfd(){return A.em(this)},
eN(d,e){var w,v=e.gae(e),u=this.a
if(!D.ow.gW(u))u[0]=D.f.t(v)
v=e.gap()
w=u.length
if(w>1)u[1]=D.f.t(v)
v=e.gaq(e)
if(w>2)u[2]=D.f.t(v)
v=e.gav(e)
if(w>3)u[3]=D.f.t(v)},
ga1(d){return new A.dv(this)},
k(d,e){if(e==null)return!1
return x.G.b(e)&&e.gm(e)===this.a.length&&e.gv(e)===C.ag(C.W(this,!0,C.n(this).i("h.E")))},
gv(d){return C.ag(C.W(this,!0,C.n(this).i("h.E")))},
$ibL:1}
A.CQ.prototype={
bu(d){var w=this.b
w===$&&C.b()
return new A.CQ(this.a,w)},
gbw(){return B.c5},
gd4(){return null},
tY(d){var w
if(d<this.a){w=this.b
w===$&&C.b()
w=D.b.de(w,7-d)&1}else w=0
return w},
xg(d,e){var w
if(d>=this.a)return
d=7-d
w=this.b
w===$&&C.b()
this.b=e!==0?(w|D.b.cW(1,d))>>>0:(w&~(D.b.cW(1,d)&255))>>>0},
h(d,e){return this.tY(e)},
l(d,e,f){return this.xg(e,f)},
gcH(d){return this.tY(0)},
gae(d){return this.tY(0)},
gap(){return this.tY(1)},
gaq(d){return this.tY(2)},
gav(d){return this.tY(3)},
gfd(){return A.em(this)},
eN(d,e){var w=this,v=e.gae(e),u=e.gap(),t=e.gaq(e),s=e.gav(e)
w.xg(0,v)
w.xg(1,u)
w.xg(2,t)
w.xg(3,s)},
ga1(d){return new A.dv(this)},
k(d,e){if(e==null)return!1
return x.G.b(e)&&e.gm(e)===this.a&&e.gv(e)===C.ag(C.W(this,!0,C.n(this).i("h.E")))},
gv(d){return C.ag(C.W(this,!0,C.n(this).i("h.E")))},
$ibL:1,
gm(d){return this.a}}
A.CR.prototype={
bu(d){return new A.CR(new Uint16Array(C.bf(this.a)))},
gbw(){return B.dq},
gm(d){return this.a.length},
gd4(){return null},
h(d,e){var w=this.a
return e<w.length?w[e]:0},
l(d,e,f){var w=this.a
if(e<w.length)w[e]=D.f.t(f)},
gcH(d){var w=this.a
return!D.ef.gW(w)?w[0]:0},
gae(d){var w=this.a
return!D.ef.gW(w)?w[0]:0},
gap(){var w=this.a
return w.length>1?w[1]:0},
gaq(d){var w=this.a
return w.length>2?w[2]:0},
gav(d){var w=this.a
return w.length>3?w[3]:0},
gfd(){return A.em(this)},
eN(d,e){var w,v=e.gae(e),u=this.a
if(!D.ef.gW(u))u[0]=D.f.t(v)
v=e.gap()
w=u.length
if(w>1)u[1]=D.f.t(v)
v=e.gaq(e)
if(w>2)u[2]=D.f.t(v)
v=e.gav(e)
if(w>3)u[3]=D.f.t(v)},
ga1(d){return new A.dv(this)},
k(d,e){if(e==null)return!1
return x.G.b(e)&&e.gm(e)===this.a.length&&e.gv(e)===C.ag(C.W(this,!0,C.n(this).i("h.E")))},
gv(d){return C.ag(C.W(this,!0,C.n(this).i("h.E")))},
$ibL:1}
A.CS.prototype={
bu(d){var w=this.b
w===$&&C.b()
return new A.CS(this.a,w)},
gbw(){return B.c6},
gd4(){return null},
tZ(d){var w
if(d<this.a){w=this.b
w===$&&C.b()
w=D.b.de(w,6-(d<<1>>>0))&3}else w=0
return w},
xh(d,e){var w,v,u
if(d>=this.a)return
w=B.Yo[d]
v=D.f.t(e)
u=this.b
u===$&&C.b()
this.b=(u&w|D.b.cW(v&3,6-(d<<1>>>0)))>>>0},
h(d,e){return this.tZ(e)},
l(d,e,f){return this.xh(e,f)},
gcH(d){return this.tZ(0)},
gae(d){return this.tZ(0)},
gap(){return this.tZ(1)},
gaq(d){return this.tZ(2)},
gav(d){return this.tZ(3)},
gfd(){return A.em(this)},
eN(d,e){var w=this,v=e.gae(e),u=e.gap(),t=e.gaq(e),s=e.gav(e)
w.xh(0,v)
w.xh(1,u)
w.xh(2,t)
w.xh(3,s)},
ga1(d){return new A.dv(this)},
k(d,e){if(e==null)return!1
return x.G.b(e)&&e.gm(e)===this.a&&e.gv(e)===C.ag(C.W(this,!0,C.n(this).i("h.E")))},
gv(d){return C.ag(C.W(this,!0,C.n(this).i("h.E")))},
$ibL:1,
gm(d){return this.a}}
A.CT.prototype={
bu(d){return new A.CT(new Uint32Array(C.bf(this.a)))},
gbw(){return B.dr},
gm(d){return this.a.length},
gd4(){return null},
h(d,e){var w=this.a
return e<w.length?w[e]:0},
l(d,e,f){var w=this.a
if(e<w.length)w[e]=D.f.t(f)},
gcH(d){var w=this.a
return!D.bu.gW(w)?w[0]:0},
gae(d){var w=this.a
return!D.bu.gW(w)?w[0]:0},
gap(){var w=this.a
return w.length>1?w[1]:0},
gaq(d){var w=this.a
return w.length>2?w[2]:0},
gav(d){var w=this.a
return w.length>3?w[3]:0},
gfd(){return A.em(this)},
eN(d,e){var w,v=e.gae(e),u=this.a
if(!D.bu.gW(u))u[0]=D.f.t(v)
v=e.gap()
w=u.length
if(w>1)u[1]=D.f.t(v)
v=e.gaq(e)
if(w>2)u[2]=D.f.t(v)
v=e.gav(e)
if(w>3)u[3]=D.f.t(v)},
ga1(d){return new A.dv(this)},
k(d,e){if(e==null)return!1
return x.G.b(e)&&e.gm(e)===this.a.length&&e.gv(e)===C.ag(C.W(this,!0,C.n(this).i("h.E")))},
gv(d){return C.ag(C.W(this,!0,C.n(this).i("h.E")))},
$ibL:1}
A.CU.prototype={
bu(d){return new A.CU(this.a,new Uint8Array(C.bf(this.b)))},
gbw(){return B.c7},
gd4(){return null},
u8(d){var w
if(d<0||d>=this.a)w=0
else{w=this.b
w=d<2?D.b.de(w[0],4-(d<<2>>>0))&15:D.b.de(w[1],4-((d&1)<<2))&15}return w},
xZ(d,e){var w,v,u
if(d>=this.a)return
w=D.b.bv(D.f.t(e),0,15)
if(d>1){d&=1
v=1}else v=0
if(d===0){u=this.b
u[v]=(u[v]&15|w<<4)>>>0}else if(d===1){u=this.b
u[v]=(u[v]&240|w)>>>0}},
h(d,e){return this.u8(e)},
l(d,e,f){return this.xZ(e,f)},
gcH(d){return this.u8(0)},
gae(d){return this.u8(0)},
gap(){return this.u8(1)},
gaq(d){return this.u8(2)},
gav(d){return this.u8(3)},
gfd(){return A.em(this)},
eN(d,e){var w=this,v=e.gae(e),u=e.gap(),t=e.gaq(e),s=e.gav(e)
w.xZ(0,v)
w.xZ(1,u)
w.xZ(2,t)
w.xZ(3,s)},
ga1(d){return new A.dv(this)},
k(d,e){if(e==null)return!1
return x.G.b(e)&&e.gm(e)===this.a&&e.gv(e)===C.ag(C.W(this,!0,C.n(this).i("h.E")))},
gv(d){return C.ag(C.W(this,!0,C.n(this).i("h.E")))},
$ibL:1,
gm(d){return this.a}}
A.pi.prototype={
bu(d){return new A.pi(new Uint8Array(C.bf(this.a)))},
gbw(){return B.H},
gm(d){return this.a.length},
gd4(){return null},
h(d,e){var w=this.a
return e<w.length?w[e]:0},
l(d,e,f){var w=this.a
if(e<w.length)w[e]=D.f.t(f)},
gcH(d){var w=this.a
return!D.x.gW(w)?w[0]:0},
gae(d){var w=this.a
return!D.x.gW(w)?w[0]:0},
gap(){var w=this.a
return w.length>1?w[1]:0},
gaq(d){var w=this.a
return w.length>2?w[2]:0},
gav(d){var w=this.a
return w.length>3?w[3]:255},
gfd(){return A.em(this)},
eN(d,e){var w,v=e.gae(e),u=this.a
if(!D.x.gW(u))u[0]=D.f.t(v)
v=e.gap()
w=u.length
if(w>1)u[1]=D.f.t(v)
v=e.gaq(e)
if(w>2)u[2]=D.f.t(v)
v=e.gav(e)
if(w>3)u[3]=D.f.t(v)},
ga1(d){return new A.dv(this)},
k(d,e){if(e==null)return!1
return x.G.b(e)&&e.gm(e)===this.a.length&&e.gv(e)===C.ag(C.W(this,!0,C.n(this).i("h.E")))},
gv(d){return C.ag(C.W(this,!0,C.n(this).i("h.E")))},
$ibL:1}
A.PQ.prototype={}
A.PR.prototype={}
A.i1.prototype={
P(){return"Format."+this.b}}
A.OC.prototype={
P(){return"BlendMode."+this.b}}
A.DN.prototype={
C3(d){var w=$.aKl()
if(!w.an(0,d))return"<unknown>"
return w.h(0,d).a},
j(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a,v=C.ev(w,w.r,C.n(w).c),u=x.p,t=x.r,s=x.N,r=x.P,q="";v.q();){p=v.d
q+=p+"\n"
o=w.h(0,p)
for(p=o.a,n=new C.f1(p,p.r,C.n(p).i("f1<1>")),n.c=p.e;n.q();){p=n.d
m=o.h(0,p)
q=m==null?q+("\t"+i.C3(p)+"\n"):q+("\t"+i.C3(p)+": "+m.j(0)+"\n")}for(p=o.b.a,n=new C.f1(p,p.r,C.n(p).i("f1<1>")),n.c=p.e;n.q();){l=n.d
q+=l+"\n"
if(!p.an(0,l))p.l(0,l,new A.jg(C.w(u,t),new A.kB(C.w(s,r))))
k=p.h(0,l)
for(l=k.a,j=new C.f1(l,l.r,C.n(l).i("f1<1>")),j.c=l.e;j.q();){l=j.d
m=k.h(0,l)
q=m==null?q+("\t"+i.C3(l)+"\n"):q+("\t"+i.C3(l)+": "+m.j(0)+"\n")}}}return q.charCodeAt(0)==0?q:q},
hd(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="exif",a2="interop",a3=a5.b
a5.b=!0
a5.hp(19789)
a5.hp(42)
a5.iS(8)
w=a0.a
if(w.h(0,"ifd0")==null)w.l(0,"ifd0",new A.jg(C.w(x.p,x.r),new A.kB(C.w(x.N,x.P))))
v=x.N
u=x.p
t=C.w(v,u)
for(s=C.n(w),r=s.i("aY<1>"),s=C.ev(w,w.r,s.c),q=x.r,p=x.P,o=8;s.q();){n=s.d
m=w.h(0,n)
m.toString
t.l(0,n,o)
n=m.b.a
if(n.an(0,a1)){l=new Uint32Array(1)
l[0]=0
m.l(0,34665,new A.kC(l))}else m.a.T(0,34665)
if(n.an(0,a2)){l=new Uint32Array(1)
l[0]=0
m.l(0,40965,new A.kC(l))}else m.a.T(0,40965)
if(n.an(0,"gps")){l=new Uint32Array(1)
l[0]=0
m.l(0,34853,new A.kC(l))}else m.a.T(0,34853)
m=m.a
o+=2+12*J.bg(m.gbk(m).a)+4
for(m=m.gbk(m),l=C.n(m),l=l.i("@<1>").aN(l.z[1]),m=new C.bX(J.ay(m.a),m.b,l.i("bX<1,2>")),l=l.z[1];m.q();){k=m.a
if(k==null)k=l.a(k)
j=B.e9[k.ge5(k).a]*k.gm(k)
if(j>4)o+=j}for(m=new C.f1(n,n.r,C.n(n).i("f1<1>")),m.c=n.e;m.q();){l=m.d
if(!n.an(0,l))n.l(0,l,new A.jg(C.w(u,q),new A.kB(C.w(v,p))))
k=n.h(0,l)
k.toString
t.l(0,l,o)
k=k.a
i=2+12*J.bg(k.gbk(k).a)
for(l=k.gbk(k),k=C.n(l),k=k.i("@<1>").aN(k.z[1]),l=new C.bX(J.ay(l.a),l.b,k.i("bX<1,2>")),k=k.z[1];l.q();){h=l.a
if(h==null)h=k.a(h)
j=B.e9[h.ge5(h).a]*h.gm(h)
if(j>4)i+=j}o+=i}}g=w.a
for(s=g-1,f=0;f<g;++f){e=new C.aY(w,r).bP(0,f)
n=w.gbk(w)
d=n.b.$1(J.p2(n.a,f))
n=d.b.a
if(n.an(0,a1)){m=d.h(0,34665)
m.toString
l=t.h(0,a1)
l.toString
m.o1(l)}if(n.an(0,a2)){m=d.h(0,40965)
m.toString
l=t.h(0,a2)
l.toString
m.o1(l)}if(n.an(0,"gps")){m=d.h(0,34853)
m.toString
l=t.h(0,"gps")
l.toString
m.o1(l)}m=t.h(0,e)
m.toString
l=d.a
a0.a3U(a5,d,m+2+12*J.bg(l.gbk(l).a)+4)
if(f===s)a5.iS(0)
else{m=t.h(0,new C.aY(w,r).bP(0,f+1))
m.toString
a5.iS(m)}a0.a3V(a5,d)
for(m=new C.f1(n,n.r,C.n(n).i("f1<1>")),m.c=n.e;m.q();){l=m.d
if(!n.an(0,l))n.l(0,l,new A.jg(C.w(u,q),new A.kB(C.w(v,p))))
k=n.h(0,l)
k.toString
l=t.h(0,l)
l.toString
h=k.a
a0.a3U(a5,k,l+2+12*J.bg(h.gbk(h).a))
a0.a3V(a5,k)}}a5.b=a3},
a3U(d,e,f){var w,v,u,t,s,r,q=e.a
d.hp(q.a)
for(q=C.ev(q,q.r,C.n(q).c);q.q();){w=q.d
v=e.h(0,w)
v.toString
u=w===273
t=u&&v.ge5(v)===B.du?B.b7:v.ge5(v)
s=u&&v.ge5(v)===B.du?1:v.gm(v)
d.hp(w)
d.hp(t.a)
d.iS(s)
r=B.e9[v.ge5(v).a]*v.gm(v)
if(r<=4){v.hd(0,d)
for(;r<4;){d.aT(0);++r}}else{d.iS(f)
f+=r}}return f},
a3V(d,e){var w,v,u
for(w=e.a,w=w.gbk(w),v=C.n(w),v=v.i("@<1>").aN(v.z[1]),w=new C.bX(J.ay(w.a),w.b,v.i("bX<1,2>")),v=v.z[1];w.q();){u=w.a
if(u==null)u=v.a(u)
if(B.e9[u.ge5(u).a]*u.gm(u)>4)u.hd(0,d)}},
w6(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4="Length must be a non-negative integer: ",a5=a7.e
a7.e=!0
w=a7.d
v=a7.V()
if(v===18761){a7.e=!1
if(a7.V()!==42){a7.e=a5
return!1}}else if(v===19789){a7.e=!0
if(a7.V()!==42){a7.e=a5
return!1}}else return!1
u=a7.N()
for(t=this.a,s=x.gn,r=x.p,q=x.r,p=x.N,o=x.P,n=0;u>0;){a7.d=w+u
m=new A.jg(C.w(r,q),new A.kB(C.w(p,o)))
l=a7.V()
k=C.a(new Array(l),s)
for(j=0;j<l;++j)k[j]=this.a0T(a7,w)
for(i=k.length,h=0;h<k.length;k.length===i||(0,C.G)(k),++h){g=k[h]
f=g.b
if(f!=null)m.l(0,g.a,f)}t.l(0,"ifd"+n,m);++n
u=a7.N()}for(t=t.gbk(t),i=C.n(t),i=i.i("@<1>").aN(i.z[1]),t=new C.bX(J.ay(t.a),t.b,i.i("bX<1,2>")),i=i.z[1];t.q();){f=t.a
if(f==null)f=i.a(f)
for(e=B.og.gcR(B.og),e=e.ga1(e),d=f.a,a0=f.b.a;e.q();){a1=e.gM(e)
if(d.an(0,a1)){a7.d=w+f.h(0,a1).t(0)
m=new A.jg(C.w(r,q),new A.kB(C.w(p,o)))
l=a7.V()
k=C.a(new Array(l),s)
for(j=0;j<l;++j)k[j]=this.a0T(a7,w)
for(a2=k.length,h=0;h<k.length;k.length===a2||(0,C.G)(k),++h){g=k[h]
a3=g.b
if(a3!=null)m.l(0,g.a,a3)}a1=B.og.h(0,a1)
a1.toString
a0.l(0,a1,m)}}}a7.e=a5
return!1},
a0T(d,e){var w,v,u,t,s=d.V(),r=d.V(),q=d.N(),p=new A.a6x(s,null)
if(r>13)return p
w=B.wx[r]
v=q*B.e9[r]
u=d.d
if((v>4?d.d=d.N()+e:u)+v>d.c)return p
t=d.fs(v)
switch(w.a){case 0:break
case 6:p.b=new A.nF(new Int8Array(C.bf(C.aTS(t.e4().buffer,0,q))))
break
case 1:p.b=new A.lN(new Uint8Array(C.bf(t.fs(q).e4())))
break
case 7:p.b=new A.xy(new Uint8Array(C.bf(t.fs(q).e4())))
break
case 2:p.b=new A.ty(q===0?"":t.eI(q-1))
break
case 3:p.b=A.aSO(t,q)
break
case 4:p.b=A.aSJ(t,q)
break
case 5:p.b=A.aSK(t,q)
break
case 10:p.b=A.aSM(t,q)
break
case 8:p.b=A.aSN(t,q)
break
case 9:p.b=A.aSL(t,q)
break
case 11:p.b=A.aSQ(t,q)
break
case 12:p.b=A.aSI(t,q)
break}d.d=u+4
return p}}
A.a6x.prototype={}
A.Te.prototype={}
A.kB.prototype={
akd(d){d.a.ai(0,new A.and(this))},
gW(d){var w,v,u=this.a
if(u.a===0)return!0
for(u=u.gbk(u),w=C.n(u),w=w.i("@<1>").aN(w.z[1]),u=new C.bX(J.ay(u.a),u.b,w.i("bX<1,2>")),w=w.z[1];u.q();){v=u.a
if(v==null)v=w.a(v)
if(v.a.a===0){v=v.b
v=v.gW(v)}else v=!1
if(!v)return!1}return!0},
an(d,e){return this.a.an(0,e)},
h(d,e){var w=this.a
if(!w.an(0,e))w.l(0,e,new A.jg(C.w(x.p,x.r),new A.kB(C.w(x.N,x.P))))
w=w.h(0,e)
w.toString
return w},
l(d,e,f){this.a.l(0,e,f)}}
A.jg.prototype={
aCC(d){d.a.ai(0,new A.ane(this))
d.b.a.ai(0,new A.anf(this))},
an(d,e){return this.a.an(0,e)},
h(d,e){if(typeof e=="string")e=B.G3.h(0,e)
if(C.eS(e))return this.a.h(0,e)
return null},
l(d,e,f){var w,v,u=this
if(typeof e=="string")e=B.G3.h(0,e)
if(!C.eS(e))return
if(f instanceof A.eK)u.a.l(0,e,f)
else{w=$.aKl().h(0,e)
if(w!=null)switch(w.b.a){case 1:if(C.eS(f)){v=new Uint8Array(1)
v[0]=f
u.a.l(0,e,new A.lN(v))}break
case 2:break
case 3:if(C.eS(f))u.a.l(0,e,A.b5m(f))
break
case 4:if(C.eS(f))u.a.l(0,e,A.b5l(f))
break
case 5:break
case 6:if(C.eS(f)){v=new Int8Array(1)
v[0]=f
u.a.l(0,e,new A.nF(v))}break
case 7:break
case 8:if(C.eS(f)){v=new Int16Array(1)
v[0]=f
u.a.l(0,e,new A.pJ(v))}break
case 9:if(C.eS(f)){v=new Int32Array(1)
v[0]=f
u.a.l(0,e,new A.pI(v))}break
case 10:break
case 11:if(typeof f=="number")u.a.l(0,e,A.aSP(f))
else if(C.eS(f))u.a.l(0,e,A.aSP(f))
break
case 12:if(typeof f=="number")u.a.l(0,e,A.aSH(f))
else if(C.eS(f))u.a.l(0,e,A.aSH(f))
break
case 0:break}}}}
A.hC.prototype={
P(){return"IfdValueType."+this.b}}
A.eK.prototype={
eL(d,e){return 0},
t(d){return this.eL(d,0)},
mz(){return new Uint8Array(0)},
j(d){return""},
k(d,e){var w=this
if(e==null)return!1
return e instanceof A.eK&&w.ge5(w)===e.ge5(e)&&w.gm(w)===e.gm(e)&&w.gv(w)===e.gv(e)},
gv(d){return 0},
o1(d){}}
A.lN.prototype={
bu(d){return new A.lN(new Uint8Array(C.bf(this.a)))},
ge5(d){return B.tI},
gm(d){return this.a.length},
k(d,e){var w,v
if(e==null)return!1
if(e instanceof A.lN){w=this.a
v=e.a
w=w.length===v.length&&C.ag(w)===C.ag(v)}else w=!1
return w},
gv(d){return C.ag(this.a)},
eL(d,e){return this.a[e]},
t(d){return this.eL(d,0)},
o1(d){this.a[0]=d},
mz(){return this.a},
hd(d,e){e.p6(this.a)},
j(d){var w=this.a
return w.length===1?""+w[0]:C.j(w)}}
A.ty.prototype={
bu(d){return new A.ty(this.a)},
ge5(d){return B.ag},
gm(d){return this.a.length+1},
k(d,e){var w,v
if(e==null)return!1
if(e instanceof A.ty){w=this.a
v=e.a
w=w.length+1===v.length+1&&D.d.gv(w)===D.d.gv(v)}else w=!1
return w},
gv(d){return D.d.gv(this.a)},
mz(){return new Uint8Array(C.bf(new C.dL(this.a)))},
hd(d,e){e.p6(new C.dL(this.a))
e.aT(0)},
j(d){return this.a}}
A.pK.prototype={
aki(d,e){var w,v
for(w=this.a,v=0;v<e;++v)w[v]=d.V()},
bu(d){return new A.pK(new Uint16Array(C.bf(this.a)))},
ge5(d){return B.a6},
gm(d){return this.a.length},
k(d,e){var w,v,u
if(e==null)return!1
if(e instanceof A.pK){w=this.a
v=w.length
u=e.a
w=v===u.length&&C.ag(w)===C.ag(u)}else w=!1
return w},
gv(d){return C.ag(this.a)},
eL(d,e){return this.a[e]},
t(d){return this.eL(d,0)},
o1(d){this.a[0]=d},
mz(){return C.bE(this.a.buffer,0,null)},
hd(d,e){var w,v=this.a,u=v.length
for(w=0;w<u;++w)e.hp(v[w])},
j(d){var w=this.a
return w.length===1?""+w[0]:C.j(w)}}
A.kC.prototype={
akf(d,e){var w,v
for(w=this.a,v=0;v<e;++v)w[v]=d.N()},
bu(d){return new A.kC(new Uint32Array(C.bf(this.a)))},
ge5(d){return B.b7},
gm(d){return this.a.length},
k(d,e){var w,v,u
if(e==null)return!1
if(e instanceof A.kC){w=this.a
v=w.length
u=e.a
w=v===u.length&&C.ag(w)===C.ag(u)}else w=!1
return w},
gv(d){return C.ag(this.a)},
eL(d,e){return this.a[e]},
t(d){return this.eL(d,0)},
o1(d){this.a[0]=d},
mz(){return C.bE(this.a.buffer,0,null)},
hd(d,e){var w,v=this.a,u=v.length
for(w=0;w<u;++w)e.iS(v[w])},
j(d){var w=this.a
return w.length===1?""+w[0]:C.j(w)}}
A.tA.prototype={
bu(d){return new A.tA(C.hE(this.a,!0,x.i))},
ge5(d){return B.bI},
gm(d){return this.a.length},
eL(d,e){return J.NT(this.a[e])},
t(d){return this.eL(d,0)},
k(d,e){var w,v,u
if(e==null)return!1
if(e instanceof A.tA){w=this.a
v=w.length
u=e.a
w=v===u.length&&C.ag(w)===C.ag(u)}else w=!1
return w},
gv(d){return C.ag(this.a)},
hd(d,e){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.G)(w),++u){t=w[u]
e.iS(t.a)
e.iS(t.b)}},
j(d){var w=this.a
return w.length===1?C.j(w[0]):C.j(w)}}
A.nF.prototype={
bu(d){return new A.nF(new Int8Array(C.bf(this.a)))},
ge5(d){return B.tM},
gm(d){return this.a.length},
k(d,e){var w,v
if(e==null)return!1
if(e instanceof A.nF){w=this.a
v=e.a
w=w.length===v.length&&C.ag(w)===C.ag(v)}else w=!1
return w},
gv(d){return C.ag(this.a)},
eL(d,e){return this.a[e]},
t(d){return this.eL(d,0)},
o1(d){this.a[0]=d},
mz(){return C.bE(this.a.buffer,0,null)},
hd(d,e){e.p6(C.bE(this.a.buffer,0,null))},
j(d){var w=this.a
return w.length===1?""+w[0]:C.j(w)}}
A.pJ.prototype={
akh(d,e){var w,v,u
for(w=this.a,v=0;v<e;++v){u=d.V()
$.iz()[0]=u
w[v]=$.j1()[0]}},
bu(d){return new A.pJ(new Int16Array(C.bf(this.a)))},
ge5(d){return B.tN},
gm(d){return this.a.length},
k(d,e){var w,v,u
if(e==null)return!1
if(e instanceof A.pJ){w=this.a
v=w.length
u=e.a
w=v===u.length&&C.ag(w)===C.ag(u)}else w=!1
return w},
gv(d){return C.ag(this.a)},
eL(d,e){return this.a[e]},
t(d){return this.eL(d,0)},
o1(d){this.a[0]=d},
mz(){return C.bE(this.a.buffer,0,null)},
hd(d,e){var w,v=new Int16Array(1),u=C.aTU(v.buffer,0,null),t=this.a,s=t.length
for(w=0;w<s;++w){v[0]=t[w]
e.hp(u[0])}},
j(d){var w=this.a
return w.length===1?""+w[0]:C.j(w)}}
A.pI.prototype={
akg(d,e){var w,v,u
for(w=this.a,v=0;v<e;++v){u=d.N()
$.dc()[0]=u
w[v]=$.fy()[0]}},
bu(d){return new A.pI(new Int32Array(C.bf(this.a)))},
ge5(d){return B.tO},
gm(d){return this.a.length},
k(d,e){var w,v,u
if(e==null)return!1
if(e instanceof A.pI){w=this.a
v=w.length
u=e.a
w=v===u.length&&C.ag(w)===C.ag(u)}else w=!1
return w},
gv(d){return C.ag(this.a)},
eL(d,e){return this.a[e]},
t(d){return this.eL(d,0)},
o1(d){this.a[0]=d},
mz(){return C.bE(this.a.buffer,0,null)},
hd(d,e){var w,v,u=this.a,t=u.length
for(w=0;w<t;++w){v=u[w]
$.ae7()[0]=v
e.iS($.aKa()[0])}},
j(d){var w=this.a
return w.length===1?""+w[0]:C.j(w)}}
A.tB.prototype={
bu(d){return new A.tB(C.hE(this.a,!0,x.i))},
ge5(d){return B.tJ},
gm(d){return this.a.length},
k(d,e){var w,v,u
if(e==null)return!1
if(e instanceof A.tB){w=this.a
v=w.length
u=e.a
w=v===u.length&&C.ag(w)===C.ag(u)}else w=!1
return w},
gv(d){return C.ag(this.a)},
eL(d,e){return J.NT(this.a[e])},
t(d){return this.eL(d,0)},
hd(d,e){var w,v,u,t,s,r
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.G)(w),++u){t=w[u]
s=t.a
r=$.ae7()
r[0]=s
s=$.aKa()
e.iS(s[0])
r[0]=t.b
e.iS(s[0])}},
j(d){var w=this.a
return w.length===1?C.j(w[0]):C.j(w)}}
A.tC.prototype={
akj(d,e){var w,v,u
for(w=this.a,v=0;v<e;++v){u=d.N()
$.dc()[0]=u
w[v]=$.p1()[0]}},
bu(d){return new A.tC(new Float32Array(C.bf(this.a)))},
ge5(d){return B.tK},
gm(d){return this.a.length},
k(d,e){var w,v,u
if(e==null)return!1
if(e instanceof A.tC){w=this.a
v=w.length
u=e.a
w=v===u.length&&C.ag(w)===C.ag(u)}else w=!1
return w},
gv(d){return C.ag(this.a)},
mz(){return C.bE(this.a.buffer,0,null)},
hd(d,e){var w,v=this.a,u=v.length
for(w=0;w<u;++w)e.aLt(v[w])},
j(d){var w=this.a
return w.length===1?C.j(w[0]):C.j(w)}}
A.tz.prototype={
ake(d,e){var w,v,u
for(w=this.a,v=0;v<e;++v){u=d.N()
$.dc()[0]=u
w[v]=$.p1()[0]}},
bu(d){return new A.tz(new Float64Array(C.bf(this.a)))},
ge5(d){return B.tL},
gm(d){return this.a.length},
k(d,e){var w,v,u
if(e==null)return!1
if(e instanceof A.tz){w=this.a
v=w.length
u=e.a
w=v===u.length&&C.ag(w)===C.ag(u)}else w=!1
return w},
gv(d){return C.ag(this.a)},
mz(){return C.bE(this.a.buffer,0,null)},
hd(d,e){var w,v=this.a,u=v.length
for(w=0;w<u;++w)e.aLu(v[w])},
j(d){var w=this.a
return w.length===1?C.j(w[0]):C.j(w)}}
A.xy.prototype={
bu(d){return new A.xy(new Uint8Array(C.bf(this.a)))},
ge5(d){return B.du},
gm(d){return this.a.length},
mz(){return this.a},
k(d,e){var w,v
if(e==null)return!1
if(e instanceof A.xy){w=this.a
v=e.a
w=w.length===v.length&&C.ag(w)===C.ag(v)}else w=!1
return w},
gv(d){return C.ag(this.a)},
hd(d,e){e.p6(this.a)},
j(d){return"<data>"}}
A.fY.prototype={
P(){return"BmpCompression."+this.b}}
A.afK.prototype={}
A.rJ.prototype={
Xj(d,e){var w,v,u,t,s,r,q,p=this,o=p.d,n=o<=40
if(n){w=p.r
w=w===B.lT||w===B.lU}else w=!0
if(w){w=p.as=d.N()
v=A.aID(w)
p.CW=v
u=D.b.de(w,v)
w=u>0
p.cx=w?255/u:0
v=p.at=d.N()
t=A.aID(v)
p.cy=t
s=D.b.de(v,t)
p.db=w?255/s:0
v=p.ax=d.N()
t=A.aID(v)
p.dx=t
r=D.b.de(v,t)
p.dy=w?255/r:0
if(!n||p.r===B.lU){n=p.ay=d.N()
w=A.aID(n)
p.fr=w
q=D.b.de(n,w)
p.fx=q>0?255/q:0}else if(p.f===16){p.ay=4278190080
p.fr=24
p.fx=1}else{p.ay=4278190080
p.fr=24
p.fx=1}}else if(p.f===16){p.as=31744
p.CW=10
p.cx=8.225806451612904
p.at=992
p.cy=5
p.db=8.225806451612904
p.ax=31
p.dx=0
p.dy=8.225806451612904
p.fx=p.fr=p.ay=0}else{p.as=16711680
p.CW=16
p.cx=1
p.at=65280
p.cy=8
p.db=1
p.ax=255
p.dx=0
p.dy=1
p.ay=4278190080
p.fr=24
p.fx=1}n=d.d
d.d=n+(o-(n-p.fy))
if(p.f<=8)p.aJk(d)},
gAw(){var w=this.d
if(w!==40)if(w===124){w=this.ay
w===$&&C.b()
w=w===0}else w=!1
else w=!0
return w},
gbL(d){return Math.abs(this.c)},
aJk(d){var w,v,u,t,s,r,q=this,p=q.z
if(p===0)p=D.b.cj(1,q.f)
q.ch=new A.m7(new Uint8Array(p*3),p,3)
for(w=0;w<p;++w){v=d.a
u=d.d
t=d.d=u+1
u=v[u]
s=d.d=t+1
t=v[t]
r=d.d=s+1
s=v[s]
d.d=r+1
r=v[r]
q.ch.Cf(w,s,t,u,r)}},
aDk(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(n.ch!=null){w=n.f
if(w===1){v=d.b1()
for(u=7;u>=0;--u)e.$4(D.b.kT(v,u)&1,0,0,0)
return}else if(w===2){v=d.b1()
for(u=6;u>=0;u-=2)e.$4(D.b.kT(v,u)&2,0,0,0)}else if(w===4){v=d.b1()
e.$4(D.b.G(v,4)&15,0,0,0)
e.$4(v&15,0,0,0)
return}else if(w===8){e.$4(d.b1(),0,0,0)
return}}w=n.r
if(w===B.lT&&n.f===32){t=d.N()
w=n.as
w===$&&C.b()
s=n.CW
s===$&&C.b()
s=D.b.de((t&w)>>>0,s)
w=n.cx
w===$&&C.b()
r=D.f.t(s*w)
w=n.at
w===$&&C.b()
s=n.cy
s===$&&C.b()
s=D.b.de((t&w)>>>0,s)
w=n.db
w===$&&C.b()
q=D.f.t(s*w)
w=n.ax
w===$&&C.b()
s=n.dx
s===$&&C.b()
s=D.b.de((t&w)>>>0,s)
w=n.dy
w===$&&C.b()
p=D.f.t(s*w)
if(n.gAw())o=255
else{w=n.ay
w===$&&C.b()
s=n.fr
s===$&&C.b()
s=D.b.de((t&w)>>>0,s)
w=n.fx
w===$&&C.b()
o=D.f.t(s*w)}return e.$4(r,q,p,o)}else{s=n.f
if(s===32&&w===B.qA){p=d.b1()
q=d.b1()
r=d.b1()
o=d.b1()
return e.$4(r,q,p,n.gAw()?255:o)}else if(s===24){p=d.b1()
q=d.b1()
return e.$4(d.b1(),q,p,255)}else if(s===16){t=d.V()
w=n.as
w===$&&C.b()
s=n.CW
s===$&&C.b()
s=D.b.de((t&w)>>>0,s)
w=n.cx
w===$&&C.b()
r=D.f.t(s*w)
w=n.at
w===$&&C.b()
s=n.cy
s===$&&C.b()
s=D.b.de((t&w)>>>0,s)
w=n.db
w===$&&C.b()
q=D.f.t(s*w)
w=n.ax
w===$&&C.b()
s=n.dx
s===$&&C.b()
s=D.b.de((t&w)>>>0,s)
w=n.dy
w===$&&C.b()
p=D.f.t(s*w)
if(n.gAw())o=255
else{w=n.ay
w===$&&C.b()
s=n.fr
s===$&&C.b()
s=D.b.de((t&w)>>>0,s)
w=n.fx
w===$&&C.b()
o=D.f.t(s*w)}return e.$4(r,q,p,o)}else throw C.c(A.aG("Unsupported bitsPerPixel ("+s+") or compression ("+w.j(0)+")."))}}}
A.OH.prototype={
kW(d){var w,v=null
if(!A.aKQ(A.br(d,!1,v,0)))return v
w=A.br(d,!1,v,0)
this.a=w
return this.b=A.b2q(w,v)},
fW(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.b
if(d==null)return new A.pL(e,e,e,e,0,B.ae,0,0)
w=f.a
w===$&&C.b()
v=d.a.b
v===$&&C.b()
w.d=v
u=d.f
v=d.b
t=D.b.bR(v*u+31,32)*4
w=f.c
if(w)s=4
else if(u===1||u===4||u===8)s=1
else{r=u===32?4:3
s=r}if(w)q=B.H
else if(u===1)q=B.c5
else{if(u===2)r=B.c6
else if(u===4)r=B.c7
else{if(u!==8)if(u!==16)u!==24
r=B.H}q=r}p=w?e:d.ch
o=A.dY(e,e,q,0,B.ae,d.gbL(d),e,0,s,p,v,!1)
for(n=o.gbL(o)-1,w=d.c,v=1/w<0,r=w<0,w=w===0;n>=0;--n){m={}
if(!(w?v:r))l=n
else{k=o.a
k=k==null?e:k.b
l=(k==null?0:k)-1-n}k=f.a
j=k.eZ(t)
k.d=k.d+(j.c-j.d)
k=o.a
i=k==null
h=i?e:k.a
if(h==null)h=0
m.a=0
g=i?e:k.ee(0,l,e)
if(g==null)g=new A.eN()
for(;m.a<h;)d.aDk(j,new A.afJ(m,f,h,d,g))}return o},
kh(d,e,f){if(this.kW(e)==null)return null
return this.fW(0)}}
A.ahN.prototype={}
A.ahC.prototype={}
A.ajn.prototype={}
A.Tk.prototype={}
A.UJ.prototype={
B5(){return this.w},
lH(d,e,f,g,h){throw C.c(A.aG("B44 compression not yet supported."))},
wo(d,e,f){return this.lH(d,e,f,null,null)},
j(d){return C.j(this.r)+" "+this.x}}
A.xc.prototype={
P(){return"ExrChannelType."+this.b}}
A.td.prototype={
P(){return"ExrChannelName."+this.b}}
A.Tl.prototype={
gaDc(){var w=this.c
w===$&&C.b()
return w},
ak7(d){var w=this,v=d.Bs()
w.a=v
if(v.length===0)return
w.c=B.a8a[d.N()]
d.b1()
d.d+=3
w.f=d.N()
w.r=d.N()
v=w.a
if(v==="R"){w.w=!0
w.b=B.U8}else if(v==="G"){w.w=!0
w.b=B.U9}else if(v==="B"){w.w=!0
w.b=B.Ua}else if(v==="A"){w.w=!0
w.b=B.Ub}else{w.w=!1
w.b=B.Uc}switch(w.c.a){case 0:w.d=4
break
case 1:w.d=2
break
case 2:w.d=4
break
default:throw C.c(A.aG("EXR Invalid pixel type: "+w.gaDc().j(0)))}}}
A.kx.prototype={
P(){return"ExrCompressorType."+this.b}}
A.ajZ.prototype={
lH(d,e,f,g,h){throw C.c(A.aG("Unsupported compression type"))},
wo(d,e,f){return this.lH(d,e,f,null,null)}}
A.anM.prototype={}
A.Tm.prototype={}
A.ak0.prototype={
ak8(d){var w,v,u,t,s=this,r=A.br(d,!1,null,0)
if(r.N()!==20000630)throw C.c(A.aG("File is not an OpenEXR image file."))
w=s.d=r.b1()
if(w!==2)throw C.c(A.aG("Cannot read version "+w+" image files."))
w=s.e=r.lA()
if((w&4294967289)>>>0!==0)throw C.c(A.aG("The file format version number's flag field contains unrecognized flags."))
if((w&16)===0){v=s.c
u=A.aT0(v.length,(w&2)!==0,r)
if(u.w>0)v.push(u)}else for(w=s.c;!0;){u=A.aT0(w.length,(s.e&2)!==0,r)
if(u.w<=0)break
w.push(u)}w=s.c
v=w.length
if(v===0)throw C.c(A.aG("Error reading image header"))
for(t=0;t<w.length;w.length===v||(0,C.G)(w),++t)w[t].aJj(r)
s.awH(r)},
awH(d){var w,v,u,t,s=this
for(w=s.c,v=w.length,u=0;u<w.length;w.length===v||(0,C.G)(w),++u){t=w[u]
s.a=Math.max(s.a,t.w)
s.b=Math.max(s.b,t.x)
if(t.db)s.awQ(t,d)
else s.awP(t,d)}},
awQ(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=this.e
b3===$&&C.b()
w=(b3&16)!==0
b3=b4.b
b3.toString
v=b4.CW
u=b4.ay
t=A.aS(b5,b2,0)
s=b4.c
r=b4.a
q=0
p=0
while(!0){o=b4.k1
o.toString
if(!(q<o))break
n=0
while(!0){o=b4.id
o.toString
if(!(n<o))break
for(o=p!==0,m=0,l=0;m<b4.go[q];++m)for(k=0;k<b4.fy[n];++k,++l){if(o)break
t.d=u[p][l]
if(w)if(t.N()!==r)throw C.c(A.aG("Invalid Image Data"))
j=t.N()
i=t.N()
t.N()
t.N()
h=t.eZ(t.N())
t.d=t.d+(h.c-h.d)
g=b4.dy
g.toString
f=i*g
e=b4.dx
e.toString
g=v.lH(h,j*e,f,e,g)
e=g.length
d=new A.h3(g,0,e,0,!1)
a0=v.a
a1=v.b
a2=e-0
a3=s.length
a4=0
a5=0
while(!0){if(!(a5<a1&&f<this.b))break
for(a6=0;a6<a3;++a6){if(a4>=a2)break
a7=s[a6]
g=b4.dx
g.toString
a8=j*g
for(a9=0;a9<a0;++a9,++a8){g=a7.c
g===$&&C.b()
switch(g.a){case 1:g=d.V()
e=$.dn
b0=(e!=null?e:A.dO())[g]
break
case 2:b0=d.V()
break
case 0:b0=d.N()
break
default:b0=b2}g=a7.d
g===$&&C.b()
a4+=g
g=a7.w
g===$&&C.b()
if(g){g=b3.a
b1=g==null?b2:g.ee(a8,f,b2)
if(b1==null)b1=new A.eN()
g=a7.b
g===$&&C.b()
b1.l(0,g.a,b0)}else{g=a7.a
g===$&&C.b()
e=b3.b
g=e!=null?e.h(0,g):b2
if(g!=null)g.cD(a8,f,b0,0,0)}}}++a5;++f}}++n;++p}++q}},
awP(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=this.e
a5===$&&C.b()
w=(a5&16)!==0
a5=a6.b
a5.toString
v=a6.CW
u=a6.ay[0]
t=a6.cx
s=A.aS(a7,a4,0)
for(r=u.length,q=a6.c,p=v!=null,o=0,n=0;n<r;++n){s.d=u[n]
if(w)if(s.N()!==3.141592653589793)throw C.c(A.aG("Invalid Image Data"))
m=s.N()
l=$.dc()
l[0]=m
m=$.fy()
m[0]
l[0]=s.N()
k=s.eZ(m[0])
s.d=s.d+(k.c-k.d)
if(p){m=v.wo(k,0,o)
j=new A.h3(m,0,m.length,0,!1)}else j=k
i=j.c-j.d
h=q.length
g=0
while(!0){if(!(g<t&&o<this.b))break
f=a6.cy[o]
if(f>=i)break
for(e=0;e<h;++e){if(f>=i)break
d=q[e]
a0=a6.w
for(a1=0;a1<a0;++a1){m=d.c
m===$&&C.b()
switch(m.a){case 1:m=j.V()
l=$.dn
a2=(l!=null?l:A.dO())[m]
break
case 2:a2=j.V()
break
case 0:a2=j.N()
break
default:a2=a4}m=d.d
m===$&&C.b()
f+=m
m=d.w
m===$&&C.b()
if(m){m=a5.a
a3=m==null?a4:m.ee(a1,o,a4)
if(a3==null)a3=new A.eN()
m=d.b
m===$&&C.b()
a3.l(0,m.a,a2)}else{m=d.a
m===$&&C.b()
l=a5.b
m=l!=null?l.h(0,m):a4
if(m!=null)m.cD(a1,o,a2,0,0)}}}++g;++o}}}}
A.DT.prototype={
ak9(a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=C.w(x.N,x.u)
for(w=a1.e,v=x.t,u=a1.c,t=B.cQ;!0;){s=a6.Bs()
if(s.length===0)break
a6.Bs()
r=a6.N()
q=a6.eZ(r)
a6.d=a6.d+(q.c-q.d)
w.l(0,s,new A.Tk(r,q))
switch(s){case"channels":for(;!0;){p=new A.Tl()
p.ak7(q)
o=p.a
o===$&&C.b()
if(o.length===0)break
n=p.w
n===$&&C.b()
if(n){++a1.d
o=p.c
o===$&&C.b()
if(o===B.mI)t=B.cQ
else t=o===B.mJ?B.dp:B.dr}else{n=p.c
n===$&&C.b()
if(n===B.mI){n=a1.w
m=a1.x
a3.l(0,o,new A.xA(new Uint16Array(n*m),n,m,1))}else if(n===B.mJ){n=a1.w
m=a1.x
a3.l(0,o,new A.xB(new Float32Array(n*m),n,m,1))}else if(n===B.te){n=a1.w
m=a1.x
a3.l(0,o,new A.xE(new Uint32Array(n*m),n,m,1))}}u.push(p)}break
case"chromaticities":o=new Float32Array(8)
a1.at=o
n=q.N()
m=$.dc()
m[0]=n
n=$.p1()
o[0]=n[0]
o=a1.at
m[0]=q.N()
o[1]=n[0]
o=a1.at
m[0]=q.N()
o[2]=n[0]
o=a1.at
m[0]=q.N()
o[3]=n[0]
o=a1.at
m[0]=q.N()
o[4]=n[0]
o=a1.at
m[0]=q.N()
o[5]=n[0]
o=a1.at
m[0]=q.N()
o[6]=n[0]
o=a1.at
m[0]=q.N()
o[7]=n[0]
break
case"compression":a1.ax=B.a9W[q.a[q.d++]]
break
case"dataWindow":o=q.N()
n=$.dc()
n[0]=o
o=$.fy()
m=o[0]
n[0]=q.N()
l=o[0]
n[0]=q.N()
k=o[0]
n[0]=q.N()
o=a1.r=C.a([m,l,k,o[0]],v)
a1.w=o[2]-o[0]+1
a1.x=o[3]-o[1]+1
break
case"displayWindow":o=q.N()
n=$.dc()
n[0]=o
o=$.fy()
o[0]
n[0]=q.N()
o[0]
n[0]=q.N()
o[0]
n[0]=q.N()
o[0]
break
case"lineOrder":break
case"pixelAspectRatio":o=q.N()
$.dc()[0]=o
$.p1()[0]
break
case"screenWindowCenter":o=q.N()
n=$.dc()
n[0]=o
o=$.p1()
o[0]
n[0]=q.N()
o[0]
break
case"screenWindowWidth":o=q.N()
$.dc()[0]=o
$.p1()[0]
break
case"tiles":a1.dx=q.N()
a1.dy=q.N()
o=q.a[q.d++]
a1.fr=o&15
a1.fx=D.b.G(o,4)&15
break
case"type":j=q.Bs()
if(j!=="deepscanline")if(j!=="deeptile")throw C.c(A.aG("EXR Invalid type: "+j))
break
default:break}}w=a1.w
a1.b=A.dY(a2,a2,t,0,B.ae,a1.x,a2,0,a1.d,a2,w,!1)
for(w=C.ev(a3,a3.r,a3.$ti.c);w.q();){v=w.d
o=a1.b
o.toString
n=a3.h(0,v)
n.toString
o.aeI(v,n)}if(a1.db){w=a1.r
w===$&&C.b()
a1.id=a1.alZ(w[0],w[2],w[1],w[3])
w=a1.r
a1.k1=a1.am_(w[0],w[2],w[1],w[3])
if(a1.fr!==2)a1.k1=1
w=a1.id
w.toString
v=a1.r
a1.fy=a1.XV(w,v[0],v[2],a1.dx,a1.fx)
v=a1.k1
v.toString
w=a1.r
a1.go=a1.XV(v,w[1],w[3],a1.dy,a1.fx)
w=a1.alW()
a1.k2=w
v=a1.dx
v.toString
v=w*v
a1.k3=v
a1.CW=A.aS_(a1.ax,a1,v,a1.dy)
a7.a=a7.b=0
v=a1.id
v.toString
w=a1.k1
w.toString
a1.ay=C.ap0(v*w,new A.ak1(a7,a1),x.bv)}else{w=a1.x
v=a1.ch=new Uint32Array(w+1)
for(o=u.length,n=a1.r,m=a1.w,i=0;i<o;++i){h=u[i]
l=h.d
l===$&&C.b()
k=h.f
k===$&&C.b()
g=D.b.f_(l*m,k)
for(l=h.r,f=0;f<w;++f){n===$&&C.b()
k=n[1]
l===$&&C.b()
if(D.b.cq(f+k,l)===0)v[f]=v[f]+g}}for(e=0,f=0;f<w;++f)e=Math.max(e,v[f])
w=A.aS_(a1.ax,a1,e,a2)
a1.CW=w
w=a1.cx=w.B5()
v=a1.ch
u=v.length
o=new Uint32Array(u)
a1.cy=o
for(--u,d=0,a0=0;a0<=u;++a0){if(D.b.cq(a0,w)===0)d=0
o[a0]=d
d+=v[a0]}w=D.b.f_(a1.x+w,w)
a1.ay=C.a([new Uint32Array(w-1)],x.hh)}},
alZ(d,e,f,g){var w,v,u,t=this
switch(t.fr){case 0:w=1
break
case 1:v=Math.max(e-d+1,g-f+1)
w=(t.fx===0?t.Da(v):t.CU(v))+1
break
case 2:u=e-d+1
w=(t.fx===0?t.Da(u):t.CU(u))+1
break
default:throw C.c(A.aG("Unknown LevelMode format."))}return w},
am_(d,e,f,g){var w,v,u,t=this
switch(t.fr){case 0:w=1
break
case 1:v=Math.max(e-d+1,g-f+1)
w=(t.fx===0?t.Da(v):t.CU(v))+1
break
case 2:u=g-f+1
w=(t.fx===0?t.Da(u):t.CU(u))+1
break
default:throw C.c(A.aG("Unknown LevelMode format."))}return w},
Da(d){var w
for(w=0;d>1;){++w
d=D.b.G(d,1)}return w},
CU(d){var w,v
for(w=0,v=0;d>1;){if((d&1)!==0)v=1;++w
d=D.b.G(d,1)}return w+v},
alW(){var w,v,u,t,s
for(w=this.c,v=w.length,u=0,t=0;t<v;++t){s=w[t].d
s===$&&C.b()
u+=s}return u},
XV(d,e,f,g,h){var w,v,u,t,s,r,q=J.i5(d,x.p)
for(w=h===1,v=f-e+1,u=0;u<d;++u){t=D.b.cj(1,u)
s=D.b.f_(v,t)
if(w&&s*t<v)++s
r=Math.max(s,1)
g.toString
q[u]=D.b.f_(r+g-1,g)}return q}}
A.UK.prototype={
aJj(d){var w,v,u,t,s=this
if(s.db)for(w=0;w<s.ay.length;++w)for(v=0;u=s.ay[w],v<u.length;++v)u[v]=d.UM()
else{t=s.ay[0].length
for(w=0;w<t;++w)s.ay[0][w]=d.UM()}}}
A.anN.prototype={
akn(d,e,f){var w,v,u,t=this,s=d.c.length,r=J.i5(s,x.aX)
for(w=0;w<s;++w)r[w]=new A.a8J()
t.y=r
v=t.w
v.toString
u=D.b.bR(v*t.x,2)
t.z=new Uint16Array(u)},
B5(){return this.x},
lH(a5,a6,a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this
if(a8==null)a8=a4.c.w
if(a9==null)a9=a4.c.cx
w=a6+a8-1
v=a7+a9-1
u=a4.c
t=u.w
if(w>t)w=t-1
t=u.x
if(v>t)v=t-1
a4.a=w-a6+1
a4.b=v-a7+1
s=u.c
r=s.length
for(q=0,p=0;p<r;++p){o=s[p]
u=a4.y
u===$&&C.b()
n=u[p]
n.b=n.a=q
u=o.f
u===$&&C.b()
m=D.b.f_(a6,u)
l=D.b.f_(w,u)
u=m*u<a6?0:1
u=l-m+u
n.c=u
t=o.r
t===$&&C.b()
m=D.b.f_(a7,t)
l=D.b.f_(v,t)
k=m*t<a7?0:1
k=l-m+k
n.d=k
n.e=t
t=o.d
t===$&&C.b()
t=t/2|0
n.f=t
q+=u*k*t}j=a5.V()
i=a5.V()
if(i>=8192)throw C.c(A.aG("Error in header for PIZ-compressed data (invalid bitmap size)."))
h=new Uint8Array(8192)
if(j<=i){g=a5.fs(i-j+1)
u=g.d
f=g.c-u
for(t=g.a,e=j,p=0;p<f;++p,e=d){d=e+1
h[e]=t[u+p]}}a0=new Uint16Array(65536)
a1=a4.axp(h,a0)
A.b4H(a5,a5.N(),a4.z,q)
for(p=0;p<r;++p){u=a4.y
u===$&&C.b()
n=u[p]
e=0
while(!0){u=n.f
u===$&&C.b()
if(!(e<u))break
t=a4.z
t.toString
k=n.a
k===$&&C.b()
a2=n.c
a2===$&&C.b()
a3=n.d
a3===$&&C.b()
A.b4K(t,k+e,a2,u,a3,a2*u,a1);++e}}u=a4.z
u.toString
a4.aln(a0,u,q)
u=a4.r
if(u==null){u=a4.w
u.toString
u=a4.r=A.G8(!1,u*a4.x+73728)}u.a=0
for(;a7<=v;++a7)for(p=0;p<r;++p){u=a4.y
u===$&&C.b()
n=u[p]
u=n.e
u===$&&C.b()
if(D.b.cq(a7,u)!==0)continue
u=n.c
u===$&&C.b()
t=n.f
t===$&&C.b()
a6=u*t
for(;a6>0;--a6){u=a4.r
u.toString
t=a4.z
t.toString
k=n.b
k===$&&C.b()
n.b=k+1
u.hp(t[k])}}u=a4.r
return C.bE(u.c.buffer,0,u.a)},
wo(d,e,f){return this.lH(d,e,f,null,null)},
aln(d,e,f){var w
for(w=0;w<f;++w)e[w]=d[e[w]]},
axp(d,e){var w,v,u,t
for(w=0,v=0;v<65536;++v)if(v===0||(d[v>>>3]&1<<(v&7))>>>0!==0){u=w+1
e[w]=v
w=u}for(u=w;u<65536;u=t){t=u+1
e[u]=0}return w-1}}
A.a8J.prototype={}
A.anO.prototype={
B5(){return this.x},
lH(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=B.fw.z5(A.xO(a1.e4(),1,null,0),!1),a0=e.y
if(a0==null){a0=e.w
a0.toString
a0=e.y=A.G8(!1,e.x*a0)}a0.a=0
w=C.a([0,0,0,0],x.t)
v=new Uint32Array(1)
u=C.bE(v.buffer,0,null)
if(a4==null)a4=e.c.w
if(a5==null)a5=e.c.cx
t=a2+a4-1
s=a3+a5-1
a0=e.c
r=a0.w
if(t>r)t=r-1
r=a0.x
if(s>r)s=r-1
e.a=t-a2+1
e.b=s-a3+1
a0=a0.c
q=a0.length
for(p=a3,o=0;p<=s;++p)for(n=0;n<q;++n){m=a0[n]
r=m.r
r===$&&C.b()
if(D.b.cq(a3,r)!==0)continue
r=m.f
r===$&&C.b()
l=D.b.f_(a2,r)
k=D.b.f_(t,r)
r=l*r<a2?0:1
j=k-l+r
v[0]=0
r=m.c
r===$&&C.b()
switch(r.a){case 0:w[0]=o
r=o+j
w[1]=r
r+=j
w[2]=r
o=r+j
for(i=0;i<j;++i){r=w[0]
w[0]=r+1
r=d[r]
h=w[1]
w[1]=h+1
h=d[h]
g=w[2]
w[2]=g+1
g=d[g]
v[0]=v[0]+((r<<24|h<<16|g<<8)>>>0)
for(f=0;f<4;++f)e.y.aT(u[f])}break
case 1:w[0]=o
r=o+j
w[1]=r
o=r+j
for(i=0;i<j;++i){r=w[0]
w[0]=r+1
r=d[r]
h=w[1]
w[1]=h+1
h=d[h]
v[0]=v[0]+((r<<8|h)>>>0)
for(f=0;f<2;++f)e.y.aT(u[f])}break
case 2:w[0]=o
r=o+j
w[1]=r
r+=j
w[2]=r
o=r+j
for(i=0;i<j;++i){r=w[0]
w[0]=r+1
r=d[r]
h=w[1]
w[1]=h+1
h=d[h]
g=w[2]
w[2]=g+1
g=d[g]
v[0]=v[0]+((r<<24|h<<16|g<<8)>>>0)
for(f=0;f<4;++f)e.y.aT(u[f])}break}}a0=e.y
return C.bE(a0.c.buffer,0,a0.a)},
wo(d,e,f){return this.lH(d,e,f,null,null)}}
A.anP.prototype={
B5(){return 1},
lH(d,e,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=d.c,f=A.G8(!1,(g-d.d)*2)
if(a1==null)a1=h.c.w
if(a2==null)a2=h.c.cx
w=e+a1-1
v=a0+a2-1
u=h.c
t=u.w
if(w>t)w=t-1
u=u.x
if(v>u)v=u-1
h.a=w-e+1
h.b=v-a0+1
for(;u=d.d,u<g;){t=d.a
d.d=u+1
u=t[u]
$.iA()[0]=u
s=$.j2()[0]
if(s<0){r=-s
for(;q=r-1,r>0;r=q)f.aT(d.a[d.d++])}else for(r=s;q=r-1,r>=0;r=q)f.aT(d.a[d.d++])}p=C.bE(f.c.buffer,0,f.a)
o=p.length
for(n=1;n<o;++n)p[n]=p[n-1]+p[n]-128
g=h.r
if(g==null||g.length!==o)g=h.r=new Uint8Array(o)
u=D.b.bR(o+1,2)
for(m=0,l=0;!0;u=i,m=j){if(l<o){k=l+1
j=m+1
g[l]=p[m]}else break
if(k<o){l=k+1
i=u+1
g[k]=p[u]}else break}g.toString
return g},
wo(d,e,f){return this.lH(d,e,f,null,null)},
j(d){return C.j(this.w)}}
A.UL.prototype={
B5(){return this.x},
lH(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=B.fw.z5(A.xO(d.e4(),1,null,0),!1)
if(g==null)g=l.c.w
if(h==null)h=l.c.cx
w=e+g-1
v=f+h-1
u=l.c
t=u.w
if(w>t)w=t-1
u=u.x
if(v>u)v=u-1
l.a=w-e+1
l.b=v-f+1
s=k.length
for(r=1;r<s;++r)k[r]=k[r-1]+k[r]-128
u=l.y
if(u==null||u.length!==s)u=l.y=new Uint8Array(s)
t=D.b.bR(s+1,2)
for(q=0,p=0;!0;t=m,q=n){if(p<s){o=p+1
n=q+1
u[p]=k[q]}else break
if(o<s){p=o+1
m=t+1
u[o]=k[t]}else break}u.toString
return u},
wo(d,e,f){return this.lH(d,e,f,null,null)},
j(d){return C.j(this.w)}}
A.ak_.prototype={
fW(d){var w=this.a
if(w==null)return null
return w.c[d].b},
kh(d,e,f){var w=new A.ak0(C.a([],x.m))
w.ak8(e)
this.a=w
return this.fW(0)}}
A.Eg.prototype={
VH(){var w,v,u,t,s,r,q,p=this
if(p.c==null)return p.d
w=p.d
v=w.a
u=new A.m7(new Uint8Array(v*4),v,4)
for(t=0;t<v;++t){s=w.kP(t)
r=w.kO(t)
q=w.kN(t)
u.Cf(t,s,r,q,t===p.c?0:255)}return u}}
A.Eh.prototype={
akb(d){var w,v,u,t,s,r,q,p=this
p.a=d.V()
p.b=d.V()
p.c=d.V()
p.d=d.V()
w=d.b1()
p.e=(w&64)!==0
if((w&128)!==0){p.f=A.aSr(D.b.cj(1,(w&7)+1))
for(v=0;u=p.f,v<u.b;++v){t=d.a
s=d.d
r=d.d=s+1
s=t[s]
q=d.d=r+1
r=t[r]
d.d=q+1
q=t[q]
u.d.kS(v,s,r,q)}}p.x=d.d-d.b}}
A.UM.prototype={}
A.U7.prototype={}
A.alv.prototype={
kW(d){var w,v,u,t,s,r,q,p,o=this
o.f=A.br(d,!1,null,0)
o.a=new A.U7(C.a([],x.b))
if(!o.ZI())return null
try{for(;t=o.f,s=t.d,s<t.c;){r=t.a
q=t.d=s+1
w=r[s]
switch(w){case 44:v=o.a2_()
if(v==null){t=o.a
return t}t=v
t.r=o.e
t.w=o.c===2
if(o.b!==0){if(v.f==null&&o.a.e!=null){t=o.a.e
s=t.a
r=t.b
q=t.c
t=t.d
v.f=new A.Eg(s,r,q,new A.m7(new Uint8Array(C.bf(t.c)),t.a,t.b))}if(v.f!=null)v.f.c=o.d}o.a.r.push(v)
break
case 33:t.d=q+1
u=r[q]
if(J.d(u,255)){t=o.f
if(t.eI(t.a[t.d++])==="NETSCAPE2.0"){s=t.a
r=t.d
q=t.d=r+1
r=s[r]
t.d=q+1
q=s[q]
if(r===3&&q===1)o.r=t.V()}else o.Ed()}else if(J.d(u,249)){t=o.f
t.toString
o.awD(t)}else o.Ed()
break
case 59:t=o.a
return t
default:break}}}catch(p){}return o.a},
awD(d){var w,v,u,t=this
d.b1()
w=d.b1()
t.e=d.V()
t.d=d.b1()
d.b1()
t.c=D.b.G(w,2)&7
t.b=w&1
v=d.Cr(1,0)
if(v.a[v.d]===44){++d.d
u=t.a2_()
if(u==null)return
u.r=t.e
u.w=t.c===2
if(t.b!==0){v=u.f
if(v==null&&t.a.e!=null){v=t.a.e
v.toString
v=u.f=A.b55(v)}if(v!=null)v.c=t.d}t.a.r.push(u)}},
fW(d){var w,v,u=this,t=u.f
if(t==null||u.a==null)return null
w=u.a.r
if(d>=w.length||!1)return null
v=w[d]
t.toString
w=v.x
w===$&&C.b()
t.d=w
return u.anA(v)},
kh(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null
if(g.kW(e)==null)return f
if(g.a.r.length===1||!1)return g.fW(0)
for(w=f,v=w,u=0;t=g.a.r,u<t.length;++u){a0=t[u]
s=g.fW(u)
if(s==null)return f
s.y=a0.r*10
if(v==null||w==null){s.r=g.r
w=s
v=w
continue}t=s.a
r=t==null
q=r?f:t.a
if(q==null)q=0
p=w.a
o=p==null
n=o?f:p.a
if(q===(n==null?0:n)){t=r?f:t.b
if(t==null)t=0
r=o?f:p.b
if(t===(r==null?0:r)){t=a0.a
t===$&&C.b()
if(t===0){t=a0.b
t===$&&C.b()
t=t===0&&a0.w}else t=!1}else t=!1}else t=!1
if(t){v.ol(s)
w=s
continue}if(a0.w){m=a0.f
if(!(m!=null)){t=g.a.e
t.toString
m=t}t=o?f:p.a
if(t==null)t=0
r=o?f:p.b
if(r==null)r=0
w=A.dY(f,f,B.H,0,B.ae,r,f,0,1,m.VH(),t,!1)
t=g.a.c.a
t=!D.x.gW(t)?t[0]:0
r=m.d
l=r.kP(t)
k=r.kO(t)
j=r.kN(t)
i=t===m.c?0:255
t=new Uint8Array(4)
t[0]=l
t[1]=k
t[2]=j
t[3]=i
r=w.a
if(r!=null)r.fC(0,new A.pi(t))}else w=A.tD(w,!1,!1)
w.y=s.y
for(t=s.a,t=t.ga1(t);t.q();){h=t.gM(t)
if(h.gav(h)!==0){r=h.giq(h)
q=a0.a
q===$&&C.b()
p=h.gjg(h)
o=a0.b
o===$&&C.b()
w.Lr(r+q,p+o,h)}}v.ol(w)}return v},
a2_(){var w,v=this.f
if(v.d>=v.c)return null
w=new A.UM()
w.akb(v);++this.f.d
this.Ed()
return w},
anA(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.w==null){m.w=new Uint8Array(256)
m.x=new Uint8Array(4095)
m.y=new Uint8Array(4096)
m.z=new Uint32Array(4096)}w=m.Q=m.f.b1()
v=D.b.cW(1,w)
m.dy=v;++v
m.dx=v
m.db=v+1;++w
m.cy=w
m.cx=D.b.cW(1,w)
m.ay=0
m.CW=4098
m.at=m.ax=0
m.w[0]=0
w=m.z
w.toString
D.bu.hT(w,0,4096,4098)
w=d.c
w===$&&C.b()
v=d.d
v===$&&C.b()
u=d.a
u===$&&C.b()
t=m.a
if(u+w<=t.a){u=d.b
u===$&&C.b()
u=u+v>t.b}else u=!0
if(u)return l
s=d.f
if(!(s!=null)){u=t.e
u.toString
s=u}m.as=w*v
r=A.dY(l,l,B.H,0,B.ae,v,l,0,1,s.VH(),w,!1)
q=new Uint8Array(w)
w=d.e
w===$&&C.b()
if(w){w=d.b
w===$&&C.b()
for(v=w+v,p=0,o=0;p<4;++p)for(n=w+B.Wt[p];n<v;n+=B.YX[p],++o){if(!m.ZK(q))return r
m.a33(r,n,s,q)}}else for(n=0;n<v;++n){if(!m.ZK(q))return r
m.a33(r,n,s,q)}return r},
a33(d,e,f,g){var w,v,u,t=g.length
for(w=0;w<t;++w){v=g[w]
u=d.a
if(u!=null)u.cD(w,e,v,0,0)}},
ZI(){var w,v,u,t,s,r,q,p,o=this,n=o.f.eI(6)
if(n!=="GIF87a"&&n!=="GIF89a")return!1
w=o.a
w.toString
w.a=o.f.V()
w=o.a
w.toString
w.b=o.f.V()
v=o.f.b1()
w=o.a
w.toString
w.c=new A.pi(new Uint8Array(C.bf(C.a([o.f.b1()],x.t))));++o.f.d
if((v&128)!==0){w=o.a
w.toString
w.e=A.aSr(D.b.cj(1,(v&7)+1))
for(u=0;w=o.a.e,u<w.b;++u){t=o.f
s=t.a
r=t.d
q=t.d=r+1
r=s[r]
p=t.d=q+1
q=s[q]
t.d=p+1
p=s[p]
w.d.kS(u,r,q,p)}}o.a.toString
return!0},
ZK(d){var w=this,v=w.as
v.toString
w.as=v-d.length
if(!w.anN(d))return!1
if(w.as===0)w.Ed()
return!0},
Ed(){var w,v,u,t=this.f
if(t.d>=t.c)return!0
w=t.b1()
while(!0){if(w!==0){t=this.f
t=t.d<t.c}else t=!1
if(!t)break
t=this.f
v=t.d+=w
if(v>=t.c)return!0
u=t.a
t.d=v+1
w=u[v]}return!0},
anN(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.ay
if(k>4095)return!1
w=d.length
if(k!==0){v=0
while(!0){if(!(k!==0&&v<w))break
u=v+1
t=l.x
t===$&&C.b()
k=l.ay=k-1
d[v]=t[k]
v=u}}else v=0
for(;v<w;){s=l.ch=l.anM()
if(s==null)return!1
k=l.dx
if(s===k)return!1
t=l.dy
if(s===t){for(t=l.z,r=0;r<=4095;++r)t[r]=4098
l.db=k+1
k=l.Q+1
l.cy=k
l.cx=D.b.cW(1,k)
l.CW=4098}else{if(s<t){u=v+1
d[v]=s
v=u}else{k=l.z
if(k[s]===4098){q=l.db-2
if(s===q){s=l.CW
p=l.y
p===$&&C.b()
o=l.x
o===$&&C.b()
n=l.ay++
t=l.NL(k,s,t)
o[n]=t
p[q]=t}else return!1}r=0
while(!0){m=r+1
if(!(r<=4095&&s>l.dy&&s<=4095))break
k=l.x
k===$&&C.b()
t=l.ay++
q=l.y
q===$&&C.b()
k[t]=q[s]
s=l.z[s]
r=m}if(m>=4095||s>4095)return!1
k=l.x
k===$&&C.b()
t=l.ay
q=l.ay=t+1
k[t]=s
t=q
while(!0){if(!(t!==0&&v<w))break
u=v+1
t=l.ay=t-1
d[v]=k[t]
v=u}}k=l.CW
if(k!==4098&&l.z[l.db-2]===4098){t=l.z
q=l.db-2
t[q]=k
p=l.ch
o=l.y
n=l.dy
if(p===q){o===$&&C.b()
o[q]=l.NL(t,k,n)}else{o===$&&C.b()
p.toString
o[q]=l.NL(t,p,n)}}k=l.ch
k.toString
l.CW=k}}return!0},
anM(){var w,v,u,t,s=this
if(s.cy>12)return null
for(;w=s.ax,v=s.cy,w<v;){w=s.alA()
w.toString
v=s.at
u=s.ax
s.at=(v|D.b.cW(w,u))>>>0
s.ax=u+8}u=s.at
t=B.aaD[v]
s.at=D.b.de(u,v)
s.ax=w-v
w=s.db
if(w<4097){++w
s.db=w
w=w>s.cx&&v<12}else w=!1
if(w){s.cx=s.cx<<1>>>0
s.cy=v+1}return u&t},
NL(d,e,f){var w,v,u=0
while(!0){if(e>f){w=u+1
v=u<=4095
u=w}else v=!1
if(!v)break
if(e>4095)return 4098
e=d[e]}return e},
alA(){var w,v,u=this,t=u.w,s=t[0]
if(s===0){t[0]=u.f.b1()
t=u.w
s=t[0]
if(s===0)return null
D.x.dw(t,1,1+s,u.f.fs(s).e4())
t=u.w
w=t[1]
t[1]=2
t[0]=t[0]-1}else{v=t[1]
t[1]=v+1
w=t[v]
t[0]=s-1}return w}}
A.xw.prototype={
P(){return"IcoType."+this.b}}
A.an_.prototype={}
A.Ut.prototype={}
A.amY.prototype={
gbL(d){return D.b.bR(A.rJ.prototype.gbL.call(this,this),2)},
gAw(){return!(this.d===40&&this.f===32)&&A.rJ.prototype.gAw.call(this)}}
A.amZ.prototype={
kh(d,e,f){var w,v,u,t=this,s=A.br(e,!1,null,0)
t.a=s
w=t.b=A.aSB(s)
if(w==null)return null
if(w.e.length===1||!1)return t.fW(0)
for(v=null,u=0;u<t.b.e.length;++u){f=t.fW(u)
if(f==null)continue
if(v==null){f.w=B.ae
v=f}else v.ol(f)}return v},
fW(a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=this.a
if(a8!=null){w=this.b
w=w==null||a9>=w.d}else w=!0
if(w)return a7
v=this.b.e[a9]
w=a8.a
a8=a8.b+v.e
u=v.d
t=J.aej(w,a8,a8+u)
s=new A.Zi(A.aT1())
x.D.a(t)
if(s.Jy(t))return s.ei(0,t)
r=A.G8(!1,14)
r.hp(19778)
r.iS(u)
r.iS(0)
r.iS(0)
a8=A.br(t,!1,a7,0)
w=A.aQH(A.br(C.bE(r.c.buffer,0,r.a),!1,a7,0))
u=a8.d
q=a8.N()
p=a8.N()
o=$.dc()
o[0]=p
p=$.fy()
n=p[0]
o[0]=a8.N()
m=p[0]
l=a8.V()
k=a8.V()
j=B.yJ[a8.N()]
a8.N()
o[0]=a8.N()
p[0]
o[0]=a8.N()
p[0]
p=a8.N()
a8.N()
i=new A.amY(w,n,m,q,l,k,j,p,u)
i.Xj(a8,w)
if(q!==40&&l!==1)return a7
h=p===0&&k<=8?40+4*D.b.cj(1,k):40+4*p
w.b=h
r.a-=4
r.iS(h)
g=A.br(t,!1,a7,0)
f=new A.ahN(!0)
f.a=g
f.b=i
e=f.fW(0)
if(k>=32)return e
d=32-D.b.cq(n,32)
a0=D.b.bR(d===32?n:n+d,8)
for(a8=1/m<0,w=m<0,m=m===0,a1=0;a1<D.b.bR(A.rJ.prototype.gbL.call(i,i),2);++a1){if(!(m?a8:w))a2=a1
else{u=e.a
u=u==null?a7:u.b
a2=(u==null?0:u)-1-a1}a3=g.eZ(a0)
g.d=g.d+(a3.c-a3.d)
u=e.a
a4=u==null?a7:u.ee(0,a2,a7)
if(a4==null)a4=new A.eN()
for(a5=0;a5<n;){u=a3.a[a3.d++]
a6=7
while(!0){if(!(a6>-1&&a5<n))break
if((u&D.b.cW(1,a6))>>>0!==0)a4.sav(0,0)
a4.q();++a5;--a6}}}return e}}
A.PW.prototype={}
A.tu.prototype={}
A.tv.prototype={}
A.Eo.prototype={}
A.ao1.prototype={}
A.pU.prototype={}
A.ao2.prototype={
aLe(d){var w,v,u,t,s,r,q=this,p=A.br(d,!0,null,0)
q.a=p
w=p.Cr(2,0)
p=w.a
v=w.d
if(p[v]!==255||p[v+1]!==216)return!1
if(q.ui()!==216)return!1
u=q.ui()
t=!1
s=!1
while(!0){if(u!==217){p=q.a
p=p.d<p.c}else p=!1
if(!p)break
r=q.a.V()
if(r<2)break
p=q.a
p.d=p.d+(r-2)
switch(u){case 192:case 193:case 194:t=!0
break
case 218:s=!0
break}u=q.ui()}return t&&s},
w6(d,e){var w,v,u,t,s,r,q,p,o=this
o.a=A.br(e,!0,null,0)
o.awx()
if(o.x.length!==1)throw C.c(A.aG("Only single frame JPEGs supported"))
for(w=o.Q,v=0;u=o.d,t=u.z,v<t.length;++v){s=u.y.h(0,t[v])
u=s.a
t=o.d
r=t.f
q=s.b
p=t.r
t=o.alD(t,s)
u=u===1&&r===2?1:0
w.push(new A.PW(t,u,q===1&&p===2?1:0))}},
awx(){var w,v,u,t,s,r,q=this
if(q.ui()!==216)throw C.c(A.aG("Start Of Image marker not found."))
w=q.ui()
while(!0){if(w!==217){v=q.a
v===$&&C.b()
v=v.d<v.c}else v=!1
if(!v)break
v=q.a
v===$&&C.b()
u=v.V()
if(u<2)C.V(A.aG("Invalid Block"))
v=q.a
t=v.eZ(u-2)
v.d=v.d+(t.c-t.d)
switch(w){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:q.awy(w,t)
break
case 219:q.awA(t)
break
case 192:case 193:case 194:q.awC(w,t)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw C.c(A.aG("Unhandled frame type "+D.b.hD(w,16)))
case 196:q.awz(t)
break
case 221:q.e=t.V()
break
case 218:q.awO(t)
break
case 255:v=q.a
s=v.a
r=v.d
if(s[r]!==255)v.d=r-1
break
default:v=q.a
s=v.a
r=v.d
if(s[r+-3]===255){s=s[r+-2]
s=s>=192&&s<=254}else s=!1
if(s){v.d=r-3
break}if(w!==0)throw C.c(A.aG("Unknown JPEG marker "+D.b.hD(w,16)))
break}w=q.ui()}},
ui(){var w,v=this,u=v.a
u===$&&C.b()
if(u.d>=u.c)return 0
do{do{w=v.a.b1()
if(w!==255){u=v.a
u=u.d<u.c}else u=!1}while(u)
u=v.a
if(u.d>=u.c)return w
do{w=v.a.b1()
if(w===255){u=v.a
u=u.d<u.c}else u=!1}while(u)
if(w===0){u=v.a
u=u.d<u.c}else u=!1}while(u)
return w},
awB(d){if(d.N()!==1165519206)return
if(d.V()!==0)return
this.r.w6(0,d)},
awy(d,e){var w,v,u,t,s=e
if(d===224){w=s
if(w.a[w.d]===74){w=s
if(w.a[w.d+1]===70){w=s
if(w.a[w.d+2]===73){w=s
if(w.a[w.d+3]===70){w=s
w=w.a[w.d+4]===0}else w=!1}else w=!1}else w=!1}else w=!1
if(w){w=new A.ao5()
s.toString
s.toString
s.toString
s.toString
s.toString
s.toString
s.toString
v=s
v=v.a[v.d+12]
w.f=v
u=s
u=u.a[u.d+13]
w.r=u
this.b=w
s.Cr(14+3*v*u,14)}}else if(d===225)this.awB(s)
else if(d===238){w=s
if(w.a[w.d]===65){w=s
if(w.a[w.d+1]===100){w=s
if(w.a[w.d+2]===111){w=s
if(w.a[w.d+3]===98){w=s
if(w.a[w.d+4]===101){w=s
w=w.a[w.d+5]===0}else w=!1}else w=!1}else w=!1}else w=!1}else w=!1
if(w){w=new A.ao1()
this.c=w
s.toString
s.toString
s.toString
s.toString
s.toString
v=s
w.d=v.a[v.d+11]}}else if(d===254)try{s.aJn()}catch(t){C.bj(t)}},
awA(d){var w,v,u,t,s,r,q,p
for(w=d.c,v=this.w;u=d.d,t=u<w,t;){t=d.a
d.d=u+1
u=t[u]
s=D.b.G(u,4)
r=u&15
if(r>=4)throw C.c(A.aG("Invalid number of quantization tables"))
u=v[r]
if(u==null){u=new Int16Array(64)
v[r]=u}for(t=s!==0,q=0;q<64;++q){p=t?d.V():d.a[d.d++]
u[B.jB[q]]=p}}if(t)throw C.c(A.aG("Bad length for DQT block"))},
awC(d,e){var w,v,u,t,s,r,q,p,o=this
if(o.d!=null)throw C.c(A.aG("Duplicate JPG frame data found."))
w=o.d=new A.UZ(C.w(x.p,x.c),C.a([],x.t))
w.b=d===194
w.c=e.b1()
w=o.d
w.toString
w.d=e.V()
w=o.d
w.toString
w.e=e.V()
v=e.b1()
for(w=o.w,u=0;u<v;++u){t=e.a
s=e.d
r=e.d=s+1
s=t[s]
q=e.d=r+1
r=t[r]
p=D.b.G(r,4)
e.d=q+1
q=t[q]
o.d.z.push(s)
o.d.y.l(0,s,new A.pU(p&15,r&15,w,q))}o.d.aIY()
o.x.push(o.d)},
awz(d){var w,v,u,t,s,r,q,p,o,n,m,l,k
for(w=d.c,v=this.z,u=this.y;t=d.d,t<w;){s=d.a
r=d.d=t+1
q=s[t]
p=new Uint8Array(16)
for(t=r,o=0,n=0;n<16;++n,t=r){r=t+1
d.d=r
p[n]=s[t]
o+=p[n]}m=d.eZ(o)
d.d=d.d+(m.c-m.d)
l=m.e4()
if((q&16)!==0){q-=16
k=u}else k=v
if(k.length<=q)D.c.sm(k,q+1)
k[q]=this.alG(p,l)}},
awO(d){var w,v,u,t,s,r,q,p=this,o=d.b1()
if(o<1||o>4)throw C.c(A.aG("Invalid SOS block"))
w=C.ap0(o,new A.ao3(p,d),x.c)
v=d.b1()
u=d.b1()
t=d.b1()
s=D.b.G(t,4)
r=p.a
r===$&&C.b()
q=p.d
s=new A.V_(r,q,w,p.e,v,u,s&15,t&15)
r=q.w
r===$&&C.b()
s.f=r
s.r=q.b
s.ow(0)},
alG(d,e){var w,v,u,t,s,r,q,p,o,n,m=C.a([],x.e8),l=16
while(!0){if(!(l>0&&d[l-1]===0))break;--l}w=x.fR
m.push(new A.AG(C.a([],w)))
v=m[0]
for(u=0,t=0;t<l;){for(s=0;s<d[t];++s){v=m.pop()
r=v.a
q=r.length
p=v.b
if(q<=p)D.c.sm(r,p+1)
r[v.b]=new A.Eo(e[u])
for(;r=v.b,r>0;)v=m.pop()
v.b=r+1
m.push(v)
for(;m.length<=t;v=o){r=C.a([],w)
o=new A.AG(r)
m.push(o)
q=v.a
p=q.length
n=v.b
if(p<=n)D.c.sm(q,n+1)
q[v.b]=new A.tv(r)}++u}++t
if(t<l){r=C.a([],w)
o=new A.AG(r)
m.push(o)
q=v.a
p=q.length
n=v.b
if(p<=n)D.c.sm(q,n+1)
q[v.b]=new A.tv(r)
v=o}}return m[0].a},
alD(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a2.e
a0===$&&C.b()
w=a2.f
w===$&&C.b()
v=a0<<3>>>0
u=new Int32Array(64)
t=new Uint8Array(64)
s=C.ar(w*8,null,!1,x.aD)
for(r=a2.c,q=a2.d,p=0,o=0;o<w;++o){n=o<<3>>>0
for(m=0;m<8;++m,p=l){l=p+1
s[p]=new Uint8Array(v)}for(k=0;k<a0;++k){j=r[q]
j.toString
i=a2.r
i===$&&C.b()
A.bgr(j,i[o][k],t,u)
h=k<<3>>>0
for(g=0,f=0;f<8;++f){e=s[n+f]
for(m=0;m<8;++m,g=d){d=g+1
e[h+m]=t[g]}}}}return s}}
A.AG.prototype={}
A.UZ.prototype={
aIY(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=f.y,v=C.n(w).c,u=C.ev(w,w.r,v);u.q();){t=w.h(0,u.d)
f.f=Math.max(f.f,t.a)
f.r=Math.max(f.r,t.b)}u=f.e
u.toString
f.w=D.f.ds(u/8/f.f)
u=f.d
u.toString
f.x=D.f.ds(u/8/f.r)
for(v=C.ev(w,w.r,v),u=x.an,s=x.f0;v.q();){r=w.h(0,v.d)
r.toString
q=f.e
q.toString
p=r.a
o=D.f.ds(D.f.ds(q/8)*p/f.f)
q=f.d
q.toString
n=r.b
m=D.f.ds(D.f.ds(q/8)*n/f.r)
l=f.w*p
k=f.x*n
j=J.i5(k,s)
for(i=0;i<k;++i){h=J.i5(l,u)
for(g=0;g<l;++g)h[g]=new Int32Array(64)
j[i]=h}r.e=o
r.f=m
r.r=j}}}
A.ao5.prototype={}
A.V_.prototype={
ow(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.y,e=f.length,d=g.r
d.toString
if(d)if(g.Q===0)w=g.at===0?g.ganw():g.gany()
else w=g.at===0?g.gann():g.ganp()
else w=g.gant()
d=e===1
if(d){v=f[0]
u=v.e
u===$&&C.b()
v=v.f
v===$&&C.b()
t=u*v}else{v=g.f
v===$&&C.b()
u=g.b.x
u===$&&C.b()
t=v*u}v=g.z
if(v==null||v===0)g.z=t
for(v=g.a,s=0;s<t;){for(r=0;r<e;++r)f[r].y=0
g.CW=0
if(d){q=f[0]
p=0
while(!0){u=g.z
u.toString
if(!(p<u))break
u=q.e
u===$&&C.b()
o=D.b.f_(s,u)
n=D.b.cq(s,u)
u=q.r
u===$&&C.b()
w.$2(q,u[o][n]);++s;++p}}else{p=0
while(!0){u=g.z
u.toString
if(!(p<u))break
for(r=0;r<e;++r){q=f[r]
m=q.a
l=q.b
for(k=0;k<l;++k)for(j=0;j<m;++j)g.anB(q,w,s,k,j)}++s;++p}}g.ch=0
u=v.a
i=v.d
h=u[i]
u=u[i+1]
if(h===255)if(u>=208&&u<=215)v.d=i+2
else break}},
r0(){var w,v,u=this,t=u.ch
if(t>0){--t
u.ch=t
return D.b.kT(u.ay,t)&1}t=u.a
if(t.d>=t.c)return null
w=t.b1()
u.ay=w
if(w===255){v=t.b1()
if(v!==0)throw C.c(A.aG("unexpected marker: "+D.b.hD((u.ay<<8|v)>>>0,16)))}u.ch=7
return D.b.G(u.ay,7)&1},
xL(d){var w,v=new A.tv(d)
for(;w=this.r0(),w!=null;){if(v instanceof A.tv)v=v.a[w]
if(v instanceof A.Eo)return v.a}return null},
OP(d){var w,v
for(w=0;d>0;){v=this.r0()
if(v==null)return null
w=(w<<1|v)>>>0;--d}return w},
xV(d){var w
if(d===1)return this.r0()===1?1:-1
d.toString
w=this.OP(d)
w.toString
if(w>=D.b.cW(1,d-1))return w
return w+D.b.cj(-1,d)+1},
anu(d,e){var w,v,u,t,s,r=this,q=d.w
q===$&&C.b()
w=r.xL(q)
v=w===0?0:r.xV(w)
q=d.y
q===$&&C.b()
q+=v
d.y=q
e[0]=q
for(u=1;u<64;){q=d.x
q===$&&C.b()
q=r.xL(q)
q.toString
t=q&15
s=q>>>4
if(t===0){if(s<15)break
u+=16
continue}u+=s
t=r.xV(t)
e[B.jB[u]]=t;++u}},
anx(d,e){var w,v,u=d.w
u===$&&C.b()
w=this.xL(u)
v=w===0?0:D.b.cj(this.xV(w),this.ax)
u=d.y
u===$&&C.b()
u+=v
d.y=u
e[0]=u},
anz(d,e){var w=e[0],v=this.r0()
v.toString
e[0]=(w|D.b.cj(v,this.ax))>>>0},
ano(d,e){var w,v,u,t,s,r=this,q=r.CW
if(q>0){r.CW=q-1
return}w=r.Q
v=r.as
for(q=r.ax;w<=v;){u=d.x
u===$&&C.b()
u=r.xL(u)
u.toString
t=u&15
s=u>>>4
if(t===0){if(s<15){q=r.OP(s)
q.toString
r.CW=q+D.b.cj(1,s)-1
break}w+=16
continue}w+=s
e[B.jB[w]]=r.xV(t)*D.b.cj(1,q);++w}},
anq(d,e){var w,v,u,t,s,r,q,p=this,o=p.Q,n=p.as
$label0$1:for(w=p.ax,v=0;o<=n;){u=B.jB[o]
t=p.cx
switch(t){case 0:t=d.x
t===$&&C.b()
s=p.xL(t)
if(s==null)throw C.c(A.aG("Invalid progressive encoding"))
r=s&15
v=s>>>4
if(r===0)if(v<15){t=p.OP(v)
t.toString
p.CW=t+D.b.cj(1,v)
p.cx=4}else{p.cx=1
v=16}else{if(r!==1)throw C.c(A.aG("invalid ACn encoding"))
p.cy=p.xV(r)
p.cx=v!==0?2:3}continue $label0$1
case 1:case 2:q=e[u]
if(q!==0){t=p.r0()
t.toString
e[u]=q+D.b.cj(t,w)}else{--v
if(v===0)p.cx=t===2?3:0}break
case 3:t=e[u]
if(t!==0){q=p.r0()
q.toString
e[u]=t+D.b.cj(q,w)}else{t=p.cy
t===$&&C.b()
e[u]=D.b.cj(t,w)
p.cx=0}break
case 4:t=e[u]
if(t!==0){q=p.r0()
q.toString
e[u]=t+D.b.cj(q,w)}break}++o}if(p.cx===4)if(--p.CW===0)p.cx=0},
anB(d,e,f,g,h){var w,v,u=this.f
u===$&&C.b()
w=D.b.f_(f,u)*d.b+g
v=D.b.cq(f,u)*d.a+h
u=d.r
u===$&&C.b()
if(w>=u.length)return
u=u[w]
if(v>=u.length)return
e.$2(d,u[v])}}
A.UY.prototype={
kh(d,e,f){var w=A.aT9()
w.w6(0,e)
if(w.x.length!==1)throw C.c(A.aG("only single frame JPEGs supported"))
return A.bfr(w)},
ei(d,e){return this.kh(d,e,null)}}
A.ao4.prototype={
aeP(d){d=D.f.t(D.b.bv(d,1,100))
if(this.ch===d)return
this.at2(d<50?D.f.ek(5000/d):D.b.ek(200-d*2))
this.ch=d},
ni(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=A.G8(!0,8192)
a4.pz(a5,216)
a4.pz(a5,224)
a5.hp(16)
a5.aT(74)
a5.aT(70)
a5.aT(73)
a5.aT(70)
a5.aT(0)
a5.aT(1)
a5.aT(1)
a5.aT(0)
a5.hp(1)
a5.hp(1)
a5.aT(0)
a5.aT(0)
a4.aAn(a5,a6.ga6g())
a4.aAr(a5)
w=a6.gcu(a6)
v=a6.gbL(a6)
a4.pz(a5,192)
a5.hp(17)
a5.aT(8)
a5.hp(v)
a5.hp(w)
a5.aT(3)
a5.aT(1)
a5.aT(17)
a5.aT(0)
a5.aT(2)
a5.aT(17)
a5.aT(1)
a5.aT(3)
a5.aT(17)
a5.aT(1)
a4.aAq(a5)
a4.pz(a5,218)
a5.hp(12)
a5.aT(3)
a5.aT(1)
a5.aT(0)
a5.aT(2)
a5.aT(17)
a5.aT(3)
a5.aT(17)
a5.aT(0)
a5.aT(63)
a5.aT(0)
a4.CW=0
a4.cx=7
u=a6.gcu(a6)
t=a6.gbL(a6)
for(w=a4.as,v=a4.c,s=a4.at,r=a4.d,q=a4.ax,p=a4.ay,o=0,n=0,m=0,l=0;l<t;){for(k=l+1,j=0;j<u;){for(i=0;i<64;++i){h=i>>>3
g=l+h
f=j+(i&7)
if(g>=t)g-=k+h-t
if(f>=u)f-=f-u+1
e=a6.a
d=e==null?null:e.ee(f,g,null)
if(d==null)d=new A.eN()
if(d.gbw()!==B.H)d=d.j1(B.H)
a0=D.f.t(d.gae(d))
a1=D.f.t(d.gap())
a2=D.f.t(d.gaq(d))
w[i]=D.b.G(p[a0]+p[a1+256]+p[a2+512],16)-128
s[i]=D.b.G(p[a0+768]+p[a1+1024]+p[a2+1280],16)-128
q[i]=D.b.G(p[a0+1280]+p[a1+1536]+p[a2+1792],16)-128}e=a4.e
a3=a4.r
a3===$&&C.b()
o=a4.OK(a5,w,v,o,e,a3)
a3=a4.f
e=a4.w
e===$&&C.b()
n=a4.OK(a5,s,r,n,a3,e)
m=a4.OK(a5,q,r,m,a4.f,a4.w)
j+=8}l+=8}w=a4.cx
if(w>=0){++w
a4.oj(a5,C.a([D.b.cW(1,w)-1,w],x.t))}a4.pz(a5,217)
return C.bE(a5.c.buffer,0,a5.a)},
pz(d,e){d.aT(255)
d.aT(e&255)},
at2(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this
for(w=h.a,v=0;v<64;++v){u=D.f.ek((B.a8y[v]*d+50)/100)
if(u<1)u=1
else if(u>255)u=255
w[B.k3[v]]=u}for(t=h.b,s=0;s<64;++s){r=D.f.ek((B.a8z[s]*d+50)/100)
if(r<1)r=1
else if(r>255)r=255
t[B.k3[s]]=r}for(q=h.c,p=h.d,o=0,n=0;n<8;++n)for(m=0;m<8;++m){l=B.k3[o]
k=w[l]
j=B.xu[n]
i=B.xu[m]
q[o]=1/(k*j*i*8)
p[o]=1/(t[l]*j*i*8);++o}},
CY(d,e){var w,v,u,t,s,r=x.t,q=C.a([C.a([],r)],x.ca)
for(w=0,v=0,u=1;u<=16;++u){for(t=1;t<=d[u];++t){s=e[v]
if(q.length<=s)D.c.sm(q,s+1)
q[s]=C.a([w,u],r);++v;++w}w*=2}return q},
at_(){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.y,v=this.x,u=x.t,t=1,s=2,r=1;r<=15;++r){for(q=t;q<s;++q){p=32767+q
w[p]=r
v[p]=C.a([q,r],u)}for(p=s-1,o=-p,n=-t;o<=n;++o){m=32767+o
w[m]=r
v[m]=C.a([p+o,r],u)}t=t<<1>>>0
s=s<<1>>>0}},
at3(){var w,v
for(w=this.ay,v=0;v<256;++v){w[v]=19595*v
w[v+256]=38470*v
w[v+512]=7471*v+32768
w[v+768]=-11059*v
w[v+1024]=-21709*v
w[v+1280]=32768*v+8421375
w[v+1536]=-27439*v
w[v+1792]=-5329*v}},
aoU(d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3
for(w=0,v=0;v<8;++v){u=d4[w]
t=w+1
s=d4[t]
r=w+2
q=d4[r]
p=w+3
o=d4[p]
n=w+4
m=d4[n]
l=w+5
k=d4[l]
j=w+6
i=d4[j]
h=w+7
g=d4[h]
f=u+g
e=u-g
d=s+i
a0=s-i
a1=q+k
a2=q-k
a3=o+m
a4=f+a3
a5=f-a3
a6=d+a1
d4[w]=a4+a6
d4[n]=a4-a6
a7=(d-a1+a5)*0.707106781
d4[r]=a5+a7
d4[j]=a5-a7
a4=o-m+a2
a8=a0+e
a9=(a4-a8)*0.382683433
b0=0.5411961*a4+a9
b1=1.306562965*a8+a9
b2=(a2+a0)*0.707106781
b3=e+b2
b4=e-b2
d4[l]=b4+b0
d4[p]=b4-b0
d4[t]=b3+b1
d4[h]=b3-b1
w+=8}for(w=0,v=0;v<8;++v){u=d4[w]
t=w+8
s=d4[t]
r=w+16
q=d4[r]
p=w+24
o=d4[p]
n=w+32
m=d4[n]
l=w+40
k=d4[l]
j=w+48
i=d4[j]
h=w+56
g=d4[h]
b5=u+g
b6=u-g
b7=s+i
b8=s-i
b9=q+k
c0=q-k
c1=o+m
c2=b5+c1
c3=b5-c1
c4=b7+b9
d4[w]=c2+c4
d4[n]=c2-c4
c5=(b7-b9+c3)*0.707106781
d4[r]=c3+c5
d4[j]=c3-c5
c2=o-m+c0
c6=b8+b6
c7=(c2-c6)*0.382683433
c8=0.5411961*c2+c7
c9=1.306562965*c6+c7
d0=(c0+b8)*0.707106781
d1=b6+d0
d2=b6-d0
d4[l]=d2+c8
d4[p]=d2-c8
d4[t]=d1+c9
d4[h]=d1-c9;++w}for(t=this.z,v=0;v<64;++v){d3=d4[v]*d5[v]
t[v]=d3>0?D.f.t(d3+0.5):D.f.t(d3-0.5)}return t},
aAn(d,e){var w,v
if(e.gW(e))return
w=A.G8(!1,8192)
e.hd(0,w)
v=C.bE(w.c.buffer,0,w.a)
this.pz(d,225)
d.hp(v.length+8)
d.iS(1165519206)
d.hp(0)
d.p6(v)},
aAr(d){var w,v,u
this.pz(d,219)
d.hp(132)
d.aT(0)
for(w=this.a,v=0;v<64;++v)d.aT(w[v])
d.aT(1)
for(w=this.b,u=0;u<64;++u)d.aT(w[u])},
aAq(d){var w,v,u,t,s,r,q,p
this.pz(d,196)
d.hp(418)
d.aT(0)
for(w=0;w<16;){++w
d.aT(B.x_[w])}for(v=0;v<=11;++v)d.aT(B.jA[v])
d.aT(16)
for(u=0;u<16;){++u
d.aT(B.x0[u])}for(t=0;t<=161;++t)d.aT(B.xt[t])
d.aT(1)
for(s=0;s<16;){++s
d.aT(B.x1[s])}for(r=0;r<=11;++r)d.aT(B.jA[r])
d.aT(17)
for(q=0;q<16;){++q
d.aT(B.x2[q])}for(p=0;p<=161;++p)d.aT(B.xB[p])},
OK(d,e,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a3[0],g=a3[240],f=i.aoU(e,a0)
for(w=i.Q,v=0;v<64;++v)w[B.k3[v]]=f[v]
u=w[0]
u.toString
t=u-a1
if(t===0){s=a2[0]
s.toString
i.oj(d,s)}else{r=32767+t
a2.toString
s=i.y[r]
s.toString
s=a2[s]
s.toString
i.oj(d,s)
s=i.x[r]
s.toString
i.oj(d,s)}q=63
while(!0){if(!(q>0&&w[q]===0))break;--q}if(q===0){h.toString
i.oj(d,h)
return u}for(s=i.y,p=i.x,o=1;o<=q;){n=o
while(!0){if(!(w[n]===0&&n<=q))break;++n}m=n-o
if(m>=16){l=D.b.G(m,4)
for(k=1;k<=l;++k){g.toString
i.oj(d,g)}m&=15}j=w[n]
j.toString
r=32767+j
j=s[r]
j.toString
j=a3[(m<<4>>>0)+j]
j.toString
i.oj(d,j)
j=p[r]
j.toString
i.oj(d,j)
o=n+1}if(q!==63){h.toString
i.oj(d,h)}return u},
oj(d,e){var w,v=this,u=e[0],t=e[1]-1
for(;t>=0;){if((u&D.b.cW(1,t))>>>0!==0)v.CW=(v.CW|D.b.cW(1,v.cx))>>>0;--t
if(--v.cx<0){w=v.CW
if(w===255){d.aT(255)
d.aT(0)}else d.aT(w)
v.cx=7
v.CW=0}}}}
A.yA.prototype={
P(){return"PngDisposeMode."+this.b}}
A.Gn.prototype={
P(){return"PngBlendMode."+this.b}}
A.Go.prototype={}
A.UN.prototype={}
A.qd.prototype={
P(){return"PngFilterType."+this.b}}
A.arr.prototype={}
A.anQ.prototype={}
A.Zi.prototype={
Jy(d){var w,v,u,t=A.br(d,!0,null,0).fs(8)
for(w=t.a,v=t.d,u=0;u<8;++u)if(w[v+u]!==B.yr[u])return!1
return!0},
kW(b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null,b2=A.br(b3,!0,b1,0)
b0.d=b2
w=b2.fs(8)
for(b2=w.a,v=w.d,u=0;u<8;++u)if(b2[v+u]!==B.yr[u])return b1
for(b2=b0.a,v=b2.CW,t=x.t,s=b2.cx,r=x.L,q=b2.ax;!0;){p=b0.d
o=p.d-p.b
n=p.N()
m=b0.d.eI(4)
switch(m){case"tEXt":p=b0.d
l=p.eZ(n)
p.d=p.d+(l.c-l.d)
k=l.e4()
j=k.length
for(u=0;u<j;++u)if(k[u]===0){p=u+1
q.l(0,D.qO.ei(0,new Uint8Array(k.subarray(0,C.lq(0,u,j)))),D.qO.ei(0,new Uint8Array(k.subarray(p,C.lq(p,b1,j)))))
break}b0.d.d+=4
break
case"IHDR":p=b0.d
l=p.eZ(n)
p.d=p.d+(l.c-l.d)
i=A.aS(l,b1,0)
h=i.e4()
b2.a=i.N()
b2.b=i.N()
p=i.a
g=i.d
f=i.d=g+1
b2.c=p[g]
g=f+1
i.d=g
f=b2.d=p[f]
g=i.d=g+1
e=i.d=g+1
g=p[g]
b2.f=g
i.d=e+1
b2.r=p[e]
if(!(f===0||f===2||f===3||f===4||f===6))return b1
if(g!==0)return b1
switch(f){case 0:if(!D.c.D(C.a([1,2,4,8,16],t),b2.c))return b1
break
case 2:if(!D.c.D(C.a([8,16],t),b2.c))return b1
break
case 3:if(!D.c.D(C.a([1,2,4,8],t),b2.c))return b1
break
case 4:if(!D.c.D(C.a([8,16],t),b2.c))return b1
break
case 6:if(!D.c.D(C.a([8,16],t),b2.c))return b1
break}if(b0.d.N()!==A.vS(h,A.vS(new C.dL(m),0)))throw C.c(A.aG("Invalid "+m+" checksum"))
break
case"PLTE":p=b0.d
l=p.eZ(n)
p.d=p.d+(l.c-l.d)
b2.w=l.e4()
if(b0.d.N()!==A.vS(r.a(b2.w),A.vS(new C.dL(m),0)))throw C.c(A.aG("Invalid "+m+" checksum"))
break
case"tRNS":p=b0.d
l=p.eZ(n)
p.d=p.d+(l.c-l.d)
b2.x=l.e4()
d=b0.d.N()
p=b2.x
p.toString
if(d!==A.vS(p,A.vS(new C.dL(m),0)))throw C.c(A.aG("Invalid "+m+" checksum"))
break
case"IEND":b0.d.d+=4
break
case"gAMA":if(n!==4)throw C.c(A.aG("Invalid gAMA chunk"))
b0.d.N()
b0.d.d+=4
break
case"IDAT":s.push(o)
p=b0.d
g=p.d+=n
p.d=g+4
break
case"acTL":b2.ay=b0.d.N()
b0.d.N()
b0.d.d+=4
break
case"fcTL":b0.d.N()
p=b0.d.N()
g=b0.d.N()
f=b0.d.N()
e=b0.d.N()
a0=b0.d.V()
a1=b0.d.V()
a2=b0.d
a3=a2.a
a4=a2.d
a5=a2.d=a4+1
a4=B.aay[a3[a4]]
a2.d=a5+1
a5=B.a3W[a3[a5]]
v.push(new A.UN(C.a([],t),p,g,f,e,a0,a1,a4,a5))
b0.d.d+=4
break
case"fdAT":b0.d.N()
D.c.gU(v).y.push(o)
p=b0.d
g=p.d+=n-4
p.d=g+4
break
case"bKGD":p=b2.d
if(p===3){p=b0.d
p=p.a[p.d++];--n
a6=p*3
g=b2.w
a7=g[a6]
a8=g[a6+1]
a9=g[a6+2]
g=b2.x
if(g!=null){p=D.x.D(g,p)?0:255
g=new Uint8Array(4)
g[0]=a7
g[1]=a8
g[2]=a9
g[3]=p
b2.z=new A.PR(g)}else{p=new Uint8Array(3)
p[0]=a7
p[1]=a8
p[2]=a9
b2.z=new A.PQ(p)}}else if(p===0||p===4){b0.d.V()
n-=2}else if(p===2||p===6){p=b0.d
p.V()
p.V()
p.V()
n-=24}if(n>0)b0.d.d+=n
b0.d.d+=4
break
case"iCCP":p=b0.d.Bs()
b2.Q=p
g=b0.d;++g.d
l=g.eZ(n-(p.length+2))
g.d=g.d+(l.c-l.d)
b2.at=l.e4()
b0.d.d+=4
break
default:p=b0.d
g=p.d+=n
p.d=g+4
break}if(m==="IEND")break
p=b0.d
if(p.d>=p.c)return b1}return b2},
fW(b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=null,b4=b1.a,b5=b4.a,b6=b4.b,b7=b4.CW,b8=b7.length
if(b8===0||b9===0){v=C.a([],x.a)
b7=b4.cx
u=b7.length
for(t=0,s=0;s<u;++s){b8=b1.d
b8===$&&C.b()
b8.d=b7[s]
r=b8.N()
q=b1.d.eI(4)
b8=b1.d
p=b8.eZ(r)
b8.d=b8.d+(p.c-p.d)
o=p.e4()
t+=o.length
v.push(o)
if(b1.d.N()!==A.vS(o,A.vS(new C.dL(q),0)))throw C.c(A.aG("Invalid "+q+" checksum"))}b3=new Uint8Array(t)
for(b7=v.length,n=0,m=0;m<v.length;v.length===b7||(0,C.G)(v),++m){o=v[m]
J.aKx(b3,n,o)
n+=o.length}}else{if(b9>=b8)throw C.c(A.aG("Invalid Frame Number: "+b9))
l=b7[b9]
b5=l.b
b6=l.c
v=C.a([],x.a)
for(b7=l.y,t=0,s=0;s<b7.length;++s){b8=b1.d
b8===$&&C.b()
b8.d=b7[s]
r=b8.N()
b8=b1.d
b8.eI(4)
b8.d+=4
b8=b1.d
p=b8.eZ(r-4)
b8.d=b8.d+(p.c-p.d)
o=p.e4()
t+=o.length
v.push(o)}b3=new Uint8Array(t)
for(b7=v.length,n=0,m=0;m<v.length;v.length===b7||(0,C.G)(v),++m){o=v[m]
J.aKx(b3,n,o)
n+=o.length}}b7=b4.d
if(b7===3)k=1
else if(b7===0)k=1
else{if(b7===4)b7=2
else b7=b7===6?4:3
k=b7}w=null
try{w=B.fw.z5(A.xO(b3,1,b2,0),!1)}catch(j){return b2}i=A.br(w,!0,b2,0)
b1.c=b1.b=0
if(b4.d===3){b7=b4.w
if(b7!=null){h=b7.length/3|0
g=b4.x
b8=g!=null
f=b8?g.length:0
e=b8?4:3
d=new A.m7(new Uint8Array(h*e),h,e)
for(b8=e===4,s=0,a0=0;s<h;++s,a0+=3){a1=b8&&s<f?g[s]:255
d.Cf(s,b7[a0],b7[a0+1],b7[a0+2],a1)}}else d=b2}else d=b2
if(b4.d===0&&b4.x!=null&&d==null&&b4.c<=8){g=b4.x
a2=g.length
b7=b4.c
h=D.b.cW(1,b7)
d=new A.m7(new Uint8Array(h*4),h,4)
if(b7===1)a3=255
else if(b7===2)a3=85
else{b7=b7===4?17:1
a3=b7}for(s=0;s<h;++s){a4=s*a3
d.Cf(s,a4,a4,a4,255)}for(b7=d.b,b8=3<b7,a5=d.c,s=0;s<a2;s+=2){a6=(g[s]&255)<<8|g[s+1]&255
if(a6<h)if(b8)a5[a6*b7+3]=0}}b7=b4.c
if(b7===1)a7=B.c5
else if(b7===2)a7=B.c6
else{if(b7===4)b8=B.c7
else b8=b7===16?B.dq:B.H
a7=b8}b8=b4.d
if(b8===0&&b4.x!=null&&b7>8)k=4
a8=A.dY(b2,b2,a7,0,B.ae,b6,b2,0,b8===2&&b4.x!=null?4:k,d,b5,!1)
a9=b4.a
b0=b4.b
b4.a=b5
b4.b=b6
b1.e=0
if(b4.r!==0){b7=b6+7>>>3
b1.qY(i,a8,0,0,8,8,b5+7>>>3,b7)
b8=b5+3
b1.qY(i,a8,4,0,8,8,b8>>>3,b7)
b7=b6+3
b1.qY(i,a8,0,4,4,8,b8>>>2,b7>>>3)
b8=b5+1
b1.qY(i,a8,2,0,4,4,b8>>>2,b7>>>2)
b7=b6+1
b1.qY(i,a8,0,2,2,4,b8>>>1,b7>>>2)
b1.qY(i,a8,1,0,2,2,b5>>>1,b7>>>1)
b1.qY(i,a8,0,1,1,2,b5,b6>>>1)}else b1.awa(i,a8)
b4.a=a9
b4.b=b0
b7=b4.at
if(b7!=null)a8.c=new A.Ep(b4.Q,B.UP,b7)
b4=b4.ax
if(b4.a!==0)a8.aAT(b4)
return a8},
kh(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
if(j.kW(e)==null)return i
w=j.a
v=w.CW
if(v.length===0||!1){w=j.fW(0)
w.toString
return w}for(u=i,t=u,s=0;s<w.ay;++s){f=v[s]
r=j.fW(s)
if(r==null)continue
if(t==null||u==null){q=f.f
r.y=D.f.t((q===0||f.r===0?0:q/f.r)*1000)
u=r
t=u
continue}q=r.a
p=q==null
o=p?i:q.a
if(o==null)o=0
n=u.a
m=n==null
l=m?i:n.a
if(o===(l==null?0:l)){q=p?i:q.b
if(q==null)q=0
p=m?i:n.b
q=q===(p==null?0:p)&&f.d===0&&f.e===0&&f.x===B.KN}else q=!1
if(q){q=f.f
r.y=D.f.t((q===0||f.r===0?0:q/f.r)*1000)
t.ol(r)
u=r
continue}k=f.w
if(k===B.KP){u=A.tD(u,!1,!1)
q=w.z
p=u.a
if(p!=null)p.fC(0,q)}else u=k===B.KQ?A.tD(u,!1,!1):A.tD(u,!1,!1)
q=f.f
u.y=D.f.t((q===0||f.r===0?0:q/f.r)*1000)
q=f.x===B.KO?B.qx:B.lR
A.aYK(u,r,q,f.d,f.e)
t.ol(u)}return t},
ei(d,e){return this.kh(d,e,null)},
qY(a1,a2,a3,a4,a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a,a0=d.d
if(a0===4)w=2
else if(a0===2)w=3
else{a0=a0===6?4:1
w=a0}v=w*d.c
u=D.b.G(v+7,3)
t=D.b.G(v*a7+7,3)
s=C.a([null,null],x.ff)
r=C.a([0,0,0,0],x.t)
for(d=a5>1,q=a5-a3,p=a4,o=0,n=0;o<a8;++o,p+=a6,++e.e){m=B.Ai[a1.a[a1.d++]]
l=a1.eZ(t)
a1.d=a1.d+(l.c-l.d)
a0=l.e4()
s[n]=a0
n=1-n
e.a2I(m,u,a0,s[n])
e.c=e.b=0
k=new A.h3(a0,0,a0.length,0,!0)
for(a0=q<=1,j=a3,i=0;i<a7;++i,j+=a5){e.a0V(k,r)
h=a2.a
h=h==null?null:h.ee(j,p,null)
e.Pc(h==null?new A.eN():h,r)
if(!a0||d)for(g=0;g<a5;++g)for(h=p+g,f=0;f<q;++f)e.Pc(a2.aea(j+f,h),r)}}},
awa(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a,d=e.d
if(d===4)w=2
else if(d===2)w=3
else{d=d===6?4:1
w=d}v=w*e.c
u=e.a
t=e.b
s=D.b.G(u*v+7,3)
r=D.b.G(v+7,3)
q=C.ar(s,0,!1,x.p)
p=C.a([q,q],x.S)
o=C.a([0,0,0,0],x.t)
e=a1.a
n=e.ga1(e)
n.q()
for(m=0,l=0;m<t;++m,l=i){k=B.Ai[a0.a[a0.d++]]
j=a0.eZ(s)
a0.d=a0.d+(j.c-j.d)
e=j.e4()
p[l]=e
i=1-l
f.a2I(k,r,e,p[i])
f.c=f.b=0
e=p[l]
d=e.length
h=new A.h3(e,0,d,0,!0)
for(g=0;g<u;++g){f.a0V(h,o)
f.Pc(n.gM(n),o)
n.q()}}},
a2I(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=f.length
switch(d.a){case 0:break
case 1:for(w=e;w<k;++w)f[w]=f[w]+f[w-e]&255
break
case 2:for(v=g!=null,w=0;w<k;++w){u=v?g[w]:0
f[w]=f[w]+u&255}break
case 3:for(v=g!=null,w=0;w<k;++w){t=w<e?0:f[w-e]
u=v?g[w]:0
f[w]=f[w]+D.b.G(t+u,1)&255}break
case 4:for(v=g==null,s=!v,w=0;w<k;++w){r=w<e
t=r?0:f[w-e]
u=s?g[w]:0
q=r||v?0:g[w-e]
p=t+u-q
o=Math.abs(p-t)
n=Math.abs(p-u)
m=Math.abs(p-q)
if(o<=n&&o<=m)l=t
else l=n<=m?u:q
f[w]=f[w]+l&255}break
default:throw C.c(A.aG("Invalid filter value: "+d.j(0)))}},
lV(d,e){var w,v,u,t,s,r=this
if(e===0)return 0
if(e===8)return d.b1()
if(e===16)return d.V()
for(w=d.c;v=r.c,v<e;){u=d.d
if(u>=w)throw C.c(A.aG("Invalid PNG data."))
t=d.a
d.d=u+1
r.b=D.b.cW(t[u],v)
r.c=v+8}if(e===1)s=1
else if(e===2)s=3
else{if(e===4)w=15
else w=0
s=w}w=v-e
v=D.b.de(r.b,w)
r.c=w
return v&s},
a0V(d,e){var w=this,v=w.a,u=v.d
switch(u){case 0:e[0]=w.lV(d,v.c)
return
case 2:e[0]=w.lV(d,v.c)
e[1]=w.lV(d,v.c)
e[2]=w.lV(d,v.c)
return
case 3:e[0]=w.lV(d,v.c)
return
case 4:e[0]=w.lV(d,v.c)
e[1]=w.lV(d,v.c)
return
case 6:e[0]=w.lV(d,v.c)
e[1]=w.lV(d,v.c)
e[2]=w.lV(d,v.c)
e[3]=w.lV(d,v.c)
return}throw C.c(A.aG("Invalid color type: "+u+"."))},
Pc(d,e){var w,v,u,t,s,r,q,p,o=this.a,n=o.d
switch(n){case 0:w=o.x
if(w!=null&&o.c>8){o=w[0]
n=w[1]
v=e[0]
d.he(v,v,v,v!==((o&255)<<24|n&255)>>>0?d.gbd():0)
return}d.hI(e[0],0,0)
return
case 2:u=e[0]
v=e[1]
t=e[2]
o=o.x
if(o!=null){n=o[0]
s=o[1]
r=o[2]
q=o[3]
p=o[4]
o=o[5]
if(u!==((n&255)<<8|s&255)||v!==((r&255)<<8|q&255)||t!==((p&255)<<8|o&255)){d.he(u,v,t,d.gbd())
return}}d.hI(u,v,t)
return
case 3:d.scH(0,e[0])
return
case 4:d.hI(e[0],e[1],0)
return
case 6:d.he(e[0],e[1],e[2],e[3])
return}throw C.c(A.aG("Invalid color type: "+n+"."))}}
A.Zz.prototype={}
A.ZA.prototype={}
A.mc.prototype={}
A.ZC.prototype={}
A.ZD.prototype={}
A.ZG.prototype={}
A.ZH.prototype={}
A.Gv.prototype={}
A.ZF.prototype={}
A.arX.prototype={
akv(d){var w,v,u=this
d.V()
d.V()
d.V()
d.V()
w=D.b.bR(d.c-d.d,8)
if(w>0){u.e=new Uint16Array(w)
u.f=new Uint16Array(w)
u.r=new Uint16Array(w)
u.w=new Uint16Array(w)
for(v=0;v<w;++v){u.e[v]=d.V()
u.f[v]=d.V()
u.r[v]=d.V()
u.w[v]=d.V()}}}}
A.yK.prototype={
a9W(d,e,f,g,h,i,j){if(h==null)h=d.V()
switch(h){case 0:g.toString
this.awN(d,e,f,g)
break
case 1:if(i==null)i=this.awK(d,f)
g.toString
this.awM(d,e,f,g,i,j)
break
default:throw C.c(A.aG("Unsupported compression: "+h))}},
aJl(d,e,f,g){return this.a9W(d,e,f,g,null,null,0)},
awK(d,e){var w,v=new Uint16Array(e)
for(w=0;w<e;++w)v[w]=d.V()
return v},
awN(d,e,f,g){var w,v=e*f
if(g===16)v*=2
if(v>d.c-d.d){w=new Uint8Array(v)
this.c=w
D.x.hT(w,0,v,255)
return}this.c=d.fs(v).e4()},
awM(d,e,f,g,h,i){var w,v,u,t,s,r,q=e*f
if(g===16)q*=2
w=new Uint8Array(q)
this.c=w
v=i*f
if(v>=h.length){D.x.hT(w,0,q,255)
return}for(u=0,t=0;t<f;++t,v=s){s=v+1
r=d.eZ(h[v])
d.d=d.d+(r.c-r.d)
this.anG(r,this.c,u)
u+=e}},
anG(d,e,f){var w,v,u,t,s,r,q
for(w=d.c;v=d.d,v<w;){u=d.a
t=d.d=v+1
v=u[v]
$.iA()[0]=v
s=$.j2()[0]
if(s<0){s=1-s
d.d=t+1
v=u[t]
for(r=0;r<s;++r,f=q){q=f+1
e[f]=v}}else{++s
for(v=t,r=0;r<s;++r,v=t,f=q){q=f+1
t=v+1
d.d=t
e[f]=u[v]}}}}}
A.kW.prototype={
P(){return"PsdColorMode."+this.b}}
A.arZ.prototype={
akw(d){var w,v,u=this
u.as=A.br(d,!0,null,0)
u.awr()
if(u.c!==943870035)return
w=u.as.N()
u.as.fs(w)
w=u.as.N()
u.at=u.as.fs(w)
w=u.as.N()
u.ax=u.as.fs(w)
v=u.as
u.ay=v.fs(v.c-v.d)},
ow(d){var w,v=this
if(v.c===943870035){w=v.as
w===$&&C.b()
w=w==null}else w=!0
if(w)return!1
v.awI()
v.awJ()
v.awL()
v.ay=v.ax=v.at=v.as=null
return!0},
a5z(){if(!this.ow(0))return null
return this.aJI()},
aJI(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.y
if(a0!=null)return a0
a0=e.a
a0=A.dY(d,d,B.H,0,B.ae,e.b,d,0,4,d,a0,!1)
e.y=a0
a0.ah(0)
w=0
while(!0){a0=e.w
a0===$&&C.b()
if(!(w<a0.length))break
c$0:{v=a0[w]
a0=v.y
a0===$&&C.b()
if((a0&2)!==0)break c$0
a0=v.w
a0===$&&C.b()
u=a0/255
t=v.r
a0=v.cx
a0===$&&C.b()
s=v.a
s.toString
r=s
q=0
while(!0){s=v.f
s===$&&C.b()
if(!(q<s))break
s=v.a
s.toString
p=s+q
o=v.b
s=r>=0
n=0
while(!0){m=v.e
m===$&&C.b()
if(!(n<m))break
m=a0.a
l=m==null?d:m.ee(n,q,d)
if(l==null)l=new A.eN()
k=D.f.t(l.gae(l))
j=D.f.t(l.gap())
i=D.f.t(l.gaq(l))
h=D.f.t(l.gav(l))
o.toString
if(o>=0&&o<e.a&&s&&r<e.b){m=v.b
m.toString
g=e.y.a
f=g==null?d:g.ee(m+n,p,d)
if(f==null)f=new A.eN()
e.alu(D.f.t(f.gae(f)),D.f.t(f.gap()),D.f.t(f.gaq(f)),D.f.t(f.gav(f)),k,j,i,h,t,u,f)}++n;++o}++q;++r}}++w}a0=e.y
a0.toString
return a0},
alu(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t,s,r=k/255*m
switch(l){case 1885434739:w=g
v=f
u=e
t=d
break
case 1852797549:w=k
v=j
u=i
t=h
break
case 1684632435:w=k
v=j
u=i
t=h
break
case 1684107883:t=Math.min(d,h)
u=Math.min(e,i)
v=Math.min(f,j)
w=k
break
case 1836411936:t=D.b.G(d*h,8)
u=D.b.G(e*i,8)
v=D.b.G(f*j,8)
w=k
break
case 1768188278:t=A.as_(d,h)
u=A.as_(e,i)
v=A.as_(f,j)
w=k
break
case 1818391150:t=A.as1(d,h)
u=A.as1(e,i)
v=A.as1(f,j)
w=k
break
case 1684751212:w=k
v=j
u=i
t=h
break
case 1818850405:t=Math.max(d,h)
u=Math.max(e,i)
v=Math.max(f,j)
w=k
break
case 1935897198:t=A.aMs(d,h)
u=A.aMs(e,i)
v=A.aMs(f,j)
w=k
break
case 1684633120:t=A.as0(d,h)
u=A.as0(e,i)
v=A.as0(f,j)
w=k
break
case 1818518631:t=h+d>255?255:d+h
u=i+e>255?255:e+i
v=j+f>255?255:f+j
w=k
break
case 1818706796:w=k
v=j
u=i
t=h
break
case 1870030194:t=A.aMq(d,h,g,k)
u=A.aMq(e,i,g,k)
v=A.aMq(f,j,g,k)
w=k
break
case 1934387572:t=A.aMt(d,h)
u=A.aMt(e,i)
v=A.aMt(f,j)
w=k
break
case 1749838196:t=A.aMo(d,h)
u=A.aMo(e,i)
v=A.aMo(f,j)
w=k
break
case 1984719220:t=A.aMu(d,h)
u=A.aMu(e,i)
v=A.aMu(f,j)
w=k
break
case 1816947060:t=A.aMp(d,h)
u=A.aMp(e,i)
v=A.aMp(f,j)
w=k
break
case 1884055924:t=A.aMr(d,h)
u=A.aMr(e,i)
v=A.aMr(f,j)
w=k
break
case 1749903736:t=h<255-d?0:255
u=i<255-e?0:255
v=j<255-f?0:255
w=k
break
case 1684629094:t=Math.abs(h-d)
u=Math.abs(i-e)
v=Math.abs(j-f)
w=k
break
case 1936553316:t=A.aMn(d,h)
u=A.aMn(e,i)
v=A.aMn(f,j)
w=k
break
case 1718842722:w=k
v=j
u=i
t=h
break
case 1717856630:w=k
v=j
u=i
t=h
break
case 1752524064:w=k
v=j
u=i
t=h
break
case 1935766560:w=k
v=j
u=i
t=h
break
case 1668246642:w=k
v=j
u=i
t=h
break
case 1819634976:w=k
v=j
u=i
t=h
break
default:w=k
v=j
u=i
t=h}s=1-r
n.sae(0,D.f.t(d*s+t*r))
n.sap(D.f.t(e*s+u*r))
n.saq(0,D.f.t(f*s+v*r))
n.sav(0,D.f.t(g*s+w*r))},
awr(){var w,v,u,t=this,s=t.as
s===$&&C.b()
t.c=s.N()
s=t.as.V()
t.d=s
if(s!==1){t.c=0
return}w=t.as.fs(6)
for(s=w.a,v=w.d,u=0;u<6;++u)if(s[v+u]!==0){t.c=0
return}t.e=t.as.V()
t.b=t.as.N()
t.a=t.as.N()
t.f=t.as.V()
t.r=B.a9L[t.as.V()]},
awI(){var w,v,u,t,s,r,q=this,p=q.at
p===$&&C.b()
p.d=p.b
for(p=q.z;w=q.at,w.d<w.c;){v=w.N()
u=q.at.V()
w=q.at
t=w.a[w.d++]
w.eI(t)
if((t&1)===0)++q.at.d
s=q.at.N()
w=q.at
r=w.eZ(s)
w.d=w.d+(r.c-r.d)
if((s&1)===1)++q.at.d
if(v===943868237)p.l(0,u,new A.ZB(r))}},
awJ(){var w,v,u,t,s,r,q,p,o,n=this,m=n.ax
m===$&&C.b()
m.d=m.b
w=m.N()
if((w&1)!==0)++w
v=n.ax.fs(w)
m=x.l
n.w=C.a([],m)
if(w>0){u=v.V()
$.iz()[0]=u
t=$.j1()[0]
if(t<0)t=-t
for(u=x.N,s=x.ha,r=x.af,q=0;q<t;++q){p=new A.ZE(C.w(u,s),C.a([],m),C.a([],r))
p.akx(v)
n.w.push(p)}}for(q=0;m=n.w,q<m.length;++q)m[q].aJg(v,n)
w=n.ax.N()
o=n.ax.fs(w)
if(w>0){o.V()
o.V()
o.V()
o.V()
o.V()
o.V()
o.b1()}},
awL(){var w,v,u,t,s,r,q=this,p=q.ay
p===$&&C.b()
p.d=p.b
w=p.V()
if(w===1){p=q.b
v=q.e
v===$&&C.b()
u=p*v
t=new Uint16Array(u)
for(s=0;s<u;++s)t[s]=q.ay.V()}else t=null
q.x=C.a([],x.X)
s=0
while(!0){p=q.e
p===$&&C.b()
if(!(s<p))break
p=q.x
v=q.ay
v.toString
r=s===3?-1:s
r=new A.yK(r)
r.a9W(v,q.a,q.b,q.f,w,t,s)
p.push(r);++s}q.y=A.aUI(q.r,q.f,q.a,q.b,q.x)}}
A.ZB.prototype={}
A.ZE.prototype={
akx(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a4.N(),a3=$.dc()
a3[0]=a2
a2=$.fy()
a1.a=a2[0]
a3[0]=a4.N()
a1.b=a2[0]
a3[0]=a4.N()
a1.c=a2[0]
a3[0]=a4.N()
a2=a2[0]
a1.d=a2
a3=a1.b
a3.toString
a1.e=a2-a3
a3=a1.c
a2=a1.a
a2.toString
a1.f=a3-a2
a1.as=C.a([],x.X)
w=a4.V()
for(v=0;v<w;++v){a2=a4.V()
$.iz()[0]=a2
u=$.j1()[0]
a4.N()
a1.as.push(new A.yK(u))}t=a4.N()
if(t!==943868237)throw C.c(A.aG("Invalid PSD layer signature: "+D.b.hD(t,16)))
a1.r=a4.N()
a1.w=a4.b1()
a4.b1()
a1.y=a4.b1()
if(a4.b1()!==0)throw C.c(A.aG("Invalid PSD layer data"))
s=a4.N()
r=a4.fs(s)
if(s>0){s=r.N()
if(s>0){q=r.fs(s)
a2=q.d
q.N()
q.N()
q.N()
q.N()
q.b1()
q.b1()
if(q.c-a2===20)q.d+=2
else{q.b1()
q.b1()
q.N()
q.N()
q.N()
q.N()}}s=r.N()
if(s>0)new A.arX().akv(r.fs(s))
s=r.b1()
r.eI(s)
p=4-D.b.cq(s,4)-1
if(p>0)r.d+=p
for(a2=r.c,a3=a1.ay,o=a1.cy,n=x.g0;r.d<a2;){t=r.N()
if(t!==943868237)throw C.c(A.aG("PSD invalid signature for layer additional data: "+D.b.hD(t,16)))
m=r.eI(4)
s=r.N()
l=r.eZ(s)
k=r.d+(l.c-l.d)
r.d=k
if((s&1)===1)r.d=k+1
a3.l(0,m,A.b7p(m,l))
if(m==="lrFX"){j=A.aS(n.a(a3.h(0,"lrFX")).b,null,0)
j.V()
i=j.V()
for(h=0;h<i;++h){j.eI(4)
g=j.eI(4)
f=j.N()
if(g==="dsdw"){e=new A.ZA()
o.push(e)
e.a=j.N()
j.N()
j.N()
j.N()
j.N()
j.V()
j.V()
j.V()
j.V()
j.V()
j.eI(8)
k=j.a
d=j.d
a0=d+1
j.d=a0
e.b=k[d]!==0;++a0
j.d=a0
j.d=a0+1
j.V()
j.V()
j.V()
j.V()
j.V()}else if(g==="isdw"){e=new A.ZD()
o.push(e)
e.a=j.N()
j.N()
j.N()
j.N()
j.N()
j.V()
j.V()
j.V()
j.V()
j.V()
j.eI(8)
k=j.a
d=j.d
a0=d+1
j.d=a0
e.b=k[d]!==0;++a0
j.d=a0
j.d=a0+1
j.V()
j.V()
j.V()
j.V()
j.V()}else if(g==="oglw"){e=new A.ZG()
o.push(e)
e.a=j.N()
j.N()
j.N()
j.V()
j.V()
j.V()
j.V()
j.V()
j.eI(8)
k=j.a
d=j.d
a0=d+1
j.d=a0
e.b=k[d]!==0
j.d=a0+1
if(e.a===2){j.V()
j.V()
j.V()
j.V()
j.V()}}else if(g==="iglw"){e=new A.ZC()
o.push(e)
e.a=j.N()
j.N()
j.N()
j.V()
j.V()
j.V()
j.V()
j.V()
j.eI(8)
k=j.a
d=j.d
a0=d+1
j.d=a0
e.b=k[d]!==0;++a0
j.d=a0
if(e.a===2){j.d=a0+1
j.V()
j.V()
j.V()
j.V()
j.V()}}else if(g==="bevl"){e=new A.Zz()
o.push(e)
e.a=j.N()
j.N()
j.N()
j.N()
j.eI(8)
j.eI(8)
j.V()
j.V()
j.V()
j.V()
j.V()
j.V()
j.V()
j.V()
j.V()
j.V()
k=++j.d+1
j.d=k
k=j.d=k+1
d=j.a
a0=k+1
j.d=a0
e.b=d[k]!==0;++a0
j.d=a0
j.d=a0+1
if(e.a===2){j.V()
j.V()
j.V()
j.V()
j.V()
j.V()
j.V()
j.V()
j.V()
j.V()}}else if(g==="sofi"){e=new A.ZH()
o.push(e)
e.a=j.N()
j.eI(4)
j.V()
j.V()
j.V()
j.V()
j.V()
k=++j.d
d=j.a
j.d=k+1
e.b=d[k]!==0
j.V()
j.V()
j.V()
j.V()
j.V()}else j.d+=f}}}}},
aJg(d,e){var w,v,u,t,s,r=this,q=0
while(!0){w=r.as
w===$&&C.b()
if(!(q<w.length))break
w=w[q]
v=r.e
v===$&&C.b()
u=r.f
u===$&&C.b()
w.aJl(d,v,u,e.f);++q}v=e.r
u=e.f
t=r.e
t===$&&C.b()
s=r.f
s===$&&C.b()
r.cx=A.aUI(v,u,t,s,w)}}
A.yL.prototype={}
A.arY.prototype={
kh(d,e,f){var w,v,u,t=null,s=A.aUH(e)
this.a=s
w=1
if(w===1||!1){s=s.a5z()
return s}for(v=t,u=0;u<w;++u){s=this.a
f=s==null?t:s.a5z()
if(f==null)continue
if(v==null){f.w=B.UL
v=f}else v.ol(f)}return v}}
A.ZJ.prototype={}
A.o_.prototype={
ar(d,e){return new A.o_(this.a*e,this.b*e,this.c*e)},
ad(d,e){return new A.o_(this.a+e.a,this.b+e.b,this.c+e.c)},
am(d,e){return new A.o_(this.a-e.a,this.b-e.b,this.c-e.c)}}
A.h7.prototype={
ar(d,e){var w=this
return new A.h7(w.a*e,w.b*e,w.c*e,w.d*e)},
ad(d,e){var w=this
return new A.h7(w.a+e.a,w.b+e.b,w.c+e.c,w.d+e.d)},
am(d,e){var w=this
return new A.h7(w.a-e.a,w.b-e.b,w.c-e.c,w.d-e.d)}}
A.Gw.prototype={
gbL(d){return this.b}}
A.yM.prototype={
gbL(d){return this.f}}
A.ZI.prototype={
gbL(d){return this.b}}
A.jZ.prototype={
syQ(d){this.a[this.b+1]=d},
BY(){var w=this.e,v=this.d
if(w)return new A.o_(B.cx[v>>>9],B.cx[v>>>4&31],B.bT[v&15])
else return new A.o_(B.bT[v>>>7&15],B.bT[v>>>3&15],B.jS[v&7])},
C_(){var w=this.e,v=this.d
if(w)return new A.h7(B.cx[v>>>9],B.cx[v>>>4&31],B.bT[v&15],255)
else return new A.h7(B.bT[v>>>7&15],B.bT[v>>>3&15],B.jS[v&7],B.jS[v>>>11&7])},
BZ(){var w=this.r,v=this.f
if(w)return new A.o_(B.cx[v>>>10],B.cx[v>>>5&31],B.cx[v&31])
else return new A.o_(B.bT[v>>>8&15],B.bT[v>>>4&15],B.bT[v&15])},
C0(){var w=this.r,v=this.f
if(w)return new A.h7(B.cx[v>>>10],B.cx[v>>>5&31],B.cx[v&31],255)
else return new A.h7(B.bT[v>>>8&15],B.bT[v>>>4&15],B.bT[v&15],B.jS[v>>>12&7])},
xA(){var w=this,v=w.c?1:0,u=w.d,t=w.e?1:0,s=w.f,r=w.r?1:0
return(v|(u&16383)<<1|t<<15|(s&32767)<<16|r<<31)>>>0},
mY(d){var w=this,v=w.a[w.b+1]
w.c=(v&1)===1
w.syQ(w.xA())
w.d=v>>>1&16383
w.syQ(w.xA())
w.e=(v>>>15&1)===1
w.syQ(w.xA())
w.f=v>>>16&32767
w.syQ(w.xA())
w.r=(v>>>31&1)===1
w.syQ(w.xA())}}
A.as2.prototype={
kW(d){var w,v=this,u=d.length,t=u-(u>>>1&1431655765)>>>0
t=(t&858993459)+(t>>>2&858993459)
if((t+(t>>>4)>>>0&252645135)*16843009>>>0>>>24===1){w=v.ans(d)
if(w!=null){v.a=d
return v.b=w}}w=v.anF(d)
if(w!=null){v.a=d
return v.b=w}w=v.anD(d)
if(w!=null){v.a=d
return v.b=w}return null},
anF(d){var w,v,u=A.br(d,!1,null,0)
if(u.N()!==52)return null
if(u.N()!==55727696)return null
w=C.a([0,0,0,0],x.t)
v=new A.yM(w)
u.N()
v.b=u.N()
w[0]=u.b1()
w[1]=u.b1()
w[2]=u.b1()
w[3]=u.b1()
u.N()
u.N()
v.f=u.N()
v.r=u.N()
u.N()
u.N()
u.N()
u.N()
v.Q=u.N()
return v},
anD(d){var w,v,u=A.br(d,!1,null,0)
if(u.N()!==52)return null
w=new A.Gw()
w.b=u.N()
w.a=u.N()
u.N()
w.d=u.N()
u.N()
w.f=u.N()
u.N()
u.N()
u.N()
w.y=u.N()
v=u.N()
w.z=v
w.Q=u.N()
if(v!==559044176)return null
return w},
ans(d){var w,v,u,t,s,r,q=null,p=d.length,o=A.br(d,!1,q,0)
if(o.N()!==0)return q
w=new A.ZI()
w.b=o.N()
w.a=o.N()
o.N()
o.N()
o.N()
o.N()
o.N()
o.N()
o.N()
v=o.N()
w.y=v
if(v===559044176)return q
if(p===32){u=0
t=8}else{s=0
while(!0){if(!(s<10)){u=1
t=8
break}r=s<<1>>>0
if((D.b.cj(64,r)&p)>>>0!==0){t=D.b.cj(16,s)
u=1
break}if((D.b.cj(128,r)&p)>>>0!==0){t=D.b.cj(16,s)
u=0
break}++s}if(s===10)return q}if((u+1)*2===4)return q
w.b=w.a=t
return w},
fW(d){var w,v,u=this,t=u.b
if(t==null||u.a==null)return null
if(t instanceof A.ZI){t=t.a
w=u.b
w=w.gbL(w)
v=u.a
v.toString
return u.N9(t,w,v)}else if(t instanceof A.Gw){t=u.a
t.toString
return u.anC(t)}else if(t instanceof A.yM){t=u.a
t.toString
return u.anE(t)}return null},
kh(d,e,f){if(this.kW(e)==null)return null
return this.fW(0)},
anC(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.length
if(k<52||m.b==null)return l
w=m.b
w.toString
x.fi.a(w)
v=A.br(d,!1,l,0)
v.d+=52
u=w.Q
if(u<1)u=(w.d&4096)!==0?6:1
if(u!==1)return l
t=w.a
s=w.b
if(t*s*w.f/8>k-52)return l
switch(w.d&255){case 16:r=A.dY(l,l,B.H,0,B.ae,s,l,0,4,l,t,!1)
for(w=r.a,w=w.ga1(w);w.q();){q=w.gM(w)
t=v.a
s=v.d
p=v.d=s+1
s=t[s]
v.d=p+1
p=t[p]
q.sae(0,p&240)
q.sap((p&15)<<4)
q.saq(0,s&240)
q.sav(0,(s&15)<<4)}return r
case 17:r=A.dY(l,l,B.H,0,B.ae,s,l,0,4,l,t,!1)
for(w=r.a,w=w.ga1(w);w.q();){q=w.gM(w)
o=v.V()
n=(o&1)!==0?255:0
q.sae(0,o>>>8&248)
q.sap(o>>>3&248)
q.saq(0,(o&62)<<2)
q.sav(0,n)}return r
case 18:r=A.dY(l,l,B.H,0,B.ae,s,l,0,4,l,t,!1)
for(w=r.a,w=w.ga1(w);w.q();){q=w.gM(w)
q.sae(0,v.a[v.d++])
q.sap(v.a[v.d++])
q.saq(0,v.a[v.d++])
q.sav(0,v.a[v.d++])}return r
case 19:r=A.dY(l,l,B.H,0,B.ae,s,l,0,3,l,t,!1)
for(w=r.a,w=w.ga1(w);w.q();){q=w.gM(w)
o=v.V()
q.sae(0,o>>>8&248)
q.sap(o>>>3&252)
q.saq(0,(o&31)<<3)}return r
case 20:r=A.dY(l,l,B.H,0,B.ae,s,l,0,3,l,t,!1)
for(w=r.a,w=w.ga1(w);w.q();){q=w.gM(w)
o=v.V()
q.sae(0,(o&31)<<3)
q.sap(o>>>2&248)
q.saq(0,o>>>7&248)}return r
case 21:r=A.dY(l,l,B.H,0,B.ae,s,l,0,3,l,t,!1)
for(w=r.a,w=w.ga1(w);w.q();){q=w.gM(w)
q.sae(0,v.a[v.d++])
q.sap(v.a[v.d++])
q.saq(0,v.a[v.d++])}return r
case 22:r=A.dY(l,l,B.H,0,B.ae,s,l,0,1,l,t,!1)
for(w=r.a,w=w.ga1(w);w.q();)w.gM(w).sae(0,v.a[v.d++])
return r
case 23:r=A.dY(l,l,B.H,0,B.ae,s,l,0,4,l,t,!1)
for(w=r.a,w=w.ga1(w);w.q();){q=w.gM(w)
t=v.a
s=v.d
p=v.d=s+1
s=t[s]
v.d=p+1
p=t[p]
q.sae(0,p)
q.sap(p)
q.saq(0,p)
q.sav(0,s)}return r
case 24:return l
case 25:return w.y===0?m.YM(t,s,v.e4()):m.N9(t,s,v.e4())}return l},
anE(d){var w,v,u,t=this
if(!(t.b instanceof A.yM))return null
w=A.br(d,!1,null,0)
v=w.d+=52
u=x.a7.a(t.b)
w.d=v+u.Q
if(u.c[0]===0)switch(u.b){case 2:return t.YM(u.r,u.f,w.e4())
case 3:return t.N9(u.r,u.f,w.e4())}return null},
YM(c6,c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=A.dY(b6,b6,B.H,0,B.ae,c7,b6,0,3,b6,c6,!1),b8=c6/4|0,b9=b8-1,c0=C.hF(c8.buffer,0,b6),c1=new A.jZ(c0),c2=new A.jZ(C.hF(c8.buffer,0,b6)),c3=new A.jZ(C.hF(c8.buffer,0,b6)),c4=new A.jZ(C.hF(c8.buffer,0,b6)),c5=new A.jZ(C.hF(c8.buffer,0,b6))
for(w=0,v=0;w<b8;++w,v+=4)for(u=0,t=0;u<b8;++u,t+=4){c1.b=A.o0(u,w)<<1>>>0
c1.mY(0)
s=c0[c1.b]
r=c1.c?4:0
for(q=0,p=0;p<4;++p){o=(w+(p<2?-1:0)&b9)>>>0
n=(o+1&b9)>>>0
for(m=p+v,l=0;l<4;++l){k=(u+(l<2?-1:0)&b9)>>>0
j=(k+1&b9)>>>0
c2.b=A.o0(k,o)<<1>>>0
c2.mY(0)
c3.b=A.o0(j,o)<<1>>>0
c3.mY(0)
c4.b=A.o0(k,n)<<1>>>0
c4.mY(0)
c5.b=A.o0(j,n)<<1>>>0
c5.mY(0)
i=c2.BY()
h=B.be[q][0]
g=c3.BY()
f=B.be[q][1]
e=c4.BY()
d=B.be[q][2]
a0=c5.BY()
a1=B.be[q][3]
a2=c2.BZ()
a3=B.be[q][0]
a4=c3.BZ()
a5=B.be[q][1]
a6=c4.BZ()
a7=B.be[q][2]
a8=c5.BZ()
a9=B.be[q][3]
b0=B.vV[r+s&3]
b1=b0[0]
b2=b0[1]
b3=D.b.G((i.a*h+g.a*f+e.a*d+a0.a*a1)*b1+(a2.a*a3+a4.a*a5+a6.a*a7+a8.a*a9)*b2,7)
b4=D.b.G((i.b*h+g.b*f+e.b*d+a0.b*a1)*b1+(a2.b*a3+a4.b*a5+a6.b*a7+a8.b*a9)*b2,7)
b5=D.b.G((i.c*h+g.c*f+e.c*d+a0.c*a1)*b1+(a2.c*a3+a4.c*a5+a6.c*a7+a8.c*a9)*b2,7)
b2=b7.a
if(b2!=null)b2.cD(l+t,m,b3,b4,b5)
s=s>>>2;++q}}}return b7},
N9(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=A.dY(a5,a5,B.H,0,B.ae,b6,a5,0,4,a5,b5,!1),a7=b5/4|0,a8=a7-1,a9=C.hF(b7.buffer,0,a5),b0=new A.jZ(a9),b1=new A.jZ(C.hF(b7.buffer,0,a5)),b2=new A.jZ(C.hF(b7.buffer,0,a5)),b3=new A.jZ(C.hF(b7.buffer,0,a5)),b4=new A.jZ(C.hF(b7.buffer,0,a5))
for(w=0,v=0;w<a7;++w,v+=4)for(u=0,t=0;u<a7;++u,t+=4){b0.b=A.o0(u,w)<<1>>>0
b0.mY(0)
s=a9[b0.b]
r=b0.c?4:0
for(q=0,p=0;p<4;++p){o=(w+(p<2?-1:0)&a8)>>>0
n=(o+1&a8)>>>0
for(m=p+v,l=0;l<4;++l){k=(u+(l<2?-1:0)&a8)>>>0
j=(k+1&a8)>>>0
b1.b=A.o0(k,o)<<1>>>0
b1.mY(0)
b2.b=A.o0(j,o)<<1>>>0
b2.mY(0)
b3.b=A.o0(k,n)<<1>>>0
b3.mY(0)
b4.b=A.o0(j,n)<<1>>>0
b4.mY(0)
i=b1.C_()
h=B.be[q][0]
g=b2.C_()
f=B.be[q][1]
f=new A.h7(i.a*h,i.b*h,i.c*h,i.d*h).ad(0,new A.h7(g.a*f,g.b*f,g.c*f,g.d*f))
g=b3.C_()
h=B.be[q][2]
h=f.ad(0,new A.h7(g.a*h,g.b*h,g.c*h,g.d*h))
g=b4.C_()
f=B.be[q][3]
e=h.ad(0,new A.h7(g.a*f,g.b*f,g.c*f,g.d*f))
f=b1.C0()
g=B.be[q][0]
h=b2.C0()
i=B.be[q][1]
i=new A.h7(f.a*g,f.b*g,f.c*g,f.d*g).ad(0,new A.h7(h.a*i,h.b*i,h.c*i,h.d*i))
h=b3.C0()
g=B.be[q][2]
g=i.ad(0,new A.h7(h.a*g,h.b*g,h.c*g,h.d*g))
h=b4.C0()
i=B.be[q][3]
d=g.ad(0,new A.h7(h.a*i,h.b*i,h.c*i,h.d*i))
a0=B.vV[r+s&3]
i=a0[0]
h=a0[1]
a1=D.b.G(e.a*i+d.a*h,7)
a2=D.b.G(e.b*i+d.b*h,7)
a3=D.b.G(e.c*i+d.c*h,7)
a4=D.b.G(e.d*a0[2]+d.d*a0[3],7)
h=a6.a
if(h!=null)h.fP(l+t,m,a1,a2,a3,a4)
s=s>>>2;++q}}}return a6}}
A.a1u.prototype={
w6(d,e){var w,v=this
if(e.c-e.d<18)return
v.a=e.b1()
v.b=e.b1()
w=e.b1()
v.c=w<12?B.Wp[w]:B.l8
e.V()
v.e=e.V()
v.f=e.b1()
e.V()
e.V()
v.x=e.V()
v.y=e.V()
v.z=e.b1()
v.Q=e.b1()},
a7Y(){var w=this,v=w.z
if(v!==8&&v!==16&&v!==24&&v!==32)return!1
v=w.c
if(v===B.dM||v===B.dN){if(w.e>256||w.b!==1)return!1
v=w.f
if(v!==16&&v!==24&&v!==32)return!1}else if(w.b===1)return!1
return!0}}
A.io.prototype={
P(){return"TgaImageType."+this.b}}
A.ayl.prototype={
kh(d,e,f){if(this.kW(e)==null)return null
return this.fW(0)},
kW(d){var w,v,u,t,s=this
s.a=new A.a1u(B.l8)
w=A.br(d,!1,null,0)
s.b=w
v=w.fs(18)
s.a.w6(0,v)
if(!s.a.a7Y())return null
w=s.b
u=s.a
w.d+=u.a
t=u.c
if(t===B.dM||t===B.dN)u.as=w.fs(u.e*D.b.G(u.f,3)).e4()
w=s.a
w.ax=s.b.d
return w},
fW(d){var w=this,v=w.a
if(v==null)return null
v=v.c
if(v===B.Mt)return w.YL()
else if(v===B.Ms||v===B.dN)return w.anI()
else if(v===B.dM)return w.YL()
return null},
YH(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=A.br(d,!1,null,0),j=l.a.f
if(j===16){j=l.b
j===$&&C.b()
w=j.V()
v=w>>>7&248
u=w>>>2&248
t=(w&31)<<3
s=(w&32768)!==0?0:255
for(r=0;r<l.a.e;++r){e.mK(r,v)
e.mJ(r,u)
e.mI(r,t)
e.mH(r,s)}}else{q=j===32
for(r=0;r<l.a.e;++r){j=k.a
p=k.d
o=k.d=p+1
p=j[p]
n=k.d=o+1
o=j[o]
m=k.d=n+1
n=j[n]
if(q){k.d=m+1
s=j[m]}else s=255
e.mK(r,n)
e.mJ(r,o)
e.mI(r,p)
e.mH(r,s)}}},
anI(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a,e=f.z,d=e===16,a0=d||e===32,a1=f.x,a2=f.y,a3=a0?4:3
f=f.c
w=A.dY(g,g,B.H,0,B.ae,a2,g,0,a3,g,a1,f===B.dM||f===B.dN)
f=w.a
if((f==null?g:f.gd4())!=null){f=h.a.as
f.toString
a1=w.a
a1=a1==null?g:a1.gd4()
a1.toString
h.YH(f,a1)}v=w.gcu(w)
u=w.gbL(w)-1
f=e===8
t=0
while(!0){a1=h.b
a1===$&&C.b()
a2=a1.d
if(!(a2<a1.c&&u>=0))break
a3=a1.a
s=a1.d=a2+1
a2=a3[a2]
r=(a2&127)+1
if((a2&128)!==0)if(f){a1.d=s+1
a1=a3[s]
for(q=0;q<r;++q){p=t+1
a2=w.a
if(a2!=null)a2.it(t,u,a1)
if(p>=v){--u
if(u<0){t=0
break}t=0}else t=p}}else if(d){o=a1.V()
n=o>>>7&248
m=o>>>2&248
l=(o&31)<<3
k=(o&32768)!==0?0:255
for(q=0;q<r;++q){p=t+1
a1=w.a
if(a1!=null)a1.fP(t,u,n,m,l,k)
if(p>=v){--u
if(u<0){t=0
break}t=0}else t=p}}else{a2=a1.d=s+1
s=a3[s]
j=a1.d=a2+1
a2=a3[a2]
i=a1.d=j+1
j=a3[j]
if(a0){a1.d=i+1
k=a3[i]}else k=255
for(q=0;q<r;++q){p=t+1
a1=w.a
if(a1!=null)a1.fP(t,u,j,a2,s,k)
if(p>=v){--u
if(u<0){t=0
break}t=0}else t=p}}else if(f)for(q=0;q<r;++q){a1=h.b
a1=a1.a[a1.d++]
p=t+1
a2=w.a
if(a2!=null)a2.it(t,u,a1)
if(p>=v){--u
if(u<0){t=0
break}t=0}else t=p}else if(d)for(q=0;q<r;++q){o=a1.V()
k=(o&32768)!==0?0:255
p=t+1
a1=w.a
if(a1!=null)a1.fP(t,u,o>>>7&248,o>>>2&248,(o&31)<<3,k)
a1=h.b
if(a1.d>=a1.c){t=p
break}if(p>=v){--u
if(u<0){t=0
break}t=0}else t=p}else for(q=0;q<r;++q){a1=h.b
a2=a1.a
a3=a1.d
s=a1.d=a3+1
a3=a2[a3]
j=a1.d=s+1
s=a2[s]
i=a1.d=j+1
j=a2[j]
if(a0){a1.d=i+1
k=a2[i]}else k=255
p=t+1
a1=w.a
if(a1!=null)a1.fP(t,u,j,s,a3,k)
if(p>=v){--u
if(u<0){t=0
break}t=0}else t=p}if(t>=v){--u
if(u<0)break
t=0}}return w},
YL(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b
g===$&&C.b()
w=i.a
g.d=w.ax
v=w.z
g=v===16
if(!g)if(v!==32){u=w.c
if(u===B.dM||u===B.dN){u=w.f
u=u===16||u===32}else u=!1
t=u}else t=!0
else t=!0
u=w.x
s=w.y
r=t?4:3
w=w.c
q=A.dY(h,h,B.H,0,B.ae,s,h,0,r,h,u,w===B.dM||w===B.dN)
w=i.a
u=w.c
if(u===B.dM||u===B.dN){w=w.as
w.toString
u=q.a
u=u==null?h:u.gd4()
u.toString
i.YH(w,u)}if(v===8)for(p=q.gbL(q)-1;p>=0;--p){o=0
while(!0){g=q.a
w=g==null
u=w?h:g.a
if(!(o<(u==null?0:u)))break
u=i.b
u=u.a[u.d++]
if(!w)g.it(o,p,u);++o}}else if(g)for(p=q.gbL(q)-1;p>=0;--p){o=0
while(!0){g=q.a
g=g==null?h:g.a
if(!(o<(g==null?0:g)))break
n=i.b.V()
m=(n&32768)!==0?0:255
g=q.a
if(g!=null)g.fP(o,p,n>>>7&248,n>>>2&248,(n&31)<<3,m);++o}}else for(p=q.gbL(q)-1;p>=0;--p){o=0
while(!0){g=q.a
w=g==null
u=w?h:g.a
if(!(o<(u==null?0:u)))break
u=i.b
s=u.a
r=u.d
l=u.d=r+1
r=s[r]
k=u.d=l+1
l=s[l]
j=u.d=k+1
k=s[k]
if(t){u.d=j+1
m=s[j]}else m=255
if(!w)g.fP(o,p,k,l,r,m);++o}}return q}}
A.ays.prototype={
eH(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.b1()}for(w=s.a,v=0;u=s.c,d>u;){v=D.b.cW(v,u)+(s.b&B.h7[u])
d-=u
s.c=8
s.b=w.a[w.d++]}if(d>0){if(u===0){s.c=8
s.b=w.b1()}w=D.b.cW(v,d)
u=s.b
t=s.c-d
v=w+(D.b.kT(u,t)&B.h7[d])
s.c=t}return v}}
A.a1x.prototype={
j(d){var w=this,v=w.a,u=$.aKl().h(0,v)
if(u!=null)return u.a+": "+w.b.j(0)+" "+w.c
return"<"+v+">: "+w.b.j(0)+" "+w.c},
jO(d){var w,v,u,t=this,s=t.e
if(s!=null)return s
s=t.f
s.d=t.d
w=t.c
v=t.b
u=s.fs(w*(v!==B.p?B.e9[v.a]:0))
switch(v.a){case 1:return t.e=new A.lN(new Uint8Array(C.bf(u.fs(w).e4())))
case 2:return t.e=new A.ty(w===0?"":u.eI(w-1))
case 7:return t.e=new A.lN(new Uint8Array(C.bf(u.fs(w).e4())))
case 3:return t.e=A.aSO(u,w)
case 4:return t.e=A.aSJ(u,w)
case 5:return t.e=A.aSK(u,w)
case 11:return t.e=A.aSQ(u,w)
case 12:return t.e=A.aSI(u,w)
case 6:return t.e=new A.nF(new Int8Array(C.bf(C.aTS(u.e4().buffer,0,w))))
case 8:return t.e=A.aSN(u,w)
case 9:return t.e=A.aSL(u,w)
case 10:return t.e=A.aSM(u,w)
case 0:return null}}}
A.ayu.prototype={
aDh(d,e,f,g){var w,v,u,t=this
t.r=e
t.x=t.w=0
w=D.b.bR(t.a+7,8)
for(v=0,u=0;u<g;++u){t.N8(d,v,f)
v+=w}},
N8(d,e,f){var w,v,u,t,s,r,q,p=this
p.d=0
for(w=p.a,v=!0;f<w;){for(;v;){u=p.pt(10)
t=B.AO[u]
s=D.b.G(t,1)&15
if(s===12){t=B.k9[(u<<2&12|p.jp(2))>>>0]
r=D.b.G(t,1)
f+=D.b.G(t,4)&4095
p.hg(4-(r&7))}else if(s===0)throw C.c(A.aG("TIFFFaxDecoder0"))
else if(s===15)throw C.c(A.aG("TIFFFaxDecoder1"))
else{f+=D.b.G(t,5)&2047
p.hg(10-s)
if((t&1)===0){p.f[p.d++]=f
v=!1}}}if(f===w){if(p.z===2)if(p.w!==0){w=p.x
w.toString
p.x=w+1
p.w=0}break}for(;!v;){t=B.zE[p.jp(4)]
q=t>>>5&2047
if(q===100){t=B.yj[p.pt(9)]
s=D.b.G(t,1)&15
q=D.b.G(t,5)&2047
if(s===12){p.hg(5)
t=B.k9[p.jp(4)]
r=D.b.G(t,1)
q=D.b.G(t,4)&4095
p.k_(d,e,f,q)
f+=q
p.hg(4-(r&7))}else if(s===15)throw C.c(A.aG("TIFFFaxDecoder2"))
else{p.k_(d,e,f,q)
f+=q
p.hg(9-s)
if((t&1)===0){p.f[p.d++]=f
v=!0}}}else{if(q===200){t=B.v6[p.jp(2)]
q=t>>>5&2047
p.k_(d,e,f,q)
f+=q
p.hg(2-(t>>>1&15))
p.f[p.d++]=f}else{p.k_(d,e,f,q)
f+=q
p.hg(4-(t>>>1&15))
p.f[p.d++]=f}v=!0}}if(f===w){if(p.z===2)if(p.w!==0){w=p.x
w.toString
p.x=w+1
p.w=0}break}}p.f[p.d++]=f},
aDi(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.r=a1
d.z=3
d.x=d.w=0
w=d.a
v=D.b.bR(w+7,8)
u=C.ar(2,null,!1,x.I)
d.at=a4&1
d.as=a4>>>2&1
if(d.a0S()!==1)throw C.c(A.aG("TIFFFaxDecoder3"))
d.N8(a0,0,a2)
for(t=v,s=1;s<a3;++s){if(d.a0S()===0){r=d.e
d.e=d.f
d.f=r
d.y=0
q=a2
p=-1
o=!0
n=0
while(!0){q.toString
if(!(q<w))break
d.ZO(p,o,u)
m=u[0]
l=u[1]
k=B.wv[d.jp(7)]&255
j=k>>>3&15
i=k&7
if(j===0){if(!o){l.toString
d.k_(a0,t,q,l-q)}d.hg(7-i)
q=l
p=q}else if(j===1){d.hg(7-i)
h=n+1
g=h+1
if(o){q+=d.D4()
d.f[n]=q
f=d.D3()
d.k_(a0,t,q,f)
q+=f
d.f[h]=q}else{f=d.D3()
d.k_(a0,t,q,f)
q+=f
d.f[n]=q
q+=d.D4()
d.f[h]=q}n=g
p=q}else{if(j<=8){m.toString
e=m+(j-5)
h=n+1
d.f[n]=e
o=!o
if(o)d.k_(a0,t,q,e-q)
d.hg(7-i)}else throw C.c(A.aG("TIFFFaxDecoder4"))
q=e
n=h
p=q}}d.f[n]=q
d.d=n+1}else d.N8(a0,t,a2)
t+=v}},
aDl(a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.r=a4
a2.z=4
a2.x=a2.w=0
w=a2.a
v=D.b.bR(w+7,8)
u=C.ar(2,null,!1,x.I)
t=a2.f
a2.d=0
a2.d=1
t[0]=w
a2.d=2
t[1]=w
for(s=0,r=0;r<a6;++r){q=a2.e
a2.e=a2.f
a2.f=q
a2.y=0
p=a5
o=-1
n=!0
m=0
while(!0){p.toString
if(!(p<w))break
a2.ZO(o,n,u)
l=u[0]
k=u[1]
j=B.wv[a2.jp(7)]&255
i=j>>>3&15
h=j&7
if(i===0){if(!n){k.toString
a2.k_(a3,s,p,k-p)}a2.hg(7-h)
p=k
o=p}else if(i===1){a2.hg(7-h)
g=m+1
f=g+1
if(n){p+=a2.D4()
q[m]=p
e=a2.D3()
a2.k_(a3,s,p,e)
p+=e
q[g]=p}else{e=a2.D3()
a2.k_(a3,s,p,e)
p+=e
q[m]=p
p+=a2.D4()
q[g]=p}m=f
o=p}else if(i<=8){l.toString
d=l+(i-5)
g=m+1
q[m]=d
n=!n
if(n)a2.k_(a3,s,p,d-p)
a2.hg(7-h)
p=d
m=g
o=p}else if(i===11){if(a2.jp(3)!==7)throw C.c(A.aG("TIFFFaxDecoder5"))
for(a0=0,a1=!1;!a1;){for(;a2.jp(1)!==1;)++a0
if(a0>5){a0-=6
if(!n&&a0>0){g=m+1
q[m]=p
m=g}p+=a0
if(a0>0)n=!0
if(a2.jp(1)===0){if(!n){g=m+1
q[m]=p
m=g}n=!0}else{if(n){g=m+1
q[m]=p
m=g}n=!1}a1=!0}if(a0===5){if(!n){g=m+1
q[m]=p
m=g}p+=a0
n=!0}else{p+=a0
g=m+1
q[m]=p
a2.k_(a3,s,p,1);++p
m=g
n=!1}}}else throw C.c(A.aG("TIFFFaxDecoder5 "+i))}q[m]=p
a2.d=m+1
s+=v}},
D4(){var w,v,u,t,s,r,q=this
for(w=0,v=!0;v;){u=q.pt(10)
t=B.AO[u]
s=D.b.G(t,1)&15
if(s===12){t=B.k9[(u<<2&12|q.jp(2))>>>0]
r=D.b.G(t,1)
w+=D.b.G(t,4)&4095
q.hg(4-(r&7))}else if(s===0)throw C.c(A.aG("TIFFFaxDecoder0"))
else if(s===15)throw C.c(A.aG("TIFFFaxDecoder1"))
else{w+=D.b.G(t,5)&2047
q.hg(10-s)
if((t&1)===0)v=!1}}return w},
D3(){var w,v,u,t,s,r,q=this
for(w=0,v=!1;!v;){u=B.zE[q.jp(4)]
t=u>>>5&2047
if(t===100){u=B.yj[q.pt(9)]
s=D.b.G(u,1)&15
r=D.b.G(u,5)
if(s===12){q.hg(5)
u=B.k9[q.jp(4)]
r=D.b.G(u,1)
w+=D.b.G(u,4)&4095
q.hg(4-(r&7))}else if(s===15)throw C.c(A.aG("TIFFFaxDecoder2"))
else{w+=r&2047
q.hg(9-s)
if((u&1)===0)v=!0}}else{if(t===200){u=B.v6[q.jp(2)]
w+=u>>>5&2047
q.hg(2-(u>>>1&15))}else{w+=t
q.hg(4-(u>>>1&15))}v=!0}}return w},
a0S(){var w,v,u=this,t="TIFFFaxDecoder8",s=u.as
if(s===0){if(u.pt(12)!==1)throw C.c(A.aG("TIFFFaxDecoder6"))}else if(s===1){s=u.w
s.toString
w=8-s
if(u.pt(w)!==0)throw C.c(A.aG(t))
if(w<4)if(u.pt(8)!==0)throw C.c(A.aG(t))
for(;v=u.pt(8),v!==1;)if(v!==0)throw C.c(A.aG(t))}if(u.at===0)return 1
else return u.jp(1)},
ZO(d,e,f){var w,v=this,u=v.e,t=v.d,s=v.y,r=s>0?s-1:0
r=e?(r&4294967294)>>>0:(r|1)>>>0
for(w=r;w<t;w+=2){s=u[w]
s.toString
d.toString
if(s>d){v.y=w
f[0]=s
break}}s=w+1
if(s<t)f[1]=u[s]},
k_(d,e,f,g){var w,v,u,t,s,r,q=8*e+f,p=q+g,o=D.b.G(q,3),n=q&7
if(n>0){w=D.b.cW(1,7-n)
v=d.a[d.d+o]
while(!0){if(!(w>0&&q<p))break
v=(v|w)>>>0
w=w>>>1;++q}d.l(0,o,v)}o=D.b.G(q,3)
for(u=p-7,t=d.a,s=d.d;q<u;o=r){r=o+1
t[s+o]=255
q+=8}for(;q<p;){u=s+D.b.G(q,3)
t[u]=(t[u]|D.b.cW(1,7-(q&7)))>>>0;++q}},
pt(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.r
h===$&&C.b()
w=h.d
v=h.c-w-1
u=i.x
t=i.c
if(t===1){u.toString
h=h.a
s=h[w+u]
if(u===v){r=0
q=0}else{t=u+1
p=w+t
if(t===v){r=h[p]
q=0}else{r=h[p]
q=h[w+(u+2)]}}}else if(t===2){u.toString
h=h.a
s=B.eJ[h[w+u]&255]
if(u===v){r=0
q=0}else{t=u+1
p=w+t
if(t===v){r=B.eJ[h[p]&255]
q=0}else{r=B.eJ[h[p]&255]
q=B.eJ[h[w+(u+2)]&255]}}}else throw C.c(A.aG("TIFFFaxDecoder7"))
h=i.w
h.toString
o=8-h
n=d-o
if(n>8){m=n-8
l=8}else{l=n
m=0}u.toString
h=i.x=u+1
k=D.b.cW(s&B.h7[o],n)
j=D.b.de(r&B.nw[l],8-l)
if(m!==0){j=D.b.cW(j,m)|D.b.de(q&B.nw[m],8-m)
i.x=h+1
i.w=m}else if(l===8){i.w=0
i.x=h+1}else i.w=l
return(k|j)>>>0},
jp(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.r
l===$&&C.b()
w=l.d
v=l.c-w-1
u=m.x
t=m.c
if(t===1){u.toString
l=l.a
s=l[w+u]
r=u===v?0:l[w+(u+1)]}else if(t===2){u.toString
l=l.a
s=B.eJ[l[w+u]&255]
r=u===v?0:B.eJ[l[w+(u+1)]&255]}else throw C.c(A.aG("TIFFFaxDecoder7"))
l=m.w
l.toString
q=8-l
p=d-q
o=q-d
if(o>=0){n=D.b.de(s&B.h7[q],o)
l+=d
m.w=l
if(l===8){m.w=0
u.toString
m.x=u+1}}else{n=(D.b.cW(s&B.h7[q],-o)|D.b.de(r&B.nw[p],8-p))>>>0
u.toString
m.x=u+1
m.w=p}return n},
hg(d){var w,v=this,u=v.w
u.toString
w=u-d
if(w<0){u=v.x
u.toString
v.x=u-1
v.w=8+w}else v.w=w}}
A.a1y.prototype={
akG(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=A.aS(a1,e,0),a0=a1.V()
for(w=f.a,v=0;v<a0;++v){u=a1.V()
t=a1.V()
s=B.wx[t]
r=B.e9[t]
q=a1.N()
if(q*r>4)p=a1.N()
else{p=a1.d
a1.d=p+4}o=new A.a1x(u,s,q,p,d)
w.l(0,u,o)
if(u===256){n=o.jO(0)
n=n==null?e:n.t(0)
f.b=n==null?0:n}else if(u===257){n=o.jO(0)
n=n==null?e:n.t(0)
f.c=n==null?0:n}else if(u===262){m=o.jO(0)
l=m==null?e:m.t(0)
if(l==null)l=17
if(l<17)f.d=B.a0W[l]
else f.d=B.pj}else if(u===259){n=o.jO(0)
n=n==null?e:n.t(0)
f.e=n==null?0:n}else if(u===258){n=o.jO(0)
n=n==null?e:n.t(0)
f.f=n==null?0:n}else if(u===277){n=o.jO(0)
n=n==null?e:n.t(0)
f.r=n==null?0:n}else if(u===317){n=o.jO(0)
n=n==null?e:n.t(0)
f.z=n==null?0:n}else if(u===339){n=o.jO(0)
m=n==null?e:n.t(0)
f.w=B.Zz[m==null?0:m]}else if(u===320){m=o.jO(0)
if(m!=null){n=m.mz().buffer
k=D.b.bR(n.byteLength-0,2)
n=new Uint16Array(n,0,k)
f.go=n
f.id=0
n=n.length/3|0
f.k1=n
f.k2=n*2}}}j=f.go
n=j!=null
if(n&&f.d===B.pk)f.r=1
if(f.b===0||f.c===0)return
if(n&&f.f===8){i=j.length
for(v=0;v<i;++v)j[v]=j[v]>>>8}if(f.d===B.pi)f.y=!0
if(w.an(0,324)){f.ax=f.um(322)
f.ay=f.um(323)
f.ch=f.DU(324)
f.CW=f.DU(325)}else{f.ax=f.DT(322,f.b)
if(!w.an(0,278))f.ay=f.DT(323,f.c)
else{h=f.um(278)
if(h===-1)f.ay=f.c
else f.ay=h}f.ch=f.DU(273)
f.CW=f.DU(279)}n=f.b
g=f.ax
f.cx=D.b.f_(n+g-1,g)
g=f.c
n=f.ay
f.cy=D.b.f_(g+n-1,n)
f.dx=f.DT(266,1)
f.dy=f.um(292)
f.fr=f.um(293)
f.um(338)
switch(f.d.a){case 0:case 1:w=f.f
if(w===1&&f.r===1)f.x=B.ph
else if(w===4&&f.r===1)f.x=B.au8
else if(D.b.cq(w,8)===0){w=f.r
if(w===1)f.x=B.au9
else if(w===2)f.x=B.aua
else f.x=B.lc}break
case 2:if(D.b.cq(f.f,8)===0){w=f.r
if(w===3)f.x=B.Mw
else if(w===4)f.x=B.auc
else f.x=B.lc}break
case 3:if(f.r===1)if(f.go!=null){w=f.f
w=w===4||w===8||w===16}else w=!1
else w=!1
if(w)f.x=B.aub
break
case 4:if(f.f===1&&f.r===1)f.x=B.ph
break
case 6:if(f.e===7&&f.f===8&&f.r===3)f.x=B.Mw
else{if(w.an(0,530)){m=w.h(0,530).jO(0)
f.Q=m.t(0)
w=f.as=m.eL(0,1)}else w=f.as=f.Q=2
n=f.Q
n===$&&C.b()
if(n*w===1)f.x=B.lc
else if(f.f===8&&f.r===3)f.x=B.aud}break
default:if(D.b.cq(f.f,8)===0)f.x=B.lc
break}},
ei(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.w,g=h===B.i2,f=h===B.ak
h=j.f
if(h===1)w=B.c5
else if(h===2)w=B.c6
else{if(h===4)h=B.c7
else if(g&&h===16)h=B.cQ
else if(g&&h===32)h=B.dp
else if(g&&h===64)h=B.e0
else if(f&&h===8)h=B.e1
else if(f&&h===16)h=B.e2
else if(f&&h===32)h=B.e3
else if(h===16)h=B.dq
else h=h===32?B.dr:B.H
w=h}v=j.go!=null&&j.d===B.pk
u=v?3:j.r
h=j.b
t=A.dY(i,i,w,0,B.ae,j.c,i,0,u,i,h,v)
if(v){h=t.a
h=h==null?i:h.gd4()
h.toString
s=j.go
r=s.length/3|0
for(q=0;q<r;++q){p=j.id
p===$&&C.b()
p=s[p+q]
o=j.k1
o===$&&C.b()
o=s[o+q]
n=j.k2
n===$&&C.b()
h.kS(q,p,o,s[n+q])}}m=0
l=0
while(!0){h=j.cy
h===$&&C.b()
if(!(m<h))break
k=0
while(!0){h=j.cx
h===$&&C.b()
if(!(k<h))break
j.anJ(e,t,k,m);++k;++l}++m}return t},
anJ(b4,b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null
if(b2.x===B.ph){b2.anv(b4,b5,b6,b7)
return}t=b2.cx
t===$&&C.b()
s=b7*t+b6
b4.d=b2.ch[s]
t=b2.ax
r=b6*t
q=b2.ay
p=b7*q
w=b2.CW[s]
o=t*q*b2.r
t=b2.f
q=t===16
if(q)o*=2
else if(t===32)o*=4
v=null
if(t===8||q||t===32||t===64){t=b2.e
if(t===1)v=b4
else if(t===5){v=A.br(new Uint8Array(o),!1,b3,0)
u=A.aTs()
try{J.aPM(u,A.aS(b4,w,0),v.a)}catch(n){}if(b2.z===2)for(t=b2.ay,m=b2.r,q=b2.ax,l=q*m,k=0;k<t;++k){j=m*(k*q+1)
for(i=m;i<l;++i){h=v
g=h.a
h=h.d+j
f=g[h]
e=v
g[h]=f+e.a[e.d+(j-m)];++j}}}else if(t===32773){v=A.br(new Uint8Array(o),!1,b3,0)
b2.YK(b4,o,v.a)}else if(t===32946){t=A.aSW(b4.BE(0,0,w)).c
v=A.br(x.L.a(C.bE(t.c.buffer,0,t.a)),!1,b3,0)}else if(t===8)v=A.br(B.fw.z5(A.xO(b4.BE(0,0,w),1,b3,0),!1),!1,b3,0)
else if(t===6){b2.atw(new A.UY().ei(0,x.D.a(b4.BE(0,0,w))),b5,r,p,b2.ax,b2.ay)
return}else throw C.c(A.aG("Unsupported Compression Type: "+t))
d=p
a0=0
while(!0){if(!(a0<b2.ay&&d<b2.c))break
a1=r
a2=0
while(!0){if(!(a2<b2.ax&&a1<b2.b))break
t=b2.r
if(t===1){t=b2.w
if(t===B.i2){t=b2.f
if(t===32){t=v.N()
$.dc()[0]=t
a3=$.p1()[0]}else if(t===64)a3=v.UK()
else if(t===16){t=v.V()
q=$.dn
a3=(q!=null?q:A.dO())[t]}else a3=0
t=b5.a
if(t!=null)t.it(a1,d,a3)}else{q=b2.f
if(q===8)if(t===B.ak){t=v
t=t.a[t.d++]
$.iA()[0]=t
a3=$.j2()[0]}else{t=v
a3=t.a[t.d++]}else if(q===16)if(t===B.ak){t=v.V()
$.iz()[0]=t
a3=$.j1()[0]}else a3=v.V()
else if(q===32)if(t===B.ak){t=v.N()
$.dc()[0]=t
a3=$.fy()[0]}else a3=v.N()
else a3=0
if(b2.d===B.pi){t=b5.a
a4=t==null?b3:t.gbd()
a3=(a4==null?0:a4)-a3}t=b5.a
if(t!=null)t.it(a1,d,a3)}}else if(t===2){t=b2.f
if(t===8){t=b2.w===B.ak
if(t){q=v
q=q.a[q.d++]
$.iA()[0]=q
a5=$.j2()[0]}else{q=v
a5=q.a[q.d++]}if(t){t=v
t=t.a[t.d++]
$.iA()[0]=t
a6=$.j2()[0]}else{t=v
a6=t.a[t.d++]}}else if(t===16){if(b2.w===B.ak){t=v.V()
$.iz()[0]=t
a5=$.j1()[0]}else a5=v.V()
if(b2.w===B.ak){t=v.V()
$.iz()[0]=t
a6=$.j1()[0]}else a6=v.V()}else if(t===32){if(b2.w===B.ak){t=v.N()
$.dc()[0]=t
a5=$.fy()[0]}else a5=v.N()
if(b2.w===B.ak){t=v.N()
$.dc()[0]=t
a6=$.fy()[0]}else a6=v.N()}else{a5=0
a6=0}t=b5.a
if(t!=null)t.cD(a1,d,a5,a6,0)}else if(t===3){t=b2.w
if(t===B.i2){t=b2.f
if(t===32){t=v.N()
q=$.dc()
q[0]=t
t=$.p1()
a7=t[0]
q[0]=v.N()
a8=t[0]
q[0]=v.N()
a9=t[0]}else if(t===64){a7=v.UK()
a8=0
a9=0}else if(t===16){t=v.V()
q=$.dn
a7=(q!=null?q:A.dO())[t]
t=v.V()
q=$.dn
a8=(q!=null?q:A.dO())[t]
t=v.V()
q=$.dn
a9=(q!=null?q:A.dO())[t]}else{a7=0
a8=0
a9=0}t=b5.a
if(t!=null)t.cD(a1,d,a7,a8,a9)}else{q=b2.f
if(q===8){t=t===B.ak
if(t){q=v
q=q.a[q.d++]
$.iA()[0]=q
a7=$.j2()[0]}else{q=v
a7=q.a[q.d++]}if(t){q=v
q=q.a[q.d++]
$.iA()[0]=q
a8=$.j2()[0]}else{q=v
a8=q.a[q.d++]}if(t){t=v
t=t.a[t.d++]
$.iA()[0]=t
a9=$.j2()[0]}else{t=v
a9=t.a[t.d++]}}else if(q===16){if(t===B.ak){t=v.V()
$.iz()[0]=t
a7=$.j1()[0]}else a7=v.V()
if(b2.w===B.ak){t=v.V()
$.iz()[0]=t
a8=$.j1()[0]}else a8=v.V()
if(b2.w===B.ak){t=v.V()
$.iz()[0]=t
a9=$.j1()[0]}else a9=v.V()}else if(q===32){if(t===B.ak){t=v.N()
$.dc()[0]=t
a7=$.fy()[0]}else a7=v.N()
if(b2.w===B.ak){t=v.N()
$.dc()[0]=t
a8=$.fy()[0]}else a8=v.N()
if(b2.w===B.ak){t=v.N()
$.dc()[0]=t
a9=$.fy()[0]}else a9=v.N()}else{a7=0
a8=0
a9=0}t=b5.a
if(t!=null)t.cD(a1,d,a7,a8,a9)}}else if(t>=4){t=b2.w
if(t===B.i2){t=b2.f
if(t===32){t=v.N()
q=$.dc()
q[0]=t
t=$.p1()
a7=t[0]
q[0]=v.N()
a8=t[0]
q[0]=v.N()
a9=t[0]
q[0]=v.N()
b0=t[0]}else if(t===64){a7=v.UK()
a8=0
a9=0
b0=0}else if(t===16){t=v.V()
q=$.dn
a7=(q!=null?q:A.dO())[t]
t=v.V()
q=$.dn
a8=(q!=null?q:A.dO())[t]
t=v.V()
q=$.dn
a9=(q!=null?q:A.dO())[t]
t=v.V()
q=$.dn
b0=(q!=null?q:A.dO())[t]}else{a7=0
a8=0
a9=0
b0=0}t=b5.a
if(t!=null)t.fP(a1,d,a7,a8,a9,b0)}else{q=b2.f
if(q===8){t=t===B.ak
if(t){q=v
q=q.a[q.d++]
$.iA()[0]=q
a7=$.j2()[0]}else{q=v
a7=q.a[q.d++]}if(t){q=v
q=q.a[q.d++]
$.iA()[0]=q
a8=$.j2()[0]}else{q=v
a8=q.a[q.d++]}if(t){q=v
q=q.a[q.d++]
$.iA()[0]=q
a9=$.j2()[0]}else{q=v
a9=q.a[q.d++]}if(t){t=v
t=t.a[t.d++]
$.iA()[0]=t
b0=$.j2()[0]}else{t=v
b0=t.a[t.d++]}}else if(q===16){if(t===B.ak){t=v.V()
$.iz()[0]=t
a7=$.j1()[0]}else a7=v.V()
if(b2.w===B.ak){t=v.V()
$.iz()[0]=t
a8=$.j1()[0]}else a8=v.V()
if(b2.w===B.ak){t=v.V()
$.iz()[0]=t
a9=$.j1()[0]}else a9=v.V()
if(b2.w===B.ak){t=v.V()
$.iz()[0]=t
b0=$.j1()[0]}else b0=v.V()}else if(q===32){if(t===B.ak){t=v.N()
$.dc()[0]=t
a7=$.fy()[0]}else a7=v.N()
if(b2.w===B.ak){t=v.N()
$.dc()[0]=t
a8=$.fy()[0]}else a8=v.N()
if(b2.w===B.ak){t=v.N()
$.dc()[0]=t
a9=$.fy()[0]}else a9=v.N()
if(b2.w===B.ak){t=v.N()
$.dc()[0]=t
b0=$.fy()[0]}else b0=v.N()}else{a7=0
a8=0
a9=0
b0=0}if(b2.d===B.Mx){b1=A.aYI(a7,a8,a9,b0)
a7=b1[0]
a8=b1[1]
a9=b1[2]
t=b5.a
b0=t==null?b3:t.gbd()
if(b0==null)b0=0}t=b5.a
if(t!=null)t.fP(a1,d,a7,a8,a9,b0)}}++a2;++a1}++a0;++d}}else throw C.c(A.aG("Unsupported bitsPerSample: "+t))},
atw(d,e,f,g,h,i){var w,v,u,t
for(w=0;w<i;++w)for(v=w+g,u=0;u<h;++u){t=d.a
t=t==null?null:t.ee(u,w,null)
if(t==null)t=new A.eN()
e.Lr(u+f,v,t)}},
anv(a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.cx
a7===$&&C.b()
v=b1*a7+b0
a8.d=a5.ch[v]
a7=a5.ax
u=b0*a7
t=a5.ay
s=b1*t
r=a5.CW[v]
w=null
q=a5.e
if(q===32773){p=D.b.cq(a7,8)===0?D.b.bR(a7,8)*t:(D.b.bR(a7,8)+1)*t
w=A.br(new Uint8Array(a7*t),!1,a6,0)
a5.YK(a8,p,w.a)}else if(q===5){w=A.br(new Uint8Array(a7*t),!1,a6,0)
A.aTs().S7(0,A.aS(a8,r,0),w.a)
if(a5.z===2)for(a7=a5.c,o=a5.r,t=a5.b,q=t*o,n=0;n<a7;++n){m=o*(n*t+1)
for(l=o;l<q;++l){k=w
j=k.a
k=k.d+m
i=j[k]
h=w
j[k]=i+h.a[h.d+(m-o)];++m}}}else if(q===2){w=A.br(new Uint8Array(a7*t),!1,a6,0)
try{A.aMW(a5.dx,a5.ax,a5.ay).aDh(w,a8,0,a5.ay)}catch(g){}}else if(q===3){w=A.br(new Uint8Array(a7*t),!1,a6,0)
try{A.aMW(a5.dx,a5.ax,a5.ay).aDi(w,a8,0,a5.ay,a5.dy)}catch(g){}}else if(q===4){w=A.br(new Uint8Array(a7*t),!1,a6,0)
try{A.aMW(a5.dx,a5.ax,a5.ay).aDl(w,a8,0,a5.ay,a5.fr)}catch(g){}}else if(q===8)w=A.br(B.fw.z5(A.xO(a8.BE(0,0,r),1,a6,0),!1),!1,a6,0)
else if(q===32946){a7=A.aSW(a8.BE(0,0,r)).c
w=A.br(x.L.a(C.bE(a7.c.buffer,0,a7.a)),!1,a6,0)}else if(q===1)w=a8
else throw C.c(A.aG("Unsupported Compression Type: "+q))
f=new A.ays(w)
e=a9.gbd()
a7=a5.y
d=a7?e:0
a0=a7?0:e
for(a1=s,a2=0;a2<a5.ay;++a2,++a1){for(a3=u,a4=0;a4<a5.ax;++a4,++a3){a7=a9.a
t=a7==null
q=t?a6:a7.b
if(a1<(q==null?0:q)){a7=t?a6:a7.a
a7=a3>=(a7==null?0:a7)}else a7=!0
if(a7)break
a7=f.eH(1)
t=a9.a
if(a7===0){if(t!=null)t.cD(a3,a1,d,0,0)}else if(t!=null)t.cD(a3,a1,a0,0,0)}f.c=0}},
YK(d,e,f){var w,v,u,t,s,r,q,p,o
for(w=0,v=0;v<e;){u=w+1
t=d.a
s=d.d
r=t[s+w]
$.iA()[0]=r
q=$.j2()[0]
if(q>=0&&q<=127)for(r=q+1,w=u,p=0;p<r;++p,v=o,w=u){o=v+1
u=w+1
f[v]=t[s+w]}else{r=q<=-1&&q>=-127
w=u+1
if(r){t=t[s+u]
for(s=-q+1,p=0;p<s;++p,v=o){o=v+1
f[v]=t}}}}},
DT(d,e){var w=this.a
if(!w.an(0,d))return e
w=w.h(0,d).jO(0)
w=w==null?null:w.t(0)
return w==null?0:w},
um(d){return this.DT(d,0)},
DU(d){var w,v=this.a
if(!v.an(0,d))return null
w=v.h(0,d)
v=w.jO(0)
v.toString
return C.ap0(w.c,v.gp_(v),x.p)}}
A.v9.prototype={
P(){return"TiffFormat."+this.b}}
A.f6.prototype={
P(){return"TiffPhotometricType."+this.b}}
A.k4.prototype={
P(){return"TiffImageType."+this.b}}
A.ayv.prototype={}
A.apf.prototype={
S7(d,e,f){var w,v,u,t,s,r,q,p,o=this
o.r=f
w=f.length
o.w=0
v=x.D.a(e.a)
o.e=v
o.f=v.length
o.b=e.d
if(v[0]===0&&v[1]===1)throw C.c(A.aG("Invalid LZW Data"))
o.a_K()
o.d=o.c=0
u=o.NK()
v=o.x
t=0
while(!0){if(!(u!==257&&o.w<w))break
if(u===256){o.a_K()
u=o.NK()
o.as=0
if(u===257)break
o.r[o.w++]=u
t=u}else{s=o.Q
s.toString
if(u<s){o.a__(u)
s=o.as
s===$&&C.b()
r=s-1
for(;r>=0;--r)o.r[o.w++]=v[r]
o.Xw(t,v[o.as-1])}else{o.a__(t)
s=o.as
s===$&&C.b()
r=s-1
for(;r>=0;--r)o.r[o.w++]=v[r]
s=o.r
q=o.w++
p=o.as-1
s[q]=v[p]
o.Xw(t,v[p])}t=u}u=o.NK()}},
Xw(d,e){var w,v=this,u=v.y
u===$&&C.b()
w=v.Q
w.toString
u[w]=e
u=v.z
u===$&&C.b()
u[w]=d
w=v.Q=w+1
if(w===511)v.a=10
else if(w===1023)v.a=11
else if(w===2047)v.a=12},
a__(d){var w,v,u,t,s,r,q=this
q.as=0
w=q.x
q.as=1
v=q.y
v===$&&C.b()
w[0]=v[d]
u=q.z
u===$&&C.b()
t=u[d]
for(s=1;t!==4098;s=r){r=s+1
q.as=r
w[s]=v[t]
t=u[t]}},
NK(){var w,v,u,t,s=this,r=s.b,q=s.f
q===$&&C.b()
if(r>=q)return 257
for(;w=s.d,v=s.a,w<v;r=t){if(r>=q)return 257
v=s.c
u=s.e
u===$&&C.b()
t=r+1
s.b=t
s.c=(v<<8>>>0)+u[r]>>>0
s.d=w+8}r=w-v
s.d=r
return D.b.de(s.c,r)&B.Y8[v-9]},
a_K(){var w,v,u=this
u.y=new Uint8Array(4096)
w=new Uint32Array(4096)
u.z=w
D.bu.hT(w,0,4096,4098)
for(w=u.y,v=0;v<256;++v)w[v]=v
u.a=9
u.Q=258}}
A.ayt.prototype={
fW(d){var w,v,u=this.a
if(u==null)return null
u=u.f[d]
w=this.c
w===$&&C.b()
v=u.ei(0,w)
return v},
kh(d,e,f){var w=this,v=A.br(e,!1,null,0)
w.c=v
v=w.a0U(v)
w.a=v
if(v==null)return null
return w.fW(0)},
a0U(d){var w,v,u,t,s,r,q,p,o,n=null,m=C.a([],x.aU),l=new A.ayv(m),k=d.V()
if(k!==18761&&k!==19789)return n
if(k===19789)d.e=!0
else d.e=!1
u=d.V()
l.d=u
if(u!==42)return n
t=d.N()
s=A.aS(d,n,0)
s.d=t
w=s
for(u=x.p,r=x.cV;t!==0;){v=null
try{q=new A.a1y(C.w(u,r),B.pj,B.Mv,B.aue)
q.akG(w)
v=q
p=v
if(!(p.b!==0&&p.c!==0))break}catch(o){break}m.push(v)
if(m.length===1){p=m[0]
l.a=p.b
l.b=p.c}t=w.N()
if(t!==0)w.d=t}return m.length!==0?l:n}}
A.az9.prototype={
z6(){var w,v=this.a,u=v.lA()
if((u&1)!==0)return!1
if((u>>>1&7)>3)return!1
if((u>>>4&1)===0)return!1
this.f.d=u>>>5
if(v.lA()!==2752925)return!1
w=this.b
w.a=v.V()
w.b=v.V()
return!0},
ow(d){var w,v,u=this,t=null
if(!u.apG())return t
w=u.b
v=w.a
u.d=A.dY(t,t,B.H,0,B.ae,w.b,t,0,4,t,v,!1)
u.at1()
if(!u.avz())return t
return u.d},
apG(){var w,v,u,t,s=this
if(!s.z6())return!1
s.fr=A.b9V()
for(w=s.dy,v=0;v<4;++v){u=new Int32Array(2)
t=new Int32Array(2)
w[v]=new A.a29(u,t,new Int32Array(2))}w=s.b
u=s.r.b=w.b
s.y=s.Q=0
w=w.a
s.z=w
s.as=u
s.at=w+15>>>4
s.ax=u+15>>>4
s.k1=0
u=s.a
w=s.f
t=w.d
t===$&&C.b()
t=A.aWh(u.eZ(t))
s.c=t
u.d+=w.d
t.c2(1)
s.c.c2(1)
s.avH(s.x,s.fr)
s.avx()
if(!s.avC(u))return!1
s.avE()
s.c.c2(1)
s.avD()
return!0},
avH(d,e){var w,v,u,t=this,s=t.c
s===$&&C.b()
s=s.c2(1)!==0
d.a=s
if(s){d.b=t.c.c2(1)!==0
if(t.c.c2(1)!==0){d.c=t.c.c2(1)!==0
for(s=d.d,w=0;w<4;++w){if(t.c.c2(1)!==0){v=t.c
u=v.c2(7)
v=v.c2(1)===1?-u:u}else v=0
s[w]=v}for(s=d.e,w=0;w<4;++w){if(t.c.c2(1)!==0){v=t.c
u=v.c2(6)
v=v.c2(1)===1?-u:u}else v=0
s[w]=v}}if(d.b)for(w=0;w<3;++w){s=e.a
s[w]=t.c.c2(1)!==0?t.c.c2(8):255}}else d.b=!1
return!0},
avx(){var w,v,u,t=this,s=t.w,r=t.c
r===$&&C.b()
s.a=r.c2(1)!==0
s.b=t.c.c2(6)
s.c=t.c.c2(3)
r=t.c.c2(1)!==0
s.d=r
if(r)if(t.c.c2(1)!==0){for(r=s.e,w=0;w<4;++w)if(t.c.c2(1)!==0){v=t.c
u=v.c2(6)
r[w]=v.c2(1)===1?-u:u}for(r=s.f,w=0;w<4;++w)if(t.c.c2(1)!==0){v=t.c
u=v.c2(6)
r[w]=v.c2(1)===1?-u:u}}if(s.b===0)r=0
else r=s.a?1:2
t.c9=r
return!0},
avC(d){var w,v,u,t,s,r,q,p,o=d.c-d.d,n=this.c
n===$&&C.b()
n=D.b.cj(1,n.c2(2))
this.cy=n
w=n-1
v=w*3
if(o<v)return!1
for(n=this.db,u=0,t=0;t<w;++t,v=p){s=d.Cr(3,u)
r=s.a
q=s.d
p=v+((r[q]|r[q+1]<<8|r[q+2]<<16)>>>0)
if(p>o)p=o
r=new A.IW(d.qI(p-v,v))
r.b=254
r.c=0
r.d=-8
n[t]=r
u+=3}n[w]=A.aWh(d.qI(o-v,d.d-d.b+v))
return v<o},
avE(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.c
g===$&&C.b()
w=g.c2(7)
v=h.c.c2(1)!==0?h.c.wD(4):0
u=h.c.c2(1)!==0?h.c.wD(4):0
t=h.c.c2(1)!==0?h.c.wD(4):0
s=h.c.c2(1)!==0?h.c.wD(4):0
r=h.c.c2(1)!==0?h.c.wD(4):0
q=h.x
for(g=h.dy,p=q.a,o=!q.c,n=q.d,m=0;m<4;++m){if(p){l=n[m]
if(o)l+=w}else{if(m>0){g[m]=g[0]
continue}l=w}k=g[m]
j=k.a
i=l+v
if(i<0)i=0
else if(i>127)i=127
j[0]=B.nD[i]
if(l<0)i=0
else i=l>127?127:l
j[1]=B.nC[i]
i=k.b
j=l+u
if(j<0)j=0
else if(j>127)j=127
i[0]=B.nD[j]*2
j=l+t
if(j<0)j=0
else if(j>127)j=127
i[1]=B.nC[j]*101581>>>16
if(i[1]<8)i[1]=8
j=k.c
i=l+s
if(i<0)i=0
else if(i>117)i=117
j[0]=B.nD[i]
i=l+r
if(i<0)i=0
else if(i>127)i=127
j[1]=B.nC[i]}},
avD(){var w,v,u,t,s,r,q=this,p=q.fr
for(w=0;w<4;++w)for(v=0;v<8;++v)for(u=0;u<3;++u)for(t=0;t<11;++t){s=q.c
s===$&&C.b()
r=s.ed(B.Zp[w][v][u][t])!==0?q.c.c2(8):B.a8o[w][v][u][t]
p.b[w][v].a[u][t]=r}s=q.c
s===$&&C.b()
s=s.c2(1)!==0
q.fx=s
if(s)q.fy=q.c.c2(8)},
awk(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.c9
j.toString
if(j>0){w=k.w
for(j=w.e,v=w.f,u=k.x,t=u.e,s=0;s<4;++s){if(u.a){r=t[s]
if(!u.c){q=w.b
q.toString
r+=q}}else r=w.b
for(p=0;p<=1;++p){q=k.aX
q===$&&C.b()
o=q[s][p]
q=w.d
q===$&&C.b()
if(q){r.toString
n=r+j[0]
if(p!==0)n+=v[0]}else n=r
n.toString
if(n<0)n=0
else if(n>63)n=63
if(n>0){q=w.c
q===$&&C.b()
if(q>0){m=q>4?D.b.G(n,2):D.b.G(n,1)
l=9-q
if(m>l)m=l}else m=n
if(m<1)m=1
o.b=m
o.a=2*n+m
if(n>=40)q=2
else q=n>=15?1:0
o.d=q}else o.a=0
o.c=p!==0}}}},
at1(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j.at
if(i!=null)l.cb=i
w=J.i5(4,x.K)
for(i=x.ao,v=0;v<4;++v)w[v]=C.a([new A.vk(),new A.vk()],i)
l.aX=w
i=l.at
i.toString
w=J.i5(i,x.dE)
for(u=0;u<i;++u){t=new Uint8Array(16)
s=new Uint8Array(8)
w[u]=new A.a2a(t,s,new Uint8Array(8))}l.k2=w
l.ok=new Uint8Array(832)
i=l.at
i.toString
l.go=new Uint8Array(4*i)
t=l.p4=16*i
i=8*i
l.R8=i
s=l.c9
s.toString
r=B.ns[s]
q=r*t
p=(r/2|0)*i
l.p1=A.br(new Uint8Array(16*t+q),!1,k,q)
i=l.R8
i.toString
l.p2=A.br(new Uint8Array(8*i+p),!1,k,p)
i=l.R8
i.toString
l.p3=A.br(new Uint8Array(8*i+p),!1,k,p)
i=j.a
l.RG=A.br(new Uint8Array(i),!1,k,0)
o=j.a+1>>>1
l.rx=A.br(new Uint8Array(o),!1,k,0)
l.ry=A.br(new Uint8Array(o),!1,k,0)
j=l.c9
j.toString
n=B.ns[j]
if(j===2)l.ch=l.ay=0
else{j=l.y
j===$&&C.b()
j=D.b.bR(j-n,16)
l.ay=j
i=l.Q
i.toString
i=D.b.bR(i-n,16)
l.ch=i
if(j<0)l.ay=0
if(i<0)l.ch=0}j=l.as
j.toString
j=D.b.bR(j+15+n,16)
l.cx=j
i=l.z
i===$&&C.b()
i=D.b.bR(i+15+n,16)
l.CW=i
t=l.at
t.toString
if(i>t)l.CW=t
i=l.ax
i.toString
if(j>i)l.cx=i
m=t+1
w=J.i5(m,x.ai)
for(u=0;u<m;++u)w[u]=new A.a27()
l.k3=w
j=l.at
j.toString
w=J.i5(j,x.gT)
for(u=0;u<j;++u){i=new Int16Array(384)
w[u]=new A.a28(i,new Uint8Array(16))}l.cZ=w
j=l.at
j.toString
l.k4=C.ar(j,k,!1,x.B)
l.awk()
A.b9m()
l.e=new A.aza()
return!0},
avz(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.y2=0
w=i.id
v=i.x
u=i.db
t=0
while(!0){s=i.cx
s.toString
if(!(t<s))break
s=i.cy
s===$&&C.b()
r=u[(t&s-1)>>>0]
while(!0){t=i.y1
s=i.at
s.toString
if(!(t<s))break
s=i.k3
s===$&&C.b()
q=s[0]
p=s[1+t]
s=i.cZ
s===$&&C.b()
o=s[t]
if(v.b){t=i.c
t===$&&C.b()
t=t.ed(i.fr.a[0])
s=i.c
n=i.fr
i.k1=t===0?s.ed(n.a[1]):2+s.ed(n.a[2])}t=i.fx
t===$&&C.b()
if(t){t=i.c
t===$&&C.b()
s=i.fy
s===$&&C.b()
m=t.ed(s)!==0}else m=!1
i.avA()
if(!m)m=i.avG(p,r)
else{q.a=p.a=0
t=o.b
t===$&&C.b()
if(!t)q.b=p.b=0
o.f=o.e=0}t=i.c9
t.toString
if(t>0){t=i.k4
t===$&&C.b()
s=i.y1
n=i.aX
n===$&&C.b()
l=i.k1
l===$&&C.b()
l=n[l]
n=o.b
n===$&&C.b()
k=l[n?1:0]
t[s]=k
k.c=k.c||!m}++i.y1}t=i.k3
t===$&&C.b()
t=t[0]
t.b=t.a=0
D.x.hT(w,0,4,0)
i.y1=0
i.awW()
t=i.c9
t.toString
if(t>0){t=i.y2
s=i.ch
s===$&&C.b()
if(t>=s){s=i.cx
s.toString
s=t<=s
j=s}else j=!1}else j=!1
if(!i.apc(j))return!1
t=++i.y2}return!0},
awW(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.y2,a8=a5.ok
a8===$&&C.b()
w=A.br(a8,!1,a6,40)
v=A.br(a5.ok,!1,a6,584)
u=A.br(a5.ok,!1,a6,600)
a8=a7>0
t=0
while(!0){s=a5.at
s.toString
if(!(t<s))break
s=a5.cZ
s===$&&C.b()
r=s[t]
if(t>0){for(q=-1;q<16;++q){s=q*32
w.lw(s-4,4,w,s+12)}for(q=-1;q<8;++q){s=q*32
p=s-4
s+=4
v.lw(p,4,v,s)
u.lw(p,4,u,s)}}else{for(s=w.a,p=w.d,q=0;q<16;++q)s[p+(q*32-1)]=129
for(o=v.a,n=v.d,m=u.a,l=u.d,q=0;q<8;++q){k=q*32-1
o[n+k]=129
m[l+k]=129}if(a8){m[l+-33]=129
o[n+-33]=129
s[p+-33]=129}}s=a5.k2
s===$&&C.b()
j=s[t]
i=r.a
h=r.e
if(a8){w.q9(-32,16,j.a)
v.q9(-32,8,j.b)
u.q9(-32,8,j.c)}else if(t===0){s=w.a
p=w.d+-33
J.ly(s,p,p+21,127)
p=v.a
s=v.d+-33
J.ly(p,s,s+9,127)
s=u.a
p=u.d+-33
J.ly(s,p,p+9,127)}s=r.b
s===$&&C.b()
if(s){g=A.aS(w,a6,-16)
f=g.BG()
if(a8){s=a5.at
s.toString
if(t>=s-1){s=j.a[15]
p=g.a
o=g.d
J.ly(p,o,o+4,s)}else g.q9(0,4,a5.k2[t+1].a)}e=f[0]
f[96]=e
f[64]=e
f[32]=e
for(s=r.c,d=0;d<16;++d,h=h<<2>>>0){a0=A.aS(w,a6,B.zh[d])
B.aam[s[d]].$1(a0)
h.toString
p=d*16
a5.Z3(h,new A.h3(i,p,384,p,!1),a0)}}else{s=A.aWk(t,a7,r.c[0])
s.toString
B.a0C[s].$1(w)
if(h!==0)for(d=0;d<16;++d,h=h<<2>>>0){a0=A.aS(w,a6,B.zh[d])
h.toString
s=d*16
a5.Z3(h,new A.h3(i,s,384,s,!1),a0)}}s=r.f
s===$&&C.b()
p=A.aWk(t,a7,r.d)
p.toString
B.uT[p].$1(v)
B.uT[p].$1(u)
a1=new A.h3(i,256,384,256,!1)
if((s&255)!==0){p=a5.e
if((s&170)!==0){p===$&&C.b()
p.nS(a1,v)
p.nS(A.aS(a1,a6,16),A.aS(v,a6,4))
o=A.aS(a1,a6,32)
n=A.aS(v,a6,128)
p.nS(o,n)
p.nS(A.aS(o,a6,16),A.aS(n,a6,4))}else{p===$&&C.b()
p.aaW(a1,v)}}a2=new A.h3(i,320,384,320,!1)
s=s>>>8
if((s&255)!==0){p=a5.e
if((s&170)!==0){p===$&&C.b()
p.nS(a2,u)
p.nS(A.aS(a2,a6,16),A.aS(u,a6,4))
s=A.aS(a2,a6,32)
o=A.aS(u,a6,128)
p.nS(s,o)
p.nS(A.aS(s,a6,16),A.aS(o,a6,4))}else{p===$&&C.b()
p.aaW(a2,u)}}s=a5.ax
s.toString
if(a7<s-1){D.x.bO(j.a,0,16,w.e4(),480)
D.x.bO(j.b,0,8,v.e4(),224)
D.x.bO(j.c,0,8,u.e4(),224)}a3=t*16
a4=t*8
for(q=0;q<16;++q){s=a5.p4
s.toString
p=a5.p1
p===$&&C.b()
p.lw(a3+q*s,16,w,q*32)}for(q=0;q<8;++q){s=a5.R8
s.toString
p=a5.p2
p===$&&C.b()
o=q*32
p.lw(a4+q*s,8,v,o)
s=a5.R8
s.toString
p=a5.p3
p===$&&C.b()
p.lw(a4+q*s,8,u,o)}++t}},
Z3(d,e,f){var w,v,u,t,s,r,q
switch(d>>>30){case 3:w=this.e
w===$&&C.b()
w.aKR(0,e,f,!1)
break
case 2:this.e===$&&C.b()
w=e.a
v=e.d
u=w[v]+4
t=D.b.h5(D.b.G(w[v+4]*35468,16),32)
s=D.b.h5(D.b.G(e.a[e.d+4]*85627,16),32)
r=D.b.h5(D.b.G(e.a[e.d+1]*35468,16),32)
q=D.b.h5(D.b.G(e.a[e.d+1]*85627,16),32)
A.azc(f,0,u+s,q,r)
A.azc(f,1,u+t,q,r)
A.azc(f,2,u-t,q,r)
A.azc(f,3,u-s,q,r)
break
case 1:w=this.e
w===$&&C.b()
w.BL(e,f)
break
default:break}},
aoa(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.p4,i=l.k4
i===$&&C.b()
i=i[d]
i.toString
w=l.p1
w===$&&C.b()
v=A.aS(w,k,d*16)
u=i.b
t=i.a
if(t===0)return
if(l.c9===1){if(d>0){w=l.e
w===$&&C.b()
j.toString
w.Wl(v,j,t+4)}if(i.c){w=l.e
w===$&&C.b()
j.toString
w.af5(v,j,t)}if(e>0){w=l.e
w===$&&C.b()
j.toString
w.Wm(v,j,t+4)}if(i.c){i=l.e
i===$&&C.b()
j.toString
i.af6(v,j,t)}}else{s=l.R8
w=l.p2
w===$&&C.b()
r=d*8
q=A.aS(w,k,r)
w=l.p3
w===$&&C.b()
p=A.aS(w,k,r)
o=i.d
if(d>0){w=l.e
w===$&&C.b()
j.toString
r=t+4
w.u7(v,1,j,16,r,u,o)
s.toString
w.u7(q,1,s,8,r,u,o)
w.u7(p,1,s,8,r,u,o)}if(i.c){w=l.e
w===$&&C.b()
j.toString
w.aEA(v,j,t,u,o)
s.toString
n=A.aS(q,k,4)
m=A.aS(p,k,4)
w.u6(n,1,s,8,t,u,o)
w.u6(m,1,s,8,t,u,o)}if(e>0){w=l.e
w===$&&C.b()
j.toString
r=t+4
w.u7(v,j,1,16,r,u,o)
s.toString
w.u7(q,s,1,8,r,u,o)
w.u7(p,s,1,8,r,u,o)}if(i.c){i=l.e
i===$&&C.b()
j.toString
i.aLc(v,j,t,u,o)
s.toString
w=4*s
n=A.aS(q,k,w)
m=A.aS(p,k,w)
i.u6(n,s,1,8,t,u,o)
i.u6(m,s,1,8,t,u,o)}}},
aoY(){var w,v=this,u=v.ay
u===$&&C.b()
w=u
while(!0){u=v.CW
u.toString
if(!(w<u))break
v.aoa(w,v.y2);++w}},
apc(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.c9
d.toString
w=B.ns[d]
d=f.p4
d.toString
v=w*d
d=f.R8
d.toString
u=(w/2|0)*d
d=f.p1
d===$&&C.b()
t=-v
s=A.aS(d,e,t)
d=f.p2
d===$&&C.b()
r=-u
q=A.aS(d,e,r)
d=f.p3
d===$&&C.b()
p=A.aS(d,e,r)
o=f.y2
d=f.cx
d.toString
n=o*16
m=(o+1)*16
if(a0)f.aoY()
if(o!==0){n-=w
f.to=A.aS(s,e,0)
f.x1=A.aS(q,e,0)
f.x2=A.aS(p,e,0)}else{f.to=A.aS(f.p1,e,0)
f.x1=A.aS(f.p2,e,0)
f.x2=A.aS(f.p3,e,0)}d=o<d-1
if(d)m-=w
l=f.as
l.toString
if(m>l)m=l
f.xr=null
if(f.cb!=null&&n<m){l=f.xr=f.anL(n,m-n)
if(l==null)return!1}else l=e
k=f.Q
k.toString
if(n<k){j=k-n
i=f.to
i===$&&C.b()
h=i.d
g=f.p4
g.toString
i.d=h+g*j
g=f.x1
g===$&&C.b()
h=g.d
i=f.R8
i.toString
i*=D.b.G(j,1)
g.d=h+i
h=f.x2
h===$&&C.b()
h.d+=i
if(l!=null)l.d=l.d+f.b.a*j
n=k}if(n<m){i=f.to
i===$&&C.b()
h=i.d
g=f.y
g===$&&C.b()
i.d=h+g
h=f.x1
h===$&&C.b()
i=g>>>1
h.d=h.d+i
h=f.x2
h===$&&C.b()
h.d+=i
if(l!=null)l.d+=g
l=f.z
l===$&&C.b()
f.awt(0,n-k,l-g,m-n)}if(d){d=f.p1
l=f.p4
l.toString
d.lw(t,v,s,16*l)
l=f.p2
t=f.R8
t.toString
l.lw(r,u,q,8*t)
t=f.p3
l=f.R8
l.toString
t.lw(r,u,p,8*l)}return!0},
awt(d,e,f,g){if(f<=0||g<=0)return!1
this.aov(e,f,g)
this.aou(e,f,g)
return!0},
MI(d){var w
if((d&-4194304)>>>0===0)w=D.b.G(d,14)
else w=d<0?0:255
return w},
EM(d,e,f,g){var w=19077*d
g.l(0,0,this.MI(w+26149*f+-3644112))
g.l(0,1,this.MI(w-6419*e-13320*f+2229552))
g.l(0,2,this.MI(w+33050*e+-4527440))},
Ew(a7,a8,a9,b0,b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=new A.azm(),a2=b5-1,a3=D.b.G(a2,1),a4=a1.$2(a9.a[a9.d],b0.a[b0.d]),a5=a1.$2(b1.a[b1.d],b2.a[b2.d]),a6=D.b.G(3*a4+a5+131074,2)
d.EM(a7.a[a7.d],a6&255,a6>>>16,b3)
b3.l(0,3,255)
w=a8!=null
if(w){a6=D.b.G(3*a5+a4+131074,2)
v=a8.a[a8.d]
b4.toString
d.EM(v,a6&255,a6>>>16,b4)
b4.l(0,3,255)}for(u=1;u<=a3;++u,a5=s,a4=t){t=a1.$2(a9.a[a9.d+u],b0.a[b0.d+u])
s=a1.$2(b1.a[b1.d+u],b2.a[b2.d+u])
r=a4+t+a5+s+524296
q=D.b.G(r+2*(t+a5),3)
p=D.b.G(r+2*(a4+s),3)
a6=D.b.G(q+a4,1)
o=D.b.G(p+t,1)
v=2*u
n=v-1
m=a7.a
l=a7.d
k=m[l+n]
j=a6&255
i=a6>>>16
h=n*4
g=A.aS(b3,a0,h)
k=19077*k
f=k+26149*i+-3644112
if((f&-4194304)>>>0===0)e=D.b.G(f,14)
else e=f<0?0:255
f=g.a
g=g.d
f[g]=e
i=k-6419*j-13320*i+2229552
if((i&-4194304)>>>0===0)e=D.b.G(i,14)
else e=i<0?0:255
f[g+1]=e
k=k+33050*j+-4527440
if((k&-4194304)>>>0===0)e=D.b.G(k,14)
else e=k<0?0:255
f[g+2]=e
f[g+3]=255
k=v-0
l=m[l+k]
m=o&255
j=o>>>16
k=A.aS(b3,a0,k*4)
l=19077*l
i=l+26149*j+-3644112
if((i&-4194304)>>>0===0)e=D.b.G(i,14)
else e=i<0?0:255
i=k.a
k=k.d
i[k]=e
j=l-6419*m-13320*j+2229552
if((j&-4194304)>>>0===0)e=D.b.G(j,14)
else e=j<0?0:255
i[k+1]=e
m=l+33050*m+-4527440
if((m&-4194304)>>>0===0)e=D.b.G(m,14)
else e=m<0?0:255
i[k+2]=e
i[k+3]=255
if(w){a6=D.b.G(p+a5,1)
o=D.b.G(q+s,1)
m=a8.a
l=a8.d
n=m[l+n]
k=a6&255
j=a6>>>16
b4.toString
h=A.aS(b4,a0,h)
n=19077*n
i=n+26149*j+-3644112
if((i&-4194304)>>>0===0)e=D.b.G(i,14)
else e=i<0?0:255
i=h.a
h=h.d
i[h]=e
j=n-6419*k-13320*j+2229552
if((j&-4194304)>>>0===0)e=D.b.G(j,14)
else e=j<0?0:255
i[h+1]=e
n=n+33050*k+-4527440
if((n&-4194304)>>>0===0)e=D.b.G(n,14)
else e=n<0?0:255
i[h+2]=e
i[h+3]=255
n=m[l+v]
m=o&255
l=o>>>16
v=A.aS(b4,a0,v*4)
n=19077*n
k=n+26149*l+-3644112
if((k&-4194304)>>>0===0)e=D.b.G(k,14)
else e=k<0?0:255
k=v.a
v=v.d
k[v]=e
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)e=D.b.G(l,14)
else e=l<0?0:255
k[v+1]=e
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)e=D.b.G(n,14)
else e=n<0?0:255
k[v+2]=e
k[v+3]=255}}if((b5&1)===0){a6=D.b.G(3*a4+a5+131074,2)
v=a7.a[a7.d+a2]
n=a2*4
m=A.aS(b3,a0,n)
d.EM(v,a6&255,a6>>>16,m)
m.l(0,3,255)
if(w){a6=D.b.G(3*a5+a4+131074,2)
a2=a8.a[a8.d+a2]
b4.toString
n=A.aS(b4,a0,n)
d.EM(a2,a6&255,a6>>>16,n)
n.l(0,3,255)}}},
aou(d,e,f){var w,v,u,t,s,r,q,p,o=this,n=o.xr
if(n==null)return
w=A.aS(n,null,0)
if(d===0){v=f-1
u=d}else{u=d-1
w.d=w.d-o.b.a
v=f}n=o.Q
n.toString
t=o.as
if(n+d+f===t){t.toString
v=t-n-u}for(n=o.b,s=0;s<v;++s){for(t=s+u,r=0;r<e;++r){q=w.a[w.d+r]
p=o.d.a
p=p==null?null:p.ee(r,t,null);(p==null?new A.eN():p).sav(0,q)}w.d=w.d+n.a}},
aov(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=k.b,g=A.br(C.bE(i.giF(i),0,j),!1,j,d*h.a*4)
i=k.to
i===$&&C.b()
w=A.aS(i,j,0)
i=k.x1
i===$&&C.b()
v=A.aS(i,j,0)
i=k.x2
i===$&&C.b()
u=A.aS(i,j,0)
t=d+f
s=D.b.G(e+1,1)
r=h.a*4
h=k.rx
h===$&&C.b()
q=A.aS(h,j,0)
h=k.ry
h===$&&C.b()
p=A.aS(h,j,0)
if(d===0){k.Ew(w,j,v,u,v,u,g,j,e)
o=f}else{i=k.RG
i===$&&C.b()
k.Ew(i,w,q,p,v,u,A.aS(g,j,-r),g,e)
o=f+1}q.a=v.a
p.a=u.a
for(i=2*r,h=-r,n=d;n+=2,n<t;){q.d=v.d
p.d=u.d
m=v.d
l=k.R8
l.toString
v.d=m+l
u.d+=l
g.d+=i
l=w.d
m=k.p4
m.toString
w.d=l+2*m
k.Ew(A.aS(w,j,-m),w,q,p,v,u,A.aS(g,j,h),g,e)}i=w.d
h=k.p4
h.toString
w.d=i+h
i=k.Q
i.toString
h=k.as
h.toString
if(i+t<h){i=k.RG
i===$&&C.b()
i.q9(0,e,w)
k.rx.q9(0,s,v)
k.ry.q9(0,s,u);--o}else if((t&1)===0)k.Ew(w,j,v,u,v,u,A.aS(g,j,r),j,e)
return o},
anL(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.b,l=m.a,k=m.b
if(d<0||e<=0||d+e>k)return n
if(d===0){m=l*k
o.bB=new Uint8Array(m)
w=o.cb
v=new A.azu(w,l,k)
u=w.b1()
v.d=u&3
v.e=D.b.G(u,2)&3
v.f=D.b.G(u,4)&3
v.r=D.b.G(u,6)&3
if(v.gd3()){t=v.d
if(t===0){if(w.c-w.d<m)v.r=1}else if(t===1){s=new A.a2o(B.ii,C.a([],x.J))
s.a=l
s.b=k
m=C.a([],x.A)
t=C.a([],x.F)
r=new Uint32Array(2)
q=new A.a25(w,r)
r=q.d=C.bE(r.buffer,0,n)
r[0]=w.b1()
r[1]=w.b1()
r[2]=w.b1()
r[3]=w.b1()
r[4]=w.b1()
r[5]=w.b1()
r[6]=w.b1()
r[7]=w.b1()
t=new A.UO(q,s,m,t)
t.db=l
v.x=t
t.xp(l,k,!0)
m=v.x
w=m.ax
if(w.length===1&&w[0].a===B.Ng&&m.atm()){v.y=!0
m=v.x
w=m.c
p=w.a*w.b
m.cx=0
w=D.b.cq(p,4)
w=new Uint8Array(p+(4-w))
m.CW=w
m.ch=C.hF(w.buffer,0,n)}else{v.y=!1
v.x.XF()}}else v.r=1}o.ca=v}m=o.ca
m===$&&C.b()
if(!m.w){w=o.bB
w===$&&C.b()
if(!m.S8(0,d,e,w))return n}m=o.bB
m===$&&C.b()
return A.br(m,!1,n,d*l)},
avG(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a2.fr.b,a4=a2.k1
a4===$&&C.b()
w=a2.dy[a4]
a4=a2.cZ
a4===$&&C.b()
v=a4[a2.y1]
u=A.br(v.a,!1,null,0)
a4=a2.k3
a4===$&&C.b()
t=a4[0]
u.aGY(0,u.c-u.d,0)
a4=v.b
a4===$&&C.b()
if(!a4){s=A.br(new Int16Array(16),!1,null,0)
a4=a5.b
r=t.b
q=a2.NG(a6,a3[1],a4+r,w.b,0,s)
a5.b=t.b=q>0?1:0
if(q>1)a2.azm(s,u)
else{p=D.b.G(s.a[s.d]+3,3)
for(a4=u.a,r=u.d,o=0;o<256;o+=16)a4[r+o]=p}n=a3[0]
m=1}else{n=a3[3]
m=0}l=a5.a&15
k=t.a&15
for(j=0,i=0;i<4;++i){h=k&1
for(g=0,f=0;f<4;++f){q=a2.NG(a6,n,h+(l&1),w.a,m,u)
h=q>m?1:0
l=l>>>1|h<<7
a4=u.a
r=u.d
a4=a4[r]!==0?1:0
if(q>3)a4=3
else if(q>1)a4=2
g=g<<2|a4
u.d=r+16}l=l>>>4
k=k>>>1|h<<7
j=(j<<8|g)>>>0}e=k>>>4
for(d=l,a0=0,a1=0;a1<4;a1+=2){a4=4+a1
l=D.b.e6(a5.a,a4)
k=D.b.e6(t.a,a4)
for(g=0,i=0;i<2;++i){h=k&1
for(f=0;f<2;++f){q=a2.NG(a6,a3[2],h+(l&1),w.c,0,u)
h=q>0?1:0
l=l>>>1|h<<3
a4=u.a
r=u.d
a4=a4[r]!==0?1:0
if(q>3)a4=3
else if(q>1)a4=2
g=(g<<2|a4)>>>0
u.d=r+16}l=l>>>2
k=k>>>1|h<<5}a0=(a0|D.b.cj(g,4*a1))>>>0
d=(d|D.b.cj(l<<4>>>0,a1))>>>0
e=(e|D.b.cj(k&240,a1))>>>0}a5.a=d
t.a=e
v.e=j
v.f=a0
if((a0&43690)===0)w.toString
return(j|a0)>>>0===0},
azm(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new Int32Array(16)
for(w=d.a,v=d.d,u=0;u<4;++u){t=w[v+u]
s=12+u
r=w[v+s]
q=t+r
p=4+u
o=w[v+p]
n=8+u
m=w[v+n]
l=o+m
k=o-m
j=t-r
g[u]=q+l
g[n]=q-l
g[p]=j+k
g[s]=j-k}for(w=e.a,v=e.d,i=0,u=0;u<4;++u){t=u*4
h=g[t]+3
s=g[3+t]
q=h+s
r=g[1+t]
t=g[2+t]
l=r+t
k=r-t
j=h-s
w[v+i]=D.b.G(q+l,3)
w[v+(i+16)]=D.b.G(j+k,3)
w[v+(i+32)]=D.b.G(q-l,3)
w[v+(i+48)]=D.b.G(j-k,3)
i+=64}},
apI(d,e){var w,v,u,t,s,r
if(d.ed(e[3])===0)w=d.ed(e[4])===0?2:3+d.ed(e[5])
else if(d.ed(e[6])===0)w=d.ed(e[7])===0?5+d.ed(159):7+2*d.ed(165)+d.ed(145)
else{v=d.ed(e[8])
u=2*v+d.ed(e[9+v])
t=B.a9s[u]
s=t.length
for(w=0,r=0;r<s;++r)w+=w+d.ed(t[r])
w+=3+D.b.cj(8,u)}return w},
NG(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e[h].a[f]
for(;h<16;h=w){if(d.ed(o[0])===0)return h
for(;d.ed(o[1])===0;){++h
o=e[B.wZ[h]].a[0]
if(h===16)return 16}w=h+1
v=e[B.wZ[w]].a
if(d.ed(o[2])===0){o=v[1]
u=1}else{u=this.apI(d,o)
o=v[2]}t=B.a7H[h]
s=d.b
s===$&&C.b()
r=d.XR(D.b.G(s,1))
s=d.b
q=B.ww[s]
d.b=B.xY[s]
s=d.d
s===$&&C.b()
d.d=s-q
s=r!==0?-u:u
p=g[h>0?1:0]
i.a[i.d+t]=s*p}return 16},
avA(){var w,v,u,t,s,r,q,p,o,n=this,m=n.y1,l=4*m,k=n.go,j=n.id,i=n.cZ
i===$&&C.b()
w=i[m]
m=n.c
m===$&&C.b()
m=m.ed(145)===0
w.b=m
if(!m){if(n.c.ed(156)!==0)v=n.c.ed(128)!==0?1:3
else v=n.c.ed(163)!==0?2:0
w.c[0]=v
k.toString
D.x.hT(k,l,l+4,v)
D.x.hT(j,0,4,v)}else{u=w.c
for(t=0,s=0;s<4;++s,t=o){v=j[s]
for(r=0;r<4;++r){m=l+r
q=B.a6V[k[m]][v]
p=B.A7[n.c.ed(q[0])]
for(;p>0;)p=B.A7[2*p+n.c.ed(q[p])]
v=-p
k[m]=v}o=t+4
k.toString
D.x.bO(u,t,o,k,l)
j[s]=v}}if(n.c.ed(142)===0)m=0
else if(n.c.ed(114)===0)m=2
else m=n.c.ed(183)!==0?1:3
w.d=m}}
A.IW.prototype={
c2(d){var w,v
for(w=0;v=d-1,d>0;d=v)w=(w|D.b.cW(this.ed(128),v))>>>0
return w},
wD(d){var w=this.c2(d)
return this.c2(1)===1?-w:w},
ed(d){var w,v=this,u=v.b
u===$&&C.b()
w=v.XR(D.b.G(u*d,8))
if(v.b<=126)v.ayp()
return w},
XR(d){var w,v,u,t,s,r=this,q=r.d
q===$&&C.b()
if(q<0){w=r.a
v=w.c
u=w.d
if(v-u>=1){t=w.b1()
q=r.c
q===$&&C.b()
r.c=(t|q<<8)>>>0
q=r.d+8
r.d=q
s=q}else{if(u<v){q=w.b1()
w=r.c
w===$&&C.b()
r.c=(q|w<<8)>>>0
w=r.d+8
r.d=w
q=w}else if(!r.e){w=r.c
w===$&&C.b()
r.c=w<<8>>>0
q+=8
r.d=q
r.e=!0}s=q}}else s=q
q=r.c
q===$&&C.b()
if(D.b.kT(q,s)>d){w=r.b
w===$&&C.b()
v=d+1
r.b=w-v
r.c=q-D.b.cW(v,s)
return 1}else{r.b=d
return 0}},
ayp(){var w,v=this,u=v.b
u===$&&C.b()
w=B.ww[u]
v.b=B.xY[u]
u=v.d
u===$&&C.b()
v.d=u-w}}
A.aza.prototype={
Wm(d,e,f){var w,v=A.aS(d,null,0)
for(w=0;w<16;++w){v.d=d.d+w
if(this.a0j(v,e,f))this.D5(v,e)}},
Wl(d,e,f){var w,v=A.aS(d,null,0)
for(w=0;w<16;++w){v.d=d.d+w*e
if(this.a0j(v,1,f))this.D5(v,1)}},
af6(d,e,f){var w,v,u=A.aS(d,null,0)
for(w=4*e,v=3;v>0;--v){u.d+=w
this.Wm(u,e,f)}},
af5(d,e,f){var w,v=A.aS(d,null,0)
for(w=3;w>0;--w){v.d+=4
this.Wl(v,e,f)}},
aLc(d,e,f,g,h){var w,v,u=A.aS(d,null,0)
for(w=4*e,v=3;v>0;--v){u.d+=w
this.u6(u,e,1,16,f,g,h)}},
aEA(d,e,f,g,h){var w,v=A.aS(d,null,0)
for(w=3;w>0;--w){v.d+=4
this.u6(v,1,e,16,f,g,h)}},
u7(a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=A.aS(a4,null,0)
for(w=-3*a5,v=-2*a5,u=-a5,t=2*a5;s=a7-1,a7>0;a7=s){if(this.a0k(a3,a5,a8,a9))if(this.a_y(a3,a5,b0))this.D5(a3,a5)
else{r=a3.a
q=a3.d
p=q+w
o=r[p]
n=q+v
m=r[n]
l=q+u
k=r[l]
j=r[q]
i=q+a5
h=r[i]
g=q+t
f=r[g]
e=$.aK8()
d=e[1020+3*(j-k)+e[1020+m-h]]
e=D.b.G(27*d+63,7)
a0=(e&2147483647)-((e&2147483648)>>>0)
e=D.b.G(18*d+63,7)
a1=(e&2147483647)-((e&2147483648)>>>0)
e=D.b.G(9*d+63,7)
a2=(e&2147483647)-((e&2147483648)>>>0)
e=$.BE()
r[p]=e[255+o+a2]
r[n]=e[255+m+a1]
r[l]=e[255+k+a0]
r[q]=e[255+j-a0]
r[i]=e[255+h-a1]
r[g]=e[255+f-a2]}a3.d+=a6}},
u6(d,a0,a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=A.aS(d,null,0)
for(w=-2*a0,v=-a0;u=a2-1,a2>0;a2=u){if(this.a0k(e,a0,a3,a4))if(this.a_y(e,a0,a5))this.D5(e,a0)
else{t=e.a
s=e.d
r=s+w
q=t[r]
p=s+v
o=t[p]
n=t[s]
m=s+a0
l=t[m]
k=3*(n-o)
j=$.ae4()
i=D.b.G(k+4,3)
h=j[112+((i&2147483647)-((i&2147483648)>>>0))]
i=D.b.G(k+3,3)
g=j[112+((i&2147483647)-((i&2147483648)>>>0))]
i=D.b.G(h+1,1)
f=(i&2147483647)-((i&2147483648)>>>0)
i=$.BE()
t[r]=i[255+q+f]
t[p]=i[255+o+g]
t[s]=i[255+n-h]
t[m]=i[255+l-f]}e.d+=a1}},
D5(d,e){var w,v,u,t=d.a,s=d.d,r=t[s+-2*e],q=-e,p=t[s+q],o=t[s]
s=t[s+e]
w=3*(o-p)+$.aK8()[1020+r-s]
v=$.ae4()[112+D.b.h5(D.b.G(w+4,3),32)]
u=$.ae4()[112+D.b.h5(D.b.G(w+3,3),32)]
d.l(0,q,$.BE()[255+p+u])
d.l(0,0,$.BE()[255+o-v])},
a_y(d,e,f){var w=d.a,v=d.d,u=w[v+-2*e],t=w[v+-e],s=w[v]
v=w[v+e]
w=$.ae3()
return w[255+u-t]>f||w[255+v-s]>f},
a0j(d,e,f){var w=d.a,v=d.d,u=w[v+-2*e],t=w[v+-e],s=w[v]
v=w[v+e]
return 2*$.ae3()[255+t-s]+$.aK7()[255+u-v]<=f},
a0k(d,e,f,g){var w,v=d.a,u=d.d,t=v[u+-4*e],s=v[u+-3*e],r=v[u+-2*e],q=v[u+-e],p=v[u],o=v[u+e],n=v[u+2*e]
u=v[u+3*e]
v=$.ae3()
w=255+r
if(2*v[255+q-p]+$.aK7()[w-o]>f)return!1
return v[255+t-s]<=g&&v[255+s-r]<=g&&v[w-q]<=g&&v[255+u-n]<=g&&v[255+n-o]<=g&&v[255+o-p]<=g},
nS(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new Int32Array(16)
for(w=d.a,v=d.d,u=0,t=0,s=0;s<4;++s){r=w[v+u]
q=w[v+(u+8)]
p=r+q
o=r-q
q=w[v+(u+4)]
r=D.b.G(q*35468,16)
n=w[v+(u+12)]
m=D.b.G(n*85627,16)
l=(r&2147483647)-((r&2147483648)>>>0)-((m&2147483647)-((m&2147483648)>>>0))
q=D.b.G(q*85627,16)
n=D.b.G(n*35468,16)
k=(q&2147483647)-((q&2147483648)>>>0)+((n&2147483647)-((n&2147483648)>>>0))
j=t+1
g[t]=p+k
t=j+1
g[j]=o+l
j=t+1
g[t]=o-l
t=j+1
g[j]=p-k;++u}for(i=0,t=0,s=0;s<4;++s){h=g[t]+4
w=g[t+8]
p=h+w
o=h-w
w=g[t+4]
v=D.b.G(w*35468,16)
r=g[t+12]
q=D.b.G(r*85627,16)
l=(v&2147483647)-((v&2147483648)>>>0)-((q&2147483647)-((q&2147483648)>>>0))
w=D.b.G(w*85627,16)
r=D.b.G(r*35468,16)
k=(w&2147483647)-((w&2147483648)>>>0)+((r&2147483647)-((r&2147483648)>>>0))
A.qS(e,i,0,0,p+k)
A.qS(e,i,1,0,o+l)
A.qS(e,i,2,0,o-l)
A.qS(e,i,3,0,p-k);++t
i+=32}},
aKR(d,e,f,g){this.nS(e,f)
if(g)this.nS(A.aS(e,null,16),A.aS(f,null,4))},
BL(d,e){var w,v,u=d.a[d.d]+4
for(w=0;w<4;++w)for(v=0;v<4;++v)A.qS(e,0,v,w,u)},
aaW(d,e){var w=this,v=null
if(d.a[d.d]!==0)w.BL(d,e)
if(d.a[d.d+16]!==0)w.BL(A.aS(d,v,16),A.aS(e,v,4))
if(d.a[d.d+32]!==0)w.BL(A.aS(d,v,32),A.aS(e,v,128))
if(d.a[d.d+48]!==0)w.BL(A.aS(d,v,48),A.aS(e,v,132))}}
A.azf.prototype={}
A.azj.prototype={}
A.azl.prototype={}
A.IV.prototype={}
A.azk.prototype={}
A.azb.prototype={}
A.vk.prototype={}
A.a27.prototype={}
A.a29.prototype={}
A.a28.prototype={}
A.a2a.prototype={}
A.IX.prototype={
z6(){var w,v=this.b
if(v.eH(8)!==47)return!1
w=this.c
w.f=B.ln
w.a=v.eH(14)+1
w.b=v.eH(14)+1
w.d=v.eH(1)!==0
if(v.eH(3)!==0)return!1
return!0},
ow(d){var w,v,u,t=this,s=null
t.e=0
if(!t.z6())return s
w=t.c
t.xp(w.a,w.b,!0)
t.XF()
v=w.a
t.d=A.dY(s,s,B.H,0,B.ae,w.b,s,0,4,s,v,!1)
v=t.ch
v.toString
u=w.a
w=w.b
if(!t.N7(v,u,w,w,t.gawo()))return s
return t.d},
XF(){var w,v=this,u=v.c,t=u.a
u=t*u.b+t
w=new Uint32Array(u+t*16)
v.ch=w
v.CW=C.bE(w.buffer,0,null)
v.cx=u
return!0},
awR(d){var w,v,u,t=this,s=t.b,r=s.eH(2),q=t.ay,p=D.b.cj(1,r)
if((q&p)>>>0!==0)return!1
t.ay=(q|p)>>>0
w=new A.a26(B.Nf)
t.ax.push(w)
q=B.a93[r]
w.a=q
w.b=d[0]
w.c=d[1]
switch(q.a){case 0:case 1:s=s.eH(3)+2
w.e=s
w.d=t.xp(A.qT(w.b,s),A.qT(w.c,w.e),!1)
break
case 3:v=s.eH(8)+1
if(v>16)u=0
else if(v>4)u=1
else{s=v>2?2:3
u=s}d[0]=A.qT(w.b,u)
w.e=u
w.d=t.xp(v,1,!1)
t.aoO(v,w)
break
case 2:break
default:throw C.c(A.aG("Invalid WebP transform type: "+r))}return!0},
xp(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(f){for(w=o.b,v=x.t,u=e,t=d;w.eH(1)!==0;){s=C.a([t,u],v)
if(!o.awR(s))throw C.c(A.aG("Invalid Transform"))
t=s[0]
u=s[1]}f=!0}else{u=e
t=d}w=o.b
if(w.eH(1)!==0){r=w.eH(4)
if(!(r>=1&&r<=11))throw C.c(A.aG("Invalid Color Cache"))}else r=0
if(!o.awG(t,u,r,f))throw C.c(A.aG("Invalid Huffman Codes"))
if(r>0){w=D.b.cj(1,r)
o.r=w
o.w=new A.azg(new Uint32Array(w),32-r)}else o.r=0
w=o.c
w.a=t
w.b=u
q=o.y
o.z=A.qT(t,q)
o.x=q===0?4294967295:D.b.cj(1,q)-1
if(f){o.e=0
return null}p=new Uint32Array(t*u)
if(!o.N7(p,t,u,u,null))throw C.c(A.aG("Failed to decode image data."))
o.e=0
return p},
N7(a5,a6,a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e,d=D.b.f_(e,a6),a0=D.b.cq(e,a6),a1=f.ZH(a0,d),a2=f.e,a3=a6*a7,a4=a6*a8
e=f.r
w=280+e
v=e>0?f.w:null
u=f.x
e=f.b
t=a9!=null
s=a2
while(!0){r=e.b
q=r.c
if(!(!(r.d>=q&&e.a>=64)&&a2<a4))break
if((a0&u)>>>0===0){p=f.xC(f.Q,f.z,f.y,a0,d)
a1=f.at[p]}if(e.a>=32)e.r5()
r=a1.a
o=r[0].qk(e)
if(o<256){n=r[1].qk(e)
if(e.a>=32)e.r5()
a5[a2]=A.aZY(r[2].qk(e),o,n,r[3].qk(e));++a2;++a0
if(a0>=a6){++d
if(D.b.cq(d,16)===0&&t)a9.$1(d)
if(v!=null)for(r=v.b,q=v.a;s<a2;){m=a5[s]
q[D.b.de(m*506832829>>>0,r)]=m;++s}a0=0}}else if(o<280){l=f.De(o-256)
k=r[4].qk(e)
if(e.a>=32)e.r5()
j=f.a0N(a6,f.De(k))
if(a2<j||a3-a2<l)return!1
else{i=a2-j
for(h=0;h<l;++h)a5[a2+h]=a5[i+h]
a2+=l}a0+=l
for(;a0>=a6;){a0-=a6;++d
if(D.b.cq(d,16)===0&&t)a9.$1(d)}if(a2<a4){if((a0&u)>>>0!==0){p=f.xC(f.Q,f.z,f.y,a0,d)
a1=f.at[p]}if(v!=null)for(r=v.b,q=v.a;s<a2;){m=a5[s]
q[D.b.de(m*506832829>>>0,r)]=m;++s}}}else if(o<w){for(;s<a2;){r=a5[s]
g=D.b.de(r*506832829>>>0,v.b)
v.a[g]=r;++s}r=v.a
a5[a2]=r[o-280];++a2;++a0
if(a0>=a6){++d
if(D.b.cq(d,16)===0&&t)a9.$1(d)
for(q=v.b;s<a2;){m=a5[s]
r[D.b.de(m*506832829>>>0,q)]=m;++s}a0=0}}else return!1}if(t)a9.$1(d)
if(r.d>=q&&e.a>=64&&a2<a3)return!1
f.e=a2
return!0},
atm(){var w,v,u,t
if(this.r>0)return!1
for(w=this.as,v=this.at,u=0;u<w;++u){t=v[u].a
if(t[1].f>1)return!1
if(t[2].f>1)return!1
if(t[3].f>1)return!1}return!0},
aoT(d){var w,v,u,t,s,r,q,p=this,o=p.f,n=d-o
if(n<=0)return
w=p.c
p.XK(n,w.a*o)
v=w.a
u=v*n
t=v*p.f
w=p.ch
w.toString
o=p.cx
o.toString
s=A.br(w,!1,null,o)
for(o=p.cy,w=s.a,r=s.d,q=0;q<u;++q){o.toString
o[t+q]=D.b.G(w[r+q],8)&255}p.f=d},
anr(d,e,f){var w,v,u,t,s,r,q,p,o=this,n=o.e,m=D.b.f_(n,d),l=D.b.cq(n,d),k=o.ZH(l,m),j=o.e,i=d*e,h=d*f,g=o.x
n=o.b
while(!0){w=n.b
if(!(!(w.d>=w.c&&n.a>=64)&&j<h))break
if((l&g)>>>0===0){v=o.xC(o.Q,o.z,o.y,l,m)
k=o.at[v]}if(n.a>=32)n.r5()
w=k.a
u=w[0].qk(n)
if(u<256){w=o.CW
w===$&&C.b()
w[j]=u;++j;++l
if(l>=d){++m
if(D.b.cq(m,16)===0)o.Nu(m)
l=0}}else if(u<280){t=o.De(u-256)
s=w[4].qk(n)
if(n.a>=32)n.r5()
r=o.a0N(d,o.De(s))
if(j>=r&&i-j>=t)for(w=o.CW,q=0;q<t;++q){w===$&&C.b()
p=j+q
w[p]=w[p-r]}else{o.e=j
return!0}j+=t
l+=t
for(;l>=d;){l-=d;++m
if(D.b.cq(m,16)===0)o.Nu(m)}if(j<h&&(l&g)>>>0!==0){v=o.xC(o.Q,o.z,o.y,l,m)
k=o.at[v]}}else return!1}o.Nu(m)
o.e=j
return!0},
Nu(d){var w,v,u,t=this,s=t.f,r=d-s,q=t.CW
q===$&&C.b()
w=A.br(q,!1,null,t.c.a*s)
if(r>0){v=t.f
s=t.cy
s.toString
q=t.db
q.toString
u=A.br(s,!1,null,q*v)
t.ax[0].aC0(v,v+r,w,u)}t.f=d},
awp(d){var w,v,u,t,s,r=this,q=r.c,p=q.a,o=r.f,n=d-o
if(n<=0)return
r.XK(n,p*o)
p=r.cx
p.toString
w=r.f
v=p
u=0
for(;u<n;++u,++w)for(t=0;t<q.a;++t,++v){s=r.ch[v]
p=r.d.a
if(p!=null)p.fP(t,w,s>>>16&255,s>>>8&255,s&255,s>>>24&255)}r.f=d},
XK(d,e){var w,v,u,t=this,s=t.ax,r=s.length,q=t.c.a,p=t.f,o=p+d,n=t.cx
n.toString
w=t.ch
w.toString
D.bu.bO(w,n,n+q*d,w,e)
for(v=e;u=r-1,r>0;v=n,r=u){q=s[u]
w=t.ch
w.toString
q.aG1(p,o,w,v,w,n)}},
awG(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(g&&j.b.eH(1)!==0){w=j.b.eH(3)+2
v=A.qT(d,w)
u=A.qT(e,w)
t=v*u
s=j.xp(v,u,!1)
j.y=w
for(r=1,q=0;q<t;++q){p=s[q]>>>8&65535
s[q]=p
if(p>=r)r=p+1}}else{s=null
r=1}o=J.i5(r,x.f)
for(n=0;n<r;++n)o[n]=A.b5a()
for(m=f>0,q=0;q<r;++q)for(l=0;l<5;++l){k=B.ZK[l]
if(l===0&&m)k+=D.b.cj(1,f)
if(!j.awE(k,o[q].a[l]))return!1}j.Q=s
j.as=r
j.at=o
return!0},
awE(d,e){var w,v,u,t,s,r,q,p,o,n=this.b
if(n.eH(1)!==0){w=x.t
v=C.a([0,0],w)
u=C.a([0,0],w)
t=C.a([0,0],w)
s=n.eH(1)+1
v[0]=n.eH(n.eH(1)===0?1:8)
u[0]=0
w=s-1
t[0]=w
if(s===2){v[1]=n.eH(8)
u[1]=1
t[1]=w}r=e.aBr(t,u,v,d,s)}else{q=new Int32Array(19)
p=n.eH(4)+4
if(p>19)return!1
t=new Int32Array(d)
for(o=0;o<p;++o)q[B.a4j[o]]=n.eH(3)
r=this.awF(q,d,t)
if(r)r=e.a4C(t,d)}return r},
awF(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=A.aSA()
if(!j.a4C(d,19))return!1
w=this.b
if(w.eH(1)!==0){v=2+w.eH(2+2*w.eH(3))
if(v>e)return!1}else v=e
for(u=0,t=8;u<e;v=s){s=v-1
if(v===0)break
if(w.a>=32)w.r5()
r=j.qk(w)
if(r<16){q=u+1
f[u]=r
if(r!==0)t=r
u=q}else{p=r-16
o=B.X5[p]
n=B.Xg[p]
m=w.eH(o)+n
if(u+m>e)return!1
else{l=r===16?t:0
for(;k=m-1,m>0;m=k,u=q){q=u+1
f[u]=l}}}}return!0},
De(d){var w
if(d<4)return d+1
w=D.b.G(d-2,1)
return D.b.cj(2+(d&1),w)+this.b.eH(w)+1},
a0N(d,e){var w,v
if(e>120)return e-120
else{w=B.aaQ[e-1]
v=(w>>>4)*d+(8-(w&15))
return v>=1?v:1}},
aoO(d,e){var w,v,u=D.b.cj(1,D.b.e6(8,e.e)),t=new Uint32Array(u),s=C.bE(e.d.buffer,0,null),r=C.bE(t.buffer,0,null)
t[0]=e.d[0]
w=4*d
for(v=4;v<w;++v)r[v]=s[v]+r[v-4]&255
for(w=4*u;v<w;++v)r[v]=0
e.d=t
return!0},
xC(d,e,f,g,h){if(f===0)return 0
d.toString
return d[e*D.b.G(h,f)+D.b.G(g,f)]},
ZH(d,e){var w=this,v=w.xC(w.Q,w.z,w.y,d,e)
return w.at[v]}}
A.UO.prototype={
aE5(d){return this.aoT(d)}}
A.a25.prototype={
a9D(){var w,v,u=this.a
if(u<32){w=this.c
v=D.b.de(w[0],u)+((w[1]&B.nJ[u])>>>0)*(B.nJ[32-u]+1)}else{w=this.c
v=u===32?w[1]:D.b.de(w[1],u-32)}return v},
eH(d){var w,v=this,u=v.b
if(!(u.d>=u.c&&v.a>=64)&&d<25){u=v.a9D()
w=B.nJ[d]
v.a+=d
v.r5()
return(u&w)>>>0}else throw C.c(A.aG("Not enough data in input."))},
r5(){var w,v,u,t,s=this,r=s.b,q=s.c,p=r.c
while(!0){w=s.a
if(!(w>=8&&r.d<p))break
v=r.a[r.d++]
u=q[0]
t=q[1]
q[0]=(u>>>8)+(t&255)*16777216
q[1]=t>>>8
q[1]=(q[1]|v*16777216)>>>0
s.a=w-8}}}
A.azg.prototype={}
A.vl.prototype={
P(){return"VP8LImageTransformType."+this.b}}
A.a26.prototype={
aG1(d,e,f,g,h,i){var w,v,u,t,s=this,r=s.b
switch(s.a.a){case 2:s.aAL(h,i,i+(e-d)*r)
break
case 0:s.aIW(d,e,h,i)
if(e!==s.c){w=i-r
D.bu.bO(h,w,w+r,f,i+(e-d-1)*r)}break
case 1:s.aC1(d,e,h,i)
break
case 3:if(g===i&&s.e>0){v=e-d
u=v*A.qT(r,s.e)
t=i+v*r-u
D.bu.bO(h,t,t+u,f,i)
s.a4T(d,e,f,t,h,i)}else s.a4T(d,e,f,g,h,i)
break}},
aC0(d,e,f,g){var w,v,u,t,s,r,q,p=this.e,o=D.b.e6(8,p),n=this.b,m=this.d
if(o<8){w=D.b.cj(1,p)-1
v=D.b.cj(1,o)-1
for(u=d;u<e;++u)for(t=0,s=0;s<n;++s){if((s&w)>>>0===0){p=f.a
r=f.d
t=p[r]
f.d=r+1}p=m[(t&v)>>>0]
r=g.a
q=g.d
r[q]=p>>>8&255
g.d=q+1
t=D.b.G(t,o)}}else for(u=d;u<e;++u)for(s=0;s<n;++s){p=f.a
r=f.d
p=p[r]
f.d=r+1
p=m[p]
r=g.a
q=g.d
r[q]=p>>>8&255
g.d=q+1}},
a4T(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=this.e,o=D.b.e6(8,p),n=this.b,m=this.d
if(o<8){w=D.b.cj(1,p)-1
v=D.b.cj(1,o)-1
for(u=d;u<e;++u)for(t=0,s=0;s<n;++s,i=q){if((s&w)>>>0===0){r=g+1
t=f[g]>>>8&255
g=r}q=i+1
h[i]=m[t&v]
t=D.b.e6(t,o)}}else for(u=d;u<e;++u)for(s=0;s<n;++s,i=q,g=r){q=i+1
r=g+1
h[i]=m[f[g]>>>8&255]}},
aC1(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.b,e=g.e,d=D.b.cj(1,e)-1,a0=A.qT(f,e),a1=D.b.G(a2,g.e)*a0
for(w=a2;w<a3;){e=new Uint8Array(3)
for(v=a1,u=0;u<f;++u){if((u&d)>>>0===0){t=v+1
s=g.d[v]
e[0]=s&255
e[1]=s>>>8&255
e[2]=s>>>16&255
v=t}s=a5+u
r=a4[s]
q=r>>>8&255
p=e[0]
o=$.iA()
o[0]=p
p=$.j2()
n=p[0]
o[0]=q
m=p[0]
l=$.ae7()
l[0]=n*m
k=$.aKa()
j=(r>>>16&255)+(k[0]>>>5)>>>0&255
o[0]=e[1]
n=p[0]
o[0]=q
l[0]=n*p[0]
i=k[0]
o[0]=e[2]
n=p[0]
o[0]=j
l[0]=n*p[0]
h=k[0]
a4[s]=(r&4278255360|j<<16|((r&255)+(i>>>5)>>>0)+(h>>>5)>>>0&255)>>>0}a5+=f;++w
if((w&d)>>>0===0)a1+=a0}},
aIW(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this,m=n.b
if(d===0){A.azh(f,g,4278190080)
for(w=1;w<m;++w){v=g+w
A.azh(f,v,f[v-1])}g+=m;++d}v=n.e
u=D.b.cj(1,v)-1
t=A.qT(m,v)
s=D.b.G(d,n.e)*t
for(r=d;r<e;){A.azh(f,g,f[g-m])
q=s+1
p=$.aWj[n.d[s]>>>8&15]
for(w=1;w<m;++w){if((w&u)>>>0===0){o=q+1
p=$.aWj[n.d[q]>>>8&15]
q=o}v=g+w
A.azh(f,v,p.$3(f,f[v-1],v-m))}g+=m;++r
if((r&u)>>>0===0)s+=t}},
aAL(d,e,f){var w,v,u
for(;e<f;e=u){w=d[e]
v=w>>>8&255
u=e+1
d[e]=(w&4278255360|(w&16711935)+(v<<16|v)&16711935)>>>0}}}
A.azu.prototype={
gd3(){var w=this,v=w.d
if(v>1||w.e>=4||w.f>1||w.r!==0)return!1
return!0},
S8(d,e,f,g){var w,v,u,t,s,r,q=this
if(!q.gd3())return!1
w=B.a4K[q.e]
if(q.d===0){v=q.b
u=e*v
t=q.a
D.x.bO(g,u,f*v,t.a,t.d-t.b+u)}else{v=e+f
t=q.x
t===$&&C.b()
t.cy=g
s=t.c
if(q.y)v=t.anr(s.a,s.b,v)
else{r=t.ch
r.toString
t=t.N7(r,s.a,s.b,v,t.gaE4())
v=t}if(!v)return!1}if(w!=null){v=q.b
w.$6(v,q.c,v,e,f,g)}if(q.f===1)if(!q.anV(g,q.b,q.c,e,f))return!1
if(e+f===q.c)q.w=!0
return!0},
anV(d,e,f,g,h){if(e<=0||f<=0||g<0||h<0||g+h>f)return!1
return!0}}
A.J0.prototype={
akI(d,e){var w=this,v=d.b1()
w.r=0
w.f=(v&1)!==0
w.w=d.d-d.b
w.x=e-16}}
A.UP.prototype={}
A.Us.prototype={
O5(d){var w,v=this
if(d===0)return!1
w=(d<<1>>>0)-1
v.e=w
w=new Int32Array(w<<1>>>0)
v.d=w
w[1]=-1
v.f=1
D.x.hT(v.a,0,128,255)
return!0},
a4C(d,e){var w,v,u,t,s,r=this
for(w=0,v=0,u=0;u<e;++u)if(d[u]>0){++w
v=u}if(!r.O5(w))return!1
if(w===1){if(v<0||v>=e)return!1
return r.Ml(v,0,0)}t=new Int32Array(e)
if(!r.asV(d,e,t))return!1
for(u=0;u<e;++u){s=d[u]
if(s>0)if(!r.Ml(u,t[u],s))return!1}return r.f===r.e},
aBr(d,e,f,g,h){var w,v,u,t=this
if(!t.O5(h))return!1
for(w=0;w<h;++w){v=e[w]
if(v!==-1){u=f[w]
if(u>=g)return t.f===t.e
if(!t.Ml(u,v,d[w]))return t.f===t.e}}return t.f===t.e},
qk(d){var w,v,u=this,t=d.a9D(),s=d.a,r=t&127,q=u.a[r]
if(q<=7){d.a=s+q
return u.b[r]}w=u.c[r]
s+=7
t=t>>>7
do{v=u.d
v===$&&C.b()
w=w+v[(w<<1>>>0)+1]+(t&1)
t=t>>>1;++s}while(u.a0o(w))
d.a=s
return u.d[w<<1>>>0]},
Ml(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
if(f<=7){w=l.a1h(e,f)
for(v=D.b.cW(1,7-f),u=l.b,t=l.a,s=0;s<v;++s){r=(w|D.b.cW(s,f))>>>0
u[r]=d
t[r]=f}}else w=l.a1h(D.b.kT(e,f-7),7)
for(v=l.c,q=7,p=0;o=f-1,f>0;f=o){u=l.e
if(p>=u)return!1
t=l.d
t===$&&C.b()
n=(p<<1>>>0)+1
m=t[n]
if(m<0){m=l.f
if(m===u)return!1
t[n]=m-p
l.f=m+2
t[(m<<1>>>0)+1]=-1
t[(m+1<<1>>>0)+1]=-1}else if(m===0)return!1
p+=t[n]+(D.b.kT(e,o)&1);--q
if(q===0)v[w]=p}if(l.aup(p))l.auq(p,0)
else if(l.a0o(p))return!1
v=l.d
v===$&&C.b()
v[p<<1>>>0]=d
return!0},
a1h(d,e){return D.b.de((B.zg[d&15]<<4|B.zg[D.b.G(d,4)])>>>0,8-e)},
auq(d,e){var w=this.d
w===$&&C.b()
w[(d<<1>>>0)+1]=e},
a0o(d){var w=this.d
w===$&&C.b()
return w[(d<<1>>>0)+1]!==0},
aup(d){var w=this.d
w===$&&C.b()
return w[(d<<1>>>0)+1]<0},
asV(d,e,f){var w,v,u,t,s,r,q,p=new Int32Array(16),o=new Int32Array(16)
for(w=0,v=0;w<e;++w){u=d[w]
if(u>v)v=u}if(v>15)return!1
for(w=0;w<e;++w){t=d[w]
p[t]=p[t]+1}p[0]=0
o[0]=-1
for(s=1,r=0;s<=v;++s){r=r+p[s-1]<<1>>>0
o[s]=r}for(w=0;w<e;++w){t=d[w]
if(t>0){q=o[t]
o[t]=q+1
f[w]=q}else f[w]=-1}return!0}}
A.Ej.prototype={
h(d,e){return this.a[e]}}
A.A3.prototype={
P(){return"WebPFormat."+this.b}}
A.a2o.prototype={}
A.UQ.prototype={}
A.azv.prototype={
Jy(d){var w=A.br(d,!1,null,0)
this.b=w
if(!this.ZE(w))return!1
return!0},
kW(d){var w,v=this,u=null,t=A.br(d,!1,u,0)
v.b=t
if(!v.ZE(t))return u
t=new A.UQ(B.ii,C.a([],x.J))
v.a=t
w=v.b
w.toString
if(!v.a3M(w,t))return u
t=v.a
switch(t.f.a){case 3:t.as=t.z.length
return t
case 2:w=v.b
w.toString
w.d=t.ay
if(!A.aN3(w,t).z6())return u
t=v.a
t.as=t.z.length
return t
case 1:w=v.b
w.toString
w.d=t.ay
if(!A.aN1(w,t).z6())return u
t=v.a
t.as=t.z.length
return t
case 0:throw C.c(A.aG("Unknown format for WebP"))}},
fW(d){var w,v,u,t,s=this,r=s.b
if(r==null||s.a==null)return null
w=s.a
if(w.e){w=w.z
if(d>=w.length||!1)return null
v=w[d]
r.toString
w=v.x
w===$&&C.b()
u=v.w
u===$&&C.b()
return s.YI(r.qI(w,u),d)}u=w.f
if(u===B.ln){r.toString
t=r.qI(w.ch,w.ay)
r=s.a
r.toString
return A.aN3(t,r).ow(0)}else if(u===B.pV){r.toString
t=r.qI(w.ch,w.ay)
r=s.a
r.toString
return A.aN1(t,r).ow(0)}return null},
kh(d,e,f){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.kW(e)==null)return n
if(!o.a.e||!1)return o.fW(0)
for(w=n,v=w,u=0;t=o.a,u<t.as;++u){f=t.z[u]
s=o.fW(u)
if(s==null)continue
s.y=f.e
if(v==null||w==null){t=o.a
r=t.a
t=t.b
q=s.gvT()
p=s.a
p=p==null?n:p.gbw()
v=A.dY(n,n,p==null?B.H:p,0,B.ae,t,n,0,q,n,r,!1)
w=v}else{w=A.tD(w,!1,!1)
t=f.f
t===$&&C.b()
if(t){t=w.a
if(t!=null)t.fC(0,n)}}A.aYK(w,s,B.qx,f.a,f.b)
v.ol(w)}return v},
YI(d,e){var w,v,u,t=null,s=C.a([],x.J),r=new A.UQ(B.ii,s)
if(!this.a3M(d,r))return t
if(r.f===B.ii)return t
r.as=this.a.as
if(r.e){if(e>=s.length||!1)return t
w=s[e]
s=w.x
s===$&&C.b()
v=w.w
v===$&&C.b()
return this.YI(d.qI(s,v),e)}else{u=d.qI(r.ch,r.ay)
s=r.f
if(s===B.ln)return A.aN3(u,r).ow(0)
else if(s===B.pV)return A.aN1(u,r).ow(0)}return t},
ZE(d){if(d.eI(4)!=="RIFF")return!1
d.N()
if(d.eI(4)!=="WEBP")return!1
return!0},
a3M(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=d.b,k=d.c,j=!1
while(!0){if(!(d.d<k&&!j))break
w=d.eI(4)
v=d.N()
u=v+1>>>1<<1>>>0
t=d.d
s=t-l
switch(w){case"VP8X":if(!this.apR(d,e))return!1
break
case"VP8 ":e.ay=s
e.ch=v
e.f=B.pV
j=!0
break
case"VP8L":e.ay=s
e.ch=v
e.f=B.ln
j=!0
break
case"ALPH":r=d.a
q=d.e
p=r.length
r=new A.h3(r,0,p,0,q)
e.at=r
r.d=t
d.d+=u
break
case"ANIM":e.f=B.awe
o=d.N()
t=new Uint8Array(4)
t[0]=o>>>8&255
t[1]=o>>>16&255
t[2]=o>>>24&255
t[3]=o&255
d.V()
break
case"ANMF":if(!this.apr(d,e,v))return!1
break
case"ICCP":e.toString
n=d.eZ(v)
d.d=d.d+(n.c-n.d)
n.e4()
break
case"EXIF":e.toString
d.eI(v)
break
case"XMP ":e.toString
d.eI(v)
break
default:d.d=t+u
break}t=d.d
m=u-(t-l-s)
if(m>0)d.d=t+m}if(!e.d)e.d=e.at!=null
return e.f!==B.ii},
apR(d,e){var w,v,u,t,s=d.b1()
if((s&192)!==0)return!1
w=D.b.G(s,4)
v=D.b.G(s,1)
if((s&1)!==0)return!1
if(d.lA()!==0)return!1
u=d.lA()
t=d.lA()
e.a=u+1
e.b=t+1
e.e=(v&1)!==0
e.d=(w&1)!==0
return!0},
apr(d,e,f){var w,v=d.lA(),u=d.lA()
d.lA()
w=new A.UP(v*2,u*2,d.lA()+1,d.lA())
w.akI(d,f)
if(w.r!==0)return!1
e.z.push(w)
return!0}}
A.amX.prototype={
P(){return"IccProfileCompression."+this.b}}
A.Ep.prototype={}
A.TV.prototype={
P(){return"FrameType."+this.b}}
A.pL.prototype={
goH(){var w=this.x
return w===$?this.x=C.a([],x.g):w},
akk(d,e,f){var w,v,u,t,s=this,r=d.b
if(r!=null)s.b=C.F_(r,x.N,x.u)
r=d.d
if(r!=null){w=x.N
s.d=C.F_(r,w,w)}s.goH().push(s)
if(!e&&d.goH().length>1){v=d.goH().length
for(r=x.g,u=1;u<v;++u){t=d.x
s.ol(A.tD((t===$?d.x=C.a([],r):t)[u],!1,!1))}}},
akl(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null
e.goH().push(e)
if(b1>4)throw C.c(A.aG("An Image can only have 1-4 channels."))
if(b1===3)b2=B.m5
else if(b1===4)b2=B.m4
else{w=b1===1?B.rf:B.re
b2=w}if(b1===1)b2=B.rf
else if(b1===2)b2=B.re
else if(b1===3){if(b2!==B.m5&&b2!==B.rd)b2=B.m5}else if(b1===4)if(b2!==B.ra&&b2!==B.m4&&b2!==B.rb&&b2!==B.rc)b2=B.m4
e.a_A(b7,a8,a3,a4,a9,b1,b3,b4,!1)
w=e.a
if(w==null)return
v=C.bE(w.giF(w),0,d)
u=C.bE(a1,a2,d)
if(a4===B.c5)b5=D.f.ds(b7*b1/8)
else if(a4===B.c6){w=D.f.ds(b7*b1/4)
b5=w}else{w=b7*b1
if(a4===B.c7)w=D.f.ds(w/2)
else{t=B.afd.h(0,a4)
t.toString
t=w*t
w=t}b5=w}s=e.a.glF()
r=Math.min(C.eT(b5),s)
for(w=u.length,t=C.bR(u),q=t.i("N.E"),t=t.i("hb<N.E>"),p=0,o=0,n=0;n<a8;++n,o+=b5,p=k){m=o+r
C.dS(o,m,w,d,d)
l=new C.hb(u,o,m,t)
l.tX(u,o,m,q)
k=p+s
D.x.dw(v,p,k,l)}if(b1===3&&b2===B.rd)for(w=e.a,w=w.ga1(w);w.q();){j=w.gM(w)
i=j.gae(j)
j.sae(0,j.gaq(j))
j.saq(0,i)}else{w=b1===4
if(w&&b2===B.rb)for(w=e.a,w=w.ga1(w);w.q();){j=w.gM(w)
i=j.gae(j)
h=j.gap()
g=j.gaq(j)
j.sae(0,j.gav(j))
j.sap(g)
j.saq(0,h)
j.sav(0,i)}else if(w&&b2===B.rc)for(w=e.a,w=w.ga1(w);w.q();){j=w.gM(w)
i=j.gae(j)
h=j.gap()
g=j.gaq(j)
j.sae(0,j.gav(j))
j.sap(i)
j.saq(0,h)
j.sav(0,g)}else if(w&&b2===B.ra)for(w=e.a,w=w.ga1(w);w.q();){j=w.gM(w)
i=j.gae(j)
h=j.gap()
g=j.gaq(j)
f=j.gav(j)
j.sae(0,g)
j.sap(h)
j.saq(0,i)
j.sav(0,f)}}},
ol(d){var w=this
if(d==null)d=A.tD(w,!0,!0)
d.z=w.goH().length
if(D.c.gU(w.goH())!==d)w.goH().push(d)
return d},
a_A(d,e,f,g,h,i,j,k,l){var w,v=this
if(i<1||i>4)throw C.c(A.aG("Invalid number of channels for image "+i+". Must be between 1 and 4."))
v.c=h
if(f!=null)v.e=A.ajY(f)
if(j==null)if(l)w=v.gbw()===B.c5||v.gbw()===B.c6||v.gbw()===B.c7||v.gbw()===B.H
else w=!1
else w=!1
v.and(d,e,g,i,w?v.anh(k,i):j)},
and(d,e,f,g,h){var w,v,u=this
switch(f.a){case 0:if(h==null){w=D.f.ds(d*g/8)
v=new A.xC($,w,null,d,e,g)
w=Math.max(w*e,1)
v.d=new Uint8Array(w)
u.a=v}else{w=D.f.ds(d/8)
v=new A.xC($,w,h,d,e,1)
w=Math.max(w*e,1)
v.d=new Uint8Array(w)
u.a=v}break
case 1:if(h==null){w=D.f.ds(d*(g<<1>>>0)/8)
v=new A.xD($,w,null,d,e,g)
w=Math.max(w*e,1)
v.d=new Uint8Array(w)
u.a=v}else{w=D.f.ds(d/4)
v=new A.xD($,w,h,d,e,1)
w=Math.max(w*e,1)
v.d=new Uint8Array(w)
u.a=v}break
case 2:if(h==null){if(g===2)w=d
else if(g===4)w=d*2
else w=g===3?D.f.ds(d*1.5):D.f.ds(d/2)
v=new A.xF($,w,null,d,e,g)
w=Math.max(w*e,1)
v.d=new Uint8Array(w)
u.a=v}else{w=D.f.ds(d/2)
v=new A.xF($,w,h,d,e,1)
w=Math.max(w*e,1)
v.d=new Uint8Array(w)
u.a=v}break
case 3:if(h==null)u.a=A.aSR(d,e,g)
else u.a=new A.xG(new Uint8Array(d*e),h,d,e,1)
break
case 4:u.a=new A.Ew(new Uint16Array(d*e*g),d,e,g)
break
case 5:u.a=A.b5p(d,e,g)
break
case 6:u.a=new A.Ev(new Int8Array(d*e*g),d,e,g)
break
case 7:u.a=new A.Et(new Int16Array(d*e*g),d,e,g)
break
case 8:u.a=new A.Eu(new Int32Array(d*e*g),d,e,g)
break
case 9:u.a=A.b5n(d,e,g)
break
case 10:u.a=A.b5o(d,e,g)
break
case 11:u.a=new A.Es(new Float64Array(d*e*4*g),d,e,g)
break}},
j(d){var w=this
return"Image("+w.gcu(w)+", "+w.gbL(w)+", "+w.gbw().b+", "+w.gvT()+")"},
gcu(d){var w=this.a
w=w==null?null:w.a
return w==null?0:w},
gbL(d){var w=this.a
w=w==null?null:w.b
return w==null?0:w},
gbw(){var w=this.a
w=w==null?null:w.gbw()
return w==null?B.H:w},
ga6g(){var w=this.e
return w==null?this.e=new A.DN(C.w(x.N,x.P)):w},
aeI(d,e){var w=this,v=w.b;(v==null?w.b=C.w(x.N,x.u):v).l(0,d,e)
if(w.b.a===0)w.b=null},
ga1(d){var w=this.a
return w.ga1(w)},
giF(d){var w=this.a
w=w==null?null:w.giF(w)
if(w==null)w=new Uint8Array(0).buffer
return w},
gvT(){var w=this.a
w=w==null?null:w.gd4()
w=w==null?null:w.b
if(w==null){w=this.a
w=w==null?null:w.c}return w==null?0:w},
gTm(){var w=this.a
return(w==null?null:w.gd4())!=null},
a7H(d,e){var w=this
return d>=0&&e>=0&&d<w.gcu(w)&&e<w.gbL(w)},
ee(d,e,f){var w=this.a
w=w==null?null:w.ee(d,e,f)
return w==null?new A.eN():w},
VJ(d,e){return this.ee(d,e,null)},
aea(d,e){var w,v=this
if(d<v.gcu(v))w=e>=v.gbL(v)
else w=!0
if(w)return new A.eN()
return v.ee(d,e,null)},
Lr(d,e,f){var w
if(f.gh_(f).gd4()!=null)if(this.gTm()){w=this.a
if(w!=null)w.cD(d,e,f.gcH(f),0,0)
return}w=this.a
if(w!=null)w.fP(d,e,f.gae(f),f.gap(),f.gaq(f),f.gav(f))},
gbd(){var w=this.a
w=w==null?null:w.gbd()
return w==null?0:w},
fC(d,e){var w=this.a
return w==null?null:w.fC(0,e)},
ah(d){return this.fC(d,null)},
a50(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
if(a6==null)a6=a4.gbw()
if(a7==null)a7=a4.gvT()
w=B.Gc.h(0,a6)
if(a6.a<3)a4.gbw()
if(a6===a4.gbw())if(a7===a4.gvT()){v=a4.a
v=(v==null?a5:v.gd4())==null
if(!v)v=!1
else v=!0}else v=!1
else v=!1
if(v)return A.tD(a4,!1,!1)
for(v=a4.goH(),u=v.length,t=x.N,s=x.p,r=a5,q=0;q<v.length;v.length===u||(0,C.G)(v),++q,r=h){p=v[q]
o=p.a
n=o==null
m=n?a5:o.a
if(m==null)m=0
o=n?a5:o.b
if(o==null)o=0
n=p.e
n=n==null?a5:A.ajY(n)
l=p.c
if(l==null)l=a5
else{k=l.a
j=l.b
l=l.c
l=new A.Ep(k,j,new Uint8Array(l.subarray(0,C.lq(0,a5,l.length))))}k=p.w
j=p.r
i=A.dY(a5,n,a6,p.y,k,o,l,j,a7,a5,m,!1)
o=p.d
i.d=o!=null?C.F_(o,t,t):a5
if(r!=null){r.ol(i)
h=r}else h=i
o=i.a
g=o==null?a5:o.gd4()
o=i.a
o=o==null?a5:o.gd4()
f=o==null?a5:o.gbw()
if(f==null)f=a6
o=p.a
if(g!=null){e=C.w(s,s)
d=o==null?a5:o.ee(0,0,a5)
if(d==null)d=new A.eN()
for(o=i.a,o=o.ga1(o),a0=a5,a1=0;o.q();){a2=o.gM(o)
a3=A.aZY(D.f.ek(d.geq()*255),D.f.ek(d.gec()*255),D.f.ek(d.geh()*255),0)
if(e.an(0,a3)){n=e.h(0,a3)
n.toString
a2.scH(0,n)}else{e.l(0,a3,a1)
a2.scH(0,a1)
a0=A.j_(d,w,f,a7,a0)
g.kS(a1,a0.gae(a0),a0.gap(),a0.gaq(a0));++a1}d.q()}}else{d=o==null?a5:o.ee(0,0,a5)
if(d==null)d=new A.eN()
for(o=i.a,o=o.ga1(o);o.q();){A.j_(d,w,a5,a5,o.gM(o))
d.q()}}}r.toString
return r},
j1(d){return this.a50(d,null)},
aCs(d){return this.a50(null,d)},
aAT(d){var w,v,u,t
if(this.d==null){w=x.N
this.d=C.w(w,w)}for(w=C.ev(d,d.r,C.n(d).c);w.q();){v=w.d
u=this.d
u.toString
t=d.h(0,v)
t.toString
u.l(0,v,t)}},
god(){var w,v=this
if(v.gbw()===B.c5)w=2
else if(v.gbw()===B.c6)w=4
else if(v.gbw()===B.c7)w=16
else w=v.gbw()===B.H?256:0
return w},
anh(d,e){var w,v=this
switch(d.a){case 0:return null
case 1:return null
case 2:return null
case 3:w=v.god()
return new A.m7(new Uint8Array(w*e),w,e)
case 4:w=v.god()
return new A.YT(new Uint16Array(w*e),w,e)
case 5:w=v.god()
return new A.YU(new Uint32Array(w*e),w,e)
case 6:w=v.god()
return new A.YS(new Int8Array(w*e),w,e)
case 7:w=v.god()
return new A.YQ(new Int16Array(w*e),w,e)
case 8:w=v.god()
return new A.YR(new Int32Array(w*e),w,e)
case 9:w=v.god()
return new A.YN(new Uint16Array(w*e),w,e)
case 10:w=v.god()
return new A.YO(new Float32Array(w*e),w,e)
case 11:w=v.god()
return new A.YP(new Float64Array(w*e),w,e)}}}
A.h2.prototype={
gd4(){return null}}
A.xA.prototype={
lj(d,e){var w=this,v=w.d
if(e)v=new Uint16Array(v.length)
else v=new Uint16Array(C.bf(v))
return new A.xA(v,w.a,w.b,w.c)},
gbw(){return B.cQ},
giF(d){return this.d.buffer},
glF(){return this.a*this.c*2},
ga1(d){return A.aUf(this)},
gm(d){return this.d.byteLength},
gbd(){return 1},
ee(d,e,f){var w,v
if(f==null||!(f instanceof A.ug)||f.d!==this)f=A.aUf(this)
f.a=d
f.b=e
w=f.d
v=w.c
f.c=e*w.a*v+d*v
return f},
it(d,e,f){var w=this.c
this.d[e*this.a*w+d*w]=A.dp(f)},
cD(d,e,f,g,h){var w=this.c,v=e*this.a*w+d*w,u=this.d
u[v]=A.dp(f)
if(w>1){u[v+1]=A.dp(g)
if(w>2)u[v+2]=A.dp(h)}},
fP(d,e,f,g,h,i){var w=this.c,v=e*this.a*w+d*w,u=this.d
u[v]=A.dp(f)
if(w>1){u[v+1]=A.dp(g)
if(w>2){u[v+2]=A.dp(h)
if(w>3)u[v+3]=A.dp(i)}}},
j(d){return"ImageDataFloat16("+this.a+", "+this.b+", "+this.c+")"},
fC(d,e){}}
A.xB.prototype={
lj(d,e){var w=this,v=w.d
if(e)v=new Float32Array(v.length)
else v=new Float32Array(C.bf(v))
return new A.xB(v,w.a,w.b,w.c)},
gbw(){return B.dp},
giF(d){return this.d.buffer},
ga1(d){return A.aUg(this)},
gm(d){return this.d.byteLength},
gbd(){return 1},
glF(){return this.a*this.c*4},
ee(d,e,f){var w,v
if(f==null||!(f instanceof A.uh)||f.d!==this)f=A.aUg(this)
f.a=d
f.b=e
w=f.d
v=w.c
f.c=e*w.a*v+d*v
return f},
it(d,e,f){var w=this.c
this.d[e*this.a*w+d*w]=f},
cD(d,e,f,g,h){var w=this.c,v=e*this.a*w+d*w,u=this.d
u[v]=f
if(w>1){u[v+1]=g
if(w>2)u[v+2]=h}},
fP(d,e,f,g,h,i){var w=this.c,v=e*this.a*w+d*w,u=this.d
u[v]=f
if(w>1){u[v+1]=g
if(w>2){u[v+2]=h
if(w>3)u[v+3]=i}}},
j(d){return"ImageDataFloat32("+this.a+", "+this.b+", "+this.c+")"},
fC(d,e){}}
A.Es.prototype={
lj(d,e){var w=this,v=w.d
if(e)v=new Float64Array(v.length)
else v=new Float64Array(C.bf(v))
return new A.Es(v,w.a,w.b,w.c)},
gbw(){return B.e0},
giF(d){return this.d.buffer},
gm(d){return this.d.byteLength},
ga1(d){return A.aUh(this)},
gbd(){return 1},
glF(){return this.a*this.c*8},
ee(d,e,f){var w,v
if(f==null||!(f instanceof A.ui)||f.d!==this)f=A.aUh(this)
f.a=d
f.b=e
w=f.d
v=w.c
f.c=e*w.a*v+d*v
return f},
it(d,e,f){var w=this.c
this.d[e*this.a*w+d*w]=f},
cD(d,e,f,g,h){var w=this.c,v=e*this.a*w+d*w,u=this.d
u[v]=f
if(w>1){u[v+1]=g
if(w>2)u[v+2]=h}},
fP(d,e,f,g,h,i){var w=this.c,v=e*this.a*w+d*w,u=this.d
u[v]=f
if(w>1){u[v+1]=g
if(w>2){u[v+2]=h
if(w>3)u[v+3]=i}}},
j(d){return"ImageDataFloat64("+this.a+", "+this.b+", "+this.c+")"},
fC(d,e){}}
A.Et.prototype={
lj(d,e){var w=this,v=w.d
if(e)v=new Int16Array(v.length)
else v=new Int16Array(C.bf(v))
return new A.Et(v,w.a,w.b,w.c)},
gbw(){return B.e2},
giF(d){return this.d.buffer},
ga1(d){return A.aUi(this)},
gm(d){return this.d.byteLength},
gbd(){return 32767},
glF(){return this.a*this.c*2},
ee(d,e,f){var w,v
if(f==null||!(f instanceof A.uj)||f.d!==this)f=A.aUi(this)
f.a=d
f.b=e
w=f.d
v=w.c
f.c=e*w.a*v+d*v
return f},
it(d,e,f){var w=this.c
this.d[e*this.a*w+d*w]=D.f.t(f)},
cD(d,e,f,g,h){var w=this.c,v=e*this.a*w+d*w,u=this.d
u[v]=D.f.t(f)
if(w>1){u[v+1]=D.f.t(g)
if(w>2)u[v+2]=D.f.t(h)}},
fP(d,e,f,g,h,i){var w=this.c,v=e*this.a*w+d*w,u=this.d
u[v]=D.f.t(f)
if(w>1){u[v+1]=D.f.t(g)
if(w>2){u[v+2]=D.f.t(h)
if(w>3)u[v+3]=D.f.t(i)}}},
j(d){return"ImageDataInt16("+this.a+", "+this.b+", "+this.c+")"},
fC(d,e){}}
A.Eu.prototype={
lj(d,e){var w=this,v=w.d
if(e)v=new Int32Array(v.length)
else v=new Int32Array(C.bf(v))
return new A.Eu(v,w.a,w.b,w.c)},
gbw(){return B.e3},
giF(d){return this.d.buffer},
glF(){return this.a*this.c*4},
ga1(d){return A.aUj(this)},
gm(d){return this.d.byteLength},
gbd(){return 2147483647},
ee(d,e,f){var w,v
if(f==null||!(f instanceof A.uk)||f.d!==this)f=A.aUj(this)
f.a=d
f.b=e
w=f.d
v=w.c
f.c=e*w.a*v+d*v
return f},
it(d,e,f){var w=this.c
this.d[e*this.a*w+d*w]=D.f.t(f)},
cD(d,e,f,g,h){var w=this.c,v=e*this.a*w+d*w,u=this.d
u[v]=D.f.t(f)
if(w>1){u[v+1]=D.f.t(g)
if(w>2)u[v+2]=D.f.t(h)}},
fP(d,e,f,g,h,i){var w=this.c,v=e*this.a*w+d*w,u=this.d
u[v]=D.f.t(f)
if(w>1){u[v+1]=D.f.t(g)
if(w>2){u[v+2]=D.f.t(h)
if(w>3)u[v+3]=D.f.t(i)}}},
j(d){return"ImageDataInt32("+this.a+", "+this.b+", "+this.c+")"},
fC(d,e){}}
A.Ev.prototype={
lj(d,e){var w=this,v=w.d
if(e)v=new Int8Array(v.length)
else v=new Int8Array(C.bf(v))
return new A.Ev(v,w.a,w.b,w.c)},
gbw(){return B.e1},
giF(d){return this.d.buffer},
glF(){return this.a*this.c},
ga1(d){return A.aUk(this)},
gm(d){return this.d.byteLength},
gbd(){return 127},
ee(d,e,f){var w,v
if(f==null||!(f instanceof A.ul)||f.d!==this)f=A.aUk(this)
f.a=d
f.b=e
w=f.d
v=w.c
f.c=e*w.a*v+d*v
return f},
it(d,e,f){var w=this.c
this.d[e*(this.a*w)+d*w]=D.f.t(f)},
cD(d,e,f,g,h){var w=this.c,v=e*(this.a*w)+d*w,u=this.d
u[v]=D.f.t(f)
if(w>1){u[v+1]=D.f.t(g)
if(w>2)u[v+2]=D.f.t(h)}},
fP(d,e,f,g,h,i){var w=this.c,v=e*(this.a*w)+d*w,u=this.d
u[v]=D.f.t(f)
if(w>1){u[v+1]=D.f.t(g)
if(w>2){u[v+2]=D.f.t(h)
if(w>3)u[v+3]=D.f.t(i)}}},
j(d){return"ImageDataInt8("+this.a+", "+this.b+", "+this.c+")"},
fC(d,e){}}
A.xC.prototype={
aLM(d,e,f){var w=Math.max(this.e*e,1)
w=new Uint8Array(w)
this.d!==$&&C.cT()
this.d=w},
lj(d,e){var w,v=this,u=v.d
if(e){u===$&&C.b()
u=new Uint8Array(u.length)}else{u===$&&C.b()
u=new Uint8Array(C.bf(u))}w=v.f
w=w==null?null:w.bu(0)
return new A.xC(u,v.e,w,v.a,v.b,v.c)},
gbw(){return B.c5},
gm(d){var w=this.d
w===$&&C.b()
return w.byteLength},
gbd(){var w=this.f
w=w==null?null:w.gbd()
return w==null?1:w},
giF(d){var w=this.d
w===$&&C.b()
return w.buffer},
ga1(d){return A.Zc(this)},
ee(d,e,f){if(f==null||!(f instanceof A.um)||f.f!==this)f=A.Zc(this)
f.ji(0,d,e)
return f},
it(d,e,f){var w,v=this
if(v.c<1)return
w=v.r;(w==null?v.r=A.Zc(v):w).ji(0,d,e)
v.r.fS(0,f)},
cD(d,e,f,g,h){var w,v=this
if(v.c<1)return
w=v.r;(w==null?v.r=A.Zc(v):w).ji(0,d,e)
v.r.hI(f,g,h)},
fP(d,e,f,g,h,i){var w,v=this
if(v.c<1)return
w=v.r;(w==null?v.r=A.Zc(v):w).ji(0,d,e)
v.r.he(f,g,h,i)},
j(d){return"ImageDataUint1("+this.a+", "+this.b+", "+this.c+")"},
fC(d,e){},
glF(){return this.e},
gd4(){return this.f}}
A.Ew.prototype={
lj(d,e){var w=this,v=w.d
if(e)v=new Uint16Array(v.length)
else v=new Uint16Array(C.bf(v))
return new A.Ew(v,w.a,w.b,w.c)},
gbw(){return B.dq},
giF(d){return this.d.buffer},
gbd(){return 65535},
glF(){return this.a*this.c*2},
ga1(d){return A.aUl(this)},
gm(d){return this.d.byteLength},
ee(d,e,f){var w,v
if(f==null||!(f instanceof A.un)||f.d!==this)f=A.aUl(this)
f.a=d
f.b=e
w=f.d
v=w.c
f.c=e*w.a*v+d*v
return f},
it(d,e,f){var w=this.c
this.d[e*this.a*w+d*w]=D.f.t(f)},
cD(d,e,f,g,h){var w=this.c,v=e*this.a*w+d*w,u=this.d
u[v]=D.f.t(f)
if(w>1){u[v+1]=D.f.t(g)
if(w>2)u[v+2]=D.f.t(h)}},
fP(d,e,f,g,h,i){var w=this.c,v=e*this.a*w+d*w,u=this.d
u[v]=D.f.t(f)
if(w>1){u[v+1]=D.f.t(g)
if(w>2){u[v+2]=D.f.t(h)
if(w>3)u[v+3]=D.f.t(i)}}},
j(d){return"ImageDataUint16("+this.a+", "+this.b+", "+this.c+")"},
fC(d,e){}}
A.xD.prototype={
aLN(d,e,f){var w=Math.max(this.e*e,1)
w=new Uint8Array(w)
this.d!==$&&C.cT()
this.d=w},
lj(d,e){var w,v=this,u=v.d
if(e){u===$&&C.b()
u=new Uint8Array(u.length)}else{u===$&&C.b()
u=new Uint8Array(C.bf(u))}w=v.f
w=w==null?null:w.bu(0)
return new A.xD(u,v.e,w,v.a,v.b,v.c)},
gbw(){return B.c6},
giF(d){var w=this.d
w===$&&C.b()
return w.buffer},
ga1(d){return A.Zd(this)},
gm(d){var w=this.d
w===$&&C.b()
return w.byteLength},
gbd(){var w=this.f
w=w==null?null:w.gbd()
return w==null?3:w},
ee(d,e,f){if(f==null||!(f instanceof A.uo)||f.f!==this)f=A.Zd(this)
f.ji(0,d,e)
return f},
it(d,e,f){var w,v=this
if(v.c<1)return
w=v.r;(w==null?v.r=A.Zd(v):w).ji(0,d,e)
v.r.fT(0,f)},
cD(d,e,f,g,h){var w,v=this
if(v.c<1)return
w=v.r;(w==null?v.r=A.Zd(v):w).ji(0,d,e)
v.r.hI(f,g,h)},
fP(d,e,f,g,h,i){var w,v=this
if(v.c<1)return
w=v.r;(w==null?v.r=A.Zd(v):w).ji(0,d,e)
v.r.he(f,g,h,i)},
j(d){return"ImageDataUint2("+this.a+", "+this.b+", "+this.c+")"},
fC(d,e){},
glF(){return this.e},
gd4(){return this.f}}
A.xE.prototype={
lj(d,e){var w=this,v=w.d
if(e)v=new Uint32Array(v.length)
else v=new Uint32Array(C.bf(v))
return new A.xE(v,w.a,w.b,w.c)},
gbw(){return B.dr},
giF(d){return this.d.buffer},
glF(){return this.a*this.c*4},
gbd(){return 4294967295},
ga1(d){return A.aUm(this)},
gm(d){return this.d.byteLength},
ee(d,e,f){var w,v
if(f==null||!(f instanceof A.up)||f.d!==this)f=A.aUm(this)
f.a=d
f.b=e
w=f.d
v=w.c
f.c=e*w.a*v+d*v
return f},
it(d,e,f){var w=this.c
this.d[e*this.a*w+d*w]=D.f.t(f)},
cD(d,e,f,g,h){var w=this.c,v=e*this.a*w+d*w,u=this.d
u[v]=D.f.t(f)
if(w>1){u[v+1]=D.f.t(g)
if(w>2)u[v+2]=D.f.t(h)}},
fP(d,e,f,g,h,i){var w=this.c,v=e*this.a*w+d*w,u=this.d
u[v]=D.f.t(f)
if(w>1){u[v+1]=D.f.t(g)
if(w>2){u[v+2]=D.f.t(h)
if(w>3)u[v+3]=D.f.t(i)}}},
j(d){return"ImageDataUint32("+this.a+", "+this.b+", "+this.c+")"},
fC(d,e){}}
A.xF.prototype={
aLO(d,e,f){var w=Math.max(this.e*e,1)
w=new Uint8Array(w)
this.d!==$&&C.cT()
this.d=w},
lj(d,e){var w,v=this,u=v.d
if(e){u===$&&C.b()
u=new Uint8Array(u.length)}else{u===$&&C.b()
u=new Uint8Array(C.bf(u))}w=v.f
w=w==null?null:w.bu(0)
return new A.xF(u,v.e,w,v.a,v.b,v.c)},
gbw(){return B.c7},
giF(d){var w=this.d
w===$&&C.b()
return w.buffer},
ga1(d){return A.Ze(this)},
gm(d){var w=this.d
w===$&&C.b()
return w.byteLength},
gbd(){var w=this.f
w=w==null?null:w.gbd()
return w==null?15:w},
ee(d,e,f){if(f==null||!(f instanceof A.uq)||f.e!==this)f=A.Ze(this)
f.ji(0,d,e)
return f},
it(d,e,f){var w,v=this
if(v.c<1)return
w=v.r;(w==null?v.r=A.Ze(v):w).ji(0,d,e)
v.r.fU(0,f)},
cD(d,e,f,g,h){var w,v=this
if(v.c<1)return
w=v.r;(w==null?v.r=A.Ze(v):w).ji(0,d,e)
v.r.hI(f,g,h)},
fP(d,e,f,g,h,i){var w,v=this
if(v.c<1)return
w=v.r;(w==null?v.r=A.Ze(v):w).ji(0,d,e)
v.r.he(f,g,h,i)},
j(d){return"ImageDataUint4("+this.a+", "+this.b+", "+this.c+")"},
fC(d,e){},
glF(){return this.e},
gd4(){return this.f}}
A.xG.prototype={
lj(d,e){var w,v=this,u=v.d
if(e)u=new Uint8Array(u.length)
else u=new Uint8Array(C.bf(u))
w=v.e
w=w==null?null:w.bu(0)
return new A.xG(u,w,v.a,v.b,v.c)},
gbw(){return B.H},
giF(d){return this.d.buffer},
glF(){return this.a*this.c},
ga1(d){return A.aMh(this)},
gm(d){return this.d.byteLength},
gbd(){var w=this.e
w=w==null?null:w.gbd()
return w==null?255:w},
ee(d,e,f){var w,v
if(f==null||!(f instanceof A.ur)||f.d!==this)f=A.aMh(this)
f.a=d
f.b=e
w=f.d
v=w.c
f.c=e*w.a*v+d*v
return f},
it(d,e,f){var w=this.c
this.d[e*(this.a*w)+d*w]=D.f.t(f)},
cD(d,e,f,g,h){var w=this.c,v=e*(this.a*w)+d*w,u=this.d
u[v]=D.f.t(f)
if(w>1){u[v+1]=D.f.t(g)
if(w>2)u[v+2]=D.f.t(h)}},
fP(d,e,f,g,h,i){var w=this.c,v=e*(this.a*w)+d*w,u=this.d
u[v]=D.f.t(f)
if(w>1){u[v+1]=D.f.t(g)
if(w>2){u[v+2]=D.f.t(h)
if(w>3)u[v+3]=D.f.t(i)}}},
j(d){return"ImageDataUint8("+this.a+", "+this.b+", "+this.c+")"},
fC(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=e==null?l:A.j_(e,l,B.H,l,l),j=m.c
if(j===1){w=k==null?0:D.b.bv(C.bl(k.gae(k)),0,255)
j=m.d
D.x.hT(j,0,j.length,w)}else if(j===2){j=k==null
w=j?0:D.b.bv(C.bl(k.gae(k)),0,255)
v=j?0:D.b.bv(C.bl(k.gap()),0,255)
u=C.aTU(m.d.buffer,0,l)
D.ef.hT(u,0,u.length,(v<<8|w)>>>0)}else if(j===4){j=k==null
w=j?0:D.b.bv(C.bl(k.gae(k)),0,255)
v=j?0:D.b.bv(C.bl(k.gap()),0,255)
t=j?0:D.b.bv(C.bl(k.gaq(k)),0,255)
s=j?0:D.b.bv(C.bl(k.gav(k)),0,255)
r=C.hF(m.d.buffer,0,l)
D.bu.hT(r,0,r.length,(s<<24|t<<16|v<<8|w)>>>0)}else{j=k==null
w=j?0:D.b.bv(C.bl(k.gae(k)),0,255)
v=j?0:D.b.bv(C.bl(k.gap()),0,255)
t=j?0:D.b.bv(C.bl(k.gaq(k)),0,255)
for(q=A.aMh(m),j=q.d,p=j.c,o=p>2,n=p>1,p=p>0,j=j.d;q.q();){if(p)j[q.c]=D.f.t(D.b.bv(w,0,255))
if(n)j[q.c+1]=D.f.t(D.b.bv(v,0,255))
if(o)j[q.c+2]=D.f.t(D.b.bv(t,0,255))}}},
gd4(){return this.e}}
A.aqX.prototype={}
A.YN.prototype={
bu(d){return new A.YN(new Uint16Array(C.bf(this.c)),this.a,this.b)},
gbw(){return B.cQ},
gbd(){return 1},
cL(d,e,f,g){var w=this.b
if(f<w)this.c[e*w+f]=A.dp(g)},
kS(d,e,f,g){var w,v=this.b
d*=v
w=this.c
w[d]=A.dp(e)
if(v>1){w[d+1]=A.dp(f)
if(v>2)w[d+2]=A.dp(g)}},
kM(d,e,f){var w,v=this.b
if(f<v){v=this.c[e*v+f]
w=$.dn
v=(w!=null?w:A.dO())[v]}else v=0
return v},
kP(d){var w=this.c[d*this.b],v=$.dn
return(v!=null?v:A.dO())[w]},
kO(d){var w,v=this.b
if(v<2)return 0
v=this.c[d*v+1]
w=$.dn
return(w!=null?w:A.dO())[v]},
kN(d){var w,v=this.b
if(v<3)return 0
v=this.c[d*v+2]
w=$.dn
return(w!=null?w:A.dO())[v]},
mB(d){var w,v=this.b
if(v<4)return 0
v=this.c[d*v+3]
w=$.dn
return(w!=null?w:A.dO())[v]},
mK(d,e){return this.cL(0,d,0,e)},
mJ(d,e){return this.cL(0,d,1,e)},
mI(d,e){return this.cL(0,d,2,e)},
mH(d,e){return this.cL(0,d,3,e)}}
A.YO.prototype={
bu(d){return new A.YO(new Float32Array(C.bf(this.c)),this.a,this.b)},
gbw(){return B.dp},
gbd(){return 1},
cL(d,e,f,g){var w=this.b
if(f<w)this.c[e*w+f]=g},
kS(d,e,f,g){var w,v=this.b
d*=v
w=this.c
w[d]=e
if(v>1){w[d+1]=f
if(v>2)w[d+2]=g}},
kM(d,e,f){var w=this.b
return f<w?this.c[e*w+f]:0},
kP(d){return this.c[d*this.b]},
kO(d){var w=this.b
if(w<2)return 0
return this.c[d*w+1]},
kN(d){var w=this.b
if(w<3)return 0
return this.c[d*w+2]},
mB(d){var w=this.b
if(w<4)return 0
return this.c[d*w+3]},
mK(d,e){return this.cL(0,d,0,e)},
mJ(d,e){return this.cL(0,d,1,e)},
mI(d,e){return this.cL(0,d,2,e)},
mH(d,e){return this.cL(0,d,3,e)}}
A.YP.prototype={
bu(d){return new A.YP(new Float64Array(C.bf(this.c)),this.a,this.b)},
gbw(){return B.e0},
gbd(){return 1},
cL(d,e,f,g){var w=this.b
if(f<w)this.c[e*w+f]=g},
kS(d,e,f,g){var w,v=this.b
d*=v
w=this.c
w[d]=e
if(v>1){w[d+1]=f
if(v>2)w[d+2]=g}},
kM(d,e,f){var w=this.b
return f<w?this.c[e*w+f]:0},
kP(d){return this.c[d*this.b]},
kO(d){var w=this.b
if(w<2)return 0
return this.c[d*w+1]},
kN(d){var w=this.b
if(w<3)return 0
return this.c[d*w+2]},
mB(d){var w=this.b
if(w<4)return 0
return this.c[d*w+3]},
mK(d,e){return this.cL(0,d,0,e)},
mJ(d,e){return this.cL(0,d,1,e)},
mI(d,e){return this.cL(0,d,2,e)},
mH(d,e){return this.cL(0,d,3,e)}}
A.YQ.prototype={
bu(d){return new A.YQ(new Int16Array(C.bf(this.c)),this.a,this.b)},
gbw(){return B.e2},
gbd(){return 32767},
cL(d,e,f,g){var w=this.b
if(f<w)this.c[e*w+f]=D.b.t(g)},
kS(d,e,f,g){var w,v=this.b
d*=v
w=this.c
w[d]=D.f.t(e)
if(v>1){w[d+1]=D.f.t(f)
if(v>2)w[d+2]=D.f.t(g)}},
kM(d,e,f){var w=this.b
return f<w?this.c[e*w+f]:0},
kP(d){return this.c[d*this.b]},
kO(d){var w=this.b
if(w<2)return 0
return this.c[d*w+1]},
kN(d){var w=this.b
if(w<3)return 0
return this.c[d*w+2]},
mB(d){var w=this.b
if(w<4)return 0
return this.c[d*w+3]},
mK(d,e){return this.cL(0,d,0,e)},
mJ(d,e){return this.cL(0,d,1,e)},
mI(d,e){return this.cL(0,d,2,e)},
mH(d,e){return this.cL(0,d,3,e)}}
A.YR.prototype={
bu(d){return new A.YR(new Int32Array(C.bf(this.c)),this.a,this.b)},
gbw(){return B.e3},
gbd(){return 2147483647},
cL(d,e,f,g){var w=this.b
if(f<w)this.c[e*w+f]=D.b.t(g)},
kS(d,e,f,g){var w,v=this.b
d*=v
w=this.c
w[d]=D.f.t(e)
if(v>1){w[d+1]=D.f.t(f)
if(v>2)w[d+2]=D.f.t(g)}},
kM(d,e,f){var w=this.b
return f<w?this.c[e*w+f]:0},
kP(d){return this.c[d*this.b]},
kO(d){var w=this.b
if(w<2)return 0
return this.c[d*w+1]},
kN(d){var w=this.b
if(w<3)return 0
return this.c[d*w+2]},
mB(d){var w=this.b
if(w<4)return 0
return this.c[d*w+3]},
mK(d,e){return this.cL(0,d,0,e)},
mJ(d,e){return this.cL(0,d,1,e)},
mI(d,e){return this.cL(0,d,2,e)},
mH(d,e){return this.cL(0,d,3,e)}}
A.YS.prototype={
bu(d){return new A.YS(new Int8Array(C.bf(this.c)),this.a,this.b)},
gbw(){return B.e1},
gbd(){return 127},
cL(d,e,f,g){var w=this.b
if(f<w)this.c[e*w+f]=D.b.t(g)},
kS(d,e,f,g){var w,v=this.b
d*=v
w=this.c
w[d]=D.f.t(e)
if(v>1){w[d+1]=D.f.t(f)
if(v>2)w[d+2]=D.f.t(g)}},
kM(d,e,f){var w=this.b
return f<w?this.c[e*w+f]:0},
kP(d){return this.c[d*this.b]},
kO(d){var w=this.b
if(w<2)return 0
return this.c[d*w+1]},
kN(d){var w=this.b
if(w<3)return 0
return this.c[d*w+2]},
mB(d){var w=this.b
if(w<4)return 0
return this.c[d*w+3]},
mK(d,e){return this.cL(0,d,0,e)},
mJ(d,e){return this.cL(0,d,1,e)},
mI(d,e){return this.cL(0,d,2,e)},
mH(d,e){return this.cL(0,d,3,e)}}
A.YT.prototype={
bu(d){return new A.YT(new Uint16Array(C.bf(this.c)),this.a,this.b)},
gbw(){return B.dq},
gbd(){return 65535},
cL(d,e,f,g){var w=this.b
if(f<w)this.c[e*w+f]=D.b.t(g)},
kS(d,e,f,g){var w,v=this.b
d*=v
w=this.c
w[d]=D.f.t(e)
if(v>1){w[d+1]=D.f.t(f)
if(v>2)w[d+2]=D.f.t(g)}},
kM(d,e,f){var w=this.b
return f<w?this.c[e*w+f]:0},
kP(d){return this.c[d*this.b]},
kO(d){var w=this.b
if(w<2)return 0
return this.c[d*w+1]},
kN(d){var w=this.b
if(w<3)return 0
return this.c[d*w+2]},
mB(d){var w=this.b
if(w<4)return 0
return this.c[d*w+3]},
mK(d,e){return this.cL(0,d,0,e)},
mJ(d,e){return this.cL(0,d,1,e)},
mI(d,e){return this.cL(0,d,2,e)},
mH(d,e){return this.cL(0,d,3,e)}}
A.YU.prototype={
bu(d){return new A.YU(new Uint32Array(C.bf(this.c)),this.a,this.b)},
gbw(){return B.dr},
gbd(){return 4294967295},
cL(d,e,f,g){var w=this.b
if(f<w)this.c[e*w+f]=D.b.t(g)},
kS(d,e,f,g){var w,v=this.b
d*=v
w=this.c
w[d]=D.f.t(e)
if(v>1){w[d+1]=D.f.t(f)
if(v>2)w[d+2]=D.f.t(g)}},
kM(d,e,f){var w=this.b
return f<w?this.c[e*w+f]:0},
kP(d){return this.c[d*this.b]},
kO(d){var w=this.b
if(w<2)return 0
return this.c[d*w+1]},
kN(d){var w=this.b
if(w<3)return 0
return this.c[d*w+2]},
mB(d){var w=this.b
if(w<4)return 0
return this.c[d*w+3]},
mK(d,e){return this.cL(0,d,0,e)},
mJ(d,e){return this.cL(0,d,1,e)},
mI(d,e){return this.cL(0,d,2,e)},
mH(d,e){return this.cL(0,d,3,e)}}
A.m7.prototype={
bu(d){return A.aU7(this)},
gbw(){return B.H},
gbd(){return 255},
cL(d,e,f,g){var w=this.b
if(f<w)this.c[e*w+f]=D.b.t(g)},
kS(d,e,f,g){var w,v=this.b
d*=v
w=this.c
w[d]=D.f.t(e)
if(v>1){w[d+1]=D.f.t(f)
if(v>2)w[d+2]=D.f.t(g)}},
Cf(d,e,f,g,h){var w,v=this.b
d*=v
w=this.c
w[d]=D.b.t(e)
if(v>1){w[d+1]=D.b.t(f)
if(v>2){w[d+2]=D.b.t(g)
if(v>3)w[d+3]=D.b.t(h)}}},
kM(d,e,f){var w=this.b
return f<w?this.c[e*w+f]:0},
kP(d){var w
d*=this.b
w=this.c
if(d>=w.length)return 0
return w[d]},
kO(d){var w=this.b
if(w<2)return 0
d*=w
w=this.c
if(d>=w.length)return 0
return w[d+1]},
kN(d){var w=this.b
if(w<3)return 0
d*=w
w=this.c
if(d>=w.length)return 0
return w[d+2]},
mB(d){var w=this.b
if(w<4)return 255
d*=w
w=this.c
if(d>=w.length)return 0
return w[d+3]},
mK(d,e){return this.cL(0,d,0,e)},
mJ(d,e){return this.cL(0,d,1,e)},
mI(d,e){return this.cL(0,d,2,e)},
mH(d,e){return this.cL(0,d,3,e)}}
A.ug.prototype={
bu(d){var w=this
return new A.ug(w.a,w.b,w.c,w.d)},
gbw(){return B.cQ},
gm(d){return this.d.c},
gd4(){return null},
gbd(){return 1},
giq(d){return this.a},
gjg(d){return this.b},
gM(d){return this},
q(){var w,v=this,u=v.d
if(++v.a===u.a){v.a=0
if(++v.b===u.b)return!1}w=v.c+u.c
v.c=w
return w<u.d.length},
h(d,e){var w,v=this.d
if(e<v.c){v=v.d[this.c+e]
w=$.dn
v=(w!=null?w:A.dO())[v]}else v=0
return v},
l(d,e,f){var w=this.d
if(e<w.c)w.d[this.c+e]=A.dp(f)},
gcH(d){return this.gae(this)},
scH(d,e){this.sae(0,e)},
gae(d){var w,v=this.d
if(v.c>0){v=v.d[this.c]
w=$.dn
v=(w!=null?w:A.dO())[v]}else v=0
return v},
sae(d,e){var w=this.d
if(w.c>0)w.d[this.c]=A.dp(e)},
gap(){var w,v=this.d
if(v.c>1){v=v.d[this.c+1]
w=$.dn
v=(w!=null?w:A.dO())[v]}else v=0
return v},
sap(d){var w=this.d
if(w.c>1)w.d[this.c+1]=A.dp(d)},
gaq(d){var w,v=this.d
if(v.c>2){v=v.d[this.c+2]
w=$.dn
v=(w!=null?w:A.dO())[v]}else v=0
return v},
saq(d,e){var w=this.d
if(w.c>2)w.d[this.c+2]=A.dp(e)},
gav(d){var w,v=this.d
if(v.c>3){v=v.d[this.c+3]
w=$.dn
v=(w!=null?w:A.dO())[v]}else v=0
return v},
sav(d,e){var w,v=this.d
if(v.c>3){w=this.gap()
v.d[this.c+3]=A.dp(w)}},
geq(){return this.gae(this)/1},
seq(d){this.sae(0,d)},
gec(){return this.gap()/1},
sec(d){this.sap(d)},
geh(){return this.gaq(this)/1},
seh(d){this.saq(0,d)},
geu(){return this.gav(this)/1},
seu(d){this.sav(0,d)},
gfd(){return A.em(this)},
eN(d,e){var w=this
if(w.d.c>0){w.sae(0,e.gae(e))
w.sap(e.gap())
w.saq(0,e.gaq(e))
w.sav(0,e.gav(e))}},
hI(d,e,f){var w=this,v=w.d,u=v.c
if(u>0){v=v.d
v[w.c]=A.dp(d)
if(u>1){v[w.c+1]=A.dp(e)
if(u>2)v[w.c+2]=A.dp(f)}}},
he(d,e,f,g){var w=this,v=w.d,u=v.c
if(u>0){v=v.d
v[w.c]=A.dp(d)
if(u>1){v[w.c+1]=A.dp(e)
if(u>2){v[w.c+2]=A.dp(f)
if(u>3)v[w.c+3]=A.dp(g)}}}},
ga1(d){return new A.dv(this)},
k(d,e){var w,v,u,t=this
if(e==null)return!1
if(e instanceof A.ug)return C.ag(C.W(t,!0,C.n(t).i("h.E")))===C.ag(C.W(e,!0,C.n(e).i("h.E")))
if(x.L.b(e)){w=J.ak(e)
v=t.d
u=v.c
if(w.gm(e)!==u)return!1
v=v.d
if(v[t.c]!==w.h(e,0))return!1
if(u>1){if(v[t.c+1]!==w.h(e,1))return!1
if(u>2){if(v[t.c+2]!==w.h(e,2))return!1
if(u>3)if(v[t.c+3]!==w.h(e,3))return!1}}return!0}return!1},
gv(d){return C.ag(C.W(this,!0,C.n(this).i("h.E")))},
j1(d){return A.j_(this,null,d,null,null)},
$ibL:1,
$ibO:1,
gh_(d){return this.d}}
A.uh.prototype={
bu(d){var w=this
return new A.uh(w.a,w.b,w.c,w.d)},
gm(d){return this.d.c},
gd4(){return null},
gbd(){return 1},
gbw(){return B.dp},
giq(d){return this.a},
gjg(d){return this.b},
gM(d){return this},
q(){var w,v=this,u=v.d
if(++v.a===u.a){v.a=0
if(++v.b===u.b)return!1}w=v.c+u.c
v.c=w
return w<u.d.length},
h(d,e){var w=this.d
return e<w.c?w.d[this.c+e]:0},
l(d,e,f){var w=this.d
if(e<w.c)w.d[this.c+e]=f},
gcH(d){return this.gae(this)},
scH(d,e){this.sae(0,e)},
gae(d){var w=this.d
return w.c>0?w.d[this.c]:0},
sae(d,e){var w=this.d
if(w.c>0)w.d[this.c]=e},
gap(){var w=this.d
return w.c>1?w.d[this.c+1]:0},
sap(d){var w=this.d
if(w.c>1)w.d[this.c+1]=d},
gaq(d){var w=this.d
return w.c>2?w.d[this.c+2]:0},
saq(d,e){var w=this.d
if(w.c>2)w.d[this.c+2]=e},
gav(d){var w=this.d
return w.c>3?w.d[this.c+3]:1},
sav(d,e){var w=this.d
if(w.c>3)w.d[this.c+3]=e},
geq(){return this.gae(this)/1},
seq(d){this.sae(0,d)},
gec(){return this.gap()/1},
sec(d){this.sap(d)},
geh(){return this.gaq(this)/1},
seh(d){this.saq(0,d)},
geu(){return this.gav(this)/1},
seu(d){this.sav(0,d)},
gfd(){return A.em(this)},
eN(d,e){var w=this
w.sae(0,e.gae(e))
w.sap(e.gap())
w.saq(0,e.gaq(e))
w.sav(0,e.gav(e))},
hI(d,e,f){var w=this.d,v=w.d,u=this.c
v[u]=d
w=w.c
if(w>1){v[u+1]=e
if(w>2)v[u+2]=f}},
he(d,e,f,g){var w=this.d,v=w.d,u=this.c
v[u]=d
w=w.c
if(w>1){v[u+1]=e
if(w>2){v[u+2]=f
if(w>3)v[u+3]=g}}},
ga1(d){return new A.dv(this)},
k(d,e){var w,v,u,t=this
if(e==null)return!1
if(e instanceof A.uh)return C.ag(C.W(t,!0,C.n(t).i("h.E")))===C.ag(C.W(e,!0,C.n(e).i("h.E")))
if(x.L.b(e)){w=J.ak(e)
v=t.d
u=v.c
if(w.gm(e)!==u)return!1
v=v.d
if(v[t.c]!==w.h(e,0))return!1
if(u>1){if(v[t.c+1]!==w.h(e,1))return!1
if(u>2){if(v[t.c+2]!==w.h(e,2))return!1
if(u>3)if(v[t.c+3]!==w.h(e,3))return!1}}return!0}return!1},
gv(d){return C.ag(C.W(this,!0,C.n(this).i("h.E")))},
j1(d){return A.j_(this,null,d,null,null)},
$ibL:1,
$ibO:1,
gh_(d){return this.d}}
A.ui.prototype={
bu(d){var w=this
return new A.ui(w.a,w.b,w.c,w.d)},
gm(d){return this.d.c},
gd4(){return null},
gbd(){return 1},
gbw(){return B.e0},
giq(d){return this.a},
gjg(d){return this.b},
gM(d){return this},
q(){var w,v=this,u=v.d
if(++v.a===u.a){v.a=0
if(++v.b===u.b)return!1}w=v.c+u.c
v.c=w
return w<u.d.length},
h(d,e){var w=this.d
return e<w.c?w.d[this.c+e]:0},
l(d,e,f){var w=this.d
if(e<w.c)w.d[this.c+e]=f},
gcH(d){return this.gae(this)},
scH(d,e){this.sae(0,e)},
gae(d){var w=this.d
return w.c>0?w.d[this.c]:0},
sae(d,e){var w=this.d
if(w.c>0)w.d[this.c]=e},
gap(){var w=this.d
return w.c>1?w.d[this.c+1]:0},
sap(d){var w=this.d
if(w.c>1)w.d[this.c+1]=d},
gaq(d){var w=this.d
return w.c>2?w.d[this.c+2]:0},
saq(d,e){var w=this.d
if(w.c>2)w.d[this.c+2]=e},
gav(d){var w=this.d
return w.c>3?w.d[this.c+3]:0},
sav(d,e){var w=this.d
if(w.c>3)w.d[this.c+3]=e},
geq(){return this.gae(this)/1},
seq(d){this.sae(0,d)},
gec(){return this.gap()/1},
sec(d){this.sap(d)},
geh(){return this.gaq(this)/1},
seh(d){this.saq(0,d)},
geu(){return this.gav(this)/1},
seu(d){this.sav(0,d)},
gfd(){return A.em(this)},
eN(d,e){var w=this
w.sae(0,e.gae(e))
w.sap(e.gap())
w.saq(0,e.gaq(e))
w.sav(0,e.gav(e))},
hI(d,e,f){var w=this.d,v=w.d,u=this.c
v[u]=d
w=w.c
if(w>1){v[u+1]=e
if(w>2)v[u+2]=f}},
he(d,e,f,g){var w=this.d,v=w.d,u=this.c
v[u]=d
w=w.c
if(w>1){v[u+1]=e
if(w>2){v[u+2]=f
if(w>3)v[u+3]=g}}},
ga1(d){return new A.dv(this)},
k(d,e){var w,v,u,t=this
if(e==null)return!1
if(e instanceof A.ui)return C.ag(C.W(t,!0,C.n(t).i("h.E")))===C.ag(C.W(e,!0,C.n(e).i("h.E")))
if(x.L.b(e)){w=J.ak(e)
v=t.d
u=v.c
if(w.gm(e)!==u)return!1
v=v.d
if(v[t.c]!==w.h(e,0))return!1
if(u>1){if(v[t.c+1]!==w.h(e,1))return!1
if(u>2){if(v[t.c+2]!==w.h(e,2))return!1
if(u>3)if(v[t.c+3]!==w.h(e,3))return!1}}return!0}return!1},
gv(d){return C.ag(C.W(this,!0,C.n(this).i("h.E")))},
j1(d){return A.j_(this,null,d,null,null)},
$ibL:1,
$ibO:1,
gh_(d){return this.d}}
A.uj.prototype={
bu(d){var w=this
return new A.uj(w.a,w.b,w.c,w.d)},
gm(d){return this.d.c},
gd4(){return null},
gbd(){return 32767},
gbw(){return B.e2},
giq(d){return this.a},
gjg(d){return this.b},
gM(d){return this},
q(){var w,v=this,u=v.d
if(++v.a===u.a){v.a=0
if(++v.b===u.b)return!1}w=v.c+u.c
v.c=w
return w<u.d.length},
h(d,e){var w=this.d
return e<w.c?w.d[this.c+e]:0},
l(d,e,f){var w=this.d
if(e<w.c)w.d[this.c+e]=D.f.t(f)},
gcH(d){return this.gae(this)},
scH(d,e){this.sae(0,e)},
gae(d){var w=this.d
return w.c>0?w.d[this.c]:0},
sae(d,e){var w=this.d
if(w.c>0)w.d[this.c]=D.f.t(e)},
gap(){var w=this.d
return w.c>1?w.d[this.c+1]:0},
sap(d){var w=this.d
if(w.c>1)w.d[this.c+1]=D.f.t(d)},
gaq(d){var w=this.d
return w.c>2?w.d[this.c+2]:0},
saq(d,e){var w=this.d
if(w.c>2)w.d[this.c+2]=D.f.t(e)},
gav(d){var w=this.d
return w.c>3?w.d[this.c+3]:0},
sav(d,e){var w=this.d
if(w.c>3)w.d[this.c+3]=D.f.t(e)},
geq(){return this.gae(this)/32767},
seq(d){this.sae(0,d*32767)},
gec(){return this.gap()/32767},
sec(d){this.sap(d*32767)},
geh(){return this.gaq(this)/32767},
seh(d){this.saq(0,d*32767)},
geu(){return this.gav(this)/32767},
seu(d){this.sav(0,d*32767)},
gfd(){return A.em(this)},
eN(d,e){var w=this
w.sae(0,e.gae(e))
w.sap(e.gap())
w.saq(0,e.gaq(e))
w.sav(0,e.gav(e))},
hI(d,e,f){var w,v=this.d,u=v.c
if(u>0){v=v.d
w=this.c
v[w]=D.b.t(d)
if(u>1){v[w+1]=D.b.t(e)
if(u>2)v[w+2]=D.b.t(f)}}},
he(d,e,f,g){var w,v=this.d,u=v.c
if(u>0){v=v.d
w=this.c
v[w]=D.b.t(d)
if(u>1){v[w+1]=D.b.t(e)
if(u>2){v[w+2]=D.b.t(f)
if(u>3)v[w+3]=D.b.t(g)}}}},
ga1(d){return new A.dv(this)},
k(d,e){var w,v,u,t=this
if(e==null)return!1
if(e instanceof A.uj)return C.ag(C.W(t,!0,C.n(t).i("h.E")))===C.ag(C.W(e,!0,C.n(e).i("h.E")))
if(x.L.b(e)){w=J.ak(e)
v=t.d
u=v.c
if(w.gm(e)!==u)return!1
v=v.d
if(v[t.c]!==w.h(e,0))return!1
if(u>1){if(v[t.c+1]!==w.h(e,1))return!1
if(u>2){if(v[t.c+2]!==w.h(e,2))return!1
if(u>3)if(v[t.c+3]!==w.h(e,3))return!1}}return!0}return!1},
gv(d){return C.ag(C.W(this,!0,C.n(this).i("h.E")))},
j1(d){return A.j_(this,null,d,null,null)},
$ibL:1,
$ibO:1,
gh_(d){return this.d}}
A.uk.prototype={
bu(d){var w=this
return new A.uk(w.a,w.b,w.c,w.d)},
gm(d){return this.d.c},
gd4(){return null},
gbd(){return 2147483647},
gbw(){return B.e3},
giq(d){return this.a},
gjg(d){return this.b},
gM(d){return this},
q(){var w,v=this,u=v.d
if(++v.a===u.a){v.a=0
if(++v.b===u.b)return!1}w=v.c+u.c
v.c=w
return w<u.d.length},
h(d,e){var w=this.d
return e<w.c?w.d[this.c+e]:0},
l(d,e,f){var w=this.d
if(e<w.c)w.d[this.c+e]=D.f.t(f)},
gcH(d){return this.gae(this)},
scH(d,e){this.sae(0,e)},
gae(d){var w=this.d
return w.c>0?w.d[this.c]:0},
sae(d,e){var w=this.d
if(w.c>0)w.d[this.c]=D.f.t(e)},
gap(){var w=this.d
return w.c>1?w.d[this.c+1]:0},
sap(d){var w=this.d
if(w.c>1)w.d[this.c+1]=D.f.t(d)},
gaq(d){var w=this.d
return w.c>2?w.d[this.c+2]:0},
saq(d,e){var w=this.d
if(w.c>2)w.d[this.c+2]=D.f.t(e)},
gav(d){var w=this.d
return w.c>3?w.d[this.c+3]:0},
sav(d,e){var w=this.d
if(w.c>3)w.d[this.c+3]=D.f.t(e)},
geq(){return this.gae(this)/2147483647},
seq(d){this.sae(0,d*2147483647)},
gec(){return this.gap()/2147483647},
sec(d){this.sap(d*2147483647)},
geh(){return this.gaq(this)/2147483647},
seh(d){this.saq(0,d*2147483647)},
geu(){return this.gav(this)/2147483647},
seu(d){this.sav(0,d*2147483647)},
gfd(){return A.em(this)},
eN(d,e){var w=this
w.sae(0,e.gae(e))
w.sap(e.gap())
w.saq(0,e.gaq(e))
w.sav(0,e.gav(e))},
hI(d,e,f){var w,v=this.d,u=v.c
if(u>0){v=v.d
w=this.c
v[w]=D.b.t(d)
if(u>1){v[w+1]=D.b.t(e)
if(u>2)v[w+2]=D.b.t(f)}}},
he(d,e,f,g){var w,v=this.d,u=v.c
if(u>0){v=v.d
w=this.c
v[w]=D.b.t(d)
if(u>1){v[w+1]=D.b.t(e)
if(u>2){v[w+2]=D.b.t(f)
if(u>3)v[w+3]=D.b.t(g)}}}},
ga1(d){return new A.dv(this)},
k(d,e){var w,v,u,t=this
if(e==null)return!1
if(e instanceof A.uk)return C.ag(C.W(t,!0,C.n(t).i("h.E")))===C.ag(C.W(e,!0,C.n(e).i("h.E")))
if(x.L.b(e)){w=J.ak(e)
v=t.d
u=v.c
if(w.gm(e)!==u)return!1
v=v.d
if(v[t.c]!==w.h(e,0))return!1
if(u>1){if(v[t.c+1]!==w.h(e,1))return!1
if(u>2){if(v[t.c+2]!==w.h(e,2))return!1
if(u>3)if(v[t.c+3]!==w.h(e,3))return!1}}return!0}return!1},
gv(d){return C.ag(C.W(this,!0,C.n(this).i("h.E")))},
j1(d){return A.j_(this,null,d,null,null)},
$ibL:1,
$ibO:1,
gh_(d){return this.d}}
A.ul.prototype={
bu(d){var w=this
return new A.ul(w.a,w.b,w.c,w.d)},
gm(d){return this.d.c},
gd4(){return null},
gbd(){return 127},
gbw(){return B.e1},
giq(d){return this.a},
gjg(d){return this.b},
gM(d){return this},
q(){var w,v=this,u=v.d
if(++v.a===u.a){v.a=0
if(++v.b===u.b)return!1}w=v.c+u.c
v.c=w
return w<u.d.length},
h(d,e){var w=this.d
return e<w.c?w.d[this.c+e]:0},
l(d,e,f){var w=this.d
if(e<w.c)w.d[this.c+e]=D.f.t(f)},
gcH(d){return this.gae(this)},
scH(d,e){this.sae(0,e)},
gae(d){var w=this.d
return w.c>0?w.d[this.c]:0},
sae(d,e){var w=this.d
if(w.c>0)w.d[this.c]=D.f.t(e)},
gap(){var w=this.d
return w.c>1?w.d[this.c+1]:0},
sap(d){var w=this.d
if(w.c>1)w.d[this.c+1]=D.f.t(d)},
gaq(d){var w=this.d
return w.c>2?w.d[this.c+2]:0},
saq(d,e){var w=this.d
if(w.c>2)w.d[this.c+2]=D.f.t(e)},
gav(d){var w=this.d
return w.c>3?w.d[this.c+3]:0},
sav(d,e){var w=this.d
if(w.c>3)w.d[this.c+3]=D.f.t(e)},
geq(){return this.gae(this)/127},
seq(d){this.sae(0,d*127)},
gec(){return this.gap()/127},
sec(d){this.sap(d*127)},
geh(){return this.gaq(this)/127},
seh(d){this.saq(0,d*127)},
geu(){return this.gav(this)/127},
seu(d){this.sav(0,d*127)},
gfd(){return A.em(this)},
eN(d,e){var w=this
w.sae(0,e.gae(e))
w.sap(e.gap())
w.saq(0,e.gaq(e))
w.sav(0,e.gav(e))},
hI(d,e,f){var w,v=this.d,u=v.c
if(u>0){v=v.d
w=this.c
v[w]=D.b.t(d)
if(u>1){v[w+1]=D.b.t(e)
if(u>2)v[w+2]=D.b.t(f)}}},
he(d,e,f,g){var w,v=this.d,u=v.c
if(u>0){v=v.d
w=this.c
v[w]=D.b.t(d)
if(u>1){v[w+1]=D.b.t(e)
if(u>2){v[w+2]=D.b.t(f)
if(u>3)v[w+3]=D.b.t(g)}}}},
ga1(d){return new A.dv(this)},
k(d,e){var w,v,u,t=this
if(e==null)return!1
if(e instanceof A.ul)return C.ag(C.W(t,!0,C.n(t).i("h.E")))===C.ag(C.W(e,!0,C.n(e).i("h.E")))
if(x.L.b(e)){w=J.ak(e)
v=t.d
u=v.c
if(w.gm(e)!==u)return!1
v=v.d
if(v[t.c]!==w.h(e,0))return!1
if(u>1){if(v[t.c+1]!==w.h(e,1))return!1
if(u>2){if(v[t.c+2]!==w.h(e,2))return!1
if(u>3)if(v[t.c+3]!==w.h(e,3))return!1}}return!0}return!1},
gv(d){return C.ag(C.W(this,!0,C.n(this).i("h.E")))},
j1(d){return A.j_(this,null,d,null,null)},
$ibL:1,
$ibO:1,
gh_(d){return this.d}}
A.um.prototype={
bu(d){var w=this
return new A.um(w.a,w.b,w.c,w.d,w.e,w.f)},
gm(d){var w=this.f,v=w.f
v=v==null?null:v.b
return v==null?w.c:v},
gd4(){return this.f.f},
gbd(){return this.f.gbd()},
gbw(){return B.c5},
giq(d){return this.a},
gjg(d){return this.b},
ji(d,e,f){var w,v,u=this
u.a=e
u.b=f
w=u.f
v=f*w.e
u.e=v
w=e*w.c
u.c=v+D.b.G(w,3)
u.d=w&7},
gM(d){return this},
q(){var w,v=this,u=++v.a,t=v.f
if(u===t.a){v.a=0
u=++v.b
v.d=0;++v.c
v.e=v.e+t.e
return u<t.b}w=t.c
if(t.f!=null||w===1){if(++v.d>7){v.d=0;++v.c}}else{u*=w
v.d=u&7
v.c=v.e+D.b.G(u,3)}u=v.c
t=t.d
t===$&&C.b()
return u<t.byteLength},
OG(d,e){var w,v=this.c,u=7-(this.d+e)
if(u<0){u+=8;++v}w=this.f.d
w===$&&C.b()
if(v>=w.length)return 0
return D.b.de(w[v],u)&1},
jX(d){var w=this.f,v=w.f
if(v==null)w=w.c>d?this.OG(0,d):0
else w=v.kM(0,this.OG(0,0),d)
return w},
fS(d,e){var w,v,u,t,s,r,q=this.f
if(d>=q.c)return
w=this.c
v=7-(this.d+d)
if(v<0){++w
v+=8}u=q.d
u===$&&C.b()
t=u[w]
s=D.b.bv(D.f.t(e),0,1)
r=B.a9y[v]
u=D.f.cW(s,v)
q.d[w]=(t&r|u)>>>0},
h(d,e){return this.jX(e)},
l(d,e,f){return this.fS(e,f)},
gcH(d){return this.OG(0,0)},
scH(d,e){this.fS(0,e)},
gae(d){return this.jX(0)},
sae(d,e){this.fS(0,e)},
gap(){return this.jX(1)},
sap(d){this.fS(1,d)},
gaq(d){return this.jX(2)},
saq(d,e){this.fS(2,e)},
gav(d){return this.jX(3)},
sav(d,e){this.fS(3,e)},
geq(){return this.jX(0)/this.f.gbd()},
seq(d){this.fS(0,d*this.f.gbd())},
gec(){return this.jX(1)/this.f.gbd()},
sec(d){this.fS(1,d*this.f.gbd())},
geh(){return this.jX(2)/this.f.gbd()},
seh(d){this.fS(2,d*this.f.gbd())},
geu(){return this.jX(3)/this.f.gbd()},
seu(d){this.fS(3,d*this.f.gbd())},
gfd(){return A.em(this)},
eN(d,e){var w=this
w.fS(0,e.gae(e))
w.fS(1,e.gap())
w.fS(2,e.gaq(e))
w.fS(3,e.gav(e))},
hI(d,e,f){var w=this,v=w.f.c
if(v>0){w.fS(0,d)
if(v>1){w.fS(1,e)
if(v>2)w.fS(2,f)}}},
he(d,e,f,g){var w=this,v=w.f.c
if(v>0){w.fS(0,d)
if(v>1){w.fS(1,e)
if(v>2){w.fS(2,f)
if(v>3)w.fS(3,g)}}}},
ga1(d){return new A.dv(this)},
k(d,e){var w,v,u,t=this
if(e==null)return!1
if(e instanceof A.um)return C.ag(C.W(t,!0,C.n(t).i("h.E")))===C.ag(C.W(e,!0,C.n(e).i("h.E")))
if(x.L.b(e)){w=t.f
v=w.f
u=v!=null?v.b:w.c
w=J.ak(e)
if(w.gm(e)!==u)return!1
if(t.jX(0)!==w.h(e,0))return!1
if(u>1){if(t.jX(1)!==w.h(e,1))return!1
if(u>2){if(t.jX(2)!==w.h(e,2))return!1
if(u>3)if(t.jX(3)!==w.h(e,3))return!1}}return!0}return!1},
gv(d){return C.ag(C.W(this,!0,C.n(this).i("h.E")))},
j1(d){return A.j_(this,null,d,null,null)},
$ibL:1,
$ibO:1,
gh_(d){return this.f}}
A.un.prototype={
bu(d){var w=this
return new A.un(w.a,w.b,w.c,w.d)},
gm(d){return this.d.c},
gd4(){return null},
gbd(){return 65535},
gbw(){return B.dq},
giq(d){return this.a},
gjg(d){return this.b},
gM(d){return this},
q(){var w,v=this,u=v.d
if(++v.a===u.a){v.a=0
if(++v.b===u.b)return!1}w=v.c+u.c
v.c=w
return w<u.d.length},
h(d,e){var w=this.d
return e<w.c?w.d[this.c+e]:0},
l(d,e,f){var w=this.d
if(e<w.c)w.d[this.c+e]=D.f.t(f)},
gcH(d){return this.gae(this)},
scH(d,e){this.sae(0,e)},
gae(d){var w=this.d
return w.c>0?w.d[this.c]:0},
sae(d,e){var w=this.d
if(w.c>0)w.d[this.c]=D.f.t(e)},
gap(){var w=this.d
return w.c>1?w.d[this.c+1]:0},
sap(d){var w=this.d
if(w.c>1)w.d[this.c+1]=D.f.t(d)},
gaq(d){var w=this.d
return w.c>2?w.d[this.c+2]:0},
saq(d,e){var w=this.d
if(w.c>2)w.d[this.c+2]=D.f.t(e)},
gav(d){var w=this.d
return w.c>3?w.d[this.c+3]:0},
sav(d,e){var w=this.d
if(w.c>3)w.d[this.c+3]=D.f.t(e)},
geq(){return this.gae(this)/65535},
seq(d){this.sae(0,d*65535)},
gec(){return this.gap()/65535},
sec(d){this.sap(d*65535)},
geh(){return this.gaq(this)/65535},
seh(d){this.saq(0,d*65535)},
geu(){return this.gav(this)/65535},
seu(d){this.sav(0,d*65535)},
gfd(){return A.em(this)},
eN(d,e){var w=this
w.sae(0,e.gae(e))
w.sap(e.gap())
w.saq(0,e.gaq(e))
w.sav(0,e.gav(e))},
hI(d,e,f){var w,v=this.d,u=v.c
if(u>0){v=v.d
w=this.c
v[w]=D.b.t(d)
if(u>1){v[w+1]=D.b.t(e)
if(u>2)v[w+2]=D.b.t(f)}}},
he(d,e,f,g){var w,v=this.d,u=v.c
if(u>0){v=v.d
w=this.c
v[w]=D.b.t(d)
if(u>1){v[w+1]=D.b.t(e)
if(u>2){v[w+2]=D.b.t(f)
if(u>3)v[w+3]=D.b.t(g)}}}},
ga1(d){return new A.dv(this)},
k(d,e){var w,v,u,t=this
if(e==null)return!1
if(e instanceof A.un)return C.ag(C.W(t,!0,C.n(t).i("h.E")))===C.ag(C.W(e,!0,C.n(e).i("h.E")))
if(x.L.b(e)){w=J.ak(e)
v=t.d
u=v.c
if(w.gm(e)!==u)return!1
v=v.d
if(v[t.c]!==w.h(e,0))return!1
if(u>1){if(v[t.c+1]!==w.h(e,1))return!1
if(u>2){if(v[t.c+2]!==w.h(e,2))return!1
if(u>3)if(v[t.c+3]!==w.h(e,3))return!1}}return!0}return!1},
gv(d){return C.ag(C.W(this,!0,C.n(this).i("h.E")))},
j1(d){return A.j_(this,null,d,null,null)},
$ibL:1,
$ibO:1,
gh_(d){return this.d}}
A.uo.prototype={
bu(d){var w=this
return new A.uo(w.a,w.b,w.c,w.d,w.e,w.f)},
gm(d){var w=this.f,v=w.f
v=v==null?null:v.b
return v==null?w.c:v},
gd4(){return this.f.f},
gbd(){return this.f.gbd()},
gbw(){return B.c6},
ga4y(){var w=this.f
return w.f!=null?2:w.c<<1>>>0},
giq(d){return this.a},
gjg(d){return this.b},
ji(d,e,f){var w,v,u,t=this
t.a=e
t.b=f
w=t.ga4y()
v=t.b*t.f.e
t.e=v
u=t.a*w
t.c=v+D.b.G(u,3)
t.d=u&7},
gM(d){return this},
q(){var w,v,u=this,t=u.f
if(++u.a===t.a){u.a=0
w=++u.b
u.d=0;++u.c
u.e=u.e+t.e
return w<t.b}if(t.f!=null||t.c===1){w=u.d+=2
if(w>7){u.d=0;++u.c}}else{v=u.ga4y()
w=u.a*v
u.d=w&7
u.c=u.e+D.b.G(w,3)}w=u.c
t=t.d
t===$&&C.b()
return w<t.length},
OH(d,e){var w,v=this.c,u=6-(this.d+(e<<1>>>0))
if(u<0){u+=8;++v}w=this.f.d
w===$&&C.b()
return D.b.de(w[v],u)&3},
jY(d){var w=this.f,v=w.f
if(v==null)w=w.c>d?this.OH(0,d):0
else w=v.kM(0,this.OH(0,0),d)
return w},
fT(d,e){var w,v,u,t,s,r,q=this.f
if(d>=q.c)return
w=this.c
v=6-(this.d+(d<<1>>>0))
if(v<0){++w
v+=8}u=q.d
u===$&&C.b()
t=u[w]
s=D.b.bv(D.f.t(e),0,3)
r=B.WJ[D.b.G(v,1)]
u=D.f.cW(s,v)
q.d[w]=(t&r|u)>>>0},
h(d,e){return this.jY(e)},
l(d,e,f){return this.fT(e,f)},
gcH(d){return this.OH(0,0)},
scH(d,e){this.fT(0,e)},
gae(d){return this.jY(0)},
sae(d,e){this.fT(0,e)},
gap(){return this.jY(1)},
sap(d){this.fT(1,d)},
gaq(d){return this.jY(2)},
saq(d,e){this.fT(2,e)},
gav(d){return this.jY(3)},
sav(d,e){this.fT(3,e)},
geq(){return this.jY(0)/this.f.gbd()},
seq(d){this.fT(0,d*this.f.gbd())},
gec(){return this.jY(1)/this.f.gbd()},
sec(d){this.fT(1,d*this.f.gbd())},
geh(){return this.jY(2)/this.f.gbd()},
seh(d){this.fT(2,d*this.f.gbd())},
geu(){return this.jY(3)/this.f.gbd()},
seu(d){this.fT(3,d*this.f.gbd())},
gfd(){return A.em(this)},
eN(d,e){var w=this
w.fT(0,e.gae(e))
w.fT(1,e.gap())
w.fT(2,e.gaq(e))
w.fT(3,e.gav(e))},
hI(d,e,f){var w=this,v=w.f.c
if(v>0){w.fT(0,d)
if(v>1){w.fT(1,e)
if(v>2)w.fT(2,f)}}},
he(d,e,f,g){var w=this,v=w.f.c
if(v>0){w.fT(0,d)
if(v>1){w.fT(1,e)
if(v>2){w.fT(2,f)
if(v>3)w.fT(3,g)}}}},
ga1(d){return new A.dv(this)},
k(d,e){var w,v,u,t=this
if(e==null)return!1
if(e instanceof A.uo)return C.ag(C.W(t,!0,C.n(t).i("h.E")))===C.ag(C.W(e,!0,C.n(e).i("h.E")))
if(x.L.b(e)){w=t.f
v=w.f
u=v!=null?v.b:w.c
w=J.ak(e)
if(w.gm(e)!==u)return!1
if(t.jY(0)!==w.h(e,0))return!1
if(u>1){if(t.jY(1)!==w.h(e,1))return!1
if(u>2){if(t.jY(2)!==w.h(e,2))return!1
if(u>3)if(t.jY(3)!==w.h(e,3))return!1}}return!0}return!1},
gv(d){return C.ag(C.W(this,!0,C.n(this).i("h.E")))},
j1(d){return A.j_(this,null,d,null,null)},
$ibL:1,
$ibO:1,
gh_(d){return this.f}}
A.up.prototype={
bu(d){var w=this
return new A.up(w.a,w.b,w.c,w.d)},
gm(d){return this.d.c},
gd4(){return null},
gbd(){return 4294967295},
gbw(){return B.dr},
giq(d){return this.a},
gjg(d){return this.b},
gM(d){return this},
q(){var w,v=this,u=v.d
if(++v.a===u.a){v.a=0
if(++v.b===u.b)return!1}w=v.c+u.c
v.c=w
return w<u.d.length},
h(d,e){var w=this.d
return e<w.c?w.d[this.c+e]:0},
l(d,e,f){var w=this.d
if(e<w.c)w.d[this.c+e]=D.f.t(f)},
gcH(d){return this.gae(this)},
scH(d,e){this.sae(0,e)},
gae(d){var w=this.d
return w.c>0?w.d[this.c]:0},
sae(d,e){var w=this.d
if(w.c>0)w.d[this.c]=D.f.t(e)},
gap(){var w=this.d
return w.c>1?w.d[this.c+1]:0},
sap(d){var w=this.d
if(w.c>1)w.d[this.c+1]=D.f.t(d)},
gaq(d){var w=this.d
return w.c>2?w.d[this.c+2]:0},
saq(d,e){var w=this.d
if(w.c>2)w.d[this.c+2]=D.f.t(e)},
gav(d){var w=this.d
return w.c>3?w.d[this.c+3]:0},
sav(d,e){var w=this.d
if(w.c>3)w.d[this.c+3]=D.f.t(e)},
geq(){return this.gae(this)/4294967295},
seq(d){this.sae(0,d*4294967295)},
gec(){return this.gap()/4294967295},
sec(d){this.sap(d*4294967295)},
geh(){return this.gaq(this)/4294967295},
seh(d){this.saq(0,d*4294967295)},
geu(){return this.gav(this)/4294967295},
seu(d){this.sav(0,d*4294967295)},
gfd(){return A.em(this)},
eN(d,e){var w=this
w.sae(0,e.gae(e))
w.sap(e.gap())
w.saq(0,e.gaq(e))
w.sav(0,e.gav(e))},
hI(d,e,f){var w,v=this.d,u=v.c
if(u>0){v=v.d
w=this.c
v[w]=D.b.t(d)
if(u>1){v[w+1]=D.b.t(e)
if(u>2)v[w+2]=D.b.t(f)}}},
he(d,e,f,g){var w,v=this.d,u=v.c
if(u>0){v=v.d
w=this.c
v[w]=D.b.t(d)
if(u>1){v[w+1]=D.b.t(e)
if(u>2){v[w+2]=D.b.t(f)
if(u>3)v[w+3]=D.b.t(g)}}}},
ga1(d){return new A.dv(this)},
k(d,e){var w,v,u,t=this
if(e==null)return!1
if(e instanceof A.up)return C.ag(C.W(t,!0,C.n(t).i("h.E")))===C.ag(C.W(e,!0,C.n(e).i("h.E")))
if(x.L.b(e)){w=J.ak(e)
v=t.d
u=v.c
if(w.gm(e)!==u)return!1
v=v.d
if(v[t.c]!==w.h(e,0))return!1
if(u>1){if(v[t.c+1]!==w.h(e,1))return!1
if(u>2){if(v[t.c+2]!==w.h(e,2))return!1
if(u>3)if(v[t.c+3]!==w.h(e,3))return!1}}return!0}return!1},
gv(d){return C.ag(C.W(this,!0,C.n(this).i("h.E")))},
j1(d){return A.j_(this,null,d,null,null)},
$ibL:1,
$ibO:1,
gh_(d){return this.d}}
A.uq.prototype={
bu(d){var w=this
return new A.uq(w.a,w.b,w.c,w.d,w.e)},
gm(d){var w=this.e,v=w.f
v=v==null?null:v.b
return v==null?w.c:v},
gd4(){return this.e.f},
gbd(){return this.e.gbd()},
gbw(){return B.c7},
giq(d){return this.a},
gjg(d){return this.b},
ji(d,e,f){var w,v,u,t=this
t.a=e
t.b=f
w=t.e
v=w.c*4
u=w.e
if(v===4)w=f*u+D.b.G(e,1)
else if(v===8)w=f*w.a+e
else{w=f*u
w=v===16?w+(e<<1>>>0):w+D.b.G(e*v,3)}t.c=w
w=e*v
t.d=v>7?w&4:w&7},
gM(d){return this},
q(){var w,v,u,t=this,s=t.e
if(++t.a===s.a){t.a=0
w=++t.b
t.d=0
t.c=w*s.e
return w<s.b}v=s.c
w=s.f!=null||v===1
u=t.d
if(w){w=u+4
t.d=w
if(w>7){t.d=0;++t.c}}else{w=t.d=u+(v<<2>>>0)
for(;w>7;){w-=8
t.d=w;++t.c}}w=t.c
s=s.d
s===$&&C.b()
return w<s.length},
OI(d,e){var w,v=this.c,u=4-(this.d+(e<<2>>>0))
if(u<0){u+=8;++v}w=this.e.d
w===$&&C.b()
return D.b.de(w[v],u)&15},
jZ(d){var w=this.e,v=w.f
if(v==null)w=w.c>d?this.OI(0,d):0
else w=v.kM(0,this.OI(0,0),d)
return w},
fU(d,e){var w,v,u,t,s,r,q=this.e
if(d>=q.c)return
w=this.c
v=4-(this.d+(d<<2>>>0))
if(v<0){v+=8;++w}u=q.d
u===$&&C.b()
t=u[w]
s=D.b.bv(D.f.t(e),0,15)
r=v===4?15:240
u=D.f.cW(s,v)
q.d[w]=(t&r|u)>>>0},
h(d,e){return this.jZ(e)},
l(d,e,f){return this.fU(e,f)},
gcH(d){return this.OI(0,0)},
scH(d,e){this.fU(0,e)},
gae(d){return this.jZ(0)},
sae(d,e){this.fU(0,e)},
gap(){return this.jZ(1)},
sap(d){this.fU(1,d)},
gaq(d){return this.jZ(2)},
saq(d,e){this.fU(2,e)},
gav(d){return this.jZ(3)},
sav(d,e){this.fU(3,e)},
geq(){return this.jZ(0)/this.e.gbd()},
seq(d){this.fU(0,d*this.e.gbd())},
gec(){return this.jZ(1)/this.e.gbd()},
sec(d){this.fU(1,d*this.e.gbd())},
geh(){return this.jZ(2)/this.e.gbd()},
seh(d){this.fU(2,d*this.e.gbd())},
geu(){return this.jZ(3)/this.e.gbd()},
seu(d){this.fU(3,d*this.e.gbd())},
gfd(){return A.em(this)},
eN(d,e){var w=this
w.fU(0,e.gae(e))
w.fU(1,e.gap())
w.fU(2,e.gaq(e))
w.fU(3,e.gav(e))},
hI(d,e,f){var w=this,v=w.e.c
if(v>0){w.fU(0,d)
if(v>1){w.fU(1,e)
if(v>2)w.fU(2,f)}}},
he(d,e,f,g){var w=this,v=w.e.c
if(v>0){w.fU(0,d)
if(v>1){w.fU(1,e)
if(v>2){w.fU(2,f)
if(v>3)w.fU(3,g)}}}},
ga1(d){return new A.dv(this)},
k(d,e){var w,v,u=this
if(e==null)return!1
if(e instanceof A.uq)return C.ag(C.W(u,!0,C.n(u).i("h.E")))===C.ag(C.W(e,!0,C.n(e).i("h.E")))
if(x.L.b(e)){w=u.e.c
v=J.ak(e)
if(v.gm(e)!==w)return!1
if(u.jZ(0)!==v.h(e,0))return!1
if(w>1){if(u.jZ(1)!==v.h(e,1))return!1
if(w>2){if(u.jZ(2)!==v.h(e,2))return!1
if(w>3)if(u.jZ(3)!==v.h(e,3))return!1}}return!0}return!1},
gv(d){return C.ag(C.W(this,!0,C.n(this).i("h.E")))},
j1(d){return A.j_(this,null,d,null,null)},
$ibL:1,
$ibO:1,
gh_(d){return this.e}}
A.ur.prototype={
bu(d){var w=this
return new A.ur(w.a,w.b,w.c,w.d)},
gm(d){var w=this.d,v=w.e
v=v==null?null:v.b
return v==null?w.c:v},
gd4(){return this.d.e},
gbd(){return this.d.gbd()},
gbw(){return B.H},
giq(d){return this.a},
gjg(d){return this.b},
gM(d){return this},
q(){var w,v=this,u=v.d
if(++v.a===u.a){v.a=0
if(++v.b===u.b)return!1}w=v.c
w+=u.e==null?u.c:1
v.c=w
return w<u.d.length},
ws(d,e){var w=this.d,v=w.e
if(v!=null)w=v.kM(0,w.d[this.c],e)
else w=e<w.c?w.d[this.c+e]:0
return w},
h(d,e){return this.ws(0,e)},
l(d,e,f){var w=this.d
if(e<w.c)w.d[this.c+e]=D.f.t(D.f.bv(f,0,255))},
gcH(d){return this.d.d[this.c]},
scH(d,e){this.d.d[this.c]=D.f.t(D.f.bv(e,0,255))},
gae(d){var w=this.d,v=w.e
if(v==null)w=w.c>0?w.d[this.c]:0
else w=v.kP(w.d[this.c])
return w},
sae(d,e){var w=this.d
if(w.c>0)w.d[this.c]=D.f.t(D.f.bv(e,0,255))},
gap(){var w=this.d,v=w.e
if(v==null)w=w.c>1?w.d[this.c+1]:0
else w=v.kO(w.d[this.c])
return w},
sap(d){var w=this.d
if(w.c>1)w.d[this.c+1]=D.f.t(D.f.bv(d,0,255))},
gaq(d){var w=this.d,v=w.e
if(v==null)w=w.c>2?w.d[this.c+2]:0
else w=v.kN(w.d[this.c])
return w},
saq(d,e){var w=this.d
if(w.c>2)w.d[this.c+2]=D.f.t(D.f.bv(e,0,255))},
gav(d){var w=this.d,v=w.e
if(v==null)w=w.c>3?w.d[this.c+3]:255
else w=v.mB(w.d[this.c])
return w},
sav(d,e){var w=this.d
if(w.c>3)w.d[this.c+3]=D.f.t(D.f.bv(e,0,255))},
geq(){return this.gae(this)/this.d.gbd()},
seq(d){this.sae(0,d*this.d.gbd())},
gec(){return this.gap()/this.d.gbd()},
sec(d){this.sap(d*this.d.gbd())},
geh(){return this.gaq(this)/this.d.gbd()},
seh(d){this.saq(0,d*this.d.gbd())},
geu(){return this.gav(this)/this.d.gbd()},
seu(d){this.sav(0,d*this.d.gbd())},
gfd(){return A.em(this)},
eN(d,e){var w=this
if(w.d.e!=null)w.scH(0,e.gcH(e))
else{w.sae(0,e.gae(e))
w.sap(e.gap())
w.saq(0,e.gaq(e))
w.sav(0,e.gav(e))}},
hI(d,e,f){var w,v=this.d,u=v.c
if(u>0){v=v.d
w=this.c
v[w]=D.b.t(d)
if(u>1){v[w+1]=D.b.t(e)
if(u>2)v[w+2]=D.b.t(f)}}},
he(d,e,f,g){var w,v=this.d,u=v.c
if(u>0){v=v.d
w=this.c
v[w]=D.b.t(d)
if(u>1){v[w+1]=D.b.t(e)
if(u>2){v[w+2]=D.b.t(f)
if(u>3)v[w+3]=D.b.t(g)}}}},
ga1(d){return new A.dv(this)},
k(d,e){var w,v,u,t=this
if(e==null)return!1
if(e instanceof A.ur)return C.ag(C.W(t,!0,C.n(t).i("h.E")))===C.ag(C.W(e,!0,C.n(e).i("h.E")))
if(x.L.b(e)){w=t.d
v=w.e
u=v!=null?v.b:w.c
w=J.ak(e)
if(w.gm(e)!==u)return!1
if(t.ws(0,0)!==w.h(e,0))return!1
if(u>1){if(t.ws(0,1)!==w.h(e,1))return!1
if(u>2){if(t.ws(0,2)!==w.h(e,2))return!1
if(u>3)if(t.ws(0,3)!==w.h(e,3))return!1}}return!0}return!1},
gv(d){return C.ag(C.W(this,!0,C.n(this).i("h.E")))},
j1(d){return A.j_(this,null,d,null,null)},
$ibL:1,
$ibO:1,
gh_(d){return this.d}}
A.eN.prototype={
bu(d){return new A.eN()},
gh_(d){return $.b_S()},
giq(d){return 0},
gjg(d){return 0},
gm(d){return 0},
gbd(){return 0},
gbw(){return B.H},
gd4(){return null},
h(d,e){return 0},
l(d,e,f){},
gcH(d){return 0},
scH(d,e){},
gae(d){return 0},
sae(d,e){},
gap(){return 0},
sap(d){},
gaq(d){return 0},
saq(d,e){},
gav(d){return 0},
sav(d,e){},
geq(){return 0},
seq(d){},
gec(){return 0},
sec(d){},
geh(){return 0},
seh(d){},
geu(){return 0},
seu(d){},
gfd(){return 0},
eN(d,e){},
hI(d,e,f){},
he(d,e,f,g){},
gM(d){return this},
q(){return!1},
k(d,e){if(e==null)return!1
return e instanceof A.eN},
gv(d){return 0},
ga1(d){return new A.dv(this)},
j1(d){return this},
$ibL:1,
$ibO:1}
A.Uz.prototype={
j(d){return"ImageException: "+this.a},
$ic2:1}
A.h3.prototype={
gm(d){return this.c-this.d},
h(d,e){return this.a[this.d+e]},
l(d,e,f){this.a[this.d+e]=f
return f},
lw(d,e,f,g){var w=this.a,v=J.aR(w),u=this.d+d
if(f instanceof A.h3)v.bO(w,u,u+e,f.a,f.d+g)
else v.bO(w,u,u+e,x.L.a(f),g)},
q9(d,e,f){return this.lw(d,e,f,0)},
aGY(d,e,f){var w=this.a,v=this.d+d
J.ly(w,v,v+e,f)},
LI(d,e,f){var w=this,v=f!=null?w.b+f:w.d
return A.br(w.a,w.e,d,v+e)},
eZ(d){return this.LI(d,0,null)},
qI(d,e){return this.LI(d,0,e)},
Cr(d,e){return this.LI(d,e,null)},
b1(){return this.a[this.d++]},
fs(d){var w=this.eZ(d)
this.d=this.d+(w.c-w.d)
return w},
eI(d){var w,v,u,t,s=this
if(d==null){w=C.a([],x.t)
for(v=s.c;u=s.d,u<v;){t=s.a
s.d=u+1
u=t[u]
if(u===0)return C.dU(w,0,null)
w.push(u)}throw C.c(A.aG("EOF reached without finding string terminator (length: "+C.j(d)+")"))}return C.dU(s.fs(d).e4(),0,null)},
Bs(){return this.eI(null)},
aJn(){var w,v,u,t=this,s=C.a([],x.t)
for(w=t.c;v=t.d,v<w;){u=t.a
t.d=v+1
v=u[v]
if(v===0)return D.Ne.cw(s)
s.push(v)}return D.a0.a5x(0,s,!0)},
V(){var w,v=this,u=v.a,t=v.d,s=v.d=t+1,r=u[t]&255
v.d=s+1
w=u[s]&255
if(v.e)return r<<8|w
return w<<8|r},
lA(){var w,v,u=this,t=u.a,s=u.d,r=u.d=s+1,q=t[s]&255
s=u.d=r+1
w=t[r]&255
u.d=s+1
v=t[s]&255
if(u.e)return v|w<<8|q<<16
return q|w<<8|v<<16},
N(){var w,v,u,t=this,s=t.a,r=t.d,q=t.d=r+1,p=s[r]&255
r=t.d=q+1
w=s[q]&255
q=t.d=r+1
v=s[r]&255
t.d=q+1
u=s[q]&255
if(t.e)return(p<<24|w<<16|v<<8|u)>>>0
return(u<<24|v<<16|w<<8|p)>>>0},
UK(){return A.bh3(this.UM())},
UM(){var w,v,u,t,s,r,q,p=this,o=p.a,n=p.d,m=p.d=n+1,l=o[n]&255
n=p.d=m+1
w=o[m]&255
m=p.d=n+1
v=o[n]&255
n=p.d=m+1
u=o[m]&255
m=p.d=n+1
t=o[n]&255
n=p.d=m+1
s=o[m]&255
m=p.d=n+1
r=o[n]&255
p.d=m+1
q=o[m]&255
if(p.e)return(D.b.cj(l,56)|D.b.cj(w,48)|D.b.cj(v,40)|D.b.cj(u,32)|t<<24|s<<16|r<<8|q)>>>0
return(D.b.cj(q,56)|D.b.cj(r,48)|D.b.cj(s,40)|D.b.cj(t,32)|u<<24|v<<16|w<<8|l)>>>0},
BE(d,e,f){var w,v=this,u=v.a
if(x.D.b(u))return v.aaK(e,f)
w=v.b+e+e
return J.aej(u,w,f<=0?v.c:w+f)},
aaK(d,e){var w,v=this,u=e==null?v.c-v.d-d:e,t=v.a
if(x.D.b(t))return C.bE(t.buffer,t.byteOffset+v.d+d,u)
w=v.d+d
w=J.aej(t,w,w+u)
return new Uint8Array(C.bf(w))},
e4(){return this.aaK(0,null)},
BG(){var w=this.a
if(x.D.b(w))return C.hF(w.buffer,w.byteOffset+this.d,null)
return C.hF(this.e4().buffer,0,null)}}
A.aqI.prototype={
aT(d){var w=this
if(w.a===w.c.length)w.aoN()
w.c[w.a++]=d&255},
p6(d){var w,v,u,t,s=this,r=J.bg(d)
for(;w=s.a,v=w+r,u=s.c,t=u.length,v>t;)s.Zo(v-t)
D.x.dw(u,w,v,d)
s.a+=r},
hp(d){var w=this
if(w.b){w.aT(D.b.G(d,8)&255)
w.aT(d&255)
return}w.aT(d&255)
w.aT(D.b.G(d,8)&255)},
iS(d){var w=this
if(w.b){w.aT(D.b.G(d,24)&255)
w.aT(D.b.G(d,16)&255)
w.aT(D.b.G(d,8)&255)
w.aT(d&255)
return}w.aT(d&255)
w.aT(D.b.G(d,8)&255)
w.aT(D.b.G(d,16)&255)
w.aT(D.b.G(d,24)&255)},
aLt(d){var w,v=this,u=new Float32Array(1)
u[0]=d
w=C.bE(u.buffer,0,null)
if(v.b){v.aT(w[3])
v.aT(w[2])
v.aT(w[1])
v.aT(w[0])
return}v.aT(w[0])
v.aT(w[1])
v.aT(w[2])
v.aT(w[3])},
aLu(d){var w,v=this,u=new Float64Array(1)
u[0]=d
w=C.bE(u.buffer,0,null)
if(v.b){v.aT(w[7])
v.aT(w[6])
v.aT(w[5])
v.aT(w[4])
v.aT(w[3])
v.aT(w[2])
v.aT(w[1])
v.aT(w[0])
return}v.aT(w[0])
v.aT(w[1])
v.aT(w[2])
v.aT(w[3])
v.aT(w[4])
v.aT(w[5])
v.aT(w[6])
v.aT(w[7])},
Zo(d){var w,v,u,t
if(d!=null)w=d
else{v=this.c.length
w=v===0?8192:v*2}v=this.c
u=v.length
t=new Uint8Array(u+w)
D.x.dw(t,0,u,v)
this.c=t},
aoN(){return this.Zo(null)},
gm(d){return this.a}}
A.yQ.prototype={
t(d){var w=this.b
return w===0?0:D.b.f_(this.a,w)},
k(d,e){if(e==null)return!1
return e instanceof A.yQ&&this.a===e.a&&this.b===e.b},
gv(d){return C.Y(this.a,this.b,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a)},
j(d){return""+this.a+"/"+this.b}}
var z=a.updateTypes(["~(h3)","l(iT,l,l)","l([l])","~()","~(pU,r<l>)","L(L)","~(l,l,l,l,l,hj)","~(u?)","~(rI?)","@()","tE()","~(jP)","~(o,jg)","~(l)","~(u,dA)","wd(h8)","iN(Q,f?)","qE(Q)","iO(Q)","@(o)","ba(uI)","~(kD,t)","~(u,dA?)?(jP)","~(jJ)","~(b5)","~(l,eK)","pU(l)","L(ht)","t(rF)","t(u,dA)","b5(l)"])
A.al3.prototype={
$1(d){var w,v,u=this.a,t=u.c
if((t.a.a&30)!==0)return null
w=--u.a
v=u.e
v[this.b]=d
if(w!==0)return null
if(!u.b)return null
u=u.$ti.i("ei<1>")
t.fh(0,C.W(new C.ei(v,u),!0,u.i("h.E")))},
$S(){return this.a.$ti.i("ba(1)")}}
A.al4.prototype={
$2(d,e){var w=this.a.c
if((w.a.a&30)!==0)return null
w.rn(d,e)},
$S:28}
A.ax5.prototype={
$0(){return this.a.ayV(this.b)},
$S:0}
A.ax4.prototype={
$1(d){return d.ga7O()},
$S(){return this.a.$ti.i("t(uX<1>)")}}
A.afH.prototype={
$1(d){return new A.wd(this.a.c,null)},
$S:z+15}
A.afD.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.c,p=H.ST(!1,F.i0,D.q,s,s,s,s,s,q.gjJ(q),s,s),o=H.Yr(!1,F.hZ,D.q,s,s,s,q.goq(q),s,s),n=q.d,m=x.x,l=x.E
m=E.dT(C.a([F.i1,F.bx,p,F.bx,o,F.d3,P.as5(n,new A.afy(r),B.fs,m),Q.Mq,F.bx,P.as5(n,new A.afz(r),B.qz,m),Q.Mr],l),G.E,G.G,I.I)
n=H.k3(q.a,H.xN(s,F.dJ,s,s,s,s,s,s,!0,s,s,s,s,q.c,s,s,s,s,s,s,s,s,s,s,A.aTN(q.e),s,s,s,s,s,s,s,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),!1,10,1,q.goR(),!1,s,K.bz)
o=E.afL(8)
p=H.aKS(E.a5(d).CW)
w=q.f
w=w!=null?A.aRt(I.ay,K.lW,w):s
v=q.e===B.ix?K.mX:s
u=C.a([m,F.d2,n,K.aw,new A.C1(1.7777777777777777,E.fC(s,v,D.q,s,s,new E.dW(s,w,p,o,s,s,I.aZ),s,s,s,s,s,s,s),s)],l)
o=E.dT(C.a([F.i_,F.d3,U.aBU(F.fS,R.l7,new A.afA(r,d))],l),G.E,G.G,I.I)
p=H.k3(q.b,H.xN(s,F.dJ,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,A.aTN(q.e)!=null?"Generated Blur Hash":s,s,s,s,s,s,s,s,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),!1,10,1,s,!1,s,K.bz)
n=E.afL(8)
m=H.aKS(E.a5(d).CW)
w=q.r
w=w!=null?A.aRt(I.ay,K.lW,w):s
q=q.e===B.ix?K.mX:s
t=C.a([o,F.d2,p,K.aw,new A.C1(1.7777777777777777,E.fC(s,q,D.q,s,s,new E.dW(s,w,m,n,s,s,I.aZ),s,s,s,s,s,s,s),s)],l)
return L.H1(new A.afB(r,u,t),new A.afC(r,u,t))},
$S:z+16}
A.afy.prototype={
$1(d){if(d!=null)this.a.c.st2(0,d)},
$S:z+8}
A.afz.prototype={
$1(d){if(d!=null)this.a.c.st2(0,d)},
$S:z+8}
A.afA.prototype={
$0(){var w=0,v=C.a3(x.H),u=this,t
var $async$$0=C.a4(function(d,e){if(d===1)return C.a0(e,v)
while(true)switch(w){case 0:w=2
return C.a7(u.a.c.hB(0),$async$$0)
case 2:t=u.b
if(t.f!=null){t=t.az(x.gV)
t.toString
t.f.iv(R.l1)}return C.a1(null,v)}})
return C.a2($async$$0,v)},
$S:2}
A.afB.prototype={
$1(d){var w=C.W(this.b,!0,x.gy),v=this.a.c
if(v.d===B.fs)w.push(K.aw)
if(v.d===B.fs)D.c.a6(w,this.c)
return L.a0h(L.fB(w,G.E,G.G,I.I),null)},
$S:z+17}
A.afC.prototype={
$1(d){var w=L.eJ(L.fB(this.b,G.E,G.G,I.I),1)
return E.dT(C.a([w,F.ig,L.eJ(this.a.c.d===B.fs?L.fB(this.c,G.E,G.G,I.I):I.aB,1)],x.E),G.E,G.G,I.I)},
$S:z+18}
A.afE.prototype={
$1(d){var w=this.a
w.a4G(d.w)
w.aM()},
$S:z+20}
A.afF.prototype={
$2(d,e){this.a.aM()},
$S:148}
A.afG.prototype={
$0(){this.a.a.d6(0)},
$S:4}
A.anq.prototype={
$2(d,e){this.a.aJU(this.b,this.c,d,e)},
$S(){return C.n(this.a).i("~(pM.T,~(u,dA?))")}}
A.anr.prototype={
$3(d,e,f){return this.adX(d,e,f)},
adX(d,e,f){var w=0,v=C.a3(x.H),u=this,t
var $async$$3=C.a4(function(g,h){if(g===1)return C.a0(h,v)
while(true)switch(w){case 0:w=2
return C.a7(null,$async$$3)
case 2:t=u.c
if(t.a==null)t.W5(new A.aBW(C.a([],x.v),C.a([],x.d)))
t=t.a
t.toString
t.KB(C.c3("while resolving an image"),e,null,!0,f)
return C.a1(null,v)}})
return C.a2($async$$3,v)},
$S(){return C.n(this.a).i("aw<~>(pM.T?,u,dA?)")}}
A.ann.prototype={
adW(d,e){var w=0,v=C.a3(x.H),u,t=this,s
var $async$$2=C.a4(function(f,g){if(f===1)return C.a0(g,v)
while(true)switch(w){case 0:s=t.a
if(s.b){w=1
break}s.b=!0
t.b.$3(s.a,d,e)
case 1:return C.a1(u,v)}})
return C.a2($async$$2,v)},
$2(d,e){return this.adW(d,e)},
$S:149}
A.anm.prototype={
$1(d){var w,v,u,t=this
t.a.a=d
try{t.c.$2(d,t.d)}catch(u){w=C.aO(u)
v=C.bj(u)
t.d.$2(w,v)}},
$S(){return C.n(this.b).i("ba(pM.T)")}}
A.ano.prototype={
$0(){var w=this.a.a
w.toString
return w},
$S:z+10}
A.anp.prototype={
$0(){var w=this.b,v=A.b6m(this.a.atK(w,$.ub.gaFZ()),"MemoryImage("+("<optimized out>#"+C.cw(w.a))+")",1)
return v},
$S:z+10}
A.anu.prototype={
$1(d){return d.c},
$S:z+22}
A.aq2.prototype={
$2(d,e){this.a.KB(C.c3("resolving an image codec"),d,this.b,!0,e)},
$S:28}
A.aq1.prototype={
$0(){this.a.a1m()},
$S:0}
A.atK.prototype={
$1(d){},
$S:68}
A.atL.prototype={
$1(d){},
$S:5}
A.Ov.prototype={
$2(d,e){return d.toLowerCase()===e.toLowerCase()},
$S:151}
A.Ow.prototype={
$1(d){return D.d.gv(d.toLowerCase())},
$S:152}
A.afR.prototype={
$1(d){var w,v,u,t=this.a,s=C.bE(x.R.a(C.bbM(t.response)),0,null),r=A.aMM(s,x.L),q=t.status
q.toString
w=s.length
v=this.c
u=D.UO.gaJW(t)
t=t.statusText
r=new A.uY(A.bgT(new A.pc(r)),v,q,t,w,u,!1,!0)
r.Xi(q,w,u,!1,!0,t,v)
this.b.fh(0,r)},
$S:69}
A.afS.prototype={
$1(d){this.a.rn(new A.CI("XMLHttpRequest error.",this.b.b),C.awV())},
$S:69}
A.ag0.prototype={
$1(d){return this.a.fh(0,new Uint8Array(C.bf(d)))},
$S:68}
A.and.prototype={
$2(d,e){var w=A.aSG(e)
this.a.a.l(0,d,w)
return w},
$S:z+12}
A.ane.prototype={
$2(d,e){var w=e.bu(0)
this.a.a.l(0,d,w)
return w},
$S:z+25}
A.anf.prototype={
$2(d,e){var w=A.aSG(e)
this.a.b.a.l(0,d,w)
return w},
$S:z+12}
A.afJ.prototype={
$4(d,e,f,g){var w,v,u=this,t=u.a
if(t.a<u.c){w=u.b.c&&u.d.ch!=null
v=u.e
if(w){w=u.d
v.he(w.ch.kP(d),w.ch.kO(d),w.ch.kN(d),w.ch.mB(d))}else v.he(d,e,f,g)
v.q();++t.a}},
$S:154}
A.ak1.prototype={
$1(d){var w,v,u,t,s=this.b,r=s.fy,q=this.a,p=q.b
r=r[p]
w=s.go
v=q.a
w=w[v]
u=new Uint32Array(r*w)
t=p+1
q.b=t
if(t===s.id){q.b=0
q.a=v+1}return u},
$S:155}
A.ao3.prototype={
$1(d){var w,v,u,t,s=this.b,r=s.b1(),q=s.b1()
s=this.a
if(!s.d.y.an(0,r))throw C.c(A.aG("Invalid Component in SOS block"))
w=s.d.y.h(0,r)
w.toString
v=D.b.G(q,4)&15
u=q&15
t=s.z
if(v<t.length){t=t[v]
t.toString
w.w=t}s=s.y
if(u<s.length){s=s[u]
s.toString
w.x=s}return w},
$S:z+26}
A.azm.prototype={
$2(d,e){return(d|e<<16)>>>0},
$S:58};(function aliases(){var w=A.tE.prototype
w.agD=w.aj
w.agE=w.Z
w.agC=w.DF
w=A.Ou.prototype
w.LO=w.HS})();(function installTearOffs(){var w=a._instance_1i,v=a._instance_0i,u=a._instance_0u,t=a._instance_1u,s=a._instance_2u,r=a._static_1,q=a._static_2,p=a.installInstanceTearOff,o=a.installStaticTearOff
var n
w(n=A.a4X.prototype,"gk9","J",7)
v(n,"gyP","d6",3)
u(n=A.HW.prototype,"gauU","auV",3)
u(n,"gayW","ayX",3)
u(n,"gayY","ayZ",3)
t(n,"gauB","auC",7)
s(n,"gauJ","auK",14)
u(n,"gauD","auE",3)
r(A,"bec","bcT",27)
v(n=A.Ce.prototype,"goq","ah",9)
t(n,"goR","hW",19)
v(n,"gjJ","fp",9)
s(A.Sh.prototype,"ga_j","aqV",21)
w(A.tE.prototype,"gES","aj",11)
t(n=A.XS.prototype,"gaqf","aqg",23)
t(n,"gaq2","aq3",24)
w(n,"gES","aj",11)
t(n=A.GI.prototype,"gbV","c8",5)
t(n,"gc0","bU",5)
t(n,"gco","c1",5)
t(n,"gd7","c7",5)
r(A,"bnx","aXI",28)
q(A,"bny","aXJ",29)
r(A,"bnw","aXG",30)
p(A.eK.prototype,"gp_",1,0,null,["$1","$0"],["eL","t"],2,0,0)
p(A.lN.prototype,"gp_",1,0,null,["$1","$0"],["eL","t"],2,0,0)
p(A.pK.prototype,"gp_",1,0,null,["$1","$0"],["eL","t"],2,0,0)
p(A.kC.prototype,"gp_",1,0,null,["$1","$0"],["eL","t"],2,0,0)
p(A.tA.prototype,"gp_",1,0,null,["$1","$0"],["eL","t"],2,0,0)
p(A.nF.prototype,"gp_",1,0,null,["$1","$0"],["eL","t"],2,0,0)
p(A.pJ.prototype,"gp_",1,0,null,["$1","$0"],["eL","t"],2,0,0)
p(A.pI.prototype,"gp_",1,0,null,["$1","$0"],["eL","t"],2,0,0)
p(A.tB.prototype,"gp_",1,0,null,["$1","$0"],["eL","t"],2,0,0)
s(n=A.V_.prototype,"gant","anu",4)
s(n,"ganw","anx",4)
s(n,"gany","anz",4)
s(n,"gann","ano",4)
s(n,"ganp","anq",4)
r(A,"bhd","b9s",0)
r(A,"bh6","b9k",0)
r(A,"bh4","b9i",0)
r(A,"bhb","b9q",0)
r(A,"bhc","b9r",0)
r(A,"bha","b9p",0)
r(A,"bh9","b9o",0)
r(A,"bh8","b9n",0)
r(A,"bhf","b9u",0)
r(A,"bhe","b9t",0)
r(A,"bh7","b9l",0)
r(A,"bh5","b9j",0)
r(A,"bhq","b9F",0)
r(A,"bho","b9D",0)
r(A,"bhg","b9v",0)
r(A,"bhi","b9x",0)
r(A,"bhh","b9w",0)
r(A,"bhj","b9y",0)
r(A,"bhr","b9G",0)
r(A,"bhp","b9E",0)
r(A,"bhk","b9z",0)
r(A,"bhl","b9A",0)
r(A,"bhm","b9B",0)
r(A,"bhn","b9C",0)
t(A.IX.prototype,"gawo","awp",13)
t(A.UO.prototype,"gaE4","aE5",13)
o(A,"aOJ",3,null,["$3"],["b9H"],1,0)
o(A,"bhs",3,null,["$3"],["b9I"],1,0)
o(A,"bhx",3,null,["$3"],["b9N"],1,0)
o(A,"bhy",3,null,["$3"],["b9O"],1,0)
o(A,"bhz",3,null,["$3"],["b9P"],1,0)
o(A,"bhA",3,null,["$3"],["b9Q"],1,0)
o(A,"bhB",3,null,["$3"],["b9R"],1,0)
o(A,"bhC",3,null,["$3"],["b9S"],1,0)
o(A,"bhD",3,null,["$3"],["b9T"],1,0)
o(A,"bhE",3,null,["$3"],["b9U"],1,0)
o(A,"bht",3,null,["$3"],["b9J"],1,0)
o(A,"bhu",3,null,["$3"],["b9K"],1,0)
o(A,"bhv",3,null,["$3"],["b9L"],1,0)
o(A,"bhw",3,null,["$3"],["b9M"],1,0)
o(A,"bhG",6,null,["$6"],["ba1"],6,0)
o(A,"bhH",6,null,["$6"],["ba2"],6,0)
o(A,"bhF",6,null,["$6"],["ba0"],6,0)})();(function inheritance(){var w=a.mixin,v=a.inheritMany,u=a.inherit
v(C.eB,[A.HX,A.K5])
u(A.a4X,O.OT)
v(C.u,[A.UV,A.xJ,A.anK,A.aqK,A.azF,A.amO,A.UD,A.azE,A.U2,A.DL,A.A0,A.HW,A.afx,A.OF,A.OG,A.ht,A.Sg,A.Sh,A.pM,A.a7a,A.kD,A.a7b,A.ant,A.afl,A.Ou,A.rF,A.CI,A.kB,A.a6x,A.Te,A.jg,A.eK,A.afK,A.rJ,A.ahC,A.ajn,A.Tk,A.ajZ,A.Tl,A.Tm,A.ak0,A.DT,A.a8J,A.Eg,A.Eh,A.U7,A.an_,A.Ut,A.PW,A.tu,A.ao1,A.pU,A.ao2,A.AG,A.UZ,A.ao5,A.V_,A.Go,A.arr,A.mc,A.yL,A.arX,A.yK,A.arZ,A.ZB,A.ZE,A.ZJ,A.Gw,A.yM,A.ZI,A.jZ,A.a1u,A.ays,A.a1x,A.ayu,A.a1y,A.ayv,A.apf,A.az9,A.IW,A.aza,A.azf,A.azj,A.azl,A.IV,A.azk,A.azb,A.vk,A.a27,A.a29,A.a28,A.a2a,A.IX,A.a25,A.azg,A.a26,A.azu,A.J0,A.Us,A.Ej,A.a2o,A.Ep,A.aqX,A.Uz,A.h3,A.aqI,A.yQ])
u(A.O8,C.jb)
u(A.anJ,A.anK)
u(A.aqJ,A.aqK)
u(A.aH5,A.azF)
v(C.dH,[A.al3,A.ax4,A.afH,A.afy,A.afz,A.afB,A.afC,A.afE,A.anr,A.anm,A.anu,A.atK,A.atL,A.Ow,A.afR,A.afS,A.ag0,A.afJ,A.ak1,A.ao3])
v(C.hs,[A.al4,A.afD,A.afF,A.anq,A.ann,A.aq2,A.Ov,A.and,A.ane,A.anf,A.azm])
v(C.eH,[A.ax5,A.afA,A.afG,A.ano,A.anp,A.aq1])
v(M.am,[A.wf,A.wd])
v(C.fQ,[A.rI,A.we,A.xH,A.agi,A.lE,A.i1,A.OC,A.hC,A.fY,A.xc,A.td,A.kx,A.xw,A.yA,A.Gn,A.qd,A.kW,A.io,A.v9,A.f6,A.k4,A.vl,A.A3,A.amX,A.TV])
u(A.Ce,T.dG)
u(A.lZ,A.pM)
u(A.tE,A.a7a)
v(A.tE,[A.aBW,A.XS])
u(A.ans,A.a7b)
u(A.GI,E.mh)
u(A.C1,E.bn)
v(A.afl,[A.atJ,A.afQ])
u(A.pc,A.HX)
v(A.Ou,[A.aty,A.axa])
v(A.rF,[A.uI,A.uY])
u(A.dv,A.UV)
v(C.h,[A.CK,A.CL,A.CM,A.CN,A.CO,A.CP,A.CQ,A.CR,A.CS,A.CT,A.CU,A.pi,A.pL,A.h2,A.ug,A.uh,A.ui,A.uj,A.uk,A.ul,A.um,A.un,A.uo,A.up,A.uq,A.ur,A.eN])
v(A.pi,[A.PQ,A.PR])
u(A.DN,A.kB)
v(A.eK,[A.lN,A.ty,A.pK,A.kC,A.tA,A.nF,A.pJ,A.pI,A.tB,A.tC,A.tz,A.xy])
v(A.ahC,[A.OH,A.ak_,A.alv,A.amZ,A.UY,A.Zi,A.arY,A.as2,A.ayl,A.ayt,A.azv])
u(A.ahN,A.OH)
u(A.anM,A.ajZ)
v(A.anM,[A.UJ,A.anN,A.anO,A.anP,A.UL])
u(A.UK,A.DT)
u(A.UM,A.Eh)
u(A.amY,A.rJ)
v(A.tu,[A.tv,A.Eo])
u(A.ao4,A.ajn)
u(A.UN,A.Go)
u(A.anQ,A.arr)
v(A.mc,[A.Zz,A.ZA,A.ZC,A.ZD,A.ZG,A.ZH])
v(A.yL,[A.Gv,A.ZF])
v(A.ZJ,[A.o_,A.h7])
u(A.UO,A.IX)
u(A.UP,A.J0)
u(A.UQ,A.a2o)
v(A.h2,[A.xA,A.xB,A.Es,A.Et,A.Eu,A.Ev,A.xC,A.Ew,A.xD,A.xE,A.xF,A.xG])
v(A.aqX,[A.YN,A.YO,A.YP,A.YQ,A.YR,A.YS,A.YT,A.YU,A.m7])
w(A.a7b,C.ap)
w(A.a7a,C.ap)})()
C.dV(b.typeUniverse,JSON.parse('{"HX":{"eB":["1"]},"K5":{"eB":["1"],"eB.T":"1"},"O8":{"jb":[],"c2":[]},"DL":{"atI":["0&"]},"A0":{"atI":["1"]},"OF":{"c2":[]},"OG":{"c2":[]},"wd":{"am":[],"f":[]},"wf":{"am":[],"f":[]},"Ce":{"aq":[]},"lZ":{"pM":["lZ"],"pM.T":"lZ"},"GI":{"C":[],"b3":["C"],"v":[],"U":[],"ao":[]},"C1":{"bn":[],"aI":[],"f":[]},"pc":{"eB":["r<l>"],"eB.T":"r<l>"},"CI":{"c2":[]},"uI":{"rF":[]},"uY":{"rF":[]},"CK":{"bL":[],"h":["au"],"h.E":"au"},"CL":{"bL":[],"h":["au"],"h.E":"au"},"CM":{"bL":[],"h":["au"],"h.E":"au"},"CN":{"bL":[],"h":["au"],"h.E":"au"},"CO":{"bL":[],"h":["au"],"h.E":"au"},"CP":{"bL":[],"h":["au"],"h.E":"au"},"CQ":{"bL":[],"h":["au"],"h.E":"au"},"CR":{"bL":[],"h":["au"],"h.E":"au"},"CS":{"bL":[],"h":["au"],"h.E":"au"},"CT":{"bL":[],"h":["au"],"h.E":"au"},"CU":{"bL":[],"h":["au"],"h.E":"au"},"pi":{"bL":[],"h":["au"],"h.E":"au"},"PQ":{"bL":[],"h":["au"],"h.E":"au"},"PR":{"bL":[],"h":["au"],"h.E":"au"},"lN":{"eK":[]},"ty":{"eK":[]},"pK":{"eK":[]},"kC":{"eK":[]},"tA":{"eK":[]},"nF":{"eK":[]},"pJ":{"eK":[]},"pI":{"eK":[]},"tB":{"eK":[]},"tC":{"eK":[]},"tz":{"eK":[]},"xy":{"eK":[]},"UK":{"DT":[]},"UM":{"Eh":[]},"tv":{"tu":[]},"Eo":{"tu":[]},"UN":{"Go":[]},"Zz":{"mc":[]},"ZA":{"mc":[]},"ZC":{"mc":[]},"ZD":{"mc":[]},"ZG":{"mc":[]},"ZH":{"mc":[]},"Gv":{"yL":[]},"ZF":{"yL":[]},"UP":{"J0":[]},"pL":{"h":["bO"],"h.E":"bO"},"h2":{"h":["bO"]},"xA":{"h2":[],"h":["bO"],"h.E":"bO"},"xB":{"h2":[],"h":["bO"],"h.E":"bO"},"Es":{"h2":[],"h":["bO"],"h.E":"bO"},"Et":{"h2":[],"h":["bO"],"h.E":"bO"},"Eu":{"h2":[],"h":["bO"],"h.E":"bO"},"Ev":{"h2":[],"h":["bO"],"h.E":"bO"},"xC":{"h2":[],"h":["bO"],"h.E":"bO"},"Ew":{"h2":[],"h":["bO"],"h.E":"bO"},"xD":{"h2":[],"h":["bO"],"h.E":"bO"},"xE":{"h2":[],"h":["bO"],"h.E":"bO"},"xF":{"h2":[],"h":["bO"],"h.E":"bO"},"xG":{"h2":[],"h":["bO"],"h.E":"bO"},"ug":{"bO":[],"bL":[],"h":["au"],"h.E":"au"},"uh":{"bO":[],"bL":[],"h":["au"],"h.E":"au"},"ui":{"bO":[],"bL":[],"h":["au"],"h.E":"au"},"uj":{"bO":[],"bL":[],"h":["au"],"h.E":"au"},"uk":{"bO":[],"bL":[],"h":["au"],"h.E":"au"},"ul":{"bO":[],"bL":[],"h":["au"],"h.E":"au"},"um":{"bO":[],"bL":[],"h":["au"],"h.E":"au"},"un":{"bO":[],"bL":[],"h":["au"],"h.E":"au"},"uo":{"bO":[],"bL":[],"h":["au"],"h.E":"au"},"up":{"bO":[],"bL":[],"h":["au"],"h.E":"au"},"uq":{"bO":[],"bL":[],"h":["au"],"h.E":"au"},"ur":{"bO":[],"bL":[],"h":["au"],"h.E":"au"},"eN":{"bO":[],"bL":[],"h":["au"],"h.E":"au"},"Uz":{"c2":[]},"bO":{"bL":[],"h":["au"]}}'))
C.oL(b.typeUniverse,JSON.parse('{"HX":1,"UV":1,"ZJ":1}'))
var y={a:"Stream has been disposed.\nAn ImageStream is considered disposed once at least one listener has been added and subsequently all listeners have been removed and no handles are outstanding from the keepAlive method.\nTo resolve this error, maintain at least one listener on the stream, or create an ImageStreamCompleterHandle from the keepAlive method, or create a new stream for the image."}
var x=(function rtii(){var w=C.A
return{C:w("hp"),x:w("rI"),k:w("aD"),R:w("Cp"),W:w("jJ"),G:w("bL"),M:w("ht"),w:w("a_<o,l>"),h:w("d7"),Y:w("Tk"),j:w("Tm"),g7:w("U2<@>"),U:w("cj<i1,l>"),f:w("Ej"),bo:w("pD"),bs:w("Us"),gx:w("Ut"),P:w("jg"),r:w("eK"),u:w("h2"),cE:w("jP"),cP:w("xJ"),an:w("EI"),hf:w("h<@>"),eB:w("k<PW>"),g9:w("k<Tl>"),m:w("k<DT>"),b:w("k<Eh>"),A:w("k<Ej>"),g:w("k<pL>"),v:w("k<jP>"),O:w("k<r<r<r<l>>>>"),o:w("k<r<r<l>>>"),S:w("k<r<l>>"),dm:w("k<Go>"),X:w("k<yK>"),af:w("k<mc>"),l:w("k<ZE>"),T:w("k<y>"),b5:w("k<atI<r<l>>>"),s:w("k<o>"),aU:w("k<a1y>"),a:w("k<hj>"),ao:w("k<vk>"),F:w("k<a26>"),J:w("k<J0>"),E:w("k<f>"),gn:w("k<a6x>"),e8:w("k<AG>"),t:w("k<l>"),fR:w("k<tu?>"),f8:w("k<UZ?>"),ca:w("k<r<l>?>"),hh:w("k<iT?>"),ff:w("k<hj?>"),d:w("k<~()>"),y:w("k<~(h3)>"),c:w("pU"),V:w("r<ht>"),f0:w("r<EI>"),c7:w("r<IV>"),K:w("r<vk>"),L:w("r<l>"),e:w("ba"),fW:w("yK"),fh:w("ZB"),g0:w("Gv"),ha:w("yL"),fi:w("Gw"),a7:w("yM"),i:w("yQ"),q:w("uI"),er:w("uX<r<l>>"),cB:w("HW<r<l>>"),n:w("uY"),N:w("o"),gP:w("cH<lZ>"),cV:w("a1x"),Q:w("e4"),bv:w("iT"),D:w("hj"),dd:w("IV"),ai:w("a27"),gT:w("a28"),dE:w("a2a"),fm:w("ei<~(u,dA?)>"),gy:w("f"),gf:w("bI<r<@>>"),eP:w("bI<uY>"),Z:w("bI<hj>"),hg:w("Aq<mb>"),_:w("aN<r<@>>"),ci:w("aN<uY>"),fg:w("aN<hj>"),aX:w("a8J"),gV:w("ka"),z:w("@"),p:w("l"),bC:w("UH?"),eg:w("r<l>?"),ez:w("r<tu?>?"),aD:w("hj?"),eW:w("IW?"),B:w("vk?"),dP:w("a29?"),I:w("l?"),H:w("~")}})();(function constants(){var w=a.makeConstList
B.lR=new A.OC(0,"direct")
B.qx=new A.OC(1,"alpha")
B.ix=new A.we(0,"unknown")
B.qy=new A.we(2,"decodeFromBase64String")
B.Od=new A.we(3,"decodeFromUrl")
B.Oe=new A.we(4,"decodeFromBlurHash")
B.fs=new A.rI(0,"encode")
B.qz=new A.rI(1,"decode")
B.qA=new A.fY(0,"none")
B.lT=new A.fY(3,"bitfields")
B.lU=new A.fY(6,"alphaBitfields")
B.Qd=new A.K5(C.A("K5<r<l>>"))
B.Pf=new A.pc(B.Qd)
B.azB=new A.azE()
B.fw=new A.aH5()
B.m4=new A.lE(0,"rgba")
B.ra=new A.lE(1,"bgra")
B.rb=new A.lE(2,"abgr")
B.rc=new A.lE(3,"argb")
B.m5=new A.lE(4,"rgb")
B.rd=new A.lE(5,"bgr")
B.re=new A.lE(6,"grayAlpha")
B.rf=new A.lE(7,"red")
B.rg=new A.agi(4,"luminance")
B.U8=new A.td(0,"red")
B.U9=new A.td(1,"green")
B.Ua=new A.td(2,"blue")
B.Ub=new A.td(3,"alpha")
B.Uc=new A.td(4,"other")
B.te=new A.xc(0,"uint")
B.mI=new A.xc(1,"half")
B.mJ=new A.xc(2,"float")
B.tf=new A.kx(0,"none")
B.c5=new A.i1(0,"uint1")
B.c6=new A.i1(1,"uint2")
B.dp=new A.i1(10,"float32")
B.e0=new A.i1(11,"float64")
B.c7=new A.i1(2,"uint4")
B.H=new A.i1(3,"uint8")
B.dq=new A.i1(4,"uint16")
B.dr=new A.i1(5,"uint32")
B.e1=new A.i1(6,"int8")
B.e2=new A.i1(7,"int16")
B.e3=new A.i1(8,"int32")
B.cQ=new A.i1(9,"float16")
B.UL=new A.TV(1,"page")
B.ae=new A.TV(2,"sequence")
B.UP=new A.amX(1,"deflate")
B.tD=new A.xw(2,"cur")
B.p=new A.hC(0,"none")
B.tI=new A.hC(1,"byte")
B.tJ=new A.hC(10,"sRational")
B.tK=new A.hC(11,"single")
B.tL=new A.hC(12,"double")
B.ag=new A.hC(2,"ascii")
B.a6=new A.hC(3,"short")
B.b7=new A.hC(4,"long")
B.bI=new A.hC(5,"rational")
B.tM=new A.hC(6,"sByte")
B.du=new A.hC(7,"undefined")
B.tN=new A.hC(8,"sShort")
B.tO=new A.hC(9,"sLong")
B.n1=new A.xH(0,"repeat")
B.tP=new A.xH(1,"repeatX")
B.tQ=new A.xH(2,"repeatY")
B.eG=new A.xH(3,"noRepeat")
B.uT=C.a(w([A.bhk(),A.bhc(),A.bhr(),A.bhp(),A.bhm(),A.bhl(),A.bhn()]),x.y)
B.eJ=C.a(w([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1]),x.t)
B.l8=new A.io(0,"none")
B.dM=new A.io(1,"palette")
B.Mt=new A.io(2,"rgb")
B.atZ=new A.io(3,"gray")
B.au_=new A.io(4,"reserved4")
B.au0=new A.io(5,"reserved5")
B.au1=new A.io(6,"reserved6")
B.au2=new A.io(7,"reserved7")
B.au3=new A.io(8,"reserved8")
B.dN=new A.io(9,"paletteRle")
B.Ms=new A.io(10,"rgbRle")
B.atY=new A.io(11,"grayRle")
B.Wp=C.a(w([B.l8,B.dM,B.Mt,B.atZ,B.au_,B.au0,B.au1,B.au2,B.au3,B.dN,B.Ms,B.atY]),C.A("k<io>"))
B.ns=C.a(w([0,2,8]),x.t)
B.Wt=C.a(w([0,4,2,1]),x.t)
B.WJ=C.a(w([252,243,207,63]),x.t)
B.v6=C.a(w([292,260,226,226]),x.t)
B.X5=C.a(w([2,3,7]),x.t)
B.Xg=C.a(w([3,3,11]),x.t)
B.Y8=C.a(w([511,1023,2047,4095]),x.t)
B.Yo=C.a(w([63,207,243,252]),x.t)
B.Yt=C.a(w([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),x.t)
B.h7=C.a(w([0,1,3,7,15,31,63,127,255]),x.t)
B.nw=C.a(w([0,128,192,224,240,248,252,254,255]),x.t)
B.bT=C.a(w([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255]),x.t)
B.YX=C.a(w([8,8,4,2]),x.t)
B.ny=C.a(w([8,0,8,0]),x.t)
B.Ym=C.a(w([5,3,5,3]),x.t)
B.Xi=C.a(w([3,5,3,5]),x.t)
B.v1=C.a(w([0,8,0,8]),x.t)
B.vx=C.a(w([4,4,4,4]),x.t)
B.Y1=C.a(w([4,4,0,0]),x.t)
B.vV=C.a(w([B.ny,B.Ym,B.Xi,B.v1,B.ny,B.vx,B.Y1,B.v1]),x.S)
B.bU=C.a(w([255,255,255,255,255,255,255,255,255,255,255]),x.t)
B.eX=C.a(w([B.bU,B.bU,B.bU]),x.S)
B.a40=C.a(w([176,246,255,255,255,255,255,255,255,255,255]),x.t)
B.a2R=C.a(w([223,241,252,255,255,255,255,255,255,255,255]),x.t)
B.Z8=C.a(w([249,253,253,255,255,255,255,255,255,255,255]),x.t)
B.a6x=C.a(w([B.a40,B.a2R,B.Z8]),x.S)
B.Yg=C.a(w([255,244,252,255,255,255,255,255,255,255,255]),x.t)
B.a8F=C.a(w([234,254,254,255,255,255,255,255,255,255,255]),x.t)
B.vY=C.a(w([253,255,255,255,255,255,255,255,255,255,255]),x.t)
B.a7A=C.a(w([B.Yg,B.a8F,B.vY]),x.S)
B.Yh=C.a(w([255,246,254,255,255,255,255,255,255,255,255]),x.t)
B.a_0=C.a(w([239,253,254,255,255,255,255,255,255,255,255]),x.t)
B.xf=C.a(w([254,255,254,255,255,255,255,255,255,255,255]),x.t)
B.a4Z=C.a(w([B.Yh,B.a_0,B.xf]),x.S)
B.vB=C.a(w([255,248,254,255,255,255,255,255,255,255,255]),x.t)
B.a_1=C.a(w([251,255,254,255,255,255,255,255,255,255,255]),x.t)
B.XB=C.a(w([B.vB,B.a_1,B.bU]),x.S)
B.nA=C.a(w([255,253,254,255,255,255,255,255,255,255,255]),x.t)
B.Yi=C.a(w([251,254,254,255,255,255,255,255,255,255,255]),x.t)
B.a9E=C.a(w([B.nA,B.Yi,B.xf]),x.S)
B.a1Z=C.a(w([255,254,253,255,254,255,255,255,255,255,255]),x.t)
B.ZP=C.a(w([250,255,254,255,254,255,255,255,255,255,255]),x.t)
B.jI=C.a(w([254,255,255,255,255,255,255,255,255,255,255]),x.t)
B.abC=C.a(w([B.a1Z,B.ZP,B.jI]),x.S)
B.a6O=C.a(w([B.eX,B.a6x,B.a7A,B.a4Z,B.XB,B.a9E,B.abC,B.eX]),x.o)
B.a2i=C.a(w([217,255,255,255,255,255,255,255,255,255,255]),x.t)
B.a3N=C.a(w([225,252,241,253,255,255,254,255,255,255,255]),x.t)
B.a6_=C.a(w([234,250,241,250,253,255,253,254,255,255,255]),x.t)
B.a3C=C.a(w([B.a2i,B.a3N,B.a6_]),x.S)
B.nz=C.a(w([255,254,255,255,255,255,255,255,255,255,255]),x.t)
B.a8G=C.a(w([223,254,254,255,255,255,255,255,255,255,255]),x.t)
B.ZE=C.a(w([238,253,254,254,255,255,255,255,255,255,255]),x.t)
B.a7I=C.a(w([B.nz,B.a8G,B.ZE]),x.S)
B.Ze=C.a(w([249,254,255,255,255,255,255,255,255,255,255]),x.t)
B.YD=C.a(w([B.vB,B.Ze,B.bU]),x.S)
B.Z9=C.a(w([255,253,255,255,255,255,255,255,255,255,255]),x.t)
B.Zf=C.a(w([247,254,255,255,255,255,255,255,255,255,255]),x.t)
B.Yc=C.a(w([B.Z9,B.Zf,B.bU]),x.S)
B.a2j=C.a(w([252,255,255,255,255,255,255,255,255,255,255]),x.t)
B.a7m=C.a(w([B.nA,B.a2j,B.bU]),x.S)
B.vC=C.a(w([255,254,254,255,255,255,255,255,255,255,255]),x.t)
B.a9j=C.a(w([B.vC,B.vY,B.bU]),x.S)
B.Zg=C.a(w([255,254,253,255,255,255,255,255,255,255,255]),x.t)
B.x7=C.a(w([250,255,255,255,255,255,255,255,255,255,255]),x.t)
B.a8M=C.a(w([B.Zg,B.x7,B.jI]),x.S)
B.a6s=C.a(w([B.a3C,B.a7I,B.YD,B.Yc,B.a7m,B.a9j,B.a8M,B.eX]),x.o)
B.a2S=C.a(w([186,251,250,255,255,255,255,255,255,255,255]),x.t)
B.ZF=C.a(w([234,251,244,254,255,255,255,255,255,255,255]),x.t)
B.a1V=C.a(w([251,251,243,253,254,255,254,255,255,255,255]),x.t)
B.a8O=C.a(w([B.a2S,B.ZF,B.a1V]),x.S)
B.a2T=C.a(w([236,253,254,255,255,255,255,255,255,255,255]),x.t)
B.YR=C.a(w([251,253,253,254,254,255,255,255,255,255,255]),x.t)
B.a0r=C.a(w([B.nA,B.a2T,B.YR]),x.S)
B.a8H=C.a(w([254,254,254,255,255,255,255,255,255,255,255]),x.t)
B.a7B=C.a(w([B.vC,B.a8H,B.bU]),x.S)
B.a41=C.a(w([254,254,255,255,255,255,255,255,255,255,255]),x.t)
B.a4w=C.a(w([B.nz,B.a41,B.jI]),x.S)
B.yN=C.a(w([B.bU,B.jI,B.bU]),x.S)
B.abq=C.a(w([B.a8O,B.a0r,B.a7B,B.a4w,B.yN,B.eX,B.eX,B.eX]),x.o)
B.a2k=C.a(w([248,255,255,255,255,255,255,255,255,255,255]),x.t)
B.aaY=C.a(w([250,254,252,254,255,255,255,255,255,255,255]),x.t)
B.a42=C.a(w([248,254,249,253,255,255,255,255,255,255,255]),x.t)
B.a7l=C.a(w([B.a2k,B.aaY,B.a42]),x.S)
B.Za=C.a(w([255,253,253,255,255,255,255,255,255,255,255]),x.t)
B.a2l=C.a(w([246,253,253,255,255,255,255,255,255,255,255]),x.t)
B.Wx=C.a(w([252,254,251,254,254,255,255,255,255,255,255]),x.t)
B.a6n=C.a(w([B.Za,B.a2l,B.Wx]),x.S)
B.Yj=C.a(w([255,254,252,255,255,255,255,255,255,255,255]),x.t)
B.a43=C.a(w([248,254,253,255,255,255,255,255,255,255,255]),x.t)
B.a5m=C.a(w([253,255,254,254,255,255,255,255,255,255,255]),x.t)
B.a94=C.a(w([B.Yj,B.a43,B.a5m]),x.S)
B.a_2=C.a(w([255,251,254,255,255,255,255,255,255,255,255]),x.t)
B.a_3=C.a(w([245,251,254,255,255,255,255,255,255,255,255]),x.t)
B.a_4=C.a(w([253,253,254,255,255,255,255,255,255,255,255]),x.t)
B.a63=C.a(w([B.a_2,B.a_3,B.a_4]),x.S)
B.Zb=C.a(w([255,251,253,255,255,255,255,255,255,255,255]),x.t)
B.a2U=C.a(w([252,253,254,255,255,255,255,255,255,255,255]),x.t)
B.a6U=C.a(w([B.Zb,B.a2U,B.nz]),x.S)
B.Zh=C.a(w([255,252,255,255,255,255,255,255,255,255,255]),x.t)
B.a_5=C.a(w([249,255,254,255,255,255,255,255,255,255,255]),x.t)
B.a_6=C.a(w([255,255,254,255,255,255,255,255,255,255,255]),x.t)
B.a7u=C.a(w([B.Zh,B.a_5,B.a_6]),x.S)
B.Zc=C.a(w([255,255,253,255,255,255,255,255,255,255,255]),x.t)
B.a6u=C.a(w([B.Zc,B.x7,B.bU]),x.S)
B.ZM=C.a(w([B.a7l,B.a6n,B.a94,B.a63,B.a6U,B.a7u,B.a6u,B.yN]),x.o)
B.Zp=C.a(w([B.a6O,B.a6s,B.abq,B.ZM]),x.O)
B.w2=C.a(w([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]),x.t)
B.au7=new A.v9(0,"invalid")
B.Mv=new A.v9(1,"uint")
B.ak=new A.v9(2,"int")
B.i2=new A.v9(3,"float")
B.Zz=C.a(w([B.au7,B.Mv,B.ak,B.i2]),C.A("k<v9>"))
B.ZK=C.a(w([280,256,256,256,40]),x.t)
B.ZR=C.a(w([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),x.t)
B.UQ=new A.xw(0,"invalid")
B.UR=new A.xw(1,"ico")
B.a0s=C.a(w([B.UQ,B.UR,B.tD]),C.A("k<xw>"))
B.a0C=C.a(w([A.bhg(),A.bha(),A.bhq(),A.bho(),A.bhi(),A.bhh(),A.bhj()]),x.y)
B.pi=new A.f6(0,"whiteIsZero")
B.auf=new A.f6(1,"blackIsZero")
B.aum=new A.f6(2,"rgb")
B.pk=new A.f6(3,"palette")
B.aun=new A.f6(4,"transparencyMask")
B.Mx=new A.f6(5,"cmyk")
B.auo=new A.f6(6,"yCbCr")
B.aup=new A.f6(7,"reserved7")
B.auq=new A.f6(8,"cieLab")
B.aur=new A.f6(9,"iccLab")
B.aug=new A.f6(10,"ituLab")
B.auh=new A.f6(11,"logL")
B.aui=new A.f6(12,"logLuv")
B.auj=new A.f6(13,"colorFilterArray")
B.auk=new A.f6(14,"linearRaw")
B.aul=new A.f6(15,"depth")
B.pj=new A.f6(16,"unknown")
B.a0W=C.a(w([B.pi,B.auf,B.aum,B.pk,B.aun,B.Mx,B.auo,B.aup,B.auq,B.aur,B.aug,B.auh,B.aui,B.auj,B.auk,B.aul,B.pj]),C.A("k<f6>"))
B.jA=C.a(w([0,1,2,3,4,5,6,7,8,9,10,11]),x.t)
B.jB=C.a(w([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63]),x.t)
B.nC=C.a(w([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284]),x.t)
B.nD=C.a(w([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157]),x.t)
B.ww=C.a(w([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]),x.t)
B.wv=C.a(w([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41]),x.t)
B.wx=C.a(w([B.p,B.tI,B.ag,B.a6,B.b7,B.bI,B.tM,B.du,B.tN,B.tO,B.tJ,B.tK,B.tL]),C.A("k<hC>"))
B.x_=C.a(w([0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0]),x.t)
B.x2=C.a(w([0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119]),x.t)
B.x0=C.a(w([0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125]),x.t)
B.x1=C.a(w([0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0]),x.t)
B.wZ=C.a(w([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0]),x.t)
B.xt=C.a(w([1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250]),x.t)
B.xu=C.a(w([1,1.387039845,1.306562965,1.175875602,1,0.785694958,0.5411961,0.275899379]),C.A("k<L>"))
B.e9=C.a(w([0,1,1,2,4,8,1,1,2,4,8,4,8]),x.t)
B.xB=C.a(w([0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250]),x.t)
B.KN=new A.Gn(0,"source")
B.KO=new A.Gn(1,"over")
B.a3W=C.a(w([B.KN,B.KO]),C.A("k<Gn>"))
B.X6=C.a(w([2,6,2,6]),x.t)
B.Yy=C.a(w([6,2,6,2]),x.t)
B.X4=C.a(w([2,2,6,6]),x.t)
B.WF=C.a(w([1,3,3,9]),x.t)
B.XZ=C.a(w([4,0,12,0]),x.t)
B.Xf=C.a(w([3,1,9,3]),x.t)
B.YW=C.a(w([8,8,0,0]),x.t)
B.Y_=C.a(w([4,12,0,0]),x.t)
B.WB=C.a(w([16,0,0,0]),x.t)
B.WA=C.a(w([12,4,0,0]),x.t)
B.Yz=C.a(w([6,6,2,2]),x.t)
B.Xj=C.a(w([3,9,1,3]),x.t)
B.Wz=C.a(w([12,0,4,0]),x.t)
B.Zm=C.a(w([9,3,3,1]),x.t)
B.be=C.a(w([B.vx,B.X6,B.ny,B.Yy,B.X4,B.WF,B.XZ,B.Xf,B.YW,B.Y_,B.WB,B.WA,B.Yz,B.Xj,B.Wz,B.Zm]),x.S)
B.a4i=C.a(w([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),x.t)
B.a4j=C.a(w([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15]),x.t)
B.cx=C.a(w([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255]),x.t)
B.a4E=C.a(w([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),x.t)
B.xT=C.a(w([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]),x.t)
B.a4K=C.a(w([null,A.bhG(),A.bhH(),A.bhF()]),C.A("k<~(l,l,l,l,l,hj)?>"))
B.xY=C.a(w([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127]),x.t)
B.jQ=C.a(w([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845]),x.t)
B.a5q=C.a(w([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]),x.t)
B.yj=C.a(w([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390]),x.t)
B.jS=C.a(w([0,36,72,109,145,182,218,255]),x.t)
B.yr=C.a(w([137,80,78,71,13,10,26,10]),x.t)
B.nJ=C.a(w([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295]),x.t)
B.Of=new A.fY(1,"rle8")
B.Ok=new A.fY(2,"rle4")
B.Ol=new A.fY(4,"jpeg")
B.Om=new A.fY(5,"png")
B.On=new A.fY(7,"reserved7")
B.Oo=new A.fY(8,"reserved8")
B.Op=new A.fY(9,"reserved9")
B.Og=new A.fY(10,"reserved10")
B.Oh=new A.fY(11,"cmyk")
B.Oi=new A.fY(12,"cmykRle8")
B.Oj=new A.fY(13,"cmykRle4")
B.yJ=C.a(w([B.qA,B.Of,B.Ok,B.lT,B.Ol,B.Om,B.lU,B.On,B.Oo,B.Op,B.Og,B.Oh,B.Oi,B.Oj]),C.A("k<fY>"))
B.abr=C.a(w([231,120,48,89,115,113,120,152,112]),x.t)
B.a_8=C.a(w([152,179,64,126,170,118,46,70,95]),x.t)
B.a_9=C.a(w([175,69,143,80,85,82,72,155,103]),x.t)
B.a_k=C.a(w([56,58,10,171,218,189,17,13,152]),x.t)
B.a_v=C.a(w([114,26,17,163,44,195,21,10,173]),x.t)
B.a_G=C.a(w([121,24,80,195,26,62,44,64,85]),x.t)
B.a_R=C.a(w([144,71,10,38,171,213,144,34,26]),x.t)
B.a01=C.a(w([170,46,55,19,136,160,33,206,71]),x.t)
B.a0c=C.a(w([63,20,8,114,114,208,12,9,226]),x.t)
B.a0n=C.a(w([81,40,11,96,182,84,29,16,36]),x.t)
B.Zo=C.a(w([B.abr,B.a_8,B.a_9,B.a_k,B.a_v,B.a_G,B.a_R,B.a01,B.a0c,B.a0n]),x.S)
B.a0q=C.a(w([134,183,89,137,98,101,106,165,148]),x.t)
B.a_a=C.a(w([72,187,100,130,157,111,32,75,80]),x.t)
B.a_b=C.a(w([66,102,167,99,74,62,40,234,128]),x.t)
B.a1O=C.a(w([41,53,9,178,241,141,26,8,107]),x.t)
B.a_c=C.a(w([74,43,26,146,73,166,49,23,157]),x.t)
B.a_d=C.a(w([65,38,105,160,51,52,31,115,128]),x.t)
B.ab9=C.a(w([104,79,12,27,217,255,87,17,7]),x.t)
B.a_e=C.a(w([87,68,71,44,114,51,15,186,23]),x.t)
B.a_f=C.a(w([47,41,14,110,182,183,21,17,194]),x.t)
B.a_g=C.a(w([66,45,25,102,197,189,23,18,22]),x.t)
B.a9R=C.a(w([B.a0q,B.a_a,B.a_b,B.a1O,B.a_c,B.a_d,B.ab9,B.a_e,B.a_f,B.a_g]),x.S)
B.a_h=C.a(w([88,88,147,150,42,46,45,196,205]),x.t)
B.a_i=C.a(w([43,97,183,117,85,38,35,179,61]),x.t)
B.a_j=C.a(w([39,53,200,87,26,21,43,232,171]),x.t)
B.a_l=C.a(w([56,34,51,104,114,102,29,93,77]),x.t)
B.a_m=C.a(w([39,28,85,171,58,165,90,98,64]),x.t)
B.a_n=C.a(w([34,22,116,206,23,34,43,166,73]),x.t)
B.a_o=C.a(w([107,54,32,26,51,1,81,43,31]),x.t)
B.a_p=C.a(w([68,25,106,22,64,171,36,225,114]),x.t)
B.a_q=C.a(w([34,19,21,102,132,188,16,76,124]),x.t)
B.a_r=C.a(w([62,18,78,95,85,57,50,48,51]),x.t)
B.a89=C.a(w([B.a_h,B.a_i,B.a_j,B.a_l,B.a_m,B.a_n,B.a_o,B.a_p,B.a_q,B.a_r]),x.S)
B.a_s=C.a(w([193,101,35,159,215,111,89,46,111]),x.t)
B.a_t=C.a(w([60,148,31,172,219,228,21,18,111]),x.t)
B.aba=C.a(w([112,113,77,85,179,255,38,120,114]),x.t)
B.a1P=C.a(w([40,42,1,196,245,209,10,25,109]),x.t)
B.a_u=C.a(w([88,43,29,140,166,213,37,43,154]),x.t)
B.a_w=C.a(w([61,63,30,155,67,45,68,1,209]),x.t)
B.a_x=C.a(w([100,80,8,43,154,1,51,26,71]),x.t)
B.a1Q=C.a(w([142,78,78,16,255,128,34,197,171]),x.t)
B.a_y=C.a(w([41,40,5,102,211,183,4,1,221]),x.t)
B.a_z=C.a(w([51,50,17,168,209,192,23,25,82]),x.t)
B.a3e=C.a(w([B.a_s,B.a_t,B.aba,B.a1P,B.a_u,B.a_w,B.a_x,B.a1Q,B.a_y,B.a_z]),x.S)
B.YJ=C.a(w([138,31,36,171,27,166,38,44,229]),x.t)
B.a_A=C.a(w([67,87,58,169,82,115,26,59,179]),x.t)
B.a_B=C.a(w([63,59,90,180,59,166,93,73,154]),x.t)
B.a_C=C.a(w([40,40,21,116,143,209,34,39,175]),x.t)
B.a_D=C.a(w([47,15,16,183,34,223,49,45,183]),x.t)
B.a_E=C.a(w([46,17,33,183,6,98,15,32,183]),x.t)
B.a_F=C.a(w([57,46,22,24,128,1,54,17,37]),x.t)
B.a_H=C.a(w([65,32,73,115,28,128,23,128,205]),x.t)
B.a_I=C.a(w([40,3,9,115,51,192,18,6,223]),x.t)
B.a_J=C.a(w([87,37,9,115,59,77,64,21,47]),x.t)
B.a1e=C.a(w([B.YJ,B.a_A,B.a_B,B.a_C,B.a_D,B.a_E,B.a_F,B.a_H,B.a_I,B.a_J]),x.S)
B.a_K=C.a(w([104,55,44,218,9,54,53,130,226]),x.t)
B.a_L=C.a(w([64,90,70,205,40,41,23,26,57]),x.t)
B.a_M=C.a(w([54,57,112,184,5,41,38,166,213]),x.t)
B.a_N=C.a(w([30,34,26,133,152,116,10,32,134]),x.t)
B.YK=C.a(w([39,19,53,221,26,114,32,73,255]),x.t)
B.a_O=C.a(w([31,9,65,234,2,15,1,118,73]),x.t)
B.abb=C.a(w([75,32,12,51,192,255,160,43,51]),x.t)
B.a_P=C.a(w([88,31,35,67,102,85,55,186,85]),x.t)
B.a_Q=C.a(w([56,21,23,111,59,205,45,37,192]),x.t)
B.a_S=C.a(w([55,38,70,124,73,102,1,34,98]),x.t)
B.a48=C.a(w([B.a_K,B.a_L,B.a_M,B.a_N,B.YK,B.a_O,B.abb,B.a_P,B.a_Q,B.a_S]),x.S)
B.a_T=C.a(w([125,98,42,88,104,85,117,175,82]),x.t)
B.a_U=C.a(w([95,84,53,89,128,100,113,101,45]),x.t)
B.a_V=C.a(w([75,79,123,47,51,128,81,171,1]),x.t)
B.a_W=C.a(w([57,17,5,71,102,57,53,41,49]),x.t)
B.a_X=C.a(w([38,33,13,121,57,73,26,1,85]),x.t)
B.a_Y=C.a(w([41,10,67,138,77,110,90,47,114]),x.t)
B.abc=C.a(w([115,21,2,10,102,255,166,23,6]),x.t)
B.a_Z=C.a(w([101,29,16,10,85,128,101,196,26]),x.t)
B.a0_=C.a(w([57,18,10,102,102,213,34,20,43]),x.t)
B.a00=C.a(w([117,20,15,36,163,128,68,1,26]),x.t)
B.a1j=C.a(w([B.a_T,B.a_U,B.a_V,B.a_W,B.a_X,B.a_Y,B.abc,B.a_Z,B.a0_,B.a00]),x.S)
B.YF=C.a(w([102,61,71,37,34,53,31,243,192]),x.t)
B.a02=C.a(w([69,60,71,38,73,119,28,222,37]),x.t)
B.YG=C.a(w([68,45,128,34,1,47,11,245,171]),x.t)
B.a03=C.a(w([62,17,19,70,146,85,55,62,70]),x.t)
B.a04=C.a(w([37,43,37,154,100,163,85,160,1]),x.t)
B.a05=C.a(w([63,9,92,136,28,64,32,201,85]),x.t)
B.abd=C.a(w([75,15,9,9,64,255,184,119,16]),x.t)
B.abe=C.a(w([86,6,28,5,64,255,25,248,1]),x.t)
B.abf=C.a(w([56,8,17,132,137,255,55,116,128]),x.t)
B.a06=C.a(w([58,15,20,82,135,57,26,121,40]),x.t)
B.a20=C.a(w([B.YF,B.a02,B.YG,B.a03,B.a04,B.a05,B.abd,B.abe,B.abf,B.a06]),x.S)
B.a07=C.a(w([164,50,31,137,154,133,25,35,218]),x.t)
B.a08=C.a(w([51,103,44,131,131,123,31,6,158]),x.t)
B.a09=C.a(w([86,40,64,135,148,224,45,183,128]),x.t)
B.a0a=C.a(w([22,26,17,131,240,154,14,1,209]),x.t)
B.a0b=C.a(w([45,16,21,91,64,222,7,1,197]),x.t)
B.a0d=C.a(w([56,21,39,155,60,138,23,102,213]),x.t)
B.abg=C.a(w([83,12,13,54,192,255,68,47,28]),x.t)
B.a0e=C.a(w([85,26,85,85,128,128,32,146,171]),x.t)
B.a0f=C.a(w([18,11,7,63,144,171,4,4,246]),x.t)
B.a0g=C.a(w([35,27,10,146,174,171,12,26,128]),x.t)
B.a1k=C.a(w([B.a07,B.a08,B.a09,B.a0a,B.a0b,B.a0d,B.abg,B.a0e,B.a0f,B.a0g]),x.S)
B.a0h=C.a(w([190,80,35,99,180,80,126,54,45]),x.t)
B.a0i=C.a(w([85,126,47,87,176,51,41,20,32]),x.t)
B.a0j=C.a(w([101,75,128,139,118,146,116,128,85]),x.t)
B.a0k=C.a(w([56,41,15,176,236,85,37,9,62]),x.t)
B.abh=C.a(w([71,30,17,119,118,255,17,18,138]),x.t)
B.a0l=C.a(w([101,38,60,138,55,70,43,26,142]),x.t)
B.abi=C.a(w([146,36,19,30,171,255,97,27,20]),x.t)
B.a0m=C.a(w([138,45,61,62,219,1,81,188,64]),x.t)
B.a0o=C.a(w([32,41,20,117,151,142,20,21,163]),x.t)
B.a0p=C.a(w([112,19,12,61,195,128,48,4,24]),x.t)
B.a3m=C.a(w([B.a0h,B.a0i,B.a0j,B.a0k,B.abh,B.a0l,B.abi,B.a0m,B.a0o,B.a0p]),x.S)
B.a6V=C.a(w([B.Zo,B.a9R,B.a89,B.a3e,B.a1e,B.a48,B.a1j,B.a20,B.a1k,B.a3m]),x.o)
B.a7H=C.a(w([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15]),x.t)
B.zh=C.a(w([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396]),x.t)
B.zg=C.a(w([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15]),x.t)
B.a8a=C.a(w([B.te,B.mI,B.mJ]),C.A("k<xc>"))
B.nO=C.a(w([128,128,128,128,128,128,128,128,128,128,128]),x.t)
B.wr=C.a(w([B.nO,B.nO,B.nO]),x.S)
B.a30=C.a(w([253,136,254,255,228,219,128,128,128,128,128]),x.t)
B.a0F=C.a(w([189,129,242,255,227,213,255,219,128,128,128]),x.t)
B.a4l=C.a(w([106,126,227,252,214,209,255,255,128,128,128]),x.t)
B.a4N=C.a(w([B.a30,B.a0F,B.a4l]),x.S)
B.aaZ=C.a(w([1,98,248,255,236,226,255,255,128,128,128]),x.t)
B.aa8=C.a(w([181,133,238,254,221,234,255,154,128,128,128]),x.t)
B.a0G=C.a(w([78,134,202,247,198,180,255,219,128,128,128]),x.t)
B.ZA=C.a(w([B.aaZ,B.aa8,B.a0G]),x.S)
B.a9P=C.a(w([1,185,249,255,243,255,128,128,128,128,128]),x.t)
B.Wk=C.a(w([184,150,247,255,236,224,128,128,128,128,128]),x.t)
B.W9=C.a(w([77,110,216,255,236,230,128,128,128,128,128]),x.t)
B.a8K=C.a(w([B.a9P,B.Wk,B.W9]),x.S)
B.a9Q=C.a(w([1,101,251,255,241,255,128,128,128,128,128]),x.t)
B.a2f=C.a(w([170,139,241,252,236,209,255,255,128,128,128]),x.t)
B.a1d=C.a(w([37,116,196,243,228,255,255,255,128,128,128]),x.t)
B.a4F=C.a(w([B.a9Q,B.a2f,B.a1d]),x.S)
B.ab4=C.a(w([1,204,254,255,245,255,128,128,128,128,128]),x.t)
B.Wa=C.a(w([207,160,250,255,238,128,128,128,128,128,128]),x.t)
B.Wl=C.a(w([102,103,231,255,211,171,128,128,128,128,128]),x.t)
B.a8J=C.a(w([B.ab4,B.Wa,B.Wl]),x.S)
B.a7P=C.a(w([1,152,252,255,240,255,128,128,128,128,128]),x.t)
B.Wm=C.a(w([177,135,243,255,234,225,128,128,128,128,128]),x.t)
B.Wb=C.a(w([80,129,211,255,194,224,128,128,128,128,128]),x.t)
B.aby=C.a(w([B.a7P,B.Wm,B.Wb]),x.S)
B.v8=C.a(w([1,1,255,128,128,128,128,128,128,128,128]),x.t)
B.WS=C.a(w([246,1,255,128,128,128,128,128,128,128,128]),x.t)
B.a0E=C.a(w([255,128,128,128,128,128,128,128,128,128,128]),x.t)
B.a3U=C.a(w([B.v8,B.WS,B.a0E]),x.S)
B.a4V=C.a(w([B.wr,B.a4N,B.ZA,B.a8K,B.a4F,B.a8J,B.aby,B.a3U]),x.o)
B.WT=C.a(w([198,35,237,223,193,187,162,160,145,155,62]),x.t)
B.aa0=C.a(w([131,45,198,221,172,176,220,157,252,221,1]),x.t)
B.a6J=C.a(w([68,47,146,208,149,167,221,162,255,223,128]),x.t)
B.aa7=C.a(w([B.WT,B.aa0,B.a6J]),x.S)
B.a0y=C.a(w([1,149,241,255,221,224,255,255,128,128,128]),x.t)
B.a0H=C.a(w([184,141,234,253,222,220,255,199,128,128,128]),x.t)
B.a4c=C.a(w([81,99,181,242,176,190,249,202,255,255,128]),x.t)
B.a4q=C.a(w([B.a0y,B.a0H,B.a4c]),x.S)
B.a1S=C.a(w([1,129,232,253,214,197,242,196,255,255,128]),x.t)
B.aa9=C.a(w([99,121,210,250,201,198,255,202,128,128,128]),x.t)
B.a4d=C.a(w([23,91,163,242,170,187,247,210,255,255,128]),x.t)
B.YN=C.a(w([B.a1S,B.aa9,B.a4d]),x.S)
B.a7Q=C.a(w([1,200,246,255,234,255,128,128,128,128,128]),x.t)
B.a1I=C.a(w([109,178,241,255,231,245,255,255,128,128,128]),x.t)
B.ab_=C.a(w([44,130,201,253,205,192,255,255,128,128,128]),x.t)
B.a1h=C.a(w([B.a7Q,B.a1I,B.ab_]),x.S)
B.WN=C.a(w([1,132,239,251,219,209,255,165,128,128,128]),x.t)
B.ab0=C.a(w([94,136,225,251,218,190,255,255,128,128,128]),x.t)
B.a0I=C.a(w([22,100,174,245,186,161,255,199,128,128,128]),x.t)
B.a8t=C.a(w([B.WN,B.ab0,B.a0I]),x.S)
B.a2o=C.a(w([1,182,249,255,232,235,128,128,128,128,128]),x.t)
B.Wn=C.a(w([124,143,241,255,227,234,128,128,128,128,128]),x.t)
B.a0J=C.a(w([35,77,181,251,193,211,255,205,128,128,128]),x.t)
B.a6b=C.a(w([B.a2o,B.Wn,B.a0J]),x.S)
B.a56=C.a(w([1,157,247,255,236,231,255,255,128,128,128]),x.t)
B.a0z=C.a(w([121,141,235,255,225,227,255,255,128,128,128]),x.t)
B.a0K=C.a(w([45,99,188,251,195,217,255,224,128,128,128]),x.t)
B.aaM=C.a(w([B.a56,B.a0z,B.a0K]),x.S)
B.a2p=C.a(w([1,1,251,255,213,255,128,128,128,128,128]),x.t)
B.a5z=C.a(w([203,1,248,255,255,128,128,128,128,128,128]),x.t)
B.a7R=C.a(w([137,1,177,255,224,255,128,128,128,128,128]),x.t)
B.aaB=C.a(w([B.a2p,B.a5z,B.a7R]),x.S)
B.a5_=C.a(w([B.aa7,B.a4q,B.YN,B.a1h,B.a8t,B.a6b,B.aaM,B.aaB]),x.o)
B.a7y=C.a(w([253,9,248,251,207,208,255,192,128,128,128]),x.t)
B.a3g=C.a(w([175,13,224,243,193,185,249,198,255,255,128]),x.t)
B.a6K=C.a(w([73,17,171,221,161,179,236,167,255,234,128]),x.t)
B.a9p=C.a(w([B.a7y,B.a3g,B.a6K]),x.S)
B.a0A=C.a(w([1,95,247,253,212,183,255,255,128,128,128]),x.t)
B.a0v=C.a(w([239,90,244,250,211,209,255,255,128,128,128]),x.t)
B.a4m=C.a(w([155,77,195,248,188,195,255,255,128,128,128]),x.t)
B.Zi=C.a(w([B.a0A,B.a0v,B.a4m]),x.S)
B.WO=C.a(w([1,24,239,251,218,219,255,205,128,128,128]),x.t)
B.Wc=C.a(w([201,51,219,255,196,186,128,128,128,128,128]),x.t)
B.a0L=C.a(w([69,46,190,239,201,218,255,228,128,128,128]),x.t)
B.aa6=C.a(w([B.WO,B.Wc,B.a0L]),x.S)
B.a67=C.a(w([1,191,251,255,255,128,128,128,128,128,128]),x.t)
B.a2q=C.a(w([223,165,249,255,213,255,128,128,128,128,128]),x.t)
B.a5A=C.a(w([141,124,248,255,255,128,128,128,128,128,128]),x.t)
B.YL=C.a(w([B.a67,B.a2q,B.a5A]),x.S)
B.a5B=C.a(w([1,16,248,255,255,128,128,128,128,128,128]),x.t)
B.a7S=C.a(w([190,36,230,255,236,255,128,128,128,128,128]),x.t)
B.WU=C.a(w([149,1,255,128,128,128,128,128,128,128,128]),x.t)
B.abz=C.a(w([B.a5B,B.a7S,B.WU]),x.S)
B.WV=C.a(w([1,226,255,128,128,128,128,128,128,128,128]),x.t)
B.a7Y=C.a(w([247,192,255,128,128,128,128,128,128,128,128]),x.t)
B.WW=C.a(w([240,128,255,128,128,128,128,128,128,128,128]),x.t)
B.aaj=C.a(w([B.WV,B.a7Y,B.WW]),x.S)
B.a5C=C.a(w([1,134,252,255,255,128,128,128,128,128,128]),x.t)
B.a5D=C.a(w([213,62,250,255,255,128,128,128,128,128,128]),x.t)
B.WX=C.a(w([55,93,255,128,128,128,128,128,128,128,128]),x.t)
B.ab1=C.a(w([B.a5C,B.a5D,B.WX]),x.S)
B.aaP=C.a(w([B.a9p,B.Zi,B.aa6,B.YL,B.abz,B.aaj,B.ab1,B.wr]),x.o)
B.a60=C.a(w([202,24,213,235,186,191,220,160,240,175,255]),x.t)
B.a6L=C.a(w([126,38,182,232,169,184,228,174,255,187,128]),x.t)
B.a6M=C.a(w([61,46,138,219,151,178,240,170,255,216,128]),x.t)
B.aaO=C.a(w([B.a60,B.a6L,B.a6M]),x.S)
B.a4e=C.a(w([1,112,230,250,199,191,247,159,255,255,128]),x.t)
B.aaa=C.a(w([166,109,228,252,211,215,255,174,128,128,128]),x.t)
B.a4f=C.a(w([39,77,162,232,172,180,245,178,255,255,128]),x.t)
B.Wg=C.a(w([B.a4e,B.aaa,B.a4f]),x.S)
B.a4g=C.a(w([1,52,220,246,198,199,249,220,255,255,128]),x.t)
B.a1T=C.a(w([124,74,191,243,183,193,250,221,255,255,128]),x.t)
B.a4h=C.a(w([24,71,130,219,154,170,243,182,255,255,128]),x.t)
B.a7V=C.a(w([B.a4g,B.a1T,B.a4h]),x.S)
B.a0M=C.a(w([1,182,225,249,219,240,255,224,128,128,128]),x.t)
B.aab=C.a(w([149,150,226,252,216,205,255,171,128,128,128]),x.t)
B.YC=C.a(w([28,108,170,242,183,194,254,223,255,255,128]),x.t)
B.a1F=C.a(w([B.a0M,B.aab,B.YC]),x.S)
B.aac=C.a(w([1,81,230,252,204,203,255,192,128,128,128]),x.t)
B.aaS=C.a(w([123,102,209,247,188,196,255,233,128,128,128]),x.t)
B.a0N=C.a(w([20,95,153,243,164,173,255,203,128,128,128]),x.t)
B.a32=C.a(w([B.aac,B.aaS,B.a0N]),x.S)
B.Wd=C.a(w([1,222,248,255,216,213,128,128,128,128,128]),x.t)
B.a1X=C.a(w([168,175,246,252,235,205,255,255,128,128,128]),x.t)
B.aaT=C.a(w([47,116,215,255,211,212,255,255,128,128,128]),x.t)
B.a6P=C.a(w([B.Wd,B.a1X,B.aaT]),x.S)
B.aaU=C.a(w([1,121,236,253,212,214,255,255,128,128,128]),x.t)
B.aad=C.a(w([141,84,213,252,201,202,255,219,128,128,128]),x.t)
B.aae=C.a(w([42,80,160,240,162,185,255,205,128,128,128]),x.t)
B.a90=C.a(w([B.aaU,B.aad,B.aae]),x.S)
B.WY=C.a(w([244,1,255,128,128,128,128,128,128,128,128]),x.t)
B.WZ=C.a(w([238,1,255,128,128,128,128,128,128,128,128]),x.t)
B.Y6=C.a(w([B.v8,B.WY,B.WZ]),x.S)
B.a5N=C.a(w([B.aaO,B.Wg,B.a7V,B.a1F,B.a32,B.a6P,B.a90,B.Y6]),x.o)
B.a8o=C.a(w([B.a4V,B.a5_,B.aaP,B.a5N]),x.O)
B.zE=C.a(w([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68]),x.t)
B.k3=C.a(w([0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63]),x.t)
B.a8y=C.a(w([16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99]),x.t)
B.a8z=C.a(w([17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]),x.t)
B.Nf=new A.vl(0,"predictor")
B.aw5=new A.vl(1,"crossColor")
B.aw6=new A.vl(2,"subtractGreen")
B.Ng=new A.vl(3,"colorIndexing")
B.a93=C.a(w([B.Nf,B.aw5,B.aw6,B.Ng]),C.A("k<vl>"))
B.WC=C.a(w([173,148,140]),x.t)
B.WD=C.a(w([176,155,140,135]),x.t)
B.ZL=C.a(w([180,157,141,134,130]),x.t)
B.WR=C.a(w([254,254,243,230,196,177,153,140,133,130,129]),x.t)
B.a9s=C.a(w([B.WC,B.WD,B.ZL,B.WR]),x.S)
B.cY=C.a(w([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]),x.t)
B.a9y=C.a(w([254,253,251,247,239,223,191,127]),x.t)
B.A7=C.a(w([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9]),x.t)
B.amA=new A.kW(0,"bitmap")
B.KU=new A.kW(1,"grayscale")
B.amB=new A.kW(2,"indexed")
B.KV=new A.kW(3,"rgb")
B.KW=new A.kW(4,"cmyk")
B.amC=new A.kW(5,"multiChannel")
B.amD=new A.kW(6,"duoTone")
B.KX=new A.kW(7,"lab")
B.a9L=C.a(w([B.amA,B.KU,B.amB,B.KV,B.KW,B.amC,B.amD,B.KX]),C.A("k<kW>"))
B.k9=C.a(w([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567]),x.t)
B.aml=new A.qd(0,"none")
B.amm=new A.qd(1,"sub")
B.amn=new A.qd(2,"up")
B.amo=new A.qd(3,"average")
B.amp=new A.qd(4,"paeth")
B.Ai=C.a(w([B.aml,B.amm,B.amn,B.amo,B.amp]),C.A("k<qd>"))
B.Ud=new A.kx(1,"rle")
B.Ue=new A.kx(2,"zips")
B.Uf=new A.kx(3,"zip")
B.Ug=new A.kx(4,"piz")
B.Uh=new A.kx(5,"pxr24")
B.Ui=new A.kx(6,"b44")
B.Uj=new A.kx(7,"b44a")
B.a9W=C.a(w([B.tf,B.Ud,B.Ue,B.Uf,B.Ug,B.Uh,B.Ui,B.Uj]),C.A("k<kx>"))
B.aam=C.a(w([A.bh4(),A.bhb(),A.bhd(),A.bh6(),A.bh9(),A.bhf(),A.bh8(),A.bhe(),A.bh5(),A.bh7()]),x.y)
B.amk=new A.yA(0,"none")
B.KP=new A.yA(1,"background")
B.KQ=new A.yA(2,"previous")
B.aay=C.a(w([B.amk,B.KP,B.KQ]),C.A("k<yA>"))
B.aaD=C.a(w([0,1,3,7,15,31,63,127,255,511,1023,2047,4095]),x.t)
B.aaQ=C.a(w([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112]),x.t)
B.AO=C.a(w([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232]),x.t)
B.a4X=C.a(w(["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","#","$","%","*","+",",","-",".",":",";","=","?","@","[","]","^","_","{","|","}","~"]),x.s)
B.ob=new C.a_(83,{"0":0,"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,A:10,B:11,C:12,D:13,E:14,F:15,G:16,H:17,I:18,J:19,K:20,L:21,M:22,N:23,O:24,P:25,Q:26,R:27,S:28,T:29,U:30,V:31,W:32,X:33,Y:34,Z:35,a:36,b:37,c:38,d:39,e:40,f:41,g:42,h:43,i:44,j:45,k:46,l:47,m:48,n:49,o:50,p:51,q:52,r:53,s:54,t:55,u:56,v:57,w:58,x:59,y:60,z:61,"#":62,$:63,"%":64,"*":65,"+":66,",":67,"-":68,".":69,":":70,";":71,"=":72,"?":73,"@":74,"[":75,"]":76,"^":77,_:78,"{":79,"|":80,"}":81,"~":82},B.a4X,x.w)
B.a57=C.a(w(["ProcessingSoftware","SubfileType","OldSubfileType","ImageWidth","ImageLength","ImageHeight","BitsPerSample","Compression","PhotometricInterpretation","Thresholding","CellWidth","CellLength","FillOrder","DocumentName","ImageDescription","Make","Model","StripOffsets","Orientation","SamplesPerPixel","RowsPerStrip","StripByteCounts","MinSampleValue","MaxSampleValue","XResolution","YResolution","PlanarConfiguration","PageName","XPosition","YPosition","GrayResponseUnit","GrayResponseCurve","T4Options","T6Options","ResolutionUnit","PageNumber","ColorResponseUnit","TransferFunction","Software","DateTime","Artist","HostComputer","Predictor","WhitePoint","PrimaryChromaticities","ColorMap","HalftoneHints","TileWidth","TileLength","TileOffsets","TileByteCounts","BadFaxLines","CleanFaxData","ConsecutiveBadFaxLines","InkSet","InkNames","NumberofInks","DotRange","TargetPrinter","ExtraSamples","SampleFormat","SMinSampleValue","SMaxSampleValue","TransferRange","ClipPath","JPEGProc","JPEGInterchangeFormat","JPEGInterchangeFormatLength","YCbCrCoefficients","YCbCrSubSampling","YCbCrPositioning","ReferenceBlackWhite","ApplicationNotes","Rating","CFARepeatPatternDim","CFAPattern","BatteryLevel","Copyright","ExposureTime","FNumber","IPTC-NAA","ExifOffset","InterColorProfile","ExposureProgram","SpectralSensitivity","GPSOffset","ISOSpeed","OECF","SensitivityType","RecommendedExposureIndex","ExifVersion","DateTimeOriginal","DateTimeDigitized","OffsetTime","OffsetTimeOriginal","OffsetTimeDigitized","ComponentsConfiguration","CompressedBitsPerPixel","ShutterSpeedValue","ApertureValue","BrightnessValue","ExposureBiasValue","MaxApertureValue","SubjectDistance","MeteringMode","LightSource","Flash","FocalLength","SubjectArea","MakerNote","UserComment","SubSecTime","SubSecTimeOriginal","SubSecTimeDigitized","XPTitle","XPComment","XPAuthor","XPKeywords","XPSubject","FlashPixVersion","ColorSpace","ExifImageWidth","ExifImageLength","RelatedSoundFile","InteroperabilityOffset","FlashEnergy","SpatialFrequencyResponse","FocalPlaneXResolution","FocalPlaneYResolution","FocalPlaneResolutionUnit","SubjectLocation","ExposureIndex","SensingMethod","FileSource","SceneType","CVAPattern","CustomRendered","ExposureMode","WhiteBalance","DigitalZoomRatio","FocalLengthIn35mmFilm","SceneCaptureType","GainControl","Contrast","Saturation","Sharpness","DeviceSettingDescription","SubjectDistanceRange","ImageUniqueID","CameraOwnerName","BodySerialNumber","LensSpecification","LensMake","LensModel","LensSerialNumber","Gamma","PrintIM","Padding","OffsetSchema","OwnerName","SerialNumber","InteropIndex","InteropVersion","RelatedImageFileFormat","RelatedImageWidth","RelatedImageLength","GPSVersionID","GPSLatitudeRef","GPSLatitude","GPSLongitudeRef","GPSLongitude","GPSAltitudeRef","GPSAltitude","GPSTimeStamp","GPSSatellites","GPSStatus","GPSMeasureMode","GPSDOP","GPSSpeedRef","GPSSpeed","GPSTrackRef","GPSTrack","GPSImgDirectionRef","GPSImgDirection","GPSMapDatum","GPSDestLatitudeRef","GPSDestLatitude","GPSDestLongitudeRef","GPSDestLongitude","GPSDestBearingRef","GPSDestBearing","GPSDestDistanceRef","GPSDestDistance","GPSProcessingMethod","GPSAreaInformation","GPSDate","GPSDifferential"]),x.s)
B.G3=new C.a_(197,{ProcessingSoftware:11,SubfileType:254,OldSubfileType:255,ImageWidth:256,ImageLength:257,ImageHeight:257,BitsPerSample:258,Compression:259,PhotometricInterpretation:262,Thresholding:263,CellWidth:264,CellLength:265,FillOrder:266,DocumentName:269,ImageDescription:270,Make:271,Model:272,StripOffsets:273,Orientation:274,SamplesPerPixel:277,RowsPerStrip:278,StripByteCounts:279,MinSampleValue:280,MaxSampleValue:281,XResolution:282,YResolution:283,PlanarConfiguration:284,PageName:285,XPosition:286,YPosition:287,GrayResponseUnit:290,GrayResponseCurve:291,T4Options:292,T6Options:293,ResolutionUnit:296,PageNumber:297,ColorResponseUnit:300,TransferFunction:301,Software:305,DateTime:306,Artist:315,HostComputer:316,Predictor:317,WhitePoint:318,PrimaryChromaticities:319,ColorMap:320,HalftoneHints:321,TileWidth:322,TileLength:323,TileOffsets:324,TileByteCounts:325,BadFaxLines:326,CleanFaxData:327,ConsecutiveBadFaxLines:328,InkSet:332,InkNames:333,NumberofInks:334,DotRange:336,TargetPrinter:337,ExtraSamples:338,SampleFormat:339,SMinSampleValue:340,SMaxSampleValue:341,TransferRange:342,ClipPath:343,JPEGProc:512,JPEGInterchangeFormat:513,JPEGInterchangeFormatLength:514,YCbCrCoefficients:529,YCbCrSubSampling:530,YCbCrPositioning:531,ReferenceBlackWhite:532,ApplicationNotes:700,Rating:18246,CFARepeatPatternDim:33421,CFAPattern:33422,BatteryLevel:33423,Copyright:33432,ExposureTime:33434,FNumber:33437,"IPTC-NAA":33723,ExifOffset:34665,InterColorProfile:34675,ExposureProgram:34850,SpectralSensitivity:34852,GPSOffset:34853,ISOSpeed:34855,OECF:34856,SensitivityType:34864,RecommendedExposureIndex:34866,ExifVersion:36864,DateTimeOriginal:36867,DateTimeDigitized:36868,OffsetTime:36880,OffsetTimeOriginal:36881,OffsetTimeDigitized:36882,ComponentsConfiguration:37121,CompressedBitsPerPixel:37122,ShutterSpeedValue:37377,ApertureValue:37378,BrightnessValue:37379,ExposureBiasValue:37380,MaxApertureValue:37381,SubjectDistance:37382,MeteringMode:37383,LightSource:37384,Flash:37385,FocalLength:37386,SubjectArea:37396,MakerNote:37500,UserComment:37510,SubSecTime:37520,SubSecTimeOriginal:37521,SubSecTimeDigitized:37522,XPTitle:40091,XPComment:40092,XPAuthor:40093,XPKeywords:40094,XPSubject:40095,FlashPixVersion:40960,ColorSpace:40961,ExifImageWidth:40962,ExifImageLength:40963,RelatedSoundFile:40964,InteroperabilityOffset:40965,FlashEnergy:41483,SpatialFrequencyResponse:41484,FocalPlaneXResolution:41486,FocalPlaneYResolution:41487,FocalPlaneResolutionUnit:41488,SubjectLocation:41492,ExposureIndex:41493,SensingMethod:41495,FileSource:41728,SceneType:41729,CVAPattern:41730,CustomRendered:41985,ExposureMode:41986,WhiteBalance:41987,DigitalZoomRatio:41988,FocalLengthIn35mmFilm:41989,SceneCaptureType:41990,GainControl:41991,Contrast:41992,Saturation:41993,Sharpness:41994,DeviceSettingDescription:41995,SubjectDistanceRange:41996,ImageUniqueID:42016,CameraOwnerName:42032,BodySerialNumber:42033,LensSpecification:42034,LensMake:42035,LensModel:42036,LensSerialNumber:42037,Gamma:42240,PrintIM:50341,Padding:59932,OffsetSchema:59933,OwnerName:65e3,SerialNumber:65001,InteropIndex:1,InteropVersion:2,RelatedImageFileFormat:4096,RelatedImageWidth:4097,RelatedImageLength:4098,GPSVersionID:0,GPSLatitudeRef:1,GPSLatitude:2,GPSLongitudeRef:3,GPSLongitude:4,GPSAltitudeRef:5,GPSAltitude:6,GPSTimeStamp:7,GPSSatellites:8,GPSStatus:9,GPSMeasureMode:10,GPSDOP:11,GPSSpeedRef:12,GPSSpeed:13,GPSTrackRef:14,GPSTrack:15,GPSImgDirectionRef:16,GPSImgDirection:17,GPSMapDatum:18,GPSDestLatitudeRef:19,GPSDestLatitude:20,GPSDestLongitudeRef:21,GPSDestLongitude:22,GPSDestBearingRef:23,GPSDestBearing:24,GPSDestDistanceRef:25,GPSDestDistance:26,GPSProcessingMethod:27,GPSAreaInformation:28,GPSDate:29,GPSDifferential:30},B.a57,x.w)
B.afd=new C.cj([B.c5,1,B.c6,1,B.c7,1,B.H,1,B.dq,2,B.dr,4,B.e1,1,B.e2,2,B.e3,4,B.cQ,2,B.dp,4,B.e0,8],x.U)
B.Gc=new C.cj([B.c5,1,B.c6,3,B.c7,15,B.H,255,B.dq,65535,B.dr,4294967295,B.e1,127,B.e2,32767,B.e3,2147483647,B.cQ,1,B.dp,1,B.e0,1],x.U)
B.og=new C.cj([34665,"exif",40965,"interop",34853,"gps"],C.A("cj<l,o>"))
B.ph=new A.k4(0,"bilevel")
B.au8=new A.k4(1,"gray4bit")
B.au9=new A.k4(2,"gray")
B.aua=new A.k4(3,"grayAlpha")
B.aub=new A.k4(4,"palette")
B.Mw=new A.k4(5,"rgb")
B.auc=new A.k4(6,"rgba")
B.aud=new A.k4(7,"yCbCrSub")
B.lc=new A.k4(8,"generic")
B.aue=new A.k4(9,"invalid")
B.ii=new A.A3(0,"undefined")
B.pV=new A.A3(1,"lossy")
B.ln=new A.A3(2,"lossless")
B.awe=new A.A3(3,"animated")})();(function staticFields(){$.aNB=null
$.aWi=!1
$.aWj=C.a([A.aOJ(),A.bhs(),A.bhx(),A.bhy(),A.bhz(),A.bhA(),A.bhB(),A.bhC(),A.bhD(),A.bhE(),A.bht(),A.bhu(),A.bhv(),A.bhw(),A.aOJ(),A.aOJ()],C.A("k<l(iT,l,l)>"))
$.dn=null
$.akn=C.bi("_eLut")})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"bhO","aOL",()=>C.cR("^[\\w!#%&'*+\\-.^`|~]+$",!0,!1))
w($,"bnf","aKl",()=>{var u=null,t="ISOSpeed"
return C.af([11,A.X("ProcessingSoftware",B.ag,u),254,A.X("SubfileType",B.b7,1),255,A.X("OldSubfileType",B.b7,1),256,A.X("ImageWidth",B.b7,1),257,A.X("ImageLength",B.b7,1),258,A.X("BitsPerSample",B.a6,1),259,A.X("Compression",B.a6,1),262,A.X("PhotometricInterpretation",B.a6,1),263,A.X("Thresholding",B.a6,1),264,A.X("CellWidth",B.a6,1),265,A.X("CellLength",B.a6,1),266,A.X("FillOrder",B.a6,1),269,A.X("DocumentName",B.ag,u),270,A.X("ImageDescription",B.ag,u),271,A.X("Make",B.ag,u),272,A.X("Model",B.ag,u),273,A.X("StripOffsets",B.b7,u),274,A.X("Orientation",B.a6,1),277,A.X("SamplesPerPixel",B.a6,1),278,A.X("RowsPerStrip",B.b7,1),279,A.X("StripByteCounts",B.b7,1),280,A.X("MinSampleValue",B.a6,1),281,A.X("MaxSampleValue",B.a6,1),282,A.X("XResolution",B.bI,1),283,A.X("YResolution",B.bI,1),284,A.X("PlanarConfiguration",B.a6,1),285,A.X("PageName",B.ag,u),286,A.X("XPosition",B.bI,1),287,A.X("YPosition",B.bI,1),290,A.X("GrayResponseUnit",B.a6,1),291,A.X("GrayResponseCurve",B.p,u),292,A.X("T4Options",B.p,u),293,A.X("T6Options",B.p,u),296,A.X("ResolutionUnit",B.a6,1),297,A.X("PageNumber",B.a6,2),300,A.X("ColorResponseUnit",B.p,u),301,A.X("TransferFunction",B.a6,768),305,A.X("Software",B.ag,u),306,A.X("DateTime",B.ag,u),315,A.X("Artist",B.ag,u),316,A.X("HostComputer",B.ag,u),317,A.X("Predictor",B.a6,1),318,A.X("WhitePoint",B.bI,2),319,A.X("PrimaryChromaticities",B.bI,6),320,A.X("ColorMap",B.a6,u),321,A.X("HalftoneHints",B.a6,2),322,A.X("TileWidth",B.b7,1),323,A.X("TileLength",B.b7,1),324,A.X("TileOffsets",B.b7,u),325,A.X("TileByteCounts",B.p,u),326,A.X("BadFaxLines",B.p,u),327,A.X("CleanFaxData",B.p,u),328,A.X("ConsecutiveBadFaxLines",B.p,u),332,A.X("InkSet",B.p,u),333,A.X("InkNames",B.p,u),334,A.X("NumberofInks",B.p,u),336,A.X("DotRange",B.p,u),337,A.X("TargetPrinter",B.ag,u),338,A.X("ExtraSamples",B.p,u),339,A.X("SampleFormat",B.a6,1),340,A.X("SMinSampleValue",B.p,u),341,A.X("SMaxSampleValue",B.p,u),342,A.X("TransferRange",B.p,u),343,A.X("ClipPath",B.p,u),512,A.X("JPEGProc",B.p,u),513,A.X("JPEGInterchangeFormat",B.p,u),514,A.X("JPEGInterchangeFormatLength",B.p,u),529,A.X("YCbCrCoefficients",B.bI,3),530,A.X("YCbCrSubSampling",B.a6,1),531,A.X("YCbCrPositioning",B.a6,1),532,A.X("ReferenceBlackWhite",B.bI,6),700,A.X("ApplicationNotes",B.a6,1),18246,A.X("Rating",B.a6,1),33421,A.X("CFARepeatPatternDim",B.p,u),33422,A.X("CFAPattern",B.p,u),33423,A.X("BatteryLevel",B.p,u),33432,A.X("Copyright",B.ag,u),33434,A.X("ExposureTime",B.bI,1),33437,A.X("FNumber",B.bI,u),33723,A.X("IPTC-NAA",B.b7,1),34665,A.X("ExifOffset",B.p,u),34675,A.X("InterColorProfile",B.p,u),34850,A.X("ExposureProgram",B.a6,1),34852,A.X("SpectralSensitivity",B.ag,u),34853,A.X("GPSOffset",B.p,u),34855,A.X(t,B.b7,1),34856,A.X("OECF",B.p,u),34864,A.X("SensitivityType",B.a6,1),34866,A.X("RecommendedExposureIndex",B.b7,1),34867,A.X(t,B.b7,1),36864,A.X("ExifVersion",B.du,u),36867,A.X("DateTimeOriginal",B.ag,u),36868,A.X("DateTimeDigitized",B.ag,u),36880,A.X("OffsetTime",B.ag,u),36881,A.X("OffsetTimeOriginal",B.ag,u),36882,A.X("OffsetTimeDigitized",B.ag,u),37121,A.X("ComponentsConfiguration",B.du,u),37122,A.X("CompressedBitsPerPixel",B.p,u),37377,A.X("ShutterSpeedValue",B.p,u),37378,A.X("ApertureValue",B.p,u),37379,A.X("BrightnessValue",B.p,u),37380,A.X("ExposureBiasValue",B.p,u),37381,A.X("MaxApertureValue",B.p,u),37382,A.X("SubjectDistance",B.p,u),37383,A.X("MeteringMode",B.p,u),37384,A.X("LightSource",B.p,u),37385,A.X("Flash",B.p,u),37386,A.X("FocalLength",B.p,u),37396,A.X("SubjectArea",B.p,u),37500,A.X("MakerNote",B.du,u),37510,A.X("UserComment",B.du,u),37520,A.X("SubSecTime",B.p,u),37521,A.X("SubSecTimeOriginal",B.p,u),37522,A.X("SubSecTimeDigitized",B.p,u),40091,A.X("XPTitle",B.p,u),40092,A.X("XPComment",B.p,u),40093,A.X("XPAuthor",B.p,u),40094,A.X("XPKeywords",B.p,u),40095,A.X("XPSubject",B.p,u),40960,A.X("FlashPixVersion",B.p,u),40961,A.X("ColorSpace",B.a6,1),40962,A.X("ExifImageWidth",B.a6,1),40963,A.X("ExifImageLength",B.a6,1),40964,A.X("RelatedSoundFile",B.p,u),40965,A.X("InteroperabilityOffset",B.p,u),41483,A.X("FlashEnergy",B.p,u),41484,A.X("SpatialFrequencyResponse",B.p,u),41486,A.X("FocalPlaneXResolution",B.p,u),41487,A.X("FocalPlaneYResolution",B.p,u),41488,A.X("FocalPlaneResolutionUnit",B.p,u),41492,A.X("SubjectLocation",B.p,u),41493,A.X("ExposureIndex",B.p,u),41495,A.X("SensingMethod",B.p,u),41728,A.X("FileSource",B.p,u),41729,A.X("SceneType",B.p,u),41730,A.X("CVAPattern",B.p,u),41985,A.X("CustomRendered",B.p,u),41986,A.X("ExposureMode",B.p,u),41987,A.X("WhiteBalance",B.p,u),41988,A.X("DigitalZoomRatio",B.p,u),41989,A.X("FocalLengthIn35mmFilm",B.p,u),41990,A.X("SceneCaptureType",B.p,u),41991,A.X("GainControl",B.p,u),41992,A.X("Contrast",B.p,u),41993,A.X("Saturation",B.p,u),41994,A.X("Sharpness",B.p,u),41995,A.X("DeviceSettingDescription",B.p,u),41996,A.X("SubjectDistanceRange",B.p,u),42016,A.X("ImageUniqueID",B.p,u),42032,A.X("CameraOwnerName",B.ag,u),42033,A.X("BodySerialNumber",B.ag,u),42034,A.X("LensSpecification",B.p,u),42035,A.X("LensMake",B.ag,u),42036,A.X("LensModel",B.ag,u),42037,A.X("LensSerialNumber",B.ag,u),42240,A.X("Gamma",B.bI,1),50341,A.X("PrintIM",B.p,u),59932,A.X("Padding",B.p,u),59933,A.X("OffsetSchema",B.p,u),65e3,A.X("OwnerName",B.ag,u),65001,A.X("SerialNumber",B.ag,u)],x.p,C.A("Te"))})
v($,"bkq","ae3",()=>C.FS(511))
v($,"bkr","aK7",()=>C.FS(511))
v($,"bkt","aK8",()=>A.aTR(2041))
v($,"bku","ae4",()=>A.aTR(225))
v($,"bks","BE",()=>C.FS(766))
w($,"bjz","b_S",()=>A.aSR(0,0,0))
w($,"blk","iA",()=>C.FS(1))
w($,"bll","j2",()=>A.b5x($.iA().buffer,0,null))
w($,"bld","iz",()=>V.b6t(1))
w($,"ble","j1",()=>{var u,t=$.iz().buffer
C.oQ(t,0,null)
u=D.b.bR(t.byteLength-0,2)
return new Int16Array(t,0,u)})
w($,"blf","dc",()=>C.b6u(1))
w($,"blh","fy",()=>C.aM7($.dc().buffer,0,null))
w($,"blg","p1",()=>A.b4O($.dc().buffer))
w($,"blb","ae7",()=>M.aM6(1))
w($,"blc","aKa",()=>O.aWb($.ae7().buffer,0,null))
w($,"bl9","aP9",()=>C.FJ(1))
w($,"bla","b0J",()=>O.aWb($.aP9().buffer,0,null))
w($,"bli","aPa",()=>A.b9a(1))
w($,"blj","b0K",()=>{var u=$.aPa()
return A.b4P(u.giF(u))})})()}
$__dart_deferred_initializers__["UgaGsSY4bSP0Nv8a4dkz/gJwaDY="] = $__dart_deferred_initializers__.current
