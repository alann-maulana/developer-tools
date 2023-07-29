self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={vM:function vM(){},KH:function KH(d){this.a=d},AX:function AX(d){this.a=d},jf:function jf(d,e,f){this.a=d
this.b=e
this.c=f},
aQT(d){return new A.fA(d.a,d.b,d.c)},
fA:function fA(d,e,f){this.a=d
this.b=e
this.c=f},
ms:function ms(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
Yp:function Yp(d,e){this.a=d
this.b=e}},D,B,C,J,E
A=a.updateHolder(c[28],A)
D=c[30]
B=c[2]
C=c[0]
J=c[1]
E=c[52]
A.vM.prototype={}
A.KH.prototype={
ew(d,e){return this.a.JO(e)}}
A.AX.prototype={
ew(d,e){var x,w,v,u,t=new Float64Array(16),s=new D.bC(t)
s.cl(e)
x=this.a
w=x.a
v=x.b
x=t[0]
u=t[3]
t[0]=x+w*u
t[1]=t[1]+v*u
t[2]=t[2]+0*u
t[3]=u
u=t[4]
x=t[7]
t[4]=u+w*x
t[5]=t[5]+v*x
t[6]=t[6]+0*x
t[7]=x
x=t[8]
u=t[11]
t[8]=x+w*u
t[9]=t[9]+v*u
t[10]=t[10]+0*u
t[11]=u
u=t[12]
x=t[15]
t[12]=u+w*x
t[13]=t[13]+v*x
t[14]=t[14]+0*x
t[15]=x
return s}}
A.jf.prototype={
gh3(d){return this.a},
apU(){var x,w,v,u,t=this.c
if(t.length===0)return
x=this.b
w=B.c.gU(x)
for(v=t.length,u=0;u<t.length;t.length===v||(0,C.G)(t),++u){w=t[u].ew(0,w)
x.push(w)}B.c.ah(t)},
J(d,e){this.apU()
e.b=B.c.gU(this.b)
this.a.push(e)},
Kq(){var x=this.c
if(x.length!==0)x.pop()
else this.b.pop()},
j(d){var x=this.a
return"HitTestResult("+(x.length===0?"<empty path>":B.c.bW(x,", "))+")"}}
A.fA.prototype={
EX(d,e,f){if(f!=null){f=D.u3(D.aMk(f))
if(f==null)return!1}return this.Qf(d,e,f)},
m0(d,e,f){var x,w=e==null,v=w?f:f.am(0,e)
w=!w
if(w)this.c.push(new A.AX(new C.m(-e.a,-e.b)))
x=d.$2(this,v)
if(w)this.Kq()
return x},
Qf(d,e,f){var x,w=f==null,v=w?e:D.co(f,e)
w=!w
if(w)this.c.push(new A.KH(f))
x=d.$2(this,v)
if(w)this.Kq()
return x},
a4f(d,e,f){var x,w=this
if(e!=null)w.c.push(new A.AX(new C.m(-e.a,-e.b)))
else{f.toString
f=D.u3(D.aMk(f))
f.toString
w.c.push(new A.KH(f))}x=d.$1(w)
w.Kq()
return x},
aAV(d,e){return this.a4f(d,null,e)},
aAU(d,e){return this.a4f(d,e,null)}}
A.ms.prototype={
a2v(){var x,w,v,u,t=this,s=t.a
s=s==null?null:s.a
x=t.e
x=x==null?null:x.a
w=t.f.P()
v=t.r.P()
u=t.c
u=u==null?null:u.P()
return C.af(["systemNavigationBarColor",s,"systemNavigationBarDividerColor",null,"systemStatusBarContrastEnforced",t.w,"statusBarColor",x,"statusBarBrightness",w,"statusBarIconBrightness",v,"systemNavigationBarIconBrightness",u,"systemNavigationBarContrastEnforced",t.d],y.g,y.b)},
j(d){return"SystemUiOverlayStyle("+this.a2v().j(0)+")"},
gv(d){var x=this
return C.Y(x.a,x.b,x.d,x.e,x.f,x.r,x.w,x.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(d,e){var x,w=this
if(e==null)return!1
if(J.Z(e)!==C.E(w))return!1
if(e instanceof A.ms)if(J.d(e.a,w.a))if(J.d(e.e,w.e))if(e.r===w.r)if(e.f===w.f)x=e.c==w.c
else x=!1
else x=!1
else x=!1
else x=!1
else x=!1
return x}}
A.Yp.prototype={
P(){return"Orientation."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(C.u,[A.vM,A.jf,A.ms])
x(A.vM,[A.KH,A.AX])
w(A.fA,A.jf)
w(A.Yp,C.fQ)})()
C.dV(b.typeUniverse,JSON.parse('{"KH":{"vM":[]},"AX":{"vM":[]},"fA":{"jf":[]}}'))
var y={g:C.A("o"),b:C.A("@")};(function constants(){E.Hb=new A.Yp(0,"portrait")
E.Hc=new A.Yp(1,"landscape")})()}
$__dart_deferred_initializers__["tCZJfbXfE6z9VT/wst08Mwxm/Ng="] = $__dart_deferred_initializers__.current
