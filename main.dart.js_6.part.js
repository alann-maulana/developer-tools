self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
aDl(d,e,f,g,h){return g?new A.zk(d,e,f,null,h.i("zk<0>")):new A.pq(d,e,f,null,h.i("pq<0>"))},
aEv(d){var x,w,v
if(d==null)return
try{d.$0()}catch(v){x=B.ay(v)
w=B.b5(v)
B.zv(x,w)}},
aOu(d,e){return e==null?A.b2O():e},
b_t(d,e){if(e==null)e=A.b2Q()
if(y.l.b(e))return d.OK(e)
if(y.i.b(e))return e
throw B.c(B.bs("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
b1R(d){},
b1T(d,e){B.zv(d,e)},
b1S(){},
tJ:function tJ(){},
awu:function awu(d){this.a=d},
awt:function awt(d){this.a=d},
a3s:function a3s(){},
Zh:function Zh(){},
pq:function pq(d,e,f,g,h){var _=this
_.a=null
_.b=0
_.c=null
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
zk:function zk(d,e,f,g,h){var _=this
_.a=null
_.b=0
_.c=null
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
jn:function jn(d,e){this.a=d
this.$ti=e},
yl:function yl(d,e,f,g,h,i,j){var _=this
_.w=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i
_.r=_.f=null
_.$ti=j},
tK:function tK(d,e){this.a=d
this.$ti=e},
ye:function ye(){},
arA:function arA(d,e,f){this.a=d
this.b=e
this.c=f},
arz:function arz(d){this.a=d},
IL:function IL(){},
a_b:function a_b(){},
lG:function lG(d,e){this.b=d
this.a=null
this.$ti=e},
GM:function GM(d,e){this.b=d
this.c=e
this.a=null},
asG:function asG(){},
a1p:function a1p(){},
av3:function av3(d,e){this.a=d
this.b=e},
zi:function zi(d){var _=this
_.c=_.b=null
_.a=0
_.$ti=d},
iX:function iX(d,e){this.a=d
this.c=e}},B,D,C,J
A=a.updateHolder(c[20],A)
B=c[0]
D=c[57]
C=c[2]
J=c[1]
A.tJ.prototype={
ganZ(){if((this.b&8)===0)return this.a
return this.a.gPo()},
zE(){var x,w=this
if((w.b&8)===0){x=w.a
return x==null?w.a=new A.zi(B.q(w).i("zi<1>")):x}x=w.a.gPo()
return x},
goQ(){var x=this.a
return(this.b&8)!==0?x.gPo():x},
zi(){if((this.b&4)!==0)return new B.mV("Cannot add event after closing")
return new B.mV("Cannot add event while adding a stream")},
VV(){var x=this.c
if(x==null)x=this.c=(this.b&2)!==0?$.zF():new B.an($.as,y.o)
return x},
H(d,e){if(this.b>=4)throw B.c(this.zi())
this.ze(0,e)},
qQ(d,e){var x,w=this
B.ha(d,"error",y.n)
if(w.b>=4)throw B.c(w.zi())
if(e==null)e=B.KP(d)
x=w.b
if((x&1)!==0)w.uW(d,e)
else if((x&3)===0)w.zE().H(0,new A.GM(d,e))},
d1(d){var x=this,w=x.b
if((w&4)!==0)return x.VV()
if(w>=4)throw B.c(x.zi())
x.UT()
return x.VV()},
UT(){var x=this.b|=4
if((x&1)!==0)this.oN()
else if((x&3)===0)this.zE().H(0,D.k6)},
ze(d,e){var x=this,w=x.b
if((w&1)!==0)x.qF(e)
else if((w&3)===0)x.zE().H(0,new A.lG(e,B.q(x).i("lG<1>")))},
Us(d,e,f,g){var x,w,v,u,t,s,r,q,p=this
if((p.b&3)!==0)throw B.c(B.af("Stream has already been listened to."))
x=$.as
w=g?1:0
v=A.aOu(x,d)
u=A.b_t(x,e)
t=f==null?A.b2P():f
s=new A.yl(p,v,u,t,x,w,B.q(p).i("yl<1>"))
r=p.ganZ()
w=p.b|=1
if((w&8)!==0){q=p.a
q.sPo(s)
q.xZ(0)}else p.a=s
s.aqb(r)
s.IH(new A.awu(p))
return s},
ap4(d){var x,w,v,u,t,s,r,q=this,p=null
if((q.b&8)!==0)p=q.a.bf(0)
q.a=null
q.b=q.b&4294967286|2
x=q.r
if(x!=null)if(p==null)try{w=x.$0()
if(y.g.b(w))p=w}catch(t){v=B.ay(t)
u=B.b5(t)
s=new B.an($.as,y.o)
s.zh(v,u)
p=s}else p=p.jD(x)
r=new A.awt(q)
if(p!=null)p=p.jD(r)
else r.$0()
return p},
$iXn:1}
A.a3s.prototype={
qF(d){this.goQ().ze(0,d)},
uW(d,e){this.goQ().aeC(d,e)},
oN(){this.goQ().afS()}}
A.Zh.prototype={
qF(d){this.goQ().qm(new A.lG(d,this.$ti.i("lG<1>")))},
uW(d,e){this.goQ().qm(new A.GM(d,e))},
oN(){this.goQ().qm(D.k6)}}
A.pq.prototype={}
A.zk.prototype={}
A.jn.prototype={
gD(d){return(B.fV(this.a)^892482866)>>>0},
k(d,e){if(e==null)return!1
if(this===e)return!0
return e instanceof A.jn&&e.a===this.a}}
A.yl.prototype={
Up(){return this.w.ap4(this)},
zf(){var x=this.w
if((x.b&8)!==0)x.a.Fq(0)
A.aEv(x.e)},
zg(){var x=this.w
if((x.b&8)!==0)x.a.xZ(0)
A.aEv(x.f)}}
A.tK.prototype={
H(d,e){this.a.H(0,e)},
qQ(d,e){this.a.qQ(d,e)},
asd(d){return this.qQ(d,null)},
d1(d){return this.a.d1(0)}}
A.ye.prototype={
aqb(d){var x=this
if(d==null)return
x.r=d
if(d.c!=null){x.e=(x.e|64)>>>0
d.yG(x)}},
O7(d){this.a=A.aOu(this.d,d)},
Fq(d){var x,w,v=this,u=v.e
if((u&8)!==0)return
x=(u+128|4)>>>0
v.e=x
if(u<128){w=v.r
if(w!=null)if(w.a===1)w.a=3}if((u&4)===0&&(x&32)===0)v.IH(v.gUq())},
xZ(d){var x=this,w=x.e
if((w&8)!==0)return
if(w>=128){w=x.e=w-128
if(w<128)if((w&64)!==0&&x.r.c!=null)x.r.yG(x)
else{w=(w&4294967291)>>>0
x.e=w
if((w&32)===0)x.IH(x.gUr())}}},
bf(d){var x=this,w=(x.e&4294967279)>>>0
x.e=w
if((w&8)===0)x.Hz()
w=x.f
return w==null?$.zF():w},
Hz(){var x,w=this,v=w.e=(w.e|8)>>>0
if((v&64)!==0){x=w.r
if(x.a===1)x.a=3}if((v&32)===0)w.r=null
w.f=w.Up()},
ze(d,e){var x=this,w=x.e
if((w&8)!==0)return
if(w<32)x.qF(e)
else x.qm(new A.lG(e,B.q(x).i("lG<1>")))},
aeC(d,e){var x=this.e
if((x&8)!==0)return
if(x<32)this.uW(d,e)
else this.qm(new A.GM(d,e))},
afS(){var x=this,w=x.e
if((w&8)!==0)return
w=(w|2)>>>0
x.e=w
if(w<32)x.oN()
else x.qm(D.k6)},
zf(){},
zg(){},
Up(){return null},
qm(d){var x,w=this,v=w.r
if(v==null)v=new A.zi(B.q(w).i("zi<1>"))
w.r=v
v.H(0,d)
x=w.e
if((x&64)===0){x=(x|64)>>>0
w.e=x
if(x<128)v.yG(w)}},
qF(d){var x=this,w=x.e
x.e=(w|32)>>>0
x.d.y0(x.a,d)
x.e=(x.e&4294967263)>>>0
x.HJ((w&4)!==0)},
uW(d,e){var x,w=this,v=w.e,u=new A.arA(w,d,e)
if((v&1)!==0){w.e=(v|16)>>>0
w.Hz()
x=w.f
if(x!=null&&x!==$.zF())x.jD(u)
else u.$0()}else{u.$0()
w.HJ((v&4)!==0)}},
oN(){var x,w=this,v=new A.arz(w)
w.Hz()
w.e=(w.e|16)>>>0
x=w.f
if(x!=null&&x!==$.zF())x.jD(v)
else v.$0()},
IH(d){var x=this,w=x.e
x.e=(w|32)>>>0
d.$0()
x.e=(x.e&4294967263)>>>0
x.HJ((w&4)!==0)},
HJ(d){var x,w,v=this,u=v.e
if((u&64)!==0&&v.r.c==null){u=v.e=(u&4294967231)>>>0
if((u&4)!==0)if(u<128){x=v.r
x=x==null?null:x.c==null
x=x!==!1}else x=!1
else x=!1
if(x){u=(u&4294967291)>>>0
v.e=u}}for(;!0;d=w){if((u&8)!==0){v.r=null
return}w=(u&4)!==0
if(d===w)break
v.e=(u^32)>>>0
if(w)v.zf()
else v.zg()
u=(v.e&4294967263)>>>0
v.e=u}if((u&64)!==0&&u<128)v.r.yG(v)},
$ils:1}
A.IL.prototype={
mq(d,e,f,g){return this.a.Us(d,g,f,e===!0)}}
A.a_b.prototype={
grY(d){return this.a},
srY(d,e){return this.a=e}}
A.lG.prototype={
Ow(d){d.qF(this.b)}}
A.GM.prototype={
Ow(d){d.uW(this.b,this.c)}}
A.asG.prototype={
Ow(d){d.oN()},
grY(d){return null},
srY(d,e){throw B.c(B.af("No events after a done."))}}
A.a1p.prototype={
yG(d){var x=this,w=x.a
if(w===1)return
if(w>=1){x.a=1
return}B.i1(new A.av3(x,d))
x.a=1}}
A.zi.prototype={
H(d,e){var x=this,w=x.c
if(w==null)x.b=x.c=e
else{w.srY(0,e)
x.c=e}}}
A.iX.prototype={
gD(d){return B.ag(this.a,null,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
k(d,e){var x
if(e==null)return!1
if(J.Y(e)!==B.I(this))return!1
if(e instanceof A.iX)if(J.h(e.a,this.a))x=!0
else x=!1
else x=!1
return x},
ay9(d,e){return this.a.$2(d,e)}}
var z=a.updateTypes(["~()","~(r?)","~(r[cv?])","aw<@>()","~(@)","~(r,cv)"])
A.awu.prototype={
$0(){A.aEv(this.a.d)},
$S:0}
A.awt.prototype={
$0(){var x=this.a.c
if(x!=null&&(x.a&30)===0)x.ur(null)},
$S:0}
A.arA.prototype={
$0(){var x,w,v=this.a,u=v.e
if((u&8)!==0&&(u&16)===0)return
v.e=(u|32)>>>0
x=v.b
u=this.b
w=v.d
if(y.l.b(x))w.a5y(x,u,this.c)
else w.y0(x,u)
v.e=(v.e&4294967263)>>>0},
$S:0}
A.arz.prototype={
$0(){var x=this.a,w=x.e
if((w&16)===0)return
x.e=(w|42)>>>0
x.d.tx(x.c)
x.e=(x.e&4294967263)>>>0},
$S:0}
A.av3.prototype={
$0(){var x,w,v=this.a,u=v.a
v.a=0
if(u===3)return
x=v.b
w=x.grY(x)
v.b=w
if(w==null)v.c=null
x.Ow(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_2,v=a._static_0,u=a._instance_1i,t=a._instance_0u,s=a.installInstanceTearOff,r=a._instance_0i
x(A,"b2O","b1R",4)
w(A,"b2Q","b1T",5)
v(A,"b2P","b1S",0)
u(A.tJ.prototype,"gne","H",1)
var q
t(q=A.yl.prototype,"gUq","zf",0)
t(q,"gUr","zg",0)
u(q=A.tK.prototype,"gne","H",1)
s(q,"gasc",0,1,function(){return[null]},["$2","$1"],["qQ","asd"],2,0,0)
r(q,"gr_","d1",3)
t(q=A.ye.prototype,"gUq","zf",0)
t(q,"gUr","zg",0)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.r,[A.tJ,A.a3s,A.Zh,A.ye,A.tK,A.a_b,A.asG,A.a1p,A.iX])
w(B.eg,[A.awu,A.awt,A.arA,A.arz,A.av3])
w(A.tJ,[A.pq,A.zk])
v(A.IL,B.dJ)
v(A.jn,A.IL)
v(A.yl,A.ye)
w(A.a_b,[A.lG,A.GM])
v(A.zi,A.a1p)
x(A.pq,A.Zh)
x(A.zk,A.a3s)})()
B.cT(b.typeUniverse,JSON.parse('{"tJ":{"Xn":["1"]},"pq":{"Zh":["1"],"tJ":["1"],"Xn":["1"]},"zk":{"tJ":["1"],"Xn":["1"]},"jn":{"IL":["1"],"dJ":["1"],"dJ.T":"1"},"yl":{"ye":["1"],"ls":["1"]},"ye":{"ls":["1"]},"IL":{"dJ":["1"]}}'))
B.js(b.typeUniverse,JSON.parse('{"a3s":1,"a_b":1,"a1p":1}'))
var y={g:B.w("aw<~>"),n:B.w("r"),o:B.w("an<~>"),i:B.w("~(r)"),l:B.w("~(r,cv)")};(function constants(){D.k6=new A.asG()})();(function staticFields(){$.aQ_=1})()}
$__dart_deferred_initializers__["cPBrRttZqng6H9xYn8Zu7PI5oSI="] = $__dart_deferred_initializers__.current
