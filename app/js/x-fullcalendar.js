import $ from "jquery";
import "fullcalendar";
import Axios from "axios";
import Events from "./events";




$(function () {
    $("#calendar").fullCalendar({
        navLinks: true,
        customButtons: {
            kaartButton: {
                text: "kaart",
                click: function () {

                    $("#calendar").fullCalendar("changeView", "custom");


                }
            },

        },
        header: {
            left: "prev,next, today",
            center: "title",
            right: "kaartButton, month ,agendaWeek ,agendaDay, listWeek"
        },
        events: Events,
    });




    var FC = $.fullCalendar; // a reference to FullCalendar's root namespace
    var View = FC.View;      // the class that all views must inherit from
    var CustomView;          // our subclass

    CustomView = View.extend({ // make a subclass of View

        initialize: function () {
            // called once when the view is instantiated, when the user switches to the view.
            // initialize member variables or do other setup tasks.
        },

        render: function () {
            // responsible for displaying the skeleton of the view within the already-defined
            // this.el, a jQuery element.

            this.el.html("<div id='map'></div>");
            initMap(Events);
            //$("#scripts").append("<script id='map-script' src='https://maps.googleapis.com/maps/api/js?key=AIzaSyCBFB2BlS2_z83LTCs6aRlyMoet6vR9-0k&callback=initMap' async defer></script>");


        },

        setHeight: function (height, isAuto) {
            // responsible for adjusting the pixel-height of the view. if isAuto is true, the
            // view may be its natural height, and `height` becomes merely a suggestion.
        },

        renderEvents: function (events) {
            // reponsible for rendering the given Event Objects
        },

        destroyEvents: function () {
            // responsible for undoing everything in renderEvents
        },

        renderSelection: function (range) {
            // accepts a {start,end} object made of Moments, and must render the selection
        },

        destroySelection: function () {
            // responsible for undoing everything in renderSelection

        },
        destroy: function () {

        }
    });

    FC.views.custom = CustomView;
});