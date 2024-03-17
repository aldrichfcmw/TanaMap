!(function (t, e) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var i = e();
        for (var s in i) ("object" == typeof exports ? exports : t)[s] = i[s];
    }
})(self, function () {
    return (function () {
        var t = {
                8634: function (t) {
                    t.exports = (function () {
                        "use strict";
                        function t(t, e) {
                            var i = Object.keys(t);
                            if (Object.getOwnPropertySymbols) {
                                var s = Object.getOwnPropertySymbols(t);
                                e &&
                                    (s = s.filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(
                                            t,
                                            e
                                        ).enumerable;
                                    })),
                                    i.push.apply(i, s);
                            }
                            return i;
                        }
                        function e(e) {
                            for (var s = 1; s < arguments.length; s++) {
                                var a =
                                    null != arguments[s] ? arguments[s] : {};
                                s % 2
                                    ? t(Object(a), !0).forEach(function (t) {
                                          i(e, t, a[t]);
                                      })
                                    : Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(
                                          e,
                                          Object.getOwnPropertyDescriptors(a)
                                      )
                                    : t(Object(a)).forEach(function (t) {
                                          Object.defineProperty(
                                              e,
                                              t,
                                              Object.getOwnPropertyDescriptor(
                                                  a,
                                                  t
                                              )
                                          );
                                      });
                            }
                            return e;
                        }
                        function i(t, e, i) {
                            return (
                                (e = (function (t) {
                                    var e = (function (t, e) {
                                        if ("object" != typeof t || null === t)
                                            return t;
                                        var i = t[Symbol.toPrimitive];
                                        if (void 0 !== i) {
                                            var s = i.call(t, "string");
                                            if ("object" != typeof s) return s;
                                            throw new TypeError(
                                                "@@toPrimitive must return a primitive value."
                                            );
                                        }
                                        return String(t);
                                    })(t);
                                    return "symbol" == typeof e ? e : String(e);
                                })(e)) in t
                                    ? Object.defineProperty(t, e, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (t[e] = i),
                                t
                            );
                        }
                        const s = (t, e, i, s) => (
                                (t = "" + t),
                                (e = "" + e),
                                s && ((t = t.trim()), (e = e.trim())),
                                i ? t == e : t.toLowerCase() == e.toLowerCase()
                            ),
                            a = (t, e) =>
                                t && Array.isArray(t) && t.map((t) => n(t, e));
                        function n(t, e) {
                            var i,
                                s = {};
                            for (i in t) e.indexOf(i) < 0 && (s[i] = t[i]);
                            return s;
                        }
                        function o(t) {
                            var e = document.createElement("div");
                            return t.replace(/\&#?[0-9a-z]+;/gi, function (t) {
                                return (e.innerHTML = t), e.innerText;
                            });
                        }
                        function r(t) {
                            return new DOMParser().parseFromString(
                                t.trim(),
                                "text/html"
                            ).body.firstElementChild;
                        }
                        function l(t, e) {
                            for (e = e || "previous"; (t = t[e + "Sibling"]); )
                                if (3 == t.nodeType) return t;
                        }
                        function d(t) {
                            return "string" == typeof t
                                ? t
                                      .replace(/&/g, "&amp;")
                                      .replace(/</g, "&lt;")
                                      .replace(/>/g, "&gt;")
                                      .replace(/"/g, "&quot;")
                                      .replace(/`|'/g, "&#039;")
                                : t;
                        }
                        function h(t) {
                            var e = Object.prototype.toString
                                .call(t)
                                .split(" ")[1]
                                .slice(0, -1);
                            return (
                                t === Object(t) &&
                                "Array" != e &&
                                "Function" != e &&
                                "RegExp" != e &&
                                "HTMLUnknownElement" != e
                            );
                        }
                        function g(t, e, i) {
                            function s(t, e) {
                                for (var i in e)
                                    if (e.hasOwnProperty(i)) {
                                        if (h(e[i])) {
                                            h(t[i])
                                                ? s(t[i], e[i])
                                                : (t[i] = Object.assign(
                                                      {},
                                                      e[i]
                                                  ));
                                            continue;
                                        }
                                        if (Array.isArray(e[i])) {
                                            t[i] = Object.assign([], e[i]);
                                            continue;
                                        }
                                        t[i] = e[i];
                                    }
                            }
                            return (
                                t instanceof Object || (t = {}),
                                s(t, e),
                                i && s(t, i),
                                t
                            );
                        }
                        function p() {
                            const t = [],
                                e = {};
                            for (let i of arguments)
                                for (let s of i)
                                    h(s)
                                        ? e[s.value] ||
                                          (t.push(s), (e[s.value] = 1))
                                        : t.includes(s) || t.push(s);
                            return t;
                        }
                        function c(t) {
                            return String.prototype.normalize
                                ? "string" == typeof t
                                    ? t
                                          .normalize("NFD")
                                          .replace(/[\u0300-\u036f]/g, "")
                                    : void 0
                                : t;
                        }
                        var u = () =>
                            /(?=.*chrome)(?=.*android)/i.test(
                                navigator.userAgent
                            );
                        function m() {
                            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
                                /[018]/g,
                                (t) =>
                                    (
                                        t ^
                                        (crypto.getRandomValues(
                                            new Uint8Array(1)
                                        )[0] &
                                            (15 >> (t / 4)))
                                    ).toString(16)
                            );
                        }
                        function v(t) {
                            return (
                                t &&
                                t.classList &&
                                t.classList.contains(
                                    this.settings.classNames.tag
                                )
                            );
                        }
                        function f(t, e) {
                            var i = window.getSelection();
                            return (
                                (e = e || i.getRangeAt(0)),
                                "string" == typeof t &&
                                    (t = document.createTextNode(t)),
                                e && (e.deleteContents(), e.insertNode(t)),
                                t
                            );
                        }
                        function T(t, e, i) {
                            return t
                                ? (e &&
                                      (t.__tagifyTagData = i
                                          ? e
                                          : g({}, t.__tagifyTagData || {}, e)),
                                  t.__tagifyTagData)
                                : (console.warn(
                                      "tag element doesn't exist",
                                      t,
                                      e
                                  ),
                                  e);
                        }
                        function w(t) {
                            if (t && t.parentNode) {
                                var e = t,
                                    i = window.getSelection(),
                                    s = i.getRangeAt(0);
                                i.rangeCount &&
                                    (s.setStartAfter(e),
                                    s.collapse(!0),
                                    i.removeAllRanges(),
                                    i.addRange(s));
                            }
                        }
                        function b(t, e) {
                            t.forEach((t) => {
                                if (
                                    T(t.previousSibling) ||
                                    !t.previousSibling
                                ) {
                                    var i = document.createTextNode("​");
                                    t.before(i), e && w(i);
                                }
                            });
                        }
                        var y = {
                            delimiters: ",",
                            pattern: null,
                            tagTextProp: "value",
                            maxTags: 1 / 0,
                            callbacks: {},
                            addTagOnBlur: !0,
                            addTagOn: ["blur", "tab", "enter"],
                            onChangeAfterBlur: !0,
                            duplicates: !1,
                            whitelist: [],
                            blacklist: [],
                            enforceWhitelist: !1,
                            userInput: !0,
                            keepInvalidTags: !1,
                            createInvalidTags: !0,
                            mixTagsAllowedAfter: /,|\.|\:|\s/,
                            mixTagsInterpolator: ["[[", "]]"],
                            backspace: !0,
                            skipInvalid: !1,
                            pasteAsTags: !0,
                            editTags: {
                                clicks: 2,
                                keepInvalid: !0,
                            },
                            transformTag: () => {},
                            trim: !0,
                            a11y: {
                                focusableTags: !1,
                            },
                            mixMode: {
                                insertAfterTag: " ",
                            },
                            autoComplete: {
                                enabled: !0,
                                rightKey: !1,
                                tabKey: !1,
                            },
                            classNames: {
                                namespace: "tagify",
                                mixMode: "tagify--mix",
                                selectMode: "tagify--select",
                                input: "tagify__input",
                                focus: "tagify--focus",
                                tagNoAnimation: "tagify--noAnim",
                                tagInvalid: "tagify--invalid",
                                tagNotAllowed: "tagify--notAllowed",
                                scopeLoading: "tagify--loading",
                                hasMaxTags: "tagify--hasMaxTags",
                                hasNoTags: "tagify--noTags",
                                empty: "tagify--empty",
                                inputInvalid: "tagify__input--invalid",
                                dropdown: "tagify__dropdown",
                                dropdownWrapper: "tagify__dropdown__wrapper",
                                dropdownHeader: "tagify__dropdown__header",
                                dropdownFooter: "tagify__dropdown__footer",
                                dropdownItem: "tagify__dropdown__item",
                                dropdownItemActive:
                                    "tagify__dropdown__item--active",
                                dropdownItemHidden:
                                    "tagify__dropdown__item--hidden",
                                dropdownInital: "tagify__dropdown--initial",
                                tag: "tagify__tag",
                                tagText: "tagify__tag-text",
                                tagX: "tagify__tag__removeBtn",
                                tagLoading: "tagify__tag--loading",
                                tagEditing: "tagify__tag--editable",
                                tagFlash: "tagify__tag--flash",
                                tagHide: "tagify__tag--hide",
                            },
                            dropdown: {
                                classname: "",
                                enabled: 2,
                                maxItems: 10,
                                searchKeys: ["value", "searchBy"],
                                fuzzySearch: !0,
                                caseSensitive: !1,
                                accentedSearch: !0,
                                includeSelectedTags: !1,
                                escapeHTML: !0,
                                highlightFirst: !1,
                                closeOnSelect: !0,
                                clearOnSelect: !0,
                                position: "all",
                                appendTarget: null,
                            },
                            hooks: {
                                beforeRemoveTag: () => Promise.resolve(),
                                beforePaste: () => Promise.resolve(),
                                suggestionClick: () => Promise.resolve(),
                                beforeKeyDown: () => Promise.resolve(),
                            },
                        };
                        function x() {
                            this.dropdown = {};
                            for (let t in this._dropdown)
                                this.dropdown[t] =
                                    "function" == typeof this._dropdown[t]
                                        ? this._dropdown[t].bind(this)
                                        : this._dropdown[t];
                            this.dropdown.refs();
                        }
                        var O = {
                            refs() {
                                (this.DOM.dropdown = this.parseTemplate(
                                    "dropdown",
                                    [this.settings]
                                )),
                                    (this.DOM.dropdown.content =
                                        this.DOM.dropdown.querySelector(
                                            "[data-selector='tagify-suggestions-wrapper']"
                                        ));
                            },
                            getHeaderRef() {
                                return this.DOM.dropdown.querySelector(
                                    "[data-selector='tagify-suggestions-header']"
                                );
                            },
                            getFooterRef() {
                                return this.DOM.dropdown.querySelector(
                                    "[data-selector='tagify-suggestions-footer']"
                                );
                            },
                            getAllSuggestionsRefs() {
                                return [
                                    ...this.DOM.dropdown.content.querySelectorAll(
                                        this.settings.classNames
                                            .dropdownItemSelector
                                    ),
                                ];
                            },
                            show(t) {
                                var e,
                                    i,
                                    a,
                                    n = this.settings,
                                    o = "mix" == n.mode && !n.enforceWhitelist,
                                    r = !n.whitelist || !n.whitelist.length,
                                    l = "manual" == n.dropdown.position;
                                if (
                                    ((t =
                                        void 0 === t
                                            ? this.state.inputText
                                            : t),
                                    !(
                                        (r &&
                                            !o &&
                                            !n.templates.dropdownItemNoMatch) ||
                                        !1 === n.dropdown.enable ||
                                        this.state.isLoading ||
                                        this.settings.readonly
                                    ))
                                ) {
                                    if (
                                        (clearTimeout(
                                            this.dropdownHide__bindEventsTimeout
                                        ),
                                        (this.suggestedListItems =
                                            this.dropdown.filterListItems(t)),
                                        t &&
                                            !this.suggestedListItems.length &&
                                            (this.trigger(
                                                "dropdown:noMatch",
                                                t
                                            ),
                                            n.templates.dropdownItemNoMatch &&
                                                (a =
                                                    n.templates.dropdownItemNoMatch.call(
                                                        this,
                                                        {
                                                            value: t,
                                                        }
                                                    ))),
                                        !a)
                                    ) {
                                        if (this.suggestedListItems.length)
                                            t &&
                                                o &&
                                                !this.state.editing.scope &&
                                                !s(
                                                    this.suggestedListItems[0]
                                                        .value,
                                                    t
                                                ) &&
                                                this.suggestedListItems.unshift(
                                                    {
                                                        value: t,
                                                    }
                                                );
                                        else {
                                            if (
                                                !t ||
                                                !o ||
                                                this.state.editing.scope
                                            )
                                                return (
                                                    this.input.autocomplete.suggest.call(
                                                        this
                                                    ),
                                                    void this.dropdown.hide()
                                                );
                                            this.suggestedListItems = [
                                                {
                                                    value: t,
                                                },
                                            ];
                                        }
                                        (i =
                                            "" +
                                            (h((e = this.suggestedListItems[0]))
                                                ? e.value
                                                : e)),
                                            n.autoComplete &&
                                                i &&
                                                0 == i.indexOf(t) &&
                                                this.input.autocomplete.suggest.call(
                                                    this,
                                                    e
                                                );
                                    }
                                    this.dropdown.fill(a),
                                        n.dropdown.highlightFirst &&
                                            this.dropdown.highlightOption(
                                                this.DOM.dropdown.content.querySelector(
                                                    n.classNames
                                                        .dropdownItemSelector
                                                )
                                            ),
                                        this.state.dropdown.visible ||
                                            setTimeout(
                                                this.dropdown.events.binding.bind(
                                                    this
                                                )
                                            ),
                                        (this.state.dropdown.visible = t || !0),
                                        (this.state.dropdown.query = t),
                                        this.setStateSelection(),
                                        l ||
                                            setTimeout(() => {
                                                this.dropdown.position(),
                                                    this.dropdown.render();
                                            }),
                                        setTimeout(() => {
                                            this.trigger(
                                                "dropdown:show",
                                                this.DOM.dropdown
                                            );
                                        });
                                }
                            },
                            hide(t) {
                                var e = this.DOM,
                                    i = e.scope,
                                    s = e.dropdown,
                                    a =
                                        "manual" ==
                                            this.settings.dropdown.position &&
                                        !t;
                                if (s && document.body.contains(s) && !a)
                                    return (
                                        window.removeEventListener(
                                            "resize",
                                            this.dropdown.position
                                        ),
                                        this.dropdown.events.binding.call(
                                            this,
                                            !1
                                        ),
                                        i.setAttribute("aria-expanded", !1),
                                        s.parentNode.removeChild(s),
                                        setTimeout(() => {
                                            this.state.dropdown.visible = !1;
                                        }, 100),
                                        (this.state.dropdown.query =
                                            this.state.ddItemData =
                                            this.state.ddItemElm =
                                            this.state.selection =
                                                null),
                                        this.state.tag &&
                                            this.state.tag.value.length &&
                                            (this.state.flaggedTags[
                                                this.state.tag.baseOffset
                                            ] = this.state.tag),
                                        this.trigger("dropdown:hide", s),
                                        this
                                    );
                            },
                            toggle(t) {
                                this.dropdown[
                                    this.state.dropdown.visible && !t
                                        ? "hide"
                                        : "show"
                                ]();
                            },
                            render() {
                                var t,
                                    e,
                                    i =
                                        (((e = this.DOM.dropdown.cloneNode(
                                            !0
                                        )).style.cssText =
                                            "position:fixed; top:-9999px; opacity:0"),
                                        document.body.appendChild(e),
                                        (t = e.clientHeight),
                                        e.parentNode.removeChild(e),
                                        t),
                                    s = this.settings;
                                return "number" == typeof s.dropdown.enabled &&
                                    s.dropdown.enabled >= 0
                                    ? (this.DOM.scope.setAttribute(
                                          "aria-expanded",
                                          !0
                                      ),
                                      document.body.contains(
                                          this.DOM.dropdown
                                      ) ||
                                          (this.DOM.dropdown.classList.add(
                                              s.classNames.dropdownInital
                                          ),
                                          this.dropdown.position(i),
                                          s.dropdown.appendTarget.appendChild(
                                              this.DOM.dropdown
                                          ),
                                          setTimeout(() =>
                                              this.DOM.dropdown.classList.remove(
                                                  s.classNames.dropdownInital
                                              )
                                          )),
                                      this)
                                    : this;
                            },
                            fill(t) {
                                t =
                                    "string" == typeof t
                                        ? t
                                        : this.dropdown.createListHTML(
                                              t || this.suggestedListItems
                                          );
                                var e,
                                    i =
                                        this.settings.templates.dropdownContent.call(
                                            this,
                                            t
                                        );
                                this.DOM.dropdown.content.innerHTML = (e = i)
                                    ? e
                                          .replace(/\>[\r\n ]+\</g, "><")
                                          .split(/>\s+</)
                                          .join("><")
                                          .trim()
                                    : "";
                            },
                            fillHeaderFooter() {
                                var t = this.dropdown.filterListItems(
                                        this.state.dropdown.query
                                    ),
                                    e = this.parseTemplate("dropdownHeader", [
                                        t,
                                    ]),
                                    i = this.parseTemplate("dropdownFooter", [
                                        t,
                                    ]),
                                    s = this.dropdown.getHeaderRef(),
                                    a = this.dropdown.getFooterRef();
                                e && s?.parentNode.replaceChild(e, s),
                                    i && a?.parentNode.replaceChild(i, a);
                            },
                            refilter(t) {
                                (t = t || this.state.dropdown.query || ""),
                                    (this.suggestedListItems =
                                        this.dropdown.filterListItems(t)),
                                    this.dropdown.fill(),
                                    this.suggestedListItems.length ||
                                        this.dropdown.hide(),
                                    this.trigger(
                                        "dropdown:updated",
                                        this.DOM.dropdown
                                    );
                            },
                            position(t) {
                                var e = this.settings.dropdown;
                                if ("manual" != e.position) {
                                    var i,
                                        s,
                                        a,
                                        n,
                                        o,
                                        r,
                                        l,
                                        d,
                                        h,
                                        g = this.DOM.dropdown,
                                        p = e.RTL,
                                        c = e.appendTarget === document.body,
                                        u = c
                                            ? window.pageYOffset
                                            : e.appendTarget.scrollTop,
                                        m =
                                            document.fullscreenElement ||
                                            document.webkitFullscreenElement ||
                                            document.documentElement,
                                        v = m.clientHeight,
                                        f =
                                            Math.max(
                                                m.clientWidth || 0,
                                                window.innerWidth || 0
                                            ) > 480
                                                ? e.position
                                                : "all",
                                        T =
                                            this.DOM[
                                                "input" == f ? "input" : "scope"
                                            ];
                                    if (
                                        ((t = t || g.clientHeight),
                                        this.state.dropdown.visible)
                                    ) {
                                        if (
                                            ("text" == f
                                                ? ((a = (i = (function () {
                                                      const t =
                                                          document.getSelection();
                                                      if (t.rangeCount) {
                                                          const e =
                                                                  t.getRangeAt(
                                                                      0
                                                                  ),
                                                              i =
                                                                  e.startContainer,
                                                              s = e.startOffset;
                                                          let a, n;
                                                          if (s > 0)
                                                              return (
                                                                  (n =
                                                                      document.createRange()),
                                                                  n.setStart(
                                                                      i,
                                                                      s - 1
                                                                  ),
                                                                  n.setEnd(
                                                                      i,
                                                                      s
                                                                  ),
                                                                  (a =
                                                                      n.getBoundingClientRect()),
                                                                  {
                                                                      left: a.right,
                                                                      top: a.top,
                                                                      bottom: a.bottom,
                                                                  }
                                                              );
                                                          if (
                                                              i.getBoundingClientRect
                                                          )
                                                              return i.getBoundingClientRect();
                                                      }
                                                      return {
                                                          left: -9999,
                                                          top: -9999,
                                                      };
                                                  })()).bottom),
                                                  (s = i.top),
                                                  (n = i.left),
                                                  (o = "auto"))
                                                : ((r = (function (t) {
                                                      for (
                                                          var e = 0, i = 0;
                                                          t && t != m;

                                                      )
                                                          (e +=
                                                              t.offsetTop || 0),
                                                              (i +=
                                                                  t.offsetLeft ||
                                                                  0),
                                                              (t =
                                                                  t.parentNode);
                                                      return {
                                                          top: e,
                                                          left: i,
                                                      };
                                                  })(e.appendTarget)),
                                                  (s =
                                                      (i =
                                                          T.getBoundingClientRect())
                                                          .top - r.top),
                                                  (a = i.bottom - 1 - r.top),
                                                  (n = i.left - r.left),
                                                  (o = i.width + "px")),
                                            !c)
                                        ) {
                                            let t = (function () {
                                                for (
                                                    var t = 0,
                                                        i =
                                                            e.appendTarget
                                                                .parentNode;
                                                    i;

                                                )
                                                    (t += i.scrollTop || 0),
                                                        (i = i.parentNode);
                                                return t;
                                            })();
                                            (s += t), (a += t);
                                        }
                                        (s = Math.floor(s)),
                                            (a = Math.ceil(a)),
                                            (d =
                                                ((l =
                                                    e.placeAbove ??
                                                    v - i.bottom < t)
                                                    ? s
                                                    : a) + u),
                                            (h = `left: ${
                                                n +
                                                ((p && i.width) || 0) +
                                                window.pageXOffset
                                            }px;`),
                                            (g.style.cssText = `${h}; top: ${d}px; min-width: ${o}; max-width: ${o}`),
                                            g.setAttribute(
                                                "placement",
                                                l ? "top" : "bottom"
                                            ),
                                            g.setAttribute("position", f);
                                    }
                                }
                            },
                            events: {
                                binding() {
                                    let t =
                                        !(
                                            arguments.length > 0 &&
                                            void 0 !== arguments[0]
                                        ) || arguments[0];
                                    var e = this.dropdown.events.callbacks,
                                        i = (this.listeners.dropdown = this
                                            .listeners.dropdown || {
                                            position:
                                                this.dropdown.position.bind(
                                                    this,
                                                    null
                                                ),
                                            onKeyDown: e.onKeyDown.bind(this),
                                            onMouseOver:
                                                e.onMouseOver.bind(this),
                                            onMouseLeave:
                                                e.onMouseLeave.bind(this),
                                            onClick: e.onClick.bind(this),
                                            onScroll: e.onScroll.bind(this),
                                        }),
                                        s = t
                                            ? "addEventListener"
                                            : "removeEventListener";
                                    "manual" !=
                                        this.settings.dropdown.position &&
                                        (document[s]("scroll", i.position, !0),
                                        window[s]("resize", i.position),
                                        window[s]("keydown", i.onKeyDown)),
                                        this.DOM.dropdown[s](
                                            "mouseover",
                                            i.onMouseOver
                                        ),
                                        this.DOM.dropdown[s](
                                            "mouseleave",
                                            i.onMouseLeave
                                        ),
                                        this.DOM.dropdown[s](
                                            "mousedown",
                                            i.onClick
                                        ),
                                        this.DOM.dropdown.content[s](
                                            "scroll",
                                            i.onScroll
                                        );
                                },
                                callbacks: {
                                    onKeyDown(t) {
                                        if (
                                            this.state.hasFocus &&
                                            !this.state.composing
                                        ) {
                                            var e = this.settings,
                                                i =
                                                    this.DOM.dropdown.querySelector(
                                                        e.classNames
                                                            .dropdownItemActiveSelector
                                                    ),
                                                s =
                                                    this.dropdown.getSuggestionDataByNode(
                                                        i
                                                    ),
                                                a = "mix" == e.mode;
                                            e.hooks
                                                .beforeKeyDown(t, {
                                                    tagify: this,
                                                })
                                                .then((n) => {
                                                    switch (t.key) {
                                                        case "ArrowDown":
                                                        case "ArrowUp":
                                                        case "Down":
                                                        case "Up":
                                                            t.preventDefault();
                                                            var o =
                                                                    this.dropdown.getAllSuggestionsRefs(),
                                                                r =
                                                                    "ArrowUp" ==
                                                                        t.key ||
                                                                    "Up" ==
                                                                        t.key;
                                                            i &&
                                                                (i =
                                                                    this.dropdown.getNextOrPrevOption(
                                                                        i,
                                                                        !r
                                                                    )),
                                                                (i &&
                                                                    i.matches(
                                                                        e
                                                                            .classNames
                                                                            .dropdownItemSelector
                                                                    )) ||
                                                                    (i =
                                                                        o[
                                                                            r
                                                                                ? o.length -
                                                                                  1
                                                                                : 0
                                                                        ]),
                                                                this.dropdown.highlightOption(
                                                                    i,
                                                                    !0
                                                                );
                                                            break;
                                                        case "Escape":
                                                        case "Esc":
                                                            this.dropdown.hide();
                                                            break;
                                                        case "ArrowRight":
                                                            if (
                                                                this.state
                                                                    .actions
                                                                    .ArrowLeft
                                                            )
                                                                return;
                                                        case "Tab": {
                                                            let n =
                                                                !e.autoComplete
                                                                    .rightKey ||
                                                                !e.autoComplete
                                                                    .tabKey;
                                                            if (
                                                                !a &&
                                                                i &&
                                                                n &&
                                                                !this.state
                                                                    .editing
                                                            ) {
                                                                t.preventDefault();
                                                                var l =
                                                                    this.dropdown.getMappedValue(
                                                                        s
                                                                    );
                                                                return (
                                                                    this.input.autocomplete.set.call(
                                                                        this,
                                                                        l
                                                                    ),
                                                                    !1
                                                                );
                                                            }
                                                            return !0;
                                                        }
                                                        case "Enter":
                                                            t.preventDefault(),
                                                                e.hooks
                                                                    .suggestionClick(
                                                                        t,
                                                                        {
                                                                            tagify: this,
                                                                            tagData:
                                                                                s,
                                                                            suggestionElm:
                                                                                i,
                                                                        }
                                                                    )
                                                                    .then(
                                                                        () => {
                                                                            if (
                                                                                i
                                                                            )
                                                                                return (
                                                                                    this.dropdown.selectOption(
                                                                                        i
                                                                                    ),
                                                                                    (i =
                                                                                        this.dropdown.getNextOrPrevOption(
                                                                                            i,
                                                                                            !r
                                                                                        )),
                                                                                    void this.dropdown.highlightOption(
                                                                                        i
                                                                                    )
                                                                                );
                                                                            this.dropdown.hide(),
                                                                                a ||
                                                                                    this.addTags(
                                                                                        this.state.inputText.trim(),
                                                                                        !0
                                                                                    );
                                                                        }
                                                                    )
                                                                    .catch(
                                                                        (t) => t
                                                                    );
                                                            break;
                                                        case "Backspace": {
                                                            if (
                                                                a ||
                                                                this.state
                                                                    .editing
                                                                    .scope
                                                            )
                                                                return;
                                                            const t =
                                                                this.input.raw.call(
                                                                    this
                                                                );
                                                            ("" != t &&
                                                                8203 !=
                                                                    t.charCodeAt(
                                                                        0
                                                                    )) ||
                                                                (!0 ===
                                                                e.backspace
                                                                    ? this.removeTags()
                                                                    : "edit" ==
                                                                          e.backspace &&
                                                                      setTimeout(
                                                                          this.editTag.bind(
                                                                              this
                                                                          ),
                                                                          0
                                                                      ));
                                                        }
                                                    }
                                                });
                                        }
                                    },
                                    onMouseOver(t) {
                                        var e = t.target.closest(
                                            this.settings.classNames
                                                .dropdownItemSelector
                                        );
                                        this.dropdown.highlightOption(e);
                                    },
                                    onMouseLeave(t) {
                                        this.dropdown.highlightOption();
                                    },
                                    onClick(t) {
                                        if (
                                            0 == t.button &&
                                            t.target != this.DOM.dropdown &&
                                            t.target !=
                                                this.DOM.dropdown.content
                                        ) {
                                            var e = t.target.closest(
                                                    this.settings.classNames
                                                        .dropdownItemSelector
                                                ),
                                                i =
                                                    this.dropdown.getSuggestionDataByNode(
                                                        e
                                                    );
                                            (this.state.actions.selectOption =
                                                !0),
                                                setTimeout(
                                                    () =>
                                                        (this.state.actions.selectOption =
                                                            !1),
                                                    50
                                                ),
                                                this.settings.hooks
                                                    .suggestionClick(t, {
                                                        tagify: this,
                                                        tagData: i,
                                                        suggestionElm: e,
                                                    })
                                                    .then(() => {
                                                        e
                                                            ? this.dropdown.selectOption(
                                                                  e,
                                                                  t
                                                              )
                                                            : this.dropdown.hide();
                                                    })
                                                    .catch((t) =>
                                                        console.warn(t)
                                                    );
                                        }
                                    },
                                    onScroll(t) {
                                        var e = t.target,
                                            i =
                                                (e.scrollTop /
                                                    (e.scrollHeight -
                                                        e.parentNode
                                                            .clientHeight)) *
                                                100;
                                        this.trigger("dropdown:scroll", {
                                            percentage: Math.round(i),
                                        });
                                    },
                                },
                            },
                            getSuggestionDataByNode(t) {
                                var e = t && t.getAttribute("value");
                                return (
                                    this.suggestedListItems.find(
                                        (t) => t.value == e
                                    ) || null
                                );
                            },
                            getNextOrPrevOption(t) {
                                let e =
                                    !(
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                    ) || arguments[1];
                                var i = this.dropdown.getAllSuggestionsRefs(),
                                    s = i.findIndex((e) => e === t);
                                return e ? i[s + 1] : i[s - 1];
                            },
                            highlightOption(t, e) {
                                var i,
                                    s =
                                        this.settings.classNames
                                            .dropdownItemActive;
                                if (
                                    (this.state.ddItemElm &&
                                        (this.state.ddItemElm.classList.remove(
                                            s
                                        ),
                                        this.state.ddItemElm.removeAttribute(
                                            "aria-selected"
                                        )),
                                    !t)
                                )
                                    return (
                                        (this.state.ddItemData = null),
                                        (this.state.ddItemElm = null),
                                        void this.input.autocomplete.suggest.call(
                                            this
                                        )
                                    );
                                (i = this.dropdown.getSuggestionDataByNode(t)),
                                    (this.state.ddItemData = i),
                                    (this.state.ddItemElm = t),
                                    t.classList.add(s),
                                    t.setAttribute("aria-selected", !0),
                                    e &&
                                        (t.parentNode.scrollTop =
                                            t.clientHeight +
                                            t.offsetTop -
                                            t.parentNode.clientHeight),
                                    this.settings.autoComplete &&
                                        (this.input.autocomplete.suggest.call(
                                            this,
                                            i
                                        ),
                                        this.dropdown.position());
                            },
                            selectOption(t, e) {
                                var i = this.settings,
                                    s = i.dropdown,
                                    a = s.clearOnSelect,
                                    n = s.closeOnSelect;
                                if (!t)
                                    return (
                                        this.addTags(this.state.inputText, !0),
                                        void (n && this.dropdown.hide())
                                    );
                                e = e || {};
                                var o = t.getAttribute("value"),
                                    r = "noMatch" == o,
                                    l = this.suggestedListItems.find(
                                        (t) => (t.value ?? t) == o
                                    );
                                if (
                                    (this.trigger("dropdown:select", {
                                        data: l,
                                        elm: t,
                                        event: e,
                                    }),
                                    o && (l || r))
                                ) {
                                    if (this.state.editing) {
                                        let t = this.normalizeTags([l])[0];
                                        (l = i.transformTag.call(this, t) || t),
                                            this.onEditTagDone(
                                                null,
                                                g(
                                                    {
                                                        __isValid: !0,
                                                    },
                                                    l
                                                )
                                            );
                                    } else
                                        this[
                                            "mix" == i.mode
                                                ? "addMixTags"
                                                : "addTags"
                                        ]([l || this.input.raw.call(this)], a);
                                    this.DOM.input.parentNode &&
                                        (setTimeout(() => {
                                            this.DOM.input.focus(),
                                                this.toggleFocusClass(!0);
                                        }),
                                        n &&
                                            setTimeout(
                                                this.dropdown.hide.bind(this)
                                            ),
                                        t.addEventListener(
                                            "transitionend",
                                            () => {
                                                this.dropdown.fillHeaderFooter(),
                                                    setTimeout(
                                                        () => t.remove(),
                                                        100
                                                    );
                                            },
                                            {
                                                once: !0,
                                            }
                                        ),
                                        t.classList.add(
                                            this.settings.classNames
                                                .dropdownItemHidden
                                        ));
                                } else
                                    n &&
                                        setTimeout(
                                            this.dropdown.hide.bind(this)
                                        );
                            },
                            selectAll(t) {
                                (this.suggestedListItems.length = 0),
                                    this.dropdown.hide(),
                                    this.dropdown.filterListItems("");
                                var e = this.dropdown.filterListItems("");
                                return (
                                    t || (e = this.state.dropdown.suggestions),
                                    this.addTags(e, !0),
                                    this
                                );
                            },
                            filterListItems(t, e) {
                                var i,
                                    s,
                                    a,
                                    n,
                                    o,
                                    r = this.settings,
                                    l = r.dropdown,
                                    d = ((e = e || {}), []),
                                    g = [],
                                    p = r.whitelist,
                                    u = l.maxItems >= 0 ? l.maxItems : 1 / 0,
                                    m = l.searchKeys,
                                    v = 0;
                                if (
                                    !(t =
                                        "select" == r.mode &&
                                        this.value.length &&
                                        this.value[0][r.tagTextProp] == t
                                            ? ""
                                            : t) ||
                                    !m.length
                                )
                                    return (
                                        (d = l.includeSelectedTags
                                            ? p
                                            : p.filter(
                                                  (t) =>
                                                      !this.isTagDuplicate(
                                                          h(t) ? t.value : t
                                                      )
                                              )),
                                        (this.state.dropdown.suggestions = d),
                                        d.slice(0, u)
                                    );
                                function f(t, e) {
                                    return e
                                        .toLowerCase()
                                        .split(" ")
                                        .every((e) =>
                                            t.includes(e.toLowerCase())
                                        );
                                }
                                for (
                                    o = l.caseSensitive
                                        ? "" + t
                                        : ("" + t).toLowerCase();
                                    v < p.length;
                                    v++
                                ) {
                                    let t, r;
                                    i =
                                        p[v] instanceof Object
                                            ? p[v]
                                            : {
                                                  value: p[v],
                                              };
                                    let u = Object.keys(i).some((t) =>
                                        m.includes(t)
                                    )
                                        ? m
                                        : ["value"];
                                    l.fuzzySearch && !e.exact
                                        ? ((a = u
                                              .reduce(
                                                  (t, e) =>
                                                      t + " " + (i[e] || ""),
                                                  ""
                                              )
                                              .toLowerCase()
                                              .trim()),
                                          l.accentedSearch &&
                                              ((a = c(a)), (o = c(o))),
                                          (t = 0 == a.indexOf(o)),
                                          (r = a === o),
                                          (s = f(a, o)))
                                        : ((t = !0),
                                          (s = u.some((t) => {
                                              var s = "" + (i[t] || "");
                                              return (
                                                  l.accentedSearch &&
                                                      ((s = c(s)), (o = c(o))),
                                                  l.caseSensitive ||
                                                      (s = s.toLowerCase()),
                                                  (r = s === o),
                                                  e.exact
                                                      ? s === o
                                                      : 0 == s.indexOf(o)
                                              );
                                          }))),
                                        (n =
                                            !l.includeSelectedTags &&
                                            this.isTagDuplicate(
                                                h(i) ? i.value : i
                                            )),
                                        s &&
                                            !n &&
                                            (r && t
                                                ? g.push(i)
                                                : "startsWith" == l.sortby && t
                                                ? d.unshift(i)
                                                : d.push(i));
                                }
                                return (
                                    (this.state.dropdown.suggestions =
                                        g.concat(d)),
                                    "function" == typeof l.sortby
                                        ? l.sortby(g.concat(d), o)
                                        : g.concat(d).slice(0, u)
                                );
                            },
                            getMappedValue(t) {
                                var e = this.settings.dropdown.mapValueTo;
                                return e
                                    ? "function" == typeof e
                                        ? e(t)
                                        : t[e] || t.value
                                    : t.value;
                            },
                            createListHTML(t) {
                                return g([], t)
                                    .map((t, i) => {
                                        ("string" != typeof t &&
                                            "number" != typeof t) ||
                                            (t = {
                                                value: t,
                                            });
                                        var s = this.dropdown.getMappedValue(t);
                                        return (
                                            (s =
                                                "string" == typeof s &&
                                                this.settings.dropdown
                                                    .escapeHTML
                                                    ? d(s)
                                                    : s),
                                            this.settings.templates.dropdownItem.apply(
                                                this,
                                                [
                                                    e(
                                                        e({}, t),
                                                        {},
                                                        {
                                                            mappedValue: s,
                                                        }
                                                    ),
                                                    this,
                                                ]
                                            )
                                        );
                                    })
                                    .join("");
                            },
                        };
                        const D = "@yaireo/tagify/";
                        var M,
                            I = {
                                empty: "empty",
                                exceed: "number of tags exceeded",
                                pattern: "pattern mismatch",
                                duplicate: "already exists",
                                notAllowed: "not allowed",
                            },
                            _ = {
                                wrapper: (t, e) =>
                                    `<tags class="${e.classNames.namespace} ${
                                        e.mode
                                            ? `${e.classNames[e.mode + "Mode"]}`
                                            : ""
                                    } ${t.className}"\n                    ${
                                        e.readonly ? "readonly" : ""
                                    }\n                    ${
                                        e.disabled ? "disabled" : ""
                                    }\n                    ${
                                        e.required ? "required" : ""
                                    }\n                    ${
                                        "select" === e.mode
                                            ? "spellcheck='false'"
                                            : ""
                                    }\n                    tabIndex="-1">\n            <span ${
                                        !e.readonly && e.userInput
                                            ? "contenteditable"
                                            : ""
                                    } tabIndex="0" data-placeholder="${
                                        e.placeholder || "&#8203;"
                                    }" aria-placeholder="${
                                        e.placeholder || ""
                                    }"\n                class="${
                                        e.classNames.input
                                    }"\n                role="textbox"\n                aria-autocomplete="both"\n                aria-multiline="${
                                        "mix" == e.mode
                                    }"></span>\n                &#8203;\n        </tags>`,
                                tag(t, e) {
                                    let i = e.settings;
                                    return `<tag title="${
                                        t.title || t.value
                                    }"\n                    contenteditable='false'\n                    spellcheck='false'\n                    tabIndex="${
                                        i.a11y.focusableTags ? 0 : -1
                                    }"\n                    class="${
                                        i.classNames.tag
                                    } ${
                                        t.class || ""
                                    }"\n                    ${this.getAttributes(
                                        t
                                    )}>\n            <x title='' class="${
                                        i.classNames.tagX
                                    }" role='button' aria-label='remove tag'></x>\n            <div>\n                <span class="${
                                        i.classNames.tagText
                                    }">${
                                        t[i.tagTextProp] || t.value
                                    }</span>\n            </div>\n        </tag>`;
                                },
                                dropdown(t) {
                                    var e = t.dropdown;
                                    return `<div class="${
                                        "manual" == e.position
                                            ? ""
                                            : t.classNames.dropdown
                                    } ${
                                        e.classname
                                    }" role="listbox" aria-labelledby="dropdown" dir="${
                                        e.RTL ? "rtl" : ""
                                    }">\n                    <div data-selector='tagify-suggestions-wrapper' class="${
                                        t.classNames.dropdownWrapper
                                    }"></div>\n                </div>`;
                                },
                                dropdownContent(t) {
                                    var e = this.settings.templates,
                                        i = this.state.dropdown.suggestions;
                                    return `\n            ${e.dropdownHeader.call(
                                        this,
                                        i
                                    )}\n            ${t}\n            ${e.dropdownFooter.call(
                                        this,
                                        i
                                    )}\n        `;
                                },
                                dropdownItem(t) {
                                    return `<div ${this.getAttributes(
                                        t
                                    )}\n                    class='${
                                        this.settings.classNames.dropdownItem
                                    } ${
                                        t.class || ""
                                    }'\n                    tabindex="0"\n                    role="option">${
                                        t.mappedValue || t.value
                                    }</div>`;
                                },
                                dropdownHeader(t) {
                                    return `<header data-selector='tagify-suggestions-header' class="${this.settings.classNames.dropdownHeader}"></header>`;
                                },
                                dropdownFooter(t) {
                                    var e =
                                        t.length -
                                        this.settings.dropdown.maxItems;
                                    return e > 0
                                        ? `<footer data-selector='tagify-suggestions-footer' class="${this.settings.classNames.dropdownFooter}">\n                ${e} more items. Refine your search.\n            </footer>`
                                        : "";
                                },
                                dropdownItemNoMatch: null,
                            },
                            N = {
                                customBinding() {
                                    this.customEventsList.forEach((t) => {
                                        this.on(t, this.settings.callbacks[t]);
                                    });
                                },
                                binding() {
                                    let t =
                                        !(
                                            arguments.length > 0 &&
                                            void 0 !== arguments[0]
                                        ) || arguments[0];
                                    var e,
                                        i = this.events.callbacks,
                                        s = t
                                            ? "addEventListener"
                                            : "removeEventListener";
                                    if (!this.state.mainEvents || !t) {
                                        for (var a in ((this.state.mainEvents =
                                            t),
                                        t &&
                                            !this.listeners.main &&
                                            (this.events.bindGlobal.call(this),
                                            this.settings.isJQueryPlugin &&
                                                jQuery(
                                                    this.DOM.originalInput
                                                ).on(
                                                    "tagify.removeAllTags",
                                                    this.removeAllTags.bind(
                                                        this
                                                    )
                                                )),
                                        (e = this.listeners.main =
                                            this.listeners.main || {
                                                focus: [
                                                    "input",
                                                    i.onFocusBlur.bind(this),
                                                ],
                                                keydown: [
                                                    "input",
                                                    i.onKeydown.bind(this),
                                                ],
                                                click: [
                                                    "scope",
                                                    i.onClickScope.bind(this),
                                                ],
                                                dblclick: [
                                                    "scope",
                                                    i.onDoubleClickScope.bind(
                                                        this
                                                    ),
                                                ],
                                                paste: [
                                                    "input",
                                                    i.onPaste.bind(this),
                                                ],
                                                drop: [
                                                    "input",
                                                    i.onDrop.bind(this),
                                                ],
                                                compositionstart: [
                                                    "input",
                                                    i.onCompositionStart.bind(
                                                        this
                                                    ),
                                                ],
                                                compositionend: [
                                                    "input",
                                                    i.onCompositionEnd.bind(
                                                        this
                                                    ),
                                                ],
                                            })))
                                            this.DOM[e[a][0]][s](a, e[a][1]);
                                        clearInterval(
                                            this.listeners.main
                                                .originalInputValueObserverInterval
                                        ),
                                            (this.listeners.main.originalInputValueObserverInterval =
                                                setInterval(
                                                    i.observeOriginalInputValue.bind(
                                                        this
                                                    ),
                                                    500
                                                ));
                                        var n =
                                            this.listeners.main
                                                .inputMutationObserver ||
                                            new MutationObserver(
                                                i.onInputDOMChange.bind(this)
                                            );
                                        n.disconnect(),
                                            "mix" == this.settings.mode &&
                                                n.observe(this.DOM.input, {
                                                    childList: !0,
                                                });
                                    }
                                },
                                bindGlobal(t) {
                                    var e,
                                        i = this.events.callbacks,
                                        s = t
                                            ? "removeEventListener"
                                            : "addEventListener";
                                    if (
                                        this.listeners &&
                                        (t || !this.listeners.global)
                                    )
                                        for (e of ((this.listeners.global = this
                                            .listeners.global || [
                                            {
                                                type: this.isIE
                                                    ? "keydown"
                                                    : "input",
                                                target: this.DOM.input,
                                                cb: i[
                                                    this.isIE
                                                        ? "onInputIE"
                                                        : "onInput"
                                                ].bind(this),
                                            },
                                            {
                                                type: "keydown",
                                                target: window,
                                                cb: i.onWindowKeyDown.bind(
                                                    this
                                                ),
                                            },
                                            {
                                                type: "blur",
                                                target: this.DOM.input,
                                                cb: i.onFocusBlur.bind(this),
                                            },
                                            {
                                                type: "click",
                                                target: document,
                                                cb: i.onClickAnywhere.bind(
                                                    this
                                                ),
                                            },
                                        ]),
                                        this.listeners.global))
                                            e.target[s](e.type, e.cb);
                                },
                                unbindGlobal() {
                                    this.events.bindGlobal.call(this, !0);
                                },
                                callbacks: {
                                    onFocusBlur(t) {
                                        var e = this.settings,
                                            i = t.target
                                                ? this.trim(
                                                      t.target.textContent
                                                  )
                                                : "",
                                            s =
                                                this.value?.[0]?.[
                                                    e.tagTextProp
                                                ],
                                            a = t.type,
                                            n = e.dropdown.enabled >= 0,
                                            o = {
                                                relatedTarget: t.relatedTarget,
                                            },
                                            r =
                                                this.state.actions
                                                    .selectOption &&
                                                (n ||
                                                    !e.dropdown.closeOnSelect),
                                            l = this.state.actions.addNew && n,
                                            d =
                                                t.relatedTarget &&
                                                v.call(this, t.relatedTarget) &&
                                                this.DOM.scope.contains(
                                                    t.relatedTarget
                                                );
                                        if ("blur" == a) {
                                            if (
                                                t.relatedTarget ===
                                                this.DOM.scope
                                            )
                                                return (
                                                    this.dropdown.hide(),
                                                    void this.DOM.input.focus()
                                                );
                                            this.postUpdate(),
                                                e.onChangeAfterBlur &&
                                                    this.triggerChangeEvent();
                                        }
                                        if (!r && !l)
                                            if (
                                                ((this.state.hasFocus =
                                                    "focus" == a &&
                                                    +new Date()),
                                                this.toggleFocusClass(
                                                    this.state.hasFocus
                                                ),
                                                "mix" != e.mode)
                                            ) {
                                                if ("focus" == a)
                                                    return (
                                                        this.trigger(
                                                            "focus",
                                                            o
                                                        ),
                                                        void (
                                                            (0 !==
                                                                e.dropdown
                                                                    .enabled &&
                                                                e.userInput) ||
                                                            this.dropdown.show(
                                                                this.value
                                                                    .length
                                                                    ? ""
                                                                    : void 0
                                                            )
                                                        )
                                                    );
                                                "blur" == a &&
                                                    (this.trigger("blur", o),
                                                    this.loading(!1),
                                                    "select" == e.mode &&
                                                        (d &&
                                                            (this.removeTags(),
                                                            (i = "")),
                                                        s === i && (i = "")),
                                                    i &&
                                                        !this.state.actions
                                                            .selectOption &&
                                                        e.addTagOnBlur &&
                                                        e.addTagOn.includes(
                                                            "blur"
                                                        ) &&
                                                        this.addTags(i, !0)),
                                                    this.DOM.input.removeAttribute(
                                                        "style"
                                                    ),
                                                    this.dropdown.hide();
                                            } else
                                                "focus" == a
                                                    ? this.trigger("focus", o)
                                                    : "blur" == t.type &&
                                                      (this.trigger("blur", o),
                                                      this.loading(!1),
                                                      this.dropdown.hide(),
                                                      (this.state.dropdown.visible =
                                                          void 0),
                                                      this.setStateSelection());
                                    },
                                    onCompositionStart(t) {
                                        this.state.composing = !0;
                                    },
                                    onCompositionEnd(t) {
                                        this.state.composing = !1;
                                    },
                                    onWindowKeyDown(t) {
                                        var e,
                                            i = document.activeElement,
                                            s =
                                                v.call(this, i) &&
                                                this.DOM.scope.contains(
                                                    document.activeElement
                                                ),
                                            a = s && i.hasAttribute("readonly");
                                        if (s && !a)
                                            switch (
                                                ((e = i.nextElementSibling),
                                                t.key)
                                            ) {
                                                case "Backspace":
                                                    this.settings.readonly ||
                                                        (this.removeTags(i),
                                                        (
                                                            e || this.DOM.input
                                                        ).focus());
                                                    break;
                                                case "Enter":
                                                    setTimeout(
                                                        this.editTag.bind(this),
                                                        0,
                                                        i
                                                    );
                                            }
                                    },
                                    onKeydown(t) {
                                        var e = this.settings;
                                        if (
                                            !this.state.composing &&
                                            e.userInput
                                        ) {
                                            "select" == e.mode &&
                                                e.enforceWhitelist &&
                                                this.value.length &&
                                                "Tab" != t.key &&
                                                t.preventDefault();
                                            var i = this.trim(
                                                t.target.textContent
                                            );
                                            this.trigger("keydown", {
                                                event: t,
                                            }),
                                                e.hooks
                                                    .beforeKeyDown(t, {
                                                        tagify: this,
                                                    })
                                                    .then((s) => {
                                                        if ("mix" == e.mode) {
                                                            switch (t.key) {
                                                                case "Left":
                                                                case "ArrowLeft":
                                                                    this.state.actions.ArrowLeft =
                                                                        !0;
                                                                    break;
                                                                case "Delete":
                                                                case "Backspace":
                                                                    if (
                                                                        this
                                                                            .state
                                                                            .editing
                                                                    )
                                                                        return;
                                                                    var a =
                                                                            document.getSelection(),
                                                                        n =
                                                                            "Delete" ==
                                                                                t.key &&
                                                                            a.anchorOffset ==
                                                                                (a
                                                                                    .anchorNode
                                                                                    .length ||
                                                                                    0),
                                                                        r =
                                                                            a
                                                                                .anchorNode
                                                                                .previousSibling,
                                                                        d =
                                                                            1 ==
                                                                                a
                                                                                    .anchorNode
                                                                                    .nodeType ||
                                                                            (!a.anchorOffset &&
                                                                                r &&
                                                                                1 ==
                                                                                    r.nodeType &&
                                                                                a
                                                                                    .anchorNode
                                                                                    .previousSibling);
                                                                    o(
                                                                        this.DOM
                                                                            .input
                                                                            .innerHTML
                                                                    );
                                                                    var h,
                                                                        g,
                                                                        p,
                                                                        c =
                                                                            this.getTagElms(),
                                                                        m =
                                                                            1 ===
                                                                                a
                                                                                    .anchorNode
                                                                                    .length &&
                                                                            a
                                                                                .anchorNode
                                                                                .nodeValue ==
                                                                                String.fromCharCode(
                                                                                    8203
                                                                                );
                                                                    if (
                                                                        "edit" ==
                                                                            e.backspace &&
                                                                        d
                                                                    )
                                                                        return (
                                                                            (h =
                                                                                1 ==
                                                                                a
                                                                                    .anchorNode
                                                                                    .nodeType
                                                                                    ? null
                                                                                    : a
                                                                                          .anchorNode
                                                                                          .previousElementSibling),
                                                                            setTimeout(
                                                                                this.editTag.bind(
                                                                                    this
                                                                                ),
                                                                                0,
                                                                                h
                                                                            ),
                                                                            void t.preventDefault()
                                                                        );
                                                                    if (
                                                                        u() &&
                                                                        d instanceof
                                                                            Element
                                                                    )
                                                                        return (
                                                                            (p =
                                                                                l(
                                                                                    d
                                                                                )),
                                                                            d.hasAttribute(
                                                                                "readonly"
                                                                            ) ||
                                                                                d.remove(),
                                                                            this.DOM.input.focus(),
                                                                            void setTimeout(
                                                                                () => {
                                                                                    w(
                                                                                        p
                                                                                    ),
                                                                                        this.DOM.input.click();
                                                                                }
                                                                            )
                                                                        );
                                                                    if (
                                                                        "BR" ==
                                                                        a
                                                                            .anchorNode
                                                                            .nodeName
                                                                    )
                                                                        return;
                                                                    if (
                                                                        ((n ||
                                                                            d) &&
                                                                        1 ==
                                                                            a
                                                                                .anchorNode
                                                                                .nodeType
                                                                            ? (g =
                                                                                  0 ==
                                                                                  a.anchorOffset
                                                                                      ? n
                                                                                          ? c[0]
                                                                                          : null
                                                                                      : c[
                                                                                            Math.min(
                                                                                                c.length,
                                                                                                a.anchorOffset
                                                                                            ) -
                                                                                                1
                                                                                        ])
                                                                            : n
                                                                            ? (g =
                                                                                  a
                                                                                      .anchorNode
                                                                                      .nextElementSibling)
                                                                            : d instanceof
                                                                                  Element &&
                                                                              (g =
                                                                                  d),
                                                                        3 ==
                                                                            a
                                                                                .anchorNode
                                                                                .nodeType &&
                                                                            !a
                                                                                .anchorNode
                                                                                .nodeValue &&
                                                                            a
                                                                                .anchorNode
                                                                                .previousElementSibling &&
                                                                            t.preventDefault(),
                                                                        (d ||
                                                                            n) &&
                                                                            !e.backspace)
                                                                    )
                                                                        return void t.preventDefault();
                                                                    if (
                                                                        "Range" !=
                                                                            a.type &&
                                                                        !a.anchorOffset &&
                                                                        a.anchorNode ==
                                                                            this
                                                                                .DOM
                                                                                .input &&
                                                                        "Delete" !=
                                                                            t.key
                                                                    )
                                                                        return void t.preventDefault();
                                                                    if (
                                                                        "Range" !=
                                                                            a.type &&
                                                                        g &&
                                                                        g.hasAttribute(
                                                                            "readonly"
                                                                        )
                                                                    )
                                                                        return void w(
                                                                            l(g)
                                                                        );
                                                                    "Delete" ==
                                                                        t.key &&
                                                                        m &&
                                                                        T(
                                                                            a
                                                                                .anchorNode
                                                                                .nextSibling
                                                                        ) &&
                                                                        this.removeTags(
                                                                            a
                                                                                .anchorNode
                                                                                .nextSibling
                                                                        ),
                                                                        clearTimeout(
                                                                            M
                                                                        ),
                                                                        (M =
                                                                            setTimeout(
                                                                                () => {
                                                                                    var t =
                                                                                        document.getSelection();
                                                                                    o(
                                                                                        this
                                                                                            .DOM
                                                                                            .input
                                                                                            .innerHTML
                                                                                    ),
                                                                                        !n &&
                                                                                            t
                                                                                                .anchorNode
                                                                                                .previousSibling,
                                                                                        (this.value =
                                                                                            [].map
                                                                                                .call(
                                                                                                    c,
                                                                                                    (
                                                                                                        t,
                                                                                                        e
                                                                                                    ) => {
                                                                                                        var i =
                                                                                                            T(
                                                                                                                t
                                                                                                            );
                                                                                                        if (
                                                                                                            t.parentNode ||
                                                                                                            i.readonly
                                                                                                        )
                                                                                                            return i;
                                                                                                        this.trigger(
                                                                                                            "remove",
                                                                                                            {
                                                                                                                tag: t,
                                                                                                                index: e,
                                                                                                                data: i,
                                                                                                            }
                                                                                                        );
                                                                                                    }
                                                                                                )
                                                                                                .filter(
                                                                                                    (
                                                                                                        t
                                                                                                    ) =>
                                                                                                        t
                                                                                                ));
                                                                                },
                                                                                20
                                                                            ));
                                                            }
                                                            return !0;
                                                        }
                                                        var v =
                                                            "manual" ==
                                                            e.dropdown.position;
                                                        switch (t.key) {
                                                            case "Backspace":
                                                                "select" ==
                                                                    e.mode &&
                                                                e.enforceWhitelist &&
                                                                this.value
                                                                    .length
                                                                    ? this.removeTags()
                                                                    : (this
                                                                          .state
                                                                          .dropdown
                                                                          .visible &&
                                                                          "manual" !=
                                                                              e
                                                                                  .dropdown
                                                                                  .position) ||
                                                                      ("" !=
                                                                          t
                                                                              .target
                                                                              .textContent &&
                                                                          8203 !=
                                                                              i.charCodeAt(
                                                                                  0
                                                                              )) ||
                                                                      (!0 ===
                                                                      e.backspace
                                                                          ? this.removeTags()
                                                                          : "edit" ==
                                                                                e.backspace &&
                                                                            setTimeout(
                                                                                this.editTag.bind(
                                                                                    this
                                                                                ),
                                                                                0
                                                                            ));
                                                                break;
                                                            case "Esc":
                                                            case "Escape":
                                                                if (
                                                                    this.state
                                                                        .dropdown
                                                                        .visible
                                                                )
                                                                    return;
                                                                t.target.blur();
                                                                break;
                                                            case "Down":
                                                            case "ArrowDown":
                                                                this.state
                                                                    .dropdown
                                                                    .visible ||
                                                                    this.dropdown.show();
                                                                break;
                                                            case "ArrowRight": {
                                                                let t =
                                                                    this.state
                                                                        .inputSuggestion ||
                                                                    this.state
                                                                        .ddItemData;
                                                                if (
                                                                    t &&
                                                                    e
                                                                        .autoComplete
                                                                        .rightKey
                                                                )
                                                                    return void this.addTags(
                                                                        [t],
                                                                        !0
                                                                    );
                                                                break;
                                                            }
                                                            case "Tab": {
                                                                let s =
                                                                    "select" ==
                                                                    e.mode;
                                                                if (!i || s)
                                                                    return !0;
                                                                t.preventDefault();
                                                            }
                                                            case "Enter":
                                                                if (
                                                                    this.state
                                                                        .dropdown
                                                                        .visible &&
                                                                    !v
                                                                )
                                                                    return;
                                                                t.preventDefault(),
                                                                    setTimeout(
                                                                        () => {
                                                                            (this
                                                                                .state
                                                                                .dropdown
                                                                                .visible &&
                                                                                !v) ||
                                                                                this
                                                                                    .state
                                                                                    .actions
                                                                                    .selectOption ||
                                                                                !e.addTagOn.includes(
                                                                                    t.key.toLowerCase()
                                                                                ) ||
                                                                                this.addTags(
                                                                                    i,
                                                                                    !0
                                                                                );
                                                                        }
                                                                    );
                                                        }
                                                    })
                                                    .catch((t) => t);
                                        }
                                    },
                                    onInput(t) {
                                        this.postUpdate();
                                        var e = this.settings;
                                        if ("mix" == e.mode)
                                            return this.events.callbacks.onMixTagsInput.call(
                                                this,
                                                t
                                            );
                                        var i = this.input.normalize.call(
                                                this,
                                                void 0,
                                                {
                                                    trim: !1,
                                                }
                                            ),
                                            s = i.length >= e.dropdown.enabled,
                                            a = {
                                                value: i,
                                                inputElm: this.DOM.input,
                                            },
                                            n = this.validateTag({
                                                value: i,
                                            });
                                        "select" == e.mode &&
                                            this.toggleScopeValidation(n),
                                            (a.isValid = n),
                                            this.state.inputText != i &&
                                                (this.input.set.call(
                                                    this,
                                                    i,
                                                    !1
                                                ),
                                                -1 != i.search(e.delimiters)
                                                    ? this.addTags(i) &&
                                                      this.input.set.call(this)
                                                    : e.dropdown.enabled >= 0 &&
                                                      this.dropdown[
                                                          s ? "show" : "hide"
                                                      ](i),
                                                this.trigger("input", a));
                                    },
                                    onMixTagsInput(t) {
                                        var e,
                                            i,
                                            s,
                                            a,
                                            n,
                                            o,
                                            r,
                                            l,
                                            d = this.settings,
                                            h = this.value.length,
                                            p = this.getTagElms(),
                                            c =
                                                document.createDocumentFragment(),
                                            m = window
                                                .getSelection()
                                                .getRangeAt(0),
                                            v = [].map.call(
                                                p,
                                                (t) => T(t).value
                                            );
                                        if (
                                            ("deleteContentBackward" ==
                                                t.inputType &&
                                                u() &&
                                                this.events.callbacks.onKeydown.call(
                                                    this,
                                                    {
                                                        target: t.target,
                                                        key: "Backspace",
                                                    }
                                                ),
                                            b(this.getTagElms()),
                                            this.value.slice().forEach((t) => {
                                                t.readonly &&
                                                    !v.includes(t.value) &&
                                                    c.appendChild(
                                                        this.createTagElem(t)
                                                    );
                                            }),
                                            c.childNodes.length &&
                                                (m.insertNode(c),
                                                this.setRangeAtStartEnd(
                                                    !1,
                                                    c.lastChild
                                                )),
                                            p.length != h)
                                        )
                                            return (
                                                (this.value = [].map.call(
                                                    this.getTagElms(),
                                                    (t) => T(t)
                                                )),
                                                void this.update({
                                                    withoutChangeEvent: !0,
                                                })
                                            );
                                        if (this.hasMaxTags()) return !0;
                                        if (
                                            window.getSelection &&
                                            (o = window.getSelection())
                                                .rangeCount > 0 &&
                                            3 == o.anchorNode.nodeType
                                        ) {
                                            if (
                                                ((m = o
                                                    .getRangeAt(0)
                                                    .cloneRange()).collapse(!0),
                                                m.setStart(o.focusNode, 0),
                                                (s =
                                                    (e = m
                                                        .toString()
                                                        .slice(
                                                            0,
                                                            m.endOffset
                                                        )).split(d.pattern)
                                                        .length - 1),
                                                (i = e.match(d.pattern)) &&
                                                    (a = e.slice(
                                                        e.lastIndexOf(
                                                            i[i.length - 1]
                                                        )
                                                    )),
                                                a)
                                            ) {
                                                if (
                                                    ((this.state.actions.ArrowLeft =
                                                        !1),
                                                    (this.state.tag = {
                                                        prefix: a.match(
                                                            d.pattern
                                                        )[0],
                                                        value: a.replace(
                                                            d.pattern,
                                                            ""
                                                        ),
                                                    }),
                                                    (this.state.tag.baseOffset =
                                                        o.baseOffset -
                                                        this.state.tag.value
                                                            .length),
                                                    (l =
                                                        this.state.tag.value.match(
                                                            d.delimiters
                                                        )))
                                                )
                                                    return (
                                                        (this.state.tag.value =
                                                            this.state.tag.value.replace(
                                                                d.delimiters,
                                                                ""
                                                            )),
                                                        (this.state.tag.delimiters =
                                                            l[0]),
                                                        this.addTags(
                                                            this.state.tag
                                                                .value,
                                                            d.dropdown
                                                                .clearOnSelect
                                                        ),
                                                        void this.dropdown.hide()
                                                    );
                                                n =
                                                    this.state.tag.value
                                                        .length >=
                                                    d.dropdown.enabled;
                                                try {
                                                    (r =
                                                        (r =
                                                            this.state
                                                                .flaggedTags[
                                                                this.state.tag
                                                                    .baseOffset
                                                            ]).prefix ==
                                                            this.state.tag
                                                                .prefix &&
                                                        r.value[0] ==
                                                            this.state.tag
                                                                .value[0]),
                                                        this.state.flaggedTags[
                                                            this.state.tag
                                                                .baseOffset
                                                        ] &&
                                                            !this.state.tag
                                                                .value &&
                                                            delete this.state
                                                                .flaggedTags[
                                                                this.state.tag
                                                                    .baseOffset
                                                            ];
                                                } catch (t) {}
                                                (r ||
                                                    s <
                                                        this.state.mixMode
                                                            .matchedPatternCount) &&
                                                    (n = !1);
                                            } else this.state.flaggedTags = {};
                                            this.state.mixMode.matchedPatternCount =
                                                s;
                                        }
                                        setTimeout(() => {
                                            this.update({
                                                withoutChangeEvent: !0,
                                            }),
                                                this.trigger(
                                                    "input",
                                                    g({}, this.state.tag, {
                                                        textContent:
                                                            this.DOM.input
                                                                .textContent,
                                                    })
                                                ),
                                                this.state.tag &&
                                                    this.dropdown[
                                                        n ? "show" : "hide"
                                                    ](this.state.tag.value);
                                        }, 10);
                                    },
                                    onInputIE(t) {
                                        var e = this;
                                        setTimeout(function () {
                                            e.events.callbacks.onInput.call(
                                                e,
                                                t
                                            );
                                        });
                                    },
                                    observeOriginalInputValue() {
                                        this.DOM.originalInput.parentNode ||
                                            this.destroy(),
                                            this.DOM.originalInput.value !=
                                                this.DOM.originalInput
                                                    .tagifyValue &&
                                                this.loadOriginalValues();
                                    },
                                    onClickAnywhere(t) {
                                        t.target == this.DOM.scope ||
                                            this.DOM.scope.contains(t.target) ||
                                            (this.toggleFocusClass(!1),
                                            (this.state.hasFocus = !1));
                                    },
                                    onClickScope(t) {
                                        var e = this.settings,
                                            i = t.target.closest(
                                                "." + e.classNames.tag
                                            ),
                                            s =
                                                +new Date() -
                                                this.state.hasFocus;
                                        if (t.target != this.DOM.scope) {
                                            if (
                                                !t.target.classList.contains(
                                                    e.classNames.tagX
                                                )
                                            )
                                                return i
                                                    ? (this.trigger("click", {
                                                          tag: i,
                                                          index: this.getNodeIndex(
                                                              i
                                                          ),
                                                          data: T(i),
                                                          event: t,
                                                      }),
                                                      void (
                                                          (1 !== e.editTags &&
                                                              1 !==
                                                                  e.editTags
                                                                      .clicks) ||
                                                          this.events.callbacks.onDoubleClickScope.call(
                                                              this,
                                                              t
                                                          )
                                                      ))
                                                    : void (t.target ==
                                                          this.DOM.input &&
                                                      ("mix" == e.mode &&
                                                          this.fixFirefoxLastTagNoCaret(),
                                                      s > 500)
                                                          ? this.state.dropdown
                                                                .visible
                                                              ? this.dropdown.hide()
                                                              : 0 ===
                                                                    e.dropdown
                                                                        .enabled &&
                                                                "mix" !=
                                                                    e.mode &&
                                                                this.dropdown.show(
                                                                    this.value
                                                                        .length
                                                                        ? ""
                                                                        : void 0
                                                                )
                                                          : "select" !=
                                                                e.mode ||
                                                            0 !==
                                                                e.dropdown
                                                                    .enabled ||
                                                            this.state.dropdown
                                                                .visible ||
                                                            this.dropdown.show());
                                            this.removeTags(
                                                t.target.parentNode
                                            );
                                        } else this.DOM.input.focus();
                                    },
                                    onPaste(t) {
                                        t.preventDefault();
                                        var e,
                                            i,
                                            s = this.settings;
                                        if (
                                            ("select" == s.mode &&
                                                s.enforceWhitelist) ||
                                            !s.userInput
                                        )
                                            return !1;
                                        s.readonly ||
                                            ((e =
                                                t.clipboardData ||
                                                window.clipboardData),
                                            (i = e.getData("Text")),
                                            s.hooks
                                                .beforePaste(t, {
                                                    tagify: this,
                                                    pastedText: i,
                                                    clipboardData: e,
                                                })
                                                .then((e) => {
                                                    void 0 === e && (e = i),
                                                        e &&
                                                            (this.injectAtCaret(
                                                                e,
                                                                window
                                                                    .getSelection()
                                                                    .getRangeAt(
                                                                        0
                                                                    )
                                                            ),
                                                            "mix" ==
                                                            this.settings.mode
                                                                ? this.events.callbacks.onMixTagsInput.call(
                                                                      this,
                                                                      t
                                                                  )
                                                                : this.settings
                                                                      .pasteAsTags
                                                                ? this.addTags(
                                                                      this.state
                                                                          .inputText +
                                                                          e,
                                                                      !0
                                                                  )
                                                                : ((this.state.inputText =
                                                                      e),
                                                                  this.dropdown.show(
                                                                      e
                                                                  )));
                                                })
                                                .catch((t) => t));
                                    },
                                    onDrop(t) {
                                        t.preventDefault();
                                    },
                                    onEditTagInput(t, e) {
                                        var i = t.closest(
                                                "." +
                                                    this.settings.classNames.tag
                                            ),
                                            s = this.getNodeIndex(i),
                                            a = T(i),
                                            n = this.input.normalize.call(
                                                this,
                                                t
                                            ),
                                            o = {
                                                [this.settings.tagTextProp]: n,
                                                __tagId: a.__tagId,
                                            },
                                            r = this.validateTag(o);
                                        this.editTagChangeDetected(g(a, o)) ||
                                            !0 !== t.originalIsValid ||
                                            (r = !0),
                                            i.classList.toggle(
                                                this.settings.classNames
                                                    .tagInvalid,
                                                !0 !== r
                                            ),
                                            (a.__isValid = r),
                                            (i.title =
                                                !0 === r
                                                    ? a.title || a.value
                                                    : r),
                                            n.length >=
                                                this.settings.dropdown
                                                    .enabled &&
                                                (this.state.editing &&
                                                    (this.state.editing.value =
                                                        n),
                                                this.dropdown.show(n)),
                                            this.trigger("edit:input", {
                                                tag: i,
                                                index: s,
                                                data: g({}, this.value[s], {
                                                    newValue: n,
                                                }),
                                                event: e,
                                            });
                                    },
                                    onEditTagPaste(t, e) {
                                        var i = (
                                            e.clipboardData ||
                                            window.clipboardData
                                        ).getData("Text");
                                        e.preventDefault();
                                        var s = f(i);
                                        this.setRangeAtStartEnd(!1, s);
                                    },
                                    onEditTagFocus(t) {
                                        this.state.editing = {
                                            scope: t,
                                            input: t.querySelector(
                                                "[contenteditable]"
                                            ),
                                        };
                                    },
                                    onEditTagBlur(t) {
                                        if (
                                            this.state.editing &&
                                            (this.state.hasFocus ||
                                                this.toggleFocusClass(),
                                            this.DOM.scope.contains(t))
                                        ) {
                                            var e,
                                                i,
                                                s = this.settings,
                                                a = t.closest(
                                                    "." + s.classNames.tag
                                                ),
                                                n = T(a),
                                                o = this.input.normalize.call(
                                                    this,
                                                    t
                                                ),
                                                r = {
                                                    [s.tagTextProp]: o,
                                                    __tagId: n.__tagId,
                                                },
                                                l = n.__originalData,
                                                d = this.editTagChangeDetected(
                                                    g(n, r)
                                                ),
                                                h = this.validateTag(r);
                                            if (o)
                                                if (d) {
                                                    if (
                                                        ((e =
                                                            this.hasMaxTags()),
                                                        (i = g({}, l, {
                                                            [s.tagTextProp]:
                                                                this.trim(o),
                                                            __isValid: h,
                                                        })),
                                                        s.transformTag.call(
                                                            this,
                                                            i,
                                                            l
                                                        ),
                                                        !0 !==
                                                            (h =
                                                                (!e ||
                                                                    !0 ===
                                                                        l.__isValid) &&
                                                                this.validateTag(
                                                                    i
                                                                )))
                                                    ) {
                                                        if (
                                                            (this.trigger(
                                                                "invalid",
                                                                {
                                                                    data: i,
                                                                    tag: a,
                                                                    message: h,
                                                                }
                                                            ),
                                                            s.editTags
                                                                .keepInvalid)
                                                        )
                                                            return;
                                                        s.keepInvalidTags
                                                            ? (i.__isValid = h)
                                                            : (i = l);
                                                    } else
                                                        s.keepInvalidTags &&
                                                            (delete i.title,
                                                            delete i[
                                                                "aria-invalid"
                                                            ],
                                                            delete i.class);
                                                    this.onEditTagDone(a, i);
                                                } else this.onEditTagDone(a, l);
                                            else this.onEditTagDone(a);
                                        }
                                    },
                                    onEditTagkeydown(t, e) {
                                        if (!this.state.composing)
                                            switch (
                                                (this.trigger("edit:keydown", {
                                                    event: t,
                                                }),
                                                t.key)
                                            ) {
                                                case "Esc":
                                                case "Escape":
                                                    (this.state.editing = !1),
                                                        e.__tagifyTagData
                                                            .__originalData
                                                            .value
                                                            ? e.parentNode.replaceChild(
                                                                  e
                                                                      .__tagifyTagData
                                                                      .__originalHTML,
                                                                  e
                                                              )
                                                            : e.remove();
                                                    break;
                                                case "Enter":
                                                case "Tab":
                                                    t.preventDefault(),
                                                        t.target.blur();
                                            }
                                    },
                                    onDoubleClickScope(t) {
                                        var e,
                                            i,
                                            s = t.target.closest(
                                                "." +
                                                    this.settings.classNames.tag
                                            ),
                                            a = T(s),
                                            n = this.settings;
                                        s &&
                                            n.userInput &&
                                            !1 !== a.editable &&
                                            ((e = s.classList.contains(
                                                this.settings.classNames
                                                    .tagEditing
                                            )),
                                            (i = s.hasAttribute("readonly")),
                                            "select" == n.mode ||
                                                n.readonly ||
                                                e ||
                                                i ||
                                                !this.settings.editTags ||
                                                this.editTag(s),
                                            this.toggleFocusClass(!0),
                                            this.trigger("dblclick", {
                                                tag: s,
                                                index: this.getNodeIndex(s),
                                                data: T(s),
                                            }));
                                    },
                                    onInputDOMChange(t) {
                                        t.forEach((t) => {
                                            t.addedNodes.forEach((t) => {
                                                if (
                                                    "<div><br></div>" ==
                                                    t.outerHTML
                                                )
                                                    t.replaceWith(
                                                        document.createElement(
                                                            "br"
                                                        )
                                                    );
                                                else if (
                                                    1 == t.nodeType &&
                                                    t.querySelector(
                                                        this.settings.classNames
                                                            .tagSelector
                                                    )
                                                ) {
                                                    let e =
                                                        document.createTextNode(
                                                            ""
                                                        );
                                                    3 ==
                                                        t.childNodes[0]
                                                            .nodeType &&
                                                        "BR" !=
                                                            t.previousSibling
                                                                .nodeName &&
                                                        (e =
                                                            document.createTextNode(
                                                                "\n"
                                                            )),
                                                        t.replaceWith(
                                                            e,
                                                            ...[
                                                                ...t.childNodes,
                                                            ].slice(0, -1)
                                                        ),
                                                        w(e);
                                                } else if (v.call(this, t))
                                                    if (
                                                        (3 !=
                                                            t.previousSibling
                                                                ?.nodeType ||
                                                            t.previousSibling
                                                                .textContent ||
                                                            t.previousSibling.remove(),
                                                        t.previousSibling &&
                                                            "BR" ==
                                                                t
                                                                    .previousSibling
                                                                    .nodeName)
                                                    ) {
                                                        t.previousSibling.replaceWith(
                                                            "\n​"
                                                        );
                                                        let e = t.nextSibling,
                                                            i = "";
                                                        for (; e; )
                                                            (i +=
                                                                e.textContent),
                                                                (e =
                                                                    e.nextSibling);
                                                        i.trim() &&
                                                            w(
                                                                t.previousSibling
                                                            );
                                                    } else
                                                        (t.previousSibling &&
                                                            !T(
                                                                t.previousSibling
                                                            )) ||
                                                            t.before("​");
                                            }),
                                                t.removedNodes.forEach((t) => {
                                                    t &&
                                                        "BR" == t.nodeName &&
                                                        v.call(this, e) &&
                                                        (this.removeTags(e),
                                                        this.fixFirefoxLastTagNoCaret());
                                                });
                                        });
                                        var e = this.DOM.input.lastChild;
                                        e && "" == e.nodeValue && e.remove(),
                                            (e && "BR" == e.nodeName) ||
                                                this.DOM.input.appendChild(
                                                    document.createElement("br")
                                                );
                                    },
                                },
                            };
                        function S(t, e) {
                            if (!t) {
                                console.warn(
                                    "Tagify:",
                                    "input element not found",
                                    t
                                );
                                const e = new Proxy(this, {
                                    get: () => () => e,
                                });
                                return e;
                            }
                            if (t.__tagify)
                                return (
                                    console.warn(
                                        "Tagify: ",
                                        "input element is already Tagified - Same instance is returned.",
                                        t
                                    ),
                                    t.__tagify
                                );
                            var i;
                            g(
                                this,
                                (function (t) {
                                    var e = document.createTextNode("");
                                    function i(t, i, s) {
                                        s &&
                                            i
                                                .split(/\s+/g)
                                                .forEach((i) =>
                                                    e[t + "EventListener"].call(
                                                        e,
                                                        i,
                                                        s
                                                    )
                                                );
                                    }
                                    return {
                                        off(t, e) {
                                            return i("remove", t, e), this;
                                        },
                                        on(t, e) {
                                            return (
                                                e &&
                                                    "function" == typeof e &&
                                                    i("add", t, e),
                                                this
                                            );
                                        },
                                        trigger(i, s, a) {
                                            var n;
                                            if (
                                                ((a = a || {
                                                    cloneData: !0,
                                                }),
                                                i)
                                            )
                                                if (t.settings.isJQueryPlugin)
                                                    "remove" == i &&
                                                        (i = "removeTag"),
                                                        jQuery(
                                                            t.DOM.originalInput
                                                        ).triggerHandler(i, [
                                                            s,
                                                        ]);
                                                else {
                                                    try {
                                                        var o =
                                                            "object" == typeof s
                                                                ? s
                                                                : {
                                                                      value: s,
                                                                  };
                                                        if (
                                                            (((o = a.cloneData
                                                                ? g({}, o)
                                                                : o).tagify =
                                                                this),
                                                            s.event &&
                                                                (o.event =
                                                                    this.cloneEvent(
                                                                        s.event
                                                                    )),
                                                            s instanceof Object)
                                                        )
                                                            for (var r in s)
                                                                s[r] instanceof
                                                                    HTMLElement &&
                                                                    (o[r] =
                                                                        s[r]);
                                                        n = new CustomEvent(i, {
                                                            detail: o,
                                                        });
                                                    } catch (t) {
                                                        console.warn(t);
                                                    }
                                                    e.dispatchEvent(n);
                                                }
                                        },
                                    };
                                })(this)
                            ),
                                (this.isFirefox =
                                    /firefox|fxios/i.test(
                                        navigator.userAgent
                                    ) &&
                                    !/seamonkey/i.test(navigator.userAgent)),
                                (this.isIE = window.document.documentMode),
                                (e = e || {}),
                                (this.getPersistedData =
                                    ((i = e.id),
                                    (t) => {
                                        let e,
                                            s = "/" + t;
                                        if (
                                            1 ==
                                            localStorage.getItem(
                                                D + i + "/v",
                                                1
                                            )
                                        )
                                            try {
                                                e = JSON.parse(
                                                    localStorage[D + i + s]
                                                );
                                            } catch (t) {}
                                        return e;
                                    })),
                                (this.setPersistedData = ((t) =>
                                    t
                                        ? (localStorage.setItem(
                                              D + t + "/v",
                                              1
                                          ),
                                          (e, i) => {
                                              let s = "/" + i,
                                                  a = JSON.stringify(e);
                                              e &&
                                                  i &&
                                                  (localStorage.setItem(
                                                      D + t + s,
                                                      a
                                                  ),
                                                  dispatchEvent(
                                                      new Event("storage")
                                                  ));
                                          })
                                        : () => {})(e.id)),
                                (this.clearPersistedData = ((t) => (e) => {
                                    const i = D + "/" + t + "/";
                                    if (e) localStorage.removeItem(i + e);
                                    else
                                        for (let t in localStorage)
                                            t.includes(i) &&
                                                localStorage.removeItem(t);
                                })(e.id)),
                                this.applySettings(t, e),
                                (this.state = {
                                    inputText: "",
                                    editing: !1,
                                    composing: !1,
                                    actions: {},
                                    mixMode: {},
                                    dropdown: {},
                                    flaggedTags: {},
                                }),
                                (this.value = []),
                                (this.listeners = {}),
                                (this.DOM = {}),
                                this.build(t),
                                x.call(this),
                                this.getCSSVars(),
                                this.loadOriginalValues(),
                                this.events.customBinding.call(this),
                                this.events.binding.call(this),
                                t.autofocus && this.DOM.input.focus(),
                                (t.__tagify = this);
                        }
                        return (
                            (S.prototype = {
                                _dropdown: O,
                                placeCaretAfterNode: w,
                                getSetTagData: T,
                                helpers: {
                                    sameStr: s,
                                    removeCollectionProp: a,
                                    omit: n,
                                    isObject: h,
                                    parseHTML: r,
                                    escapeHTML: d,
                                    extend: g,
                                    concatWithoutDups: p,
                                    getUID: m,
                                    isNodeTag: v,
                                },
                                customEventsList: [
                                    "change",
                                    "add",
                                    "remove",
                                    "invalid",
                                    "input",
                                    "click",
                                    "keydown",
                                    "focus",
                                    "blur",
                                    "edit:input",
                                    "edit:beforeUpdate",
                                    "edit:updated",
                                    "edit:start",
                                    "edit:keydown",
                                    "dropdown:show",
                                    "dropdown:hide",
                                    "dropdown:select",
                                    "dropdown:updated",
                                    "dropdown:noMatch",
                                    "dropdown:scroll",
                                ],
                                dataProps: [
                                    "__isValid",
                                    "__removed",
                                    "__originalData",
                                    "__originalHTML",
                                    "__tagId",
                                ],
                                trim(t) {
                                    return this.settings.trim &&
                                        t &&
                                        "string" == typeof t
                                        ? t.trim()
                                        : t;
                                },
                                parseHTML: r,
                                templates: _,
                                parseTemplate(t, e) {
                                    return r(
                                        (t =
                                            this.settings.templates[t] ||
                                            t).apply(this, e)
                                    );
                                },
                                set whitelist(t) {
                                    const e = t && Array.isArray(t);
                                    (this.settings.whitelist = e ? t : []),
                                        this.setPersistedData(
                                            e ? t : [],
                                            "whitelist"
                                        );
                                },
                                get whitelist() {
                                    return this.settings.whitelist;
                                },
                                generateClassSelectors(t) {
                                    for (let e in t) {
                                        let i = e;
                                        Object.defineProperty(
                                            t,
                                            i + "Selector",
                                            {
                                                get() {
                                                    return (
                                                        "." +
                                                        this[i].split(" ")[0]
                                                    );
                                                },
                                            }
                                        );
                                    }
                                },
                                applySettings(t, i) {
                                    y.templates = this.templates;
                                    var s = g(
                                            {},
                                            y,
                                            "mix" == i.mode
                                                ? {
                                                      dropdown: {
                                                          position: "text",
                                                      },
                                                  }
                                                : {}
                                        ),
                                        a = (this.settings = g({}, s, i));
                                    if (
                                        ((a.disabled =
                                            t.hasAttribute("disabled")),
                                        (a.readonly =
                                            a.readonly ||
                                            t.hasAttribute("readonly")),
                                        (a.placeholder = d(
                                            t.getAttribute("placeholder") ||
                                                a.placeholder ||
                                                ""
                                        )),
                                        (a.required =
                                            t.hasAttribute("required")),
                                        this.generateClassSelectors(
                                            a.classNames
                                        ),
                                        void 0 ===
                                            a.dropdown.includeSelectedTags &&
                                            (a.dropdown.includeSelectedTags =
                                                a.duplicates),
                                        this.isIE && (a.autoComplete = !1),
                                        ["whitelist", "blacklist"].forEach(
                                            (e) => {
                                                var i = t.getAttribute(
                                                    "data-" + e
                                                );
                                                i &&
                                                    (i = i.split(
                                                        a.delimiters
                                                    )) instanceof Array &&
                                                    (a[e] = i);
                                            }
                                        ),
                                        "autoComplete" in i &&
                                            !h(i.autoComplete) &&
                                            ((a.autoComplete = y.autoComplete),
                                            (a.autoComplete.enabled =
                                                i.autoComplete)),
                                        "mix" == a.mode &&
                                            ((a.pattern = a.pattern || /@/),
                                            (a.autoComplete.rightKey = !0),
                                            (a.delimiters =
                                                i.delimiters || null),
                                            a.tagTextProp &&
                                                !a.dropdown.searchKeys.includes(
                                                    a.tagTextProp
                                                ) &&
                                                a.dropdown.searchKeys.push(
                                                    a.tagTextProp
                                                )),
                                        t.pattern)
                                    )
                                        try {
                                            a.pattern = new RegExp(t.pattern);
                                        } catch (t) {}
                                    if (a.delimiters) {
                                        a._delimiters = a.delimiters;
                                        try {
                                            a.delimiters = new RegExp(
                                                this.settings.delimiters,
                                                "g"
                                            );
                                        } catch (t) {}
                                    }
                                    a.disabled && (a.userInput = !1),
                                        (this.TEXTS = e(
                                            e({}, I),
                                            a.texts || {}
                                        )),
                                        (("select" != a.mode ||
                                            i.dropdown?.enabled) &&
                                            a.userInput) ||
                                            (a.dropdown.enabled = 0),
                                        (a.dropdown.appendTarget =
                                            i.dropdown?.appendTarget ||
                                            document.body);
                                    let n = this.getPersistedData("whitelist");
                                    Array.isArray(n) &&
                                        (this.whitelist = Array.isArray(
                                            a.whitelist
                                        )
                                            ? p(a.whitelist, n)
                                            : n);
                                },
                                getAttributes(t) {
                                    var e,
                                        i = this.getCustomAttributes(t),
                                        s = "";
                                    for (e in i)
                                        s +=
                                            " " +
                                            e +
                                            (void 0 !== t[e]
                                                ? `="${i[e]}"`
                                                : "");
                                    return s;
                                },
                                getCustomAttributes(t) {
                                    if (!h(t)) return "";
                                    var e,
                                        i = {};
                                    for (e in t)
                                        "__" != e.slice(0, 2) &&
                                            "class" != e &&
                                            t.hasOwnProperty(e) &&
                                            void 0 !== t[e] &&
                                            (i[e] = d(t[e]));
                                    return i;
                                },
                                setStateSelection() {
                                    var t = window.getSelection(),
                                        e = {
                                            anchorOffset: t.anchorOffset,
                                            anchorNode: t.anchorNode,
                                            range:
                                                t.getRangeAt &&
                                                t.rangeCount &&
                                                t.getRangeAt(0),
                                        };
                                    return (this.state.selection = e), e;
                                },
                                getCSSVars() {
                                    var t = getComputedStyle(
                                        this.DOM.scope,
                                        null
                                    );
                                    this.CSSVars = {
                                        tagHideTransition: ((t) => {
                                            let e = t.value;
                                            return "s" == t.unit ? 1e3 * e : e;
                                        })(
                                            (function (t) {
                                                if (!t) return {};
                                                var e = (t = t
                                                    .trim()
                                                    .split(" ")[0])
                                                    .split(/\d+/g)
                                                    .filter((t) => t)
                                                    .pop()
                                                    .trim();
                                                return {
                                                    value: +t
                                                        .split(e)
                                                        .filter((t) => t)[0]
                                                        .trim(),
                                                    unit: e,
                                                };
                                            })(
                                                ("tag-hide-transition",
                                                t.getPropertyValue(
                                                    "--tag-hide-transition"
                                                ))
                                            )
                                        ),
                                    };
                                },
                                build(t) {
                                    var e = this.DOM;
                                    this.settings.mixMode.integrated
                                        ? ((e.originalInput = null),
                                          (e.scope = t),
                                          (e.input = t))
                                        : ((e.originalInput = t),
                                          (e.originalInput_tabIndex =
                                              t.tabIndex),
                                          (e.scope = this.parseTemplate(
                                              "wrapper",
                                              [t, this.settings]
                                          )),
                                          (e.input = e.scope.querySelector(
                                              this.settings.classNames
                                                  .inputSelector
                                          )),
                                          t.parentNode.insertBefore(e.scope, t),
                                          (t.tabIndex = -1));
                                },
                                destroy() {
                                    this.events.unbindGlobal.call(this),
                                        this.DOM.scope.parentNode.removeChild(
                                            this.DOM.scope
                                        ),
                                        (this.DOM.originalInput.tabIndex =
                                            this.DOM.originalInput_tabIndex),
                                        delete this.DOM.originalInput.__tagify,
                                        this.dropdown.hide(!0),
                                        clearTimeout(
                                            this.dropdownHide__bindEventsTimeout
                                        ),
                                        clearInterval(
                                            this.listeners.main
                                                .originalInputValueObserverInterval
                                        );
                                },
                                loadOriginalValues(t) {
                                    var e,
                                        i = this.settings;
                                    if (
                                        ((this.state.blockChangeEvent = !0),
                                        void 0 === t)
                                    ) {
                                        const e =
                                            this.getPersistedData("value");
                                        t =
                                            e && !this.DOM.originalInput.value
                                                ? e
                                                : i.mixMode.integrated
                                                ? this.DOM.input.textContent
                                                : this.DOM.originalInput.value;
                                    }
                                    if ((this.removeAllTags(), t))
                                        if ("mix" == i.mode)
                                            this.parseMixTags(t),
                                                ((e =
                                                    this.DOM.input.lastChild) &&
                                                    "BR" == e.tagName) ||
                                                    this.DOM.input.insertAdjacentHTML(
                                                        "beforeend",
                                                        "<br>"
                                                    );
                                        else {
                                            try {
                                                JSON.parse(t) instanceof
                                                    Array &&
                                                    (t = JSON.parse(t));
                                            } catch (t) {}
                                            this.addTags(t, !0).forEach(
                                                (t) =>
                                                    t &&
                                                    t.classList.add(
                                                        i.classNames
                                                            .tagNoAnimation
                                                    )
                                            );
                                        }
                                    else this.postUpdate();
                                    this.state.lastOriginalValueReported = i
                                        .mixMode.integrated
                                        ? ""
                                        : this.DOM.originalInput.value;
                                },
                                cloneEvent(t) {
                                    var e = {};
                                    for (var i in t)
                                        "path" != i && (e[i] = t[i]);
                                    return e;
                                },
                                loading(t) {
                                    return (
                                        (this.state.isLoading = t),
                                        this.DOM.scope.classList[
                                            t ? "add" : "remove"
                                        ](
                                            this.settings.classNames
                                                .scopeLoading
                                        ),
                                        this
                                    );
                                },
                                tagLoading(t, e) {
                                    return (
                                        t &&
                                            t.classList[e ? "add" : "remove"](
                                                this.settings.classNames
                                                    .tagLoading
                                            ),
                                        this
                                    );
                                },
                                toggleClass(t, e) {
                                    "string" == typeof t &&
                                        this.DOM.scope.classList.toggle(t, e);
                                },
                                toggleScopeValidation(t) {
                                    var e = !0 === t || void 0 === t;
                                    !this.settings.required &&
                                        t &&
                                        t === this.TEXTS.empty &&
                                        (e = !0),
                                        this.toggleClass(
                                            this.settings.classNames.tagInvalid,
                                            !e
                                        ),
                                        (this.DOM.scope.title = e ? "" : t);
                                },
                                toggleFocusClass(t) {
                                    this.toggleClass(
                                        this.settings.classNames.focus,
                                        !!t
                                    );
                                },
                                triggerChangeEvent: function () {
                                    if (!this.settings.mixMode.integrated) {
                                        var t = this.DOM.originalInput,
                                            e =
                                                this.state
                                                    .lastOriginalValueReported !==
                                                t.value,
                                            i = new CustomEvent("change", {
                                                bubbles: !0,
                                            });
                                        e &&
                                            ((this.state.lastOriginalValueReported =
                                                t.value),
                                            (i.simulated = !0),
                                            t._valueTracker &&
                                                t._valueTracker.setValue(
                                                    Math.random()
                                                ),
                                            t.dispatchEvent(i),
                                            this.trigger(
                                                "change",
                                                this.state
                                                    .lastOriginalValueReported
                                            ),
                                            (t.value =
                                                this.state.lastOriginalValueReported));
                                    }
                                },
                                events: N,
                                fixFirefoxLastTagNoCaret() {},
                                setRangeAtStartEnd(t, e) {
                                    if (e) {
                                        (t = "number" == typeof t ? t : !!t),
                                            (e = e.lastChild || e);
                                        var i = document.getSelection();
                                        if (
                                            i.focusNode instanceof Element &&
                                            !this.DOM.input.contains(
                                                i.focusNode
                                            )
                                        )
                                            return !0;
                                        try {
                                            i.rangeCount >= 1 &&
                                                ["Start", "End"].forEach((s) =>
                                                    i
                                                        .getRangeAt(0)
                                                        ["set" + s](
                                                            e,
                                                            t || e.length
                                                        )
                                                );
                                        } catch (t) {
                                            console.warn("Tagify: ", t);
                                        }
                                    }
                                },
                                insertAfterTag(t, e) {
                                    if (
                                        ((e =
                                            e ||
                                            this.settings.mixMode
                                                .insertAfterTag),
                                        t && t.parentNode && e)
                                    )
                                        return (
                                            (e =
                                                "string" == typeof e
                                                    ? document.createTextNode(e)
                                                    : e),
                                            t.parentNode.insertBefore(
                                                e,
                                                t.nextSibling
                                            ),
                                            e
                                        );
                                },
                                editTagChangeDetected(t) {
                                    var e = t.__originalData;
                                    for (var i in e)
                                        if (
                                            !this.dataProps.includes(i) &&
                                            t[i] != e[i]
                                        )
                                            return !0;
                                    return !1;
                                },
                                getTagTextNode(t) {
                                    return t.querySelector(
                                        this.settings.classNames.tagTextSelector
                                    );
                                },
                                setTagTextNode(t, e) {
                                    this.getTagTextNode(t).innerHTML = d(e);
                                },
                                editTag(t, e) {
                                    (t = t || this.getLastTag()),
                                        (e = e || {}),
                                        this.dropdown.hide();
                                    var i = this.settings,
                                        s = this.getTagTextNode(t),
                                        a = this.getNodeIndex(t),
                                        n = T(t),
                                        o = this.events.callbacks,
                                        r = !0;
                                    if (s) {
                                        if (
                                            !(
                                                n instanceof Object &&
                                                "editable" in n
                                            ) ||
                                            n.editable
                                        )
                                            return (
                                                (n = T(t, {
                                                    __originalData: g({}, n),
                                                    __originalHTML: t.cloneNode(
                                                        !0
                                                    ),
                                                })),
                                                T(
                                                    n.__originalHTML,
                                                    n.__originalData
                                                ),
                                                s.setAttribute(
                                                    "contenteditable",
                                                    !0
                                                ),
                                                t.classList.add(
                                                    i.classNames.tagEditing
                                                ),
                                                s.addEventListener(
                                                    "focus",
                                                    o.onEditTagFocus.bind(
                                                        this,
                                                        t
                                                    )
                                                ),
                                                s.addEventListener(
                                                    "blur",
                                                    o.onEditTagBlur.bind(
                                                        this,
                                                        this.getTagTextNode(t)
                                                    )
                                                ),
                                                s.addEventListener(
                                                    "input",
                                                    o.onEditTagInput.bind(
                                                        this,
                                                        s
                                                    )
                                                ),
                                                s.addEventListener(
                                                    "paste",
                                                    o.onEditTagPaste.bind(
                                                        this,
                                                        s
                                                    )
                                                ),
                                                s.addEventListener(
                                                    "keydown",
                                                    (e) =>
                                                        o.onEditTagkeydown.call(
                                                            this,
                                                            e,
                                                            t
                                                        )
                                                ),
                                                s.addEventListener(
                                                    "compositionstart",
                                                    o.onCompositionStart.bind(
                                                        this
                                                    )
                                                ),
                                                s.addEventListener(
                                                    "compositionend",
                                                    o.onCompositionEnd.bind(
                                                        this
                                                    )
                                                ),
                                                e.skipValidation ||
                                                    (r =
                                                        this.editTagToggleValidity(
                                                            t
                                                        )),
                                                (s.originalIsValid = r),
                                                this.trigger("edit:start", {
                                                    tag: t,
                                                    index: a,
                                                    data: n,
                                                    isValid: r,
                                                }),
                                                s.focus(),
                                                this.setRangeAtStartEnd(!1, s),
                                                this
                                            );
                                    } else
                                        console.warn(
                                            "Cannot find element in Tag template: .",
                                            i.classNames.tagTextSelector
                                        );
                                },
                                editTagToggleValidity(t, e) {
                                    var i;
                                    if ((e = e || T(t)))
                                        return (
                                            (i =
                                                !("__isValid" in e) ||
                                                !0 === e.__isValid) ||
                                                this.removeTagsFromValue(t),
                                            this.update(),
                                            t.classList.toggle(
                                                this.settings.classNames
                                                    .tagNotAllowed,
                                                !i
                                            ),
                                            (e.__isValid = i),
                                            e.__isValid
                                        );
                                    console.warn("tag has no data: ", t, e);
                                },
                                onEditTagDone(t, e) {
                                    e = e || {};
                                    var i,
                                        s = {
                                            tag: (t =
                                                t || this.state.editing.scope),
                                            index: this.getNodeIndex(t),
                                            previousData: T(t),
                                            data: e,
                                        },
                                        a = this.settings;
                                    this.trigger("edit:beforeUpdate", s, {
                                        cloneData: !1,
                                    }),
                                        (this.state.editing = !1),
                                        delete e.__originalData,
                                        delete e.__originalHTML,
                                        t &&
                                        ((i = e[a.tagTextProp])
                                            ? i.trim() && i
                                            : a.tagTextProp in e
                                            ? void 0
                                            : e.value)
                                            ? ((t = this.replaceTag(t, e)),
                                              this.editTagToggleValidity(t, e),
                                              a.a11y.focusableTags
                                                  ? t.focus()
                                                  : w(t))
                                            : t && this.removeTags(t),
                                        this.trigger("edit:updated", s),
                                        this.dropdown.hide(),
                                        this.settings.keepInvalidTags &&
                                            this.reCheckInvalidTags();
                                },
                                replaceTag(t, e) {
                                    (e && e.value) || (e = t.__tagifyTagData),
                                        e.__isValid &&
                                            1 != e.__isValid &&
                                            g(
                                                e,
                                                this.getInvalidTagAttrs(
                                                    e,
                                                    e.__isValid
                                                )
                                            );
                                    var i = this.createTagElem(e);
                                    return (
                                        t.parentNode.replaceChild(i, t),
                                        this.updateValueByDOMTags(),
                                        i
                                    );
                                },
                                updateValueByDOMTags() {
                                    (this.value.length = 0),
                                        [].forEach.call(
                                            this.getTagElms(),
                                            (t) => {
                                                t.classList.contains(
                                                    this.settings.classNames.tagNotAllowed.split(
                                                        " "
                                                    )[0]
                                                ) || this.value.push(T(t));
                                            }
                                        ),
                                        this.update();
                                },
                                injectAtCaret(t, e) {
                                    if (
                                        !(e =
                                            e || this.state.selection?.range) &&
                                        t
                                    )
                                        return this.appendMixTags(t), this;
                                    let i = f(t, e);
                                    return (
                                        this.setRangeAtStartEnd(!1, i),
                                        this.updateValueByDOMTags(),
                                        this.update(),
                                        this
                                    );
                                },
                                input: {
                                    set() {
                                        let t =
                                                arguments.length > 0 &&
                                                void 0 !== arguments[0]
                                                    ? arguments[0]
                                                    : "",
                                            e =
                                                !(
                                                    arguments.length > 1 &&
                                                    void 0 !== arguments[1]
                                                ) || arguments[1];
                                        var i =
                                            this.settings.dropdown
                                                .closeOnSelect;
                                        (this.state.inputText = t),
                                            e &&
                                                (this.DOM.input.innerHTML = d(
                                                    "" + t
                                                )),
                                            !t &&
                                                i &&
                                                this.dropdown.hide.bind(this),
                                            this.input.autocomplete.suggest.call(
                                                this
                                            ),
                                            this.input.validate.call(this);
                                    },
                                    raw() {
                                        return this.DOM.input.textContent;
                                    },
                                    validate() {
                                        var t =
                                            !this.state.inputText ||
                                            !0 ===
                                                this.validateTag({
                                                    value: this.state.inputText,
                                                });
                                        return (
                                            this.DOM.input.classList.toggle(
                                                this.settings.classNames
                                                    .inputInvalid,
                                                !t
                                            ),
                                            t
                                        );
                                    },
                                    normalize(t, e) {
                                        var i = t || this.DOM.input,
                                            s = [];
                                        i.childNodes.forEach(
                                            (t) =>
                                                3 == t.nodeType &&
                                                s.push(t.nodeValue)
                                        ),
                                            (s = s.join("\n"));
                                        try {
                                            s = s.replace(
                                                /(?:\r\n|\r|\n)/g,
                                                this.settings.delimiters.source.charAt(
                                                    0
                                                )
                                            );
                                        } catch (t) {}
                                        return (
                                            (s = s.replace(/\s/g, " ")),
                                            e?.trim ? this.trim(s) : s
                                        );
                                    },
                                    autocomplete: {
                                        suggest(t) {
                                            if (
                                                this.settings.autoComplete
                                                    .enabled
                                            ) {
                                                "string" ==
                                                    typeof (t = t || {
                                                        value: "",
                                                    }) &&
                                                    (t = {
                                                        value: t,
                                                    });
                                                var e =
                                                    this.dropdown.getMappedValue(
                                                        t
                                                    );
                                                if ("number" != typeof e) {
                                                    var i = e
                                                            .substr(
                                                                0,
                                                                this.state
                                                                    .inputText
                                                                    .length
                                                            )
                                                            .toLowerCase(),
                                                        s = e.substring(
                                                            this.state.inputText
                                                                .length
                                                        );
                                                    e &&
                                                    this.state.inputText &&
                                                    i ==
                                                        this.state.inputText.toLowerCase()
                                                        ? (this.DOM.input.setAttribute(
                                                              "data-suggest",
                                                              s
                                                          ),
                                                          (this.state.inputSuggestion =
                                                              t))
                                                        : (this.DOM.input.removeAttribute(
                                                              "data-suggest"
                                                          ),
                                                          delete this.state
                                                              .inputSuggestion);
                                                }
                                            }
                                        },
                                        set(t) {
                                            var e =
                                                    this.DOM.input.getAttribute(
                                                        "data-suggest"
                                                    ),
                                                i =
                                                    t ||
                                                    (e
                                                        ? this.state.inputText +
                                                          e
                                                        : null);
                                            return (
                                                !!i &&
                                                ("mix" == this.settings.mode
                                                    ? this.replaceTextWithNode(
                                                          document.createTextNode(
                                                              this.state.tag
                                                                  .prefix + i
                                                          )
                                                      )
                                                    : (this.input.set.call(
                                                          this,
                                                          i
                                                      ),
                                                      this.setRangeAtStartEnd(
                                                          !1,
                                                          this.DOM.input
                                                      )),
                                                this.input.autocomplete.suggest.call(
                                                    this
                                                ),
                                                this.dropdown.hide(),
                                                !0)
                                            );
                                        },
                                    },
                                },
                                getTagIdx(t) {
                                    return this.value.findIndex(
                                        (e) => e.__tagId == (t || {}).__tagId
                                    );
                                },
                                getNodeIndex(t) {
                                    var e = 0;
                                    if (t)
                                        for (; (t = t.previousElementSibling); )
                                            e++;
                                    return e;
                                },
                                getTagElms() {
                                    for (
                                        var t = arguments.length,
                                            e = new Array(t),
                                            i = 0;
                                        i < t;
                                        i++
                                    )
                                        e[i] = arguments[i];
                                    var s =
                                        "." +
                                        [
                                            ...this.settings.classNames.tag.split(
                                                " "
                                            ),
                                            ...e,
                                        ].join(".");
                                    return [].slice.call(
                                        this.DOM.scope.querySelectorAll(s)
                                    );
                                },
                                getLastTag() {
                                    var t = this.DOM.scope.querySelectorAll(
                                        `${this.settings.classNames.tagSelector}:not(.${this.settings.classNames.tagHide}):not([readonly])`
                                    );
                                    return t[t.length - 1];
                                },
                                isTagDuplicate(t, e, i) {
                                    var a = 0;
                                    if ("select" == this.settings.mode)
                                        return !1;
                                    for (let n of this.value)
                                        s(this.trim("" + t), n.value, e) &&
                                            i != n.__tagId &&
                                            a++;
                                    return a;
                                },
                                getTagIndexByValue(t) {
                                    var e = [],
                                        i =
                                            this.settings.dropdown
                                                .caseSensitive;
                                    return (
                                        this.getTagElms().forEach((a, n) => {
                                            a.__tagifyTagData &&
                                                s(
                                                    this.trim(
                                                        a.__tagifyTagData.value
                                                    ),
                                                    t,
                                                    i
                                                ) &&
                                                e.push(n);
                                        }),
                                        e
                                    );
                                },
                                getTagElmByValue(t) {
                                    var e = this.getTagIndexByValue(t)[0];
                                    return this.getTagElms()[e];
                                },
                                flashTag(t) {
                                    t &&
                                        (t.classList.add(
                                            this.settings.classNames.tagFlash
                                        ),
                                        setTimeout(() => {
                                            t.classList.remove(
                                                this.settings.classNames
                                                    .tagFlash
                                            );
                                        }, 100));
                                },
                                isTagBlacklisted(t) {
                                    return (
                                        (t = this.trim(t.toLowerCase())),
                                        this.settings.blacklist.filter(
                                            (e) => ("" + e).toLowerCase() == t
                                        ).length
                                    );
                                },
                                isTagWhitelisted(t) {
                                    return !!this.getWhitelistItem(t);
                                },
                                getWhitelistItem(t, e, i) {
                                    e = e || "value";
                                    var a,
                                        n = this.settings;
                                    return (
                                        (i = i || n.whitelist).some((i) => {
                                            var o =
                                                "string" == typeof i
                                                    ? i
                                                    : i[e] || i.value;
                                            if (
                                                s(
                                                    o,
                                                    t,
                                                    n.dropdown.caseSensitive,
                                                    n.trim
                                                )
                                            )
                                                return (
                                                    (a =
                                                        "string" == typeof i
                                                            ? {
                                                                  value: i,
                                                              }
                                                            : i),
                                                    !0
                                                );
                                        }),
                                        a ||
                                            "value" != e ||
                                            "value" == n.tagTextProp ||
                                            (a = this.getWhitelistItem(
                                                t,
                                                n.tagTextProp,
                                                i
                                            )),
                                        a
                                    );
                                },
                                validateTag(t) {
                                    var e = this.settings,
                                        i =
                                            "value" in t
                                                ? "value"
                                                : e.tagTextProp,
                                        s = this.trim(t[i] + "");
                                    return (t[i] + "").trim()
                                        ? "mix" != e.mode &&
                                          e.pattern &&
                                          e.pattern instanceof RegExp &&
                                          !e.pattern.test(s)
                                            ? this.TEXTS.pattern
                                            : !e.duplicates &&
                                              this.isTagDuplicate(
                                                  s,
                                                  e.dropdown.caseSensitive,
                                                  t.__tagId
                                              )
                                            ? this.TEXTS.duplicate
                                            : this.isTagBlacklisted(s) ||
                                              (e.enforceWhitelist &&
                                                  !this.isTagWhitelisted(s))
                                            ? this.TEXTS.notAllowed
                                            : !e.validate || e.validate(t)
                                        : this.TEXTS.empty;
                                },
                                getInvalidTagAttrs(t, e) {
                                    return {
                                        "aria-invalid": !0,
                                        class: `${t.class || ""} ${
                                            this.settings.classNames
                                                .tagNotAllowed
                                        }`.trim(),
                                        title: e,
                                    };
                                },
                                hasMaxTags() {
                                    return (
                                        this.value.length >=
                                            this.settings.maxTags &&
                                        this.TEXTS.exceed
                                    );
                                },
                                setReadonly(t, e) {
                                    var i = this.settings;
                                    document.activeElement.blur(),
                                        (i[e || "readonly"] = t),
                                        this.DOM.scope[
                                            (t ? "set" : "remove") + "Attribute"
                                        ](e || "readonly", !0),
                                        (this.settings.userInput = !0),
                                        this.setContentEditable(!t);
                                },
                                setContentEditable(t) {
                                    this.settings.userInput &&
                                        ((this.DOM.input.contentEditable = t),
                                        (this.DOM.input.tabIndex = t ? 0 : -1));
                                },
                                setDisabled(t) {
                                    this.setReadonly(t, "disabled");
                                },
                                normalizeTags(t) {
                                    var e = this.settings,
                                        i = e.whitelist,
                                        s = e.delimiters,
                                        a = e.mode,
                                        n = e.tagTextProp,
                                        o = [],
                                        r = !!i && i[0] instanceof Object,
                                        l = Array.isArray(t),
                                        d = l && t[0].value,
                                        h = (t) =>
                                            (t + "")
                                                .split(s)
                                                .filter((t) => t)
                                                .map((t) => ({
                                                    [n]: this.trim(t),
                                                    value: this.trim(t),
                                                }));
                                    if (
                                        ("number" == typeof t &&
                                            (t = t.toString()),
                                        "string" == typeof t)
                                    ) {
                                        if (!t.trim()) return [];
                                        t = h(t);
                                    } else
                                        l &&
                                            (t = [].concat(
                                                ...t.map((t) =>
                                                    null != t.value ? t : h(t)
                                                )
                                            ));
                                    return (
                                        r &&
                                            !d &&
                                            (t.forEach((t) => {
                                                var e = o.map((t) => t.value),
                                                    i =
                                                        this.dropdown.filterListItems.call(
                                                            this,
                                                            t[n],
                                                            {
                                                                exact: !0,
                                                            }
                                                        );
                                                this.settings.duplicates ||
                                                    (i = i.filter(
                                                        (t) =>
                                                            !e.includes(t.value)
                                                    ));
                                                var s =
                                                    i.length > 1
                                                        ? this.getWhitelistItem(
                                                              t[n],
                                                              n,
                                                              i
                                                          )
                                                        : i[0];
                                                s && s instanceof Object
                                                    ? o.push(s)
                                                    : "mix" != a &&
                                                      (null == t.value &&
                                                          (t.value = t[n]),
                                                      o.push(t));
                                            }),
                                            o.length && (t = o)),
                                        t
                                    );
                                },
                                parseMixTags(t) {
                                    var e = this.settings,
                                        i = e.mixTagsInterpolator,
                                        s = e.duplicates,
                                        a = e.transformTag,
                                        n = e.enforceWhitelist,
                                        o = e.maxTags,
                                        r = e.tagTextProp,
                                        l = [];
                                    (t = t
                                        .split(i[0])
                                        .map((t, e) => {
                                            var d,
                                                h,
                                                g,
                                                p = t.split(i[1]),
                                                c = p[0],
                                                u = l.length == o;
                                            try {
                                                if (c == +c) throw Error;
                                                h = JSON.parse(c);
                                            } catch (t) {
                                                h = this.normalizeTags(
                                                    c
                                                )[0] || {
                                                    value: c,
                                                };
                                            }
                                            if (
                                                (a.call(this, h),
                                                u ||
                                                    !(p.length > 1) ||
                                                    (n &&
                                                        !this.isTagWhitelisted(
                                                            h.value
                                                        )) ||
                                                    (!s &&
                                                        this.isTagDuplicate(
                                                            h.value
                                                        )))
                                            ) {
                                                if (t) return e ? i[0] + t : t;
                                            } else
                                                (h[(d = h[r] ? r : "value")] =
                                                    this.trim(h[d])),
                                                    (g = this.createTagElem(h)),
                                                    l.push(h),
                                                    g.classList.add(
                                                        this.settings.classNames
                                                            .tagNoAnimation
                                                    ),
                                                    (p[0] = g.outerHTML),
                                                    this.value.push(h);
                                            return p.join("");
                                        })
                                        .join("")),
                                        (this.DOM.input.innerHTML = t),
                                        this.DOM.input.appendChild(
                                            document.createTextNode("")
                                        ),
                                        this.DOM.input.normalize();
                                    var d = this.getTagElms();
                                    return (
                                        d.forEach((t, e) => T(t, l[e])),
                                        this.update({
                                            withoutChangeEvent: !0,
                                        }),
                                        b(d, this.state.hasFocus),
                                        t
                                    );
                                },
                                replaceTextWithNode(t, e) {
                                    if (this.state.tag || e) {
                                        e =
                                            e ||
                                            this.state.tag.prefix +
                                                this.state.tag.value;
                                        var i,
                                            s,
                                            a =
                                                this.state.selection ||
                                                window.getSelection(),
                                            n = a.anchorNode,
                                            o = this.state.tag.delimiters
                                                ? this.state.tag.delimiters
                                                      .length
                                                : 0;
                                        return (
                                            n.splitText(a.anchorOffset - o),
                                            -1 ==
                                                (i =
                                                    n.nodeValue.lastIndexOf(
                                                        e
                                                    )) ||
                                                ((s = n.splitText(i)),
                                                t &&
                                                    n.parentNode.replaceChild(
                                                        t,
                                                        s
                                                    )),
                                            !0
                                        );
                                    }
                                },
                                selectTag(t, e) {
                                    var i = this.settings;
                                    if (
                                        !i.enforceWhitelist ||
                                        this.isTagWhitelisted(e.value)
                                    ) {
                                        this.input.set.call(
                                            this,
                                            e[i.tagTextProp] || e.value,
                                            !0
                                        ),
                                            this.state.actions.selectOption &&
                                                setTimeout(() =>
                                                    this.setRangeAtStartEnd(
                                                        !1,
                                                        this.DOM.input
                                                    )
                                                );
                                        var s = this.getLastTag();
                                        return (
                                            s
                                                ? this.replaceTag(s, e)
                                                : this.appendTag(t),
                                            (this.value[0] = e),
                                            this.update(),
                                            this.trigger("add", {
                                                tag: t,
                                                data: e,
                                            }),
                                            [t]
                                        );
                                    }
                                },
                                addEmptyTag(t) {
                                    var e = g(
                                            {
                                                value: "",
                                            },
                                            t || {}
                                        ),
                                        i = this.createTagElem(e);
                                    T(i, e),
                                        this.appendTag(i),
                                        this.editTag(i, {
                                            skipValidation: !0,
                                        });
                                },
                                addTags(t, e, i) {
                                    var s = [],
                                        a = this.settings,
                                        n = [],
                                        o = document.createDocumentFragment();
                                    if (
                                        ((i = i || a.skipInvalid),
                                        !t || 0 == t.length)
                                    )
                                        return s;
                                    switch (
                                        ((t = this.normalizeTags(t)), a.mode)
                                    ) {
                                        case "mix":
                                            return this.addMixTags(t);
                                        case "select":
                                            (e = !1), this.removeAllTags();
                                    }
                                    return (
                                        this.DOM.input.removeAttribute("style"),
                                        t.forEach((t) => {
                                            var e,
                                                r = {},
                                                l = Object.assign({}, t, {
                                                    value: t.value + "",
                                                });
                                            if (
                                                ((t = Object.assign({}, l)),
                                                a.transformTag.call(this, t),
                                                (t.__isValid =
                                                    this.hasMaxTags() ||
                                                    this.validateTag(t)),
                                                !0 !== t.__isValid)
                                            ) {
                                                if (i) return;
                                                if (
                                                    (g(
                                                        r,
                                                        this.getInvalidTagAttrs(
                                                            t,
                                                            t.__isValid
                                                        ),
                                                        {
                                                            __preInvalidData: l,
                                                        }
                                                    ),
                                                    t.__isValid ==
                                                        this.TEXTS.duplicate &&
                                                        this.flashTag(
                                                            this.getTagElmByValue(
                                                                t.value
                                                            )
                                                        ),
                                                    !a.createInvalidTags)
                                                )
                                                    return void n.push(t.value);
                                            }
                                            if (
                                                ("readonly" in t &&
                                                    (t.readonly
                                                        ? (r["aria-readonly"] =
                                                              !0)
                                                        : delete t.readonly),
                                                (e = this.createTagElem(t, r)),
                                                s.push(e),
                                                "select" == a.mode)
                                            )
                                                return this.selectTag(e, t);
                                            o.appendChild(e),
                                                t.__isValid &&
                                                !0 === t.__isValid
                                                    ? (this.value.push(t),
                                                      this.trigger("add", {
                                                          tag: e,
                                                          index:
                                                              this.value
                                                                  .length - 1,
                                                          data: t,
                                                      }))
                                                    : (this.trigger("invalid", {
                                                          data: t,
                                                          index: this.value
                                                              .length,
                                                          tag: e,
                                                          message: t.__isValid,
                                                      }),
                                                      a.keepInvalidTags ||
                                                          setTimeout(
                                                              () =>
                                                                  this.removeTags(
                                                                      e,
                                                                      !0
                                                                  ),
                                                              1e3
                                                          )),
                                                this.dropdown.position();
                                        }),
                                        this.appendTag(o),
                                        this.update(),
                                        t.length &&
                                            e &&
                                            (this.input.set.call(
                                                this,
                                                a.createInvalidTags
                                                    ? ""
                                                    : n.join(a._delimiters)
                                            ),
                                            this.setRangeAtStartEnd(
                                                !1,
                                                this.DOM.input
                                            )),
                                        a.dropdown.enabled &&
                                            this.dropdown.refilter(),
                                        s
                                    );
                                },
                                addMixTags(t) {
                                    if (
                                        (t = this.normalizeTags(t))[0].prefix ||
                                        this.state.tag
                                    )
                                        return this.prefixedTextToTag(t[0]);
                                    var e = document.createDocumentFragment();
                                    return (
                                        t.forEach((t) => {
                                            var i = this.createTagElem(t);
                                            e.appendChild(i);
                                        }),
                                        this.appendMixTags(e),
                                        e
                                    );
                                },
                                appendMixTags(t) {
                                    var e = !!this.state.selection;
                                    e
                                        ? this.injectAtCaret(t)
                                        : (this.DOM.input.focus(),
                                          (e =
                                              this.setStateSelection()).range.setStart(
                                              this.DOM.input,
                                              e.range.endOffset
                                          ),
                                          e.range.setEnd(
                                              this.DOM.input,
                                              e.range.endOffset
                                          ),
                                          this.DOM.input.appendChild(t),
                                          this.updateValueByDOMTags(),
                                          this.update());
                                },
                                prefixedTextToTag(t) {
                                    var e,
                                        i = this.settings,
                                        s = this.state.tag.delimiters;
                                    if (
                                        (i.transformTag.call(this, t),
                                        (t.prefix =
                                            t.prefix || this.state.tag
                                                ? this.state.tag.prefix
                                                : (i.pattern.source ||
                                                      i.pattern)[0]),
                                        (e = this.createTagElem(t)),
                                        this.replaceTextWithNode(e) ||
                                            this.DOM.input.appendChild(e),
                                        setTimeout(
                                            () =>
                                                e.classList.add(
                                                    this.settings.classNames
                                                        .tagNoAnimation
                                                ),
                                            300
                                        ),
                                        this.value.push(t),
                                        this.update(),
                                        !s)
                                    ) {
                                        var a = this.insertAfterTag(e) || e;
                                        setTimeout(w, 0, a);
                                    }
                                    return (
                                        (this.state.tag = null),
                                        this.trigger(
                                            "add",
                                            g(
                                                {},
                                                {
                                                    tag: e,
                                                },
                                                {
                                                    data: t,
                                                }
                                            )
                                        ),
                                        e
                                    );
                                },
                                appendTag(t) {
                                    var e = this.DOM,
                                        i = e.input;
                                    e.scope.insertBefore(t, i);
                                },
                                createTagElem(t, i) {
                                    t.__tagId = m();
                                    var s,
                                        a = g(
                                            {},
                                            t,
                                            e(
                                                {
                                                    value: d(t.value + ""),
                                                },
                                                i
                                            )
                                        );
                                    return (
                                        (function (t) {
                                            for (
                                                var e,
                                                    i =
                                                        document.createNodeIterator(
                                                            t,
                                                            NodeFilter.SHOW_TEXT,
                                                            null,
                                                            !1
                                                        );
                                                (e = i.nextNode());

                                            )
                                                e.textContent.trim() ||
                                                    e.parentNode.removeChild(e);
                                        })(
                                            (s = this.parseTemplate("tag", [
                                                a,
                                                this,
                                            ]))
                                        ),
                                        T(s, t),
                                        s
                                    );
                                },
                                reCheckInvalidTags() {
                                    var t = this.settings;
                                    this.getTagElms(
                                        t.classNames.tagNotAllowed
                                    ).forEach((e, i) => {
                                        var s = T(e),
                                            a = this.hasMaxTags(),
                                            n = this.validateTag(s),
                                            o = !0 === n && !a;
                                        if (
                                            ("select" == t.mode &&
                                                this.toggleScopeValidation(n),
                                            o)
                                        )
                                            return (
                                                (s = s.__preInvalidData
                                                    ? s.__preInvalidData
                                                    : {
                                                          value: s.value,
                                                      }),
                                                this.replaceTag(e, s)
                                            );
                                        e.title = a || n;
                                    });
                                },
                                removeTags(t, e, i) {
                                    var s,
                                        a = this.settings;
                                    if (
                                        ((t =
                                            t && t instanceof HTMLElement
                                                ? [t]
                                                : t instanceof Array
                                                ? t
                                                : t
                                                ? [t]
                                                : [this.getLastTag()]),
                                        (s = t.reduce((t, e) => {
                                            e &&
                                                "string" == typeof e &&
                                                (e = this.getTagElmByValue(e));
                                            var i = T(e);
                                            return (
                                                e &&
                                                    i &&
                                                    !i.readonly &&
                                                    t.push({
                                                        node: e,
                                                        idx: this.getTagIdx(i),
                                                        data: T(e, {
                                                            __removed: !0,
                                                        }),
                                                    }),
                                                t
                                            );
                                        }, [])),
                                        (i =
                                            "number" == typeof i
                                                ? i
                                                : this.CSSVars
                                                      .tagHideTransition),
                                        "select" == a.mode &&
                                            ((i = 0),
                                            this.input.set.call(this)),
                                        1 == s.length &&
                                            "select" != a.mode &&
                                            s[0].node.classList.contains(
                                                a.classNames.tagNotAllowed
                                            ) &&
                                            (e = !0),
                                        s.length)
                                    )
                                        return a.hooks
                                            .beforeRemoveTag(s, {
                                                tagify: this,
                                            })
                                            .then(() => {
                                                function t(t) {
                                                    t.node.parentNode &&
                                                        (t.node.parentNode.removeChild(
                                                            t.node
                                                        ),
                                                        e
                                                            ? a.keepInvalidTags &&
                                                              this.trigger(
                                                                  "remove",
                                                                  {
                                                                      tag: t.node,
                                                                      index: t.idx,
                                                                  }
                                                              )
                                                            : (this.trigger(
                                                                  "remove",
                                                                  {
                                                                      tag: t.node,
                                                                      index: t.idx,
                                                                      data: t.data,
                                                                  }
                                                              ),
                                                              this.dropdown.refilter(),
                                                              this.dropdown.position(),
                                                              this.DOM.input.normalize(),
                                                              a.keepInvalidTags &&
                                                                  this.reCheckInvalidTags()));
                                                }
                                                i && i > 10 && 1 == s.length
                                                    ? function (e) {
                                                          (e.node.style.width =
                                                              parseFloat(
                                                                  window.getComputedStyle(
                                                                      e.node
                                                                  ).width
                                                              ) + "px"),
                                                              document.body
                                                                  .clientTop,
                                                              e.node.classList.add(
                                                                  a.classNames
                                                                      .tagHide
                                                              ),
                                                              setTimeout(
                                                                  t.bind(this),
                                                                  i,
                                                                  e
                                                              );
                                                      }.call(this, s[0])
                                                    : s.forEach(t.bind(this)),
                                                    e ||
                                                        (this.removeTagsFromValue(
                                                            s.map((t) => t.node)
                                                        ),
                                                        this.update(),
                                                        "select" == a.mode &&
                                                            this.setContentEditable(
                                                                !0
                                                            ));
                                            })
                                            .catch((t) => {});
                                },
                                removeTagsFromDOM() {
                                    [].slice
                                        .call(this.getTagElms())
                                        .forEach((t) =>
                                            t.parentNode.removeChild(t)
                                        );
                                },
                                removeTagsFromValue(t) {
                                    (t = Array.isArray(t) ? t : [t]).forEach(
                                        (t) => {
                                            var e = T(t),
                                                i = this.getTagIdx(e);
                                            i > -1 && this.value.splice(i, 1);
                                        }
                                    );
                                },
                                removeAllTags(t) {
                                    (t = t || {}),
                                        (this.value = []),
                                        "mix" == this.settings.mode
                                            ? (this.DOM.input.innerHTML = "")
                                            : this.removeTagsFromDOM(),
                                        this.dropdown.refilter(),
                                        this.dropdown.position(),
                                        this.state.dropdown.visible &&
                                            setTimeout(() => {
                                                this.DOM.input.focus();
                                            }),
                                        "select" == this.settings.mode &&
                                            (this.input.set.call(this),
                                            this.setContentEditable(!0)),
                                        this.update(t);
                                },
                                postUpdate() {
                                    this.state.blockChangeEvent = !1;
                                    var t = this.settings,
                                        e = t.classNames,
                                        i =
                                            "mix" == t.mode
                                                ? t.mixMode.integrated
                                                    ? this.DOM.input.textContent
                                                    : this.DOM.originalInput.value.trim()
                                                : this.value.length +
                                                  this.input.raw.call(this)
                                                      .length;
                                    this.toggleClass(
                                        e.hasMaxTags,
                                        this.value.length >= t.maxTags
                                    ),
                                        this.toggleClass(
                                            e.hasNoTags,
                                            !this.value.length
                                        ),
                                        this.toggleClass(e.empty, !i),
                                        "select" == t.mode &&
                                            this.toggleScopeValidation(
                                                this.value?.[0]?.__isValid
                                            );
                                },
                                setOriginalInputValue(t) {
                                    var e = this.DOM.originalInput;
                                    this.settings.mixMode.integrated ||
                                        ((e.value = t),
                                        (e.tagifyValue = e.value),
                                        this.setPersistedData(t, "value"));
                                },
                                update(t) {
                                    clearTimeout(this.debouncedUpdateTimeout),
                                        (this.debouncedUpdateTimeout =
                                            setTimeout(
                                                function () {
                                                    var e =
                                                        this.getInputValue();
                                                    this.setOriginalInputValue(
                                                        e
                                                    ),
                                                        (this.settings
                                                            .onChangeAfterBlur &&
                                                            (t || {})
                                                                .withoutChangeEvent) ||
                                                            this.state
                                                                .blockChangeEvent ||
                                                            this.triggerChangeEvent(),
                                                        this.postUpdate();
                                                }.bind(this),
                                                100
                                            ));
                                },
                                getInputValue() {
                                    var t = this.getCleanValue();
                                    return "mix" == this.settings.mode
                                        ? this.getMixedTagsAsString(t)
                                        : t.length
                                        ? this.settings.originalInputValueFormat
                                            ? this.settings.originalInputValueFormat(
                                                  t
                                              )
                                            : JSON.stringify(t)
                                        : "";
                                },
                                getCleanValue(t) {
                                    return a(t || this.value, this.dataProps);
                                },
                                getMixedTagsAsString() {
                                    var t = "",
                                        e = this,
                                        i = this.settings,
                                        s =
                                            i.originalInputValueFormat ||
                                            JSON.stringify,
                                        a = i.mixTagsInterpolator;
                                    return (
                                        (function i(o) {
                                            o.childNodes.forEach((o) => {
                                                if (1 == o.nodeType) {
                                                    const r = T(o);
                                                    if (
                                                        ("BR" == o.tagName &&
                                                            (t += "\r\n"),
                                                        r && v.call(e, o))
                                                    ) {
                                                        if (r.__removed) return;
                                                        t +=
                                                            a[0] +
                                                            s(
                                                                n(
                                                                    r,
                                                                    e.dataProps
                                                                )
                                                            ) +
                                                            a[1];
                                                    } else
                                                        o.getAttribute(
                                                            "style"
                                                        ) ||
                                                        [
                                                            "B",
                                                            "I",
                                                            "U",
                                                        ].includes(o.tagName)
                                                            ? (t +=
                                                                  o.textContent)
                                                            : ("DIV" !=
                                                                  o.tagName &&
                                                                  "P" !=
                                                                      o.tagName) ||
                                                              ((t += "\r\n"),
                                                              i(o));
                                                } else t += o.textContent;
                                            });
                                        })(this.DOM.input),
                                        t
                                    );
                                },
                            }),
                            (S.prototype.removeTag = S.prototype.removeTags),
                            S
                        );
                    })();
                },
            },
            e = {};
        function i(s) {
            var a = e[s];
            if (void 0 !== a) return a.exports;
            var n = (e[s] = {
                exports: {},
            });
            return t[s].call(n.exports, n, n.exports, i), n.exports;
        }
        (i.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return (
                i.d(e, {
                    a: e,
                }),
                e
            );
        }),
            (i.d = function (t, e) {
                for (var s in e)
                    i.o(e, s) &&
                        !i.o(t, s) &&
                        Object.defineProperty(t, s, {
                            enumerable: !0,
                            get: e[s],
                        });
            }),
            (i.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (i.r = function (t) {
                "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module",
                    }),
                    Object.defineProperty(t, "__esModule", {
                        value: !0,
                    });
            });
        var s = {};
        return (
            (function () {
                "use strict";
                i.r(s),
                    i.d(s, {
                        Tagify: function () {
                            return e.a;
                        },
                    });
                var t = i(8634),
                    e = i.n(t);
                try {
                    window.Tagify = e();
                } catch (t) {}
            })(),
            s
        );
    })();
});
