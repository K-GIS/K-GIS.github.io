Basis gebruik QGIS-3
====================

QGIS installeren op widows
---------------
 - Je kan deze installeren met deze tool: http://download.osgeo.org/osgeo4w/osgeo4w-setup-x86_64.exe 
 - Kies voor "Express Desktop Install" --> QGIS en GDAL aanvinken. --> Next --> ...
 - QGIS is daarna geistalleerd, je vindt die terug achtter de startknop windows

De standaard interface 
----------------------

De QGIS interface bestaat ook werkalken en panelen rond een kaart. 
Extra toolblaken kan je toevoegen via, door rechts te klikken op lege ruimte naast een toolbalk.
Bovenaan heb je ook nog een menubalk en onderaan een status balk met centrum van de kaart, schaal, rotatie, ...
1 van de panelen zijn de *'lagen'*, waarin alle kaartlagen toegevoegd aan de kaart kan zien en bewerken. 
Het *'browser'*-paneel laat toe om nieuwe data aan de kaart toe te voegen.

![][interface]

Lagen toevoegen
--------------
Die kan via het browser-paneel of via de knap *"databronnen beheren"*. ![][knop_databron]

In het paneel *"browwser"* of venster *"databronnen beheren"*, zie je een oplijsting van de verschilende soorten databronnen ondersteunt door QGIS. Voor GIS-bestanden zoals geopackage en Shapefile, kan je naar de juist de locatie browseren en de het bestand toevoegen door erop te dubbelklikken of door op de *"lagen toevoegen"* knop te drukken. 

![][venster_databronnen]

Lagen aanmaken
--------------


Lagen bewerken
--------------
Je kunt enkel bepaalde types van lagen bewerken zoals geopackage, shapefile of database-lagen.
Als je lagen wilt kunnen bewerken heb kan best de werkbalken: *"Digitaliseren"* en *"Attributen"* toevoegen. 
ALs je een laag wilt bewerken hebt moet je die selecteren in het lagen-paneel en dan op de knop bewerken klikken.
Dan kan je bevoorbeeld een nieuwe record toevoegen via de knop +"Nieuwe Polygoon"* (of punt/lijn). 
Je kunt tekenen door op de kaart te klikken en tekenen beeïndigen door rechts te klikken.
Nadat je een record hebt toegevoegd, komt er een formulier om de attribuut waarden in te geven.
Een geometrie van een object kan je  met de "Gereedschap punten" knop. 
Je attributen werken met de Infoknop of in de attribuuttabel.

![][data_bewerken]

Kaarten opslaan
---------------



[interface]: interface.png "De QGIS-interface"
[knop_databron]: knop_databron.png "De knop databronnen beheren"
[venster_databronnen]: venster_databronnen.png "Venster databronnen beheren"
[data_bewerken]: data_bewerken.gif "Data bewerken"

