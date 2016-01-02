tinymce.PluginManager.add("fullscreen",function(e){function t(){var e,t,n=window,r=document,i=r.body;return i.offsetWidth&&(e=i.offsetWidth,t=i.offsetHeight),n.innerWidth&&n.innerHeight&&(e=n.innerWidth,t=n.innerHeight),{w:e,h:t}}function n(){function n(){c.setStyle(f,"height",t().h-(d.clientHeight-f.clientHeight))}var u,d,f,p,m=document.body,h=document.documentElement;l=!l,d=e.getContainer(),u=d.style,f=e.getContentAreaContainer().firstChild,p=f.style,l?(r=p.width,i=p.height,p.width=p.height="100%",a=u.width,s=u.height,u.width=u.height="",c.addClass(m,"mce-fullscreen"),c.addClass(h,"mce-fullscreen"),c.addClass(d,"mce-fullscreen"),c.bind(window,"resize",n),n(),o=n):(p.width=r,p.height=i,a&&(u.width=a),s&&(u.height=s),c.removeClass(m,"mce-fullscreen"),c.removeClass(h,"mce-fullscreen"),c.removeClass(d,"mce-fullscreen"),c.unbind(window,"resize",o)),e.fire("FullscreenStateChanged",{state:l})}var r,i,o,a,s,l=!1,c=tinymce.DOM;return e.settings.inline?void 0:(e.on("init",function(){e.addShortcut("Meta+Alt+F","",n)}),e.on("remove",function(){o&&c.unbind(window,"resize",o)}),e.addCommand("mceFullScreen",n),e.addMenuItem("fullscreen",{text:"Fullscreen",shortcut:"Meta+Alt+F",selectable:!0,onClick:n,onPostRender:function(){var t=this;e.on("FullscreenStateChanged",function(e){t.active(e.state)})},context:"view"}),e.addButton("fullscreen",{tooltip:"Fullscreen",shortcut:"Meta+Alt+F",onClick:n,onPostRender:function(){var t=this;e.on("FullscreenStateChanged",function(e){t.active(e.state)})}}),{isFullscreen:function(){return l}})});
