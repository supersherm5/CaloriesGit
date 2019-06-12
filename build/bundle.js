!function(e){function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}var t={};r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(r){return e[r]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=28)}([function(e,r){e.exports=require("react")},function(e,r){e.exports=require("@material-ui/core")},function(e,r){e.exports=require("@babel/runtime/helpers/defineProperty")},function(e,r){e.exports=require("@babel/runtime/helpers/assertThisInitialized")},function(e,r){e.exports=require("@hapi/joi")},function(e,r){e.exports=require("@babel/runtime/helpers/objectSpread")},function(e,r){e.exports=require("@material-ui/core/Typography")},function(e,r){e.exports=require("redux")},function(e,r){e.exports=require("react-router-config")},function(e,r){e.exports=require("react-redux")},function(e,r){e.exports=require("@material-ui/core/styles")},function(e,r){e.exports=require("express")},function(e,r){e.exports=require("@babel/runtime/regenerator")},function(e,r){e.exports=require("react-dom/server")},function(e,r){e.exports=require("react-router-dom")},function(e,r){e.exports=require("serialize-javascript")},function(e,r){e.exports=require("@material-ui/core/AppBar")},function(e,r){e.exports=require("@material-ui/core/Toolbar")},function(e,r){e.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(e,r){e.exports=require("isomorphic-fetch")},function(e,r){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,r){e.exports=require("@babel/runtime/helpers/createClass")},function(e,r){e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},function(e,r){e.exports=require("@babel/runtime/helpers/getPrototypeOf")},function(e,r){e.exports=require("@babel/runtime/helpers/inherits")},function(e,r){e.exports=require("prop-types")},function(e,r){e.exports=require("@material-ui/core/Paper")},function(e,r){e.exports=require("redux-thunk")},function(e,r,t){"use strict";function n(){var e=I();return s.a.createElement("div",{className:e.root},s.a.createElement(E.a,{position:"static",color:"primary"},s.a.createElement(y.a,null,s.a.createElement(S.a,{variant:"h5",color:"inherit",align:"center",display:"block"},"Calories"))))}function a(e){var r=e.msg,t=ae();return s.a.createElement("div",null,s.a.createElement(ne.a,{className:t.root},s.a.createElement(S.a,{variant:"h5",component:"h3"},"Results:",s.a.createElement("br",null)),s.a.createElement(S.a,{component:"div"},r)))}t.r(r);var i=t(11),o=t.n(i),u=t(0),s=t.n(u),l=t(13),c=t(14),m=t(8),p=t(9),f=t(15),d=t.n(f),g=t(5),v=t.n(g),b=t(10),h=t(16),E=t.n(h),C=t(17),y=t.n(C),x=t(6),S=t.n(x),I=Object(b.makeStyles)({root:{colorPrimary:"#00b8ff"}}),O="Products",k={error:null,failed:!1,initialized:!1,products:[]},P=t(12),M=t.n(P),R=t(18),q=t.n(R),T=t(19),j=t.n(T),F="CALORIES/FETCH_PRODUCTS_SERVER_INIT",_="CALORIES/FETCH_PRODUCTS_SERVER_SUCCESS",w="CALORIES/FETCH_PRODUCTS_SERVER_FAILURE",A=[{description:"A refreshing orange beverage.",caffeinePerServing:75,name:"Monster Ultra Sunrise",servings:2},{description:"The Classic.",caffeinePerServing:96,name:"Black Coffee",servings:1},{description:"Water downed coffee.",caffeinePerServing:77,name:"Americano",servings:1},{description:"Sugar-Free orange delight.",caffeinePerServing:80,name:"Sugar Free NOS",servings:2},{description:"An amazing shot of get up and go.",caffeinePerServing:200,name:"5 Hour Energy",servings:1}],H=t(20),B=t.n(H),D=t(21),L=t.n(D),U=t(22),V=t.n(U),z=t(23),N=t.n(z),W=t(3),G=t.n(W),Y=t(24),J=t.n(Y),K=t(2),Q=t.n(K),X=t(25),Z=t.n(X),$=t(1),ee=t(4),re=t.n(ee),te=t(26),ne=t.n(te),ae=Object(b.makeStyles)(function(e){return{root:{padding:e.spacing(3,2)}}}),ie=function(e){function r(){var e,t;B()(this,r);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return t=V()(this,(e=N()(r)).call.apply(e,[this].concat(i))),Q()(G()(t),"formValues",re.a.object().keys({calorieIntake:re.a.number().integer().min(0).max(2e3),beverage:re.a.number().integer().min(0).max(5),numOfContainers:re.a.number().integer().min(1).max(11)})),Q()(G()(t),"state",{beverageErr:!1,beverageErrMsg:"",beverageInitRender:!0,calorieIntake:"750",calorieIntakeErr:!1,calorieIntakeErrMsg:"",leftOver:[],msgBad:"You have exceeded your limit!!!",selectedIndex:99,showMsg:!1,numOfContainers:0,numOfContainersErr:!1,numOfContainersErrMsg:"",numOfContainersInitRender:!0}),Q()(G()(t),"handleCalorieChange",function(e){var r=re.a.validate({calorieIntake:parseInt(e.target.value,10)},t.formValues),n=r.error,a=r.value;t.setState({calorieIntake:a.calorieIntake||0,calorieIntakeErr:!!n,calorieIntakeErrMsg:"Total Caffeine Intake should be between 0 and 2000mg."})}),Q()(G()(t),"handleBeverageSelect",function(e){var r=re.a.validate({beverage:parseInt(e.target.value,10)},t.formValues),n=r.error,a=r.value;t.setState({selectedIndex:a.beverage||99,beverageErr:!!n,beverageErrMsg:"Select a beverage.",beverageInitRender:!1})}),Q()(G()(t),"handleConsumptionSelect",function(e){var r=re.a.validate({numOfContainers:parseInt(e.target.value,10)},t.formValues),n=r.error,a=r.value;t.setState({numOfContainers:a.numOfContainers||0,numOfContainersErr:!!n,numOfContainersErrMsg:"Select number of Containers consumed.",numOfContainersInitRender:!1})}),Q()(G()(t),"handleSubmit",function(e){e.preventDefault();var r=t.state,n=r.selectedIndex,a=r.products,i=r.numOfContainers,o=r.calorieIntake,u=a[n-1]||{},s=function(e,r){for(var t=[];0<=r;)t=e.filter(function(e){return e.caffeinePerServing*e.servings<=r}).map(function(e){if(0<=(r-=e.caffeinePerServing*e.servings))return e});return t.filter(function(e){return void 0!==e})}(a,o-i*u.servings*u.caffeinePerServing);t.setState({leftOver:s,showMsg:!0})}),Q()(G()(t),"getErrorMsgs",function(){var e=t.state,r=e.calorieIntakeErr,n=e.calorieIntakeErrMsg,a=e.beverageErr,i=e.beverageErrMsg,o=e.numOfContainersErr,u=e.numOfContainersErrMsg,s=[];return r&&s.push(n),a&&s.push(i),o&&s.push(u),s}),Q()(G()(t),"messageGenerator",function(e){return s.a.createElement("div",null,s.a.createElement("p",null,"You can still consume:"),s.a.createElement("ul",null,e.map(function(e,r){return s.a.createElement("li",{key:r},e.name)})))}),Q()(G()(t),"renderResults",function(){var e=t.state,r=e.showMsg,n=e.leftOver,i=e.msgBad;return r&&0===n.length?s.a.createElement(a,{msg:i}):r&&0!==n.length?s.a.createElement(a,{msg:t.messageGenerator(n)}):void 0}),t}return J()(r,e),L()(r,[{key:"render",value:function(){var e=this.state,r=e.beverageErr,t=e.beverageErrMsg,n=e.beverageInitRender,a=e.calorieIntake,i=e.calorieIntakeErr,o=e.calorieIntakeErrMsg,u=e.selectedIndex,l=e.numOfContainers,c=e.numOfContainersErr,m=e.numOfContainersErrMsg,p=e.numOfContainersInitRender,f=e.showMsg,d=this.props.getProducts;return s.a.createElement("div",{style:{margin:"15px",textAlign:"center"}},s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement($.FormControl,{style:{margin:"15px",minWidth:120},align:"center",error:i},s.a.createElement($.InputLabel,{htmlFor:"calorieIntake"},"Total Caffeine Intake:"),s.a.createElement($.Input,{"aria-describedby":"calorIntakeHelper",id:"calorieIntake",value:a,onChange:this.handleCalorieChange,type:"number"}),i&&s.a.createElement($.FormHelperText,{id:"calorIntakeHelper"},o)),s.a.createElement($.FormControl,{style:{margin:"15px",minWidth:190},align:"center",error:r},s.a.createElement($.InputLabel,{htmlFor:"beverageConsumed"},"Beverage:"),s.a.createElement($.Select,{onChange:this.handleBeverageSelect,inputProps:{"aria-describedby":"beverageConsumedHelper",id:"beverageConsumed"},value:u},s.a.createElement($.MenuItem,{value:99},"- Select Beverage -"),d.map(function(e,r){var t=e.name;return s.a.createElement($.MenuItem,{key:t,value:r+1},t)})),r&&s.a.createElement($.FormHelperText,{id:"beverageConsumedHelper"},t)),s.a.createElement($.FormControl,{style:{margin:"15px",minWidth:200},align:"center",error:c},s.a.createElement($.InputLabel,{htmlFor:"drinksConsumed"},"Containers of Beverage:"),s.a.createElement($.Select,{value:l,onChange:this.handleConsumptionSelect,inputProps:{"aria-describedby":"drinksConsumedHelper",id:"drinksConsumed"}},s.a.createElement($.MenuItem,{value:0},"- Select Containers Consumed -"),Array(10).fill().map(function(e,r){return s.a.createElement($.MenuItem,{key:r,value:r+1},r+1)})),c&&s.a.createElement($.FormHelperText,{id:"drinksConsumedHelper"},m)),s.a.createElement($.Button,{variant:"contained",color:"primary",type:"submit",style:{margin:"15px"},disabled:n||p||0<this.getErrorMsgs().length},"Submit")),s.a.createElement("div",{id:"results"},f&&!n&&!p&&0===this.getErrorMsgs().length&&this.renderResults()))}}]),r}(u.Component);ie.propTypes={getProducts:Z.a.array},ie.defaultProps={getProducts:[]};var oe=Object(p.connect)(function(e){return{getProducts:function(e){return e[O].products||[]}(e)}})(ie),ue={component:function(){return s.a.createElement("div",null,s.a.createElement(n,null),s.a.createElement(oe,null))},loadData:function(e){return(0,e.dispatch)(function(){var e=q()(M.a.mark(function e(r){var t;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:F}),e.next=4,j()("https://jsonplaceholder.typicode.com/todos/1");case 4:return t=e.sent,e.next=7,t.json();case 7:return e.sent,e.abrupt("return",r({type:_,payload:A}));case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",r((n=e.t0,{type:w,error:n})));case 14:case"end":return e.stop()}var n},e,null,[[0,11]])}));return function(r){return e.apply(this,arguments)}}())}},se=[v()({path:"/"},ue,{exact:!0})],le=t(7),ce=t(27),me=t.n(ce),pe=Object(le.combineReducers)(Q()({},O,function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:k,r=1<arguments.length?arguments[1]:void 0,t=r.type,n=r.payload,a=r.error;switch(t){case F:return v()({},e,{initialized:!0});case w:return v()({},e,{error:a,failed:!0});case _:return v()({},e,{failed:!1,products:n});default:return e}})),fe=Object(le.applyMiddleware)(me.a),de={},ge=o()(),ve=process.env.PORT||3e3;ge.use(o.a.static("public")),ge.get("/",function(e,r){var t=Object(le.createStore)(pe,de,fe),n=Object(m.matchRoutes)(se,e.path).map(function(e){var r=e.route;return r.loadData?r.loadData(t):null});Promise.all(n).then(function(n){var a=function(e,r){var t=Object(l.renderToString)(s.a.createElement(p.Provider,{store:r},s.a.createElement(c.StaticRouter,{location:e.path,context:{}},s.a.createElement("div",null,Object(m.renderRoutes)(se)))));return'\n  <!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset="UTF-8">\n        <title>Calories</title>\n        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" />\n        <script>window.INITIAL_STATE = '.concat(d()(r.getState()),'<\/script>\n      </head>\n      <body>\n        <div id="app">').concat(t,'</div>\n        <script src="clientBundle.js"><\/script>\n      </body>\n    </html>\n  ')}(e,t);r.send(a)})}),ge.listen(ve,function(){})}]);