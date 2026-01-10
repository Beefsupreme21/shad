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

Route::get('/demo4', function () {
    return Inertia::render('demo4');
})->name('demo4');

Route::get('/8bit', function () {
    return Inertia::render('8bit');
})->name('8bit');

Route::get('/starlabs', function () {
    return Inertia::render('starlabs');
})->name('starlabs');
