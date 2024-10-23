import {
  n as hi,
  o as mi,
  p as pi,
  r as ui,
  s as kt,
  t as _i,
  u as gi,
  v as bi,
  w as fi,
  x as vi,
  y as yi,
  z as ki,
} from "./chunk-OJYR24EB.js";
import { a as Ci, b as Di } from "./chunk-A3A72ILT.js";
import {
  a as be,
  b as Xa,
  c as yt,
  d as U,
  f as zt,
  g as Za,
  h as Ja,
  l as ei,
  m as ti,
  n as ai,
  o as ii,
  p as ni,
  q as ri,
  s as oi,
  t as si,
  v as di,
} from "./chunk-VMH4ILIM.js";
import { a as ci, b as li } from "./chunk-6AWQUBPH.js";
import { b as qa } from "./chunk-JLIX64RS.js";
import {
  a as $a,
  b as Ga,
  d as Ua,
  e as Ka,
  f as Qa,
  g as Wa,
} from "./chunk-VORQTW3B.js";
import { a as bt, d as Ha, e as ie, h as ft } from "./chunk-FVBRAVME.js";
import { a as qe, b as Bt, c as vt } from "./chunk-L2D7AHNW.js";
import {
  g as ja,
  j as Ba,
  k as gt,
  m as Lt,
  n as Yt,
  r as jt,
  s as za,
} from "./chunk-POHCU53O.js";
import {
  $ as Ra,
  C as Ma,
  G as Ia,
  H as Sa,
  I as Ea,
  J as xe,
  N as J,
  P as j,
  Q as we,
  R as Ta,
  V as He,
  W as Va,
  Z as Oa,
  _ as Fa,
  a as ht,
  aa as ut,
  ba as Pa,
  c as mt,
  ca as Na,
  da as Nt,
  fa as _t,
  g as ka,
  h as Ca,
  j as Z,
  q as Da,
  t as xa,
  u as wa,
  v as Pt,
  w as pt,
  y as Aa,
} from "./chunk-MXV4M2BO.js";
import {
  c as Be,
  d as ce,
  e as ya,
  g as Y,
  h as ze,
  i as Rt,
  j as ge,
} from "./chunk-4N6BO7AP.js";
import { d as va } from "./chunk-RU375CWH.js";
import { a as La } from "./chunk-SB5MWYDA.js";
import { a as Ya } from "./chunk-EMZRNCIP.js";
import { a as ba, c as fa } from "./chunk-DKHW3YWA.js";
import {
  d as ct,
  k as lt,
  n as _a,
  o as ga,
  t as _e,
} from "./chunk-2T5SWUVG.js";
import {
  $b as G,
  Ab as q,
  Ba as N,
  Bb as $,
  Cb as h,
  Db as l,
  Dc as y,
  Eb as C,
  Ec as je,
  F as Pe,
  Fb as Ot,
  Gb as Ft,
  H as oa,
  Ha as tt,
  Ib as V,
  Jb as rt,
  Kb as ma,
  Nb as b,
  Ob as pa,
  Pb as m,
  Qb as se,
  R as Se,
  Rb as de,
  S as Je,
  Sb as De,
  Tb as I,
  Ub as D,
  V as sa,
  Vb as x,
  Wa as d,
  Xa as c,
  Y as ae,
  Ya as la,
  Yb as Ye,
  Z as Ee,
  Za as Vt,
  Zb as _,
  _ as he,
  _b as w,
  a as R,
  aa as W,
  c as na,
  ca as Ne,
  cb as at,
  cc as ot,
  da as P,
  dc as st,
  ea as da,
  ec as dt,
  f as te,
  fa as ca,
  fb as ha,
  fc as L,
  gc as T,
  ha as S,
  hb as it,
  ia as me,
  ja as z,
  jb as H,
  jc as ua,
  l as Me,
  mb as A,
  p as Xe,
  pa as X,
  pb as ke,
  qa as f,
  qb as k,
  ra as v,
  rb as p,
  sa as Le,
  sb as nt,
  ta as et,
  tb as O,
  u as ra,
  ua as Tt,
  ub as Ce,
  va as Te,
  w as Ze,
  wa as pe,
  xb as E,
  y as re,
  ya as u,
  z as Ie,
  za as oe,
  zb as ue,
  zc as M,
} from "./chunk-NSU275EB.js";
var xi = (() => {
  class i {
    http;
    cookieService;
    baseUrl = Ya.apiUrl;
    constructor(n, e) {
      (this.http = n), (this.cookieService = e);
    }
    getHeaders() {
      let n = this.cookieService.get("token");
      return new ba({
        Authorization: `Bearer ${n}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      });
    }
    getAdmins() {
      return this.http.get(`${this.baseUrl}/getAdmins`, {
        headers: this.getHeaders(),
      });
    }
    getAdminById(n) {
      return this.http.get(`${this.baseUrl}/getAdmins/${n}`, {
        headers: this.getHeaders(),
      });
    }
    addAdmin(n) {
      return this.http.post(`${this.baseUrl}/addAdmins`, n, {
        headers: this.getHeaders(),
      });
    }
    updateAdmin(n, e) {
      return this.http.put(`${this.baseUrl}/updateAdmins/${n}`, e, {
        headers: this.getHeaders(),
      });
    }
    deleteAdmin(n) {
      return this.http.delete(`${this.baseUrl}/deleteAdmins/${n}`, {
        headers: this.getHeaders(),
      });
    }
    getNextAdminCode(n) {
      return this.getAdmins().pipe(
        Xe((e) => {
          let a = n.toLowerCase() === "superadmin" ? "SDM" : "ADM",
            t = new Date().getFullYear(),
            o = "TG" + t,
            s = e
              .filter(
                (ee) => ee.code.startsWith(a) && ee.code.endsWith(t.toString())
              )
              .map((ee) => ee.code);
          if (s.length === 0) return `${a}001${o}`;
          let g = s.map((ee) => {
              let We = ee.match(/\d{3}/);
              return We ? parseInt(We[0], 10) : 0;
            }),
            le = (Math.max(...g) + 1).toString().padStart(3, "0");
          return `${a}${le}${o}`;
        })
      );
    }
    static ɵfac = function (e) {
      return new (e || i)(Ne(fa), Ne(La));
    };
    static ɵprov = Ee({ token: i, factory: i.ɵfac, providedIn: "root" });
  }
  return i;
})();
var an = ["input"],
  nn = ["formField"],
  rn = ["*"],
  wi = 0,
  Ct = class {
    constructor(r, n) {
      (this.source = r), (this.value = n);
    }
  },
  on = { provide: be, useExisting: ae(() => Ht), multi: !0 },
  Ai = new W("MatRadioGroup"),
  sn = new W("mat-radio-default-options", { providedIn: "root", factory: dn });
function dn() {
  return { color: "accent", disabledInteractive: !1 };
}
var Ht = (() => {
    let r = class r {
      get name() {
        return this._name;
      }
      set name(e) {
        (this._name = e), this._updateRadioButtonNames();
      }
      get labelPosition() {
        return this._labelPosition;
      }
      set labelPosition(e) {
        (this._labelPosition = e === "before" ? "before" : "after"),
          this._markRadiosForCheck();
      }
      get value() {
        return this._value;
      }
      set value(e) {
        this._value !== e &&
          ((this._value = e),
          this._updateSelectedRadioFromValue(),
          this._checkSelectedRadioButton());
      }
      _checkSelectedRadioButton() {
        this._selected &&
          !this._selected.checked &&
          (this._selected.checked = !0);
      }
      get selected() {
        return this._selected;
      }
      set selected(e) {
        (this._selected = e),
          (this.value = e ? e.value : null),
          this._checkSelectedRadioButton();
      }
      get disabled() {
        return this._disabled;
      }
      set disabled(e) {
        (this._disabled = e), this._markRadiosForCheck();
      }
      get required() {
        return this._required;
      }
      set required(e) {
        (this._required = e), this._markRadiosForCheck();
      }
      get disabledInteractive() {
        return this._disabledInteractive;
      }
      set disabledInteractive(e) {
        (this._disabledInteractive = e), this._markRadiosForCheck();
      }
      constructor(e) {
        (this._changeDetector = e),
          (this._value = null),
          (this._name = `mat-radio-group-${wi++}`),
          (this._selected = null),
          (this._isInitialized = !1),
          (this._labelPosition = "after"),
          (this._disabled = !1),
          (this._required = !1),
          (this._controlValueAccessorChangeFn = () => {}),
          (this.onTouched = () => {}),
          (this.change = new u()),
          (this._disabledInteractive = !1);
      }
      ngAfterContentInit() {
        (this._isInitialized = !0),
          (this._buttonChanges = this._radios.changes.subscribe(() => {
            this.selected &&
              !this._radios.find((e) => e === this.selected) &&
              (this._selected = null);
          }));
      }
      ngOnDestroy() {
        this._buttonChanges?.unsubscribe();
      }
      _touch() {
        this.onTouched && this.onTouched();
      }
      _updateRadioButtonNames() {
        this._radios &&
          this._radios.forEach((e) => {
            (e.name = this.name), e._markForCheck();
          });
      }
      _updateSelectedRadioFromValue() {
        let e = this._selected !== null && this._selected.value === this._value;
        this._radios &&
          !e &&
          ((this._selected = null),
          this._radios.forEach((a) => {
            (a.checked = this.value === a.value),
              a.checked && (this._selected = a);
          }));
      }
      _emitChangeEvent() {
        this._isInitialized &&
          this.change.emit(new Ct(this._selected, this._value));
      }
      _markRadiosForCheck() {
        this._radios && this._radios.forEach((e) => e._markForCheck());
      }
      writeValue(e) {
        (this.value = e), this._changeDetector.markForCheck();
      }
      registerOnChange(e) {
        this._controlValueAccessorChangeFn = e;
      }
      registerOnTouched(e) {
        this.onTouched = e;
      }
      setDisabledState(e) {
        (this.disabled = e), this._changeDetector.markForCheck();
      }
    };
    (r.ɵfac = function (a) {
      return new (a || r)(c(M));
    }),
      (r.ɵdir = z({
        type: r,
        selectors: [["mat-radio-group"]],
        contentQueries: function (a, t, o) {
          if ((a & 1 && De(o, Dt, 5), a & 2)) {
            let s;
            D((s = x())) && (t._radios = s);
          }
        },
        hostAttrs: ["role", "radiogroup", 1, "mat-mdc-radio-group"],
        inputs: {
          color: "color",
          name: "name",
          labelPosition: "labelPosition",
          value: "value",
          selected: "selected",
          disabled: [2, "disabled", "disabled", y],
          required: [2, "required", "required", y],
          disabledInteractive: [
            2,
            "disabledInteractive",
            "disabledInteractive",
            y,
          ],
        },
        outputs: { change: "change" },
        exportAs: ["matRadioGroup"],
        standalone: !0,
        features: [L([on, { provide: Ai, useExisting: r }]), H],
      }));
    let i = r;
    return i;
  })(),
  Dt = (() => {
    let r = class r {
      get checked() {
        return this._checked;
      }
      set checked(e) {
        this._checked !== e &&
          ((this._checked = e),
          e && this.radioGroup && this.radioGroup.value !== this.value
            ? (this.radioGroup.selected = this)
            : !e &&
              this.radioGroup &&
              this.radioGroup.value === this.value &&
              (this.radioGroup.selected = null),
          e && this._radioDispatcher.notify(this.id, this.name),
          this._changeDetector.markForCheck());
      }
      get value() {
        return this._value;
      }
      set value(e) {
        this._value !== e &&
          ((this._value = e),
          this.radioGroup !== null &&
            (this.checked || (this.checked = this.radioGroup.value === e),
            this.checked && (this.radioGroup.selected = this)));
      }
      get labelPosition() {
        return (
          this._labelPosition ||
          (this.radioGroup && this.radioGroup.labelPosition) ||
          "after"
        );
      }
      set labelPosition(e) {
        this._labelPosition = e;
      }
      get disabled() {
        return (
          this._disabled ||
          (this.radioGroup !== null && this.radioGroup.disabled)
        );
      }
      set disabled(e) {
        this._setDisabled(e);
      }
      get required() {
        return this._required || (this.radioGroup && this.radioGroup.required);
      }
      set required(e) {
        this._required = e;
      }
      get color() {
        return (
          this._color ||
          (this.radioGroup && this.radioGroup.color) ||
          (this._defaultOptions && this._defaultOptions.color) ||
          "accent"
        );
      }
      set color(e) {
        this._color = e;
      }
      get disabledInteractive() {
        return (
          this._disabledInteractive ||
          (this.radioGroup !== null && this.radioGroup.disabledInteractive)
        );
      }
      set disabledInteractive(e) {
        this._disabledInteractive = e;
      }
      get inputId() {
        return `${this.id || this._uniqueId}-input`;
      }
      constructor(e, a, t, o, s, g, ne, le) {
        (this._elementRef = a),
          (this._changeDetector = t),
          (this._focusMonitor = o),
          (this._radioDispatcher = s),
          (this._defaultOptions = ne),
          (this._ngZone = P(oe)),
          (this._uniqueId = `mat-radio-${++wi}`),
          (this.id = this._uniqueId),
          (this.disableRipple = !1),
          (this.tabIndex = 0),
          (this.change = new u()),
          (this._checked = !1),
          (this._value = null),
          (this._removeUniqueSelectionListener = () => {}),
          (this._injector = P(pe)),
          (this._onInputClick = (ee) => {
            this.disabled && this.disabledInteractive && ee.preventDefault();
          }),
          (this.radioGroup = e),
          (this._noopAnimations = g === "NoopAnimations"),
          (this._disabledInteractive = ne?.disabledInteractive ?? !1),
          le && (this.tabIndex = je(le, 0));
      }
      focus(e, a) {
        a
          ? this._focusMonitor.focusVia(this._inputElement, a, e)
          : this._inputElement.nativeElement.focus(e);
      }
      _markForCheck() {
        this._changeDetector.markForCheck();
      }
      ngOnInit() {
        this.radioGroup &&
          ((this.checked = this.radioGroup.value === this._value),
          this.checked && (this.radioGroup.selected = this),
          (this.name = this.radioGroup.name)),
          (this._removeUniqueSelectionListener = this._radioDispatcher.listen(
            (e, a) => {
              e !== this.id && a === this.name && (this.checked = !1);
            }
          ));
      }
      ngDoCheck() {
        this._updateTabIndex();
      }
      ngAfterViewInit() {
        this._updateTabIndex(),
          this._focusMonitor.monitor(this._elementRef, !0).subscribe((e) => {
            !e && this.radioGroup && this.radioGroup._touch();
          }),
          this._ngZone.runOutsideAngular(() => {
            this._inputElement.nativeElement.addEventListener(
              "click",
              this._onInputClick
            );
          });
      }
      ngOnDestroy() {
        this._inputElement?.nativeElement.removeEventListener(
          "click",
          this._onInputClick
        ),
          this._focusMonitor.stopMonitoring(this._elementRef),
          this._removeUniqueSelectionListener();
      }
      _emitChangeEvent() {
        this.change.emit(new Ct(this, this._value));
      }
      _isRippleDisabled() {
        return this.disableRipple || this.disabled;
      }
      _onInputInteraction(e) {
        if ((e.stopPropagation(), !this.checked && !this.disabled)) {
          let a = this.radioGroup && this.value !== this.radioGroup.value;
          (this.checked = !0),
            this._emitChangeEvent(),
            this.radioGroup &&
              (this.radioGroup._controlValueAccessorChangeFn(this.value),
              a && this.radioGroup._emitChangeEvent());
        }
      }
      _onTouchTargetClick(e) {
        this._onInputInteraction(e),
          (!this.disabled || this.disabledInteractive) &&
            this._inputElement?.nativeElement.focus();
      }
      _setDisabled(e) {
        this._disabled !== e &&
          ((this._disabled = e), this._changeDetector.markForCheck());
      }
      _updateTabIndex() {
        let e = this.radioGroup,
          a;
        if (
          (!e || !e.selected || this.disabled
            ? (a = this.tabIndex)
            : (a = e.selected === this ? this.tabIndex : -1),
          a !== this._previousTabIndex)
        ) {
          let t = this._inputElement?.nativeElement;
          t &&
            (t.setAttribute("tabindex", a + ""),
            (this._previousTabIndex = a),
            ke(
              () => {
                queueMicrotask(() => {
                  e &&
                    e.selected &&
                    e.selected !== this &&
                    document.activeElement === t &&
                    (e.selected?._inputElement.nativeElement.focus(),
                    document.activeElement === t &&
                      this._inputElement.nativeElement.blur());
                });
              },
              { injector: this._injector }
            ));
        }
      }
    };
    (r.ɵfac = function (a) {
      return new (a || r)(
        c(Ai, 8),
        c(N),
        c(M),
        c(Ia),
        c(ja),
        c(tt, 8),
        c(sn, 8),
        Te("tabindex")
      );
    }),
      (r.ɵcmp = S({
        type: r,
        selectors: [["mat-radio-button"]],
        viewQuery: function (a, t) {
          if ((a & 1 && (I(an, 5), I(nn, 7, N)), a & 2)) {
            let o;
            D((o = x())) && (t._inputElement = o.first),
              D((o = x())) && (t._rippleTrigger = o.first);
          }
        },
        hostAttrs: [1, "mat-mdc-radio-button"],
        hostVars: 19,
        hostBindings: function (a, t) {
          a & 1 &&
            b("focus", function () {
              return t._inputElement.nativeElement.focus();
            }),
            a & 2 &&
              (k("id", t.id)("tabindex", null)("aria-label", null)(
                "aria-labelledby",
                null
              )("aria-describedby", null),
              O("mat-primary", t.color === "primary")(
                "mat-accent",
                t.color === "accent"
              )("mat-warn", t.color === "warn")(
                "mat-mdc-radio-checked",
                t.checked
              )("mat-mdc-radio-disabled", t.disabled)(
                "mat-mdc-radio-disabled-interactive",
                t.disabledInteractive
              )("_mat-animation-noopable", t._noopAnimations));
        },
        inputs: {
          id: "id",
          name: "name",
          ariaLabel: [0, "aria-label", "ariaLabel"],
          ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
          ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
          disableRipple: [2, "disableRipple", "disableRipple", y],
          tabIndex: [2, "tabIndex", "tabIndex", (e) => (e == null ? 0 : je(e))],
          checked: [2, "checked", "checked", y],
          value: "value",
          labelPosition: "labelPosition",
          disabled: [2, "disabled", "disabled", y],
          required: [2, "required", "required", y],
          color: "color",
          disabledInteractive: [
            2,
            "disabledInteractive",
            "disabledInteractive",
            y,
          ],
        },
        outputs: { change: "change" },
        exportAs: ["matRadioButton"],
        standalone: !0,
        features: [H, T],
        ngContentSelectors: rn,
        decls: 13,
        vars: 17,
        consts: [
          ["formField", ""],
          ["input", ""],
          ["mat-internal-form-field", "", 3, "labelPosition"],
          [1, "mdc-radio"],
          [1, "mat-mdc-radio-touch-target", 3, "click"],
          [
            "type",
            "radio",
            1,
            "mdc-radio__native-control",
            3,
            "change",
            "id",
            "checked",
            "disabled",
            "required",
          ],
          [1, "mdc-radio__background"],
          [1, "mdc-radio__outer-circle"],
          [1, "mdc-radio__inner-circle"],
          [
            "mat-ripple",
            "",
            1,
            "mat-radio-ripple",
            "mat-mdc-focus-indicator",
            3,
            "matRippleTrigger",
            "matRippleDisabled",
            "matRippleCentered",
          ],
          [1, "mat-ripple-element", "mat-radio-persistent-ripple"],
          [1, "mdc-label", 3, "for"],
        ],
        template: function (a, t) {
          if (a & 1) {
            let o = V();
            se(),
              h(0, "div", 2, 0)(2, "div", 3)(3, "div", 4),
              b("click", function (g) {
                return f(o), v(t._onTouchTargetClick(g));
              }),
              l(),
              h(4, "input", 5, 1),
              b("change", function (g) {
                return f(o), v(t._onInputInteraction(g));
              }),
              l(),
              h(6, "div", 6),
              C(7, "div", 7)(8, "div", 8),
              l(),
              h(9, "div", 9),
              C(10, "div", 10),
              l()(),
              h(11, "label", 11),
              de(12),
              l()();
          }
          a & 2 &&
            (p("labelPosition", t.labelPosition),
            d(2),
            O("mdc-radio--disabled", t.disabled),
            d(2),
            p("id", t.inputId)("checked", t.checked)(
              "disabled",
              t.disabled && !t.disabledInteractive
            )("required", t.required),
            k("name", t.name)("value", t.value)("aria-label", t.ariaLabel)(
              "aria-labelledby",
              t.ariaLabelledby
            )("aria-describedby", t.ariaDescribedby)(
              "aria-disabled",
              t.disabled && t.disabledInteractive ? "true" : null
            ),
            d(5),
            p("matRippleTrigger", t._rippleTrigger.nativeElement)(
              "matRippleDisabled",
              t._isRippleDisabled()
            )("matRippleCentered", !0),
            d(2),
            p("for", t.inputId));
        },
        dependencies: [He, _t],
        styles: [
          '.mat-mdc-radio-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mdc-radio-state-layer-size) - 20px)/2)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled])~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-hover-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-hover-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-pressed-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-pressed-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-radio-button .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size);top:calc(-1*(var(--mdc-radio-state-layer-size) - 20px)/2);left:calc(-1*(var(--mdc-radio-state-layer-size) - 20px)/2)}.mat-mdc-radio-button .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-focus-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled{pointer-events:auto}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-app-on-surface))}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color, var(--mat-app-primary))}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mat-internal-form-field{color:var(--mat-radio-label-text-color, var(--mat-app-on-surface));font-family:var(--mat-radio-label-text-font, var(--mat-app-body-medium-font));line-height:var(--mat-radio-label-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-radio-label-text-size, var(--mat-app-body-medium-size));letter-spacing:var(--mat-radio-label-text-tracking, var(--mat-app-body-medium-tracking));font-weight:var(--mat-radio-label-text-weight, var(--mat-app-body-medium-weight))}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color)}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple .mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-focus-icon-color, black)}.mat-mdc-radio-button.cdk-focused .mat-mdc-focus-indicator::before{content:""}.mat-mdc-radio-disabled{cursor:default;pointer-events:none}.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive{pointer-events:auto}.mat-mdc-radio-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-radio-touch-target-display)}[dir=rtl] .mat-mdc-radio-touch-target{left:auto;right:50%;transform:translate(50%, -50%)}',
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = r;
    return i;
  })(),
  Mi = (() => {
    let r = class r {};
    (r.ɵfac = function (a) {
      return new (a || r)();
    }),
      (r.ɵmod = me({ type: r })),
      (r.ɵinj = he({ imports: [J, _e, Va, Dt, J] }));
    let i = r;
    return i;
  })();
var ln = ["input"],
  hn = ["label"],
  mn = ["*"],
  pn = new W("mat-checkbox-default-options", {
    providedIn: "root",
    factory: Si,
  });
function Si() {
  return {
    color: "accent",
    clickAction: "check-indeterminate",
    disabledInteractive: !1,
  };
}
var F = (function (i) {
    return (
      (i[(i.Init = 0)] = "Init"),
      (i[(i.Checked = 1)] = "Checked"),
      (i[(i.Unchecked = 2)] = "Unchecked"),
      (i[(i.Indeterminate = 3)] = "Indeterminate"),
      i
    );
  })(F || {}),
  un = { provide: be, useExisting: ae(() => xt), multi: !0 },
  qt = class {},
  _n = 0,
  Ii = Si(),
  xt = (() => {
    let r = class r {
      focus() {
        this._inputElement.nativeElement.focus();
      }
      _createChangeEvent(e) {
        let a = new qt();
        return (a.source = this), (a.checked = e), a;
      }
      _getAnimationTargetElement() {
        return this._inputElement?.nativeElement;
      }
      get inputId() {
        return `${this.id || this._uniqueId}-input`;
      }
      constructor(e, a, t, o, s, g) {
        (this._elementRef = e),
          (this._changeDetectorRef = a),
          (this._ngZone = t),
          (this._animationMode = s),
          (this._options = g),
          (this._animationClasses = {
            uncheckedToChecked: "mdc-checkbox--anim-unchecked-checked",
            uncheckedToIndeterminate:
              "mdc-checkbox--anim-unchecked-indeterminate",
            checkedToUnchecked: "mdc-checkbox--anim-checked-unchecked",
            checkedToIndeterminate: "mdc-checkbox--anim-checked-indeterminate",
            indeterminateToChecked: "mdc-checkbox--anim-indeterminate-checked",
            indeterminateToUnchecked:
              "mdc-checkbox--anim-indeterminate-unchecked",
          }),
          (this.ariaLabel = ""),
          (this.ariaLabelledby = null),
          (this.labelPosition = "after"),
          (this.name = null),
          (this.change = new u()),
          (this.indeterminateChange = new u()),
          (this._onTouched = () => {}),
          (this._currentAnimationClass = ""),
          (this._currentCheckState = F.Init),
          (this._controlValueAccessorChangeFn = () => {}),
          (this._validatorChangeFn = () => {}),
          (this._checked = !1),
          (this._disabled = !1),
          (this._indeterminate = !1),
          (this._options = this._options || Ii),
          (this.color = this._options.color || Ii.color),
          (this.tabIndex = parseInt(o) || 0),
          (this.id = this._uniqueId = `mat-mdc-checkbox-${++_n}`),
          (this.disabledInteractive = g?.disabledInteractive ?? !1);
      }
      ngOnChanges(e) {
        e.required && this._validatorChangeFn();
      }
      ngAfterViewInit() {
        this._syncIndeterminate(this._indeterminate);
      }
      get checked() {
        return this._checked;
      }
      set checked(e) {
        e != this.checked &&
          ((this._checked = e), this._changeDetectorRef.markForCheck());
      }
      get disabled() {
        return this._disabled;
      }
      set disabled(e) {
        e !== this.disabled &&
          ((this._disabled = e), this._changeDetectorRef.markForCheck());
      }
      get indeterminate() {
        return this._indeterminate;
      }
      set indeterminate(e) {
        let a = e != this._indeterminate;
        (this._indeterminate = e),
          a &&
            (this._indeterminate
              ? this._transitionCheckState(F.Indeterminate)
              : this._transitionCheckState(
                  this.checked ? F.Checked : F.Unchecked
                ),
            this.indeterminateChange.emit(this._indeterminate)),
          this._syncIndeterminate(this._indeterminate);
      }
      _isRippleDisabled() {
        return this.disableRipple || this.disabled;
      }
      _onLabelTextChange() {
        this._changeDetectorRef.detectChanges();
      }
      writeValue(e) {
        this.checked = !!e;
      }
      registerOnChange(e) {
        this._controlValueAccessorChangeFn = e;
      }
      registerOnTouched(e) {
        this._onTouched = e;
      }
      setDisabledState(e) {
        this.disabled = e;
      }
      validate(e) {
        return this.required && e.value !== !0 ? { required: !0 } : null;
      }
      registerOnValidatorChange(e) {
        this._validatorChangeFn = e;
      }
      _transitionCheckState(e) {
        let a = this._currentCheckState,
          t = this._getAnimationTargetElement();
        if (
          !(a === e || !t) &&
          (this._currentAnimationClass &&
            t.classList.remove(this._currentAnimationClass),
          (this._currentAnimationClass =
            this._getAnimationClassForCheckStateTransition(a, e)),
          (this._currentCheckState = e),
          this._currentAnimationClass.length > 0)
        ) {
          t.classList.add(this._currentAnimationClass);
          let o = this._currentAnimationClass;
          this._ngZone.runOutsideAngular(() => {
            setTimeout(() => {
              t.classList.remove(o);
            }, 1e3);
          });
        }
      }
      _emitChangeEvent() {
        this._controlValueAccessorChangeFn(this.checked),
          this.change.emit(this._createChangeEvent(this.checked)),
          this._inputElement &&
            (this._inputElement.nativeElement.checked = this.checked);
      }
      toggle() {
        (this.checked = !this.checked),
          this._controlValueAccessorChangeFn(this.checked);
      }
      _handleInputClick() {
        let e = this._options?.clickAction;
        !this.disabled && e !== "noop"
          ? (this.indeterminate &&
              e !== "check" &&
              Promise.resolve().then(() => {
                (this._indeterminate = !1),
                  this.indeterminateChange.emit(this._indeterminate);
              }),
            (this._checked = !this._checked),
            this._transitionCheckState(this._checked ? F.Checked : F.Unchecked),
            this._emitChangeEvent())
          : ((this.disabled && this.disabledInteractive) ||
              (!this.disabled && e === "noop")) &&
            ((this._inputElement.nativeElement.checked = this.checked),
            (this._inputElement.nativeElement.indeterminate =
              this.indeterminate));
      }
      _onInteractionEvent(e) {
        e.stopPropagation();
      }
      _onBlur() {
        Promise.resolve().then(() => {
          this._onTouched(), this._changeDetectorRef.markForCheck();
        });
      }
      _getAnimationClassForCheckStateTransition(e, a) {
        if (this._animationMode === "NoopAnimations") return "";
        switch (e) {
          case F.Init:
            if (a === F.Checked)
              return this._animationClasses.uncheckedToChecked;
            if (a == F.Indeterminate)
              return this._checked
                ? this._animationClasses.checkedToIndeterminate
                : this._animationClasses.uncheckedToIndeterminate;
            break;
          case F.Unchecked:
            return a === F.Checked
              ? this._animationClasses.uncheckedToChecked
              : this._animationClasses.uncheckedToIndeterminate;
          case F.Checked:
            return a === F.Unchecked
              ? this._animationClasses.checkedToUnchecked
              : this._animationClasses.checkedToIndeterminate;
          case F.Indeterminate:
            return a === F.Checked
              ? this._animationClasses.indeterminateToChecked
              : this._animationClasses.indeterminateToUnchecked;
        }
        return "";
      }
      _syncIndeterminate(e) {
        let a = this._inputElement;
        a && (a.nativeElement.indeterminate = e);
      }
      _onInputClick() {
        this._handleInputClick();
      }
      _onTouchTargetClick() {
        this._handleInputClick(),
          this.disabled || this._inputElement.nativeElement.focus();
      }
      _preventBubblingFromLabel(e) {
        e.target &&
          this._labelElement.nativeElement.contains(e.target) &&
          e.stopPropagation();
      }
    };
    (r.ɵfac = function (a) {
      return new (a || r)(
        c(N),
        c(M),
        c(oe),
        Te("tabindex"),
        c(tt, 8),
        c(pn, 8)
      );
    }),
      (r.ɵcmp = S({
        type: r,
        selectors: [["mat-checkbox"]],
        viewQuery: function (a, t) {
          if ((a & 1 && (I(ln, 5), I(hn, 5), I(He, 5)), a & 2)) {
            let o;
            D((o = x())) && (t._inputElement = o.first),
              D((o = x())) && (t._labelElement = o.first),
              D((o = x())) && (t.ripple = o.first);
          }
        },
        hostAttrs: [1, "mat-mdc-checkbox"],
        hostVars: 16,
        hostBindings: function (a, t) {
          a & 2 &&
            (rt("id", t.id),
            k("tabindex", null)("aria-label", null)("aria-labelledby", null),
            Ce(t.color ? "mat-" + t.color : "mat-accent"),
            O("_mat-animation-noopable", t._animationMode === "NoopAnimations")(
              "mdc-checkbox--disabled",
              t.disabled
            )("mat-mdc-checkbox-disabled", t.disabled)(
              "mat-mdc-checkbox-checked",
              t.checked
            )("mat-mdc-checkbox-disabled-interactive", t.disabledInteractive));
        },
        inputs: {
          ariaLabel: [0, "aria-label", "ariaLabel"],
          ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
          ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
          id: "id",
          required: [2, "required", "required", y],
          labelPosition: "labelPosition",
          name: "name",
          value: "value",
          disableRipple: [2, "disableRipple", "disableRipple", y],
          tabIndex: [
            2,
            "tabIndex",
            "tabIndex",
            (e) => (e == null ? void 0 : je(e)),
          ],
          color: "color",
          disabledInteractive: [
            2,
            "disabledInteractive",
            "disabledInteractive",
            y,
          ],
          checked: [2, "checked", "checked", y],
          disabled: [2, "disabled", "disabled", y],
          indeterminate: [2, "indeterminate", "indeterminate", y],
        },
        outputs: {
          change: "change",
          indeterminateChange: "indeterminateChange",
        },
        exportAs: ["matCheckbox"],
        standalone: !0,
        features: [
          L([un, { provide: yt, useExisting: r, multi: !0 }]),
          H,
          X,
          T,
        ],
        ngContentSelectors: mn,
        decls: 15,
        vars: 20,
        consts: [
          ["checkbox", ""],
          ["input", ""],
          ["label", ""],
          ["mat-internal-form-field", "", 3, "click", "labelPosition"],
          [1, "mdc-checkbox"],
          [1, "mat-mdc-checkbox-touch-target", 3, "click"],
          [
            "type",
            "checkbox",
            1,
            "mdc-checkbox__native-control",
            3,
            "blur",
            "click",
            "change",
            "checked",
            "indeterminate",
            "disabled",
            "id",
            "required",
            "tabIndex",
          ],
          [1, "mdc-checkbox__ripple"],
          [1, "mdc-checkbox__background"],
          [
            "focusable",
            "false",
            "viewBox",
            "0 0 24 24",
            "aria-hidden",
            "true",
            1,
            "mdc-checkbox__checkmark",
          ],
          [
            "fill",
            "none",
            "d",
            "M1.73,12.91 8.1,19.28 22.79,4.59",
            1,
            "mdc-checkbox__checkmark-path",
          ],
          [1, "mdc-checkbox__mixedmark"],
          [
            "mat-ripple",
            "",
            1,
            "mat-mdc-checkbox-ripple",
            "mat-mdc-focus-indicator",
            3,
            "matRippleTrigger",
            "matRippleDisabled",
            "matRippleCentered",
          ],
          [1, "mdc-label", 3, "for"],
        ],
        template: function (a, t) {
          if (a & 1) {
            let o = V();
            se(),
              h(0, "div", 3),
              b("click", function (g) {
                return f(o), v(t._preventBubblingFromLabel(g));
              }),
              h(1, "div", 4, 0)(3, "div", 5),
              b("click", function () {
                return f(o), v(t._onTouchTargetClick());
              }),
              l(),
              h(4, "input", 6, 1),
              b("blur", function () {
                return f(o), v(t._onBlur());
              })("click", function () {
                return f(o), v(t._onInputClick());
              })("change", function (g) {
                return f(o), v(t._onInteractionEvent(g));
              }),
              l(),
              C(6, "div", 7),
              h(7, "div", 8),
              Le(),
              h(8, "svg", 9),
              C(9, "path", 10),
              l(),
              et(),
              C(10, "div", 11),
              l(),
              C(11, "div", 12),
              l(),
              h(12, "label", 13, 2),
              de(14),
              l()();
          }
          if (a & 2) {
            let o = Ye(2);
            p("labelPosition", t.labelPosition),
              d(4),
              O("mdc-checkbox--selected", t.checked),
              p("checked", t.checked)("indeterminate", t.indeterminate)(
                "disabled",
                t.disabled && !t.disabledInteractive
              )("id", t.inputId)("required", t.required)(
                "tabIndex",
                t.disabled && !t.disabledInteractive ? -1 : t.tabIndex
              ),
              k("aria-label", t.ariaLabel || null)(
                "aria-labelledby",
                t.ariaLabelledby
              )("aria-describedby", t.ariaDescribedby)(
                "aria-checked",
                t.indeterminate ? "mixed" : null
              )(
                "aria-disabled",
                t.disabled && t.disabledInteractive ? !0 : null
              )("name", t.name)("value", t.value),
              d(7),
              p("matRippleTrigger", o)(
                "matRippleDisabled",
                t.disableRipple || t.disabled
              )("matRippleCentered", !0),
              d(),
              p("for", t.inputId);
          }
        },
        dependencies: [He, _t],
        styles: [
          '.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover .mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:hover .mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:active .mdc-checkbox__native-control~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:active .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity));background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-app-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity));background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-app-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mdc-checkbox__ripple{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;width:var(--mdc-checkbox-state-layer-size, 40px);height:var(--mdc-checkbox-state-layer-size, 40px);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.cdk-high-contrast-active .mdc-checkbox--disabled{opacity:.5}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mdc-checkbox-unselected-icon-color, var(--mat-app-on-surface-variant));top:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-icon-color, var(--mat-app-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color)}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color);border-color:rgba(0,0,0,0)}.mdc-checkbox:hover .mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-hover-icon-color, var(--mat-app-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-app-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color, var(--mat-app-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-app-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover .mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color)}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color);border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-app-on-primary))}.cdk-high-contrast-active .mdc-checkbox__checkmark{color:CanvasText}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-app-surface))}.cdk-high-contrast-active .mdc-checkbox--disabled .mdc-checkbox__checkmark,.cdk-high-contrast-active .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-app-on-primary))}.cdk-high-contrast-active .mdc-checkbox__mixedmark{margin:0 1px}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-app-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable .mdc-checkbox *,.mat-mdc-checkbox._mat-animation-noopable .mdc-checkbox *::before{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-app-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-app-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-app-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-app-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-app-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color)}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display)}.mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-mdc-focus-indicator::before{content:""}',
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = r;
    return i;
  })();
var Ei = (() => {
  let r = class r {};
  (r.ɵfac = function (a) {
    return new (a || r)();
  }),
    (r.ɵmod = me({ type: r })),
    (r.ɵinj = he({ imports: [xt, J, J] }));
  let i = r;
  return i;
})();
var yn = ["panel"],
  kn = ["*"];
function Cn(i, r) {
  if (i & 1) {
    let n = V();
    h(0, "div", 1, 0),
      b("@panelAnimation.done", function (a) {
        f(n);
        let t = m();
        return v(t._animationDone.next(a));
      }),
      de(2),
      l();
  }
  if (i & 2) {
    let n = r.id,
      e = m();
    Ce(e._classList),
      O("mat-mdc-autocomplete-visible", e.showPanel)(
        "mat-mdc-autocomplete-hidden",
        !e.showPanel
      )("mat-primary", e._color === "primary")(
        "mat-accent",
        e._color === "accent"
      )("mat-warn", e._color === "warn"),
      p("id", e.id)("@panelAnimation", e.isOpen ? "visible" : "hidden"),
      k("aria-label", e.ariaLabel || null)(
        "aria-labelledby",
        e._getPanelAriaLabelledby(n)
      );
  }
}
var Dn = Be("panelAnimation", [
    ze("void, hidden", Y({ opacity: 0, transform: "scaleY(0.8)" })),
    ge(":enter, hidden => visible", [
      ya([
        ce("0.03s linear", Y({ opacity: 1 })),
        ce("0.12s cubic-bezier(0, 0, 0.2, 1)", Y({ transform: "scaleY(1)" })),
      ]),
    ]),
    ge(":leave, visible => hidden", [ce("0.075s linear", Y({ opacity: 0 }))]),
  ]),
  xn = 0,
  $t = class {
    constructor(r, n) {
      (this.source = r), (this.option = n);
    }
  },
  Ti = new W("mat-autocomplete-default-options", {
    providedIn: "root",
    factory: wn,
  });
function wn() {
  return {
    autoActiveFirstOption: !1,
    autoSelectActiveOption: !1,
    hideSingleSelectionIndicator: !1,
    requireSelection: !1,
  };
}
var Vi = (() => {
  let r = class r {
    get isOpen() {
      return this._isOpen && this.showPanel;
    }
    _setColor(e) {
      (this._color = e), this._changeDetectorRef.markForCheck();
    }
    set classList(e) {
      (this._classList = e), (this._elementRef.nativeElement.className = "");
    }
    get hideSingleSelectionIndicator() {
      return this._hideSingleSelectionIndicator;
    }
    set hideSingleSelectionIndicator(e) {
      (this._hideSingleSelectionIndicator = e), this._syncParentProperties();
    }
    _syncParentProperties() {
      if (this.options)
        for (let e of this.options) e._changeDetectorRef.markForCheck();
    }
    constructor(e, a, t, o) {
      (this._changeDetectorRef = e),
        (this._elementRef = a),
        (this._defaults = t),
        (this._activeOptionChanges = R.EMPTY),
        (this._animationDone = new u()),
        (this.showPanel = !1),
        (this._isOpen = !1),
        (this.displayWith = null),
        (this.optionSelected = new u()),
        (this.opened = new u()),
        (this.closed = new u()),
        (this.optionActivated = new u()),
        (this.id = `mat-autocomplete-${xn++}`),
        (this.inertGroups = o?.SAFARI || !1),
        (this.autoActiveFirstOption = !!t.autoActiveFirstOption),
        (this.autoSelectActiveOption = !!t.autoSelectActiveOption),
        (this.requireSelection = !!t.requireSelection),
        (this._hideSingleSelectionIndicator =
          this._defaults.hideSingleSelectionIndicator ?? !1);
    }
    ngAfterContentInit() {
      (this._keyManager = new Aa(this.options)
        .withWrap()
        .skipPredicate(this._skipPredicate)),
        (this._activeOptionChanges = this._keyManager.change.subscribe((e) => {
          this.isOpen &&
            this.optionActivated.emit({
              source: this,
              option: this.options.toArray()[e] || null,
            });
        })),
        this._setVisibility();
    }
    ngOnDestroy() {
      this._keyManager?.destroy(),
        this._activeOptionChanges.unsubscribe(),
        this._animationDone.complete();
    }
    _setScrollTop(e) {
      this.panel && (this.panel.nativeElement.scrollTop = e);
    }
    _getScrollTop() {
      return this.panel ? this.panel.nativeElement.scrollTop : 0;
    }
    _setVisibility() {
      (this.showPanel = !!this.options.length),
        this._changeDetectorRef.markForCheck();
    }
    _emitSelectEvent(e) {
      let a = new $t(this, e);
      this.optionSelected.emit(a);
    }
    _getPanelAriaLabelledby(e) {
      if (this.ariaLabel) return null;
      let a = e ? e + " " : "";
      return this.ariaLabelledby ? a + this.ariaLabelledby : e;
    }
    _skipPredicate() {
      return !1;
    }
  };
  (r.ɵfac = function (a) {
    return new (a || r)(c(M), c(N), c(Ti), c(ht));
  }),
    (r.ɵcmp = S({
      type: r,
      selectors: [["mat-autocomplete"]],
      contentQueries: function (a, t, o) {
        if ((a & 1 && (De(o, ut, 5), De(o, Fa, 5)), a & 2)) {
          let s;
          D((s = x())) && (t.options = s), D((s = x())) && (t.optionGroups = s);
        }
      },
      viewQuery: function (a, t) {
        if ((a & 1 && (I(Vt, 7), I(yn, 5)), a & 2)) {
          let o;
          D((o = x())) && (t.template = o.first),
            D((o = x())) && (t.panel = o.first);
        }
      },
      hostAttrs: [1, "mat-mdc-autocomplete"],
      inputs: {
        ariaLabel: [0, "aria-label", "ariaLabel"],
        ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
        displayWith: "displayWith",
        autoActiveFirstOption: [
          2,
          "autoActiveFirstOption",
          "autoActiveFirstOption",
          y,
        ],
        autoSelectActiveOption: [
          2,
          "autoSelectActiveOption",
          "autoSelectActiveOption",
          y,
        ],
        requireSelection: [2, "requireSelection", "requireSelection", y],
        panelWidth: "panelWidth",
        disableRipple: [2, "disableRipple", "disableRipple", y],
        classList: [0, "class", "classList"],
        hideSingleSelectionIndicator: [
          2,
          "hideSingleSelectionIndicator",
          "hideSingleSelectionIndicator",
          y,
        ],
      },
      outputs: {
        optionSelected: "optionSelected",
        opened: "opened",
        closed: "closed",
        optionActivated: "optionActivated",
      },
      exportAs: ["matAutocomplete"],
      standalone: !0,
      features: [L([{ provide: Oa, useExisting: r }]), H, T],
      ngContentSelectors: kn,
      decls: 1,
      vars: 0,
      consts: [
        ["panel", ""],
        [
          "role",
          "listbox",
          1,
          "mat-mdc-autocomplete-panel",
          "mdc-menu-surface",
          "mdc-menu-surface--open",
          3,
          "id",
        ],
      ],
      template: function (a, t) {
        a & 1 && (se(), A(0, Cn, 3, 16, "ng-template"));
      },
      styles: [
        "div.mat-mdc-autocomplete-panel{width:100%;max-height:256px;visibility:hidden;transform-origin:center top;overflow:auto;padding:8px 0;box-sizing:border-box;position:static;border-radius:var(--mat-autocomplete-container-shape, var(--mat-app-corner-extra-small));box-shadow:var(--mat-autocomplete-container-elevation-shadow);background-color:var(--mat-autocomplete-background-color, var(--mat-app-surface-container))}.cdk-high-contrast-active div.mat-mdc-autocomplete-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel{border-top-left-radius:0;border-top-right-radius:0}.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:center bottom}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible{visibility:visible}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden{visibility:hidden;pointer-events:none}mat-autocomplete{display:none}",
      ],
      encapsulation: 2,
      data: { animation: [Dn] },
      changeDetection: 0,
    }));
  let i = r;
  return i;
})();
var An = { provide: be, useExisting: ae(() => Gt), multi: !0 };
var Oi = new W("mat-autocomplete-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    let i = P(ie);
    return () => i.scrollStrategies.reposition();
  },
});
function Mn(i) {
  return () => i.scrollStrategies.reposition();
}
var In = { provide: Oi, deps: [ie], useFactory: Mn },
  Gt = (() => {
    let r = class r {
      constructor(e, a, t, o, s, g, ne, le, ee, We, Ji) {
        (this._element = e),
          (this._overlay = a),
          (this._viewContainerRef = t),
          (this._zone = o),
          (this._changeDetectorRef = s),
          (this._dir = ne),
          (this._formField = le),
          (this._document = ee),
          (this._viewportRuler = We),
          (this._defaults = Ji),
          (this._componentDestroyed = !1),
          (this._manuallyFloatingLabel = !1),
          (this._viewportSubscription = R.EMPTY),
          (this._breakpointObserver = P(xa)),
          (this._handsetLandscapeSubscription = R.EMPTY),
          (this._canOpenOnNextFocus = !0),
          (this._closeKeyEventStream = new te()),
          (this._windowBlurHandler = () => {
            this._canOpenOnNextFocus =
              this._document.activeElement !== this._element.nativeElement ||
              this.panelOpen;
          }),
          (this._onChange = () => {}),
          (this._onTouched = () => {}),
          (this.position = "auto"),
          (this.autocompleteAttribute = "off"),
          (this._initialized = new te()),
          (this._injector = P(pe)),
          (this._aboveClass = "mat-mdc-autocomplete-panel-above"),
          (this._overlayAttached = !1),
          (this.optionSelections = ra(() => {
            let Q = this.autocomplete ? this.autocomplete.options : null;
            return Q
              ? Q.changes.pipe(
                  Se(Q),
                  Je(() => re(...Q.map((en) => en.onSelectionChange)))
                )
              : this._initialized.pipe(Je(() => this.optionSelections));
          })),
          (this._handlePanelKeydown = (Q) => {
            ((Q.keyCode === 27 && !Z(Q)) ||
              (Q.keyCode === 38 && Z(Q, "altKey"))) &&
              (this._pendingAutoselectedOption &&
                (this._updateNativeInputValue(
                  this._valueBeforeAutoSelection ?? ""
                ),
                (this._pendingAutoselectedOption = null)),
              this._closeKeyEventStream.next(),
              this._resetActiveItem(),
              Q.stopPropagation(),
              Q.preventDefault());
          }),
          (this._trackedModal = null),
          (this._scrollStrategy = g);
      }
      ngAfterViewInit() {
        this._initialized.next(), this._initialized.complete();
        let e = this._getWindow();
        typeof e < "u" &&
          this._zone.runOutsideAngular(() =>
            e.addEventListener("blur", this._windowBlurHandler)
          );
      }
      ngOnChanges(e) {
        e.position &&
          this._positionStrategy &&
          (this._setStrategyPositions(this._positionStrategy),
          this.panelOpen && this._overlayRef.updatePosition());
      }
      ngOnDestroy() {
        let e = this._getWindow();
        typeof e < "u" &&
          e.removeEventListener("blur", this._windowBlurHandler),
          this._handsetLandscapeSubscription.unsubscribe(),
          this._viewportSubscription.unsubscribe(),
          (this._componentDestroyed = !0),
          this._destroyPanel(),
          this._closeKeyEventStream.complete(),
          this._clearFromModal();
      }
      get panelOpen() {
        return this._overlayAttached && this.autocomplete.showPanel;
      }
      openPanel() {
        this._openPanelInternal();
      }
      closePanel() {
        this._resetLabel(),
          this._overlayAttached &&
            (this.panelOpen &&
              this._zone.run(() => {
                this.autocomplete.closed.emit();
              }),
            this.autocomplete._latestOpeningTrigger === this &&
              ((this.autocomplete._isOpen = !1),
              (this.autocomplete._latestOpeningTrigger = null)),
            (this._overlayAttached = !1),
            (this._pendingAutoselectedOption = null),
            this._overlayRef &&
              this._overlayRef.hasAttached() &&
              (this._overlayRef.detach(),
              this._closingActionsSubscription.unsubscribe()),
            this._updatePanelState(),
            this._componentDestroyed || this._changeDetectorRef.detectChanges(),
            this._trackedModal &&
              pt(this._trackedModal, "aria-owns", this.autocomplete.id));
      }
      updatePosition() {
        this._overlayAttached && this._overlayRef.updatePosition();
      }
      get panelClosingActions() {
        return re(
          this.optionSelections,
          this.autocomplete._keyManager.tabOut.pipe(
            Ie(() => this._overlayAttached)
          ),
          this._closeKeyEventStream,
          this._getOutsideClickStream(),
          this._overlayRef
            ? this._overlayRef
                .detachments()
                .pipe(Ie(() => this._overlayAttached))
            : Me()
        ).pipe(Xe((e) => (e instanceof Ra ? e : null)));
      }
      get activeOption() {
        return this.autocomplete && this.autocomplete._keyManager
          ? this.autocomplete._keyManager.activeItem
          : null;
      }
      _getOutsideClickStream() {
        return re(
          Ze(this._document, "click"),
          Ze(this._document, "auxclick"),
          Ze(this._document, "touchend")
        ).pipe(
          Ie((e) => {
            let a = Ca(e),
              t = this._formField
                ? this._formField.getConnectedOverlayOrigin().nativeElement
                : null,
              o = this.connectedTo
                ? this.connectedTo.elementRef.nativeElement
                : null;
            return (
              this._overlayAttached &&
              a !== this._element.nativeElement &&
              this._document.activeElement !== this._element.nativeElement &&
              (!t || !t.contains(a)) &&
              (!o || !o.contains(a)) &&
              !!this._overlayRef &&
              !this._overlayRef.overlayElement.contains(a)
            );
          })
        );
      }
      writeValue(e) {
        Promise.resolve(null).then(() => this._assignOptionValue(e));
      }
      registerOnChange(e) {
        this._onChange = e;
      }
      registerOnTouched(e) {
        this._onTouched = e;
      }
      setDisabledState(e) {
        this._element.nativeElement.disabled = e;
      }
      _handleKeydown(e) {
        let a = e.keyCode,
          t = Z(e);
        if (
          (a === 27 && !t && e.preventDefault(),
          (this._valueOnLastKeydown = this._element.nativeElement.value),
          this.activeOption && a === 13 && this.panelOpen && !t)
        )
          this.activeOption._selectViaInteraction(),
            this._resetActiveItem(),
            e.preventDefault();
        else if (this.autocomplete) {
          let o = this.autocomplete._keyManager.activeItem,
            s = a === 38 || a === 40;
          a === 9 || (s && !t && this.panelOpen)
            ? this.autocomplete._keyManager.onKeydown(e)
            : s &&
              this._canOpen() &&
              this._openPanelInternal(this._valueOnLastKeydown),
            (s || this.autocomplete._keyManager.activeItem !== o) &&
              (this._scrollToOption(
                this.autocomplete._keyManager.activeItemIndex || 0
              ),
              this.autocomplete.autoSelectActiveOption &&
                this.activeOption &&
                (this._pendingAutoselectedOption ||
                  (this._valueBeforeAutoSelection = this._valueOnLastKeydown),
                (this._pendingAutoselectedOption = this.activeOption),
                this._assignOptionValue(this.activeOption.value)));
        }
      }
      _handleInput(e) {
        let a = e.target,
          t = a.value;
        if (
          (a.type === "number" && (t = t == "" ? null : parseFloat(t)),
          this._previousValue !== t)
        ) {
          if (
            ((this._previousValue = t),
            (this._pendingAutoselectedOption = null),
            (!this.autocomplete || !this.autocomplete.requireSelection) &&
              this._onChange(t),
            !t)
          )
            this._clearPreviousSelectedOption(null, !1);
          else if (this.panelOpen && !this.autocomplete.requireSelection) {
            let o = this.autocomplete.options?.find((s) => s.selected);
            if (o) {
              let s = this._getDisplayValue(o.value);
              t !== s && o.deselect(!1);
            }
          }
          if (this._canOpen() && this._document.activeElement === e.target) {
            let o =
              this._valueOnLastKeydown ?? this._element.nativeElement.value;
            (this._valueOnLastKeydown = null), this._openPanelInternal(o);
          }
        }
      }
      _handleFocus() {
        this._canOpenOnNextFocus
          ? this._canOpen() &&
            ((this._previousValue = this._element.nativeElement.value),
            this._attachOverlay(this._previousValue),
            this._floatLabel(!0))
          : (this._canOpenOnNextFocus = !0);
      }
      _handleClick() {
        this._canOpen() && !this.panelOpen && this._openPanelInternal();
      }
      _floatLabel(e = !1) {
        this._formField &&
          this._formField.floatLabel === "auto" &&
          (e
            ? this._formField._animateAndLockLabel()
            : (this._formField.floatLabel = "always"),
          (this._manuallyFloatingLabel = !0));
      }
      _resetLabel() {
        this._manuallyFloatingLabel &&
          (this._formField && (this._formField.floatLabel = "auto"),
          (this._manuallyFloatingLabel = !1));
      }
      _subscribeToClosingActions() {
        let e = new na((t) => {
            ke(
              () => {
                t.next();
              },
              { injector: this._injector }
            );
          }),
          a = this.autocomplete.options.changes.pipe(
            sa(() => this._positionStrategy.reapplyLastPosition()),
            oa(0)
          );
        return re(e, a)
          .pipe(
            Je(() =>
              this._zone.run(() => {
                let t = this.panelOpen;
                return (
                  this._resetActiveItem(),
                  this._updatePanelState(),
                  this._changeDetectorRef.detectChanges(),
                  this.panelOpen && this._overlayRef.updatePosition(),
                  t !== this.panelOpen &&
                    (this.panelOpen
                      ? this._emitOpened()
                      : this.autocomplete.closed.emit()),
                  this.panelClosingActions
                );
              })
            ),
            Pe(1)
          )
          .subscribe((t) => this._setValueAndClose(t));
      }
      _emitOpened() {
        this.autocomplete.opened.emit();
      }
      _destroyPanel() {
        this._overlayRef &&
          (this.closePanel(),
          this._overlayRef.dispose(),
          (this._overlayRef = null));
      }
      _getDisplayValue(e) {
        let a = this.autocomplete;
        return a && a.displayWith ? a.displayWith(e) : e;
      }
      _assignOptionValue(e) {
        let a = this._getDisplayValue(e);
        e == null && this._clearPreviousSelectedOption(null, !1),
          this._updateNativeInputValue(a ?? "");
      }
      _updateNativeInputValue(e) {
        this._formField
          ? (this._formField._control.value = e)
          : (this._element.nativeElement.value = e),
          (this._previousValue = e);
      }
      _setValueAndClose(e) {
        let a = this.autocomplete,
          t = e ? e.source : this._pendingAutoselectedOption;
        t
          ? (this._clearPreviousSelectedOption(t),
            this._assignOptionValue(t.value),
            this._onChange(t.value),
            a._emitSelectEvent(t),
            this._element.nativeElement.focus())
          : a.requireSelection &&
            this._element.nativeElement.value !== this._valueOnAttach &&
            (this._clearPreviousSelectedOption(null),
            this._assignOptionValue(null),
            a._animationDone
              ? a._animationDone
                  .pipe(Pe(1))
                  .subscribe(() => this._onChange(null))
              : this._onChange(null)),
          this.closePanel();
      }
      _clearPreviousSelectedOption(e, a) {
        this.autocomplete?.options?.forEach((t) => {
          t !== e && t.selected && t.deselect(a);
        });
      }
      _openPanelInternal(e = this._element.nativeElement.value) {
        if ((this._attachOverlay(e), this._floatLabel(), this._trackedModal)) {
          let a = this.autocomplete.id;
          Pt(this._trackedModal, "aria-owns", a);
        }
      }
      _attachOverlay(e) {
        this.autocomplete;
        let a = this._overlayRef;
        a
          ? (this._positionStrategy.setOrigin(this._getConnectedElement()),
            a.updateSize({ width: this._getPanelWidth() }))
          : ((this._portal = new Yt(
              this.autocomplete.template,
              this._viewContainerRef,
              { id: this._formField?.getLabelId() }
            )),
            (a = this._overlay.create(this._getOverlayConfig())),
            (this._overlayRef = a),
            (this._viewportSubscription = this._viewportRuler
              .change()
              .subscribe(() => {
                this.panelOpen &&
                  a &&
                  a.updateSize({ width: this._getPanelWidth() });
              })),
            (this._handsetLandscapeSubscription = this._breakpointObserver
              .observe(wa.HandsetLandscape)
              .subscribe((o) => {
                o.matches
                  ? this._positionStrategy
                      .withFlexibleDimensions(!0)
                      .withGrowAfterOpen(!0)
                      .withViewportMargin(8)
                  : this._positionStrategy
                      .withFlexibleDimensions(!1)
                      .withGrowAfterOpen(!1)
                      .withViewportMargin(0);
              }))),
          a &&
            !a.hasAttached() &&
            (a.attach(this._portal),
            (this._valueOnAttach = e),
            (this._valueOnLastKeydown = null),
            (this._closingActionsSubscription =
              this._subscribeToClosingActions()));
        let t = this.panelOpen;
        (this.autocomplete._isOpen = this._overlayAttached = !0),
          (this.autocomplete._latestOpeningTrigger = this),
          this.autocomplete._setColor(this._formField?.color),
          this._updatePanelState(),
          this._applyModalPanelOwnership(),
          this.panelOpen && t !== this.panelOpen && this._emitOpened();
      }
      _updatePanelState() {
        if ((this.autocomplete._setVisibility(), this.panelOpen)) {
          let e = this._overlayRef;
          this._keydownSubscription ||
            (this._keydownSubscription = e
              .keydownEvents()
              .subscribe(this._handlePanelKeydown)),
            this._outsideClickSubscription ||
              (this._outsideClickSubscription = e
                .outsidePointerEvents()
                .subscribe());
        } else
          this._keydownSubscription?.unsubscribe(),
            this._outsideClickSubscription?.unsubscribe(),
            (this._keydownSubscription = this._outsideClickSubscription = null);
      }
      _getOverlayConfig() {
        return new bt({
          positionStrategy: this._getOverlayPosition(),
          scrollStrategy: this._scrollStrategy(),
          width: this._getPanelWidth(),
          direction: this._dir ?? void 0,
          panelClass: this._defaults?.overlayPanelClass,
        });
      }
      _getOverlayPosition() {
        let e = this._overlay
          .position()
          .flexibleConnectedTo(this._getConnectedElement())
          .withFlexibleDimensions(!1)
          .withPush(!1);
        return this._setStrategyPositions(e), (this._positionStrategy = e), e;
      }
      _setStrategyPositions(e) {
        let a = [
            {
              originX: "start",
              originY: "bottom",
              overlayX: "start",
              overlayY: "top",
            },
            {
              originX: "end",
              originY: "bottom",
              overlayX: "end",
              overlayY: "top",
            },
          ],
          t = this._aboveClass,
          o = [
            {
              originX: "start",
              originY: "top",
              overlayX: "start",
              overlayY: "bottom",
              panelClass: t,
            },
            {
              originX: "end",
              originY: "top",
              overlayX: "end",
              overlayY: "bottom",
              panelClass: t,
            },
          ],
          s;
        this.position === "above"
          ? (s = o)
          : this.position === "below"
          ? (s = a)
          : (s = [...a, ...o]),
          e.withPositions(s);
      }
      _getConnectedElement() {
        return this.connectedTo
          ? this.connectedTo.elementRef
          : this._formField
          ? this._formField.getConnectedOverlayOrigin()
          : this._element;
      }
      _getPanelWidth() {
        return this.autocomplete.panelWidth || this._getHostWidth();
      }
      _getHostWidth() {
        return this._getConnectedElement().nativeElement.getBoundingClientRect()
          .width;
      }
      _resetActiveItem() {
        let e = this.autocomplete;
        if (e.autoActiveFirstOption) {
          let a = -1;
          for (let t = 0; t < e.options.length; t++)
            if (!e.options.get(t).disabled) {
              a = t;
              break;
            }
          e._keyManager.setActiveItem(a);
        } else e._keyManager.setActiveItem(-1);
      }
      _canOpen() {
        let e = this._element.nativeElement;
        return !e.readOnly && !e.disabled && !this.autocompleteDisabled;
      }
      _getWindow() {
        return this._document?.defaultView || window;
      }
      _scrollToOption(e) {
        let a = this.autocomplete,
          t = Pa(e, a.options, a.optionGroups);
        if (e === 0 && t === 1) a._setScrollTop(0);
        else if (a.panel) {
          let o = a.options.toArray()[e];
          if (o) {
            let s = o._getHostElement(),
              g = Na(
                s.offsetTop,
                s.offsetHeight,
                a._getScrollTop(),
                a.panel.nativeElement.offsetHeight
              );
            a._setScrollTop(g);
          }
        }
      }
      _applyModalPanelOwnership() {
        let e = this._element.nativeElement.closest(
          'body > .cdk-overlay-container [aria-modal="true"]'
        );
        if (!e) return;
        let a = this.autocomplete.id;
        this._trackedModal && pt(this._trackedModal, "aria-owns", a),
          Pt(e, "aria-owns", a),
          (this._trackedModal = e);
      }
      _clearFromModal() {
        if (this._trackedModal) {
          let e = this.autocomplete.id;
          pt(this._trackedModal, "aria-owns", e), (this._trackedModal = null);
        }
      }
    };
    (r.ɵfac = function (a) {
      return new (a || r)(
        c(N),
        c(ie),
        c(at),
        c(oe),
        c(M),
        c(Oi),
        c(xe, 8),
        c(kt, 9),
        c(ct, 8),
        c(Ba),
        c(Ti, 8)
      );
    }),
      (r.ɵdir = z({
        type: r,
        selectors: [
          ["input", "matAutocomplete", ""],
          ["textarea", "matAutocomplete", ""],
        ],
        hostAttrs: [1, "mat-mdc-autocomplete-trigger"],
        hostVars: 7,
        hostBindings: function (a, t) {
          a & 1 &&
            b("focusin", function () {
              return t._handleFocus();
            })("blur", function () {
              return t._onTouched();
            })("input", function (s) {
              return t._handleInput(s);
            })("keydown", function (s) {
              return t._handleKeydown(s);
            })("click", function () {
              return t._handleClick();
            }),
            a & 2 &&
              k("autocomplete", t.autocompleteAttribute)(
                "role",
                t.autocompleteDisabled ? null : "combobox"
              )("aria-autocomplete", t.autocompleteDisabled ? null : "list")(
                "aria-activedescendant",
                t.panelOpen && t.activeOption ? t.activeOption.id : null
              )(
                "aria-expanded",
                t.autocompleteDisabled ? null : t.panelOpen.toString()
              )(
                "aria-controls",
                t.autocompleteDisabled || !t.panelOpen || t.autocomplete == null
                  ? null
                  : t.autocomplete.id
              )("aria-haspopup", t.autocompleteDisabled ? null : "listbox");
        },
        inputs: {
          autocomplete: [0, "matAutocomplete", "autocomplete"],
          position: [0, "matAutocompletePosition", "position"],
          connectedTo: [0, "matAutocompleteConnectedTo", "connectedTo"],
          autocompleteAttribute: [0, "autocomplete", "autocompleteAttribute"],
          autocompleteDisabled: [
            2,
            "matAutocompleteDisabled",
            "autocompleteDisabled",
            y,
          ],
        },
        exportAs: ["matAutocompleteTrigger"],
        standalone: !0,
        features: [L([An]), H, X],
      }));
    let i = r;
    return i;
  })(),
  Fi = (() => {
    let r = class r {};
    (r.ɵfac = function (a) {
      return new (a || r)();
    }),
      (r.ɵmod = me({ type: r })),
      (r.ɵinj = he({ providers: [In], imports: [ft, Nt, J, _e, gt, Nt, J] }));
    let i = r;
    return i;
  })();
var Tn = ["mat-calendar-body", ""];
function Vn(i, r) {
  return this._trackRow(r);
}
var zi = (i, r) => r.id;
function On(i, r) {
  if ((i & 1 && (h(0, "tr", 0)(1, "td", 3), _(2), l()()), i & 2)) {
    let n = m();
    d(),
      nt("padding-top", n._cellPadding)("padding-bottom", n._cellPadding),
      k("colspan", n.numCols),
      d(),
      G(" ", n.label, " ");
  }
}
function Fn(i, r) {
  if ((i & 1 && (h(0, "td", 3), _(1), l()), i & 2)) {
    let n = m(2);
    nt("padding-top", n._cellPadding)("padding-bottom", n._cellPadding),
      k("colspan", n._firstRowOffset),
      d(),
      G(" ", n._firstRowOffset >= n.labelMinRequiredCells ? n.label : "", " ");
  }
}
function Rn(i, r) {
  if (i & 1) {
    let n = V();
    h(0, "td", 6)(1, "button", 7),
      b("click", function (a) {
        let t = f(n).$implicit,
          o = m(2);
        return v(o._cellClicked(t, a));
      })("focus", function (a) {
        let t = f(n).$implicit,
          o = m(2);
        return v(o._emitActiveDateChange(t, a));
      }),
      h(2, "span", 8),
      _(3),
      l(),
      C(4, "span", 9),
      l()();
  }
  if (i & 2) {
    let n = r.$implicit,
      e = r.$index,
      a = m().$index,
      t = m();
    nt("width", t._cellWidth)("padding-top", t._cellPadding)(
      "padding-bottom",
      t._cellPadding
    ),
      k("data-mat-row", a)("data-mat-col", e),
      d(),
      O("mat-calendar-body-disabled", !n.enabled)(
        "mat-calendar-body-active",
        t._isActiveCell(a, e)
      )("mat-calendar-body-range-start", t._isRangeStart(n.compareValue))(
        "mat-calendar-body-range-end",
        t._isRangeEnd(n.compareValue)
      )("mat-calendar-body-in-range", t._isInRange(n.compareValue))(
        "mat-calendar-body-comparison-bridge-start",
        t._isComparisonBridgeStart(n.compareValue, a, e)
      )(
        "mat-calendar-body-comparison-bridge-end",
        t._isComparisonBridgeEnd(n.compareValue, a, e)
      )(
        "mat-calendar-body-comparison-start",
        t._isComparisonStart(n.compareValue)
      )("mat-calendar-body-comparison-end", t._isComparisonEnd(n.compareValue))(
        "mat-calendar-body-in-comparison-range",
        t._isInComparisonRange(n.compareValue)
      )("mat-calendar-body-preview-start", t._isPreviewStart(n.compareValue))(
        "mat-calendar-body-preview-end",
        t._isPreviewEnd(n.compareValue)
      )("mat-calendar-body-in-preview", t._isInPreview(n.compareValue)),
      p("ngClass", n.cssClasses)("tabindex", t._isActiveCell(a, e) ? 0 : -1),
      k("aria-label", n.ariaLabel)("aria-disabled", !n.enabled || null)(
        "aria-pressed",
        t._isSelected(n.compareValue)
      )("aria-current", t.todayValue === n.compareValue ? "date" : null)(
        "aria-describedby",
        t._getDescribedby(n.compareValue)
      ),
      d(),
      O("mat-calendar-body-selected", t._isSelected(n.compareValue))(
        "mat-calendar-body-comparison-identical",
        t._isComparisonIdentical(n.compareValue)
      )("mat-calendar-body-today", t.todayValue === n.compareValue),
      d(),
      G(" ", n.displayValue, " ");
  }
}
function Pn(i, r) {
  if (
    (i & 1 &&
      (h(0, "tr", 1),
      A(1, Fn, 2, 6, "td", 4),
      q(2, Rn, 5, 48, "td", 5, zi),
      l()),
    i & 2)
  ) {
    let n = r.$implicit,
      e = r.$index,
      a = m();
    d(), E(e === 0 && a._firstRowOffset ? 1 : -1), d(), $(n);
  }
}
function Nn(i, r) {
  if (
    (i & 1 &&
      (h(0, "th", 2)(1, "span", 6), _(2), l(), h(3, "span", 3), _(4), l()()),
    i & 2)
  ) {
    let n = r.$implicit;
    d(2), w(n.long), d(2), w(n.narrow);
  }
}
var Ln = ["*"];
function Yn(i, r) {}
function jn(i, r) {
  if (i & 1) {
    let n = V();
    h(0, "mat-month-view", 4),
      dt("activeDateChange", function (a) {
        f(n);
        let t = m();
        return st(t.activeDate, a) || (t.activeDate = a), v(a);
      }),
      b("_userSelection", function (a) {
        f(n);
        let t = m();
        return v(t._dateSelected(a));
      })("dragStarted", function (a) {
        f(n);
        let t = m();
        return v(t._dragStarted(a));
      })("dragEnded", function (a) {
        f(n);
        let t = m();
        return v(t._dragEnded(a));
      }),
      l();
  }
  if (i & 2) {
    let n = m();
    ot("activeDate", n.activeDate),
      p("selected", n.selected)("dateFilter", n.dateFilter)(
        "maxDate",
        n.maxDate
      )("minDate", n.minDate)("dateClass", n.dateClass)(
        "comparisonStart",
        n.comparisonStart
      )("comparisonEnd", n.comparisonEnd)(
        "startDateAccessibleName",
        n.startDateAccessibleName
      )("endDateAccessibleName", n.endDateAccessibleName)(
        "activeDrag",
        n._activeDrag
      );
  }
}
function Bn(i, r) {
  if (i & 1) {
    let n = V();
    h(0, "mat-year-view", 5),
      dt("activeDateChange", function (a) {
        f(n);
        let t = m();
        return st(t.activeDate, a) || (t.activeDate = a), v(a);
      }),
      b("monthSelected", function (a) {
        f(n);
        let t = m();
        return v(t._monthSelectedInYearView(a));
      })("selectedChange", function (a) {
        f(n);
        let t = m();
        return v(t._goToDateInView(a, "month"));
      }),
      l();
  }
  if (i & 2) {
    let n = m();
    ot("activeDate", n.activeDate),
      p("selected", n.selected)("dateFilter", n.dateFilter)(
        "maxDate",
        n.maxDate
      )("minDate", n.minDate)("dateClass", n.dateClass);
  }
}
function zn(i, r) {
  if (i & 1) {
    let n = V();
    h(0, "mat-multi-year-view", 6),
      dt("activeDateChange", function (a) {
        f(n);
        let t = m();
        return st(t.activeDate, a) || (t.activeDate = a), v(a);
      }),
      b("yearSelected", function (a) {
        f(n);
        let t = m();
        return v(t._yearSelectedInMultiYearView(a));
      })("selectedChange", function (a) {
        f(n);
        let t = m();
        return v(t._goToDateInView(a, "year"));
      }),
      l();
  }
  if (i & 2) {
    let n = m();
    ot("activeDate", n.activeDate),
      p("selected", n.selected)("dateFilter", n.dateFilter)(
        "maxDate",
        n.maxDate
      )("minDate", n.minDate)("dateClass", n.dateClass);
  }
}
function Hn(i, r) {}
var qn = ["button"],
  $n = [[["", "matDatepickerToggleIcon", ""]]],
  Gn = ["[matDatepickerToggleIcon]"];
function Un(i, r) {
  i & 1 && (Le(), h(0, "svg", 2), C(1, "path", 3), l());
}
var Qe = (() => {
    let r = class r {
      constructor() {
        (this.changes = new te()),
          (this.calendarLabel = "Calendar"),
          (this.openCalendarLabel = "Open calendar"),
          (this.closeCalendarLabel = "Close calendar"),
          (this.prevMonthLabel = "Previous month"),
          (this.nextMonthLabel = "Next month"),
          (this.prevYearLabel = "Previous year"),
          (this.nextYearLabel = "Next year"),
          (this.prevMultiYearLabel = "Previous 24 years"),
          (this.nextMultiYearLabel = "Next 24 years"),
          (this.switchToMonthViewLabel = "Choose date"),
          (this.switchToMultiYearViewLabel = "Choose month and year"),
          (this.startDateLabel = "Start date"),
          (this.endDateLabel = "End date");
      }
      formatYearRange(e, a) {
        return `${e} \u2013 ${a}`;
      }
      formatYearRangeLabel(e, a) {
        return `${e} to ${a}`;
      }
    };
    (r.ɵfac = function (a) {
      return new (a || r)();
    }),
      (r.ɵprov = Ee({ token: r, factory: r.ɵfac, providedIn: "root" }));
    let i = r;
    return i;
  })(),
  Kn = 0,
  Ue = class {
    constructor(r, n, e, a, t = {}, o = r, s) {
      (this.value = r),
        (this.displayValue = n),
        (this.ariaLabel = e),
        (this.enabled = a),
        (this.cssClasses = t),
        (this.compareValue = o),
        (this.rawValue = s),
        (this.id = Kn++);
    }
  },
  Qn = 1,
  Ri = mt({ passive: !1, capture: !0 }),
  ye = mt({ passive: !0, capture: !0 }),
  wt = mt({ passive: !0 }),
  Re = (() => {
    let r = class r {
      ngAfterViewChecked() {
        this._focusActiveCellAfterViewChecked &&
          (this._focusActiveCell(),
          (this._focusActiveCellAfterViewChecked = !1));
      }
      constructor(e, a) {
        (this._elementRef = e),
          (this._ngZone = a),
          (this._platform = P(ht)),
          (this._focusActiveCellAfterViewChecked = !1),
          (this.numCols = 7),
          (this.activeCell = 0),
          (this.isRange = !1),
          (this.cellAspectRatio = 1),
          (this.previewStart = null),
          (this.previewEnd = null),
          (this.selectedValueChange = new u()),
          (this.previewChange = new u()),
          (this.activeDateChange = new u()),
          (this.dragStarted = new u()),
          (this.dragEnded = new u()),
          (this._didDragSinceMouseDown = !1),
          (this._injector = P(pe)),
          (this._trackRow = (t) => t),
          (this._enterHandler = (t) => {
            if (this._skipNextFocus && t.type === "focus") {
              this._skipNextFocus = !1;
              return;
            }
            if (t.target && this.isRange) {
              let o = this._getCellFromElement(t.target);
              o &&
                this._ngZone.run(() =>
                  this.previewChange.emit({
                    value: o.enabled ? o : null,
                    event: t,
                  })
                );
            }
          }),
          (this._touchmoveHandler = (t) => {
            if (!this.isRange) return;
            let o = Pi(t),
              s = o ? this._getCellFromElement(o) : null;
            o !== t.target && (this._didDragSinceMouseDown = !0),
              Kt(t.target) && t.preventDefault(),
              this._ngZone.run(() =>
                this.previewChange.emit({
                  value: s?.enabled ? s : null,
                  event: t,
                })
              );
          }),
          (this._leaveHandler = (t) => {
            this.previewEnd !== null &&
              this.isRange &&
              (t.type !== "blur" && (this._didDragSinceMouseDown = !0),
              t.target &&
                this._getCellFromElement(t.target) &&
                !(
                  t.relatedTarget && this._getCellFromElement(t.relatedTarget)
                ) &&
                this._ngZone.run(() =>
                  this.previewChange.emit({ value: null, event: t })
                ));
          }),
          (this._mousedownHandler = (t) => {
            if (!this.isRange) return;
            this._didDragSinceMouseDown = !1;
            let o = t.target && this._getCellFromElement(t.target);
            !o ||
              !this._isInRange(o.compareValue) ||
              this._ngZone.run(() => {
                this.dragStarted.emit({ value: o.rawValue, event: t });
              });
          }),
          (this._mouseupHandler = (t) => {
            if (!this.isRange) return;
            let o = Kt(t.target);
            if (!o) {
              this._ngZone.run(() => {
                this.dragEnded.emit({ value: null, event: t });
              });
              return;
            }
            o.closest(".mat-calendar-body") ===
              this._elementRef.nativeElement &&
              this._ngZone.run(() => {
                let s = this._getCellFromElement(o);
                this.dragEnded.emit({ value: s?.rawValue ?? null, event: t });
              });
          }),
          (this._touchendHandler = (t) => {
            let o = Pi(t);
            o && this._mouseupHandler({ target: o });
          }),
          (this._id = `mat-calendar-body-${Qn++}`),
          (this._startDateLabelId = `${this._id}-start-date`),
          (this._endDateLabelId = `${this._id}-end-date`),
          a.runOutsideAngular(() => {
            let t = e.nativeElement;
            t.addEventListener("touchmove", this._touchmoveHandler, Ri),
              t.addEventListener("mouseenter", this._enterHandler, ye),
              t.addEventListener("focus", this._enterHandler, ye),
              t.addEventListener("mouseleave", this._leaveHandler, ye),
              t.addEventListener("blur", this._leaveHandler, ye),
              t.addEventListener("mousedown", this._mousedownHandler, wt),
              t.addEventListener("touchstart", this._mousedownHandler, wt),
              this._platform.isBrowser &&
                (window.addEventListener("mouseup", this._mouseupHandler),
                window.addEventListener("touchend", this._touchendHandler));
          });
      }
      _cellClicked(e, a) {
        this._didDragSinceMouseDown ||
          (e.enabled &&
            this.selectedValueChange.emit({ value: e.value, event: a }));
      }
      _emitActiveDateChange(e, a) {
        e.enabled && this.activeDateChange.emit({ value: e.value, event: a });
      }
      _isSelected(e) {
        return this.startValue === e || this.endValue === e;
      }
      ngOnChanges(e) {
        let a = e.numCols,
          { rows: t, numCols: o } = this;
        (e.rows || a) &&
          (this._firstRowOffset =
            t && t.length && t[0].length ? o - t[0].length : 0),
          (e.cellAspectRatio || a || !this._cellPadding) &&
            (this._cellPadding = `${(50 * this.cellAspectRatio) / o}%`),
          (a || !this._cellWidth) && (this._cellWidth = `${100 / o}%`);
      }
      ngOnDestroy() {
        let e = this._elementRef.nativeElement;
        e.removeEventListener("touchmove", this._touchmoveHandler, Ri),
          e.removeEventListener("mouseenter", this._enterHandler, ye),
          e.removeEventListener("focus", this._enterHandler, ye),
          e.removeEventListener("mouseleave", this._leaveHandler, ye),
          e.removeEventListener("blur", this._leaveHandler, ye),
          e.removeEventListener("mousedown", this._mousedownHandler, wt),
          e.removeEventListener("touchstart", this._mousedownHandler, wt),
          this._platform.isBrowser &&
            (window.removeEventListener("mouseup", this._mouseupHandler),
            window.removeEventListener("touchend", this._touchendHandler));
      }
      _isActiveCell(e, a) {
        let t = e * this.numCols + a;
        return e && (t -= this._firstRowOffset), t == this.activeCell;
      }
      _focusActiveCell(e = !0) {
        ke(
          () => {
            setTimeout(() => {
              let a = this._elementRef.nativeElement.querySelector(
                ".mat-calendar-body-active"
              );
              a && (e || (this._skipNextFocus = !0), a.focus());
            });
          },
          { injector: this._injector }
        );
      }
      _scheduleFocusActiveCellAfterViewChecked() {
        this._focusActiveCellAfterViewChecked = !0;
      }
      _isRangeStart(e) {
        return Qt(e, this.startValue, this.endValue);
      }
      _isRangeEnd(e) {
        return Wt(e, this.startValue, this.endValue);
      }
      _isInRange(e) {
        return Xt(e, this.startValue, this.endValue, this.isRange);
      }
      _isComparisonStart(e) {
        return Qt(e, this.comparisonStart, this.comparisonEnd);
      }
      _isComparisonBridgeStart(e, a, t) {
        if (
          !this._isComparisonStart(e) ||
          this._isRangeStart(e) ||
          !this._isInRange(e)
        )
          return !1;
        let o = this.rows[a][t - 1];
        if (!o) {
          let s = this.rows[a - 1];
          o = s && s[s.length - 1];
        }
        return o && !this._isRangeEnd(o.compareValue);
      }
      _isComparisonBridgeEnd(e, a, t) {
        if (
          !this._isComparisonEnd(e) ||
          this._isRangeEnd(e) ||
          !this._isInRange(e)
        )
          return !1;
        let o = this.rows[a][t + 1];
        if (!o) {
          let s = this.rows[a + 1];
          o = s && s[0];
        }
        return o && !this._isRangeStart(o.compareValue);
      }
      _isComparisonEnd(e) {
        return Wt(e, this.comparisonStart, this.comparisonEnd);
      }
      _isInComparisonRange(e) {
        return Xt(e, this.comparisonStart, this.comparisonEnd, this.isRange);
      }
      _isComparisonIdentical(e) {
        return (
          this.comparisonStart === this.comparisonEnd &&
          e === this.comparisonStart
        );
      }
      _isPreviewStart(e) {
        return Qt(e, this.previewStart, this.previewEnd);
      }
      _isPreviewEnd(e) {
        return Wt(e, this.previewStart, this.previewEnd);
      }
      _isInPreview(e) {
        return Xt(e, this.previewStart, this.previewEnd, this.isRange);
      }
      _getDescribedby(e) {
        return this.isRange
          ? this.startValue === e && this.endValue === e
            ? `${this._startDateLabelId} ${this._endDateLabelId}`
            : this.startValue === e
            ? this._startDateLabelId
            : this.endValue === e
            ? this._endDateLabelId
            : null
          : null;
      }
      _getCellFromElement(e) {
        let a = Kt(e);
        if (a) {
          let t = a.getAttribute("data-mat-row"),
            o = a.getAttribute("data-mat-col");
          if (t && o) return this.rows[parseInt(t)][parseInt(o)];
        }
        return null;
      }
    };
    (r.ɵfac = function (a) {
      return new (a || r)(c(N), c(oe));
    }),
      (r.ɵcmp = S({
        type: r,
        selectors: [["", "mat-calendar-body", ""]],
        hostAttrs: [1, "mat-calendar-body"],
        inputs: {
          label: "label",
          rows: "rows",
          todayValue: "todayValue",
          startValue: "startValue",
          endValue: "endValue",
          labelMinRequiredCells: "labelMinRequiredCells",
          numCols: "numCols",
          activeCell: "activeCell",
          isRange: "isRange",
          cellAspectRatio: "cellAspectRatio",
          comparisonStart: "comparisonStart",
          comparisonEnd: "comparisonEnd",
          previewStart: "previewStart",
          previewEnd: "previewEnd",
          startDateAccessibleName: "startDateAccessibleName",
          endDateAccessibleName: "endDateAccessibleName",
        },
        outputs: {
          selectedValueChange: "selectedValueChange",
          previewChange: "previewChange",
          activeDateChange: "activeDateChange",
          dragStarted: "dragStarted",
          dragEnded: "dragEnded",
        },
        exportAs: ["matCalendarBody"],
        standalone: !0,
        features: [X, T],
        attrs: Tn,
        decls: 7,
        vars: 5,
        consts: [
          ["aria-hidden", "true"],
          ["role", "row"],
          [1, "mat-calendar-body-hidden-label", 3, "id"],
          [1, "mat-calendar-body-label"],
          [1, "mat-calendar-body-label", 3, "paddingTop", "paddingBottom"],
          [
            "role",
            "gridcell",
            1,
            "mat-calendar-body-cell-container",
            3,
            "width",
            "paddingTop",
            "paddingBottom",
          ],
          ["role", "gridcell", 1, "mat-calendar-body-cell-container"],
          [
            "type",
            "button",
            1,
            "mat-calendar-body-cell",
            3,
            "click",
            "focus",
            "ngClass",
            "tabindex",
          ],
          [1, "mat-calendar-body-cell-content", "mat-focus-indicator"],
          ["aria-hidden", "true", 1, "mat-calendar-body-cell-preview"],
        ],
        template: function (a, t) {
          a & 1 &&
            (A(0, On, 3, 6, "tr", 0),
            q(1, Pn, 4, 1, "tr", 1, Vn, !0),
            h(3, "span", 2),
            _(4),
            l(),
            h(5, "span", 2),
            _(6),
            l()),
            a & 2 &&
              (E(t._firstRowOffset < t.labelMinRequiredCells ? 0 : -1),
              d(),
              $(t.rows),
              d(2),
              p("id", t._startDateLabelId),
              d(),
              G(
                " ",
                t.startDateAccessibleName,
                `
`
              ),
              d(),
              p("id", t._endDateLabelId),
              d(),
              G(
                " ",
                t.endDateAccessibleName,
                `
`
              ));
        },
        dependencies: [lt],
        styles: [
          '.mat-calendar-body{min-width:224px}.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-app-primary))}.mat-calendar-body-label{height:0;line-height:0;text-align:start;padding-left:4.7142857143%;padding-right:4.7142857143%;font-size:var(--mat-datepicker-calendar-body-label-text-size, var(--mat-app-title-small-size));font-weight:var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-app-title-small-weight));color:var(--mat-datepicker-calendar-body-label-text-color, var(--mat-app-on-surface))}.mat-calendar-body-hidden-label{display:none}.mat-calendar-body-cell-container{position:relative;height:0;line-height:0}.mat-calendar-body-cell{-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);position:absolute;top:0;left:0;width:100%;height:100%;background:none;text-align:center;outline:none;font-family:inherit;margin:0;font-family:var(--mat-datepicker-calendar-text-font, var(--mat-app-body-medium-font));font-size:var(--mat-datepicker-calendar-text-size, var(--mat-app-body-medium-size))}.mat-calendar-body-cell::-moz-focus-inner{border:0}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-cell-preview{content:"";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;display:block;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-start::after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,.mat-calendar-body-comparison-start::after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,[dir=rtl] .mat-calendar-body-comparison-start::after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,.mat-calendar-body-comparison-end::after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,[dir=rtl] .mat-calendar-body-comparison-end::after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:0;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after{width:90%}.mat-calendar-body-in-preview{color:var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-app-primary))}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){color:var(--mat-datepicker-calendar-date-disabled-state-text-color)}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-disabled-state-outline-color)}.cdk-high-contrast-active .mat-calendar-body-disabled{opacity:.5}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px;color:var(--mat-datepicker-calendar-date-text-color, var(--mat-app-on-surface));border-color:var(--mat-datepicker-calendar-date-outline-color)}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-focus-state-background-color)}@media(hover: hover){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-hover-state-background-color)}}.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-app-primary));color:var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-app-on-primary))}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-disabled-state-background-color)}.mat-calendar-body-selected.mat-calendar-body-today{box-shadow:inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-app-primary))}.mat-calendar-body-in-range::before{background:var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-app-primary-container))}.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range::before{background:var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-app-tertiary-container))}.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range::before{background:var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-app-tertiary-container))}.mat-calendar-body-comparison-bridge-start::before,[dir=rtl] .mat-calendar-body-comparison-bridge-end::before{background:linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-app-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-app-tertiary-container)) 50%)}.mat-calendar-body-comparison-bridge-end::before,[dir=rtl] .mat-calendar-body-comparison-bridge-start::before{background:linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-app-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-app-tertiary-container)) 50%)}.mat-calendar-body-in-range>.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after{background:var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-app-secondary-container))}.mat-calendar-body-comparison-identical.mat-calendar-body-selected,.mat-calendar-body-in-comparison-range>.mat-calendar-body-selected{background:var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-app-secondary))}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .mat-calendar-body-cell::before,.cdk-high-contrast-active .mat-calendar-body-cell::after,.cdk-high-contrast-active .mat-calendar-body-selected{background:none}.cdk-high-contrast-active .mat-calendar-body-in-range::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-start::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-end::before{border-top:solid 1px;border-bottom:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:0;border-right:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:0;border-left:solid 1px}.cdk-high-contrast-active .mat-calendar-body-in-comparison-range::before{border-top:dashed 1px;border-bottom:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:0;border-right:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:0;border-left:dashed 1px}',
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = r;
    return i;
  })();
function Ut(i) {
  return i?.nodeName === "TD";
}
function Kt(i) {
  let r;
  return (
    Ut(i)
      ? (r = i)
      : Ut(i.parentNode)
      ? (r = i.parentNode)
      : Ut(i.parentNode?.parentNode) && (r = i.parentNode.parentNode),
    r?.getAttribute("data-mat-row") != null ? r : null
  );
}
function Qt(i, r, n) {
  return n !== null && r !== n && i < n && i === r;
}
function Wt(i, r, n) {
  return r !== null && r !== n && i >= r && i === n;
}
function Xt(i, r, n, e) {
  return e && r !== null && n !== null && r !== n && i >= r && i <= n;
}
function Pi(i) {
  let r = i.changedTouches[0];
  return document.elementFromPoint(r.clientX, r.clientY);
}
var K = class {
    constructor(r, n) {
      (this.start = r), (this.end = n);
    }
  },
  Ke = (() => {
    let r = class r {
      constructor(e, a) {
        (this.selection = e),
          (this._adapter = a),
          (this._selectionChanged = new te()),
          (this.selectionChanged = this._selectionChanged),
          (this.selection = e);
      }
      updateSelection(e, a) {
        let t = this.selection;
        (this.selection = e),
          this._selectionChanged.next({ selection: e, source: a, oldValue: t });
      }
      ngOnDestroy() {
        this._selectionChanged.complete();
      }
      _isValidDateInstance(e) {
        return this._adapter.isDateInstance(e) && this._adapter.isValid(e);
      }
    };
    (r.ɵfac = function (a) {
      la();
    }),
      (r.ɵprov = Ee({ token: r, factory: r.ɵfac }));
    let i = r;
    return i;
  })(),
  Wn = (() => {
    let r = class r extends Ke {
      constructor(e) {
        super(null, e);
      }
      add(e) {
        super.updateSelection(e, this);
      }
      isValid() {
        return (
          this.selection != null && this._isValidDateInstance(this.selection)
        );
      }
      isComplete() {
        return this.selection != null;
      }
      clone() {
        let e = new r(this._adapter);
        return e.updateSelection(this.selection, this), e;
      }
    };
    (r.ɵfac = function (a) {
      return new (a || r)(Ne(j));
    }),
      (r.ɵprov = Ee({ token: r, factory: r.ɵfac }));
    let i = r;
    return i;
  })();
function Xn(i, r) {
  return i || new Wn(r);
}
var Hi = { provide: Ke, deps: [[new da(), new ca(), Ke], j], useFactory: Xn };
var qi = new W("MAT_DATE_RANGE_SELECTION_STRATEGY");
var Zt = 7,
  Zn = 0,
  Ni = (() => {
    let r = class r {
      get activeDate() {
        return this._activeDate;
      }
      set activeDate(e) {
        let a = this._activeDate,
          t =
            this._dateAdapter.getValidDateOrNull(
              this._dateAdapter.deserialize(e)
            ) || this._dateAdapter.today();
        (this._activeDate = this._dateAdapter.clampDate(
          t,
          this.minDate,
          this.maxDate
        )),
          this._hasSameMonthAndYear(a, this._activeDate) || this._init();
      }
      get selected() {
        return this._selected;
      }
      set selected(e) {
        e instanceof K
          ? (this._selected = e)
          : (this._selected = this._dateAdapter.getValidDateOrNull(
              this._dateAdapter.deserialize(e)
            )),
          this._setRanges(this._selected);
      }
      get minDate() {
        return this._minDate;
      }
      set minDate(e) {
        this._minDate = this._dateAdapter.getValidDateOrNull(
          this._dateAdapter.deserialize(e)
        );
      }
      get maxDate() {
        return this._maxDate;
      }
      set maxDate(e) {
        this._maxDate = this._dateAdapter.getValidDateOrNull(
          this._dateAdapter.deserialize(e)
        );
      }
      constructor(e, a, t, o, s) {
        (this._changeDetectorRef = e),
          (this._dateFormats = a),
          (this._dateAdapter = t),
          (this._dir = o),
          (this._rangeStrategy = s),
          (this._rerenderSubscription = R.EMPTY),
          (this.activeDrag = null),
          (this.selectedChange = new u()),
          (this._userSelection = new u()),
          (this.dragStarted = new u()),
          (this.dragEnded = new u()),
          (this.activeDateChange = new u()),
          (this._activeDate = this._dateAdapter.today());
      }
      ngAfterContentInit() {
        this._rerenderSubscription = this._dateAdapter.localeChanges
          .pipe(Se(null))
          .subscribe(() => this._init());
      }
      ngOnChanges(e) {
        let a = e.comparisonStart || e.comparisonEnd;
        a && !a.firstChange && this._setRanges(this.selected),
          e.activeDrag && !this.activeDrag && this._clearPreview();
      }
      ngOnDestroy() {
        this._rerenderSubscription.unsubscribe();
      }
      _dateSelected(e) {
        let a = e.value,
          t = this._getDateFromDayOfMonth(a),
          o,
          s;
        this._selected instanceof K
          ? ((o = this._getDateInCurrentMonth(this._selected.start)),
            (s = this._getDateInCurrentMonth(this._selected.end)))
          : (o = s = this._getDateInCurrentMonth(this._selected)),
          (o !== a || s !== a) && this.selectedChange.emit(t),
          this._userSelection.emit({ value: t, event: e.event }),
          this._clearPreview(),
          this._changeDetectorRef.markForCheck();
      }
      _updateActiveDate(e) {
        let a = e.value,
          t = this._activeDate;
        (this.activeDate = this._getDateFromDayOfMonth(a)),
          this._dateAdapter.compareDate(t, this.activeDate) &&
            this.activeDateChange.emit(this._activeDate);
      }
      _handleCalendarBodyKeydown(e) {
        let a = this._activeDate,
          t = this._isRtl();
        switch (e.keyCode) {
          case 37:
            this.activeDate = this._dateAdapter.addCalendarDays(
              this._activeDate,
              t ? 1 : -1
            );
            break;
          case 39:
            this.activeDate = this._dateAdapter.addCalendarDays(
              this._activeDate,
              t ? -1 : 1
            );
            break;
          case 38:
            this.activeDate = this._dateAdapter.addCalendarDays(
              this._activeDate,
              -7
            );
            break;
          case 40:
            this.activeDate = this._dateAdapter.addCalendarDays(
              this._activeDate,
              7
            );
            break;
          case 36:
            this.activeDate = this._dateAdapter.addCalendarDays(
              this._activeDate,
              1 - this._dateAdapter.getDate(this._activeDate)
            );
            break;
          case 35:
            this.activeDate = this._dateAdapter.addCalendarDays(
              this._activeDate,
              this._dateAdapter.getNumDaysInMonth(this._activeDate) -
                this._dateAdapter.getDate(this._activeDate)
            );
            break;
          case 33:
            this.activeDate = e.altKey
              ? this._dateAdapter.addCalendarYears(this._activeDate, -1)
              : this._dateAdapter.addCalendarMonths(this._activeDate, -1);
            break;
          case 34:
            this.activeDate = e.altKey
              ? this._dateAdapter.addCalendarYears(this._activeDate, 1)
              : this._dateAdapter.addCalendarMonths(this._activeDate, 1);
            break;
          case 13:
          case 32:
            (this._selectionKeyPressed = !0),
              this._canSelect(this._activeDate) && e.preventDefault();
            return;
          case 27:
            this._previewEnd != null &&
              !Z(e) &&
              (this._clearPreview(),
              this.activeDrag
                ? this.dragEnded.emit({ value: null, event: e })
                : (this.selectedChange.emit(null),
                  this._userSelection.emit({ value: null, event: e })),
              e.preventDefault(),
              e.stopPropagation());
            return;
          default:
            return;
        }
        this._dateAdapter.compareDate(a, this.activeDate) &&
          (this.activeDateChange.emit(this.activeDate),
          this._focusActiveCellAfterViewChecked()),
          e.preventDefault();
      }
      _handleCalendarBodyKeyup(e) {
        (e.keyCode === 32 || e.keyCode === 13) &&
          (this._selectionKeyPressed &&
            this._canSelect(this._activeDate) &&
            this._dateSelected({
              value: this._dateAdapter.getDate(this._activeDate),
              event: e,
            }),
          (this._selectionKeyPressed = !1));
      }
      _init() {
        this._setRanges(this.selected),
          (this._todayDate = this._getCellCompareValue(
            this._dateAdapter.today()
          )),
          (this._monthLabel = this._dateFormats.display.monthLabel
            ? this._dateAdapter.format(
                this.activeDate,
                this._dateFormats.display.monthLabel
              )
            : this._dateAdapter
                .getMonthNames("short")
                [
                  this._dateAdapter.getMonth(this.activeDate)
                ].toLocaleUpperCase());
        let e = this._dateAdapter.createDate(
          this._dateAdapter.getYear(this.activeDate),
          this._dateAdapter.getMonth(this.activeDate),
          1
        );
        (this._firstWeekOffset =
          (Zt +
            this._dateAdapter.getDayOfWeek(e) -
            this._dateAdapter.getFirstDayOfWeek()) %
          Zt),
          this._initWeekdays(),
          this._createWeekCells(),
          this._changeDetectorRef.markForCheck();
      }
      _focusActiveCell(e) {
        this._matCalendarBody._focusActiveCell(e);
      }
      _focusActiveCellAfterViewChecked() {
        this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();
      }
      _previewChanged({ event: e, value: a }) {
        if (this._rangeStrategy) {
          let t = a ? a.rawValue : null,
            o = this._rangeStrategy.createPreview(t, this.selected, e);
          if (
            ((this._previewStart = this._getCellCompareValue(o.start)),
            (this._previewEnd = this._getCellCompareValue(o.end)),
            this.activeDrag && t)
          ) {
            let s = this._rangeStrategy.createDrag?.(
              this.activeDrag.value,
              this.selected,
              t,
              e
            );
            s &&
              ((this._previewStart = this._getCellCompareValue(s.start)),
              (this._previewEnd = this._getCellCompareValue(s.end)));
          }
          this._changeDetectorRef.detectChanges();
        }
      }
      _dragEnded(e) {
        if (this.activeDrag)
          if (e.value) {
            let a = this._rangeStrategy?.createDrag?.(
              this.activeDrag.value,
              this.selected,
              e.value,
              e.event
            );
            this.dragEnded.emit({ value: a ?? null, event: e.event });
          } else this.dragEnded.emit({ value: null, event: e.event });
      }
      _getDateFromDayOfMonth(e) {
        return this._dateAdapter.createDate(
          this._dateAdapter.getYear(this.activeDate),
          this._dateAdapter.getMonth(this.activeDate),
          e
        );
      }
      _initWeekdays() {
        let e = this._dateAdapter.getFirstDayOfWeek(),
          a = this._dateAdapter.getDayOfWeekNames("narrow"),
          o = this._dateAdapter
            .getDayOfWeekNames("long")
            .map((s, g) => ({ long: s, narrow: a[g], id: Zn++ }));
        this._weekdays = o.slice(e).concat(o.slice(0, e));
      }
      _createWeekCells() {
        let e = this._dateAdapter.getNumDaysInMonth(this.activeDate),
          a = this._dateAdapter.getDateNames();
        this._weeks = [[]];
        for (let t = 0, o = this._firstWeekOffset; t < e; t++, o++) {
          o == Zt && (this._weeks.push([]), (o = 0));
          let s = this._dateAdapter.createDate(
              this._dateAdapter.getYear(this.activeDate),
              this._dateAdapter.getMonth(this.activeDate),
              t + 1
            ),
            g = this._shouldEnableDate(s),
            ne = this._dateAdapter.format(
              s,
              this._dateFormats.display.dateA11yLabel
            ),
            le = this.dateClass ? this.dateClass(s, "month") : void 0;
          this._weeks[this._weeks.length - 1].push(
            new Ue(t + 1, a[t], ne, g, le, this._getCellCompareValue(s), s)
          );
        }
      }
      _shouldEnableDate(e) {
        return (
          !!e &&
          (!this.minDate ||
            this._dateAdapter.compareDate(e, this.minDate) >= 0) &&
          (!this.maxDate ||
            this._dateAdapter.compareDate(e, this.maxDate) <= 0) &&
          (!this.dateFilter || this.dateFilter(e))
        );
      }
      _getDateInCurrentMonth(e) {
        return e && this._hasSameMonthAndYear(e, this.activeDate)
          ? this._dateAdapter.getDate(e)
          : null;
      }
      _hasSameMonthAndYear(e, a) {
        return !!(
          e &&
          a &&
          this._dateAdapter.getMonth(e) == this._dateAdapter.getMonth(a) &&
          this._dateAdapter.getYear(e) == this._dateAdapter.getYear(a)
        );
      }
      _getCellCompareValue(e) {
        if (e) {
          let a = this._dateAdapter.getYear(e),
            t = this._dateAdapter.getMonth(e),
            o = this._dateAdapter.getDate(e);
          return new Date(a, t, o).getTime();
        }
        return null;
      }
      _isRtl() {
        return this._dir && this._dir.value === "rtl";
      }
      _setRanges(e) {
        e instanceof K
          ? ((this._rangeStart = this._getCellCompareValue(e.start)),
            (this._rangeEnd = this._getCellCompareValue(e.end)),
            (this._isRange = !0))
          : ((this._rangeStart = this._rangeEnd = this._getCellCompareValue(e)),
            (this._isRange = !1)),
          (this._comparisonRangeStart = this._getCellCompareValue(
            this.comparisonStart
          )),
          (this._comparisonRangeEnd = this._getCellCompareValue(
            this.comparisonEnd
          ));
      }
      _canSelect(e) {
        return !this.dateFilter || this.dateFilter(e);
      }
      _clearPreview() {
        this._previewStart = this._previewEnd = null;
      }
    };
    (r.ɵfac = function (a) {
      return new (a || r)(c(M), c(we, 8), c(j, 8), c(xe, 8), c(qi, 8));
    }),
      (r.ɵcmp = S({
        type: r,
        selectors: [["mat-month-view"]],
        viewQuery: function (a, t) {
          if ((a & 1 && I(Re, 5), a & 2)) {
            let o;
            D((o = x())) && (t._matCalendarBody = o.first);
          }
        },
        inputs: {
          activeDate: "activeDate",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          dateFilter: "dateFilter",
          dateClass: "dateClass",
          comparisonStart: "comparisonStart",
          comparisonEnd: "comparisonEnd",
          startDateAccessibleName: "startDateAccessibleName",
          endDateAccessibleName: "endDateAccessibleName",
          activeDrag: "activeDrag",
        },
        outputs: {
          selectedChange: "selectedChange",
          _userSelection: "_userSelection",
          dragStarted: "dragStarted",
          dragEnded: "dragEnded",
          activeDateChange: "activeDateChange",
        },
        exportAs: ["matMonthView"],
        standalone: !0,
        features: [X, T],
        decls: 8,
        vars: 14,
        consts: [
          ["role", "grid", 1, "mat-calendar-table"],
          [1, "mat-calendar-table-header"],
          ["scope", "col"],
          ["aria-hidden", "true"],
          ["colspan", "7", 1, "mat-calendar-table-header-divider"],
          [
            "mat-calendar-body",
            "",
            3,
            "selectedValueChange",
            "activeDateChange",
            "previewChange",
            "dragStarted",
            "dragEnded",
            "keyup",
            "keydown",
            "label",
            "rows",
            "todayValue",
            "startValue",
            "endValue",
            "comparisonStart",
            "comparisonEnd",
            "previewStart",
            "previewEnd",
            "isRange",
            "labelMinRequiredCells",
            "activeCell",
            "startDateAccessibleName",
            "endDateAccessibleName",
          ],
          [1, "cdk-visually-hidden"],
        ],
        template: function (a, t) {
          a & 1 &&
            (h(0, "table", 0)(1, "thead", 1)(2, "tr"),
            q(3, Nn, 5, 2, "th", 2, zi),
            l(),
            h(5, "tr", 3),
            C(6, "th", 4),
            l()(),
            h(7, "tbody", 5),
            b("selectedValueChange", function (s) {
              return t._dateSelected(s);
            })("activeDateChange", function (s) {
              return t._updateActiveDate(s);
            })("previewChange", function (s) {
              return t._previewChanged(s);
            })("dragStarted", function (s) {
              return t.dragStarted.emit(s);
            })("dragEnded", function (s) {
              return t._dragEnded(s);
            })("keyup", function (s) {
              return t._handleCalendarBodyKeyup(s);
            })("keydown", function (s) {
              return t._handleCalendarBodyKeydown(s);
            }),
            l()()),
            a & 2 &&
              (d(3),
              $(t._weekdays),
              d(4),
              p("label", t._monthLabel)("rows", t._weeks)(
                "todayValue",
                t._todayDate
              )("startValue", t._rangeStart)("endValue", t._rangeEnd)(
                "comparisonStart",
                t._comparisonRangeStart
              )("comparisonEnd", t._comparisonRangeEnd)(
                "previewStart",
                t._previewStart
              )("previewEnd", t._previewEnd)("isRange", t._isRange)(
                "labelMinRequiredCells",
                3
              )("activeCell", t._dateAdapter.getDate(t.activeDate) - 1)(
                "startDateAccessibleName",
                t.startDateAccessibleName
              )("endDateAccessibleName", t.endDateAccessibleName));
        },
        dependencies: [Re],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = r;
    return i;
  })(),
  B = 24,
  Jt = 4,
  Li = (() => {
    let r = class r {
      get activeDate() {
        return this._activeDate;
      }
      set activeDate(e) {
        let a = this._activeDate,
          t =
            this._dateAdapter.getValidDateOrNull(
              this._dateAdapter.deserialize(e)
            ) || this._dateAdapter.today();
        (this._activeDate = this._dateAdapter.clampDate(
          t,
          this.minDate,
          this.maxDate
        )),
          $i(
            this._dateAdapter,
            a,
            this._activeDate,
            this.minDate,
            this.maxDate
          ) || this._init();
      }
      get selected() {
        return this._selected;
      }
      set selected(e) {
        e instanceof K
          ? (this._selected = e)
          : (this._selected = this._dateAdapter.getValidDateOrNull(
              this._dateAdapter.deserialize(e)
            )),
          this._setSelectedYear(e);
      }
      get minDate() {
        return this._minDate;
      }
      set minDate(e) {
        this._minDate = this._dateAdapter.getValidDateOrNull(
          this._dateAdapter.deserialize(e)
        );
      }
      get maxDate() {
        return this._maxDate;
      }
      set maxDate(e) {
        this._maxDate = this._dateAdapter.getValidDateOrNull(
          this._dateAdapter.deserialize(e)
        );
      }
      constructor(e, a, t) {
        (this._changeDetectorRef = e),
          (this._dateAdapter = a),
          (this._dir = t),
          (this._rerenderSubscription = R.EMPTY),
          (this.selectedChange = new u()),
          (this.yearSelected = new u()),
          (this.activeDateChange = new u()),
          this._dateAdapter,
          (this._activeDate = this._dateAdapter.today());
      }
      ngAfterContentInit() {
        this._rerenderSubscription = this._dateAdapter.localeChanges
          .pipe(Se(null))
          .subscribe(() => this._init());
      }
      ngOnDestroy() {
        this._rerenderSubscription.unsubscribe();
      }
      _init() {
        this._todayYear = this._dateAdapter.getYear(this._dateAdapter.today());
        let a =
          this._dateAdapter.getYear(this._activeDate) -
          Ge(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
        this._years = [];
        for (let t = 0, o = []; t < B; t++)
          o.push(a + t),
            o.length == Jt &&
              (this._years.push(o.map((s) => this._createCellForYear(s))),
              (o = []));
        this._changeDetectorRef.markForCheck();
      }
      _yearSelected(e) {
        let a = e.value,
          t = this._dateAdapter.createDate(a, 0, 1),
          o = this._getDateFromYear(a);
        this.yearSelected.emit(t), this.selectedChange.emit(o);
      }
      _updateActiveDate(e) {
        let a = e.value,
          t = this._activeDate;
        (this.activeDate = this._getDateFromYear(a)),
          this._dateAdapter.compareDate(t, this.activeDate) &&
            this.activeDateChange.emit(this.activeDate);
      }
      _handleCalendarBodyKeydown(e) {
        let a = this._activeDate,
          t = this._isRtl();
        switch (e.keyCode) {
          case 37:
            this.activeDate = this._dateAdapter.addCalendarYears(
              this._activeDate,
              t ? 1 : -1
            );
            break;
          case 39:
            this.activeDate = this._dateAdapter.addCalendarYears(
              this._activeDate,
              t ? -1 : 1
            );
            break;
          case 38:
            this.activeDate = this._dateAdapter.addCalendarYears(
              this._activeDate,
              -Jt
            );
            break;
          case 40:
            this.activeDate = this._dateAdapter.addCalendarYears(
              this._activeDate,
              Jt
            );
            break;
          case 36:
            this.activeDate = this._dateAdapter.addCalendarYears(
              this._activeDate,
              -Ge(
                this._dateAdapter,
                this.activeDate,
                this.minDate,
                this.maxDate
              )
            );
            break;
          case 35:
            this.activeDate = this._dateAdapter.addCalendarYears(
              this._activeDate,
              B -
                Ge(
                  this._dateAdapter,
                  this.activeDate,
                  this.minDate,
                  this.maxDate
                ) -
                1
            );
            break;
          case 33:
            this.activeDate = this._dateAdapter.addCalendarYears(
              this._activeDate,
              e.altKey ? -B * 10 : -B
            );
            break;
          case 34:
            this.activeDate = this._dateAdapter.addCalendarYears(
              this._activeDate,
              e.altKey ? B * 10 : B
            );
            break;
          case 13:
          case 32:
            this._selectionKeyPressed = !0;
            break;
          default:
            return;
        }
        this._dateAdapter.compareDate(a, this.activeDate) &&
          this.activeDateChange.emit(this.activeDate),
          this._focusActiveCellAfterViewChecked(),
          e.preventDefault();
      }
      _handleCalendarBodyKeyup(e) {
        (e.keyCode === 32 || e.keyCode === 13) &&
          (this._selectionKeyPressed &&
            this._yearSelected({
              value: this._dateAdapter.getYear(this._activeDate),
              event: e,
            }),
          (this._selectionKeyPressed = !1));
      }
      _getActiveCell() {
        return Ge(
          this._dateAdapter,
          this.activeDate,
          this.minDate,
          this.maxDate
        );
      }
      _focusActiveCell() {
        this._matCalendarBody._focusActiveCell();
      }
      _focusActiveCellAfterViewChecked() {
        this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();
      }
      _getDateFromYear(e) {
        let a = this._dateAdapter.getMonth(this.activeDate),
          t = this._dateAdapter.getNumDaysInMonth(
            this._dateAdapter.createDate(e, a, 1)
          );
        return this._dateAdapter.createDate(
          e,
          a,
          Math.min(this._dateAdapter.getDate(this.activeDate), t)
        );
      }
      _createCellForYear(e) {
        let a = this._dateAdapter.createDate(e, 0, 1),
          t = this._dateAdapter.getYearName(a),
          o = this.dateClass ? this.dateClass(a, "multi-year") : void 0;
        return new Ue(e, t, t, this._shouldEnableYear(e), o);
      }
      _shouldEnableYear(e) {
        if (
          e == null ||
          (this.maxDate && e > this._dateAdapter.getYear(this.maxDate)) ||
          (this.minDate && e < this._dateAdapter.getYear(this.minDate))
        )
          return !1;
        if (!this.dateFilter) return !0;
        let a = this._dateAdapter.createDate(e, 0, 1);
        for (
          let t = a;
          this._dateAdapter.getYear(t) == e;
          t = this._dateAdapter.addCalendarDays(t, 1)
        )
          if (this.dateFilter(t)) return !0;
        return !1;
      }
      _isRtl() {
        return this._dir && this._dir.value === "rtl";
      }
      _setSelectedYear(e) {
        if (((this._selectedYear = null), e instanceof K)) {
          let a = e.start || e.end;
          a && (this._selectedYear = this._dateAdapter.getYear(a));
        } else e && (this._selectedYear = this._dateAdapter.getYear(e));
      }
    };
    (r.ɵfac = function (a) {
      return new (a || r)(c(M), c(j, 8), c(xe, 8));
    }),
      (r.ɵcmp = S({
        type: r,
        selectors: [["mat-multi-year-view"]],
        viewQuery: function (a, t) {
          if ((a & 1 && I(Re, 5), a & 2)) {
            let o;
            D((o = x())) && (t._matCalendarBody = o.first);
          }
        },
        inputs: {
          activeDate: "activeDate",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          dateFilter: "dateFilter",
          dateClass: "dateClass",
        },
        outputs: {
          selectedChange: "selectedChange",
          yearSelected: "yearSelected",
          activeDateChange: "activeDateChange",
        },
        exportAs: ["matMultiYearView"],
        standalone: !0,
        features: [T],
        decls: 5,
        vars: 7,
        consts: [
          ["role", "grid", 1, "mat-calendar-table"],
          ["aria-hidden", "true", 1, "mat-calendar-table-header"],
          ["colspan", "4", 1, "mat-calendar-table-header-divider"],
          [
            "mat-calendar-body",
            "",
            3,
            "selectedValueChange",
            "activeDateChange",
            "keyup",
            "keydown",
            "rows",
            "todayValue",
            "startValue",
            "endValue",
            "numCols",
            "cellAspectRatio",
            "activeCell",
          ],
        ],
        template: function (a, t) {
          a & 1 &&
            (h(0, "table", 0)(1, "thead", 1)(2, "tr"),
            C(3, "th", 2),
            l()(),
            h(4, "tbody", 3),
            b("selectedValueChange", function (s) {
              return t._yearSelected(s);
            })("activeDateChange", function (s) {
              return t._updateActiveDate(s);
            })("keyup", function (s) {
              return t._handleCalendarBodyKeyup(s);
            })("keydown", function (s) {
              return t._handleCalendarBodyKeydown(s);
            }),
            l()()),
            a & 2 &&
              (d(4),
              p("rows", t._years)("todayValue", t._todayYear)(
                "startValue",
                t._selectedYear
              )("endValue", t._selectedYear)("numCols", 4)(
                "cellAspectRatio",
                4 / 7
              )("activeCell", t._getActiveCell()));
        },
        dependencies: [Re],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = r;
    return i;
  })();
function $i(i, r, n, e, a) {
  let t = i.getYear(r),
    o = i.getYear(n),
    s = Gi(i, e, a);
  return Math.floor((t - s) / B) === Math.floor((o - s) / B);
}
function Ge(i, r, n, e) {
  let a = i.getYear(r);
  return Jn(a - Gi(i, n, e), B);
}
function Gi(i, r, n) {
  let e = 0;
  return n ? (e = i.getYear(n) - B + 1) : r && (e = i.getYear(r)), e;
}
function Jn(i, r) {
  return ((i % r) + r) % r;
}
var Yi = (() => {
    let r = class r {
      get activeDate() {
        return this._activeDate;
      }
      set activeDate(e) {
        let a = this._activeDate,
          t =
            this._dateAdapter.getValidDateOrNull(
              this._dateAdapter.deserialize(e)
            ) || this._dateAdapter.today();
        (this._activeDate = this._dateAdapter.clampDate(
          t,
          this.minDate,
          this.maxDate
        )),
          this._dateAdapter.getYear(a) !==
            this._dateAdapter.getYear(this._activeDate) && this._init();
      }
      get selected() {
        return this._selected;
      }
      set selected(e) {
        e instanceof K
          ? (this._selected = e)
          : (this._selected = this._dateAdapter.getValidDateOrNull(
              this._dateAdapter.deserialize(e)
            )),
          this._setSelectedMonth(e);
      }
      get minDate() {
        return this._minDate;
      }
      set minDate(e) {
        this._minDate = this._dateAdapter.getValidDateOrNull(
          this._dateAdapter.deserialize(e)
        );
      }
      get maxDate() {
        return this._maxDate;
      }
      set maxDate(e) {
        this._maxDate = this._dateAdapter.getValidDateOrNull(
          this._dateAdapter.deserialize(e)
        );
      }
      constructor(e, a, t, o) {
        (this._changeDetectorRef = e),
          (this._dateFormats = a),
          (this._dateAdapter = t),
          (this._dir = o),
          (this._rerenderSubscription = R.EMPTY),
          (this.selectedChange = new u()),
          (this.monthSelected = new u()),
          (this.activeDateChange = new u()),
          (this._activeDate = this._dateAdapter.today());
      }
      ngAfterContentInit() {
        this._rerenderSubscription = this._dateAdapter.localeChanges
          .pipe(Se(null))
          .subscribe(() => this._init());
      }
      ngOnDestroy() {
        this._rerenderSubscription.unsubscribe();
      }
      _monthSelected(e) {
        let a = e.value,
          t = this._dateAdapter.createDate(
            this._dateAdapter.getYear(this.activeDate),
            a,
            1
          );
        this.monthSelected.emit(t);
        let o = this._getDateFromMonth(a);
        this.selectedChange.emit(o);
      }
      _updateActiveDate(e) {
        let a = e.value,
          t = this._activeDate;
        (this.activeDate = this._getDateFromMonth(a)),
          this._dateAdapter.compareDate(t, this.activeDate) &&
            this.activeDateChange.emit(this.activeDate);
      }
      _handleCalendarBodyKeydown(e) {
        let a = this._activeDate,
          t = this._isRtl();
        switch (e.keyCode) {
          case 37:
            this.activeDate = this._dateAdapter.addCalendarMonths(
              this._activeDate,
              t ? 1 : -1
            );
            break;
          case 39:
            this.activeDate = this._dateAdapter.addCalendarMonths(
              this._activeDate,
              t ? -1 : 1
            );
            break;
          case 38:
            this.activeDate = this._dateAdapter.addCalendarMonths(
              this._activeDate,
              -4
            );
            break;
          case 40:
            this.activeDate = this._dateAdapter.addCalendarMonths(
              this._activeDate,
              4
            );
            break;
          case 36:
            this.activeDate = this._dateAdapter.addCalendarMonths(
              this._activeDate,
              -this._dateAdapter.getMonth(this._activeDate)
            );
            break;
          case 35:
            this.activeDate = this._dateAdapter.addCalendarMonths(
              this._activeDate,
              11 - this._dateAdapter.getMonth(this._activeDate)
            );
            break;
          case 33:
            this.activeDate = this._dateAdapter.addCalendarYears(
              this._activeDate,
              e.altKey ? -10 : -1
            );
            break;
          case 34:
            this.activeDate = this._dateAdapter.addCalendarYears(
              this._activeDate,
              e.altKey ? 10 : 1
            );
            break;
          case 13:
          case 32:
            this._selectionKeyPressed = !0;
            break;
          default:
            return;
        }
        this._dateAdapter.compareDate(a, this.activeDate) &&
          (this.activeDateChange.emit(this.activeDate),
          this._focusActiveCellAfterViewChecked()),
          e.preventDefault();
      }
      _handleCalendarBodyKeyup(e) {
        (e.keyCode === 32 || e.keyCode === 13) &&
          (this._selectionKeyPressed &&
            this._monthSelected({
              value: this._dateAdapter.getMonth(this._activeDate),
              event: e,
            }),
          (this._selectionKeyPressed = !1));
      }
      _init() {
        this._setSelectedMonth(this.selected),
          (this._todayMonth = this._getMonthInCurrentYear(
            this._dateAdapter.today()
          )),
          (this._yearLabel = this._dateAdapter.getYearName(this.activeDate));
        let e = this._dateAdapter.getMonthNames("short");
        (this._months = [
          [0, 1, 2, 3],
          [4, 5, 6, 7],
          [8, 9, 10, 11],
        ].map((a) => a.map((t) => this._createCellForMonth(t, e[t])))),
          this._changeDetectorRef.markForCheck();
      }
      _focusActiveCell() {
        this._matCalendarBody._focusActiveCell();
      }
      _focusActiveCellAfterViewChecked() {
        this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();
      }
      _getMonthInCurrentYear(e) {
        return e &&
          this._dateAdapter.getYear(e) ==
            this._dateAdapter.getYear(this.activeDate)
          ? this._dateAdapter.getMonth(e)
          : null;
      }
      _getDateFromMonth(e) {
        let a = this._dateAdapter.createDate(
            this._dateAdapter.getYear(this.activeDate),
            e,
            1
          ),
          t = this._dateAdapter.getNumDaysInMonth(a);
        return this._dateAdapter.createDate(
          this._dateAdapter.getYear(this.activeDate),
          e,
          Math.min(this._dateAdapter.getDate(this.activeDate), t)
        );
      }
      _createCellForMonth(e, a) {
        let t = this._dateAdapter.createDate(
            this._dateAdapter.getYear(this.activeDate),
            e,
            1
          ),
          o = this._dateAdapter.format(
            t,
            this._dateFormats.display.monthYearA11yLabel
          ),
          s = this.dateClass ? this.dateClass(t, "year") : void 0;
        return new Ue(
          e,
          a.toLocaleUpperCase(),
          o,
          this._shouldEnableMonth(e),
          s
        );
      }
      _shouldEnableMonth(e) {
        let a = this._dateAdapter.getYear(this.activeDate);
        if (
          e == null ||
          this._isYearAndMonthAfterMaxDate(a, e) ||
          this._isYearAndMonthBeforeMinDate(a, e)
        )
          return !1;
        if (!this.dateFilter) return !0;
        let t = this._dateAdapter.createDate(a, e, 1);
        for (
          let o = t;
          this._dateAdapter.getMonth(o) == e;
          o = this._dateAdapter.addCalendarDays(o, 1)
        )
          if (this.dateFilter(o)) return !0;
        return !1;
      }
      _isYearAndMonthAfterMaxDate(e, a) {
        if (this.maxDate) {
          let t = this._dateAdapter.getYear(this.maxDate),
            o = this._dateAdapter.getMonth(this.maxDate);
          return e > t || (e === t && a > o);
        }
        return !1;
      }
      _isYearAndMonthBeforeMinDate(e, a) {
        if (this.minDate) {
          let t = this._dateAdapter.getYear(this.minDate),
            o = this._dateAdapter.getMonth(this.minDate);
          return e < t || (e === t && a < o);
        }
        return !1;
      }
      _isRtl() {
        return this._dir && this._dir.value === "rtl";
      }
      _setSelectedMonth(e) {
        e instanceof K
          ? (this._selectedMonth =
              this._getMonthInCurrentYear(e.start) ||
              this._getMonthInCurrentYear(e.end))
          : (this._selectedMonth = this._getMonthInCurrentYear(e));
      }
    };
    (r.ɵfac = function (a) {
      return new (a || r)(c(M), c(we, 8), c(j, 8), c(xe, 8));
    }),
      (r.ɵcmp = S({
        type: r,
        selectors: [["mat-year-view"]],
        viewQuery: function (a, t) {
          if ((a & 1 && I(Re, 5), a & 2)) {
            let o;
            D((o = x())) && (t._matCalendarBody = o.first);
          }
        },
        inputs: {
          activeDate: "activeDate",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          dateFilter: "dateFilter",
          dateClass: "dateClass",
        },
        outputs: {
          selectedChange: "selectedChange",
          monthSelected: "monthSelected",
          activeDateChange: "activeDateChange",
        },
        exportAs: ["matYearView"],
        standalone: !0,
        features: [T],
        decls: 5,
        vars: 9,
        consts: [
          ["role", "grid", 1, "mat-calendar-table"],
          ["aria-hidden", "true", 1, "mat-calendar-table-header"],
          ["colspan", "4", 1, "mat-calendar-table-header-divider"],
          [
            "mat-calendar-body",
            "",
            3,
            "selectedValueChange",
            "activeDateChange",
            "keyup",
            "keydown",
            "label",
            "rows",
            "todayValue",
            "startValue",
            "endValue",
            "labelMinRequiredCells",
            "numCols",
            "cellAspectRatio",
            "activeCell",
          ],
        ],
        template: function (a, t) {
          a & 1 &&
            (h(0, "table", 0)(1, "thead", 1)(2, "tr"),
            C(3, "th", 2),
            l()(),
            h(4, "tbody", 3),
            b("selectedValueChange", function (s) {
              return t._monthSelected(s);
            })("activeDateChange", function (s) {
              return t._updateActiveDate(s);
            })("keyup", function (s) {
              return t._handleCalendarBodyKeyup(s);
            })("keydown", function (s) {
              return t._handleCalendarBodyKeydown(s);
            }),
            l()()),
            a & 2 &&
              (d(4),
              p("label", t._yearLabel)("rows", t._months)(
                "todayValue",
                t._todayMonth
              )("startValue", t._selectedMonth)("endValue", t._selectedMonth)(
                "labelMinRequiredCells",
                2
              )("numCols", 4)("cellAspectRatio", 4 / 7)(
                "activeCell",
                t._dateAdapter.getMonth(t.activeDate)
              ));
        },
        dependencies: [Re],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = r;
    return i;
  })(),
  er = 1,
  Ui = (() => {
    let r = class r {
      constructor(e, a, t, o, s) {
        (this._intl = e),
          (this.calendar = a),
          (this._dateAdapter = t),
          (this._dateFormats = o),
          (this._id = `mat-calendar-header-${er++}`),
          (this._periodButtonLabelId = `${this._id}-period-label`),
          this.calendar.stateChanges.subscribe(() => s.markForCheck());
      }
      get periodButtonText() {
        return this.calendar.currentView == "month"
          ? this._dateAdapter
              .format(
                this.calendar.activeDate,
                this._dateFormats.display.monthYearLabel
              )
              .toLocaleUpperCase()
          : this.calendar.currentView == "year"
          ? this._dateAdapter.getYearName(this.calendar.activeDate)
          : this._intl.formatYearRange(...this._formatMinAndMaxYearLabels());
      }
      get periodButtonDescription() {
        return this.calendar.currentView == "month"
          ? this._dateAdapter
              .format(
                this.calendar.activeDate,
                this._dateFormats.display.monthYearLabel
              )
              .toLocaleUpperCase()
          : this.calendar.currentView == "year"
          ? this._dateAdapter.getYearName(this.calendar.activeDate)
          : this._intl.formatYearRangeLabel(
              ...this._formatMinAndMaxYearLabels()
            );
      }
      get periodButtonLabel() {
        return this.calendar.currentView == "month"
          ? this._intl.switchToMultiYearViewLabel
          : this._intl.switchToMonthViewLabel;
      }
      get prevButtonLabel() {
        return {
          month: this._intl.prevMonthLabel,
          year: this._intl.prevYearLabel,
          "multi-year": this._intl.prevMultiYearLabel,
        }[this.calendar.currentView];
      }
      get nextButtonLabel() {
        return {
          month: this._intl.nextMonthLabel,
          year: this._intl.nextYearLabel,
          "multi-year": this._intl.nextMultiYearLabel,
        }[this.calendar.currentView];
      }
      currentPeriodClicked() {
        this.calendar.currentView =
          this.calendar.currentView == "month" ? "multi-year" : "month";
      }
      previousClicked() {
        this.calendar.activeDate =
          this.calendar.currentView == "month"
            ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, -1)
            : this._dateAdapter.addCalendarYears(
                this.calendar.activeDate,
                this.calendar.currentView == "year" ? -1 : -B
              );
      }
      nextClicked() {
        this.calendar.activeDate =
          this.calendar.currentView == "month"
            ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, 1)
            : this._dateAdapter.addCalendarYears(
                this.calendar.activeDate,
                this.calendar.currentView == "year" ? 1 : B
              );
      }
      previousEnabled() {
        return this.calendar.minDate
          ? !this.calendar.minDate ||
              !this._isSameView(this.calendar.activeDate, this.calendar.minDate)
          : !0;
      }
      nextEnabled() {
        return (
          !this.calendar.maxDate ||
          !this._isSameView(this.calendar.activeDate, this.calendar.maxDate)
        );
      }
      _isSameView(e, a) {
        return this.calendar.currentView == "month"
          ? this._dateAdapter.getYear(e) == this._dateAdapter.getYear(a) &&
              this._dateAdapter.getMonth(e) == this._dateAdapter.getMonth(a)
          : this.calendar.currentView == "year"
          ? this._dateAdapter.getYear(e) == this._dateAdapter.getYear(a)
          : $i(
              this._dateAdapter,
              e,
              a,
              this.calendar.minDate,
              this.calendar.maxDate
            );
      }
      _formatMinAndMaxYearLabels() {
        let a =
            this._dateAdapter.getYear(this.calendar.activeDate) -
            Ge(
              this._dateAdapter,
              this.calendar.activeDate,
              this.calendar.minDate,
              this.calendar.maxDate
            ),
          t = a + B - 1,
          o = this._dateAdapter.getYearName(
            this._dateAdapter.createDate(a, 0, 1)
          ),
          s = this._dateAdapter.getYearName(
            this._dateAdapter.createDate(t, 0, 1)
          );
        return [o, s];
      }
    };
    (r.ɵfac = function (a) {
      return new (a || r)(c(Qe), c(ae(() => ea)), c(j, 8), c(we, 8), c(M));
    }),
      (r.ɵcmp = S({
        type: r,
        selectors: [["mat-calendar-header"]],
        exportAs: ["matCalendarHeader"],
        standalone: !0,
        features: [T],
        ngContentSelectors: Ln,
        decls: 13,
        vars: 11,
        consts: [
          [1, "mat-calendar-header"],
          [1, "mat-calendar-controls"],
          ["aria-live", "polite", 1, "cdk-visually-hidden", 3, "id"],
          [
            "mat-button",
            "",
            "type",
            "button",
            1,
            "mat-calendar-period-button",
            3,
            "click",
          ],
          ["aria-hidden", "true"],
          [
            "viewBox",
            "0 0 10 5",
            "focusable",
            "false",
            "aria-hidden",
            "true",
            1,
            "mat-calendar-arrow",
          ],
          ["points", "0,0 5,5 10,0"],
          [1, "mat-calendar-spacer"],
          [
            "mat-icon-button",
            "",
            "type",
            "button",
            1,
            "mat-calendar-previous-button",
            3,
            "click",
            "disabled",
          ],
          [
            "mat-icon-button",
            "",
            "type",
            "button",
            1,
            "mat-calendar-next-button",
            3,
            "click",
            "disabled",
          ],
        ],
        template: function (a, t) {
          a & 1 &&
            (se(),
            h(0, "div", 0)(1, "div", 1)(2, "span", 2),
            _(3),
            l(),
            h(4, "button", 3),
            b("click", function () {
              return t.currentPeriodClicked();
            }),
            h(5, "span", 4),
            _(6),
            l(),
            Le(),
            h(7, "svg", 5),
            C(8, "polygon", 6),
            l()(),
            et(),
            C(9, "div", 7),
            de(10),
            h(11, "button", 8),
            b("click", function () {
              return t.previousClicked();
            }),
            l(),
            h(12, "button", 9),
            b("click", function () {
              return t.nextClicked();
            }),
            l()()()),
            a & 2 &&
              (d(2),
              p("id", t._periodButtonLabelId),
              d(),
              w(t.periodButtonDescription),
              d(),
              k("aria-label", t.periodButtonLabel)(
                "aria-describedby",
                t._periodButtonLabelId
              ),
              d(2),
              w(t.periodButtonText),
              d(),
              O("mat-calendar-invert", t.calendar.currentView !== "month"),
              d(4),
              p("disabled", !t.previousEnabled()),
              k("aria-label", t.prevButtonLabel),
              d(),
              p("disabled", !t.nextEnabled()),
              k("aria-label", t.nextButtonLabel));
        },
        dependencies: [qe, Bt],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = r;
    return i;
  })(),
  ea = (() => {
    let r = class r {
      get startAt() {
        return this._startAt;
      }
      set startAt(e) {
        this._startAt = this._dateAdapter.getValidDateOrNull(
          this._dateAdapter.deserialize(e)
        );
      }
      get selected() {
        return this._selected;
      }
      set selected(e) {
        e instanceof K
          ? (this._selected = e)
          : (this._selected = this._dateAdapter.getValidDateOrNull(
              this._dateAdapter.deserialize(e)
            ));
      }
      get minDate() {
        return this._minDate;
      }
      set minDate(e) {
        this._minDate = this._dateAdapter.getValidDateOrNull(
          this._dateAdapter.deserialize(e)
        );
      }
      get maxDate() {
        return this._maxDate;
      }
      set maxDate(e) {
        this._maxDate = this._dateAdapter.getValidDateOrNull(
          this._dateAdapter.deserialize(e)
        );
      }
      get activeDate() {
        return this._clampedActiveDate;
      }
      set activeDate(e) {
        (this._clampedActiveDate = this._dateAdapter.clampDate(
          e,
          this.minDate,
          this.maxDate
        )),
          this.stateChanges.next(),
          this._changeDetectorRef.markForCheck();
      }
      get currentView() {
        return this._currentView;
      }
      set currentView(e) {
        let a = this._currentView !== e ? e : null;
        (this._currentView = e),
          (this._moveFocusOnNextTick = !0),
          this._changeDetectorRef.markForCheck(),
          a && this.viewChanged.emit(a);
      }
      constructor(e, a, t, o) {
        (this._dateAdapter = a),
          (this._dateFormats = t),
          (this._changeDetectorRef = o),
          (this._moveFocusOnNextTick = !1),
          (this.startView = "month"),
          (this.selectedChange = new u()),
          (this.yearSelected = new u()),
          (this.monthSelected = new u()),
          (this.viewChanged = new u(!0)),
          (this._userSelection = new u()),
          (this._userDragDrop = new u()),
          (this._activeDrag = null),
          (this.stateChanges = new te()),
          (this._intlChanges = e.changes.subscribe(() => {
            o.markForCheck(), this.stateChanges.next();
          }));
      }
      ngAfterContentInit() {
        (this._calendarHeaderPortal = new Lt(this.headerComponent || Ui)),
          (this.activeDate = this.startAt || this._dateAdapter.today()),
          (this._currentView = this.startView);
      }
      ngAfterViewChecked() {
        this._moveFocusOnNextTick &&
          ((this._moveFocusOnNextTick = !1), this.focusActiveCell());
      }
      ngOnDestroy() {
        this._intlChanges.unsubscribe(), this.stateChanges.complete();
      }
      ngOnChanges(e) {
        let a =
            e.minDate &&
            !this._dateAdapter.sameDate(
              e.minDate.previousValue,
              e.minDate.currentValue
            )
              ? e.minDate
              : void 0,
          t =
            e.maxDate &&
            !this._dateAdapter.sameDate(
              e.maxDate.previousValue,
              e.maxDate.currentValue
            )
              ? e.maxDate
              : void 0,
          o = a || t || e.dateFilter;
        if (o && !o.firstChange) {
          let s = this._getCurrentViewComponent();
          s &&
            ((this._moveFocusOnNextTick = !0),
            this._changeDetectorRef.detectChanges(),
            s._init());
        }
        this.stateChanges.next();
      }
      focusActiveCell() {
        this._getCurrentViewComponent()._focusActiveCell(!1);
      }
      updateTodaysDate() {
        this._getCurrentViewComponent()._init();
      }
      _dateSelected(e) {
        let a = e.value;
        (this.selected instanceof K ||
          (a && !this._dateAdapter.sameDate(a, this.selected))) &&
          this.selectedChange.emit(a),
          this._userSelection.emit(e);
      }
      _yearSelectedInMultiYearView(e) {
        this.yearSelected.emit(e);
      }
      _monthSelectedInYearView(e) {
        this.monthSelected.emit(e);
      }
      _goToDateInView(e, a) {
        (this.activeDate = e), (this.currentView = a);
      }
      _dragStarted(e) {
        this._activeDrag = e;
      }
      _dragEnded(e) {
        this._activeDrag &&
          (e.value && this._userDragDrop.emit(e), (this._activeDrag = null));
      }
      _getCurrentViewComponent() {
        return this.monthView || this.yearView || this.multiYearView;
      }
    };
    (r.ɵfac = function (a) {
      return new (a || r)(c(Qe), c(j, 8), c(we, 8), c(M));
    }),
      (r.ɵcmp = S({
        type: r,
        selectors: [["mat-calendar"]],
        viewQuery: function (a, t) {
          if ((a & 1 && (I(Ni, 5), I(Yi, 5), I(Li, 5)), a & 2)) {
            let o;
            D((o = x())) && (t.monthView = o.first),
              D((o = x())) && (t.yearView = o.first),
              D((o = x())) && (t.multiYearView = o.first);
          }
        },
        hostAttrs: [1, "mat-calendar"],
        inputs: {
          headerComponent: "headerComponent",
          startAt: "startAt",
          startView: "startView",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          dateFilter: "dateFilter",
          dateClass: "dateClass",
          comparisonStart: "comparisonStart",
          comparisonEnd: "comparisonEnd",
          startDateAccessibleName: "startDateAccessibleName",
          endDateAccessibleName: "endDateAccessibleName",
        },
        outputs: {
          selectedChange: "selectedChange",
          yearSelected: "yearSelected",
          monthSelected: "monthSelected",
          viewChanged: "viewChanged",
          _userSelection: "_userSelection",
          _userDragDrop: "_userDragDrop",
        },
        exportAs: ["matCalendar"],
        standalone: !0,
        features: [L([Hi]), X, T],
        decls: 5,
        vars: 2,
        consts: [
          [3, "cdkPortalOutlet"],
          [
            "cdkMonitorSubtreeFocus",
            "",
            "tabindex",
            "-1",
            1,
            "mat-calendar-content",
          ],
          [
            3,
            "activeDate",
            "selected",
            "dateFilter",
            "maxDate",
            "minDate",
            "dateClass",
            "comparisonStart",
            "comparisonEnd",
            "startDateAccessibleName",
            "endDateAccessibleName",
            "activeDrag",
          ],
          [
            3,
            "activeDate",
            "selected",
            "dateFilter",
            "maxDate",
            "minDate",
            "dateClass",
          ],
          [
            3,
            "activeDateChange",
            "_userSelection",
            "dragStarted",
            "dragEnded",
            "activeDate",
            "selected",
            "dateFilter",
            "maxDate",
            "minDate",
            "dateClass",
            "comparisonStart",
            "comparisonEnd",
            "startDateAccessibleName",
            "endDateAccessibleName",
            "activeDrag",
          ],
          [
            3,
            "activeDateChange",
            "monthSelected",
            "selectedChange",
            "activeDate",
            "selected",
            "dateFilter",
            "maxDate",
            "minDate",
            "dateClass",
          ],
          [
            3,
            "activeDateChange",
            "yearSelected",
            "selectedChange",
            "activeDate",
            "selected",
            "dateFilter",
            "maxDate",
            "minDate",
            "dateClass",
          ],
        ],
        template: function (a, t) {
          if (
            (a & 1 &&
              (A(0, Yn, 0, 0, "ng-template", 0),
              h(1, "div", 1),
              A(2, jn, 1, 11, "mat-month-view", 2)(
                3,
                Bn,
                1,
                6,
                "mat-year-view",
                3
              )(4, zn, 1, 6, "mat-multi-year-view", 3),
              l()),
            a & 2)
          ) {
            let o;
            p("cdkPortalOutlet", t._calendarHeaderPortal),
              d(2),
              E(
                (o = t.currentView) === "month"
                  ? 2
                  : o === "year"
                  ? 3
                  : o === "multi-year"
                  ? 4
                  : -1
              );
          }
        },
        dependencies: [jt, Sa, Ni, Yi, Li],
        styles: [
          '.mat-calendar{display:block;line-height:normal;font-family:var(--mat-datepicker-calendar-text-font, var(--mat-app-body-medium-font));font-size:var(--mat-datepicker-calendar-text-size, var(--mat-app-body-medium-size))}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;align-items:center;margin:5% calc(4.7142857143% - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0;margin:0 8px;font-size:var(--mat-datepicker-calendar-period-button-text-size, var(--mat-app-title-small-size));font-weight:var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-app-title-small-weight));--mdc-text-button-label-text-color:var(--mat-datepicker-calendar-period-button-text-color, var(--mat-app-on-surface-variant))}.mat-calendar-arrow{display:inline-block;width:10px;height:5px;margin:0 0 0 5px;vertical-align:middle;fill:var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-app-on-surface-variant))}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.cdk-high-contrast-active .mat-calendar-arrow{fill:CanvasText}.mat-calendar-previous-button,.mat-calendar-next-button{position:relative}.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled){color:var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-app-on-surface-variant))}.mat-calendar-previous-button::after,.mat-calendar-next-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:"";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0;color:var(--mat-datepicker-calendar-header-text-color, var(--mat-app-on-surface-variant));font-size:var(--mat-datepicker-calendar-header-text-size, var(--mat-app-title-small-size));font-weight:var(--mat-datepicker-calendar-header-text-weight, var(--mat-app-title-small-weight))}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:"";position:absolute;top:0;left:-8px;right:-8px;height:1px;background:var(--mat-datepicker-calendar-header-divider-color)}.mat-calendar-body-cell-content::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px)*-1)}.mat-calendar-body-cell:focus .mat-focus-indicator::before{content:""}',
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = r;
    return i;
  })(),
  ji = {
    transformPanel: Be("transformPanel", [
      ge(
        "void => enter-dropdown",
        ce(
          "120ms cubic-bezier(0, 0, 0.2, 1)",
          Rt([
            Y({ opacity: 0, transform: "scale(1, 0.8)" }),
            Y({ opacity: 1, transform: "scale(1, 1)" }),
          ])
        )
      ),
      ge(
        "void => enter-dialog",
        ce(
          "150ms cubic-bezier(0, 0, 0.2, 1)",
          Rt([
            Y({ opacity: 0, transform: "scale(0.7)" }),
            Y({ transform: "none", opacity: 1 }),
          ])
        )
      ),
      ge("* => void", ce("100ms linear", Y({ opacity: 0 }))),
    ]),
    fadeInCalendar: Be("fadeInCalendar", [
      ze("void", Y({ opacity: 0 })),
      ze("enter", Y({ opacity: 1 })),
      ge("void => *", ce("120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")),
    ]),
  },
  tr = 0,
  Ki = new W("mat-datepicker-scroll-strategy", {
    providedIn: "root",
    factory: () => {
      let i = P(ie);
      return () => i.scrollStrategies.reposition();
    },
  });
function ar(i) {
  return () => i.scrollStrategies.reposition();
}
var ir = { provide: Ki, deps: [ie], useFactory: ar },
  Qi = (() => {
    let r = class r {
      constructor(e, a, t, o, s, g) {
        (this._elementRef = e),
          (this._changeDetectorRef = a),
          (this._globalModel = t),
          (this._dateAdapter = o),
          (this._rangeSelectionStrategy = s),
          (this._subscriptions = new R()),
          (this._animationDone = new te()),
          (this._isAnimating = !1),
          (this._actionsPortal = null),
          (this._closeButtonText = g.closeCalendarLabel);
      }
      ngOnInit() {
        this._animationState = this.datepicker.touchUi
          ? "enter-dialog"
          : "enter-dropdown";
      }
      ngAfterViewInit() {
        this._subscriptions.add(
          this.datepicker.stateChanges.subscribe(() => {
            this._changeDetectorRef.markForCheck();
          })
        ),
          this._calendar.focusActiveCell();
      }
      ngOnDestroy() {
        this._subscriptions.unsubscribe(), this._animationDone.complete();
      }
      _handleUserSelection(e) {
        let a = this._model.selection,
          t = e.value,
          o = a instanceof K;
        if (o && this._rangeSelectionStrategy) {
          let s = this._rangeSelectionStrategy.selectionFinished(t, a, e.event);
          this._model.updateSelection(s, this);
        } else
          t && (o || !this._dateAdapter.sameDate(t, a)) && this._model.add(t);
        (!this._model || this._model.isComplete()) &&
          !this._actionsPortal &&
          this.datepicker.close();
      }
      _handleUserDragDrop(e) {
        this._model.updateSelection(e.value, this);
      }
      _startExitAnimation() {
        (this._animationState = "void"), this._changeDetectorRef.markForCheck();
      }
      _handleAnimationEvent(e) {
        (this._isAnimating = e.phaseName === "start"),
          this._isAnimating || this._animationDone.next();
      }
      _getSelected() {
        return this._model.selection;
      }
      _applyPendingSelection() {
        this._model !== this._globalModel &&
          this._globalModel.updateSelection(this._model.selection, this);
      }
      _assignActions(e, a) {
        (this._model = e ? this._globalModel.clone() : this._globalModel),
          (this._actionsPortal = e),
          a && this._changeDetectorRef.detectChanges();
      }
    };
    (r.ɵfac = function (a) {
      return new (a || r)(c(N), c(M), c(Ke), c(j), c(qi, 8), c(Qe));
    }),
      (r.ɵcmp = S({
        type: r,
        selectors: [["mat-datepicker-content"]],
        viewQuery: function (a, t) {
          if ((a & 1 && I(ea, 5), a & 2)) {
            let o;
            D((o = x())) && (t._calendar = o.first);
          }
        },
        hostAttrs: [1, "mat-datepicker-content"],
        hostVars: 5,
        hostBindings: function (a, t) {
          a & 1 &&
            pa("@transformPanel.start", function (s) {
              return t._handleAnimationEvent(s);
            })("@transformPanel.done", function (s) {
              return t._handleAnimationEvent(s);
            }),
            a & 2 &&
              (ma("@transformPanel", t._animationState),
              Ce(t.color ? "mat-" + t.color : ""),
              O("mat-datepicker-content-touch", t.datepicker.touchUi));
        },
        inputs: { color: "color" },
        exportAs: ["matDatepickerContent"],
        standalone: !0,
        features: [T],
        decls: 5,
        vars: 27,
        consts: [
          [
            "cdkTrapFocus",
            "",
            "role",
            "dialog",
            1,
            "mat-datepicker-content-container",
          ],
          [
            3,
            "yearSelected",
            "monthSelected",
            "viewChanged",
            "_userSelection",
            "_userDragDrop",
            "id",
            "startAt",
            "startView",
            "minDate",
            "maxDate",
            "dateFilter",
            "headerComponent",
            "selected",
            "dateClass",
            "comparisonStart",
            "comparisonEnd",
            "startDateAccessibleName",
            "endDateAccessibleName",
          ],
          [3, "cdkPortalOutlet"],
          [
            "type",
            "button",
            "mat-raised-button",
            "",
            1,
            "mat-datepicker-close-button",
            3,
            "focus",
            "blur",
            "click",
            "color",
          ],
        ],
        template: function (a, t) {
          if (
            (a & 1 &&
              (h(0, "div", 0)(1, "mat-calendar", 1),
              b("yearSelected", function (s) {
                return t.datepicker._selectYear(s);
              })("monthSelected", function (s) {
                return t.datepicker._selectMonth(s);
              })("viewChanged", function (s) {
                return t.datepicker._viewChanged(s);
              })("_userSelection", function (s) {
                return t._handleUserSelection(s);
              })("_userDragDrop", function (s) {
                return t._handleUserDragDrop(s);
              }),
              l(),
              A(2, Hn, 0, 0, "ng-template", 2),
              h(3, "button", 3),
              b("focus", function () {
                return (t._closeButtonFocused = !0);
              })("blur", function () {
                return (t._closeButtonFocused = !1);
              })("click", function () {
                return t.datepicker.close();
              }),
              _(4),
              l()()),
            a & 2)
          ) {
            let o;
            O(
              "mat-datepicker-content-container-with-custom-header",
              t.datepicker.calendarHeaderComponent
            )(
              "mat-datepicker-content-container-with-actions",
              t._actionsPortal
            ),
              k("aria-modal", !0)(
                "aria-labelledby",
                (o = t._dialogLabelId) !== null && o !== void 0 ? o : void 0
              ),
              d(),
              Ce(t.datepicker.panelClass),
              p("id", t.datepicker.id)("startAt", t.datepicker.startAt)(
                "startView",
                t.datepicker.startView
              )("minDate", t.datepicker._getMinDate())(
                "maxDate",
                t.datepicker._getMaxDate()
              )("dateFilter", t.datepicker._getDateFilter())(
                "headerComponent",
                t.datepicker.calendarHeaderComponent
              )("selected", t._getSelected())(
                "dateClass",
                t.datepicker.dateClass
              )("comparisonStart", t.comparisonStart)(
                "comparisonEnd",
                t.comparisonEnd
              )("@fadeInCalendar", "enter")(
                "startDateAccessibleName",
                t.startDateAccessibleName
              )("endDateAccessibleName", t.endDateAccessibleName),
              d(),
              p("cdkPortalOutlet", t._actionsPortal),
              d(),
              O("cdk-visually-hidden", !t._closeButtonFocused),
              p("color", t.color || "primary"),
              d(),
              w(t._closeButtonText);
          }
        },
        dependencies: [Ma, ea, jt, qe],
        styles: [
          ".mat-datepicker-content{display:block;border-radius:4px;background-color:var(--mat-datepicker-calendar-container-background-color, var(--mat-app-surface-container-high));color:var(--mat-datepicker-calendar-container-text-color, var(--mat-app-on-surface));box-shadow:var(--mat-datepicker-calendar-container-elevation-shadow);border-radius:var(--mat-datepicker-calendar-container-shape, var(--mat-app-corner-large))}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar{height:auto}.mat-datepicker-content .mat-datepicker-close-button{position:absolute;top:100%;left:0;margin-top:8px}.ng-animating .mat-datepicker-content .mat-datepicker-close-button{display:none}.mat-datepicker-content-container{display:flex;flex-direction:column;justify-content:space-between}.mat-datepicker-content-touch{display:block;max-height:80vh;box-shadow:var(--mat-datepicker-calendar-container-touch-elevation-shadow);border-radius:var(--mat-datepicker-calendar-container-touch-shape, var(--mat-app-corner-extra-large));position:relative;overflow:visible}.mat-datepicker-content-touch .mat-datepicker-content-container{min-height:312px;max-height:788px;min-width:250px;max-width:750px}.mat-datepicker-content-touch .mat-calendar{width:100%;height:auto}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-datepicker-content-container{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-datepicker-content-container{width:80vw;height:100vw}.mat-datepicker-content-touch .mat-datepicker-content-container-with-actions{height:115vw}}",
        ],
        encapsulation: 2,
        data: { animation: [ji.transformPanel, ji.fadeInCalendar] },
        changeDetection: 0,
      }));
    let i = r;
    return i;
  })(),
  Bi = (() => {
    let r = class r {
      get startAt() {
        return (
          this._startAt ||
          (this.datepickerInput ? this.datepickerInput.getStartValue() : null)
        );
      }
      set startAt(e) {
        this._startAt = this._dateAdapter.getValidDateOrNull(
          this._dateAdapter.deserialize(e)
        );
      }
      get color() {
        return (
          this._color ||
          (this.datepickerInput
            ? this.datepickerInput.getThemePalette()
            : void 0)
        );
      }
      set color(e) {
        this._color = e;
      }
      get disabled() {
        return this._disabled === void 0 && this.datepickerInput
          ? this.datepickerInput.disabled
          : !!this._disabled;
      }
      set disabled(e) {
        e !== this._disabled &&
          ((this._disabled = e), this.stateChanges.next(void 0));
      }
      get panelClass() {
        return this._panelClass;
      }
      set panelClass(e) {
        this._panelClass = Da(e);
      }
      get opened() {
        return this._opened;
      }
      set opened(e) {
        e ? this.open() : this.close();
      }
      _getMinDate() {
        return this.datepickerInput && this.datepickerInput.min;
      }
      _getMaxDate() {
        return this.datepickerInput && this.datepickerInput.max;
      }
      _getDateFilter() {
        return this.datepickerInput && this.datepickerInput.dateFilter;
      }
      constructor(e, a, t, o, s, g, ne) {
        (this._overlay = e),
          (this._viewContainerRef = t),
          (this._dateAdapter = s),
          (this._dir = g),
          (this._model = ne),
          (this._inputStateChanges = R.EMPTY),
          (this._document = P(ct)),
          (this.startView = "month"),
          (this.touchUi = !1),
          (this.xPosition = "start"),
          (this.yPosition = "below"),
          (this.restoreFocus = !0),
          (this.yearSelected = new u()),
          (this.monthSelected = new u()),
          (this.viewChanged = new u(!0)),
          (this.openedStream = new u()),
          (this.closedStream = new u()),
          (this._opened = !1),
          (this.id = `mat-datepicker-${tr++}`),
          (this._focusedElementBeforeOpen = null),
          (this._backdropHarnessClass = `${this.id}-backdrop`),
          (this.stateChanges = new te()),
          (this._injector = P(pe)),
          (this._changeDetectorRef = P(M)),
          this._dateAdapter,
          (this._scrollStrategy = o),
          this._model.selectionChanged.subscribe(() => {
            this._changeDetectorRef.markForCheck();
          });
      }
      ngOnChanges(e) {
        let a = e.xPosition || e.yPosition;
        if (a && !a.firstChange && this._overlayRef) {
          let t = this._overlayRef.getConfig().positionStrategy;
          t instanceof Ha &&
            (this._setConnectedPositions(t),
            this.opened && this._overlayRef.updatePosition());
        }
        this.stateChanges.next(void 0);
      }
      ngOnDestroy() {
        this._destroyOverlay(),
          this.close(),
          this._inputStateChanges.unsubscribe(),
          this.stateChanges.complete();
      }
      select(e) {
        this._model.add(e);
      }
      _selectYear(e) {
        this.yearSelected.emit(e);
      }
      _selectMonth(e) {
        this.monthSelected.emit(e);
      }
      _viewChanged(e) {
        this.viewChanged.emit(e);
      }
      registerInput(e) {
        return (
          this.datepickerInput,
          this._inputStateChanges.unsubscribe(),
          (this.datepickerInput = e),
          (this._inputStateChanges = e.stateChanges.subscribe(() =>
            this.stateChanges.next(void 0)
          )),
          this._model
        );
      }
      registerActions(e) {
        this._actionsPortal,
          (this._actionsPortal = e),
          this._componentRef?.instance._assignActions(e, !0);
      }
      removeActions(e) {
        e === this._actionsPortal &&
          ((this._actionsPortal = null),
          this._componentRef?.instance._assignActions(null, !0));
      }
      open() {
        this._opened ||
          this.disabled ||
          this._componentRef?.instance._isAnimating ||
          (this.datepickerInput,
          (this._focusedElementBeforeOpen = ka()),
          this._openOverlay(),
          (this._opened = !0),
          this.openedStream.emit());
      }
      close() {
        if (!this._opened || this._componentRef?.instance._isAnimating) return;
        let e =
            this.restoreFocus &&
            this._focusedElementBeforeOpen &&
            typeof this._focusedElementBeforeOpen.focus == "function",
          a = () => {
            this._opened && ((this._opened = !1), this.closedStream.emit());
          };
        if (this._componentRef) {
          let { instance: t, location: o } = this._componentRef;
          t._startExitAnimation(),
            t._animationDone.pipe(Pe(1)).subscribe(() => {
              let s = this._document.activeElement;
              e &&
                (!s ||
                  s === this._document.activeElement ||
                  o.nativeElement.contains(s)) &&
                this._focusedElementBeforeOpen.focus(),
                (this._focusedElementBeforeOpen = null),
                this._destroyOverlay();
            });
        }
        e ? setTimeout(a) : a();
      }
      _applyPendingSelection() {
        this._componentRef?.instance?._applyPendingSelection();
      }
      _forwardContentValues(e) {
        (e.datepicker = this),
          (e.color = this.color),
          (e._dialogLabelId = this.datepickerInput.getOverlayLabelId()),
          e._assignActions(this._actionsPortal, !1);
      }
      _openOverlay() {
        this._destroyOverlay();
        let e = this.touchUi,
          a = new Lt(Qi, this._viewContainerRef),
          t = (this._overlayRef = this._overlay.create(
            new bt({
              positionStrategy: e
                ? this._getDialogStrategy()
                : this._getDropdownStrategy(),
              hasBackdrop: !0,
              backdropClass: [
                e
                  ? "cdk-overlay-dark-backdrop"
                  : "mat-overlay-transparent-backdrop",
                this._backdropHarnessClass,
              ],
              direction: this._dir,
              scrollStrategy: e
                ? this._overlay.scrollStrategies.block()
                : this._scrollStrategy(),
              panelClass: `mat-datepicker-${e ? "dialog" : "popup"}`,
            })
          ));
        this._getCloseStream(t).subscribe((o) => {
          o && o.preventDefault(), this.close();
        }),
          t.keydownEvents().subscribe((o) => {
            let s = o.keyCode;
            (s === 38 ||
              s === 40 ||
              s === 37 ||
              s === 39 ||
              s === 33 ||
              s === 34) &&
              o.preventDefault();
          }),
          (this._componentRef = t.attach(a)),
          this._forwardContentValues(this._componentRef.instance),
          e ||
            ke(
              () => {
                t.updatePosition();
              },
              { injector: this._injector }
            );
      }
      _destroyOverlay() {
        this._overlayRef &&
          (this._overlayRef.dispose(),
          (this._overlayRef = this._componentRef = null));
      }
      _getDialogStrategy() {
        return this._overlay
          .position()
          .global()
          .centerHorizontally()
          .centerVertically();
      }
      _getDropdownStrategy() {
        let e = this._overlay
          .position()
          .flexibleConnectedTo(this.datepickerInput.getConnectedOverlayOrigin())
          .withTransformOriginOn(".mat-datepicker-content")
          .withFlexibleDimensions(!1)
          .withViewportMargin(8)
          .withLockedPosition();
        return this._setConnectedPositions(e);
      }
      _setConnectedPositions(e) {
        let a = this.xPosition === "end" ? "end" : "start",
          t = a === "start" ? "end" : "start",
          o = this.yPosition === "above" ? "bottom" : "top",
          s = o === "top" ? "bottom" : "top";
        return e.withPositions([
          { originX: a, originY: s, overlayX: a, overlayY: o },
          { originX: a, originY: o, overlayX: a, overlayY: s },
          { originX: t, originY: s, overlayX: t, overlayY: o },
          { originX: t, originY: o, overlayX: t, overlayY: s },
        ]);
      }
      _getCloseStream(e) {
        let a = ["ctrlKey", "shiftKey", "metaKey"];
        return re(
          e.backdropClick(),
          e.detachments(),
          e
            .keydownEvents()
            .pipe(
              Ie(
                (t) =>
                  (t.keyCode === 27 && !Z(t)) ||
                  (this.datepickerInput &&
                    Z(t, "altKey") &&
                    t.keyCode === 38 &&
                    a.every((o) => !Z(t, o)))
              )
            )
        );
      }
    };
    (r.ɵfac = function (a) {
      return new (a || r)(c(ie), c(oe), c(at), c(Ki), c(j, 8), c(xe, 8), c(Ke));
    }),
      (r.ɵdir = z({
        type: r,
        inputs: {
          calendarHeaderComponent: "calendarHeaderComponent",
          startAt: "startAt",
          startView: "startView",
          color: "color",
          touchUi: [2, "touchUi", "touchUi", y],
          disabled: [2, "disabled", "disabled", y],
          xPosition: "xPosition",
          yPosition: "yPosition",
          restoreFocus: [2, "restoreFocus", "restoreFocus", y],
          dateClass: "dateClass",
          panelClass: "panelClass",
          opened: [2, "opened", "opened", y],
        },
        outputs: {
          yearSelected: "yearSelected",
          monthSelected: "monthSelected",
          viewChanged: "viewChanged",
          openedStream: "opened",
          closedStream: "closed",
        },
        features: [H, X],
      }));
    let i = r;
    return i;
  })(),
  Wi = (() => {
    let r = class r extends Bi {};
    (r.ɵfac = (() => {
      let e;
      return function (t) {
        return (e || (e = Tt(r)))(t || r);
      };
    })()),
      (r.ɵcmp = S({
        type: r,
        selectors: [["mat-datepicker"]],
        exportAs: ["matDatepicker"],
        standalone: !0,
        features: [L([Hi, { provide: Bi, useExisting: r }]), it, T],
        decls: 0,
        vars: 0,
        template: function (a, t) {},
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = r;
    return i;
  })(),
  Oe = class {
    constructor(r, n) {
      (this.target = r),
        (this.targetElement = n),
        (this.value = this.target.value);
    }
  },
  nr = (() => {
    let r = class r {
      get value() {
        return this._model
          ? this._getValueFromModel(this._model.selection)
          : this._pendingValue;
      }
      set value(e) {
        this._assignValueProgrammatically(e);
      }
      get disabled() {
        return !!this._disabled || this._parentDisabled();
      }
      set disabled(e) {
        let a = e,
          t = this._elementRef.nativeElement;
        this._disabled !== a &&
          ((this._disabled = a), this.stateChanges.next(void 0)),
          a && this._isInitialized && t.blur && t.blur();
      }
      _getValidators() {
        return [
          this._parseValidator,
          this._minValidator,
          this._maxValidator,
          this._filterValidator,
        ];
      }
      _registerModel(e) {
        (this._model = e),
          this._valueChangesSubscription.unsubscribe(),
          this._pendingValue && this._assignValue(this._pendingValue),
          (this._valueChangesSubscription =
            this._model.selectionChanged.subscribe((a) => {
              if (this._shouldHandleChangeEvent(a)) {
                let t = this._getValueFromModel(a.selection);
                (this._lastValueValid = this._isValidValue(t)),
                  this._cvaOnChange(t),
                  this._onTouched(),
                  this._formatValue(t),
                  this.dateInput.emit(
                    new Oe(this, this._elementRef.nativeElement)
                  ),
                  this.dateChange.emit(
                    new Oe(this, this._elementRef.nativeElement)
                  );
              }
            }));
      }
      constructor(e, a, t) {
        (this._elementRef = e),
          (this._dateAdapter = a),
          (this._dateFormats = t),
          (this.dateChange = new u()),
          (this.dateInput = new u()),
          (this.stateChanges = new te()),
          (this._onTouched = () => {}),
          (this._validatorOnChange = () => {}),
          (this._cvaOnChange = () => {}),
          (this._valueChangesSubscription = R.EMPTY),
          (this._localeSubscription = R.EMPTY),
          (this._parseValidator = () =>
            this._lastValueValid
              ? null
              : {
                  matDatepickerParse: {
                    text: this._elementRef.nativeElement.value,
                  },
                }),
          (this._filterValidator = (o) => {
            let s = this._dateAdapter.getValidDateOrNull(
              this._dateAdapter.deserialize(o.value)
            );
            return !s || this._matchesFilter(s)
              ? null
              : { matDatepickerFilter: !0 };
          }),
          (this._minValidator = (o) => {
            let s = this._dateAdapter.getValidDateOrNull(
                this._dateAdapter.deserialize(o.value)
              ),
              g = this._getMinDate();
            return !g || !s || this._dateAdapter.compareDate(g, s) <= 0
              ? null
              : { matDatepickerMin: { min: g, actual: s } };
          }),
          (this._maxValidator = (o) => {
            let s = this._dateAdapter.getValidDateOrNull(
                this._dateAdapter.deserialize(o.value)
              ),
              g = this._getMaxDate();
            return !g || !s || this._dateAdapter.compareDate(g, s) >= 0
              ? null
              : { matDatepickerMax: { max: g, actual: s } };
          }),
          (this._lastValueValid = !1),
          (this._localeSubscription = a.localeChanges.subscribe(() => {
            this._assignValueProgrammatically(this.value);
          }));
      }
      ngAfterViewInit() {
        this._isInitialized = !0;
      }
      ngOnChanges(e) {
        rr(e, this._dateAdapter) && this.stateChanges.next(void 0);
      }
      ngOnDestroy() {
        this._valueChangesSubscription.unsubscribe(),
          this._localeSubscription.unsubscribe(),
          this.stateChanges.complete();
      }
      registerOnValidatorChange(e) {
        this._validatorOnChange = e;
      }
      validate(e) {
        return this._validator ? this._validator(e) : null;
      }
      writeValue(e) {
        this._assignValueProgrammatically(e);
      }
      registerOnChange(e) {
        this._cvaOnChange = e;
      }
      registerOnTouched(e) {
        this._onTouched = e;
      }
      setDisabledState(e) {
        this.disabled = e;
      }
      _onKeydown(e) {
        let a = ["ctrlKey", "shiftKey", "metaKey"];
        Z(e, "altKey") &&
          e.keyCode === 40 &&
          a.every((o) => !Z(e, o)) &&
          !this._elementRef.nativeElement.readOnly &&
          (this._openPopup(), e.preventDefault());
      }
      _onInput(e) {
        let a = this._lastValueValid,
          t = this._dateAdapter.parse(e, this._dateFormats.parse.dateInput);
        (this._lastValueValid = this._isValidValue(t)),
          (t = this._dateAdapter.getValidDateOrNull(t));
        let o = !this._dateAdapter.sameDate(t, this.value);
        !t || o
          ? this._cvaOnChange(t)
          : (e && !this.value && this._cvaOnChange(t),
            a !== this._lastValueValid && this._validatorOnChange()),
          o &&
            (this._assignValue(t),
            this.dateInput.emit(new Oe(this, this._elementRef.nativeElement)));
      }
      _onChange() {
        this.dateChange.emit(new Oe(this, this._elementRef.nativeElement));
      }
      _onBlur() {
        this.value && this._formatValue(this.value), this._onTouched();
      }
      _formatValue(e) {
        this._elementRef.nativeElement.value =
          e != null
            ? this._dateAdapter.format(e, this._dateFormats.display.dateInput)
            : "";
      }
      _assignValue(e) {
        this._model
          ? (this._assignValueToModel(e), (this._pendingValue = null))
          : (this._pendingValue = e);
      }
      _isValidValue(e) {
        return !e || this._dateAdapter.isValid(e);
      }
      _parentDisabled() {
        return !1;
      }
      _assignValueProgrammatically(e) {
        (e = this._dateAdapter.deserialize(e)),
          (this._lastValueValid = this._isValidValue(e)),
          (e = this._dateAdapter.getValidDateOrNull(e)),
          this._assignValue(e),
          this._formatValue(e);
      }
      _matchesFilter(e) {
        let a = this._getDateFilter();
        return !a || a(e);
      }
    };
    (r.ɵfac = function (a) {
      return new (a || r)(c(N), c(j, 8), c(we, 8));
    }),
      (r.ɵdir = z({
        type: r,
        inputs: { value: "value", disabled: [2, "disabled", "disabled", y] },
        outputs: { dateChange: "dateChange", dateInput: "dateInput" },
        standalone: !0,
        features: [H, X],
      }));
    let i = r;
    return i;
  })();
function rr(i, r) {
  let n = Object.keys(i);
  for (let e of n) {
    let { previousValue: a, currentValue: t } = i[e];
    if (r.isDateInstance(a) && r.isDateInstance(t)) {
      if (!r.sameDate(a, t)) return !0;
    } else return !0;
  }
  return !1;
}
var or = { provide: be, useExisting: ae(() => Et), multi: !0 },
  sr = { provide: yt, useExisting: ae(() => Et), multi: !0 },
  Et = (() => {
    let r = class r extends nr {
      set matDatepicker(e) {
        e &&
          ((this._datepicker = e),
          this._ariaOwns.set(e.opened ? e.id : null),
          (this._closedSubscription = e.closedStream.subscribe(() => {
            this._onTouched(), this._ariaOwns.set(null);
          })),
          (this._openedSubscription = e.openedStream.subscribe(() => {
            this._ariaOwns.set(e.id);
          })),
          this._registerModel(e.registerInput(this)));
      }
      get min() {
        return this._min;
      }
      set min(e) {
        let a = this._dateAdapter.getValidDateOrNull(
          this._dateAdapter.deserialize(e)
        );
        this._dateAdapter.sameDate(a, this._min) ||
          ((this._min = a), this._validatorOnChange());
      }
      get max() {
        return this._max;
      }
      set max(e) {
        let a = this._dateAdapter.getValidDateOrNull(
          this._dateAdapter.deserialize(e)
        );
        this._dateAdapter.sameDate(a, this._max) ||
          ((this._max = a), this._validatorOnChange());
      }
      get dateFilter() {
        return this._dateFilter;
      }
      set dateFilter(e) {
        let a = this._matchesFilter(this.value);
        (this._dateFilter = e),
          this._matchesFilter(this.value) !== a && this._validatorOnChange();
      }
      constructor(e, a, t, o) {
        super(e, a, t),
          (this._formField = o),
          (this._closedSubscription = R.EMPTY),
          (this._openedSubscription = R.EMPTY),
          (this._ariaOwns = ha(null)),
          (this._validator = U.compose(super._getValidators()));
      }
      getConnectedOverlayOrigin() {
        return this._formField
          ? this._formField.getConnectedOverlayOrigin()
          : this._elementRef;
      }
      getOverlayLabelId() {
        return this._formField
          ? this._formField.getLabelId()
          : this._elementRef.nativeElement.getAttribute("aria-labelledby");
      }
      getThemePalette() {
        return this._formField ? this._formField.color : void 0;
      }
      getStartValue() {
        return this.value;
      }
      ngOnDestroy() {
        super.ngOnDestroy(),
          this._closedSubscription.unsubscribe(),
          this._openedSubscription.unsubscribe();
      }
      _openPopup() {
        this._datepicker && this._datepicker.open();
      }
      _getValueFromModel(e) {
        return e;
      }
      _assignValueToModel(e) {
        this._model && this._model.updateSelection(e, this);
      }
      _getMinDate() {
        return this._min;
      }
      _getMaxDate() {
        return this._max;
      }
      _getDateFilter() {
        return this._dateFilter;
      }
      _shouldHandleChangeEvent(e) {
        return e.source !== this;
      }
    };
    (r.ɵfac = function (a) {
      return new (a || r)(c(N), c(j, 8), c(we, 8), c(kt, 8));
    }),
      (r.ɵdir = z({
        type: r,
        selectors: [["input", "matDatepicker", ""]],
        hostAttrs: [1, "mat-datepicker-input"],
        hostVars: 6,
        hostBindings: function (a, t) {
          a & 1 &&
            b("input", function (s) {
              return t._onInput(s.target.value);
            })("change", function () {
              return t._onChange();
            })("blur", function () {
              return t._onBlur();
            })("keydown", function (s) {
              return t._onKeydown(s);
            }),
            a & 2 &&
              (rt("disabled", t.disabled),
              k("aria-haspopup", t._datepicker ? "dialog" : null)(
                "aria-owns",
                t._ariaOwns()
              )("min", t.min ? t._dateAdapter.toIso8601(t.min) : null)(
                "max",
                t.max ? t._dateAdapter.toIso8601(t.max) : null
              )("data-mat-calendar", t._datepicker ? t._datepicker.id : null));
        },
        inputs: {
          matDatepicker: "matDatepicker",
          min: "min",
          max: "max",
          dateFilter: [0, "matDatepickerFilter", "dateFilter"],
        },
        exportAs: ["matDatepickerInput"],
        standalone: !0,
        features: [L([or, sr, { provide: vi, useExisting: r }]), it],
      }));
    let i = r;
    return i;
  })(),
  dr = (() => {
    let r = class r {};
    (r.ɵfac = function (a) {
      return new (a || r)();
    }),
      (r.ɵdir = z({
        type: r,
        selectors: [["", "matDatepickerToggleIcon", ""]],
        standalone: !0,
      }));
    let i = r;
    return i;
  })(),
  ia = (() => {
    let r = class r {
      get disabled() {
        return this._disabled === void 0 && this.datepicker
          ? this.datepicker.disabled
          : !!this._disabled;
      }
      set disabled(e) {
        this._disabled = e;
      }
      constructor(e, a, t) {
        (this._intl = e),
          (this._changeDetectorRef = a),
          (this._stateChanges = R.EMPTY);
        let o = Number(t);
        this.tabIndex = o || o === 0 ? o : null;
      }
      ngOnChanges(e) {
        e.datepicker && this._watchStateChanges();
      }
      ngOnDestroy() {
        this._stateChanges.unsubscribe();
      }
      ngAfterContentInit() {
        this._watchStateChanges();
      }
      _open(e) {
        this.datepicker &&
          !this.disabled &&
          (this.datepicker.open(), e.stopPropagation());
      }
      _watchStateChanges() {
        let e = this.datepicker ? this.datepicker.stateChanges : Me(),
          a =
            this.datepicker && this.datepicker.datepickerInput
              ? this.datepicker.datepickerInput.stateChanges
              : Me(),
          t = this.datepicker
            ? re(this.datepicker.openedStream, this.datepicker.closedStream)
            : Me();
        this._stateChanges.unsubscribe(),
          (this._stateChanges = re(this._intl.changes, e, a, t).subscribe(() =>
            this._changeDetectorRef.markForCheck()
          ));
      }
    };
    (r.ɵfac = function (a) {
      return new (a || r)(c(Qe), c(M), Te("tabindex"));
    }),
      (r.ɵcmp = S({
        type: r,
        selectors: [["mat-datepicker-toggle"]],
        contentQueries: function (a, t, o) {
          if ((a & 1 && De(o, dr, 5), a & 2)) {
            let s;
            D((s = x())) && (t._customIcon = s.first);
          }
        },
        viewQuery: function (a, t) {
          if ((a & 1 && I(qn, 5), a & 2)) {
            let o;
            D((o = x())) && (t._button = o.first);
          }
        },
        hostAttrs: [1, "mat-datepicker-toggle"],
        hostVars: 8,
        hostBindings: function (a, t) {
          a & 1 &&
            b("click", function (s) {
              return t._open(s);
            }),
            a & 2 &&
              (k("tabindex", null)(
                "data-mat-calendar",
                t.datepicker ? t.datepicker.id : null
              ),
              O(
                "mat-datepicker-toggle-active",
                t.datepicker && t.datepicker.opened
              )("mat-accent", t.datepicker && t.datepicker.color === "accent")(
                "mat-warn",
                t.datepicker && t.datepicker.color === "warn"
              ));
        },
        inputs: {
          datepicker: [0, "for", "datepicker"],
          tabIndex: "tabIndex",
          ariaLabel: [0, "aria-label", "ariaLabel"],
          disabled: [2, "disabled", "disabled", y],
          disableRipple: "disableRipple",
        },
        exportAs: ["matDatepickerToggle"],
        standalone: !0,
        features: [H, X, T],
        ngContentSelectors: Gn,
        decls: 4,
        vars: 6,
        consts: [
          ["button", ""],
          [
            "mat-icon-button",
            "",
            "type",
            "button",
            3,
            "disabled",
            "disableRipple",
          ],
          [
            "viewBox",
            "0 0 24 24",
            "width",
            "24px",
            "height",
            "24px",
            "fill",
            "currentColor",
            "focusable",
            "false",
            "aria-hidden",
            "true",
            1,
            "mat-datepicker-toggle-default-icon",
          ],
          [
            "d",
            "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z",
          ],
        ],
        template: function (a, t) {
          a & 1 &&
            (se($n),
            h(0, "button", 1, 0),
            A(2, Un, 2, 0, ":svg:svg", 2),
            de(3),
            l()),
            a & 2 &&
              (p("disabled", t.disabled)("disableRipple", t.disableRipple),
              k("aria-haspopup", t.datepicker ? "dialog" : null)(
                "aria-label",
                t.ariaLabel || t._intl.openCalendarLabel
              )("tabindex", t.disabled ? -1 : t.tabIndex),
              d(2),
              E(t._customIcon ? -1 : 2));
        },
        dependencies: [Bt],
        styles: [
          ".mat-datepicker-toggle{pointer-events:auto;color:var(--mat-datepicker-toggle-icon-color, var(--mat-app-on-surface-variant))}.mat-datepicker-toggle-active{color:var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-app-on-surface-variant))}.cdk-high-contrast-active .mat-datepicker-toggle-default-icon{color:CanvasText}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = r;
    return i;
  })();
var Xi = (() => {
  let r = class r {};
  (r.ɵfac = function (a) {
    return new (a || r)();
  }),
    (r.ɵmod = me({ type: r })),
    (r.ɵinj = he({
      providers: [Qe, ir],
      imports: [_e, vt, ft, Ea, za, J, Qi, ia, Ui, gt],
    }));
  let i = r;
  return i;
})();
var Zi = (() => {
  class i {
    ngControl;
    constructor(n) {
      this.ngControl = n;
    }
    onInputChange(n) {
      let a = n.target.value;
      a.length > 2 &&
        ((a = a.slice(0, 2)), this.ngControl.control?.setValue(a));
    }
    static ɵfac = function (e) {
      return new (e || i)(c(zt));
    };
    static ɵdir = z({
      type: i,
      selectors: [["", "appTwoDigitInput", ""]],
      hostBindings: function (e, a) {
        e & 1 &&
          b("input", function (o) {
            return a.onInputChange(o);
          });
      },
      standalone: !0,
    });
  }
  return i;
})();
var hr = (i, r) => ({ conflict: i, "no-conflict": r });
function mr(i, r) {
  if (i & 1) {
    let n = V();
    h(0, "div", 11)(1, "span"),
      _(2),
      l(),
      h(3, "button", 12),
      b("click", function () {
        let a = f(n).$implicit,
          t = m(2);
        return v(t.onDeleteYear(a));
      }),
      h(4, "mat-icon"),
      _(5, "delete"),
      l(),
      h(6, "span"),
      _(7, "Delete"),
      l()()();
  }
  if (i & 2) {
    let n = r.$implicit;
    d(2), w(n);
  }
}
function pr(i, r) {
  if ((i & 1 && (h(0, "div", 5), q(1, mr, 8, 1, "div", 11, ue), l()), i & 2)) {
    let n = m();
    d(), $(n.data.academicYearList);
  }
}
function ur(i, r) {
  if (
    (i & 1 &&
      (h(0, "form", 6)(1, "mat-radio-group", 13)(2, "mat-radio-button", 14),
      _(3),
      l(),
      h(4, "mat-radio-button", 15),
      _(5),
      l()()()),
    i & 2)
  ) {
    let n = m();
    p("formGroup", n.form),
      d(3),
      G(
        " ",
        n.customExportOptions ? n.customExportOptions.all : "Export all",
        " "
      ),
      d(2),
      G(
        " ",
        n.customExportOptions
          ? n.customExportOptions.current
          : "Export this item only",
        " "
      );
  }
}
function _r(i, r) {
  if ((i & 1 && C(0, "input", 22), i & 2)) {
    let n,
      e = m(2).$implicit;
    p("formControlName", e.formControlName)(
      "maxlength",
      (n = e.maxLength) !== null && n !== void 0 ? n : null
    ),
      k("disabled", e.disabled ? "" : null);
  }
}
function gr(i, r) {
  if ((i & 1 && C(0, "input", 23), i & 2)) {
    let n,
      e,
      a = m(2).$implicit;
    p("formControlName", a.formControlName)(
      "min",
      (n = a.min) !== null && n !== void 0 ? n : null
    )("max", (e = a.max) !== null && e !== void 0 ? e : null),
      k("disabled", a.disabled ? "" : null);
  }
}
function br(i, r) {
  if ((i & 1 && (h(0, "mat-option", 25), _(1), l()), i & 2)) {
    let n = r.$implicit;
    p("value", n), d(), w(n);
  }
}
function fr(i, r) {
  if (
    (i & 1 &&
      (h(0, "mat-select", 24), q(1, br, 2, 2, "mat-option", 25, ue), l()),
    i & 2)
  ) {
    let n = m(2).$implicit;
    p("formControlName", n.formControlName), d(), $(n.options);
  }
}
function vr(i, r) {
  if ((i & 1 && C(0, "input", 22), i & 2)) {
    let n,
      e = m(3).$index,
      a = m(3);
    p("formControlName", a.data.fields[e + 1].formControlName)(
      "maxlength",
      (n = a.data.fields[e + 1].maxLength) !== null && n !== void 0 ? n : null
    ),
      k("disabled", a.data.fields[e + 1].disabled ? "" : null);
  }
}
function yr(i, r) {
  if ((i & 1 && C(0, "input", 23), i & 2)) {
    let n,
      e,
      a = m(3).$index,
      t = m(3);
    p("formControlName", t.data.fields[a + 1].formControlName)(
      "min",
      (n = t.data.fields[a + 1].min) !== null && n !== void 0 ? n : null
    )(
      "max",
      (e = t.data.fields[a + 1].max) !== null && e !== void 0 ? e : null
    ),
      k("disabled", t.data.fields[a + 1].disabled ? "" : null);
  }
}
function kr(i, r) {
  if ((i & 1 && (h(0, "mat-option", 25), _(1), l()), i & 2)) {
    let n = r.$implicit;
    p("value", n), d(), w(n);
  }
}
function Cr(i, r) {
  if (
    (i & 1 &&
      (h(0, "mat-select", 24), q(1, kr, 2, 2, "mat-option", 25, ue), l()),
    i & 2)
  ) {
    let n = m(3).$index,
      e = m(3);
    p("formControlName", e.data.fields[n + 1].formControlName),
      d(),
      $(e.data.fields[n + 1].options);
  }
}
function Dr(i, r) {
  if (
    (i & 1 &&
      (h(0, "mat-form-field", 17)(1, "mat-label"),
      _(2),
      l(),
      Ot(3, 18),
      A(4, vr, 1, 3, "input", 19)(5, yr, 1, 4, "input", 20)(
        6,
        Cr,
        3,
        1,
        "mat-select",
        21
      ),
      Ft(),
      h(7, "mat-error"),
      _(8),
      l()()),
    i & 2)
  ) {
    let n = m(2).$index,
      e = m(3);
    d(2),
      w(e.data.fields[n + 1].label),
      d(),
      p("ngSwitch", e.data.fields[n + 1].type),
      d(),
      p("ngSwitchCase", "text"),
      d(),
      p("ngSwitchCase", "number"),
      d(),
      p("ngSwitchCase", "select"),
      d(2),
      w(
        e.getErrorMessage(
          e.data.fields[n + 1].formControlName,
          e.data.fields[n + 1].label
        )
      );
  }
}
function xr(i, r) {
  if (
    (i & 1 &&
      (h(0, "div", 16)(1, "mat-form-field", 17)(2, "mat-label"),
      _(3),
      l(),
      Ot(4, 18),
      A(5, _r, 1, 3, "input", 19)(6, gr, 1, 4, "input", 20)(
        7,
        fr,
        3,
        1,
        "mat-select",
        21
      ),
      Ft(),
      h(8, "mat-error"),
      _(9),
      l()(),
      A(10, Dr, 9, 6, "mat-form-field", 17),
      l()),
    i & 2)
  ) {
    let n = m(),
      e = n.$implicit,
      a = n.$index,
      t = m(3);
    d(3),
      w(e.label),
      d(),
      p("ngSwitch", e.type),
      d(),
      p("ngSwitchCase", "text"),
      d(),
      p("ngSwitchCase", "number"),
      d(),
      p("ngSwitchCase", "select"),
      d(2),
      w(t.getErrorMessage(e.formControlName, e.label)),
      d(),
      E(a + 1 < t.data.fields.length ? 10 : -1);
  }
}
function wr(i, r) {
  if ((i & 1 && A(0, xr, 11, 7, "div", 16), i & 2)) {
    let n = r.$index;
    E(n % 2 === 0 ? 0 : -1);
  }
}
function Ar(i, r) {
  if ((i & 1 && q(0, wr, 1, 1, null, null, ue), i & 2)) {
    let n = m(2);
    $(n.data.fields);
  }
}
function Mr(i, r) {
  if ((i & 1 && (h(0, "mat-checkbox", 26), _(1), l()), i & 2)) {
    let n = m().$implicit;
    p("formControlName", n.formControlName), d(), G(" ", n.label, " ");
  }
}
function Ir(i, r) {
  if (
    (i & 1 &&
      (h(0, "mat-form-field", 27)(1, "mat-label"),
      _(2),
      l(),
      C(3, "input", 28),
      h(4, "mat-hint"),
      _(5, "MM/DD/YYYY"),
      l(),
      C(6, "mat-datepicker-toggle", 29)(7, "mat-datepicker", null, 0),
      h(9, "mat-error"),
      _(10),
      l()()),
    i & 2)
  ) {
    let n,
      e = Ye(8),
      a = m().$implicit,
      t = m(3);
    d(2),
      w(a.label),
      d(),
      p("formControlName", a.formControlName)("matDatepicker", e)(
        "min",
        a.formControlName === "endDate"
          ? (n = t.form.get("startDate")) == null
            ? null
            : n.value
          : null
      ),
      d(3),
      p("for", e),
      d(4),
      w(t.getErrorMessage(a.formControlName, a.label));
  }
}
function Sr(i, r) {
  if ((i & 1 && C(0, "input", 22), i & 2)) {
    let n,
      e = m(2).$implicit;
    p("formControlName", e.formControlName)(
      "maxlength",
      (n = e.maxLength) !== null && n !== void 0 ? n : null
    );
  }
}
function Er(i, r) {
  if ((i & 1 && C(0, "input", 30), i & 2)) {
    let n,
      e,
      a = m(2).$implicit;
    p("formControlName", a.formControlName)(
      "min",
      (n = a.min) !== null && n !== void 0 ? n : null
    )("max", (e = a.max) !== null && e !== void 0 ? e : null);
  }
}
function Tr(i, r) {
  if ((i & 1 && (h(0, "mat-option", 25), _(1), l()), i & 2)) {
    let n = r.$implicit;
    p("value", n), d(), G(" ", n, " ");
  }
}
function Vr(i, r) {
  if (
    (i & 1 &&
      (h(0, "mat-select", 24), q(1, Tr, 2, 2, "mat-option", 25, ue), l()),
    i & 2)
  ) {
    let n = m(2).$implicit;
    p("formControlName", n.formControlName), d(), $(n.options);
  }
}
function Or(i, r) {
  if ((i & 1 && (h(0, "mat-option", 25), _(1), l()), i & 2)) {
    let n = r.$implicit;
    p("value", n), d(), G(" ", n, " ");
  }
}
function Fr(i, r) {
  if (i & 1) {
    let n = V();
    h(0, "input", 31),
      b("input", function () {
        f(n);
        let a = m(2).$implicit,
          t = m(3);
        return v(t.filterOptions(a));
      }),
      l(),
      h(1, "mat-autocomplete", null, 1),
      q(3, Or, 2, 2, "mat-option", 25, ue),
      l();
  }
  if (i & 2) {
    let n = Ye(2),
      e = m(2).$implicit,
      a = m(3);
    p("formControlName", e.formControlName)("matAutocomplete", n),
      d(3),
      $(a.filteredOptions[e.formControlName]);
  }
}
function Rr(i, r) {
  if (i & 1) {
    let n = V();
    h(0, "mat-hint")(1, "span", 32),
      b("click", function () {
        f(n);
        let a = m(5);
        return v(a.navigateToAcademicYear());
      }),
      _(2, "Click this to Manage Academic Years"),
      l()();
  }
}
function Pr(i, r) {
  if ((i & 1 && (h(0, "mat-hint"), _(1), l()), i & 2)) {
    let n = m(2).$implicit;
    d(), w(n.hint);
  }
}
function Nr(i, r) {
  if (
    (i & 1 &&
      (h(0, "mat-form-field", 27)(1, "mat-label"),
      _(2),
      l(),
      A(3, Sr, 1, 2, "input", 22)(4, Er, 1, 3, "input", 30)(
        5,
        Vr,
        3,
        1,
        "mat-select",
        24
      )(6, Fr, 5, 2),
      h(7, "mat-error"),
      _(8),
      l(),
      A(9, Rr, 3, 0, "mat-hint")(10, Pr, 2, 1, "mat-hint"),
      l()),
    i & 2)
  ) {
    let n,
      e = m().$implicit,
      a = m(3);
    d(2),
      w(e.label),
      d(),
      E(
        (n = e.type) === "text"
          ? 3
          : n === "number"
          ? 4
          : n === "select"
          ? 5
          : n === "autocomplete"
          ? 6
          : -1
      ),
      d(5),
      w(a.getErrorMessage(e.formControlName, e.label)),
      d(),
      E(e.formControlName === "academicYear" ? 9 : -1),
      d(),
      E(e.hint ? 10 : -1);
  }
}
function Lr(i, r) {
  if (
    (i & 1 &&
      A(0, Mr, 2, 2, "mat-checkbox", 26)(1, Ir, 11, 6, "mat-form-field", 27)(
        2,
        Nr,
        11,
        5,
        "mat-form-field",
        27
      ),
    i & 2)
  ) {
    let n,
      e = r.$implicit;
    E((n = e.type) === "checkbox" ? 0 : n === "date" ? 1 : 2);
  }
}
function Yr(i, r) {
  if ((i & 1 && q(0, Lr, 3, 1, null, null, ue), i & 2)) {
    let n = m(2);
    $(n.data.fields);
  }
}
function jr(i, r) {
  if ((i & 1 && (h(0, "form", 6), A(1, Ar, 2, 0)(2, Yr, 2, 0), l()), i & 2)) {
    let n = m();
    p("formGroup", n.form), d(), E(n.data.useHorizontalLayout ? 1 : 2);
  }
}
function Br(i, r) {
  if (
    (i & 1 &&
      (h(0, "div", 7)(1, "div", 33)(2, "mat-icon"),
      _(3),
      l(),
      h(4, "span"),
      _(5),
      l()()()),
    i & 2)
  ) {
    let n = m();
    d(),
      p("ngClass", ua(3, hr, n.isConflict, !n.isConflict)),
      d(2),
      w(n.isConflict ? "error" : "check_circle"),
      d(2),
      w(
        n.isConflict
          ? "Warning: Schedule conflicts have been detected. "
          : "No scheduling conflicts have been detected."
      );
  }
}
function zr(i, r) {
  if (i & 1) {
    let n = V();
    h(0, "button", 34),
      b("click", function () {
        f(n);
        let a = m();
        return v(a.onExport());
      }),
      _(1, " Export "),
      l();
  }
  if (i & 2) {
    let n = m();
    p("disabled", n.form.invalid);
  }
}
function Hr(i, r) {
  i & 1 && C(0, "mat-spinner", 35), i & 2 && p("diameter", 23);
}
function qr(i, r) {
  if ((i & 1 && (h(0, "span"), _(1), l()), i & 2)) {
    let n = m(2);
    d(), w(n.data.isEdit ? "Update" : "Confirm");
  }
}
function $r(i, r) {
  if (i & 1) {
    let n = V();
    h(0, "button", 34),
      b("click", function () {
        f(n);
        let a = m();
        return v(a.onSave());
      }),
      A(1, Hr, 1, 1, "mat-spinner", 35)(2, qr, 2, 1, "span"),
      l();
  }
  if (i & 2) {
    let n = m();
    p("disabled", n.form.invalid || !n.hasFormChanged() || n.isLoading),
      d(),
      E(n.isLoading ? 1 : 2);
  }
}
var bd = (() => {
  class i {
    fb;
    dialogRef;
    cdr;
    router;
    adminService;
    data;
    form;
    isLoading = !1;
    isExportDialog;
    isEditDialog = !1;
    isConflict = !1;
    customExportOptions = null;
    filteredOptions = {};
    initialFormValues;
    startTimeChange = new u();
    constructor(n, e, a, t, o, s) {
      (this.fb = n),
        (this.dialogRef = e),
        (this.cdr = a),
        (this.router = t),
        (this.adminService = o),
        (this.data = s),
        this.initializeComponent();
    }
    initializeComponent() {
      (this.form = this.fb.group({})),
        (this.isExportDialog = this.data.isExportDialog || !1),
        (this.customExportOptions = this.data.customExportOptions || null),
        (this.isEditDialog = this.data.title === "Edit Schedule Details"),
        this.data.isManageList || this.initForm();
    }
    initForm() {
      this.isExportDialog ? this.initExportForm() : this.initRegularForm(),
        this.initStartTimeControl(),
        this.addDateValidation(),
        this.cdr.markForCheck();
    }
    initExportForm() {
      this.form = this.fb.group({ exportOption: ["all", U.required] });
    }
    initRegularForm() {
      if (
        (this.form.reset(),
        this.data.fields.forEach(this.addFormControl.bind(this)),
        (this.initialFormValues = this.form.getRawValue()),
        this.data.title === "Admin" && !this.data.isEdit)
      ) {
        let n = this.form.get("role"),
          e = this.form.get("code");
        n &&
          e &&
          (n.valueChanges.subscribe((a) => {
            a && this.generateAdminCode(a);
          }),
          e.disable());
      }
      this.trackFormChanges();
    }
    trackFormChanges() {
      this.form.valueChanges.subscribe(() => {
        this.cdr.markForCheck();
      });
    }
    hasFormChanged() {
      return (
        JSON.stringify(this.form.getRawValue()) !==
        JSON.stringify(this.initialFormValues)
      );
    }
    addFormControl(n) {
      let e = this.getValidators(n),
        a = this.data.initialValue?.[n.formControlName] || "";
      n.type === "date" && a && (a = new Date(a));
      let t = this.fb.control(a, { validators: e });
      n.disabled && t.disable(),
        this.form.addControl(n.formControlName, t),
        n.type === "autocomplete" && this.initAutocompleteOptions(n),
        n.confirmPassword &&
          t.setValidators([...e, this.passwordMatchValidator.bind(this)]);
    }
    generateAdminCode(n) {
      let e = this.form.get("code");
      e &&
        this.adminService.getNextAdminCode(n).subscribe({
          next: (a) => {
            e.setValue(a), this.cdr.markForCheck();
          },
          error: (a) => {
            console.error("Error generating admin code:", a);
          },
        });
    }
    initAutocompleteOptions(n) {
      this.filteredOptions[n.formControlName] = n.options?.map(String) || [];
    }
    initStartTimeControl() {
      let n = this.form.get("startTime");
      n &&
        n.valueChanges.subscribe((e) => {
          this.startTimeChange.emit(e);
        });
    }
    updateEndTimeOptions(n) {
      let e = this.data.fields.find((a) => a.formControlName === "endTime");
      if (e) {
        e.options = n;
        let a = this.form.get("endTime");
        a &&
          (a.setValue(""),
          (this.filteredOptions.endTime = n),
          this.cdr.markForCheck());
      }
    }
    getValidators(n) {
      let e = [];
      return (
        n.required && e.push(U.required),
        n.maxLength && e.push(U.maxLength(n.maxLength)),
        n.type === "text" && e.push(this.noWhitespaceValidator),
        n.type === "number" && e.push(U.pattern(/^\d{1,2}$/)),
        n.min !== void 0 && e.push(U.min(n.min)),
        n.max !== void 0 && e.push(U.max(n.max)),
        n.maxLength === 4 && e.push(U.minLength(4), U.pattern(/^\d{4}$/)),
        e
      );
    }
    noWhitespaceValidator(n) {
      let e = n.value;
      return !(typeof e == "string" && e.trim().length === 0) || !e
        ? null
        : { whitespace: !0 };
    }
    addDateValidation() {
      let n = this.form.get("startDate"),
        e = this.form.get("endDate");
      n &&
        e &&
        (n.valueChanges.subscribe(() => {
          e.updateValueAndValidity();
        }),
        e.setValidators([U.required, this.endDateValidator.bind(this)]));
    }
    endDateValidator(n) {
      let e = n.value,
        a = this.form.get("startDate")?.value;
      return e && a && new Date(e) < new Date(a)
        ? { endDateBeforeStartDate: !0 }
        : null;
    }
    passwordMatchValidator(n) {
      let e = this.form.get("password")?.value,
        a = n.value;
      return e === a ? null : { passwordMismatch: !0 };
    }
    getErrorMessage(n, e) {
      let a = this.form.get(n);
      return a
        ? a.hasError("required")
          ? `${e} is required.`
          : a.hasError("maxlength")
          ? `${e} cannot exceed ${
              a.getError("maxlength").requiredLength
            } characters.`
          : a.hasError("minlength")
          ? `${e} must be exactly ${
              a.getError("minlength").requiredLength
            } characters.`
          : a.hasError("pattern")
          ? a.getError("pattern").requiredPattern === "/^\\d{4}$/"
            ? `${e} must be exactly 4 digits.`
            : `${e} must be a number with up to two digits.`
          : a.hasError("min")
          ? `${e} must be greater than the minimum value.`
          : a.hasError("max")
          ? `${e} cannot exceed the maximum value.`
          : a.hasError("whitespace")
          ? `Your ${e} is invalid.`
          : a.hasError("endDateBeforeStartDate")
          ? "End Date cannot be earlier than Start Date."
          : a.hasError("passwordMismatch")
          ? "Passwords do not match."
          : ""
        : "";
    }
    navigateToAcademicYear() {
      this.dialogRef.close(), this.router.navigate(["/admin/academic-years"]);
    }
    filterOptions(n) {
      let e = this.form.get(n.formControlName)?.value;
      n.filter
        ? (this.filteredOptions[n.formControlName] = n.filter(e))
        : (this.filteredOptions[n.formControlName] =
            n.options?.filter((a) =>
              String(a).toLowerCase().includes(e.toLowerCase())
            ) || []),
        this.cdr.markForCheck();
    }
    onExport() {
      this.form.valid && this.dialogRef.close(this.form.value.exportOption);
    }
    onSave() {
      if (this.form.valid) {
        this.isLoading = !0;
        let n = this.form.get("code");
        n?.disabled && n.enable();
        let e = this.form.value,
          a = 500,
          t = Date.now();
        (this.dialogRef.disableClose = !0),
          (() => {
            let s = Date.now() - t,
              g = a - s;
            setTimeout(() => {
              (this.isLoading = !1),
                (this.dialogRef.disableClose = !1),
                this.dialogRef.close(e);
            }, Math.max(g, 0));
          })();
      }
    }
    onCancel() {
      this.dialogRef.close(null);
    }
    onDeleteYear(n) {
      this.dialogRef.close({ deletedYear: n });
    }
    static ɵfac = function (e) {
      return new (e || i)(c(si), c($a), c(M), c(va), c(xi), c(Ga));
    };
    static ɵcmp = S({
      type: i,
      selectors: [["app-table-dialog"]],
      outputs: { startTimeChange: "startTimeChange" },
      standalone: !0,
      features: [L([Ta()]), T],
      decls: 14,
      vars: 5,
      consts: [
        ["picker", ""],
        ["auto", "matAutocomplete"],
        [1, "table-dialog-container"],
        ["mat-dialog-title", "", 1, "table-dialog-title"],
        ["mat-dialog-content", "", 1, "table-dialog-content"],
        [1, "academic-year-list"],
        [1, "dialog-form", 3, "formGroup"],
        [1, "schedule-validator"],
        ["mat-dialog-actions", "", 1, "table-dialog-button"],
        ["mat-button", "", 1, "cancel-button", 3, "click"],
        [
          "mat-flat-button",
          "",
          "color",
          "primary",
          1,
          "action-button",
          3,
          "disabled",
        ],
        [1, "academic-year-item"],
        ["mat-button", "", 1, "delete-acad-item", 3, "click"],
        ["formControlName", "exportOption"],
        ["value", "all"],
        ["value", "current"],
        [1, "horizontal-field-container"],
        ["appearance", "fill", 1, "form-field", "horizontal-field"],
        [3, "ngSwitch"],
        ["matInput", "", 3, "formControlName", "maxlength", 4, "ngSwitchCase"],
        [
          "matInput",
          "",
          "type",
          "number",
          3,
          "formControlName",
          "min",
          "max",
          4,
          "ngSwitchCase",
        ],
        [3, "formControlName", 4, "ngSwitchCase"],
        ["matInput", "", 3, "formControlName", "maxlength"],
        ["matInput", "", "type", "number", 3, "formControlName", "min", "max"],
        [3, "formControlName"],
        [3, "value"],
        [1, "checkbox", 3, "formControlName"],
        ["appearance", "fill", 1, "form-field"],
        ["matInput", "", 3, "formControlName", "matDatepicker", "min"],
        ["matIconSuffix", "", 3, "for"],
        [
          "matInput",
          "",
          "type",
          "number",
          "appTwoDigitInput",
          "",
          3,
          "formControlName",
          "min",
          "max",
        ],
        [
          "type",
          "text",
          "matInput",
          "",
          3,
          "input",
          "formControlName",
          "matAutocomplete",
        ],
        [1, "academic-year-hint", 3, "click"],
        [1, "validation-message", 3, "ngClass"],
        [
          "mat-flat-button",
          "",
          "color",
          "primary",
          1,
          "action-button",
          3,
          "click",
          "disabled",
        ],
        ["strokeWidth", "2.25", 1, "custom-spinner", 3, "diameter"],
      ],
      template: function (e, a) {
        e & 1 &&
          (h(0, "div", 2)(1, "h2", 3)(2, "span"),
          _(3),
          l()(),
          h(4, "div", 4),
          A(5, pr, 3, 0, "div", 5)(6, ur, 6, 3, "form", 6)(
            7,
            jr,
            3,
            2,
            "form",
            6
          )(8, Br, 6, 6, "div", 7),
          l(),
          h(9, "div", 8)(10, "button", 9),
          b("click", function () {
            return a.onCancel();
          }),
          _(11, " Cancel "),
          l(),
          A(12, zr, 2, 1, "button", 10)(13, $r, 3, 2, "button", 10),
          l()()),
          e & 2 &&
            (d(3),
            w(a.isExportDialog ? "Export to PDF" : a.data.title),
            d(2),
            E(a.data.isManageList ? 5 : -1),
            d(),
            E(a.isExportDialog ? 6 : 7),
            d(2),
            E(a.isEditDialog ? 8 : -1),
            d(4),
            E(a.isExportDialog ? 12 : 13));
      },
      dependencies: [
        _e,
        lt,
        _a,
        ga,
        di,
        ei,
        Xa,
        ti,
        Za,
        Ja,
        oi,
        ri,
        ni,
        ai,
        ii,
        gi,
        _i,
        hi,
        pi,
        mi,
        ui,
        ki,
        yi,
        fi,
        bi,
        ut,
        vt,
        qe,
        qa,
        Wa,
        Ua,
        Qa,
        Ka,
        Mi,
        Ht,
        Dt,
        Ei,
        xt,
        Fi,
        Vi,
        Gt,
        Di,
        Ci,
        li,
        ci,
        Xi,
        Wi,
        Et,
        ia,
        Zi,
      ],
      styles: [
        ".table-dialog-container[_ngcontent-%COMP%]{max-width:var(--dialog-base)}[_nghost-%COMP%]   .custom-spinner[_ngcontent-%COMP%]{--mdc-circular-progress-active-indicator-color: var(--primary-text)}.table-dialog-title[_ngcontent-%COMP%]{font-family:Inter Tight,sans-serif!important;color:var(--primary-text)!important}.table-dialog-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500}.table-dialog-content[_ngcontent-%COMP%]   .academic-year-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--spacing-sm);width:100%;font-size:var(--font-size-md)}.table-dialog-content[_ngcontent-%COMP%]   .academic-year-list[_ngcontent-%COMP%]   .academic-year-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:0;width:inherit}.table-dialog-content[_ngcontent-%COMP%]   .academic-year-list[_ngcontent-%COMP%]   .academic-year-item[_ngcontent-%COMP%]   .delete-acad-item[_ngcontent-%COMP%]{color:var(--primary-text);display:flex;flex-direction:row;align-items:center;justify-content:center;gap:0;cursor:pointer}.table-dialog-content[_ngcontent-%COMP%]   .dialog-form[_ngcontent-%COMP%]{padding:var(--spacing-sm) 0 0 0}.table-dialog-content[_ngcontent-%COMP%]   .dialog-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]{width:100%;padding:var(--spacing-xxs) 0}.table-dialog-content[_ngcontent-%COMP%]   .dialog-form[_ngcontent-%COMP%]   .horizontal-field-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:flex-start;justify-content:space-between;gap:var(--spacing-sm)}.table-dialog-content[_ngcontent-%COMP%]   .dialog-form[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{display:block;margin-bottom:var(--spacing-md)}.table-dialog-content[_ngcontent-%COMP%]   .dialog-form[_ngcontent-%COMP%]   .academic-year-hint[_ngcontent-%COMP%]{cursor:pointer;color:var(--primary-text)}.table-dialog-content[_ngcontent-%COMP%]   .validation-message[_ngcontent-%COMP%]{gap:0;font-size:var(--font-size-sm);display:flex;flex-direction:row;align-items:center;justify-content:center;gap:var(--spacing-xxs)}.table-dialog-content[_ngcontent-%COMP%]   .validation-message[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:0;font-size:var(--font-size-md)}.table-dialog-content[_ngcontent-%COMP%]   .conflict[_ngcontent-%COMP%]{color:var(--primary-text)}.table-dialog-content[_ngcontent-%COMP%]   .no-conflict[_ngcontent-%COMP%]{color:var(--secondary-text)}.table-dialog-button[_ngcontent-%COMP%]{padding-bottom:var(--spacing-lg)}.table-dialog-button[_ngcontent-%COMP%]   .cancel-button[_ngcontent-%COMP%]{color:var(--primary-text)!important}.table-dialog-button[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]:disabled{color:var(--neutral-base)!important;opacity:var(--opacity-semi-opaque)}",
      ],
      changeDetection: 0,
    });
  }
  return i;
})();
export { xt as a, Vi as b, Gt as c, Fi as d, xi as e, bd as f };