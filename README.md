# basic-twitter-login-wall-remover

spent a bit of my day today learning javascript so i could finally get rid of that annoying twitter login wall

i have no idea how to stop a js (or the foreground.js, rather) from running once its completed its task, so if you dont refresh twitter in a while i think it ends up having 100+ (foreground) javascripts going, doing utterly nothing
except for the first one to load, which does all the work, which is to say, wait until the html element attributes change and then revert them and remove login wall, time and time again

i did do a bit of research and im pretty sure this is a relatively efficient way of doing this, but if any javascript developers happen across this i wouldn't mind some feedback at all

oh also, thats the default blender cube as the icons because the first thing i thought of to use to generate the icon files (that probably aren't even required) was blender
