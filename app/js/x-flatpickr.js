import flatpickr from "flatpickr";
import { Dutch } from "flatpickr/dist/l10n/nl.js";
import $ from "jquery";

let start = null;
let end = null;

flatpickr("#start_id", {
    "locale": Dutch,
    static: true,
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    //enableSeconds: true,
    time_24hr: true,
    minDate: "8:00",
    maxDate: "20:00",

    onChange: function (selectedDates, dateStr, instance) {
        start = dateStr;
    },

});

flatpickr("#end_id", {
    "locale": Dutch,
    static: true,
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    //enableSeconds: true,
    time_24hr: true,
    minDate: "8:00",
    maxDate: "20:00",

    onChange: function (selectedDates, dateStr, instance) {
        end = dateStr;
    },
});

$("#form_id").submit(function (event) {
    console.log("start : " + start);
    console.log("end : " + end);
    event.preventDefault();
});
