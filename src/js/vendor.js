import 'core-js/stable';
import 'regenerator-runtime/runtime';
import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import objectFitImages from 'object-fit-images';
import 'slick-carousel';
import 'bootstrap';
import introJs from 'introjs';






import * as FilePond from 'filepond';


import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { Fancybox } from "@fancyapps/ui";
// import objectFitVideos from 'object-fit-videos';

svg4everybody();
objectFitImages();

Fancybox.bind('[data-fancybox]', {
    Thumbs: false,
    Toolbar: false,

    Image: {
        zoom: false,
        click: false,
        wheel: "slide",
    },
});


introJs().setOptions({
    nextLabel: 'Вперед',
    prevLabel: 'Назад',
    doneLabel: 'Закончили!',

}).start()





// Create a multi file upload component
// const pond = FilePond.create({
//     multiple: true,
//     name: 'filepond'
// });

// // Add it to the DOM
// document.body.appendChild(pond.element);




// console.log(pond)

// document.body.appendChild(pond.element);
FilePond.registerPlugin(FilePondPluginImagePreview);
FilePond.parse(document.body);

window.$ = $;
window.jQuery = $;
window.objectFitImages = objectFitImages;
// window.objectFitVideos = objectFitVideos;

require('ninelines-ua-parser');
