ng-ab-datepicker
==========================

A datepicker for AngularJS styled to fit the Twitter Bootstrap standard design and is a11y and 508 compatible, works great with screen readers JAWS, NVDA and ChromeVox.

Screenshot:

![Screenshot](https://github.com/dadoadk/ng-ab-datepicker/blob/master/abdatepicker1.PNG?raw=true "Screenshot")


### Description:
This datepicker directive is using the plugin https://github.com/eureka2/ab-datepicker, a jQuery Plugin which allows user to select the date and use the screen reader for a11y. Reads every day, month, and year when using arrow keys.  

The calendar portion can be displayed in a numbers of ways, including as a popup in modal mode.

### Dependencies:
* [ab-datepicker](https://github.com/eureka2/ab-datepicker)
* [jQuery](https://jquery.com/)
* [Bootstrap](http://getbootstrap.com/)
* [AngularJS](https://angularjs.org/)

### Installation via Bower:

```
$ bower install ng-ab-datepicker --save
```

Download the ab-datepicker from https://github.com/eureka2/ab-datepicker

Add the ab-datepicker to your Index.html
```
<script src="bower_components/ab-datepicker/js/datepicker.js"></script>
<link href="bower_components/ab-datepicker/css/datepicker.css" rel="stylesheet" />
```

Add the directive to Index.html
```
<script src="bower_components/ng-ab-datepicker/ng-ab-datepicker.js"></script>
```

### Usage:

Add "ngAbDatepicker" to your modules list. Then you can use it like AngularJS input[text]:

```
<label for="FromDate"> Start Date</label>                                            
<p class="input-group">
    <input type="text" class="date form-control" id="FromDate" name="FromDate"
            placeholder="MM-dd-yyyy" 
            output-format="MM-dd-yyyy"
            ab-date-picker 
            ng-model="filter.fromDate"  />                                                
</p>
```

Additionally you can set the theme:

![Screenshot](https://github.com/dadoadk/ng-ab-datepicker/blob/master/abdatepicker.PNG?raw=true "Screenshot")


Also you can set the datepicker as modal, which makes the focus stay within the element untill date is selected or canceled:
![Screenshot](https://github.com/dadoadk/ng-ab-datepicker/blob/master/abdatepicker0.PNG?raw=true "Screenshot")


## Copyright and license

&copy; 2017 Dadoadk MIT
