<?php

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/inicio', 'InicioController@index');

Route::get('/users', function(){
  $users=App\User::get();
  return $users;
});

Route::resource('tasks', 'TaskController',['except'=>'show','create','edit']);
