(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={box:"Filter_box__1IsH5",text:"Filter_text__j-Sgl",input:"Filter_input__2QV5n",enter:"Filter_enter__2vuLD",enterActive:"Filter_enterActive__2abG6",exit:"Filter_exit__3d1J3",exitActive:"Filter_exitActive__3qCel"}},14:function(t,e,n){t.exports={list:"ContactList_list__2wI-V",enter:"ContactList_enter__2h5Xj",enterActive:"ContactList_enterActive__35gXm",exit:"ContactList_exit__RougQ",exitActive:"ContactList_exitActive__14plz"}},16:function(t,e,n){t.exports={item:"ContactItem_item__pj9SI",button:"ContactItem_button__H6oU9",text:"ContactItem_text__38VBA"}},20:function(t,e,n){t.exports={text:"Logo_text__3y72x",appear:"Logo_appear__4RdPu",appearActive:"Logo_appearActive__2c-Kh"}},41:function(t,e,n){t.exports=n(88)},88:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(8),r=n.n(o),u=n(6),s=n(17),i=n(18),l=n(22),m=n(21),b=n(89),f=n(3),C=n(15),d=n.n(C),p=n(2),h={addContactRequest:Object(p.b)("contacts/addRequest"),addContactSuccess:Object(p.b)("contacts/addSuccess"),addContactError:Object(p.b)("contacts/addError"),fetchContactsRequest:Object(p.b)("contacts/fetchRequest"),fetchContactsSuccess:Object(p.b)("contacts/fetchSuccess"),fetchContactsError:Object(p.b)("contacts/fetchError"),removeContactRequest:Object(p.b)("contacts/removeRequest"),removeContactSuccess:Object(p.b)("contacts/removeSuccess"),removeContactError:Object(p.b)("contacts/removeError"),filterContacts:Object(p.b)("contacts/filterContacts")};d.a.defaults.baseURL="http://localhost:2000";var _,v,O={addContact:function(t){var e=t.name,n=t.number;return function(t,a){if(t(h.addContactRequest()),""===e||""===n)return alert("Please, enter name or number"),a;var c=a().contacts.items.map((function(t){return t.name.toLowerCase()})).includes(e);if(c&&alert("".concat(e," is alredy in contacts")),c)return a;d.a.post("/contacts",{name:e,number:n}).then((function(e){var n=e.data;return t(h.addContactSuccess(n))})).catch((function(e){return t(h.addContactError(e))}))}},fetchContacts:function(){return function(t){t(h.fetchContactsRequest()),d.a.get("/contacts").then((function(e){var n=e.data;return t(h.fetchContactsSuccess(n))})).catch((function(e){return t(h.fetchContactsError(e))}))}},removeContact:function(t){return function(e){e(h.removeContactRequest()),d.a.delete("/contacts/".concat(t)).then((function(){return e(h.removeContactSuccess(t))})).catch((function(t){return e(h.removeContactError(t))}))}}},j=n(9),E=n.n(j),g=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(t.state),t.setState({name:"",number:""})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:this.handleSubmit,className:E.a.container},c.a.createElement("label",{className:E.a.label},"Name",c.a.createElement("input",{className:E.a.input,type:"name",name:"name",value:e,autoComplete:"off",onChange:this.handleChange})),c.a.createElement("label",{className:E.a.label},"Number",c.a.createElement("input",{className:E.a.input,type:"tel",name:"number",value:n,autoComplete:"off",onChange:this.handleChange})),c.a.createElement("button",{type:"submit",className:E.a.button},"Add contact")))}}]),n}(a.Component),x={onAddContact:O.addContact},y=Object(u.b)(null,x)(g),F=n(90),S=n(36),N=n(7),R=function(t){return t.contacts.items},L=function(t){return t.contacts.filter},A=Object(N.a)([R,L],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),q={getContacts:R,getLoading:function(t){return t.contacts.loading},getVisibleContacts:A,getFilter:L,getContactsById:function(t,e){return R(t).find((function(t){return t.id===e}))}},w=n(16),k=n.n(w),I=Object(u.b)((function(t,e){var n=q.getContactsById(t,e.id);return Object(S.a)({},n)}),(function(t,e){return{onRemoveContact:function(){return t(O.removeContact(e.id))}}}))((function(t){var e=t.name,n=t.number,a=t.onRemoveContact;return c.a.createElement("li",{className:k.a.item},c.a.createElement("p",{className:k.a.text},e,":"),c.a.createElement("p",{className:k.a.text},n),c.a.createElement("button",{className:k.a.button,type:"button",onClick:a},"X"))})),B=n(14),V=n.n(B),D=Object(u.b)((function(t){return{contacts:q.getVisibleContacts(t)}}))((function(t){var e=t.contacts;return c.a.createElement(c.a.Fragment,null,c.a.createElement(F.a,{component:"ul",className:V.a.list},e.map((function(t){var e=t.id;return c.a.createElement(b.a,{key:e,classNames:V.a,timeout:250},c.a.createElement(I,{id:e}))}))))})),J=n(13),P=n.n(J),Q={onChangeFilter:h.filterContacts},X=Object(u.b)((function(t){return{value:q.getFilter(t)}}),Q)((function(t){var e=t.value,n=t.onChangeFilter;return c.a.createElement("div",{className:P.a.box},c.a.createElement("p",{className:P.a.text},"Find contacts by name"),c.a.createElement("input",{className:P.a.input,type:"text",value:e,onChange:function(t){return n(t.target.value)}}))})),H=n(20),M=n.n(H),T=function(){return c.a.createElement("h1",{className:M.a.text},"Phonebook")},U=n(37),z=n.n(U),G=(n(87),function(){return c.a.createElement(z.a,{type:"ThreeDots",color:"#00BFFF",height:200,width:200})}),K=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchContacts()}},{key:"render",value:function(){return c.a.createElement("div",null,this.props.isLoadingContacts&&c.a.createElement(G,null),c.a.createElement(b.a,{in:!0,appear:!0,timeout:500,classNames:M.a,unmountOnExit:!0},c.a.createElement(T,null)),c.a.createElement(y,null),c.a.createElement(b.a,{in:this.props.isContacts.length>0,timeout:250,classNames:P.a,unmountOnExit:!0},c.a.createElement(X,null)),c.a.createElement(b.a,{in:this.props.isContacts.length>0,timeout:250,classNames:V.a,unmountOnExit:!0},c.a.createElement(D,null)))}}]),n}(a.Component),Y={onFetchContacts:O.fetchContacts},W=Object(u.b)((function(t){return{isLoadingContacts:q.getLoading(t),isContacts:q.getContacts(t)}}),Y)(K),Z=n(38),$=n(5),tt=Object(p.c)([],(_={},Object(f.a)(_,h.fetchContactsSuccess,(function(t,e){return e.payload})),Object(f.a)(_,h.addContactSuccess,(function(t,e){return[].concat(Object(Z.a)(t),[e.payload])})),Object(f.a)(_,h.removeContactSuccess,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),_)),et=Object(p.c)("",Object(f.a)({},h.filterContacts,(function(t,e){return e.payload}))),nt=Object(p.c)(!1,(v={},Object(f.a)(v,h.fetchContactsRequest,(function(){return!0})),Object(f.a)(v,h.fetchContactsSuccess,(function(){return!1})),Object(f.a)(v,h.fetchContactsError,(function(){return!1})),Object(f.a)(v,h.addContactRequest,(function(){return!0})),Object(f.a)(v,h.addContactSuccess,(function(){return!1})),Object(f.a)(v,h.addContactError,(function(){return!1})),Object(f.a)(v,h.removeContactRequest,(function(){return!0})),Object(f.a)(v,h.removeContactSuccess,(function(){return!1})),Object(f.a)(v,h.removeContactError,(function(){return!1})),v)),at=Object($.c)({items:tt,filter:et,loading:nt}),ct=Object(p.a)({reducer:{contacts:at}});r.a.render(c.a.createElement(u.a,{store:ct},c.a.createElement(W,null)),document.getElementById("root"))},9:function(t,e,n){t.exports={container:"ContactForm_container__2Oowe",label:"ContactForm_label__28mTQ",input:"ContactForm_input__1Y5d1",button:"ContactForm_button__3M0AR"}}},[[41,1,2]]]);
//# sourceMappingURL=main.c72fbf0b.chunk.js.map