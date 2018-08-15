'use strict';

const postForm = {
    templateUrl: 'postForm.html',
    bindings: {
        onSubmit: '&'
    }
}

function FormExpand() {
    return {
        restrict: 'A',
        replace: false,
        link: ($scope, $element, $attrs) => {
            $element.on('focus', function() {
                $element.css("width", "100%");
            });
            $element.on('blur', function() {
                $element.css('width', '90%');
            })
        }
    }
}

angular.module('app').component('postForm', postForm);
angular.module('app').directive("formExpand", FormExpand);