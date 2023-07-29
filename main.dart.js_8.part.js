self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
aML(d,e,f,g,h){return g?new B.Be(d,e,f,null,h.i("Be<0>")):new B.qV(d,e,f,null,h.i("qV<0>"))},
vJ:function vJ(){},
aG2:function aG2(d){this.a=d},
aG1:function aG1(d){this.a=d},
ab6:function ab6(){},
a4J:function a4J(){},
qV:function qV(d,e,f,g,h){var _=this
_.a=null
_.b=0
_.c=null
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
Be:function Be(d,e,f,g,h){var _=this
_.a=null
_.b=0
_.c=null
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
jP:function jP(d,e){this.a=d
this.c=e}},A,C,J
B=a.updateHolder(c[20],B)
A=c[0]
C=c[2]
J=c[1]
B.vJ.prototype={
gLF(d){return new A.iV(this,A.n(this).i("iV<1>"))},
ga7O(){var x=this.b
return(x&1)!==0?(this.gr7().e&4)!==0:(x&2)===0},
gavM(){if((this.b&8)===0)return this.a
return this.a.gVq()},
Np(){var x,w=this
if((w.b&8)===0){x=w.a
return x==null?w.a=new A.B0(A.n(w).i("B0<1>")):x}x=w.a.gVq()
return x},
gr7(){var x=this.a
return(this.b&8)!==0?x.gVq():x},
Mu(){if((this.b&4)!==0)return new A.l9("Cannot add event after closing")
return new A.l9("Cannot add event while adding a stream")},
Zj(){var x=this.c
if(x==null)x=this.c=(this.b&2)!==0?$.BD():new A.aN($.aM,y.o)
return x},
J(d,e){if(this.b>=4)throw A.c(this.Mu())
this.CQ(0,e)},
rb(d,e){var x,w=this
A.hn(d,"error",y.n)
if(w.b>=4)throw A.c(w.Mu())
if(e==null)e=A.C5(d)
x=w.b
if((x&1)!==0)w.r4(d,e)
else if((x&3)===0)w.Np().J(0,new A.Ai(d,e))},
d6(d){var x=this,w=x.b
if((w&4)!==0)return x.Zj()
if(w>=4)throw A.c(x.Mu())
x.Yi()
return x.Zj()},
Yi(){var x=this.b|=4
if((x&1)!==0)this.og()
else if((x&3)===0)this.Np().J(0,C.iE)},
CQ(d,e){var x=this,w=x.b
if((w&1)!==0)x.r3(e)
else if((w&3)===0)x.Np().J(0,new A.mE(e,A.n(x).i("mE<1>")))},
Po(d,e,f,g){var x,w,v,u,t=this
if((t.b&3)!==0)throw A.c(A.ax("Stream has already been listened to."))
x=A.bah(t,d,e,f,g,A.n(t).c)
w=t.gavM()
v=t.b|=1
if((v&8)!==0){u=t.a
u.sVq(x)
u.By(0)}else t.a=x
x.ayg(w)
x.NO(new B.aG2(t))
return x},
a0W(d){var x,w,v,u,t,s,r,q=this,p=null
if((q.b&8)!==0)p=q.a.bI(0)
q.a=null
q.b=q.b&4294967286|2
x=q.r
if(x!=null)if(p==null)try{w=x.$0()
if(y.g.b(w))p=w}catch(t){v=A.aO(t)
u=A.bj(t)
s=new A.aN($.aM,y.o)
s.CR(v,u)
p=s}else p=p.jR(x)
r=new B.aG1(q)
if(p!=null)p=p.jR(r)
else r.$0()
return p},
a0X(d){if((this.b&8)!==0)this.a.Kn(0)
A.adD(this.e)},
a0Y(d){if((this.b&8)!==0)this.a.By(0)
A.adD(this.f)},
$iuX:1}
B.ab6.prototype={
r3(d){this.gr7().CQ(0,d)},
r4(d,e){this.gr7().al_(d,e)},
og(){this.gr7().amy()}}
B.a4J.prototype={
r3(d){this.gr7().ob(new A.mE(d,this.$ti.i("mE<1>")))},
r4(d,e){this.gr7().ob(new A.Ai(d,e))},
og(){this.gr7().ob(C.iE)}}
B.qV.prototype={}
B.Be.prototype={}
B.jP.prototype={
gv(d){return A.Y(this.a,null,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
k(d,e){var x
if(e==null)return!1
if(J.Z(e)!==A.E(this))return!1
if(e instanceof B.jP)if(J.d(e.a,this.a))x=!0
else x=!1
else x=!1
return x},
aHy(d,e){return this.a.$2(d,e)}}
var z=a.updateTypes(["~(u?)"])
B.aG2.prototype={
$0(){A.adD(this.a.d)},
$S:0}
B.aG1.prototype={
$0(){var x=this.a.c
if(x!=null&&(x.a&30)===0)x.qP(null)},
$S:0};(function installTearOffs(){var x=a._instance_1i
x(B.vJ.prototype,"gk9","J",0)})();(function inheritance(){var x=a.mixin,w=a.inheritMany
w(A.u,[B.vJ,B.ab6,B.a4J,B.jP])
w(A.eH,[B.aG2,B.aG1])
w(B.vJ,[B.qV,B.Be])
x(B.qV,B.a4J)
x(B.Be,B.ab6)})()
A.dV(b.typeUniverse,JSON.parse('{"vJ":{"uX":["1"]},"qV":{"a4J":["1"],"vJ":["1"],"uX":["1"]},"Be":{"vJ":["1"],"uX":["1"]}}'))
A.oL(b.typeUniverse,JSON.parse('{"ab6":1}'))
var y={g:A.A("aw<~>"),n:A.A("u"),o:A.A("aN<~>")}}
$__dart_deferred_initializers__["5euqfSVqwZsdAciYNRHExyJg6ZA="] = $__dart_deferred_initializers__.current
