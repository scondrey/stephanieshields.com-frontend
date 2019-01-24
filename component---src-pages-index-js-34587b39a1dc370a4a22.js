(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{141:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(144),o=n(152),s=n(174),l=n(175),d=n.n(l),c=function(){return a.a.createElement(r.StaticQuery,{query:"2011440971",render:function(e){return a.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:s})},u=n(150);t.default=function(){return a.a.createElement(o.a,null,a.a.createElement(u.a,{title:"Home",keywords:["gatsby","application","react"]}),a.a.createElement("h1",null,"Hi people"),a.a.createElement("p",null,"Welcome to your new Gatsby site."),a.a.createElement("p",null,"Now go build something great."),a.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},a.a.createElement(c,null)),a.a.createElement(r.Link,{to:"/about/"},"Go to about"))}},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return h}),n.d(t,"StaticQuery",function(){return f});var i=n(0),a=n.n(i),r=n(4),o=n.n(r),s=n(143),l=n.n(s);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var d=n(146),c=n.n(d);n.d(t,"PageRenderer",function(){return c.a});var u=n(33);n.d(t,"parsePath",function(){return u.a});var h=a.a.createContext({}),f=function(e){return a.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,n){"use strict";var i=n(4),a=n.n(i),r=n(142),o=r.d.div.withConfig({displayName:"Row",componentId:"sc-16j9uh8-0"})(["display:flex;flex-wrap:wrap;",""],function(e){return e.hasGutters&&Object(r.c)(["margin-right:calc(-"," / 2);margin-left:calc(-"," / 2);"],function(e){return e.theme.gridGutterWidth},function(e){return e.theme.gridGutterWidth})});o.propTypes={children:a.a.node.isRequired,hasGutters:a.a.bool},o.defaultProps={hasGutters:!0},t.a=o},146:function(e,t,n){var i;e.exports=(i=n(149))&&i.default||i},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Stephanie Shields"}}}}},149:function(e,t,n){"use strict";n.r(t);n(32);var i=n(0),a=n.n(i),r=n(4),o=n.n(r),s=n(51),l=n(2),d=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},150:function(e,t,n){"use strict";var i=n(151),a=n(0),r=n.n(a),o=n(4),s=n.n(o),l=n(155),d=n.n(l),c=n(144);function u(e){var t=e.description,n=e.lang,a=e.meta,o=e.keywords,s=e.title;return r.a.createElement(c.StaticQuery,{query:h,render:function(e){var i=t||e.site.siteMetadata.description;return r.a.createElement(d.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:s},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:i}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(a)},r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Montserrat:300,400,600,900|Yellowtail",rel:"stylesheet"}))},data:i})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u;var h="1025518380"},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Stephanie Shields",description:"A portfolio website for Stephanie Shields",author:"Stephanie Shields"}}}}},152:function(e,t,n){"use strict";var i=n(148),a=n(0),r=n.n(a),o=n(4),s=n.n(o),l=n(144),d=n(142),c=(n(153),n(154)),u=n.n(c);function h(){var e=u()(["\n  /**\n   * Reboot\n   * Adapted from Bootstrap Reboot v4.2.1 (https://github.com/twbs/bootstrap/blob/v4-dev/scss/_reboot.scss)\n   * Normalization of HTML elements, manually forked from Normalize.css to remove\n   * styles targeting irrelevant browsers while applying new styles.\n   * \n   * Bootstrap is licensed MIT. https://github.com/twbs/bootstrap/blob/master/LICENSE\n   * Normalize is licensed MIT. https://github.com/necolas/normalize.css/blob/master/LICENSE.md\n   */\n\n  /**\n   * Document\n   * \n   * 1. Change from 'box-sizing: content-box' so that 'width' is not affected by 'padding' or 'border'.\n   * 2. Change the default font family in all browsers.\n   * 3. Correct the line height in all browsers.\n   * 4. Prevent adjustments of font size after orientation changes in IE on Windows Phone and in iOS.\n   * 5. Change the default tap highlight to be completely transparent in iOS.\n   */\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box; /* 1 */\n  }\n\n  html {\n    font-family: sans-serif; /* 2 */\n    line-height: 1.15; /* 3 */\n    -webkit-text-size-adjust: 100%; /* 4 */\n    -webkit-tap-highlight-color: rgba(",", 0); /* 5 */\n  }\n\n  /**\n   * Shim for \"new\" HTML5 structural elements to display correctly (IE10, older browsers)\n   */\n  article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n    display: block;\n  }\n\n  /**\n   * Body\n   * \n   * 1. Remove the margin in all browsers.\n   * 2. As a best practice, apply a default 'background-color'.\n   * 3. Set an explicit initial text-align value so that we can later use\n   *    the 'inherit' value on things like '<th>' elements.\n   */\n\n  body {\n    margin: 0; /* 1 */\n    font-family: ",";\n    font-size: ",";\n    font-weight: ",";\n    line-height: ",";\n    color: ",";\n    text-align: left; /* 3 */\n    background-color: ","; /* 2 */\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  /**\n   * Suppress the focus outline on elements that cannot be accessed via keyboard.\n   * This prevents an unwanted focus outline from appearing around elements that\n   * might still respond to pointer events.\n   * \n   * Credit: https://github.com/suitcss/base\n   */\n  [tabindex=\"-1\"]:focus {\n    outline: 0 !important;\n  }\n\n  /**\n   * Content grouping\n   * \n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   * 3. Set an explicit initial text-align value so that we can later use\n   *    the 'inherit' value on things like '<th>' elements.\n   */\n\n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n\n  /**\n   * Typography\n   */\n\n  /**\n   * Remove top margins from headings\n   * \n   * By default, '<h1>'-'<h6>' all receive top and bottom margins. We nuke the top\n   * margin for easier control within type scales as it avoids margin collapsing.\n   */\n  h1, h2, h3, h4, h5, h6 {\n    margin-top: 0;\n    margin-bottom: calc("," / 2);\n  }\n\n  /**\n   * Reset margins on paragraphs\n   * \n   * Similarly, the top margin on '<p>'s get reset. However, we also reset the\n   * bottom margin to use 'rem' units instead of 'em'.\n   */\n  p {\n    margin-top: 0;\n    margin-bottom: ",";\n  }\n\n  /**\n   * Abbreviations\n   * \n   * 1. Duplicate behavior to the data-* attribute for our tooltip plugin\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   * 3. Add explicit cursor to indicate changed behavior.\n   * 4. Remove the bottom border in Firefox 39-.\n   * 5. Prevent the text-decoration to be skipped.\n   */\n\n  abbr[title],\n  abbr[data-original-title] { /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n    cursor: help; /* 3 */\n    border-bottom: 0; /* 4 */\n    text-decoration-skip-ink: none; /* 5 */\n  }\n\n  address {\n    margin-bottom: 1rem;\n    font-style: normal;\n    line-height: inherit;\n  }\n\n  ol,\n  ul,\n  dl {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  ol ol,\n  ul ul,\n  ol ul,\n  ul ol {\n    margin-bottom: 0;\n  }\n\n  dt {\n    font-weight: ",";\n  }\n\n  dd {\n    margin-bottom: .5rem;\n    margin-left: 0; /* Undo browser default */\n  }\n\n  blockquote {\n    margin: 0 0 1rem;\n  }\n\n  b,\n  strong {\n    font-weight: ","; /* Add the correct font weight in Chrome, Edge, and Safari */\n  }\n\n  small {\n    font-size: 80%; /* Add the correct font size in all browsers */\n  }\n\n  /**\n   * Prevent 'sub' and 'sup' elements from affecting the line height in\n   * all browsers.\n   */\n\n  sub,\n  sup {\n    position: relative;\n    font-size: 75%;\n    line-height: 0;\n    vertical-align: baseline;\n  }\n\n  sub { bottom: -.25em; }\n  sup { top: -.5em; }\n\n  /**\n   * Links\n   */\n\n  a {\n    color: ",";\n    text-decoration: ",";\n    background-color: transparent; /* Remove the gray background on active links in IE 10. */\n\n    &:hover {\n      color: ",";\n      text-decoration: ",";\n    }\n  }\n\n  /**\n   * And undo these styles for placeholder links/named anchors (without href)\n   * which have not been made explicitly keyboard-focusable (without tabindex).\n   * It would be more straightforward to just use a[href] in previous block, but that\n   * causes specificity issues in many other styles that are too complex to fix.\n   * See https://github.com/twbs/bootstrap/issues/19402\n   */\n\n  a:not([href]):not([tabindex]) {\n    color: inherit;\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      color: inherit;\n      text-decoration: none;\n    }\n\n    &:focus {\n      outline: 0;\n    }\n  }\n\n  /**\n   * Code\n   */\n\n  pre,\n  code,\n  kbd,\n  samp {\n    font-family: ",";\n    font-size: 1em; /* Correct the odd 'em' font sizing in all browsers. */\n  }\n\n  pre {\n    /* Remove browser default top margin */\n    margin-top: 0;\n    /* Reset browser default of '1em' to use 'rem's */\n    margin-bottom: 1rem;\n    /* Don't allow content to break outside */\n    overflow: auto;\n  }\n\n  /**\n   * Figures\n   */\n\n  figure {\n    /* Apply a consistent margin strategy (matches our type styles). */\n    margin: 0 0 1rem;\n  }\n\n  /**\n   * Images and content\n   */\n\n  img {\n    vertical-align: middle;\n    border-style: none; /* Remove the border on images inside links in IE 10-. */\n  }\n\n  svg {\n    /* Workaround for the SVG overflow bug in IE10/11 is still required. */\n    /* See https://github.com/twbs/bootstrap/issues/26878 */\n    overflow: hidden;\n    vertical-align: middle;\n  }\n\n  /**\n   * Tables\n   */\n\n  table {\n    border-collapse: collapse; /* Prevent double borders */\n  }\n\n  caption {\n    padding-top: ",";\n    padding-bottom: ",";\n    color: ",";\n    text-align: left;\n    caption-side: bottom;\n  }\n\n  th {\n    /* Matches default '<td>' alignment by inheriting from the '<body>', or the */\n    /* closest parent with a set 'text-align'. */\n    text-align: inherit;\n  }\n\n  /**\n   * Forms\n   */\n\n  label {\n    /* Allow labels to use 'margin' for spacing. */\n    display: inline-block;\n    margin-bottom: ",';\n  }\n\n  /**\n   * Remove the default \'border-radius\' that macOS Chrome adds.\n   * \n   * Details at https://github.com/twbs/bootstrap/issues/24093\n   */\n  button {\n    border-radius: 0;\n  }\n\n  /**\n   * Work around a Firefox/IE bug where the transparent \'button\' background\n   * results in a loss of the default \'button\' focus styles.\n   * \n   * Credit: https://github.com/suitcss/base/\n   */\n  button:focus {\n    outline: 1px dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n\n  input,\n  button,\n  select,\n  optgroup,\n  textarea {\n    margin: 0; /* Remove the margin in Firefox and Safari */\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n  }\n\n  button,\n  input {\n    overflow: visible; /* Show the overflow in Edge */\n  }\n\n  button,\n  select {\n    text-transform: none; /* Remove the inheritance of text transform in Firefox */\n  }\n\n  /**\n   * 1. Prevent a WebKit bug where (2) destroys native \'audio\' and \'video\'\n   *    controls in Android 4.\n   * \n   * 2. Correct the inability to style clickable types in iOS and Safari.\n   */\n  button,\n  [type="button"], /* 1 */\n  [type="reset"],\n  [type="submit"] {\n    -webkit-appearance: button; /* 2 */\n  }\n\n  /* Remove inner border and padding from Firefox, but don\'t restore the outline like Normalize. */\n  button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner {\n    padding: 0;\n    border-style: none;\n  }\n\n  input[type="radio"],\n  input[type="checkbox"] {\n    box-sizing: border-box; /* 1. Add the correct box sizing in IE 10- */\n    padding: 0; /* 2. Remove the padding in IE 10- */\n  }\n\n  input[type="date"],\n  input[type="time"],\n  input[type="datetime-local"],\n  input[type="month"] {\n    /* Remove the default appearance of temporal inputs to avoid a Mobile Safari */\n    /* bug where setting a custom line-height prevents text from being vertically */\n    /* centered within the input. */\n    /* See https://bugs.webkit.org/show_bug.cgi?id=139848 */\n    /* and https://github.com/twbs/bootstrap/issues/11266 */\n    -webkit-appearance: listbox;\n  }\n\n  textarea {\n    overflow: auto; /* Remove the default vertical scrollbar in IE. */\n    /* Textareas should really only resize vertically so they don\'t break their (horizontal) containers. */\n    resize: vertical;\n  }\n\n  fieldset {\n    /* Browsers set a default \'min-width: min-content;\' on fieldsets, */\n    /* unlike e.g. \'<div>\'s, which have \'min-width: 0;\' by default. */\n    /* So we reset that to ensure fieldsets behave more like a standard block element. */\n    /* See https://github.com/twbs/bootstrap/issues/12359 */\n    /* and https://html.spec.whatwg.org/multipage/#the-fieldset-and-legend-elements */\n    min-width: 0;\n    /* Reset the default outline behavior of fieldsets so they don\'t affect page layout. */\n    padding: 0;\n    margin: 0;\n    border: 0;\n  }\n\n  /* 1. Correct the text wrapping in Edge and IE. */\n  /* 2. Correct the color inheritance from \'fieldset\' elements in IE. */\n  legend {\n    display: block;\n    width: 100%;\n    max-width: 100%; /* 1 */\n    padding: 0;\n    margin-bottom: .5rem;\n    font-size: 1.5rem;\n    line-height: inherit;\n    color: inherit; /* 2 */\n    white-space: normal; /* 1 */\n  }\n\n  progress {\n    vertical-align: baseline; /* Add the correct vertical alignment in Chrome, Firefox, and Opera. */\n  }\n\n  /* Correct the cursor style of increment and decrement buttons in Chrome. */\n  [type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  [type="search"] {\n    /* This overrides the extra rounded corners on search inputs in iOS so that our */\n    /* \'.form-control\' class can properly style them. Note that this cannot simply */\n    /* be added to \'.form-control\' as it\'s not specific enough. For details, see */\n    /* https://github.com/twbs/bootstrap/issues/11586. */\n    outline-offset: -2px; /* 2. Correct the outline style in Safari. */\n    -webkit-appearance: none;\n  }\n\n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n  [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to \'inherit\' in Safari.\n  */\n\n  ::-webkit-file-upload-button {\n    font: inherit; /* 2 */\n    -webkit-appearance: button; /* 1 */\n  }\n\n  /**\n   * Correct element displays\n   */\n\n  output {\n    display: inline-block;\n  }\n  \n  summary {\n    display: list-item; /* Add the correct display in all browsers */\n    cursor: pointer;\n  }\n  \n  template {\n    display: none; /* Add the correct display in IE */\n  }\n\n  /* Always hide an element with the \'hidden\' HTML attribute (from PureCSS). */\n  /* Needed for proper display in IE 10-. */\n  [hidden] {\n    display: none !important;\n  }\n']);return h=function(){return e},e}var f=Object(d.b)(h(),function(e){return e.theme.color.black},function(e){return e.theme.fontFamily.sansSerif},function(e){return e.theme.fontSizeBase},function(e){return e.theme.fontWeight.normal},function(e){return e.theme.lineHeightBase},function(e){return e.theme.color.N900},function(e){return e.theme.color.white},function(e){return e.theme.spacer},function(e){return e.theme.paragraphMarginBottom},function(e){return e.theme.fontWeight.bold},function(e){return e.theme.fontWeight.bold},function(e){return e.theme.linkColor},function(e){return e.theme.linkDecoration},function(e){return e.theme.linkHoverColor},function(e){return e.theme.linkHoverDecoration},function(e){return e.theme.fontFamily.monospace},function(e){return e.theme.tableCellPadding},function(e){return e.theme.tableCellPadding},function(e){return e.theme.tableCaptionColor},function(e){return e.theme.labelMarginBottom}),p=(n(32),n(147)),m=Object.assign({},{primary:"#007bff"},{N100:"#f8f9fa",N200:"#e9ecef",N300:"#dee2e6",N400:"#ced4da",N500:"#adb5bd",N600:"#6c757d",N700:"#495057",N800:"#343a40",N900:"#212529"},{white:"#fff",black:"#000"}),g={color:m,gridBreakpoints:{xs:"0",sm:"576px",md:"768px",lg:"992px",xl:"1200px"},gridContainers:{sm:"540px",md:"720px",lg:"960px",xl:"1140px"},spacer:"1rem",linkColor:m.primary,linkDecoration:"none",linkHoverColor:Object(p.a)(.15,m.primary),linkHoverDecoration:"underline",paragraphMarginBottom:"1rem",gridGutterWidth:"24px",fontFamily:{sansSerif:'"Montserrat", "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',monospace:'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},fontSizeBase:"1rem",fontWeight:{lighter:"lighter",light:"300",normal:"400",bold:"600",bolder:"bolder"},lineHeightBase:1.5,tableCellPadding:".75rem",tableCaptionColor:m.N600,labelMarginBottom:".5rem"},b=d.d.div.withConfig({displayName:"Container",componentId:"sc-1mvf068-0"})(["width:100%;padding-right:calc("," / 2);padding-left:calc("," / 2);margin-right:auto;margin-left:auto;",""],function(e){return e.theme.gridGutterWidth},function(e){return e.theme.gridGutterWidth},function(e){return e.hasMaxWidth&&Object(d.c)(["@media (min-width:","){max-width:",";}@media (min-width:","){max-width:",";}@media (min-width:","){max-width:",";}@media (min-width:","){max-width:",";}"],function(e){return e.theme.gridBreakpoints.sm},function(e){return e.theme.gridContainers.sm},function(e){return e.theme.gridBreakpoints.md},function(e){return e.theme.gridContainers.md},function(e){return e.theme.gridBreakpoints.lg},function(e){return e.theme.gridContainers.lg},function(e){return e.theme.gridBreakpoints.xl},function(e){return e.theme.gridContainers.xl})});b.propTypes={children:s.a.node.isRequired,hasMaxWidth:s.a.bool},b.defaultProps={hasMaxWidth:!1};var y=b,w=n(145),v=function(e){if(e)return"flex-basis: "+e/12*100+"%;"},x=d.d.div.withConfig({displayName:"Column",componentId:"hiwve3-0"})(["position:relative;width:100%;flex-grow:0;flex-shrink:0;",";@media (min-width:","){",";}@media (min-width:","){",";}@media (min-width:","){",";}@media (min-width:","){",";}",""],function(e){var t=e.xs;return t?v(t):"flex-basis: 100%"},function(e){return e.theme.gridBreakpoints.sm},function(e){var t=e.sm;return t&&v(t)},function(e){return e.theme.gridBreakpoints.md},function(e){var t=e.md;return t&&v(t)},function(e){return e.theme.gridBreakpoints.lg},function(e){var t=e.lg;return t&&v(t)},function(e){return e.theme.gridBreakpoints.xl},function(e){var t=e.xl;return t&&v(t)},function(e){return e.hasGutters&&Object(d.c)(["padding-right:calc("," / 2);padding-left:calc("," / 2);"],function(e){return e.theme.gridGutterWidth},function(e){return e.theme.gridGutterWidth})});x.propTypes={children:s.a.node.isRequired,hasGutters:s.a.bool},x.defaultProps={hasGutters:!0};var S=x,E=d.d.div.withConfig({displayName:"Navigation",componentId:"sc-1vfjeey-0"})([""]);E.propTypes={children:s.a.node};var k=E,C=d.d.header.withConfig({displayName:"Header__StyledHeader",componentId:"sc-1e9eee9-0"})([""]),R=d.d.div.withConfig({displayName:"Header__StyledBranding",componentId:"sc-1e9eee9-1"})([""]),I=function(e){var t=e.siteTitle,n=e.siteSubtitle;return r.a.createElement(C,null,r.a.createElement(y,{hasMaxWidth:!0},r.a.createElement(w.a,null,r.a.createElement(S,{xs:6},r.a.createElement(R,null,r.a.createElement(l.Link,{to:"/"},t,n))),r.a.createElement(S,{md:4},r.a.createElement(k,null)))))};I.propTypes={siteTitle:s.a.string,siteSubtitle:s.a.string},I.defaultProps={siteTitle:"",siteSubtitle:""};var z=I,A=d.d.section.withConfig({displayName:"Announcement__StyledAnnouncement",componentId:"sc-1hmpose-0"})(["background-color:#092742;font-size:",";padding:"," 0;@media print,screen and (min-width:","){padding:"," ",";}p{margin-bottom:0;color:#f6f6f6;}a{color:#f6f6f6;border-bottom:"," solid #0E89C7;&:hover,&:focus{color:#0E89C7;text-decoration:none;}}"],Object(p.b)("14px"),Object(p.b)("12px"),function(e){return e.theme.gridBreakpoints.sm},Object(p.b)("12px"),Object(p.b)("68px"),Object(p.b)("1px")),N=d.d.span.withConfig({displayName:"Announcement__StyledTextUppercase",componentId:"sc-1hmpose-1"})(["text-transform:uppercase;"]),T=function(){return r.a.createElement(A,null,r.a.createElement(y,null,r.a.createElement(w.a,null,r.a.createElement(S,null,r.a.createElement("p",null,r.a.createElement("strong",null,"This site is in ",r.a.createElement(N,null,"Beta"),".")," For more details on project work, feel free to ",r.a.createElement(l.Link,{to:"/contact/"},"contact me")," or check out ",r.a.createElement("a",{href:"http://stephaniecondrey.com/",target:"_blank",rel:"noopener noreferrer"},"past work"),".")))))},L=function(e){var t=e.children;return r.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{theme:g},r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(T,null),r.a.createElement(z,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t,r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))))},data:i})};L.propTypes={children:s.a.node.isRequired};t.a=L},174:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/stephanieshields.com-frontend/static/6d91c86c0fde632ba4cd01062fd9ccfa/045aa/gatsby-astronaut.png",srcSet:"/stephanieshields.com-frontend/static/6d91c86c0fde632ba4cd01062fd9ccfa/0552a/gatsby-astronaut.png 75w,\n/stephanieshields.com-frontend/static/6d91c86c0fde632ba4cd01062fd9ccfa/fc3be/gatsby-astronaut.png 150w,\n/stephanieshields.com-frontend/static/6d91c86c0fde632ba4cd01062fd9ccfa/045aa/gatsby-astronaut.png 300w,\n/stephanieshields.com-frontend/static/6d91c86c0fde632ba4cd01062fd9ccfa/24f49/gatsby-astronaut.png 450w,\n/stephanieshields.com-frontend/static/6d91c86c0fde632ba4cd01062fd9ccfa/5497d/gatsby-astronaut.png 600w,\n/stephanieshields.com-frontend/static/6d91c86c0fde632ba4cd01062fd9ccfa/483e1/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},175:function(e,t,n){"use strict";var i=n(8);t.__esModule=!0,t.default=void 0;var a,r=i(n(7)),o=i(n(52)),s=i(n(156)),l=i(n(157)),d=i(n(0)),c=i(n(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},h={},f=function(e){var t=u(e),n=t.fluid?t.fluid.src:t.fixed.src;return h[n]||!1},p=[];var m=function(e,t){(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),a).observe(e),p.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+n+"/>":"",a=e.srcSet?'<source srcSet="'+e.srcSet+'" '+n+"/>":"",r=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+a+"<img "+s+l+t+o+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=d.default.forwardRef(function(e,t){var n=e.style,i=e.onLoad,a=e.onError,r=(0,s.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},r,{onLoad:i,onError:a,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});b.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var n;n=e.call(this,t)||this;var i=!0,a=!1,r=t.fadeIn,s=f(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,a=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,a=!1);var l=!(n.props.critical&&!n.props.fadeIn);return n.state={isVisible:i,imgLoaded:!1,IOSupported:a,fadeIn:r,hasNoScript:l,seenBefore:s},n.imageRef=d.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,o.default)((0,o.default)(n))),n.handleRef=n.handleRef.bind((0,o.default)((0,o.default)(n))),n}(0,r.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:f(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=u(e),n=t.fluid?t.fluid.src:t.fixed.src,h[n]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=u(this.props),t=e.title,n=e.alt,i=e.className,a=e.style,r=void 0===a?{}:a,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,h=void 0===c?{}:c,f=e.placeholderClassName,p=e.fluid,m=e.fixed,y=e.backgroundColor,w=e.Tag,v="boolean"==typeof y?"lightgray":y,x=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,h),S=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),E={title:t,alt:this.state.isVisible?"":n,style:x,className:f};if(p){var k=p;return d.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},d.default.createElement(w,{style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),k.base64&&d.default.createElement(b,(0,l.default)({src:k.base64},E)),k.tracedSVG&&d.default.createElement(b,(0,l.default)({src:k.tracedSVG},E)),v&&d.default.createElement(w,{title:t,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,k.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),d.default.createElement("source",{srcSet:k.srcSet,sizes:k.sizes}),d.default.createElement(b,{alt:n,title:t,src:k.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:n,title:t},k))}}))}if(m){var C=m,R=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:C.width,height:C.height},r);return"inherit"===r.display&&delete R.display,d.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(C.srcSet)},C.base64&&d.default.createElement(b,(0,l.default)({src:C.base64},E)),C.tracedSVG&&d.default.createElement(b,(0,l.default)({src:C.tracedSVG},E)),v&&d.default.createElement(w,{title:t,style:{backgroundColor:v,width:C.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:C.height}}),this.state.isVisible&&d.default.createElement("picture",null,C.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),d.default.createElement("source",{srcSet:C.srcSet,sizes:C.sizes}),d.default.createElement(b,{alt:n,title:t,width:C.width,height:C.height,src:C.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:n,title:t,width:C.width,height:C.height},C))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:w,sizes:v,fixed:w,fluid:v,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string};var x=y;t.default=x}}]);
//# sourceMappingURL=component---src-pages-index-js-34587b39a1dc370a4a22.js.map