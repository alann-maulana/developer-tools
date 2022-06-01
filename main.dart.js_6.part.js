self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
aDm(d,e,f,g,h){return g?new A.zk(d,e,f,null,h.i("zk<0>")):new A.pq(d,e,f,null,h.i("pq<0>"))},
aEw(d){var x,w,v
if(d==null)return
try{d.$0()}catch(v){x=B.ay(v)
w=B.b5(v)
B.zv(x,w)}},
aOv(d,e){return e==null?A.b2P():e},
b_v(d,e){if(e==null)e=A.b2R()
if(y.l.b(e))return d.OL(e)
if(y.i.b(e))return e
throw B.c(B.bs("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
b1S(d){},
b1U(d,e){B.zv(d,e)},
b1T(){},
tJ:function tJ(){},
aww:function aww(d){this.a=d},
awv:function awv(d){this.a=d},
a3t:function a3t(){},
Zi:function Zi(){},
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
arC:function arC(d,e,f){this.a=d
this.b=e
this.c=f},
arB:function arB(d){this.a=d},
IL:function IL(){},
a_c:function a_c(){},
lG:function lG(d,e){this.b=d
this.a=null
this.$ti=e},
GM:function GM(d,e){this.b=d
this.c=e
this.a=null},
asI:function asI(){},
a1q:function a1q(){},
av5:function av5(d,e){this.a=d
this.b=e},
zi:function zi(d){var _=this
_.c=_.b=null
_.a=0
_.$ti=d},
iY:function iY(d,e){this.a=d
this.c=e}},B,D,C,J
A=a.updateHolder(c[20],A)
B=c[0]
D=c[57]
C=c[2]
J=c[1]
A.tJ.prototype={
gao0(){if((this.b&8)===0)return this.a
return this.a.gPp()},
zE(){var x,w=this
if((w.b&8)===0){x=w.a
return x==null?w.a=new A.zi(B.q(w).i("zi<1>")):x}x=w.a.gPp()
return x},
goR(){var x=this.a
return(this.b&8)!==0?x.gPp():x},
zi(){if((this.b&4)!==0)return new B.mV("Cannot add event after closing")
return new B.mV("Cannot add event while adding a stream")},
VW(){var x=this.c
if(x==null)x=this.c=(this.b&2)!==0?$.zF():new B.an($.as,y.o)
return x},
H(d,e){if(this.b>=4)throw B.c(this.zi())
this.ze(0,e)},
qR(d,e){var x,w=this
B.ha(d,"error",y.n)
if(w.b>=4)throw B.c(w.zi())
if(e==null)e=B.KP(d)
x=w.b
if((x&1)!==0)w.uW(d,e)
else if((x&3)===0)w.zE().H(0,new A.GM(d,e))},
d1(d){var x=this,w=x.b
if((w&4)!==0)return x.VW()
if(w>=4)throw B.c(x.zi())
x.UU()
return x.VW()},
UU(){var x=this.b|=4
if((x&1)!==0)this.oO()
else if((x&3)===0)this.zE().H(0,D.k7)},
ze(d,e){var x=this,w=x.b
if((w&1)!==0)x.qG(e)
else if((w&3)===0)x.zE().H(0,new A.lG(e,B.q(x).i("lG<1>")))},
Ut(d,e,f,g){var x,w,v,u,t,s,r,q,p=this
if((p.b&3)!==0)throw B.c(B.af("Stream has already been listened to."))
x=$.as
w=g?1:0
v=A.aOv(x,d)
u=A.b_v(x,e)
t=f==null?A.b2Q():f
s=new A.yl(p,v,u,t,x,w,B.q(p).i("yl<1>"))
r=p.gao0()
w=p.b|=1
if((w&8)!==0){q=p.a
q.sPp(s)
q.xZ(0)}else p.a=s
s.aqd(r)
s.II(new A.aww(p))
return s},
ap6(d){var x,w,v,u,t,s,r,q=this,p=null
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
r=new A.awv(q)
if(p!=null)p=p.jD(r)
else r.$0()
return p},
$iXo:1}
A.a3t.prototype={
qG(d){this.goR().ze(0,d)},
uW(d,e){this.goR().aeE(d,e)},
oO(){this.goR().afU()}}
A.Zi.prototype={
qG(d){this.goR().qn(new A.lG(d,this.$ti.i("lG<1>")))},
uW(d,e){this.goR().qn(new A.GM(d,e))},
oO(){this.goR().qn(D.k7)}}
A.pq.prototype={}
A.zk.prototype={}
A.jn.prototype={
gD(d){return(B.fV(this.a)^892482866)>>>0},
k(d,e){if(e==null)return!1
if(this===e)return!0
return e instanceof A.jn&&e.a===this.a}}
A.yl.prototype={
Uq(){return this.w.ap6(this)},
zf(){var x=this.w
if((x.b&8)!==0)x.a.Fr(0)
A.aEw(x.e)},
zg(){var x=this.w
if((x.b&8)!==0)x.a.xZ(0)
A.aEw(x.f)}}
A.tK.prototype={
H(d,e){this.a.H(0,e)},
qR(d,e){this.a.qR(d,e)},
asf(d){return this.qR(d,null)},
d1(d){return this.a.d1(0)}}
A.ye.prototype={
aqd(d){var x=this
if(d==null)return
x.r=d
if(d.c!=null){x.e=(x.e|64)>>>0
d.yG(x)}},
O8(d){this.a=A.aOv(this.d,d)},
Fr(d){var x,w,v=this,u=v.e
if((u&8)!==0)return
x=(u+128|4)>>>0
v.e=x
if(u<128){w=v.r
if(w!=null)if(w.a===1)w.a=3}if((u&4)===0&&(x&32)===0)v.II(v.gUr())},
xZ(d){var x=this,w=x.e
if((w&8)!==0)return
if(w>=128){w=x.e=w-128
if(w<128)if((w&64)!==0&&x.r.c!=null)x.r.yG(x)
else{w=(w&4294967291)>>>0
x.e=w
if((w&32)===0)x.II(x.gUs())}}},
bf(d){var x=this,w=(x.e&4294967279)>>>0
x.e=w
if((w&8)===0)x.HA()
w=x.f
return w==null?$.zF():w},
HA(){var x,w=this,v=w.e=(w.e|8)>>>0
if((v&64)!==0){x=w.r
if(x.a===1)x.a=3}if((v&32)===0)w.r=null
w.f=w.Uq()},
ze(d,e){var x=this,w=x.e
if((w&8)!==0)return
if(w<32)x.qG(e)
else x.qn(new A.lG(e,B.q(x).i("lG<1>")))},
aeE(d,e){var x=this.e
if((x&8)!==0)return
if(x<32)this.uW(d,e)
else this.qn(new A.GM(d,e))},
afU(){var x=this,w=x.e
if((w&8)!==0)return
w=(w|2)>>>0
x.e=w
if(w<32)x.oO()
else x.qn(D.k7)},
zf(){},
zg(){},
Uq(){return null},
qn(d){var x,w=this,v=w.r
if(v==null)v=new A.zi(B.q(w).i("zi<1>"))
w.r=v
v.H(0,d)
x=w.e
if((x&64)===0){x=(x|64)>>>0
w.e=x
if(x<128)v.yG(w)}},
qG(d){var x=this,w=x.e
x.e=(w|32)>>>0
x.d.y0(x.a,d)
x.e=(x.e&4294967263)>>>0
x.HK((w&4)!==0)},
uW(d,e){var x,w=this,v=w.e,u=new A.arC(w,d,e)
if((v&1)!==0){w.e=(v|16)>>>0
w.HA()
x=w.f
if(x!=null&&x!==$.zF())x.jD(u)
else u.$0()}else{u.$0()
w.HK((v&4)!==0)}},
oO(){var x,w=this,v=new A.arB(w)
w.HA()
w.e=(w.e|16)>>>0
x=w.f
if(x!=null&&x!==$.zF())x.jD(v)
else v.$0()},
II(d){var x=this,w=x.e
x.e=(w|32)>>>0
d.$0()
x.e=(x.e&4294967263)>>>0
x.HK((w&4)!==0)},
HK(d){var x,w,v=this,u=v.e
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
mq(d,e,f,g){return this.a.Ut(d,g,f,e===!0)}}
A.a_c.prototype={
grZ(d){return this.a},
srZ(d,e){return this.a=e}}
A.lG.prototype={
Ox(d){d.qG(this.b)}}
A.GM.prototype={
Ox(d){d.uW(this.b,this.c)}}
A.asI.prototype={
Ox(d){d.oO()},
grZ(d){return null},
srZ(d,e){throw B.c(B.af("No events after a done."))}}
A.a1q.prototype={
yG(d){var x=this,w=x.a
if(w===1)return
if(w>=1){x.a=1
return}B.i1(new A.av5(x,d))
x.a=1}}
A.zi.prototype={
H(d,e){var x=this,w=x.c
if(w==null)x.b=x.c=e
else{w.srZ(0,e)
x.c=e}}}
A.iY.prototype={
gD(d){return B.ag(this.a,null,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
k(d,e){var x
if(e==null)return!1
if(J.Y(e)!==B.I(this))return!1
if(e instanceof A.iY)if(J.h(e.a,this.a))x=!0
else x=!1
else x=!1
return x},
ayc(d,e){return this.a.$2(d,e)}}
var z=a.updateTypes(["~()","~(r?)","~(r[cv?])","aw<@>()","~(@)","~(r,cv)"])
A.aww.prototype={
$0(){A.aEw(this.a.d)},
$S:0}
A.awv.prototype={
$0(){var x=this.a.c
if(x!=null&&(x.a&30)===0)x.ur(null)},
$S:0}
A.arC.prototype={
$0(){var x,w,v=this.a,u=v.e
if((u&8)!==0&&(u&16)===0)return
v.e=(u|32)>>>0
x=v.b
u=this.b
w=v.d
if(y.l.b(x))w.a5A(x,u,this.c)
else w.y0(x,u)
v.e=(v.e&4294967263)>>>0},
$S:0}
A.arB.prototype={
$0(){var x=this.a,w=x.e
if((w&16)===0)return
x.e=(w|42)>>>0
x.d.tx(x.c)
x.e=(x.e&4294967263)>>>0},
$S:0}
A.av5.prototype={
$0(){var x,w,v=this.a,u=v.a
v.a=0
if(u===3)return
x=v.b
w=x.grZ(x)
v.b=w
if(w==null)v.c=null
x.Ox(this.b)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_2,v=a._static_0,u=a._instance_1i,t=a._instance_0u,s=a.installInstanceTearOff,r=a._instance_0i
x(A,"b2P","b1S",4)
w(A,"b2R","b1U",5)
v(A,"b2Q","b1T",0)
u(A.tJ.prototype,"gne","H",1)
var q
t(q=A.yl.prototype,"gUr","zf",0)
t(q,"gUs","zg",0)
u(q=A.tK.prototype,"gne","H",1)
s(q,"gase",0,1,function(){return[null]},["$2","$1"],["qR","asf"],2,0,0)
r(q,"gr0","d1",3)
t(q=A.ye.prototype,"gUr","zf",0)
t(q,"gUs","zg",0)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.r,[A.tJ,A.a3t,A.Zi,A.ye,A.tK,A.a_c,A.asI,A.a1q,A.iY])
w(B.eg,[A.aww,A.awv,A.arC,A.arB,A.av5])
w(A.tJ,[A.pq,A.zk])
v(A.IL,B.dJ)
v(A.jn,A.IL)
v(A.yl,A.ye)
w(A.a_c,[A.lG,A.GM])
v(A.zi,A.a1q)
x(A.pq,A.Zi)
x(A.zk,A.a3t)})()
B.cT(b.typeUniverse,JSON.parse('{"tJ":{"Xo":["1"]},"pq":{"Zi":["1"],"tJ":["1"],"Xo":["1"]},"zk":{"tJ":["1"],"Xo":["1"]},"jn":{"IL":["1"],"dJ":["1"],"dJ.T":"1"},"yl":{"ye":["1"],"ls":["1"]},"ye":{"ls":["1"]},"IL":{"dJ":["1"]}}'))
B.js(b.typeUniverse,JSON.parse('{"a3t":1,"a_c":1,"a1q":1}'))
var y={g:B.w("aw<~>"),n:B.w("r"),o:B.w("an<~>"),i:B.w("~(r)"),l:B.w("~(r,cv)")};(function constants(){D.k7=new A.asI()})();(function staticFields(){$.aQ1=1})()}
$__dart_deferred_initializers__["7+uBiLkV+iTKBqlFzh7QWV7jW6U="] = $__dart_deferred_initializers__.current
