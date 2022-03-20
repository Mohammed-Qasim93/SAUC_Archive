<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\BooksController;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;

Route::get('register', [RegisteredUserController::class, 'create'])
            ->name('register');

Route::post('register', [RegisteredUserController::class, 'store']);
Route::middleware('guest')->group(function () {

    Route::get('login', [AuthenticatedSessionController::class, 'create'])
                ->name('login');

    Route::post('login', [AuthenticatedSessionController::class, 'store']);
});

Route::middleware('auth')->group(function () {
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
                ->name('logout');
});

Route::middleware('admin')->group(function () {
    Route::get('users', [Controller::class, 'index'])->name('users.index');
    Route::get('users/edit', [Controller::class, 'edit'])->name('users.edit');
    Route::put('users/update', [Controller::class, 'update']);
    Route::delete('users/delete', [Controller::class, 'delete']);
    
    Route::get('index', [BooksController::class, 'index'])->name('books.index');
    Route::get('create', [BooksController::class, 'create'])->name('books.create');
    Route::put('up', [BooksController::class, 'update'])->name('books.update');
    Route::post('store', [BooksController::class, 'store'])->name('books.store');
    Route::delete('delete', [BooksController::class, 'delete'])->name('books.delete');
});

