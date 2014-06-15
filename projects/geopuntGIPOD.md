GIPOD
=====

![](images/geopuntGIPOD.png)
Tool om [GIPOD](http://www.agiv.be/gis/diensten/?catid=158) data te importeren. Via [Hinder op kaart](http://www.geopunt.be/hinder-in-kaart) of de [publieke webservice](http://gipod.api.agiv.be/) kan iedereen de data raadplegen. Deze tool gaat deze data ophalen via de publieke webservice voor gebruik in analyses en cartografie. 

Je kan kiezen uit verschillende filter opties, selecteer een waarde uit de keuzelijst:

- eigenaar
- stad
- provincie
- type manifestatie(enkel bij manifestaties)
- startdatum (mininaal huidige datum)
- einddatum (altijd groter dan startdatum)
- beperken tot huidig kaart extend

Let op voor conficten, provincie "Antwerpen" en stad "Gent" zullen geen resultaat opleveren.

Je kan opslaan naar verschillende geografische formaten zoals shapefile en KML (google earth) en naar CSV-bestanden die je kan openen in excel of een andere spreadsheet.

![](images/geopuntGIPOD.gif "GIPOD data laden in QGIS")

####Wat is GIPOD

Het GIPOD biedt een centraal platform om informatie over wegenwerken, manifestaties en andere activiteiten op het openbare domein op voorhand in te geven en te beheren. Op die manier is de hinder vooraf gekend, kunnen werken op elkaar worden afgestemd en kan voor omleidingen worden gezorgd. Bedoeling is de overlast op de openbare weg tot een minimum te beperken.  GIPOD is een intiatief van de Vlaamse Overheid, in beheer in bij het Agendschap voor Geografische Informatie Vlaanderen (AGIV).
