
  !function() {
      function e() {
          t(),
          i(),
          r(),
          o(),
          l(),
          a(k.offsetWidth, k.offsetHeight),
          c()
      }
      function t() {
          b = new FSS.WebGLRenderer,
          V = new FSS.CanvasRenderer,
          v = new FSS.SVGRenderer,
          n(N.renderer)
      }
      function n(e) {
          switch (m && E.removeChild(m.element),
          e) {
          case w:
              m = b;
              break;
          case M:
              m = V;
              break;
          case R:
              m = v
          }
          m.setSize(k.offsetWidth, k.offsetHeight),
          E.appendChild(m.element)
      }
      function i() {
          h = new FSS.Scene
      }
      function r() {
          h.remove(g),
          m.clear(),
          p = new FSS.Plane(x.width * m.width,x.height * m.height,x.segments,x.slices),
          F = new FSS.Material(x.ambient,x.diffuse),
          g = new FSS.Mesh(p,F),
          h.add(g);
          var e, t;
          for (e = p.vertices.length - 1; e >= 0; e--)
              t = p.vertices[e],
              t.anchor = FSS.Vector3.clone(t.position),
              t.step = FSS.Vector3.create(Math.randomInRange(.2, 1), Math.randomInRange(.2, 1), Math.randomInRange(.2, 1)),
              t.time = Math.randomInRange(0, Math.PIM2)
      }
      function o() {
          var e, t;
          for (e = h.lights.length - 1; e >= 0; e--)
              t = h.lights[e],
              h.remove(t);
          for (m.clear(),
          e = 0; e < y.count; e++)
              t = new FSS.Light(y.ambient,y.diffuse),
              t.ambientHex = t.ambient.format(),
              t.diffuseHex = t.diffuse.format(),
              h.add(t),
              t.mass = Math.randomInRange(.5, 1),
              t.velocity = FSS.Vector3.create(),
              t.acceleration = FSS.Vector3.create(),
              t.force = FSS.Vector3.create(),
              t.ring = document.createElementNS(FSS.SVGNS, "circle"),
              t.ring.setAttributeNS(null, "stroke", t.ambientHex),
              t.ring.setAttributeNS(null, "stroke-width", "0.5"),
              t.ring.setAttributeNS(null, "fill", "none"),
              t.ring.setAttributeNS(null, "r", "10"),
              t.core = document.createElementNS(FSS.SVGNS, "circle"),
              t.core.setAttributeNS(null, "fill", t.diffuseHex),
              t.core.setAttributeNS(null, "r", "4")
      }
      function a(e, t) {
          m.setSize(e, t),
          FSS.Vector3.set(A, m.halfWidth, m.halfHeight),
          r()
      }
      function c() {
          u = Date.now() - H,
          s(),
          S(),
          requestAnimationFrame(c)
      }
      function s() {
          var e, t, n, i, r, o, a, c = x.depth / 2;
          for (FSS.Vector3.copy(y.bounds, A),
          FSS.Vector3.multiplyScalar(y.bounds, y.xyScalar),
          FSS.Vector3.setZ(I, y.zOffset),
          y.autopilot && (e = Math.sin(y.step[0] * u * y.speed),
          t = Math.cos(y.step[1] * u * y.speed),
          FSS.Vector3.set(I, y.bounds[0] * e, y.bounds[1] * t, y.zOffset)),
          i = h.lights.length - 1; i >= 0; i--) {
              r = h.lights[i],
              FSS.Vector3.setZ(r.position, y.zOffset);
              var s = Math.clamp(FSS.Vector3.distanceSquared(r.position, I), y.minDistance, y.maxDistance)
                , S = y.gravity * r.mass / s;
              FSS.Vector3.subtractVectors(r.force, I, r.position),
              FSS.Vector3.normalise(r.force),
              FSS.Vector3.multiplyScalar(r.force, S),
              FSS.Vector3.set(r.acceleration),
              FSS.Vector3.add(r.acceleration, r.force),
              FSS.Vector3.add(r.velocity, r.acceleration),
              FSS.Vector3.multiplyScalar(r.velocity, y.dampening),
              FSS.Vector3.limit(r.velocity, y.minLimit, y.maxLimit),
              FSS.Vector3.add(r.position, r.velocity)
          }
          for (o = p.vertices.length - 1; o >= 0; o--)
              a = p.vertices[o],
              e = Math.sin(a.time + a.step[0] * u * x.speed),
              t = Math.cos(a.time + a.step[1] * u * x.speed),
              n = Math.sin(a.time + a.step[2] * u * x.speed),
              FSS.Vector3.set(a.position, x.xRange * p.segmentWidth * e, x.yRange * p.sliceHeight * t, x.zRange * c * n - c),
              FSS.Vector3.add(a.position, a.anchor);
          p.dirty = !0
      }
      function S() {
          if (m.render(h),
          y.draw) {
              var e, t, n, i;
              for (e = h.lights.length - 1; e >= 0; e--)
                  switch (i = h.lights[e],
                  t = i.position[0],
                  n = i.position[1],
                  N.renderer) {
                  case M:
                      m.context.lineWidth = .5,
                      m.context.beginPath(),
                      m.context.strokeStyle = i.ambientHex,
                      m.context.stroke(),
                      m.context.beginPath(),
                      m.context.fillStyle = i.diffuseHex,
                      m.context.fill();
                      break;
                  case R:
                      t += m.halfWidth,
                      n = m.halfHeight - n,
                      i.core.setAttributeNS(null, "fill", i.diffuseHex),
                      i.core.setAttributeNS(null, "cx", t),
                      i.core.setAttributeNS(null, "cy", n),
                      m.element.appendChild(i.core),
                      i.ring.setAttributeNS(null, "stroke", i.ambientHex),
                      i.ring.setAttributeNS(null, "cx", t),
                      i.ring.setAttributeNS(null, "cy", n),
                      m.element.appendChild(i.ring)
                  }
          }
      }
      function l() {
          window.addEventListener("resize", f),
          k.addEventListener("mousemove", d)
      }
      function d(e) {
          FSS.Vector3.set(I, e.x, m.height - e.y),
          FSS.Vector3.subtract(I, A)
      }
      function f(e) {
          a(k.offsetWidth, k.offsetHeight),
          S()
      }
      var u, m, h, g, p, F, b, V, v, x = {
          width: 1.2,
          height: 1.2,
          depth: 10,
          segments: 16,
          slices: 8,
          xRange: .8,
          yRange: .2,
          zRange: .8,
          ambient: "#090909",
          diffuse: "#2f2f2f",
          speed: 5e-4
      }, y = {
          count: 12,
          xyScalar: 1,
          zOffset: 40,
          ambient: "#222222",
          diffuse: "#344055",
          speed: 5e-4,
          gravity: 1200,
          dampening: .95,
          minLimit: 10,
          maxLimit: null,
          minDistance: 20,
          maxDistance: 400,
          autopilot: !1,
          draw: !1,
          bounds: FSS.Vector3.create(),
          step: FSS.Vector3.create(Math.randomInRange(.2, 1), Math.randomInRange(.2, 1), Math.randomInRange(.2, 1))
      }, w = "webgl", M = "canvas", R = "svg", N = {
          renderer: M
      }, H = Date.now(), A = FSS.Vector3.create(), I = FSS.Vector3.create(), k = document.getElementById("can-bg"), E = document.getElementById("can-bg-output");
      document.getElementById("ui");
      e()
  }()
