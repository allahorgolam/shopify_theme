/* Do not edit this file to avoid losing your changes when upgrade the theme */
function registerSections(){BT.loadCssJsLib("lodash",function(){theme.Sections=function(){this.constructors={},this.instances=[],$(document).on("shopify:section:load",this._onSectionLoad.bind(this)).on("shopify:section:unload",this._onSectionUnload.bind(this)).on("shopify:section:select",this._onSelect.bind(this)).on("shopify:section:deselect",this._onDeselect.bind(this)).on("shopify:block:select",this._onBlockSelect.bind(this)).on("shopify:block:deselect",this._onBlockDeselect.bind(this))},theme.Sections.prototype=_.assignIn({},theme.Sections.prototype,{_beforeCreateInstance:function(e,t,i){i=i||$(e).attr("data-section-type"),null==theme.dependTypeLibs[i]?BT.loadCssJsLib(i+"-section",function(){null==this.constructors[i]&&(this.constructors[i]=t),this._createInstance(e,t)}.bind(this)):BT.loadCssJsLib(theme.dependTypeLibs[i],function(){BT.loadCssJsLib(i+"-section",function(){null==this.constructors[i]&&(this.constructors[i]=t),this._createInstance(e,t)}.bind(this))}.bind(this))},_createInstance:function(e,t){var i=$(e),n=i.attr("data-section-id"),o=i.attr("data-section-type");if(t=t||this.constructors[o],!_.isUndefined(t)){var s=_.assignIn(new t(e),{id:n,type:o,container:e});this.instances.push(s)}},_onSectionLoad:function(e){var t=$("[data-section-id]",e.target)[0];t&&this._beforeCreateInstance(t)},_onSectionUnload:function(i){this.instances=_.filter(this.instances,function(e){var t=e.id===i.detail.sectionId;return t&&_.isFunction(e.onUnload)&&e.onUnload(i),!t})},_onSelect:function(t){var e=_.find(this.instances,function(e){return e.id===t.detail.sectionId});!_.isUndefined(e)&&_.isFunction(e.onSelect)&&e.onSelect(t)},_onDeselect:function(t){var e=_.find(this.instances,function(e){return e.id===t.detail.sectionId});!_.isUndefined(e)&&_.isFunction(e.onDeselect)&&e.onDeselect(t)},_onBlockSelect:function(t){var e=_.find(this.instances,function(e){return e.id===t.detail.sectionId});!_.isUndefined(e)&&_.isFunction(e.onBlockSelect)&&e.onBlockSelect(t)},_onBlockDeselect:function(t){var e=_.find(this.instances,function(e){return e.id===t.detail.sectionId});!_.isUndefined(e)&&_.isFunction(e.onBlockDeselect)&&e.onBlockDeselect(t)},register:function(i,n){$("[data-section-type="+i+"]").each(function(e,t){this._beforeCreateInstance(t,n,i)}.bind(this))}}),theme.sections=new theme.Sections,theme.sections.register("navigation",theme.DesktopNavigationSection),theme.sections.register("navigation-vertical",theme.VerticalNavigationSection),theme.sections.register("instagram",theme.InstagramSection),theme.sections.register("rich-banner-text",theme.RichBannerTextSection),theme.sections.register("layer-banner",theme.LayerBannerSection),theme.sections.register("simple-product-slider",theme.SimpleProductSliderSection),theme.sections.register("product",theme.ProductTemplateSection),theme.sections.register("product-tabs",theme.ProductTabsSection),theme.sections.register("product-columns",theme.ProductColumnsSection),theme.sections.register("map",theme.Maps),theme.sections.register("quotes",theme.QuotesSection),theme.sections.register("featured-blog",theme.FeaturedBlogSection),theme.sections.register("collection-list",theme.CollectionListSection),theme.sections.register("logo-bar",theme.LogoListSection),theme.sections.register("single-deal",theme.SingleDealSection),theme.sections.register("about",theme.AboutSection),theme.sections.register("newsletter",theme.NewsletterSection),theme.sections.register("collection-filter",theme.CollectionFilterSection),theme.sections.register("footer",theme.FooterSection),theme.sections.register("collection-template",theme.CollectionTemplateSection),theme.sections.register("search-template",theme.SearchTemplateSection),theme.sections.register("cart-template",theme.CartTemplateSection),theme.sections.register("faq",theme.faqSection),theme.sections.register("navigation-mobile",theme.MobileNavigationSection)})}window.theme=window.theme||{},theme.dependTypeLibs={"navigation-vertical":"navigation-section",product:"product-global","collection-template":"nouislider"},window.slate=window.slate||{};var script_loaded=!(theme.Currency={formatMoney:function(e,t){"string"==typeof e&&(e=e.replace(".",""));var i="",n=/\{\{\s*(\w+)\s*\}\}/,o=t||"${{amount}}";function s(e,t,i,n){if(i=i||",",n=n||".",isNaN(e)||null===e)return 0;var o=(e=(e/100).toFixed(t)).split(".");return o[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+i)+(o[1]?n+o[1]:"")}switch(o.match(n)[1]){case"amount":i=s(e,2);break;case"amount_no_decimals":i=s(e,0);break;case"amount_with_comma_separator":i=s(e,2,".",",");break;case"amount_no_decimals_with_comma_separator":i=s(e,0,".",",");break;case"amount_no_decimals_with_space_separator":i=s(e,0," ");break;case"amount_with_apostrophe_separator":i=s(e,2,"'")}return o.replace(n,i)}});function loadJSscripts(){if(!script_loaded){script_loaded=!0;var e=document.getElementsByTagName("script");for(i=0;i<e.length;i++)null!==e[i].getAttribute("data-src")&&(e[i].setAttribute("src",e[i].getAttribute("data-src")),delete e[i].dataset.src);var t=document.getElementsByTagName("link");for(i=0;i<t.length;i++)null!==t[i].getAttribute("data-href")&&(t[i].setAttribute("href",t[i].getAttribute("data-href")),delete t[i].dataset.href);initCurrencies(),document.dispatchEvent(new CustomEvent("StartShopifyCoreLoading")),document.dispatchEvent(new CustomEvent("ShopifyAsyncLoading")),BT.loadRequireCss(),BT.init(),registerSections()}}Shopify.designMode||BT.data.cacheWindowWidth>BT.options.windowScreen.mobile?loadJSscripts():(window.addEventListener("scroll",function(e){loadJSscripts()}),window.addEventListener("mousemove",function(){loadJSscripts()}),window.addEventListener("touchstart",function(){loadJSscripts()}),window.addEventListener?window.addEventListener("load",function(){setTimeout(loadJSscripts,4e3)},!1):window.attachEvent?window.attachEvent("onload",function(){setTimeout(loadJSscripts,4e3)}):window.onload=loadJSscripts);