self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={Ok:function Ok(d,e){this.a=d
this.b=e},B4:function B4(d,e,f){var _=this
_.a=d
_.b=e
_.c=null
_.y1$=0
_.y2$=f
_.al$=_.aF$=0
_.aN$=!1},
aWk(){var x=$.bA()
return new B.vq(new B.B4(new I.d9(E.a7,x),new I.d9(E.a7,x),x),null)},
vq:function vq(d,e){this.c=d
this.a=e},
Qr:function Qr(d,e){this.c=d
this.a=e},
acR:function acR(d){this.a=d},
acO:function acO(d,e){this.a=d
this.b=e},
acP:function acP(d,e){this.a=d
this.b=e},
acQ:function acQ(d,e){this.a=d
this.b=e},
aP4(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=e.length
if(l!==0){v=0
while(!0){if(!(v<l)){x=""
w=0
break}if(F.c.a7(e,v)===64){x=F.c.a3(e,0,v)
w=v+1
break}++v}if(w<l&&F.c.a7(e,w)===91){for(u=w,t=-1;u<l;++u){s=F.c.a7(e,u)
if(s===37&&t<0){r=F.c.dt(e,"25",u+1)?u+2:u
t=u
u=r}else if(s===93)break}if(u===l)throw A.c(A.bH("Invalid IPv6 host entry.",e,w))
q=t<0?u:t
A.aDH(e,w+1,q);++u
if(u!==l&&F.c.a7(e,u)!==58)throw A.c(A.bH("Invalid end of authority",e,u))}else u=w
while(!0){if(!(u<l)){p=m
break}if(F.c.a7(e,u)===58){o=F.c.c7(e,u+1)
p=o.length!==0?A.fD(o,m):m
break}++u}n=F.c.a3(e,w,u)}else{p=m
n=p
x=""}return N.tN(n,m,A.a(f.split("/"),y.x),p,g,d,x)}},O,F,J,A,I,G,K,H,D,E,L,P,M,Q,C,R,N
B=a.updateHolder(c[11],B)
O=c[18]
F=c[2]
J=c[1]
A=c[0]
I=c[26]
G=c[28]
K=c[42]
H=c[30]
D=c[36]
E=c[43]
L=c[37]
P=c[25]
M=c[46]
Q=c[47]
C=c[51]
R=c[34]
N=c[33]
B.Ok.prototype={
j(d){return"DDLMode."+this.b}}
B.B4.prototype={
aS(d){this.a.saT(0,"")
this.b.saT(0,"")
this.av()},
fC(d){var x,w,v,u,t,s,r,q,p,o=this
o.c=null
if(d.length===0){o.aS(0)
return}x=O.aOa(d)
switch(0){case 0:if(x!=null){w=F.d.gU(x.gnX())
if(w==="file"){for(v=x.gnX(),u=v.length,t=null,s=0;s<u;++s){r=v[s]
if(t==null||J.bn(r)>t.length)t=r}if(t!=null){v=y.w
q=B.aP4("https",x.gKM(),"uc",A.ad(["export","download","id",t],v,v)).gAx()}else q=d}else if(F.d.v(A.a(["document","presentation","spreadsheets"],y.x),w)){p=A.f1(x.gnX(),!0,y.b)
p.pop()
p.push("export")
v=y.w
q=B.aP4("https",x.gKM(),F.d.bt(p,"/"),A.ad(["format","pdf"],v,v)).gAx()}else q=d}else q=d
break}o.b.saT(0,q)
o.av()},
fh(d){var x=0,w=A.a2(y.b),v=this
var $async$fh=A.a3(function(e,f){if(e===1)return A.a_(f,w)
while(true)switch(x){case 0:x=2
return A.a5(I.mb(new I.jH(v.b.a.a)),$async$fh)
case 2:return A.a0(null,w)}})
return A.a1($async$fh,w)},
e8(d){var x=0,w=A.a2(y.b),v=this,u,t,s,r
var $async$e8=A.a3(function(e,f){if(e===1)return A.a_(f,w)
while(true)switch(x){case 0:x=2
return A.a5(I.nP("text/plain"),$async$e8)
case 2:r=f
if(r!=null){u=r.a
t=u==null
s=t?"":u
v.a.saT(0,s)
v.fC(t?"":u)}return A.a0(null,w)}})
return A.a1($async$e8,w)}}
B.vq.prototype={
a2(d,e){var x=null
return G.EH(0,new B.Qr(this.c,x),!0,K.dM,G.iF(H.dr(e,D.bc,y.F).gQ2(),x,x,x,x,x,x))}}
B.Qr.prototype={
a2(d,e){return new H.dg(E.eV,H.fI(this.c,new B.acR(this),null),null)}}
var z=a.updateTypes(["@()","@(l)","hV(P,j?)","kM(P)","hW(P)"])
B.acR.prototype={
$2(d,e){var x=null,w=this.a,v=w.c,u=y.u,t=A.a([H.du(A.a([E.fO,E.b9,I.OZ(!1,E.fN,L.u,x,x,x,x,x,v.ghu(v),x),E.b9,I.Ul(!1,E.fL,L.u,x,x,x,v.gkT(v),x),E.cw],u),D.G,D.F,D.H),E.cv,I.jj(v.a,I.vE(x,E.d_,x,x,x,x,x,x,!0,x,x,x,x,v.c,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x),!1,x,x,v.gmu(),!1,x,K.bb)],u),s=A.a([H.du(A.a([E.fM,E.cw,P.asX(E.eY,M.jh,new B.acO(w,d))],u),D.G,D.F,D.H),E.cv,I.jj(v.b,Q.eZ,!1,x,x,x,!1,x,K.bb)],u)
return G.EI(new B.acP(t,s),new B.acQ(t,s))},
$S:z+2}
B.acO.prototype={
$0(){var x=0,w=A.a2(y.q),v=this,u
var $async$$0=A.a3(function(d,e){if(d===1)return A.a_(e,w)
while(true)switch(x){case 0:x=2
return A.a5(v.a.c.fh(0),$async$$0)
case 2:u=v.b.a6(y.v)
u.toString
u.f.he(M.jd)
return A.a0(null,w)}})
return A.a1($async$$0,w)},
$S:2}
B.acP.prototype={
$1(d){var x=A.al(this.a,!0,y.l)
x.push(K.ac)
F.d.Z(x,this.b)
x.push(K.ac)
F.d.Z(x,C.vG)
return G.eY(x,D.G,D.F,D.H)},
$S:z+3}
B.acQ.prototype={
$1(d){var x=A.al(this.a,!0,y.l)
x.push(K.ac)
F.d.Z(x,this.b)
return H.du(A.a([G.dR(G.eY(x,D.G,D.F,D.H),2),E.fS,G.dR(G.eY(C.vG,D.G,D.F,D.H),1)],y.u),D.G,D.F,D.H)},
$S:z+4};(function installTearOffs(){var x=a._instance_0i,w=a._instance_1u
var v
x(v=B.B4.prototype,"gkT","aS",0)
w(v,"gmu","fC",1)
x(v,"ghu","e8",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Ok,A.h1)
x(B.B4,R.ey)
w(H.ar,[B.vq,B.Qr])
x(B.acR,A.fL)
x(B.acO,A.eg)
w(A.bN,[B.acP,B.acQ])})()
A.cT(b.typeUniverse,JSON.parse('{"Ok":{"O":[]},"B4":{"aH":[]},"vq":{"ar":[],"j":[]},"Qr":{"ar":[],"j":[]}}'))
var y={F:A.w("fJ"),x:A.w("i<l>"),u:A.w("i<j>"),w:A.w("l"),l:A.w("j"),v:A.w("kx"),b:A.w("@"),q:A.w("~")};(function constants(){var x=a.makeConstList
C.asi=new B.Ok(0,"googleDrive")
C.aoK=new H.c3("NOTES",null,null,null,null,null,null,null,null)
C.hm=new N.bq(0,0,16,0)
C.RV=new G.k3(null,C.aoK,null,null,C.hm,!0,null,!1,null,null,null,null)
C.aoC=new H.c3('Make sure your file\'s visibility is set to "Anyone with the link". ',null,null,null,null,null,null,null,null)
C.RW=new G.k3(null,C.aoC,null,null,C.hm,!0,null,!1,null,null,null,null)
C.aoy=new H.c3("If it's set to \"Restricted\" then only people who are logged in and have been granted access to the file will be able to open the direct link (which probably isn't what you want).",null,null,null,null,null,null,null,null)
C.RX=new G.k3(null,C.aoy,null,null,C.hm,!0,null,!1,null,null,null,null)
C.aoD=new H.c3("It is support type : file, document, presentation and spreadsheets.",null,null,null,null,null,null,null,null)
C.RY=new G.k3(null,C.aoD,null,null,C.hm,!0,null,!1,null,null,null,null)
C.vG=A.a(x([C.RV,C.RW,C.RX,C.RY]),A.w("i<k3>"))})()}
$__dart_deferred_initializers__["8V7QUmn7lrAdLN67QsFOGBFeptI="] = $__dart_deferred_initializers__.current
