# Datentypen
Laut ES-Standard existieren 5 bzw. 6 primitive Datentypen, sowie "Object". Die primitiven Datentypen sind die folgenden:
- Undefined
- Null
- Boolean
- Number
- String
- Symbol (erst ab ES2015 / ES6)

# Undefined
```undefined``` ist der Standard für Variablen denen noch kein Wert zugewiesen wurde. Ebenfalls ist der Default-Rückgabewert eine Funktion ```undefined```. 

# Null
Ähnlich wie ```undefined``` besitzt ```null``` ebenfalls nur einen Wert, muss allerdings explizit zugewiesen werden.

# Boolean
Boolean repräsentiert einen logischen Wert und kann ```true``` oder ```false``` annehmen.

# Number
```number``` kann sowohl natürliche als auch Gleitkommazahlen annehmen. Im Gegensatz zu vielen anderen Programmiersprachen gibt es **keinen** Integer-Datentyp. Zahlen die größer als ```2```<sup>```53```</sup> ```-1```, sowohl positiv als auch nagativ, werden abgeschnitten. Für den Wert ```0``` gibt es sowohl einen positiven ```+0```, als auch einen negativen ```-0``` Wert. In der Praxis hat das allerdings keine Auswirkung, da ```+0 === -0``` true ergibt. 

# String
Ein string repräsentiert ein Array mit 16-bit Elementen. Somit kann auf einen ```string``` auch über einen index zugegriffen werden. Das ist gut im ES-Transpilierungs-Beispiel zu sehen.

# Symbol
Der Datentyp ```symbol``` ist neu und existiert erst seit ES2015 / ES6. Symbols sind von natur aus einzigartig und lösen damit gewisse Probleme die an dieser Stelle nicht weiter erötert werden sollen.