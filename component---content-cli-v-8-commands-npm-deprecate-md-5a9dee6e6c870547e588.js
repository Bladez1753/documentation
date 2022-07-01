(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{"2kQ5":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return m}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),r=n("O6H6"),i={},o={_frontmatter:i},c=r.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm deprecate <package-spec> <message>\n")),Object(l.b)("p",null,"Note: This command is unaware of workspaces."),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"This command will update the npm registry entry for a package, providing a\ndeprecation warning to all who attempt to install it."),Object(l.b)("p",null,"It works on ",Object(l.b)("a",{parentName:"p",href:"https://semver.npmjs.com/"},"version ranges")," as well as specific\nversions, so you can do something like this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'npm deprecate my-thing@"< 0.2.3" "critical bug fixed in v0.2.3"\n')),Object(l.b)("p",null,"SemVer ranges passed to this command are interpreted such that they ",Object(l.b)("em",{parentName:"p"},"do"),"\ninclude prerelease versions.  For example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'npm deprecate my-thing@1.x "1.x is no longer supported"\n')),Object(l.b)("p",null,"In this case, a version ",Object(l.b)("inlineCode",{parentName:"p"},"my-thing@1.0.0-beta.0")," will also be deprecated."),Object(l.b)("p",null,"You must be the package owner to deprecate something.  See the ",Object(l.b)("inlineCode",{parentName:"p"},"owner")," and\n",Object(l.b)("inlineCode",{parentName:"p"},"adduser")," help topics."),Object(l.b)("p",null,"To un-deprecate a package, specify an empty string (",Object(l.b)("inlineCode",{parentName:"p"},'""'),") for the ",Object(l.b)("inlineCode",{parentName:"p"},"message"),"\nargument. Note that you must use double quotes with no space between them to\nformat an empty string."),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"registry")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'Default: "',Object(l.b)("a",{parentName:"li",href:"https://registry.npmjs.org/%22"},'https://registry.npmjs.org/"')),Object(l.b)("li",{parentName:"ul"},"Type: URL")),Object(l.b)("p",null,"The base URL of the npm registry."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"otp")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: null"),Object(l.b)("li",{parentName:"ul"},"Type: null or String")),Object(l.b)("p",null,"This is a one-time password from a two-factor authenticator. It's needed\nwhen publishing or changing package permissions with ",Object(l.b)("inlineCode",{parentName:"p"},"npm access"),"."),Object(l.b)("p",null,"If not set, and a registry response fails with a challenge for a one-time\npassword, npm will prompt on the command line for one."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/using-npm/package-spec"},"package spec")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-publish"},"npm publish")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/using-npm/registry"},"npm registry")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-owner"},"npm owner")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-adduser"},"npm adduser"))))}m.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),r=n("aOgs"),i=n("q1tI"),o=n.n(i),c=n("7ljp"),m=n("pD55"),s=n("8Aig"),p=n("ReZb"),b=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return o.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},o.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return o.a.createElement("strong",null,t)},g=n("gnlW"),f=n("mwnC"),O=n("/Rw0"),y=n("dVM4"),j=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function w(e){var t=e.items,n=e.depth;return o.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return o.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},o.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?o.a.createElement(w,{items:e.items,depth:n+1}):null)})))}w.defaultProps={depth:0};var E=w,N=n("MfeC");function v(e){var t=N.a.getPath(e.location.pathname),n=N.a.getVariantAndPage(e.root,t);if(!n)return null;var a=N.a.getVariantsForPage(e.root,n.page),r=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),r.push(o.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),o.a.createElement(l.i,{overlay:e.overlay},o.a.createElement(l.i.Button,null,i.variant.title),o.a.createElement(v.Menu,{direction:e.direction,width:e.menuWidth},r)))}v.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var k=v,x=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,j=i.title,w=i.description,v=i.status,z=i.source,D=i.additionalContributors,H=void 0===D?[]:D,G=N.a.getVariantRoot(a.pathname);return o.a.createElement(c.a,{components:{Index:p.a,Note:b.a,Prompt:d,PromptReply:h,Screenshot:g.a}},o.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},o.a.createElement(m.a,{title:j,description:w}),o.a.createElement(s.b,{location:a,isSearchEnabled:n.isSearchEnabled}),o.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},o.a.createElement(l.e,{display:["none",null,null,"block"]},o.a.createElement(f.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),o.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},o.a.createElement(_,null,o.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},o.a.createElement(l.e,null,o.a.createElement(l.e,null,o.a.createElement(l.m,{as:"h1"},j),w))),null!=G?o.a.createElement(I,null,o.a.createElement(k,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:G,location:a})):null),n.tableOfContents.items?o.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},o.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),o.a.createElement(E,{items:n.tableOfContents.items})):null,o.a.createElement(T,null,v||z?o.a.createElement(l.k,{mb:3,alignItems:"center"},v?o.a.createElement(y.a,{status:v}):null,o.a.createElement(l.e,{mx:"auto"}),z?o.a.createElement(O.a,{href:z}):null):null,n.tableOfContents.items?o.a.createElement(l.e,{display:["block",null,"none"],mb:3},o.a.createElement(l.h,null,(function(e){var t=e.open;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?o.a.createElement(l.r,{icon:r.b,mr:2}):o.a.createElement(l.r,{icon:r.c,mr:2}),"Table of contents"),o.a.createElement(l.e,{pt:1},o.a.createElement(E,{items:n.tableOfContents.items})))}))):null,t,o.a.createElement(u.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(H.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-cli-v-8-commands-npm-deprecate-md-5a9dee6e6c870547e588.js.map