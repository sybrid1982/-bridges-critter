'use strict';

const post = {
    bindings: {
        post: '<'
    },
    templateUrl: 'post/post.html',
}

angular
    .module('app')
    .component('post', post);