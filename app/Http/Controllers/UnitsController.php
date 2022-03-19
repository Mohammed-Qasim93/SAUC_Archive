<?php

namespace App\Http\Controllers;

use App\Models\Units;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UnitsController extends Controller
{
    public function index()
    {
        return Inertia::render('Units/Index', [
            'units' => Units::all()
        ]);
    }

    public function create()
    {
        return Inertia::render('Units/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|unique:units,name'
        ],[
            'name.required' => 'يجب ادخال اسم الوحدة او القسم',
            'name.string' => 'الاسم المدخل غير صالح',
            'name.unique' => 'اسم الوحدة\القسم موجود فعلاً',
        ]);
        return Redirect::route('units.index')->with('success', ['icon' => 'success' ,'title' => 'نجحت العملية', 'message' => 'تم انشاء وحدة\قسم جديد']);
    }

    public function show(Units $units)
    {
        //
    }

    public function edit(Units $units)
    {
        return Inertia::render('Units/Edit', [
            'unit' => $units
        ]);
    }

    public function update(Request $request, $id)
    {
        $unit = Units::findOrFail($id);

        $request->validate([
            'name' => 'required|string|unique:units,name',
        ],[
            'name.required' => 'يجب ادخال اسم الوحدة\القسم',
            'name.string' => 'الاسم المدخل غير صالح',
            'name.unique' => 'اسم الوحدة\القسم موجود فعلاً',
        ]);

        if($request->name !== $unit->name){
            $unit->update([
                'name' => $request->name
            ]);
            return Redirect::route('units.index')->with('success', ['icon' => 'success' ,'title' => 'نجحت العملية', 'message' => 'تم تحديث البيانات']);
        }
        return Redirect::back();
    }

    public function destroy($id)
    {
        $unit = Units::findOrFail($id);
        $unit->delete();
        return Redirect::route('units.index')->with('success', ['icon' => 'success' ,'title' => 'نجحت العملية', 'message' => 'تم حذف الوحدة\القسم']);
    }
}
