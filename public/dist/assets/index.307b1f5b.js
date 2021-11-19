var x=Object.defineProperty;var q=(n,s,t)=>s in n?x(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t;var i=(n,s,t)=>(q(n,typeof s!="symbol"?s+"":s,t),t);import{a as L,j as f,r as g,L as l,R as N,S as F,b as p,c as k,B as S}from"./vendor.91297963.js";const U=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}};U();const h=(()=>L.create({baseURL:"https://awesome-quotes-react-app.heroku.com",withCredentials:!0}))();const e=f.exports.jsx,a=f.exports.jsxs,d=f.exports.Fragment;class b extends g.exports.Component{constructor(){super(...arguments);i(this,"state",{currentUser:!0,isOpen:!1});i(this,"openMenu",s=>{this.setState({isOpen:!this.state.isOpen})})}render(){const s=this.state.isOpen?"menu menu-reveal":"menu";return a("nav",{className:"menu_container",children:[a("div",{className:"menu_container__nav",children:[a("div",{className:"burger",id:"menu_burger",onClick:this.openMenu,children:[e("div",{className:"burger__line burger__line--1"}),e("div",{className:"burger__line burger__line--2"}),e("div",{className:"burger__line burger__line--3"})]}),e(l,{className:"nav-logo",to:"/home",children:e("img",{src:"/images/logo/awesome-quote-logo-inline.png",alt:"Awesome Quotes logo"})}),e(l,{to:"/auth/login",children:a("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("circle",{cx:"12.5",cy:"12",r:"12",fill:"#444444"}),e("circle",{cx:"12.5",cy:"12",r:"9.88235",stroke:"#FFFCEC",strokeWidth:"0.705882"}),e("path",{d:"M18.147 17.647V16.2353C18.147 15.4864 17.8495 14.7682 17.32 14.2387C16.7905 13.7092 16.0723 13.4117 15.3235 13.4117H9.67645C8.9276 13.4117 8.20943 13.7092 7.67991 14.2387C7.1504 14.7682 6.85292 15.4864 6.85292 16.2353V17.647",stroke:"#FFFCEC",strokeWidth:"0.705882",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{d:"M12.5 10.5882C14.0593 10.5882 15.3235 9.32408 15.3235 7.76469C15.3235 6.2053 14.0593 4.94116 12.5 4.94116C10.9406 4.94116 9.67643 6.2053 9.67643 7.76469C9.67643 9.32408 10.9406 10.5882 12.5 10.5882Z",stroke:"#FFFCEC",strokeWidth:"0.705882",strokeLinecap:"round",strokeLinejoin:"round"})]})})]}),e("div",{className:"line-separation"}),a("div",{className:s,id:"menu_page",children:[a("div",{className:"menu__item menu__item--quote-related",children:[this.state.currentUser===!0&&a("div",{className:"menu__item menu__item--account",children:[a("h2",{className:"title",children:["Hello ",e("span",{className:"title",children:"[UserPseudo]"})]}),e("span",{className:"publication-date",children:"a.k.a"}),e("h3",{className:"body-bold",children:"[UserName]"}),e(l,{to:"#",className:"published-by-link",children:"My account"})]}),a(l,{to:"/quotes/create-quote",className:"body-bold",children:[e("img",{src:"./../../../Images/icons/menu-publish-icon.svg",alt:""}),"Publish an Awesome Quote"]}),a(l,{to:"/home/best-quotes",className:"body-bold",children:[e("img",{src:"./../../../Images/icons/menu-best_quotes-icon.svg",alt:""}),"Best quotes"]}),a(l,{to:"/filter",className:"body-bold",children:[e("img",{src:"./../../../Images/icons/menu-filter-icon.svg",alt:""}),"Filter"]})]}),a("div",{className:"menu__item menu__item--legal",children:[e(l,{to:"/about",className:"body",children:"About"}),e(l,{to:"/terms-and-conditions",className:"body",children:"Terms and conditions"}),e(l,{to:"/privacy-policy",className:"body",children:"Privacy policy"})]}),e("div",{className:"menu__item menu__item--log-in",children:e(l,{to:"/auth/login",className:"suggestion-modal",children:"Login"})})]})]})}}function j(n){return e(d,{children:a("div",{className:"quote_header",children:[a("div",{className:"quote_header__infos",children:[a("div",{className:"quote_header__infos--text",children:[e("span",{className:"published-by",children:"Published by: "}),e(l,{to:"/users/"+n.publisher.pseudo,className:"published-by-link",children:n.publisher.pseudo}),a("span",{className:"publication-date",children:["on"," ",e("span",{id:"quote-date",className:"publication-date",children:n.date})]})]}),a("div",{className:"quote_header__infos--kebab",children:[e("div",{className:"kebab-dot"}),e("div",{className:"kebab-dot"}),e("div",{className:"kebab-dot"})]})]}),e("div",{className:"quote_header__hashtags",children:n.hashtags.length!=0&&n.hashtags[0]!=""&&n.hashtags.map((s,t)=>a(l,{to:"#",className:"hashtags",children:["#",s]},t))}),e("div",{className:"line-separation"})]},n.key)})}function M(n){return e(d,{children:e("div",{className:"quote-body",children:n.quote.map((s,t)=>a("div",{className:"quote_atom",children:[e("h2",{className:"title",children:s.user}),e("p",{className:"body",children:s.text})]},t))})})}function E(n){//! const {currentUser} = useAuth()
return a("div",{className:"quote_social",children:[a("div",{className:"quote_social__item quote_social__item--like",children:[a("div",{className:"quote_social-icon quote_social-icon-animate",children:[e("svg",{width:"22",height:"20",viewBox:"0 0 22 20",className:"svg-fill",children:e("path",{d:"M19.5631 2.59133C19.0876 2.08683 18.523 1.68663 17.9016 1.41358C17.2802 1.14054 16.6142 1 15.9415 1C15.2689 1 14.6029 1.14054 13.9814 1.41358C13.36 1.68663 12.7955 2.08683 12.3199 2.59133L11.3331 3.63785L10.3462 2.59133C9.38572 1.57276 8.083 1.00053 6.72464 1.00053C5.36628 1.00053 4.06355 1.57276 3.10305 2.59133C2.14254 3.6099 1.60294 4.99139 1.60294 6.43187C1.60294 7.87235 2.14254 9.25383 3.10305 10.2724L4.08991 11.3189L11.3331 19L18.5763 11.3189L19.5631 10.2724C20.0389 9.76814 20.4162 9.16942 20.6737 8.51045C20.9312 7.85148 21.0637 7.14517 21.0637 6.43187C21.0637 5.71857 20.9312 5.01225 20.6737 4.35328C20.4162 3.69431 20.0389 3.09559 19.5631 2.59133V2.59133Z"})}),e("div",{className:"quote_social-svg-icon svg-animate"}),e("div",{className:"quote_social-svg-icon"}),e("div",{className:"quote_social-svg-icon"})]}),e("span",{className:"social-links",children:"Likes"})]}),a("div",{className:"quote_social__item quote_social__item--share",children:[a("div",{className:"quote_social-icon",children:[a("svg",{width:"16",height:"20",viewBox:"0 0 16 20",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M0.800018 10V17.2C0.800018 17.6774 0.989661 18.1352 1.32723 18.4728C1.66479 18.8104 2.12263 19 2.60002 19H13.4C13.8774 19 14.3353 18.8104 14.6728 18.4728C15.0104 18.1352 15.2 17.6774 15.2 17.2V10"}),e("path",{d:"M11.6 4.6L8 1L4.39999 4.6"}),e("path",{d:"M7.99997 1V12.7"})]}),e("div",{className:"quote_social-svg-icon"})]}),e("span",{className:"social-links",children:"Share"})]}),a("div",{className:"quote_social__item quote_social__item--favorite",children:[a("div",{className:"quote_social-icon quote_social-icon-animate",children:[a("svg",{width:"22",height:"20",viewBox:"0 0 22 20",xmlns:"http://www.w3.org/2000/svg",children:['className="svg-fill"',e("path",{d:"M11 1L14.09 6.92429L21 7.88013L16 12.489L17.18 19L11 15.9243L4.82 19L6 12.489L1 7.88013L7.91 6.92429L11 1Z"})]}),e("div",{className:"quote_social-svg-icon svg-animate"}),e("div",{className:"quote_social-svg-icon"}),e("div",{className:"quote_social-svg-icon"})]}),e("span",{className:"social-links",children:"Favorites"})]})]})}function w(n){return a("div",{className:"quote",children:[e(j,{date:n.data.dateCreatedAt,publisher:n.data.publisher,hashtags:n.data.hashtags}),e(M,{quote:n.data.quotes}),e(E,{})]})}class Q extends N.Component{constructor(){super(...arguments);i(this,"state",{quotes:null})}async componentDidMount(){try{const s=await h.get("/api/home");this.setState({quotes:s.data})}catch(s){console.log(s)}}render(){return this.state.quotes?a(d,{children:[e(b,{}),e("div",{children:this.state.quotes.map((s,t)=>e(w,{data:s},t))})]}):e("h1",{className:"title",children:"Loading"})}}function P(){return e(l,{to:"/home",children:a("div",{id:"index-loader",children:[e("img",{src:"./../../../Images/logo/awesome-quote-logo.png",alt:"Awesome Quotes logo"}),e("h1",{className:"body",children:"Fetching the best punchlines and conversations on the Web..."})]})})}function _(n){return e("nav",{className:"menu_container_second",children:e(l,{className:"nav-logo",to:"/home",children:e("img",{src:"./../../../Images/logo/awesome-quote-logo-inline.png",alt:"Awesome Quotes Logo inline"})})})}class B extends N.Component{constructor(s){super(s);i(this,"handleChange",s=>{this.setState({[s.target.name]:s.target.value})});i(this,"handleSubmit",async s=>{s.preventDefault();const{mail:t,password:c,username:r,name:o,image:m}=this.state,v=this.state.image.current.files[0],u=new FormData;u.append("email",t),u.append("password",c),u.append("username",r),u.append("name",o),u.append("image",v);//! to change
try{await h.post("/api/cats",u),this.props.handler()}catch(y){console.error(y)}});this.state={mail:null,password:null,username:null,name:null,image:N.createRef()}}render(){return a(d,{children:[e(_,{}),e("h1",{className:"title",children:"Create an account"}),a("form",{className:"form",children:[a("div",{className:"user-pic",children:[e("input",{ref:this.state.image,className:"pic-input",id:"image",name:"image",type:"file"}),e("img",{src:"./../../../../public/Images/icons/menu-account-icon.svg",alt:""})]}),a("div",{className:"input-container",children:[e("label",{className:"body-bold",htmlFor:"email",children:"Email*"}),e("span",{className:"error-message",children:"Error message if needed"}),e("input",{className:"input",id:"email",name:"name",type:"email",placeholder:"Your email",onChange:this.handleChange,required:!0})]}),a("div",{className:"input-container",children:[e("label",{className:"body-bold",htmlFor:"email",children:"Password*"}),e("span",{className:"error-message",children:"Error message if needed"}),e("input",{className:"input",name:"password",id:"password",type:"password",placeholder:"Choose a password",required:!0})]}),a("div",{className:"input-container",children:[e("label",{className:"body-bold",htmlFor:"username",children:"Your username*"}),e("span",{className:"error-message",children:"Error message if needed"}),e("input",{className:"input",name:"username",id:"username",type:"text",placeholder:"Enter your username",required:!0})]}),a("div",{className:"input-container",children:[e("label",{className:"body-bold",htmlFor:"username",children:"Your name"}),e("span",{className:"error-message",children:"Error message if needed"}),e("input",{className:"input",name:"name",id:"name",type:"text",placeholder:"What is your name?"})]}),e("button",{className:"button--primary",onClick:this.handleSubmit,children:"Create my account"})]})]})}}class A extends g.exports.Component{constructor(){super(...arguments);i(this,"state",{user:null});i(this,"fetchUser",async()=>{try{const s=this.props.match.params.pseudo,t=await h.get("/api/users/"+s);this.setState({user:t.data.user})}catch(s){console.error(s)}});i(this,"handleChange",s=>{this.setState({[s.target.name]:s.target.value})});i(this,"handleSubmit",async s=>{s.preventDefault();try{const t=await h.patch("/api/users/"+this.state.user.pseudo,this.state.user);this.setState(...t)}catch(t){console.error(t)}})}componentDidMount(){this.fetchUser()}componentDidUpdate(){this.props.match.params.pseudo!==this.state.user.pseudo&&this.fetchUser()}render(){return this.state.user?a(d,{children:[e(b,{}),a("div",{id:"update_account-page",children:[e("h1",{className:"title",children:"Update my account"}),a("form",{className:"form",children:[e("a",{href:"",id:"imagePicker",children:e("img",{src:"/images/icons/user-icon.png",alt:"user-icon"})}),e("label",{htmlFor:"textImage"}),e("input",{className:"input",type:"file",id:"textImage",name:"profilePic",onChange:this.handleChange}),a("div",{className:"input-container",children:[e("label",{className:"body-bold",htmlFor:"mail",children:"Email*"}),e("input",{className:"input",type:"email",id:"mail",name:"mail",placeholder:"Update your email *",required:!0,onChange:this.handleChange,value:this.state.user.mail})]}),a("div",{className:"input-container",children:[e("label",{className:"body-bold",htmlFor:"password",children:"New Password"}),e("input",{className:"input",type:"password",id:"password",name:"password",placeholder:"New password",onChange:this.handleChange})]}),a("div",{className:"input-container",children:[e("label",{className:"body-bold",htmlFor:"password-confirm",children:"Confirm password"}),e("input",{className:"input",type:"password",id:"password-confirm",name:"password-confirm",placeholder:"Confirm new password",onChange:this.handleChange})]}),a("div",{className:"input-container",children:[e("label",{className:"body-bold",htmlFor:"name",children:"Name"}),e("input",{placeholder:"Name",className:"input",name:"name",type:"text",value:this.state.user.name,onChange:this.handleChange})]}),e("span",{className:"span-edit grey",children:"* mandatory fields"}),e("button",{className:"button--primary",onSubmit:this.handleSubmit,children:"Update my account"})]})]})]}):e("h1",{className:"title",children:"Getting infos in database"})}}function I(n){return a(d,{children:[e(_,{}),e("h1",{className:"title",children:"Create an account"}),e("div",{className:"account-creation-container",children:a("div",{className:"buttons-choice-container",children:[e(l,{className:"button--primary",to:"create-account",children:e("span",{className:"title",children:"Create with email"})}),e("span",{className:"body grey",children:"Or"}),e("img",{src:"./../../../../public/Images/accounts/appleid_button@2x-2.png",alt:"signin with apple"}),e("img",{src:"./../../../../public/Images/accounts/btn_google_signin_light_normal_web@2x.png",alt:"signin with google"})]})})]})}class D extends N.Component{render(){return a(d,{children:[e(_,{}),e("h1",{className:"title",children:"Log in"}),e("div",{className:"login-container",children:a("form",{className:"form",children:[a("div",{className:"input-container",children:[e("label",{htmlFor:"email",className:"body-bold",children:"Email"}),e("input",{type:"text",className:"input",id:"email",placeholder:"Your email"})]}),a("div",{className:"input-container",children:[e("label",{htmlFor:"password",className:"body-bold",children:"Password"}),e("input",{type:"password",className:"input",id:"password",placeholder:"Enter your password"})]}),e("button",{className:"button--primary",children:"Let's go!"}),e("div",{className:"no-account-yet",children:e(l,{to:"/auth/account-creation",className:"body-bold grey",children:"No account yet?"})})]})})]})}}class $ extends N.Component{constructor(){super(...arguments);i(this,"state",{user:null,followBtnState:!1});i(this,"fetchUser",async()=>{try{const s=await h.get("/api/users/"+this.props.match.params.pseudo);this.setState({user:s.data})}catch(s){console.log(s)}});i(this,"addUserToFollowings",async()=>{try{const s=await h.get("/api/users/"+this.state.user.user.pseudo);s.data.user.followers=[...s.data.user.followers,"currentUserId"],console.log("Found user followers ======>",s);const t=await h.patch("/api/users/"+this.state.user.user.pseudo+"/edit",{followers:"foundUser.data.user.followers"});console.log(t)}catch(s){console.error(s)}});i(this,"toggleFollow",s=>{this.setState({followBtnState:!this.state.followBtnState},async()=>{await this.addUserToFollowings()})})}async componentDidMount(){this.fetchUser()}render(){if(!this.state.user)return e("p",{className:"body",children:"Loading Bro!"});const{name:s,pseudo:t,profilePic:c,followers:r,following:o,likes:m,favorites:v}=this.state.user.user,u=this.state.followBtnState?"button--primary":"button--secondary";return a(d,{children:[e(b,{}),a("div",{className:"user_profil",id:"user-page",children:[this.state.user.user._id==="617bc435c19b4e77202e3b6f"&&e("h1",{className:"title",children:"My account"}),a("div",{className:"user_main_infos",children:[e("img",{src:c,alt:"User icon",className:"user-icon"}),e("span",{className:"body-bold",children:s}),e("span",{className:"suggestion-modal",children:t})]}),a("div",{className:"user_stats-container",children:[a("div",{className:"user_stats user_stats--liked",children:[e("span",{className:"body-bold",children:m.length}),e("span",{className:"suggestion-modal grey",children:"Liked"})]}),a("div",{className:"user_stats user_stats--saved",children:[e("span",{className:"body-bold",children:v.length}),e("span",{className:"suggestion-modal grey",children:"Saved"})]}),a("div",{className:"user_stats user_stats--followers",children:[e("span",{className:"body-bold",children:r.length}),e("span",{className:"suggestion-modal grey",children:"Followers"})]}),a("div",{className:"user_stats user_stats--followers",children:[e("span",{className:"body-bold",children:o.length}),e("span",{className:"suggestion-modal grey",children:"Following"})]})]}),this.state.user.user._id==="617bc435c19b4e77202e3b6f"?e(l,{to:t+"/edit",children:e("span",{className:"published-by-link",children:"Edit my account"})}):this.state.followBtnState===!1?e("div",{className:u,onClick:this.toggleFollow,children:"Follow"}):e("div",{className:u,onClick:this.toggleFollow,children:"Unfollow"}),e("div",{className:"line-separation"}),this.state.user.user._id==="617bc435c19b4e77202e3b6f"?e("h3",{className:"subtitle",children:"My quotes"}):a("h3",{className:"subtitle",children:[s,"'s quotes"]})]}),this.state.user.listQuotes.map((y,C)=>e(w,{data:y},C))]})}}function H({handleChange:n,i:s}){return e(d,{children:a("div",{className:"ajax-form-by-person",children:[a("div",{className:"ajax_input",children:[e("label",{className:"body-bold",htmlFor:"ajax-input-name",children:"Name"}),e("input",{id:"ajax-input-name",type:"text",name:"user",placeholder:"Enter the name of the person",onChange:t=>{n(t,s)},required:!0})]}),a("div",{className:"ajax_input",children:[e("label",{className:"body-bold",htmlFor:"ajax-input-message",children:"Message"}),e("textarea",{name:"text",id:"ajax-input-message",cols:"30",rows:"5",placeholder:"Enter here your message",onChange:t=>{n(t,s)},required:!0}),e("div",{className:"button--add_person remove-person",children:"Remove this person"})]})]})})}class O extends g.exports.Component{constructor(){super(...arguments);i(this,"state",{publisher:"currentUser",user:[],text:[],hashtags:[],counter:0});i(this,"addPerson",s=>{this.setState({counter:this.state.counter+1})});i(this,"handleChange",(s,t)=>{const c=[...this.state[s.target.name]];c[t]=s.target.value,this.setState({copy:c})});i(this,"handleSubmit",async s=>{s.preventDefault();try{const t=await h.post("/api/create-quote",this.state)}catch(t){console.error(t)}})}render(){let s=Array(this.state.counter).fill(0);return console.log(this.state.text),a(d,{children:[e(b,{}),a("div",{id:"quote-create",children:[e("p",{className:"instructions grey",children:"How to create an Awesome Quote?"}),a("form",{className:"form",children:[e("div",{className:"ajax_form form",children:a("div",{className:"ajax_form_message_container",children:[a("div",{className:"ajax-form-by-person",children:[a("div",{className:"ajax_input",children:[e("label",{className:"body-bold",htmlFor:"ajax-input-name",children:"Name"}),e("input",{id:"ajax-input-name",type:"text",name:"user",placeholder:"Enter the name of the person",onChange:this.handleChange,required:!0})]}),a("div",{className:"ajax_input",children:[e("label",{className:"body-bold",htmlFor:"ajax-input-message",children:"Message"}),e("textarea",{name:"text",id:"ajax-input-message",cols:"30",rows:"5",placeholder:"Enter here your message",onChange:this.handleChange,required:!0})]})]}),s.map((t,c)=>e(H,{handleChange:this.handleChange,i:c},c))]})}),a("div",{className:"ajax_input",id:"ajax-input-hashtag-container",children:[e("label",{className:"hashtags",htmlFor:"ajax-input-hashtag",children:"Hashtags:"}),e("input",{id:"ajax-input-hashtag input",type:"text",name:"hashtags",placeholder:"#",onChange:this.handleChange})]}),a("div",{className:"button-container",children:[e("div",{className:"button--add_person",onClick:this.addPerson,children:"+ Add a person to the conversation"}),e("button",{className:"button--primary",onClick:this.handleSubmit,children:"Publish"})]})]})]})]})}}const R=N.createContext(),V=n=>{const[s,t]=g.exports.useState(null),[c,r]=g.exports.useState(!0);g.exports.useEffect(()=>{h.get("/is-loggedin").then(m=>{r(!1),t(m.data.currentUser)}).catch(()=>{t(null),r(!1)})},[]);const o=Boolean(s);return e(R.Provider,{value:{currentUser:s,isLoading:c,isLoggedIn:o,setCurrentUser:t},children:c?null:n.children})};class W extends g.exports.Component{constructor(){super(...arguments);i(this,"state",{quotes:[]})}render(){return e(V,{children:e("div",{className:"main",children:a(F,{children:[e(p,{exact:!0,path:"/",component:P}),e(p,{path:"/home",component:Q}),e(p,{path:"/auth/create-account",component:B}),e(p,{path:"/auth/account-creation",component:I}),e(p,{path:"/auth/login",component:D}),e(p,{exact:!0,path:"/users/:pseudo/edit",component:A}),e(p,{path:"/users/:pseudo",component:$}),e(p,{path:"/quotes/create-quote",component:O})]})})})}}k.render(e(N.StrictMode,{children:e(S,{children:e(W,{})})}),document.getElementById("root"));