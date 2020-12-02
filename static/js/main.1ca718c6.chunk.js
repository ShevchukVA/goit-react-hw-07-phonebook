(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={box:"Filter_box__1IsH5",text:"Filter_text__j-Sgl",input:"Filter_input__2QV5n",enter:"Filter_enter__2vuLD",enterActive:"Filter_enterActive__2abG6",exit:"Filter_exit__3d1J3",exitActive:"Filter_exitActive__3qCel"}},14:function(t,e,n){t.exports={list:"ContactList_list__2wI-V",enter:"ContactList_enter__2h5Xj",enterActive:"ContactList_enterActive__35gXm",exit:"ContactList_exit__RougQ",exitActive:"ContactList_exitActive__14plz"}},16:function(t,e,n){t.exports={item:"ContactItem_item__pj9SI",button:"ContactItem_button__H6oU9",text:"ContactItem_text__38VBA"}},20:function(t,e,n){t.exports={text:"Logo_text__3y72x",appear:"Logo_appear__4RdPu",appearActive:"Logo_appearActive__2c-Kh"}},41:function(t,e,n){t.exports=n(88)},88:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(8),r=n.n(o),u=n(6),s=n(17),i=n(18),l=n(22),m=n(21),b=n(89),f=n(3),C=n(15),d=n.n(C),p=n(2),h={addContactRequest:Object(p.b)("contacts/addRequest"),addContactSuccess:Object(p.b)("contacts/addSuccess"),addContactError:Object(p.b)("contacts/addError"),fetchContactsRequest:Object(p.b)("contacts/fetchRequest"),fetchContactsSuccess:Object(p.b)("contacts/fetchSuccess"),fetchContactsError:Object(p.b)("contacts/fetchError"),removeContactRequest:Object(p.b)("contacts/removeRequest"),removeContactSuccess:Object(p.b)("contacts/removeSuccess"),removeContactError:Object(p.b)("contacts/removeError"),filterContacts:Object(p.b)("contacts/filterContacts")};d.a.defaults.baseURL="http://localhost:2000";var _={addContact:function(t){var e=t.name,n=t.number;return function(t,a){if(""===e||""===n)return alert("Please, enter name or number"),a;var c=a().contacts.items.map((function(t){return t.name.toLowerCase()})).includes(e);if(c)alert("".concat(e," is alredy in contacts"));else{if(t(h.addContactRequest()),c)return a;d.a.post("/contacts",{name:e,number:n}).then((function(e){var n=e.data;return t(h.addContactSuccess(n))})).catch((function(e){return t(h.addContactError(e))}))}}},fetchContacts:function(){return function(t){t(h.fetchContactsRequest()),d.a.get("/contacts").then((function(e){var n=e.data;return t(h.fetchContactsSuccess(n))})).catch((function(e){return t(h.fetchContactsError(e))}))}},removeContact:function(t){return function(e){e(h.removeContactRequest()),d.a.delete("/contacts/".concat(t)).then((function(){return e(h.removeContactSuccess(t))})).catch((function(t){return e(h.removeContactError(t))}))}}},v=n(9),O=n.n(v),j=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(t.state),t.setState({name:"",number:""})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:this.handleSubmit,className:O.a.container},c.a.createElement("label",{className:O.a.label},"Name",c.a.createElement("input",{className:O.a.input,type:"name",name:"name",value:e,autoComplete:"off",onChange:this.handleChange})),c.a.createElement("label",{className:O.a.label},"Number",c.a.createElement("input",{className:O.a.input,type:"tel",name:"number",value:n,autoComplete:"off",onChange:this.handleChange})),c.a.createElement("button",{type:"submit",className:O.a.button},"Add contact")))}}]),n}(a.Component),E={onAddContact:_.addContact},g=Object(u.b)(null,E)(j),x=n(90),y=n(36),F=n(7),S=function(t){return t.contacts.items},N=function(t){return t.contacts.filter},R=Object(F.a)([S,N],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),L={getContacts:S,getLoading:function(t){return t.contacts.loading},getVisibleContacts:R,getFilter:N,getContactsById:function(t,e){return S(t).find((function(t){return t.id===e}))}},A=n(16),q=n.n(A),w=function(t){var e=t.name,n=t.number,a=t.onRemoveContact;return c.a.createElement("li",{className:q.a.item},c.a.createElement("p",{className:q.a.text},e,":"),c.a.createElement("p",{className:q.a.text},n),c.a.createElement("button",{className:q.a.button,type:"button",onClick:a},"X"))};w.defaultProps={name:"",number:""};var k,I,B=Object(u.b)((function(t,e){var n=L.getContactsById(t,e.id);return Object(y.a)({},n)}),(function(t,e){return{onRemoveContact:function(){return t(_.removeContact(e.id))}}}))(w),V=n(14),D=n.n(V),P=Object(u.b)((function(t){return{contacts:L.getVisibleContacts(t)}}))((function(t){var e=t.contacts;return c.a.createElement(c.a.Fragment,null,c.a.createElement(x.a,{component:"ul",className:D.a.list},e.map((function(t){var e=t.id;return c.a.createElement(b.a,{key:e,classNames:D.a,timeout:250},c.a.createElement(B,{id:e}))}))))})),J=n(13),Q=n.n(J),X={onChangeFilter:h.filterContacts},H=Object(u.b)((function(t){return{value:L.getFilter(t)}}),X)((function(t){var e=t.value,n=t.onChangeFilter;return c.a.createElement("div",{className:Q.a.box},c.a.createElement("p",{className:Q.a.text},"Find contacts by name"),c.a.createElement("input",{className:Q.a.input,type:"text",value:e,onChange:function(t){return n(t.target.value)}}))})),M=n(20),T=n.n(M),U=function(){return c.a.createElement("h1",{className:T.a.text},"Phonebook")},z=n(37),G=n.n(z),K=(n(87),function(){return c.a.createElement(G.a,{type:"ThreeDots",color:"#00BFFF",height:200,width:200})}),Y=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchContacts()}},{key:"render",value:function(){return c.a.createElement("div",null,this.props.isLoadingContacts&&c.a.createElement(K,null),c.a.createElement(b.a,{in:!0,appear:!0,timeout:500,classNames:T.a,unmountOnExit:!0},c.a.createElement(U,null)),c.a.createElement(g,null),c.a.createElement(b.a,{in:this.props.isContacts.length>0,timeout:250,classNames:Q.a,unmountOnExit:!0},c.a.createElement(H,null)),c.a.createElement(b.a,{in:this.props.isContacts.length>0,timeout:250,classNames:D.a,unmountOnExit:!0},c.a.createElement(P,null)))}}]),n}(a.Component),W={onFetchContacts:_.fetchContacts},Z=Object(u.b)((function(t){return{isLoadingContacts:L.getLoading(t),isContacts:L.getContacts(t)}}),W)(Y),$=n(38),tt=n(5),et=Object(p.c)([],(k={},Object(f.a)(k,h.fetchContactsSuccess,(function(t,e){return e.payload})),Object(f.a)(k,h.addContactSuccess,(function(t,e){return[].concat(Object($.a)(t),[e.payload])})),Object(f.a)(k,h.removeContactSuccess,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),k)),nt=Object(p.c)("",Object(f.a)({},h.filterContacts,(function(t,e){return e.payload}))),at=Object(p.c)(!1,(I={},Object(f.a)(I,h.fetchContactsRequest,(function(){return!0})),Object(f.a)(I,h.fetchContactsSuccess,(function(){return!1})),Object(f.a)(I,h.fetchContactsError,(function(){return!1})),Object(f.a)(I,h.addContactRequest,(function(){return!0})),Object(f.a)(I,h.addContactSuccess,(function(){return!1})),Object(f.a)(I,h.addContactError,(function(){return!1})),Object(f.a)(I,h.removeContactRequest,(function(){return!0})),Object(f.a)(I,h.removeContactSuccess,(function(){return!1})),Object(f.a)(I,h.removeContactError,(function(){return!1})),I)),ct=Object(tt.c)({items:et,filter:nt,loading:at}),ot=Object(p.a)({reducer:{contacts:ct}});r.a.render(c.a.createElement(u.a,{store:ot},c.a.createElement(Z,null)),document.getElementById("root"))},9:function(t,e,n){t.exports={container:"ContactForm_container__2Oowe",label:"ContactForm_label__28mTQ",input:"ContactForm_input__1Y5d1",button:"ContactForm_button__3M0AR"}}},[[41,1,2]]]);
//# sourceMappingURL=main.1ca718c6.chunk.js.map