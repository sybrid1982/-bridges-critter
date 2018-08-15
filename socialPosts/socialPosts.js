'use strict';

const socialPosts = {
    templateUrl: `socialPosts/socialPosts.html`,
    controller: function() {
        const vm = this;
        vm.posts = [
            {
                title: 'Dog',
                post: 'Bark bark bark bark bark'
            },
            {
                title: 'Cat',
                post: 'Mrrrrraoooooooooooooow'
            },
            {
                title: 'Fish',
                post: 'Glubglubglubglubglubglub'
            },
            {
                title: 'Syd',
                post: `I once saw a cat and he was really nice except then he went away and he joined the cat army which isn't real except I thought it was because I wanted to believe in the cat army and it took me four or five attempts to spell believe the first time here because I wanted to spell it starting with 'bl' which is super weird like you'd have to pronounce that like "b'lieve" like you were then going to tip a fedora at it and that's not good and anyways I think I've written enough to test how this handles big posts so yay.`
            }
        ];
        vm.onSubmit = (post) => {
            vm.posts.unshift(post);
            vm.isWritingPost=false;
        }
        vm.onCancel = () => {
            vm.isWritingPost=false;
        }
    }
}

angular
    .module('app')
    .component('socialPosts', socialPosts);