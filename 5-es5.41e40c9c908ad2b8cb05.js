function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var s=n[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{dGa1:function(e,n,t){"use strict";t.r(n),t.d(n,"ReleaseNotesModule",(function(){return G}));var s=t("An66"),c=t("h1zE"),r=t("i9Na"),a=t("1VvW"),o=t("kZht"),i=t("+EvI"),l=t("AytR");function b(e,n){if(1&e&&(o.Qb(0,"span"),o.Bc(1),o.Pb()),2&e){var t=n.ngIf;o.zb(1),o.Dc(" - ",t,"")}}function f(e,n){if(1&e&&(o.Qb(0,"p"),o.Bc(1,"Release date: "),o.Qb(2,"em"),o.Qb(3,"time",8),o.Bc(4),o.dc(5,"date"),o.Pb(),o.Pb(),o.Pb()),2&e){var t=n.ngIf;o.zb(3),o.jc("dateTime",t),o.zb(1),o.Cc(o.fc(5,2,t,"short"))}}function u(e,n){if(1&e&&(o.Qb(0,"p"),o.Bc(1,"Released by: "),o.Qb(2,"em"),o.Bc(3),o.Pb(),o.Pb()),2&e){var t=n.ngIf;o.zb(3),o.Cc(t)}}function g(e,n){if(1&e&&(o.Ob(0),o.Qb(1,"p"),o.Bc(2,"See this "),o.Qb(3,"a",9),o.Bc(4,"link"),o.Pb(),o.Bc(5," for the release notes."),o.Pb(),o.Nb()),2&e){var t=o.cc().ngIf;o.zb(3),o.jc("href",t,o.uc)}}function p(e,n){if(1&e&&(o.Ob(0),o.Mb(1,"p",10),o.dc(2,"markdown"),o.Nb()),2&e){var t=o.cc().ngIf,s=o.cc(2);o.zb(1),o.jc("innerHTML",o.ec(2,1,s.joinReleaseNotes(t)),o.sc)}}function h(e,n){if(1&e&&(o.Ob(0),o.zc(1,g,6,1,"ng-container",4),o.zc(2,p,3,3,"ng-container",4),o.Nb()),2&e){var t=n.ngIf,s=o.cc(2);o.zb(1),o.jc("ngIf",s.isUrl(t)),o.zb(1),o.jc("ngIf",s.isArray(t))}}function z(e,n){if(1&e&&(o.Ob(0),o.zc(1,f,6,5,"p",4),o.zc(2,u,4,1,"p",4),o.zc(3,h,3,2,"ng-container",4),o.Nb()),2&e){var t=o.cc();o.zb(1),o.jc("ngIf",t.getReleaseDate(t.releaseNotes.latestVersion)),o.zb(1),o.jc("ngIf",t.getReleaseAuthor(t.releaseNotes.latestVersion)),o.zb(1),o.jc("ngIf",t.getReleaseNote(t.releaseNotes.latestVersion))}}function v(e,n){1&e&&(o.Qb(0,"h2",11),o.Bc(1,"All release notes"),o.Pb())}function d(e,n){if(1&e&&(o.Qb(0,"span"),o.Bc(1),o.Pb()),2&e){var t=n.ngIf;o.zb(1),o.Dc(" - ",t,"")}}function N(e,n){1&e&&(o.Qb(0,"mat-chip",15),o.Bc(1,"Latest"),o.Pb())}function I(e,n){if(1&e&&(o.Qb(0,"p"),o.Bc(1,"Release date: "),o.Qb(2,"em"),o.Qb(3,"time",8),o.Bc(4),o.dc(5,"date"),o.Pb(),o.Pb(),o.Pb()),2&e){var t=n.ngIf;o.zb(3),o.jc("dateTime",t),o.zb(1),o.Cc(o.fc(5,2,t,"short"))}}function m(e,n){if(1&e&&(o.Qb(0,"p"),o.Bc(1,"Released by: "),o.Qb(2,"em"),o.Bc(3),o.Pb(),o.Pb()),2&e){var t=n.ngIf;o.zb(3),o.Cc(t)}}function y(e,n){if(1&e&&(o.Ob(0),o.Qb(1,"p"),o.Bc(2,"See this "),o.Qb(3,"a",9),o.Bc(4,"link"),o.Pb(),o.Bc(5," for the release notes."),o.Pb(),o.Nb()),2&e){var t=o.cc().ngIf;o.zb(3),o.jc("href",t,o.uc)}}function R(e,n){if(1&e&&(o.Ob(0),o.Mb(1,"p",10),o.dc(2,"markdown"),o.Nb()),2&e){var t=o.cc().ngIf,s=o.cc(3);o.zb(1),o.jc("innerHTML",o.ec(2,1,s.joinReleaseNotes(t)),o.sc)}}function j(e,n){if(1&e&&(o.Ob(0),o.zc(1,y,6,1,"ng-container",4),o.zc(2,R,3,3,"ng-container",4),o.Nb()),2&e){var t=n.ngIf,s=o.cc(3);o.zb(1),o.jc("ngIf",s.isUrl(t)),o.zb(1),o.jc("ngIf",s.isArray(t))}}function P(e,n){if(1&e&&(o.Ob(0),o.Qb(1,"h3",13),o.Bc(2),o.zc(3,d,2,1,"span",4),o.zc(4,N,2,0,"mat-chip",14),o.Pb(),o.zc(5,I,6,5,"p",4),o.zc(6,m,4,1,"p",4),o.zc(7,j,3,2,"ng-container",4),o.Nb()),2&e){var t=n.$implicit,s=o.cc(2);o.zb(1),o.lc("id","version-",t,""),o.zb(1),o.Dc(" Version ",t,""),o.zb(1),o.jc("ngIf",s.getReleaseName(t)),o.zb(1),o.jc("ngIf",t===s.releaseNotes.latestVersion),o.zb(1),o.jc("ngIf",s.getReleaseDate(t)),o.zb(1),o.jc("ngIf",s.getReleaseAuthor(t)),o.zb(1),o.jc("ngIf",s.getReleaseNote(t))}}function Q(e,n){if(1&e&&(o.Ob(0),o.zc(1,P,8,7,"ng-container",12),o.Nb()),2&e){var t=o.cc();o.zb(1),o.jc("ngForOf",t.versions.slice().reverse())}}function k(e,n){1&e&&(o.Qb(0,"div",16),o.Qb(1,"h2",17),o.Bc(2,"No release notes available!"),o.Pb(),o.Qb(3,"p"),o.Bc(4,"Are you connected to the internet?"),o.Pb(),o.Pb())}var B,w,C,A=new o.q("Release notes JSON file",{providedIn:"root",factory:function(){return i}}),O=new o.q("Custom Git repository"),D=[{path:"",component:(B=function(){function e(n,t){_classCallCheck(this,e),this.releaseNotesJson=n,this.customGitRepo=t}return _createClass(e,[{key:"createGitRepoUrl",value:function(e){return"object"==typeof e?"".concat(e.host,"/").concat(e.username,"/").concat(e.repo):e}},{key:"getReleaseName",value:function(e){return this.releaseNotes.releases[e].releaseName}},{key:"getReleaseNote",value:function(e){return this.releaseNotes.releases[e].releaseNotes}},{key:"getReleaseDate",value:function(e){return this.releaseNotes.releases[e].releaseDate}},{key:"getReleaseAuthor",value:function(e){return this.releaseNotes.releases[e].releaseAuthor}},{key:"getReleaseInfo",value:function(e){return this.releaseNotes.releases[e]}},{key:"joinReleaseNotes",value:function(e){return e.join("\n")}},{key:"isArray",value:function(e){return Array.isArray(e)}},{key:"isUrl",value:function(e){return/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(e)}},{key:"releaseNotes",get:function(){return this.releaseNotesJson}},{key:"versions",get:function(){return Object.keys(this.releaseNotes.releases)}},{key:"gitRepo",get:function(){return this.createGitRepoUrl(this.customGitRepo?this.customGitRepo:this.releaseNotes.gitRepo?this.releaseNotes.gitRepo:l.a.gitRepoDefaults)}}]),e}(),B.\u0275fac=function(e){return new(e||B)(o.Lb(A),o.Lb(O,8))},B.\u0275cmp=o.Fb({type:B,selectors:[["app-release-notes"]],decls:14,vars:8,consts:[[1,"app-content"],["id","app-header"],["id","current-version"],["id","current-version-release-notes"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["id","all-release-notes",4,"ngIf"],["noReleaseNotes",""],[3,"dateTime"],[3,"href"],[3,"innerHTML"],["id","all-release-notes"],[4,"ngFor","ngForOf"],[3,"id"],["color","primary",4,"ngIf"],["color","primary"],[1,"center"],["id","no-release-notes-available"]],template:function(e,n){if(1&e&&(o.Qb(0,"div",0),o.Qb(1,"h1",1),o.Bc(2,"Release notes"),o.Pb(),o.Qb(3,"h2",2),o.Bc(4),o.Pb(),o.Qb(5,"h3",3),o.Bc(6),o.zc(7,b,2,1,"span",4),o.Pb(),o.zc(8,z,4,3,"ng-container",5),o.Mb(9,"hr"),o.zc(10,v,2,0,"h2",6),o.zc(11,Q,2,1,"ng-container",5),o.Pb(),o.zc(12,k,5,0,"ng-template",null,7,o.Ac)),2&e){var t=o.pc(13);o.zb(4),o.Dc("Current version: ",n.releaseNotes.latestVersion,""),o.zb(2),o.Dc("Release notes for ",n.releaseNotes.latestVersion,""),o.zb(1),o.jc("ngIf",n.getReleaseName(n.releaseNotes.latestVersion)),o.zb(1),o.jc("ngIf",n.versions)("ngIfElse",t),o.zb(2),o.jc("ngIf",(null==n.versions?null:n.versions.length)>0),o.zb(1),o.jc("ngIf",n.versions)("ngIfElse",t)}},directives:[s.m,s.l,c.a],pipes:[s.e,r.b],encapsulation:2}),B)}],_=((w=function e(){_classCallCheck(this,e)}).\u0275mod=o.Jb({type:w}),w.\u0275inj=o.Ib({factory:function(e){return new(e||w)},imports:[[a.f.forChild(D)],a.f]}),w),V=[c.c],G=((C=function e(){_classCallCheck(this,e)}).\u0275mod=o.Jb({type:C}),C.\u0275inj=o.Ib({factory:function(e){return new(e||C)},imports:[[s.c,r.a.forChild(),V,_]]}),C)}}]);