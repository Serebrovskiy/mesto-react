(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),c=a.n(o),i=(a(15),a(9)),s=a(1),u=a(6),l=a.n(u);var p=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{className:"header__logo",src:l.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}))},m=r.a.createContext();var d=function(e){var t=e.card,a=e.onCardClick,n=e.onCardLike,o=e.onCardDelete,c=r.a.useContext(m),i=t.owner._id===c._id,s="card__basket ".concat(i?"card__basket_visible":"card__basket_hidden"),u=t.likes.some((function(e){return e._id===c._id})),l="card__like ".concat(u?"card__like_active":"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card"},r.a.createElement("button",{type:"button",className:s,onClick:function(){o(t)}}),r.a.createElement("img",{className:"card__image",src:t.link,alt:t.name,onClick:function(){a(t)}}),r.a.createElement("div",{className:"card__container"},r.a.createElement("h3",{className:"card__title"},t.name),r.a.createElement("div",{className:"card__container-like"},r.a.createElement("button",{className:l,onClick:function(){n(t)}}),r.a.createElement("p",{className:"card__number-likes"},t.likes.length)))))},_=a(7),f=a(8),h=new(function(){function e(t){Object(_.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(f.a)(e,[{key:"_getResponse",value:function(e){return e.ok?e.json():Promise.reject("!!! \u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then(this._getResponse)}},{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then(this._getResponse)}},{key:"setProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._getResponse)}},{key:"createCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._getResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers,body:JSON.stringify({})})}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this._headers,body:JSON.stringify({id:e})}).then(this._getResponse)}},{key:"setAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._getResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-13",headers:{authorization:"14553299-9691-455d-8f0e-78b62284ce7d","Content-Type":"application/json"}});document.querySelector(".cards");var v=function(e){var t=e.onEditAvatar,a=e.onEditProfile,n=e.onAddCard,o=e.onCardClick,c=e.onCardLike,i=e.onCardDelete,s=e.onCardList,u=r.a.useContext(m);return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"profile"},r.a.createElement("div",{className:"profile__avatar-container",onClick:t},r.a.createElement("img",{className:"profile__avatar",src:u.avatar?u.avatar:"https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",alt:"\u0410\u0432\u0430\u0442\u0430\u0440"})),r.a.createElement("div",{className:"profile__name-block"},r.a.createElement("h2",{className:"profile__name"},u.name?u.name:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),r.a.createElement("button",{type:"button",className:"profile__edit",onClick:a}),r.a.createElement("p",{className:"profile__profession"},u.about?u.about:"...")),r.a.createElement("button",{type:"button",className:"profile__button",onClick:n})),r.a.createElement("section",{className:"cards"},s.map((function(e){return r.a.createElement(d,{card:e,key:e._id,onCardClick:o,onCardLike:c,onCardDelete:i})}))))};var E=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var b=function(e){var t=e.card,a=e.onClose;return r.a.createElement("div",{className:"popup popup_view-image ".concat(t?"popup_opened":"")},r.a.createElement("div",{className:"popup__grid popup__grid_image"},r.a.createElement("button",{type:"button",className:"popup__close-icon popup__close-icon_image",onClick:a}),r.a.createElement("figure",{className:"popup__figure"},r.a.createElement("img",{className:"popup__image",src:null===t||void 0===t?void 0:t.link,alt:""}),r.a.createElement("figcaption",{className:"popup__caption"},null===t||void 0===t?void 0:t.name))))};var g=function(e){var t=e.name,a=e.title,n=e.isOpen,o=e.onClose,c=e.onSubmit,i=e.isDisabled,s=e.children;return r.a.createElement("div",{className:"popup popup_".concat(t," ").concat(n?"popup_opened":"")},r.a.createElement("div",{className:"popup__grid"},r.a.createElement("button",{type:"button",className:"popup__close-icon",onClick:o}),r.a.createElement("form",{className:"popup__container popup__container_".concat(t),name:"form_".concat(t),onSubmit:c,noValidate:!0},r.a.createElement("h3",{className:"popup__title"},a),s,r.a.createElement("button",{className:"popup__button ".concat(i?"popup__button_disabled":""),disabled:i,type:"submit"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))};var k=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,o=r.a.useContext(m),c=r.a.useState(""),i=Object(s.a)(c,2),u=i[0],l=i[1],p=r.a.useState(""),d=Object(s.a)(p,2),_=d[0],f=d[1],h=r.a.useState(!1),v=Object(s.a)(h,2),E=v[0],b=v[1],k=r.a.useRef(""),C=r.a.useRef("");function N(){k.current.checkValidity()&&C.current.checkValidity()?b(!1):b(!0)}return r.a.useEffect((function(){l(o.name),f(o.about),b(!0)}),[o,t]),r.a.createElement(g,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:u,about:_})},isDisabled:E},r.a.createElement("input",{id:"name-input",type:"text",name:"inputProfileName",placeholder:"\u0418\u043c\u044f",className:"popup__input-text popup__input-text_type_name",value:u||"",onChange:function(e){l(e.target.value),N()},ref:k,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f\\s-]+$",minLength:"2",maxLength:"40",required:!0}),r.a.createElement("span",{id:"name-input-error",className:"popup__input-error"}),r.a.createElement("input",{id:"profession-input",type:"text",name:"inputProfileProfession",placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f",className:"popup__input-text popup__input-text_type_job",value:_||"",onChange:function(e){f(e.target.value),N()},ref:C,minLength:"2",maxLength:"200",required:!0}),r.a.createElement("span",{id:"profession-input-error",className:"popup__input-error"}))};var C=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,o=r.a.useRef(""),c=r.a.useState(""),i=Object(s.a)(c,2),u=i[0],l=i[1],p=r.a.useState(!0),m=Object(s.a)(p,2),d=m[0],_=m[1];return r.a.useEffect((function(){l("")}),[t]),r.a.createElement(g,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({avatar:o.current.value})},isDisabled:d},r.a.createElement("input",{id:"avatar-input",type:"url",name:"inputAvatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",className:"popup__input-text popup__input-text_type_avatar",ref:o,onChange:function(e){l(e.target.value),o.current.checkValidity()?_(!1):_(!0)},value:u||"",required:!0}),r.a.createElement("span",{id:"avatar-input-error",className:"popup__input-error"}))};var N=function(e){var t=e.isOpen,a=e.onClose,n=e.onAddPlace,o=r.a.useState(""),c=Object(s.a)(o,2),i=c[0],u=c[1],l=r.a.useState(""),p=Object(s.a)(l,2),m=p[0],d=p[1],_=r.a.useState(!0),f=Object(s.a)(_,2),h=f[0],v=f[1],E=r.a.useRef(""),b=r.a.useRef("");function k(){E.current.checkValidity()&&b.current.checkValidity()?v(!1):v(!0)}return r.a.useEffect((function(){u(""),d(""),v(!0)}),[t]),r.a.createElement(g,{name:"add_card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:i,link:m})},isDisabled:h},r.a.createElement("input",{id:"place-input",type:"text",name:"inputCardName",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input-text popup__input-text_type_place",onChange:function(e){u(e.target.value),k()},value:i||"",ref:E,minLength:"2",maxLength:"30",required:!0}),r.a.createElement("span",{id:"place-input-error",className:"popup__input-error"}),r.a.createElement("input",{id:"image-input",type:"url",name:"inputCardImage",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input-text popup__input-text_type_image",onChange:function(e){d(e.target.value),k()},value:m||"",ref:b,required:!0}),r.a.createElement("span",{id:"image-input-error",className:"popup__input-error"}))};var y=function(){var e=r.a.useState(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],o=r.a.useState(!1),c=Object(s.a)(o,2),u=c[0],l=c[1],d=r.a.useState(!1),_=Object(s.a)(d,2),f=_[0],g=_[1],y=r.a.useState(null),O=Object(s.a)(y,2),S=O[0],x=O[1],j=r.a.useState([]),L=Object(s.a)(j,2),w=L[0],P=L[1],U=r.a.useState(""),A=Object(s.a)(U,2),D=A[0],R=A[1];function T(){n(!1),l(!1),g(!1),setTimeout((function(){return x(null)}),250)}return r.a.useEffect((function(){h.getProfile().then((function(e){R(e)})).catch((function(e){return console.error(e)}))}),[]),r.a.useEffect((function(){var e=function(e){"Escape"===e.key&&T()};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}})),r.a.useEffect((function(){var e=function(e){e.target.classList.contains("popup_opened")&&T()};return document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}})),r.a.useEffect((function(){h.getInitialCards().then((function(e){P(e.map((function(e){return{_id:e._id,likes:e.likes,name:e.name,link:e.link,owner:e.owner}})))})).catch((function(e){return console.error(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("main",{className:"page"},r.a.createElement(m.Provider,{value:D},r.a.createElement(p,null),r.a.createElement(v,{onEditAvatar:function(){n(!a)},onAddCard:function(){l(!u)},onEditProfile:function(){g(!f)},onCardClick:function(e){x(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===D._id}));h.changeLikeCardStatus(e._id,!t).then((function(t){var a=w.map((function(a){return a._id===e._id?t:a}));P(a)})).catch((function(e){return console.error(e)}))},onCardDelete:function(e){h.deleteCard(e._id).then((function(t){var a=w.filter((function(a){return a._id===e._id?null:t}));P(a)})).catch((function(e){return console.error(e)}))},onCardList:w}),r.a.createElement(E,null),r.a.createElement(C,{isOpen:a,onClose:T,onUpdateAvatar:function(e){h.setAvatar(e.avatar).then((function(e){n(e),R(e),T()})).catch((function(e){return console.error(e)}))}}),r.a.createElement(N,{isOpen:u,onClose:T,onAddPlace:function(e){h.createCard(e.name,e.link).then((function(t){l(t),e={_id:t._id,likes:t.likes,name:t.name,link:t.link,owner:t.owner},P([].concat(Object(i.a)(w),[e])),T()})).catch((function(e){return console.error(e)}))}}),r.a.createElement(k,{isOpen:f,onClose:T,onUpdateUser:function(e){h.setProfile(e.name,e.about).then((function(e){R(e),T()})).catch((function(e){return console.error(e)}))}}),r.a.createElement(b,{card:S,onClose:T}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a.p+"static/media/logo.855a8c98.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.88ca5ec5.chunk.js.map