(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[600],{38229:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/datastores",function(){return s(63186)}])},63186:function(e,t,s){"use strict";s.r(t);var a=s(85893),r=s(39332),n=s(67294),l=s(64082),o=s(18967),c=s(65077),i=s(46907),d=s(6775),x=s(66803),u=s(2453),p=s(67421),h=s(74312),m=s(3414),g=s(48665),j=s(70702),_=s(13245),f=s(75913),Z=s(47556),b=s(13009),P=s(40911),w=s(74435),k=s(43458),y=s(52254),N=s(30119);let{Dragger:C}=x.default,F=(0,h.Z)(m.Z)(e=>{let{theme:t}=e;return{width:"33%",backgroundColor:"dark"===t.palette.mode?t.palette.background.level1:"#fff",...t.typography.body2,padding:t.spacing(1),textAlign:"center",borderRadius:4,color:t.vars.palette.text.secondary}});t.default=()=>{let e=(0,r.useRouter)(),{t}=(0,p.$G)(),[s,x]=(0,n.useState)(0),[h,v]=(0,n.useState)(""),[S,R]=(0,n.useState)([]),[E,A]=(0,n.useState)(!1),[T,D]=(0,n.useState)(""),[U,B]=(0,n.useState)(""),[L,W]=(0,n.useState)(""),[O,z]=(0,n.useState)(""),[I,X]=(0,n.useState)(""),[K,M]=(0,n.useState)(""),[G,V]=(0,n.useState)(""),[Y,$]=(0,n.useState)(null),[q,H]=(0,n.useState)(!0),[J,Q]=(0,n.useState)(!1),[ee,et]=(0,n.useState)({}),es=[t("Knowledge_Space_Config"),t("Choose_a_Datasource_type"),t("Setup_the_Datasource")],ea=[{type:"text",title:t("Text"),subTitle:t("Fill your raw text")},{type:"webPage",title:t("URL"),subTitle:t("Fetch_the_content_of_a_URL")},{type:"file",title:t("Document"),subTitle:t("Upload_a_document")}];return(0,n.useEffect)(()=>{(async function(){let e=await (0,N.PR)("/knowledge/space/list",{});e.success&&R(e.data)})()},[]),(0,a.jsxs)(g.Z,{className:"bg-[#F1F2F5] dark:bg-[#212121] w-full h-full",children:[(0,a.jsx)(g.Z,{className:"page-body p-4 h-[90%] overflow-auto",sx:{"&::-webkit-scrollbar":{display:"none"}},children:(0,a.jsxs)(j.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",sx:{"& i":{width:"430px",marginRight:"30px"}},children:[(0,a.jsxs)(g.Z,{sx:{"&: hover":{boxShadow:"0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);"}},onClick:()=>A(!0),className:"bg-[#E9EBEE] dark:bg-[#484848] flex content-start box-content w-[390px] h-[79px] pt-[33px] px-5 pb-10 mr-[30px] mb-[30px] text-lg font-bold text-black shrink-0 grow-0 cursor-pointer rounded-2xl",children:[(0,a.jsx)(g.Z,{className:"w-8 h-8 leading-7 border border-blue-500 text-center rounded-md mr-1 font-light text-blue-500",children:"+"}),(0,a.jsx)(g.Z,{className:"text-base",children:t("space")})]}),S.map((s,r)=>(0,a.jsxs)(g.Z,{sx:{"&: hover":{boxShadow:"0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);"}},onClick:()=>{e.push("/datastores/documents?name=".concat(s.name))},className:"bg-[#FFFFFF] dark:bg-[#484848] relative pt-[30px] px-5 pb-[40px] mr-[30px] mb-[30px] shrink-0 grow-0 cursor-pointer rounded-[10px] border-t-4 border-[#54A4F8] border-solid",children:[(0,a.jsxs)(g.Z,{className:"text-lg mb-[10px] font-bold text-black",children:[(0,a.jsx)(c.Z,{className:"mr-[5px] text-[#2AA3FF]"}),s.name]}),(0,a.jsxs)(g.Z,{className:"flex justify-start",children:[(0,a.jsxs)(g.Z,{className:"w-[130px] shrink-0 grow-0",children:[(0,a.jsx)(g.Z,{className:"text-[#2AA3FF]",children:s.vector_type}),(0,a.jsx)(g.Z,{className:"text-xs text-black",children:t("Vector")})]}),(0,a.jsxs)(g.Z,{className:"w-[130px] shrink-0 grow-0",children:[(0,a.jsx)(g.Z,{className:"text-[#2AA3FF]",children:s.owner}),(0,a.jsx)(g.Z,{className:"text-xs text-black",children:t("Owner")})]}),(0,a.jsxs)(g.Z,{className:"w-[130px] shrink-0 grow-0",children:[(0,a.jsx)(g.Z,{className:"text-[#2AA3FF]",children:s.docs||0}),(0,a.jsx)(g.Z,{className:"text-xs text-black",children:t("Docs")})]})]}),(0,a.jsx)(g.Z,{className:"absolute right-2.5 top-2.5 text-[#CD2029]",onClick:e=>{e.stopPropagation(),et(s),Q(!0)},children:(0,a.jsx)(i.Z,{className:"text-3xl"})})]},r)),(0,a.jsx)("i",{}),(0,a.jsx)("i",{}),(0,a.jsx)("i",{}),(0,a.jsx)("i",{}),(0,a.jsx)("i",{}),(0,a.jsx)("i",{}),(0,a.jsx)("i",{}),(0,a.jsx)("i",{}),(0,a.jsx)("i",{}),(0,a.jsx)("i",{}),(0,a.jsx)("i",{}),(0,a.jsx)("i",{}),(0,a.jsx)("i",{}),(0,a.jsx)("i",{}),(0,a.jsx)("i",{}),(0,a.jsx)("i",{}),(0,a.jsx)("i",{}),(0,a.jsx)("i",{}),(0,a.jsx)("i",{}),(0,a.jsx)("i",{})]})}),(0,a.jsx)(_.Z,{className:"flex justify-center items-center z-[1000]",open:E,onClose:()=>A(!1),children:(0,a.jsxs)(m.Z,{variant:"outlined",className:"w-[800px] rounded-md shadow-lg p-6",children:[(0,a.jsx)(g.Z,{className:"w-full",children:(0,a.jsx)(j.Z,{spacing:2,direction:"row",children:es.map((e,t)=>(0,a.jsxs)(F,{sx:{fontWeight:s===t?"bold":"",color:s===t?"#2AA3FF":""},children:[t<s?(0,a.jsx)(o.Z,{}):"".concat(t+1,"."),"".concat(e)]},e))})}),0===s?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(g.Z,{className:"my-[30px] mx-auto",children:[t("Knowledge_Space_Name"),":",(0,a.jsx)(f.ZP,{placeholder:t("Please_input_the_name"),onChange:e=>D(e.target.value),className:"mb-5"}),t("Owner"),":",(0,a.jsx)(f.ZP,{placeholder:t("Please_input_the_owner"),onChange:e=>B(e.target.value),className:"mb-5"}),t("Description"),":",(0,a.jsx)(f.ZP,{placeholder:t("Please_input_the_description"),onChange:e=>W(e.target.value),className:"mb-5"})]}),(0,a.jsx)(Z.Z,{variant:"outlined",onClick:async()=>{if(""===T){u.ZP.error(t("Please_input_the_name"));return}if(/[^\u4e00-\u9fa50-9a-zA-Z_-]/.test(T)){u.ZP.error(t("the_name_can_only_contain"));return}if(""===U){u.ZP.error(t("Please_input_the_owner"));return}if(""===L){u.ZP.error(t("Please_input_the_description"));return}let e=await (0,N.PR)("/knowledge/space/add",{name:T,vector_type:"Chroma",owner:U,desc:L});if(e.success){u.ZP.success("success"),x(1);let e=await (0,N.PR)("/knowledge/space/list",{});e.success&&R(e.data)}else u.ZP.error(e.err_msg||"failed")},children:t("Next")})]}):1===s?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(g.Z,{sx:{margin:"30px auto"},children:ea.map(e=>(0,a.jsxs)(m.Z,{sx:{boxSizing:"border-box",height:"80px",padding:"12px",display:"flex",flexDirection:"column",justifyContent:"space-between",border:"1px solid gray",borderRadius:"6px",marginBottom:"20px",cursor:"pointer"},onClick:()=>{v(e.type),x(2)},children:[(0,a.jsx)(m.Z,{sx:{fontSize:"20px",fontWeight:"bold"},children:e.title}),(0,a.jsx)(m.Z,{children:e.subTitle})]},e.type))})}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(g.Z,{sx:{margin:"30px auto"},children:[t("Name"),":",(0,a.jsx)(f.ZP,{placeholder:t("Please_input_the_name"),onChange:e=>X(e.target.value),sx:{marginBottom:"20px"}}),"webPage"===h?(0,a.jsxs)(a.Fragment,{children:[t("Web_Page_URL"),":",(0,a.jsx)(f.ZP,{placeholder:t("Please_input_the_Web_Page_URL"),onChange:e=>z(e.target.value)})]}):"file"===h?(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(C,{name:"file",multiple:!1,beforeUpload:()=>!1,onChange(e){if(0===e.fileList.length){$(null),X("");return}$(e.file),X(e.file.name)},children:[(0,a.jsx)("p",{className:"ant-upload-drag-icon",children:(0,a.jsx)(l.Z,{})}),(0,a.jsx)("p",{style:{color:"rgb(22, 108, 255)",fontSize:"20px"},children:t("Select_or_Drop_file")}),(0,a.jsx)("p",{className:"ant-upload-hint",style:{color:"rgb(22, 108, 255)"},children:"PDF, PowerPoint, Excel, Word, Text, Markdown,"})]})}):(0,a.jsxs)(a.Fragment,{children:[t("Text_Source"),":",(0,a.jsx)(f.ZP,{placeholder:t("Please_input_the_text_source"),onChange:e=>M(e.target.value),sx:{marginBottom:"20px"}}),t("Text"),":",(0,a.jsx)(b.Z,{onChange:e=>V(e.target.value),minRows:4,maxRows:4,sx:{marginBottom:"20px"}})]}),(0,a.jsxs)(P.ZP,{component:"label",sx:{marginTop:"20px"},endDecorator:(0,a.jsx)(w.Z,{checked:q,onChange:e=>H(e.target.checked)}),children:[t("Synch"),":"]})]}),(0,a.jsxs)(j.Z,{direction:"row",justifyContent:"flex-start",alignItems:"center",sx:{marginBottom:"20px"},children:[(0,a.jsx)(Z.Z,{variant:"outlined",sx:{marginRight:"20px"},onClick:()=>x(1),children:"< ".concat(t("Back"))}),(0,a.jsx)(Z.Z,{variant:"outlined",onClick:async()=>{if(""===I){u.ZP.error(t("Please_input_the_name"));return}if("webPage"===h){if(""===O){u.ZP.error(t("Please_input_the_text_source"));return}let e=await (0,N.PR)("/knowledge/".concat(T,"/document/add"),{doc_name:I,content:O,doc_type:"URL"});e.success?(u.ZP.success("success"),A(!1),q&&(0,N.PR)("/knowledge/".concat(T,"/document/sync"),{doc_ids:[e.data]})):u.ZP.error(e.err_msg||"failed")}else if("file"===h){if(!Y){u.ZP.error(t("Please_select_a_file"));return}let e=new FormData;e.append("doc_name",I),e.append("doc_file",Y),e.append("doc_type","DOCUMENT");let s=await (0,N.Ej)("/knowledge/".concat(T,"/document/upload"),e);s.success?(u.ZP.success("success"),A(!1),q&&(0,N.PR)("/knowledge/".concat(T,"/document/sync"),{doc_ids:[s.data]})):u.ZP.error(s.err_msg||"failed")}else{if(""===G){u.ZP.error(t("Please_input_the_text"));return}let e=await (0,N.PR)("/knowledge/".concat(T,"/document/add"),{doc_name:I,source:K,content:G,doc_type:"TEXT"});e.success?(u.ZP.success("success"),A(!1),q&&(0,N.PR)("/knowledge/".concat(T,"/document/sync"),{doc_ids:[e.data]})):u.ZP.error(e.err_msg||"failed")}},children:t("Finish")})]})]})]})}),(0,a.jsx)(_.Z,{open:J,onClose:()=>Q(!1),children:(0,a.jsxs)(k.Z,{variant:"outlined",role:"alertdialog","aria-labelledby":"alert-dialog-modal-title","aria-describedby":"alert-dialog-modal-description",children:[(0,a.jsx)(P.ZP,{id:"alert-dialog-modal-title",component:"h2",startDecorator:(0,a.jsx)(d.Z,{style:{color:"rgb(205, 32, 41)"}}),sx:{color:"black"},children:"Confirmation"}),(0,a.jsx)(y.Z,{}),(0,a.jsxs)(P.ZP,{id:"alert-dialog-modal-description",textColor:"text.tertiary",sx:{fontWeight:"500",color:"black"},children:["Sure to delete ",null==ee?void 0:ee.name,"?"]}),(0,a.jsxs)(g.Z,{sx:{display:"flex",gap:1,justifyContent:"flex-end",pt:2},children:[(0,a.jsx)(Z.Z,{variant:"outlined",color:"neutral",onClick:()=>Q(!1),children:"Cancel"}),(0,a.jsx)(Z.Z,{variant:"outlined",color:"danger",onClick:async()=>{Q(!1);let e=await (0,N.PR)("/knowledge/space/delete",{name:null==ee?void 0:ee.name});if(e.success){u.ZP.success("success");let e=await (0,N.PR)("/knowledge/space/list",{});e.success&&R(e.data)}else u.ZP.error(e.err_msg||"failed")},children:"Yes"})]})]})})]})}},30119:function(e,t,s){"use strict";s.d(t,{Tk:function(){return c},PR:function(){return i},Ej:function(){return d}});var a=s(2453),r=s(6154),n=s(83454);let l=r.Z.create({baseURL:n.env.API_BASE_URL});l.defaults.timeout=1e4,l.interceptors.response.use(e=>e.data,e=>Promise.reject(e)),s(96486);let o={"content-type":"application/json"},c=(e,t)=>{if(t){let s=Object.keys(t).filter(e=>void 0!==t[e]&&""!==t[e]).map(e=>"".concat(e,"=").concat(t[e])).join("&");s&&(e+="?".concat(s))}return l.get("/api"+e,{headers:o}).then(e=>e).catch(e=>{a.ZP.error(e),Promise.reject(e)})},i=(e,t)=>l.post(e,t,{headers:o}).then(e=>e).catch(e=>{a.ZP.error(e),Promise.reject(e)}),d=(e,t)=>l.post(e,t).then(e=>e).catch(e=>{a.ZP.error(e),Promise.reject(e)})}},function(e){e.O(0,[662,566,556,913,939,589,241,774,888,179],function(){return e(e.s=38229)}),_N_E=e.O()}]);