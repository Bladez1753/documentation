(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),r=n("u9kb"),l=n("aOgs"),i=n("q1tI"),o=n.n(i),c=n("7ljp"),s=n("pD55"),m=n("8Aig"),u=n("ReZb"),p=n("GCVy"),b=n("+6vE");var d=function(e){var t=e.children;return o.a.createElement(r.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},o.a.createElement(r.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return o.a.createElement("strong",null,t)},g=n("gnlW"),f=n("mwnC"),y=n("/Rw0"),O=n("dVM4"),v=Object(a.f)(r.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function j(e){var t=e.items,n=e.depth;return o.a.createElement(v,{key:t,as:"ul",m:0,p:0},t.map((function(e){return o.a.createElement(r.e,{as:"li",key:e.url,pl:n>0?3:0},o.a.createElement(r.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?o.a.createElement(j,{items:e.items,depth:n+1}):null)})))}j.defaultProps={depth:0};var E=j,w=n("MfeC");function x(e){var t=w.a.getPath(e.location.pathname),n=w.a.getVariantAndPage(e.root,t);if(!n)return null;var a=w.a.getVariantsForPage(e.root,n.page),l=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),l.push(o.a.createElement(r.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),o.a.createElement(r.i,{overlay:e.overlay},o.a.createElement(r.i.Button,null,i.variant.title),o.a.createElement(x.Menu,{direction:e.direction,width:e.menuWidth},l)))}x.Menu=Object(a.f)(r.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var k=x,N=Object(a.f)(r.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),_=Object(a.f)(r.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),C=Object(a.f)(r.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(r.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(r.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),F=Object(a.f)(r.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,v=i.title,j=i.description,x=i.status,A=i.source,M=i.additionalContributors,z=void 0===M?[]:M,H=w.a.getVariantRoot(a.pathname);return o.a.createElement(c.a,{components:{Index:u.a,Note:p.a,Prompt:d,PromptReply:h,Screenshot:g.a}},o.a.createElement(r.k,{flexDirection:"column",minHeight:"100vh"},o.a.createElement(s.a,{title:v,description:j}),o.a.createElement(m.b,{location:a,isSearchEnabled:n.isSearchEnabled}),o.a.createElement(N,{flex:"1 1 auto",flexDirection:"row"},o.a.createElement(r.e,{display:["none",null,null,"block"]},o.a.createElement(f.a,{editOnGitHub:n.themeOptions.editOnGitHub,pathPrefix:n.themeOptions.pathPrefix,location:a})),o.a.createElement(_,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},o.a.createElement(C,null,o.a.createElement(r.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},o.a.createElement(r.e,null,o.a.createElement(r.e,null,o.a.createElement(r.m,{as:"h1"},v),j))),null!=H?o.a.createElement(S,null,o.a.createElement(k,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:H,location:a})):null),n.tableOfContents.items?o.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},o.a.createElement(r.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),o.a.createElement(E,{items:n.tableOfContents.items})):null,o.a.createElement(F,null,x||A?o.a.createElement(r.k,{mb:3,alignItems:"center"},x?o.a.createElement(O.a,{status:x}):null,o.a.createElement(r.e,{mx:"auto"}),A?o.a.createElement(y.a,{href:A}):null):null,n.tableOfContents.items?o.a.createElement(r.e,{display:["block",null,"none"],mb:3},o.a.createElement(r.h,null,(function(e){var t=e.open;return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.s,{as:"summary",fontWeight:"bold"},t?o.a.createElement(r.r,{icon:l.b,mr:2}):o.a.createElement(r.r,{icon:l.c,mr:2}),"Table of contents"),o.a.createElement(r.e,{pt:1},o.a.createElement(E,{items:n.tableOfContents.items})))}))):null,t,o.a.createElement(b.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(z.map((function(e){return{login:e}})))}))))))}},vqOG:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n("zLVn"),r=n("q1tI"),l=n("7ljp"),i=n("O6H6"),o=n("4LHR"),c={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",t)}},m=s("Screenshot"),u=s("Note"),p={_frontmatter:c},b=i.a;function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(b,Object.assign({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"As an Enterprise admin, you can view active and inactive users, deactivate users who no longer need access to your npm Enterprise instance (such as users who have left your company), and reactivate inactive users."),Object(l.b)("h2",null,"Viewing users"),Object(l.b)("p",null,"As an npm Enterprise admin, you can see a list of all the current users of your instance, including non-admin end users and other instance admins."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)(r.Fragment,null,o.a["enterprise-instance-login"].text)),Object(l.b)("li",{parentName:"ol"},Object(l.b)(r.Fragment,null,o.a["enterprise-admin-panel"].text),Object(l.b)(r.Fragment,null,o.a["enterprise-admin-panel"].image)),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},'To view a complete list of users, click the "Manage users" tab.'),Object(l.b)(m,{src:"/enterprise/user-management/manage-users.png",alt:"Screenshot of the manage users button",mdxType:"Screenshot"}))),Object(l.b)("h2",null,"Deactivating users"),Object(l.b)("p",null,"As an npm Enterprise admin, you can deactivate users who no longer need access to your npm Enterprise instance -- for example, users who have left the company or whose responsibilities have changed."),Object(l.b)("p",null,'Deactivating a user will invalidate their login tokens, but will not delete organizations or packages they owned. A deactivated user will remain visible in the "Manage users" panel and can be reactivated by an admin user.'),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)(r.Fragment,null,o.a["enterprise-instance-login"].text)),Object(l.b)("li",{parentName:"ol"},Object(l.b)(r.Fragment,null,o.a["enterprise-admin-panel"].text),Object(l.b)(r.Fragment,null,o.a["enterprise-admin-panel"].image)),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},'Locate the user name of the user you want to deactivate, then next to their name, click "deactivate".'),Object(l.b)(m,{src:"/enterprise/user-management/deactivate-user.png",alt:"Screenshot of the deactivate user button",mdxType:"Screenshot"}))),Object(l.b)("h2",null,"Reactivating inactive users"),Object(l.b)(u,{mdxType:"Note"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," When you reactivate a user, they will need to re-enable ",Object(l.b)("a",{parentName:"p",href:"https://docs.npmjs.com/configuring-two-factor-authentication"},"two-factor authentication")," on their npm Enterprise instance account.")),Object(l.b)("p",null,"As an npm Enterprise admin, you can reactivate an inactive user of your instance to allow them to log in again."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)(r.Fragment,null,o.a["enterprise-instance-login"].text)),Object(l.b)("li",{parentName:"ol"},Object(l.b)(r.Fragment,null,o.a["enterprise-admin-panel"].text),Object(l.b)(r.Fragment,null,o.a["enterprise-admin-panel"].image)),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},'Locate the user name of the user you want to reactivate, then next to their name, click "activate".'),Object(l.b)(m,{src:"/enterprise/user-management/activate-user.png",alt:"Screenshot of the activate user button",mdxType:"Screenshot"}))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-enterprise-user-management-viewing-deactivating-and-reactivating-users-mdx-96a85b6b23144c4cbc44.js.map