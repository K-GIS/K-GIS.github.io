
var resizePID;

function clearResize() {
    clearTimeout(resizePID);
    resizePID = setTimeout(function() { adjustSlides(); }, 100);
 }

if (!window.addEventListener) {
    window.attachEvent("resize", function load(event) {
        clearResize();
    });
 }
else {
    window.addEventListener("resize", function load(event) {
        clearResize();
    });
 }

function adjustSlides() {
    var container = document.getElementById("slides_container"),
        slide = document.querySelectorAll('.selected_slide')[0];

    if (slide) {
        if (slide.offsetHeight+169+40+80 >= window.innerHeight) {
        container.style.bottom = "80px";

        var h = container.offsetHeight;

        slide.style.height = h-169+"px";
        slide.classList.add("scrolled");
        } 
        else {
        container.style.bottom = "auto";
        container.style.minHeight = "0";

        slide.style.height = "auto";
        slide.classList.remove("scrolled");
        }
    }
  }

var resizeAction = O.Action(function() {

    function imageLoaded() {
        counter--;

        if (counter === 0) {
        adjustSlides();
        }
    }
    var images = $('img');
    var counter = images.length;

    images.each(function() {
        if (this.complete) {
        imageLoaded.call( this );
        } else {
        $(this).one('load', imageLoaded);
        }
    });
    });

function click(el) {
    var element = O.Core.getElement(el);
    var t = O.Trigger();

    function click() {
        t.trigger();
    }

    if (element) element.onclick = click;

    return t;
 }
 
O.Template({
 init: function() {
        var seq = O.Triggers.Sequential();

        var baseurl = this.baseurl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osm = L.tileLayer(baseurl,   {noWrap:true} )
        var sat =  L.tileLayer( 
        "http://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" , 
        {noWrap:true});
        var topo = L.tileLayer(  "http://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", 
        {noWrap:true});
        var map = this.map = L.map('map' ).setView([ 41.32781, 19.81853], 9);
        
        var basemap = this.basemap = osm.addTo(map);
        
        L.Control.geocoder(
            { placeholder: 'Zoek een plaats', errorMessage: 'Geen adres gevonden',
              geocoder: new L.Control.Geocoder.Google , collapsed: true
            }
        ).addTo(map);
        
        var baseLayers = {
                "Kaart": osm,
                "Topografie" : topo,
                "Sateliet": sat
        };
        L.control.layers(baseLayers).addTo(map);

        
        // enanle keys to move
        O.Keys().on('map').left().then(seq.prev, seq)
        O.Keys().on('map').right().then(seq.next, seq)

        click(document.querySelectorAll('.next')).then(seq.next, seq)
        click(document.querySelectorAll('.prev')).then(seq.prev, seq)

        var slides = O.Actions.Slides('slides');
        var story = O.Story()

        this.story = story;
        this.seq = seq;
        this.slides = slides;
        this.progress = O.UI.DotProgress('dots').count(0);
 },

 update: function(actions) {
        var self = this;

        if (!actions.length) return;

        this.story.clear();

        if (actions.global.vizjson && !this.cartoDBLayer) {
        if (!this.created) { // sendCode debounce < vis loader
            cdb.vis.Loader.get(actions.global.vizjson, function(vizjson) {
            self.map.fitBounds(vizjson.bounds);

            cartodb.createLayer(self.map, vizjson)
                .done(function(layer) {
                self.cartoDBLayer = layer;

                var sublayer = layer.getSubLayer(0),
                    layer_name = layer.layers[0].options.layer_name,
                    filter = actions.global.cartodb_filter ? " WHERE "+actions.global.cartodb_filter : "";

                sublayer.setSQL("SELECT * FROM "+layer_name+filter)

                self.map.addLayer(layer);

                self._resetActions(actions);
                }).on('error', function(err) {
                console.log("some error occurred: " + err);
                });
            });

            this.created = true;
        }

        return;
        }

        this._resetActions(actions);
 },

_resetActions: function(actions) {
        // update footer title and author
        var title_ = actions.global.title === undefined ? '' : actions.global.title,
            author_ = actions.global.author === undefined ? 'Using' : 'Door '+actions.global.author ;

        document.getElementById('title').innerHTML = title_;
        document.getElementById('author').innerHTML = author_;
        document.title = title_ + " | " + author_ ;

        var sl = actions;

        document.getElementById('slides').innerHTML = ''
        this.progress.count(sl.length);

        // create new story
        for(var i = 0; i < sl.length; ++i) {
        var slide = sl[i];
        var tmpl = "<div class='slide' style='diplay:none'>";

        tmpl += slide.html();
        tmpl += "</div>";
        document.getElementById('slides').innerHTML += tmpl;

        this.progress.step(i).then(this.seq.step(i), this.seq)

        var actions = O.Parallel(
            this.slides.activate(i),
            slide(this),
            this.progress.activate(i),
            resizeAction
        );

        actions.on("finish.app", function() {
            adjustSlides();
        });

        this.story.addState(
            this.seq.step(i),
            actions
        )
        }

        this.story.go(this.seq.current());
 },

 changeSlide: function(n) {
        this.seq.current(n);
    }
 });