# Javascript Historie
Javascript ist eine Skriptsprache, welche 1995 von Netscape entwickelt wurde, um HTML im Browser dynamisch verändern zu können.

Anfänglich lautete der Name "LiveScript". Da 1995 ebenfalls die Programmiersprache Java erschien und sich hoher Popularität erfreute, entschied sich Netscape dazu, von diesem Hype profitieren zu wollen, und änderte den Namen in "JavaScript".

>"Java is to JavaScript as ham is to hamster."  
<sub>*2009  Jeremy Keith - Web Developer*<sub>

# Versionen
1997 veröffentlichte die European Computer Manufacturers Association ihren Standard ECMA-262 (ECMAScript). In diesen ECMAScript-Normen werden die Sprach-Features von JavaScript definiert.

Zwischen 1999 und 2009 war die ECMAScript Version 3 maßgebend und galt lange Zeit als Standard. Seit 2009 gibt es ES5, welches als aktueller Standard betrachtet werden kann, da dieser von allen aktuell verbreiteten Browsern unterstützt wird. So wird ECMAScript 5 bspw. komplett vom IE 9 unterstützt, welcher 2011 erschienen ist. 

Seit 2015 werden die Versionsnummern mit Jahren beschrieben, und es erscheint jedes Jahr eine neue Spezifikation. Die aktuellen Versionen lauten also 
- ES2015 (aka ES6)
- ES2016
- ES2017

# Transpiler
Da die neusten Versionen nicht von allen verbreiteten Browsern unterstützt wird, werden aktuell die meisten Websites mit ES5 betrieben. Um dem Entwickler trotzdem die Möglichkeit zu bieten, neue Sprachfeatures nutzen zu können, werden neuere Versionen von ECMAScript mit Hilfe von sogenannten Transpilern in alte Versionen zurück "transpiliert".

Ein Beispiel für ein Feature, welches erst mit ES2015 erchienen ist, ist die "includes"-Funktion bei strings:

```javascript
"hello".includes("e"); // true
```

In ES5 war dies nur über die "indexOf"-Funktion möglich:

```javascript
"hello".indexOf("e") !== -1;
```

Mit Transpilern, wie bspw. BabelJS geschieht dieses "Downgrade" ganz automatisch.


