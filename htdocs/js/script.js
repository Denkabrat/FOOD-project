import  tabs       from './modules/tabs';
import  modal      from './modules/modal';
import  timer      from './modules/timer';
import  cards      from './modules/cards';
import  calc       from './modules/calc';
import  forms      from './modules/forms';
import  slider     from './modules/slider';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', function() {

    const modalTimerId = setTimeout(()=> openModal('./modal',modalTimerId), 300000);
        

          tabs('.tabheader__item','.tabcontent','.tabheader__items','tabheader__item_active');
          modal('[data-modal]','.modal',modalTimerId);
          forms('form',modalTimerId);
          slider({
             container:'.offer__slider',
             nextArrow:'.offer__slider-next',
             totalCounter:'#total',
             currCounter:'#current',
             prevArrow:'.offer__slider-prev',
             slide:'.offer__slide'
          });
          cards();
          timer('.timer','2022-12-31');
          calc();
          
});




