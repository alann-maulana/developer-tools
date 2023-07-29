self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={ahs:function ahs(d,e){this.a=d
this.b=e},Dd:function Dd(d,e,f){var _=this
_.a=d
_.b=e
_.c=null
_.aA$=0
_.aY$=f
_.bl$=_.bE$=0
_.F$=!1},
b58(){return new B.xq(new B.Dd(I.eD(null),I.eD(null),$.bq()),null)},
xq:function xq(d,e){this.c=d
this.a=e},
alC:function alC(d){this.a=d},
xp:function xp(d,e){this.c=d
this.a=e},
alB:function alB(d){this.a=d},
aly:function aly(d,e){this.a=d
this.b=e},
alz:function alz(d,e){this.a=d
this.b=e},
alA:function alA(d,e){this.a=d
this.b=e},
aXf(d,e,f,g){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=e.length
if(l!==0){v=0
while(!0){if(!(v<l)){x=""
w=0
break}if(D.d.af(e,v)===64){x=D.d.ac(e,0,v)
w=v+1
break}++v}if(w<l&&D.d.af(e,w)===91){for(u=w,t=-1;u<l;++u){s=D.d.af(e,u)
if(s===37&&t<0){r=D.d.e_(e,"25",u+1)?u+2:u
t=u
u=r}else if(s===93)break}if(u===l)throw A.c(A.c4("Invalid IPv6 host entry.",e,w))
q=t<0?u:t
A.aN0(e,w+1,q);++u
if(u!==l&&D.d.af(e,u)!==58)throw A.c(A.c4("Invalid end of authority",e,u))}else u=w
while(!0){if(!(u<l)){p=m
break}if(D.d.af(e,u)===58){o=D.d.cU(e,u+1)
p=o.length!==0?A.j0(o,m):m
break}++u}n=D.d.ac(e,w,u)}else{p=m
n=p
x=""}return A.ra(m,n,m,A.a(f.split("/"),y.x),p,g,d,x)}},R,D,J,A,I,G,L,H,K,E,F,Q,N,O,C,P,M
B=a.updateHolder(c[11],B)
R=c[18]
D=c[2]
J=c[1]
A=c[0]
I=c[23]
G=c[25]
L=c[38]
H=c[27]
K=c[34]
E=c[39]
F=c[33]
Q=c[22]
N=c[42]
O=c[43]
C=c[47]
P=c[31]
M=c[30]
B.ahs.prototype={
P(){return"DDLMode."+this.b}}
B.Dd.prototype={
ah(d){this.a.sba(0,"")
this.b.sba(0,"")
this.aM()},
hW(d){var x,w,v,u,t,s,r,q,p,o=this
o.c=null
if(d.length===0){o.ah(0)
return}x=R.aWf(d)
switch(0){case 0:if(x!=null){w=D.c.gX(x.goT())
if(w==="file"){for(v=x.goT(),u=v.length,t=null,s=0;s<u;++s){r=v[s]
if(t==null||J.bg(r)>t.length)t=r}if(t!=null){v=y.w
q=B.aXf("https",x.gQp(),"uc",A.af(["export","download","id",t],v,v)).gy6()}else q=d}else if(D.c.D(A.a(["document","presentation","spreadsheets"],y.x),w)){p=A.hE(x.goT(),!0,y.b)
p.pop()
p.push("export")
v=y.w
q=B.aXf("https",x.gQp(),D.c.bW(p,"/"),A.af(["format","pdf"],v,v)).gy6()}else q=d}else q=d
break}o.b.sba(0,q)
o.aM()},
hB(d){var x=0,w=A.a3(y.b),v=this
var $async$hB=A.a4(function(e,f){if(e===1)return A.a0(f,w)
while(true)switch(x){case 0:x=2
return A.a7(I.ng(new I.kq(v.b.a.a)),$async$hB)
case 2:return A.a1(null,w)}})
return A.a2($async$hB,w)},
fp(d){var x=0,w=A.a3(y.b),v=this,u,t
var $async$fp=A.a4(function(e,f){if(e===1)return A.a0(f,w)
while(true)switch(x){case 0:x=2
return A.a7(I.pg("text/plain"),$async$fp)
case 2:t=f
if(t!=null){u=t.a
v.a.sba(0,u)
v.hW(u)}return A.a1(null,w)}})
return A.a2($async$fp,w)}}
B.xq.prototype={
a_(d){var x=null
return G.H0(0,new B.alC(this),!0,L.eB,G.hd(H.dr(d,K.bB,y.F).gVP(),x,x,x,x,x,x))}}
B.xp.prototype={
a_(d){return new H.cQ(E.fL,H.ho(this.c,new B.alB(this),null),null)}}
var z=a.updateTypes(["@()","@(o)","xp(h8)","iN(Q,f?)","iF(Q)","iO(Q)"])
B.alC.prototype={
$1(d){return new B.xp(this.a.c,null)},
$S:z+2}
B.alB.prototype={
$2(d,e){var x=null,w=this.a,v=w.c,u=y.u,t=A.a([H.dT(A.a([E.i1,E.bx,I.ST(!1,E.i0,D.q,x,x,x,x,x,v.gjJ(v),x,x),E.bx,I.Yr(!1,E.hZ,D.q,x,x,x,v.goq(v),x,x),E.d3],u),F.E,F.G,K.I),E.d2,I.k3(v.a,I.xN(x,E.dJ,x,x,x,x,x,x,!0,x,x,x,x,v.c,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x),!1,x,x,v.goR(),!1,x,L.bz)],u),s=A.a([H.dT(A.a([E.i_,E.d3,Q.aBU(E.fS,N.l7,new B.aly(w,d))],u),F.E,F.G,K.I),E.d2,I.k3(v.b,O.fT,!1,x,x,x,!1,x,L.bz)],u)
return G.H1(new B.alz(t,s),new B.alA(t,s))},
$S:z+3}
B.aly.prototype={
$0(){var x=0,w=A.a3(y.q),v=this,u
var $async$$0=A.a4(function(d,e){if(d===1)return A.a0(e,w)
while(true)switch(x){case 0:x=2
return A.a7(v.a.c.hB(0),$async$$0)
case 2:u=v.b
if(u.f!=null){u=u.az(y.v)
u.toString
u.f.iv(N.l1)}return A.a1(null,w)}})
return A.a2($async$$0,w)},
$S:2}
B.alz.prototype={
$1(d){var x=A.W(this.a,!0,y.l)
x.push(L.aw)
D.c.a6(x,this.b)
x.push(L.aw)
D.c.a6(x,C.yH)
return G.fB(x,F.E,F.G,K.I)},
$S:z+4}
B.alA.prototype={
$1(d){var x=A.W(this.a,!0,y.l)
x.push(L.aw)
D.c.a6(x,this.b)
return H.dT(A.a([G.eJ(G.fB(x,F.E,F.G,K.I),2),E.ig,C.U4],y.u),F.E,F.G,K.I)},
$S:z+5};(function installTearOffs(){var x=a._instance_0i,w=a._instance_1u
var v
x(v=B.Dd.prototype,"goq","ah",0)
w(v,"goR","hW",1)
x(v,"gjJ","fp",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.ahs,A.fQ)
x(B.Dd,P.dG)
w(M.am,[B.xq,B.xp])
w(A.dH,[B.alC,B.alz,B.alA])
x(B.alB,A.hs)
x(B.aly,A.eH)})()
A.dV(b.typeUniverse,JSON.parse('{"Dd":{"aq":[]},"xp":{"am":[],"f":[]},"xq":{"am":[],"f":[]}}'))
var y={F:A.A("hp"),x:A.A("k<o>"),u:A.A("k<f>"),w:A.A("o"),l:A.A("f"),v:A.A("ka"),b:A.A("@"),q:A.A("~")};(function constants(){var x=a.makeConstList
C.azE=new B.ahs(0,"googleDrive")
C.atP=new H.cp("NOTES",null,null,null,null,null,null,null,null)
C.iS=new M.bc(0,0,16,0)
C.W0=new G.kM(null,C.atP,null,null,C.iS,!0,null,!1,null,null,null,null)
C.atH=new H.cp('Make sure your file\'s visibility is set to "Anyone with the link". ',null,null,null,null,null,null,null,null)
C.W1=new G.kM(null,C.atH,null,null,C.iS,!0,null,!1,null,null,null,null)
C.atD=new H.cp("If it's set to \"Restricted\" then only people who are logged in and have been granted access to the file will be able to open the direct link (which probably isn't what you want).",null,null,null,null,null,null,null,null)
C.W2=new G.kM(null,C.atD,null,null,C.iS,!0,null,!1,null,null,null,null)
C.atI=new H.cp("It is support type : file, document, presentation and spreadsheets.",null,null,null,null,null,null,null,null)
C.W3=new G.kM(null,C.atI,null,null,C.iS,!0,null,!1,null,null,null,null)
C.yH=A.a(x([C.W0,C.W1,C.W2,C.W3]),A.A("k<kM>"))
C.RW=new G.iF(F.aO,F.G,K.I,F.E,null,K.dQ,null,C.yH,null)
C.U4=new G.DO(1,F.mS,C.RW,null)})()}
$__dart_deferred_initializers__["c9hzuOYxPwytlirX7PfC5JS3kdM="] = $__dart_deferred_initializers__.current
