<?php

namespace App\Http\Controllers;

use App\Models\Books;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BooksController extends Controller
{
    public function export(){
        return Inertia::render('Books/Index', [
            'books' => Books::where('status', 'صادر')->get(),
        ]);
    }
    public function import(){
        return Inertia::render('Books/Index', [
            'books' => Books::where('status', 'وارد')->get(),
        ]);
    }

    public function create(){
        return Inertia::render('Books/Create');
    }

    public function store(Request $request){
        $request->validate([
            'name' => 'required|string',
            'desc' => 'nullable|string|min:4',
            'status' => 'required|string',
        ]);

        Books::create([
            'name' => $request->name,
            'desc' => $request->desc,
            'status' => $request->status,
        ]);

        return Redirect::route('books.index')->with('success', ['icon' => 'success' ,'title' => 'نجحت العملية', 'message' => 'تمت الاضافة']);
    }

    public function edit($id){
        return Inertia::render('Books/Edit', [
            'book' => Books::findOrFail($id),
        ]);
    }

    public function up($id, Request $request){
        $book = Books::findOrFail($id);
        if(($request->name != $book->name) || ($request->desc != $book->desc) || ($request->status != $book->status)){
            if($request->name != $book->name){
                $request->validate([
                    'name' => 'required|string',
                ],[
                    'name.required' => 'يجب ادخال الاسم',
                    'name.string' => 'الاسم غير صحيح',
                ]);
            }
            if($request->desc != $book->desc){
                $request->validate([
                    'desc' => 'nullable|string|min:4',
                ],[
                    'desc.min' => 'يجب ان يكون الوصف على الاقل 4 حروف',
                ]);
            }
            if($request->status != $book->status){
                $request->validate([
                    'status' => 'required|string',
                ],[
                    'status.required' => 'يجب تحديد الحالة',
                    'status.string' => 'الحالة غير صحيحة',
                ]);
            }
            $book->update([
                'name' => $request->name,
                'desc' => $request->desc,
                'status' => $request->status,
            ]);
            return Redirect::route('books.index')->with('success', ['icon' => 'success' ,'title' => 'نجحت العملية', 'message' => 'تم التعديل']);
        }
        return Redirect::back();
    }

    public function delete($id){
        $book = Books::findOrFail($id);
        $book->delete();
        return Redirect::route('books.index')->with('success', ['icon' => 'success' ,'title' => 'نجحت العملية', 'message' => 'تم الحذف']);
    }

}
