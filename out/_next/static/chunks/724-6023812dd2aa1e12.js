"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[724],{7059:function(e,t,i){i.d(t,{Ps:function(){return B}});var r,n,s,o,a,l=function(){return(l=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};let h=/\r\n|[\n\r]/g;function u(e,t){let i=0,r=1;for(let n of e.body.matchAll(h)){if("number"==typeof n.index||function(e,t){if(!e)throw Error(null!=t?t:"Unexpected invariant triggered.")}(!1),n.index>=t)break;i=n.index+n[0].length,r+=1}return{line:r,column:t+1-i}}function c(e,t){let i=e.locationOffset.column-1,r="".padStart(i)+e.body,n=t.line-1,s=e.locationOffset.line-1,o=t.line+s,a=1===t.line?i:0,l=t.column+a,h=`${e.name}:${o}:${l}
`,u=r.split(/\r\n|[\n\r]/g),c=u[n];if(c.length>120){let e=Math.floor(l/80),t=[];for(let e=0;e<c.length;e+=80)t.push(c.slice(e,e+80));return h+p([[`${o} |`,t[0]],...t.slice(1,e+1).map(e=>["|",e]),["|","^".padStart(l%80)],["|",t[e+1]]])}return h+p([[`${o-1} |`,u[n-1]],[`${o} |`,c],["|","^".padStart(l)],[`${o+1} |`,u[n+1]]])}function p(e){let t=e.filter(([e,t])=>void 0!==t),i=Math.max(...t.map(([e])=>e.length));return t.map(([e,t])=>e.padStart(i)+(t?" "+t:"")).join("\n")}class d extends Error{constructor(e,...t){var i,r,n,s;let{nodes:o,source:a,positions:l,path:h,originalError:c,extensions:p}=function(e){let t=e[0];return null==t||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}(t);super(e),this.name="GraphQLError",this.path=null!=h?h:void 0,this.originalError=null!=c?c:void 0,this.nodes=f(Array.isArray(o)?o:o?[o]:void 0);let E=f(null===(i=this.nodes)||void 0===i?void 0:i.map(e=>e.loc).filter(e=>null!=e));this.source=null!=a?a:null==E?void 0:null===(r=E[0])||void 0===r?void 0:r.source,this.positions=null!=l?l:null==E?void 0:E.map(e=>e.start),this.locations=l&&a?l.map(e=>u(a,e)):null==E?void 0:E.map(e=>u(e.source,e.start));let y="object"==typeof(s=null==c?void 0:c.extensions)&&null!==s?null==c?void 0:c.extensions:void 0;this.extensions=null!==(n=null!=p?p:y)&&void 0!==n?n:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),null!=c&&c.stack?Object.defineProperty(this,"stack",{value:c.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,d):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes){for(let i of this.nodes)if(i.loc){var t;e+="\n\n"+c((t=i.loc).source,u(t.source,t.start))}}else if(this.source&&this.locations)for(let t of this.locations)e+="\n\n"+c(this.source,t);return e}toJSON(){let e={message:this.message};return null!=this.locations&&(e.locations=this.locations),null!=this.path&&(e.path=this.path),null!=this.extensions&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function f(e){return void 0===e||0===e.length?void 0:e}function E(e,t,i){return new d(`Syntax Error: ${i}`,{source:e,positions:[t]})}var y=i(72380);(r=o||(o={})).QUERY="QUERY",r.MUTATION="MUTATION",r.SUBSCRIPTION="SUBSCRIPTION",r.FIELD="FIELD",r.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",r.FRAGMENT_SPREAD="FRAGMENT_SPREAD",r.INLINE_FRAGMENT="INLINE_FRAGMENT",r.VARIABLE_DEFINITION="VARIABLE_DEFINITION",r.SCHEMA="SCHEMA",r.SCALAR="SCALAR",r.OBJECT="OBJECT",r.FIELD_DEFINITION="FIELD_DEFINITION",r.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",r.INTERFACE="INTERFACE",r.UNION="UNION",r.ENUM="ENUM",r.ENUM_VALUE="ENUM_VALUE",r.INPUT_OBJECT="INPUT_OBJECT",r.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION";var v=i(97359),k=i(87392),m=i(68297);(n=a||(a={})).SOF="<SOF>",n.EOF="<EOF>",n.BANG="!",n.DOLLAR="$",n.AMP="&",n.PAREN_L="(",n.PAREN_R=")",n.SPREAD="...",n.COLON=":",n.EQUALS="=",n.AT="@",n.BRACKET_L="[",n.BRACKET_R="]",n.BRACE_L="{",n.PIPE="|",n.BRACE_R="}",n.NAME="Name",n.INT="Int",n.FLOAT="Float",n.STRING="String",n.BLOCK_STRING="BlockString",n.COMMENT="Comment";class _{constructor(e){let t=new y.WU(a.SOF,0,0,0,0);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){this.lastToken=this.token;let e=this.token=this.lookahead();return e}lookahead(){let e=this.token;if(e.kind!==a.EOF)do if(e.next)e=e.next;else{let t=function(e,t){let i=e.source.body,r=i.length,n=t;for(;n<r;){let t=i.charCodeAt(n);switch(t){case 65279:case 9:case 32:case 44:++n;continue;case 10:++n,++e.line,e.lineStart=n;continue;case 13:10===i.charCodeAt(n+1)?n+=2:++n,++e.line,e.lineStart=n;continue;case 35:return function(e,t){let i=e.source.body,r=i.length,n=t+1;for(;n<r;){let e=i.charCodeAt(n);if(10===e||13===e)break;if(N(e))++n;else if(T(i,n))n+=2;else break}return g(e,a.COMMENT,t,n,i.slice(t+1,n))}(e,n);case 33:return g(e,a.BANG,n,n+1);case 36:return g(e,a.DOLLAR,n,n+1);case 38:return g(e,a.AMP,n,n+1);case 40:return g(e,a.PAREN_L,n,n+1);case 41:return g(e,a.PAREN_R,n,n+1);case 46:if(46===i.charCodeAt(n+1)&&46===i.charCodeAt(n+2))return g(e,a.SPREAD,n,n+3);break;case 58:return g(e,a.COLON,n,n+1);case 61:return g(e,a.EQUALS,n,n+1);case 64:return g(e,a.AT,n,n+1);case 91:return g(e,a.BRACKET_L,n,n+1);case 93:return g(e,a.BRACKET_R,n,n+1);case 123:return g(e,a.BRACE_L,n,n+1);case 124:return g(e,a.PIPE,n,n+1);case 125:return g(e,a.BRACE_R,n,n+1);case 34:if(34===i.charCodeAt(n+1)&&34===i.charCodeAt(n+2))return function(e,t){let i=e.source.body,r=i.length,n=e.lineStart,s=t+3,o=s,l="",h=[];for(;s<r;){let r=i.charCodeAt(s);if(34===r&&34===i.charCodeAt(s+1)&&34===i.charCodeAt(s+2)){l+=i.slice(o,s),h.push(l);let r=g(e,a.BLOCK_STRING,t,s+3,(0,k.wv)(h).join("\n"));return e.line+=h.length-1,e.lineStart=n,r}if(92===r&&34===i.charCodeAt(s+1)&&34===i.charCodeAt(s+2)&&34===i.charCodeAt(s+3)){l+=i.slice(o,s),o=s+1,s+=4;continue}if(10===r||13===r){l+=i.slice(o,s),h.push(l),13===r&&10===i.charCodeAt(s+1)?s+=2:++s,l="",o=s,n=s;continue}if(N(r))++s;else if(T(i,s))s+=2;else throw E(e.source,s,`Invalid character within String: ${x(e,s)}.`)}throw E(e.source,s,"Unterminated string.")}(e,n);return function(e,t){let i=e.source.body,r=i.length,n=t+1,s=n,o="";for(;n<r;){let r=i.charCodeAt(n);if(34===r)return o+=i.slice(s,n),g(e,a.STRING,t,n+1,o);if(92===r){o+=i.slice(s,n);let t=117===i.charCodeAt(n+1)?123===i.charCodeAt(n+2)?function(e,t){let i=e.source.body,r=0,n=3;for(;n<12;){let e=i.charCodeAt(t+n++);if(125===e){if(n<5||!N(r))break;return{value:String.fromCodePoint(r),size:n}}if((r=r<<4|D(e))<0)break}throw E(e.source,t,`Invalid Unicode escape sequence: "${i.slice(t,t+n)}".`)}(e,n):function(e,t){let i=e.source.body,r=I(i,t+2);if(N(r))return{value:String.fromCodePoint(r),size:6};if(O(r)&&92===i.charCodeAt(t+6)&&117===i.charCodeAt(t+7)){let e=I(i,t+8);if(b(e))return{value:String.fromCodePoint(r,e),size:12}}throw E(e.source,t,`Invalid Unicode escape sequence: "${i.slice(t,t+6)}".`)}(e,n):function(e,t){let i=e.source.body,r=i.charCodeAt(t+1);switch(r){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:"\n",size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw E(e.source,t,`Invalid character escape sequence: "${i.slice(t,t+2)}".`)}(e,n);o+=t.value,n+=t.size,s=n;continue}if(10===r||13===r)break;if(N(r))++n;else if(T(i,n))n+=2;else throw E(e.source,n,`Invalid character within String: ${x(e,n)}.`)}throw E(e.source,n,"Unterminated string.")}(e,n)}if((0,m.X1)(t)||45===t)return function(e,t,i){let r=e.source.body,n=t,s=i,o=!1;if(45===s&&(s=r.charCodeAt(++n)),48===s){if(s=r.charCodeAt(++n),(0,m.X1)(s))throw E(e.source,n,`Invalid number, unexpected digit after 0: ${x(e,n)}.`)}else n=A(e,n,s),s=r.charCodeAt(n);if(46===s&&(o=!0,s=r.charCodeAt(++n),n=A(e,n,s),s=r.charCodeAt(n)),(69===s||101===s)&&(o=!0,(43===(s=r.charCodeAt(++n))||45===s)&&(s=r.charCodeAt(++n)),n=A(e,n,s),s=r.charCodeAt(n)),46===s||(0,m.LQ)(s))throw E(e.source,n,`Invalid number, expected digit but got: ${x(e,n)}.`);return g(e,o?a.FLOAT:a.INT,t,n,r.slice(t,n))}(e,n,t);if((0,m.LQ)(t))return function(e,t){let i=e.source.body,r=i.length,n=t+1;for(;n<r;){let e=i.charCodeAt(n);if((0,m.HQ)(e))++n;else break}return g(e,a.NAME,t,n,i.slice(t,n))}(e,n);throw E(e.source,n,39===t?"Unexpected single quote character ('), did you mean to use a double quote (\")?":N(t)||T(i,n)?`Unexpected character: ${x(e,n)}.`:`Invalid character: ${x(e,n)}.`)}return g(e,a.EOF,r,r)}(this,e.end);e.next=t,t.prev=e,e=t}while(e.kind===a.COMMENT);return e}}function N(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function T(e,t){return O(e.charCodeAt(t))&&b(e.charCodeAt(t+1))}function O(e){return e>=55296&&e<=56319}function b(e){return e>=56320&&e<=57343}function x(e,t){let i=e.source.body.codePointAt(t);if(void 0===i)return a.EOF;if(i>=32&&i<=126){let e=String.fromCodePoint(i);return'"'===e?"'\"'":`"${e}"`}return"U+"+i.toString(16).toUpperCase().padStart(4,"0")}function g(e,t,i,r,n){let s=e.line,o=1+i-e.lineStart;return new y.WU(t,i,r,s,o,n)}function A(e,t,i){if(!(0,m.X1)(i))throw E(e.source,t,`Invalid number, expected digit but got: ${x(e,t)}.`);let r=e.source.body,n=t+1;for(;(0,m.X1)(r.charCodeAt(n));)++n;return n}function I(e,t){return D(e.charCodeAt(t))<<12|D(e.charCodeAt(t+1))<<8|D(e.charCodeAt(t+2))<<4|D(e.charCodeAt(t+3))}function D(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}var C=i(51270);class R{constructor(e,t={}){let i=(0,C.T)(e)?e:new C.H(e);this._lexer=new _(i),this._options=t,this._tokenCounter=0}parseName(){let e=this.expectToken(a.NAME);return this.node(e,{kind:v.h.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:v.h.DOCUMENT,definitions:this.many(a.SOF,this.parseDefinition,a.EOF)})}parseDefinition(){if(this.peek(a.BRACE_L))return this.parseOperationDefinition();let e=this.peekDescription(),t=e?this._lexer.lookahead():this._lexer.token;if(t.kind===a.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw E(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){let e;let t=this._lexer.token;if(this.peek(a.BRACE_L))return this.node(t,{kind:v.h.OPERATION_DEFINITION,operation:y.ku.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});let i=this.parseOperationType();return this.peek(a.NAME)&&(e=this.parseName()),this.node(t,{kind:v.h.OPERATION_DEFINITION,operation:i,name:e,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){let e=this.expectToken(a.NAME);switch(e.value){case"query":return y.ku.QUERY;case"mutation":return y.ku.MUTATION;case"subscription":return y.ku.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(a.PAREN_L,this.parseVariableDefinition,a.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:v.h.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(a.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(a.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){let e=this._lexer.token;return this.expectToken(a.DOLLAR),this.node(e,{kind:v.h.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:v.h.SELECTION_SET,selections:this.many(a.BRACE_L,this.parseSelection,a.BRACE_R)})}parseSelection(){return this.peek(a.SPREAD)?this.parseFragment():this.parseField()}parseField(){let e,t;let i=this._lexer.token,r=this.parseName();return this.expectOptionalToken(a.COLON)?(e=r,t=this.parseName()):t=r,this.node(i,{kind:v.h.FIELD,alias:e,name:t,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(a.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){let t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(a.PAREN_L,t,a.PAREN_R)}parseArgument(e=!1){let t=this._lexer.token,i=this.parseName();return this.expectToken(a.COLON),this.node(t,{kind:v.h.ARGUMENT,name:i,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){let e=this._lexer.token;this.expectToken(a.SPREAD);let t=this.expectOptionalKeyword("on");return!t&&this.peek(a.NAME)?this.node(e,{kind:v.h.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:v.h.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){let e=this._lexer.token;return(this.expectKeyword("fragment"),!0===this._options.allowLegacyFragmentVariables)?this.node(e,{kind:v.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:v.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()}parseValueLiteral(e){let t=this._lexer.token;switch(t.kind){case a.BRACKET_L:return this.parseList(e);case a.BRACE_L:return this.parseObject(e);case a.INT:return this.advanceLexer(),this.node(t,{kind:v.h.INT,value:t.value});case a.FLOAT:return this.advanceLexer(),this.node(t,{kind:v.h.FLOAT,value:t.value});case a.STRING:case a.BLOCK_STRING:return this.parseStringLiteral();case a.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:v.h.BOOLEAN,value:!0});case"false":return this.node(t,{kind:v.h.BOOLEAN,value:!1});case"null":return this.node(t,{kind:v.h.NULL});default:return this.node(t,{kind:v.h.ENUM,value:t.value})}case a.DOLLAR:if(e){if(this.expectToken(a.DOLLAR),this._lexer.token.kind===a.NAME){let e=this._lexer.token.value;throw E(this._lexer.source,t.start,`Unexpected variable "$${e}" in constant value.`)}throw this.unexpected(t)}return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){let e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:v.h.STRING,value:e.value,block:e.kind===a.BLOCK_STRING})}parseList(e){let t=()=>this.parseValueLiteral(e);return this.node(this._lexer.token,{kind:v.h.LIST,values:this.any(a.BRACKET_L,t,a.BRACKET_R)})}parseObject(e){let t=()=>this.parseObjectField(e);return this.node(this._lexer.token,{kind:v.h.OBJECT,fields:this.any(a.BRACE_L,t,a.BRACE_R)})}parseObjectField(e){let t=this._lexer.token,i=this.parseName();return this.expectToken(a.COLON),this.node(t,{kind:v.h.OBJECT_FIELD,name:i,value:this.parseValueLiteral(e)})}parseDirectives(e){let t=[];for(;this.peek(a.AT);)t.push(this.parseDirective(e));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){let t=this._lexer.token;return this.expectToken(a.AT),this.node(t,{kind:v.h.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){let e;let t=this._lexer.token;if(this.expectOptionalToken(a.BRACKET_L)){let i=this.parseTypeReference();this.expectToken(a.BRACKET_R),e=this.node(t,{kind:v.h.LIST_TYPE,type:i})}else e=this.parseNamedType();return this.expectOptionalToken(a.BANG)?this.node(t,{kind:v.h.NON_NULL_TYPE,type:e}):e}parseNamedType(){return this.node(this._lexer.token,{kind:v.h.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(a.STRING)||this.peek(a.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");let i=this.parseConstDirectives(),r=this.many(a.BRACE_L,this.parseOperationTypeDefinition,a.BRACE_R);return this.node(e,{kind:v.h.SCHEMA_DEFINITION,description:t,directives:i,operationTypes:r})}parseOperationTypeDefinition(){let e=this._lexer.token,t=this.parseOperationType();this.expectToken(a.COLON);let i=this.parseNamedType();return this.node(e,{kind:v.h.OPERATION_TYPE_DEFINITION,operation:t,type:i})}parseScalarTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");let i=this.parseName(),r=this.parseConstDirectives();return this.node(e,{kind:v.h.SCALAR_TYPE_DEFINITION,description:t,name:i,directives:r})}parseObjectTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");let i=this.parseName(),r=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(e,{kind:v.h.OBJECT_TYPE_DEFINITION,description:t,name:i,interfaces:r,directives:n,fields:s})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(a.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(a.BRACE_L,this.parseFieldDefinition,a.BRACE_R)}parseFieldDefinition(){let e=this._lexer.token,t=this.parseDescription(),i=this.parseName(),r=this.parseArgumentDefs();this.expectToken(a.COLON);let n=this.parseTypeReference(),s=this.parseConstDirectives();return this.node(e,{kind:v.h.FIELD_DEFINITION,description:t,name:i,arguments:r,type:n,directives:s})}parseArgumentDefs(){return this.optionalMany(a.PAREN_L,this.parseInputValueDef,a.PAREN_R)}parseInputValueDef(){let e;let t=this._lexer.token,i=this.parseDescription(),r=this.parseName();this.expectToken(a.COLON);let n=this.parseTypeReference();this.expectOptionalToken(a.EQUALS)&&(e=this.parseConstValueLiteral());let s=this.parseConstDirectives();return this.node(t,{kind:v.h.INPUT_VALUE_DEFINITION,description:i,name:r,type:n,defaultValue:e,directives:s})}parseInterfaceTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");let i=this.parseName(),r=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(e,{kind:v.h.INTERFACE_TYPE_DEFINITION,description:t,name:i,interfaces:r,directives:n,fields:s})}parseUnionTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");let i=this.parseName(),r=this.parseConstDirectives(),n=this.parseUnionMemberTypes();return this.node(e,{kind:v.h.UNION_TYPE_DEFINITION,description:t,name:i,directives:r,types:n})}parseUnionMemberTypes(){return this.expectOptionalToken(a.EQUALS)?this.delimitedMany(a.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");let i=this.parseName(),r=this.parseConstDirectives(),n=this.parseEnumValuesDefinition();return this.node(e,{kind:v.h.ENUM_TYPE_DEFINITION,description:t,name:i,directives:r,values:n})}parseEnumValuesDefinition(){return this.optionalMany(a.BRACE_L,this.parseEnumValueDefinition,a.BRACE_R)}parseEnumValueDefinition(){let e=this._lexer.token,t=this.parseDescription(),i=this.parseEnumValueName(),r=this.parseConstDirectives();return this.node(e,{kind:v.h.ENUM_VALUE_DEFINITION,description:t,name:i,directives:r})}parseEnumValueName(){if("true"===this._lexer.token.value||"false"===this._lexer.token.value||"null"===this._lexer.token.value)throw E(this._lexer.source,this._lexer.token.start,`${S(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");let i=this.parseName(),r=this.parseConstDirectives(),n=this.parseInputFieldsDefinition();return this.node(e,{kind:v.h.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:i,directives:r,fields:n})}parseInputFieldsDefinition(){return this.optionalMany(a.BRACE_L,this.parseInputValueDef,a.BRACE_R)}parseTypeSystemExtension(){let e=this._lexer.lookahead();if(e.kind===a.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");let t=this.parseConstDirectives(),i=this.optionalMany(a.BRACE_L,this.parseOperationTypeDefinition,a.BRACE_R);if(0===t.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:v.h.SCHEMA_EXTENSION,directives:t,operationTypes:i})}parseScalarTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");let t=this.parseName(),i=this.parseConstDirectives();if(0===i.length)throw this.unexpected();return this.node(e,{kind:v.h.SCALAR_TYPE_EXTENSION,name:t,directives:i})}parseObjectTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");let t=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),n=this.parseFieldsDefinition();if(0===i.length&&0===r.length&&0===n.length)throw this.unexpected();return this.node(e,{kind:v.h.OBJECT_TYPE_EXTENSION,name:t,interfaces:i,directives:r,fields:n})}parseInterfaceTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");let t=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),n=this.parseFieldsDefinition();if(0===i.length&&0===r.length&&0===n.length)throw this.unexpected();return this.node(e,{kind:v.h.INTERFACE_TYPE_EXTENSION,name:t,interfaces:i,directives:r,fields:n})}parseUnionTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");let t=this.parseName(),i=this.parseConstDirectives(),r=this.parseUnionMemberTypes();if(0===i.length&&0===r.length)throw this.unexpected();return this.node(e,{kind:v.h.UNION_TYPE_EXTENSION,name:t,directives:i,types:r})}parseEnumTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");let t=this.parseName(),i=this.parseConstDirectives(),r=this.parseEnumValuesDefinition();if(0===i.length&&0===r.length)throw this.unexpected();return this.node(e,{kind:v.h.ENUM_TYPE_EXTENSION,name:t,directives:i,values:r})}parseInputObjectTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");let t=this.parseName(),i=this.parseConstDirectives(),r=this.parseInputFieldsDefinition();if(0===i.length&&0===r.length)throw this.unexpected();return this.node(e,{kind:v.h.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:i,fields:r})}parseDirectiveDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(a.AT);let i=this.parseName(),r=this.parseArgumentDefs(),n=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");let s=this.parseDirectiveLocations();return this.node(e,{kind:v.h.DIRECTIVE_DEFINITION,description:t,name:i,arguments:r,repeatable:n,locations:s})}parseDirectiveLocations(){return this.delimitedMany(a.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){let e=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(o,t.value))return t;throw this.unexpected(e)}node(e,t){return!0!==this._options.noLocation&&(t.loc=new y.Ye(e,this._lexer.lastToken,this._lexer.source)),t}peek(e){return this._lexer.token.kind===e}expectToken(e){let t=this._lexer.token;if(t.kind===e)return this.advanceLexer(),t;throw E(this._lexer.source,t.start,`Expected ${w(e)}, found ${S(t)}.`)}expectOptionalToken(e){let t=this._lexer.token;return t.kind===e&&(this.advanceLexer(),!0)}expectKeyword(e){let t=this._lexer.token;if(t.kind===a.NAME&&t.value===e)this.advanceLexer();else throw E(this._lexer.source,t.start,`Expected "${e}", found ${S(t)}.`)}expectOptionalKeyword(e){let t=this._lexer.token;return t.kind===a.NAME&&t.value===e&&(this.advanceLexer(),!0)}unexpected(e){let t=null!=e?e:this._lexer.token;return E(this._lexer.source,t.start,`Unexpected ${S(t)}.`)}any(e,t,i){this.expectToken(e);let r=[];for(;!this.expectOptionalToken(i);)r.push(t.call(this));return r}optionalMany(e,t,i){if(this.expectOptionalToken(e)){let e=[];do e.push(t.call(this));while(!this.expectOptionalToken(i));return e}return[]}many(e,t,i){this.expectToken(e);let r=[];do r.push(t.call(this));while(!this.expectOptionalToken(i));return r}delimitedMany(e,t){this.expectOptionalToken(e);let i=[];do i.push(t.call(this));while(this.expectOptionalToken(e));return i}advanceLexer(){let{maxTokens:e}=this._options,t=this._lexer.advance();if(void 0!==e&&t.kind!==a.EOF&&(++this._tokenCounter,this._tokenCounter>e))throw E(this._lexer.source,t.start,`Document contains more that ${e} tokens. Parsing aborted.`)}}function S(e){let t=e.value;return w(e.kind)+(null!=t?` "${t}"`:"")}function w(e){return e===a.BANG||e===a.DOLLAR||e===a.AMP||e===a.PAREN_L||e===a.PAREN_R||e===a.SPREAD||e===a.COLON||e===a.EQUALS||e===a.AT||e===a.BRACKET_L||e===a.BRACKET_R||e===a.BRACE_L||e===a.PIPE||e===a.BRACE_R?`"${e}"`:e}var L=new Map,P=new Map,F=!0,M=!1;function U(e){return e.replace(/[\s,]+/g," ").trim()}function B(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];"string"==typeof e&&(e=[e]);var r=e[0];return t.forEach(function(t,i){t&&"Document"===t.kind?r+=t.loc.source.body:r+=t,r+=e[i+1]}),function(e){var t=U(e);if(!L.has(t)){var i,r,n,s,o,a=function(e,t){let i=new R(e,t);return i.parseDocument()}(e,{experimentalFragmentVariables:M,allowLegacyFragmentVariables:M});if(!a||"Document"!==a.kind)throw Error("Not a valid GraphQL document.");L.set(t,(i=new Set,r=[],a.definitions.forEach(function(e){if("FragmentDefinition"===e.kind){var t,n=e.name.value,s=U((t=e.loc).source.body.substring(t.start,t.end)),o=P.get(n);o&&!o.has(s)?F&&console.warn("Warning: fragment with name "+n+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):o||P.set(n,o=new Set),o.add(s),i.has(s)||(i.add(s),r.push(e))}else r.push(e)}),n=l(l({},a),{definitions:r}),(s=new Set(n.definitions)).forEach(function(e){e.loc&&delete e.loc,Object.keys(e).forEach(function(t){var i=e[t];i&&"object"==typeof i&&s.add(i)})}),(o=n.loc)&&(delete o.startToken,delete o.endToken),n))}return L.get(t)}(r)}var Q={gql:B,resetCaches:function(){L.clear(),P.clear()},disableFragmentWarnings:function(){F=!1},enableExperimentalFragmentVariables:function(){M=!0},disableExperimentalFragmentVariables:function(){M=!1}};(s=B||(B={})).gql=Q.gql,s.resetCaches=Q.resetCaches,s.disableFragmentWarnings=Q.disableFragmentWarnings,s.enableExperimentalFragmentVariables=Q.enableExperimentalFragmentVariables,s.disableExperimentalFragmentVariables=Q.disableExperimentalFragmentVariables,B.default=B},16991:function(e,t,i){i.d(t,{a:function(){return b}});var r,n,s=i(54708),o=i(93209),a=i(67294),l=i.t(a,2),h=i(30320),u=!1,c=l.useSyncExternalStore||function(e,t,i){var r=t();__DEV__&&!u&&r!==t()&&(u=!0,__DEV__&&o.kG.error("The result of getSnapshot should be cached to avoid an infinite loop"));var n=a.useState({inst:{value:r,getSnapshot:t}}),s=n[0].inst,l=n[1];return h.JC?a.useLayoutEffect(function(){Object.assign(s,{value:r,getSnapshot:t}),p(s)&&l({inst:s})},[e,r,t]):Object.assign(s,{value:r,getSnapshot:t}),a.useEffect(function(){return p(s)&&l({inst:s}),e(function(){p(s)&&l({inst:s})})},[e]),r};function p(e){var t=e.value,i=e.getSnapshot;try{return t!==i()}catch(e){return!0}}var d=i(30020),f=i(14012),E=i(85317),y=i(30990),v=i(1644);(r=n||(n={}))[r.Query=0]="Query",r[r.Mutation=1]="Mutation",r[r.Subscription=2]="Subscription";var k=new Map;function m(e){var t;switch(e){case n.Query:t="Query";break;case n.Mutation:t="Mutation";break;case n.Subscription:t="Subscription"}return t}var _=i(48702),N=i(53712),T=i(21436),O=Object.prototype.hasOwnProperty;function b(e,t){var i,r,n,s,l,h,u;return void 0===t&&(t=Object.create(null)),(i=t.client,r=(0,a.useContext)((0,E.K)()),n=i||r.client,__DEV__?(0,o.kG)(!!n,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):(0,o.kG)(!!n,32),(s=(0,a.useRef)()).current&&n===s.current.client&&e===s.current.query||(s.current=new x(n,e,s.current)),l=s.current,(h=(0,a.useState)(0))[0],u=h[1],l.forceUpdate=function(){u(function(e){return e+1})},l).useQuery(t)}var x=function(){function e(e,t,i){this.client=e,this.query=t,this.ssrDisabledResult=(0,_.J)({loading:!0,data:void 0,error:void 0,networkStatus:v.I.loading}),this.skipStandbyResult=(0,_.J)({loading:!1,data:void 0,error:void 0,networkStatus:v.I.ready}),this.toQueryResultCache=new(h.mr?WeakMap:Map),r=n.Query,s=function(e){var t,i,r=k.get(e);if(r)return r;__DEV__?(0,o.kG)(!!e&&!!e.kind,"Argument of ".concat(e," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):(0,o.kG)(!!e&&!!e.kind,33);for(var s=[],a=[],l=[],h=[],u=0,c=e.definitions;u<c.length;u++){var p=c[u];if("FragmentDefinition"===p.kind){s.push(p);continue}if("OperationDefinition"===p.kind)switch(p.operation){case"query":a.push(p);break;case"mutation":l.push(p);break;case"subscription":h.push(p)}}__DEV__?(0,o.kG)(!s.length||a.length||l.length||h.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):(0,o.kG)(!s.length||a.length||l.length||h.length,34),__DEV__?(0,o.kG)(a.length+l.length+h.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(e," had ").concat(a.length," queries, ").concat(h.length," ")+"subscriptions and ".concat(l.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):(0,o.kG)(a.length+l.length+h.length<=1,35),i=a.length?n.Query:n.Mutation,a.length||l.length||(i=n.Subscription);var d=a.length?a:l.length?l:h;__DEV__?(0,o.kG)(1===d.length,"react-apollo only supports one definition per HOC. ".concat(e," had ")+"".concat(d.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):(0,o.kG)(1===d.length,36);var f=d[0];t=f.variableDefinitions||[];var E={name:f.name&&"Name"===f.name.kind?f.name.value:"data",type:i,variables:t};return k.set(e,E),E}(t),a=m(r),l=m(s.type),__DEV__?(0,o.kG)(s.type===r,"Running a ".concat(a," requires a graphql ")+"".concat(a,", but a ").concat(l," was used instead.")):(0,o.kG)(s.type===r,37);var r,s,a,l,u=i&&i.result,c=u&&u.data;c&&(this.previousData=c)}return e.prototype.forceUpdate=function(){__DEV__&&o.kG.warn("Calling default no-op implementation of InternalState#forceUpdate")},e.prototype.executeQuery=function(e){var t,i=this;e.query&&Object.assign(this,{query:e.query}),this.watchQueryOptions=this.createWatchQueryOptions(this.queryHookOptions=e);var r=this.observable.reobserveAsConcast(this.getObsQueryOptions());return this.previousData=(null===(t=this.result)||void 0===t?void 0:t.data)||this.previousData,this.result=void 0,this.forceUpdate(),new Promise(function(e){var t;r.subscribe({next:function(e){t=e},error:function(){e(i.toQueryResult(i.observable.getCurrentResult()))},complete:function(){e(i.toQueryResult(t))}})})},e.prototype.useQuery=function(e){var t=this;this.renderPromises=(0,a.useContext)((0,E.K)()).renderPromises,this.useOptions(e);var i=this.useObservableQuery(),r=c((0,a.useCallback)(function(){if(t.renderPromises)return function(){};var e=function(){var e=t.result,r=i.getCurrentResult();e&&e.loading===r.loading&&e.networkStatus===r.networkStatus&&(0,d.D)(e.data,r.data)||t.setResult(r)},r=function(s){var o=i.last;n.unsubscribe();try{i.resetLastResults(),n=i.subscribe(e,r)}finally{i.last=o}if(!O.call(s,"graphQLErrors"))throw s;var a=t.result;(!a||a&&a.loading||!(0,d.D)(s,a.error))&&t.setResult({data:a&&a.data,error:s,loading:!1,networkStatus:v.I.error})},n=i.subscribe(e,r);return function(){return setTimeout(function(){return n.unsubscribe()})}},[i,this.renderPromises,this.client.disableNetworkFetches]),function(){return t.getCurrentResult()},function(){return t.getCurrentResult()});return this.unsafeHandlePartialRefetch(r),this.toQueryResult(r)},e.prototype.useOptions=function(t){var i,r=this.createWatchQueryOptions(this.queryHookOptions=t),n=this.watchQueryOptions;!(0,d.D)(r,n)&&(this.watchQueryOptions=r,n&&this.observable&&(this.observable.reobserve(this.getObsQueryOptions()),this.previousData=(null===(i=this.result)||void 0===i?void 0:i.data)||this.previousData,this.result=void 0)),this.onCompleted=t.onCompleted||e.prototype.onCompleted,this.onError=t.onError||e.prototype.onError,(this.renderPromises||this.client.disableNetworkFetches)&&!1===this.queryHookOptions.ssr&&!this.queryHookOptions.skip?this.result=this.ssrDisabledResult:this.queryHookOptions.skip||"standby"===this.watchQueryOptions.fetchPolicy?this.result=this.skipStandbyResult:(this.result===this.ssrDisabledResult||this.result===this.skipStandbyResult)&&(this.result=void 0)},e.prototype.getObsQueryOptions=function(){var e=[],t=this.client.defaultOptions.watchQuery;return t&&e.push(t),this.queryHookOptions.defaultOptions&&e.push(this.queryHookOptions.defaultOptions),e.push((0,N.o)(this.observable&&this.observable.options,this.watchQueryOptions)),e.reduce(f.J)},e.prototype.createWatchQueryOptions=function(e){void 0===e&&(e={});var t,i=e.skip,r=Object.assign((e.ssr,e.onCompleted,e.onError,e.defaultOptions,(0,s._T)(e,["skip","ssr","onCompleted","onError","defaultOptions"])),{query:this.query});if(this.renderPromises&&("network-only"===r.fetchPolicy||"cache-and-network"===r.fetchPolicy)&&(r.fetchPolicy="cache-first"),r.variables||(r.variables={}),i){var n=r.fetchPolicy,o=void 0===n?this.getDefaultFetchPolicy():n,a=r.initialFetchPolicy;Object.assign(r,{initialFetchPolicy:void 0===a?o:a,fetchPolicy:"standby"})}else r.fetchPolicy||(r.fetchPolicy=(null===(t=this.observable)||void 0===t?void 0:t.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return r},e.prototype.getDefaultFetchPolicy=function(){var e,t;return(null===(e=this.queryHookOptions.defaultOptions)||void 0===e?void 0:e.fetchPolicy)||(null===(t=this.client.defaultOptions.watchQuery)||void 0===t?void 0:t.fetchPolicy)||"cache-first"},e.prototype.onCompleted=function(e){},e.prototype.onError=function(e){},e.prototype.useObservableQuery=function(){var e=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery(this.getObsQueryOptions());this.obsQueryFields=(0,a.useMemo)(function(){return{refetch:e.refetch.bind(e),reobserve:e.reobserve.bind(e),fetchMore:e.fetchMore.bind(e),updateQuery:e.updateQuery.bind(e),startPolling:e.startPolling.bind(e),stopPolling:e.stopPolling.bind(e),subscribeToMore:e.subscribeToMore.bind(e)}},[e]);var t=!(!1===this.queryHookOptions.ssr||this.queryHookOptions.skip);return this.renderPromises&&t&&(this.renderPromises.registerSSRObservable(e),e.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(e)),e},e.prototype.setResult=function(e){var t=this.result;t&&t.data&&(this.previousData=t.data),this.result=e,this.forceUpdate(),this.handleErrorOrCompleted(e)},e.prototype.handleErrorOrCompleted=function(e){var t=this;if(!e.loading){var i=this.toApolloError(e);Promise.resolve().then(function(){i?t.onError(i):e.data&&t.onCompleted(e.data)}).catch(function(e){__DEV__&&o.kG.warn(e)})}},e.prototype.toApolloError=function(e){return(0,T.O)(e.errors)?new y.cA({graphQLErrors:e.errors}):e.error},e.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},e.prototype.toQueryResult=function(e){var t=this.toQueryResultCache.get(e);if(t)return t;var i=e.data,r=(e.partial,(0,s._T)(e,["data","partial"]));return this.toQueryResultCache.set(e,t=(0,s.pi)((0,s.pi)((0,s.pi)({data:i},r),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!this.queryHookOptions.skip,previousData:this.previousData})),!t.error&&(0,T.O)(e.errors)&&(t.error=new y.cA({graphQLErrors:e.errors})),t},e.prototype.unsafeHandlePartialRefetch=function(e){e.partial&&this.queryHookOptions.partialRefetch&&!e.loading&&(!e.data||0===Object.keys(e.data).length)&&"cache-only"!==this.observable.options.fetchPolicy&&(Object.assign(e,{loading:!0,networkStatus:v.I.refetch}),this.observable.refetch())},e}()},82729:function(e,t,i){i.d(t,{_:function(){return r}});function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}}}]);