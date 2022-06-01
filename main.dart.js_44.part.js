self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
aPQ(d){if(x.R.b(d))return d
throw B.c(B.hD(d,"uri","Value must be a String or a Uri"))},
aQ2(d,e){var w,v,u,t,s,r,q,p
for(w=e.length,v=1;v<w;++v){if(e[v]==null||e[v-1]!=null)continue
for(;w>=1;w=u){u=w-1
if(e[u]!=null)break}t=new B.bD("")
s=""+(d+"(")
t.a=s
r=B.ae(e)
q=r.i("iD<1>")
p=new B.iD(e,0,w,q)
p.z8(e,0,w,r.c)
q=s+new B.aD(p,new A.ayJ(),q.i("aD<aP.E,l>")).bt(0,", ")
t.a=q
t.a=q+("): part "+(v-1)+" was null, but part "+v+" was not.")
throw B.c(B.bs(t.j(0),null))}},
Mv:function Mv(d,e){this.a=d
this.b=e},
a8P:function a8P(){},
a8Q:function a8Q(){},
ayJ:function ayJ(){},
qV:function qV(){},
wp(d,e){var w,v,u,t,s,r=e.a8E(d)
e.nU(d)
if(r!=null)d=C.c.c7(d,r.length)
w=x.s
v=B.a([],w)
u=B.a([],w)
w=d.length
if(w!==0&&e.lf(C.c.a7(d,0))){u.push(d[0])
t=1}else{u.push("")
t=0}for(s=t;s<w;++s)if(e.lf(C.c.a7(d,s))){v.push(C.c.a3(d,t,s))
u.push(d[s])
t=s+1}if(t<w){v.push(C.c.c7(d,t))
u.push("")}return new A.ai3(e,r,v,u)},
ai3:function ai3(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g},
aMB(d){return new A.UL(d)},
UL:function UL(d){this.a=d},
aYY(){var w,v=null
if(A.aDG().gfH()!=="file")return $.K5()
w=A.aDG()
if(!C.c.f9(w.gf3(w),"/"))return $.K5()
if(D.tN(v,"a/b",v,v,v,v,v).P2()==="a\\b")return $.K6()
return $.aSw()},
aoN:function aoN(){},
V6:function V6(d,e,f){this.d=d
this.e=e
this.f=f},
Yu:function Yu(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=g},
YR:function YR(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=g},
aqU:function aqU(){},
aYL(d,e){var w=new B.dP(d),v=B.a([0],x.t),u=typeof e=="string"?B.po(e,0,null):x.u.a(e)
v=new A.anI(u,v,new Uint32Array(B.eS(w.eA(w))))
v.aee(w,e)
return v},
aKR(d,e){if(e<0)B.M(B.eI("Offset may not be negative, was "+e+"."))
else if(e>d.c.length)B.M(B.eI("Offset "+e+y.c+d.gm(d)+"."))
return new A.PA(d,e)},
anI:function anI(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null},
PA:function PA(d,e){this.a=d
this.b=e},
H3:function H3(d,e,f){this.a=d
this.b=e
this.c=f},
aWq(d,e){var w=A.aWr(B.a([A.b_F(d,!0)],x.Y)),v=new A.adI(e).$0(),u=C.b.j(C.d.gJ(w).b+1),t=A.aWs(w)?0:3,s=B.ae(w)
return new A.ado(w,v,null,1+Math.max(u.length,t),new B.aD(w,new A.adq(),s.i("aD<1,k>")).pO(0,E.JX),!A.b4g(new B.aD(w,new A.adr(),s.i("aD<1,r?>"))),new B.bD(""))},
aWs(d){var w,v,u
for(w=0;w<d.length-1;){v=d[w];++w
u=d[w]
if(v.b+1!==u.b&&J.h(v.c,u.c))return!1}return!0},
aWr(d){var w,v,u,t=A.b40(d,new A.adt(),x.C,x.K)
for(w=t.gbi(t),v=B.q(w),v=v.i("@<1>").aG(v.z[1]),w=new B.cr(J.aC(w.a),w.b,v.i("cr<1,2>")),v=v.z[1];w.t();){u=w.a
if(u==null)u=v.a(u)
J.a6a(u,new A.adu())}w=t.ghn(t)
v=B.q(w).i("ib<p.E,kt>")
return B.al(new B.ib(w,new A.adv(),v),!0,v.i("p.E"))},
b_F(d,e){return new A.h2(new A.atL(d).$0(),!0)},
b_H(d){var w,v,u,t,s,r,q=d.gaT(d)
if(!C.c.v(q,"\r\n"))return d
w=d.gbw(d)
v=w.gca(w)
for(w=q.length-1,u=0;u<w;++u)if(C.c.a7(q,u)===13&&C.c.a7(q,u+1)===10)--v
w=d.gbM(d)
t=d.gdl()
s=d.gbw(d)
s=s.ge_(s)
t=A.Xc(v,d.gbw(d).geG(),s,t)
s=B.nD(q,"\r\n","\n")
r=d.gcw(d)
return A.anJ(w,t,s,B.nD(r,"\r\n","\n"))},
b_I(d){var w,v,u,t,s,r,q
if(!C.c.f9(d.gcw(d),"\n"))return d
if(C.c.f9(d.gaT(d),"\n\n"))return d
w=C.c.a3(d.gcw(d),0,d.gcw(d).length-1)
v=d.gaT(d)
u=d.gbM(d)
t=d.gbw(d)
if(C.c.f9(d.gaT(d),"\n")){s=A.az9(d.gcw(d),d.gaT(d),d.gbM(d).geG())
s.toString
s=s+d.gbM(d).geG()+d.gm(d)===d.gcw(d).length}else s=!1
if(s){v=C.c.a3(d.gaT(d),0,d.gaT(d).length-1)
if(v.length===0)t=u
else{s=d.gbw(d)
s=s.gca(s)
r=d.gdl()
q=d.gbw(d)
q=q.ge_(q)
t=A.Xc(s-1,A.aOC(w),q-1,r)
s=d.gbM(d)
s=s.gca(s)
r=d.gbw(d)
u=s===r.gca(r)?t:d.gbM(d)}}return A.anJ(u,t,v,w)},
b_G(d){var w,v,u,t,s
if(d.gbw(d).geG()!==0)return d
w=d.gbw(d)
w=w.ge_(w)
v=d.gbM(d)
if(w===v.ge_(v))return d
u=C.c.a3(d.gaT(d),0,d.gaT(d).length-1)
w=d.gbM(d)
v=d.gbw(d)
v=v.gca(v)
t=d.gdl()
s=d.gbw(d)
s=s.ge_(s)
t=A.Xc(v-1,u.length-C.c.mo(u,"\n")-1,s-1,t)
return A.anJ(w,t,u,C.c.f9(d.gcw(d),"\n")?C.c.a3(d.gcw(d),0,d.gcw(d).length-1):d.gcw(d))},
aOC(d){var w=d.length
if(w===0)return 0
else if(C.c.W(d,w-1)===10)return w===1?0:w-C.c.EW(d,"\n",w-2)-1
else return w-C.c.mo(d,"\n")-1},
ado:function ado(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
adI:function adI(d){this.a=d},
adq:function adq(){},
adp:function adp(){},
adr:function adr(){},
adt:function adt(){},
adu:function adu(){},
adv:function adv(){},
ads:function ads(d){this.a=d},
adJ:function adJ(){},
adw:function adw(d){this.a=d},
adD:function adD(d,e,f){this.a=d
this.b=e
this.c=f},
adE:function adE(d,e){this.a=d
this.b=e},
adF:function adF(d){this.a=d},
adG:function adG(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
adB:function adB(d,e){this.a=d
this.b=e},
adC:function adC(d,e){this.a=d
this.b=e},
adx:function adx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ady:function ady(d,e,f){this.a=d
this.b=e
this.c=f},
adz:function adz(d,e,f){this.a=d
this.b=e
this.c=f},
adA:function adA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adH:function adH(d,e,f){this.a=d
this.b=e
this.c=f},
h2:function h2(d,e){this.a=d
this.b=e},
atL:function atL(d){this.a=d},
kt:function kt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xc(d,e,f,g){if(d<0)B.M(B.eI("Offset may not be negative, was "+d+"."))
else if(f<0)B.M(B.eI("Line may not be negative, was "+f+"."))
else if(e<0)B.M(B.eI("Column may not be negative, was "+e+"."))
return new A.kk(g,d,f,e)},
kk:function kk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xd:function Xd(){},
Xe:function Xe(){},
Fm:function Fm(){},
anJ(d,e,f,g){var w=new A.mU(g,d,e,f)
w.aef(d,e,f)
if(!C.c.v(g,f))B.M(B.bs('The context line "'+g+'" must contain "'+f+'".',null))
if(A.az9(g,f,d.geG())==null)B.M(B.bs('The span text "'+f+'" must start at column '+(d.geG()+1)+' in a line within "'+g+'".',null))
return w},
mU:function mU(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
aXQ(){if(!!self.location)return self.location.href
return null},
aXj(d){return new Uint16Array(d)},
aDG(){var w=A.aXQ()
if(w!=null)return B.po(w,0,null)
throw B.c(B.R("'Uri.base' is not supported"))},
b40(d,e,f,g){var w,v,u,t,s,r=B.E(g,f.i("u<0>"))
for(w=f.i("i<0>"),v=0;v<1;++v){u=d[v]
t=e.$1(u)
s=r.h(0,t)
if(s==null){s=B.a([],w)
r.l(0,t,s)
t=s}else t=s
J.ed(t,u)}return r},
aEI(){var w,v,u,t,s=null
try{s=A.aDG()}catch(w){if(x.L.b(B.ay(w))){v=$.axY
if(v!=null)return v
throw w}else throw w}if(J.h(s,$.aPo)){v=$.axY
v.toString
return v}$.aPo=s
if($.aAl()==$.K5())v=$.axY=s.a5(".").j(0)
else{u=s.P2()
t=u.length-1
v=$.axY=t===0?u:C.c.a3(u,0,t)}return v},
aQP(d){var w
if(!(d>=65&&d<=90))w=d>=97&&d<=122
else w=!0
return w},
aQR(d,e){var w=d.length,v=e+2
if(w<v)return!1
if(!A.aQP(C.c.W(d,e)))return!1
if(C.c.W(d,e+1)!==58)return!1
if(w===v)return!0
return C.c.W(d,v)===47},
b4g(d){var w,v,u,t
if(d.gm(d)===0)return!0
w=d.gU(d)
for(v=B.dZ(d,1,null,d.$ti.i("aP.E")),u=v.$ti,v=new B.aT(v,v.gm(v),u.i("aT<aP.E>")),u=u.i("aP.E");v.t();){t=v.d
if(!J.h(t==null?u.a(t):t,w))return!1}return!0},
b4Z(d,e){var w=C.d.e5(d,null)
if(w<0)throw B.c(B.bs(B.e(d)+" contains no null elements.",null))
d[w]=e},
aRq(d,e){var w=C.d.e5(d,e)
if(w<0)throw B.c(B.bs(B.e(d)+" contains no elements matching "+e.j(0)+".",null))
d[w]=null},
b3p(d,e){var w,v,u,t
for(w=new B.dP(d),v=x.V,w=new B.aT(w,w.gm(w),v.i("aT<J.E>")),v=v.i("J.E"),u=0;w.t();){t=w.d
if((t==null?v.a(t):t)===e)++u}return u},
az9(d,e,f){var w,v,u
if(e.length===0)for(w=0;!0;){v=C.c.h4(d,"\n",w)
if(v===-1)return d.length-w>=f?w:null
if(v-w>=f)return w
w=v+1}v=C.c.e5(d,e)
for(;v!==-1;){u=v===0?0:C.c.EW(d,"\n",v-1)+1
if(f===v-u)return u
v=C.c.h4(d,e,v+1)}return null}},B,C,J,D,E,F
A=a.updateHolder(c[19],A)
B=c[0]
C=c[2]
J=c[1]
D=c[33]
E=c[56]
F=c[28]
A.Mv.prototype={
asa(d,e){var w,v=null
A.aQ2("absolute",B.a([e,null,null,null,null,null,null],x.m))
w=this.a
w=w.i1(e)>0&&!w.nU(e)
if(w)return e
w=this.b
return this.a3r(0,w==null?A.aEI():w,e,v,v,v,v,v,v)},
a3r(d,e,f,g,h,i,j,k,l){var w=B.a([e,f,g,h,i,j,k,l],x.m)
A.aQ2("join",w)
return this.axj(new B.eO(w,x.y))},
axi(d,e,f){return this.a3r(d,e,f,null,null,null,null,null,null)},
axj(d){var w,v,u,t,s,r,q,p,o
for(w=d.ga9(d),v=new B.lB(w,new A.a8P(),d.$ti.i("lB<p.E>")),u=this.a,t=!1,s=!1,r="";v.t();){q=w.gO(w)
if(u.nU(q)&&s){p=A.wp(q,u)
o=r.charCodeAt(0)==0?r:r
r=C.c.a3(o,0,u.tw(o,!0))
p.b=r
if(u.xh(r))p.e[0]=u.gq8()
r=""+p.j(0)}else if(u.i1(q)>0){s=!u.nU(q)
r=""+q}else{if(!(q.length!==0&&u.Mb(q[0])))if(t)r+=u.gq8()
r+=q}t=u.xh(q)}return r.charCodeAt(0)==0?r:r},
ov(d,e){var w=A.wp(e,this.a),v=w.d,u=B.ae(v).i("aL<1>")
u=B.al(new B.aL(v,new A.a8Q(),u),!0,u.i("p.E"))
w.d=u
v=w.b
if(v!=null)C.d.f1(u,0,v)
return w.d},
O6(d,e){var w
if(!this.amJ(e))return e
w=A.wp(e,this.a)
w.xj(0)
return w.j(0)},
amJ(d){var w,v,u,t,s,r,q,p,o=this.a,n=o.i1(d)
if(n!==0){if(o===$.K6())for(w=0;w<n;++w)if(C.c.a7(d,w)===47)return!0
v=n
u=47}else{v=0
u=null}for(t=new B.dP(d).a,s=t.length,w=v,r=null;w<s;++w,r=u,u=q){q=C.c.W(t,w)
if(o.lf(q)){if(o===$.K6()&&q===47)return!0
if(u!=null&&o.lf(u))return!0
if(u===46)p=r==null||r===46||o.lf(r)
else p=!1
if(p)return!0}}if(u==null)return!0
if(o.lf(u))return!0
if(u===46)o=r==null||o.lf(r)||r===46
else o=!1
if(o)return!0
return!1},
aA1(d){var w,v,u,t,s=this,r='Unable to find a path to "',q=s.a,p=q.i1(d)
if(p<=0)return s.O6(0,d)
p=s.b
w=p==null?A.aEI():p
if(q.i1(w)<=0&&q.i1(d)>0)return s.O6(0,d)
if(q.i1(d)<=0||q.nU(d))d=s.asa(0,d)
if(q.i1(d)<=0&&q.i1(w)>0)throw B.c(A.aMB(r+d+'" from "'+w+'".'))
v=A.wp(w,q)
v.xj(0)
u=A.wp(d,q)
u.xj(0)
p=v.d
if(p.length!==0&&J.h(p[0],"."))return u.j(0)
p=v.b
t=u.b
if(p!=t)p=p==null||t==null||!q.Ow(p,t)
else p=!1
if(p)return u.j(0)
while(!0){p=v.d
if(p.length!==0){t=u.d
p=t.length!==0&&q.Ow(p[0],t[0])}else p=!1
if(!p)break
C.d.fF(v.d,0)
C.d.fF(v.e,1)
C.d.fF(u.d,0)
C.d.fF(u.e,1)}p=v.d
if(p.length!==0&&J.h(p[0],".."))throw B.c(A.aMB(r+d+'" from "'+w+'".'))
p=x.N
C.d.wV(u.d,0,B.at(v.d.length,"..",!1,p))
t=u.e
t[0]=""
C.d.wV(t,1,B.at(v.d.length,q.gq8(),!1,p))
q=u.d
p=q.length
if(p===0)return"."
if(p>1&&J.h(C.d.gJ(q),".")){C.d.hb(u.d)
q=u.e
q.pop()
q.pop()
q.push("")}u.b=""
u.a5j()
return u.j(0)},
a5Q(d){var w,v=this.a
if(v.i1(d)<=0)return v.a5a(d)
else{w=this.b
return v.Ks(this.axi(0,w==null?A.aEI():w,d))}},
a4P(d){var w,v,u=this,t=A.aPQ(d)
if(t.gfH()==="file"&&u.a===$.K5())return t.j(0)
else if(t.gfH()!=="file"&&t.gfH()!==""&&u.a!==$.K5())return t.j(0)
w=u.O6(0,u.a.Ov(A.aPQ(t)))
v=u.aA1(w)
return u.ov(0,v).length>u.ov(0,w).length?w:v}}
A.qV.prototype={
a8E(d){var w=this.i1(d)
if(w>0)return C.c.a3(d,0,w)
return this.nU(d)?d[0]:null},
a5a(d){var w,v=null,u=d.length
if(u===0)return D.tN(v,v,v,v,v,v,v)
w=new A.Mv(this,".").ov(0,d)
if(this.lf(C.c.W(d,u-1)))C.d.H(w,"")
return D.tN(v,v,w,v,v,v,v)},
Ow(d,e){return d===e}}
A.ai3.prototype={
gNq(){var w=this.d
if(w.length!==0)w=J.h(C.d.gJ(w),"")||!J.h(C.d.gJ(this.e),"")
else w=!1
return w},
a5j(){var w,v,u=this
while(!0){w=u.d
if(!(w.length!==0&&J.h(C.d.gJ(w),"")))break
C.d.hb(u.d)
u.e.pop()}w=u.e
v=w.length
if(v!==0)w[v-1]=""},
xj(d){var w,v,u,t,s,r,q=this,p=B.a([],x.s)
for(w=q.d,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,B.F)(w),++t){s=w[t]
r=J.fi(s)
if(!(r.k(s,".")||r.k(s,"")))if(r.k(s,".."))if(p.length!==0)p.pop()
else ++u
else p.push(s)}if(q.b==null)C.d.wV(p,0,B.at(u,"..",!1,x.N))
if(p.length===0&&q.b==null)p.push(".")
q.d=p
w=q.a
q.e=B.at(p.length+1,w.gq8(),!0,x.N)
v=q.b
if(v==null||p.length===0||!w.xh(v))q.e[0]=""
v=q.b
if(v!=null&&w===$.K6()){v.toString
q.b=B.nD(v,"/","\\")}q.a5j()},
j(d){var w,v=this,u=v.b
u=u!=null?""+u:""
for(w=0;w<v.d.length;++w)u=u+B.e(v.e[w])+B.e(v.d[w])
u+=B.e(C.d.gJ(v.e))
return u.charCodeAt(0)==0?u:u}}
A.UL.prototype={
j(d){return"PathException: "+this.a},
$ibK:1}
A.aoN.prototype={
j(d){return this.gae(this)}}
A.V6.prototype={
Mb(d){return C.c.v(d,"/")},
lf(d){return d===47},
xh(d){var w=d.length
return w!==0&&C.c.W(d,w-1)!==47},
tw(d,e){if(d.length!==0&&C.c.a7(d,0)===47)return 1
return 0},
i1(d){return this.tw(d,!1)},
nU(d){return!1},
Ov(d){var w
if(d.gfH()===""||d.gfH()==="file"){w=d.gf3(d)
return B.aE8(w,0,w.length,C.Y,!1)}throw B.c(B.bs("Uri "+d.j(0)+" must have scheme 'file:'.",null))},
Ks(d){var w=null,v=A.wp(d,this),u=v.d
if(u.length===0)C.d.Z(u,B.a(["",""],x.s))
else if(v.gNq())C.d.H(v.d,"")
return D.tN(w,w,v.d,w,w,"file",w)},
gae(){return"posix"},
gq8(){return"/"}}
A.Yu.prototype={
Mb(d){return C.c.v(d,"/")},
lf(d){return d===47},
xh(d){var w=d.length
if(w===0)return!1
if(C.c.W(d,w-1)!==47)return!0
return C.c.f9(d,"://")&&this.i1(d)===w},
tw(d,e){var w,v,u,t,s=d.length
if(s===0)return 0
if(C.c.a7(d,0)===47)return 1
for(w=0;w<s;++w){v=C.c.a7(d,w)
if(v===47)return 0
if(v===58){if(w===0)return 0
u=C.c.h4(d,"/",C.c.dt(d,"//",w+1)?w+3:w)
if(u<=0)return s
if(!e||s<u+3)return u
if(!C.c.bc(d,"file://"))return u
if(!A.aQR(d,u+1))return u
t=u+3
return s===t?t:u+4}}return 0},
i1(d){return this.tw(d,!1)},
nU(d){return d.length!==0&&C.c.a7(d,0)===47},
Ov(d){return d.j(0)},
a5a(d){return B.po(d,0,null)},
Ks(d){return B.po(d,0,null)},
gae(){return"url"},
gq8(){return"/"}}
A.YR.prototype={
Mb(d){return C.c.v(d,"/")},
lf(d){return d===47||d===92},
xh(d){var w=d.length
if(w===0)return!1
w=C.c.W(d,w-1)
return!(w===47||w===92)},
tw(d,e){var w,v,u=d.length
if(u===0)return 0
w=C.c.a7(d,0)
if(w===47)return 1
if(w===92){if(u<2||C.c.a7(d,1)!==92)return 1
v=C.c.h4(d,"\\",2)
if(v>0){v=C.c.h4(d,"\\",v+1)
if(v>0)return v}return u}if(u<3)return 0
if(!A.aQP(w))return 0
if(C.c.a7(d,1)!==58)return 0
u=C.c.a7(d,2)
if(!(u===47||u===92))return 0
return 3},
i1(d){return this.tw(d,!1)},
nU(d){return this.i1(d)===1},
Ov(d){var w,v
if(d.gfH()!==""&&d.gfH()!=="file")throw B.c(B.bs("Uri "+d.j(0)+" must have scheme 'file:'.",null))
w=d.gf3(d)
if(d.glb(d)===""){if(w.length>=3&&C.c.bc(w,"/")&&A.aQR(w,1))w=C.c.OQ(w,"/","")}else w="\\\\"+d.glb(d)+w
v=B.nD(w,"/","\\")
return B.aE8(v,0,v.length,C.Y,!1)},
Ks(d){var w,v,u=null,t=A.wp(d,this),s=t.b
s.toString
if(C.c.bc(s,"\\\\")){w=new B.aL(B.a(s.split("\\"),x.s),new A.aqU(),x.U)
C.d.f1(t.d,0,w.gJ(w))
if(t.gNq())C.d.H(t.d,"")
return D.tN(w.gU(w),u,t.d,u,u,"file",u)}else{if(t.d.length===0||t.gNq())C.d.H(t.d,"")
s=t.d
v=t.b
v.toString
v=B.nD(v,"/","")
C.d.f1(s,0,B.nD(v,"\\",""))
return D.tN(u,u,t.d,u,u,"file",u)}},
atw(d,e){var w
if(d===e)return!0
if(d===47)return e===92
if(d===92)return e===47
if((d^e)!==32)return!1
w=d|32
return w>=97&&w<=122},
Ow(d,e){var w,v
if(d===e)return!0
w=d.length
if(w!==e.length)return!1
for(v=0;v<w;++v)if(!this.atw(C.c.a7(d,v),C.c.a7(e,v)))return!1
return!0},
gae(){return"windows"},
gq8(){return"\\"}}
A.anI.prototype={
gm(d){return this.c.length},
gaxq(d){return this.b.length},
aee(d,e){var w,v,u,t,s,r
for(w=this.c,v=w.length,u=this.b,t=0;t<v;++t){s=w[t]
if(s===13){r=t+1
if(r>=v||w[r]!==10)s=10}if(s===10)u.push(t+1)}},
tM(d){var w,v=this
if(d<0)throw B.c(B.eI("Offset may not be negative, was "+d+"."))
else if(d>v.c.length)throw B.c(B.eI("Offset "+d+y.c+v.gm(v)+"."))
w=v.b
if(d<C.d.gU(w))return-1
if(d>=C.d.gJ(w))return w.length-1
if(v.am_(d)){w=v.d
w.toString
return w}return v.d=v.ahX(d)-1},
am_(d){var w,v,u=this.d
if(u==null)return!1
w=this.b
if(d<w[u])return!1
v=w.length
if(u>=v-1||d<w[u+1])return!0
if(u>=v-2||d<w[u+2]){this.d=u+1
return!0}return!1},
ahX(d){var w,v,u=this.b,t=u.length-1
for(w=0;w<t;){v=w+C.b.bC(t-w,2)
if(u[v]>d)t=v
else w=v+1}return t},
G2(d){var w,v,u=this
if(d<0)throw B.c(B.eI("Offset may not be negative, was "+d+"."))
else if(d>u.c.length)throw B.c(B.eI("Offset "+d+" must be not be greater than the number of characters in the file, "+u.gm(u)+"."))
w=u.tM(d)
v=u.b[w]
if(v>d)throw B.c(B.eI("Line "+w+" comes after offset "+d+"."))
return d-v},
kq(d){var w,v,u,t,s=this
if(d<0)throw B.c(B.eI("Line may not be negative, was "+d+"."))
else{w=s.b
v=w.length
if(d>=v)throw B.c(B.eI("Line "+d+" must be less than the number of lines in the file, "+s.gaxq(s)+"."))}u=w[d]
if(u<=s.c.length){t=d+1
w=t<v&&u>=w[t]}else w=!0
if(w)throw B.c(B.eI("Line "+d+" doesn't have 0 columns."))
return u}}
A.PA.prototype={
gdl(){return this.a.a},
ge_(d){return this.a.tM(this.b)},
geG(){return this.a.G2(this.b)},
gca(d){return this.b}}
A.H3.prototype={
gdl(){return this.a.a},
gm(d){return this.c-this.b},
gbM(d){return A.aKR(this.a,this.b)},
gbw(d){return A.aKR(this.a,this.c)},
gaT(d){return B.dh(C.bv.c5(this.a.c,this.b,this.c),0,null)},
gcw(d){var w=this,v=w.a,u=w.c,t=v.tM(u)
if(v.G2(u)===0&&t!==0){if(u-w.b===0)return t===v.b.length-1?"":B.dh(C.bv.c5(v.c,v.kq(t),v.kq(t+1)),0,null)}else u=t===v.b.length-1?v.c.length:v.kq(t+1)
return B.dh(C.bv.c5(v.c,v.kq(v.tM(w.b)),u),0,null)},
aej(d,e,f){var w,v=this.c,u=this.b
if(v<u)throw B.c(B.bs("End "+v+" must come after start "+u+".",null))
else{w=this.a
if(v>w.c.length)throw B.c(B.eI("End "+v+y.c+w.gm(w)+"."))
else if(u<0)throw B.c(B.eI("Start may not be negative, was "+u+"."))}},
b9(d,e){var w
if(!(e instanceof A.H3))return this.ac4(0,e)
w=C.b.b9(this.b,e.b)
return w===0?C.b.b9(this.c,e.c):w},
k(d,e){var w=this
if(e==null)return!1
if(!x.T.b(e))return w.ac3(0,e)
return w.b===e.b&&w.c===e.c&&J.h(w.a.a,e.a.a)},
gD(d){return B.ag(this.b,this.c,this.a.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
$iaKS:1,
$imU:1}
A.ado.prototype={
awy(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.a
a0.a_H(C.d.gU(a2).c)
w=a0.e
v=B.at(w,a1,!1,x.H)
for(u=a0.r,w=w!==0,t=a0.b,s=0;s<a2.length;++s){r=a2[s]
if(s>0){q=a2[s-1]
p=q.c
o=r.c
if(!J.h(p,o)){a0.AO("\u2575")
u.a+="\n"
a0.a_H(o)}else if(q.b+1!==r.b){a0.as7("...")
u.a+="\n"}}for(p=r.d,o=B.ae(p).i("c9<1>"),n=new B.c9(p,o),n=new B.aT(n,n.gm(n),o.i("aT<aP.E>")),o=o.i("aP.E"),m=r.b,l=r.a;n.t();){k=n.d
if(k==null)k=o.a(k)
j=k.a
i=j.gbM(j)
i=i.ge_(i)
h=j.gbw(j)
if(i!==h.ge_(h)){i=j.gbM(j)
j=i.ge_(i)===m&&a0.am1(C.c.a3(l,0,j.gbM(j).geG()))}else j=!1
if(j){g=C.d.e5(v,a1)
if(g<0)B.M(B.bs(B.e(v)+" contains no null elements.",a1))
v[g]=k}}a0.as6(m)
u.a+=" "
a0.as5(r,v)
if(w)u.a+=" "
f=C.d.a2L(p,new A.adJ())
e=f===-1?a1:p[f]
o=e!=null
if(o){n=e.a
k=n.gbM(n)
k=k.ge_(k)===m?n.gbM(n).geG():0
j=n.gbw(n)
a0.as3(l,k,j.ge_(j)===m?n.gbw(n).geG():l.length,t)}else a0.AQ(l)
u.a+="\n"
if(o)a0.as4(r,e,v)
for(o=p.length,d=0;d<o;++d){p[d].toString
continue}}a0.AO("\u2575")
a2=u.a
return a2.charCodeAt(0)==0?a2:a2},
a_H(d){var w=this
if(!w.f||!x.R.b(d))w.AO("\u2577")
else{w.AO("\u250c")
w.iX(new A.adw(w),"\x1b[34m")
w.r.a+=" "+$.a5X().a4P(d)}w.r.a+="\n"},
AM(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j={}
j.a=!1
j.b=null
w=f==null
if(w)v=null
else v=k.b
for(u=e.length,t=k.b,w=!w,s=k.r,r=!1,q=0;q<u;++q){p=e[q]
o=p==null
if(o)n=null
else{m=p.a
m=m.gbM(m)
n=m.ge_(m)}if(o)l=null
else{m=p.a
m=m.gbw(m)
l=m.ge_(m)}if(w&&p===f){k.iX(new A.adD(k,n,d),v)
r=!0}else if(r)k.iX(new A.adE(k,p),v)
else if(o)if(j.a)k.iX(new A.adF(k),j.b)
else s.a+=" "
else k.iX(new A.adG(j,k,f,n,d,p,l),t)}},
as5(d,e){return this.AM(d,e,null)},
as3(d,e,f,g){var w=this
w.AQ(C.c.a3(d,0,e))
w.iX(new A.adx(w,d,e,f),g)
w.AQ(C.c.a3(d,f,d.length))},
as4(d,e,f){var w,v,u=this,t=u.b,s=e.a,r=s.gbM(s)
r=r.ge_(r)
w=s.gbw(s)
if(r===w.ge_(w)){u.Kq()
s=u.r
s.a+=" "
u.AM(d,f,e)
if(f.length!==0)s.a+=" "
u.iX(new A.ady(u,d,e),t)
s.a+="\n"}else{r=s.gbM(s)
w=d.b
if(r.ge_(r)===w){if(C.d.v(f,e))return
A.b4Z(f,e)
u.Kq()
s=u.r
s.a+=" "
u.AM(d,f,e)
u.iX(new A.adz(u,d,e),t)
s.a+="\n"}else{r=s.gbw(s)
if(r.ge_(r)===w){v=s.gbw(s).geG()===d.a.length
if(v&&!0){A.aRq(f,e)
return}u.Kq()
s=u.r
s.a+=" "
u.AM(d,f,e)
u.iX(new A.adA(u,v,d,e),t)
s.a+="\n"
A.aRq(f,e)}}}},
a_D(d,e,f){var w=f?0:1,v=this.r
w=v.a+=C.c.ab("\u2500",1+e+this.I1(C.c.a3(d.a,0,e+w))*3)
v.a=w+"^"},
arX(d,e){return this.a_D(d,e,!0)},
AQ(d){var w,v,u,t
for(w=new B.dP(d),v=x.V,w=new B.aT(w,w.gm(w),v.i("aT<J.E>")),u=this.r,v=v.i("J.E");w.t();){t=w.d
if(t==null)t=v.a(t)
if(t===9)u.a+=C.c.ab(" ",4)
else u.a+=B.ck(t)}},
AP(d,e,f){var w={}
w.a=f
if(e!=null)w.a=C.b.j(e+1)
this.iX(new A.adH(w,this,d),"\x1b[34m")},
AO(d){return this.AP(d,null,null)},
as7(d){return this.AP(null,null,d)},
as6(d){return this.AP(null,d,null)},
Kq(){return this.AP(null,null,null)},
I1(d){var w,v,u,t
for(w=new B.dP(d),v=x.V,w=new B.aT(w,w.gm(w),v.i("aT<J.E>")),v=v.i("J.E"),u=0;w.t();){t=w.d
if((t==null?v.a(t):t)===9)++u}return u},
am1(d){var w,v,u
for(w=new B.dP(d),v=x.V,w=new B.aT(w,w.gm(w),v.i("aT<J.E>")),v=v.i("J.E");w.t();){u=w.d
if(u==null)u=v.a(u)
if(u!==32&&u!==9)return!1}return!0},
iX(d,e){var w=this.b!=null
if(w&&e!=null)this.r.a+=e
d.$0()
if(w&&e!=null)this.r.a+="\x1b[0m"}}
A.h2.prototype={
j(d){var w,v,u=this.a,t=u.gbM(u)
t=t.ge_(t)
w=u.gbM(u).geG()
v=u.gbw(u)
u=""+"primary "+(""+t+":"+w+"-"+v.ge_(v)+":"+u.gbw(u).geG())
return u.charCodeAt(0)==0?u:u}}
A.kt.prototype={
j(d){return""+this.b+': "'+this.a+'" ('+C.d.bt(this.d,", ")+")"}}
A.kk.prototype={
MJ(d){var w=this.a
if(!J.h(w,d.gdl()))throw B.c(B.bs('Source URLs "'+B.e(w)+'" and "'+B.e(d.gdl())+"\" don't match.",null))
return Math.abs(this.b-d.gca(d))},
b9(d,e){var w=this.a
if(!J.h(w,e.gdl()))throw B.c(B.bs('Source URLs "'+B.e(w)+'" and "'+B.e(e.gdl())+"\" don't match.",null))
return this.b-e.gca(e)},
k(d,e){if(e==null)return!1
return x.F.b(e)&&J.h(this.a,e.gdl())&&this.b===e.gca(e)},
gD(d){var w=this.a
w=w==null?null:w.gD(w)
if(w==null)w=0
return w+this.b},
j(d){var w=this,v=B.I(w).j(0),u=w.a
return"<"+v+": "+w.b+" "+(B.e(u==null?"unknown source":u)+":"+(w.c+1)+":"+(w.d+1))+">"},
$ibp:1,
gdl(){return this.a},
gca(d){return this.b},
ge_(d){return this.c},
geG(){return this.d}}
A.Xd.prototype={
MJ(d){if(!J.h(this.a.a,d.gdl()))throw B.c(B.bs('Source URLs "'+B.e(this.gdl())+'" and "'+B.e(d.gdl())+"\" don't match.",null))
return Math.abs(this.b-d.gca(d))},
b9(d,e){if(!J.h(this.a.a,e.gdl()))throw B.c(B.bs('Source URLs "'+B.e(this.gdl())+'" and "'+B.e(e.gdl())+"\" don't match.",null))
return this.b-e.gca(e)},
k(d,e){if(e==null)return!1
return x.F.b(e)&&J.h(this.a.a,e.gdl())&&this.b===e.gca(e)},
gD(d){var w=this.a.a
w=w==null?null:w.gD(w)
if(w==null)w=0
return w+this.b},
j(d){var w=B.I(this).j(0),v=this.b,u=this.a,t=u.a
return"<"+w+": "+v+" "+(B.e(t==null?"unknown source":t)+":"+(u.tM(v)+1)+":"+(u.G2(v)+1))+">"},
$ibp:1,
$ikk:1}
A.Xe.prototype={
aef(d,e,f){var w,v=this.b,u=this.a
if(!J.h(v.gdl(),u.gdl()))throw B.c(B.bs('Source URLs "'+B.e(u.gdl())+'" and  "'+B.e(v.gdl())+"\" don't match.",null))
else if(v.gca(v)<u.gca(u))throw B.c(B.bs("End "+v.j(0)+" must come after start "+u.j(0)+".",null))
else{w=this.c
if(w.length!==u.MJ(v))throw B.c(B.bs('Text "'+w+'" must be '+u.MJ(v)+" characters long.",null))}},
gbM(d){return this.a},
gbw(d){return this.b},
gaT(d){return this.c}}
A.Fm.prototype={
gdl(){return this.gbM(this).gdl()},
gm(d){var w,v=this,u=v.gbw(v)
u=u.gca(u)
w=v.gbM(v)
return u-w.gca(w)},
b9(d,e){var w=this,v=w.gbM(w).b9(0,e.gbM(e))
return v===0?w.gbw(w).b9(0,e.gbw(e)):v},
axJ(d,e,f){var w,v,u=this,t=u.gbM(u)
t=""+("line "+(t.ge_(t)+1)+", column "+(u.gbM(u).geG()+1))
if(u.gdl()!=null){w=u.gdl()
w=t+(" of "+$.a5X().a4P(w))
t=w}t+=": "+e
v=u.awz(0,f)
if(v.length!==0)t=t+"\n"+v
return t.charCodeAt(0)==0?t:t},
awz(d,e){var w=this
if(!x.q.b(w)&&w.gm(w)===0)return""
return A.aWq(w,e).awy(0)},
k(d,e){var w=this
if(e==null)return!1
return x.I.b(e)&&w.gbM(w).k(0,e.gbM(e))&&w.gbw(w).k(0,e.gbw(e))},
gD(d){var w=this
return B.ag(w.gbM(w),w.gbw(w),C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var w=this
return"<"+B.I(w).j(0)+": from "+w.gbM(w).j(0)+" to "+w.gbw(w).j(0)+' "'+w.gaT(w)+'">'},
$ibp:1,
$ilq:1}
A.mU.prototype={
gcw(d){return this.d}}
var z=a.updateTypes(["t(h2)","k(kt)","r(kt)","r(h2)","k(h2,h2)","u<kt>(bO<r,u<h2>>)","mU()"])
A.a8P.prototype={
$1(d){return d!==""},
$S:7}
A.a8Q.prototype={
$1(d){return d.length!==0},
$S:7}
A.ayJ.prototype={
$1(d){return d==null?"null":'"'+d+'"'},
$S:177}
A.aqU.prototype={
$1(d){return d!==""},
$S:7}
A.adI.prototype={
$0(){return this.a},
$S:178}
A.adq.prototype={
$1(d){var w=d.d
w=new B.aL(w,new A.adp(),B.ae(w).i("aL<1>"))
return w.gm(w)},
$S:z+1}
A.adp.prototype={
$1(d){var w=d.a,v=w.gbM(w)
v=v.ge_(v)
w=w.gbw(w)
return v!==w.ge_(w)},
$S:z+0}
A.adr.prototype={
$1(d){return d.c},
$S:z+2}
A.adt.prototype={
$1(d){var w=d.a.gdl()
return w==null?new B.r():w},
$S:z+3}
A.adu.prototype={
$2(d,e){return d.a.b9(0,e.a)},
$S:z+4}
A.adv.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.gew(d),i=d.gn(d),h=B.a([],x.w)
for(w=J.aW(i),v=w.ga9(i),u=x.Y;v.t();){t=v.gO(v).a
s=t.gcw(t)
r=A.az9(s,t.gaT(t),t.gbM(t).geG())
r.toString
r=C.c.oU("\n",C.c.a3(s,0,r))
q=r.gm(r)
t=t.gbM(t)
p=t.ge_(t)-q
for(t=s.split("\n"),r=t.length,o=0;o<r;++o){n=t[o]
if(h.length===0||p>C.d.gJ(h).b)h.push(new A.kt(n,p,j,B.a([],u)));++p}}m=B.a([],u)
for(v=h.length,l=0,o=0;o<h.length;h.length===v||(0,B.F)(h),++o){n=h[o]
if(!!m.fixed$length)B.M(B.R("removeWhere"))
C.d.qF(m,new A.ads(n),!0)
k=m.length
for(u=w.bR(i,l),u=u.ga9(u);u.t();){t=u.gO(u)
r=t.a
r=r.gbM(r)
if(r.ge_(r)>n.b)break
m.push(t)}l+=m.length-k
C.d.Z(n.d,m)}return h},
$S:z+5}
A.ads.prototype={
$1(d){var w=d.a
w=w.gbw(w)
return w.ge_(w)<this.a.b},
$S:z+0}
A.adJ.prototype={
$1(d){return!0},
$S:z+0}
A.adw.prototype={
$0(){this.a.r.a+=C.c.ab("\u2500",2)+">"
return null},
$S:0}
A.adD.prototype={
$0(){var w=this.b===this.c.b?"\u250c":"\u2514"
this.a.r.a+=w},
$S:0}
A.adE.prototype={
$0(){var w=this.b==null?"\u2500":"\u253c"
this.a.r.a+=w},
$S:0}
A.adF.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:0}
A.adG.prototype={
$0(){var w,v,u=this,t=u.a,s=t.a?"\u253c":"\u2502"
if(u.c!=null)u.b.r.a+=s
else{w=u.e
v=w.b
if(u.d===v){w=u.b
w.iX(new A.adB(t,w),t.b)
t.a=!0
if(t.b==null)t.b=w.b}else{if(u.r===v){v=u.f.a
w=v.gbw(v).geG()===w.a.length}else w=!1
v=u.b
if(w)v.r.a+="\u2514"
else v.iX(new A.adC(v,s),t.b)}}},
$S:0}
A.adB.prototype={
$0(){var w=this.a.a?"\u252c":"\u250c"
this.b.r.a+=w},
$S:0}
A.adC.prototype={
$0(){this.a.r.a+=this.b},
$S:0}
A.adx.prototype={
$0(){var w=this
return w.a.AQ(C.c.a3(w.b,w.c,w.d))},
$S:0}
A.ady.prototype={
$0(){var w,v,u=this.a,t=this.c.a,s=t.gbM(t).geG(),r=t.gbw(t).geG()
t=this.b.a
w=u.I1(C.c.a3(t,0,s))
v=u.I1(C.c.a3(t,s,r))
s+=w*3
u=u.r
u.a+=C.c.ab(" ",s)
u.a+=C.c.ab("^",Math.max(r+(w+v)*3-s,1))},
$S:0}
A.adz.prototype={
$0(){var w=this.c.a
return this.a.arX(this.b,w.gbM(w).geG())},
$S:0}
A.adA.prototype={
$0(){var w,v=this,u=v.a
if(v.b)u.r.a+=C.c.ab("\u2500",3)
else{w=v.d.a
u.a_D(v.c,Math.max(w.gbw(w).geG()-1,0),!1)}},
$S:0}
A.adH.prototype={
$0(){var w=this.b,v=w.r,u=this.a.a
if(u==null)u=""
w=v.a+=C.c.ayB(u,w.d)
u=this.c
v.a=w+(u==null?"\u2502":u)},
$S:0}
A.atL.prototype={
$0(){var w,v,u,t,s=this.a
if(!(x.q.b(s)&&A.az9(s.gcw(s),s.gaT(s),s.gbM(s).geG())!=null)){w=s.gbM(s)
w=A.Xc(w.gca(w),0,0,s.gdl())
v=s.gbw(s)
v=v.gca(v)
u=s.gdl()
t=A.b3p(s.gaT(s),10)
s=A.anJ(w,A.Xc(v,A.aOC(s.gaT(s)),t,u),s.gaT(s),s.gaT(s))}return A.b_G(A.b_I(A.b_H(s)))},
$S:z+6};(function aliases(){var w=A.Fm.prototype
w.ac4=w.b9
w.ac3=w.k})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(B.r,[A.Mv,A.aoN,A.ai3,A.UL,A.anI,A.Xd,A.Fm,A.ado,A.h2,A.kt,A.kk])
w(B.bN,[A.a8P,A.a8Q,A.ayJ,A.aqU,A.adq,A.adp,A.adr,A.adt,A.adv,A.ads,A.adJ])
v(A.qV,A.aoN)
w(A.qV,[A.V6,A.Yu,A.YR])
v(A.PA,A.Xd)
w(A.Fm,[A.H3,A.Xe])
w(B.eg,[A.adI,A.adw,A.adD,A.adE,A.adF,A.adG,A.adB,A.adC,A.adx,A.ady,A.adz,A.adA,A.adH,A.atL])
v(A.adu,B.fL)
v(A.mU,A.Xe)})()
B.cT(b.typeUniverse,JSON.parse('{"UL":{"bK":[]},"V6":{"qV":[]},"Yu":{"qV":[]},"YR":{"qV":[]},"PA":{"kk":[],"bp":["kk"]},"H3":{"aKS":[],"mU":[],"lq":[],"bp":["lq"]},"kk":{"bp":["kk"]},"Xd":{"kk":[],"bp":["kk"]},"lq":{"bp":["lq"]},"Xe":{"lq":[],"bp":["lq"]},"Fm":{"lq":[],"bp":["lq"]},"mU":{"lq":[],"bp":["lq"]}}'))
var y={c:" must not be greater than the number of characters in the file, "}
var x=(function rtii(){var w=B.w
return{V:w("dP"),L:w("bK"),T:w("aKS"),s:w("i<l>"),Y:w("i<h2>"),w:w("i<kt>"),t:w("i<k>"),m:w("i<l?>"),K:w("r"),F:w("kk"),I:w("lq"),q:w("mU"),N:w("l"),R:w("tb"),U:w("aL<l>"),y:w("eO<l>"),C:w("h2"),u:w("tb?"),H:w("h2?")}})();(function constants(){E.JX=new F.qU(B.aR4(),B.w("qU<k>"))})();(function staticFields(){$.aPo=null
$.axY=null})();(function lazyInitializers(){var w=a.lazyFinal
w($,"baF","a5X",()=>new A.Mv(B.w("qV").a($.aAl()),null))
w($,"b80","aSw",()=>new A.V6(B.cu("/",!0),B.cu("[^/]$",!0),B.cu("^/",!0)))
w($,"b82","K6",()=>new A.YR(B.cu("[/\\\\]",!0),B.cu("[^/\\\\]$",!0),B.cu("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0),B.cu("^[/\\\\](?![/\\\\])",!0)))
w($,"b81","K5",()=>new A.Yu(B.cu("/",!0),B.cu("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0),B.cu("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0),B.cu("^/",!0)))
w($,"b8_","aAl",()=>A.aYY())})()}
$__dart_deferred_initializers__["WLVqxn/K9+dqZNjy/4JUuep41w8="] = $__dart_deferred_initializers__.current
