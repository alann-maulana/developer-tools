self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
aDn(d,e){var w=null,v=e.i("pq<0>"),u=new I.pq(w,w,w,w,v)
u.ze(0,d)
u.UU()
return new I.jn(u,v.i("jn<1>"))},
Fw:function Fw(){},
yq:function yq(d,e,f){var _=this
_.a=d
_.b=0
_.c=e
_.$ti=f},
H0:function H0(d){this.$ti=d},
Zw:function Zw(d,e){this.a=d
this.b=e
this.c=0},
aLD(d,e,f){if(d<=0)return new B.jN(f.i("jN<0>"))
return new A.H9(d,e,f.i("H9<0>"))},
H9:function H9(d,e,f){this.a=d
this.b=e
this.$ti=f},
m3(d){return new A.KD(d,null,null)},
KD:function KD(d,e,f){this.a=d
this.b=e
this.c=f},
vF(d,e,f,g){var w,v
if(x.Q.b(d))w=B.bP(d.buffer,d.byteOffset,d.byteLength)
else w=x.L.b(d)?d:B.f1(x.hf.a(d),!0,x.p)
v=new A.aeP(w,g,g,e)
v.e=f==null?w.length:f
return v},
aeQ:function aeQ(){},
aeP:function aeP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$},
aMr(d){return new A.ahM(new Uint8Array(32768))},
ahN:function ahN(){},
ahM:function ahM(d){this.a=0
this.c=d},
axv:function axv(){},
vt(d){var w=new A.adY()
w.ae0(d)
return w},
adY:function adY(){this.a=$
this.b=0
this.c=2147483647},
aLq(d){var w=A.vt(C.pB),v=A.vt(C.tS)
v=new A.QR(A.vF(d,0,null,0),A.aMr(null),w,v)
v.b=!0
v.X2()
return v},
QR:function QR(d,e,f,g){var _=this
_.a=d
_.b=!1
_.c=e
_.e=_.d=0
_.r=f
_.w=g},
aqZ:function aqZ(){},
aqY:function aqY(){},
Qe:function Qe(d,e,f){var _=this
_.a=0
_.b=!1
_.c=d
_.e=e
_.$ti=f},
acl:function acl(d,e){this.a=d
this.b=e},
acm:function acm(d){this.a=d},
BB:function BB(d,e){this.a=d
this.b=e},
y4:function y4(d,e){this.a=d
this.$ti=e},
Fv:function Fv(d,e,f,g,h){var _=this
_.a=d
_.b=null
_.c=e
_.d=f
_.e=g
_.f=!1
_.$ti=h},
aoE:function aoE(d,e){this.a=d
this.b=e},
aoD:function aoD(d){this.a=d},
aJE(d,e){return new A.a7m(d,e)},
aJF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=d.length
if(g<6)throw B.c(A.aBF("BlurHash must not be null or '< 6' characters long."))
w=A.az2(d,0,1)
v=D.b.cd(w,9)+1
u=D.b.bC(w,9)+1
if(g!==4+2*v*u)throw B.c(A.aBF("Invalid number of components in BlurHash."))
t=(A.az2(d,1,2)+1)/166
s=J.aCr(u,x.i)
for(g=x.M,r=0;r<u;++r)s[r]=B.at(v,new A.fM(0,0,0),!1,g)
for(q=0;q<u;++q)for(g=q*v,p=q===0,r=0;r<v;++r)if(r===0&&p){o=A.az2(d,2,6)
n=A.K0(o>>>16)
m=A.K0(o>>>8&255)
o=A.K0(o&255)
s[q][r]=new A.fM(n,m,o)}else{o=4+(r+g)*2
o=A.az2(d,o,o+2)
l=D.e.cd(o/19,19)
k=D.b.cd(o,19)
o=(o/361-9)/9
n=Math.pow(Math.abs(o),2)
o=J.d5(o)
m=(l-9)/9
j=Math.pow(Math.abs(m),2)
m=J.d5(m)
i=(k-9)/9
h=Math.pow(Math.abs(i),2)
i=J.d5(i)
s[q][r]=new A.fM(n*o*t,j*m*t,h*i*t)}return A.aJE(d,A.b1P(s,1))},
aUs(d,e,f){var w,v,u,t,s,r,q,p,o
if(e<1||e>9||f<1||f>9)throw B.c(new A.L9("BlurHash components must be between 1 and 9."))
w=d.Pw(C.hr)
v=J.aCr(f,x.i)
for(u=x.M,t=0;t<f;++t)v[t]=B.at(e,new A.fM(0,0,0),!1,u)
for(u=d.a,s=d.b,r=0;r<f;++r)for(q=r===0,p=0;p<e;++p){o=p===0&&q?1:2
v[r][p]=A.b1O(w,u,s,p,r,o)}return A.aJE(A.b10(v),v)},
b10(d){var w,v,u,t,s=d[0].length,r=d.length,q=B.at(s*r,new A.fM(0,0,0),!1,x.M)
for(w=0,v=0;v<r;++v)for(u=0;u<s;++u,w=t){t=w+1
q[w]=d[v][u]}return A.b11(q,s,r)},
b11(d,e,f){var w,v,u,t,s,r,q,p,o=D.d.gU(d),n=B.dZ(d,1,null,B.ae(d).c).eA(0),m=""+A.a5q(e-1+(f-1)*9,1)
if(n.length!==0){w=Math.max(0,Math.min(82,D.e.ek(new B.aD(n,A.b2W(),B.ae(n).i("aD<1,K>")).pO(0,K.k_)*166-0.5)))
v=(w+1)/166
m+=A.a5q(w,1)}else{m+=A.a5q(0,1)
v=1}m+=A.a5q((A.JX(o.a)<<16>>>0)+(A.JX(o.b)<<8>>>0)+A.JX(o.c),4)
for(u=n.length,t=0;t<n.length;n.length===u||(0,B.F)(n),++t,m=r){s=n[t]
r=s.a/v
q=D.e.ek(Math.max(0,Math.min(18,Math.pow(Math.abs(r),0.5)*J.d5(r)*9+9.5)))
r=s.b/v
p=D.e.ek(Math.max(0,Math.min(18,Math.pow(Math.abs(r),0.5)*J.d5(r)*9+9.5)))
r=s.c/v
r=m+A.a5q(q*19*19+p*19+D.e.ek(Math.max(0,Math.min(18,Math.pow(Math.abs(r),0.5)*J.d5(r)*9+9.5))),2)}return m.charCodeAt(0)==0?m:m},
b1L(d){return Math.max(Math.abs(d.a),Math.max(Math.abs(d.b),Math.abs(d.c)))},
b1P(d,e){var w,v,u,t,s,r
for(w=d.length,v=0;v<w;++v)for(u=v!==0,t=0;s=d[v],t<s.length;++t)if(u&&t!==0){r=s[t]
s[t]=new A.fM(r.a*e,r.b*e,r.c*e)}return d},
b2d(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=B.at(d*e*4,0,!1,x.p)
for(w=0,v=0;v<e;++v)for(u=3.141592653589793*v,t=0;t<d;++t){for(s=3.141592653589793*t,r=0,q=0,p=0,o=0;o<f.length;++o)for(n=u*o/e,m=0;m<f[0].length;++m){l=Math.cos(s*m/d)*Math.cos(n)
k=f[o][m]
r+=k.a*l
q+=k.b*l
p+=k.c*l}j=w+1
i[w]=A.JX(r)
w=j+1
i[j]=A.JX(q)
j=w+1
i[w]=A.JX(p)
w=j+1
i[j]=255}return new Uint8Array(B.eS(i))},
b1O(d,e,f,g,h,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e*4
for(w=3.141592653589793*g,v=3.141592653589793*h,u=0,t=0,s=0,r=0;r<e;++r)for(q=w*r/e,p=4*r,o=p+1,n=p+2,m=0;m<f;++m){l=a0*Math.cos(q)*Math.cos(v*m/f)
k=m*i
u+=l*A.K0(d[p+k])
t+=l*A.K0(d[o+k])
s+=l*A.K0(d[n+k])}j=1/(e*f)
return new A.fM(u*j,t*j,s*j)},
a7m:function a7m(d,e){this.a=d
this.b=e},
aBF(d){return new A.L8(d)},
L8:function L8(d){this.a=d},
L9:function L9(d){this.a=d},
K0(d){var w=d/255
if(w<=0.04045)return w/12.92
return Math.pow((w+0.055)/1.055,2.4)},
JX(d){var w=D.e.u(d,0,1)
if(w<=0.0031308)return D.e.a0(w*12.92*255+0.5)
return D.e.a0((1.055*Math.pow(w,0.4166666666666667)-0.055)*255+0.5)},
fM:function fM(d,e,f){this.a=d
this.b=e
this.c=f},
aUr(){var w=$.bA()
return new A.uo(new A.Ac(new H.d9(G.a7,w),new H.d9(G.a7,w),C.eG,C.h2,w),null)},
uo:function uo(d,e){this.c=d
this.a=e},
L7:function L7(d,e){this.c=d
this.a=e},
a7s:function a7s(d){this.a=d},
a7n:function a7n(d){this.a=d},
a7o:function a7o(d){this.a=d},
a7p:function a7p(d,e){this.a=d
this.b=e},
a7q:function a7q(d,e,f){this.a=d
this.b=e
this.c=f},
a7r:function a7r(d,e,f){this.a=d
this.b=e
this.c=f},
aMe(d){switch(d.a){case 1:return"Decoded from File"
case 2:return"Decoded from Base64 String"
case 3:return"Decoded from URL"
case 4:return"Decoded from Blur Hash"
case 0:return null}},
nL:function nL(d,e){this.a=d
this.b=e},
q5:function q5(d,e){this.a=d
this.b=e},
Ac:function Ac(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=null
_.d=f
_.e=g
_.r=_.f=null
_.y1$=0
_.y2$=h
_.al$=_.aF$=0
_.aN$=!1},
a7t:function a7t(d){this.a=d},
a7u:function a7u(d){this.a=d},
a7v:function a7v(d){this.a=d},
aKh(d,e,f){return new A.Ow(f,e,d)},
b4z(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(b2.ga_(b2))return
w=b2.a
v=b2.c-w
u=b2.b
t=b2.d-u
s=new B.V(v,t)
r=a8.gby(a8)
q=a8.gbW(a8)
p=L.aQb(a6,new B.V(r,q).is(0,b4),s)
o=p.a.ab(0,b4)
n=p.b
if(b3!==C.dS&&n.k(0,s))b3=C.dS
m=$.bd()?M.bC():new M.br(new M.bx())
m.sa34(!1)
m.sb8(0,new B.W(((D.b.bC(b1*255,1)&255)<<24|0)>>>0))
m.spk(a5)
m.sa2Y(!1)
l=n.a
k=(v-l)/2
j=n.b
i=(t-j)/2
t=a0.a
t=w+(k+(a7?-t:t)*k)
u+=i+a0.b*i
h=new B.C(t,u,t+l,u+j)
g=b3!==C.dS||a7
if(g)a1.ci(0)
u=b3===C.dS
if(!u)a1.nr(0,b2)
if(a7){f=-(w+v/2)
a1.b0(0,-f,0)
a1.ds(0,-1,1)
a1.b0(0,f,0)}e=a0.a2O(o,new B.C(0,0,r,q))
if(u)a1.kY(a8,e,h,m)
else for(w=A.b1g(b2,h,b3),v=w.length,d=0;d<w.length;w.length===v||(0,B.F)(w),++d)a1.kY(a8,e,w[d],m)
if(g)a1.c4(0)},
b1g(d,e,f){var w,v,u,t,s,r,q=e.c,p=e.a,o=q-p,n=e.d,m=e.b,l=n-m,k=f!==C.Qt
if(!k||f===C.Qu){w=D.e.ek((d.a-p)/o)
v=D.e.eh((d.c-q)/o)}else{w=0
v=0}if(!k||f===C.Qv){u=D.e.ek((d.b-m)/l)
t=D.e.eh((d.d-n)/l)}else{u=0
t=0}q=B.a([],x.ce)
for(s=w;s<=v;++s)for(p=s*o,r=u;r<=t;++r)q.push(e.dk(new B.n(p,r*l)))
return q},
qM:function qM(d,e){this.a=d
this.b=e},
Ow:function Ow(d,e,f){this.a=d
this.d=e
this.e=f},
Ox:function Ox(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=null},
oh:function oh(){},
aev:function aev(d,e,f){this.a=d
this.b=e
this.c=f},
aew:function aew(d,e,f){this.a=d
this.b=e
this.c=f},
aes:function aes(d,e){this.a=d
this.b=e},
aer:function aer(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aet:function aet(d){this.a=d},
aeu:function aeu(d,e){this.a=d
this.b=e},
l_:function l_(d){this.a=d},
asZ:function asZ(d,e){var _=this
_.a=d
_.d=_.c=_.b=null
_.f=_.e=!1
_.r=0
_.w=!1
_.x=e},
aXe(d,e,f){var w=new A.TM(f,B.a([],x.v),B.a([],x.u))
w.ae6(null,d,e,null,f)
return w},
jV:function jV(d,e,f){this.a=d
this.b=e
this.c=f},
aex:function aex(){this.b=this.a=null},
aey:function aey(d){this.a=d},
qN:function qN(){},
aez:function aez(){},
TM:function TM(d,e,f){var _=this
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
ah5:function ah5(d,e){this.a=d
this.b=e},
ah4:function ah4(d){this.a=d},
a0e:function a0e(){},
a0d:function a0d(){},
Eo:function Eo(d,e,f){var _=this
_.E=d
_.C$=e
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
_.ay=f
_.ch=!1
_.CW=$
_.cx=!0
_.cy=null
_.db=!0
_.dx=null
_.a=0
_.c=_.b=null},
A7:function A7(d,e,f){this.e=d
this.c=e
this.a=f},
aPu(d){return d.b===503},
aPv(d,e){return!1},
aPs(d){return new B.b4(D.e.be(5e5*Math.pow(1.5,d)))},
akv:function akv(d){this.a=d},
akw:function akw(){},
akx:function akx(){},
a7f:function a7f(){},
KX:function KX(){},
KY:function KY(){},
KZ:function KZ(){},
q1:function q1(){},
a7C:function a7C(d){this.a=d},
a7D:function a7D(d,e,f){this.a=d
this.b=e
this.c=f},
a7E:function a7E(d,e){this.a=d
this.b=e},
nM:function nM(d){this.a=d},
a7K:function a7K(d){this.a=d},
M5:function M5(d){this.a=d},
aYg(d,e){var w=new Uint8Array(0),v=$.aFi().b
if(!v.test(d))B.M(B.hD(d,"method","Not a valid method"))
v=x.N
return new A.akk(D.Y,w,d,e,B.j1(new A.KY(),new A.KZ(),null,v,v))},
akk:function akk(d,e,f,g,h){var _=this
_.x=d
_.y=e
_.a=f
_.b=g
_.c=null
_.e=_.d=!0
_.f=5
_.r=h
_.w=!1},
akl(d){return A.aYh(d)},
aYh(d){var w=0,v=B.a2(x.q),u,t,s,r,q,p,o,n
var $async$akl=B.a3(function(e,f){if(e===1)return B.a_(f,v)
while(true)switch(w){case 0:w=3
return B.a5(d.w.a5I(),$async$akl)
case 3:t=f
s=d.b
r=d.a
q=d.e
p=d.c
o=A.b5n(t)
n=t.length
o=new A.ry(o,r,s,p,n,q,!1,!0)
o.RN(s,n,q,!1,!0,p,r)
u=o
w=1
break
case 1:return B.a0(u,v)}})
return B.a1($async$akl,v)},
ry:function ry(d,e,f,g,h,i,j,k){var _=this
_.w=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.r=k},
aYS(d,e){var w=null,v=I.aDm(w,w,w,!0,x.L),u=$.aFi().b
if(!u.test(d))B.M(B.hD(d,"method","Not a valid method"))
u=x.N
return new A.aoJ(v,d,e,B.j1(new A.KY(),new A.KZ(),w,u,u))},
aoJ:function aoJ(d,e,f,g){var _=this
_.x=d
_.a=e
_.b=f
_.c=null
_.e=_.d=!0
_.f=5
_.r=g
_.w=!1},
rU:function rU(d,e,f,g,h,i,j,k){var _=this
_.w=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.r=k},
aKD(d){var w=new A.BE(B.E(x.p,x.z))
w.adV(d)
return w},
BE:function BE(d){this.a=null
this.b=d},
aJA(d){var w,v,u=new A.a7k()
if(!A.a7l(d))B.M(A.ah("Not a bitmap file."))
d.d+=2
w=d.K()
v=$.cN()
v[0]=w
w=$.eU()
u.a=w[0]
d.d+=4
v[0]=d.K()
u.b=w[0]
return u},
a7l(d){if(d.c-d.d<2)return!1
return A.aB(d,null,0).T()===19778},
aUt(d,e){var w,v,u,t,s,r,q,p=e==null?A.aJA(d):e,o=d.K(),n=d.K(),m=$.cN()
m[0]=n
n=$.eU()
w=n[0]
m[0]=d.K()
v=n[0]
u=d.T()
t=d.T()
s=d.K()
r=B.ad([0,C.jV,3,C.jU],x.p,x.A).h(0,s)
if(r==null)B.M(A.ah("Bitmap compression "+s+" is not supported yet."))
s=d.K()
m[0]=d.K()
q=n[0]
m[0]=d.K()
n=new A.q6(p,v,w,o,u,t,r,s,q,n[0],d.K(),d.K())
n.RT(d,e)
return n},
un:function un(d,e){this.a=d
this.b=e},
a7k:function a7k(){this.b=this.a=$},
q6:function q6(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.cy=_.cx=_.CW=_.ch=_.ay=null
_.b=_.a=0},
a7x:function a7x(d,e,f){this.a=d
this.b=e
this.c=f},
Lb:function Lb(){this.a=$
this.b=null},
a7w:function a7w(d,e,f){this.a=d
this.b=e
this.c=f},
a9o:function a9o(){this.a=$
this.b=null},
a9c:function a9c(){},
a9e:function a9e(){},
aaF:function aaF(){},
Pp:function Pp(d,e,f){this.a=d
this.c=e
this.d=f},
QX:function QX(d,e){var _=this
_.r=d
_.b=_.a=0
_.c=e},
Pq:function Pq(){var _=this
_.a=null
_.f=_.e=_.c=_.b=$},
aKG(d,e,f,g){var w,v
switch(d){case 1:return new A.aeV(e)
case 2:return new A.QZ(g==null?1:g,e)
case 3:return new A.QZ(g==null?16:g,e)
case 4:w=g==null?32:g
v=new A.aeT(f,w,e)
v.ae2(e,f,w)
return v
case 5:return new A.aeU(f,g==null?16:g,e)
case 6:return new A.QX(g==null?32:g,e)
case 7:return new A.QX(g==null?32:g,e)
default:throw B.c(A.ah("Invalid compression type: "+d))}},
abf:function abf(){},
aeS:function aeS(){},
aVV(d,e,f,g){var w,v,u,t,s,r,q,p
if(e===0){if(g!==0)throw B.c(A.ah("Incomplete huffman data"))
return}w=d.d
v=d.K()
u=d.K()
d.d+=4
t=d.K()
if(v<65537)s=u>=65537
else s=!0
if(s)throw B.c(A.ah("Invalid huffman table size"))
d.d+=4
r=B.at(65537,0,!1,x.p)
q=J.ij(16384,x.W)
for(p=0;p<16384;++p)q[p]=new A.Pr()
A.aVW(d,e-20,v,u,r)
if(t>8*(e-(d.d-w)))throw B.c(A.ah("Error in header for Huffman-encoded data (invalid number of bits)."))
A.aVS(r,v,u,q)
A.aVU(r,q,d,t,u,g,f)},
aVU(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p,o="Error in Huffman-encoded data (invalid code).",n=B.a([0,0],x.t),m=f.d+D.b.bC(g+7,8)
for(w=0;f.d<m;){A.aCc(n,f)
for(;v=n[1],v>=14;){u=e[D.b.it(n[0],v-14)&16383]
t=u.a
if(t!==0){n[1]=v-t
w=A.aCd(u.b,h,n,f,j,w,i)}else{if(u.c==null)throw B.c(A.ah(o))
for(s=0;s<u.b;++s){r=d[u.c[s]]&63
while(!0){v=n[1]
if(!(v<r&&f.d<m))break
A.aCc(n,f)}if(v>=r){t=u.c
v-=r
if(d[t[s]]>>>6===(D.b.it(n[0],v)&D.b.bS(1,r)-1)>>>0){n[1]=v
q=A.aCd(t[s],h,n,f,j,w,i)
w=q
break}}}if(s===u.b)throw B.c(A.ah(o))}}}p=8-g&7
n[0]=D.b.B(n[0],p)
n[1]=n[1]-p
for(;v=n[1],v>0;){u=e[D.b.cI(n[0],14-v)&16383]
t=u.a
if(t!==0){n[1]=v-t
w=A.aCd(u.b,h,n,f,j,w,i)}else throw B.c(A.ah(o))}if(w!==i)throw B.c(A.ah("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
aCd(d,e,f,g,h,i,j){var w,v,u,t,s,r="Error in Huffman-encoded data (decoded data are longer than expected)."
if(d===e){if(f[1]<8)A.aCc(f,g)
w=f[1]-8
f[1]=w
v=D.b.it(f[0],w)&255
if(i+v>j)throw B.c(A.ah(r))
u=h[i-1]
for(;t=v-1,v>0;v=t,i=s){s=i+1
h[i]=u}}else{if(i<j){s=i+1
h[i]=d}else throw B.c(A.ah(r))
i=s}return i},
aVS(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m="Error in Huffman-encoded data (invalid code table entry)."
for(w=x.t,v=x.p;e<=f;++e){u=d[e]
t=u>>>6
s=u&63
if(D.b.d5(t,s)!==0)throw B.c(A.ah(m))
if(s>14){r=g[D.b.eX(t,s-14)]
if(r.a!==0)throw B.c(A.ah(m))
u=++r.b
q=r.c
if(q!=null){u=B.at(u,0,!1,v)
r.c=u
for(p=r.b-1,o=0;o<p;++o)u[o]=q[o]}else r.c=B.a([0],w)
r.c[r.b-1]=e}else if(s!==0){u=14-s
n=D.b.cI(t,u)
for(o=D.b.cI(1,u);o>0;--o,++n){r=g[n]
if(r.a!==0||r.c!=null)throw B.c(A.ah(m))
r.a=s
r.b=e}}}},
aVW(d,e,f,g,h){var w,v,u,t,s,r="Error in Huffman-encoded data (unexpected end of code table data).",q="Error in Huffman-encoded data (code table is longer than expected).",p=d.d,o=B.a([0,0],x.t)
for(w=g+1;f<=g;++f){if(d.d-p>e)throw B.c(A.ah(r))
v=A.aKH(6,o,d)
h[f]=v
if(v===63){if(d.d-p>e)throw B.c(A.ah(r))
u=A.aKH(8,o,d)+6
if(f+u>w)throw B.c(A.ah(q))
for(;t=u-1,u!==0;u=t,f=s){s=f+1
h[f]=0}--f}else if(v>=59){u=v-59+2
if(f+u>w)throw B.c(A.ah(q))
for(;t=u-1,u!==0;u=t,f=s){s=f+1
h[f]=0}--f}}A.aVT(h)},
aVT(d){var w,v,u,t,s,r=B.at(59,0,!1,x.p)
for(w=0;w<65537;++w){v=d[w]
r[v]=r[v]+1}for(u=0,w=58;w>0;--w,u=t){t=u+r[w]>>>1
r[w]=u}for(w=0;w<65537;++w){s=d[w]
if(s>0){v=r[s]
r[s]=v+1
d[w]=(s|v<<6)>>>0}}},
aCc(d,e){d[0]=((d[0]<<8|e.aP())&-1)>>>0
d[1]=(d[1]+8&-1)>>>0},
aKH(d,e,f){var w
for(;w=e[1],w<d;){e[0]=((e[0]<<8|f.a[f.d++])&-1)>>>0
e[1]=(w+8&-1)>>>0}w-=d
e[1]=w
return(D.b.it(e[0],w)&D.b.bS(1,d)-1)>>>0},
Pr:function Pr(){this.b=this.a=0
this.c=null},
aVX(d){var w=A.be(d,!1,null,0)
if(w.K()!==20000630)return!1
if(w.aP()!==2)return!1
if((w.jx()&4294967289)>>>0!==0)return!1
return!0},
abh:function abh(d){var _=this
_.d=d
_.e=null
_.f=$
_.b=_.a=0},
aLw(d,e){var w=new A.QY(new A.Qu(B.E(x.T,x.r)),B.a([],x.g9),B.E(x.N,x.U),d)
w.adY(d,e,{})
return w},
abi:function abi(){},
abj:function abj(d,e){this.a=d
this.b=e},
QY:function QY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.e=$
_.r=_.f=null
_.Q=$
_.as=0
_.at=null
_.ax=$
_.CW=_.ch=_.ay=null
_.cx=g
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=null
_.id=$
_.k1=null},
aeT:function aeT(d,e,f){var _=this
_.r=null
_.w=d
_.x=e
_.y=$
_.z=null
_.b=_.a=0
_.c=f},
a1t:function a1t(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
aeU:function aeU(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.b=_.a=0
_.c=f},
aeV:function aeV(d){var _=this
_.r=null
_.b=_.a=0
_.c=d},
QZ:function QZ(d,e){var _=this
_.w=d
_.x=null
_.b=_.a=0
_.c=e},
abg:function abg(){this.a=null},
aL9(d){var w=new Uint8Array(d*3)
A.aWj(d)
return new A.acL(d,w)},
aWj(d){var w
for(w=1;w<=8;++w)if(D.b.bS(1,w)>=d)return w
return 0},
acL:function acL(d,e){this.b=d
this.c=null
this.d=e},
BZ:function BZ(){},
R_:function R_(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.x=$},
Qk:function Qk(d){var _=this
_.e=null
_.r=d
_.b=_.a=0},
acM:function acM(){var _=this
_.d=_.b=_.a=null
_.f=_.e=$
_.r=null
_.w=0
_.x=null
_.Q=_.z=_.y=0
_.as=null
_.cx=_.CW=_.ch=_.ay=_.ax=_.at=0},
aLi(d){var w,v
if(d.T()!==0)return null
w=d.T()
if(!D.d.v(B.a([1,2],x.t),w))return null
if(w===2)return null
v=d.T()
return new A.ae8(v,A.aLD(v,new A.ae9(d),x.gx).eA(0))},
ae7:function ae7(){this.b=this.a=null},
ae8:function ae8(d,e){var _=this
_.e=d
_.f=e
_.b=_.a=0},
ae9:function ae9(d){this.a=d},
vv:function vv(d,e,f){this.b=d
this.d=e
this.e=f},
ae6:function ae6(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.cy=_.cx=_.CW=_.ch=_.ay=null
_.b=_.a=0},
Mj:function Mj(d,e,f){this.e=d
this.f=e
this.r=f},
af6:function af6(){this.d=null},
kW:function kW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.y=_.x=_.w=_.r=_.f=_.e=$},
aLG(){var w=x.fk
return new A.af7(new A.BE(B.E(x.p,x.z)),B.at(4,null,!1,x.bC),B.a([],x.f8),B.a([],w),B.a([],w),B.a([],x.eB))},
af7:function af7(d,e,f,g,h,i){var _=this
_.b=_.a=$
_.e=_.d=_.c=null
_.r=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i},
af8:function af8(d,e){this.a=d
this.b=e},
yN:function yN(d){this.a=d
this.b=0},
Rd:function Rd(d,e){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=d
_.z=e},
afa:function afa(){this.r=this.f=$},
Re:function Re(d,e,f,g,h,i,j,k){var _=this
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
Rc:function Rc(){},
aLH(d){var w,v,u,t=null,s=new Uint8Array(64),r=new Uint8Array(64),q=new Float32Array(64),p=new Float32Array(64),o=B.at(65535,t,!1,x.eg),n=x.I,m=B.at(65535,t,!1,n),l=B.at(64,t,!1,n)
n=B.at(64,t,!1,n)
w=new Float32Array(64)
v=new Float32Array(64)
u=new Float32Array(64)
s=new A.af9(s,r,q,p,o,m,l,n,w,v,u,new Int32Array(2048))
s.e=s.zq(C.rc,C.il)
s.f=s.zq(C.re,C.il)
s.r=s.zq(C.rd,C.rj)
s.w=s.zq(C.rf,C.qI)
s.alC()
s.alG()
s.a9a(d)
return s},
af9:function af9(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
E3:function E3(){},
R0:function R0(d){var _=this
_.w=_.c=_.b=null
_.y=d},
aiv:function aiv(){},
R1:function R1(d,e,f){var _=this
_.Q=_.z=_.y=_.x=_.w=_.r=_.e=_.d=null
_.at=""
_.ay=null
_.ch=d
_.cy=e
_.db=f
_.b=_.a=0},
V0:function V0(){var _=this
_.a=null
_.c=_.b=0
_.d=$
_.e=0},
aiu:function aiu(){},
Vi:function Vi(){this.b=this.a=null},
Vj:function Vj(){this.b=this.a=null},
lc:function lc(){},
Vl:function Vl(){this.b=this.a=null},
Vm:function Vm(){this.b=this.a=null},
Vp:function Vp(){this.b=this.a=null},
Vq:function Vq(){this.b=this.a=null},
Eb:function Eb(d){this.b=d},
Vo:function Vo(){this.c=null},
aiX:function aiX(){var _=this
_.w=_.r=_.f=_.e=$},
wB:function wB(d){this.a=d
this.c=$},
aMY(d){var w=new A.aiZ(B.E(x.p,x.fh))
w.ae9(d)
return w},
aD6(d,e,f,g){var w=d/255,v=e/255,u=f/255,t=g/255,s=v*(1-u),r=w*(1-t)
return D.e.a0(D.e.u((2*w<u?2*v*w+s+r:t*u-2*(u-w)*(t-v)+s+r)*255,0,255))},
aj_(d,e){if(e===0)return 0
return D.e.a0(D.b.u(D.e.a0(255*(1-(1-d/255)/(e/255))),0,255))},
aY3(d,e){return D.e.a0(D.b.u(d+e-255,0,255))},
aj0(d,e){if(e===255)return 255
return D.e.a0(D.e.u(d/255/(1-e/255)*255,0,255))},
aD7(d,e){var w=d/255,v=e/255,u=1-v
return D.e.be(255*(u*v*w+v*(1-u*(1-w))))},
aD4(d,e){var w=e/255,v=d/255
if(v<0.5)return D.e.be(510*w*v)
else return D.e.be(255*(1-2*(1-w)*(1-v)))},
aD8(d,e){if(e<128)return A.aj_(d,2*e)
else return A.aj0(d,2*(e-128))},
aD5(d,e){var w
if(e<128)return A.aY3(d,2*e)
else{w=2*(e-128)
return w+d>255?255:d+w}},
aMZ(c6,c7,c8,c9,d0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2="data",c3=A.jU(c8,c9,C.br),c4=c3.mL(),c5=B.E(x.p,x.e)
for(w=d0.length,v=0;u=d0.length,v<u;d0.length===w||(0,B.F)(d0),++v){t=d0[v]
c5.l(0,t.a,t)}if(c7===8)s=1
else s=c7===16?2:-1
if(s===-1)throw B.c(A.ah("PSD: unsupported bit depth: "+B.e(c7)))
r=c5.h(0,0)
q=c5.h(0,1)
p=c5.h(0,2)
o=c5.h(0,-1)
for(w=u>=5,n=s===1,m=u===4,l=u>=2,u=u>=4,k=0,j=0,i=0;k<c9;++k)for(h=0;h<c8;++h,i+=s)switch(c6){case 3:g=j+1
f=B.b(r.c,c2)
c4[j]=n?f[i]:(f[i]<<8|f[i+1])>>>8
e=g+1
f=B.b(q.c,c2)
c4[g]=n?f[i]:(f[i]<<8|f[i+1])>>>8
d=e+1
f=B.b(p.c,c2)
c4[e]=n?f[i]:(f[i]<<8|f[i+1])>>>8
e=d+1
if(u){f=B.b(o.c,c2)
f=n?f[i]:(f[i]<<8|f[i+1])>>>8}else f=255
c4[d]=f
a0=c4[j]
a1=c4[g]
f=j+2
a2=c4[f]
a3=c4[j+3]
if(a3!==0){c4[j]=D.b.dv((a0+a3-255)*255,a3)
c4[g]=D.b.dv((a1+a3-255)*255,a3)
c4[f]=D.b.dv((a2+a3-255)*255,a3)}j=e
break
case 9:f=B.b(r.c,c2)
f=n?f[i]:(f[i]<<8|f[i+1])>>>8
a4=B.b(q.c,c2)
a4=n?a4[i]:(a4[i]<<8|a4[i+1])>>>8
a5=B.b(p.c,c2)
a5=n?a5[i]:(a5[i]<<8|a5[i+1])>>>8
if(u){a6=B.b(o.c,c2)
a7=n?a6[i]:(a6[i]<<8|a6[i+1])>>>8}else a7=255
a8=((f*100>>>8)+16)/116
a9=(a4-128)/500+a8
b0=a8-(a5-128)/200
b1=Math.pow(a8,3)
a8=b1>0.008856?b1:(a8-0.13793103448275862)/7.787
b2=Math.pow(a9,3)
a9=b2>0.008856?b2:(a9-0.13793103448275862)/7.787
b3=Math.pow(b0,3)
b0=b3>0.008856?b3:(b0-0.13793103448275862)/7.787
a9=a9*95.047/100
a8=a8*100/100
b0=b0*108.883/100
b4=a9*3.2406+a8*-1.5372+b0*-0.4986
b5=a9*-0.9689+a8*1.8758+b0*0.0415
b6=a9*0.0557+a8*-0.204+b0*1.057
b4=b4>0.0031308?1.055*Math.pow(b4,0.4166666666666667)-0.055:12.92*b4
b5=b5>0.0031308?1.055*Math.pow(b5,0.4166666666666667)-0.055:12.92*b5
b6=b6>0.0031308?1.055*Math.pow(b6,0.4166666666666667)-0.055:12.92*b6
b7=[D.e.a0(D.e.u(b4*255,0,255)),D.e.a0(D.e.u(b5*255,0,255)),D.e.a0(D.e.u(b6*255,0,255))]
g=j+1
c4[j]=b7[0]
j=g+1
c4[g]=b7[1]
g=j+1
c4[j]=b7[2]
j=g+1
c4[g]=a7
break
case 1:f=B.b(r.c,c2)
b8=n?f[i]:(f[i]<<8|f[i+1])>>>8
if(l){f=B.b(o.c,c2)
a7=n?f[i]:(f[i]<<8|f[i+1])>>>8}else a7=255
g=j+1
c4[j]=b8
j=g+1
c4[g]=b8
g=j+1
c4[j]=b8
j=g+1
c4[g]=a7
break
case 4:f=B.b(r.c,c2)
b9=n?f[i]:(f[i]<<8|f[i+1])>>>8
f=B.b(q.c,c2)
c0=n?f[i]:(f[i]<<8|f[i+1])>>>8
f=B.b(p.c,c2)
a8=n?f[i]:(f[i]<<8|f[i+1])>>>8
f=B.b(c5.h(0,m?-1:3).c,c2)
c1=n?f[i]:(f[i]<<8|f[i+1])>>>8
if(w){f=B.b(o.c,c2)
a7=n?f[i]:(f[i]<<8|f[i+1])>>>8}else a7=255
f=1-(255-c1)/255
b7=[D.e.be(255*(1-(255-b9)/255)*f),D.e.be(255*(1-(255-c0)/255)*f),D.e.be(255*(1-(255-a8)/255)*f)]
g=j+1
c4[j]=b7[0]
j=g+1
c4[g]=b7[1]
g=j+1
c4[j]=b7[2]
j=g+1
c4[g]=a7
break
default:throw B.c(A.ah("Unhandled color mode: "+B.e(c6)))}return c3},
aiZ:function aiZ(d){var _=this
_.e=_.d=null
_.f=$
_.w=_.r=null
_.y=_.x=$
_.z=null
_.Q=d
_.ch=_.ay=_.ax=_.at=$
_.b=_.a=0},
Vk:function Vk(d,e){this.b=d
this.c=e},
Vn:function Vn(d,e,f){var _=this
_.b=_.a=null
_.f=_.e=_.d=_.c=$
_.r=null
_.y=_.w=$
_.Q=null
_.as=$
_.ay=d
_.ch=e
_.cx=$
_.cy=f},
aY4(d,e){var w,v
switch(d){case"lsct":w=new A.Vo()
v=e.c-e.d
e.K()
if(v>=12){if(e.dJ(4)!=="8BIM")B.M(A.ah("Invalid key in layer additional data"))
w.c=e.dJ(4)}if(v>=16)e.K()
return w
default:return new A.Eb(e)}},
wC:function wC(){},
aiY:function aiY(){this.a=null},
apI:function apI(){var _=this
_.e=_.d=null
_.b=_.a=0},
apH:function apH(){this.a=null
this.b=$},
apO:function apO(d){this.a=d
this.c=this.b=0},
Y6:function Y6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=null
_.e=g},
aDy(d,e,f){var w=new A.apQ(e,f,d),v=x.I
w.e=B.at(e,null,!1,v)
w.f=B.at(e,null,!1,v)
return w},
apQ:function apQ(d,e,f){var _=this
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
Y7:function Y7(d){var _=this
_.a=d
_.c=_.b=0
_.d=null
_.w=_.r=_.f=_.e=1
_.x=-1
_.y=!1
_.z=1
_.as=_.Q=$
_.ay=_.ax=0
_.CW=_.ch=null
_.cy=_.cx=$
_.dx=1
_.fr=_.dy=0
_.fy=null
_.k1=_.id=_.go=$
_.k3=_.k2=null},
apR:function apR(d){var _=this
_.e=null
_.r=d
_.b=_.a=0},
aLZ(){return new A.agh(new Uint8Array(4096))},
agh:function agh(d){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=d
_.z=_.y=$
_.Q=null
_.as=$},
apP:function apP(){this.a=null
this.b=$},
aDI(d,e){var w=new Int32Array(4),v=new Int32Array(4),u=new Int8Array(4),t=new Int8Array(4),s=B.at(8,null,!1,x.eW),r=B.at(4,null,!1,x.dP)
return new A.aqw(d,e,new A.aqC(),new A.aqG(),new A.aqy(w,v),new A.aqI(u,t),s,r,new Uint8Array(4))},
aOf(d,e,f){if(f===0)if(d===0)return e===0?6:5
else return e===0?4:0
return f},
aqw:function aqw(d,e,f,g,h,i,j,k,l){var _=this
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
_.aF=$
_.al=null
_.bL=_.aN=$
_.dP=null
_.c_=$},
aqJ:function aqJ(){},
aOc(d){var w=new A.Gh(d)
w.b=254
w.c=0
w.d=-8
return w},
Gh:function Gh(d){var _=this
_.a=d
_.d=_.c=_.b=$
_.e=!1},
bR(d,e,f){return D.b.eC(D.b.B(d+2*e+f+2,2),32)},
aZP(d){var w,v,u,t,s=d.a,r=d.d,q=s[r+-33],p=s[r+-32],o=s[r+-31]
q=A.bR(q,p,o)
w=s[r+-30]
p=A.bR(p,o,w)
v=s[r+-29]
u=B.a([q,p,A.bR(o,w,v),A.bR(w,v,s[r+-28])],x.t)
for(t=0;t<4;++t)d.nV(t*32,4,u)},
aZG(d){var w,v=d.a,u=d.d,t=v[u+-33],s=v[u+-1],r=v[u+31],q=v[u+63]
u=v[u+95]
w=A.aB(d,null,0)
w.yc()[0]=16843009*A.bR(t,s,r)
w.d+=32
w.yc()[0]=16843009*A.bR(s,r,q)
w.d+=32
w.yc()[0]=16843009*A.bR(r,q,u)
w.d+=32
w.yc()[0]=16843009*A.bR(q,u,u)},
aZz(d){var w,v,u,t
for(w=d.a,v=d.d,u=4,t=0;t<4;++t)u+=w[v+(t-32)]+w[v+(-1+t*32)]
u=D.b.B(u,3)
for(t=0;t<4;++t){w=d.a
v=d.d+t*32
J.kD(w,v,v+4,u)}},
aDJ(d,e){var w,v,u,t,s=d.a,r=d.d,q=255-s[r+-33]
for(w=0,v=0;v<e;++v){u=q+s[r+(w-1)]
for(t=0;t<e;++t)s[r+(w+t)]=$.zH()[u+s[r+(-32+t)]]
w+=32}},
aZM(d){A.aDJ(d,4)},
aZN(d){A.aDJ(d,8)},
aZL(d){A.aDJ(d,16)},
aZK(d){var w=d.a,v=d.d,u=w[v+-1],t=w[v+31],s=w[v+63],r=w[v+95],q=w[v+-33],p=w[v+-32],o=w[v+-31],n=w[v+-30]
v=w[v+-29]
d.l(0,96,A.bR(t,s,r))
s=A.bR(u,t,s)
d.l(0,97,s)
d.l(0,64,s)
t=A.bR(q,u,t)
d.l(0,98,t)
d.l(0,65,t)
d.l(0,32,t)
u=A.bR(p,q,u)
d.l(0,99,u)
d.l(0,66,u)
d.l(0,33,u)
d.l(0,0,u)
q=A.bR(o,p,q)
d.l(0,67,q)
d.l(0,34,q)
d.l(0,1,q)
p=A.bR(n,o,p)
d.l(0,35,p)
d.l(0,2,p)
d.l(0,3,A.bR(v,n,o))},
aZJ(d){var w=d.a,v=d.d,u=w[v+-32],t=w[v+-31],s=w[v+-30],r=w[v+-29],q=w[v+-28],p=w[v+-27],o=w[v+-26]
v=w[v+-25]
d.l(0,0,A.bR(u,t,s))
t=A.bR(t,s,r)
d.l(0,32,t)
d.l(0,1,t)
s=A.bR(s,r,q)
d.l(0,64,s)
d.l(0,33,s)
d.l(0,2,s)
r=A.bR(r,q,p)
d.l(0,96,r)
d.l(0,65,r)
d.l(0,34,r)
d.l(0,3,r)
q=A.bR(q,p,o)
d.l(0,97,q)
d.l(0,66,q)
d.l(0,35,q)
p=A.bR(p,o,v)
d.l(0,98,p)
d.l(0,67,p)
d.l(0,99,A.bR(o,v,v))},
aZS(d){var w=d.a,v=d.d,u=w[v+-1],t=w[v+31],s=w[v+63],r=w[v+-33],q=w[v+-32],p=w[v+-31],o=w[v+-30]
v=w[v+-29]
w=D.b.eC(D.b.B(r+q+1,1),32)
d.l(0,65,w)
d.l(0,0,w)
w=D.b.eC(D.b.B(q+p+1,1),32)
d.l(0,66,w)
d.l(0,1,w)
w=D.b.eC(D.b.B(p+o+1,1),32)
d.l(0,67,w)
d.l(0,2,w)
d.l(0,3,D.b.eC(D.b.B(o+v+1,1),32))
d.l(0,96,A.bR(s,t,u))
d.l(0,64,A.bR(t,u,r))
u=A.bR(u,r,q)
d.l(0,97,u)
d.l(0,32,u)
r=A.bR(r,q,p)
d.l(0,98,r)
d.l(0,33,r)
q=A.bR(q,p,o)
d.l(0,99,q)
d.l(0,34,q)
d.l(0,35,A.bR(p,o,v))},
aZR(d){var w=d.a,v=d.d,u=w[v+-32],t=w[v+-31],s=w[v+-30],r=w[v+-29],q=w[v+-28],p=w[v+-27],o=w[v+-26]
v=w[v+-25]
d.l(0,0,D.b.eC(D.b.B(u+t+1,1),32))
w=D.b.eC(D.b.B(t+s+1,1),32)
d.l(0,64,w)
d.l(0,1,w)
w=D.b.eC(D.b.B(s+r+1,1),32)
d.l(0,65,w)
d.l(0,2,w)
w=D.b.eC(D.b.B(r+q+1,1),32)
d.l(0,66,w)
d.l(0,3,w)
d.l(0,32,A.bR(u,t,s))
t=A.bR(t,s,r)
d.l(0,96,t)
d.l(0,33,t)
s=A.bR(s,r,q)
d.l(0,97,s)
d.l(0,34,s)
r=A.bR(r,q,p)
d.l(0,98,r)
d.l(0,35,r)
d.l(0,67,A.bR(q,p,o))
d.l(0,99,A.bR(p,o,v))},
aZI(d){var w=d.a,v=d.d,u=w[v+-1],t=w[v+31],s=w[v+63]
v=w[v+95]
d.l(0,0,D.b.eC(D.b.B(u+t+1,1),32))
w=D.b.eC(D.b.B(t+s+1,1),32)
d.l(0,32,w)
d.l(0,2,w)
w=D.b.eC(D.b.B(s+v+1,1),32)
d.l(0,64,w)
d.l(0,34,w)
d.l(0,1,A.bR(u,t,s))
t=A.bR(t,s,v)
d.l(0,33,t)
d.l(0,3,t)
s=A.bR(s,v,v)
d.l(0,65,s)
d.l(0,35,s)
d.l(0,99,v)
d.l(0,98,v)
d.l(0,97,v)
d.l(0,96,v)
d.l(0,66,v)
d.l(0,67,v)},
aZE(d){var w=d.a,v=d.d,u=w[v+-1],t=w[v+31],s=w[v+63],r=w[v+95],q=w[v+-33],p=w[v+-32],o=w[v+-31]
v=w[v+-30]
w=D.b.eC(D.b.B(u+q+1,1),32)
d.l(0,34,w)
d.l(0,0,w)
w=D.b.eC(D.b.B(t+u+1,1),32)
d.l(0,66,w)
d.l(0,32,w)
w=D.b.eC(D.b.B(s+t+1,1),32)
d.l(0,98,w)
d.l(0,64,w)
d.l(0,96,D.b.eC(D.b.B(r+s+1,1),32))
d.l(0,3,A.bR(p,o,v))
d.l(0,2,A.bR(q,p,o))
p=A.bR(u,q,p)
d.l(0,35,p)
d.l(0,1,p)
q=A.bR(t,u,q)
d.l(0,67,q)
d.l(0,33,q)
u=A.bR(s,t,u)
d.l(0,99,u)
d.l(0,65,u)
d.l(0,97,A.bR(r,s,t))},
aZO(d){var w
for(w=0;w<16;++w)d.jr(w*32,16,d,-32)},
aZF(d){var w,v,u,t,s
for(w=0,v=16;v>0;--v){u=d.a
t=d.d
s=t+w
J.kD(u,s,s+16,u[t+(w-1)])
w+=32}},
aqz(d,e){var w,v,u
for(w=0;w<16;++w){v=e.a
u=e.d+w*32
J.kD(v,u,u+16,d)}},
aZv(d){var w,v,u,t
for(w=d.a,v=d.d,u=16,t=0;t<16;++t)u+=w[v+(-1+t*32)]+w[v+(t-32)]
A.aqz(D.b.B(u,5),d)},
aZx(d){var w,v,u,t
for(w=d.a,v=d.d,u=8,t=0;t<16;++t)u+=w[v+(-1+t*32)]
A.aqz(D.b.B(u,4),d)},
aZw(d){var w,v,u,t
for(w=d.a,v=d.d,u=8,t=0;t<16;++t)u+=w[v+(t-32)]
A.aqz(D.b.B(u,4),d)},
aZy(d){A.aqz(128,d)},
aZQ(d){var w
for(w=0;w<8;++w)d.jr(w*32,8,d,-32)},
aZH(d){var w,v,u,t,s
for(w=0,v=0;v<8;++v){u=d.a
t=d.d
s=t+w
J.kD(u,s,s+8,u[t+(w-1)])
w+=32}},
aqA(d,e){var w,v,u
for(w=0;w<8;++w){v=e.a
u=e.d+w*32
J.kD(v,u,u+8,d)}},
aZA(d){var w,v,u,t
for(w=d.a,v=d.d,u=8,t=0;t<8;++t)u+=w[v+(t-32)]+w[v+(-1+t*32)]
A.aqA(D.b.B(u,4),d)},
aZB(d){var w,v,u,t
for(w=d.a,v=d.d,u=4,t=0;t<8;++t)u+=w[v+(t-32)]
A.aqA(D.b.B(u,3),d)},
aZC(d){var w,v,u,t
for(w=d.a,v=d.d,u=4,t=0;t<8;++t)u+=w[v+(-1+t*32)]
A.aqA(D.b.B(u,3),d)},
aZD(d){A.aqA(128,d)},
pp(d,e,f,g,h){var w=e+f+g*32,v=d.a[d.d+w]+D.b.B(h,3)
if(!((v&-256)>>>0===0))v=v<0?0:255
d.l(0,w,v)},
aqB(d,e,f,g,h){A.pp(d,0,0,e,f+g)
A.pp(d,0,1,e,f+h)
A.pp(d,0,2,e,f-h)
A.pp(d,0,3,e,f-g)},
aZT(){var w,v,u
if(!$.aOd){for(w=-255;w<=255;++w){v=$.a5M()
u=255+w
v[u]=w<0?-w:w
$.aAm()[u]=D.b.B(v[u],1)}for(w=-1020;w<=1020;++w){v=$.aAn()
if(w<-128)u=-128
else u=w>127?127:w
v[1020+w]=u}for(w=-112;w<=112;++w){v=$.a5N()
if(w<-16)u=-16
else u=w>15?15:w
v[112+w]=u}for(w=-255;w<=510;++w){v=$.zH()
if(w<0)u=0
else u=w>255?255:w
v[255+w]=u}$.aOd=!0}},
aqx:function aqx(){},
aZu(){var w,v=J.ij(3,x.D)
for(w=0;w<3;++w)v[w]=new Uint8Array(11)
return new A.Gg(v)},
b_7(){var w,v,u,t,s=new Uint8Array(3),r=J.ij(4,x.c7)
for(w=x.dd,v=0;v<4;++v){u=J.ij(8,w)
for(t=0;t<8;++t)u[t]=A.aZu()
r[v]=u}D.B.hT(s,0,3,255)
return new A.aqH(s,r)},
aqC:function aqC(){this.d=$},
aqG:function aqG(){this.b=null},
aqI:function aqI(d,e){var _=this
_.b=_.a=!1
_.c=!0
_.d=d
_.e=e},
Gg:function Gg(d){this.a=d},
aqH:function aqH(d,e){this.a=d
this.b=e},
aqy:function aqy(d,e){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=d
_.f=e},
td:function td(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
YA:function YA(){this.b=this.a=0},
YC:function YC(d,e,f){this.a=d
this.b=e
this.c=f},
YB:function YB(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=null
_.f=$},
YD:function YD(d,e,f){this.a=d
this.b=e
this.c=f},
aDK(d,e){var w="_buffer8",v=B.a([],x.F),u=B.a([],x.G),t=new Uint32Array(2),s=new A.Yy(d,t)
t=s.d=B.bP(t.buffer,0,null)
B.b(t,w)[0]=d.aP()
B.b(t,w)[1]=d.aP()
B.b(t,w)[2]=d.aP()
B.b(t,w)[3]=d.aP()
B.b(t,w)[4]=d.aP()
B.b(t,w)[5]=d.aP()
B.b(t,w)[6]=d.aP()
B.b(t,w)[7]=d.aP()
return new A.Gi(s,e,v,u)},
tf(d,e){return D.b.B(d+D.b.bS(1,e)-1,e)},
Gi:function Gi(d,e,f,g){var _=this
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
R2:function R2(d,e,f,g){var _=this
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
Yy:function Yy(d,e){var _=this
_.a=0
_.b=d
_.c=e
_.d=$},
aqD:function aqD(d,e){this.a=d
this.b=e},
aqE(d,e,f){var w=d[e]
d[e]=(((w&4278255360)>>>0)+((f&4278255360)>>>0)&4278255360|(w&16711935)+(f&16711935)&16711935)>>>0},
n7(d,e){return((d^e)>>>1&2139062143)+((d&e)>>>0)},
te(d){if(d<0)return 0
if(d>255)return 255
return d},
aqF(d,e,f){return Math.abs(e-f)-Math.abs(d-f)},
aZU(d,e,f){return 4278190080},
aZV(d,e,f){return e},
b__(d,e,f){return d[f]},
b_0(d,e,f){return d[f+1]},
b_1(d,e,f){return d[f-1]},
b_2(d,e,f){var w=d[f]
return A.n7(A.n7(e,d[f+1]),w)},
b_3(d,e,f){return A.n7(e,d[f-1])},
b_4(d,e,f){return A.n7(e,d[f])},
b_5(d,e,f){return A.n7(d[f-1],d[f])},
b_6(d,e,f){return A.n7(d[f],d[f+1])},
aZW(d,e,f){var w=d[f-1],v=d[f],u=d[f+1]
return A.n7(A.n7(e,w),A.n7(v,u))},
aZX(d,e,f){var w=d[f],v=d[f-1]
return A.aqF(w>>>24,e>>>24,v>>>24)+A.aqF(w>>>16&255,e>>>16&255,v>>>16&255)+A.aqF(w>>>8&255,e>>>8&255,v>>>8&255)+A.aqF(w&255,e&255,v&255)<=0?w:e},
aZY(d,e,f){var w=d[f],v=d[f-1]
return(A.te((e>>>24)+(w>>>24)-(v>>>24))<<24|A.te((e>>>16&255)+(w>>>16&255)-(v>>>16&255))<<16|A.te((e>>>8&255)+(w>>>8&255)-(v>>>8&255))<<8|A.te((e&255)+(w&255)-(v&255)))>>>0},
aZZ(d,e,f){var w,v,u,t=d[f],s=d[f-1],r=A.n7(e,t)
t=r>>>24
w=r>>>16&255
v=r>>>8&255
u=r>>>0&255
return(A.te(t+D.b.bC(t-(s>>>24),2))<<24|A.te(w+D.b.bC(w-(s>>>16&255),2))<<16|A.te(v+D.b.bC(v-(s>>>8&255),2))<<8|A.te(u+D.b.bC(u-(s&255),2)))>>>0},
Yz:function Yz(){var _=this
_.c=_.b=_.a=0
_.d=null
_.e=0},
aqR:function aqR(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
Gm:function Gm(){},
R3:function R3(d,e){var _=this
_.d=d
_.e=e
_.r=1
_.x=_.w=$},
aLh(){var w=new Uint8Array(128),v=new Int16Array(128)
w=new A.QC(w,v,new Int16Array(128))
w.IW(0)
return w},
aWl(){var w,v=J.ij(5,x.bs)
for(w=0;w<5;++w)v[w]=A.aLh()
return new A.C0(v)},
QC:function QC(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$
_.f=_.e=0},
C0:function C0(d){this.a=d},
YN:function YN(d){var _=this
_.e=_.d=!1
_.f=0
_.z=d
_.as=_.Q=0
_.at=null
_.b=_.a=_.ch=_.ay=0},
R4:function R4(d){var _=this
_.e=_.d=!1
_.f=0
_.z=d
_.as=_.Q=0
_.at=null
_.b=_.a=_.ch=_.ay=0},
aqS:function aqS(){this.b=this.a=null},
Qu:function Qu(d){var _=this
_.a=d
_.e=_.d=_.c=_.b=null},
aLc(d,e,f){switch(e){case 1:if(f===8)return new Int8Array(d)
else if(f===16)return new Int16Array(d)
else if(f===32)return new Int32Array(d)
break
case 0:if(f===8)return new Uint8Array(d)
else if(f===16)return new Uint16Array(d)
else if(f===32)return new Uint32Array(d)
break
case 3:if(f===16)return new Uint16Array(d)
else if(f===32)return new Float32Array(d)
else if(f===64)return new Float64Array(d)
break}throw B.c(B.ch(null))},
adj(d,e,f,g,h){return new A.C4(d,e,f,g,h,A.aLc(e*f,g,h))},
C4:function C4(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
b41(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.azf(new A.azg()),f=A.jU(d.gby(d),d.gbW(d),C.br),e=f.mL()
if(!(d.b!=null||d.c!=null||d.d!=null))throw B.c(A.ah("Only RGB[A] images are currently supported."))
w=Math.pow(2,D.e.u(a0+2.47393,-20,20))
v=d.a
u=0
t=0
while(!0){if(v.a===0)s=0
else{s=v.gbi(v)
s=s.b.$1(J.kE(s.a)).c}if(!(u<s))break
r=0
while(!0){if(v.a===0)s=0
else{s=v.gbi(v)
s=s.b.$1(J.kE(s.a)).b}if(!(r<s))break
s=d.b
if(s!=null)if(s.d===3){s=s.yA(r,u)
q=s}else{p=s.b
p=B.cU(s.f[u*p+r])
q=p}else q=0
if(v.a===1)o=q
else{s=d.c
if(s!=null){if(s.d===3)s=s.yA(r,u)
else{p=s.b
p=B.cU(s.f[u*p+r])
s=p}o=s}else o=0}if(v.a===1)n=q
else{s=d.d
if(s!=null){if(s.d===3)s=s.yA(r,u)
else{p=s.b
p=B.cU(s.f[u*p+r])
s=p}n=s}else n=0}if(q==1/0||q==-1/0||isNaN(q))q=0
if(o==1/0||o==-1/0||isNaN(o))o=0
if(n==1/0||n==-1/0||isNaN(n))n=0
m=g.$2(q,w)
l=g.$2(o,w)
k=g.$2(n,w)
j=Math.max(m,Math.max(l,k))
if(j>255){m=255*(m/j)
l=255*(l/j)
k=255*(k/j)}i=t+1
e[t]=D.e.a0(D.e.u(m,0,255))
t=i+1
e[i]=D.e.a0(D.e.u(l,0,255))
i=t+1
e[t]=D.e.a0(D.e.u(k,0,255))
s=d.e
if(s!=null){h=s.yA(r,u)
if(h==1/0||h==-1/0||isNaN(h))h=1
t=i+1
e[i]=D.e.a0(D.e.u(h*255,0,255))}else{t=i+1
e[i]=255}++r}++u}return f},
azg:function azg(){},
azf:function azf(d){this.a=d},
jU(d,e,f){return new A.QK(d,e,f,new Uint32Array(d*e),A.aKD(null))},
aWu(d,e,f,g){var w,v,u,t,s,r,q,p
if(g===C.hr){w=D.bv.eV(B.we(f.buffer,0,null),0)
return w}v=new Uint32Array(d*e)
u=B.bP(v.buffer,0,null)
switch(g.a){case 2:for(t=f.length,s=0;s<t;++s)u[s]=f[s]
break
case 3:for(t=f.length,s=0;s<t;s+=4){w=s+2
u[s]=f[w]
r=s+1
u[r]=f[r]
u[w]=f[s]
w=s+3
u[w]=f[w]}break
case 1:for(t=f.length,s=0;s<t;s+=4){w=s+3
u[s]=f[w]
r=s+1
q=s+2
u[r]=f[q]
u[q]=f[r]
u[w]=f[s]}break
case 0:for(t=f.length,s=0;s<t;s+=4){w=s+1
u[s]=f[w]
r=s+2
u[w]=f[r]
w=s+3
u[r]=f[w]
u[w]=f[s]}break
case 5:for(t=f.length,s=0,p=0;p<t;s+=4,p+=3){u[s]=f[p+2]
u[s+1]=f[p+1]
u[s+2]=f[p]
u[s+3]=255}break
case 4:for(t=f.length,s=0,p=0;p<t;s+=4,p+=3){u[s]=f[p]
u[s+1]=f[p+1]
u[s+2]=f[p+2]
u[s+3]=255}break
case 6:for(t=f.length,s=0,p=0;p<t;s+=4,++p){u[s]=f[p]
u[s+1]=f[p]
u[s+2]=f[p]
u[s+3]=255}break}return v},
Q2:function Q2(d,e){this.a=d
this.b=e},
As:function As(d,e){this.a=d
this.b=e},
QK:function QK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.x=g
_.y=h
_.Q=null},
ah(d){return new A.QM(d)},
QM:function QM(d){this.a=d},
be(d,e,f,g){return new A.hl(d,g,f==null?d.length:g+f,g,e)},
aB(d,e,f){var w=d.a,v=d.d+f,u=d.b,t=e==null?d.c:v+e
return new A.hl(w,u,t,v,d.e)},
hl:function hl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Um(d,e){return new A.ahL(d,new Uint8Array(e))},
ahL:function ahL(d,e){this.a=0
this.b=d
this.c=e},
aMi(d){return new Int8Array(d)},
aZl(d){throw B.c(B.R("Uint64List not supported on the web."))},
aVZ(d){return B.aCP(d,0,null)},
aW_(d){return d.aC8(0,0,null)},
u1(d,e){var w,v,u=J.a7(d),t=u.gm(d)
e^=4294967295
for(w=0;t>=8;){v=w+1
e=C.ci[(e^u.h(d,w))&255]^e>>>8
w=v+1
e=C.ci[(e^u.h(d,v))&255]^e>>>8
v=w+1
e=C.ci[(e^u.h(d,w))&255]^e>>>8
w=v+1
e=C.ci[(e^u.h(d,v))&255]^e>>>8
v=w+1
e=C.ci[(e^u.h(d,w))&255]^e>>>8
w=v+1
e=C.ci[(e^u.h(d,v))&255]^e>>>8
v=w+1
e=C.ci[(e^u.h(d,w))&255]^e>>>8
w=v+1
e=C.ci[(e^u.h(d,v))&255]^e>>>8
t-=8}if(t>0)do{v=w+1
e=C.ci[(e^u.h(d,w))&255]^e>>>8
if(--t,t>0){w=v
continue}else break}while(!0)
return(e^4294967295)>>>0},
az2(d,e,f){var w,v,u
for(w=e,v=0;w<f;++w){u=C.lG.h(0,d[w])
if(u==null)throw B.c(A.aBF("Invalid BlurHash encoding: invalid character "+B.e(u)))
v=v*83+u}return v},
a5q(d,e){var w,v,u,t,s=C.lG.gbP(C.lG)
s=B.al(s,!0,B.q(s).i("p.E"))
for(w=1,v="";w<=e;++w){u=D.e.a0(D.e.cd(d/Math.pow(83,e-w),83))
t=u>=0&&u<s.length
v+=B.e(t?s[u]:null)}return v.charCodeAt(0)==0?v:v},
b5n(d){if(x.D.b(d))return d
if(x.Q.b(d))return B.bP(d.buffer,0,null)
return new Uint8Array(B.eS(d))},
b5i(d){return d},
ny(d,e,f,g){return(D.e.a0(D.b.u(g,0,255))<<24|D.e.a0(D.b.u(f,0,255))<<16|D.e.a0(D.b.u(e,0,255))<<8|D.e.a0(D.b.u(d,0,255)))>>>0},
aVY(a3,a4,a5,a6,a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a9<16384,a2=a5>a7?a7:a5
for(w=1;w<=a2;)w=w<<1>>>0
w=w>>>1
v=w>>>1
u=B.a([0,0],x.t)
for(t=w,w=v;w>=1;t=w,w=v){s=a4+a8*(a7-t)
r=a8*w
q=a8*t
p=a6*w
o=a6*t
for(n=(a5&w)>>>0!==0,m=a6*(a5-t),l=a4;l<=s;l+=q){k=l+m
for(j=l;j<=k;j+=o){i=j+p
h=j+r
g=h+p
if(a1){A.BH(a3[j],a3[h],u)
f=u[0]
e=u[1]
A.BH(a3[i],a3[g],u)
d=u[0]
a0=u[1]
A.BH(f,d,u)
a3[j]=u[0]
a3[i]=u[1]
A.BH(e,a0,u)
a3[h]=u[0]
a3[g]=u[1]}else{A.BI(a3[j],a3[h],u)
f=u[0]
e=u[1]
A.BI(a3[i],a3[g],u)
d=u[0]
a0=u[1]
A.BI(f,d,u)
a3[j]=u[0]
a3[i]=u[1]
A.BI(e,a0,u)
a3[h]=u[0]
a3[g]=u[1]}}if(n){h=j+r
if(a1){A.BH(a3[j],a3[h],u)
f=u[0]
a3[h]=u[1]}else{A.BI(a3[j],a3[h],u)
f=u[0]
a3[h]=u[1]}a3[j]=f}}if((a7&w)>>>0!==0){k=l+m
for(j=l;j<=k;j+=o){i=j+p
if(a1){A.BH(a3[j],a3[i],u)
f=u[0]
a3[i]=u[1]}else{A.BI(a3[j],a3[i],u)
f=u[0]
a3[i]=u[1]}a3[j]=f}}v=w>>>1}},
BH(d,e,f){var w,v,u,t,s=$.hB()
s[0]=d
w=$.i2()
v=w[0]
s[0]=e
u=w[0]
t=v+(u&1)+D.b.B(u,1)
f[0]=t
f[1]=t-u},
BI(d,e,f){var w=d-D.b.B(e,1)&65535
f[1]=w
f[0]=e+w-32768&65535},
b3L(d){var w,v,u,t,s,r,q,p=null
if(A.aLG().aBB(d))return new A.Rc()
w=new A.V0()
if(w.rT(d))return w
v=new A.acM()
v.b=A.be(d,!1,p,0)
v.a=new A.Qk(B.a([],x.b))
if(v.Wo())return v
u=new A.aqS()
if(u.rT(d))return u
t=new A.apP()
if(t.Yb(A.be(d,!1,p,0))!=null)return t
if(A.aMY(d).d===943870035)return new A.aiY()
if(A.aVX(d))return new A.abg()
if(A.a7l(A.be(d,!1,p,0)))return new A.Lb()
s=new A.apH()
if(s.rT(d))return s
r=new A.ae7()
q=A.be(d,!1,p,0)
r.a=q
q=A.aLi(q)
r.b=q
if(q!=null)return r
return p},
b3u(d){var w=A.b3L(d)
if(w==null)return null
return w.jh(d)},
b4W(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if($.aEg==null){w=$.aEg=new Uint8Array(768)
for(v=-256;v<0;++v)w[256+v]=0
for(v=0;v<256;++v)w[256+v]=v
for(v=256;v<512;++v)w[256+v]=255}for(v=0;v<64;++v)a6[v]=a4[v]*a3[v]
for(u=0,v=0;v<8;++v,u+=8){w=1+u
t=a6[w]
if(t===0&&a6[2+u]===0&&a6[3+u]===0&&a6[4+u]===0&&a6[5+u]===0&&a6[6+u]===0&&a6[7+u]===0){w=D.b.B(5793*a6[u]+512,10)
s=(w&2147483647)-((w&2147483648)>>>0)
a6[u]=s
a6[u+1]=s
a6[u+2]=s
a6[u+3]=s
a6[u+4]=s
a6[u+5]=s
a6[u+6]=s
a6[u+7]=s
continue}r=D.b.B(5793*a6[u]+128,8)
q=(r&2147483647)-((r&2147483648)>>>0)
r=4+u
p=D.b.B(5793*a6[r]+128,8)
o=(p&2147483647)-((p&2147483648)>>>0)
p=2+u
n=a6[p]
m=6+u
l=a6[m]
k=7+u
j=a6[k]
i=D.b.B(2896*(t-j)+128,8)
h=(i&2147483647)-((i&2147483648)>>>0)
j=D.b.B(2896*(t+j)+128,8)
g=(j&2147483647)-((j&2147483648)>>>0)
j=3+u
t=a6[j]<<4
f=(t&2147483647)-((t&2147483648)>>>0)
t=5+u
i=a6[t]<<4
e=(i&2147483647)-((i&2147483648)>>>0)
i=D.b.B(q-o+1,1)
s=(i&2147483647)-((i&2147483648)>>>0)
i=D.b.B(q+o+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.b.B(n*3784+l*1567+128,8)
i=(i&2147483647)-((i&2147483648)>>>0)
d=D.b.B(n*1567-l*3784+128,8)
n=(d&2147483647)-((d&2147483648)>>>0)
d=D.b.B(h-e+1,1)
d=(d&2147483647)-((d&2147483648)>>>0)
a0=D.b.B(h+e+1,1)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.b.B(g+f+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=D.b.B(g-f+1,1)
f=(a1&2147483647)-((a1&2147483648)>>>0)
a1=D.b.B(q-i+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
i=D.b.B(q+i+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.b.B(s-n+1,1)
i=(i&2147483647)-((i&2147483648)>>>0)
a2=D.b.B(s+n+1,1)
o=(a2&2147483647)-((a2&2147483648)>>>0)
a2=D.b.B(h*2276+a0*3406+2048,12)
s=(a2&2147483647)-((a2&2147483648)>>>0)
a0=D.b.B(h*3406-a0*2276+2048,12)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.b.B(f*799+d*4017+2048,12)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
d=D.b.B(f*4017-d*799+2048,12)
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
if(t===0&&a6[16+v]===0&&a6[24+v]===0&&a6[32+v]===0&&a6[40+v]===0&&a6[48+v]===0&&a6[56+v]===0){t=D.b.B(5793*a6[v]+8192,14)
s=(t&2147483647)-((t&2147483648)>>>0)
a6[v]=s
a6[w]=s
a6[16+v]=s
a6[24+v]=s
a6[32+v]=s
a6[40+v]=s
a6[48+v]=s
a6[56+v]=s
continue}r=D.b.B(5793*a6[v]+2048,12)
q=(r&2147483647)-((r&2147483648)>>>0)
r=32+v
p=D.b.B(5793*a6[r]+2048,12)
o=(p&2147483647)-((p&2147483648)>>>0)
p=16+v
n=a6[p]
m=48+v
l=a6[m]
k=56+v
j=a6[k]
i=D.b.B(2896*(t-j)+2048,12)
h=(i&2147483647)-((i&2147483648)>>>0)
j=D.b.B(2896*(t+j)+2048,12)
g=(j&2147483647)-((j&2147483648)>>>0)
j=24+v
f=a6[j]
t=40+v
e=a6[t]
i=D.b.B(q-o+1,1)
s=(i&2147483647)-((i&2147483648)>>>0)
i=D.b.B(q+o+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.b.B(n*3784+l*1567+2048,12)
i=(i&2147483647)-((i&2147483648)>>>0)
d=D.b.B(n*1567-l*3784+2048,12)
n=(d&2147483647)-((d&2147483648)>>>0)
d=D.b.B(h-e+1,1)
d=(d&2147483647)-((d&2147483648)>>>0)
a0=D.b.B(h+e+1,1)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.b.B(g+f+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=D.b.B(g-f+1,1)
f=(a1&2147483647)-((a1&2147483648)>>>0)
a1=D.b.B(q-i+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
i=D.b.B(q+i+1,1)
q=(i&2147483647)-((i&2147483648)>>>0)
i=D.b.B(s-n+1,1)
i=(i&2147483647)-((i&2147483648)>>>0)
a2=D.b.B(s+n+1,1)
o=(a2&2147483647)-((a2&2147483648)>>>0)
a2=D.b.B(h*2276+a0*3406+2048,12)
s=(a2&2147483647)-((a2&2147483648)>>>0)
a0=D.b.B(h*3406-a0*2276+2048,12)
h=(a0&2147483647)-((a0&2147483648)>>>0)
a0=D.b.B(f*799+d*4017+2048,12)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
d=D.b.B(f*4017-d*799+2048,12)
f=(d&2147483647)-((d&2147483648)>>>0)
a6[v]=q+s
a6[k]=q-s
a6[w]=o+a0
a6[m]=o-a0
a6[p]=i+f
a6[t]=i-f
a6[j]=a1+h
a6[r]=a1-h}for(w=$.aEg,v=0;v<64;++v){w.toString
t=D.b.B(a6[v]+8,4)
a5[v]=w[384+((t&2147483647)-((t&2147483648)>>>0))]}},
b3Y(e8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=e8.r.b,e5=e4.am(0,274)?B.cU(e4.h(0,274)):0,e6=e8.d,e7=e6.e
e7.toString
e6=e6.d
e6.toString
w=e5>=5&&e5<=8
if(w)v=e6
else v=e7
if(w)u=e7
else u=e6
t=A.jU(v,u,C.k9)
t.y=new A.BE(B.E(x.p,x.z))
for(s=B.ik(e4,e4.r,B.q(e4).c);s.t();){r=s.d
if(r!==274)t.y.b.l(0,r,e4.h(0,r))}q=e6-1
p=e7-1
e4=e8.Q
switch(e4.length){case 1:o=e4[0]
n=o.e
m=o.f
l=o.r
e4=t.x
e6=e5===8
e7=e5===7
s=e5===6
r=e5===5
k=e5===4
j=e5===3
i=e5===2
h=t.a
g=0
f=0
while(!0){e=e8.d.d
e.toString
if(!(f<e))break
d=n[D.b.d5(f,l)]
e=q-f
a0=e*h
a1=f*h
a2=0
while(!0){a3=e8.d.e
a3.toString
if(!(a2<a3))break
a4=d[D.b.d5(a2,m)]
a5=(D.e.a0(D.b.u(255,0,255))<<24|D.e.a0(D.b.u(a4,0,255))<<16|D.e.a0(D.b.u(a4,0,255))<<8|D.e.a0(D.b.u(a4,0,255)))>>>0
if(i)e4[a1+(p-a2)]=a5
else if(j)e4[a0+(p-a2)]=a5
else if(k)e4[a0+a2]=a5
else if(r)e4[a2*h+f]=a5
else if(s)e4[a2*h+e]=a5
else if(e7)e4[(p-a2)*h+e]=a5
else if(e6)e4[(p-a2)*h+f]=a5
else{a6=g+1
e4[g]=a5
g=a6}++a2}++f}break
case 3:o=e4[0]
a7=e4[1]
a8=e4[2]
a9=o.e
b0=a7.e
b1=a8.e
m=o.f
l=o.r
b2=a7.f
b3=a7.r
b4=a8.f
b5=a8.r
e4=t.x
e6=e5===8
e7=e5===7
s=e5===6
r=e5===5
k=e5===4
j=e5===3
i=e5===2
h=t.a
g=0
f=0
while(!0){e=e8.d.d
e.toString
if(!(f<e))break
b6=D.b.d5(f,l)
b7=D.b.d5(f,b3)
b8=D.b.d5(f,b5)
d=a9[b6]
b9=b0[b7]
c0=b1[b8]
e=q-f
a0=e*h
a1=f*h
a2=0
while(!0){a3=e8.d.e
a3.toString
if(!(a2<a3))break
c1=D.b.d5(a2,m)
c2=D.b.d5(a2,b2)
c3=D.b.d5(a2,b4)
a4=d[c1]<<8>>>0
c4=b9[c2]-128
c5=c0[c3]-128
a3=D.b.B(a4+359*c5+128,8)
a3=(a3&2147483647)-((a3&2147483648)>>>0)
if(a3<0)c6=0
else c6=a3>255?255:a3
a3=D.b.B(a4-88*c4-183*c5+128,8)
a3=(a3&2147483647)-((a3&2147483648)>>>0)
if(a3<0)c7=0
else c7=a3>255?255:a3
a3=D.b.B(a4+454*c4+128,8)
a3=(a3&2147483647)-((a3&2147483648)>>>0)
if(a3<0)c8=0
else c8=a3>255?255:a3
a5=(D.e.a0(D.b.u(255,0,255))<<24|D.e.a0(D.b.u(c8,0,255))<<16|D.e.a0(D.b.u(c7,0,255))<<8|D.e.a0(D.b.u(c6,0,255)))>>>0
if(i)e4[a1+(p-a2)]=a5
else if(j)e4[a0+(p-a2)]=a5
else if(k)e4[a0+a2]=a5
else if(r)e4[a2*h+f]=a5
else if(s)e4[a2*h+e]=a5
else if(e7)e4[(p-a2)*h+e]=a5
else if(e6)e4[(p-a2)*h+f]=a5
else{a6=g+1
e4[g]=a5
g=a6}++a2}++f}break
case 4:e6=e8.c
if(e6==null)throw B.c(A.ah("Unsupported color mode (4 components)"))
c9=e6.d!==0&&!0
o=e4[0]
a7=e4[1]
a8=e4[2]
d0=e4[3]
a9=o.e
b0=a7.e
b1=a8.e
d1=d0.e
m=o.f
l=o.r
b2=a7.f
b3=a7.r
b4=a8.f
b5=a8.r
d2=d0.f
d3=d0.r
e4=t.x
e6=e5===8
e7=e5===7
s=e5===6
r=e5===5
k=e5===4
j=e5===3
i=e5===2
h=!c9
e=t.a
g=0
f=0
while(!0){a0=e8.d.d
a0.toString
if(!(f<a0))break
b6=D.b.d5(f,l)
b7=D.b.d5(f,b3)
b8=D.b.d5(f,b5)
d4=D.b.d5(f,d3)
d=a9[b6]
b9=b0[b7]
c0=b1[b8]
d5=d1[d4]
a0=q-f
a1=a0*e
a3=f*e
a2=0
while(!0){d6=e8.d.e
d6.toString
if(!(a2<d6))break
c1=D.b.d5(a2,m)
c2=D.b.d5(a2,b2)
c3=D.b.d5(a2,b4)
d7=D.b.d5(a2,d2)
if(h){d8=d[c1]
d9=b9[c2]
e0=c0[c3]
e1=d5[d7]}else{a4=d[c1]
c4=b9[c2]
c5=c0[c3]
e1=d5[d7]
d6=c5-128
e2=D.e.a0(a4+1.402*d6)
if(e2<0)e2=0
else if(e2>255)e2=255
d8=255-e2
e2=c4-128
d6=D.e.a0(a4-0.3441363*e2-0.71413636*d6)
if(d6<0)d6=0
else if(d6>255)d6=255
d9=255-d6
e2=D.e.a0(a4+1.772*e2)
if(e2<0)d6=0
else d6=e2>255?255:e2
e0=255-d6}d6=D.b.B(d8*e1,8)
e2=D.b.B(d9*e1,8)
e3=D.b.B(e0*e1,8)
a5=(D.e.a0(D.b.u(255,0,255))<<24|D.e.a0(D.b.u((e3&2147483647)-((e3&2147483648)>>>0),0,255))<<16|D.e.a0(D.b.u((e2&2147483647)-((e2&2147483648)>>>0),0,255))<<8|D.e.a0(D.b.u((d6&2147483647)-((d6&2147483648)>>>0),0,255)))>>>0
if(i)e4[a3+(p-a2)]=a5
else if(j)e4[a1+(p-a2)]=a5
else if(k)e4[a1+a2]=a5
else if(r)e4[a2*e+f]=a5
else if(s)e4[a2*e+a0]=a5
else if(e7)e4[(p-a2)*e+a0]=a5
else if(e6)e4[(p-a2)*e+f]=a5
else{a6=g+1
e4[g]=a5
g=a6}++a2}++f}break
default:throw B.c(A.ah("Unsupported color mode"))}return t},
b_e(d,e,f,g,h,i){A.b_b(i,d,e,f,g,h,!0,i)},
b_f(d,e,f,g,h,i){A.b_c(i,d,e,f,g,h,!0,i)},
b_d(d,e,f,g,h,i){A.b_a(i,d,e,f,g,h,!0,i)},
y7(d,e,f,g,h){var w,v,u,t,s,r,q
for(w=d.a,v=d.d,u=e.a,t=e.d,s=f.a,r=f.d,q=0;q<g;++q)s[r+q]=w[v+q]+u[t+q]},
b_b(d,e,f,g,h,i,j,k){var w,v,u=null,t=h*g,s=h+i,r=A.be(d,!1,u,t),q=A.be(d,!1,u,t),p=A.aB(q,u,0)
if(h===0){q.l(0,0,r.a[r.d])
A.y7(A.aB(r,u,1),p,A.aB(q,u,1),e-1,!0)
p.d+=g
r.d+=g
q.d+=g
h=1}for(w=-g,v=e-1;h<s;){A.y7(r,A.aB(p,u,w),q,1,!0)
A.y7(A.aB(r,u,1),p,A.aB(q,u,1),v,!0);++h
p.d+=g
r.d+=g
q.d+=g}},
b_c(d,e,f,g,h,i,j,k){var w=null,v=h*g,u=h+i,t=A.be(d,!1,w,v),s=A.be(k,!1,w,v),r=A.aB(s,w,0)
if(h===0){s.l(0,0,t.a[t.d])
A.y7(A.aB(t,w,1),r,A.aB(s,w,1),e-1,!0)
t.d+=g
s.d+=g
h=1}else r.d-=g
for(;h<u;){A.y7(t,r,s,e,!0);++h
r.d+=g
t.d+=g
s.d+=g}},
b_a(d,e,f,a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a1*a0,j=a1+a2,i=A.be(d,!1,l,k),h=A.be(a4,!1,l,k),g=A.aB(h,l,0)
if(a1===0){h.l(0,0,i.a[i.d])
A.y7(A.aB(i,l,1),g,A.aB(h,l,1),e-1,!0)
g.d+=a0
i.d+=a0
h.d+=a0
a1=1}for(w=-a0;a1<j;){A.y7(i,A.aB(g,l,w),h,1,!0)
for(v=h.a,u=h.d,t=i.a,s=i.d,r=g.a,q=g.d,p=1;p<e;++p){o=p-a0
n=r[q+(p-1)]+r[q+o]-r[q+(o-1)]
if((n&4294967040)>>>0===0)m=n
else m=n<0?0:255
o=t[s+p]
v[u+p]=o+m}++a1
g.d=q+a0
i.d+=a0
h.d+=a0}},
aWm(d){var w,v,u
if($.eC==null)A.mn()
$.aFz()[0]=d
w=$.aT6()[0]
if(d===0)return w>>>16
v=$.acV.c8()[w>>>23&511]
if(v!==0){u=w&8388607
return v+(u+4095+(u>>>13&1)>>>13)}return A.aWn(w)},
aWn(d){var w,v,u=d>>>16&32768,t=(d>>>23&255)-112,s=d&8388607
if(t<=0){if(t<-10)return u
s|=8388608
w=14-t
return(u|D.b.it(s+(D.b.cI(1,w-1)-1)+(D.b.eX(s,w)&1),w))>>>0}else if(t===143)if(s===0)return u|31744
else{s=s>>>13
v=s===0?1:0
return u|s|v|31744}else{s=s+4095+(s>>>13&1)
if((s&8388608)!==0){++t
s=0}if(t>30)return u|31744
return(u|t<<10|s>>>13)>>>0}},
mn(){var w,v,u,t
if($.aCk!=null)return
w=new Uint32Array(65536)
$.aCk=w
$.eC=B.aCP(w.buffer,0,null)
w=new Uint16Array(512)
$.acV.b=w
for(v=0;v<256;++v){u=(v&255)-112
if(u<=0||u>=30){$.acV.toString
w[v]=0
w[(v|256)>>>0]=0}else{$.acV.toString
t=u<<10>>>0
w[v]=t
w[(v|256)>>>0]=(t|32768)>>>0}}for(w=$.aCk,v=0;v<65536;++v){w.toString
w[v]=A.aWo(v)}},
aWo(d){var w,v=d>>>15&1,u=d>>>10&31,t=d&1023
if(u===0)if(t===0)return v<<31>>>0
else{for(;(t&1024)===0;){t=t<<1;--u}++u
t&=4294966271}else if(u===31){w=v<<31
if(t===0)return(w|2139095040)>>>0
else return(w|t<<13|2139095040)>>>0}return(v<<31|u+112<<23|t<<13)>>>0},
b5u(d){$.aFB().l(0,0,d)
return $.aT8().h(0,0)},
az0(d){var w,v
if(d==null)return"null"
for(w=32,v="";w>-1;--w)v+=(d&D.b.cI(1,w))>>>0===0?"0":"1"
return v.charCodeAt(0)==0?v:v}},J={
ij(d,e){if(d<0||d>4294967295)throw B.c(B.bW(d,0,4294967295,"length",null))
return J.qX(new Array(d),e)},
fi(d){if(typeof d=="number"){if(Math.floor(d)==d)return J.on.prototype
return J.qY.prototype}if(typeof d=="string")return J.hL.prototype
if(d==null)return J.vM.prototype
if(typeof d=="boolean")return J.vL.prototype
if(d.constructor==Array)return J.i.prototype
if(typeof d!="object"){if(typeof d=="function")return J.hm.prototype
return d}if(d instanceof B.r)return d
return J.nz(d)},
aEK(d){if(typeof d=="number")return J.jX.prototype
if(typeof d=="string")return J.hL.prototype
if(d==null)return d
if(d.constructor==Array)return J.i.prototype
if(typeof d!="object"){if(typeof d=="function")return J.hm.prototype
return d}if(d instanceof B.r)return d
return J.nz(d)},
a7(d){if(typeof d=="string")return J.hL.prototype
if(d==null)return d
if(d.constructor==Array)return J.i.prototype
if(typeof d!="object"){if(typeof d=="function")return J.hm.prototype
return d}if(d instanceof B.r)return d
return J.nz(d)},
aW(d){if(d==null)return d
if(d.constructor==Array)return J.i.prototype
if(typeof d!="object"){if(typeof d=="function")return J.hm.prototype
return d}if(d instanceof B.r)return d
return J.nz(d)},
aEL(d){if(typeof d=="number"){if(Math.floor(d)==d)return J.on.prototype
return J.qY.prototype}if(d==null)return d
if(!(d instanceof B.r))return J.hw.prototype
return d},
pI(d){if(typeof d=="number")return J.jX.prototype
if(d==null)return d
if(!(d instanceof B.r))return J.hw.prototype
return d},
a5s(d){if(typeof d=="number")return J.jX.prototype
if(typeof d=="string")return J.hL.prototype
if(d==null)return d
if(!(d instanceof B.r))return J.hw.prototype
return d},
e2(d){if(typeof d=="string")return J.hL.prototype
if(d==null)return d
if(!(d instanceof B.r))return J.hw.prototype
return d},
d(d){if(d==null)return d
if(typeof d!="object"){if(typeof d=="function")return J.hm.prototype
return d}if(d instanceof B.r)return d
return J.nz(d)},
hb(d){if(d==null)return d
if(!(d instanceof B.r))return J.hw.prototype
return d},
aFT(d,e){if(typeof d=="number"&&typeof e=="number")return d+e
return J.aEK(d).ac(d,e)},
h(d,e){if(d==null)return e==null
if(typeof d!="object")return e!=null&&d===e
return J.fi(d).k(d,e)},
aFU(d,e){if(typeof d=="number"&&typeof e=="number")return d>e
return J.pI(d).Gb(d,e)},
aFV(d,e){if(typeof d=="number"&&typeof e=="number")return d*e
return J.a5s(d).ab(d,e)},
aFW(d,e){if(typeof d=="number"&&typeof e=="number")return d-e
return J.pI(d).aD(d,e)},
aFX(d,e,f){return J.d(d).Sw(d,e,f)},
aFY(d){return J.d(d).SO(d)},
aFZ(d,e){return J.d(d).SP(d,e)},
aG_(d,e,f){return J.d(d).SQ(d,e,f)},
aG0(d,e,f,g){return J.d(d).SR(d,e,f,g)},
aAv(d,e){return J.d(d).SS(d,e)},
aG1(d,e){return J.d(d).ST(d,e)},
aG2(d,e,f){return J.d(d).SU(d,e,f)},
aG3(d,e){return J.d(d).SV(d,e)},
aG4(d,e,f,g){return J.d(d).SW(d,e,f,g)},
aG5(d,e,f){return J.d(d).SX(d,e,f)},
aG6(d,e,f,g,h,i,j){return J.d(d).SY(d,e,f,g,h,i,j)},
aG7(d,e,f,g,h){return J.d(d).SZ(d,e,f,g,h)},
aG8(d,e){return J.d(d).T_(d,e)},
aG9(d,e){return J.d(d).Ti(d,e)},
aGa(d,e){return J.d(d).TQ(d,e)},
a8(d,e){if(typeof e==="number")if(d.constructor==Array||typeof d=="string"||B.azt(d,d[b.dispatchPropertyName]))if(e>>>0===e&&e<d.length)return d[e]
return J.a7(d).h(d,e)},
dN(d,e,f){if(typeof e==="number")if((d.constructor==Array||B.azt(d,d[b.dispatchPropertyName]))&&!d.immutable$list&&e>>>0===e&&e<d.length)return d[e]=f
return J.aW(d).l(d,e,f)},
aGb(d,e,f){return J.d(d).Ym(d,e,f)},
ed(d,e){return J.aW(d).H(d,e)},
aGc(d,e,f,g){return J.d(d).lQ(d,e,f,g)},
jB(d,e,f){return J.d(d).lR(d,e,f)},
zJ(d,e,f,g){return J.d(d).lS(d,e,f,g)},
aGd(d,e,f,g){return J.d(d).a_R(d,e,f,g)},
aGe(d,e,f,g,h,i){return J.d(d).KA(d,e,f,g,h,i)},
aGf(d,e){return J.d(d).qT(d,e)},
aGg(d,e,f){return J.d(d).a_V(d,e,f)},
aGh(d,e){return J.d(d).hI(d,e)},
aAw(d,e){return J.d(d).nf(d,e)},
aAx(d,e){return J.e2(d).oU(d,e)},
aGi(d,e){return J.d(d).nn(d,e)},
aGj(d){return J.d(d).bQ(d)},
aGk(d,e,f,g){return J.d(d).vj(d,e,f,g)},
zK(d){return J.hb(d).bf(d)},
pQ(d,e){return J.aW(d).vp(d,e)},
aAy(d,e,f){return J.aW(d).kR(d,e,f)},
aGl(d,e,f){return J.pI(d).u(d,e,f)},
aAz(d,e){return J.aW(d).nq(d,e)},
aAA(d,e,f,g){return J.d(d).a0x(d,e,f,g)},
aAB(d,e,f,g){return J.d(d).a0y(d,e,f,g)},
aAC(d,e,f,g){return J.d(d).lZ(d,e,f,g)},
a5Z(d){return J.d(d).d1(d)},
a6_(d,e){return J.e2(d).W(d,e)},
u7(d,e){return J.a5s(d).b9(d,e)},
aGm(d){return J.hb(d).hK(d)},
aGn(d,e){return J.hb(d).dO(d,e)},
aGo(d,e){return J.d(d).a0I(d,e)},
aAD(d,e){return J.d(d).a0J(d,e)},
Kb(d,e){return J.a7(d).v(d,e)},
aGp(d,e,f){return J.a7(d).ns(d,e,f)},
fl(d,e){return J.d(d).am(d,e)},
aGq(d){return J.d(d).BH(d)},
aGr(d,e){return J.d(d).BI(d,e)},
aGs(d,e){return J.d(d).dz(d,e)},
aGt(d,e,f){return J.d(d).Mp(d,e,f)},
i3(d){return J.d(d).f8(d)},
aGu(d){return J.d(d).a1m(d)},
Kc(d){return J.d(d).p(d)},
aAE(d,e,f,g,h){return J.d(d).a1y(d,e,f,g,h)},
aAF(d,e,f,g){return J.d(d).hM(d,e,f,g)},
aAG(d,e,f,g,h,i,j){return J.d(d).a1A(d,e,f,g,h,i,j)},
aAH(d,e,f,g,h,i,j){return J.d(d).a1B(d,e,f,g,h,i,j)},
aAI(d,e,f,g,h,i){return J.d(d).a1C(d,e,f,g,h,i)},
aAJ(d,e){return J.d(d).rj(d,e)},
aAK(d,e,f,g){return J.d(d).a1D(d,e,f,g)},
aAL(d,e,f){return J.d(d).cL(d,e,f)},
Kd(d,e){return J.d(d).rk(d,e)},
aAM(d,e,f){return J.d(d).dB(d,e,f)},
aAN(d,e,f){return J.d(d).dg(d,e,f)},
aGv(d,e,f,g,h,i,j,k){return J.d(d).a1F(d,e,f,g,h,i,j,k)},
pR(d,e){return J.aW(d).bs(d,e)},
aGw(d,e){return J.aW(d).jl(d,e)},
kD(d,e,f,g){return J.aW(d).hT(d,e,f,g)},
aGx(d){return J.d(d).a2e(d)},
aAO(d){return J.d(d).N8(d)},
fm(d,e){return J.aW(d).ah(d,e)},
aGy(d){return J.d(d).gRI(d)},
aGz(d){return J.d(d).gRK(d)},
a60(d){return J.d(d).gRL(d)},
aGA(d){return J.d(d).gRM(d)},
aGB(d){return J.d(d).gRO(d)},
aGC(d){return J.d(d).gRP(d)},
aGD(d){return J.d(d).gRQ(d)},
cJ(d){return J.d(d).gRR(d)},
Ke(d){return J.d(d).gRS(d)},
aGE(d){return J.d(d).gRU(d)},
aGF(d){return J.d(d).gRV(d)},
aGG(d){return J.d(d).gRW(d)},
aGH(d){return J.d(d).gRX(d)},
aGI(d){return J.d(d).gRY(d)},
aGJ(d){return J.d(d).gS_(d)},
a61(d){return J.d(d).gS0(d)},
aGK(d){return J.d(d).gS1(d)},
aGL(d){return J.d(d).gS2(d)},
aGM(d){return J.d(d).gS3(d)},
aGN(d){return J.d(d).gS4(d)},
a62(d){return J.d(d).gS5(d)},
aGO(d){return J.d(d).gS6(d)},
aGP(d){return J.d(d).gS7(d)},
aGQ(d){return J.d(d).gS8(d)},
zL(d){return J.d(d).gS9(d)},
aAP(d){return J.d(d).gSa(d)},
aGR(d){return J.d(d).gSb(d)},
aGS(d){return J.d(d).gSc(d)},
aGT(d){return J.d(d).gSd(d)},
aGU(d){return J.d(d).gSe(d)},
aGV(d){return J.d(d).gSf(d)},
aGW(d){return J.d(d).gSg(d)},
aGX(d){return J.d(d).gSh(d)},
aGY(d){return J.d(d).gSi(d)},
aGZ(d){return J.d(d).gSj(d)},
aH_(d){return J.d(d).gSk(d)},
aH0(d){return J.d(d).gSl(d)},
aH1(d){return J.d(d).gSm(d)},
aH2(d){return J.d(d).gSn(d)},
aH3(d){return J.d(d).gSo(d)},
aH4(d){return J.d(d).gSp(d)},
aH5(d){return J.d(d).gSq(d)},
aH6(d){return J.d(d).gSr(d)},
aAQ(d){return J.d(d).gSs(d)},
Kf(d){return J.d(d).gSt(d)},
m2(d){return J.d(d).gSu(d)},
aH7(d){return J.d(d).gSx(d)},
aH8(d){return J.d(d).gSy(d)},
aH9(d){return J.d(d).gSz(d)},
aHa(d){return J.d(d).gSA(d)},
aHb(d){return J.d(d).gSB(d)},
aHc(d){return J.d(d).gSC(d)},
aHd(d){return J.d(d).gSD(d)},
aAR(d){return J.d(d).gSE(d)},
aHe(d){return J.d(d).gSG(d)},
aHf(d){return J.d(d).gSH(d)},
aHg(d){return J.d(d).gSI(d)},
aHh(d){return J.d(d).gSJ(d)},
aHi(d){return J.d(d).gSK(d)},
aHj(d){return J.d(d).gSL(d)},
Kg(d){return J.d(d).gSM(d)},
aHk(d){return J.d(d).gSN(d)},
aHl(d){return J.d(d).gT0(d)},
aAS(d){return J.d(d).gT1(d)},
aHm(d){return J.d(d).gT2(d)},
aHn(d){return J.d(d).gT3(d)},
Kh(d){return J.d(d).gT4(d)},
aHo(d){return J.d(d).gT5(d)},
aHp(d){return J.d(d).gT6(d)},
aHq(d){return J.d(d).gT7(d)},
aHr(d){return J.d(d).gT8(d)},
aAT(d){return J.d(d).gT9(d)},
aHs(d){return J.d(d).gTa(d)},
aAU(d){return J.d(d).gTb(d)},
aAV(d){return J.d(d).gTc(d)},
aHt(d){return J.d(d).gTd(d)},
aHu(d){return J.d(d).gTe(d)},
aHv(d){return J.d(d).gTf(d)},
aAW(d){return J.d(d).gTg(d)},
aHw(d){return J.d(d).gTh(d)},
aHx(d){return J.d(d).gTj(d)},
u8(d){return J.d(d).gTk(d)},
aHy(d){return J.d(d).gTl(d)},
a63(d){return J.d(d).gTm(d)},
a64(d){return J.d(d).gTn(d)},
aHz(d){return J.d(d).gTo(d)},
u9(d){return J.d(d).gTp(d)},
aAX(d){return J.d(d).gTq(d)},
aHA(d){return J.d(d).gTr(d)},
aHB(d){return J.d(d).gTs(d)},
aAY(d){return J.d(d).gTt(d)},
aHC(d){return J.d(d).gTu(d)},
aHD(d){return J.d(d).gTv(d)},
aHE(d){return J.d(d).gTw(d)},
aHF(d){return J.d(d).gTx(d)},
aHG(d){return J.d(d).gTy(d)},
aAZ(d){return J.d(d).gTz(d)},
aHH(d){return J.d(d).gTA(d)},
aHI(d){return J.d(d).gTB(d)},
aHJ(d){return J.d(d).gTC(d)},
aHK(d){return J.d(d).gTD(d)},
aHL(d){return J.d(d).gTE(d)},
aHM(d){return J.d(d).gTF(d)},
aHN(d){return J.d(d).gTG(d)},
aHO(d){return J.d(d).gTH(d)},
a65(d){return J.d(d).gTI(d)},
a66(d){return J.d(d).gTJ(d)},
aHP(d){return J.d(d).gTK(d)},
ua(d){return J.d(d).gTM(d)},
aB_(d){return J.d(d).gTN(d)},
aB0(d){return J.d(d).gTO(d)},
Ki(d){return J.d(d).gTP(d)},
aHQ(d){return J.d(d).gTR(d)},
aB1(d){return J.d(d).gTS(d)},
Kj(d){return J.d(d).gTT(d)},
aHR(d){return J.d(d).gTU(d)},
aB2(d){return J.d(d).gTV(d)},
aHS(d){return J.d(d).gTW(d)},
aHT(d){return J.d(d).gTX(d)},
aHU(d){return J.d(d).gTY(d)},
aHV(d){return J.d(d).gTZ(d)},
aHW(d){return J.d(d).gU_(d)},
aHX(d){return J.aW(d).gne(d)},
aHY(d){return J.d(d).ga0b(d)},
aHZ(d){return J.d(d).gnl(d)},
aB3(d){return J.d(d).ga0q(d)},
aI_(d){return J.d(d).gvn(d)},
aI0(d){return J.d(d).gvo(d)},
ub(d){return J.d(d).goY(d)},
Kk(d){return J.d(d).ghJ(d)},
aI1(d){return J.d(d).gp9(d)},
aI2(d){return J.d(d).gpa(d)},
aI3(d){return J.d(d).gvM(d)},
aI4(d){return J.d(d).gbw(d)},
aI5(d){return J.d(d).ghn(d)},
kE(d){return J.aW(d).gU(d)},
aI6(d){return J.d(d).gnJ(d)},
x(d){return J.fi(d).gD(d)},
aI7(d){return J.d(d).giG(d)},
iQ(d){return J.a7(d).ga_(d)},
uc(d){return J.a7(d).gbF(d)},
aC(d){return J.aW(d).ga9(d)},
zM(d){return J.d(d).gbP(d)},
aB4(d){return J.hb(d).gdU(d)},
zN(d){return J.aW(d).gJ(d)},
bn(d){return J.a7(d).gm(d)},
aI8(d){return J.d(d).gx0(d)},
a67(d){return J.d(d).gae(d)},
aI9(d){return J.d(d).gca(d)},
aIa(d){return J.d(d).ga52(d)},
aIb(d){return J.d(d).gpS(d)},
Y(d){return J.fi(d).gea(d)},
aB5(d){return J.d(d).gQg(d)},
aIc(d){return J.d(d).gQA(d)},
d5(d){if(typeof d==="number")return d>0?1:d<0?-1:d
return J.aEL(d).gGA(d)},
aId(d){return J.d(d).gbM(d)},
aB6(d){return J.d(d).gOX(d)},
Kl(d){return J.d(d).gaT(d)},
aIe(d){return J.d(d).gn(d)},
aB7(d){return J.d(d).gbi(d)},
aIf(d){return J.d(d).Pv(d)},
a68(d){return J.d(d).f4(d)},
Km(d){return J.d(d).Px(d)},
aB8(d){return J.d(d).G3(d)},
aIg(d,e,f,g){return J.d(d).PD(d,e,f,g)},
aB9(d,e){return J.d(d).PE(d,e)},
aIh(d,e,f){return J.d(d).PF(d,e,f)},
aIi(d){return J.d(d).PG(d)},
aIj(d){return J.d(d).PH(d)},
aIk(d){return J.d(d).PJ(d)},
aBa(d){return J.d(d).PO(d)},
aIl(d){return J.d(d).PP(d)},
aIm(d){return J.d(d).PQ(d)},
aIn(d){return J.d(d).PR(d)},
aIo(d){return J.d(d).PS(d)},
aIp(d){return J.d(d).tO(d)},
aIq(d,e,f){return J.aW(d).oi(d,e,f)},
aIr(d){return J.d(d).PY(d)},
aIs(d,e,f,g,h){return J.d(d).PZ(d,e,f,g,h)},
aIt(d){return J.d(d).q3(d)},
aIu(d,e){return J.d(d).i4(d,e)},
aIv(d,e){return J.d(d).mO(d,e)},
aBb(d){return J.d(d).EE(d)},
aIw(d,e){return J.d(d).a33(d,e)},
aBc(d){return J.d(d).a38(d)},
aIx(d){return J.hb(d).rQ(d)},
aIy(d){return J.aW(d).wZ(d)},
aIz(d,e){return J.aW(d).bt(d,e)},
aIA(d,e){return J.d(d).il(d,e)},
aIB(d,e,f){return J.d(d).cu(d,e,f)},
aIC(d,e){return J.hb(d).a3y(d,e)},
Kn(d,e,f){return J.aW(d).kg(d,e,f)},
aID(d,e,f,g){return J.aW(d).pz(d,e,f,g)},
aIE(d,e,f){return J.e2(d).NU(d,e,f)},
aIF(d,e,f){return J.d(d).e7(d,e,f)},
aIG(d,e){return J.fi(d).li(d,e)},
aIH(d,e,f,g){return J.d(d).Of(d,e,f,g)},
aII(d){return J.d(d).eO(d)},
aIJ(d,e,f,g){return J.d(d).a4Y(d,e,f,g)},
aIK(d,e,f,g){return J.d(d).tq(d,e,f,g)},
aBd(d,e){return J.d(d).mx(d,e)},
zO(d,e,f){return J.d(d).cq(d,e,f)},
aIL(d,e,f){return J.d(d).pP(d,e,f)},
aBe(d,e,f){return J.d(d).a59(d,e,f)},
aIM(d){return J.d(d).a5b(d)},
cW(d){return J.aW(d).cn(d)},
pS(d,e){return J.aW(d).P(d,e)},
aBf(d,e,f){return J.d(d).xV(d,e,f)},
aIN(d,e,f,g){return J.d(d).pQ(d,e,f,g)},
aIO(d){return J.aW(d).hb(d)},
aIP(d,e,f,g){return J.d(d).km(d,e,f,g)},
aIQ(d,e){return J.d(d).a5l(d,e)},
aIR(d){return J.d(d).hv(d)},
aBg(d){return J.d(d).c4(d)},
aBh(d,e){return J.d(d).o6(d,e)},
aBi(d,e,f,g){return J.d(d).a5y(d,e,f,g)},
aBj(d){return J.d(d).ci(d)},
aBk(d,e,f,g,h){return J.d(d).Q8(d,e,f,g,h)},
aBl(d,e){return J.d(d).bI(d,e)},
aBm(d,e,f){return J.d(d).ds(d,e,f)},
aIS(d){return J.d(d).Qd(d)},
aIT(d,e){return J.d(d).eS(d,e)},
aIU(d,e){return J.a7(d).sm(d,e)},
aIV(d,e){return J.d(d).yM(d,e)},
aIW(d,e){return J.d(d).Gm(d,e)},
aIX(d,e){return J.d(d).Gn(d,e)},
a69(d,e){return J.d(d).yO(d,e)},
Ko(d,e){return J.d(d).Qt(d,e)},
aIY(d,e){return J.d(d).Gr(d,e)},
aIZ(d,e,f,g,h){return J.aW(d).bj(d,e,f,g,h)},
aJ_(d,e){return J.d(d).QB(d,e)},
aBn(d,e){return J.d(d).Gu(d,e)},
aJ0(d,e){return J.d(d).Gv(d,e)},
aJ1(d,e){return J.d(d).Gw(d,e)},
Kp(d,e){return J.aW(d).bR(d,e)},
a6a(d,e){return J.aW(d).ec(d,e)},
aJ2(d){return J.e2(d).hC(d)},
aJ3(d,e){return J.e2(d).ov(d,e)},
aJ4(d,e){return J.e2(d).bc(d,e)},
a6b(d,e,f){return J.aW(d).c5(d,e,f)},
aJ5(d){return J.hb(d).yZ(d)},
aJ6(d,e){return J.e2(d).c7(d,e)},
aJ7(d,e,f){return J.e2(d).a3(d,e,f)},
aBo(d,e){return J.aW(d).ip(d,e)},
aJ8(d,e){return J.d(d).a5G(d,e)},
a6c(d,e,f){return J.d(d).co(d,e,f)},
aJ9(d,e,f,g){return J.d(d).hx(d,e,f,g)},
aJa(d){return J.d(d).a5J(d)},
aJb(d){return J.aW(d).eA(d)},
aJc(d,e){return J.aW(d).eB(d,e)},
aJd(d){return J.e2(d).FI(d)},
aJe(d,e){return J.pI(d).fj(d,e)},
aJf(d){return J.aW(d).iN(d)},
fn(d){return J.fi(d).j(d)},
aJg(d){return J.d(d).a5O(d)},
aJh(d,e,f,g,h,i,j,k,l,m){return J.d(d).a5Y(d,e,f,g,h,i,j,k,l,m)},
aBp(d,e,f){return J.d(d).b0(d,e,f)},
aJi(d){return J.e2(d).a60(d)},
aBq(d){return J.e2(d).FP(d)},
aJj(d){return J.d(d).a61(d)},
aBr(d,e){return J.hb(d).a67(d,e)},
aBs(d){return J.d(d).FY(d)},
aBt(d,e){return J.d(d).yq(d,e)}},B,D,C,I,L,K,F,E,G,S,H,T,M,N,O,P,U,Q,V,W,X,R
A=a.updateHolder(c[8],A)
J=a.updateHolder(c[1],J)
B=c[0]
D=c[2]
C=c[48]
I=c[20]
L=c[28]
K=c[42]
F=c[30]
E=c[36]
G=c[43]
S=c[18]
H=c[26]
T=c[22]
M=c[33]
N=c[37]
O=c[15]
P=c[45]
U=c[25]
Q=c[46]
V=c[24]
W=c[34]
X=c[19]
R=c[17]
A.Fw.prototype={
mq(d,e,f,g){return this.a.mq(d,e,f,g)},
axr(d,e,f){return this.mq(d,null,e,f)}}
A.yq.prototype={
YA(){var w=this
if((w.b&2)!==0)return
B.tX(null,null,w.a,w.gaq7())
w.b=(w.b|2)>>>0},
O8(d){},
Fr(d){this.b+=4},
xZ(d){var w=this.b
if(w>=4){w=this.b=w-4
if(w<4&&(w&1)===0)this.YA()}},
bf(d){return $.zF()},
oO(){var w,v=this,u=v.b=(v.b&4294967293)>>>0
if(u>=4)return
v.b=(u|1)>>>0
w=v.c
if(w!=null)v.a.tx(w)},
$ils:1}
A.H0.prototype={
mq(d,e,f,g){var w=new A.yq($.as,f,this.$ti.i("yq<1>"))
w.YA()
return w}}
A.Zw.prototype={
H(d,e){var w,v,u=this,t=u.b,s=u.c,r=J.a7(e)
if(r.gm(e)>t.length-s){t=u.b
w=r.gm(e)+t.length-1
w|=D.b.B(w,1)
w|=w>>>2
w|=w>>>4
w|=w>>>8
v=new Uint8Array((((w|w>>>16)>>>0)+1)*2)
t=u.b
D.B.cF(v,0,t.length,t)
u.b=v}t=u.b
s=u.c
D.B.cF(t,s,s+r.gm(e),e)
u.c=u.c+r.gm(e)},
d1(d){this.a.$1(D.B.c5(this.b,0,this.c))}}
A.H9.prototype={
bs(d,e){B.aD9(e,this,null,null)
return this.b.$1(e)},
gm(d){return this.a}}
A.KD.prototype={}
A.aeQ.prototype={}
A.aeP.prototype={
gm(d){return B.b(this.e,"_length")-(this.b-this.c)},
gax0(){return this.b>=this.c+B.b(this.e,"_length")},
h(d,e){return this.a[this.b+e]},
aP(){return this.a[this.b++]},
K(){var w,v,u,t=this,s=t.a,r=t.b,q=t.b=r+1,p=s[r]&255
r=t.b=q+1
w=s[q]&255
q=t.b=r+1
v=s[r]&255
t.b=q+1
u=s[q]&255
if(t.d===1)return(p<<24|w<<16|v<<8|u)>>>0
return(u<<24|v<<16|w<<8|p)>>>0}}
A.ahN.prototype={}
A.ahM.prototype={
yr(d){var w,v,u,t,s=this,r=d.length
for(;w=s.a,v=w+r,u=s.c,t=u.length,v>t;)s.Jh(v-t)
D.B.cF(u,w,v,d)
s.a+=r},
aBR(d){var w,v,u,t,s,r=this
for(w=d.c;v=r.a,u=B.b(d.e,"_length"),t=d.b,s=r.c,v+(u-(t-w))>s.length;)r.Jh(r.a+(B.b(d.e,"_length")-(d.b-w))-r.c.length)
w=r.a
D.B.bj(s,w,w+d.gm(d),d.a,d.b)
r.a=r.a+d.gm(d)},
QW(d,e){var w=this
if(d<0)d=w.a+d
if(e==null)e=w.a
else if(e<0)e=w.a+e
return B.bP(w.c.buffer,d,e-d)},
e2(d){return this.QW(d,null)},
Jh(d){var w=d!=null?d>32768?d:32768:32768,v=this.c,u=v.length,t=new Uint8Array((u+w)*2)
D.B.cF(t,0,u,v)
this.c=t},
ano(){return this.Jh(null)},
gm(d){return this.a}}
A.axv.prototype={
vH(d,e){var w,v,u,t,s=d.aP(),r=d.aP(),q=s&8
D.b.B(s,3)
if(q!==8)throw B.c(A.m3("Only DEFLATE compression supported: "+q))
if(D.b.cd((s<<8>>>0)+r,31)!==0)throw B.c(A.m3("Invalid FCHECK"))
if((r>>>5&1)!==0){d.K()
throw B.c(A.m3("FDICT Encoding not currently supported"))}w=A.vt(C.pB)
v=A.vt(C.tS)
u=A.aMr(null)
v=new A.QR(d,u,w,v)
v.b=!0
v.X2()
t=x.L.a(B.bP(u.c.buffer,0,u.a))
d.K()
return t}}
A.adY.prototype={
ae0(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=d.length
for(w=0;w<l;++w){v=d[w]
if(v>m.b)m.b=v
if(v<m.c)m.c=v}u=D.b.bS(1,m.b)
m.a=new Uint32Array(u)
for(t=1,s=0,r=2;t<=m.b;){for(v=t<<16,w=0;w<l;++w)if(d[w]===t){for(q=s,p=0,o=0;o<t;++o){p=(p<<1|q&1)>>>0
q=q>>>1}for(n=(v|w)>>>0,o=p;o<u;o+=r)B.b(m.a,"table")[o]=n;++s}++t
s=s<<1>>>0
r=r<<1>>>0}}}
A.QR.prototype={
X2(){var w,v,u=this
u.e=u.d=0
if(!u.b)return
for(w=u.a;v=B.b(w,"input"),v.b<v.c+B.b(v.e,"_length");)if(!u.anI())break},
anI(){var w,v,u,t,s,r,q=this,p="input",o=q.a
if(B.b(o,p).gax0())return!1
w=q.j2(3)
v=w>>>1
switch(v){case 0:q.e=q.d=0
u=q.j2(16)
t=q.j2(16)
if(u!==0&&u!==(t^65535)>>>0)B.M(A.m3("Invalid uncompressed block header"))
t=B.b(o,p)
if(u>t.gm(t))B.M(A.m3("Input buffer is broken"))
o=B.b(o,p)
t=o.b
s=o.c
r=A.vF(o.a,o.d,u,t-s+s)
o.b=o.b+r.gm(r)
q.c.aBR(r)
break
case 1:q.Vj(q.r,q.w)
break
case 2:q.anL()
break
default:throw B.c(A.m3("unknown BTYPE: "+v))}return(w&1)===0},
j2(d){var w,v,u,t,s=this
if(d===0)return 0
for(w=s.a;v=s.e,v<d;){v=B.b(w,"input")
if(v.b>=v.c+B.b(v.e,"_length"))throw B.c(A.m3("input buffer is broken"))
v=B.b(w,"input")
v=v.a[v.b++]
u=s.d
t=s.e
s.d=(u|D.b.cI(v,t))>>>0
s.e=t+8}w=s.d
u=D.b.bS(1,d)
s.d=D.b.d5(w,d)
s.e=v-d
return(w&u-1)>>>0},
Jq(d){var w,v,u,t,s,r,q=this,p=B.b(d.a,"table"),o=d.b
for(w=q.a;q.e<o;){v=B.b(w,"input")
if(v.b>=v.c+B.b(v.e,"_length"))break
v=B.b(w,"input")
v=v.a[v.b++]
u=q.d
t=q.e
q.d=(u|D.b.cI(v,t))>>>0
q.e=t+8}w=q.d
s=p[(w&D.b.bS(1,o)-1)>>>0]
r=s>>>16
q.d=D.b.d5(w,r)
q.e-=r
return s&65535},
anL(){var w,v,u,t,s,r,q=this,p=q.j2(5)+257,o=q.j2(5)+1,n=q.j2(4)+4,m=new Uint8Array(19)
for(w=0;w<n;++w)m[C.a4f[w]]=q.j2(3)
v=A.vt(m)
u=new Uint8Array(p)
t=new Uint8Array(o)
s=q.Vh(p,v,u)
r=q.Vh(o,v,t)
q.Vj(A.vt(s),A.vt(r))},
Vj(d,e){var w,v,u,t,s,r,q,p=this
for(w=p.c;!0;){v=p.Jq(d)
if(v>285)throw B.c(A.m3("Invalid Huffman Code "+v))
if(v===256)break
if(v<256){if(w.a===w.c.length)w.ano()
w.c[w.a++]=v&255
continue}u=v-257
t=C.a3z[u]+p.j2(C.a0B[u])
s=p.Jq(e)
if(s<=29){r=C.a1B[s]+p.j2(C.ZP[s])
for(q=-r;t>r;){w.yr(w.e2(q))
t-=r}if(t===r)w.yr(w.e2(q))
else w.yr(w.QW(q,t-r))}else throw B.c(A.m3("Illegal unused distance symbol"))}for(w=p.a;q=p.e,q>=8;){p.e=q-8
q=B.b(w,"input")
if(--q.b<0)q.b=0}},
Vh(d,e,f){var w,v,u,t,s,r,q=this
for(w=0,v=0;v<d;){u=q.Jq(e)
switch(u){case 16:t=3+q.j2(2)
for(;s=t-1,t>0;t=s,v=r){r=v+1
f[v]=w}break
case 17:t=3+q.j2(3)
for(;s=t-1,t>0;t=s,v=r){r=v+1
f[v]=0}w=0
break
case 18:t=11+q.j2(7)
for(;s=t-1,t>0;t=s,v=r){r=v+1
f[v]=0}w=0
break
default:if(u>15)throw B.c(A.m3("Invalid Huffman Code: "+u))
r=v+1
f[v]=u
v=r
w=u
break}}return f}}
A.aqZ.prototype={}
A.aqY.prototype={}
A.Qe.prototype={
H(d,e){var w,v,u=this
if(u.b)throw B.c(B.af("The FutureGroup is closed."))
w=u.e
v=w.length
w.push(null);++u.a
e.co(0,new A.acl(u,v),x.P).lW(new A.acm(u))}}
A.BB.prototype={
a_Z(d){d.qR(this.a,this.b)},
gD(d){return(J.x(this.a)^B.fV(this.b)^492929599)>>>0},
k(d,e){if(e==null)return!1
return e instanceof A.BB&&J.h(this.a,e.a)&&this.b===e.b},
$iaku:1}
A.y4.prototype={
a_Z(d){d.H(0,this.a)},
gD(d){return(J.x(this.a)^842997089)>>>0},
k(d,e){if(e==null)return!1
return e instanceof A.y4&&J.h(this.a,e.a)},
$iaku:1}
A.Fv.prototype={
hC(d){var w,v,u,t=this,s=I.aDm(t.ganb(),t.gand(),t.gani(),!1,t.$ti.c)
s.r=new A.aoE(t,s)
for(w=t.c,v=w.length,u=0;u<w.length;w.length===v||(0,B.F)(w),++u)w[u].a_Z(s)
if(t.f)t.e.H(0,s.d1(0))
else t.d.H(0,s)
return new I.jn(s,B.q(s).i("jn<1>"))},
anc(){var w,v=this
if(v.f)return
w=v.b
if(w!=null)w.xZ(0)
else v.b=v.a.axr(v.gan0(),v.gan2(),v.gan4())},
ane(){if(!this.d.jl(0,new A.aoD(this)))return
this.b.Fr(0)},
anj(){this.b.xZ(0)},
amW(d){var w=this.d
w.P(0,d)
if(w.a!==0)return
this.b.Fr(0)},
an1(d){var w,v,u,t,s
this.c.push(new A.y4(d,this.$ti.i("y4<1>")))
for(w=this.d,w=B.dL(w,w.r,B.q(w).c),v=w.$ti.c;w.t();){u=w.d
if(u==null)u=v.a(u)
t=u.b
if(t>=4)B.M(u.zi())
if((t&1)!==0)u.qG(d)
else if((t&3)===0){t=u.zE()
u=new I.lG(d,B.q(u).i("lG<1>"))
s=t.c
if(s==null)t.b=t.c=u
else{s.srZ(0,u)
t.c=u}}}},
an5(d,e){var w,v,u
this.c.push(new A.BB(d,e))
for(w=this.d,w=B.dL(w,w.r,B.q(w).c),v=w.$ti.c;w.t();){u=w.d;(u==null?v.a(u):u).qR(d,e)}},
an3(){var w,v,u,t
this.f=!0
for(w=this.d,w=B.dL(w,w.r,B.q(w).c),v=this.e,u=w.$ti.c;w.t();){t=w.d
v.H(0,(t==null?u.a(t):t).d1(0))}}}
A.a7m.prototype={
a5M(d,e){return new A.QK(d,e,C.br,A.aWu(d,e,A.b2d(d,e,this.b),C.hr),A.aKD(null))}}
A.L8.prototype={
j(d){return"Exception: "+this.a},
$ibK:1}
A.L9.prototype={
j(d){return"Exception: "+this.a},
$ibK:1}
A.fM.prototype={
ac(d,e){return new A.fM(this.a+e.a,this.b+e.b,this.c+e.c)},
aD(d,e){return new A.fM(this.a-e.a,this.b-e.b,this.c-e.c)},
ab(d,e){return new A.fM(this.a*e,this.b*e,this.c*e)},
j(d){return"ColorTriplet("+B.e(this.a)+", "+B.e(this.b)+", "+B.e(this.c)+")"}}
A.uo.prototype={
a2(d,e){var w=null
return L.EH(0,new A.L7(this.c,w),!0,K.dM,L.iF(F.dr(e,E.bc,x.C).ga0g(),w,w,w,w,w,w))}}
A.L7.prototype={
a2(d,e){return new F.dg(G.eV,F.fI(this.c,new A.a7s(this),null),null)}}
A.nL.prototype={
j(d){return"BlurHashMode."+this.b}}
A.q5.prototype={
j(d){return"BlurHashDecode."+this.b}}
A.Ac.prototype={
sxe(d,e){var w,v,u,t=this
if(e===t.d)return
w=t.a
v=w.a.a
u=t.b
w.saT(0,u.a.a)
u.saT(0,v)
t.d=e
t.aS(0)},
aS(d){var w=this
w.a.saT(0,"")
w.b.saT(0,"")
w.r=w.f=null
w.e=C.h2
w.av()},
fC(d){var w,v,u,t,s=this
d=d
s.c=null
if(J.bn(d)===0){s.aS(0)
return}if(s.d===C.nn){s.e=C.Je
w=A.aJF(d).a5M(16,9)
s.f=new A.l_(new Uint8Array(B.eS(A.aLH(100).a1L(w))))
s.av()
return}if(J.aJ4(d,B.cu("data:image/png;base64,",!0)))d=J.aJ6(d,22)
try{D.k0.bU(d)
s.e=C.nm}catch(v){}if(s.e===C.nm){s.a0n(D.k0.bU(d))
s.av()
return}u=S.aOa(d)
if(u!=null){s.e=C.Jd
t=new A.akv(new A.a7C(B.aA(x.Y)))
B.dt(3,"retries")
t.An("GET",u,null).hx(0,new A.a7t(s),new A.a7u(s),x.P).jD(new A.a7v(t))}},
a0n(d){var w,v,u,t,s
this.f=new A.l_(d)
w=A.b3u(d)
if(w!=null){v=w.a
u=w.b
t=this.b
t.saT(0,A.aUs(w,4,3).a)
s=A.aJF(t.a.a).a5M(v,u)
this.r=new A.l_(new Uint8Array(B.eS(A.aLH(100).a1L(s))))}},
fh(d){var w=0,v=B.a2(x.z),u=this
var $async$fh=B.a3(function(e,f){if(e===1)return B.a_(f,v)
while(true)switch(w){case 0:w=2
return B.a5(H.mb(new H.jH(u.b.a.a)),$async$fh)
case 2:return B.a0(null,v)}})
return B.a1($async$fh,v)},
e8(d){var w=0,v=B.a2(x.z),u=this,t,s,r,q
var $async$e8=B.a3(function(e,f){if(e===1)return B.a_(f,v)
while(true)switch(w){case 0:w=2
return B.a5(H.nP("text/plain"),$async$e8)
case 2:q=f
if(q!=null){t=q.a
s=t==null
r=s?"":t
u.a.saT(0,r)
u.fC(s?"":t)}return B.a0(null,v)}})
return B.a1($async$e8,v)}}
A.qM.prototype={
j(d){return"ImageRepeat."+this.b}}
A.Ow.prototype={
a14(d){return new A.Ox(this,d)},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(J.Y(e)!==B.I(v))return!1
if(e instanceof A.Ow)if(e.a.k(0,v.a))if(e.d===v.d)if(e.e.k(0,v.e))w=!0
else w=!1
else w=!1
else w=!1
else w=!1
return w},
gD(d){return B.ag(this.a,null,this.d,this.e,null,C.dS,!1,1,1,E.kx,!1,!1,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a)},
j(d){var w=this,v=B.a([w.a.j(0)],x.s),u=!(w.d===K.Jl&&!0)
if(u)v.push(w.d.j(0))
v.push(w.e.j(0))
v.push("scale 1")
v.push("opacity 1")
v.push(E.kx.j(0))
return"DecorationImage("+D.d.bt(v,", ")+")"}}
A.Ox.prototype={
a3W(d,e,f,g){var w,v,u,t,s=this,r=null,q=s.a,p=q.a.a5(g),o=p.a
if(o==null)o=p
w=s.c
v=w==null
if(v)u=r
else{u=w.a
if(u==null)u=w}if(o!==u){t=new I.iY(s.gWO(),r)
if(!v)w.a8(0,t)
s.c=p
p.az(0,t)}if(s.d==null)return
o=f!=null
if(o){d.ci(0)
d.ih(0,f)}w=s.d
v=w.a
A.b4z(q.e,d,r,r,w.c,E.kx,q.d,!1,v,!1,!1,1,e,C.dS,w.b)
if(o)d.c4(0)},
ajN(d,e){var w,v=this
if(J.h(v.d,d))return
w=v.d
if(w!=null)if(d.a.a36(w.a))w=d.c==w.c
else w=!1
else w=!1
if(w){d.a.p(0)
return}w=v.d
if(w!=null)w.a.p(0)
v.d=d
if(!e)v.b.$0()},
p(d){var w=this,v=w.c
if(v!=null)v.a8(0,new I.iY(w.gWO(),null))
v=w.d
if(v!=null)v.a.p(0)
w.d=null},
j(d){return"DecorationImagePainter(stream: "+B.e(this.c)+", image: "+B.e(this.d)+") for "+this.a.j(0)}}
A.oh.prototype={
a5(d){var w=new A.aex()
this.agl(d,new A.aev(this,d,w),new A.aew(this,d,w))
return w},
agl(d,e,f){var w,v,u,t,s,r={}
r.a=null
r.b=!1
w=new A.aes(r,f)
v=null
try{v=new T.d8(this,x.gP)}catch(s){u=B.ay(s)
t=B.b5(s)
w.$2(u,t)
return}J.a6c(v,new A.aer(r,this,e,w),x.H).lW(w)},
aAr(d,e,f,g){var w
if(e.a!=null){$.rj.ga2K().a50(0,f,new A.aet(e),g)
return}w=$.rj.ga2K().a50(0,f,new A.aeu(this,f),g)
if(w!=null)e.Qq(w)},
j(d){return"ImageConfiguration()"}}
A.l_.prototype={
k(d,e){if(e==null)return!1
if(J.Y(e)!==B.I(this))return!1
return e instanceof A.l_&&e.a===this.a&&!0},
gD(d){return B.ag(B.fV(this.a),1,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a)},
j(d){return"MemoryImage("+("<optimized out>#"+B.ca(this.a))+", scale: 1)"}}
A.asZ.prototype={}
A.jV.prototype={
fS(d){return new A.jV(this.a.fS(0),this.b,this.c)},
ga9w(){var w=this.a
return w.gbW(w)*w.gby(w)*4},
p(d){this.a.p(0)},
j(d){var w=this.c
w=w!=null?w+" ":""
return w+this.a.j(0)+" @ "+M.lY(this.b)+"x"},
gD(d){return B.ag(this.a,this.b,this.c,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a)},
k(d,e){var w=this
if(e==null)return!1
if(J.Y(e)!==B.I(w))return!1
return e instanceof A.jV&&e.a===w.a&&e.b===w.b&&e.c==w.c}}
A.aex.prototype={
Qq(d){var w,v=this
v.a=d
w=v.b
if(w!=null){v.b=null
d.f=!0
D.d.ah(w,d.ga_Q(d))
v.a.f=!1}},
az(d,e){var w=this.a
if(w!=null)return w.az(0,e)
w=this.b;(w==null?this.b=B.a([],x.v):w).push(e)},
a8(d,e){var w,v=this.a
if(v!=null)return v.a8(0,e)
for(w=0;v=this.b,w<v.length;++w)if(J.h(v[w],e)){v=this.b
v.toString
D.d.fF(v,w)
break}}}
A.aey.prototype={
p(d){var w=this.a;--w.r
w.A6()
this.a=null}}
A.qN.prototype={
az(d,e){var w,v,u,t,s,r=this
if(r.w)B.M(B.af(y.a))
r.e=!0
r.a.push(e)
u=r.b
if(u!=null)try{u=u.fS(0)
t=r.f
e.a.$2(u,!t)}catch(s){w=B.ay(s)
v=B.b5(s)
r.a5n(B.c1("by a synchronously-called image listener"),w,v)}},
NK(){if(this.w)B.M(B.af(y.a));++this.r
return new A.aey(this)},
a8(d,e){var w,v,u,t,s,r=this
if(r.w)B.M(B.af(y.a))
for(w=r.a,v=0;v<w.length;++v)if(J.h(w[v],e)){D.d.fF(w,v)
break}if(w.length===0){w=r.x
u=B.a(w.slice(0),B.ae(w))
for(t=u.length,s=0;s<u.length;u.length===t||(0,B.F)(u),++s)u[s].$0()
D.d.sm(w,0)
r.A6()}},
A6(){var w,v=this
if(!v.e||v.w||v.a.length!==0||v.r!==0)return
w=v.b
if(w!=null)w.a.p(0)
v.b=null
v.w=!0},
asl(d){if(this.w)B.M(B.af(y.a))
this.x.push(d)},
aA8(d){if(this.w)B.M(B.af(y.a))
D.d.P(this.x,d)},
a93(d){var w,v,u,t,s,r,q,p,o,n,m=this
if(m.w)B.M(B.af(y.a))
t=m.b
if(t!=null)t.a.p(0)
m.b=d
t=m.a
if(t.length===0)return
s=B.al(t,!0,x.cE)
for(t=s.length,r=d.a,q=d.b,p=d.c,o=0;o<t;++o){w=s[o]
try{w.ayc(new A.jV(r.fS(0),q,p),!1)}catch(n){v=B.ay(n)
u=B.b5(n)
m.a5n(B.c1("by an image listener"),v,u)}}},
FB(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m="image resource service"
this.c=new B.cc(e,h,m,d,f,g)
s=this.a
r=x.fm
q=B.al(new B.eO(new B.aD(s,new A.aez(),B.ae(s).i("aD<1,~(r,cv?)?>")),r),!0,r.i("p.E"))
w=!1
for(s=q.length,p=0;p<s;++p){v=q[p]
try{v.$2(e,h)
w=!0}catch(o){u=B.ay(o)
t=B.b5(o)
if(!J.h(u,e)){r=B.c1("when reporting an error to an image listener")
n=$.jA()
if(n!=null)n.$1(new B.cc(u,t,m,r,null,!1))}}}if(!w){s=this.c
s.toString
B.eB(s)}},
a5n(d,e,f){return this.FB(d,e,null,!1,f)}}
A.TM.prototype={
ae6(d,e,f,g,h){this.d=f
e.hx(0,this.gajd(),new A.ah5(this,g),x.H)},
aje(d){this.z=d
if(this.a.length!==0)this.qt()},
aj2(d){var w,v,u,t=this,s="_shownTimestamp"
t.cx=!1
if(t.a.length===0)return
w=t.ay
if(w!=null){w=B.b(t.ax,s).a
v=t.ay
w=d.a-w>=v.a}else{v=w
w=!0}if(w){w=t.at
t.VO(new A.jV(w.giG(w).fS(0),t.Q,t.d))
t.ax=d
w=t.at
t.ay=w.gC5(w)
w=t.at
w.giG(w).p(0)
t.at=null
w=t.ch
v=t.z
u=D.b.dv(w,v.gnJ(v))
w=t.z
if(w.gpS(w)!==-1){w=t.z
w=u<=w.gpS(w)}else w=!0
if(w)t.qt()
return}v.toString
t.CW=B.cH(new B.b4(D.e.be((v.a-(d.a-B.b(t.ax,s).a))*$.aQ1)),new A.ah4(t))},
qt(){var w=0,v=B.a2(x.H),u,t=2,s,r=[],q=this,p,o,n,m,l
var $async$qt=B.a3(function(d,e){if(d===1){s=e
w=t}while(true)switch(w){case 0:m=q.at
if(m!=null)m.giG(m).p(0)
q.at=null
t=4
w=7
return B.a5(q.z.lv(),$async$qt)
case 7:q.at=e
t=2
w=6
break
case 4:t=3
l=s
p=B.ay(l)
o=B.b5(l)
q.FB(B.c1("resolving an image frame"),p,null,!0,o)
w=1
break
w=6
break
case 3:w=2
break
case 6:m=q.z
if(m.gnJ(m)===1){if(q.a.length===0){w=1
break}m=q.at
q.VO(new A.jV(m.giG(m).fS(0),q.Q,q.d))
m=q.at
m.giG(m).p(0)
q.at=null
w=1
break}q.YB()
case 1:return B.a0(u,v)
case 2:return B.a_(s,v)}})
return B.a1($async$qt,v)},
YB(){if(this.cx)return
this.cx=!0
$.c6.a8M(this.gaj1())},
VO(d){this.a93(d);++this.ch},
az(d,e){var w,v=this
if(v.a.length===0){w=v.z
if(w!=null)w=v.b==null||w.gnJ(w)>1
else w=!1}else w=!1
if(w)v.qt()
v.aaU(0,e)},
a8(d,e){var w,v=this
v.aaV(0,e)
if(v.a.length===0){w=v.CW
if(w!=null)w.bf(0)
v.CW=null}},
A6(){this.aaT()
if(this.w)this.y=null}}
A.a0e.prototype={}
A.a0d.prototype={}
A.Eo.prototype={
sasJ(d,e){if(this.E===e)return
this.E=e
this.ap()},
bH(d){var w
if(isFinite(d))return d*this.E
w=this.C$
if(w!=null)return w.ao(N.Z,d,w.gbA())
return 0},
bv(d){var w
if(isFinite(d))return d*this.E
w=this.C$
if(w!=null)return w.ao(N.a2,d,w.gbE())
return 0},
bz(d){var w
if(isFinite(d))return d/this.E
w=this.C$
if(w!=null)return w.ao(N.ad,d,w.gbT())
return 0},
bG(d){var w
if(isFinite(d))return d/this.E
w=this.C$
if(w!=null)return w.ao(N.bd,d,w.gcs())
return 0},
Uk(d){var w,v,u,t,s=d.a,r=d.b
if(s>=r&&d.c>=d.d)return new B.V(D.b.u(0,s,r),D.b.u(0,d.c,d.d))
w=this.E
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
v=t}return d.bK(new B.V(s,v))},
d2(d){return this.Uk(d)},
cA(){var w,v=this,u=v.Uk(x.h.a(M.z.prototype.gaA.call(v)))
v.k1=u
w=v.C$
if(w!=null)w.il(0,M.us(u))}}
A.A7.prototype={
bk(d){var w=new A.Eo(this.e,null,M.aG(x.m))
w.gb4()
w.gbh()
w.CW=!1
w.sbJ(null)
return w},
bn(d,e){e.sasJ(0,this.e)}}
A.akv.prototype={
eS(d,e){return this.a8V(0,e)},
a8V(a5,a6){var w=0,v=B.a2(x.n),u,t=2,s,r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$eS=B.a3(function(a7,a8){if(a7===1){s=a8
w=t}while(true)switch(w){case 0:a6.GV()
p=new A.Fv(new A.nM(A.aDn(a6.y,x.L)),B.a([],x.O),B.aA(x.er),new A.Qe(new B.bc(new B.an($.as,x._),x.gf),[],x.d),x.cB)
o=0
k=x.z,j=a6.r,i=q.a,h=a6.a,g=a6.b
case 3:if(!!0){w=4
break}n=null
t=6
f=J.aJ2(p)
e=A.aYS(h,g)
d=a6.y
e.zn()
e.c=d.length
e.zn()
e.e=!0
e.r.Z(0,j)
d=a6.f
e.zn()
e.f=d
e.zn()
e.d=!0
d=e.x
a0=B.q(d).i("tK<1>")
a1=new I.tK(d,a0)
a2=new I.tK(d,a0)
f.a.Ut(a1.gne(a1),new I.tK(d,a0).gase(),a2.gr0(a2),!0)
w=9
return B.a5(i.eS(0,e),$async$eS)
case 9:n=a8
t=2
w=8
break
case 6:t=5
a4=s
m=B.ay(a4)
l=B.b5(a4)
if(J.h(o,3)||!A.aPv(m,l))throw a4
w=8
break
case 5:w=2
break
case 8:if(n!=null){if(J.h(o,3)||!A.aPu(n)){u=n
w=1
break}n.w.a.mq(new A.akw(),null,null,null).bf(0).lW(new A.akx())}w=10
return B.a5(B.acn(A.aPs(o),k),$async$eS)
case 10:++o
w=3
break
case 4:case 1:return B.a0(u,v)
case 2:return B.a_(s,v)}})
return B.a1($async$eS,v)}}
A.a7f.prototype={
An(d,e,f){return this.aq9(d,e,f)},
aq9(d,e,f){var w=0,v=B.a2(x.q),u,t=this,s,r
var $async$An=B.a3(function(g,h){if(g===1)return B.a_(h,v)
while(true)switch(w){case 0:s=A.aYg(d,e)
r=A
w=3
return B.a5(t.eS(0,s),$async$An)
case 3:u=r.akl(h)
w=1
break
case 1:return B.a0(u,v)}})
return B.a1($async$An,v)}}
A.KX.prototype={
Dq(){if(this.w)throw B.c(B.af("Can't finalize a finalized Request."))
this.w=!0
return C.JW},
zn(){if(!this.w)return
throw B.c(B.af("Can't modify a finalized Request."))},
j(d){return this.a+" "+this.b.j(0)}}
A.q1.prototype={
RN(d,e,f,g,h,i,j){var w=this.b
if(w<100)throw B.c(B.bs("Invalid status code "+w+".",null))}}
A.a7C.prototype={
eS(d,e){return this.a8U(0,e)},
a8U(d,e){var w=0,v=B.a2(x.n),u,t=2,s,r=[],q=this,p,o,n,m,l,k,j
var $async$eS=B.a3(function(f,g){if(f===1){s=g
w=t}while(true)switch(w){case 0:w=3
return B.a5(e.Dq().a5I(),$async$eS)
case 3:l=g
k=new XMLHttpRequest()
j=q.a
j.H(0,k)
o=k
J.aIH(o,e.a,e.b.j(0),!0)
o.responseType="arraybuffer"
o.withCredentials=!1
e.r.ah(0,J.aIc(k))
p=new B.bc(new B.an($.as,x.ci),x.eP)
o=x.hg
n=new B.pt(k,"load",!1,o)
m=x.H
n.gU(n).co(0,new A.a7D(k,p,e),m)
o=new B.pt(k,"error",!1,o)
o.gU(o).co(0,new A.a7E(p,e),m)
J.aIT(k,l)
t=4
w=7
return B.a5(p.a,$async$eS)
case 7:o=g
u=o
r=[1]
w=5
break
r.push(6)
w=5
break
case 4:r=[2]
case 5:t=2
j.P(0,k)
w=r.pop()
break
case 6:case 1:return B.a0(u,v)
case 2:return B.a_(s,v)}})
return B.a1($async$eS,v)},
d1(d){var w,v,u
for(w=this.a,w=B.dL(w,w.r,B.q(w).c),v=w.$ti.c;w.t();){u=w.d;(u==null?v.a(u):u).abort()}}}
A.nM.prototype={
a5I(){var w=new B.an($.as,x.fg),v=new B.bc(w,x.Z),u=new A.Zw(new A.a7K(v),new Uint8Array(1024))
this.mq(u.gne(u),!0,u.gr0(u),v.ga0E())
return w}}
A.M5.prototype={
j(d){return this.a},
$ibK:1}
A.akk.prototype={
Dq(){this.GV()
return new A.nM(A.aDn(this.y,x.L))}}
A.ry.prototype={}
A.aoJ.prototype={
Dq(){this.GV()
var w=this.x
return new A.nM(new I.jn(w,B.q(w).i("jn<1>")))}}
A.rU.prototype={}
A.BE.prototype={
adV(d){}}
A.un.prototype={
j(d){return"BitmapCompression."+this.b}}
A.a7k.prototype={
mE(){return B.ad(["offset",B.b(this.b,"offset"),"fileLength",B.b(this.a,"fileLength"),"fileType",19778],x.N,x.p)}}
A.q6.prototype={
gEK(){var w=this.r
if(w!==40)w=w===124&&this.cx===0
else w=!0
return w},
gbW(d){return Math.abs(this.e)},
RT(d,e){var w=this
if(D.d.v(B.a([1,4,8],x.t),w.x))w.azK(d)
if(w.r===124){w.ay=d.K()
w.ch=d.K()
w.CW=d.K()
w.cx=d.K()}},
azK(d){var w=this,v=w.at
if(v===0)v=D.b.bS(1,w.x)
w.cy=A.aLD(v,new A.a7x(w,d,w.r===12?3:4),x.p).eA(0)},
Jr(d,e){var w,v,u,t
if(!D.b.grS(this.e)){w=d.aP()
v=d.aP()
u=d.aP()
t=e==null?d.aP():e
return A.ny(u,v,w,this.gEK()?255:t)}else{u=d.aP()
w=d.aP()
v=d.aP()
t=e==null?d.aP():e
return A.ny(u,w,v,this.gEK()?255:t)}},
Yd(d){return this.Jr(d,null)},
auw(d,e){var w,v,u,t,s=this
if(s.cy!=null){w=s.x
if(w===4){v=d.aP()
u=D.b.B(v,4)
e.$1(s.cy[u])
e.$1(s.cy[v&15])
return}else if(w===8){v=d.aP()
e.$1(s.cy[v])
return}}w=s.y
if(w===C.jU&&s.x===32)return e.$1(s.Yd(d))
else{t=s.x
if(t===32&&w===C.jV)return e.$1(s.Yd(d))
else if(t===24)return e.$1(s.Jr(d,255))
else throw B.c(A.ah("Unsupported bpp ("+t+") or compression ("+w.j(0)+")."))}},
afX(){switch(this.y.a){case 0:return"BI_BITFIELDS"
case 1:return"none"}},
j(d){var w=this
return B.aDT(B.ad(["headerSize",w.r,"width",w.f,"height",w.gbW(w),"planes",w.w,"bpp",w.x,"file",w.d.mE(),"compression",w.afX(),"imageSize",w.z,"xppm",w.Q,"yppm",w.as,"totalColors",w.at,"importantColors",w.ax,"readBottomUp",!D.b.grS(w.e),"v5redMask",A.az0(w.ay),"v5greenMask",A.az0(w.ch),"v5blueMask",A.az0(w.CW),"v5alphaMask",A.az0(w.cx)],x.N,x.ez),null," ")}}
A.Lb.prototype={
lD(d){var w,v=null
if(!A.a7l(A.be(d,!1,v,0)))return v
w=A.be(d,!1,v,0)
this.a=w
return this.b=A.aUt(B.b(w,"_input"),v)},
hm(d){var w,v,u,t,s,r,q,p,o,n,m,l=this
B.b(l.a,"_input").d=B.b(l.b.d.b,"offset")
w=l.b
v=w.f
u=D.b.B(v*w.x,3)
t=D.b.cd(u,4)
if(t!==0)u+=4-t
s=A.jU(v,w.gbW(w),C.br)
for(r=s.b-1,w=s.a,q=r;q>=0;--q){v=l.b.e
p=!(v===0?1/v<0:v<0)?q:r-q
v=B.b(l.a,"_input")
o=v.e2(u)
v.d=v.d+(o.c-o.d)
n={}
for(n.a=0;n.a<w;m={},m.a=n.a,n=m)l.b.auw(o,new A.a7w(n,s,p))}return s},
jh(d){if(!A.a7l(A.be(d,!1,null,0)))return null
this.lD(d)
return this.hm(0)}}
A.a9o.prototype={}
A.a9c.prototype={}
A.a9e.prototype={}
A.aaF.prototype={}
A.Pp.prototype={
gae(d){return this.a}}
A.QX.prototype={
xm(){return this.r},
jC(d,e,f,g,h){throw B.c(A.ah("B44 compression not yet supported."))},
tC(d,e,f){return this.jC(d,e,f,null,null)}}
A.Pq.prototype={
gjB(d){return B.b(this.b,"type")},
adW(d){var w=this,v=d.xR()
w.a=v
if(v.length===0){w.a=null
return}w.b=d.K()
d.aP()
d.d+=3
w.e=d.K()
w.f=d.K()
switch(B.b(w.b,"type")){case 0:w.c=4
break
case 1:w.c=2
break
case 2:w.c=4
break
default:throw B.c(A.ah("EXR Invalid pixel type: "+w.gjB(w)))}},
gae(d){return this.a}}
A.abf.prototype={
jC(d,e,f,g,h){throw B.c(A.ah("Unsupported compression type"))},
tC(d,e,f){return this.jC(d,e,f,null,null)}}
A.aeS.prototype={}
A.Pr.prototype={}
A.abh.prototype={
adX(d){var w,v,u,t,s=this,r="flags",q=A.be(d,!1,null,0)
if(q.K()!==20000630)throw B.c(A.ah("File is not an OpenEXR image file."))
w=s.e=q.aP()
if(w!==2)throw B.c(A.ah("Cannot read version "+w+" image files."))
w=q.jx()
s.f=w
if((B.b(w,r)&4294967289)>>>0!==0)throw B.c(A.ah("The file format version number's flag field contains unrecognized flags."))
if((B.b(s.f,r)&16)===0){v=A.aLw((B.b(s.f,r)&2)!==0,q)
if(v.f!=null)s.d.push(v)}else for(w=s.d;!0;){v=A.aLw((B.b(s.f,r)&2)!==0,q)
if(v.f==null)break
w.push(v)}w=s.d
u=w.length
if(u===0)throw B.c(A.ah("Error reading image header"))
for(t=0;t<w.length;w.length===u||(0,B.F)(w),++t)w[t].azJ(q)
s.aoS(q)},
aoS(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.d,v=0;v<w.length;++v){u=w[v]
t=u.a
for(s=u.b,r=t.a,q=0;q<s.length;++q){p=s[q]
if(!r.am(0,p.a)){o=u.f
o.toString
j.a=o
n=u.r
n.toString
j.b=n
m=p.a
l=B.b(p.b,"type")===0?0:3
k=8*B.b(p.c,"size")
t.v6(new A.C4(m,o,n,l,k,A.aLc(o*n,l,k)))}}if(u.cx)j.ap0(v,d)
else j.ap_(v,d)}},
ap0(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=a5.d[b5],a7=(B.b(a5.f,"flags")&16)!==0,a8=a6.ay,a9=a6.at,b0=A.aB(b6,null,0),b1=a6.b,b2=a6.a.a,b3=0,b4=0
while(!0){w=a6.go
w.toString
if(!(b3<w))break
v=0
while(!0){w=a6.fy
w.toString
if(!(v<w))break
for(w=b4!==0,u=0,t=0;u<a6.fx[b3];++u)for(s=0;s<a6.fr[v];++s,++t){if(w)break
b0.d=a9[b4][t]
if(a7)if(b0.K()!==b5)throw B.c(A.ah("Invalid Image Data"))
r=b0.K()
q=b0.K()
b0.K()
b0.K()
p=b0.e2(b0.K())
b0.d=b0.d+(p.c-p.d)
o=a6.db
o.toString
n=q*o
m=a6.cy
m.toString
a8.toString
a5.a
a5.b
l=a8.jC(p,r*m,n,m,o)
k=a8.a
j=a8.b
i=l.length
h=b1.length
g=0
f=0
while(!0){if(!(f<j&&n<a5.b))break
for(e=0;e<h;++e){d=b1[e]
o=b2.h(0,d.a).f.buffer
a0=new Uint8Array(o,0)
if(g>=i)break
o=a6.cy
o.toString
a1=r*o
for(a2=0;a2<k;++a2,++a1)for(a3=0;a3<B.b(d.c,"size");++a3,g=a4){o=a6.f
o.toString
if(a1<o){m=a6.r
m.toString
m=n<m}else m=!1
a4=g+1
if(m)a0[(n*o+a1)*B.b(d.c,"size")+a3]=l[g]}}++f;++n}}++v;++b4}++b3}},
ap_(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.d[a7],d=(B.b(this.f,"flags")&16)!==0,a0=e.ay,a1=e.at[0],a2=e.ch,a3=e.b,a4=a3.length,a5=new Uint32Array(a4),a6=A.aB(a8,null,0)
for(a4=a1.length,w=e.a.a,v=a0!=null,u=0,t=0;t<a4;++t){a6.d=a1[t]
if(d)if(a6.K()!==a7)throw B.c(A.ah("Invalid Image Data"))
s=a6.K()
r=$.cN()
r[0]=s
s=$.eU()
s[0]
r[0]=a6.K()
q=a6.e2(s[0])
a6.d=a6.d+(q.c-q.d)
p=v?a0.tC(q,0,u):q.eP()
o=p.length
n=a3.length
a2.toString
m=0
while(!0){if(!(m<a2&&u<this.b))break
l=e.CW[u]
if(l>=o)break
for(k=0;k<n;++k){j=a3[k]
s=w.h(0,j.a).f.buffer
i=new Uint8Array(s,0)
if(l>=o)break
h=0
while(!0){s=e.f
s.toString
if(!(h<s))break
for(g=0;g<B.b(j.c,"size");++g,l=f){s=a5[k]
a5[k]=s+1
f=l+1
i[s]=p[l]}++h}}++m;++u}}}}
A.abi.prototype={
adY(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4="chromaticities",a5="dataWindow",a6="Unknown LevelMode format.",a7="_bytesPerLine"
for(w=a3.c,v=x.t,u=a3.b;!0;){t=a9.xR()
if(t.length===0)break
a9.xR()
s=a9.K()
r=a9.e2(s)
a9.d=a9.d+(r.c-r.d)
w.l(0,t,new A.Pp(t,s,r))
switch(t){case"channels":for(;!0;){q=new A.Pq()
q.adW(r)
if(q.a==null)break
u.push(q)}break
case"chromaticities":p=new Float32Array(8)
a3.Q=p
p=B.b(p,a4)
o=r.K()
n=$.cN()
n[0]=o
o=$.pP()
p[0]=o[0]
p=B.b(a3.Q,a4)
n[0]=r.K()
p[1]=o[0]
p=B.b(a3.Q,a4)
n[0]=r.K()
p[2]=o[0]
p=B.b(a3.Q,a4)
n[0]=r.K()
p[3]=o[0]
p=B.b(a3.Q,a4)
n[0]=r.K()
p[4]=o[0]
p=B.b(a3.Q,a4)
n[0]=r.K()
p[5]=o[0]
p=B.b(a3.Q,a4)
n[0]=r.K()
p[6]=o[0]
p=B.b(a3.Q,a4)
n[0]=r.K()
p[7]=o[0]
break
case"compression":p=r.a[r.d++]
a3.as=p
if(p>7)throw B.c(A.ah("EXR Invalid compression type"))
break
case"dataWindow":p=r.K()
o=$.cN()
o[0]=p
p=$.eU()
n=p[0]
o[0]=r.K()
m=p[0]
o[0]=r.K()
l=p[0]
o[0]=r.K()
p=B.a([n,m,l,p[0]],v)
a3.e=p
a3.f=J.a8(B.b(p,a5),2)-J.a8(B.b(a3.e,a5),0)+1
a3.r=J.a8(B.b(a3.e,a5),3)-J.a8(B.b(a3.e,a5),1)+1
break
case"displayWindow":p=r.K()
o=$.cN()
o[0]=p
p=$.eU()
p[0]
o[0]=r.K()
p[0]
o[0]=r.K()
p[0]
o[0]=r.K()
p[0]
break
case"lineOrder":break
case"pixelAspectRatio":p=r.K()
$.cN()[0]=p
$.pP()[0]
break
case"screenWindowCenter":p=r.K()
o=$.cN()
o[0]=p
p=$.pP()
p[0]
o[0]=r.K()
p[0]
break
case"screenWindowWidth":p=r.K()
$.cN()[0]=p
$.pP()[0]
break
case"tiles":a3.cy=r.K()
a3.db=r.K()
p=r.a[r.d++]
a3.dx=p&15
a3.dy=D.b.B(p,4)&15
break
case"type":k=r.xR()
if(k!=="deepscanline")if(k!=="deeptile")throw B.c(A.ah("EXR Invalid type: "+k))
break
default:break}}if(a3.cx){w=J.a8(B.b(a3.e,a5),0)
v=J.a8(B.b(a3.e,a5),2)
u=J.a8(B.b(a3.e,a5),1)
p=J.a8(B.b(a3.e,a5),3)
switch(a3.dx){case 0:j=1
break
case 1:w=Math.max(v-w+1,p-u+1)
j=(a3.dy===0?a3.zI(w):a3.zm(w))+1
break
case 2:i=v-w+1
j=(a3.dy===0?a3.zI(i):a3.zm(i))+1
break
default:B.M(A.ah(a6))
j=0}a3.fy=j
w=J.a8(B.b(a3.e,a5),0)
v=J.a8(B.b(a3.e,a5),2)
u=J.a8(B.b(a3.e,a5),1)
p=J.a8(B.b(a3.e,a5),3)
switch(a3.dx){case 0:j=1
break
case 1:w=Math.max(v-w+1,p-u+1)
j=(a3.dy===0?a3.zI(w):a3.zm(w))+1
break
case 2:h=p-u+1
j=(a3.dy===0?a3.zI(h):a3.zm(h))+1
break
default:B.M(A.ah(a6))
j=0}a3.go=j
if(a3.dx!==2)a3.go=1
w=a3.fy
w.toString
a3.fr=a3.UB(w,J.a8(B.b(a3.e,a5),0),J.a8(B.b(a3.e,a5),2),a3.cy,a3.dy)
w=a3.go
w.toString
a3.fx=a3.UB(w,J.a8(B.b(a3.e,a5),1),J.a8(B.b(a3.e,a5),3),a3.db,a3.dy)
w=a3.afs()
a3.id=w
w=B.b(w,"_bytesPerPixel")
v=a3.cy
v.toString
v=w*v
a3.k1=v
a3.ay=A.aKG(a3.as,a3,v,a3.db)
b0.a=b0.b=0
v=a3.fy
v.toString
w=a3.go
w.toString
a3.at=B.RF(v*w,new A.abj(b0,a3),!0,x.bv)}else{w=a3.r
w.toString
a3.ax=new Uint32Array(w+1)
for(w=u.length,g=0;g<u.length;u.length===w||(0,B.F)(u),++g){f=u[g]
v=B.b(f.c,"size")
p=a3.f
p.toString
e=D.b.dv(v*p,B.b(f.e,"xSampling"))
d=0
while(!0){v=a3.r
v.toString
if(!(d<v))break
if(D.b.cd(d+J.a8(B.b(a3.e,a5),1),B.b(f.f,"ySampling"))===0){v=B.b(a3.ax,a7)
v[d]=v[d]+e}++d}}a0=0
d=0
while(!0){w=a3.r
w.toString
if(!(d<w))break
a0=Math.max(a0,B.b(a3.ax,a7)[d]);++d}w=A.aKG(a3.as,a3,a0,null)
a3.ay=w
a3.ch=w.xm()
w=B.b(a3.ax,a7).length
a3.CW=new Uint32Array(w)
for(a1=0,a2=0;a2<=B.b(a3.ax,a7).length-1;++a2){w=a3.ch
w.toString
if(D.b.cd(a2,w)===0)a1=0
a3.CW[a2]=a1
a1+=B.b(a3.ax,a7)[a2]}w=a3.r
w.toString
v=a3.ch
v.toString
v=D.b.dv(w+v,v)
a3.at=B.a([new Uint32Array(v-1)],x.w)}},
zI(d){var w
for(w=0;d>1;){++w
d=D.b.B(d,1)}return w},
zm(d){var w,v
for(w=0,v=0;d>1;){if((d&1)!==0)v=1;++w
d=D.b.B(d,1)}return w+v},
afs(){var w,v,u,t
for(w=this.b,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,B.F)(w),++t)u+=B.b(w[t].c,"size")
return u},
UB(d,e,f,g,h){var w,v,u,t,s,r,q=J.ij(d,x.p)
for(w=h===1,v=f-e+1,u=0;u<d;++u){t=D.b.bS(1,u)
s=D.b.dv(v,t)
if(w&&s*t<v)++s
r=Math.max(s,1)
g.toString
q[u]=D.b.dv(r+g-1,g)}return q}}
A.QY.prototype={
azJ(d){var w,v,u,t,s=this
if(s.cx)for(w=0;w<s.at.length;++w)for(v=0;u=s.at[w],v<u.length;++v)u[v]=d.OH()
else{t=s.at[0].length
for(w=0;w<t;++w)s.at[0][w]=d.OH()}}}
A.aeT.prototype={
ae2(d,e,f){var w,v,u,t=this,s=d.b.length,r=J.ij(s,x.aX)
for(w=0;w<s;++w)r[w]=new A.a1t()
t.y=r
v=t.w
v.toString
u=D.b.bC(v*t.x,2)
t.z=new Uint16Array(u)},
xm(){return this.x},
jC(a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3="_channelData",a4="ySampling",a5="size",a6="nx"
if(b0==null)b0=a2.c.f
if(b1==null)b1=a2.c.ch
b0.toString
w=a8+b0-1
b1.toString
v=a9+b1-1
u=a2.c
t=u.f
t.toString
if(w>t)w=t-1
t=u.r
t.toString
if(v>t)v=t-1
a2.a=w-a8+1
a2.b=v-a9+1
s=u.b
r=s.length
for(q=0,p=0;p<r;++p){o=s[p]
u=J.a8(B.b(a2.y,a3),p)
u.toString
u.a=q
u.b=B.b(q,"start")
t=B.b(o.e,"xSampling")
n=D.b.dv(a8,t)
m=D.b.dv(w,t)
t=n*t<a8?0:1
u.c=m-n+t
t=B.b(o.f,a4)
n=D.b.dv(a9,t)
m=D.b.dv(v,t)
t=n*t<a9?0:1
u.d=m-n+t
u.e=B.b(o.f,a4)
u.f=D.b.bC(B.b(o.c,a5),2)
q+=B.b(u.c,a6)*B.b(u.d,"ny")*B.b(u.f,a5)}l=a7.T()
k=a7.T()
if(k>=8192)throw B.c(A.ah("Error in header for PIZ-compressed data (invalid bitmap size)."))
j=new Uint8Array(8192)
if(l<=k){i=a7.fE(k-l+1)
for(u=i.d,h=i.c-u,t=i.a,g=l,p=0;p<h;++p,g=f){f=g+1
j[g]=t[u+p]}}e=new Uint16Array(65536)
d=a2.apz(j,e)
A.aVV(a7,a7.K(),a2.z,q)
for(p=0;p<r;++p){u=J.a8(B.b(a2.y,a3),p)
u.toString
for(g=0;g<B.b(u.f,a5);++g){t=a2.z
t.toString
A.aVY(t,B.b(u.a,"start")+g,B.b(u.c,a6),B.b(u.f,a5),B.b(u.d,"ny"),B.b(u.c,a6)*B.b(u.f,a5),d)}}u=a2.z
u.toString
a2.af1(e,u,q)
u=a2.r
if(u==null){u=a2.w
u.toString
u=a2.r=A.Um(!1,u*a2.x+73728)}u.a=0
for(;a9<=v;++a9)for(p=0;p<r;++p){u=J.a8(B.b(a2.y,a3),p)
u.toString
if(D.b.cd(a9,B.b(u.e,"ys"))!==0)continue
for(a8=B.b(u.c,a6)*B.b(u.f,a5);a8>0;--a8){t=a2.r
t.toString
a0=a2.z
a0.toString
a1=B.b(u.b,"end")
u.b=a1+1
t.jG(a0[a1])}}u=a2.r
return B.bP(u.c.buffer,0,u.a)},
tC(d,e,f){return this.jC(d,e,f,null,null)},
af1(d,e,f){var w
for(w=0;w<f;++w)e[w]=d[e[w]]},
apz(d,e){var w,v,u,t
for(w=0,v=0;v<65536;++v)if(v===0||(d[v>>>3]&1<<(v&7))>>>0!==0){u=w+1
e[w]=v
w=u}for(u=w;u<65536;u=t){t=u+1
e[u]=0}return w-1}}
A.a1t.prototype={}
A.aeU.prototype={
xm(){return this.x},
jC(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=C.eL.vH(A.vF(a1.eP(),1,null,0),!1),a0=e.y
if(a0==null){a0=e.w
a0.toString
a0=e.y=A.Um(!1,e.x*a0)}a0.a=0
w=B.a([0,0,0,0],x.t)
v=new Uint32Array(1)
u=B.bP(v.buffer,0,null)
if(a4==null)a4=e.c.f
if(a5==null)a5=e.c.ch
a4.toString
t=a2+a4-1
a5.toString
s=a3+a5-1
a0=e.c
r=a0.f
r.toString
if(t>r)t=r-1
r=a0.r
r.toString
if(s>r)s=r-1
e.a=t-a2+1
e.b=s-a3+1
a0=a0.b
q=a0.length
for(p=a3,o=0;p<=s;++p)for(n=0;n<q;++n){m=a0[n]
if(D.b.cd(a3,B.b(m.f,"ySampling"))!==0)continue
r=B.b(m.e,"xSampling")
l=D.b.dv(a2,r)
k=D.b.dv(t,r)
r=l*r<a2?0:1
j=k-l+r
v[0]=0
switch(B.b(m.b,"type")){case 0:w[0]=o
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
for(f=0;f<4;++f)e.y.aJ(u[f])}break
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
for(f=0;f<2;++f)e.y.aJ(u[f])}break
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
for(f=0;f<4;++f)e.y.aJ(u[f])}break}}a0=e.y
return B.bP(a0.c.buffer,0,a0.a)},
tC(d,e,f){return this.jC(d,e,f,null,null)}}
A.aeV.prototype={
xm(){return 1},
jC(d,e,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=d.c,f=A.Um(!1,(g-d.d)*2)
if(a1==null)a1=h.c.f
if(a2==null)a2=h.c.ch
a1.toString
w=e+a1-1
a2.toString
v=a0+a2-1
u=h.c
t=u.f
t.toString
if(w>t)w=t-1
u=u.r
u.toString
if(v>u)v=u-1
h.a=w-e+1
h.b=v-a0+1
for(;u=d.d,u<g;){t=d.a
d.d=u+1
u=t[u]
$.hc()[0]=u
s=$.hC()[0]
if(s<0){r=-s
for(;q=r-1,r>0;r=q)f.aJ(d.a[d.d++])}else for(r=s;q=r-1,r>=0;r=q)f.aJ(d.a[d.d++])}p=B.bP(f.c.buffer,0,f.a)
for(o=p.length,n=1;n<o;++n)p[n]=p[n-1]+p[n]-128
g=h.r
if(g==null||g.length!==o)g=h.r=new Uint8Array(o)
u=D.b.bC(o+1,2)
for(m=0,l=0;!0;u=i,m=j){if(l<o){k=l+1
j=m+1
g[l]=p[m]}else break
if(k<o){l=k+1
i=u+1
g[k]=p[u]}else break}g.toString
return g},
tC(d,e,f){return this.jC(d,e,f,null,null)}}
A.QZ.prototype={
xm(){return this.w},
jC(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=C.eL.vH(A.vF(d.eP(),1,null,0),!1)
if(g==null)g=l.c.f
if(h==null)h=l.c.ch
g.toString
w=e+g-1
h.toString
v=f+h-1
u=l.c
t=u.f
t.toString
if(w>t)w=t-1
u=u.r
u.toString
if(v>u)v=u-1
l.a=w-e+1
l.b=v-f+1
for(s=k.length,r=1;r<s;++r)k[r]=k[r-1]+k[r]-128
u=l.x
if(u==null||u.length!==s)u=l.x=new Uint8Array(s)
t=D.b.bC(s+1,2)
for(q=0,p=0;!0;t=m,q=n){if(p<s){o=p+1
n=q+1
u[p]=k[q]}else break
if(o<s){p=o+1
m=t+1
u[o]=k[t]}else break}u.toString
return u},
tC(d,e,f){return this.jC(d,e,f,null,null)}}
A.abg.prototype={
hm(d){var w=this.a
if(w==null)return null
return A.b41(w.d[d].a,1)},
jh(d){var w=new A.abh(B.a([],x.V))
w.adX(d)
this.a=w
return this.hm(0)}}
A.acL.prototype={
h(d,e){return this.d[e]},
l(d,e,f){this.d[e]=f
return f},
Qp(d,e,f,g){var w=d*3,v=this.d
v[w]=e
v[w+1]=f
v[w+2]=g}}
A.BZ.prototype={
adZ(d){var w,v,u,t,s,r,q,p=this
p.a=d.T()
p.b=d.T()
p.c=d.T()
p.d=d.T()
w=d.aP()
p.e=(w&64)!==0
if((w&128)!==0){p.f=A.aL9(D.b.bS(1,(w&7)+1))
for(v=0;u=p.f,v<u.b;++v){t=d.a
s=d.d
r=d.d=s+1
s=t[s]
q=d.d=r+1
r=t[r]
d.d=q+1
u.Qp(v,s,r,t[q])}}p.x=d.d-d.b}}
A.R_.prototype={}
A.Qk.prototype={}
A.acM.prototype={
lD(d){var w,v,u,t,s,r,q,p,o,n=this
n.b=A.be(d,!1,null,0)
n.a=new A.Qk(B.a([],x.b))
if(!n.Wo())return null
try{for(;s=n.b,r=s.d,r<s.c;){q=s.a
p=s.d=r+1
w=q[r]
switch(w){case 44:v=n.Z2()
if(v==null){s=n.a
return s}n.a.r.push(v)
break
case 33:s.d=p+1
u=q[p]
if(J.h(u,255)){s=n.b
if(s.dJ(s.a[s.d++])==="NETSCAPE2.0"){r=s.a
q=s.d
p=s.d=q+1
q=r[q]
s.d=p+1
p=r[p]
if(q===3&&p===1)s.T()}else n.Aq()}else if(J.h(u,249)){s=n.b
s.toString
n.aoO(s)}else n.Aq()
break
case 59:s=n.a
return s
default:break}}}catch(o){t=B.ay(o)
B.m1(t)}return n.a},
aoO(d){var w,v,u,t,s
d.aP()
w=d.aP()
v=d.T()
u=d.aP()
d.aP()
D.b.B(w,2)
t=d.qg(1,0)
if(t.a[t.d]===44){++d.d
s=this.Z2()
if(s==null)return
s.r=v
if((w&1)!==0){t=s.f
if(t!=null)t.c=u
else{t=this.a.e
if(t!=null)t.c=u}}this.a.r.push(s)}},
hm(d){var w,v,u=this,t=u.b
if(t==null||u.a==null)return null
w=u.a.r
if(d>=w.length||!1)return null
v=w[d]
t.toString
t.d=B.b(v.x,"_inputPosition")
return u.agJ(u.a.r[d])},
jh(d){if(this.lD(d)==null)return null
return this.hm(0)},
Z2(){var w,v=this.b
if(v.d>=v.c)return null
w=new A.R_()
w.adZ(v);++this.b.d
this.Aq()
return w},
agJ(d){var w,v,u,t,s,r,q,p,o,n,m=this
if(m.d==null){m.d=new Uint8Array(256)
m.e=new Uint8Array(4095)
m.f=new Uint8Array(4096)
m.r=new Uint32Array(4096)}w=m.w=m.b.aP()
v=D.b.cI(1,w)
m.cx=v;++v
m.CW=v
m.ch=v+1;++w
m.ay=w
m.ax=D.b.cI(1,w)
m.Q=0
m.at=4098
m.y=m.z=0
m.d[0]=0
w=m.r
w.toString
D.bv.hT(w,0,4096,4098)
w=B.b(d.c,"width")
v=B.b(d.d,"height")
u=B.b(d.a,"x")
t=m.a
if(!(u+w>t.a)){u=B.b(d.b,"y")
t=m.a
u=u+v>t.b}else u=!0
if(u)return null
s=d.f
s=s!=null?s:t.e
m.x=w*v
r=A.jU(w,v,C.br)
q=new Uint8Array(w)
if(B.b(d.e,"interlaced")){w=B.b(d.b,"y")
for(v=w+v,p=0,o=0;p<4;++p)for(n=w+C.Sa[p];n<v;n+=C.Uo[p],++o){if(!m.Wq(q))return r
m.ZW(r,n,s,q)}}else for(n=0;n<v;++n){if(!m.Wq(q))return r
m.ZW(r,n,s,q)}return r},
ZW(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
if(f!=null)for(w=g.length,v=f.d,u=d.x,t=e*d.a,s=0;s<w;++s){r=g[s]
q=r*3
p=r===f.c?0:255
r=v[q]
o=v[q+1]
n=v[q+2]
u[t+s]=(D.e.a0(D.b.u(p,0,255))<<24|D.e.a0(D.b.u(n,0,255))<<16|D.e.a0(D.b.u(o,0,255))<<8|D.e.a0(D.b.u(r,0,255)))>>>0}},
Wo(){var w,v,u,t,s,r,q,p,o=this,n=o.b.dJ(6)
if(n!=="GIF87a"&&n!=="GIF89a")return!1
w=o.a
w.toString
w.a=o.b.T()
w=o.a
w.toString
w.b=o.b.T()
v=o.b.aP()
o.a.toString
o.b.aP();++o.b.d
if((v&128)!==0){w=o.a
w.toString
w.e=A.aL9(D.b.bS(1,(v&7)+1))
for(u=0;w=o.a.e,u<w.b;++u){t=o.b
s=t.a
r=t.d
q=t.d=r+1
r=s[r]
p=t.d=q+1
q=s[q]
t.d=p+1
w.Qp(u,r,q,s[p])}}o.a.toString
return!0},
Wq(d){var w=this,v=w.x
v.toString
w.x=v-d.length
if(!w.agR(d))return!1
if(w.x===0)w.Aq()
return!0},
Aq(){var w,v,u,t=this.b
if(t.d>=t.c)return!0
w=t.aP()
while(!0){if(w!==0){t=this.b
t=t.d<t.c}else t=!1
if(!t)break
t=this.b
v=t.d+=w
if(v>=t.c)return!0
u=t.a
t.d=v+1
w=u[v]}return!0},
agR(d){var w,v,u,t,s,r,q,p,o,n,m=this,l="_stack",k="_suffix",j=m.Q
if(j>4095)return!1
w=d.length
if(j!==0){v=0
while(!0){if(!(j!==0&&v<w))break
u=v+1
j=B.b(m.e,l)
t=--m.Q
d[v]=j[t]
j=t
v=u}}else v=0
for(;v<w;){s=m.as=m.agQ()
if(s==null)return!1
j=m.CW
if(s===j)return!1
t=m.cx
if(s===t){for(t=m.r,r=0;r<=4095;++r)t[r]=4098
m.ch=j+1
j=m.w+1
m.ay=j
m.ax=D.b.cI(1,j)
m.at=4098}else{if(s<t){u=v+1
d[v]=s
v=u}else{if(m.r[s]===4098)if(s===m.ch-2){s=m.at
j=B.b(m.f,k)
t=m.ch
q=B.b(m.e,l)
p=m.Q++
o=m.IF(m.r,m.at,m.cx)
q[p]=o
j[t-2]=o}else return!1
r=0
while(!0){n=r+1
if(!(r<=4095&&s>m.cx&&s<=4095))break
B.b(m.e,l)[m.Q++]=B.b(m.f,k)[s]
s=m.r[s]
r=n}if(n>=4095||s>4095)return!1
j=B.b(m.e,l)
t=m.Q
q=m.Q=t+1
j[t]=s
j=q
while(!0){if(!(j!==0&&v<w))break
u=v+1
j=B.b(m.e,l)
t=--m.Q
d[v]=j[t]
j=t
v=u}}j=m.at
if(j!==4098&&m.r[m.ch-2]===4098){t=m.r
q=m.ch-2
t[q]=j
j=m.as
t=m.f
if(j===q)B.b(t,k)[m.ch-2]=m.IF(m.r,m.at,m.cx)
else{j=B.b(t,k)
t=m.ch
q=m.r
p=m.as
p.toString
j[t-2]=m.IF(q,p,m.cx)}}j=m.as
j.toString
m.at=j}}return!0},
agQ(){var w,v,u,t,s=this
if(s.ay>12)return null
for(;w=s.z,v=s.ay,w<v;){w=s.af8()
w.toString
v=s.y
u=s.z
s.y=(v|D.b.cI(w,u))>>>0
s.z=u+8}u=s.y
t=C.Yr[v]
s.y=D.b.eX(u,v)
s.z=w-v
w=s.ch
if(w<4097){++w
s.ch=w
w=w>s.ax&&v<12}else w=!1
if(w){s.ax=s.ax<<1>>>0
s.ay=v+1}return u&t},
IF(d,e,f){var w,v,u=0
while(!0){if(e>f){w=u+1
v=u<=4095
u=w}else v=!1
if(!v)break
if(e>4095)return 4098
e=d[e]}return e},
af8(){var w,v,u=this,t=u.d,s=t[0]
if(s===0){t[0]=u.b.aP()
t=u.d
s=t[0]
if(s===0)return null
D.B.cF(t,1,1+s,u.b.fE(s).eP())
t=u.d
w=t[1]
t[1]=2
t[0]=t[0]-1}else{v=t[1]
t[1]=v+1
w=t[v]
t[0]=s-1}return w}}
A.ae7.prototype={
hm(a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=this.a
if(a8!=null){w=this.b
w=w==null||a9>=w.e}else w=!0
if(w)return a7
v=this.b.f[a9]
w=a8.a
a8=a8.b+v.e
u=v.d
t=J.a6b(w,a8,a8+u)
s=new A.V0()
if(s.rT(t))return s.jh(t)
r=A.Um(!1,14)
r.jG(19778)
r.G_(u)
r.G_(0)
r.G_(0)
a8=A.be(t,!1,a7,0)
w=A.aJA(A.be(B.bP(r.c.buffer,0,r.a),!1,a7,0))
u=a8.K()
q=a8.K()
p=$.cN()
p[0]=q
q=$.eU()
o=q[0]
p[0]=a8.K()
n=q[0]
m=a8.T()
l=a8.T()
k=a8.K()
j=B.ad([0,C.jV,3,C.jU],x.p,x.A).h(0,k)
if(j==null)B.M(A.ah("Bitmap compression "+k+" is not supported yet."))
k=a8.K()
p[0]=a8.K()
i=q[0]
p[0]=a8.K()
q=q[0]
p=a8.K()
h=new A.ae6(w,n,o,u,m,l,j,k,i,q,p,a8.K())
h.RT(a8,w)
if(u!==40&&m!==1)return a7
g=p===0&&l<=8?40+4*D.b.bS(1,l):40+4*p
w.b=g
r.a-=4
r.G_(g)
f=A.be(t,!1,a7,0)
e=new A.a9o()
e.a=f
e.b=h
d=e.hm(0)
if(l>=32)return d
a0=32-D.b.cd(o,32)
a1=D.b.bC(a0===32?o:o+a0,8)
for(a8=d.x,w=d.a,u=d.b-1,q=1/n<0,p=n<0,n=n===0,a2=0;a2<D.b.bC(A.q6.prototype.gbW.call(h,h),2);++a2){a3=!(n?q:p)?a2:u-a2
a4=f.e2(a1)
f.d=f.d+(a4.c-a4.d)
for(m=a3*w,a5=0;a5<o;){l=a4.a[a4.d++]
a6=7
while(!0){if(!(a6>-1&&a5<o))break
if((l&D.b.cI(1,a6))>>>0!==0)a8[m+a5]=(D.e.a0(D.b.u(0,0,255))<<24|D.e.a0(D.b.u(0,0,255))<<16|D.e.a0(D.b.u(0,0,255))<<8|D.e.a0(D.b.u(0,0,255)))>>>0;++a5;--a6}}}return d},
jh(d){var w=A.be(d,!1,null,0)
this.a=w
w=A.aLi(w)
this.b=w
if(w==null)return null
return this.hm(0)}}
A.ae8.prototype={}
A.vv.prototype={}
A.ae6.prototype={
gbW(d){return D.b.bC(A.q6.prototype.gbW.call(this,this),2)},
gEK(){return this.r===40&&this.x===32?!1:A.q6.prototype.gEK.call(this)}}
A.Mj.prototype={}
A.af6.prototype={}
A.kW.prototype={}
A.af7.prototype={
aBB(d){var w,v,u,t,s,r,q=this,p="input",o=A.be(d,!0,null,0)
q.a=o
w=B.b(o,p).qg(2,0)
o=w.a
v=w.d
if(o[v]!==255||o[v+1]!==216)return!1
if(q.qC()!==216)return!1
u=q.qC()
t=!1
s=!1
while(!0){if(u!==217){o=B.b(q.a,p)
o=o.d<o.c}else o=!1
if(!o)break
r=B.b(q.a,p).T()
if(r<2)break
o=B.b(q.a,p)
o.d=o.d+(r-2)
switch(u){case 192:case 193:case 194:t=!0
break
case 218:s=!0
break}u=q.qC()}return t&&s},
azF(d,e){var w,v,u,t,s,r,q,p,o=this
o.a=A.be(e,!0,null,0)
o.aoG()
if(o.x.length!==1)throw B.c(A.ah("Only single frame JPEGs supported"))
for(w=o.Q,v=0;u=o.d,t=u.z,v<t.length;++v){s=u.y.h(0,t[v])
u=s.a
t=o.d
r=t.f
q=s.b
p=t.r
t=o.afb(t,s)
u=u===1&&r===2?1:0
w.push(new A.Mj(t,u,q===1&&p===2?1:0))}},
aoG(){var w,v,u,t,s=this,r="input"
if(s.qC()!==216)throw B.c(A.ah("Start Of Image marker not found."))
w=s.qC()
while(!0){if(w!==217){v=B.b(s.a,r)
v=v.d<v.c}else v=!1
if(!v)break
u=B.b(s.a,r).T()
if(u<2)B.M(A.ah("Invalid Block"))
v=B.b(s.a,r)
t=v.e2(u-2)
v.d=v.d+(t.c-t.d)
switch(w){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:s.aoH(w,t)
break
case 219:s.aoJ(t)
break
case 192:case 193:case 194:s.aoN(w,t)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw B.c(A.ah("Unhandled frame type "+D.b.fj(w,16)))
case 196:s.aoI(t)
break
case 221:s.e=t.T()
break
case 218:s.aoZ(t)
break
case 255:v=B.b(s.a,r)
if(v.a[v.d]!==255)--B.b(s.a,r).d
break
default:v=B.b(s.a,r)
if(v.a[v.d+-3]===255){v=B.b(s.a,r)
if(v.a[v.d+-2]>=192){v=B.b(s.a,r)
v=v.a[v.d+-2]<=254}else v=!1}else v=!1
if(v){B.b(s.a,r).d-=3
break}if(w!==0)throw B.c(A.ah("Unknown JPEG marker "+D.b.fj(w,16)))
break}w=s.qC()}},
qC(){var w,v=this,u="input",t=B.b(v.a,u)
if(t.d>=t.c)return 0
do{do{w=B.b(v.a,u).aP()
if(w!==255){t=B.b(v.a,u)
t=t.d<t.c}else t=!1}while(t)
t=B.b(v.a,u)
if(t.d>=t.c)return w
do{w=B.b(v.a,u).aP()
if(w===255){t=B.b(v.a,u)
t=t.d<t.c}else t=!1}while(t)
if(w===0){t=B.b(v.a,u)
t=t.d<t.c}else t=!1}while(t)
return w},
aoM(d,e,f){var w,v,u,t,s,r,q=d.c,p=q-d.d
try{switch(e){case 6:s=d.aP()
$.hc()[0]=s
s=$.hC()[0]
return s
case 1:case 7:s=d.aP()
return s
case 2:s=d.dJ(1)
return s
case 3:s=d.T()
return s
case 4:s=d.K()
return s
case 5:case 10:w=d.qg(8,f)
s=w.K()
r=$.cN()
r[0]=s
s=$.eU()
v=s[0]
r[0]=w.K()
u=s[0]
if(J.h(u,0))return 0
return v/u
case 8:s=d.T()
$.hB()[0]=s
s=$.i2()[0]
return s
case 9:s=d.K()
$.cN()[0]=s
s=$.eU()[0]
return s
case 11:s=d.K()
$.cN()[0]=s
s=$.pP()[0]
return s
case 12:s=d.qg(8,f).Fx()
return s
default:return 0}}finally{s=d.d
t=p-(q-s)
if(t<4)d.d=s+(4-t)}},
aoL(d){var w,v,u,t,s,r,q,p,o=d.T()
for(w=this.r.b,v=d.c,u=0;u<o;++u){t=d.T()
s=d.T()
r=d.K()
if(s-1>=12)continue
if(r>65536)continue
q=C.a2u[s]
if(q>4){p=d.K()
if(p+q>v-d.d)continue}else p=0
w.l(0,t,this.aoM(d,s,p))}},
aoK(d){var w,v,u,t,s=this.r
if(s.a==null)s.a=B.a([],x.a)
w=D.B.eV(d.eP(),0)
s.a.push(w)
if(d.K()!==1165519206)return
if(d.T()!==0)return
v=d.e
u=d.dJ(2)
if(u==="II")d.e=!1
else if(u==="MM")d.e=!0
else return
d.d+=2
t=d.K()
if(t<8||t>16)if(t>d.c-d.d-16){d.e=v
return}if(t>8)d.d+=t-8
this.aoL(d)
d.e=v},
aoH(d,e){var w,v,u,t=this,s="jfif",r=e
if(d===224){w=r
if(w.a[w.d]===74){w=r
if(w.a[w.d+1]===70){w=r
if(w.a[w.d+2]===73){w=r
if(w.a[w.d+3]===70){w=r
w=w.a[w.d+4]===0}else w=!1}else w=!1}else w=!1}else w=!1
if(w){w=new A.afa()
t.b=w
B.b(w,s)
r.toString
B.b(t.b,s)
r.toString
B.b(t.b,s)
r.toString
B.b(t.b,s)
r.toString
r.toString
B.b(t.b,s)
r.toString
r.toString
w=r
B.b(t.b,s).f=w.a[w.d+12]
w=r
B.b(t.b,s).r=w.a[w.d+13]
w=B.b(B.b(t.b,s).f,"thumbWidth")
v=B.b(B.b(t.b,s).r,"thumbHeight")
B.b(t.b,s)
r.qg(14+3*w*v,14)}}else if(d===225)t.aoK(r)
else if(d===238){w=r
if(w.a[w.d]===65){w=r
if(w.a[w.d+1]===100){w=r
if(w.a[w.d+2]===111){w=r
if(w.a[w.d+3]===98){w=r
if(w.a[w.d+4]===101){w=r
w=w.a[w.d+5]===0}else w=!1}else w=!1}else w=!1}else w=!1}else w=!1
if(w){w=new A.af6()
t.c=w
r.toString
r.toString
r.toString
r.toString
r.toString
v=r
w.d=v.a[v.d+11]}}else if(d===254)try{r.azP()}catch(u){B.b5(u)}},
aoJ(d){var w,v,u,t,s,r,q,p
for(w=d.c,v=this.w;u=d.d,t=u<w,t;){t=d.a
d.d=u+1
u=t[u]
s=D.b.B(u,4)
r=u&15
if(r>=4)throw B.c(A.ah("Invalid number of quantization tables"))
u=v[r]
if(u==null){u=new Int16Array(64)
v[r]=u}for(t=s!==0,q=0;q<64;++q){p=t?d.T():d.a[d.d++]
u[C.i_[q]]=p}}if(t)throw B.c(A.ah("Bad length for DQT block"))},
aoN(d,e){var w,v,u,t,s,r,q,p,o=this
if(o.d!=null)throw B.c(A.ah("Duplicate JPG frame data found."))
w=o.d=new A.Rd(B.E(x.p,x.c),B.a([],x.t))
w.b=d===194
w.c=e.aP()
w=o.d
w.toString
w.d=e.T()
w=o.d
w.toString
w.e=e.T()
v=e.aP()
for(w=o.w,u=0;u<v;++u){t=e.a
s=e.d
r=e.d=s+1
s=t[s]
q=e.d=r+1
r=t[r]
p=D.b.B(r,4)
e.d=q+1
q=t[q]
o.d.z.push(s)
o.d.y.l(0,s,new A.kW(p&15,r&15,w,q))}o.d.azm()
o.x.push(o.d)},
aoI(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=d.c,v=this.z,u=this.y;t=d.d,t<w;){s=d.a
r=t+1
d.d=r
q=s[t]
p=new Uint8Array(16)
for(t=r,o=0,n=0;n<16;++n,t=r){r=t+1
d.d=r
p[n]=s[t]
o+=p[n]}m=new Uint8Array(o)
for(n=0;n<o;++n,t=r){r=t+1
d.d=r
m[n]=s[t]}if((q&16)!==0){q-=16
l=u}else l=v
if(l.length<=q)D.d.sm(l,q+1)
l[q]=this.afe(p,m)}},
aoZ(d){var w,v,u,t,s,r,q,p=this,o=d.aP()
if(o<1||o>4)throw B.c(A.ah("Invalid SOS block"))
w=B.RF(o,new A.af8(p,d),!0,x.c)
v=d.aP()
u=d.aP()
t=d.aP()
s=D.b.B(t,4)
r=B.b(p.a,"input")
q=p.d
s=new A.Re(r,q,w,p.e,v,u,s&15,t&15)
s.f=B.b(q.w,"mcusPerLine")
s.r=q.b
s.m5(0)},
afe(d,e){var w,v,u,t,s,r,q,p,o,n=B.a([],x.e8),m=16
while(!0){if(!(m>0&&d[m-1]===0))break;--m}n.push(new A.yN([]))
w=n[0]
for(v=0,u=0;u<m;){for(t=0;t<d[u];++t){w=n.pop()
s=w.a
r=s.length
q=w.b
if(r<=q)D.d.sm(s,q+1)
s[w.b]=e[v]
for(;s=w.b,s>0;)w=n.pop()
w.b=s+1
n.push(w)
for(;n.length<=u;w=p){s=[]
p=new A.yN(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.d.sm(r,o+1)
r[w.b]=s}++v}++u
if(u<m){s=[]
p=new A.yN(s)
n.push(p)
r=w.a
q=r.length
o=w.b
if(q<=o)D.d.sm(r,o+1)
r[w.b]=s
w=p}}return n[0].a},
afb(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=B.b(a2.e,"blocksPerLine"),g=B.b(a2.f,"blocksPerColumn"),f=h<<3>>>0,e=new Int32Array(64),d=new Uint8Array(64),a0=B.at(g*8,null,!1,x.aD)
for(w=a2.c,v=a2.d,u=x.k,t=0,s=0;s<g;++s){r=s<<3>>>0
for(q=0;q<8;++q,t=p){p=t+1
a0[t]=new Uint8Array(f)}for(o=0;o<h;++o){n=w[v]
n.toString
A.b4W(n,u.a(J.a8(J.a8(B.b(a2.r,"blocks"),s),o)),d,e)
m=o<<3>>>0
for(l=0,k=0;k<8;++k){j=a0[r+k]
for(q=0;q<8;++q,l=i){i=l+1
j[m+q]=d[l]}}}}return a0}}
A.yN.prototype={}
A.Rd.prototype={
azm(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=f.y,v=B.q(w).c,u=B.ik(w,w.r,v);u.t();){t=w.h(0,u.d)
f.f=Math.max(f.f,t.a)
f.r=Math.max(f.r,t.b)}u=f.e
u.toString
f.w=D.e.eh(u/8/f.f)
u=f.d
u.toString
f.x=D.e.eh(u/8/f.r)
for(v=B.ik(w,w.r,v),u=x.k,s=x.f0;v.t();){r=w.h(0,v.d)
r.toString
q=f.e
q.toString
p=r.a
o=D.e.eh(D.e.eh(q/8)*p/f.f)
q=f.d
q.toString
n=r.b
m=D.e.eh(D.e.eh(q/8)*n/f.r)
l=B.b(f.w,"mcusPerLine")*p
k=B.b(f.x,"mcusPerColumn")*n
j=J.ij(k,s)
for(i=0;i<k;++i){h=J.ij(l,u)
for(g=0;g<l;++g)h[g]=new Int32Array(64)
j[i]=h}r.e=o
r.f=m
r.r=j}}}
A.afa.prototype={}
A.Re.prototype={
m5(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f="blocksPerLine",e=g.y,d=e.length,a0=g.r
a0.toString
if(a0)if(g.Q===0)w=g.at===0?g.gagF():g.gagH()
else w=g.at===0?g.gagx():g.gagz()
else w=g.gagC()
a0=d===1
v=a0?B.b(e[0].e,f)*B.b(e[0].f,"blocksPerColumn"):B.b(g.f,"mcusPerLine")*B.b(g.b.x,"mcusPerColumn")
u=g.z
if(u==null||u===0)g.z=v
for(u=g.a,t=0;t<v;){for(s=0;s<d;++s)e[s].y=0
g.CW=0
if(a0){r=e[0]
q=0
while(!0){p=g.z
p.toString
if(!(q<p))break
o=D.b.dv(t,B.b(r.e,f))
n=D.b.cd(t,B.b(r.e,f))
w.$2(r,J.a8(J.a8(B.b(r.r,"blocks"),o),n));++t;++q}}else{q=0
while(!0){p=g.z
p.toString
if(!(q<p))break
for(s=0;s<d;++s){r=e[s]
m=r.a
l=r.b
for(k=0;k<l;++k)for(j=0;j<m;++j)g.agK(r,w,t,k,j)}++t;++q}}g.ch=0
p=u.a
i=u.d
h=p[i]
p=p[i+1]
if(h===255)if(p>=208&&p<=215)u.d=i+2
else break}},
oL(){var w,v,u=this,t=u.ch
if(t>0){--t
u.ch=t
return D.b.it(u.ay,t)&1}t=u.a
if(t.d>=t.c)return null
w=t.aP()
u.ay=w
if(w===255){v=t.aP()
if(v!==0)throw B.c(A.ah("unexpected marker: "+D.b.fj((u.ay<<8|v)>>>0,16)))}u.ch=7
return D.b.B(u.ay,7)&1},
uL(d){var w,v,u
for(w=x.j,v=d;u=this.oL(),u!=null;){v=J.a8(w.a(v),u)
if(typeof v=="number")return D.e.a0(v)}return null},
Js(d){var w,v
for(w=0;d>0;){v=this.oL()
if(v==null)return null
w=(w<<1|v)>>>0;--d}return w},
uR(d){var w
if(d===1)return this.oL()===1?1:-1
d.toString
w=this.Js(d)
w.toString
if(w>=D.b.cI(1,d-1))return w
return w+D.b.cI(-1,d)+1},
agD(d,e){var w,v,u,t,s=this,r=s.uL(B.b(d.w,"huffmanTableDC")),q=r===0?0:s.uR(r),p=B.b(d.y,"pred")+q
d.y=p
w=J.aW(e)
w.l(e,0,B.b(p,"pred"))
for(v=1;v<64;){p=s.uL(B.b(d.x,"huffmanTableAC"))
p.toString
u=p&15
t=D.b.B(p,4)
if(u===0){if(t<15)break
v+=16
continue}v+=t
u=s.uR(u)
w.l(e,C.i_[v],u);++v}},
agG(d,e){var w=this.uL(B.b(d.w,"huffmanTableDC")),v=w===0?0:D.b.bS(this.uR(w),this.ax),u=B.b(d.y,"pred")+v
d.y=u
J.dN(e,0,B.b(u,"pred"))},
agI(d,e){var w=J.a7(e),v=w.h(e,0),u=this.oL()
u.toString
w.l(e,0,(v|D.b.bS(u,this.ax))>>>0)},
agy(d,e){var w,v,u,t,s,r,q=this,p=q.CW
if(p>0){q.CW=p-1
return}w=q.Q
v=q.as
for(p=q.ax,u=J.aW(e);w<=v;){t=q.uL(B.b(d.x,"huffmanTableAC"))
t.toString
s=t&15
r=D.b.B(t,4)
if(s===0){if(r<15){p=q.Js(r)
p.toString
q.CW=p+D.b.bS(1,r)-1
break}w+=16
continue}w+=r
u.l(e,C.i_[w],q.uR(s)*D.b.bS(1,p));++w}},
agA(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.Q,m=o.as
for(w=J.a7(e),v=o.ax,u=0;n<=m;){t=C.i_[n]
switch(o.cx){case 0:s=o.uL(B.b(d.x,"huffmanTableAC"))
if(s==null)throw B.c(A.ah("Invalid progressive encoding"))
r=s&15
u=D.b.B(s,4)
if(r===0)if(u<15){q=o.Js(u)
q.toString
o.CW=q+D.b.bS(1,u)
o.cx=4}else{o.cx=1
u=16}else{if(r!==1)throw B.c(A.ah("invalid ACn encoding"))
o.cy=o.uR(r)
o.cx=u!==0?2:3}continue
case 1:case 2:if(!J.h(w.h(e,t),0)){q=w.h(e,t)
p=o.oL()
p.toString
w.l(e,t,q+D.b.bS(p,v))}else{--u
if(u===0)o.cx=o.cx===2?3:0}break
case 3:if(!J.h(w.h(e,t),0)){q=w.h(e,t)
p=o.oL()
p.toString
w.l(e,t,q+D.b.bS(p,v))}else{w.l(e,t,D.b.bS(B.b(o.cy,"successiveACNextValue"),v))
o.cx=0}break
case 4:if(!J.h(w.h(e,t),0)){q=w.h(e,t)
p=o.oL()
p.toString
w.l(e,t,q+D.b.bS(p,v))}break}++n}if(o.cx===4)if(--o.CW===0)o.cx=0},
agK(d,e,f,g,h){var w="mcusPerLine",v="blocks",u=D.b.dv(f,B.b(this.f,w))*d.b+g,t=D.b.cd(f,B.b(this.f,w))*d.a+h
if(u>=J.bn(B.b(d.r,v)))return
if(t>=J.bn(J.a8(B.b(d.r,v),u)))return
e.$2(d,J.a8(J.a8(B.b(d.r,v),u),t))}}
A.Rc.prototype={
jh(d){var w=A.aLG()
w.azF(0,d)
if(w.x.length!==1)throw B.c(A.ah("only single frame JPEGs supported"))
return A.b3Y(w)}}
A.af9.prototype={
a9a(d){d=D.e.a0(D.b.u(d,1,100))
if(this.ch===d)return
this.alF(d<50?D.e.ek(5000/d):D.b.ek(200-d*2))
this.ch=d},
a1L(a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=A.Um(!0,8192)
a7.aJ(255)
a7.aJ(216)
a7.aJ(255)
a7.aJ(224)
a7.jG(16)
a7.aJ(74)
a7.aJ(70)
a7.aJ(73)
a7.aJ(70)
a7.aJ(0)
a7.aJ(1)
a7.aJ(1)
a7.aJ(0)
a7.jG(1)
a7.jG(1)
a7.aJ(0)
a7.aJ(0)
a6.arW(a7,a8.y)
a6.as_(a7)
w=a8.a
v=a8.b
a7.aJ(255)
a7.aJ(192)
a7.jG(17)
a7.aJ(8)
a7.jG(v)
a7.jG(w)
a7.aJ(3)
a7.aJ(1)
a7.aJ(17)
a7.aJ(0)
a7.aJ(2)
a7.aJ(17)
a7.aJ(1)
a7.aJ(3)
a7.aJ(17)
a7.aJ(1)
a6.arZ(a7)
a7.aJ(255)
a7.aJ(218)
a7.jG(12)
a7.aJ(3)
a7.aJ(1)
a7.aJ(0)
a7.aJ(2)
a7.aJ(17)
a7.aJ(3)
a7.aJ(17)
a7.aJ(0)
a7.aJ(63)
a7.aJ(0)
a6.CW=0
a6.cx=7
u=a8.mL()
t=w*4
for(w=a6.as,s=a6.c,r=a6.at,q=a6.d,p=a6.ax,o=a6.ay,n=0,m=0,l=0,k=0;k<v;){for(j=k+1,i=t*k,h=0;h<t;){g=i+h
for(f=0;f<64;++f){e=f>>>3
d=(f&7)*4
a0=g+e*t+d
if(k+e>=v)a0-=t*(j+e-v)
a1=h+d
if(a1>=t)a0-=a1-t+4
a2=a0+1
a3=u[a0]
a4=u[a2]
a5=u[a2+1]
w[f]=D.b.B(o[a3]+o[a4+256]+o[a5+512],16)-128
r[f]=D.b.B(o[a3+768]+o[a4+1024]+o[a5+1280],16)-128
p[f]=D.b.B(o[a3+1280]+o[a4+1536]+o[a5+1792],16)-128}n=a6.Jm(a7,w,s,n,a6.e,B.b(a6.r,"YAC_HT"))
m=a6.Jm(a7,r,q,m,a6.f,B.b(a6.w,"UVAC_HT"))
l=a6.Jm(a7,p,q,l,a6.f,B.b(a6.w,"UVAC_HT"))
h+=32}k+=8}w=a6.cx
if(w>=0){++w
a6.lP(a7,B.a([D.b.cI(1,w)-1,w],x.t))}a7.aJ(255)
a7.aJ(217)
return B.bP(a7.c.buffer,0,a7.a)},
alF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this
for(w=h.a,v=0;v<64;++v){u=D.e.ek((C.a22[v]*d+50)/100)
if(u<1)u=1
else if(u>255)u=255
w[C.iw[v]]=u}for(t=h.b,s=0;s<64;++s){r=D.e.ek((C.a23[s]*d+50)/100)
if(r<1)r=1
else if(r>255)r=255
t[C.iw[s]]=r}for(q=h.c,p=h.d,o=0,n=0;n<8;++n)for(m=0;m<8;++m){l=C.iw[o]
k=w[l]
j=C.rO[n]
i=C.rO[m]
q[o]=1/(k*j*i*8)
p[o]=1/(t[l]*j*i*8);++o}},
zq(d,e){var w,v,u,t,s,r=x.t,q=B.a([B.a([],r)],x.ca)
for(w=0,v=0,u=1;u<=16;++u){for(t=1;t<=d[u];++t){s=e[v]
if(q.length<=s)D.d.sm(q,s+1)
q[s]=B.a([w,u],r);++v;++w}w*=2}return q},
alC(){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.y,v=this.x,u=x.t,t=1,s=2,r=1;r<=15;++r){for(q=t;q<s;++q){p=32767+q
w[p]=r
v[p]=B.a([q,r],u)}for(p=s-1,o=-p,n=-t;o<=n;++o){m=32767+o
w[m]=r
v[m]=B.a([p+o,r],u)}t=t<<1>>>0
s=s<<1>>>0}},
alG(){var w,v
for(w=this.ay,v=0;v<256;++v){w[v]=19595*v
w[v+256]=38470*v
w[v+512]=7471*v+32768
w[v+768]=-11059*v
w[v+1024]=-21709*v
w[v+1280]=32768*v+8421375
w[v+1536]=-27439*v
w[v+1792]=-5329*v}},
ahW(d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3
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
t[v]=d3>0?D.e.a0(d3+0.5):D.e.a0(d3-0.5)}return t},
arW(d,e){var w,v,u,t=e.a
if(t==null)return
for(w=t.length,v=0;v<t.length;t.length===w||(0,B.F)(t),++v){u=t[v]
d.aJ(255)
d.aJ(225)
d.jG(u.length+2)
d.yr(u)}},
as_(d){var w,v,u
d.aJ(255)
d.aJ(219)
d.jG(132)
d.aJ(0)
for(w=this.a,v=0;v<64;++v)d.aJ(w[v])
d.aJ(1)
for(w=this.b,u=0;u<64;++u)d.aJ(w[u])},
arZ(d){var w,v,u,t,s,r,q,p
d.aJ(255)
d.aJ(196)
d.jG(418)
d.aJ(0)
for(w=0;w<16;){++w
d.aJ(C.rc[w])}for(v=0;v<=11;++v)d.aJ(C.il[v])
d.aJ(16)
for(u=0;u<16;){++u
d.aJ(C.rd[u])}for(t=0;t<=161;++t)d.aJ(C.rj[t])
d.aJ(1)
for(s=0;s<16;){++s
d.aJ(C.re[s])}for(r=0;r<=11;++r)d.aJ(C.il[r])
d.aJ(17)
for(q=0;q<16;){++q
d.aJ(C.rf[q])}for(p=0;p<=161;++p)d.aJ(C.qI[p])},
Jm(d,e,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a3[0],g=a3[240],f=i.ahW(e,a0)
for(w=i.Q,v=0;v<64;++v)w[C.iw[v]]=f[v]
u=w[0]
u.toString
t=u-a1
if(t===0){s=a2[0]
s.toString
i.lP(d,s)}else{r=32767+t
a2.toString
s=i.y[r]
s.toString
s=a2[s]
s.toString
i.lP(d,s)
s=i.x[r]
s.toString
i.lP(d,s)}q=63
while(!0){if(!(q>0&&w[q]===0))break;--q}if(q===0){h.toString
i.lP(d,h)
return u}for(s=i.y,p=i.x,o=1;o<=q;){n=o
while(!0){if(!(w[n]===0&&n<=q))break;++n}m=n-o
if(m>=16){l=D.b.B(m,4)
for(k=1;k<=l;++k){g.toString
i.lP(d,g)}m&=15}j=w[n]
j.toString
r=32767+j
j=s[r]
j.toString
j=a3[(m<<4>>>0)+j]
j.toString
i.lP(d,j)
j=p[r]
j.toString
i.lP(d,j)
o=n+1}if(q!==63){h.toString
i.lP(d,h)}return u},
lP(d,e){var w=this,v=J.a7(e),u=v.h(e,0),t=v.h(e,1)-1
for(;t>=0;){if((u&D.b.cI(1,t))>>>0!==0)w.CW=(w.CW|D.b.cI(1,w.cx))>>>0;--t
if(--w.cx<0){v=w.CW
if(v===255){d.aJ(255)
d.aJ(0)}else d.aJ(v)
w.cx=7
w.CW=0}}}}
A.E3.prototype={}
A.R0.prototype={}
A.aiv.prototype={}
A.R1.prototype={}
A.V0.prototype={
rT(d){var w,v,u,t=A.be(d,!0,null,0).fE(8)
for(w=t.a,v=t.d,u=0;u<8;++u)if(w[v+u]!==C.pH[u])return!1
return!0},
lD(b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8="_input",a9=A.be(b0,!0,a7,0)
a6.d=a9
w=B.b(a9,a8).fE(8)
for(a9=w.a,v=w.d,u=0;u<8;++u)if(a9[v+u]!==C.pH[u])return a7
for(a9=x.t,v=x.L,t=x.N,s=x.dm;!0;){r=B.b(a6.d,a8)
q=r.d-r.b
p=B.b(a6.d,a8).K()
o=B.b(a6.d,a8).dJ(4)
switch(o){case"tEXt":if(a6.a==null)a6.a=new A.R1(B.E(t,t),B.a([],s),B.a([],a9))
r=B.b(a6.d,a8)
n=r.e2(p)
r.d=r.d+(n.c-n.d)
m=n.eP()
for(l=m.length,u=0;u<l;++u)if(m[u]===0){k=D.nE.dz(0,new Uint8Array(m.subarray(0,B.lU(0,u,l))))
r=u+1
j=D.nE.dz(0,new Uint8Array(m.subarray(r,B.lU(r,a7,l))))
a6.a.ch.l(0,k,j)
break}B.b(a6.d,a8).d+=4
break
case"IHDR":r=B.b(a6.d,a8)
n=r.e2(p)
r.d=r.d+(n.c-n.d)
i=A.aB(n,a7,0)
h=i.eP()
r=new A.R1(B.E(t,t),B.a([],s),B.a([],a9))
a6.a=r
r.a=i.K()
r=a6.a
r.toString
r.b=i.K()
r=a6.a
r.toString
g=i.a
f=i.d
e=i.d=f+1
r.d=g[f]
f=e+1
i.d=f
r.e=g[e]
f=i.d=f+1
e=i.d=f+1
r.r=g[f]
i.d=e+1
r.w=g[e]
if(!D.d.v(B.a([0,2,3,4,6],a9),a6.a.e))return a7
r=a6.a
if(r.r!==0)return a7
switch(r.e){case 0:if(!D.d.v(B.a([1,2,4,8,16],a9),a6.a.d))return a7
break
case 2:if(!D.d.v(B.a([8,16],a9),a6.a.d))return a7
break
case 3:if(!D.d.v(B.a([1,2,4,8],a9),a6.a.d))return a7
break
case 4:if(!D.d.v(B.a([8,16],a9),a6.a.d))return a7
break
case 6:if(!D.d.v(B.a([8,16],a9),a6.a.d))return a7
break}if(B.b(a6.d,a8).K()!==A.u1(h,A.u1(new B.dP(o),0)))throw B.c(A.ah("Invalid "+o+" checksum"))
break
case"PLTE":r=a6.a
r.toString
g=B.b(a6.d,a8)
n=g.e2(p)
g.d=g.d+(n.c-n.d)
r.x=n.eP()
if(B.b(a6.d,a8).K()!==A.u1(v.a(a6.a.x),A.u1(new B.dP(o),0)))throw B.c(A.ah("Invalid "+o+" checksum"))
break
case"tRNS":r=a6.a
r.toString
g=B.b(a6.d,a8)
n=g.e2(p)
g.d=g.d+(n.c-n.d)
r.y=n.eP()
d=B.b(a6.d,a8).K()
r=a6.a.y
r.toString
if(d!==A.u1(r,A.u1(new B.dP(o),0)))throw B.c(A.ah("Invalid "+o+" checksum"))
break
case"IEND":B.b(a6.d,a8).d+=4
break
case"gAMA":if(p!==4)throw B.c(A.ah("Invalid gAMA chunk"))
a0=B.b(a6.d,a8).K()
B.b(a6.d,a8).d+=4
if(a0!==1e5)a6.a.Q=a0/1e5
break
case"IDAT":a6.a.db.push(q)
B.b(a6.d,a8).d+=p
B.b(a6.d,a8).d+=4
break
case"acTL":a6.a.toString
B.b(a6.d,a8).K()
a6.a.toString
B.b(a6.d,a8).K()
B.b(a6.d,a8).d+=4
break
case"fcTL":a1=new A.R0(B.a([],a9))
a6.a.cy.push(a1)
B.b(a6.d,a8).K()
a1.b=B.b(a6.d,a8).K()
a1.c=B.b(a6.d,a8).K()
B.b(a6.d,a8).K()
B.b(a6.d,a8).K()
B.b(a6.d,a8).T()
B.b(a6.d,a8).T()
r=B.b(a6.d,a8)
a1.w=r.a[r.d++];++B.b(a6.d,a8).d
B.b(a6.d,a8).d+=4
break
case"fdAT":B.b(a6.d,a8).K()
D.d.gJ(a6.a.cy).y.push(q)
B.b(a6.d,a8).d+=p-4
B.b(a6.d,a8).d+=4
break
case"bKGD":r=a6.a.e
if(r===3){r=B.b(a6.d,a8);--p
a2=r.a[r.d++]*3
r=a6.a.x
a3=r[a2]
a4=r[a2+1]
a5=r[a2+2]
D.e.a0(D.b.u(255,0,255))
D.e.a0(D.b.u(a5,0,255))
D.e.a0(D.b.u(a4,0,255))
D.e.a0(D.b.u(a3,0,255))}else if(r===0||r===4){B.b(a6.d,a8).T()
p-=2}else if(r===2||r===6){B.b(a6.d,a8).T()
B.b(a6.d,a8).T()
B.b(a6.d,a8).T()
p-=24}if(p>0)B.b(a6.d,a8).d+=p
B.b(a6.d,a8).d+=4
break
case"iCCP":r=a6.a
r.toString
r.at=B.b(a6.d,a8).xR()
a6.a.toString;++B.b(a6.d,a8).d
r=a6.a.at
g=B.b(a6.d,a8)
n=g.e2(p-(r.length+2))
g.d=g.d+(n.c-n.d)
g=a6.a
g.toString
g.ay=n.eP()
B.b(a6.d,a8).d+=4
break
default:B.b(a6.d,a8).d+=p
B.b(a6.d,a8).d+=4
break}if(o==="IEND")break
r=B.b(a6.d,a8)
if(r.d>=r.c)return a7}return a6.a},
hm(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="_input"
if(e.a==null)return null
w=B.a([],x.t)
v=e.a
u=v.a
t=v.b
s=v.cy
r=s.length
if(r===0||a0===0)for(q=v.db.length,p=0;p<q;++p){B.b(e.d,d).d=e.a.db[p]
o=B.b(e.d,d).K()
n=B.b(e.d,d).dJ(4)
v=B.b(e.d,d)
m=v.e2(o)
v.d=v.d+(m.c-m.d)
l=m.eP()
D.d.Z(w,l)
if(B.b(e.d,d).K()!==A.u1(l,A.u1(new B.dP(n),0)))throw B.c(A.ah("Invalid "+n+" checksum"))}else{if(a0>=r)throw B.c(A.ah("Invalid Frame Number: "+a0))
k=s[a0]
u=k.b
t=k.c
for(v=k.y,p=0;p<v.length;++p){B.b(e.d,d).d=v[p]
o=B.b(e.d,d).K()
B.b(e.d,d).dJ(4)
B.b(e.d,d).d+=4
s=B.b(e.d,d)
m=s.e2(o)
s.d=s.d+(m.c-m.d)
D.d.Z(w,m.eP())}}v=e.a
s=v.e
j=s===4||s===6||v.y!=null?C.br:C.k9
u.toString
t.toString
i=A.jU(u,t,j)
h=A.be(C.eL.vH(A.vF(w,1,null,0),!1),!0,null,0)
e.c=e.b=0
v=e.a
if(v.z==null){v.z=B.RF(256,new A.aiu(),!1,x.p)
v=e.a
s=v.x
if(s!=null&&v.Q!=null)for(r=s.length,v=v.z,p=0;p<r;++p){v.toString
s[p]=v[s[p]]}}v=e.a
g=v.a
f=v.b
v.a=u
v.b=t
e.e=0
if(v.w!==0){v=D.b.B(u+7,3)
s=D.b.B(t+7,3)
e.oK(h,i,0,0,8,8,v,s)
v=u+3
e.oK(h,i,4,0,8,8,D.b.B(v,3),s)
s=t+3
e.oK(h,i,0,4,4,8,D.b.B(v,2),D.b.B(s,3))
v=u+1
e.oK(h,i,2,0,4,4,D.b.B(v,2),D.b.B(s,2))
s=t+1
e.oK(h,i,0,2,2,4,D.b.B(v,1),D.b.B(s,2))
e.oK(h,i,1,0,2,2,D.b.B(u,1),D.b.B(s,1))
e.oK(h,i,0,1,1,2,u,D.b.B(t,1))}else e.aon(h,i)
v=e.a
v.a=g
v.b=f
v=v.ch
if(v.a!==0)i.aso(v)
return i},
jh(d){if(this.lD(d)==null)return null
return this.hm(0)},
oK(a8,a9,b0,b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=a5.a,a7=a6.e
if(a7===4)w=2
else if(a7===2)w=3
else{a7=a7===6?4:1
w=a7}a6=a6.d
a6.toString
v=w*a6
u=D.b.B(v+7,3)
t=D.b.B(v*b4+7,3)
s=B.at(t,0,!1,x.p)
r=B.a([s,s],x.S)
q=B.a([0,0,0,0],x.t)
for(a6=a9.x,a7=a9.a,p=b2>1,o=a9.b,n=b2-b0,m=n<=1,l=b1,k=0,j=0;k<b5;++k,l+=b3,++a5.e){i=a8.a[a8.d++]
h=a8.e2(t)
a8.d=a8.d+(h.c-h.d)
g=h.eP()
r[j]=g
j=1-j
a5.ZE(i,u,g,r[j])
a5.c=a5.b=0
f=new A.hl(g,0,g.length,0,!0)
for(i=l*a7,e=b0,d=0;d<b4;++d,e+=b2){a5.Yc(f,q)
a0=a5.Wi(q)
a6[i+e]=a0
if(!m||p)for(a1=0;a1<b2;++a1)for(a2=0;a2<n;++a2){g=e+a2
a3=l+a2
if(g<a7)a4=a3<o
else a4=!1
if(a4)a6[a3*a7+g]=a0}}}},
aon(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a,a0=d.e
if(a0===4)w=2
else if(a0===2)w=3
else{a0=a0===6?4:1
w=a0}a0=d.d
a0.toString
v=w*a0
u=d.a
t=d.b
s=D.b.B(u*v+7,3)
r=D.b.B(v+7,3)
q=B.at(s,0,!1,x.p)
p=B.a([q,q],x.S)
o=B.a([0,0,0,0],x.t)
for(d=a2.x,n=0,m=0,l=0;n<t;++n,l=i){a0=a1.a[a1.d++]
k=a1.e2(s)
a1.d=a1.d+(k.c-k.d)
j=k.eP()
p[l]=j
i=1-l
e.ZE(a0,r,j,p[i])
e.c=e.b=0
j=p[l]
a0=j.length
h=new A.hl(j,0,a0,0,!0)
for(g=0;g<u;++g,m=f){e.Yc(h,o)
f=m+1
d[m]=e.Wi(o)}}},
ZE(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=f.length
switch(d){case 0:break
case 1:for(w=e;w<m;++w)f[w]=f[w]+f[w-e]&255
break
case 2:for(w=0;w<m;++w)f[w]=f[w]+g[w]&255
break
case 3:for(w=0;w<m;++w){v=w<e?0:f[w-e]
u=g[w]
f[w]=f[w]+D.b.B(v+u,1)&255}break
case 4:for(w=0;w<m;++w){t=w<e
v=t?0:f[w-e]
u=g[w]
s=t?0:g[w-e]
r=v+u-s
q=Math.abs(r-v)
p=Math.abs(r-u)
o=Math.abs(r-s)
if(q<=p&&q<=o)n=v
else n=p<=o?u:s
f[w]=f[w]+n&255}break
default:throw B.c(A.ah("Invalid filter value: "+d))}},
jO(d,e){var w,v,u,t,s,r=this
if(e===0)return 0
if(e===8)return d.aP()
if(e===16)return d.T()
for(w=d.c;v=r.c,v<e;){u=d.d
if(u>=w)throw B.c(A.ah("Invalid PNG data."))
t=d.a
d.d=u+1
r.b=D.b.cI(t[u],v)
r.c=v+8}if(e===1)s=1
else if(e===2)s=3
else{if(e===4)w=15
else w=0
s=w}w=v-e
v=D.b.eX(r.b,w)
r.c=w
return(v&s)>>>0},
Yc(d,e){var w=this,v=w.a,u=v.e
switch(u){case 0:v=v.d
v.toString
e[0]=w.jO(d,v)
return
case 2:v=v.d
v.toString
e[0]=w.jO(d,v)
v=w.a.d
v.toString
e[1]=w.jO(d,v)
v=w.a.d
v.toString
e[2]=w.jO(d,v)
return
case 3:v=v.d
v.toString
e[0]=w.jO(d,v)
return
case 4:v=v.d
v.toString
e[0]=w.jO(d,v)
v=w.a.d
v.toString
e[1]=w.jO(d,v)
return
case 6:v=v.d
v.toString
e[0]=w.jO(d,v)
v=w.a.d
v.toString
e[1]=w.jO(d,v)
v=w.a.d
v.toString
e[2]=w.jO(d,v)
v=w.a.d
v.toString
e[3]=w.jO(d,v)
return}throw B.c(A.ah("Invalid color type: "+B.e(u)+"."))},
Wi(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.a,l=m.e
switch(l){case 0:w=B.bf("g")
m=n.a
switch(m.d){case 1:w.b=d[0]===0?0:255
break
case 2:w.b=d[0]*85
break
case 4:w.b=d[0]<<4>>>0
break
case 8:w.b=d[0]
break
case 16:w.b=D.b.B(d[0],8)
break}m=m.z
m.toString
w.b=m[w.aY()]
m=n.a.y
if(m!=null){l=m[0]
m=m[1]
if(d[0]===((l&255)<<24|m&255)>>>0)return A.ny(w.aY(),w.aY(),w.aY(),0)}return A.ny(w.aY(),w.aY(),w.aY(),255)
case 2:v=B.bf("r")
w=B.bf("g")
u=B.bf("b")
m=n.a
switch(m.d){case 1:v.b=d[0]===0?0:255
w.b=d[1]===0?0:255
u.b=d[2]===0?0:255
break
case 2:v.b=d[0]*85
w.b=d[1]*85
u.b=d[2]*85
break
case 4:v.b=d[0]<<4>>>0
w.b=d[1]<<4>>>0
u.b=d[2]<<4>>>0
break
case 8:v.b=d[0]
w.b=d[1]
u.b=d[2]
break
case 16:v.b=D.b.B(d[0],8)
w.b=D.b.B(d[1],8)
u.b=D.b.B(d[2],8)
break}m=m.z
m.toString
v.b=m[v.aY()]
m=n.a.z
m.toString
w.b=m[w.aY()]
m=n.a.z
m.toString
u.b=m[u.aY()]
m=n.a.y
if(m!=null){l=m[0]
t=m[1]
s=m[2]
r=m[3]
q=m[4]
m=m[5]
if(d[0]===((l&255)<<8|t&255)&&d[1]===((s&255)<<8|r&255)&&d[2]===((q&255)<<8|m&255))return A.ny(v.aY(),w.aY(),u.aY(),0)}return A.ny(v.aY(),w.aY(),u.aY(),255)
case 3:l=d[0]
p=l*3
t=m.y
o=t!=null&&l<t.length?t[l]:255
m=m.x
if(p>=m.length)return A.ny(255,255,255,o)
return A.ny(m[p],m[p+1],m[p+2],o)
case 4:w=B.bf("g")
o=B.bf("a")
m=n.a
switch(m.d){case 1:w.b=d[0]===0?0:255
o.b=d[1]===0?0:255
break
case 2:w.b=d[0]*85
o.b=d[1]*85
break
case 4:w.b=d[0]<<4>>>0
o.b=d[1]<<4>>>0
break
case 8:w.b=d[0]
o.b=d[1]
break
case 16:w.b=D.b.B(d[0],8)
o.b=D.b.B(d[1],8)
break}m=m.z
m.toString
w.b=m[w.aY()]
return A.ny(w.aY(),w.aY(),w.aY(),o.aY())
case 6:v=B.bf("r")
w=B.bf("g")
u=B.bf("b")
o=B.bf("a")
m=n.a
switch(m.d){case 1:v.b=d[0]===0?0:255
w.b=d[1]===0?0:255
u.b=d[2]===0?0:255
o.b=d[3]===0?0:255
break
case 2:v.b=d[0]*85
w.b=d[1]*85
u.b=d[2]*85
o.b=d[3]*85
break
case 4:v.b=d[0]<<4>>>0
w.b=d[1]<<4>>>0
u.b=d[2]<<4>>>0
o.b=d[3]<<4>>>0
break
case 8:v.b=d[0]
w.b=d[1]
u.b=d[2]
o.b=d[3]
break
case 16:v.b=D.b.B(d[0],8)
w.b=D.b.B(d[1],8)
u.b=D.b.B(d[2],8)
o.b=D.b.B(d[3],8)
break}m=m.z
m.toString
v.b=m[v.aY()]
m=n.a.z
m.toString
w.b=m[w.aY()]
m=n.a.z
m.toString
u.b=m[u.aY()]
return A.ny(v.aY(),w.aY(),u.aY(),o.aY())}throw B.c(A.ah("Invalid color type: "+B.e(l)+"."))}}
A.Vi.prototype={}
A.Vj.prototype={}
A.lc.prototype={}
A.Vl.prototype={}
A.Vm.prototype={}
A.Vp.prototype={}
A.Vq.prototype={}
A.Eb.prototype={}
A.Vo.prototype={}
A.aiX.prototype={
ae8(d){var w,v,u=this
d.T()
d.T()
d.T()
d.T()
w=D.b.bC(d.c-d.d,8)
if(w>0){u.e=new Uint16Array(w)
u.f=new Uint16Array(w)
u.r=new Uint16Array(w)
u.w=new Uint16Array(w)
for(v=0;v<w;++v){B.b(u.e,"blackSrc")[v]=d.T()
B.b(u.f,"whiteSrc")[v]=d.T()
B.b(u.r,"blackDst")[v]=d.T()
B.b(u.w,"whiteDst")[v]=d.T()}}}}
A.wB.prototype={
a51(d,e,f,g,h,i,j){if(h==null)h=d.T()
switch(h){case 0:g.toString
this.aoY(d,e,f,g)
break
case 1:if(i==null)i=this.aoV(d,f)
g.toString
this.aoX(d,e,f,g,i,j)
break
default:throw B.c(A.ah("Unsupported compression: "+h))}},
azN(d,e,f,g){return this.a51(d,e,f,g,null,null,0)},
aoV(d,e){var w,v=new Uint16Array(e)
for(w=0;w<e;++w)v[w]=d.T()
return v},
aoY(d,e,f,g){var w,v=e*f
if(g===16)v*=2
if(v>d.c-d.d){w=new Uint8Array(v)
this.c=w
D.B.hT(B.b(w,"data"),0,v,255)
return}this.c=d.fE(v).eP()},
aoX(d,e,f,g,h,i){var w,v,u,t,s,r,q=this,p="data",o=e*f
if(g===16)o*=2
w=new Uint8Array(o)
q.c=w
v=i*f
if(v>=h.length){D.B.hT(B.b(w,p),0,B.b(q.c,p).length,255)
return}for(u=0,t=0;t<f;++t,v=s){s=v+1
r=d.e2(h[v])
d.d=d.d+(r.c-r.d)
q.agL(r,B.b(q.c,p),u)
u+=e}},
agL(d,e,f){var w,v,u,t,s,r,q
for(w=d.c;v=d.d,v<w;){u=d.a
t=d.d=v+1
v=u[v]
$.hc()[0]=v
s=$.hC()[0]
if(s<0){s=1-s
d.d=t+1
v=u[t]
for(r=0;r<s;++r,f=q){q=f+1
e[f]=v}}else{++s
for(v=t,r=0;r<s;++r,v=t,f=q){q=f+1
t=v+1
d.d=t
e[f]=u[v]}}}}}
A.aiZ.prototype={
ae9(d){var w,v,u,t=this,s="_input"
t.at=A.be(d,!0,null,0)
t.aoA()
if(t.d!==943870035)return
w=B.b(t.at,s).K()
B.b(t.at,s).fE(w)
w=B.b(t.at,s).K()
t.ax=B.b(t.at,s).fE(w)
w=B.b(t.at,s).K()
t.ay=B.b(t.at,s).fE(w)
v=B.b(t.at,s)
v.toString
u=B.b(t.at,s)
t.ch=v.fE(u.c-u.d)},
m5(d){var w=this
if(w.d!==943870035||B.b(w.at,"_input")==null)return!1
w.aoT()
w.aoU()
w.aoW()
w.ch=w.ay=w.ax=w.at=null
return!0},
auv(){if(!this.m5(0))return null
return this.aAf()},
aAf(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.z
if(b0!=null)return b0
b0=A.jU(a9.a,a9.b,C.br)
a9.z=b0
b0=b0.x
D.bv.hT(b0,0,b0.length,0)
w=a9.z.mL()
for(v=0;v<J.bn(B.b(a9.x,"layers"));++v){u=J.a8(B.b(a9.x,"layers"),v)
if((B.b(u.y,"flags")&2)!==0)continue
t=B.b(u.w,"opacity")/255
s=u.r
r=B.b(u.cx,"layerImage").mL()
b0=u.a
b0.toString
q=b0
p=0
o=0
for(;p<B.b(u.f,"height");++p,++q){b0=u.a
b0.toString
n=a9.a
m=u.b
m.toString
l=(b0+p)*n*4+m*4
for(b0=q>=0,k=m,j=0;j<B.b(u.e,"width");++j,++k){i=o+1
h=r[o]
o=i+1
g=r[i]
i=o+1
f=r[o]
o=i+1
e=r[i]
if(k>=0&&k<a9.a&&b0&&q<a9.b){d=w[l]
n=l+1
a0=w[n]
a1=w[l+2]
a2=w[l+3]
a3=e/255*t
switch(s){case 1885434739:a4=a2
a5=a1
a6=a0
a7=d
break
case 1852797549:a4=e
a5=f
a6=g
a7=h
break
case 1684632435:a4=e
a5=f
a6=g
a7=h
break
case 1684107883:a7=Math.min(d,h)
a6=Math.min(a0,g)
a5=Math.min(a1,f)
a4=e
break
case 1836411936:a7=d*h>>>8
a6=a0*g>>>8
a5=a1*f>>>8
a4=e
break
case 1768188278:a7=A.aj_(d,h)
a6=A.aj_(a0,g)
a5=A.aj_(a1,f)
a4=e
break
case 1818391150:a7=D.e.a0(D.b.u(d+h-255,0,255))
a6=D.e.a0(D.b.u(a0+g-255,0,255))
a5=D.e.a0(D.b.u(a1+f-255,0,255))
a4=e
break
case 1684751212:a4=e
a5=f
a6=g
a7=h
break
case 1818850405:a7=Math.max(d,h)
a6=Math.max(a0,g)
a5=Math.max(a1,f)
a4=e
break
case 1935897198:a7=D.e.a0(D.b.u(255-(255-h)*(255-d),0,255))
a6=D.e.a0(D.b.u(255-(255-g)*(255-a0),0,255))
a5=D.e.a0(D.b.u(255-(255-f)*(255-a1),0,255))
a4=e
break
case 1684633120:a7=A.aj0(d,h)
a6=A.aj0(a0,g)
a5=A.aj0(a1,f)
a4=e
break
case 1818518631:a7=h+d>255?255:d+h
a6=g+a0>255?255:a0+g
a5=f+a1>255?255:a1+f
a4=e
break
case 1818706796:a4=e
a5=f
a6=g
a7=h
break
case 1870030194:a7=A.aD6(d,h,a2,e)
a6=A.aD6(a0,g,a2,e)
a5=A.aD6(a1,f,a2,e)
a4=e
break
case 1934387572:a7=A.aD7(d,h)
a6=A.aD7(a0,g)
a5=A.aD7(a1,f)
a4=e
break
case 1749838196:a7=A.aD4(d,h)
a6=A.aD4(a0,g)
a5=A.aD4(a1,f)
a4=e
break
case 1984719220:a7=A.aD8(d,h)
a6=A.aD8(a0,g)
a5=A.aD8(a1,f)
a4=e
break
case 1816947060:a7=A.aD5(d,h)
a6=A.aD5(a0,g)
a5=A.aD5(a1,f)
a4=e
break
case 1884055924:a7=h<128?Math.min(d,2*h):Math.max(d,2*(h-128))
a6=g<128?Math.min(a0,2*g):Math.max(a0,2*(g-128))
a5=f<128?Math.min(a1,2*f):Math.max(a1,2*(f-128))
a4=e
break
case 1749903736:a7=h<255-d?0:255
a6=g<255-a0?0:255
a5=f<255-a1?0:255
a4=e
break
case 1684629094:a7=Math.abs(h-d)
a6=Math.abs(g-a0)
a5=Math.abs(f-a1)
a4=e
break
case 1936553316:a7=D.e.be(h+d-2*h*d/255)
a6=D.e.be(g+a0-2*g*a0/255)
a5=D.e.be(f+a1-2*f*a1/255)
a4=e
break
case 1718842722:a4=e
a5=f
a6=g
a7=h
break
case 1717856630:a4=e
a5=f
a6=g
a7=h
break
case 1752524064:a4=e
a5=f
a6=g
a7=h
break
case 1935766560:a4=e
a5=f
a6=g
a7=h
break
case 1668246642:a4=e
a5=f
a6=g
a7=h
break
case 1819634976:a4=e
a5=f
a6=g
a7=h
break
default:a4=e
a5=f
a6=g
a7=h}m=1-a3
a7=D.e.a0(d*m+a7*a3)
a6=D.e.a0(a0*m+a6*a3)
a5=D.e.a0(a1*m+a5*a3)
a4=D.e.a0(a2*m+a4*a3)
w[l]=a7
a8=n+1
w[n]=a6
w[a8]=a5
w[a8+1]=a4}l+=4}}}b0=a9.z
b0.toString
return b0},
aoA(){var w,v,u,t,s=this,r="_input"
s.d=B.b(s.at,r).K()
w=B.b(s.at,r).T()
s.e=w
if(w!==1){s.d=0
return}v=B.b(s.at,r).fE(6)
for(w=v.a,u=v.d,t=0;t<6;++t)if(w[u+t]!==0){s.d=0
return}s.f=B.b(s.at,r).T()
s.b=B.b(s.at,r).K()
s.a=B.b(s.at,r).K()
s.r=B.b(s.at,r).T()
s.w=B.b(s.at,r).T()},
aoT(){var w,v,u,t,s,r,q=this,p="_imageResourceData",o=B.b(q.ax,p)
o.d=o.b
for(o=q.Q;w=B.b(q.ax,p),w.d<w.c;){v=B.b(q.ax,p).K()
u=B.b(q.ax,p).T()
w=B.b(q.ax,p)
w=w.a[w.d++]
t=B.b(q.ax,p).dJ(w)
if((w&1)===0)++B.b(q.ax,p).d
s=B.b(q.ax,p).K()
w=B.b(q.ax,p)
r=w.e2(s)
w.d=w.d+(r.c-r.d)
if((s&1)===1)++B.b(q.ax,p).d
if(v===943868237)o.l(0,u,new A.Vk(t,r))}},
aoU(){var w,v,u,t,s,r,q,p,o,n=this,m="_layerAndMaskData",l="layers",k=B.b(n.ay,m)
k.d=k.b
w=B.b(n.ay,m).K()
if((w&1)!==0)++w
v=B.b(n.ay,m).fE(w)
k=x.l
n.x=B.a([],k)
if(w>0){u=v.T()
$.hB()[0]=u
t=$.i2()[0]
if(t<0)t=-t
for(u=x.N,s=x.ha,r=x.af,q=0;q<t;++q){p=new A.Vn(B.E(u,s),B.a([],k),B.a([],r))
p.aea(v)
J.ed(B.b(n.x,l),p)}}for(q=0;q<J.bn(B.b(n.x,l));++q)J.a8(B.b(n.x,l),q).azH(v,n)
w=B.b(n.ay,m).K()
o=B.b(n.ay,m).fE(w)
if(w>0){o.T()
o.T()
o.T()
o.T()
o.T()
o.T()
o.aP()}},
aoW(){var w,v,u,t,s,r,q=this,p="_imageData",o="channels",n="mergeImageChannels",m=B.b(q.ch,p)
m.d=m.b
w=B.b(q.ch,p).T()
if(w===1){v=q.b*B.b(q.f,o)
u=new Uint16Array(v)
for(t=0;t<v;++t)u[t]=B.b(q.ch,p).T()}else u=null
q.y=B.a([],x.X)
for(t=0;t<B.b(q.f,o);++t){m=B.b(q.y,n)
s=B.b(q.ch,p)
s.toString
r=t===3?-1:t
r=new A.wB(r)
r.a51(s,q.a,q.b,q.r,w,u,t)
J.ed(m,r)}q.z=A.aMZ(q.w,q.r,q.a,q.b,B.b(q.y,n))}}
A.Vk.prototype={
gae(d){return this.b}}
A.Vn.prototype={
aea(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a4.K(),a3=$.cN()
a3[0]=a2
a2=$.eU()
a1.a=a2[0]
a3[0]=a4.K()
a1.b=a2[0]
a3[0]=a4.K()
a1.c=a2[0]
a3[0]=a4.K()
a2=a2[0]
a1.d=a2
a2=B.b(a2,"right")
a3=a1.b
a3.toString
a1.e=a2-a3
a3=B.b(a1.c,"bottom")
a2=a1.a
a2.toString
a1.f=a3-a2
a1.as=B.a([],x.X)
w=a4.T()
for(v=0;v<w;++v){a2=a4.T()
$.hB()[0]=a2
u=$.i2()[0]
a4.K()
J.ed(B.b(a1.as,"channels"),new A.wB(u))}t=a4.K()
if(t!==943868237)throw B.c(A.ah("Invalid PSD layer signature: "+D.b.fj(t,16)))
a1.r=a4.K()
a1.w=a4.aP()
a4.aP()
a1.y=a4.aP()
if(a4.aP()!==0)throw B.c(A.ah("Invalid PSD layer data"))
s=a4.K()
r=a4.fE(s)
if(s>0){s=r.K()
if(s>0){q=r.fE(s)
a2=q.d
q.K()
q.K()
q.K()
q.K()
q.aP()
q.aP()
if(q.c-a2===20)q.d+=2
else{q.aP()
q.aP()
q.K()
q.K()
q.K()
q.K()}}s=r.K()
if(s>0)new A.aiX().ae8(r.fE(s))
s=r.aP()
a1.Q=r.dJ(s)
p=4-D.b.cd(s,4)-1
if(p>0)r.d+=p
for(a2=r.c,a3=a1.ay,o=a1.cy,n=x.g0;r.d<a2;){t=r.K()
if(t!==943868237)throw B.c(A.ah("PSD invalid signature for layer additional data: "+D.b.fj(t,16)))
m=r.dJ(4)
s=r.K()
l=r.e2(s)
k=r.d+(l.c-l.d)
r.d=k
if((s&1)===1)r.d=k+1
a3.l(0,m,A.aY4(m,l))
if(m==="lrFX"){j=A.aB(n.a(a3.h(0,"lrFX")).b,null,0)
j.T()
i=j.T()
for(h=0;h<i;++h){j.dJ(4)
g=j.dJ(4)
f=j.K()
if(g==="dsdw"){e=new A.Vj()
o.push(e)
e.a=j.K()
j.K()
j.K()
j.K()
j.K()
j.T()
j.T()
j.T()
j.T()
j.T()
j.dJ(8)
k=j.a
d=j.d
a0=d+1
j.d=a0
e.b=k[d]!==0;++a0
j.d=a0
j.d=a0+1
j.T()
j.T()
j.T()
j.T()
j.T()}else if(g==="isdw"){e=new A.Vm()
o.push(e)
e.a=j.K()
j.K()
j.K()
j.K()
j.K()
j.T()
j.T()
j.T()
j.T()
j.T()
j.dJ(8)
k=j.a
d=j.d
a0=d+1
j.d=a0
e.b=k[d]!==0;++a0
j.d=a0
j.d=a0+1
j.T()
j.T()
j.T()
j.T()
j.T()}else if(g==="oglw"){e=new A.Vp()
o.push(e)
e.a=j.K()
j.K()
j.K()
j.T()
j.T()
j.T()
j.T()
j.T()
j.dJ(8)
k=j.a
d=j.d
a0=d+1
j.d=a0
e.b=k[d]!==0
j.d=a0+1
if(e.a===2){j.T()
j.T()
j.T()
j.T()
j.T()}}else if(g==="iglw"){e=new A.Vl()
o.push(e)
e.a=j.K()
j.K()
j.K()
j.T()
j.T()
j.T()
j.T()
j.T()
j.dJ(8)
k=j.a
d=j.d
a0=d+1
j.d=a0
e.b=k[d]!==0;++a0
j.d=a0
if(e.a===2){j.d=a0+1
j.T()
j.T()
j.T()
j.T()
j.T()}}else if(g==="bevl"){e=new A.Vi()
o.push(e)
e.a=j.K()
j.K()
j.K()
j.K()
j.dJ(8)
j.dJ(8)
j.T()
j.T()
j.T()
j.T()
j.T()
j.T()
j.T()
j.T()
j.T()
j.T()
k=++j.d+1
j.d=k
k=j.d=k+1
d=j.a
a0=k+1
j.d=a0
e.b=d[k]!==0;++a0
j.d=a0
j.d=a0+1
if(e.a===2){j.T()
j.T()
j.T()
j.T()
j.T()
j.T()
j.T()
j.T()
j.T()
j.T()}}else if(g==="sofi"){e=new A.Vq()
o.push(e)
e.a=j.K()
j.dJ(4)
j.T()
j.T()
j.T()
j.T()
j.T()
k=++j.d
d=j.a
j.d=k+1
e.b=d[k]!==0
j.T()
j.T()
j.T()
j.T()
j.T()}else j.d+=f}}}}},
azH(d,e){var w,v=this,u="channels"
for(w=0;w<J.bn(B.b(v.as,u));++w)J.a8(B.b(v.as,u),w).azN(d,B.b(v.e,"width"),B.b(v.f,"height"),e.r)
v.cx=A.aMZ(e.w,e.r,B.b(v.e,"width"),B.b(v.f,"height"),B.b(v.as,u))},
gae(d){return this.Q}}
A.wC.prototype={}
A.aiY.prototype={
jh(d){this.a=A.aMY(d)
return this.hm(0)},
hm(d){var w=this.a
if(w==null)return null
return w.auv()}}
A.apI.prototype={}
A.apH.prototype={
rT(d){var w=A.be(d,!0,null,0).fE(18),v=w.a,u=w.d
if(v[u+2]!==2)return!1
v=v[u+16]
if(v!==24&&v!==32)return!1
return!0},
lD(d){var w,v,u,t,s=this
s.a=new A.apI()
w=A.be(d,!0,null,0)
s.b=w
v=B.b(w,"input").fE(18)
w=v.a
u=v.d
if(w[u+2]!==2)return null
t=w[u+16]
if(t!==24&&t!==32)return null
t=s.a
t.a=w[u+12]&255|(w[u+13]&255)<<8
t.b=w[u+14]&255|(w[u+15]&255)<<8
t.d=B.b(s.b,"input").d
t=s.a
t.e=v.a[v.d+16]
return t},
hm(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k="input"
if(l.a==null)return null
w=B.b(l.b,k)
v=l.a
u=v.d
u.toString
w.d=u
t=A.jU(v.a,v.b,C.k9)
for(s=t.b-1,w=t.a,v=t.x;s>=0;--s)for(u=s*w,r=0;r<w;++r){q=B.b(l.b,k)
q=q.a[q.d++]
p=B.b(l.b,k)
p=p.a[p.d++]
o=B.b(l.b,k)
o=o.a[o.d++]
if(l.a.e===32){n=B.b(l.b,k)
m=n.a[n.d++]}else m=255
v[u+r]=(D.e.a0(D.b.u(m,0,255))<<24|D.e.a0(D.b.u(q,0,255))<<16|D.e.a0(D.b.u(p,0,255))<<8|D.e.a0(D.b.u(o,0,255)))>>>0}return t},
jh(d){if(this.lD(d)==null)return null
return this.hm(0)}}
A.apO.prototype={
dI(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.aP()}for(w=s.a,v=0;u=s.c,d>u;){v=D.b.cI(v,u)+(s.b&C.fc[u])
d-=u
s.c=8
s.b=w.a[w.d++]}if(d>0){if(u===0){s.c=8
s.b=w.aP()}w=D.b.cI(v,d)
u=s.b
t=s.c-d
v=w+(D.b.it(u,t)&C.fc[d])
s.c=t}return v}}
A.Y6.prototype={
j(d){var w=this,v=w.a
if(C.Bv.am(0,v))return B.e(C.Bv.h(0,v))+": "+w.b+" "+w.c
return"<"+v+">: "+w.b+" "+w.c},
azQ(d){var w=this.d
w.toString
this.e.d=w
return this.kE()},
OI(){var w,v,u=this,t=u.d
t.toString
u.e.d=t
w=B.a([],x.t)
for(t=u.c,v=0;v<t;++v)w.push(u.kE())
return w},
kE(){var w,v,u,t=this
switch(t.b){case 1:case 2:return t.e.aP()
case 3:return t.e.T()
case 4:return t.e.K()
case 5:w=t.e
v=w.K()
u=w.K()
if(u===0)return 0
return D.b.dv(v,u)
case 6:throw B.c(A.ah("Unhandled value type: SBYTE"))
case 7:return t.e.aP()
case 8:throw B.c(A.ah("Unhandled value type: SSHORT"))
case 9:throw B.c(A.ah("Unhandled value type: SLONG"))
case 10:throw B.c(A.ah("Unhandled value type: SRATIONAL"))
case 11:throw B.c(A.ah("Unhandled value type: FLOAT"))
case 12:throw B.c(A.ah("Unhandled value type: DOUBLE"))}return 0}}
A.apQ.prototype={
aus(d,e,f,g){var w,v,u,t=this
t.r=e
t.x=t.w=0
w=D.b.bC(t.a+7,8)
for(v=0,u=0;u<g;++u){t.I9(d,v,f)
v+=w}},
I9(d,e,f){var w,v,u,t,s,r,q,p=this
p.d=0
for(w=p.a,v=!0;f<w;){for(;v;){u=p.n6(10)
t=C.tN[u]
s=D.b.B(t,1)&15
if(s===12){t=C.ic[(u<<2&12|p.ic(2))>>>0]
r=D.b.B(t,1)
f+=D.b.B(t,4)&4095
p.eY(4-(r&7))}else if(s===0)throw B.c(A.ah("TIFFFaxDecoder0"))
else if(s===15)throw B.c(A.ah("TIFFFaxDecoder1"))
else{f+=D.b.B(t,5)&2047
p.eY(10-s)
if((t&1)===0){p.f[p.d++]=f
v=!1}}}if(f===w){if(p.z===2)if(p.w!==0){w=p.x
w.toString
p.x=w+1
p.w=0}break}for(;!v;){t=C.qp[p.ic(4)]
q=t>>>5&2047
if(q===100){t=C.vx[p.n6(9)]
s=D.b.B(t,1)&15
q=D.b.B(t,5)&2047
if(s===12){p.eY(5)
t=C.ic[p.ic(4)]
r=D.b.B(t,1)
q=D.b.B(t,4)&4095
p.ix(d,e,f,q)
f+=q
p.eY(4-(r&7))}else if(s===15)throw B.c(A.ah("TIFFFaxDecoder2"))
else{p.ix(d,e,f,q)
f+=q
p.eY(9-s)
if((t&1)===0){p.f[p.d++]=f
v=!0}}}else{if(q===200){t=C.pA[p.ic(2)]
q=t>>>5&2047
p.ix(d,e,f,q)
f+=q
p.eY(2-(t>>>1&15))
p.f[p.d++]=f}else{p.ix(d,e,f,q)
f+=q
p.eY(4-(t>>>1&15))
p.f[p.d++]=f}v=!0}}if(f===w){if(p.z===2)if(p.w!==0){w=p.x
w.toString
p.x=w+1
p.w=0}break}}p.f[p.d++]=f},
aut(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.r=a1
d.z=3
d.x=d.w=0
w=d.a
v=D.b.bC(w+7,8)
u=B.at(2,null,!1,x.I)
d.at=a4&1
d.as=a4>>>2&1
if(d.Ya()!==1)throw B.c(A.ah("TIFFFaxDecoder3"))
d.I9(a0,0,a2)
for(t=v,s=1;s<a3;++s){if(d.Ya()===0){r=d.e
d.e=d.f
d.f=r
d.y=0
q=a2
p=-1
o=!0
n=0
while(!0){q.toString
if(!(q<w))break
d.Wr(p,o,u)
m=u[0]
l=u[1]
k=C.qt[d.ic(7)]&255
j=k>>>3&15
i=k&7
if(j===0){if(!o){l.toString
d.ix(a0,t,q,l-q)}d.eY(7-i)
q=l
p=q}else if(j===1){d.eY(7-i)
h=n+1
g=h+1
if(o){q+=d.zx()
d.f[n]=q
f=d.zw()
d.ix(a0,t,q,f)
q+=f
d.f[h]=q}else{f=d.zw()
d.ix(a0,t,q,f)
q+=f
d.f[n]=q
q+=d.zx()
d.f[h]=q}n=g
p=q}else{if(j<=8){m.toString
e=m+(j-5)
h=n+1
d.f[n]=e
o=!o
if(o)d.ix(a0,t,q,e-q)
d.eY(7-i)}else throw B.c(A.ah("TIFFFaxDecoder4"))
q=e
n=h
p=q}}d.f[n]=q
d.d=n+1}else d.I9(a0,t,a2)
t+=v}},
aux(a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.r=a4
a2.z=4
a2.x=a2.w=0
w=a2.a
v=D.b.bC(w+7,8)
u=B.at(2,null,!1,x.I)
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
a2.Wr(o,n,u)
l=u[0]
k=u[1]
j=C.qt[a2.ic(7)]&255
i=j>>>3&15
h=j&7
if(i===0){if(!n){k.toString
a2.ix(a3,s,p,k-p)}a2.eY(7-h)
p=k
o=p}else if(i===1){a2.eY(7-h)
g=m+1
f=g+1
if(n){p+=a2.zx()
q[m]=p
e=a2.zw()
a2.ix(a3,s,p,e)
p+=e
q[g]=p}else{e=a2.zw()
a2.ix(a3,s,p,e)
p+=e
q[m]=p
p+=a2.zx()
q[g]=p}m=f
o=p}else if(i<=8){l.toString
d=l+(i-5)
g=m+1
q[m]=d
n=!n
if(n)a2.ix(a3,s,p,d-p)
a2.eY(7-h)
p=d
m=g
o=p}else if(i===11){if(a2.ic(3)!==7)throw B.c(A.ah("TIFFFaxDecoder5"))
for(a0=0,a1=!1;!a1;){for(;a2.ic(1)!==1;)++a0
if(a0>5){a0-=6
if(!n&&a0>0){g=m+1
q[m]=p
m=g}p+=a0
if(a0>0)n=!0
if(a2.ic(1)===0){if(!n){g=m+1
q[m]=p
m=g}n=!0}else{if(n){g=m+1
q[m]=p
m=g}n=!1}a1=!0}if(a0===5){if(!n){g=m+1
q[m]=p
m=g}p+=a0
n=!0}else{p+=a0
g=m+1
q[m]=p
a2.ix(a3,s,p,1);++p
m=g
n=!1}}}else throw B.c(A.ah("TIFFFaxDecoder5 "+i))}q[m]=p
a2.d=m+1
s+=v}},
zx(){var w,v,u,t,s,r,q=this
for(w=0,v=!0;v;){u=q.n6(10)
t=C.tN[u]
s=D.b.B(t,1)&15
if(s===12){t=C.ic[(u<<2&12|q.ic(2))>>>0]
r=D.b.B(t,1)
w+=D.b.B(t,4)&4095
q.eY(4-(r&7))}else if(s===0)throw B.c(A.ah("TIFFFaxDecoder0"))
else if(s===15)throw B.c(A.ah("TIFFFaxDecoder1"))
else{w+=D.b.B(t,5)&2047
q.eY(10-s)
if((t&1)===0)v=!1}}return w},
zw(){var w,v,u,t,s,r,q=this
for(w=0,v=!1;!v;){u=C.qp[q.ic(4)]
t=u>>>5&2047
if(t===100){u=C.vx[q.n6(9)]
s=D.b.B(u,1)&15
r=D.b.B(u,5)
if(s===12){q.eY(5)
u=C.ic[q.ic(4)]
r=D.b.B(u,1)
w+=D.b.B(u,4)&4095
q.eY(4-(r&7))}else if(s===15)throw B.c(A.ah("TIFFFaxDecoder2"))
else{w+=r&2047
q.eY(9-s)
if((u&1)===0)v=!0}}else{if(t===200){u=C.pA[q.ic(2)]
w+=u>>>5&2047
q.eY(2-(u>>>1&15))}else{w+=t
q.eY(4-(u>>>1&15))}v=!0}}return w},
Ya(){var w,v,u=this,t="TIFFFaxDecoder8",s=u.as
if(s===0){if(u.n6(12)!==1)throw B.c(A.ah("TIFFFaxDecoder6"))}else if(s===1){s=u.w
s.toString
w=8-s
if(u.n6(w)!==0)throw B.c(A.ah(t))
if(w<4)if(u.n6(8)!==0)throw B.c(A.ah(t))
for(;v=u.n6(8),v!==1;)if(v!==0)throw B.c(A.ah(t))}if(u.at===0)return 1
else return u.ic(1)},
Wr(d,e,f){var w,v=this,u=v.e,t=v.d,s=v.y,r=s>0?s-1:0
r=e?(r&4294967294)>>>0:(r|1)>>>0
for(w=r;w<t;w+=2){s=u[w]
s.toString
d.toString
if(s>d){v.y=w
f[0]=s
break}}s=w+1
if(s<t)f[1]=u[s]},
ix(d,e,f,g){var w,v,u,t,s,r,q=8*e+f,p=q+g,o=D.b.B(q,3),n=q&7
if(n>0){w=D.b.cI(1,7-n)
v=d.a[d.d+o]
while(!0){if(!(w>0&&q<p))break
v=(v|w)>>>0
w=w>>>1;++q}d.l(0,o,v)}o=D.b.B(q,3)
for(u=p-7,t=d.a,s=d.d;q<u;o=r){r=o+1
t[s+o]=255
q+=8}for(;q<p;){u=s+D.b.B(q,3)
t[u]=(t[u]|D.b.cI(1,7-(q&7)))>>>0;++q}},
n6(d){var w,v,u,t,s,r,q,p,o,n,m=this,l="data",k=B.b(m.r,l),j=k.c-k.d-1,i=m.x
k=m.c
if(k===1){k=B.b(m.r,l)
i.toString
w=k.a[k.d+i]
if(i===j){v=0
u=0}else{k=i+1
t=m.r
if(k===j){t=B.b(t,l)
v=t.a[t.d+k]
u=0}else{t=B.b(t,l)
v=t.a[t.d+k]
k=B.b(m.r,l)
u=k.a[k.d+(i+2)]}}}else if(k===2){k=B.b(m.r,l)
i.toString
w=C.e5[k.a[k.d+i]&255]
if(i===j){v=0
u=0}else{k=i+1
t=m.r
if(k===j){t=B.b(t,l)
v=C.e5[t.a[t.d+k]&255]
u=0}else{t=B.b(t,l)
v=C.e5[t.a[t.d+k]&255]
k=B.b(m.r,l)
u=C.e5[k.a[k.d+(i+2)]&255]}}}else throw B.c(A.ah("TIFFFaxDecoder7"))
k=m.w
k.toString
s=8-k
r=d-s
if(r>8){q=r-8
p=8}else{p=r
q=0}k=m.x
k.toString
k=m.x=k+1
o=D.b.cI(w&C.fc[s],r)
n=D.b.eX(v&C.li[p],8-p)
if(q!==0){n=D.b.cI(n,q)|D.b.eX(u&C.li[q],8-q)
m.x=k+1
m.w=q}else if(p===8){m.w=0
m.x=k+1}else m.w=p
return(o|n)>>>0},
ic(d){var w,v,u,t,s,r,q=this,p="data",o=B.b(q.r,p),n=o.c-o.d-1,m=q.x
o=q.c
if(o===1){o=B.b(q.r,p)
m.toString
w=o.a[o.d+m]
if(m===n)v=0
else{o=B.b(q.r,p)
v=o.a[o.d+(m+1)]}}else if(o===2){o=B.b(q.r,p)
m.toString
w=C.e5[o.a[o.d+m]&255]
if(m===n)v=0
else{o=B.b(q.r,p)
v=C.e5[o.a[o.d+(m+1)]&255]}}else throw B.c(A.ah("TIFFFaxDecoder7"))
o=q.w
o.toString
u=8-o
t=d-u
s=u-d
if(s>=0){r=D.b.eX(w&C.fc[u],s)
o+=d
q.w=o
if(o===8){q.w=0
o=q.x
o.toString
q.x=o+1}}else{r=(D.b.cI(w&C.fc[u],-s)|D.b.eX(v&C.li[t],8-t))>>>0
o=q.x
o.toString
q.x=o+1
q.w=t}return r},
eY(d){var w,v=this,u=v.w
u.toString
w=u-d
if(w<0){u=v.x
u.toString
v.x=u-1
v.w=8+w}else v.w=w}}
A.Y7.prototype={
aeg(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=A.aB(d,null,0),j=d.T()
for(w=l.a,v=0;v<j;++v){u=d.T()
t=d.T()
s=d.K()
r=new A.Y6(u,t,s,k)
if(s*(t<13&&t>0?C.a6H[t]:0)>4)r.d=d.K()
else{q=d.d
r.d=q
d.d=q+4}w.l(0,u,r)
if(u===256){q=r.d
q.toString
k.d=q
l.b=r.kE()}else if(u===257){q=r.d
q.toString
k.d=q
l.c=r.kE()}else if(u===262){q=r.d
q.toString
k.d=q
l.d=r.kE()}else if(u===259){q=r.d
q.toString
k.d=q
l.e=r.kE()}else if(u===258){q=r.d
q.toString
k.d=q
l.f=r.kE()}else if(u===277){q=r.d
q.toString
k.d=q
l.r=r.kE()}else if(u===317){q=r.d
q.toString
k.d=q
l.z=r.kE()}else if(u===339){q=r.d
q.toString
k.d=q
l.w=r.kE()}else if(u===320){q=r.OI()
l.fy=q
l.go=0
q=q.length/3|0
l.id=q
l.k1=B.b(q,"colorMapGreen")*2}}if(l.b===0||l.c===0)return
q=l.fy
if(q!=null&&l.f===8)for(p=q.length,v=0;v<p;++v)q[v]=D.b.B(q[v],8)
if(l.d===0)l.y=!0
if(w.am(0,324)){l.ax=l.qE(322)
l.ay=l.qE(323)
l.ch=l.Ah(324)
l.CW=l.Ah(325)}else{l.ax=l.Ag(322,l.b)
if(!w.am(0,278))l.ay=l.Ag(323,l.c)
else{o=l.qE(278)
if(o===-1)l.ay=l.c
else l.ay=o}l.ch=l.Ah(273)
l.CW=l.Ah(279)}q=l.b
n=l.ax
l.cx=D.b.dv(q+n-1,n)
n=l.c
q=l.ay
l.cy=D.b.dv(n+q-1,q)
l.dx=l.Ag(266,1)
l.dy=l.qE(292)
l.fr=l.qE(293)
l.qE(338)
switch(l.d){case 0:case 1:w=l.f
if(w===1&&l.r===1)l.x=0
else if(w===4&&l.r===1)l.x=1
else if(D.b.cd(w,8)===0){w=l.r
if(w===1)l.x=2
else if(w===2)l.x=3
else l.x=8}break
case 2:if(D.b.cd(l.f,8)===0){w=l.r
if(w===3)l.x=5
else if(w===4)l.x=6
else l.x=8}break
case 3:if(l.r===1){w=l.f
w=w===4||w===8||w===16}else w=!1
if(w)l.x=4
break
case 4:if(l.f===1&&l.r===1)l.x=0
break
case 6:if(l.e===7&&l.f===8&&l.r===3)l.x=5
else{if(w.am(0,530)){m=w.h(0,530).OI()
w=l.Q=m[0]
l.as=m[1]}else w=l.as=l.Q=2
if(B.b(w,"chromaSubH")*B.b(l.as,"chromaSubV")===1)l.x=8
else if(l.f===8&&l.r===3)l.x=7}break
default:if(D.b.cd(l.f,8)===0)l.x=8
break}},
dz(d,e){var w,v,u,t,s=this
s.k2=A.jU(s.b,s.c,C.br)
for(w=0,v=0;w<B.b(s.cy,"tilesY");++w)for(u=0;u<B.b(s.cx,"tilesX");++u,++v)s.agN(e,u,w)
t=s.k2
t.toString
return t},
agN(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8="colorMapRed",b9="colorMapGreen",c0="colorMapBlue"
if(b6.x===0){b6.agE(c1,c2,c3)
return}s=c3*B.b(b6.cx,"tilesX")+c2
c1.d=b6.ch[s]
r=b6.ax
q=c2*r
p=b6.ay
o=c3*p
w=b6.CW[s]
n=r*p*b6.r
r=b6.f
p=r===16
if(p)n*=2
else if(r===32)n*=4
v=null
if(r===8||p||r===32||r===64){r=b6.e
if(r===1)v=c1
else if(r===5){v=A.be(new Uint8Array(n),!1,b7,0)
u=A.aLZ()
try{J.aGt(u,A.aB(c1,w,0),v.a)}catch(m){t=B.ay(m)
B.m1(t)}if(b6.z===2)for(r=b6.ay,l=b6.r,p=b6.ax,k=p*l,j=0;j<r;++j){i=l*(j*p+1)
for(h=l;h<k;++h){g=v
f=g.a
g=g.d+i
e=f[g]
d=v
f[g]=e+d.a[d.d+(i-l)];++i}}}else if(r===32773){v=A.be(new Uint8Array(n),!1,b7,0)
b6.Vk(c1,n,v.a)}else if(r===32946){r=A.aLq(c1.y9(0,0,w)).c
v=A.be(x.L.a(B.bP(r.c.buffer,0,r.a)),!1,b7,0)}else if(r===8)v=A.be(C.eL.vH(A.vF(c1.y9(0,0,w),1,b7,0),!1),!1,b7,0)
else if(r===6){if(b6.k2==null)b6.k2=A.jU(b6.b,b6.c,C.br)
a0=new A.Rc().jh(c1.y9(0,0,w))
r=b6.k2
r.toString
b6.am6(a0,r,q,o,b6.ax,b6.ay)
if(b6.k3!=null){r=b6.k2
r.toString
p=new A.Qu(B.E(x.T,x.r))
p.ae_(r,16,3)
b6.k3=p}return}else throw B.c(A.ah("Unsupported Compression Type: "+r))
a1=o
a2=0
while(!0){if(!(a2<b6.ay&&a1<b6.c))break
a3=q
a4=0
while(!0){if(!(a4<b6.ax&&a3<b6.b))break
r=b6.r
if(r===1){r=b6.w
if(r===3){r=b6.f
if(r===32){r=v.K()
$.cN()[0]=r
a5=$.pP()[0]}else if(r===64)a5=v.Fx()
else if(r===16){r=v.T()
if($.eC==null)A.mn()
a5=$.eC[r]}else a5=0
r=b6.k3
if(r!=null)r.oo(a3,a1,a5)
if(b6.k2!=null){a6=D.e.a0(D.e.u(a5*255,0,255))
if(b6.d===3&&b6.fy!=null){r=b6.fy
r.toString
r=r[B.b(b6.go,b8)+a6]
p=b6.fy
p.toString
p=p[B.b(b6.id,b9)+a6]
g=b6.fy
g.toString
g=g[B.b(b6.k1,c0)+a6]
a7=(D.e.a0(D.b.u(255,0,255))<<24|D.e.a0(D.b.u(g,0,255))<<16|D.e.a0(D.b.u(p,0,255))<<8|D.e.a0(D.b.u(r,0,255)))>>>0}else a7=(D.e.a0(D.b.u(255,0,255))<<24|D.e.a0(D.b.u(a6,0,255))<<16|D.e.a0(D.b.u(a6,0,255))<<8|D.e.a0(D.b.u(a6,0,255)))>>>0
r=b6.k2
r.x[a1*r.a+a3]=a7}}else{p=b6.f
if(p===8)if(r===2){r=v
r=r.a[r.d++]
$.hc()[0]=r
a6=$.hC()[0]}else{r=v
a6=r.a[r.d++]}else if(p===16)if(r===2){r=v.T()
$.hB()[0]=r
a6=$.i2()[0]}else a6=v.T()
else if(p===32)if(r===2){r=v.K()
$.cN()[0]=r
a6=$.eU()[0]}else a6=v.K()
else a6=0
r=b6.k3
if(r!=null)r.oo(a3,a1,a6)
if(b6.k2!=null){r=b6.f
if(r===16)a6=D.b.B(a6,8)
else if(r===32)a6=D.b.B(a6,24)
r=b6.d
if(r===0)a6=255-a6
if(r===3&&b6.fy!=null){r=b6.fy
r.toString
r=r[B.b(b6.go,b8)+a6]
p=b6.fy
p.toString
p=p[B.b(b6.id,b9)+a6]
g=b6.fy
g.toString
g=g[B.b(b6.k1,c0)+a6]
a7=(D.e.a0(D.b.u(255,0,255))<<24|D.e.a0(D.b.u(g,0,255))<<16|D.e.a0(D.b.u(p,0,255))<<8|D.e.a0(D.b.u(r,0,255)))>>>0}else a7=(D.e.a0(D.b.u(255,0,255))<<24|D.e.a0(D.b.u(a6,0,255))<<16|D.e.a0(D.b.u(a6,0,255))<<8|D.e.a0(D.b.u(a6,0,255)))>>>0
r=b6.k2
r.x[a1*r.a+a3]=a7}}}else if(r===2){r=b6.f
if(r===8){r=b6.w===2
if(r){p=v
p=p.a[p.d++]
$.hc()[0]=p
a6=$.hC()[0]}else{p=v
a6=p.a[p.d++]}if(r){r=v
r=r.a[r.d++]
$.hc()[0]=r
a8=$.hC()[0]}else{r=v
a8=r.a[r.d++]}}else if(r===16){if(b6.w===2){r=v.T()
$.hB()[0]=r
a6=$.i2()[0]}else a6=v.T()
if(b6.w===2){r=v.T()
$.hB()[0]=r
a8=$.i2()[0]}else a8=v.T()}else if(r===32){if(b6.w===2){r=v.K()
$.cN()[0]=r
a6=$.eU()[0]}else a6=v.K()
if(b6.w===2){r=v.K()
$.cN()[0]=r
a8=$.eU()[0]}else a8=v.K()}else{a6=0
a8=0}r=b6.k3
if(r!=null){r.oo(a3,a1,a6)
b6.k3.tW(a3,a1,a8)}if(b6.k2!=null){r=b6.f
p=r===16
if(p)a6=D.b.B(a6,8)
else if(r===32)a6=D.b.B(a6,24)
if(p)a8=D.b.B(a8,8)
else if(r===32)a8=D.b.B(a8,24)
r=D.e.a0(D.b.u(a8,0,255))
p=D.e.a0(D.b.u(a6,0,255))
g=D.e.a0(D.b.u(a6,0,255))
f=D.e.a0(D.b.u(a6,0,255))
e=b6.k2
e.x[a1*e.a+a3]=(r<<24|p<<16|g<<8|f)>>>0}}else if(r===3){r=b6.w
if(r===3){r=b6.f
if(r===32){r=v.K()
p=$.cN()
p[0]=r
r=$.pP()
a9=r[0]
p[0]=v.K()
b0=r[0]
p[0]=v.K()
b1=r[0]}else if(r===64){a9=v.Fx()
b0=0
b1=0}else if(r===16){r=v.T()
if($.eC==null)A.mn()
a9=$.eC[r]
r=v.T()
if($.eC==null)A.mn()
b0=$.eC[r]
r=v.T()
if($.eC==null)A.mn()
b1=$.eC[r]}else{a9=0
b0=0
b1=0}r=b6.k3
if(r!=null){r.oo(a3,a1,a9)
b6.k3.tW(a3,a1,b0)
b6.k3.yN(a3,a1,b1)}if(b6.k2!=null){b2=D.e.a0(D.e.u(a9*255,0,255))
b3=D.e.a0(D.e.u(b0*255,0,255))
b4=D.e.a0(D.e.u(b1*255,0,255))
r=D.e.a0(D.b.u(255,0,255))
p=D.e.a0(D.b.u(b4,0,255))
g=D.e.a0(D.b.u(b3,0,255))
f=D.e.a0(D.b.u(b2,0,255))
e=b6.k2
e.x[a1*e.a+a3]=(r<<24|p<<16|g<<8|f)>>>0}}else{p=b6.f
if(p===8){r=r===2
if(r){p=v
p=p.a[p.d++]
$.hc()[0]=p
a9=$.hC()[0]}else{p=v
a9=p.a[p.d++]}if(r){p=v
p=p.a[p.d++]
$.hc()[0]=p
b0=$.hC()[0]}else{p=v
b0=p.a[p.d++]}if(r){r=v
r=r.a[r.d++]
$.hc()[0]=r
b1=$.hC()[0]}else{r=v
b1=r.a[r.d++]}}else if(p===16){if(r===2){r=v.T()
$.hB()[0]=r
a9=$.i2()[0]}else a9=v.T()
if(b6.w===2){r=v.T()
$.hB()[0]=r
b0=$.i2()[0]}else b0=v.T()
if(b6.w===2){r=v.T()
$.hB()[0]=r
b1=$.i2()[0]}else b1=v.T()}else if(p===32){if(r===2){r=v.K()
$.cN()[0]=r
a9=$.eU()[0]}else a9=v.K()
if(b6.w===2){r=v.K()
$.cN()[0]=r
b0=$.eU()[0]}else b0=v.K()
if(b6.w===2){r=v.K()
$.cN()[0]=r
b1=$.eU()[0]}else b1=v.K()}else{a9=0
b0=0
b1=0}r=b6.k3
if(r!=null){r.oo(a3,a1,a9)
b6.k3.tW(a3,a1,b0)
b6.k3.yN(a3,a1,b1)}if(b6.k2!=null){r=b6.f
p=r===16
if(p)a9=D.b.B(a9,8)
else if(r===32)a9=D.b.B(a9,24)
if(p)b0=D.b.B(b0,8)
else if(r===32)b0=D.b.B(b0,24)
if(p)b1=D.b.B(b1,8)
else if(r===32)b1=D.b.B(b1,24)
r=D.e.a0(D.b.u(255,0,255))
p=D.e.a0(D.b.u(b1,0,255))
g=D.e.a0(D.b.u(b0,0,255))
f=D.e.a0(D.b.u(a9,0,255))
e=b6.k2
e.x[a1*e.a+a3]=(r<<24|p<<16|g<<8|f)>>>0}}}else if(r>=4){r=b6.w
if(r===3){r=b6.f
if(r===32){r=v.K()
p=$.cN()
p[0]=r
r=$.pP()
a9=r[0]
p[0]=v.K()
b0=r[0]
p[0]=v.K()
b1=r[0]
p[0]=v.K()
b5=r[0]}else if(r===64){a9=v.Fx()
b0=0
b1=0
b5=0}else if(r===16){r=v.T()
if($.eC==null)A.mn()
a9=$.eC[r]
r=v.T()
if($.eC==null)A.mn()
b0=$.eC[r]
r=v.T()
if($.eC==null)A.mn()
b1=$.eC[r]
r=v.T()
if($.eC==null)A.mn()
b5=$.eC[r]}else{a9=0
b0=0
b1=0
b5=0}r=b6.k3
if(r!=null){r.oo(a3,a1,a9)
b6.k3.tW(a3,a1,b0)
b6.k3.yN(a3,a1,b1)
b6.k3.Ql(a3,a1,b5)}if(b6.k2!=null){b2=D.e.a0(D.e.u(a9*255,0,255))
b3=D.e.a0(D.e.u(b0*255,0,255))
b4=D.e.a0(D.e.u(b1*255,0,255))
r=D.e.a0(D.b.u(D.e.a0(D.e.u(b5*255,0,255)),0,255))
p=D.e.a0(D.b.u(b4,0,255))
g=D.e.a0(D.b.u(b3,0,255))
f=D.e.a0(D.b.u(b2,0,255))
e=b6.k2
e.x[a1*e.a+a3]=(r<<24|p<<16|g<<8|f)>>>0}}else{p=b6.f
if(p===8){r=r===2
if(r){p=v
p=p.a[p.d++]
$.hc()[0]=p
a9=$.hC()[0]}else{p=v
a9=p.a[p.d++]}if(r){p=v
p=p.a[p.d++]
$.hc()[0]=p
b0=$.hC()[0]}else{p=v
b0=p.a[p.d++]}if(r){p=v
p=p.a[p.d++]
$.hc()[0]=p
b1=$.hC()[0]}else{p=v
b1=p.a[p.d++]}if(r){r=v
r=r.a[r.d++]
$.hc()[0]=r
b5=$.hC()[0]}else{r=v
b5=r.a[r.d++]}}else if(p===16){if(r===2){r=v.T()
$.hB()[0]=r
a9=$.i2()[0]}else a9=v.T()
if(b6.w===2){r=v.T()
$.hB()[0]=r
b0=$.i2()[0]}else b0=v.T()
if(b6.w===2){r=v.T()
$.hB()[0]=r
b1=$.i2()[0]}else b1=v.T()
if(b6.w===2){r=v.T()
$.hB()[0]=r
b5=$.i2()[0]}else b5=v.T()}else if(p===32){if(r===2){r=v.K()
$.cN()[0]=r
a9=$.eU()[0]}else a9=v.K()
if(b6.w===2){r=v.K()
$.cN()[0]=r
b0=$.eU()[0]}else b0=v.K()
if(b6.w===2){r=v.K()
$.cN()[0]=r
b1=$.eU()[0]}else b1=v.K()
if(b6.w===2){r=v.K()
$.cN()[0]=r
b5=$.eU()[0]}else b5=v.K()}else{a9=0
b0=0
b1=0
b5=0}r=b6.k3
if(r!=null){r.oo(a3,a1,a9)
b6.k3.tW(a3,a1,b0)
b6.k3.yN(a3,a1,b1)
b6.k3.Ql(a3,a1,b5)}if(b6.k2!=null){r=b6.f
p=r===16
if(p)a9=D.b.B(a9,8)
else if(r===32)a9=D.b.B(a9,24)
if(p)b0=D.b.B(b0,8)
else if(r===32)b0=D.b.B(b0,24)
if(p)b1=D.b.B(b1,8)
else if(r===32)b1=D.b.B(b1,24)
if(p)b5=D.b.B(b5,8)
else if(r===32)b5=D.b.B(b5,24)
r=D.e.a0(D.b.u(b5,0,255))
p=D.e.a0(D.b.u(b1,0,255))
g=D.e.a0(D.b.u(b0,0,255))
f=D.e.a0(D.b.u(a9,0,255))
e=b6.k2
e.x[a1*e.a+a3]=(r<<24|p<<16|g<<8|f)>>>0}}}++a4;++a3}++a2;++a1}}else throw B.c(A.ah("Unsupported bitsPerSample: "+r))},
am6(d,e,f,g,h,i){var w,v,u,t,s,r,q,p
for(w=d.x,v=d.a,u=e.x,t=e.a,s=0;s<i;++s)for(r=s*v,q=(s+g)*t,p=0;p<h;++p)u[q+(p+f)]=w[r+p]},
agE(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=4278190080,a8=4294967295,a9=b2*B.b(a5.cx,"tilesX")+b1
b0.d=a5.ch[a9]
v=a5.ax
u=b1*v
t=a5.ay
s=b2*t
r=a5.CW[a9]
w=null
q=a5.e
if(q===32773){p=D.b.cd(v,8)===0?D.b.bC(v,8)*t:(D.b.bC(v,8)+1)*t
w=A.be(new Uint8Array(v*t),!1,a6,0)
a5.Vk(b0,p,w.a)}else if(q===5){w=A.be(new Uint8Array(v*t),!1,a6,0)
A.aLZ().Mp(0,A.aB(b0,r,0),w.a)
if(a5.z===2)for(v=a5.c,o=a5.r,t=a5.b,q=t*o,n=0;n<v;++n){m=o*(n*t+1)
for(l=o;l<q;++l){k=w
j=k.a
k=k.d+m
i=j[k]
h=w
j[k]=i+h.a[h.d+(m-o)];++m}}}else if(q===2){w=A.be(new Uint8Array(v*t),!1,a6,0)
try{A.aDy(a5.dx,a5.ax,a5.ay).aus(w,b0,0,a5.ay)}catch(g){}}else if(q===3){w=A.be(new Uint8Array(v*t),!1,a6,0)
try{A.aDy(a5.dx,a5.ax,a5.ay).aut(w,b0,0,a5.ay,a5.dy)}catch(g){}}else if(q===4){w=A.be(new Uint8Array(v*t),!1,a6,0)
try{A.aDy(a5.dx,a5.ax,a5.ay).aux(w,b0,0,a5.ay,a5.fr)}catch(g){}}else if(q===8)w=A.be(C.eL.vH(A.vF(b0.y9(0,0,r),1,a6,0),!1),!1,a6,0)
else if(q===32946){v=A.aLq(b0.y9(0,0,r)).c
w=A.be(x.L.a(B.bP(v.c.buffer,0,v.a)),!1,a6,0)}else if(q===1)w=b0
else throw B.c(A.ah("Unsupported Compression Type: "+q))
f=new A.apO(w)
v=a5.y
e=v?a7:a8
d=v?a8:a7
a0=a5.k2
for(v=a0.x,t=a0.a,q=a0.b,a1=s,a2=0;a2<a5.ay;++a2,++a1){for(k=a1*t,j=a1<q,a3=u,a4=0;a4<a5.ax;++a4,++a3){if(!j||a3>=t)break
i=k+a3
if(f.dI(1)===0)v[i]=d
else v[i]=e}f.c=0}},
Vk(d,e,f){var w,v,u,t,s,r,q,p,o
for(w=0,v=0;v<e;){u=w+1
t=d.a
s=d.d
r=t[s+w]
$.hc()[0]=r
q=$.hC()[0]
if(q>=0&&q<=127)for(r=q+1,w=u,p=0;p<r;++p,v=o,w=u){o=v+1
u=w+1
f[v]=t[s+w]}else{r=q<=-1&&q>=-127
w=u+1
if(r){t=t[s+u]
for(s=-q+1,p=0;p<s;++p,v=o){o=v+1
f[v]=t}}}}},
Ag(d,e){var w=this.a
if(!w.am(0,d))return e
return w.h(0,d).azQ(0)},
qE(d){return this.Ag(d,0)},
Ah(d){var w=this.a
if(!w.am(0,d))return null
return w.h(0,d).OI()}}
A.apR.prototype={}
A.agh.prototype={
Mp(d,e,f){var w,v,u,t,s,r,q,p=this,o="_data",n="_outPointer",m="_out",l="_bufferLength"
p.r=f
w=f.length
p.w=0
v=x.D.a(e.a)
p.e=v
p.f=B.b(v,o).length
p.b=e.d
if(B.b(p.e,o)[0]===0&&B.b(p.e,o)[1]===1)throw B.c(A.ah("Invalid LZW Data"))
p.X7()
p.d=p.c=0
u=p.IE()
v=p.x
t=0
while(!0){if(!(u!==257&&B.b(p.w,n)<w))break
if(u===256){p.X7()
u=p.IE()
p.as=0
if(u===257)break
s=B.b(p.r,m)
r=B.b(p.w,n)
p.w=r+1
J.dN(s,r,u)
t=u}else{s=p.Q
s.toString
if(u<s){p.WB(u)
for(q=B.b(p.as,l)-1;q>=0;--q){s=B.b(p.r,m)
r=B.b(p.w,n)
p.w=r+1
J.dN(s,r,v[q])}p.U6(t,v[B.b(p.as,l)-1])}else{p.WB(t)
for(q=B.b(p.as,l)-1;q>=0;--q){s=B.b(p.r,m)
r=B.b(p.w,n)
p.w=r+1
J.dN(s,r,v[q])}s=B.b(p.r,m)
r=B.b(p.w,n)
p.w=r+1
J.dN(s,r,v[B.b(p.as,l)-1])
p.U6(t,v[B.b(p.as,l)-1])}t=u}u=p.IE()}},
U6(d,e){var w=this,v=B.b(w.y,"_table"),u=w.Q
u.toString
v[u]=e
u=B.b(w.z,"_prefix")
v=w.Q
v.toString
u[v]=d
v=w.Q=v+1
if(v===511)w.a=10
else if(v===1023)w.a=11
else if(v===2047)w.a=12},
WB(d){var w,v,u,t=this,s="_bufferLength"
t.as=0
w=t.x
v=B.b(0,s)
t.as=v+1
w[v]=B.b(t.y,"_table")[d]
u=B.b(t.z,"_prefix")[d]
for(;u!==4098;){v=B.b(t.as,s)
t.as=v+1
w[v]=B.b(t.y,"_table")[u]
u=B.b(t.z,"_prefix")[u]}},
IE(){var w,v,u=this,t="_dataLength"
if(u.b>=B.b(u.f,t))return 257
for(;w=u.d,v=u.a,w<v;){if(u.b>=B.b(u.f,t))return 257
u.c=(u.c<<8>>>0)+B.b(u.e,"_data")[u.b++]>>>0
u.d+=8}w-=v
u.d=w
return D.b.eX(u.c,w)&C.TE[v-9]},
X7(){var w,v,u=this
u.y=new Uint8Array(4096)
w=new Uint32Array(4096)
u.z=w
D.bv.hT(B.b(w,"_prefix"),0,B.b(u.z,"_prefix").length,4098)
for(v=0;v<256;++v)B.b(u.y,"_table")[v]=v
u.a=9
u.Q=258}}
A.apP.prototype={
jh(d){var w=this,v=A.be(d,!1,null,0)
w.b=v
v=w.a=w.Yb(B.b(v,"_input"))
if(v==null)return null
return v.r[0].dz(0,B.b(w.b,"_input"))},
Yb(d){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.aU),m=new A.apR(n),l=d.T()
if(l!==18761&&l!==19789)return o
if(l===19789)d.e=!0
else d.e=!1
u=d.T()
m.e=u
if(u!==42)return o
t=d.K()
w=A.aB(d,o,0)
w.d=t
for(u=x.p,s=x.cV;t!==0;){v=null
try{r=new A.Y7(B.E(u,s))
r.aeg(w)
v=r
q=v
if(!(q.b!==0&&q.c!==0))break}catch(p){break}n.push(v)
if(n.length===1){q=n[0]
m.a=q.b
m.b=q.c}t=w.K()
if(t!==0)w.d=t}return n.length!==0?m:o}}
A.aqw.prototype={
vI(){var w,v=this.a,u=v.jx()
if((u&1)!==0)return!1
if((u>>>1&7)>3)return!1
if((u>>>4&1)===0)return!1
this.f.d=u>>>5
if(v.jx()!==2752925)return!1
w=this.b
w.a=v.T()
w.b=v.T()
return!0},
m5(d){var w,v=this
if(!v.aiE())return null
w=v.b
v.d=A.jU(w.a,w.b,C.br)
v.alE()
if(!v.anP())return null
return v.d},
aiE(){var w,v,u,t,s=this,r="partitionLength"
if(!s.vI())return!1
s.fr=A.b_7()
for(w=s.dy,v=0;v<4;++v){u=new Int32Array(2)
t=new Int32Array(2)
w[v]=new A.YC(u,t,new Int32Array(2))}w=s.b
u=s.r.b=w.b
w=w.a
D.b.B(w,8)
D.b.B(u,8)
s.y=s.Q=0
s.z=w
s.as=u
s.at=D.b.B(w+15,4)
s.ax=D.b.B(u+15,4)
s.k1=0
u=s.a
w=s.f
s.c=A.aOc(u.e2(B.b(w.d,r)))
u.d+=B.b(w.d,r)
B.b(s.c,"br").bB(1)
B.b(s.c,"br").bB(1)
s.anX(s.x,s.fr)
s.anN()
if(!s.anS(u))return!1
s.anU()
B.b(s.c,"br").bB(1)
s.anT()
return!0},
anX(d,e){var w,v,u,t=this,s="br",r=B.b(t.c,s).bB(1)!==0
d.a=r
if(r){d.b=B.b(t.c,s).bB(1)!==0
if(B.b(t.c,s).bB(1)!==0){d.c=B.b(t.c,s).bB(1)!==0
for(r=d.d,w=0;w<4;++w){if(B.b(t.c,s).bB(1)!==0){v=B.b(t.c,s)
u=v.bB(7)
v=v.bB(1)===1?-u:u}else v=0
r[w]=v}for(r=d.e,w=0;w<4;++w){if(B.b(t.c,s).bB(1)!==0){v=B.b(t.c,s)
u=v.bB(6)
v=v.bB(1)===1?-u:u}else v=0
r[w]=v}}if(d.b)for(w=0;w<3;++w){r=e.a
r[w]=B.b(t.c,s).bB(1)!==0?B.b(t.c,s).bB(8):255}}else d.b=!1
return!0},
anN(){var w,v,u,t,s=this,r="br",q=s.w
q.a=B.b(s.c,r).bB(1)!==0
q.b=B.b(s.c,r).bB(6)
q.c=B.b(s.c,r).bB(3)
w=B.b(s.c,r).bB(1)!==0
q.d=w
if(B.b(w,"useLfDelta"))if(B.b(s.c,r).bB(1)!==0){for(w=q.e,v=0;v<4;++v)if(B.b(s.c,r).bB(1)!==0){u=B.b(s.c,r)
t=u.bB(6)
w[v]=u.bB(1)===1?-t:t}for(w=q.f,v=0;v<4;++v)if(B.b(s.c,r).bB(1)!==0){u=B.b(s.c,r)
t=u.bB(6)
w[v]=u.bB(1)===1?-t:t}}if(q.b===0)w=0
else w=B.b(q.a,"simple")?1:2
s.al=w
return!0},
anS(d){var w,v,u,t,s,r,q,p,o=d.c-d.d,n=D.b.bS(1,B.b(this.c,"br").bB(2))
this.cy=n
w=B.b(n,"_numPartitions")-1
v=w*3
if(o<v)return!1
for(n=this.db,u=0,t=0;t<w;++t,v=p){s=d.qg(3,u)
r=s.a
q=s.d
p=v+((r[q]|r[q+1]<<8|r[q+2]<<16)>>>0)
if(p>o)p=o
r=new A.Gh(d.oy(p-v,v))
r.b=254
r.c=0
r.d=-8
n[t]=r
u+=3}n[w]=A.aOc(d.oy(o-v,d.d-d.b+v))
return v<o},
anU(){var w,v,u,t,s,r,q,p,o,n=this,m="br",l=B.b(n.c,m).bB(7),k=B.b(n.c,m).bB(1)!==0?B.b(n.c,m).tQ(4):0,j=B.b(n.c,m).bB(1)!==0?B.b(n.c,m).tQ(4):0,i=B.b(n.c,m).bB(1)!==0?B.b(n.c,m).tQ(4):0,h=B.b(n.c,m).bB(1)!==0?B.b(n.c,m).tQ(4):0,g=B.b(n.c,m).bB(1)!==0?B.b(n.c,m).tQ(4):0,f=n.x
for(w=n.dy,v=f.a,u=!f.c,t=f.d,s=0;s<4;++s){if(v){r=t[s]
if(u)r+=l}else{if(s>0){w[s]=w[0]
continue}r=l}q=w[s]
p=q.a
o=r+k
if(o<0)o=0
else if(o>127)o=127
p[0]=C.l2[o]
if(r<0)o=0
else o=r>127?127:r
p[1]=C.l3[o]
o=q.b
p=r+j
if(p<0)p=0
else if(p>127)p=127
o[0]=C.l2[p]*2
p=r+i
if(p<0)p=0
else if(p>127)p=127
o[1]=C.l3[p]*101581>>>16
if(o[1]<8)o[1]=8
p=q.c
o=r+h
if(o<0)o=0
else if(o>117)o=117
p[0]=C.l2[o]
o=r+g
if(o<0)o=0
else if(o>127)o=127
p[1]=C.l3[o]}},
anT(){var w,v,u,t,s,r,q=this,p="br",o=q.fr
for(w=0;w<4;++w)for(v=0;v<8;++v)for(u=0;u<3;++u)for(t=0;t<11;++t){s=B.b(q.c,p).dd(C.Xj[w][v][u][t])!==0?B.b(q.c,p).bB(8):C.YJ[w][v][u][t]
o.b[w][v].a[u][t]=s}r=B.b(q.c,p).bB(1)!==0
q.fx=r
if(B.b(r,"_useSkipProba"))q.fy=B.b(q.c,p).bB(8)},
aot(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k="sharpness",j=l.al
j.toString
if(j>0){w=l.w
for(j=w.e,v=w.f,u=l.x,t=u.e,s=0;s<4;++s){if(u.a){r=t[s]
if(!u.c){q=w.b
q.toString
r+=q}}else r=w.b
for(p=0;p<=1;++p){o=J.a8(J.a8(B.b(l.aN,"_fStrengths"),s),p)
if(B.b(w.d,"useLfDelta")){r.toString
n=r+j[0]
if(p!==0)n+=v[0]}else n=r
n.toString
if(n<0)n=0
else if(n>63)n=63
if(n>0){if(B.b(w.c,k)>0){m=B.b(w.c,k)>4?D.b.B(n,2):D.b.B(n,1)
if(m>9-B.b(w.c,k))m=9-B.b(w.c,k)}else m=n
if(m<1)m=1
o.b=m
o.a=2*n+m
if(n>=40)q=2
else q=n>=15?1:0
o.d=q}else o.a=0
o.c=p!==0}}}},
alE(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b,i=j.at
if(i!=null)l.dP=i
w=J.ij(4,x.K)
for(i=x.ao,v=0;v<4;++v)w[v]=B.a([new A.td(),new A.td()],i)
l.aN=w
i=l.at
i.toString
w=J.ij(i,x.dE)
for(u=0;u<i;++u){t=new Uint8Array(16)
s=new Uint8Array(8)
w[u]=new A.YD(t,s,new Uint8Array(8))}l.k2=w
l.ok=new Uint8Array(832)
i=l.at
i.toString
l.go=new Uint8Array(4*i)
t=l.p4=16*i
i=8*i
l.R8=i
s=l.al
s.toString
r=C.l_[s]
q=r*t
p=(r/2|0)*i
l.p1=A.be(new Uint8Array(16*t+q),!1,k,q)
i=l.R8
i.toString
l.p2=A.be(new Uint8Array(8*i+p),!1,k,p)
i=l.R8
i.toString
l.p3=A.be(new Uint8Array(8*i+p),!1,k,p)
i=j.a
l.RG=A.be(new Uint8Array(i),!1,k,0)
o=D.b.B(j.a+1,1)
l.rx=A.be(new Uint8Array(o),!1,k,0)
l.ry=A.be(new Uint8Array(o),!1,k,0)
j=l.al
j.toString
n=C.l_[j]
if(j===2)l.ch=l.ay=0
else{j=D.b.bC(B.b(l.y,"_cropLeft")-n,16)
l.ay=j
i=l.Q
i.toString
l.ch=D.b.bC(i-n,16)
if(B.b(j,"_tlMbX")<0)l.ay=0
if(B.b(l.ch,"_tlMbY")<0)l.ch=0}j=l.as
j.toString
l.cx=D.b.bC(j+15+n,16)
j=D.b.bC(B.b(l.z,"_cropRight")+15+n,16)
l.CW=j
i=l.at
i.toString
if(j>i)l.CW=i
j=l.cx
j.toString
t=l.ax
t.toString
if(j>t)l.cx=t
m=i+1
w=J.ij(m,x.ai)
for(u=0;u<m;++u)w[u]=new A.YA()
l.k3=w
j=l.at
j.toString
w=J.ij(j,x.cP)
for(u=0;u<j;++u){i=new Int16Array(384)
w[u]=new A.YB(i,new Uint8Array(16))}l.aF=w
j=l.at
j.toString
l.k4=B.at(j,k,!1,x.B)
l.aot()
A.aZT()
l.e=new A.aqx()
return!0},
anP(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j="_mbInfo",i="br",h="isIntra4x4"
k.y2=0
w=k.id
v=k.x
u=k.db
t=0
while(!0){s=k.cx
s.toString
if(!(t<s))break
r=u[(t&B.b(k.cy,"_numPartitions")-1)>>>0]
while(!0){t=k.y1
s=k.at
s.toString
if(!(t<s))break
q=J.a8(B.b(k.k3,j),0)
p=J.a8(B.b(k.k3,j),1+k.y1)
o=J.a8(B.b(k.aF,"_mbData"),k.y1)
if(v.b){t=B.b(k.c,i).dd(k.fr.a[0])
s=k.c
k.k1=t===0?B.b(s,i).dd(k.fr.a[1]):2+B.b(s,i).dd(k.fr.a[2])}n=B.b(k.fx,"_useSkipProba")&&B.b(k.c,i).dd(B.b(k.fy,"_skipP"))!==0
k.anQ()
if(!n)n=k.anW(p,r)
else{q.a=p.a=0
if(!B.b(o.b,h))q.b=p.b=0
o.f=o.e=0}t=k.al
t.toString
if(t>0){t=B.b(k.k4,"_fInfo")
s=k.y1
m=J.a8(B.b(k.aN,"_fStrengths"),B.b(k.k1,"_segment"))
J.dN(t,s,J.a8(m,B.b(o.b,h)?1:0))
t=J.a8(B.b(k.k4,"_fInfo"),k.y1)
t.toString
t.c=t.c||!n}++k.y1}q=J.a8(B.b(k.k3,j),0)
q.b=q.a=0
D.B.hT(w,0,4,0)
k.y1=0
k.ap5()
t=k.al
t.toString
if(t>0)if(k.y2>=B.b(k.ch,"_tlMbY")){t=k.y2
s=k.cx
s.toString
s=t<=s
l=s}else l=!1
else l=!1
if(!k.aib(l))return!1
t=++k.y2}return!0},
ap5(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3="_yuvBlock",a4="_dsp",a5=a1.y2,a6=A.be(B.b(a1.ok,a3),!1,a2,40),a7=A.be(B.b(a1.ok,a3),!1,a2,584),a8=A.be(B.b(a1.ok,a3),!1,a2,600),a9=a5>0,b0=0
while(!0){w=a1.at
w.toString
if(!(b0<w))break
v=J.a8(B.b(a1.aF,"_mbData"),b0)
if(b0>0){for(u=-1;u<16;++u){w=u*32
a6.jr(w-4,4,a6,w+12)}for(u=-1;u<8;++u){w=u*32
t=w-4
w+=4
a7.jr(t,4,a7,w)
a8.jr(t,4,a8,w)}}else{for(w=a6.a,t=a6.d,u=0;u<16;++u)w[t+(u*32-1)]=129
for(s=a7.a,r=a7.d,q=a8.a,p=a8.d,u=0;u<8;++u){o=u*32-1
s[r+o]=129
q[p+o]=129}if(a9){q[p+-33]=129
s[r+-33]=129
w[t+-33]=129}}n=J.a8(B.b(a1.k2,"_yuvT"),b0)
m=v.a
l=v.e
if(a9){a6.nV(-32,16,n.a)
a7.nV(-32,8,n.b)
a8.nV(-32,8,n.c)}else if(b0===0){w=a6.a
t=a6.d+-33
J.kD(w,t,t+21,127)
t=a7.a
w=a7.d+-33
J.kD(t,w,w+9,127)
w=a8.a
t=a8.d+-33
J.kD(w,t,t+9,127)}if(B.b(v.b,"isIntra4x4")){k=A.aB(a6,a2,-16)
j=k.yc()
if(a9){w=a1.at
w.toString
if(b0>=w-1){w=n.a[15]
t=k.a
s=k.d
J.kD(t,s,s+4,w)}else k.nV(0,4,J.a8(B.b(a1.k2,"_yuvT"),b0+1).a)}i=j[0]
j[96]=i
j[64]=i
j[32]=i
for(w=v.c,h=0;h<16;++h,l=l<<2>>>0){g=A.aB(a6,a2,C.ut[h])
C.a42[w[h]].$1(g)
l.toString
t=h*16
a1.VA(l,new A.hl(m,t,384,t,!1),g)}}else{w=A.aOf(b0,a5,v.c[0])
w.toString
C.Up[w].$1(a6)
if(l!==0)for(h=0;h<16;++h,l=l<<2>>>0){g=A.aB(a6,a2,C.ut[h])
l.toString
w=h*16
a1.VA(l,new A.hl(m,w,384,w,!1),g)}}w=B.b(v.f,"nonZeroUV")
t=A.aOf(b0,a5,v.d)
t.toString
C.pw[t].$1(a7)
C.pw[t].$1(a8)
f=new A.hl(m,256,384,256,!1)
if((w&255)!==0){t=a1.e
if((w&170)!==0){t=B.b(t,a4)
t.lr(f,a7)
t.lr(A.aB(f,a2,16),A.aB(a7,a2,4))
s=A.aB(f,a2,32)
r=A.aB(a7,a2,128)
t.lr(s,r)
t.lr(A.aB(s,a2,16),A.aB(r,a2,4))}else B.b(t,a4).a6_(f,a7)}e=new A.hl(m,320,384,320,!1)
w=D.b.B(w,8)
if((w&255)!==0){t=a1.e
if((w&170)!==0){w=B.b(t,a4)
w.lr(e,a8)
w.lr(A.aB(e,a2,16),A.aB(a8,a2,4))
t=A.aB(e,a2,32)
s=A.aB(a8,a2,128)
w.lr(t,s)
w.lr(A.aB(t,a2,16),A.aB(s,a2,4))}else B.b(t,a4).a6_(e,a8)}w=a1.ax
w.toString
if(a5<w-1){D.B.bj(n.a,0,16,a6.eP(),480)
D.B.bj(n.b,0,8,a7.eP(),224)
D.B.bj(n.c,0,8,a8.eP(),224)}d=b0*16
a0=b0*8
for(u=0;u<16;++u){w=a1.p4
w.toString
B.b(a1.p1,"_cacheY").jr(d+u*w,16,a6,u*32)}for(u=0;u<8;++u){w=a1.R8
w.toString
t=u*32
B.b(a1.p2,"_cacheU").jr(a0+u*w,8,a7,t)
w=a1.R8
w.toString
B.b(a1.p3,"_cacheV").jr(a0+u*w,8,a8,t)}++b0}},
VA(d,e,f){var w,v,u,t,s,r,q,p="_dsp"
switch(d>>>30){case 3:B.b(this.e,p).aBf(0,e,f,!1)
break
case 2:B.b(this.e,p)
w=e.a
v=e.d
u=w[v]+4
t=D.b.eC(D.b.B(w[v+4]*35468,16),32)
s=D.b.eC(D.b.B(e.a[e.d+4]*85627,16),32)
r=D.b.eC(D.b.B(e.a[e.d+1]*35468,16),32)
q=D.b.eC(D.b.B(e.a[e.d+1]*85627,16),32)
A.aqB(f,0,u+s,q,r)
A.aqB(f,1,u+t,q,r)
A.aqB(f,2,u-t,q,r)
A.aqB(f,3,u-s,q,r)
break
case 1:B.b(this.e,p).yg(e,f)
break
default:break}},
ah8(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j="_dsp",i=l.p4,h=J.a8(B.b(l.k4,"_fInfo"),d)
h.toString
w=A.aB(B.b(l.p1,"_cacheY"),k,d*16)
v=h.b
u=h.a
if(u===0)return
if(l.al===1){if(d>0){t=B.b(l.e,j)
i.toString
t.QH(w,i,u+4)}if(h.c){t=B.b(l.e,j)
i.toString
t.a9u(w,i,u)}if(e>0){t=B.b(l.e,j)
i.toString
t.QI(w,i,u+4)}if(h.c){h=B.b(l.e,j)
i.toString
h.a9v(w,i,u)}}else{s=l.R8
t=d*8
r=A.aB(B.b(l.p2,"_cacheU"),k,t)
q=A.aB(B.b(l.p3,"_cacheV"),k,t)
p=h.d
if(d>0){t=B.b(l.e,j)
i.toString
o=u+4
t.qw(w,1,i,16,o,v,p)
t=B.b(l.e,j)
s.toString
t.qw(r,1,s,8,o,v,p)
t.qw(q,1,s,8,o,v,p)}if(h.c){t=B.b(l.e,j)
i.toString
t.avY(w,i,u,v,p)
t=B.b(l.e,j)
s.toString
n=A.aB(r,k,4)
m=A.aB(q,k,4)
t.qv(n,1,s,8,u,v,p)
t.qv(m,1,s,8,u,v,p)}if(e>0){t=B.b(l.e,j)
i.toString
o=u+4
t.qw(w,i,1,16,o,v,p)
t=B.b(l.e,j)
s.toString
t.qw(r,s,1,8,o,v,p)
t.qw(q,s,1,8,o,v,p)}if(h.c){h=B.b(l.e,j)
i.toString
h.aBz(w,i,u,v,p)
h=B.b(l.e,j)
s.toString
t=4*s
n=A.aB(r,k,t)
m=A.aB(q,k,t)
h.qv(n,s,1,8,u,v,p)
h.qv(m,s,1,8,u,v,p)}}},
ahZ(){var w,v=this,u=B.b(v.ay,"_tlMbX")
while(!0){w=v.CW
w.toString
if(!(u<w))break
v.ah8(u,v.y2);++u}},
aib(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="_cacheY",a0="_cacheU",a1="_cacheV",a2="_cropLeft",a3=f.al
a3.toString
w=C.l_[a3]
a3=f.p4
a3.toString
v=w*a3
a3=f.R8
a3.toString
u=(w/2|0)*a3
a3=-v
t=A.aB(B.b(f.p1,d),e,a3)
s=-u
r=A.aB(B.b(f.p2,a0),e,s)
q=A.aB(B.b(f.p3,a1),e,s)
p=f.y2
o=f.cx
o.toString
n=p*16
m=(p+1)*16
if(a4)f.ahZ()
if(p!==0){n-=w
f.to=A.aB(t,e,0)
f.x1=A.aB(r,e,0)
f.x2=A.aB(q,e,0)}else{f.to=A.aB(B.b(f.p1,d),e,0)
f.x1=A.aB(B.b(f.p2,a0),e,0)
f.x2=A.aB(B.b(f.p3,a1),e,0)}o=p<o-1
if(o)m-=w
l=f.as
l.toString
if(m>l)m=l
f.xr=null
if(f.dP!=null&&n<m){l=f.agP(n,m-n)
f.xr=l
if(l==null)return!1}l=f.Q
l.toString
if(n<l){k=l-n
j=B.b(f.to,"_y")
i=j.d
h=f.p4
h.toString
j.d=i+h*k
h=B.b(f.x1,"_u")
i=h.d
j=f.R8
j.toString
g=D.b.B(k,1)
h.d=i+j*g
j=B.b(f.x2,"_v")
i=j.d
h=f.R8
h.toString
j.d=i+h*g
j=f.xr
if(j!=null)j.d=j.d+f.b.a*k
n=l}if(n<m){l=B.b(f.to,"_y")
l.d=l.d+B.b(f.y,a2)
l=B.b(f.x1,"_u")
l.d=l.d+D.b.B(B.b(f.y,a2),1)
l=B.b(f.x2,"_v")
l.d=l.d+D.b.B(B.b(f.y,a2),1)
l=f.xr
if(l!=null)l.d=l.d+B.b(f.y,a2)
l=f.Q
l.toString
f.aoC(0,n-l,B.b(f.z,"_cropRight")-B.b(f.y,a2),m-n)}if(o){o=B.b(f.p1,d)
l=f.p4
l.toString
o.jr(a3,v,t,16*l)
l=B.b(f.p2,a0)
a3=f.R8
a3.toString
l.jr(s,u,r,8*a3)
a3=B.b(f.p3,a1)
l=f.R8
l.toString
a3.jr(s,u,q,8*l)}return!0},
aoC(d,e,f,g){if(f<=0||g<=0)return!1
this.ahv(e,f,g)
this.ahu(e,f,g)
return!0},
HN(d){var w
if((d&-4194304)>>>0===0)w=D.b.B(d,14)
else w=d<0?0:255
return w},
AR(d,e,f,g){var w=19077*d
g.l(0,0,this.HN(w+26149*f+-3644112))
g.l(0,1,this.HN(w-6419*e-13320*f+2229552))
g.l(0,2,this.HN(w+33050*e+-4527440))},
AG(a7,a8,a9,b0,b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=new A.aqJ(),a2=b5-1,a3=D.b.B(a2,1),a4=a1.$2(a9.a[a9.d],b0.a[b0.d]),a5=a1.$2(b1.a[b1.d],b2.a[b2.d]),a6=D.b.B(3*a4+a5+131074,2)
d.AR(a7.a[a7.d],a6&255,a6>>>16,b3)
b3.l(0,3,255)
w=a8!=null
if(w){a6=D.b.B(3*a5+a4+131074,2)
v=a8.a[a8.d]
b4.toString
d.AR(v,a6&255,a6>>>16,b4)
b4.l(0,3,255)}for(u=1;u<=a3;++u,a5=s,a4=t){t=a1.$2(a9.a[a9.d+u],b0.a[b0.d+u])
s=a1.$2(b1.a[b1.d+u],b2.a[b2.d+u])
r=a4+t+a5+s+524296
q=D.b.B(r+2*(t+a5),3)
p=D.b.B(r+2*(a4+s),3)
a6=D.b.B(q+a4,1)
o=D.b.B(p+t,1)
v=2*u
n=v-1
m=a7.a
l=a7.d
k=m[l+n]
j=a6&255
i=a6>>>16
h=n*4
g=A.aB(b3,a0,h)
k=19077*k
f=k+26149*i+-3644112
if((f&-4194304)>>>0===0)e=D.b.B(f,14)
else e=f<0?0:255
f=g.a
g=g.d
f[g]=e
i=k-6419*j-13320*i+2229552
if((i&-4194304)>>>0===0)e=D.b.B(i,14)
else e=i<0?0:255
f[g+1]=e
k=k+33050*j+-4527440
if((k&-4194304)>>>0===0)e=D.b.B(k,14)
else e=k<0?0:255
f[g+2]=e
f[g+3]=255
k=v-0
l=m[l+k]
m=o&255
j=o>>>16
k=A.aB(b3,a0,k*4)
l=19077*l
i=l+26149*j+-3644112
if((i&-4194304)>>>0===0)e=D.b.B(i,14)
else e=i<0?0:255
i=k.a
k=k.d
i[k]=e
j=l-6419*m-13320*j+2229552
if((j&-4194304)>>>0===0)e=D.b.B(j,14)
else e=j<0?0:255
i[k+1]=e
m=l+33050*m+-4527440
if((m&-4194304)>>>0===0)e=D.b.B(m,14)
else e=m<0?0:255
i[k+2]=e
i[k+3]=255
if(w){a6=D.b.B(p+a5,1)
o=D.b.B(q+s,1)
m=a8.a
l=a8.d
n=m[l+n]
k=a6&255
j=a6>>>16
b4.toString
h=A.aB(b4,a0,h)
n=19077*n
i=n+26149*j+-3644112
if((i&-4194304)>>>0===0)e=D.b.B(i,14)
else e=i<0?0:255
i=h.a
h=h.d
i[h]=e
j=n-6419*k-13320*j+2229552
if((j&-4194304)>>>0===0)e=D.b.B(j,14)
else e=j<0?0:255
i[h+1]=e
n=n+33050*k+-4527440
if((n&-4194304)>>>0===0)e=D.b.B(n,14)
else e=n<0?0:255
i[h+2]=e
i[h+3]=255
n=m[l+v]
m=o&255
l=o>>>16
v=A.aB(b4,a0,v*4)
n=19077*n
k=n+26149*l+-3644112
if((k&-4194304)>>>0===0)e=D.b.B(k,14)
else e=k<0?0:255
k=v.a
v=v.d
k[v]=e
l=n-6419*m-13320*l+2229552
if((l&-4194304)>>>0===0)e=D.b.B(l,14)
else e=l<0?0:255
k[v+1]=e
n=n+33050*m+-4527440
if((n&-4194304)>>>0===0)e=D.b.B(n,14)
else e=n<0?0:255
k[v+2]=e
k[v+3]=255}}if((b5&1)===0){a6=D.b.B(3*a4+a5+131074,2)
v=a7.a[a7.d+a2]
n=a2*4
m=A.aB(b3,a0,n)
d.AR(v,a6&255,a6>>>16,m)
m.l(0,3,255)
if(w){a6=D.b.B(3*a5+a4+131074,2)
a2=a8.a[a8.d+a2]
b4.toString
n=A.aB(b4,a0,n)
d.AR(a2,a6&255,a6>>>16,n)
n.l(0,3,255)}}},
ahu(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.xr
if(k==null)return
w=l.b
v=w.a
u=v*4
t=A.aB(k,null,0)
if(d===0){s=f-1
r=d}else{r=d-1
t.d-=v
s=f}q=A.be(l.d.mL(),!1,null,r*u+3)
k=l.Q
k.toString
v=l.as
if(k+d+f===v){v.toString
s=v-k-r}for(p=0;p<s;++p){for(k=t.a,v=t.d,o=q.a,n=q.d,m=0;m<e;++m)o[n+4*m]=k[v+m]&255
t.d=v+w.a
q.d+=u}},
ahv(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.b,o=A.be(r.d.mL(),!1,q,d*p.a*4),n=A.aB(B.b(r.to,"_y"),q,0),m=A.aB(B.b(r.x1,"_u"),q,0),l=A.aB(B.b(r.x2,"_v"),q,0),k=d+f,j=D.b.B(e+1,1),i=p.a*4,h=A.aB(B.b(r.rx,"_tmpU"),q,0),g=A.aB(B.b(r.ry,"_tmpV"),q,0)
if(d===0){r.AG(n,q,m,l,m,l,o,q,e)
w=f}else{r.AG(B.b(r.RG,"_tmpY"),n,h,g,m,l,A.aB(o,q,-i),o,e)
w=f+1}h.a=m.a
g.a=l.a
for(p=2*i,v=-i,u=d;u+=2,u<k;){h.d=m.d
g.d=l.d
t=m.d
s=r.R8
s.toString
m.d=t+s
l.d+=s
o.d+=p
s=n.d
t=r.p4
t.toString
n.d=s+2*t
r.AG(A.aB(n,q,-t),n,h,g,m,l,A.aB(o,q,v),o,e)}p=n.d
v=r.p4
v.toString
n.d=p+v
p=r.Q
p.toString
v=r.as
v.toString
if(p+k<v){B.b(r.RG,"_tmpY").nV(0,e,n)
B.b(r.rx,"_tmpU").nV(0,j,m)
B.b(r.ry,"_tmpV").nV(0,j,l);--w}else if((k&1)===0)r.AG(n,q,m,l,m,l,A.aB(o,q,i),q,e)
return w},
agP(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m="_buffer8",l="_vp8l",k="_alphaPlane",j=o.b,i=j.a,h=j.b
if(d<0||e<=0||d+e>h)return n
if(d===0){j=i*h
o.c_=new Uint8Array(j)
w=o.dP
v=new A.aqR(w,i,h)
u=w.aP()
v.d=u&3
v.e=D.b.B(u,2)&3
v.f=D.b.B(u,4)&3
v.r=D.b.B(u,6)&3
if(v.gcg()){t=v.d
if(t===0){if(w.c-w.d<j)v.r=1}else if(t===1){s=new A.YN(B.a([],x.J))
s.a=i
s.b=h
j=B.a([],x.F)
t=B.a([],x.G)
r=new Uint32Array(2)
q=new A.Yy(w,r)
r=q.d=B.bP(r.buffer,0,n)
B.b(r,m)[0]=w.aP()
B.b(r,m)[1]=w.aP()
B.b(r,m)[2]=w.aP()
B.b(r,m)[3]=w.aP()
B.b(r,m)[4]=w.aP()
B.b(r,m)[5]=w.aP()
B.b(r,m)[6]=w.aP()
B.b(r,m)[7]=w.aP()
t=new A.R2(q,s,j,t)
v.x=t
B.b(t,l).db=i
B.b(v.x,l)
B.b(v.x,l).uy(s.a,s.b,!0)
if(B.b(v.x,l).ax.length===1&&B.b(v.x,l).ax[0].a===3&&B.b(v.x,l).alX()){v.y=!0
j=B.b(v.x,l)
w=j.c
p=w.a*w.b
j.cx=0
w=D.b.cd(p,4)
w=new Uint8Array(p+(4-w))
j.CW=w
j.ch=B.we(B.b(w,"_pixels8").buffer,0,n)}else{v.y=!1
B.b(v.x,l).Ue()}}else v.r=1}o.bL=v}if(!B.b(o.bL,"_alpha").w)if(!B.b(o.bL,"_alpha").Mq(0,d,e,B.b(o.c_,k)))return n
return A.be(B.b(o.c_,k),!1,n,d*i)},
anW(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=a0.fr.b,a2=a0.dy[B.b(a0.k1,"_segment")],a3=J.a8(B.b(a0.aF,"_mbData"),a0.y1),a4=A.be(a3.a,!1,null,0),a5=J.a8(B.b(a0.k3,"_mbInfo"),0)
a4.axH(0,a4.c-a4.d,0)
if(!B.b(a3.b,"isIntra4x4")){w=A.be(new Int16Array(16),!1,null,0)
v=a6.b
u=a5.b
t=a0.ID(a7,a1[1],v+u,a2.b,0,w)
a6.b=a5.b=t>0?1:0
if(t>1)a0.ar9(w,a4)
else{s=D.b.B(w.a[w.d]+3,3)
for(v=a4.a,u=a4.d,r=0;r<256;r+=16)v[u+r]=s}q=a1[0]
p=1}else{q=a1[3]
p=0}o=a6.a&15
n=a5.a&15
for(m=0,l=0;l<4;++l){k=n&1
for(j=0,i=0;i<4;++i,j=h){t=a0.ID(a7,q,k+(o&1),a2.a,p,a4)
k=t>p?1:0
o=o>>>1|k<<7
v=a4.a
u=a4.d
v=v[u]!==0?1:0
if(t>3)v=3
else if(t>1)v=2
h=j<<2|v
a4.d=u+16}o=o>>>4
n=n>>>1|k<<7
m=(m<<8|j)>>>0}g=n>>>4
for(f=o,e=0,d=0;d<4;d+=2){v=4+d
o=D.b.d5(a6.a,v)
n=D.b.d5(a5.a,v)
for(j=0,l=0;l<2;++l){k=n&1
for(i=0;i<2;++i,j=h){t=a0.ID(a7,a1[2],k+(o&1),a2.c,0,a4)
k=t>0?1:0
o=o>>>1|k<<3
v=a4.a
u=a4.d
v=v[u]!==0?1:0
if(t>3)v=3
else if(t>1)v=2
h=(j<<2|v)>>>0
a4.d=u+16}o=o>>>2
n=n>>>1|k<<5}e=(e|D.b.bS(j,4*d))>>>0
f=(f|D.b.bS(o<<4>>>0,d))>>>0
g=(g|D.b.bS(n&240,d))>>>0}a6.a=f
a5.a=g
a3.e=m
a3.f=e
if((e&43690)===0)a2.toString
return(m|e)>>>0===0},
ar9(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new Int32Array(16)
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
w[v+i]=D.b.B(q+l,3)
w[v+(i+16)]=D.b.B(j+k,3)
w[v+(i+32)]=D.b.B(q-l,3)
w[v+(i+48)]=D.b.B(j-k,3)
i+=64}},
aiJ(d,e){var w,v,u,t,s,r
if(d.dd(e[3])===0)w=d.dd(e[4])===0?2:3+d.dd(e[5])
else if(d.dd(e[6])===0)w=d.dd(e[7])===0?5+d.dd(159):7+2*d.dd(165)+d.dd(145)
else{v=d.dd(e[8])
u=2*v+d.dd(e[9+v])
t=C.a3W[u]
for(s=t.length,w=0,r=0;r<s;++r)w+=w+d.dd(t[r])
w+=3+D.b.bS(8,u)}return w},
ID(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o="_range",n=e[h].a[f]
for(;h<16;h=w){if(d.dd(n[0])===0)return h
for(;d.dd(n[1])===0;){++h
n=e[C.rb[h]].a[0]
if(h===16)return 16}w=h+1
v=e[C.rb[w]].a
if(d.dd(n[2])===0){n=v[1]
u=1}else{u=this.aiJ(d,n)
n=v[2]}t=C.a_V[h]
s=d.Uw(D.b.B(B.b(d.b,o),1))
r=C.qu[B.b(d.b,o)]
d.b=C.wo[B.b(d.b,o)]
d.d=B.b(d.d,"_bits")-r
q=s!==0?-u:u
p=g[h>0?1:0]
i.a[i.d+t]=q*p}return 16},
anQ(){var w,v,u,t,s,r,q,p,o=this,n="br",m=4*o.y1,l=o.go,k=o.id,j=J.a8(B.b(o.aF,"_mbData"),o.y1),i=B.b(o.c,n).dd(145)===0
j.b=i
if(!B.b(i,"isIntra4x4")){if(B.b(o.c,n).dd(156)!==0)w=B.b(o.c,n).dd(128)!==0?1:3
else w=B.b(o.c,n).dd(163)!==0?2:0
j.c[0]=w
l.toString
D.B.hT(l,m,m+4,w)
D.B.hT(k,0,4,w)}else{v=j.c
for(u=0,t=0;t<4;++t,u=p){w=k[t]
for(s=0;s<4;++s){i=m+s
r=C.Uf[l[i]][w]
q=C.tW[B.b(o.c,n).dd(r[0])]
for(;q>0;)q=C.tW[2*q+B.b(o.c,n).dd(r[q])]
w=-q
l[i]=w}p=u+4
l.toString
D.B.bj(v,u,p,l,m)
k[t]=w}}if(B.b(o.c,n).dd(142)===0)i=0
else if(B.b(o.c,n).dd(114)===0)i=2
else i=B.b(o.c,n).dd(183)!==0?1:3
j.d=i}}
A.Gh.prototype={
bB(d){var w,v
for(w=0;v=d-1,d>0;d=v)w=(w|D.b.cI(this.dd(128),v))>>>0
return w},
tQ(d){var w=this.bB(d)
return this.bB(1)===1?-w:w},
dd(d){var w=this,v=w.Uw(D.b.B(B.b(w.b,"_range")*d,8))
if(B.b(w.b,"_range")<=126)w.aqj()
return v},
Uw(d){var w,v,u,t=this,s="_bits",r="_value"
if(B.b(t.d,s)<0){w=t.a
v=w.c
u=w.d
if(v-u>=1){t.c=(w.aP()|B.b(t.c,r)<<8)>>>0
t.d=B.b(t.d,s)+8}else if(u<v){t.c=(w.aP()|B.b(t.c,r)<<8)>>>0
t.d=B.b(t.d,s)+8}else if(!t.e){t.c=B.b(t.c,r)<<8>>>0
t.d=B.b(t.d,s)+8
t.e=!0}}w=B.b(t.d,s)
if(D.b.it(B.b(t.c,r),w)>d){v=d+1
t.b=B.b(t.b,"_range")-v
t.c=B.b(t.c,r)-D.b.cI(v,w)
return 1}else{t.b=d
return 0}},
aqj(){var w=this,v=C.qu[B.b(w.b,"_range")]
w.b=C.wo[B.b(w.b,"_range")]
w.d=B.b(w.d,"_bits")-v}}
A.aqx.prototype={
QI(d,e,f){var w,v=A.aB(d,null,0)
for(w=0;w<16;++w){v.d=d.d+w
if(this.XG(v,e,f))this.zz(v,e)}},
QH(d,e,f){var w,v=A.aB(d,null,0)
for(w=0;w<16;++w){v.d=d.d+w*e
if(this.XG(v,1,f))this.zz(v,1)}},
a9v(d,e,f){var w,v,u=A.aB(d,null,0)
for(w=4*e,v=3;v>0;--v){u.d+=w
this.QI(u,e,f)}},
a9u(d,e,f){var w,v=A.aB(d,null,0)
for(w=3;w>0;--w){v.d+=4
this.QH(v,e,f)}},
aBz(d,e,f,g,h){var w,v,u=A.aB(d,null,0)
for(w=4*e,v=3;v>0;--v){u.d+=w
this.qv(u,e,1,16,f,g,h)}},
avY(d,e,f,g,h){var w,v=A.aB(d,null,0)
for(w=3;w>0;--w){v.d+=4
this.qv(v,1,e,16,f,g,h)}},
qw(a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=A.aB(a4,null,0)
for(w=-3*a5,v=-2*a5,u=-a5,t=2*a5;s=a7-1,a7>0;a7=s){if(this.XH(a3,a5,a8,a9))if(this.X_(a3,a5,b0))this.zz(a3,a5)
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
e=$.aAn()
d=e[1020+3*(j-k)+e[1020+m-h]]
e=D.b.B(27*d+63,7)
a0=(e&2147483647)-((e&2147483648)>>>0)
e=D.b.B(18*d+63,7)
a1=(e&2147483647)-((e&2147483648)>>>0)
e=D.b.B(9*d+63,7)
a2=(e&2147483647)-((e&2147483648)>>>0)
e=$.zH()
r[p]=e[255+o+a2]
r[n]=e[255+m+a1]
r[l]=e[255+k+a0]
r[q]=e[255+j-a0]
r[i]=e[255+h-a1]
r[g]=e[255+f-a2]}a3.d+=a6}},
qv(d,a0,a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=A.aB(d,null,0)
for(w=-2*a0,v=-a0;u=a2-1,a2>0;a2=u){if(this.XH(e,a0,a3,a4))if(this.X_(e,a0,a5))this.zz(e,a0)
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
j=$.a5N()
i=D.b.B(k+4,3)
h=j[112+((i&2147483647)-((i&2147483648)>>>0))]
i=D.b.B(k+3,3)
g=j[112+((i&2147483647)-((i&2147483648)>>>0))]
i=D.b.B(h+1,1)
f=(i&2147483647)-((i&2147483648)>>>0)
i=$.zH()
t[r]=i[255+q+f]
t[p]=i[255+o+g]
t[s]=i[255+n-h]
t[m]=i[255+l-f]}e.d+=a1}},
zz(d,e){var w,v,u,t=d.a,s=d.d,r=t[s+-2*e],q=-e,p=t[s+q],o=t[s]
s=t[s+e]
w=3*(o-p)+$.aAn()[1020+r-s]
v=$.a5N()[112+D.b.eC(D.b.B(w+4,3),32)]
u=$.a5N()[112+D.b.eC(D.b.B(w+3,3),32)]
d.l(0,q,$.zH()[255+p+u])
d.l(0,0,$.zH()[255+o-v])},
X_(d,e,f){var w=d.a,v=d.d,u=w[v+-2*e],t=w[v+-e],s=w[v]
v=w[v+e]
w=$.a5M()
return w[255+u-t]>f||w[255+v-s]>f},
XG(d,e,f){var w=d.a,v=d.d,u=w[v+-2*e],t=w[v+-e],s=w[v]
v=w[v+e]
return 2*$.a5M()[255+t-s]+$.aAm()[255+u-v]<=f},
XH(d,e,f,g){var w,v=d.a,u=d.d,t=v[u+-4*e],s=v[u+-3*e],r=v[u+-2*e],q=v[u+-e],p=v[u],o=v[u+e],n=v[u+2*e]
u=v[u+3*e]
v=$.a5M()
w=255+r
if(2*v[255+q-p]+$.aAm()[w-o]>f)return!1
return v[255+t-s]<=g&&v[255+s-r]<=g&&v[w-q]<=g&&v[255+u-n]<=g&&v[255+n-o]<=g&&v[255+o-p]<=g},
lr(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new Int32Array(16)
for(w=d.a,v=d.d,u=0,t=0,s=0;s<4;++s){r=w[v+u]
q=w[v+(u+8)]
p=r+q
o=r-q
q=w[v+(u+4)]
r=D.b.B(q*35468,16)
n=w[v+(u+12)]
m=D.b.B(n*85627,16)
l=(r&2147483647)-((r&2147483648)>>>0)-((m&2147483647)-((m&2147483648)>>>0))
q=D.b.B(q*85627,16)
n=D.b.B(n*35468,16)
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
v=D.b.B(w*35468,16)
r=g[t+12]
q=D.b.B(r*85627,16)
l=(v&2147483647)-((v&2147483648)>>>0)-((q&2147483647)-((q&2147483648)>>>0))
w=D.b.B(w*85627,16)
r=D.b.B(r*35468,16)
k=(w&2147483647)-((w&2147483648)>>>0)+((r&2147483647)-((r&2147483648)>>>0))
A.pp(e,i,0,0,p+k)
A.pp(e,i,1,0,o+l)
A.pp(e,i,2,0,o-l)
A.pp(e,i,3,0,p-k);++t
i+=32}},
aBf(d,e,f,g){this.lr(e,f)
if(g)this.lr(A.aB(e,null,16),A.aB(f,null,4))},
yg(d,e){var w,v,u=d.a[d.d]+4
for(w=0;w<4;++w)for(v=0;v<4;++v)A.pp(e,0,v,w,u)},
a6_(d,e){var w=this,v=null
if(d.a[d.d]!==0)w.yg(d,e)
if(d.a[d.d+16]!==0)w.yg(A.aB(d,v,16),A.aB(e,v,4))
if(d.a[d.d+32]!==0)w.yg(A.aB(d,v,32),A.aB(e,v,128))
if(d.a[d.d+48]!==0)w.yg(A.aB(d,v,48),A.aB(e,v,132))}}
A.aqC.prototype={}
A.aqG.prototype={}
A.aqI.prototype={}
A.Gg.prototype={}
A.aqH.prototype={}
A.aqy.prototype={}
A.td.prototype={}
A.YA.prototype={}
A.YC.prototype={}
A.YB.prototype={}
A.YD.prototype={}
A.Gi.prototype={
vI(){var w,v=this.b
if(v.dI(8)!==47)return!1
w=this.c
w.f=2
w.a=v.dI(14)+1
w.b=v.dI(14)+1
w.d=v.dI(1)!==0
if(v.dI(3)!==0)return!1
return!0},
m5(d){var w,v,u,t=this
t.e=0
if(!t.vI())return null
w=t.c
t.uy(w.a,w.b,!0)
t.Ue()
t.d=A.jU(w.a,w.b,C.br)
v=t.ch
v.toString
u=w.a
w=w.b
if(!t.I8(v,u,w,w,t.gaow()))return null
return t.d},
Ue(){var w,v=this,u=v.c,t=u.a
u=t*u.b+t
w=new Uint32Array(u+t*16)
v.ch=w
v.CW=B.bP(w.buffer,0,null)
v.cx=u
return!0},
ap1(d){var w,v,u,t=this,s=t.b,r=s.dI(2),q=t.ay,p=D.b.bS(1,r)
if((q&p)>>>0!==0)return!1
t.ay=(q|p)>>>0
w=new A.Yz()
t.ax.push(w)
w.a=r
w.b=d[0]
w.c=d[1]
switch(r){case 0:case 1:s=w.e=s.dI(3)+2
w.d=t.uy(A.tf(w.b,s),A.tf(w.c,s),!1)
break
case 3:v=s.dI(8)+1
if(v>16)u=0
else if(v>4)u=1
else{s=v>2?2:3
u=s}d[0]=A.tf(w.b,u)
w.e=u
w.d=t.uy(v,1,!1)
t.ahO(v,w)
break
case 2:break
default:throw B.c(A.ah("Invalid WebP transform type: "+r))}return!0},
uy(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(f){for(w=o.b,v=x.t,u=e,t=d;w.dI(1)!==0;){s=B.a([t,u],v)
if(!o.ap1(s))throw B.c(A.ah("Invalid Transform"))
t=s[0]
u=s[1]}f=!0}else{u=e
t=d}w=o.b
if(w.dI(1)!==0){r=w.dI(4)
if(!(r>=1&&r<=11))throw B.c(A.ah("Invalid Color Cache"))}else r=0
if(!o.aoR(t,u,r,f))throw B.c(A.ah("Invalid Huffman Codes"))
if(r>0){w=D.b.bS(1,r)
o.r=w
o.w=new A.aqD(new Uint32Array(w),32-r)}else o.r=0
w=o.c
w.a=t
w.b=u
q=o.y
o.z=A.tf(t,q)
o.x=q===0?4294967295:D.b.bS(1,q)-1
if(f){o.e=0
return null}p=new Uint32Array(t*u)
if(!o.I8(p,t,u,u,null))throw B.c(A.ah("Failed to decode image data."))
o.e=0
return p},
I8(a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.e,a0=D.b.dv(d,a7),a1=D.b.cd(d,a7),a2=e.Wn(a1,a0),a3=e.e,a4=a7*a8,a5=a7*a9
d=e.r
w=280+d
v=d>0?e.w:null
u=e.x
d=e.b
t=b0!=null
s=a3
while(!0){r=d.b
q=r.c
if(!(!(r.d>=q&&d.a>=64)&&a3<a5))break
if((a1&u)>>>0===0){p=e.uE(e.Q,e.z,e.y,a1,a0)
a2=e.at[p]}if(d.a>=32)d.oP()
r=a2.a
o=r[0].o0(d)
if(o<256){n=r[1].o0(d)
if(d.a>=32)d.oP()
m=r[2].o0(d)
a6[a3]=(D.e.a0(D.b.u(r[3].o0(d),0,255))<<24|D.e.a0(D.b.u(n,0,255))<<16|D.e.a0(D.b.u(o,0,255))<<8|D.e.a0(D.b.u(m,0,255)))>>>0;++a3;++a1
if(a1>=a7){++a0
if(D.b.cd(a0,16)===0&&t)b0.$1(a0)
if(v!=null)for(r=v.b,q=v.a;s<a3;){l=a6[s]
q[D.b.eX(l*506832829>>>0,r)]=l;++s}a1=0}}else if(o<280){k=e.zM(o-256)
j=r[4].o0(d)
if(d.a>=32)d.oP()
i=e.Y4(a7,e.zM(j))
if(a3<i||a4-a3<k)return!1
else{h=a3-i
for(g=0;g<k;++g)a6[a3+g]=a6[h+g]
a3+=k}a1+=k
for(;a1>=a7;){a1-=a7;++a0
if(D.b.cd(a0,16)===0&&t)b0.$1(a0)}if(a3<a5){if((a1&u)>>>0!==0){p=e.uE(e.Q,e.z,e.y,a1,a0)
a2=e.at[p]}if(v!=null)for(r=v.b,q=v.a;s<a3;){l=a6[s]
q[D.b.eX(l*506832829>>>0,r)]=l;++s}}}else if(o<w){for(;s<a3;){r=a6[s]
f=D.b.eX(r*506832829>>>0,v.b)
v.a[f]=r;++s}r=v.a
a6[a3]=r[o-280];++a3;++a1
if(a1>=a7){++a0
if(D.b.cd(a0,16)===0&&t)b0.$1(a0)
for(q=v.b;s<a3;){l=a6[s]
r[D.b.eX(l*506832829>>>0,q)]=l;++s}a1=0}}else return!1}if(t)b0.$1(a0)
if(r.d>=q&&d.a>=64&&a3<a4)return!1
e.e=a3
return!0},
alX(){var w,v,u,t
if(this.r>0)return!1
for(w=this.as,v=this.at,u=0;u<w;++u){t=v[u].a
if(t[1].f>1)return!1
if(t[2].f>1)return!1
if(t[3].f>1)return!1}return!0},
ahV(d){var w,v,u,t,s,r,q,p=this,o=p.f,n=d-o
if(n<=0)return
w=p.c
p.Ul(n,w.a*o)
v=w.a
u=v*n
t=v*p.f
w=p.ch
w.toString
o=p.cx
o.toString
s=A.be(w,!1,null,o)
for(o=p.cy,w=s.a,r=s.d,q=0;q<u;++q){o.toString
o[t+q]=D.b.B(w[r+q],8)&255}p.f=d},
agB(d,e,f){var w,v,u,t,s,r,q,p=this,o="_pixels8",n=p.e,m=D.b.dv(n,d),l=D.b.cd(n,d),k=p.Wn(l,m),j=p.e,i=d*e,h=d*f,g=p.x
n=p.b
while(!0){w=n.b
if(!(!(w.d>=w.c&&n.a>=64)&&j<h))break
if((l&g)>>>0===0){v=p.uE(p.Q,p.z,p.y,l,m)
k=p.at[v]}if(n.a>=32)n.oP()
w=k.a
u=w[0].o0(n)
if(u<256){B.b(p.CW,o)[j]=u;++j;++l
if(l>=d){++m
if(D.b.cd(m,16)===0)p.Iq(m)
l=0}}else if(u<280){t=p.zM(u-256)
s=w[4].o0(n)
if(n.a>=32)n.oP()
r=p.Y4(d,p.zM(s))
if(j>=r&&i-j>=t)for(q=0;q<t;++q){w=j+q
B.b(p.CW,o)[w]=B.b(p.CW,o)[w-r]}else{p.e=j
return!0}j+=t
l+=t
for(;l>=d;){l-=d;++m
if(D.b.cd(m,16)===0)p.Iq(m)}if(j<h&&(l&g)>>>0!==0){v=p.uE(p.Q,p.z,p.y,l,m)
k=p.at[v]}}else return!1}p.Iq(m)
p.e=j
return!0},
Iq(d){var w,v,u,t,s=this,r=d-s.f,q=A.be(B.b(s.CW,"_pixels8"),!1,null,s.c.a*s.f)
if(r>0){w=s.f
v=s.cy
v.toString
u=s.db
u.toString
t=A.be(v,!1,null,u*w)
s.ax[0].aty(w,w+r,q,t)}s.f=d},
aox(d){var w,v,u,t,s,r=this,q=r.c,p=q.a,o=r.f,n=d-o
if(n<=0)return
r.Ul(n,p*o)
p=r.cx
p.toString
w=r.f
v=p
u=0
for(;u<n;++u,++w)for(t=0;t<q.a;++t,++v){s=r.ch[v]
p=r.d
p.toString
p.x[w*p.a+t]=(D.e.a0(D.b.u(s>>>24&255,0,255))<<24|D.e.a0(D.b.u(s&255,0,255))<<16|D.e.a0(D.b.u(s>>>8&255,0,255))<<8|D.e.a0(D.b.u(s>>>16&255,0,255)))>>>0}r.f=d},
Ul(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.ax,k=l.length,j=m.c.a,i=m.f,h=i+d,g=m.cx
g.toString
w=m.ch
w.toString
D.bv.bj(w,g,g+j*d,w,e)
for(j=h-i,w=j-1,v=e;u=k-1,k>0;v=g,k=u){t=l[u]
s=m.ch
s.toString
r=t.b
switch(t.a){case 2:t.ash(s,g,g+j*r)
break
case 0:t.azk(i,h,s,g)
if(h!==t.c){q=g-r
D.bv.bj(s,q,q+r,s,g+w*r)}break
case 1:t.atz(i,h,s,g)
break
case 3:if(v===g&&t.e>0){p=t.e
o=j*D.b.B(r+D.b.bS(1,p)-1,p)
n=g+j*r-o
D.bv.bj(s,n,n+o,s,g)
t.a0C(i,h,s,n,s,g)}else t.a0C(i,h,s,v,s,g)
break}}},
aoR(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(g&&j.b.dI(1)!==0){w=j.b.dI(3)+2
v=A.tf(d,w)
u=A.tf(e,w)
t=v*u
s=j.uy(v,u,!1)
j.y=w
for(r=1,q=0;q<t;++q){p=s[q]>>>8&65535
s[q]=p
if(p>=r)r=p+1}}else{s=null
r=1}o=J.ij(r,x.f)
for(n=0;n<r;++n)o[n]=A.aWl()
for(m=f>0,q=0;q<r;++q)for(l=0;l<5;++l){k=C.a5l[l]
if(l===0&&m)k+=D.b.bS(1,f)
if(!j.aoP(k,o[q].a[l]))return!1}j.Q=s
j.as=r
j.at=o
return!0},
aoP(d,e){var w,v,u,t,s,r,q,p,o,n=this.b
if(n.dI(1)!==0){w=x.t
v=B.a([0,0],w)
u=B.a([0,0],w)
t=B.a([0,0],w)
s=n.dI(1)+1
v[0]=n.dI(n.dI(1)===0?1:8)
u[0]=0
w=s-1
t[0]=w
if(s===2){v[1]=n.dI(8)
u[1]=1
t[1]=w}r=e.at0(t,u,v,d,s)}else{q=new Int32Array(19)
p=n.dI(4)+4
if(p>19)return!1
t=new Int32Array(d)
for(o=0;o<p;++o)q[C.a4g[o]]=n.dI(3)
r=this.aoQ(q,d,t)
if(r)r=e.a0l(t,d)}return r},
aoQ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=A.aLh()
if(!j.a0l(d,19))return!1
w=this.b
if(w.dI(1)!==0){v=2+w.dI(2+2*w.dI(3))
if(v>e)return!1}else v=e
for(u=0,t=8;u<e;v=s){s=v-1
if(v===0)break
if(w.a>=32)w.oP()
r=j.o0(w)
if(r<16){q=u+1
f[u]=r
if(r!==0)t=r
u=q}else{p=r-16
o=C.SD[p]
n=C.T1[p]
m=w.dI(o)+n
if(u+m>e)return!1
else{l=r===16?t:0
for(;k=m-1,m>0;m=k,u=q){q=u+1
f[u]=l}}}}return!0},
zM(d){var w
if(d<4)return d+1
w=D.b.B(d-2,1)
return D.b.bS(2+(d&1),w)+this.b.dI(w)+1},
Y4(d,e){var w,v
if(e>120)return e-120
else{w=C.UM[e-1]
v=(w>>>4)*d+(8-(w&15))
return v>=1?v:1}},
ahO(d,e){var w,v,u=D.b.bS(1,D.b.d5(8,e.e)),t=new Uint32Array(u),s=B.bP(e.d.buffer,0,null),r=B.bP(t.buffer,0,null)
t[0]=e.d[0]
w=4*d
for(v=4;v<w;++v)r[v]=s[v]+r[v-4]&255
for(w=4*u;v<w;++v)r[v]=0
e.d=t
return!0},
uE(d,e,f,g,h){if(f===0)return 0
d.toString
return d[e*D.b.B(h,f)+D.b.B(g,f)]},
Wn(d,e){var w=this,v=w.uE(w.Q,w.z,w.y,d,e)
return w.at[v]}}
A.R2.prototype={
avp(d){return this.ahV(d)}}
A.Yy.prototype={
a4L(){var w,v,u=this.a
if(u<32){w=this.c
v=D.b.eX(w[0],u)+((w[1]&C.l4[u])>>>0)*(C.l4[32-u]+1)}else{w=this.c
v=u===32?w[1]:D.b.eX(w[1],u-32)}return v},
dI(d){var w,v=this,u=v.b
if(!(u.d>=u.c&&v.a>=64)&&d<25){u=v.a4L()
w=C.l4[d]
v.a+=d
v.oP()
return(u&w)>>>0}else throw B.c(A.ah("Not enough data in input."))},
oP(){var w,v,u,t,s=this,r=s.b,q=s.c,p=r.c
while(!0){w=s.a
if(!(w>=8&&r.d<p))break
v=r.a[r.d++]
u=q[0]
t=q[1]
q[0]=(u>>>8)+(t&255)*16777216
q[1]=t>>>8
q[1]=(q[1]|v*16777216)>>>0
s.a=w-8}}}
A.aqD.prototype={}
A.Yz.prototype={
aty(d,e,f,g){var w,v,u,t,s,r,q,p=this.e,o=D.b.d5(8,p),n=this.b,m=this.d
if(o<8){w=D.b.bS(1,p)-1
v=D.b.bS(1,o)-1
for(u=d;u<e;++u)for(t=0,s=0;s<n;++s){if((s&w)>>>0===0){p=f.a
r=f.d
t=p[r]
f.d=r+1}p=m[(t&v)>>>0]
r=g.a
q=g.d
r[q]=p>>>8&255
g.d=q+1
t=D.b.B(t,o)}}else for(u=d;u<e;++u)for(s=0;s<n;++s){p=f.a
r=f.d
p=p[r]
f.d=r+1
p=m[p]
r=g.a
q=g.d
r[q]=p>>>8&255
g.d=q+1}},
a0C(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=this.e,o=D.b.d5(8,p),n=this.b,m=this.d
if(o<8){w=D.b.bS(1,p)-1
v=D.b.bS(1,o)-1
for(u=d;u<e;++u)for(t=0,s=0;s<n;++s,i=q){if((s&w)>>>0===0){r=g+1
t=f[g]>>>8&255
g=r}q=i+1
h[i]=m[t&v]
t=D.b.d5(t,o)}}else for(u=d;u<e;++u)for(s=0;s<n;++s,i=q,g=r){q=i+1
r=g+1
h[i]=m[f[g]>>>8&255]}},
atz(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this.b,f=this.e,e=D.b.bS(1,f)-1,d=A.tf(g,f),a0=D.b.B(a1,f)*d
for(w=a1;w<a2;){f=new Uint8Array(3)
for(v=a0,u=0;u<g;++u){if((u&e)>>>0===0){t=v+1
s=this.d[v]
f[0]=s&255
f[1]=s>>>8&255
f[2]=s>>>16&255
v=t}s=a4+u
r=a3[s]
q=r>>>8&255
p=f[0]
o=$.hc()
o[0]=p
p=$.hC()
n=p[0]
o[0]=q
m=p[0]
l=$.aFA()
l[0]=n*m
k=$.aT7()
j=(r>>>16&255)+(k[0]>>>5)>>>0&255
o[0]=f[1]
n=p[0]
o[0]=q
l[0]=n*p[0]
i=k[0]
o[0]=f[2]
n=p[0]
o[0]=j
l[0]=n*p[0]
h=k[0]
a3[s]=(r&4278255360|j<<16|((r&255)+(i>>>5)>>>0)+(h>>>5)>>>0&255)>>>0}a4+=g;++w
if((w&e)>>>0===0)a0+=d}},
azk(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this,m=n.b
if(d===0){A.aqE(f,g,4278190080)
for(w=1;w<m;++w){v=g+w
A.aqE(f,v,f[v-1])}g+=m;++d}v=n.e
u=D.b.bS(1,v)-1
t=A.tf(m,v)
s=D.b.B(d,v)*t
for(r=d;r<e;){A.aqE(f,g,f[g-m])
q=s+1
p=$.aOe[n.d[s]>>>8&15]
for(w=1;w<m;++w){if((w&u)>>>0===0){o=q+1
p=$.aOe[n.d[q]>>>8&15]
q=o}v=g+w
A.aqE(f,v,p.$3(f,f[v-1],v-m))}g+=m;++r
if((r&u)>>>0===0)s+=t}},
ash(d,e,f){var w,v,u
for(;e<f;e=u){w=d[e]
v=w>>>8&255
u=e+1
d[e]=(w&4278255360|(w&16711935)+(v<<16|v)&16711935)>>>0}}}
A.aqR.prototype={
gcg(){var w=this,v=w.d
v=v>1||w.e>=4||w.f>1||w.r!==0
if(v)return!1
return!0},
Mq(d,e,f,g){var w,v,u,t,s,r=this,q="_vp8l"
if(!r.gcg())return!1
w=C.Wf[r.e]
if(r.d===0){v=r.b
u=e*v
t=r.a
D.B.bj(g,u,f*v,t.a,t.d-t.b+u)}else{v=e+f
B.b(r.x,q).cy=g
t=r.y
s=r.x
if(t)v=B.b(s,q).agB(B.b(r.x,q).c.a,B.b(r.x,q).c.b,v)
else{t=B.b(s,q)
s=B.b(r.x,q).ch
s.toString
v=t.I8(s,B.b(r.x,q).c.a,B.b(r.x,q).c.b,v,B.b(r.x,q).gavo())}if(!v)return!1}if(w!=null){v=r.b
w.$6(v,r.c,v,e,f,g)}if(r.f===1)if(!r.agX(g,r.b,r.c,e,f))return!1
if(e+f===r.c)r.w=!0
return!0},
agX(d,e,f,g,h){if(e<=0||f<=0||g<0||h<0||g+h>f)return!1
return!0}}
A.Gm.prototype={
aei(d,e){d.aP()
this.r=0
this.w=d.d-d.b
this.x=e-16}}
A.R3.prototype={}
A.QC.prototype={
IW(d){var w,v=this
if(d===0)return!1
w=(d<<1>>>0)-1
v.e=w
w=new Int32Array(w<<1>>>0)
v.d=w
B.b(w,"tree")[1]=-1
v.f=1
D.B.hT(v.a,0,128,255)
return!0},
a0l(d,e){var w,v,u,t,s,r=this
for(w=0,v=0,u=0;u<e;++u)if(d[u]>0){++w
v=u}if(!r.IW(w))return!1
if(w===1){if(v<0||v>=e)return!1
return r.Hu(v,0,0)}t=new Int32Array(e)
if(!r.aly(d,e,t))return!1
for(u=0;u<e;++u){s=d[u]
if(s>0)if(!r.Hu(u,t[u],s))return!1}return r.f===r.e},
at0(d,e,f,g,h){var w,v,u,t=this
if(!t.IW(h))return!1
for(w=0;w<h;++w){v=e[w]
if(v!==-1){u=f[w]
if(u>=g)return t.f===t.e
if(!t.Hu(u,v,d[w]))return t.f===t.e}}return t.f===t.e},
o0(d){var w,v=this,u=d.a4L(),t=d.a,s=u&127,r=v.a[s]
if(r<=7){d.a=t+r
return v.b[s]}w=v.c[s]
t+=7
u=u>>>7
do{w=w+B.b(v.d,"tree")[(w<<1>>>0)+1]+(u&1)
u=u>>>1;++t}while(v.XJ(w))
d.a=t
return B.b(v.d,"tree")[w<<1>>>0]},
Hu(d,e,f){var w,v,u,t,s,r,q,p,o,n=this,m="tree"
if(f<=7){w=n.Yx(e,f)
for(v=D.b.cI(1,7-f),u=n.b,t=n.a,s=0;s<v;++s){r=(w|D.b.cI(s,f))>>>0
u[r]=d
t[r]=f}}else w=n.Yx(D.b.it(e,f-7),7)
for(v=n.c,q=7,p=0;o=f-1,f>0;f=o){if(p>=n.e)return!1
u=(p<<1>>>0)+1
if(B.b(n.d,m)[u]<0){t=n.f
if(t===n.e)return!1
B.b(n.d,m)[u]=t-p
n.f+=2
B.b(n.d,m)[(t<<1>>>0)+1]=-1
B.b(n.d,m)[(t+1<<1>>>0)+1]=-1}else if(B.b(n.d,m)[u]===0)return!1
p+=B.b(n.d,m)[u]+(D.b.it(e,o)&1);--q
if(q===0)v[w]=p}if(n.amO(p))n.amP(p,0)
else if(n.XJ(p))return!1
B.b(n.d,m)[p<<1>>>0]=d
return!0},
Yx(d,e){return D.b.eX((C.us[d&15]<<4|C.us[D.b.B(d,4)])>>>0,8-e)},
amP(d,e){B.b(this.d,"tree")[(d<<1>>>0)+1]=e},
XJ(d){return B.b(this.d,"tree")[(d<<1>>>0)+1]!==0},
amO(d){return B.b(this.d,"tree")[(d<<1>>>0)+1]<0},
aly(d,e,f){var w,v,u,t,s,r,q,p=new Int32Array(16),o=new Int32Array(16)
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
A.C0.prototype={
h(d,e){return this.a[e]}}
A.YN.prototype={}
A.R4.prototype={}
A.aqS.prototype={
rT(d){var w=A.be(d,!1,null,0)
this.b=w
if(!this.Wl(w))return!1
return!0},
lD(d){var w,v=this,u=null,t=A.be(d,!1,u,0)
v.b=t
if(!v.Wl(t))return u
t=new A.R4(B.a([],x.J))
v.a=t
w=v.b
w.toString
if(!v.a_z(w,t))return u
t=v.a
switch(t.f){case 3:t.as=t.z.length
return t
case 2:w=v.b
w.toString
w.d=t.ay
if(!A.aDK(w,t).vI())return u
t=v.a
t.as=t.z.length
return t
case 1:w=v.b
w.toString
w.d=t.ay
if(!A.aDI(w,t).vI())return u
t=v.a
t.as=t.z.length
return t}return u},
hm(d){var w,v,u,t,s=this,r=s.b
if(r==null||s.a==null)return null
w=s.a
if(w.e){w=w.z
if(d>=w.length||!1)return null
v=w[d]
r.toString
return s.Vi(r.oy(B.b(v.x,"_frameSize"),B.b(v.w,"_framePosition")),d)}u=w.f
if(u===2){r.toString
t=r.oy(w.ch,w.ay)
r=s.a
r.toString
return A.aDK(t,r).m5(0)}else if(u===1){r.toString
t=r.oy(w.ch,w.ay)
r=s.a
r.toString
return A.aDI(t,r).m5(0)}return null},
jh(d){var w
this.lD(d)
w=this.a
w.Q=0
w.as=1
return this.hm(0)},
Vi(d,e){var w,v,u,t=null,s=B.a([],x.J),r=new A.R4(s)
if(!this.a_z(d,r))return t
if(r.f===0)return t
w=this.a
r.Q=w.Q
r.as=w.as
if(r.e){if(e>=s.length||!1)return t
v=s[e]
return this.Vi(d.oy(B.b(v.x,"_frameSize"),B.b(v.w,"_framePosition")),e)}else{u=d.oy(r.ch,r.ay)
s=r.f
if(s===2)return A.aDK(u,r).m5(0)
else if(s===1)return A.aDI(u,r).m5(0)}return t},
Wl(d){if(d.dJ(4)!=="RIFF")return!1
d.K()
if(d.dJ(4)!=="WEBP")return!1
return!0},
a_z(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=d.b,k=d.c,j=!1
while(!0){if(!(d.d<k&&!j))break
w=d.dJ(4)
v=d.K()
u=v+1>>>1<<1>>>0
t=d.d
s=t-l
switch(w){case"VP8X":if(!this.aiT(d,e))return!1
break
case"VP8 ":e.ay=s
e.ch=v
e.f=1
j=!0
break
case"VP8L":e.ay=s
e.ch=v
e.f=2
j=!0
break
case"ALPH":r=d.a
q=d.e
p=r.length
r=new A.hl(r,0,p,0,q)
e.at=r
r.d=t
d.d+=u
break
case"ANIM":e.f=3
o=d.K()
d.T()
D.e.a0(D.b.u(o&255,0,255))
D.e.a0(D.b.u(o>>>24&255,0,255))
D.e.a0(D.b.u(o>>>16&255,0,255))
D.e.a0(D.b.u(o>>>8&255,0,255))
break
case"ANMF":if(!this.air(d,e,v))return!1
break
case"ICCP":e.toString
n=d.e2(v)
d.d=d.d+(n.c-n.d)
n.eP()
break
case"EXIF":e.toString
d.dJ(v)
break
case"XMP ":e.toString
d.dJ(v)
break
default:B.azS("UNKNOWN WEBP TAG: "+w)
d.d+=u
break}t=d.d
m=u-(t-l-s)
if(m>0)d.d=t+m}if(!e.d)e.d=e.at!=null
return e.f!==0},
aiT(d,e){var w,v,u,t,s=d.aP()
if((s&192)!==0)return!1
w=D.b.B(s,4)
v=D.b.B(s,1)
if((s&1)!==0)return!1
if(d.jx()!==0)return!1
u=d.jx()
t=d.jx()
e.a=u+1
e.b=t+1
e.e=(v&1)!==0
e.d=(w&1)!==0
return!0},
air(d,e,f){var w
d.jx()
d.jx()
d.jx()
w=new A.R3(d.jx()+1,d.jx())
w.aei(d,f)
if(w.r!==0)return!1
e.z.push(w)
return!0}}
A.Qu.prototype={
ae_(d,e,f){var w,v,u,t,s,r,q=this,p=d.a,o=d.b
q.v6(A.adj("R",p,o,f,e))
q.v6(A.adj("G",p,o,f,e))
q.v6(A.adj("B",p,o,f,e))
if(d.c===C.br)q.v6(A.adj("A",p,o,f,e))
w=d.mL()
for(v=0,u=0;v<o;++v)for(t=0;t<p;++t){s=u+1
q.b.mR(t,v,w[u]/255)
u=s+1
q.c.mR(t,v,w[s]/255)
s=u+1
q.d.mR(t,v,w[u]/255)
r=q.e
if(r!=null){u=s+1
r.mR(t,v,w[s]/255)}else u=s}},
gby(d){var w=this.a
if(w.a===0)w=0
else{w=w.gbi(w)
w=w.b.$1(J.kE(w.a)).b}return w},
gbW(d){var w=this.a
if(w.a===0)w=0
else{w=w.gbi(w)
w=w.b.$1(J.kE(w.a)).c}return w},
oo(d,e,f){var w=this.b
if(w!=null)if(w.d===3)w.mR(d,e,f)
else w.yQ(d,e,B.cU(f))},
tW(d,e,f){var w=this.c
if(w!=null)if(this.b.d===3)w.mR(d,e,f)
else w.yQ(d,e,B.cU(f))},
yN(d,e,f){var w
if(this.c!=null){w=this.d
if(w.d===3)w.mR(d,e,f)
else w.yQ(d,e,B.cU(f))}},
Ql(d,e,f){var w=this.e
if(w!=null)if(w.d===3)w.mR(d,e,f)
else w.yQ(d,e,B.cU(f))},
h(d,e){return this.a.h(0,e)},
v6(d){var w=this,v=d.a
w.a.l(0,v,d)
switch(v){case"R":w.b=d
break
case"G":w.c=d
break
case"B":w.d=d
break
case"A":w.e=d
break
case"Z":break}}}
A.C4.prototype={
yA(d,e){var w,v,u,t=this,s=e*t.b+d,r=t.d,q=r===1
if(q||r===0){r=B.cU(t.f[s])
w=t.e
if(w===8)v=255
else v=w===16?65535:4294967295
return r/(q?v-1:v)}r=r===3&&t.e===16
q=t.f
if(r){r=B.cU(q[s])
if($.eC==null)A.mn()
u=$.eC[r]}else u=q[s]
return u},
mR(d,e,f){var w,v,u=this
if(u.d!==3)return
w=e*u.b+d
v=u.f
if(u.e===16)v[w]=A.aWm(f)
else v[w]=f},
yQ(d,e,f){this.f[e*this.b+d]=f},
gae(d){return this.a}}
A.Q2.prototype={
j(d){return"Format."+this.b}}
A.As.prototype={
j(d){return"Channels."+this.b}}
A.QK.prototype={
Pw(d){var w,v,u,t,s,r,q=this,p=q.x,o=B.bP(p.buffer,0,null)
switch(d.a){case 2:return o
case 3:w=q.a*q.b*4
v=new Uint8Array(w)
for(u=0;u<w;u+=4){p=u+2
v[u]=o[p]
t=u+1
v[t]=o[t]
v[p]=o[u]
p=u+3
v[p]=o[p]}return v
case 1:w=q.a*q.b*4
v=new Uint8Array(w)
for(u=0;u<w;u+=4){p=u+3
v[u]=o[p]
t=u+1
s=u+2
v[t]=o[s]
v[s]=o[t]
v[p]=o[u]}return v
case 0:w=q.a*q.b*4
v=new Uint8Array(w)
for(u=0;u<w;u+=4){p=u+3
v[u]=o[p]
t=u+1
v[t]=o[u]
s=u+2
v[s]=o[t]
v[p]=o[s]}return v
case 4:w=q.a*q.b*3
v=new Uint8Array(w)
for(u=0,r=0;r<w;u+=4,r+=3){v[r]=o[u]
v[r+1]=o[u+1]
v[r+2]=o[u+2]}return v
case 5:w=q.a*q.b*3
v=new Uint8Array(w)
for(u=0,r=0;r<w;u+=4,r+=3){v[r]=o[u+2]
v[r+1]=o[u+1]
v[r+2]=o[u]}return v
case 6:v=new Uint8Array(q.a*q.b)
for(w=p.length,u=0;u<w;++u){t=p[u]
v[u]=D.e.be(0.299*(t&255)+0.587*(t>>>8&255)+0.114*(t>>>16&255))}return v}},
mL(){return this.Pw(C.hr)},
ac(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=Math.min(n.b,e.b),l=n.a,k=e.a,j=Math.min(l,k)
for(w=n.x,v=e.x,u=0;u<m;++u)for(t=u*l,s=u*k,r=0;r<j;++r){q=t+r
p=w[q]
o=v[s+r]
w[q]=(D.e.a0(D.b.u((p>>>24&255)+(o>>>24&255),0,255))<<24|D.e.a0(D.b.u((p>>>16&255)+(o>>>16&255),0,255))<<16|D.e.a0(D.b.u((p>>>8&255)+(o>>>8&255),0,255))<<8|D.e.a0(D.b.u((p&255)+(o&255),0,255)))>>>0}return n},
aD(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=Math.min(n.b,e.b),l=n.a,k=e.a,j=Math.min(l,k)
for(w=n.x,v=e.x,u=0;u<m;++u)for(t=u*l,s=u*k,r=0;r<j;++r){q=t+r
p=w[q]
o=v[s+r]
w[q]=(D.e.a0(D.b.u((p>>>24&255)-(o>>>24&255),0,255))<<24|D.e.a0(D.b.u((p>>>16&255)-(o>>>16&255),0,255))<<16|D.e.a0(D.b.u((p>>>8&255)-(o>>>8&255),0,255))<<8|D.e.a0(D.b.u((p&255)-(o&255),0,255)))>>>0}return n},
ab(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=Math.min(m.b,B.dz(e.gbW(e))),k=m.a,j=Math.min(k,B.dz(e.gby(e)))
for(w=m.x,v=0;v<l;++v)for(u=v*k,t=0;t<j;++t){s=u+t
r=w[s]
q=e.aC_(t,v)
p=q.aBY(0,255)
o=q.it(0,8)
n=q.it(0,16)
w[s]=(D.e.a0(D.b.u((r>>>24&255)*(q.it(0,24)&255),0,255))<<24|D.e.a0(D.b.u((r>>>16&255)*(n&255),0,255))<<16|D.e.a0(D.b.u((r>>>8&255)*(o&255),0,255))<<8|D.e.a0(D.e.u((r&255)*p,0,255)))>>>0}return m},
gm(d){return this.x.length},
h(d,e){return this.x[e]},
l(d,e,f){this.x[e]=f},
a97(d,e,f){this.x[e*this.a+d]=f},
aso(d){var w,v,u,t
if(this.Q==null){w=x.N
this.Q=B.E(w,w)}for(w=B.ik(d,d.r,B.q(d).c);w.t();){v=w.d
u=this.Q
u.toString
t=d.h(0,v)
t.toString
u.l(0,v,t)}}}
A.QM.prototype={
j(d){return"ImageException: "+this.a},
$ibK:1}
A.hl.prototype={
gm(d){return this.c-this.d},
h(d,e){return this.a[this.d+e]},
l(d,e,f){this.a[this.d+e]=f
return f},
jr(d,e,f,g){var w=this.a,v=J.aW(w),u=this.d+d
if(f instanceof A.hl)v.bj(w,u,u+e,f.a,f.d+g)
else v.bj(w,u,u+e,x.L.a(f),g)},
nV(d,e,f){return this.jr(d,e,f,0)},
axH(d,e,f){var w=this.a,v=this.d+d
J.kD(w,v,v+e,f)},
GO(d,e,f){var w=this,v=f!=null?w.b+f:w.d
return A.be(w.a,w.e,d,v+e)},
e2(d){return this.GO(d,0,null)},
oy(d,e){return this.GO(d,0,e)},
qg(d,e){return this.GO(d,e,null)},
aP(){return this.a[this.d++]},
fE(d){var w=this.e2(d)
this.d=this.d+(w.c-w.d)
return w},
dJ(d){var w,v,u,t,s=this
if(d==null){w=B.a([],x.t)
for(v=s.c;u=s.d,u<v;){t=s.a
s.d=u+1
u=t[u]
if(u===0)return B.dh(w,0,null)
w.push(u)}throw B.c(A.ah(y.c))}return B.dh(s.fE(d).eP(),0,null)},
xR(){return this.dJ(null)},
azP(){var w,v,u,t=this,s=B.a([],x.t)
for(w=t.c;v=t.d,v<w;){u=t.a
t.d=v+1
v=u[v]
if(v===0)return D.Ir.bU(s)
s.push(v)}throw B.c(A.ah(y.c))},
T(){var w,v=this,u=v.a,t=v.d,s=v.d=t+1,r=u[t]&255
v.d=s+1
w=u[s]&255
if(v.e)return r<<8|w
return w<<8|r},
jx(){var w,v,u=this,t=u.a,s=u.d,r=u.d=s+1,q=t[s]&255
s=u.d=r+1
w=t[r]&255
u.d=s+1
v=t[s]&255
if(u.e)return v|w<<8|q<<16
return q|w<<8|v<<16},
K(){var w,v,u,t=this,s=t.a,r=t.d,q=t.d=r+1,p=s[r]&255
r=t.d=q+1
w=s[q]&255
q=t.d=r+1
v=s[r]&255
t.d=q+1
u=s[q]&255
if(t.e)return(p<<24|w<<16|v<<8|u)>>>0
return(u<<24|v<<16|w<<8|p)>>>0},
Fx(){return A.b5u(this.OH())},
OH(){var w,v,u,t,s,r,q,p=this,o=p.a,n=p.d,m=p.d=n+1,l=o[n]&255
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
if(p.e)return(D.b.bS(l,56)|D.b.bS(w,48)|D.b.bS(v,40)|D.b.bS(u,32)|t<<24|s<<16|r<<8|q)>>>0
return(D.b.bS(q,56)|D.b.bS(r,48)|D.b.bS(s,40)|D.b.bS(t,32)|u<<24|v<<16|w<<8|l)>>>0},
y9(d,e,f){var w,v=this,u=v.a
if(x.D.b(u))return v.a5P(e,f)
w=v.b+e+e
return J.a6b(u,w,f<=0?v.c:w+f)},
a5P(d,e){var w,v=this,u=e==null?v.c-v.d-d:e,t=v.a
if(x.D.b(t))return B.bP(t.buffer,t.byteOffset+v.d+d,u)
w=v.d+d
w=J.a6b(t,w,w+u)
return new Uint8Array(B.eS(w))},
eP(){return this.a5P(0,null)},
yc(){var w=this.a
if(x.D.b(w))return B.we(w.buffer,w.byteOffset+this.d,null)
return B.we(this.eP().buffer,0,null)}}
A.ahL.prototype={
aJ(d){var w=this
if(w.a===w.c.length)w.ahN()
w.c[w.a++]=d&255},
yr(d){var w,v,u,t,s=this,r=d.length
for(;w=s.a,v=w+r,u=s.c,t=u.length,v>t;)s.W0(v-t)
D.B.cF(u,w,v,d)
s.a+=r},
jG(d){var w=this
if(w.b){w.aJ(D.b.B(d,8)&255)
w.aJ(d&255)
return}w.aJ(d&255)
w.aJ(D.b.B(d,8)&255)},
G_(d){var w=this
if(w.b){w.aJ(d>>>24&255)
w.aJ(d>>>16&255)
w.aJ(d>>>8&255)
w.aJ(d&255)
return}w.aJ(d&255)
w.aJ(d>>>8&255)
w.aJ(d>>>16&255)
w.aJ(d>>>24&255)},
W0(d){var w,v,u,t
if(d!=null)w=d
else{v=this.c.length
w=v===0?8192:v*2}v=this.c
u=v.length
t=new Uint8Array(u+w)
D.B.cF(t,0,u,v)
this.c=t},
ahN(){return this.W0(null)},
gm(d){return this.a}}
var z=a.updateTypes(["~(hl)","k(lw,k,k)","~()","K(K)","~(kW,u<@>)","~(k,k,k,k,k,ff)","~(r?)","~(nL?)","@()","qN()","~(iY)","~(kW,u<k>)","~(k)","~(r,cv)","hV(P,j?)","p2(P)","hW(P)","@(l)","aQ(ry)","~(jV,t)","~(r,cv?)?(iY)","~(kL)","~(b4)","vv(k)","kW(k)","K(fM)","t(q1)","t(r,cv)","b4(k)"])
A.acl.prototype={
$1(d){var w,v,u=this.a,t=u.c
if((t.a.a&30)!==0)return null
w=--u.a
v=u.e
v[this.b]=d
if(w!==0)return null
if(!u.b)return null
u=u.$ti.i("eO<1>")
t.dO(0,B.al(new B.eO(v,u),!0,u.i("p.E")))},
$S(){return this.a.$ti.i("aQ(1)")}}
A.acm.prototype={
$2(d,e){var w=this.a.c
if((w.a.a&30)!==0)return null
w.p0(d,e)},
$S:33}
A.aoE.prototype={
$0(){return this.a.amW(this.b)},
$S:0}
A.aoD.prototype={
$1(d){var w=d.b
return(w&1)!==0?(d.goR().e&4)!==0:(w&2)===0},
$S(){return this.a.$ti.i("t(Xo<1>)")}}
A.a7s.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.c,p=H.OZ(!1,G.fN,N.u,s,s,s,s,s,q.ghu(q),s),o=H.Ul(!1,G.fL,N.u,s,s,s,q.gkT(q),s),n=q.d,m=x.x,l=x.E
m=F.du(B.a([G.fO,G.b9,p,G.b9,o,G.cw,O.aj3(n,new A.a7n(r),C.eG,m),P.HR,G.b9,O.aj3(n,new A.a7o(r),C.nn,m),P.HS],l),E.G,E.F,E.H)
n=H.jj(q.a,H.vE(s,G.d_,s,s,s,s,s,s,!0,s,s,s,s,q.c,s,s,s,s,s,s,s,s,s,s,A.aMe(q.e),s,s,s,s,s,s,s,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),!1,10,1,q.gmu(),!1,s,K.bb)
o=F.up(8)
p=H.aJH(F.av(d).fr)
w=q.f
w=w!=null?A.aKh(E.aI,K.jY,w):s
v=q.e===C.h2?K.kC:s
u=B.a([m,G.cv,n,K.ac,new A.A7(1.7777777777777777,F.eh(s,v,N.u,s,s,new F.ee(s,w,p,o,s,s,E.b4),s,s,s,s,s,s,s),s)],l)
o=F.du(B.a([G.fM,G.cw,U.asX(G.eY,Q.jh,new A.a7p(r,d))],l),E.G,E.F,E.H)
p=H.jj(q.b,H.vE(s,G.d_,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,A.aMe(q.e)!=null?"Generated Blur Hash":s,s,s,s,s,s,s,s,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),!1,10,1,s,!1,s,K.bb)
n=F.up(8)
m=H.aJH(F.av(d).fr)
w=q.r
w=w!=null?A.aKh(E.aI,K.jY,w):s
q=q.e===C.h2?K.kC:s
t=B.a([o,G.cv,p,K.ac,new A.A7(1.7777777777777777,F.eh(s,q,N.u,s,s,new F.ee(s,w,m,n,s,s,E.b4),s,s,s,s,s,s,s),s)],l)
return L.EI(new A.a7q(r,u,t),new A.a7r(r,u,t))},
$S:z+14}
A.a7n.prototype={
$1(d){if(d!=null)this.a.c.sxe(0,d)},
$S:z+7}
A.a7o.prototype={
$1(d){if(d!=null)this.a.c.sxe(0,d)},
$S:z+7}
A.a7p.prototype={
$0(){var w=0,v=B.a2(x.H),u=this,t
var $async$$0=B.a3(function(d,e){if(d===1)return B.a_(e,v)
while(true)switch(w){case 0:w=2
return B.a5(u.a.c.fh(0),$async$$0)
case 2:t=u.b.a6(x.gV)
t.toString
t.f.he(Q.jd)
return B.a0(null,v)}})
return B.a1($async$$0,v)},
$S:2}
A.a7q.prototype={
$1(d){var w=B.al(this.b,!0,x.gy),v=this.a.c
if(v.d===C.eG)w.push(K.ac)
if(v.d===C.eG)D.d.Z(w,this.c)
return L.WK(L.eY(w,E.G,E.F,E.H),null)},
$S:z+15}
A.a7r.prototype={
$1(d){var w=L.dR(L.eY(this.b,E.G,E.F,E.H),1)
return F.du(B.a([w,G.fS,L.dR(this.a.c.d===C.eG?L.eY(this.c,E.G,E.F,E.H):E.dy,1)],x.E),E.G,E.F,E.H)},
$S:z+16}
A.a7t.prototype={
$1(d){var w=this.a
w.a0n(d.w)
w.av()},
$S:z+18}
A.a7u.prototype={
$2(d,e){this.a.av()},
$S:40}
A.a7v.prototype={
$0(){this.a.a.d1(0)},
$S:5}
A.aev.prototype={
$2(d,e){this.a.aAr(this.b,this.c,d,e)},
$S(){return B.q(this.a).i("~(oh.T,~(r,cv?))")}}
A.aew.prototype={
$3(d,e,f){return this.a8o(d,e,f)},
a8o(d,e,f){var w=0,v=B.a2(x.H),u=this,t
var $async$$3=B.a3(function(g,h){if(g===1)return B.a_(h,v)
while(true)switch(w){case 0:w=2
return B.a5(null,$async$$3)
case 2:t=u.c
if(t.a==null)t.Qq(new A.asZ(B.a([],x.v),B.a([],x.u)))
t=t.a
t.toString
t.FB(B.c1("while resolving an image"),e,null,!0,f)
return B.a0(null,v)}})
return B.a1($async$$3,v)},
$S(){return B.q(this.a).i("aw<~>(oh.T?,r,cv?)")}}
A.aes.prototype={
a8n(d,e){var w=0,v=B.a2(x.H),u,t=this,s
var $async$$2=B.a3(function(f,g){if(f===1)return B.a_(g,v)
while(true)switch(w){case 0:s=t.a
if(s.b){w=1
break}t.b.$3(s.a,d,e)
s.b=!0
case 1:return B.a0(u,v)}})
return B.a1($async$$2,v)},
$2(d,e){return this.a8n(d,e)},
$S:161}
A.aer.prototype={
$1(d){var w,v,u,t=this
t.a.a=d
try{t.c.$2(d,t.d)}catch(u){w=B.ay(u)
v=B.b5(u)
t.d.$2(w,v)}},
$S(){return B.q(this.b).i("aQ(oh.T)")}}
A.aet.prototype={
$0(){var w=this.a.a
w.toString
return w},
$S:z+9}
A.aeu.prototype={
$0(){return A.aXe($.rj.gawS().$1(this.a.a),"MemoryImage("+("<optimized out>#"+B.ca(this.b.a))+")",1)},
$S:z+9}
A.aez.prototype={
$1(d){return d.c},
$S:z+20}
A.ah5.prototype={
$2(d,e){this.a.FB(B.c1("resolving an image codec"),d,this.b,!0,e)},
$S:33}
A.ah4.prototype={
$0(){this.a.YB()},
$S:0}
A.akw.prototype={
$1(d){},
$S:68}
A.akx.prototype={
$1(d){},
$S:4}
A.KY.prototype={
$2(d,e){return d.toLowerCase()===e.toLowerCase()},
$S:163}
A.KZ.prototype={
$1(d){return D.c.gD(d.toLowerCase())},
$S:164}
A.a7D.prototype={
$1(d){var w,v,u,t=this.a,s=B.bP(x.R.a(B.aPn(t.response)),0,null),r=A.aDn(s,x.L),q=t.status
q.toString
w=s.length
v=this.c
u=D.oV.gaAu(t)
t=t.statusText
r=new A.rU(A.b5i(new A.nM(r)),v,q,t,w,u,!1,!0)
r.RN(q,w,u,!1,!0,t,v)
this.b.dO(0,r)},
$S:69}
A.a7E.prototype={
$1(d){this.a.p0(new A.M5("XMLHttpRequest error."),B.Xl())},
$S:69}
A.a7K.prototype={
$1(d){return this.a.dO(0,new Uint8Array(B.eS(d)))},
$S:68}
A.a7x.prototype={
$1(d){var w=this.c===3?100:null
return this.a.Jr(this.b,w)},
$S:19}
A.a7w.prototype={
$1(d){return this.b.a97(this.a.a++,this.c,d)},
$S:23}
A.abj.prototype={
$1(d){var w,v,u,t,s=this.b,r=s.fr,q=this.a,p=q.b
r=r[p]
w=s.fx
v=q.a
w=w[v]
u=new Uint32Array(r*w)
t=p+1
q.b=t
if(t===s.fy){q.b=0
q.a=v+1}return u},
$S:166}
A.ae9.prototype={
$1(d){var w,v=this.a
v.aP()
w=v.aP()
v.aP();++v.d
v.T()
v.T()
return new A.vv(w,v.K(),v.K())},
$S:z+23}
A.af8.prototype={
$1(d){var w,v,u,t,s=this.b,r=s.aP(),q=s.aP()
s=this.a
if(!s.d.y.am(0,r))throw B.c(A.ah("Invalid Component in SOS block"))
w=s.d.y.h(0,r)
w.toString
v=D.b.B(q,4)&15
u=q&15
t=s.z
if(v<t.length){t=t[v]
t.toString
w.w=t}s=s.y
if(u<s.length){s=s[u]
s.toString
w.x=s}return w},
$S:z+24}
A.aiu.prototype={
$1(d){return d},
$S:19}
A.aqJ.prototype={
$2(d,e){return(d|e<<16)>>>0},
$S:48}
A.azg.prototype={
$2(d,e){return Math.log(d*e+1)/e},
$S:70}
A.azf.prototype={
$2(d,e){var w=Math.max(0,d*e)
if(w>1)w=1+this.a.$2(w-1,0.184874)
return Math.pow(w,0.4545)*84.66},
$S:70};(function aliases(){var w=A.qN.prototype
w.aaU=w.az
w.aaV=w.a8
w.aaT=w.A6
w=A.KX.prototype
w.GV=w.Dq})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1i,u=a._instance_0i,t=a._instance_1u,s=a._instance_2u,r=a._static_1,q=a._static_2,p=a.installStaticTearOff
w(A.yq.prototype,"gaq7","oO",2)
var o
v(o=A.Zw.prototype,"gne","H",6)
u(o,"gr0","d1",2)
w(o=A.Fv.prototype,"ganb","anc",2)
w(o,"gand","ane",2)
w(o,"gani","anj",2)
t(o,"gan0","an1",6)
s(o,"gan4","an5",13)
w(o,"gan2","an3",2)
r(A,"b2W","b1L",25)
u(o=A.Ac.prototype,"gkT","aS",8)
t(o,"gmu","fC",17)
u(o,"ghu","e8",8)
s(A.Ox.prototype,"gWO","ajN",19)
v(A.qN.prototype,"ga_Q","az",10)
t(o=A.TM.prototype,"gajd","aje",21)
t(o,"gaj1","aj2",22)
v(o,"ga_Q","az",10)
t(o=A.Eo.prototype,"gbA","bH",3)
t(o,"gbE","bv",3)
t(o,"gbT","bz",3)
t(o,"gcs","bG",3)
r(A,"baW","aPu",26)
q(A,"baX","aPv",27)
r(A,"baV","aPs",28)
s(o=A.Re.prototype,"gagC","agD",4)
s(o,"gagF","agG",4)
s(o,"gagH","agI",11)
s(o,"gagx","agy",4)
s(o,"gagz","agA",11)
r(A,"b5P","aZP",0)
r(A,"b5G","aZG",0)
r(A,"b5z","aZz",0)
r(A,"b5M","aZM",0)
r(A,"b5N","aZN",0)
r(A,"b5L","aZL",0)
r(A,"b5K","aZK",0)
r(A,"b5J","aZJ",0)
r(A,"b5S","aZS",0)
r(A,"b5R","aZR",0)
r(A,"b5I","aZI",0)
r(A,"b5E","aZE",0)
r(A,"b5O","aZO",0)
r(A,"b5F","aZF",0)
r(A,"b5v","aZv",0)
r(A,"b5x","aZx",0)
r(A,"b5w","aZw",0)
r(A,"b5y","aZy",0)
r(A,"b5Q","aZQ",0)
r(A,"b5H","aZH",0)
r(A,"b5A","aZA",0)
r(A,"b5B","aZB",0)
r(A,"b5C","aZC",0)
r(A,"b5D","aZD",0)
t(A.Gi.prototype,"gaow","aox",12)
t(A.R2.prototype,"gavo","avp",12)
p(A,"aFg",3,null,["$3"],["aZU"],1,0)
p(A,"b5T",3,null,["$3"],["aZV"],1,0)
p(A,"b5Y",3,null,["$3"],["b__"],1,0)
p(A,"b5Z",3,null,["$3"],["b_0"],1,0)
p(A,"b6_",3,null,["$3"],["b_1"],1,0)
p(A,"b60",3,null,["$3"],["b_2"],1,0)
p(A,"b61",3,null,["$3"],["b_3"],1,0)
p(A,"b62",3,null,["$3"],["b_4"],1,0)
p(A,"b63",3,null,["$3"],["b_5"],1,0)
p(A,"b64",3,null,["$3"],["b_6"],1,0)
p(A,"b5U",3,null,["$3"],["aZW"],1,0)
p(A,"b5V",3,null,["$3"],["aZX"],1,0)
p(A,"b5W",3,null,["$3"],["aZY"],1,0)
p(A,"b5X",3,null,["$3"],["aZZ"],1,0)
p(A,"b66",6,null,["$6"],["b_e"],5,0)
p(A,"b67",6,null,["$6"],["b_f"],5,0)
p(A,"b65",6,null,["$6"],["b_d"],5,0)})();(function inheritance(){var w=a.mixin,v=a.inheritMany,u=a.inherit
v(B.dJ,[A.Fw,A.H0])
v(B.r,[A.yq,A.aeQ,A.ahN,A.aqZ,A.adY,A.QR,A.aqY,A.Qe,A.BB,A.y4,A.Fv,A.a7m,A.L8,A.L9,A.fM,A.Ow,A.Ox,A.oh,A.a0d,A.jV,A.a0e,A.aey,A.a7f,A.KX,A.q1,A.M5,A.BE,A.a7k,A.a9c,A.a9e,A.aaF,A.Pp,A.abf,A.Pq,A.Pr,A.abi,A.a1t,A.acL,A.BZ,A.vv,A.Mj,A.af6,A.kW,A.af7,A.yN,A.Rd,A.afa,A.Re,A.E3,A.lc,A.wC,A.aiX,A.wB,A.Vk,A.Vn,A.apO,A.Y6,A.apQ,A.Y7,A.agh,A.aqw,A.Gh,A.aqx,A.aqC,A.aqG,A.aqI,A.Gg,A.aqH,A.aqy,A.td,A.YA,A.YC,A.YB,A.YD,A.Gi,A.Yy,A.aqD,A.Yz,A.aqR,A.Gm,A.QC,A.C0,A.Qu,A.C4,A.QK,A.QM,A.hl,A.ahL])
u(A.Zw,V.Ln)
u(A.H9,B.aP)
u(A.KD,B.id)
u(A.aeP,A.aeQ)
u(A.ahM,A.ahN)
u(A.axv,A.aqZ)
v(B.bN,[A.acl,A.aoD,A.a7n,A.a7o,A.a7q,A.a7r,A.a7t,A.aew,A.aer,A.aez,A.akw,A.akx,A.KZ,A.a7D,A.a7E,A.a7K,A.a7x,A.a7w,A.abj,A.ae9,A.af8,A.aiu])
v(B.fL,[A.acm,A.a7s,A.a7u,A.aev,A.aes,A.ah5,A.KY,A.aqJ,A.azg,A.azf])
v(B.eg,[A.aoE,A.a7p,A.a7v,A.aet,A.aeu,A.ah4])
v(F.ar,[A.uo,A.L7])
v(B.h1,[A.nL,A.q5,A.qM,A.un,A.Q2,A.As])
u(A.Ac,W.ey)
u(A.l_,A.oh)
u(A.qN,A.a0d)
v(A.qN,[A.asZ,A.TM])
u(A.aex,A.a0e)
u(A.Eo,F.lg)
u(A.A7,F.bi)
v(A.a7f,[A.akv,A.a7C])
u(A.nM,A.Fw)
v(A.KX,[A.akk,A.aoJ])
v(A.q1,[A.ry,A.rU])
v(A.a9c,[A.q6,A.abh,A.Qk,A.ae8,A.aiv,A.aiZ,A.apI,A.apR,A.YN])
v(A.a9e,[A.Lb,A.abg,A.acM,A.ae7,A.Rc,A.V0,A.aiY,A.apH,A.apP,A.aqS])
u(A.a9o,A.Lb)
u(A.aeS,A.abf)
v(A.aeS,[A.QX,A.aeT,A.aeU,A.aeV,A.QZ])
u(A.QY,A.abi)
u(A.R_,A.BZ)
u(A.ae6,A.q6)
u(A.af9,A.aaF)
u(A.R0,A.E3)
u(A.R1,A.aiv)
v(A.lc,[A.Vi,A.Vj,A.Vl,A.Vm,A.Vp,A.Vq])
v(A.wC,[A.Eb,A.Vo])
u(A.R2,A.Gi)
u(A.R3,A.Gm)
u(A.R4,A.YN)
w(A.a0e,B.az)
w(A.a0d,B.az)})()
B.cT(b.typeUniverse,JSON.parse('{"Fw":{"dJ":["1"]},"yq":{"ls":["1"]},"H0":{"dJ":["1"],"dJ.T":"1"},"H9":{"aP":["1"],"Z":["1"],"p":["1"],"p.E":"1","aP.E":"1"},"KD":{"id":[],"bK":[]},"BB":{"aku":["0&"]},"y4":{"aku":["1"]},"L8":{"bK":[]},"L9":{"bK":[]},"uo":{"ar":[],"j":[]},"L7":{"ar":[],"j":[]},"nL":{"O":[]},"q5":{"O":[]},"Ac":{"aH":[]},"qM":{"O":[]},"l_":{"oh":["l_"],"oh.T":"l_"},"Eo":{"G":[],"b7":["G"],"z":[],"T":[],"ap":[]},"A7":{"bi":[],"aJ":[],"j":[]},"nM":{"dJ":["u<k>"],"dJ.T":"u<k>"},"M5":{"bK":[]},"ry":{"q1":[]},"rU":{"q1":[]},"un":{"O":[]},"R_":{"BZ":[]},"R0":{"E3":[]},"Vi":{"lc":[]},"Vj":{"lc":[]},"Vl":{"lc":[]},"Vm":{"lc":[]},"Vp":{"lc":[]},"Vq":{"lc":[]},"Eb":{"wC":[]},"Vo":{"wC":[]},"R3":{"Gm":[]},"Q2":{"O":[]},"As":{"O":[]},"QM":{"bK":[]}}'))
B.js(b.typeUniverse,JSON.parse('{"Fw":1}'))
var y={c:"EOF reached without finding string terminator",a:"Stream has been disposed.\nAn ImageStream is considered disposed once at least one listener has been added and subsequently all listeners have been removed and no handles are outstanding from the keepAlive method.\nTo resolve this error, maintain at least one listener on the stream, or create an ImageStreamCompleterHandle from the keepAlive method, or create a new stream for the image."}
var x=(function rtii(){var w=B.w
return{C:w("fJ"),A:w("un"),x:w("nL"),h:w("aM"),R:w("qc"),M:w("fM"),m:w("cK"),U:w("Pp"),W:w("Pr"),d:w("Qe<@>"),f:w("C0"),r:w("C4"),Y:w("kU"),bs:w("QC"),gx:w("vv"),cE:w("iY"),k:w("Ck"),hf:w("p<@>"),eB:w("i<Mj>"),g9:w("i<Pq>"),b:w("i<BZ>"),F:w("i<C0>"),v:w("i<iY>"),V:w("i<QY>"),g:w("i<u<u<u<k>>>>"),o:w("i<u<u<k>>>"),S:w("i<u<k>>"),dm:w("i<E3>"),X:w("i<wB>"),af:w("i<lc>"),l:w("i<Vn>"),ce:w("i<C>"),O:w("i<aku<u<k>>>"),s:w("i<l>"),aU:w("i<Y7>"),a:w("i<ff>"),ao:w("i<td>"),G:w("i<Yz>"),J:w("i<Gm>"),E:w("i<j>"),e8:w("i<yN>"),t:w("i<k>"),f8:w("i<Rd?>"),fk:w("i<u<@>?>"),ca:w("i<u<k>?>"),w:w("i<lw?>"),u:w("i<~()>"),y:w("i<~(hl)>"),c:w("kW"),i:w("u<fM>"),f0:w("u<Ck>"),c7:w("u<Gg>"),K:w("u<td>"),j:w("u<@>"),L:w("u<k>"),P:w("aQ"),ez:w("r"),e:w("wB"),fh:w("Vk"),g0:w("Eb"),ha:w("wC"),q:w("ry"),er:w("Xo<u<k>>"),cB:w("Fv<u<k>>"),n:w("rU"),N:w("l"),gP:w("d8<l_>"),cV:w("Y6"),Q:w("dk"),bv:w("lw"),D:w("ff"),dd:w("Gg"),ai:w("YA"),cP:w("YB"),dE:w("YD"),fm:w("eO<~(r,cv?)>"),gy:w("j"),gf:w("bc<u<@>>"),eP:w("bc<rU>"),Z:w("bc<ff>"),hg:w("pt<is>"),_:w("an<u<@>>"),ci:w("an<rU>"),fg:w("an<ff>"),aX:w("a1t"),gV:w("kx"),z:w("@"),p:w("k"),bC:w("aeR?"),eg:w("u<k>?"),T:w("l?"),aD:w("ff?"),eW:w("Gh?"),B:w("td?"),dP:w("YC?"),I:w("k?"),H:w("~")}})();(function constants(){var w=a.makeConstList
C.jU=new A.un(0,"BI_BITFIELDS")
C.jV=new A.un(1,"NONE")
C.h2=new A.q5(0,"unknown")
C.nm=new A.q5(2,"decodeFromBase64String")
C.Jd=new A.q5(3,"decodeFromUrl")
C.Je=new A.q5(4,"decodeFromBlurHash")
C.eG=new A.nL(0,"encode")
C.nn=new A.nL(1,"decode")
C.KN=new A.H0(B.w("H0<u<k>>"))
C.JW=new A.nM(C.KN)
C.ash=new A.aqY()
C.eL=new A.axv()
C.k9=new A.As(0,"rgb")
C.br=new A.As(1,"rgba")
C.hr=new A.Q2(2,"rgba")
C.Qt=new A.qM(0,"repeat")
C.Qu=new A.qM(1,"repeatX")
C.Qv=new A.qM(2,"repeatY")
C.dS=new A.qM(3,"noRepeat")
C.pw=B.a(w([A.b5A(),A.b5N(),A.b5Q(),A.b5H(),A.b5C(),A.b5B(),A.b5D()]),x.y)
C.l_=B.a(w([0,2,8]),x.t)
C.Sa=B.a(w([0,4,2,1]),x.t)
C.pA=B.a(w([292,260,226,226]),x.t)
C.pB=B.a(w([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]),x.t)
C.pH=B.a(w([137,80,78,71,13,10,26,10]),x.t)
C.SD=B.a(w([2,3,7]),x.t)
C.T1=B.a(w([3,3,11]),x.t)
C.TE=B.a(w([511,1023,2047,4095]),x.t)
C.Z8=B.a(w([231,120,48,89,115,113,120,152,112]),x.t)
C.a5o=B.a(w([152,179,64,126,170,118,46,70,95]),x.t)
C.a5p=B.a(w([175,69,143,80,85,82,72,155,103]),x.t)
C.a5A=B.a(w([56,58,10,171,218,189,17,13,152]),x.t)
C.a5L=B.a(w([114,26,17,163,44,195,21,10,173]),x.t)
C.a5W=B.a(w([121,24,80,195,26,62,44,64,85]),x.t)
C.a66=B.a(w([144,71,10,38,171,213,144,34,26]),x.t)
C.a6h=B.a(w([170,46,55,19,136,160,33,206,71]),x.t)
C.a6s=B.a(w([63,20,8,114,114,208,12,9,226]),x.t)
C.a6D=B.a(w([81,40,11,96,182,84,29,16,36]),x.t)
C.a43=B.a(w([C.Z8,C.a5o,C.a5p,C.a5A,C.a5L,C.a5W,C.a66,C.a6h,C.a6s,C.a6D]),x.S)
C.a6G=B.a(w([134,183,89,137,98,101,106,165,148]),x.t)
C.a5q=B.a(w([72,187,100,130,157,111,32,75,80]),x.t)
C.a5r=B.a(w([66,102,167,99,74,62,40,234,128]),x.t)
C.a25=B.a(w([41,53,9,178,241,141,26,8,107]),x.t)
C.a5s=B.a(w([74,43,26,146,73,166,49,23,157]),x.t)
C.a5t=B.a(w([65,38,105,160,51,52,31,115,128]),x.t)
C.a0o=B.a(w([104,79,12,27,217,255,87,17,7]),x.t)
C.a5u=B.a(w([87,68,71,44,114,51,15,186,23]),x.t)
C.a5v=B.a(w([47,41,14,110,182,183,21,17,194]),x.t)
C.a5w=B.a(w([66,45,25,102,197,189,23,18,22]),x.t)
C.WY=B.a(w([C.a6G,C.a5q,C.a5r,C.a25,C.a5s,C.a5t,C.a0o,C.a5u,C.a5v,C.a5w]),x.S)
C.a5x=B.a(w([88,88,147,150,42,46,45,196,205]),x.t)
C.a5y=B.a(w([43,97,183,117,85,38,35,179,61]),x.t)
C.a5z=B.a(w([39,53,200,87,26,21,43,232,171]),x.t)
C.a5B=B.a(w([56,34,51,104,114,102,29,93,77]),x.t)
C.a5C=B.a(w([39,28,85,171,58,165,90,98,64]),x.t)
C.a5D=B.a(w([34,22,116,206,23,34,43,166,73]),x.t)
C.a5E=B.a(w([107,54,32,26,51,1,81,43,31]),x.t)
C.a5F=B.a(w([68,25,106,22,64,171,36,225,114]),x.t)
C.a5G=B.a(w([34,19,21,102,132,188,16,76,124]),x.t)
C.a5H=B.a(w([62,18,78,95,85,57,50,48,51]),x.t)
C.VA=B.a(w([C.a5x,C.a5y,C.a5z,C.a5B,C.a5C,C.a5D,C.a5E,C.a5F,C.a5G,C.a5H]),x.S)
C.a5I=B.a(w([193,101,35,159,215,111,89,46,111]),x.t)
C.a5J=B.a(w([60,148,31,172,219,228,21,18,111]),x.t)
C.a0p=B.a(w([112,113,77,85,179,255,38,120,114]),x.t)
C.a26=B.a(w([40,42,1,196,245,209,10,25,109]),x.t)
C.a5K=B.a(w([88,43,29,140,166,213,37,43,154]),x.t)
C.a5M=B.a(w([61,63,30,155,67,45,68,1,209]),x.t)
C.a5N=B.a(w([100,80,8,43,154,1,51,26,71]),x.t)
C.a27=B.a(w([142,78,78,16,255,128,34,197,171]),x.t)
C.a5O=B.a(w([41,40,5,102,211,183,4,1,221]),x.t)
C.a5P=B.a(w([51,50,17,168,209,192,23,25,82]),x.t)
C.WH=B.a(w([C.a5I,C.a5J,C.a0p,C.a26,C.a5K,C.a5M,C.a5N,C.a27,C.a5O,C.a5P]),x.S)
C.a2a=B.a(w([138,31,36,171,27,166,38,44,229]),x.t)
C.a5Q=B.a(w([67,87,58,169,82,115,26,59,179]),x.t)
C.a5R=B.a(w([63,59,90,180,59,166,93,73,154]),x.t)
C.a5S=B.a(w([40,40,21,116,143,209,34,39,175]),x.t)
C.a5T=B.a(w([47,15,16,183,34,223,49,45,183]),x.t)
C.a5U=B.a(w([46,17,33,183,6,98,15,32,183]),x.t)
C.a5V=B.a(w([57,46,22,24,128,1,54,17,37]),x.t)
C.a5X=B.a(w([65,32,73,115,28,128,23,128,205]),x.t)
C.a5Y=B.a(w([40,3,9,115,51,192,18,6,223]),x.t)
C.a5Z=B.a(w([87,37,9,115,59,77,64,21,47]),x.t)
C.a4u=B.a(w([C.a2a,C.a5Q,C.a5R,C.a5S,C.a5T,C.a5U,C.a5V,C.a5X,C.a5Y,C.a5Z]),x.S)
C.a6_=B.a(w([104,55,44,218,9,54,53,130,226]),x.t)
C.a60=B.a(w([64,90,70,205,40,41,23,26,57]),x.t)
C.a61=B.a(w([54,57,112,184,5,41,38,166,213]),x.t)
C.a62=B.a(w([30,34,26,133,152,116,10,32,134]),x.t)
C.a2b=B.a(w([39,19,53,221,26,114,32,73,255]),x.t)
C.a63=B.a(w([31,9,65,234,2,15,1,118,73]),x.t)
C.a0q=B.a(w([75,32,12,51,192,255,160,43,51]),x.t)
C.a64=B.a(w([88,31,35,67,102,85,55,186,85]),x.t)
C.a65=B.a(w([56,21,23,111,59,205,45,37,192]),x.t)
C.a67=B.a(w([55,38,70,124,73,102,1,34,98]),x.t)
C.S_=B.a(w([C.a6_,C.a60,C.a61,C.a62,C.a2b,C.a63,C.a0q,C.a64,C.a65,C.a67]),x.S)
C.a68=B.a(w([125,98,42,88,104,85,117,175,82]),x.t)
C.a69=B.a(w([95,84,53,89,128,100,113,101,45]),x.t)
C.a6a=B.a(w([75,79,123,47,51,128,81,171,1]),x.t)
C.a6b=B.a(w([57,17,5,71,102,57,53,41,49]),x.t)
C.a6c=B.a(w([38,33,13,121,57,73,26,1,85]),x.t)
C.a6d=B.a(w([41,10,67,138,77,110,90,47,114]),x.t)
C.a0r=B.a(w([115,21,2,10,102,255,166,23,6]),x.t)
C.a6e=B.a(w([101,29,16,10,85,128,101,196,26]),x.t)
C.a6f=B.a(w([57,18,10,102,102,213,34,20,43]),x.t)
C.a6g=B.a(w([117,20,15,36,163,128,68,1,26]),x.t)
C.a_h=B.a(w([C.a68,C.a69,C.a6a,C.a6b,C.a6c,C.a6d,C.a0r,C.a6e,C.a6f,C.a6g]),x.S)
C.a1t=B.a(w([102,61,71,37,34,53,31,243,192]),x.t)
C.a6i=B.a(w([69,60,71,38,73,119,28,222,37]),x.t)
C.a1u=B.a(w([68,45,128,34,1,47,11,245,171]),x.t)
C.a6j=B.a(w([62,17,19,70,146,85,55,62,70]),x.t)
C.a6k=B.a(w([37,43,37,154,100,163,85,160,1]),x.t)
C.a6l=B.a(w([63,9,92,136,28,64,32,201,85]),x.t)
C.a0s=B.a(w([75,15,9,9,64,255,184,119,16]),x.t)
C.a0t=B.a(w([86,6,28,5,64,255,25,248,1]),x.t)
C.a0u=B.a(w([56,8,17,132,137,255,55,116,128]),x.t)
C.a6m=B.a(w([58,15,20,82,135,57,26,121,40]),x.t)
C.U7=B.a(w([C.a1t,C.a6i,C.a1u,C.a6j,C.a6k,C.a6l,C.a0s,C.a0t,C.a0u,C.a6m]),x.S)
C.a6n=B.a(w([164,50,31,137,154,133,25,35,218]),x.t)
C.a6o=B.a(w([51,103,44,131,131,123,31,6,158]),x.t)
C.a6p=B.a(w([86,40,64,135,148,224,45,183,128]),x.t)
C.a6q=B.a(w([22,26,17,131,240,154,14,1,209]),x.t)
C.a6r=B.a(w([45,16,21,91,64,222,7,1,197]),x.t)
C.a6t=B.a(w([56,21,39,155,60,138,23,102,213]),x.t)
C.a0v=B.a(w([83,12,13,54,192,255,68,47,28]),x.t)
C.a6u=B.a(w([85,26,85,85,128,128,32,146,171]),x.t)
C.a6v=B.a(w([18,11,7,63,144,171,4,4,246]),x.t)
C.a6w=B.a(w([35,27,10,146,174,171,12,26,128]),x.t)
C.a_i=B.a(w([C.a6n,C.a6o,C.a6p,C.a6q,C.a6r,C.a6t,C.a0v,C.a6u,C.a6v,C.a6w]),x.S)
C.a6x=B.a(w([190,80,35,99,180,80,126,54,45]),x.t)
C.a6y=B.a(w([85,126,47,87,176,51,41,20,32]),x.t)
C.a6z=B.a(w([101,75,128,139,118,146,116,128,85]),x.t)
C.a6A=B.a(w([56,41,15,176,236,85,37,9,62]),x.t)
C.a0w=B.a(w([71,30,17,119,118,255,17,18,138]),x.t)
C.a6B=B.a(w([101,38,60,138,55,70,43,26,142]),x.t)
C.a0x=B.a(w([146,36,19,30,171,255,97,27,20]),x.t)
C.a6C=B.a(w([138,45,61,62,219,1,81,188,64]),x.t)
C.a6E=B.a(w([32,41,20,117,151,142,20,21,163]),x.t)
C.a6F=B.a(w([112,19,12,61,195,128,48,4,24]),x.t)
C.Yw=B.a(w([C.a6x,C.a6y,C.a6z,C.a6A,C.a0w,C.a6B,C.a0x,C.a6C,C.a6E,C.a6F]),x.S)
C.Uf=B.a(w([C.a43,C.WY,C.VA,C.WH,C.a4u,C.S_,C.a_h,C.U7,C.a_i,C.Yw]),x.o)
C.qp=B.a(w([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68]),x.t)
C.Uo=B.a(w([8,8,4,2]),x.t)
C.Up=B.a(w([A.b5v(),A.b5L(),A.b5O(),A.b5F(),A.b5x(),A.b5w(),A.b5y()]),x.y)
C.l2=B.a(w([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157]),x.t)
C.qu=B.a(w([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]),x.t)
C.qt=B.a(w([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41]),x.t)
C.qI=B.a(w([0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250]),x.t)
C.UM=B.a(w([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112]),x.t)
C.i_=B.a(w([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63]),x.t)
C.l3=B.a(w([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284]),x.t)
C.ci=B.a(w([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]),x.t)
C.l4=B.a(w([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295]),x.t)
C.rc=B.a(w([0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0]),x.t)
C.rf=B.a(w([0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119]),x.t)
C.rd=B.a(w([0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125]),x.t)
C.re=B.a(w([0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0]),x.t)
C.rb=B.a(w([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0]),x.t)
C.rj=B.a(w([1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250]),x.t)
C.Wf=B.a(w([null,A.b66(),A.b67(),A.b65()]),B.w("i<~(k,k,k,k,k,ff)?>"))
C.rO=B.a(w([1,1.387039845,1.306562965,1.175875602,1,0.785694958,0.5411961,0.275899379]),B.w("i<K>"))
C.ic=B.a(w([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567]),x.t)
C.bu=B.a(w([255,255,255,255,255,255,255,255,255,255,255]),x.t)
C.dW=B.a(w([C.bu,C.bu,C.bu]),x.S)
C.a2K=B.a(w([176,246,255,255,255,255,255,255,255,255,255]),x.t)
C.Zc=B.a(w([223,241,252,255,255,255,255,255,255,255,255]),x.t)
C.a3i=B.a(w([249,253,253,255,255,255,255,255,255,255,255]),x.t)
C.VU=B.a(w([C.a2K,C.Zc,C.a3i]),x.S)
C.a2z=B.a(w([255,244,252,255,255,255,255,255,255,255,255]),x.t)
C.a3X=B.a(w([234,254,254,255,255,255,255,255,255,255,255]),x.t)
C.vQ=B.a(w([253,255,255,255,255,255,255,255,255,255,255]),x.t)
C.a0Y=B.a(w([C.a2z,C.a3X,C.vQ]),x.S)
C.a2A=B.a(w([255,246,254,255,255,255,255,255,255,255,255]),x.t)
C.a4B=B.a(w([239,253,254,255,255,255,255,255,255,255,255]),x.t)
C.tF=B.a(w([254,255,254,255,255,255,255,255,255,255,255]),x.t)
C.Ya=B.a(w([C.a2A,C.a4B,C.tF]),x.S)
C.vr=B.a(w([255,248,254,255,255,255,255,255,255,255,255]),x.t)
C.a4C=B.a(w([251,255,254,255,255,255,255,255,255,255,255]),x.t)
C.a6I=B.a(w([C.vr,C.a4C,C.bu]),x.S)
C.ll=B.a(w([255,253,254,255,255,255,255,255,255,255,255]),x.t)
C.a2B=B.a(w([251,254,254,255,255,255,255,255,255,255,255]),x.t)
C.UU=B.a(w([C.ll,C.a2B,C.tF]),x.S)
C.a0E=B.a(w([255,254,253,255,254,255,255,255,255,255,255]),x.t)
C.a4r=B.a(w([250,255,254,255,254,255,255,255,255,255,255]),x.t)
C.ig=B.a(w([254,255,255,255,255,255,255,255,255,255,255]),x.t)
C.T5=B.a(w([C.a0E,C.a4r,C.ig]),x.S)
C.a4p=B.a(w([C.dW,C.VU,C.a0Y,C.Ya,C.a6I,C.UU,C.T5,C.dW]),x.o)
C.XA=B.a(w([217,255,255,255,255,255,255,255,255,255,255]),x.t)
C.a2l=B.a(w([225,252,241,253,255,255,254,255,255,255,255]),x.t)
C.a4n=B.a(w([234,250,241,250,253,255,253,254,255,255,255]),x.t)
C.VV=B.a(w([C.XA,C.a2l,C.a4n]),x.S)
C.l6=B.a(w([255,254,255,255,255,255,255,255,255,255,255]),x.t)
C.a3Y=B.a(w([223,254,254,255,255,255,255,255,255,255,255]),x.t)
C.S0=B.a(w([238,253,254,254,255,255,255,255,255,255,255]),x.t)
C.Z5=B.a(w([C.l6,C.a3Y,C.S0]),x.S)
C.Wb=B.a(w([249,254,255,255,255,255,255,255,255,255,255]),x.t)
C.a4v=B.a(w([C.vr,C.Wb,C.bu]),x.S)
C.a3j=B.a(w([255,253,255,255,255,255,255,255,255,255,255]),x.t)
C.Wc=B.a(w([247,254,255,255,255,255,255,255,255,255,255]),x.t)
C.Wj=B.a(w([C.a3j,C.Wc,C.bu]),x.S)
C.XB=B.a(w([252,255,255,255,255,255,255,255,255,255,255]),x.t)
C.a3t=B.a(w([C.ll,C.XB,C.bu]),x.S)
C.vs=B.a(w([255,254,254,255,255,255,255,255,255,255,255]),x.t)
C.a2Z=B.a(w([C.vs,C.vQ,C.bu]),x.S)
C.Wd=B.a(w([255,254,253,255,255,255,255,255,255,255,255]),x.t)
C.t7=B.a(w([250,255,255,255,255,255,255,255,255,255,255]),x.t)
C.Sm=B.a(w([C.Wd,C.t7,C.ig]),x.S)
C.Vl=B.a(w([C.VV,C.Z5,C.a4v,C.Wj,C.a3t,C.a2Z,C.Sm,C.dW]),x.o)
C.Zd=B.a(w([186,251,250,255,255,255,255,255,255,255,255]),x.t)
C.S2=B.a(w([234,251,244,254,255,255,255,255,255,255,255]),x.t)
C.WD=B.a(w([251,251,243,253,254,255,254,255,255,255,255]),x.t)
C.a4m=B.a(w([C.Zd,C.S2,C.WD]),x.S)
C.Ze=B.a(w([236,253,254,255,255,255,255,255,255,255,255]),x.t)
C.Uy=B.a(w([251,253,253,254,254,255,255,255,255,255,255]),x.t)
C.a0y=B.a(w([C.ll,C.Ze,C.Uy]),x.S)
C.a3Z=B.a(w([254,254,254,255,255,255,255,255,255,255,255]),x.t)
C.a0Z=B.a(w([C.vs,C.a3Z,C.bu]),x.S)
C.a2L=B.a(w([254,254,255,255,255,255,255,255,255,255,255]),x.t)
C.Yj=B.a(w([C.l6,C.a2L,C.ig]),x.S)
C.wD=B.a(w([C.bu,C.ig,C.bu]),x.S)
C.Yn=B.a(w([C.a4m,C.a0y,C.a0Z,C.Yj,C.wD,C.dW,C.dW,C.dW]),x.o)
C.XC=B.a(w([248,255,255,255,255,255,255,255,255,255,255]),x.t)
C.UT=B.a(w([250,254,252,254,255,255,255,255,255,255,255]),x.t)
C.a2M=B.a(w([248,254,249,253,255,255,255,255,255,255,255]),x.t)
C.a1n=B.a(w([C.XC,C.UT,C.a2M]),x.S)
C.a3k=B.a(w([255,253,253,255,255,255,255,255,255,255,255]),x.t)
C.XD=B.a(w([246,253,253,255,255,255,255,255,255,255,255]),x.t)
C.S3=B.a(w([252,254,251,254,254,255,255,255,255,255,255]),x.t)
C.S4=B.a(w([C.a3k,C.XD,C.S3]),x.S)
C.a2C=B.a(w([255,254,252,255,255,255,255,255,255,255,255]),x.t)
C.a2N=B.a(w([248,254,253,255,255,255,255,255,255,255,255]),x.t)
C.a2r=B.a(w([253,255,254,254,255,255,255,255,255,255,255]),x.t)
C.V1=B.a(w([C.a2C,C.a2N,C.a2r]),x.S)
C.a4D=B.a(w([255,251,254,255,255,255,255,255,255,255,255]),x.t)
C.a4E=B.a(w([245,251,254,255,255,255,255,255,255,255,255]),x.t)
C.a4F=B.a(w([253,253,254,255,255,255,255,255,255,255,255]),x.t)
C.a46=B.a(w([C.a4D,C.a4E,C.a4F]),x.S)
C.a3l=B.a(w([255,251,253,255,255,255,255,255,255,255,255]),x.t)
C.Zf=B.a(w([252,253,254,255,255,255,255,255,255,255,255]),x.t)
C.a4e=B.a(w([C.a3l,C.Zf,C.l6]),x.S)
C.We=B.a(w([255,252,255,255,255,255,255,255,255,255,255]),x.t)
C.a4G=B.a(w([249,255,254,255,255,255,255,255,255,255,255]),x.t)
C.a4H=B.a(w([255,255,254,255,255,255,255,255,255,255,255]),x.t)
C.To=B.a(w([C.We,C.a4G,C.a4H]),x.S)
C.a3m=B.a(w([255,255,253,255,255,255,255,255,255,255,255]),x.t)
C.a6R=B.a(w([C.a3m,C.t7,C.bu]),x.S)
C.Uh=B.a(w([C.a1n,C.S4,C.V1,C.a46,C.a4e,C.To,C.a6R,C.wD]),x.o)
C.Xj=B.a(w([C.a4p,C.Vl,C.Yn,C.Uh]),x.g)
C.Yr=B.a(w([0,1,3,7,15,31,63,127,255,511,1023,2047,4095]),x.t)
C.l1=B.a(w([128,128,128,128,128,128,128,128,128,128,128]),x.t)
C.v1=B.a(w([C.l1,C.l1,C.l1]),x.S)
C.a03=B.a(w([253,136,254,255,228,219,128,128,128,128,128]),x.t)
C.a_A=B.a(w([189,129,242,255,227,213,255,219,128,128,128]),x.t)
C.a59=B.a(w([106,126,227,252,214,209,255,255,128,128,128]),x.t)
C.a57=B.a(w([C.a03,C.a_A,C.a59]),x.S)
C.Ws=B.a(w([1,98,248,255,236,226,255,255,128,128,128]),x.t)
C.a0f=B.a(w([181,133,238,254,221,234,255,154,128,128,128]),x.t)
C.a_B=B.a(w([78,134,202,247,198,180,255,219,128,128,128]),x.t)
C.a1I=B.a(w([C.Ws,C.a0f,C.a_B]),x.S)
C.Xm=B.a(w([1,185,249,255,243,255,128,128,128,128,128]),x.t)
C.a1K=B.a(w([184,150,247,255,236,224,128,128,128,128,128]),x.t)
C.VO=B.a(w([77,110,216,255,236,230,128,128,128,128,128]),x.t)
C.ZB=B.a(w([C.Xm,C.a1K,C.VO]),x.S)
C.Xn=B.a(w([1,101,251,255,241,255,128,128,128,128,128]),x.t)
C.a4I=B.a(w([170,139,241,252,236,209,255,255,128,128,128]),x.t)
C.ZV=B.a(w([37,116,196,243,228,255,255,255,128,128,128]),x.t)
C.Wg=B.a(w([C.Xn,C.a4I,C.ZV]),x.S)
C.Sk=B.a(w([1,204,254,255,245,255,128,128,128,128,128]),x.t)
C.VP=B.a(w([207,160,250,255,238,128,128,128,128,128,128]),x.t)
C.a1L=B.a(w([102,103,231,255,211,171,128,128,128,128,128]),x.t)
C.Tz=B.a(w([C.Sk,C.VP,C.a1L]),x.S)
C.a4h=B.a(w([1,152,252,255,240,255,128,128,128,128,128]),x.t)
C.a1M=B.a(w([177,135,243,255,234,225,128,128,128,128,128]),x.t)
C.VQ=B.a(w([80,129,211,255,194,224,128,128,128,128,128]),x.t)
C.Um=B.a(w([C.a4h,C.a1M,C.VQ]),x.S)
C.pM=B.a(w([1,1,255,128,128,128,128,128,128,128,128]),x.t)
C.SG=B.a(w([246,1,255,128,128,128,128,128,128,128,128]),x.t)
C.Sc=B.a(w([255,128,128,128,128,128,128,128,128,128,128]),x.t)
C.YP=B.a(w([C.pM,C.SG,C.Sc]),x.S)
C.Sn=B.a(w([C.v1,C.a57,C.a1I,C.ZB,C.Wg,C.Tz,C.Um,C.YP]),x.o)
C.SH=B.a(w([198,35,237,223,193,187,162,160,145,155,62]),x.t)
C.Sx=B.a(w([131,45,198,221,172,176,220,157,252,221,1]),x.t)
C.a1Y=B.a(w([68,47,146,208,149,167,221,162,255,223,128]),x.t)
C.UW=B.a(w([C.SH,C.Sx,C.a1Y]),x.S)
C.a3w=B.a(w([1,149,241,255,221,224,255,255,128,128,128]),x.t)
C.a_C=B.a(w([184,141,234,253,222,220,255,199,128,128,128]),x.t)
C.a2e=B.a(w([81,99,181,242,176,190,249,202,255,255,128]),x.t)
C.Wi=B.a(w([C.a3w,C.a_C,C.a2e]),x.S)
C.a34=B.a(w([1,129,232,253,214,197,242,196,255,255,128]),x.t)
C.a0g=B.a(w([99,121,210,250,201,198,255,202,128,128,128]),x.t)
C.a2f=B.a(w([23,91,163,242,170,187,247,210,255,255,128]),x.t)
C.a6U=B.a(w([C.a34,C.a0g,C.a2f]),x.S)
C.a4i=B.a(w([1,200,246,255,234,255,128,128,128,128,128]),x.t)
C.ZX=B.a(w([109,178,241,255,231,245,255,255,128,128,128]),x.t)
C.Wt=B.a(w([44,130,201,253,205,192,255,255,128,128,128]),x.t)
C.Yf=B.a(w([C.a4i,C.ZX,C.Wt]),x.S)
C.a2U=B.a(w([1,132,239,251,219,209,255,165,128,128,128]),x.t)
C.Wu=B.a(w([94,136,225,251,218,190,255,255,128,128,128]),x.t)
C.a_D=B.a(w([22,100,174,245,186,161,255,199,128,128,128]),x.t)
C.a1D=B.a(w([C.a2U,C.Wu,C.a_D]),x.S)
C.a50=B.a(w([1,182,249,255,232,235,128,128,128,128,128]),x.t)
C.a1N=B.a(w([124,143,241,255,227,234,128,128,128,128,128]),x.t)
C.a_E=B.a(w([35,77,181,251,193,211,255,205,128,128,128]),x.t)
C.a3T=B.a(w([C.a50,C.a1N,C.a_E]),x.S)
C.Zx=B.a(w([1,157,247,255,236,231,255,255,128,128,128]),x.t)
C.a3x=B.a(w([121,141,235,255,225,227,255,255,128,128,128]),x.t)
C.a_F=B.a(w([45,99,188,251,195,217,255,224,128,128,128]),x.t)
C.UD=B.a(w([C.Zx,C.a3x,C.a_F]),x.S)
C.a51=B.a(w([1,1,251,255,213,255,128,128,128,128,128]),x.t)
C.a0a=B.a(w([203,1,248,255,255,128,128,128,128,128,128]),x.t)
C.a4j=B.a(w([137,1,177,255,224,255,128,128,128,128,128]),x.t)
C.Zj=B.a(w([C.a51,C.a0a,C.a4j]),x.S)
C.Wp=B.a(w([C.UW,C.Wi,C.a6U,C.Yf,C.a1D,C.a3T,C.UD,C.Zj]),x.o)
C.a3b=B.a(w([253,9,248,251,207,208,255,192,128,128,128]),x.t)
C.a15=B.a(w([175,13,224,243,193,185,249,198,255,255,128]),x.t)
C.a1Z=B.a(w([73,17,171,221,161,179,236,167,255,234,128]),x.t)
C.S5=B.a(w([C.a3b,C.a15,C.a1Z]),x.S)
C.a3y=B.a(w([1,95,247,253,212,183,255,255,128,128,128]),x.t)
C.a3G=B.a(w([239,90,244,250,211,209,255,255,128,128,128]),x.t)
C.a5a=B.a(w([155,77,195,248,188,195,255,255,128,128,128]),x.t)
C.YF=B.a(w([C.a3y,C.a3G,C.a5a]),x.S)
C.a2V=B.a(w([1,24,239,251,218,219,255,205,128,128,128]),x.t)
C.VR=B.a(w([201,51,219,255,196,186,128,128,128,128,128]),x.t)
C.a_G=B.a(w([69,46,190,239,201,218,255,228,128,128,128]),x.t)
C.a1k=B.a(w([C.a2V,C.VR,C.a_G]),x.S)
C.Ut=B.a(w([1,191,251,255,255,128,128,128,128,128,128]),x.t)
C.a52=B.a(w([223,165,249,255,213,255,128,128,128,128,128]),x.t)
C.a0b=B.a(w([141,124,248,255,255,128,128,128,128,128,128]),x.t)
C.VE=B.a(w([C.Ut,C.a52,C.a0b]),x.S)
C.a0c=B.a(w([1,16,248,255,255,128,128,128,128,128,128]),x.t)
C.a4k=B.a(w([190,36,230,255,236,255,128,128,128,128,128]),x.t)
C.SI=B.a(w([149,1,255,128,128,128,128,128,128,128,128]),x.t)
C.ZL=B.a(w([C.a0c,C.a4k,C.SI]),x.S)
C.SJ=B.a(w([1,226,255,128,128,128,128,128,128,128,128]),x.t)
C.WN=B.a(w([247,192,255,128,128,128,128,128,128,128,128]),x.t)
C.SK=B.a(w([240,128,255,128,128,128,128,128,128,128,128]),x.t)
C.a4O=B.a(w([C.SJ,C.WN,C.SK]),x.S)
C.a0d=B.a(w([1,134,252,255,255,128,128,128,128,128,128]),x.t)
C.a0e=B.a(w([213,62,250,255,255,128,128,128,128,128,128]),x.t)
C.SL=B.a(w([55,93,255,128,128,128,128,128,128,128,128]),x.t)
C.XT=B.a(w([C.a0d,C.a0e,C.SL]),x.S)
C.XO=B.a(w([C.S5,C.YF,C.a1k,C.VE,C.ZL,C.a4O,C.XT,C.v1]),x.o)
C.a_c=B.a(w([202,24,213,235,186,191,220,160,240,175,255]),x.t)
C.a2_=B.a(w([126,38,182,232,169,184,228,174,255,187,128]),x.t)
C.a20=B.a(w([61,46,138,219,151,178,240,170,255,216,128]),x.t)
C.a4P=B.a(w([C.a_c,C.a2_,C.a20]),x.S)
C.a2g=B.a(w([1,112,230,250,199,191,247,159,255,255,128]),x.t)
C.a0h=B.a(w([166,109,228,252,211,215,255,174,128,128,128]),x.t)
C.a2h=B.a(w([39,77,162,232,172,180,245,178,255,255,128]),x.t)
C.Zu=B.a(w([C.a2g,C.a0h,C.a2h]),x.S)
C.a2i=B.a(w([1,52,220,246,198,199,249,220,255,255,128]),x.t)
C.a35=B.a(w([124,74,191,243,183,193,250,221,255,255,128]),x.t)
C.a2j=B.a(w([24,71,130,219,154,170,243,182,255,255,128]),x.t)
C.a1A=B.a(w([C.a2i,C.a35,C.a2j]),x.S)
C.a_H=B.a(w([1,182,225,249,219,240,255,224,128,128,128]),x.t)
C.a0i=B.a(w([149,150,226,252,216,205,255,171,128,128,128]),x.t)
C.ZS=B.a(w([28,108,170,242,183,194,254,223,255,255,128]),x.t)
C.XX=B.a(w([C.a_H,C.a0i,C.ZS]),x.S)
C.a0j=B.a(w([1,81,230,252,204,203,255,192,128,128,128]),x.t)
C.Wv=B.a(w([123,102,209,247,188,196,255,233,128,128,128]),x.t)
C.a_I=B.a(w([20,95,153,243,164,173,255,203,128,128,128]),x.t)
C.Va=B.a(w([C.a0j,C.Wv,C.a_I]),x.S)
C.VS=B.a(w([1,222,248,255,216,213,128,128,128,128,128]),x.t)
C.WB=B.a(w([168,175,246,252,235,205,255,255,128,128,128]),x.t)
C.Ww=B.a(w([47,116,215,255,211,212,255,255,128,128,128]),x.t)
C.YO=B.a(w([C.VS,C.WB,C.Ww]),x.S)
C.Wx=B.a(w([1,121,236,253,212,214,255,255,128,128,128]),x.t)
C.a0k=B.a(w([141,84,213,252,201,202,255,219,128,128,128]),x.t)
C.a0l=B.a(w([42,80,160,240,162,185,255,205,128,128,128]),x.t)
C.a53=B.a(w([C.Wx,C.a0k,C.a0l]),x.S)
C.SM=B.a(w([244,1,255,128,128,128,128,128,128,128,128]),x.t)
C.SN=B.a(w([238,1,255,128,128,128,128,128,128,128,128]),x.t)
C.Yb=B.a(w([C.pM,C.SM,C.SN]),x.S)
C.a4d=B.a(w([C.a4P,C.Zu,C.a1A,C.XX,C.Va,C.YO,C.a53,C.Yb]),x.o)
C.YJ=B.a(w([C.Sn,C.Wp,C.XO,C.a4d]),x.g)
C.il=B.a(w([0,1,2,3,4,5,6,7,8,9,10,11]),x.t)
C.tN=B.a(w([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232]),x.t)
C.e5=B.a(w([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1]),x.t)
C.ZP=B.a(w([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),x.t)
C.tS=B.a(w([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]),x.t)
C.tW=B.a(w([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9]),x.t)
C.a_V=B.a(w([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15]),x.t)
C.ut=B.a(w([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396]),x.t)
C.us=B.a(w([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15]),x.t)
C.a0B=B.a(w([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),x.t)
C.a1B=B.a(w([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),x.t)
C.iw=B.a(w([0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63]),x.t)
C.a22=B.a(w([16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99]),x.t)
C.a23=B.a(w([17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]),x.t)
C.fc=B.a(w([0,1,3,7,15,31,63,127,255]),x.t)
C.li=B.a(w([0,128,192,224,240,248,252,254,255]),x.t)
C.a2u=B.a(w([0,1,1,2,4,8,1,1,2,4,8,4,8]),x.t)
C.vx=B.a(w([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390]),x.t)
C.a3z=B.a(w([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]),x.t)
C.Sf=B.a(w([173,148,140]),x.t)
C.Sg=B.a(w([176,155,140,135]),x.t)
C.a5m=B.a(w([180,157,141,134,130]),x.t)
C.SO=B.a(w([254,254,243,230,196,177,153,140,133,130,129]),x.t)
C.a3W=B.a(w([C.Sf,C.Sg,C.a5m,C.SO]),x.S)
C.a42=B.a(w([A.b5z(),A.b5M(),A.b5P(),A.b5G(),A.b5K(),A.b5S(),A.b5J(),A.b5R(),A.b5E(),A.b5I()]),x.y)
C.a4f=B.a(w([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),x.t)
C.a4g=B.a(w([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15]),x.t)
C.wo=B.a(w([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127]),x.t)
C.a5l=B.a(w([280,256,256,256,40]),x.t)
C.a6H=B.a(w([0,1,1,2,4,8,1,1,2,4,8,4,8,0]),x.t)
C.TS=B.a(w(["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","#","$","%","*","+",",","-",".",":",";","=","?","@","[","]","^","_","{","|","}","~"]),x.s)
C.lG=new B.v(83,{"0":0,"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,A:10,B:11,C:12,D:13,E:14,F:15,G:16,H:17,I:18,J:19,K:20,L:21,M:22,N:23,O:24,P:25,Q:26,R:27,S:28,T:29,U:30,V:31,W:32,X:33,Y:34,Z:35,a:36,b:37,c:38,d:39,e:40,f:41,g:42,h:43,i:44,j:45,k:46,l:47,m:48,n:49,o:50,p:51,q:52,r:53,s:54,t:55,u:56,v:57,w:58,x:59,y:60,z:61,"#":62,$:63,"%":64,"*":65,"+":66,",":67,"-":68,".":69,":":70,";":71,"=":72,"?":73,"@":74,"[":75,"]":76,"^":77,_:78,"{":79,"|":80,"}":81,"~":82},C.TS,B.w("v<l,k>"))
C.Bv=new B.cy([315,"artist",258,"bitsPerSample",265,"cellLength",264,"cellWidth",320,"colorMap",259,"compression",306,"dateTime",34665,"exifIFD",338,"extraSamples",266,"fillOrder",289,"freeByteCounts",288,"freeOffsets",291,"grayResponseCurve",290,"grayResponseUnit",316,"hostComputer",34675,"iccProfile",270,"imageDescription",257,"imageLength",256,"imageWidth",33723,"iptc",271,"make",281,"maxSampleValue",280,"minSampleValue",272,"model",254,"newSubfileType",274,"orientation",262,"photometricInterpretation",34377,"photoshop",284,"planarConfiguration",317,"predictor",296,"resolutionUnit",278,"rowsPerStrip",277,"samplesPerPixel",305,"software",279,"stripByteCounts",273,"stropOffsets",255,"subfileType",292,"t4Options",293,"t6Options",263,"thresholding",322,"tileWidth",323,"tileLength",324,"tileOffsets",325,"tileByteCounts",700,"xmp",282,"xResolution",283,"yResolution",529,"yCbCrCoefficients",530,"yCbCrSubsampling",531,"yCbCrPositioning",339,"sampleFormat"],B.w("cy<k,l>"))})();(function staticFields(){$.aEg=null
$.aOd=!1
$.aOe=B.a([A.aFg(),A.b5T(),A.b5Y(),A.b5Z(),A.b6_(),A.b60(),A.b61(),A.b62(),A.b63(),A.b64(),A.b5U(),A.b5V(),A.b5W(),A.b5X(),A.aFg(),A.aFg()],B.w("i<k(lw,k,k)>"))
$.aCk=null
$.eC=null
$.acV=B.bf("_eLut")})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"b6d","aFi",()=>B.cu("^[\\w!#%&'*+\\-.^`|~]+$",!0))
v($,"b8j","a5M",()=>B.Dx(511))
v($,"b8k","aAm",()=>B.Dx(511))
v($,"b8m","aAn",()=>A.aMi(2041))
v($,"b8n","a5N",()=>A.aMi(225))
v($,"b8l","zH",()=>B.Dx(766))
w($,"b9c","hc",()=>B.Dx(1))
w($,"b9d","hC",()=>{var u=$.hc().buffer
B.tS(u,0,null)
u=new Int8Array(u,0)
return u})
w($,"b95","hB",()=>X.aXj(1))
w($,"b96","i2",()=>{var u,t=$.hB().buffer
B.tS(t,0,null)
u=D.b.bC(t.byteLength-0,2)
return new Int16Array(t,0,u)})
w($,"b97","cN",()=>F.aXk(1))
w($,"b99","eU",()=>B.aCR($.cN().buffer,0,null))
w($,"b98","pP",()=>A.aVZ($.cN().buffer))
w($,"b93","aFA",()=>M.aCQ(1))
w($,"b94","aT7",()=>R.aO6($.aFA().buffer,0,null))
w($,"b91","aFz",()=>B.Ds(1))
w($,"b92","aT6",()=>R.aO6($.aFz().buffer,0,null))
w($,"b9a","aFB",()=>A.aZl(1))
w($,"b9b","aT8",()=>{var u=$.aFB()
return A.aW_(u.gaC9(u))})})()}
$__dart_deferred_initializers__["5/eHdC54OgjeqaaZsKOlYQktUzQ="] = $__dart_deferred_initializers__.current
