'use strict';

const post = {
    bindings: {
        post: '<'
    },
    templateUrl: 'post.html',
}

angular
    .module('app')
    .component('post', post);