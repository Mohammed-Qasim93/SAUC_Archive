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

    Route::get('export', [BooksController::class, 'export'])->name('books.export');
    Route::get('import', [BooksController::class, 'import'])->name('books.import');
    Route::get('export/show/{id}', [BooksController::class, 'exshow']);
    Route::put('export/update/{id}', [BooksController::class, 'exupdate']);
    Route::get('import/show/{id}', [BooksController::class, 'imshow']);
    Route::put('import/update/{id}', [BooksController::class, 'imupdate']);
    Route::delete('delete/{id}', [BooksController::class, 'delete'])->name('books.delete');
});

Route::middleware('admin')->group(function () {
    Route::get('users', [Controller::class, 'index'])->name('users.index');
    Route::get('users/edit', [Controller::class, 'edit'])->name('users.edit');
    Route::put('users/update', [Controller::class, 'update']);
    Route::delete('users/delete', [Controller::class, 'delete']);
});

