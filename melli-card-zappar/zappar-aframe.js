!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.ZapparAFrame = t())
    : (e.ZapparAFrame = t());
})(window, function () {
  return (function (e) {
    var t = {};
    function r(n) {
      if (t[n]) return t[n].exports;
      var a = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (r.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (r.t = function (e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var a in e)
            r.d(
              n,
              a,
              function (t) {
                return e[t];
              }.bind(null, a)
            );
        return n;
      }),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return r.d(t, "a", t), t;
      }),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.p = ""),
      r((r.s = 17))
    );
  })([
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(20),
        a = r(1);
      let i;
      function o() {
        return i || (i = n.initialize()), i;
      }
      (t.z = o),
        (t.cameraDefaultDeviceID = function (e) {
          return o().camera_default_device_id(e || !1);
        }),
        (t.invert = function (e) {
          let t = a.mat4.create();
          return a.mat4.invert(t, e), t;
        }),
        (t.projectionMatrixFromCameraModel = function (e, t, r) {
          return o().projection_matrix_from_camera_model(e, t, r);
        }),
        (t.drawPlane = function (e, t, r, n, a) {
          o().draw_plane(e, t, r, n, a);
        });
    },
    function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "glMatrix", function () {
          return n;
        }),
        r.d(t, "mat2", function () {
          return a;
        }),
        r.d(t, "mat2d", function () {
          return i;
        }),
        r.d(t, "mat3", function () {
          return o;
        }),
        r.d(t, "mat4", function () {
          return s;
        }),
        r.d(t, "quat", function () {
          return f;
        }),
        r.d(t, "quat2", function () {
          return l;
        }),
        r.d(t, "vec2", function () {
          return _;
        }),
        r.d(t, "vec3", function () {
          return u;
        }),
        r.d(t, "vec4", function () {
          return c;
        });
      var n = {};
      r.r(n),
        r.d(n, "EPSILON", function () {
          return d;
        }),
        r.d(n, "ARRAY_TYPE", function () {
          return h;
        }),
        r.d(n, "RANDOM", function () {
          return m;
        }),
        r.d(n, "setMatrixArrayType", function () {
          return p;
        }),
        r.d(n, "toRadian", function () {
          return y;
        }),
        r.d(n, "equals", function () {
          return g;
        });
      var a = {};
      r.r(a),
        r.d(a, "create", function () {
          return v;
        }),
        r.d(a, "clone", function () {
          return w;
        }),
        r.d(a, "copy", function () {
          return M;
        }),
        r.d(a, "identity", function () {
          return x;
        }),
        r.d(a, "fromValues", function () {
          return A;
        }),
        r.d(a, "set", function () {
          return E;
        }),
        r.d(a, "transpose", function () {
          return k;
        }),
        r.d(a, "invert", function () {
          return T;
        }),
        r.d(a, "adjoint", function () {
          return F;
        }),
        r.d(a, "determinant", function () {
          return S;
        }),
        r.d(a, "multiply", function () {
          return z;
        }),
        r.d(a, "rotate", function () {
          return L;
        }),
        r.d(a, "scale", function () {
          return R;
        }),
        r.d(a, "fromRotation", function () {
          return C;
        }),
        r.d(a, "fromScaling", function () {
          return O;
        }),
        r.d(a, "str", function () {
          return P;
        }),
        r.d(a, "frob", function () {
          return I;
        }),
        r.d(a, "LDU", function () {
          return B;
        }),
        r.d(a, "add", function () {
          return D;
        }),
        r.d(a, "subtract", function () {
          return U;
        }),
        r.d(a, "exactEquals", function () {
          return j;
        }),
        r.d(a, "equals", function () {
          return V;
        }),
        r.d(a, "multiplyScalar", function () {
          return N;
        }),
        r.d(a, "multiplyScalarAndAdd", function () {
          return G;
        }),
        r.d(a, "mul", function () {
          return q;
        }),
        r.d(a, "sub", function () {
          return W;
        });
      var i = {};
      r.r(i),
        r.d(i, "create", function () {
          return H;
        }),
        r.d(i, "clone", function () {
          return Y;
        }),
        r.d(i, "copy", function () {
          return X;
        }),
        r.d(i, "identity", function () {
          return Z;
        }),
        r.d(i, "fromValues", function () {
          return K;
        }),
        r.d(i, "set", function () {
          return Q;
        }),
        r.d(i, "invert", function () {
          return J;
        }),
        r.d(i, "determinant", function () {
          return $;
        }),
        r.d(i, "multiply", function () {
          return ee;
        }),
        r.d(i, "rotate", function () {
          return te;
        }),
        r.d(i, "scale", function () {
          return re;
        }),
        r.d(i, "translate", function () {
          return ne;
        }),
        r.d(i, "fromRotation", function () {
          return ae;
        }),
        r.d(i, "fromScaling", function () {
          return ie;
        }),
        r.d(i, "fromTranslation", function () {
          return oe;
        }),
        r.d(i, "str", function () {
          return se;
        }),
        r.d(i, "frob", function () {
          return ue;
        }),
        r.d(i, "add", function () {
          return ce;
        }),
        r.d(i, "subtract", function () {
          return fe;
        }),
        r.d(i, "multiplyScalar", function () {
          return le;
        }),
        r.d(i, "multiplyScalarAndAdd", function () {
          return _e;
        }),
        r.d(i, "exactEquals", function () {
          return de;
        }),
        r.d(i, "equals", function () {
          return he;
        }),
        r.d(i, "mul", function () {
          return me;
        }),
        r.d(i, "sub", function () {
          return pe;
        });
      var o = {};
      r.r(o),
        r.d(o, "create", function () {
          return be;
        }),
        r.d(o, "fromMat4", function () {
          return ye;
        }),
        r.d(o, "clone", function () {
          return ge;
        }),
        r.d(o, "copy", function () {
          return ve;
        }),
        r.d(o, "fromValues", function () {
          return we;
        }),
        r.d(o, "set", function () {
          return Me;
        }),
        r.d(o, "identity", function () {
          return xe;
        }),
        r.d(o, "transpose", function () {
          return Ae;
        }),
        r.d(o, "invert", function () {
          return Ee;
        }),
        r.d(o, "adjoint", function () {
          return ke;
        }),
        r.d(o, "determinant", function () {
          return Te;
        }),
        r.d(o, "multiply", function () {
          return Fe;
        }),
        r.d(o, "translate", function () {
          return Se;
        }),
        r.d(o, "rotate", function () {
          return ze;
        }),
        r.d(o, "scale", function () {
          return Le;
        }),
        r.d(o, "fromTranslation", function () {
          return Re;
        }),
        r.d(o, "fromRotation", function () {
          return Ce;
        }),
        r.d(o, "fromScaling", function () {
          return Oe;
        }),
        r.d(o, "fromMat2d", function () {
          return Pe;
        }),
        r.d(o, "fromQuat", function () {
          return Ie;
        }),
        r.d(o, "normalFromMat4", function () {
          return Be;
        }),
        r.d(o, "projection", function () {
          return De;
        }),
        r.d(o, "str", function () {
          return Ue;
        }),
        r.d(o, "frob", function () {
          return je;
        }),
        r.d(o, "add", function () {
          return Ve;
        }),
        r.d(o, "subtract", function () {
          return Ne;
        }),
        r.d(o, "multiplyScalar", function () {
          return Ge;
        }),
        r.d(o, "multiplyScalarAndAdd", function () {
          return qe;
        }),
        r.d(o, "exactEquals", function () {
          return We;
        }),
        r.d(o, "equals", function () {
          return He;
        }),
        r.d(o, "mul", function () {
          return Ye;
        }),
        r.d(o, "sub", function () {
          return Xe;
        });
      var s = {};
      r.r(s),
        r.d(s, "create", function () {
          return Ze;
        }),
        r.d(s, "clone", function () {
          return Ke;
        }),
        r.d(s, "copy", function () {
          return Qe;
        }),
        r.d(s, "fromValues", function () {
          return Je;
        }),
        r.d(s, "set", function () {
          return $e;
        }),
        r.d(s, "identity", function () {
          return et;
        }),
        r.d(s, "transpose", function () {
          return tt;
        }),
        r.d(s, "invert", function () {
          return rt;
        }),
        r.d(s, "adjoint", function () {
          return nt;
        }),
        r.d(s, "determinant", function () {
          return at;
        }),
        r.d(s, "multiply", function () {
          return it;
        }),
        r.d(s, "translate", function () {
          return ot;
        }),
        r.d(s, "scale", function () {
          return st;
        }),
        r.d(s, "rotate", function () {
          return ut;
        }),
        r.d(s, "rotateX", function () {
          return ct;
        }),
        r.d(s, "rotateY", function () {
          return ft;
        }),
        r.d(s, "rotateZ", function () {
          return lt;
        }),
        r.d(s, "fromTranslation", function () {
          return _t;
        }),
        r.d(s, "fromScaling", function () {
          return dt;
        }),
        r.d(s, "fromRotation", function () {
          return ht;
        }),
        r.d(s, "fromXRotation", function () {
          return mt;
        }),
        r.d(s, "fromYRotation", function () {
          return pt;
        }),
        r.d(s, "fromZRotation", function () {
          return bt;
        }),
        r.d(s, "fromRotationTranslation", function () {
          return yt;
        }),
        r.d(s, "fromQuat2", function () {
          return gt;
        }),
        r.d(s, "getTranslation", function () {
          return vt;
        }),
        r.d(s, "getScaling", function () {
          return wt;
        }),
        r.d(s, "getRotation", function () {
          return Mt;
        }),
        r.d(s, "fromRotationTranslationScale", function () {
          return xt;
        }),
        r.d(s, "fromRotationTranslationScaleOrigin", function () {
          return At;
        }),
        r.d(s, "fromQuat", function () {
          return Et;
        }),
        r.d(s, "frustum", function () {
          return kt;
        }),
        r.d(s, "perspective", function () {
          return Tt;
        }),
        r.d(s, "perspectiveFromFieldOfView", function () {
          return Ft;
        }),
        r.d(s, "ortho", function () {
          return St;
        }),
        r.d(s, "lookAt", function () {
          return zt;
        }),
        r.d(s, "targetTo", function () {
          return Lt;
        }),
        r.d(s, "str", function () {
          return Rt;
        }),
        r.d(s, "frob", function () {
          return Ct;
        }),
        r.d(s, "add", function () {
          return Ot;
        }),
        r.d(s, "subtract", function () {
          return Pt;
        }),
        r.d(s, "multiplyScalar", function () {
          return It;
        }),
        r.d(s, "multiplyScalarAndAdd", function () {
          return Bt;
        }),
        r.d(s, "exactEquals", function () {
          return Dt;
        }),
        r.d(s, "equals", function () {
          return Ut;
        }),
        r.d(s, "mul", function () {
          return jt;
        }),
        r.d(s, "sub", function () {
          return Vt;
        });
      var u = {};
      r.r(u),
        r.d(u, "create", function () {
          return Nt;
        }),
        r.d(u, "clone", function () {
          return Gt;
        }),
        r.d(u, "length", function () {
          return qt;
        }),
        r.d(u, "fromValues", function () {
          return Wt;
        }),
        r.d(u, "copy", function () {
          return Ht;
        }),
        r.d(u, "set", function () {
          return Yt;
        }),
        r.d(u, "add", function () {
          return Xt;
        }),
        r.d(u, "subtract", function () {
          return Zt;
        }),
        r.d(u, "multiply", function () {
          return Kt;
        }),
        r.d(u, "divide", function () {
          return Qt;
        }),
        r.d(u, "ceil", function () {
          return Jt;
        }),
        r.d(u, "floor", function () {
          return $t;
        }),
        r.d(u, "min", function () {
          return er;
        }),
        r.d(u, "max", function () {
          return tr;
        }),
        r.d(u, "round", function () {
          return rr;
        }),
        r.d(u, "scale", function () {
          return nr;
        }),
        r.d(u, "scaleAndAdd", function () {
          return ar;
        }),
        r.d(u, "distance", function () {
          return ir;
        }),
        r.d(u, "squaredDistance", function () {
          return or;
        }),
        r.d(u, "squaredLength", function () {
          return sr;
        }),
        r.d(u, "negate", function () {
          return ur;
        }),
        r.d(u, "inverse", function () {
          return cr;
        }),
        r.d(u, "normalize", function () {
          return fr;
        }),
        r.d(u, "dot", function () {
          return lr;
        }),
        r.d(u, "cross", function () {
          return _r;
        }),
        r.d(u, "lerp", function () {
          return dr;
        }),
        r.d(u, "hermite", function () {
          return hr;
        }),
        r.d(u, "bezier", function () {
          return mr;
        }),
        r.d(u, "random", function () {
          return pr;
        }),
        r.d(u, "transformMat4", function () {
          return br;
        }),
        r.d(u, "transformMat3", function () {
          return yr;
        }),
        r.d(u, "transformQuat", function () {
          return gr;
        }),
        r.d(u, "rotateX", function () {
          return vr;
        }),
        r.d(u, "rotateY", function () {
          return wr;
        }),
        r.d(u, "rotateZ", function () {
          return Mr;
        }),
        r.d(u, "angle", function () {
          return xr;
        }),
        r.d(u, "zero", function () {
          return Ar;
        }),
        r.d(u, "str", function () {
          return Er;
        }),
        r.d(u, "exactEquals", function () {
          return kr;
        }),
        r.d(u, "equals", function () {
          return Tr;
        }),
        r.d(u, "sub", function () {
          return Sr;
        }),
        r.d(u, "mul", function () {
          return zr;
        }),
        r.d(u, "div", function () {
          return Lr;
        }),
        r.d(u, "dist", function () {
          return Rr;
        }),
        r.d(u, "sqrDist", function () {
          return Cr;
        }),
        r.d(u, "len", function () {
          return Or;
        }),
        r.d(u, "sqrLen", function () {
          return Pr;
        }),
        r.d(u, "forEach", function () {
          return Ir;
        });
      var c = {};
      r.r(c),
        r.d(c, "create", function () {
          return Br;
        }),
        r.d(c, "clone", function () {
          return Dr;
        }),
        r.d(c, "fromValues", function () {
          return Ur;
        }),
        r.d(c, "copy", function () {
          return jr;
        }),
        r.d(c, "set", function () {
          return Vr;
        }),
        r.d(c, "add", function () {
          return Nr;
        }),
        r.d(c, "subtract", function () {
          return Gr;
        }),
        r.d(c, "multiply", function () {
          return qr;
        }),
        r.d(c, "divide", function () {
          return Wr;
        }),
        r.d(c, "ceil", function () {
          return Hr;
        }),
        r.d(c, "floor", function () {
          return Yr;
        }),
        r.d(c, "min", function () {
          return Xr;
        }),
        r.d(c, "max", function () {
          return Zr;
        }),
        r.d(c, "round", function () {
          return Kr;
        }),
        r.d(c, "scale", function () {
          return Qr;
        }),
        r.d(c, "scaleAndAdd", function () {
          return Jr;
        }),
        r.d(c, "distance", function () {
          return $r;
        }),
        r.d(c, "squaredDistance", function () {
          return en;
        }),
        r.d(c, "length", function () {
          return tn;
        }),
        r.d(c, "squaredLength", function () {
          return rn;
        }),
        r.d(c, "negate", function () {
          return nn;
        }),
        r.d(c, "inverse", function () {
          return an;
        }),
        r.d(c, "normalize", function () {
          return on;
        }),
        r.d(c, "dot", function () {
          return sn;
        }),
        r.d(c, "cross", function () {
          return un;
        }),
        r.d(c, "lerp", function () {
          return cn;
        }),
        r.d(c, "random", function () {
          return fn;
        }),
        r.d(c, "transformMat4", function () {
          return ln;
        }),
        r.d(c, "transformQuat", function () {
          return _n;
        }),
        r.d(c, "zero", function () {
          return dn;
        }),
        r.d(c, "str", function () {
          return hn;
        }),
        r.d(c, "exactEquals", function () {
          return mn;
        }),
        r.d(c, "equals", function () {
          return pn;
        }),
        r.d(c, "sub", function () {
          return bn;
        }),
        r.d(c, "mul", function () {
          return yn;
        }),
        r.d(c, "div", function () {
          return gn;
        }),
        r.d(c, "dist", function () {
          return vn;
        }),
        r.d(c, "sqrDist", function () {
          return wn;
        }),
        r.d(c, "len", function () {
          return Mn;
        }),
        r.d(c, "sqrLen", function () {
          return xn;
        }),
        r.d(c, "forEach", function () {
          return An;
        });
      var f = {};
      r.r(f),
        r.d(f, "create", function () {
          return En;
        }),
        r.d(f, "identity", function () {
          return kn;
        }),
        r.d(f, "setAxisAngle", function () {
          return Tn;
        }),
        r.d(f, "getAxisAngle", function () {
          return Fn;
        }),
        r.d(f, "getAngle", function () {
          return Sn;
        }),
        r.d(f, "multiply", function () {
          return zn;
        }),
        r.d(f, "rotateX", function () {
          return Ln;
        }),
        r.d(f, "rotateY", function () {
          return Rn;
        }),
        r.d(f, "rotateZ", function () {
          return Cn;
        }),
        r.d(f, "calculateW", function () {
          return On;
        }),
        r.d(f, "exp", function () {
          return Pn;
        }),
        r.d(f, "ln", function () {
          return In;
        }),
        r.d(f, "pow", function () {
          return Bn;
        }),
        r.d(f, "slerp", function () {
          return Dn;
        }),
        r.d(f, "random", function () {
          return Un;
        }),
        r.d(f, "invert", function () {
          return jn;
        }),
        r.d(f, "conjugate", function () {
          return Vn;
        }),
        r.d(f, "fromMat3", function () {
          return Nn;
        }),
        r.d(f, "fromEuler", function () {
          return Gn;
        }),
        r.d(f, "str", function () {
          return qn;
        }),
        r.d(f, "clone", function () {
          return Qn;
        }),
        r.d(f, "fromValues", function () {
          return Jn;
        }),
        r.d(f, "copy", function () {
          return $n;
        }),
        r.d(f, "set", function () {
          return ea;
        }),
        r.d(f, "add", function () {
          return ta;
        }),
        r.d(f, "mul", function () {
          return ra;
        }),
        r.d(f, "scale", function () {
          return na;
        }),
        r.d(f, "dot", function () {
          return aa;
        }),
        r.d(f, "lerp", function () {
          return ia;
        }),
        r.d(f, "length", function () {
          return oa;
        }),
        r.d(f, "len", function () {
          return sa;
        }),
        r.d(f, "squaredLength", function () {
          return ua;
        }),
        r.d(f, "sqrLen", function () {
          return ca;
        }),
        r.d(f, "normalize", function () {
          return fa;
        }),
        r.d(f, "exactEquals", function () {
          return la;
        }),
        r.d(f, "equals", function () {
          return _a;
        }),
        r.d(f, "rotationTo", function () {
          return da;
        }),
        r.d(f, "sqlerp", function () {
          return ha;
        }),
        r.d(f, "setAxes", function () {
          return ma;
        });
      var l = {};
      r.r(l),
        r.d(l, "create", function () {
          return pa;
        }),
        r.d(l, "clone", function () {
          return ba;
        }),
        r.d(l, "fromValues", function () {
          return ya;
        }),
        r.d(l, "fromRotationTranslationValues", function () {
          return ga;
        }),
        r.d(l, "fromRotationTranslation", function () {
          return va;
        }),
        r.d(l, "fromTranslation", function () {
          return wa;
        }),
        r.d(l, "fromRotation", function () {
          return Ma;
        }),
        r.d(l, "fromMat4", function () {
          return xa;
        }),
        r.d(l, "copy", function () {
          return Aa;
        }),
        r.d(l, "identity", function () {
          return Ea;
        }),
        r.d(l, "set", function () {
          return ka;
        }),
        r.d(l, "getReal", function () {
          return Ta;
        }),
        r.d(l, "getDual", function () {
          return Fa;
        }),
        r.d(l, "setReal", function () {
          return Sa;
        }),
        r.d(l, "setDual", function () {
          return za;
        }),
        r.d(l, "getTranslation", function () {
          return La;
        }),
        r.d(l, "translate", function () {
          return Ra;
        }),
        r.d(l, "rotateX", function () {
          return Ca;
        }),
        r.d(l, "rotateY", function () {
          return Oa;
        }),
        r.d(l, "rotateZ", function () {
          return Pa;
        }),
        r.d(l, "rotateByQuatAppend", function () {
          return Ia;
        }),
        r.d(l, "rotateByQuatPrepend", function () {
          return Ba;
        }),
        r.d(l, "rotateAroundAxis", function () {
          return Da;
        }),
        r.d(l, "add", function () {
          return Ua;
        }),
        r.d(l, "multiply", function () {
          return ja;
        }),
        r.d(l, "mul", function () {
          return Va;
        }),
        r.d(l, "scale", function () {
          return Na;
        }),
        r.d(l, "dot", function () {
          return Ga;
        }),
        r.d(l, "lerp", function () {
          return qa;
        }),
        r.d(l, "invert", function () {
          return Wa;
        }),
        r.d(l, "conjugate", function () {
          return Ha;
        }),
        r.d(l, "length", function () {
          return Ya;
        }),
        r.d(l, "len", function () {
          return Xa;
        }),
        r.d(l, "squaredLength", function () {
          return Za;
        }),
        r.d(l, "sqrLen", function () {
          return Ka;
        }),
        r.d(l, "normalize", function () {
          return Qa;
        }),
        r.d(l, "str", function () {
          return Ja;
        }),
        r.d(l, "exactEquals", function () {
          return $a;
        }),
        r.d(l, "equals", function () {
          return ei;
        });
      var _ = {};
      r.r(_),
        r.d(_, "create", function () {
          return ti;
        }),
        r.d(_, "clone", function () {
          return ri;
        }),
        r.d(_, "fromValues", function () {
          return ni;
        }),
        r.d(_, "copy", function () {
          return ai;
        }),
        r.d(_, "set", function () {
          return ii;
        }),
        r.d(_, "add", function () {
          return oi;
        }),
        r.d(_, "subtract", function () {
          return si;
        }),
        r.d(_, "multiply", function () {
          return ui;
        }),
        r.d(_, "divide", function () {
          return ci;
        }),
        r.d(_, "ceil", function () {
          return fi;
        }),
        r.d(_, "floor", function () {
          return li;
        }),
        r.d(_, "min", function () {
          return _i;
        }),
        r.d(_, "max", function () {
          return di;
        }),
        r.d(_, "round", function () {
          return hi;
        }),
        r.d(_, "scale", function () {
          return mi;
        }),
        r.d(_, "scaleAndAdd", function () {
          return pi;
        }),
        r.d(_, "distance", function () {
          return bi;
        }),
        r.d(_, "squaredDistance", function () {
          return yi;
        }),
        r.d(_, "length", function () {
          return gi;
        }),
        r.d(_, "squaredLength", function () {
          return vi;
        }),
        r.d(_, "negate", function () {
          return wi;
        }),
        r.d(_, "inverse", function () {
          return Mi;
        }),
        r.d(_, "normalize", function () {
          return xi;
        }),
        r.d(_, "dot", function () {
          return Ai;
        }),
        r.d(_, "cross", function () {
          return Ei;
        }),
        r.d(_, "lerp", function () {
          return ki;
        }),
        r.d(_, "random", function () {
          return Ti;
        }),
        r.d(_, "transformMat2", function () {
          return Fi;
        }),
        r.d(_, "transformMat2d", function () {
          return Si;
        }),
        r.d(_, "transformMat3", function () {
          return zi;
        }),
        r.d(_, "transformMat4", function () {
          return Li;
        }),
        r.d(_, "rotate", function () {
          return Ri;
        }),
        r.d(_, "angle", function () {
          return Ci;
        }),
        r.d(_, "zero", function () {
          return Oi;
        }),
        r.d(_, "str", function () {
          return Pi;
        }),
        r.d(_, "exactEquals", function () {
          return Ii;
        }),
        r.d(_, "equals", function () {
          return Bi;
        }),
        r.d(_, "len", function () {
          return Di;
        }),
        r.d(_, "sub", function () {
          return Ui;
        }),
        r.d(_, "mul", function () {
          return ji;
        }),
        r.d(_, "div", function () {
          return Vi;
        }),
        r.d(_, "dist", function () {
          return Ni;
        }),
        r.d(_, "sqrDist", function () {
          return Gi;
        }),
        r.d(_, "sqrLen", function () {
          return qi;
        }),
        r.d(_, "forEach", function () {
          return Wi;
        });
      var d = 1e-6,
        h = "undefined" != typeof Float32Array ? Float32Array : Array,
        m = Math.random;
      function p(e) {
        h = e;
      }
      var b = Math.PI / 180;
      function y(e) {
        return e * b;
      }
      function g(e, t) {
        return Math.abs(e - t) <= d * Math.max(1, Math.abs(e), Math.abs(t));
      }
      function v() {
        var e = new h(4);
        return (
          h != Float32Array && ((e[1] = 0), (e[2] = 0)),
          (e[0] = 1),
          (e[3] = 1),
          e
        );
      }
      function w(e) {
        var t = new h(4);
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
      }
      function M(e, t) {
        return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e;
      }
      function x(e) {
        return (e[0] = 1), (e[1] = 0), (e[2] = 0), (e[3] = 1), e;
      }
      function A(e, t, r, n) {
        var a = new h(4);
        return (a[0] = e), (a[1] = t), (a[2] = r), (a[3] = n), a;
      }
      function E(e, t, r, n, a) {
        return (e[0] = t), (e[1] = r), (e[2] = n), (e[3] = a), e;
      }
      function k(e, t) {
        if (e === t) {
          var r = t[1];
          (e[1] = t[2]), (e[2] = r);
        } else (e[0] = t[0]), (e[1] = t[2]), (e[2] = t[1]), (e[3] = t[3]);
        return e;
      }
      function T(e, t) {
        var r = t[0],
          n = t[1],
          a = t[2],
          i = t[3],
          o = r * i - a * n;
        return o
          ? ((o = 1 / o),
            (e[0] = i * o),
            (e[1] = -n * o),
            (e[2] = -a * o),
            (e[3] = r * o),
            e)
          : null;
      }
      function F(e, t) {
        var r = t[0];
        return (e[0] = t[3]), (e[1] = -t[1]), (e[2] = -t[2]), (e[3] = r), e;
      }
      function S(e) {
        return e[0] * e[3] - e[2] * e[1];
      }
      function z(e, t, r) {
        var n = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = r[0],
          u = r[1],
          c = r[2],
          f = r[3];
        return (
          (e[0] = n * s + i * u),
          (e[1] = a * s + o * u),
          (e[2] = n * c + i * f),
          (e[3] = a * c + o * f),
          e
        );
      }
      function L(e, t, r) {
        var n = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = Math.sin(r),
          u = Math.cos(r);
        return (
          (e[0] = n * u + i * s),
          (e[1] = a * u + o * s),
          (e[2] = n * -s + i * u),
          (e[3] = a * -s + o * u),
          e
        );
      }
      function R(e, t, r) {
        var n = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = r[0],
          u = r[1];
        return (
          (e[0] = n * s), (e[1] = a * s), (e[2] = i * u), (e[3] = o * u), e
        );
      }
      function C(e, t) {
        var r = Math.sin(t),
          n = Math.cos(t);
        return (e[0] = n), (e[1] = r), (e[2] = -r), (e[3] = n), e;
      }
      function O(e, t) {
        return (e[0] = t[0]), (e[1] = 0), (e[2] = 0), (e[3] = t[1]), e;
      }
      function P(e) {
        return "mat2(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")";
      }
      function I(e) {
        return Math.hypot(e[0], e[1], e[2], e[3]);
      }
      function B(e, t, r, n) {
        return (
          (e[2] = n[2] / n[0]),
          (r[0] = n[0]),
          (r[1] = n[1]),
          (r[3] = n[3] - e[2] * r[1]),
          [e, t, r]
        );
      }
      function D(e, t, r) {
        return (
          (e[0] = t[0] + r[0]),
          (e[1] = t[1] + r[1]),
          (e[2] = t[2] + r[2]),
          (e[3] = t[3] + r[3]),
          e
        );
      }
      function U(e, t, r) {
        return (
          (e[0] = t[0] - r[0]),
          (e[1] = t[1] - r[1]),
          (e[2] = t[2] - r[2]),
          (e[3] = t[3] - r[3]),
          e
        );
      }
      function j(e, t) {
        return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3];
      }
      function V(e, t) {
        var r = e[0],
          n = e[1],
          a = e[2],
          i = e[3],
          o = t[0],
          s = t[1],
          u = t[2],
          c = t[3];
        return (
          Math.abs(r - o) <= d * Math.max(1, Math.abs(r), Math.abs(o)) &&
          Math.abs(n - s) <= d * Math.max(1, Math.abs(n), Math.abs(s)) &&
          Math.abs(a - u) <= d * Math.max(1, Math.abs(a), Math.abs(u)) &&
          Math.abs(i - c) <= d * Math.max(1, Math.abs(i), Math.abs(c))
        );
      }
      function N(e, t, r) {
        return (
          (e[0] = t[0] * r),
          (e[1] = t[1] * r),
          (e[2] = t[2] * r),
          (e[3] = t[3] * r),
          e
        );
      }
      function G(e, t, r, n) {
        return (
          (e[0] = t[0] + r[0] * n),
          (e[1] = t[1] + r[1] * n),
          (e[2] = t[2] + r[2] * n),
          (e[3] = t[3] + r[3] * n),
          e
        );
      }
      Math.hypot ||
        (Math.hypot = function () {
          for (var e = 0, t = arguments.length; t--; )
            e += arguments[t] * arguments[t];
          return Math.sqrt(e);
        });
      var q = z,
        W = U;
      function H() {
        var e = new h(6);
        return (
          h != Float32Array && ((e[1] = 0), (e[2] = 0), (e[4] = 0), (e[5] = 0)),
          (e[0] = 1),
          (e[3] = 1),
          e
        );
      }
      function Y(e) {
        var t = new h(6);
        return (
          (t[0] = e[0]),
          (t[1] = e[1]),
          (t[2] = e[2]),
          (t[3] = e[3]),
          (t[4] = e[4]),
          (t[5] = e[5]),
          t
        );
      }
      function X(e, t) {
        return (
          (e[0] = t[0]),
          (e[1] = t[1]),
          (e[2] = t[2]),
          (e[3] = t[3]),
          (e[4] = t[4]),
          (e[5] = t[5]),
          e
        );
      }
      function Z(e) {
        return (
          (e[0] = 1),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 1),
          (e[4] = 0),
          (e[5] = 0),
          e
        );
      }
      function K(e, t, r, n, a, i) {
        var o = new h(6);
        return (
          (o[0] = e),
          (o[1] = t),
          (o[2] = r),
          (o[3] = n),
          (o[4] = a),
          (o[5] = i),
          o
        );
      }
      function Q(e, t, r, n, a, i, o) {
        return (
          (e[0] = t),
          (e[1] = r),
          (e[2] = n),
          (e[3] = a),
          (e[4] = i),
          (e[5] = o),
          e
        );
      }
      function J(e, t) {
        var r = t[0],
          n = t[1],
          a = t[2],
          i = t[3],
          o = t[4],
          s = t[5],
          u = r * i - n * a;
        return u
          ? ((u = 1 / u),
            (e[0] = i * u),
            (e[1] = -n * u),
            (e[2] = -a * u),
            (e[3] = r * u),
            (e[4] = (a * s - i * o) * u),
            (e[5] = (n * o - r * s) * u),
            e)
          : null;
      }
      function $(e) {
        return e[0] * e[3] - e[1] * e[2];
      }
      function ee(e, t, r) {
        var n = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = t[4],
          u = t[5],
          c = r[0],
          f = r[1],
          l = r[2],
          _ = r[3],
          d = r[4],
          h = r[5];
        return (
          (e[0] = n * c + i * f),
          (e[1] = a * c + o * f),
          (e[2] = n * l + i * _),
          (e[3] = a * l + o * _),
          (e[4] = n * d + i * h + s),
          (e[5] = a * d + o * h + u),
          e
        );
      }
      function te(e, t, r) {
        var n = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = t[4],
          u = t[5],
          c = Math.sin(r),
          f = Math.cos(r);
        return (
          (e[0] = n * f + i * c),
          (e[1] = a * f + o * c),
          (e[2] = n * -c + i * f),
          (e[3] = a * -c + o * f),
          (e[4] = s),
          (e[5] = u),
          e
        );
      }
      function re(e, t, r) {
        var n = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = t[4],
          u = t[5],
          c = r[0],
          f = r[1];
        return (
          (e[0] = n * c),
          (e[1] = a * c),
          (e[2] = i * f),
          (e[3] = o * f),
          (e[4] = s),
          (e[5] = u),
          e
        );
      }
      function ne(e, t, r) {
        var n = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = t[4],
          u = t[5],
          c = r[0],
          f = r[1];
        return (
          (e[0] = n),
          (e[1] = a),
          (e[2] = i),
          (e[3] = o),
          (e[4] = n * c + i * f + s),
          (e[5] = a * c + o * f + u),
          e
        );
      }
      function ae(e, t) {
        var r = Math.sin(t),
          n = Math.cos(t);
        return (
          (e[0] = n),
          (e[1] = r),
          (e[2] = -r),
          (e[3] = n),
          (e[4] = 0),
          (e[5] = 0),
          e
        );
      }
      function ie(e, t) {
        return (
          (e[0] = t[0]),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = t[1]),
          (e[4] = 0),
          (e[5] = 0),
          e
        );
      }
      function oe(e, t) {
        return (
          (e[0] = 1),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 1),
          (e[4] = t[0]),
          (e[5] = t[1]),
          e
        );
      }
      function se(e) {
        return (
          "mat2d(" +
          e[0] +
          ", " +
          e[1] +
          ", " +
          e[2] +
          ", " +
          e[3] +
          ", " +
          e[4] +
          ", " +
          e[5] +
          ")"
        );
      }
      function ue(e) {
        return Math.hypot(e[0], e[1], e[2], e[3], e[4], e[5], 1);
      }
      function ce(e, t, r) {
        return (
          (e[0] = t[0] + r[0]),
          (e[1] = t[1] + r[1]),
          (e[2] = t[2] + r[2]),
          (e[3] = t[3] + r[3]),
          (e[4] = t[4] + r[4]),
          (e[5] = t[5] + r[5]),
          e
        );
      }
      function fe(e, t, r) {
        return (
          (e[0] = t[0] - r[0]),
          (e[1] = t[1] - r[1]),
          (e[2] = t[2] - r[2]),
          (e[3] = t[3] - r[3]),
          (e[4] = t[4] - r[4]),
          (e[5] = t[5] - r[5]),
          e
        );
      }
      function le(e, t, r) {
        return (
          (e[0] = t[0] * r),
          (e[1] = t[1] * r),
          (e[2] = t[2] * r),
          (e[3] = t[3] * r),
          (e[4] = t[4] * r),
          (e[5] = t[5] * r),
          e
        );
      }
      function _e(e, t, r, n) {
        return (
          (e[0] = t[0] + r[0] * n),
          (e[1] = t[1] + r[1] * n),
          (e[2] = t[2] + r[2] * n),
          (e[3] = t[3] + r[3] * n),
          (e[4] = t[4] + r[4] * n),
          (e[5] = t[5] + r[5] * n),
          e
        );
      }
      function de(e, t) {
        return (
          e[0] === t[0] &&
          e[1] === t[1] &&
          e[2] === t[2] &&
          e[3] === t[3] &&
          e[4] === t[4] &&
          e[5] === t[5]
        );
      }
      function he(e, t) {
        var r = e[0],
          n = e[1],
          a = e[2],
          i = e[3],
          o = e[4],
          s = e[5],
          u = t[0],
          c = t[1],
          f = t[2],
          l = t[3],
          _ = t[4],
          h = t[5];
        return (
          Math.abs(r - u) <= d * Math.max(1, Math.abs(r), Math.abs(u)) &&
          Math.abs(n - c) <= d * Math.max(1, Math.abs(n), Math.abs(c)) &&
          Math.abs(a - f) <= d * Math.max(1, Math.abs(a), Math.abs(f)) &&
          Math.abs(i - l) <= d * Math.max(1, Math.abs(i), Math.abs(l)) &&
          Math.abs(o - _) <= d * Math.max(1, Math.abs(o), Math.abs(_)) &&
          Math.abs(s - h) <= d * Math.max(1, Math.abs(s), Math.abs(h))
        );
      }
      var me = ee,
        pe = fe;
      function be() {
        var e = new h(9);
        return (
          h != Float32Array &&
            ((e[1] = 0),
            (e[2] = 0),
            (e[3] = 0),
            (e[5] = 0),
            (e[6] = 0),
            (e[7] = 0)),
          (e[0] = 1),
          (e[4] = 1),
          (e[8] = 1),
          e
        );
      }
      function ye(e, t) {
        return (
          (e[0] = t[0]),
          (e[1] = t[1]),
          (e[2] = t[2]),
          (e[3] = t[4]),
          (e[4] = t[5]),
          (e[5] = t[6]),
          (e[6] = t[8]),
          (e[7] = t[9]),
          (e[8] = t[10]),
          e
        );
      }
      function ge(e) {
        var t = new h(9);
        return (
          (t[0] = e[0]),
          (t[1] = e[1]),
          (t[2] = e[2]),
          (t[3] = e[3]),
          (t[4] = e[4]),
          (t[5] = e[5]),
          (t[6] = e[6]),
          (t[7] = e[7]),
          (t[8] = e[8]),
          t
        );
      }
      function ve(e, t) {
        return (
          (e[0] = t[0]),
          (e[1] = t[1]),
          (e[2] = t[2]),
          (e[3] = t[3]),
          (e[4] = t[4]),
          (e[5] = t[5]),
          (e[6] = t[6]),
          (e[7] = t[7]),
          (e[8] = t[8]),
          e
        );
      }
      function we(e, t, r, n, a, i, o, s, u) {
        var c = new h(9);
        return (
          (c[0] = e),
          (c[1] = t),
          (c[2] = r),
          (c[3] = n),
          (c[4] = a),
          (c[5] = i),
          (c[6] = o),
          (c[7] = s),
          (c[8] = u),
          c
        );
      }
      function Me(e, t, r, n, a, i, o, s, u, c) {
        return (
          (e[0] = t),
          (e[1] = r),
          (e[2] = n),
          (e[3] = a),
          (e[4] = i),
          (e[5] = o),
          (e[6] = s),
          (e[7] = u),
          (e[8] = c),
          e
        );
      }
      function xe(e) {
        return (
          (e[0] = 1),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 1),
          (e[5] = 0),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = 1),
          e
        );
      }
      function Ae(e, t) {
        if (e === t) {
          var r = t[1],
            n = t[2],
            a = t[5];
          (e[1] = t[3]),
            (e[2] = t[6]),
            (e[3] = r),
            (e[5] = t[7]),
            (e[6] = n),
            (e[7] = a);
        } else
          (e[0] = t[0]),
            (e[1] = t[3]),
            (e[2] = t[6]),
            (e[3] = t[1]),
            (e[4] = t[4]),
            (e[5] = t[7]),
            (e[6] = t[2]),
            (e[7] = t[5]),
            (e[8] = t[8]);
        return e;
      }
      function Ee(e, t) {
        var r = t[0],
          n = t[1],
          a = t[2],
          i = t[3],
          o = t[4],
          s = t[5],
          u = t[6],
          c = t[7],
          f = t[8],
          l = f * o - s * c,
          _ = -f * i + s * u,
          d = c * i - o * u,
          h = r * l + n * _ + a * d;
        return h
          ? ((h = 1 / h),
            (e[0] = l * h),
            (e[1] = (-f * n + a * c) * h),
            (e[2] = (s * n - a * o) * h),
            (e[3] = _ * h),
            (e[4] = (f * r - a * u) * h),
            (e[5] = (-s * r + a * i) * h),
            (e[6] = d * h),
            (e[7] = (-c * r + n * u) * h),
            (e[8] = (o * r - n * i) * h),
            e)
          : null;
      }
      function ke(e, t) {
        var r = t[0],
          n = t[1],
          a = t[2],
          i = t[3],
          o = t[4],
          s = t[5],
          u = t[6],
          c = t[7],
          f = t[8];
        return (
          (e[0] = o * f - s * c),
          (e[1] = a * c - n * f),
          (e[2] = n * s - a * o),
          (e[3] = s * u - i * f),
          (e[4] = r * f - a * u),
          (e[5] = a * i - r * s),
          (e[6] = i * c - o * u),
          (e[7] = n * u - r * c),
          (e[8] = r * o - n * i),
          e
        );
      }
      function Te(e) {
        var t = e[0],
          r = e[1],
          n = e[2],
          a = e[3],
          i = e[4],
          o = e[5],
          s = e[6],
          u = e[7],
          c = e[8];
        return t * (c * i - o * u) + r * (-c * a + o * s) + n * (u * a - i * s);
      }
      function Fe(e, t, r) {
        var n = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = t[4],
          u = t[5],
          c = t[6],
          f = t[7],
          l = t[8],
          _ = r[0],
          d = r[1],
          h = r[2],
          m = r[3],
          p = r[4],
          b = r[5],
          y = r[6],
          g = r[7],
          v = r[8];
        return (
          (e[0] = _ * n + d * o + h * c),
          (e[1] = _ * a + d * s + h * f),
          (e[2] = _ * i + d * u + h * l),
          (e[3] = m * n + p * o + b * c),
          (e[4] = m * a + p * s + b * f),
          (e[5] = m * i + p * u + b * l),
          (e[6] = y * n + g * o + v * c),
          (e[7] = y * a + g * s + v * f),
          (e[8] = y * i + g * u + v * l),
          e
        );
      }
      function Se(e, t, r) {
        var n = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = t[4],
          u = t[5],
          c = t[6],
          f = t[7],
          l = t[8],
          _ = r[0],
          d = r[1];
        return (
          (e[0] = n),
          (e[1] = a),
          (e[2] = i),
          (e[3] = o),
          (e[4] = s),
          (e[5] = u),
          (e[6] = _ * n + d * o + c),
          (e[7] = _ * a + d * s + f),
          (e[8] = _ * i + d * u + l),
          e
        );
      }
      function ze(e, t, r) {
        var n = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = t[4],
          u = t[5],
          c = t[6],
          f = t[7],
          l = t[8],
          _ = Math.sin(r),
          d = Math.cos(r);
        return (
          (e[0] = d * n + _ * o),
          (e[1] = d * a + _ * s),
          (e[2] = d * i + _ * u),
          (e[3] = d * o - _ * n),
          (e[4] = d * s - _ * a),
          (e[5] = d * u - _ * i),
          (e[6] = c),
          (e[7] = f),
          (e[8] = l),
          e
        );
      }
      function Le(e, t, r) {
        var n = r[0],
          a = r[1];
        return (
          (e[0] = n * t[0]),
          (e[1] = n * t[1]),
          (e[2] = n * t[2]),
          (e[3] = a * t[3]),
          (e[4] = a * t[4]),
          (e[5] = a * t[5]),
          (e[6] = t[6]),
          (e[7] = t[7]),
          (e[8] = t[8]),
          e
        );
      }
      function Re(e, t) {
        return (
          (e[0] = 1),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 1),
          (e[5] = 0),
          (e[6] = t[0]),
          (e[7] = t[1]),
          (e[8] = 1),
          e
        );
      }
      function Ce(e, t) {
        var r = Math.sin(t),
          n = Math.cos(t);
        return (
          (e[0] = n),
          (e[1] = r),
          (e[2] = 0),
          (e[3] = -r),
          (e[4] = n),
          (e[5] = 0),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = 1),
          e
        );
      }
      function Oe(e, t) {
        return (
          (e[0] = t[0]),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = t[1]),
          (e[5] = 0),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = 1),
          e
        );
      }
      function Pe(e, t) {
        return (
          (e[0] = t[0]),
          (e[1] = t[1]),
          (e[2] = 0),
          (e[3] = t[2]),
          (e[4] = t[3]),
          (e[5] = 0),
          (e[6] = t[4]),
          (e[7] = t[5]),
          (e[8] = 1),
          e
        );
      }
      function Ie(e, t) {
        var r = t[0],
          n = t[1],
          a = t[2],
          i = t[3],
          o = r + r,
          s = n + n,
          u = a + a,
          c = r * o,
          f = n * o,
          l = n * s,
          _ = a * o,
          d = a * s,
          h = a * u,
          m = i * o,
          p = i * s,
          b = i * u;
        return (
          (e[0] = 1 - l - h),
          (e[3] = f - b),
          (e[6] = _ + p),
          (e[1] = f + b),
          (e[4] = 1 - c - h),
          (e[7] = d - m),
          (e[2] = _ - p),
          (e[5] = d + m),
          (e[8] = 1 - c - l),
          e
        );
      }
      function Be(e, t) {
        var r = t[0],
          n = t[1],
          a = t[2],
          i = t[3],
          o = t[4],
          s = t[5],
          u = t[6],
          c = t[7],
          f = t[8],
          l = t[9],
          _ = t[10],
          d = t[11],
          h = t[12],
          m = t[13],
          p = t[14],
          b = t[15],
          y = r * s - n * o,
          g = r * u - a * o,
          v = r * c - i * o,
          w = n * u - a * s,
          M = n * c - i * s,
          x = a * c - i * u,
          A = f * m - l * h,
          E = f * p - _ * h,
          k = f * b - d * h,
          T = l * p - _ * m,
          F = l * b - d * m,
          S = _ * b - d * p,
          z = y * S - g * F + v * T + w * k - M * E + x * A;
        return z
          ? ((z = 1 / z),
            (e[0] = (s * S - u * F + c * T) * z),
            (e[1] = (u * k - o * S - c * E) * z),
            (e[2] = (o * F - s * k + c * A) * z),
            (e[3] = (a * F - n * S - i * T) * z),
            (e[4] = (r * S - a * k + i * E) * z),
            (e[5] = (n * k - r * F - i * A) * z),
            (e[6] = (m * x - p * M + b * w) * z),
            (e[7] = (p * v - h * x - b * g) * z),
            (e[8] = (h * M - m * v + b * y) * z),
            e)
          : null;
      }
      function De(e, t, r) {
        return (
          (e[0] = 2 / t),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = -2 / r),
          (e[5] = 0),
          (e[6] = -1),
          (e[7] = 1),
          (e[8] = 1),
          e
        );
      }
      function Ue(e) {
        return (
          "mat3(" +
          e[0] +
          ", " +
          e[1] +
          ", " +
          e[2] +
          ", " +
          e[3] +
          ", " +
          e[4] +
          ", " +
          e[5] +
          ", " +
          e[6] +
          ", " +
          e[7] +
          ", " +
          e[8] +
          ")"
        );
      }
      function je(e) {
        return Math.hypot(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]);
      }
      function Ve(e, t, r) {
        return (
          (e[0] = t[0] + r[0]),
          (e[1] = t[1] + r[1]),
          (e[2] = t[2] + r[2]),
          (e[3] = t[3] + r[3]),
          (e[4] = t[4] + r[4]),
          (e[5] = t[5] + r[5]),
          (e[6] = t[6] + r[6]),
          (e[7] = t[7] + r[7]),
          (e[8] = t[8] + r[8]),
          e
        );
      }
      function Ne(e, t, r) {
        return (
          (e[0] = t[0] - r[0]),
          (e[1] = t[1] - r[1]),
          (e[2] = t[2] - r[2]),
          (e[3] = t[3] - r[3]),
          (e[4] = t[4] - r[4]),
          (e[5] = t[5] - r[5]),
          (e[6] = t[6] - r[6]),
          (e[7] = t[7] - r[7]),
          (e[8] = t[8] - r[8]),
          e
        );
      }
      function Ge(e, t, r) {
        return (
          (e[0] = t[0] * r),
          (e[1] = t[1] * r),
          (e[2] = t[2] * r),
          (e[3] = t[3] * r),
          (e[4] = t[4] * r),
          (e[5] = t[5] * r),
          (e[6] = t[6] * r),
          (e[7] = t[7] * r),
          (e[8] = t[8] * r),
          e
        );
      }
      function qe(e, t, r, n) {
        return (
          (e[0] = t[0] + r[0] * n),
          (e[1] = t[1] + r[1] * n),
          (e[2] = t[2] + r[2] * n),
          (e[3] = t[3] + r[3] * n),
          (e[4] = t[4] + r[4] * n),
          (e[5] = t[5] + r[5] * n),
          (e[6] = t[6] + r[6] * n),
          (e[7] = t[7] + r[7] * n),
          (e[8] = t[8] + r[8] * n),
          e
        );
      }
      function We(e, t) {
        return (
          e[0] === t[0] &&
          e[1] === t[1] &&
          e[2] === t[2] &&
          e[3] === t[3] &&
          e[4] === t[4] &&
          e[5] === t[5] &&
          e[6] === t[6] &&
          e[7] === t[7] &&
          e[8] === t[8]
        );
      }
      function He(e, t) {
        var r = e[0],
          n = e[1],
          a = e[2],
          i = e[3],
          o = e[4],
          s = e[5],
          u = e[6],
          c = e[7],
          f = e[8],
          l = t[0],
          _ = t[1],
          h = t[2],
          m = t[3],
          p = t[4],
          b = t[5],
          y = t[6],
          g = t[7],
          v = t[8];
        return (
          Math.abs(r - l) <= d * Math.max(1, Math.abs(r), Math.abs(l)) &&
          Math.abs(n - _) <= d * Math.max(1, Math.abs(n), Math.abs(_)) &&
          Math.abs(a - h) <= d * Math.max(1, Math.abs(a), Math.abs(h)) &&
          Math.abs(i - m) <= d * Math.max(1, Math.abs(i), Math.abs(m)) &&
          Math.abs(o - p) <= d * Math.max(1, Math.abs(o), Math.abs(p)) &&
          Math.abs(s - b) <= d * Math.max(1, Math.abs(s), Math.abs(b)) &&
          Math.abs(u - y) <= d * Math.max(1, Math.abs(u), Math.abs(y)) &&
          Math.abs(c - g) <= d * Math.max(1, Math.abs(c), Math.abs(g)) &&
          Math.abs(f - v) <= d * Math.max(1, Math.abs(f), Math.abs(v))
        );
      }
      var Ye = Fe,
        Xe = Ne;
      function Ze() {
        var e = new h(16);
        return (
          h != Float32Array &&
            ((e[1] = 0),
            (e[2] = 0),
            (e[3] = 0),
            (e[4] = 0),
            (e[6] = 0),
            (e[7] = 0),
            (e[8] = 0),
            (e[9] = 0),
            (e[11] = 0),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = 0)),
          (e[0] = 1),
          (e[5] = 1),
          (e[10] = 1),
          (e[15] = 1),
          e
        );
      }
      function Ke(e) {
        var t = new h(16);
        return (
          (t[0] = e[0]),
          (t[1] = e[1]),
          (t[2] = e[2]),
          (t[3] = e[3]),
          (t[4] = e[4]),
          (t[5] = e[5]),
          (t[6] = e[6]),
          (t[7] = e[7]),
          (t[8] = e[8]),
          (t[9] = e[9]),
          (t[10] = e[10]),
          (t[11] = e[11]),
          (t[12] = e[12]),
          (t[13] = e[13]),
          (t[14] = e[14]),
          (t[15] = e[15]),
          t
        );
      }
      function Qe(e, t) {
        return (
          (e[0] = t[0]),
          (e[1] = t[1]),
          (e[2] = t[2]),
          (e[3] = t[3]),
          (e[4] = t[4]),
          (e[5] = t[5]),
          (e[6] = t[6]),
          (e[7] = t[7]),
          (e[8] = t[8]),
          (e[9] = t[9]),
          (e[10] = t[10]),
          (e[11] = t[11]),
          (e[12] = t[12]),
          (e[13] = t[13]),
          (e[14] = t[14]),
          (e[15] = t[15]),
          e
        );
      }
      function Je(e, t, r, n, a, i, o, s, u, c, f, l, _, d, m, p) {
        var b = new h(16);
        return (
          (b[0] = e),
          (b[1] = t),
          (b[2] = r),
          (b[3] = n),
          (b[4] = a),
          (b[5] = i),
          (b[6] = o),
          (b[7] = s),
          (b[8] = u),
          (b[9] = c),
          (b[10] = f),
          (b[11] = l),
          (b[12] = _),
          (b[13] = d),
          (b[14] = m),
          (b[15] = p),
          b
        );
      }
      function $e(e, t, r, n, a, i, o, s, u, c, f, l, _, d, h, m, p) {
        return (
          (e[0] = t),
          (e[1] = r),
          (e[2] = n),
          (e[3] = a),
          (e[4] = i),
          (e[5] = o),
          (e[6] = s),
          (e[7] = u),
          (e[8] = c),
          (e[9] = f),
          (e[10] = l),
          (e[11] = _),
          (e[12] = d),
          (e[13] = h),
          (e[14] = m),
          (e[15] = p),
          e
        );
      }
      function et(e) {
        return (
          (e[0] = 1),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 0),
          (e[5] = 1),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = 0),
          (e[9] = 0),
          (e[10] = 1),
          (e[11] = 0),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = 0),
          (e[15] = 1),
          e
        );
      }
      function tt(e, t) {
        if (e === t) {
          var r = t[1],
            n = t[2],
            a = t[3],
            i = t[6],
            o = t[7],
            s = t[11];
          (e[1] = t[4]),
            (e[2] = t[8]),
            (e[3] = t[12]),
            (e[4] = r),
            (e[6] = t[9]),
            (e[7] = t[13]),
            (e[8] = n),
            (e[9] = i),
            (e[11] = t[14]),
            (e[12] = a),
            (e[13] = o),
            (e[14] = s);
        } else
          (e[0] = t[0]),
            (e[1] = t[4]),
            (e[2] = t[8]),
            (e[3] = t[12]),
            (e[4] = t[1]),
            (e[5] = t[5]),
            (e[6] = t[9]),
            (e[7] = t[13]),
            (e[8] = t[2]),
            (e[9] = t[6]),
            (e[10] = t[10]),
            (e[11] = t[14]),
            (e[12] = t[3]),
            (e[13] = t[7]),
            (e[14] = t[11]),
            (e[15] = t[15]);
        return e;
      }
      function rt(e, t) {
        var r = t[0],
          n = t[1],
          a = t[2],
          i = t[3],
          o = t[4],
          s = t[5],
          u = t[6],
          c = t[7],
          f = t[8],
          l = t[9],
          _ = t[10],
          d = t[11],
          h = t[12],
          m = t[13],
          p = t[14],
          b = t[15],
          y = r * s - n * o,
          g = r * u - a * o,
          v = r * c - i * o,
          w = n * u - a * s,
          M = n * c - i * s,
          x = a * c - i * u,
          A = f * m - l * h,
          E = f * p - _ * h,
          k = f * b - d * h,
          T = l * p - _ * m,
          F = l * b - d * m,
          S = _ * b - d * p,
          z = y * S - g * F + v * T + w * k - M * E + x * A;
        return z
          ? ((z = 1 / z),
            (e[0] = (s * S - u * F + c * T) * z),
            (e[1] = (a * F - n * S - i * T) * z),
            (e[2] = (m * x - p * M + b * w) * z),
            (e[3] = (_ * M - l * x - d * w) * z),
            (e[4] = (u * k - o * S - c * E) * z),
            (e[5] = (r * S - a * k + i * E) * z),
            (e[6] = (p * v - h * x - b * g) * z),
            (e[7] = (f * x - _ * v + d * g) * z),
            (e[8] = (o * F - s * k + c * A) * z),
            (e[9] = (n * k - r * F - i * A) * z),
            (e[10] = (h * M - m * v + b * y) * z),
            (e[11] = (l * v - f * M - d * y) * z),
            (e[12] = (s * E - o * T - u * A) * z),
            (e[13] = (r * T - n * E + a * A) * z),
            (e[14] = (m * g - h * w - p * y) * z),
            (e[15] = (f * w - l * g + _ * y) * z),
            e)
          : null;
      }
      function nt(e, t) {
        var r = t[0],
          n = t[1],
          a = t[2],
          i = t[3],
          o = t[4],
          s = t[5],
          u = t[6],
          c = t[7],
          f = t[8],
          l = t[9],
          _ = t[10],
          d = t[11],
          h = t[12],
          m = t[13],
          p = t[14],
          b = t[15];
        return (
          (e[0] =
            s * (_ * b - d * p) - l * (u * b - c * p) + m * (u * d - c * _)),
          (e[1] = -(
            n * (_ * b - d * p) -
            l * (a * b - i * p) +
            m * (a * d - i * _)
          )),
          (e[2] =
            n * (u * b - c * p) - s * (a * b - i * p) + m * (a * c - i * u)),
          (e[3] = -(
            n * (u * d - c * _) -
            s * (a * d - i * _) +
            l * (a * c - i * u)
          )),
          (e[4] = -(
            o * (_ * b - d * p) -
            f * (u * b - c * p) +
            h * (u * d - c * _)
          )),
          (e[5] =
            r * (_ * b - d * p) - f * (a * b - i * p) + h * (a * d - i * _)),
          (e[6] = -(
            r * (u * b - c * p) -
            o * (a * b - i * p) +
            h * (a * c - i * u)
          )),
          (e[7] =
            r * (u * d - c * _) - o * (a * d - i * _) + f * (a * c - i * u)),
          (e[8] =
            o * (l * b - d * m) - f * (s * b - c * m) + h * (s * d - c * l)),
          (e[9] = -(
            r * (l * b - d * m) -
            f * (n * b - i * m) +
            h * (n * d - i * l)
          )),
          (e[10] =
            r * (s * b - c * m) - o * (n * b - i * m) + h * (n * c - i * s)),
          (e[11] = -(
            r * (s * d - c * l) -
            o * (n * d - i * l) +
            f * (n * c - i * s)
          )),
          (e[12] = -(
            o * (l * p - _ * m) -
            f * (s * p - u * m) +
            h * (s * _ - u * l)
          )),
          (e[13] =
            r * (l * p - _ * m) - f * (n * p - a * m) + h * (n * _ - a * l)),
          (e[14] = -(
            r * (s * p - u * m) -
            o * (n * p - a * m) +
            h * (n * u - a * s)
          )),
          (e[15] =
            r * (s * _ - u * l) - o * (n * _ - a * l) + f * (n * u - a * s)),
          e
        );
      }
      function at(e) {
        var t = e[0],
          r = e[1],
          n = e[2],
          a = e[3],
          i = e[4],
          o = e[5],
          s = e[6],
          u = e[7],
          c = e[8],
          f = e[9],
          l = e[10],
          _ = e[11],
          d = e[12],
          h = e[13],
          m = e[14],
          p = e[15];
        return (
          (t * o - r * i) * (l * p - _ * m) -
          (t * s - n * i) * (f * p - _ * h) +
          (t * u - a * i) * (f * m - l * h) +
          (r * s - n * o) * (c * p - _ * d) -
          (r * u - a * o) * (c * m - l * d) +
          (n * u - a * s) * (c * h - f * d)
        );
      }
      function it(e, t, r) {
        var n = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = t[4],
          u = t[5],
          c = t[6],
          f = t[7],
          l = t[8],
          _ = t[9],
          d = t[10],
          h = t[11],
          m = t[12],
          p = t[13],
          b = t[14],
          y = t[15],
          g = r[0],
          v = r[1],
          w = r[2],
          M = r[3];
        return (
          (e[0] = g * n + v * s + w * l + M * m),
          (e[1] = g * a + v * u + w * _ + M * p),
          (e[2] = g * i + v * c + w * d + M * b),
          (e[3] = g * o + v * f + w * h + M * y),
          (g = r[4]),
          (v = r[5]),
          (w = r[6]),
          (M = r[7]),
          (e[4] = g * n + v * s + w * l + M * m),
          (e[5] = g * a + v * u + w * _ + M * p),
          (e[6] = g * i + v * c + w * d + M * b),
          (e[7] = g * o + v * f + w * h + M * y),
          (g = r[8]),
          (v = r[9]),
          (w = r[10]),
          (M = r[11]),
          (e[8] = g * n + v * s + w * l + M * m),
          (e[9] = g * a + v * u + w * _ + M * p),
          (e[10] = g * i + v * c + w * d + M * b),
          (e[11] = g * o + v * f + w * h + M * y),
          (g = r[12]),
          (v = r[13]),
          (w = r[14]),
          (M = r[15]),
          (e[12] = g * n + v * s + w * l + M * m),
          (e[13] = g * a + v * u + w * _ + M * p),
          (e[14] = g * i + v * c + w * d + M * b),
          (e[15] = g * o + v * f + w * h + M * y),
          e
        );
      }
      function ot(e, t, r) {
        var n,
          a,
          i,
          o,
          s,
          u,
          c,
          f,
          l,
          _,
          d,
          h,
          m = r[0],
          p = r[1],
          b = r[2];
        return (
          t === e
            ? ((e[12] = t[0] * m + t[4] * p + t[8] * b + t[12]),
              (e[13] = t[1] * m + t[5] * p + t[9] * b + t[13]),
              (e[14] = t[2] * m + t[6] * p + t[10] * b + t[14]),
              (e[15] = t[3] * m + t[7] * p + t[11] * b + t[15]))
            : ((n = t[0]),
              (a = t[1]),
              (i = t[2]),
              (o = t[3]),
              (s = t[4]),
              (u = t[5]),
              (c = t[6]),
              (f = t[7]),
              (l = t[8]),
              (_ = t[9]),
              (d = t[10]),
              (h = t[11]),
              (e[0] = n),
              (e[1] = a),
              (e[2] = i),
              (e[3] = o),
              (e[4] = s),
              (e[5] = u),
              (e[6] = c),
              (e[7] = f),
              (e[8] = l),
              (e[9] = _),
              (e[10] = d),
              (e[11] = h),
              (e[12] = n * m + s * p + l * b + t[12]),
              (e[13] = a * m + u * p + _ * b + t[13]),
              (e[14] = i * m + c * p + d * b + t[14]),
              (e[15] = o * m + f * p + h * b + t[15])),
          e
        );
      }
      function st(e, t, r) {
        var n = r[0],
          a = r[1],
          i = r[2];
        return (
          (e[0] = t[0] * n),
          (e[1] = t[1] * n),
          (e[2] = t[2] * n),
          (e[3] = t[3] * n),
          (e[4] = t[4] * a),
          (e[5] = t[5] * a),
          (e[6] = t[6] * a),
          (e[7] = t[7] * a),
          (e[8] = t[8] * i),
          (e[9] = t[9] * i),
          (e[10] = t[10] * i),
          (e[11] = t[11] * i),
          (e[12] = t[12]),
          (e[13] = t[13]),
          (e[14] = t[14]),
          (e[15] = t[15]),
          e
        );
      }
      function ut(e, t, r, n) {
        var a,
          i,
          o,
          s,
          u,
          c,
          f,
          l,
          _,
          h,
          m,
          p,
          b,
          y,
          g,
          v,
          w,
          M,
          x,
          A,
          E,
          k,
          T,
          F,
          S = n[0],
          z = n[1],
          L = n[2],
          R = Math.hypot(S, z, L);
        return R < d
          ? null
          : ((S *= R = 1 / R),
            (z *= R),
            (L *= R),
            (a = Math.sin(r)),
            (o = 1 - (i = Math.cos(r))),
            (s = t[0]),
            (u = t[1]),
            (c = t[2]),
            (f = t[3]),
            (l = t[4]),
            (_ = t[5]),
            (h = t[6]),
            (m = t[7]),
            (p = t[8]),
            (b = t[9]),
            (y = t[10]),
            (g = t[11]),
            (v = S * S * o + i),
            (w = z * S * o + L * a),
            (M = L * S * o - z * a),
            (x = S * z * o - L * a),
            (A = z * z * o + i),
            (E = L * z * o + S * a),
            (k = S * L * o + z * a),
            (T = z * L * o - S * a),
            (F = L * L * o + i),
            (e[0] = s * v + l * w + p * M),
            (e[1] = u * v + _ * w + b * M),
            (e[2] = c * v + h * w + y * M),
            (e[3] = f * v + m * w + g * M),
            (e[4] = s * x + l * A + p * E),
            (e[5] = u * x + _ * A + b * E),
            (e[6] = c * x + h * A + y * E),
            (e[7] = f * x + m * A + g * E),
            (e[8] = s * k + l * T + p * F),
            (e[9] = u * k + _ * T + b * F),
            (e[10] = c * k + h * T + y * F),
            (e[11] = f * k + m * T + g * F),
            t !== e &&
              ((e[12] = t[12]),
              (e[13] = t[13]),
              (e[14] = t[14]),
              (e[15] = t[15])),
            e);
      }
      function ct(e, t, r) {
        var n = Math.sin(r),
          a = Math.cos(r),
          i = t[4],
          o = t[5],
          s = t[6],
          u = t[7],
          c = t[8],
          f = t[9],
          l = t[10],
          _ = t[11];
        return (
          t !== e &&
            ((e[0] = t[0]),
            (e[1] = t[1]),
            (e[2] = t[2]),
            (e[3] = t[3]),
            (e[12] = t[12]),
            (e[13] = t[13]),
            (e[14] = t[14]),
            (e[15] = t[15])),
          (e[4] = i * a + c * n),
          (e[5] = o * a + f * n),
          (e[6] = s * a + l * n),
          (e[7] = u * a + _ * n),
          (e[8] = c * a - i * n),
          (e[9] = f * a - o * n),
          (e[10] = l * a - s * n),
          (e[11] = _ * a - u * n),
          e
        );
      }
      function ft(e, t, r) {
        var n = Math.sin(r),
          a = Math.cos(r),
          i = t[0],
          o = t[1],
          s = t[2],
          u = t[3],
          c = t[8],
          f = t[9],
          l = t[10],
          _ = t[11];
        return (
          t !== e &&
            ((e[4] = t[4]),
            (e[5] = t[5]),
            (e[6] = t[6]),
            (e[7] = t[7]),
            (e[12] = t[12]),
            (e[13] = t[13]),
            (e[14] = t[14]),
            (e[15] = t[15])),
          (e[0] = i * a - c * n),
          (e[1] = o * a - f * n),
          (e[2] = s * a - l * n),
          (e[3] = u * a - _ * n),
          (e[8] = i * n + c * a),
          (e[9] = o * n + f * a),
          (e[10] = s * n + l * a),
          (e[11] = u * n + _ * a),
          e
        );
      }
      function lt(e, t, r) {
        var n = Math.sin(r),
          a = Math.cos(r),
          i = t[0],
          o = t[1],
          s = t[2],
          u = t[3],
          c = t[4],
          f = t[5],
          l = t[6],
          _ = t[7];
        return (
          t !== e &&
            ((e[8] = t[8]),
            (e[9] = t[9]),
            (e[10] = t[10]),
            (e[11] = t[11]),
            (e[12] = t[12]),
            (e[13] = t[13]),
            (e[14] = t[14]),
            (e[15] = t[15])),
          (e[0] = i * a + c * n),
          (e[1] = o * a + f * n),
          (e[2] = s * a + l * n),
          (e[3] = u * a + _ * n),
          (e[4] = c * a - i * n),
          (e[5] = f * a - o * n),
          (e[6] = l * a - s * n),
          (e[7] = _ * a - u * n),
          e
        );
      }
      function _t(e, t) {
        return (
          (e[0] = 1),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 0),
          (e[5] = 1),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = 0),
          (e[9] = 0),
          (e[10] = 1),
          (e[11] = 0),
          (e[12] = t[0]),
          (e[13] = t[1]),
          (e[14] = t[2]),
          (e[15] = 1),
          e
        );
      }
      function dt(e, t) {
        return (
          (e[0] = t[0]),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 0),
          (e[5] = t[1]),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = 0),
          (e[9] = 0),
          (e[10] = t[2]),
          (e[11] = 0),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = 0),
          (e[15] = 1),
          e
        );
      }
      function ht(e, t, r) {
        var n,
          a,
          i,
          o = r[0],
          s = r[1],
          u = r[2],
          c = Math.hypot(o, s, u);
        return c < d
          ? null
          : ((o *= c = 1 / c),
            (s *= c),
            (u *= c),
            (n = Math.sin(t)),
            (i = 1 - (a = Math.cos(t))),
            (e[0] = o * o * i + a),
            (e[1] = s * o * i + u * n),
            (e[2] = u * o * i - s * n),
            (e[3] = 0),
            (e[4] = o * s * i - u * n),
            (e[5] = s * s * i + a),
            (e[6] = u * s * i + o * n),
            (e[7] = 0),
            (e[8] = o * u * i + s * n),
            (e[9] = s * u * i - o * n),
            (e[10] = u * u * i + a),
            (e[11] = 0),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = 0),
            (e[15] = 1),
            e);
      }
      function mt(e, t) {
        var r = Math.sin(t),
          n = Math.cos(t);
        return (
          (e[0] = 1),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 0),
          (e[5] = n),
          (e[6] = r),
          (e[7] = 0),
          (e[8] = 0),
          (e[9] = -r),
          (e[10] = n),
          (e[11] = 0),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = 0),
          (e[15] = 1),
          e
        );
      }
      function pt(e, t) {
        var r = Math.sin(t),
          n = Math.cos(t);
        return (
          (e[0] = n),
          (e[1] = 0),
          (e[2] = -r),
          (e[3] = 0),
          (e[4] = 0),
          (e[5] = 1),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = r),
          (e[9] = 0),
          (e[10] = n),
          (e[11] = 0),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = 0),
          (e[15] = 1),
          e
        );
      }
      function bt(e, t) {
        var r = Math.sin(t),
          n = Math.cos(t);
        return (
          (e[0] = n),
          (e[1] = r),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = -r),
          (e[5] = n),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = 0),
          (e[9] = 0),
          (e[10] = 1),
          (e[11] = 0),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = 0),
          (e[15] = 1),
          e
        );
      }
      function yt(e, t, r) {
        var n = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = n + n,
          u = a + a,
          c = i + i,
          f = n * s,
          l = n * u,
          _ = n * c,
          d = a * u,
          h = a * c,
          m = i * c,
          p = o * s,
          b = o * u,
          y = o * c;
        return (
          (e[0] = 1 - (d + m)),
          (e[1] = l + y),
          (e[2] = _ - b),
          (e[3] = 0),
          (e[4] = l - y),
          (e[5] = 1 - (f + m)),
          (e[6] = h + p),
          (e[7] = 0),
          (e[8] = _ + b),
          (e[9] = h - p),
          (e[10] = 1 - (f + d)),
          (e[11] = 0),
          (e[12] = r[0]),
          (e[13] = r[1]),
          (e[14] = r[2]),
          (e[15] = 1),
          e
        );
      }
      function gt(e, t) {
        var r = new h(3),
          n = -t[0],
          a = -t[1],
          i = -t[2],
          o = t[3],
          s = t[4],
          u = t[5],
          c = t[6],
          f = t[7],
          l = n * n + a * a + i * i + o * o;
        return (
          l > 0
            ? ((r[0] = (2 * (s * o + f * n + u * i - c * a)) / l),
              (r[1] = (2 * (u * o + f * a + c * n - s * i)) / l),
              (r[2] = (2 * (c * o + f * i + s * a - u * n)) / l))
            : ((r[0] = 2 * (s * o + f * n + u * i - c * a)),
              (r[1] = 2 * (u * o + f * a + c * n - s * i)),
              (r[2] = 2 * (c * o + f * i + s * a - u * n))),
          yt(e, t, r),
          e
        );
      }
      function vt(e, t) {
        return (e[0] = t[12]), (e[1] = t[13]), (e[2] = t[14]), e;
      }
      function wt(e, t) {
        var r = t[0],
          n = t[1],
          a = t[2],
          i = t[4],
          o = t[5],
          s = t[6],
          u = t[8],
          c = t[9],
          f = t[10];
        return (
          (e[0] = Math.hypot(r, n, a)),
          (e[1] = Math.hypot(i, o, s)),
          (e[2] = Math.hypot(u, c, f)),
          e
        );
      }
      function Mt(e, t) {
        var r = new h(3);
        wt(r, t);
        var n = 1 / r[0],
          a = 1 / r[1],
          i = 1 / r[2],
          o = t[0] * n,
          s = t[1] * a,
          u = t[2] * i,
          c = t[4] * n,
          f = t[5] * a,
          l = t[6] * i,
          _ = t[8] * n,
          d = t[9] * a,
          m = t[10] * i,
          p = o + f + m,
          b = 0;
        return (
          p > 0
            ? ((b = 2 * Math.sqrt(p + 1)),
              (e[3] = 0.25 * b),
              (e[0] = (l - d) / b),
              (e[1] = (_ - u) / b),
              (e[2] = (s - c) / b))
            : o > f && o > m
            ? ((b = 2 * Math.sqrt(1 + o - f - m)),
              (e[3] = (l - d) / b),
              (e[0] = 0.25 * b),
              (e[1] = (s + c) / b),
              (e[2] = (_ + u) / b))
            : f > m
            ? ((b = 2 * Math.sqrt(1 + f - o - m)),
              (e[3] = (_ - u) / b),
              (e[0] = (s + c) / b),
              (e[1] = 0.25 * b),
              (e[2] = (l + d) / b))
            : ((b = 2 * Math.sqrt(1 + m - o - f)),
              (e[3] = (s - c) / b),
              (e[0] = (_ + u) / b),
              (e[1] = (l + d) / b),
              (e[2] = 0.25 * b)),
          e
        );
      }
      function xt(e, t, r, n) {
        var a = t[0],
          i = t[1],
          o = t[2],
          s = t[3],
          u = a + a,
          c = i + i,
          f = o + o,
          l = a * u,
          _ = a * c,
          d = a * f,
          h = i * c,
          m = i * f,
          p = o * f,
          b = s * u,
          y = s * c,
          g = s * f,
          v = n[0],
          w = n[1],
          M = n[2];
        return (
          (e[0] = (1 - (h + p)) * v),
          (e[1] = (_ + g) * v),
          (e[2] = (d - y) * v),
          (e[3] = 0),
          (e[4] = (_ - g) * w),
          (e[5] = (1 - (l + p)) * w),
          (e[6] = (m + b) * w),
          (e[7] = 0),
          (e[8] = (d + y) * M),
          (e[9] = (m - b) * M),
          (e[10] = (1 - (l + h)) * M),
          (e[11] = 0),
          (e[12] = r[0]),
          (e[13] = r[1]),
          (e[14] = r[2]),
          (e[15] = 1),
          e
        );
      }
      function At(e, t, r, n, a) {
        var i = t[0],
          o = t[1],
          s = t[2],
          u = t[3],
          c = i + i,
          f = o + o,
          l = s + s,
          _ = i * c,
          d = i * f,
          h = i * l,
          m = o * f,
          p = o * l,
          b = s * l,
          y = u * c,
          g = u * f,
          v = u * l,
          w = n[0],
          M = n[1],
          x = n[2],
          A = a[0],
          E = a[1],
          k = a[2],
          T = (1 - (m + b)) * w,
          F = (d + v) * w,
          S = (h - g) * w,
          z = (d - v) * M,
          L = (1 - (_ + b)) * M,
          R = (p + y) * M,
          C = (h + g) * x,
          O = (p - y) * x,
          P = (1 - (_ + m)) * x;
        return (
          (e[0] = T),
          (e[1] = F),
          (e[2] = S),
          (e[3] = 0),
          (e[4] = z),
          (e[5] = L),
          (e[6] = R),
          (e[7] = 0),
          (e[8] = C),
          (e[9] = O),
          (e[10] = P),
          (e[11] = 0),
          (e[12] = r[0] + A - (T * A + z * E + C * k)),
          (e[13] = r[1] + E - (F * A + L * E + O * k)),
          (e[14] = r[2] + k - (S * A + R * E + P * k)),
          (e[15] = 1),
          e
        );
      }
      function Et(e, t) {
        var r = t[0],
          n = t[1],
          a = t[2],
          i = t[3],
          o = r + r,
          s = n + n,
          u = a + a,
          c = r * o,
          f = n * o,
          l = n * s,
          _ = a * o,
          d = a * s,
          h = a * u,
          m = i * o,
          p = i * s,
          b = i * u;
        return (
          (e[0] = 1 - l - h),
          (e[1] = f + b),
          (e[2] = _ - p),
          (e[3] = 0),
          (e[4] = f - b),
          (e[5] = 1 - c - h),
          (e[6] = d + m),
          (e[7] = 0),
          (e[8] = _ + p),
          (e[9] = d - m),
          (e[10] = 1 - c - l),
          (e[11] = 0),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = 0),
          (e[15] = 1),
          e
        );
      }
      function kt(e, t, r, n, a, i, o) {
        var s = 1 / (r - t),
          u = 1 / (a - n),
          c = 1 / (i - o);
        return (
          (e[0] = 2 * i * s),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 0),
          (e[5] = 2 * i * u),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = (r + t) * s),
          (e[9] = (a + n) * u),
          (e[10] = (o + i) * c),
          (e[11] = -1),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = o * i * 2 * c),
          (e[15] = 0),
          e
        );
      }
      function Tt(e, t, r, n, a) {
        var i,
          o = 1 / Math.tan(t / 2);
        return (
          (e[0] = o / r),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 0),
          (e[5] = o),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = 0),
          (e[9] = 0),
          (e[11] = -1),
          (e[12] = 0),
          (e[13] = 0),
          (e[15] = 0),
          null != a && a !== 1 / 0
            ? ((i = 1 / (n - a)),
              (e[10] = (a + n) * i),
              (e[14] = 2 * a * n * i))
            : ((e[10] = -1), (e[14] = -2 * n)),
          e
        );
      }
      function Ft(e, t, r, n) {
        var a = Math.tan((t.upDegrees * Math.PI) / 180),
          i = Math.tan((t.downDegrees * Math.PI) / 180),
          o = Math.tan((t.leftDegrees * Math.PI) / 180),
          s = Math.tan((t.rightDegrees * Math.PI) / 180),
          u = 2 / (o + s),
          c = 2 / (a + i);
        return (
          (e[0] = u),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 0),
          (e[5] = c),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = -(o - s) * u * 0.5),
          (e[9] = (a - i) * c * 0.5),
          (e[10] = n / (r - n)),
          (e[11] = -1),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = (n * r) / (r - n)),
          (e[15] = 0),
          e
        );
      }
      function St(e, t, r, n, a, i, o) {
        var s = 1 / (t - r),
          u = 1 / (n - a),
          c = 1 / (i - o);
        return (
          (e[0] = -2 * s),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 0),
          (e[5] = -2 * u),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = 0),
          (e[9] = 0),
          (e[10] = 2 * c),
          (e[11] = 0),
          (e[12] = (t + r) * s),
          (e[13] = (a + n) * u),
          (e[14] = (o + i) * c),
          (e[15] = 1),
          e
        );
      }
      function zt(e, t, r, n) {
        var a,
          i,
          o,
          s,
          u,
          c,
          f,
          l,
          _,
          h,
          m = t[0],
          p = t[1],
          b = t[2],
          y = n[0],
          g = n[1],
          v = n[2],
          w = r[0],
          M = r[1],
          x = r[2];
        return Math.abs(m - w) < d && Math.abs(p - M) < d && Math.abs(b - x) < d
          ? et(e)
          : ((f = m - w),
            (l = p - M),
            (_ = b - x),
            (a = g * (_ *= h = 1 / Math.hypot(f, l, _)) - v * (l *= h)),
            (i = v * (f *= h) - y * _),
            (o = y * l - g * f),
            (h = Math.hypot(a, i, o))
              ? ((a *= h = 1 / h), (i *= h), (o *= h))
              : ((a = 0), (i = 0), (o = 0)),
            (s = l * o - _ * i),
            (u = _ * a - f * o),
            (c = f * i - l * a),
            (h = Math.hypot(s, u, c))
              ? ((s *= h = 1 / h), (u *= h), (c *= h))
              : ((s = 0), (u = 0), (c = 0)),
            (e[0] = a),
            (e[1] = s),
            (e[2] = f),
            (e[3] = 0),
            (e[4] = i),
            (e[5] = u),
            (e[6] = l),
            (e[7] = 0),
            (e[8] = o),
            (e[9] = c),
            (e[10] = _),
            (e[11] = 0),
            (e[12] = -(a * m + i * p + o * b)),
            (e[13] = -(s * m + u * p + c * b)),
            (e[14] = -(f * m + l * p + _ * b)),
            (e[15] = 1),
            e);
      }
      function Lt(e, t, r, n) {
        var a = t[0],
          i = t[1],
          o = t[2],
          s = n[0],
          u = n[1],
          c = n[2],
          f = a - r[0],
          l = i - r[1],
          _ = o - r[2],
          d = f * f + l * l + _ * _;
        d > 0 && ((f *= d = 1 / Math.sqrt(d)), (l *= d), (_ *= d));
        var h = u * _ - c * l,
          m = c * f - s * _,
          p = s * l - u * f;
        return (
          (d = h * h + m * m + p * p) > 0 &&
            ((h *= d = 1 / Math.sqrt(d)), (m *= d), (p *= d)),
          (e[0] = h),
          (e[1] = m),
          (e[2] = p),
          (e[3] = 0),
          (e[4] = l * p - _ * m),
          (e[5] = _ * h - f * p),
          (e[6] = f * m - l * h),
          (e[7] = 0),
          (e[8] = f),
          (e[9] = l),
          (e[10] = _),
          (e[11] = 0),
          (e[12] = a),
          (e[13] = i),
          (e[14] = o),
          (e[15] = 1),
          e
        );
      }
      function Rt(e) {
        return (
          "mat4(" +
          e[0] +
          ", " +
          e[1] +
          ", " +
          e[2] +
          ", " +
          e[3] +
          ", " +
          e[4] +
          ", " +
          e[5] +
          ", " +
          e[6] +
          ", " +
          e[7] +
          ", " +
          e[8] +
          ", " +
          e[9] +
          ", " +
          e[10] +
          ", " +
          e[11] +
          ", " +
          e[12] +
          ", " +
          e[13] +
          ", " +
          e[14] +
          ", " +
          e[15] +
          ")"
        );
      }
      function Ct(e) {
        return Math.hypot(
          e[0],
          e[1],
          e[3],
          e[4],
          e[5],
          e[6],
          e[7],
          e[8],
          e[9],
          e[10],
          e[11],
          e[12],
          e[13],
          e[14],
          e[15]
        );
      }
      function Ot(e, t, r) {
        return (
          (e[0] = t[0] + r[0]),
          (e[1] = t[1] + r[1]),
          (e[2] = t[2] + r[2]),
          (e[3] = t[3] + r[3]),
          (e[4] = t[4] + r[4]),
          (e[5] = t[5] + r[5]),
          (e[6] = t[6] + r[6]),
          (e[7] = t[7] + r[7]),
          (e[8] = t[8] + r[8]),
          (e[9] = t[9] + r[9]),
          (e[10] = t[10] + r[10]),
          (e[11] = t[11] + r[11]),
          (e[12] = t[12] + r[12]),
          (e[13] = t[13] + r[13]),
          (e[14] = t[14] + r[14]),
          (e[15] = t[15] + r[15]),
          e
        );
      }
      function Pt(e, t, r) {
        return (
          (e[0] = t[0] - r[0]),
          (e[1] = t[1] - r[1]),
          (e[2] = t[2] - r[2]),
          (e[3] = t[3] - r[3]),
          (e[4] = t[4] - r[4]),
          (e[5] = t[5] - r[5]),
          (e[6] = t[6] - r[6]),
          (e[7] = t[7] - r[7]),
          (e[8] = t[8] - r[8]),
          (e[9] = t[9] - r[9]),
          (e[10] = t[10] - r[10]),
          (e[11] = t[11] - r[11]),
          (e[12] = t[12] - r[12]),
          (e[13] = t[13] - r[13]),
          (e[14] = t[14] - r[14]),
          (e[15] = t[15] - r[15]),
          e
        );
      }
      function It(e, t, r) {
        return (
          (e[0] = t[0] * r),
          (e[1] = t[1] * r),
          (e[2] = t[2] * r),
          (e[3] = t[3] * r),
          (e[4] = t[4] * r),
          (e[5] = t[5] * r),
          (e[6] = t[6] * r),
          (e[7] = t[7] * r),
          (e[8] = t[8] * r),
          (e[9] = t[9] * r),
          (e[10] = t[10] * r),
          (e[11] = t[11] * r),
          (e[12] = t[12] * r),
          (e[13] = t[13] * r),
          (e[14] = t[14] * r),
          (e[15] = t[15] * r),
          e
        );
      }
      function Bt(e, t, r, n) {
        return (
          (e[0] = t[0] + r[0] * n),
          (e[1] = t[1] + r[1] * n),
          (e[2] = t[2] + r[2] * n),
          (e[3] = t[3] + r[3] * n),
          (e[4] = t[4] + r[4] * n),
          (e[5] = t[5] + r[5] * n),
          (e[6] = t[6] + r[6] * n),
          (e[7] = t[7] + r[7] * n),
          (e[8] = t[8] + r[8] * n),
          (e[9] = t[9] + r[9] * n),
          (e[10] = t[10] + r[10] * n),
          (e[11] = t[11] + r[11] * n),
          (e[12] = t[12] + r[12] * n),
          (e[13] = t[13] + r[13] * n),
          (e[14] = t[14] + r[14] * n),
          (e[15] = t[15] + r[15] * n),
          e
        );
      }
      function Dt(e, t) {
        return (
          e[0] === t[0] &&
          e[1] === t[1] &&
          e[2] === t[2] &&
          e[3] === t[3] &&
          e[4] === t[4] &&
          e[5] === t[5] &&
          e[6] === t[6] &&
          e[7] === t[7] &&
          e[8] === t[8] &&
          e[9] === t[9] &&
          e[10] === t[10] &&
          e[11] === t[11] &&
          e[12] === t[12] &&
          e[13] === t[13] &&
          e[14] === t[14] &&
          e[15] === t[15]
        );
      }
      function Ut(e, t) {
        var r = e[0],
          n = e[1],
          a = e[2],
          i = e[3],
          o = e[4],
          s = e[5],
          u = e[6],
          c = e[7],
          f = e[8],
          l = e[9],
          _ = e[10],
          h = e[11],
          m = e[12],
          p = e[13],
          b = e[14],
          y = e[15],
          g = t[0],
          v = t[1],
          w = t[2],
          M = t[3],
          x = t[4],
          A = t[5],
          E = t[6],
          k = t[7],
          T = t[8],
          F = t[9],
          S = t[10],
          z = t[11],
          L = t[12],
          R = t[13],
          C = t[14],
          O = t[15];
        return (
          Math.abs(r - g) <= d * Math.max(1, Math.abs(r), Math.abs(g)) &&
          Math.abs(n - v) <= d * Math.max(1, Math.abs(n), Math.abs(v)) &&
          Math.abs(a - w) <= d * Math.max(1, Math.abs(a), Math.abs(w)) &&
          Math.abs(i - M) <= d * Math.max(1, Math.abs(i), Math.abs(M)) &&
          Math.abs(o - x) <= d * Math.max(1, Math.abs(o), Math.abs(x)) &&
          Math.abs(s - A) <= d * Math.max(1, Math.abs(s), Math.abs(A)) &&
          Math.abs(u - E) <= d * Math.max(1, Math.abs(u), Math.abs(E)) &&
          Math.abs(c - k) <= d * Math.max(1, Math.abs(c), Math.abs(k)) &&
          Math.abs(f - T) <= d * Math.max(1, Math.abs(f), Math.abs(T)) &&
          Math.abs(l - F) <= d * Math.max(1, Math.abs(l), Math.abs(F)) &&
          Math.abs(_ - S) <= d * Math.max(1, Math.abs(_), Math.abs(S)) &&
          Math.abs(h - z) <= d * Math.max(1, Math.abs(h), Math.abs(z)) &&
          Math.abs(m - L) <= d * Math.max(1, Math.abs(m), Math.abs(L)) &&
          Math.abs(p - R) <= d * Math.max(1, Math.abs(p), Math.abs(R)) &&
          Math.abs(b - C) <= d * Math.max(1, Math.abs(b), Math.abs(C)) &&
          Math.abs(y - O) <= d * Math.max(1, Math.abs(y), Math.abs(O))
        );
      }
      var jt = it,
        Vt = Pt;
      function Nt() {
        var e = new h(3);
        return h != Float32Array && ((e[0] = 0), (e[1] = 0), (e[2] = 0)), e;
      }
      function Gt(e) {
        var t = new h(3);
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t;
      }
      function qt(e) {
        var t = e[0],
          r = e[1],
          n = e[2];
        return Math.hypot(t, r, n);
      }
      function Wt(e, t, r) {
        var n = new h(3);
        return (n[0] = e), (n[1] = t), (n[2] = r), n;
      }
      function Ht(e, t) {
        return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), e;
      }
      function Yt(e, t, r, n) {
        return (e[0] = t), (e[1] = r), (e[2] = n), e;
      }
      function Xt(e, t, r) {
        return (
          (e[0] = t[0] + r[0]), (e[1] = t[1] + r[1]), (e[2] = t[2] + r[2]), e
        );
      }
      function Zt(e, t, r) {
        return (
          (e[0] = t[0] - r[0]), (e[1] = t[1] - r[1]), (e[2] = t[2] - r[2]), e
        );
      }
      function Kt(e, t, r) {
        return (
          (e[0] = t[0] * r[0]), (e[1] = t[1] * r[1]), (e[2] = t[2] * r[2]), e
        );
      }
      function Qt(e, t, r) {
        return (
          (e[0] = t[0] / r[0]), (e[1] = t[1] / r[1]), (e[2] = t[2] / r[2]), e
        );
      }
      function Jt(e, t) {
        return (
          (e[0] = Math.ceil(t[0])),
          (e[1] = Math.ceil(t[1])),
          (e[2] = Math.ceil(t[2])),
          e
        );
      }
      function $t(e, t) {
        return (
          (e[0] = Math.floor(t[0])),
          (e[1] = Math.floor(t[1])),
          (e[2] = Math.floor(t[2])),
          e
        );
      }
      function er(e, t, r) {
        return (
          (e[0] = Math.min(t[0], r[0])),
          (e[1] = Math.min(t[1], r[1])),
          (e[2] = Math.min(t[2], r[2])),
          e
        );
      }
      function tr(e, t, r) {
        return (
          (e[0] = Math.max(t[0], r[0])),
          (e[1] = Math.max(t[1], r[1])),
          (e[2] = Math.max(t[2], r[2])),
          e
        );
      }
      function rr(e, t) {
        return (
          (e[0] = Math.round(t[0])),
          (e[1] = Math.round(t[1])),
          (e[2] = Math.round(t[2])),
          e
        );
      }
      function nr(e, t, r) {
        return (e[0] = t[0] * r), (e[1] = t[1] * r), (e[2] = t[2] * r), e;
      }
      function ar(e, t, r, n) {
        return (
          (e[0] = t[0] + r[0] * n),
          (e[1] = t[1] + r[1] * n),
          (e[2] = t[2] + r[2] * n),
          e
        );
      }
      function ir(e, t) {
        var r = t[0] - e[0],
          n = t[1] - e[1],
          a = t[2] - e[2];
        return Math.hypot(r, n, a);
      }
      function or(e, t) {
        var r = t[0] - e[0],
          n = t[1] - e[1],
          a = t[2] - e[2];
        return r * r + n * n + a * a;
      }
      function sr(e) {
        var t = e[0],
          r = e[1],
          n = e[2];
        return t * t + r * r + n * n;
      }
      function ur(e, t) {
        return (e[0] = -t[0]), (e[1] = -t[1]), (e[2] = -t[2]), e;
      }
      function cr(e, t) {
        return (e[0] = 1 / t[0]), (e[1] = 1 / t[1]), (e[2] = 1 / t[2]), e;
      }
      function fr(e, t) {
        var r = t[0],
          n = t[1],
          a = t[2],
          i = r * r + n * n + a * a;
        return (
          i > 0 && (i = 1 / Math.sqrt(i)),
          (e[0] = t[0] * i),
          (e[1] = t[1] * i),
          (e[2] = t[2] * i),
          e
        );
      }
      function lr(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
      }
      function _r(e, t, r) {
        var n = t[0],
          a = t[1],
          i = t[2],
          o = r[0],
          s = r[1],
          u = r[2];
        return (
          (e[0] = a * u - i * s),
          (e[1] = i * o - n * u),
          (e[2] = n * s - a * o),
          e
        );
      }
      function dr(e, t, r, n) {
        var a = t[0],
          i = t[1],
          o = t[2];
        return (
          (e[0] = a + n * (r[0] - a)),
          (e[1] = i + n * (r[1] - i)),
          (e[2] = o + n * (r[2] - o)),
          e
        );
      }
      function hr(e, t, r, n, a, i) {
        var o = i * i,
          s = o * (2 * i - 3) + 1,
          u = o * (i - 2) + i,
          c = o * (i - 1),
          f = o * (3 - 2 * i);
        return (
          (e[0] = t[0] * s + r[0] * u + n[0] * c + a[0] * f),
          (e[1] = t[1] * s + r[1] * u + n[1] * c + a[1] * f),
          (e[2] = t[2] * s + r[2] * u + n[2] * c + a[2] * f),
          e
        );
      }
      function mr(e, t, r, n, a, i) {
        var o = 1 - i,
          s = o * o,
          u = i * i,
          c = s * o,
          f = 3 * i * s,
          l = 3 * u * o,
          _ = u * i;
        return (
          (e[0] = t[0] * c + r[0] * f + n[0] * l + a[0] * _),
          (e[1] = t[1] * c + r[1] * f + n[1] * l + a[1] * _),
          (e[2] = t[2] * c + r[2] * f + n[2] * l + a[2] * _),
          e
        );
      }
      function pr(e, t) {
        t = t || 1;
        var r = 2 * m() * Math.PI,
          n = 2 * m() - 1,
          a = Math.sqrt(1 - n * n) * t;
        return (
          (e[0] = Math.cos(r) * a), (e[1] = Math.sin(r) * a), (e[2] = n * t), e
        );
      }
      function br(e, t, r) {
        var n = t[0],
          a = t[1],
          i = t[2],
          o = r[3] * n + r[7] * a + r[11] * i + r[15];
        return (
          (o = o || 1),
          (e[0] = (r[0] * n + r[4] * a + r[8] * i + r[12]) / o),
          (e[1] = (r[1] * n + r[5] * a + r[9] * i + r[13]) / o),
          (e[2] = (r[2] * n + r[6] * a + r[10] * i + r[14]) / o),
          e
        );
      }
      function yr(e, t, r) {
        var n = t[0],
          a = t[1],
          i = t[2];
        return (
          (e[0] = n * r[0] + a * r[3] + i * r[6]),
          (e[1] = n * r[1] + a * r[4] + i * r[7]),
          (e[2] = n * r[2] + a * r[5] + i * r[8]),
          e
        );
      }
      function gr(e, t, r) {
        var n = r[0],
          a = r[1],
          i = r[2],
          o = r[3],
          s = t[0],
          u = t[1],
          c = t[2],
          f = a * c - i * u,
          l = i * s - n * c,
          _ = n * u - a * s,
          d = a * _ - i * l,
          h = i * f - n * _,
          m = n * l - a * f,
          p = 2 * o;
        return (
          (f *= p),
          (l *= p),
          (_ *= p),
          (d *= 2),
          (h *= 2),
          (m *= 2),
          (e[0] = s + f + d),
          (e[1] = u + l + h),
          (e[2] = c + _ + m),
          e
        );
      }
      function vr(e, t, r, n) {
        var a = [],
          i = [];
        return (
          (a[0] = t[0] - r[0]),
          (a[1] = t[1] - r[1]),
          (a[2] = t[2] - r[2]),
          (i[0] = a[0]),
          (i[1] = a[1] * Math.cos(n) - a[2] * Math.sin(n)),
          (i[2] = a[1] * Math.sin(n) + a[2] * Math.cos(n)),
          (e[0] = i[0] + r[0]),
          (e[1] = i[1] + r[1]),
          (e[2] = i[2] + r[2]),
          e
        );
      }
      function wr(e, t, r, n) {
        var a = [],
          i = [];
        return (
          (a[0] = t[0] - r[0]),
          (a[1] = t[1] - r[1]),
          (a[2] = t[2] - r[2]),
          (i[0] = a[2] * Math.sin(n) + a[0] * Math.cos(n)),
          (i[1] = a[1]),
          (i[2] = a[2] * Math.cos(n) - a[0] * Math.sin(n)),
          (e[0] = i[0] + r[0]),
          (e[1] = i[1] + r[1]),
          (e[2] = i[2] + r[2]),
          e
        );
      }
      function Mr(e, t, r, n) {
        var a = [],
          i = [];
        return (
          (a[0] = t[0] - r[0]),
          (a[1] = t[1] - r[1]),
          (a[2] = t[2] - r[2]),
          (i[0] = a[0] * Math.cos(n) - a[1] * Math.sin(n)),
          (i[1] = a[0] * Math.sin(n) + a[1] * Math.cos(n)),
          (i[2] = a[2]),
          (e[0] = i[0] + r[0]),
          (e[1] = i[1] + r[1]),
          (e[2] = i[2] + r[2]),
          e
        );
      }
      function xr(e, t) {
        var r = Wt(e[0], e[1], e[2]),
          n = Wt(t[0], t[1], t[2]);
        fr(r, r), fr(n, n);
        var a = lr(r, n);
        return a > 1 ? 0 : a < -1 ? Math.PI : Math.acos(a);
      }
      function Ar(e) {
        return (e[0] = 0), (e[1] = 0), (e[2] = 0), e;
      }
      function Er(e) {
        return "vec3(" + e[0] + ", " + e[1] + ", " + e[2] + ")";
      }
      function kr(e, t) {
        return e[0] === t[0] && e[1] === t[1] && e[2] === t[2];
      }
      function Tr(e, t) {
        var r = e[0],
          n = e[1],
          a = e[2],
          i = t[0],
          o = t[1],
          s = t[2];
        return (
          Math.abs(r - i) <= d * Math.max(1, Math.abs(r), Math.abs(i)) &&
          Math.abs(n - o) <= d * Math.max(1, Math.abs(n), Math.abs(o)) &&
          Math.abs(a - s) <= d * Math.max(1, Math.abs(a), Math.abs(s))
        );
      }
      var Fr,
        Sr = Zt,
        zr = Kt,
        Lr = Qt,
        Rr = ir,
        Cr = or,
        Or = qt,
        Pr = sr,
        Ir =
          ((Fr = Nt()),
          function (e, t, r, n, a, i) {
            var o, s;
            for (
              t || (t = 3),
                r || (r = 0),
                s = n ? Math.min(n * t + r, e.length) : e.length,
                o = r;
              o < s;
              o += t
            )
              (Fr[0] = e[o]),
                (Fr[1] = e[o + 1]),
                (Fr[2] = e[o + 2]),
                a(Fr, Fr, i),
                (e[o] = Fr[0]),
                (e[o + 1] = Fr[1]),
                (e[o + 2] = Fr[2]);
            return e;
          });
      function Br() {
        var e = new h(4);
        return (
          h != Float32Array && ((e[0] = 0), (e[1] = 0), (e[2] = 0), (e[3] = 0)),
          e
        );
      }
      function Dr(e) {
        var t = new h(4);
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
      }
      function Ur(e, t, r, n) {
        var a = new h(4);
        return (a[0] = e), (a[1] = t), (a[2] = r), (a[3] = n), a;
      }
      function jr(e, t) {
        return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e;
      }
      function Vr(e, t, r, n, a) {
        return (e[0] = t), (e[1] = r), (e[2] = n), (e[3] = a), e;
      }
      function Nr(e, t, r) {
        return (
          (e[0] = t[0] + r[0]),
          (e[1] = t[1] + r[1]),
          (e[2] = t[2] + r[2]),
          (e[3] = t[3] + r[3]),
          e
        );
      }
      function Gr(e, t, r) {
        return (
          (e[0] = t[0] - r[0]),
          (e[1] = t[1] - r[1]),
          (e[2] = t[2] - r[2]),
          (e[3] = t[3] - r[3]),
          e
        );
      }
      function qr(e, t, r) {
        return (
          (e[0] = t[0] * r[0]),
          (e[1] = t[1] * r[1]),
          (e[2] = t[2] * r[2]),
          (e[3] = t[3] * r[3]),
          e
        );
      }
      function Wr(e, t, r) {
        return (
          (e[0] = t[0] / r[0]),
          (e[1] = t[1] / r[1]),
          (e[2] = t[2] / r[2]),
          (e[3] = t[3] / r[3]),
          e
        );
      }
      function Hr(e, t) {
        return (
          (e[0] = Math.ceil(t[0])),
          (e[1] = Math.ceil(t[1])),
          (e[2] = Math.ceil(t[2])),
          (e[3] = Math.ceil(t[3])),
          e
        );
      }
      function Yr(e, t) {
        return (
          (e[0] = Math.floor(t[0])),
          (e[1] = Math.floor(t[1])),
          (e[2] = Math.floor(t[2])),
          (e[3] = Math.floor(t[3])),
          e
        );
      }
      function Xr(e, t, r) {
        return (
          (e[0] = Math.min(t[0], r[0])),
          (e[1] = Math.min(t[1], r[1])),
          (e[2] = Math.min(t[2], r[2])),
          (e[3] = Math.min(t[3], r[3])),
          e
        );
      }
      function Zr(e, t, r) {
        return (
          (e[0] = Math.max(t[0], r[0])),
          (e[1] = Math.max(t[1], r[1])),
          (e[2] = Math.max(t[2], r[2])),
          (e[3] = Math.max(t[3], r[3])),
          e
        );
      }
      function Kr(e, t) {
        return (
          (e[0] = Math.round(t[0])),
          (e[1] = Math.round(t[1])),
          (e[2] = Math.round(t[2])),
          (e[3] = Math.round(t[3])),
          e
        );
      }
      function Qr(e, t, r) {
        return (
          (e[0] = t[0] * r),
          (e[1] = t[1] * r),
          (e[2] = t[2] * r),
          (e[3] = t[3] * r),
          e
        );
      }
      function Jr(e, t, r, n) {
        return (
          (e[0] = t[0] + r[0] * n),
          (e[1] = t[1] + r[1] * n),
          (e[2] = t[2] + r[2] * n),
          (e[3] = t[3] + r[3] * n),
          e
        );
      }
      function $r(e, t) {
        var r = t[0] - e[0],
          n = t[1] - e[1],
          a = t[2] - e[2],
          i = t[3] - e[3];
        return Math.hypot(r, n, a, i);
      }
      function en(e, t) {
        var r = t[0] - e[0],
          n = t[1] - e[1],
          a = t[2] - e[2],
          i = t[3] - e[3];
        return r * r + n * n + a * a + i * i;
      }
      function tn(e) {
        var t = e[0],
          r = e[1],
          n = e[2],
          a = e[3];
        return Math.hypot(t, r, n, a);
      }
      function rn(e) {
        var t = e[0],
          r = e[1],
          n = e[2],
          a = e[3];
        return t * t + r * r + n * n + a * a;
      }
      function nn(e, t) {
        return (
          (e[0] = -t[0]), (e[1] = -t[1]), (e[2] = -t[2]), (e[3] = -t[3]), e
        );
      }
      function an(e, t) {
        return (
          (e[0] = 1 / t[0]),
          (e[1] = 1 / t[1]),
          (e[2] = 1 / t[2]),
          (e[3] = 1 / t[3]),
          e
        );
      }
      function on(e, t) {
        var r = t[0],
          n = t[1],
          a = t[2],
          i = t[3],
          o = r * r + n * n + a * a + i * i;
        return (
          o > 0 && (o = 1 / Math.sqrt(o)),
          (e[0] = r * o),
          (e[1] = n * o),
          (e[2] = a * o),
          (e[3] = i * o),
          e
        );
      }
      function sn(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
      }
      function un(e, t, r, n) {
        var a = r[0] * n[1] - r[1] * n[0],
          i = r[0] * n[2] - r[2] * n[0],
          o = r[0] * n[3] - r[3] * n[0],
          s = r[1] * n[2] - r[2] * n[1],
          u = r[1] * n[3] - r[3] * n[1],
          c = r[2] * n[3] - r[3] * n[2],
          f = t[0],
          l = t[1],
          _ = t[2],
          d = t[3];
        return (
          (e[0] = l * c - _ * u + d * s),
          (e[1] = -f * c + _ * o - d * i),
          (e[2] = f * u - l * o + d * a),
          (e[3] = -f * s + l * i - _ * a),
          e
        );
      }
      function cn(e, t, r, n) {
        var a = t[0],
          i = t[1],
          o = t[2],
          s = t[3];
        return (
          (e[0] = a + n * (r[0] - a)),
          (e[1] = i + n * (r[1] - i)),
          (e[2] = o + n * (r[2] - o)),
          (e[3] = s + n * (r[3] - s)),
          e
        );
      }
      function fn(e, t) {
        var r, n, a, i, o, s;
        t = t || 1;
        do {
          o = (r = 2 * m() - 1) * r + (n = 2 * m() - 1) * n;
        } while (o >= 1);
        do {
          s = (a = 2 * m() - 1) * a + (i = 2 * m() - 1) * i;
        } while (s >= 1);
        var u = Math.sqrt((1 - o) / s);
        return (
          (e[0] = t * r),
          (e[1] = t * n),
          (e[2] = t * a * u),
          (e[3] = t * i * u),
          e
        );
      }
      function ln(e, t, r) {
        var n = t[0],
          a = t[1],
          i = t[2],
          o = t[3];
        return (
          (e[0] = r[0] * n + r[4] * a + r[8] * i + r[12] * o),
          (e[1] = r[1] * n + r[5] * a + r[9] * i + r[13] * o),
          (e[2] = r[2] * n + r[6] * a + r[10] * i + r[14] * o),
          (e[3] = r[3] * n + r[7] * a + r[11] * i + r[15] * o),
          e
        );
      }
      function _n(e, t, r) {
        var n = t[0],
          a = t[1],
          i = t[2],
          o = r[0],
          s = r[1],
          u = r[2],
          c = r[3],
          f = c * n + s * i - u * a,
          l = c * a + u * n - o * i,
          _ = c * i + o * a - s * n,
          d = -o * n - s * a - u * i;
        return (
          (e[0] = f * c + d * -o + l * -u - _ * -s),
          (e[1] = l * c + d * -s + _ * -o - f * -u),
          (e[2] = _ * c + d * -u + f * -s - l * -o),
          (e[3] = t[3]),
          e
        );
      }
      function dn(e) {
        return (e[0] = 0), (e[1] = 0), (e[2] = 0), (e[3] = 0), e;
      }
      function hn(e) {
        return "vec4(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")";
      }
      function mn(e, t) {
        return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3];
      }
      function pn(e, t) {
        var r = e[0],
          n = e[1],
          a = e[2],
          i = e[3],
          o = t[0],
          s = t[1],
          u = t[2],
          c = t[3];
        return (
          Math.abs(r - o) <= d * Math.max(1, Math.abs(r), Math.abs(o)) &&
          Math.abs(n - s) <= d * Math.max(1, Math.abs(n), Math.abs(s)) &&
          Math.abs(a - u) <= d * Math.max(1, Math.abs(a), Math.abs(u)) &&
          Math.abs(i - c) <= d * Math.max(1, Math.abs(i), Math.abs(c))
        );
      }
      var bn = Gr,
        yn = qr,
        gn = Wr,
        vn = $r,
        wn = en,
        Mn = tn,
        xn = rn,
        An = (function () {
          var e = Br();
          return function (t, r, n, a, i, o) {
            var s, u;
            for (
              r || (r = 4),
                n || (n = 0),
                u = a ? Math.min(a * r + n, t.length) : t.length,
                s = n;
              s < u;
              s += r
            )
              (e[0] = t[s]),
                (e[1] = t[s + 1]),
                (e[2] = t[s + 2]),
                (e[3] = t[s + 3]),
                i(e, e, o),
                (t[s] = e[0]),
                (t[s + 1] = e[1]),
                (t[s + 2] = e[2]),
                (t[s + 3] = e[3]);
            return t;
          };
        })();
      function En() {
        var e = new h(4);
        return (
          h != Float32Array && ((e[0] = 0), (e[1] = 0), (e[2] = 0)),
          (e[3] = 1),
          e
        );
      }
      function kn(e) {
        return (e[0] = 0), (e[1] = 0), (e[2] = 0), (e[3] = 1), e;
      }
      function Tn(e, t, r) {
        r *= 0.5;
        var n = Math.sin(r);
        return (
          (e[0] = n * t[0]),
          (e[1] = n * t[1]),
          (e[2] = n * t[2]),
          (e[3] = Math.cos(r)),
          e
        );
      }
      function Fn(e, t) {
        var r = 2 * Math.acos(t[3]),
          n = Math.sin(r / 2);
        return (
          n > d
            ? ((e[0] = t[0] / n), (e[1] = t[1] / n), (e[2] = t[2] / n))
            : ((e[0] = 1), (e[1] = 0), (e[2] = 0)),
          r
        );
      }
      function Sn(e, t) {
        var r = aa(e, t);
        return Math.acos(2 * r * r - 1);
      }
      function zn(e, t, r) {
        var n = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = r[0],
          u = r[1],
          c = r[2],
          f = r[3];
        return (
          (e[0] = n * f + o * s + a * c - i * u),
          (e[1] = a * f + o * u + i * s - n * c),
          (e[2] = i * f + o * c + n * u - a * s),
          (e[3] = o * f - n * s - a * u - i * c),
          e
        );
      }
      function Ln(e, t, r) {
        r *= 0.5;
        var n = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = Math.sin(r),
          u = Math.cos(r);
        return (
          (e[0] = n * u + o * s),
          (e[1] = a * u + i * s),
          (e[2] = i * u - a * s),
          (e[3] = o * u - n * s),
          e
        );
      }
      function Rn(e, t, r) {
        r *= 0.5;
        var n = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = Math.sin(r),
          u = Math.cos(r);
        return (
          (e[0] = n * u - i * s),
          (e[1] = a * u + o * s),
          (e[2] = i * u + n * s),
          (e[3] = o * u - a * s),
          e
        );
      }
      function Cn(e, t, r) {
        r *= 0.5;
        var n = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = Math.sin(r),
          u = Math.cos(r);
        return (
          (e[0] = n * u + a * s),
          (e[1] = a * u - n * s),
          (e[2] = i * u + o * s),
          (e[3] = o * u - i * s),
          e
        );
      }
      function On(e, t) {
        var r = t[0],
          n = t[1],
          a = t[2];
        return (
          (e[0] = r),
          (e[1] = n),
          (e[2] = a),
          (e[3] = Math.sqrt(Math.abs(1 - r * r - n * n - a * a))),
          e
        );
      }
      function Pn(e, t) {
        var r = t[0],
          n = t[1],
          a = t[2],
          i = t[3],
          o = Math.sqrt(r * r + n * n + a * a),
          s = Math.exp(i),
          u = o > 0 ? (s * Math.sin(o)) / o : 0;
        return (
          (e[0] = r * u),
          (e[1] = n * u),
          (e[2] = a * u),
          (e[3] = s * Math.cos(o)),
          e
        );
      }
      function In(e, t) {
        var r = t[0],
          n = t[1],
          a = t[2],
          i = t[3],
          o = Math.sqrt(r * r + n * n + a * a),
          s = o > 0 ? Math.atan2(o, i) / o : 0;
        return (
          (e[0] = r * s),
          (e[1] = n * s),
          (e[2] = a * s),
          (e[3] = 0.5 * Math.log(r * r + n * n + a * a + i * i)),
          e
        );
      }
      function Bn(e, t, r) {
        return In(e, t), na(e, e, r), Pn(e, e), e;
      }
      function Dn(e, t, r, n) {
        var a,
          i,
          o,
          s,
          u,
          c = t[0],
          f = t[1],
          l = t[2],
          _ = t[3],
          h = r[0],
          m = r[1],
          p = r[2],
          b = r[3];
        return (
          (i = c * h + f * m + l * p + _ * b) < 0 &&
            ((i = -i), (h = -h), (m = -m), (p = -p), (b = -b)),
          1 - i > d
            ? ((a = Math.acos(i)),
              (o = Math.sin(a)),
              (s = Math.sin((1 - n) * a) / o),
              (u = Math.sin(n * a) / o))
            : ((s = 1 - n), (u = n)),
          (e[0] = s * c + u * h),
          (e[1] = s * f + u * m),
          (e[2] = s * l + u * p),
          (e[3] = s * _ + u * b),
          e
        );
      }
      function Un(e) {
        var t = m(),
          r = m(),
          n = m(),
          a = Math.sqrt(1 - t),
          i = Math.sqrt(t);
        return (
          (e[0] = a * Math.sin(2 * Math.PI * r)),
          (e[1] = a * Math.cos(2 * Math.PI * r)),
          (e[2] = i * Math.sin(2 * Math.PI * n)),
          (e[3] = i * Math.cos(2 * Math.PI * n)),
          e
        );
      }
      function jn(e, t) {
        var r = t[0],
          n = t[1],
          a = t[2],
          i = t[3],
          o = r * r + n * n + a * a + i * i,
          s = o ? 1 / o : 0;
        return (
          (e[0] = -r * s), (e[1] = -n * s), (e[2] = -a * s), (e[3] = i * s), e
        );
      }
      function Vn(e, t) {
        return (e[0] = -t[0]), (e[1] = -t[1]), (e[2] = -t[2]), (e[3] = t[3]), e;
      }
      function Nn(e, t) {
        var r,
          n = t[0] + t[4] + t[8];
        if (n > 0)
          (r = Math.sqrt(n + 1)),
            (e[3] = 0.5 * r),
            (r = 0.5 / r),
            (e[0] = (t[5] - t[7]) * r),
            (e[1] = (t[6] - t[2]) * r),
            (e[2] = (t[1] - t[3]) * r);
        else {
          var a = 0;
          t[4] > t[0] && (a = 1), t[8] > t[3 * a + a] && (a = 2);
          var i = (a + 1) % 3,
            o = (a + 2) % 3;
          (r = Math.sqrt(t[3 * a + a] - t[3 * i + i] - t[3 * o + o] + 1)),
            (e[a] = 0.5 * r),
            (r = 0.5 / r),
            (e[3] = (t[3 * i + o] - t[3 * o + i]) * r),
            (e[i] = (t[3 * i + a] + t[3 * a + i]) * r),
            (e[o] = (t[3 * o + a] + t[3 * a + o]) * r);
        }
        return e;
      }
      function Gn(e, t, r, n) {
        var a = (0.5 * Math.PI) / 180;
        (t *= a), (r *= a), (n *= a);
        var i = Math.sin(t),
          o = Math.cos(t),
          s = Math.sin(r),
          u = Math.cos(r),
          c = Math.sin(n),
          f = Math.cos(n);
        return (
          (e[0] = i * u * f - o * s * c),
          (e[1] = o * s * f + i * u * c),
          (e[2] = o * u * c - i * s * f),
          (e[3] = o * u * f + i * s * c),
          e
        );
      }
      function qn(e) {
        return "quat(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")";
      }
      var Wn,
        Hn,
        Yn,
        Xn,
        Zn,
        Kn,
        Qn = Dr,
        Jn = Ur,
        $n = jr,
        ea = Vr,
        ta = Nr,
        ra = zn,
        na = Qr,
        aa = sn,
        ia = cn,
        oa = tn,
        sa = oa,
        ua = rn,
        ca = ua,
        fa = on,
        la = mn,
        _a = pn,
        da =
          ((Wn = Nt()),
          (Hn = Wt(1, 0, 0)),
          (Yn = Wt(0, 1, 0)),
          function (e, t, r) {
            var n = lr(t, r);
            return n < -0.999999
              ? (_r(Wn, Hn, t),
                Or(Wn) < 1e-6 && _r(Wn, Yn, t),
                fr(Wn, Wn),
                Tn(e, Wn, Math.PI),
                e)
              : n > 0.999999
              ? ((e[0] = 0), (e[1] = 0), (e[2] = 0), (e[3] = 1), e)
              : (_r(Wn, t, r),
                (e[0] = Wn[0]),
                (e[1] = Wn[1]),
                (e[2] = Wn[2]),
                (e[3] = 1 + n),
                fa(e, e));
          }),
        ha =
          ((Xn = En()),
          (Zn = En()),
          function (e, t, r, n, a, i) {
            return (
              Dn(Xn, t, a, i),
              Dn(Zn, r, n, i),
              Dn(e, Xn, Zn, 2 * i * (1 - i)),
              e
            );
          }),
        ma =
          ((Kn = be()),
          function (e, t, r, n) {
            return (
              (Kn[0] = r[0]),
              (Kn[3] = r[1]),
              (Kn[6] = r[2]),
              (Kn[1] = n[0]),
              (Kn[4] = n[1]),
              (Kn[7] = n[2]),
              (Kn[2] = -t[0]),
              (Kn[5] = -t[1]),
              (Kn[8] = -t[2]),
              fa(e, Nn(e, Kn))
            );
          });
      function pa() {
        var e = new h(8);
        return (
          h != Float32Array &&
            ((e[0] = 0),
            (e[1] = 0),
            (e[2] = 0),
            (e[4] = 0),
            (e[5] = 0),
            (e[6] = 0),
            (e[7] = 0)),
          (e[3] = 1),
          e
        );
      }
      function ba(e) {
        var t = new h(8);
        return (
          (t[0] = e[0]),
          (t[1] = e[1]),
          (t[2] = e[2]),
          (t[3] = e[3]),
          (t[4] = e[4]),
          (t[5] = e[5]),
          (t[6] = e[6]),
          (t[7] = e[7]),
          t
        );
      }
      function ya(e, t, r, n, a, i, o, s) {
        var u = new h(8);
        return (
          (u[0] = e),
          (u[1] = t),
          (u[2] = r),
          (u[3] = n),
          (u[4] = a),
          (u[5] = i),
          (u[6] = o),
          (u[7] = s),
          u
        );
      }
      function ga(e, t, r, n, a, i, o) {
        var s = new h(8);
        (s[0] = e), (s[1] = t), (s[2] = r), (s[3] = n);
        var u = 0.5 * a,
          c = 0.5 * i,
          f = 0.5 * o;
        return (
          (s[4] = u * n + c * r - f * t),
          (s[5] = c * n + f * e - u * r),
          (s[6] = f * n + u * t - c * e),
          (s[7] = -u * e - c * t - f * r),
          s
        );
      }
      function va(e, t, r) {
        var n = 0.5 * r[0],
          a = 0.5 * r[1],
          i = 0.5 * r[2],
          o = t[0],
          s = t[1],
          u = t[2],
          c = t[3];
        return (
          (e[0] = o),
          (e[1] = s),
          (e[2] = u),
          (e[3] = c),
          (e[4] = n * c + a * u - i * s),
          (e[5] = a * c + i * o - n * u),
          (e[6] = i * c + n * s - a * o),
          (e[7] = -n * o - a * s - i * u),
          e
        );
      }
      function wa(e, t) {
        return (
          (e[0] = 0),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 1),
          (e[4] = 0.5 * t[0]),
          (e[5] = 0.5 * t[1]),
          (e[6] = 0.5 * t[2]),
          (e[7] = 0),
          e
        );
      }
      function Ma(e, t) {
        return (
          (e[0] = t[0]),
          (e[1] = t[1]),
          (e[2] = t[2]),
          (e[3] = t[3]),
          (e[4] = 0),
          (e[5] = 0),
          (e[6] = 0),
          (e[7] = 0),
          e
        );
      }
      function xa(e, t) {
        var r = En();
        Mt(r, t);
        var n = new h(3);
        return vt(n, t), va(e, r, n), e;
      }
      function Aa(e, t) {
        return (
          (e[0] = t[0]),
          (e[1] = t[1]),
          (e[2] = t[2]),
          (e[3] = t[3]),
          (e[4] = t[4]),
          (e[5] = t[5]),
          (e[6] = t[6]),
          (e[7] = t[7]),
          e
        );
      }
      function Ea(e) {
        return (
          (e[0] = 0),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 1),
          (e[4] = 0),
          (e[5] = 0),
          (e[6] = 0),
          (e[7] = 0),
          e
        );
      }
      function ka(e, t, r, n, a, i, o, s, u) {
        return (
          (e[0] = t),
          (e[1] = r),
          (e[2] = n),
          (e[3] = a),
          (e[4] = i),
          (e[5] = o),
          (e[6] = s),
          (e[7] = u),
          e
        );
      }
      var Ta = $n;
      function Fa(e, t) {
        return (e[0] = t[4]), (e[1] = t[5]), (e[2] = t[6]), (e[3] = t[7]), e;
      }
      var Sa = $n;
      function za(e, t) {
        return (e[4] = t[0]), (e[5] = t[1]), (e[6] = t[2]), (e[7] = t[3]), e;
      }
      function La(e, t) {
        var r = t[4],
          n = t[5],
          a = t[6],
          i = t[7],
          o = -t[0],
          s = -t[1],
          u = -t[2],
          c = t[3];
        return (
          (e[0] = 2 * (r * c + i * o + n * u - a * s)),
          (e[1] = 2 * (n * c + i * s + a * o - r * u)),
          (e[2] = 2 * (a * c + i * u + r * s - n * o)),
          e
        );
      }
      function Ra(e, t, r) {
        var n = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = 0.5 * r[0],
          u = 0.5 * r[1],
          c = 0.5 * r[2],
          f = t[4],
          l = t[5],
          _ = t[6],
          d = t[7];
        return (
          (e[0] = n),
          (e[1] = a),
          (e[2] = i),
          (e[3] = o),
          (e[4] = o * s + a * c - i * u + f),
          (e[5] = o * u + i * s - n * c + l),
          (e[6] = o * c + n * u - a * s + _),
          (e[7] = -n * s - a * u - i * c + d),
          e
        );
      }
      function Ca(e, t, r) {
        var n = -t[0],
          a = -t[1],
          i = -t[2],
          o = t[3],
          s = t[4],
          u = t[5],
          c = t[6],
          f = t[7],
          l = s * o + f * n + u * i - c * a,
          _ = u * o + f * a + c * n - s * i,
          d = c * o + f * i + s * a - u * n,
          h = f * o - s * n - u * a - c * i;
        return (
          Ln(e, t, r),
          (n = e[0]),
          (a = e[1]),
          (i = e[2]),
          (o = e[3]),
          (e[4] = l * o + h * n + _ * i - d * a),
          (e[5] = _ * o + h * a + d * n - l * i),
          (e[6] = d * o + h * i + l * a - _ * n),
          (e[7] = h * o - l * n - _ * a - d * i),
          e
        );
      }
      function Oa(e, t, r) {
        var n = -t[0],
          a = -t[1],
          i = -t[2],
          o = t[3],
          s = t[4],
          u = t[5],
          c = t[6],
          f = t[7],
          l = s * o + f * n + u * i - c * a,
          _ = u * o + f * a + c * n - s * i,
          d = c * o + f * i + s * a - u * n,
          h = f * o - s * n - u * a - c * i;
        return (
          Rn(e, t, r),
          (n = e[0]),
          (a = e[1]),
          (i = e[2]),
          (o = e[3]),
          (e[4] = l * o + h * n + _ * i - d * a),
          (e[5] = _ * o + h * a + d * n - l * i),
          (e[6] = d * o + h * i + l * a - _ * n),
          (e[7] = h * o - l * n - _ * a - d * i),
          e
        );
      }
      function Pa(e, t, r) {
        var n = -t[0],
          a = -t[1],
          i = -t[2],
          o = t[3],
          s = t[4],
          u = t[5],
          c = t[6],
          f = t[7],
          l = s * o + f * n + u * i - c * a,
          _ = u * o + f * a + c * n - s * i,
          d = c * o + f * i + s * a - u * n,
          h = f * o - s * n - u * a - c * i;
        return (
          Cn(e, t, r),
          (n = e[0]),
          (a = e[1]),
          (i = e[2]),
          (o = e[3]),
          (e[4] = l * o + h * n + _ * i - d * a),
          (e[5] = _ * o + h * a + d * n - l * i),
          (e[6] = d * o + h * i + l * a - _ * n),
          (e[7] = h * o - l * n - _ * a - d * i),
          e
        );
      }
      function Ia(e, t, r) {
        var n = r[0],
          a = r[1],
          i = r[2],
          o = r[3],
          s = t[0],
          u = t[1],
          c = t[2],
          f = t[3];
        return (
          (e[0] = s * o + f * n + u * i - c * a),
          (e[1] = u * o + f * a + c * n - s * i),
          (e[2] = c * o + f * i + s * a - u * n),
          (e[3] = f * o - s * n - u * a - c * i),
          (s = t[4]),
          (u = t[5]),
          (c = t[6]),
          (f = t[7]),
          (e[4] = s * o + f * n + u * i - c * a),
          (e[5] = u * o + f * a + c * n - s * i),
          (e[6] = c * o + f * i + s * a - u * n),
          (e[7] = f * o - s * n - u * a - c * i),
          e
        );
      }
      function Ba(e, t, r) {
        var n = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = r[0],
          u = r[1],
          c = r[2],
          f = r[3];
        return (
          (e[0] = n * f + o * s + a * c - i * u),
          (e[1] = a * f + o * u + i * s - n * c),
          (e[2] = i * f + o * c + n * u - a * s),
          (e[3] = o * f - n * s - a * u - i * c),
          (s = r[4]),
          (u = r[5]),
          (c = r[6]),
          (f = r[7]),
          (e[4] = n * f + o * s + a * c - i * u),
          (e[5] = a * f + o * u + i * s - n * c),
          (e[6] = i * f + o * c + n * u - a * s),
          (e[7] = o * f - n * s - a * u - i * c),
          e
        );
      }
      function Da(e, t, r, n) {
        if (Math.abs(n) < d) return Aa(e, t);
        var a = Math.hypot(r[0], r[1], r[2]);
        n *= 0.5;
        var i = Math.sin(n),
          o = (i * r[0]) / a,
          s = (i * r[1]) / a,
          u = (i * r[2]) / a,
          c = Math.cos(n),
          f = t[0],
          l = t[1],
          _ = t[2],
          h = t[3];
        (e[0] = f * c + h * o + l * u - _ * s),
          (e[1] = l * c + h * s + _ * o - f * u),
          (e[2] = _ * c + h * u + f * s - l * o),
          (e[3] = h * c - f * o - l * s - _ * u);
        var m = t[4],
          p = t[5],
          b = t[6],
          y = t[7];
        return (
          (e[4] = m * c + y * o + p * u - b * s),
          (e[5] = p * c + y * s + b * o - m * u),
          (e[6] = b * c + y * u + m * s - p * o),
          (e[7] = y * c - m * o - p * s - b * u),
          e
        );
      }
      function Ua(e, t, r) {
        return (
          (e[0] = t[0] + r[0]),
          (e[1] = t[1] + r[1]),
          (e[2] = t[2] + r[2]),
          (e[3] = t[3] + r[3]),
          (e[4] = t[4] + r[4]),
          (e[5] = t[5] + r[5]),
          (e[6] = t[6] + r[6]),
          (e[7] = t[7] + r[7]),
          e
        );
      }
      function ja(e, t, r) {
        var n = t[0],
          a = t[1],
          i = t[2],
          o = t[3],
          s = r[4],
          u = r[5],
          c = r[6],
          f = r[7],
          l = t[4],
          _ = t[5],
          d = t[6],
          h = t[7],
          m = r[0],
          p = r[1],
          b = r[2],
          y = r[3];
        return (
          (e[0] = n * y + o * m + a * b - i * p),
          (e[1] = a * y + o * p + i * m - n * b),
          (e[2] = i * y + o * b + n * p - a * m),
          (e[3] = o * y - n * m - a * p - i * b),
          (e[4] =
            n * f + o * s + a * c - i * u + l * y + h * m + _ * b - d * p),
          (e[5] =
            a * f + o * u + i * s - n * c + _ * y + h * p + d * m - l * b),
          (e[6] =
            i * f + o * c + n * u - a * s + d * y + h * b + l * p - _ * m),
          (e[7] =
            o * f - n * s - a * u - i * c + h * y - l * m - _ * p - d * b),
          e
        );
      }
      var Va = ja;
      function Na(e, t, r) {
        return (
          (e[0] = t[0] * r),
          (e[1] = t[1] * r),
          (e[2] = t[2] * r),
          (e[3] = t[3] * r),
          (e[4] = t[4] * r),
          (e[5] = t[5] * r),
          (e[6] = t[6] * r),
          (e[7] = t[7] * r),
          e
        );
      }
      var Ga = aa;
      function qa(e, t, r, n) {
        var a = 1 - n;
        return (
          Ga(t, r) < 0 && (n = -n),
          (e[0] = t[0] * a + r[0] * n),
          (e[1] = t[1] * a + r[1] * n),
          (e[2] = t[2] * a + r[2] * n),
          (e[3] = t[3] * a + r[3] * n),
          (e[4] = t[4] * a + r[4] * n),
          (e[5] = t[5] * a + r[5] * n),
          (e[6] = t[6] * a + r[6] * n),
          (e[7] = t[7] * a + r[7] * n),
          e
        );
      }
      function Wa(e, t) {
        var r = Za(t);
        return (
          (e[0] = -t[0] / r),
          (e[1] = -t[1] / r),
          (e[2] = -t[2] / r),
          (e[3] = t[3] / r),
          (e[4] = -t[4] / r),
          (e[5] = -t[5] / r),
          (e[6] = -t[6] / r),
          (e[7] = t[7] / r),
          e
        );
      }
      function Ha(e, t) {
        return (
          (e[0] = -t[0]),
          (e[1] = -t[1]),
          (e[2] = -t[2]),
          (e[3] = t[3]),
          (e[4] = -t[4]),
          (e[5] = -t[5]),
          (e[6] = -t[6]),
          (e[7] = t[7]),
          e
        );
      }
      var Ya = oa,
        Xa = Ya,
        Za = ua,
        Ka = Za;
      function Qa(e, t) {
        var r = Za(t);
        if (r > 0) {
          r = Math.sqrt(r);
          var n = t[0] / r,
            a = t[1] / r,
            i = t[2] / r,
            o = t[3] / r,
            s = t[4],
            u = t[5],
            c = t[6],
            f = t[7],
            l = n * s + a * u + i * c + o * f;
          (e[0] = n),
            (e[1] = a),
            (e[2] = i),
            (e[3] = o),
            (e[4] = (s - n * l) / r),
            (e[5] = (u - a * l) / r),
            (e[6] = (c - i * l) / r),
            (e[7] = (f - o * l) / r);
        }
        return e;
      }
      function Ja(e) {
        return (
          "quat2(" +
          e[0] +
          ", " +
          e[1] +
          ", " +
          e[2] +
          ", " +
          e[3] +
          ", " +
          e[4] +
          ", " +
          e[5] +
          ", " +
          e[6] +
          ", " +
          e[7] +
          ")"
        );
      }
      function $a(e, t) {
        return (
          e[0] === t[0] &&
          e[1] === t[1] &&
          e[2] === t[2] &&
          e[3] === t[3] &&
          e[4] === t[4] &&
          e[5] === t[5] &&
          e[6] === t[6] &&
          e[7] === t[7]
        );
      }
      function ei(e, t) {
        var r = e[0],
          n = e[1],
          a = e[2],
          i = e[3],
          o = e[4],
          s = e[5],
          u = e[6],
          c = e[7],
          f = t[0],
          l = t[1],
          _ = t[2],
          h = t[3],
          m = t[4],
          p = t[5],
          b = t[6],
          y = t[7];
        return (
          Math.abs(r - f) <= d * Math.max(1, Math.abs(r), Math.abs(f)) &&
          Math.abs(n - l) <= d * Math.max(1, Math.abs(n), Math.abs(l)) &&
          Math.abs(a - _) <= d * Math.max(1, Math.abs(a), Math.abs(_)) &&
          Math.abs(i - h) <= d * Math.max(1, Math.abs(i), Math.abs(h)) &&
          Math.abs(o - m) <= d * Math.max(1, Math.abs(o), Math.abs(m)) &&
          Math.abs(s - p) <= d * Math.max(1, Math.abs(s), Math.abs(p)) &&
          Math.abs(u - b) <= d * Math.max(1, Math.abs(u), Math.abs(b)) &&
          Math.abs(c - y) <= d * Math.max(1, Math.abs(c), Math.abs(y))
        );
      }
      function ti() {
        var e = new h(2);
        return h != Float32Array && ((e[0] = 0), (e[1] = 0)), e;
      }
      function ri(e) {
        var t = new h(2);
        return (t[0] = e[0]), (t[1] = e[1]), t;
      }
      function ni(e, t) {
        var r = new h(2);
        return (r[0] = e), (r[1] = t), r;
      }
      function ai(e, t) {
        return (e[0] = t[0]), (e[1] = t[1]), e;
      }
      function ii(e, t, r) {
        return (e[0] = t), (e[1] = r), e;
      }
      function oi(e, t, r) {
        return (e[0] = t[0] + r[0]), (e[1] = t[1] + r[1]), e;
      }
      function si(e, t, r) {
        return (e[0] = t[0] - r[0]), (e[1] = t[1] - r[1]), e;
      }
      function ui(e, t, r) {
        return (e[0] = t[0] * r[0]), (e[1] = t[1] * r[1]), e;
      }
      function ci(e, t, r) {
        return (e[0] = t[0] / r[0]), (e[1] = t[1] / r[1]), e;
      }
      function fi(e, t) {
        return (e[0] = Math.ceil(t[0])), (e[1] = Math.ceil(t[1])), e;
      }
      function li(e, t) {
        return (e[0] = Math.floor(t[0])), (e[1] = Math.floor(t[1])), e;
      }
      function _i(e, t, r) {
        return (e[0] = Math.min(t[0], r[0])), (e[1] = Math.min(t[1], r[1])), e;
      }
      function di(e, t, r) {
        return (e[0] = Math.max(t[0], r[0])), (e[1] = Math.max(t[1], r[1])), e;
      }
      function hi(e, t) {
        return (e[0] = Math.round(t[0])), (e[1] = Math.round(t[1])), e;
      }
      function mi(e, t, r) {
        return (e[0] = t[0] * r), (e[1] = t[1] * r), e;
      }
      function pi(e, t, r, n) {
        return (e[0] = t[0] + r[0] * n), (e[1] = t[1] + r[1] * n), e;
      }
      function bi(e, t) {
        var r = t[0] - e[0],
          n = t[1] - e[1];
        return Math.hypot(r, n);
      }
      function yi(e, t) {
        var r = t[0] - e[0],
          n = t[1] - e[1];
        return r * r + n * n;
      }
      function gi(e) {
        var t = e[0],
          r = e[1];
        return Math.hypot(t, r);
      }
      function vi(e) {
        var t = e[0],
          r = e[1];
        return t * t + r * r;
      }
      function wi(e, t) {
        return (e[0] = -t[0]), (e[1] = -t[1]), e;
      }
      function Mi(e, t) {
        return (e[0] = 1 / t[0]), (e[1] = 1 / t[1]), e;
      }
      function xi(e, t) {
        var r = t[0],
          n = t[1],
          a = r * r + n * n;
        return (
          a > 0 && (a = 1 / Math.sqrt(a)),
          (e[0] = t[0] * a),
          (e[1] = t[1] * a),
          e
        );
      }
      function Ai(e, t) {
        return e[0] * t[0] + e[1] * t[1];
      }
      function Ei(e, t, r) {
        var n = t[0] * r[1] - t[1] * r[0];
        return (e[0] = e[1] = 0), (e[2] = n), e;
      }
      function ki(e, t, r, n) {
        var a = t[0],
          i = t[1];
        return (e[0] = a + n * (r[0] - a)), (e[1] = i + n * (r[1] - i)), e;
      }
      function Ti(e, t) {
        t = t || 1;
        var r = 2 * m() * Math.PI;
        return (e[0] = Math.cos(r) * t), (e[1] = Math.sin(r) * t), e;
      }
      function Fi(e, t, r) {
        var n = t[0],
          a = t[1];
        return (e[0] = r[0] * n + r[2] * a), (e[1] = r[1] * n + r[3] * a), e;
      }
      function Si(e, t, r) {
        var n = t[0],
          a = t[1];
        return (
          (e[0] = r[0] * n + r[2] * a + r[4]),
          (e[1] = r[1] * n + r[3] * a + r[5]),
          e
        );
      }
      function zi(e, t, r) {
        var n = t[0],
          a = t[1];
        return (
          (e[0] = r[0] * n + r[3] * a + r[6]),
          (e[1] = r[1] * n + r[4] * a + r[7]),
          e
        );
      }
      function Li(e, t, r) {
        var n = t[0],
          a = t[1];
        return (
          (e[0] = r[0] * n + r[4] * a + r[12]),
          (e[1] = r[1] * n + r[5] * a + r[13]),
          e
        );
      }
      function Ri(e, t, r, n) {
        var a = t[0] - r[0],
          i = t[1] - r[1],
          o = Math.sin(n),
          s = Math.cos(n);
        return (e[0] = a * s - i * o + r[0]), (e[1] = a * o + i * s + r[1]), e;
      }
      function Ci(e, t) {
        var r = e[0],
          n = e[1],
          a = t[0],
          i = t[1],
          o = r * r + n * n;
        o > 0 && (o = 1 / Math.sqrt(o));
        var s = a * a + i * i;
        s > 0 && (s = 1 / Math.sqrt(s));
        var u = (r * a + n * i) * o * s;
        return u > 1 ? 0 : u < -1 ? Math.PI : Math.acos(u);
      }
      function Oi(e) {
        return (e[0] = 0), (e[1] = 0), e;
      }
      function Pi(e) {
        return "vec2(" + e[0] + ", " + e[1] + ")";
      }
      function Ii(e, t) {
        return e[0] === t[0] && e[1] === t[1];
      }
      function Bi(e, t) {
        var r = e[0],
          n = e[1],
          a = t[0],
          i = t[1];
        return (
          Math.abs(r - a) <= d * Math.max(1, Math.abs(r), Math.abs(a)) &&
          Math.abs(n - i) <= d * Math.max(1, Math.abs(n), Math.abs(i))
        );
      }
      var Di = gi,
        Ui = si,
        ji = ui,
        Vi = ci,
        Ni = bi,
        Gi = yi,
        qi = vi,
        Wi = (function () {
          var e = ti();
          return function (t, r, n, a, i, o) {
            var s, u;
            for (
              r || (r = 2),
                n || (n = 0),
                u = a ? Math.min(a * r + n, t.length) : t.length,
                s = n;
              s < u;
              s += r
            )
              (e[0] = t[s]),
                (e[1] = t[s + 1]),
                i(e, e, o),
                (t[s] = e[0]),
                (t[s + 1] = e[1]);
            return t;
          };
        })();
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(5);
      (t.Camera = n.Camera),
        (t.CameraPoseMode = n.CameraPoseMode),
        (t.CameraMirrorMode = n.CameraMirrorMode);
      var a = r(49);
      t.ImageAnchorGroup = a.ImageAnchorGroup;
      var i = r(50);
      t.ImageTrackerLoader = i.ImageTrackerLoader;
      var o = r(51);
      t.InstantWorldAnchorGroup = o.InstantWorldAnchorGroup;
      var s = r(52);
      t.FaceAnchorGroup = s.FaceAnchorGroup;
      var u = r(53);
      t.FaceTrackerLoader = u.FaceTrackerLoader;
      var c = r(14);
      t.FaceBufferGeometry = c.FaceBufferGeometry;
      var f = r(15);
      t.FaceMeshLoader = f.FaceMeshLoader;
      var l = r(16);
      t.HeadMaskMesh = l.HeadMaskMesh;
      var _ = r(54);
      t.HeadMaskMeshLoader = _.HeadMaskMeshLoader;
      var d = r(55);
      t.LoadingManager = d.LoadingManager;
      var h = r(7);
      (t.ImageTracker = h.ImageTracker),
        (t.InstantWorldTracker = h.InstantWorldTracker),
        (t.BarcodeFinder = h.BarcodeFinder),
        (t.FaceTracker = h.FaceTracker),
        (t.CameraSource = h.CameraSource),
        (t.HTMLElementSource = h.HTMLElementSource),
        (t.onFrameUpdate = h.onFrameUpdate),
        (t.glContextSet = h.glContextSet);
      var m = r(3);
      (t.FaceMesh = m.FaceMesh),
        (t.permissionDenied = m.permissionDenied),
        (t.permissionGranted = m.permissionGranted),
        (t.permissionRequest = m.permissionRequest),
        (t.permissionDeniedUI = m.permissionDeniedUI),
        (t.permissionRequestUI = m.permissionRequestUI);
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(19);
      t.ImageTracker = n.ImageTracker;
      var a = r(41);
      t.InstantWorldTracker = a.InstantWorldTracker;
      var i = r(42);
      t.BarcodeFinder = i.BarcodeFinder;
      var o = r(43);
      t.FaceTracker = o.FaceTracker;
      var s = r(44);
      t.FaceMesh = s.FaceMesh;
      var u = r(45);
      t.CameraSource = u.CameraSource;
      var c = r(46);
      t.HTMLElementSource = c.HTMLElementSource;
      var f = r(47);
      t.Pipeline = f.Pipeline;
      var l = r(48);
      (t.permissionDeniedUI = l.permissionDeniedUI),
        (t.permissionGranted = l.permissionGranted),
        (t.permissionDenied = l.permissionDenied),
        (t.permissionRequest = l.permissionRequest),
        (t.permissionRequestUI = l.permissionRequestUI),
        (t.Permission = l.Permission);
      var _ = r(0);
      (t.cameraDefaultDeviceID = _.cameraDefaultDeviceID),
        (t.invert = _.invert),
        (t.drawPlane = _.drawPlane),
        (t.projectionMatrixFromCameraModel = _.projectionMatrixFromCameraModel);
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.compileShader = function (e, t, r) {
          let n = e.createShader(t);
          if (!n) throw new Error("Unable to create shader");
          e.shaderSource(n, r), e.compileShader(n);
          let a = e.getShaderInfoLog(n);
          if (a && a.length > 0) throw new Error("Shader compile error: " + a);
          return n;
        }),
        (t.linkProgram = function (e, t) {
          e.linkProgram(t);
          let r = e.getProgramInfoLog(t);
          if (r && r.length > 0) throw new Error("Unable to link: " + r);
        });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(3),
        a = r(7),
        i = AFRAME.THREE;
      var o, s;
      !(function (e) {
        (e[(e.Default = 0)] = "Default"),
          (e[(e.Attitude = 1)] = "Attitude"),
          (e[(e.AnchorOrigin = 2)] = "AnchorOrigin");
      })((o = t.CameraPoseMode || (t.CameraPoseMode = {}))),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Poses = 1)] = "Poses"),
            (e[(e.CSS = 2)] = "CSS");
        })((s = t.CameraMirrorMode || (t.CameraMirrorMode = {})));
      class u extends i.Camera {
        constructor(e) {
          super(),
            (this.backgroundTexture = new i.Texture()),
            (this.poseMode = o.Default),
            (this.rearCameraMirrorMode = s.None),
            (this.userCameraMirrorMode = s.Poses),
            (this._currentMirrorMode = s.None),
            (this.isPerspectiveCamera = !0),
            (this._cameraRunningRear = null),
            (this._hasSetCSSScaleX = !1),
            (this.pipeline = e || a.getDefaultPipeline()),
            (this.rawPose = this.pipeline.cameraPoseDefault()),
            (this.rearCameraSource = new a.CameraSource(
              n.cameraDefaultDeviceID(),
              this.pipeline
            )),
            (this.userCameraSource = new a.CameraSource(
              n.cameraDefaultDeviceID(!0),
              this.pipeline
            )),
            (this.matrixAutoUpdate = !1),
            document.addEventListener("visibilitychange", () => {
              "visible" == document.visibilityState
                ? this._resume()
                : this._pause();
            });
        }
        _pause() {
          this.userCameraSource.pause(), this.rearCameraSource.pause();
        }
        _resume() {
          null !== this._cameraRunningRear &&
            (this._cameraRunningRear
              ? this.rearCameraSource.start()
              : this.userCameraSource.start());
        }
        start(e) {
          e ? this.userCameraSource.start() : this.rearCameraSource.start(),
            (this._cameraRunningRear = !e);
        }
        setPoseModeAnchorOrigin(e) {
          (this.poseAnchorOrigin = e), (this.poseMode = o.AnchorOrigin);
        }
        get currentMirrorMode() {
          return this._currentMirrorMode;
        }
        updateFrame(e) {
          e.state.reset(),
            this.pipeline.processGL(),
            e
              .getContext()
              .viewport(0, 0, e.domElement.width, e.domElement.height),
            e.state.reset(),
            this.pipeline.frameUpdate(),
            (this._currentMirrorMode = this.pipeline.cameraFrameUserFacing()
              ? this.userCameraMirrorMode
              : this.rearCameraMirrorMode),
            this._currentMirrorMode !== s.CSS && this._hasSetCSSScaleX
              ? ((e.domElement.style.transform = ""),
                (this._hasSetCSSScaleX = !1))
              : this._currentMirrorMode !== s.CSS ||
                this._hasSetCSSScaleX ||
                ((e.domElement.style.transform = "scaleX(-1)"),
                (this._hasSetCSSScaleX = !0));
          let t = this.pipeline.cameraModel(),
            r = n.projectionMatrixFromCameraModel(
              t,
              e.domElement.width,
              e.domElement.height
            );
          switch (
            (this.projectionMatrix.fromArray(r),
            this.projectionMatrixInverse.getInverse(this.projectionMatrix),
            this.poseMode)
          ) {
            case o.Default:
              this.rawPose = this.pipeline.cameraPoseDefault();
              break;
            case o.Attitude:
              this.rawPose = this.pipeline.cameraPoseWithAttitude(
                this._currentMirrorMode === s.Poses
              );
              break;
            case o.AnchorOrigin:
              this.rawPose = this.poseAnchorOrigin
                ? this._getOriginPose()
                : this.pipeline.cameraPoseDefault();
          }
          this._updateBackgroundTexture(e);
        }
        updateMatrixWorld(e) {
          this.matrix.fromArray(this.rawPose), super.updateMatrixWorld(e);
        }
        _getOriginPose() {
          return this.poseAnchorOrigin
            ? this.pipeline.cameraPoseWithOrigin(
                this.poseAnchorOrigin.poseCameraRelative(
                  this._currentMirrorMode === s.Poses
                )
              )
            : this.pipeline.cameraPoseDefault();
        }
        _updateBackgroundTexture(e) {
          this.pipeline.cameraFrameUploadGL();
          let t = this.pipeline.cameraFrameTextureGL();
          if (!t) return;
          let r = e.properties.get(this.backgroundTexture);
          (r.__webglTexture = t), (r.__webglInit = !0);
          let n = new i.Matrix4();
          n.fromArray(
            this.pipeline.cameraFrameTextureMatrix(
              e.domElement.width,
              e.domElement.height,
              this._currentMirrorMode === s.Poses
            )
          );
          let a = new i.Matrix3();
          a.setFromMatrix4(n),
            (a.elements[6] = n.elements[12]),
            (a.elements[7] = n.elements[13]),
            (a.elements[8] = 1),
            (this.backgroundTexture.matrixAutoUpdate = !1),
            (this.backgroundTexture.matrix = a);
        }
      }
      t.Camera = u;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.Event = class {
        constructor() {
          this._funcs = [];
        }
        bind(e) {
          this._funcs.push(e);
        }
        unbind(e) {
          let t = this._funcs.indexOf(e);
          t > -1 && this._funcs.splice(t, 1);
        }
        emit() {
          for (var e = 0, t = this._funcs.length; e < t; e++) this._funcs[e]();
        }
      };
      t.Event1 = class {
        constructor() {
          this._funcs = [];
        }
        bind(e) {
          this._funcs.push(e);
        }
        unbind(e) {
          let t = this._funcs.indexOf(e);
          t > -1 && this._funcs.splice(t, 1);
        }
        emit(e) {
          for (var t = 0, r = this._funcs.length; t < r; t++) this._funcs[t](e);
        }
      };
      t.Event2 = class {
        constructor() {
          this._funcs = [];
        }
        bind(e) {
          this._funcs.push(e);
        }
        unbind(e) {
          let t = this._funcs.indexOf(e);
          t > -1 && this._funcs.splice(t, 1);
        }
        emit(e, t) {
          for (var r = 0, n = this._funcs.length; r < n; r++)
            this._funcs[r](e, t);
        }
      };
      t.Event3 = class {
        constructor() {
          this._funcs = [];
        }
        bind(e) {
          this._funcs.push(e);
        }
        unbind(e) {
          let t = this._funcs.indexOf(e);
          t > -1 && this._funcs.splice(t, 1);
        }
        emit(e, t, r) {
          for (var n = 0, a = this._funcs.length; n < a; n++)
            this._funcs[n](e, t, r);
        }
      };
      t.Event5 = class {
        constructor() {
          this._funcs = [];
        }
        bind(e) {
          this._funcs.push(e);
        }
        unbind(e) {
          let t = this._funcs.indexOf(e);
          t > -1 && this._funcs.splice(t, 1);
        }
        emit(e, t, r, n, a) {
          for (var i = 0, o = this._funcs.length; i < o; i++)
            this._funcs[i](e, t, r, n, a);
        }
      };
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(3),
        a = new n.Pipeline();
      t.getDefaultPipeline = function () {
        return a;
      };
      class i extends n.ImageTracker {
        constructor(e, t) {
          super(t || a, e);
        }
      }
      t.ImageTracker = i;
      class o extends n.BarcodeFinder {
        constructor(e) {
          super(e || a);
        }
      }
      t.BarcodeFinder = o;
      class s extends n.FaceTracker {
        constructor(e) {
          super(e || a);
        }
      }
      t.FaceTracker = s;
      class u extends n.InstantWorldTracker {
        constructor(e) {
          super(e || a);
        }
      }
      t.InstantWorldTracker = u;
      class c extends n.CameraSource {
        constructor(e, t) {
          super(t || a, e);
        }
      }
      t.CameraSource = c;
      class f extends n.HTMLElementSource {
        constructor(e, t) {
          super(t || a, e);
        }
      }
      (t.HTMLElementSource = f),
        (t.glContextSet = function (e) {
          a.glContextSet(e);
        }),
        (t.onFrameUpdate = a.onFrameUpdate);
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(1);
      function a(e) {
        if (window.screen.orientation)
          switch (window.screen.orientation.type) {
            case "portrait-primary":
              return e ? 90 : 270;
            case "landscape-secondary":
              return 180;
            case "portrait-secondary":
              return e ? 270 : 90;
            default:
              return 0;
          }
        else if (void 0 !== window.orientation)
          switch (window.orientation) {
            case 0:
              return e ? 90 : 270;
            case 90:
              return 0;
            case 180:
              return e ? 270 : 90;
            case -90:
              return 180;
          }
        return 0;
      }
      (t.projectionMatrix = function (e, t, r, i = 0.01, o = 100) {
        let s = 2 * e[2],
          u = 2 * e[3],
          c = n.mat4.create();
        n.mat4.frustum(
          c,
          (i * (-0.5 - e[2])) / e[0],
          (i * (s - 0.5 - e[2])) / e[0],
          (i * (u - 0.5 - e[3])) / e[1],
          (i * (-0.5 - e[3])) / e[1],
          i,
          o
        ),
          (c[4] *= -1),
          (c[5] *= -1),
          (c[6] *= -1),
          (c[7] *= -1);
        let f = n.mat4.create();
        n.mat4.fromScaling(f, [0.5 * s, 0.5 * u, 1]),
          n.mat4.multiply(c, f, c),
          n.mat4.fromRotation(f, (a(!1) * Math.PI) / 180, [0, 0, 1]),
          n.mat4.multiply(c, f, c);
        let l = n.vec3.create();
        (l[0] = s), (l[1] = u), (l[2] = 0), n.vec3.transformMat4(l, l, f);
        let _ = Math.abs(l[0]),
          d = Math.abs(l[1]),
          h = 1;
        return (
          (h = _ / t > d / r ? r / d : t / _),
          n.mat4.fromScaling(f, [h, h, 1]),
          n.mat4.multiply(c, f, c),
          n.mat4.fromScaling(f, [2 / t, 2 / r, 1]),
          n.mat4.multiply(c, f, c),
          n.mat4.fromRotation(f, (a(!1) * Math.PI) / -180, [0, 0, 1]),
          n.mat4.multiply(c, c, f),
          c
        );
      }),
        (t.cameraRotationForScreenOrientation = a);
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(34),
        a = r(1),
        i = r(8),
        o = r(35),
        s = r(36);
      let u = new Map();
      class c {
        constructor(e, t, r) {
          (this._client = e),
            (this._impl = t),
            (this._mgr = r),
            (this.pendingMessages = []),
            (this.cameraTokens = new Map()),
            (this.nextCameraToken = 1),
            (this.tokensInFlight = 0),
            (this.videoTextures = []),
            (this.cameraPixelArrays = []);
        }
        static create(e, t) {
          let r = e.pipeline_create();
          return u.set(r, new c(e, r, t)), r;
        }
        static get(e) {
          return u.get(e);
        }
        frameUpdate(e) {
          for (let t of this.pendingMessages)
            e.processMessages(t),
              this._mgr.postOutgoingMessage({ t: "buf", p: this._impl, d: t }, [
                t,
              ]);
          this.pendingMessages = [];
          let t = this._client.pipeline_camera_frame_user_data(this._impl);
          if (t)
            for (let e of this.cameraTokens)
              e[0] < t &&
                (this.videoTextures.push(e[1].texture),
                this.cameraTokens.delete(e[0]));
        }
        cameraTokenReturn(e, t) {
          this.cameraPixelArrays.push(t), this.tokensInFlight--;
        }
        getVideoTexture() {
          return this.videoTextures.pop();
        }
        destroy() {
          this._client.pipeline_destroy(this._impl), u.delete(this._impl);
        }
        getCurrentCameraInfo() {
          let e = this._client.pipeline_camera_frame_user_data(this._impl);
          if (e) return this.cameraTokens.get(e);
        }
        cameraFrameDrawGL(e, t, r) {
          if (!this.glContext) return;
          let a = this.getCurrentCameraInfo();
          a &&
            (this._cameraDraw ||
              (this._cameraDraw = new n.CameraDraw(this.glContext)),
            this._cameraDraw.drawCameraFrame(e, t, a, !0 === r));
        }
        glContextSet(e, t) {
          if (this.glContext)
            console.log(
              "Warning - gl_context_set already called on this pipeline"
            );
          else {
            (this.glContext = e), (t = t || []);
            for (let r = 0; r < 4; r++) {
              let n = t[r] || e.createTexture();
              n &&
                (e.bindTexture(e.TEXTURE_2D, n),
                e.texParameteri(
                  e.TEXTURE_2D,
                  e.TEXTURE_WRAP_S,
                  e.CLAMP_TO_EDGE
                ),
                e.texParameteri(
                  e.TEXTURE_2D,
                  e.TEXTURE_WRAP_T,
                  e.CLAMP_TO_EDGE
                ),
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR),
                this.videoTextures.push(n));
            }
            e.bindTexture(e.TEXTURE_2D, null),
              delete this._cameraDraw,
              delete this._faceDraw,
              delete this._faceProjectDraw;
          }
        }
        drawFace(e, t, r, n) {
          if (!this.glContext) return;
          this._faceDraw || (this._faceDraw = new o.FaceDraw(this.glContext));
          let i = a.mat4.create();
          a.mat4.multiply(i, e, t),
            a.mat4.multiply(i, i, r),
            this._faceDraw.drawFace(i, n);
        }
        drawFaceProject(e, t, r, n, a, i) {
          this.glContext &&
            (this._faceProjectDraw ||
              (this._faceProjectDraw = new s.FaceDrawProject(this.glContext)),
            this._faceProjectDraw.drawFace(e, t, r, n, a, i));
        }
        cameraFrameTexture() {
          var e;
          return null === (e = this.getCurrentCameraInfo()) || void 0 === e
            ? void 0
            : e.texture;
        }
        cameraFrameTextureMatrix(e, t, r) {
          let i = this.getCurrentCameraInfo();
          return i
            ? n.cameraFrameTextureMatrix(
                i.dataWidth,
                i.dataHeight,
                e,
                t,
                i.uvTransform,
                r
              )
            : a.mat4.create();
        }
        cameraFrameUserFacing() {
          var e;
          return (
            (null === (e = this.getCurrentCameraInfo()) || void 0 === e
              ? void 0
              : e.userFacing) || !1
          );
        }
        cameraPoseWithAttitude(e) {
          let t = f(
            this.getCurrentCameraInfo(),
            this._client.pipeline_camera_frame_camera_attitude(this._impl)
          );
          if (e) {
            let e = a.mat4.create();
            a.mat4.fromScaling(e, [-1, 1, 1]),
              a.mat4.multiply(t, e, t),
              a.mat4.multiply(t, t, e);
          }
          return a.mat4.invert(t, t), t;
        }
        processGL() {
          if (!this.glContext)
            return void console.log(
              "No GL context for camera frames - please call gl_context_set"
            );
          if (!this.currentCameraSource) return;
          if (this.tokensInFlight > 0)
            return void this.currentCameraSource.getFrame(!0);
          let e = this.currentCameraSource.getFrame(!1);
          if (!e) return;
          let t = this.nextCameraToken++;
          this.cameraTokens.set(t, e);
          let r = {
            d: e.data,
            p: this._impl,
            width: e.dataWidth,
            height: e.dataHeight,
            token: t,
            userFacing: e.userFacing,
            t: "cameraFrameC2S",
          };
          this.tokensInFlight++, this._mgr.postOutgoingMessage(r, [e.data]);
        }
        motionAccelerometerSubmit(e, t, r, n) {
          this._client.pipeline_motion_accelerometer_submit(
            this._impl,
            e,
            t,
            r,
            n
          );
        }
        motionRotationRateSubmit(e, t, r, n) {
          this._client.pipeline_motion_rotation_rate_submit(
            this._impl,
            e,
            t,
            r,
            n
          );
        }
        motionAttitudeSubmit(e, t, r, n) {
          this._client.pipeline_motion_attitude_submit(this._impl, e, t, r, n);
        }
      }
      function f(e, t) {
        let r = !1;
        r = !!e && e.userFacing;
        let n = a.mat4.create();
        return (
          a.mat4.fromRotation(
            n,
            (i.cameraRotationForScreenOrientation(r) * Math.PI) / 180,
            [0, 0, 1]
          ),
          a.mat4.multiply(n, n, t),
          n
        );
      }
      (t.Pipeline = c), (t.applyScreenCounterRotation = f);
    },
    function (e, t, r) {
      var n;
      /*!
       * UAParser.js v0.7.21
       * Lightweight JavaScript-based User-Agent string parser
       * https://github.com/faisalman/ua-parser-js
       *
       * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>
       * Licensed under MIT License
       */ !(function (a, i) {
        "use strict";
        var o = "model",
          s = "name",
          u = "type",
          c = "vendor",
          f = "version",
          l = "mobile",
          _ = "tablet",
          d = "smarttv",
          h = {
            extend: function (e, t) {
              var r = {};
              for (var n in e)
                t[n] && t[n].length % 2 == 0
                  ? (r[n] = t[n].concat(e[n]))
                  : (r[n] = e[n]);
              return r;
            },
            has: function (e, t) {
              return (
                "string" == typeof e &&
                -1 !== t.toLowerCase().indexOf(e.toLowerCase())
              );
            },
            lowerize: function (e) {
              return e.toLowerCase();
            },
            major: function (e) {
              return "string" == typeof e
                ? e.replace(/[^\d\.]/g, "").split(".")[0]
                : void 0;
            },
            trim: function (e) {
              return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            },
          },
          m = {
            rgx: function (e, t) {
              for (var r, n, a, i, o, s, u = 0; u < t.length && !o; ) {
                var c = t[u],
                  f = t[u + 1];
                for (r = n = 0; r < c.length && !o; )
                  if ((o = c[r++].exec(e)))
                    for (a = 0; a < f.length; a++)
                      (s = o[++n]),
                        "object" == typeof (i = f[a]) && i.length > 0
                          ? 2 == i.length
                            ? "function" == typeof i[1]
                              ? (this[i[0]] = i[1].call(this, s))
                              : (this[i[0]] = i[1])
                            : 3 == i.length
                            ? "function" != typeof i[1] ||
                              (i[1].exec && i[1].test)
                              ? (this[i[0]] = s
                                  ? s.replace(i[1], i[2])
                                  : void 0)
                              : (this[i[0]] = s
                                  ? i[1].call(this, s, i[2])
                                  : void 0)
                            : 4 == i.length &&
                              (this[i[0]] = s
                                ? i[3].call(this, s.replace(i[1], i[2]))
                                : void 0)
                          : (this[i] = s || void 0);
                u += 2;
              }
            },
            str: function (e, t) {
              for (var r in t)
                if ("object" == typeof t[r] && t[r].length > 0) {
                  for (var n = 0; n < t[r].length; n++)
                    if (h.has(t[r][n], e)) return "?" === r ? void 0 : r;
                } else if (h.has(t[r], e)) return "?" === r ? void 0 : r;
              return e;
            },
          },
          p = {
            browser: {
              oldsafari: {
                version: {
                  "1.0": "/8",
                  1.2: "/1",
                  1.3: "/3",
                  "2.0": "/412",
                  "2.0.2": "/416",
                  "2.0.3": "/417",
                  "2.0.4": "/419",
                  "?": "/",
                },
              },
            },
            device: {
              amazon: { model: { "Fire Phone": ["SD", "KF"] } },
              sprint: {
                model: { "Evo Shift 4G": "7373KT" },
                vendor: { HTC: "APA", Sprint: "Sprint" },
              },
            },
            os: {
              windows: {
                version: {
                  ME: "4.90",
                  "NT 3.11": "NT3.51",
                  "NT 4.0": "NT4.0",
                  2e3: "NT 5.0",
                  XP: ["NT 5.1", "NT 5.2"],
                  Vista: "NT 6.0",
                  7: "NT 6.1",
                  8: "NT 6.2",
                  8.1: "NT 6.3",
                  10: ["NT 6.4", "NT 10.0"],
                  RT: "ARM",
                },
              },
            },
          },
          b = {
            browser: [
              [
                /(opera\smini)\/([\w\.-]+)/i,
                /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,
                /(opera).+version\/([\w\.]+)/i,
                /(opera)[\/\s]+([\w\.]+)/i,
              ],
              [s, f],
              [/(opios)[\/\s]+([\w\.]+)/i],
              [[s, "Opera Mini"], f],
              [/\s(opr)\/([\w\.]+)/i],
              [[s, "Opera"], f],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,
                /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,
                /(?:ms|\()(ie)\s([\w\.]+)/i,
                /(rekonq)\/([\w\.]*)/i,
                /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,
              ],
              [s, f],
              [/(konqueror)\/([\w\.]+)/i],
              [[s, "Konqueror"], f],
              [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
              [[s, "IE"], f],
              [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
              [[s, "Edge"], f],
              [/(yabrowser)\/([\w\.]+)/i],
              [[s, "Yandex"], f],
              [/(Avast)\/([\w\.]+)/i],
              [[s, "Avast Secure Browser"], f],
              [/(AVG)\/([\w\.]+)/i],
              [[s, "AVG Secure Browser"], f],
              [/(puffin)\/([\w\.]+)/i],
              [[s, "Puffin"], f],
              [/(focus)\/([\w\.]+)/i],
              [[s, "Firefox Focus"], f],
              [/(opt)\/([\w\.]+)/i],
              [[s, "Opera Touch"], f],
              [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
              [[s, "UCBrowser"], f],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[s, /_/g, " "], f],
              [/(windowswechat qbcore)\/([\w\.]+)/i],
              [[s, "WeChat(Win) Desktop"], f],
              [/(micromessenger)\/([\w\.]+)/i],
              [[s, "WeChat"], f],
              [/(brave)\/([\w\.]+)/i],
              [[s, "Brave"], f],
              [/(qqbrowserlite)\/([\w\.]+)/i],
              [s, f],
              [/(QQ)\/([\d\.]+)/i],
              [s, f],
              [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
              [s, f],
              [/(baiduboxapp)[\/\s]?([\w\.]+)/i],
              [s, f],
              [/(2345Explorer)[\/\s]?([\w\.]+)/i],
              [s, f],
              [/(MetaSr)[\/\s]?([\w\.]+)/i],
              [s],
              [/(LBBROWSER)/i],
              [s],
              [/xiaomi\/miuibrowser\/([\w\.]+)/i],
              [f, [s, "MIUI Browser"]],
              [/;fbav\/([\w\.]+);/i],
              [f, [s, "Facebook"]],
              [
                /safari\s(line)\/([\w\.]+)/i,
                /android.+(line)\/([\w\.]+)\/iab/i,
              ],
              [s, f],
              [/headlesschrome(?:\/([\w\.]+)|\s)/i],
              [f, [s, "Chrome Headless"]],
              [/\swv\).+(chrome)\/([\w\.]+)/i],
              [[s, /(.+)/, "$1 WebView"], f],
              [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
              [[s, /(.+(?:g|us))(.+)/, "$1 $2"], f],
              [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
              [f, [s, "Android Browser"]],
              [/(sailfishbrowser)\/([\w\.]+)/i],
              [[s, "Sailfish Browser"], f],
              [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
              [s, f],
              [/(dolfin)\/([\w\.]+)/i],
              [[s, "Dolphin"], f],
              [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
              [[s, "360 Browser"]],
              [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
              [[s, "Chrome"], f],
              [/(coast)\/([\w\.]+)/i],
              [[s, "Opera Coast"], f],
              [/fxios\/([\w\.-]+)/i],
              [f, [s, "Firefox"]],
              [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
              [f, [s, "Mobile Safari"]],
              [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
              [f, s],
              [
                /webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i,
              ],
              [[s, "GSA"], f],
              [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
              [s, [f, m.str, p.browser.oldsafari.version]],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [s, f],
              [/(navigator|netscape)\/([\w\.-]+)/i],
              [[s, "Netscape"], f],
              [
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
                /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                /(links)\s\(([\w\.]+)/i,
                /(gobrowser)\/?([\w\.]*)/i,
                /(ice\s?browser)\/v?([\w\._]+)/i,
                /(mosaic)[\/\s]([\w\.]+)/i,
              ],
              [s, f],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
              [["architecture", "amd64"]],
              [/(ia32(?=;))/i],
              [["architecture", h.lowerize]],
              [/((?:i[346]|x)86)[;\)]/i],
              [["architecture", "ia32"]],
              [/windows\s(ce|mobile);\sppc;/i],
              [["architecture", "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
              [["architecture", /ower/, "", h.lowerize]],
              [/(sun4\w)[;\)]/i],
              [["architecture", "sparc"]],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i,
              ],
              [["architecture", h.lowerize]],
            ],
            device: [
              [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
              [o, c, [u, _]],
              [/applecoremedia\/[\w\.]+ \((ipad)/],
              [o, [c, "Apple"], [u, _]],
              [/(apple\s{0,1}tv)/i],
              [
                [o, "Apple TV"],
                [c, "Apple"],
                [u, d],
              ],
              [
                /(archos)\s(gamepad2?)/i,
                /(hp).+(touchpad)/i,
                /(hp).+(tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /\s(nook)[\w\s]+build\/(\w+)/i,
                /(dell)\s(strea[kpr\s\d]*[\dko])/i,
              ],
              [c, o, [u, _]],
              [/(kf[A-z]+)\sbuild\/.+silk\//i],
              [o, [c, "Amazon"], [u, _]],
              [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
              [
                [o, m.str, p.device.amazon.model],
                [c, "Amazon"],
                [u, l],
              ],
              [/android.+aft([bms])\sbuild/i],
              [o, [c, "Amazon"], [u, d]],
              [/\((ip[honed|\s\w*]+);.+(apple)/i],
              [o, c, [u, l]],
              [/\((ip[honed|\s\w*]+);/i],
              [o, [c, "Apple"], [u, l]],
              [
                /(blackberry)[\s-]?(\w+)/i,
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                /(hp)\s([\w\s]+\w)/i,
                /(asus)-?(\w+)/i,
              ],
              [c, o, [u, l]],
              [/\(bb10;\s(\w+)/i],
              [o, [c, "BlackBerry"], [u, l]],
              [
                /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i,
              ],
              [o, [c, "Asus"], [u, _]],
              [
                /(sony)\s(tablet\s[ps])\sbuild\//i,
                /(sony)?(?:sgp.+)\sbuild\//i,
              ],
              [
                [c, "Sony"],
                [o, "Xperia Tablet"],
                [u, _],
              ],
              [
                /android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [o, [c, "Sony"], [u, l]],
              [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
              [c, o, [u, "console"]],
              [/android.+;\s(shield)\sbuild/i],
              [o, [c, "Nvidia"], [u, "console"]],
              [/(playstation\s[34portablevi]+)/i],
              [o, [c, "Sony"], [u, "console"]],
              [/(sprint\s(\w+))/i],
              [
                [c, m.str, p.device.sprint.vendor],
                [o, m.str, p.device.sprint.model],
                [u, l],
              ],
              [
                /(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,
                /(zte)-(\w*)/i,
                /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i,
              ],
              [c, [o, /_/g, " "], [u, l]],
              [/(nexus\s9)/i],
              [o, [c, "HTC"], [u, _]],
              [
                /d\/huawei([\w\s-]+)[;\)]/i,
                /(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i,
              ],
              [o, [c, "Huawei"], [u, l]],
              [/android.+(bah2?-a?[lw]\d{2})/i],
              [o, [c, "Huawei"], [u, _]],
              [/(microsoft);\s(lumia[\s\w]+)/i],
              [c, o, [u, l]],
              [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
              [o, [c, "Microsoft"], [u, "console"]],
              [/(kin\.[onetw]{3})/i],
              [
                [o, /\./g, " "],
                [c, "Microsoft"],
                [u, l],
              ],
              [
                /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
                /mot[\s-]?(\w*)/i,
                /(XT\d{3,4}) build\//i,
                /(nexus\s6)/i,
              ],
              [o, [c, "Motorola"], [u, l]],
              [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
              [o, [c, "Motorola"], [u, _]],
              [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
              [
                [c, h.trim],
                [o, h.trim],
                [u, d],
              ],
              [/hbbtv.+maple;(\d+)/i],
              [
                [o, /^/, "SmartTV"],
                [c, "Samsung"],
                [u, d],
              ],
              [/\(dtv[\);].+(aquos)/i],
              [o, [c, "Sharp"], [u, d]],
              [
                /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
                /((SM-T\w+))/i,
              ],
              [[c, "Samsung"], o, [u, _]],
              [/smart-tv.+(samsung)/i],
              [c, [u, d], o],
              [
                /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
                /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
                /sec-((sgh\w+))/i,
              ],
              [[c, "Samsung"], o, [u, l]],
              [/sie-(\w*)/i],
              [o, [c, "Siemens"], [u, l]],
              [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
              [[c, "Nokia"], o, [u, l]],
              [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
              [o, [c, "Acer"], [u, _]],
              [/android.+([vl]k\-?\d{3})\s+build/i],
              [o, [c, "LG"], [u, _]],
              [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
              [[c, "LG"], o, [u, _]],
              [/(lg) netcast\.tv/i],
              [c, o, [u, d]],
              [
                /(nexus\s[45])/i,
                /lg[e;\s\/-]+(\w*)/i,
                /android.+lg(\-?[\d\w]+)\s+build/i,
              ],
              [o, [c, "LG"], [u, l]],
              [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
              [c, o, [u, _]],
              [/android.+(ideatab[a-z0-9\-\s]+)/i],
              [o, [c, "Lenovo"], [u, _]],
              [/(lenovo)[_\s-]?([\w-]+)/i],
              [c, o, [u, l]],
              [/linux;.+((jolla));/i],
              [c, o, [u, l]],
              [/((pebble))app\/[\d\.]+\s/i],
              [c, o, [u, "wearable"]],
              [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
              [c, o, [u, l]],
              [/crkey/i],
              [
                [o, "Chromecast"],
                [c, "Google"],
                [u, d],
              ],
              [/android.+;\s(glass)\s\d/i],
              [o, [c, "Google"], [u, "wearable"]],
              [/android.+;\s(pixel c)[\s)]/i],
              [o, [c, "Google"], [u, _]],
              [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],
              [o, [c, "Google"], [u, l]],
              [
                /android.+;\s(\w+)\s+build\/hm\1/i,
                /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
                /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,
                /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i,
              ],
              [
                [o, /_/g, " "],
                [c, "Xiaomi"],
                [u, l],
              ],
              [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
              [
                [o, /_/g, " "],
                [c, "Xiaomi"],
                [u, _],
              ],
              [/android.+;\s(m[1-5]\snote)\sbuild/i],
              [o, [c, "Meizu"], [u, l]],
              [/(mz)-([\w-]{2,})/i],
              [[c, "Meizu"], o, [u, l]],
              [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i],
              [o, [c, "OnePlus"], [u, l]],
              [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
              [o, [c, "RCA"], [u, _]],
              [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
              [o, [c, "Dell"], [u, _]],
              [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
              [o, [c, "Verizon"], [u, _]],
              [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
              [[c, "Barnes & Noble"], o, [u, _]],
              [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
              [o, [c, "NuVision"], [u, _]],
              [/android.+;\s(k88)\sbuild/i],
              [o, [c, "ZTE"], [u, _]],
              [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
              [o, [c, "Swiss"], [u, l]],
              [/android.+[;\/]\s*(zur\d{3})\s+build/i],
              [o, [c, "Swiss"], [u, _]],
              [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
              [o, [c, "Zeki"], [u, _]],
              [
                /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
                /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i,
              ],
              [[c, "Dragon Touch"], o, [u, _]],
              [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
              [o, [c, "Insignia"], [u, _]],
              [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
              [o, [c, "NextBook"], [u, _]],
              [
                /android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i,
              ],
              [[c, "Voice"], o, [u, l]],
              [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
              [[c, "LvTel"], o, [u, l]],
              [/android.+;\s(PH-1)\s/i],
              [o, [c, "Essential"], [u, l]],
              [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
              [o, [c, "Envizen"], [u, _]],
              [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
              [c, o, [u, _]],
              [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
              [o, [c, "MachSpeed"], [u, _]],
              [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
              [c, o, [u, _]],
              [/android.+[;\/]\s*TU_(1491)\s+build/i],
              [o, [c, "Rotor"], [u, _]],
              [/android.+(KS(.+))\s+build/i],
              [o, [c, "Amazon"], [u, _]],
              [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
              [c, o, [u, _]],
              [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
              [[u, h.lowerize], c, o],
              [/[\s\/\(](smart-?tv)[;\)]/i],
              [[u, d]],
              [/(android[\w\.\s\-]{0,9});.+build/i],
              [o, [c, "Generic"]],
            ],
            engine: [
              [/windows.+\sedge\/([\w\.]+)/i],
              [f, [s, "EdgeHTML"]],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [f, [s, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
                /(icab)[\/\s]([23]\.[\d\.]+)/i,
              ],
              [s, f],
              [/rv\:([\w\.]{1,9}).+(gecko)/i],
              [f, s],
            ],
            os: [
              [/microsoft\s(windows)\s(vista|xp)/i],
              [s, f],
              [
                /(windows)\snt\s6\.2;\s(arm)/i,
                /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,
                /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i,
              ],
              [s, [f, m.str, p.os.windows.version]],
              [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
              [
                [s, "Windows"],
                [f, m.str, p.os.windows.version],
              ],
              [/\((bb)(10);/i],
              [[s, "BlackBerry"], f],
              [
                /(blackberry)\w*\/?([\w\.]*)/i,
                /(tizen|kaios)[\/\s]([\w\.]+)/i,
                /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,
              ],
              [s, f],
              [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
              [[s, "Symbian"], f],
              [/\((series40);/i],
              [s],
              [/mozilla.+\(mobile;.+gecko.+firefox/i],
              [[s, "Firefox OS"], f],
              [
                /(nintendo|playstation)\s([wids34portablevu]+)/i,
                /(mint)[\/\s\(]?(\w*)/i,
                /(mageia|vectorlinux)[;\s]/i,
                /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
                /(hurd|linux)\s?([\w\.]*)/i,
                /(gnu)\s?([\w\.]*)/i,
              ],
              [s, f],
              [/(cros)\s[\w]+\s([\w\.]+\w)/i],
              [[s, "Chromium OS"], f],
              [/(sunos)\s?([\w\.\d]*)/i],
              [[s, "Solaris"], f],
              [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
              [s, f],
              [/(haiku)\s(\w+)/i],
              [s, f],
              [
                /cfnetwork\/.+darwin/i,
                /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,
              ],
              [
                [f, /_/g, "."],
                [s, "iOS"],
              ],
              [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
              [
                [s, "Mac OS"],
                [f, /_/g, "."],
              ],
              [
                /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,
                /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,
                /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
                /(unix)\s?([\w\.]*)/i,
              ],
              [s, f],
            ],
          },
          y = function (e, t) {
            if (
              ("object" == typeof e && ((t = e), (e = void 0)),
              !(this instanceof y))
            )
              return new y(e, t).getResult();
            var r =
                e ||
                (a && a.navigator && a.navigator.userAgent
                  ? a.navigator.userAgent
                  : ""),
              n = t ? h.extend(b, t) : b;
            return (
              (this.getBrowser = function () {
                var e = { name: void 0, version: void 0 };
                return (
                  m.rgx.call(e, r, n.browser), (e.major = h.major(e.version)), e
                );
              }),
              (this.getCPU = function () {
                var e = { architecture: void 0 };
                return m.rgx.call(e, r, n.cpu), e;
              }),
              (this.getDevice = function () {
                var e = { vendor: void 0, model: void 0, type: void 0 };
                return m.rgx.call(e, r, n.device), e;
              }),
              (this.getEngine = function () {
                var e = { name: void 0, version: void 0 };
                return m.rgx.call(e, r, n.engine), e;
              }),
              (this.getOS = function () {
                var e = { name: void 0, version: void 0 };
                return m.rgx.call(e, r, n.os), e;
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return r;
              }),
              (this.setUA = function (e) {
                return (r = e), this;
              }),
              this
            );
          };
        (y.VERSION = "0.7.21"),
          (y.BROWSER = { NAME: s, MAJOR: "major", VERSION: f }),
          (y.CPU = { ARCHITECTURE: "architecture" }),
          (y.DEVICE = {
            MODEL: o,
            VENDOR: c,
            TYPE: u,
            CONSOLE: "console",
            MOBILE: l,
            SMARTTV: d,
            TABLET: _,
            WEARABLE: "wearable",
            EMBEDDED: "embedded",
          }),
          (y.ENGINE = { NAME: s, VERSION: f }),
          (y.OS = { NAME: s, VERSION: f }),
          void 0 !== t
            ? (void 0 !== e && e.exports && (t = e.exports = y),
              (t.UAParser = y))
            : void 0 ===
                (n = function () {
                  return y;
                }.call(t, r, t, e)) || (e.exports = n);
        var g = a && (a.jQuery || a.Zepto);
        if (g && !g.ua) {
          var v = new y();
          (g.ua = v.getResult()),
            (g.ua.get = function () {
              return v.getUA();
            }),
            (g.ua.set = function (e) {
              v.setUA(e);
              var t = v.getResult();
              for (var r in t) g.ua[r] = t[r];
            });
        }
      })("object" == typeof window ? window : this);
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(9),
        a = r(38),
        i = r(12),
        o = r(4),
        s = r(1);
      let u = 1,
        c = new Map();
      class f extends a.Source {
        constructor(e, t) {
          super(),
            (this._video = e),
            (this._pipeline = t),
            (this._isPaused = !0),
            (this._hadFrames = !1),
            (this._isUserFacing = !1),
            (this._cameraToScreenRotation = 0),
            (this._isUploadFrame = !0),
            (this._computedTransformRotation = -1),
            (this._computedFrontCameraRotation = !1),
            (this._cameraUvTransform = s.mat4.create()),
            (this._cameraVertexTransform = [
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
            ]),
            (this._framebufferWidth = 0),
            (this._framebufferHeight = 0),
            (this._framebufferId = null),
            (this._renderTexture = null);
          let r = this._video;
          this._video instanceof HTMLVideoElement
            ? r.addEventListener("loadedmetadata", () => {
                this._hadFrames = !0;
              })
            : (this._hadFrames = !0);
        }
        static createVideoElementSource(e, t) {
          let r = u++;
          return c.set(r, new f(t, e)), r;
        }
        static getVideoElementSource(e) {
          return c.get(e);
        }
        destroy() {
          this.pause();
        }
        pause() {
          this._isPaused = !0;
          let e = n.Pipeline.get(this._pipeline);
          e &&
            e.currentCameraSource === this &&
            (e.currentCameraSource = void 0);
        }
        start() {
          var e;
          this._isPaused = !1;
          let t = n.Pipeline.get(this._pipeline);
          t &&
            t.currentCameraSource !== this &&
            (null === (e = t.currentCameraSource) || void 0 === e || e.pause(),
            (t.currentCameraSource = this));
        }
        getFrame(e) {
          let t = n.Pipeline.get(this._pipeline);
          if (!t) return;
          let r = t.glContext;
          if (r)
            try {
              return this._processFrame(r, this._cameraToScreenRotation, e);
            } catch (e) {
              console.log("Unable to process frame");
            }
        }
        _processFrame(e, t, r) {
          let a = n.Pipeline.get(this._pipeline);
          if (a) {
            if (this._isUploadFrame)
              return (
                this._currentVideoTexture ||
                  (this._currentVideoTexture = a.getVideoTexture()),
                this._uploadFrame(t, this._isUserFacing),
                void (this._isUploadFrame = !this._isUploadFrame)
              );
            if (!r)
              return (
                (this._isUploadFrame = !this._isUploadFrame),
                this._readFrame(a, e)
              );
          }
        }
        _uploadFrame(e, t) {
          if (!this._currentVideoTexture) return;
          let r = n.Pipeline.get(this._pipeline);
          if (!r) return;
          let a = r.glContext;
          if (!a) return;
          a.disable(a.SCISSOR_TEST),
            a.disable(a.DEPTH_TEST),
            a.disable(a.BLEND),
            a.disable(a.CULL_FACE),
            a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, !1),
            a.bindTexture(a.TEXTURE_2D, this._currentVideoTexture);
          const o = a.RGB,
            s = a.RGB,
            u = a.UNSIGNED_BYTE;
          a.texImage2D(a.TEXTURE_2D, 0, o, s, u, this._video);
          let c = 0,
            f = 0;
          this._video instanceof HTMLVideoElement
            ? ((c = this._video.videoWidth), (f = this._video.videoHeight))
            : ((c = this._video.width), (f = this._video.height)),
            f > c && (f = [c, (c = f)][0]),
            this._updateTransforms(e, t);
          let l = this._getFramebuffer(
              a,
              i.profile.dataWidth / 4,
              i.profile.dataHeight
            ),
            _ = this._getVertexBuffer(a),
            d = this._getIndexBuffer(a),
            h = this._getGreyscaleShader(a);
          a.bindFramebuffer(a.FRAMEBUFFER, l),
            a.viewport(0, 0, this._framebufferWidth, this._framebufferHeight),
            a.clearColor(0, 0, 0, 1),
            a.clear(a.COLOR_BUFFER_BIT),
            a.bindBuffer(a.ARRAY_BUFFER, _),
            a.vertexAttribPointer(h.aVertexPositionLoc, 2, a.FLOAT, !1, 16, 0),
            a.enableVertexAttribArray(h.aVertexPositionLoc),
            a.vertexAttribPointer(h.aTextureCoordLoc, 2, a.FLOAT, !1, 16, 8),
            a.enableVertexAttribArray(h.aTextureCoordLoc),
            a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, d),
            a.useProgram(h.program),
            a.uniform1f(h.uTexWidthLoc, i.profile.dataWidth),
            a.uniformMatrix4fv(h.uUvTransformLoc, !1, this._cameraUvTransform),
            a.activeTexture(a.TEXTURE0),
            a.bindTexture(a.TEXTURE_2D, this._currentVideoTexture),
            a.uniform1i(h.uSamplerLoc, 0),
            a.drawElements(a.TRIANGLES, 6, a.UNSIGNED_SHORT, 0),
            a.disableVertexAttribArray(h.aVertexPositionLoc),
            a.disableVertexAttribArray(h.aTextureCoordLoc),
            a.bindFramebuffer(a.FRAMEBUFFER, null),
            a.bindBuffer(a.ARRAY_BUFFER, null),
            a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, null),
            a.useProgram(null),
            a.bindTexture(a.TEXTURE_2D, null);
        }
        _readFrame(e, t) {
          if (!this._currentVideoTexture) throw new Error("No video texture");
          let r = this._currentVideoTexture;
          this._currentVideoTexture = void 0;
          let n = i.profile.dataWidth * i.profile.dataHeight,
            a = e.cameraPixelArrays.pop();
          for (; a && a.byteLength !== n; ) a = e.cameraPixelArrays.pop();
          a ||
            (console.log("Allocating new pixel buffer"),
            (a = new ArrayBuffer(n)));
          let o = new Uint8Array(a),
            s = this._getFramebuffer(
              t,
              i.profile.dataWidth / 4,
              i.profile.dataHeight
            );
          return (
            t.bindFramebuffer(t.FRAMEBUFFER, s),
            t.readPixels(
              0,
              0,
              this._framebufferWidth,
              this._framebufferHeight,
              t.RGBA,
              t.UNSIGNED_BYTE,
              o
            ),
            t.bindFramebuffer(t.FRAMEBUFFER, null),
            {
              uvTransform: this._cameraUvTransform,
              data: a,
              texture: r,
              dataWidth: i.profile.dataWidth,
              dataHeight: i.profile.dataHeight,
              userFacing: this._computedFrontCameraRotation,
            }
          );
        }
        _updateTransforms(e, t) {
          (e == this._computedTransformRotation &&
            t == this._computedFrontCameraRotation) ||
            ((this._computedTransformRotation = e),
            (this._computedFrontCameraRotation = t),
            (this._cameraUvTransform = this._getCameraUvTransform()),
            (this._cameraVertexTransform = this._getCameraVertexTransform()));
        }
        _getCameraUvTransform() {
          switch (this._computedTransformRotation) {
            case 270:
              return new Float32Array([
                0,
                1,
                0,
                0,
                -1,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                1,
                0,
                0,
                1,
              ]);
            case 180:
              return new Float32Array([
                -1,
                0,
                0,
                0,
                0,
                -1,
                0,
                0,
                0,
                0,
                1,
                0,
                1,
                1,
                0,
                1,
              ]);
            case 90:
              return new Float32Array([
                0,
                -1,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                1,
                0,
                1,
              ]);
          }
          return new Float32Array([
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
          ]);
        }
        _getCameraVertexTransform() {
          let e = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
          if (!this._computedFrontCameraRotation) return e;
          switch (this._computedTransformRotation) {
            case 0:
            case 90:
            case 180:
              e[0] = -1;
              break;
            case 270:
              e[5] = -1;
          }
          return e;
        }
        _getFramebuffer(e, t, r) {
          if (
            this._framebufferWidth === t &&
            this._framebufferHeight === r &&
            this._framebufferId
          )
            return this._framebufferId;
          if (
            (this._framebufferId &&
              (e.deleteFramebuffer(this._framebufferId),
              (this._framebufferId = null)),
            this._renderTexture &&
              (e.deleteTexture(this._renderTexture),
              (this._renderTexture = null)),
            (this._framebufferId = e.createFramebuffer()),
            !this._framebufferId)
          )
            throw new Error("Unable to create framebuffer");
          if (
            (e.bindFramebuffer(e.FRAMEBUFFER, this._framebufferId),
            (this._renderTexture = e.createTexture()),
            !this._renderTexture)
          )
            throw new Error("Unable to create render texture");
          e.bindTexture(e.TEXTURE_2D, this._renderTexture),
            e.texImage2D(
              e.TEXTURE_2D,
              0,
              e.RGBA,
              t,
              r,
              0,
              e.RGBA,
              e.UNSIGNED_BYTE,
              null
            ),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
            e.texParameterf(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR),
            e.framebufferTexture2D(
              e.FRAMEBUFFER,
              e.COLOR_ATTACHMENT0,
              e.TEXTURE_2D,
              this._renderTexture,
              0
            );
          let n = e.checkFramebufferStatus(e.FRAMEBUFFER);
          if (n != e.FRAMEBUFFER_COMPLETE)
            throw new Error("Framebuffer not complete: " + n.toString());
          return (
            console.log("Framebuffer complete!"),
            (this._framebufferWidth = t),
            (this._framebufferHeight = r),
            console.log(
              "Set up greyscale conversion framebuffer: %i x %i\n",
              this._framebufferWidth,
              this._framebufferHeight
            ),
            e.bindTexture(e.TEXTURE_2D, null),
            e.bindFramebuffer(e.FRAMEBUFFER, null),
            this._framebufferId
          );
        }
        _getVertexBuffer(e) {
          if (this._vertexBuffer) return this._vertexBuffer;
          if (((this._vertexBuffer = e.createBuffer()), !this._vertexBuffer))
            throw new Error("Unable to create vertex buffer");
          e.bindBuffer(e.ARRAY_BUFFER, this._vertexBuffer);
          let t = new Float32Array([
            -1,
            -1,
            0,
            0,
            -1,
            1,
            0,
            1,
            1,
            1,
            1,
            1,
            1,
            -1,
            1,
            0,
          ]);
          return (
            e.bufferData(e.ARRAY_BUFFER, t, e.STATIC_DRAW), this._vertexBuffer
          );
        }
        _getIndexBuffer(e) {
          if (this._indexBuffer) return this._indexBuffer;
          if (((this._indexBuffer = e.createBuffer()), !this._indexBuffer))
            throw new Error("Unable to create index buffer");
          e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this._indexBuffer);
          let t = new Uint16Array([0, 1, 2, 0, 2, 3]);
          return (
            e.bufferData(e.ELEMENT_ARRAY_BUFFER, t, e.STATIC_DRAW),
            this._indexBuffer
          );
        }
        _getGreyscaleShader(e) {
          if (this._greyscaleShader) return this._greyscaleShader;
          let t = e.createProgram();
          if (!t) throw new Error("Unable to create program");
          let r = o.compileShader(e, e.VERTEX_SHADER, l),
            n = o.compileShader(e, e.FRAGMENT_SHADER, _);
          e.attachShader(t, r), e.attachShader(t, n), o.linkProgram(e, t);
          let a = e.getUniformLocation(t, "uTexWidth");
          if (!a) throw new Error("Unable to get uniform location uTexWidth");
          let i = e.getUniformLocation(t, "uUvTransform");
          if (!i)
            throw new Error("Unable to get uniform location uUvTransform");
          let s = e.getUniformLocation(t, "uSampler");
          if (!s) throw new Error("Unable to get uniform location uSampler");
          return (
            (this._greyscaleShader = {
              program: t,
              aVertexPositionLoc: e.getAttribLocation(t, "aVertexPosition"),
              aTextureCoordLoc: e.getAttribLocation(t, "aTextureCoord"),
              uTexWidthLoc: a,
              uUvTransformLoc: i,
              uSamplerLoc: s,
            }),
            this._greyscaleShader
          );
        }
      }
      t.HTMLElementSource = f;
      let l =
          "\n    attribute vec4 aVertexPosition;\n    attribute vec2 aTextureCoord;\n\n    varying highp vec2 vTextureCoord1;\n    varying highp vec2 vTextureCoord2;\n    varying highp vec2 vTextureCoord3;\n    varying highp vec2 vTextureCoord4;\n\n    uniform float uTexWidth;\n\tuniform mat4 uUvTransform;\n\n    void main(void) {\n      highp vec2 offset1 = vec2(1.5 / uTexWidth, 0);\n      highp vec2 offset2 = vec2(0.5 / uTexWidth, 0);\n\n      gl_Position = aVertexPosition;\n      vTextureCoord1 = (uUvTransform * vec4(aTextureCoord - offset1, 0, 1)).xy;\n      vTextureCoord2 = (uUvTransform * vec4(aTextureCoord - offset2, 0, 1)).xy;\n      vTextureCoord3 = (uUvTransform * vec4(aTextureCoord + offset2, 0, 1)).xy;\n      vTextureCoord4 = (uUvTransform * vec4(aTextureCoord + offset1, 0, 1)).xy;\n    }\n",
        _ =
          "\n  varying highp vec2 vTextureCoord1;\n  varying highp vec2 vTextureCoord2;\n  varying highp vec2 vTextureCoord3;\n  varying highp vec2 vTextureCoord4;\n\n  uniform sampler2D uSampler;\n\n  const lowp vec3 colorWeights = vec3(77.0 / 256.0, 150.0 / 256.0, 29.0 / 256.0);\n\n  void main(void) {\n    lowp vec4 outpx;\n\n    outpx.r = dot(colorWeights, texture2D(uSampler, vTextureCoord1).xyz);\n    outpx.g = dot(colorWeights, texture2D(uSampler, vTextureCoord2).xyz);\n    outpx.b = dot(colorWeights, texture2D(uSampler, vTextureCoord3).xyz);\n    outpx.a = dot(colorWeights, texture2D(uSampler, vTextureCoord4).xyz);\n\n    gl_FragColor = outpx;\n  }\n";
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(10);
      !(function (e) {
        (e[(e.OBJECT_URL = 0)] = "OBJECT_URL"),
          (e[(e.SRC_OBJECT = 1)] = "SRC_OBJECT");
      })(t.EmbeddedVideoImplementation || (t.EmbeddedVideoImplementation = {})),
        (t.profile = {
          deviceMotionMutliplier: -1,
          blacklisted: !1,
          showGyroPermissionsWarningIfNecessary: !1,
          showSafariPermissionsResetIfNecessary: !1,
          requestHighFrameRate: !1,
          videoWidth: 640,
          videoHeight: 480,
          dataWidth: 320,
          dataHeight: 240,
          videoElementInDOM: !1,
        }),
        (window.zeeProfile = t.profile);
      let a = new n.UAParser();
      switch (a.getBrowser().name) {
        case "Chrome":
          break;
        case "Safari":
          t.profile.deviceMotionMutliplier = 1;
          break;
        case "Mobile Safari":
          t.profile.deviceMotionMutliplier = 1;
          let e = a.getOS().version;
          if (e) {
            let r = e.split(".");
            if (r.length >= 2) {
              const e = parseInt(r[0]),
                n = parseInt(r[1]);
              (e < 11 || (11 === e && n < 3)) && (t.profile.blacklisted = !0),
                (e < 12 || (12 === e && n < 2)) &&
                  (t.profile.videoElementInDOM = !0),
                ((12 === e && n >= 2) || e >= 13) &&
                  (t.profile.showGyroPermissionsWarningIfNecessary = !0),
                e >= 13 &&
                  (t.profile.showSafariPermissionsResetIfNecessary = !0),
                ((e >= 12 && n > 1) || e >= 13) &&
                  navigator.mediaDevices &&
                  navigator.mediaDevices.getSupportedConstraints &&
                  navigator.mediaDevices.getSupportedConstraints().frameRate &&
                  ((t.profile.requestHighFrameRate = !0),
                  (t.profile.videoHeight = 360),
                  (t.profile.dataHeight = 180));
            }
          }
          console.log(e);
      }
    },
    function (e, t, r) {
      "use strict";
      r.r(t), (t.default = r.p + "d58bde9eb5c928b0e471a79c687d2368.zbin");
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(15),
        a = AFRAME.THREE;
      let i;
      class o extends a.BufferGeometry {
        constructor(e) {
          super(),
            (this._hasSetIndices = !1),
            (this._hasSetUVs = !1),
            (this._calculateNormals = !0),
            e || (i || (i = new n.FaceMeshLoader().load()), (e = i)),
            (this._faceMesh = e);
        }
        _updateIndices() {
          this._hasSetIndices ||
            (0 !== this._faceMesh.indices.length &&
              (this.setIndex(
                new a.Uint16BufferAttribute(this._faceMesh.indices, 1)
              ),
              (this._hasSetIndices = !0)));
        }
        _updateUVs() {
          this._hasSetUVs ||
            (0 !== this._faceMesh.uvs.length &&
              (this.setAttribute(
                "uv",
                new a.BufferAttribute(this._faceMesh.uvs, 2)
              ),
              (this._hasSetUVs = !0)));
        }
        get calculateNormals() {
          return this._calculateNormals;
        }
        set calculateNormals(e) {
          (this._calculateNormals = e),
            this._calculateNormals ||
              (this.removeAttribute("normal"), delete this._normals);
        }
        updateFromFaceAnchorGroup(e) {
          0 !== this._faceMesh.vertices.length &&
            e.currentAnchor &&
            this.updateFromFaceAnchor(e.currentAnchor);
        }
        updateFromFaceAnchor(e) {
          this.updateFromIdentityExpression(e.identity, e.expression);
        }
        updateFromIdentityExpression(e, t) {
          0 !== this._faceMesh.vertices.length &&
            (this._updateIndices(),
            this._updateUVs(),
            this._faceMesh.updateFromIdentityExpression(e, t),
            this._vertices ||
              ((this._vertices = new Float32Array(
                this._faceMesh.vertices.length
              )),
              (this._verticesAttribute = new a.BufferAttribute(
                this._vertices,
                3
              )),
              this.setAttribute("position", this._verticesAttribute)),
            this._vertices.set(this._faceMesh.vertices),
            this._verticesAttribute &&
              (this._verticesAttribute.needsUpdate = !0),
            this.calculateNormals &&
              (this._normals ||
                ((this._normals = new Float32Array(
                  this._faceMesh.normals.length
                )),
                (this._normalsAttribute = new a.BufferAttribute(
                  this._normals,
                  3
                )),
                this.setAttribute("normal", this._normalsAttribute)),
              this._normals.set(this._faceMesh.normals),
              this._normalsAttribute &&
                (this._normalsAttribute.needsUpdate = !0)));
        }
      }
      t.FaceBufferGeometry = o;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(3),
        a = AFRAME.THREE;
      class i extends a.Loader {
        constructor(e) {
          super(e);
        }
        load(e, t, r, a) {
          let i,
            o = new n.FaceMesh();
          return (
            (i = e
              ? "string" == typeof e
                ? o.load(e)
                : e.customModel
                ? o.load(
                    e.customModel,
                    e.fillMouth,
                    e.fillEyeLeft,
                    e.fillEyeRight,
                    e.fillNeck
                  )
                : o.loadDefaultFace(e.fillMouth, e.fillEyeLeft, e.fillEyeRight)
              : o.loadDefaultFace()),
            i
              .then(() => {
                var e;
                null === (e = t) || void 0 === e || e(o);
              })
              .catch((e) => {
                var t;
                null === (t = a) || void 0 === t || t();
              }),
            o
          );
        }
        loadFace(e, t, r, a) {
          let i,
            o = new n.FaceMesh();
          return (
            (i = e
              ? e.customModel
                ? o.load(
                    e.customModel,
                    e.fillMouth,
                    e.fillEyeLeft,
                    e.fillEyeRight,
                    e.fillNeck
                  )
                : o.loadDefaultFace(e.fillMouth, e.fillEyeLeft, e.fillEyeRight)
              : o.loadDefaultFace()),
            i
              .then(() => {
                var e;
                null === (e = t) || void 0 === e || e(o);
              })
              .catch((e) => {
                var t;
                null === (t = a) || void 0 === t || t();
              }),
            o
          );
        }
        loadFullHeadSimplified(e, t, r, a) {
          let i,
            o = new n.FaceMesh();
          return (
            (i = e
              ? e.customModel
                ? o.load(
                    e.customModel,
                    e.fillMouth,
                    e.fillEyeLeft,
                    e.fillEyeRight,
                    e.fillNeck
                  )
                : o.loadDefaultFullHeadSimplified(
                    e.fillMouth,
                    e.fillEyeLeft,
                    e.fillEyeRight,
                    e.fillNeck
                  )
              : o.loadDefaultFullHeadSimplified()),
            i
              .then(() => {
                var e;
                null === (e = t) || void 0 === e || e(o);
              })
              .catch((e) => {
                var t;
                null === (t = a) || void 0 === t || t();
              }),
            o
          );
        }
        parse() {}
      }
      t.FaceMeshLoader = i;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(3),
        a = r(14),
        i = AFRAME.THREE;
      class o extends i.Mesh {
        constructor(e, t) {
          super(),
            (this.onLoad = e),
            (this.onError = t),
            (this._faceMesh = new n.FaceMesh()),
            (this._faceBufferGeometry = new a.FaceBufferGeometry(
              this._faceMesh
            )),
            (this.geometry = this._faceBufferGeometry),
            (this.material = new i.MeshBasicMaterial({ colorWrite: !1 })),
            this._faceMesh
              .loadDefaultFullHeadSimplified(!0, !0, !0, !0)
              .then(() => {
                var e;
                return null === (e = this.onLoad) || void 0 === e
                  ? void 0
                  : e.call(this);
              })
              .catch(() => {
                var e;
                return null === (e = this.onError) || void 0 === e
                  ? void 0
                  : e.call(this);
              }),
            (this.renderOrder = Number.MIN_SAFE_INTEGER);
        }
        updateFromFaceAnchorGroup(e) {
          this._faceBufferGeometry.updateFromFaceAnchorGroup(e);
        }
        updateFromFaceAnchor(e) {
          this._faceBufferGeometry.updateFromFaceAnchor(e);
        }
        updateFromIdentityExpression(e, t) {
          this._faceBufferGeometry.updateFromIdentityExpression(e, t);
        }
      }
      t.HeadMaskMesh = o;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(18);
      t.camera = n;
      const a = r(56);
      t.instant_tracker = a;
      const i = r(57);
      t.image_tracker = i;
      const o = r(58);
      t.face_tracker = o;
      const s = r(59);
      t.face_mesh = s;
      const u = r(60);
      t.head_mask = u;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(2);
      AFRAME.registerSystem("zappar-camera", {
        init: function () {
          (this.camera = new n.Camera()), (this._callbacks = new Set());
        },
        emitCallbacks: function () {
          for (let e of this._callbacks) e();
        },
        registerForCallbacks: function (e) {
          this._callbacks.add(e);
        },
        unregisterForCallbacks: function (e) {
          this._callbacks.delete(e);
        },
      });
      const a = AFRAME.registerComponent("zappar-camera", {
        schema: {
          userFacing: { type: "boolean", default: !1 },
          userCameraMirrorMode: { type: "string", default: "poses" },
          rearCameraMirrorMode: { type: "string", default: "no-mirror" },
          poseMode: { type: "string", default: "default" },
          poseAnchorOrigin: { type: "selector" },
        },
        update: function (e) {
          let t = this.system.camera;
          switch (
            (e.userFacing !== this.data.userFacing &&
              this.system.camera.start(this.data.userFacing),
            this.data.poseMode)
          ) {
            case "attitude":
              t.poseMode = n.CameraPoseMode.Attitude;
              break;
            case "anchor-origin":
              t.poseMode = n.CameraPoseMode.AnchorOrigin;
              break;
            default:
              t.poseMode = n.CameraPoseMode.Default;
          }
          switch (this.data.userCameraMirrorMode) {
            case "poses":
              t.userCameraMirrorMode = n.CameraMirrorMode.Poses;
              break;
            case "css":
              t.userCameraMirrorMode = n.CameraMirrorMode.CSS;
              break;
            case "no-mirror":
              t.userCameraMirrorMode = n.CameraMirrorMode.None;
              break;
            default:
              t.userCameraMirrorMode = n.CameraMirrorMode.Poses;
          }
          switch (this.data.rearCameraMirrorMode) {
            case "poses":
              t.rearCameraMirrorMode = n.CameraMirrorMode.Poses;
              break;
            case "css":
              t.rearCameraMirrorMode = n.CameraMirrorMode.CSS;
              break;
            case "no-mirror":
            default:
              t.rearCameraMirrorMode = n.CameraMirrorMode.None;
          }
        },
        init: function () {
          let e = document.querySelector("a-scene");
          e.setAttribute("vr-mode-ui", "enabled: false");
          let t = e.object3D,
            r = e.renderer;
          n.glContextSet(r.getContext()),
            (t.background = this.system.camera.backgroundTexture);
        },
        tick: function () {
          let e = this.system.camera,
            t = document.querySelector("a-scene").renderer;
          if (
            this.data &&
            this.data.poseAnchorOrigin &&
            this.data.poseAnchorOrigin.components
          ) {
            let t = this.data.poseAnchorOrigin.components;
            t["zappar-face"]
              ? (e.poseAnchorOrigin =
                  t["zappar-face"].trackerGroup.currentAnchor)
              : t["zappar-image"]
              ? (e.poseAnchorOrigin =
                  t["zappar-image"].trackerGroup.currentAnchor)
              : t["zappar-instant"] &&
                (e.poseAnchorOrigin =
                  t["zappar-instant"].trackerGroup.currentAnchor);
          }
          this.system.camera.updateFrame(t),
            (this.el.object3DMap.camera.matrixAutoUpdate = !1),
            (this.el.object3DMap.camera.projectionMatrix = e.projectionMatrix),
            (this.el.object3DMap.camera.projectionMatrixInverse =
              e.projectionMatrixInverse),
            (this.el.object3D.matrixAutoUpdate = !1),
            this.el.object3D.matrix.fromArray(e.rawPose),
            this.system.emitCallbacks();
        },
      });
      t.default = a;
    },
    function (e, t, r) {
      "use strict";
      var n =
        (this && this.__awaiter) ||
        function (e, t, r, n) {
          return new (r || (r = Promise))(function (a, i) {
            function o(e) {
              try {
                u(n.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                u(n.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(o, s);
            }
            u((n = n.apply(e, t || [])).next());
          });
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = r(6),
        i = r(0);
      t.ImageTracker = class {
        constructor(e, t) {
          (this._pipeline = e),
            (this.onVisible = new a.Event1()),
            (this.onNotVisible = new a.Event1()),
            (this.onNewAnchor = new a.Event1()),
            (this.visible = new Set()),
            (this.anchors = new Map()),
            (this._visibleLastFrame = new Set()),
            (this._frameUpdate = () => {
              let e = new Set(),
                t = this.visible;
              (this.visible = this._visibleLastFrame),
                (this._visibleLastFrame = t),
                this.visible.clear();
              let r = this._z.image_tracker_anchor_count(this._impl);
              for (let t = 0; t < r; t++) {
                let r = this._z.image_tracker_anchor_id(this._impl, t),
                  n = this.anchors.get(r),
                  i = !1;
                n ||
                  ((n = {
                    onVisible: new a.Event(),
                    onNotVisible: new a.Event(),
                    id: r,
                    poseCameraRelative: (e) =>
                      this._z.image_tracker_anchor_pose_camera_relative(
                        this._impl,
                        t,
                        !0 === e
                      ),
                    pose: (e, r) =>
                      this._z.image_tracker_anchor_pose(
                        this._impl,
                        t,
                        e,
                        !0 === r
                      ),
                    visible: !0,
                  }),
                  (i = !0),
                  this.anchors.set(r, n),
                  e.add(n)),
                  (n.visible = !0),
                  this.visible.add(n);
              }
              for (let t of e) this.onNewAnchor.emit(t);
              for (let e of this.visible)
                this._visibleLastFrame.has(e)
                  ? this._visibleLastFrame.delete(e)
                  : (this.onVisible.emit(e), e.onVisible.emit());
              for (let e of this._visibleLastFrame)
                this.onNotVisible.emit(e), e.onNotVisible.emit();
            }),
            this._pipeline._onFrameUpdateInternal.bind(this._frameUpdate),
            (this._z = i.z()),
            (this._impl = this._z.image_tracker_create(
              this._pipeline._getImpl()
            )),
            t && this.loadTarget(t);
        }
        destroy() {
          this._pipeline._onFrameUpdateInternal.unbind(this._frameUpdate),
            this.anchors.clear(),
            this.visible.clear(),
            this._z.image_tracker_destroy(this._impl);
        }
        loadTarget(e) {
          return n(this, void 0, void 0, function* () {
            "string" == typeof e && (e = yield (yield fetch(e)).arrayBuffer()),
              this._z.image_tracker_target_load_from_memory(this._impl, e);
          });
        }
        get enabled() {
          return this._z.image_tracker_enabled(this._impl);
        }
        set enabled(e) {
          this._z.image_tracker_enabled_set(this._impl, e);
        }
      };
    },
    function (e, t, r) {
      "use strict";
      if (
        (Object.defineProperty(t, "__esModule", { value: !0 }),
        document.currentScript)
      ) {
        const e = new URL(document.currentScript.src);
        let t = e.toString();
        if (e.pathname) {
          let e = t.split("/");
          e.pop(), (t = e.join("/") + "/");
        }
        console.log("Current script: ", t), (r.p = t + r.p);
      }
      const n = r(21);
      t.initialize = function () {
        return n.initialize();
      };
    },
    function (e, t, r) {
      "use strict";
      var n =
        (this && this.__awaiter) ||
        function (e, t, r, n) {
          return new (r || (r = Promise))(function (a, i) {
            function o(e) {
              try {
                u(n.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                u(n.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(o, s);
            }
            u((n = n.apply(e, t || [])).next());
          });
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = r(22),
        i = r(25),
        o = r(8),
        s = r(1),
        u = r(26),
        c = r(32),
        f = r(33),
        l = r(9),
        _ = r(37),
        d = r(11);
      let h;
      t.initialize = function () {
        if (h) return h;
        u.launchWorker();
        let e = new a.zappar_client((e) => {
          u.messageManager.postOutgoingMessage({ t: "zappar", d: e }, [e]);
        });
        if (window.location.hostname.toLowerCase().indexOf(".zappar.io") > 0) {
          let t = window.location.pathname.split("/");
          t.length > 1 &&
            t[1].length > 0 &&
            e.impl.analytics_project_id_set(".wiz" + t[1]);
        }
        return (
          u.messageManager.onIncomingMessage.bind((t) => {
            var r, n;
            switch (t.t) {
              case "zappar":
                null === (r = l.Pipeline.get(t.p)) ||
                  void 0 === r ||
                  r.pendingMessages.push(t.d);
                break;
              case "buf":
                e.serializer.bufferReturn(t.d);
                break;
              case "cameraFrameRecycleS2C":
                let a = t;
                null === (n = l.Pipeline.get(a.p)) ||
                  void 0 === n ||
                  n.cameraTokenReturn(a.token, a.d);
                break;
              case "licerr": {
                // let e = document.createElement("div");
                // (e.innerHTML =
                //   "Visit <a href='https://docs.zap.works/universal-ar/licensing/' style='color: white;'>our licensing page</a> to find out about hosting on your own domain."),
                //   (e.style.position = "absolute"),
                //   (e.style.bottom = "20px"),
                //   (e.style.width = "80%"),
                //   (e.style.backgroundColor = "black"),
                //   (e.style.color = "white"),
                //   (e.style.borderRadius = "10px"),
                //   (e.style.padding = "10px"),
                //   (e.style.fontFamily = "sans-serif"),
                //   (e.style.textAlign = "center"),
                //   (e.style.left = "10%"),
                //   (e.style.zIndex = Number.MAX_SAFE_INTEGER.toString());
                // let t = document.createElement("span");
                // (t.innerText = " (30)"), e.append(t);
                // let r = 30;
                // setInterval(function () {
                //   r--, r >= 0 && (t.innerText = " (" + r.toString() + ")");
                // }, 1e3),
                //   document.body.append(e);
              }
            }
          }),
          (h = Object.assign(Object.assign({}, e.impl), {
            camera_default_device_id: (e) =>
              e
                ? _.CameraSource.USER_DEFAULT_DEVICE_ID
                : _.CameraSource.DEFAULT_DEVICE_ID,
            camera_source_create: (e, t) => _.CameraSource.create(e, t),
            camera_source_destroy: (e) => {
              var t;
              return null === (t = _.CameraSource.get(e)) || void 0 === t
                ? void 0
                : t.destroy();
            },
            camera_source_pause: (e) => {
              var t;
              return null === (t = _.CameraSource.get(e)) || void 0 === t
                ? void 0
                : t.pause();
            },
            camera_source_start: (e) => {
              var t;
              return null === (t = _.CameraSource.get(e)) || void 0 === t
                ? void 0
                : t.start();
            },
            pipeline_create: () => l.Pipeline.create(e.impl, u.messageManager),
            pipeline_frame_update: (t) => {
              var r;
              return null === (r = l.Pipeline.get(t)) || void 0 === r
                ? void 0
                : r.frameUpdate(e);
            },
            pipeline_camera_frame_draw_gl: (e, t, r, n) => {
              var a;
              null === (a = l.Pipeline.get(e)) ||
                void 0 === a ||
                a.cameraFrameDrawGL(t, r, n);
            },
            draw_plane: (e, t, r, n, a) => {
              i.drawPlane(e, t, r, n, a);
            },
            pipeline_draw_face: (e, t, r, n, a) => {
              var i;
              let o = f.getFaceMesh(a);
              if (!o)
                return (
                  console.log(
                    "Warning: attempting to call draw_face on a destroyed zappar_face_mesh_t"
                  ),
                  new Uint16Array()
                );
              null === (i = l.Pipeline.get(e)) ||
                void 0 === i ||
                i.drawFace(t, r, n, o);
            },
            pipeline_draw_face_project: (e, t, r, n, a, i, o) => {
              var s;
              null === (s = l.Pipeline.get(e)) ||
                void 0 === s ||
                s.drawFaceProject(t, r, n, a, i, o);
            },
            projection_matrix_from_camera_model: o.projectionMatrix,
            pipeline_process_gl: (e) => {
              var t;
              return null === (t = l.Pipeline.get(e)) || void 0 === t
                ? void 0
                : t.processGL();
            },
            pipeline_gl_context_set: (e, t, r) => {
              var n;
              return null === (n = l.Pipeline.get(e)) || void 0 === n
                ? void 0
                : n.glContextSet(t, r);
            },
            pipeline_camera_frame_upload_gl: () => {},
            pipeline_camera_frame_texture_gl: (e) => {
              var t;
              return null === (t = l.Pipeline.get(e)) || void 0 === t
                ? void 0
                : t.cameraFrameTexture();
            },
            pipeline_camera_frame_texture_matrix: (e, t, r, n) => {
              var a;
              return (
                (null === (a = l.Pipeline.get(e)) || void 0 === a
                  ? void 0
                  : a.cameraFrameTextureMatrix(t, r, n)) || s.mat4.create()
              );
            },
            pipeline_camera_frame_user_facing: (e) => {
              var t;
              return (
                (null === (t = l.Pipeline.get(e)) || void 0 === t
                  ? void 0
                  : t.cameraFrameUserFacing()) || !1
              );
            },
            pipeline_camera_pose_default: () => s.mat4.create(),
            pipeline_camera_pose_with_attitude: (e, t) => {
              var r;
              return (
                (null === (r = l.Pipeline.get(e)) || void 0 === r
                  ? void 0
                  : r.cameraPoseWithAttitude(t)) || s.mat4.create()
              );
            },
            pipeline_camera_pose_with_origin: (e, t) => {
              let r = s.mat4.create();
              return s.mat4.invert(r, t), r;
            },
            instant_world_tracker_anchor_pose_camera_relative: (t, r) => {
              let n = l.applyScreenCounterRotation(
                void 0,
                e.impl.instant_world_tracker_anchor_pose_raw(t)
              );
              if (r) {
                let e = s.mat4.create();
                s.mat4.fromScaling(e, [-1, 1, 1]),
                  s.mat4.multiply(n, e, n),
                  s.mat4.multiply(n, n, e);
              }
              return n;
            },
            instant_world_tracker_anchor_pose: (t, r, n) => {
              let a = l.applyScreenCounterRotation(
                void 0,
                e.impl.instant_world_tracker_anchor_pose_raw(t)
              );
              if (n) {
                let e = s.mat4.create();
                s.mat4.fromScaling(e, [-1, 1, 1]),
                  s.mat4.multiply(a, e, a),
                  s.mat4.multiply(a, a, e);
              }
              return s.mat4.multiply(a, r, a), a;
            },
            image_tracker_anchor_pose_camera_relative: (t, r, n) => {
              let a = l.applyScreenCounterRotation(
                void 0,
                e.impl.image_tracker_anchor_pose_raw(t, r)
              );
              if (n) {
                let e = s.mat4.create();
                s.mat4.fromScaling(e, [-1, 1, 1]),
                  s.mat4.multiply(a, e, a),
                  s.mat4.multiply(a, a, e);
              }
              return a;
            },
            image_tracker_anchor_pose: (t, r, n, a) => {
              let i = l.applyScreenCounterRotation(
                void 0,
                e.impl.image_tracker_anchor_pose_raw(t, r)
              );
              if (a) {
                let e = s.mat4.create();
                s.mat4.fromScaling(e, [-1, 1, 1]),
                  s.mat4.multiply(i, e, i),
                  s.mat4.multiply(i, i, e);
              }
              return s.mat4.multiply(i, n, i), i;
            },
            face_tracker_anchor_pose_camera_relative: (t, r, n) => {
              let a = l.applyScreenCounterRotation(
                void 0,
                e.impl.face_tracker_anchor_pose_raw(t, r)
              );
              if (n) {
                let e = s.mat4.create();
                s.mat4.fromScaling(e, [-1, 1, 1]),
                  s.mat4.multiply(a, e, a),
                  s.mat4.multiply(a, a, e);
              }
              return a;
            },
            face_tracker_anchor_pose: (t, r, n, a) => {
              let i = l.applyScreenCounterRotation(
                void 0,
                e.impl.face_tracker_anchor_pose_raw(t, r)
              );
              if (a) {
                let e = s.mat4.create();
                s.mat4.fromScaling(e, [-1, 1, 1]),
                  s.mat4.multiply(i, e, i),
                  s.mat4.multiply(i, i, e);
              }
              return s.mat4.multiply(i, n, i), i;
            },
            face_tracker_model_load_default: (e) =>
              n(this, void 0, void 0, function* () {
                yield (function (e) {
                  var t;
                  return n(this, void 0, void 0, function* () {
                    let n = r(40).default,
                      a = yield fetch(n),
                      i = yield a.arrayBuffer();
                    null === (t = h) ||
                      void 0 === t ||
                      t.face_tracker_model_load_from_memory(e, i);
                  });
                })(e);
              }),
            face_mesh_create: () => f.createFaceMesh(),
            face_mesh_destroy: (e) => {
              f.destroyFaceMesh(e);
            },
            face_mesh_indices: (e) => {
              let t = f.getFaceMesh(e);
              return t
                ? t.getIndices()
                : (console.log(
                    "Warning: attempting to call face_mesh_indices on a destroyed zappar_face_mesh_t"
                  ),
                  new Uint16Array());
            },
            face_mesh_indices_size: (e) => {
              let t = f.getFaceMesh(e);
              return t
                ? t.getIndices().length
                : (console.log(
                    "Warning: attempting to call face_mesh_indices_size on a destroyed zappar_face_mesh_t"
                  ),
                  0);
            },
            face_mesh_uvs: (e) => {
              let t = f.getFaceMesh(e);
              return t
                ? t.getUVs()
                : (console.log(
                    "Warning: attempting to call face_mesh_uvs on a destroyed zappar_face_mesh_t"
                  ),
                  new Float32Array());
            },
            face_mesh_uvs_size: (e) => {
              let t = f.getFaceMesh(e);
              return t
                ? t.getUVs().length
                : (console.log(
                    "Warning: attempting to call face_mesh_uvs_size on a destroyed zappar_face_mesh_t"
                  ),
                  0);
            },
            face_mesh_vertices: (e) => {
              let t = f.getFaceMesh(e);
              return t
                ? t.getVertices()
                : (console.log(
                    "Warning: attempting to call face_mesh_vertices on a destroyed zappar_face_mesh_t"
                  ),
                  new Float32Array());
            },
            face_mesh_vertices_size: (e) => {
              let t = f.getFaceMesh(e);
              return t
                ? t.getVertices().length
                : (console.log(
                    "Warning: attempting to call face_mesh_vertices_size on a destroyed zappar_face_mesh_t"
                  ),
                  0);
            },
            face_mesh_normals: (e) => {
              let t = f.getFaceMesh(e);
              return t
                ? t.getNormals()
                : (console.log(
                    "Warning: attempting to call face_mesh_normals on a destroyed zappar_face_mesh_t"
                  ),
                  new Float32Array());
            },
            face_mesh_normals_size: (e) => {
              let t = f.getFaceMesh(e);
              return t
                ? t.getNormals().length
                : (console.log(
                    "Warning: attempting to call face_mesh_normals_size on a destroyed zappar_face_mesh_t"
                  ),
                  0);
            },
            face_mesh_load_from_memory: (e, t, r, n, a, i) => {
              let o = f.getFaceMesh(e);
              o
                ? o.loadFromMemory(t, r, n, a, i)
                : console.log(
                    "Warning: attempting to call face_mesh_load_from_memory on a destroyed zappar_face_mesh_t"
                  );
            },
            face_mesh_update: (e, t, r, n) => {
              let a = f.getFaceMesh(e);
              a
                ? a.update(t, r, n)
                : console.log(
                    "Warning: attempting to call face_mesh_update on a destroyed zappar_face_mesh_t"
                  );
            },
            face_mesh_load_default: (e) =>
              n(this, void 0, void 0, function* () {
                let t = f.getFaceMesh(e);
                if (!t)
                  return void console.log(
                    "Warning: attempting to call face_mesh_load_default on a destroyed zappar_face_mesh_t"
                  );
                let n = r(13).default,
                  a = yield fetch(n);
                t.loadFromMemory(yield a.arrayBuffer(), !1, !1, !1, !1);
              }),
            face_mesh_load_default_face: (e, t, a, i) =>
              n(this, void 0, void 0, function* () {
                let n = f.getFaceMesh(e);
                if (!n)
                  return void console.log(
                    "Warning: attempting to call face_mesh_load_default_face on a destroyed zappar_face_mesh_t"
                  );
                let o = r(13).default,
                  s = yield fetch(o);
                n.loadFromMemory(yield s.arrayBuffer(), t, a, i, !1);
              }),
            face_mesh_load_default_full_head_simplified: (e, t, a, i, o) =>
              n(this, void 0, void 0, function* () {
                let n = f.getFaceMesh(e);
                if (!n)
                  return void console.log(
                    "Warning: attempting to call face_mesh_load_default_full_head_simplified on a destroyed zappar_face_mesh_t"
                  );
                let s = r(39).default,
                  u = yield fetch(s);
                n.loadFromMemory(yield u.arrayBuffer(), t, a, i, o);
              }),
            face_mesh_loaded_version: (e) => {
              let t = f.getFaceMesh(e);
              return t
                ? t.getModelVersion()
                : (console.log(
                    "Warning: attempting to call face_mesh_load_default on a destroyed zappar_face_mesh_t"
                  ),
                  -1);
            },
            html_element_source_create: (e, t) =>
              d.HTMLElementSource.createVideoElementSource(e, t),
            html_element_source_start: (e) => {
              var t;
              return null ===
                (t = d.HTMLElementSource.getVideoElementSource(e)) ||
                void 0 === t
                ? void 0
                : t.start();
            },
            html_element_source_pause: (e) => {
              var t;
              return null ===
                (t = d.HTMLElementSource.getVideoElementSource(e)) ||
                void 0 === t
                ? void 0
                : t.pause();
            },
            html_element_source_destroy: (e) => {
              var t;
              return null ===
                (t = d.HTMLElementSource.getVideoElementSource(e)) ||
                void 0 === t
                ? void 0
                : t.destroy();
            },
            permission_granted_all: c.permissionGrantedAll,
            permission_granted_camera: c.permissionGrantedCamera,
            permission_granted_motion: c.permissionGrantedMotion,
            permission_denied_any: c.permissionDeniedAny,
            permission_denied_camera: c.permissionDeniedCamera,
            permission_denied_motion: c.permissionDeniedMotion,
            permission_request_motion: c.permissionRequestMotion,
            permission_request_camera: c.permissionRequestCamera,
            permission_request_all: c.permissionRequestAll,
            permission_request_ui: c.permissionRequestUI,
            permission_request_ui_promise: c.permissionRequestUI,
            permission_denied_ui: c.permissionDeniedUI,
          })),
          h
        );
      };
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(23),
        a = r(24);
      t.zappar_client = class {
        constructor(e) {
          (this._messageSender = e),
            (this._globalState = {}),
            (this.serializer = new n.MessageSerializer((e) => {
              this._messageSender(e);
            })),
            (this.deserializer = new a.MessageDeserializer()),
            (this._latestId = 1),
            (this._pipeline_state_by_instance = new Map()),
            (this._camera_source_state_by_instance = new Map()),
            (this._image_tracker_state_by_instance = new Map()),
            (this._face_tracker_state_by_instance = new Map()),
            (this._face_mesh_state_by_instance = new Map()),
            (this._barcode_finder_state_by_instance = new Map()),
            (this._instant_world_tracker_state_by_instance = new Map()),
            (this.impl = {
              analytics_project_id_set: (e) => {
                this.serializer.sendMessage(30, (t) => {
                  t.string(e);
                });
              },
              pipeline_create: () => {
                let e = this._latestId++,
                  t = {
                    current_frame_user_data: 0,
                    camera_model: new Float32Array([300, 300, 160, 120, 0, 0]),
                    camera_pose: new Float32Array([
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                    ]),
                    camera_frame_camera_attitude: new Float32Array([
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                    ]),
                    frame_number: 0,
                  };
                return (
                  this._pipeline_state_by_instance.set(e, t),
                  this.serializer.sendMessage(26, (t) => {
                    t.type(e);
                  }),
                  e
                );
              },
              pipeline_destroy: (e) => {
                if (!this._pipeline_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this._pipeline_state_by_instance.delete(e),
                  this.serializer.sendMessage(27, (t) => {
                    t.type(e);
                  });
              },
              pipeline_frame_update: (e) => {
                if (!this._pipeline_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this.serializer.sendMessage(9, (t) => {
                  t.type(e);
                });
              },
              pipeline_frame_number: (e) => {
                let t = this._pipeline_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.frame_number;
              },
              pipeline_camera_model: (e) => {
                let t = this._pipeline_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.camera_model;
              },
              pipeline_camera_frame_user_data: (e) => {
                let t = this._pipeline_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.current_frame_user_data;
              },
              pipeline_camera_frame_submit: (e, t, r, n, a, i) => {
                if (!this._pipeline_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this.serializer.sendMessage(8, (o) => {
                  o.type(e),
                    o.dataWithLength(t),
                    o.int(r),
                    o.int(n),
                    o.int(a),
                    o.matrix4x4(i);
                });
              },
              pipeline_camera_frame_camera_attitude: (e) => {
                let t = this._pipeline_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.camera_frame_camera_attitude;
              },
              pipeline_motion_accelerometer_submit: (e, t, r, n, a) => {
                if (!this._pipeline_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this.serializer.sendMessage(10, (i) => {
                  i.type(e), i.timestamp(t), i.float(r), i.float(n), i.float(a);
                });
              },
              pipeline_motion_rotation_rate_submit: (e, t, r, n, a) => {
                if (!this._pipeline_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this.serializer.sendMessage(11, (i) => {
                  i.type(e), i.timestamp(t), i.float(r), i.float(n), i.float(a);
                });
              },
              pipeline_motion_attitude_submit: (e, t, r, n, a) => {
                if (!this._pipeline_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this.serializer.sendMessage(12, (i) => {
                  i.type(e), i.timestamp(t), i.float(r), i.float(n), i.float(a);
                });
              },
              camera_source_create: (e, t) => {
                let r = this._latestId++;
                return (
                  this._camera_source_state_by_instance.set(r, {}),
                  this.serializer.sendMessage(28, (n) => {
                    n.type(r), n.type(e), n.string(t);
                  }),
                  r
                );
              },
              camera_source_destroy: (e) => {
                if (!this._camera_source_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this._camera_source_state_by_instance.delete(e),
                  this.serializer.sendMessage(29, (t) => {
                    t.type(e);
                  });
              },
              image_tracker_create: (e) => {
                let t = this._latestId++;
                return (
                  this._image_tracker_state_by_instance.set(t, {
                    enabled: !0,
                    target_loaded_version: -1,
                    anchor_count: 0,
                    anchor_id: [],
                    anchor_pose: [],
                  }),
                  this.serializer.sendMessage(2, (r) => {
                    r.type(t), r.type(e);
                  }),
                  t
                );
              },
              image_tracker_destroy: (e) => {
                if (!this._image_tracker_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this._image_tracker_state_by_instance.delete(e),
                  this.serializer.sendMessage(13, (t) => {
                    t.type(e);
                  });
              },
              image_tracker_target_load_from_memory: (e, t) => {
                if (!this._image_tracker_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this.serializer.sendMessage(4, (r) => {
                  r.type(e), r.dataWithLength(t);
                });
              },
              image_tracker_target_loaded_version: (e) => {
                let t = this._image_tracker_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.target_loaded_version;
              },
              image_tracker_enabled: (e) => {
                let t = this._image_tracker_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.enabled;
              },
              image_tracker_enabled_set: (e, t) => {
                if (!this._image_tracker_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this.serializer.sendMessage(3, (r) => {
                  r.type(e), r.bool(t);
                });
              },
              image_tracker_anchor_count: (e) => {
                let t = this._image_tracker_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.anchor_count;
              },
              image_tracker_anchor_id: (e, t) => {
                let r = this._image_tracker_state_by_instance.get(e);
                if (!r) throw new Error("This object has been destroyed");
                return r.anchor_id[t];
              },
              image_tracker_anchor_pose_raw: (e, t) => {
                let r = this._image_tracker_state_by_instance.get(e);
                if (!r) throw new Error("This object has been destroyed");
                return r.anchor_pose[t];
              },
              face_tracker_create: (e) => {
                let t = this._latestId++;
                return (
                  this._face_tracker_state_by_instance.set(t, {
                    enabled: !0,
                    model_loaded: -1,
                    max_faces: 1,
                    anchor_count: 0,
                    anchor_id: [],
                    anchor_pose: [],
                    anchor_identity_coefficients: [],
                    anchor_expression_coefficients: [],
                  }),
                  this.serializer.sendMessage(19, (r) => {
                    r.type(t), r.type(e);
                  }),
                  t
                );
              },
              face_tracker_destroy: (e) => {
                if (!this._face_tracker_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this._face_tracker_state_by_instance.delete(e),
                  this.serializer.sendMessage(20, (t) => {
                    t.type(e);
                  });
              },
              face_tracker_model_load_from_memory: (e, t) => {
                if (!this._face_tracker_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this.serializer.sendMessage(21, (r) => {
                  r.type(e), r.dataWithLength(t);
                });
              },
              face_tracker_model_loaded_version: (e) => {
                let t = this._face_tracker_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.model_loaded;
              },
              face_tracker_enabled_set: (e, t) => {
                if (!this._face_tracker_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this.serializer.sendMessage(22, (r) => {
                  r.type(e), r.bool(t);
                });
              },
              face_tracker_enabled: (e) => {
                let t = this._face_tracker_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.enabled;
              },
              face_tracker_max_faces_set: (e, t) => {
                if (!this._face_tracker_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this.serializer.sendMessage(23, (r) => {
                  r.type(e), r.int(t);
                });
              },
              face_tracker_max_faces: (e) => {
                let t = this._face_tracker_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.max_faces;
              },
              face_tracker_anchor_count: (e) => {
                let t = this._face_tracker_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.anchor_count;
              },
              face_tracker_anchor_id: (e, t) => {
                let r = this._face_tracker_state_by_instance.get(e);
                if (!r) throw new Error("This object has been destroyed");
                return r.anchor_id[t];
              },
              face_tracker_anchor_pose_raw: (e, t) => {
                let r = this._face_tracker_state_by_instance.get(e);
                if (!r) throw new Error("This object has been destroyed");
                return r.anchor_pose[t];
              },
              face_tracker_anchor_identity_coefficients: (e, t) => {
                let r = this._face_tracker_state_by_instance.get(e);
                if (!r) throw new Error("This object has been destroyed");
                return r.anchor_identity_coefficients[t];
              },
              face_tracker_anchor_expression_coefficients: (e, t) => {
                let r = this._face_tracker_state_by_instance.get(e);
                if (!r) throw new Error("This object has been destroyed");
                return r.anchor_expression_coefficients[t];
              },
              face_mesh_create: () => {
                let e = this._latestId++;
                return (
                  this._face_mesh_state_by_instance.set(e, {}),
                  this.serializer.sendMessage(24, (t) => {
                    t.type(e);
                  }),
                  e
                );
              },
              face_mesh_destroy: (e) => {
                if (!this._face_mesh_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this._face_mesh_state_by_instance.delete(e),
                  this.serializer.sendMessage(25, (t) => {
                    t.type(e);
                  });
              },
              barcode_finder_create: (e) => {
                let t = this._latestId++;
                return (
                  this._barcode_finder_state_by_instance.set(t, {
                    enabled: !0,
                    number_found: 0,
                    found_text: [],
                    found_format: [],
                    formats: 131071,
                  }),
                  this.serializer.sendMessage(15, (r) => {
                    r.type(t), r.type(e);
                  }),
                  t
                );
              },
              barcode_finder_destroy: (e) => {
                if (!this._barcode_finder_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this._barcode_finder_state_by_instance.delete(e),
                  this.serializer.sendMessage(16, (t) => {
                    t.type(e);
                  });
              },
              barcode_finder_enabled_set: (e, t) => {
                if (!this._barcode_finder_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this.serializer.sendMessage(17, (r) => {
                  r.type(e), r.bool(t);
                });
              },
              barcode_finder_enabled: (e) => {
                let t = this._barcode_finder_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.enabled;
              },
              barcode_finder_found_number: (e) => {
                let t = this._barcode_finder_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.number_found;
              },
              barcode_finder_found_text: (e, t) => {
                let r = this._barcode_finder_state_by_instance.get(e);
                if (!r) throw new Error("This object has been destroyed");
                return r.found_text[t];
              },
              barcode_finder_found_format: (e, t) => {
                let r = this._barcode_finder_state_by_instance.get(e);
                if (!r) throw new Error("This object has been destroyed");
                return r.found_format[t];
              },
              barcode_finder_formats: (e) => {
                let t = this._barcode_finder_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.formats;
              },
              barcode_finder_formats_set: (e, t) => {
                if (!this._barcode_finder_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this.serializer.sendMessage(18, (r) => {
                  r.type(e), r.barcodeFormat(t);
                });
              },
              instant_world_tracker_create: (e) => {
                let t = this._latestId++,
                  r = {
                    enabled: !0,
                    pose: new Float32Array([
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      1,
                    ]),
                  };
                return (
                  this._instant_world_tracker_state_by_instance.set(t, r),
                  this.serializer.sendMessage(5, (r) => {
                    r.type(t), r.type(e);
                  }),
                  t
                );
              },
              instant_world_tracker_destroy: (e) => {
                if (!this._instant_world_tracker_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this._instant_world_tracker_state_by_instance.delete(e),
                  this.serializer.sendMessage(14, (t) => {
                    t.type(e);
                  });
              },
              instant_world_tracker_enabled_set: (e, t) => {
                if (!this._instant_world_tracker_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this.serializer.sendMessage(6, (r) => {
                  r.type(e), r.bool(t);
                });
              },
              instant_world_tracker_enabled: (e) => {
                let t = this._instant_world_tracker_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.enabled;
              },
              instant_world_tracker_anchor_pose_raw: (e) => {
                let t = this._instant_world_tracker_state_by_instance.get(e);
                if (!t) throw new Error("This object has been destroyed");
                return t.pose;
              },
              instant_world_tracker_anchor_pose_set_from_camera_offset: (
                e,
                t,
                r,
                n,
                a
              ) => {
                if (!this._instant_world_tracker_state_by_instance.get(e))
                  throw new Error("This object has been destroyed");
                this.serializer.sendMessage(7, (i) => {
                  i.type(e),
                    i.float(t),
                    i.float(r),
                    i.float(n),
                    i.instantTrackerTransformOrientation(a);
                });
              },
            });
        }
        processMessages(e) {
          this.deserializer.setData(e),
            this.deserializer.forMessages((e, t) => {
              switch (e) {
                case 7: {
                  let e = t.type(),
                    r = this._pipeline_state_by_instance.get(e);
                  if (!r) return;
                  r.frame_number = t.int();
                  break;
                }
                case 6: {
                  let e = t.type(),
                    r = this._pipeline_state_by_instance.get(e);
                  if (!r) return;
                  r.camera_model = t.cameraModel();
                  break;
                }
                case 5: {
                  let e = t.type(),
                    r = this._pipeline_state_by_instance.get(e);
                  if (!r) return;
                  r.current_frame_user_data = t.int();
                  break;
                }
                case 11: {
                  let e = t.type(),
                    r = this._pipeline_state_by_instance.get(e);
                  if (!r) return;
                  r.camera_frame_camera_attitude = t.matrix4x4();
                  break;
                }
                case 18: {
                  let e = t.type(),
                    r = this._image_tracker_state_by_instance.get(e);
                  if (!r) return;
                  r.target_loaded_version = t.int();
                  break;
                }
                case 1: {
                  let e = t.type(),
                    r = this._image_tracker_state_by_instance.get(e);
                  if (!r) return;
                  r.anchor_count = t.int();
                  break;
                }
                case 2: {
                  let e = t.type(),
                    r = this._image_tracker_state_by_instance.get(e);
                  if (!r) return;
                  let n = t.int();
                  r.anchor_id[n] = t.string();
                  break;
                }
                case 3: {
                  let e = t.type(),
                    r = this._image_tracker_state_by_instance.get(e);
                  if (!r) return;
                  let n = t.int();
                  r.anchor_pose[n] = t.matrix4x4();
                  break;
                }
                case 17: {
                  let e = t.type(),
                    r = this._face_tracker_state_by_instance.get(e);
                  if (!r) return;
                  r.model_loaded = t.int();
                  break;
                }
                case 12: {
                  let e = t.type(),
                    r = this._face_tracker_state_by_instance.get(e);
                  if (!r) return;
                  r.anchor_count = t.int();
                  break;
                }
                case 13: {
                  let e = t.type(),
                    r = this._face_tracker_state_by_instance.get(e);
                  if (!r) return;
                  let n = t.int();
                  r.anchor_id[n] = t.string();
                  break;
                }
                case 14: {
                  let e = t.type(),
                    r = this._face_tracker_state_by_instance.get(e);
                  if (!r) return;
                  let n = t.int();
                  r.anchor_pose[n] = t.matrix4x4();
                  break;
                }
                case 15: {
                  let e = t.type(),
                    r = this._face_tracker_state_by_instance.get(e);
                  if (!r) return;
                  let n = t.int();
                  r.anchor_identity_coefficients[n] = t.identityCoefficients();
                  break;
                }
                case 16: {
                  let e = t.type(),
                    r = this._face_tracker_state_by_instance.get(e);
                  if (!r) return;
                  let n = t.int();
                  r.anchor_expression_coefficients[
                    n
                  ] = t.expressionCoefficients();
                  break;
                }
                case 8: {
                  let e = t.type(),
                    r = this._barcode_finder_state_by_instance.get(e);
                  if (!r) return;
                  r.number_found = t.int();
                  break;
                }
                case 9: {
                  let e = t.type(),
                    r = this._barcode_finder_state_by_instance.get(e);
                  if (!r) return;
                  let n = t.int();
                  r.found_text[n] = t.string();
                  break;
                }
                case 10: {
                  let e = t.type(),
                    r = this._barcode_finder_state_by_instance.get(e);
                  if (!r) return;
                  let n = t.int();
                  r.found_format[n] = t.barcodeFormat();
                  break;
                }
                case 4: {
                  let e = t.type(),
                    r = this._instant_world_tracker_state_by_instance.get(e);
                  if (!r) return;
                  r.pose = t.matrix4x4();
                  break;
                }
              }
            });
        }
      };
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.MessageSerializer = class {
        constructor(e) {
          (this._messageSender = e),
            (this._freeBufferPool = []),
            (this._buffer = new ArrayBuffer(16)),
            (this._i32View = new Int32Array(this._buffer)),
            (this._f32View = new Float32Array(this._buffer)),
            (this._f64View = new Float64Array(this._buffer)),
            (this._u8View = new Uint8Array(this._buffer)),
            (this._u8cView = new Uint8ClampedArray(this._buffer)),
            (this._u16View = new Uint16Array(this._buffer)),
            (this._u32View = new Uint32Array(this._buffer)),
            (this._offset = 1),
            (this._startOffset = -1),
            (this._timeoutSet = !1),
            (this._appender = {
              int: (e) => this.int(e),
              bool: (e) => this.int(e ? 1 : 0),
              float: (e) => this.float(e),
              string: (e) => this.string(e),
              dataWithLength: (e) => this.arrayBuffer(e),
              type: (e) => this.int(e),
              matrix4x4: (e) => this.float32ArrayBuffer(e),
              identityCoefficients: (e) => this.float32ArrayBuffer(e),
              expressionCoefficients: (e) => this.float32ArrayBuffer(e),
              cameraModel: (e) => this.float32ArrayBuffer(e),
              timestamp: (e) => this.double(e),
              barcodeFormat: (e) => this.int(e),
              instantTrackerTransformOrientation: (e) => this.int(e),
            }),
            this._freeBufferPool.push(new ArrayBuffer(16)),
            this._freeBufferPool.push(new ArrayBuffer(16));
        }
        bufferReturn(e) {
          this._freeBufferPool.push(e);
        }
        _ensureArrayBuffer(e) {
          let t = 4 * (this._offset + e + 8);
          if (this._buffer && this._buffer.byteLength >= t) return;
          let r = void 0;
          if (!r) {
            let e = t;
            e--,
              (e |= e >> 1),
              (e |= e >> 2),
              (e |= e >> 4),
              (e |= e >> 8),
              (e |= e >> 16),
              e++,
              console.log("Creating buffer with size: ", e),
              (r = new ArrayBuffer(e));
          }
          let n = this._buffer ? this._i32View : void 0;
          (this._buffer = r),
            (this._i32View = new Int32Array(this._buffer)),
            (this._f32View = new Float32Array(this._buffer)),
            (this._f64View = new Float64Array(this._buffer)),
            (this._u8View = new Uint8Array(this._buffer)),
            (this._u8cView = new Uint8ClampedArray(this._buffer)),
            (this._u16View = new Uint16Array(this._buffer)),
            (this._u32View = new Uint32Array(this._buffer)),
            n && this._i32View.set(n.subarray(0, this._offset));
        }
        sendMessage(e, t) {
          this._ensureArrayBuffer(4),
            (this._startOffset = this._offset),
            (this._i32View[this._offset + 1] = e),
            (this._offset += 2),
            t(this._appender),
            (this._i32View[this._startOffset] =
              this._offset - this._startOffset),
            (this._startOffset = -1),
            !1 === this._timeoutSet &&
              ((this._timeoutSet = !0),
              setTimeout(() => {
                (this._timeoutSet = !1), this._send();
              }, 0));
        }
        _send() {
          0 !== this._freeBufferPool.length &&
            ((this._i32View[0] = this._offset),
            this._messageSender(this._buffer),
            (this._buffer = void 0),
            (this._buffer = this._freeBufferPool.pop()),
            (this._i32View = new Int32Array(this._buffer)),
            (this._f32View = new Float32Array(this._buffer)),
            (this._f64View = new Float64Array(this._buffer)),
            (this._u8View = new Uint8Array(this._buffer)),
            (this._u8cView = new Uint8ClampedArray(this._buffer)),
            (this._u16View = new Uint16Array(this._buffer)),
            (this._u32View = new Uint32Array(this._buffer)),
            (this._offset = 1),
            (this._startOffset = -1));
        }
        int(e) {
          this._ensureArrayBuffer(1),
            (this._i32View[this._offset] = e),
            this._offset++;
        }
        double(e) {
          this._ensureArrayBuffer(2),
            this._offset % 2 == 1 && this._offset++,
            (this._f64View[this._offset / 2] = e),
            (this._offset += 2);
        }
        float(e) {
          this._ensureArrayBuffer(1),
            (this._f32View[this._offset] = e),
            this._offset++;
        }
        int32Array(e) {
          this._ensureArrayBuffer(e.length);
          for (let t = 0; t < e.length; ++t)
            this._i32View[this._offset + t] = e[t];
          this._offset += e.length;
        }
        float32Array(e) {
          this._ensureArrayBuffer(e.length);
          for (let t = 0; t < e.length; ++t)
            this._f32View[this._offset + t] = e[t];
          this._offset += e.length;
        }
        booleanArray(e) {
          this._ensureArrayBuffer(e.length);
          for (let t = 0; t < e.length; ++t)
            this._i32View[this._offset + t] = e[t] ? 1 : 0;
          this._offset += e.length;
        }
        uint8ArrayBuffer(e) {
          this._ensureArrayBuffer(e.byteLength / 4),
            (this._i32View[this._offset] = e.byteLength),
            this._offset++,
            this._u8View.set(e, 4 * this._offset),
            (this._offset += e.byteLength >> 2),
            0 != (3 & e.byteLength) && this._offset++;
        }
        arrayBuffer(e) {
          let t = new Uint8Array(e);
          this.uint8ArrayBuffer(t);
        }
        uint8ClampedArrayBuffer(e) {
          this._ensureArrayBuffer(e.byteLength / 4),
            (this._i32View[this._offset] = e.byteLength),
            this._offset++,
            this._u8cView.set(e, 4 * this._offset),
            (this._offset += e.byteLength >> 2),
            0 != (3 & e.byteLength) && this._offset++;
        }
        float32ArrayBuffer(e) {
          this._ensureArrayBuffer(e.byteLength / 4),
            (this._i32View[this._offset] = e.length),
            this._offset++,
            this._f32View.set(e, this._offset),
            (this._offset += e.length);
        }
        uint16ArrayBuffer(e) {
          this._ensureArrayBuffer(e.byteLength / 4),
            (this._i32View[this._offset] = e.length),
            this._offset++;
          let t = 2 * this._offset;
          this._u16View.set(e, t),
            (this._offset += e.length >> 1),
            0 != (1 & e.length) && this._offset++;
        }
        int32ArrayBuffer(e) {
          this._ensureArrayBuffer(e.byteLength / 4),
            (this._i32View[this._offset] = e.length),
            this._offset++,
            this._i32View.set(e, this._offset),
            (this._offset += e.length);
        }
        uint32ArrayBuffer(e) {
          this._ensureArrayBuffer(e.byteLength / 4),
            (this._i32View[this._offset] = e.length),
            this._offset++,
            this._u32View.set(e, this._offset),
            (this._offset += e.length);
        }
        string(e) {
          let t = new TextEncoder().encode(e);
          this._ensureArrayBuffer(t.byteLength / 4),
            (this._i32View[this._offset] = t.byteLength),
            this._offset++,
            this._u8View.set(t, 4 * this._offset),
            (this._offset += t.byteLength >> 2),
            0 != (3 & t.byteLength) && this._offset++;
        }
      };
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.MessageDeserializer = class {
        constructor() {
          (this._buffer = new ArrayBuffer(0)),
            (this._i32View = new Int32Array(this._buffer)),
            (this._f32View = new Float32Array(this._buffer)),
            (this._f64View = new Float64Array(this._buffer)),
            (this._u8View = new Uint8Array(this._buffer)),
            (this._u16View = new Uint16Array(this._buffer)),
            (this._u32View = new Uint32Array(this._buffer)),
            (this._offset = 0),
            (this._length = 0),
            (this._startOffset = -1),
            (this._processor = {
              int: () => this._i32View[this._startOffset++],
              bool: () => 1 === this._i32View[this._startOffset++],
              type: () => this._i32View[this._startOffset++],
              float: () => this._f32View[this._startOffset++],
              timestamp: () => {
                this._startOffset % 2 == 1 && this._startOffset++;
                let e = this._f64View[this._startOffset / 2];
                return (this._startOffset += 2), e;
              },
              string: () => {
                let e = this._i32View[this._startOffset++],
                  t = new TextDecoder().decode(
                    new Uint8Array(this._buffer, 4 * this._startOffset, e)
                  );
                return (
                  (this._startOffset += e >> 2),
                  0 != (3 & e) && this._startOffset++,
                  t
                );
              },
              dataWithLength: () => {
                let e = this._i32View[this._startOffset++],
                  t = new Uint8Array(e);
                return (
                  t.set(
                    this._u8View.subarray(
                      4 * this._startOffset,
                      4 * this._startOffset + e
                    )
                  ),
                  (this._startOffset += t.byteLength >> 2),
                  0 != (3 & t.byteLength) && this._startOffset++,
                  t.buffer
                );
              },
              matrix4x4: () => {
                let e = this._i32View[this._startOffset++],
                  t = new Float32Array(e);
                return (
                  t.set(
                    this._f32View.subarray(
                      this._startOffset,
                      this._startOffset + 16
                    )
                  ),
                  (this._startOffset += e),
                  t
                );
              },
              identityCoefficients: () => {
                let e = this._i32View[this._startOffset++],
                  t = new Float32Array(e);
                return (
                  t.set(
                    this._f32View.subarray(
                      this._startOffset,
                      this._startOffset + 50
                    )
                  ),
                  (this._startOffset += e),
                  t
                );
              },
              expressionCoefficients: () => {
                let e = this._i32View[this._startOffset++],
                  t = new Float32Array(e);
                return (
                  t.set(
                    this._f32View.subarray(
                      this._startOffset,
                      this._startOffset + 29
                    )
                  ),
                  (this._startOffset += e),
                  t
                );
              },
              cameraModel: () => {
                let e = this._i32View[this._startOffset++],
                  t = new Float32Array(e);
                return (
                  t.set(
                    this._f32View.subarray(
                      this._startOffset,
                      this._startOffset + 6
                    )
                  ),
                  (this._startOffset += e),
                  t
                );
              },
              barcodeFormat: () => this._i32View[this._startOffset++],
              instantTrackerTransformOrientation: () =>
                this._i32View[this._startOffset++],
            });
        }
        setData(e) {
          (this._buffer = e),
            (this._i32View = new Int32Array(this._buffer)),
            (this._f32View = new Float32Array(this._buffer)),
            (this._f64View = new Float64Array(this._buffer)),
            (this._u8View = new Uint8Array(this._buffer)),
            (this._u16View = new Uint16Array(this._buffer)),
            (this._u32View = new Uint32Array(this._buffer)),
            (this._offset = 0),
            (this._length = 0),
            e.byteLength >= 4 &&
              ((this._offset = 1), (this._length = this._i32View[0])),
            (this._startOffset = -1);
        }
        hasMessage() {
          return this._offset + 1 < this._length;
        }
        forMessages(e) {
          for (; this.hasMessage(); ) {
            let t = this._i32View[this._offset],
              r = this._i32View[this._offset + 1];
            (this._startOffset = this._offset + 2),
              (this._offset += t),
              e(r, this._processor);
          }
        }
      };
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(4);
      let a, i;
      function o(e) {
        if (i) return i;
        if (((i = e.createBuffer()), !i))
          throw new Error("Unable to create buffer object");
        return (
          e.bindBuffer(e.ARRAY_BUFFER, i),
          e.bufferData(
            e.ARRAY_BUFFER,
            new Float32Array([0, 1, 0, 0, 1, 1, 1, 0]),
            e.STATIC_DRAW
          ),
          e.bindBuffer(e.ARRAY_BUFFER, null),
          i
        );
      }
      t.drawPlane = function (e, t, r, n, i) {
        let s = u(e),
          f = (function (e) {
            if (a) return a;
            if (((a = e.createBuffer()), !a))
              throw new Error("Unable to create buffer object");
            return (
              e.bindBuffer(e.ARRAY_BUFFER, a),
              e.bufferData(
                e.ARRAY_BUFFER,
                new Float32Array([
                  -0.5,
                  0.125,
                  0,
                  -0.5,
                  -0.125,
                  0,
                  0.5,
                  0.125,
                  0,
                  0.5,
                  -0.125,
                  0,
                ]),
                e.STATIC_DRAW
              ),
              e.bindBuffer(e.ARRAY_BUFFER, null),
              a
            );
          })(e),
          l = o(e);
        e.disable(e.DEPTH_TEST),
          e.useProgram(s.prog),
          e.uniformMatrix4fv(s.unif_proj, !1, t),
          e.uniformMatrix4fv(s.unif_camera, !1, r),
          e.uniformMatrix4fv(s.unif_matrix, !1, n),
          e.bindBuffer(e.ARRAY_BUFFER, f),
          e.activeTexture(e.TEXTURE0),
          e.bindTexture(
            e.TEXTURE_2D,
            (function (e, t) {
              if (c[t]) return c[t];
              let r = e.createTexture();
              if (!r) throw new Error("Unable to create texture");
              (c[t] = r), e.bindTexture(e.TEXTURE_2D, r);
              const n = e.RGBA,
                a = e.RGBA,
                i = e.UNSIGNED_BYTE,
                o = new Uint8Array([0, 0, 255, 255]);
              e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !0),
                e.texImage2D(e.TEXTURE_2D, 0, n, 1, 1, 0, a, i, o);
              const s = new Image();
              return (
                (s.onload = function () {
                  e.bindTexture(e.TEXTURE_2D, r),
                    e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !0),
                    e.texImage2D(e.TEXTURE_2D, 0, n, a, i, s),
                    e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_WRAP_S,
                      e.CLAMP_TO_EDGE
                    ),
                    e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_WRAP_T,
                      e.CLAMP_TO_EDGE
                    ),
                    e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_MIN_FILTER,
                      e.LINEAR
                    );
                }),
                (s.src = t),
                r
              );
            })(e, i)
          ),
          e.uniform1i(s.unif_skinSampler, 0),
          e.vertexAttribPointer(s.attr_position, 3, e.FLOAT, !1, 12, 0),
          e.enableVertexAttribArray(s.attr_position),
          e.bindBuffer(e.ARRAY_BUFFER, l),
          e.vertexAttribPointer(s.attr_textureCoord, 2, e.FLOAT, !1, 8, 0),
          e.enableVertexAttribArray(s.attr_textureCoord),
          e.drawArrays(e.TRIANGLE_STRIP, 0, 4),
          e.disableVertexAttribArray(s.attr_position),
          e.bindBuffer(e.ARRAY_BUFFER, null);
      };
      let s;
      function u(e) {
        if (s) return s;
        let t = e.createProgram();
        if (!t) throw new Error("Unable to create program");
        let r = n.compileShader(
            e,
            e.VERTEX_SHADER,
            "\n#ifndef GL_ES\n#define highp\n#define mediump\n#define lowp\n#endif\n\nuniform mat4 projMatrix;\nuniform mat4 cameraMatrix;\nuniform mat4 modelViewMatrix;\nattribute vec4 position;\nattribute vec2 textureCoord;\n\nvarying highp vec2 vTextureCoord;\n\nvoid main()\n{\n    gl_Position = projMatrix * cameraMatrix * modelViewMatrix * position;\n    vTextureCoord = textureCoord;\n}"
          ),
          a = n.compileShader(
            e,
            e.FRAGMENT_SHADER,
            "\n#define highp mediump\n#ifdef GL_ES\n    // define default precision for float, vec, mat.\n    precision highp float;\n#else\n#define highp\n#define mediump\n#define lowp\n#endif\n\nvarying highp vec2 vTextureCoord;\nuniform sampler2D skinSampler;\n\nvoid main()\n{\n    gl_FragColor = texture2D(skinSampler, vTextureCoord);\n}"
          );
        e.attachShader(t, r), e.attachShader(t, a), n.linkProgram(e, t);
        let i = e.getUniformLocation(t, "projMatrix");
        if (!i) throw new Error("Unable to get uniform location projMatrix");
        let o = e.getUniformLocation(t, "modelViewMatrix");
        if (!o)
          throw new Error("Unable to get uniform location modelViewMatrix");
        let u = e.getUniformLocation(t, "cameraMatrix");
        if (!u) throw new Error("Unable to get uniform location cameraMatrix");
        let c = e.getUniformLocation(t, "skinSampler");
        if (!c) throw new Error("Unable to get uniform location skinSampler");
        return (
          (s = {
            prog: t,
            unif_matrix: o,
            unif_proj: i,
            unif_camera: u,
            unif_skinSampler: c,
            attr_position: e.getAttribLocation(t, "position"),
            attr_textureCoord: e.getAttribLocation(t, "textureCoord"),
          }),
          s
        );
      }
      let c = {};
    },
    function (e, t, r) {
      "use strict";
      var n =
        (this && this.__awaiter) ||
        function (e, t, r, n) {
          return new (r || (r = Promise))(function (a, i) {
            function o(e) {
              try {
                u(n.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                u(n.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(o, s);
            }
            u((n = n.apply(e, t || [])).next());
          });
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = r(27);
      let i;
      (t.messageManager = new a.MsgManager()),
        (i = r(29)),
        (t.launchWorker = function () {
          return n(this, void 0, void 0, function* () {
            let e = new i();
            var n;
            function a() {
              let r = t.messageManager.getOutgoingMessages();
              for (let t of r) e.postMessage(t.msg, t.transferables);
            }
            e.postMessage({ t: "wasm", url: r(31).default }),
              yield ((n = e),
              new Promise((e) => {
                let t = (r) => {
                  "loaded" === r.data &&
                    (n.removeEventListener("message", t), e());
                };
                n.addEventListener("message", t);
              })),
              t.messageManager.onOutgoingMessage.bind(a),
              a(),
              e.addEventListener("message", (e) => {
                t.messageManager.postIncomingMessage(e.data);
              });
          });
        });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(28);
      t.MsgManager = class {
        constructor() {
          (this.onOutgoingMessage = new n.Event()),
            (this.onIncomingMessage = new n.Event1()),
            (this._outgoingMessages = []);
        }
        postIncomingMessage(e) {
          this.onIncomingMessage.emit(e);
        }
        postOutgoingMessage(e, t) {
          this._outgoingMessages.push({ msg: e, transferables: t }),
            this.onOutgoingMessage.emit();
        }
        getOutgoingMessages() {
          let e = this._outgoingMessages;
          return (this._outgoingMessages = []), e;
        }
      };
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.Event = class {
        constructor() {
          this._funcs = [];
        }
        bind(e) {
          this._funcs.push(e);
        }
        unbind(e) {
          let t = this._funcs.indexOf(e);
          t > -1 && this._funcs.splice(t, 1);
        }
        emit() {
          for (var e = 0, t = this._funcs.length; e < t; e++) this._funcs[e]();
        }
      };
      t.Event1 = class {
        constructor() {
          this._funcs = [];
        }
        bind(e) {
          this._funcs.push(e);
        }
        unbind(e) {
          let t = this._funcs.indexOf(e);
          t > -1 && this._funcs.splice(t, 1);
        }
        emit(e) {
          for (var t = 0, r = this._funcs.length; t < r; t++) this._funcs[t](e);
        }
      };
      t.Event2 = class {
        constructor() {
          this._funcs = [];
        }
        bind(e) {
          this._funcs.push(e);
        }
        unbind(e) {
          let t = this._funcs.indexOf(e);
          t > -1 && this._funcs.splice(t, 1);
        }
        emit(e, t) {
          for (var r = 0, n = this._funcs.length; r < n; r++)
            this._funcs[r](e, t);
        }
      };
      t.Event3 = class {
        constructor() {
          this._funcs = [];
        }
        bind(e) {
          this._funcs.push(e);
        }
        unbind(e) {
          let t = this._funcs.indexOf(e);
          t > -1 && this._funcs.splice(t, 1);
        }
        emit(e, t, r) {
          for (var n = 0, a = this._funcs.length; n < a; n++)
            this._funcs[n](e, t, r);
        }
      };
      t.Event5 = class {
        constructor() {
          this._funcs = [];
        }
        bind(e) {
          this._funcs.push(e);
        }
        unbind(e) {
          let t = this._funcs.indexOf(e);
          t > -1 && this._funcs.splice(t, 1);
        }
        emit(e, t, r, n, a) {
          for (var i = 0, o = this._funcs.length; i < o; i++)
            this._funcs[i](e, t, r, n, a);
        }
      };
    },
    function (e, t, r) {
      e.exports = function () {
        return r(30)(
          '!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2),a=self;r.messageManager.onOutgoingMessage.bind(()=>{let e=r.messageManager.getOutgoingMessages();for(let t of e)a.postMessage(t.msg,t.transferables)});let i=e=>{if(e&&e.data&&"wasm"===e.data.t){let t=location.href.startsWith("blob")?e.data.url:n(13).default;r.launchWorkerServer(t),a.removeEventListener("message",i)}};a.addEventListener("message",i),a.addEventListener("message",e=>{r.messageManager.postIncomingMessage(e.data)})},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,u)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const a=n(3),i=n(7),o=n(8),u=n(11),c=n(14);t.messageManager=new u.MsgManager,t.launchWorkerServer=function(e){return r(this,void 0,void 0,(function*(){console.log("Constructing ZNM");let n=a.default({locateFile:(t,n)=>t.endsWith("zcv.wasm")?e:n+t,onRuntimeInitialized:()=>{let e=i.getRuntimeObject(n),r=new o.zappar_server(e,(e,n)=>{t.messageManager.postOutgoingMessage({p:e,t:"zappar",d:n},[n])});t.messageManager.postOutgoingMessage("loaded",[]),t.messageManager.onIncomingMessage.bind(n=>{var a;switch(n.t){case"zappar":r.processBuffer(n.d),t.messageManager.postOutgoingMessage({t:"buf",d:n.d},[n.d]);break;case"buf":null===(a=r.serializersByPipelineId.get(n.p))||void 0===a||a.bufferReturn(n.d);break;case"cameraFrameC2S":let i=n,o=c.mat4.create();i.userFacing&&c.mat4.fromScaling(o,[-1,1,-1]);let u=r._pipeline_by_instance.get(i.p);u&&(e.pipeline_camera_frame_submit(u,i.d,i.width,i.height,i.token,o),e.pipeline_frame_update(u),r.exploreState());let s={token:i.token,d:i.d,p:i.p,t:"cameraFrameRecycleS2C"};t.messageManager.postOutgoingMessage(s,[i.d])}})}})}))}},function(e,t,n){"use strict";n.r(t),function(e){var n,r=(n="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,function(t){var r;t=t||{},r||(r=void 0!==t?t:{});var a,i={};for(a in r)r.hasOwnProperty(a)&&(i[a]=r[a]);r.arguments=[],r.thisProgram="./this.program",r.quit=function(e,t){throw t},r.preRun=[],r.postRun=[];var o="";function u(e){return r.locateFile?r.locateFile(e,o):o+e}o=self.location.href,n&&(o=n),o=0!==o.indexOf("blob:")?o.substr(0,o.lastIndexOf("/")+1):"",r.read=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText},r.readBinary=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)},r.readAsync=function(e,t,n){var r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="arraybuffer",r.onload=function(){200==r.status||0==r.status&&r.response?t(r.response):n()},r.onerror=n,r.send(null)},r.setWindowTitle=function(e){document.title=e};var c=r.print||("undefined"!=typeof console?console.log.bind(console):"undefined"!=typeof print?print:null),s=r.printErr||("undefined"!=typeof printErr?printErr:"undefined"!=typeof console&&console.warn.bind(console)||c);for(a in i)i.hasOwnProperty(a)&&(r[a]=i[a]);function f(e){var t=S;return S=S+e+15&-16,t}function _(e){var t=E[j>>2];return e=t+e+15&-16,E[j>>2]=e,e>=Z&&!H()?(E[j>>2]=t,0):t}function l(e){var t;return t||(t=16),Math.ceil(e/t)*t}i=void 0;var p,d={"f64-rem":function(e,t){return e%t},debugger:function(){}},h={};function m(e,t,n){return n&&n.length?r["dynCall_"+e].apply(null,[t].concat(n)):r["dynCall_"+e].call(null,t)}var b=!1;function y(e,t){e||br("Assertion failed: "+t)}function v(e){var t=r["_"+e];return y(t,"Cannot call unknown function "+e+", make sure it is exported"),t}var g={stackSave:function(){hr()},stackRestore:function(){dr()},arrayToC:function(e){var t=pr(e.length);return A.set(e,t),t},stringToC:function(e){var t=0;if(null!=e&&0!==e){var n=1+(e.length<<2);t=pr(n),G(e,x,t,n)}return t}},w={string:g.stringToC,array:g.arrayToC};function M(e){var t;if(0===t||!e)return"";for(var n,r=0,a=0;r|=n=x[e+a>>0],(0!=n||t)&&(a++,!t||a!=t););if(t||(t=a),n="",128>r){for(;0<t;)r=String.fromCharCode.apply(String,x.subarray(e,e+Math.min(t,1024))),n=n?n+r:r,e+=1024,t-=1024;return n}return q(e)}var k,A,x,z,L,E,T,O,C,S,I,B,P,F,D,j,R="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function V(e,t){for(var n=t;e[n];)++n;if(16<n-t&&e.subarray&&R)return R.decode(e.subarray(t,n));for(n="";;){var r=e[t++];if(!r)return n;if(128&r){var a=63&e[t++];if(192==(224&r))n+=String.fromCharCode((31&r)<<6|a);else{var i=63&e[t++];if(224==(240&r))r=(15&r)<<12|a<<6|i;else{var o=63&e[t++];if(240==(248&r))r=(7&r)<<18|a<<12|i<<6|o;else{var u=63&e[t++];r=248==(252&r)?(3&r)<<24|a<<18|i<<12|o<<6|u:(1&r)<<30|a<<24|i<<18|o<<12|u<<6|63&e[t++]}}65536>r?n+=String.fromCharCode(r):(r-=65536,n+=String.fromCharCode(55296|r>>10,56320|1023&r))}}else n+=String.fromCharCode(r)}}function q(e){return V(x,e)}function G(e,t,n,r){if(!(0<r))return 0;var a=n;r=n+r-1;for(var i=0;i<e.length;++i){var o=e.charCodeAt(i);if(55296<=o&&57343>=o&&(o=65536+((1023&o)<<10)|1023&e.charCodeAt(++i)),127>=o){if(n>=r)break;t[n++]=o}else{if(2047>=o){if(n+1>=r)break;t[n++]=192|o>>6}else{if(65535>=o){if(n+2>=r)break;t[n++]=224|o>>12}else{if(2097151>=o){if(n+3>=r)break;t[n++]=240|o>>18}else{if(67108863>=o){if(n+4>=r)break;t[n++]=248|o>>24}else{if(n+5>=r)break;t[n++]=252|o>>30,t[n++]=128|o>>24&63}t[n++]=128|o>>18&63}t[n++]=128|o>>12&63}t[n++]=128|o>>6&63}t[n++]=128|63&o}}return t[n]=0,n-a}function N(e){for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);55296<=r&&57343>=r&&(r=65536+((1023&r)<<10)|1023&e.charCodeAt(++n)),127>=r?++t:t=2047>=r?t+2:65535>=r?t+3:2097151>=r?t+4:67108863>=r?t+5:t+6}return t}function U(e,t){return 0<e%t&&(e+=t-e%t),e}function W(){r.HEAP8=A=new Int8Array(k),r.HEAP16=z=new Int16Array(k),r.HEAP32=E=new Int32Array(k),r.HEAPU8=x=new Uint8Array(k),r.HEAPU16=L=new Uint16Array(k),r.HEAPU32=T=new Uint32Array(k),r.HEAPF32=O=new Float32Array(k),r.HEAPF64=C=new Float64Array(k)}function H(){var e=r.usingWasm?65536:16777216,t=2147483648-e;if(E[j>>2]>t)return!1;var n=Z;for(Z=Math.max(Z,16777216);Z<E[j>>2];)Z=536870912>=Z?U(2*Z,e):Math.min(U((3*Z+2147483648)/4,e),t);return(e=r.reallocBuffer(Z))&&e.byteLength==Z?(r.buffer=k=e,W(),!0):(Z=n,!1)}"undefined"!=typeof TextDecoder&&new TextDecoder("utf-16le"),S=j=0,I=!1,r.reallocBuffer||(r.reallocBuffer=function(e){try{var t=A,n=new ArrayBuffer(e);new Int8Array(n).set(t)}catch(e){return!1}return!!sr(n)&&n});try{Function.prototype.call.bind(Object.getOwnPropertyDescriptor(ArrayBuffer.prototype,"byteLength").get)(new ArrayBuffer(4))}catch(Sn){}var Y=r.TOTAL_STACK||5242880,Z=r.TOTAL_MEMORY||16777216;function X(e){for(;0<e.length;){var t=e.shift();if("function"==typeof t)t();else{var n=t.g;"number"==typeof n?void 0===t.N?r.dynCall_v(n):r.dynCall_vi(n,t.N):n(void 0===t.N?null:t.N)}}}Z<Y&&s("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+Z+"! (TOTAL_STACK="+Y+")"),r.buffer?k=r.buffer:("object"==typeof WebAssembly&&"function"==typeof WebAssembly.Memory?(r.wasmMemory=new WebAssembly.Memory({initial:Z/65536}),k=r.wasmMemory.buffer):k=new ArrayBuffer(Z),r.buffer=k),W();var K=[],J=[],Q=[],$=[],ee=[],te=!1;function ne(){var e=r.preRun.shift();K.unshift(e)}var re=Math.abs,ae=Math.ceil,ie=Math.floor,oe=Math.min,ue=0,ce=null,se=null;function fe(){ue++,r.monitorRunDependencies&&r.monitorRunDependencies(ue)}function _e(){if(ue--,r.monitorRunDependencies&&r.monitorRunDependencies(ue),0==ue&&(null!==ce&&(clearInterval(ce),ce=null),se)){var e=se;se=null,e()}}function le(e){return String.prototype.startsWith?e.startsWith("data:application/octet-stream;base64,"):0===e.indexOf("data:application/octet-stream;base64,")}r.preloadedImages={},r.preloadedAudios={},function(){function e(){try{if(r.wasmBinary)return new Uint8Array(r.wasmBinary);if(r.readBinary)return r.readBinary(i);throw"both async and sync fetching of the wasm failed"}catch(e){br(e)}}function t(){return r.wasmBinary||"function"!=typeof fetch?new Promise((function(t){t(e())})):fetch(i,{credentials:"same-origin"}).then((function(e){if(!e.ok)throw"failed to load wasm binary file at \'"+i+"\'";return e.arrayBuffer()})).catch((function(){return e()}))}function n(e){function n(e){if((f=e.exports).memory){e=f.memory;var t=r.buffer;e.byteLength<t.byteLength&&s("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here"),t=new Int8Array(t),new Int8Array(e).set(t),r.buffer=k=e,W()}r.asm=f,r.usingWasm=!0,_e()}function a(e){n(e.instance)}function o(e){t().then((function(e){return WebAssembly.instantiate(e,c)})).then(e,(function(e){s("failed to asynchronously prepare wasm: "+e),br(e)}))}if("object"!=typeof WebAssembly)return s("no native wasm support detected"),!1;if(!(r.wasmMemory instanceof WebAssembly.Memory))return s("no native wasm Memory in use"),!1;if(e.memory=r.wasmMemory,c.global={NaN:NaN,Infinity:1/0},c["global.Math"]=Math,c.env=e,fe(),r.instantiateWasm)try{return r.instantiateWasm(c,n)}catch(e){return s("Module.instantiateWasm callback failed with error: "+e),!1}return r.wasmBinary||"function"!=typeof WebAssembly.instantiateStreaming||le(i)||"function"!=typeof fetch?o(a):WebAssembly.instantiateStreaming(fetch(i,{credentials:"same-origin"}),c).then(a,(function(e){s("wasm streaming compile failed: "+e),s("falling back to ArrayBuffer instantiation"),o(a)})),{}}var a="zcv.wast",i="zcv.wasm",o="zcv.temp.asm.js";le(a)||(a=u(a)),le(i)||(i=u(i)),le(o)||(o=u(o));var c={global:null,env:null,asm2wasm:d,parent:r},f=null;r.asmPreload=r.asm;var _=r.reallocBuffer;r.reallocBuffer=function(e){if("asmjs"===l)var t=_(e);else e:{e=U(e,r.usingWasm?65536:16777216);var n=r.buffer.byteLength;if(r.usingWasm)try{t=-1!==r.wasmMemory.grow((e-n)/65536)?r.buffer=r.wasmMemory.buffer:null;break e}catch(e){t=null;break e}t=void 0}return t};var l="";r.asm=function(e,t){if(!t.table){void 0===(e=r.wasmTableSize)&&(e=1024);var a=r.wasmMaxTableSize;t.table="object"==typeof WebAssembly&&"function"==typeof WebAssembly.Table?void 0!==a?new WebAssembly.Table({initial:e,maximum:a,element:"anyfunc"}):new WebAssembly.Table({initial:e,element:"anyfunc"}):Array(e),r.wasmTable=t.table}return t.__memory_base||(t.__memory_base=r.STATIC_BASE),t.__table_base||(t.__table_base=0),y(t=n(t),"no binaryen method succeeded."),t}}();var pe=[function(){if(self.crypto&&self.crypto.getRandomValues){var e=new Uint32Array(1);return self.crypto.getRandomValues(e),e[0]}return 9007199254740991*Math.random()}];S=408336,J.push({g:function(){qn()}},{g:function(){Wn()}},{g:function(){ar()}},{g:function(){cr()}},{g:function(){or()}},{g:function(){nr()}},{g:function(){Yn()}},{g:function(){Xn()}},{g:function(){Zn()}},{g:function(){Un()}},{g:function(){Hn()}},{g:function(){ir()}},{g:function(){Kn()}},{g:function(){Gn()}},{g:function(){Jn()}},{g:function(){Nn()}},{g:function(){$n()}},{g:function(){Qn()}},{g:function(){er()}},{g:function(){tr()}},{g:function(){rr()}}),r.STATIC_BASE=1024,r.STATIC_BUMP=407312;var de=S;S+=16;var he={};function me(){br()}function be(){return"undefined"!=typeof dateNow||self.performance&&self.performance.now}var ye={I:1,u:2,Ec:3,Ab:4,K:5,ha:6,Ta:7,Yb:8,B:9,hb:10,da:11,Oc:11,ua:12,U:13,tb:14,kc:15,ea:16,fa:17,Pc:18,W:19,X:20,L:21,i:22,Tb:23,ta:24,D:25,Lc:26,ub:27,fc:28,M:29,Bc:30,Mb:31,uc:32,qb:33,yc:34,bc:42,xb:43,ib:44,Db:45,Eb:46,Fb:47,Lb:48,Mc:49,Wb:50,Cb:51,nb:35,Zb:37,Za:52,bb:53,Qc:54,Ub:55,cb:56,eb:57,ob:35,fb:59,ic:60,Xb:61,Ic:62,hc:63,cc:64,dc:65,Ac:66,$b:67,Wa:68,Fc:69,jb:70,vc:71,Ob:72,rb:73,ab:74,pc:76,$a:77,zc:78,Gb:79,Hb:80,Kb:81,Jb:82,Ib:83,jc:38,ga:39,Pb:36,V:40,qc:95,tc:96,mb:104,Vb:105,Xa:97,xc:91,nc:88,ec:92,Cc:108,lb:111,Ua:98,kb:103,Sb:101,Qb:100,Jc:110,vb:112,wb:113,zb:115,Ya:114,pb:89,Nb:90,wc:93,Dc:94,Va:99,Rb:102,Bb:106,lc:107,Kc:109,Nc:87,sb:122,Gc:116,oc:95,ac:123,yb:84,rc:75,gb:125,mc:131,sc:130,Hc:86};function ve(e){return r.___errno_location&&(E[r.___errno_location()>>2]=e),e}function ge(e,t){if(0===e)e=Date.now();else{if(1!==e||!be())return ve(ye.i),-1;e=me()}return E[t>>2]=e/1e3|0,E[t+4>>2]=e%1e3*1e6|0,0}var we=0,Me=[],ke={},Ae={0:"Success",1:"Not super-user",2:"No such file or directory",3:"No such process",4:"Interrupted system call",5:"I/O error",6:"No such device or address",7:"Arg list too long",8:"Exec format error",9:"Bad file number",10:"No children",11:"No more processes",12:"Not enough core",13:"Permission denied",14:"Bad address",15:"Block device required",16:"Mount device busy",17:"File exists",18:"Cross-device link",19:"No such device",20:"Not a directory",21:"Is a directory",22:"Invalid argument",23:"Too many open files in system",24:"Too many open files",25:"Not a typewriter",26:"Text file busy",27:"File too large",28:"No space left on device",29:"Illegal seek",30:"Read only file system",31:"Too many links",32:"Broken pipe",33:"Math arg out of domain of func",34:"Math result not representable",35:"File locking deadlock error",36:"File or path name too long",37:"No record locks available",38:"Function not implemented",39:"Directory not empty",40:"Too many symbolic links",42:"No message of desired type",43:"Identifier removed",44:"Channel number out of range",45:"Level 2 not synchronized",46:"Level 3 halted",47:"Level 3 reset",48:"Link number out of range",49:"Protocol driver not attached",50:"No CSI structure available",51:"Level 2 halted",52:"Invalid exchange",53:"Invalid request descriptor",54:"Exchange full",55:"No anode",56:"Invalid request code",57:"Invalid slot",59:"Bad font file fmt",60:"Device not a stream",61:"No data (for no delay io)",62:"Timer expired",63:"Out of streams resources",64:"Machine is not on the network",65:"Package not installed",66:"The object is remote",67:"The link has been severed",68:"Advertise error",69:"Srmount error",70:"Communication error on send",71:"Protocol error",72:"Multihop attempted",73:"Cross mount point (not really error)",74:"Trying to read unreadable message",75:"Value too large for defined data type",76:"Given log. name not unique",77:"f.d. invalid for this operation",78:"Remote address changed",79:"Can   access a needed shared lib",80:"Accessing a corrupted shared lib",81:".lib section in a.out corrupted",82:"Attempting to link in too many libs",83:"Attempting to exec a shared library",84:"Illegal byte sequence",86:"Streams pipe error",87:"Too many users",88:"Socket operation on non-socket",89:"Destination address required",90:"Message too long",91:"Protocol wrong type for socket",92:"Protocol not available",93:"Unknown protocol",94:"Socket type not supported",95:"Not supported",96:"Protocol family not supported",97:"Address family not supported by protocol family",98:"Address already in use",99:"Address not available",100:"Network interface is not configured",101:"Network is unreachable",102:"Connection reset by network",103:"Connection aborted",104:"Connection reset by peer",105:"No buffer space available",106:"Socket is already connected",107:"Socket is not connected",108:"Can\'t send after socket shutdown",109:"Too many references",110:"Connection timed out",111:"Connection refused",112:"Host is down",113:"Host is unreachable",114:"Socket already connected",115:"Connection already in progress",116:"Stale file handle",122:"Quota exceeded",123:"No medium (in tape drive)",125:"Operation canceled",130:"Previous owner died",131:"State not recoverable"};function xe(e,t){for(var n=0,r=e.length-1;0<=r;r--){var a=e[r];"."===a?e.splice(r,1):".."===a?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n;n--)e.unshift("..");return e}function ze(e){var t="/"===e.charAt(0),n="/"===e.substr(-1);return(e=xe(e.split("/").filter((function(e){return!!e})),!t).join("/"))||t||(e="."),e&&n&&(e+="/"),(t?"/":"")+e}function Le(e){var t=/^(\\/?|)([\\s\\S]*?)((?:\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))(?:[\\/]*)$/.exec(e).slice(1);return e=t[0],t=t[1],e||t?(t&&(t=t.substr(0,t.length-1)),e+t):"."}function Ee(e){if("/"===e)return"/";var t=e.lastIndexOf("/");return-1===t?e:e.substr(t+1)}function Te(){for(var e="",t=!1,n=arguments.length-1;-1<=n&&!t;n--){if("string"!=typeof(t=0<=n?arguments[n]:"/"))throw new TypeError("Arguments to path.resolve must be strings");if(!t)return"";e=t+"/"+e,t="/"===t.charAt(0)}return(t?"/":"")+(e=xe(e.split("/").filter((function(e){return!!e})),!t).join("/"))||"."}var Oe=[];function Ce(e,t){Oe[e]={input:[],output:[],G:t},rt(e,Se)}var Se={open:function(e){var t=Oe[e.node.rdev];if(!t)throw new Ne(ye.W);e.tty=t,e.seekable=!1},close:function(e){e.tty.G.flush(e.tty)},flush:function(e){e.tty.G.flush(e.tty)},read:function(e,t,n,r){if(!e.tty||!e.tty.G.oa)throw new Ne(ye.ha);for(var a=0,i=0;i<r;i++){try{var o=e.tty.G.oa(e.tty)}catch(e){throw new Ne(ye.K)}if(void 0===o&&0===a)throw new Ne(ye.da);if(null==o)break;a++,t[n+i]=o}return a&&(e.node.timestamp=Date.now()),a},write:function(e,t,n,r){if(!e.tty||!e.tty.G.aa)throw new Ne(ye.ha);var a=0;try{if(0===n&&0===r)e.tty.G.flush(e.tty);else for(;a<r;)e.tty.G.aa(e.tty,t[n+a]),a++}catch(e){throw new Ne(ye.K)}return r&&(e.node.timestamp=Date.now()),a}},Ie={oa:function(e){if(!e.input.length){var t=null;if("undefined"!=typeof window&&"function"==typeof window.prompt?null!==(t=window.prompt("Input: "))&&(t+="\\n"):"function"==typeof readline&&null!==(t=readline())&&(t+="\\n"),!t)return null;e.input=Rn(t,!0)}return e.input.shift()},aa:function(e,t){null===t||10===t?(c(V(e.output,0)),e.output=[]):0!=t&&e.output.push(t)},flush:function(e){e.output&&0<e.output.length&&(c(V(e.output,0)),e.output=[])}},Be={aa:function(e,t){null===t||10===t?(s(V(e.output,0)),e.output=[]):0!=t&&e.output.push(t)},flush:function(e){e.output&&0<e.output.length&&(s(V(e.output,0)),e.output=[])}},Pe={o:null,A:function(){return Pe.createNode(null,"/",16895,0)},createNode:function(e,t,n,r){if(24576==(61440&n)||4096==(61440&n))throw new Ne(ye.I);return Pe.o||(Pe.o={dir:{node:{m:Pe.c.m,s:Pe.c.s,lookup:Pe.c.lookup,O:Pe.c.O,rename:Pe.c.rename,unlink:Pe.c.unlink,rmdir:Pe.c.rmdir,readdir:Pe.c.readdir,symlink:Pe.c.symlink},stream:{F:Pe.f.F}},file:{node:{m:Pe.c.m,s:Pe.c.s},stream:{F:Pe.f.F,read:Pe.f.read,write:Pe.f.write,ja:Pe.f.ja,pa:Pe.f.pa,R:Pe.f.R}},link:{node:{m:Pe.c.m,s:Pe.c.s,readlink:Pe.c.readlink},stream:{}},la:{node:{m:Pe.c.m,s:Pe.c.s},stream:nt}}),16384==(61440&(n=Xe(e,t,n,r)).mode)?(n.c=Pe.o.dir.node,n.f=Pe.o.dir.stream,n.b={}):32768==(61440&n.mode)?(n.c=Pe.o.file.node,n.f=Pe.o.file.stream,n.h=0,n.b=null):40960==(61440&n.mode)?(n.c=Pe.o.link.node,n.f=Pe.o.link.stream):8192==(61440&n.mode)&&(n.c=Pe.o.la.node,n.f=Pe.o.la.stream),n.timestamp=Date.now(),e&&(e.b[t]=n),n},Ba:function(e){if(e.b&&e.b.subarray){for(var t=[],n=0;n<e.h;++n)t.push(e.b[n]);return t}return e.b},Wc:function(e){return e.b?e.b.subarray?e.b.subarray(0,e.h):new Uint8Array(e.b):new Uint8Array},ma:function(e,t){if(e.b&&e.b.subarray&&t>e.b.length&&(e.b=Pe.Ba(e),e.h=e.b.length),!e.b||e.b.subarray){var n=e.b?e.b.length:0;n>=t||(t=Math.max(t,n*(1048576>n?2:1.125)|0),0!=n&&(t=Math.max(t,256)),n=e.b,e.b=new Uint8Array(t),0<e.h&&e.b.set(n.subarray(0,e.h),0))}else for(!e.b&&0<t&&(e.b=[]);e.b.length<t;)e.b.push(0)},Ka:function(e,t){if(e.h!=t)if(0==t)e.b=null,e.h=0;else{if(!e.b||e.b.subarray){var n=e.b;e.b=new Uint8Array(new ArrayBuffer(t)),n&&e.b.set(n.subarray(0,Math.min(t,e.h)))}else if(e.b||(e.b=[]),e.b.length>t)e.b.length=t;else for(;e.b.length<t;)e.b.push(0);e.h=t}},c:{m:function(e){var t={};return t.dev=8192==(61440&e.mode)?e.id:1,t.ino=e.id,t.mode=e.mode,t.nlink=1,t.uid=0,t.gid=0,t.rdev=e.rdev,16384==(61440&e.mode)?t.size=4096:32768==(61440&e.mode)?t.size=e.h:40960==(61440&e.mode)?t.size=e.link.length:t.size=0,t.atime=new Date(e.timestamp),t.mtime=new Date(e.timestamp),t.ctime=new Date(e.timestamp),t.za=4096,t.blocks=Math.ceil(t.size/t.za),t},s:function(e,t){void 0!==t.mode&&(e.mode=t.mode),void 0!==t.timestamp&&(e.timestamp=t.timestamp),void 0!==t.size&&Pe.Ka(e,t.size)},lookup:function(){throw Ue[ye.u]},O:function(e,t,n,r){return Pe.createNode(e,t,n,r)},rename:function(e,t,n){if(16384==(61440&e.mode)){try{var r=Ze(t,n)}catch(e){}if(r)for(var a in r.b)throw new Ne(ye.ga)}delete e.parent.b[e.name],e.name=n,t.b[n]=e,e.parent=t},unlink:function(e,t){delete e.b[t]},rmdir:function(e,t){var n,r=Ze(e,t);for(n in r.b)throw new Ne(ye.ga);delete e.b[t]},readdir:function(e){var t,n=[".",".."];for(t in e.b)e.b.hasOwnProperty(t)&&n.push(t);return n},symlink:function(e,t,n){return(e=Pe.createNode(e,t,41471,0)).link=n,e},readlink:function(e){if(40960!=(61440&e.mode))throw new Ne(ye.i);return e.link}},f:{read:function(e,t,n,r,a){var i=e.node.b;if(a>=e.node.h)return 0;if(y(0<=(e=Math.min(e.node.h-a,r))),8<e&&i.subarray)t.set(i.subarray(a,a+e),n);else for(r=0;r<e;r++)t[n+r]=i[a+r];return e},write:function(e,t,n,r,a,i){if(i=!1,!r)return 0;if((e=e.node).timestamp=Date.now(),t.subarray&&(!e.b||e.b.subarray)){if(i)return e.b=t.subarray(n,n+r),e.h=r;if(0===e.h&&0===a)return e.b=new Uint8Array(t.subarray(n,n+r)),e.h=r;if(a+r<=e.h)return e.b.set(t.subarray(n,n+r),a),r}if(Pe.ma(e,a+r),e.b.subarray&&t.subarray)e.b.set(t.subarray(n,n+r),a);else for(i=0;i<r;i++)e.b[a+i]=t[n+i];return e.h=Math.max(e.h,a+r),r},F:function(e,t,n){if(1===n?t+=e.position:2===n&&32768==(61440&e.node.mode)&&(t+=e.node.h),0>t)throw new Ne(ye.i);return t},ja:function(e,t,n){Pe.ma(e.node,t+n),e.node.h=Math.max(e.node.h,t+n)},pa:function(e,t,n,r,a,i,o){if(32768!=(61440&e.node.mode))throw new Ne(ye.W);if(n=e.node.b,2&o||n.buffer!==t&&n.buffer!==t.buffer){if((0<a||a+r<e.node.h)&&(n=n.subarray?n.subarray(a,a+r):Array.prototype.slice.call(n,a,a+r)),e=!0,!(r=_r(r)))throw new Ne(ye.ua);t.set(n,r)}else e=!1,r=n.byteOffset;return{Ha:r,va:e}},R:function(e,t,n,r,a){if(32768!=(61440&e.node.mode))throw new Ne(ye.W);return 2&a||Pe.f.write(e,t,0,r,n,!1),0}}};S+=16,S+=16,S+=16;var Fe=null,De={},je=[],Re=1,Ve=null,qe=!0,Ge={},Ne=null,Ue={};function We(e,t){if(t=t||{},!(e=Te("/",e)))return{path:"",node:null};var n,r={na:!0,ba:0};for(n in r)void 0===t[n]&&(t[n]=r[n]);if(8<t.ba)throw new Ne(ye.V);e=xe(e.split("/").filter((function(e){return!!e})),!1);var a=Fe;for(r="/",n=0;n<e.length;n++){var i=n===e.length-1;if(i&&t.parent)break;if(a=Ze(a,e[n]),r=ze(r+"/"+e[n]),a.P&&(!i||i&&t.na)&&(a=a.P.root),!i||t.Z)for(i=0;40960==(61440&a.mode);)if(a=st(r),a=We(r=Te(Le(r),a),{ba:t.ba}).node,40<i++)throw new Ne(ye.V)}return{path:r,node:a}}function He(e){for(var t;;){if(e===e.parent)return e=e.A.qa,t?"/"!==e[e.length-1]?e+"/"+t:e+t:e;t=t?e.name+"/"+t:e.name,e=e.parent}}function Ye(e,t){for(var n=0,r=0;r<t.length;r++)n=(n<<5)-n+t.charCodeAt(r)|0;return(e+n>>>0)%Ve.length}function Ze(e,t){var n;if(n=(n=Qe(e,"x"))?n:e.c.lookup?0:ye.U)throw new Ne(n,e);for(n=Ve[Ye(e.id,t)];n;n=n.Ga){var r=n.name;if(n.parent.id===e.id&&r===t)return n}return e.c.lookup(e,t)}function Xe(e,t,n,r){return mt||((mt=function(e,t,n,r){e||(e=this),this.parent=e,this.A=e.A,this.P=null,this.id=Re++,this.name=t,this.mode=n,this.c={},this.f={},this.rdev=r}).prototype={},Object.defineProperties(mt.prototype,{read:{get:function(){return 365==(365&this.mode)},set:function(e){e?this.mode|=365:this.mode&=-366}},write:{get:function(){return 146==(146&this.mode)},set:function(e){e?this.mode|=146:this.mode&=-147}}})),function(e){var t=Ye(e.parent.id,e.name);e.Ga=Ve[t],Ve[t]=e}(e=new mt(e,t,n,r)),e}var Ke={r:0,rs:1052672,"r+":2,w:577,wx:705,xw:705,"w+":578,"wx+":706,"xw+":706,a:1089,ax:1217,xa:1217,"a+":1090,"ax+":1218,"xa+":1218};function Je(e){var t=["r","w","rw"][3&e];return 512&e&&(t+="w"),t}function Qe(e,t){return qe||(-1===t.indexOf("r")||292&e.mode)&&(-1===t.indexOf("w")||146&e.mode)&&(-1===t.indexOf("x")||73&e.mode)?0:ye.U}function $e(e,t){try{return Ze(e,t),ye.fa}catch(e){}return Qe(e,"wx")}function et(e,t){bt||((bt=function(){}).prototype={},Object.defineProperties(bt.prototype,{object:{get:function(){return this.node},set:function(e){this.node=e}}}));var n,r=new bt;for(n in e)r[n]=e[n];return e=r,t=function(e){for(e=e||0;e<=4096;e++)if(!je[e])return e;throw new Ne(ye.ta)}(t),e.fd=t,je[t]=e}var tt,nt={open:function(e){e.f=De[e.node.rdev].f,e.f.open&&e.f.open(e)},F:function(){throw new Ne(ye.M)}};function rt(e,t){De[e]={f:t}}function at(e,t){var n="/"===t,r=!t;if(n&&Fe)throw new Ne(ye.ea);if(!n&&!r){var a=We(t,{na:!1});if(t=a.path,(a=a.node).P)throw new Ne(ye.ea);if(16384!=(61440&a.mode))throw new Ne(ye.X)}t={type:e,$c:{},qa:t,Fa:[]},(e=e.A(t)).A=t,t.root=e,n?Fe=e:a&&(a.P=t,a.A&&a.A.Fa.push(t))}function it(e,t,n){var r=We(e,{parent:!0}).node;if(!(e=Ee(e))||"."===e||".."===e)throw new Ne(ye.i);var a=$e(r,e);if(a)throw new Ne(a);if(!r.c.O)throw new Ne(ye.I);return r.c.O(r,e,t,n)}function ot(e){it(e,16895,0)}function ut(e,t,n){void 0===n&&(n=t,t=438),it(e,8192|t,n)}function ct(e,t){if(!Te(e))throw new Ne(ye.u);var n=We(t,{parent:!0}).node;if(!n)throw new Ne(ye.u);var r=$e(n,t=Ee(t));if(r)throw new Ne(r);if(!n.c.symlink)throw new Ne(ye.I);n.c.symlink(n,t,e)}function st(e){if(!(e=We(e).node))throw new Ne(ye.u);if(!e.c.readlink)throw new Ne(ye.i);return Te(He(e.parent),e.c.readlink(e))}function ft(e,t,n,a){if(""===e)throw new Ne(ye.u);if("string"==typeof t){var i=Ke[t];if(void 0===i)throw Error("Unknown file open mode: "+t);t=i}if(n=64&t?4095&(void 0===n?438:n)|32768:0,"object"==typeof e)var o=e;else{e=ze(e);try{o=We(e,{Z:!(131072&t)}).node}catch(e){}}if(i=!1,64&t)if(o){if(128&t)throw new Ne(ye.fa)}else o=it(e,n,0),i=!0;if(!o)throw new Ne(ye.u);if(8192==(61440&o.mode)&&(t&=-513),65536&t&&16384!=(61440&o.mode))throw new Ne(ye.X);if(!i&&(n=o?40960==(61440&o.mode)?ye.V:16384==(61440&o.mode)&&("r"!==Je(t)||512&t)?ye.L:Qe(o,Je(t)):ye.u))throw new Ne(n);if(512&t){var u;if(!(u="string"==typeof(n=o)?We(n,{Z:!0}).node:n).c.s)throw new Ne(ye.I);if(16384==(61440&u.mode))throw new Ne(ye.L);if(32768!=(61440&u.mode))throw new Ne(ye.i);if(n=Qe(u,"w"))throw new Ne(n);u.c.s(u,{size:0,timestamp:Date.now()})}t&=-641,(a=et({node:o,path:He(o),flags:t,seekable:!0,position:0,f:o.f,Ra:[],error:!1},a)).f.open&&a.f.open(a),!r.logReadFiles||1&t||(yt||(yt={}),e in yt||(yt[e]=1,console.log("FS.trackingDelegate error on read file: "+e)));try{Ge.onOpenFile&&(o=0,1!=(2097155&t)&&(o|=1),0!=(2097155&t)&&(o|=2),Ge.onOpenFile(e,o))}catch(t){console.log("FS.trackingDelegate[\'onOpenFile\'](\'"+e+"\', flags) threw an exception: "+t.message)}return a}function _t(e){if(null===e.fd)throw new Ne(ye.B);e.$&&(e.$=null);try{e.f.close&&e.f.close(e)}catch(e){throw e}finally{je[e.fd]=null}e.fd=null}function lt(e,t,n){if(null===e.fd)throw new Ne(ye.B);if(!e.seekable||!e.f.F)throw new Ne(ye.M);e.position=e.f.F(e,t,n),e.Ra=[]}function pt(){Ne||((Ne=function(e,t){this.node=t,this.Ma=function(e){for(var t in this.v=e,ye)if(ye[t]===e){this.code=t;break}},this.Ma(e),this.message=Ae[e],this.stack&&Object.defineProperty(this,"stack",{value:Error().stack,writable:!0})}).prototype=Error(),Ne.prototype.constructor=Ne,[ye.u].forEach((function(e){Ue[e]=new Ne(e),Ue[e].stack="<generic error, no stack>"})))}function dt(e,t,n){e=ze("/dev/"+e);var r=function(e,t){var n=0;return e&&(n|=365),t&&(n|=146),n}(!!t,!!n);ht||(ht=64);var a=ht++<<8|0;rt(a,{open:function(e){e.seekable=!1},close:function(){n&&n.buffer&&n.buffer.length&&n(10)},read:function(e,n,r,a){for(var i=0,o=0;o<a;o++){try{var u=t()}catch(e){throw new Ne(ye.K)}if(void 0===u&&0===i)throw new Ne(ye.da);if(null==u)break;i++,n[r+o]=u}return i&&(e.node.timestamp=Date.now()),i},write:function(e,t,r,a){for(var i=0;i<a;i++)try{n(t[r+i])}catch(e){throw new Ne(ye.K)}return a&&(e.node.timestamp=Date.now()),i}}),ut(e,r,a)}var ht,mt,bt,yt,vt={},gt={},wt=0;function Mt(){return E[(wt+=4)-4>>2]}function kt(){var e=je[Mt()];if(!e)throw new Ne(ye.B);return e}function At(t,n){if(Bt=t,Pt=n,!St)return 1;if(0==t)Tt=function(){var e=0|Math.max(0,zt+n-me());setTimeout(Lt,e)},Ot="timeout";else if(1==t)Tt=function(){Jt(Lt)},Ot="rAF";else if(2==t){if(void 0===e){var a=[];addEventListener("message",(function(e){"setimmediate"!==e.data&&"setimmediate"!==e.data.target||(e.stopPropagation(),a.shift()())}),!0),e=function(e){a.push(e),void 0===r.setImmediates&&(r.setImmediates=[]),r.setImmediates.push(e),postMessage({target:"setimmediate"})}}Tt=function(){e(Lt)},Ot="immediate"}return 0}function xt(e,t,n,a,i){r.noExitRuntime=!0,y(!St,"emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."),St=e,It=a;var o=void 0!==a?function(){r.dynCall_vi(e,a)}:function(){r.dynCall_v(e)},u=Ct;if(Lt=function(){if(!b)if(0<Dt.length){var e=Date.now(),t=Dt.shift();if(t.g(t.N),Et){var n=Et,a=0==n%1?n-1:Math.floor(n);Et=t.Sc?a:(8*n+(a+.5))/9}console.log(\'main loop blocker "\'+t.name+\'" took \'+(Date.now()-e)+" ms"),r.setStatus&&(e=r.statusMessage||"Please wait...",t=Et,n=jt.Vc,t?t<n?r.setStatus(e+" ("+(n-t)+"/"+n+")"):r.setStatus(e):r.setStatus("")),u<Ct||setTimeout(Lt,0)}else if(!(u<Ct))if(Ft=Ft+1|0,1==Bt&&1<Pt&&0!=Ft%Pt)Tt();else{if(0==Bt&&(zt=me()),"timeout"===Ot&&r.J&&(s("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"),Ot=""),!(b||r.preMainLoop&&!1===r.preMainLoop())){try{o()}catch(e){throw e&&"object"==typeof e&&e.stack&&s("exception thrown: "+[e,e.stack]),e}r.postMainLoop&&r.postMainLoop()}u<Ct||("object"==typeof SDL&&SDL.audio&&SDL.audio.Ia&&SDL.audio.Ia(),Tt())}},i||(t&&0<t?At(0,1e3/t):At(1,1),Tt()),n)throw"SimulateInfiniteLoop"}var zt,Lt,Et,Tt=null,Ot="",Ct=0,St=null,It=0,Bt=0,Pt=0,Ft=0,Dt=[],jt={},Rt=!1,Vt=!1,qt=[];function Gt(){function e(){Vt=document.pointerLockElement===r.canvas||document.mozPointerLockElement===r.canvas||document.webkitPointerLockElement===r.canvas||document.msPointerLockElement===r.canvas}if(r.preloadPlugins||(r.preloadPlugins=[]),!rn){rn=!0;try{an=!0}catch(e){an=!1,console.log("warning: no blob constructor, cannot create blobs with mimetypes")}on="undefined"!=typeof MozBlobBuilder?MozBlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:an?null:console.log("warning: no BlobBuilder"),un="undefined"!=typeof window?window.URL?window.URL:window.webkitURL:void 0,r.ra||void 0!==un||(console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."),r.ra=!0),r.preloadPlugins.push({canHandle:function(e){return!r.ra&&/\\.(jpg|jpeg|png|bmp)$/i.test(e)},handle:function(e,t,n,a){var i=null;if(an)try{(i=new Blob([e],{type:$t(t)})).size!==e.length&&(i=new Blob([new Uint8Array(e).buffer],{type:$t(t)}))}catch(e){!function(e){p||(p={}),p[e]||(p[e]=1,s(e))}("Blob constructor present but fails: "+e+"; falling back to blob builder")}i||((i=new on).append(new Uint8Array(e).buffer),i=i.getBlob());var o=un.createObjectURL(i),u=new Image;u.onload=function(){y(u.complete,"Image "+t+" could not be decoded");var a=document.createElement("canvas");a.width=u.width,a.height=u.height,a.getContext("2d").drawImage(u,0,0),r.preloadedImages[t]=a,un.revokeObjectURL(o),n&&n(e)},u.onerror=function(){console.log("Image "+o+" could not be decoded"),a&&a()},u.src=o}}),r.preloadPlugins.push({canHandle:function(e){return!r.Zc&&e.substr(-4)in{".ogg":1,".wav":1,".mp3":1}},handle:function(e,t,n,a){function i(a){u||(u=!0,r.preloadedAudios[t]=a,n&&n(e))}function o(){u||(u=!0,r.preloadedAudios[t]=new Audio,a&&a())}var u=!1;if(!an)return o();try{var c=new Blob([e],{type:$t(t)})}catch(e){return o()}c=un.createObjectURL(c);var s=new Audio;s.addEventListener("canplaythrough",(function(){i(s)}),!1),s.onerror=function(){if(!u){console.log("warning: browser could not fully decode audio "+t+", trying slower base64 approach");for(var n="",r=0,a=0,o=0;o<e.length;o++)for(r=r<<8|e[o],a+=8;6<=a;){var c=r>>a-6&63;a-=6,n+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[c]}2==a?(n+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(3&r)<<4],n+="=="):4==a&&(n+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(15&r)<<2],n+="="),s.src="data:audio/x-"+t.substr(-3)+";base64,"+n,i(s)}},s.src=c,Qt((function(){i(s)}),1e4)}});var t=r.canvas;t&&(t.requestPointerLock=t.requestPointerLock||t.mozRequestPointerLock||t.webkitRequestPointerLock||t.msRequestPointerLock||function(){},t.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock||document.msExitPointerLock||function(){},t.exitPointerLock=t.exitPointerLock.bind(document),document.addEventListener("pointerlockchange",e,!1),document.addEventListener("mozpointerlockchange",e,!1),document.addEventListener("webkitpointerlockchange",e,!1),document.addEventListener("mspointerlockchange",e,!1),r.elementPointerLock&&t.addEventListener("click",(function(e){!Vt&&r.canvas.requestPointerLock&&(r.canvas.requestPointerLock(),e.preventDefault())}),!1))}}function Nt(e,t,n,a){if(t&&r.J&&e==r.canvas)return r.J;if(t){var i={antialias:!1,alpha:!1};if(a)for(var o in a)i[o]=a[o];if(i=function(e,t){function n(){}void 0===t.majorVersion&&void 0===t.minorVersion&&(t.majorVersion=1,t.minorVersion=0);try{e.addEventListener("webglcontextcreationerror",n,!1);try{if(1==t.majorVersion&&0==t.minorVersion)var r=e.getContext("webgl",t)||e.getContext("experimental-webgl",t);else{if(2!=t.majorVersion||0!=t.minorVersion)throw"Unsupported WebGL context version "+majorVersion+"."+minorVersion+"!";r=e.getContext("webgl2",t)}}finally{e.removeEventListener("webglcontextcreationerror",n,!1)}if(!r)throw":("}catch(e){return 0}return r?function(e,t){var n=An(wn),r={handle:n,attributes:t,version:t.majorVersion,GLctx:e};return e.canvas&&(e.canvas.Rc=r),wn[n]=r,(void 0===t.enableExtensionsByDefault||t.enableExtensionsByDefault)&&function(e){if(e||(e=Mn),!e.Da){e.Da=!0;var t=e.GLctx;if(2>e.version){var n=t.getExtension("ANGLE_instanced_arrays");n&&(t.vertexAttribDivisor=function(e,t){n.vertexAttribDivisorANGLE(e,t)},t.drawArraysInstanced=function(e,t,r,a){n.drawArraysInstancedANGLE(e,t,r,a)},t.drawElementsInstanced=function(e,t,r,a,i){n.drawElementsInstancedANGLE(e,t,r,a,i)});var r=t.getExtension("OES_vertex_array_object");r&&(t.createVertexArray=function(){return r.createVertexArrayOES()},t.deleteVertexArray=function(e){r.deleteVertexArrayOES(e)},t.bindVertexArray=function(e){r.bindVertexArrayOES(e)},t.isVertexArray=function(e){return r.isVertexArrayOES(e)});var a=t.getExtension("WEBGL_draw_buffers");a&&(t.drawBuffers=function(e,t){a.drawBuffersWEBGL(e,t)})}t.Uc=t.getExtension("EXT_disjoint_timer_query");var i="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");(e=t.getSupportedExtensions())&&0<e.length&&t.getSupportedExtensions().forEach((function(e){-1!=i.indexOf(e)&&t.getExtension(e)}))}}(r),n}(r,t):0}(e,i))var u=wn[i].GLctx}else u=e.getContext("2d");return u?(n&&(t||y(void 0===Dn,"cannot set in module if GLctx is used, but we are a non-GL context that would replace it"),r.J=u,t&&function(e){e?(e=wn[e])&&(Dn=r.J=e.GLctx,Mn=e):Dn=r.J=Mn=null}(i),r.bd=t,qt.forEach((function(e){e()})),Gt()),u):null}var Ut=!1,Wt=void 0,Ht=void 0;function Yt(e,t,n){function a(){Rt=!1;var e=i.parentNode;(document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===e?(i.exitFullscreen=document.exitFullscreen||document.cancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.webkitCancelFullScreen||function(){},i.exitFullscreen=i.exitFullscreen.bind(document),Wt&&i.requestPointerLock(),Rt=!0,Ht?("undefined"!=typeof SDL&&(E[SDL.screen>>2]=8388608|T[SDL.screen>>2]),nn(r.canvas),tn()):nn(i)):(e.parentNode.insertBefore(i,e),e.parentNode.removeChild(e),Ht?("undefined"!=typeof SDL&&(E[SDL.screen>>2]=-8388609&T[SDL.screen>>2]),nn(r.canvas),tn()):nn(i)),r.onFullScreen&&r.onFullScreen(Rt),r.onFullscreen&&r.onFullscreen(Rt)}void 0===(Wt=e)&&(Wt=!0),void 0===(Ht=t)&&(Ht=!1);var i=r.canvas;Ut||(Ut=!0,document.addEventListener("fullscreenchange",a,!1),document.addEventListener("mozfullscreenchange",a,!1),document.addEventListener("webkitfullscreenchange",a,!1),document.addEventListener("MSFullscreenChange",a,!1));var o=document.createElement("div");i.parentNode.insertBefore(o,i),o.appendChild(i),o.requestFullscreen=o.requestFullscreen||o.mozRequestFullScreen||o.msRequestFullscreen||(o.webkitRequestFullscreen?function(){o.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}:null)||(o.webkitRequestFullScreen?function(){o.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)}:null),n?o.requestFullscreen({cd:n}):o.requestFullscreen()}function Zt(e,t,n){return s("Browser.requestFullScreen() is deprecated. Please call Browser.requestFullscreen instead."),Zt=function(e,t,n){return Yt(e,t,n)},Yt(e,t,n)}var Xt=0;function Kt(e){var t=Date.now();if(0===Xt)Xt=t+1e3/60;else for(;t+2>=Xt;)Xt+=1e3/60;setTimeout(e,Math.max(Xt-t,0))}function Jt(e){"undefined"==typeof window?Kt(e):(window.requestAnimationFrame||(window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||Kt),window.requestAnimationFrame(e))}function Qt(e,t){r.noExitRuntime=!0,setTimeout((function(){b||e()}),t)}function $t(e){return{jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",bmp:"image/bmp",ogg:"audio/ogg",wav:"audio/wav",mp3:"audio/mpeg"}[e.substr(e.lastIndexOf(".")+1)]}var en=[];function tn(){var e=r.canvas;en.forEach((function(t){t(e.width,e.height)}))}function nn(e,t,n){t&&n?(e.Sa=t,e.Ca=n):(t=e.Sa,n=e.Ca);var a=t,i=n;if(r.forcedAspectRatio&&0<r.forcedAspectRatio&&(a/i<r.forcedAspectRatio?a=Math.round(i*r.forcedAspectRatio):i=Math.round(a/r.forcedAspectRatio)),(document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===e.parentNode&&"undefined"!=typeof screen){var o=Math.min(screen.width/a,screen.height/i);a=Math.round(a*o),i=Math.round(i*o)}Ht?(e.width!=a&&(e.width=a),e.height!=i&&(e.height=i),void 0!==e.style&&(e.style.removeProperty("width"),e.style.removeProperty("height"))):(e.width!=t&&(e.width=t),e.height!=n&&(e.height=n),void 0!==e.style&&(a!=t||i!=n?(e.style.setProperty("width",a+"px","important"),e.style.setProperty("height",i+"px","important")):(e.style.removeProperty("width"),e.style.removeProperty("height"))))}var rn,an,on,un,cn=[],sn=void 0;function fn(e,t){T[e>>2]=t,T[e+4>>2]=t/4294967296|0}function _n(e,t,n,r){var a=T[e+8>>2];if(a){var i=M(a),o=e+112,u=M(o);u||(u="GET");var c=T[o+48>>2],s=T[o+52>>2],f=!!T[o+56>>2],_=T[o+64>>2],l=T[o+68>>2];a=T[o+72>>2];var p=T[o+76>>2],d=T[o+80>>2];o=T[o+84>>2];var h=!!(1&c),m=!!(2&c);c=!!(64&c),_=_?M(_):void 0,l=l?M(l):void 0;var b=p?M(p):void 0,y=new XMLHttpRequest;if(y.withCredentials=f,y.open(u,i,!c,_,l),c||(y.timeout=s),y.l=i,y.responseType=m?"moz-chunked-arraybuffer":"arraybuffer",p&&y.overrideMimeType(b),a)for(;(u=T[a>>2])&&(i=T[a+4>>2]);)a+=8,u=M(u),i=M(i),y.setRequestHeader(u,i);cn.push(y),T[e+0>>2]=cn.length,a=d&&o?x.slice(d,d+o):null,y.onload=function(r){var a=y.response?y.response.byteLength:0,i=0,o=0;h&&!m&&(i=_r(o=a),x.set(new Uint8Array(y.response),i)),T[e+12>>2]=i,fn(e+16,o),fn(e+24,0),a&&fn(e+32,a),L[e+40>>1]=y.readyState,4===y.readyState&&0===y.status&&(y.status=0<a?200:404),L[e+42>>1]=y.status,y.statusText&&G(y.statusText,x,e+44,64),200==y.status?t&&t(e,y,r):n&&n(e,y,r)},y.onerror=function(t){var r=y.status;4==y.readyState&&0==r&&(r=404),T[e+12>>2]=0,fn(e+16,0),fn(e+24,0),fn(e+32,0),L[e+40>>1]=y.readyState,L[e+42>>1]=r,n&&n(e,y,t)},y.ontimeout=function(t){n&&n(e,y,t)},y.onprogress=function(t){var n=h&&m&&y.response?y.response.byteLength:0,a=0;h&&m&&(a=_r(n),x.set(new Uint8Array(y.response),a)),T[e+12>>2]=a,fn(e+16,n),fn(e+24,t.loaded-n),fn(e+32,t.total),L[e+40>>1]=y.readyState,3<=y.readyState&&0===y.status&&0<t.loaded&&(y.status=200),L[e+42>>1]=y.status,y.statusText&&G(y.statusText,x,e+44,64),r&&r(e,y,t)};try{y.send(a)}catch(t){n&&n(e,y,t)}}else n(e,0,"no url specified!")}function ln(e,t,n,r,a){if(e){var i=T[t+112+60>>2];i||(i=T[t+8>>2]);var o=M(i);try{var u=e.transaction(["FILES"],"readwrite").objectStore("FILES").put(n,o);u.onsuccess=function(){L[t+40>>1]=4,L[t+42>>1]=200,G("OK",x,t+44,64),r(t,0,o)},u.onerror=function(e){L[t+40>>1]=4,L[t+42>>1]=413,G("Payload Too Large",x,t+44,64),a(t,0,e)}}catch(e){a(t,0,e)}}else a(t,0,"IndexedDB not available!")}function pn(e,t,n,r){if(e){var a=T[t+112+60>>2];a||(a=T[t+8>>2]),a=M(a);try{var i=e.transaction(["FILES"],"readonly").objectStore("FILES").get(a);i.onsuccess=function(e){if(e.target.result){var a=(e=e.target.result).byteLength||e.length,i=_r(a);x.set(new Uint8Array(e),i),T[t+12>>2]=i,fn(t+16,a),fn(t+24,0),fn(t+32,a),L[t+40>>1]=4,L[t+42>>1]=200,G("OK",x,t+44,64),n(t,0,e)}else L[t+40>>1]=4,L[t+42>>1]=404,G("Not Found",x,t+44,64),r(t,0,"no data")},i.onerror=function(e){L[t+40>>1]=4,L[t+42>>1]=404,G("Not Found",x,t+44,64),r(t,0,e)}}catch(e){r(t,0,e)}}else r(t,0,"IndexedDB not available!")}function dn(e,t,n,r){if(e){var a=T[t+112+60>>2];a||(a=T[t+8>>2]),a=M(a);try{var i=e.transaction(["FILES"],"readwrite").objectStore("FILES").delete(a);i.onsuccess=function(e){e=e.target.result,T[t+12>>2]=0,fn(t+16,0),fn(t+24,0),fn(t+24,0),L[t+40>>1]=4,L[t+42>>1]=200,G("OK",x,t+44,64),n(t,0,e)},i.onerror=function(e){L[t+40>>1]=4,L[t+42>>1]=404,G("Not Found",x,t+44,64),r(t,0,e)}}catch(e){r(t,0,e)}}else r(t,0,"IndexedDB not available!")}var hn,mn,bn=void 0;for(bn=hn=f(Math.max(12,1)),y(0==(3&hn)),mn=hn+12;bn<mn;bn+=4)E[bn>>2]=0;for(mn=hn+12;bn<mn;)A[bn++>>0]=0;var yn=1,vn=0,gn=[],wn=[],Mn=null,kn=[];function An(e){for(var t=yn++,n=e.length;n<t;n++)e[n]=null;return t}function xn(e,t,n,r){return e*=n,r*=Math.floor((e+r-1)/r),0>=t?0:(t-1)*r+e}function zn(e,t,n,r,a){switch(t){case 6406:case 6409:case 6402:t=1;break;case 6410:t=2;break;case 6407:case 35904:t=3;break;case 6408:case 35906:t=4;break;default:return vn||(vn=1280),null}switch(e){case 5121:t*=1;break;case 5123:case 36193:t*=2;break;case 5125:case 5126:t*=4;break;case 34042:t=4;break;case 33635:case 32819:case 32820:t=2;break;default:return vn||(vn=1280),null}switch(n=xn(n,r,t,4),e){case 5121:return x.subarray(a,a+n);case 5126:return O.subarray(a>>2,a+n>>2);case 5125:case 34042:return T.subarray(a>>2,a+n>>2);case 5123:case 33635:case 32819:case 32820:case 36193:return L.subarray(a>>1,a+n>>1);default:return vn||(vn=1280),null}}function Ln(){return Ln.l||(Ln.l=[]),Ln.l.push(hr()),Ln.l.length-1}var En={},Tn=1;function On(e){return 0==e%4&&(0!=e%100||0==e%400)}function Cn(e,t){for(var n=0,r=0;r<=t;n+=e[r++]);return n}var Sn,In=[31,29,31,30,31,30,31,31,30,31,30,31],Bn=[31,28,31,30,31,30,31,31,30,31,30,31];function Pn(e,t){for(e=new Date(e.getTime());0<t;){var n=e.getMonth(),r=(On(e.getFullYear())?In:Bn)[n];if(!(t>r-e.getDate())){e.setDate(e.getDate()+t);break}t-=r-e.getDate()+1,e.setDate(1),11>n?e.setMonth(n+1):(e.setMonth(0),e.setFullYear(e.getFullYear()+1))}return e}function Fn(e,t,n,r){function a(e,t,n){for(e="number"==typeof e?e.toString():e||"";e.length<t;)e=n[0]+e;return e}function i(e,t){return a(e,t,"0")}function o(e,t){function n(e){return 0>e?-1:0<e?1:0}var r;return 0===(r=n(e.getFullYear()-t.getFullYear()))&&0===(r=n(e.getMonth()-t.getMonth()))&&(r=n(e.getDate()-t.getDate())),r}function u(e){switch(e.getDay()){case 0:return new Date(e.getFullYear()-1,11,29);case 1:return e;case 2:return new Date(e.getFullYear(),0,3);case 3:return new Date(e.getFullYear(),0,2);case 4:return new Date(e.getFullYear(),0,1);case 5:return new Date(e.getFullYear()-1,11,31);case 6:return new Date(e.getFullYear()-1,11,30)}}function c(e){e=Pn(new Date(e.j+1900,0,1),e.T);var t=u(new Date(e.getFullYear()+1,0,4));return 0>=o(u(new Date(e.getFullYear(),0,4)),e)?0>=o(t,e)?e.getFullYear()+1:e.getFullYear():e.getFullYear()-1}var s=E[r+40>>2];for(var f in r={Pa:E[r>>2],Oa:E[r+4>>2],S:E[r+8>>2],H:E[r+12>>2],C:E[r+16>>2],j:E[r+20>>2],sa:E[r+24>>2],T:E[r+28>>2],ad:E[r+32>>2],Na:E[r+36>>2],Qa:s?M(s):""},n=M(n),s={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S"})n=n.replace(new RegExp(f,"g"),s[f]);var _="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),l="January February March April May June July August September October November December".split(" ");for(f in s={"%a":function(e){return _[e.sa].substring(0,3)},"%A":function(e){return _[e.sa]},"%b":function(e){return l[e.C].substring(0,3)},"%B":function(e){return l[e.C]},"%C":function(e){return i((e.j+1900)/100|0,2)},"%d":function(e){return i(e.H,2)},"%e":function(e){return a(e.H,2," ")},"%g":function(e){return c(e).toString().substring(2)},"%G":function(e){return c(e)},"%H":function(e){return i(e.S,2)},"%I":function(e){return 0==(e=e.S)?e=12:12<e&&(e-=12),i(e,2)},"%j":function(e){return i(e.H+Cn(On(e.j+1900)?In:Bn,e.C-1),3)},"%m":function(e){return i(e.C+1,2)},"%M":function(e){return i(e.Oa,2)},"%n":function(){return"\\n"},"%p":function(e){return 0<=e.S&&12>e.S?"AM":"PM"},"%S":function(e){return i(e.Pa,2)},"%t":function(){return"\\t"},"%u":function(e){return new Date(e.j+1900,e.C+1,e.H,0,0,0,0).getDay()||7},"%U":function(e){var t=new Date(e.j+1900,0,1),n=0===t.getDay()?t:Pn(t,7-t.getDay());return 0>o(n,e=new Date(e.j+1900,e.C,e.H))?i(Math.ceil((31-n.getDate()+(Cn(On(e.getFullYear())?In:Bn,e.getMonth()-1)-31)+e.getDate())/7),2):0===o(n,t)?"01":"00"},"%V":function(e){var t=u(new Date(e.j+1900,0,4)),n=u(new Date(e.j+1901,0,4)),r=Pn(new Date(e.j+1900,0,1),e.T);return 0>o(r,t)?"53":0>=o(n,r)?"01":i(Math.ceil((t.getFullYear()<e.j+1900?e.T+32-t.getDate():e.T+1-t.getDate())/7),2)},"%w":function(e){return new Date(e.j+1900,e.C+1,e.H,0,0,0,0).getDay()},"%W":function(e){var t=new Date(e.j,0,1),n=1===t.getDay()?t:Pn(t,0===t.getDay()?1:7-t.getDay()+1);return 0>o(n,e=new Date(e.j+1900,e.C,e.H))?i(Math.ceil((31-n.getDate()+(Cn(On(e.getFullYear())?In:Bn,e.getMonth()-1)-31)+e.getDate())/7),2):0===o(n,t)?"01":"00"},"%y":function(e){return(e.j+1900).toString().substring(2)},"%Y":function(e){return e.j+1900},"%z":function(e){var t=0<=(e=e.Na);return e=Math.abs(e)/60,(t?"+":"-")+String("0000"+(e/60*100+e%60)).slice(-4)},"%Z":function(e){return e.Qa},"%%":function(){return"%"}})0<=n.indexOf(f)&&(n=n.replace(new RegExp(f,"g"),s[f](r)));return(f=Rn(n,!1)).length>t?0:(A.set(f,e),f.length-1)}me="undefined"!=typeof dateNow?dateNow:"object"==typeof self&&self.performance&&"function"==typeof self.performance.now?function(){return self.performance.now()}:"object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:Date.now,pt(),Ve=Array(4096),at(Pe,"/"),ot("/tmp"),ot("/home"),ot("/home/web_user"),function(){if(ot("/dev"),rt(259,{read:function(){return 0},write:function(e,t,n,r){return r}}),ut("/dev/null",259),Ce(1280,Ie),Ce(1536,Be),ut("/dev/tty",1280),ut("/dev/tty1",1536),"undefined"!=typeof crypto)var e=new Uint8Array(1),t=function(){return crypto.getRandomValues(e),e[0]};else t=function(){br("random_device")};dt("random",t),dt("urandom",t),ot("/dev/shm"),ot("/dev/shm/tmp")}(),ot("/proc"),ot("/proc/self"),ot("/proc/self/fd"),at({A:function(){var e=Xe("/proc/self","fd",16895,73);return e.c={lookup:function(e,t){var n=je[+t];if(!n)throw new Ne(ye.B);return(e={parent:null,A:{qa:"fake"},c:{readlink:function(){return n.path}}}).parent=e}},e}},"/proc/self/fd"),J.unshift((function(){if(!r.noFSInit&&!tt){y(!tt,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),tt=!0,pt(),r.stdin=r.stdin,r.stdout=r.stdout,r.stderr=r.stderr,r.stdin?dt("stdin",r.stdin):ct("/dev/tty","/dev/stdin"),r.stdout?dt("stdout",null,r.stdout):ct("/dev/tty","/dev/stdout"),r.stderr?dt("stderr",null,r.stderr):ct("/dev/tty1","/dev/stderr");var e=ft("/dev/stdin","r");y(0===e.fd,"invalid handle for stdin ("+e.fd+")"),y(1===(e=ft("/dev/stdout","w")).fd,"invalid handle for stdout ("+e.fd+")"),y(2===(e=ft("/dev/stderr","w")).fd,"invalid handle for stderr ("+e.fd+")")}})),Q.push((function(){qe=!1})),$.push((function(){tt=!1;var e=r._fflush;for(e&&e(0),e=0;e<je.length;e++){var t=je[e];t&&_t(t)}})),J.unshift((function(){})),$.push((function(){})),r.requestFullScreen=function(e,t,n){s("Module.requestFullScreen is deprecated. Please call Module.requestFullscreen instead."),r.requestFullScreen=r.requestFullscreen,Zt(e,t,n)},r.requestFullscreen=function(e,t,n){Yt(e,t,n)},r.requestAnimationFrame=function(e){Jt(e)},r.setCanvasSize=function(e,t,n){nn(r.canvas,e,t),n||tn()},r.pauseMainLoop=function(){Tt=null,Ct++},r.resumeMainLoop=function(){Ct++;var e=Bt,t=Pt,n=St;St=null,xt(n,0,!1,It,!0),At(e,t),Tt()},r.getUserMedia=function(){window.getUserMedia||(window.getUserMedia=navigator.getUserMedia||navigator.mozGetUserMedia),window.getUserMedia(void 0)},r.createContext=function(e,t,n,r){return Nt(e,t,n,r)},Sn="undefined"==typeof ENVIRONMENT_IS_FETCH_WORKER,function(e,t){try{var n=indexedDB.open("emscripten_filesystem",1)}catch(e){return void t(e)}n.onupgradeneeded=function(e){(e=e.target.result).objectStoreNames.contains("FILES")&&e.deleteObjectStore("FILES"),e.createObjectStore("FILES")},n.onsuccess=function(t){e(t.target.result)},n.onerror=function(e){t(e)}}((function(e){sn=e,Sn&&_e()}),(function(){sn=!1,Sn&&_e()})),"undefined"!=typeof ENVIRONMENT_IS_FETCH_WORKER&&ENVIRONMENT_IS_FETCH_WORKER||fe();for(var Dn,jn=0;256>jn;jn++);for(jn=0;32>jn;jn++)kn.push(Array(jn));function Rn(e,t){var n=Array(N(e)+1);return e=G(e,n,0,n.length),t&&(n.length=e),n}j=f(4),B=P=l(S),D=l(F=B+Y),E[j>>2]=D,I=!0,r.wasmTableSize=2408,r.wasmMaxTableSize=2408,r.wa={},r.ya={abort:br,assert:y,enlargeMemory:H,getTotalMemory:function(){return Z},abortOnCannotGrowMemory:function(){br("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+Z+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")},invoke_i:function(e){var t=hr();try{return r.dynCall_i(e)}catch(e){if(dr(t),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_ii:function(e,t){var n=hr();try{return r.dynCall_ii(e,t)}catch(e){if(dr(n),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_iii:function(e,t,n){var a=hr();try{return r.dynCall_iii(e,t,n)}catch(e){if(dr(a),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_iiii:function(e,t,n,a){var i=hr();try{return r.dynCall_iiii(e,t,n,a)}catch(e){if(dr(i),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_iiiii:function(e,t,n,a,i){var o=hr();try{return r.dynCall_iiiii(e,t,n,a,i)}catch(e){if(dr(o),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_iiiiid:function(e,t,n,a,i,o){var u=hr();try{return r.dynCall_iiiiid(e,t,n,a,i,o)}catch(e){if(dr(u),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_iiiiii:function(e,t,n,a,i,o){var u=hr();try{return r.dynCall_iiiiii(e,t,n,a,i,o)}catch(e){if(dr(u),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_iiiiiid:function(e,t,n,a,i,o,u){var c=hr();try{return r.dynCall_iiiiiid(e,t,n,a,i,o,u)}catch(e){if(dr(c),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_iiiiiii:function(e,t,n,a,i,o,u){var c=hr();try{return r.dynCall_iiiiiii(e,t,n,a,i,o,u)}catch(e){if(dr(c),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_iiiiiiii:function(e,t,n,a,i,o,u,c){var s=hr();try{return r.dynCall_iiiiiiii(e,t,n,a,i,o,u,c)}catch(e){if(dr(s),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_iiiiiiiii:function(e,t,n,a,i,o,u,c,s){var f=hr();try{return r.dynCall_iiiiiiiii(e,t,n,a,i,o,u,c,s)}catch(e){if(dr(f),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_iiiiij:function(e,t,n,a,i,o,u){var c=hr();try{return r.dynCall_iiiiij(e,t,n,a,i,o,u)}catch(e){if(dr(c),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_iiji:function(e,t,n,a,i){var o=hr();try{return r.dynCall_iiji(e,t,n,a,i)}catch(e){if(dr(o),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_v:function(e){var t=hr();try{r.dynCall_v(e)}catch(e){if(dr(t),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_vi:function(e,t){var n=hr();try{r.dynCall_vi(e,t)}catch(e){if(dr(n),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_vii:function(e,t,n){var a=hr();try{r.dynCall_vii(e,t,n)}catch(e){if(dr(a),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_viiffii:function(e,t,n,a,i,o,u){var c=hr();try{r.dynCall_viiffii(e,t,n,a,i,o,u)}catch(e){if(dr(c),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_viii:function(e,t,n,a){var i=hr();try{r.dynCall_viii(e,t,n,a)}catch(e){if(dr(i),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_viiif:function(e,t,n,a,i){var o=hr();try{r.dynCall_viiif(e,t,n,a,i)}catch(e){if(dr(o),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_viiifffii:function(e,t,n,a,i,o,u,c,s){var f=hr();try{r.dynCall_viiifffii(e,t,n,a,i,o,u,c,s)}catch(e){if(dr(f),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_viiiffii:function(e,t,n,a,i,o,u,c){var s=hr();try{r.dynCall_viiiffii(e,t,n,a,i,o,u,c)}catch(e){if(dr(s),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_viiii:function(e,t,n,a,i){var o=hr();try{r.dynCall_viiii(e,t,n,a,i)}catch(e){if(dr(o),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_viiiii:function(e,t,n,a,i,o){var u=hr();try{r.dynCall_viiiii(e,t,n,a,i,o)}catch(e){if(dr(u),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_viiiiiffffffffffffffff:function(e,t,n,a,i,o,u,c,s,f,_,l,p,d,h,m,b,y,v,g,w,M){var k=hr();try{r.dynCall_viiiiiffffffffffffffff(e,t,n,a,i,o,u,c,s,f,_,l,p,d,h,m,b,y,v,g,w,M)}catch(e){if(dr(k),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_viiiiii:function(e,t,n,a,i,o,u){var c=hr();try{r.dynCall_viiiiii(e,t,n,a,i,o,u)}catch(e){if(dr(c),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_viijii:function(e,t,n,a,i,o,u){var c=hr();try{r.dynCall_viijii(e,t,n,a,i,o,u)}catch(e){if(dr(c),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_vij:function(e,t,n,a){var i=hr();try{r.dynCall_vij(e,t,n,a)}catch(e){if(dr(i),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_viji:function(e,t,n,a,i){var o=hr();try{r.dynCall_viji(e,t,n,a,i)}catch(e){if(dr(o),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},invoke_vijii:function(e,t,n,a,i,o){var u=hr();try{r.dynCall_vijii(e,t,n,a,i,o)}catch(e){if(dr(u),"number"!=typeof e&&"longjmp"!==e)throw e;r.setThrew(1,0)}},___buildEnvironment:function e(t){if(e.Aa)var n=E[t>>2],a=E[n>>2];else e.Aa=!0,he.USER=he.LOGNAME="web_user",he.PATH="/",he.PWD="/",he.HOME="/home/web_user",he.LANG="C.UTF-8",he._=r.thisProgram,a=I?te?_r(1024):_(1024):f(1024),n=I?te?_r(256):_(256):f(256),E[n>>2]=a,E[t>>2]=n;t=[];var i,o=0;for(i in he)if("string"==typeof he[i]){var u=i+"="+he[i];t.push(u),o+=u.length}if(1024<o)throw Error("Environment size exceeded TOTAL_ENV_SIZE!");for(i=0;i<t.length;i++){o=u=t[i];for(var c=a,s=0;s<o.length;++s)A[c++>>0]=o.charCodeAt(s);A[c>>0]=0,E[n+4*i>>2]=a,a+=u.length+1}E[n+4*t.length>>2]=0},___clock_gettime:function(){return ge.apply(null,arguments)},___cxa_allocate_exception:function(e){return _r(e)},___cxa_begin_catch:function(e){var t=ke[e];t&&!t.ka&&(t.ka=!0,ur.Y--),t&&(t.La=!1),Me.push(e);e:{if(e&&!ke[e])for(n in ke)if(ke[t=+n].ia===e){var n=t;break e}n=e}return n&&ke[n].Ja++,e},___cxa_find_matching_catch:function e(){var t=we;if(!t)return 0|(lr(0),0);var n=ke[t],a=n.type;if(!a)return 0|(lr(0),t);var i=Array.prototype.slice.call(arguments);r.___cxa_is_pointer_type(a),e.buffer||(e.buffer=_r(4)),E[e.buffer>>2]=t,t=e.buffer;for(var o=0;o<i.length;o++)if(i[o]&&r.___cxa_can_catch(i[o],a,t))return t=E[t>>2],n.ia=t,0|(lr(i[o]),t);return t=E[t>>2],0|(lr(a),t)},___cxa_pure_virtual:function(){throw b=!0,"Pure virtual function called!"},___cxa_throw:function(e,t,n){throw ke[e]={Ha:e,ia:e,type:t,Tc:n,Ja:0,ka:!1,La:!1},we=e,"uncaught_exception"in ur?ur.Y++:ur.Y=1,e+" - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch."},___cxa_uncaught_exception:function(){return!!ur.Y},___gxx_personality_v0:function(){},___lock:function(){},___map_file:function(){return ve(ye.I),-1},___resumeException:function(e){throw we||(we=e),e+" - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch."},___setErrNo:ve,___syscall140:function(e,t){wt=t;try{var n=kt();Mt();var r=Mt(),a=Mt(),i=Mt();return lt(n,r,i),E[a>>2]=n.position,n.$&&0===r&&0===i&&(n.$=null),0}catch(e){return void 0!==vt&&e instanceof Ne||br(e),-e.v}},___syscall145:function(e,t){wt=t;try{var n=kt(),r=Mt();e:{var a=Mt();for(t=e=0;t<a;t++){var i=E[r+(8*t+4)>>2],o=n,u=E[r+8*t>>2],c=i,s=void 0,f=A;if(0>c||0>s)throw new Ne(ye.i);if(null===o.fd)throw new Ne(ye.B);if(1==(2097155&o.flags))throw new Ne(ye.B);if(16384==(61440&o.node.mode))throw new Ne(ye.L);if(!o.f.read)throw new Ne(ye.i);var _=void 0!==s;if(_){if(!o.seekable)throw new Ne(ye.M)}else s=o.position;var l=o.f.read(o,f,u,c,s);_||(o.position+=l);var p=l;if(0>p){var d=-1;break e}if(e+=p,p<i)break}d=e}return d}catch(e){return void 0!==vt&&e instanceof Ne||br(e),-e.v}},___syscall146:function(e,t){wt=t;try{var n=kt(),r=Mt();e:{var a=Mt();for(t=e=0;t<a;t++){var i=n,o=E[r+8*t>>2],u=E[r+(8*t+4)>>2],c=A,s=void 0;if(0>u||0>s)throw new Ne(ye.i);if(null===i.fd)throw new Ne(ye.B);if(0==(2097155&i.flags))throw new Ne(ye.B);if(16384==(61440&i.node.mode))throw new Ne(ye.L);if(!i.f.write)throw new Ne(ye.i);1024&i.flags&&lt(i,0,2);var f=void 0!==s;if(f){if(!i.seekable)throw new Ne(ye.M)}else s=i.position;var _=i.f.write(i,c,o,u,s,void 0);f||(i.position+=_);try{i.path&&Ge.onWriteToFile&&Ge.onWriteToFile(i.path)}catch(e){console.log("FS.trackingDelegate[\'onWriteToFile\'](\'"+path+"\') threw an exception: "+e.message)}var l=_;if(0>l){var p=-1;break e}e+=l}p=e}return p}catch(e){return void 0!==vt&&e instanceof Ne||br(e),-e.v}},___syscall196:function(e,t){wt=t;try{var n=M(Mt());e:{var r=Mt();try{var a=We(n,{Z:!1}).node;if(!a)throw new Ne(ye.u);if(!a.c.m)throw new Ne(ye.I);var i=a.c.m(a)}catch(e){if(e&&e.node&&ze(n)!==ze(He(e.node))){var o=-ye.X;break e}throw e}E[r>>2]=i.dev,E[r+4>>2]=0,E[r+8>>2]=i.ino,E[r+12>>2]=i.mode,E[r+16>>2]=i.nlink,E[r+20>>2]=i.uid,E[r+24>>2]=i.gid,E[r+28>>2]=i.rdev,E[r+32>>2]=0,E[r+36>>2]=i.size,E[r+40>>2]=4096,E[r+44>>2]=i.blocks,E[r+48>>2]=i.atime.getTime()/1e3|0,E[r+52>>2]=0,E[r+56>>2]=i.mtime.getTime()/1e3|0,E[r+60>>2]=0,E[r+64>>2]=i.ctime.getTime()/1e3|0,E[r+68>>2]=0,E[r+72>>2]=i.ino,o=0}return o}catch(e){return void 0!==vt&&e instanceof Ne||br(e),-e.v}},___syscall221:function(e,t){wt=t;try{var n=kt();switch(Mt()){case 0:var r=Mt();return 0>r?-ye.i:ft(n.path,n.flags,0,r).fd;case 1:case 2:return 0;case 3:return n.flags;case 4:return r=Mt(),n.flags|=r,0;case 12:case 12:return r=Mt(),z[r+0>>1]=2,0;case 13:case 14:case 13:case 14:return 0;case 16:case 8:return-ye.i;case 9:return ve(ye.i),-1;default:return-ye.i}}catch(e){return void 0!==vt&&e instanceof Ne||br(e),-e.v}},___syscall5:function(e,t){wt=t;try{return ft(M(Mt()),Mt(),Mt()).fd}catch(e){return void 0!==vt&&e instanceof Ne||br(e),-e.v}},___syscall54:function(e,t){wt=t;try{var n=kt(),r=Mt();switch(r){case 21509:case 21505:return n.tty?0:-ye.D;case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:return n.tty?0:-ye.D;case 21519:if(!n.tty)return-ye.D;var a=Mt();return E[a>>2]=0;case 21520:return n.tty?-ye.i:-ye.D;case 21531:if(e=a=Mt(),!n.f.Ea)throw new Ne(ye.D);return n.f.Ea(n,r,e);case 21523:case 21524:return n.tty?0:-ye.D;default:br("bad ioctl syscall "+r)}}catch(e){return void 0!==vt&&e instanceof Ne||br(e),-e.v}},___syscall6:function(e,t){wt=t;try{return _t(kt()),0}catch(e){return void 0!==vt&&e instanceof Ne||br(e),-e.v}},___syscall91:function(e,t){wt=t;try{var n=Mt(),r=Mt(),a=gt[n];if(!a)return 0;if(r===a.Xc){var i=je[a.fd],o=a.flags,u=new Uint8Array(x.subarray(n,n+r));i&&i.f.R&&i.f.R(i,u,0,r,o),gt[n]=null,a.va&&fr(a.Yc)}return 0}catch(e){return void 0!==vt&&e instanceof Ne||br(e),-e.v}},___unlock:function(){},__addDays:Pn,__arraySum:Cn,__emscripten_fetch_cache_data:ln,__emscripten_fetch_delete_cached_data:dn,__emscripten_fetch_load_cached_data:pn,__emscripten_fetch_xhr:_n,__emscripten_get_fetch_work_queue:function(){return hn},__isLeapYear:On,_abort:function(){r.abort()},_clock_gettime:ge,_emidentity:function(){var e=new URL(location.origin).hostname;0===e.length&&(e=new URL(location.href.replace("blob:","")).hostname),/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e)?(0===e.indexOf("10.")&&(e="10.*"),0===e.indexOf("192.168.")&&(e="192.168.*"),0===e.indexOf("127.")&&(e="127.*")):new RegExp("("+String.fromCharCode(92)+".ngrok"+String.fromCharCode(92)+".io)$","i").test(e)&&(e="*.ngrok.io");var t=N(e)+1,n=_r(t);return G(e,x,n,t+1),n},_emlicerr:function(){self.postMessage({t:"licerr"})},_emscripten_asm_const_i:function(e){return pe[e]()},_emscripten_async_call:function(e,t,n){function a(){!function(e){if(e){y("vi"),h.vi||(h.vi={});var t=h.vi;return t[e]||(t[e]=function(t){return m("vi",e,[t])}),t[e]}}(e)(t)}r.noExitRuntime=!0,0<=n?Qt(a,n):function(e){Jt((function(){b||e()}))}(a)},_emscripten_get_now:me,_emscripten_get_now_is_monotonic:be,_emscripten_is_main_browser_thread:function(){return!1},_emscripten_is_main_runtime_thread:function(){return 1},_emscripten_memcpy_big:function(e,t,n){return x.set(x.subarray(t,t+n),e),e},_emscripten_set_main_loop:xt,_emscripten_set_main_loop_timing:At,_emscripten_start_fetch:function(e,t,n,a){function i(e){l?r.dynCall_vi(l,e):n&&n(e)}function o(e){p?r.dynCall_vi(p,e):a&&a(e)}function u(e,n){ln(sn,e,n.response,(function(e){_?r.dynCall_vi(_,e):t&&t(e)}),(function(e){_?r.dynCall_vi(_,e):t&&t(e)}))}function c(e){_?r.dynCall_vi(_,e):t&&t(e)}void 0!==r&&(r.noExitRuntime=!0);var s=e+112,f=M(s),_=T[s+36>>2],l=T[s+40>>2],p=T[s+44>>2],d=T[s+48>>2],h=!!(4&d),m=!!(32&d);if(16&d&&"EM_IDB_STORE"!==f&&"EM_IDB_DELETE"!==f){if(m)return 0;_n(e,h?u:c,i,o)}else{if(!sn)return i(e),0;"EM_IDB_STORE"===f?(f=T[s+80>>2],s=x.slice(f,f+T[s+84>>2]),ln(sn,e,s,c,i)):"EM_IDB_DELETE"===f?dn(sn,e,c,i):pn(sn,e,c,m?i:h?function(e){_n(e,u,i,o)}:function(e){_n(e,c,i,o)})}return e},_getenv:function e(t){if(0===t)return 0;if(t=M(t),!he.hasOwnProperty(t))return 0;e.l&&fr(e.l);var n=N(t=he[t])+1,r=_r(n);return r&&G(t,A,r,n),e.l=r},_gettimeofday:function(e){var t=Date.now();return E[e>>2]=t/1e3|0,E[e+4>>2]=t%1e3*1e3|0,0},_glBindTexture:function(e,t){Dn.bindTexture(e,t?gn[t]:null)},_glGenTextures:function(e,t){for(var n=0;n<e;n++){var r=Dn.createTexture();if(!r){for(vn||(vn=1282);n<e;)E[t+4*n++>>2]=0;break}var a=An(gn);r.name=a,gn[a]=r,E[t+4*n>>2]=a}},_glTexImage2D:function(e,t,n,r,a,i,o,u,c){var s=null;c&&(s=zn(u,o,r,a,c)),Dn.texImage2D(e,t,n,r,a,i,o,u,s)},_glTexParameteri:function(e,t,n){Dn.texParameteri(e,t,n)},_llvm_exp2_f32:function(e){return Math.pow(2,e)},_llvm_stackrestore:function(e){var t=Ln.l[e];Ln.l.splice(e,1),dr(t)},_llvm_stacksave:Ln,_llvm_trap:function(){br("trap!")},_pthread_cond_wait:function(){return 0},_pthread_getspecific:function(e){return En[e]||0},_pthread_key_create:function(e){return 0==e?ye.i:(E[e>>2]=Tn,En[Tn]=0,Tn++,0)},_pthread_mutex_destroy:function(){},_pthread_mutex_init:function(){},_pthread_once:function e(t,n){e.l||(e.l={}),t in e.l||(r.dynCall_v(n),e.l[t]=1)},_pthread_setspecific:function(e,t){return e in En?(En[e]=t,0):ye.i},_strftime:Fn,_strftime_l:function(e,t,n,r){return Fn(e,t,n,r)},emscriptenWebGLComputeImageSize:xn,emscriptenWebGLGetTexPixelData:zn,DYNAMICTOP_PTR:j,tempDoublePtr:de,STACKTOP:P,STACK_MAX:F};var Vn=r.asm(r.wa,r.ya,k);r.asm=Vn;var qn=r.__GLOBAL__I_000101=function(){return r.asm.__GLOBAL__I_000101.apply(null,arguments)},Gn=r.__GLOBAL__sub_I_AZHighLevelEncoder_cpp=function(){return r.asm.__GLOBAL__sub_I_AZHighLevelEncoder_cpp.apply(null,arguments)},Nn=r.__GLOBAL__sub_I_CameraSource_cpp=function(){return r.asm.__GLOBAL__sub_I_CameraSource_cpp.apply(null,arguments)},Un=r.__GLOBAL__sub_I_CharacterSetECI_cpp=function(){return r.asm.__GLOBAL__sub_I_CharacterSetECI_cpp.apply(null,arguments)},Wn=r.__GLOBAL__sub_I_DMECEncoder_cpp=function(){return r.asm.__GLOBAL__sub_I_DMECEncoder_cpp.apply(null,arguments)},Hn=r.__GLOBAL__sub_I_DMHighLevelEncoder_cpp=function(){return r.asm.__GLOBAL__sub_I_DMHighLevelEncoder_cpp.apply(null,arguments)},Yn=r.__GLOBAL__sub_I_GridSampler_cpp=function(){return r.asm.__GLOBAL__sub_I_GridSampler_cpp.apply(null,arguments)},Zn=r.__GLOBAL__sub_I_ODCode128Patterns_cpp=function(){return r.asm.__GLOBAL__sub_I_ODCode128Patterns_cpp.apply(null,arguments)},Xn=r.__GLOBAL__sub_I_ODRSSExpandedReader_cpp=function(){return r.asm.__GLOBAL__sub_I_ODRSSExpandedReader_cpp.apply(null,arguments)},Kn=r.__GLOBAL__sub_I_PDFDetector_cpp=function(){return r.asm.__GLOBAL__sub_I_PDFDetector_cpp.apply(null,arguments)},Jn=r.__GLOBAL__sub_I_StandardStatsManager_cpp=function(){return r.asm.__GLOBAL__sub_I_StandardStatsManager_cpp.apply(null,arguments)},Qn=r.__GLOBAL__sub_I_barcode_finder_cpp=function(){return r.asm.__GLOBAL__sub_I_barcode_finder_cpp.apply(null,arguments)},$n=r.__GLOBAL__sub_I_face_mesh_cpp=function(){return r.asm.__GLOBAL__sub_I_face_mesh_cpp.apply(null,arguments)},er=r.__GLOBAL__sub_I_face_tracker_cpp=function(){return r.asm.__GLOBAL__sub_I_face_tracker_cpp.apply(null,arguments)},tr=r.__GLOBAL__sub_I_image_tracker_cpp=function(){return r.asm.__GLOBAL__sub_I_image_tracker_cpp.apply(null,arguments)},nr=r.__GLOBAL__sub_I_inference_cc=function(){return r.asm.__GLOBAL__sub_I_inference_cc.apply(null,arguments)},rr=r.__GLOBAL__sub_I_instant_tracker_cpp=function(){return r.asm.__GLOBAL__sub_I_instant_tracker_cpp.apply(null,arguments)},ar=r.__GLOBAL__sub_I_iostream_cpp=function(){return r.asm.__GLOBAL__sub_I_iostream_cpp.apply(null,arguments)},ir=r.__GLOBAL__sub_I_pipeline_cpp=function(){return r.asm.__GLOBAL__sub_I_pipeline_cpp.apply(null,arguments)},or=r.__GLOBAL__sub_I_zappar_face_tracker_cpp=function(){return r.asm.__GLOBAL__sub_I_zappar_face_tracker_cpp.apply(null,arguments)};r.__Z20zappar_face_mesh_uvsP19zappar_face_mesh_ti=function(){return r.asm.__Z20zappar_face_mesh_uvsP19zappar_face_mesh_ti.apply(null,arguments)},r.__Z23zappar_face_mesh_updateP19zappar_face_mesh_tiPKfS2_i=function(){return r.asm.__Z23zappar_face_mesh_updateP19zappar_face_mesh_tiPKfS2_i.apply(null,arguments)},r.__Z24zappar_face_mesh_indicesP19zappar_face_mesh_ti=function(){return r.asm.__Z24zappar_face_mesh_indicesP19zappar_face_mesh_ti.apply(null,arguments)},r.__Z24zappar_face_mesh_normalsP19zappar_face_mesh_ti=function(){return r.asm.__Z24zappar_face_mesh_normalsP19zappar_face_mesh_ti.apply(null,arguments)},r.__Z25zappar_face_mesh_uvs_sizeP19zappar_face_mesh_ti=function(){return r.asm.__Z25zappar_face_mesh_uvs_sizeP19zappar_face_mesh_ti.apply(null,arguments)},r.__Z25zappar_face_mesh_verticesP19zappar_face_mesh_ti=function(){return r.asm.__Z25zappar_face_mesh_verticesP19zappar_face_mesh_ti.apply(null,arguments)},r.__Z29zappar_face_mesh_indices_sizeP19zappar_face_mesh_ti=function(){return r.asm.__Z29zappar_face_mesh_indices_sizeP19zappar_face_mesh_ti.apply(null,arguments)},r.__Z29zappar_face_mesh_normals_sizeP19zappar_face_mesh_ti=function(){return r.asm.__Z29zappar_face_mesh_normals_sizeP19zappar_face_mesh_ti.apply(null,arguments)},r.__Z30zappar_face_mesh_vertices_sizeP19zappar_face_mesh_ti=function(){return r.asm.__Z30zappar_face_mesh_vertices_sizeP19zappar_face_mesh_ti.apply(null,arguments)},r.__Z31zappar_face_mesh_loaded_versionP19zappar_face_mesh_ti=function(){return r.asm.__Z31zappar_face_mesh_loaded_versionP19zappar_face_mesh_ti.apply(null,arguments)},r.__Z33zappar_face_mesh_load_from_memoryP19zappar_face_mesh_tiPKciiiii=function(){return r.asm.__Z33zappar_face_mesh_load_from_memoryP19zappar_face_mesh_tiPKciiiii.apply(null,arguments)},r.__Z42zappar_image_tracker_target_load_from_fileP23zappar_image_tracker_tiPKc=function(){return r.asm.__Z42zappar_image_tracker_target_load_from_fileP23zappar_image_tracker_tiPKc.apply(null,arguments)};var ur=r.__ZSt18uncaught_exceptionv=function(){return r.asm.__ZSt18uncaught_exceptionv.apply(null,arguments)};r.___cxa_can_catch=function(){return r.asm.___cxa_can_catch.apply(null,arguments)},r.___cxa_is_pointer_type=function(){return r.asm.___cxa_is_pointer_type.apply(null,arguments)},r.___em_js__emidentity=function(){return r.asm.___em_js__emidentity.apply(null,arguments)},r.___em_js__emlicerr=function(){return r.asm.___em_js__emlicerr.apply(null,arguments)};var cr=r.___emscripten_environ_constructor=function(){return r.asm.___emscripten_environ_constructor.apply(null,arguments)};r.___errno_location=function(){return r.asm.___errno_location.apply(null,arguments)},r.__get_environ=function(){return r.asm.__get_environ.apply(null,arguments)};var sr=r._emscripten_replace_memory=function(){return r.asm._emscripten_replace_memory.apply(null,arguments)},fr=r._free=function(){return r.asm._free.apply(null,arguments)};r._llvm_bswap_i32=function(){return r.asm._llvm_bswap_i32.apply(null,arguments)},r._llvm_round_f32=function(){return r.asm._llvm_round_f32.apply(null,arguments)};var _r=r._malloc=function(){return r.asm._malloc.apply(null,arguments)};r._memcpy=function(){return r.asm._memcpy.apply(null,arguments)},r._memmove=function(){return r.asm._memmove.apply(null,arguments)},r._memset=function(){return r.asm._memset.apply(null,arguments)},r._pthread_cond_broadcast=function(){return r.asm._pthread_cond_broadcast.apply(null,arguments)},r._pthread_mutex_lock=function(){return r.asm._pthread_mutex_lock.apply(null,arguments)},r._pthread_mutex_unlock=function(){return r.asm._pthread_mutex_unlock.apply(null,arguments)},r._round=function(){return r.asm._round.apply(null,arguments)},r._sbrk=function(){return r.asm._sbrk.apply(null,arguments)},r._zappar_analytics_project_id_set=function(){return r.asm._zappar_analytics_project_id_set.apply(null,arguments)},r._zappar_barcode_finder_create=function(){return r.asm._zappar_barcode_finder_create.apply(null,arguments)},r._zappar_barcode_finder_destroy=function(){return r.asm._zappar_barcode_finder_destroy.apply(null,arguments)},r._zappar_barcode_finder_enabled=function(){return r.asm._zappar_barcode_finder_enabled.apply(null,arguments)},r._zappar_barcode_finder_enabled_set=function(){return r.asm._zappar_barcode_finder_enabled_set.apply(null,arguments)},r._zappar_barcode_finder_formats=function(){return r.asm._zappar_barcode_finder_formats.apply(null,arguments)},r._zappar_barcode_finder_formats_set=function(){return r.asm._zappar_barcode_finder_formats_set.apply(null,arguments)},r._zappar_barcode_finder_found_format=function(){return r.asm._zappar_barcode_finder_found_format.apply(null,arguments)},r._zappar_barcode_finder_found_number=function(){return r.asm._zappar_barcode_finder_found_number.apply(null,arguments)},r._zappar_barcode_finder_found_text=function(){return r.asm._zappar_barcode_finder_found_text.apply(null,arguments)},r._zappar_camera_default_device_id=function(){return r.asm._zappar_camera_default_device_id.apply(null,arguments)},r._zappar_camera_source_create=function(){return r.asm._zappar_camera_source_create.apply(null,arguments)},r._zappar_camera_source_destroy=function(){return r.asm._zappar_camera_source_destroy.apply(null,arguments)},r._zappar_camera_source_pause=function(){return r.asm._zappar_camera_source_pause.apply(null,arguments)},r._zappar_camera_source_start=function(){return r.asm._zappar_camera_source_start.apply(null,arguments)},r._zappar_face_mesh_create=function(){return r.asm._zappar_face_mesh_create.apply(null,arguments)},r._zappar_face_mesh_destroy=function(){return r.asm._zappar_face_mesh_destroy.apply(null,arguments)},r._zappar_face_tracker_anchor_count=function(){return r.asm._zappar_face_tracker_anchor_count.apply(null,arguments)},r._zappar_face_tracker_anchor_expression_coefficients=function(){return r.asm._zappar_face_tracker_anchor_expression_coefficients.apply(null,arguments)},r._zappar_face_tracker_anchor_id=function(){return r.asm._zappar_face_tracker_anchor_id.apply(null,arguments)},r._zappar_face_tracker_anchor_identity_coefficients=function(){return r.asm._zappar_face_tracker_anchor_identity_coefficients.apply(null,arguments)},r._zappar_face_tracker_anchor_pose_raw=function(){return r.asm._zappar_face_tracker_anchor_pose_raw.apply(null,arguments)},r._zappar_face_tracker_create=function(){return r.asm._zappar_face_tracker_create.apply(null,arguments)},r._zappar_face_tracker_destroy=function(){return r.asm._zappar_face_tracker_destroy.apply(null,arguments)},r._zappar_face_tracker_enabled=function(){return r.asm._zappar_face_tracker_enabled.apply(null,arguments)},r._zappar_face_tracker_enabled_set=function(){return r.asm._zappar_face_tracker_enabled_set.apply(null,arguments)},r._zappar_face_tracker_max_faces=function(){return r.asm._zappar_face_tracker_max_faces.apply(null,arguments)},r._zappar_face_tracker_max_faces_set=function(){return r.asm._zappar_face_tracker_max_faces_set.apply(null,arguments)},r._zappar_face_tracker_model_load_from_memory=function(){return r.asm._zappar_face_tracker_model_load_from_memory.apply(null,arguments)},r._zappar_face_tracker_model_loaded_version=function(){return r.asm._zappar_face_tracker_model_loaded_version.apply(null,arguments)},r._zappar_has_initialized=function(){return r.asm._zappar_has_initialized.apply(null,arguments)},r._zappar_image_tracker_anchor_count=function(){return r.asm._zappar_image_tracker_anchor_count.apply(null,arguments)},r._zappar_image_tracker_anchor_id=function(){return r.asm._zappar_image_tracker_anchor_id.apply(null,arguments)},r._zappar_image_tracker_anchor_pose_raw=function(){return r.asm._zappar_image_tracker_anchor_pose_raw.apply(null,arguments)},r._zappar_image_tracker_create=function(){return r.asm._zappar_image_tracker_create.apply(null,arguments)},r._zappar_image_tracker_destroy=function(){return r.asm._zappar_image_tracker_destroy.apply(null,arguments)},r._zappar_image_tracker_enabled=function(){return r.asm._zappar_image_tracker_enabled.apply(null,arguments)},r._zappar_image_tracker_enabled_set=function(){return r.asm._zappar_image_tracker_enabled_set.apply(null,arguments)},r._zappar_image_tracker_target_load_from_memory=function(){return r.asm._zappar_image_tracker_target_load_from_memory.apply(null,arguments)},r._zappar_image_tracker_target_loaded_version=function(){return r.asm._zappar_image_tracker_target_loaded_version.apply(null,arguments)},r._zappar_instant_world_tracker_anchor_pose_raw=function(){return r.asm._zappar_instant_world_tracker_anchor_pose_raw.apply(null,arguments)},r._zappar_instant_world_tracker_anchor_pose_set_from_camera_offset=function(){return r.asm._zappar_instant_world_tracker_anchor_pose_set_from_camera_offset.apply(null,arguments)},r._zappar_instant_world_tracker_create=function(){return r.asm._zappar_instant_world_tracker_create.apply(null,arguments)},r._zappar_instant_world_tracker_destroy=function(){return r.asm._zappar_instant_world_tracker_destroy.apply(null,arguments)},r._zappar_instant_world_tracker_enabled=function(){return r.asm._zappar_instant_world_tracker_enabled.apply(null,arguments)},r._zappar_instant_world_tracker_enabled_set=function(){return r.asm._zappar_instant_world_tracker_enabled_set.apply(null,arguments)},r._zappar_invert=function(){return r.asm._zappar_invert.apply(null,arguments)},r._zappar_pipeline_camera_frame_camera_attitude=function(){return r.asm._zappar_pipeline_camera_frame_camera_attitude.apply(null,arguments)},r._zappar_pipeline_camera_frame_submit=function(){return r.asm._zappar_pipeline_camera_frame_submit.apply(null,arguments)},r._zappar_pipeline_camera_frame_texture_gl=function(){return r.asm._zappar_pipeline_camera_frame_texture_gl.apply(null,arguments)},r._zappar_pipeline_camera_frame_texture_matrix=function(){return r.asm._zappar_pipeline_camera_frame_texture_matrix.apply(null,arguments)},r._zappar_pipeline_camera_frame_upload_gl=function(){return r.asm._zappar_pipeline_camera_frame_upload_gl.apply(null,arguments)},r._zappar_pipeline_camera_frame_user_data=function(){return r.asm._zappar_pipeline_camera_frame_user_data.apply(null,arguments)},r._zappar_pipeline_camera_frame_user_facing=function(){return r.asm._zappar_pipeline_camera_frame_user_facing.apply(null,arguments)},r._zappar_pipeline_camera_model=function(){return r.asm._zappar_pipeline_camera_model.apply(null,arguments)},r._zappar_pipeline_camera_pose_default=function(){return r.asm._zappar_pipeline_camera_pose_default.apply(null,arguments)},r._zappar_pipeline_camera_pose_with_attitude=function(){return r.asm._zappar_pipeline_camera_pose_with_attitude.apply(null,arguments)},r._zappar_pipeline_camera_pose_with_origin=function(){return r.asm._zappar_pipeline_camera_pose_with_origin.apply(null,arguments)},r._zappar_pipeline_create=function(){return r.asm._zappar_pipeline_create.apply(null,arguments)},r._zappar_pipeline_destroy=function(){return r.asm._zappar_pipeline_destroy.apply(null,arguments)},r._zappar_pipeline_frame_number=function(){return r.asm._zappar_pipeline_frame_number.apply(null,arguments)},r._zappar_pipeline_frame_update=function(){return r.asm._zappar_pipeline_frame_update.apply(null,arguments)},r._zappar_pipeline_motion_accelerometer_submit=function(){return r.asm._zappar_pipeline_motion_accelerometer_submit.apply(null,arguments)},r._zappar_pipeline_motion_attitude_submit=function(){return r.asm._zappar_pipeline_motion_attitude_submit.apply(null,arguments)},r._zappar_pipeline_motion_rotation_rate_submit=function(){return r.asm._zappar_pipeline_motion_rotation_rate_submit.apply(null,arguments)},r._zappar_pipeline_process_gl=function(){return r.asm._zappar_pipeline_process_gl.apply(null,arguments)},r.establishStackSpace=function(){return r.asm.establishStackSpace.apply(null,arguments)},r.getTempRet0=function(){return r.asm.getTempRet0.apply(null,arguments)},r.runPostSets=function(){return r.asm.runPostSets.apply(null,arguments)};var lr=r.setTempRet0=function(){return r.asm.setTempRet0.apply(null,arguments)};r.setThrew=function(){return r.asm.setThrew.apply(null,arguments)};var pr=r.stackAlloc=function(){return r.asm.stackAlloc.apply(null,arguments)},dr=r.stackRestore=function(){return r.asm.stackRestore.apply(null,arguments)},hr=r.stackSave=function(){return r.asm.stackSave.apply(null,arguments)};function mr(){function e(){if(!r.calledRun&&(r.calledRun=!0,!b)){if(te||(te=!0,X(J)),X(Q),r.onRuntimeInitialized&&r.onRuntimeInitialized(),r.postRun)for("function"==typeof r.postRun&&(r.postRun=[r.postRun]);r.postRun.length;){var e=r.postRun.shift();ee.unshift(e)}X(ee)}}if(!(0<ue)){if(r.preRun)for("function"==typeof r.preRun&&(r.preRun=[r.preRun]);r.preRun.length;)ne();X(K),0<ue||r.calledRun||(r.setStatus?(r.setStatus("Running..."),setTimeout((function(){setTimeout((function(){r.setStatus("")}),1),e()}),1)):e())}}function br(e){throw r.onAbort&&r.onAbort(e),void 0!==e?(c(e),s(e),e=JSON.stringify(e)):e="",b=!0,"abort("+e+"). Build with -s ASSERTIONS=1 for more info."}if(r.dynCall_i=function(){return r.asm.dynCall_i.apply(null,arguments)},r.dynCall_ii=function(){return r.asm.dynCall_ii.apply(null,arguments)},r.dynCall_iii=function(){return r.asm.dynCall_iii.apply(null,arguments)},r.dynCall_iiii=function(){return r.asm.dynCall_iiii.apply(null,arguments)},r.dynCall_iiiii=function(){return r.asm.dynCall_iiiii.apply(null,arguments)},r.dynCall_iiiiid=function(){return r.asm.dynCall_iiiiid.apply(null,arguments)},r.dynCall_iiiiii=function(){return r.asm.dynCall_iiiiii.apply(null,arguments)},r.dynCall_iiiiiid=function(){return r.asm.dynCall_iiiiiid.apply(null,arguments)},r.dynCall_iiiiiii=function(){return r.asm.dynCall_iiiiiii.apply(null,arguments)},r.dynCall_iiiiiiii=function(){return r.asm.dynCall_iiiiiiii.apply(null,arguments)},r.dynCall_iiiiiiiii=function(){return r.asm.dynCall_iiiiiiiii.apply(null,arguments)},r.dynCall_iiiiij=function(){return r.asm.dynCall_iiiiij.apply(null,arguments)},r.dynCall_iiji=function(){return r.asm.dynCall_iiji.apply(null,arguments)},r.dynCall_v=function(){return r.asm.dynCall_v.apply(null,arguments)},r.dynCall_vi=function(){return r.asm.dynCall_vi.apply(null,arguments)},r.dynCall_vii=function(){return r.asm.dynCall_vii.apply(null,arguments)},r.dynCall_viiffii=function(){return r.asm.dynCall_viiffii.apply(null,arguments)},r.dynCall_viii=function(){return r.asm.dynCall_viii.apply(null,arguments)},r.dynCall_viiif=function(){return r.asm.dynCall_viiif.apply(null,arguments)},r.dynCall_viiifffii=function(){return r.asm.dynCall_viiifffii.apply(null,arguments)},r.dynCall_viiiffii=function(){return r.asm.dynCall_viiiffii.apply(null,arguments)},r.dynCall_viiii=function(){return r.asm.dynCall_viiii.apply(null,arguments)},r.dynCall_viiiii=function(){return r.asm.dynCall_viiiii.apply(null,arguments)},r.dynCall_viiiiiffffffffffffffff=function(){return r.asm.dynCall_viiiiiffffffffffffffff.apply(null,arguments)},r.dynCall_viiiiii=function(){return r.asm.dynCall_viiiiii.apply(null,arguments)},r.dynCall_viijii=function(){return r.asm.dynCall_viijii.apply(null,arguments)},r.dynCall_vij=function(){return r.asm.dynCall_vij.apply(null,arguments)},r.dynCall_viji=function(){return r.asm.dynCall_viji.apply(null,arguments)},r.dynCall_vijii=function(){return r.asm.dynCall_vijii.apply(null,arguments)},r.asm=Vn,r.cwrap=function(e,t,n,r){var a=(n=n||[]).every((function(e){return"number"===e}));return"string"!==t&&a&&!r?v(e):function(){var r=n,a=arguments,i=v(e),o=[],u=0;if(a)for(var c=0;c<a.length;c++){var s=w[r[c]];s?(0===u&&(u=hr()),o[c]=s(a[c])):o[c]=a[c]}return r=i.apply(null,o),r="string"===t?M(r):"boolean"===t?!!r:r,0!==u&&dr(u),r}},r.setValue=function(e,t,n){switch("*"===(n=n||"i8").charAt(n.length-1)&&(n="i32"),n){case"i1":case"i8":A[e>>0]=t;break;case"i16":z[e>>1]=t;break;case"i32":E[e>>2]=t;break;case"i64":tempI64=[t>>>0,(tempDouble=t,1<=+re(tempDouble)?0<tempDouble?(0|oe(+ie(tempDouble/4294967296),4294967295))>>>0:~~+ae((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],E[e>>2]=tempI64[0],E[e+4>>2]=tempI64[1];break;case"float":O[e>>2]=t;break;case"double":C[e>>3]=t;break;default:br("invalid type for setValue: "+n)}},r.getValue=function(e,t){switch("*"===(t=t||"i8").charAt(t.length-1)&&(t="i32"),t){case"i1":case"i8":return A[e>>0];case"i16":return z[e>>1];case"i32":case"i64":return E[e>>2];case"float":return O[e>>2];case"double":return C[e>>3];default:br("invalid type for getValue: "+t)}return null},r.UTF8ToString=q,r.then=function(e){if(r.calledRun)e(r);else{var t=r.onRuntimeInitialized;r.onRuntimeInitialized=function(){t&&t(),e(r)}}return r},se=function e(){r.calledRun||mr(),r.calledRun||(se=e)},r.run=mr,r.abort=br,r.preInit)for("function"==typeof r.preInit&&(r.preInit=[r.preInit]);0<r.preInit.length;)r.preInit.pop()();return r.noExitRuntime=!0,mr(),t});t.default=r}.call(this,n(4).setImmediate)},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,a=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(a.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(a.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(5),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(0))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,a,i,o,u,c=1,s={},f=!1,_=e.document,l=Object.getPrototypeOf&&Object.getPrototypeOf(e);l=l&&l.setTimeout?l:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick((function(){d(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){d(e.data)},r=function(e){i.port2.postMessage(e)}):_&&"onreadystatechange"in _.createElement("script")?(a=_.documentElement,r=function(e){var t=_.createElement("script");t.onreadystatechange=function(){d(e),t.onreadystatechange=null,a.removeChild(t),t=null},a.appendChild(t)}):r=function(e){setTimeout(d,0,e)}:(o="setImmediate$"+Math.random()+"$",u=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(o)&&d(+t.data.slice(o.length))},e.addEventListener?e.addEventListener("message",u,!1):e.attachEvent("onmessage",u),r=function(t){e.postMessage(o+t,"*")}),l.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var a={callback:e,args:t};return s[c]=a,r(c),c++},l.clearImmediate=p}function p(e){delete s[e]}function d(e){if(f)setTimeout(d,0,e);else{var t=s[e];if(t){f=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{p(e),f=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(0),n(6))},function(e,t){var n,r,a=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,s=[],f=!1,_=-1;function l(){f&&c&&(f=!1,c.length?s=c.concat(s):_=-1,s.length&&p())}function p(){if(!f){var e=u(l);f=!0;for(var t=s.length;t;){for(c=s,s=[];++_<t;)c&&c[_].run();_=-1,t=s.length}c=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function h(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new d(e,t)),1!==s.length||f||u(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getRuntimeObject=function(e){let t=e.cwrap("zappar_analytics_project_id_set",null,["string"]),n=e.cwrap("zappar_pipeline_create","number",[]),r=e.cwrap("zappar_pipeline_destroy",null,["number"]),a=e.cwrap("zappar_pipeline_frame_update",null,["number"]),i=e.cwrap("zappar_pipeline_frame_number","number",["number"]),o=e.cwrap("zappar_pipeline_camera_model","number",["number"]),u=e.cwrap("zappar_pipeline_camera_frame_user_data","number",["number"]),c=e.cwrap("zappar_pipeline_camera_frame_submit",null,["number","number","number","number","number","number","number"]),s=e.cwrap("zappar_pipeline_camera_frame_camera_attitude","number",["number"]),f=e.cwrap("zappar_pipeline_motion_accelerometer_submit",null,["number","number","number","number","number"]),_=e.cwrap("zappar_pipeline_motion_rotation_rate_submit",null,["number","number","number","number","number"]),l=e.cwrap("zappar_pipeline_motion_attitude_submit",null,["number","number","number","number","number"]),p=e.cwrap("zappar_camera_source_create","number",["number","string"]),d=e.cwrap("zappar_camera_source_destroy",null,["number"]),h=e.cwrap("zappar_image_tracker_create","number",["number"]),m=e.cwrap("zappar_image_tracker_destroy",null,["number"]),b=e.cwrap("zappar_image_tracker_target_load_from_memory",null,["number","number","number"]),y=e.cwrap("zappar_image_tracker_target_loaded_version","number",["number"]),v=e.cwrap("zappar_image_tracker_enabled","number",["number"]),g=e.cwrap("zappar_image_tracker_enabled_set",null,["number","number"]),w=e.cwrap("zappar_image_tracker_anchor_count","number",["number"]),M=e.cwrap("zappar_image_tracker_anchor_id","string",["number","number"]),k=e.cwrap("zappar_image_tracker_anchor_pose_raw","number",["number","number"]),A=e.cwrap("zappar_face_tracker_create","number",["number"]),x=e.cwrap("zappar_face_tracker_destroy",null,["number"]),z=e.cwrap("zappar_face_tracker_model_load_from_memory",null,["number","number","number"]),L=e.cwrap("zappar_face_tracker_model_loaded_version","number",["number"]),E=e.cwrap("zappar_face_tracker_enabled_set",null,["number","number"]),T=e.cwrap("zappar_face_tracker_enabled","number",["number"]),O=e.cwrap("zappar_face_tracker_max_faces_set",null,["number","number"]),C=e.cwrap("zappar_face_tracker_max_faces","number",["number"]),S=e.cwrap("zappar_face_tracker_anchor_count","number",["number"]),I=e.cwrap("zappar_face_tracker_anchor_id","string",["number","number"]),B=e.cwrap("zappar_face_tracker_anchor_pose_raw","number",["number","number"]),P=e.cwrap("zappar_face_tracker_anchor_identity_coefficients","number",["number","number"]),F=e.cwrap("zappar_face_tracker_anchor_expression_coefficients","number",["number","number"]),D=e.cwrap("zappar_face_mesh_create","number",[]),j=e.cwrap("zappar_face_mesh_destroy",null,["number"]),R=e.cwrap("zappar_barcode_finder_create","number",["number"]),V=e.cwrap("zappar_barcode_finder_destroy",null,["number"]),q=e.cwrap("zappar_barcode_finder_enabled_set",null,["number","number"]),G=e.cwrap("zappar_barcode_finder_enabled","number",["number"]),N=e.cwrap("zappar_barcode_finder_found_number","number",["number"]),U=e.cwrap("zappar_barcode_finder_found_text","string",["number","number"]),W=e.cwrap("zappar_barcode_finder_found_format","number",["number","number"]),H=e.cwrap("zappar_barcode_finder_formats","number",["number"]),Y=e.cwrap("zappar_barcode_finder_formats_set",null,["number","number"]),Z=e.cwrap("zappar_instant_world_tracker_create","number",["number"]),X=e.cwrap("zappar_instant_world_tracker_destroy",null,["number"]),K=e.cwrap("zappar_instant_world_tracker_enabled_set",null,["number","number"]),J=e.cwrap("zappar_instant_world_tracker_enabled","number",["number"]),Q=e.cwrap("zappar_instant_world_tracker_anchor_pose_raw","number",["number"]),$=e.cwrap("zappar_instant_world_tracker_anchor_pose_set_from_camera_offset",null,["number","number","number","number","number"]),ee=32,te=e._malloc(ee),ne=64,re=e._malloc(ne);return{analytics_project_id_set:e=>t(e),pipeline_create:()=>n(),pipeline_destroy:()=>{r()},pipeline_frame_update:e=>a(e),pipeline_frame_number:e=>i(e),pipeline_camera_model:t=>{let n=o(t),r=new Float32Array(6);return r.set(e.HEAPF32.subarray(n/4,6+n/4)),n=r,n},pipeline_camera_frame_user_data:e=>u(e),pipeline_camera_frame_submit:(t,n,r,a,i,o)=>{ee<n.byteLength&&(e._free(te),ee=n.byteLength,te=e._malloc(ee));let u=te,s=n.byteLength;e.HEAPU8.set(new Uint8Array(n),te);let f=r,_=a,l=i;ne<o.byteLength&&(e._free(ne),ne=o.byteLength,re=e._malloc(ne));let p=re;return e.HEAPF32.set(o,re/4),c(t,u,s,f,_,l,p)},pipeline_camera_frame_camera_attitude:t=>{let n=s(t),r=new Float32Array(16);return r.set(e.HEAPF32.subarray(n/4,16+n/4)),n=r,n},pipeline_motion_accelerometer_submit:(e,t,n,r,a)=>f(e,t,n,r,a),pipeline_motion_rotation_rate_submit:(e,t,n,r,a)=>_(e,t,n,r,a),pipeline_motion_attitude_submit:(e,t,n,r,a)=>l(e,t,n,r,a),camera_source_create:(e,t)=>p(e,t),camera_source_destroy:()=>{d()},image_tracker_create:e=>h(e),image_tracker_destroy:()=>{m()},image_tracker_target_load_from_memory:(t,n)=>{ee<n.byteLength&&(e._free(te),ee=n.byteLength,te=e._malloc(ee));let r=te,a=n.byteLength;return e.HEAPU8.set(new Uint8Array(n),te),b(t,r,a)},image_tracker_target_loaded_version:e=>y(e),image_tracker_enabled:e=>{let t=v(e);return t=1===t,t},image_tracker_enabled_set:(e,t)=>g(e,t?1:0),image_tracker_anchor_count:e=>w(e),image_tracker_anchor_id:(e,t)=>M(e,t),image_tracker_anchor_pose_raw:(t,n)=>{let r=k(t,n),a=new Float32Array(16);return a.set(e.HEAPF32.subarray(r/4,16+r/4)),r=a,r},face_tracker_create:e=>A(e),face_tracker_destroy:()=>{x()},face_tracker_model_load_from_memory:(t,n)=>{ee<n.byteLength&&(e._free(te),ee=n.byteLength,te=e._malloc(ee));let r=te,a=n.byteLength;return e.HEAPU8.set(new Uint8Array(n),te),z(t,r,a)},face_tracker_model_loaded_version:e=>L(e),face_tracker_enabled_set:(e,t)=>E(e,t?1:0),face_tracker_enabled:e=>{let t=T(e);return t=1===t,t},face_tracker_max_faces_set:(e,t)=>O(e,t),face_tracker_max_faces:e=>C(e),face_tracker_anchor_count:e=>S(e),face_tracker_anchor_id:(e,t)=>I(e,t),face_tracker_anchor_pose_raw:(t,n)=>{let r=B(t,n),a=new Float32Array(16);return a.set(e.HEAPF32.subarray(r/4,16+r/4)),r=a,r},face_tracker_anchor_identity_coefficients:(t,n)=>{let r=P(t,n),a=new Float32Array(50);return a.set(e.HEAPF32.subarray(r/4,50+r/4)),r=a,r},face_tracker_anchor_expression_coefficients:(t,n)=>{let r=F(t,n),a=new Float32Array(29);return a.set(e.HEAPF32.subarray(r/4,29+r/4)),r=a,r},face_mesh_create:()=>D(),face_mesh_destroy:()=>{j()},barcode_finder_create:e=>R(e),barcode_finder_destroy:()=>{V()},barcode_finder_enabled_set:(e,t)=>q(e,t?1:0),barcode_finder_enabled:e=>{let t=G(e);return t=1===t,t},barcode_finder_found_number:e=>N(e),barcode_finder_found_text:(e,t)=>U(e,t),barcode_finder_found_format:(e,t)=>W(e,t),barcode_finder_formats:e=>H(e),barcode_finder_formats_set:(e,t)=>Y(e,t),instant_world_tracker_create:e=>Z(e),instant_world_tracker_destroy:()=>{X()},instant_world_tracker_enabled_set:(e,t)=>K(e,t?1:0),instant_world_tracker_enabled:e=>{let t=J(e);return t=1===t,t},instant_world_tracker_anchor_pose_raw:t=>{let n=Q(t),r=new Float32Array(16);return r.set(e.HEAPF32.subarray(n/4,16+n/4)),n=r,n},instant_world_tracker_anchor_pose_set_from_camera_offset:(e,t,n,r,a)=>$(e,t,n,r,a)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(9),a=n(10);t.zappar_server=class{constructor(e,t){this._impl=e,this._sender=t,this._deserializer=new a.MessageDeserializer,this.serializersByPipelineId=new Map,this._pipeline_id_by_pipeline_id=new Map,this._pipeline_by_instance=new Map,this._pipeline_id_by_camera_source_id=new Map,this._camera_source_by_instance=new Map,this._pipeline_id_by_image_tracker_id=new Map,this._image_tracker_by_instance=new Map,this._pipeline_id_by_face_tracker_id=new Map,this._face_tracker_by_instance=new Map,this._pipeline_id_by_face_mesh_id=new Map,this._face_mesh_by_instance=new Map,this._pipeline_id_by_barcode_finder_id=new Map,this._barcode_finder_by_instance=new Map,this._pipeline_id_by_instant_world_tracker_id=new Map,this._instant_world_tracker_by_instance=new Map}processBuffer(e){this._deserializer.setData(e),this._deserializer.forMessages((e,t)=>{switch(e){case 30:this._impl.analytics_project_id_set(t.string());break;case 26:{let e=t.type(),n=this._impl.pipeline_create();this._pipeline_by_instance.set(e,n),this._pipeline_id_by_pipeline_id.set(e,e),this.serializersByPipelineId.set(e,new r.MessageSerializer(t=>{this._sender(e,t)}));break}case 27:{let e=t.type(),n=this._pipeline_by_instance.get(e);if(void 0===n)return;this._impl.pipeline_destroy(n),this._pipeline_by_instance.delete(e);break}case 9:{let e=t.type(),n=this._pipeline_by_instance.get(e);if(void 0===n)return;this._impl.pipeline_frame_update(n);break}case 8:{let e=t.type(),n=this._pipeline_by_instance.get(e);if(void 0===n)return;this._impl.pipeline_camera_frame_submit(n,t.dataWithLength(),t.int(),t.int(),t.int(),t.matrix4x4());break}case 10:{let e=t.type(),n=this._pipeline_by_instance.get(e);if(void 0===n)return;this._impl.pipeline_motion_accelerometer_submit(n,t.timestamp(),t.float(),t.float(),t.float());break}case 11:{let e=t.type(),n=this._pipeline_by_instance.get(e);if(void 0===n)return;this._impl.pipeline_motion_rotation_rate_submit(n,t.timestamp(),t.float(),t.float(),t.float());break}case 12:{let e=t.type(),n=this._pipeline_by_instance.get(e);if(void 0===n)return;this._impl.pipeline_motion_attitude_submit(n,t.timestamp(),t.float(),t.float(),t.float());break}case 28:{let e=t.type(),n=t.type(),r=this._pipeline_by_instance.get(n),a=t.string(),i=this._impl.camera_source_create(r,a);this._camera_source_by_instance.set(e,i),this._pipeline_id_by_camera_source_id.set(e,n);break}case 29:{let e=t.type(),n=this._camera_source_by_instance.get(e);if(void 0===n)return;this._impl.camera_source_destroy(n),this._camera_source_by_instance.delete(e);break}case 2:{let e=t.type(),n=t.type(),r=this._pipeline_by_instance.get(n),a=this._impl.image_tracker_create(r);this._image_tracker_by_instance.set(e,a),this._pipeline_id_by_image_tracker_id.set(e,n);break}case 13:{let e=t.type(),n=this._image_tracker_by_instance.get(e);if(void 0===n)return;this._impl.image_tracker_destroy(n),this._image_tracker_by_instance.delete(e);break}case 4:{let e=t.type(),n=this._image_tracker_by_instance.get(e);if(void 0===n)return;this._impl.image_tracker_target_load_from_memory(n,t.dataWithLength());break}case 3:{let e=t.type(),n=this._image_tracker_by_instance.get(e);if(void 0===n)return;this._impl.image_tracker_enabled_set(n,t.bool());break}case 19:{let e=t.type(),n=t.type(),r=this._pipeline_by_instance.get(n),a=this._impl.face_tracker_create(r);this._face_tracker_by_instance.set(e,a),this._pipeline_id_by_face_tracker_id.set(e,n);break}case 20:{let e=t.type(),n=this._face_tracker_by_instance.get(e);if(void 0===n)return;this._impl.face_tracker_destroy(n),this._face_tracker_by_instance.delete(e);break}case 21:{let e=t.type(),n=this._face_tracker_by_instance.get(e);if(void 0===n)return;this._impl.face_tracker_model_load_from_memory(n,t.dataWithLength());break}case 22:{let e=t.type(),n=this._face_tracker_by_instance.get(e);if(void 0===n)return;this._impl.face_tracker_enabled_set(n,t.bool());break}case 23:{let e=t.type(),n=this._face_tracker_by_instance.get(e);if(void 0===n)return;this._impl.face_tracker_max_faces_set(n,t.int());break}case 24:{let e=t.type(),n=this._impl.face_mesh_create();this._face_mesh_by_instance.set(e,n);break}case 25:{let e=t.type(),n=this._face_mesh_by_instance.get(e);if(void 0===n)return;this._impl.face_mesh_destroy(n),this._face_mesh_by_instance.delete(e);break}case 15:{let e=t.type(),n=t.type(),r=this._pipeline_by_instance.get(n),a=this._impl.barcode_finder_create(r);this._barcode_finder_by_instance.set(e,a),this._pipeline_id_by_barcode_finder_id.set(e,n);break}case 16:{let e=t.type(),n=this._barcode_finder_by_instance.get(e);if(void 0===n)return;this._impl.barcode_finder_destroy(n),this._barcode_finder_by_instance.delete(e);break}case 17:{let e=t.type(),n=this._barcode_finder_by_instance.get(e);if(void 0===n)return;this._impl.barcode_finder_enabled_set(n,t.bool());break}case 18:{let e=t.type(),n=this._barcode_finder_by_instance.get(e);if(void 0===n)return;this._impl.barcode_finder_formats_set(n,t.barcodeFormat());break}case 5:{let e=t.type(),n=t.type(),r=this._pipeline_by_instance.get(n),a=this._impl.instant_world_tracker_create(r);this._instant_world_tracker_by_instance.set(e,a),this._pipeline_id_by_instant_world_tracker_id.set(e,n);break}case 14:{let e=t.type(),n=this._instant_world_tracker_by_instance.get(e);if(void 0===n)return;this._impl.instant_world_tracker_destroy(n),this._instant_world_tracker_by_instance.delete(e);break}case 6:{let e=t.type(),n=this._instant_world_tracker_by_instance.get(e);if(void 0===n)return;this._impl.instant_world_tracker_enabled_set(n,t.bool());break}case 7:{let e=t.type(),n=this._instant_world_tracker_by_instance.get(e);if(void 0===n)return;this._impl.instant_world_tracker_anchor_pose_set_from_camera_offset(n,t.float(),t.float(),t.float(),t.instantTrackerTransformOrientation());break}}})}exploreState(){for(let[e,t]of this._pipeline_by_instance){let n=this._pipeline_id_by_pipeline_id.get(e);if(!n)continue;let r=this.serializersByPipelineId.get(n);r&&(r.sendMessage(7,n=>{n.type(e),n.int(this._impl.pipeline_frame_number(t))}),r.sendMessage(6,n=>{n.type(e),n.cameraModel(this._impl.pipeline_camera_model(t))}),r.sendMessage(5,n=>{n.type(e),n.int(this._impl.pipeline_camera_frame_user_data(t))}),r.sendMessage(11,n=>{n.type(e),n.matrix4x4(this._impl.pipeline_camera_frame_camera_attitude(t))}))}for(let[e,t]of this._camera_source_by_instance){let t=this._pipeline_id_by_camera_source_id.get(e);if(!t)continue;this.serializersByPipelineId.get(t)}for(let[e,t]of this._image_tracker_by_instance){let n=this._pipeline_id_by_image_tracker_id.get(e);if(!n)continue;let r=this.serializersByPipelineId.get(n);if(r){r.sendMessage(18,n=>{n.type(e),n.int(this._impl.image_tracker_target_loaded_version(t))}),r.sendMessage(1,n=>{n.type(e),n.int(this._impl.image_tracker_anchor_count(t))});for(let n=0;n<this._impl.image_tracker_anchor_count(t);n++)r.sendMessage(2,r=>{r.type(e),r.int(n),r.string(this._impl.image_tracker_anchor_id(t,n))});for(let n=0;n<this._impl.image_tracker_anchor_count(t);n++)r.sendMessage(3,r=>{r.type(e),r.int(n),r.matrix4x4(this._impl.image_tracker_anchor_pose_raw(t,n))})}}for(let[e,t]of this._face_tracker_by_instance){let n=this._pipeline_id_by_face_tracker_id.get(e);if(!n)continue;let r=this.serializersByPipelineId.get(n);if(r){r.sendMessage(17,n=>{n.type(e),n.int(this._impl.face_tracker_model_loaded_version(t))}),r.sendMessage(12,n=>{n.type(e),n.int(this._impl.face_tracker_anchor_count(t))});for(let n=0;n<this._impl.face_tracker_anchor_count(t);n++)r.sendMessage(13,r=>{r.type(e),r.int(n),r.string(this._impl.face_tracker_anchor_id(t,n))});for(let n=0;n<this._impl.face_tracker_anchor_count(t);n++)r.sendMessage(14,r=>{r.type(e),r.int(n),r.matrix4x4(this._impl.face_tracker_anchor_pose_raw(t,n))});for(let n=0;n<this._impl.face_tracker_anchor_count(t);n++)r.sendMessage(15,r=>{r.type(e),r.int(n),r.identityCoefficients(this._impl.face_tracker_anchor_identity_coefficients(t,n))});for(let n=0;n<this._impl.face_tracker_anchor_count(t);n++)r.sendMessage(16,r=>{r.type(e),r.int(n),r.expressionCoefficients(this._impl.face_tracker_anchor_expression_coefficients(t,n))})}}for(let[e,t]of this._face_mesh_by_instance){let t=this._pipeline_id_by_face_mesh_id.get(e);if(!t)continue;this.serializersByPipelineId.get(t)}for(let[e,t]of this._barcode_finder_by_instance){let n=this._pipeline_id_by_barcode_finder_id.get(e);if(!n)continue;let r=this.serializersByPipelineId.get(n);if(r){r.sendMessage(8,n=>{n.type(e),n.int(this._impl.barcode_finder_found_number(t))});for(let n=0;n<this._impl.barcode_finder_found_number(t);n++)r.sendMessage(9,r=>{r.type(e),r.int(n),r.string(this._impl.barcode_finder_found_text(t,n))});for(let n=0;n<this._impl.barcode_finder_found_number(t);n++)r.sendMessage(10,r=>{r.type(e),r.int(n),r.barcodeFormat(this._impl.barcode_finder_found_format(t,n))})}}for(let[e,t]of this._instant_world_tracker_by_instance){let n=this._pipeline_id_by_instant_world_tracker_id.get(e);if(!n)continue;let r=this.serializersByPipelineId.get(n);r&&r.sendMessage(4,n=>{n.type(e),n.matrix4x4(this._impl.instant_world_tracker_anchor_pose_raw(t))})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.MessageSerializer=class{constructor(e){this._messageSender=e,this._freeBufferPool=[],this._buffer=new ArrayBuffer(16),this._i32View=new Int32Array(this._buffer),this._f32View=new Float32Array(this._buffer),this._f64View=new Float64Array(this._buffer),this._u8View=new Uint8Array(this._buffer),this._u8cView=new Uint8ClampedArray(this._buffer),this._u16View=new Uint16Array(this._buffer),this._u32View=new Uint32Array(this._buffer),this._offset=1,this._startOffset=-1,this._timeoutSet=!1,this._appender={int:e=>this.int(e),bool:e=>this.int(e?1:0),float:e=>this.float(e),string:e=>this.string(e),dataWithLength:e=>this.arrayBuffer(e),type:e=>this.int(e),matrix4x4:e=>this.float32ArrayBuffer(e),identityCoefficients:e=>this.float32ArrayBuffer(e),expressionCoefficients:e=>this.float32ArrayBuffer(e),cameraModel:e=>this.float32ArrayBuffer(e),timestamp:e=>this.double(e),barcodeFormat:e=>this.int(e),instantTrackerTransformOrientation:e=>this.int(e)},this._freeBufferPool.push(new ArrayBuffer(16)),this._freeBufferPool.push(new ArrayBuffer(16))}bufferReturn(e){this._freeBufferPool.push(e)}_ensureArrayBuffer(e){let t=4*(this._offset+e+8);if(this._buffer&&this._buffer.byteLength>=t)return;let n=void 0;if(!n){let e=t;e--,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,e++,console.log("Creating buffer with size: ",e),n=new ArrayBuffer(e)}let r=this._buffer?this._i32View:void 0;this._buffer=n,this._i32View=new Int32Array(this._buffer),this._f32View=new Float32Array(this._buffer),this._f64View=new Float64Array(this._buffer),this._u8View=new Uint8Array(this._buffer),this._u8cView=new Uint8ClampedArray(this._buffer),this._u16View=new Uint16Array(this._buffer),this._u32View=new Uint32Array(this._buffer),r&&this._i32View.set(r.subarray(0,this._offset))}sendMessage(e,t){this._ensureArrayBuffer(4),this._startOffset=this._offset,this._i32View[this._offset+1]=e,this._offset+=2,t(this._appender),this._i32View[this._startOffset]=this._offset-this._startOffset,this._startOffset=-1,!1===this._timeoutSet&&(this._timeoutSet=!0,setTimeout(()=>{this._timeoutSet=!1,this._send()},0))}_send(){0!==this._freeBufferPool.length&&(this._i32View[0]=this._offset,this._messageSender(this._buffer),this._buffer=void 0,this._buffer=this._freeBufferPool.pop(),this._i32View=new Int32Array(this._buffer),this._f32View=new Float32Array(this._buffer),this._f64View=new Float64Array(this._buffer),this._u8View=new Uint8Array(this._buffer),this._u8cView=new Uint8ClampedArray(this._buffer),this._u16View=new Uint16Array(this._buffer),this._u32View=new Uint32Array(this._buffer),this._offset=1,this._startOffset=-1)}int(e){this._ensureArrayBuffer(1),this._i32View[this._offset]=e,this._offset++}double(e){this._ensureArrayBuffer(2),this._offset%2==1&&this._offset++,this._f64View[this._offset/2]=e,this._offset+=2}float(e){this._ensureArrayBuffer(1),this._f32View[this._offset]=e,this._offset++}int32Array(e){this._ensureArrayBuffer(e.length);for(let t=0;t<e.length;++t)this._i32View[this._offset+t]=e[t];this._offset+=e.length}float32Array(e){this._ensureArrayBuffer(e.length);for(let t=0;t<e.length;++t)this._f32View[this._offset+t]=e[t];this._offset+=e.length}booleanArray(e){this._ensureArrayBuffer(e.length);for(let t=0;t<e.length;++t)this._i32View[this._offset+t]=e[t]?1:0;this._offset+=e.length}uint8ArrayBuffer(e){this._ensureArrayBuffer(e.byteLength/4),this._i32View[this._offset]=e.byteLength,this._offset++,this._u8View.set(e,4*this._offset),this._offset+=e.byteLength>>2,0!=(3&e.byteLength)&&this._offset++}arrayBuffer(e){let t=new Uint8Array(e);this.uint8ArrayBuffer(t)}uint8ClampedArrayBuffer(e){this._ensureArrayBuffer(e.byteLength/4),this._i32View[this._offset]=e.byteLength,this._offset++,this._u8cView.set(e,4*this._offset),this._offset+=e.byteLength>>2,0!=(3&e.byteLength)&&this._offset++}float32ArrayBuffer(e){this._ensureArrayBuffer(e.byteLength/4),this._i32View[this._offset]=e.length,this._offset++,this._f32View.set(e,this._offset),this._offset+=e.length}uint16ArrayBuffer(e){this._ensureArrayBuffer(e.byteLength/4),this._i32View[this._offset]=e.length,this._offset++;let t=2*this._offset;this._u16View.set(e,t),this._offset+=e.length>>1,0!=(1&e.length)&&this._offset++}int32ArrayBuffer(e){this._ensureArrayBuffer(e.byteLength/4),this._i32View[this._offset]=e.length,this._offset++,this._i32View.set(e,this._offset),this._offset+=e.length}uint32ArrayBuffer(e){this._ensureArrayBuffer(e.byteLength/4),this._i32View[this._offset]=e.length,this._offset++,this._u32View.set(e,this._offset),this._offset+=e.length}string(e){let t=(new TextEncoder).encode(e);this._ensureArrayBuffer(t.byteLength/4),this._i32View[this._offset]=t.byteLength,this._offset++,this._u8View.set(t,4*this._offset),this._offset+=t.byteLength>>2,0!=(3&t.byteLength)&&this._offset++}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.MessageDeserializer=class{constructor(){this._buffer=new ArrayBuffer(0),this._i32View=new Int32Array(this._buffer),this._f32View=new Float32Array(this._buffer),this._f64View=new Float64Array(this._buffer),this._u8View=new Uint8Array(this._buffer),this._u16View=new Uint16Array(this._buffer),this._u32View=new Uint32Array(this._buffer),this._offset=0,this._length=0,this._startOffset=-1,this._processor={int:()=>this._i32View[this._startOffset++],bool:()=>1===this._i32View[this._startOffset++],type:()=>this._i32View[this._startOffset++],float:()=>this._f32View[this._startOffset++],timestamp:()=>{this._startOffset%2==1&&this._startOffset++;let e=this._f64View[this._startOffset/2];return this._startOffset+=2,e},string:()=>{let e=this._i32View[this._startOffset++],t=(new TextDecoder).decode(new Uint8Array(this._buffer,4*this._startOffset,e));return this._startOffset+=e>>2,0!=(3&e)&&this._startOffset++,t},dataWithLength:()=>{let e=this._i32View[this._startOffset++],t=new Uint8Array(e);return t.set(this._u8View.subarray(4*this._startOffset,4*this._startOffset+e)),this._startOffset+=t.byteLength>>2,0!=(3&t.byteLength)&&this._startOffset++,t.buffer},matrix4x4:()=>{let e=this._i32View[this._startOffset++],t=new Float32Array(e);return t.set(this._f32View.subarray(this._startOffset,this._startOffset+16)),this._startOffset+=e,t},identityCoefficients:()=>{let e=this._i32View[this._startOffset++],t=new Float32Array(e);return t.set(this._f32View.subarray(this._startOffset,this._startOffset+50)),this._startOffset+=e,t},expressionCoefficients:()=>{let e=this._i32View[this._startOffset++],t=new Float32Array(e);return t.set(this._f32View.subarray(this._startOffset,this._startOffset+29)),this._startOffset+=e,t},cameraModel:()=>{let e=this._i32View[this._startOffset++],t=new Float32Array(e);return t.set(this._f32View.subarray(this._startOffset,this._startOffset+6)),this._startOffset+=e,t},barcodeFormat:()=>this._i32View[this._startOffset++],instantTrackerTransformOrientation:()=>this._i32View[this._startOffset++]}}setData(e){this._buffer=e,this._i32View=new Int32Array(this._buffer),this._f32View=new Float32Array(this._buffer),this._f64View=new Float64Array(this._buffer),this._u8View=new Uint8Array(this._buffer),this._u16View=new Uint16Array(this._buffer),this._u32View=new Uint32Array(this._buffer),this._offset=0,this._length=0,e.byteLength>=4&&(this._offset=1,this._length=this._i32View[0]),this._startOffset=-1}hasMessage(){return this._offset+1<this._length}forMessages(e){for(;this.hasMessage();){let t=this._i32View[this._offset],n=this._i32View[this._offset+1];this._startOffset=this._offset+2,this._offset+=t,e(n,this._processor)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(12);t.MsgManager=class{constructor(){this.onOutgoingMessage=new r.Event,this.onIncomingMessage=new r.Event1,this._outgoingMessages=[]}postIncomingMessage(e){this.onIncomingMessage.emit(e)}postOutgoingMessage(e,t){this._outgoingMessages.push({msg:e,transferables:t}),this.onOutgoingMessage.emit()}getOutgoingMessages(){let e=this._outgoingMessages;return this._outgoingMessages=[],e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Event=class{constructor(){this._funcs=[]}bind(e){this._funcs.push(e)}unbind(e){let t=this._funcs.indexOf(e);t>-1&&this._funcs.splice(t,1)}emit(){for(var e=0,t=this._funcs.length;e<t;e++)this._funcs[e]()}};t.Event1=class{constructor(){this._funcs=[]}bind(e){this._funcs.push(e)}unbind(e){let t=this._funcs.indexOf(e);t>-1&&this._funcs.splice(t,1)}emit(e){for(var t=0,n=this._funcs.length;t<n;t++)this._funcs[t](e)}};t.Event2=class{constructor(){this._funcs=[]}bind(e){this._funcs.push(e)}unbind(e){let t=this._funcs.indexOf(e);t>-1&&this._funcs.splice(t,1)}emit(e,t){for(var n=0,r=this._funcs.length;n<r;n++)this._funcs[n](e,t)}};t.Event3=class{constructor(){this._funcs=[]}bind(e){this._funcs.push(e)}unbind(e){let t=this._funcs.indexOf(e);t>-1&&this._funcs.splice(t,1)}emit(e,t,n){for(var r=0,a=this._funcs.length;r<a;r++)this._funcs[r](e,t,n)}};t.Event5=class{constructor(){this._funcs=[]}bind(e){this._funcs.push(e)}unbind(e){let t=this._funcs.indexOf(e);t>-1&&this._funcs.splice(t,1)}emit(e,t,n,r,a){for(var i=0,o=this._funcs.length;i<o;i++)this._funcs[i](e,t,n,r,a)}}},function(e,t,n){"use strict";n.r(t),t.default=n.p+"0529f271b32c04c80b87f04345cac7f8.wasm"},function(e,t,n){"use strict";n.r(t),n.d(t,"glMatrix",(function(){return r})),n.d(t,"mat2",(function(){return a})),n.d(t,"mat2d",(function(){return i})),n.d(t,"mat3",(function(){return o})),n.d(t,"mat4",(function(){return u})),n.d(t,"quat",(function(){return f})),n.d(t,"quat2",(function(){return _})),n.d(t,"vec2",(function(){return l})),n.d(t,"vec3",(function(){return c})),n.d(t,"vec4",(function(){return s}));var r={};n.r(r),n.d(r,"EPSILON",(function(){return p})),n.d(r,"ARRAY_TYPE",(function(){return d})),n.d(r,"RANDOM",(function(){return h})),n.d(r,"setMatrixArrayType",(function(){return m})),n.d(r,"toRadian",(function(){return y})),n.d(r,"equals",(function(){return v}));var a={};n.r(a),n.d(a,"create",(function(){return g})),n.d(a,"clone",(function(){return w})),n.d(a,"copy",(function(){return M})),n.d(a,"identity",(function(){return k})),n.d(a,"fromValues",(function(){return A})),n.d(a,"set",(function(){return x})),n.d(a,"transpose",(function(){return z})),n.d(a,"invert",(function(){return L})),n.d(a,"adjoint",(function(){return E})),n.d(a,"determinant",(function(){return T})),n.d(a,"multiply",(function(){return O})),n.d(a,"rotate",(function(){return C})),n.d(a,"scale",(function(){return S})),n.d(a,"fromRotation",(function(){return I})),n.d(a,"fromScaling",(function(){return B})),n.d(a,"str",(function(){return P})),n.d(a,"frob",(function(){return F})),n.d(a,"LDU",(function(){return D})),n.d(a,"add",(function(){return j})),n.d(a,"subtract",(function(){return R})),n.d(a,"exactEquals",(function(){return V})),n.d(a,"equals",(function(){return q})),n.d(a,"multiplyScalar",(function(){return G})),n.d(a,"multiplyScalarAndAdd",(function(){return N})),n.d(a,"mul",(function(){return U})),n.d(a,"sub",(function(){return W}));var i={};n.r(i),n.d(i,"create",(function(){return H})),n.d(i,"clone",(function(){return Y})),n.d(i,"copy",(function(){return Z})),n.d(i,"identity",(function(){return X})),n.d(i,"fromValues",(function(){return K})),n.d(i,"set",(function(){return J})),n.d(i,"invert",(function(){return Q})),n.d(i,"determinant",(function(){return $})),n.d(i,"multiply",(function(){return ee})),n.d(i,"rotate",(function(){return te})),n.d(i,"scale",(function(){return ne})),n.d(i,"translate",(function(){return re})),n.d(i,"fromRotation",(function(){return ae})),n.d(i,"fromScaling",(function(){return ie})),n.d(i,"fromTranslation",(function(){return oe})),n.d(i,"str",(function(){return ue})),n.d(i,"frob",(function(){return ce})),n.d(i,"add",(function(){return se})),n.d(i,"subtract",(function(){return fe})),n.d(i,"multiplyScalar",(function(){return _e})),n.d(i,"multiplyScalarAndAdd",(function(){return le})),n.d(i,"exactEquals",(function(){return pe})),n.d(i,"equals",(function(){return de})),n.d(i,"mul",(function(){return he})),n.d(i,"sub",(function(){return me}));var o={};n.r(o),n.d(o,"create",(function(){return be})),n.d(o,"fromMat4",(function(){return ye})),n.d(o,"clone",(function(){return ve})),n.d(o,"copy",(function(){return ge})),n.d(o,"fromValues",(function(){return we})),n.d(o,"set",(function(){return Me})),n.d(o,"identity",(function(){return ke})),n.d(o,"transpose",(function(){return Ae})),n.d(o,"invert",(function(){return xe})),n.d(o,"adjoint",(function(){return ze})),n.d(o,"determinant",(function(){return Le})),n.d(o,"multiply",(function(){return Ee})),n.d(o,"translate",(function(){return Te})),n.d(o,"rotate",(function(){return Oe})),n.d(o,"scale",(function(){return Ce})),n.d(o,"fromTranslation",(function(){return Se})),n.d(o,"fromRotation",(function(){return Ie})),n.d(o,"fromScaling",(function(){return Be})),n.d(o,"fromMat2d",(function(){return Pe})),n.d(o,"fromQuat",(function(){return Fe})),n.d(o,"normalFromMat4",(function(){return De})),n.d(o,"projection",(function(){return je})),n.d(o,"str",(function(){return Re})),n.d(o,"frob",(function(){return Ve})),n.d(o,"add",(function(){return qe})),n.d(o,"subtract",(function(){return Ge})),n.d(o,"multiplyScalar",(function(){return Ne})),n.d(o,"multiplyScalarAndAdd",(function(){return Ue})),n.d(o,"exactEquals",(function(){return We})),n.d(o,"equals",(function(){return He})),n.d(o,"mul",(function(){return Ye})),n.d(o,"sub",(function(){return Ze}));var u={};n.r(u),n.d(u,"create",(function(){return Xe})),n.d(u,"clone",(function(){return Ke})),n.d(u,"copy",(function(){return Je})),n.d(u,"fromValues",(function(){return Qe})),n.d(u,"set",(function(){return $e})),n.d(u,"identity",(function(){return et})),n.d(u,"transpose",(function(){return tt})),n.d(u,"invert",(function(){return nt})),n.d(u,"adjoint",(function(){return rt})),n.d(u,"determinant",(function(){return at})),n.d(u,"multiply",(function(){return it})),n.d(u,"translate",(function(){return ot})),n.d(u,"scale",(function(){return ut})),n.d(u,"rotate",(function(){return ct})),n.d(u,"rotateX",(function(){return st})),n.d(u,"rotateY",(function(){return ft})),n.d(u,"rotateZ",(function(){return _t})),n.d(u,"fromTranslation",(function(){return lt})),n.d(u,"fromScaling",(function(){return pt})),n.d(u,"fromRotation",(function(){return dt})),n.d(u,"fromXRotation",(function(){return ht})),n.d(u,"fromYRotation",(function(){return mt})),n.d(u,"fromZRotation",(function(){return bt})),n.d(u,"fromRotationTranslation",(function(){return yt})),n.d(u,"fromQuat2",(function(){return vt})),n.d(u,"getTranslation",(function(){return gt})),n.d(u,"getScaling",(function(){return wt})),n.d(u,"getRotation",(function(){return Mt})),n.d(u,"fromRotationTranslationScale",(function(){return kt})),n.d(u,"fromRotationTranslationScaleOrigin",(function(){return At})),n.d(u,"fromQuat",(function(){return xt})),n.d(u,"frustum",(function(){return zt})),n.d(u,"perspective",(function(){return Lt})),n.d(u,"perspectiveFromFieldOfView",(function(){return Et})),n.d(u,"ortho",(function(){return Tt})),n.d(u,"lookAt",(function(){return Ot})),n.d(u,"targetTo",(function(){return Ct})),n.d(u,"str",(function(){return St})),n.d(u,"frob",(function(){return It})),n.d(u,"add",(function(){return Bt})),n.d(u,"subtract",(function(){return Pt})),n.d(u,"multiplyScalar",(function(){return Ft})),n.d(u,"multiplyScalarAndAdd",(function(){return Dt})),n.d(u,"exactEquals",(function(){return jt})),n.d(u,"equals",(function(){return Rt})),n.d(u,"mul",(function(){return Vt})),n.d(u,"sub",(function(){return qt}));var c={};n.r(c),n.d(c,"create",(function(){return Gt})),n.d(c,"clone",(function(){return Nt})),n.d(c,"length",(function(){return Ut})),n.d(c,"fromValues",(function(){return Wt})),n.d(c,"copy",(function(){return Ht})),n.d(c,"set",(function(){return Yt})),n.d(c,"add",(function(){return Zt})),n.d(c,"subtract",(function(){return Xt})),n.d(c,"multiply",(function(){return Kt})),n.d(c,"divide",(function(){return Jt})),n.d(c,"ceil",(function(){return Qt})),n.d(c,"floor",(function(){return $t})),n.d(c,"min",(function(){return en})),n.d(c,"max",(function(){return tn})),n.d(c,"round",(function(){return nn})),n.d(c,"scale",(function(){return rn})),n.d(c,"scaleAndAdd",(function(){return an})),n.d(c,"distance",(function(){return on})),n.d(c,"squaredDistance",(function(){return un})),n.d(c,"squaredLength",(function(){return cn})),n.d(c,"negate",(function(){return sn})),n.d(c,"inverse",(function(){return fn})),n.d(c,"normalize",(function(){return _n})),n.d(c,"dot",(function(){return ln})),n.d(c,"cross",(function(){return pn})),n.d(c,"lerp",(function(){return dn})),n.d(c,"hermite",(function(){return hn})),n.d(c,"bezier",(function(){return mn})),n.d(c,"random",(function(){return bn})),n.d(c,"transformMat4",(function(){return yn})),n.d(c,"transformMat3",(function(){return vn})),n.d(c,"transformQuat",(function(){return gn})),n.d(c,"rotateX",(function(){return wn})),n.d(c,"rotateY",(function(){return Mn})),n.d(c,"rotateZ",(function(){return kn})),n.d(c,"angle",(function(){return An})),n.d(c,"zero",(function(){return xn})),n.d(c,"str",(function(){return zn})),n.d(c,"exactEquals",(function(){return Ln})),n.d(c,"equals",(function(){return En})),n.d(c,"sub",(function(){return On})),n.d(c,"mul",(function(){return Cn})),n.d(c,"div",(function(){return Sn})),n.d(c,"dist",(function(){return In})),n.d(c,"sqrDist",(function(){return Bn})),n.d(c,"len",(function(){return Pn})),n.d(c,"sqrLen",(function(){return Fn})),n.d(c,"forEach",(function(){return Dn}));var s={};n.r(s),n.d(s,"create",(function(){return jn})),n.d(s,"clone",(function(){return Rn})),n.d(s,"fromValues",(function(){return Vn})),n.d(s,"copy",(function(){return qn})),n.d(s,"set",(function(){return Gn})),n.d(s,"add",(function(){return Nn})),n.d(s,"subtract",(function(){return Un})),n.d(s,"multiply",(function(){return Wn})),n.d(s,"divide",(function(){return Hn})),n.d(s,"ceil",(function(){return Yn})),n.d(s,"floor",(function(){return Zn})),n.d(s,"min",(function(){return Xn})),n.d(s,"max",(function(){return Kn})),n.d(s,"round",(function(){return Jn})),n.d(s,"scale",(function(){return Qn})),n.d(s,"scaleAndAdd",(function(){return $n})),n.d(s,"distance",(function(){return er})),n.d(s,"squaredDistance",(function(){return tr})),n.d(s,"length",(function(){return nr})),n.d(s,"squaredLength",(function(){return rr})),n.d(s,"negate",(function(){return ar})),n.d(s,"inverse",(function(){return ir})),n.d(s,"normalize",(function(){return or})),n.d(s,"dot",(function(){return ur})),n.d(s,"cross",(function(){return cr})),n.d(s,"lerp",(function(){return sr})),n.d(s,"random",(function(){return fr})),n.d(s,"transformMat4",(function(){return _r})),n.d(s,"transformQuat",(function(){return lr})),n.d(s,"zero",(function(){return pr})),n.d(s,"str",(function(){return dr})),n.d(s,"exactEquals",(function(){return hr})),n.d(s,"equals",(function(){return mr})),n.d(s,"sub",(function(){return br})),n.d(s,"mul",(function(){return yr})),n.d(s,"div",(function(){return vr})),n.d(s,"dist",(function(){return gr})),n.d(s,"sqrDist",(function(){return wr})),n.d(s,"len",(function(){return Mr})),n.d(s,"sqrLen",(function(){return kr})),n.d(s,"forEach",(function(){return Ar}));var f={};n.r(f),n.d(f,"create",(function(){return xr})),n.d(f,"identity",(function(){return zr})),n.d(f,"setAxisAngle",(function(){return Lr})),n.d(f,"getAxisAngle",(function(){return Er})),n.d(f,"getAngle",(function(){return Tr})),n.d(f,"multiply",(function(){return Or})),n.d(f,"rotateX",(function(){return Cr})),n.d(f,"rotateY",(function(){return Sr})),n.d(f,"rotateZ",(function(){return Ir})),n.d(f,"calculateW",(function(){return Br})),n.d(f,"exp",(function(){return Pr})),n.d(f,"ln",(function(){return Fr})),n.d(f,"pow",(function(){return Dr})),n.d(f,"slerp",(function(){return jr})),n.d(f,"random",(function(){return Rr})),n.d(f,"invert",(function(){return Vr})),n.d(f,"conjugate",(function(){return qr})),n.d(f,"fromMat3",(function(){return Gr})),n.d(f,"fromEuler",(function(){return Nr})),n.d(f,"str",(function(){return Ur})),n.d(f,"clone",(function(){return Jr})),n.d(f,"fromValues",(function(){return Qr})),n.d(f,"copy",(function(){return $r})),n.d(f,"set",(function(){return ea})),n.d(f,"add",(function(){return ta})),n.d(f,"mul",(function(){return na})),n.d(f,"scale",(function(){return ra})),n.d(f,"dot",(function(){return aa})),n.d(f,"lerp",(function(){return ia})),n.d(f,"length",(function(){return oa})),n.d(f,"len",(function(){return ua})),n.d(f,"squaredLength",(function(){return ca})),n.d(f,"sqrLen",(function(){return sa})),n.d(f,"normalize",(function(){return fa})),n.d(f,"exactEquals",(function(){return _a})),n.d(f,"equals",(function(){return la})),n.d(f,"rotationTo",(function(){return pa})),n.d(f,"sqlerp",(function(){return da})),n.d(f,"setAxes",(function(){return ha}));var _={};n.r(_),n.d(_,"create",(function(){return ma})),n.d(_,"clone",(function(){return ba})),n.d(_,"fromValues",(function(){return ya})),n.d(_,"fromRotationTranslationValues",(function(){return va})),n.d(_,"fromRotationTranslation",(function(){return ga})),n.d(_,"fromTranslation",(function(){return wa})),n.d(_,"fromRotation",(function(){return Ma})),n.d(_,"fromMat4",(function(){return ka})),n.d(_,"copy",(function(){return Aa})),n.d(_,"identity",(function(){return xa})),n.d(_,"set",(function(){return za})),n.d(_,"getReal",(function(){return La})),n.d(_,"getDual",(function(){return Ea})),n.d(_,"setReal",(function(){return Ta})),n.d(_,"setDual",(function(){return Oa})),n.d(_,"getTranslation",(function(){return Ca})),n.d(_,"translate",(function(){return Sa})),n.d(_,"rotateX",(function(){return Ia})),n.d(_,"rotateY",(function(){return Ba})),n.d(_,"rotateZ",(function(){return Pa})),n.d(_,"rotateByQuatAppend",(function(){return Fa})),n.d(_,"rotateByQuatPrepend",(function(){return Da})),n.d(_,"rotateAroundAxis",(function(){return ja})),n.d(_,"add",(function(){return Ra})),n.d(_,"multiply",(function(){return Va})),n.d(_,"mul",(function(){return qa})),n.d(_,"scale",(function(){return Ga})),n.d(_,"dot",(function(){return Na})),n.d(_,"lerp",(function(){return Ua})),n.d(_,"invert",(function(){return Wa})),n.d(_,"conjugate",(function(){return Ha})),n.d(_,"length",(function(){return Ya})),n.d(_,"len",(function(){return Za})),n.d(_,"squaredLength",(function(){return Xa})),n.d(_,"sqrLen",(function(){return Ka})),n.d(_,"normalize",(function(){return Ja})),n.d(_,"str",(function(){return Qa})),n.d(_,"exactEquals",(function(){return $a})),n.d(_,"equals",(function(){return ei}));var l={};n.r(l),n.d(l,"create",(function(){return ti})),n.d(l,"clone",(function(){return ni})),n.d(l,"fromValues",(function(){return ri})),n.d(l,"copy",(function(){return ai})),n.d(l,"set",(function(){return ii})),n.d(l,"add",(function(){return oi})),n.d(l,"subtract",(function(){return ui})),n.d(l,"multiply",(function(){return ci})),n.d(l,"divide",(function(){return si})),n.d(l,"ceil",(function(){return fi})),n.d(l,"floor",(function(){return _i})),n.d(l,"min",(function(){return li})),n.d(l,"max",(function(){return pi})),n.d(l,"round",(function(){return di})),n.d(l,"scale",(function(){return hi})),n.d(l,"scaleAndAdd",(function(){return mi})),n.d(l,"distance",(function(){return bi})),n.d(l,"squaredDistance",(function(){return yi})),n.d(l,"length",(function(){return vi})),n.d(l,"squaredLength",(function(){return gi})),n.d(l,"negate",(function(){return wi})),n.d(l,"inverse",(function(){return Mi})),n.d(l,"normalize",(function(){return ki})),n.d(l,"dot",(function(){return Ai})),n.d(l,"cross",(function(){return xi})),n.d(l,"lerp",(function(){return zi})),n.d(l,"random",(function(){return Li})),n.d(l,"transformMat2",(function(){return Ei})),n.d(l,"transformMat2d",(function(){return Ti})),n.d(l,"transformMat3",(function(){return Oi})),n.d(l,"transformMat4",(function(){return Ci})),n.d(l,"rotate",(function(){return Si})),n.d(l,"angle",(function(){return Ii})),n.d(l,"zero",(function(){return Bi})),n.d(l,"str",(function(){return Pi})),n.d(l,"exactEquals",(function(){return Fi})),n.d(l,"equals",(function(){return Di})),n.d(l,"len",(function(){return ji})),n.d(l,"sub",(function(){return Ri})),n.d(l,"mul",(function(){return Vi})),n.d(l,"div",(function(){return qi})),n.d(l,"dist",(function(){return Gi})),n.d(l,"sqrDist",(function(){return Ni})),n.d(l,"sqrLen",(function(){return Ui})),n.d(l,"forEach",(function(){return Wi}));var p=1e-6,d="undefined"!=typeof Float32Array?Float32Array:Array,h=Math.random;function m(e){d=e}var b=Math.PI/180;function y(e){return e*b}function v(e,t){return Math.abs(e-t)<=p*Math.max(1,Math.abs(e),Math.abs(t))}function g(){var e=new d(4);return d!=Float32Array&&(e[1]=0,e[2]=0),e[0]=1,e[3]=1,e}function w(e){var t=new d(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function M(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function k(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e}function A(e,t,n,r){var a=new d(4);return a[0]=e,a[1]=t,a[2]=n,a[3]=r,a}function x(e,t,n,r,a){return e[0]=t,e[1]=n,e[2]=r,e[3]=a,e}function z(e,t){if(e===t){var n=t[1];e[1]=t[2],e[2]=n}else e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3];return e}function L(e,t){var n=t[0],r=t[1],a=t[2],i=t[3],o=n*i-a*r;return o?(o=1/o,e[0]=i*o,e[1]=-r*o,e[2]=-a*o,e[3]=n*o,e):null}function E(e,t){var n=t[0];return e[0]=t[3],e[1]=-t[1],e[2]=-t[2],e[3]=n,e}function T(e){return e[0]*e[3]-e[2]*e[1]}function O(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=n[0],c=n[1],s=n[2],f=n[3];return e[0]=r*u+i*c,e[1]=a*u+o*c,e[2]=r*s+i*f,e[3]=a*s+o*f,e}function C(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=Math.sin(n),c=Math.cos(n);return e[0]=r*c+i*u,e[1]=a*c+o*u,e[2]=r*-u+i*c,e[3]=a*-u+o*c,e}function S(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=n[0],c=n[1];return e[0]=r*u,e[1]=a*u,e[2]=i*c,e[3]=o*c,e}function I(e,t){var n=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=n,e[2]=-n,e[3]=r,e}function B(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=t[1],e}function P(e){return"mat2("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}function F(e){return Math.hypot(e[0],e[1],e[2],e[3])}function D(e,t,n,r){return e[2]=r[2]/r[0],n[0]=r[0],n[1]=r[1],n[3]=r[3]-e[2]*n[1],[e,t,n]}function j(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e}function R(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e}function V(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function q(e,t){var n=e[0],r=e[1],a=e[2],i=e[3],o=t[0],u=t[1],c=t[2],s=t[3];return Math.abs(n-o)<=p*Math.max(1,Math.abs(n),Math.abs(o))&&Math.abs(r-u)<=p*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(a-c)<=p*Math.max(1,Math.abs(a),Math.abs(c))&&Math.abs(i-s)<=p*Math.max(1,Math.abs(i),Math.abs(s))}function G(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e}function N(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e}Math.hypot||(Math.hypot=function(){for(var e=0,t=arguments.length;t--;)e+=arguments[t]*arguments[t];return Math.sqrt(e)});var U=O,W=R;function H(){var e=new d(6);return d!=Float32Array&&(e[1]=0,e[2]=0,e[4]=0,e[5]=0),e[0]=1,e[3]=1,e}function Y(e){var t=new d(6);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function Z(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function X(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e}function K(e,t,n,r,a,i){var o=new d(6);return o[0]=e,o[1]=t,o[2]=n,o[3]=r,o[4]=a,o[5]=i,o}function J(e,t,n,r,a,i,o){return e[0]=t,e[1]=n,e[2]=r,e[3]=a,e[4]=i,e[5]=o,e}function Q(e,t){var n=t[0],r=t[1],a=t[2],i=t[3],o=t[4],u=t[5],c=n*i-r*a;return c?(c=1/c,e[0]=i*c,e[1]=-r*c,e[2]=-a*c,e[3]=n*c,e[4]=(a*u-i*o)*c,e[5]=(r*o-n*u)*c,e):null}function $(e){return e[0]*e[3]-e[1]*e[2]}function ee(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=t[4],c=t[5],s=n[0],f=n[1],_=n[2],l=n[3],p=n[4],d=n[5];return e[0]=r*s+i*f,e[1]=a*s+o*f,e[2]=r*_+i*l,e[3]=a*_+o*l,e[4]=r*p+i*d+u,e[5]=a*p+o*d+c,e}function te(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=t[4],c=t[5],s=Math.sin(n),f=Math.cos(n);return e[0]=r*f+i*s,e[1]=a*f+o*s,e[2]=r*-s+i*f,e[3]=a*-s+o*f,e[4]=u,e[5]=c,e}function ne(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=t[4],c=t[5],s=n[0],f=n[1];return e[0]=r*s,e[1]=a*s,e[2]=i*f,e[3]=o*f,e[4]=u,e[5]=c,e}function re(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=t[4],c=t[5],s=n[0],f=n[1];return e[0]=r,e[1]=a,e[2]=i,e[3]=o,e[4]=r*s+i*f+u,e[5]=a*s+o*f+c,e}function ae(e,t){var n=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=n,e[2]=-n,e[3]=r,e[4]=0,e[5]=0,e}function ie(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=t[1],e[4]=0,e[5]=0,e}function oe(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=t[0],e[5]=t[1],e}function ue(e){return"mat2d("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+")"}function ce(e){return Math.hypot(e[0],e[1],e[2],e[3],e[4],e[5],1)}function se(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e}function fe(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e[4]=t[4]-n[4],e[5]=t[5]-n[5],e}function _e(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e}function le(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e[4]=t[4]+n[4]*r,e[5]=t[5]+n[5]*r,e}function pe(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]}function de(e,t){var n=e[0],r=e[1],a=e[2],i=e[3],o=e[4],u=e[5],c=t[0],s=t[1],f=t[2],_=t[3],l=t[4],d=t[5];return Math.abs(n-c)<=p*Math.max(1,Math.abs(n),Math.abs(c))&&Math.abs(r-s)<=p*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(a-f)<=p*Math.max(1,Math.abs(a),Math.abs(f))&&Math.abs(i-_)<=p*Math.max(1,Math.abs(i),Math.abs(_))&&Math.abs(o-l)<=p*Math.max(1,Math.abs(o),Math.abs(l))&&Math.abs(u-d)<=p*Math.max(1,Math.abs(u),Math.abs(d))}var he=ee,me=fe;function be(){var e=new d(9);return d!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[5]=0,e[6]=0,e[7]=0),e[0]=1,e[4]=1,e[8]=1,e}function ye(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e}function ve(e){var t=new d(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function ge(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function we(e,t,n,r,a,i,o,u,c){var s=new d(9);return s[0]=e,s[1]=t,s[2]=n,s[3]=r,s[4]=a,s[5]=i,s[6]=o,s[7]=u,s[8]=c,s}function Me(e,t,n,r,a,i,o,u,c,s){return e[0]=t,e[1]=n,e[2]=r,e[3]=a,e[4]=i,e[5]=o,e[6]=u,e[7]=c,e[8]=s,e}function ke(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function Ae(e,t){if(e===t){var n=t[1],r=t[2],a=t[5];e[1]=t[3],e[2]=t[6],e[3]=n,e[5]=t[7],e[6]=r,e[7]=a}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e}function xe(e,t){var n=t[0],r=t[1],a=t[2],i=t[3],o=t[4],u=t[5],c=t[6],s=t[7],f=t[8],_=f*o-u*s,l=-f*i+u*c,p=s*i-o*c,d=n*_+r*l+a*p;return d?(d=1/d,e[0]=_*d,e[1]=(-f*r+a*s)*d,e[2]=(u*r-a*o)*d,e[3]=l*d,e[4]=(f*n-a*c)*d,e[5]=(-u*n+a*i)*d,e[6]=p*d,e[7]=(-s*n+r*c)*d,e[8]=(o*n-r*i)*d,e):null}function ze(e,t){var n=t[0],r=t[1],a=t[2],i=t[3],o=t[4],u=t[5],c=t[6],s=t[7],f=t[8];return e[0]=o*f-u*s,e[1]=a*s-r*f,e[2]=r*u-a*o,e[3]=u*c-i*f,e[4]=n*f-a*c,e[5]=a*i-n*u,e[6]=i*s-o*c,e[7]=r*c-n*s,e[8]=n*o-r*i,e}function Le(e){var t=e[0],n=e[1],r=e[2],a=e[3],i=e[4],o=e[5],u=e[6],c=e[7],s=e[8];return t*(s*i-o*c)+n*(-s*a+o*u)+r*(c*a-i*u)}function Ee(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=t[4],c=t[5],s=t[6],f=t[7],_=t[8],l=n[0],p=n[1],d=n[2],h=n[3],m=n[4],b=n[5],y=n[6],v=n[7],g=n[8];return e[0]=l*r+p*o+d*s,e[1]=l*a+p*u+d*f,e[2]=l*i+p*c+d*_,e[3]=h*r+m*o+b*s,e[4]=h*a+m*u+b*f,e[5]=h*i+m*c+b*_,e[6]=y*r+v*o+g*s,e[7]=y*a+v*u+g*f,e[8]=y*i+v*c+g*_,e}function Te(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=t[4],c=t[5],s=t[6],f=t[7],_=t[8],l=n[0],p=n[1];return e[0]=r,e[1]=a,e[2]=i,e[3]=o,e[4]=u,e[5]=c,e[6]=l*r+p*o+s,e[7]=l*a+p*u+f,e[8]=l*i+p*c+_,e}function Oe(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=t[4],c=t[5],s=t[6],f=t[7],_=t[8],l=Math.sin(n),p=Math.cos(n);return e[0]=p*r+l*o,e[1]=p*a+l*u,e[2]=p*i+l*c,e[3]=p*o-l*r,e[4]=p*u-l*a,e[5]=p*c-l*i,e[6]=s,e[7]=f,e[8]=_,e}function Ce(e,t,n){var r=n[0],a=n[1];return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=a*t[3],e[4]=a*t[4],e[5]=a*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function Se(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=t[0],e[7]=t[1],e[8]=1,e}function Ie(e,t){var n=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=n,e[2]=0,e[3]=-n,e[4]=r,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function Be(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=t[1],e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function Pe(e,t){return e[0]=t[0],e[1]=t[1],e[2]=0,e[3]=t[2],e[4]=t[3],e[5]=0,e[6]=t[4],e[7]=t[5],e[8]=1,e}function Fe(e,t){var n=t[0],r=t[1],a=t[2],i=t[3],o=n+n,u=r+r,c=a+a,s=n*o,f=r*o,_=r*u,l=a*o,p=a*u,d=a*c,h=i*o,m=i*u,b=i*c;return e[0]=1-_-d,e[3]=f-b,e[6]=l+m,e[1]=f+b,e[4]=1-s-d,e[7]=p-h,e[2]=l-m,e[5]=p+h,e[8]=1-s-_,e}function De(e,t){var n=t[0],r=t[1],a=t[2],i=t[3],o=t[4],u=t[5],c=t[6],s=t[7],f=t[8],_=t[9],l=t[10],p=t[11],d=t[12],h=t[13],m=t[14],b=t[15],y=n*u-r*o,v=n*c-a*o,g=n*s-i*o,w=r*c-a*u,M=r*s-i*u,k=a*s-i*c,A=f*h-_*d,x=f*m-l*d,z=f*b-p*d,L=_*m-l*h,E=_*b-p*h,T=l*b-p*m,O=y*T-v*E+g*L+w*z-M*x+k*A;return O?(O=1/O,e[0]=(u*T-c*E+s*L)*O,e[1]=(c*z-o*T-s*x)*O,e[2]=(o*E-u*z+s*A)*O,e[3]=(a*E-r*T-i*L)*O,e[4]=(n*T-a*z+i*x)*O,e[5]=(r*z-n*E-i*A)*O,e[6]=(h*k-m*M+b*w)*O,e[7]=(m*g-d*k-b*v)*O,e[8]=(d*M-h*g+b*y)*O,e):null}function je(e,t,n){return e[0]=2/t,e[1]=0,e[2]=0,e[3]=0,e[4]=-2/n,e[5]=0,e[6]=-1,e[7]=1,e[8]=1,e}function Re(e){return"mat3("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+")"}function Ve(e){return Math.hypot(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8])}function qe(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e[6]=t[6]+n[6],e[7]=t[7]+n[7],e[8]=t[8]+n[8],e}function Ge(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e[4]=t[4]-n[4],e[5]=t[5]-n[5],e[6]=t[6]-n[6],e[7]=t[7]-n[7],e[8]=t[8]-n[8],e}function Ne(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*n,e}function Ue(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e[4]=t[4]+n[4]*r,e[5]=t[5]+n[5]*r,e[6]=t[6]+n[6]*r,e[7]=t[7]+n[7]*r,e[8]=t[8]+n[8]*r,e}function We(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]}function He(e,t){var n=e[0],r=e[1],a=e[2],i=e[3],o=e[4],u=e[5],c=e[6],s=e[7],f=e[8],_=t[0],l=t[1],d=t[2],h=t[3],m=t[4],b=t[5],y=t[6],v=t[7],g=t[8];return Math.abs(n-_)<=p*Math.max(1,Math.abs(n),Math.abs(_))&&Math.abs(r-l)<=p*Math.max(1,Math.abs(r),Math.abs(l))&&Math.abs(a-d)<=p*Math.max(1,Math.abs(a),Math.abs(d))&&Math.abs(i-h)<=p*Math.max(1,Math.abs(i),Math.abs(h))&&Math.abs(o-m)<=p*Math.max(1,Math.abs(o),Math.abs(m))&&Math.abs(u-b)<=p*Math.max(1,Math.abs(u),Math.abs(b))&&Math.abs(c-y)<=p*Math.max(1,Math.abs(c),Math.abs(y))&&Math.abs(s-v)<=p*Math.max(1,Math.abs(s),Math.abs(v))&&Math.abs(f-g)<=p*Math.max(1,Math.abs(f),Math.abs(g))}var Ye=Ee,Ze=Ge;function Xe(){var e=new d(16);return d!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function Ke(e){var t=new d(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function Je(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function Qe(e,t,n,r,a,i,o,u,c,s,f,_,l,p,h,m){var b=new d(16);return b[0]=e,b[1]=t,b[2]=n,b[3]=r,b[4]=a,b[5]=i,b[6]=o,b[7]=u,b[8]=c,b[9]=s,b[10]=f,b[11]=_,b[12]=l,b[13]=p,b[14]=h,b[15]=m,b}function $e(e,t,n,r,a,i,o,u,c,s,f,_,l,p,d,h,m){return e[0]=t,e[1]=n,e[2]=r,e[3]=a,e[4]=i,e[5]=o,e[6]=u,e[7]=c,e[8]=s,e[9]=f,e[10]=_,e[11]=l,e[12]=p,e[13]=d,e[14]=h,e[15]=m,e}function et(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function tt(e,t){if(e===t){var n=t[1],r=t[2],a=t[3],i=t[6],o=t[7],u=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=n,e[6]=t[9],e[7]=t[13],e[8]=r,e[9]=i,e[11]=t[14],e[12]=a,e[13]=o,e[14]=u}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}function nt(e,t){var n=t[0],r=t[1],a=t[2],i=t[3],o=t[4],u=t[5],c=t[6],s=t[7],f=t[8],_=t[9],l=t[10],p=t[11],d=t[12],h=t[13],m=t[14],b=t[15],y=n*u-r*o,v=n*c-a*o,g=n*s-i*o,w=r*c-a*u,M=r*s-i*u,k=a*s-i*c,A=f*h-_*d,x=f*m-l*d,z=f*b-p*d,L=_*m-l*h,E=_*b-p*h,T=l*b-p*m,O=y*T-v*E+g*L+w*z-M*x+k*A;return O?(O=1/O,e[0]=(u*T-c*E+s*L)*O,e[1]=(a*E-r*T-i*L)*O,e[2]=(h*k-m*M+b*w)*O,e[3]=(l*M-_*k-p*w)*O,e[4]=(c*z-o*T-s*x)*O,e[5]=(n*T-a*z+i*x)*O,e[6]=(m*g-d*k-b*v)*O,e[7]=(f*k-l*g+p*v)*O,e[8]=(o*E-u*z+s*A)*O,e[9]=(r*z-n*E-i*A)*O,e[10]=(d*M-h*g+b*y)*O,e[11]=(_*g-f*M-p*y)*O,e[12]=(u*x-o*L-c*A)*O,e[13]=(n*L-r*x+a*A)*O,e[14]=(h*v-d*w-m*y)*O,e[15]=(f*w-_*v+l*y)*O,e):null}function rt(e,t){var n=t[0],r=t[1],a=t[2],i=t[3],o=t[4],u=t[5],c=t[6],s=t[7],f=t[8],_=t[9],l=t[10],p=t[11],d=t[12],h=t[13],m=t[14],b=t[15];return e[0]=u*(l*b-p*m)-_*(c*b-s*m)+h*(c*p-s*l),e[1]=-(r*(l*b-p*m)-_*(a*b-i*m)+h*(a*p-i*l)),e[2]=r*(c*b-s*m)-u*(a*b-i*m)+h*(a*s-i*c),e[3]=-(r*(c*p-s*l)-u*(a*p-i*l)+_*(a*s-i*c)),e[4]=-(o*(l*b-p*m)-f*(c*b-s*m)+d*(c*p-s*l)),e[5]=n*(l*b-p*m)-f*(a*b-i*m)+d*(a*p-i*l),e[6]=-(n*(c*b-s*m)-o*(a*b-i*m)+d*(a*s-i*c)),e[7]=n*(c*p-s*l)-o*(a*p-i*l)+f*(a*s-i*c),e[8]=o*(_*b-p*h)-f*(u*b-s*h)+d*(u*p-s*_),e[9]=-(n*(_*b-p*h)-f*(r*b-i*h)+d*(r*p-i*_)),e[10]=n*(u*b-s*h)-o*(r*b-i*h)+d*(r*s-i*u),e[11]=-(n*(u*p-s*_)-o*(r*p-i*_)+f*(r*s-i*u)),e[12]=-(o*(_*m-l*h)-f*(u*m-c*h)+d*(u*l-c*_)),e[13]=n*(_*m-l*h)-f*(r*m-a*h)+d*(r*l-a*_),e[14]=-(n*(u*m-c*h)-o*(r*m-a*h)+d*(r*c-a*u)),e[15]=n*(u*l-c*_)-o*(r*l-a*_)+f*(r*c-a*u),e}function at(e){var t=e[0],n=e[1],r=e[2],a=e[3],i=e[4],o=e[5],u=e[6],c=e[7],s=e[8],f=e[9],_=e[10],l=e[11],p=e[12],d=e[13],h=e[14],m=e[15];return(t*o-n*i)*(_*m-l*h)-(t*u-r*i)*(f*m-l*d)+(t*c-a*i)*(f*h-_*d)+(n*u-r*o)*(s*m-l*p)-(n*c-a*o)*(s*h-_*p)+(r*c-a*u)*(s*d-f*p)}function it(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=t[4],c=t[5],s=t[6],f=t[7],_=t[8],l=t[9],p=t[10],d=t[11],h=t[12],m=t[13],b=t[14],y=t[15],v=n[0],g=n[1],w=n[2],M=n[3];return e[0]=v*r+g*u+w*_+M*h,e[1]=v*a+g*c+w*l+M*m,e[2]=v*i+g*s+w*p+M*b,e[3]=v*o+g*f+w*d+M*y,v=n[4],g=n[5],w=n[6],M=n[7],e[4]=v*r+g*u+w*_+M*h,e[5]=v*a+g*c+w*l+M*m,e[6]=v*i+g*s+w*p+M*b,e[7]=v*o+g*f+w*d+M*y,v=n[8],g=n[9],w=n[10],M=n[11],e[8]=v*r+g*u+w*_+M*h,e[9]=v*a+g*c+w*l+M*m,e[10]=v*i+g*s+w*p+M*b,e[11]=v*o+g*f+w*d+M*y,v=n[12],g=n[13],w=n[14],M=n[15],e[12]=v*r+g*u+w*_+M*h,e[13]=v*a+g*c+w*l+M*m,e[14]=v*i+g*s+w*p+M*b,e[15]=v*o+g*f+w*d+M*y,e}function ot(e,t,n){var r,a,i,o,u,c,s,f,_,l,p,d,h=n[0],m=n[1],b=n[2];return t===e?(e[12]=t[0]*h+t[4]*m+t[8]*b+t[12],e[13]=t[1]*h+t[5]*m+t[9]*b+t[13],e[14]=t[2]*h+t[6]*m+t[10]*b+t[14],e[15]=t[3]*h+t[7]*m+t[11]*b+t[15]):(r=t[0],a=t[1],i=t[2],o=t[3],u=t[4],c=t[5],s=t[6],f=t[7],_=t[8],l=t[9],p=t[10],d=t[11],e[0]=r,e[1]=a,e[2]=i,e[3]=o,e[4]=u,e[5]=c,e[6]=s,e[7]=f,e[8]=_,e[9]=l,e[10]=p,e[11]=d,e[12]=r*h+u*m+_*b+t[12],e[13]=a*h+c*m+l*b+t[13],e[14]=i*h+s*m+p*b+t[14],e[15]=o*h+f*m+d*b+t[15]),e}function ut(e,t,n){var r=n[0],a=n[1],i=n[2];return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*a,e[5]=t[5]*a,e[6]=t[6]*a,e[7]=t[7]*a,e[8]=t[8]*i,e[9]=t[9]*i,e[10]=t[10]*i,e[11]=t[11]*i,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function ct(e,t,n,r){var a,i,o,u,c,s,f,_,l,d,h,m,b,y,v,g,w,M,k,A,x,z,L,E,T=r[0],O=r[1],C=r[2],S=Math.hypot(T,O,C);return S<p?null:(T*=S=1/S,O*=S,C*=S,a=Math.sin(n),o=1-(i=Math.cos(n)),u=t[0],c=t[1],s=t[2],f=t[3],_=t[4],l=t[5],d=t[6],h=t[7],m=t[8],b=t[9],y=t[10],v=t[11],g=T*T*o+i,w=O*T*o+C*a,M=C*T*o-O*a,k=T*O*o-C*a,A=O*O*o+i,x=C*O*o+T*a,z=T*C*o+O*a,L=O*C*o-T*a,E=C*C*o+i,e[0]=u*g+_*w+m*M,e[1]=c*g+l*w+b*M,e[2]=s*g+d*w+y*M,e[3]=f*g+h*w+v*M,e[4]=u*k+_*A+m*x,e[5]=c*k+l*A+b*x,e[6]=s*k+d*A+y*x,e[7]=f*k+h*A+v*x,e[8]=u*z+_*L+m*E,e[9]=c*z+l*L+b*E,e[10]=s*z+d*L+y*E,e[11]=f*z+h*L+v*E,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function st(e,t,n){var r=Math.sin(n),a=Math.cos(n),i=t[4],o=t[5],u=t[6],c=t[7],s=t[8],f=t[9],_=t[10],l=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=i*a+s*r,e[5]=o*a+f*r,e[6]=u*a+_*r,e[7]=c*a+l*r,e[8]=s*a-i*r,e[9]=f*a-o*r,e[10]=_*a-u*r,e[11]=l*a-c*r,e}function ft(e,t,n){var r=Math.sin(n),a=Math.cos(n),i=t[0],o=t[1],u=t[2],c=t[3],s=t[8],f=t[9],_=t[10],l=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=i*a-s*r,e[1]=o*a-f*r,e[2]=u*a-_*r,e[3]=c*a-l*r,e[8]=i*r+s*a,e[9]=o*r+f*a,e[10]=u*r+_*a,e[11]=c*r+l*a,e}function _t(e,t,n){var r=Math.sin(n),a=Math.cos(n),i=t[0],o=t[1],u=t[2],c=t[3],s=t[4],f=t[5],_=t[6],l=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=i*a+s*r,e[1]=o*a+f*r,e[2]=u*a+_*r,e[3]=c*a+l*r,e[4]=s*a-i*r,e[5]=f*a-o*r,e[6]=_*a-u*r,e[7]=l*a-c*r,e}function lt(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}function pt(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function dt(e,t,n){var r,a,i,o=n[0],u=n[1],c=n[2],s=Math.hypot(o,u,c);return s<p?null:(o*=s=1/s,u*=s,c*=s,r=Math.sin(t),i=1-(a=Math.cos(t)),e[0]=o*o*i+a,e[1]=u*o*i+c*r,e[2]=c*o*i-u*r,e[3]=0,e[4]=o*u*i-c*r,e[5]=u*u*i+a,e[6]=c*u*i+o*r,e[7]=0,e[8]=o*c*i+u*r,e[9]=u*c*i-o*r,e[10]=c*c*i+a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}function ht(e,t){var n=Math.sin(t),r=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=r,e[6]=n,e[7]=0,e[8]=0,e[9]=-n,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function mt(e,t){var n=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=0,e[2]=-n,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=n,e[9]=0,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function bt(e,t){var n=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=n,e[2]=0,e[3]=0,e[4]=-n,e[5]=r,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function yt(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=r+r,c=a+a,s=i+i,f=r*u,_=r*c,l=r*s,p=a*c,d=a*s,h=i*s,m=o*u,b=o*c,y=o*s;return e[0]=1-(p+h),e[1]=_+y,e[2]=l-b,e[3]=0,e[4]=_-y,e[5]=1-(f+h),e[6]=d+m,e[7]=0,e[8]=l+b,e[9]=d-m,e[10]=1-(f+p),e[11]=0,e[12]=n[0],e[13]=n[1],e[14]=n[2],e[15]=1,e}function vt(e,t){var n=new d(3),r=-t[0],a=-t[1],i=-t[2],o=t[3],u=t[4],c=t[5],s=t[6],f=t[7],_=r*r+a*a+i*i+o*o;return _>0?(n[0]=2*(u*o+f*r+c*i-s*a)/_,n[1]=2*(c*o+f*a+s*r-u*i)/_,n[2]=2*(s*o+f*i+u*a-c*r)/_):(n[0]=2*(u*o+f*r+c*i-s*a),n[1]=2*(c*o+f*a+s*r-u*i),n[2]=2*(s*o+f*i+u*a-c*r)),yt(e,t,n),e}function gt(e,t){return e[0]=t[12],e[1]=t[13],e[2]=t[14],e}function wt(e,t){var n=t[0],r=t[1],a=t[2],i=t[4],o=t[5],u=t[6],c=t[8],s=t[9],f=t[10];return e[0]=Math.hypot(n,r,a),e[1]=Math.hypot(i,o,u),e[2]=Math.hypot(c,s,f),e}function Mt(e,t){var n=new d(3);wt(n,t);var r=1/n[0],a=1/n[1],i=1/n[2],o=t[0]*r,u=t[1]*a,c=t[2]*i,s=t[4]*r,f=t[5]*a,_=t[6]*i,l=t[8]*r,p=t[9]*a,h=t[10]*i,m=o+f+h,b=0;return m>0?(b=2*Math.sqrt(m+1),e[3]=.25*b,e[0]=(_-p)/b,e[1]=(l-c)/b,e[2]=(u-s)/b):o>f&&o>h?(b=2*Math.sqrt(1+o-f-h),e[3]=(_-p)/b,e[0]=.25*b,e[1]=(u+s)/b,e[2]=(l+c)/b):f>h?(b=2*Math.sqrt(1+f-o-h),e[3]=(l-c)/b,e[0]=(u+s)/b,e[1]=.25*b,e[2]=(_+p)/b):(b=2*Math.sqrt(1+h-o-f),e[3]=(u-s)/b,e[0]=(l+c)/b,e[1]=(_+p)/b,e[2]=.25*b),e}function kt(e,t,n,r){var a=t[0],i=t[1],o=t[2],u=t[3],c=a+a,s=i+i,f=o+o,_=a*c,l=a*s,p=a*f,d=i*s,h=i*f,m=o*f,b=u*c,y=u*s,v=u*f,g=r[0],w=r[1],M=r[2];return e[0]=(1-(d+m))*g,e[1]=(l+v)*g,e[2]=(p-y)*g,e[3]=0,e[4]=(l-v)*w,e[5]=(1-(_+m))*w,e[6]=(h+b)*w,e[7]=0,e[8]=(p+y)*M,e[9]=(h-b)*M,e[10]=(1-(_+d))*M,e[11]=0,e[12]=n[0],e[13]=n[1],e[14]=n[2],e[15]=1,e}function At(e,t,n,r,a){var i=t[0],o=t[1],u=t[2],c=t[3],s=i+i,f=o+o,_=u+u,l=i*s,p=i*f,d=i*_,h=o*f,m=o*_,b=u*_,y=c*s,v=c*f,g=c*_,w=r[0],M=r[1],k=r[2],A=a[0],x=a[1],z=a[2],L=(1-(h+b))*w,E=(p+g)*w,T=(d-v)*w,O=(p-g)*M,C=(1-(l+b))*M,S=(m+y)*M,I=(d+v)*k,B=(m-y)*k,P=(1-(l+h))*k;return e[0]=L,e[1]=E,e[2]=T,e[3]=0,e[4]=O,e[5]=C,e[6]=S,e[7]=0,e[8]=I,e[9]=B,e[10]=P,e[11]=0,e[12]=n[0]+A-(L*A+O*x+I*z),e[13]=n[1]+x-(E*A+C*x+B*z),e[14]=n[2]+z-(T*A+S*x+P*z),e[15]=1,e}function xt(e,t){var n=t[0],r=t[1],a=t[2],i=t[3],o=n+n,u=r+r,c=a+a,s=n*o,f=r*o,_=r*u,l=a*o,p=a*u,d=a*c,h=i*o,m=i*u,b=i*c;return e[0]=1-_-d,e[1]=f+b,e[2]=l-m,e[3]=0,e[4]=f-b,e[5]=1-s-d,e[6]=p+h,e[7]=0,e[8]=l+m,e[9]=p-h,e[10]=1-s-_,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function zt(e,t,n,r,a,i,o){var u=1/(n-t),c=1/(a-r),s=1/(i-o);return e[0]=2*i*u,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=2*i*c,e[6]=0,e[7]=0,e[8]=(n+t)*u,e[9]=(a+r)*c,e[10]=(o+i)*s,e[11]=-1,e[12]=0,e[13]=0,e[14]=o*i*2*s,e[15]=0,e}function Lt(e,t,n,r,a){var i,o=1/Math.tan(t/2);return e[0]=o/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=o,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,null!=a&&a!==1/0?(i=1/(r-a),e[10]=(a+r)*i,e[14]=2*a*r*i):(e[10]=-1,e[14]=-2*r),e}function Et(e,t,n,r){var a=Math.tan(t.upDegrees*Math.PI/180),i=Math.tan(t.downDegrees*Math.PI/180),o=Math.tan(t.leftDegrees*Math.PI/180),u=Math.tan(t.rightDegrees*Math.PI/180),c=2/(o+u),s=2/(a+i);return e[0]=c,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s,e[6]=0,e[7]=0,e[8]=-(o-u)*c*.5,e[9]=(a-i)*s*.5,e[10]=r/(n-r),e[11]=-1,e[12]=0,e[13]=0,e[14]=r*n/(n-r),e[15]=0,e}function Tt(e,t,n,r,a,i,o){var u=1/(t-n),c=1/(r-a),s=1/(i-o);return e[0]=-2*u,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*s,e[11]=0,e[12]=(t+n)*u,e[13]=(a+r)*c,e[14]=(o+i)*s,e[15]=1,e}function Ot(e,t,n,r){var a,i,o,u,c,s,f,_,l,d,h=t[0],m=t[1],b=t[2],y=r[0],v=r[1],g=r[2],w=n[0],M=n[1],k=n[2];return Math.abs(h-w)<p&&Math.abs(m-M)<p&&Math.abs(b-k)<p?et(e):(f=h-w,_=m-M,l=b-k,a=v*(l*=d=1/Math.hypot(f,_,l))-g*(_*=d),i=g*(f*=d)-y*l,o=y*_-v*f,(d=Math.hypot(a,i,o))?(a*=d=1/d,i*=d,o*=d):(a=0,i=0,o=0),u=_*o-l*i,c=l*a-f*o,s=f*i-_*a,(d=Math.hypot(u,c,s))?(u*=d=1/d,c*=d,s*=d):(u=0,c=0,s=0),e[0]=a,e[1]=u,e[2]=f,e[3]=0,e[4]=i,e[5]=c,e[6]=_,e[7]=0,e[8]=o,e[9]=s,e[10]=l,e[11]=0,e[12]=-(a*h+i*m+o*b),e[13]=-(u*h+c*m+s*b),e[14]=-(f*h+_*m+l*b),e[15]=1,e)}function Ct(e,t,n,r){var a=t[0],i=t[1],o=t[2],u=r[0],c=r[1],s=r[2],f=a-n[0],_=i-n[1],l=o-n[2],p=f*f+_*_+l*l;p>0&&(f*=p=1/Math.sqrt(p),_*=p,l*=p);var d=c*l-s*_,h=s*f-u*l,m=u*_-c*f;return(p=d*d+h*h+m*m)>0&&(d*=p=1/Math.sqrt(p),h*=p,m*=p),e[0]=d,e[1]=h,e[2]=m,e[3]=0,e[4]=_*m-l*h,e[5]=l*d-f*m,e[6]=f*h-_*d,e[7]=0,e[8]=f,e[9]=_,e[10]=l,e[11]=0,e[12]=a,e[13]=i,e[14]=o,e[15]=1,e}function St(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}function It(e){return Math.hypot(e[0],e[1],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}function Bt(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e[6]=t[6]+n[6],e[7]=t[7]+n[7],e[8]=t[8]+n[8],e[9]=t[9]+n[9],e[10]=t[10]+n[10],e[11]=t[11]+n[11],e[12]=t[12]+n[12],e[13]=t[13]+n[13],e[14]=t[14]+n[14],e[15]=t[15]+n[15],e}function Pt(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e[4]=t[4]-n[4],e[5]=t[5]-n[5],e[6]=t[6]-n[6],e[7]=t[7]-n[7],e[8]=t[8]-n[8],e[9]=t[9]-n[9],e[10]=t[10]-n[10],e[11]=t[11]-n[11],e[12]=t[12]-n[12],e[13]=t[13]-n[13],e[14]=t[14]-n[14],e[15]=t[15]-n[15],e}function Ft(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*n,e[9]=t[9]*n,e[10]=t[10]*n,e[11]=t[11]*n,e[12]=t[12]*n,e[13]=t[13]*n,e[14]=t[14]*n,e[15]=t[15]*n,e}function Dt(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e[4]=t[4]+n[4]*r,e[5]=t[5]+n[5]*r,e[6]=t[6]+n[6]*r,e[7]=t[7]+n[7]*r,e[8]=t[8]+n[8]*r,e[9]=t[9]+n[9]*r,e[10]=t[10]+n[10]*r,e[11]=t[11]+n[11]*r,e[12]=t[12]+n[12]*r,e[13]=t[13]+n[13]*r,e[14]=t[14]+n[14]*r,e[15]=t[15]+n[15]*r,e}function jt(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[11]===t[11]&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[15]===t[15]}function Rt(e,t){var n=e[0],r=e[1],a=e[2],i=e[3],o=e[4],u=e[5],c=e[6],s=e[7],f=e[8],_=e[9],l=e[10],d=e[11],h=e[12],m=e[13],b=e[14],y=e[15],v=t[0],g=t[1],w=t[2],M=t[3],k=t[4],A=t[5],x=t[6],z=t[7],L=t[8],E=t[9],T=t[10],O=t[11],C=t[12],S=t[13],I=t[14],B=t[15];return Math.abs(n-v)<=p*Math.max(1,Math.abs(n),Math.abs(v))&&Math.abs(r-g)<=p*Math.max(1,Math.abs(r),Math.abs(g))&&Math.abs(a-w)<=p*Math.max(1,Math.abs(a),Math.abs(w))&&Math.abs(i-M)<=p*Math.max(1,Math.abs(i),Math.abs(M))&&Math.abs(o-k)<=p*Math.max(1,Math.abs(o),Math.abs(k))&&Math.abs(u-A)<=p*Math.max(1,Math.abs(u),Math.abs(A))&&Math.abs(c-x)<=p*Math.max(1,Math.abs(c),Math.abs(x))&&Math.abs(s-z)<=p*Math.max(1,Math.abs(s),Math.abs(z))&&Math.abs(f-L)<=p*Math.max(1,Math.abs(f),Math.abs(L))&&Math.abs(_-E)<=p*Math.max(1,Math.abs(_),Math.abs(E))&&Math.abs(l-T)<=p*Math.max(1,Math.abs(l),Math.abs(T))&&Math.abs(d-O)<=p*Math.max(1,Math.abs(d),Math.abs(O))&&Math.abs(h-C)<=p*Math.max(1,Math.abs(h),Math.abs(C))&&Math.abs(m-S)<=p*Math.max(1,Math.abs(m),Math.abs(S))&&Math.abs(b-I)<=p*Math.max(1,Math.abs(b),Math.abs(I))&&Math.abs(y-B)<=p*Math.max(1,Math.abs(y),Math.abs(B))}var Vt=it,qt=Pt;function Gt(){var e=new d(3);return d!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function Nt(e){var t=new d(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function Ut(e){var t=e[0],n=e[1],r=e[2];return Math.hypot(t,n,r)}function Wt(e,t,n){var r=new d(3);return r[0]=e,r[1]=t,r[2]=n,r}function Ht(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function Yt(e,t,n,r){return e[0]=t,e[1]=n,e[2]=r,e}function Zt(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e}function Xt(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}function Kt(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e}function Jt(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e}function Qt(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}function $t(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}function en(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e}function tn(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e}function nn(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e}function rn(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e}function an(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e}function on(e,t){var n=t[0]-e[0],r=t[1]-e[1],a=t[2]-e[2];return Math.hypot(n,r,a)}function un(e,t){var n=t[0]-e[0],r=t[1]-e[1],a=t[2]-e[2];return n*n+r*r+a*a}function cn(e){var t=e[0],n=e[1],r=e[2];return t*t+n*n+r*r}function sn(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function fn(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}function _n(e,t){var n=t[0],r=t[1],a=t[2],i=n*n+r*r+a*a;return i>0&&(i=1/Math.sqrt(i)),e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e}function ln(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function pn(e,t,n){var r=t[0],a=t[1],i=t[2],o=n[0],u=n[1],c=n[2];return e[0]=a*c-i*u,e[1]=i*o-r*c,e[2]=r*u-a*o,e}function dn(e,t,n,r){var a=t[0],i=t[1],o=t[2];return e[0]=a+r*(n[0]-a),e[1]=i+r*(n[1]-i),e[2]=o+r*(n[2]-o),e}function hn(e,t,n,r,a,i){var o=i*i,u=o*(2*i-3)+1,c=o*(i-2)+i,s=o*(i-1),f=o*(3-2*i);return e[0]=t[0]*u+n[0]*c+r[0]*s+a[0]*f,e[1]=t[1]*u+n[1]*c+r[1]*s+a[1]*f,e[2]=t[2]*u+n[2]*c+r[2]*s+a[2]*f,e}function mn(e,t,n,r,a,i){var o=1-i,u=o*o,c=i*i,s=u*o,f=3*i*u,_=3*c*o,l=c*i;return e[0]=t[0]*s+n[0]*f+r[0]*_+a[0]*l,e[1]=t[1]*s+n[1]*f+r[1]*_+a[1]*l,e[2]=t[2]*s+n[2]*f+r[2]*_+a[2]*l,e}function bn(e,t){t=t||1;var n=2*h()*Math.PI,r=2*h()-1,a=Math.sqrt(1-r*r)*t;return e[0]=Math.cos(n)*a,e[1]=Math.sin(n)*a,e[2]=r*t,e}function yn(e,t,n){var r=t[0],a=t[1],i=t[2],o=n[3]*r+n[7]*a+n[11]*i+n[15];return o=o||1,e[0]=(n[0]*r+n[4]*a+n[8]*i+n[12])/o,e[1]=(n[1]*r+n[5]*a+n[9]*i+n[13])/o,e[2]=(n[2]*r+n[6]*a+n[10]*i+n[14])/o,e}function vn(e,t,n){var r=t[0],a=t[1],i=t[2];return e[0]=r*n[0]+a*n[3]+i*n[6],e[1]=r*n[1]+a*n[4]+i*n[7],e[2]=r*n[2]+a*n[5]+i*n[8],e}function gn(e,t,n){var r=n[0],a=n[1],i=n[2],o=n[3],u=t[0],c=t[1],s=t[2],f=a*s-i*c,_=i*u-r*s,l=r*c-a*u,p=a*l-i*_,d=i*f-r*l,h=r*_-a*f,m=2*o;return f*=m,_*=m,l*=m,p*=2,d*=2,h*=2,e[0]=u+f+p,e[1]=c+_+d,e[2]=s+l+h,e}function wn(e,t,n,r){var a=[],i=[];return a[0]=t[0]-n[0],a[1]=t[1]-n[1],a[2]=t[2]-n[2],i[0]=a[0],i[1]=a[1]*Math.cos(r)-a[2]*Math.sin(r),i[2]=a[1]*Math.sin(r)+a[2]*Math.cos(r),e[0]=i[0]+n[0],e[1]=i[1]+n[1],e[2]=i[2]+n[2],e}function Mn(e,t,n,r){var a=[],i=[];return a[0]=t[0]-n[0],a[1]=t[1]-n[1],a[2]=t[2]-n[2],i[0]=a[2]*Math.sin(r)+a[0]*Math.cos(r),i[1]=a[1],i[2]=a[2]*Math.cos(r)-a[0]*Math.sin(r),e[0]=i[0]+n[0],e[1]=i[1]+n[1],e[2]=i[2]+n[2],e}function kn(e,t,n,r){var a=[],i=[];return a[0]=t[0]-n[0],a[1]=t[1]-n[1],a[2]=t[2]-n[2],i[0]=a[0]*Math.cos(r)-a[1]*Math.sin(r),i[1]=a[0]*Math.sin(r)+a[1]*Math.cos(r),i[2]=a[2],e[0]=i[0]+n[0],e[1]=i[1]+n[1],e[2]=i[2]+n[2],e}function An(e,t){var n=Wt(e[0],e[1],e[2]),r=Wt(t[0],t[1],t[2]);_n(n,n),_n(r,r);var a=ln(n,r);return a>1?0:a<-1?Math.PI:Math.acos(a)}function xn(e){return e[0]=0,e[1]=0,e[2]=0,e}function zn(e){return"vec3("+e[0]+", "+e[1]+", "+e[2]+")"}function Ln(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function En(e,t){var n=e[0],r=e[1],a=e[2],i=t[0],o=t[1],u=t[2];return Math.abs(n-i)<=p*Math.max(1,Math.abs(n),Math.abs(i))&&Math.abs(r-o)<=p*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(a-u)<=p*Math.max(1,Math.abs(a),Math.abs(u))}var Tn,On=Xt,Cn=Kt,Sn=Jt,In=on,Bn=un,Pn=Ut,Fn=cn,Dn=(Tn=Gt(),function(e,t,n,r,a,i){var o,u;for(t||(t=3),n||(n=0),u=r?Math.min(r*t+n,e.length):e.length,o=n;o<u;o+=t)Tn[0]=e[o],Tn[1]=e[o+1],Tn[2]=e[o+2],a(Tn,Tn,i),e[o]=Tn[0],e[o+1]=Tn[1],e[o+2]=Tn[2];return e});function jn(){var e=new d(4);return d!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e}function Rn(e){var t=new d(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function Vn(e,t,n,r){var a=new d(4);return a[0]=e,a[1]=t,a[2]=n,a[3]=r,a}function qn(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function Gn(e,t,n,r,a){return e[0]=t,e[1]=n,e[2]=r,e[3]=a,e}function Nn(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e}function Un(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e}function Wn(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e[3]=t[3]*n[3],e}function Hn(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e[3]=t[3]/n[3],e}function Yn(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e}function Zn(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e}function Xn(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e[3]=Math.min(t[3],n[3]),e}function Kn(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e[3]=Math.max(t[3],n[3]),e}function Jn(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e[3]=Math.round(t[3]),e}function Qn(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e}function $n(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e}function er(e,t){var n=t[0]-e[0],r=t[1]-e[1],a=t[2]-e[2],i=t[3]-e[3];return Math.hypot(n,r,a,i)}function tr(e,t){var n=t[0]-e[0],r=t[1]-e[1],a=t[2]-e[2],i=t[3]-e[3];return n*n+r*r+a*a+i*i}function nr(e){var t=e[0],n=e[1],r=e[2],a=e[3];return Math.hypot(t,n,r,a)}function rr(e){var t=e[0],n=e[1],r=e[2],a=e[3];return t*t+n*n+r*r+a*a}function ar(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e}function ir(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e}function or(e,t){var n=t[0],r=t[1],a=t[2],i=t[3],o=n*n+r*r+a*a+i*i;return o>0&&(o=1/Math.sqrt(o)),e[0]=n*o,e[1]=r*o,e[2]=a*o,e[3]=i*o,e}function ur(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function cr(e,t,n,r){var a=n[0]*r[1]-n[1]*r[0],i=n[0]*r[2]-n[2]*r[0],o=n[0]*r[3]-n[3]*r[0],u=n[1]*r[2]-n[2]*r[1],c=n[1]*r[3]-n[3]*r[1],s=n[2]*r[3]-n[3]*r[2],f=t[0],_=t[1],l=t[2],p=t[3];return e[0]=_*s-l*c+p*u,e[1]=-f*s+l*o-p*i,e[2]=f*c-_*o+p*a,e[3]=-f*u+_*i-l*a,e}function sr(e,t,n,r){var a=t[0],i=t[1],o=t[2],u=t[3];return e[0]=a+r*(n[0]-a),e[1]=i+r*(n[1]-i),e[2]=o+r*(n[2]-o),e[3]=u+r*(n[3]-u),e}function fr(e,t){var n,r,a,i,o,u;t=t||1;do{o=(n=2*h()-1)*n+(r=2*h()-1)*r}while(o>=1);do{u=(a=2*h()-1)*a+(i=2*h()-1)*i}while(u>=1);var c=Math.sqrt((1-o)/u);return e[0]=t*n,e[1]=t*r,e[2]=t*a*c,e[3]=t*i*c,e}function _r(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3];return e[0]=n[0]*r+n[4]*a+n[8]*i+n[12]*o,e[1]=n[1]*r+n[5]*a+n[9]*i+n[13]*o,e[2]=n[2]*r+n[6]*a+n[10]*i+n[14]*o,e[3]=n[3]*r+n[7]*a+n[11]*i+n[15]*o,e}function lr(e,t,n){var r=t[0],a=t[1],i=t[2],o=n[0],u=n[1],c=n[2],s=n[3],f=s*r+u*i-c*a,_=s*a+c*r-o*i,l=s*i+o*a-u*r,p=-o*r-u*a-c*i;return e[0]=f*s+p*-o+_*-c-l*-u,e[1]=_*s+p*-u+l*-o-f*-c,e[2]=l*s+p*-c+f*-u-_*-o,e[3]=t[3],e}function pr(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e}function dr(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}function hr(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function mr(e,t){var n=e[0],r=e[1],a=e[2],i=e[3],o=t[0],u=t[1],c=t[2],s=t[3];return Math.abs(n-o)<=p*Math.max(1,Math.abs(n),Math.abs(o))&&Math.abs(r-u)<=p*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(a-c)<=p*Math.max(1,Math.abs(a),Math.abs(c))&&Math.abs(i-s)<=p*Math.max(1,Math.abs(i),Math.abs(s))}var br=Un,yr=Wn,vr=Hn,gr=er,wr=tr,Mr=nr,kr=rr,Ar=function(){var e=jn();return function(t,n,r,a,i,o){var u,c;for(n||(n=4),r||(r=0),c=a?Math.min(a*n+r,t.length):t.length,u=r;u<c;u+=n)e[0]=t[u],e[1]=t[u+1],e[2]=t[u+2],e[3]=t[u+3],i(e,e,o),t[u]=e[0],t[u+1]=e[1],t[u+2]=e[2],t[u+3]=e[3];return t}}();function xr(){var e=new d(4);return d!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e[3]=1,e}function zr(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e}function Lr(e,t,n){n*=.5;var r=Math.sin(n);return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=Math.cos(n),e}function Er(e,t){var n=2*Math.acos(t[3]),r=Math.sin(n/2);return r>p?(e[0]=t[0]/r,e[1]=t[1]/r,e[2]=t[2]/r):(e[0]=1,e[1]=0,e[2]=0),n}function Tr(e,t){var n=aa(e,t);return Math.acos(2*n*n-1)}function Or(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=n[0],c=n[1],s=n[2],f=n[3];return e[0]=r*f+o*u+a*s-i*c,e[1]=a*f+o*c+i*u-r*s,e[2]=i*f+o*s+r*c-a*u,e[3]=o*f-r*u-a*c-i*s,e}function Cr(e,t,n){n*=.5;var r=t[0],a=t[1],i=t[2],o=t[3],u=Math.sin(n),c=Math.cos(n);return e[0]=r*c+o*u,e[1]=a*c+i*u,e[2]=i*c-a*u,e[3]=o*c-r*u,e}function Sr(e,t,n){n*=.5;var r=t[0],a=t[1],i=t[2],o=t[3],u=Math.sin(n),c=Math.cos(n);return e[0]=r*c-i*u,e[1]=a*c+o*u,e[2]=i*c+r*u,e[3]=o*c-a*u,e}function Ir(e,t,n){n*=.5;var r=t[0],a=t[1],i=t[2],o=t[3],u=Math.sin(n),c=Math.cos(n);return e[0]=r*c+a*u,e[1]=a*c-r*u,e[2]=i*c+o*u,e[3]=o*c-i*u,e}function Br(e,t){var n=t[0],r=t[1],a=t[2];return e[0]=n,e[1]=r,e[2]=a,e[3]=Math.sqrt(Math.abs(1-n*n-r*r-a*a)),e}function Pr(e,t){var n=t[0],r=t[1],a=t[2],i=t[3],o=Math.sqrt(n*n+r*r+a*a),u=Math.exp(i),c=o>0?u*Math.sin(o)/o:0;return e[0]=n*c,e[1]=r*c,e[2]=a*c,e[3]=u*Math.cos(o),e}function Fr(e,t){var n=t[0],r=t[1],a=t[2],i=t[3],o=Math.sqrt(n*n+r*r+a*a),u=o>0?Math.atan2(o,i)/o:0;return e[0]=n*u,e[1]=r*u,e[2]=a*u,e[3]=.5*Math.log(n*n+r*r+a*a+i*i),e}function Dr(e,t,n){return Fr(e,t),ra(e,e,n),Pr(e,e),e}function jr(e,t,n,r){var a,i,o,u,c,s=t[0],f=t[1],_=t[2],l=t[3],d=n[0],h=n[1],m=n[2],b=n[3];return(i=s*d+f*h+_*m+l*b)<0&&(i=-i,d=-d,h=-h,m=-m,b=-b),1-i>p?(a=Math.acos(i),o=Math.sin(a),u=Math.sin((1-r)*a)/o,c=Math.sin(r*a)/o):(u=1-r,c=r),e[0]=u*s+c*d,e[1]=u*f+c*h,e[2]=u*_+c*m,e[3]=u*l+c*b,e}function Rr(e){var t=h(),n=h(),r=h(),a=Math.sqrt(1-t),i=Math.sqrt(t);return e[0]=a*Math.sin(2*Math.PI*n),e[1]=a*Math.cos(2*Math.PI*n),e[2]=i*Math.sin(2*Math.PI*r),e[3]=i*Math.cos(2*Math.PI*r),e}function Vr(e,t){var n=t[0],r=t[1],a=t[2],i=t[3],o=n*n+r*r+a*a+i*i,u=o?1/o:0;return e[0]=-n*u,e[1]=-r*u,e[2]=-a*u,e[3]=i*u,e}function qr(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function Gr(e,t){var n,r=t[0]+t[4]+t[8];if(r>0)n=Math.sqrt(r+1),e[3]=.5*n,n=.5/n,e[0]=(t[5]-t[7])*n,e[1]=(t[6]-t[2])*n,e[2]=(t[1]-t[3])*n;else{var a=0;t[4]>t[0]&&(a=1),t[8]>t[3*a+a]&&(a=2);var i=(a+1)%3,o=(a+2)%3;n=Math.sqrt(t[3*a+a]-t[3*i+i]-t[3*o+o]+1),e[a]=.5*n,n=.5/n,e[3]=(t[3*i+o]-t[3*o+i])*n,e[i]=(t[3*i+a]+t[3*a+i])*n,e[o]=(t[3*o+a]+t[3*a+o])*n}return e}function Nr(e,t,n,r){var a=.5*Math.PI/180;t*=a,n*=a,r*=a;var i=Math.sin(t),o=Math.cos(t),u=Math.sin(n),c=Math.cos(n),s=Math.sin(r),f=Math.cos(r);return e[0]=i*c*f-o*u*s,e[1]=o*u*f+i*c*s,e[2]=o*c*s-i*u*f,e[3]=o*c*f+i*u*s,e}function Ur(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}var Wr,Hr,Yr,Zr,Xr,Kr,Jr=Rn,Qr=Vn,$r=qn,ea=Gn,ta=Nn,na=Or,ra=Qn,aa=ur,ia=sr,oa=nr,ua=oa,ca=rr,sa=ca,fa=or,_a=hr,la=mr,pa=(Wr=Gt(),Hr=Wt(1,0,0),Yr=Wt(0,1,0),function(e,t,n){var r=ln(t,n);return r<-.999999?(pn(Wr,Hr,t),Pn(Wr)<1e-6&&pn(Wr,Yr,t),_n(Wr,Wr),Lr(e,Wr,Math.PI),e):r>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):(pn(Wr,t,n),e[0]=Wr[0],e[1]=Wr[1],e[2]=Wr[2],e[3]=1+r,fa(e,e))}),da=(Zr=xr(),Xr=xr(),function(e,t,n,r,a,i){return jr(Zr,t,a,i),jr(Xr,n,r,i),jr(e,Zr,Xr,2*i*(1-i)),e}),ha=(Kr=be(),function(e,t,n,r){return Kr[0]=n[0],Kr[3]=n[1],Kr[6]=n[2],Kr[1]=r[0],Kr[4]=r[1],Kr[7]=r[2],Kr[2]=-t[0],Kr[5]=-t[1],Kr[8]=-t[2],fa(e,Gr(e,Kr))});function ma(){var e=new d(8);return d!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0),e[3]=1,e}function ba(e){var t=new d(8);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t}function ya(e,t,n,r,a,i,o,u){var c=new d(8);return c[0]=e,c[1]=t,c[2]=n,c[3]=r,c[4]=a,c[5]=i,c[6]=o,c[7]=u,c}function va(e,t,n,r,a,i,o){var u=new d(8);u[0]=e,u[1]=t,u[2]=n,u[3]=r;var c=.5*a,s=.5*i,f=.5*o;return u[4]=c*r+s*n-f*t,u[5]=s*r+f*e-c*n,u[6]=f*r+c*t-s*e,u[7]=-c*e-s*t-f*n,u}function ga(e,t,n){var r=.5*n[0],a=.5*n[1],i=.5*n[2],o=t[0],u=t[1],c=t[2],s=t[3];return e[0]=o,e[1]=u,e[2]=c,e[3]=s,e[4]=r*s+a*c-i*u,e[5]=a*s+i*o-r*c,e[6]=i*s+r*u-a*o,e[7]=-r*o-a*u-i*c,e}function wa(e,t){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e[4]=.5*t[0],e[5]=.5*t[1],e[6]=.5*t[2],e[7]=0,e}function Ma(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=0,e[5]=0,e[6]=0,e[7]=0,e}function ka(e,t){var n=xr();Mt(n,t);var r=new d(3);return gt(r,t),ga(e,n,r),e}function Aa(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e}function xa(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e}function za(e,t,n,r,a,i,o,u,c){return e[0]=t,e[1]=n,e[2]=r,e[3]=a,e[4]=i,e[5]=o,e[6]=u,e[7]=c,e}var La=$r;function Ea(e,t){return e[0]=t[4],e[1]=t[5],e[2]=t[6],e[3]=t[7],e}var Ta=$r;function Oa(e,t){return e[4]=t[0],e[5]=t[1],e[6]=t[2],e[7]=t[3],e}function Ca(e,t){var n=t[4],r=t[5],a=t[6],i=t[7],o=-t[0],u=-t[1],c=-t[2],s=t[3];return e[0]=2*(n*s+i*o+r*c-a*u),e[1]=2*(r*s+i*u+a*o-n*c),e[2]=2*(a*s+i*c+n*u-r*o),e}function Sa(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=.5*n[0],c=.5*n[1],s=.5*n[2],f=t[4],_=t[5],l=t[6],p=t[7];return e[0]=r,e[1]=a,e[2]=i,e[3]=o,e[4]=o*u+a*s-i*c+f,e[5]=o*c+i*u-r*s+_,e[6]=o*s+r*c-a*u+l,e[7]=-r*u-a*c-i*s+p,e}function Ia(e,t,n){var r=-t[0],a=-t[1],i=-t[2],o=t[3],u=t[4],c=t[5],s=t[6],f=t[7],_=u*o+f*r+c*i-s*a,l=c*o+f*a+s*r-u*i,p=s*o+f*i+u*a-c*r,d=f*o-u*r-c*a-s*i;return Cr(e,t,n),r=e[0],a=e[1],i=e[2],o=e[3],e[4]=_*o+d*r+l*i-p*a,e[5]=l*o+d*a+p*r-_*i,e[6]=p*o+d*i+_*a-l*r,e[7]=d*o-_*r-l*a-p*i,e}function Ba(e,t,n){var r=-t[0],a=-t[1],i=-t[2],o=t[3],u=t[4],c=t[5],s=t[6],f=t[7],_=u*o+f*r+c*i-s*a,l=c*o+f*a+s*r-u*i,p=s*o+f*i+u*a-c*r,d=f*o-u*r-c*a-s*i;return Sr(e,t,n),r=e[0],a=e[1],i=e[2],o=e[3],e[4]=_*o+d*r+l*i-p*a,e[5]=l*o+d*a+p*r-_*i,e[6]=p*o+d*i+_*a-l*r,e[7]=d*o-_*r-l*a-p*i,e}function Pa(e,t,n){var r=-t[0],a=-t[1],i=-t[2],o=t[3],u=t[4],c=t[5],s=t[6],f=t[7],_=u*o+f*r+c*i-s*a,l=c*o+f*a+s*r-u*i,p=s*o+f*i+u*a-c*r,d=f*o-u*r-c*a-s*i;return Ir(e,t,n),r=e[0],a=e[1],i=e[2],o=e[3],e[4]=_*o+d*r+l*i-p*a,e[5]=l*o+d*a+p*r-_*i,e[6]=p*o+d*i+_*a-l*r,e[7]=d*o-_*r-l*a-p*i,e}function Fa(e,t,n){var r=n[0],a=n[1],i=n[2],o=n[3],u=t[0],c=t[1],s=t[2],f=t[3];return e[0]=u*o+f*r+c*i-s*a,e[1]=c*o+f*a+s*r-u*i,e[2]=s*o+f*i+u*a-c*r,e[3]=f*o-u*r-c*a-s*i,u=t[4],c=t[5],s=t[6],f=t[7],e[4]=u*o+f*r+c*i-s*a,e[5]=c*o+f*a+s*r-u*i,e[6]=s*o+f*i+u*a-c*r,e[7]=f*o-u*r-c*a-s*i,e}function Da(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=n[0],c=n[1],s=n[2],f=n[3];return e[0]=r*f+o*u+a*s-i*c,e[1]=a*f+o*c+i*u-r*s,e[2]=i*f+o*s+r*c-a*u,e[3]=o*f-r*u-a*c-i*s,u=n[4],c=n[5],s=n[6],f=n[7],e[4]=r*f+o*u+a*s-i*c,e[5]=a*f+o*c+i*u-r*s,e[6]=i*f+o*s+r*c-a*u,e[7]=o*f-r*u-a*c-i*s,e}function ja(e,t,n,r){if(Math.abs(r)<p)return Aa(e,t);var a=Math.hypot(n[0],n[1],n[2]);r*=.5;var i=Math.sin(r),o=i*n[0]/a,u=i*n[1]/a,c=i*n[2]/a,s=Math.cos(r),f=t[0],_=t[1],l=t[2],d=t[3];e[0]=f*s+d*o+_*c-l*u,e[1]=_*s+d*u+l*o-f*c,e[2]=l*s+d*c+f*u-_*o,e[3]=d*s-f*o-_*u-l*c;var h=t[4],m=t[5],b=t[6],y=t[7];return e[4]=h*s+y*o+m*c-b*u,e[5]=m*s+y*u+b*o-h*c,e[6]=b*s+y*c+h*u-m*o,e[7]=y*s-h*o-m*u-b*c,e}function Ra(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e[6]=t[6]+n[6],e[7]=t[7]+n[7],e}function Va(e,t,n){var r=t[0],a=t[1],i=t[2],o=t[3],u=n[4],c=n[5],s=n[6],f=n[7],_=t[4],l=t[5],p=t[6],d=t[7],h=n[0],m=n[1],b=n[2],y=n[3];return e[0]=r*y+o*h+a*b-i*m,e[1]=a*y+o*m+i*h-r*b,e[2]=i*y+o*b+r*m-a*h,e[3]=o*y-r*h-a*m-i*b,e[4]=r*f+o*u+a*s-i*c+_*y+d*h+l*b-p*m,e[5]=a*f+o*c+i*u-r*s+l*y+d*m+p*h-_*b,e[6]=i*f+o*s+r*c-a*u+p*y+d*b+_*m-l*h,e[7]=o*f-r*u-a*c-i*s+d*y-_*h-l*m-p*b,e}var qa=Va;function Ga(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e}var Na=aa;function Ua(e,t,n,r){var a=1-r;return Na(t,n)<0&&(r=-r),e[0]=t[0]*a+n[0]*r,e[1]=t[1]*a+n[1]*r,e[2]=t[2]*a+n[2]*r,e[3]=t[3]*a+n[3]*r,e[4]=t[4]*a+n[4]*r,e[5]=t[5]*a+n[5]*r,e[6]=t[6]*a+n[6]*r,e[7]=t[7]*a+n[7]*r,e}function Wa(e,t){var n=Xa(t);return e[0]=-t[0]/n,e[1]=-t[1]/n,e[2]=-t[2]/n,e[3]=t[3]/n,e[4]=-t[4]/n,e[5]=-t[5]/n,e[6]=-t[6]/n,e[7]=t[7]/n,e}function Ha(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e[4]=-t[4],e[5]=-t[5],e[6]=-t[6],e[7]=t[7],e}var Ya=oa,Za=Ya,Xa=ca,Ka=Xa;function Ja(e,t){var n=Xa(t);if(n>0){n=Math.sqrt(n);var r=t[0]/n,a=t[1]/n,i=t[2]/n,o=t[3]/n,u=t[4],c=t[5],s=t[6],f=t[7],_=r*u+a*c+i*s+o*f;e[0]=r,e[1]=a,e[2]=i,e[3]=o,e[4]=(u-r*_)/n,e[5]=(c-a*_)/n,e[6]=(s-i*_)/n,e[7]=(f-o*_)/n}return e}function Qa(e){return"quat2("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+")"}function $a(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]}function ei(e,t){var n=e[0],r=e[1],a=e[2],i=e[3],o=e[4],u=e[5],c=e[6],s=e[7],f=t[0],_=t[1],l=t[2],d=t[3],h=t[4],m=t[5],b=t[6],y=t[7];return Math.abs(n-f)<=p*Math.max(1,Math.abs(n),Math.abs(f))&&Math.abs(r-_)<=p*Math.max(1,Math.abs(r),Math.abs(_))&&Math.abs(a-l)<=p*Math.max(1,Math.abs(a),Math.abs(l))&&Math.abs(i-d)<=p*Math.max(1,Math.abs(i),Math.abs(d))&&Math.abs(o-h)<=p*Math.max(1,Math.abs(o),Math.abs(h))&&Math.abs(u-m)<=p*Math.max(1,Math.abs(u),Math.abs(m))&&Math.abs(c-b)<=p*Math.max(1,Math.abs(c),Math.abs(b))&&Math.abs(s-y)<=p*Math.max(1,Math.abs(s),Math.abs(y))}function ti(){var e=new d(2);return d!=Float32Array&&(e[0]=0,e[1]=0),e}function ni(e){var t=new d(2);return t[0]=e[0],t[1]=e[1],t}function ri(e,t){var n=new d(2);return n[0]=e,n[1]=t,n}function ai(e,t){return e[0]=t[0],e[1]=t[1],e}function ii(e,t,n){return e[0]=t,e[1]=n,e}function oi(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e}function ui(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e}function ci(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e}function si(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e}function fi(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e}function _i(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e}function li(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e}function pi(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e}function di(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e}function hi(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e}function mi(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e}function bi(e,t){var n=t[0]-e[0],r=t[1]-e[1];return Math.hypot(n,r)}function yi(e,t){var n=t[0]-e[0],r=t[1]-e[1];return n*n+r*r}function vi(e){var t=e[0],n=e[1];return Math.hypot(t,n)}function gi(e){var t=e[0],n=e[1];return t*t+n*n}function wi(e,t){return e[0]=-t[0],e[1]=-t[1],e}function Mi(e,t){return e[0]=1/t[0],e[1]=1/t[1],e}function ki(e,t){var n=t[0],r=t[1],a=n*n+r*r;return a>0&&(a=1/Math.sqrt(a)),e[0]=t[0]*a,e[1]=t[1]*a,e}function Ai(e,t){return e[0]*t[0]+e[1]*t[1]}function xi(e,t,n){var r=t[0]*n[1]-t[1]*n[0];return e[0]=e[1]=0,e[2]=r,e}function zi(e,t,n,r){var a=t[0],i=t[1];return e[0]=a+r*(n[0]-a),e[1]=i+r*(n[1]-i),e}function Li(e,t){t=t||1;var n=2*h()*Math.PI;return e[0]=Math.cos(n)*t,e[1]=Math.sin(n)*t,e}function Ei(e,t,n){var r=t[0],a=t[1];return e[0]=n[0]*r+n[2]*a,e[1]=n[1]*r+n[3]*a,e}function Ti(e,t,n){var r=t[0],a=t[1];return e[0]=n[0]*r+n[2]*a+n[4],e[1]=n[1]*r+n[3]*a+n[5],e}function Oi(e,t,n){var r=t[0],a=t[1];return e[0]=n[0]*r+n[3]*a+n[6],e[1]=n[1]*r+n[4]*a+n[7],e}function Ci(e,t,n){var r=t[0],a=t[1];return e[0]=n[0]*r+n[4]*a+n[12],e[1]=n[1]*r+n[5]*a+n[13],e}function Si(e,t,n,r){var a=t[0]-n[0],i=t[1]-n[1],o=Math.sin(r),u=Math.cos(r);return e[0]=a*u-i*o+n[0],e[1]=a*o+i*u+n[1],e}function Ii(e,t){var n=e[0],r=e[1],a=t[0],i=t[1],o=n*n+r*r;o>0&&(o=1/Math.sqrt(o));var u=a*a+i*i;u>0&&(u=1/Math.sqrt(u));var c=(n*a+r*i)*o*u;return c>1?0:c<-1?Math.PI:Math.acos(c)}function Bi(e){return e[0]=0,e[1]=0,e}function Pi(e){return"vec2("+e[0]+", "+e[1]+")"}function Fi(e,t){return e[0]===t[0]&&e[1]===t[1]}function Di(e,t){var n=e[0],r=e[1],a=t[0],i=t[1];return Math.abs(n-a)<=p*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(r-i)<=p*Math.max(1,Math.abs(r),Math.abs(i))}var ji=vi,Ri=ui,Vi=ci,qi=si,Gi=bi,Ni=yi,Ui=gi,Wi=function(){var e=ti();return function(t,n,r,a,i,o){var u,c;for(n||(n=2),r||(r=0),c=a?Math.min(a*n+r,t.length):t.length,u=r;u<c;u+=n)e[0]=t[u],e[1]=t[u+1],i(e,e,o),t[u]=e[0],t[u+1]=e[1];return t}}()}]);',
          r.p + "ea7db036feeb066a0056.worker.js"
        );
      };
    },
    function (e, t, r) {
      "use strict";
      var n = window.URL || window.webkitURL;
      e.exports = function (e, t) {
        try {
          try {
            var r;
            try {
              (r = new (window.BlobBuilder ||
                window.WebKitBlobBuilder ||
                window.MozBlobBuilder ||
                window.MSBlobBuilder)()).append(e),
                (r = r.getBlob());
            } catch (t) {
              r = new Blob([e]);
            }
            return new Worker(n.createObjectURL(r));
          } catch (t) {
            return new Worker(
              "data:application/javascript," + encodeURIComponent(e)
            );
          }
        } catch (e) {
          if (!t) throw Error("Inline worker is not supported");
          return new Worker(t);
        }
      };
    },
    function (e, t, r) {
      "use strict";
      r.r(t), (t.default = r.p + "0529f271b32c04c80b87f04345cac7f8.wasm");
    },
    function (e, t, r) {
      "use strict";
      var n =
        (this && this.__awaiter) ||
        function (e, t, r, n) {
          return new (r || (r = Promise))(function (a, i) {
            function o(e) {
              try {
                u(n.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                u(n.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(o, s);
            }
            u((n = n.apply(e, t || [])).next());
          });
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      let a = new (r(10).UAParser)(),
        i = !1,
        o = !1,
        s = !1,
        u = !1;
      function c() {
        return n(this, void 0, void 0, function* () {
          if (navigator.permissions && navigator.permissions.query) {
            let e = yield navigator.permissions.query({ name: "camera" });
            (s = "denied" === e.state), (i = "granted" === e.state);
          }
        });
      }
      function f() {
        return s || u;
      }
      function l() {
        return i && o;
      }
      function _() {
        return n(this, void 0, void 0, function* () {
          yield h(), yield d();
        });
      }
      function d() {
        return n(this, void 0, void 0, function* () {
          try {
            (yield navigator.mediaDevices.getUserMedia({ video: !0 }))
              .getTracks()
              .forEach((e) => e.stop()),
              (i = !0),
              (s = !1);
          } catch (e) {
            (i = !1), (s = !0);
          }
        });
      }
      function h() {
        return n(this, void 0, void 0, function* () {
          if (
            window.DeviceOrientationEvent &&
            window.DeviceOrientationEvent.requestPermission
          ) {
            if (
              "granted" !==
              (yield window.DeviceOrientationEvent.requestPermission())
            )
              return (o = !1), (u = !0), !1;
          }
          (o = !0), (u = !1);
        });
      }
      (window.DeviceOrientationEvent &&
        window.DeviceOrientationEvent.requestPermission) ||
        (o = !0),
        c(),
        (t.permissionGrantedCamera = function () {
          return i;
        }),
        (t.permissionGrantedMotion = function () {
          return o;
        }),
        (t.permissionDeniedCamera = function () {
          return s;
        }),
        (t.permissionDeniedMotion = function () {
          return u;
        }),
        (t.permissionDeniedAny = f),
        (t.permissionGrantedAll = l),
        (t.permissionRequestAll = _),
        (t.permissionRequestCamera = d),
        (t.permissionRequestMotion = h),
        (t.permissionRequestUI = function () {
          return n(this, void 0, void 0, function* () {
            if ((yield c(), l())) return !0;
            let e = document.createElement("div");
            e.classList.add("zappar-permission-request"),
              (e.innerHTML =
                '\n    <style>\n        .zappar-permission-request {\n            position: fixed;\n            width: 100%;\n            height: 100%;\n            top: 0px;\n            left: 0px;\n            z-index: 1000;\n            background-color: rgba(0, 0, 0, 0.9);\n            font-family: sans-serif;\n            color: white;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n        }\n        .zappar-inner {\n            max-width: 400px;\n            text-align: center;\n        }\n        .zappar-title {\n            font-size: 20px;\n        }\n        .zappar-text {\n            font-size: 14px;\n            padding: 15px;\n        }\n        .zappar-inner > button {\n            background: none;\n            outline: none;\n            border: 2px solid white;\n            border-radius: 10px;\n            color: white;\n            padding: 10px 40px;\n            text-transform: uppercase;\n        }\n    </style>\n    <div class="zappar-inner">\n        <div class="zappar-title">Almost there...</div>\n        <div class="zappar-text">In order to provide this augmented reality experience, we need access to your device\'s camera and motion sensors.</div>\n        <button id="zappar-permission-request-button">Grant Access</button>\n    </div>\n'),
              document.body.append(e);
            let t = e.querySelector("#zappar-permission-request-button");
            return yield new Promise((r) => {
              var a;
              null === (a = t) ||
                void 0 === a ||
                a.addEventListener("click", () =>
                  n(this, void 0, void 0, function* () {
                    for (yield _(), e.remove(); ; ) {
                      if (
                        (yield new Promise((e) =>
                          requestAnimationFrame(() => e())
                        ),
                        f())
                      )
                        return void r(!1);
                      if (l()) return void r(!0);
                    }
                  })
                );
            });
          });
        }),
        (t.permissionDeniedUI = function () {
          switch (a.getBrowser().name) {
            case "Chrome":
              !(function () {
                var e;
                let t = document.createElement("div");
                t.classList.add("zappar-permission-request"),
                  (t.innerHTML =
                    '\n    <style>\n        .zappar-permission-request {\n            position: fixed;\n            width: 100%;\n            height: 100%;\n            top: 0px;\n            left: 0px;\n            z-index: 1000;\n            background-color: rgba(0, 0, 0, 0.9);\n            font-family: sans-serif;\n            color: white;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n        }\n        .zappar-inner {\n            width: 400px;\n            text-align: center;\n        }\n        .zappar-title {\n            font-size: 20px;\n        }\n        .zappar-text {\n            font-size: 14px;\n            padding: 15px;\n        }\n        .zappar-inner > button {\n            background: none;\n            outline: none;\n            border: 2px solid white;\n            border-radius: 10px;\n            color: white;\n            padding: 10px 40px;\n            text-transform: uppercase;\n        }\n    </style>\n    <div class="zappar-inner">\n        <div class="zappar-title">Permission is Needed</div>\n        <div class="zappar-text">Permission to access your device\'s camera and motion sensors is necessary for this experience.<br/><br/>To grant access, please tap the ! button in the address bar of your browser, then "Site settings", and finally "Clear and reset". You can then reload the page to try again.</div>\n        <button id="zappar-permission-reload-button">Reload</button>\n    </div>\n'),
                  document.body.append(t);
                let r = t.querySelector("#zappar-permission-reload-button");
                null === (e = r) ||
                  void 0 === e ||
                  e.addEventListener("click", () => window.location.reload());
              })();
            default:
              !(function () {
                var e;
                let t = document.createElement("div");
                t.classList.add("zappar-permission-request"),
                  (t.innerHTML =
                    '\n    <style>\n        .zappar-permission-request {\n            position: fixed;\n            width: 100%;\n            height: 100%;\n            top: 0px;\n            left: 0px;\n            z-index: 1000;\n            background-color: rgba(0, 0, 0, 0.9);\n            font-family: sans-serif;\n            color: white;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n        }\n        .zappar-inner {\n            max-width: 400px;\n            text-align: center;\n        }\n        .zappar-title {\n            font-size: 20px;\n        }\n        .zappar-text {\n            font-size: 14px;\n            padding: 15px;\n        }\n        .zappar-inner > button {\n            background: none;\n            outline: none;\n            border: 2px solid white;\n            border-radius: 10px;\n            color: white;\n            padding: 10px 40px;\n            text-transform: uppercase;\n        }\n    </style>\n    <div class="zappar-inner">\n        <div class="zappar-title">Permission is Needed</div>\n        <div class="zappar-text">Permission to access your device\'s camera and motion sensors is necessary for this experience. Please reload the page to try again.</div>\n        <button id="zappar-permission-reload-button">Reload</button>\n    </div>\n'),
                  document.body.append(t);
                let r = t.querySelector("#zappar-permission-reload-button");
                null === (e = r) ||
                  void 0 === e ||
                  e.addEventListener("click", () => window.location.reload());
              })();
          }
        });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(1);
      let a = 1,
        i = new Map();
      (t.createFaceMesh = function () {
        let e = a++;
        return i.set(e, new o()), e;
      }),
        (t.destroyFaceMesh = function (e) {
          i.delete(e);
        }),
        (t.getFaceMesh = function (e) {
          return i.get(e);
        });
      class o {
        constructor() {
          (this.render_mean_ = new Float32Array()),
            (this.render_identity_ = new Float32Array(50)),
            (this.render_expression_ = new Float32Array(29)),
            (this.render_uvs_ = new Float32Array()),
            (this.render_indices_ = new Uint16Array()),
            (this.vertices_ = new Float32Array()),
            (this.normals_ = new Float32Array()),
            (this.normalsCalculated_ = !1),
            (this.modelVersion_ = -1),
            (this.mirrored_ = !1);
        }
        loadFromMemory(e, t, r, n, a) {
          let i = 0,
            o = new Uint16Array(e),
            s = new Int32Array(e),
            u = new Float32Array(e),
            c = () => {
              let e = s[i++] * s[i++],
                t = u.subarray(i, i + e);
              return (i += e), t;
            },
            f = () => {
              let e = s[i++],
                t = o.subarray(2 * i, 2 * i + e);
              return (i += e / 2), t;
            };
          (this.render_mean_ = c()),
            (this.render_identity_ = c()),
            (this.render_expression_ = c()),
            (this.render_uvs_ = c());
          let l = f(),
            _ = i < s.length ? f() : new Uint16Array(),
            d = i < s.length ? f() : new Uint16Array(),
            h = i < s.length ? f() : new Uint16Array(),
            m = i < s.length ? f() : new Uint16Array();
          if (t || r || n || a) {
            let e = l.length;
            t && (e += _.length),
              r && (e += d.length),
              n && (e += h.length),
              a && (e += m.length),
              (this.render_indices_ = new Uint16Array(e)),
              this.render_indices_.set(l, 0);
            let i = l.length;
            t && (this.render_indices_.set(_, i), (i += _.length)),
              r && (this.render_indices_.set(d, i), (i += d.length)),
              n && (this.render_indices_.set(h, i), (i += h.length)),
              a && (this.render_indices_.set(m, i), (i += m.length));
          } else this.render_indices_ = l;
          (this.vertices_ = new Float32Array(this.render_mean_)),
            (this.normals_ = new Float32Array(this.vertices_.length)),
            this.modelVersion_++;
        }
        getVertices() {
          return this.vertices_;
        }
        getUVs() {
          return this.render_uvs_;
        }
        getIndices() {
          if (this.mirrored_) {
            if (!this.render_indices_reversed) {
              this.render_indices_reversed = new Uint16Array(
                this.render_indices_.length
              );
              for (let e = 0; e < this.render_indices_.length; e += 3)
                (this.render_indices_reversed[e] = this.render_indices_[e + 2]),
                  (this.render_indices_reversed[e + 1] = this.render_indices_[
                    e + 1
                  ]),
                  (this.render_indices_reversed[e + 2] = this.render_indices_[
                    e
                  ]);
            }
            return this.render_indices_reversed;
          }
          return this.render_indices_;
        }
        getNormals() {
          return (
            this.normalsCalculated_ || this.calculateNormals(), this.normals_
          );
        }
        getModelVersion() {
          return this.modelVersion_;
        }
        update(e, t, r) {
          if (
            0 !== this.render_mean_.length &&
            0 !== this.render_identity_.length &&
            0 !== this.render_expression_.length
          ) {
            (this.mirrored_ = r), this.vertices_.set(this.render_mean_);
            for (let t = 0; t < e.length; t++)
              for (let r = 0; r < this.vertices_.length; r++)
                this.vertices_[r] +=
                  e[t] * this.render_identity_[r + e.length + t];
            for (let e = 0; e < t.length; e++)
              for (let r = 0; r < this.vertices_.length; r++)
                this.vertices_[r] +=
                  t[e] * this.render_expression_[r * t.length + e];
            if (r)
              for (let e = 0; e < this.vertices_.length; e += 3)
                this.vertices_[e] *= -1;
            this.normalsCalculated_ = !1;
          }
        }
        calculateNormals() {
          let e = this.getIndices(),
            t = this.vertices_,
            r = new Float32Array(e.length);
          if (!t) return;
          let a = e.length,
            i = this.normals_,
            o = new Float32Array([0, 0, 0]),
            s = new Float32Array([0, 0, 0]),
            u = new Float32Array([0, 0, 0]);
          for (let i = 0; i < a; i += 3) {
            let a = 3 * e[i],
              c = 3 * e[i + 1],
              f = 3 * e[i + 2];
            (o[0] = t[c] - t[a]),
              (o[1] = t[c + 1] - t[a + 1]),
              (o[2] = t[c + 2] - t[a + 2]),
              (s[0] = t[f] - t[a]),
              (s[1] = t[f + 1] - t[a + 1]),
              (s[2] = t[f + 2] - t[a + 2]),
              n.vec3.cross(u, o, s);
            let l = n.vec3.length(u);
            (r[i] = u[0] / l), (r[i + 1] = u[1] / l), (r[i + 2] = u[2] / l);
          }
          i.fill(0);
          for (let t = 0; t < a; t += 3) {
            let n = 3 * e[t],
              a = 3 * e[t + 1],
              o = 3 * e[t + 2];
            (i[n] += r[t]),
              (i[n + 1] += r[t + 1]),
              (i[n + 2] += r[t + 2]),
              (i[a] += r[t]),
              (i[a + 1] += r[t + 1]),
              (i[a + 2] += r[t + 2]),
              (i[o] += r[t]),
              (i[o + 1] += r[t + 1]),
              (i[o + 2] += r[t + 2]);
          }
          let c = i.length / 3;
          for (let e = 0; e < c; e++) {
            let t = 3 * e;
            (o[0] = i[t]),
              (o[1] = i[t + 1]),
              (o[2] = i[t + 2]),
              n.vec3.normalize(s, o),
              (i[t] = s[0]),
              (i[t + 1] = s[1]),
              (i[t + 2] = s[2]);
          }
          this.normalsCalculated_ = !0;
        }
      }
      t.FaceMesh = o;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(4),
        a = r(1);
      t.CameraDraw = class {
        constructor(e) {
          this._gl = e;
        }
        _generate(e, t) {
          if (this._vbo) return this._vbo;
          if ((this._vbo || (this._vbo = e.createBuffer()), !this._vbo))
            throw new Error("Unable to create buffer object");
          let r = new Float32Array([
            -1,
            -1,
            0,
            0,
            0,
            -1,
            1,
            0,
            0,
            1,
            1,
            -1,
            0,
            1,
            0,
            1,
            -1,
            0,
            1,
            0,
            -1,
            1,
            0,
            0,
            1,
            1,
            1,
            0,
            1,
            1,
          ]);
          return (
            e.bindBuffer(e.ARRAY_BUFFER, this._vbo),
            e.bufferData(e.ARRAY_BUFFER, new Float32Array(r), e.STATIC_DRAW),
            e.bindBuffer(e.ARRAY_BUFFER, null),
            this._vbo
          );
        }
        drawCameraFrame(e, t, r, n) {
          let a = this._gl;
          a.disable(a.DEPTH_TEST),
            a.disable(a.SCISSOR_TEST),
            a.disable(a.CULL_FACE),
            a.disable(a.BLEND);
          let i = this._getCameraShader(a),
            o = this._generate(a, r);
          a.useProgram(i.prog),
            a.uniformMatrix4fv(
              i.unif_skinTexTransform,
              !1,
              s(r.dataWidth, r.dataHeight, e, t, r.uvTransform, n)
            ),
            a.uniform1i(i.unif_skinSampler, 0),
            a.bindTexture(a.TEXTURE_2D, r.texture),
            a.bindBuffer(a.ARRAY_BUFFER, o),
            a.vertexAttribPointer(i.attr_position, 3, a.FLOAT, !1, 20, 0),
            a.enableVertexAttribArray(i.attr_position),
            a.vertexAttribPointer(i.attr_texCoord, 2, a.FLOAT, !1, 20, 12),
            a.enableVertexAttribArray(i.attr_texCoord),
            a.drawArrays(a.TRIANGLES, 0, 6),
            a.disableVertexAttribArray(i.attr_position),
            a.disableVertexAttribArray(i.attr_texCoord),
            a.bindTexture(a.TEXTURE_2D, null),
            a.bindBuffer(a.ARRAY_BUFFER, null),
            a.useProgram(null);
        }
        _getCameraShader(e) {
          if (this._shader) return this._shader;
          let t = e.createProgram();
          if (!t) throw new Error("Unable to create program");
          let r = n.compileShader(e, e.VERTEX_SHADER, i),
            a = n.compileShader(e, e.FRAGMENT_SHADER, o);
          e.attachShader(t, r), e.attachShader(t, a), n.linkProgram(e, t);
          let s = e.getUniformLocation(t, "skinTexTransform");
          if (!s)
            throw new Error("Unable to get uniform location skinTexTransform");
          let u = e.getUniformLocation(t, "skinSampler");
          if (!u) throw new Error("Unable to get uniform location skinSampler");
          return (
            (this._shader = {
              prog: t,
              unif_skinTexTransform: s,
              unif_skinSampler: u,
              attr_position: e.getAttribLocation(t, "position"),
              attr_texCoord: e.getAttribLocation(t, "texCoord"),
            }),
            this._shader
          );
        }
      };
      let i =
          "\n#ifndef GL_ES\n#define highp\n#define mediump\n#define lowp\n#endif\n\nattribute vec4 position;\nattribute vec4 texCoord;\nvarying vec4 skinTexVarying;\nuniform mat4 skinTexTransform;\n\nvoid main()\n{\n    gl_Position = position;\n    skinTexVarying = skinTexTransform * texCoord;\n}",
        o =
          "\n#define highp mediump\n#ifdef GL_ES\n    // define default precision for float, vec, mat.\n    precision highp float;\n#else\n#define highp\n#define mediump\n#define lowp\n#endif\n\nvarying vec4 skinTexVarying;\nuniform lowp sampler2D skinSampler;\n\nvoid main()\n{\n    gl_FragColor = texture2DProj(skinSampler, skinTexVarying);\n}";
      function s(e, t, r, n, i, o) {
        let s = a.mat4.create(),
          u = a.mat4.create();
        a.mat4.fromTranslation(u, [-0.5, -0.5, 0]),
          a.mat4.multiply(s, u, s),
          o && (a.mat4.fromScaling(u, [-1, 1, 1]), a.mat4.multiply(s, u, s)),
          a.mat4.fromRotation(
            u,
            (-1 *
              (function () {
                if (window.screen.orientation)
                  switch (window.screen.orientation.type) {
                    case "portrait-primary":
                      return 270;
                    case "landscape-secondary":
                      return 180;
                    case "portrait-secondary":
                      return 90;
                    default:
                      return 0;
                  }
                else if (void 0 !== window.orientation)
                  switch (window.orientation) {
                    case 0:
                      return 270;
                    case 90:
                      return 0;
                    case 180:
                      return 90;
                    case -90:
                      return 180;
                  }
                return 0;
              })() *
              Math.PI) /
              180,
            [0, 0, 1]
          ),
          a.mat4.multiply(s, u, s);
        let c = a.vec3.create();
        (c[0] = r), (c[1] = n), (c[2] = 0), a.vec3.transformMat4(c, c, u);
        let f = Math.abs(c[0]),
          l = Math.abs(c[1]);
        a.mat4.fromScaling(u, [1, -1, 1]), a.mat4.multiply(s, u, s);
        let _ = f / l,
          d = e / t;
        return (
          _ > d
            ? a.mat4.fromScaling(u, [1, d / _, 1])
            : a.mat4.fromScaling(u, [_ / d, 1, 1]),
          a.mat4.multiply(s, u, s),
          a.mat4.fromTranslation(u, [0.5, 0.5, 0]),
          a.mat4.multiply(s, u, s),
          a.mat4.multiply(s, i, s),
          s
        );
      }
      t.cameraFrameTextureMatrix = s;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(4);
      t.FaceDraw = class {
        constructor(e) {
          this._gl = e;
        }
        _generateIBO(e, t) {
          if (this._ibo && this._lastIndices === e) return this._ibo;
          if (
            ((this._lastIndices = e),
            this._ibo || (this._ibo = t.createBuffer()),
            !this._ibo)
          )
            throw new Error("Unable to create buffer object");
          return (
            t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this._ibo),
            t.bufferData(t.ELEMENT_ARRAY_BUFFER, e, t.STATIC_DRAW),
            t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null),
            this._ibo
          );
        }
        _generateVBO(e, t) {
          if ((this._vbo || (this._vbo = t.createBuffer()), !this._vbo))
            throw new Error("Unable to create buffer object");
          return (
            t.bindBuffer(t.ARRAY_BUFFER, this._vbo),
            t.bufferData(t.ARRAY_BUFFER, e, t.STREAM_DRAW),
            t.bindBuffer(t.ARRAY_BUFFER, null),
            this._vbo
          );
        }
        _generateNormalBO(e, t) {
          if (
            (this._normalbo || (this._normalbo = t.createBuffer()),
            !this._normalbo)
          )
            throw new Error("Unable to create buffer object");
          return (
            t.bindBuffer(t.ARRAY_BUFFER, this._normalbo),
            t.bufferData(t.ARRAY_BUFFER, e, t.STREAM_DRAW),
            t.bindBuffer(t.ARRAY_BUFFER, null),
            this._normalbo
          );
        }
        drawFace(e, t) {
          let r = this._gl,
            n = this._getShader(r),
            a = this._generateVBO(t.getVertices(), r),
            i = this._generateNormalBO(t.getNormals(), r),
            o = this._generateIBO(t.getIndices(), r);
          r.enable(r.DEPTH_TEST),
            r.enable(r.CULL_FACE),
            r.useProgram(n.prog),
            r.uniformMatrix4fv(n.unif_matrix, !1, e),
            r.bindBuffer(r.ARRAY_BUFFER, a),
            r.vertexAttribPointer(n.attr_position, 3, r.FLOAT, !1, 12, 0),
            r.enableVertexAttribArray(n.attr_position),
            r.bindBuffer(r.ARRAY_BUFFER, i),
            r.vertexAttribPointer(n.attr_normal, 3, r.FLOAT, !1, 12, 0),
            r.enableVertexAttribArray(n.attr_normal),
            r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, o),
            r.drawElements(
              r.TRIANGLES,
              t.getIndices().length,
              r.UNSIGNED_SHORT,
              0
            ),
            r.disableVertexAttribArray(n.attr_position),
            r.disableVertexAttribArray(n.attr_normal),
            r.bindBuffer(r.ARRAY_BUFFER, null),
            r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, null);
        }
        _getShader(e) {
          if (this._shader) return this._shader;
          let t = e.createProgram();
          if (!t) throw new Error("Unable to create program");
          let r = n.compileShader(e, e.VERTEX_SHADER, a),
            o = n.compileShader(e, e.FRAGMENT_SHADER, i);
          e.attachShader(t, r), e.attachShader(t, o), n.linkProgram(e, t);
          let s = e.getUniformLocation(t, "matrix");
          if (!s) throw new Error("Unable to get uniform location mattrix");
          return (
            (this._shader = {
              prog: t,
              unif_matrix: s,
              attr_position: e.getAttribLocation(t, "position"),
              attr_normal: e.getAttribLocation(t, "normal"),
            }),
            this._shader
          );
        }
      };
      let a =
          "\n#ifndef GL_ES\n#define highp\n#define mediump\n#define lowp\n#endif\n\nuniform mat4 matrix;\nattribute vec4 position;\nattribute vec3 normal;\nvarying highp vec3 vnormal;\n\nvoid main()\n{\n    gl_Position = matrix * position;\n    vnormal = normal;\n}",
        i =
          "\n#define highp mediump\n#ifdef GL_ES\n    // define default precision for float, vec, mat.\n    precision highp float;\n#else\n#define highp\n#define mediump\n#define lowp\n#endif\n\nvarying vec4 skinTexVarying;\nvarying highp vec3 vnormal;\nuniform lowp sampler2D skinSampler;\n\nvoid main()\n{\n    vec3 normal2 = 0.5 * vnormal + 0.5;\n    gl_FragColor = vec4(normal2.x , normal2.y, normal2.z, 1.0);\n}";
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(4);
      t.FaceDrawProject = class {
        constructor(e) {
          this._gl = e;
        }
        _generateIBO(e, t) {
          if (this._ibo && this._lastIndices === e) return this._ibo;
          if (
            ((this._lastIndices = e),
            this._ibo || (this._ibo = t.createBuffer()),
            !this._ibo)
          )
            throw new Error("Unable to create buffer object");
          return (
            t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this._ibo),
            t.bufferData(t.ELEMENT_ARRAY_BUFFER, e, t.STATIC_DRAW),
            t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null),
            this._ibo
          );
        }
        _generateVBO(e, t) {
          if ((this._vbo || (this._vbo = t.createBuffer()), !this._vbo))
            throw new Error("Unable to create buffer object");
          return (
            t.bindBuffer(t.ARRAY_BUFFER, this._vbo),
            t.bufferData(t.ARRAY_BUFFER, e, t.STREAM_DRAW),
            t.bindBuffer(t.ARRAY_BUFFER, null),
            this._vbo
          );
        }
        _generateUVBO(e, t) {
          if ((this._uvbo || (this._uvbo = t.createBuffer()), !this._uvbo))
            throw new Error("Unable to create buffer object");
          return (
            t.bindBuffer(t.ARRAY_BUFFER, this._uvbo),
            t.bufferData(t.ARRAY_BUFFER, e, t.STREAM_DRAW),
            t.bindBuffer(t.ARRAY_BUFFER, null),
            this._uvbo
          );
        }
        drawFace(e, t, r, n, a, i) {
          let o = this._gl,
            s = this._getShader(o),
            u = this._generateVBO(t, o),
            c = this._generateUVBO(n, o),
            f = this._generateIBO(a, o);
          o.enable(o.DEPTH_TEST),
            o.enable(o.CULL_FACE),
            o.useProgram(s.prog),
            o.uniformMatrix4fv(s.unif_matrix, !1, e),
            o.uniformMatrix4fv(s.unif_uvmatrix, !1, r),
            o.activeTexture(o.TEXTURE0),
            o.bindTexture(o.TEXTURE_2D, i),
            o.uniform1i(s.unif_sampler, 0),
            o.bindBuffer(o.ARRAY_BUFFER, u),
            o.vertexAttribPointer(s.attr_position, 3, o.FLOAT, !1, 12, 0),
            o.enableVertexAttribArray(s.attr_position),
            o.bindBuffer(o.ARRAY_BUFFER, c),
            o.vertexAttribPointer(s.attr_uv, 3, o.FLOAT, !1, 12, 0),
            o.enableVertexAttribArray(s.attr_uv),
            o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, f),
            o.drawElements(o.TRIANGLES, 6912, o.UNSIGNED_SHORT, 0),
            o.disableVertexAttribArray(s.attr_position),
            o.disableVertexAttribArray(s.attr_uv),
            o.bindBuffer(o.ARRAY_BUFFER, null),
            o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, null);
        }
        _getShader(e) {
          if (this._shader) return this._shader;
          let t = e.createProgram();
          if (!t) throw new Error("Unable to create program");
          let r = n.compileShader(e, e.VERTEX_SHADER, a),
            o = n.compileShader(e, e.FRAGMENT_SHADER, i);
          e.attachShader(t, r), e.attachShader(t, o), n.linkProgram(e, t);
          let s = e.getUniformLocation(t, "matrix");
          if (!s) throw new Error("Unable to get uniform location matrix");
          let u = e.getUniformLocation(t, "uvmatrix");
          if (!u) throw new Error("Unable to get uniform location matrix");
          let c = e.getUniformLocation(t, "uSampler");
          if (!c) throw new Error("Unable to get uniform location sampler");
          return (
            (this._shader = {
              prog: t,
              unif_matrix: s,
              unif_sampler: c,
              unif_uvmatrix: u,
              attr_position: e.getAttribLocation(t, "position"),
              attr_uv: e.getAttribLocation(t, "uv"),
              attr_texturecoord: e.getAttribLocation(t, "aTextureCoord"),
            }),
            this._shader
          );
        }
      };
      let a =
          "\n#ifndef GL_ES\n#define highp\n#define mediump\n#define lowp\n#endif\n\nuniform mat4 matrix;\nuniform mat4 uvmatrix;\nattribute vec4 position;\nattribute vec3 normal;\nattribute vec3 uv;\n\n// varying highp vec3 vnormal;\n\nvarying highp vec2 vTextureCoord;\nvarying highp float vAlpha;\n\nvoid main()\n{\n    gl_Position = matrix * position;\n    vec4 ret = uvmatrix * vec4(uv.x, uv.y, uv.z, 1.0);\n    ret.x /= ret.w * 2.0;\n    ret.y /= ret.w * 2.0;\n    ret.x += 0.5;\n    ret.y += 0.0;\n    vAlpha = 1.0;\n    vTextureCoord = ret.xy;\n}",
        i =
          "\n#define highp mediump\n#ifdef GL_ES\n    // define default precision for float, vec, mat.\n    precision highp float;\n#else\n#define highp\n#define mediump\n#define lowp\n#endif\n\nvarying highp vec2 vTextureCoord;\nvarying highp vec3 vnormal;\nvarying highp float vAlpha;\nuniform lowp sampler2D uSampler;\n\nvoid main()\n{\n    // vec3 normal2 = 0.5 * vnormal + 0.5;\n    vec4 p = texture2D(uSampler, vTextureCoord);\n    p.a = vAlpha;\n    gl_FragColor = p; // vec4(normal2.x , normal2.y, normal2.z, 1.0);\n}";
    },
    function (e, t, r) {
      "use strict";
      var n =
        (this && this.__awaiter) ||
        function (e, t, r, n) {
          return new (r || (r = Promise))(function (a, i) {
            function o(e) {
              try {
                u(n.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                u(n.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(o, s);
            }
            u((n = n.apply(e, t || [])).next());
          });
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = r(11),
        i = r(12),
        o = r(9),
        s = r(8);
      let u = 1,
        c = new Map(),
        f = document.createElement("video");
      f.setAttribute("playsinline", ""),
        f.setAttribute("webkit-playsinline", ""),
        i.profile.videoElementInDOM &&
          ((f.style.width = "0px"),
          (f.style.height = "0px"),
          document.body.appendChild(f));
      class l extends a.HTMLElementSource {
        constructor(e, t, r) {
          super(f, t),
            (this._impl = e),
            (this._deviceId = r),
            (this._currentStream = null),
            (this._activeDeviceId = null),
            (this._hasStartedOrientation = !1),
            (this._deviceMotionListener = (e) => {
              let t = o.Pipeline.get(this._pipeline);
              if (!t) return;
              let r =
                void 0 !== e.timeStamp && null !== e.timeStamp
                  ? e.timeStamp
                  : performance.now();
              null !== e.accelerationIncludingGravity &&
                null !== e.accelerationIncludingGravity.x &&
                null !== e.accelerationIncludingGravity.y &&
                null !== e.accelerationIncludingGravity.z &&
                t.motionAccelerometerSubmit(
                  r,
                  e.accelerationIncludingGravity.x *
                    i.profile.deviceMotionMutliplier,
                  e.accelerationIncludingGravity.y *
                    i.profile.deviceMotionMutliplier,
                  e.accelerationIncludingGravity.z *
                    i.profile.deviceMotionMutliplier
                ),
                null === e.rotationRate ||
                null === e.rotationRate.alpha ||
                null === e.rotationRate.beta ||
                null === e.rotationRate.gamma ||
                this._hasStartedOrientation
                  ? this._hasStartedOrientation ||
                    this._startDeviceOrientation()
                  : (e.timeStamp,
                    t.motionRotationRateSubmit(
                      r,
                      (e.rotationRate.alpha * Math.PI) / -180,
                      (e.rotationRate.beta * Math.PI) / -180,
                      (e.rotationRate.gamma * Math.PI) / -180
                    ));
            });
        }
        static create(e, t) {
          let r = u++;
          return c.set(r, new l(r, e, t)), r;
        }
        static get(e) {
          return c.get(e);
        }
        destroy() {
          c.delete(this._impl), super.destroy();
        }
        _stop() {
          if (!this._currentStream) return;
          this._currentStream.getTracks().forEach((e) => e.stop()),
            (this._currentStream = null);
        }
        pause() {
          super.pause(), this._stopDeviceMotion(), this._syncCamera();
        }
        start() {
          super.start(), this._startDeviceMotion(), this._syncCamera();
        }
        _getConstraints() {
          return n(this, void 0, void 0, function* () {
            let e, t;
            this._deviceId !== l.DEFAULT_DEVICE_ID &&
            this._deviceId !== l.USER_DEFAULT_DEVICE_ID
              ? (e = this._deviceId)
              : (t =
                  this._deviceId === l.DEFAULT_DEVICE_ID
                    ? "environment"
                    : "user");
            let r = {
              audio: !1,
              video: {
                facingMode: t,
                width: i.profile.videoWidth,
                height: i.profile.videoHeight,
                frameRate: i.profile.requestHighFrameRate ? 60 : void 0,
                deviceId: e,
              },
            };
            if (e) return r;
            if (
              !navigator.mediaDevices ||
              !navigator.mediaDevices.enumerateDevices
            )
              return r;
            let n = yield navigator.mediaDevices.enumerateDevices(),
              a = !1;
            return (
              (n = n.filter((e) => {
                if ("videoinput" !== e.kind) return !1;
                if (e.getCapabilities) {
                  a = !0;
                  let r = e.getCapabilities();
                  if (
                    r &&
                    r.facingMode &&
                    r.facingMode.indexOf(
                      "user" === t ? "user" : "environment"
                    ) < 0
                  )
                    return !1;
                }
                return !0;
              })),
              a && 0 !== n.length
                ? ("object" == typeof r.video &&
                    (console.log(
                      "Choosing device ID",
                      n[n.length - 1].deviceId
                    ),
                    (r.video.deviceId = n[n.length - 1].deviceId)),
                  r)
                : (console.log("Falling back to default constraints"), r)
            );
          });
        }
        getFrame(e) {
          return (
            (this._cameraToScreenRotation = s.cameraRotationForScreenOrientation(
              !1
            )),
            super.getFrame(e)
          );
        }
        _getUserMedia() {
          return n(this, void 0, void 0, function* () {
            let e = yield this._getConstraints();
            return navigator.mediaDevices && navigator.mediaDevices.getUserMedia
              ? yield navigator.mediaDevices.getUserMedia(e)
              : yield new Promise((t, r) => {
                  navigator.getUserMedia(e, t, r);
                });
          });
        }
        _syncCamera() {
          return n(this, void 0, void 0, function* () {
            if (this._currentStream && this._isPaused) this._stop();
            else if (
              (this._currentStream &&
                this._activeDeviceId !== this._deviceId &&
                this._stop(),
              !this._isPaused)
            ) {
              if (
                ((this._activeDeviceId = this._deviceId),
                (this._currentStream = yield this._getUserMedia()),
                this._isPaused)
              )
                return void (yield this._syncCamera());
              if (((this._isUserFacing = !1), this._currentStream)) {
                let e = this._currentStream.getVideoTracks();
                e.length > 0 &&
                  (this._isUserFacing =
                    "user" === e[0].getSettings().facingMode);
              }
              if (!(this._video instanceof HTMLVideoElement)) return;
              (this._video.src = ""),
                (this._video.loop = !1),
                (this._video.muted = !0),
                (this._video.srcObject = this._currentStream),
                this._video.play();
            }
          });
        }
        _startDeviceOrientation() {
          this._hasStartedOrientation ||
            ((this._hasStartedOrientation = !0),
            window.addEventListener("deviceorientation", (e) => {
              let t = o.Pipeline.get(this._pipeline);
              if (!t) return;
              let r =
                void 0 !== e.timeStamp && null !== e.timeStamp
                  ? e.timeStamp
                  : performance.now();
              null !== e.alpha &&
                null !== e.beta &&
                null !== e.gamma &&
                t.motionAttitudeSubmit(r, e.alpha, e.beta, e.gamma);
            }));
        }
        _startDeviceMotion() {
          window.addEventListener(
            "devicemotion",
            this._deviceMotionListener,
            !1
          );
        }
        _stopDeviceMotion() {
          window.removeEventListener(
            "devicemotion",
            this._deviceMotionListener
          );
        }
      }
      (t.CameraSource = l),
        (l.USER_DEFAULT_DEVICE_ID =
          "Simulated User Default Device ID: a908df7f-5661-4d20-b227-a1c15d2fdb4b"),
        (l.DEFAULT_DEVICE_ID =
          "Simulated Default Device ID: a908df7f-5661-4d20-b227-a1c15d2fdb4b");
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.Source = class {};
    },
    function (e, t, r) {
      "use strict";
      r.r(t), (t.default = r.p + "e82aa94b3317f69dbbc33ced1ad50059.zbin");
    },
    function (e, t, r) {
      "use strict";
      r.r(t), (t.default = r.p + "b1e74c5329dbad2db41d8659ccd53879.zbin");
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(0);
      t.InstantWorldTracker = class {
        constructor(e) {
          (this._pipeline = e),
            (this.anchor = {
              poseCameraRelative: (e) => this._anchorPoseCameraRelative(e),
              pose: (e, t) => this._anchorPose(e, t),
            }),
            (this._z = n.z()),
            (this._impl = this._z.instant_world_tracker_create(
              this._pipeline._getImpl()
            ));
        }
        destroy() {
          this._z.instant_world_tracker_destroy(this._impl);
        }
        _anchorPoseCameraRelative(e) {
          return this._z.instant_world_tracker_anchor_pose_camera_relative(
            this._impl,
            !0 === e
          );
        }
        _anchorPose(e, t) {
          return this._z.instant_world_tracker_anchor_pose(
            this._impl,
            e,
            !0 === t
          );
        }
        get enabled() {
          return this._z.instant_world_tracker_enabled(this._impl);
        }
        set enabled(e) {
          this._z.instant_world_tracker_enabled_set(this._impl, e);
        }
        setAnchorPoseFromCameraOffset(e, t, r, n) {
          this._z.instant_world_tracker_anchor_pose_set_from_camera_offset(
            this._impl,
            e,
            t,
            r,
            n || 4
          );
        }
      };
      new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(6),
        a = r(0);
      t.BarcodeFinder = class {
        constructor(e) {
          (this._pipeline = e),
            (this.onDetection = new n.Event1()),
            (this._lastDetected = []),
            (this._found = []),
            (this._formats = []),
            (this._frameUpdate = () => {
              this._found = [];
              let e = this._z.barcode_finder_found_number(this._impl);
              for (let t = 0; t < e; t++)
                this._found.push({
                  text: this._z.barcode_finder_found_text(this._impl, t),
                  format: this._z.barcode_finder_found_format(this._impl, t),
                });
              if (0 !== this._found.length) {
                e: for (let e of this._found) {
                  for (let t of this._lastDetected)
                    if (t.text === e.text) continue e;
                  this.onDetection.emit(e);
                }
                this._lastDetected = this._found;
              }
            }),
            this._pipeline._onFrameUpdateInternal.bind(this._frameUpdate),
            (this._z = a.z()),
            (this._impl = this._z.barcode_finder_create(
              this._pipeline._getImpl()
            )),
            this._formats.push.apply(this._formats, [
              1,
              2,
              4,
              8,
              16,
              32,
              64,
              128,
              256,
              512,
              1024,
              2048,
              4096,
              8192,
              16384,
              32768,
              65536,
            ]);
        }
        destroy() {
          this._pipeline._onFrameUpdateInternal.unbind(this._frameUpdate),
            (this._found = []),
            (this._lastDetected = []),
            this._z.barcode_finder_destroy(this._impl);
        }
        get found() {
          return this._found;
        }
        get enabled() {
          return this._z.barcode_finder_enabled(this._impl);
        }
        set enabled(e) {
          this._z.barcode_finder_enabled_set(this._impl, e);
        }
        get formats() {
          return this._formats;
        }
        set formats(e) {
          this._formats = e.slice();
          let t = 0;
          for (let e of this._formats) t |= e;
          this._z.barcode_finder_formats_set(this._impl, t);
        }
      };
    },
    function (e, t, r) {
      "use strict";
      var n =
        (this && this.__awaiter) ||
        function (e, t, r, n) {
          return new (r || (r = Promise))(function (a, i) {
            function o(e) {
              try {
                u(n.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                u(n.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(o, s);
            }
            u((n = n.apply(e, t || [])).next());
          });
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = r(6),
        i = r(0);
      t.FaceTracker = class {
        constructor(e) {
          (this._pipeline = e),
            (this.onVisible = new a.Event1()),
            (this.onNotVisible = new a.Event1()),
            (this.onNewAnchor = new a.Event1()),
            (this.visible = new Set()),
            (this.anchors = new Map()),
            (this._visibleLastFrame = new Set()),
            (this._frameUpdate = () => {
              let e = new Set(),
                t = this.visible;
              (this.visible = this._visibleLastFrame),
                (this._visibleLastFrame = t),
                this.visible.clear();
              let r = this._z.face_tracker_anchor_count(this._impl);
              for (let t = 0; t < r; t++) {
                let r = this._z.face_tracker_anchor_id(this._impl, t),
                  n = this.anchors.get(r),
                  i = !1;
                n ||
                  ((n = {
                    onVisible: new a.Event(),
                    onNotVisible: new a.Event(),
                    id: r,
                    poseCameraRelative: (e) =>
                      this._z.face_tracker_anchor_pose_camera_relative(
                        this._impl,
                        t,
                        !0 === e
                      ),
                    pose: (e, r) =>
                      this._z.face_tracker_anchor_pose(
                        this._impl,
                        t,
                        e,
                        !0 === r
                      ),
                    identity: new Float32Array(50),
                    expression: new Float32Array(29),
                    visible: !0,
                  }),
                  (i = !0),
                  this.anchors.set(r, n),
                  e.add(n)),
                  (n.visible = !0),
                  (n.identity = this._z.face_tracker_anchor_identity_coefficients(
                    this._impl,
                    t
                  )),
                  (n.expression = this._z.face_tracker_anchor_expression_coefficients(
                    this._impl,
                    t
                  )),
                  this.visible.add(n);
              }
              for (let t of e) this.onNewAnchor.emit(t);
              for (let e of this.visible)
                this._visibleLastFrame.has(e)
                  ? this._visibleLastFrame.delete(e)
                  : (this.onVisible.emit(e), e.onVisible.emit());
              for (let e of this._visibleLastFrame)
                this.onNotVisible.emit(e), e.onNotVisible.emit();
            }),
            this._pipeline._onFrameUpdateInternal.bind(this._frameUpdate),
            (this._z = i.z()),
            (this._impl = this._z.face_tracker_create(
              this._pipeline._getImpl()
            ));
        }
        destroy() {
          this._pipeline._onFrameUpdateInternal.unbind(this._frameUpdate),
            this.anchors.clear(),
            this.visible.clear(),
            this._z.face_tracker_destroy(this._impl);
        }
        loadModel(e) {
          return n(this, void 0, void 0, function* () {
            "string" == typeof e && (e = yield (yield fetch(e)).arrayBuffer()),
              this._z.face_tracker_model_load_from_memory(this._impl, e);
          });
        }
        loadDefaultModel() {
          return n(this, void 0, void 0, function* () {
            yield this._z.face_tracker_model_load_default(this._impl);
          });
        }
        get enabled() {
          return this._z.face_tracker_enabled(this._impl);
        }
        set enabled(e) {
          this._z.face_tracker_enabled_set(this._impl, e);
        }
        get maxFaces() {
          return this._z.face_tracker_max_faces(this._impl);
        }
        set maxFaces(e) {
          this._z.face_tracker_max_faces_set(this._impl, e);
        }
      };
    },
    function (e, t, r) {
      "use strict";
      var n =
        (this && this.__awaiter) ||
        function (e, t, r, n) {
          return new (r || (r = Promise))(function (a, i) {
            function o(e) {
              try {
                u(n.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                u(n.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(o, s);
            }
            u((n = n.apply(e, t || [])).next());
          });
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = r(0);
      t.FaceMesh = class {
        constructor() {
          (this._z = a.z()), (this._impl = this._z.face_mesh_create());
        }
        destroy() {
          this._z.face_mesh_destroy(this._impl);
        }
        load(e, t, r, a, i) {
          return n(this, void 0, void 0, function* () {
            "string" == typeof e && (e = yield (yield fetch(e)).arrayBuffer()),
              this._z.face_mesh_load_from_memory(
                this._impl,
                e,
                t || !1,
                r || !1,
                a || !1,
                i || !1
              );
          });
        }
        loadDefault() {
          return n(this, void 0, void 0, function* () {
            yield this._z.face_mesh_load_default(this._impl);
          });
        }
        loadDefaultFace(e, t, r) {
          return n(this, void 0, void 0, function* () {
            yield this._z.face_mesh_load_default_face(
              this._impl,
              e || !1,
              t || !1,
              r || !1
            );
          });
        }
        loadDefaultFullHeadSimplified(e, t, r, a) {
          return n(this, void 0, void 0, function* () {
            yield this._z.face_mesh_load_default_full_head_simplified(
              this._impl,
              e || !1,
              t || !1,
              r || !1,
              a || !1
            );
          });
        }
        updateFromFaceAnchor(e, t) {
          this._z.face_mesh_update(
            this._impl,
            e.identity,
            e.expression,
            t || !1
          );
        }
        updateFromIdentityExpression(e, t, r) {
          this._z.face_mesh_update(this._impl, e, t, r || !1);
        }
        get vertices() {
          return this._z.face_mesh_vertices(this._impl);
        }
        get indices() {
          return this._z.face_mesh_indices(this._impl);
        }
        get uvs() {
          return this._z.face_mesh_uvs(this._impl);
        }
        get normals() {
          return this._z.face_mesh_normals(this._impl);
        }
        _getImpl() {
          return this._impl;
        }
      };
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(0);
      t.CameraSource = class {
        constructor(e, t) {
          (this._z = n.z()),
            (this._impl = this._z.camera_source_create(e._getImpl(), t));
        }
        destroy() {
          this._z.camera_source_destroy(this._impl);
        }
        start() {
          this._z.camera_source_start(this._impl);
        }
        pause() {
          this._z.camera_source_pause(this._impl);
        }
      };
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(0);
      t.HTMLElementSource = class {
        constructor(e, t) {
          (this._z = n.z()),
            (this._impl = this._z.html_element_source_create(e._getImpl(), t));
        }
        destroy() {
          this._z.html_element_source_destroy(this._impl);
        }
        start() {
          this._z.html_element_source_start(this._impl);
        }
        pause() {
          this._z.html_element_source_pause(this._impl);
        }
      };
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(0),
        a = r(6);
      t.Pipeline = class {
        constructor() {
          (this.onFrameUpdate = new a.Event()),
            (this._onFrameUpdateInternal = new a.Event()),
            (this._lastFrameNumber = -1),
            (this._z = n.z()),
            (this._impl = this._z.pipeline_create());
        }
        frameUpdate() {
          this._z.pipeline_frame_update(this._impl);
          let e = this._z.pipeline_frame_number(this._impl);
          e !== this._lastFrameNumber &&
            ((this._lastFrameNumber = e),
            this._onFrameUpdateInternal.emit(),
            this.onFrameUpdate.emit());
        }
        _getImpl() {
          return this._impl;
        }
        glContextSet(e) {
          this._z.pipeline_gl_context_set(this._impl, e);
        }
        cameraFrameTextureGL() {
          return this._z.pipeline_camera_frame_texture_gl(this._impl);
        }
        cameraFrameTextureMatrix(e, t, r) {
          return this._z.pipeline_camera_frame_texture_matrix(
            this._impl,
            e,
            t,
            !0 === r
          );
        }
        cameraFrameDrawGL(e, t, r) {
          this._z.pipeline_camera_frame_draw_gl(this._impl, e, t, r);
        }
        cameraFrameUploadGL() {
          this._z.pipeline_camera_frame_upload_gl(this._impl);
        }
        processGL() {
          this._z.pipeline_process_gl(this._impl);
        }
        cameraModel() {
          return this._z.pipeline_camera_model(this._impl);
        }
        cameraPoseDefault() {
          return this._z.pipeline_camera_pose_default(this._impl);
        }
        cameraPoseWithAttitude(e) {
          return this._z.pipeline_camera_pose_with_attitude(
            this._impl,
            e || !1
          );
        }
        cameraPoseWithOrigin(e) {
          return this._z.pipeline_camera_pose_with_origin(this._impl, e);
        }
        cameraFrameUserFacing() {
          return this._z.pipeline_camera_frame_user_facing(this._impl);
        }
        drawFace(e, t, r, n) {
          this._z.pipeline_draw_face(this._impl, e, t, r, n._getImpl());
        }
      };
    },
    function (e, t, r) {
      "use strict";
      var n =
        (this && this.__awaiter) ||
        function (e, t, r, n) {
          return new (r || (r = Promise))(function (a, i) {
            function o(e) {
              try {
                u(n.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                u(n.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(o, s);
            }
            u((n = n.apply(e, t || [])).next());
          });
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = r(0);
      var i;
      !(function (e) {
        (e[(e.CAMERA = 0)] = "CAMERA"), (e[(e.MOTION = 1)] = "MOTION");
      })((i = t.Permission || (t.Permission = {}))),
        (t.permissionGranted = function (e) {
          switch (e) {
            case i.CAMERA:
              return a.z().permission_granted_camera();
            case i.MOTION:
              return a.z().permission_granted_motion();
            default:
              return a.z().permission_granted_all();
          }
        }),
        (t.permissionDenied = function (e) {
          switch (e) {
            case i.CAMERA:
              return a.z().permission_denied_camera();
            case i.MOTION:
              return a.z().permission_denied_motion();
            default:
              return a.z().permission_denied_any();
          }
        }),
        (t.permissionRequest = function (e) {
          switch (e) {
            case i.CAMERA:
              a.z().permission_request_camera();
              break;
            case i.MOTION:
              a.z().permission_request_motion();
              break;
            default:
              a.z().permission_request_all();
          }
          return new Promise((t) =>
            n(this, void 0, void 0, function* () {
              for (;;)
                switch (
                  (yield new Promise((e) => requestAnimationFrame(() => e())),
                  e)
                ) {
                  case i.CAMERA:
                    if (a.z().permission_granted_camera()) return void t(!0);
                    if (a.z().permission_denied_camera()) return void t(!1);
                    break;
                  case i.MOTION:
                    if (a.z().permission_granted_motion()) return void t(!0);
                    if (a.z().permission_denied_motion()) return void t(!1);
                    break;
                  default:
                    if (
                      a.z().permission_granted_camera() &&
                      a.z().permission_granted_motion()
                    )
                      return void t(!0);
                    if (
                      a.z().permission_denied_camera() ||
                      a.z().permission_denied_motion()
                    )
                      return void t(!1);
                }
            })
          );
        }),
        (t.permissionRequestUI = function () {
          return n(this, void 0, void 0, function* () {
            return yield a.z().permission_request_ui_promise();
          });
        }),
        (t.permissionDeniedUI = function () {
          return a.z().permission_denied_ui();
        });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(5),
        a = AFRAME.THREE;
      class i extends a.Group {
        constructor(e, t, r) {
          super(),
            (this._camera = e),
            (this.imageTracker = t),
            (this.anchorId = r),
            (this.isReady = !1),
            (this.matrixAutoUpdate = !1);
        }
        updateMatrixWorld(e) {
          (this.currentAnchor &&
            this.imageTracker.visible.has(this.currentAnchor)) ||
            (this.anchorId
              ? (this.currentAnchor = this.imageTracker.anchors.get(
                  this.anchorId
                ))
              : (this.currentAnchor = this.imageTracker.visible
                  .values()
                  .next().value)),
            this.currentAnchor &&
              this.matrix.fromArray(
                this.currentAnchor.pose(
                  this._camera.rawPose,
                  this._camera.currentMirrorMode === n.CameraMirrorMode.Poses
                )
              ),
            super.updateMatrixWorld(e);
        }
      }
      t.ImageAnchorGroup = i;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(7),
        a = AFRAME.THREE;
      class i extends a.Loader {
        constructor(e) {
          super(e);
        }
        load(e, t, r, a) {
          let i = new n.ImageTracker();
          return (
            i
              .loadTarget(e)
              .then(() => {
                var e;
                null === (e = t) || void 0 === e || e(i);
              })
              .catch((e) => {
                var t;
                null === (t = a) || void 0 === t || t();
              }),
            i
          );
        }
        parse() {}
      }
      t.ImageTrackerLoader = i;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(5),
        a = AFRAME.THREE;
      class i extends a.Group {
        constructor(e, t) {
          super(),
            (this._camera = e),
            (this.instantTracker = t),
            (this.matrixAutoUpdate = !1);
        }
        setAnchorPoseFromCameraOffset(e, t, r, n) {
          this.instantTracker.setAnchorPoseFromCameraOffset(e, t, r, n);
        }
        updateMatrixWorld(e) {
          this.matrix.fromArray(
            this.instantTracker.anchor.pose(
              this._camera.rawPose,
              this._camera.currentMirrorMode === n.CameraMirrorMode.Poses
            )
          ),
            super.updateMatrixWorld(e);
        }
      }
      t.InstantWorldAnchorGroup = i;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(5),
        a = AFRAME.THREE;
      class i extends a.Group {
        constructor(e, t, r) {
          super(),
            (this._camera = e),
            (this.faceTracker = t),
            (this.anchorId = r),
            (this.isReady = !1),
            (this.matrixAutoUpdate = !1);
        }
        updateMatrixWorld(e) {
          (this.currentAnchor &&
            this.faceTracker.visible.has(this.currentAnchor)) ||
            (this.anchorId
              ? (this.currentAnchor = this.faceTracker.anchors.get(
                  this.anchorId
                ))
              : (this.currentAnchor = this.faceTracker.visible
                  .values()
                  .next().value)),
            this.currentAnchor &&
              this.matrix.fromArray(
                this.currentAnchor.pose(
                  this._camera.rawPose,
                  this._camera.currentMirrorMode === n.CameraMirrorMode.Poses
                )
              ),
            super.updateMatrixWorld(e);
        }
      }
      t.FaceAnchorGroup = i;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(7),
        a = AFRAME.THREE;
      class i extends a.Loader {
        constructor(e) {
          super(e);
        }
        load(e, t, r, a) {
          let i = new n.FaceTracker();
          return (
            (e ? i.loadModel(e) : i.loadDefaultModel())
              .then(() => {
                var e;
                null === (e = t) || void 0 === e || e(i);
              })
              .catch((e) => {
                var t;
                null === (t = a) || void 0 === t || t();
              }),
            i
          );
        }
        parse() {}
      }
      t.FaceTrackerLoader = i;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(16),
        a = AFRAME.THREE;
      class i extends a.Loader {
        constructor(e) {
          super(e);
        }
        load(e, t, r) {
          return new n.HeadMaskMesh(e, r);
        }
        parse() {}
      }
      t.HeadMaskMeshLoader = i;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = AFRAME.THREE;
      class a extends n.LoadingManager {
        constructor(e, t, r, n) {
          super(
            () => {
              var e;
              return null === (e = t) || void 0 === e ? void 0 : e();
            },
            (e, t, n) => {
              var a;
              null === (a = r) || void 0 === a || a(e, t, n),
                this.updateLoader((t / n) * 100);
            },
            n
          ),
            (this.onStartCallback = void 0),
            (this.updateLoader = (e) => {
              const t = document.getElementById("loader-bar");
              (t.style.width = e + "%"),
                (t.style.borderTopRightRadius = e + "px"),
                (t.style.borderBottomRightRadius = e + "px"),
                t.addEventListener("transitionend", (t) => {
                  100 == e &&
                    ((this.containerDiv.style.opacity = "0"),
                    this.containerDiv.addEventListener("transitionend", (e) => {
                      "opacity" == e.propertyName && this.removeDiv();
                    }));
                });
            }),
            (this.onStart = () => {
              this._initialiseDiv(),
                this.onStartCallback && this.onStartCallback();
            }),
            (this._onStart = (e) => {
              this.onStartCallback = e;
            }),
            (this.removeDiv = () => {
              this.containerDiv.remove();
            }),
            (this.customStyle = e),
            (this.containerDiv = document.createElement("div"));
        }
        _initialiseDiv() {
          var e, t, r, n, a;
          let i = {
              position: "fixed",
              width: "100%",
              height: "100%",
              top: "0px",
              left: "0px",
              zIndex: 1e4,
              backgroundColor: "rgba(0,0,0,0.8)",
              fontFamily: "sans-serif",
              color: "rgba(255,255,255,1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transition: "opacity 500ms",
            },
            o = { maxWidth: "400px", textAlign: "center" },
            s = { fontSize: "20px" },
            u = {
              background: "rgba(255,255,255, 0.1)",
              justifyContent: "flex-start",
              borderRadius: "100px",
              alignItems: "center",
              position: "relative",
              padding: "0 5px",
              display: "flex",
              height: "15px",
              width: "250px",
              margin: "15px",
            },
            c = {
              boxShadow: "0 10px 40px -10px #fff",
              borderTopLeftRadius: "100px",
              borderBottomLeftRadius: "100px",
              background: "rgba(255,255,255,1)",
              height: "10px",
              width: "0",
              transition: "width 500ms",
            };
          Object.assign(
            i,
            null === (e = this.customStyle) || void 0 === e
              ? void 0
              : e.container
          ),
            Object.assign(
              o,
              null === (t = this.customStyle) || void 0 === t ? void 0 : t.inner
            ),
            Object.assign(
              s,
              null === (r = this.customStyle) || void 0 === r ? void 0 : r.title
            ),
            Object.assign(
              u,
              null === (n = this.customStyle) || void 0 === n
                ? void 0
                : n.progress
            ),
            Object.assign(
              c,
              null === (a = this.customStyle) || void 0 === a
                ? void 0
                : a.progressValue
            );
          const f = {
            inner: document.createElement("div"),
            title: document.createElement("div"),
            progress: document.createElement("div"),
            progressValue: document.createElement("div"),
          };
          f.inner.classList.add("zappar-inner-loading"),
            (f.title.id = "zappar-title-loading"),
            (f.title.innerText = "Loading.."),
            (f.inner.id = "zappar-progress"),
            (f.progress.id = "zappar-loading-progress"),
            (f.progressValue.id = "loader-bar"),
            Object.assign(this.containerDiv.style, i),
            Object.assign(f.inner.style, o),
            Object.assign(f.title.style, s),
            Object.assign(f.progress.style, u),
            Object.assign(f.progressValue.style, c),
            f.inner.appendChild(f.title),
            f.inner.appendChild(f.progress),
            f.progress.appendChild(f.progressValue),
            this.containerDiv.appendChild(f.inner),
            document.body.append(this.containerDiv);
        }
      }
      t.LoadingManager = a;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(2);
      t.default = AFRAME.registerComponent("zappar-instant", {
        schema: { placementMode: { type: "boolean", default: !1 } },
        init: function () {
          let e = this.el,
            t = document.querySelector("a-scene").systems["zappar-camera"],
            r = t.camera,
            a = document.querySelector("a-scene").object3D,
            i = new n.InstantWorldTracker();
          (this.trackerGroup = new n.InstantWorldAnchorGroup(r, i)),
            a.add(this.trackerGroup),
            (e.object3D.matrixAutoUpdate = !1),
            t.registerForCallbacks(
              (this._frameUpdate = () => {
                this.data.placementMode &&
                  i.setAnchorPoseFromCameraOffset(0, 0, -5),
                  (e.object3D.matrix = this.trackerGroup.matrix);
              })
            );
        },
        remove: function () {
          document
            .querySelector("a-scene")
            .systems["zappar-camera"].unregisterForCallbacks(this._frameUpdate),
            this.trackerGroup.instantTracker.destroy();
        },
      });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(2);
      t.default = AFRAME.registerComponent("zappar-image", {
        schema: { type: "asset", default: "" },
        update: function (e) {
          this.data !== e &&
            this.trackerGroup.imageTracker.loadTarget(this.data);
        },
        init: function () {
          let e = this.el,
            t = document.querySelector("a-scene").systems["zappar-camera"],
            r = t.camera,
            a = document.querySelector("a-scene").object3D;
          (this.trackerGroup = new n.ImageAnchorGroup(r, new n.ImageTracker())),
            a.add(this.trackerGroup),
            (e.object3D.matrixAutoUpdate = !1),
            t.registerForCallbacks(
              (this._frameUpdate = () => {
                e.object3D.matrix = this.trackerGroup.matrix;
              })
            ),
            this.trackerGroup.imageTracker.onVisible.bind((t) =>
              e.emit("zappar-visible", t)
            ),
            this.trackerGroup.imageTracker.onNotVisible.bind((t) =>
              e.emit("zappar-notvisible", t)
            ),
            this.trackerGroup.imageTracker.onNewAnchor.bind((t) =>
              e.emit("zappar-newanchor", t)
            );
        },
        remove: function () {
          document
            .querySelector("a-scene")
            .systems["zappar-camera"].unregisterForCallbacks(this._frameUpdate),
            this.trackerGroup.imageTracker.destroy();
        },
      });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(2);
      t.default = AFRAME.registerComponent("zappar-face", {
        init: function () {
          let e = this.el,
            t = document.querySelector("a-scene").systems["zappar-camera"],
            r = t.camera,
            a = document.querySelector("a-scene").object3D;
          (this.trackerGroup = new n.FaceAnchorGroup(
            r,
            new n.FaceTrackerLoader().load()
          )),
            a.add(this.trackerGroup),
            this.trackerGroup.faceTracker.onVisible.bind((t) =>
              e.emit("zappar-visible", t)
            ),
            this.trackerGroup.faceTracker.onNotVisible.bind((t) =>
              e.emit("zappar-notvisible", t)
            ),
            this.trackerGroup.faceTracker.onNewAnchor.bind((t) =>
              e.emit("zappar-newanchor", t)
            ),
            (e.object3D.matrixAutoUpdate = !1),
            t.registerForCallbacks(
              (this._frameUpdate = () => {
                e.object3D.matrix = this.trackerGroup.matrix;
              })
            );
        },
        remove: function () {
          document
            .querySelector("a-scene")
            .systems["zappar-camera"].unregisterForCallbacks(this._frameUpdate),
            this.trackerGroup.faceTracker.destroy();
        },
      });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(2);
      t.default = AFRAME.registerGeometry("face-mesh", {
        schema: {
          face: { type: "string" },
          model: { type: "string" },
          fillMouth: { type: "boolean" },
          fillEyeLeft: { type: "boolean" },
          fillEyeRight: { type: "boolean" },
          fillNeck: { type: "boolean" },
        },
        init: function (e) {
          e.buffer = !1;
          let t = {
              fillMouth: e.fillMouth || !1,
              fillEyeLeft: e.fillEyeLeft || !1,
              fillEyeRight: e.fillEyeRight || !1,
              fillNeck: e.fillNeck || !1,
            },
            r =
              "full-head-simplified" === e.model
                ? new n.FaceMeshLoader().loadFullHeadSimplified(t)
                : new n.FaceMeshLoader().loadFace(t),
            a = new n.FaceBufferGeometry(r);
          (this.geometry = a),
            document
              .querySelector("a-scene")
              .systems["zappar-camera"].registerForCallbacks(
                (this._frameUpdate = () => {
                  let t = document.querySelector(e.face);
                  t &&
                    t.components &&
                    t.components["zappar-face"] &&
                    t.components["zappar-face"].trackerGroup &&
                    a.updateFromFaceAnchorGroup(
                      t.components["zappar-face"].trackerGroup
                    );
                })
              );
        },
      });
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(2);
      t.default = AFRAME.registerComponent("zappar-head-mask", {
        schema: { face: { type: "string" } },
        update: function (e) {
          console.log("GOT UDPATE DATA!", this.data);
        },
        init: function (e) {
          console.log("GOT DATA!", e);
          let t = this.el,
            r = new n.HeadMaskMeshLoader().load();
          (this.mesh = r),
            (this.mesh.material.colorWrite = !1),
            t.setObject3D("mesh", this.mesh),
            document
              .querySelector("a-scene")
              .systems["zappar-camera"].registerForCallbacks(
                (this._frameUpdate = () => {
                  if (!this.data) return;
                  let e = document.querySelector(this.data.face);
                  e &&
                    e.components &&
                    e.components["zappar-face"] &&
                    e.components["zappar-face"].trackerGroup &&
                    r.updateFromFaceAnchorGroup(
                      e.components["zappar-face"].trackerGroup
                    );
                })
              );
        },
        remove: function () {
          document
            .querySelector("a-scene")
            .systems["zappar-camera"].unregisterForCallbacks(this._frameUpdate),
            this.el.removeObject3D("mesh");
        },
      });
    },
  ]);
});
