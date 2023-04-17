"use strict";(self.webpackChunkimmer_website=self.webpackChunkimmer_website||[]).push([[349],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=d(r),m=o,f=l["".concat(c,".").concat(m)]||l[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[l]="string"==typeof e?e:o,i[1]=p;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4892:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>p,metadata:()=>d,toc:()=>l});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],p={id:"curried-produce",title:"Curried producers"},c=void 0,d={unversionedId:"curried-produce",id:"curried-produce",title:"Curried producers",description:"<div",source:"@site/docs/curried-produce.mdx",sourceDirName:".",slug:"/curried-produce",permalink:"/immer/curried-produce",draft:!1,editUrl:"https://github.com/immerjs/immer/edit/main/website/docs/curried-produce.mdx",tags:[],version:"current",frontMatter:{id:"curried-produce",title:"Curried producers"},sidebar:"Immer",previous:{title:"Using produce",permalink:"/immer/produce"},next:{title:"React & Immer",permalink:"/immer/example-setstate"}},s={},l=[],u={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("center",null,(0,a.kt)("div",{"data-ea-publisher":"immerjs","data-ea-type":"image",className:"horizontal bordered"}))," ",(0,a.kt)("details",null,(0,a.kt)("summary",{className:"egghead-summary"},"egghead.io lesson 6: Simplify code by using curried _reduce_"),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("iframe",{width:"760",height:"427",scrolling:"no",src:"https://egghead.io/lessons/javascript-simplify-immer-producer-functions-using-currying/embed"})),(0,a.kt)("a",{className:"egghead-link",href:"https://egghead.io/lessons/javascript-simplify-immer-producer-functions-using-currying"},"Hosted on egghead.io")),(0,a.kt)("p",null,"Passing a function as the first argument to ",(0,a.kt)("inlineCode",{parentName:"p"},"produce")," creates a function that doesn't apply ",(0,a.kt)("inlineCode",{parentName:"p"},"produce")," yet to a specific state, but rather creates a function that will apply ",(0,a.kt)("inlineCode",{parentName:"p"},"produce")," to any state that is passed to it in the future. This generally is called ",(0,a.kt)("em",{parentName:"p"},"currying"),". Take for example the following example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import {produce} from "immer"\n\nfunction toggleTodo(state, id) {\n    return produce(state, draft => {\n        const todo = draft.find(todo => todo.id === id)\n        todo.done = !todo.done\n    })\n}\n\nconst baseState = [\n    {\n        id: "JavaScript",\n        title: "Learn TypeScript",\n        done: true\n    },\n    {\n        id: "Immer",\n        title: "Try Immer",\n        done: false\n    }\n]\n\nconst nextState = toggleTodo(baseState, "Immer")\n')),(0,a.kt)("p",null,"The above pattern of ",(0,a.kt)("inlineCode",{parentName:"p"},"toggleTodo")," is quite typical; pass an existing state to ",(0,a.kt)("inlineCode",{parentName:"p"},"produce"),", modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"draft"),", and then return the result. Since ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," isn't used for anything else than passing it on to ",(0,a.kt)("inlineCode",{parentName:"p"},"produce"),", the above example can be simplified by using the ",(0,a.kt)("em",{parentName:"p"},"curried")," form of ",(0,a.kt)("inlineCode",{parentName:"p"},"produce"),", where you pass ",(0,a.kt)("inlineCode",{parentName:"p"},"produce")," only the recipe function, and ",(0,a.kt)("inlineCode",{parentName:"p"},"produce")," will return a new function that will apply recipe to the base state. This allows us to shorten the above ",(0,a.kt)("inlineCode",{parentName:"p"},"toggleTodo")," definition."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import {produce} from "immer"\n\n// curried producer:\nconst toggleTodo = produce((draft, id) => {\n    const todo = draft.find(todo => todo.id === id)\n    todo.done = !todo.done\n})\n\nconst baseState = [\n    /* as is */\n]\n\nconst nextState = toggleTodo(baseState, "Immer")\n')),(0,a.kt)("p",null,"Note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," param has now become part of the recipe function! This pattern of having curried producers combines really neatly with for example the ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," hook from React, as we will see on the next page."))}m.isMDXComponent=!0}}]);