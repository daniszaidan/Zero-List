(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.de7e31a8.png"},,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(7),c=a.n(i),o=(a(15),a(9)),s=a(1),r=a(2),m=a(4),d=a(3),u=a(5),h=a(8),p=a.n(h),f=(a(16),a(17),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.items,a=e.handleDelete,n=e.handleEdit,i=e.handleComplete;return t.map((function(e){return l.a.createElement("div",{className:"card",key:e.id},l.a.createElement("div",{className:"col-1 col-s-12 d-flex flex-center"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",onChange:function(){i(e.id)},checked:e.completed}),l.a.createElement("span",{className:"label-text"}))),l.a.createElement("div",{className:"col-9 col-s-12 list-frame"},l.a.createElement("div",{className:"title-frame"},l.a.createElement("p",null,e.title))),l.a.createElement("div",{className:"col-2 col-s-12 d-flex flex-center"},l.a.createElement("i",{class:"fas edit-button fa-pen",onClick:function(){return n(e.id)}}),l.a.createElement("i",{class:"fas delete-button fa-trash",onClick:function(){return a(e.id)}})))}))}}]),t}(n.Component)),E=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.item,a=e.handleChange,n=e.handleSubmit,i=e.editStatus;return l.a.createElement("form",{onSubmit:n},l.a.createElement("div",{className:"form-input"},l.a.createElement("input",{type:"text",required:" ",value:t,onChange:a}),l.a.createElement("label",null,"Enter New Todo ")),l.a.createElement("button",{type:"submit",className:"btn btn-default"},i?"Edit Todo":"Add New Todo"))}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={items:[],id:0,item:"",editStatus:!1,showCompleted:!1},a.handleChange=function(e){a.setState({item:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t=[{id:Date.now(),title:a.state.item,completed:!1}].concat(Object(o.a)(a.state.items));a.setState({items:t,item:"",id:0,editStatus:!1})},a.clearList=function(){a.setState({items:[]})},a.handleEdit=function(e){var t=a.state.items.filter((function(t){return t.id!==e})),n=a.state.items.find((function(t){return t.id===e}));a.setState({items:t,item:n.title,editStatus:!0,id:e})},a.handleDelete=function(e){var t=a.state.items.filter((function(t){return t.id!==e}));a.setState({items:t})},a.handleComplete=function(e){var t=a.state.items.map((function(t){return t.id===e&&(t.completed=!t.completed),t}));a.setState({items:t})},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=[],t=[];this.state.items.map((function(a){a.completed?e.push(a):t.push(a)}));return l.a.createElement("main",null,l.a.createElement("div",{className:"col col-5 col-m-12 half-left"},l.a.createElement("div",{className:"todo-frame"},l.a.createElement("div",{className:"logo-frame d-flex flex-center"},l.a.createElement("img",{src:p.a,alt:"",className:"logo-brand"})),l.a.createElement(E,{item:this.state.item,handleChange:this.handleChange,handleSubmit:this.handleSubmit,editStatus:this.state.editStatus}))),l.a.createElement("div",{className:"col col-7 col-m-12 half-right"},this.state.items.every((function(e){return e.completed}))&&l.a.createElement("p",{className:"todo-empty"},"Todo is Empty"),l.a.createElement(f,{items:t,handleEdit:this.handleEdit,handleDelete:this.handleDelete,handleComplete:this.handleComplete}),function(e){return e.some((function(e){return e.completed}))}(this.state.items)&&l.a.createElement("p",{className:"todo-completed"},"Completed Todos"),l.a.createElement(f,{items:e,handleEdit:this.handleEdit,handleDelete:this.handleDelete,handleComplete:this.handleComplete})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.9601be47.chunk.js.map