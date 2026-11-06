<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/ventes', function () {
    return [
        ['mois' => 'Janvier', 'ventes' => 186],
        ['mois' => 'Février', 'ventes' => 305],
        ['mois' => 'Mars', 'ventes' => 237],
        ['mois' => 'Avril', 'ventes' => 250],
        ['mois' => 'Mais', 'ventes' => 260],
    ];
});

Route::get('/totVentes', function () {
    return [
        ['total' => 10000],
    ];
});

Route::get('/totClients', function () {
    return [
        ['total' => 100],
    ];
});

Route::get('/totCommandes', function () {
    return [
        ['total' => 60],
    ];
});
Route::get('/totRevenus', function () {
    return [
        ['total' => 50],
    ];
});
