<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/demo', function () {
    return Inertia::render('demo');
})->name('demo');

Route::get('/demo2', function () {
    return Inertia::render('demo2');
})->name('demo2');

Route::get('/demo3', function () {
    return Inertia::render('demo3');
})->name('demo3');
