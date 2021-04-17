let app = angular.module("SingersApp", []);
app.controller("SingerController",function($scope){
    $scope.singers = [
        {"pic": "assets/1.png", "name": "beyonce", "gender": "female", "quality": "assets/like.jpg"},
        {"pic": "assets/2.png", "name": "lady gaga", "gender": "female", "quality": "assets/dislike.jpg"},
        {"pic": "assets/3.png", "name": "taylor swift", "gender": "female", "quality": "assets/like.jpg"},
        {"pic": "assets/4.png", "name": "bruno mars", "gender": "male", "quality": "assets/like.jpg"},
        {"pic": "assets/5.png", "name": "ariana grande", "gender": "female", "quality": "assets/dislike.jpg"},
        {"pic": "assets/6.png", "name": "katy perry", "gender": "female", "quality": "assets/dislike.jpg"},
        {"pic": "assets/7.png", "name": "justin bieber", "gender": "male", "quality": "assets/dislike.jpg"},
        {"pic": "assets/8.png", "name": "selena gomez", "gender": "female", "quality": "assets/like.jpg"},
    ];
});