self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={tM:function tM(){},HB:function HB(d){this.a=d},z3:function z3(d){this.a=d},ih:function ih(d,e,f){this.a=d
this.b=e
this.c=f},
aJQ(d){return new A.eX(d.a,d.b,d.c)},
eX:function eX(d,e,f){this.a=d
this.b=e
this.c=f},
pg:function pg(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k}},D,B,C,J
A=a.updateHolder(c[31],A)
D=c[33]
B=c[2]
C=c[0]
J=c[1]
A.tM.prototype={}
A.HB.prototype={
dE(d,e){return this.a.F5(e)}}
A.z3.prototype={
dE(d,e){var x,w,v,u,t=new Float64Array(16),s=new D.bv(t)
s.bZ(e)
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
A.ih.prototype={
gf3(d){return this.a},
aiT(){var x,w,v,u,t=this.c
if(t.length===0)return
x=this.b
w=B.d.gJ(x)
for(v=t.length,u=0;u<t.length;t.length===v||(0,C.F)(t),++u){w=t[u].dE(0,w)
x.push(w)}B.d.sm(t,0)},
H(d,e){this.aiT()
e.b=B.d.gJ(this.b)
this.a.push(e)},
Ft(){var x=this.c
if(x.length!==0)x.pop()
else this.b.pop()},
j(d){var x=this.a
return"HitTestResult("+(x.length===0?"<empty path>":B.d.bw(x,", "))+")"}}
A.eX.prototype={
AW(d,e,f){if(f!=null){f=D.Dc(D.aCZ(f))
if(f==null)return!1}return this.KB(d,e,f)},
nh(d,e,f){var x,w=e==null,v=w?f:f.aD(0,e)
w=!w
if(w)this.c.push(new A.z3(new C.n(-e.a,-e.b)))
x=d.$2(this,v)
if(w)this.Ft()
return x},
KB(d,e,f){var x,w=f==null,v=w?e:D.hp(f,e)
w=!w
if(w)this.c.push(new A.HB(f))
x=d.$2(this,v)
if(w)this.Ft()
return x},
a_Y(d,e,f){var x,w=this
if(e!=null)w.c.push(new A.z3(new C.n(-e.a,-e.b)))
else{f.toString
f=D.Dc(D.aCZ(f))
f.toString
w.c.push(new A.HB(f))}x=d.$1(w)
w.Ft()
return x},
asp(d,e){return this.a_Y(d,null,e)},
aso(d,e){return this.a_Y(d,e,null)}}
A.pg.prototype={
Zr(){var x,w,v,u=this,t=null,s=u.a
s=s==null?t:s.a
x=u.f
x=x==null?t:"Brightness."+x.b
w=u.r
w=w==null?t:"Brightness."+w.b
v=u.c
v=v==null?t:"Brightness."+v.b
return C.ad(["systemNavigationBarColor",s,"systemNavigationBarDividerColor",null,"systemStatusBarContrastEnforced",u.w,"statusBarColor",null,"statusBarBrightness",x,"statusBarIconBrightness",w,"systemNavigationBarIconBrightness",v,"systemNavigationBarContrastEnforced",u.d],y.g,y.b)},
j(d){return"SystemUiOverlayStyle("+this.Zr().j(0)+")"},
gD(d){var x=this
return C.ag(x.a,x.b,x.d,x.e,x.f,x.r,x.w,x.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(d,e){var x,w=this
if(e==null)return!1
if(J.Y(e)!==C.I(w))return!1
if(e instanceof A.pg)if(J.h(e.a,w.a))if(e.r==w.r)if(e.f==w.f)x=e.c==w.c
else x=!1
else x=!1
else x=!1
else x=!1
return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(C.r,[A.tM,A.ih,A.pg])
x(A.tM,[A.HB,A.z3])
w(A.eX,A.ih)})()
C.cT(b.typeUniverse,JSON.parse('{"HB":{"tM":[]},"z3":{"tM":[]},"eX":{"ih":[]}}'))
var y={g:C.w("l"),b:C.w("@")}}
$__dart_deferred_initializers__["uYQkCirc2FYhLRPUoFAqiTjOORQ="] = $__dart_deferred_initializers__.current
