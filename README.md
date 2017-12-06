ng-ab-datepicker
==========================

A datepicker for AngularJS styled to fit the Twitter Bootstrap standard design and is a11y and 508 compatible, works great with screen readers JAWS, NVDA and ChromeVox.

[Demo](https://cdn.rawgit.com/dadoadk/ng-ab-datepicker/ace5698f/Index.html)

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

The "ab-datepicker" plugin will be downloaded from https://github.com/eureka2/ab-datepicker

Add the ab-datepicker to your Index.html
```html
<script src="bower_components/ab-datepicker/js/datepicker.js"></script>
<link href="bower_components/ab-datepicker/css/datepicker.css" rel="stylesheet" />
```

Add the directive to Index.html
```html
<script src="bower_components/ng-ab-datepicker/ng-ab-datepicker.js"></script>
```

### Usage:

Add "ngAbDatepicker" to your modules list. Then you can use it like AngularJS input[text]:

```html
<label for="FromDate"> Start Date</label>                                            
<p class="input-group">
    <input type="text" class="date form-control" id="FromDate" name="FromDate"
            placeholder="MM-dd-yyyy" 
            output-format="MM-dd-yyyy"
            ab-date-picker 
            ng-model="filter.fromDate"  />                                                
</p>
```
It is necessary to have the <label> element with "for=" attribute, so is the "id" attribute on the <input> element.

### Configuration:

Additionally you can set the theme:
![Screenshot](https://github.com/dadoadk/ng-ab-datepicker/blob/master/abdatepicker.PNG?raw=true "Screenshot")


Also you can set the datepicker as modal, which makes the focus stay within the element untill date is selected or canceled:
![Screenshot](https://github.com/dadoadk/ng-ab-datepicker/blob/master/abdatepicker0.PNG?raw=true "Screenshot")

Please refer to the ab-datepicker repository for more options. 

The directive is set in such way that it can be modified. You can add all the attributes to the scope of the directive for purpose of configuring each individual datepicker.

```javascript
    angular.element(element).datepicker({
        outputFormat: scope.outputFormat,//all options can be added to the scope like this
        theme: 'default',//blue, 
        gainFocusOnConstruction: false,
        modal: false,
        closeButtonTitle: "Cancel"
    }); 
```

## Copyright and license

&copy; 2017 Dadoadk MIT