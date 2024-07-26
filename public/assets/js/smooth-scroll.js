!(function () {
  var e,
    t,
    o,
    n,
    r = {
      frameRate: 150,
      animationTime: 600,
      stepSize: 80,
      pulseAlgorithm: !0,
      pulseScale: 4,
      pulseNormalize: 1,
      accelerationDelta: 50,
      accelerationMax: 3,
      keyboardSupport: !0,
      arrowScroll: 50,
      fixedBackground: !0,
      excluded: "",
    },
    a = r,
    l = !1,
    i = { x: 0, y: 0 },
    c = !1,
    s = document.documentElement,
    u = [],
    d = /^Mac/.test(navigator.platform),
    f = { 37: 1, 38: 1, 39: 1, 40: 1 };
  function m() {
    if (!c && document.body) {
      c = !0;
      var n = document.body,
        r = document.documentElement,
        i = window.innerHeight,
        u = n.scrollHeight;
      if (
        ((s = document.compatMode.indexOf("CSS") >= 0 ? r : n),
        (e = n),
        a.keyboardSupport && X("keydown", b),
        top != self)
      )
        l = !0;
      else if (J && u > i && (n.offsetHeight <= i || r.offsetHeight <= i)) {
        var d,
          f = document.createElement("div");
        if (
          ((f.style.cssText =
            "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" +
            s.scrollHeight +
            "px"),
          document.body.appendChild(f),
          (o = function () {
            d ||
              (d = setTimeout(function () {
                (f.style.height = "0"),
                  (f.style.height = s.scrollHeight + "px"),
                  (d = null);
              }, 500));
          }),
          setTimeout(o, 10),
          X("resize", o),
          (t = new j(o)).observe(n, {
            attributes: !0,
            childList: !0,
            characterData: !1,
          }),
          s.offsetHeight <= i)
        ) {
          var m = document.createElement("div");
          (m.style.clear = "both"), n.appendChild(m);
        }
      }
      a.fixedBackground ||
        ((n.style.backgroundAttachment = "scroll"),
        (r.style.backgroundAttachment = "scroll"));
    }
  }
  var h = [],
    w = !1,
    v = Date.now();
  function p(e, t, o) {
    var n, r;
    if (
      ((n = (n = t) > 0 ? 1 : -1),
      (r = (r = o) > 0 ? 1 : -1),
      (i.x !== n || i.y !== r) && ((i.x = n), (i.y = r), (h = []), (v = 0)),
      1 != a.accelerationMax)
    ) {
      var l = Date.now() - v;
      if (l < a.accelerationDelta) {
        var c = (1 + 50 / l) / 2;
        c > 1 && ((c = Math.min(c, a.accelerationMax)), (t *= c), (o *= c));
      }
      v = Date.now();
    }
    if (
      (h.push({
        x: t,
        y: o,
        lastX: t < 0 ? 0.99 : -0.99,
        lastY: o < 0 ? 0.99 : -0.99,
        start: Date.now(),
      }),
      !w)
    ) {
      var s = R(),
        u = e === s || e === document.body;
      null == e.$scrollBehavior &&
        (function (e) {
          var t = k(e);
          if (null == E[t]) {
            var o = getComputedStyle(e, "")["scroll-behavior"];
            E[t] = "smooth" == o;
          }
          return E[t];
        })(e) &&
        ((e.$scrollBehavior = e.style.scrollBehavior),
        (e.style.scrollBehavior = "auto"));
      var d = function (n) {
        for (var r = Date.now(), l = 0, i = 0, c = 0; c < h.length; c++) {
          var s = h[c],
            f = r - s.start,
            m = f >= a.animationTime,
            v = m ? 1 : f / a.animationTime;
          a.pulseAlgorithm && (v = V(v));
          var p = (s.x * v - s.lastX) >> 0,
            y = (s.y * v - s.lastY) >> 0;
          (l += p),
            (i += y),
            (s.lastX += p),
            (s.lastY += y),
            m && (h.splice(c, 1), c--);
        }
        u
          ? window.scrollBy(l, i)
          : (l && (e.scrollLeft += l), i && (e.scrollTop += i)),
          t || o || (h = []),
          h.length
            ? $(d, e, 1e3 / a.frameRate + 1)
            : ((w = !1),
              null != e.$scrollBehavior &&
                ((e.style.scrollBehavior = e.$scrollBehavior),
                (e.$scrollBehavior = null)));
      };
      $(d, e, 0), (w = !0);
    }
  }
  function y(t) {
    c || m();
    var o = t.target;
    if (t.defaultPrevented || t.ctrlKey) return !0;
    if (
      A(e, "embed") ||
      (A(o, "embed") && /\.pdf/i.test(o.src)) ||
      A(e, "object") ||
      o.shadowRoot
    )
      return !0;
    var r = -t.wheelDeltaX || t.deltaX || 0,
      i = -t.wheelDeltaY || t.deltaY || 0;
    d &&
      (t.wheelDeltaX &&
        N(t.wheelDeltaX, 120) &&
        (r = (t.wheelDeltaX / Math.abs(t.wheelDeltaX)) * -120),
      t.wheelDeltaY &&
        N(t.wheelDeltaY, 120) &&
        (i = (t.wheelDeltaY / Math.abs(t.wheelDeltaY)) * -120)),
      r || i || (i = -t.wheelDelta || 0),
      1 === t.deltaMode && ((r *= 40), (i *= 40));
    var s = H(o);
    return s
      ? !!(function (e) {
          if (e) {
            u.length || (u = [e, e, e]),
              (e = Math.abs(e)),
              u.push(e),
              u.shift(),
              clearTimeout(n),
              (n = setTimeout(function () {
                try {
                  localStorage.SS_deltaBuffer = u.join(",");
                } catch (e) {}
              }, 1e3));
            var t = e > 120 && K(e),
              o = !K(120) && !K(100) && !t;
            return e < 50 || o;
          }
        })(i) ||
          (Math.abs(r) > 1.2 && (r *= a.stepSize / 120),
          Math.abs(i) > 1.2 && (i *= a.stepSize / 120),
          p(s, r, i),
          t.preventDefault(),
          void T())
      : !l ||
          !_ ||
          (Object.defineProperty(t, "target", { value: window.frameElement }),
          parent.wheel(t));
  }
  function b(t) {
    var o = t.target,
      n =
        t.ctrlKey || t.altKey || t.metaKey || (t.shiftKey && 32 !== t.keyCode);
    document.body.contains(e) || (e = document.activeElement);
    var r = /^(button|submit|radio|checkbox|file|color|image)$/i;
    if (
      t.defaultPrevented ||
      /^(textarea|select|embed|object)$/i.test(o.nodeName) ||
      (A(o, "input") && !r.test(o.type)) ||
      A(e, "video") ||
      (function (e) {
        var t = e.target,
          o = !1;
        if (-1 != document.URL.indexOf("www.youtube.com/watch"))
          do {
            if (
              (o = t.classList && t.classList.contains("html5-video-controls"))
            )
              break;
          } while ((t = t.parentNode));
        return o;
      })(t) ||
      o.isContentEditable ||
      n
    )
      return !0;
    if (
      (A(o, "button") || (A(o, "input") && r.test(o.type))) &&
      32 === t.keyCode
    )
      return !0;
    if (A(o, "input") && "radio" == o.type && f[t.keyCode]) return !0;
    var i = 0,
      c = 0,
      s = H(e);
    if (!s) return !l || !_ || parent.keydown(t);
    var u = s.clientHeight;
    switch ((s == document.body && (u = window.innerHeight), t.keyCode)) {
      case 38:
        c = -a.arrowScroll;
        break;
      case 40:
        c = a.arrowScroll;
        break;
      case 32:
        c = -(t.shiftKey ? 1 : -1) * u * 0.9;
        break;
      case 33:
        c = 0.9 * -u;
        break;
      case 34:
        c = 0.9 * u;
        break;
      case 36:
        s == document.body &&
          document.scrollingElement &&
          (s = document.scrollingElement),
          (c = -s.scrollTop);
        break;
      case 35:
        var d = s.scrollHeight - s.scrollTop - u;
        c = d > 0 ? d + 10 : 0;
        break;
      case 37:
        i = -a.arrowScroll;
        break;
      case 39:
        i = a.arrowScroll;
        break;
      default:
        return !0;
    }
    p(s, i, c), t.preventDefault(), T();
  }
  function g(t) {
    e = t.target;
  }
  var S,
    x,
    k =
      ((S = 0),
      function (e) {
        return e.uniqueID || (e.uniqueID = S++);
      }),
    D = {},
    M = {},
    E = {};
  function T() {
    clearTimeout(x),
      (x = setInterval(function () {
        D = M = E = {};
      }, 1e3));
  }
  function B(e, t, o) {
    for (var n = o ? D : M, r = e.length; r--; ) n[k(e[r])] = t;
    return t;
  }
  function C(e, t) {
    return (t ? D : M)[k(e)];
  }
  function H(e) {
    var t = [],
      o = document.body,
      n = s.scrollHeight;
    do {
      var r = C(e, !1);
      if (r) return B(t, r);
      if ((t.push(e), n === e.scrollHeight)) {
        var a = (L(s) && L(o)) || O(s);
        if ((l && z(s)) || (!l && a)) return B(t, R());
      } else if (z(e) && O(e)) return B(t, e);
    } while ((e = e.parentElement));
  }
  function z(e) {
    return e.clientHeight + 10 < e.scrollHeight;
  }
  function L(e) {
    return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y");
  }
  function O(e) {
    var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
    return "scroll" === t || "auto" === t;
  }
  function X(e, t, o) {
    window.addEventListener(e, t, o || !1);
  }
  function Y(e, t, o) {
    window.removeEventListener(e, t, o || !1);
  }
  function A(e, t) {
    return e && (e.nodeName || "").toLowerCase() === t.toLowerCase();
  }
  if (window.localStorage && localStorage.SS_deltaBuffer)
    try {
      u = localStorage.SS_deltaBuffer.split(",");
    } catch (e) {}
  function N(e, t) {
    return Math.floor(e / t) == e / t;
  }
  function K(e) {
    return N(u[0], e) && N(u[1], e) && N(u[2], e);
  }
  var P,
    $ =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (e, t, o) {
        window.setTimeout(e, o || 1e3 / 60);
      },
    j =
      window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver,
    R =
      ((P = document.scrollingElement),
      function () {
        if (!P) {
          var e = document.createElement("div");
          (e.style.cssText = "height:10000px;width:1px;"),
            document.body.appendChild(e);
          var t = document.body.scrollTop;
          document.documentElement.scrollTop,
            window.scrollBy(0, 3),
            (P =
              document.body.scrollTop != t
                ? document.body
                : document.documentElement),
            window.scrollBy(0, -3),
            document.body.removeChild(e);
        }
        return P;
      });
  function q(e) {
    var t, o;
    return (
      (e *= a.pulseScale) < 1
        ? (t = e - (1 - Math.exp(-e)))
        : ((e -= 1), (t = (o = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - o))),
      t * a.pulseNormalize
    );
  }
  function V(e) {
    return e >= 1
      ? 1
      : e <= 0
      ? 0
      : (1 == a.pulseNormalize && (a.pulseNormalize /= q(1)), q(e));
  }
  var F = window.navigator.userAgent,
    I = /Edge/.test(F),
    _ = /chrome/i.test(F) && !I,
    W = /safari/i.test(F) && !I,
    U = /mobile/i.test(F),
    G = /Windows NT 6.1/i.test(F) && /rv:11/i.test(F),
    J = W && (/Version\/8/i.test(F) || /Version\/9/i.test(F)),
    Q = (_ || W || G) && !U,
    Z = !1;
  try {
    window.addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          Z = !0;
        },
      })
    );
  } catch (e) {}
  var ee = !!Z && { passive: !1 },
    te = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
  function oe(e) {
    for (var t in e) r.hasOwnProperty(t) && (a[t] = e[t]);
  }
  te && Q && (X(te, y, ee), X("mousedown", g), X("load", m)),
    (oe.destroy = function () {
      t && t.disconnect(),
        Y(te, y),
        Y("mousedown", g),
        Y("keydown", b),
        Y("resize", o),
        Y("load", m);
    }),
    window.SmoothScrollOptions && oe(window.SmoothScrollOptions),
    "function" == typeof define && define.amd
      ? define(function () {
          return oe;
        })
      : "object" == typeof exports
      ? (module.exports = oe)
      : (window.SmoothScroll = oe);
})();
