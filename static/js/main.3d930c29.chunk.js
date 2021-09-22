(this["webpackJsonplearn-rtk-saga"]=this["webpackJsonplearn-rtk-saga"]||[]).push([[0],{315:function(e,t,n){},317:function(e,t,n){"use strict";n.r(t);var a=n(399),r=n(81),c=n(0),i=n.n(c),s=n(15),o=n.n(s),l=n(58),d=n(31),u=Object(d.a)(),j=n(158),b=n.n(j).a.create({baseURL:"https://tamnguyen-json-server.herokuapp.com",headers:{"Content-Type":"application/json"}});b.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),b.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)}));var h=b,O={getAll:function(){return h.get("/cities",{params:{_page:1,_limit:50}})}},x=n(17),f=n(366),m=n(319),p=n(68),g=n(400),v=n(369),y=function(){return Object(l.d)()},k=l.e,w=n(37),C={isLoggedIn:!1,logging:!1,currentUser:void 0},S=Object(w.c)({name:"auth",initialState:C,reducers:{login:function(e,t){e.logging=!0},loginSuccess:function(e,t){e.logging=!1,e.isLoggedIn=!0,e.currentUser=t.payload},loginFailed:function(e,t){e.logging=!1},logout:function(e){e.logging=!1,e.isLoggedIn=!1,e.currentUser=void 0}}}),_=S.actions,L=S.reducer,N=n(2),B=Object(f.a)((function(e){return{root:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",alignItems:"center",minHeight:"100vh"},box:{padding:e.spacing(3)}}}));function F(){var e=B(),t=y();return Object(N.jsx)("div",{className:e.root,children:Object(N.jsxs)(m.a,{elevation:1,className:e.box,children:[Object(N.jsx)(p.a,{variant:"h5",component:"h1",children:"Student Management"}),Object(N.jsx)(g.a,{mt:4,children:Object(N.jsx)(v.a,{fullWidth:!0,variant:"contained",color:"primary",onClick:function(){t(_.login({username:"",password:""}))},children:"Fake Login"})})]})})}function A(e){return Object(N.jsx)("div",{children:" Not Found "})}var M=n(27);function I(e){return Boolean(localStorage.getItem("access_token"))?Object(N.jsx)(x.b,Object(M.a)({},e)):Object(N.jsx)(x.a,{to:"/login"})}var R=n(370),W=n(320),E=n(371),P=n(373),D=n(372),z=n(374),T=n(43),q=Object(f.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},link:{color:"inherit",textDecoration:"none","&.active > div":{backgroundColor:e.palette.action.selected}}}}));function U(e){var t=q();return Object(N.jsx)("div",{className:t.root,children:Object(N.jsxs)(R.a,{component:"nav","aria-label":"dashboard student",children:[Object(N.jsx)(T.b,{to:"/admin/dashboard",className:t.link,children:Object(N.jsxs)(W.a,{button:!0,children:[Object(N.jsx)(E.a,{children:Object(N.jsx)(D.a,{})}),Object(N.jsx)(P.a,{primary:"Dashboard"})]})}),Object(N.jsx)(T.b,{to:"/admin/students",className:t.link,children:Object(N.jsxs)(W.a,{button:!0,children:[Object(N.jsx)(E.a,{children:Object(N.jsx)(z.a,{})}),Object(N.jsx)(P.a,{primary:"Student"})]})})]})})}var H=n(375),G=n(376),V=Object(f.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1}}}));function J(e){var t=V(),n=y();return Object(N.jsx)("div",{className:t.root,children:Object(N.jsx)(H.a,{position:"static",children:Object(N.jsxs)(G.a,{children:[Object(N.jsx)(p.a,{variant:"h6",className:t.title,children:"Student Management"}),Object(N.jsx)(v.a,{color:"inherit",onClick:function(){n(_.logout())},children:"Logout"})]})})})}var $=Object(w.c)({name:"dashboard",initialState:{loading:!1,statistics:{maleCount:0,femaleCount:0,highMarkCount:0,lowMarkCount:0},highestStudentList:[],lowestStudentList:[],rankingByCityList:[]},reducers:{fetchData:function(e){e.loading=!0},fetchDataSuccess:function(e){e.loading=!1},fetchDataError:function(e){e.loading=!1},setStatistics:function(e,t){e.statistics=t.payload},setHighestStudentList:function(e,t){e.highestStudentList=t.payload},setLowestStudentList:function(e,t){e.lowestStudentList=t.payload},setRankingByCityList:function(e,t){e.rankingByCityList=t.payload}}}),K=$.actions,Q=function(e){return e.dashboard.loading},X=function(e){return e.dashboard.statistics},Y=function(e){return e.dashboard.highestStudentList},Z=function(e){return e.dashboard.lowestStudentList},ee=function(e){return e.dashboard.rankingByCityList},te=$.reducer,ne=n(383),ae=n(384),re=Object(f.a)((function(e){return{root:{display:"flex",flexFlow:"row nowrap",justifyContent:"space-between",alignItems:"center",padding:e.spacing(1,2),border:"1px solid ".concat(e.palette.divider)},label:{textTransform:"uppercase"}}}));function ce(e){var t=e.icon,n=e.label,a=e.value,r=re();return Object(N.jsxs)(m.a,{className:r.root,children:[Object(N.jsx)(g.a,{children:t}),Object(N.jsxs)(g.a,{children:[Object(N.jsx)(p.a,{variant:"h5",align:"right",children:a}),Object(N.jsx)(p.a,{variant:"caption",className:r.label,children:n})]})]})}var ie=n(385),se=n(386),oe=n(387),le=Object(f.a)((function(e){return{root:{padding:e.spacing(2),border:"1px solid ".concat(e.palette.divider)}}}));function de(e){var t=e.title,n=e.children,a=le();return Object(N.jsxs)(m.a,{className:a.root,children:[Object(N.jsx)(p.a,{variant:"button",children:t}),Object(N.jsx)(g.a,{mt:2,children:n})]})}var ue=n(378),je=n(382),be=n(381),he=n(377),Oe=n(379),xe=n(380),fe=Object(f.a)({table:{}});function me(e){var t=e.studentList,n=fe();return Object(N.jsx)(he.a,{children:Object(N.jsxs)(ue.a,{className:n.table,size:"small","aria-label":"simple table",children:[Object(N.jsx)(Oe.a,{children:Object(N.jsxs)(xe.a,{children:[Object(N.jsx)(be.a,{align:"center",children:"#"}),Object(N.jsx)(be.a,{align:"left",children:"Name"}),Object(N.jsx)(be.a,{align:"right",children:" Mark"})]})}),Object(N.jsx)(je.a,{children:t.map((function(e,t){return Object(N.jsxs)(xe.a,{children:[Object(N.jsx)(be.a,{children:t+1}),Object(N.jsx)(be.a,{align:"left",children:e.name}),Object(N.jsx)(be.a,{align:"right",children:e.mark})]},e.id)}))})]})})}var pe=Object(f.a)((function(e){return{root:{position:"relative",paddingTop:e.spacing(1)},loading:{position:"absolute",top:e.spacing(-1),width:"100%"}}}));function ge(){var e=y(),t=k(Q),n=k(X),a=k(Y),r=k(Z),i=k(ee),s=pe();return Object(c.useEffect)((function(){e(K.fetchData())}),[e]),Object(N.jsxs)(g.a,{className:s.root,children:[t&&Object(N.jsx)(ne.a,{className:s.loading}),Object(N.jsxs)(ae.a,{container:!0,spacing:3,children:[Object(N.jsx)(ae.a,{item:!0,xs:12,md:6,lg:3,xl:3,children:Object(N.jsx)(ce,{icon:Object(N.jsx)(z.a,{fontSize:"large",color:"primary"}),label:"male",value:n.maleCount})}),Object(N.jsx)(ae.a,{item:!0,xs:12,md:6,lg:3,xl:3,children:Object(N.jsx)(ce,{icon:Object(N.jsx)(ie.a,{fontSize:"large",color:"primary"}),label:"female",value:n.femaleCount})}),Object(N.jsx)(ae.a,{item:!0,xs:12,md:6,lg:3,xl:3,children:Object(N.jsx)(ce,{icon:Object(N.jsx)(se.a,{fontSize:"large",color:"primary"}),label:"mark >= 8",value:n.highMarkCount})}),Object(N.jsx)(ae.a,{item:!0,xs:12,md:6,lg:3,xl:3,children:Object(N.jsx)(ce,{icon:Object(N.jsx)(oe.a,{fontSize:"large",color:"primary"}),label:"mark <= 5",value:n.lowMarkCount})})]}),Object(N.jsxs)(g.a,{mt:4,children:[Object(N.jsx)(p.a,{variant:"h4",children:"All Students"}),Object(N.jsx)(g.a,{mt:4,children:Object(N.jsxs)(ae.a,{container:!0,spacing:3,children:[Object(N.jsx)(ae.a,{item:!0,xs:12,md:6,lg:6,children:Object(N.jsx)(de,{title:"Student with highest mark",children:Object(N.jsx)(me,{studentList:a})})}),Object(N.jsx)(ae.a,{item:!0,xs:12,md:6,lg:6,children:Object(N.jsx)(de,{title:"Student with lowest mark",children:Object(N.jsx)(me,{studentList:r})})})]})})]}),Object(N.jsxs)(g.a,{mt:4,children:[Object(N.jsx)(p.a,{variant:"h4",children:"Ranking By City"}),Object(N.jsx)(g.a,{mt:4,children:Object(N.jsx)(ae.a,{container:!0,spacing:3,children:i.map((function(e){return Object(N.jsx)(ae.a,{item:!0,xs:12,md:6,lg:6,children:Object(N.jsx)(de,{title:e.cityName,children:Object(N.jsx)(me,{studentList:e.rankingList})})})}))})})]})]})}var ve=n(20),ye=n(92),ke=Object(w.c)({name:"city",initialState:{list:[],loading:!1},reducers:{fetchCityList:function(e){e.loading=!0},fetchCityListSuccess:function(e,t){e.loading=!1,e.list=t.payload.data},fetchCityListFailed:function(e){e.loading=!1}}}),we=ke.actions,Ce=function(e){return e.city.list},Se=Object(ye.a)(Ce,(function(e){return e.reduce((function(e,t){return e[t.code]=t,e}),{})})),_e=Object(ye.a)(Ce,(function(e){return[{name:"No select",code:""}].concat(Object(ve.a)(e)).map((function(e){return{label:e.name,value:e.code}}))})),Le=ke.reducer,Ne=n(8),Be=n.n(Ne),Fe=n(25),Ae=n(21),Me=n(393),Ie={getAll:function(e){return h.get("/students",{params:e})},getById:function(e){var t="/students/".concat(e);return h.get(t)},add:function(e){return h.post("/students",e)},update:function(e){var t="/students/".concat(null===e||void 0===e?void 0:e.id);return h.patch(t,e)},remove:function(e){var t="/students/".concat(e);return h.delete(t)}},Re=n(392),We=n(404),Ee=n(171),Pe=n(33),De=n(388);function ze(e){var t=e.name,n=e.control,a=e.label,r=Object(Ee.a)(e,["name","control","label"]),c=Object(Pe.d)({name:t,control:n}),i=c.field,s=i.value,o=i.onBlur,l=i.onChange,d=i.ref,u=c.fieldState,j=u.invalid,b=u.error;return Object(N.jsx)(De.a,{label:a,fullWidth:!0,margin:"normal",variant:"outlined",value:s,inputRef:d,error:j,helperText:null===b||void 0===b?void 0:b.message,inputProps:r,size:"small",onBlur:o,onChange:l})}var Te=n(326),qe=n(323),Ue=n(389),He=n(325),Ge=n(403),Ve=n(405);function Je(e){var t=e.name,n=e.control,a=e.label,r=e.disabled,c=e.options,i=e.row,s=Object(Pe.d)({name:t,control:n}),o=s.field,l=o.value,d=o.onBlur,u=o.onChange,j=s.fieldState,b=j.invalid,h=j.error;return Object(N.jsxs)(qe.a,{component:"fieldset",disabled:r,error:b,fullWidth:!0,margin:"normal",children:[Object(N.jsx)(He.a,{component:"legend",children:a}),Object(N.jsx)(Ve.a,{row:i,name:t,onChange:u,onBlur:d,value:l,children:c.map((function(e){return Object(N.jsx)(Ue.a,{disabled:e.disabled,value:e.value,control:Object(N.jsx)(Ge.a,{}),label:e.label},e.value)}))}),Object(N.jsx)(Te.a,{children:null===h||void 0===h?void 0:h.message})]})}var $e=n(324),Ke=n(328),Qe=n(391);function Xe(e){var t=e.name,n=e.control,a=e.label,r=e.disabled,c=e.options,i=Object(Pe.d)({name:t,control:n}),s=i.field,o=s.value,l=s.onBlur,d=s.onChange,u=i.fieldState,j=u.invalid,b=u.error;return Object(N.jsxs)(qe.a,{variant:"outlined",size:"small",fullWidth:!0,error:j,disabled:r,margin:"normal",children:[Object(N.jsx)($e.a,{id:"".concat(t,"_label"),children:a}),Object(N.jsx)(Ke.a,{labelId:"".concat(t,"_label"),value:o,onChange:d,onBlur:l,label:a,children:c.map((function(e){return Object(N.jsx)(Qe.a,{value:e.value,children:e.label},e.value)}))}),Object(N.jsx)(Te.a,{children:null===b||void 0===b?void 0:b.message})]})}var Ye=n(170),Ze=n(67),et=Ze.b().shape({name:Ze.c().required("Please enter name").test("two-words","Please enter at least two words.",(function(e){return!e||e.split(" ").filter((function(e){return Boolean(e)})).length>=2})),age:Ze.a().positive("Please enter a positive number.").integer("Please enter an integer.").min(18,"Min is 18.").max(60,"Max is 60.").required("Please enter age.").typeError("Please enter a valid number."),mark:Ze.a().min(0,"Min is 0.").max(10,"Max is 10.").required("Please enter mark.").typeError("Please enter a valid number."),gender:Ze.c().oneOf(["male","female"],"Please select either male or female.").required("Please select gender."),city:Ze.c().required("Please select a city.")});function tt(e){var t=e.initialValues,n=e.onSubmit,a=Object(Pe.e)({defaultValues:t,resolver:Object(Ye.a)(et)}),r=a.control,i=a.handleSubmit,s=a.formState.isSubmitting,o=k(_e),l=Object(c.useState)(""),d=Object(Ae.a)(l,2),u=d[0],j=d[1],b=function(){var e=Object(Fe.a)(Be.a.mark((function e(t){return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(""),e.next=4,null===n||void 0===n?void 0:n(t);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),j(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)(g.a,{maxWidth:400,children:Object(N.jsxs)("form",{onSubmit:i(b),children:[Object(N.jsx)(ze,{name:"name",control:r,label:"Full Name"}),Object(N.jsx)(Je,{name:"gender",control:r,label:"Gender",row:!0,options:[{label:"Male",value:"male"},{label:"Female",value:"female"}]}),Object(N.jsx)(ze,{name:"age",control:r,label:"Age",type:"number"}),Object(N.jsx)(ze,{name:"mark",control:r,label:"Mark",type:"number"}),Object(N.jsx)(Xe,{name:"city",control:r,label:"City",options:o}),u&&Object(N.jsx)(We.a,{severity:"error",children:u}),Object(N.jsx)(g.a,{children:Object(N.jsxs)(v.a,{type:"submit",variant:"contained",color:"primary",disabled:s,children:[s&&Object(N.jsx)(Re.a,{color:"primary",size:16})," \xa0Save"]})})]})})}var nt=n(73);function at(){var e=Object(x.h)().studentId,t=Boolean(e),n=Object(c.useState)(),a=Object(Ae.a)(n,2),r=a[0],i=a[1],s=Object(x.g)();Object(c.useEffect)((function(){e&&Object(Fe.a)(Be.a.mark((function t(){var n;return Be.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Ie.getById(e);case 3:n=t.sent,i(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Failed to fetch student details",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}),[e]);var o=function(){var e=Object(Fe.a)(Be.a.mark((function e(n){return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,Ie.update(n);case 3:e.next=7;break;case 5:return e.next=7,Ie.add(n);case 7:nt.b.success("Save student successfully!"),s.push("/admin/students");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=Object(M.a)({name:"",age:0,mark:0,city:"",gender:"male"},r);return Object(N.jsxs)(g.a,{children:[Object(N.jsx)(T.a,{to:"/admin/students",children:Object(N.jsxs)(p.a,{variant:"caption",style:{display:"flex",alignItems:"center"},children:[Object(N.jsx)(Me.a,{})," \xa0Back to student list"]})}),Object(N.jsx)(p.a,{variant:"h4",children:t?"Update student info":"Add new student"}),(!t||Boolean(r))&&Object(N.jsx)(g.a,{mt:3,children:Object(N.jsx)(tt,{initialValues:l,onSubmit:o})})]})}var rt=n(401),ct=n(406),it=n(394),st=n(395),ot=n(396),lt=n(397),dt=Object(f.a)((function(e){return{table:{},edit:{marginRight:e.spacing(1)}}}));function ut(e){var t=e.studentList,n=e.cityMap,a=e.onEdit,r=e.onRemove,c=dt(),s=i.a.useState(!1),o=Object(Ae.a)(s,2),l=o[0],d=o[1],u=i.a.useState(),j=Object(Ae.a)(u,2),b=j[0],h=j[1],O=function(){d(!1)};return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(he.a,{component:m.a,children:Object(N.jsxs)(ue.a,{className:c.table,size:"small","aria-label":"simple table",children:[Object(N.jsx)(Oe.a,{children:Object(N.jsxs)(xe.a,{children:[Object(N.jsx)(be.a,{children:"Id"}),Object(N.jsx)(be.a,{children:"Name"}),Object(N.jsx)(be.a,{children:"Gender"}),Object(N.jsx)(be.a,{children:"Mark"}),Object(N.jsx)(be.a,{children:"City"}),Object(N.jsx)(be.a,{align:"center",children:"Action"})]})}),Object(N.jsx)(je.a,{children:t.map((function(e){var t,r,i;return Object(N.jsxs)(xe.a,{children:[Object(N.jsx)(be.a,{children:e.id}),Object(N.jsx)(be.a,{children:e.name}),Object(N.jsx)(be.a,{children:(i=e.gender,i?"".concat(i[0].toUpperCase()).concat(i.slice(1)):"")}),Object(N.jsx)(be.a,{children:Object(N.jsx)(g.a,{color:(r=e.mark,r>=8?"green":r>=4?"goldenrod":"red"),fontWeight:"bold",children:e.mark})}),Object(N.jsx)(be.a,{children:null===(t=n[e.city])||void 0===t?void 0:t.name}),Object(N.jsxs)(be.a,{align:"right",children:[Object(N.jsx)(v.a,{size:"small",color:"primary",onClick:function(){return null===a||void 0===a?void 0:a(e)},className:c.edit,children:"Edit"}),Object(N.jsx)(v.a,{size:"small",color:"secondary",onClick:function(){return function(e){d(!0),h(e)}(e)},children:"Remove"})]})]},e.id)}))})]})}),Object(N.jsxs)(ct.a,{open:l,onClose:O,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(N.jsx)(it.a,{id:"alert-dialog-title",children:"Remove student?"}),Object(N.jsx)(st.a,{children:Object(N.jsxs)(ot.a,{id:"alert-dialog-description",children:["Would you like to remove student has name is '",null===b||void 0===b?void 0:b.name,"' ?",Object(N.jsx)("br",{}),"This action can't undo."]})}),Object(N.jsxs)(lt.a,{children:[Object(N.jsx)(v.a,{onClick:O,children:"Cancel"}),Object(N.jsx)(v.a,{onClick:function(){d(!1),r&&r(b)},autoFocus:!0,children:"Ok"})]})]})]})}var jt=n(329),bt=n(398);function ht(e){var t=e.filter,n=e.cityList,a=e.onChange,r=e.onSearchChange,i=Object(c.useRef)();return Object(N.jsx)(g.a,{children:Object(N.jsxs)(ae.a,{container:!0,spacing:3,children:[Object(N.jsx)(ae.a,{item:!0,xs:12,md:6,children:Object(N.jsxs)(qe.a,{fullWidth:!0,variant:"outlined",size:"small",children:[Object(N.jsx)($e.a,{htmlFor:"searchByName",children:"Search by name"}),Object(N.jsx)(jt.a,{id:"searchByName",label:"Search by name",endAdornment:Object(N.jsx)(bt.a,{}),labelWidth:60,onChange:function(e){if(r){var n=Object(M.a)(Object(M.a)({},t),{},{name_like:e.target.value,_page:1});r(n)}},inputRef:i})]})}),Object(N.jsx)(ae.a,{item:!0,xs:12,md:6,lg:2,children:Object(N.jsxs)(qe.a,{variant:"outlined",size:"small",fullWidth:!0,children:[Object(N.jsx)($e.a,{id:"filterByCity",children:"Filter by city"}),Object(N.jsxs)(Ke.a,{labelId:"filterByCity",value:t.city||"",onChange:function(e){if(a){var n=Object(M.a)(Object(M.a)({},t),{},{city:e.target.value||void 0,_page:1});a(n)}},label:"Filter by city",children:[Object(N.jsx)(Qe.a,{value:"",children:Object(N.jsx)("em",{children:"All"})}),n.map((function(e){return Object(N.jsx)(Qe.a,{value:e.code,children:e.name},e.code)}))]})]})}),Object(N.jsx)(ae.a,{item:!0,xs:12,md:6,lg:2,children:Object(N.jsxs)(qe.a,{variant:"outlined",size:"small",fullWidth:!0,children:[Object(N.jsx)($e.a,{id:"sortBy",children:"Sort"}),Object(N.jsxs)(Ke.a,{labelId:"sortBy",value:t._sort?"".concat(t._sort,".").concat(t._order):"",onChange:function(e){if(a){var n=e.target.value.split("."),r=Object(Ae.a)(n,2),c=r[0],i=r[1],s=Object(M.a)(Object(M.a)({},t),{},{_sort:c||void 0,_order:i||void 0});a(s)}},label:"Sort",children:[Object(N.jsx)(Qe.a,{value:"",children:Object(N.jsx)("em",{children:"No sort"})}),Object(N.jsx)(Qe.a,{value:"name.asc",children:"Name ASC"}),Object(N.jsx)(Qe.a,{value:"name.desc",children:"Name DESC"}),Object(N.jsx)(Qe.a,{value:"mark.asc",children:"Mark ASC"}),Object(N.jsx)(Qe.a,{value:"mark.desc",children:"Mark DESC"})]})]})}),Object(N.jsx)(ae.a,{item:!0,xs:12,md:6,lg:2,children:Object(N.jsx)(v.a,{variant:"outlined",color:"primary",onClick:function(){if(a){var e=Object(M.a)(Object(M.a)({},t),{},{_sort:void 0,_order:void 0,_page:1,city:void 0,name_like:void 0});a(e),i.current&&(i.current.value="")}},children:"Clear Filter"})})]})})}var Ot=Object(w.c)({name:"student",initialState:{loading:!1,list:[],filter:{_page:1,_limit:15},pagination:{_limit:1,_page:1,_totalRows:1}},reducers:{fetchStudentList:function(e,t){e.loading=!0},fetchStudentListSuccess:function(e,t){e.loading=!1,e.list=t.payload.data,e.pagination=t.payload.pagination},fetchStudentListFailed:function(e){e.loading=!1},setFilter:function(e,t){e.filter=t.payload},setFilterWithDebounce:function(e,t){}}}),xt=Ot.actions,ft=function(e){return e.student.list},mt=function(e){return e.student.loading},pt=function(e){return e.student.filter},gt=function(e){return e.student.pagination},vt=Ot.reducer,yt=Object(f.a)((function(e){return{root:{position:"relative",paddingTop:e.spacing(1)},titleContainer:{display:"flex",flexFlow:"row nowrap",justifyContent:"space-between",alignItems:"center",marginBottom:e.spacing(4)},loading:{position:"absolute",width:"100%",top:e.spacing(-1)}}}));function kt(){var e=y(),t=yt(),n=k(ft),a=k(gt),r=k(pt),i=k(mt),s=k(Se),o=k(Ce),l=Object(x.i)(),d=Object(x.g)();Object(c.useEffect)((function(){e(xt.fetchStudentList(r))}),[e,r]);var u=function(){var t=Object(Fe.a)(Be.a.mark((function t(n){return Be.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Ie.remove((null===n||void 0===n?void 0:n.id)||"");case 3:nt.b.success("Remove student successfully!"),e(xt.setFilter(Object(M.a)({},r))),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Remove student error",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}();return Object(N.jsxs)(g.a,{className:t.root,children:[i&&Object(N.jsx)(ne.a,{className:t.loading}),Object(N.jsxs)(g.a,{className:t.titleContainer,children:[Object(N.jsx)(p.a,{variant:"h4",children:"Students"}),Object(N.jsx)(T.a,{to:"".concat(l.path,"/add"),style:{textDecoration:"none"},children:Object(N.jsx)(v.a,{variant:"contained",color:"primary",children:"Add new student"})})]}),Object(N.jsx)(g.a,{mb:2,children:Object(N.jsx)(ht,{filter:r,cityList:o,onSearchChange:function(t){e(xt.setFilterWithDebounce(t))},onChange:function(t){e(xt.setFilter(t))}})}),Object(N.jsx)(ut,{studentList:n,cityMap:s,onEdit:function(e){d.push("".concat(l.path,"/").concat(e.id))},onRemove:u}),Object(N.jsx)(g.a,{mt:2,display:"flex",justifyContent:"center",children:Object(N.jsx)(rt.a,{color:"primary",count:Math.ceil((null===a||void 0===a?void 0:a._totalRows)/(null===a||void 0===a?void 0:a._limit)),page:a._page,onChange:function(t,n){e(xt.setFilter(Object(M.a)(Object(M.a)({},r),{},{_page:n})))}})})]})}function wt(){var e=Object(x.i)(),t=y();return Object(c.useEffect)((function(){t(we.fetchCityList())}),[t]),Object(N.jsxs)(x.d,{children:[Object(N.jsx)(x.b,{path:e.path,exact:!0,children:Object(N.jsx)(kt,{})}),Object(N.jsx)(x.b,{path:"".concat(e.path,"/add"),children:Object(N.jsx)(at,{})}),Object(N.jsx)(x.b,{path:"".concat(e.path,"/:studentId"),children:Object(N.jsx)(at,{})})]})}var Ct=Object(f.a)((function(e){return{root:{display:"grid",gridTemplateRows:"auto 1fr",gridTemplateColumns:"240px 1fr",gridTemplateAreas:'"header header" "sidebar main"',minHeight:"100vh"},header:{gridArea:"header"},sidebar:{gridArea:"sidebar",borderRight:"1px solid ".concat(e.palette.divider),backgroundColor:e.palette.background.paper},main:{gridArea:"main",backgroundColor:e.palette.background.paper,padding:e.spacing(2,3)}}}));function St(){var e=Ct();return Object(N.jsxs)(g.a,{className:e.root,children:[Object(N.jsx)(g.a,{className:e.header,children:Object(N.jsx)(J,{})}),Object(N.jsx)(g.a,{className:e.sidebar,children:Object(N.jsx)(U,{})}),Object(N.jsx)(g.a,{className:e.main,children:Object(N.jsxs)(x.d,{children:[Object(N.jsx)(x.b,{path:"/admin/dashboard",children:Object(N.jsx)(ge,{})}),Object(N.jsx)(x.b,{path:"/admin/students",children:Object(N.jsx)(wt,{})})]})})]})}var _t=function(){return Object(c.useEffect)((function(){O.getAll().then((function(e){return console.log(e)}))})),Object(N.jsxs)(x.d,{children:[Object(N.jsx)(x.b,{path:"/",exact:!0,children:Object(N.jsx)(F,{})}),Object(N.jsx)(I,{path:"/admin",children:Object(N.jsx)(St,{})}),Object(N.jsx)(x.b,{children:Object(N.jsx)(A,{})})]})},Lt=n(169),Nt=n(41),Bt=n(157);function Ft(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var At=Object(w.b)("counter/fetchCount",function(){var e=Object(Fe.a)(Be.a.mark((function e(t){var n;return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ft(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Mt=Object(w.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(At.pending,(function(e){e.status="loading"})).addCase(At.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),It=Mt.actions,Rt=(It.increment,It.decrement,It.incrementByAmount,Mt.reducer),Wt=n(167),Et=n(11),Pt=n(28),Dt=Be.a.mark(Ut),zt=Be.a.mark(Ht),Tt=Be.a.mark(Gt),qt=Be.a.mark(Vt);function Ut(e){return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Et.d)(1e3);case 3:return localStorage.setItem("access_token","fake_token"),e.next=6,Object(Et.f)(_.loginSuccess({id:1,name:"Easy Frontend"}));case 6:return e.next=9,Object(Et.f)(Object(Pt.d)("/admin/dashboard"));case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),e.next=15,Object(Et.f)(_.loginFailed(e.t0.message));case 15:case"end":return e.stop()}}),Dt,null,[[0,11]])}function Ht(){return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Et.d)(500);case 2:return localStorage.removeItem("access_token"),e.next=5,Object(Et.f)(Object(Pt.d)("/"));case 5:case"end":return e.stop()}}),zt)}function Gt(){var e;return Be.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Boolean(localStorage.getItem("access_token"))){t.next=8;break}return t.next=5,Object(Et.g)(_.login.type);case 5:return e=t.sent,t.next=8,Object(Et.e)(Ut,e.payload);case 8:return t.next=10,Object(Et.g)(_.logout.type);case 10:return t.next=12,Object(Et.b)(Ht);case 12:t.next=0;break;case 14:case"end":return t.stop()}}),Tt)}function Vt(){return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Et.e)(Gt);case 2:case"end":return e.stop()}}),qt)}var Jt=Be.a.mark(Zt),$t=Be.a.mark(en),Kt=Be.a.mark(tn),Qt=Be.a.mark(nn),Xt=Be.a.mark(an),Yt=Be.a.mark(rn);function Zt(){var e,t,n,a,r,c,i;return Be.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(Et.a)([Object(Et.b)(Ie.getAll,{_page:1,_limit:1,gender:"male"}),Object(Et.b)(Ie.getAll,{_page:1,_limit:1,gender:"female"}),Object(Et.b)(Ie.getAll,{_page:1,_limit:1,mark_gte:8}),Object(Et.b)(Ie.getAll,{_page:1,_limit:1,mark_lte:5})]);case 2:return e=s.sent,t=e.map((function(e){return e.pagination._totalRows})),n=Object(Ae.a)(t,4),a=n[0],r=n[1],c=n[2],i=n[3],s.next=7,Object(Et.f)(K.setStatistics({femaleCount:r,highMarkCount:c,lowMarkCount:i,maleCount:a}));case 7:case"end":return s.stop()}}),Jt)}function en(){var e,t;return Be.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Et.b)(Ie.getAll,{_page:1,_limit:5,_order:"desc",_sort:"mark"});case 2:return e=n.sent,t=e.data,n.next=6,Object(Et.f)(K.setHighestStudentList(t));case 6:case"end":return n.stop()}}),$t)}function tn(){var e,t;return Be.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Et.b)(Ie.getAll,{_page:1,_limit:5,_order:"asc",_sort:"mark"});case 2:return e=n.sent,t=e.data,n.next=6,Object(Et.f)(K.setLowestStudentList(t));case 6:case"end":return n.stop()}}),Kt)}function nn(){var e,t,n,a,r;return Be.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(Et.b)(O.getAll);case 2:return e=c.sent,t=e.data,n=t.map((function(e){return Object(Et.b)(Ie.getAll,{_page:1,_limit:5,_order:"desc",_sort:"mark",city:e.code})})),c.next=7,Object(Et.a)(n);case 7:return a=c.sent,r=a.map((function(e,n){return{cityId:t[n].code,cityName:t[n].name,rankingList:e.data}})),c.next=11,Object(Et.f)(K.setRankingByCityList(r));case 11:case"end":return c.stop()}}),Qt)}function an(){return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Et.a)([Object(Et.b)(Zt),Object(Et.b)(en),Object(Et.b)(tn),Object(Et.b)(nn)]);case 3:return e.next=5,Object(Et.f)(K.fetchDataSuccess());case 5:e.next=12;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(Et.f)(K.fetchDataError());case 11:console.log("Failed to fetch dashboard data",e.t0);case 12:case"end":return e.stop()}}),Xt,null,[[0,7]])}function rn(){return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Et.h)(K.fetchData.type,an);case 2:case"end":return e.stop()}}),Yt)}var cn=Be.a.mark(ln),sn=Be.a.mark(dn),on=Be.a.mark(un);function ln(e){var t;return Be.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(Et.b)(Ie.getAll,e.payload);case 3:return t=n.sent,n.next=6,Object(Et.f)(xt.fetchStudentListSuccess(t));case 6:n.next=13;break;case 8:return n.prev=8,n.t0=n.catch(0),console.log("Failed to fetch student list",n.t0),n.next=13,Object(Et.f)(xt.fetchStudentListFailed());case 13:case"end":return n.stop()}}),cn,null,[[0,8]])}function dn(e){return Be.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Et.f)(xt.setFilter(e.payload));case 2:case"end":return t.stop()}}),sn)}function un(){return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Et.h)(xt.fetchStudentList.type,ln);case 2:return e.next=4,Object(Et.c)(500,xt.setFilterWithDebounce.type,dn);case 4:case"end":return e.stop()}}),on)}var jn=Be.a.mark(hn),bn=Be.a.mark(On);function hn(){var e;return Be.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Et.b)(O.getAll);case 3:return e=t.sent,t.next=6,Object(Et.f)(we.fetchCityListSuccess(e));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(Et.f)(we.fetchCityListFailed());case 12:case"end":return t.stop()}}),jn,null,[[0,8]])}function On(){return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Et.h)(we.fetchCityList.type,hn);case 2:case"end":return e.stop()}}),bn)}var xn=Be.a.mark(fn);function fn(){return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Wt.a)([Vt(),rn(),un(),On()]);case 2:case"end":return e.stop()}}),xn)}var mn=Object(Nt.b)({router:Object(r.b)(u),counter:Rt,auth:L,dashboard:te,student:vt,city:Le}),pn=Object(Lt.a)(),gn=Object(w.a)({reducer:mn,middleware:function(e){return e().concat(pn,Object(Bt.a)(u))}});pn.run(fn);n(315),n(316),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(N.jsx)(i.a.StrictMode,{children:Object(N.jsx)(l.a,{store:gn,children:Object(N.jsxs)(r.a,{history:u,children:[Object(N.jsx)(a.a,{}),Object(N.jsx)(_t,{}),Object(N.jsx)(nt.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[317,1,2]]]);
//# sourceMappingURL=main.3d930c29.chunk.js.map