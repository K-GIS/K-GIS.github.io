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

Navigatie kan door op het handje aan te klikken en de kaart dan te verslepen. In en uitzoomen kan met het muiswiel of met zoom+ en zoom-  knoppen. Er zijn ook knoppen om te zomen naar kaartlaag, selectie of de hele kaart. De zoom knoppen met peiltje naar link of recht laten toe terug te keren de vorige positie. Voor de rest zijn er ook nog knoppen om je huidige locatie op te bookmarken en de kaartview te verversen.  

![][zoomknoppen]

Meer info: https://docs.qgis.org/testing/en/docs/user_manual/introduction/qgis_gui.html

Lagen toevoegen
--------------
Die kan via het browser-paneel of via de knap *"databronnen beheren"*. ![][knop_databron]

In het paneel *"browwser"* of venster *"databronnen beheren"*, zie je een oplijsting van de verschilende soorten databronnen ondersteunt door QGIS. Voor GIS-bestanden zoals geopackage en Shapefile, kan je naar de juist de locatie browseren en de het bestand toevoegen door erop te dubbelklikken of door op de *"lagen toevoegen"* knop te drukken. 

![][venster_databronnen]

Meer info: https://docs.qgis.org/testing/en/docs/user_manual/introduction/getting_started.html#sample-session-loading-raster-and-vector-layers

Lagen aanmaken
--------------

De werkbalk *"databronnen beheren"* bevat knoppen om nieuwe lagen aan te maken: ![][new_laag]

Je kunt nieuwe van het type: geopackage, shapefile en spatialite, er is een 4-de type de in memory "tijdelijke tekenlaag" die verdwijnt als QGIS afsluit. je kunt ook nieuwe database-lagen maken via de database interface. 

![][new_laag_maken]

Meer info: https://docs.qgis.org/testing/en/docs/training_manual/create_vector_data/create_new_vector.html

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

Meer info: https://docs.qgis.org/testing/en/docs/user_manual/working_with_vector/editing_geometry_attributes.html#digitizing-an-existing-layer

Objecten kopieren van 1 laag naar de andere
-------------------------------------------
Je kunt tijdens het bewerken van lagen, gegevens uit een andere laag kopieren en deze dan plakken in een een andere laag.
Als er attributen zijn met zelfde naam en type worden die ook mee gekopieerd. 
Je moet hiervoor eerste de laag selecteren in het lagen-paneel en dan op **CTRL-C** of op de **KOPIE-knop** op de digitaliseer-toolbalk klikken. 
Daarna selecteer je de bewerkbare laag waarnaar je wilt kopieren en klik je op **CTRL-V** of op de **PLAK-knop** op de digitaliseer-toolbalk.

![][copyLayer]

Meer info: https://docs.qgis.org/testing/en/docs/user_manual/working_with_vector/editing_geometry_attributes.html#cutting-copying-and-pasting-features

Kaarten opslaan
---------------

Als je een eenvoudige afbeelding (bv voor in een email of word-document) nodig hebt kan je die via de menubalk: **Project > Kaart als Afbeeldig opslaan ...**

Dan krijg je een venster waarin de grootte van de output afbeeldig kan opgeven en het extend van de kaart.
Als gewoon wilt opslaan wat je op dat moment op de kaart ziet klik je op **Kaartvenster-extent**.
Je kunt dan opslaan naaar klembord (om te plakken in email/word) of een bestand via **Save**.

![][save_map]

Complexe kaartafdrukken maken kan met de layout manager op de menubalk: **Project > Layout manager**
Je kunt een nieuwe blanco layout maken met "Create..." of een bestaande selecteren uit de lijst.

![][layoutManager]

De locatie van de kaart die wordt weergegeven in de kaartlayout, kan worden ingestelt op je huidge kaartbeeld, 
door op de kaart te selecteren in de layoutview en dan in het tabblad: 
**item-eigenschappen ->  Bereiken -> Knop: Aanpassen aan kaartbereik** aan te te klikken.  
De legende kan worden bijgewerkt door het selecteren in de kaartlayout en dan in het tabblad: 
**item-eigenschappen -> Items voor legende** de aanpassingen te doen. 
Je kunt een laagnaam wijzigen in de legende door er dubbel op te klikken, 
door rechts te klikken kan je een laag op verborgen zetten, zodat die niet meer voorkomt in de legende. 

![][kaartLayout]

Meer info: https://docs.qgis.org/testing/en/docs/training_manual/map_composer/map_composer.html 


[interface]: interface.png "De QGIS-interface"
[knop_databron]: knop_databron.png "De knop databronnen beheren"
[venster_databronnen]: venster_databronnen.png "Venster databronnen beheren"
[zoomknoppen]: zoomknoppen.png "Knoppen voor kaartnavigatie"
[data_bewerken]: data_bewerken.gif "Data bewerken"
[new_laag]: new_laag.png "Knoppen nieuwe laag maken"
[new_laag_maken]: new_laag_maken.gif "Een nieuwe laag maken"
[save_map]: save_map.png "Een kaart opslaan"
[copyLayer]: copyLayer.gif "Laag kopieren naar andere laag"
[layoutManager]: layoutManager.png "Layoutmanager"
[kaartLayout]: kaartLayout.gif "De kaartlayout bewerken"
